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
com.wsscode.pathom.book.app_types.ui_49090 = (function com$wsscode$pathom$book$app_types$make_root_$_ui_49090(){
var this__43090__auto__ = this;
React.Component.apply(this__43090__auto__,arguments);

if((!((this__43090__auto__.initLocalState == null)))){
this__43090__auto__.state = this__43090__auto__.initLocalState();
} else {
this__43090__auto__.state = ({});
}

return this__43090__auto__;
});

var G__49196_49284 = com.wsscode.pathom.book.app_types.ui_49090.prototype;
var G__49197_49285 = React.Component.prototype;
var G__49198_49286 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__49196_49284,G__49197_49285,G__49198_49286);

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.app-types","ui_49090","com.wsscode.pathom.book.app-types/ui_49090",-1131545253),com.wsscode.pathom.book.app_types.ui_49090);

var x49199_49287 = com.wsscode.pathom.book.app_types.ui_49090.prototype;
x49199_49287.render = ((function (x49199_49287){
return (function (){
var this__42008__auto__ = this;
var this$ = this__42008__auto__;
var _STAR_reconciler_STAR__orig_val__49211 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__49212 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__49213 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__49214 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__49215 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__49218 = fulcro.client.primitives.get_reconciler(this__42008__auto__);
var _STAR_depth_STAR__temp_val__49219 = (fulcro.client.primitives.depth(this__42008__auto__) + (1));
var _STAR_shared_STAR__temp_val__49220 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__42008__auto__);
var _STAR_instrument_STAR__temp_val__49221 = fulcro.client.primitives.instrument(this__42008__auto__);
var _STAR_parent_STAR__temp_val__49222 = this__42008__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__49218;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__49219;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__49220;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__49221;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__49222;

try{var map__49227 = fulcro.client.primitives.props(this$);
var map__49227__$1 = (((((!((map__49227 == null))))?(((((map__49227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49227):map__49227);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49227__$1,new cljs.core.Keyword("ui","root","ui/root",-448656785));
var factory = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(Root);
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(root) : factory.call(null,root));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__49215;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__49214;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__49213;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__49212;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__49211;
}});})(x49199_49287))
;


com.wsscode.pathom.book.app_types.ui_49090.prototype.constructor = com.wsscode.pathom.book.app_types.ui_49090;

com.wsscode.pathom.book.app_types.ui_49090.prototype.constructor.displayName = "com.wsscode.pathom.book.app-types/ui_49090";

com.wsscode.pathom.book.app_types.ui_49090.prototype.fulcro$isComponent = true;

var x49230_49288 = com.wsscode.pathom.book.app_types.ui_49090;
x49230_49288.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x49230_49288.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x49230_49288){
return (function (_,params){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id,new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_initial_state(Root,params)], null);
});})(x49230_49288))
;

x49230_49288.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x49230_49288.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x49230_49288){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(Root)], null)], null);
});})(x49230_49288))
;

x49230_49288.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x49230_49288.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x49230_49288){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x49230_49288))
;

x49230_49288.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x49230_49288){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [Root], null);
});})(x49230_49288))
;


var x49236_49294 = com.wsscode.pathom.book.app_types.ui_49090.prototype;
x49236_49294.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x49236_49294.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x49236_49294){
return (function (_,params){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id,new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_initial_state(Root,params)], null);
});})(x49236_49294))
;

x49236_49294.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x49236_49294.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x49236_49294){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(Root)], null)], null);
});})(x49236_49294))
;

x49236_49294.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x49236_49294.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x49236_49294){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x49236_49294))
;

x49236_49294.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x49236_49294){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [Root], null);
});})(x49236_49294))
;


com.wsscode.pathom.book.app_types.ui_49090.cljs$lang$type = true;

com.wsscode.pathom.book.app_types.ui_49090.cljs$lang$ctorStr = "com.wsscode.pathom.book.app-types/ui_49090";

com.wsscode.pathom.book.app_types.ui_49090.cljs$lang$ctorPrWriter = (function (this__43093__auto__,writer__43094__auto__,opt__43095__auto__){
return cljs.core._write(writer__43094__auto__,"com.wsscode.pathom.book.app-types/ui_49090");
});

return com.wsscode.pathom.book.app_types.ui_49090;
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
var seq__49241 = cljs.core.seq(cljs.core.deref(com.wsscode.pathom.book.app_types.apps));
var chunk__49242 = null;
var count__49243 = (0);
var i__49244 = (0);
while(true){
if((i__49244 < count__49243)){
var vec__49259 = chunk__49242.cljs$core$IIndexed$_nth$arity$2(null,i__49244);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49259,(0),null);
var map__49262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49259,(1),null);
var map__49262__$1 = (((((!((map__49262 == null))))?(((((map__49262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49262):map__49262);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49262__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49262__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.book.app_types.apps,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137)], null),fulcro.client.mount,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([root,node], 0));

node.classList.remove("loader");


var G__49311 = seq__49241;
var G__49312 = chunk__49242;
var G__49313 = count__49243;
var G__49314 = (i__49244 + (1));
seq__49241 = G__49311;
chunk__49242 = G__49312;
count__49243 = G__49313;
i__49244 = G__49314;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49241);
if(temp__5720__auto__){
var seq__49241__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49241__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49241__$1);
var G__49315 = cljs.core.chunk_rest(seq__49241__$1);
var G__49316 = c__4550__auto__;
var G__49317 = cljs.core.count(c__4550__auto__);
var G__49318 = (0);
seq__49241 = G__49315;
chunk__49242 = G__49316;
count__49243 = G__49317;
i__49244 = G__49318;
continue;
} else {
var vec__49268 = cljs.core.first(seq__49241__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49268,(0),null);
var map__49271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49268,(1),null);
var map__49271__$1 = (((((!((map__49271 == null))))?(((((map__49271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49271):map__49271);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49271__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49271__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.book.app_types.apps,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137)], null),fulcro.client.mount,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([root,node], 0));

node.classList.remove("loader");


var G__49326 = cljs.core.next(seq__49241__$1);
var G__49327 = null;
var G__49328 = (0);
var G__49329 = (0);
seq__49241 = G__49326;
chunk__49242 = G__49327;
count__49243 = G__49328;
i__49244 = G__49329;
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
var map__49281 = (function (){var G__49282 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550),node], null);
return (app_factory.cljs$core$IFn$_invoke$arity$1 ? app_factory.cljs$core$IFn$_invoke$arity$1(G__49282) : app_factory.call(null,G__49282));
})();
var map__49281__$1 = (((((!((map__49281 == null))))?(((((map__49281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49281):map__49281);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49281__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49281__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137));
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
