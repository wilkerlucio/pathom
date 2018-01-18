(ns pathom-docs.connect.getting-started
  (:require [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as p.connect]))

(defn latest-product [_ _]
  {::latest-product {:product/id    1
                     :product/title "Acoustic Guitar"
                     :product/price 199.99M}})

(def indexes
  (-> {}
      ; note that we add the symbol of the resolver, not the function reference
      (p.connect/add `latest-product
        {::p.connect/output [{::latest-product [:product/id :product/title :product/price]}]})))

(def parser
  (p/parser {::p/plugins
             [(p/env-plugin
                {::p/reader          [p/map-reader
                                      p.connect/all-readers]
                 ::p.connect/indexes indexes})]}))

(comment
  (parser {} [::latest-product])
  ; => #::{:latest-product #:product{:id 1, :title "Acoustic Guitar", :price 199.99M}}

  (parser {} [{::latest-product [:product/title]}])
  ; => #::{:latest-product #:product{:title "Acoustic Guitar"}}

  ; ::latest-product can be requested anywhere
  (parser {} [{::latest-product ['* ::latest-product]}])
  ; => #::{:latest-product {:product/id      1
  ;                         :product/title   "Acoustic Guitar"
  ;                         :product/price   199.99M
  ;                         ::latest-product #:product{:id    1
  ;                                                    :title "Acoustic Guitar"
  ;                                                    :price 199.99M}}}
  )
