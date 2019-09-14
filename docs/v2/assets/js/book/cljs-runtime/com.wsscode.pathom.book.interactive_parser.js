goog.provide('com.wsscode.pathom.book.interactive_parser');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.book.app_types');
goog.require('com.wsscode.pathom.book.async.error_propagation');
goog.require('com.wsscode.pathom.book.async.intro');
goog.require('com.wsscode.pathom.book.async.js_promises');
goog.require('com.wsscode.pathom.book.connect.batch');
goog.require('com.wsscode.pathom.book.connect.batch2');
goog.require('com.wsscode.pathom.book.connect.batch3');
goog.require('com.wsscode.pathom.book.connect.batch_transform_auto_batch');
goog.require('com.wsscode.pathom.book.connect.getting_started');
goog.require('com.wsscode.pathom.book.connect.getting_started2');
goog.require('com.wsscode.pathom.book.connect.mutation_async');
goog.require('com.wsscode.pathom.book.connect.mutation_join_globals');
goog.require('com.wsscode.pathom.book.connect.mutation_context');
goog.require('com.wsscode.pathom.book.connect.mutation_join');
goog.require('com.wsscode.pathom.book.connect.mutations');
goog.require('com.wsscode.pathom.book.connect.parameters');
goog.require('com.wsscode.pathom.book.core.join_env_update');
goog.require('com.wsscode.pathom.book.core.parser_counter_example');
goog.require('com.wsscode.pathom.book.core.parser_counter_nested_example');
goog.require('com.wsscode.pathom.book.intro.demo');
goog.require('com.wsscode.pathom.book.tracing.demo');
goog.require('com.wsscode.pathom.book.tracing.demo_parallel_reader');
goog.require('com.wsscode.pathom.fulcro.network');
goog.require('com.wsscode.pathom.viz.query_editor');
goog.require('fulcro.client');
goog.require('fulcro.client.localized_dom');
goog.require('fulcro.client.primitives');
com.wsscode.pathom.book.interactive_parser.parsers = cljs.core.PersistentHashMap.fromArrays(["connect.mutation-async","async.js-promises","intro.demo","connect.mutation-join","core.join-env","parallel-reader.demo","core.parser-counter-nested","connect.getting-started2","connect.batch","connect.mutation-join-globals","connect.getting-started","connect.parameters","tracing.demo1","connect.batch3","async.intro","connect.transform-auto-batch","connect.mutations","connect.batch2","connect.mutation-context","async.error-propagation","core.parser-counter"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.mutation_async.parser,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549),"com.wsscode.pathom.book.connect.mutation-async"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.async.js_promises.parser], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.intro.demo.parser], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.mutation_join.parser,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549),"com.wsscode.pathom.book.connect.mutation-join"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.core.join_env_update.parser,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549),"com.wsscode.pathom.book.core.join-env-update"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.tracing.demo_parallel_reader.parser,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549),"com.wsscode.pathom.book.tracing.demo-parallel-reader"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.core.parser_counter_nested_example.parser], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.getting_started2.parser,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549),"com.wsscode.pathom.book.connect.getting-started2"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.batch.parser], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.mutation_join_globals.parser,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549),"com.wsscode.pathom.book.connect.mutation-join-globals"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.getting_started.parser,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549),"com.wsscode.pathom.book.connect.getting-started"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.parameters.parser,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549),"com.wsscode.pathom.book.connect.parameters"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.tracing.demo.parser,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549),"com.wsscode.pathom.book.tracing.demo"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.batch3.parser], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.async.intro.parser], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.batch_transform_auto_batch.parser], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.mutations.parser,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549),"com.wsscode.pathom.book.connect.mutations"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.batch2.parser], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.mutation_context.parser,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549),"com.wsscode.pathom.book.connect.mutation-context"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.async.error_propagation.parser], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.core.parser_counter_example.parser], null)]);
com.wsscode.pathom.book.interactive_parser.expand_keywords = (function com$wsscode$pathom$book$interactive_parser$expand_keywords(s,ns){
if(cljs.core.truth_(ns)){
return clojure.string.replace(s,/::(\w+)/,[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/$1"].join(''));
} else {
return s;
}
});
com.wsscode.pathom.book.interactive_parser.compact_keywords = (function com$wsscode$pathom$book$interactive_parser$compact_keywords(s,ns){
if(cljs.core.truth_(ns)){
return clojure.string.replace(s,RegExp([":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"\\/"].join('')),"::");
} else {
return s;
}
});
com.wsscode.pathom.book.interactive_parser.get_app_uuid = (function com$wsscode$pathom$book$interactive_parser$get_app_uuid(component){
return new cljs.core.Keyword("fulcro.inspect.core","app-uuid","fulcro.inspect.core/app-uuid",-1096445491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(fulcro.client.primitives.app_state(fulcro.client.primitives.get_reconciler(component))));
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.interactive_parser !== 'undefined') && (typeof com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper = (function com$wsscode$pathom$book$interactive_parser$QueryEditorWrapper(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__48183_48309 = com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.prototype;
var G__48184_48310 = React.Component.prototype;
var G__48185_48311 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__48183_48309,G__48184_48310,G__48185_48311);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","QueryEditorWrapper","com.wsscode.pathom.book.interactive-parser/QueryEditorWrapper",-1010215952),com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper);

var x48187_48314 = com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.prototype;
x48187_48314.render = ((function (x48187_48314){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__48189 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__48190 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__48191 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__48192 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__48193 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__48194 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__48195 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__48196 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__48197 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__48198 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__48194;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__48195;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__48196;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__48197;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__48198;

try{var map__48200 = fulcro.client.primitives.props(this$);
var map__48200__$1 = (((((!((map__48200 == null))))?(((((map__48200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48200):map__48200);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48200__$1,new cljs.core.Keyword("ui","root","ui/root",-448656785));
var enable_trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48200__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","enable-trace?","com.wsscode.pathom.viz.query-editor/enable-trace?",-315452305));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),(function (){var G__48203 = root;
var G__48204 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","default-trace-size","com.wsscode.pathom.viz.query-editor/default-trace-size",1888578783),(200),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","enable-trace?","com.wsscode.pathom.viz.query-editor/enable-trace?",-315452305),enable_trace_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","editor-props","com.wsscode.pathom.viz.query-editor/editor-props",-223318753),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-index-update?","force-index-update?",1651651111),true], null)], null);
return (com.wsscode.pathom.viz.query_editor.query_editor.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.query_editor.query_editor.cljs$core$IFn$_invoke$arity$2(G__48203,G__48204) : com.wsscode.pathom.viz.query_editor.query_editor.call(null,G__48203,G__48204));
})()], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__48193;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__48192;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__48191;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__48190;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__48189;
}});})(x48187_48314))
;


com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.prototype.constructor = com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper;

com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.prototype.constructor.displayName = "com.wsscode.pathom.book.interactive-parser/QueryEditorWrapper";

com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.prototype.fulcro$isComponent = true;

var x48208_48334 = com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper;
x48208_48334.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x48208_48334.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x48208_48334){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"500px",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null)], null);
});})(x48208_48334))
;

