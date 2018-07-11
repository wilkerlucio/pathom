(ns com.wsscode.pathom.connect.graphql
  (:require [camel-snake-kebab.core :as csk]
            [clojure.spec.alpha :as s]
            [clojure.string :as str]
            [#?(:clj  com.wsscode.common.async-clj
                :cljs com.wsscode.common.async-cljs) :refer [let-chan go-catch <? <?maybe]]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.graphql :as pg]
            [com.wsscode.pathom.diplomat.http :as p.http]))

(s/def ::ident-map (s/map-of string? (s/map-of string? (s/tuple string? string?))))
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

(defn camel-case [s]
  (csk/->camelCase s))

(defn kebab-case [s]
  (csk/->kebab-case s))

(defn kebab-key [s]
  (keyword (kebab-case (name s))))

(defn index-key [s] (name (kebab-key s)))

(defn prefixed-key [prefix p s] (keyword (str prefix "." p) (index-key s)))
(defn type-key [prefix s] (prefixed-key prefix "types" s))
(defn interface-key [prefix s] (prefixed-key prefix "interfaces" s))
(defn mutation-key [prefix s] (symbol prefix (kebab-case s)))
(defn service-mutation-key [prefix] (mutation-key prefix "mutation"))

(defn type->field-entry [prefix {:keys [kind name ofType]}]
  (case kind
    "NON_NULL" (recur prefix ofType)
    "LIST" (recur prefix ofType)
    "OBJECT" {(type-key prefix name) {}}
    "INTERFACE" {(interface-key prefix name) {}}
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
                              ident-key     (keyword (kebab-case name) (kebab-case (str/join "-and-" (keys params))))
                              entity-fields (mapv (fn [item] (ident-map-entry prefix item)) (vals params))
                              entity-field  (cond-> entity-fields (= 1 (count entity-fields)) first)
                              fields        (-> (get index-io #{(ffirst (type->field-entry prefix type))})
                                                keys)]
                          (mapv (fn [field]
                                  [field {::entity-field entity-field
                                          ::ident-key    ident-key}])
                            fields))))
              idents))))

(defn index-mutations [{::keys [prefix schema]}]
  (let [mutations (-> schema :__schema :mutationType :fields)]
    (into
      {}
      (map (fn [{:keys [name]}]
             [(mutation-key prefix name) {::pc/sym (service-mutation-key prefix)}]))
      mutations)))

(defn index-schema-types [schema]
  (let [index (->> schema :__schema :types
                   (group-by :name)
                   (into {} (map (fn [[k v]] [k (first v)]))))]
    (-> (assoc schema ::types-index index)
        (update-in [:__schema :queryType] #(merge % (get index (:name %))))
        (update-in [:__schema :mutationType] #(merge % (get index (:name %)))))))

(defn index-schema [{::keys [resolver] :as input}]
  (let [input    (update input ::schema index-schema-types)
        index-io (index-schema-io input)
        input    (assoc input ::pc/index-io index-io)]
    {::pc/index-resolvers
     {resolver {::pc/sym    resolver
                ::pc/cache? false
                ::graphql?  true}}

     ::pc/index-io
     index-io

     ::pc/index-oir
     (index-schema-oir input)

     ::pc/autocomplete-ignore
     (index-autocomplete-ignore input)

     ::pc/idents
     (index-idents input)

     ::pc/mutations
     (index-mutations input)

     ::field->ident
     (index-graphql-idents input)}))

;;;; resolver

(s/fdef index-schema
  :args (s/cat :input (s/keys :req [::resolver ::schema ::prefix] :opt [::ident-map]))
  :ret (s/merge ::pc/indexes
         (s/keys :req [::pc/autocomplete-ignore ::field->ident])))

(defn camel-key [s]
  (if (vector? s)
    s
    (keyword (camel-case (name s)))))

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
  (p/parser {::p/env {::p/reader [error-stamper
                                  (p/map-reader* {::p/map-key-transform camel-key})
                                  gql-ident-reader]}}))

(defn query->graphql
  "Like the pg/query-graphql, but adds name convertion so clj names like :first-name turns in firstName."
  [query]
  (pg/query->graphql query {::pg/js-name (comp camel-case name)}))

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

(defn build-query [{::p/keys [parent-query]
                    ::keys   [prefix]
                    :as      env}
                   ent]
  (->> parent-query p/query->ast
       (p/filter-ast #(str/starts-with? (or (namespace (:dispatch-key %)) "") prefix))
       :children
       (remove #(contains? ent (:key %))) ; remove already known keys
       (remove (comp vector? :key)) ; remove ident attributes
       (map #(ast->graphql (assoc env :ast %) ent))
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
                                                 ::p.http/method ::p.http/post
                                                 ::p.http/as ::p.http/json
                                                 ::p.http/form-params {:query (if (string? query) query (query->graphql query))}))]
    (::p.http/body response)))

(defn load-index [req]
  (let-chan [{:keys [data]} (request req (pg/query->graphql schema-query))]
    (index-schema (assoc req ::schema data))))

(defn graphql-resolve [config env ent]
  (let [env' (merge env config)
        q    (build-query env' ent)
        gq   (query->graphql q)]
    (let-chan [{:keys [data errors]} (request env' gq)]
      (-> (parser-item {::p/entity      data
                        ::p/errors*     (::p/errors* env)
                        ::base-path     (vec (butlast (::p/path env)))
                        ::graphql-query gq
                        ::errors        (index-graphql-errors errors)}
            q)
          (pull-idents)))))

(defn graphql-mutation [config env]
  (let [{:keys     [ast]
         ::pc/keys [source-mutation]
         :as       env'} (merge env config)
        query (p/ast->query {:type :root :children [(assoc ast :key source-mutation :dispatch-key source-mutation)]})
        gq    (query->graphql query)]
    (let-chan [{:keys [data errors]} (request env' gq)]
      (let [parser-response
            (-> (parser-item {::p/entity      data
                              ::p/errors*     (::p/errors* env)
                              ::base-path     (vec (butlast (::p/path env)))
                              ::graphql-query gq
                              ::errors        (index-graphql-errors errors)}
                  (p/ast->query {:type :root :children [(assoc ast :type :join :key (keyword source-mutation) :dispatch-key (keyword source-mutation))]})))]
        (get parser-response (keyword source-mutation))))))

(defn defgraphql-resolver [{::pc/keys [resolver-dispatch mutate-dispatch]} {::keys [resolver prefix] :as config}]
  (if resolver-dispatch
    (defmethod resolver-dispatch resolver [env input]
      (graphql-resolve config env input)))

  (if mutate-dispatch
    (defmethod mutate-dispatch (service-mutation-key prefix) [env _]
      (graphql-mutation config env))))

(s/fdef defgraphql-resolver
  :args (s/cat :env (s/keys :opt [::pc/resolver-dispatch ::pc/mutate-dispatch])
               :config (s/keys :req [::resolver ::prefix])))
