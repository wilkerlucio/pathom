(ns com.wsscode.pathom.book.async.intro
  (:require [com.wsscode.pathom.core :as p]
            [cljs.core.async :as async :refer [go <!]]
            [com.wsscode.pathom.trace :as pt]
            [com.wsscode.pathom.connect :as pc]))

(pc/defresolver async-info [_ _]
  {::pc/output [:async-info]}
  (go
    (<! (async/timeout (+ 100 (rand-int 1000))))
    {:async-info "From async"}))

(pc/defresolver foo [_ _]
  {::pc/output [:foo]}
  {:foo "Regular"})

(def register [async-info foo])

(def parser
  (p/async-parser {::p/env     {::p/reader [p/map-reader
                                            pc/async-reader2]}
                   ::p/plugins [(pc/connect-plugin {::pc/register register})
                                pt/trace-plugin]}))
