(ns com.wsscode.pathom.gen
  (:require [clojure.spec.alpha :as s]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.spec-inspec :as si]
            [clojure.test.check.generators :as gen #?@(:cljs [:include-macros true])]
            [fulcro.client.primitives :as fp]
            [clojure.walk :as walk]
            [clojure.string :as str]))

(s/def ::keep-ui? boolean?)
(s/def ::initialize (s/or :fn fn? :input any?))
(s/def ::remap-tempids? boolean?)

(s/def ::mutate
  (s/fspec :args (s/cat :env map? :params (s/nilable map?))
    :ret any?))

(s/def ::mutate-override ::mutate)

(defn gen-uuid []
  #?(:clj  (java.util.UUID/randomUUID)
     :cljs (random-uuid)))

(defn coll-spec?
  "Check if a given spec is a `coll-of` spec."
  [k]
  (try
    (= (-> k si/spec->root-sym first) `s/coll-of)
    (catch #?(:clj Throwable :cljs :default) _ false)))

(s/fdef coll-spec?
  :args (s/cat :k ident?)
  :ret boolean?)

(s/def ::range
  (s/and (s/tuple nat-int? nat-int?)
         (fn [[a b]]
           (>= b a))))

(s/def ::denorm-range (s/or :int nat-int? :range ::range))

(defn normalize-range [x]
  (if (integer? x)
    [x x]
    x))

(s/fdef normalize-range
  :args (s/cat :x ::denorm-range)
  :ret ::range)

(defn pick-range-value [range]
  (let [[a b] (normalize-range range)]
    (+ (rand-int (- (inc b) a)) a)))

(s/fdef pick-range-value
  :args (s/cat :range ::denorm-range)
  :ret nat-int?)

(defn info [{::keys [silent?]} & msg]
  (if-not silent? (print (str (str/join msg) "\n"))))

(defn get-settings [{::keys [settings] ::p/keys [parent-query]}]
  (merge (some-> parent-query meta ::settings) settings))

(defn spec-generator [{:keys [ast] :as env}]
  (let [k (:dispatch-key ast)
        s (get (get-settings env) k)]
    (or (::gen s) (s/gen k))))

(defn spec-gen-reader [{:keys    [ast query]
                        ::keys   [settings]
                        ::p/keys [parent-join-key]
                        :as      env}]
  (let [k (:dispatch-key ast)
        s (get settings k)]
    (if query
      (if-let [r (or (::coll s)
                     (if (coll-spec? k) [0 5]))]
        (vec (p/join-seq env (range (pick-range-value r))))
        (p/join env))
      (try
        (if (and (p/ident? parent-join-key)
                 (= k (p/ident-key* parent-join-key)))
          (p/ident-value* parent-join-key)
          (gen/generate (spec-generator env)))
        (catch #?(:clj Throwable :cljs :default) _
          (info env "Failed to generate attribute " k)
          nil)))))

(s/def spec-gen-reader ::p/reader-fn)

(defn gen-mutate [{::keys [settings] :as env} k params]
  {:action
   (fn []
     (info env "Gen mutation called " k params)
     (when-let [{::keys [fn]} (get settings k)]
       (fn env)))})

(def parser
  (p/parser {::p/plugins [(p/env-plugin {::p/reader spec-gen-reader})]
             :mutate     gen-mutate}))

(defn bound-unbounded-recursions [query n]
  (walk/postwalk
    (fn [x]
      (if (= x '...) n x))
    query))

(defn- is-ui-query-fragment?
  "Check the given keyword to see if it is in the :ui namespace."
  [kw]
  (let [kw (if (map? kw) (-> kw keys first) kw)]
    (when (keyword? kw) (some->> kw namespace (re-find #"^ui(?:\.|$)")))))

(defn strip-ui
  "Returns a new query with fragments that are in the `ui` namespace removed."
  [query]
  (let [ast              (p/query->ast query)
        drop-ui-children (fn drop-ui-children [ast-node]
                           (let [children (reduce (fn [acc n]
                                                    (if (is-ui-query-fragment? (:dispatch-key n))
                                                      acc
                                                      (conj acc (drop-ui-children n))))
                                                  [] (:children ast-node))]
                             (assoc ast-node :children children)))]
    (p/ast->query (drop-ui-children ast))))

(defn query->props
  "Generates data from a given query using the spec generators for the attributes."
  ([query] (query->props {} query))
  ([{::keys [keep-ui?] :as env} query]
   (let [query (cond-> query (not keep-ui?) strip-ui)]
     (parser (merge {::p/union-path (fn [env] (-> env :ast :query ffirst))} env)
       (-> query
           (p/remove-query-wildcard)
           (bound-unbounded-recursions (get env ::unbounded-recursion-gen-size 3)))))))

(defn comp-initialize [{::keys [initialize]
                        :or    {initialize true}}
                       comp
                       x]
  (cond-> x
    initialize
    (p/deep-merge (cond
                    (fn? initialize)
                    (initialize (fp/get-initial-state comp nil))

                    (:data initialize)
                    (fp/get-initial-state comp (:data initialize))

                    :else
                    (fp/get-initial-state comp nil)))))

(defn comp->props
  "Generates from a given component using spec generators for the attributes."
  ([comp]
   (comp->props {} comp))
  ([{::keys [initialize] :as env :or {initialize true}} comp]
   (->> (query->props env (fp/get-query comp))
        (comp-initialize env comp))))

(defn comp->db
  "Generates the query from component and convert into Fulcro db format."
  ([comp]
   (comp->db {} comp))
  ([env comp]
   (as-> (query->props env (fp/get-query comp)) <>
     (fp/tree->db comp <> true))))

; actual props generator

(defn map->gen
  ([x] (apply gen/hash-map (apply concat x)))
  ([{::keys [such-that fmap such-that-max-tries]} x]
   (let [base (cond->> (apply gen/hash-map (apply concat x))
                fmap
                (gen/fmap fmap))]
     (if such-that
       (gen/such-that such-that base (or such-that-max-tries 30))
       base))))

(defn distinct-by [f s]
  (:res
    (reduce
      (fn [{:keys [appear] :as acc} x]
        (let [xv (f x)]
          (if (contains? appear xv)
            acc
            (-> acc
                (update :appear conj xv)
                (update :res conj x)))))
      {:appear #{} :res []}
      s)))

(defn normalize-placeholders [{::p/keys [placeholder-prefixes]
                               :or      {placeholder-prefixes #{">"}}
                               :as      env}
                              outer
                              inner]
  (as-> inner <>
       (reduce-kv
         (fn [m k v]
           (let [v' (cond (contains? outer k)
                          (get outer k)

                          :else
                          v)]
             (assoc m k v')))
         inner
         <>)
       (reduce-kv
         (fn [m k v]
           (let [v' (cond (and (keyword? k) (contains? placeholder-prefixes (namespace k)))
                          (normalize-placeholders env m v)

                          (map? v)
                          (normalize-placeholders env {} v)

                          (vector? v)
                          (mapv #(normalize-placeholders env {} %) v)

                          :else
                          v)]
             (assoc m k v')))
         <>
         <>)))

(defn gen-query-join [{:keys [query] :as env}]
  (map->gen (meta query) (p/join env)))

(defn gen-query-join-sample [env]
  (gen/generate (gen-query-join env)))

(defn query-props-generator-reader
  [{:keys    [ast query]
    ::keys   [transform-generator]
    ::p/keys [parent-join-key]
    :or      {transform-generator identity}
    :as      env}]
  (let [k        (:dispatch-key ast)
        settings (get-settings env)
        {::keys [distinct] :as s} (get settings k)]
    (if query
      (if-let [r (or (::coll s)
                     (if (coll-spec? k) [0 5]))]
        (let [[min max] (normalize-range r)]
          (cond->> (gen/vector (transform-generator (gen-query-join env)) min max)
            distinct (gen/fmap #(distinct-by distinct %))))
        (transform-generator (gen-query-join env)))
      (try
        (if (and (p/ident? parent-join-key)
                 (= k (p/ident-key* parent-join-key)))
          (gen/return (p/ident-value* parent-join-key))
          (transform-generator (spec-generator env)))
        (catch #?(:clj Throwable :cljs :default) _
          (info env "Failed to generate attribute " k)
          (gen/return nil))))))

(defn remap-tempids [params]
  (let [ids (volatile! {})]
    (walk/postwalk
      (fn [x]
        (when (fp/tempid? x) (vswap! ids assoc x (gen-uuid)))
        x)
      params)
    (if (seq @ids)
      {::fp/tempids @ids}
      {})))

(defn query-props-gen-mutate
  [{:keys  [query]
    ::keys [remap-tempids? mutate-override]
    :as    env
    :or    {remap-tempids? true}} k p]
  {:action
   (fn []
     (let [override   (or mutate-override (get-in (get-settings env) [k ::mutate]))
           result-gen (cond
                        override
                        (gen/return (override env p))

                        query
                        (gen-query-join env)

                        :else
                        (gen/return {}))]
       (cond->> result-gen
         remap-tempids? (gen/fmap #(merge % (remap-tempids p))))))})

(def query-props-generator-parser
  (p/parser {::p/env     {::p/reader query-props-generator-reader}
             ::p/plugins [{::p/wrap-parser
                           (fn transform-parser-out-plugin-external [parser]
                             (fn transform-parser-out-plugin-internal [env tx]
                               (let [res (parser env tx)]
                                 (gen/fmap
                                   #(normalize-placeholders env {} %)
                                   (map->gen (meta tx) res)))))}]
             :mutate     query-props-gen-mutate}))

(defn query-props-generator
  ([query] (query-props-generator {} query))
  ([{::keys [keep-ui?] :as env} query]
   (let [query (cond-> query (not keep-ui?) strip-ui)]
     (query-props-generator-parser (merge {::p/union-path (fn [env] (-> env :ast :query ffirst))} env)
       (-> query
           (p/remove-query-wildcard)
           (bound-unbounded-recursions (get env ::unbounded-recursion-gen-size 3)))))))

(defn comp-props-generator [env comp]
  (gen/let [query-data (query-props-generator env (fp/get-query comp))]
    (comp-initialize env comp query-data)))

(defn set-gen [gen-env kw gen]
  (assoc-in gen-env [::settings kw ::gen] gen))

(defn set-coll [gen-env kw coll]
  (assoc-in gen-env [::settings kw ::coll] coll))
