(ns com.wsscode.pathom.book.connect.mutations
  (:require [com.wsscode.pathom.connect :as pc]
            [com.wsscode.pathom.core :as p]))

; setup indexes atom
(def indexes (atom {}))

; setup mutation dispatch and factory
(defmulti mutation-fn pc/mutation-dispatch)
(def defmutation (pc/mutation-factory mutation-fn indexes))

(defmutation 'send-message
  {::pc/params [:message/text]
   ::pc/output [:message/id :message/text]}
  (fn [env {:keys [message/text]}]
    {:message/id   123
     :message/text text}))

(def parser
  (p/parser {::p/env    {::pc/mutate-dispatch mutation-fn
                         ::pc/indexes         @indexes}
             ::p/mutate pc/mutate}))
