(ns com.wsscode.pathom.book.core.parser-counter-example
  (:require [com.wsscode.pathom.core :as p]
            [cljs.core.async :refer [go]]))

; tag::parser[]
(def count-parser
  (p/parser {::p/env {::p/reader #(swap! (::counter %) inc)}}))
; end::parser[]

(defn parser [env tx]
  (go
    (count-parser (assoc env ::counter (atom 0)) tx)))