x48208_48334.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x48208_48334){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.query_editor.QueryEditor], null);
});})(x48208_48334))
;

x48208_48334.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x48208_48334.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x48208_48334){
return (function (this$,query){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.get_initial_state(com.wsscode.pathom.viz.query_editor.QueryEditor,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347),query)], null);
});})(x48208_48334))
;

x48208_48334.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x48208_48334.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x48208_48334){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","enable-trace?","com.wsscode.pathom.viz.query-editor/enable-trace?",-315452305),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.query_editor.QueryEditor)], null)], null);
});})(x48208_48334))
;


var x48227_48336 = com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.prototype;
x48227_48336.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x48227_48336.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x48227_48336){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"500px",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null)], null);
});})(x48227_48336))
;

x48227_48336.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x48227_48336){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.query_editor.QueryEditor], null);
});})(x48227_48336))
;

x48227_48336.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x48227_48336.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x48227_48336){
return (function (this$,query){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.get_initial_state(com.wsscode.pathom.viz.query_editor.QueryEditor,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347),query)], null);
});})(x48227_48336))
;

x48227_48336.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x48227_48336.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x48227_48336){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","enable-trace?","com.wsscode.pathom.viz.query-editor/enable-trace?",-315452305),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.query_editor.QueryEditor)], null)], null);
});})(x48227_48336))
;


