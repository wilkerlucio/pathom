(ns pathom-docs.reader-vector-dispatch
  (:require [com.wsscode.pathom.core :as p]))

(def name-reader
  {:name   (fn [_] "Saul")})

(def family-reader
  {:family (fn [_] "Goodman")})

(def parser (p/parser {::p/plugins [(p/env-plugin {::p/reader [name-reader family-reader]})]}))

(parser {} [:name :family :other])
; => {:name "Saul", :family "Goodman", :other :com.wsscode.pathom.core/not-found}
