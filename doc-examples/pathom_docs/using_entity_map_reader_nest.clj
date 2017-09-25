(ns pathom-docs.using-entity-map-reader-nest
  (:require [com.wsscode.pathom.core :as p]))

(def parser
  (p/parser {::p/plugins [(p/env-plugin {::p/reader [p/map-reader]})]}))

(comment
  ; we send the entity using ::p/entity key on environment
  (parser {::p/entity #:character{:name "Rick" :age 60
                                :family [#:character{:name "Morty" :age 14}
                                         #:character{:name "Summer" :age 17}]
                                :first-episode #:episode{:name "Pilot" :season 1 :number 1}}}
          [:character/name :character/age
           {:character/family [:character/age]}
           {:character/first-episode [:episode/name :episode/number]}])
  ; =>
  ; #:character{:name "Rick",
  ;           :age 60,
  ;           :family [#:character{:age 14} #:character{:age 17}],
  ;           :first-episode #:episode{:name "Pilot", :number 1}}
  )
