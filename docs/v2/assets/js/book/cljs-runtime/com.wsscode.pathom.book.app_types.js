goog.provide('com.wsscode.pathom.book.app_types');
goog.require('cljs.core');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client');
goog.require('fulcro_css.css_protocols');
goog.require('fulcro_css.css_injection');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.map_db');
com.wsscode.pathom.book.app_types.make_root = (function com$wsscode$pathom$book$app_types$make_root(Root,app_id){
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.book.app_types.ui_49398 = (function com$wsscode$pathom$book$app_types$make_root_$_ui_49398(){
var this__43233__auto__ = this;
React.Component.apply(this__43233__auto__,arguments);

if((!((this__43233__auto__.initLocalState == null)))){
this__43233__auto__.state = this__43233__auto__.initLocalState();
} else {
this__43233__auto__.state = ({});
}

return this__43233__auto__;
});

var G__49474_49568 = com.wsscode.pathom.book.app_types.ui_49398.prototype;
var G__49475_49569 = React.Component.prototype;
var G__49476_49570 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__49474_49568,G__49475_49569,G__49476_49570);

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.app-types","ui_49398","com.wsscode.pathom.book.app-types/ui_49398",845466386),com.wsscode.pathom.book.app_types.ui_49398);

var x49477_49571 = com.wsscode.pathom.book.app_types.ui_49398.prototype;
x49477_49571.render = ((function (x49477_49571){
return (function (){
var this__42151__auto__ = this;
var this$ = this__42151__auto__;
var _STAR_reconciler_STAR__orig_val__49486 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__49487 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__49488 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__49489 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__49490 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__49493 = fulcro.client.primitives.get_reconciler(this__42151__auto__);
var _STAR_depth_STAR__temp_val__49494 = (fulcro.client.primitives.depth(this__42151__auto__) + (1));
var _STAR_shared_STAR__temp_val__49495 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42151__auto__);
var _STAR_instrument_STAR__temp_val__49496 = fulcro.client.primitives.instrument(this__42151__auto__);
var _STAR_parent_STAR__temp_val__49497 = this__42151__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__49493;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__49494;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__49495;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__49496;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__49497;

try{var map__49502 = fulcro.client.primitives.props(this$);
var map__49502__$1 = (((((!((map__49502 == null))))?(((((map__49502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49502):map__49502);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49502__$1,new cljs.core.Keyword("ui","root","ui/root",-448656785));
var factory = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(Root);
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(root) : factory.call(null,root));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__49490;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__49489;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__49488;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__49487;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__49486;
}});})(x49477_49571))
;


com.wsscode.pathom.book.app_types.ui_49398.prototype.constructor = com.wsscode.pathom.book.app_types.ui_49398;

com.wsscode.pathom.book.app_types.ui_49398.prototype.constructor.displayName = "com.wsscode.pathom.book.app-types/ui_49398";

com.wsscode.pathom.book.app_types.ui_49398.prototype.fulcro$isComponent = true;

var x49506_49574 = com.wsscode.pathom.book.app_types.ui_49398;
x49506_49574.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x49506_49574.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x49506_49574){
return (function (_,params){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id,new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_initial_state(Root,params)], null);
});})(x49506_49574))
;

x49506_49574.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x49506_49574.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x49506_49574){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(Root)], null)], null);
});})(x49506_49574))
;

x49506_49574.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x49506_49574.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x49506_49574){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x49506_49574))
;

x49506_49574.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x49506_49574){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [Root], null);
});})(x49506_49574))
;


var x49519_49576 = com.wsscode.pathom.book.app_types.ui_49398.prototype;
x49519_49576.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x49519_49576.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x49519_49576){
return (function (_,params){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id,new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_initial_state(Root,params)], null);
});})(x49519_49576))
;

x49519_49576.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x49519_49576.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x49519_49576){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(Root)], null)], null);
});})(x49519_49576))
;

x49519_49576.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x49519_49576.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x49519_49576){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x49519_49576))
;

x49519_49576.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x49519_49576){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [Root], null);
});})(x49519_49576))
;


com.wsscode.pathom.book.app_types.ui_49398.cljs$lang$type = true;

com.wsscode.pathom.book.app_types.ui_49398.cljs$lang$ctorStr = "com.wsscode.pathom.book.app-types/ui_49398";

