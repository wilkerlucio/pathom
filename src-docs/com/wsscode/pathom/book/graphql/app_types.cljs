(ns com.wsscode.pathom.book.graphql.app-types
  (:require [com.wsscode.common.async-cljs :refer [go-catch <?]]
            [com.wsscode.pathom.book.app-types :as app-types]
            [com.wsscode.pathom.book.graphql.github-stars :as gh.stars]
            [com.wsscode.pathom.fulcro.network :as pfn]
            [fulcro.client :as fulcro]
            [fulcro.client.data-fetch :as df]))

(app-types/register-app "github-stars"
  (fn [_]
    {::app-types/root (app-types/make-root gh.stars/GraphqlDemo "github-stars-demo")
     ::app-types/app  (fulcro/new-fulcro-client
                        :started-callback
                        (fn [app]
                          (go-catch
                            (try
                              (<? gh.stars/github-index-status)
                              (df/load app [::root "singleton"] gh.stars/GraphqlDemo)
                              (catch :default e (js/console.error "Error making index" e)))))

                        :networking
                        {:remote (-> gh.stars/parser
                                     (pfn/pathom-remote)
                                     (pfn/profile-remote))})}))
