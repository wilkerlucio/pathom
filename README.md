# pathom [![Build Status](https://travis-ci.org/wilkerlucio/pathom.svg?branch=master)](https://travis-ci.org/wilkerlucio/pathom) 

A Clojure library designed to provide a collection of helper functions to support Clojure(script) graph parsers using
om.next graph syntax.

For an introduction on `om.next` parser development [please check my article on the subject](https://medium.com/@wilkerlucio/implementing-custom-om-next-parsers-f20ca6db1664).
This library encapsulates the ideas presented there, and go deeper on parser patterns. And all documentation here assumes you understand the Om.next query syntax.

## Install

Latest version:

```
[com.wsscode/pathom "1.0.0-beta8"]
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

Before we continue, I would like to talk to about some patterns on the graph parsing game, it will give you a better understanding of how/why this library is designed the way it is. When parsing a graph API like this, there are 3 major types of reading that you want to do at any level, let's talk about those:

1. **Entity attributes**: those are attributes present on the current entity (node) that is being parsed, for example, if we are in a `customer` node, it might have attributes like `:customer/id`, `:customer/name`, etc... So when the query asks for those we should fetch from the entity itself.
2. **Computed attributes**: when the desired key is not present on the entity map, we try to compute it from one (or many) other readers, those readers are usually maps (closed sets of attributes) or multimethods (open sets of attributes), and they have are configured to handle the keys by doing some process/computation. This one can be broken down into 2 categories:
    1. **Globals**: if the computed attribute doesn't depend on any data from the entity, it is global, and can be called from any point of the graph.
    2. **Derived attributes**: when the computed attribute depends on some property of the current entity, we call it a derivation. Derivations are often relationship mappings, like navigating to the `:customer/address`, or to a sub-list like `:customer/friends`, or just a computed property (apply some algorithm in a property to create a derived one).
3. **Entity lookups**: This is the om.next default way to look for an entity on the graph using the ident syntax (eg: `[:customer/id 123]`).

We gonna cover all of those types of reading in this getting started.

> It's very important that you use unique names for your graph attributes, having contextual behavior drives you to bugs and confusion very quickly. Use qualified (namespaced) keywords as much as you can, make then long, make then unique, give them the same care you do about naming/namespacing your functions in Clojure, this will enable your API to integrate with others and keep working for a long time.

Next, let's start with the first 2 types mentioned before, entity and computed attributes.

```clojure
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

   ; example of making a computed property, this will get the number of
   ; characters in the current tv-show
   :tv-show/characters-count
   (fn [env]
     ; just give a count on members, and again, will raise exception if
     ; :tv-show/character-ids fails to be reached
     (count (p/entity-attr! env :tv-show/character-ids)))})

(def parser
  ; This time we are using the env-plugin to initialize the environment, this is good
  ; to set the defaults for your parser to be called. Also, we are attaching the built-in
  ; reader map-reader on the game, so it will read the keys from the entity map. Check
  ; Entity page on wiki for more information.
  (p/parser {::p/plugins [(p/env-plugin {::p/reader [p/map-reader computed]})]}))

; call the parser, create and send our atom database
(parser {::db (atom {:characters characters
                     :tv-shows   tv-shows})}
        [{:characters/main [:character/name {:character/tv-show [:tv-show/title
                                                                 :tv-show/characters-count]}]}
         ; feeling lucky today?
         {:characters/random [:character/name]}])
