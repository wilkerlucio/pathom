(ns com.wsscode.pathom.book.graphql.github-stars
  (:require
    [com.wsscode.common.async-cljs :refer [go-promise let-chan <!p go-catch <? <?maybe]]
    [com.wsscode.pathom.book.util.local-storage :as ls]
    [com.wsscode.pathom.connect :as pc]
    [com.wsscode.pathom.connect.graphql :as pcg]
    [com.wsscode.pathom.core :as p]
    [com.wsscode.pathom.diplomat.http :as p.http]
    [com.wsscode.pathom.diplomat.http.fetch :as p.http.fetch]
    [fulcro.client.localized-dom :as dom]
    [fulcro.client.mutations :as fm]
    [fulcro.client.primitives :as fp]))

(defonce indexes (atom {}))

(pc/defresolver repositories [_ _]
  {::pc/output [{:demo-repos [:github.user/login :github.repository/name]}]}
  {:demo-repos
   [{:github.user/login "wilkerlucio" :github.repository/name "pathom"}
    {:github.user/login "fulcrologic" :github.repository/name "fulcro"}
    {:github.user/login "fulcrologic" :github.repository/name "fulcro-inspect"}
    {:github.user/login "fulcrologic" :github.repository/name "fulcro-css"}
    {:github.user/login "fulcrologic" :github.repository/name "fulcro-spec"}
    {:github.user/login "thheller" :github.repository/name "shadow-cljs"}]})

(def github-gql
  {::pcg/url       (str "https://api.github.com/graphql?access_token=" (ls/get :github-token))
   ::pcg/prefix    "github"
   ::pcg/ident-map {"user"       {"login" ["User" "login"]}
                    "repository" {"owner" ["User" "login"]
                                  "name"  ["Repository" "name"]}}
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

(fm/defmutation github/add-star [_]
  (action [{:keys [state ref]}]
    (swap! state update-in ref assoc :github.repository/viewer-has-starred true))
  (remote [_] true))

(fm/defmutation github/remove-star [_]
  (action [{:keys [state ref]}]
    (swap! state update-in ref assoc :github.repository/viewer-has-starred false))
  (remote [_] true))

(fp/defsc Repository
  [this {:github.repository/keys [id name-with-owner viewer-has-starred]}]
  {:initial-state (fn [_]
                    {})
   :ident         [:github.repository/id :github.repository/id]
   :query         [:github.repository/id :github.repository/name-with-owner :github.repository/viewer-has-starred]
   :css           []
   :css-include   []}
  (dom/div
    (dom/div name-with-owner)
    (if viewer-has-starred
      (dom/button {:onClick #(fp/transact! this [`{(github/remove-star {:github/input {:github/starrable-id ~id}})
                                                   [:client-mutation-id
                                                    {:starrable
                                                     [:viewer-has-starred]}]}])}
        "Remove star")
      (dom/button {:onClick #(fp/transact! this [`{(github/add-star {:github/input {:github/starrable-id ~id}})
                                                   [:client-mutation-id
                                                    {:starrable
                                                     [:viewer-has-starred]}]}])}
        "Add star"))))

(def repository (fp/factory Repository {:keyfn :github.repository/id}))

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
