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
  (parser {} [:foo]))
