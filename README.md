# pathom [![Clojars Project](https://img.shields.io/clojars/v/com.wsscode/pathom.svg)](https://clojars.org/com.wsscode/pathom) [![cljdoc badge](https://cljdoc.xyz/badge/com.wsscode/pathom)](https://cljdoc.xyz/d/com.wsscode/pathom/CURRENT) [![CircleCI](https://circleci.com/gh/wilkerlucio/pathom.svg?style=svg)](https://circleci.com/gh/wilkerlucio/pathom)

A Clojure library designed to help you write Clojure(script) graph query processing
parsers for the query notation used by [EQL](http://edn-query-language.org).

For an introduction to general parser development
[please check my article on the subject](https://medium.com/@wilkerlucio/implementing-custom-om-next-parsers-f20ca6db1664).
This library encapsulates the ideas presented there.
And all documentation here assumes you understand the Om.next query syntax.

## Docs are under upgrade!

The docs are getting more love in a new format! If you want to see it (still under work)
you can find it at https://wilkerlucio.github.io/pathom/v2. The new docs have quick links
to edit each page, PR's are very welcome to improve it!

## Usage

The library has a number of different usage models. One of the most commonly
used features is Connect.  The basic idea is as follows:

- You define *resolvers* that can take simple inputs (e.g. entity ID) and turn
that into a set of outputs.
- Your resolvers implies "edges" by outputting IDs that can be further resolved
by other resolvers.

The Connect features support advanced features for being able to then traverse
this graph via queries in useful ways.

For example, here is how you might generate the support for queries about
people and their addresses.

While reading this, note that the join implied from person to address is an artifact
of the *resolver*, *not* the *database* (and thus is independent of the schema
of the real database):

```clojure
(ns sample-query-processing
  (:require
    [com.wsscode.pathom.core :as p]
    [com.wsscode.pathom.connect :as pc]
    [clojure.core.async :refer [<!!]]))

;; How to go from :person/id to that person's details
(pc/defresolver person-resolver [env {:keys [person/id] :as params}]
  ;; The minimum data we must already know in order to resolve the outputs
  {::pc/input  #{:person/id}
   ;; A query template for what this resolver outputs
   ::pc/output [:person/name {:person/address [:address/id]}]}
  ;; normally you'd pull the person from the db, and satisfy the listed
  ;; outputs. For demo, we just always return the same person details.
  {:person/name "Tom"
   :person/address {:address/id 1}})
     
;; how to go from :address/id to address details.
(pc/defresolver address-resolver [env {:keys [address/id] :as params}]
  {::pc/input  #{:address/id}
   ::pc/output [:address/city :address/state]}
  {:address/city "Salem"
   :address/state "MA"})

;; define a list with our resolvers
(def my-resolvers [person-resolver address-resolver])

;; setup for a given connect system
(def parser
  (p/parallel-parser
    {::p/env     {::p/reader               [p/map-reader
                                            pc/parallel-reader
                                            pc/open-ident-reader
                                            p/env-placeholder-reader]
                  ::p/placeholder-prefixes #{">"}}
     ::p/mutate  pc/mutate-async
     ::p/plugins [(pc/connect-plugin {::pc/register my-resolvers})
                  p/error-handler-plugin
                  p/trace-plugin]}))

;; A join on a lookup ref (Fulcro ident) supplies the starting state of :person/id 1.
;; env can have anything you want in it (e.g. a Datomic/SQL connection, network service endpoint, etc.)
;; the concurrency is handled though core.async, so you have to read the channel to get the output
(<!! (parser {} [{[:person/id 1] [:person/name {:person/address [:address/city]}]}]))
; => {[:person/id 1] {:person/name "Tom" :person/address {:address/city "Salem"}}}
```

In the example above hopefully you can start to see the general power: Small resolvers
that can find specific details based on known information, can generate
"graph edges" on the fly, and can be arbitrarily connected by Pathom.  Any given
input can have any number of resolvers, meaning that composition over time is trivial.

For example, say you wanted to add a resolver that could go from `:person/id` to
their purchase history.  No need to add that to an *existing* resolver, you can
simply add a new one that lists the new outputs!

```clojure
(defresolver `person-resolver
  {::pc/input  #{:person/id}
   ::pc/output [{:person/recent-purchases [:purchase/id]}]}
  ...)
```

note also that this resolver only needs to do the work of resolving the (to-many) edge. Another
resolver (for purchase) can take care of the actual purchase details.  This makes
the resolvers reusable!  There's never a need to write the resolver for `purchase` details
more than once, since other resolvers can be defined to generate the edges from source
entities  (e.g. customers, b2b transactions, etc.) to their minimal representation
(e.g. ID) which can then be further processed by other specialized resolvers.

Another thing to point out, these factory functions we build at the boilerplate are intended
to be used across many files, so as your resolver library grows you can split it up.

## See a Talks on the Concepts

The power possible with Clojure's concepts of fully-namespaced keys and
flexible data schema lead to a number of interesting and useful results.
I explore these ideas in some talks:

- [Scaling Full Stack Applications at Conj 2018](https://www.youtube.com/watch?v=yyVKf2U8YVg)
- [Clojure Graph API's at Dutch Clojure Days 2018](https://www.youtube.com/watch?v=r3zywlNflJI)

## Documentation

Read the documentation at https://wilkerlucio.github.io/pathom/

## Visualization Tools

Pathom provides a set of visualization tools, including a codemirror mode with support to
auto-complete, a tracer timeline visualization to track queries and more, you can find these
modules at [Pathom Viz](https://github.com/wilkerlucio/pathom-viz/).

## Support

If you have any questions, check the `#pathom` channel on Clojurians.
