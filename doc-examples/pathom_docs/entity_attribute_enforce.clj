(ns pathom-docs.entity-attribute-enforce
  (:require [com.wsscode.pathom.core :as p]))

(def computed
  {:greet
   (fn [env]
     ; enfore the character/name to be present, otherwise raises error, try removing
     ; the attribute from the entity and see what happens
     (let [name (p/entity-attr! env :character/name)]
       (str "Hello " name "!")))

   :invite
   (fn [env]
     ; now we are enforcing the attribute to be available, otherwise raise an error
     ; try changing the :greet to :greete and run the file, you will see the error
     (let [greet (p/entity-attr! env :greet)]
       (str greet " Come to visit us in Neverland!")))})

(def parser
  (p/parser {::p/plugins [(p/env-plugin {::p/reader [p/map-reader
                                                     computed]})]}))

(parser {::p/entity #:character{:name "Mary"}}
        [:invite])
; => {:invite "Hello Mary! Come to visit us in Neverland!"}
