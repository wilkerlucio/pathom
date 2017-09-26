(ns pathom-docs.error-handling
  (:require [com.wsscode.pathom.core :as p]))

(def computed
  ; create a handle key that will trigger an error when called
  {:trigger-error
   (fn [_]
     (throw (ex-info "Error triggered" {:foo "bar"})))})

; a reader that just flows, until it reaches a leaf
(defn flow-reader [{:keys [query] :as env}]
  (if query
    (p/join env)
    :leaf))

(def parser
  (p/parser {::p/plugins [(p/env-plugin {::p/reader [computed flow-reader]})
                          ; add the error handler plugin
                          p/error-handler-plugin]}))

(parser {} [{:go [:key {:nest [:trigger-error :other]}
                  :trigger-error]}])
; =>
; {:go {:key :leaf
;       :nest {:trigger-error :com.wsscode.pathom.core/reader-error
;              :other :leaf}
;       :trigger-error :com.wsscode.pathom.core/reader-error}
;  :com.wsscode.pathom.core/errors {[:go :nest :trigger-error] "class clojure.lang.ExceptionInfo: Error triggered - {:foo \"bar\"}"
;                                   [:go :trigger-error] "class clojure.lang.ExceptionInfo: Error triggered - {:foo \"bar\"}"}}
