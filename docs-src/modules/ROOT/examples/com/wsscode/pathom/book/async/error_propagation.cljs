(ns com.wsscode.pathom.book.async.error-propagation
  (:require [cljs.core.async :as async]
            [com.wsscode.common.async-cljs :refer [go-catch <?]]
            [com.wsscode.pathom.core :as p]
            [com.wsscode.pathom.profile :as pp]))

(defn sleep [n]
  (let [c (async/chan)]
    (js/setTimeout #(async/put! c ::done) n)
    c))

(def reader
  {:async-info
   (fn [_]
     (go-catch
       (<? (sleep (+ 100 (rand-int 1000))))
       "From async"))

   :async-error
   (fn [_]
     ; go catch will catch any exception and return then as the channel value
     (go-catch
       ; <? macro will re-throw any exception that get read from the channel
       (<? (sleep (+ 100 (rand-int 1000))))
       (throw (ex-info "Error!!" {}))))

   :foo
   (fn [_]
     "Regular")})

(def parser
  (p/async-parser {::p/plugins [(p/env-plugin {::p/reader reader})
                                p/error-handler-plugin
                                pp/profile-plugin]}))
