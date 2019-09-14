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
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","path","com.wsscode.pathom.viz.helpers/path",990898182),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),cljs.core.keyword_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56570){
return cljs.core.vector_QMARK_(G__56570);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","path-map","com.wsscode.pathom.viz.helpers/path-map",-1243534686),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","path","com.wsscode.pathom.viz.helpers/path",990898182),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","path","com.wsscode.pathom.viz.helpers/path",990898182),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","path","com.wsscode.pathom.viz.helpers/path",990898182),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","path","com.wsscode.pathom.viz.helpers/path",990898182),cljs.core.map_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56571){
return cljs.core.map_QMARK_(G__56571);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","path","com.wsscode.pathom.viz.helpers/path",990898182),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","node","com.wsscode.pathom.viz.helpers/node",436985704),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","children","com.wsscode.pathom.viz.helpers/children",1981331596)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","children","com.wsscode.pathom.viz.helpers/children",1981331596)], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__56575){
return cljs.core.map_QMARK_(G__56575);
})], null),(function (G__56575){
return cljs.core.map_QMARK_(G__56575);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","children","com.wsscode.pathom.viz.helpers/children",1981331596)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","children","com.wsscode.pathom.viz.helpers/children",1981331596),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","node","com.wsscode.pathom.viz.helpers/node",436985704)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","node","com.wsscode.pathom.viz.helpers/node",436985704),new cljs.core.Keyword("com.wsscode.pathom.viz.helpers","node","com.wsscode.pathom.viz.helpers/node",436985704),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56580){
return cljs.core.coll_QMARK_(G__56580);
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
var _STAR_print_newline_STAR__orig_val__56589_56702 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56590_56703 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56591_56704 = true;
var _STAR_print_fn_STAR__temp_val__56592_56705 = ((function (_STAR_print_newline_STAR__orig_val__56589_56702,_STAR_print_fn_STAR__orig_val__56590_56703,_STAR_print_newline_STAR__temp_val__56591_56704,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__56589_56702,_STAR_print_fn_STAR__orig_val__56590_56703,_STAR_print_newline_STAR__temp_val__56591_56704,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56591_56704;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56592_56705;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56590_56703;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56589_56702;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
com.wsscode.pathom.viz.helpers.drag_resize = (function com$wsscode$pathom$viz$helpers$drag_resize(this$,p__56600,child){
var map__56601 = p__56600;
var map__56601__$1 = (((((!((map__56601 == null))))?(((((map__56601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56601):map__56601);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56601__$1,new cljs.core.Keyword(null,"attribute","attribute",-2074029119));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56601__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var axis = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56601__$1,new cljs.core.Keyword(null,"axis","axis",-1215390822),"y");
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56601__$1,new cljs.core.Keyword(null,"props","props",453281727));
return React.createElement(module$node_modules$react_draggable$dist$react_draggable.DraggableCore,({"key": "dragHandler", "onStart": ((function (map__56601,map__56601__$1,attribute,default$,axis,props){
return (function (e,dd){
var G__56606_56706 = this$;
var G__56607_56707 = "start";
var G__56608_56708 = goog.object.get(dd,axis);
goog.object.set(G__56606_56706,G__56607_56707,G__56608_56708);

var G__56610 = this$;
var G__56611 = "startSize";
var G__56612 = (function (){var or__4131__auto__ = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,attribute);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
})();
return goog.object.set(G__56610,G__56611,G__56612);
});})(map__56601,map__56601__$1,attribute,default$,axis,props))
, "onDrag": ((function (map__56601,map__56601__$1,attribute,default$,axis,props){
return (function (e,dd){
var start = goog.object.get(this$,"start");
var size = goog.object.get(this$,"startSize");
var value = goog.object.get(dd,axis);
var new_size = (size + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("x",axis))?(value - start):(start - value)));
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.PersistentArrayMap.createAsIfByAssoc([attribute,new_size]));
});})(map__56601,map__56601__$1,attribute,default$,axis,props))
}),fulcro.client.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pointerEvents","pointerEvents",-1429289472),"all",new cljs.core.Keyword(null,"cursor","cursor",1011937484),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("x",axis))?"ew-resize":"ns-resize")], null)], null),props], 0)),fulcro.util.force_children(child)], null),null));
});
com.wsscode.pathom.viz.helpers.pprint = (function com$wsscode$pathom$viz$helpers$pprint(x){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56615_56710 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56616_56711 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56617_56712 = true;
var _STAR_print_fn_STAR__temp_val__56618_56713 = ((function (_STAR_print_newline_STAR__orig_val__56615_56710,_STAR_print_fn_STAR__orig_val__56616_56711,_STAR_print_newline_STAR__temp_val__56617_56712,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__56615_56710,_STAR_print_fn_STAR__orig_val__56616_56711,_STAR_print_newline_STAR__temp_val__56617_56712,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56617_56712;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56618_56713;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56616_56711;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56615_56710;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});
com.wsscode.pathom.viz.helpers.map_vals = (function com$wsscode$pathom$viz$helpers$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,(function (p__56624){
var vec__56625 = p__56624;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56625,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56625,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
}),m);
});
com.wsscode.pathom.viz.helpers.index_by = (function com$wsscode$pathom$viz$helpers$index_by(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var k = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,x);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.helpers","update-value","com.wsscode.pathom.viz.helpers/update-value",-1659426578,null),(function (fulcro_incoming_env,_,p__56642){
var map__56643 = p__56642;
var map__56643__$1 = (((((!((map__56643 == null))))?(((((map__56643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56643):map__56643);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56643__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56643__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56643__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__56645 = fulcro_incoming_env;
var map__56645__$1 = (((((!((map__56645 == null))))?(((((map__56645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56645):map__56645);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56645__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56645__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__56645,map__56645__$1,state,ref,map__56643,map__56643__$1,key,fn,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,ref,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,((function (map__56645,map__56645__$1,state,ref,map__56643,map__56643__$1,key,fn,args){
return (function (p1__56639_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fn,p1__56639_SHARP_,args);
});})(map__56645,map__56645__$1,state,ref,map__56643,map__56643__$1,key,fn,args))
], 0));
});})(map__56645,map__56645__$1,state,ref,map__56643,map__56643__$1,key,fn,args))
], null);
})()], 0));
}));
/**
 * Helper to call transaction to update some key from current component.
 */
