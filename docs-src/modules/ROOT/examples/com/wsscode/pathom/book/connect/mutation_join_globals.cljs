(ns com.wsscode.pathom.book.connect.mutation-join-globals
  (:require [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.core :as p]))

(pc/defmutation user-create [{::keys [db]} user]
  {::pc/sym    'user/create
   ::pc/params [:user/name :user/email]
   ::pc/output [:user/id]}
  (let [{:keys [user/id] :as new-user}
        (-> user
            (select-keys [:user/name :user/email])
            (merge {:user/id         (random-uuid)
                    :user/created-at (js/Date.)}))]
    (swap! db assoc-in [:users id] new-user)
    {:user/id       id
     :app/id-remaps {(:user/id user) id}}))

(pc/defresolver user-data [{::keys [db]} {:keys [user/id]}]
  {::pc/input  #{:user/id}
   ::pc/output [:user/id :user/name :user/email :user/created-at]}
  (get-in @db [:users id]))

(pc/defresolver all-users [{::keys [db]} _]
  {::pc/output [{:user/all [:user/id :user/name :user/email :user/created-at]}]}
  {:user/all (vals (get @db :users))})

(def app-registry [user-create user-data all-users])

(def parser
  (p/parallel-parser
    {::p/env     {::p/reader                 [p/map-reader
                                              pc/parallel-reader
                                              pc/open-ident-reader
                                              p/env-placeholder-reader]
                  ::pc/mutation-join-globals [:app/id-remaps]
                  ::p/placeholder-prefixes   #{">"}
                  ::db                       (atom {})}
     ::p/mutate  pc/mutate-async
     ::p/plugins [(pc/connect-plugin {::pc/register app-registry})
                  p/error-handler-plugin
                  p/trace-plugin]}))
