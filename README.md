# pathom [![Clojars Project](https://img.shields.io/clojars/v/com.wsscode/pathom.svg)](https://clojars.org/com.wsscode/pathom) [![cljdoc badge](https://cljdoc.xyz/badge/com.wsscode/pathom)](https://cljdoc.xyz/d/com.wsscode/pathom/CURRENT) [![CircleCI](https://circleci.com/gh/wilkerlucio/pathom.svg?style=svg)](https://circleci.com/gh/wilkerlucio/pathom) 

A Clojure library designed to help you write Clojure(script) graph query processing
parsers for the query notation used by [Om.next](https://github.com/omcljs/om)
and [Fulcro](https://github.com/fulcrologic/fulcro).  The query notation is closely related
to [Datomic Pull syntax](https://docs.datomic.com/on-prem/pull.html).

For an introduction to general parser development
[please check my article on the subject](https://medium.com/@wilkerlucio/implementing-custom-om-next-parsers-f20ca6db1664).
This library encapsulates the ideas presented there.
And all documentation here assumes you understand the Om.next query syntax.

## Why?

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
