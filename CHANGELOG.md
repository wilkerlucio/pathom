# Change Log

## [1.0.0-beta7-development]
- Add async parser helpers
- Fix `js-obj-reader` default `js-value-transform`
- Use `:dispatch-key` on `map-reader`
- GraphQL mutation: when given empty subquery, try to infer id
- GraphQL supports ident transform
- Merge queries support
- Add Fulcro network helper - GraphQL network
- Add Fulcro network helper - Batch network
- Add elide-ast-nodes helper
- Async placeholder nodes
- Profile helpers

## [1.0.0-beta6]
- `p/join-seq` always returns a vector
- removed `fdef` from specs, currently it was preventing instrumented functions to run, more investigation needed

## [1.0.0-beta5]
- Support `p/join` with arity 2, adding entity
- Handle union queries on `p/join`

## [1.0.0-beta4]
- Initial public release
