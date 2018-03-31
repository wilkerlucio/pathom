(ns com.wsscode.pathom.book.graphql.fulcro-network.github-name
  (:require [com.wsscode.pathom.fulcro.network :as pfn] ; <1>
            [fulcro.client :as fulcro]
            [fulcro.client.alpha.dom :as dom]
            [fulcro.client.data-fetch :as df]
            [fulcro.client.primitives :as fp]
            [com.wsscode.common.async-cljs :refer [<? go-catch <!p]]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.connect.graphql :as pcg]))

(fp/defsc GithubUserView
  [this {:github.user/keys [name] ::pfn/keys [index-ready?] :as props}]
  {:query [:github.user/id :github.user/name [df/marker-table ::loading] [::pfn/index-ready? '_]] ; <2>
   :ident [:github.user/id :github.user/id]}
  (let [marker (get props [df/marker-table ::loading])]
    (if index-ready?
      (dom/div
        (cond
          name
          (str name ", congrats on your Fulcro + GraphQL integration!")

          (df/loading? marker)
          "Loading..."

          :else
          (dom/button {:onClick ; <3>
                       #(df/load this :github/viewer GithubUserView {:target [:ui/root]
                                                                     :marker ::loading})}
            "Load name")))
      (dom/div "Loading index..."))))

(def github-user-view (fp/factory GithubUserView {:keyfn :github.user/id}))

(fp/defsc Root
  [_ {:github/keys [viewer]}]
  {:query [{:github/viewer (fp/get-query GithubUserView)}]} ; <4>
  (github-user-view viewer))
