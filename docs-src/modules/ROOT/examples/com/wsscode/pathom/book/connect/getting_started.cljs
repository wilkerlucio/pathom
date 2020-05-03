(ns com.wsscode.pathom.book.connect.getting-started
  (:require [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.profile :as pp]))

; creating our first resolver
(pc/defresolver latest-product [_ _]
  {::pc/output [{::latest-product [:product/id :product/title :product/price]}]}
  {::latest-product {:product/id    1
                     :product/title "Acoustic Guitar"
                     :product/price 199.99M}})

(def parser
  (p/parser
    {::p/env     {::p/reader               [p/map-reader
                                            pc/reader2
                                            pc/open-ident-reader
                                            p/env-placeholder-reader]
                  ::p/placeholder-prefixes #{">"}}
     ::p/mutate  pc/mutate
     ::p/plugins [(pc/connect-plugin {::pc/register latest-product})
                  p/error-handler-plugin
                  p/trace-plugin]}))

(comment
  (parser {} [::latest-product]))
