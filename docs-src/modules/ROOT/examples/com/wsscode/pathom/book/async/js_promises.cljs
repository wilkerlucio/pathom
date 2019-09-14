(ns com.wsscode.pathom.book.async.js-promises
  (:require [com.wsscode.common.async-cljs :refer [go-catch <!p]]
            [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.core :as p]
            [goog.object :as gobj]))

(pc/defresolver random-dog [env {:keys []}]
  {::pc/output [:dog.ceo/random-dog-url]}
  (go-catch
    {:dog.ceo/random-dog-url
     (-> (js/fetch "https://dog.ceo/api/breeds/image/random") <!p
         (.json) <!p
         (gobj/get "message"))}))

(def parser
  (p/parallel-parser
    {::p/env     {::p/reader               [p/map-reader
                                            pc/parallel-reader
                                            pc/open-ident-reader
                                            p/env-placeholder-reader]
                  ::p/placeholder-prefixes #{">"}}
     ::p/plugins [(pc/connect-plugin {::pc/register [random-dog]})
                  p/error-handler-plugin
                  p/trace-plugin]}))
