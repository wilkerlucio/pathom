(ns com.wsscode.pathom.book.graphql.fulcro-network.github-latest-stars
  (:require [com.wsscode.pathom.book.ui.util :as ui]
            [com.wsscode.pathom.fulcro.network :as pfn]
            [fulcro.client :as fulcro]
            [fulcro.client.data-fetch :as df]
            [fulcro.client.dom :as dom]
            [fulcro.client.primitives :as fp]))

(fp/defsc Repository
  [this {:github.repository/keys [name-with-owner]} _ css]
  {:ident [:github.repository/id :github.repository/id]
   ; here is the item query for each repository, remember the namespaces will just be
   ; removed to call the graphql api
   :query [:github.repository/id
           :github.repository/name-with-owner]
   :css   [[:.container {:margin "4px 0"}]]}
  (dom/div #js {:className (:container css)}
    (str name-with-owner)))

(def repository (fp/factory Repository {:keyfn :github.repository/id}))

(fp/defsc LastestStarred
  [this {:keys [github/starred-repositories]} _ css]
  {:initial-state (fn [_] {})
   :ident         (fn [] [::starred "singleton"])
   :query         (fn [] ; the container query, adding the params to fix the size
                         ; and order
                    [{'(:github/starred-repositories {:first    10
                                                      :order-by {:field     STARRED_AT
                                                                 :direction DESC}})
                      [{:nodes (fp/get-query Repository)}]}
                     [df/marker-table ::loading]])
   :css           [[:.title {:margin-bottom "8px"
                             :font-weight   "bold"}]
                   [:.button {:margin-top "10px"}]]
   :css-include   [Repository]}
  (let [loading? (ui/loading? this ::loading)]
    (dom/div nil
      (cond
        starred-repositories
        (dom/div nil
          (dom/div #js {:className (:title css)} "The last repositories you added a star to:")
          (map repository (:nodes starred-repositories))
          (dom/button #js {:onClick   #(df/load this :viewer LastestStarred {:target [:ui/root]
                                                                             :marker ::loading})
                           :className (:button css)
                           :disabled  loading?}
            (if loading? "Loading..." "Reload")))

        loading?
        "Loading..."

        :else
        (dom/button #js {:onClick
                         #(df/load this :viewer LastestStarred {:target [:ui/root]
                                                                :marker ::loading})}
          "Load latest starred repositories")))))

(defn new-client [token]
  (fulcro/new-fulcro-client
    :networking
    {:remote
     (pfn/graphql-network
       {::pfn/url (str "https://api.github.com/graphql?access_token=" token)})}))
