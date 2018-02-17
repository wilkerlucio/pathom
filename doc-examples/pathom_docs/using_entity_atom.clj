(ns pathom-docs.using-entity-atom
  (:require [com.wsscode.pathom.core :as p]))

(defn data-load-reader [env]
  (p/swap-entity! env merge #:character{:name "Morty" :age 14})
  (get (p/entity env) (get-in env [:ast :key])))

(def parser
  (p/parser {::p/plugins [(p/env-plugin {::p/reader [p/map-reader
                                                     data-load-reader]})]}))

(comment
  ; we send the entity using ::p/entity key on environment
  (parser {::p/entity (atom {})}
    [:character/name])
  ; =>
  ; #:character{:name "Rick",
  ;           :age 60,
  ;           :family [#:character{:age 14} #:character{:age 17}],
  ;           :first-episode #:episode{:name "Pilot", :number 1}}
  )
