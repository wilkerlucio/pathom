(ns com.wsscode.pathom.connect.datomic-test
  (:require [clojure.test :refer :all]
            [datomic.api :as d]
            [com.wsscode.pathom.connect.datomic :as pcd]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]))

(def uri "datomic:free://localhost:4334/mbrainz-1968-1973")
(def conn (d/connect uri))

(def db (d/db conn))

(deftest test-filter-subquery
  (is (= (pcd/filter-subquery {::p/parent-query  [:foo :bar :baz]
                               ::pcd/schema-keys #{:foo :baz}})
         [:foo :baz]))

  (is (= (pcd/filter-subquery {::p/parent-query  [:foo :bar :baz]
                               ::pcd/schema-keys #{:foo :baz}})
         [:foo :baz])))

(deftest test-index-schema
  )

(comment
  (pcd/index-schema {::pcd/schema (pcd/db->schema db)}))

(def parser
  (p/parser
    {::p/env     {::p/reader               [p/map-reader
                                            pc/reader2
                                            pc/open-ident-reader
                                            p/env-placeholder-reader]
                  ::p/placeholder-prefixes #{">"}
                  ::p/process-error
                                           (fn [env err]
                                             #_(.printStackTrace err)
                                             err)}
     ::p/mutate  pc/mutate
     ::p/plugins [(pc/connect-plugin {::pc/register []})
                  (pcd/datomic-connect-plugin {::pcd/conn   conn
                                               ::pcd/schema (pcd/db->schema db)})
                  p/error-handler-plugin
                  p/trace-plugin]}))

(comment
  (parser {}
    [{::pc/indexes
      [::pc/index-oir]}])

  (time
    (parser {}
      [{[:artist/gid #uuid"76c9a186-75bd-436a-85c0-823e3efddb7f"]
        [:artist/name]}]))

  (->> (d/q '[:find (pull ?e [*])
              :where
              [_ :db.install/attribute ?e]
              [?e :db/ident ?ident]]
         db)
       (mapv first))

  (->> (d/q '[:find ?attr ?type ?card
              :where
              [_ :db.install/attribute ?a]
              [?a :db/valueType ?t]
              [?a :db/cardinality ?c]
              [?a :db/ident ?attr]
              [?t :db/ident ?type]
              [?c :db/ident ?card]]
         db)
       (mapv #(zipmap [:db/ident
                       :db/valueType
                       :db/cardinality] %)))

  (pcd/db->schema db)
  (d/q '[:find ?id ?type ?gender
         :in $ ?name
         :where
         [?e :artist/name ?name]
         [?e :artist/gid ?id]
         [?e :artist/type ?teid]
         [?teid :db/ident ?type]
         [?e :artist/gender ?geid]
         [?geid :db/ident ?gender]]
    db
    "Janis Joplin"))
