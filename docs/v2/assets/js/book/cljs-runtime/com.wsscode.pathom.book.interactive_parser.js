goog.provide('com.wsscode.pathom.book.interactive_parser');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.book.app_types');
goog.require('com.wsscode.pathom.book.async.error_propagation');
goog.require('com.wsscode.pathom.book.async.intro');
goog.require('com.wsscode.pathom.book.async.js_promises');
goog.require('com.wsscode.pathom.book.connect.batch');
goog.require('com.wsscode.pathom.book.connect.batch_transform_auto_batch');
goog.require('com.wsscode.pathom.book.connect.batch2');
goog.require('com.wsscode.pathom.book.connect.batch3');
goog.require('com.wsscode.pathom.book.connect.getting_started');
goog.require('com.wsscode.pathom.book.connect.getting_started2');
goog.require('com.wsscode.pathom.book.connect.mutation_async');
goog.require('com.wsscode.pathom.book.connect.mutation_context');
goog.require('com.wsscode.pathom.book.connect.mutation_join');
goog.require('com.wsscode.pathom.book.connect.mutation_join_globals');
goog.require('com.wsscode.pathom.book.connect.mutations');
goog.require('com.wsscode.pathom.book.connect.parameters');
goog.require('com.wsscode.pathom.book.connect.unions');
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
com.wsscode.pathom.book.interactive_parser.parsers = cljs.core.PersistentHashMap.fromArrays(["connect.mutation-async","async.js-promises","intro.demo","connect.mutation-join","connect.unions","core.join-env","parallel-reader.demo","core.parser-counter-nested","connect.getting-started2","connect.batch","connect.mutation-join-globals","connect.getting-started","connect.parameters","tracing.demo1","connect.batch3","async.intro","connect.transform-auto-batch","connect.mutations","connect.batch2","connect.mutation-context","async.error-propagation","core.parser-counter"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.mutation_async.parser,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549),"com.wsscode.pathom.book.connect.mutation-async"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.async.js_promises.parser], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.intro.demo.parser], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.mutation_join.parser,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549),"com.wsscode.pathom.book.connect.mutation-join"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.unions.parser,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549),"com.wsscode.pathom.book.connect.unions"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.core.join_env_update.parser,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549),"com.wsscode.pathom.book.core.join-env-update"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.tracing.demo_parallel_reader.parser,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549),"com.wsscode.pathom.book.tracing.demo-parallel-reader"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.core.parser_counter_nested_example.parser], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.getting_started2.parser,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549),"com.wsscode.pathom.book.connect.getting-started2"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.batch.parser], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.mutation_join_globals.parser,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549),"com.wsscode.pathom.book.connect.mutation-join-globals"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.getting_started.parser,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549),"com.wsscode.pathom.book.connect.getting-started"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.parameters.parser,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549),"com.wsscode.pathom.book.connect.parameters"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.tracing.demo.parser,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549),"com.wsscode.pathom.book.tracing.demo"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.batch3.parser], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.async.intro.parser], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.batch_transform_auto_batch.parser], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.mutations.parser,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549),"com.wsscode.pathom.book.connect.mutations"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.batch2.parser], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.connect.mutation_context.parser,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549),"com.wsscode.pathom.book.connect.mutation-context"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.async.error_propagation.parser], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043),com.wsscode.pathom.book.core.parser_counter_example.parser], null)]);
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
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","QueryEditorWrapper","com.wsscode.pathom.book.interactive-parser/QueryEditorWrapper",-1010215952),com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper);

