(ns com.wsscode.pathom.connect.graphql
  "DEPRECATED: this whole namespaced is deprecated, it will stay in the codebase to keep
  compatibility for old users, but we recommend moving to the graphql2 ns, the issues
  that happen is that by trying to normalize the graphql names to be more clojure friendly
  we end up in cases were graphql things get unreachable, the new approach just sends
  the data as-is, making everything reachable"
  (:require
    [clojure.spec.alpha :as s]
    [clojure.string :as str]
    [clojure.walk :as walk]
    [com.fulcrologic.guardrails.core :refer [>def >defn >fdef => | <- ?]]
    [#?(:clj  com.wsscode.async.async-clj
        :cljs com.wsscode.async.async-cljs) :refer [let-chan go-catch <? <?maybe]]
    [com.wsscode.pathom.connect :as pc]
    [com.wsscode.pathom.core :as p]
    [com.wsscode.pathom.diplomat.http :as p.http]
    [com.wsscode.pathom.graphql :as pg]))

(declare graphql-resolve graphql-mutation)

(>def ::ident-map (s/map-of string? (s/map-of string? (s/or :kw keyword?
                                                            :tuple (s/tuple string? string?)))))

(>def ::resolver ::pc/sym)
(>def ::prefix string?)

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
         {:type [:kind :name {:ofType 3}]}]}
       {:inputFields
        [:name
         {:type [:kind :name {:ofType 3}]}]}]}]}])

(defn kebab-key [s]
  (keyword (pg/kebab-case (name s))))

(defn index-key [s] (name (kebab-key s)))

(defn prefixed-key [prefix p s] (keyword (str prefix "." p) (index-key s)))
(defn type-key [prefix s] (prefixed-key prefix "types" s))
(defn interface-key [prefix s] (prefixed-key prefix "interfaces" s))
(defn mutation-key [prefix s] (symbol prefix (pg/kebab-case s)))
(defn service-resolver-key [prefix] (mutation-key prefix "resolver"))
(defn service-mutation-key [prefix] (symbol "com.wsscode.pathom.connect.graphql.service-mutations" prefix))

(defn type->field-name [prefix {:keys [kind name ofType]}]
  (case kind
    "NON_NULL" (recur prefix ofType)
    "LIST" (recur prefix ofType)
    "OBJECT" (type-key prefix name)
    "INTERFACE" (interface-key prefix name)
    nil))

(defn type->field-entry [prefix type]
  (if-let [name (type->field-name prefix type)]
    {name {}}
    {}))

(defn index-type-key [prefix {:keys [name kind]}]
  (let [key-fun (case kind
                  "OBJECT" type-key
                  "INTERFACE" interface-key)]
    (key-fun prefix name)))

(defn entity-field-key [prefix entity field]
  (keyword (str prefix "." (index-key entity)) (index-key field)))

