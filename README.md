# pathom [![Clojars Project](https://img.shields.io/clojars/v/com.wsscode/pathom.svg)](https://clojars.org/com.wsscode/pathom) [![cljdoc badge](https://cljdoc.xyz/badge/com.wsscode/pathom)](https://cljdoc.xyz/d/com.wsscode/pathom/CURRENT) [![CircleCI](https://circleci.com/gh/wilkerlucio/pathom.svg?style=svg)](https://circleci.com/gh/wilkerlucio/pathom)

A Clojure library designed to help you write Clojure(script) graph query processing
parsers for the query notation used by [Om.next](https://github.com/omcljs/om)
and [Fulcro](https://github.com/fulcrologic/fulcro).  The query notation is closely related
to [Datomic Pull syntax](https://docs.datomic.com/on-prem/pull.html).

For an introduction to general parser development
[please check my article on the subject](https://medium.com/@wilkerlucio/implementing-custom-om-next-parsers-f20ca6db1664).
This library encapsulates the ideas presented there.
And all documentation here assumes you understand the Om.next query syntax.

## Usage

The library has a number of different usage models. One of the most commonly
used features is Connect.  The basic idea is as follows:

. You define *resolvers* that can take simple inputs (e.g. entity ID) and turn
that into a set of outputs.
. Your resolvers implies "edges" by outputting IDs that can be further resolved
by other resolvers.

The Connect features support advanced features for being able to then traverse
this graph via queries is useful ways.

For example, here is how you might generate the support for queries about
people and their addresses.

While reading this, note that the join implied from person to address is an artifact
of the *resolver*, *not* the *database* (and thus is independent of the schema
of the real database):

```
(ns sample-query-processing
  (:require
    [com.wsscode.pathom.core :as p]
    [com.wsscode.pathom.connect :as pc]))

;; setup for a given connect subsystem
(defmulti resolver-fn pc/resolver-dispatch)
(def indexes (atom {}))
(def defresolver (pc/resolver-factory resolver-fn indexes))

;; How to go from :person/id to that person's details
(defresolver `person-resolver
  ;; The minimum data we must already know in order to resolve the outputs
  {::pc/input  #{:person/id}
   ;; A query template for what this resolver outputs
   ::pc/output [:person/name {:person/address [:address/id]}]}
  (fn [env {:keys [person/id] :as params}]
    ;; normally you'd pull the person from the db, and satisfy the listed
    ;; outputs. For demo, we just always return the same person details.
    {:person/name "Tom"
     :person/address {:address/id 1}}))

;; how to go from :address/id to address details.
(defresolver `address-resolver
  {::pc/input  #{:address/id}
   ::pc/output [:address/city :address/state]}
  (fn [env {:keys [address/id] :as params}]
    {:address/city "Salem"
     :address/state "MA"}))

(def parser
  (p/parser {::p/plugins [(p/env-plugin
                            {::p/reader             [p/map-reader
                                                     pc/all-readers]
                             ::pc/resolver-dispatch resolver-fn
                             ::pc/indexes           @indexes})]}))

;; A join on a loookup ref (Om Next ident) supplies the starting state of :person/id 1.
;; env can have anything you want in it (e.g. a Datommic/SQL connection, network service endpoint, etc.)
(parser env [{[:person/id 1] [:person/name {:person/address [:address/city]}]}])
; => {[:person/id 1] {:person/id 1 :person/name "Tom" :person/address {:address/city "Salem}}}
```

In the example above hopefully you can start to see the general power: Small resolvers
that can find specific details based on known information, can generate
"graph edges" on the fly, and can be arbitrarily connected by Pathom.  Any given
input can have any number of resolvers, meaning that composition over time is trivial.

For example, say you wanted to add a resolver that could go from `:person/id` to
their purchase history.  No need to add that to an *existing* resolver, you can
simply add a new one that lists the new outputs!

```
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

## See a Talk on the Concepts

The power possible with Clojure's concepts of fully-namespaced keys and
flexible data schema lead to a number of interesting and useful results.
I explore these ideas in a talk I did at Dutch Clojure Days.
The presentation is available [on YouTube](https://www.youtube.com/watch?v=r3zywlNflJI).

## Documentation

Read the documentation (WIP) at https://wilkerlucio.github.io/pathom/DevelopersGuide.html

## Support

If you have any questions, check the `#pathom` channel on Clojurians.

## Graph Explorer

You can explore Pathom connect graphs using [OgE](https://wilkerlucio.github.io/oge/).

## License

Copyright © 2017 Wilker Lúcio

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
