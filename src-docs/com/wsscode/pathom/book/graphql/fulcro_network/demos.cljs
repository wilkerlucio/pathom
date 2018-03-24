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
            [fulcro-css.css :as css]))

(defn start-app [this node token]
  (let [{::keys [app root make-app]} (fp/shared this)]
    (reset! app (fulcro/mount (make-app token) root node))))

(fp/defsc RequireTokenApp
  [this {::keys [token]} _ css]
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
  (dom/div #js {:className (:container css)}
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

(register-demo {::name     "demo-fulcro-network-github-name"
                ::make-app demo.github-name/new-client
                ::root     demo.github-name/GithubUserView})

(register-demo {::name     "demo-fulcro-network-github-latest-stars"
                ::make-app demo.github-latest-stars/new-client
                ::root     demo.github-latest-stars/LastestStarred})

(register-demo {::name     "demo-fulcro-network-github-stars"
                ::make-app demo.github-stars/new-client
                ::root     demo.github-stars/GithubStars})

(css/upsert-css "token-demo" RequireTokenApp)
