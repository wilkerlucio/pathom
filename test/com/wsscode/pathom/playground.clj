(ns com.wsscode.pathom.playground
  (:require [clojure.test :refer :all]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.profile :as pp]))

;; How to go from :person/id to that person's details
(pc/defresolver person-resolver [env {:keys [person/id] :as params}]
  ;; The minimum data we must already know in order to resolve the outputs
  {::pc/input  #{:person/id}
   ;; A query template for what this resolver outputs
   ::pc/output [:person/name {:person/address [:address/id]}]}
  ;; normally you'd pull the person from the db, and satisfy the listed
  ;; outputs. For demo, we just always return the same person details.
  {:person/name "Tom"
   :person/address {:address/id 1}})

;; how to go from :address/id to address details.
(pc/defresolver address-resolver [env {:keys [address/id] :as params}]
  {::pc/input  #{:address/id}
   ::pc/output [:address/city :address/state]}
  {:address/city "Salem"
   :address/state "MA"})

;; define a list will our resolvers
(def my-resolvers [person-resolver address-resolver])

{::pc/index-resolvers
 {get-started/latest-product
  {::pc/sym     get-started/latest-product
   ::pc/input   #{}
   ::pc/output  [{::get-started/latest-product [:product/id
                                                :product/title
                                                :product/price]}]
   ::pc/resolve (fn ...)}

  get-started/product-brand
  {::pc/sym     get-started/product-brand
   ::pc/input   #{:product/id}
   ::pc/output  [:product/brand]
   ::pc/resolve (fn ...)}

  get-started/brand-id-from-name
  {::pc/sym     get-started/brand-id-from-name
   ::pc/input   #{:product/brand}
   ::pc/output  [:product/brand-id]
   ::pc/resolve (fn ...)}}

 ::pc/index-oir
 {:get-started/latest-product {#{} #{get-started/latest-product}}
  :product/brand              {#{:product/id} #{get-started/product-brand}}
  :product/brand-id           {#{:product/brand} #{get-started/brand-id-from-name}}}

 ::pc/index-io
 {#{}               {:get-started/latest-product #:product{:id {} :title {} :price {}}}
  #{:product/id}    {:product/brand {}}
  #{:product/brand} {:product/brand-id {}}}

 ::pc/index-attributes
 {#{}
  {::pc/attribute     #{}

   ::pc/attr-provides {::get-started/latest-product
                       #{get-started/latest-product}

                       [::get-started/latest-product :product/id]
                       #{get-started/latest-product}

                       [::get-started/latest-product :product/title]
                       #{get-started/latest-product}

                       [::get-started/latest-product :product/price]
                       #{get-started/latest-product}}

   ::pc/attr-input-in #{get-started/latest-product}}

  ::get-started/latest-product
  {::pc/attribute      ::get-started/latest-product
   ::pc/attr-reach-via {#{} #{get-started/latest-product}}
   ::pc/attr-output-in #{get-started/latest-product}
   ::pc/attr-branch-in #{get-started/latest-product}}

  :product/id
  {::pc/attribute      :product/id
   ::pc/attr-reach-via {[#{} ::get-started/latest-product] #{get-started/latest-product}}
   ::pc/attr-output-in #{get-started/latest-product}
   ::pc/attr-leaf-in   #{get-started/latest-product}
   ::pc/attr-provides  {:product/brand #{get-started/product-brand}}
   ::pc/attr-input-in  #{get-started/product-brand}}

  :product/title
  {::pc/attribute      :product/title
   ::pc/attr-reach-via {[#{} ::get-started/latest-product] #{get-started/latest-product}}
   ::pc/attr-output-in #{get-started/latest-product}
   ::pc/attr-leaf-in   #{get-started/latest-product}}

  :product/price
  {::pc/attribute      :product/price
   ::pc/attr-reach-via {[#{} ::get-started/latest-product] #{get-started/latest-product}}
   ::pc/attr-output-in #{get-started/latest-product}
   ::pc/attr-leaf-in   #{get-started/latest-product}}

  :product/brand
  {::pc/attribute      :product/brand
   ::pc/attr-reach-via {#{:product/id} #{get-started/product-brand}}
   ::pc/attr-output-in #{get-started/product-brand}
   ::pc/attr-leaf-in   #{get-started/product-brand}
   ::pc/attr-provides  {:product/brand-id #{get-started/brand-id-from-name}}
   ::pc/attr-input-in  #{get-started/brand-id-from-name}}

  :product/brand-id
  {::pc/attribute      :product/brand-id
   ::pc/attr-reach-via {#{:product/brand} #{get-started/brand-id-from-name}}
   ::pc/attr-output-in #{get-started/brand-id-from-name}
   ::pc/attr-leaf-in   #{get-started/brand-id-from-name}}}

 ::pc/idents
 #{:product/brand :product/id}}

;; setup for a given connect system
(def parser
  (p/parser
    {::p/env     {::p/reader               [p/map-reader
                                            pc/reader2
                                            pc/open-ident-reader
                                            p/env-placeholder-reader]
                  ::p/placeholder-prefixes #{">"}}
     ::p/mutate  pc/mutate-async
     ::p/plugins [(pc/connect-plugin {::pc/register my-resolvers})
                  p/error-handler-plugin
                  p/request-cache-plugin
                  p/trace-plugin]}))

(def parser2
  (p/parallel-parser
    {::p/env     {::p/reader               [p/map-reader
                                            pc/parallel-reader
                                            pc/open-ident-reader
                                            p/env-placeholder-reader]
                  ::p/placeholder-prefixes #{">"}}
     ::p/mutate  pc/mutate-async
     ::p/plugins [(pc/connect-plugin {::pc/register my-resolvers})
                  p/error-handler-plugin
                  p/request-cache-plugin
                  p/trace-plugin]}))

;; A join on a lookup ref (Fulcro ident) supplies the starting state of :person/id 1.
;; env can have anything you want in it (e.g. a Datommic/SQL connection, network service endpoint, etc.)
;; the concurrency is handled though core.async, so you have to read the channel to get the output

; => {[:person/id 1] {:person/id 1 :person/name "Tom" :person/address {:address/city "Salem}}}

(comment
  (time
    (parser {} [{[:person/id 1] [:person/name {:person/address [:address/city]}]}]))

  (time
    (clojure.core.async/<!! (parser2 {} [{[:person/id 1] [:person/name {:person/address [:address/city]}]}])))

  ((::pc/resolve foo) {} {})

  (pc/reprocess-index
    '{::pc/index-resolvers
      {get-started/latest-product
       {::pc/sym     get-started/latest-product
        ::pc/input   #{}
        ::pc/output  [{:get-started/latest-product [:product/id
                                                    :product/title
                                                    :product/price]}]
        ::pc/resolve (fn ...)}

       get-started/product-brand
       {::pc/sym     get-started/product-brand
        ::pc/input   #{:product/id}
        ::pc/output  [:product/brand]
        ::pc/resolve (fn ...)}

       get-started/brand-id-from-name
       {::pc/sym     get-started/brand-id-from-name
        ::pc/input   #{:product/brand}
        ::pc/output  [:product/brand-id]
        ::pc/resolve (fn ...)}}})

  (parser {} [:foo]))
