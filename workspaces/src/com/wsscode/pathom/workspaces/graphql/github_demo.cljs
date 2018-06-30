(ns com.wsscode.pathom.workspaces.graphql.github-demo
  (:require [nubank.cljs.workspaces.card-types.fulcro :as ct.fulcro]
            [nubank.cljs.workspaces.lib.fulcro-portal :as f.portal]
            [nubank.cljs.workspaces.core :as ws]
            [fulcro.client.primitives :as fp]
            [fulcro.client.localized-dom :as dom]))

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
    {::f.portal/root GraphqlDemo}))
