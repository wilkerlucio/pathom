goog.provide('fulcro.inspect.lib.version');
goog.require('cljs.core');
fulcro.inspect.lib.version.last_inspect_version = "2.2.5";
fulcro.inspect.lib.version.parse_int = (function fulcro$inspect$lib$version$parse_int(s){
return parseInt(s);
});
fulcro.inspect.lib.version.vector_compare = (function fulcro$inspect$lib$version$vector_compare(p__60020,p__60021){
while(true){
var vec__60022 = p__60020;
var seq__60023 = cljs.core.seq(vec__60022);
var first__60024 = cljs.core.first(seq__60023);
var seq__60023__$1 = cljs.core.next(seq__60023);
var value1 = first__60024;
var rest1 = seq__60023__$1;
var vec__60025 = p__60021;
var seq__60026 = cljs.core.seq(vec__60025);
var first__60027 = cljs.core.first(seq__60026);
var seq__60026__$1 = cljs.core.next(seq__60026);
var value2 = first__60027;
var rest2 = seq__60026__$1;
var result = cljs.core.compare(value1,value2);
if((!((result === (0))))){
return result;
} else {
if((value1 == null)){
return (0);
} else {
var G__60050 = rest1;
var G__60051 = rest2;
p__60020 = G__60050;
p__60021 = G__60051;
continue;

}
}
break;
}
});
fulcro.inspect.lib.version.parse_version = (function fulcro$inspect$lib$version$parse_version(s){
var temp__5718__auto__ = cljs.core.re_find(/(\d+)\.(\d+)\.(\d+)(?:-(\w+))?(-SNAPSHOT)?$/,s);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__60039 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60039,(0),null);
var major = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60039,(1),null);
var minor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60039,(2),null);
var patch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60039,(3),null);
var suffix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60039,(4),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60039,(5),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.inspect.lib.version.parse_int(major),fulcro.inspect.lib.version.parse_int(minor),fulcro.inspect.lib.version.parse_int(patch),(cljs.core.truth_(suffix)?(0):(1)),suffix,(cljs.core.truth_(snapshot)?(0):(1))], null);
} else {
return null;
}
});
fulcro.inspect.lib.version.compare = (function fulcro$inspect$lib$version$compare(a,b){
return fulcro.inspect.lib.version.vector_compare(fulcro.inspect.lib.version.parse_version(a),fulcro.inspect.lib.version.parse_version(b));
});
fulcro.inspect.lib.version.sort = (function fulcro$inspect$lib$version$sort(coll){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(fulcro.inspect.lib.version.compare,coll);
});
fulcro.inspect.lib.version.sort_by = (function fulcro$inspect$lib$version$sort_by(keyfn,coll){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,fulcro.inspect.lib.version.compare,coll);
});

//# sourceMappingURL=fulcro.inspect.lib.version.js.map
