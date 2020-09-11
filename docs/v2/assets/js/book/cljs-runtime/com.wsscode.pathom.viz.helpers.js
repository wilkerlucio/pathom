goog.provide('com.wsscode.pathom.viz.helpers');
goog.require('cljs.core');
var module$node_modules$react_draggable$dist$react_draggable=shadow.js.require("module$node_modules$react_draggable$dist$react_draggable", {});
goog.require('com.fulcrologic.guardrails.core');
goog.require('cljs.pprint');
goog.require('fulcro.client.dom');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.mutations');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('cljs.spec.alpha');
goog.require('com.wsscode.pathom.core');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","path","com.wsscode.pathom.viz.helpers/path",990898182),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.keyword_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__54346){
return cljs.core.vector_QMARK_(G__54346);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","path-map","com.wsscode.pathom.viz.helpers/path-map",-1243534686),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","path","com.wsscode.pathom.viz.helpers/path",990898182),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","path","com.wsscode.pathom.viz.helpers/path",990898182),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","path","com.wsscode.pathom.viz.helpers/path",990898182),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","path","com.wsscode.pathom.viz.helpers/path",990898182),cljs.core.map_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__54348){
return cljs.core.map_QMARK_(G__54348);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13301__auto__,v__13302__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13302__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","path","com.wsscode.pathom.viz.helpers/path",990898182),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","node","com.wsscode.pathom.viz.helpers/node",436985704),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","children","com.wsscode.pathom.viz.helpers/children",1981331596)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","children","com.wsscode.pathom.viz.helpers/children",1981331596)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__54350){
return cljs.core.map_QMARK_(G__54350);
})], null),(function (G__54350){
return cljs.core.map_QMARK_(G__54350);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","children","com.wsscode.pathom.viz.helpers/children",1981331596)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","children","com.wsscode.pathom.viz.helpers/children",1981331596),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","node","com.wsscode.pathom.viz.helpers/node",436985704)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","node","com.wsscode.pathom.viz.helpers/node",436985704),new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","node","com.wsscode.pathom.viz.helpers/node",436985704),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__54357){
return cljs.core.coll_QMARK_(G__54357);
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
var _STAR_print_newline_STAR__orig_val__54361_54555 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54362_54556 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54363_54557 = true;
var _STAR_print_fn_STAR__temp_val__54364_54558 = ((function (_STAR_print_newline_STAR__orig_val__54361_54555,_STAR_print_fn_STAR__orig_val__54362_54556,_STAR_print_newline_STAR__temp_val__54363_54557,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__54361_54555,_STAR_print_fn_STAR__orig_val__54362_54556,_STAR_print_newline_STAR__temp_val__54363_54557,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54363_54557;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54364_54558;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54362_54556;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54361_54555;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
com.wsscode.pathom.viz.helpers.drag_resize = (function com$wsscode$pathom$viz$helpers$drag_resize(this$,p__54368,child){
var map__54371 = p__54368;
var map__54371__$1 = (((((!((map__54371 == null))))?(((((map__54371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54371):map__54371);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54371__$1,new cljs.core.Keyword(null,"attribute","attribute",-2074029119));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54371__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var axis = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54371__$1,new cljs.core.Keyword(null,"axis","axis",-1215390822),"y");
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54371__$1,new cljs.core.Keyword(null,"props","props",453281727));
return React.createElement(module$node_modules$react_draggable$dist$react_draggable.DraggableCore,({"key": "dragHandler", "onStart": ((function (map__54371,map__54371__$1,attribute,default$,axis,props){
return (function (e,dd){
goog.object.set(this$,"start",goog.object.get(dd,axis));

return goog.object.set(this$,"startSize",(function (){var or__4131__auto__ = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,attribute);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
})());
});})(map__54371,map__54371__$1,attribute,default$,axis,props))
, "onDrag": ((function (map__54371,map__54371__$1,attribute,default$,axis,props){
return (function (e,dd){
var start = goog.object.get(this$,"start");
var size = goog.object.get(this$,"startSize");
var value = goog.object.get(dd,axis);
var new_size = (size + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("x",axis))?(value - start):(start - value)));
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.PersistentArrayMap.createAsIfByAssoc([attribute,new_size]));
});})(map__54371,map__54371__$1,attribute,default$,axis,props))
}),fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pointerEvents","pointerEvents",-1429289472),"all",new cljs.core.Keyword(null,"cursor","cursor",1011937484),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("x",axis))?"ew-resize":"ns-resize")], null)], null),props], 0)),fulcro.util.force_children(child)], null),null));
});
com.wsscode.pathom.viz.helpers.pprint = (function com$wsscode$pathom$viz$helpers$pprint(x){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54419_54567 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54420_54568 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54421_54569 = true;
var _STAR_print_fn_STAR__temp_val__54422_54570 = ((function (_STAR_print_newline_STAR__orig_val__54419_54567,_STAR_print_fn_STAR__orig_val__54420_54568,_STAR_print_newline_STAR__temp_val__54421_54569,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__54419_54567,_STAR_print_fn_STAR__orig_val__54420_54568,_STAR_print_newline_STAR__temp_val__54421_54569,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54421_54569;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54422_54570;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54420_54568;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54419_54567;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
com.wsscode.pathom.viz.helpers.map_vals = (function com$wsscode$pathom$viz$helpers$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,(function (p__54425){
var vec__54426 = p__54425;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54426,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54426,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
}),m);
});
com.wsscode.pathom.viz.helpers.index_by = (function com$wsscode$pathom$viz$helpers$index_by(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var k = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,x);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.helpers","update-value","com.wsscode.pathom.viz.helpers/update-value",-1659426578,null),(function (fulcro_incoming_env,_,p__54436){
var map__54437 = p__54436;
var map__54437__$1 = (((((!((map__54437 == null))))?(((((map__54437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54437):map__54437);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54437__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54437__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54437__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__54451 = fulcro_incoming_env;
var map__54451__$1 = (((((!((map__54451 == null))))?(((((map__54451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54451):map__54451);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54451__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54451__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__54451,map__54451__$1,state,ref,map__54437,map__54437__$1,key,fn,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,((function (map__54451,map__54451__$1,state,ref,map__54437,map__54437__$1,key,fn,args){
return (function (p1__54431_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fn,p1__54431_SHARP_,args);
});})(map__54451,map__54451__$1,state,ref,map__54437,map__54437__$1,key,fn,args))
], 0));
});})(map__54451,map__54451__$1,state,ref,map__54437,map__54437__$1,key,fn,args))
], null);
})()], 0));
}));
/**
 * Helper to call transaction to update some key from current component.
 */
