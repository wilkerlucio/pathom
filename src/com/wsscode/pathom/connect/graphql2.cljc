(ns com.wsscode.pathom.connect.graphql2
  (:require [clojure.spec.alpha :as s]
            [clojure.string :as str]
            [#?(:clj  com.wsscode.common.async-clj
                :cljs com.wsscode.common.async-cljs) :refer [let-chan go-catch <? <?maybe]]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.graphql :as pg]
            [com.wsscode.pathom.diplomat.http :as p.http]
            [clojure.walk :as walk]))

(declare graphql-resolve graphql-mutation)

(s/def ::ident-map (s/map-of string? (s/map-of string? (s/or :kw keyword?
                                                             :tuple (s/tuple string? string?)))))
(s/def ::resolver ::pc/sym)
(s/def ::prefix string?)

(def schema-query
  [{:__schema
    [{:queryType
      [:name]}

     {:mutationType
      [:name]}

     {:types
      [:name
       :kind
       {:interfaces [:name :kind]}
       {:fields
        [:name
         {:args [:name :defaultValue {:type [:kind :name {:ofType 3}]}]}
         {:type [:kind :name {:ofType 3}]}]}]}]}])

(s/def ::mung (s/fspec :args (s/cat :string string?) :ret string?))
(s/def ::demung (s/fspec :args (s/cat :string string?) :ret string?))

(defn prefixed-key [{::keys [prefix mung]} p s] (keyword (str prefix "." p) (mung s)))
(defn type-key [env s] (prefixed-key env "types" s))
(defn interface-key [env s] (prefixed-key env "interfaces" s))
(defn mutation-key [{::keys [prefix mung]} s] (symbol prefix (mung s)))
(defn service-resolver-key [env] (mutation-key env "resolver"))
(defn service-mutation-key [{::keys [prefix]}] (symbol "com.wsscode.pathom.connect.graphql.service-mutations" prefix))

(defn type->field-entry [env {:keys [kind name ofType]}]
  (case kind
    "NON_NULL" (recur env ofType)
    "LIST" (recur env ofType)
    "OBJECT" {(type-key env name) {}}
    "INTERFACE" {(interface-key env name) {}}
    {}))

(defn index-type-key [env {:keys [name kind]}]
  (let [key-fun (case kind
                  "OBJECT" type-key
                  "INTERFACE" interface-key)]
    (key-fun env name)))

(defn entity-field-key [{::keys [mung prefix]} entity field]
  (keyword (str prefix "." (mung entity)) (mung field)))

