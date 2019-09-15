(ns com.wsscode.pathom.connect.datomic
  (:require [clojure.set :as set]
            [clojure.spec.alpha :as s]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.misc :as misc]
            [datomic.api :as d]))

(s/def ::db any?)
(s/def ::schema-keys (s/coll-of ::p/attribute :kind set?))
(s/def ::schema-uniques ::schema-keys)

(s/def ::schema-entry
  (s/keys
    :req [:db/ident :db/id :db/valueType :db/cardinality]
    :opt [:db/doc :db/unique]))

(s/def ::schema (s/map-of :db/ident ::schema-entry))

(pc/defresolver conn->db-resolver [env {::keys [conn]}]
  {::pc/input  #{::conn}
   ::pc/output [::db]}
  {::db (d/db conn)})

(defn db->schema
  "Extracts the schema from a datomic db."
  [db]
  (->> (d/q '[:find (pull ?e [*])
              :where
              [_ :db.install/attribute ?e]
              [?e :db/ident ?ident]]
         db)
       (map first)
       (reduce
         (fn [schema entry]
           (assoc schema (:db/ident entry) entry))
         {})))

(pc/defresolver db->schema-resolver [env {::keys [db]}]
  {::pc/input  #{::db}
   ::pc/output [::schema]}
  {::schema (db->schema db)})

(defn schema->uniques
  "Return a set with the ident of the unique attributes in the schema."
  [schema]
  (->> schema
       vals
       (filter :db/unique)
       (into #{} (map :db/ident))))

(pc/defresolver schema->uniques-resolver [env {::keys [schema]}]
  {::pc/input  #{::schema}
   ::pc/output [::schema-uniques]}
  {::schema-uniques (schema->uniques schema)})

(defn filter-subquery
  [{::p/keys [parent-query]
    ::keys   [schema-keys]
    :as      env}]
  (let [ent (p/entity env)]
    (->> parent-query
         (p/lift-placeholders env)
         p/query->ast
         (p/transduce-children
           (comp (filter (comp schema-keys :key))
                 (map #(dissoc % :params))))
         :children
         (into [] (comp (remove #(contains? ent (:key %))) ; remove already known keys
                        ; remove ident attributes
                        (remove (comp vector? :key))))
         (hash-map :type :root :children)
         p/ast->query)))

(defn pick-ident-key
  "Figures which key to use to request data from datomic. This will
  try to pick :db/id if available, returning the number directly.
  Otherwise will look for some attribute that is a unique and is on
  the map, in case of multiple one will be selected by random. The
  format of the unique return is [:attribute value]."
  [{::keys [schema-uniques]} m]
  (if
    (contains? m :db/id)
    (:db/id m)

    (let [available (set/intersection schema-uniques (into #{} (keys m)))]
      (if (seq available)
        [(first available) (get m (first available))]))))

(pc/defresolver schema->schema-keys-resolver [_ {::keys [schema]}]
  {::pc/input  #{::schema}
   ::pc/output [::schema-keys]}
  {::schema-keys (into #{} (keys schema))})

(defn datomic-resolve [{::keys [db] :as config} env]
  (let [id       (pick-ident-key config (p/entity env))
        subquery (filter-subquery (merge env config))]
    (cond
      (nil? id) nil

      (integer? id)
      (d/q [:find (list 'pull '?e subquery) '.
            :in '$ '?e]
        db
        id)

      (p/ident? id)
      (let [[k v] id]
        (d/q [:find (list 'pull '?e subquery) '.
              :in '$ '?v
              :where ['?e k '?v]]
          db
          v)))))

(defn index-schema [{::keys [schema] :as config}]
  (let [resolver  `datomic-resolver
        oir-paths {#{:db/id} #{resolver}}]
    {::pc/index-resolvers
     {resolver {::pc/sym            resolver
                ::pc/cache?         false
                ::pc/compute-output (fn [env]
                                      (filter-subquery (merge env config)))
                ::datomic?          true
                ::pc/resolve        (fn [env _] (datomic-resolve config env))}}

     ::pc/index-oir
     (->> (reduce
            (fn [idx {:db/keys [ident]}]
              (assoc idx ident oir-paths))
            {:db/id (zipmap (map hash-set (schema->uniques schema)) (repeat #{resolver}))}
            (vals schema)))}))

(defn connect-serial-parser
  "Create a standard connect parser using the serial parser.

  This parser recommended for handling small and simple queries, like
  resolvers to process missing configuration options."
  [register]
  (p/parser
    {::p/env     {::p/reader               [p/map-reader
                                            pc/reader2
                                            pc/open-ident-reader
                                            p/env-placeholder-reader]
                  ::p/placeholder-prefixes #{">"}}
     ::p/mutate  pc/mutate
     ::p/plugins [(pc/connect-plugin {::pc/register register})
                  p/error-handler-plugin
                  p/trace-plugin]}))

(defn context-parser
  "Transforms the signature of a regular parser to one that takes
  some initial context to run the query. This returns a fn with
  the following arities:

  [context query] => runs query using context as initial data.
  [env context query] => same as before but accepts initial environment."
  [parser]
  (fn context-parser-internal
    ([context query]
     (parser {::p/entity (atom context)} query))
    ([env context query]
     (parser (assoc env ::p/entity (atom context)) query))))

(def registry
  [conn->db-resolver
   db->schema-resolver
   schema->schema-keys-resolver
   schema->uniques-resolver])

(def config-parser (-> registry connect-serial-parser context-parser))

(defn normalize-config [config]
  (config-parser config [::conn ::db ::schema ::schema-uniques ::schema-keys]))

(defn datomic-connect-plugin [{::keys [key] :as config}]
  (let [config'       (normalize-config config)
        key           (or key (misc/pathom-random-uuid))
        datomic-index (index-schema config')]
    {::p/wrap-parser2
     (fn [parser {::p/keys [plugins]}]
       (let [idx-atoms (keep ::pc/indexes plugins)]
         (doseq [idx* idx-atoms]
           (swap! idx* pc/merge-indexes datomic-index))
         (fn [env tx]
           (parser (assoc env key config') tx))))}))
