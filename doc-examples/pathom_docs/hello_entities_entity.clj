(ns pathom-docs.hello-entities
  (:require [com.wsscode.pathom.core :as p]))

; define some data of tv shows
(def tv-shows
  {:rm  #:tv-show{:title         "Rick and Morty"
                  :character-ids [:rick :summer :morty]}
   :bcs #:tv-show{:title         "Better Call Saul"
                  :character-ids [:bcs]}
   :got #:tv-show{:title         "Game of Thrones"
                  :character-ids [:arya :ygritte]}})

; characters data
(def characters
  {:rick    #:character{:name "Rick Sanshes" :tv-show-id :rm}
   :summer  #:character{:name "Summer Smith" :tv-show-id :rm}
   :saul    #:character{:name "Saul Goodman" :tv-show-id :bcs}
   :arya    #:character{:name "Arya Stark" :tv-show-id :got}
   :morty   #:character{:name "Morty Smith" :tv-show-id :rm}
   :ygritte #:character{:name "Ygritte" :tv-show-id :got}})

; helper to illustrate what would be a function to your database or
; service, it's a good practice to send the entire environment, in this
; case we are getting the db, but having the entire env is often empowering
(defn characters-by-ids [{::keys [db]} ids]
  (map (get @db :characters) ids))

(def computed
  ; example of a global attribute, a random character from our
  ; "database" that can be fetched at any time
  {:characters/random
   ; pretend the db is your datomic database or a Postgres connection,
   ; anything that would enable you to reach the data
   (fn [{::keys [db] :as env}]
     ; take a hand of the entity we want to be the current node
     (let [character (rand-nth (-> @db :characters vals vec))]
       ; to parse the sub-query with the entity we use the join function
       (p/join character env)))

   ; example when you want to do go down the parser with a list of things
   ; very much like the single one, but using join-seq instead, in this case
   ; the main characters that we have on our list
   :characters/main
   (fn [env]
     ; since we decided to get the env in the characters-by-ids the argument
     ; passing is a brease
     (p/join-seq env (characters-by-ids env [:rick :morty :saul :arya])))

   ; an example of relashionship, extract the tv-show according to the :character/tv-show-id
   ; on the character entity
   :character/tv-show
   (fn [{::keys [db] :as env}]
     ; the p/entity-attr! will try to get the :character/tv-show from current entity
     ; if it's not there it will make a query for it using the same parser. If
     ; it can't be got it will trigger an exception with the issue details, making
     ; easier to identify the problem
     (let [tv-show-id (p/entity-attr! env :character/tv-show-id)]
       (p/join (some-> @db :tv-shows (get tv-show-id)) env)))

   ; load show characters
   :tv-show/characters
   (fn [env]
     (let [ids (p/entity-attr! env :tv-show/character-ids)]
       (p/join-seq env (characters-by-ids env ids))))

   ; example of making a computed property, this will get the number of
   ; characters in the current tv-show
   :tv-show/characters-count
   (fn [env]
     ; just give a count on members, and again, will raise exception if
     ; :tv-show/character-ids fails to be reached
     (count (p/entity-attr! env :tv-show/character-ids)))})

; initialize a multi-method to handle entity queries
(defmulti entity p/entity-dispatch)

; default case returns ::p/continue to sign to pathom that
; this reader can't handle the given entry
(defmethod entity :default [_] ::p/continue)

; let's handle the load of characters by id
(defmethod entity :character/id [{::keys [db] :as env}]
  ; from the key [:character/id :saul], p/ident-value will return :saul
  (let [id (p/ident-value env)]
    ; same thing as would find a record by id on your database
    ; we return ::p/continue to signal this reader wans't able to
    ; fetch it entity, so the parser can try the next one, more about this
    ; on Readers with page
    (p/join (get-in @db [:characters id] ::p/continue) env)))

; same thing for tv shows
(defmethod entity :tv-show/id [{::keys [db] :as env}]
  (let [id (p/ident-value env)]
    (p/join (get-in @db [:tv-shows id] ::p/continue) env)))

(def parser
  ; add our entity reader to our reader list
  (p/parser {::p/plugins [(p/env-plugin {::p/reader [p/map-reader
                                                     computed
                                                     entity]})]}))

; testing our new queries
(parser {::db (atom {:characters characters
                     :tv-shows   tv-shows})}
        [[:character/id :arya]
         {[:tv-show/id :rm]
          [:tv-show/title
           {:tv-show/characters [:character/name]}]}])
; =>
; {[:character/id :arya] #:character{:name "Arya Stark", :tv-show-id :got}
;  [:tv-show/id :rm]     #:tv-show{:title      "Rick and Morty"
;                                  :characters [#:character{:name "Rick Sanshes"}
;                                               #:character{:name "Summer Smith"}
;                                               #:character{:name "Morty Smith"}]}}
