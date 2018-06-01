(ns com.wsscode.pathom.book.graphql.fulcro-network.github-latest-stars
  (:require [com.wsscode.pathom.book.ui.util :as ui]
            [com.wsscode.pathom.fulcro.network :as pfn]
            [fulcro.client :as fulcro]
            [fulcro.client.data-fetch :as df]
            [fulcro.client.localized-dom :as dom]
            [fulcro.client.primitives :as fp]))

(fp/defsc Repository
  [this {:github.repository/keys [name-with-owner]}]
  {:ident [:github.repository/id :github.repository/id]
   :query [:github.repository/id
           :github.repository/name-with-owner]
   :css   [[:.container {:margin "4px 0"}]]}
  (dom/div :.container
    (str name-with-owner)))

(def repository (fp/factory Repository {:keyfn :github.repository/id}))

(fp/defsc LastestStarred
  [this {:github/keys [starred-repositories]}]
  {:initial-state (fn [_] {})
   :ident         (fn [] [::starred "singleton"])
   :query         (fn [] ; the container query, adding the params to fix the size
                         ; and order
                    [{'(:github/starred-repositories {:first    10
                                                      :order-by {:field     STARRED_AT
                                                                 :direction DESC}})
                      [{:github/nodes (fp/get-query Repository)}]}
                     [df/marker-table ::loading]])
   :css           [[:.title {:margin-bottom "8px"
                             :font-weight   "bold"}]
                   [:.button {:margin-top "10px"}]]
   :css-include   [Repository]}
  (let [loading? (ui/loading? this ::loading)]
    (dom/div
      (cond
        starred-repositories
        (dom/div
          (dom/div :.title "The last repositories you added a star to:")
          (mapv repository (:github/nodes starred-repositories))
          (dom/button :.button {:onClick  #(df/load this :github/viewer LastestStarred {:target [:ui/root]
                                                                                        :marker ::loading})
                                :disabled loading?}
            (if loading? "Loading..." "Reload")))

        loading?
        "Loading..."

        :else
        (dom/button {:onClick
                     #(df/load this :github/viewer LastestStarred {:target [:ui/root]
                                                                   :marker ::loading})}
          "Load latest starred repositories")))))

(defn new-client [token]
  (fulcro/new-fulcro-client
    :networking
    {:remote
     (pfn/graphql-network
       {::pfn/url (str "https://api.github.com/graphql?access_token=" token)})}))
