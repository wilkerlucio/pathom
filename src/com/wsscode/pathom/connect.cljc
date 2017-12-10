(ns com.wsscode.pathom.connect
  (:require [clojure.spec.alpha :as s]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.spec-inspec :as si]
            [clojure.set :as set]
            [om.next :as om]))

(s/def ::attribute keyword?)
(s/def ::attributes-set (s/coll-of ::attribute :kind set?))

(s/def ::idents ::attributes-set)
(s/def ::input ::attributes-set)
(s/def ::out-attribute (s/or :plain ::attribute :composed (s/map-of ::attribute ::output)))
(s/def ::output (s/coll-of ::out-attribute :kind vector?))

(s/def ::index-resolvers (s/map-of qualified-symbol? (s/keys :opt [::cache?])))

(s/def ::io-map (s/map-of ::attribute ::io-map))
(s/def ::index-io (s/map-of ::attributes-set ::io-map))

(s/def ::index-oir (s/map-of ::attribute (s/map-of ::attributes-set (s/coll-of qualified-symbol? :kind set?))))

(s/def ::indexes (s/keys :req [::index-resolvers ::index-io ::index-oir]
                         :opt [::idents]))

(defn spec-keys [form]
  (let [select-keys' #(select-keys %2 %1)]
    (->> form (drop 1) (apply hash-map) (select-keys' [:req :opt]) vals (apply concat)
         (into #{}) vec)))

(defn resolver->in-out [sym]
  (let [fspec (->> (si/safe-form sym) (drop 1) (apply hash-map))
        in    (->> fspec :args (drop 4) first si/spec->root-sym spec-keys)
        out   (->> fspec :ret si/spec->root-sym spec-keys)]
    {::input  (set in)
     ::output out}))

(defn- flat-query [query]
  (->> query om/query->ast :children (mapv :key)))

(defn- normalize-io [output]
  (into {} (map (fn [x] (if (map? x)
                          (let [[k v] (first x)]
                            [k (normalize-io v)])
                          [x {}])))
        output))

(defn merge-io [a b]
  (letfn [(merge-attrs [a b]
            (cond
              (and (map? a) (map? b))
              (merge-with merge-attrs a b)

              (map? a) a
              (map? b) b

              :else b))]
    (merge-with merge-attrs a b)))

(defn merge-oir [a b]
  (merge-with #(merge-with into % %2) a b))

(defmulti index-merger (fn [k _ _] k))

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
   (let [{::keys [input output] :as sym-data} (merge {::sym sym}
                                                     (resolver->in-out sym)
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
               :sym qualified-symbol?
               :sym-data (s/? (s/keys :opt [::input ::output])))
  :ret ::indexes)

(defn pick-resolver [{::keys [indexes dependency-track] :as env}]
  (let [k (-> env :ast :key)
        e (p/entity env)]
    (if-let [attr-resolvers (get-in indexes [::index-oir k])]
      (or
        (->> attr-resolvers
             (map (fn [[attrs sym]]
                    (let [missing (set/difference attrs (set (keys e)))]
                      {:sym     sym
                       :attrs   attrs
                       :missing missing})))
             (sort-by (comp count :missing))
             (some (fn [{:keys [sym attrs]}]
                     (if-not (contains? dependency-track [sym attrs])
                       (let [e       (try
                                       (->> (p/entity (update env ::dependency-track (fnil conj #{}) [sym attrs]) attrs)
                                            (p/elide-items #{::p/reader-error}))
                                       (catch #?(:clj Throwable :cljs :default) _ {}))
                             missing (set/difference (set attrs) (set (keys e)))]
                         (when-not (seq missing)
                           ; TODO: better algorithm to pick the output
                           {:e (select-keys e attrs) :f (first sym)}))))))
        (throw (ex-info (str "Attribute " k " is defined but requirements could not be met.")
                 {:attr k :entity e :requirements (keys attr-resolvers)}))))))

(s/def ::dependency-track (s/coll-of (s/tuple qualified-symbol? ::attributes-set) :kind set?))

(s/fdef pick-resolver
  :args (s/cat :env (s/keys :req [::indexes] :opt [::dependency-track])))

#?(:clj
   (defn reader [env]
     (let [k (-> env :ast :key)]
       (if-let [{:keys [e f]} (pick-resolver env)]
         (let [{::keys [cache?] :or {cache? true}} (get-in env [::indexes ::index-resolvers f])
               response (if cache?
                          (p/cached env [f e] ((resolve f) env e))
                          ((resolve f) env e))
               env'     (get response ::env env)
               response (dissoc response ::env)]
           (if-not (or (nil? response) (map? response))
             (throw (ex-info "Response from reader must be a map." {:sym f :response response})))
           (p/swap-entity! env' #(merge % response))
           (let [x (get response k)]
             (cond
               (sequential? x)
               (->> x (map atom) (p/join-seq env'))

               (nil? x)
               x

               :else
               (p/join (atom (get response k)) env'))))
         ::p/continue))))

(def index-reader
  {::indexes
   (fn [{::keys [indexes] :as env}]
     (p/join indexes env))})

(defn indexed-ident [{::keys [indexes] :as env}]
  (if-let [attr (p/ident-key env)]
    (if (contains? (::idents indexes) attr)
      {attr (p/ident-value env)}
      false)
    false))

(defn ident-reader [env]
  (if-let [ent (indexed-ident env)]
    (p/join (atom ent) env)
    ::p/continue))

(def all-readers [#?(:clj reader) ident-reader index-reader])

;;;;;;;;;;;;;;;;;;;

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
  "This will use the index-fio to re-buildl the index. You might need that if in development you changed some definitions
  and got in a dirty state somehow"
  [{::keys [index-resolvers]}]
  (reduce-kv add {} index-resolvers))

(defn data->shape
  "Helper function to transform a data into an output shape."
  [data]
  (if (map? data)
    (reduce-kv
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
      data)))
