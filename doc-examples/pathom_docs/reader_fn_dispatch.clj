(ns pathom-docs.reader-fn-dispatch
  (:require [com.wsscode.pathom.core :as p]))

(defn read-value [{:keys [ast]}]
  (let [key (get ast :dispatch-key)]
    (case key
      :name "Saul"
      :family "Goodman"
      ; good pratice: return ::p/continue when your reader is unable
      ; to handle the request
      ::p/continue)))

(def parser (p/parser {::p/plugins [(p/env-plugin {::p/reader read-value})]}))

(parser {} [:name :family])
; => {:name "Saul" :family "Goodman"}
