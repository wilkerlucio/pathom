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
com.wsscode.pathom.book.app_types.ui_88034 = (function com$wsscode$pathom$book$app_types$make_root_$_ui_88034(){
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.book.app_types.ui_88034.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.app-types","ui_88034","com.wsscode.pathom.book.app-types/ui_88034",1541470169),com.wsscode.pathom.book.app_types.ui_88034);

var x88040_88163 = com.wsscode.pathom.book.app_types.ui_88034.prototype;
x88040_88163.render = ((function (x88040_88163){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__88047 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__88048 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__88049 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__88050 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__88052 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__88053 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__88054 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__88055 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__88056 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__88057 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__88053;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__88054;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__88055;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__88056;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__88057;

try{var map__88063 = fulcro.client.primitives.props(this$);
var map__88063__$1 = (((((!((map__88063 == null))))?(((((map__88063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88063):map__88063);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88063__$1,new cljs.core.Keyword("ui","root","ui/root",-448656785));
var factory = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(Root);
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(root) : factory.call(null,root));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__88052;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__88050;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__88049;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__88048;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__88047;
}});})(x88040_88163))
;


com.wsscode.pathom.book.app_types.ui_88034.prototype.constructor = com.wsscode.pathom.book.app_types.ui_88034;

com.wsscode.pathom.book.app_types.ui_88034.prototype.constructor.displayName = "com.wsscode.pathom.book.app-types/ui_88034";

com.wsscode.pathom.book.app_types.ui_88034.prototype.fulcro$isComponent = true;

var x88071_88168 = com.wsscode.pathom.book.app_types.ui_88034;
x88071_88168.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x88071_88168.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x88071_88168){
return (function (_,params){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id,new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_initial_state(Root,params)], null);
});})(x88071_88168))
;

x88071_88168.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x88071_88168.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x88071_88168){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(Root)], null)], null);
});})(x88071_88168))
;

x88071_88168.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x88071_88168.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x88071_88168){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x88071_88168))
;

x88071_88168.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x88071_88168){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [Root], null);
});})(x88071_88168))
;


var x88085_88171 = com.wsscode.pathom.book.app_types.ui_88034.prototype;
x88085_88171.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x88085_88171.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x88085_88171){
return (function (_,params){
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.core","app-id","fulcro.inspect.core/app-id",-1444290233),app_id,new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_initial_state(Root,params)], null);
});})(x88085_88171))
;

x88085_88171.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x88085_88171.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x88085_88171){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","root","ui/root",-448656785),fulcro.client.primitives.get_query.cljs$core$IFn$_invoke$arity$1(Root)], null)], null);
});})(x88085_88171))
;

x88085_88171.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x88085_88171.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x88085_88171){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x88085_88171))
;

x88085_88171.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x88085_88171){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [Root], null);
});})(x88085_88171))
;


com.wsscode.pathom.book.app_types.ui_88034.cljs$lang$type = true;

com.wsscode.pathom.book.app_types.ui_88034.cljs$lang$ctorStr = "com.wsscode.pathom.book.app-types/ui_88034";

com.wsscode.pathom.book.app_types.ui_88034.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.book.app-types/ui_88034");
});

return com.wsscode.pathom.book.app_types.ui_88034;
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
var seq__88108 = cljs.core.seq(cljs.core.deref(com.wsscode.pathom.book.app_types.apps));
var chunk__88109 = null;
var count__88110 = (0);
var i__88111 = (0);
while(true){
if((i__88111 < count__88110)){
var vec__88130 = chunk__88109.cljs$core$IIndexed$_nth$arity$2(null,i__88111);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88130,(0),null);
var map__88133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88130,(1),null);
var map__88133__$1 = (((((!((map__88133 == null))))?(((((map__88133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88133):map__88133);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88133__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88133__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.book.app_types.apps,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137)], null),fulcro.client.mount,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([root,node], 0));

node.classList.remove("loader");


var G__88186 = seq__88108;
var G__88187 = chunk__88109;
var G__88188 = count__88110;
var G__88189 = (i__88111 + (1));
seq__88108 = G__88186;
chunk__88109 = G__88187;
count__88110 = G__88188;
i__88111 = G__88189;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__88108);
if(temp__5720__auto__){
var seq__88108__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__88108__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__88108__$1);
var G__88191 = cljs.core.chunk_rest(seq__88108__$1);
var G__88192 = c__4550__auto__;
var G__88193 = cljs.core.count(c__4550__auto__);
var G__88194 = (0);
seq__88108 = G__88191;
chunk__88109 = G__88192;
count__88110 = G__88193;
i__88111 = G__88194;
continue;
} else {
var vec__88141 = cljs.core.first(seq__88108__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88141,(0),null);
var map__88144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88141,(1),null);
var map__88144__$1 = (((((!((map__88144 == null))))?(((((map__88144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88144):map__88144);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88144__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88144__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.book.app_types.apps,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137)], null),fulcro.client.mount,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([root,node], 0));

node.classList.remove("loader");


var G__88201 = cljs.core.next(seq__88108__$1);
var G__88202 = null;
var G__88203 = (0);
var G__88204 = (0);
seq__88108 = G__88201;
chunk__88109 = G__88202;
count__88110 = G__88203;
i__88111 = G__88204;
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
var map__88156 = (function (){var G__88157 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.app-types","node","com.wsscode.pathom.book.app-types/node",-1702617550),node], null);
return (app_factory.cljs$core$IFn$_invoke$arity$1 ? app_factory.cljs$core$IFn$_invoke$arity$1(G__88157) : app_factory.call(null,G__88157));
})();
var map__88156__$1 = (((((!((map__88156 == null))))?(((((map__88156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88156):map__88156);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88156__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","root","com.wsscode.pathom.book.app-types/root",773902039));
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88156__$1,new cljs.core.Keyword("com.wsscode.pathom.book.app-types","app","com.wsscode.pathom.book.app-types/app",1458541137));
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