var x55150_55246 = com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.prototype;
x55150_55246.render = ((function (x55150_55246){
return (function (){
var this__52659__auto__ = this;
var _this = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__55153 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__55154 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__55155 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__55156 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__55157 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__55158 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__55159 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__55160 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__55161 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__55162 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__55158;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__55159;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55160;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__55161;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55162;

try{var map__55165 = fulcro.client.primitives.props(_this);
var map__55165__$1 = (((((!((map__55165 == null))))?(((((map__55165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55165):map__55165);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55165__$1,new cljs.core.Keyword("ui","root","ui/root",-448656785));
var enable_trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55165__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","enable-trace?","com.wsscode.pathom.viz.query-editor/enable-trace?",-315452305));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),(function (){var G__55168 = root;
var G__55169 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","default-trace-size","com.wsscode.pathom.viz.query-editor/default-trace-size",1888578783),(200),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","enable-trace?","com.wsscode.pathom.viz.query-editor/enable-trace?",-315452305),enable_trace_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","editor-props","com.wsscode.pathom.viz.query-editor/editor-props",-223318753),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-index-update?","force-index-update?",1651651111),true], null)], null);
return (com.wsscode.pathom.viz.query_editor.query_editor.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.query_editor.query_editor.cljs$core$IFn$_invoke$arity$2(G__55168,G__55169) : com.wsscode.pathom.viz.query_editor.query_editor.call(null,G__55168,G__55169));
})()], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55157;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__55156;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55155;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__55154;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__55153;
}});})(x55150_55246))
;


com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.prototype.constructor = com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper;

com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.prototype.constructor.displayName = "com.wsscode.pathom.book.interactive-parser/QueryEditorWrapper";

com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.prototype.fulcro$isComponent = true;

var x55171_55250 = com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper;
x55171_55250.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55171_55250.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55171_55250){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"500px",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null)], null);
});})(x55171_55250))
;

x55171_55250.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55171_55250){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.query_editor.QueryEditor], null);
});})(x55171_55250))
;

x55171_55250.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x55171_55250.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x55171_55250){
return (function (_this,query){
var _this__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.get_initial_state(com.wsscode.pathom.viz.query_editor.QueryEditor,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347),query)], null);
});})(x55171_55250))
;

x55171_55250.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55171_55250.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55171_55250){
return (function (_this){
var _this__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","enable-trace?","com.wsscode.pathom.viz.query-editor/enable-trace?",-315452305),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.query_editor.QueryEditor)], null)], null);
});})(x55171_55250))
;


var x55173_55256 = com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.prototype;
x55173_55256.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55173_55256.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55173_55256){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"500px",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null)], null);
});})(x55173_55256))
;

x55173_55256.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55173_55256){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.query_editor.QueryEditor], null);
});})(x55173_55256))
;

x55173_55256.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x55173_55256.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x55173_55256){
return (function (_this,query){
var _this__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.get_initial_state(com.wsscode.pathom.viz.query_editor.QueryEditor,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347),query)], null);
});})(x55173_55256))
;

x55173_55256.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55173_55256.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55173_55256){
return (function (_this){
var _this__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","enable-trace?","com.wsscode.pathom.viz.query-editor/enable-trace?",-315452305),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.query_editor.QueryEditor)], null)], null);
});})(x55173_55256))
;


com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.cljs$lang$type = true;

com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.cljs$lang$ctorStr = "com.wsscode.pathom.book.interactive-parser/QueryEditorWrapper";

