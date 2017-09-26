(ns pathom-docs.dispatch-helpers
  (:require [com.wsscode.pathom.core :as p]))

(def cities
  {"Recife"    {:city/name "Recife" :city/country "Brazil"}
   "São Paulo" {:city/name "São Paulo" :city/country "Brazil"}})

(def city->neighbors
  {"Recife" [{:neighbor/name "Boa Viagem"}
             {:neighbor/name "Piedade"}
             {:neighbor/name "Casa Amarela"}]})

; this will dispatch according to the ast dispatch-key
(defmulti computed p/key-dispatch)

; use virtual attributes to handle data not present on the maps, like computed attributes, relationships and globals
(defmethod computed :city/neighbors [env]
  (let [name (p/entity-attr! env :city/name)]
    (p/join-seq env (city->neighbors name))))

; an example of global, same as before but without any dependency on the entity
(defmethod computed :city/all [env]
  (p/join-seq env (vals cities)))

; remember to return ::p/continue by default so non-handled cases can flow
(defmethod computed :default [_] ::p/continue)

; just to make easy to re-use, our base entity reader consists of a map reader + virtual attributes
(def entity-reader [p/map-reader computed])

; dispatch for entity keys, eg: [:user/by-id 123]
(defmulti entity-lookup p/entity-dispatch)

(defmethod entity-lookup :city/by-name [env]
  ; the ident-value helper extracts the value part from the ident, as "Recife" in [:city/by-name "Recife"]
  (let [city (get cities (p/ident-value env))]
    (p/join city env)))

(defmethod entity-lookup :default [_] ::p/continue)

(def parser
  (p/parser {::p/plugins [(p/env-plugin {::p/reader [p/map-reader computed entity-lookup]})]}))

(parser {} [{:city/all [:city/name]}
            {[:city/by-name "Recife"] [:city/neighbors]}])
; =>
;{:city/all [#:city{:name "Recife"} #:city{:name "São Paulo"}]
; [:city/by-name "Recife"] #:city{:neighbors [#:neighbor{:name "Boa Viagem"}
;                                             #:neighbor{:name "Piedade"}
;                                             #:neighbor{:name "Casa Amarela"}]}}
