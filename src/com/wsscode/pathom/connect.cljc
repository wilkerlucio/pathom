(ns com.wsscode.pathom.connect
  #?(:cljs [:require-macros com.wsscode.pathom.connect])
  (:require [clojure.spec.alpha :as s]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.parser :as pp]
            [com.wsscode.pathom.trace :as pt]
            [clojure.math.combinatorics :as combo]
            [#?(:clj  com.wsscode.common.async-clj
                :cljs com.wsscode.common.async-cljs)
             :as p.async
             :refer [let-chan go-promise go-catch <? <?maybe <!maybe]]
            [clojure.set :as set]
            [clojure.core.async :as async :refer [<! >! go]]))

(s/def ::sym symbol?)
(s/def ::sym-set (s/coll-of ::sym :kind set?))
(s/def ::attribute keyword?)
(s/def ::attributes-set (s/coll-of ::attribute :kind set?))

(s/def ::idents ::attributes-set)
(s/def ::input ::attributes-set)
(s/def ::out-attribute (s/or :plain ::attribute :composed (s/map-of ::attribute ::output)))
(s/def ::output (s/or :attribute-list (s/coll-of ::out-attribute :kind vector? :min-count 1)
                      :union (s/map-of ::attribute ::output)))
(s/def ::params ::output)

(s/def ::resolver-data (s/keys :req [::sym] :opt [::input ::output ::cache?]))
(s/def ::resolver-weights (s/map-of ::sym number?))

(s/def ::index-resolvers (s/map-of ::sym ::resolver-data))

(s/def ::io-map (s/map-of ::attribute ::io-map))
(s/def ::index-io (s/map-of ::attributes-set ::io-map))

(s/def ::index-oir (s/map-of ::attribute (s/map-of ::attributes-set (s/coll-of ::sym :kind set?))))

(s/def ::indexes (s/keys :opt [::index-resolvers ::index-io ::index-oir ::idents ::mutations]))

(s/def ::dependency-track (s/coll-of (s/tuple ::sym-set ::attributes-set) :kind set?))

(s/def ::resolver-dispatch ifn?)
(s/def ::mutate-dispatch ifn?)

(s/def ::mutation-join-globals (s/coll-of ::attribute))

(defn resolver-data
  "Get resolver map information in env from the resolver sym."
  [env-or-indexes sym]
  (let [idx (cond-> env-or-indexes
              (contains? env-or-indexes ::indexes)
              ::indexes)]
    (get-in idx [::index-resolvers sym])))

(defn mutation-data
  "Get mutation map information in env from the resolver sym."
  [env-or-indexes sym]
  (let [idx (cond-> env-or-indexes
              (contains? env-or-indexes ::indexes)
              ::indexes)]
    (get-in idx [::mutations sym])))

(defn- flat-query [query]
  (if (map? query)
    (apply concat (map flat-query (vals query)))
    (->> query p/query->ast :children (mapv :key))))

(defn- merge-io-attrs [a b]
  (cond
    (and (map? a) (map? b))
    (merge-with merge-io-attrs a b)

    (map? a) a
    (map? b) b

    :else b))

(defn- normalize-io [output]
  (if (map? output) ; union
    (let [unions (into {} (map (fn [[k v]]
                                 [k (normalize-io v)]))
                       output)
          merged (reduce merge-io-attrs (vals unions))]
      (assoc merged ::unions unions))
    (into {} (map (fn [x] (if (map? x)
                            (let [[k v] (first x)]
                              [k (normalize-io v)])
                            [x {}])))
          output)))

(defn merge-io
  "Merge ::index-io maps."
  [a b]
  (merge-with merge-io-attrs a b))

