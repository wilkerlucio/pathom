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
com.wsscode.pathom.book.app_types.ui_59536 = (function com$wsscode$pathom$book$app_types$make_root_$_ui_59536(){
var this__52443__auto__ = this;
React.Component.apply(this__52443__auto__,arguments);

if((!((this__52443__auto__.initLocalState == null)))){
this__52443__auto__.state = this__52443__auto__.initLocalState();
} else {
this__52443__auto__.state = ({});
}

return this__52443__auto__;
});

goog.object.extend(com.wsscode.pathom.book.app_types.ui_59536.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.app-types","ui_59536","com.wsscode.pathom.book.app-types/ui_59536",-1582671784),com.wsscode.pathom.book.app_types.ui_59536);

var x59551_59676 = com.wsscode.pathom.book.app_types.ui_59536.prototype;
x59551_59676.render = ((function (x59551_59676){
return (function (){
var this__51361__auto__ = this;
var this$ = this__51361__auto__;
var _STAR_reconciler_STAR__orig_val__59566 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__59567 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__59568 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__59569 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__59570 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__59571 = fulcro.client.primitives.get_reconciler(this__51361__auto__);
var _STAR_depth_STAR__temp_val__59572 = (fulcro.client.primitives.depth(this__51361__auto__) + (1));
var _STAR_shared_STAR__temp_val__59573 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__51361__auto__);
var _STAR_instrument_STAR__temp_val__59574 = fulcro.client.primitives.instrument(this__51361__auto__);
var _STAR_parent_STAR__temp_val__59575 = this__51361__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__59571;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__59572;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__59573;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__59574;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__59575;

try{var map__59584 = fulcro.client.primitives.props(this$);
var map__59584__$1 = (((((!((map__59584 == null))))?(((((map__59584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59584):map__59584);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59584__$1,new cljs.core.Keyword("ui","root","ui/root",-448656785));
var factory = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(Root);
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(root) : factory.call(null,root));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__59570;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__59569;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__59568;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__59567;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__59566;
}});})(x59551_59676))
;


com.wsscode.pathom.book.app_types.ui_59536.prototype.constructor = com.wsscode.pathom.book.app_types.ui_59536;

com.wsscode.pathom.book.app_types.ui_59536.prototype.constructor.displayName = "com.wsscode.pathom.book.app-types/ui_59536";

com.wsscode.pathom.book.app_types.ui_59536.prototype.fulcro$isComponent = true;

var x59593_59680 = com.wsscode.pathom.book.app_types.ui_59536;
x59593_59680.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x59593_59680.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x59593_59680){
return (function (_,params){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id,new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_initial_state(Root,params)], null);
});})(x59593_59680))
;

x59593_59680.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x59593_59680.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x59593_59680){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(Root)], null)], null);
});})(x59593_59680))
;

x59593_59680.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x59593_59680.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x59593_59680){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x59593_59680))
;

x59593_59680.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x59593_59680){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [Root], null);
});})(x59593_59680))
;


var x59609_59681 = com.wsscode.pathom.book.app_types.ui_59536.prototype;
x59609_59681.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x59609_59681.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x59609_59681){
return (function (_,params){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id,new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_initial_state(Root,params)], null);
});})(x59609_59681))
;

x59609_59681.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x59609_59681.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x59609_59681){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(Root)], null)], null);
});})(x59609_59681))
;

x59609_59681.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x59609_59681.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x59609_59681){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x59609_59681))
;

x59609_59681.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x59609_59681){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [Root], null);
});})(x59609_59681))
;


com.wsscode.pathom.book.app_types.ui_59536.cljs$lang$type = true;

com.wsscode.pathom.book.app_types.ui_59536.cljs$lang$ctorStr = "com.wsscode.pathom.book.app-types/ui_59536";

com.wsscode.pathom.book.app_types.ui_59536.cljs$lang$ctorPrWriter = (function (this__52446__auto__,writer__52447__auto__,opt__52448__auto__){
return cljs.core._write(writer__52447__auto__,"com.wsscode.pathom.book.app-types/ui_59536");
});

return com.wsscode.pathom.book.app_types.ui_59536;
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
var seq__59626 = cljs.core.seq(cljs.core.deref(com.wsscode.pathom.book.app_types.apps));
var chunk__59627 = null;
var count__59628 = (0);
var i__59629 = (0);
while(true){
if((i__59629 < count__59628)){
var vec__59650 = chunk__59627.cljs$core$IIndexed$_nth$arity$2(null,i__59629);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59650,(0),null);
var map__59653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59650,(1),null);
var map__59653__$1 = (((((!((map__59653 == null))))?(((((map__59653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59653):map__59653);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59653__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59653__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.book.app_types.apps,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137)], null),fulcro.client.mount,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([root,node], 0));

node.classList.remove("loader");


var G__59690 = seq__59626;
var G__59691 = chunk__59627;
var G__59692 = count__59628;
var G__59693 = (i__59629 + (1));
seq__59626 = G__59690;
chunk__59627 = G__59691;
count__59628 = G__59692;
i__59629 = G__59693;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__59626);
if(temp__5720__auto__){
var seq__59626__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59626__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59626__$1);
var G__59694 = cljs.core.chunk_rest(seq__59626__$1);
var G__59695 = c__4550__auto__;
var G__59696 = cljs.core.count(c__4550__auto__);
var G__59697 = (0);
seq__59626 = G__59694;
chunk__59627 = G__59695;
count__59628 = G__59696;
i__59629 = G__59697;
continue;
} else {
var vec__59659 = cljs.core.first(seq__59626__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59659,(0),null);
var map__59662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59659,(1),null);
var map__59662__$1 = (((((!((map__59662 == null))))?(((((map__59662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59662):map__59662);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59662__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59662__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.book.app_types.apps,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137)], null),fulcro.client.mount,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([root,node], 0));

node.classList.remove("loader");


var G__59699 = cljs.core.next(seq__59626__$1);
var G__59700 = null;
var G__59701 = (0);
var G__59702 = (0);
seq__59626 = G__59699;
chunk__59627 = G__59700;
count__59628 = G__59701;
i__59629 = G__59702;
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
var map__59669 = (function (){var G__59670 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550),node], null);
return (app_factory.cljs$core$IFn$_invoke$arity$1 ? app_factory.cljs$core$IFn$_invoke$arity$1(G__59670) : app_factory.call(null,G__59670));
})();
var map__59669__$1 = (((((!((map__59669 == null))))?(((((map__59669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59669):map__59669);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59669__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59669__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137));
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
