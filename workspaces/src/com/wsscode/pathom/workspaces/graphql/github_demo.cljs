(ns com.wsscode.pathom.workspaces.graphql.github-demo
  (:require
    [com.wsscode.common.async-cljs :refer [go-promise let-chan <!p go-catch <? <?maybe]]
    [com.wsscode.pathom.book.util.local-storage :as ls]
    [com.wsscode.pathom.connect :as pc]
    [com.wsscode.pathom.connect.graphql2 :as pcg]
    [com.wsscode.pathom.core :as p]
    [com.wsscode.pathom.diplomat.http :as p.http]
    [com.wsscode.pathom.diplomat.http.fetch :as p.http.fetch]
    [com.wsscode.pathom.fulcro.network :as pfn]
    [com.wsscode.pathom.viz.query-editor :as pv.query-editor]
    [com.wsscode.pathom.viz.workspaces :as pv.ws]
    [fulcro.client.data-fetch :as df]
    [fulcro.client.localized-dom :as dom]
    [fulcro.client.mutations :as fm]
    [fulcro.client.primitives :as fp]
    [nubank.workspaces.card-types.fulcro :as ct.fulcro]
    [nubank.workspaces.core :as ws]
    [nubank.workspaces.lib.fulcro-portal :as f.portal]))

(defonce indexes (atom {}))

(pc/defresolver repositories [_ _]
  {::pc/output [{:demo-repos [:github.User/login :github.Repository/name]}]}
  {:demo-repos
   [{:github.User/login "wilkerlucio" :github.Repository/name "pathom"}
    {:github.User/login "fulcrologic" :github.Repository/name "fulcro"}
    {:github.User/login "fulcrologic" :github.Repository/name "fulcro-inspect"}
    {:github.User/login "fulcrologic" :github.Repository/name "fulcro-incubator"}
    {:github.User/login "fulcrologic" :github.Repository/name "fulcro-spec"}
    {:github.User/login "thheller" :github.Repository/name "shadow-cljs"}]})

(def github-gql
  {::pcg/url       (str "https://api.github.com/graphql?access_token=" (ls/get :github-token))
   ::pcg/prefix    "github"
   ::pcg/ident-map {"user"       {"login" :github.User/login}
                    "repository" {"owner" :github.User/login
                                  "name"  :github.Repository/name}}
   ::p.http/driver p.http.fetch/request-async})

(def parser
  (p/parallel-parser
    {::p/env     {::p/reader               [p/map-reader
                                            pc/parallel-reader
                                            pc/open-ident-reader
                                            p/env-placeholder-reader]
                  ::p/placeholder-prefixes #{">"}
                  ::p.http/driver          p.http.fetch/request-async}
     ::p/mutate  pc/mutate-async
     ::p/plugins [(pc/connect-plugin {::pc/register repositories
                                      ::pc/indexes  indexes})
                  p/error-handler-plugin
                  p/request-cache-plugin
                  p/trace-plugin]}))

(defonce github-index-status
  (go-promise
    (<? (pcg/load-index github-gql indexes))))

(fm/defmutation github/addStar [_]
  (action [{:keys [state ref]}]
    (swap! state update-in ref assoc :github.Repository/viewerHasStarred true))
  (remote [_] true))

(fm/defmutation github/removeStar [_]
  (action [{:keys [state ref]}]
    (swap! state update-in ref assoc :github.Repository/viewerHasStarred false))
  (remote [_] true))

(fp/defsc Repository
  [this {:github.Repository/keys [id nameWithOwner viewerHasStarred]}]
  {:ident [:github.Repository/id :github.Repository/id]
   :query [:github.Repository/id :github.Repository/nameWithOwner :github.Repository/viewerHasStarred]}
  (dom/div
    (dom/div (str nameWithOwner))
    (if viewerHasStarred
      (dom/button {:onClick #(fp/transact! this [`{(github/removeStar {:github/input {:github/starrableId ~id}})
                                                   [:clientMutationId
                                                    {:starrable
                                                     [:viewerHasStarred]}]}])}
        "Remove star")
      (dom/button {:onClick #(fp/transact! this [`{(github/addStar {:github/input {:github/starrableId ~id}})
                                                   [:clientMutationId
                                                    {:starrable
                                                     [:viewerHasStarred]}]}])}
        "Add star"))))

(def repository (fp/factory Repository {:keyfn :github.Repository/id}))

(fp/defsc GraphqlDemo
  [this {:keys [demo-repos]}]
  {:initial-state (fn [_]
                    {})
   :ident         (fn [] [::root "singleton"])
   :query         [{:demo-repos (fp/get-query Repository)}]
   :css           []
   :css-include   []}
  (dom/div
    (mapv repository demo-repos)))

(def graphql-demo (fp/factory GraphqlDemo))

; setup the fulcro card to use in workspaces
(ws/defcard graphql-demo
  (ct.fulcro/fulcro-card
    {::f.portal/root GraphqlDemo
     ::f.portal/app  {:started-callback
                      (fn [app]
                        (go-catch
                          (try
                            (<? github-index-status)
                            (df/load app [::root "singleton"] GraphqlDemo)
                            (catch :default e (js/console.error "Error making index" e)))))

                      :networking
                      {:remote (-> parser
                                   (pfn/pathom-remote)
                                   (pfn/trace-remote))}}}))

; creates a parser view using pathom viz to explore the graph in workspaces
(ws/defcard graphql-demo-parser
  (pv.ws/pathom-card
    {::pv.ws/parser #(parser % %2)
     ::pv.ws/app    {:started-callback
                     (fn [app]
                       (go-catch
                         (try
                           (<? github-index-status)
                           ; after github schema is ready we request the editor to update
                           ; the index so the UI make it available right away
                           (pv.query-editor/load-indexes app)
                           (catch :default e (js/console.error "Error making index" e)))))}}))
