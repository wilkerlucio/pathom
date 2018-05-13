(ns com.wsscode.pathom.book.connect.mutation-join
  (:require [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.core :as p]))

; setup indexes atom
(def indexes (atom {}))

; setup resolver dispatch and factory
(defmulti resolver-fn pc/resolver-dispatch)
(def defresolver (pc/resolver-factory resolver-fn indexes))

; setup mutation dispatch and factory
(defmulti mutation-fn pc/mutation-dispatch)
(def defmutation (pc/mutation-factory mutation-fn indexes))

(defresolver `user-data
  {::pc/input  #{:user/id}
   ::pc/output [:user/id :user/name :user/email :user/created-at]}
  (fn [{::keys [db]} {:keys [user/id]}]
    (get-in @db [:users id])))

(defmutation 'create-user
  {::pc/args   [:user/name :user/email]
   ::pc/output [:user/id]}
  (fn [{::keys [db]} user]
    (let [{:keys [user/id] :as new-user}
          (-> user
              (select-keys [:user/name :user/email])
              (merge {:user/id         (random-uuid)
                      :user/created-at (js/Date.)}))]
      (swap! db assoc-in [:users id] new-user)
      {:user/id id})))

(def parser
  (p/parser {::p/env    {::p/reader             [p/map-reader pc/all-readers]
                         ::pc/resolver-dispatch resolver-fn
                         ::pc/mutate-dispatch   mutation-fn
                         ::pc/indexes           @indexes
                         ::db                   (atom {})}
             ::p/mutate pc/mutate}))
