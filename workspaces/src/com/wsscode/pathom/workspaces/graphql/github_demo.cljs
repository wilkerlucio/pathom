(ns com.wsscode.pathom.workspaces.graphql.github-demo
  (:require
    [com.wsscode.pathom.connect :as pc]
    [com.wsscode.pathom.connect.graphql :as pcg]
    [com.wsscode.pathom.core :as p]
    [com.wsscode.pathom.fulcro.network :as pfn]
    [fulcro.client.localized-dom :as dom]
    [fulcro.client.primitives :as fp]
    [nubank.cljs.workspaces.card-types.fulcro :as ct.fulcro]
    [nubank.cljs.workspaces.core :as ws]
    [nubank.cljs.workspaces.lib.fulcro-portal :as f.portal]
    [com.wsscode.pathom.profile :as pp]
    [com.wsscode.pathom.book.util.local-storage :as ls]
    [com.wsscode.pathom.diplomat.http :as p.http]
    [com.wsscode.pathom.diplomat.http.fetch :as p.http.fetch]
    [com.wsscode.common.async-cljs :refer [let-chan <!p go-catch <? <?maybe]]))

(defonce indexes (atom {}))

(defmulti resolver-fn pc/resolver-dispatch)
(def defresolver (pc/resolver-factory resolver-fn indexes))

(defmulti mutation-fn pc/mutation-dispatch)
(def defmutation (pc/mutation-factory mutation-fn indexes))

(defonce github-index (atom {}))

(def base-env
  {::p/reader             [p/map-reader pc/all-async-readers]
   ::pc/resolver-dispatch resolver-fn
   ::pc/mutate-dispatch   mutation-fn
   ::p.http/driver        p.http.fetch/request-async})

(def github-gql
  {::pcg/resolver  `github-graphql
   ::pcg/url       (str "https://api.github.com/graphql?access_token=" (ls/get ::github-token))
   ::pcg/prefix    "github"
   ::pcg/ident-map {}
   ::p.http/driver p.http.fetch/request-async})

(pcg/defgraphql-resolver base-env github-gql)

(defn create-parser []
  (p/async-parser {::p/env     base-env
                   ::p/mutate  pc/mutate-async
                   ::p/plugins [(p/env-wrap-plugin #(assoc % ::pc/indexes @indexes))
                                p/error-handler-plugin
                                p/request-cache-plugin
                                pp/profile-plugin]}))

(fp/defsc GraphqlDemo
  [this {::keys []}]
  {:initial-state (fn [_]
                    {})
   :ident         [::id ::id]
   :query         [::id]
   :css           []
   :css-include   []}
  (dom/div
    "Hello World"))

(def graphql-demo (fp/factory GraphqlDemo))

(ws/defcard graphql-demo
  (ct.fulcro/fulcro-card
    {::f.portal/root GraphqlDemo
     ::f.portal/app  {:started-callback
                      (fn [app]
                        (go-catch
                          (try
                            (let [idx (<? (pcg/load-index github-gql))]
                              (swap! indexes pc/merge-indexes idx))
                            (catch :default e (js/console.error "Error making index" e)))))

                      :networking
                      {:remote (pfn/local-network (create-parser))}}}))