com.wsscode.pathom.viz.helpers.update_value_BANG_ = (function com$wsscode$pathom$viz$helpers$update_value_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56720 = arguments.length;
var i__4731__auto___56721 = (0);
while(true){
if((i__4731__auto___56721 < len__4730__auto___56720)){
args__4736__auto__.push((arguments[i__4731__auto___56721]));

var G__56722 = (i__4731__auto___56721 + (1));
i__4731__auto___56721 = G__56722;
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
com.wsscode.pathom.viz.helpers.update_value_BANG_.cljs$lang$applyTo = (function (seq56648){
var G__56649 = cljs.core.first(seq56648);
var seq56648__$1 = cljs.core.next(seq56648);
var G__56650 = cljs.core.first(seq56648__$1);
var seq56648__$2 = cljs.core.next(seq56648__$1);
var G__56651 = cljs.core.first(seq56648__$2);
var seq56648__$3 = cljs.core.next(seq56648__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56649,G__56650,G__56651,seq56648__$3);
});

com.wsscode.pathom.viz.helpers.toggle_set_item = (function com$wsscode$pathom$viz$helpers$toggle_set_item(set,item){
if(cljs.core.contains_QMARK_(set,item)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(set,item);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(set,item);
}
});
com.wsscode.pathom.viz.helpers.vector_compare = (function com$wsscode$pathom$viz$helpers$vector_compare(p__56653,p__56654){
while(true){
var vec__56655 = p__56653;
var seq__56656 = cljs.core.seq(vec__56655);
var first__56657 = cljs.core.first(seq__56656);
var seq__56656__$1 = cljs.core.next(seq__56656);
var value1 = first__56657;
var rest1 = seq__56656__$1;
var vec__56658 = p__56654;
var seq__56659 = cljs.core.seq(vec__56658);
var first__56660 = cljs.core.first(seq__56659);
var seq__56659__$1 = cljs.core.next(seq__56659);
var value2 = first__56660;
var rest2 = seq__56659__$1;
var result = cljs.core.compare(value1,value2);
if((!((result === (0))))){
return result;
} else {
if((value1 == null)){
return (0);
} else {
var G__56727 = rest1;
var G__56728 = rest2;
p__56653 = G__56727;
p__56654 = G__56728;
continue;

}
}
break;
}
});
com.wsscode.pathom.viz.helpers.remove_not_found = (function com$wsscode$pathom$viz$helpers$remove_not_found(x){
return com.wsscode.pathom.core.transduce_maps(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__56661){
var vec__56662 = p__56661;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56662,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56662,(1),null);
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
var map__56692 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__56693,path){
var map__56694 = p__56693;
var map__56694__$1 = (((((!((map__56694 == null))))?(((((map__56694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56694):map__56694);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56694__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56694__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if((cljs.core.count(path) > (1))){
var prev = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),(cljs.core.count(path) - (1)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev,new cljs.core.Keyword(null,"children","children",-940561982)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,path))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(items,cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,path)),new cljs.core.Keyword(null,"index","index",-1531685915),index], null);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"index","index",-1531685915),path_map], null),cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (p1__56668_SHARP_,p2__56667_SHARP_){
return com.wsscode.pathom.viz.helpers.vector_compare(p2__56667_SHARP_,p1__56668_SHARP_);
}),cljs.core.keys(path_map)));
var map__56692__$1 = (((((!((map__56692 == null))))?(((((map__56692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56692):map__56692);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56692__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),items], null);
});

//# sourceMappingURL=com.wsscode.pathom.viz.helpers.js.map
