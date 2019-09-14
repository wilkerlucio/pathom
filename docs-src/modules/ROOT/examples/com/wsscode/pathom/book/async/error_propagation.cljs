(ns com.wsscode.pathom.book.async.error-propagation
  (:require [cljs.core.async :as async]
            [com.wsscode.common.async-cljs :refer [go-catch <?]]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.trace :as pt]))

(pc/defresolver async-info [_ _]
  {::pc/output [:async-info]}
  (go-catch
    (<? (async/timeout (+ 100 (rand-int 1000))))
    {:async-info "From async"}))

(pc/defresolver async-error [_ _]
  {::pc/output [:async-error]}
  ; go catch will catch any exception and return then as the channel value
  (go-catch
    ; <? macro will re-throw any exception that get read from the channel
    (<? (async/timeout (+ 100 (rand-int 1000))))
    (throw (ex-info "Error!!" {}))))

(pc/defresolver foo [_ _]
  {::pc/output [:foo]}
  {:foo "Regular"})

(def register [async-info async-error foo])

(def parser
  (p/async-parser {::p/env     {::p/reader [p/map-reader
                                            pc/async-reader2]}
                   ::p/plugins [(pc/connect-plugin {::pc/register register})
                                p/error-handler-plugin
                                pt/trace-plugin]}))
