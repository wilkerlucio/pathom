(ns com.wsscode.pathom.book.connect.getting-started2
  (:require [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]))

(def product->brand
  {1 "Taylor"})

(pc/defresolver latest-product [_ _]
  {::pc/output [{::latest-product [:product/id :product/title :product/price]}]}
  {::latest-product {:product/id    1
                     :product/title "Acoustic Guitar"
                     :product/price 199.99M}})

(pc/defresolver product-brand [_ {:keys [product/id]}]
  {::pc/input  #{:product/id}
   ::pc/output [:product/brand]}
  {:product/brand (get product->brand id)})

(def app-registry [latest-product product-brand])

(def parser
  (p/parallel-parser
    {::p/env     {::p/reader [p/map-reader
                              pc/parallel-reader
                              pc/open-ident-reader]}
     ::p/mutate  pc/mutate-async
     ::p/plugins [(pc/connect-plugin {::pc/register app-registry})
                  p/error-handler-plugin
                  p/request-cache-plugin
                  p/trace-plugin]}))
