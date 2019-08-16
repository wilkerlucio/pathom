(ns com.wsscode.pathom.book.async.js-promises
  (:require [com.wsscode.common.async-cljs :refer [go-catch <!p]]
            [com.wsscode.pathom.core :as p]
            [goog.object :as gobj]))

(def reader
  {:dog.ceo/random-dog-url
   (fn [_]
     (go-catch
       (-> (js/fetch "https://dog.ceo/api/breeds/image/random") <!p
           (.json) <!p
           (gobj/get "message"))))})

(def parser
  (p/async-parser {::p/plugins [(p/env-plugin {::p/reader reader})
                                p/error-handler-plugin
                                p/trace-plugin]}))
