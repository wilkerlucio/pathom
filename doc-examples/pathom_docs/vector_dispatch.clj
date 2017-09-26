(ns pathom-docs.vector-dispatch
  (:require [com.wsscode.pathom.core :as p]))

(def name-reader
  {:name   (fn [_] "Saul")})

(def family-reader
  {:family (fn [_] "Goodman")})

(def parser (p/parser {::p/plugins [(p/env-plugin {::p/reader [name-reader family-reader]})]}))

(parser {} [{:current-user [:name :family :other]}])
; => {:current-user {:name "Saul" :family "Goodman" :other ::p/not-found}}
