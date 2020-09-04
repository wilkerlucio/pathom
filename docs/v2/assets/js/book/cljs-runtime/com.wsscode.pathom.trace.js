goog.provide('com.wsscode.pathom.trace');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('clojure.walk');
goog.require('com.fulcrologic.guardrails.core');
goog.require('com.wsscode.async.async_cljs');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.trace","direction","com.wsscode.pathom.trace/direction",-1450972914),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","leave","com.wsscode.pathom.trace/leave",-499718108),"null",new cljs.core.Keyword("com.wsscode.pathom.trace","enter","com.wsscode.pathom.trace/enter",-1518635329),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","leave","com.wsscode.pathom.trace/leave",-499718108),null,new cljs.core.Keyword("com.wsscode.pathom.trace","enter","com.wsscode.pathom.trace/enter",-1518635329),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.trace","timestamp","com.wsscode.pathom.trace/timestamp",1867371402),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),cljs.core.nat_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),cljs.core.nat_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null),cljs.core.nat_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.trace","event-entry","com.wsscode.pathom.trace/event-entry",-1763284409),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__54534){
return cljs.core.map_QMARK_(G__54534);
})], null),(function (G__54534){
return cljs.core.map_QMARK_(G__54534);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.trace","event-entry","com.wsscode.pathom.trace/event-entry",-1763284409),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.trace","event-entry","com.wsscode.pathom.trace/event-entry",-1763284409),new cljs.core.Keyword("com.wsscode.pathom.trace","event-entry","com.wsscode.pathom.trace/event-entry",-1763284409),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__54541){
return cljs.core.vector_QMARK_(G__54541);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.trace","event-entry","com.wsscode.pathom.trace/event-entry",-1763284409),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
com.wsscode.pathom.trace.now = (function com$wsscode$pathom$trace$now(){
return cljs.core.inst_ms((new Date()));
});
com.wsscode.pathom.trace.trace = (function com$wsscode$pathom$trace$trace(env,event){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
if(cljs.core.truth_(temp__5718__auto__)){
var event_trace = temp__5718__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(event_trace,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(event,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661).cljs$core$IFn$_invoke$arity$2(env,cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.trace","timestamp","com.wsscode.pathom.trace/timestamp",1867371402),com.wsscode.pathom.trace.now()], 0)));
} else {
return null;
}
});
com.wsscode.pathom.trace.trace_enter = (function com$wsscode$pathom$trace$trace_enter(var_args){
var G__54551 = arguments.length;
switch (G__54551) {
case 2:
return com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2 = (function (env,event){
var id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("pathom-trace-");
com.wsscode.pathom.trace.trace(env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(event,new cljs.core.Keyword("com.wsscode.pathom.trace","direction","com.wsscode.pathom.trace/direction",-1450972914),new cljs.core.Keyword("com.wsscode.pathom.trace","enter","com.wsscode.pathom.trace/enter",-1518635329),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.trace","id","com.wsscode.pathom.trace/id",-1736155805),id], 0)));

return id;
});

com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$3 = (function (env,event,trace_id){
com.wsscode.pathom.trace.trace(env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(event,new cljs.core.Keyword("com.wsscode.pathom.trace","direction","com.wsscode.pathom.trace/direction",-1450972914),new cljs.core.Keyword("com.wsscode.pathom.trace","enter","com.wsscode.pathom.trace/enter",-1518635329),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.trace","id","com.wsscode.pathom.trace/id",-1736155805),trace_id], 0)));

return trace_id;
});

com.wsscode.pathom.trace.trace_enter.cljs$lang$maxFixedArity = 3;

com.wsscode.pathom.trace.trace_leave = (function com$wsscode$pathom$trace$trace_leave(var_args){
var G__54561 = arguments.length;
switch (G__54561) {
case 2:
return com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$2 = (function (env,trace_id){
return com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","direction","com.wsscode.pathom.trace/direction",-1450972914),new cljs.core.Keyword("com.wsscode.pathom.trace","leave","com.wsscode.pathom.trace/leave",-499718108),new cljs.core.Keyword("com.wsscode.pathom.trace","id","com.wsscode.pathom.trace/id",-1736155805),trace_id], null));
});

com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3 = (function (env,trace_id,event){
com.wsscode.pathom.trace.trace(env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(event,new cljs.core.Keyword("com.wsscode.pathom.trace","direction","com.wsscode.pathom.trace/direction",-1450972914),new cljs.core.Keyword("com.wsscode.pathom.trace","leave","com.wsscode.pathom.trace/leave",-499718108),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.trace","id","com.wsscode.pathom.trace/id",-1736155805),trace_id], 0)));

return trace_id;
});

com.wsscode.pathom.trace.trace_leave.cljs$lang$maxFixedArity = 3;

com.wsscode.pathom.trace.live_trace_BANG_ = (function com$wsscode$pathom$trace$live_trace_BANG_(trace_atom){
return cljs.core.add_watch(trace_atom,new cljs.core.Keyword(null,"live","live",-1610148039),(function (_,___$1,___$2,n){
var evt = cljs.core.peek(n);
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983).cljs$core$IFn$_invoke$arity$1(evt),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(evt,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983))], null)], 0)),"\n"].join('')], 0));
}));
});
com.wsscode.pathom.trace.compute_durations = (function com$wsscode$pathom$trace$compute_durations(trace){
var leave_items = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__54576_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.trace","leave","com.wsscode.pathom.trace/leave",-499718108),p1__54576_SHARP_);
}),new cljs.core.Keyword("com.wsscode.pathom.trace","direction","com.wsscode.pathom.trace/direction",-1450972914))),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.trace","id","com.wsscode.pathom.trace/id",-1736155805),cljs.core.identity))),trace);
var initial_time = new cljs.core.Keyword("com.wsscode.pathom.trace","timestamp","com.wsscode.pathom.trace/timestamp",1867371402).cljs$core$IFn$_invoke$arity$1(cljs.core.first(trace));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (leave_items,initial_time){
return (function (e){

return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.trace","leave","com.wsscode.pathom.trace/leave",-499718108),new cljs.core.Keyword("com.wsscode.pathom.trace","direction","com.wsscode.pathom.trace/direction",-1450972914).cljs$core$IFn$_invoke$arity$1(e));
});})(leave_items,initial_time))
),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (leave_items,initial_time){
return (function (p__54582){
var map__54583 = p__54582;
var map__54583__$1 = (((((!((map__54583 == null))))?(((((map__54583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54583):map__54583);
var e = map__54583__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54583__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","id","com.wsscode.pathom.trace/id",-1736155805));
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54583__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","timestamp","com.wsscode.pathom.trace/timestamp",1867371402));
var e__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(e,new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),(timestamp - initial_time));
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(leave_items,id);
if(cljs.core.truth_(temp__5718__auto__)){
var map__54590 = temp__5718__auto__;
var map__54590__$1 = (((((!((map__54590 == null))))?(((((map__54590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54590):map__54590);
var leave = map__54590__$1;
var et = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54590__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","timestamp","com.wsscode.pathom.trace/timestamp",1867371402));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(e__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","timestamp-leave","com.wsscode.pathom.trace/timestamp-leave",-1879905911),et,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295),(et - timestamp)], 0)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(leave,new cljs.core.Keyword("com.wsscode.pathom.trace","timestamp","com.wsscode.pathom.trace/timestamp",1867371402))], 0)),new cljs.core.Keyword("com.wsscode.pathom.trace","id","com.wsscode.pathom.trace/id",-1736155805),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.trace","direction","com.wsscode.pathom.trace/direction",-1450972914)], 0));
} else {
return e__$1;
}
});})(leave_items,initial_time))
)),trace);
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.trace !== 'undefined') && (typeof com.wsscode.pathom.trace.trace_tree_collect !== 'undefined')){
} else {
com.wsscode.pathom.trace.trace_tree_collect = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__54597 = cljs.core.get_global_hierarchy;
return (fexpr__54597.cljs$core$IFn$_invoke$arity$0 ? fexpr__54597.cljs$core$IFn$_invoke$arity$0() : fexpr__54597.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.wsscode.pathom.trace","trace-tree-collect"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (_x,row){
return new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983).cljs$core$IFn$_invoke$arity$1(row);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
com.wsscode.pathom.trace.trace_tree_collect.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x,_){
return x;
}));
com.wsscode.pathom.trace.tree_assoc_detail = (function com$wsscode$pathom$trace$tree_assoc_detail(row,x,keys){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)], null),keys)));
});
com.wsscode.pathom.trace.trace_style = (function com$wsscode$pathom$trace$trace_style(row,style){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row,new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),style);
});
com.wsscode.pathom.trace.tree_assoc_key_detail = (function com$wsscode$pathom$trace$tree_assoc_key_detail(p__54601,x,keys){
var map__54602 = p__54601;
var map__54602__$1 = (((((!((map__54602 == null))))?(((((map__54602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54602):map__54602);
var row = map__54602__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54602__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),key,new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)], null),keys)));
});
com.wsscode.pathom.trace.trace__GT_tree_STAR_ = (function com$wsscode$pathom$trace$trace__GT_tree_STAR_(paths,path){
return new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (x,p__54605){
var map__54606 = p__54605;
var map__54606__$1 = (((((!((map__54606 == null))))?(((((map__54606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54606):map__54606);
var row = map__54606__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54606__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983));
var relative_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54606__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54606__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var G__54608 = event;
var G__54608__$1 = (((G__54608 instanceof cljs.core.Keyword))?G__54608.fqn:null);
switch (G__54608__$1) {
case "com.wsscode.pathom.core/trace-plugin":
case "com.wsscode.pathom.parser/parse-loop":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"response","response",-1068424192),((function (G__54608,G__54608__$1,map__54606,map__54606__$1,row,event,relative_timestamp,key){
return (function (p1__54604_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661)], null)),p1__54604_SHARP_], 0));
});})(G__54608,G__54608__$1,map__54606,map__54606__$1,row,event,relative_timestamp,key))
);

