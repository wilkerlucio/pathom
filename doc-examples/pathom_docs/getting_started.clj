(ns pathom-docs.getting-started
  (:require [com.wsscode.pathom.core :as p]))

; for simplicity, let's use an "atom database"
(def characters
  {:ww {:character/id          :ww
        :character/name        "Walter White"
        :character/friends-ids [:jp]}
   :jp {:character/id          :jp
        :character/name        "Jessy Pinkman"
        :character/friends-ids []}})

; the contacts is an atom, but could be your db instance or a database connection,
; whatever works to fetch your data
(defn load-contact [{::keys [characters]} id]
  (get characters id))

; See dispatch helpers docs for more information on entity-dispatch
(defmulti entity-reader p/entity-dispatch)

; load the contact entity by id, eg: [:character/id :ww]
(defmethod entity-reader :character/id [env]
  (let [id (p/ident-value env)]
    ; load contact and join to process the subquery
    (p/join (load-contact env id) env)))

; make sure to provide a default continuation for multi-methods to allow reader
; composition
(defmethod entity-reader :default [_] ::p/continue)

; See dispatch helpers docs for more information on key-dispatch
(defmulti virtual-attr p/key-dispatch)

; Here we use the virtual-attr to define a global access since it has no
; requirements on the current entity it can be called from anywhere in the graph
(defmethod virtual-attr :characters/all [{::keys [characters] :as env}]
  ; this time we use the join-seq to walk parsing a sequence
  (p/join-seq env (vals characters)))

; To load a relationship, we are going to use the current entity
; :character/friends-ids to fetch the entities
(defmethod virtual-attr :character/friends [env]
  ; p/entity returns the entity that is currently being processed, giving as access
  ; to it's properties
  (let [{:character/keys [friends-ids]} (p/entity! env [:character/friends-ids])]
    (->> friends-ids
         ; transform each id in a contact
         (map (partial load-contact env))
         ; join to parse the sub-query
         (p/join-seq env))))

; again, allow for composition
(defmethod virtual-attr :default [_] ::p/continue)

; use p/parser to init the parser
(def parser
  ; the env plugin will inject enviroment variables on the parser at the start of
  ; the run
  (p/parser {::p/plugins [(p/env-plugin {::p/reader [p/map-reader virtual-attr entity-reader]})
                          ; error handling plugin, catch exceptions during parsing,
                          ; allowing for the parser to keep running even when an
                          ; exception happens, returning whatever worked
                          p/error-handler-plugin]}))

(comment
  ; Play around with the parser
  (parser {::characters characters}
          [{[:character/id :ww] [:character/friends]}
           {:characters/all [:character/name]}]))
