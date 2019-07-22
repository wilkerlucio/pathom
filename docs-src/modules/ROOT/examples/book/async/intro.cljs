(ns com.wsscode.pathom.book.async.intro
  (:require [com.wsscode.pathom.core :as p]
            [cljs.core.async :as async :refer [go <!]]
            [com.wsscode.pathom.profile :as pp]))

(defn sleep [n]
  (let [c (async/chan)]
    (js/setTimeout #(async/put! c ::done) n)
    c))

(def reader
  {:async-info
   (fn [_]
     (go
       (<! (sleep (+ 100 (rand-int 1000))))
       "From async"))

   :foo
   (fn [_]
     "Regular")})

(def parser
  (p/async-parser {::p/plugins [(p/env-plugin {::p/reader reader})
                                pp/profile-plugin]}))
