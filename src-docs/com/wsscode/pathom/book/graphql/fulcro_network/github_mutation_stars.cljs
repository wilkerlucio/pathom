(ns com.wsscode.pathom.book.graphql.fulcro-network.github-mutation-stars
  (:require [clojure.string :as str]
            [com.wsscode.pathom.fulcro.network :as pfn]
            [fulcro.client :as fulcro]
            [fulcro.client.dom :as dom]
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
  (dom/div nil
                              ; here we call the mutation, we need to ask for some response
                              ; otherwise the graphql will complain
    (dom/button #js {:onClick   #(fp/transact! this `[{(add-star {:input {:starrable-id ~id}})
                                                       [:client-mutation-id]}])
                     :disabled  viewer-has-starred
                     :className (:button css)}
      (dom/div #js {:className (str (:heart css) " "
                                    (if viewer-has-starred (:red css)))}
        "❤️")
      (if viewer-has-starred
        (dom/div nil "Great, thanks for the " (dom/strong nil name) " love!")
        (dom/div nil "Give love (star) to " (dom/strong nil name))))))

(def star-repo (fp/factory StarRepo {:keyfn :github.repository/name-with-owner}))

(fp/defsc GithubStars [_ {::keys [repos]} _ css]
  {:initial-state (fn [_]
                    ; here we initialize our entities, we must use the name-with-owner
                    ; so the ident is properly generated
                    {::repos [#:github.repository{:name-with-owner "wilkerlucio/pathom"}
                              #:github.repository{:name-with-owner "fulcrologic/fulcro"}
                              #:github.repository{:name-with-owner "fulcrologic/fulcro-inspect"}
                              #:github.repository{:name-with-owner "fulcrologic/fulcro-css"}
                              #:github.repository{:name-with-owner "fulcrologic/fulcro-spec"}
                              #:github.repository{:name-with-owner "thheller/shadow-cljs"}]})
   :ident         (fn [] [::github-stars "singleton"])
   :query         [{::repos (fp/get-query StarRepo)}]
   :css           [[:.container {:columns    2
                                 :margin-top "18px"}]]
   :css-include   [StarRepo]}
  (dom/div nil
    "Use the buttons bellow to send love to our favorite UI kit tools!"
    (dom/div #js {:className (:container css)}
      (if (-> repos first :github.repository/id)
        (map star-repo repos)))))

(defn new-client [token]
  (fulcro/new-fulcro-client
    :started-callback
    (fn [{:keys [reconciler]}]
      (fp/transact! reconciler
        [(list 'fulcro/load
           ; triggering the load, now use have to use the ident with vector version so
           ; it gets translated into the proper graphql query
           {:query   [{[:github.repository/owner-and-name ["wilkerlucio" "pathom"]] (fp/get-query StarRepo)}
                      {[:github.repository/owner-and-name ["fulcrologic" "fulcro"]] (fp/get-query StarRepo)}
                      {[:github.repository/owner-and-name ["fulcrologic" "fulcro-inspect"]] (fp/get-query StarRepo)}
                      {[:github.repository/owner-and-name ["fulcrologic" "fulcro-css"]] (fp/get-query StarRepo)}
                      {[:github.repository/owner-and-name ["fulcrologic" "fulcro-spec"]] (fp/get-query StarRepo)}
                      {[:github.repository/owner-and-name ["thheller" "shadow-cljs"]] (fp/get-query StarRepo)}]
            :refresh [::repos]})]))

    :networking
    {:remote
     (-> (pfn/graphql-network
           {::pfn/url (str "https://api.github.com/graphql?access_token=" token)})
         (pfn/batch-network))}))
