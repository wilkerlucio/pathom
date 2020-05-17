goog.provide('fulcro.inspect.lib.diff');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.inspect.lib.diff","updates","fulcro.inspect.lib.diff/updates",221795125),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.inspect.lib.diff","removals","fulcro.inspect.lib.diff/removals",-1638817439),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_);
fulcro.inspect.lib.diff.updates = (function fulcro$inspect$lib$diff$updates(a,b){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (adds,p__60016){
var vec__60017 = p__60016;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60017,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60017,(1),null);
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$3(a,k,new cljs.core.Keyword("fulcro.inspect.lib.diff","unset","fulcro.inspect.lib.diff/unset",-1153887743));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,va)){
return adds;
} else {
if(((cljs.core.map_QMARK_(v)) && (cljs.core.map_QMARK_(va)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(adds,k,(fulcro.inspect.lib.diff.updates.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.lib.diff.updates.cljs$core$IFn$_invoke$arity$2(va,v) : fulcro.inspect.lib.diff.updates.call(null,va,v)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(adds,k,v);
}
}
}),cljs.core.PersistentArrayMap.EMPTY,b);
});
fulcro.inspect.lib.diff.removals = (function fulcro$inspect$lib$diff$removals(a,b){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (rems,p__60032){
var vec__60033 = p__60032;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60033,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60033,(1),null);
var temp__5718__auto__ = cljs.core.find(b,k);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__60036 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60036,(0),null);
var vb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60036,(1),null);
if(((cljs.core.map_QMARK_(v)) && (cljs.core.map_QMARK_(vb)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,vb)))){
var childs = (fulcro.inspect.lib.diff.removals.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.lib.diff.removals.cljs$core$IFn$_invoke$arity$2(v,vb) : fulcro.inspect.lib.diff.removals.call(null,v,vb));
if(cljs.core.seq(childs)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rems,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,childs]));
} else {
return rems;
}
} else {
return rems;
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rems,(function (){var G__60042 = k;
if(cljs.core.map_QMARK_(k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60042,new cljs.core.Keyword("fulcro.inspect.lib.diff","key?","fulcro.inspect.lib.diff/key?",325118813),true);
} else {
return G__60042;
}
})());
}
}),cljs.core.PersistentVector.EMPTY,a);
});
fulcro.inspect.lib.diff.diff = (function fulcro$inspect$lib$diff$diff(a,b){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fulcro.inspect.lib.diff","updates","fulcro.inspect.lib.diff/updates",221795125),fulcro.inspect.lib.diff.updates(a,b),new cljs.core.Keyword("fulcro.inspect.lib.diff","removals","fulcro.inspect.lib.diff/removals",-1638817439),fulcro.inspect.lib.diff.removals(a,b)], null);
});
fulcro.inspect.lib.diff.deep_merge = (function fulcro$inspect$lib$diff$deep_merge(x,y){
if(((cljs.core.map_QMARK_(x)) && (cljs.core.map_QMARK_(y)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(fulcro.inspect.lib.diff.deep_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));
} else {
return y;
}
});
fulcro.inspect.lib.diff.patch_updates = (function fulcro$inspect$lib$diff$patch_updates(x,p__60048){
var map__60049 = p__60048;
var map__60049__$1 = (((((!((map__60049 == null))))?(((((map__60049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60049):map__60049);
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60049__$1,new cljs.core.Keyword("fulcro.inspect.lib.diff","updates","fulcro.inspect.lib.diff/updates",221795125));
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(fulcro.inspect.lib.diff.deep_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,updates], 0));
});
fulcro.inspect.lib.diff.patch_removals = (function fulcro$inspect$lib$diff$patch_removals(x,p__60057){
var map__60058 = p__60057;
var map__60058__$1 = (((((!((map__60058 == null))))?(((((map__60058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60058):map__60058);
var removals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60058__$1,new cljs.core.Keyword("fulcro.inspect.lib.diff","removals","fulcro.inspect.lib.diff/removals",-1638817439));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__60058,map__60058__$1,removals){
return (function (final$,rem){
if(cljs.core.truth_(new cljs.core.Keyword("fulcro.inspect.lib.diff","key?","fulcro.inspect.lib.diff/key?",325118813).cljs$core$IFn$_invoke$arity$1(rem))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(final$,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(rem,new cljs.core.Keyword("fulcro.inspect.lib.diff","key?","fulcro.inspect.lib.diff/key?",325118813)));
} else {
if(cljs.core.map_QMARK_(rem)){
var vec__60060 = cljs.core.first(rem);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60060,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60060,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(final$,k,((function (vec__60060,k,v,map__60058,map__60058__$1,removals){
return (function (p1__60056_SHARP_){
var G__60063 = p1__60056_SHARP_;
var G__60064 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fulcro.inspect.lib.diff","removals","fulcro.inspect.lib.diff/removals",-1638817439),v], null);
return (fulcro.inspect.lib.diff.patch_removals.cljs$core$IFn$_invoke$arity$2 ? fulcro.inspect.lib.diff.patch_removals.cljs$core$IFn$_invoke$arity$2(G__60063,G__60064) : fulcro.inspect.lib.diff.patch_removals.call(null,G__60063,G__60064));
});})(vec__60060,k,v,map__60058,map__60058__$1,removals))
);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(final$,rem);

}
}
});})(map__60058,map__60058__$1,removals))
,x,removals);
});
fulcro.inspect.lib.diff.patch = (function fulcro$inspect$lib$diff$patch(x,diff){
return fulcro.inspect.lib.diff.patch_removals(fulcro.inspect.lib.diff.patch_updates(x,diff),diff);
});

//# sourceMappingURL=fulcro.inspect.lib.diff.js.map
