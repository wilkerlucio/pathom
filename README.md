# pathom [![Build Status](https://travis-ci.org/wilkerlucio/pathom.svg?branch=master)](https://travis-ci.org/wilkerlucio/pathom) 

A Clojure library designed to provide a collection of helper functions to support Clojure(script) graph parsers using
om.next graph syntax.

For an introduction on `om.next` parser development [please check my article on the subject](https://medium.com/@wilkerlucio/implementing-custom-om-next-parsers-f20ca6db1664).
This library encapsulates the ideas presented there, and go deeper on parser patterns.

## Install

Latest version:

```
[com.wsscode/pathom "1.0.0-beta8-SNAPSHOT"]
```

## Getting started

If you want to start writing your Om.next parser, you are in the right place! Let's get this code session started with a hello world parser with pathom:

```clojure
(ns pathom-docs.hello-pathom
  (:require [com.wsscode.pathom.core :as p]))

; this is our first reader
; a Clojure map represents a reader that will dispatch from the om dispatch key to the map key
(def computed
  ; here we define that for the dispatch-key :hello we are going to return "World"
  {:hello (fn [env] "World")})

(def parser
  ; initialize a pathom parser
  (p/parser {}))

; call the parser, we set the reader function
(parser {::p/reader computed} [:hello])
; => {:hello "World"}
```

Next, let's do a bit more and see how to use [entities](https://github.com/wilkerlucio/pathom/wiki/Entities) to load data and define relationships:

```clojure
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
  ; example of a global attribute, a random plant from our
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
  ; Entity page on wiki for more information.
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
```

The previous example covered the most common processes you need on a graph API. The `map-reader` is responsible for reading the values on the current entity when the value is not there the `computed` kicks in trying to compute the value if it's registered. In case no reader is able to respond, a value of `::p/not-found` will be returned.

One thing that wasn't covered, is the `ident` query. In om.next the entities are represented by an `ident`. An ident is a vector of two elements, where the first is a keyword, and the second can be any value. We can add to our previous example to allow direct access to a plant (eg: `[:plant/id :bbk]`) or a family (eg: `[:family/id :sativa]`). Add this right before the `(def parser ...` code.

```clojure
; initialize a multi-method to handle entity queries
(defmulti entity p/entity-dispatch)

; default case returns ::p/continue to sign to pathom that
; this reader can't handle the given entry
(defmethod entity :default [_] ::p/continue)

; let's handle the load of plants by id
(defmethod entity :plant/id [{::keys [db] :as env}]
  ; from the key [:plant/id :bbk], p/ident-value will return :bbk
  (let [id (p/ident-value env)]
    ; same thing as would find a record by id on your database
    (p/join (get-in @db [:plants id] ::p/not-found) env)))

; same thing for families
(defmethod entity :family/id [{::keys [db] :as env}]
  (let [id (p/ident-value env)]
    (p/join (get-in @db [:families id] ::p/not-found) env)))

(def parser
  ; add our entity reader to our reader list
  (p/parser {::p/plugins [(p/env-plugin {::p/reader [p/map-reader
                                                     computed
                                                     entity]})]}))

; testing our new queries
(parser {::db (atom {:plants   plants
                     :families families})}
        [[:plant/id :bbk]
         {[:family/id :hybrid]
          [{:family/members [:plant/name]}]}])
; =>
; {[:plant/id :bbk] #:plant{:name "Blueberry Kush", :family-id :indica}
;  [:family/id :hybrid] #:family{:members [#:plant{:name "Blue Dream"}
;                                          #:plant{:name "Girl Scout Cookies"}
;                                          #:plant{:name "OG Kush"}]}}
```

When you understand those building blocks, all you graph can be written with that. If your app is larger than a demo, instead of using a fixed map for the `computed`, you can use the `p/key-dispatch` which is like the `p/entity-dispatch` but for `dispatch-keys` (like the map keys). By doing that you can leave the nodes open for extension, and then split your definitions across multiple files. An example of that is available at [[dispatch helpers page|Dispatch helpers]].

Here is the complete code for the example:

```clojure
(ns pathom-docs.hello-entities
  (:require [com.wsscode.pathom.core :as p]))

(def families
  {:sativa #:family{:name        "Sativa"
                    :members-ids [:sd]}
   :hybrid #:family{:name        "Hybrid"
                    :members-ids [:bd :gsc :ok]}
   :indica #:family{:name        "Indica"
                    :members-ids [:bbk :gp]}})

(def plants
  {:bd  #:plant{:name "Blue Dream" :family-id :hybrid}
   :sd  #:plant{:name "Sour Diesel" :family-id :sativa}
   :gsc #:plant{:name "Girl Scout Cookies" :family-id :hybrid}
   :bbk #:plant{:name "Blueberry Kush" :family-id :indica}
   :ok  #:plant{:name "OG Kush" :family-id :hybrid}
   :gp  #:plant{:name "Granddaddy Purple" :family-id :indica}})

(defn plants-by-ids [{::keys [db]} ids]
  (map (get @db :plants) ids))

(def computed
  {:plants/random
   (fn [{::keys [db] :as env}]
     (let [plant (rand-nth (-> @db :plants vals vec))]
       (p/join plant env)))

   :plants/popular
   (fn [env]
     (p/join-seq env (plants-by-ids env [:bd :sd :gsc :ok :gp])))

   :plant/family
   (fn [{::keys [db] :as env}]
     (let [family-id (p/entity-attr! env :plant/family-id)]
       (p/join (some-> @db :families (get family-id)) env)))

   :family/members
   (fn [env]
     (let [member-ids (p/entity-attr! env :family/members-ids)]
       (p/join-seq env (plants-by-ids env member-ids))))

   :family/members-count
   (fn [env]
     (count (p/entity-attr! env :family/members-ids)))})

(defmulti entity p/entity-dispatch)

(defmethod entity :default [_] ::p/continue)

(defmethod entity :plant/id [{::keys [db] :as env}]
  (let [id (p/ident-value env)]
    (p/join (get-in @db [:plants id] ::p/not-found) env)))

(defmethod entity :family/id [{::keys [db] :as env}]
  (let [id (p/ident-value env)]
    (p/join (get-in @db [:families id] ::p/not-found) env)))

(def parser
  (p/parser {::p/plugins [(p/env-plugin {::p/reader [p/map-reader
                                                     computed
                                                     entity]})]}))

(parser {::db (atom {:plants   plants
                     :families families})}
        [[:plant/id :bbk]
         {[:family/id :hybrid]
          [{:family/members [:plant/name]}]}])
; =>
; {[:plant/id :bbk] #:plant{:name "Blueberry Kush", :family-id :indica}
;  [:family/id :hybrid] #:family{:members [#:plant{:name "Blue Dream"}
;                                          #:plant{:name "Girl Scout Cookies"}
;                                          #:plant{:name "OG Kush"}]}}
```

For more details on everything please keep reading those tutorials, they were made with a lot of love to you. And if something still confusing please let me know.

Continue reading: [Readers](https://github.com/wilkerlucio/pathom/wiki/Readers)

## License

Copyright © 2017 Wilker Lúcio

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
