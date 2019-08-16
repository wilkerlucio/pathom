goog.provide('fulcro.inspect.lib.version');
goog.require('cljs.core');
fulcro.inspect.lib.version.last_inspect_version = "2.2.5";
fulcro.inspect.lib.version.parse_int = (function fulcro$inspect$lib$version$parse_int(s){
return parseInt(s);
});
fulcro.inspect.lib.version.vector_compare = (function fulcro$inspect$lib$version$vector_compare(p__52031,p__52032){
while(true){
var vec__52035 = p__52031;
var seq__52036 = cljs.core.seq(vec__52035);
var first__52037 = cljs.core.first(seq__52036);
var seq__52036__$1 = cljs.core.next(seq__52036);
var value1 = first__52037;
var rest1 = seq__52036__$1;
var vec__52038 = p__52032;
var seq__52039 = cljs.core.seq(vec__52038);
var first__52040 = cljs.core.first(seq__52039);
var seq__52039__$1 = cljs.core.next(seq__52039);
var value2 = first__52040;
var rest2 = seq__52039__$1;
var result = cljs.core.compare(value1,value2);
if((!((result === (0))))){
return result;
} else {
if((value1 == null)){
return (0);
} else {
var G__52050 = rest1;
var G__52051 = rest2;
p__52031 = G__52050;
p__52032 = G__52051;
continue;

}
}
break;
}
});
fulcro.inspect.lib.version.parse_version = (function fulcro$inspect$lib$version$parse_version(s){
var temp__5718__auto__ = cljs.core.re_find(/(\d+)\.(\d+)\.(\d+)(?:-(\w+))?(-SNAPSHOT)?$/,s);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__52045 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52045,(0),null);
var major = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52045,(1),null);
var minor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52045,(2),null);
var patch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52045,(3),null);
var suffix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52045,(4),null);
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52045,(5),null);
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