(defn merge-oir
  "Merge ::index-oir maps."
  [a b]
  (merge-with #(merge-with into % %2) a b))

(defmulti index-merger
  "This is an extensible gateway so you can define different strategies for merging different
  kinds of indexes."
  (fn [k _ _] k))

(defmethod index-merger ::index-io [_ ia ib]
  (merge-io ia ib))

(defmethod index-merger ::index-oir [_ ia ib]
  (merge-oir ia ib))

(defmethod index-merger :default [_ a b]
  (cond
    (and (set? a) (set? b))
    (into a b)

    (and (map? a) (map? b))
    (merge a b)

    :else
    b))

(defn merge-indexes [ia ib]
  (reduce-kv
    (fn [idx k v]
      (if (contains? idx k)
        (update idx k #(index-merger k % v))
        (assoc idx k v)))
    ia ib))

(defn add
  ([indexes sym] (add indexes sym {}))
  ([indexes sym sym-data]
   (let [{::keys [input output] :as sym-data} (merge {::sym   sym
                                                      ::input #{}}
                                                     sym-data)]
     (let [input' (if (and (= 1 (count input))
                           (contains? (get-in indexes [::index-io #{}]) (first input)))
                    #{}
                    input)]
       (merge-indexes indexes
         (cond-> {::index-resolvers {sym sym-data}
                  ::index-io        {input' (normalize-io output)}
                  ::index-oir       (reduce (fn [indexes out-attr]
                                              (cond-> indexes
                                                (not= #{out-attr} input)
                                                (update-in [out-attr input] (fnil conj #{}) sym)))
                                            {}
                                            (flat-query output))}
           (= 1 (count input'))
           (assoc ::idents #{(first input')})))))))

(s/fdef add
  :args (s/cat :indexes (s/or :index ::indexes :blank #{{}})
               :sym ::sym
               :sym-data (s/? (s/keys :opt [::input ::output])))
  :ret ::indexes)

(defn add-mutation
  [indexes sym data]
  (assoc-in indexes [::mutations sym] (assoc data ::sym sym)))

(s/fdef add-mutation
  :args (s/cat :indexes (s/or :index ::indexes :blank #{{}})
               :sym ::sym
               :sym-data (s/? (s/keys :opt [::params ::output])))
  :ret ::indexes)

(defn sort-resolvers [{::p/keys [request-cache]} resolvers e]
  (->> resolvers
       (sort-by (fn [s]
                  (if request-cache
                    (if (contains? @request-cache [s e])
                      0
                      1)
                    1)))))

(defn pick-resolver [{::keys [indexes dependency-track]
                      :as    env}]
  (let [k (-> env :ast :key)
        e (p/entity env)]
    (if-let [attr-resolvers (get-in indexes [::index-oir k])]
      (let [r (->> attr-resolvers
                   (map (fn [[attrs sym]]
                          (let [missing (set/difference attrs (set (keys e)))]
                            {:sym     sym
                             :attrs   attrs
                             :missing missing})))
                   (sort-by (comp count :missing)))]
        (loop [[{:keys [sym attrs]} & t :as xs] r]
          (if xs
            (if-not (contains? dependency-track [sym attrs])
              (let [e       (try
                              (->> (p/entity (-> env
                                                 (assoc ::p/fail-fast? true)
                                                 (update ::dependency-track (fnil conj #{}) [sym attrs])) attrs)
                                   (p/elide-items p/break-values))
                              (catch #?(:clj Throwable :cljs :default) _ {}))
                    missing (set/difference (set attrs) (set (keys e)))]
                (if (seq missing)
                  (recur t)
                  (let [e (select-keys e attrs)]
                    {:e e
                     :s (first (sort-resolvers env sym e))}))))))))))

(s/fdef pick-resolver
  :args (s/cat :env (s/keys :req [::indexes] :opt [::dependency-track])))

(defn async-pick-resolver [{::keys [indexes dependency-track] :as env}]
  (go-catch
    (let [k (-> env :ast :key)
          e (p/entity env)]
      (if-let [attr-resolvers (get-in indexes [::index-oir k])]
        (let [r (->> attr-resolvers
                     (map (fn [[attrs sym]]
                            (let [missing (set/difference attrs (set (keys e)))]
                              {:sym     sym
                               :attrs   attrs
                               :missing missing})))
                     (sort-by (comp count :missing)))]
          (loop [[{:keys [sym attrs]} & t :as xs] r]
            (if xs
              (if-not (contains? dependency-track [sym attrs])
                (let [e       (try
                                (->> (p/entity (-> env
                                                   (assoc ::p/fail-fast? true)
                                                   (update ::dependency-track (fnil conj #{}) [sym attrs])) attrs)
                                     <?
                                     (p/elide-items p/break-values))
                                (catch #?(:clj Throwable :cljs :default) _ {}))
                      missing (set/difference (set attrs) (set (keys e)))]
                  (if (seq missing)
                    (recur t)
                    {:e (select-keys e attrs)
                     :s (first (sort-resolvers env sym e))}))))))))))

(defn default-resolver-dispatch [{{::keys [sym] :as resolver} ::resolver-data :as env} entity]
  #?(:clj
     (if-let [f (resolve sym)]
       (f env entity)
       (throw (ex-info "Can't resolve symbol" {:resolver resolver})))

     :cljs
     (throw (ex-info "Default resolver-dispatch is not supported on CLJS, please implement ::p.connect/resolver-dispatch in your parser environment." {}))))

(defn resolver-dispatch
  "Helper method that extract resolver symbol from env. It's recommended to use as a dispatch method for creating
  multi-methods for resolver dispatch."
  ([env] (get-in env [::resolver-data ::sym]))
  ([env _]
   (get-in env [::resolver-data ::sym])))

#?(:clj
   (defn create-thread-pool [thread-count ch]
     (doseq [_ (range thread-count)]
       (async/thread
         (loop []
           (when-let [{:keys [f out]} (async/<!! ch)]
             (async/put! out (com.wsscode.common.async-clj/<!!maybe (f)))
             (recur)))))
     ch))

(defn call-resolver* [{::keys [resolver-dispatch]
                       :or    {resolver-dispatch default-resolver-dispatch}
                       :as    env}
                      entity]
  (let [tid (pt/trace-enter env {::pt/event   ::call-resolver
                                 :key         (-> env :ast :key)
                                 ::sym        (-> env ::resolver-data ::sym)
                                 ::input-data entity})]
    (let-chan [x (p/exec-plugin-actions env ::wrap-resolve resolver-dispatch env entity)]
      (pt/trace-leave env {::pt/event ::call-resolver} tid)
      x)))

(defn call-resolver [{::keys [pool-chan]
                      :as    env}
                     entity]
  (if pool-chan
    (let [out (async/promise-chan)]
      (go
        (let [tid (pt/trace-enter env {::pt/event   ::schedule-resolver
                                       :key         (-> env :ast :key)
                                       ::sym        (-> env ::resolver-data ::sym)
                                       ::input-data entity})]
          (>! pool-chan {:out out
                         :f   #(do
                                 (pt/trace-leave env {::pt/event ::schedule-resolver} tid)
                                 (call-resolver* env entity))})))
      out)
    (call-resolver* env entity)))

(defn- entity-select-keys [env entity input]
  (let [entity (p/maybe-atom entity)]
    (let-chan [e (if (set/subset? input entity)
                   entity
                   (p/entity (assoc env ::p/entity entity) input))]
      (select-keys e input))))

(defn all-values-valid? [m input]
  (and (every? (fn [[_ v]] (not (p/break-values v))) m)
       (every? m input)))

(defn- cache-batch [env resolver-sym linked-results]
  (doseq [[input value] linked-results]
    (p/cached env [resolver-sym input] value)))

(defn reader [{::keys   [indexes] :as env
               ::p/keys [processing-sequence]}]
  (let [k (-> env :ast :key)]
    (if (get-in indexes [::index-oir k])
      (if-let [{:keys [e s]} (pick-resolver env)]
        (let [{::keys [cache? batch? input] :or {cache? true} :as resolver}
              (resolver-data env s)
              env      (assoc env ::resolver-data resolver)
              response (if cache?
                         (p/cached env [s e]
                           (if (and batch? processing-sequence)
                             (let [items          (->> processing-sequence
                                                       (mapv #(entity-select-keys env % input))
                                                       (filterv #(all-values-valid? % input)))
                                   batch-result   (call-resolver env items)
                                   linked-results (zipmap items batch-result)]
                               (cache-batch env s linked-results)
                               (get linked-results e))
                             (call-resolver env e)))
                         (call-resolver env e))
              env'     (get response ::env env)
              response (dissoc response ::env)]
          (if-not (or (nil? response) (map? response))
            (throw (ex-info "Response from reader must be a map." {:sym s :response response})))
          (p/swap-entity! env' #(merge % response))
          (let [x (get response k)]
            (cond
              (sequential? x)
              (->> (mapv atom x) (p/join-seq env'))

              (nil? x)
              (if (contains? response k)
                nil
                ::p/continue)

              :else
              (p/join (atom x) env'))))
        ::p/continue)
      ::p/continue)))

(defn- map-async-serial [f s]
  (go-catch
    (loop [out  []
           rest s]
      (if-let [item (first rest)]
        (recur
          (conj out (<?maybe (f item)))
          (next rest))
        out))))

(defn async-reader [{::keys   [indexes] :as env
                     ::p/keys [processing-sequence]}]
  (let [k (-> env :ast :key)]
    (if (get-in indexes [::index-oir k])
      (go-catch
        (if-let [{:keys [e s]} (<? (async-pick-resolver env))]
          (let [{::keys [cache? batch? input] :or {cache? true} :as resolver}
                (resolver-data env s)
                env      (assoc env ::resolver-data resolver)
                response (if cache?
                           (p/cached env [s e]
                             (if (and batch? processing-sequence)
                               (let [items          (->> (<? (map-async-serial #(entity-select-keys env % input) processing-sequence))
                                                         (filterv #(all-values-valid? % input)))
                                     batch-result   (<?maybe (call-resolver env items))
                                     linked-results (zipmap items batch-result)]
                                 (cache-batch env s linked-results)
                                 (get linked-results e))
                               (<?maybe (call-resolver env e))))
                           (<?maybe (call-resolver env e)))
                env'     (get response ::env env)
                response (dissoc response ::env)]
            (if-not (or (nil? response) (map? response))
              (throw (ex-info "Response from reader must be a map." {:sym s :response response})))
            (p/swap-entity! env' #(merge % response))
            (let [x (get response k)]
              (cond
                (sequential? x)
                (->> (mapv atom x) (p/join-seq env') <?maybe)

                (nil? x)
                (if (contains? response k)
                  x
                  ::p/continue)

                :else
                (-> (p/join (atom x) env') <?maybe))))
          ::p/continue))
      ::p/continue)))

(defn output->provides [output]
  (let [ast (p/query->ast output)]
    (into #{} (map :key) (:children ast))))

(defn compute-paths* [index-oir keys bad-keys attr pending]
  (if (contains? index-oir attr)
    (reduce-kv
      (fn [paths input resolvers]
        (if (or (some input pending) (some bad-keys input))
          paths
          (let [new-paths (into #{} (map #(vector [attr %])) resolvers)
                missing   (set/difference input keys)]
            (if (seq missing)
              (let [missing-paths (->> missing
                                       (into #{} (map #(compute-paths* index-oir keys bad-keys % (into pending missing))))
                                       (apply combo/cartesian-product)
                                       (mapv #(into (first %) (second %))))]
                (if (seq missing-paths)
                  (into paths (->> (combo/cartesian-product new-paths missing-paths)
                                   (mapv #(into (first %) (second %)))))
                  paths))
              (into paths new-paths)))))
      #{}
      (get index-oir attr))
    #{}))

(defn compute-paths [index-oir keys bad-keys attr]
  (into #{} (map rseq) (compute-paths* index-oir keys bad-keys attr #{attr})))

(defn path-cost [_env weights path]
  (transduce (map #(get weights % 1)) + path))

(defn resolve-plan [{::keys [indexes resolver-weights] :as env}]
  (let [key       (-> env :ast :key)
        {bad-keys  true
         good-keys false} (group-by #(contains? p/break-values (second %)) (p/entity env))
        good-keys (into #{} (map first) good-keys)
        bad-keys  (into #{} (map first) bad-keys)
        weights   (or (some-> resolver-weights deref) {})]
    (->> (compute-paths (::index-oir indexes) good-keys bad-keys key)
         (sort-by #(path-cost env weights (second %))))))

(defn resolver->output [env resolver-sym]
  (get-in env [::indexes ::index-resolvers resolver-sym ::output]))

(defn plan->provides [env plan]
  (into #{} (mapcat #(output->provides (resolver->output env (second %)))) plan))

(defn parallel-reader [{::keys    [indexes] :as env
                        ::p/keys  [processing-sequence]
                        ::pp/keys [waiting]}]
  (let [plan-trace-id (pt/trace-enter env {::pt/event ::compute-plan})]
    (if-let [plan (first (resolve-plan env))]
      (let [_   (pt/trace-leave env {::pt/event ::compute-plan ::plan plan} plan-trace-id)
            key (-> env :ast :key)
            out (plan->provides env plan)]
        {::pp/provides
         out

         ::pp/response-stream
         (let [ch (async/chan 10)]
           (go
             (loop [[step & tail] plan
                    out-left out]
               (if step
                 (let [[key' resolver-sym] step
                       {::keys [cache? batch? input output] :or {cache? true} :as resolver}
                       (get-in indexes [::index-resolvers resolver-sym])
                       env        (assoc env ::resolver-data resolver)
                       e          (select-keys (p/entity env) input)
                       trace-data {:key         key
                                   ::sym        resolver-sym
                                   ::input-data e}
                       response   (cond
                                    (contains? waiting key')
                                    (do
                                      (pt/trace env (assoc trace-data ::pt/event ::waiting-resolver ::waiting-key key'))
                                      (<! (pp/watch-pending-key env key'))
                                      ::watch-ready)

                                    cache?
                                    (if (and batch? processing-sequence)
                                      (pt/tracing env (assoc trace-data ::pt/event ::call-resolver-batch)
                                        (if (p/cache-contains? env [resolver-sym e])
                                          (<! (p/cache-read env [resolver-sym e]))
                                          (let [items          (->> (<! (map-async-serial #(entity-select-keys env % input) processing-sequence))
                                                                    (into [] (comp
                                                                               (filter #(all-values-valid? % input))
                                                                               (remove #(p/cache-contains? env [resolver-sym %]))
                                                                               (distinct))))
                                                _              (pt/trace env {::pt/event ::batch-items-ready
                                                                              ::items    items})
                                                batch-result   (try
                                                                 (<?maybe (call-resolver env items))
                                                                 (catch #?(:clj Throwable :cljs :default) e
                                                                   (pt/trace env {::pt/event ::batch-result-error
                                                                                  :error     (p/process-error env e)})
                                                                   (let [output'   (output->provides output)
                                                                         base-path (->> env ::p/path (into [] (take-while keyword?)))]
                                                                     (doseq [o output'
                                                                             i (range (count items))]
                                                                       (p/add-error (assoc env ::p/path (conj base-path i o)) e))
                                                                     (repeat (count items) (zipmap output' (repeat ::p/reader-error))))))
                                                _              (pt/trace env {::pt/event    ::batch-result-ready
                                                                              ::items-count (count batch-result)})
                                                linked-results (->> (zipmap items batch-result)
                                                                    (into {} (filter second)))]
                                            (doseq [[resolver-input value] linked-results]
                                              (p/cache-hit env [resolver-sym resolver-input] (go-promise (or value {}))))
                                            (get linked-results e {}))))
                                      (do
                                        (pt/trace env (assoc trace-data ::pt/event ::call-resolver-with-cache))
                                        (<!
                                          (p/cached-async env [resolver-sym e]
                                            (fn []
                                              (go
                                                (or (<!maybe (call-resolver env e)) {})))))))

                                    :else
                                    (or (<!maybe (call-resolver env e)) {}))]

                   (cond
                     (identical? ::watch-ready response)
                     (recur tail (set/difference out-left (set (keys (p/entity env)))))

                     (map? response)
                     (let [out-provides (output->provides output)]
                       (pt/trace env {::pt/event ::merge-resolver-response
                                      :key       key
                                      ::sym      resolver-sym})
                       (p/swap-entity! env #(merge response %))
                       (>! ch {::pp/provides       out-provides
                               ::pp/response-value response})
                       (recur tail (set/difference out-left out-provides)))

                     (p.async/error? response)
                     (do
                       (pt/trace env {::pt/event ::resolver-error
                                      :key       key
                                      ::sym      resolver-sym})
                       (p/add-error env response)
                       (>! ch {::pp/provides       out
                               ::pp/response-value (zipmap out-left (repeat ::p/reader-error))})
                       (async/close! ch))

                     :else
                     (do
                       (pt/trace env {::pt/event          ::invalid-resolve-response
                                      :key                key
                                      ::sym               resolver-sym
                                      ::pp/response-value response})
                       (p/add-error env (ex-info "Invalid resolve response" {::pp/response-value response}))
                       (>! ch {::pp/provides       out
                               ::pp/response-value {key ::p/reader-error}})
                       (async/close! ch))))
                 (async/close! ch))))
           ch)})
      ::p/continue)))

(def index-reader
  {::indexes
   (fn [{::keys [indexes] :as env}]
     (p/join indexes env))})

(defn indexed-ident [{::keys [indexes] :as env}]
  (if-let [attr (p/ident-key env)]
    (if (contains? (::idents indexes) attr)
      {attr (p/ident-value env)})))

(defn ident-reader [env]
  (if-let [ent (indexed-ident env)]
    (p/join (atom ent) env)
    ::p/continue))

(defn batch-resolver
  "Return a resolver that will dispatch to single-fn when the input is a single value, and multi-fn when
  multiple inputs are provided (on batch cases)."
  [single-fn multi-fn]
  (fn [env input]
    (if (sequential? input)
      (multi-fn env input)
      (single-fn env input))))

(def all-readers [reader ident-reader index-reader])
(def all-async-readers [async-reader ident-reader index-reader])
(def all-parallel-readers [parallel-reader ident-reader index-reader])

(defn mutation-dispatch
  "Helper method that extract key from ast symbol from env. It's recommended to use as a dispatch method for creating
  multi-methods for mutation dispatch."
  [env _]
  (get-in env [:ast :key]))

(defn mutate [{::keys [indexes mutate-dispatch mutation-join-globals]
               :keys  [query]
               :or    {mutation-join-globals []}
               :as    env} sym' input]
  (if-let [{::keys [sym]} (get-in indexes [::mutations sym'])]
    (let [env (assoc-in env [:ast :key] sym)]
      {:action #(let [res (mutate-dispatch (assoc env ::source-mutation sym') input)]
                  (if query
                    (merge (select-keys res mutation-join-globals)
                           (p/join (atom res) env))
                    res))})
    (throw (ex-info "Mutation not found" {:mutation sym'}))))

(defn mutate-async [{::keys [indexes mutate-dispatch mutation-join-globals]
                     :keys  [query]
                     :or    {mutation-join-globals []}
                     :as    env} sym' input]
  (if-let [{::keys [sym]} (get-in indexes [::mutations sym'])]
    (let [env (assoc-in env [:ast :key] sym)]
      {:action #(go-catch
                  (let [res (<?maybe (mutate-dispatch (assoc env ::source-mutation sym') input))]
                    (if query
                      (merge (select-keys res mutation-join-globals)
                             (<? (p/join (atom res) env)))
                      res)))})
    (throw (ex-info "Mutation not found" {:mutation sym'}))))

;;;;;;;;;;;;;;;;;;;

(defn resolver-factory
  "Given multi-method mm and index atom idx, returns a function with the given signature:
   [sym config f], the function will be add to the mm and will be indexed using config as
   the config params for connect/add."
  [mm idx]
  (fn resolver-factory-internal
    [sym config f]
    (defmethod mm sym [env input] (f env input))
    (swap! idx add sym config)))

(defn mutation-factory
  [mm idx]
  (fn mutation-factory-internal
    [sym config f]
    (defmethod mm sym [env input] (f env input))
    (swap! idx add-mutation sym config)))

(defn- cached [cache x f]
  (if cache
    (if (contains? @cache x)
      (get @cache x)
      (let [res (f)]
        (swap! cache assoc x res)
        res))
    (f)))

(defn discover-attrs [{::keys [index-io cache] :as index} ctx]
  (cached cache ctx
    (fn []
      (let [base-keys
            (if (> (count ctx) 1)
              (let [tree (->> ctx
                              (repeat (dec (count ctx)))
                              (map-indexed #(drop (- (count %2) (inc %)) %2))
                              (reduce (fn [a b]
                                        (let [attrs (discover-attrs index (vec b))]
                                          (if (nil? a)
                                            attrs
                                            (update-in a (reverse (drop-last b)) merge-io attrs))))
                                      nil))]
                (get-in tree (->> ctx reverse next vec)))
              (merge-io (get-in index-io [#{} (first ctx)])
                        (get index-io #{(first ctx)} {})))]
        (loop [available index-io
               collected base-keys]
          (let [attrs   (->> collected keys set)
                matches (remove (fn [[k _]] (seq (set/difference k attrs))) available)]
            (if (seq matches)
              (recur
                (reduce #(dissoc % %2) available (keys matches))
                (reduce merge-io collected (vals matches)))
              collected)))))))

(s/fdef discover-attrs
  :args (s/cat :indexes ::indexes :ctx (s/coll-of ::attribute))
  :ret ::io-map)

(defn reprocess-index
  "This will use the ::index-resolvers to re-build the index. You might need that if in development you changed some definitions
  and got in a dirty state somehow"
  [{::keys [index-resolvers]}]
  (reduce-kv add {} index-resolvers))

(defn data->shape
  "Helper function to transform a data into an output shape."
  [data]
  (if (map? data)
    (->> (reduce-kv
           (fn [out k v]
             (conj out
               (cond
                 (map? v)
                 {k (data->shape v)}

                 (sequential? v)
                 (let [shape (reduce
                               (fn [q x]
                                 (p/merge-queries q (data->shape x)))
                               []
                               v)]
                   (if (seq shape)
                     {k shape}
                     k))

                 :else
                 k)))
           []
           data)
         (sort-by #(if (map? %) (ffirst %) %))
         vec)))
