# pathom [![Build Status](https://travis-ci.org/wilkerlucio/pathom.svg?branch=master)](https://travis-ci.org/wilkerlucio/pathom) 

A Clojure library designed to provide a collection of helper functions to support Clojure(script) graph parsers using
om.next graph syntax.

## Install

Latest version:

```
[com.wsscode/pathom "1.0.0-beta4"]
```

## Usage

The main entry-point for this library is the `com.wsscode.pathom.core/pathom-read`, you can use that directly
as your `read` function on the `Om` parser, or wrap it with your own if you want futher customization (usually not needed).

The usage should look like this:

```clojure
(def parser (om/parser {:read p/pathom-read}))

(defn parse [env query]
  (parser (assoc env ::p/reader my-reader) query))
```

## Index

* [What is a reader?](#what-is-a-reader)
* [Dynamic Readers](#dynamic-readers)
* [Map dispatcher](#map-dispatcher)
* [Entities](#entities)
* [Map reader](#map-reader)
* [Composed readers](#composed-readers)
* [Join nodes](#join-nodes)
* [Path detection](#path-detection)
* [Dispatch helpers](#dispatch-helpers)
* [Placeholder nodes](#placeholder-nodes)
* [Global readers](#global-readers)
* [Union queries](#union-queries)
* [Reading from javascript objects](#reading-from-javascript-objects)
* [GraphQL helpers](#graphql-helpers)
* [Async Reader](#async-reader)

### What is a reader?

A reader is a function that will process a single entry from the query. For example, given the following query:
`[:name :age]`. If you ask an `om.next` parser to read this, the reader function will be called twice; once for `:name`
and another one for `:age`. Note that in the case of joins, the parser will only be called for the join entry, but not
for it's children (not automatically), for example: given the query `[:name :age {:parent [:name :gender]}]`. The reader
function will be called 3 times now, one for `:name`, one for `:age` and one for `:parent`, when reading `:parent`, your
reader code is responsible for checking that it has children query, and do a recursive call (or anything else you want
to do to handle this join). During this documentation we are going to see many ways to implement those readers, but before
we move on I like to say the different between `om.next` readers and `pathom` readers.

In `om.next` a parse read functions has the following signature: `(fn [env dispatch-key params])`. In `pathom` we use
a smaller version instead, which is: `(fn [env])`. This is major different, in `pathom` I decided to use a smaller
signature, you can extract the `dispatch-key` and the `params` from the env, so there is no information loss:

```clojure
(get-in env [:ast :dispatch-key]) ; => dispatch-key
(get-in env [:ast :params]) ; => params
```

Also, in `om.next` you need to return the value wrapped in `{:value "your-content"}`. In `pathom` this wrapping is done
automatically for you, just return the final value.

### Dynamic Readers

Recursive calls are very common during parsing, and Om.next makes it even easier by providing the current parser as part
of the enviroment. The problem is that if you just call the same parser recursivelly, there is no chance to change how
the reading process operates. To enable this to happen, `pathom` makes the reader part of the enviroment, this way you
can change the read function when doing a recursive parse call, for example:

```clojure
(ns pathom-dynamic-reader
  (:require [com.wsscode.pathom.core :as p]
            [om.next :as om]))

(defn user-reader [{:keys [ast]}]
  (let [key (get ast :dispatch-key)]
    (case key
      :name "Daenerys"
      :family "Targaryen")))

(defn root-reader [{:keys [ast query parser] :as env}]
  (let [key (get ast :dispatch-key)]
    (case key
      :current-user (parser (assoc env ::p/reader user-reader) query))))

(def parser (om/parser {:read p/pathom-read}))

(defn parse [env query]
  (parser (assoc env ::p/reader root-reader) query))
  
(parse {} [{:current-user [:name :family]}])
; => {:current-user {:name "Daeneris" :family "Targaryen"}}
```

### Map dispatcher

The pattern you saw at the previous example, to dispatch from a fixed list of options, is very common, so `pathom` makes
this easier by supporting `clojure maps` as reader functions, using it we can re-write the previous example as:

```clojure
(ns pathom-map-dispatcher
  (:require [com.wsscode.pathom.core :as p]
            [om.next :as om]))

(def user-reader
  {:name   (fn [_] "Daeneris")
   :family (fn [_] "Targaryen")})

(def root-reader
  {:current-user
   (fn [{:keys [query parser] :as env}]
     (parser (assoc env ::p/reader user-reader) query))})

(def parser (om/parser {:read p/pathom-read}))

(defn parse [env query]
  (parser (assoc env ::p/reader root-reader) query))

(parse {} [{:current-user [:name :family]}])
; => {:current-user {:name "Daeneris" :family "Targaryen"}}
```

### Entities

One of the common patterns that arrises when writing parsers is that you have some sort of data (examples: table row,
datomic entity, etc...) and you process the current query level by reading this data. Given that in `Pathom` we
encourage you to use the keyword `::p/entity`. The reason for that is: a well defined name for where to find
the current entity makes possible to write generic readers, for example the `pathom` builtin `clojure map reader` is a good
example (we are going to talk more about that one later). On the previous example we read the current user statically,
here is an example of using the `::p/entity` to make it read from a given data instead of constant information:

```clojure
(ns pathom-entities
  (:require [com.wsscode.pathom.core :as p]
            [om.next :as om]))

(def dead-people #{"Robb"})
(defonce current-user (atom {:name "Arya" :family "Stark"}))

(def user-reader
  {:name (fn [{::p/keys [entity]}] (:name entity))
   :family (fn [{::p/keys [entity]}] (:family entity))
   :dead? (fn [{::p/keys [entity]}] (contains? dead-people (:name entity)))})

(def root-reader
  {:current-user
   (fn [{:keys [query parser] :as env}]
     (parser (assoc env ::p/reader user-reader ::p/entity @current-user) query))})

(def parser (om/parser {:read p/pathom-read}))

(defn parse [env query]
  (parser (assoc env ::p/reader root-reader) query))
  
(parse {} [{:current-user [:name :family :dead?]}])
; => {:current-user {:name "Arya" :family "Stark" :dead? false}}
```

To get a bit beyond just reading the map, we add some information that is not part of the current entity map, this same
pattern often applies to read information from an external source, related information and many more.

Note: the entity key is dynamic, `::p/continue` is the default, but you can change by setting the `::p/entity-key`
param at the environment. I recommend you to keep the default, `pathom` will set `::p/entity-key` to `::p/entity` by
default, you should use that when doing recursive calls, see an example at `join` section.

### Map reader

Reading keys from maps is probably the most common pattern of reading, and to support that with ease `pathom` provides
a map reader. To see in action let's refactor the previous example:

```clojure
(ns pathom-map-readers
  (:require [com.wsscode.pathom.core :as p]
            [om.next :as om]))

(def dead-people #{"Robb"})
(defonce current-user (atom {:name "Arya" :family "Stark"}))

(def root-reader
  {:current-user
   (fn [{:keys [query parser] :as env}]
     (parser (assoc env ::p/reader p/map-reader ::p/entity @current-user) query))})

(def parser (om/parser {:read p/pathom-read}))

(defn parse [env query]
  (parser (assoc env ::p/reader root-reader) query))
  
(parse {} [{:current-user [:name :family :dead?]}])
; => {:current-user {:name "Arya" :family "Stark" :dead? ::p/not-found}}
```

And the map reader solves more complicated cases too, it understands how to handle sequences and nested maps as well:

```clojure
(ns pathom-map-readers-deep
  (:require [com.wsscode.pathom.core :as p]
            [om.next :as om]))

(def sample-data
  {:name     "Clojure"
   :type     "language"
   :parent   {:name "Lisp"}
   :features [{:name "Immutable data structures" :since "1.0"}
              {:name "Transducers" :since "1.7"}]})

(def root-reader
  {:clojure
   (fn [{:keys [query parser] :as env}]
     (parser (assoc env ::p/reader p/map-reader ::p/entity sample-data) query))})

(def parser (om/parser {:read p/pathom-read}))

(defn parse [env query]
  (parser (assoc env ::p/reader root-reader) query))

(parse {} [{:clojure [:name :type {:parent [:name]} {:features [:name :since]}]}])
; => {:clojure {:name "Clojure"
;               :type "language"
;               :parent {:name "Lisp"}
;               :features [{:name "Immutable data structures" :since "1.0"
;                           :name "Transducers" :since "1.7"}]}}
```

### Composed readers

Had you noticed what happened with our special `:dead?` property example after we stated using the `map-reader`? Well,
we lost it's implementation when we replaced with the generic one, would be possible to mix the generic map reader with
some custom reader definition? Yes, composed readers are just for that! We saw before how to use the clojure map as 
a dispatcher; there is another special clojure structure in `pathom` context: the vector. When using a vector as a reader,
`pathom` will threat it as a reader composition, it will try the first one, and if that can't response, try the next
until you get to the last. In order to know when a reader failed to fetch a value, we use the special `::p/continue`.
When a reader return this value, `pathom` will understand as: this reader can't handle this key, let's try the next. The
`map-reader` is already implemented to return `::p/continue` when the key is not present on the map. Let's leverage all
that and get our `:dead?` key back:

```clojure
(ns pathom-composed-readers
  (:require [com.wsscode.pathom.core :as p]
            [om.next :as om]))

(def dead-people #{"Robb"})
(defonce current-user (atom {:name "Robb" :family "Stark"}))

(def user-attrs
  {:dead? (fn [{::p/keys [entity]}] (contains? dead-people (:name entity)))})

(def root-reader
  {:current-user
   (fn [{:keys [query parser] :as env}]
     (parser (assoc env ::p/reader [p/map-reader user-attrs] ; <- combination happening here
                        ::p/entity @current-user) query))})

(def parser (om/parser {:read p/pathom-read}))

(defn parse [env query]
  (parser (assoc env ::p/reader root-reader) query))
  
(parse {} [{:current-user [:name :family :dead?]}])
; => {:current-user {:name "Robb" :family "Stark" :dead? true}}
```

When you write your own readers, remember to return `::p/continue` when you figure you can't handle a given key. This
way your reader will play nice in composition scenarios.

### Join nodes

Join nodes are when a part of our query has a child query. Database joined data is a very common example, but you can
use it for any type of association between the current node and a next one on your graph. This is a point where 2 things
happen:

1. You usually use this point to load the join data (go on a database for example).
2. You do recursive call on the parser, now to parse the child query with the new information.

Continuing our example:

```clojure
(ns pathom-join-nodes
  (:require [com.wsscode.pathom.core :as p]
            [om.next :as om]))

(def dead-people #{"Robb"})
(def name->home {"Robb" {:location "Winterfell"}})

(def current-user (atom {:name "Robb" :family "Stark"}))

(def user-attrs
  {:dead?
   (fn [{::p/keys [entity]}] (contains? dead-people (:name entity)))

   :home
   (fn [{::p/keys [entity entity-key] :as env}]
     (let [home (get name->home (:name entity))]
       (p/join (assoc env entity-key home))))})

(def root-reader
  {:current-user
   (fn [env]
     (p/join (assoc env ::p/reader [p/map-reader user-attrs]
                        ::p/entity @current-user)))})

(def parser (om/parser {:read p/pathom-read}))

(defn parse [env query]
  (parser (assoc env ::p/reader root-reader) query))

(parse {} [{:current-user [:name :family :dead? {:home [:location]}]}])
; => {:current-user {:name "Robb" :family "Stark" :dead? true :home {:location "Winterfell"}}}
```

The helper `p/join` facilitates the parser recursive call. It already loads it and the subquery for you, and also
handles the `*` query (also joins without subquery), so in the previous example we could had query for
`[{:current-user [* :dead? :home]}]`. In this example we are exercising a couple of things that `p/join` does:

1. The `*` part makes it load all data from the entity (dynamic ones not included).
2. The `:dead?` and any other attributes are merged with the full entity got by the `*`.
3. The `:home` part without a join makes it return the full original entity.

So, prefer using `p/join` instead of manually calling the parser recursively to get this benefits.

### Path detection

As you go deep in your parser `pathom` tracks record of the current path taken, it's available at `::p/path` at anytime.
It's a vector containing the current path from the root, the current main use for it is regarding error reporting and
performance measurements.

```clojure
(ns pathom-join-nodes
  (:require [com.wsscode.pathom.core :as p]
            [om.next :as om]))

(def dead-people #{"Robb"})
(def name->home {"Robb" {:location "Winterfell"}})

(defonce current-user (atom {:name "Robb" :family "Stark"}))

(def user-attrs
  {:dead?
   (fn [{::p/keys [entity]}] (contains? dead-people (:name entity)))

   :home
   (fn [{::p/keys [entity entity-key] :as env}]
     (let [home (get name->home (:name entity))]
       (p/join (assoc env entity-key home))))})

(def where-i-am-reader
  {::where-i-am (fn [{::p/keys [path]}] path)})

(def root-reader
  {:current-user
   (fn [env]
     (p/join (assoc env ::p/reader [p/map-reader user-attrs where-i-am-reader]
                        ::p/entity @current-user)))})

(def parser (om/parser {:read p/pathom-read}))

(defn parse [env query]
  (parser (assoc env ::p/reader root-reader) query))

(parse {} [{:current-user [:name :family :dead? {:home [:location ::where-i-am]}]}])
; => {:current-user {:name "Robb" :family "Stark" :dead? true :home {:location "Winterfell"
;                                                                    ::where-i-am [:current-user :home ::where-i-am]}}}
```

### Dispatch helpers

Using multi-methods is a good way to make open readers, `pathom` provides helpers for two common dispatch strategies:
`key-dispatch` and `entity-dispatch`. Here is a pattern that I often use on parsers:

```clojure
(ns pathom-dispatch-helpers
  (:require [com.wsscode.pathom.core :as p]
            [om.next :as om]))

(def cities
  {"Recife"    {:city/name "Recife" :city/country "Brazil"}
   "São Paulo" {:city/name "São Paulo" :city/country "Brazil"}})

(def city->neighbors
  {"Recife" [{:neighbor/name "Boa Viagem"} {:neighbor/name "Piedade"} {:neighbor/name "Casa Amarela"}]})

; this will dispatch according to the ast dispatch-key
(defmulti virtual-key p/key-dispatch)

; use virtual attributes to handle data not present on the maps, like computed attributes and relationships
(defmethod virtual-key :city/neighbors [{::p/keys [entity] :as env}]
  (p/continue-seq env (city->neighbors (:city/name entity))))

; remember to return ::p/continue by default so non-handled cases can flow
(defmethod virtual-key :default [_] ::p/continue)

; just to make easy to re-use, our base entity reader consists of a map reader + virtual attributes
(def entity-reader [p/map-reader virtual-key])

; dispatch for entity keys, eg: [:user/by-id 123]
(defmulti entity-lookup p/entity-dispatch)

(defmethod entity-lookup :city/by-name [{::p/keys [entity-key] :as env}]
  ;               the ident-value helper extracts the value part from the ident, as "Recife" in [:city/by-name "Recife"]
  (let [city (get cities (p/ident-value env))]
    (p/join (assoc env ::p/reader entity-reader entity-key city))))

(defmethod entity-lookup :default [_] ::p/continue)

(def parser (om/parser {:read p/pathom-read}))

(def root-reader
  {:cities #(p/join-seq (assoc % ::p/reader entity-reader) (vals cities))})

(defn parse [env query]
  (parser (assoc env ::p/reader [root-reader entity-lookup]) query))

(parse {} [{:cities [:city/name]}
           {[:city/by-name "Recife"] [:city/neighbors]}])
; {:cities [#:city{:name "São Paulo"} #:city{:name "Recife"}],
;  [:city/by-name "Recife"] #:city{:neighbors [#:neighbor{:name "Boa Viagem"}
;                                              #:neighbor{:name "Piedade"}
;                                              #:neighbor{:name "Casa Amarela"}]}}
```

### Placeholder nodes

There is one issue that some people stumbled upon while using Om.next; the problem happens when you need to display two
or more different views of the same item as siblings (regarding query arrangement, not necessarily DOM siblings), how do
you make this query?

For example, let's say you have two different components to display a user profile, one that shows just the user name,
and another one with it's photo.

```clojure
(om/defui ^:once UserTextView
  static om/IQuery
  (query [_] [:user/name]))

(om/defui ^:once UserImageView
  static om/IQuery
  (query [_] [:user/photo-url]))

(om/defui ^:once UserViewsCompare
  static om/IQuery
  ;; We want to query for both, what we place here?
  (query [_] [{:app/current-user [???]}]))
```

You might be tempted to concat the queries, and in case you don’t have nesting like we do here, that may even look like
it’s working, but let me break this illusion for you; because it’s not. When you use om/get-query it’s not just the query
that’s returned; it also contains meta-data telling from which component that query came from.

This information is important, `om` uses to index your structure and enables incremental updates. When you concat the
queries, you lose this, and as a consequence, when you try to run a mutation later that touches those items you will have
a “No queries exist at the intersection of component path” thrown in your face.

[This problem is still in discussion on the om repository](https://github.com/omcljs/om/issues/823). So far the best way
I know to handle this is to use placeholder nodes, so let’s learn how to manage those cases properly.

What we need is to be able to branch out the different queries, this is my suggestion on how to write the `UserViewsCompare`
query:

```clojure
(om/defui ^:once UserViewsCompare
  static om/IQuery
  ;; We want to query for both, what we place here?
  (query [_] [{:app/current-user [{:ph/text-view (om/get-query UserTextView)}
                                  {:ph/image-view (om/get-query UserImageView)}]}]))
```

The trick is to create a convention about placeholder nodes, in this case, we choose the namespace ph to represent
“placeholder nodes”, so when the query asks for `:ph/something` we should just do a recursive call, but staying at the
same logical position in terms of parsing, as if we had stayed on the same node.

You can use the `p/placeholder-node` to implement this pattern on your parser:

```clojure
(ns pathom-placeholder-nodes
  (:require [com.wsscode.pathom.core :as p]
            [om.next :as om]))

(def user
  {:user/name      "Walter White"
   :user/photo-url "http://retalhoclub.com.br/wp-content/uploads/2016/07/1-3.jpg"})

(def root-reader
  {:app/current-user
   (fn [env]
     (p/join user (assoc env ::p/reader [p/map-reader (p/placeholder-node "ph")])))})

(def parser (om/parser {:read p/pathom-read}))

(defn parse [env query]
  (parser (assoc env ::p/reader root-reader) query))

(parse {} [{:app/current-user [{:ph/text-view [:user/name]}
                               {:ph/image-view [:user/photo-url]}]}])
; #:app{:current-user #:ph{:text-view #:user{:name "Walter White"},
;                          :image-view #:user{:photo-url "http://retalhoclub.com.br/wp-content/uploads/2016/07/1-3.jpg"}}}
```

### Global readers

You might want to have global definitions, `pathom` gives you a chance to process the reader before it's evaluated. You
just have to set the key `::p/process-reader` which is a function of `(process-reader reader) -> reader`. This way
you have the flexibility to compute in any way you find suitable. One good example is if you want to have `placeholder-nodes`
available globally, here is how to refactor our previous example using the `placeholder-node` as a global reader:

```clojure
(ns pathom-global-readers
  (:require [com.wsscode.pathom.core :as p]
            [om.next :as om]))

(def user
  {:user/name      "Walter White"
   :user/photo-url "http://retalhoclub.com.br/wp-content/uploads/2016/07/1-3.jpg"})

(def root-reader
  {:app/current-user
   (fn [env]
     ; now this can be simplified
     (p/join user (assoc env ::p/reader p/map-reader)))})

(def parser (om/parser {:read p/pathom-read}))

; compute once
(def placeholder (p/placeholder-node "ph"))

(defn parse [env query]
  (parser (assoc env ::p/reader root-reader
                     ::p/process-reader #(vector % placeholder)) query))

(parse {} [{:app/current-user [{:ph/text-view [:user/name]}
                               {:ph/image-view [:user/photo-url]}]}])
; #:app{:current-user #:ph{:text-view #:user{:name "Walter White"},
;                          :image-view #:user{:photo-url "http://retalhoclub.com.br/wp-content/uploads/2016/07/1-3.jpg"}}}
```

### Union queries

There are situations where you have might have multiple possibilities of queries for a given node. For example, when you
search on youtube, on the same list you can have: videos, channels or users. For those cases we can use union queries.

```clojure
(ns pathom-union-queries
  (:require [com.wsscode.pathom.core :as p]
            [om.next :as om]))

(def items
  [{:type :character :name "Eric Cartman" :age 10}
   {:type :post :title "Post title"}])

(def root-reader
  {:items
   (fn [env]
     ; now this can be simplified
     (p/join-seq (assoc env ::p/reader p/map-reader
                            ::p/union-path :type)
                 items))})

(def parser (om/parser {:read p/pathom-read}))

(defn parse [env query]
  (parser (assoc env ::p/reader root-reader) query))

(parse {} [{:items {:character [:name :age]
                    :post      [:title :type]}}])
; {:items [{:name "Eric Cartman", :age 10} {:title "Post title", :type :post}]}
```

### Reading from javascript objects

Comming soon...

### GraphQL helpers

Comming soon...

### Async Reader

Comming soon...

## License

Copyright © 2017 Wilker Lúcio

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
