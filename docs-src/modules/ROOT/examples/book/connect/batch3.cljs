(ns com.wsscode.pathom.book.connect.batch3
  (:require [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]
            [cljs.core.async :as async :refer [go]]))

(pc/defresolver list-things [_ _]
  {::pc/output [{:items [:number]}]}
  {:items [{:number 3}
           {:number 10}
           {:number 18}]})

(pc/defresolver slow-resolver [_ input]
  {::pc/input     #{:number}
   ::pc/output    [:number-added]
   ; use the transform, note we removed ::pc/batch? true, that's because the transform
   ; will add this for us
   ::pc/transform pc/transform-batch-resolver}
  (go
    (async/<! (async/timeout 1000))
    ; no need to detect sequence, it is always a sequence now
    (mapv (fn [v] {:number-added (inc (:number v))}) input)))

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
