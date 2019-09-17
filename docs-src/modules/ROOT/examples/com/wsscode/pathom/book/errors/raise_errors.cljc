(ns com.wsscode.pathom.book.errors.raise-errors
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

; our error processing function
(defn process-error [env err]
  ; if you use some error reporting service, this is a good place
  ; to trigger a call to then, here you have the error and the full
  ; environment of when it ocurred, so you might want to some extra
  ; information like the query and the current path on it so you can
  ; replay it for debugging

  ; we are going to simply return the error message from the error
  ; if you want to return the same thing as the default, use the
  ; function (p/error-str err)
  (.getMessage err))

(def parser
  (p/parser {::p/env     {::p/reader        [computed flow-reader]
                          ; add the error processing to the environment
                          ::p/process-error process-error}
             ::p/plugins [; add the error handler plugin
                          p/error-handler-plugin]}))

(parser {} [{:go [:key {:nest [:trigger-error :other]}
                  :trigger-error]}])

(p/raise-errors {:go {:key :leaf
                      :nest {:trigger-error :com.wsscode.pathom.core/reader-error :other :leaf}
                      :trigger-error :com.wsscode.pathom.core/reader-error}
                 :com.wsscode.pathom.core/errors {[:go :nest :trigger-error] "Error triggered"
                                                  [:go :trigger-error] "Error triggered"}})
; =>
; {:go {:key :leaf
;       :nest {:trigger-error :com.wsscode.pathom.core/reader-error
;              :other :leaf}
;       :trigger-error :com.wsscode.pathom.core/reader-error}
;  :com.wsscode.pathom.core/errors {[:go :nest :trigger-error] "Error triggered"
;                                   [:go :trigger-error]       "Error triggered"}}

{:go {:key :leaf
      :nest {:trigger-error :com.wsscode.pathom.core/reader-error
             :other :leaf
             :com.wsscode.pathom.core/errors {:trigger-error "Error triggered"}}
      :trigger-error :com.wsscode.pathom.core/reader-error
      :com.wsscode.pathom.core/errors {:trigger-error "Error triggered"}}}