com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.book.interactive-parser/QueryEditorWrapper");
});
com.wsscode.pathom.book.app_types.register_app("interactive-parser",(function (p__55179){
var map__55180 = p__55179;
var map__55180__$1 = (((((!((map__55180 == null))))?(((((map__55180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55180):map__55180);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55180__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550));
var parser_name = node.getAttribute("data-parser");
var no_trace_QMARK_ = cljs.core.boolean$(node.getAttribute("data-no-trace"));
var initial_query = node.innerText;
var map__55183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.interactive_parser.parsers,parser_name);
var map__55183__$1 = (((((!((map__55183 == null))))?(((((map__55183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55183):map__55183);
var iparser = map__55183__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55183__$1,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55183__$1,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549));
var app_id = ["query-editor-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parser_name)].join('');
if(cljs.core.truth_(iparser)){
} else {
throw (new Error(["Assert failed: ",["parser ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parser_name)," not found"].join(''),"\n","iparser"].join('')));
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137),fulcro.client.new_fulcro_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fulcro.client.primitives.get_initial_state(com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper,initial_query),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","enable-trace?","com.wsscode.pathom.viz.query-editor/enable-trace?",-315452305),(!(no_trace_QMARK_))], 0)),new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),com.wsscode.pathom.viz.query_editor.load_indexes,new cljs.core.Keyword(null,"networking","networking",586110628),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.wsscode.pathom.viz.query_editor.remote_key,com.wsscode.pathom.fulcro.network.pathom_remote(com.wsscode.pathom.viz.query_editor.client_card_parser.cljs$core$IFn$_invoke$arity$2(parser,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","wrap-run-query","com.wsscode.pathom.viz.query-editor/wrap-run-query",1107576422),((function (parser_name,no_trace_QMARK_,initial_query,map__55183,map__55183__$1,iparser,parser,ns,app_id,map__55180,map__55180__$1,node){
return (function (run_query){
return ((function (parser_name,no_trace_QMARK_,initial_query,map__55183,map__55183__$1,iparser,parser,ns,app_id,map__55180,map__55180__$1,node){
return (function (env,input){
var c__48522__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48522__auto__,parser_name,no_trace_QMARK_,initial_query,map__55183,map__55183__$1,iparser,parser,ns,app_id,map__55180,map__55180__$1,node){
return (function (){
var f__48523__auto__ = (function (){var switch__48139__auto__ = ((function (c__48522__auto__,parser_name,no_trace_QMARK_,initial_query,map__55183,map__55183__$1,iparser,parser,ns,app_id,map__55180,map__55180__$1,node){
return (function (state_55204){
var state_val_55205 = (state_55204[(1)]);
if((state_val_55205 === (1))){
var state_55204__$1 = state_55204;
var statearr_55208_55278 = state_55204__$1;
(statearr_55208_55278[(2)] = null);

(statearr_55208_55278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55205 === (2))){
var _ = (function (){var statearr_55210 = state_55204;
(statearr_55210[(4)] = cljs.core.cons((5),(state_55204[(4)])));

return statearr_55210;
})();
var inst_55192 = (function (){return ((function (_,state_val_55205,c__48522__auto__,parser_name,no_trace_QMARK_,initial_query,map__55183,map__55183__$1,iparser,parser,ns,app_id,map__55180,map__55180__$1,node){
return (function (p1__55177_SHARP_){
return com.wsscode.pathom.book.interactive_parser.expand_keywords(p1__55177_SHARP_,ns);
});
;})(_,state_val_55205,c__48522__auto__,parser_name,no_trace_QMARK_,initial_query,map__55183,map__55183__$1,iparser,parser,ns,app_id,map__55180,map__55180__$1,node))
})();
var inst_55193 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(input,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347),inst_55192);
var inst_55194 = (run_query.cljs$core$IFn$_invoke$arity$2 ? run_query.cljs$core$IFn$_invoke$arity$2(env,inst_55193) : run_query.call(null,env,inst_55193));
var state_55204__$1 = state_55204;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55204__$1,(6),inst_55194);
} else {
if((state_val_55205 === (3))){
var inst_55202 = (state_55204[(2)]);
var state_55204__$1 = state_55204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55204__$1,inst_55202);
} else {
if((state_val_55205 === (4))){
var inst_55186 = (state_55204[(2)]);
var state_55204__$1 = state_55204;
var statearr_55215_55281 = state_55204__$1;
(statearr_55215_55281[(2)] = inst_55186);

(statearr_55215_55281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55205 === (5))){
var _ = (function (){var statearr_55216 = state_55204;
(statearr_55216[(4)] = cljs.core.rest((state_55204[(4)])));

return statearr_55216;
})();
var state_55204__$1 = state_55204;
var ex55211 = (state_55204__$1[(2)]);
var statearr_55217_55283 = state_55204__$1;
(statearr_55217_55283[(5)] = ex55211);


var statearr_55218_55284 = state_55204__$1;
(statearr_55218_55284[(1)] = (4));

(statearr_55218_55284[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55205 === (6))){
var inst_55196 = (state_55204[(2)]);
var inst_55197 = com.wsscode.common.async_cljs.throw_err(inst_55196);
var inst_55198 = (function (){return ((function (inst_55196,inst_55197,state_val_55205,c__48522__auto__,parser_name,no_trace_QMARK_,initial_query,map__55183,map__55183__$1,iparser,parser,ns,app_id,map__55180,map__55180__$1,node){
return (function (p1__55178_SHARP_){
return com.wsscode.pathom.book.interactive_parser.compact_keywords(p1__55178_SHARP_,ns);
});
;})(inst_55196,inst_55197,state_val_55205,c__48522__auto__,parser_name,no_trace_QMARK_,initial_query,map__55183,map__55183__$1,iparser,parser,ns,app_id,map__55180,map__55180__$1,node))
})();
var inst_55199 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_55197,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798),inst_55198);
var _ = (function (){var statearr_55220 = state_55204;
(statearr_55220[(4)] = cljs.core.rest((state_55204[(4)])));

return statearr_55220;
})();
var state_55204__$1 = state_55204;
var statearr_55221_55295 = state_55204__$1;
(statearr_55221_55295[(2)] = inst_55199);

(statearr_55221_55295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__48522__auto__,parser_name,no_trace_QMARK_,initial_query,map__55183,map__55183__$1,iparser,parser,ns,app_id,map__55180,map__55180__$1,node))
;
return ((function (switch__48139__auto__,c__48522__auto__,parser_name,no_trace_QMARK_,initial_query,map__55183,map__55183__$1,iparser,parser,ns,app_id,map__55180,map__55180__$1,node){
return (function() {
var com$wsscode$pathom$book$interactive_parser$state_machine__48140__auto__ = null;
var com$wsscode$pathom$book$interactive_parser$state_machine__48140__auto____0 = (function (){
var statearr_55222 = [null,null,null,null,null,null,null];
(statearr_55222[(0)] = com$wsscode$pathom$book$interactive_parser$state_machine__48140__auto__);

(statearr_55222[(1)] = (1));

return statearr_55222;
});
var com$wsscode$pathom$book$interactive_parser$state_machine__48140__auto____1 = (function (state_55204){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_55204);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e55223){var ex__48143__auto__ = e55223;
var statearr_55224_55298 = state_55204;
(statearr_55224_55298[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_55204[(4)]))){
var statearr_55225_55299 = state_55204;
(statearr_55225_55299[(1)] = cljs.core.first((state_55204[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55300 = state_55204;
state_55204 = G__55300;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$book$interactive_parser$state_machine__48140__auto__ = function(state_55204){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$interactive_parser$state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$interactive_parser$state_machine__48140__auto____1.call(this,state_55204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$interactive_parser$state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$interactive_parser$state_machine__48140__auto____0;
com$wsscode$pathom$book$interactive_parser$state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$interactive_parser$state_machine__48140__auto____1;
return com$wsscode$pathom$book$interactive_parser$state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48522__auto__,parser_name,no_trace_QMARK_,initial_query,map__55183,map__55183__$1,iparser,parser,ns,app_id,map__55180,map__55180__$1,node))
})();
var state__48524__auto__ = (function (){var statearr_55226 = f__48523__auto__();
(statearr_55226[(6)] = c__48522__auto__);

return statearr_55226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48524__auto__);
});})(c__48522__auto__,parser_name,no_trace_QMARK_,initial_query,map__55183,map__55183__$1,iparser,parser,ns,app_id,map__55180,map__55180__$1,node))
);

return c__48522__auto__;
});
;})(parser_name,no_trace_QMARK_,initial_query,map__55183,map__55183__$1,iparser,parser,ns,app_id,map__55180,map__55180__$1,node))
});})(parser_name,no_trace_QMARK_,initial_query,map__55183,map__55183__$1,iparser,parser,ns,app_id,map__55180,map__55180__$1,node))
], null)))])], 0)),new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039),com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper], null);
}));

//# sourceMappingURL=com.wsscode.pathom.book.interactive_parser.js.map
