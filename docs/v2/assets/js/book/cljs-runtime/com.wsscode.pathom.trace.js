goog.provide('com.wsscode.pathom.trace');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('com.wsscode.common.async_cljs');
goog.require('clojure.walk');
goog.require('com.wsscode.pathom.misc');
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
var G__44713 = arguments.length;
switch (G__44713) {
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
var G__44771 = arguments.length;
switch (G__44771) {
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
var leave_items = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__44807_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.trace","leave","com.wsscode.pathom.trace/leave",-499718108),p1__44807_SHARP_);
}),new cljs.core.Keyword("com.wsscode.pathom.trace","direction","com.wsscode.pathom.trace/direction",-1450972914))),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.trace","id","com.wsscode.pathom.trace/id",-1736155805),cljs.core.identity))),trace);
var initial_time = new cljs.core.Keyword("com.wsscode.pathom.trace","timestamp","com.wsscode.pathom.trace/timestamp",1867371402).cljs$core$IFn$_invoke$arity$1(cljs.core.first(trace));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (leave_items,initial_time){
return (function (e){

return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.trace","leave","com.wsscode.pathom.trace/leave",-499718108),new cljs.core.Keyword("com.wsscode.pathom.trace","direction","com.wsscode.pathom.trace/direction",-1450972914).cljs$core$IFn$_invoke$arity$1(e));
});})(leave_items,initial_time))
),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (leave_items,initial_time){
return (function (p__44825){
var map__44835 = p__44825;
var map__44835__$1 = (((((!((map__44835 == null))))?(((((map__44835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44835):map__44835);
var e = map__44835__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44835__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","id","com.wsscode.pathom.trace/id",-1736155805));
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44835__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","timestamp","com.wsscode.pathom.trace/timestamp",1867371402));
var e__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(e,new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),(timestamp - initial_time));
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(leave_items,id);
if(cljs.core.truth_(temp__5718__auto__)){
var map__44874 = temp__5718__auto__;
var map__44874__$1 = (((((!((map__44874 == null))))?(((((map__44874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44874):map__44874);
var leave = map__44874__$1;
var et = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44874__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","timestamp","com.wsscode.pathom.trace/timestamp",1867371402));
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
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__44878 = cljs.core.get_global_hierarchy;
return (fexpr__44878.cljs$core$IFn$_invoke$arity$0 ? fexpr__44878.cljs$core$IFn$_invoke$arity$0() : fexpr__44878.call(null));
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
com.wsscode.pathom.trace.tree_assoc_key_detail = (function com$wsscode$pathom$trace$tree_assoc_key_detail(p__44879,x,keys){
var map__44880 = p__44879;
var map__44880__$1 = (((((!((map__44880 == null))))?(((((map__44880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44880):map__44880);
var row = map__44880__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44880__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),key,new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)], null),keys)));
});
com.wsscode.pathom.trace.trace__GT_tree_STAR_ = (function com$wsscode$pathom$trace$trace__GT_tree_STAR_(paths,path){
return new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (x,p__44883){
var map__44884 = p__44883;
var map__44884__$1 = (((((!((map__44884 == null))))?(((((map__44884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44884):map__44884);
var row = map__44884__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44884__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983));
var relative_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44884__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44884__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var G__44886 = event;
var G__44886__$1 = (((G__44886 instanceof cljs.core.Keyword))?G__44886.fqn:null);
switch (G__44886__$1) {
case "com.wsscode.pathom.parser/parse-loop":
case "com.wsscode.pathom.core/trace-plugin":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"response","response",-1068424192),((function (G__44886,G__44886__$1,map__44884,map__44884__$1,row,event,relative_timestamp,key){
return (function (p1__44882_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661)], null)),p1__44882_SHARP_], 0));
});})(G__44886,G__44886__$1,map__44884,map__44884__$1,row,event,relative_timestamp,key))
);

break;
case "com.wsscode.pathom.parser/process-key":
var next_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,key);
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"visited","visited",-1610853875).cljs$core$IFn$_invoke$arity$1(x),next_path)){
return x;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.assoc_in(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661)], null),path),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),key], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.trace.trace__GT_tree_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.trace.trace__GT_tree_STAR_.cljs$core$IFn$_invoke$arity$2(paths,next_path) : com.wsscode.pathom.trace.trace__GT_tree_STAR_.call(null,paths,next_path)),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword(null,"key","key",-1516042587)], null))], 0)),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),next_path)),new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.conj,next_path);
}