break;
case "com.wsscode.pathom.parser/process-key":
var next_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,key);
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(x),next_path)){
return x;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.assoc_in(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661)], null),path),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),key], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.trace.trace__GT_tree_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.trace.trace__GT_tree_STAR_.cljs$core$IFn$_invoke$arity$2(paths,next_path) : com.wsscode.pathom.trace.trace__GT_tree_STAR_.call(null,paths,next_path)),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700)], null))], 0)),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),next_path)),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.conj,next_path);
}

break;
case "com.wsscode.pathom.core/join-seq":
var count = new cljs.core.Keyword("com.wsscode.pathom.core","seq-count","com.wsscode.pathom.core/seq-count",-1671473836).cljs$core$IFn$_invoke$arity$1(row);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (count,G__54608,G__54608__$1,map__54606,map__54606__$1,row,event,relative_timestamp,key){
return (function (x__$1,i){
var next_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
return cljs.core.assoc_in(x__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),i], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.trace.trace__GT_tree_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.trace.trace__GT_tree_STAR_.cljs$core$IFn$_invoke$arity$2(paths,next_path) : com.wsscode.pathom.trace.trace__GT_tree_STAR_.call(null,paths,next_path)),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)], 0)),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),next_path));
});})(count,G__54608,G__54608__$1,map__54606,map__54606__$1,row,event,relative_timestamp,key))
,x,cljs.core.range.cljs$core$IFn$_invoke$arity$1(count));

