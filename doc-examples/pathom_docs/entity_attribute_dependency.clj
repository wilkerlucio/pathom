(ns pathom-docs.entity-attribute-dependency
  (:require [com.wsscode.pathom.core :as p]))

(def computed
  {:greet
   (fn [env]
     (let [{:character/keys [name]} (p/entity env)]
       (str "Hello " name "!")))

   :invite
   (fn [env]
     ; the invite requires the computed property `:greet`, so we can send a query
     ; to the p/entity to enforce the query to be realized with the entity, making
     ; it available
     (let [{:keys [greet]} (p/entity env [:greet])]
       (str greet " Come to visit us in neverland!")))})

(def parser
  (p/parser {::p/plugins [(p/env-plugin {::p/reader [p/map-reader
                                                     computed]})]}))

(parser {::p/entity #:character{:name "Mary"}}
        [:invite])
; => {:invite "Hello Mary! Come to visit us in neverland!"}