break;
case "com.wsscode.pathom.core/join-seq":
var count = new cljs.core.Keyword("com.wsscode.pathom.core","seq-count","com.wsscode.pathom.core/seq-count",-1671473836).cljs$core$IFn$_invoke$arity$1(row);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (count,G__44886,G__44886__$1,map__44884,map__44884__$1,row,event,relative_timestamp,key){
return (function (x__$1,i){
var next_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i);
return cljs.core.assoc_in(x__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),i], null),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.trace.trace__GT_tree_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.trace.trace__GT_tree_STAR_.cljs$core$IFn$_invoke$arity$2(paths,next_path) : com.wsscode.pathom.trace.trace__GT_tree_STAR_.call(null,paths,next_path)),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword(null,"key","key",-1516042587)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)], 0)),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),next_path));
});})(count,G__44886,G__44886__$1,map__44884,map__44884__$1,row,event,relative_timestamp,key))
,x,cljs.core.range.cljs$core$IFn$_invoke$arity$1(count));

break;
case "com.wsscode.pathom.parser/async-return":
case "com.wsscode.pathom.parser/skip-wait-key":
case "com.wsscode.pathom.parser/call-read":
case "com.wsscode.pathom.parser/skip-resolved-key":
case "com.wsscode.pathom.parser/external-wait-key":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),key,new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));

break;
case "com.wsscode.pathom.parser/trigger-reader-retry":
case "com.wsscode.pathom.parser/trigger-recheck-schedule":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword("com.wsscode.pathom.parser","processing","com.wsscode.pathom.parser/processing",-1928666102),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));

break;
case "com.wsscode.pathom.parser/max-iterations-reached":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),key,new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103)], null)));

break;
case "com.wsscode.pathom.parser/process-pending":
case "com.wsscode.pathom.parser/reset-loop":
case "com.wsscode.pathom.parser/flush-watchers-loop":
case "com.wsscode.pathom.trace/trace-done":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683),new cljs.core.Keyword("com.wsscode.pathom.parser","loop-keys","com.wsscode.pathom.parser/loop-keys",1134143507)], null)));

break;
case "com.wsscode.pathom.parser/merge-result":
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__44886,G__44886__$1,map__44884,map__44884__$1,row,event,relative_timestamp,key){
return (function (x__$1,key__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),key__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700)], null)));
});})(G__44886,G__44886__$1,map__44884,map__44884__$1,row,event,relative_timestamp,key))
,x,cljs.core.keys(new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673).cljs$core$IFn$_invoke$arity$1(row)));

break;
case "com.wsscode.pathom.connect/compute-plan":
case "com.wsscode.pathom.connect/waiting-resolver":
case "com.wsscode.pathom.connect/schedule-resolver":
case "com.wsscode.pathom.connect/call-resolver-with-cache":
case "com.wsscode.pathom.connect/call-resolver":
case "com.wsscode.pathom.core/parallel-sequence-loop":
case "com.wsscode.pathom.connect/call-resolver-batch":
case "com.wsscode.pathom.connect/batch-items-ready":
case "com.wsscode.pathom.connect/batch-result-error":
case "com.wsscode.pathom.connect/batch-result-ready":
case "com.wsscode.pathom.connect/merge-resolver-response":
case "com.wsscode.pathom.connect/resolver-error":
case "com.wsscode.pathom.connect/invalid-resolve-response":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295),new cljs.core.Keyword("com.wsscode.pathom.connect","waiting-key","com.wsscode.pathom.connect/waiting-key",261572653),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429),new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));

break;
case "com.wsscode.pathom.parser/value-return":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(x,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),key,new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.select_keys(row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),key], null),cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295),(relative_timestamp - cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555),key,new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700)], null))));

