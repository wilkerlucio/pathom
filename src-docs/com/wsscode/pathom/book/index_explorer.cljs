(ns com.wsscode.pathom.book.index-explorer
  (:require [com.wsscode.common.async-cljs :refer [go-catch <?]]
            [com.wsscode.pathom.book.app-types :as app-types]
            [com.wsscode.pathom.book.interactive-parser :as iparsers :refer [parsers]]
            [com.wsscode.pathom.fulcro.network :as network]
            [com.wsscode.pathom.viz.index-explorer :as iex]
            [fulcro.client :as fulcro]
            [fulcro.client.data-fetch :as df]
            [fulcro.client.localized-dom :as dom]
            [fulcro.client.mutations :as fm]
            [fulcro.client.primitives :as fp]))

(fp/defsc IndexExplorerWrapper
  [this {:ui/keys [root]}]
  {:initial-state (fn [_]
                    {:ui/root {::iex/id "singleton"}})
   :query         [{:ui/root (fp/get-query iex/IndexExplorer)}]
   :css           [[:.container {:height  "850px"
                                 :display "flex"}]]}
  (dom/div :.container
    (iex/index-explorer root)))

(fm/defmutation force-refresh [_]
  (action [{:keys [reconciler]}]
    (js/setTimeout
      #(fp/force-root-render! reconciler)
      300)))

(app-types/register-app "index-explorer"
  (fn [{::app-types/keys [node]}]
    (let [parser-name (.getAttribute node "data-parser")

          {::iparsers/keys [parser] :as iparser} (get parsers parser-name)
          app-id      (str "index-explorer-" parser-name)]
      (assert iparser (str "parser " parser-name " not found"))
      {::app-types/app
       (fulcro/make-fulcro-client
         {:initial-state    (-> (fp/get-initial-state IndexExplorerWrapper {})
                                (assoc :fulcro.inspect.core/app-id app-id))

          :client-did-mount #(df/load % [::iex/id "singleton"] iex/IndexExplorer
                               {:refresh       [:ui/root]
                                :target        [:ui/root]
                                :post-mutation `force-refresh})

          :networking       (network/pathom-remote parser)})

       ::app-types/root
       IndexExplorerWrapper})))
