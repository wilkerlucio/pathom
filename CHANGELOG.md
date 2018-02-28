# Change Log

## [2.0.0-beta3-dev]

## [2.0.0-beta2]
- Add: specs for the EDN query syntax
- Add: specs query AST
- Add: support bounded recursive queries on join
- Add: map-db readers (read like fulcro db->tree)
- Add: `post-process-parser-plugin` helper
- Add: sort-plugin
- Connect supports custom dispatch, enabling ClojureScript usage (via `::p.connect/resolver-dispatch`)
- Support bounded and unbounded queries to translate using `query->graphql`
- Support custom dispatch function to call resolvers on `Connect`
- Add: `p/entity-attr`, non throwing version of `p/entity-attr!`

## [2.0.0-beta1]
- Add: `connect.test` namespace for automatic testing of `connect` resolvers
- Pathom now depends on Fulcro instead of Om.next for primitives
- Error plugin support for mutations
- Add: `raise-mutation-result-plugin` to unwrap the `:result` on mutations, making it simpler
- Fix: bug on `merge-queries` when mergin plain attribute with joined attribute
- Add names to plugin functions so they get easier to see on stack traces

## [1.0.0-beta12]
- Fix specs, now it can run with instrumentation on
- Add `p/raise-errors` helper
- Add `fn-network` on fulcro to create networks from a function

## [1.0.0-beta11]
- Plugin engine supports wrapping mutations
- Profile plugin measures mutations
- Add TransformNetwork to fulcro network
- Add `p/elide-items`
- Ignore `::p/reader-error` responses on connect processing

## [1.0.0-beta10]
- New: `::p/parent-query` support, to enable siblings optimizations
- Changed: in graphql ident, `by-` is no longer applicable
- Changed: connect index names
- Changed: namespace pathom.merge is deprecated, merge-queries lives on core now

## [1.0.0-beta9]
- Renamed: `profile->flame-graph` is now `profile->nvc`
- Changed: now we use `:key` instead of `:dispatch-key` on map reader and map dispatcher
- Entity can be an atom, will be automatically deferred when `p/entity` is called.
- Add `connect` namespace, connect provides a high level reader to connect attributes for automatic resolving.
- Add `gen` namespace containing helpers to do generation based on queries

## [1.0.0-beta8]
- New: `p/parser`, this supports the new plugin structure
- New: `p/error-handler-plugin`
- New: `p/async-plugin`, enabling full async without needing to use specialized readers
- New: `p/request-cache-plugin` to do common per-request caching
- `p/entity` accepts second parameter to do ensure args in one step
- New: `p/entity!` to get an entity forcing attributes requirement, so you get better error messages when they are not
  available
- Renamed: `placeholder-node` to `placeholder-reader` (old name still works)
- New: `p/map-reader*`
- New: `::p/union-path` supports computed keys and custom functions
- New: `p/entity-attr!` to get a single entity property (can be computed).
- Deprecated: `ast-key-id`

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
