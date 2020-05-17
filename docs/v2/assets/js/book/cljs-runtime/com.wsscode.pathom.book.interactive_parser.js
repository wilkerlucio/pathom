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
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","QueryEditorWrapper","com.wsscode.pathom.book.interactive-parser/QueryEditorWrapper",-1010215952),com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper);

var x66781_66829 = com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.prototype;
x66781_66829.render = ((function (x66781_66829){
return (function (){
var this__50885__auto__ = this;
var _this = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__66782 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__66783 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__66784 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__66785 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__66786 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__66787 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__66788 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__66789 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__66790 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__66791 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__66787;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__66788;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__66789;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__66790;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__66791;

try{var map__66792 = fulcro.client.primitives.props(_this);
var map__66792__$1 = (((((!((map__66792 == null))))?(((((map__66792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66792):map__66792);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66792__$1,new cljs.core.Keyword("ui","root","ui/root",-448656785));
var enable_trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66792__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","enable-trace?","com.wsscode.pathom.viz.query-editor/enable-trace?",-315452305));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),(function (){var G__66794 = root;
var G__66795 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","default-trace-size","com.wsscode.pathom.viz.query-editor/default-trace-size",1888578783),(200),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","enable-trace?","com.wsscode.pathom.viz.query-editor/enable-trace?",-315452305),enable_trace_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","editor-props","com.wsscode.pathom.viz.query-editor/editor-props",-223318753),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-index-update?","force-index-update?",1651651111),true], null)], null);
return (com.wsscode.pathom.viz.query_editor.query_editor.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.query_editor.query_editor.cljs$core$IFn$_invoke$arity$2(G__66794,G__66795) : com.wsscode.pathom.viz.query_editor.query_editor.call(null,G__66794,G__66795));
})()], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__66786;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__66785;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__66784;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__66783;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__66782;
}});})(x66781_66829))
;


com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.prototype.constructor = com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper;

com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.prototype.constructor.displayName = "com.wsscode.pathom.book.interactive-parser/QueryEditorWrapper";

com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.prototype.fulcro$isComponent = true;

var x66796_66832 = com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper;
x66796_66832.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x66796_66832.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x66796_66832){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"500px",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null)], null);
});})(x66796_66832))
;

x66796_66832.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x66796_66832){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.query_editor.QueryEditor], null);
});})(x66796_66832))
;

x66796_66832.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x66796_66832.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x66796_66832){
return (function (_this,query){
var _this__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.get_initial_state(com.wsscode.pathom.viz.query_editor.QueryEditor,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347),query)], null);
});})(x66796_66832))
;

x66796_66832.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x66796_66832.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x66796_66832){
return (function (_this){
var _this__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","enable-trace?","com.wsscode.pathom.viz.query-editor/enable-trace?",-315452305),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.query_editor.QueryEditor)], null)], null);
});})(x66796_66832))
;


var x66797_66844 = com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.prototype;
x66797_66844.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x66797_66844.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x66797_66844){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"500px",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null)], null);
});})(x66797_66844))
;

x66797_66844.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x66797_66844){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.query_editor.QueryEditor], null);
});})(x66797_66844))
;

x66797_66844.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x66797_66844.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x66797_66844){
return (function (_this,query){
var _this__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fulcro.client.primitives.get_initial_state(com.wsscode.pathom.viz.query_editor.QueryEditor,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347),query)], null);
});})(x66797_66844))
;

x66797_66844.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x66797_66844.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x66797_66844){
return (function (_this){
var _this__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","enable-trace?","com.wsscode.pathom.viz.query-editor/enable-trace?",-315452305),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.query_editor.QueryEditor)], null)], null);
});})(x66797_66844))
;


com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.cljs$lang$type = true;

com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.cljs$lang$ctorStr = "com.wsscode.pathom.book.interactive-parser/QueryEditorWrapper";

