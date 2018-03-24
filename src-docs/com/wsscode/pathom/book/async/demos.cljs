(ns com.wsscode.pathom.book.async.demos
  (:require [com.wsscode.pathom.book.app-types :as app-types]
            [fulcro.client :as fulcro]
            [fulcro.client.data-fetch :as fetch]
            [fulcro.client.primitives :as fp]
            [fulcro.client.alpha.localized-dom :as dom]))

(fp/defsc AsyncParserDemo
  [this {::keys [id name]} _ css]
  {:initial-state (fn [_]
                    {::id 123})
   :ident         (fn [] [::id "singleton"])
   :query         [::id ::name]
   :css           []
   :css-include   []}
  (dom/div
    (dom/button {:onClick #(fetch/load this (fp/get-ident this) AsyncParserDemo)})))

(def async-parser-demo (fp/factory AsyncParserDemo))

(app-types/register-app "async-parser"
  (fn [_]
    {::app-types/app  (fulcro/new-fulcro-client
                        :networking {:remote nil})
     ::app-types/root (app-types/make-root AsyncParserDemo "contacts")}))