com.wsscode.pathom.book.app_types.ui_49398.cljs$lang$ctorPrWriter = (function (this__43236__auto__,writer__43237__auto__,opt__43238__auto__){
return cljs.core._write(writer__43237__auto__,"com.wsscode.pathom.book.app-types/ui_49398");
});

return com.wsscode.pathom.book.app_types.ui_49398;
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.app_types !== 'undefined') && (typeof com.wsscode.pathom.book.app_types.apps !== 'undefined')){
} else {
com.wsscode.pathom.book.app_types.apps = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.app_types !== 'undefined') && (typeof com.wsscode.pathom.book.app_types.app_types !== 'undefined')){
} else {
com.wsscode.pathom.book.app_types.app_types = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
com.wsscode.pathom.book.app_types.register_app = (function com$wsscode$pathom$book$app_types$register_app(name,f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.wsscode.pathom.book.app_types.app_types,cljs.core.assoc,name,f);
});
com.wsscode.pathom.book.app_types.update_apps = (function com$wsscode$pathom$book$app_types$update_apps(){
var seq__49528 = cljs.core.seq(cljs.core.deref(com.wsscode.pathom.book.app_types.apps));
var chunk__49529 = null;
var count__49530 = (0);
var i__49531 = (0);
while(true){
if((i__49531 < count__49530)){
var vec__49549 = chunk__49529.cljs$core$IIndexed$_nth$arity$2(null,i__49531);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49549,(0),null);
var map__49552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49549,(1),null);
var map__49552__$1 = (((((!((map__49552 == null))))?(((((map__49552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49552):map__49552);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49552__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49552__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.book.app_types.apps,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137)], null),fulcro.client.mount,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([root,node], 0));

node.classList.remove("loader");


var G__49586 = seq__49528;
var G__49587 = chunk__49529;
var G__49588 = count__49530;
var G__49589 = (i__49531 + (1));
seq__49528 = G__49586;
chunk__49529 = G__49587;
count__49530 = G__49588;
i__49531 = G__49589;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49528);
if(temp__5720__auto__){
var seq__49528__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49528__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49528__$1);
var G__49590 = cljs.core.chunk_rest(seq__49528__$1);
var G__49591 = c__4550__auto__;
var G__49592 = cljs.core.count(c__4550__auto__);
var G__49593 = (0);
seq__49528 = G__49590;
chunk__49529 = G__49591;
count__49530 = G__49592;
i__49531 = G__49593;
continue;
} else {
var vec__49554 = cljs.core.first(seq__49528__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49554,(0),null);
var map__49557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49554,(1),null);
var map__49557__$1 = (((((!((map__49557 == null))))?(((((map__49557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49557):map__49557);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49557__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49557__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.book.app_types.apps,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137)], null),fulcro.client.mount,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([root,node], 0));

node.classList.remove("loader");


var G__49599 = cljs.core.next(seq__49528__$1);
var G__49600 = null;
var G__49601 = (0);
var G__49602 = (0);
seq__49528 = G__49599;
chunk__49529 = G__49600;
count__49530 = G__49601;
i__49531 = G__49602;
continue;
}
} else {
return null;
}
}
break;
}
});
com.wsscode.pathom.book.app_types.mount_app = (function com$wsscode$pathom$book$app_types$mount_app(name,node){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(com.wsscode.pathom.book.app_types.app_types),name);
if(cljs.core.truth_(temp__5718__auto__)){
var app_factory = temp__5718__auto__;
var id = cljs.core.random_uuid();
var map__49562 = (function (){var G__49563 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550),node], null);
return (app_factory.cljs$core$IFn$_invoke$arity$1 ? app_factory.cljs$core$IFn$_invoke$arity$1(G__49563) : app_factory.call(null,G__49563));
})();
var map__49562__$1 = (((((!((map__49562 == null))))?(((((map__49562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49562):map__49562);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49562__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49562__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137));
var app__$1 = (function (){var or__4131__auto__ = app;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return fulcro.client.new_fulcro_client.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parser","parser",-1543495310),com.wsscode.pathom.core.parser(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.map_db.parser_config,new cljs.core.Keyword(null,"mutate","mutate",1422419038),fulcro.client.mutate))], 0));
}
})();
fulcro_css.css_injection.upsert_css(id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),root], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(com.wsscode.pathom.book.app_types.apps,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137),app__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039),root,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550),node], null));
} else {
return console.warn("App type",name,"is not registered");
}
});

//# sourceMappingURL=com.wsscode.pathom.book.app_types.js.map
