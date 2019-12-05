# Change Log

## [2.3.0-DEV]
- New Advanced Graph Query Planner
- Add `p/placeholder-key?` helper

## [2.2.28]
- Fix bounded recursion on parallel parser
- Connect mutations add ::pc/mutation-ast to the env

## [2.2.27]
- When a union path is taken, add the union path to `::p/path`
- Fix join with augmented env when entity is an atom
- Support docstring on `pc/defresolver` macro

## [2.2.26]
- Filter GraphQL mutation join queries

## [2.2.25]
- Connect process with skip a resolver in case the desired key is already fulfilled
- Add `com.wsscode.pathom.sugar` namespace with new helpers to quickly define parsers
- Improve handling of external watcher responses in parallel reader
- Add new resolver definition helpers: `constantly-resolver`, `single-attr-resolver` and `single-attr-resolver2`

## [2.2.24]
- Add ::p/root-query to environment

## [2.2.23]
- Small change for performance on previous fix

## [2.2.22]
- Fix `java.lang.UnsupportedOperationException` on external wait situation 

## [2.2.21]
- Add a mechanism to retry long running external waiting on connect parallel reader.
- Fixed issue that made resolvers stuck when depending on a external data in middle of resolver chain
- Fixed counting behavior on max-key-iterations
- Reduced default max-key-iterations to 5
- Support `::p/final` on `p/map-reader` for short circuit processing

## [2.2.20]
- Fixed issue #105, when a resolver gets an error but another concurrent gets a valid value after, the later must be used as the response

## [2.2.19]
- `::pp/processing-recheck-timer` off by default

## [2.2.18]
- Add new `::pp/processing-recheck-timer` option to parallel parser

## [2.2.17]
- Looser spec on `::pc/transform`
- Use `contains?` instead of `find` in map reader to support wider range of custom maps
- BREAKING: Fixed specs, when processing a plan path, use `::pc/plan-path` instead of `::pc/plan` in the env, which is the correct name

## [2.2.16]
- Support tempid? on pathom graphql config, thanks @codonnell!
- Fix return of parallel timeout
- Enable conditional removal of specs using closure defines `{com.wsscode.pathom.misc.INCLUDE_SPECS false}`

## [2.2.15]
- Fix `pc/data->shape` breaking when data has complex keys 
- Fix alias on `p/join-seq-parallel` optimized runs

## [2.2.14]
- Add `p/params` to get params from env
- Include params in cache key
- Support custom inner parser for GraphQL processing

## [2.2.13]
- *** Add attributes index ***
- Fix on join env, ensure ast and query are preserved
- Add `p/ast-properties`
- Customize async cache channel size via `::p/async-request-cache-ch-size` 
- Pathom remote works with sync and async parsers
- Implement `abort` on fulcro network
- Add docstrings to parsers, check it to learn about knobs you can use to tune the parser.
- Add `p/elide-special-outputs` plugin to simplity elision of pathom output specials (::p/reader-error and ::p/not-found)
- Add `p/map-select`, a quick way to run EQL selections on maps

## [2.2.12]
- Add config options for `graphql-network` to support custom headers, thanks @Joe Lane!
- Move core.async and test.check to main dependencies
- Add missing specs for: `::pc/resolve`, `::pc/resolver`, `::pc/mutate` and `::pc/mutation`
- Add `com.wsscode.pathom.connect.graphql2` ns, using raw graphql translations
- Add support for `::gql/alias`

## [2.2.11]
- Fix error propagation for uncached resolvers
- Fix timeout issue case when chained dependencies cause an error in the middle

## [2.2.10]
- Add support for `:pathom/context` on mutations, see `https://wilkerlucio.github.io/pathom/#_mutation_output_context`
- Increase default `::pp/max-key-iterations` to 10
- `p/transduce-maps` check if map is native (fixes issue were fulcro tempids were losing data)

## [2.2.9]
- Fix `compute-paths` generating invalid results

## [2.2.8] (bad! dont use this version!)
- Add `p/pre-process-plugin`
- Fix edge case on compute-paths that could miss a possible path
- Improved counting of attribute loops in parallel parser

## [2.2.7]
- Reduce size of `pc/async-reader2` to support debugging
- Improvements to http diplomat on clojure, thanks @souenzzo!

## [2.2.6]
- Fix p/error-str returning a type instead of string when error has no message or data

## [2.2.5]
- Fix on generative: normalize nested placeholders properly
- Fix: don't capture mutation exception at parser level

## [2.2.4]
- Fix on generative, don't apply transform on join results

## [2.2.3]
- Fix `p/remove-query-wild-card` to maintain query meta
- Query generators support custom rules from query meta
- Query generator proper constraints placeholder nodes

## [2.2.2]
- Fix compute-paths bug when user has more than 3 inputs on a resolver

## [2.2.1]
- `p/swap-entity` now runs the function when entity is not an atom and return the result 
- Faster performance for list processing when query doesn't have a join
- Optimize parallel list processing when entity is data complete upfront 

## [2.2.0]
- No changes from RC5

## [2.2.0-RC5]
- Use edn-query-language library for EQL parsing
- Add `pc/alias-resolver` and `pc/alias-resolver2` helpers
- `p/request-cache-plugin` is now always native, no need to require it manually
- New strategy to ensure same cached resolver is never called twice
- Js fetch adds trace details about http requests
- Support `::pc/transform` in `pc/resolver` and `pc/mutation`
- Add `pc/transform-batch-resolver` helper
- Add `pc/transform-auto-batch` helper
- Add support for alias output properties

