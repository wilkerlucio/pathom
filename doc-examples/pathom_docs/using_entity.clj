(ns pathom-docs.using-entity
  (:require [com.wsscode.pathom.core :as p]))

(defn read-attr [env]
  (let [e (p/entity env)
        k (get-in env [:ast :dispatch-key])]
    (if (contains? e k)
      (get e k)
      ::p/continue)))

(def parser
  (p/parser {::p/plugins [(p/env-plugin {::p/reader [read-attr]})]}))

(comment
  ; we send the entity using ::p/entity key on environment
  (parser {::p/entity #:character{:name "Rick" :age 60}} [:character/name :character/age :character/foobar])
  ; => #:character{:name "Rick", :age 60, :foobar :com.wsscode.pathom.core/not-found}
  )
