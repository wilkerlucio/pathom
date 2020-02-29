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
com.wsscode.pathom.book.app_types.ui_68429 = (function com$wsscode$pathom$book$app_types$make_root_$_ui_68429(){
var this__56858__auto__ = this;
React.Component.apply(this__56858__auto__,arguments);

if((!((this__56858__auto__.initLocalState == null)))){
this__56858__auto__.state = this__56858__auto__.initLocalState();
} else {
this__56858__auto__.state = ({});
}

return this__56858__auto__;
});

goog.object.extend(com.wsscode.pathom.book.app_types.ui_68429.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.app-types","ui_68429","com.wsscode.pathom.book.app-types/ui_68429",-569143215),com.wsscode.pathom.book.app_types.ui_68429);

var x68435_68539 = com.wsscode.pathom.book.app_types.ui_68429.prototype;
x68435_68539.render = ((function (x68435_68539){
return (function (){
var this__55246__auto__ = this;
var this$ = this__55246__auto__;
var _STAR_reconciler_STAR__orig_val__68438 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__68439 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__68440 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__68441 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__68442 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__68443 = fulcro.client.primitives.get_reconciler(this__55246__auto__);
var _STAR_depth_STAR__temp_val__68444 = (fulcro.client.primitives.depth(this__55246__auto__) + (1));
var _STAR_shared_STAR__temp_val__68445 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__55246__auto__);
var _STAR_instrument_STAR__temp_val__68446 = fulcro.client.primitives.instrument(this__55246__auto__);
var _STAR_parent_STAR__temp_val__68447 = this__55246__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__68443;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__68444;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__68445;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__68446;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__68447;

try{var map__68452 = fulcro.client.primitives.props(this$);
var map__68452__$1 = (((((!((map__68452 == null))))?(((((map__68452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68452):map__68452);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68452__$1,new cljs.core.Keyword("ui","root","ui/root",-448656785));
var factory = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(Root);
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(root) : factory.call(null,root));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__68442;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__68441;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__68440;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__68439;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__68438;
}});})(x68435_68539))
;


com.wsscode.pathom.book.app_types.ui_68429.prototype.constructor = com.wsscode.pathom.book.app_types.ui_68429;

com.wsscode.pathom.book.app_types.ui_68429.prototype.constructor.displayName = "com.wsscode.pathom.book.app-types/ui_68429";

com.wsscode.pathom.book.app_types.ui_68429.prototype.fulcro$isComponent = true;

var x68458_68544 = com.wsscode.pathom.book.app_types.ui_68429;
x68458_68544.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x68458_68544.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x68458_68544){
return (function (_,params){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id,new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_initial_state(Root,params)], null);
});})(x68458_68544))
;

x68458_68544.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x68458_68544.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x68458_68544){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(Root)], null)], null);
});})(x68458_68544))
;

x68458_68544.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x68458_68544.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x68458_68544){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x68458_68544))
;

x68458_68544.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x68458_68544){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [Root], null);
});})(x68458_68544))
;


var x68466_68549 = com.wsscode.pathom.book.app_types.ui_68429.prototype;
x68466_68549.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x68466_68549.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x68466_68549){
return (function (_,params){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id,new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_initial_state(Root,params)], null);
});})(x68466_68549))
;

x68466_68549.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x68466_68549.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x68466_68549){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(Root)], null)], null);
});})(x68466_68549))
;

x68466_68549.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x68466_68549.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x68466_68549){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x68466_68549))
;

x68466_68549.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x68466_68549){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [Root], null);
});})(x68466_68549))
;


com.wsscode.pathom.book.app_types.ui_68429.cljs$lang$type = true;

com.wsscode.pathom.book.app_types.ui_68429.cljs$lang$ctorStr = "com.wsscode.pathom.book.app-types/ui_68429";

com.wsscode.pathom.book.app_types.ui_68429.cljs$lang$ctorPrWriter = (function (this__56861__auto__,writer__56862__auto__,opt__56863__auto__){
return cljs.core._write(writer__56862__auto__,"com.wsscode.pathom.book.app-types/ui_68429");
});

return com.wsscode.pathom.book.app_types.ui_68429;
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
var seq__68488 = cljs.core.seq(cljs.core.deref(com.wsscode.pathom.book.app_types.apps));
var chunk__68489 = null;
var count__68490 = (0);
var i__68491 = (0);
while(true){
if((i__68491 < count__68490)){
var vec__68512 = chunk__68489.cljs$core$IIndexed$_nth$arity$2(null,i__68491);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68512,(0),null);
var map__68515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68512,(1),null);
var map__68515__$1 = (((((!((map__68515 == null))))?(((((map__68515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68515):map__68515);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68515__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68515__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.book.app_types.apps,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137)], null),fulcro.client.mount,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([root,node], 0));

node.classList.remove("loader");


var G__68560 = seq__68488;
var G__68561 = chunk__68489;
var G__68562 = count__68490;
var G__68563 = (i__68491 + (1));
seq__68488 = G__68560;
chunk__68489 = G__68561;
count__68490 = G__68562;
i__68491 = G__68563;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__68488);
if(temp__5720__auto__){
var seq__68488__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68488__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__68488__$1);
var G__68564 = cljs.core.chunk_rest(seq__68488__$1);
var G__68565 = c__4550__auto__;
var G__68566 = cljs.core.count(c__4550__auto__);
var G__68567 = (0);
seq__68488 = G__68564;
chunk__68489 = G__68565;
count__68490 = G__68566;
i__68491 = G__68567;
continue;
} else {
var vec__68520 = cljs.core.first(seq__68488__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68520,(0),null);
var map__68523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68520,(1),null);
var map__68523__$1 = (((((!((map__68523 == null))))?(((((map__68523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68523):map__68523);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68523__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68523__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.book.app_types.apps,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137)], null),fulcro.client.mount,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([root,node], 0));

node.classList.remove("loader");


var G__68571 = cljs.core.next(seq__68488__$1);
var G__68572 = null;
var G__68573 = (0);
var G__68574 = (0);
seq__68488 = G__68571;
chunk__68489 = G__68572;
count__68490 = G__68573;
i__68491 = G__68574;
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
var map__68528 = (function (){var G__68529 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550),node], null);
return (app_factory.cljs$core$IFn$_invoke$arity$1 ? app_factory.cljs$core$IFn$_invoke$arity$1(G__68529) : app_factory.call(null,G__68529));
})();
var map__68528__$1 = (((((!((map__68528 == null))))?(((((map__68528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68528):map__68528);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68528__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68528__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137));
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
