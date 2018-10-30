(ns com.wsscode.pathom.book.connect.batch
  (:require [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [cljs.core.async :as async :refer [go]]
            [com.wsscode.pathom.profile :as pp]))

(pc/defresolver list-things [_ _]
  {::pc/output [{:items [:number]}]}
  {:items [{:number 3}
           {:number 10}
           {:number 18}]})

(pc/defresolver slow-resolver [_ {:keys [number]}]
  {::pc/input  #{:number}
   ::pc/output [:number-added]}
  (go
    (async/<! (async/timeout 1000))
    {:number-added (inc number)}))

(def app-registry [list-things slow-resolver])

(def parser
  (p/async-parser
    {::p/env     {::p/reader [p/map-reader
                              pc/async-reader2
                              pc/open-ident-reader]}
     ::p/mutate  pc/mutate-async
     ::p/plugins [(pc/connect-plugin {::pc/register app-registry})
                  p/error-handler-plugin
                  p/request-cache-plugin
                  p/trace-plugin]}))
