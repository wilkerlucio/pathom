(ns pathom-docs.hello-entities
  (:require [com.wsscode.pathom.core :as p]))

; define some data of plant families
(def families
  {:sativa #:family{:name        "Sativa"
                    :members-ids [:sd]}
   :hybrid #:family{:name        "Hybrid"
                    :members-ids [:bd :gsc :ok]}
   :indica #:family{:name        "Indica"
                    :members-ids [:bbk :gp]}})

; plants data
(def plants
  {:bd  #:plant{:name "Blue Dream" :family-id :hybrid}
   :sd  #:plant{:name "Sour Diesel" :family-id :sativa}
   :gsc #:plant{:name "Girl Scout Cookies" :family-id :hybrid}
   :bbk #:plant{:name "Blueberry Kush" :family-id :indica}
   :ok  #:plant{:name "OG Kush" :family-id :hybrid}
   :gp  #:plant{:name "Granddaddy Purple" :family-id :indica}})

; helper to illustrate what would be a function to your database or
; service, it's a good practice to send the entire environment, in this
; case we are getting the db, but having the entire env is often empowering
(defn plants-by-ids [{::keys [db]} ids]
  (map (get @db :plants) ids))

(def computed
  ; example of a global attribute, a random a random plant from our
  ; "database" that can be fetched at any time
  {:plants/random
   ; pretend the db is your datomic database or a Postgres connection,
   ; anything that would enable you to reach the data
   (fn [{::keys [db] :as env}]
     ; take a hand of the entity we want to be the current node
     (let [plant (rand-nth (-> @db :plants vals vec))]
       ; to parse the sub-query with the entity we use the join function
       (p/join plant env)))

   ; example when you want to do go down the parser with a list of things
   ; very much like the single one, but using join-seq instead
   :plants/popular
   (fn [env]
     ; since we decided to get the env in the plants-by-ids the argument
     ; passing is a brease
     (p/join-seq env (plants-by-ids env [:bd :sd :gsc :ok :gp])))

   ; an example of relashionship, extract the family according to the :plant/family
   ; on the plant entity
   :plant/family
   (fn [{::keys [db] :as env}]
     ; the p/entity-attr! will try to get the :plant/family from current entity
     ; if it's not there it will make a query for it using the same parser. If
     ; it can't be got it will trigger an exception with the issue details, making
     ; easier to identify the problem
     (let [family-id (p/entity-attr! env :plant/family-id)]
       (p/join (some-> @db :families (get family-id)) env)))

   ; example of making a computed property, this will get the number of
   ; plants in the current family
   :family/members-count
   (fn [env]
     ; just give a count on members, and again, will raise exception if
     ; :family/members fails to be reached
     (count (p/entity-attr! env :family/members-ids)))})

(def parser
  ; This time we are using the env-plugin to initialize the environment, this is good
  ; to set the defaults for your parser to be called. Also, we are attaching the built-in
  ; reader map-reader on the game, so it will read the keys from the entity map. Check
  ; Entity page for more information.
  (p/parser {::p/plugins [(p/env-plugin {::p/reader [p/map-reader computed]})]}))

; call the parser, create and send our atom database
(parser {::db (atom {:plants   plants
                     :families families})}
        [{:plants/popular [:plant/name {:plant/family [:family/name
                                                       :family/members-count]}]}
         ; feeling lucky today?
         {:plants/random [:plant/name]}])
; =>
; #:plants{:popular [#:plant{:name "Blue Dream", :family #:family{:name "Hybrid", :members-count 3}}
;                    #:plant{:name "Sour Diesel", :family #:family{:name "Sativa", :members-count 1}}
;                    #:plant{:name "Girl Scout Cookies", :family #:family{:name "Hybrid", :members-count 3}}
;                    #:plant{:name "OG Kush", :family #:family{:name "Hybrid", :members-count 3}}
;                    #:plant{:name "Granddaddy Purple", :family #:family{:name "Indica", :members-count 2}}],
;          :random #:plant{:name "OG Kush"}}
