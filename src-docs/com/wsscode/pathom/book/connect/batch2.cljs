(ns com.wsscode.pathom.book.connect.batch2
  (:require [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [cljs.core.async :as async :refer [go]]
            [com.wsscode.pathom.profile :as pp]))

(defmulti resolver-fn pc/resolver-dispatch)
(def indexes (atom {}))
(def defresolver (pc/resolver-factory resolver-fn indexes))

(defn sleep [n]
  (let [c (async/chan)]
    (js/setTimeout #(async/put! c ::done) n)
    c))

(defresolver 'list-things
  {::pc/output [{:items [:number]}]}
  (fn [_ _]
    {:items [{:number 3}
             {:number 10}
             {:number 18}]}))

(defresolver 'slow-resolver
  {::pc/input  #{:number}
   ::pc/output [:number-added]
   ::pc/batch? true}
  (fn [_ input]
    (go
      (async/<! (sleep 1000))
      ; the input will be sequencial if a batch oportunity happens
      (if (sequential? input)
        (into {} (map (fn [v] [v {:number-added (inc (:number input))}])) input)
        ; this will return a batched result with all the options, the result map looks like this:
        ; {#{:number 3}  {:number-added 4}
        ;  #{:number 10} {:number-added 11}
        ;  #{:number 18} {:number-added 18}}
        {:number-added (inc (:number input))}))))

(def parser (p/async-parser {::p/plugins [(p/env-plugin {::p/reader             [p/map-reader pc/all-async-readers]
                                                         ::pc/indexes           @indexes
                                                         ::pc/resolver-dispatch resolver-fn})
                                          p/request-cache-plugin
                                          pp/profile-plugin]}))