## [2.2.0-RC4]
- Add fulcro union branch to fulcro network helpers
- Add `pc/project-query-attributes`
- Fix `p/cached` regarding `nil` values, they were considering `nil` a non cached value

## [2.2.0-RC3]
- Fix spec for `pc/register`

## [2.2.0-RC2]
- Add a timeout safe guard on parallel parser to ensure nothing is holding the whole parser
- Improved path cost calculation, don't count same sym twice, consider cache in multi-step paths
- Fix deadlock situation on reader planning
- `p/post-process-parser-plugin` now handles async

## [2.2.0-RC1]
- Add `pc/defresolver` helper to define a map resolver
- Add `pc/defmutation` helper to define a map mutation
- Add `pc/resolver-dispatch-embedded` to dispatch from the resolver map `::pc/resolve`
- Add `pc/mutation-dispatch-embedded` to dispatch from the mutation map `::pc/mutate`
- Add `pc/batch-restore-sort` helper
- Add `pc/reader2`, new algorithm that uses the path planning from `pc/parallel` reader
- Add `pc/async-reader2`, new algorithm that uses the path planning from `pc/parallel` reader
- Add symbol validation on factories and resolver creation helpers
- Add `pc/project-parent-query-attributes` to facilitate the creation of dynamic resolvers.
- GraphQL integration facilitated using new resolver and mutation maps, [more info]().
- Fixed `pc/async-reader2` bug missing async read on batch processing
- Add `pc/create-thread-pool` with arity 1 to have dynamic thread pool size (managed by core.async)
- Working implementation for `clj-http` http driver. Thanks @souenzzo
- BREAKING! `::pc/mutations` renamed to `::pc/index-mutations` for consistency, only breaks if you manually fiddled with the mutation index
- BREAKING! `pc/connect-plugin` (from beta11) is now a function and works in very different way now, [check docs for more info](https://wilkerlucio.github.io/pathom/DevelopersGuide.html#_2_2_0_beta11_2_2_0_breaking_changes)
- BREAKING! `pc/register` implementation works differently, [check docs for updates](https://wilkerlucio.github.io/pathom/DevelopersGuide.html#_2_2_0_beta11_2_2_0_breaking_changes)
- BREAKING! `::pc/resolvers` renamed to `::pc/register` to better describe it

## [2.2.0-beta14]
- Support arity 1 on `pc/batch-resolver`
- Add `pc/resolver` and `pc/mutation` helpers
- Fix `p/elide-not-found` to retain meta data (thanks @tony.kay!)

## [2.2.0-beta13]
- Fix `open-ident-reader`

## [2.2.0-beta12]
- Connect plugin provide resolvers via `::pc/resolvers` key, making possible to disable their registration
- Fix bug in register when registering sequences

## [2.2.0-beta11]
- Add `open-ident-reader` to connect
- Add `register` to connect
- Add support for extra context with `:pathom/context` param on `pc/ident-reader` and `pc/open-ident-reader`
- Add connect built-in resolvers for indexes and resolver weights
- Remove dependency on `clojure.math.combinatorics` (no more compile warnings!)
- New plugin wrapper `::wrap-parser2`, like `::wrap-parser` but gets the settings for the parser as second argument
- Add support for plugins to inject resolvers
- Add `pc/connect-plugin`
- Add `trace/trace-plugin`
- More efficient batching on parallel processing

## [2.2.0-beta10]
- Fix race condition on parallel parser when some attribute not available could cause all siblings to get not-found
- Support env override at join level

## [2.2.0-beta9]
- Improved caching for batch resolvers
- Fix edge case where parallel connect would lock down in a batch processing when initial inputs have to be realized

## [2.2.0-beta8]
- Limit max resolver weight to avoid infinite weights

## [2.2.0-beta7]
- We only fill all the provided errors when resolver is at tail position, otherwise error only the final field

## [2.2.0-beta6]
- Support trace labels
- Custom styles for trace events

## [2.2.0-beta5]
- Trace time to flush watchers on parallel parser
- Fix GraphQL network with new removed fulcro dep
- Parallel reader will not mark fields as error if the missing attribute is at the edge of the plan
- Add new `p/query-id` function

## [2.2.0-beta4]
- Support `::pc/compute-output` for resolvers with dynamic output
- Implement `::pc/compute-output` on GraphQL connect integration to support it on parallel
- Support GraphQL mutations without a join query
- Export path as part of trace details
- Fix bad handling of break values on resolver returns during parallel connect read

## [2.2.0-beta3]
- `com.wsscode.pathom.graphql` don't depend on Fulcro anymore
- Improve weight recalculation on parallel connect
- Try different paths when some fails during resolver picking
- Fix mutation error propagation on parallel parser
- Report errors on call resolver failure trace

## [2.2.0-beta2]
- Expose details data on d3-tree trace
- Move `trace-plugin` impl to trace ns

## [2.2.0-beta1]
- 🎉 Parallel parser!
- Parallel connect support
- New tracing support (parsing process details as a event log)
- Algorithms to detect connect paths ahead of time (`pc/compute-paths`)
- EDN->GraphQL, use literal value from `::graphql/on` (don't apply `js-name`)
- Fix many CLJS warnings due to async macros
- new async helpers: `go-promise`, `<!maybe`, `<!!maybe`
- `join` and `join-seq` helpers now enforce that entities are atoms

## [2.1.3]
- Batches will make input distinct to avoid querying same thing multiple times

## [2.1.2]
- Proper cache errors to avoid re-calling resolvers that returned errors

## [2.1.1]
- Fix spec for `::pc/output` to support instrumented calls with unions

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
