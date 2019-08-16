(ns com.wsscode.pathom.book.connect.mutation-context
  (:require [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.core :as p]))

(pc/defmutation create-user [{::keys [db]} user]
  {::pc/sym    'user/create
   ::pc/params [:user/name :user/email]
   ::pc/output [:user/id]}
  (let [{:keys [user/id] :as new-user}
        (-> user
            (select-keys [:user/name :user/email])
            (merge {:user/id         (random-uuid)
                    :user/created-at (js/Date.)}))]
    (swap! db assoc-in [:users id] new-user)
    {:user/id id}))

(pc/defresolver user-data [{::keys [db]} {:keys [user/id]}]
  {::pc/input  #{:user/id}
   ::pc/output [:user/id :user/name :user/email :user/created-at]}
  (get-in @db [:users id]))

(pc/defresolver all-users [{::keys [db]} _]
  {::pc/output [{:user/all [:user/id :user/name :user/email :user/created-at]}]}
  (vals (get @db :users)))

(pc/defresolver n++ [_ {:keys [number/value]}]
  {::pc/input  #{:number/value}
   ::pc/output [:number/value++]}
  {:number/value++ (inc value)})

(def api-registry [create-user user-data all-users n++])

(def parser
  (p/parallel-parser
    {::p/env     {::p/reader [p/map-reader pc/parallel-reader pc/open-ident-reader]
                  ::db       (atom {})}
     ::p/mutate  pc/mutate-async
     ::p/plugins [(pc/connect-plugin {::pc/register api-registry})
                  p/error-handler-plugin
                  p/trace-plugin]}))
