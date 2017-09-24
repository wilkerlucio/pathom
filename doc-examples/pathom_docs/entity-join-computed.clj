(ns com.wsscode.pathom-docs.using-entity-map-reader
  (:require [com.wsscode.pathom.core :as p]))

; let's get rick into a variable
(def rick
  #:character{:name          "Rick"
              :age           60
              :family        [#:character{:name "Morty" :age 14}
                              #:character{:name "Summer" :age 17}]
              :first-episode #:episode{:name "Pilot" :season 1 :number 1}})

; an external data set so we can do a join
(def char-name->voice
  {"Rick"   #:actor{:name "Justin Roiland" :nationality "US"}
   "Morty"  #:actor{:name "Justin Roiland" :nationality "US"}
   "Summer" #:actor{:name "Spencer Grammer" :nationality "US"}})

; this is our computed attributes, stuff to look for when the entity doesn't contain the requested
; attribute
(def computed
  {:character/voice
   (fn [env]
     (let [{:character/keys [name]} (p/entity env)
           voice (get char-name->voice name)]
       (p/join voice env)))})

(def parser
  ; note we have both readers now, map and computed
  (p/parser {::p/plugins [(p/env-plugin {::p/reader [p/map-reader computed]})]}))

(parser {::p/entity rick}
        '[:character/name
          ; the join enables us to query precisely what we need from the node
          {:character/voice [:actor/name]}
          ; two new things going on here, the * will ask for all attributes on the family nodes
          ; also by not specifying the query for :character/voice it will return the entity itself
          {:character/family [* :character/voice]}])
