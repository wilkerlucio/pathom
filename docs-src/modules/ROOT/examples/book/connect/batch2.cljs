(ns com.wsscode.pathom.book.connect.batch2
  (:require [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [cljs.core.async :as async :refer [go]]))

(pc/defresolver list-things [_ _]
  {::pc/output [{:items [:number]}]}
  {:items [{:number 3}
           {:number 10}
           {:number 18}]})

(pc/defresolver slow-resolver [_ input]
  {::pc/input  #{:number}
   ::pc/output [:number-added]
   ::pc/batch? true}
  (go
    (async/<! (async/timeout 1000))
    ; the input will be sequential if a batch opportunity happens
    (if (sequential? input)
      ; this will return a list of results, this order should match the input order, like this:
      ; [{:number-added 4}
      ;  {:number-added 11}
      ;  {:number-added 19}]
      (mapv (fn [v] {:number-added (inc (:number v))}) input)
      ; the else case still handles the single input case
      {:number-added (inc (:number input))})))

(def app-registry [list-things slow-resolver])

(def parser
  (p/async-parser
    {::p/env     {::p/reader        [p/map-reader
                                     pc/async-reader2
                                     pc/open-ident-reader]
                  ::p/process-error (fn [env error]
                                      (js/console.error "ERROR" error)
                                      (p/error-str error))}
     ::p/mutate  pc/mutate-async
     ::p/plugins [(pc/connect-plugin {::pc/register app-registry})
                  p/error-handler-plugin
                  p/request-cache-plugin
                  p/trace-plugin]}))
