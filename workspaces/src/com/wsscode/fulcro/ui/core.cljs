(ns com.wsscode.fulcro.ui.core
  (:require [fulcro.client.localized-dom :as dom]))

(defn wrap-react-component-localized
  "Wrap a react component with localized css support (like on dom/*)"
  [component]
  (fn [& args]
    (if (keyword? (first args))
      (dom/macro-create-element component (next args) (first args))
      (dom/macro-create-element component args))))

(defn wrap-simple
  "Wrap a simple React component just send props (will convert to cljs). This doesn't accept
  children."
  [component]
  (fn
    ([] (dom/create-element component))
    ([props] (dom/create-element component (clj->js props)))))
