# Change Log

## [2.1.0]
- WARNING: before this version, when you return `nil` the value would not be present in the output, from this version it is
- Fixes connect dependency case when return contains `nil` values
- Default `::p/union-path` will make for convenient use of unions with connect (before it use to trigger an error)
- Support indexing unions on connect
- Support inline unions on `query->graphql`
- Add `p/update-attribute-param` helper
- Add `p/transduce-children` helper

## [2.0.19]
- Fix previous kind implementation

## [2.0.18]
- Support kind as keyword or strings on connect graphql index

## [2.0.17]
- Fixes for cljdoc setup

## [2.0.16]
- Improved `lift-placeholders` helper, correct merge placeholders

## [2.0.15]
- Fix parent-query on sequence joins
- Fix error handler on mutations when error happens on mutate call (before action is generated)
- Add http driver specification alogn with fetch implementation for cljs and clj.http for clj
- Add new helpers to simplify connect integration with GraphQL
- Add new graphql-network for simple GraphQL integration in the front-end
- GraphQL on connect supports placeholder nodes

## [2.0.14]
- Add `pc/mutation-data` helper

## [2.0.13]
- BREAKING: `::pc/wrap-resolver` is now `::pc/wrap-resolve`

## [2.0.12]
- Fix connect compilation on Datomic Ions

## [2.0.11]
- WARNING: Don't trigger errors on connect when inputs can't be met, now it just returns `::p/continue` 
- Add p/optional-attribute (also aliased as p/?) to mark attribute as optional (currently not used)
- Filter batch entries that don't fulfill the input needs

## [2.0.10]
- Safer catch with Throwable in more places

## [2.0.9]
- Processing sequence doesn't stop on placeholder joins

## [2.0.8]
- Catch Throwable instead of Exception on error plugin

## [2.0.7]
- Fix edge case crash on profile plugin

## [2.0.6]
- Improved algorithm for resolver picking on connect, prioritize already cached resolvers
- Expose plugins in environment, allowing then to be used as part of processing
- Support `::pc/wrap-resolver` plugin
- CHANGE: `::pc/args` is now `::pc/params` (there are no features on it, so not breaking, but you must change to get future features)

## [2.0.5]
- Add `sgen/query-props-generator`, this returns an actual generator for a given query.
- Support `sgen/transform-generator` to modify generators globally.

## [2.0.4]
- Fix cljs compilation

## [2.0.3]
- Generators will now strip ui namespaced keys by default (like Fulcro)
- Generators from components now use the component initialization in addition to generated props

## [2.0.2]
- Fix batch queries when batch item input requires resolving

## [2.0.1]
- Fix StackOverflow issue when compiling with `lein-cljsbuild` or `figwheel`

## [2.0.0]
- Add support for mutations on connect
- Sort `pc/data->shape` results on query
- Support easy env providers
- Support `::p/mutate` to define mutation
- Add `pc/batch-resolver` helper
- Support `::p/mutate` key for mutation setup on parser, in addition to `:mutate`
- Consistent `ident->id` value on generators
- Add `::p/parent-join-key` to env on joins
- Many fixes to specs, be happy instrumenting
- Fix `error-str` on CLJS

## [2.0.0-beta6]
- Breaking: batch return have a new simpler interface, check docs

## [2.0.0-beta5]
- Support N+1 batch optimization on Connect

## [2.0.0-beta4]
- Support mutation result customation on generators
- Fix: on connect, reader should continue if resolver doesn't return a requested value
- Fix: sync mutation errors were not returning the result, thanks Mitchel!

## [2.0.0-beta3]
- Major improvement on query generators, now every part is fully customizable
- New: common.async
- Breaking: removed old async helpers from `com.wsscode.common.async`
- Breaking: removed async namespace
- Breaking: removed connect/spec inference, must be set on `p.connect/add`
- Independent parser: pathom now uses internal implementation for the parser
- Async parser: now pathom and all the built-in features have full async support
- Add: `p/ident-join-reader`
- Add: connect `pc/resolver-factory`

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
- Fix: bug on `merge-queries` when merging plain attribute with joined attribute
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