(defn index-type [prefix {:keys [fields name interfaces] :as input}]
  {#{(index-type-key prefix input)}
   (-> {}
       ; fields
       (into (map #(vector (entity-field-key prefix name (:name %))
                           (type->field-entry prefix (:type %)))) fields)
       ; interfaces
       (into (map #(vector (interface-key prefix (:name %)) {}) interfaces)))})

(defn ident-root? [{::keys [ident-map]} {:keys [args]}]
  (and (= 1 (count args))
       (get ident-map (-> args first :name))))

(defn ident-root [{::keys [prefix ident-map]} {:keys [name] :as root-field}]
  (if-let [fields (get ident-map name)]
    (if (= 1 (count fields))
      (let [[entity field] (first (vals fields))]
        (assoc root-field ::entity-field (entity-field-key prefix entity field))))))

(defn ident-map-entry [prefix item]
  (cond
    (keyword? item) item
    (vector? item) (entity-field-key prefix (first item) (second item))))

(defn ident-map-params->io [{::keys [prefix]} params]
  (->> params vals (into #{} (map (fn [item] (ident-map-entry prefix item))))))

(defn index-schema-io [{::keys [prefix schema ident-map] :as input}]
  (let [schema (:__schema schema)]
    (-> {}
        (into (comp (filter (comp #{"OBJECT" "INTERFACE"} :kind))
                    (map (partial index-type prefix)))
              (:types schema))
        (assoc #{} (into {} (map #(vector (keyword prefix (index-key (:name %)))
                                          (type->field-entry prefix (:type %))))
                         (->> schema :queryType :fields)))
        (as-> <>
          (reduce (fn [idx {:keys [name type]}]
                    (let [params    (get ident-map name)
                          input-set (ident-map-params->io input params)]
                      (update idx input-set pc/merge-io {(ffirst (type->field-entry prefix type)) {}})))
            <>
            (->> schema :queryType :fields
                 (filter (comp ident-map :name))))))))

(defn args-translate [{::keys [prefix ident-map]} args]
  (or
    (if-let [item (get ident-map (-> args first :name))]
      (if (= 1 (count args))
        #{(keyword (ident-map-entry prefix item))}))
    #{}))

(defn index-schema-oir [{::keys    [prefix schema resolver ident-map]
                         ::pc/keys [index-io]
                         :as       input}]
  (let [schema (:__schema schema)
        roots  (-> schema :queryType :fields)]
    (-> {}
        (into (map #(vector (keyword prefix (index-key (:name %)))
                            {(args-translate input (:args %)) #{resolver}}))
              roots)
        (into (comp
                (filter (comp ident-map :name))
                (mapcat (fn [{:keys [type name]}]
                          (let [params    (get ident-map name)
                                input-set (ident-map-params->io input params)
                                fields    (-> (get index-io #{(ffirst (type->field-entry prefix type))}) keys)]
                            (mapv (fn [field]
                                    [field {input-set #{resolver}}])
                              fields)))))
              roots))))

(defn index-autocomplete-ignore [{::keys [prefix schema]}]
  (let [schema (:__schema schema)]
    (-> #{}
        (into (comp (filter (comp #{"OBJECT" "INTERFACE"} :kind))
                    (map (partial index-type-key prefix)))
              (:types schema)))))

(defn index-idents [{::keys [prefix ident-map]}]
  (into #{}
        (map #(ident-map-entry prefix %))
        (->> (vals ident-map)
             (filterv #(= 1 (count %)))
             (map vals)
             (apply concat))))

(defn index-graphql-idents [{::keys    [prefix schema ident-map]
                             ::pc/keys [index-io]}]
  (let [schema (:__schema schema)
        fields (-> schema :queryType :fields)
        idents (filter (comp ident-map :name) fields)]
    (-> {}
        (into (mapcat (fn [{:keys [name type]}]
                        (let [params        (get ident-map name)
                              ident-key     (keyword (pg/kebab-case name) (pg/kebab-case (str/join "-and-" (keys params))))
                              entity-fields (mapv (fn [item] (ident-map-entry prefix item)) (vals params))
                              entity-field  (cond-> entity-fields (= 1 (count entity-fields)) first)
                              fields        (-> (get index-io #{(ffirst (type->field-entry prefix type))})
                                                keys)]
                          (mapv (fn [field]
                                  [field {::entity-field entity-field
                                          ::ident-key    ident-key}])
                            fields))))
              idents))))

(defn index-mutations [{::keys [prefix schema] :as config}]
  (let [mutations (-> schema :__schema :mutationType :fields)]
    (into
      {(service-mutation-key prefix)
       (pc/mutation (service-mutation-key prefix) {}
         (fn [env _] (graphql-mutation config env)))}
      (map (fn [{:keys [name type]}]
             (let [type-name (some->> type (type->field-name prefix))]
               [(mutation-key prefix name)
                (cond-> {::pc/sym (service-mutation-key prefix)}
                  type-name
                  (assoc ::output-type type-name))])))
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
  (let [resolver (or resolver (service-resolver-key prefix))
        config   (update config ::schema index-schema-types)
        index-io (index-schema-io config)
        config   (assoc config ::pc/index-io index-io
                   ::resolver resolver)]
    {::pc/index-resolvers
     {resolver {::pc/sym               resolver
                ::pc/cache?            false
                ::pc/compute-output    (fn [env]
                                         (->> (filter-graphql-subquery (assoc env ::prefix prefix))
                                              (hash-map :type :root :children)
                                              p/ast->query))
                ::graphql?             true
                ::pc/dynamic-resolver? true
                ::pc/resolve           (fn [env _] (graphql-resolve config env))}}

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

(defn camel-key [s]
  (if (vector? s)
    s
    (keyword (pg/camel-case (name s)))))

(defn gql-ident-reader [{:keys [ast]
                         :as   env}]
  (if (vector? (:key ast))
    (let [e (p/entity env)]
      (let [json (get e (keyword (pg/ident->alias (:key ast))))]
        (p/join json env)))
    ::p/continue))

(defn index-graphql-errors [errors] (group-by :path errors))

(defn error-stamper [{::keys   [errors base-path]
                      ::p/keys [path errors*]}]
  (let [path' (mapv #(cond
                       (p/ident? %)
                       (name (camel-key (namespace (first %))))

                       (keyword? %)
                       (name (camel-key %))

                       :else %)
                path)]
    (if-let [local-errors (get errors path')]
      (do
        (if errors*
          (swap! errors* assoc (into base-path (remove p/ident? path)) (first local-errors)))
        ::error)
      ::p/continue)))

(defn alias-for-line [query line]
  (try
    (if-let [[_ alias] (-> (str/split-lines query)
                           (nth (dec line))
                           (->> (re-find #"^\s*([^:]+): \w+")))]
      alias)
    (catch #?(:clj Throwable :cljs :default) _ nil)))

(def parser-item
  (p/parser {::p/env     {::p/reader [error-stamper
                                      (p/map-reader* {::p/map-key-transform camel-key})
                                      p/env-placeholder-reader
                                      gql-ident-reader]}
             ::p/plugins [(p/env-wrap-plugin
                            (fn [env]
                              (update env ::p/placeholder-prefixes
                                #(or % #{}))))]}))

(defn query->graphql
  "Like the pg/query-graphql, but adds name convertion so clj names like :first-name turns in firstName."
  [query]
  (pg/query->graphql query {::pg/js-name (comp pg/camel-case name)}))

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
                                        ::p.http/form-params {:query (if (string? query) query (query->graphql query))}))]
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
   (let-chan [{:keys [data]} (request req (pg/query->graphql schema-query))]
     (index-schema (assoc req ::schema (normalize-schema data)))))
  ([req indexes]
   (let-chan [idx (load-index req)]
     (swap! indexes pc/merge-indexes idx))))

(defn graphql-resolve [config env]
  (let [env' (merge env config)
        q    (build-query env')
        gq   (query->graphql q)]
    (let-chan [{:keys [data errors]} (request env' gq)]
      (-> (parser-item {::p/entity               data
                        ::p/errors*              (::p/errors* env)
                        ::p/placeholder-prefixes (::p/placeholder-prefixes env')
                        ::base-path              (vec (butlast (::p/path env)))
                        ::graphql-query          gq
                        ::errors                 (index-graphql-errors errors)}
                       q)
          (pull-idents)))))

(defn filter-mutation-subquery [{:keys [ast] :as env}]
  (let [children (filter-graphql-subquery (assoc env ::p/parent-query (:query ast)))]
    (assoc ast :children children)))

(defn graphql-mutation [config env]
  (let [{::pc/keys [source-mutation]
         :as       env'} (merge env config)
        ast'  (filter-mutation-subquery env')
        query (p/ast->query {:type :root :children [(assoc ast' :key source-mutation :dispatch-key source-mutation)]})
        gq    (query->graphql query)]
    (let-chan [{:keys [data errors]} (request env' gq)]
      (let [parser-response
            (-> (parser-item {::p/entity      data
                              ::p/errors*     (::p/errors* env)
                              ::base-path     (vec (butlast (::p/path env)))
                              ::graphql-query gq
                              ::errors        (index-graphql-errors errors)}
                             (p/ast->query {:type :root :children [(assoc ast' :type :join :key (keyword source-mutation) :dispatch-key (keyword source-mutation))]})))]
        (get parser-response (keyword source-mutation))))))

(defn defgraphql-resolver [{::pc/keys [resolver-dispatch mutate-dispatch]} {::keys [resolver prefix] :as config}]
  (if resolver-dispatch
    (defmethod resolver-dispatch resolver [env _]
      (graphql-resolve config env)))

  (if mutate-dispatch
    (defmethod mutate-dispatch (service-mutation-key prefix) [env _]
      (graphql-mutation config env))))