break;
case "com.wsscode.pathom.parser/async-return":
case "com.wsscode.pathom.parser/call-read":
case "com.wsscode.pathom.parser/external-wait-key":
case "com.wsscode.pathom.parser/skip-resolved-key":
case "com.wsscode.pathom.parser/skip-wait-key":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),key,new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700)], null)));

break;
case "com.wsscode.pathom.parser/trigger-reader-retry":
case "com.wsscode.pathom.parser/trigger-recheck-schedule":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.parser","processing","com.wsscode.pathom.parser/processing",-1928666102)], null)));

break;
case "com.wsscode.pathom.parser/max-iterations-reached":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),key,new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103)], null)));

break;
case "com.wsscode.pathom.trace/trace-done":
case "com.wsscode.pathom.parser/flush-watchers-loop":
case "com.wsscode.pathom.parser/process-pending":
case "com.wsscode.pathom.parser/reset-loop":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.parser","loop-keys","com.wsscode.pathom.parser/loop-keys",1134143507),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)], null)));

break;
case "com.wsscode.pathom.parser/merge-result":
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__54608,G__54608__$1,map__54606,map__54606__$1,row,event,relative_timestamp,key){
return (function (x__$1,key__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),key__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)], null)));
});})(G__54608,G__54608__$1,map__54606,map__54606__$1,row,event,relative_timestamp,key))
,x,cljs.core.keys(new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673).cljs$core$IFn$_invoke$arity$1(row)));

