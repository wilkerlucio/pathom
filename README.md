# pathom

A Clojure library designed to provide a collection of helper functions to support Om.next parser implementation.

## Usage

The main entry-point for this library is the `com.wsscode.pathom.core/pathom-read`, you can use that directly
as your `read` function on the `Om` parser, or wrap it with your own if you want futher customization (usually not needed).

The usage should look like this:

```clojure
(def parser (om/parser {:read p/pathom-read}))

(defn parse [env query]
  (parser (assoc env ::p/reader my-reader) query))
```

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
      :name "Yoda"
      :level "master")))

(defn root-reader [{:keys [ast query parser] :as env}]
  (let [key (get ast :dispatch-key)]
    (case key
      :current-user (parser (assoc env ::p/reader user-reader) query))))

(def parser (om/parser {:read p/pathom-read}))

(defn parse [env query]
  (parser (assoc env ::p/reader root-reader) query))
  
(parse {} [{:current-user [:name :level]}])
; => {:current-user {:name "Yoda" :level "master"}}
```

### Map readers

The pattern you saw at the previous example, to dispatch from a fixed list of options, is very common, so `pathom` makes
this easier by supporting `clojure maps` as reader functions, using it we can re-write the previous example as:

```clojure
(ns pathom-map-readers
  (:require [com.wsscode.pathom.core :as p]
            [om.next :as om]))

(def user-reader
  {:name (fn [_] "Yoda")
   :level (fn [_] "master")})

(defn root-reader 
  {:current-user
   (fn [{:keys [query parser] :as env}]
     (parser (assoc env ::p/reader user-reader) query))})

(def parser (om/parser {:read p/pathom-read}))

(defn parse [env query]
  (parser (assoc env ::p/reader root-reader) query))
  
(parse {} [{:current-user [:name :level]}])
; => {:current-user {:name "Yoda" :level "master"}}
```

### Composed readers


### Entities

One of the common patterns that arrises when writing parsers is that you
have some sort of data (examples: table row, datomic entity, etc...) and you
process the current query level by reading this data. Given that in `Pathom` we
encourage you to use the keyword `::p/entity`.

### Join nodes

### Path detection

### Union query handler

### Placeholder nodes

### Dispatch helpers

### Reading from maps

### Reading from javascript objects

### GraphQL helpers

### Async Reader

## License

Copyright © 2017 Wilker Lúcio

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
