(ns com.wsscode.pathom.book.graphql.fulcro-network.demos
  (:require [com.wsscode.pathom.book.app-types :as app-types]
            [com.wsscode.pathom.book.graphql.fulcro-network.github-mutation-stars :as demo.github-stars]
            [com.wsscode.pathom.book.graphql.fulcro-network.github-name :as demo.github-name]
            [com.wsscode.pathom.book.graphql.fulcro-network.github-latest-stars :as demo.github-latest-stars]
            [com.wsscode.pathom.book.util.local-storage :as ls]
            [fulcro.client :as fulcro]
            [fulcro.client.dom :as dom]
            [fulcro.client.primitives :as fp]
            [goog.object :as gobj]
            [fulcro.client.mutations :as mutations]
            [fulcro-css.css :as css]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.connect.graphql :as pcg]
            [com.wsscode.pathom.fulcro.network :as pfn]))

(defn start-app [this node token]
  (let [{::keys [app root make-app]} (fp/shared this)]
    (reset! app (fulcro/mount (make-app token) root node))))

(fp/defsc RequireTokenApp
  [this {::keys [token]}]
  {:initial-state     {::token (ls/get ::token)}
   :ident             (fn [] [::token-app "singleton"])
   :query             [::token]
   :componentDidMount (fn []
                        (if-let [token (-> this fp/props ::token)]
                          (start-app this (gobj/get this "container") token)))
   :css               [[:.container {:box-shadow    "0 6px 6px rgba(0, 0, 0, 0.26),
                                                     0 10px 20px rgba(0, 0, 0, 0.19),
                                                     0 0 2px rgba(0,0,0,0.3)"
                                     :border-radius "4px"
                                     :padding       "20px"}]]}
  (dom/div :.container
    (if-not token
      (dom/button #js {:onClick #(when-let [token (or (ls/get ::token)
                                                      (js/prompt "Input your github personal token:"))]
                                   (ls/set! ::token token)
                                   (mutations/set-value! this ::token token)
                                   (start-app this (gobj/get this "container") token))}
        "Input/restore token"))
    (dom/div #js {:ref #(gobj/set this "container" %)})))

(defn register-demo [{::keys [name make-app root]}]
  (css/upsert-css name root)
  (app-types/register-app name
    (fn [_]
      {::app-types/app  (fulcro/new-fulcro-client :shared {::make-app make-app
                                                           ::app      (atom nil)
                                                           ::root     (app-types/make-root root name)})
       ::app-types/root (app-types/make-root RequireTokenApp (str name "-container"))})))

(defn graphql-client [url prefix]
  (let [gql-index (atom {})
        gql-env   {::pfn/url       url
                   ::pcg/resolver  'gql-resolver
                   ::pcg/prefix    prefix
                   ::pcg/ident-map {}}
        parser    (p/async-parser {::p/plugins [(p/env-plugin
                                                  {::p/reader
                                                   [p/map-reader pc/all-async-readers]

                                                   ::pc/resolver-dispatch
                                                   (pfn/make-resolver gql-env)})
                                                (p/env-wrap-plugin
                                                  (fn [env]
                                                    (assoc env ::pc/indexes @gql-index)))
                                                p/error-handler-plugin]})]
    (fulcro/new-fulcro-client
      :started-callback
      (fn [app]
        (pfn/app-load-index app gql-env gql-index))

      :networking
      {:remote
       (pfn/pathom-remote ; <5>
         parser)})))

(register-demo {::name     "demo-fulcro-network-github-name"
                ::make-app #(graphql-client (str "https://api.github.com/graphql?access_token=" %) "github")
                ::root     demo.github-name/GithubUserView})

(register-demo {::name     "demo-fulcro-network-github-latest-stars"
                ::make-app #(graphql-client (str "https://api.github.com/graphql?access_token=" %) "github")
                ::root     demo.github-latest-stars/LastestStarred})

(register-demo {::name     "demo-fulcro-network-github-stars"
                ::make-app demo.github-stars/graphql-client
                ::root     demo.github-stars/GithubStars})

(css/upsert-css "token-demo" RequireTokenApp)
