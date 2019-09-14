(ns com.wsscode.pathom.connect.datomic
  (:require [clojure.spec.alpha :as s]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.core :as p]
            [datomic.api :as d]))

(s/def ::db any?)
(s/def ::schema-keys (s/coll-of ::p/attribute :kind set?))

(s/def ::schema-entry
  (s/keys
    :req [:db/ident :db/id :db/valueType :db/cardinality]
    :opt [:db/doc :db/unique]))

(s/def ::schema (s/map-of :db/ident ::schema-entry))

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

(defn schema->uniques
  "Return a set with the ident of the unique attributes in the schema."
  [schema]
  (->> schema
       vals
       (filter :db/unique)
       (into #{} (map :db/ident))))

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

(defn datomic-resolve [config env]
  (println "GO")
  {})

(defn index-schema [{::keys [schema] :as config}]
  (let [config    (assoc config ::schema-keys (into #{} (map :db/ident) schema))
        resolver  `datomic-resolver
        oir-paths (zipmap (map hash-set (schema->uniques schema)) (repeat #{resolver}))]
    {::pc/index-resolvers
     {resolver {::pc/sym            resolver
                ::pc/cache?         false
                ::pc/compute-output (fn [env]
                                      (filter-subquery (merge env config)))
                ::datomic?          true
                ::pc/resolve        (fn [env _] (datomic-resolve config env))}}

     ::pc/index-oir
     (reduce
       (fn [idx {:db/keys [ident]}]
         (assoc idx ident oir-paths))
       {}
       (vals schema))}))

(defn datomic-connect-plugin [config]
  (let [datomic-index (index-schema config)]
    {::p/wrap-parser2
     (fn [parser {::p/keys [plugins]}]
       (let [idx-atoms (keep ::pc/indexes plugins)]
         (doseq [idx* idx-atoms]
           (swap! idx* pc/merge-indexes datomic-index))
         (fn [env tx]
           (parser env tx))))}))
