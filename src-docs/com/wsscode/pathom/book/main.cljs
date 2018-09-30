(ns com.wsscode.pathom.book.main
  (:require [com.wsscode.pathom.book.app-types :as app-types]
            [com.wsscode.pathom.book.async.demos]
            [com.wsscode.pathom.book.interactive-parser]
            [com.wsscode.pathom.book.graphql.edn-converter]
            [com.wsscode.pathom.book.graphql.fulcro-network.contacts]
            [com.wsscode.pathom.book.graphql.fulcro-network.graphql-todo]
            [fulcro.client :as fulcro]
            [com.wsscode.pathom.fulcro.network :as pfn]
            [fulcro.client.data-fetch :as df]))

(defn main []
  (doseq [node (array-seq (js/document.querySelectorAll "div[x-app]"))
          :let [app-name (.getAttribute node "x-app")]]
    (app-types/mount-app app-name node))

  (app-types/update-apps))

(main)