com.wsscode.pathom.viz.helpers.update_value_BANG_ = (function com$wsscode$pathom$viz$helpers$update_value_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___54580 = arguments.length;
var i__4731__auto___54582 = (0);
while(true){
if((i__4731__auto___54582 < len__4730__auto___54580)){
args__4736__auto__.push((arguments[i__4731__auto___54582]));

var G__54583 = (i__4731__auto___54582 + (1));
i__4731__auto___54582 = G__54583;
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
com.wsscode.pathom.viz.helpers.update_value_BANG_.cljs$lang$applyTo = (function (seq54458){
var G__54459 = cljs.core.first(seq54458);
var seq54458__$1 = cljs.core.next(seq54458);
var G__54460 = cljs.core.first(seq54458__$1);
var seq54458__$2 = cljs.core.next(seq54458__$1);
var G__54461 = cljs.core.first(seq54458__$2);
var seq54458__$3 = cljs.core.next(seq54458__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54459,G__54460,G__54461,seq54458__$3);
});

com.wsscode.pathom.viz.helpers.toggle_set_item = (function com$wsscode$pathom$viz$helpers$toggle_set_item(set,item){
if(cljs.core.contains_QMARK_(set,item)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(set,item);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(set,item);
}
});
com.wsscode.pathom.viz.helpers.vector_compare = (function com$wsscode$pathom$viz$helpers$vector_compare(p__54494,p__54495){
while(true){
var vec__54496 = p__54494;
var seq__54497 = cljs.core.seq(vec__54496);
var first__54498 = cljs.core.first(seq__54497);
var seq__54497__$1 = cljs.core.next(seq__54497);
var value1 = first__54498;
var rest1 = seq__54497__$1;
var vec__54499 = p__54495;
var seq__54500 = cljs.core.seq(vec__54499);
var first__54501 = cljs.core.first(seq__54500);
var seq__54500__$1 = cljs.core.next(seq__54500);
var value2 = first__54501;
var rest2 = seq__54500__$1;
var result = cljs.core.compare(value1,value2);
if((!((result === (0))))){
return result;
} else {
if((value1 == null)){
return (0);
} else {
var G__54626 = rest1;
var G__54627 = rest2;
p__54494 = G__54626;
p__54495 = G__54627;
continue;

}
}
break;
}
});
com.wsscode.pathom.viz.helpers.remove_not_found = (function com$wsscode$pathom$viz$helpers$remove_not_found(x){
return com.wsscode.pathom.core.transduce_maps(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__54504){
var vec__54505 = p__54504;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54505,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54505,(1),null);
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
var map__54513 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__54514,path){
var map__54515 = p__54514;
var map__54515__$1 = (((((!((map__54515 == null))))?(((((map__54515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54515):map__54515);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54515__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54515__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if((cljs.core.count(path) > (1))){
var prev = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),(cljs.core.count(path) - (1)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev,new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,path))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(items,cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,path)),new cljs.core.Keyword(null,"index","index",-1531685915),index], null);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"index","index",-1531685915),path_map], null),cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (p1__54511_SHARP_,p2__54510_SHARP_){
return com.wsscode.pathom.viz.helpers.vector_compare(p2__54510_SHARP_,p1__54511_SHARP_);
}),cljs.core.keys(path_map)));
var map__54513__$1 = (((((!((map__54513 == null))))?(((((map__54513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54513):map__54513);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54513__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),items], null);
});

//# sourceMappingURL=com.wsscode.pathom.viz.helpers.js.map
