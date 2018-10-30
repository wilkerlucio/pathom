(ns com.wsscode.pathom.book.connect.mutation-async
  (:require [cljs.core.async :as async :refer [go]]
            [com.wsscode.common.async-cljs :refer [go-catch <!p <?]]
            [com.wsscode.pathom.book.util.indexeddb :as db]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.core :as p]))

(defn adapt-user [user]
  (-> (into {} (map (fn [[k v]] [(keyword "user" (name k)) v])) (dissoc user ::db/key))
      (assoc :user/id (::db/key user))))

(pc/defmutation user-create [{::keys [db]} user]
  {::pc/sym    'user/create
   ::pc/params [:user/name :user/email]
   ::pc/output [:user/id]}
  (go
    (let [db      (<? db)
          user-id (-> user
                      (select-keys [:user/name :user/email])
                      (merge {:user/created-at (js/Date.)})
                      (->> (db/create! {::db/db db ::db/store-name "users"}))
                      <?)]
      {:user/id       user-id
       :app/id-remaps {(:user/id user) user-id}})))

(pc/defresolver user-by-id [{::keys [db]} {:keys [user/id]}]
  {::pc/input  #{:user/id}
   ::pc/output [:user/id :user/name :user/email :user/created-at]}
  (go
    ; reading from indexeddb
    (let [db (<? db)]
      (-> (db/read-object {::db/db db ::db/store-name "users"} id) <?
          adapt-user))))

; let's make an access to all users
(pc/defresolver all-users [{::keys [db]} _]
  {::pc/output [{:user/all [:user/id :user/name :user/email :user/created-at]}]}
  (go
    (let [db (<? db)]
      (->> (db/scan-store {::db/db db ::db/store-name "users"})
           (async/into []) <?
           (mapv adapt-user)
           (hash-map :user/all)))))

; list all our app resolvers and mutations
(def app-registry [user-create user-by-id all-users])

(def db-settings
  {::db/db-name    "connectAsyncDemo"
   ::db/migrations [{::db/stores {"users" {::db/keys    ::db/auto-increment
                                           ::db/indexes {"name" {::db/unique false}}}}}]})

(def parser
  (p/parallel-parser
    {::p/env     {::p/reader               [p/map-reader
                                            pc/parallel-reader
                                            pc/open-ident-reader
                                            p/env-placeholder-reader]
                  ::p/placeholder-prefixes #{">"}
                  ::pc/mutation-join-globals [:app/id-remaps]
                  ::db                       (db/setup-db db-settings)}
     ::p/mutate  pc/mutate-async
     ::p/plugins [(pc/connect-plugin {::pc/register app-registry})
                  p/error-handler-plugin
                  p/request-cache-plugin
                  p/trace-plugin]}))
