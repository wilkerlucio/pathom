(ns com.wsscode.pathom.book.specs.demos
  (:require [com.wsscode.pathom.book.app-types :as app-types]
            [fulcro.client :as fulcro]))


(app-types/register-app "contacts"
  (fn [_]
    {::app-types/app  (fulcro/new-fulcro-client
                        :started-callback (fn [{:keys [reconciler]}]
                                            (fetch/load reconciler :app/viewer GithubViewer {:target [::contacts "singleton" ::viewer]}))
                        :networking {:remote (-> (pfn/graphql-network {::pfn/url (str "https://api.github.com/graphql?access_token=")})
                                                 (pfn/batch-network))})
     ::app-types/root (app-types/make-root ContactsApp "contacts")}))
