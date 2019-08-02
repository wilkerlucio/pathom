(ns com.wsscode.pathom.core
  (:refer-clojure :exclude [ident?])
  #?(:cljs
     (:require-macros [com.wsscode.pathom.core]))
  (:require
    [clojure.spec.alpha :as s]
    [clojure.core.async :as async :refer [go <! >!]]
    [#?(:clj  com.wsscode.common.async-clj
        :cljs com.wsscode.common.async-cljs)
     :as casync
     :refer [go-catch <? let-chan chan? <?maybe <!maybe go-promise]]
    [com.wsscode.pathom.parser :as pp]
    [com.wsscode.pathom.misc :as p.misc]
    [clojure.set :as set]
    [clojure.walk :as walk]
    [edn-query-language.core :as eql]
    #?(:cljs [goog.object :as gobj])
    [com.wsscode.pathom.trace :as pt])
  #?(:clj
     (:import (clojure.lang IAtom IDeref))))

;; pathom core

(when p.misc/INCLUDE_SPECS
  (s/def ::env map?)
  (s/def ::attribute ::eql/property)

  (s/def ::reader-map (s/map-of keyword? ::reader))
  (s/def ::reader-seq (s/coll-of ::reader :kind vector? :into []))
  (s/def ::reader-fn fn?)

  (s/def ::optional? boolean?)

  (s/def ::reader
    (s/or :fn ::reader-fn
          :map ::reader-map
          :list ::reader-seq))

  (s/def ::process-reader
    (s/fspec :args (s/cat :reader ::reader)
      :ret ::reader))

  (s/def ::error
    (s/spec any?
      :gen #(s/gen #{(ex-info "Generated sample error" {:some "data"})})))

  (s/def ::errors (s/map-of vector? any?))

  (s/def ::errors* #(instance? IAtom %))

  (s/def ::entity any?)
  (s/def ::entity-key keyword?)

  (s/def ::fail-fast? boolean?)

  (s/def ::map-key-transform
    (s/fspec :args (s/cat :key any?)
      :ret string?))

  (s/def ::map-value-transform
    (s/fspec :args (s/cat :key any? :value any?)
      :ret any?))

  (s/def ::placeholder-prefixes set?)

  (s/def ::js-key-transform ::map-key-transform)

  (s/def ::js-value-transform ::map-value-transform)

  (s/def ::parser
    (s/fspec :args (s/cat :env map? :tx ::eql/query)
      :ret map?))

  (s/def ::wrap-read
    (s/fspec :args (s/cat :reader ::reader-fn)
      :ret ::reader-fn))

  (s/def ::wrap-parser
    (s/fspec :args (s/cat :parser ::parser)
      :ret ::parser))

  (s/def ::plugin (s/keys :opt [::wrap-read ::wrap-parser]))

  #_(s/def ::plugins
      (s/with-gen (s/coll-of ::plugin :kind vector?) #(s/gen #{[]})))

  (s/def ::parent-join-key (s/or :prop ::eql/property
                                 :ident ::eql/ident
                                 :call ::eql/mutation-key))
  (s/def ::parent-query ::eql/join-query)

  (s/def ::union-path
    (s/or :keyword ::eql/property
          :fn fn?))

  (s/def ::async-request-cache-ch-size pos-int?))

(def break-values #{::reader-error ::not-found})

;; SUPPORT FUNCTIONS

(defn ast-properties
  "Takes an AST and return a single set with all properties that appear in a query.

  Example:

  (-> [:foo {:bar [:baz]}] eql/query->ast pc/all-out-attributes)
  ; => #{:foo :bar :baz}"
  [{:keys [children]}]
  (reduce
    (fn [attrs {:keys [key children] :as node}]
      (cond-> (conj attrs key)
        children
        (into (ast-properties node))))
    #{}
    children))

(defn deep-merge [& xs]
  "Merges nested maps without overwriting existing keys."
  (if (every? #(or (map? %) (nil? %)) xs)
    (apply merge-with deep-merge xs)
    (last xs)))

(defn query->ast
  "Given a query expression convert it into an AST."
  [query-expr]
  (pp/query->ast query-expr))

(defn query->ast1
  "Call query->ast and return the first children."
  [query-expr]
  (-> (query->ast query-expr) :children first))

(defn ast->query [query-ast]
  "Given an AST convert it back into a query expression."
  (pp/ast->expr query-ast true))

(defn filter-ast [f ast]
  (->> ast
       (walk/prewalk
         (fn filter-ast-walk [x]
           (if (and (map? x)
                    (contains? x :children))
             (update x :children #(filterv f %))
             x)))))

(defn params
  "Get params from env, always returns a map."
  [env]
  (-> env :ast :params (or {})))

(defn update-attribute-param
  "Add attribute param, eg:

  ```
  (p/update-attribute-param :keyword assoc :foo \"bar\") => (:keyword {:foo \"bar\"})
  (p/update-attribute-param '(:keyword {:param \"prev\"}) assoc :foo \"bar\") => (:keyword {:foo \"bar\" :param \"prev\"})
  ```
  "
  [x f & args]
  (if (seq? x)
    (let [[k p] x]
      (list k (apply f p args)))

    (list x (apply f {} args))))

(defn optional-attribute [x]
  (assert (or (keyword? x) (list x)) "Optional value must be a keyword or a parameterized attribute")
  (update-attribute-param x assoc ::optional? true))

; alias for optional-attribute
(def ? optional-attribute)

(defn union-children?
  "Given an AST point, check if the children is a union query type."
  [ast]
  (= :union (some-> ast :children first :type)))

(defn read-from* [{:keys [ast] :as env} reader]
  (cond
    (map? reader) (let [k (:key ast)]
                    (if-let [[_ v] (find reader k)]
                      (read-from* env v)
                      ::continue))
    (vector? reader) (let [res (into [] (comp (map #(read-from* env %))
                                              (drop-while #(= % ::continue))
                                              (take 1))
                                     reader)]
                       (if (seq res)
                         (first res)
                         ::continue))
    (ifn? reader) (reader env)
    :else (throw (ex-info "Can't process reader" {:reader reader}))))

(defn read-from
  "Runs the read process for the reading, the reader can be a function, a vector or a map:

  function: will receive the environment as argument
  map: will dispatch from the ast key to a reader on the map value
  vector: will try to run each reader in sequence, when a reader returns ::p/continue it will try the next"
  [env reader]
  (let-chan [res (read-from* env reader)]
    (if (= res ::continue) ::not-found res)))

(defn native-map? [x]
  #?(:clj (or (= (type x) clojure.lang.PersistentArrayMap)
              (= (type x) clojure.lang.PersistentHashMap))
     :cljs (or (= (type x) cljs.core/PersistentArrayMap)
               (= (type x) cljs.core/PersistentHashMap))))

(defn transduce-maps
  "Walk the structure and transduce every map with xform."
  [xform input]
  (walk/prewalk
    (fn elide-items-walk [x]
      (if (native-map? x)
        (with-meta (into {} xform x) (meta x))
        x))
    input))

(defn transduce-children
  "Recursivelly transduce children on the AST, you can use this to apply filter/transformations
  on a whole AST. Each iteration of the transducer will get a single AST node to process.

  ```
  (->> [:a {:b [:c :d]} :e]
       (p/query->ast)
       (p/transduce-children (remove (comp #{:a :c} :key)))
       (p/ast->query))
  ; => [{:b [:d]} :e]
  ```"
  [xform {:keys [children] :as node}]
  (cond-> node
    (seq children)
    (update :children
      (fn [children]
        (into [] (comp xform (map #(transduce-children xform %))) children)))))

(defn elide-items
  "Removes any item on set item-set from the input"
  [item-set input]
  (with-meta
    (transduce-maps (remove (fn [[_ v]] (contains? item-set v))) input)
    (meta input)))

(defn elide-not-found
  "Convert all ::p/not-found values of maps to nil"
  [input]
  (elide-items #{::not-found} input))

(def focus-subquery pp/focus-subquery)

(defn atom? [x]
  #?(:clj  (instance? IDeref x)
     :cljs (satisfies? IDeref x)))

(defn normalize-atom [x] (if (atom? x) x (atom x)))

(def special-outputs #{::reader-error ::not-found})

(defn raw-entity
  [{::keys [entity-key] :as env}]
  (get env (or entity-key ::entity)))

(defn maybe-atom [x]
  (if (atom? x) (deref x) x))

(defn entity-value-merge
  "This is used for merging new parsed attributes from entity, works like regular merge but if the value from the right
  direction is not found, then the previous value will be kept."
  [x y]
  (if (identical? y ::not-found)
    x
    y))

(defn entity
  "Fetch the entity according to the ::entity-key. If the entity is an IAtom, it will be derefed.

  If a second argument is sent, calls the parser against current element to guarantee that some fields are loaded. This
  is useful when you need to ensure some values are loaded in order to fetch some more complex data. NOTE: When using
  this call with an explicit vector of attributes the parser will not be invoked for attributes that already exist in
  the current value of the current entity."
  ([env]
   (let [e (raw-entity env)]
     (maybe-atom e)))
  ([{:keys [parser] :as env} attributes]
   (let [e (entity env)]
     (let-chan [res (parser env (filterv (-> e keys set complement) attributes))]
       (if (map? res)
         (merge-with entity-value-merge e res)
         e)))))

(defn entity-attr
  "Helper function to fetch a single attribute from current entity."
  ([env attr]
   (let-chan [e (entity env [attr])]
     (get e attr)))
  ([env attr default]
   (let-chan [e (entity env [attr])]
     (let [x (get e attr)]
       (if (#{nil ::not-found} x)
         default
         x)))))

(defn entity! [{::keys [path] :as env} attributes]
  (let-chan [e (entity env attributes)]
    (let [missing (set/difference (set attributes)
                                  (set (keys (elide-not-found e))))]
      (if (seq missing)
        (throw (ex-info (str "Entity attributes " (pr-str missing) " could not be realized")
                 {::entity             e
                  ::path               path
                  ::missing-attributes missing})))
      e)))

(defn entity-attr!
  "Like entity-attr. Raises an exception if the property can't be retrieved."
  [env attr]
  (let-chan [e (entity! env [attr])]
    (get e attr)))

(defn swap-entity!
  "Helper to swap the current entity value."
  [env fn & args]
  (let [e (raw-entity env)]
    (if (atom? e)
      (apply swap! e fn args)
      (apply fn e args))))

(defn update-child
  "Given an AST, find the child with a given key and run update against it."
  [ast key & args]
  (if-let [idx (some->> (:children ast)
                        (map-indexed vector)
                        (filter (comp #{key} :key second))
                        ffirst)]
    (apply update-in ast [:children idx] args)
    ast))

(defn update-recursive-depth
  "Given an AST, find the child with a given key and run update against it."
  [ast key & args]
  (if-let [idx (some->> (:children ast)
                        (map-indexed vector)
                        (filter (comp #(and (= key (:key %))
                                            (pos-int? (:query %))) second))
                        ffirst)]
    (apply update-in ast [:children idx :query] args)
    ast))

(defn remove-query-wildcard [query]
  (into (with-meta [] (meta query)) (remove #{'*}) query))

(defn default-union-path [{:keys [query] :as env}]
  (let [e (entity env)]
    (if-let [path (some->> (keys query)
                           (filter #(contains? e %))
                           first)]
      path)))

(defn join
  "Runs a parser with current sub-query. When run with an `entity` argument, that entity is set as the new environment
   value of `::entity`, and the subquery is parsered with that new environment. When run without an `entity` it
   parses the current subquery in the context of whatever entity was already in `::entity` of the env."
  ([entity {:keys [ast query] ::keys [entity-key] :as env}]
   (if (atom? entity)
     (if (::env @entity)
       (do
         (swap! entity dissoc ::env)
         (join (assoc (get @entity ::env)
                 :ast ast
                 :query query
                 entity-key entity)))
       (join (assoc env entity-key entity)))
     (if (::env entity)
       (join (assoc (get entity ::env)
               :ast ast
               :query query
               entity-key (atom (dissoc entity ::env))))
       (join (assoc env entity-key (atom entity))))))
  ([{:keys  [parser ast query]
     ::keys [union-path parent-query processing-sequence placeholder-prefixes]
     :as    env}]
   (let [e            (entity env)
         placeholder? (contains? (or placeholder-prefixes #{}) (some-> (:dispatch-key ast) namespace))
         query        (if (union-children? ast)
                        (let [union-path (or union-path default-union-path)
                              path       (cond
                                           (fn? union-path) (union-path env)
                                           (keyword? union-path) (get (entity! env [union-path]) union-path))]
                          (or (get query path) ::blank-union))
                        query)
         env'         (-> env
                          (assoc ::parent-query query
                                 ::parent-join-key (:key ast))
                          (cond-> (not placeholder?)
                            (dissoc ::pp/waiting ::pp/key-watchers)))
         env'         (if processing-sequence
                        (if (and (::stop-sequence? (meta processing-sequence))
                                 (not placeholder?))
                          (dissoc env' ::processing-sequence)
                          (update env' ::processing-sequence vary-meta assoc ::stop-sequence? true))
                        env')]
     (cond
       (= ::blank-union query)
       {}

       (nil? query) e

       (nat-int? query)
       (if (zero? query)
         nil
         (let [parent-query' (-> (query->ast parent-query)
                                 (update-recursive-depth (:key ast) dec)
                                 (ast->query))]
           (parser (assoc env' ::parent-query parent-query') (remove-query-wildcard parent-query'))))

       (some #{'*} query)
       (let-chan [computed-e (parser env' (remove-query-wildcard query))]
         (merge (entity env') computed-e))

       :else
       (parser env' query)))))

(defn join-seq-parallel [{:keys  [query]
                          ::keys [entity-path-cache]
                          :as    env} coll]
  (if (seq coll)
    (go-catch
      (pt/tracing env {::pt/event ::parallel-sequence-loop
                       ::pt/style {:fill    "#e0e3a4"
                                   :opacity "0.8"}}
        (let [ast            (eql/query->ast query)
              check-ast-opt? (every? #(not (:children %)) (:children ast))
              join-item      (fn join-item [env entity]
                               (or (and
                                     check-ast-opt?
                                     (reduce
                                       (fn [ent {:keys [key params]}]
                                         (if-let [[_ v] (find entity key)]
                                           (assoc ent (get params :pathom/as key) v)
                                           (reduced nil)))
                                       {}
                                       (:children ast)))
                                   (join entity env)))
              env            (assoc env ::processing-sequence coll)
              [head & tail] coll
              first-res      (<?maybe (join-item (update env ::path conj 0) head))
              from-chan      (async/chan 10)
              out-chan       (async/chan 10)]
          (async/onto-chan from-chan (map vector tail (range)))
          (async/pipeline-async 10
            out-chan
            (fn join-seq-pipeline [[ent i] res-ch]
              (go
                (let [{::keys [path] :as env'} (update env ::path conj (inc i))
                      ent (merge (get @entity-path-cache path {}) ent)
                      res (<!maybe (join-item env' ent))]
                  (>! res-ch res)
                  (async/close! res-ch))))
            from-chan)
          (<! (async/into [first-res] out-chan)))))
    []))

(defn join-seq
  "Runs the current subquery against the items of the given collection."
  [{::pp/keys [parallel?] :as env} coll]
  (pt/trace env {::pt/event ::join-seq ::seq-count (count coll)})
  (if parallel?
    (join-seq-parallel env coll)
    (letfn [(join-item [ent out]
              (join ent (-> env
                            (assoc ::processing-sequence coll)
                            (update ::path conj (count out)))))]
      (loop [out []
             [ent & tail] coll]
        (if ent
          (let [res (join-item ent out)]
            (if (chan? res)
              (go-catch
                (loop [out [(<? res)]
                       [ent & tail] tail]
                  (if ent
                    (recur
                      (conj out (<? (join-item ent out)))
                      tail)
                    out)))
              (recur (conj out res) tail)))
          out)))))

(defn ident? [x]
  (and (vector? x)
       (keyword? (first x))
       (= 2 (count x))))

(defn ident-key* [key]
  (if (vector? key) (first key)))

(defn ident-key
  "The first element of an ident."
  [{:keys [ast]}]
  (let [key (some-> ast :key)]
    (if (vector? key) (first key))))

(defn ident-value* [key]
  (if (vector? key) (second key)))

(defn ident-value
  "The second element of an ident"
  [{:keys [ast]}]
  (let [key (some-> ast :key)]
    (if (sequential? key) (second key))))

(defn elide-ast-nodes
  "Remove items from a query (AST) that have a key listed in the elision-set"
  [{:keys [key union-key] :as ast} elision-set]
  (let [union-elision? (contains? elision-set union-key)]
    (when-not (or union-elision? (contains? elision-set key))
      (update ast :children (fn [c] (if c (vec (keep #(elide-ast-nodes % elision-set) c))))))))

(defn normalize-env [{:keys [ast] :as env}]
  (cond-> (update env ::path (fnil conj []) (:key ast))
    (nil? (::entity-key env)) (assoc ::entity-key ::entity)))

(defn merge-queries* [qa qb]
  (reduce (fn [ast {:keys [key type params] :as item-b}]
            (if-let [[idx item] (->> ast :children
                                     (keep-indexed #(if (-> %2 :key (= key)) [%1 %2]))
                                     first)]
              (cond
                (or (= :join (:type item) type)
                    (= :prop (:type item) type))
                (if (= (:params item) params)
                  (update-in ast [:children idx] merge-queries* item-b)
                  (reduced nil))

                (and (= :prop (:type item))
                     (= :join type))
                (assoc-in ast [:children idx] item-b)

                (= :call type)
                (reduced nil)

                :else ast)
              (update ast :children conj item-b)))
          qa
          (:children qb)))

(defn merge-queries [qa qb]
  (some-> (merge-queries* (query->ast qa) (query->ast qb))
          (ast->query)))

(defn normalize-query-variables
  "Converts ident values and param values to ::p/var."
  [query]
  (->> (query->ast query)
       (transduce-children
         (map (fn [x]
                (cond-> x
                  (ident? (:key x))
                  (assoc :key [(first (:key x)) ::var])

                  (:params x)
                  (update :params #(into {} (map (fn [[k _]] [k ::var])) %))))))
       (ast->query)))

(defn query-id
  "Generates a consistent hash from the query. The query first goes to a process to remove any
  variables from idents and params, then we get the Clojure hash of it. You can use this to save
  information about a query that can be used to correlate with the query later."
  [query]
  (hash (normalize-query-variables query)))

;; DISPATCH HELPERS

(defn key-dispatch [{:keys [ast]}]
  (:key ast))

(defn entity-dispatch
  "Dispatch on the first element (type) of an incoming ident."
  [{:keys [ast]}]
  (if (vector? (:key ast))
    (first (:key ast))))

;; NODE HELPERS

(defn env-placeholder-reader
  "Produces a reader that will respond to any keyword whose namespace
  is in the set `(::placeholder-prefixes env)`. The join node logical
  level stays the same as the parent where the placeholder node is
  requested."
  [{::keys [placeholder-prefixes] :as env}]
  (assert placeholder-prefixes "To use env-placeholder-reader please add ::p/placeholder-prefixes to your environment.")
  (if (contains? placeholder-prefixes (namespace (:dispatch-key (:ast env))))
    (join env)
    ::continue))

(defn lift-placeholders
  "This will lift the queries from placeholders to the same level of the query, as if there was not placeholders in it."
  [{::keys [placeholder-prefixes]} query]
  (let [ast  (query->ast query)
        ast' (walk/postwalk
               (fn [x]
                 (if-let [children (:children x)]
                   (let [{placeholders true
                          regular      false} (group-by #(and (= :join (:type %))
                                                              (contains? placeholder-prefixes
                                                                (namespace (:dispatch-key %)))) children)]
                     (as-> (assoc x :children (or regular [])) <>
                           (reduce merge-queries* <> placeholders)))
                   x))
               ast)]
    (ast->query ast')))

;; BUILT-IN READERS

(defn map-reader
  "Map reader will try to find the ast key on the current entity and output it. When the value is a map and a
  sub query is present, it will apply the sub query on that value (recursively). When the value is a sequence,
  map-reader will do a join on each of the items (and apply sub queries if it's present and values are maps.

  Map-reader will defer the read when the key is not present at entity."
  [{:keys [ast query] :as env}]
  (let [entity (entity env)]
    (if (contains? entity (:key ast))
      (let [v (get entity (:key ast))]
        (if (sequential? v)
          (if query
            (join-seq env v)
            v)
          (if (and (map? v) query)
            (join v env)
            v)))
      ::continue)))

(defn map-reader*
  "Like map-reader, but it has extra options (read from the environment):
  map-key-transform: (fn [key]) will transform the key on the AST before trying to match with entity key
  map-value-transform: (fn [key value]) will transform the output value after reading from the entity.

  The reason to have a separated reader is so the plain version (map-reader) can be faster by avoiding checking
  the presence of transform functions."
  [{::keys [map-key-transform map-value-transform]}]
  (fn [{:keys  [ast query]
        ::keys [entity-key]
        :as    env}]
    (let [key    (cond-> (:key ast) map-key-transform map-key-transform)
          entity (entity env)]
      (if (contains? entity key)
        (let [v (get entity key)]
          (if (sequential? v)
            (if query
              (join-seq env v)
              v)
            (if (and (map? v) query)
              (join (assoc env entity-key v))
              (cond->> v
                map-value-transform
                (map-value-transform (:key ast))))))
        ::continue))))

#?(:cljs
   (defn js-obj-reader
     "Like map-reader*, but handles plain Javascript objects instead of Clojure maps."
     [{:keys  [query ast]
       ::keys [js-key-transform js-value-transform entity-key]
       :as    env
       :or    {js-key-transform   name
               js-value-transform (fn [_ v] v)}}]
     (let [js-key (js-key-transform (:key ast))
           entity (entity env)]
       (if (gobj/containsKey entity js-key)
         (let [v (gobj/get entity js-key)]
           (if (js/Array.isArray v)
             (if query
               (join-seq env (array-seq v))
               v)
             (if (and query (= (type v) js/Object))
               (join (assoc env entity-key v))
               (js-value-transform (:key ast) v))))
         ::continue))))

(defn ident-join-reader
  "This reader will join on any ident join, the entity for the join will be a map containing the same
  key and value expressed on the ident, eg: [{[:id 123] [:id]}], the join entry will be {:id 123}."
  [env]
  (if-let [key (ident-key env)]
    (join {key (ident-value env)} env)
    ::continue))

;; PLUGINS

; Helpers

(defn pre-process-parser-plugin
  "Helper to create a plugin that can view/modify the env/tx of a top-level request.
  f - (fn [{:keys [env tx]}] {:env new-env :tx new-tx})
  If the function returns no env or tx, then the parser will not be called (aborts the parse)"
  [f]
  {::wrap-parser
   (fn transform-parser-out-plugin-external [parser]
     (fn transform-parser-out-plugin-internal [env tx]
       (let [{:keys [env tx]} (f {:env env :tx tx})]
         (if (and (map? env) (seq tx))
           (parser env tx)
           {}))))})

(defn post-process-parser-plugin
  "Helper to create a plugin to work on the parser output. `f` will run once with the parser final result."
  [f]
  {::wrap-parser
   (fn transform-parser-out-plugin-external [parser]
     (fn transform-parser-out-plugin-internal [env tx]
       (let-chan [res (parser env tx)]
         (f res))))})

(def elide-special-outputs-plugin
  (post-process-parser-plugin (partial elide-items special-outputs)))

; Exception

(defn error-message [err]
  #?(:clj  (.getMessage err)
     :cljs (.-message err)))

(defn error-str [err]
  #?(:clj
     (let [msg  (.getMessage err)
           data (ex-data err)]
       (cond-> (str (type err))
         msg (str ": " msg)
         data (str " - " (pr-str data))))

     :cljs
     (let [msg  (.-message err)
           data (ex-data err)]
       (cond-> msg
         data (str " - " (pr-str data))))))

(defn update-action
  "Helper function to update a mutation action."
  [m f]
  (if (contains? m :action)
    (update m :action f)
    m))

(defn process-error [{::keys [process-error] :as env} e]
  (if process-error (process-error env e)
                    (error-str e)))

(defn add-error [{::keys [errors* path] :as env} e]
  (when errors*
    (swap! errors* assoc path (process-error env e)))
  ::reader-error)

(defn wrap-handle-exception [reader]
  (fn wrap-handle-exception-internal
    [{::keys [fail-fast?] :as env}]
    (if fail-fast?
      (reader env)
      (try
        (let [x (reader env)]
          (if (chan? x)
            (go
              (try
                (<? x)
                (catch #?(:clj Throwable :cljs :default) e
                  (add-error env e))))
            x))
        (catch #?(:clj Throwable :cljs :default) e
          (add-error env e))))))

(defn wrap-mutate-handle-exception [mutate]
  (fn wrap-mutate-handle-exception-internal
    [{::keys [process-error fail-fast?] :as env} k p]
    (if fail-fast?
      (mutate env k p)
      (try
        (update-action (mutate env k p)
          (fn [action]
            (fn []
              (try
                (let [res (action)]
                  (if (chan? res)
                    (go
                      (try
                        (<? res)
                        (catch #?(:clj Throwable :cljs :default) e
                          (if process-error (process-error env e)
                                            {::reader-error (error-str e)}))))
                    res))
                (catch #?(:clj Throwable :cljs :default) e
                  (if process-error (process-error env e)
                                    {::reader-error (error-str e)}))))))
        (catch #?(:clj Throwable :cljs :default) e
          {:action
           (fn []
             (if process-error (process-error env e)
                               {::reader-error (error-str e)}))})))))

(defn wrap-parser-exception [parser]
  (fn wrap-parser-exception-internal [env tx]
    (let [errors (atom {})]
      (let-chan [res (parser (assoc env ::errors* errors) tx)]
        (cond-> res
          (seq @errors) (assoc ::errors @errors))))))

(def error-handler-plugin
  {::wrap-read   wrap-handle-exception
   ::wrap-parser wrap-parser-exception
   ::wrap-mutate wrap-mutate-handle-exception})

(def trace-plugin pt/trace-plugin)

(defn collapse-error-path [m path]
  "Reduces the error path to the last available nesting on the map m."
  (vec
    (loop [path' path]
      (if (zero? (count path'))
        (take 1 path)
        (if (get-in m path')
          path'
          (recur (butlast path')))))))

(defn raise-errors [data]
  "Extract errors from the data root and inject those in the same level where
   the error item is present. For example:

   {:query {:item :com.wsscode.pathom/reader-error}
    :com.wsscode.pathom.core/errors
    {[:query :item] {:error \"some error\"}}}

   Is turned into:

   {:query {:item :com.wsscode.pathom/reader-error
            :com.wsscode.pathom.core/errors {:item {:error \"some error\"}}}

   This makes easier to reach for the error when rendering the UI."
  (reduce
    (fn [m [path err]]
      (if (= ::reader-error (get-in m path))
        (let [path' (concat (butlast path) [:com.wsscode.pathom.core/errors (last path)])]
          (assoc-in m path' err))
        m))
    (dissoc data :com.wsscode.pathom.core/errors)
    (get data :com.wsscode.pathom.core/errors)))

(defn raise-response
  "Mutations running through a parser all come back in a map like this {'my/mutation {:result {...}}}. This function
  converts that to {'my/mutation {...}}. Copied from fulcro.server."
  [resp]
  (walk/prewalk
    (fn [x]
      (if (map? x)
        (reduce (fn [acc [k v]]
                  (if (and (symbol? k) (not (nil? (:result v))))
                    (assoc acc k (:result v))
                    (assoc acc k v)))
                {} x)
        x))
    resp))

(def raise-mutation-result-plugin
  {::wrap-parser
   (fn raise-mutation-result-wrap-parser [parser]
     (fn raise-mutation-result-wrap-internal [env tx]
       (raise-response (parser env tx))))})

; Enviroment

(defn env-plugin [extra-env]
  {::wrap-parser (fn env-plugin-wrap-parser [parser]
                   (fn env-plugin-wrap-internal [env tx]
                     (parser (merge extra-env env) tx)))})

(defn env-wrap-plugin
  "This plugin receives a function that will be called to wrap the current
  enviroment each time the main parser is called (parser level)."
  [extra-env-wrapper]
  {::wrap-parser (fn env-wrap-wrap-parser [parser]
                   (fn env-wrap-wrap-internal [env tx]
                     (parser (extra-env-wrapper env) tx)))})

; Request cache

(def request-cache-plugin
  "DEPRECATED not required anymore, this was integrated in the main engine."
  {})

(defn cached* [env key body-fn]
  (if-let [cache (get env ::request-cache)]
    (if-let [[_ hit] (find @cache key)]
      (do (pt/trace env {::pt/event ::cache-hit ::cache-key key})
          (casync/throw-err hit))
      (do
        (pt/trace env {::pt/event ::cache-miss ::cache-key key})
        (let-chan [hit (try
                         (body-fn)
                         (catch #?(:clj Throwable :cljs :default) e
                           (swap! cache assoc key e)
                           (throw e)))]
          (swap! cache assoc key hit)
          hit)))
    (body-fn)))

(defmacro cached [env key body]
  `(cached* ~env ~key (fn [] ~body)))

(defn cached-async* [env key f]
  (if-let [cache (get env ::request-cache)]
    (do
      (swap! cache update key
        (fn [x]
          (if x
            (do
              (pt/trace env {::pt/event ::cache-hit ::cache-key key})
              x)
            (do
              (pt/trace env {::pt/event ::cache-miss ::cache-key key})
              (go-promise (<!maybe (f)))))))

      (get @cache key))
    (go-promise (<!maybe (f)))))

(defn cached-async [{::keys [async-request-cache-ch request-cache] :as env} key f]
  (if async-request-cache-ch
    (if (contains? @request-cache key)
      (get @request-cache key)
      (let [out (async/promise-chan)]
        (async/put! async-request-cache-ch [env key f out])
        (go-promise (-> out <! <!))))
    (cached-async* env key f)))

(defn request-cache-async-loop [ch]
  (go
    (loop []
      (when-let [[env key f out] (<! ch)]
        (>! out (cached-async* env key f))
        (recur)))))

(defn cache-hit [{::keys [request-cache] :as env} key value]
  (pt/trace env {::pt/event ::cache-miss ::cache-key key})
  (swap! request-cache assoc key value)
  value)

(defn cache-contains? [{::keys [request-cache]} key]
  (contains? @request-cache key))

(defn cache-read [{::keys [request-cache]} key]
  (get @request-cache key))

;; PARSER READER

(defn wrap-add-path [reader]
  (fn [{:keys [ast] :as env}]
    (reader (update env ::path (fnil conj []) (:key ast)))))

(defn group-plugins-by-action [plugins]
  (reduce
    (fn [g p]
      (reduce
        (fn [g [k v]]
          (update g k (fnil conj []) v))
        g
        p))
    {}
    plugins))

(defn wrap-normalize-env
  ([parser] (wrap-normalize-env parser []))
  ([parser plugins]
   (fn wrap-normalize-env-internal
     ([env tx] (wrap-normalize-env-internal env tx nil))
     ([env tx target]
      (parser
        (merge
          {::entity            (atom {})
           ::request-cache     (atom {})
           ::entity-key        ::entity
           ::entity-path-cache (atom {})
           ::parent-query      tx}
          env
          {::plugin-actions (group-plugins-by-action plugins)
           ::plugins        plugins
           :target          target})
        tx)))))

(defn wrap-parallel-setup [parser]
  (fn wrap-async-done-signal-internal [env tx]
    (let [signal (atom false)]
      (let-chan [res (parser (assoc env ::pp/done-signal* signal ::pp/active-paths (atom #{}) ::path []) tx)]
        (reset! signal true)
        res))))

(defn wrap-setup-async-cache [parser]
  (fn wrap-setup-async-cache-internal [env tx]
    (let [async-cache-ch (async/chan (get env ::async-request-cache-ch-size 1024))]
      (request-cache-async-loop async-cache-ch)
      (let-chan [res (parser (assoc env ::async-request-cache-ch async-cache-ch) tx)]
        (async/close! async-cache-ch)
        res))))

(defn wrap-reduce-params [reader]
  (fn
    ([env] {:value (reader env)})
    ([env _ _] {:value (reader env)})))

(defn pathom-read' [{::keys [reader] :as env}]
  (read-from env reader))

(defn apply-plugins [v plugins key & params]
  (reduce (fn [x plugin]
            (let [f (get plugin key)]
              (if f (apply f x params) x)))
          v plugins))

(defn exec-plugin-actions [env key v & args]
  (let [plugins     (get-in env [::plugin-actions key] [])
        augmented-v (reduce (fn [x f] (f x)) v plugins)]
    (apply augmented-v args)))

(defn easy-plugins [{::keys [plugins env]}]
  (cond->> plugins
    (fn? env)
    (into [(env-wrap-plugin env)])

    (map? env)
    (into [(env-plugin env)])))

(defn settings-mutation [settings]
  (or (::mutate settings) (:mutate settings)))

(defn parser
  "Create a new pathom serial parser, this parser is capable of waiting for core.async
  to continue processing, allowing async operations to happen during the parsing.

  Options to tune the parser:

  ::p/env - Use this key to provide a default environment for the parser. This is a sugar
  to use the p/env-plugin.

  ::p/mutate - A mutate function that will be called to run mutations, this function
  must have the signature: (mutate env key params)

  ::p/plugins - A vector with plugins."
  [settings]
  (let [plugins (easy-plugins settings)
        mutate  (settings-mutation settings)]
    (-> (pp/parser {:read   (-> pathom-read'
                                (apply-plugins plugins ::wrap-read)
                                wrap-add-path)
                    :mutate (if mutate (apply-plugins mutate plugins ::wrap-mutate))})
        (apply-plugins plugins ::wrap-parser)
        (apply-plugins plugins ::wrap-parser2 settings)
        (wrap-normalize-env plugins))))

(defn async-parser
  "Create a new pathom async parser, this parser is serial and capable of waiting for core.async
  to continue processing, allowing async operations to happen during the parsing.

  Options to tune the parser:

  ::p/env - Use this key to provide a default environment for the parser. This is a sugar
  to use the p/env-plugin.

  ::p/mutate - A mutate function that will be called to run mutations, this function
  must have the signature: (mutate env key params)

  ::p/plugins - A vector with plugins."
  [settings]
  (let [plugins (easy-plugins settings)
        mutate  (settings-mutation settings)]
    (-> (pp/async-parser {:read   (-> pathom-read'
                                      (apply-plugins plugins ::wrap-read)
                                      wrap-add-path)
                          :mutate (if mutate (apply-plugins mutate plugins ::wrap-mutate))})
        (apply-plugins plugins ::wrap-parser)
        (apply-plugins plugins ::wrap-parser2 settings)
        (wrap-setup-async-cache)
        (wrap-normalize-env plugins))))

(defn parallel-parser
  "Creaate a new pathom parallel parser, this parser is capable of coordinating parallel
  data fetch. This also works as an async parser and will handle core async channels
  properly.

  Options to tune the parser:

  ::p/env - Use this key to provide a default environment for the parser. This is a sugar
  to use the p/env-plugin.

  ::p/mutate - A mutate function that will be called to run mutations, this function
  must have the signature: (mutate env key params)

  ::p/plugins - A vector with plugins.

  ::pc/async-request-cache-ch-size - Pathom uses internally a queue to avoid concurrency
  issues with concurrency, each request gets its own channel, so you can consider this
  size needs to accomodate the max parallelism for a single query. Default: 1024

  ::pp/max-key-iterations - there is a loop that happens when processing attributes in
  parallel, this loop will cause multiple iterations to happen in order for a single
  attribute to be processed, but in some conditions this loop can go indefinitely, to
  prevent this situation this option allows to control the max number of iterations, after
  that it will give up on processing that attribute. Default: 10

  ::pp/key-process-timeout - Max time allowed to run the full query. This is a cascading
  timeout, the first level will have the total amount. Default: 60000

  ::pp/processing-recheck-timer - Periodic time to run a checker to verify no parts are
  stuck during the processing, when nil the feature is disabled. Default: nil"
  [settings]
  (let [plugins (easy-plugins settings)
        mutate  (settings-mutation settings)]
    (-> (pp/parallel-parser {:read      (-> pathom-read'
                                            (apply-plugins plugins ::wrap-read)
                                            wrap-add-path)
                             :mutate    (if mutate (apply-plugins mutate plugins ::wrap-mutate))
                             :add-error add-error})
        (apply-plugins plugins ::wrap-parser)
        (apply-plugins plugins ::wrap-parser2 settings)
        (wrap-parallel-setup)
        (wrap-setup-async-cache)
        (wrap-normalize-env plugins))))

;; convience helpers

(def #^{:arglists '([map selection])}
  map-select
  "Starting from a map, do a EQL selection on that map. Think of this function as
  a power up version of select-keys, but supporting nested selections and placeholders
  using the default `>` namespace.

  Example:
  (p/map-select {:foo \"bar\" :deep {:a 1 :b 2}} [{:deep [:a]}])
  => {:deep {:a 1}}"
  (let [parser (parser {::env     {::reader               [map-reader env-placeholder-reader]
                                   ::placeholder-prefixes #{">"}}
                        ::plugins [elide-special-outputs-plugin]})]
    (fn [map selection]
      (parser {::entity map} selection))))

;;;; DEPRECATED

;; old names for join and join-seq
(def continue join)
(def continue-seq join-seq)

(defn placeholder-reader
  "DEPRECATED: use env-placeholder-reader instead.

  Produces a reader that will respond to any keyword with the namespace ns. The join node logical level stays the same
  as the parent where the placeholder node is requested."
  ([]
   (placeholder-reader ">"))
  ([ns]
   (fn [{:keys [ast] :as env}]
     (if (= ns (namespace (:dispatch-key ast)))
       (join env)
       ::continue))))

; keep old name for compatibility
(def placeholder-node placeholder-reader)

(defn pathom-read
  "DEPRECATED: use p/parser to create your parser"
  [{::keys [reader process-reader] :as env} _ _]
  {:value
   (let [env (normalize-env env)]
     (read-from env (if process-reader (process-reader reader) reader)))})

(defn ast-key-id
  "DEPRECATED: use ident-value instead"
  [ast]
  (let [key (some-> ast :key)]
    (if (sequential? key) (second key))))

(defn ensure-attrs [env attributes]
  "DEPRECATED: use p/entity
  Runs the parser against current element to garantee that some fields are loaded.
  This is useful when you need to ensure some values are loaded in order to fetch some
  more complex data."
  (entity env attributes))

(when p.misc/INCLUDE_SPECS
  (s/fdef query->ast
    :args (s/cat :query (s/nilable ::eql/query))
    :ret :edn-query-language.ast/root)

  (s/fdef query->ast1
    :args (s/cat :query ::eql/query)
    :ret :edn-query-language.ast/root)

  (s/fdef ast->query
    :args (s/cat :ast :edn-query-language.ast/node)
    :ret :edn-query-language.ast/root)

  (s/fdef entity
    :args (s/cat :env ::env :attributes (s/? (s/coll-of ::attribute)))
    :ret (s/nilable ::entity))

  (s/fdef entity-attr
    :args (s/cat :env ::env :attribute ::attribute :default (s/? any?))
    :ret any?)

  (s/fdef entity!
    :args (s/cat :env ::env :attributes (s/? (s/coll-of ::attribute)))
    :ret (s/nilable ::entity))

  (s/fdef entity-attr!
    :args (s/cat :env ::env :attribute ::attribute)
    :ret any?)

  (s/fdef swap-entity!
    :args (s/cat :env ::env :fn fn? :args (s/* any?))
    :ret any?)

  (s/fdef collapse-error-path
    :args (s/cat :m map? :path vector?)
    :ret vector?)

  (s/fdef raise-errors
    :args (s/cat :data (s/keys :opt [::errors]))
    :ret map?))
