goog.provide('com.wsscode.pathom.viz.helpers');
goog.require('cljs.core');
var module$node_modules$react_draggable$dist$react_draggable=shadow.js.require("module$node_modules$react_draggable$dist$react_draggable", {});
goog.require('ghostwheel.core');
goog.require('cljs.pprint');
goog.require('fulcro.client.dom');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.mutations');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('cljs.spec.alpha');
goog.require('com.wsscode.pathom.core');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","path","com.wsscode.pathom.viz.helpers/path",990898182),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.keyword_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__57160){
return cljs.core.vector_QMARK_(G__57160);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","path-map","com.wsscode.pathom.viz.helpers/path-map",-1243534686),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","path","com.wsscode.pathom.viz.helpers/path",990898182),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","path","com.wsscode.pathom.viz.helpers/path",990898182),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","path","com.wsscode.pathom.viz.helpers/path",990898182),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","path","com.wsscode.pathom.viz.helpers/path",990898182),cljs.core.map_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__57161){
return cljs.core.map_QMARK_(G__57161);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","path","com.wsscode.pathom.viz.helpers/path",990898182),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","node","com.wsscode.pathom.viz.helpers/node",436985704),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","children","com.wsscode.pathom.viz.helpers/children",1981331596)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","children","com.wsscode.pathom.viz.helpers/children",1981331596)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__57165){
return cljs.core.map_QMARK_(G__57165);
})], null),(function (G__57165){
return cljs.core.map_QMARK_(G__57165);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","children","com.wsscode.pathom.viz.helpers/children",1981331596)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","children","com.wsscode.pathom.viz.helpers/children",1981331596),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","node","com.wsscode.pathom.viz.helpers/node",436985704)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","node","com.wsscode.pathom.viz.helpers/node",436985704),new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","node","com.wsscode.pathom.viz.helpers/node",436985704),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__57175){
return cljs.core.coll_QMARK_(G__57175);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","node","com.wsscode.pathom.viz.helpers/node",436985704))], null),null));
com.wsscode.pathom.viz.helpers.pd = (function com$wsscode$pathom$viz$helpers$pd(f){
return (function (e){
e.preventDefault();

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));
});
});
com.wsscode.pathom.viz.helpers.target_value = (function com$wsscode$pathom$viz$helpers$target_value(e){
return goog.object.getValueByKeys(e,"target","value");
});
com.wsscode.pathom.viz.helpers.stringify_keyword_values = (function com$wsscode$pathom$viz$helpers$stringify_keyword_values(x){
return clojure.walk.prewalk((function (x__$1){
if(cljs.core.simple_keyword_QMARK_(x__$1)){
return cljs.core.name(x__$1);
} else {
if(cljs.core.truth_(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x__$1))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1);
} else {
return x__$1;

}
}
}),x);
});
com.wsscode.pathom.viz.helpers.pprint_str = (function com$wsscode$pathom$viz$helpers$pprint_str(x){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57192_57279 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57193_57280 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57194_57281 = true;
var _STAR_print_fn_STAR__temp_val__57195_57282 = ((function (_STAR_print_newline_STAR__orig_val__57192_57279,_STAR_print_fn_STAR__orig_val__57193_57280,_STAR_print_newline_STAR__temp_val__57194_57281,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__57192_57279,_STAR_print_fn_STAR__orig_val__57193_57280,_STAR_print_newline_STAR__temp_val__57194_57281,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57194_57281;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57195_57282;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57193_57280;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57192_57279;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
com.wsscode.pathom.viz.helpers.drag_resize = (function com$wsscode$pathom$viz$helpers$drag_resize(this$,p__57198,child){
var map__57199 = p__57198;
var map__57199__$1 = (((((!((map__57199 == null))))?(((((map__57199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57199):map__57199);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57199__$1,new cljs.core.Keyword(null,"attribute","attribute",-2074029119));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57199__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var axis = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57199__$1,new cljs.core.Keyword(null,"axis","axis",-1215390822),"y");
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57199__$1,new cljs.core.Keyword(null,"props","props",453281727));
return React.createElement(module$node_modules$react_draggable$dist$react_draggable.DraggableCore,({"key": "dragHandler", "onStart": ((function (map__57199,map__57199__$1,attribute,default$,axis,props){
return (function (e,dd){
var G__57203_57283 = this$;
var G__57204_57284 = "start";
var G__57205_57285 = goog.object.get(dd,axis);
goog.object.set(G__57203_57283,G__57204_57284,G__57205_57285);

var G__57210 = this$;
var G__57211 = "startSize";
var G__57212 = (function (){var or__4131__auto__ = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,attribute);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
})();
return goog.object.set(G__57210,G__57211,G__57212);
});})(map__57199,map__57199__$1,attribute,default$,axis,props))
, "onDrag": ((function (map__57199,map__57199__$1,attribute,default$,axis,props){
return (function (e,dd){
var start = goog.object.get(this$,"start");
var size = goog.object.get(this$,"startSize");
var value = goog.object.get(dd,axis);
var new_size = (size + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("x",axis))?(value - start):(start - value)));
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.PersistentArrayMap.createAsIfByAssoc([attribute,new_size]));
});})(map__57199,map__57199__$1,attribute,default$,axis,props))
}),fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pointerEvents","pointerEvents",-1429289472),"all",new cljs.core.Keyword(null,"cursor","cursor",1011937484),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("x",axis))?"ew-resize":"ns-resize")], null)], null),props], 0)),fulcro.util.force_children(child)], null),null));
});
com.wsscode.pathom.viz.helpers.pprint = (function com$wsscode$pathom$viz$helpers$pprint(x){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57216_57287 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57217_57288 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57218_57289 = true;
var _STAR_print_fn_STAR__temp_val__57219_57290 = ((function (_STAR_print_newline_STAR__orig_val__57216_57287,_STAR_print_fn_STAR__orig_val__57217_57288,_STAR_print_newline_STAR__temp_val__57218_57289,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__57216_57287,_STAR_print_fn_STAR__orig_val__57217_57288,_STAR_print_newline_STAR__temp_val__57218_57289,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57218_57289;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57219_57290;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57217_57288;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57216_57287;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
com.wsscode.pathom.viz.helpers.map_vals = (function com$wsscode$pathom$viz$helpers$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,(function (p__57224){
var vec__57228 = p__57224;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57228,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57228,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
}),m);
});
com.wsscode.pathom.viz.helpers.index_by = (function com$wsscode$pathom$viz$helpers$index_by(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var k = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,x);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.helpers","update-value","com.wsscode.pathom.viz.helpers/update-value",-1659426578,null),(function (fulcro_incoming_env,_,p__57233){
var map__57234 = p__57233;
var map__57234__$1 = (((((!((map__57234 == null))))?(((((map__57234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57234):map__57234);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57234__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57234__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57234__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__57236 = fulcro_incoming_env;
var map__57236__$1 = (((((!((map__57236 == null))))?(((((map__57236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57236):map__57236);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57236__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57236__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__57236,map__57236__$1,state,ref,map__57234,map__57234__$1,key,fn,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,((function (map__57236,map__57236__$1,state,ref,map__57234,map__57234__$1,key,fn,args){
return (function (p1__57232_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fn,p1__57232_SHARP_,args);
});})(map__57236,map__57236__$1,state,ref,map__57234,map__57234__$1,key,fn,args))
], 0));
});})(map__57236,map__57236__$1,state,ref,map__57234,map__57234__$1,key,fn,args))
], null);
})()], 0));
}));
/**
 * Helper to call transaction to update some key from current component.
 */
com.wsscode.pathom.viz.helpers.update_value_BANG_ = (function com$wsscode$pathom$viz$helpers$update_value_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___57292 = arguments.length;
var i__4731__auto___57293 = (0);
while(true){
if((i__4731__auto___57293 < len__4730__auto___57292)){
args__4736__auto__.push((arguments[i__4731__auto___57293]));

var G__57294 = (i__4731__auto___57293 + (1));
i__4731__auto___57293 = G__57294;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return com.wsscode.pathom.viz.helpers.update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

com.wsscode.pathom.viz.helpers.update_value_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,key,fn,args){
return fulcro.client.primitives.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.helpers","update-value","com.wsscode.pathom.viz.helpers/update-value",-1659426578,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"key","key",-1516042587),null,(1),null)),(new cljs.core.List(null,key,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,(1),null)),(new cljs.core.List(null,fn,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"args","args",1315556576),null,(1),null)),(new cljs.core.List(null,args,null,(1),null))], 0))))),null,(1),null)))))], null));
});

com.wsscode.pathom.viz.helpers.update_value_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
com.wsscode.pathom.viz.helpers.update_value_BANG_.cljs$lang$applyTo = (function (seq57238){
var G__57239 = cljs.core.first(seq57238);
var seq57238__$1 = cljs.core.next(seq57238);
var G__57240 = cljs.core.first(seq57238__$1);
var seq57238__$2 = cljs.core.next(seq57238__$1);
var G__57241 = cljs.core.first(seq57238__$2);
var seq57238__$3 = cljs.core.next(seq57238__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57239,G__57240,G__57241,seq57238__$3);
});

com.wsscode.pathom.viz.helpers.toggle_set_item = (function com$wsscode$pathom$viz$helpers$toggle_set_item(set,item){
if(cljs.core.contains_QMARK_(set,item)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(set,item);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(set,item);
}
});
com.wsscode.pathom.viz.helpers.vector_compare = (function com$wsscode$pathom$viz$helpers$vector_compare(p__57246,p__57247){
while(true){
var vec__57248 = p__57246;
var seq__57249 = cljs.core.seq(vec__57248);
var first__57250 = cljs.core.first(seq__57249);
var seq__57249__$1 = cljs.core.next(seq__57249);
var value1 = first__57250;
var rest1 = seq__57249__$1;
var vec__57251 = p__57247;
var seq__57252 = cljs.core.seq(vec__57251);
var first__57253 = cljs.core.first(seq__57252);
var seq__57252__$1 = cljs.core.next(seq__57252);
var value2 = first__57253;
var rest2 = seq__57252__$1;
var result = cljs.core.compare(value1,value2);
if((!((result === (0))))){
return result;
} else {
if((value1 == null)){
return (0);
} else {
var G__57296 = rest1;
var G__57297 = rest2;
p__57246 = G__57296;
p__57247 = G__57297;
continue;

}
}
break;
}
});
com.wsscode.pathom.viz.helpers.remove_not_found = (function com$wsscode$pathom$viz$helpers$remove_not_found(x){
return com.wsscode.pathom.core.transduce_maps(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__57258){
var vec__57259 = p__57258;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57259,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57259,(1),null);
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null,new cljs.core.Keyword("fulcro.client.primitives","not-found","fulcro.client.primitives/not-found",941693912),null], null), null),v);
})),x);
});
/**
 * Generate a tree structure from a map of maps to data. For example, the given structure:
 * 
 *   {[:a] {:any data}
 * [:a :b] {:more data}
 * [:c] {:key foo}}
 * 
 * It will return:
 * 
 * {:children [{:any data
 *              :children [{:more data}]}
 *             {:key foo}]}
 */
com.wsscode.pathom.viz.helpers.path_map__GT_tree = (function com$wsscode$pathom$viz$helpers$path_map__GT_tree(path_map){
var map__57269 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__57270,path){
var map__57271 = p__57270;
var map__57271__$1 = (((((!((map__57271 == null))))?(((((map__57271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57271):map__57271);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57271__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57271__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if((cljs.core.count(path) > (1))){
var prev = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),(cljs.core.count(path) - (1)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev,new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,path))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(items,cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,path)),new cljs.core.Keyword(null,"index","index",-1531685915),index], null);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"index","index",-1531685915),path_map], null),cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (p1__57263_SHARP_,p2__57262_SHARP_){
return com.wsscode.pathom.viz.helpers.vector_compare(p2__57262_SHARP_,p1__57263_SHARP_);
}),cljs.core.keys(path_map)));
var map__57269__$1 = (((((!((map__57269 == null))))?(((((map__57269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57269):map__57269);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57269__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),items], null);
});

//# sourceMappingURL=com.wsscode.pathom.viz.helpers.js.map
