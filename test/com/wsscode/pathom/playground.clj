(ns com.wsscode.pathom.playground
  (:require [clojure.test :refer :all]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.profile :as pp]))

(def indexes (atom {}))

(defmulti resolver-fn pc/resolver-dispatch)
(def defresolver (pc/resolver-factory resolver-fn indexes))

(defmulti mutation-fn pc/mutation-dispatch)
(def defmutation (pc/mutation-factory mutation-fn indexes))

(def parser
  (p/parser {::p/env     {::p/reader             [p/map-reader pc/all-readers]
                          ::pc/resolver-dispatch resolver-fn
                          ::pc/mutate-dispatch   mutation-fn
                          ::pc/indexes           @indexes}
             ::p/mutate  pc/mutate
             ::p/plugins [p/error-handler-plugin
                          p/request-cache-plugin
                          pp/profile-plugin]}))

(comment
  (parser {} ['(foo {:bar :baz})]))
