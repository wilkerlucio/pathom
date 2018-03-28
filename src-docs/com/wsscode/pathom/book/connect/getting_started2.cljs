(ns com.wsscode.pathom.book.connect.getting-started2
  (:require [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]))

(defmulti resolver-fn pc/resolver-dispatch)
(def indexes (atom {}))

(def defresolver (pc/resolver-factory resolver-fn indexes))

(def product->brand
  {1 "Taylor"})

(defresolver `latest-product
  {::pc/output [{::latest-product [:product/id :product/title :product/price]}]}
  (fn [_ _]
    {::latest-product {:product/id    1
                       :product/title "Acoustic Guitar"
                       :product/price 199.99M}}))

(defresolver `product-brand
  {::pc/input  #{:product/id}
   ::pc/output [:product/brand]}
  (fn [_ {:keys [product/id]}]
    {:product/brand (get product->brand id)}))

(def parser
  (p/parser {::p/plugins
             [(p/env-plugin
                {::p/reader             [p/map-reader
                                         pc/all-readers]
                 ::pc/resolver-dispatch resolver-fn
                 ::pc/indexes           @indexes})]}))

(comment
  (parser {} [{::latest-product [:product/title :product/brand]}])
  ; => #::{:latest-product #:product{:title "Acoustic Guitar", :brand "Taylor"}}
  )
