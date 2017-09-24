# Change Log

## [1.0.0-beta8-development]
- New `p/parser`, this supports the new plugin structure
- New `p/error-handler-plugin`
- New `p/async-plugin`, enabling full async without needing to use specialized readers
- New `p/request-cache-plugin` to do common per-request caching
- `p/entity` accepts second parameter to do ensure args in one step
- New `p/entity!` to get an entity forcing attributes requirement, so you get better error messages when they are not
  available
- Renamed `placeholder-node` to `placeholder-reader` (old name still works)
- New `p/map-reader*`
- New `::p/union-path` supports computed keys and custom functions
- New `p/entity-attr!` to get a single entity property (can be computed).

This is a major change in terms of initialization, instead of
running your `om/parser` now you should use `p/parser` that supports
the new plugin structure.

## [1.0.0-beta7]
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
- `join-seq` appends item index to `::p/path`
- LocalNetwork helper to use local async parser

## [1.0.0-beta6]
- `p/join-seq` always returns a vector
- removed `fdef` from specs, currently it was preventing instrumented functions to run, more investigation needed

## [1.0.0-beta5]
- Support `p/join` with arity 2, adding entity
- Handle union queries on `p/join`

## [1.0.0-beta4]
- Initial public release