com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.book.interactive-parser/QueryEditorWrapper");
});
com.wsscode.pathom.book.app_types.register_app("interactive-parser",(function (p__66800){
var map__66801 = p__66800;
var map__66801__$1 = (((((!((map__66801 == null))))?(((((map__66801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66801):map__66801);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66801__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550));
var parser_name = node.getAttribute("data-parser");
var no_trace_QMARK_ = cljs.core.boolean$(node.getAttribute("data-no-trace"));
var initial_query = node.innerText;
var map__66803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.interactive_parser.parsers,parser_name);
var map__66803__$1 = (((((!((map__66803 == null))))?(((((map__66803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66803):map__66803);
var iparser = map__66803__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66803__$1,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","parser","com.wsscode.pathom.book.interactive-parser/parser",-1029277043));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66803__$1,new cljs.core.Keyword("com.wsscode.pathom.book.interactive-parser","ns","com.wsscode.pathom.book.interactive-parser/ns",-232879549));
var app_id = ["query-editor-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parser_name)].join('');
if(cljs.core.truth_(iparser)){
} else {
throw (new Error(["Assert failed: ",["parser ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(parser_name)," not found"].join(''),"\n","iparser"].join('')));
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137),fulcro.client.new_fulcro_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fulcro.client.primitives.get_initial_state(com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper,initial_query),new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","enable-trace?","com.wsscode.pathom.viz.query-editor/enable-trace?",-315452305),(!(no_trace_QMARK_))], 0)),new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),com.wsscode.pathom.viz.query_editor.load_indexes,new cljs.core.Keyword(null,"networking","networking",586110628),cljs.core.PersistentArrayMap.createAsIfByAssoc([com.wsscode.pathom.viz.query_editor.remote_key,com.wsscode.pathom.fulcro.network.pathom_remote(com.wsscode.pathom.viz.query_editor.client_card_parser.cljs$core$IFn$_invoke$arity$2(parser,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","wrap-run-query","com.wsscode.pathom.viz.query-editor/wrap-run-query",1107576422),((function (parser_name,no_trace_QMARK_,initial_query,map__66803,map__66803__$1,iparser,parser,ns,app_id,map__66801,map__66801__$1,node){
return (function (run_query){
return ((function (parser_name,no_trace_QMARK_,initial_query,map__66803,map__66803__$1,iparser,parser,ns,app_id,map__66801,map__66801__$1,node){
return (function (env,input){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,parser_name,no_trace_QMARK_,initial_query,map__66803,map__66803__$1,iparser,parser,ns,app_id,map__66801,map__66801__$1,node){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,parser_name,no_trace_QMARK_,initial_query,map__66803,map__66803__$1,iparser,parser,ns,app_id,map__66801,map__66801__$1,node){
return (function (state_66820){
var state_val_66821 = (state_66820[(1)]);
if((state_val_66821 === (1))){
var state_66820__$1 = state_66820;
var statearr_66822_66849 = state_66820__$1;
(statearr_66822_66849[(2)] = null);

(statearr_66822_66849[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66821 === (2))){
var inst_66818 = (state_66820[(2)]);
var state_66820__$1 = state_66820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66820__$1,inst_66818);
} else {
if((state_val_66821 === (3))){
var inst_66805 = (state_66820[(2)]);
var state_66820__$1 = state_66820;
var statearr_66823_66850 = state_66820__$1;
(statearr_66823_66850[(2)] = inst_66805);


cljs.core.async.impl.ioc_helpers.process_exception(state_66820__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66821 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_66820,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_66809 = (function (){return ((function (_,state_val_66821,c__47946__auto__,parser_name,no_trace_QMARK_,initial_query,map__66803,map__66803__$1,iparser,parser,ns,app_id,map__66801,map__66801__$1,node){
return (function (p1__66798_SHARP_){
return com.wsscode.pathom.book.interactive_parser.expand_keywords(p1__66798_SHARP_,ns);
});
;})(_,state_val_66821,c__47946__auto__,parser_name,no_trace_QMARK_,initial_query,map__66803,map__66803__$1,iparser,parser,ns,app_id,map__66801,map__66801__$1,node))
})();
var inst_66810 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(input,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347),inst_66809);
var inst_66811 = (run_query.cljs$core$IFn$_invoke$arity$2 ? run_query.cljs$core$IFn$_invoke$arity$2(env,inst_66810) : run_query.call(null,env,inst_66810));
var state_66820__$1 = state_66820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66820__$1,(5),inst_66811);
} else {
if((state_val_66821 === (5))){
var inst_66813 = (state_66820[(2)]);
var inst_66814 = com.wsscode.common.async_cljs.throw_err(inst_66813);
var inst_66815 = (function (){return ((function (inst_66813,inst_66814,state_val_66821,c__47946__auto__,parser_name,no_trace_QMARK_,initial_query,map__66803,map__66803__$1,iparser,parser,ns,app_id,map__66801,map__66801__$1,node){
return (function (p1__66799_SHARP_){
return com.wsscode.pathom.book.interactive_parser.compact_keywords(p1__66799_SHARP_,ns);
});
;})(inst_66813,inst_66814,state_val_66821,c__47946__auto__,parser_name,no_trace_QMARK_,initial_query,map__66803,map__66803__$1,iparser,parser,ns,app_id,map__66801,map__66801__$1,node))
})();
var inst_66816 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_66814,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798),inst_66815);
var state_66820__$1 = state_66820;
var statearr_66824_66851 = state_66820__$1;
(statearr_66824_66851[(2)] = inst_66816);


cljs.core.async.impl.ioc_helpers.process_exception(state_66820__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__,parser_name,no_trace_QMARK_,initial_query,map__66803,map__66803__$1,iparser,parser,ns,app_id,map__66801,map__66801__$1,node))
;
return ((function (switch__47663__auto__,c__47946__auto__,parser_name,no_trace_QMARK_,initial_query,map__66803,map__66803__$1,iparser,parser,ns,app_id,map__66801,map__66801__$1,node){
return (function() {
var com$wsscode$pathom$book$interactive_parser$state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$interactive_parser$state_machine__47664__auto____0 = (function (){
var statearr_66825 = [null,null,null,null,null,null,null];
(statearr_66825[(0)] = com$wsscode$pathom$book$interactive_parser$state_machine__47664__auto__);

(statearr_66825[(1)] = (1));

return statearr_66825;
});
var com$wsscode$pathom$book$interactive_parser$state_machine__47664__auto____1 = (function (state_66820){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_66820);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e66826){if((e66826 instanceof Object)){
var ex__47667__auto__ = e66826;
var statearr_66827_66855 = state_66820;
(statearr_66827_66855[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66826;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66866 = state_66820;
state_66820 = G__66866;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$interactive_parser$state_machine__47664__auto__ = function(state_66820){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$interactive_parser$state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$interactive_parser$state_machine__47664__auto____1.call(this,state_66820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$interactive_parser$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$interactive_parser$state_machine__47664__auto____0;
com$wsscode$pathom$book$interactive_parser$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$interactive_parser$state_machine__47664__auto____1;
return com$wsscode$pathom$book$interactive_parser$state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,parser_name,no_trace_QMARK_,initial_query,map__66803,map__66803__$1,iparser,parser,ns,app_id,map__66801,map__66801__$1,node))
})();
var state__47948__auto__ = (function (){var statearr_66828 = f__47947__auto__();
(statearr_66828[(6)] = c__47946__auto__);

return statearr_66828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,parser_name,no_trace_QMARK_,initial_query,map__66803,map__66803__$1,iparser,parser,ns,app_id,map__66801,map__66801__$1,node))
);

return c__47946__auto__;
});
;})(parser_name,no_trace_QMARK_,initial_query,map__66803,map__66803__$1,iparser,parser,ns,app_id,map__66801,map__66801__$1,node))
});})(parser_name,no_trace_QMARK_,initial_query,map__66803,map__66803__$1,iparser,parser,ns,app_id,map__66801,map__66801__$1,node))
], null)))])], 0)),new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039),com.wsscode.pathom.book.interactive_parser.QueryEditorWrapper], null);
}));

//# sourceMappingURL=com.wsscode.pathom.book.interactive_parser.js.map