com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.cljs$lang$type = true;

com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.cljs$lang$ctorStr = "com.wsscode.pathom.book.interactive-parser/QueryEditorWrapper";

com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.book.interactive-parser/QueryEditorWrapper");
});
com.wsscode.pathom.book.app_types.register_app("interactive-parser",(function (p__48237){
var map__48238 = p__48237;
var map__48238__$1 = (((((!((map__48238 == null))))?(((((map__48238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48238):map__48238);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48238__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550));
var parser_name = node.getAttribute("data-parser");
var no_trace_QMARK_ = cljs.core.boolean$(node.getAttribute("data-no-trace"));
var initial_query = node.innerText;
var map__48244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.interactive_parser.parsers,parser_name);
var map__48244__$1 = (((((!((map__48244 == null))))?(((((map__48244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48244):map__48244);
var iparser = map__48244__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48244__$1,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48244__$1,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549));
var app_id = ["query-editor-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parser_name)].join('');
if(cljs.core.truth_(iparser)){
} else {
throw (new Error(["Assert failed: ",["parser ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parser_name)," not found"].join(''),"\n","iparser"].join('')));
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137),fulcro.client.new_fulcro_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fulcro.client.primitives.get_initial_state(com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper,initial_query),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","enable-trace?","com.wsscode.pathom.viz.query-editor/enable-trace?",-315452305),(!(no_trace_QMARK_))], 0)),new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),com.wsscode.pathom.viz.query_editor.load_indexes,new cljs.core.Keyword(null,"networking","networking",586110628),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.wsscode.pathom.viz.query_editor.remote_key,com.wsscode.pathom.fulcro.network.pathom_remote(com.wsscode.pathom.viz.query_editor.client_card_parser.cljs$core$IFn$_invoke$arity$2(parser,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","wrap-run-query","com.wsscode.pathom.viz.query-editor/wrap-run-query",1107576422),((function (parser_name,no_trace_QMARK_,initial_query,map__48244,map__48244__$1,iparser,parser,ns,app_id,map__48238,map__48238__$1,node){
return (function (run_query){
return ((function (parser_name,no_trace_QMARK_,initial_query,map__48244,map__48244__$1,iparser,parser,ns,app_id,map__48238,map__48238__$1,node){
return (function (env,input){
var c__38998__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38998__auto__,parser_name,no_trace_QMARK_,initial_query,map__48244,map__48244__$1,iparser,parser,ns,app_id,map__48238,map__48238__$1,node){
return (function (){
var f__38999__auto__ = (function (){var switch__38924__auto__ = ((function (c__38998__auto__,parser_name,no_trace_QMARK_,initial_query,map__48244,map__48244__$1,iparser,parser,ns,app_id,map__48238,map__48238__$1,node){
return (function (state_48265){
var state_val_48266 = (state_48265[(1)]);
if((state_val_48266 === (1))){
var state_48265__$1 = state_48265;
var statearr_48270_48343 = state_48265__$1;
(statearr_48270_48343[(2)] = null);

(statearr_48270_48343[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48266 === (2))){
var inst_48263 = (state_48265[(2)]);
var state_48265__$1 = state_48265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48265__$1,inst_48263);
} else {
if((state_val_48266 === (3))){
var inst_48250 = (state_48265[(2)]);
var state_48265__$1 = state_48265;
var statearr_48271_48344 = state_48265__$1;
(statearr_48271_48344[(2)] = inst_48250);


cljs.core.async.impl.ioc_helpers.process_exception(state_48265__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48266 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48265,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_48254 = (function (){return ((function (_,state_val_48266,c__38998__auto__,parser_name,no_trace_QMARK_,initial_query,map__48244,map__48244__$1,iparser,parser,ns,app_id,map__48238,map__48238__$1,node){
return (function (p1__48235_SHARP_){
return com.wsscode.pathom.book.interactive_parser.expand_keywords(p1__48235_SHARP_,ns);
});
;})(_,state_val_48266,c__38998__auto__,parser_name,no_trace_QMARK_,initial_query,map__48244,map__48244__$1,iparser,parser,ns,app_id,map__48238,map__48238__$1,node))
})();
var inst_48255 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(input,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347),inst_48254);
var inst_48256 = (run_query.cljs$core$IFn$_invoke$arity$2 ? run_query.cljs$core$IFn$_invoke$arity$2(env,inst_48255) : run_query.call(null,env,inst_48255));
var state_48265__$1 = state_48265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48265__$1,(5),inst_48256);
} else {
if((state_val_48266 === (5))){
var inst_48258 = (state_48265[(2)]);
var inst_48259 = com.wsscode.common.async_cljs.throw_err(inst_48258);
var inst_48260 = (function (){return ((function (inst_48258,inst_48259,state_val_48266,c__38998__auto__,parser_name,no_trace_QMARK_,initial_query,map__48244,map__48244__$1,iparser,parser,ns,app_id,map__48238,map__48238__$1,node){
return (function (p1__48236_SHARP_){
return com.wsscode.pathom.book.interactive_parser.compact_keywords(p1__48236_SHARP_,ns);
});
;})(inst_48258,inst_48259,state_val_48266,c__38998__auto__,parser_name,no_trace_QMARK_,initial_query,map__48244,map__48244__$1,iparser,parser,ns,app_id,map__48238,map__48238__$1,node))
})();
var inst_48261 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_48259,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798),inst_48260);
var state_48265__$1 = state_48265;
var statearr_48278_48351 = state_48265__$1;
(statearr_48278_48351[(2)] = inst_48261);


cljs.core.async.impl.ioc_helpers.process_exception(state_48265__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__38998__auto__,parser_name,no_trace_QMARK_,initial_query,map__48244,map__48244__$1,iparser,parser,ns,app_id,map__48238,map__48238__$1,node))
;
return ((function (switch__38924__auto__,c__38998__auto__,parser_name,no_trace_QMARK_,initial_query,map__48244,map__48244__$1,iparser,parser,ns,app_id,map__48238,map__48238__$1,node){
return (function() {
var com$wsscode$pathom$book$interactive_parser$state_machine__38925__auto__ = null;
var com$wsscode$pathom$book$interactive_parser$state_machine__38925__auto____0 = (function (){
var statearr_48294 = [null,null,null,null,null,null,null];
(statearr_48294[(0)] = com$wsscode$pathom$book$interactive_parser$state_machine__38925__auto__);

(statearr_48294[(1)] = (1));

return statearr_48294;
});
var com$wsscode$pathom$book$interactive_parser$state_machine__38925__auto____1 = (function (state_48265){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_48265);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e48295){if((e48295 instanceof Object)){
var ex__38928__auto__ = e48295;
var statearr_48296_48362 = state_48265;
(statearr_48296_48362[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48295;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48364 = state_48265;
state_48265 = G__48364;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$book$interactive_parser$state_machine__38925__auto__ = function(state_48265){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$interactive_parser$state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$interactive_parser$state_machine__38925__auto____1.call(this,state_48265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$interactive_parser$state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$interactive_parser$state_machine__38925__auto____0;
com$wsscode$pathom$book$interactive_parser$state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$interactive_parser$state_machine__38925__auto____1;
return com$wsscode$pathom$book$interactive_parser$state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38998__auto__,parser_name,no_trace_QMARK_,initial_query,map__48244,map__48244__$1,iparser,parser,ns,app_id,map__48238,map__48238__$1,node))
})();
var state__39000__auto__ = (function (){var statearr_48298 = (f__38999__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38999__auto__.cljs$core$IFn$_invoke$arity$0() : f__38999__auto__.call(null));
(statearr_48298[(6)] = c__38998__auto__);

return statearr_48298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39000__auto__);
});})(c__38998__auto__,parser_name,no_trace_QMARK_,initial_query,map__48244,map__48244__$1,iparser,parser,ns,app_id,map__48238,map__48238__$1,node))
);

return c__38998__auto__;
});
;})(parser_name,no_trace_QMARK_,initial_query,map__48244,map__48244__$1,iparser,parser,ns,app_id,map__48238,map__48238__$1,node))
});})(parser_name,no_trace_QMARK_,initial_query,map__48244,map__48244__$1,iparser,parser,ns,app_id,map__48238,map__48238__$1,node))
], null)))])], 0)),new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039),com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper], null);
}));

//# sourceMappingURL=com.wsscode.pathom.book.interactive_parser.js.map
