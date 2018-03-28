(ns com.wsscode.pathom.book.connect.getting-started
  (:require [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.profile :as pp]))

; initialize a dispatch function
(defmulti resolver-fn pc/resolver-dispatch)
; initialize indexes
(def indexes (atom {}))

; this creates a factory that will add a new method on the resolver-fn and add it to the indexes
(def defresolver (pc/resolver-factory resolver-fn indexes))

; creating our first resolver
(defresolver `latest-product
  {::pc/output [{::latest-product [:product/id :product/title :product/price]}]}
  (fn [_ _]
    {::latest-product {:product/id    1
                       :product/title "Acoustic Guitar"
                       :product/price 199.99M}}))

(def parser
  (p/parser {::p/plugins
             [(p/env-plugin
                {::p/reader             [p/map-reader
                                         pc/all-readers]
                 ::pc/resolver-dispatch resolver-fn
                 ::pc/indexes           @indexes})
              pp/profile-plugin]}))

(comment
  (parser {} [::latest-product]))