; =>
; #:characters{:main   [#:character{:name "Rick Sanshes", :tv-show #:tv-show{:name "Rick and Morty", :characters-count 3}}
;                       #:character{:name "Morty Smith", :tv-show #:tv-show{:name "Rick and Morty", :characters-count 3}}
;                       #:character{:name "Saul Goodman", :tv-show #:tv-show{:name "Better Call Saul", :characters-count 1}}
;                       #:character{:name "Arya Stark", :tv-show #:tv-show{:name "Game of Thrones", :characters-count 2}}],
;              :random #:character{:name "Saul Goodman"}}
```

The previous example covered the most common processes you need on a graph API. The `map-reader` is responsible for reading the values on the **entity attributes**, when the value is not there the `computed` kicks in trying to compute the value if it's registered. In case no reader is able to respond, a value of `::p/not-found` will be returned.

Now it's time to add the **entity lookups in the game**. Add this right before the `(def parser ...` code.

```clojure
; initialize a multi-method to handle entity queries
(defmulti entity p/entity-dispatch)

; default case returns ::p/continue to sign to pathom that
; this reader can't handle the given entry
(defmethod entity :default [_] ::p/continue)

; let's handle the load of characters by id
(defmethod entity :character/id [{::keys [db] :as env}]
  ; from the key [:character/id :rick], p/ident-value will return :rick
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
```

When you understand those building blocks, all you graph can be written with that. If your app is larger than a demo, instead of using a fixed map for the `computed`, you can use the `p/key-dispatch` which is like the `p/entity-dispatch` but for `dispatch-keys` (like the map keys). By doing that you can leave the nodes open for extension, and then split your definitions across multiple files. An example of that is available at [[dispatch helpers page|Dispatch helpers]].

Here is the complete code for the example:

```clojure
(ns pathom-docs.hello-entities
  (:require [com.wsscode.pathom.core :as p]))

(def tv-shows
  {:rm  #:tv-show{:title         "Rick and Morty"
                  :character-ids [:rick :summer :morty]}
   :bcs #:tv-show{:title         "Better Call Saul"
                  :character-ids [:bcs]}
   :got #:tv-show{:title         "Game of Thrones"
                  :character-ids [:arya :ygritte]}})

(def characters
  {:rick    #:character{:name "Rick Sanshes" :tv-show-id :rm}
   :summer  #:character{:name "Summer Smith" :tv-show-id :rm}
   :saul    #:character{:name "Saul Goodman" :tv-show-id :bcs}
   :arya    #:character{:name "Arya Stark" :tv-show-id :got}
   :morty   #:character{:name "Morty Smith" :tv-show-id :rm}
   :ygritte #:character{:name "Ygritte" :tv-show-id :got}})

(defn characters-by-ids [{::keys [db]} ids]
  (map (get @db :characters) ids))

(def computed
  {:characters/random
   (fn [{::keys [db] :as env}]
     ; take a hand of the entity we want to be the current node
     (let [character (rand-nth (-> @db :characters vals vec))]
       ; to parse the sub-query with the entity we use the join function
       (p/join character env)))

   :characters/main
   (fn [env]
     ; since we decided to get the env in the characters-by-ids the argument
     ; passing is a brease
     (p/join-seq env (characters-by-ids env [:rick :morty :saul :arya])))

   :character/tv-show
   (fn [{::keys [db] :as env}]
     (let [tv-show-id (p/entity-attr! env :character/tv-show-id)]
       (p/join (some-> @db :tv-shows (get tv-show-id)) env)))

   :tv-show/characters
   (fn [env]
     (let [ids (p/entity-attr! env :tv-show/character-ids)]
       (p/join-seq env (characters-by-ids env ids))))

   :tv-show/characters-count
   (fn [env]
     (count (p/entity-attr! env :tv-show/character-ids)))})

(defmulti entity p/entity-dispatch)

(defmethod entity :default [_] ::p/continue)

(defmethod entity :character/id [{::keys [db] :as env}]
  (let [id (p/ident-value env)]
    (p/join (get-in @db [:characters id] ::p/continue) env)))

(defmethod entity :tv-show/id [{::keys [db] :as env}]
  (let [id (p/ident-value env)]
    (p/join (get-in @db [:tv-shows id] ::p/continue) env)))

(def parser
  (p/parser {::p/plugins [(p/env-plugin {::p/reader [p/map-reader
                                                     computed
                                                     entity]})]}))

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
```

That's it for start, I hope after this introduction you have a feeling about how pathom works. For more details check our [Wiki page](https://github.com/wilkerlucio/pathom/wiki).

To continue reading: [Readers](https://github.com/wilkerlucio/pathom/wiki/Readers)

## License

Copyright © 2017 Wilker Lúcio

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
