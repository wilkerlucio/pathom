(ns com.wsscode.pathom.book.graphql.fulcro-network.contacts
  (:require [fulcro.client.primitives :as fp]
            [fulcro.client.data-fetch :as fetch]
            [fulcro.client.dom :as dom]
            [com.wsscode.pathom.book.app-types :as app-types]
            [com.wsscode.pathom.fulcro.network :as pfn]
            [fulcro.client :as fulcro]))

(fp/defsc GithubViewer
  [this {:g.user/keys [name]} _ css]
  {:initial-state {}
   :ident         [:g.user/id :g.user/id]
   :query         [:g.user/id :g.user/name]
   :css           []
   :css-include   []}
  (dom/div nil
    "Group: " (str name)))

(def github-viewer (fp/factory GithubViewer {:keyfn :g.user/id}))

(fp/defsc ContactsApp
  [this {::keys [viewer]} _ css]
  {:initial-state {}
   :ident         (fn [] [::contacts "singleton"])
   :query         [::contacts
                   {::viewer (fp/get-query GithubViewer)}]
   :css           []
   :css-include   []}
  (dom/div nil
    "Hello Contacts App World!!"
    (github-viewer viewer)))

(def contacts-app (fp/factory ContactsApp))

(app-types/register-app "contacts"
  (fn [_]
    {::app-types/app  (fulcro/new-fulcro-client
                        :started-callback (fn [{:keys [reconciler]}]
                                            (fetch/load reconciler :app/viewer GithubViewer {:target [::contacts "singleton" ::viewer]}))
                        :networking {:remote (-> (pfn/graphql-network {::pfn/url (str "https://api.github.com/graphql?access_token=")})
                                                 (pfn/batch-network))})
     ::app-types/root (app-types/make-root ContactsApp "contacts")}))
