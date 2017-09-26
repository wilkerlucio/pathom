(ns pathom-docs.reader-map-dispatch
  (:require [com.wsscode.pathom.core :as p]))

(def user-reader
  {:name   (fn [_] "Saul")
   :family (fn [_] "Goodman")})

(def parser (p/parser {::p/plugins [(p/env-plugin {::p/reader user-reader})]}))

(parser {} [:name :family])
; => {:name "Saul" :family "Goodman"}
