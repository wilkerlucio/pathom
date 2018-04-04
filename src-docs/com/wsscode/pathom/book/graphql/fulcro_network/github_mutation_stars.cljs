(ns com.wsscode.pathom.book.graphql.fulcro-network.github-mutation-stars
  (:require [clojure.string :as str]
            [com.wsscode.common.async-cljs :refer [go-catch <?]]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.connect.graphql :as pcg]
            [com.wsscode.pathom.fulcro.network :as pfn]
            [fulcro.client :as fulcro]
            [fulcro.client.data-fetch :as fdf]
            [fulcro.client.alpha.localized-dom :as dom]
            [fulcro.client.mutations :as mutations]
            [fulcro.client.primitives :as fp]))

; define the mutation as usual, the mutation name will be converted to camelCase and
; sent to GraphQL, same for the parameters
(mutations/defmutation add-star [_]
  (action [{:keys [state ref]}]
    (swap! state update-in ref assoc :github.repository/viewer-has-starred true))
  (remote [_] true))

(fp/defsc StarRepo
  [this {:github.repository/keys [id name name-with-owner viewer-has-starred]} _ css]
  {:initial-state {}
   :ident         (fn []
                    ; notice we use the real data from name-with-owner to create our
                    ; virtual ident that correctly maps to the entry query on graphql
                    (let [[owner name] (str/split name-with-owner #"/")]
                      [:github.repository/owner-and-name [owner name]]))
   :query         [:github.repository/id
                   :github.repository/name
                   :github.repository/name-with-owner
                   :github.repository/viewer-has-starred]
   :css           [[:div [:.button {:display     "flex"
                                    :align-items "center"
                                    :margin      "0 0 14px"}]]
                   [:.heart {:text-shadow   "0 0 0 #adadad"
                             :color         "transparent"
                             :transition    "text-shadow 300ms"
                             :font-size     "28px"
                             :margin-bottom "-3px"
                             :margin-right  "14px"}
                    [:&.red {:text-shadow "0 0 0 #f50909"}]]]
   :css-include   []}
  (dom/div
    ; here we call the mutation, we need to ask for some response
    ; otherwise the graphql will complain
    (dom/button :.button {:onClick  #(fp/transact! this `[{(add-star {:input {:starrable-id ~id}})
                                                           [:client-mutation-id]}])
                          :disabled viewer-has-starred}
      (dom/div :.heart {:className (if viewer-has-starred (:red css))}
        "❤️")
      (if viewer-has-starred
        (dom/div "Great, thanks for the " (dom/strong name) " love!")
        (dom/div "Give love (star) to " (dom/strong name))))))

(def star-repo (fp/factory StarRepo {:keyfn :github.repository/name-with-owner}))

(fp/defsc GithubStars [_ {::keys [repos] ::pfn/keys [index-ready?]}]
  {:initial-state (fn [_] {::repos []})
   :ident         (fn [] [::github-stars "singleton"])
   :query         [{::repos (fp/get-query StarRepo)} [::pfn/index-ready? '_]]
   :css           [[:.container {:columns    2
                                 :margin-top "18px"}]]
   :css-include   [StarRepo]}
  (if index-ready?
    (dom/div
      "Use the buttons bellow to send love to our favorite UI kit tools!"
      (dom/div :.container
        (if (-> repos first :github.repository/id)
          (mapv star-repo repos))))
    (dom/div "Loading index...")))

;; parser

(defonce regular-index (atom {}))
(defmulti resolver-fn pc/resolver-dispatch)
(def defresolver (pc/resolver-factory resolver-fn regular-index))

(defresolver `repos
  {::pc/output [{::repos [:github.types/repository]}]}
  (fn [{:keys  [query]
        ::keys [gql-env]
        :as    env} _]
    (go-catch
      (let [gql-query [{[:github.repository/owner-and-name ["wilkerlucio" "pathom"]] query}
                       {[:github.repository/owner-and-name ["fulcrologic" "fulcro"]] query}
                       {[:github.repository/owner-and-name ["fulcrologic" "fulcro-inspect"]] query}
                       {[:github.repository/owner-and-name ["fulcrologic" "fulcro-css"]] query}
                       {[:github.repository/owner-and-name ["fulcrologic" "fulcro-spec"]] query}
                       {[:github.repository/owner-and-name ["thheller" "shadow-cljs"]] query}]
            {:keys [data]} (<? (pfn/gql-request (merge env gql-env) gql-query))]
        {::repos (-> (pfn/parser {::p/entity data} gql-query) vals vec)}))))

(defn graphql-client [token]
  (let [url          (str "https://api.github.com/graphql?access_token=" token)
        gql-index    (atom {})
        gql-env      {::pfn/url       url
                      ::pcg/resolver  'gql-resolver
                      ::pcg/prefix    "github"
                      ::pcg/ident-map {}}
        gql-resolver (pfn/make-resolver gql-env)
        parser       (p/async-parser {::p/plugins [(p/env-plugin
                                                     {::p/reader
                                                      [p/map-reader p/ident-join-reader pc/all-async-readers]

                                                      ::gql-env
                                                      gql-env

                                                      ::pc/resolver-dispatch
                                                      resolver-fn})
                                                   (p/env-wrap-plugin
                                                     (fn [env]
                                                       (assoc env ::pc/indexes (pc/merge-indexes @gql-index @regular-index))))
                                                   p/error-handler-plugin]})]

    (defmethod resolver-fn 'gql-resolver [env input]
      (gql-resolver env input))

    (fulcro/new-fulcro-client
      :started-callback
      (fn [app]
        (go-catch
          (<? (pfn/app-load-index app gql-env gql-index))
          (fdf/load app ::repos StarRepo {:target [::github-stars "singleton" ::repos]})))

      :networking
      {:remote
       (pfn/local-network ; <5>
         parser)})))
