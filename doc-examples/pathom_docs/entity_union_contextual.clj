(ns pathom-docs.entity-union-contextual
  (:require [com.wsscode.pathom.core :as p]))

(def search-results
  [{:type :user
    :user/name "Jack Sparrow"}
   {:type :movie
    :movie/title "Ted"
    :movie/year 2012}
   {:type :book
    :book/title "The Joy of Clojure"}])

(def search
  {:search
   (fn [env]
     ; join-seq is the same as join, but for sequences, note we set the ::p/union-path
     ; here this time, so we can be sure this will be used on this context, and then
     ; you can use different ones depending on the list in case
     (p/join-seq (assoc env ::p/union-path :type) search-results))})

(def parser
  (p/parser {::p/plugins [(p/env-plugin {::p/reader [search
                                                     p/map-reader]})]}))

(parser {}
        [{:search {:user [:user/name]
                   :movie [:movie/title]
                   :book [:book/title]}}])

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
;             :age 60,
;             :family [#:character{:age 14} #:character{:age 17}],
;             :first-episode #:episode{:name "Pilot", :number 1}}
