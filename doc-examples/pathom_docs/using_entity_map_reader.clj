(ns pathom-docs.using-entity-map-reader
  (:require [com.wsscode.pathom.core :as p]))

(def parser
  (p/parser {::p/plugins [(p/env-plugin {::p/reader [p/map-reader]})]}))

(comment
  ; we send the entity using ::p/entity key on environment
  (parser {::p/entity #:character{:name "Rick" :age 60}}
          [:character/name :character/age :character/foobar])
  ; => #:character{:name "Rick", :age 60, :foobar :com.wsscode.pathom.core/not-found}
  )
