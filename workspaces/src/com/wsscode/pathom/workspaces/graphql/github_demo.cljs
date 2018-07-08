(ns com.wsscode.pathom.workspaces.graphql.github-demo
  (:require
    [com.wsscode.pathom.connect :as pc]
    [com.wsscode.pathom.connect.graphql :as pcg]
    [com.wsscode.pathom.core :as p]
    [com.wsscode.pathom.fulcro.network :as pfn]
    [fulcro.client.localized-dom :as dom]
    [fulcro.client.primitives :as fp]
    [nubank.workspaces.card-types.fulcro :as ct.fulcro]
    [nubank.workspaces.core :as ws]
    [nubank.workspaces.lib.fulcro-portal :as f.portal]
    [com.wsscode.pathom.profile :as pp]
    [com.wsscode.pathom.book.util.local-storage :as ls]
    [com.wsscode.pathom.diplomat.http :as p.http]
    [com.wsscode.pathom.diplomat.http.fetch :as p.http.fetch]
    [com.wsscode.common.async-cljs :refer [let-chan <!p go-catch <? <?maybe]]
    [fulcro.client.mutations :as fm]
    [fulcro.client.data-fetch :as df]))

(defonce indexes (atom {}))

(defmulti resolver-fn pc/resolver-dispatch)
(def defresolver (pc/resolver-factory resolver-fn indexes))

(defmulti mutation-fn pc/mutation-dispatch)
(def defmutation (pc/mutation-factory mutation-fn indexes))

(def base-env
  {::p/reader             [p/map-reader pc/all-async-readers]
   ::pc/resolver-dispatch resolver-fn
   ::pc/mutate-dispatch   mutation-fn
   ::p.http/driver        p.http.fetch/request-async})

(def github-gql
  {::pcg/resolver  `github-graphql
   ::pcg/url       (str "https://api.github.com/graphql?access_token=" (ls/get ::github-token))
   ::pcg/prefix    "github"
   ::pcg/ident-map {"user" {"login" ["User" "login"]}}
   ::p.http/driver p.http.fetch/request-async})

(pcg/defgraphql-resolver base-env github-gql)

(defn create-parser []
  (p/async-parser {::p/env     base-env
                   ::p/mutate  pc/mutate-async
                   ::p/plugins [(p/env-wrap-plugin #(assoc % ::pc/indexes @indexes))
                                p/error-handler-plugin
                                p/request-cache-plugin
                                pp/profile-plugin]}))

(fm/defmutation github/add-star [_]
  (remote [_] true))

(fp/defsc GraphqlDemo
  [this {::keys []}]
  {:initial-state (fn [_]
                    {})
   :ident         [:github.user/login :github.user/login]
   :query         [:github.user/id :github.user/name :github.user/login]
   :css           []
   :css-include   []}
  (dom/div
    (dom/button {:onClick #(fp/transact! this ['{(github/add-star {:github/input {:github/starrable-id "abc"}})
                                                 [:client-mutation-id
                                                  {:starrable
                                                   [:viewer-has-starred]}]}])} "Add star")))

(def graphql-demo (fp/factory GraphqlDemo))

(ws/defcard graphql-demo
  (ct.fulcro/fulcro-card
    {::f.portal/root GraphqlDemo
     ::f.portal/app  {:started-callback
                      (fn [app]
                        (go-catch
                          (try
                            (let [idx (<? (pcg/load-index github-gql))]
                              (swap! indexes pc/merge-indexes idx)
                              (df/load app [:github.user/login "wilkerlucio"] GraphqlDemo {:target [:ui/root]}))
                            (catch :default e (js/console.error "Error making index" e)))))

                      :networking
                      {:remote (-> (create-parser)
                                   (pfn/pathom-remote)
                                   (pfn/profile-remote))}}}))