break;
case "com.wsscode.pathom.connect/batch-items-ready":
case "com.wsscode.pathom.connect/batch-result-error":
case "com.wsscode.pathom.connect/batch-result-ready":
case "com.wsscode.pathom.connect/call-resolver":
case "com.wsscode.pathom.connect/call-resolver-batch":
case "com.wsscode.pathom.connect/call-resolver-with-cache":
case "com.wsscode.pathom.connect/compute-plan":
case "com.wsscode.pathom.connect/reader3-enter":
case "com.wsscode.pathom.connect/reader3-entity-shape":
case "com.wsscode.pathom.connect/reader3-prepare-ast":
case "com.wsscode.pathom.connect/reader3-execute":
case "com.wsscode.pathom.connect/invalid-resolve-response":
case "com.wsscode.pathom.connect/merge-resolver-response":
case "com.wsscode.pathom.connect/resolver-error":
case "com.wsscode.pathom.connect/schedule-resolver":
case "com.wsscode.pathom.connect/waiting-resolver":
case "com.wsscode.pathom.core/parallel-sequence-loop":
case "com.wsscode.pathom.parser/watch-pending-timeout":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295),new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429),new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","waiting-key","com.wsscode.pathom.connect/waiting-key",261572653),new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-ignore-timeout","com.wsscode.pathom.parser/external-wait-ignore-timeout",480017192),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)], null)));

break;
case "com.wsscode.pathom.parser/value-return":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),key,new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),key], null),cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295),(relative_timestamp - cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),key,new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700)], null))));

