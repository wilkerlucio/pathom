(ns com.wsscode.pathom.book.core.join-env-update
  (:require [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.connect :as pc]))

(pc/defresolver env-modifier [env input]
  {::pc/output [{:change-env [:val]}]}
  {:change-env {:val    123
                ::p/env (assoc env ::demo-env-key "modified")}})

(pc/defresolver env-read-thing [{::keys [demo-env-key]} input]
  {::pc/cache? false
   ::pc/output [:env-data]}
  {:env-data demo-env-key})

(pc/defresolver global-thing [{::keys [demo-env-key]} input]
  {::pc/cache? false
   ::pc/output [:env-data]}
  {:env-data demo-env-key})

(def register
  [env-modifier env-read-thing])

(def parser
  (p/parallel-parser
    {::p/env     {::p/reader               [p/map-reader
                                            pc/parallel-reader
                                            pc/open-ident-reader
                                            p/env-placeholder-reader]
                  ::demo-env-key           "original"
                  ::p/placeholder-prefixes #{">"}}
     ::p/plugins [(pc/connect-plugin {::pc/register register})
                  p/error-handler-plugin
                  p/request-cache-plugin
                  p/trace-plugin]}))