break;
default:
return (com.wsscode.pathom.trace.trace_tree_collect.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.trace.trace_tree_collect.cljs$core$IFn$_invoke$arity$2(x,row) : com.wsscode.pathom.trace.trace_tree_collect.call(null,x,row));

}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visited","visited",-1610853875),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,path)));
});
com.wsscode.pathom.trace.trace__GT_tree = (function com$wsscode$pathom$trace$trace__GT_tree(trace){
var paths = cljs.core.group_by(new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),com.wsscode.pathom.trace.compute_durations(trace));
return com.wsscode.pathom.trace.trace__GT_tree_STAR_(paths,cljs.core.PersistentVector.EMPTY);
});
com.wsscode.pathom.trace.compute_details_duration = (function com$wsscode$pathom$trace$compute_details_duration(x){
var res = cljs.core.update.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810),(function (p1__44887_SHARP_){
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),p1__44887_SHARP_));
}));
var last_detail = cljs.core.peek(new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810).cljs$core$IFn$_invoke$arity$1(res));
var last_ts = (new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295).cljs$core$IFn$_invoke$arity$2(last_detail,(0)) + new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700).cljs$core$IFn$_invoke$arity$2(last_detail,(0)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(res,new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295),((function (res,last_detail,last_ts){
return (function (p1__44888_SHARP_){
var x__4219__auto__ = (function (){var or__4131__auto__ = p1__44888_SHARP_;
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
var G__44889 = x;
if(((cljs.core.map_QMARK_(x)) && (cljs.core.contains_QMARK_(x,new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810))))){
return com.wsscode.pathom.trace.compute_details_duration(G__44889);
} else {
return G__44889;
}
}),trace_tree);
});
com.wsscode.pathom.trace.compute_d3_tree = (function com$wsscode$pathom$trace$compute_d3_tree(p__44890){
var map__44891 = p__44890;
var map__44891__$1 = (((((!((map__44891 == null))))?(((((map__44891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44891):map__44891);
var relative_timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44891__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44891__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44891__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","children","com.wsscode.pathom.trace/children",1897633555));
var details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44891__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","details","com.wsscode.pathom.trace/details",560259810));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44891__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44891__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var G__44893 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),relative_timestamp,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"duration","duration",1444101068),(function (){var or__4131__auto__ = duration;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"details","details",1956795411),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__44891,map__44891__$1,relative_timestamp,duration,children,details,path,key){
return (function (p__44894){
var map__44895 = p__44894;
var map__44895__$1 = (((((!((map__44895 == null))))?(((((map__44895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44895):map__44895);
var row = map__44895__$1;
var relative_timestamp__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44895__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700));
var duration__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44895__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44895__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983));
var details__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__44895,map__44895__$1,row,relative_timestamp__$1,duration__$1,event,map__44891,map__44891__$1,relative_timestamp,duration,children,details,path,key){
return (function (p__44897){
var vec__44898 = p__44897;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44898,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44898,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),v], null);
});})(map__44895,map__44895__$1,row,relative_timestamp__$1,duration__$1,event,map__44891,map__44891__$1,relative_timestamp,duration,children,details,path,key))
),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(row,new cljs.core.Keyword("com.wsscode.pathom.trace","relative-timestamp","com.wsscode.pathom.trace/relative-timestamp",1322755700),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.trace","timestamp","com.wsscode.pathom.trace/timestamp",1867371402),new cljs.core.Keyword("com.wsscode.pathom.trace","duration","com.wsscode.pathom.trace/duration",-1764288295),new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)], 0)));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.name(event),new cljs.core.Keyword(null,"duration","duration",1444101068),(function (){var or__4131__auto__ = duration__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),relative_timestamp__$1], null),details__$1], 0));
});})(map__44891,map__44891__$1,relative_timestamp,duration,children,details,path,key))
,details)], null);
var G__44893__$1 = (cljs.core.truth_(key)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44893,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)):G__44893);
if(cljs.core.truth_(children)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44893__$1,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.trace.compute_d3_tree,cljs.core.second),children)));
} else {
return G__44893__$1;
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
var res__44659__auto__ = (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env_SINGLEQUOTE_,tx) : parser.call(null,env_SINGLEQUOTE_,tx));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44659__auto__)){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,res__44659__auto__,trace_STAR_,env_SINGLEQUOTE_,parser_trace){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,res__44659__auto__,trace_STAR_,env_SINGLEQUOTE_,parser_trace){
return (function (state_44922){
var state_val_44923 = (state_44922[(1)]);
if((state_val_44923 === (1))){
var state_44922__$1 = state_44922;
var statearr_44924_44990 = state_44922__$1;
(statearr_44924_44990[(2)] = null);

(statearr_44924_44990[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44923 === (2))){
var inst_44920 = (state_44922[(2)]);
var state_44922__$1 = state_44922;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44922__$1,inst_44920);
} else {
if((state_val_44923 === (3))){
var inst_44901 = (state_44922[(2)]);
var state_44922__$1 = state_44922;
var statearr_44925_44997 = state_44922__$1;
(statearr_44925_44997[(2)] = inst_44901);


cljs.core.async.impl.ioc_helpers.process_exception(state_44922__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44923 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_44922,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_44922__$1 = state_44922;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44922__$1,(5),res__44659__auto__);
} else {
if((state_val_44923 === (5))){
var inst_44906 = (state_44922[(2)]);
var inst_44907 = com.wsscode.common.async_cljs.throw_err(inst_44906);
var inst_44908 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_44909 = [new cljs.core.Keyword("com.wsscode.pathom.trace","trace-plugin","com.wsscode.pathom.trace/trace-plugin",874601792)];
var inst_44910 = cljs.core.PersistentHashMap.fromArrays(inst_44908,inst_44909);
var inst_44911 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env_SINGLEQUOTE_,parser_trace,inst_44910);
var inst_44912 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_44913 = [new cljs.core.Keyword("com.wsscode.pathom.trace","trace-done","com.wsscode.pathom.trace/trace-done",-1293580361)];
var inst_44914 = cljs.core.PersistentHashMap.fromArrays(inst_44912,inst_44913);
var inst_44915 = com.wsscode.pathom.trace.trace(env_SINGLEQUOTE_,inst_44914);
var inst_44916 = cljs.core.deref(trace_STAR_);
var inst_44917 = com.wsscode.pathom.trace.trace__GT_viz(inst_44916);
var inst_44918 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_44907,new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063),inst_44917);
var state_44922__$1 = (function (){var statearr_44926 = state_44922;
(statearr_44926[(7)] = inst_44911);

(statearr_44926[(8)] = inst_44915);

return statearr_44926;
})();
var statearr_44927_45004 = state_44922__$1;
(statearr_44927_45004[(2)] = inst_44918);


cljs.core.async.impl.ioc_helpers.process_exception(state_44922__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39084__auto__,res__44659__auto__,trace_STAR_,env_SINGLEQUOTE_,parser_trace))
;
return ((function (switch__38786__auto__,c__39084__auto__,res__44659__auto__,trace_STAR_,env_SINGLEQUOTE_,parser_trace){
return (function() {
var com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__38787__auto____0 = (function (){
var statearr_44928 = [null,null,null,null,null,null,null,null,null];
(statearr_44928[(0)] = com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__38787__auto__);

(statearr_44928[(1)] = (1));

return statearr_44928;
});
var com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__38787__auto____1 = (function (state_44922){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_44922);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e44929){if((e44929 instanceof Object)){
var ex__38790__auto__ = e44929;
var statearr_44930_45009 = state_44922;
(statearr_44930_45009[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44929;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45014 = state_44922;
state_44922 = G__45014;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__38787__auto__ = function(state_44922){
switch(arguments.length){
case 0:
return com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__38787__auto____1.call(this,state_44922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__38787__auto____0;
com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__38787__auto____1;
return com$wsscode$pathom$trace$wrap_parser_trace_$_wrap_parser_trace_internal_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,res__44659__auto__,trace_STAR_,env_SINGLEQUOTE_,parser_trace))
})();
var state__39086__auto__ = (function (){var statearr_44931 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_44931[(6)] = c__39084__auto__);

return statearr_44931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,res__44659__auto__,trace_STAR_,env_SINGLEQUOTE_,parser_trace))
);

return c__39084__auto__;
} else {
var res = res__44659__auto__;
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env_SINGLEQUOTE_,parser_trace,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","trace-plugin","com.wsscode.pathom.trace/trace-plugin",874601792)], null));

com.wsscode.pathom.trace.trace(env_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","trace-done","com.wsscode.pathom.trace/trace-done",-1293580361)], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063),com.wsscode.pathom.trace.trace__GT_viz(cljs.core.deref(trace_STAR_)));
}
} else {
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,tx) : parser.call(null,env,tx));
}
});
});
com.wsscode.pathom.trace.trace_plugin = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),com.wsscode.pathom.trace.wrap_parser_trace,new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("com.wsscode.pathom.trace","trace","com.wsscode.pathom.trace/trace",1837321991,null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063),null], null);
})], null)], null)], null);
if(com.wsscode.pathom.misc.INCLUDE_SPECS){
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.trace","trace","com.wsscode.pathom.trace/trace",1837321991,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"event","event",301435442),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)], null)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"event","event",301435442),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"event","event",301435442)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__44932){
return cljs.core.map_QMARK_(G__44932);
})], null),(function (G__44932){
return cljs.core.map_QMARK_(G__44932);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)], null)]))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"event","event",301435442),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
} else {
}

//# sourceMappingURL=com.wsscode.pathom.trace.js.map
