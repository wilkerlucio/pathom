(ns com.wsscode.pathom.book.connect.mutation-async
  (:require [cljs.core.async :as async :refer [go]]
            [com.wsscode.common.async-cljs :refer [go-catch <!p <?]]
            [com.wsscode.pathom.book.util.indexeddb :as db]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.core :as p]))

; setup indexes atom
(def indexes (atom {}))

; setup resolver dispatch and factory
(defmulti resolver-fn pc/resolver-dispatch)
(def defresolver (pc/resolver-factory resolver-fn indexes))

; setup mutation dispatch and factory
(defmulti mutation-fn pc/mutation-dispatch)
(def defmutation (pc/mutation-factory mutation-fn indexes))

(defn adapt-user [user]
  (-> (into {} (map (fn [[k v]] [(keyword "user" (name k)) v])) (dissoc user ::db/key))
      (assoc :user/id (::db/key user))))

(defmutation 'user/create
  {::pc/params [:user/name :user/email]
   ::pc/output [:user/id]}
  (fn [{::keys [db]} user]
    ; now we async to create the record into the indexeddb
    (go
      (let [db      (<? db)
            user-id (-> user
                        (select-keys [:user/name :user/email])
                        (merge {:user/created-at (js/Date.)})
                        (->> (db/create! {::db/db db ::db/store-name "users"}))
                        <?)]
        {:user/id       user-id
         :app/id-remaps {(:user/id user) user-id}}))))

(defresolver `user-by-id
  {::pc/input  #{:user/id}
   ::pc/output [:user/id :user/name :user/email :user/created-at]}
  (fn [{::keys [db]} {:keys [user/id]}]
    (go
      ; reading from indexeddb
      (let [db (<? db)]
        (-> (db/read-object {::db/db db ::db/store-name "users"} id) <?
            adapt-user)))))

; let's make an access to all users
(defresolver `all-users
  {::pc/output [{:user/all [:user/id :user/name :user/email :user/created-at]}]}
  (fn [{::keys [db]} _]
    (go
      (let [db (<? db)]
        (->> (db/scan-store {::db/db db ::db/store-name "users"})
             (async/into []) <?
             (mapv adapt-user)
             (hash-map :user/all))))))

(def db-settings
  {::db/db-name    "connectAsyncDemo"
   ::db/migrations [{::db/stores {"users" {::db/keys    ::db/auto-increment
                                           ::db/indexes {"name" {::db/unique false}}}}}]})

(def parser
  (p/async-parser {::p/env     {::p/reader                 [p/map-reader pc/all-async-readers]
                                ::pc/resolver-dispatch     resolver-fn
                                ::pc/mutate-dispatch       mutation-fn
                                ::pc/indexes               @indexes
                                ::pc/mutation-join-globals [:app/id-remaps]
                                ::db                       (db/setup-db db-settings)}
                   ::p/plugins [p/error-handler-plugin]
                   ::p/mutate  pc/mutate-async}))

