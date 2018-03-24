(ns com.wsscode.pathom.book.graphql.fulcro-network.github-name
  (:require [com.wsscode.pathom.fulcro.network :as pfn] ; <1>
            [fulcro.client :as fulcro]
            [fulcro.client.dom :as dom]
            [fulcro.client.data-fetch :as df]
            [fulcro.client.primitives :as fp]))

(fp/defsc GithubUserView
  [this {:keys [name] :as props}]
  {:query [:id :name [df/marker-table ::loading]] ; <2>
   :ident [:id :id]}
  (let [marker (get props [df/marker-table ::loading])]
    (dom/div nil
      (cond
        name
        (str name ", congrats on your Fulcro + GraphQL integration!")

        (df/loading? marker)
        "Loading..."

        :else
        (dom/button #js {:onClick ; <3>
                         #(df/load this :viewer GithubUserView {:target [:ui/root]
                                                                :marker ::loading})}
          "Load name")))))

(def github-user-view (fp/factory GithubUserView {:keyfn :id}))

(fp/defsc Root
  [_ {:keys [viewer]}]
  {:query [{:viewer (fp/get-query GithubUserView)}]} ; <4>
  (github-user-view viewer))

(defn new-client [token]
  (fulcro/new-fulcro-client
    :networking
    {:remote
     (pfn/graphql-network ; <5>
       {::pfn/url (str "https://api.github.com/graphql?access_token=" token)})}))

