# pathom [![Build Status](https://travis-ci.org/wilkerlucio/pathom.svg?branch=master)](https://travis-ci.org/wilkerlucio/pathom) 

A Clojure library designed to provide a collection of helper functions to support Clojure(script) graph parsers using
om.next graph syntax.

For an introduction on `om.next` parser development [please check my article on the subject](https://medium.com/@wilkerlucio/implementing-custom-om-next-parsers-f20ca6db1664).
This library encapsulates the ideas presented there, and go deeper on parser patterns. And all documentation here assumes you understand the Om.next query syntax.

## Install

Latest version:

```
[com.wsscode/pathom "2.0.0-beta3"]
```

## Dependency change

Before version `2.0.0-*`, pathom used to depend on `om.next` namespace. Since then a lot had happened,
and the `om` project got stale, and we wanted to use some features that never got released there (like mutation joins).
Because of that now we are using the primitives from [Fulcro](https://github.com/fulcrologic/fulcro).

In practice, now you have to add `[fulcrologic/fulcro "2.0.0-RC3"]` (or more recent) on your deps to pathom to work.
In case you are still using `om.next`, that's fine, both can live on the same project without any issues, if you already
using Fulcro 2.0+ you are in good shape, nothing to be done.

In case you are using Fulcro 1.x, then you have to make a link so pathom can find the primitives it needs.
So, to make it work, create the following namespace on your project:

```clojure
(ns fulcro.client.primitives
  (:require [om.next :as om]))

(def parser om/parser)
(def ast->query om/ast->query)
(def get-query om/get-query)
(def tree->db om/tree->db)
(def query->ast om/query->ast)
(def tempid? om/tempid?)
(def tempid om/tempid)
```

## Hot news

In `1.0.0-beta-9` pathom introduced a new high level feature, check this video for a preview: https://www.youtube.com/watch?v=60i9uStI9As

## Manual

Read the documentation (WIP) at https://wilkerlucio.github.io/pathom-book/DevelopersGuide.html

## Support

If you have any questions, check the `#pathom` channel on Clojurians.

## License

Copyright © 2017 Wilker Lúcio

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