(defn index-type [env {:keys [fields name interfaces] :as input}]
  {#{(index-type-key env input)}
   (-> {}
       ; fields
       (into (map #(vector (entity-field-key env name (:name %))
                     (type->field-entry env (:type %)))) fields)
       ; interfaces
       (into (map #(vector (interface-key env (:name %)) {}) interfaces)))})

(defn ident-root? [{::keys [ident-map]} {:keys [args]}]
  (and (= 1 (count args))
       (get ident-map (-> args first :name))))

(defn ident-root [{::keys [prefix ident-map]} {:keys [name] :as root-field}]
  (if-let [fields (get ident-map name)]
    (if (= 1 (count fields))
      (let [[entity field] (first (vals fields))]
        (assoc root-field ::entity-field (entity-field-key prefix entity field))))))

(defn ident-map-entry [env item]
  (cond
    (keyword? item) item
    (vector? item) (entity-field-key env (first item) (second item))))

(defn ident-map-params->io [env params]
  (->> params vals (into #{} (map (fn [item] (ident-map-entry env item))))))

(defn index-schema-io [{::keys [prefix schema ident-map mung] :as input}]
  (let [schema (:__schema schema)]
    (-> {}
        (into (comp (filter (comp #{"OBJECT" "INTERFACE"} :kind))
                    (map (partial index-type input)))
              (:types schema))
        (assoc #{} (into {} (map #(vector (keyword prefix (mung (:name %)))
                                    (type->field-entry input (:type %))))
                         (->> schema :queryType :fields)))
        (as-> <>
          (reduce (fn [idx {:keys [name type]}]
                    (let [params    (get ident-map name)
                          input-set (ident-map-params->io input params)]
                      (update idx input-set pc/merge-io {(ffirst (type->field-entry input type)) {}})))
            <>
            (->> schema :queryType :fields
                 (filter (comp ident-map :name))))))))

(defn args-translate [{::keys [prefix ident-map]} args]
  (or
    (if-let [item (get ident-map (-> args first :name))]
      (if (= 1 (count args))
        #{(keyword (ident-map-entry prefix item))}))
    #{}))

(defn index-schema-oir [{::keys    [prefix schema resolver ident-map mung]
                         ::pc/keys [index-io]
                         :as       input}]
  (let [schema (:__schema schema)
        roots  (-> schema :queryType :fields)]
    (-> {}
        (into (map #(vector (keyword prefix (mung (:name %)))
                      {(args-translate input (:args %)) #{resolver}}))
              roots)
        (into (comp
                (filter (comp ident-map :name))
                (mapcat (fn [{:keys [type name]}]
                          (let [params    (get ident-map name)
                                input-set (ident-map-params->io input params)
                                fields    (-> (get index-io #{(ffirst (type->field-entry input type))}) keys)]
                            (mapv (fn [field]
                                    [field {input-set #{resolver}}])
                              fields)))))
              roots))))

(defn index-autocomplete-ignore [{::keys [schema] :as env}]
  (let [schema (:__schema schema)]
    (-> #{}
        (into (comp (filter (comp #{"OBJECT" "INTERFACE"} :kind))
                    (map (partial index-type-key env)))
              (:types schema)))))

(defn index-idents [{::keys [ident-map] :as env}]
  (into #{}
        (map #(ident-map-entry env %))
        (->> (vals ident-map)
             (filterv #(= 1 (count %)))
             (map vals)
             (apply concat))))

(defn index-graphql-idents [{::keys    [schema ident-map mung]
                             ::pc/keys [index-io]
                             :as       env}]
  (let [schema (:__schema schema)
        fields (-> schema :queryType :fields)
        idents (filter (comp ident-map :name) fields)]
    (-> {}
        (into (mapcat (fn [{:keys [name type]}]
                        (let [params        (get ident-map name)
                              ident-key     (keyword (mung name) (mung (str/join "-and-" (keys params))))
                              entity-fields (mapv (fn [item] (ident-map-entry env item)) (vals params))
                              entity-field  (cond-> entity-fields (= 1 (count entity-fields)) first)
                              fields        (-> (get index-io #{(ffirst (type->field-entry env type))})
                                                keys)]
                          (mapv (fn [field]
                                  [field {::entity-field entity-field
                                          ::ident-key    ident-key}])
                            fields))))
              idents))))

(defn index-mutations [{::keys [schema] :as config}]
  (let [mutations (-> schema :__schema :mutationType :fields)]
    (into
      {(service-mutation-key config)
       (pc/mutation (service-mutation-key config) {}
         (fn [env _] (graphql-mutation config env)))}
      (map (fn [{:keys [name]}]
             [(mutation-key config name) {::pc/sym (service-mutation-key config)}]))
      mutations)))

(defn index-schema-types [schema]
  (let [index (->> schema :__schema :types
                   (group-by :name)
                   (into {} (map (fn [[k v]] [k (first v)]))))]
    (-> (assoc schema ::types-index index)
        (update-in [:__schema :queryType] #(merge % (get index (:name %))))
        (update-in [:__schema :mutationType] #(merge % (get index (:name %)))))))

(defn remove-pathom-params [params]
  (if params
    (reduce-kv
      (fn [m k v]
        (if (and (keyword? k)
                 (= "pathom" (namespace k)))
          m
          (assoc m k v)))
      {}
      params)))

(defn filter-graphql-subquery [{::p/keys [parent-query]
                                ::keys   [prefix]
                                :as      env}]
  (let [ent (p/entity env)]
    (->> parent-query
         (p/lift-placeholders env)
         p/query->ast
         (p/transduce-children
           (comp (filter #(str/starts-with? (or (namespace (:dispatch-key %)) "") prefix))
                 (map #(update % :params remove-pathom-params))))
         :children
         ; remove already known keys
         (remove #(contains? ent (:key %)))
         ; remove ident attributes
         (remove (comp vector? :key)))))

(defn index-schema [{::keys [resolver prefix] :as config}]
  (let [config   (merge {::mung identity} config)
        resolver (or resolver (service-resolver-key config))
        config   (update config ::schema index-schema-types)
        index-io (index-schema-io config)
        config   (assoc config ::pc/index-io index-io
                               ::resolver resolver)]
    {::pc/index-resolvers
     {resolver {::pc/sym            resolver
                ::pc/cache?         false
                ::pc/compute-output (fn [env]
                                      (->> (filter-graphql-subquery (assoc env ::prefix prefix))
                                           (hash-map :type :root :children)
                                           p/ast->query))
                ::graphql?          true
                ::pc/resolve        (fn [env _] (graphql-resolve config env))}}

     ::pc/index-io
     index-io

     ::pc/index-oir
     (index-schema-oir config)

     ::pc/autocomplete-ignore
     (index-autocomplete-ignore config)

     ::pc/idents
     (index-idents config)

     ::pc/index-mutations
     (index-mutations config)

     ::field->ident
     (index-graphql-idents config)}))

;;;; resolver

(s/fdef index-schema
  :args (s/cat :input (s/keys :req [::schema ::prefix] :opt [::resolver ::ident-map ::mung]))
  :ret  (s/merge ::pc/indexes
          (s/keys :req [::pc/autocomplete-ignore ::field->ident])))

(defn demung-key [demung s]
  (if (vector? s)
    s
    (keyword (demung (name s)))))

(defn gql-ident-reader [{:keys [ast]
                         :as   env}]
  (if (vector? (:key ast))
    (let [e (p/entity env)]
      (let [json (get e (keyword (pg/ident->alias (:key ast))))]
        (p/join json env)))
    ::p/continue))

(defn index-graphql-errors [errors]
  (->> errors
       (map (fn [{:keys [path] :as err}]
              (cond-> err
                (and path (contains? #{"query" "mutation"} (first path)))
                (update :path (comp vec next)))))
       (group-by :path)))

(defn error-stamper [{::keys   [errors base-path demung]
                      ::p/keys [path errors*]}]
  (let [path' (mapv #(cond
                       (p/ident? %)
                       (demung (namespace (first %)))

                       (keyword? %)
                       (demung (name %))

                       :else %)
                path)]
    (if-let [local-errors (or (get errors path')
                              (get errors nil))]
      (do
        (if errors*
          (swap! errors* assoc (into base-path (remove p/ident? path)) (first local-errors)))
        ::p/reader-error)
      ::p/continue)))

(defn alias-for-line [query line]
  (try
    (if-let [[_ alias] (-> (str/split-lines query)
                           (nth (dec line))
                           (->> (re-find #"^\s*([^:]+): \w+")))]
      alias)
    (catch #?(:clj Throwable :cljs :default) _ nil)))

(defn demunger-map-reader
  "Reader that will demunge keys using user function"
  [{::keys [demung]
    :keys  [ast query]
    :as    env}]
  (let [entity (p/entity env)]
    (if-let [[_ v] (find entity (demung-key demung (:key ast)))]
      (if (sequential? v)
        (if query
          (p/join-seq env v)
          v)
        (if (and (map? v) query)
          (p/join v env)
          v))
      ::p/continue)))

(def parser-item
  (p/parser {::p/env     {::p/reader [error-stamper
                                      demunger-map-reader
                                      p/env-placeholder-reader
                                      gql-ident-reader]}
             ::p/plugins [(p/env-wrap-plugin
                            (fn [env]
                              (-> (merge {::demung identity} env)
                                  (update ::p/placeholder-prefixes
                                    #(or % #{})))))]}))

(defn query->graphql
  "Like the pg/query-graphql, but adds name convertion so clj names like :first-name turns in firstName."
  [query {::keys [demung] :or {demung identity}}]
  (pg/query->graphql query {::pg/js-name (comp demung name)}))

(defn ast->graphql [{:keys     [ast]
                     ::pc/keys [indexes]}
                    ent]
  (let [{::keys [field->ident]} indexes
        {:keys [key]} ast
        q [(p/ast->query ast)]]
    (if-let [{::keys [entity-field ident-key]} (get field->ident key)]
      (let [ident-value (if (vector? entity-field) (mapv ent entity-field) (get ent entity-field))
            ident-key'  [ident-key ident-value]]
        [{ident-key' q}])
      q)))

(defn build-query [env]
  (->> (filter-graphql-subquery env)
       (map #(ast->graphql (assoc env :ast %) (p/entity env)))
       (reduce p/merge-queries [])))

(defn pull-idents [data]
  (reduce-kv (fn [x k v]
               (if (vector? k)
                 (into x v)
                 (assoc x k v)))
    {}
    data))

(defn request [{::keys [url] :as env} query]
  (let-chan [response (p.http/request (assoc env ::p.http/url url
                                                 ::p.http/content-type ::p.http/json
                                                 ::p.http/method ::p.http/post
                                                 ::p.http/as ::p.http/json
                                                 ::p.http/form-params {:query (if (string? query) query (query->graphql query env))}))]
    (::p.http/body response)))

(defn normalize-schema
  "Depending on encoding settings sometimes the :kind can come as a keyword, the indexer expects it to
  be a string, this function ensures all :kind fields are strings."
  [schema]
  (walk/postwalk
    (fn [x]
      (if (and (map? x)
               (contains? x :kind))
        (update x :kind #(some-> % name))
        x))
    schema))

(defn load-index
  ([req]
   (let-chan [{:keys [data]} (request req (pg/query->graphql schema-query req))]
     (index-schema (assoc req ::schema (normalize-schema data)))))
  ([req indexes]
   (let-chan [idx (load-index req)]
     (swap! indexes pc/merge-indexes idx))))

(defn graphql-resolve [{::keys [demung] :as config} env]
  (let [env' (merge env config)
        parser-item' (::parser-item config parser-item)
        q    (build-query env')
        gq   (query->graphql q config)]
    (let-chan [{:keys [data errors]} (request env' gq)]
      (-> (parser-item' {::p/entity               data
                         ::p/errors*              (::p/errors* env)
                         ::p/placeholder-prefixes (::p/placeholder-prefixes env')
                         ::demung                 (or demung identity)
                         ::base-path              (vec (butlast (::p/path env)))
                         ::graphql-query          gq
                         ::errors                 (index-graphql-errors errors)}
            q)
          (pull-idents)))))

(defn graphql-mutation [{::keys [demung] :as config} env]
  (let [{:keys     [ast]
         ::pc/keys [source-mutation]
         :as       env'} (merge env config)
        parser-item' (::parser-item config parser-item)
        query (p/ast->query {:type :root :children [(assoc ast :key source-mutation :dispatch-key source-mutation)]})
        gq    (query->graphql query config)]
    (let-chan [{:keys [data errors]} (request env' gq)]
      #_ (js/console.log "Mutation response" data errors env config)
      (let [parser-response
            (-> (parser-item' {::p/entity      data
                               ::p/errors*     (::p/errors* env)
                               ::base-path     (vec (butlast (::p/path env)))
                               ::demung        (or demung identity)
                               ::graphql-query gq
                               ::errors        (index-graphql-errors errors)}
                  (p/ast->query {:type     :root
                                 :children [(assoc ast
                                              :type :join
                                              :key (keyword source-mutation)
                                              :dispatch-key (keyword source-mutation))]})))]
        (get parser-response (keyword source-mutation))))))

(defn defgraphql-resolver [{::pc/keys [resolver-dispatch mutate-dispatch]} {::keys [resolver] :as config}]
  (let [config (merge {::demung identity} config)]
    (if resolver-dispatch
      (defmethod resolver-dispatch resolver [env _]
        (graphql-resolve config env)))

    (if mutate-dispatch
      (defmethod mutate-dispatch (service-mutation-key config) [env _]
        (graphql-mutation config env)))))

(s/fdef defgraphql-resolver
  :args (s/cat :env (s/keys :opt [::pc/resolver-dispatch ::pc/mutate-dispatch])
               :config (s/keys :req [::resolver ::prefix])))