break;
default:
return com.wsscode.pathom.trace.trace_tree_collect.cljs$core$IFn$_invoke$arity$2(x,row);

}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,path)));
});
com.wsscode.pathom.trace.trace__GT_tree = (function com$wsscode$pathom$trace$trace__GT_tree(trace){
var paths = cljs.core.group_by(new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),com.wsscode.pathom.trace.compute_durations(trace));
return com.wsscode.pathom.trace.trace__GT_tree_STAR_(paths,cljs.core.PersistentVector.EMPTY);
});
com.wsscode.pathom.trace.compute_details_duration = (function com$wsscode$pathom$trace$compute_details_duration(x){
var res = cljs.core.update.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810),(function (p1__54609_SHARP_){
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),p1__54609_SHARP_));
}));
var last_detail = cljs.core.peek(new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810).cljs$core$IFn$_invoke$arity$1(res));
var last_ts = (new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295).cljs$core$IFn$_invoke$arity$2(last_detail,(0)) + new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700).cljs$core$IFn$_invoke$arity$2(last_detail,(0)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(res,new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295),((function (res,last_detail,last_ts){
return (function (p1__54610_SHARP_){
var x__4219__auto__ = (function (){var or__4131__auto__ = p1__54610_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var y__4220__auto__ = (last_ts - new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700).cljs$core$IFn$_invoke$arity$2(res,(0)));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});})(res,last_detail,last_ts))
);
});
com.wsscode.pathom.trace.normalize_tree_details = (function com$wsscode$pathom$trace$normalize_tree_details(trace_tree){
return clojure.walk.postwalk((function (x){
var G__54611 = x;
if(((cljs.core.map_QMARK_(x)) && (cljs.core.contains_QMARK_(x,new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810))))){
return com.wsscode.pathom.trace.compute_details_duration(G__54611);
} else {
return G__54611;
}
}),trace_tree);
});
com.wsscode.pathom.trace.compute_d3_tree = (function com$wsscode$pathom$trace$compute_d3_tree(p__54612){
var map__54613 = p__54612;
var map__54613__$1 = (((((!((map__54613 == null))))?(((((map__54613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54613):map__54613);
var relative_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54613__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54613__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54613__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555));
var details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54613__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54613__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54613__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var G__54615 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),relative_timestamp,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"duration","duration",1444101068),(function (){var or__4131__auto__ = duration;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"details","details",1956795411),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__54613,map__54613__$1,relative_timestamp,duration,children,details,path,key){
return (function (p__54616){
var map__54617 = p__54616;
var map__54617__$1 = (((((!((map__54617 == null))))?(((((map__54617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54617):map__54617);
var row = map__54617__$1;
var relative_timestamp__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54617__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700));
var duration__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54617__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54617__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983));
var details__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__54617,map__54617__$1,row,relative_timestamp__$1,duration__$1,event,map__54613,map__54613__$1,relative_timestamp,duration,children,details,path,key){
return (function (p__54619){
var vec__54620 = p__54619;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54620,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54620,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),v], null);
});})(map__54617,map__54617__$1,row,relative_timestamp__$1,duration__$1,event,map__54613,map__54613__$1,relative_timestamp,duration,children,details,path,key))
),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(row,new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.trace","timestamp","com.wsscode.pathom.trace/timestamp",1867371402),new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295),new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)], 0)));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.name(event),new cljs.core.Keyword(null,"duration","duration",1444101068),(function (){var or__4131__auto__ = duration__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),relative_timestamp__$1], null),details__$1], 0));
});})(map__54613,map__54613__$1,relative_timestamp,duration,children,details,path,key))
,details)], null);
var G__54615__$1 = (cljs.core.truth_(key)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54615,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)):G__54615);
if(cljs.core.truth_(children)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54615__$1,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.trace.compute_d3_tree,cljs.core.second),children)));
} else {
return G__54615__$1;
}
});
com.wsscode.pathom.trace.trace__GT_viz = (function com$wsscode$pathom$trace$trace__GT_viz(trace){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.trace.compute_d3_tree(com.wsscode.pathom.trace.normalize_tree_details(com.wsscode.pathom.trace.trace__GT_tree(trace))),new cljs.core.Keyword(null,"hint","hint",439639918),"Query");
});
com.wsscode.pathom.trace.wrap_parser_trace = (function com$wsscode$pathom$trace$wrap_parser_trace(parser){
return (function com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal(env,tx){
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063),null], null), null),tx))){
var trace_STAR_ = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
})();
var env_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782),trace_STAR_);
var parser_trace = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","trace-plugin","com.wsscode.pathom.trace/trace-plugin",874601792)], null));
var res__54030__auto__ = (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env_SINGLEQUOTE_,tx) : parser.call(null,env_SINGLEQUOTE_,tx));
if(com.wsscode.async.async_cljs.chan_QMARK_(res__54030__auto__)){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,res__54030__auto__,trace_STAR_,env_SINGLEQUOTE_,parser_trace){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,res__54030__auto__,trace_STAR_,env_SINGLEQUOTE_,parser_trace){
return (function (state_54647){
var state_val_54648 = (state_54647[(1)]);
if((state_val_54648 === (1))){
var state_54647__$1 = state_54647;
var statearr_54649_54700 = state_54647__$1;
(statearr_54649_54700[(2)] = null);

(statearr_54649_54700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54648 === (2))){
var _ = (function (){var statearr_54650 = state_54647;
(statearr_54650[(4)] = cljs.core.cons((5),(state_54647[(4)])));

return statearr_54650;
})();
var state_54647__$1 = state_54647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54647__$1,(6),res__54030__auto__);
} else {
if((state_val_54648 === (3))){
var inst_54645 = (state_54647[(2)]);
var state_54647__$1 = state_54647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54647__$1,inst_54645);
} else {
if((state_val_54648 === (4))){
var inst_54623 = (state_54647[(2)]);
var state_54647__$1 = state_54647;
var statearr_54652_54704 = state_54647__$1;
(statearr_54652_54704[(2)] = inst_54623);

(statearr_54652_54704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54648 === (5))){
var _ = (function (){var statearr_54653 = state_54647;
(statearr_54653[(4)] = cljs.core.rest((state_54647[(4)])));

return statearr_54653;
})();
var state_54647__$1 = state_54647;
var ex54651 = (state_54647__$1[(2)]);
var statearr_54654_54706 = state_54647__$1;
(statearr_54654_54706[(5)] = ex54651);


var statearr_54655_54707 = state_54647__$1;
(statearr_54655_54707[(1)] = (4));

(statearr_54655_54707[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54648 === (6))){
var inst_54630 = (state_54647[(2)]);
var inst_54631 = com.wsscode.async.async_cljs.throw_err(inst_54630);
var inst_54632 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_54633 = [new cljs.core.Keyword("com.wsscode.pathom.trace","trace-plugin","com.wsscode.pathom.trace/trace-plugin",874601792)];
var inst_54634 = cljs.core.PersistentHashMap.fromArrays(inst_54632,inst_54633);
var inst_54635 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env_SINGLEQUOTE_,parser_trace,inst_54634);
var inst_54636 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_54637 = [new cljs.core.Keyword("com.wsscode.pathom.trace","trace-done","com.wsscode.pathom.trace/trace-done",-1293580361)];
var inst_54638 = cljs.core.PersistentHashMap.fromArrays(inst_54636,inst_54637);
var inst_54639 = com.wsscode.pathom.trace.trace(env_SINGLEQUOTE_,inst_54638);
var inst_54640 = cljs.core.deref(trace_STAR_);
var inst_54641 = com.wsscode.pathom.trace.trace__GT_viz(inst_54640);
var inst_54642 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_54631,new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063),inst_54641);
var _ = (function (){var statearr_54656 = state_54647;
(statearr_54656[(4)] = cljs.core.rest((state_54647[(4)])));

return statearr_54656;
})();
var state_54647__$1 = (function (){var statearr_54657 = state_54647;
(statearr_54657[(7)] = inst_54639);

(statearr_54657[(8)] = inst_54635);

return statearr_54657;
})();
var statearr_54658_54710 = state_54647__$1;
(statearr_54658_54710[(2)] = inst_54642);

(statearr_54658_54710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__48839__auto__,res__54030__auto__,trace_STAR_,env_SINGLEQUOTE_,parser_trace))
;
return ((function (switch__48139__auto__,c__48839__auto__,res__54030__auto__,trace_STAR_,env_SINGLEQUOTE_,parser_trace){
return (function() {
var com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__48140__auto____0 = (function (){
var statearr_54659 = [null,null,null,null,null,null,null,null,null];
(statearr_54659[(0)] = com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__48140__auto__);

(statearr_54659[(1)] = (1));

return statearr_54659;
});
var com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__48140__auto____1 = (function (state_54647){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_54647);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e54660){var ex__48143__auto__ = e54660;
var statearr_54661_54712 = state_54647;
(statearr_54661_54712[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_54647[(4)]))){
var statearr_54662_54713 = state_54647;
(statearr_54662_54713[(1)] = cljs.core.first((state_54647[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54714 = state_54647;
state_54647 = G__54714;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__48140__auto__ = function(state_54647){
switch(arguments.length){
case 0:
return com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__48140__auto____1.call(this,state_54647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__48140__auto____0;
com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__48140__auto____1;
return com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,res__54030__auto__,trace_STAR_,env_SINGLEQUOTE_,parser_trace))
})();
var state__48841__auto__ = (function (){var statearr_54663 = f__48840__auto__();
(statearr_54663[(6)] = c__48839__auto__);

return statearr_54663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,res__54030__auto__,trace_STAR_,env_SINGLEQUOTE_,parser_trace))
);

return c__48839__auto__;
} else {
var res = res__54030__auto__;
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env_SINGLEQUOTE_,parser_trace,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","trace-plugin","com.wsscode.pathom.trace/trace-plugin",874601792)], null));

com.wsscode.pathom.trace.trace(env_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","trace-done","com.wsscode.pathom.trace/trace-done",-1293580361)], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063),com.wsscode.pathom.trace.trace__GT_viz(cljs.core.deref(trace_STAR_)));
}
} else {
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,tx) : parser.call(null,env,tx));
}
});
});
com.wsscode.pathom.trace.trace_plugin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),com.wsscode.pathom.trace.wrap_parser_trace,new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("com.wsscode.pathom.trace","trace","com.wsscode.pathom.trace/trace",1837321991,null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),(function (_env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063),null], null);
})], null)], null)], null);

//# sourceMappingURL=com.wsscode.pathom.trace.js.map
