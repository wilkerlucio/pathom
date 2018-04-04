(ns com.wsscode.pathom.book.async.js-promises
  (:require [com.wsscode.common.async-cljs :refer [go-catch <!p]]
            [goog.object :as gobj]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.profile :as pp]))

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
                                pp/profile-plugin]}))
