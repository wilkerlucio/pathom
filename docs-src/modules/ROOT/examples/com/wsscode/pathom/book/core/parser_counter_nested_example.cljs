(ns com.wsscode.pathom.book.core.parser-counter-nested-example
  (:require [com.wsscode.pathom.core :as p]
            [cljs.core.async :refer [go]]))

; tag::parser[]
(defn join-walk-reader
  [{:keys [query] :as env}]
  (if query
    (p/join env)
    ::p/continue))

(def count-parser
  (p/parser {::p/env {::p/reader [join-walk-reader
                                  #(swap! (::counter %) inc)]}}))
; end::parser[]

(defn parser [env tx]
  (go
    (count-parser (assoc env ::counter (atom 0)) tx)))
