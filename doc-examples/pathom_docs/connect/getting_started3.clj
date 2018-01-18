(ns pathom-docs.connect.getting-started3
  (:require [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as p.connect]))

(def product->brand
  {1 "Taylor"})

(defn product-brand [_ {:keys [product/id]}]
  {:product/brand (get product->brand id)})

(defn latest-product [_ _]
  {::latest-product {:product/id    1
                     :product/title "Acoustic Guitar"
                     :product/price 199.99M}})

(def brand->id
  {"Taylor" 44151})

(defn brand-id-from-name [_ {:keys [product/brand]}]
  {:product/brand-id (get brand->id brand)})

(def indexes
  (-> {}
      (p.connect/add `latest-product
        {::p.connect/output [{::latest-product [:product/id :product/title :product/price]}]})
      (p.connect/add `product-brand
        {::p.connect/input #{:product/id}
         ::p.connect/output [:product/brand]})
      (p.connect/add `brand-id-from-name
        {::p.connect/input #{:product/brand}
         ::p.connect/output [:product/brand-id]})))

(def parser
  (p/parser {::p/plugins
             [(p/env-plugin
                {::p/reader          [p/map-reader
                                      p.connect/all-readers]
                 ::p.connect/indexes indexes})]}))

(comment
  (parser {} [{::latest-product [:product/title :product/brand-id]}])
  ; => #::{:latest-product #:product{:title "Acoustic Guitar", :brand-id 44151}}


)

(parser {} [{[:product/id 1] [:product/brand]}])
; => {[:product/id 1] #:product{:brand "Taylor"}}

(parser {} [{[:product/brand "Taylor"] [:product/brand-id]}])
; => {[:product/brand "Taylor"] #:product{:brand-id 44151}}
