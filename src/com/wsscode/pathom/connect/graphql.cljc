(ns com.wsscode.pathom.connect.graphql
  (:require [camel-snake-kebab.core :as csk]
            [clojure.spec.alpha :as s]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as p.connect]
            [com.wsscode.pathom.graphql :as p.graphql]
            [fulcro.client.primitives :as fp]
            [clojure.string :as str]))

(s/def ::ident-map (s/map-of string? (s/tuple string? string?)))

(def schema-query
  [{:__schema
    [{:queryType
      [:name
       :kind
       {:fields
        [:name
         {:args [:name :defaultValue {:type [:kind :name]}]}
         {:type [:kind :name {:ofType [:kind :name]}]}]}]}

     {:types
      [:name
       :kind
       {:interfaces [:name :kind]}
       {:fields
        [:name
         {:args [:name :defaultValue {:type [:kind :name]}]}
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

(defn ident-root [{::keys [prefix ident-map]} {:keys [args] :as query-root}]
  (if-let [[entity field] (get ident-map (-> args first :name))]
    (if (= 1 (count args))
      (assoc query-root ::entity-field (entity-field-key prefix entity field)))))

(defn index-schema-io [{::keys [prefix schema] :as input}]
  (let [schema (:__schema schema)]
    (-> {}
        (into (comp (filter (comp #{"OBJECT" "INTERFACE"} :kind))
                    (map (partial index-type prefix)))
              (:types schema))
        (assoc #{} (into {} (map #(vector (keyword prefix (index-key (:name %)))
                                          (type->field-entry prefix (:type %))))
                         (->> schema :queryType :fields
                              (remove (partial ident-root? input)))))
        (as-> <>
          (reduce (fn [idx {:keys  [type]
                            ::keys [entity-field]}]
                    (update idx #{entity-field} p.connect/merge-io {(type-key prefix (:name type)) {}}))
                  <>
                  (->> schema :queryType :fields
                       (keep (partial ident-root input))))))))

(defn args-translate [{::keys [prefix ident-map]} args]
  (or
    (if-let [[entity field] (get ident-map (-> args first :name))]
      (if (= 1 (count args))
        #{(keyword (entity-field-key prefix entity field))}))
    #{}))

(defn index-schema-oif [{::keys           [prefix schema resolver]
                         ::p.connect/keys [index-io]
                         :as              input}]
  (let [schema (:__schema schema)
        fields (-> schema :queryType :fields)
        idents (keep (partial ident-root input) fields)
        roots  (remove (partial ident-root? input) fields)]
    (-> {}
        (into (map #(vector (keyword prefix (index-key (:name %)))
                            {(args-translate input (:args %)) #{resolver}}))
              roots)
        (into (mapcat (fn [{::keys [entity-field]
                            :keys  [type]}]
                        (let [fields (-> (get index-io #{(type-key prefix (:name type))})
                                         keys)]
                          (mapv (fn [field]
                                  [field {#{entity-field} #{resolver}}])
                            fields))))
              idents))))

(defn index-autocomplete-ignore [{::keys [prefix schema]}]
  (let [schema (:__schema schema)]
    (-> #{}
        (into (comp (filter (comp #{"OBJECT" "INTERFACE"} :kind))
                    (map (partial index-type-key prefix)))
              (:types schema)))))

(defn index-idents [{::keys [prefix ident-map]}]
  (into #{} (map #(apply entity-field-key prefix %))
        (vals ident-map)))

(defn index-graphql-idents [{::keys           [prefix schema]
                             ::p.connect/keys [index-io]
                             :as              input}]
  (let [schema (:__schema schema)
        fields (-> schema :queryType :fields)
        idents (keep (partial ident-root input) fields)]
    (-> {}
        (into (mapcat (fn [{:keys  [type args name]
                            ::keys [entity-field]}]
                        (let [fields (-> (get index-io #{(type-key prefix (:name type))})
                                         keys)]
                          (mapv (fn [field]
                                  [field {::entity-field entity-field
                                          ::ident-key    (keyword (kebab-case name)
                                                                  (kebab-case (-> args first :name)))}])
                            fields))))
              idents))))

(defn index-schema [{::keys [resolver] :as input}]
  (let [index-io (index-schema-io input)
        input    (assoc input ::p.connect/index-io index-io)]
    {::p.connect/index-resolvers
     {resolver {::p.connect/sym    resolver
                ::p.connect/cache? false}}

     ::p.connect/index-io
     index-io

     ::p.connect/index-oir
     (index-schema-oif input)

     ::p.connect/autocomplete-ignore
     (index-autocomplete-ignore input)

     ::p.connect/idents
     (index-idents input)

     ::field->ident
     (index-graphql-idents input)}))

(s/fdef index-schema
  :args (s/cat :input (s/keys :req [::resolver ::schema ::prefix ::ident-map]))
  :ret (s/merge ::p.connect/indexes
         (s/keys :req [::p.connect/autocomplete-ignore ::field->ident])))

;;;; resolver

(defn camel-key [s]
  (if (vector? s)
    s
    (keyword (camel-case (name s)))))

(defn gql-ident-reader [{:keys [ast]
                         :as   env}]
  (if (vector? (:key ast))
    (let [e (p/entity env)]
      (let [json (get e (keyword (p.graphql/ident->alias (:key ast))))]
        (p/join json env)))
    ::p/continue))

(defn index-graphql-errors [errors] (group-by :query-path errors))

(defn error-stamper [{::keys   [errors base-path]
                      ::p/keys [path errors*]}]
  (let [path' (mapv #(cond
                       (p/ident? %)
                       (camel-key (namespace (first %)))

                       (keyword? %)
                       (camel-key %)

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
  (p/parser {::p/plugins [(p/env-plugin {::p/reader [error-stamper
                                                     (p/map-reader* {::p/map-key-transform camel-key})
                                                     gql-ident-reader]})]}))

(defn query->graphql [query]
  (p.graphql/query->graphql query {::p.graphql/js-name (comp camel-case name)}))

(defn ast->graphql [{:keys            [ast]
                     ::p.connect/keys [indexes]}
                    ent]
  (let [{::keys [field->ident]} indexes
        {:keys [key]} ast
        q [(fp/ast->query ast)]]
    (if-let [{::keys [entity-field ident-key]} (get field->ident key)]
      (let [ident-key' [ident-key (get ent entity-field)]]
        [{ident-key' q}])
      q)))

(defn build-query [{::p/keys [parent-query]
                    ::keys   [prefix]
                    :as      env}
                   ent]
  (->> parent-query fp/query->ast (p/filter-ast #(str/starts-with? (namespace (:dispatch-key %)) prefix))
       :children
       (remove #(contains? ent (:key %)))
       (remove (comp vector? :key))
       (map #(ast->graphql (assoc env :ast %) ent))
       (reduce p/merge-queries)))

(defn pull-idents [data]
  (reduce-kv (fn [x k v]
               (if (vector? k)
                 (into x v)
                 (assoc x k v)))
    {}
    data))
