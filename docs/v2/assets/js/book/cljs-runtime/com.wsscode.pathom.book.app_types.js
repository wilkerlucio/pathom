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
com.wsscode.pathom.book.app_types.ui_55652 = (function com$wsscode$pathom$book$app_types$make_root_$_ui_55652(){
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.book.app_types.ui_55652.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.app-types","ui_55652","com.wsscode.pathom.book.app-types/ui_55652",1598280815),com.wsscode.pathom.book.app_types.ui_55652);

var x55667_55746 = com.wsscode.pathom.book.app_types.ui_55652.prototype;
x55667_55746.render = ((function (x55667_55746){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__55673 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__55674 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__55675 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__55676 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__55677 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__55678 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__55679 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__55680 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__55681 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__55682 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__55678;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__55679;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55680;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__55681;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55682;

try{var map__55683 = fulcro.client.primitives.props(this$);
var map__55683__$1 = (((((!((map__55683 == null))))?(((((map__55683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55683):map__55683);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55683__$1,new cljs.core.Keyword("ui","root","ui/root",-448656785));
var factory = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(Root);
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(root) : factory.call(null,root));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55677;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__55676;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55675;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__55674;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__55673;
}});})(x55667_55746))
;


com.wsscode.pathom.book.app_types.ui_55652.prototype.constructor = com.wsscode.pathom.book.app_types.ui_55652;

com.wsscode.pathom.book.app_types.ui_55652.prototype.constructor.displayName = "com.wsscode.pathom.book.app-types/ui_55652";

com.wsscode.pathom.book.app_types.ui_55652.prototype.fulcro$isComponent = true;

var x55685_55755 = com.wsscode.pathom.book.app_types.ui_55652;
x55685_55755.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x55685_55755.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x55685_55755){
return (function (_,params){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id,new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_initial_state(Root,params)], null);
});})(x55685_55755))
;

x55685_55755.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55685_55755.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55685_55755){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(Root)], null)], null);
});})(x55685_55755))
;

x55685_55755.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55685_55755.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55685_55755){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55685_55755))
;

x55685_55755.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55685_55755){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [Root], null);
});})(x55685_55755))
;


var x55690_55759 = com.wsscode.pathom.book.app_types.ui_55652.prototype;
x55690_55759.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x55690_55759.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x55690_55759){
return (function (_,params){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id,new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_initial_state(Root,params)], null);
});})(x55690_55759))
;

x55690_55759.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55690_55759.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55690_55759){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(Root)], null)], null);
});})(x55690_55759))
;

x55690_55759.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55690_55759.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55690_55759){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55690_55759))
;

x55690_55759.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55690_55759){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [Root], null);
});})(x55690_55759))
;


com.wsscode.pathom.book.app_types.ui_55652.cljs$lang$type = true;

com.wsscode.pathom.book.app_types.ui_55652.cljs$lang$ctorStr = "com.wsscode.pathom.book.app-types/ui_55652";

com.wsscode.pathom.book.app_types.ui_55652.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.book.app-types/ui_55652");
});

return com.wsscode.pathom.book.app_types.ui_55652;
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
var seq__55700 = cljs.core.seq(cljs.core.deref(com.wsscode.pathom.book.app_types.apps));
var chunk__55701 = null;
var count__55702 = (0);
var i__55703 = (0);
while(true){
if((i__55703 < count__55702)){
var vec__55724 = chunk__55701.cljs$core$IIndexed$_nth$arity$2(null,i__55703);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55724,(0),null);
var map__55727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55724,(1),null);
var map__55727__$1 = (((((!((map__55727 == null))))?(((((map__55727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55727):map__55727);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55727__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55727__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.book.app_types.apps,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137)], null),fulcro.client.mount,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([root,node], 0));

node.classList.remove("loader");


var G__55774 = seq__55700;
var G__55775 = chunk__55701;
var G__55776 = count__55702;
var G__55777 = (i__55703 + (1));
seq__55700 = G__55774;
chunk__55701 = G__55775;
count__55702 = G__55776;
i__55703 = G__55777;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__55700);
if(temp__5720__auto__){
var seq__55700__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55700__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__55700__$1);
var G__55778 = cljs.core.chunk_rest(seq__55700__$1);
var G__55779 = c__4550__auto__;
var G__55780 = cljs.core.count(c__4550__auto__);
var G__55781 = (0);
seq__55700 = G__55778;
chunk__55701 = G__55779;
count__55702 = G__55780;
i__55703 = G__55781;
continue;
} else {
var vec__55730 = cljs.core.first(seq__55700__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55730,(0),null);
var map__55733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55730,(1),null);
var map__55733__$1 = (((((!((map__55733 == null))))?(((((map__55733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55733):map__55733);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55733__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55733__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.book.app_types.apps,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137)], null),fulcro.client.mount,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([root,node], 0));

node.classList.remove("loader");


var G__55786 = cljs.core.next(seq__55700__$1);
var G__55787 = null;
var G__55788 = (0);
var G__55789 = (0);
seq__55700 = G__55786;
chunk__55701 = G__55787;
count__55702 = G__55788;
i__55703 = G__55789;
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
var map__55738 = (function (){var G__55739 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550),node], null);
return (app_factory.cljs$core$IFn$_invoke$arity$1 ? app_factory.cljs$core$IFn$_invoke$arity$1(G__55739) : app_factory.call(null,G__55739));
})();
var map__55738__$1 = (((((!((map__55738 == null))))?(((((map__55738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55738):map__55738);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55738__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55738__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137));
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
