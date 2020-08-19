goog.provide('com.wsscode.pathom.connect');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.gen.alpha');
goog.require('com.fulcrologic.guardrails.core');
goog.require('com.wsscode.async.async_cljs');
goog.require('com.wsscode.common.combinatorics');
goog.require('com.wsscode.pathom.connect.indexes');
goog.require('com.wsscode.pathom.connect.planner');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.misc');
goog.require('com.wsscode.pathom.parser');
goog.require('com.wsscode.pathom.trace');
goog.require('edn_query_language.core');

com.wsscode.pathom.connect.atom_with = (function com$wsscode$pathom$connect$atom_with(spec){
return cljs.spec.alpha.with_gen(com.wsscode.pathom.core.atom_QMARK_,(function (){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.atom,cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(spec)], 0));
}));
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__89131){
return cljs.core.set_QMARK_(G__89131);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","alias?","com.wsscode.pathom.connect/alias?",-1915061463),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__89138){
return cljs.core.map_QMARK_(G__89138);
})], null),(function (G__89138){
return cljs.core.map_QMARK_(G__89138);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation","com.wsscode.pathom.connect/mutation",-1953746968),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__89148){
return cljs.core.map_QMARK_(G__89148);
})], null),(function (G__89148){
return cljs.core.map_QMARK_(G__89148);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"plain","plain",1368629269),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"composed","composed",-1510693384),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plain","plain",1368629269),new cljs.core.Keyword(null,"composed","composed",-1510693384)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__89151){
return cljs.core.map_QMARK_(G__89151);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attribute-list","attribute-list",1391116942),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1)),new cljs.core.Keyword(null,"union","union",2142937499),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribute-list","attribute-list",1391116942),new cljs.core.Keyword(null,"union","union",2142937499)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__89157){
return ((cljs.core.vector_QMARK_(G__89157)) && (((((function (){var or__4131__auto__ = (1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((1)
,G__89157))) && ((cljs.core.bounded_count((1)
,G__89157) <= (function (){var or__4131__auto__ = null;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (9007199254740991);
}
})())))));
}),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__89162){
return cljs.core.map_QMARK_(G__89162);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__89167){
return cljs.core.map_QMARK_(G__89167);
}),(function (G__89167){
return cljs.core.contains_QMARK_(G__89167,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
})], null),(function (G__89167){
return ((cljs.core.map_QMARK_(G__89167)) && (cljs.core.contains_QMARK_(G__89167,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),cljs.core.list(new cljs.core.Symbol("com.wsscode.pathom.connect","atom-with","com.wsscode.pathom.connect/atom-with",1449744364,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null))),com.wsscode.pathom.connect.atom_with(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"number?","number?",-1747282210,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.number_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__89178){
return cljs.core.map_QMARK_(G__89178);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null))], null),null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__89180){
return cljs.core.map_QMARK_(G__89180);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__89181){
return cljs.core.map_QMARK_(G__89181);
}),(function (G__89181){
return cljs.core.contains_QMARK_(G__89181,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
})], null),(function (G__89181){
return ((cljs.core.map_QMARK_(G__89181)) && (cljs.core.contains_QMARK_(G__89181,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutations","com.wsscode.pathom.connect/mutations",1762289215),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__89183){
return cljs.core.map_QMARK_(G__89183);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__89184){
return cljs.core.map_QMARK_(G__89184);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("s","coll-of","s/coll-of",-1705285349,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol(null,"set?","set?",1636014792,null))),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__89186){
return cljs.core.set_QMARK_(G__89186);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__89185){
return cljs.core.map_QMARK_(G__89185);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__89187){
return cljs.core.map_QMARK_(G__89187);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__89188){
return cljs.core.map_QMARK_(G__89188);
})], null),(function (G__89188){
return cljs.core.map_QMARK_(G__89188);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","tuple","s/tuple",1167863840,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__89190){
return cljs.core.set_QMARK_(G__89190);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),cljs.core.ifn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),cljs.core.ifn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__89193){
return cljs.core.coll_QMARK_(G__89193);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword(null,"deep","deep",2090866875),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__89199){
return cljs.core.map_QMARK_(G__89199);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"deep","deep",2090866875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__89206){
return ((cljs.core.vector_QMARK_(G__89206)) && (((((function (){var or__4131__auto__ = (2);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((2)
,G__89206))) && ((cljs.core.bounded_count((2)
,G__89206) <= (function (){var or__4131__auto__ = null;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (9007199254740991);
}
})())))));
}),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__89214){
return cljs.core.map_QMARK_(G__89214);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__89216){
return cljs.core.set_QMARK_(G__89216);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__89217){
return cljs.core.map_QMARK_(G__89217);
})], null),(function (G__89217){
return cljs.core.map_QMARK_(G__89217);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"multi","multi",-190293005)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentHashSet.EMPTY]),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__89227){
return cljs.core.map_QMARK_(G__89227);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__89231){
return cljs.core.map_QMARK_(G__89231);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null))),cljs.spec.alpha.merge_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__89236){
return cljs.core.map_QMARK_(G__89236);
}),(function (G__89236){
return cljs.core.contains_QMARK_(G__89236,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
}),(function (G__89236){
return cljs.core.contains_QMARK_(G__89236,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
})], null),(function (G__89236){
return ((cljs.core.map_QMARK_(G__89236)) && (cljs.core.contains_QMARK_(G__89236,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))) && (cljs.core.contains_QMARK_(G__89236,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)))], null),null]))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null))),cljs.spec.alpha.merge_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__89270){
return cljs.core.map_QMARK_(G__89270);
}),(function (G__89270){
return cljs.core.contains_QMARK_(G__89270,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112));
})], null),(function (G__89270){
return ((cljs.core.map_QMARK_(G__89270)) && (cljs.core.contains_QMARK_(G__89270,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)))], null),null]))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"resolver","resolver",-1740553583),new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword(null,"mutation","mutation",-285823378),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolver","resolver",-1740553583),new cljs.core.Keyword(null,"mutation","mutation",-285823378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),new cljs.core.Keyword(null,"operations","operations",1630691895),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword(null,"operations","operations",1630691895)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__89321){
return cljs.core.coll_QMARK_(G__89321);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__89322){
return cljs.core.coll_QMARK_(G__89322);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"flat-plan","flat-plan",-883399921),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),new cljs.core.Keyword(null,"graph-plan","graph-plan",-503579673),new cljs.core.Keyword("com.wsscode.pathom.connect.planner","graph","com.wsscode.pathom.connect.planner/graph",507959439)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flat-plan","flat-plan",-883399921),new cljs.core.Keyword(null,"graph-plan","graph-plan",-503579673)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),new cljs.core.Keyword("com.wsscode.pathom.connect.planner","graph","com.wsscode.pathom.connect.planner/graph",507959439)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__89323){
return cljs.core.coll_QMARK_(G__89323);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098))], null),null),new cljs.core.Keyword("com.wsscode.pathom.connect.planner","graph","com.wsscode.pathom.connect.planner/graph",507959439)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","sort-plan","com.wsscode.pathom.connect/sort-plan",-1506396873),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"plan","plan",1118952668)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-computed-plans","com.wsscode.pathom.connect/reader3-computed-plans",-307073851),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__89325){
return cljs.core.set_QMARK_(G__89325);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
com.wsscode.pathom.connect.resolver_data = com.wsscode.pathom.connect.indexes.resolver_data;
/**
 * Get mutation map information in env from the resolver sym.
 */
com.wsscode.pathom.connect.mutation_data = (function com$wsscode$pathom$connect$mutation_data(env_or_indexes,sym){
var idx = (function (){var G__89326 = env_or_indexes;
if(cljs.core.contains_QMARK_(env_or_indexes,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))){
return new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189).cljs$core$IFn$_invoke$arity$1(G__89326);
} else {
return G__89326;
}
})();
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym], null));
});
com.wsscode.pathom.connect.flat_query = (function com$wsscode$pathom$connect$flat_query(query){
if(cljs.core.map_QMARK_(query)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.connect.flat_query,cljs.core.vals(query)));
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.core.query__GT_ast(query)));
}
});
com.wsscode.pathom.connect.merge_io_attrs = com.wsscode.pathom.connect.indexes.merge_io_attrs;
com.wsscode.pathom.connect.normalize_io = com.wsscode.pathom.connect.indexes.normalize_io;
com.wsscode.pathom.connect.merge_io = com.wsscode.pathom.connect.indexes.merge_io;
com.wsscode.pathom.connect.merge_oir = com.wsscode.pathom.connect.indexes.merge_oir;
com.wsscode.pathom.connect.merge_grow = (function com$wsscode$pathom$connect$merge_grow(a,b){
if(((cljs.core.set_QMARK_(a)) && (cljs.core.set_QMARK_(b)))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
if(((cljs.core.map_QMARK_(a)) && (cljs.core.map_QMARK_(b)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.connect.merge_grow,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
} else {
if((b == null)){
return a;
} else {
return b;

}
}
}
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.connect !== 'undefined') && (typeof com.wsscode.pathom.connect.index_merger !== 'undefined')){
} else {
/**
 * This is an extensible gateway so you can define different strategies for merging different
 *   kinds of indexes.
 */
com.wsscode.pathom.connect.index_merger = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__89330 = cljs.core.get_global_hierarchy;
return (fexpr__89330.cljs$core$IFn$_invoke$arity$0 ? fexpr__89330.cljs$core$IFn$_invoke$arity$0() : fexpr__89330.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.wsscode.pathom.connect","index-merger"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (k,_,___$1){
return k;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
com.wsscode.pathom.connect.index_merger.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),(function (_,ia,ib){
return (com.wsscode.pathom.connect.merge_io.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.merge_io.cljs$core$IFn$_invoke$arity$2(ia,ib) : com.wsscode.pathom.connect.merge_io.call(null,ia,ib));
}));
com.wsscode.pathom.connect.index_merger.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),(function (_,ia,ib){
return (com.wsscode.pathom.connect.merge_oir.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.merge_oir.cljs$core$IFn$_invoke$arity$2(ia,ib) : com.wsscode.pathom.connect.merge_oir.call(null,ia,ib));
}));
com.wsscode.pathom.connect.index_merger.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),(function (_,a,b){
return com.wsscode.pathom.connect.merge_grow(a,b);
}));
com.wsscode.pathom.connect.index_merger.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,a,b){
return com.wsscode.pathom.connect.merge_grow(a,b);
}));
com.wsscode.pathom.connect.merge_indexes = (function com$wsscode$pathom$connect$merge_indexes(ia,ib){
return cljs.core.reduce_kv((function (idx,k,v){
if(cljs.core.contains_QMARK_(idx,k)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(idx,k,(function (p1__89331_SHARP_){
return com.wsscode.pathom.connect.index_merger.cljs$core$IFn$_invoke$arity$3(k,p1__89331_SHARP_,v);
}));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(idx,k,v);
}
}),ia,ib);
});
com.wsscode.pathom.connect.output_provides_STAR_ = (function com$wsscode$pathom$connect$output_provides_STAR_(p__89335){
var map__89336 = p__89335;
var map__89336__$1 = (((((!((map__89336 == null))))?(((((map__89336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89336):map__89336);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89336__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89336__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__$1 = (cljs.core.truth_((function (){var G__89338 = children;
var G__89338__$1 = (((G__89338 == null))?null:cljs.core.first(G__89338));
var G__89338__$2 = (((G__89338__$1 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__89338__$1));
if((G__89338__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__89338__$2,new cljs.core.Keyword(null,"union","union",2142937499));
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))], 0)):children);
var G__89339 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null);
if(cljs.core.seq(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(G__89339,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (G__89339,children__$1,map__89336,map__89336__$1,key,children){
return (function (x){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__89339,children__$1,map__89336,map__89336__$1,key,children){
return (function (p1__89332_SHARP_){
return cljs.core.vec(cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[key,p1__89332_SHARP_],null))));
});})(G__89339,children__$1,map__89336,map__89336__$1,key,children))
,x);
});})(G__89339,children__$1,map__89336,map__89336__$1,key,children))
,((function (G__89339,children__$1,map__89336,map__89336__$1,key,children){
return (function (p1__89333_SHARP_){
return (com.wsscode.pathom.connect.output_provides_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.output_provides_STAR_.cljs$core$IFn$_invoke$arity$1(p1__89333_SHARP_) : com.wsscode.pathom.connect.output_provides_STAR_.call(null,p1__89333_SHARP_));
});})(G__89339,children__$1,map__89336,map__89336__$1,key,children))
)),children__$1);
} else {
return G__89339;
}
});
com.wsscode.pathom.connect.output_provides = (function com$wsscode$pathom$connect$output_provides(query){
if(cljs.core.map_QMARK_(query)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.output_provides),cljs.core.vals(query));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.output_provides_STAR_),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(query)));
}
});
com.wsscode.pathom.connect.normalized_children = (function com$wsscode$pathom$connect$normalized_children(p__89340){
var map__89341 = p__89340;
var map__89341__$1 = (((((!((map__89341 == null))))?(((((map__89341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89341):map__89341);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89341__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_((function (){var G__89343 = children;
var G__89343__$1 = (((G__89343 == null))?null:cljs.core.first(G__89343));
var G__89343__$2 = (((G__89343__$1 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__89343__$1));
if((G__89343__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__89343__$2,new cljs.core.Keyword(null,"union","union",2142937499));
}
})())){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))], 0));
} else {
return children;
}
});
com.wsscode.pathom.connect.index_attributes = (function com$wsscode$pathom$connect$index_attributes(p__89346){
var map__89347 = p__89346;
var map__89347__$1 = (((((!((map__89347 == null))))?(((((map__89347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89347):map__89347);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89347__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89347__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89347__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var provides = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__89347,map__89347__$1,sym,input,output){
return (function (p1__89344_SHARP_){
return cljs.core.contains_QMARK_(input,p1__89344_SHARP_);
});})(map__89347,map__89347__$1,sym,input,output))
,com.wsscode.pathom.connect.output_provides(output));
var sym_group = cljs.core.PersistentHashSet.createAsIfByAssoc([sym]);
var attr_provides = cljs.core.zipmap(provides,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(sym_group));
var input_count = cljs.core.count(input);
var _LT__GT_ = cljs.core.PersistentArrayMap.EMPTY;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,provides,sym_group,attr_provides,input_count,map__89347,map__89347__$1,sym,input,output){
return (function (idx,in_attr){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,in_attr,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),in_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),attr_provides,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),sym_group], null));
});})(_LT__GT_,provides,sym_group,attr_provides,input_count,map__89347,map__89347__$1,sym,input,output))
,_LT__GT_,(function (){var G__89349 = input_count;
switch (G__89349) {
case (0):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY], null);

break;
case (1):
return input;

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null);

}
})());
var _LT__GT___$2 = (((input_count > (1)))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,provides,sym_group,attr_provides,input_count,map__89347,map__89347__$1,sym,input,output){
return (function (idx,in_attr){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,in_attr,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),in_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),cljs.core.PersistentHashSet.createAsIfByAssoc([input]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),sym_group], null));
});})(_LT__GT_,_LT__GT___$1,provides,sym_group,attr_provides,input_count,map__89347,map__89347__$1,sym,input,output))
,_LT__GT___$1,input):_LT__GT___$1);
var _LT__GT___$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,_LT__GT___$2,provides,sym_group,attr_provides,input_count,map__89347,map__89347__$1,sym,input,output){
return (function (idx,out_attr){
if(cljs.core.vector_QMARK_(out_attr)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,cljs.core.peek(out_attr),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),cljs.core.peek(out_attr),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null),cljs.core.pop(out_attr)),sym_group]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),sym_group], null));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,out_attr,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),out_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.PersistentArrayMap.createAsIfByAssoc([input,sym_group]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),sym_group], null));
}
});})(_LT__GT_,_LT__GT___$1,_LT__GT___$2,provides,sym_group,attr_provides,input_count,map__89347,map__89347__$1,sym,input,output))
,_LT__GT___$2,provides);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__89347,map__89347__$1,sym,input,output){
return (function (idx,p__89350){
var map__89351 = p__89350;
var map__89351__$1 = (((((!((map__89351 == null))))?(((((map__89351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89351):map__89351);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89351__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89351__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__89353 = idx;
if(cljs.core.truth_(key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__89353,key,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(children)?new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732):new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711)),sym_group]));
} else {
return G__89353;
}
});})(_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__89347,map__89347__$1,sym,input,output))
,_LT__GT___$3,((cljs.core.map_QMARK_(output))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__89347,map__89347__$1,sym,input,output){
return (function (p1__89345_SHARP_){
return cljs.core.tree_seq(new cljs.core.Keyword(null,"children","children",-940561982),com.wsscode.pathom.connect.normalized_children,edn_query_language.core.query__GT_ast(p1__89345_SHARP_));
});})(_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__89347,map__89347__$1,sym,input,output))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(output)], 0)):cljs.core.tree_seq(new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"children","children",-940561982),edn_query_language.core.query__GT_ast(output))));
});
/**
 * Low level function to add resolvers to the index. This function adds the resolver
 *   configuration to the index set, adds the resolver to the ::pc/index-resolvers, add
 *   the output to input index in the ::pc/index-oir and the reverse index for auto-complete
 *   to the index ::pc/index-io.
 * 
 *   This is a low level function, for adding to your index prefer using `pc/register`.
 */
com.wsscode.pathom.connect.add = (function com$wsscode$pathom$connect$add(var_args){
var G__89355 = arguments.length;
switch (G__89355) {
case 2:
return com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$2 = (function (indexes,sym){
return com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$3(indexes,sym,cljs.core.PersistentArrayMap.EMPTY);
});

com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$3 = (function (indexes,sym,sym_data){
var provides = (function (){var G__89357 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(sym_data,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),cljs.core.PersistentVector.EMPTY);
return (com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1(G__89357) : com.wsscode.pathom.connect.normalize_io.call(null,G__89357));
})();
var map__89356 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.wsscode.pathom.connect","provides","com.wsscode.pathom.connect/provides",865831498),provides], null),sym_data], 0));
var map__89356__$1 = (((((!((map__89356 == null))))?(((((map__89356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89356):map__89356);
var sym_data__$1 = map__89356__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89356__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89356__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var input_SINGLEQUOTE_ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input))) && (cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.PersistentHashSet.EMPTY], null)),cljs.core.first(input)))))?cljs.core.PersistentHashSet.EMPTY:input);
return com.wsscode.pathom.connect.merge_indexes(indexes,(function (){var G__89359 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),cljs.core.PersistentArrayMap.createAsIfByAssoc([sym,sym_data__$1]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),com.wsscode.pathom.connect.index_attributes(sym_data__$1),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.PersistentArrayMap.createAsIfByAssoc([input_SINGLEQUOTE_,provides]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (provides,map__89356,map__89356__$1,sym_data__$1,input,output,input_SINGLEQUOTE_){
return (function (indexes__$1,out_attr){
var G__89360 = indexes__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([out_attr]),input)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__89360,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out_attr,input], null),com.wsscode.pathom.misc.sconj,sym);
} else {
return G__89360;
}
});})(provides,map__89356,map__89356__$1,sym_data__$1,input,output,input_SINGLEQUOTE_))
,cljs.core.PersistentArrayMap.EMPTY,com.wsscode.pathom.connect.flat_query(output))], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input_SINGLEQUOTE_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__89359,new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(input_SINGLEQUOTE_)]));
} else {
return G__89359;
}
})());
});

com.wsscode.pathom.connect.add.cljs$lang$maxFixedArity = 3;

com.wsscode.pathom.connect.add_mutation = (function com$wsscode$pathom$connect$add_mutation(indexes,sym,p__89361){
var map__89362 = p__89361;
var map__89362__$1 = (((((!((map__89362 == null))))?(((((map__89362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89362):map__89362);
var data = map__89362__$1;
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89362__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89362__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
return com.wsscode.pathom.connect.merge_indexes(indexes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),cljs.core.PersistentArrayMap.createAsIfByAssoc([sym,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym)]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),(function (){var _LT__GT_ = cljs.core.PersistentArrayMap.EMPTY;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,map__89362,map__89362__$1,data,params,output){
return (function (idx,attribute){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,attribute,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),attribute,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),cljs.core.PersistentHashSet.createAsIfByAssoc([sym])], null));
});})(_LT__GT_,map__89362,map__89362__$1,data,params,output))
,_LT__GT_,(function (){var G__89364 = params;
var G__89364__$1 = (((G__89364 == null))?null:edn_query_language.core.query__GT_ast(G__89364));
if((G__89364__$1 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast_properties(G__89364__$1);
}
})());
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,map__89362,map__89362__$1,data,params,output){
return (function (idx,attribute){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,attribute,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),attribute,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),cljs.core.PersistentHashSet.createAsIfByAssoc([sym])], null));
});})(_LT__GT_,_LT__GT___$1,map__89362,map__89362__$1,data,params,output))
,_LT__GT___$1,(function (){var G__89365 = output;
var G__89365__$1 = (((G__89365 == null))?null:edn_query_language.core.query__GT_ast(G__89365));
if((G__89365__$1 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast_properties(G__89365__$1);
}
})());
})()], null));
});
/**
 * Updates the index by registering the given resolver or mutation (lets call it item),
 *   an item can be:
 * 
 *   1. a resolver map
 *   2. a mutation map
 *   3. a sequence with items
 * 
 *   The sequence version can have nested sequences, they will be recursively add.
 * 
 *   Examples of possible usages:
 * 
 *    (-> {} ; blank index
 *        (pc/register one-resolver) ; single resolver
 *        (pc/register one-mutation) ; single mutation
 *        (pc/register [one-resolver one-mutation]) ; sequence of resolvers/mutations
 *        (pc/register [[resolver1 resolver2] [resolver3 mutation]]) ; nested sequences
 *        (pc/register [[resolver1 resolver2] resolver-out [resolver3 mutation]]) ; all mixed
 *        )
 *   
 */
com.wsscode.pathom.connect.register = (function com$wsscode$pathom$connect$register(indexes,item_or_items){
if(cljs.core.sequential_QMARK_(item_or_items)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.connect.register,indexes,item_or_items);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772).cljs$core$IFn$_invoke$arity$1(item_or_items))){
return com.wsscode.pathom.connect.add.cljs$core$IFn$_invoke$arity$3(indexes,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(item_or_items),item_or_items);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112).cljs$core$IFn$_invoke$arity$1(item_or_items))){
return com.wsscode.pathom.connect.add_mutation(indexes,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(item_or_items),item_or_items);
} else {
return null;
}
}
}
});
com.wsscode.pathom.connect.sort_resolvers = (function com$wsscode$pathom$connect$sort_resolvers(p__89366,resolvers,e){
var map__89367 = p__89366;
var map__89367__$1 = (((((!((map__89367 == null))))?(((((map__89367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89367):map__89367);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89367__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (map__89367,map__89367__$1,request_cache){
return (function (s){
if(cljs.core.truth_(request_cache)){
if(cljs.core.contains_QMARK_(cljs.core.deref(request_cache),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,e], null))){
return (0);
} else {
return (1);
}
} else {
return (1);
}
});})(map__89367,map__89367__$1,request_cache))
,resolvers);
});
/**
 * DEPRECATED
 */
com.wsscode.pathom.connect.pick_resolver = (function com$wsscode$pathom$connect$pick_resolver(p__89369){
var map__89370 = p__89369;
var map__89370__$1 = (((((!((map__89370 == null))))?(((((map__89370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89370):map__89370);
var env = map__89370__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89370__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var dependency_track = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89370__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null));
if(cljs.core.truth_(temp__5718__auto__)){
var attr_resolvers = temp__5718__auto__;
var r = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword(null,"missing","missing",362507769)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attr_resolvers,temp__5718__auto__,k,e,map__89370,map__89370__$1,env,indexes,dependency_track){
return (function (p__89372){
var vec__89373 = p__89372;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89373,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89373,(1),null);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.set(cljs.core.keys(e)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"missing","missing",362507769),missing], null);
});})(attr_resolvers,temp__5718__auto__,k,e,map__89370,map__89370__$1,env,indexes,dependency_track))
,attr_resolvers));
var G__89380 = r;
var vec__89381 = G__89380;
var seq__89382 = cljs.core.seq(vec__89381);
var first__89383 = cljs.core.first(seq__89382);
var seq__89382__$1 = cljs.core.next(seq__89382);
var map__89384 = first__89383;
var map__89384__$1 = (((((!((map__89384 == null))))?(((((map__89384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89384):map__89384);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89384__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89384__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var t = seq__89382__$1;
var xs = vec__89381;
var G__89380__$1 = G__89380;
while(true){
var vec__89386 = G__89380__$1;
var seq__89387 = cljs.core.seq(vec__89386);
var first__89388 = cljs.core.first(seq__89387);
var seq__89387__$1 = cljs.core.next(seq__89387);
var map__89389 = first__89388;
var map__89389__$1 = (((((!((map__89389 == null))))?(((((map__89389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89389):map__89389);
var sym__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89389__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var attrs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89389__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var t__$1 = seq__89387__$1;
var xs__$1 = vec__89386;
if(cljs.core.truth_(xs__$1)){
if((!(cljs.core.contains_QMARK_(dependency_track,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,attrs__$1], null))))){
var e__$1 = (function (){try{return com.wsscode.pathom.core.elide_items(com.wsscode.pathom.core.break_values,com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465),true),new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,attrs__$1], null)),attrs__$1));
}catch (e89391){var _ = e89391;
return cljs.core.PersistentArrayMap.EMPTY;
}})();
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attrs__$1),cljs.core.set(cljs.core.keys(e__$1)));
if(cljs.core.seq(missing)){
var G__94314 = t__$1;
G__89380__$1 = G__94314;
continue;
} else {
var e__$2 = cljs.core.select_keys(e__$1,attrs__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"e","e",1381269198),e__$2,new cljs.core.Keyword(null,"s","s",1705939918),cljs.core.first(com.wsscode.pathom.connect.sort_resolvers(env,sym__$1,e__$2))], null);
}
} else {
return null;
}
} else {
return null;
}
break;
}
} else {
return null;
}
});
/**
 * DEPRECATED
 */
com.wsscode.pathom.connect.async_pick_resolver = (function com$wsscode$pathom$connect$async_pick_resolver(p__89392){
var map__89393 = p__89392;
var map__89393__$1 = (((((!((map__89393 == null))))?(((((map__89393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89393):map__89393);
var env = map__89393__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89393__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var dependency_track = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89393__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185));
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__89393,map__89393__$1,env,indexes,dependency_track){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__89393,map__89393__$1,env,indexes,dependency_track){
return (function (state_89535){
var state_val_89536 = (state_89535[(1)]);
if((state_val_89536 === (7))){
var inst_89531 = (state_89535[(2)]);
var state_89535__$1 = state_89535;
var statearr_89537_94317 = state_89535__$1;
(statearr_89537_94317[(2)] = inst_89531);


cljs.core.async.impl.ioc_helpers.process_exception(state_89535__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (20))){
var state_89535__$1 = state_89535;
var statearr_89538_94318 = state_89535__$1;
(statearr_89538_94318[(2)] = false);

(statearr_89538_94318[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (27))){
var inst_89447 = (state_89535[(7)]);
var inst_89476 = (state_89535[(2)]);
var inst_89477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_89476,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var inst_89478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_89476,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var state_89535__$1 = (function (){var statearr_89539 = state_89535;
(statearr_89539[(8)] = inst_89477);

(statearr_89539[(9)] = inst_89478);

return statearr_89539;
})();
if(cljs.core.truth_(inst_89447)){
var statearr_89540_94319 = state_89535__$1;
(statearr_89540_94319[(1)] = (28));

} else {
var statearr_89541_94322 = state_89535__$1;
(statearr_89541_94322[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (1))){
var state_89535__$1 = state_89535;
var statearr_89542_94323 = state_89535__$1;
(statearr_89542_94323[(2)] = null);

(statearr_89542_94323[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (24))){
var inst_89468 = (state_89535[(2)]);
var state_89535__$1 = state_89535;
var statearr_89543_94325 = state_89535__$1;
(statearr_89543_94325[(2)] = inst_89468);

(statearr_89543_94325[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (39))){
var inst_89504 = (state_89535[(10)]);
var inst_89477 = (state_89535[(8)]);
var inst_89478 = (state_89535[(9)]);
var inst_89513 = [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"s","s",1705939918)];
var inst_89514 = cljs.core.select_keys(inst_89504,inst_89478);
var inst_89515 = com.wsscode.pathom.connect.sort_resolvers(env,inst_89477,inst_89504);
var inst_89516 = cljs.core.first(inst_89515);
var inst_89517 = [inst_89514,inst_89516];
var inst_89518 = cljs.core.PersistentHashMap.fromArrays(inst_89513,inst_89517);
var state_89535__$1 = state_89535;
var statearr_89544_94336 = state_89535__$1;
(statearr_89544_94336[(2)] = inst_89518);

(statearr_89544_94336[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (4))){
var inst_89400 = (state_89535[(11)]);
var inst_89405 = (state_89535[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_89535,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_89399 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_89400__$1 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_89399);
var inst_89401 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var inst_89402 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_89403 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),inst_89400__$1];
var inst_89404 = (new cljs.core.PersistentVector(null,2,(5),inst_89402,inst_89403,null));
var inst_89405__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_89404);
var state_89535__$1 = (function (){var statearr_89545 = state_89535;
(statearr_89545[(11)] = inst_89400__$1);

(statearr_89545[(12)] = inst_89405__$1);

(statearr_89545[(13)] = inst_89401);

return statearr_89545;
})();
if(cljs.core.truth_(inst_89405__$1)){
var statearr_89546_94340 = state_89535__$1;
(statearr_89546_94340[(1)] = (5));

} else {
var statearr_89547_94342 = state_89535__$1;
(statearr_89547_94342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (15))){
var inst_89422 = (state_89535[(14)]);
var state_89535__$1 = state_89535;
var statearr_89548_94343 = state_89535__$1;
(statearr_89548_94343[(2)] = inst_89422);

(statearr_89548_94343[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (21))){
var inst_89471 = (state_89535[(2)]);
var state_89535__$1 = state_89535;
if(cljs.core.truth_(inst_89471)){
var statearr_89549_94344 = state_89535__$1;
(statearr_89549_94344[(1)] = (25));

} else {
var statearr_89550_94345 = state_89535__$1;
(statearr_89550_94345[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (31))){
var state_89535__$1 = state_89535;
var statearr_89551_94346 = state_89535__$1;
(statearr_89551_94346[(2)] = null);

(statearr_89551_94346[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (32))){
var state_89535__$1 = state_89535;
var statearr_89552_94349 = state_89535__$1;
(statearr_89552_94349[(2)] = null);

(statearr_89552_94349[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (40))){
var inst_89520 = (state_89535[(2)]);
var state_89535__$1 = state_89535;
var statearr_89553_94352 = state_89535__$1;
(statearr_89553_94352[(2)] = inst_89520);

(statearr_89553_94352[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (33))){
var inst_89523 = (state_89535[(2)]);
var state_89535__$1 = state_89535;
var statearr_89554_94353 = state_89535__$1;
(statearr_89554_94353[(2)] = inst_89523);

(statearr_89554_94353[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (13))){
var inst_89436 = (state_89535[(2)]);
var state_89535__$1 = state_89535;
var statearr_89555_94354 = state_89535__$1;
(statearr_89555_94354[(2)] = inst_89436);

(statearr_89555_94354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (22))){
var state_89535__$1 = state_89535;
var statearr_89556_94355 = state_89535__$1;
(statearr_89556_94355[(2)] = true);

(statearr_89556_94355[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (36))){
var inst_89477 = (state_89535[(8)]);
var inst_89478 = (state_89535[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_89535,(35),new cljs.core.Keyword(null,"default","default",-1987822328),null,(34));
var inst_89491 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465),true);
var inst_89492 = cljs.core.PersistentHashSet.EMPTY;
var inst_89493 = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,inst_89492);
var inst_89494 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_89495 = [inst_89477,inst_89478];
var inst_89496 = (new cljs.core.PersistentVector(null,2,(5),inst_89494,inst_89495,null));
var inst_89497 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_89491,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),inst_89493,inst_89496);
var inst_89498 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(inst_89497,inst_89478);
var state_89535__$1 = state_89535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89535__$1,(37),inst_89498);
} else {
if((state_val_89536 === (29))){
var state_89535__$1 = state_89535;
var statearr_89557_94356 = state_89535__$1;
(statearr_89557_94356[(2)] = null);

(statearr_89557_94356[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (6))){
var state_89535__$1 = state_89535;
var statearr_89558_94357 = state_89535__$1;
(statearr_89558_94357[(2)] = null);

(statearr_89558_94357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (28))){
var inst_89477 = (state_89535[(8)]);
var inst_89478 = (state_89535[(9)]);
var inst_89480 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_89481 = [inst_89477,inst_89478];
var inst_89482 = (new cljs.core.PersistentVector(null,2,(5),inst_89480,inst_89481,null));
var inst_89483 = cljs.core.contains_QMARK_(dependency_track,inst_89482);
var inst_89484 = (!(inst_89483));
var state_89535__$1 = state_89535;
if(inst_89484){
var statearr_89559_94359 = state_89535__$1;
(statearr_89559_94359[(1)] = (31));

} else {
var statearr_89560_94360 = state_89535__$1;
(statearr_89560_94360[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (25))){
var inst_89454 = (state_89535[(15)]);
var inst_89473 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_89454);
var state_89535__$1 = state_89535;
var statearr_89561_94361 = state_89535__$1;
(statearr_89561_94361[(2)] = inst_89473);

(statearr_89561_94361[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (34))){
var inst_89504 = (state_89535[(10)]);
var inst_89478 = (state_89535[(9)]);
var inst_89504__$1 = (state_89535[(2)]);
var inst_89505 = cljs.core.set(inst_89478);
var inst_89506 = cljs.core.keys(inst_89504__$1);
var inst_89507 = cljs.core.set(inst_89506);
var inst_89508 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_89505,inst_89507);
var inst_89509 = cljs.core.seq(inst_89508);
var state_89535__$1 = (function (){var statearr_89562 = state_89535;
(statearr_89562[(10)] = inst_89504__$1);

return statearr_89562;
})();
if(inst_89509){
var statearr_89563_94362 = state_89535__$1;
(statearr_89563_94362[(1)] = (38));

} else {
var statearr_89564_94363 = state_89535__$1;
(statearr_89564_94363[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (17))){
var inst_89454 = (state_89535[(15)]);
var inst_89447 = (state_89535[(7)]);
var inst_89453 = cljs.core.seq(inst_89447);
var inst_89454__$1 = cljs.core.first(inst_89453);
var inst_89455 = cljs.core.next(inst_89453);
var inst_89457 = (inst_89454__$1 == null);
var inst_89458 = cljs.core.not(inst_89457);
var state_89535__$1 = (function (){var statearr_89565 = state_89535;
(statearr_89565[(16)] = inst_89455);

(statearr_89565[(15)] = inst_89454__$1);

return statearr_89565;
})();
if(inst_89458){
var statearr_89566_94365 = state_89535__$1;
(statearr_89566_94365[(1)] = (19));

} else {
var statearr_89567_94366 = state_89535__$1;
(statearr_89567_94366[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (3))){
var inst_89395 = (state_89535[(2)]);
var state_89535__$1 = state_89535;
var statearr_89568_94368 = state_89535__$1;
(statearr_89568_94368[(2)] = inst_89395);


cljs.core.async.impl.ioc_helpers.process_exception(state_89535__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (12))){
var state_89535__$1 = state_89535;
var statearr_89569_94370 = state_89535__$1;
(statearr_89569_94370[(2)] = false);

(statearr_89569_94370[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (2))){
var inst_89533 = (state_89535[(2)]);
var state_89535__$1 = state_89535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_89535__$1,inst_89533);
} else {
if((state_val_89536 === (23))){
var state_89535__$1 = state_89535;
var statearr_89570_94371 = state_89535__$1;
(statearr_89570_94371[(2)] = false);

(statearr_89570_94371[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (35))){
var inst_89486 = (state_89535[(2)]);
var inst_89487 = cljs.core.PersistentHashMap.EMPTY;
var state_89535__$1 = (function (){var statearr_89571 = state_89535;
(statearr_89571[(17)] = inst_89486);

return statearr_89571;
})();
var statearr_89572_94372 = state_89535__$1;
(statearr_89572_94372[(2)] = inst_89487);


cljs.core.async.impl.ioc_helpers.process_exception(state_89535__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (19))){
var inst_89454 = (state_89535[(15)]);
var inst_89460 = inst_89454.cljs$lang$protocol_mask$partition0$;
var inst_89461 = (inst_89460 & (64));
var inst_89462 = inst_89454.cljs$core$ISeq$;
var inst_89463 = (cljs.core.PROTOCOL_SENTINEL === inst_89462);
var inst_89464 = ((inst_89461) || (inst_89463));
var state_89535__$1 = state_89535;
if(cljs.core.truth_(inst_89464)){
var statearr_89573_94373 = state_89535__$1;
(statearr_89573_94373[(1)] = (22));

} else {
var statearr_89574_94374 = state_89535__$1;
(statearr_89574_94374[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (11))){
var state_89535__$1 = state_89535;
var statearr_89575_94375 = state_89535__$1;
(statearr_89575_94375[(2)] = true);

(statearr_89575_94375[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (9))){
var state_89535__$1 = state_89535;
var statearr_89576_94378 = state_89535__$1;
(statearr_89576_94378[(2)] = false);

(statearr_89576_94378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (5))){
var inst_89400 = (state_89535[(11)]);
var inst_89411 = (state_89535[(18)]);
var inst_89405 = (state_89535[(12)]);
var inst_89401 = (state_89535[(13)]);
var inst_89422 = (state_89535[(14)]);
var inst_89407 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword(null,"missing","missing",362507769));
var inst_89409 = (function (){var k = inst_89400;
var e = inst_89401;
var temp__5718__auto__ = inst_89405;
var attr_resolvers = inst_89405;
return ((function (k,e,temp__5718__auto__,attr_resolvers,inst_89400,inst_89411,inst_89405,inst_89401,inst_89422,inst_89407,state_val_89536,c__47946__auto__,map__89393,map__89393__$1,env,indexes,dependency_track){
return (function (p__89408){
var vec__89577 = p__89408;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89577,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89577,(1),null);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.set(cljs.core.keys(e)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"missing","missing",362507769),missing], null);
});
;})(k,e,temp__5718__auto__,attr_resolvers,inst_89400,inst_89411,inst_89405,inst_89401,inst_89422,inst_89407,state_val_89536,c__47946__auto__,map__89393,map__89393__$1,env,indexes,dependency_track))
})();
var inst_89410 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_89409,inst_89405);
var inst_89411__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(inst_89407,inst_89410);
var inst_89421 = cljs.core.seq(inst_89411__$1);
var inst_89422__$1 = cljs.core.first(inst_89421);
var inst_89423 = cljs.core.next(inst_89421);
var inst_89425 = (inst_89422__$1 == null);
var inst_89426 = cljs.core.not(inst_89425);
var state_89535__$1 = (function (){var statearr_89580 = state_89535;
(statearr_89580[(18)] = inst_89411__$1);

(statearr_89580[(19)] = inst_89423);

(statearr_89580[(14)] = inst_89422__$1);

return statearr_89580;
})();
if(inst_89426){
var statearr_89581_94381 = state_89535__$1;
(statearr_89581_94381[(1)] = (8));

} else {
var statearr_89582_94382 = state_89535__$1;
(statearr_89582_94382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (14))){
var inst_89422 = (state_89535[(14)]);
var inst_89441 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_89422);
var state_89535__$1 = state_89535;
var statearr_89583_94383 = state_89535__$1;
(statearr_89583_94383[(2)] = inst_89441);

(statearr_89583_94383[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (26))){
var inst_89454 = (state_89535[(15)]);
var state_89535__$1 = state_89535;
var statearr_89584_94384 = state_89535__$1;
(statearr_89584_94384[(2)] = inst_89454);

(statearr_89584_94384[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (16))){
var inst_89411 = (state_89535[(18)]);
var inst_89444 = (state_89535[(2)]);
var inst_89445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_89444,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var inst_89446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_89444,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var inst_89447 = inst_89411;
var state_89535__$1 = (function (){var statearr_89585 = state_89535;
(statearr_89585[(20)] = inst_89446);

(statearr_89585[(7)] = inst_89447);

(statearr_89585[(21)] = inst_89445);

return statearr_89585;
})();
var statearr_89586_94385 = state_89535__$1;
(statearr_89586_94385[(2)] = null);

(statearr_89586_94385[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (38))){
var inst_89455 = (state_89535[(16)]);
var inst_89447 = inst_89455;
var state_89535__$1 = (function (){var statearr_89587 = state_89535;
(statearr_89587[(7)] = inst_89447);

return statearr_89587;
})();
var statearr_89588_94386 = state_89535__$1;
(statearr_89588_94386[(2)] = null);

(statearr_89588_94386[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (30))){
var inst_89526 = (state_89535[(2)]);
var state_89535__$1 = state_89535;
var statearr_89589_94387 = state_89535__$1;
(statearr_89589_94387[(2)] = inst_89526);

(statearr_89589_94387[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (10))){
var inst_89439 = (state_89535[(2)]);
var state_89535__$1 = state_89535;
if(cljs.core.truth_(inst_89439)){
var statearr_89590_94388 = state_89535__$1;
(statearr_89590_94388[(1)] = (14));

} else {
var statearr_89591_94389 = state_89535__$1;
(statearr_89591_94389[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (18))){
var inst_89528 = (state_89535[(2)]);
var state_89535__$1 = state_89535;
var statearr_89592_94390 = state_89535__$1;
(statearr_89592_94390[(2)] = inst_89528);

(statearr_89592_94390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (37))){
var inst_89500 = (state_89535[(2)]);
var inst_89501 = com.wsscode.async.async_cljs.throw_err(inst_89500);
var inst_89502 = com.wsscode.pathom.core.elide_items(com.wsscode.pathom.core.break_values,inst_89501);
var state_89535__$1 = state_89535;
var statearr_89593_94391 = state_89535__$1;
(statearr_89593_94391[(2)] = inst_89502);


cljs.core.async.impl.ioc_helpers.process_exception(state_89535__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (8))){
var inst_89422 = (state_89535[(14)]);
var inst_89428 = inst_89422.cljs$lang$protocol_mask$partition0$;
var inst_89429 = (inst_89428 & (64));
var inst_89430 = inst_89422.cljs$core$ISeq$;
var inst_89431 = (cljs.core.PROTOCOL_SENTINEL === inst_89430);
var inst_89432 = ((inst_89429) || (inst_89431));
var state_89535__$1 = state_89535;
if(cljs.core.truth_(inst_89432)){
var statearr_89594_94392 = state_89535__$1;
(statearr_89594_94392[(1)] = (11));

} else {
var statearr_89595_94393 = state_89535__$1;
(statearr_89595_94393[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47946__auto__,map__89393,map__89393__$1,env,indexes,dependency_track))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__89393,map__89393__$1,env,indexes,dependency_track){
return (function() {
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__47664__auto____0 = (function (){
var statearr_89596 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89596[(0)] = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__47664__auto__);

(statearr_89596[(1)] = (1));

return statearr_89596;
});
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__47664__auto____1 = (function (state_89535){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_89535);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e89597){if((e89597 instanceof Object)){
var ex__47667__auto__ = e89597;
var statearr_89598_94394 = state_89535;
(statearr_89598_94394[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_89535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89597;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94395 = state_89535;
state_89535 = G__94395;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__47664__auto__ = function(state_89535){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__47664__auto____1.call(this,state_89535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__89393,map__89393__$1,env,indexes,dependency_track))
})();
var state__47948__auto__ = (function (){var statearr_89599 = f__47947__auto__();
(statearr_89599[(6)] = c__47946__auto__);

return statearr_89599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__89393,map__89393__$1,env,indexes,dependency_track))
);

return c__47946__auto__;
});
com.wsscode.pathom.connect.default_resolver_dispatch = (function com$wsscode$pathom$connect$default_resolver_dispatch(_env,_entity){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Default resolver-dispatch is not supported on CLJS, please implement ::p.connect/resolver-dispatch in your parser environment.",cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Helper method that extract resolver symbol from env. It's recommended to use as a dispatch method for creating
 *   multi-methods for resolver dispatch.
 */
com.wsscode.pathom.connect.resolver_dispatch = (function com$wsscode$pathom$connect$resolver_dispatch(var_args){
var G__89601 = arguments.length;
switch (G__89601) {
case 1:
return com.wsscode.pathom.connect.resolver_dispatch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.connect.resolver_dispatch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.connect.resolver_dispatch.cljs$core$IFn$_invoke$arity$1 = (function (env){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null));
});

com.wsscode.pathom.connect.resolver_dispatch.cljs$core$IFn$_invoke$arity$2 = (function (env,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null));
});

com.wsscode.pathom.connect.resolver_dispatch.cljs$lang$maxFixedArity = 2;

/**
 * This dispatch method will fire the resolver by looking at the ::pc/resolve
 *   key in the resolver map details.
 */
com.wsscode.pathom.connect.resolver_dispatch_embedded = (function com$wsscode$pathom$connect$resolver_dispatch_embedded(p__89602,entity){
var map__89603 = p__89602;
var map__89603__$1 = (((((!((map__89603 == null))))?(((((map__89603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89603):map__89603);
var env = map__89603__$1;
var map__89604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89603__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__89604__$1 = (((((!((map__89604 == null))))?(((((map__89604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89604):map__89604);
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89604__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89604__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
if(cljs.core.truth_(resolve)){
} else {
throw (new Error(["Assert failed: ",["Can't find resolve fn for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),"\n","resolve"].join('')));
}

return (resolve.cljs$core$IFn$_invoke$arity$2 ? resolve.cljs$core$IFn$_invoke$arity$2(env,entity) : resolve.call(null,env,entity));
});
com.wsscode.pathom.connect.step_weight = (function com$wsscode$pathom$connect$step_weight(value,new_value){
return (((function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + new_value) * 0.5);
});
com.wsscode.pathom.connect.update_resolver_weight = (function com$wsscode$pathom$connect$update_resolver_weight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___94404 = arguments.length;
var i__4731__auto___94405 = (0);
while(true){
if((i__4731__auto___94405 < len__4730__auto___94404)){
args__4736__auto__.push((arguments[i__4731__auto___94405]));

var G__94406 = (i__4731__auto___94405 + (1));
i__4731__auto___94405 = G__94406;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic = (function (p__89610,resolver,args){
var map__89611 = p__89610;
var map__89611__$1 = (((((!((map__89611 == null))))?(((((map__89611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89611):map__89611);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89611__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
if(cljs.core.truth_(resolver_weights)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,resolver_weights,cljs.core.update,resolver,args);
} else {
return null;
}
});

com.wsscode.pathom.connect.update_resolver_weight.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.connect.update_resolver_weight.cljs$lang$applyTo = (function (seq89607){
var G__89608 = cljs.core.first(seq89607);
var seq89607__$1 = cljs.core.next(seq89607);
var G__89609 = cljs.core.first(seq89607__$1);
var seq89607__$2 = cljs.core.next(seq89607__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__89608,G__89609,seq89607__$2);
});

com.wsscode.pathom.connect.call_resolver_STAR_ = (function com$wsscode$pathom$connect$call_resolver_STAR_(p__89613,entity){
var map__89614 = p__89613;
var map__89614__$1 = (((((!((map__89614 == null))))?(((((map__89614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89614):map__89614);
var env = map__89614__$1;
var resolver_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__89614__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.connect.default_resolver_dispatch);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89614__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var resolver_sym = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env));
var tid = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),cljs.core.str.cljs$core$IFn$_invoke$arity$1(resolver_sym),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),entity], null));
var start = com.wsscode.pathom.trace.now();
var res__53564__auto__ = (function (){try{return com.wsscode.pathom.core.exec_plugin_actions.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.connect","wrap-resolve","com.wsscode.pathom.connect/wrap-resolve",1728436586),resolver_dispatch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,entity], 0));
}catch (e89616){var e = e89616;
return e;
}})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53564__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53564__auto__,resolver_sym,tid,start,map__89614,map__89614__$1,env,resolver_dispatch,resolver_weights){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53564__auto__,resolver_sym,tid,start,map__89614,map__89614__$1,env,resolver_dispatch,resolver_weights){
return (function (state_89646){
var state_val_89647 = (state_89646[(1)]);
if((state_val_89647 === (7))){
var state_89646__$1 = state_89646;
var statearr_89648_94409 = state_89646__$1;
(statearr_89648_94409[(2)] = null);

(statearr_89648_94409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89647 === (1))){
var state_89646__$1 = state_89646;
var statearr_89649_94410 = state_89646__$1;
(statearr_89649_94410[(2)] = null);

(statearr_89649_94410[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89647 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_89646,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_89646__$1 = state_89646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89646__$1,(5),res__53564__auto__);
} else {
if((state_val_89647 === (6))){
var inst_89624 = com.wsscode.pathom.trace.now();
var inst_89625 = (inst_89624 - start);
var inst_89626 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(resolver_weights,cljs.core.update,resolver_sym,com.wsscode.pathom.connect.step_weight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_89625], 0));
var state_89646__$1 = state_89646;
var statearr_89650_94412 = state_89646__$1;
(statearr_89650_94412[(2)] = inst_89626);

(statearr_89650_94412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89647 === (3))){
var inst_89617 = (state_89646[(2)]);
var state_89646__$1 = state_89646;
var statearr_89651_94413 = state_89646__$1;
(statearr_89651_94413[(2)] = inst_89617);


cljs.core.async.impl.ioc_helpers.process_exception(state_89646__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89647 === (2))){
var inst_89644 = (state_89646[(2)]);
var state_89646__$1 = state_89646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_89646__$1,inst_89644);
} else {
if((state_val_89647 === (11))){
var inst_89622 = (state_89646[(7)]);
var inst_89640 = (state_89646[(2)]);
var inst_89641 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,inst_89640);
var inst_89642 = com.wsscode.async.async_cljs.throw_err(inst_89622);
var state_89646__$1 = (function (){var statearr_89652 = state_89646;
(statearr_89652[(8)] = inst_89641);

return statearr_89652;
})();
var statearr_89653_94414 = state_89646__$1;
(statearr_89653_94414[(2)] = inst_89642);


cljs.core.async.impl.ioc_helpers.process_exception(state_89646__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89647 === (9))){
var inst_89633 = (state_89646[(9)]);
var inst_89622 = (state_89646[(7)]);
var inst_89636 = com.wsscode.pathom.core.process_error(env,inst_89622);
var inst_89637 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_89633,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),inst_89636);
var state_89646__$1 = state_89646;
var statearr_89654_94416 = state_89646__$1;
(statearr_89654_94416[(2)] = inst_89637);

(statearr_89654_94416[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89647 === (5))){
var inst_89622 = (state_89646[(2)]);
var state_89646__$1 = (function (){var statearr_89655 = state_89646;
(statearr_89655[(7)] = inst_89622);

return statearr_89655;
})();
if(cljs.core.truth_(resolver_weights)){
var statearr_89656_94417 = state_89646__$1;
(statearr_89656_94417[(1)] = (6));

} else {
var statearr_89657_94418 = state_89646__$1;
(statearr_89657_94418[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89647 === (10))){
var inst_89633 = (state_89646[(9)]);
var state_89646__$1 = state_89646;
var statearr_89658_94419 = state_89646__$1;
(statearr_89658_94419[(2)] = inst_89633);

(statearr_89658_94419[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89647 === (8))){
var inst_89622 = (state_89646[(7)]);
var inst_89629 = (state_89646[(2)]);
var inst_89631 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_89632 = [new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624)];
var inst_89633 = cljs.core.PersistentHashMap.fromArrays(inst_89631,inst_89632);
var inst_89634 = com.wsscode.async.async_cljs.error_QMARK_(inst_89622);
var state_89646__$1 = (function (){var statearr_89659 = state_89646;
(statearr_89659[(9)] = inst_89633);

(statearr_89659[(10)] = inst_89629);

return statearr_89659;
})();
if(inst_89634){
var statearr_89660_94421 = state_89646__$1;
(statearr_89660_94421[(1)] = (9));

} else {
var statearr_89661_94422 = state_89646__$1;
(statearr_89661_94422[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__47946__auto__,res__53564__auto__,resolver_sym,tid,start,map__89614,map__89614__$1,env,resolver_dispatch,resolver_weights))
;
return ((function (switch__47663__auto__,c__47946__auto__,res__53564__auto__,resolver_sym,tid,start,map__89614,map__89614__$1,env,resolver_dispatch,resolver_weights){
return (function() {
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__47664__auto____0 = (function (){
var statearr_89662 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_89662[(0)] = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__47664__auto__);

(statearr_89662[(1)] = (1));

return statearr_89662;
});
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__47664__auto____1 = (function (state_89646){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_89646);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e89663){if((e89663 instanceof Object)){
var ex__47667__auto__ = e89663;
var statearr_89664_94424 = state_89646;
(statearr_89664_94424[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_89646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89663;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94426 = state_89646;
state_89646 = G__94426;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__47664__auto__ = function(state_89646){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__47664__auto____1.call(this,state_89646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53564__auto__,resolver_sym,tid,start,map__89614,map__89614__$1,env,resolver_dispatch,resolver_weights))
})();
var state__47948__auto__ = (function (){var statearr_89665 = f__47947__auto__();
(statearr_89665[(6)] = c__47946__auto__);

return statearr_89665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,res__53564__auto__,resolver_sym,tid,start,map__89614,map__89614__$1,env,resolver_dispatch,resolver_weights))
);

return c__47946__auto__;
} else {
var x = res__53564__auto__;
if(cljs.core.truth_(resolver_weights)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(resolver_weights,cljs.core.update,resolver_sym,com.wsscode.pathom.connect.step_weight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.trace.now() - start)], 0));
} else {
}

com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,(function (){var G__89666 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624)], null);
if(com.wsscode.async.async_cljs.error_QMARK_(x)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__89666,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),com.wsscode.pathom.core.process_error(env,x));
} else {
return G__89666;
}
})());

return com.wsscode.async.async_cljs.throw_err(x);
}
});
com.wsscode.pathom.connect.call_resolver = (function com$wsscode$pathom$connect$call_resolver(p__89668,entity){
var map__89669 = p__89668;
var map__89669__$1 = (((((!((map__89669 == null))))?(((((map__89669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89669):map__89669);
var env = map__89669__$1;
var pool_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89669__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449));
if(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__89669,map__89669__$1,env,pool_chan){
return (function (p1__89667_SHARP_){
return cljs.core.contains_QMARK_(com.wsscode.pathom.core.break_values,cljs.core.second(p1__89667_SHARP_));
});})(map__89669,map__89669__$1,env,pool_chan))
,entity))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver input",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity","entity",-450970276),entity], null));
} else {
if(cljs.core.truth_(pool_chan)){
var out = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___94430 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___94430,out,map__89669,map__89669__$1,env,pool_chan){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___94430,out,map__89669,map__89669__$1,env,pool_chan){
return (function (state_89689){
var state_val_89690 = (state_89689[(1)]);
if((state_val_89690 === (1))){
var inst_89671 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_89672 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_89673 = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(inst_89672);
var inst_89674 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_89673);
var inst_89675 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_89676 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_89675);
var inst_89677 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_89678 = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(inst_89677);
var inst_89679 = [new cljs.core.Keyword("com.wsscode.pathom.connect","schedule-resolver","com.wsscode.pathom.connect/schedule-resolver",939563419),inst_89674,inst_89676,inst_89678,entity];
var inst_89680 = cljs.core.PersistentHashMap.fromArrays(inst_89671,inst_89679);
var inst_89681 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_89680);
var inst_89682 = [new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"f","f",-1597136552)];
var inst_89683 = (function (){var tid = inst_89681;
return ((function (tid,inst_89671,inst_89672,inst_89673,inst_89674,inst_89675,inst_89676,inst_89677,inst_89678,inst_89679,inst_89680,inst_89681,inst_89682,state_val_89690,c__47946__auto___94430,out,map__89669,map__89669__$1,env,pool_chan){
return (function (){
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","schedule-resolver","com.wsscode.pathom.connect/schedule-resolver",939563419)], null));

try{return com.wsscode.pathom.connect.call_resolver_STAR_(env,entity);
}catch (e89691){var e = e89691;
return e;
}});
;})(tid,inst_89671,inst_89672,inst_89673,inst_89674,inst_89675,inst_89676,inst_89677,inst_89678,inst_89679,inst_89680,inst_89681,inst_89682,state_val_89690,c__47946__auto___94430,out,map__89669,map__89669__$1,env,pool_chan))
})();
var inst_89684 = [out,inst_89683];
var inst_89685 = cljs.core.PersistentHashMap.fromArrays(inst_89682,inst_89684);
var state_89689__$1 = state_89689;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_89689__$1,(2),pool_chan,inst_89685);
} else {
if((state_val_89690 === (2))){
var inst_89687 = (state_89689[(2)]);
var state_89689__$1 = state_89689;
return cljs.core.async.impl.ioc_helpers.return_chan(state_89689__$1,inst_89687);
} else {
return null;
}
}
});})(c__47946__auto___94430,out,map__89669,map__89669__$1,env,pool_chan))
;
return ((function (switch__47663__auto__,c__47946__auto___94430,out,map__89669,map__89669__$1,env,pool_chan){
return (function() {
var com$wsscode$pathom$connect$call_resolver_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$call_resolver_$_state_machine__47664__auto____0 = (function (){
var statearr_89692 = [null,null,null,null,null,null,null];
(statearr_89692[(0)] = com$wsscode$pathom$connect$call_resolver_$_state_machine__47664__auto__);

(statearr_89692[(1)] = (1));

return statearr_89692;
});
var com$wsscode$pathom$connect$call_resolver_$_state_machine__47664__auto____1 = (function (state_89689){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_89689);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e89693){if((e89693 instanceof Object)){
var ex__47667__auto__ = e89693;
var statearr_89694_94431 = state_89689;
(statearr_89694_94431[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_89689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89693;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94432 = state_89689;
state_89689 = G__94432;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$call_resolver_$_state_machine__47664__auto__ = function(state_89689){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$call_resolver_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$call_resolver_$_state_machine__47664__auto____1.call(this,state_89689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$call_resolver_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$call_resolver_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$call_resolver_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$call_resolver_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$call_resolver_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___94430,out,map__89669,map__89669__$1,env,pool_chan))
})();
var state__47948__auto__ = (function (){var statearr_89695 = f__47947__auto__();
(statearr_89695[(6)] = c__47946__auto___94430);

return statearr_89695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___94430,out,map__89669,map__89669__$1,env,pool_chan))
);


return out;
} else {
return com.wsscode.pathom.connect.call_resolver_STAR_(env,entity);
}
}
});
com.wsscode.pathom.connect.entity_select_keys = (function com$wsscode$pathom$connect$entity_select_keys(env,entity,input){
var entity__$1 = com.wsscode.pathom.core.maybe_atom(entity);
var res__53554__auto__ = ((clojure.set.subset_QMARK_(input,entity__$1))?entity__$1:com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(entity__$1)),new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404)], 0)),cljs.core.vec(input)));
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53554__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53554__auto__,entity__$1){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53554__auto__,entity__$1){
return (function (state_89707){
var state_val_89708 = (state_89707[(1)]);
if((state_val_89708 === (1))){
var state_89707__$1 = state_89707;
var statearr_89709_94433 = state_89707__$1;
(statearr_89709_94433[(2)] = null);

(statearr_89709_94433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89708 === (2))){
var inst_89705 = (state_89707[(2)]);
var state_89707__$1 = state_89707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_89707__$1,inst_89705);
} else {
if((state_val_89708 === (3))){
var inst_89696 = (state_89707[(2)]);
var state_89707__$1 = state_89707;
var statearr_89710_94434 = state_89707__$1;
(statearr_89710_94434[(2)] = inst_89696);


cljs.core.async.impl.ioc_helpers.process_exception(state_89707__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89708 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_89707,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_89707__$1 = state_89707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89707__$1,(5),res__53554__auto__);
} else {
if((state_val_89708 === (5))){
var inst_89701 = (state_89707[(2)]);
var inst_89702 = com.wsscode.async.async_cljs.throw_err(inst_89701);
var inst_89703 = cljs.core.select_keys(inst_89702,input);
var state_89707__$1 = state_89707;
var statearr_89711_94435 = state_89707__$1;
(statearr_89711_94435[(2)] = inst_89703);


cljs.core.async.impl.ioc_helpers.process_exception(state_89707__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__,res__53554__auto__,entity__$1))
;
return ((function (switch__47663__auto__,c__47946__auto__,res__53554__auto__,entity__$1){
return (function() {
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__47664__auto____0 = (function (){
var statearr_89712 = [null,null,null,null,null,null,null];
(statearr_89712[(0)] = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__47664__auto__);

(statearr_89712[(1)] = (1));

return statearr_89712;
});
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__47664__auto____1 = (function (state_89707){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_89707);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e89713){if((e89713 instanceof Object)){
var ex__47667__auto__ = e89713;
var statearr_89714_94436 = state_89707;
(statearr_89714_94436[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_89707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89713;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94437 = state_89707;
state_89707 = G__94437;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__47664__auto__ = function(state_89707){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__47664__auto____1.call(this,state_89707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__,entity__$1))
})();
var state__47948__auto__ = (function (){var statearr_89715 = f__47947__auto__();
(statearr_89715[(6)] = c__47946__auto__);

return statearr_89715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,res__53554__auto__,entity__$1))
);

return c__47946__auto__;
} else {
var e = res__53554__auto__;
return cljs.core.select_keys(e,input);
}
});
com.wsscode.pathom.connect.all_values_valid_QMARK_ = (function com$wsscode$pathom$connect$all_values_valid_QMARK_(m,input){
return ((cljs.core.every_QMARK_((function (p__89720){
var vec__89721 = p__89720;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89721,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89721,(1),null);
return cljs.core.not((com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.core.break_values.call(null,v)));
}),m)) && (cljs.core.every_QMARK_(m,input)));
});
com.wsscode.pathom.connect.cache_batch = (function com$wsscode$pathom$connect$cache_batch(env,resolver_sym,linked_results){
var params = com.wsscode.pathom.core.params(env);
var seq__89724 = cljs.core.seq(linked_results);
var chunk__89725 = null;
var count__89726 = (0);
var i__89727 = (0);
while(true){
if((i__89727 < count__89726)){
var vec__89734 = chunk__89725.cljs$core$IIndexed$_nth$arity$2(null,i__89727);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89734,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89734,(1),null);
com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,input,params], null),((function (seq__89724,chunk__89725,count__89726,i__89727,vec__89734,input,value,params){
return (function (){
return value;
});})(seq__89724,chunk__89725,count__89726,i__89727,vec__89734,input,value,params))
);


var G__94438 = seq__89724;
var G__94439 = chunk__89725;
var G__94440 = count__89726;
var G__94441 = (i__89727 + (1));
seq__89724 = G__94438;
chunk__89725 = G__94439;
count__89726 = G__94440;
i__89727 = G__94441;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__89724);
if(temp__5720__auto__){
var seq__89724__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__89724__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__89724__$1);
var G__94442 = cljs.core.chunk_rest(seq__89724__$1);
var G__94443 = c__4550__auto__;
var G__94444 = cljs.core.count(c__4550__auto__);
var G__94445 = (0);
seq__89724 = G__94442;
chunk__89725 = G__94443;
count__89726 = G__94444;
i__89727 = G__94445;
continue;
} else {
var vec__89737 = cljs.core.first(seq__89724__$1);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89737,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89737,(1),null);
com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,input,params], null),((function (seq__89724,chunk__89725,count__89726,i__89727,vec__89737,input,value,seq__89724__$1,temp__5720__auto__,params){
return (function (){
return value;
});})(seq__89724,chunk__89725,count__89726,i__89727,vec__89737,input,value,seq__89724__$1,temp__5720__auto__,params))
);


var G__94446 = cljs.core.next(seq__89724__$1);
var G__94447 = null;
var G__94448 = (0);
var G__94449 = (0);
seq__89724 = G__94446;
chunk__89725 = G__94447;
count__89726 = G__94448;
i__89727 = G__94449;
continue;
}
} else {
return null;
}
}
break;
}
});
com.wsscode.pathom.connect.output__GT_provides = (function com$wsscode$pathom$connect$output__GT_provides(output){
var ast = com.wsscode.pathom.core.query__GT_ast(output);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
});
com.wsscode.pathom.connect.compute_paths_STAR_ = (function com$wsscode$pathom$connect$compute_paths_STAR_(index_oir,keys,bad_keys,attr,pending){
if(cljs.core.contains_QMARK_(index_oir,attr)){
return cljs.core.reduce_kv((function (paths,input,resolvers){
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.some(bad_keys,input);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((cljs.core.contains_QMARK_(input,attr)) || (((cljs.core.seq(input)) && (cljs.core.every_QMARK_(pending,input)))));
}
})())){
return paths;
} else {
var new_paths = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__89740_SHARP_){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,p1__89740_SHARP_], null)],null));
})),resolvers);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(input,keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pending], 0));
if(cljs.core.seq(missing)){
var missing_paths = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (new_paths,missing){
return (function (p1__89742_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (new_paths,missing){
return (function (acc,x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,x);
});})(new_paths,missing))
,cljs.core.first(p1__89742_SHARP_),cljs.core.next(p1__89742_SHARP_));
});})(new_paths,missing))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(com.wsscode.common.combinatorics.cartesian_product,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (new_paths,missing){
return (function (p1__89741_SHARP_){
var G__89744 = index_oir;
var G__89745 = keys;
var G__89746 = bad_keys;
var G__89747 = p1__89741_SHARP_;
var G__89748 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pending,p1__89741_SHARP_);
return (com.wsscode.pathom.connect.compute_paths_STAR_.cljs$core$IFn$_invoke$arity$5 ? com.wsscode.pathom.connect.compute_paths_STAR_.cljs$core$IFn$_invoke$arity$5(G__89744,G__89745,G__89746,G__89747,G__89748) : com.wsscode.pathom.connect.compute_paths_STAR_.call(null,G__89744,G__89745,G__89746,G__89747,G__89748));
});})(new_paths,missing))
),missing)));
if(cljs.core.seq(missing_paths)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(paths,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (missing_paths,new_paths,missing){
return (function (p1__89743_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (missing_paths,new_paths,missing){
return (function (acc,x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,x);
});})(missing_paths,new_paths,missing))
,cljs.core.first(p1__89743_SHARP_),cljs.core.next(p1__89743_SHARP_));
});})(missing_paths,new_paths,missing))
,com.wsscode.common.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_paths,missing_paths], 0))));
} else {
return paths;
}
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(paths,new_paths);
}
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(index_oir,attr));
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
/**
 * This function will return a set of possible paths given a set of available keys to reach some attribute. You also
 *   send a set of bad keys, bad keys mean information you cannot use (maybe they already got an error, or you known will
 *   not be available).
 */
com.wsscode.pathom.connect.compute_paths = (function com$wsscode$pathom$connect$compute_paths(index_oir,keys,bad_keys,attr){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$3((function (p1__89749_SHARP_){
return com.wsscode.pathom.misc.distinct_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__89749_SHARP_);
}),(function (p1__89750_SHARP_){
return com.wsscode.pathom.misc.distinct_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,p1__89750_SHARP_);
}),cljs.core.rseq)),com.wsscode.pathom.connect.compute_paths_STAR_(index_oir,keys,bad_keys,attr,cljs.core.PersistentHashSet.createAsIfByAssoc([attr])));
});
com.wsscode.pathom.connect.split_good_bad_keys = (function com$wsscode$pathom$connect$split_good_bad_keys(entity){
var map__89752 = cljs.core.group_by((function (p1__89751_SHARP_){
return cljs.core.contains_QMARK_(com.wsscode.pathom.core.break_values,cljs.core.second(p1__89751_SHARP_));
}),entity);
var map__89752__$1 = (((((!((map__89752 == null))))?(((((map__89752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89752):map__89752);
var bad_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89752__$1,true);
var good_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89752__$1,false);
var good_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),good_keys);
var bad_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),bad_keys);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [good_keys__$1,bad_keys__$1], null);
});
com.wsscode.pathom.connect.path_cost = (function com$wsscode$pathom$connect$path_cost(p__89754,path){
var map__89755 = p__89754;
var map__89755__$1 = (((((!((map__89755 == null))))?(((((map__89755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89755):map__89755);
var env = map__89755__$1;
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89755__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89755__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
var weights = (function (){var or__4131__auto__ = (function (){var G__89758 = resolver_weights;
if((G__89758 == null)){
return null;
} else {
return cljs.core.deref(G__89758);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (weights,map__89755,map__89755__$1,env,resolver_weights,request_cache){
return (function (sym){
var e = cljs.core.select_keys(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121).cljs$core$IFn$_invoke$arity$1((com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2(env,sym) : com.wsscode.pathom.connect.resolver_data.call(null,env,sym))));
if(cljs.core.truth_((function (){var and__4120__auto__ = request_cache;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.contains_QMARK_(cljs.core.deref(request_cache),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,e], null));
} else {
return and__4120__auto__;
}
})())){
return (1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(weights,sym,(1));
}
});})(weights,map__89755,map__89755__$1,env,resolver_weights,request_cache))
),cljs.core._PLUS_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(path));
});
com.wsscode.pathom.connect.default_sort_plan = (function com$wsscode$pathom$connect$default_sort_plan(env,plan){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__89759_SHARP_){
return com.wsscode.pathom.connect.path_cost(env,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__89759_SHARP_));
}),plan);
});
com.wsscode.pathom.connect.resolve_plan = (function com$wsscode$pathom$connect$resolve_plan(p__89760){
var map__89761 = p__89760;
var map__89761__$1 = (((((!((map__89761 == null))))?(((((map__89761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89761):map__89761);
var env = map__89761__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89761__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var sort_plan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89761__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sort-plan","com.wsscode.pathom.connect/sort-plan",-1506396873));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var sort_plan__$1 = (function (){var or__4131__auto__ = sort_plan;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.connect.default_sort_plan;
}
})();
var vec__89763 = com.wsscode.pathom.connect.split_good_bad_keys(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env));
var good_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89763,(0),null);
var bad_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89763,(1),null);
var G__89766 = env;
var G__89767 = com.wsscode.pathom.connect.compute_paths(new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746).cljs$core$IFn$_invoke$arity$1(indexes),good_keys,bad_keys,key);
return (sort_plan__$1.cljs$core$IFn$_invoke$arity$2 ? sort_plan__$1.cljs$core$IFn$_invoke$arity$2(G__89766,G__89767) : sort_plan__$1.call(null,G__89766,G__89767));
});
com.wsscode.pathom.connect.resolver__GT_output = (function com$wsscode$pathom$connect$resolver__GT_output(env,resolver_sym){
var map__89768 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),resolver_sym], null));
var map__89768__$1 = (((((!((map__89768 == null))))?(((((map__89768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89768):map__89768);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89768__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var compute_output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89768__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","compute-output","com.wsscode.pathom.connect/compute-output",2103799942));
if(cljs.core.truth_(compute_output)){
return (compute_output.cljs$core$IFn$_invoke$arity$1 ? compute_output.cljs$core$IFn$_invoke$arity$1(env) : compute_output.call(null,env));
} else {
if(cljs.core.truth_(output)){
return output;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No output available",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym], null));

}
}
});
com.wsscode.pathom.connect.plan__GT_provides = (function com$wsscode$pathom$connect$plan__GT_provides(env,plan){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__89770_SHARP_){
return com.wsscode.pathom.connect.output__GT_provides(com.wsscode.pathom.connect.resolver__GT_output(env,cljs.core.second(p1__89770_SHARP_)));
})),plan);
});
com.wsscode.pathom.connect.plan__GT_resolvers = (function com$wsscode$pathom$connect$plan__GT_resolvers(plan){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.flatten(plan));
});
com.wsscode.pathom.connect.decrease_path_costs = (function com$wsscode$pathom$connect$decrease_path_costs(p__89772,plan){
var map__89773 = p__89772;
var map__89773__$1 = (((((!((map__89773 == null))))?(((((map__89773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89773):map__89773);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89773__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var resolver_weight_decrease_amount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__89773__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weight-decrease-amount","com.wsscode.pathom.connect/resolver-weight-decrease-amount",-937582293),(1));
if(cljs.core.truth_(resolver_weights)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(resolver_weights,((function (map__89773,map__89773__$1,resolver_weights,resolver_weight_decrease_amount){
return (function (p1__89771_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__89773,map__89773__$1,resolver_weights,resolver_weight_decrease_amount){
return (function (rw,rsym){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rw,rsym,(function (){var x__4219__auto__ = (1);
var y__4220__auto__ = (cljs.core.get.cljs$core$IFn$_invoke$arity$3(rw,rsym,(0)) - resolver_weight_decrease_amount);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());
});})(map__89773,map__89773__$1,resolver_weights,resolver_weight_decrease_amount))
,p1__89771_SHARP_,com.wsscode.pathom.connect.plan__GT_resolvers(plan));
});})(map__89773,map__89773__$1,resolver_weights,resolver_weight_decrease_amount))
);
} else {
return null;
}
});
com.wsscode.pathom.connect.reader_compute_plan = (function com$wsscode$pathom$connect$reader_compute_plan(env,failed_resolvers){
var plan_trace_id = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978)], null));
var plan = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (plan_trace_id){
return (function (p1__89775_SHARP_){
return cljs.core.some(failed_resolvers,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__89775_SHARP_));
});})(plan_trace_id))
,com.wsscode.pathom.connect.resolve_plan(env));
if(cljs.core.seq(plan)){
var plan_SINGLEQUOTE_ = cljs.core.first(plan);
var out = com.wsscode.pathom.connect.plan__GT_provides(env,plan_SINGLEQUOTE_);
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,plan_trace_id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978),new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),plan,new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),out], null));

com.wsscode.pathom.connect.decrease_path_costs(env,plan);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan_SINGLEQUOTE_,out], null);
} else {
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,plan_trace_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978)], null));

return null;
}
});
/**
 * Returns a set containing all attributes that are expected to participate in path
 *   resolution given a query. This function is intended to help dynamic
 *   resolvers that need to know which attributes are required before doing a call to the
 *   information source. For example, we never want to issue more than one GraphQL query
 *   to the same server at the same query level, but if we just look at the parent query
 *   is not enough; that's because some of the attributes might require other attributes
 *   to be fetched, this function will scan the attributes and figure everything that is
 *   required so you can issue a single request.
 * 
 *   Please note the attribute calculation might depend on the data currently available
 *   in the `::p/entity`, if you are calculating attributes for a different context
 *   you might want to replace some of the entity data.
 * 
 *   This function is intended to be called during resolver code.
 */
com.wsscode.pathom.connect.project_query_attributes = (function com$wsscode$pathom$connect$project_query_attributes(env,query){
var children = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.core.query__GT_ast(com.wsscode.pathom.core.lift_placeholders(env,query)));
return new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (children){
return (function (p__89776,p__89777){
var map__89778 = p__89776;
var map__89778__$1 = (((((!((map__89778 == null))))?(((((map__89778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89778):map__89778);
var acc = map__89778__$1;
var provided = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89778__$1,new cljs.core.Keyword(null,"provided","provided",-1493091365));
var map__89779 = p__89777;
var map__89779__$1 = (((((!((map__89779 == null))))?(((((map__89779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89779):map__89779);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89779__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.contains_QMARK_(provided,key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj,key);
} else {
var temp__5718__auto__ = cljs.core.first(com.wsscode.pathom.connect.resolve_plan(cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),key)));
if(cljs.core.truth_(temp__5718__auto__)){
var plan = temp__5718__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.into,(function (){var G__89782 = plan;
var G__89782__$1 = (((G__89782 == null))?null:cljs.core.first(G__89782));
var G__89782__$2 = (((G__89782__$1 == null))?null:cljs.core.second(G__89782__$1));
var G__89782__$3 = (((G__89782__$2 == null))?null:(com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2(env,G__89782__$2) : com.wsscode.pathom.connect.resolver_data.call(null,env,G__89782__$2)));
if((G__89782__$3 == null)){
return null;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121).cljs$core$IFn$_invoke$arity$1(G__89782__$3);
}
})()),new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.into,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),plan),new cljs.core.Keyword(null,"provided","provided",-1493091365),cljs.core.into,com.wsscode.pathom.connect.plan__GT_provides(env,plan));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj,key);
}
}
});})(children))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"provided","provided",-1493091365),cljs.core.PersistentHashSet.EMPTY], null),children));
});
/**
 * Project query attributes for the parent query. See
 */
com.wsscode.pathom.connect.project_parent_query_attributes = (function com$wsscode$pathom$connect$project_parent_query_attributes(p__89783){
var map__89784 = p__89783;
var map__89784__$1 = (((((!((map__89784 == null))))?(((((map__89784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89784):map__89784);
var env = map__89784__$1;
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89784__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
return com.wsscode.pathom.connect.project_query_attributes(env,parent_query);
});
/**
 * DEPRECATED: use reader2 instead
 * 
 *   Connect reader, this reader will lookup the given key in the index
 *   to process it, in case the resolver input can't be satisfied it will
 *   do a recursive lookup trying to find the next input.
 * 
 *   I recommend you switch to reader2, which instead plans ahead of time
 *   the full path it will need to cover to go from the current data to
 *   the requested attribute.
 */
com.wsscode.pathom.connect.reader = (function com$wsscode$pathom$connect$reader(p__89789){
var map__89790 = p__89789;
var map__89790__$1 = (((((!((map__89790 == null))))?(((((map__89790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89790):map__89790);
var env = map__89790__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89790__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89790__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var p = com.wsscode.pathom.core.params(env);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null)))){
var temp__5718__auto__ = com.wsscode.pathom.connect.pick_resolver(env);
if(cljs.core.truth_(temp__5718__auto__)){
var map__89792 = temp__5718__auto__;
var map__89792__$1 = (((((!((map__89792 == null))))?(((((map__89792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89792):map__89792);
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89792__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89792__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var map__89794 = (com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2(env,s) : com.wsscode.pathom.connect.resolver_data.call(null,env,s));
var map__89794__$1 = (((((!((map__89794 == null))))?(((((map__89794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89794):map__89794);
var resolver = map__89794__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__89794__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89794__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89794__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver);
var response = (cljs.core.truth_(cache_QMARK_)?com.wsscode.async.async_cljs.throw_err(com.wsscode.pathom.core.cached_STAR_(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,e,p], null),((function (map__89794,map__89794__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__89792,map__89792__$1,e,s,temp__5718__auto__,k,p,map__89790,map__89790__$1,env,indexes,processing_sequence){
return (function (){
if(cljs.core.truth_((function (){var and__4120__auto__ = batch_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return processing_sequence;
} else {
return and__4120__auto__;
}
})())){
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (map__89794,map__89794__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__89792,map__89792__$1,e,s,temp__5718__auto__,k,p,map__89790,map__89790__$1,env,indexes,processing_sequence){
return (function (p1__89787_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__89787_SHARP_,input);
});})(map__89794,map__89794__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__89792,map__89792__$1,e,s,temp__5718__auto__,k,p,map__89790,map__89790__$1,env,indexes,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__89794,map__89794__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__89792,map__89792__$1,e,s,temp__5718__auto__,k,p,map__89790,map__89790__$1,env,indexes,processing_sequence){
return (function (p1__89786_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__89786_SHARP_,input);
});})(map__89794,map__89794__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__89792,map__89792__$1,e,s,temp__5718__auto__,k,p,map__89790,map__89790__$1,env,indexes,processing_sequence))
,processing_sequence)));
var batch_result = com.wsscode.pathom.connect.call_resolver(env__$1,items);
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env__$1,s,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
} else {
return com.wsscode.pathom.connect.call_resolver(env__$1,e);
}
});})(map__89794,map__89794__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__89792,map__89792__$1,e,s,temp__5718__auto__,k,p,map__89790,map__89790__$1,env,indexes,processing_sequence))
)):com.wsscode.pathom.connect.call_resolver(env__$1,e));
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),env__$1);
var response__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
if((!((((response__$1 == null)) || (cljs.core.map_QMARK_(response__$1)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Response from resolver must be a map.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),s,new cljs.core.Keyword(null,"response","response",-1068424192),response__$1], null));
} else {
}

com.wsscode.pathom.core.swap_entity_BANG_(env_SINGLEQUOTE_,((function (map__89794,map__89794__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,response,env_SINGLEQUOTE_,response__$1,map__89792,map__89792__$1,e,s,temp__5718__auto__,k,p,map__89790,map__89790__$1,env,indexes,processing_sequence){
return (function (p1__89788_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$1,p1__89788_SHARP_], 0));
});})(map__89794,map__89794__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,response,env_SINGLEQUOTE_,response__$1,map__89792,map__89792__$1,e,s,temp__5718__auto__,k,p,map__89790,map__89790__$1,env,indexes,processing_sequence))
);

var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response__$1,k);
if(cljs.core.sequential_QMARK_(x)){
return com.wsscode.pathom.core.join_seq(env_SINGLEQUOTE_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.atom,x));
} else {
if((x == null)){
if(cljs.core.contains_QMARK_(response__$1,k)){
return null;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
} else {
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(x),env_SINGLEQUOTE_);

}
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.serial_resolver_call_batch = (function com$wsscode$pathom$connect$serial_resolver_call_batch(p__89798,e){
var map__89799 = p__89798;
var map__89799__$1 = (((((!((map__89799 == null))))?(((((map__89799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89799):map__89799);
var env = map__89799__$1;
var map__89800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89799__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__89800__$1 = (((((!((map__89800 == null))))?(((((map__89800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89800):map__89800);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89800__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89800__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89799__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var trace_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),e], null);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__27094__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769)));
var res__27095__auto__ = (function (){var _ = com.wsscode.pathom.trace.trace(env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417)));
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (_,trace_id__27094__auto__,trace_data,map__89799,map__89799__$1,env,map__89800,map__89800__$1,sym,input,processing_sequence){
return (function (p1__89797_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__89797_SHARP_,input);
});})(_,trace_id__27094__auto__,trace_data,map__89799,map__89799__$1,env,map__89800,map__89800__$1,sym,input,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (_,trace_id__27094__auto__,trace_data,map__89799,map__89799__$1,env,map__89800,map__89800__$1,sym,input,processing_sequence){
return (function (p1__89796_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__89796_SHARP_,input);
});})(_,trace_id__27094__auto__,trace_data,map__89799,map__89799__$1,env,map__89800,map__89800__$1,sym,input,processing_sequence))
,processing_sequence)));
var ___$1 = com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616),items], null));
var batch_result = com.wsscode.pathom.connect.call_resolver(env,items);
var ___$2 = com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429),cljs.core.count(batch_result)], null));
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env,sym,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__27094__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769)));

return res__27095__auto__;
} else {
var _ = com.wsscode.pathom.trace.trace(env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417)));
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (_,trace_data,map__89799,map__89799__$1,env,map__89800,map__89800__$1,sym,input,processing_sequence){
return (function (p1__89797_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__89797_SHARP_,input);
});})(_,trace_data,map__89799,map__89799__$1,env,map__89800,map__89800__$1,sym,input,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (_,trace_data,map__89799,map__89799__$1,env,map__89800,map__89800__$1,sym,input,processing_sequence){
return (function (p1__89796_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__89796_SHARP_,input);
});})(_,trace_data,map__89799,map__89799__$1,env,map__89800,map__89800__$1,sym,input,processing_sequence))
,processing_sequence)));
var ___$1 = com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616),items], null));
var batch_result = com.wsscode.pathom.connect.call_resolver(env,items);
var ___$2 = com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429),cljs.core.count(batch_result)], null));
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env,sym,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
}
});
com.wsscode.pathom.connect.serial_cache_resolver_call = (function com$wsscode$pathom$connect$serial_cache_resolver_call(p__89803,e){
var map__89804 = p__89803;
var map__89804__$1 = (((((!((map__89804 == null))))?(((((map__89804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89804):map__89804);
var env = map__89804__$1;
var map__89805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89804__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__89805__$1 = (((((!((map__89805 == null))))?(((((map__89805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89805):map__89805);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89805__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89805__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89804__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var p = com.wsscode.pathom.core.params(env);
return com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,e,p], null),((function (p,map__89804,map__89804__$1,env,map__89805,map__89805__$1,sym,batch_QMARK_,processing_sequence){
return (function (){
if(cljs.core.truth_((function (){var and__4120__auto__ = batch_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return processing_sequence;
} else {
return and__4120__auto__;
}
})())){
return com.wsscode.pathom.connect.serial_resolver_call_batch(env,e);
} else {
return com.wsscode.pathom.connect.call_resolver(env,e);
}
});})(p,map__89804,map__89804__$1,env,map__89805,map__89805__$1,sym,batch_QMARK_,processing_sequence))
);
});
/**
 * Recommended reader to use with Pathom serial parser.
 * 
 *   This reader uses the connect index to compute a EQL property requirement.
 * 
 *   The process goes as:
 * 
 *   - find possible paths to realize the attribute, given the current available data, generating a plan
 *   - executes the plan
 *   - in case a resolver fails (due to exception, or missing required data) the reader will
 *  try to backtrack and execute another path (if there is one available).
 * 
 *   This only handles sync process, if you return a core.async channel, the channel itself
 *   will be the response. If you need to handle async use `async-reader2`.
 */
com.wsscode.pathom.connect.reader2 = (function com$wsscode$pathom$connect$reader2(p__89812){
var map__89813 = p__89812;
var map__89813__$1 = (((((!((map__89813 == null))))?(((((map__89813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89813):map__89813);
var env = map__89813__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89813__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__89813__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89813__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var temp__5718__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__89815 = temp__5718__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89815,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89815,(1),null);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var G__89821 = plan;
var vec__89822 = G__89821;
var seq__89823 = cljs.core.seq(vec__89822);
var first__89824 = cljs.core.first(seq__89823);
var seq__89823__$1 = cljs.core.next(seq__89823);
var step = first__89824;
var tail = seq__89823__$1;
var failed_resolvers = cljs.core.PersistentArrayMap.EMPTY;
var out_left = out;
var G__89821__$1 = G__89821;
var failed_resolvers__$1 = failed_resolvers;
var out_left__$1 = out_left;
while(true){
var vec__89846 = G__89821__$1;
var seq__89847 = cljs.core.seq(vec__89846);
var first__89848 = cljs.core.first(seq__89847);
var seq__89847__$1 = cljs.core.next(seq__89847);
var step__$1 = first__89848;
var tail__$1 = seq__89847__$1;
var failed_resolvers__$2 = failed_resolvers__$1;
var out_left__$2 = out_left__$1;
if(cljs.core.truth_(step__$1)){
var vec__89849 = step__$1;
var key_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89849,(0),null);
var resolver_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89849,(1),null);
var map__89852 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),resolver_sym], null));
var map__89852__$1 = (((((!((map__89852 == null))))?(((((map__89852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89852):map__89852);
var resolver = map__89852__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__89852__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89852__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89852__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = com.wsscode.pathom.connect.resolver__GT_output(env,resolver_sym);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver);
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env__$1);
var e = cljs.core.select_keys(entity,input);
var p = com.wsscode.pathom.core.params(env__$1);
var trace_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),e], null);
var response = ((cljs.core.contains_QMARK_(entity,key_SINGLEQUOTE_))?cljs.core.select_keys(entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)):(cljs.core.truth_(cache_QMARK_)?com.wsscode.async.async_cljs.throw_err(com.wsscode.pathom.core.cached_STAR_(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,e,p], null),((function (G__89821__$1,failed_resolvers__$1,out_left__$1,vec__89849,key_SINGLEQUOTE_,resolver_sym,map__89852,map__89852__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__89846,seq__89847,first__89848,seq__89847__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__89821,vec__89822,seq__89823,first__89824,seq__89823__$1,step,tail,failed_resolvers,out_left,key,vec__89815,plan,out,temp__5718__auto__,map__89813,map__89813__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (){
if(cljs.core.truth_((function (){var and__4120__auto__ = batch_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return processing_sequence;
} else {
return and__4120__auto__;
}
})())){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__27094__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769)));
var res__27095__auto__ = (function (){var _ = com.wsscode.pathom.trace.trace(env__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417)));
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (G__89821__$1,failed_resolvers__$1,out_left__$1,_,trace_id__27094__auto__,vec__89849,key_SINGLEQUOTE_,resolver_sym,map__89852,map__89852__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__89846,seq__89847,first__89848,seq__89847__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__89821,vec__89822,seq__89823,first__89824,seq__89823__$1,step,tail,failed_resolvers,out_left,key,vec__89815,plan,out,temp__5718__auto__,map__89813,map__89813__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__89809_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__89809_SHARP_,input);
});})(G__89821__$1,failed_resolvers__$1,out_left__$1,_,trace_id__27094__auto__,vec__89849,key_SINGLEQUOTE_,resolver_sym,map__89852,map__89852__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__89846,seq__89847,first__89848,seq__89847__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__89821,vec__89822,seq__89823,first__89824,seq__89823__$1,step,tail,failed_resolvers,out_left,key,vec__89815,plan,out,temp__5718__auto__,map__89813,map__89813__$1,env,indexes,max_resolver_weight,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__89821__$1,failed_resolvers__$1,out_left__$1,_,trace_id__27094__auto__,vec__89849,key_SINGLEQUOTE_,resolver_sym,map__89852,map__89852__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__89846,seq__89847,first__89848,seq__89847__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__89821,vec__89822,seq__89823,first__89824,seq__89823__$1,step,tail,failed_resolvers,out_left,key,vec__89815,plan,out,temp__5718__auto__,map__89813,map__89813__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__89808_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__89808_SHARP_,input);
});})(G__89821__$1,failed_resolvers__$1,out_left__$1,_,trace_id__27094__auto__,vec__89849,key_SINGLEQUOTE_,resolver_sym,map__89852,map__89852__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__89846,seq__89847,first__89848,seq__89847__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__89821,vec__89822,seq__89823,first__89824,seq__89823__$1,step,tail,failed_resolvers,out_left,key,vec__89815,plan,out,temp__5718__auto__,map__89813,map__89813__$1,env,indexes,max_resolver_weight,processing_sequence))
,processing_sequence)));
var ___$1 = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616),items], null));
var batch_result = com.wsscode.pathom.connect.call_resolver(env__$1,items);
var ___$2 = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429),cljs.core.count(batch_result)], null));
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env__$1,resolver_sym,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env__$1,trace_id__27094__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769)));

return res__27095__auto__;
} else {
var _ = com.wsscode.pathom.trace.trace(env__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417)));
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (G__89821__$1,failed_resolvers__$1,out_left__$1,_,vec__89849,key_SINGLEQUOTE_,resolver_sym,map__89852,map__89852__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__89846,seq__89847,first__89848,seq__89847__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__89821,vec__89822,seq__89823,first__89824,seq__89823__$1,step,tail,failed_resolvers,out_left,key,vec__89815,plan,out,temp__5718__auto__,map__89813,map__89813__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__89809_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__89809_SHARP_,input);
});})(G__89821__$1,failed_resolvers__$1,out_left__$1,_,vec__89849,key_SINGLEQUOTE_,resolver_sym,map__89852,map__89852__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__89846,seq__89847,first__89848,seq__89847__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__89821,vec__89822,seq__89823,first__89824,seq__89823__$1,step,tail,failed_resolvers,out_left,key,vec__89815,plan,out,temp__5718__auto__,map__89813,map__89813__$1,env,indexes,max_resolver_weight,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__89821__$1,failed_resolvers__$1,out_left__$1,_,vec__89849,key_SINGLEQUOTE_,resolver_sym,map__89852,map__89852__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__89846,seq__89847,first__89848,seq__89847__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__89821,vec__89822,seq__89823,first__89824,seq__89823__$1,step,tail,failed_resolvers,out_left,key,vec__89815,plan,out,temp__5718__auto__,map__89813,map__89813__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__89808_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__89808_SHARP_,input);
});})(G__89821__$1,failed_resolvers__$1,out_left__$1,_,vec__89849,key_SINGLEQUOTE_,resolver_sym,map__89852,map__89852__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__89846,seq__89847,first__89848,seq__89847__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__89821,vec__89822,seq__89823,first__89824,seq__89823__$1,step,tail,failed_resolvers,out_left,key,vec__89815,plan,out,temp__5718__auto__,map__89813,map__89813__$1,env,indexes,max_resolver_weight,processing_sequence))
,processing_sequence)));
var ___$1 = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616),items], null));
var batch_result = com.wsscode.pathom.connect.call_resolver(env__$1,items);
var ___$2 = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429),cljs.core.count(batch_result)], null));
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env__$1,resolver_sym,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
}
} else {
return com.wsscode.pathom.connect.call_resolver(env__$1,e);
}
});})(G__89821__$1,failed_resolvers__$1,out_left__$1,vec__89849,key_SINGLEQUOTE_,resolver_sym,map__89852,map__89852__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__89846,seq__89847,first__89848,seq__89847__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__89821,vec__89822,seq__89823,first__89824,seq__89823__$1,step,tail,failed_resolvers,out_left,key,vec__89815,plan,out,temp__5718__auto__,map__89813,map__89813__$1,env,indexes,max_resolver_weight,processing_sequence))
)):com.wsscode.pathom.connect.call_resolver(env__$1,e)
));
var response__$1 = (function (){var or__4131__auto__ = response;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var replan = ((function (G__89821__$1,failed_resolvers__$1,out_left__$1,vec__89849,key_SINGLEQUOTE_,resolver_sym,map__89852,map__89852__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,vec__89846,seq__89847,first__89848,seq__89847__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__89821,vec__89822,seq__89823,first__89824,seq__89823__$1,step,tail,failed_resolvers,out_left,key,vec__89815,plan,out,temp__5718__auto__,map__89813,map__89813__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (error){
var failed_resolvers__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers__$2,resolver_sym,error);
com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$1,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (G__89821__$1,failed_resolvers__$1,out_left__$1,failed_resolvers__$3,vec__89849,key_SINGLEQUOTE_,resolver_sym,map__89852,map__89852__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,vec__89846,seq__89847,first__89848,seq__89847__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__89821,vec__89822,seq__89823,first__89824,seq__89823__$1,step,tail,failed_resolvers,out_left,key,vec__89815,plan,out,temp__5718__auto__,map__89813,map__89813__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__89810_SHARP_){
var x__4222__auto__ = ((function (){var or__4131__auto__ = p1__89810_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() * (2));
var y__4223__auto__ = max_resolver_weight;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});})(G__89821__$1,failed_resolvers__$1,out_left__$1,failed_resolvers__$3,vec__89849,key_SINGLEQUOTE_,resolver_sym,map__89852,map__89852__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,vec__89846,seq__89847,first__89848,seq__89847__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__89821,vec__89822,seq__89823,first__89824,seq__89823__$1,step,tail,failed_resolvers,out_left,key,vec__89815,plan,out,temp__5718__auto__,map__89813,map__89813__$1,env,indexes,max_resolver_weight,processing_sequence))
], 0));

var temp__5718__auto____$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$1,failed_resolvers__$3);
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__89854 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89854,(0),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89854,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan__$1,failed_resolvers__$3,out_SINGLEQUOTE_], null);
} else {
return null;
}
});})(G__89821__$1,failed_resolvers__$1,out_left__$1,vec__89849,key_SINGLEQUOTE_,resolver_sym,map__89852,map__89852__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,vec__89846,seq__89847,first__89848,seq__89847__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__89821,vec__89822,seq__89823,first__89824,seq__89823__$1,step,tail,failed_resolvers,out_left,key,vec__89815,plan,out,temp__5718__auto__,map__89813,map__89813__$1,env,indexes,max_resolver_weight,processing_sequence))
;
if(cljs.core.map_QMARK_(response__$1)){
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(response__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),env__$1);
var response__$2 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
com.wsscode.pathom.core.swap_entity_BANG_(env_SINGLEQUOTE_,((function (G__89821__$1,failed_resolvers__$1,out_left__$1,env_SINGLEQUOTE_,response__$2,vec__89849,key_SINGLEQUOTE_,resolver_sym,map__89852,map__89852__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,replan,vec__89846,seq__89847,first__89848,seq__89847__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__89821,vec__89822,seq__89823,first__89824,seq__89823__$1,step,tail,failed_resolvers,out_left,key,vec__89815,plan,out,temp__5718__auto__,map__89813,map__89813__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__89811_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$2,p1__89811_SHARP_], 0));
});})(G__89821__$1,failed_resolvers__$1,out_left__$1,env_SINGLEQUOTE_,response__$2,vec__89849,key_SINGLEQUOTE_,resolver_sym,map__89852,map__89852__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,replan,vec__89846,seq__89847,first__89848,seq__89847__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__89821,vec__89822,seq__89823,first__89824,seq__89823__$1,step,tail,failed_resolvers,out_left,key,vec__89815,plan,out,temp__5718__auto__,map__89813,map__89813__$1,env,indexes,max_resolver_weight,processing_sequence))
);

if(((cljs.core.contains_QMARK_(response__$2,key_SINGLEQUOTE_)) && (cljs.core.not((function (){var G__89858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response__$2,key_SINGLEQUOTE_);
return (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(G__89858) : com.wsscode.pathom.core.break_values.call(null,G__89858));
})())))){
var out_provides = com.wsscode.pathom.connect.output__GT_provides(output);
com.wsscode.pathom.trace.trace(env_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym], null));

if(cljs.core.seq(tail__$1)){
var G__94551 = tail__$1;
var G__94552 = failed_resolvers__$2;
var G__94553 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(out_left__$2,out_provides);
G__89821__$1 = G__94551;
failed_resolvers__$1 = G__94552;
out_left__$1 = G__94553;
continue;
} else {
return com.wsscode.pathom.core.map_reader(env_SINGLEQUOTE_);
}
} else {
var temp__5718__auto____$1 = replan(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$2,new cljs.core.Keyword(null,"key","key",-1516042587),key_SINGLEQUOTE_], null)));
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__89859 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89859,(0),null);
var failed_resolvers__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89859,(1),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89859,(2),null);
var G__94554 = plan__$1;
var G__94555 = failed_resolvers__$3;
var G__94556 = out_SINGLEQUOTE_;
G__89821__$1 = G__94554;
failed_resolvers__$1 = G__94555;
out_left__$1 = G__94556;
continue;
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.seq(tail__$1);
if(and__4120__auto__){
var G__89863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response__$2,key_SINGLEQUOTE_);
return (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(G__89863) : com.wsscode.pathom.core.break_values.call(null,G__89863));
} else {
return and__4120__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$2,new cljs.core.Keyword(null,"key","key",-1516042587),key_SINGLEQUOTE_], null));
} else {
}

return com.wsscode.pathom.core.map_reader(env_SINGLEQUOTE_);
}
}
} else {
var temp__5718__auto____$1 = replan(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$1], null)));
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__89864 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89864,(0),null);
var failed_resolvers__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89864,(1),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89864,(2),null);
var G__94558 = plan__$1;
var G__94559 = failed_resolvers__$3;
var G__94560 = out_SINGLEQUOTE_;
G__89821__$1 = G__94558;
failed_resolvers__$1 = G__94559;
out_left__$1 = G__94560;
continue;
} else {
com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym,new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$1], null));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$1], null));
}

}
} else {
return null;
}
break;
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.map_async_serial = (function com$wsscode$pathom$connect$map_async_serial(f,s){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_89910){
var state_val_89911 = (state_89910[(1)]);
if((state_val_89911 === (7))){
var inst_89875 = (state_89910[(7)]);
var inst_89877 = (state_89910[(8)]);
var inst_89877__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_89875) : f.call(null,inst_89875));
var inst_89878 = com.wsscode.async.async_cljs.chan_QMARK_(inst_89877__$1);
var state_89910__$1 = (function (){var statearr_89912 = state_89910;
(statearr_89912[(8)] = inst_89877__$1);

return statearr_89912;
})();
if(inst_89878){
var statearr_89913_94562 = state_89910__$1;
(statearr_89913_94562[(1)] = (10));

} else {
var statearr_89914_94563 = state_89910__$1;
(statearr_89914_94563[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89911 === (20))){
var inst_89894 = (state_89910[(2)]);
var state_89910__$1 = state_89910;
var statearr_89915_94564 = state_89910__$1;
(statearr_89915_94564[(2)] = inst_89894);

(statearr_89915_94564[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89911 === (1))){
var state_89910__$1 = state_89910;
var statearr_89916_94565 = state_89910__$1;
(statearr_89916_94565[(2)] = null);

(statearr_89916_94565[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89911 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_89910,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_89871 = cljs.core.PersistentVector.EMPTY;
var inst_89872 = inst_89871;
var inst_89873 = s;
var state_89910__$1 = (function (){var statearr_89917 = state_89910;
(statearr_89917[(9)] = inst_89873);

(statearr_89917[(10)] = inst_89872);

return statearr_89917;
})();
var statearr_89918_94567 = state_89910__$1;
(statearr_89918_94567[(2)] = null);

(statearr_89918_94567[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89911 === (15))){
var state_89910__$1 = state_89910;
var statearr_89919_94570 = state_89910__$1;
(statearr_89919_94570[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89911 === (13))){
var inst_89881 = (state_89910[(2)]);
var inst_89882 = com.wsscode.async.async_cljs.throw_err(inst_89881);
var state_89910__$1 = state_89910;
var statearr_89921_94571 = state_89910__$1;
(statearr_89921_94571[(2)] = inst_89882);

(statearr_89921_94571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89911 === (6))){
var inst_89906 = (state_89910[(2)]);
var state_89910__$1 = state_89910;
var statearr_89922_94573 = state_89910__$1;
(statearr_89922_94573[(2)] = inst_89906);


cljs.core.async.impl.ioc_helpers.process_exception(state_89910__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89911 === (17))){
var inst_89888 = (state_89910[(2)]);
var inst_89889 = com.wsscode.async.async_cljs.consumer_pair(inst_89888);
var state_89910__$1 = state_89910;
var statearr_89923_94574 = state_89910__$1;
(statearr_89923_94574[(2)] = inst_89889);

(statearr_89923_94574[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89911 === (3))){
var inst_89867 = (state_89910[(2)]);
var state_89910__$1 = state_89910;
var statearr_89924_94575 = state_89910__$1;
(statearr_89924_94575[(2)] = inst_89867);


cljs.core.async.impl.ioc_helpers.process_exception(state_89910__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89911 === (12))){
var inst_89873 = (state_89910[(9)]);
var inst_89872 = (state_89910[(10)]);
var inst_89898 = (state_89910[(2)]);
var inst_89899 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_89872,inst_89898);
var inst_89900 = cljs.core.next(inst_89873);
var inst_89872__$1 = inst_89899;
var inst_89873__$1 = inst_89900;
var state_89910__$1 = (function (){var statearr_89925 = state_89910;
(statearr_89925[(9)] = inst_89873__$1);

(statearr_89925[(10)] = inst_89872__$1);

return statearr_89925;
})();
var statearr_89926_94579 = state_89910__$1;
(statearr_89926_94579[(2)] = null);

(statearr_89926_94579[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89911 === (2))){
var inst_89908 = (state_89910[(2)]);
var state_89910__$1 = state_89910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_89910__$1,inst_89908);
} else {
if((state_val_89911 === (19))){
var state_89910__$1 = state_89910;
var statearr_89927_94580 = state_89910__$1;
(statearr_89927_94580[(2)] = null);

(statearr_89927_94580[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89911 === (11))){
var inst_89877 = (state_89910[(8)]);
var inst_89884 = com.wsscode.async.async_cljs.promise_QMARK_(inst_89877);
var state_89910__$1 = state_89910;
if(cljs.core.truth_(inst_89884)){
var statearr_89928_94582 = state_89910__$1;
(statearr_89928_94582[(1)] = (14));

} else {
var statearr_89929_94583 = state_89910__$1;
(statearr_89929_94583[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89911 === (9))){
var inst_89904 = (state_89910[(2)]);
var state_89910__$1 = state_89910;
var statearr_89930_94585 = state_89910__$1;
(statearr_89930_94585[(2)] = inst_89904);

(statearr_89930_94585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89911 === (5))){
var inst_89873 = (state_89910[(9)]);
var inst_89875 = (state_89910[(7)]);
var inst_89875__$1 = cljs.core.first(inst_89873);
var state_89910__$1 = (function (){var statearr_89931 = state_89910;
(statearr_89931[(7)] = inst_89875__$1);

return statearr_89931;
})();
if(cljs.core.truth_(inst_89875__$1)){
var statearr_89932_94586 = state_89910__$1;
(statearr_89932_94586[(1)] = (7));

} else {
var statearr_89933_94587 = state_89910__$1;
(statearr_89933_94587[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89911 === (14))){
var inst_89877 = (state_89910[(8)]);
var inst_89886 = com.wsscode.async.async_cljs.promise__GT_chan(inst_89877);
var state_89910__$1 = state_89910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89910__$1,(17),inst_89886);
} else {
if((state_val_89911 === (16))){
var inst_89896 = (state_89910[(2)]);
var state_89910__$1 = state_89910;
var statearr_89934_94588 = state_89910__$1;
(statearr_89934_94588[(2)] = inst_89896);

(statearr_89934_94588[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89911 === (10))){
var inst_89877 = (state_89910[(8)]);
var state_89910__$1 = state_89910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89910__$1,(13),inst_89877);
} else {
if((state_val_89911 === (18))){
var inst_89877 = (state_89910[(8)]);
var state_89910__$1 = state_89910;
var statearr_89935_94591 = state_89910__$1;
(statearr_89935_94591[(2)] = inst_89877);

(statearr_89935_94591[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89911 === (8))){
var inst_89872 = (state_89910[(10)]);
var state_89910__$1 = state_89910;
var statearr_89936_94592 = state_89910__$1;
(statearr_89936_94592[(2)] = inst_89872);

(statearr_89936_94592[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47946__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto__){
return (function() {
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__47664__auto____0 = (function (){
var statearr_89937 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_89937[(0)] = com$wsscode$pathom$connect$map_async_serial_$_state_machine__47664__auto__);

(statearr_89937[(1)] = (1));

return statearr_89937;
});
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__47664__auto____1 = (function (state_89910){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_89910);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e89938){if((e89938 instanceof Object)){
var ex__47667__auto__ = e89938;
var statearr_89939_94595 = state_89910;
(statearr_89939_94595[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_89910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89938;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94596 = state_89910;
state_89910 = G__94596;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$map_async_serial_$_state_machine__47664__auto__ = function(state_89910){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__47664__auto____1.call(this,state_89910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$map_async_serial_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$map_async_serial_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$map_async_serial_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$map_async_serial_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_89940 = f__47947__auto__();
(statearr_89940[(6)] = c__47946__auto__);

return statearr_89940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
});
/**
 * DEPRECATED: use async-reader2
 * 
 *   Like reader, but supports async values on resolver return.
 */
com.wsscode.pathom.connect.async_reader = (function com$wsscode$pathom$connect$async_reader(p__89944){
var map__89945 = p__89944;
var map__89945__$1 = (((((!((map__89945 == null))))?(((((map__89945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89945):map__89945);
var env = map__89945__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89945__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89945__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var p = com.wsscode.pathom.core.params(env);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null)))){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,k,p,map__89945,map__89945__$1,env,indexes,processing_sequence){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,k,p,map__89945,map__89945__$1,env,indexes,processing_sequence){
return (function (state_90148){
var state_val_90149 = (state_90148[(1)]);
if((state_val_90149 === (65))){
var inst_90091 = (state_90148[(2)]);
var inst_90092 = com.wsscode.async.async_cljs.consumer_pair(inst_90091);
var state_90148__$1 = state_90148;
var statearr_90150_94598 = state_90148__$1;
(statearr_90150_94598[(2)] = inst_90092);

(statearr_90150_94598[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (70))){
var state_90148__$1 = state_90148;
var statearr_90151_94599 = state_90148__$1;
(statearr_90151_94599[(1)] = (75));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (62))){
var inst_90080 = (state_90148[(7)]);
var inst_90089 = com.wsscode.async.async_cljs.promise__GT_chan(inst_90080);
var state_90148__$1 = state_90148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90148__$1,(65),inst_90089);
} else {
if((state_val_90149 === (74))){
var inst_90109 = (state_90148[(2)]);
var state_90148__$1 = state_90148;
var statearr_90153_94604 = state_90148__$1;
(statearr_90153_94604[(2)] = inst_90109);

(statearr_90153_94604[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (7))){
var state_90148__$1 = state_90148;
var statearr_90154_94605 = state_90148__$1;
(statearr_90154_94605[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));

(statearr_90154_94605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (59))){
var inst_90080 = (state_90148[(7)]);
var inst_90087 = com.wsscode.async.async_cljs.promise_QMARK_(inst_90080);
var state_90148__$1 = state_90148;
if(cljs.core.truth_(inst_90087)){
var statearr_90155_94606 = state_90148__$1;
(statearr_90155_94606[(1)] = (62));

} else {
var statearr_90156_94607 = state_90148__$1;
(statearr_90156_94607[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (86))){
var inst_90113 = (state_90148[(8)]);
var state_90148__$1 = state_90148;
var statearr_90157_94608 = state_90148__$1;
(statearr_90157_94608[(2)] = inst_90113);

(statearr_90157_94608[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (20))){
var inst_89997 = (state_90148[(2)]);
var state_90148__$1 = state_90148;
if(cljs.core.truth_(inst_89997)){
var statearr_90158_94609 = state_90148__$1;
(statearr_90158_94609[(1)] = (24));

} else {
var statearr_90159_94610 = state_90148__$1;
(statearr_90159_94610[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (72))){
var inst_90076 = (state_90148[(9)]);
var state_90148__$1 = state_90148;
var statearr_90160_94620 = state_90148__$1;
(statearr_90160_94620[(2)] = inst_90076);

(statearr_90160_94620[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (58))){
var inst_90080 = (state_90148[(7)]);
var state_90148__$1 = state_90148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90148__$1,(61),inst_90080);
} else {
if((state_val_90149 === (60))){
var inst_90101 = (state_90148[(2)]);
var state_90148__$1 = state_90148;
var statearr_90161_94621 = state_90148__$1;
(statearr_90161_94621[(2)] = inst_90101);

(statearr_90161_94621[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (27))){
var inst_90004 = (state_90148[(10)]);
var inst_89954 = (state_90148[(11)]);
var inst_90012 = (state_90148[(12)]);
var inst_90002 = (state_90148[(13)]);
var inst_89979 = (state_90148[(14)]);
var inst_90006 = (state_90148[(15)]);
var inst_89978 = (state_90148[(16)]);
var inst_89977 = (state_90148[(17)]);
var inst_90005 = (state_90148[(18)]);
var inst_90003 = (state_90148[(19)]);
var inst_90008 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_90009 = [inst_89979,inst_89978,p];
var inst_90010 = (new cljs.core.PersistentVector(null,3,(5),inst_90008,inst_90009,null));
var inst_90011 = (function (){var input = inst_90005;
var cache_QMARK_ = inst_90003;
var map__89980 = inst_90002;
var temp__5718__auto__ = inst_89954;
var batch_QMARK_ = inst_90004;
var env__$1 = inst_90006;
var e = inst_89978;
var s = inst_89979;
var resolver = inst_90002;
var map__89956 = inst_89977;
return ((function (input,cache_QMARK_,map__89980,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,map__89956,inst_90004,inst_89954,inst_90012,inst_90002,inst_89979,inst_90006,inst_89978,inst_89977,inst_90005,inst_90003,inst_90008,inst_90009,inst_90010,state_val_90149,c__47946__auto__,k,p,map__89945,map__89945__$1,env,indexes,processing_sequence){
return (function (){
var c__47946__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto____$1,input,cache_QMARK_,map__89980,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,map__89956,inst_90004,inst_89954,inst_90012,inst_90002,inst_89979,inst_90006,inst_89978,inst_89977,inst_90005,inst_90003,inst_90008,inst_90009,inst_90010,state_val_90149,c__47946__auto__,k,p,map__89945,map__89945__$1,env,indexes,processing_sequence){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto____$1,input,cache_QMARK_,map__89980,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,map__89956,inst_90004,inst_89954,inst_90012,inst_90002,inst_89979,inst_90006,inst_89978,inst_89977,inst_90005,inst_90003,inst_90008,inst_90009,inst_90010,state_val_90149,c__47946__auto__,k,p,map__89945,map__89945__$1,env,indexes,processing_sequence){
return (function (state_90231){
var state_val_90232 = (state_90231[(1)]);
if((state_val_90232 === (7))){
var inst_90169 = (state_90231[(2)]);
var state_90231__$1 = state_90231;
if(cljs.core.truth_(inst_90169)){
var statearr_90233_94638 = state_90231__$1;
(statearr_90233_94638[(1)] = (8));

} else {
var statearr_90234_94639 = state_90231__$1;
(statearr_90234_94639[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (20))){
var inst_90178 = (state_90231[(7)]);
var state_90231__$1 = state_90231;
var statearr_90235_94642 = state_90231__$1;
(statearr_90235_94642[(2)] = inst_90178);

(statearr_90235_94642[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (27))){
var inst_90204 = (state_90231[(8)]);
var inst_90213 = com.wsscode.async.async_cljs.promise__GT_chan(inst_90204);
var state_90231__$1 = state_90231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90231__$1,(30),inst_90213);
} else {
if((state_val_90232 === (1))){
var state_90231__$1 = state_90231;
var statearr_90236_94643 = state_90231__$1;
(statearr_90236_94643[(2)] = null);

(statearr_90236_94643[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (24))){
var inst_90204 = (state_90231[(8)]);
var inst_90211 = com.wsscode.async.async_cljs.promise_QMARK_(inst_90204);
var state_90231__$1 = state_90231;
if(cljs.core.truth_(inst_90211)){
var statearr_90237_94650 = state_90231__$1;
(statearr_90237_94650[(1)] = (27));

} else {
var statearr_90238_94651 = state_90231__$1;
(statearr_90238_94651[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_90231,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_90231__$1 = state_90231;
if(cljs.core.truth_(batch_QMARK_)){
var statearr_90239_94652 = state_90231__$1;
(statearr_90239_94652[(1)] = (5));

} else {
var statearr_90240_94653 = state_90231__$1;
(statearr_90240_94653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (15))){
var inst_90182 = (state_90231[(2)]);
var inst_90183 = com.wsscode.async.async_cljs.throw_err(inst_90182);
var state_90231__$1 = state_90231;
var statearr_90241_94657 = state_90231__$1;
(statearr_90241_94657[(2)] = inst_90183);

(statearr_90241_94657[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (21))){
var state_90231__$1 = state_90231;
var statearr_90242_94658 = state_90231__$1;
(statearr_90242_94658[(2)] = null);

(statearr_90242_94658[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (31))){
var inst_90204 = (state_90231[(8)]);
var state_90231__$1 = state_90231;
var statearr_90243_94659 = state_90231__$1;
(statearr_90243_94659[(2)] = inst_90204);

(statearr_90243_94659[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (32))){
var state_90231__$1 = state_90231;
var statearr_90244_94661 = state_90231__$1;
(statearr_90244_94661[(2)] = null);

(statearr_90244_94661[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (33))){
var inst_90221 = (state_90231[(2)]);
var state_90231__$1 = state_90231;
var statearr_90245_94663 = state_90231__$1;
(statearr_90245_94663[(2)] = inst_90221);

(statearr_90245_94663[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (13))){
var inst_90178 = (state_90231[(7)]);
var inst_90185 = com.wsscode.async.async_cljs.promise_QMARK_(inst_90178);
var state_90231__$1 = state_90231;
if(cljs.core.truth_(inst_90185)){
var statearr_90246_94668 = state_90231__$1;
(statearr_90246_94668[(1)] = (16));

} else {
var statearr_90247_94669 = state_90231__$1;
(statearr_90247_94669[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (22))){
var inst_90195 = (state_90231[(2)]);
var state_90231__$1 = state_90231;
var statearr_90248_94673 = state_90231__$1;
(statearr_90248_94673[(2)] = inst_90195);

(statearr_90248_94673[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (29))){
var inst_90223 = (state_90231[(2)]);
var state_90231__$1 = state_90231;
var statearr_90249_94678 = state_90231__$1;
(statearr_90249_94678[(2)] = inst_90223);

(statearr_90249_94678[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (6))){
var state_90231__$1 = state_90231;
var statearr_90250_94679 = state_90231__$1;
(statearr_90250_94679[(2)] = batch_QMARK_);

(statearr_90250_94679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (28))){
var state_90231__$1 = state_90231;
var statearr_90251_94680 = state_90231__$1;
(statearr_90251_94680[(1)] = (31));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (25))){
var inst_90225 = (state_90231[(2)]);
var state_90231__$1 = state_90231;
var statearr_90253_94681 = state_90231__$1;
(statearr_90253_94681[(2)] = inst_90225);

(statearr_90253_94681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (17))){
var state_90231__$1 = state_90231;
var statearr_90254_94685 = state_90231__$1;
(statearr_90254_94685[(1)] = (20));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (3))){
var inst_90162 = (state_90231[(2)]);
var state_90231__$1 = state_90231;
var statearr_90256_94689 = state_90231__$1;
(statearr_90256_94689[(2)] = inst_90162);


cljs.core.async.impl.ioc_helpers.process_exception(state_90231__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (12))){
var inst_90178 = (state_90231[(7)]);
var state_90231__$1 = state_90231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90231__$1,(15),inst_90178);
} else {
if((state_val_90232 === (2))){
var inst_90229 = (state_90231[(2)]);
var state_90231__$1 = state_90231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_90231__$1,inst_90229);
} else {
if((state_val_90232 === (23))){
var inst_90204 = (state_90231[(8)]);
var state_90231__$1 = state_90231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90231__$1,(26),inst_90204);
} else {
if((state_val_90232 === (19))){
var inst_90189 = (state_90231[(2)]);
var inst_90190 = com.wsscode.async.async_cljs.consumer_pair(inst_90189);
var state_90231__$1 = state_90231;
var statearr_90257_94693 = state_90231__$1;
(statearr_90257_94693[(2)] = inst_90190);

(statearr_90257_94693[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (11))){
var inst_90171 = (state_90231[(9)]);
var inst_90177 = (state_90231[(10)]);
var inst_90178 = (state_90231[(7)]);
var inst_90175 = (state_90231[(2)]);
var inst_90176 = com.wsscode.async.async_cljs.throw_err(inst_90175);
var inst_90177__$1 = cljs.core.filterv(inst_90171,inst_90176);
var inst_90178__$1 = com.wsscode.pathom.connect.call_resolver(env__$1,inst_90177__$1);
var inst_90179 = com.wsscode.async.async_cljs.chan_QMARK_(inst_90178__$1);
var state_90231__$1 = (function (){var statearr_90258 = state_90231;
(statearr_90258[(10)] = inst_90177__$1);

(statearr_90258[(7)] = inst_90178__$1);

return statearr_90258;
})();
if(inst_90179){
var statearr_90259_94698 = state_90231__$1;
(statearr_90259_94698[(1)] = (12));

} else {
var statearr_90260_94699 = state_90231__$1;
(statearr_90260_94699[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (9))){
var inst_90204 = (state_90231[(8)]);
var inst_90204__$1 = com.wsscode.pathom.connect.call_resolver(env__$1,e);
var inst_90205 = com.wsscode.async.async_cljs.chan_QMARK_(inst_90204__$1);
var state_90231__$1 = (function (){var statearr_90261 = state_90231;
(statearr_90261[(8)] = inst_90204__$1);

return statearr_90261;
})();
if(inst_90205){
var statearr_90262_94703 = state_90231__$1;
(statearr_90262_94703[(1)] = (23));

} else {
var statearr_90263_94704 = state_90231__$1;
(statearr_90263_94704[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (5))){
var state_90231__$1 = state_90231;
var statearr_90264_94705 = state_90231__$1;
(statearr_90264_94705[(2)] = processing_sequence);

(statearr_90264_94705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (14))){
var inst_90177 = (state_90231[(10)]);
var inst_90199 = (state_90231[(2)]);
var inst_90200 = cljs.core.zipmap(inst_90177,inst_90199);
var inst_90201 = com.wsscode.pathom.connect.cache_batch(env__$1,s,inst_90200);
var inst_90202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_90200,e);
var state_90231__$1 = (function (){var statearr_90265 = state_90231;
(statearr_90265[(11)] = inst_90201);

return statearr_90265;
})();
var statearr_90266_94709 = state_90231__$1;
(statearr_90266_94709[(2)] = inst_90202);

(statearr_90266_94709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (26))){
var inst_90208 = (state_90231[(2)]);
var inst_90209 = com.wsscode.async.async_cljs.throw_err(inst_90208);
var state_90231__$1 = state_90231;
var statearr_90267_94710 = state_90231__$1;
(statearr_90267_94710[(2)] = inst_90209);

(statearr_90267_94710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (16))){
var inst_90178 = (state_90231[(7)]);
var inst_90187 = com.wsscode.async.async_cljs.promise__GT_chan(inst_90178);
var state_90231__$1 = state_90231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90231__$1,(19),inst_90187);
} else {
if((state_val_90232 === (30))){
var inst_90215 = (state_90231[(2)]);
var inst_90216 = com.wsscode.async.async_cljs.consumer_pair(inst_90215);
var state_90231__$1 = state_90231;
var statearr_90268_94711 = state_90231__$1;
(statearr_90268_94711[(2)] = inst_90216);

(statearr_90268_94711[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (10))){
var inst_90227 = (state_90231[(2)]);
var state_90231__$1 = state_90231;
var statearr_90269_94712 = state_90231__$1;
(statearr_90269_94712[(2)] = inst_90227);


cljs.core.async.impl.ioc_helpers.process_exception(state_90231__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (18))){
var inst_90197 = (state_90231[(2)]);
var state_90231__$1 = state_90231;
var statearr_90270_94716 = state_90231__$1;
(statearr_90270_94716[(2)] = inst_90197);

(statearr_90270_94716[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90232 === (8))){
var inst_90171 = (function (){return ((function (state_val_90232,c__47946__auto____$1,input,cache_QMARK_,map__89980,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,map__89956,inst_90004,inst_89954,inst_90012,inst_90002,inst_89979,inst_90006,inst_89978,inst_89977,inst_90005,inst_90003,inst_90008,inst_90009,inst_90010,state_val_90149,c__47946__auto__,k,p,map__89945,map__89945__$1,env,indexes,processing_sequence){
return (function (p1__89942_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__89942_SHARP_,input);
});
;})(state_val_90232,c__47946__auto____$1,input,cache_QMARK_,map__89980,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,map__89956,inst_90004,inst_89954,inst_90012,inst_90002,inst_89979,inst_90006,inst_89978,inst_89977,inst_90005,inst_90003,inst_90008,inst_90009,inst_90010,state_val_90149,c__47946__auto__,k,p,map__89945,map__89945__$1,env,indexes,processing_sequence))
})();
var inst_90172 = (function (){return ((function (inst_90171,state_val_90232,c__47946__auto____$1,input,cache_QMARK_,map__89980,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,map__89956,inst_90004,inst_89954,inst_90012,inst_90002,inst_89979,inst_90006,inst_89978,inst_89977,inst_90005,inst_90003,inst_90008,inst_90009,inst_90010,state_val_90149,c__47946__auto__,k,p,map__89945,map__89945__$1,env,indexes,processing_sequence){
return (function (p1__89941_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__89941_SHARP_,input);
});
;})(inst_90171,state_val_90232,c__47946__auto____$1,input,cache_QMARK_,map__89980,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,map__89956,inst_90004,inst_89954,inst_90012,inst_90002,inst_89979,inst_90006,inst_89978,inst_89977,inst_90005,inst_90003,inst_90008,inst_90009,inst_90010,state_val_90149,c__47946__auto__,k,p,map__89945,map__89945__$1,env,indexes,processing_sequence))
})();
var inst_90173 = com.wsscode.pathom.connect.map_async_serial(inst_90172,processing_sequence);
var state_90231__$1 = (function (){var statearr_90271 = state_90231;
(statearr_90271[(9)] = inst_90171);

return statearr_90271;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90231__$1,(11),inst_90173);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47946__auto____$1,input,cache_QMARK_,map__89980,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,map__89956,inst_90004,inst_89954,inst_90012,inst_90002,inst_89979,inst_90006,inst_89978,inst_89977,inst_90005,inst_90003,inst_90008,inst_90009,inst_90010,state_val_90149,c__47946__auto__,k,p,map__89945,map__89945__$1,env,indexes,processing_sequence))
;
return ((function (switch__47663__auto__,c__47946__auto____$1,input,cache_QMARK_,map__89980,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,map__89956,inst_90004,inst_89954,inst_90012,inst_90002,inst_89979,inst_90006,inst_89978,inst_89977,inst_90005,inst_90003,inst_90008,inst_90009,inst_90010,state_val_90149,c__47946__auto__,k,p,map__89945,map__89945__$1,env,indexes,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto____0 = (function (){
var statearr_90272 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90272[(0)] = com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto__);

(statearr_90272[(1)] = (1));

return statearr_90272;
});
var com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto____1 = (function (state_90231){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_90231);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e90273){if((e90273 instanceof Object)){
var ex__47667__auto__ = e90273;
var statearr_90274_94733 = state_90231;
(statearr_90274_94733[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_90231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90273;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94734 = state_90231;
state_90231 = G__94734;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto__ = function(state_90231){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto____1.call(this,state_90231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto____$1,input,cache_QMARK_,map__89980,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,map__89956,inst_90004,inst_89954,inst_90012,inst_90002,inst_89979,inst_90006,inst_89978,inst_89977,inst_90005,inst_90003,inst_90008,inst_90009,inst_90010,state_val_90149,c__47946__auto__,k,p,map__89945,map__89945__$1,env,indexes,processing_sequence))
})();
var state__47948__auto__ = (function (){var statearr_90275 = f__47947__auto__();
(statearr_90275[(6)] = c__47946__auto____$1);

return statearr_90275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto____$1,input,cache_QMARK_,map__89980,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,map__89956,inst_90004,inst_89954,inst_90012,inst_90002,inst_89979,inst_90006,inst_89978,inst_89977,inst_90005,inst_90003,inst_90008,inst_90009,inst_90010,state_val_90149,c__47946__auto__,k,p,map__89945,map__89945__$1,env,indexes,processing_sequence))
);

return c__47946__auto____$1;
});
;})(input,cache_QMARK_,map__89980,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,map__89956,inst_90004,inst_89954,inst_90012,inst_90002,inst_89979,inst_90006,inst_89978,inst_89977,inst_90005,inst_90003,inst_90008,inst_90009,inst_90010,state_val_90149,c__47946__auto__,k,p,map__89945,map__89945__$1,env,indexes,processing_sequence))
})();
var inst_90012__$1 = com.wsscode.pathom.core.cached_async(inst_90006,inst_90010,inst_90011);
var inst_90013 = com.wsscode.async.async_cljs.chan_QMARK_(inst_90012__$1);
var state_90148__$1 = (function (){var statearr_90276 = state_90148;
(statearr_90276[(12)] = inst_90012__$1);

return statearr_90276;
})();
if(inst_90013){
var statearr_90277_94741 = state_90148__$1;
(statearr_90277_94741[(1)] = (30));

} else {
var statearr_90278_94746 = state_90148__$1;
(statearr_90278_94746[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (1))){
var state_90148__$1 = state_90148;
var statearr_90279_94747 = state_90148__$1;
(statearr_90279_94747[(2)] = null);

(statearr_90279_94747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (69))){
var inst_90060 = (state_90148[(20)]);
var inst_90105 = cljs.core.contains_QMARK_(inst_90060,k);
var state_90148__$1 = state_90148;
if(inst_90105){
var statearr_90280_94751 = state_90148__$1;
(statearr_90280_94751[(1)] = (72));

} else {
var statearr_90281_94752 = state_90148__$1;
(statearr_90281_94752[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (24))){
var inst_89981 = (state_90148[(21)]);
var inst_89999 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_89981);
var state_90148__$1 = state_90148;
var statearr_90282_94756 = state_90148__$1;
(statearr_90282_94756[(2)] = inst_89999);

(statearr_90282_94756[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (55))){
var inst_90076 = (state_90148[(9)]);
var inst_90059 = (state_90148[(22)]);
var inst_90080 = (state_90148[(7)]);
var inst_90079 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.atom,inst_90076);
var inst_90080__$1 = com.wsscode.pathom.core.join_seq(inst_90059,inst_90079);
var inst_90081 = com.wsscode.async.async_cljs.chan_QMARK_(inst_90080__$1);
var state_90148__$1 = (function (){var statearr_90283 = state_90148;
(statearr_90283[(7)] = inst_90080__$1);

return statearr_90283;
})();
if(inst_90081){
var statearr_90284_94757 = state_90148__$1;
(statearr_90284_94757[(1)] = (58));

} else {
var statearr_90285_94758 = state_90148__$1;
(statearr_90285_94758[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (85))){
var inst_90124 = (state_90148[(2)]);
var inst_90125 = com.wsscode.async.async_cljs.consumer_pair(inst_90124);
var state_90148__$1 = state_90148;
var statearr_90286_94759 = state_90148__$1;
(statearr_90286_94759[(2)] = inst_90125);

(statearr_90286_94759[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (39))){
var state_90148__$1 = state_90148;
var statearr_90287_94760 = state_90148__$1;
(statearr_90287_94760[(2)] = null);

(statearr_90287_94760[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (88))){
var inst_90130 = (state_90148[(2)]);
var state_90148__$1 = state_90148;
var statearr_90288_94762 = state_90148__$1;
(statearr_90288_94762[(2)] = inst_90130);

(statearr_90288_94762[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (46))){
var state_90148__$1 = state_90148;
var statearr_90289_94763 = state_90148__$1;
(statearr_90289_94763[(1)] = (49));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_90148,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_89951 = com.wsscode.pathom.connect.async_pick_resolver(env);
var state_90148__$1 = state_90148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90148__$1,(5),inst_89951);
} else {
if((state_val_90149 === (77))){
var inst_90137 = (state_90148[(2)]);
var state_90148__$1 = state_90148;
var statearr_90291_94765 = state_90148__$1;
(statearr_90291_94765[(2)] = inst_90137);

(statearr_90291_94765[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (54))){
var inst_90076 = (state_90148[(9)]);
var inst_90004 = (state_90148[(10)]);
var inst_89954 = (state_90148[(11)]);
var inst_90059 = (state_90148[(22)]);
var inst_90002 = (state_90148[(13)]);
var inst_89979 = (state_90148[(14)]);
var inst_90006 = (state_90148[(15)]);
var inst_89978 = (state_90148[(16)]);
var inst_89977 = (state_90148[(17)]);
var inst_90005 = (state_90148[(18)]);
var inst_90003 = (state_90148[(19)]);
var inst_90060 = (state_90148[(20)]);
var inst_90073 = (state_90148[(2)]);
var inst_90074 = (function (){var input = inst_90005;
var response = inst_90060;
var cache_QMARK_ = inst_90003;
var map__89980 = inst_90002;
var temp__5718__auto__ = inst_89954;
var batch_QMARK_ = inst_90004;
var env__$1 = inst_90006;
var e = inst_89978;
var s = inst_89979;
var resolver = inst_90002;
var env_SINGLEQUOTE_ = inst_90059;
var map__89956 = inst_89977;
return ((function (input,response,cache_QMARK_,map__89980,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,env_SINGLEQUOTE_,map__89956,inst_90076,inst_90004,inst_89954,inst_90059,inst_90002,inst_89979,inst_90006,inst_89978,inst_89977,inst_90005,inst_90003,inst_90060,inst_90073,state_val_90149,c__47946__auto__,k,p,map__89945,map__89945__$1,env,indexes,processing_sequence){
return (function (p1__89943_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__89943_SHARP_], 0));
});
;})(input,response,cache_QMARK_,map__89980,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,env_SINGLEQUOTE_,map__89956,inst_90076,inst_90004,inst_89954,inst_90059,inst_90002,inst_89979,inst_90006,inst_89978,inst_89977,inst_90005,inst_90003,inst_90060,inst_90073,state_val_90149,c__47946__auto__,k,p,map__89945,map__89945__$1,env,indexes,processing_sequence))
})();
var inst_90075 = com.wsscode.pathom.core.swap_entity_BANG_(inst_90059,inst_90074);
var inst_90076__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_90060,k);
var inst_90077 = cljs.core.sequential_QMARK_(inst_90076__$1);
var state_90148__$1 = (function (){var statearr_90292 = state_90148;
(statearr_90292[(9)] = inst_90076__$1);

(statearr_90292[(23)] = inst_90075);

(statearr_90292[(24)] = inst_90073);

return statearr_90292;
})();
if(inst_90077){
var statearr_90293_94769 = state_90148__$1;
(statearr_90293_94769[(1)] = (55));

} else {
var statearr_90294_94780 = state_90148__$1;
(statearr_90294_94780[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (15))){
var inst_89954 = (state_90148[(11)]);
var inst_89974 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_89954);
var state_90148__$1 = state_90148;
var statearr_90295_94781 = state_90148__$1;
(statearr_90295_94781[(2)] = inst_89974);

(statearr_90295_94781[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (48))){
var inst_90046 = (state_90148[(2)]);
var inst_90047 = com.wsscode.async.async_cljs.consumer_pair(inst_90046);
var state_90148__$1 = state_90148;
var statearr_90296_94782 = state_90148__$1;
(statearr_90296_94782[(2)] = inst_90047);

(statearr_90296_94782[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (50))){
var state_90148__$1 = state_90148;
var statearr_90297_94785 = state_90148__$1;
(statearr_90297_94785[(2)] = null);

(statearr_90297_94785[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (75))){
var inst_90076 = (state_90148[(9)]);
var inst_90059 = (state_90148[(22)]);
var inst_90113 = (state_90148[(8)]);
var inst_90112 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_90076);
var inst_90113__$1 = com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(inst_90112,inst_90059);
var inst_90114 = com.wsscode.async.async_cljs.chan_QMARK_(inst_90113__$1);
var state_90148__$1 = (function (){var statearr_90298 = state_90148;
(statearr_90298[(8)] = inst_90113__$1);

return statearr_90298;
})();
if(inst_90114){
var statearr_90299_94792 = state_90148__$1;
(statearr_90299_94792[(1)] = (78));

} else {
var statearr_90300_94793 = state_90148__$1;
(statearr_90300_94793[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (21))){
var state_90148__$1 = state_90148;
var statearr_90301_94794 = state_90148__$1;
(statearr_90301_94794[(2)] = true);

(statearr_90301_94794[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (31))){
var inst_90012 = (state_90148[(12)]);
var inst_90019 = com.wsscode.async.async_cljs.promise_QMARK_(inst_90012);
var state_90148__$1 = state_90148;
if(cljs.core.truth_(inst_90019)){
var statearr_90302_94795 = state_90148__$1;
(statearr_90302_94795[(1)] = (34));

} else {
var statearr_90303_94796 = state_90148__$1;
(statearr_90303_94796[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (32))){
var inst_90033 = (state_90148[(2)]);
var state_90148__$1 = state_90148;
var statearr_90304_94797 = state_90148__$1;
(statearr_90304_94797[(2)] = inst_90033);

(statearr_90304_94797[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (40))){
var inst_90029 = (state_90148[(2)]);
var state_90148__$1 = state_90148;
var statearr_90305_94798 = state_90148__$1;
(statearr_90305_94798[(2)] = inst_90029);

(statearr_90305_94798[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (56))){
var inst_90076 = (state_90148[(9)]);
var inst_90103 = (inst_90076 == null);
var state_90148__$1 = state_90148;
if(cljs.core.truth_(inst_90103)){
var statearr_90306_94799 = state_90148__$1;
(statearr_90306_94799[(1)] = (69));

} else {
var statearr_90307_94800 = state_90148__$1;
(statearr_90307_94800[(1)] = (70));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (33))){
var inst_90016 = (state_90148[(2)]);
var inst_90017 = com.wsscode.async.async_cljs.throw_err(inst_90016);
var state_90148__$1 = state_90148;
var statearr_90308_94802 = state_90148__$1;
(statearr_90308_94802[(2)] = inst_90017);

(statearr_90308_94802[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (13))){
var state_90148__$1 = state_90148;
var statearr_90309_94803 = state_90148__$1;
(statearr_90309_94803[(2)] = false);

(statearr_90309_94803[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (22))){
var state_90148__$1 = state_90148;
var statearr_90310_94804 = state_90148__$1;
(statearr_90310_94804[(2)] = false);

(statearr_90310_94804[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (36))){
var inst_90031 = (state_90148[(2)]);
var state_90148__$1 = state_90148;
var statearr_90311_94806 = state_90148__$1;
(statearr_90311_94806[(2)] = inst_90031);

(statearr_90311_94806[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (41))){
var inst_90035 = (state_90148[(25)]);
var state_90148__$1 = state_90148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90148__$1,(44),inst_90035);
} else {
if((state_val_90149 === (43))){
var inst_90056 = (state_90148[(2)]);
var state_90148__$1 = state_90148;
var statearr_90312_94807 = state_90148__$1;
(statearr_90312_94807[(2)] = inst_90056);

(statearr_90312_94807[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (61))){
var inst_90084 = (state_90148[(2)]);
var inst_90085 = com.wsscode.async.async_cljs.throw_err(inst_90084);
var state_90148__$1 = state_90148;
var statearr_90313_94808 = state_90148__$1;
(statearr_90313_94808[(2)] = inst_90085);

(statearr_90313_94808[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (29))){
var inst_90006 = (state_90148[(15)]);
var inst_90060 = (state_90148[(20)]);
var inst_90058 = (state_90148[(2)]);
var inst_90059 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_90058,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),inst_90006);
var inst_90060__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_90058,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_90061 = (inst_90060__$1 == null);
var inst_90062 = cljs.core.map_QMARK_(inst_90060__$1);
var inst_90063 = ((inst_90061) || (inst_90062));
var inst_90064 = cljs.core.not(inst_90063);
var state_90148__$1 = (function (){var statearr_90314 = state_90148;
(statearr_90314[(22)] = inst_90059);

(statearr_90314[(20)] = inst_90060__$1);

return statearr_90314;
})();
if(inst_90064){
var statearr_90315_94809 = state_90148__$1;
(statearr_90315_94809[(1)] = (52));

} else {
var statearr_90316_94810 = state_90148__$1;
(statearr_90316_94810[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (44))){
var inst_90039 = (state_90148[(2)]);
var inst_90040 = com.wsscode.async.async_cljs.throw_err(inst_90039);
var state_90148__$1 = state_90148;
var statearr_90317_94813 = state_90148__$1;
(statearr_90317_94813[(2)] = inst_90040);

(statearr_90317_94813[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (6))){
var inst_89954 = (state_90148[(11)]);
var inst_89958 = (inst_89954 == null);
var inst_89959 = cljs.core.not(inst_89958);
var state_90148__$1 = state_90148;
if(inst_89959){
var statearr_90318_94825 = state_90148__$1;
(statearr_90318_94825[(1)] = (9));

} else {
var statearr_90319_94826 = state_90148__$1;
(statearr_90319_94826[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (28))){
var inst_90006 = (state_90148[(15)]);
var inst_90035 = (state_90148[(25)]);
var inst_89978 = (state_90148[(16)]);
var inst_90035__$1 = com.wsscode.pathom.connect.call_resolver(inst_90006,inst_89978);
var inst_90036 = com.wsscode.async.async_cljs.chan_QMARK_(inst_90035__$1);
var state_90148__$1 = (function (){var statearr_90320 = state_90148;
(statearr_90320[(25)] = inst_90035__$1);

return statearr_90320;
})();
if(inst_90036){
var statearr_90321_94828 = state_90148__$1;
(statearr_90321_94828[(1)] = (41));

} else {
var statearr_90322_94830 = state_90148__$1;
(statearr_90322_94830[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (64))){
var inst_90099 = (state_90148[(2)]);
var state_90148__$1 = state_90148;
var statearr_90323_94831 = state_90148__$1;
(statearr_90323_94831[(2)] = inst_90099);

(statearr_90323_94831[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (51))){
var inst_90052 = (state_90148[(2)]);
var state_90148__$1 = state_90148;
var statearr_90324_94834 = state_90148__$1;
(statearr_90324_94834[(2)] = inst_90052);

(statearr_90324_94834[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (25))){
var inst_89981 = (state_90148[(21)]);
var state_90148__$1 = state_90148;
var statearr_90325_94839 = state_90148__$1;
(statearr_90325_94839[(2)] = inst_89981);

(statearr_90325_94839[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (34))){
var inst_90012 = (state_90148[(12)]);
var inst_90021 = com.wsscode.async.async_cljs.promise__GT_chan(inst_90012);
var state_90148__$1 = state_90148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90148__$1,(37),inst_90021);
} else {
if((state_val_90149 === (17))){
var inst_89981 = (state_90148[(21)]);
var inst_89979 = (state_90148[(14)]);
var inst_89977 = (state_90148[(17)]);
var inst_89977__$1 = (state_90148[(2)]);
var inst_89978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_89977__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var inst_89979__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_89977__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var inst_89981__$1 = (com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2(env,inst_89979__$1) : com.wsscode.pathom.connect.resolver_data.call(null,env,inst_89979__$1));
var inst_89983 = (inst_89981__$1 == null);
var inst_89984 = cljs.core.not(inst_89983);
var state_90148__$1 = (function (){var statearr_90326 = state_90148;
(statearr_90326[(21)] = inst_89981__$1);

(statearr_90326[(14)] = inst_89979__$1);

(statearr_90326[(16)] = inst_89978);

(statearr_90326[(17)] = inst_89977__$1);

return statearr_90326;
})();
if(inst_89984){
var statearr_90327_94840 = state_90148__$1;
(statearr_90327_94840[(1)] = (18));

} else {
var statearr_90328_94841 = state_90148__$1;
(statearr_90328_94841[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (3))){
var inst_89947 = (state_90148[(2)]);
var state_90148__$1 = state_90148;
var statearr_90329_94843 = state_90148__$1;
(statearr_90329_94843[(2)] = inst_89947);


cljs.core.async.impl.ioc_helpers.process_exception(state_90148__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (12))){
var state_90148__$1 = state_90148;
var statearr_90330_94844 = state_90148__$1;
(statearr_90330_94844[(2)] = true);

(statearr_90330_94844[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (2))){
var inst_90146 = (state_90148[(2)]);
var state_90148__$1 = state_90148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_90148__$1,inst_90146);
} else {
if((state_val_90149 === (66))){
var inst_90080 = (state_90148[(7)]);
var state_90148__$1 = state_90148;
var statearr_90331_94846 = state_90148__$1;
(statearr_90331_94846[(2)] = inst_90080);

(statearr_90331_94846[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (23))){
var inst_89994 = (state_90148[(2)]);
var state_90148__$1 = state_90148;
var statearr_90332_94847 = state_90148__$1;
(statearr_90332_94847[(2)] = inst_89994);

(statearr_90332_94847[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (47))){
var inst_90054 = (state_90148[(2)]);
var state_90148__$1 = state_90148;
var statearr_90333_94848 = state_90148__$1;
(statearr_90333_94848[(2)] = inst_90054);

(statearr_90333_94848[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (35))){
var state_90148__$1 = state_90148;
var statearr_90334_94849 = state_90148__$1;
(statearr_90334_94849[(1)] = (38));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (82))){
var inst_90113 = (state_90148[(8)]);
var inst_90122 = com.wsscode.async.async_cljs.promise__GT_chan(inst_90113);
var state_90148__$1 = state_90148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90148__$1,(85),inst_90122);
} else {
if((state_val_90149 === (76))){
var state_90148__$1 = state_90148;
var statearr_90336_94850 = state_90148__$1;
(statearr_90336_94850[(2)] = null);

(statearr_90336_94850[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (19))){
var state_90148__$1 = state_90148;
var statearr_90337_94851 = state_90148__$1;
(statearr_90337_94851[(2)] = false);

(statearr_90337_94851[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (57))){
var inst_90141 = (state_90148[(2)]);
var state_90148__$1 = state_90148;
var statearr_90338_94854 = state_90148__$1;
(statearr_90338_94854[(2)] = inst_90141);

(statearr_90338_94854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (68))){
var inst_90097 = (state_90148[(2)]);
var state_90148__$1 = state_90148;
var statearr_90339_94856 = state_90148__$1;
(statearr_90339_94856[(2)] = inst_90097);

(statearr_90339_94856[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (11))){
var inst_89972 = (state_90148[(2)]);
var state_90148__$1 = state_90148;
if(cljs.core.truth_(inst_89972)){
var statearr_90340_94867 = state_90148__$1;
(statearr_90340_94867[(1)] = (15));

} else {
var statearr_90341_94868 = state_90148__$1;
(statearr_90341_94868[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (9))){
var inst_89954 = (state_90148[(11)]);
var inst_89961 = inst_89954.cljs$lang$protocol_mask$partition0$;
var inst_89962 = (inst_89961 & (64));
var inst_89963 = inst_89954.cljs$core$ISeq$;
var inst_89964 = (cljs.core.PROTOCOL_SENTINEL === inst_89963);
var inst_89965 = ((inst_89962) || (inst_89964));
var state_90148__$1 = state_90148;
if(cljs.core.truth_(inst_89965)){
var statearr_90342_94871 = state_90148__$1;
(statearr_90342_94871[(1)] = (12));

} else {
var statearr_90343_94874 = state_90148__$1;
(statearr_90343_94874[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (5))){
var inst_89954 = (state_90148[(11)]);
var inst_89953 = (state_90148[(2)]);
var inst_89954__$1 = com.wsscode.async.async_cljs.throw_err(inst_89953);
var state_90148__$1 = (function (){var statearr_90344 = state_90148;
(statearr_90344[(11)] = inst_89954__$1);

return statearr_90344;
})();
if(cljs.core.truth_(inst_89954__$1)){
var statearr_90345_94881 = state_90148__$1;
(statearr_90345_94881[(1)] = (6));

} else {
var statearr_90346_94882 = state_90148__$1;
(statearr_90346_94882[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (83))){
var state_90148__$1 = state_90148;
var statearr_90347_94884 = state_90148__$1;
(statearr_90347_94884[(1)] = (86));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (14))){
var inst_89969 = (state_90148[(2)]);
var state_90148__$1 = state_90148;
var statearr_90349_94885 = state_90148__$1;
(statearr_90349_94885[(2)] = inst_89969);

(statearr_90349_94885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (45))){
var inst_90035 = (state_90148[(25)]);
var inst_90044 = com.wsscode.async.async_cljs.promise__GT_chan(inst_90035);
var state_90148__$1 = state_90148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90148__$1,(48),inst_90044);
} else {
if((state_val_90149 === (53))){
var state_90148__$1 = state_90148;
var statearr_90350_94891 = state_90148__$1;
(statearr_90350_94891[(2)] = null);

(statearr_90350_94891[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (78))){
var inst_90113 = (state_90148[(8)]);
var state_90148__$1 = state_90148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90148__$1,(81),inst_90113);
} else {
if((state_val_90149 === (26))){
var inst_90002 = (state_90148[(13)]);
var inst_90003 = (state_90148[(19)]);
var inst_90002__$1 = (state_90148[(2)]);
var inst_90003__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_90002__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_90004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_90002__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_90005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_90002__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_90006 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_90002__$1);
var state_90148__$1 = (function (){var statearr_90351 = state_90148;
(statearr_90351[(10)] = inst_90004);

(statearr_90351[(13)] = inst_90002__$1);

(statearr_90351[(15)] = inst_90006);

(statearr_90351[(18)] = inst_90005);

(statearr_90351[(19)] = inst_90003__$1);

return statearr_90351;
})();
if(cljs.core.truth_(inst_90003__$1)){
var statearr_90352_94895 = state_90148__$1;
(statearr_90352_94895[(1)] = (27));

} else {
var statearr_90353_94896 = state_90148__$1;
(statearr_90353_94896[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (16))){
var inst_89954 = (state_90148[(11)]);
var state_90148__$1 = state_90148;
var statearr_90354_94900 = state_90148__$1;
(statearr_90354_94900[(2)] = inst_89954);

(statearr_90354_94900[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (81))){
var inst_90117 = (state_90148[(2)]);
var inst_90118 = com.wsscode.async.async_cljs.throw_err(inst_90117);
var state_90148__$1 = state_90148;
var statearr_90355_94901 = state_90148__$1;
(statearr_90355_94901[(2)] = inst_90118);

(statearr_90355_94901[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (79))){
var inst_90113 = (state_90148[(8)]);
var inst_90120 = com.wsscode.async.async_cljs.promise_QMARK_(inst_90113);
var state_90148__$1 = state_90148;
if(cljs.core.truth_(inst_90120)){
var statearr_90356_94903 = state_90148__$1;
(statearr_90356_94903[(1)] = (82));

} else {
var statearr_90357_94904 = state_90148__$1;
(statearr_90357_94904[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (38))){
var inst_90012 = (state_90148[(12)]);
var state_90148__$1 = state_90148;
var statearr_90358_94905 = state_90148__$1;
(statearr_90358_94905[(2)] = inst_90012);

(statearr_90358_94905[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (87))){
var state_90148__$1 = state_90148;
var statearr_90359_94906 = state_90148__$1;
(statearr_90359_94906[(2)] = null);

(statearr_90359_94906[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (30))){
var inst_90012 = (state_90148[(12)]);
var state_90148__$1 = state_90148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90148__$1,(33),inst_90012);
} else {
if((state_val_90149 === (73))){
var state_90148__$1 = state_90148;
var statearr_90360_94908 = state_90148__$1;
(statearr_90360_94908[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));

(statearr_90360_94908[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (10))){
var state_90148__$1 = state_90148;
var statearr_90361_94909 = state_90148__$1;
(statearr_90361_94909[(2)] = false);

(statearr_90361_94909[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (18))){
var inst_89981 = (state_90148[(21)]);
var inst_89986 = inst_89981.cljs$lang$protocol_mask$partition0$;
var inst_89987 = (inst_89986 & (64));
var inst_89988 = inst_89981.cljs$core$ISeq$;
var inst_89989 = (cljs.core.PROTOCOL_SENTINEL === inst_89988);
var inst_89990 = ((inst_89987) || (inst_89989));
var state_90148__$1 = state_90148;
if(cljs.core.truth_(inst_89990)){
var statearr_90362_94912 = state_90148__$1;
(statearr_90362_94912[(1)] = (21));

} else {
var statearr_90363_94913 = state_90148__$1;
(statearr_90363_94913[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (52))){
var inst_89979 = (state_90148[(14)]);
var inst_90060 = (state_90148[(20)]);
var inst_90066 = [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"response","response",-1068424192)];
var inst_90067 = [inst_89979,inst_90060];
var inst_90068 = cljs.core.PersistentHashMap.fromArrays(inst_90066,inst_90067);
var inst_90069 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Response from reader must be a map.",inst_90068);
var inst_90070 = (function(){throw inst_90069})();
var state_90148__$1 = state_90148;
var statearr_90364_94914 = state_90148__$1;
(statearr_90364_94914[(2)] = inst_90070);

(statearr_90364_94914[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (67))){
var state_90148__$1 = state_90148;
var statearr_90365_94915 = state_90148__$1;
(statearr_90365_94915[(2)] = null);

(statearr_90365_94915[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (71))){
var inst_90139 = (state_90148[(2)]);
var state_90148__$1 = state_90148;
var statearr_90366_94916 = state_90148__$1;
(statearr_90366_94916[(2)] = inst_90139);

(statearr_90366_94916[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (42))){
var inst_90035 = (state_90148[(25)]);
var inst_90042 = com.wsscode.async.async_cljs.promise_QMARK_(inst_90035);
var state_90148__$1 = state_90148;
if(cljs.core.truth_(inst_90042)){
var statearr_90367_94917 = state_90148__$1;
(statearr_90367_94917[(1)] = (45));

} else {
var statearr_90368_94920 = state_90148__$1;
(statearr_90368_94920[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (80))){
var inst_90134 = (state_90148[(2)]);
var state_90148__$1 = state_90148;
var statearr_90369_94921 = state_90148__$1;
(statearr_90369_94921[(2)] = inst_90134);

(statearr_90369_94921[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (37))){
var inst_90023 = (state_90148[(2)]);
var inst_90024 = com.wsscode.async.async_cljs.consumer_pair(inst_90023);
var state_90148__$1 = state_90148;
var statearr_90370_94923 = state_90148__$1;
(statearr_90370_94923[(2)] = inst_90024);

(statearr_90370_94923[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (63))){
var state_90148__$1 = state_90148;
var statearr_90371_94924 = state_90148__$1;
(statearr_90371_94924[(1)] = (66));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (8))){
var inst_90144 = (state_90148[(2)]);
var state_90148__$1 = state_90148;
var statearr_90373_94925 = state_90148__$1;
(statearr_90373_94925[(2)] = inst_90144);


cljs.core.async.impl.ioc_helpers.process_exception(state_90148__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (49))){
var inst_90035 = (state_90148[(25)]);
var state_90148__$1 = state_90148;
var statearr_90374_94936 = state_90148__$1;
(statearr_90374_94936[(2)] = inst_90035);

(statearr_90374_94936[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90149 === (84))){
var inst_90132 = (state_90148[(2)]);
var state_90148__$1 = state_90148;
var statearr_90375_94937 = state_90148__$1;
(statearr_90375_94937[(2)] = inst_90132);

(statearr_90375_94937[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47946__auto__,k,p,map__89945,map__89945__$1,env,indexes,processing_sequence))
;
return ((function (switch__47663__auto__,c__47946__auto__,k,p,map__89945,map__89945__$1,env,indexes,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto____0 = (function (){
var statearr_90376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90376[(0)] = com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto__);

(statearr_90376[(1)] = (1));

return statearr_90376;
});
var com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto____1 = (function (state_90148){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_90148);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e90377){if((e90377 instanceof Object)){
var ex__47667__auto__ = e90377;
var statearr_90378_94941 = state_90148;
(statearr_90378_94941[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_90148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90377;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94943 = state_90148;
state_90148 = G__94943;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto__ = function(state_90148){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto____1.call(this,state_90148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,k,p,map__89945,map__89945__$1,env,indexes,processing_sequence))
})();
var state__47948__auto__ = (function (){var statearr_90379 = f__47947__auto__();
(statearr_90379[(6)] = c__47946__auto__);

return statearr_90379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,k,p,map__89945,map__89945__$1,env,indexes,processing_sequence))
);

return c__47946__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.async_read_call_batch = (function com$wsscode$pathom$connect$async_read_call_batch(p__90382,e,trace_data,input){
var map__90383 = p__90382;
var map__90383__$1 = (((((!((map__90383 == null))))?(((((map__90383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90383):map__90383);
var env = map__90383__$1;
var map__90384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90383__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__90384__$1 = (((((!((map__90384 == null))))?(((((map__90384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90384):map__90384);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90384__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90383__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___94962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___94962,ch__53519__auto__,map__90383,map__90383__$1,env,map__90384,map__90384__$1,sym,processing_sequence){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___94962,ch__53519__auto__,map__90383,map__90383__$1,env,map__90384,map__90384__$1,sym,processing_sequence){
return (function (state_90498){
var state_val_90499 = (state_90498[(1)]);
if((state_val_90499 === (7))){
var inst_90487 = (state_90498[(2)]);
var state_90498__$1 = state_90498;
var statearr_90500_94965 = state_90498__$1;
(statearr_90500_94965[(2)] = inst_90487);


cljs.core.async.impl.ioc_helpers.process_exception(state_90498__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (20))){
var inst_90456 = (state_90498[(7)]);
var inst_90451 = (state_90498[(8)]);
var inst_90444 = (state_90498[(9)]);
var inst_90448 = (state_90498[(2)]);
var inst_90449 = com.wsscode.async.async_cljs.throw_err(inst_90448);
var inst_90450 = cljs.core.filterv(inst_90444,inst_90449);
var inst_90451__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_90450);
var inst_90452 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_90453 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_90451__$1];
var inst_90454 = cljs.core.PersistentHashMap.fromArrays(inst_90452,inst_90453);
var inst_90455 = com.wsscode.pathom.trace.trace(env,inst_90454);
var inst_90456__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_90451__$1);
var inst_90457 = com.wsscode.async.async_cljs.chan_QMARK_(inst_90456__$1);
var state_90498__$1 = (function (){var statearr_90501 = state_90498;
(statearr_90501[(7)] = inst_90456__$1);

(statearr_90501[(8)] = inst_90451__$1);

(statearr_90501[(10)] = inst_90455);

return statearr_90501;
})();
if(inst_90457){
var statearr_90502_94968 = state_90498__$1;
(statearr_90502_94968[(1)] = (21));

} else {
var statearr_90503_94969 = state_90498__$1;
(statearr_90503_94969[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (27))){
var inst_90475 = (state_90498[(2)]);
var state_90498__$1 = state_90498;
var statearr_90504_94970 = state_90498__$1;
(statearr_90504_94970[(2)] = inst_90475);

(statearr_90504_94970[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (1))){
var state_90498__$1 = state_90498;
var statearr_90505_94973 = state_90498__$1;
(statearr_90505_94973[(2)] = null);

(statearr_90505_94973[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (24))){
var inst_90460 = (state_90498[(2)]);
var inst_90461 = com.wsscode.async.async_cljs.throw_err(inst_90460);
var state_90498__$1 = state_90498;
var statearr_90506_94975 = state_90498__$1;
(statearr_90506_94975[(2)] = inst_90461);

(statearr_90506_94975[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_90498,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_90391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_90498__$1 = state_90498;
if(cljs.core.truth_(inst_90391)){
var statearr_90507_94976 = state_90498__$1;
(statearr_90507_94976[(1)] = (5));

} else {
var statearr_90508_94977 = state_90498__$1;
(statearr_90508_94977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (15))){
var inst_90428 = (state_90498[(2)]);
var state_90498__$1 = state_90498;
var statearr_90509_94979 = state_90498__$1;
(statearr_90509_94979[(2)] = inst_90428);

(statearr_90509_94979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (21))){
var inst_90456 = (state_90498[(7)]);
var state_90498__$1 = state_90498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90498__$1,(24),inst_90456);
} else {
if((state_val_90499 === (31))){
var inst_90473 = (state_90498[(2)]);
var state_90498__$1 = state_90498;
var statearr_90510_94980 = state_90498__$1;
(statearr_90510_94980[(2)] = inst_90473);

(statearr_90510_94980[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (32))){
var inst_90492 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_90498__$1 = state_90498;
var statearr_90511_94984 = state_90498__$1;
(statearr_90511_94984[(2)] = inst_90492);

(statearr_90511_94984[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (33))){
var inst_90489 = (state_90498[(11)]);
var inst_90494 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_90489);
var state_90498__$1 = state_90498;
var statearr_90512_94985 = state_90498__$1;
(statearr_90512_94985[(2)] = inst_90494);

(statearr_90512_94985[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (13))){
var inst_90409 = (state_90498[(12)]);
var inst_90418 = com.wsscode.async.async_cljs.promise__GT_chan(inst_90409);
var state_90498__$1 = state_90498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90498__$1,(16),inst_90418);
} else {
if((state_val_90499 === (22))){
var inst_90456 = (state_90498[(7)]);
var inst_90463 = com.wsscode.async.async_cljs.promise_QMARK_(inst_90456);
var state_90498__$1 = state_90498;
if(cljs.core.truth_(inst_90463)){
var statearr_90513_94986 = state_90498__$1;
(statearr_90513_94986[(1)] = (25));

} else {
var statearr_90514_94987 = state_90498__$1;
(statearr_90514_94987[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (29))){
var inst_90456 = (state_90498[(7)]);
var state_90498__$1 = state_90498;
var statearr_90515_94988 = state_90498__$1;
(statearr_90515_94988[(2)] = inst_90456);

(statearr_90515_94988[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (6))){
var inst_90442 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_90443 = com.wsscode.pathom.trace.trace(env,inst_90442);
var inst_90444 = (function (){var _ = inst_90443;
return ((function (_,inst_90442,inst_90443,state_val_90499,c__47946__auto___94962,ch__53519__auto__,map__90383,map__90383__$1,env,map__90384,map__90384__$1,sym,processing_sequence){
return (function (p1__90381_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__90381_SHARP_,input);
});
;})(_,inst_90442,inst_90443,state_val_90499,c__47946__auto___94962,ch__53519__auto__,map__90383,map__90383__$1,env,map__90384,map__90384__$1,sym,processing_sequence))
})();
var inst_90445 = (function (){var _ = inst_90443;
return ((function (_,inst_90442,inst_90443,inst_90444,state_val_90499,c__47946__auto___94962,ch__53519__auto__,map__90383,map__90383__$1,env,map__90384,map__90384__$1,sym,processing_sequence){
return (function (p1__90380_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__90380_SHARP_,input);
});
;})(_,inst_90442,inst_90443,inst_90444,state_val_90499,c__47946__auto___94962,ch__53519__auto__,map__90383,map__90383__$1,env,map__90384,map__90384__$1,sym,processing_sequence))
})();
var inst_90446 = com.wsscode.pathom.connect.map_async_serial(inst_90445,processing_sequence);
var state_90498__$1 = (function (){var statearr_90516 = state_90498;
(statearr_90516[(9)] = inst_90444);

return statearr_90516;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90498__$1,(20),inst_90446);
} else {
if((state_val_90499 === (28))){
var inst_90467 = (state_90498[(2)]);
var inst_90468 = com.wsscode.async.async_cljs.consumer_pair(inst_90467);
var state_90498__$1 = state_90498;
var statearr_90517_94992 = state_90498__$1;
(statearr_90517_94992[(2)] = inst_90468);

(statearr_90517_94992[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (25))){
var inst_90456 = (state_90498[(7)]);
var inst_90465 = com.wsscode.async.async_cljs.promise__GT_chan(inst_90456);
var state_90498__$1 = state_90498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90498__$1,(28),inst_90465);
} else {
if((state_val_90499 === (34))){
var inst_90496 = (state_90498[(2)]);
var state_90498__$1 = state_90498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_90498__$1,inst_90496);
} else {
if((state_val_90499 === (17))){
var inst_90409 = (state_90498[(12)]);
var state_90498__$1 = state_90498;
var statearr_90518_94993 = state_90498__$1;
(statearr_90518_94993[(2)] = inst_90409);

(statearr_90518_94993[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (3))){
var inst_90387 = (state_90498[(2)]);
var state_90498__$1 = state_90498;
var statearr_90519_94994 = state_90498__$1;
(statearr_90519_94994[(2)] = inst_90387);


cljs.core.async.impl.ioc_helpers.process_exception(state_90498__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (12))){
var inst_90413 = (state_90498[(2)]);
var inst_90414 = com.wsscode.async.async_cljs.throw_err(inst_90413);
var state_90498__$1 = state_90498;
var statearr_90520_94995 = state_90498__$1;
(statearr_90520_94995[(2)] = inst_90414);

(statearr_90520_94995[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (2))){
var inst_90489 = (state_90498[(11)]);
var inst_90489__$1 = (state_90498[(2)]);
var inst_90490 = (inst_90489__$1 == null);
var state_90498__$1 = (function (){var statearr_90521 = state_90498;
(statearr_90521[(11)] = inst_90489__$1);

return statearr_90521;
})();
if(cljs.core.truth_(inst_90490)){
var statearr_90522_94996 = state_90498__$1;
(statearr_90522_94996[(1)] = (32));

} else {
var statearr_90523_94997 = state_90498__$1;
(statearr_90523_94997[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (23))){
var inst_90451 = (state_90498[(8)]);
var inst_90477 = (state_90498[(2)]);
var inst_90478 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_90479 = cljs.core.count(inst_90477);
var inst_90480 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_90479];
var inst_90481 = cljs.core.PersistentHashMap.fromArrays(inst_90478,inst_90480);
var inst_90482 = com.wsscode.pathom.trace.trace(env,inst_90481);
var inst_90483 = cljs.core.zipmap(inst_90451,inst_90477);
var inst_90484 = com.wsscode.pathom.connect.cache_batch(env,sym,inst_90483);
var inst_90485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_90483,e);
var state_90498__$1 = (function (){var statearr_90524 = state_90498;
(statearr_90524[(13)] = inst_90484);

(statearr_90524[(14)] = inst_90482);

return statearr_90524;
})();
var statearr_90525_95000 = state_90498__$1;
(statearr_90525_95000[(2)] = inst_90485);

(statearr_90525_95000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (19))){
var inst_90426 = (state_90498[(2)]);
var state_90498__$1 = state_90498;
var statearr_90526_95001 = state_90498__$1;
(statearr_90526_95001[(2)] = inst_90426);

(statearr_90526_95001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (11))){
var inst_90404 = (state_90498[(15)]);
var inst_90394 = (state_90498[(16)]);
var inst_90430 = (state_90498[(2)]);
var inst_90431 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_90432 = cljs.core.count(inst_90430);
var inst_90433 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_90432];
var inst_90434 = cljs.core.PersistentHashMap.fromArrays(inst_90431,inst_90433);
var inst_90435 = com.wsscode.pathom.trace.trace(env,inst_90434);
var inst_90436 = cljs.core.zipmap(inst_90404,inst_90430);
var inst_90437 = com.wsscode.pathom.connect.cache_batch(env,sym,inst_90436);
var inst_90438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_90436,e);
var inst_90439 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_90440 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_90394,inst_90439);
var state_90498__$1 = (function (){var statearr_90527 = state_90498;
(statearr_90527[(17)] = inst_90440);

(statearr_90527[(18)] = inst_90435);

(statearr_90527[(19)] = inst_90437);

return statearr_90527;
})();
var statearr_90528_95015 = state_90498__$1;
(statearr_90528_95015[(2)] = inst_90438);

(statearr_90528_95015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (9))){
var inst_90409 = (state_90498[(12)]);
var state_90498__$1 = state_90498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90498__$1,(12),inst_90409);
} else {
if((state_val_90499 === (5))){
var inst_90394 = (state_90498[(16)]);
var inst_90393 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_90394__$1 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_90393);
var inst_90395 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_90396 = com.wsscode.pathom.trace.trace(env,inst_90395);
var inst_90397 = (function (){var trace_id__27094__auto__ = inst_90394__$1;
var _ = inst_90396;
return ((function (trace_id__27094__auto__,_,inst_90394,inst_90393,inst_90394__$1,inst_90395,inst_90396,state_val_90499,c__47946__auto___94962,ch__53519__auto__,map__90383,map__90383__$1,env,map__90384,map__90384__$1,sym,processing_sequence){
return (function (p1__90381_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__90381_SHARP_,input);
});
;})(trace_id__27094__auto__,_,inst_90394,inst_90393,inst_90394__$1,inst_90395,inst_90396,state_val_90499,c__47946__auto___94962,ch__53519__auto__,map__90383,map__90383__$1,env,map__90384,map__90384__$1,sym,processing_sequence))
})();
var inst_90398 = (function (){var trace_id__27094__auto__ = inst_90394__$1;
var _ = inst_90396;
return ((function (trace_id__27094__auto__,_,inst_90394,inst_90393,inst_90394__$1,inst_90395,inst_90396,inst_90397,state_val_90499,c__47946__auto___94962,ch__53519__auto__,map__90383,map__90383__$1,env,map__90384,map__90384__$1,sym,processing_sequence){
return (function (p1__90380_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__90380_SHARP_,input);
});
;})(trace_id__27094__auto__,_,inst_90394,inst_90393,inst_90394__$1,inst_90395,inst_90396,inst_90397,state_val_90499,c__47946__auto___94962,ch__53519__auto__,map__90383,map__90383__$1,env,map__90384,map__90384__$1,sym,processing_sequence))
})();
var inst_90399 = com.wsscode.pathom.connect.map_async_serial(inst_90398,processing_sequence);
var state_90498__$1 = (function (){var statearr_90529 = state_90498;
(statearr_90529[(20)] = inst_90397);

(statearr_90529[(16)] = inst_90394__$1);

return statearr_90529;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90498__$1,(8),inst_90399);
} else {
if((state_val_90499 === (14))){
var state_90498__$1 = state_90498;
var statearr_90530_95020 = state_90498__$1;
(statearr_90530_95020[(1)] = (17));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (26))){
var state_90498__$1 = state_90498;
var statearr_90532_95025 = state_90498__$1;
(statearr_90532_95025[(1)] = (29));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (16))){
var inst_90420 = (state_90498[(2)]);
var inst_90421 = com.wsscode.async.async_cljs.consumer_pair(inst_90420);
var state_90498__$1 = state_90498;
var statearr_90534_95026 = state_90498__$1;
(statearr_90534_95026[(2)] = inst_90421);

(statearr_90534_95026[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (30))){
var state_90498__$1 = state_90498;
var statearr_90535_95027 = state_90498__$1;
(statearr_90535_95027[(2)] = null);

(statearr_90535_95027[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (10))){
var inst_90409 = (state_90498[(12)]);
var inst_90416 = com.wsscode.async.async_cljs.promise_QMARK_(inst_90409);
var state_90498__$1 = state_90498;
if(cljs.core.truth_(inst_90416)){
var statearr_90536_95028 = state_90498__$1;
(statearr_90536_95028[(1)] = (13));

} else {
var statearr_90537_95029 = state_90498__$1;
(statearr_90537_95029[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (18))){
var state_90498__$1 = state_90498;
var statearr_90538_95030 = state_90498__$1;
(statearr_90538_95030[(2)] = null);

(statearr_90538_95030[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90499 === (8))){
var inst_90397 = (state_90498[(20)]);
var inst_90404 = (state_90498[(15)]);
var inst_90409 = (state_90498[(12)]);
var inst_90401 = (state_90498[(2)]);
var inst_90402 = com.wsscode.async.async_cljs.throw_err(inst_90401);
var inst_90403 = cljs.core.filterv(inst_90397,inst_90402);
var inst_90404__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_90403);
var inst_90405 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_90406 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_90404__$1];
var inst_90407 = cljs.core.PersistentHashMap.fromArrays(inst_90405,inst_90406);
var inst_90408 = com.wsscode.pathom.trace.trace(env,inst_90407);
var inst_90409__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_90404__$1);
var inst_90410 = com.wsscode.async.async_cljs.chan_QMARK_(inst_90409__$1);
var state_90498__$1 = (function (){var statearr_90539 = state_90498;
(statearr_90539[(21)] = inst_90408);

(statearr_90539[(15)] = inst_90404__$1);

(statearr_90539[(12)] = inst_90409__$1);

return statearr_90539;
})();
if(inst_90410){
var statearr_90540_95037 = state_90498__$1;
(statearr_90540_95037[(1)] = (9));

} else {
var statearr_90541_95038 = state_90498__$1;
(statearr_90541_95038[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47946__auto___94962,ch__53519__auto__,map__90383,map__90383__$1,env,map__90384,map__90384__$1,sym,processing_sequence))
;
return ((function (switch__47663__auto__,c__47946__auto___94962,ch__53519__auto__,map__90383,map__90383__$1,env,map__90384,map__90384__$1,sym,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__47664__auto____0 = (function (){
var statearr_90542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90542[(0)] = com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__47664__auto__);

(statearr_90542[(1)] = (1));

return statearr_90542;
});
var com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__47664__auto____1 = (function (state_90498){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_90498);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e90543){if((e90543 instanceof Object)){
var ex__47667__auto__ = e90543;
var statearr_90544_95039 = state_90498;
(statearr_90544_95039[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_90498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90543;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95040 = state_90498;
state_90498 = G__95040;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__47664__auto__ = function(state_90498){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__47664__auto____1.call(this,state_90498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___94962,ch__53519__auto__,map__90383,map__90383__$1,env,map__90384,map__90384__$1,sym,processing_sequence))
})();
var state__47948__auto__ = (function (){var statearr_90545 = f__47947__auto__();
(statearr_90545[(6)] = c__47946__auto___94962);

return statearr_90545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___94962,ch__53519__auto__,map__90383,map__90383__$1,env,map__90384,map__90384__$1,sym,processing_sequence))
);


return ch__53519__auto__;
});
com.wsscode.pathom.connect.async_read_cache_read = (function com$wsscode$pathom$connect$async_read_cache_read(p__90546,e,trace_data,input){
var map__90547 = p__90546;
var map__90547__$1 = (((((!((map__90547 == null))))?(((((map__90547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90547):map__90547);
var env = map__90547__$1;
var map__90548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90547__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__90548__$1 = (((((!((map__90548 == null))))?(((((map__90548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90548):map__90548);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90548__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90548__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90547__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var params = com.wsscode.pathom.core.params(env);
return com.wsscode.pathom.core.cached_async(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,e,params], null),((function (params,map__90547,map__90547__$1,env,map__90548,map__90548__$1,sym,batch_QMARK_,processing_sequence){
return (function (){
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___95059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___95059,ch__53519__auto__,params,map__90547,map__90547__$1,env,map__90548,map__90548__$1,sym,batch_QMARK_,processing_sequence){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___95059,ch__53519__auto__,params,map__90547,map__90547__$1,env,map__90548,map__90548__$1,sym,batch_QMARK_,processing_sequence){
return (function (state_90622){
var state_val_90623 = (state_90622[(1)]);
if((state_val_90623 === (7))){
var inst_90558 = (state_90622[(2)]);
var state_90622__$1 = state_90622;
if(cljs.core.truth_(inst_90558)){
var statearr_90624_95060 = state_90622__$1;
(statearr_90624_95060[(1)] = (8));

} else {
var statearr_90625_95061 = state_90622__$1;
(statearr_90625_95061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (20))){
var state_90622__$1 = state_90622;
var statearr_90626_95062 = state_90622__$1;
(statearr_90626_95062[(2)] = null);

(statearr_90626_95062[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (27))){
var state_90622__$1 = state_90622;
var statearr_90627_95063 = state_90622__$1;
(statearr_90627_95063[(1)] = (30));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (1))){
var state_90622__$1 = state_90622;
var statearr_90629_95070 = state_90622__$1;
(statearr_90629_95070[(2)] = null);

(statearr_90629_95070[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (24))){
var inst_90604 = (state_90622[(2)]);
var state_90622__$1 = state_90622;
var statearr_90630_95071 = state_90622__$1;
(statearr_90630_95071[(2)] = inst_90604);

(statearr_90630_95071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_90622,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_90622__$1 = state_90622;
if(cljs.core.truth_(batch_QMARK_)){
var statearr_90631_95072 = state_90622__$1;
(statearr_90631_95072[(1)] = (5));

} else {
var statearr_90632_95073 = state_90622__$1;
(statearr_90632_95073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (15))){
var inst_90560 = (state_90622[(7)]);
var inst_90569 = com.wsscode.async.async_cljs.promise__GT_chan(inst_90560);
var state_90622__$1 = state_90622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90622__$1,(18),inst_90569);
} else {
if((state_val_90623 === (21))){
var inst_90577 = (state_90622[(2)]);
var state_90622__$1 = state_90622;
var statearr_90633_95074 = state_90622__$1;
(statearr_90633_95074[(2)] = inst_90577);

(statearr_90633_95074[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (31))){
var state_90622__$1 = state_90622;
var statearr_90634_95075 = state_90622__$1;
(statearr_90634_95075[(2)] = null);

(statearr_90634_95075[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (32))){
var inst_90600 = (state_90622[(2)]);
var state_90622__$1 = state_90622;
var statearr_90635_95079 = state_90622__$1;
(statearr_90635_95079[(2)] = inst_90600);

(statearr_90635_95079[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (33))){
var inst_90606 = (state_90622[(8)]);
var state_90622__$1 = state_90622;
var statearr_90636_95082 = state_90622__$1;
(statearr_90636_95082[(2)] = inst_90606);

(statearr_90636_95082[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (13))){
var inst_90581 = (state_90622[(2)]);
var state_90622__$1 = state_90622;
var statearr_90637_95084 = state_90622__$1;
(statearr_90637_95084[(2)] = inst_90581);

(statearr_90637_95084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (22))){
var inst_90583 = (state_90622[(9)]);
var state_90622__$1 = state_90622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90622__$1,(25),inst_90583);
} else {
if((state_val_90623 === (36))){
var inst_90616 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_90622__$1 = state_90622;
var statearr_90638_95088 = state_90622__$1;
(statearr_90638_95088[(2)] = inst_90616);

(statearr_90638_95088[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (29))){
var inst_90594 = (state_90622[(2)]);
var inst_90595 = com.wsscode.async.async_cljs.consumer_pair(inst_90594);
var state_90622__$1 = state_90622;
var statearr_90639_95089 = state_90622__$1;
(statearr_90639_95089[(2)] = inst_90595);

(statearr_90639_95089[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (6))){
var state_90622__$1 = state_90622;
var statearr_90640_95090 = state_90622__$1;
(statearr_90640_95090[(2)] = batch_QMARK_);

(statearr_90640_95090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (28))){
var inst_90602 = (state_90622[(2)]);
var state_90622__$1 = state_90622;
var statearr_90641_95092 = state_90622__$1;
(statearr_90641_95092[(2)] = inst_90602);

(statearr_90641_95092[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (25))){
var inst_90587 = (state_90622[(2)]);
var inst_90588 = com.wsscode.async.async_cljs.throw_err(inst_90587);
var state_90622__$1 = state_90622;
var statearr_90642_95095 = state_90622__$1;
(statearr_90642_95095[(2)] = inst_90588);

(statearr_90642_95095[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (34))){
var inst_90609 = cljs.core.PersistentHashMap.EMPTY;
var state_90622__$1 = state_90622;
var statearr_90643_95096 = state_90622__$1;
(statearr_90643_95096[(2)] = inst_90609);

(statearr_90643_95096[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (17))){
var inst_90579 = (state_90622[(2)]);
var state_90622__$1 = state_90622;
var statearr_90644_95097 = state_90622__$1;
(statearr_90644_95097[(2)] = inst_90579);

(statearr_90644_95097[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (3))){
var inst_90551 = (state_90622[(2)]);
var state_90622__$1 = state_90622;
var statearr_90645_95098 = state_90622__$1;
(statearr_90645_95098[(2)] = inst_90551);


cljs.core.async.impl.ioc_helpers.process_exception(state_90622__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (12))){
var inst_90560 = (state_90622[(7)]);
var inst_90567 = com.wsscode.async.async_cljs.promise_QMARK_(inst_90560);
var state_90622__$1 = state_90622;
if(cljs.core.truth_(inst_90567)){
var statearr_90646_95099 = state_90622__$1;
(statearr_90646_95099[(1)] = (15));

} else {
var statearr_90647_95100 = state_90622__$1;
(statearr_90647_95100[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (2))){
var inst_90613 = (state_90622[(10)]);
var inst_90613__$1 = (state_90622[(2)]);
var inst_90614 = (inst_90613__$1 == null);
var state_90622__$1 = (function (){var statearr_90648 = state_90622;
(statearr_90648[(10)] = inst_90613__$1);

return statearr_90648;
})();
if(cljs.core.truth_(inst_90614)){
var statearr_90649_95102 = state_90622__$1;
(statearr_90649_95102[(1)] = (36));

} else {
var statearr_90650_95103 = state_90622__$1;
(statearr_90650_95103[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (23))){
var inst_90583 = (state_90622[(9)]);
var inst_90590 = com.wsscode.async.async_cljs.promise_QMARK_(inst_90583);
var state_90622__$1 = state_90622;
if(cljs.core.truth_(inst_90590)){
var statearr_90651_95104 = state_90622__$1;
(statearr_90651_95104[(1)] = (26));

} else {
var statearr_90652_95105 = state_90622__$1;
(statearr_90652_95105[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (35))){
var inst_90611 = (state_90622[(2)]);
var state_90622__$1 = state_90622;
var statearr_90653_95106 = state_90622__$1;
(statearr_90653_95106[(2)] = inst_90611);


cljs.core.async.impl.ioc_helpers.process_exception(state_90622__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (19))){
var inst_90560 = (state_90622[(7)]);
var state_90622__$1 = state_90622;
var statearr_90654_95110 = state_90622__$1;
(statearr_90654_95110[(2)] = inst_90560);

(statearr_90654_95110[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (11))){
var inst_90560 = (state_90622[(7)]);
var state_90622__$1 = state_90622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90622__$1,(14),inst_90560);
} else {
if((state_val_90623 === (9))){
var inst_90583 = (state_90622[(9)]);
var inst_90583__$1 = com.wsscode.pathom.connect.call_resolver(env,e);
var inst_90584 = com.wsscode.async.async_cljs.chan_QMARK_(inst_90583__$1);
var state_90622__$1 = (function (){var statearr_90655 = state_90622;
(statearr_90655[(9)] = inst_90583__$1);

return statearr_90655;
})();
if(inst_90584){
var statearr_90656_95111 = state_90622__$1;
(statearr_90656_95111[(1)] = (22));

} else {
var statearr_90657_95112 = state_90622__$1;
(statearr_90657_95112[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (5))){
var state_90622__$1 = state_90622;
var statearr_90658_95113 = state_90622__$1;
(statearr_90658_95113[(2)] = processing_sequence);

(statearr_90658_95113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (14))){
var inst_90564 = (state_90622[(2)]);
var inst_90565 = com.wsscode.async.async_cljs.throw_err(inst_90564);
var state_90622__$1 = state_90622;
var statearr_90659_95114 = state_90622__$1;
(statearr_90659_95114[(2)] = inst_90565);

(statearr_90659_95114[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (26))){
var inst_90583 = (state_90622[(9)]);
var inst_90592 = com.wsscode.async.async_cljs.promise__GT_chan(inst_90583);
var state_90622__$1 = state_90622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90622__$1,(29),inst_90592);
} else {
if((state_val_90623 === (16))){
var state_90622__$1 = state_90622;
var statearr_90660_95115 = state_90622__$1;
(statearr_90660_95115[(1)] = (19));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (38))){
var inst_90620 = (state_90622[(2)]);
var state_90622__$1 = state_90622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_90622__$1,inst_90620);
} else {
if((state_val_90623 === (30))){
var inst_90583 = (state_90622[(9)]);
var state_90622__$1 = state_90622;
var statearr_90662_95116 = state_90622__$1;
(statearr_90662_95116[(2)] = inst_90583);

(statearr_90662_95116[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (10))){
var inst_90606 = (state_90622[(8)]);
var inst_90606__$1 = (state_90622[(2)]);
var state_90622__$1 = (function (){var statearr_90663 = state_90622;
(statearr_90663[(8)] = inst_90606__$1);

return statearr_90663;
})();
if(cljs.core.truth_(inst_90606__$1)){
var statearr_90664_95119 = state_90622__$1;
(statearr_90664_95119[(1)] = (33));

} else {
var statearr_90665_95121 = state_90622__$1;
(statearr_90665_95121[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (18))){
var inst_90571 = (state_90622[(2)]);
var inst_90572 = com.wsscode.async.async_cljs.consumer_pair(inst_90571);
var state_90622__$1 = state_90622;
var statearr_90666_95122 = state_90622__$1;
(statearr_90666_95122[(2)] = inst_90572);

(statearr_90666_95122[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (37))){
var inst_90613 = (state_90622[(10)]);
var inst_90618 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_90613);
var state_90622__$1 = state_90622;
var statearr_90667_95124 = state_90622__$1;
(statearr_90667_95124[(2)] = inst_90618);

(statearr_90667_95124[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90623 === (8))){
var inst_90560 = (state_90622[(7)]);
var inst_90560__$1 = com.wsscode.pathom.connect.async_read_call_batch(env,e,trace_data,input);
var inst_90561 = com.wsscode.async.async_cljs.chan_QMARK_(inst_90560__$1);
var state_90622__$1 = (function (){var statearr_90668 = state_90622;
(statearr_90668[(7)] = inst_90560__$1);

return statearr_90668;
})();
if(inst_90561){
var statearr_90669_95127 = state_90622__$1;
(statearr_90669_95127[(1)] = (11));

} else {
var statearr_90670_95129 = state_90622__$1;
(statearr_90670_95129[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47946__auto___95059,ch__53519__auto__,params,map__90547,map__90547__$1,env,map__90548,map__90548__$1,sym,batch_QMARK_,processing_sequence))
;
return ((function (switch__47663__auto__,c__47946__auto___95059,ch__53519__auto__,params,map__90547,map__90547__$1,env,map__90548,map__90548__$1,sym,batch_QMARK_,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__47664__auto____0 = (function (){
var statearr_90671 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_90671[(0)] = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__47664__auto__);

(statearr_90671[(1)] = (1));

return statearr_90671;
});
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__47664__auto____1 = (function (state_90622){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_90622);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e90672){if((e90672 instanceof Object)){
var ex__47667__auto__ = e90672;
var statearr_90673_95131 = state_90622;
(statearr_90673_95131[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_90622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90672;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95132 = state_90622;
state_90622 = G__95132;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__47664__auto__ = function(state_90622){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__47664__auto____1.call(this,state_90622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___95059,ch__53519__auto__,params,map__90547,map__90547__$1,env,map__90548,map__90548__$1,sym,batch_QMARK_,processing_sequence))
})();
var state__47948__auto__ = (function (){var statearr_90674 = f__47947__auto__();
(statearr_90674[(6)] = c__47946__auto___95059);

return statearr_90674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___95059,ch__53519__auto__,params,map__90547,map__90547__$1,env,map__90548,map__90548__$1,sym,batch_QMARK_,processing_sequence))
);


return ch__53519__auto__;
});})(params,map__90547,map__90547__$1,env,map__90548,map__90548__$1,sym,batch_QMARK_,processing_sequence))
);
});
/**
 * Works in the same way `reader2`, but supports async values (core.async channels)
 * on resolver return.
 */
com.wsscode.pathom.connect.async_reader2 = (function com$wsscode$pathom$connect$async_reader2(p__90677){
var map__90678 = p__90677;
var map__90678__$1 = (((((!((map__90678 == null))))?(((((map__90678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__90678):map__90678);
var env = map__90678__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__90678__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__90678__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var temp__5718__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__90680 = temp__5718__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90680,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__90680,(1),null);
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,vec__90680,plan,out,temp__5718__auto__,map__90678,map__90678__$1,env,indexes,max_resolver_weight){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,vec__90680,plan,out,temp__5718__auto__,map__90678,map__90678__$1,env,indexes,max_resolver_weight){
return (function (state_90956){
var state_val_90957 = (state_90956[(1)]);
if((state_val_90957 === (65))){
var inst_90845 = (state_90956[(2)]);
var inst_90846 = com.wsscode.async.async_cljs.throw_err(inst_90845);
var state_90956__$1 = state_90956;
var statearr_90958_95150 = state_90956__$1;
(statearr_90958_95150[(2)] = inst_90846);

(statearr_90958_95150[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (70))){
var inst_90841 = (state_90956[(7)]);
var state_90956__$1 = state_90956;
var statearr_90959_95151 = state_90956__$1;
(statearr_90959_95151[(2)] = inst_90841);

(statearr_90959_95151[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (62))){
var inst_90841 = (state_90956[(7)]);
var state_90956__$1 = state_90956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90956__$1,(65),inst_90841);
} else {
if((state_val_90957 === (74))){
var inst_90709 = (state_90956[(8)]);
var inst_90880 = cljs.core.seq(inst_90709);
var state_90956__$1 = state_90956;
if(inst_90880){
var statearr_90961_95160 = state_90956__$1;
(statearr_90961_95160[(1)] = (76));

} else {
var statearr_90962_95161 = state_90956__$1;
(statearr_90962_95161[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (7))){
var inst_90708 = (state_90956[(9)]);
var inst_90716 = (state_90956[(10)]);
var inst_90720 = (state_90956[(11)]);
var inst_90715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_90708,(0),null);
var inst_90716__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_90708,(1),null);
var inst_90717 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_90718 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),inst_90716__$1];
var inst_90719 = (new cljs.core.PersistentVector(null,2,(5),inst_90717,inst_90718,null));
var inst_90720__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_90719);
var inst_90722 = (inst_90720__$1 == null);
var inst_90723 = cljs.core.not(inst_90722);
var state_90956__$1 = (function (){var statearr_90963 = state_90956;
(statearr_90963[(12)] = inst_90715);

(statearr_90963[(10)] = inst_90716__$1);

(statearr_90963[(11)] = inst_90720__$1);

return statearr_90963;
})();
if(inst_90723){
var statearr_90964_95169 = state_90956__$1;
(statearr_90964_95169[(1)] = (10));

} else {
var statearr_90965_95170 = state_90956__$1;
(statearr_90965_95170[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (59))){
var inst_90701 = (state_90956[(13)]);
var inst_90709 = (state_90956[(8)]);
var inst_90831 = (state_90956[(14)]);
var inst_90702 = (state_90956[(15)]);
var inst_90838 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_90702,inst_90831);
var tmp90960 = inst_90701;
var inst_90700 = inst_90709;
var inst_90701__$1 = tmp90960;
var inst_90702__$1 = inst_90838;
var state_90956__$1 = (function (){var statearr_90966 = state_90956;
(statearr_90966[(13)] = inst_90701__$1);

(statearr_90966[(16)] = inst_90700);

(statearr_90966[(15)] = inst_90702__$1);

return statearr_90966;
})();
var statearr_90967_95174 = state_90956__$1;
(statearr_90967_95174[(2)] = null);

(statearr_90967_95174[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (86))){
var inst_90901 = (state_90956[(2)]);
var inst_90902 = com.wsscode.async.async_cljs.consumer_pair(inst_90901);
var state_90956__$1 = state_90956;
var statearr_90968_95175 = state_90956__$1;
(statearr_90968_95175[(2)] = inst_90902);

(statearr_90968_95175[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (20))){
var inst_90742 = (state_90956[(17)]);
var state_90956__$1 = state_90956;
if(cljs.core.truth_(inst_90742)){
var statearr_90969_95178 = state_90956__$1;
(statearr_90969_95178[(1)] = (22));

} else {
var statearr_90970_95179 = state_90956__$1;
(statearr_90970_95179[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (72))){
var inst_90858 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
var statearr_90971_95180 = state_90956__$1;
(statearr_90971_95180[(2)] = inst_90858);

(statearr_90971_95180[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (58))){
var inst_90915 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
var statearr_90972_95182 = state_90956__$1;
(statearr_90972_95182[(2)] = inst_90915);

(statearr_90972_95182[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (60))){
var inst_90841 = (state_90956[(7)]);
var inst_90820 = (state_90956[(18)]);
var inst_90841__$1 = com.wsscode.pathom.core.map_reader(inst_90820);
var inst_90842 = com.wsscode.async.async_cljs.chan_QMARK_(inst_90841__$1);
var state_90956__$1 = (function (){var statearr_90973 = state_90956;
(statearr_90973[(7)] = inst_90841__$1);

return statearr_90973;
})();
if(inst_90842){
var statearr_90974_95186 = state_90956__$1;
(statearr_90974_95186[(1)] = (62));

} else {
var statearr_90975_95187 = state_90956__$1;
(statearr_90975_95187[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (27))){
var inst_90780 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
var statearr_90976_95188 = state_90956__$1;
(statearr_90976_95188[(2)] = inst_90780);

(statearr_90976_95188[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (1))){
var state_90956__$1 = state_90956;
var statearr_90977_95189 = state_90956__$1;
(statearr_90977_95189[(2)] = null);

(statearr_90977_95189[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (69))){
var inst_90852 = (state_90956[(2)]);
var inst_90853 = com.wsscode.async.async_cljs.consumer_pair(inst_90852);
var state_90956__$1 = state_90956;
var statearr_90978_95190 = state_90956__$1;
(statearr_90978_95190[(2)] = inst_90853);

(statearr_90978_95190[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (24))){
var inst_90809 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
var statearr_90979_95193 = state_90956__$1;
(statearr_90979_95193[(2)] = inst_90809);

(statearr_90979_95193[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (55))){
var inst_90947 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
var statearr_90980_95194 = state_90956__$1;
(statearr_90980_95194[(2)] = inst_90947);

(statearr_90980_95194[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (85))){
var inst_90909 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
var statearr_90981_95196 = state_90956__$1;
(statearr_90981_95196[(2)] = inst_90909);

(statearr_90981_95196[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (39))){
var inst_90783 = (state_90956[(19)]);
var state_90956__$1 = state_90956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90956__$1,(42),inst_90783);
} else {
if((state_val_90957 === (88))){
var state_90956__$1 = state_90956;
var statearr_90982_95197 = state_90956__$1;
(statearr_90982_95197[(2)] = null);

(statearr_90982_95197[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (46))){
var inst_90794 = (state_90956[(2)]);
var inst_90795 = com.wsscode.async.async_cljs.consumer_pair(inst_90794);
var state_90956__$1 = state_90956;
var statearr_90983_95201 = state_90956__$1;
(statearr_90983_95201[(2)] = inst_90795);

(statearr_90983_95201[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_90956,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_90687 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_90688 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_90687);
var inst_90696 = cljs.core.seq(plan);
var inst_90697 = cljs.core.first(inst_90696);
var inst_90698 = cljs.core.next(inst_90696);
var inst_90699 = cljs.core.PersistentHashMap.EMPTY;
var inst_90700 = plan;
var inst_90701 = inst_90699;
var inst_90702 = out;
var state_90956__$1 = (function (){var statearr_90984 = state_90956;
(statearr_90984[(20)] = inst_90688);

(statearr_90984[(21)] = inst_90697);

(statearr_90984[(13)] = inst_90701);

(statearr_90984[(22)] = inst_90698);

(statearr_90984[(16)] = inst_90700);

(statearr_90984[(15)] = inst_90702);

return statearr_90984;
})();
var statearr_90985_95202 = state_90956__$1;
(statearr_90985_95202[(2)] = null);

(statearr_90985_95202[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (77))){
var state_90956__$1 = state_90956;
var statearr_90986_95204 = state_90956__$1;
(statearr_90986_95204[(2)] = null);

(statearr_90986_95204[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (95))){
var inst_90942 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
var statearr_90987_95205 = state_90956__$1;
(statearr_90987_95205[(2)] = inst_90942);

(statearr_90987_95205[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (54))){
var state_90956__$1 = state_90956;
var statearr_90988_95206 = state_90956__$1;
(statearr_90988_95206[(1)] = (90));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (92))){
var inst_90945 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
var statearr_90990_95207 = state_90956__$1;
(statearr_90990_95207[(2)] = inst_90945);

(statearr_90990_95207[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (15))){
var inst_90733 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
var statearr_90991_95210 = state_90956__$1;
(statearr_90991_95210[(2)] = inst_90733);

(statearr_90991_95210[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (48))){
var state_90956__$1 = state_90956;
var statearr_90992_95212 = state_90956__$1;
(statearr_90992_95212[(2)] = null);

(statearr_90992_95212[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (50))){
var inst_90811 = (state_90956[(23)]);
var state_90956__$1 = state_90956;
var statearr_90993_95213 = state_90956__$1;
(statearr_90993_95213[(2)] = inst_90811);

(statearr_90993_95213[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (75))){
var inst_90913 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
var statearr_90994_95214 = state_90956__$1;
(statearr_90994_95214[(2)] = inst_90913);

(statearr_90994_95214[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (21))){
var inst_90811 = (state_90956[(23)]);
var inst_90811__$1 = (state_90956[(2)]);
var state_90956__$1 = (function (){var statearr_90995 = state_90956;
(statearr_90995[(23)] = inst_90811__$1);

return statearr_90995;
})();
if(cljs.core.truth_(inst_90811__$1)){
var statearr_90996_95215 = state_90956__$1;
(statearr_90996_95215[(1)] = (50));

} else {
var statearr_90997_95216 = state_90956__$1;
(statearr_90997_95216[(1)] = (51));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (31))){
var inst_90778 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
var statearr_90998_95217 = state_90956__$1;
(statearr_90998_95217[(2)] = inst_90778);

(statearr_90998_95217[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (32))){
var inst_90770 = (state_90956[(2)]);
var inst_90771 = com.wsscode.async.async_cljs.consumer_pair(inst_90770);
var state_90956__$1 = state_90956;
var statearr_90999_95218 = state_90956__$1;
(statearr_90999_95218[(2)] = inst_90771);

(statearr_90999_95218[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (40))){
var inst_90783 = (state_90956[(19)]);
var inst_90790 = com.wsscode.async.async_cljs.promise_QMARK_(inst_90783);
var state_90956__$1 = state_90956;
if(cljs.core.truth_(inst_90790)){
var statearr_91000_95219 = state_90956__$1;
(statearr_91000_95219[(1)] = (43));

} else {
var statearr_91001_95220 = state_90956__$1;
(statearr_91001_95220[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (91))){
var state_90956__$1 = state_90956;
var statearr_91002_95221 = state_90956__$1;
(statearr_91002_95221[(2)] = null);

(statearr_91002_95221[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (56))){
var inst_90744 = (state_90956[(24)]);
var inst_90688 = (state_90956[(20)]);
var inst_90820 = (state_90956[(18)]);
var inst_90716 = (state_90956[(10)]);
var inst_90709 = (state_90956[(8)]);
var inst_90831 = com.wsscode.pathom.connect.output__GT_provides(inst_90744);
var inst_90832 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_90833 = [new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),inst_90688,inst_90716];
var inst_90834 = cljs.core.PersistentHashMap.fromArrays(inst_90832,inst_90833);
var inst_90835 = com.wsscode.pathom.trace.trace(inst_90820,inst_90834);
var inst_90836 = cljs.core.seq(inst_90709);
var state_90956__$1 = (function (){var statearr_91003 = state_90956;
(statearr_91003[(25)] = inst_90835);

(statearr_91003[(14)] = inst_90831);

return statearr_91003;
})();
if(inst_90836){
var statearr_91004_95222 = state_90956__$1;
(statearr_91004_95222[(1)] = (59));

} else {
var statearr_91005_95223 = state_90956__$1;
(statearr_91005_95223[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (33))){
var inst_90759 = (state_90956[(26)]);
var state_90956__$1 = state_90956;
var statearr_91006_95224 = state_90956__$1;
(statearr_91006_95224[(2)] = inst_90759);

(statearr_91006_95224[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (13))){
var state_90956__$1 = state_90956;
var statearr_91007_95225 = state_90956__$1;
(statearr_91007_95225[(2)] = true);

(statearr_91007_95225[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (22))){
var inst_90743 = (state_90956[(27)]);
var inst_90759 = (state_90956[(26)]);
var inst_90750 = (state_90956[(28)]);
var inst_90747 = (state_90956[(29)]);
var inst_90745 = (state_90956[(30)]);
var inst_90759__$1 = com.wsscode.pathom.connect.async_read_cache_read(inst_90745,inst_90747,inst_90750,inst_90743);
var inst_90760 = com.wsscode.async.async_cljs.chan_QMARK_(inst_90759__$1);
var state_90956__$1 = (function (){var statearr_91008 = state_90956;
(statearr_91008[(26)] = inst_90759__$1);

return statearr_91008;
})();
if(inst_90760){
var statearr_91009_95229 = state_90956__$1;
(statearr_91009_95229[(1)] = (25));

} else {
var statearr_91010_95230 = state_90956__$1;
(statearr_91010_95230[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (90))){
var inst_90817 = (state_90956[(31)]);
var inst_90816 = (state_90956[(32)]);
var inst_90922 = (state_90956[(33)]);
var inst_90918 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_90919 = [inst_90816];
var inst_90920 = cljs.core.PersistentHashMap.fromArrays(inst_90918,inst_90919);
var inst_90921 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_90920);
var inst_90922__$1 = (inst_90817.cljs$core$IFn$_invoke$arity$1 ? inst_90817.cljs$core$IFn$_invoke$arity$1(inst_90921) : inst_90817.call(null,inst_90921));
var state_90956__$1 = (function (){var statearr_91011 = state_90956;
(statearr_91011[(33)] = inst_90922__$1);

return statearr_91011;
})();
if(cljs.core.truth_(inst_90922__$1)){
var statearr_91012_95241 = state_90956__$1;
(statearr_91012_95241[(1)] = (93));

} else {
var statearr_91013_95242 = state_90956__$1;
(statearr_91013_95242[(1)] = (94));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (36))){
var inst_90783 = (state_90956[(19)]);
var inst_90747 = (state_90956[(29)]);
var inst_90745 = (state_90956[(30)]);
var inst_90783__$1 = com.wsscode.pathom.connect.call_resolver(inst_90745,inst_90747);
var inst_90784 = com.wsscode.async.async_cljs.chan_QMARK_(inst_90783__$1);
var state_90956__$1 = (function (){var statearr_91014 = state_90956;
(statearr_91014[(19)] = inst_90783__$1);

return statearr_91014;
})();
if(inst_90784){
var statearr_91015_95245 = state_90956__$1;
(statearr_91015_95245[(1)] = (39));

} else {
var statearr_91016_95246 = state_90956__$1;
(statearr_91016_95246[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (41))){
var inst_90804 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
var statearr_91017_95247 = state_90956__$1;
(statearr_91017_95247[(2)] = inst_90804);

(statearr_91017_95247[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (89))){
var inst_90907 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
var statearr_91018_95248 = state_90956__$1;
(statearr_91018_95248[(2)] = inst_90907);

(statearr_91018_95248[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (43))){
var inst_90783 = (state_90956[(19)]);
var inst_90792 = com.wsscode.async.async_cljs.promise__GT_chan(inst_90783);
var state_90956__$1 = state_90956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90956__$1,(46),inst_90792);
} else {
if((state_val_90957 === (61))){
var inst_90864 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
var statearr_91019_95256 = state_90956__$1;
(statearr_91019_95256[(2)] = inst_90864);

(statearr_91019_95256[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (29))){
var inst_90759 = (state_90956[(26)]);
var inst_90768 = com.wsscode.async.async_cljs.promise__GT_chan(inst_90759);
var state_90956__$1 = state_90956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90956__$1,(32),inst_90768);
} else {
if((state_val_90957 === (44))){
var state_90956__$1 = state_90956;
var statearr_91020_95261 = state_90956__$1;
(statearr_91020_95261[(1)] = (47));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (93))){
var inst_90922 = (state_90956[(33)]);
var inst_90927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_90922,(0),null);
var inst_90928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_90922,(1),null);
var inst_90929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_90922,(2),null);
var inst_90700 = inst_90927;
var inst_90701 = inst_90928;
var inst_90702 = inst_90929;
var state_90956__$1 = (function (){var statearr_91022 = state_90956;
(statearr_91022[(13)] = inst_90701);

(statearr_91022[(16)] = inst_90700);

(statearr_91022[(15)] = inst_90702);

return statearr_91022;
})();
var statearr_91023_95266 = state_90956__$1;
(statearr_91023_95266[(2)] = null);

(statearr_91023_95266[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (6))){
var inst_90952 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
var statearr_91024_95267 = state_90956__$1;
(statearr_91024_95267[(2)] = inst_90952);


cljs.core.async.impl.ioc_helpers.process_exception(state_90956__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (28))){
var inst_90763 = (state_90956[(2)]);
var inst_90764 = com.wsscode.async.async_cljs.throw_err(inst_90763);
var state_90956__$1 = state_90956;
var statearr_91025_95270 = state_90956__$1;
(statearr_91025_95270[(2)] = inst_90764);

(statearr_91025_95270[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (64))){
var inst_90862 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
var statearr_91026_95272 = state_90956__$1;
(statearr_91026_95272[(2)] = inst_90862);

(statearr_91026_95272[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (51))){
var inst_90814 = cljs.core.PersistentHashMap.EMPTY;
var state_90956__$1 = state_90956;
var statearr_91027_95273 = state_90956__$1;
(statearr_91027_95273[(2)] = inst_90814);

(statearr_91027_95273[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (25))){
var inst_90759 = (state_90956[(26)]);
var state_90956__$1 = state_90956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90956__$1,(28),inst_90759);
} else {
if((state_val_90957 === (34))){
var state_90956__$1 = state_90956;
var statearr_91028_95276 = state_90956__$1;
(statearr_91028_95276[(2)] = null);

(statearr_91028_95276[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (17))){
var inst_90720 = (state_90956[(11)]);
var state_90956__$1 = state_90956;
var statearr_91029_95278 = state_90956__$1;
(statearr_91029_95278[(2)] = inst_90720);

(statearr_91029_95278[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (3))){
var inst_90683 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
var statearr_91030_95279 = state_90956__$1;
(statearr_91030_95279[(2)] = inst_90683);


cljs.core.async.impl.ioc_helpers.process_exception(state_90956__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (12))){
var inst_90736 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
if(cljs.core.truth_(inst_90736)){
var statearr_91031_95280 = state_90956__$1;
(statearr_91031_95280[(1)] = (16));

} else {
var statearr_91032_95281 = state_90956__$1;
(statearr_91032_95281[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (2))){
var inst_90954 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_90956__$1,inst_90954);
} else {
if((state_val_90957 === (66))){
var inst_90841 = (state_90956[(7)]);
var inst_90850 = com.wsscode.async.async_cljs.promise__GT_chan(inst_90841);
var state_90956__$1 = state_90956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90956__$1,(69),inst_90850);
} else {
if((state_val_90957 === (23))){
var state_90956__$1 = state_90956;
var statearr_91033_95285 = state_90956__$1;
(statearr_91033_95285[(1)] = (36));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (47))){
var inst_90783 = (state_90956[(19)]);
var state_90956__$1 = state_90956;
var statearr_91035_95286 = state_90956__$1;
(statearr_91035_95286[(2)] = inst_90783);

(statearr_91035_95286[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (35))){
var inst_90776 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
var statearr_91036_95287 = state_90956__$1;
(statearr_91036_95287[(2)] = inst_90776);

(statearr_91036_95287[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (82))){
var inst_90894 = (state_90956[(2)]);
var inst_90895 = com.wsscode.async.async_cljs.throw_err(inst_90894);
var state_90956__$1 = state_90956;
var statearr_91037_95288 = state_90956__$1;
(statearr_91037_95288[(2)] = inst_90895);

(statearr_91037_95288[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (76))){
var inst_90821 = (state_90956[(34)]);
var inst_90715 = (state_90956[(12)]);
var inst_90882 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_90883 = [inst_90821,inst_90715];
var inst_90884 = cljs.core.PersistentHashMap.fromArrays(inst_90882,inst_90883);
var inst_90885 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_90884);
var inst_90886 = (function(){throw inst_90885})();
var state_90956__$1 = state_90956;
var statearr_91038_95290 = state_90956__$1;
(statearr_91038_95290[(2)] = inst_90886);

(statearr_91038_95290[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (19))){
var inst_90688 = (state_90956[(20)]);
var inst_90746 = (state_90956[(35)]);
var inst_90753 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_90754 = [inst_90688];
var inst_90755 = (new cljs.core.PersistentVector(null,1,(5),inst_90753,inst_90754,null));
var inst_90756 = cljs.core.select_keys(inst_90746,inst_90755);
var state_90956__$1 = state_90956;
var statearr_91039_95294 = state_90956__$1;
(statearr_91039_95294[(2)] = inst_90756);

(statearr_91039_95294[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (57))){
var inst_90821 = (state_90956[(34)]);
var inst_90817 = (state_90956[(31)]);
var inst_90715 = (state_90956[(12)]);
var inst_90870 = (state_90956[(36)]);
var inst_90866 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_90867 = [inst_90821,inst_90715];
var inst_90868 = cljs.core.PersistentHashMap.fromArrays(inst_90866,inst_90867);
var inst_90869 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_90868);
var inst_90870__$1 = (inst_90817.cljs$core$IFn$_invoke$arity$1 ? inst_90817.cljs$core$IFn$_invoke$arity$1(inst_90869) : inst_90817.call(null,inst_90869));
var state_90956__$1 = (function (){var statearr_91040 = state_90956;
(statearr_91040[(36)] = inst_90870__$1);

return statearr_91040;
})();
if(cljs.core.truth_(inst_90870__$1)){
var statearr_91041_95295 = state_90956__$1;
(statearr_91041_95295[(1)] = (73));

} else {
var statearr_91042_95296 = state_90956__$1;
(statearr_91042_95296[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (68))){
var inst_90860 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
var statearr_91043_95297 = state_90956__$1;
(statearr_91043_95297[(2)] = inst_90860);

(statearr_91043_95297[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (11))){
var state_90956__$1 = state_90956;
var statearr_91044_95299 = state_90956__$1;
(statearr_91044_95299[(2)] = false);

(statearr_91044_95299[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (9))){
var inst_90950 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
var statearr_91045_95300 = state_90956__$1;
(statearr_91045_95300[(2)] = inst_90950);

(statearr_91045_95300[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (5))){
var inst_90708 = (state_90956[(9)]);
var inst_90700 = (state_90956[(16)]);
var inst_90707 = cljs.core.seq(inst_90700);
var inst_90708__$1 = cljs.core.first(inst_90707);
var inst_90709 = cljs.core.next(inst_90707);
var state_90956__$1 = (function (){var statearr_91046 = state_90956;
(statearr_91046[(9)] = inst_90708__$1);

(statearr_91046[(8)] = inst_90709);

return statearr_91046;
})();
if(cljs.core.truth_(inst_90708__$1)){
var statearr_91047_95301 = state_90956__$1;
(statearr_91047_95301[(1)] = (7));

} else {
var statearr_91048_95302 = state_90956__$1;
(statearr_91048_95302[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (83))){
var inst_90890 = (state_90956[(37)]);
var inst_90899 = com.wsscode.async.async_cljs.promise__GT_chan(inst_90890);
var state_90956__$1 = state_90956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90956__$1,(86),inst_90899);
} else {
if((state_val_90957 === (14))){
var state_90956__$1 = state_90956;
var statearr_91049_95303 = state_90956__$1;
(statearr_91049_95303[(2)] = false);

(statearr_91049_95303[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (45))){
var inst_90802 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
var statearr_91050_95304 = state_90956__$1;
(statearr_91050_95304[(2)] = inst_90802);

(statearr_91050_95304[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (53))){
var inst_90743 = (state_90956[(27)]);
var inst_90821 = (state_90956[(34)]);
var inst_90744 = (state_90956[(24)]);
var inst_90708 = (state_90956[(9)]);
var inst_90817 = (state_90956[(31)]);
var inst_90688 = (state_90956[(20)]);
var inst_90746 = (state_90956[(35)]);
var inst_90697 = (state_90956[(21)]);
var inst_90820 = (state_90956[(18)]);
var inst_90816 = (state_90956[(32)]);
var inst_90715 = (state_90956[(12)]);
var inst_90741 = (state_90956[(38)]);
var inst_90701 = (state_90956[(13)]);
var inst_90742 = (state_90956[(17)]);
var inst_90716 = (state_90956[(10)]);
var inst_90750 = (state_90956[(28)]);
var inst_90698 = (state_90956[(22)]);
var inst_90747 = (state_90956[(29)]);
var inst_90700 = (state_90956[(16)]);
var inst_90709 = (state_90956[(8)]);
var inst_90745 = (state_90956[(30)]);
var inst_90702 = (state_90956[(15)]);
var inst_90820__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_90816,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),inst_90745);
var inst_90821__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_90816,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_90822 = (function (){var input = inst_90743;
var vec__90693 = plan;
var step = inst_90708;
var entity = inst_90746;
var seq__90705 = inst_90709;
var key_SINGLEQUOTE_ = inst_90715;
var map__90714 = inst_90741;
var seq__90694 = inst_90698;
var response = inst_90821__$1;
var vec__90704 = inst_90700;
var cache_QMARK_ = inst_90742;
var out_left = inst_90702;
var key = inst_90688;
var G__90692 = inst_90700;
var failed_resolvers = inst_90701;
var first__90695 = inst_90697;
var vec__90711 = inst_90708;
var output = inst_90744;
var env__$1 = inst_90745;
var e = inst_90747;
var resolver_sym = inst_90716;
var trace_data = inst_90750;
var resolver = inst_90741;
var replan = inst_90817;
var env_SINGLEQUOTE_ = inst_90820__$1;
var tail = inst_90709;
var first__90706 = inst_90708;
return ((function (input,vec__90693,step,entity,seq__90705,key_SINGLEQUOTE_,map__90714,seq__90694,response,vec__90704,cache_QMARK_,out_left,key,G__90692,failed_resolvers,first__90695,vec__90711,output,env__$1,e,resolver_sym,trace_data,resolver,replan,env_SINGLEQUOTE_,tail,first__90706,inst_90743,inst_90821,inst_90744,inst_90708,inst_90817,inst_90688,inst_90746,inst_90697,inst_90820,inst_90816,inst_90715,inst_90741,inst_90701,inst_90742,inst_90716,inst_90750,inst_90698,inst_90747,inst_90700,inst_90709,inst_90745,inst_90702,inst_90820__$1,inst_90821__$1,state_val_90957,c__47946__auto__,vec__90680,plan,out,temp__5718__auto__,map__90678,map__90678__$1,env,indexes,max_resolver_weight){
return (function (p1__90676_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__90676_SHARP_], 0));
});
;})(input,vec__90693,step,entity,seq__90705,key_SINGLEQUOTE_,map__90714,seq__90694,response,vec__90704,cache_QMARK_,out_left,key,G__90692,failed_resolvers,first__90695,vec__90711,output,env__$1,e,resolver_sym,trace_data,resolver,replan,env_SINGLEQUOTE_,tail,first__90706,inst_90743,inst_90821,inst_90744,inst_90708,inst_90817,inst_90688,inst_90746,inst_90697,inst_90820,inst_90816,inst_90715,inst_90741,inst_90701,inst_90742,inst_90716,inst_90750,inst_90698,inst_90747,inst_90700,inst_90709,inst_90745,inst_90702,inst_90820__$1,inst_90821__$1,state_val_90957,c__47946__auto__,vec__90680,plan,out,temp__5718__auto__,map__90678,map__90678__$1,env,indexes,max_resolver_weight))
})();
var inst_90823 = com.wsscode.pathom.core.swap_entity_BANG_(inst_90820__$1,inst_90822);
var inst_90825 = cljs.core.contains_QMARK_(inst_90821__$1,inst_90715);
var inst_90826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_90821__$1,inst_90715);
var inst_90827 = (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(inst_90826) : com.wsscode.pathom.core.break_values.call(null,inst_90826));
var inst_90828 = cljs.core.not(inst_90827);
var inst_90829 = ((inst_90825) && (inst_90828));
var state_90956__$1 = (function (){var statearr_91051 = state_90956;
(statearr_91051[(34)] = inst_90821__$1);

(statearr_91051[(39)] = inst_90823);

(statearr_91051[(18)] = inst_90820__$1);

return statearr_91051;
})();
if(cljs.core.truth_(inst_90829)){
var statearr_91052_95306 = state_90956__$1;
(statearr_91052_95306[(1)] = (56));

} else {
var statearr_91053_95307 = state_90956__$1;
(statearr_91053_95307[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (78))){
var inst_90820 = (state_90956[(18)]);
var inst_90890 = (state_90956[(37)]);
var inst_90889 = (state_90956[(2)]);
var inst_90890__$1 = com.wsscode.pathom.core.map_reader(inst_90820);
var inst_90891 = com.wsscode.async.async_cljs.chan_QMARK_(inst_90890__$1);
var state_90956__$1 = (function (){var statearr_91054 = state_90956;
(statearr_91054[(40)] = inst_90889);

(statearr_91054[(37)] = inst_90890__$1);

return statearr_91054;
})();
if(inst_90891){
var statearr_91055_95308 = state_90956__$1;
(statearr_91055_95308[(1)] = (79));

} else {
var statearr_91056_95309 = state_90956__$1;
(statearr_91056_95309[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (26))){
var inst_90759 = (state_90956[(26)]);
var inst_90766 = com.wsscode.async.async_cljs.promise_QMARK_(inst_90759);
var state_90956__$1 = state_90956;
if(cljs.core.truth_(inst_90766)){
var statearr_91057_95310 = state_90956__$1;
(statearr_91057_95310[(1)] = (29));

} else {
var statearr_91058_95311 = state_90956__$1;
(statearr_91058_95311[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (16))){
var inst_90720 = (state_90956[(11)]);
var inst_90738 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_90720);
var state_90956__$1 = state_90956;
var statearr_91059_95312 = state_90956__$1;
(statearr_91059_95312[(2)] = inst_90738);

(statearr_91059_95312[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (81))){
var inst_90911 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
var statearr_91060_95313 = state_90956__$1;
(statearr_91060_95313[(2)] = inst_90911);

(statearr_91060_95313[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (79))){
var inst_90890 = (state_90956[(37)]);
var state_90956__$1 = state_90956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_90956__$1,(82),inst_90890);
} else {
if((state_val_90957 === (38))){
var inst_90807 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
var statearr_91061_95314 = state_90956__$1;
(statearr_91061_95314[(2)] = inst_90807);

(statearr_91061_95314[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (87))){
var inst_90890 = (state_90956[(37)]);
var state_90956__$1 = state_90956;
var statearr_91062_95315 = state_90956__$1;
(statearr_91062_95315[(2)] = inst_90890);

(statearr_91062_95315[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (30))){
var state_90956__$1 = state_90956;
var statearr_91063_95316 = state_90956__$1;
(statearr_91063_95316[(1)] = (33));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (73))){
var inst_90870 = (state_90956[(36)]);
var inst_90875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_90870,(0),null);
var inst_90876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_90870,(1),null);
var inst_90877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_90870,(2),null);
var inst_90700 = inst_90875;
var inst_90701 = inst_90876;
var inst_90702 = inst_90877;
var state_90956__$1 = (function (){var statearr_91065 = state_90956;
(statearr_91065[(13)] = inst_90701);

(statearr_91065[(16)] = inst_90700);

(statearr_91065[(15)] = inst_90702);

return statearr_91065;
})();
var statearr_91066_95317 = state_90956__$1;
(statearr_91066_95317[(2)] = null);

(statearr_91066_95317[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (10))){
var inst_90720 = (state_90956[(11)]);
var inst_90725 = inst_90720.cljs$lang$protocol_mask$partition0$;
var inst_90726 = (inst_90725 & (64));
var inst_90727 = inst_90720.cljs$core$ISeq$;
var inst_90728 = (cljs.core.PROTOCOL_SENTINEL === inst_90727);
var inst_90729 = ((inst_90726) || (inst_90728));
var state_90956__$1 = state_90956;
if(cljs.core.truth_(inst_90729)){
var statearr_91067_95318 = state_90956__$1;
(statearr_91067_95318[(1)] = (13));

} else {
var statearr_91068_95319 = state_90956__$1;
(statearr_91068_95319[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (18))){
var inst_90743 = (state_90956[(27)]);
var inst_90688 = (state_90956[(20)]);
var inst_90746 = (state_90956[(35)]);
var inst_90715 = (state_90956[(12)]);
var inst_90741 = (state_90956[(38)]);
var inst_90716 = (state_90956[(10)]);
var inst_90747 = (state_90956[(29)]);
var inst_90745 = (state_90956[(30)]);
var inst_90741__$1 = (state_90956[(2)]);
var inst_90742 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_90741__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_90743__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_90741__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_90744 = com.wsscode.pathom.connect.resolver__GT_output(env,inst_90716);
var inst_90745__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_90741__$1);
var inst_90746__$1 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_90745__$1);
var inst_90747__$1 = cljs.core.select_keys(inst_90746__$1,inst_90743__$1);
var inst_90748 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_90749 = [inst_90688,inst_90716,inst_90747__$1];
var inst_90750 = cljs.core.PersistentHashMap.fromArrays(inst_90748,inst_90749);
var inst_90751 = cljs.core.contains_QMARK_(inst_90746__$1,inst_90715);
var state_90956__$1 = (function (){var statearr_91069 = state_90956;
(statearr_91069[(27)] = inst_90743__$1);

(statearr_91069[(24)] = inst_90744);

(statearr_91069[(35)] = inst_90746__$1);

(statearr_91069[(38)] = inst_90741__$1);

(statearr_91069[(17)] = inst_90742);

(statearr_91069[(28)] = inst_90750);

(statearr_91069[(29)] = inst_90747__$1);

(statearr_91069[(30)] = inst_90745__$1);

return statearr_91069;
})();
if(inst_90751){
var statearr_91070_95320 = state_90956__$1;
(statearr_91070_95320[(1)] = (19));

} else {
var statearr_91071_95321 = state_90956__$1;
(statearr_91071_95321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (52))){
var inst_90743 = (state_90956[(27)]);
var inst_90744 = (state_90956[(24)]);
var inst_90708 = (state_90956[(9)]);
var inst_90688 = (state_90956[(20)]);
var inst_90746 = (state_90956[(35)]);
var inst_90697 = (state_90956[(21)]);
var inst_90816 = (state_90956[(32)]);
var inst_90715 = (state_90956[(12)]);
var inst_90741 = (state_90956[(38)]);
var inst_90701 = (state_90956[(13)]);
var inst_90742 = (state_90956[(17)]);
var inst_90716 = (state_90956[(10)]);
var inst_90750 = (state_90956[(28)]);
var inst_90698 = (state_90956[(22)]);
var inst_90747 = (state_90956[(29)]);
var inst_90700 = (state_90956[(16)]);
var inst_90709 = (state_90956[(8)]);
var inst_90745 = (state_90956[(30)]);
var inst_90702 = (state_90956[(15)]);
var inst_90816__$1 = (state_90956[(2)]);
var inst_90817 = (function (){var input = inst_90743;
var vec__90693 = plan;
var step = inst_90708;
var entity = inst_90746;
var seq__90705 = inst_90709;
var key_SINGLEQUOTE_ = inst_90715;
var map__90714 = inst_90741;
var seq__90694 = inst_90698;
var response = inst_90816__$1;
var vec__90704 = inst_90700;
var cache_QMARK_ = inst_90742;
var out_left = inst_90702;
var key = inst_90688;
var G__90692 = inst_90700;
var failed_resolvers = inst_90701;
var first__90695 = inst_90697;
var vec__90711 = inst_90708;
var output = inst_90744;
var env__$1 = inst_90745;
var e = inst_90747;
var resolver_sym = inst_90716;
var trace_data = inst_90750;
var resolver = inst_90741;
var tail = inst_90709;
var first__90706 = inst_90708;
return ((function (input,vec__90693,step,entity,seq__90705,key_SINGLEQUOTE_,map__90714,seq__90694,response,vec__90704,cache_QMARK_,out_left,key,G__90692,failed_resolvers,first__90695,vec__90711,output,env__$1,e,resolver_sym,trace_data,resolver,tail,first__90706,inst_90743,inst_90744,inst_90708,inst_90688,inst_90746,inst_90697,inst_90816,inst_90715,inst_90741,inst_90701,inst_90742,inst_90716,inst_90750,inst_90698,inst_90747,inst_90700,inst_90709,inst_90745,inst_90702,inst_90816__$1,state_val_90957,c__47946__auto__,vec__90680,plan,out,temp__5718__auto__,map__90678,map__90678__$1,env,indexes,max_resolver_weight){
return (function (error){
var failed_resolvers__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers,resolver_sym,error);
com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$1,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (failed_resolvers__$1,input,vec__90693,step,entity,seq__90705,key_SINGLEQUOTE_,map__90714,seq__90694,response,vec__90704,cache_QMARK_,out_left,key,G__90692,failed_resolvers,first__90695,vec__90711,output,env__$1,e,resolver_sym,trace_data,resolver,tail,first__90706,inst_90743,inst_90744,inst_90708,inst_90688,inst_90746,inst_90697,inst_90816,inst_90715,inst_90741,inst_90701,inst_90742,inst_90716,inst_90750,inst_90698,inst_90747,inst_90700,inst_90709,inst_90745,inst_90702,inst_90816__$1,state_val_90957,c__47946__auto__,vec__90680,plan,out,temp__5718__auto__,map__90678,map__90678__$1,env,indexes,max_resolver_weight){
return (function (p1__90675_SHARP_){
var x__4222__auto__ = ((function (){var or__4131__auto__ = p1__90675_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() * (2));
var y__4223__auto__ = max_resolver_weight;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});})(failed_resolvers__$1,input,vec__90693,step,entity,seq__90705,key_SINGLEQUOTE_,map__90714,seq__90694,response,vec__90704,cache_QMARK_,out_left,key,G__90692,failed_resolvers,first__90695,vec__90711,output,env__$1,e,resolver_sym,trace_data,resolver,tail,first__90706,inst_90743,inst_90744,inst_90708,inst_90688,inst_90746,inst_90697,inst_90816,inst_90715,inst_90741,inst_90701,inst_90742,inst_90716,inst_90750,inst_90698,inst_90747,inst_90700,inst_90709,inst_90745,inst_90702,inst_90816__$1,state_val_90957,c__47946__auto__,vec__90680,plan,out,temp__5718__auto__,map__90678,map__90678__$1,env,indexes,max_resolver_weight))
], 0));

var temp__5718__auto____$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$1,failed_resolvers__$1);
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__91072 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91072,(0),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91072,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan__$1,failed_resolvers__$1,out_SINGLEQUOTE_], null);
} else {
return null;
}
});
;})(input,vec__90693,step,entity,seq__90705,key_SINGLEQUOTE_,map__90714,seq__90694,response,vec__90704,cache_QMARK_,out_left,key,G__90692,failed_resolvers,first__90695,vec__90711,output,env__$1,e,resolver_sym,trace_data,resolver,tail,first__90706,inst_90743,inst_90744,inst_90708,inst_90688,inst_90746,inst_90697,inst_90816,inst_90715,inst_90741,inst_90701,inst_90742,inst_90716,inst_90750,inst_90698,inst_90747,inst_90700,inst_90709,inst_90745,inst_90702,inst_90816__$1,state_val_90957,c__47946__auto__,vec__90680,plan,out,temp__5718__auto__,map__90678,map__90678__$1,env,indexes,max_resolver_weight))
})();
var inst_90818 = cljs.core.map_QMARK_(inst_90816__$1);
var state_90956__$1 = (function (){var statearr_91075 = state_90956;
(statearr_91075[(31)] = inst_90817);

(statearr_91075[(32)] = inst_90816__$1);

return statearr_91075;
})();
if(inst_90818){
var statearr_91076_95322 = state_90956__$1;
(statearr_91076_95322[(1)] = (53));

} else {
var statearr_91077_95323 = state_90956__$1;
(statearr_91077_95323[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (67))){
var state_90956__$1 = state_90956;
var statearr_91078_95326 = state_90956__$1;
(statearr_91078_95326[(1)] = (70));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (71))){
var state_90956__$1 = state_90956;
var statearr_91080_95328 = state_90956__$1;
(statearr_91080_95328[(2)] = null);

(statearr_91080_95328[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (42))){
var inst_90787 = (state_90956[(2)]);
var inst_90788 = com.wsscode.async.async_cljs.throw_err(inst_90787);
var state_90956__$1 = state_90956;
var statearr_91081_95331 = state_90956__$1;
(statearr_91081_95331[(2)] = inst_90788);

(statearr_91081_95331[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (80))){
var inst_90890 = (state_90956[(37)]);
var inst_90897 = com.wsscode.async.async_cljs.promise_QMARK_(inst_90890);
var state_90956__$1 = state_90956;
if(cljs.core.truth_(inst_90897)){
var statearr_91082_95332 = state_90956__$1;
(statearr_91082_95332[(1)] = (83));

} else {
var statearr_91083_95333 = state_90956__$1;
(statearr_91083_95333[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (37))){
var state_90956__$1 = state_90956;
var statearr_91084_95334 = state_90956__$1;
(statearr_91084_95334[(2)] = null);

(statearr_91084_95334[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (63))){
var inst_90841 = (state_90956[(7)]);
var inst_90848 = com.wsscode.async.async_cljs.promise_QMARK_(inst_90841);
var state_90956__$1 = state_90956;
if(cljs.core.truth_(inst_90848)){
var statearr_91085_95335 = state_90956__$1;
(statearr_91085_95335[(1)] = (66));

} else {
var statearr_91086_95336 = state_90956__$1;
(statearr_91086_95336[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (94))){
var inst_90688 = (state_90956[(20)]);
var inst_90816 = (state_90956[(32)]);
var inst_90716 = (state_90956[(10)]);
var inst_90745 = (state_90956[(30)]);
var inst_90932 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_90933 = [new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),inst_90688,inst_90716,inst_90816];
var inst_90934 = cljs.core.PersistentHashMap.fromArrays(inst_90932,inst_90933);
var inst_90935 = com.wsscode.pathom.trace.trace(inst_90745,inst_90934);
var inst_90936 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_90937 = [inst_90816];
var inst_90938 = cljs.core.PersistentHashMap.fromArrays(inst_90936,inst_90937);
var inst_90939 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_90938);
var inst_90940 = (function(){throw inst_90939})();
var state_90956__$1 = (function (){var statearr_91087 = state_90956;
(statearr_91087[(41)] = inst_90935);

return statearr_91087;
})();
var statearr_91088_95341 = state_90956__$1;
(statearr_91088_95341[(2)] = inst_90940);

(statearr_91088_95341[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (8))){
var state_90956__$1 = state_90956;
var statearr_91089_95344 = state_90956__$1;
(statearr_91089_95344[(2)] = null);

(statearr_91089_95344[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (49))){
var inst_90800 = (state_90956[(2)]);
var state_90956__$1 = state_90956;
var statearr_91090_95346 = state_90956__$1;
(statearr_91090_95346[(2)] = inst_90800);

(statearr_91090_95346[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90957 === (84))){
var state_90956__$1 = state_90956;
var statearr_91091_95357 = state_90956__$1;
(statearr_91091_95357[(1)] = (87));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47946__auto__,vec__90680,plan,out,temp__5718__auto__,map__90678,map__90678__$1,env,indexes,max_resolver_weight))
;
return ((function (switch__47663__auto__,c__47946__auto__,vec__90680,plan,out,temp__5718__auto__,map__90678,map__90678__$1,env,indexes,max_resolver_weight){
return (function() {
var com$wsscode$pathom$connect$async_reader2_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$async_reader2_$_state_machine__47664__auto____0 = (function (){
var statearr_91093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_91093[(0)] = com$wsscode$pathom$connect$async_reader2_$_state_machine__47664__auto__);

(statearr_91093[(1)] = (1));

return statearr_91093;
});
var com$wsscode$pathom$connect$async_reader2_$_state_machine__47664__auto____1 = (function (state_90956){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_90956);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e91094){if((e91094 instanceof Object)){
var ex__47667__auto__ = e91094;
var statearr_91095_95365 = state_90956;
(statearr_91095_95365[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_90956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91094;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95366 = state_90956;
state_90956 = G__95366;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader2_$_state_machine__47664__auto__ = function(state_90956){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader2_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader2_$_state_machine__47664__auto____1.call(this,state_90956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader2_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader2_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$async_reader2_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader2_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$async_reader2_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,vec__90680,plan,out,temp__5718__auto__,map__90678,map__90678__$1,env,indexes,max_resolver_weight))
})();
var state__47948__auto__ = (function (){var statearr_91096 = f__47947__auto__();
(statearr_91096[(6)] = c__47946__auto__);

return statearr_91096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,vec__90680,plan,out,temp__5718__auto__,map__90678,map__90678__$1,env,indexes,max_resolver_weight))
);

return c__47946__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.reader3_node_log_BANG_ = (function com$wsscode$pathom$connect$reader3_node_log_BANG_(p__91097,p__91098,event){
var map__91099 = p__91097;
var map__91099__$1 = (((((!((map__91099 == null))))?(((((map__91099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91099):map__91099);
var env = map__91099__$1;
var run_plan_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91099__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","run-plan*","com.wsscode.pathom.connect/run-plan*",-2140918000));
var map__91100 = p__91098;
var map__91100__$1 = (((((!((map__91100 == null))))?(((((map__91100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91100):map__91100);
var node_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91100__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","node-id","com.wsscode.pathom.connect.planner/node-id",1016027450));
if(cljs.core.truth_(run_plan_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(run_plan_STAR_,com.wsscode.pathom.connect.planner.add_node_log,node_id,event);
} else {
}

return env;
});
com.wsscode.pathom.connect.reader3_run_next_node = (function com$wsscode$pathom$connect$reader3_run_next_node(env,plan,p__91103){
var map__91104 = p__91103;
var map__91104__$1 = (((((!((map__91104 == null))))?(((((map__91104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91104):map__91104);
var run_next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91104__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-next","com.wsscode.pathom.connect.planner/run-next",932482163));
if(cljs.core.truth_(run_next)){
var G__91106 = env;
var G__91107 = plan;
var G__91108 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,run_next);
return (com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(G__91106,G__91107,G__91108) : com.wsscode.pathom.connect.reader3_run_node.call(null,G__91106,G__91107,G__91108));
} else {
return null;
}
});
com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_ = (function com$wsscode$pathom$connect$reader3_all_requires_ready_QMARK_(env,p__91110){
var map__91111 = p__91110;
var map__91111__$1 = (((((!((map__91111 == null))))?(((((map__91111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91111):map__91111);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91111__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","requires","com.wsscode.pathom.connect.planner/requires",-2118404289));
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
return cljs.core.every_QMARK_(((function (entity,map__91111,map__91111__$1,requires){
return (function (p1__91109_SHARP_){
return cljs.core.contains_QMARK_(entity,p1__91109_SHARP_);
});})(entity,map__91111,map__91111__$1,requires))
,cljs.core.keys(requires));
});
com.wsscode.pathom.connect.reader3_report_invalid_response = (function com$wsscode$pathom$connect$reader3_report_invalid_response(env,sym,response){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response], null));

return null;
});
com.wsscode.pathom.connect.reader3_merge_resolver_response = (function com$wsscode$pathom$connect$reader3_merge_resolver_response(env,sym,response){
if(cljs.core.map_QMARK_(response)){
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),env);
var response__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
return com.wsscode.pathom.core.swap_entity_BANG_(env_SINGLEQUOTE_,((function (env_SINGLEQUOTE_,response__$1){
return (function (p1__91113_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$1,p1__91113_SHARP_], 0));
});})(env_SINGLEQUOTE_,response__$1))
);
} else {
return com.wsscode.pathom.connect.reader3_report_invalid_response(env,sym,response);
}
});
/**
 * Call a run graph node resolver and execute it.
 */
com.wsscode.pathom.connect.reader3_run_resolver_node = (function com$wsscode$pathom$connect$reader3_run_resolver_node(p__91114,plan,p__91115){
var map__91116 = p__91114;
var map__91116__$1 = (((((!((map__91116 == null))))?(((((map__91116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91116):map__91116);
var env = map__91116__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91116__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var async_parser_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91116__$1,new cljs.core.Keyword("com.wsscode.pathom.core","async-parser?","com.wsscode.pathom.core/async-parser?",920199905));
var map__91117 = p__91115;
var map__91117__$1 = (((((!((map__91117 == null))))?(((((map__91117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91117):map__91117);
var node = map__91117__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91117__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91117__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","input","com.wsscode.pathom.connect.planner/input",713704915));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91117__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","params","com.wsscode.pathom.connect.planner/params",600636577));
if(com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_(env,node)){
com.wsscode.pathom.connect.reader3_node_log_BANG_(env,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","skip-node-requires-ready","com.wsscode.pathom.connect/skip-node-requires-ready",-1999300692)], null));

return com.wsscode.pathom.connect.reader3_run_next_node(env,plan,node);
} else {
var input_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(input));
var map__91120 = (function (){var G__91121 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),sym], null));
if(cljs.core.seq(input)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__91121,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),input_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect.planner","input","com.wsscode.pathom.connect.planner/input",713704915),input], 0));
} else {
return G__91121;
}
})();
var map__91120__$1 = (((((!((map__91120 == null))))?(((((map__91120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91120):map__91120);
var resolver = map__91120__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__91120__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var env__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect.planner","node","com.wsscode.pathom.connect.planner/node",754110552),node], 0)),new cljs.core.Keyword(null,"ast","ast",-860334068),cljs.core.assoc,new cljs.core.Keyword(null,"params","params",710516235),params);
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env__$1);
var e = cljs.core.select_keys(entity,input_SINGLEQUOTE_);
var trace_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),e], null);
var response = (cljs.core.truth_(cache_QMARK_)?(cljs.core.truth_(async_parser_QMARK_)?com.wsscode.pathom.connect.async_read_cache_read(env__$1,e,trace_data,input_SINGLEQUOTE_):(function (){try{var r = com.wsscode.pathom.connect.serial_cache_resolver_call(env__$1,e);
com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-success","com.wsscode.pathom.connect/node-resolver-success",1463092150),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),e,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-response","com.wsscode.pathom.connect/resolver-response",480860817),r], null));

return r;
}catch (e91123){var err = e91123;
com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-error","com.wsscode.pathom.connect/node-resolver-error",-305161287),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),e,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416),err], null));

throw err;
}})()):(function (){try{var r = com.wsscode.pathom.connect.call_resolver(env__$1,e);
com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-success","com.wsscode.pathom.connect/node-resolver-success",1463092150),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),e,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-response","com.wsscode.pathom.connect/resolver-response",480860817),r], null));

return r;
}catch (e91124){var err = e91124;
com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-error","com.wsscode.pathom.connect/node-resolver-error",-305161287),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),e,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416),err], null));

throw err;
}})());
if(cljs.core.truth_(async_parser_QMARK_)){
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___95407 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___95407,ch__53519__auto__,input_SINGLEQUOTE_,map__91120,map__91120__$1,resolver,cache_QMARK_,env__$1,entity,e,trace_data,response,map__91116,map__91116__$1,env,indexes,async_parser_QMARK_,map__91117,map__91117__$1,node,sym,input,params){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___95407,ch__53519__auto__,input_SINGLEQUOTE_,map__91120,map__91120__$1,resolver,cache_QMARK_,env__$1,entity,e,trace_data,response,map__91116,map__91116__$1,env,indexes,async_parser_QMARK_,map__91117,map__91117__$1,node,sym,input,params){
return (function (state_91202){
var state_val_91203 = (state_91202[(1)]);
if((state_val_91203 === (7))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_91202,(6),new cljs.core.Keyword(null,"default","default",-1987822328),null,(5));
var inst_91138 = com.wsscode.async.async_cljs.chan_QMARK_(response);
var state_91202__$1 = state_91202;
if(inst_91138){
var statearr_91204_95410 = state_91202__$1;
(statearr_91204_95410[(1)] = (8));

} else {
var statearr_91205_95411 = state_91202__$1;
(statearr_91205_95411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (20))){
var state_91202__$1 = state_91202;
var statearr_91206_95412 = state_91202__$1;
(statearr_91206_95412[(2)] = null);

(statearr_91206_95412[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (27))){
var state_91202__$1 = state_91202;
var statearr_91207_95414 = state_91202__$1;
(statearr_91207_95414[(1)] = (30));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (1))){
var state_91202__$1 = state_91202;
var statearr_91209_95415 = state_91202__$1;
(statearr_91209_95415[(2)] = null);

(statearr_91209_95415[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (24))){
var inst_91188 = (state_91202[(2)]);
var state_91202__$1 = state_91202;
var statearr_91210_95416 = state_91202__$1;
(statearr_91210_95416[(2)] = inst_91188);

(statearr_91210_95416[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_91202,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_91202__$1 = state_91202;
var statearr_91211_95417 = state_91202__$1;
(statearr_91211_95417[(2)] = null);

(statearr_91211_95417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (15))){
var inst_91148 = (state_91202[(2)]);
var inst_91149 = com.wsscode.async.async_cljs.consumer_pair(inst_91148);
var state_91202__$1 = state_91202;
var statearr_91212_95418 = state_91202__$1;
(statearr_91212_95418[(2)] = inst_91149);

(statearr_91212_95418[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (21))){
var inst_91191 = (state_91202[(2)]);
var state_91202__$1 = state_91202;
var statearr_91213_95419 = state_91202__$1;
(statearr_91213_95419[(2)] = inst_91191);


cljs.core.async.impl.ioc_helpers.process_exception(state_91202__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (31))){
var state_91202__$1 = state_91202;
var statearr_91214_95420 = state_91202__$1;
(statearr_91214_95420[(2)] = null);

(statearr_91214_95420[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (32))){
var inst_91184 = (state_91202[(2)]);
var state_91202__$1 = state_91202;
var statearr_91215_95423 = state_91202__$1;
(statearr_91215_95423[(2)] = inst_91184);

(statearr_91215_95423[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (33))){
var inst_91196 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_91202__$1 = state_91202;
var statearr_91216_95425 = state_91202__$1;
(statearr_91216_95425[(2)] = inst_91196);

(statearr_91216_95425[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (13))){
var state_91202__$1 = state_91202;
var statearr_91217_95426 = state_91202__$1;
(statearr_91217_95426[(1)] = (16));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (22))){
var inst_91167 = (state_91202[(7)]);
var state_91202__$1 = state_91202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91202__$1,(25),inst_91167);
} else {
if((state_val_91203 === (29))){
var inst_91178 = (state_91202[(2)]);
var inst_91179 = com.wsscode.async.async_cljs.consumer_pair(inst_91178);
var state_91202__$1 = state_91202;
var statearr_91219_95437 = state_91202__$1;
(statearr_91219_95437[(2)] = inst_91179);

(statearr_91219_95437[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (6))){
var inst_91129 = (state_91202[(2)]);
var inst_91130 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416)];
var inst_91131 = [new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-error","com.wsscode.pathom.connect/node-resolver-error",-305161287),e,inst_91129];
var inst_91132 = cljs.core.PersistentHashMap.fromArrays(inst_91130,inst_91131);
var inst_91133 = com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,inst_91132);
var inst_91134 = (function(){throw inst_91129})();
var state_91202__$1 = (function (){var statearr_91220 = state_91202;
(statearr_91220[(8)] = inst_91133);

return statearr_91220;
})();
var statearr_91221_95440 = state_91202__$1;
(statearr_91221_95440[(2)] = inst_91134);


cljs.core.async.impl.ioc_helpers.process_exception(state_91202__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (28))){
var inst_91186 = (state_91202[(2)]);
var state_91202__$1 = state_91202;
var statearr_91222_95441 = state_91202__$1;
(statearr_91222_95441[(2)] = inst_91186);

(statearr_91222_95441[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (25))){
var inst_91171 = (state_91202[(2)]);
var inst_91172 = com.wsscode.async.async_cljs.throw_err(inst_91171);
var state_91202__$1 = state_91202;
var statearr_91223_95442 = state_91202__$1;
(statearr_91223_95442[(2)] = inst_91172);

(statearr_91223_95442[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (34))){
var inst_91193 = (state_91202[(9)]);
var inst_91198 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_91193);
var state_91202__$1 = state_91202;
var statearr_91224_95447 = state_91202__$1;
(statearr_91224_95447[(2)] = inst_91198);

(statearr_91224_95447[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (17))){
var state_91202__$1 = state_91202;
var statearr_91225_95451 = state_91202__$1;
(statearr_91225_95451[(2)] = null);

(statearr_91225_95451[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (3))){
var inst_91125 = (state_91202[(2)]);
var state_91202__$1 = state_91202;
var statearr_91226_95452 = state_91202__$1;
(statearr_91226_95452[(2)] = inst_91125);


cljs.core.async.impl.ioc_helpers.process_exception(state_91202__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (12))){
var inst_91146 = com.wsscode.async.async_cljs.promise__GT_chan(response);
var state_91202__$1 = state_91202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91202__$1,(15),inst_91146);
} else {
if((state_val_91203 === (2))){
var inst_91193 = (state_91202[(9)]);
var inst_91193__$1 = (state_91202[(2)]);
var inst_91194 = (inst_91193__$1 == null);
var state_91202__$1 = (function (){var statearr_91227 = state_91202;
(statearr_91227[(9)] = inst_91193__$1);

return statearr_91227;
})();
if(cljs.core.truth_(inst_91194)){
var statearr_91228_95457 = state_91202__$1;
(statearr_91228_95457[(1)] = (33));

} else {
var statearr_91229_95458 = state_91202__$1;
(statearr_91229_95458[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (23))){
var inst_91167 = (state_91202[(7)]);
var inst_91174 = com.wsscode.async.async_cljs.promise_QMARK_(inst_91167);
var state_91202__$1 = state_91202;
if(cljs.core.truth_(inst_91174)){
var statearr_91230_95459 = state_91202__$1;
(statearr_91230_95459[(1)] = (26));

} else {
var statearr_91231_95460 = state_91202__$1;
(statearr_91231_95460[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (35))){
var inst_91200 = (state_91202[(2)]);
var state_91202__$1 = state_91202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_91202__$1,inst_91200);
} else {
if((state_val_91203 === (19))){
var inst_91167 = (state_91202[(7)]);
var inst_91167__$1 = com.wsscode.pathom.connect.reader3_run_next_node(env__$1,plan,node);
var inst_91168 = com.wsscode.async.async_cljs.chan_QMARK_(inst_91167__$1);
var state_91202__$1 = (function (){var statearr_91232 = state_91202;
(statearr_91232[(7)] = inst_91167__$1);

return statearr_91232;
})();
if(inst_91168){
var statearr_91233_95467 = state_91202__$1;
(statearr_91233_95467[(1)] = (22));

} else {
var statearr_91234_95468 = state_91202__$1;
(statearr_91234_95468[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (11))){
var inst_91141 = (state_91202[(2)]);
var inst_91142 = com.wsscode.async.async_cljs.throw_err(inst_91141);
var state_91202__$1 = state_91202;
var statearr_91235_95469 = state_91202__$1;
(statearr_91235_95469[(2)] = inst_91142);

(statearr_91235_95469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (9))){
var inst_91144 = com.wsscode.async.async_cljs.promise_QMARK_(response);
var state_91202__$1 = state_91202;
if(cljs.core.truth_(inst_91144)){
var statearr_91236_95470 = state_91202__$1;
(statearr_91236_95470[(1)] = (12));

} else {
var statearr_91237_95471 = state_91202__$1;
(statearr_91237_95471[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (5))){
var inst_91164 = (state_91202[(2)]);
var inst_91165 = com.wsscode.pathom.connect.reader3_merge_resolver_response(env__$1,sym,inst_91164);
var state_91202__$1 = state_91202;
if(cljs.core.truth_(inst_91165)){
var statearr_91238_95473 = state_91202__$1;
(statearr_91238_95473[(1)] = (19));

} else {
var statearr_91239_95476 = state_91202__$1;
(statearr_91239_95476[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (14))){
var inst_91156 = (state_91202[(2)]);
var state_91202__$1 = state_91202;
var statearr_91240_95477 = state_91202__$1;
(statearr_91240_95477[(2)] = inst_91156);

(statearr_91240_95477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (26))){
var inst_91167 = (state_91202[(7)]);
var inst_91176 = com.wsscode.async.async_cljs.promise__GT_chan(inst_91167);
var state_91202__$1 = state_91202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91202__$1,(29),inst_91176);
} else {
if((state_val_91203 === (16))){
var state_91202__$1 = state_91202;
var statearr_91241_95480 = state_91202__$1;
(statearr_91241_95480[(2)] = response);

(statearr_91241_95480[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (30))){
var inst_91167 = (state_91202[(7)]);
var state_91202__$1 = state_91202;
var statearr_91242_95482 = state_91202__$1;
(statearr_91242_95482[(2)] = inst_91167);

(statearr_91242_95482[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (10))){
var inst_91158 = (state_91202[(2)]);
var inst_91159 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-response","com.wsscode.pathom.connect/resolver-response",480860817)];
var inst_91160 = [new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-success","com.wsscode.pathom.connect/node-resolver-success",1463092150),e,inst_91158];
var inst_91161 = cljs.core.PersistentHashMap.fromArrays(inst_91159,inst_91160);
var inst_91162 = com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,inst_91161);
var state_91202__$1 = (function (){var statearr_91243 = state_91202;
(statearr_91243[(10)] = inst_91162);

return statearr_91243;
})();
var statearr_91244_95483 = state_91202__$1;
(statearr_91244_95483[(2)] = inst_91158);


cljs.core.async.impl.ioc_helpers.process_exception(state_91202__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (18))){
var inst_91154 = (state_91202[(2)]);
var state_91202__$1 = state_91202;
var statearr_91245_95487 = state_91202__$1;
(statearr_91245_95487[(2)] = inst_91154);

(statearr_91245_95487[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91203 === (8))){
var state_91202__$1 = state_91202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91202__$1,(11),response);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47946__auto___95407,ch__53519__auto__,input_SINGLEQUOTE_,map__91120,map__91120__$1,resolver,cache_QMARK_,env__$1,entity,e,trace_data,response,map__91116,map__91116__$1,env,indexes,async_parser_QMARK_,map__91117,map__91117__$1,node,sym,input,params))
;
return ((function (switch__47663__auto__,c__47946__auto___95407,ch__53519__auto__,input_SINGLEQUOTE_,map__91120,map__91120__$1,resolver,cache_QMARK_,env__$1,entity,e,trace_data,response,map__91116,map__91116__$1,env,indexes,async_parser_QMARK_,map__91117,map__91117__$1,node,sym,input,params){
return (function() {
var com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__47664__auto____0 = (function (){
var statearr_91246 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_91246[(0)] = com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__47664__auto__);

(statearr_91246[(1)] = (1));

return statearr_91246;
});
var com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__47664__auto____1 = (function (state_91202){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_91202);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e91247){if((e91247 instanceof Object)){
var ex__47667__auto__ = e91247;
var statearr_91248_95489 = state_91202;
(statearr_91248_95489[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_91202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91247;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95490 = state_91202;
state_91202 = G__95490;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__47664__auto__ = function(state_91202){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__47664__auto____1.call(this,state_91202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___95407,ch__53519__auto__,input_SINGLEQUOTE_,map__91120,map__91120__$1,resolver,cache_QMARK_,env__$1,entity,e,trace_data,response,map__91116,map__91116__$1,env,indexes,async_parser_QMARK_,map__91117,map__91117__$1,node,sym,input,params))
})();
var state__47948__auto__ = (function (){var statearr_91249 = f__47947__auto__();
(statearr_91249[(6)] = c__47946__auto___95407);

return statearr_91249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___95407,ch__53519__auto__,input_SINGLEQUOTE_,map__91120,map__91120__$1,resolver,cache_QMARK_,env__$1,entity,e,trace_data,response,map__91116,map__91116__$1,env,indexes,async_parser_QMARK_,map__91117,map__91117__$1,node,sym,input,params))
);


return ch__53519__auto__;
} else {
if(cljs.core.truth_(com.wsscode.pathom.connect.reader3_merge_resolver_response(env__$1,sym,response))){
return com.wsscode.pathom.connect.reader3_run_next_node(env__$1,plan,node);
} else {
return null;
}
}
}
});
com.wsscode.pathom.connect.reader3_run_and_node_sync = (function com$wsscode$pathom$connect$reader3_run_and_node_sync(env,plan,p__91250){
var map__91251 = p__91250;
var map__91251__$1 = (((((!((map__91251 == null))))?(((((map__91251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91251):map__91251);
var node = map__91251__$1;
var run_and = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91251__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-and","com.wsscode.pathom.connect.planner/run-and",-690922453));
var seq__91253_95494 = cljs.core.seq(run_and);
var chunk__91254_95495 = null;
var count__91255_95496 = (0);
var i__91256_95497 = (0);
while(true){
if((i__91256_95497 < count__91255_95496)){
var node_id_95498 = chunk__91254_95495.cljs$core$IIndexed$_nth$arity$2(null,i__91256_95497);
var G__91263_95499 = env;
var G__91264_95500 = plan;
var G__91265_95501 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,node_id_95498);
(com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(G__91263_95499,G__91264_95500,G__91265_95501) : com.wsscode.pathom.connect.reader3_run_node.call(null,G__91263_95499,G__91264_95500,G__91265_95501));


var G__95502 = seq__91253_95494;
var G__95503 = chunk__91254_95495;
var G__95504 = count__91255_95496;
var G__95505 = (i__91256_95497 + (1));
seq__91253_95494 = G__95502;
chunk__91254_95495 = G__95503;
count__91255_95496 = G__95504;
i__91256_95497 = G__95505;
continue;
} else {
var temp__5720__auto___95506 = cljs.core.seq(seq__91253_95494);
if(temp__5720__auto___95506){
var seq__91253_95507__$1 = temp__5720__auto___95506;
if(cljs.core.chunked_seq_QMARK_(seq__91253_95507__$1)){
var c__4550__auto___95508 = cljs.core.chunk_first(seq__91253_95507__$1);
var G__95509 = cljs.core.chunk_rest(seq__91253_95507__$1);
var G__95510 = c__4550__auto___95508;
var G__95511 = cljs.core.count(c__4550__auto___95508);
var G__95512 = (0);
seq__91253_95494 = G__95509;
chunk__91254_95495 = G__95510;
count__91255_95496 = G__95511;
i__91256_95497 = G__95512;
continue;
} else {
var node_id_95513 = cljs.core.first(seq__91253_95507__$1);
var G__91266_95514 = env;
var G__91267_95515 = plan;
var G__91268_95516 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,node_id_95513);
(com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(G__91266_95514,G__91267_95515,G__91268_95516) : com.wsscode.pathom.connect.reader3_run_node.call(null,G__91266_95514,G__91267_95515,G__91268_95516));


var G__95517 = cljs.core.next(seq__91253_95507__$1);
var G__95518 = null;
var G__95519 = (0);
var G__95520 = (0);
seq__91253_95494 = G__95517;
chunk__91254_95495 = G__95518;
count__91255_95496 = G__95519;
i__91256_95497 = G__95520;
continue;
}
} else {
}
}
break;
}

return com.wsscode.pathom.connect.reader3_run_next_node(env,plan,node);
});
com.wsscode.pathom.connect.reader3_run_and_node_async = (function com$wsscode$pathom$connect$reader3_run_and_node_async(env,plan,p__91269){
var map__91270 = p__91269;
var map__91270__$1 = (((((!((map__91270 == null))))?(((((map__91270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91270):map__91270);
var node = map__91270__$1;
var run_and = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91270__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-and","com.wsscode.pathom.connect.planner/run-and",-690922453));
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___95521 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___95521,ch__53519__auto__,map__91270,map__91270__$1,node,run_and){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___95521,ch__53519__auto__,map__91270,map__91270__$1,node,run_and){
return (function (state_91321){
var state_val_91322 = (state_91321[(1)]);
if((state_val_91322 === (7))){
var state_91321__$1 = state_91321;
var statearr_91323_95522 = state_91321__$1;
(statearr_91323_95522[(2)] = null);

(statearr_91323_95522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91322 === (20))){
var inst_91315 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_91321__$1 = state_91321;
var statearr_91324_95524 = state_91321__$1;
(statearr_91324_95524[(2)] = inst_91315);

(statearr_91324_95524[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91322 === (1))){
var state_91321__$1 = state_91321;
var statearr_91325_95527 = state_91321__$1;
(statearr_91325_95527[(2)] = null);

(statearr_91325_95527[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91322 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_91321,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_91276 = cljs.core.async.to_chan(run_and);
var inst_91277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_91278 = (function (){var from_chan = inst_91276;
var out_chan = inst_91277;
return ((function (from_chan,out_chan,_,inst_91276,inst_91277,state_val_91322,c__47946__auto___95521,ch__53519__auto__,map__91270,map__91270__$1,node,run_and){
return (function com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline(node_id,res_ch){
var c__47946__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto____$1,from_chan,out_chan,_,inst_91276,inst_91277,state_val_91322,c__47946__auto___95521,ch__53519__auto__,map__91270,map__91270__$1,node,run_and){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto____$1,from_chan,out_chan,_,inst_91276,inst_91277,state_val_91322,c__47946__auto___95521,ch__53519__auto__,map__91270,map__91270__$1,node,run_and){
return (function (state_91344){
var state_val_91345 = (state_91344[(1)]);
if((state_val_91345 === (7))){
var inst_91334 = (state_91344[(7)]);
var state_91344__$1 = state_91344;
var statearr_91346_95542 = state_91344__$1;
(statearr_91346_95542[(2)] = inst_91334);

(statearr_91346_95542[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91345 === (1))){
var inst_91327 = (state_91344[(8)]);
var inst_91326 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,node_id);
var inst_91327__$1 = (com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(env,plan,inst_91326) : com.wsscode.pathom.connect.reader3_run_node.call(null,env,plan,inst_91326));
var inst_91328 = com.wsscode.async.async_cljs.chan_QMARK_(inst_91327__$1);
var state_91344__$1 = (function (){var statearr_91347 = state_91344;
(statearr_91347[(8)] = inst_91327__$1);

return statearr_91347;
})();
if(inst_91328){
var statearr_91348_95548 = state_91344__$1;
(statearr_91348_95548[(1)] = (2));

} else {
var statearr_91349_95550 = state_91344__$1;
(statearr_91349_95550[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91345 === (4))){
var inst_91334 = (state_91344[(7)]);
var inst_91334__$1 = (state_91344[(2)]);
var state_91344__$1 = (function (){var statearr_91350 = state_91344;
(statearr_91350[(7)] = inst_91334__$1);

return statearr_91350;
})();
if(cljs.core.truth_(inst_91334__$1)){
var statearr_91351_95553 = state_91344__$1;
(statearr_91351_95553[(1)] = (7));

} else {
var statearr_91352_95554 = state_91344__$1;
(statearr_91352_95554[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91345 === (6))){
var inst_91341 = (state_91344[(2)]);
var inst_91342 = cljs.core.async.close_BANG_(res_ch);
var state_91344__$1 = (function (){var statearr_91353 = state_91344;
(statearr_91353[(9)] = inst_91341);

return statearr_91353;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_91344__$1,inst_91342);
} else {
if((state_val_91345 === (3))){
var inst_91327 = (state_91344[(8)]);
var state_91344__$1 = state_91344;
var statearr_91354_95559 = state_91344__$1;
(statearr_91354_95559[(2)] = inst_91327);

(statearr_91354_95559[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91345 === (2))){
var inst_91327 = (state_91344[(8)]);
var state_91344__$1 = state_91344;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91344__$1,(5),inst_91327);
} else {
if((state_val_91345 === (9))){
var inst_91339 = (state_91344[(2)]);
var state_91344__$1 = state_91344;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_91344__$1,(6),res_ch,inst_91339);
} else {
if((state_val_91345 === (5))){
var inst_91331 = (state_91344[(2)]);
var state_91344__$1 = state_91344;
var statearr_91355_95560 = state_91344__$1;
(statearr_91355_95560[(2)] = inst_91331);

(statearr_91355_95560[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91345 === (8))){
var inst_91337 = cljs.core.PersistentHashMap.EMPTY;
var state_91344__$1 = state_91344;
var statearr_91356_95561 = state_91344__$1;
(statearr_91356_95561[(2)] = inst_91337);

(statearr_91356_95561[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__47946__auto____$1,from_chan,out_chan,_,inst_91276,inst_91277,state_val_91322,c__47946__auto___95521,ch__53519__auto__,map__91270,map__91270__$1,node,run_and))
;
return ((function (switch__47663__auto__,c__47946__auto____$1,from_chan,out_chan,_,inst_91276,inst_91277,state_val_91322,c__47946__auto___95521,ch__53519__auto__,map__91270,map__91270__$1,node,run_and){
return (function() {
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__47664__auto____0 = (function (){
var statearr_91357 = [null,null,null,null,null,null,null,null,null,null];
(statearr_91357[(0)] = com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__47664__auto__);

(statearr_91357[(1)] = (1));

return statearr_91357;
});
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__47664__auto____1 = (function (state_91344){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_91344);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e91358){if((e91358 instanceof Object)){
var ex__47667__auto__ = e91358;
var statearr_91359_95566 = state_91344;
(statearr_91359_95566[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_91344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91358;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95567 = state_91344;
state_91344 = G__95567;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__47664__auto__ = function(state_91344){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__47664__auto____1.call(this,state_91344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto____$1,from_chan,out_chan,_,inst_91276,inst_91277,state_val_91322,c__47946__auto___95521,ch__53519__auto__,map__91270,map__91270__$1,node,run_and))
})();
var state__47948__auto__ = (function (){var statearr_91360 = f__47947__auto__();
(statearr_91360[(6)] = c__47946__auto____$1);

return statearr_91360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto____$1,from_chan,out_chan,_,inst_91276,inst_91277,state_val_91322,c__47946__auto___95521,ch__53519__auto__,map__91270,map__91270__$1,node,run_and))
);

return c__47946__auto____$1;
});
;})(from_chan,out_chan,_,inst_91276,inst_91277,state_val_91322,c__47946__auto___95521,ch__53519__auto__,map__91270,map__91270__$1,node,run_and))
})();
var inst_91279 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_91277,inst_91278,inst_91276);
var inst_91280 = cljs.core.PersistentVector.EMPTY;
var inst_91281 = cljs.core.async.into(inst_91280,inst_91277);
var state_91321__$1 = (function (){var statearr_91361 = state_91321;
(statearr_91361[(7)] = inst_91279);

return statearr_91361;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91321__$1,(5),inst_91281);
} else {
if((state_val_91322 === (15))){
var inst_91305 = (state_91321[(2)]);
var state_91321__$1 = state_91321;
var statearr_91362_95568 = state_91321__$1;
(statearr_91362_95568[(2)] = inst_91305);

(statearr_91362_95568[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91322 === (21))){
var inst_91312 = (state_91321[(8)]);
var inst_91317 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_91312);
var state_91321__$1 = state_91321;
var statearr_91363_95571 = state_91321__$1;
(statearr_91363_95571[(2)] = inst_91317);

(statearr_91363_95571[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91322 === (13))){
var inst_91286 = (state_91321[(9)]);
var inst_91295 = com.wsscode.async.async_cljs.promise__GT_chan(inst_91286);
var state_91321__$1 = state_91321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91321__$1,(16),inst_91295);
} else {
if((state_val_91322 === (22))){
var inst_91319 = (state_91321[(2)]);
var state_91321__$1 = state_91321;
return cljs.core.async.impl.ioc_helpers.return_chan(state_91321__$1,inst_91319);
} else {
if((state_val_91322 === (6))){
var inst_91286 = (state_91321[(9)]);
var inst_91286__$1 = com.wsscode.pathom.connect.reader3_run_next_node(env,plan,node);
var inst_91287 = com.wsscode.async.async_cljs.chan_QMARK_(inst_91286__$1);
var state_91321__$1 = (function (){var statearr_91364 = state_91321;
(statearr_91364[(9)] = inst_91286__$1);

return statearr_91364;
})();
if(inst_91287){
var statearr_91365_95578 = state_91321__$1;
(statearr_91365_95578[(1)] = (9));

} else {
var statearr_91366_95579 = state_91321__$1;
(statearr_91366_95579[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91322 === (17))){
var inst_91286 = (state_91321[(9)]);
var state_91321__$1 = state_91321;
var statearr_91367_95580 = state_91321__$1;
(statearr_91367_95580[(2)] = inst_91286);

(statearr_91367_95580[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91322 === (3))){
var inst_91272 = (state_91321[(2)]);
var state_91321__$1 = state_91321;
var statearr_91368_95585 = state_91321__$1;
(statearr_91368_95585[(2)] = inst_91272);


cljs.core.async.impl.ioc_helpers.process_exception(state_91321__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91322 === (12))){
var inst_91290 = (state_91321[(2)]);
var inst_91291 = com.wsscode.async.async_cljs.throw_err(inst_91290);
var state_91321__$1 = state_91321;
var statearr_91369_95586 = state_91321__$1;
(statearr_91369_95586[(2)] = inst_91291);

(statearr_91369_95586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91322 === (2))){
var inst_91312 = (state_91321[(8)]);
var inst_91312__$1 = (state_91321[(2)]);
var inst_91313 = (inst_91312__$1 == null);
var state_91321__$1 = (function (){var statearr_91370 = state_91321;
(statearr_91370[(8)] = inst_91312__$1);

return statearr_91370;
})();
if(cljs.core.truth_(inst_91313)){
var statearr_91371_95587 = state_91321__$1;
(statearr_91371_95587[(1)] = (20));

} else {
var statearr_91372_95588 = state_91321__$1;
(statearr_91372_95588[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91322 === (19))){
var inst_91303 = (state_91321[(2)]);
var state_91321__$1 = state_91321;
var statearr_91373_95589 = state_91321__$1;
(statearr_91373_95589[(2)] = inst_91303);

(statearr_91373_95589[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91322 === (11))){
var inst_91307 = (state_91321[(2)]);
var state_91321__$1 = state_91321;
var statearr_91374_95590 = state_91321__$1;
(statearr_91374_95590[(2)] = inst_91307);

(statearr_91374_95590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91322 === (9))){
var inst_91286 = (state_91321[(9)]);
var state_91321__$1 = state_91321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91321__$1,(12),inst_91286);
} else {
if((state_val_91322 === (5))){
var inst_91283 = (state_91321[(2)]);
var inst_91284 = com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_(env,node);
var state_91321__$1 = (function (){var statearr_91375 = state_91321;
(statearr_91375[(10)] = inst_91283);

return statearr_91375;
})();
if(inst_91284){
var statearr_91376_95592 = state_91321__$1;
(statearr_91376_95592[(1)] = (6));

} else {
var statearr_91377_95593 = state_91321__$1;
(statearr_91377_95593[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91322 === (14))){
var state_91321__$1 = state_91321;
var statearr_91378_95594 = state_91321__$1;
(statearr_91378_95594[(1)] = (17));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91322 === (16))){
var inst_91297 = (state_91321[(2)]);
var inst_91298 = com.wsscode.async.async_cljs.consumer_pair(inst_91297);
var state_91321__$1 = state_91321;
var statearr_91380_95595 = state_91321__$1;
(statearr_91380_95595[(2)] = inst_91298);

(statearr_91380_95595[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91322 === (10))){
var inst_91286 = (state_91321[(9)]);
var inst_91293 = com.wsscode.async.async_cljs.promise_QMARK_(inst_91286);
var state_91321__$1 = state_91321;
if(cljs.core.truth_(inst_91293)){
var statearr_91381_95597 = state_91321__$1;
(statearr_91381_95597[(1)] = (13));

} else {
var statearr_91382_95600 = state_91321__$1;
(statearr_91382_95600[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91322 === (18))){
var state_91321__$1 = state_91321;
var statearr_91383_95601 = state_91321__$1;
(statearr_91383_95601[(2)] = null);

(statearr_91383_95601[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91322 === (8))){
var inst_91310 = (state_91321[(2)]);
var state_91321__$1 = state_91321;
var statearr_91384_95602 = state_91321__$1;
(statearr_91384_95602[(2)] = inst_91310);


cljs.core.async.impl.ioc_helpers.process_exception(state_91321__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47946__auto___95521,ch__53519__auto__,map__91270,map__91270__$1,node,run_and))
;
return ((function (switch__47663__auto__,c__47946__auto___95521,ch__53519__auto__,map__91270,map__91270__$1,node,run_and){
return (function() {
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__47664__auto____0 = (function (){
var statearr_91385 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_91385[(0)] = com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__47664__auto__);

(statearr_91385[(1)] = (1));

return statearr_91385;
});
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__47664__auto____1 = (function (state_91321){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_91321);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e91386){if((e91386 instanceof Object)){
var ex__47667__auto__ = e91386;
var statearr_91387_95604 = state_91321;
(statearr_91387_95604[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_91321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91386;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95605 = state_91321;
state_91321 = G__95605;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__47664__auto__ = function(state_91321){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__47664__auto____1.call(this,state_91321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___95521,ch__53519__auto__,map__91270,map__91270__$1,node,run_and))
})();
var state__47948__auto__ = (function (){var statearr_91388 = f__47947__auto__();
(statearr_91388[(6)] = c__47946__auto___95521);

return statearr_91388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___95521,ch__53519__auto__,map__91270,map__91270__$1,node,run_and))
);


return ch__53519__auto__;
});
/**
 * Execute an AND node.
 */
com.wsscode.pathom.connect.reader3_run_and_node = (function com$wsscode$pathom$connect$reader3_run_and_node(env,plan,node){
com.wsscode.pathom.connect.reader3_node_log_BANG_(env,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","and-node-run","com.wsscode.pathom.connect/and-node-run",1169565319)], null));

if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.core","async-parser?","com.wsscode.pathom.core/async-parser?",920199905).cljs$core$IFn$_invoke$arity$1(env))){
return com.wsscode.pathom.connect.reader3_run_and_node_async(env,plan,node);
} else {
return com.wsscode.pathom.connect.reader3_run_and_node_sync(env,plan,node);
}
});
com.wsscode.pathom.connect.reader3_run_or_node_sync = (function com$wsscode$pathom$connect$reader3_run_or_node_sync(env,plan,p__91389){
var map__91390 = p__91389;
var map__91390__$1 = (((((!((map__91390 == null))))?(((((map__91390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91390):map__91390);
var or_node = map__91390__$1;
var run_or = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91390__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-or","com.wsscode.pathom.connect.planner/run-or",-13021664));
var nodes_95609 = run_or;
var resp_95610 = null;
while(true){
var vec__91398_95611 = nodes_95609;
var seq__91399_95612 = cljs.core.seq(vec__91398_95611);
var first__91400_95613 = cljs.core.first(seq__91399_95612);
var seq__91399_95614__$1 = cljs.core.next(seq__91399_95612);
var node_id_95615 = first__91400_95613;
var tail_95616 = seq__91399_95614__$1;
if(cljs.core.truth_(node_id_95615)){
var response_95617 = (function (){var G__91401 = env;
var G__91402 = plan;
var G__91403 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,node_id_95615);
return (com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(G__91401,G__91402,G__91403) : com.wsscode.pathom.connect.reader3_run_node.call(null,G__91401,G__91402,G__91403));
})();
if(com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_(env,or_node)){
} else {
var G__95618 = tail_95616;
var G__95619 = response_95617;
nodes_95609 = G__95618;
resp_95610 = G__95619;
continue;
}
} else {
}
break;
}

return com.wsscode.pathom.connect.reader3_run_next_node(env,plan,or_node);
});
com.wsscode.pathom.connect.reader3_run_or_node_async = (function com$wsscode$pathom$connect$reader3_run_or_node_async(env,plan,p__91404){
var map__91405 = p__91404;
var map__91405__$1 = (((((!((map__91405 == null))))?(((((map__91405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91405):map__91405);
var or_node = map__91405__$1;
var run_or = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91405__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-or","com.wsscode.pathom.connect.planner/run-or",-13021664));
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___95620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___95620,ch__53519__auto__,map__91405,map__91405__$1,or_node,run_or){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___95620,ch__53519__auto__,map__91405,map__91405__$1,or_node,run_or){
return (function (state_91473){
var state_val_91474 = (state_91473[(1)]);
if((state_val_91474 === (7))){
var inst_91422 = (state_91473[(7)]);
var inst_91418 = (state_91473[(8)]);
var inst_91421 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,inst_91418);
var inst_91422__$1 = (com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(env,plan,inst_91421) : com.wsscode.pathom.connect.reader3_run_node.call(null,env,plan,inst_91421));
var inst_91423 = com.wsscode.async.async_cljs.chan_QMARK_(inst_91422__$1);
var state_91473__$1 = (function (){var statearr_91475 = state_91473;
(statearr_91475[(7)] = inst_91422__$1);

return statearr_91475;
})();
if(inst_91423){
var statearr_91476_95624 = state_91473__$1;
(statearr_91476_95624[(1)] = (10));

} else {
var statearr_91477_95635 = state_91473__$1;
(statearr_91477_95635[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (20))){
var inst_91445 = (state_91473[(2)]);
var inst_91446 = com.wsscode.async.async_cljs.throw_err(inst_91445);
var state_91473__$1 = state_91473;
var statearr_91478_95636 = state_91473__$1;
(statearr_91478_95636[(2)] = inst_91446);

(statearr_91478_95636[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (27))){
var inst_91458 = (state_91473[(2)]);
var state_91473__$1 = state_91473;
var statearr_91479_95639 = state_91473__$1;
(statearr_91479_95639[(2)] = inst_91458);

(statearr_91479_95639[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (1))){
var state_91473__$1 = state_91473;
var statearr_91480_95640 = state_91473__$1;
(statearr_91480_95640[(2)] = null);

(statearr_91480_95640[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (24))){
var inst_91452 = (state_91473[(2)]);
var inst_91453 = com.wsscode.async.async_cljs.consumer_pair(inst_91452);
var state_91473__$1 = state_91473;
var statearr_91481_95644 = state_91473__$1;
(statearr_91481_95644[(2)] = inst_91453);

(statearr_91481_95644[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_91473,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_91411 = run_or;
var inst_91412 = null;
var state_91473__$1 = (function (){var statearr_91482 = state_91473;
(statearr_91482[(9)] = inst_91411);

(statearr_91482[(10)] = inst_91412);

return statearr_91482;
})();
var statearr_91483_95658 = state_91473__$1;
(statearr_91483_95658[(2)] = null);

(statearr_91483_95658[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (15))){
var inst_91419 = (state_91473[(11)]);
var inst_91429 = (state_91473[(12)]);
var inst_91411 = inst_91419;
var inst_91412 = inst_91429;
var state_91473__$1 = (function (){var statearr_91484 = state_91473;
(statearr_91484[(9)] = inst_91411);

(statearr_91484[(10)] = inst_91412);

return statearr_91484;
})();
var statearr_91485_95659 = state_91473__$1;
(statearr_91485_95659[(2)] = null);

(statearr_91485_95659[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (21))){
var inst_91441 = (state_91473[(13)]);
var inst_91450 = com.wsscode.async.async_cljs.promise__GT_chan(inst_91441);
var state_91473__$1 = state_91473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91473__$1,(24),inst_91450);
} else {
if((state_val_91474 === (13))){
var inst_91426 = (state_91473[(2)]);
var state_91473__$1 = state_91473;
var statearr_91486_95661 = state_91473__$1;
(statearr_91486_95661[(2)] = inst_91426);

(statearr_91486_95661[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (22))){
var state_91473__$1 = state_91473;
var statearr_91487_95663 = state_91473__$1;
(statearr_91487_95663[(1)] = (25));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (29))){
var inst_91464 = (state_91473[(14)]);
var inst_91469 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_91464);
var state_91473__$1 = state_91473;
var statearr_91489_95664 = state_91473__$1;
(statearr_91489_95664[(2)] = inst_91469);

(statearr_91489_95664[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (6))){
var inst_91441 = (state_91473[(13)]);
var inst_91440 = (state_91473[(2)]);
var inst_91441__$1 = com.wsscode.pathom.connect.reader3_run_next_node(env,plan,or_node);
var inst_91442 = com.wsscode.async.async_cljs.chan_QMARK_(inst_91441__$1);
var state_91473__$1 = (function (){var statearr_91490 = state_91473;
(statearr_91490[(13)] = inst_91441__$1);

(statearr_91490[(15)] = inst_91440);

return statearr_91490;
})();
if(inst_91442){
var statearr_91491_95666 = state_91473__$1;
(statearr_91491_95666[(1)] = (17));

} else {
var statearr_91492_95668 = state_91473__$1;
(statearr_91492_95668[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (28))){
var inst_91467 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_91473__$1 = state_91473;
var statearr_91493_95669 = state_91473__$1;
(statearr_91493_95669[(2)] = inst_91467);

(statearr_91493_95669[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (25))){
var inst_91441 = (state_91473[(13)]);
var state_91473__$1 = state_91473;
var statearr_91494_95670 = state_91473__$1;
(statearr_91494_95670[(2)] = inst_91441);

(statearr_91494_95670[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (17))){
var inst_91441 = (state_91473[(13)]);
var state_91473__$1 = state_91473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91473__$1,(20),inst_91441);
} else {
if((state_val_91474 === (3))){
var inst_91407 = (state_91473[(2)]);
var state_91473__$1 = state_91473;
var statearr_91495_95671 = state_91473__$1;
(statearr_91495_95671[(2)] = inst_91407);


cljs.core.async.impl.ioc_helpers.process_exception(state_91473__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (12))){
var inst_91429 = (state_91473[(2)]);
var inst_91430 = com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_(env,or_node);
var state_91473__$1 = (function (){var statearr_91496 = state_91473;
(statearr_91496[(12)] = inst_91429);

return statearr_91496;
})();
if(inst_91430){
var statearr_91497_95672 = state_91473__$1;
(statearr_91497_95672[(1)] = (14));

} else {
var statearr_91498_95674 = state_91473__$1;
(statearr_91498_95674[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (2))){
var inst_91464 = (state_91473[(14)]);
var inst_91464__$1 = (state_91473[(2)]);
var inst_91465 = (inst_91464__$1 == null);
var state_91473__$1 = (function (){var statearr_91499 = state_91473;
(statearr_91499[(14)] = inst_91464__$1);

return statearr_91499;
})();
if(cljs.core.truth_(inst_91465)){
var statearr_91500_95675 = state_91473__$1;
(statearr_91500_95675[(1)] = (28));

} else {
var statearr_91501_95676 = state_91473__$1;
(statearr_91501_95676[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (23))){
var inst_91460 = (state_91473[(2)]);
var state_91473__$1 = state_91473;
var statearr_91502_95677 = state_91473__$1;
(statearr_91502_95677[(2)] = inst_91460);

(statearr_91502_95677[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (19))){
var inst_91462 = (state_91473[(2)]);
var state_91473__$1 = state_91473;
var statearr_91503_95678 = state_91473__$1;
(statearr_91503_95678[(2)] = inst_91462);


cljs.core.async.impl.ioc_helpers.process_exception(state_91473__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (11))){
var inst_91422 = (state_91473[(7)]);
var state_91473__$1 = state_91473;
var statearr_91504_95682 = state_91473__$1;
(statearr_91504_95682[(2)] = inst_91422);

(statearr_91504_95682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (9))){
var inst_91438 = (state_91473[(2)]);
var state_91473__$1 = state_91473;
var statearr_91505_95683 = state_91473__$1;
(statearr_91505_95683[(2)] = inst_91438);

(statearr_91505_95683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (5))){
var inst_91411 = (state_91473[(9)]);
var inst_91418 = (state_91473[(8)]);
var inst_91417 = cljs.core.seq(inst_91411);
var inst_91418__$1 = cljs.core.first(inst_91417);
var inst_91419 = cljs.core.next(inst_91417);
var state_91473__$1 = (function (){var statearr_91506 = state_91473;
(statearr_91506[(11)] = inst_91419);

(statearr_91506[(8)] = inst_91418__$1);

return statearr_91506;
})();
if(cljs.core.truth_(inst_91418__$1)){
var statearr_91507_95684 = state_91473__$1;
(statearr_91507_95684[(1)] = (7));

} else {
var statearr_91508_95685 = state_91473__$1;
(statearr_91508_95685[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (14))){
var inst_91429 = (state_91473[(12)]);
var state_91473__$1 = state_91473;
var statearr_91509_95686 = state_91473__$1;
(statearr_91509_95686[(2)] = inst_91429);

(statearr_91509_95686[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (26))){
var state_91473__$1 = state_91473;
var statearr_91510_95687 = state_91473__$1;
(statearr_91510_95687[(2)] = null);

(statearr_91510_95687[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (16))){
var inst_91435 = (state_91473[(2)]);
var state_91473__$1 = state_91473;
var statearr_91511_95688 = state_91473__$1;
(statearr_91511_95688[(2)] = inst_91435);

(statearr_91511_95688[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (30))){
var inst_91471 = (state_91473[(2)]);
var state_91473__$1 = state_91473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_91473__$1,inst_91471);
} else {
if((state_val_91474 === (10))){
var inst_91422 = (state_91473[(7)]);
var state_91473__$1 = state_91473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91473__$1,(13),inst_91422);
} else {
if((state_val_91474 === (18))){
var inst_91441 = (state_91473[(13)]);
var inst_91448 = com.wsscode.async.async_cljs.promise_QMARK_(inst_91441);
var state_91473__$1 = state_91473;
if(cljs.core.truth_(inst_91448)){
var statearr_91512_95690 = state_91473__$1;
(statearr_91512_95690[(1)] = (21));

} else {
var statearr_91513_95691 = state_91473__$1;
(statearr_91513_95691[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91474 === (8))){
var inst_91412 = (state_91473[(10)]);
var state_91473__$1 = state_91473;
var statearr_91514_95692 = state_91473__$1;
(statearr_91514_95692[(2)] = inst_91412);

(statearr_91514_95692[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47946__auto___95620,ch__53519__auto__,map__91405,map__91405__$1,or_node,run_or))
;
return ((function (switch__47663__auto__,c__47946__auto___95620,ch__53519__auto__,map__91405,map__91405__$1,or_node,run_or){
return (function() {
var com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__47664__auto____0 = (function (){
var statearr_91515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_91515[(0)] = com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__47664__auto__);

(statearr_91515[(1)] = (1));

return statearr_91515;
});
var com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__47664__auto____1 = (function (state_91473){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_91473);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e91516){if((e91516 instanceof Object)){
var ex__47667__auto__ = e91516;
var statearr_91517_95696 = state_91473;
(statearr_91517_95696[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_91473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91516;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95697 = state_91473;
state_91473 = G__95697;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__47664__auto__ = function(state_91473){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__47664__auto____1.call(this,state_91473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___95620,ch__53519__auto__,map__91405,map__91405__$1,or_node,run_or))
})();
var state__47948__auto__ = (function (){var statearr_91518 = f__47947__auto__();
(statearr_91518[(6)] = c__47946__auto___95620);

return statearr_91518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___95620,ch__53519__auto__,map__91405,map__91405__$1,or_node,run_or))
);


return ch__53519__auto__;
});
/**
 * Execute an OR node.
 */
com.wsscode.pathom.connect.reader3_run_or_node = (function com$wsscode$pathom$connect$reader3_run_or_node(env,plan,node){
com.wsscode.pathom.connect.reader3_node_log_BANG_(env,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","or-node-run","com.wsscode.pathom.connect/or-node-run",1191868157)], null));

if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.core","async-parser?","com.wsscode.pathom.core/async-parser?",920199905).cljs$core$IFn$_invoke$arity$1(env))){
return com.wsscode.pathom.connect.reader3_run_or_node_async(env,plan,node);
} else {
return com.wsscode.pathom.connect.reader3_run_or_node_sync(env,plan,node);
}
});
com.wsscode.pathom.connect.reader3_run_node = (function com$wsscode$pathom$connect$reader3_run_node(env,plan,node){
var G__91519 = com.wsscode.pathom.connect.planner.node_kind(node);
var G__91519__$1 = (((G__91519 instanceof cljs.core.Keyword))?G__91519.fqn:null);
switch (G__91519__$1) {
case "com.wsscode.pathom.connect.planner/node-resolver":
return com.wsscode.pathom.connect.reader3_run_resolver_node(env,plan,node);

break;
case "com.wsscode.pathom.connect.planner/node-and":
return com.wsscode.pathom.connect.reader3_run_and_node(env,plan,node);

break;
case "com.wsscode.pathom.connect.planner/node-or":
return com.wsscode.pathom.connect.reader3_run_or_node(env,plan,node);

break;
default:
return null;

}
});
/**
 * Prepare AST from parent query. This will lift placeholder nodes, convert
 *   query to AST and remove children keys that are already present in the current
 *   entity.
 */
com.wsscode.pathom.connect.reader3_prepare_ast = (function com$wsscode$pathom$connect$reader3_prepare_ast(p__91520){
var map__91521 = p__91520;
var map__91521__$1 = (((((!((map__91521 == null))))?(((((map__91521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91521):map__91521);
var env = map__91521__$1;
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91521__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
return com.wsscode.pathom.connect.planner.prepare_ast(env,com.wsscode.pathom.core.query__GT_ast(parent_query));
});
com.wsscode.pathom.connect.reader3_compute_run_graph = (function com$wsscode$pathom$connect$reader3_compute_run_graph(env){
var plan_trace_id = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978)], null));
var plan = com.wsscode.pathom.connect.planner.compute_run_graph.cljs$core$IFn$_invoke$arity$1(env);
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,plan_trace_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978),new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),plan], null));

return plan;
});
com.wsscode.pathom.connect.reader3 = (function com$wsscode$pathom$connect$reader3(p__91523){
var map__91524 = p__91523;
var map__91524__$1 = (((((!((map__91524 == null))))?(((((map__91524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91524):map__91524);
var env = map__91524__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91524__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var reader3_computed_plans = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91524__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-computed-plans","com.wsscode.pathom.connect/reader3-computed-plans",-307073851));
var async_parser_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91524__$1,new cljs.core.Keyword("com.wsscode.pathom.core","async-parser?","com.wsscode.pathom.core/async-parser?",920199905));
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-enter","com.wsscode.pathom.connect/reader3-enter",-1844342031)], null));

var path = com.wsscode.pathom.core.path_without_placeholders(env);
if(cljs.core.contains_QMARK_(reader3_computed_plans,path)){
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
} else {
var ast = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))?(function (){var trace_id__27094__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-prepare-ast","com.wsscode.pathom.connect/reader3-prepare-ast",2123235486)], null));
var res__27095__auto__ = com.wsscode.pathom.connect.reader3_prepare_ast(env);
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__27094__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-prepare-ast","com.wsscode.pathom.connect/reader3-prepare-ast",2123235486)], null));

return res__27095__auto__;
})():com.wsscode.pathom.connect.reader3_prepare_ast(env));
var available_data = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))?(function (){var trace_id__27094__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-entity-shape","com.wsscode.pathom.connect/reader3-entity-shape",721688024)], null));
var res__27095__auto__ = com.wsscode.pathom.core.map__GT_shape_descriptor(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env));
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__27094__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-entity-shape","com.wsscode.pathom.connect/reader3-entity-shape",721688024)], null));

return res__27095__auto__;
})():com.wsscode.pathom.core.map__GT_shape_descriptor(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env)));
var process_start = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-execute","com.wsscode.pathom.connect/reader3-execute",1795970935)], null));
var plan = com.wsscode.pathom.connect.reader3_compute_run_graph(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,indexes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),ast,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","available-data","com.wsscode.pathom.connect.planner/available-data",-2081264117),available_data], null)], 0)));
var plan_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(plan);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","run-plan*","com.wsscode.pathom.connect/run-plan*",-2140918000),plan_STAR_);
var temp__5718__auto__ = com.wsscode.pathom.connect.planner.get_root_node(plan);
if(cljs.core.truth_(temp__5718__auto__)){
var root = temp__5718__auto__;
if(cljs.core.truth_(async_parser_QMARK_)){
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___95722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___95722,ch__53519__auto__,root,temp__5718__auto__,ast,available_data,process_start,plan,plan_STAR_,env__$1,path,map__91524,map__91524__$1,env,indexes,reader3_computed_plans,async_parser_QMARK_){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___95722,ch__53519__auto__,root,temp__5718__auto__,ast,available_data,process_start,plan,plan_STAR_,env__$1,path,map__91524,map__91524__$1,env,indexes,reader3_computed_plans,async_parser_QMARK_){
return (function (state_91593){
var state_val_91594 = (state_91593[(1)]);
if((state_val_91594 === (7))){
var inst_91561 = (state_91593[(7)]);
var inst_91551 = (state_91593[(2)]);
var inst_91552 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_91553 = cljs.core.deref(plan_STAR_);
var inst_91554 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_91555 = ["#6ac5ec"];
var inst_91556 = cljs.core.PersistentHashMap.fromArrays(inst_91554,inst_91555);
var inst_91557 = [new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-execute","com.wsscode.pathom.connect/reader3-execute",1795970935),inst_91553,inst_91556];
var inst_91558 = cljs.core.PersistentHashMap.fromArrays(inst_91552,inst_91557);
var inst_91559 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env__$1,process_start,inst_91558);
var inst_91560 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-computed-plans","com.wsscode.pathom.connect/reader3-computed-plans",-307073851),com.wsscode.pathom.misc.sconj,path);
var inst_91561__$1 = com.wsscode.pathom.core.reader(inst_91560);
var inst_91562 = com.wsscode.async.async_cljs.chan_QMARK_(inst_91561__$1);
var state_91593__$1 = (function (){var statearr_91595 = state_91593;
(statearr_91595[(7)] = inst_91561__$1);

(statearr_91595[(8)] = inst_91559);

(statearr_91595[(9)] = inst_91551);

return statearr_91595;
})();
if(inst_91562){
var statearr_91596_95723 = state_91593__$1;
(statearr_91596_95723[(1)] = (16));

} else {
var statearr_91597_95724 = state_91593__$1;
(statearr_91597_95724[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91594 === (20))){
var inst_91561 = (state_91593[(7)]);
var inst_91570 = com.wsscode.async.async_cljs.promise__GT_chan(inst_91561);
var state_91593__$1 = state_91593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91593__$1,(23),inst_91570);
} else {
if((state_val_91594 === (27))){
var inst_91587 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_91593__$1 = state_91593;
var statearr_91598_95726 = state_91593__$1;
(statearr_91598_95726[(2)] = inst_91587);

(statearr_91598_95726[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91594 === (1))){
var state_91593__$1 = state_91593;
var statearr_91599_95727 = state_91593__$1;
(statearr_91599_95727[(2)] = null);

(statearr_91599_95727[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91594 === (24))){
var inst_91561 = (state_91593[(7)]);
var state_91593__$1 = state_91593;
var statearr_91600_95728 = state_91593__$1;
(statearr_91600_95728[(2)] = inst_91561);

(statearr_91600_95728[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91594 === (4))){
var inst_91530 = (state_91593[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_91593,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_91530__$1 = com.wsscode.pathom.connect.reader3_run_node(env__$1,plan,root);
var inst_91531 = com.wsscode.async.async_cljs.chan_QMARK_(inst_91530__$1);
var state_91593__$1 = (function (){var statearr_91601 = state_91593;
(statearr_91601[(10)] = inst_91530__$1);

return statearr_91601;
})();
if(inst_91531){
var statearr_91602_95729 = state_91593__$1;
(statearr_91602_95729[(1)] = (5));

} else {
var statearr_91603_95730 = state_91593__$1;
(statearr_91603_95730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91594 === (15))){
var inst_91547 = (state_91593[(2)]);
var state_91593__$1 = state_91593;
var statearr_91604_95731 = state_91593__$1;
(statearr_91604_95731[(2)] = inst_91547);

(statearr_91604_95731[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91594 === (21))){
var state_91593__$1 = state_91593;
var statearr_91605_95732 = state_91593__$1;
(statearr_91605_95732[(1)] = (24));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91594 === (13))){
var inst_91530 = (state_91593[(10)]);
var state_91593__$1 = state_91593;
var statearr_91607_95735 = state_91593__$1;
(statearr_91607_95735[(2)] = inst_91530);

(statearr_91607_95735[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91594 === (22))){
var inst_91580 = (state_91593[(2)]);
var state_91593__$1 = state_91593;
var statearr_91608_95737 = state_91593__$1;
(statearr_91608_95737[(2)] = inst_91580);

(statearr_91608_95737[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91594 === (29))){
var inst_91591 = (state_91593[(2)]);
var state_91593__$1 = state_91593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_91593__$1,inst_91591);
} else {
if((state_val_91594 === (6))){
var inst_91530 = (state_91593[(10)]);
var inst_91537 = com.wsscode.async.async_cljs.promise_QMARK_(inst_91530);
var state_91593__$1 = state_91593;
if(cljs.core.truth_(inst_91537)){
var statearr_91609_95748 = state_91593__$1;
(statearr_91609_95748[(1)] = (9));

} else {
var statearr_91610_95749 = state_91593__$1;
(statearr_91610_95749[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91594 === (28))){
var inst_91584 = (state_91593[(11)]);
var inst_91589 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_91584);
var state_91593__$1 = state_91593;
var statearr_91611_95751 = state_91593__$1;
(statearr_91611_95751[(2)] = inst_91589);

(statearr_91611_95751[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91594 === (25))){
var state_91593__$1 = state_91593;
var statearr_91612_95752 = state_91593__$1;
(statearr_91612_95752[(2)] = null);

(statearr_91612_95752[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91594 === (17))){
var inst_91561 = (state_91593[(7)]);
var inst_91568 = com.wsscode.async.async_cljs.promise_QMARK_(inst_91561);
var state_91593__$1 = state_91593;
if(cljs.core.truth_(inst_91568)){
var statearr_91613_95754 = state_91593__$1;
(statearr_91613_95754[(1)] = (20));

} else {
var statearr_91614_95755 = state_91593__$1;
(statearr_91614_95755[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91594 === (3))){
var inst_91526 = (state_91593[(2)]);
var state_91593__$1 = state_91593;
var statearr_91615_95756 = state_91593__$1;
(statearr_91615_95756[(2)] = inst_91526);


cljs.core.async.impl.ioc_helpers.process_exception(state_91593__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91594 === (12))){
var inst_91541 = (state_91593[(2)]);
var inst_91542 = com.wsscode.async.async_cljs.consumer_pair(inst_91541);
var state_91593__$1 = state_91593;
var statearr_91616_95758 = state_91593__$1;
(statearr_91616_95758[(2)] = inst_91542);

(statearr_91616_95758[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91594 === (2))){
var inst_91584 = (state_91593[(11)]);
var inst_91584__$1 = (state_91593[(2)]);
var inst_91585 = (inst_91584__$1 == null);
var state_91593__$1 = (function (){var statearr_91617 = state_91593;
(statearr_91617[(11)] = inst_91584__$1);

return statearr_91617;
})();
if(cljs.core.truth_(inst_91585)){
var statearr_91618_95759 = state_91593__$1;
(statearr_91618_95759[(1)] = (27));

} else {
var statearr_91619_95760 = state_91593__$1;
(statearr_91619_95760[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91594 === (23))){
var inst_91572 = (state_91593[(2)]);
var inst_91573 = com.wsscode.async.async_cljs.consumer_pair(inst_91572);
var state_91593__$1 = state_91593;
var statearr_91620_95761 = state_91593__$1;
(statearr_91620_95761[(2)] = inst_91573);

(statearr_91620_95761[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91594 === (19))){
var inst_91565 = (state_91593[(2)]);
var inst_91566 = com.wsscode.async.async_cljs.throw_err(inst_91565);
var state_91593__$1 = state_91593;
var statearr_91621_95763 = state_91593__$1;
(statearr_91621_95763[(2)] = inst_91566);

(statearr_91621_95763[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91594 === (11))){
var inst_91549 = (state_91593[(2)]);
var state_91593__$1 = state_91593;
var statearr_91622_95764 = state_91593__$1;
(statearr_91622_95764[(2)] = inst_91549);

(statearr_91622_95764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91594 === (9))){
var inst_91530 = (state_91593[(10)]);
var inst_91539 = com.wsscode.async.async_cljs.promise__GT_chan(inst_91530);
var state_91593__$1 = state_91593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91593__$1,(12),inst_91539);
} else {
if((state_val_91594 === (5))){
var inst_91530 = (state_91593[(10)]);
var state_91593__$1 = state_91593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91593__$1,(8),inst_91530);
} else {
if((state_val_91594 === (14))){
var state_91593__$1 = state_91593;
var statearr_91623_95768 = state_91593__$1;
(statearr_91623_95768[(2)] = null);

(statearr_91623_95768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91594 === (26))){
var inst_91578 = (state_91593[(2)]);
var state_91593__$1 = state_91593;
var statearr_91624_95772 = state_91593__$1;
(statearr_91624_95772[(2)] = inst_91578);

(statearr_91624_95772[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91594 === (16))){
var inst_91561 = (state_91593[(7)]);
var state_91593__$1 = state_91593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_91593__$1,(19),inst_91561);
} else {
if((state_val_91594 === (10))){
var state_91593__$1 = state_91593;
var statearr_91625_95773 = state_91593__$1;
(statearr_91625_95773[(1)] = (13));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91594 === (18))){
var inst_91582 = (state_91593[(2)]);
var state_91593__$1 = state_91593;
var statearr_91627_95774 = state_91593__$1;
(statearr_91627_95774[(2)] = inst_91582);


cljs.core.async.impl.ioc_helpers.process_exception(state_91593__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91594 === (8))){
var inst_91534 = (state_91593[(2)]);
var inst_91535 = com.wsscode.async.async_cljs.throw_err(inst_91534);
var state_91593__$1 = state_91593;
var statearr_91628_95775 = state_91593__$1;
(statearr_91628_95775[(2)] = inst_91535);

(statearr_91628_95775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47946__auto___95722,ch__53519__auto__,root,temp__5718__auto__,ast,available_data,process_start,plan,plan_STAR_,env__$1,path,map__91524,map__91524__$1,env,indexes,reader3_computed_plans,async_parser_QMARK_))
;
return ((function (switch__47663__auto__,c__47946__auto___95722,ch__53519__auto__,root,temp__5718__auto__,ast,available_data,process_start,plan,plan_STAR_,env__$1,path,map__91524,map__91524__$1,env,indexes,reader3_computed_plans,async_parser_QMARK_){
return (function() {
var com$wsscode$pathom$connect$reader3_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$reader3_$_state_machine__47664__auto____0 = (function (){
var statearr_91629 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_91629[(0)] = com$wsscode$pathom$connect$reader3_$_state_machine__47664__auto__);

(statearr_91629[(1)] = (1));

return statearr_91629;
});
var com$wsscode$pathom$connect$reader3_$_state_machine__47664__auto____1 = (function (state_91593){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_91593);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e91630){if((e91630 instanceof Object)){
var ex__47667__auto__ = e91630;
var statearr_91631_95782 = state_91593;
(statearr_91631_95782[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_91593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91630;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__95783 = state_91593;
state_91593 = G__95783;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$reader3_$_state_machine__47664__auto__ = function(state_91593){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$reader3_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$reader3_$_state_machine__47664__auto____1.call(this,state_91593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$reader3_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$reader3_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$reader3_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$reader3_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$reader3_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___95722,ch__53519__auto__,root,temp__5718__auto__,ast,available_data,process_start,plan,plan_STAR_,env__$1,path,map__91524,map__91524__$1,env,indexes,reader3_computed_plans,async_parser_QMARK_))
})();
var state__47948__auto__ = (function (){var statearr_91632 = f__47947__auto__();
(statearr_91632[(6)] = c__47946__auto___95722);

return statearr_91632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___95722,ch__53519__auto__,root,temp__5718__auto__,ast,available_data,process_start,plan,plan_STAR_,env__$1,path,map__91524,map__91524__$1,env,indexes,reader3_computed_plans,async_parser_QMARK_))
);


return ch__53519__auto__;
} else {
com.wsscode.pathom.connect.reader3_run_node(env__$1,plan,root);

com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env__$1,process_start,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-execute","com.wsscode.pathom.connect/reader3-execute",1795970935),new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),cljs.core.deref(plan_STAR_),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#6ac5ec"], null)], null));

return com.wsscode.pathom.core.reader(cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-computed-plans","com.wsscode.pathom.connect/reader3-computed-plans",-307073851),com.wsscode.pathom.misc.sconj,path));
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
}
});
com.wsscode.pathom.connect.parallel_batch_error = (function com$wsscode$pathom$connect$parallel_batch_error(p__91633,e){
var map__91634 = p__91633;
var map__91634__$1 = (((((!((map__91634 == null))))?(((((map__91634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91634):map__91634);
var env = map__91634__$1;
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91634__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var map__91636 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var map__91636__$1 = (((((!((map__91636 == null))))?(((((map__91636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91636):map__91636);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91636__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var item_count = cljs.core.count(processing_sequence);
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-error","com.wsscode.pathom.connect/batch-result-error",-1587594017),new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),com.wsscode.pathom.core.process_error(env,e)], null));

var output_SINGLEQUOTE_ = com.wsscode.pathom.connect.output__GT_provides(output);
var base_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take_while.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword_QMARK_),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661).cljs$core$IFn$_invoke$arity$1(env));
var seq__91638_95789 = cljs.core.seq(output_SINGLEQUOTE_);
var chunk__91643_95790 = null;
var count__91644_95791 = (0);
var i__91645_95792 = (0);
while(true){
if((i__91645_95792 < count__91644_95791)){
var o_95793 = chunk__91643_95790.cljs$core$IIndexed$_nth$arity$2(null,i__91645_95792);
var seq__91646_95794 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(item_count));
var chunk__91647_95795 = null;
var count__91648_95796 = (0);
var i__91649_95797 = (0);
while(true){
if((i__91649_95797 < count__91648_95796)){
var i_95799 = chunk__91647_95795.cljs$core$IIndexed$_nth$arity$2(null,i__91649_95797);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),com.wsscode.pathom.misc.vconj(base_path,i_95799,o_95793)),e);


var G__95805 = seq__91646_95794;
var G__95806 = chunk__91647_95795;
var G__95807 = count__91648_95796;
var G__95808 = (i__91649_95797 + (1));
seq__91646_95794 = G__95805;
chunk__91647_95795 = G__95806;
count__91648_95796 = G__95807;
i__91649_95797 = G__95808;
continue;
} else {
var temp__5720__auto___95809 = cljs.core.seq(seq__91646_95794);
if(temp__5720__auto___95809){
var seq__91646_95810__$1 = temp__5720__auto___95809;
if(cljs.core.chunked_seq_QMARK_(seq__91646_95810__$1)){
var c__4550__auto___95811 = cljs.core.chunk_first(seq__91646_95810__$1);
var G__95812 = cljs.core.chunk_rest(seq__91646_95810__$1);
var G__95813 = c__4550__auto___95811;
var G__95814 = cljs.core.count(c__4550__auto___95811);
var G__95815 = (0);
seq__91646_95794 = G__95812;
chunk__91647_95795 = G__95813;
count__91648_95796 = G__95814;
i__91649_95797 = G__95815;
continue;
} else {
var i_95816 = cljs.core.first(seq__91646_95810__$1);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),com.wsscode.pathom.misc.vconj(base_path,i_95816,o_95793)),e);


var G__95817 = cljs.core.next(seq__91646_95810__$1);
var G__95818 = null;
var G__95819 = (0);
var G__95820 = (0);
seq__91646_95794 = G__95817;
chunk__91647_95795 = G__95818;
count__91648_95796 = G__95819;
i__91649_95797 = G__95820;
continue;
}
} else {
}
}
break;
}

var G__95821 = seq__91638_95789;
var G__95822 = chunk__91643_95790;
var G__95823 = count__91644_95791;
var G__95824 = (i__91645_95792 + (1));
seq__91638_95789 = G__95821;
chunk__91643_95790 = G__95822;
count__91644_95791 = G__95823;
i__91645_95792 = G__95824;
continue;
} else {
var temp__5720__auto___95825 = cljs.core.seq(seq__91638_95789);
if(temp__5720__auto___95825){
var seq__91638_95826__$1 = temp__5720__auto___95825;
if(cljs.core.chunked_seq_QMARK_(seq__91638_95826__$1)){
var c__4550__auto___95827 = cljs.core.chunk_first(seq__91638_95826__$1);
var G__95828 = cljs.core.chunk_rest(seq__91638_95826__$1);
var G__95829 = c__4550__auto___95827;
var G__95830 = cljs.core.count(c__4550__auto___95827);
var G__95831 = (0);
seq__91638_95789 = G__95828;
chunk__91643_95790 = G__95829;
count__91644_95791 = G__95830;
i__91645_95792 = G__95831;
continue;
} else {
var o_95832 = cljs.core.first(seq__91638_95826__$1);
var seq__91639_95833 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(item_count));
var chunk__91640_95834 = null;
var count__91641_95835 = (0);
var i__91642_95836 = (0);
while(true){
if((i__91642_95836 < count__91641_95835)){
var i_95837 = chunk__91640_95834.cljs$core$IIndexed$_nth$arity$2(null,i__91642_95836);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),com.wsscode.pathom.misc.vconj(base_path,i_95837,o_95832)),e);


var G__95838 = seq__91639_95833;
var G__95839 = chunk__91640_95834;
var G__95840 = count__91641_95835;
var G__95841 = (i__91642_95836 + (1));
seq__91639_95833 = G__95838;
chunk__91640_95834 = G__95839;
count__91641_95835 = G__95840;
i__91642_95836 = G__95841;
continue;
} else {
var temp__5720__auto___95842__$1 = cljs.core.seq(seq__91639_95833);
if(temp__5720__auto___95842__$1){
var seq__91639_95843__$1 = temp__5720__auto___95842__$1;
if(cljs.core.chunked_seq_QMARK_(seq__91639_95843__$1)){
var c__4550__auto___95844 = cljs.core.chunk_first(seq__91639_95843__$1);
var G__95845 = cljs.core.chunk_rest(seq__91639_95843__$1);
var G__95846 = c__4550__auto___95844;
var G__95847 = cljs.core.count(c__4550__auto___95844);
var G__95848 = (0);
seq__91639_95833 = G__95845;
chunk__91640_95834 = G__95846;
count__91641_95835 = G__95847;
i__91642_95836 = G__95848;
continue;
} else {
var i_95849 = cljs.core.first(seq__91639_95843__$1);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),com.wsscode.pathom.misc.vconj(base_path,i_95849,o_95832)),e);


var G__95852 = cljs.core.next(seq__91639_95843__$1);
var G__95853 = null;
var G__95854 = (0);
var G__95855 = (0);
seq__91639_95833 = G__95852;
chunk__91640_95834 = G__95853;
count__91641_95835 = G__95854;
i__91642_95836 = G__95855;
continue;
}
} else {
}
}
break;
}

var G__95856 = cljs.core.next(seq__91638_95826__$1);
var G__95857 = null;
var G__95858 = (0);
var G__95859 = (0);
seq__91638_95789 = G__95856;
chunk__91643_95790 = G__95857;
count__91644_95791 = G__95858;
i__91645_95792 = G__95859;
continue;
}
} else {
}
}
break;
}

return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(item_count,cljs.core.zipmap(output_SINGLEQUOTE_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882))));
});
com.wsscode.pathom.connect.group_input_indexes = (function com$wsscode$pathom$connect$group_input_indexes(inputs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__91650){
var vec__91651 = p__91650;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91651,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__91651,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,input,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),i);
}),cljs.core.PersistentArrayMap.EMPTY,inputs);
});
com.wsscode.pathom.connect.parallel_batch = (function com$wsscode$pathom$connect$parallel_batch(p__91658){
var map__91659 = p__91658;
var map__91659__$1 = (((((!((map__91659 == null))))?(((((map__91659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__91659):map__91659);
var env = map__91659__$1;
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91659__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91659__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__91659__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___95872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache){
return (function (state_92137){
var state_val_92138 = (state_92137[(1)]);
if((state_val_92138 === (121))){
var inst_92053 = cljs.core.PersistentHashMap.EMPTY;
var state_92137__$1 = state_92137;
var statearr_92139_95873 = state_92137__$1;
(statearr_92139_95873[(2)] = inst_92053);

(statearr_92139_95873[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (65))){
var inst_91851 = (state_92137[(7)]);
var inst_91855 = cljs.core.chunk_first(inst_91851);
var inst_91856 = cljs.core.chunk_rest(inst_91851);
var inst_91857 = cljs.core.count(inst_91855);
var inst_91818 = inst_91856;
var inst_91819 = inst_91855;
var inst_91820 = inst_91857;
var inst_91821 = (0);
var state_92137__$1 = (function (){var statearr_92140 = state_92137;
(statearr_92140[(8)] = inst_91819);

(statearr_92140[(9)] = inst_91820);

(statearr_92140[(10)] = inst_91818);

(statearr_92140[(11)] = inst_91821);

return statearr_92140;
})();
var statearr_92141_95875 = state_92137__$1;
(statearr_92141_95875[(2)] = null);

(statearr_92141_95875[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (70))){
var inst_91851 = (state_92137[(7)]);
var inst_91881 = (state_92137[(2)]);
var inst_91882 = cljs.core.next(inst_91851);
var inst_91818 = inst_91882;
var inst_91819 = null;
var inst_91820 = (0);
var inst_91821 = (0);
var state_92137__$1 = (function (){var statearr_92142 = state_92137;
(statearr_92142[(12)] = inst_91881);

(statearr_92142[(8)] = inst_91819);

(statearr_92142[(9)] = inst_91820);

(statearr_92142[(10)] = inst_91818);

(statearr_92142[(11)] = inst_91821);

return statearr_92142;
})();
var statearr_92143_95876 = state_92137__$1;
(statearr_92143_95876[(2)] = null);

(statearr_92143_95876[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (62))){
var inst_91851 = (state_92137[(7)]);
var inst_91853 = cljs.core.chunked_seq_QMARK_(inst_91851);
var state_92137__$1 = state_92137;
if(inst_91853){
var statearr_92144_95877 = state_92137__$1;
(statearr_92144_95877[(1)] = (65));

} else {
var statearr_92145_95878 = state_92137__$1;
(statearr_92145_95878[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (74))){
var inst_91694 = (state_92137[(13)]);
var inst_91688 = (state_92137[(14)]);
var inst_91691 = (state_92137[(15)]);
var inst_91895 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91896 = [inst_91688,inst_91691,inst_91694];
var inst_91897 = (new cljs.core.PersistentVector(null,3,(5),inst_91895,inst_91896,null));
var inst_91898 = com.wsscode.pathom.core.cache_read(env,inst_91897);
var state_92137__$1 = state_92137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92137__$1,(77),inst_91898);
} else {
if((state_val_92138 === (110))){
var state_92137__$1 = state_92137;
var statearr_92146_95879 = state_92137__$1;
(statearr_92146_95879[(2)] = null);

(statearr_92146_95879[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (130))){
var inst_92082 = (state_92137[(16)]);
var inst_92092 = cljs.core.async.close_BANG_(inst_92082);
var state_92137__$1 = state_92137;
var statearr_92147_95880 = state_92137__$1;
(statearr_92147_95880[(2)] = inst_92092);

(statearr_92147_95880[(1)] = (131));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (128))){
var inst_92098 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
var statearr_92148_95883 = state_92137__$1;
(statearr_92148_95883[(2)] = inst_92098);

(statearr_92148_95883[(1)] = (125));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (7))){
var inst_91682 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
if(cljs.core.truth_(inst_91682)){
var statearr_92149_95885 = state_92137__$1;
(statearr_92149_95885[(1)] = (11));

} else {
var statearr_92150_95886 = state_92137__$1;
(statearr_92150_95886[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (59))){
var inst_91836 = (state_92137[(17)]);
var state_92137__$1 = state_92137;
var statearr_92151_95897 = state_92137__$1;
(statearr_92151_95897[(2)] = inst_91836);

(statearr_92151_95897[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (86))){
var state_92137__$1 = state_92137;
var statearr_92152_95898 = state_92137__$1;
(statearr_92152_95898[(2)] = true);

(statearr_92152_95898[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (20))){
var inst_91712 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
var statearr_92156_95899 = state_92137__$1;
(statearr_92156_95899[(2)] = inst_91712);

(statearr_92156_95899[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (72))){
var inst_91874 = cljs.core.PersistentHashMap.EMPTY;
var state_92137__$1 = state_92137;
var statearr_92157_95900 = state_92137__$1;
(statearr_92157_95900[(2)] = inst_91874);

(statearr_92157_95900[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (58))){
var inst_91819 = (state_92137[(8)]);
var inst_91820 = (state_92137[(9)]);
var inst_91818 = (state_92137[(10)]);
var inst_91821 = (state_92137[(11)]);
var inst_91847 = (state_92137[(2)]);
var inst_91848 = (inst_91821 + (1));
var tmp92153 = inst_91819;
var tmp92154 = inst_91820;
var tmp92155 = inst_91818;
var inst_91818__$1 = tmp92155;
var inst_91819__$1 = tmp92153;
var inst_91820__$1 = tmp92154;
var inst_91821__$1 = inst_91848;
var state_92137__$1 = (function (){var statearr_92158 = state_92137;
(statearr_92158[(8)] = inst_91819__$1);

(statearr_92158[(9)] = inst_91820__$1);

(statearr_92158[(10)] = inst_91818__$1);

(statearr_92158[(18)] = inst_91847);

(statearr_92158[(11)] = inst_91821__$1);

return statearr_92158;
})();
var statearr_92159_95902 = state_92137__$1;
(statearr_92159_95902[(2)] = null);

(statearr_92159_95902[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (60))){
var inst_91840 = cljs.core.PersistentHashMap.EMPTY;
var state_92137__$1 = state_92137;
var statearr_92160_95904 = state_92137__$1;
(statearr_92160_95904[(2)] = inst_91840);

(statearr_92160_95904[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (27))){
var inst_91742 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
var statearr_92161_95905 = state_92137__$1;
(statearr_92161_95905[(2)] = inst_91742);

(statearr_92161_95905[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (1))){
var state_92137__$1 = state_92137;
var statearr_92162_95906 = state_92137__$1;
(statearr_92162_95906[(2)] = null);

(statearr_92162_95906[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (69))){
var inst_91869 = (state_92137[(19)]);
var inst_91879 = cljs.core.async.close_BANG_(inst_91869);
var state_92137__$1 = state_92137;
var statearr_92163_95907 = state_92137__$1;
(statearr_92163_95907[(2)] = inst_91879);

(statearr_92163_95907[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (101))){
var inst_91983 = (state_92137[(2)]);
var inst_91984 = com.wsscode.async.async_cljs.throw_err(inst_91983);
var state_92137__$1 = state_92137;
var statearr_92164_95908 = state_92137__$1;
(statearr_92164_95908[(2)] = inst_91984);

(statearr_92164_95908[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (24))){
var inst_91745 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
if(cljs.core.truth_(inst_91745)){
var statearr_92165_95909 = state_92137__$1;
(statearr_92165_95909[(1)] = (28));

} else {
var statearr_92166_95910 = state_92137__$1;
(statearr_92166_95910[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (102))){
var inst_91979 = (state_92137[(20)]);
var inst_91988 = com.wsscode.async.async_cljs.promise__GT_chan(inst_91979);
var state_92137__$1 = state_92137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92137__$1,(105),inst_91988);
} else {
if((state_val_92138 === (135))){
var inst_91694 = (state_92137[(13)]);
var inst_91688 = (state_92137[(14)]);
var inst_91691 = (state_92137[(15)]);
var inst_92108 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_92109 = [inst_91688,inst_91691,inst_91694];
var inst_92110 = (new cljs.core.PersistentVector(null,3,(5),inst_92108,inst_92109,null));
var inst_92111 = com.wsscode.pathom.core.cache_read(env,inst_92110);
var state_92137__$1 = state_92137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92137__$1,(138),inst_92111);
} else {
if((state_val_92138 === (55))){
var inst_91890 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
var statearr_92167_95913 = state_92137__$1;
(statearr_92167_95913[(2)] = inst_91890);

(statearr_92167_95913[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (85))){
var inst_91958 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
if(cljs.core.truth_(inst_91958)){
var statearr_92168_95915 = state_92137__$1;
(statearr_92168_95915[(1)] = (89));

} else {
var statearr_92169_95916 = state_92137__$1;
(statearr_92169_95916[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (39))){
var inst_91787 = (state_92137[(2)]);
var inst_91788 = com.wsscode.async.async_cljs.throw_err(inst_91787);
var state_92137__$1 = state_92137;
var statearr_92170_95927 = state_92137__$1;
(statearr_92170_95927[(2)] = inst_91788);


cljs.core.async.impl.ioc_helpers.process_exception(state_92137__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (88))){
var inst_91955 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
var statearr_92171_95928 = state_92137__$1;
(statearr_92171_95928[(2)] = inst_91955);

(statearr_92171_95928[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (46))){
var state_92137__$1 = state_92137;
var statearr_92172_95929 = state_92137__$1;
(statearr_92172_95929[(2)] = null);

(statearr_92172_95929[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (4))){
var inst_91666 = (state_92137[(21)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_92137,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_91666__$1 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_91668 = (inst_91666__$1 == null);
var inst_91669 = cljs.core.not(inst_91668);
var state_92137__$1 = (function (){var statearr_92173 = state_92137;
(statearr_92173[(21)] = inst_91666__$1);

return statearr_92173;
})();
if(inst_91669){
var statearr_92174_95931 = state_92137__$1;
(statearr_92174_95931[(1)] = (5));

} else {
var statearr_92175_95932 = state_92137__$1;
(statearr_92175_95932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (77))){
var inst_91900 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
var statearr_92179_95934 = state_92137__$1;
(statearr_92179_95934[(2)] = inst_91900);

(statearr_92179_95934[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (106))){
var inst_91979 = (state_92137[(20)]);
var state_92137__$1 = state_92137;
var statearr_92180_95935 = state_92137__$1;
(statearr_92180_95935[(2)] = inst_91979);

(statearr_92180_95935[(1)] = (108));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (119))){
var inst_92033 = (state_92137[(22)]);
var inst_92032 = (state_92137[(23)]);
var inst_92034 = (state_92137[(24)]);
var inst_92031 = (state_92137[(25)]);
var inst_92060 = (state_92137[(2)]);
var inst_92061 = (inst_92034 + (1));
var tmp92176 = inst_92033;
var tmp92177 = inst_92032;
var tmp92178 = inst_92031;
var inst_92031__$1 = tmp92178;
var inst_92032__$1 = tmp92177;
var inst_92033__$1 = tmp92176;
var inst_92034__$1 = inst_92061;
var state_92137__$1 = (function (){var statearr_92181 = state_92137;
(statearr_92181[(22)] = inst_92033__$1);

(statearr_92181[(23)] = inst_92032__$1);

(statearr_92181[(24)] = inst_92034__$1);

(statearr_92181[(25)] = inst_92031__$1);

(statearr_92181[(26)] = inst_92060);

return statearr_92181;
})();
var statearr_92182_95936 = state_92137__$1;
(statearr_92182_95936[(2)] = null);

(statearr_92182_95936[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (95))){
var inst_92003 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
var statearr_92183_95937 = state_92137__$1;
(statearr_92183_95937[(2)] = inst_92003);

(statearr_92183_95937[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (54))){
var inst_91851 = (state_92137[(7)]);
var inst_91818 = (state_92137[(10)]);
var inst_91851__$1 = cljs.core.seq(inst_91818);
var state_92137__$1 = (function (){var statearr_92184 = state_92137;
(statearr_92184[(7)] = inst_91851__$1);

return statearr_92184;
})();
if(inst_91851__$1){
var statearr_92185_95941 = state_92137__$1;
(statearr_92185_95941[(1)] = (62));

} else {
var statearr_92186_95942 = state_92137__$1;
(statearr_92186_95942[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (92))){
var state_92137__$1 = state_92137;
var statearr_92187_95943 = state_92137__$1;
(statearr_92187_95943[(2)] = null);

(statearr_92187_95943[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (141))){
var inst_92135 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_92137__$1,inst_92135);
} else {
if((state_val_92138 === (137))){
var inst_92122 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
var statearr_92188_95944 = state_92137__$1;
(statearr_92188_95944[(2)] = inst_92122);

(statearr_92188_95944[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (104))){
var inst_91998 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
var statearr_92189_95945 = state_92137__$1;
(statearr_92189_95945[(2)] = inst_91998);

(statearr_92189_95945[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (15))){
var inst_91694 = (state_92137[(13)]);
var inst_91688 = (state_92137[(14)]);
var inst_91691 = (state_92137[(15)]);
var inst_91915 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91916 = [inst_91688,inst_91691,inst_91694];
var inst_91917 = (new cljs.core.PersistentVector(null,3,(5),inst_91915,inst_91916,null));
var inst_91918 = com.wsscode.pathom.core.cache_contains_QMARK_(env,inst_91917);
var state_92137__$1 = state_92137;
if(inst_91918){
var statearr_92190_95949 = state_92137__$1;
(statearr_92190_95949[(1)] = (78));

} else {
var statearr_92191_95950 = state_92137__$1;
(statearr_92191_95950[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (48))){
var inst_91694 = (state_92137[(13)]);
var inst_91688 = (state_92137[(14)]);
var inst_91751 = (state_92137[(27)]);
var inst_91725 = (state_92137[(28)]);
var inst_91752 = (state_92137[(29)]);
var inst_91697 = (state_92137[(30)]);
var inst_91693 = (state_92137[(31)]);
var inst_91800 = (state_92137[(32)]);
var inst_91758 = (state_92137[(33)]);
var inst_91750 = (state_92137[(34)]);
var inst_91801 = (state_92137[(35)]);
var inst_91793 = (state_92137[(36)]);
var inst_91687 = (state_92137[(37)]);
var inst_91701 = (state_92137[(38)]);
var inst_91691 = (state_92137[(15)]);
var inst_91726 = (state_92137[(39)]);
var inst_91798 = (state_92137[(40)]);
var inst_91689 = (state_92137[(41)]);
var inst_91808 = (function (){var input = inst_91689;
var items_map = inst_91726;
var cached = inst_91751;
var cached_set = inst_91801;
var linked_results = inst_91800;
var key = inst_91693;
var channels = inst_91758;
var _ = inst_91798;
var params = inst_91694;
var uncached = inst_91752;
var e = inst_91691;
var resolver_sym = inst_91688;
var trace_data = inst_91697;
var valid_inputs = inst_91725;
var batch_result = inst_91793;
var trace_id__27094__auto__ = inst_91701;
var map__91665 = inst_91687;
var map__91714 = inst_91750;
return ((function (input,items_map,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,trace_id__27094__auto__,map__91665,map__91714,inst_91694,inst_91688,inst_91751,inst_91725,inst_91752,inst_91697,inst_91693,inst_91800,inst_91758,inst_91750,inst_91801,inst_91793,inst_91687,inst_91701,inst_91691,inst_91726,inst_91798,inst_91689,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap(cache){
var path__$1 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),(cljs.core.count(path) - (2)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path__$1,input,items_map,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,trace_id__27094__auto__,map__91665,map__91714,inst_91694,inst_91688,inst_91751,inst_91725,inst_91752,inst_91697,inst_91693,inst_91800,inst_91758,inst_91750,inst_91801,inst_91793,inst_91687,inst_91701,inst_91691,inst_91726,inst_91798,inst_91689,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce(cache__$1,p__92192){
var vec__92193 = p__92192;
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92193,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92193,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__92193,item,result,path__$1,input,items_map,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,trace_id__27094__auto__,map__91665,map__91714,inst_91694,inst_91688,inst_91751,inst_91725,inst_91752,inst_91697,inst_91693,inst_91800,inst_91758,inst_91750,inst_91801,inst_91793,inst_91687,inst_91701,inst_91691,inst_91726,inst_91798,inst_91689,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce_$_entity_path_inner_reduce(cache__$2,index){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cache__$2,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,index),((function (vec__92193,item,result,path__$1,input,items_map,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,trace_id__27094__auto__,map__91665,map__91714,inst_91694,inst_91688,inst_91751,inst_91725,inst_91752,inst_91697,inst_91693,inst_91800,inst_91758,inst_91750,inst_91801,inst_91793,inst_91687,inst_91701,inst_91691,inst_91726,inst_91798,inst_91689,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__91657_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result,p1__91657_SHARP_], 0));
});})(vec__92193,item,result,path__$1,input,items_map,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,trace_id__27094__auto__,map__91665,map__91714,inst_91694,inst_91688,inst_91751,inst_91725,inst_91752,inst_91697,inst_91693,inst_91800,inst_91758,inst_91750,inst_91801,inst_91793,inst_91687,inst_91701,inst_91691,inst_91726,inst_91798,inst_91689,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache))
);
});})(vec__92193,item,result,path__$1,input,items_map,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,trace_id__27094__auto__,map__91665,map__91714,inst_91694,inst_91688,inst_91751,inst_91725,inst_91752,inst_91697,inst_91693,inst_91800,inst_91758,inst_91750,inst_91801,inst_91793,inst_91687,inst_91701,inst_91691,inst_91726,inst_91798,inst_91689,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache))
,cache__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_map,item));
});})(path__$1,input,items_map,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,trace_id__27094__auto__,map__91665,map__91714,inst_91694,inst_91688,inst_91751,inst_91725,inst_91752,inst_91697,inst_91693,inst_91800,inst_91758,inst_91750,inst_91801,inst_91793,inst_91687,inst_91701,inst_91691,inst_91726,inst_91798,inst_91689,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache))
,cache,cljs.core.zipmap(uncached,batch_result));
});
;})(input,items_map,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,trace_id__27094__auto__,map__91665,map__91714,inst_91694,inst_91688,inst_91751,inst_91725,inst_91752,inst_91697,inst_91693,inst_91800,inst_91758,inst_91750,inst_91801,inst_91793,inst_91687,inst_91701,inst_91691,inst_91726,inst_91798,inst_91689,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_91809 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(entity_path_cache,inst_91808);
var state_92137__$1 = state_92137;
var statearr_92196_95963 = state_92137__$1;
(statearr_92196_95963[(2)] = inst_91809);

(statearr_92196_95963[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (50))){
var inst_91800 = (state_92137[(32)]);
var inst_91812 = (state_92137[(2)]);
var inst_91817 = cljs.core.seq(inst_91800);
var inst_91818 = inst_91817;
var inst_91819 = null;
var inst_91820 = (0);
var inst_91821 = (0);
var state_92137__$1 = (function (){var statearr_92197 = state_92137;
(statearr_92197[(8)] = inst_91819);

(statearr_92197[(42)] = inst_91812);

(statearr_92197[(9)] = inst_91820);

(statearr_92197[(10)] = inst_91818);

(statearr_92197[(11)] = inst_91821);

return statearr_92197;
})();
var statearr_92198_95964 = state_92137__$1;
(statearr_92198_95964[(2)] = null);

(statearr_92198_95964[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (116))){
var inst_92103 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
var statearr_92199_95965 = state_92137__$1;
(statearr_92199_95965[(2)] = inst_92103);

(statearr_92199_95965[(1)] = (113));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (75))){
var inst_91800 = (state_92137[(32)]);
var inst_91691 = (state_92137[(15)]);
var inst_91902 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91903 = cljs.core.PersistentHashMap.EMPTY;
var inst_91904 = [null,inst_91903];
var inst_91905 = (new cljs.core.PersistentVector(null,2,(5),inst_91902,inst_91904,null));
var inst_91906 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_91800,inst_91691,inst_91905);
var inst_91907 = cljs.core.second(inst_91906);
var state_92137__$1 = state_92137;
var statearr_92200_95968 = state_92137__$1;
(statearr_92200_95968[(2)] = inst_91907);

(statearr_92200_95968[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (99))){
var inst_91979 = (state_92137[(20)]);
var inst_91986 = com.wsscode.async.async_cljs.promise_QMARK_(inst_91979);
var state_92137__$1 = state_92137;
if(cljs.core.truth_(inst_91986)){
var statearr_92201_95969 = state_92137__$1;
(statearr_92201_95969[(1)] = (102));

} else {
var statearr_92202_95970 = state_92137__$1;
(statearr_92202_95970[(1)] = (103));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (21))){
var inst_91694 = (state_92137[(13)]);
var inst_91715 = (state_92137[(43)]);
var inst_91688 = (state_92137[(14)]);
var inst_91725 = (state_92137[(28)]);
var inst_91697 = (state_92137[(30)]);
var inst_91693 = (state_92137[(31)]);
var inst_91729 = (state_92137[(44)]);
var inst_91687 = (state_92137[(37)]);
var inst_91701 = (state_92137[(38)]);
var inst_91719 = (state_92137[(45)]);
var inst_91691 = (state_92137[(15)]);
var inst_91726 = (state_92137[(39)]);
var inst_91689 = (state_92137[(41)]);
var inst_91723 = (state_92137[(2)]);
var inst_91724 = com.wsscode.async.async_cljs.throw_err(inst_91723);
var inst_91725__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_91715,inst_91719,inst_91724);
var inst_91726__$1 = com.wsscode.pathom.connect.group_input_indexes(inst_91725__$1);
var inst_91727 = (function (){var input = inst_91689;
var items_map = inst_91726__$1;
var key = inst_91693;
var params = inst_91694;
var e = inst_91691;
var resolver_sym = inst_91688;
var trace_data = inst_91697;
var valid_inputs = inst_91725__$1;
var trace_id__27094__auto__ = inst_91701;
var map__91665 = inst_91687;
return ((function (input,items_map,key,params,e,resolver_sym,trace_data,valid_inputs,trace_id__27094__auto__,map__91665,inst_91694,inst_91715,inst_91688,inst_91725,inst_91697,inst_91693,inst_91729,inst_91687,inst_91701,inst_91719,inst_91691,inst_91726,inst_91689,inst_91723,inst_91724,inst_91725__$1,inst_91726__$1,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__91656_SHARP_){
return com.wsscode.pathom.core.cache_contains_QMARK_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,p1__91656_SHARP_,params], null));
});
;})(input,items_map,key,params,e,resolver_sym,trace_data,valid_inputs,trace_id__27094__auto__,map__91665,inst_91694,inst_91715,inst_91688,inst_91725,inst_91697,inst_91693,inst_91729,inst_91687,inst_91701,inst_91719,inst_91691,inst_91726,inst_91689,inst_91723,inst_91724,inst_91725__$1,inst_91726__$1,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_91728 = cljs.core.keys(inst_91726__$1);
var inst_91729__$1 = cljs.core.group_by(inst_91727,inst_91728);
var inst_91731 = (inst_91729__$1 == null);
var inst_91732 = cljs.core.not(inst_91731);
var state_92137__$1 = (function (){var statearr_92203 = state_92137;
(statearr_92203[(28)] = inst_91725__$1);

(statearr_92203[(44)] = inst_91729__$1);

(statearr_92203[(39)] = inst_91726__$1);

return statearr_92203;
})();
if(inst_91732){
var statearr_92204_95976 = state_92137__$1;
(statearr_92204_95976[(1)] = (22));

} else {
var statearr_92205_95977 = state_92137__$1;
(statearr_92205_95977[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (31))){
var state_92137__$1 = state_92137;
var statearr_92206_95978 = state_92137__$1;
(statearr_92206_95978[(2)] = null);

(statearr_92206_95978[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (113))){
var inst_91691 = (state_92137[(15)]);
var inst_92014 = (state_92137[(46)]);
var inst_92105 = (state_92137[(2)]);
var inst_92106 = cljs.core.contains_QMARK_(inst_92014,inst_91691);
var state_92137__$1 = (function (){var statearr_92207 = state_92137;
(statearr_92207[(47)] = inst_92105);

return statearr_92207;
})();
if(inst_92106){
var statearr_92208_95980 = state_92137__$1;
(statearr_92208_95980[(1)] = (135));

} else {
var statearr_92209_95982 = state_92137__$1;
(statearr_92209_95982[(1)] = (136));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (32))){
var state_92137__$1 = state_92137;
var statearr_92210_95984 = state_92137__$1;
(statearr_92210_95984[(2)] = null);

(statearr_92210_95984[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (136))){
var inst_92013 = (state_92137[(48)]);
var inst_91691 = (state_92137[(15)]);
var inst_92115 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_92116 = cljs.core.PersistentHashMap.EMPTY;
var inst_92117 = [null,inst_92116];
var inst_92118 = (new cljs.core.PersistentVector(null,2,(5),inst_92115,inst_92117,null));
var inst_92119 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_92013,inst_91691,inst_92118);
var inst_92120 = cljs.core.second(inst_92119);
var state_92137__$1 = state_92137;
var statearr_92211_95985 = state_92137__$1;
(statearr_92211_95985[(2)] = inst_92120);

(statearr_92211_95985[(1)] = (137));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (139))){
var inst_92131 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_92137__$1 = state_92137;
var statearr_92212_95986 = state_92137__$1;
(statearr_92212_95986[(2)] = inst_92131);

(statearr_92212_95986[(1)] = (141));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (40))){
var inst_91770 = (state_92137[(2)]);
var inst_91771 = com.wsscode.async.async_cljs.throw_err(inst_91770);
var state_92137__$1 = state_92137;
var statearr_92213_95989 = state_92137__$1;
(statearr_92213_95989[(2)] = inst_91771);

(statearr_92213_95989[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (129))){
var inst_92083 = (state_92137[(49)]);
var state_92137__$1 = state_92137;
if(cljs.core.truth_(inst_92083)){
var statearr_92214_95990 = state_92137__$1;
(statearr_92214_95990[(1)] = (132));

} else {
var statearr_92215_95991 = state_92137__$1;
(statearr_92215_95991[(1)] = (133));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (91))){
var inst_91694 = (state_92137[(13)]);
var inst_91964 = (state_92137[(50)]);
var inst_91688 = (state_92137[(14)]);
var inst_91963 = (state_92137[(51)]);
var inst_91697 = (state_92137[(30)]);
var inst_91693 = (state_92137[(31)]);
var inst_91965 = (state_92137[(52)]);
var inst_91687 = (state_92137[(37)]);
var inst_91691 = (state_92137[(15)]);
var inst_91938 = (state_92137[(53)]);
var inst_91939 = (state_92137[(54)]);
var inst_91689 = (state_92137[(41)]);
var inst_91963__$1 = (state_92137[(2)]);
var inst_91964__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_91963__$1,true);
var inst_91965__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_91963__$1,false);
var inst_91966 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_91967 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_91965__$1];
var inst_91968 = cljs.core.PersistentHashMap.fromArrays(inst_91966,inst_91967);
var inst_91969 = com.wsscode.pathom.trace.trace(env,inst_91968);
var inst_91970 = (function (){var input = inst_91689;
var items_map = inst_91939;
var cached = inst_91964__$1;
var key = inst_91693;
var _ = inst_91969;
var params = inst_91694;
var uncached = inst_91965__$1;
var e = inst_91691;
var resolver_sym = inst_91688;
var trace_data = inst_91697;
var valid_inputs = inst_91938;
var map__91665 = inst_91687;
var map__91927 = inst_91963__$1;
return ((function (input,items_map,cached,key,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,map__91665,map__91927,inst_91694,inst_91964,inst_91688,inst_91963,inst_91697,inst_91693,inst_91965,inst_91687,inst_91691,inst_91938,inst_91939,inst_91689,inst_91963__$1,inst_91964__$1,inst_91965__$1,inst_91966,inst_91967,inst_91968,inst_91969,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache){
return (function (resolver_input){
var ch = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.core.cache_hit(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,resolver_input,params], null),ch);

return ch;
});
;})(input,items_map,cached,key,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,map__91665,map__91927,inst_91694,inst_91964,inst_91688,inst_91963,inst_91697,inst_91693,inst_91965,inst_91687,inst_91691,inst_91938,inst_91939,inst_91689,inst_91963__$1,inst_91964__$1,inst_91965__$1,inst_91966,inst_91967,inst_91968,inst_91969,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_91971 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_91970,inst_91965__$1);
var inst_91972 = cljs.core.seq(inst_91965__$1);
var state_92137__$1 = (function (){var statearr_92216 = state_92137;
(statearr_92216[(55)] = inst_91971);

(statearr_92216[(50)] = inst_91964__$1);

(statearr_92216[(51)] = inst_91963__$1);

(statearr_92216[(52)] = inst_91965__$1);

return statearr_92216;
})();
if(inst_91972){
var statearr_92217_95997 = state_92137__$1;
(statearr_92217_95997[(1)] = (92));

} else {
var statearr_92218_95998 = state_92137__$1;
(statearr_92218_95998[(1)] = (93));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (117))){
var inst_92049 = (state_92137[(56)]);
var state_92137__$1 = state_92137;
if(cljs.core.truth_(inst_92049)){
var statearr_92219_96000 = state_92137__$1;
(statearr_92219_96000[(1)] = (120));

} else {
var statearr_92220_96001 = state_92137__$1;
(statearr_92220_96001[(1)] = (121));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (108))){
var inst_91996 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
var statearr_92221_96002 = state_92137__$1;
(statearr_92221_96002[(2)] = inst_91996);

(statearr_92221_96002[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (56))){
var inst_91836 = (state_92137[(17)]);
var state_92137__$1 = state_92137;
if(cljs.core.truth_(inst_91836)){
var statearr_92222_96003 = state_92137__$1;
(statearr_92222_96003[(1)] = (59));

} else {
var statearr_92223_96004 = state_92137__$1;
(statearr_92223_96004[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (33))){
var inst_91751 = (state_92137[(27)]);
var inst_91752 = (state_92137[(29)]);
var inst_91758 = (state_92137[(33)]);
var inst_91793 = (state_92137[(36)]);
var inst_91793__$1 = (state_92137[(2)]);
var inst_91794 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_91795 = cljs.core.count(inst_91793__$1);
var inst_91796 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_91795];
var inst_91797 = cljs.core.PersistentHashMap.fromArrays(inst_91794,inst_91796);
var inst_91798 = com.wsscode.pathom.trace.trace(env,inst_91797);
var inst_91799 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_91758,inst_91793__$1);
var inst_91800 = cljs.core.zipmap(inst_91752,inst_91799);
var inst_91801 = cljs.core.set(inst_91751);
var inst_91802 = cljs.core.first(inst_91793__$1);
var inst_91803 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_91802);
var inst_91804 = cljs.core.count(path);
var inst_91805 = (inst_91804 >= (2));
var inst_91806 = ((inst_91803) && (inst_91805));
var state_92137__$1 = (function (){var statearr_92224 = state_92137;
(statearr_92224[(32)] = inst_91800);

(statearr_92224[(35)] = inst_91801);

(statearr_92224[(36)] = inst_91793__$1);

(statearr_92224[(40)] = inst_91798);

return statearr_92224;
})();
if(cljs.core.truth_(inst_91806)){
var statearr_92225_96008 = state_92137__$1;
(statearr_92225_96008[(1)] = (48));

} else {
var statearr_92226_96009 = state_92137__$1;
(statearr_92226_96009[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (13))){
var inst_91688 = (state_92137[(14)]);
var inst_91693 = (state_92137[(31)]);
var inst_91687 = (state_92137[(37)]);
var inst_91691 = (state_92137[(15)]);
var inst_91689 = (state_92137[(41)]);
var inst_91687__$1 = (state_92137[(2)]);
var inst_91688__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_91687__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var inst_91689__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_91687__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_91690 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var inst_91691__$1 = cljs.core.select_keys(inst_91690,inst_91689__$1);
var inst_91692 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_91693__$1 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_91692);
var inst_91694 = com.wsscode.pathom.core.params(env);
var inst_91695 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_91696 = [inst_91693__$1,inst_91688__$1,inst_91691__$1];
var inst_91697 = cljs.core.PersistentHashMap.fromArrays(inst_91695,inst_91696);
var inst_91698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_92137__$1 = (function (){var statearr_92227 = state_92137;
(statearr_92227[(13)] = inst_91694);

(statearr_92227[(14)] = inst_91688__$1);

(statearr_92227[(30)] = inst_91697);

(statearr_92227[(31)] = inst_91693__$1);

(statearr_92227[(37)] = inst_91687__$1);

(statearr_92227[(15)] = inst_91691__$1);

(statearr_92227[(41)] = inst_91689__$1);

return statearr_92227;
})();
if(cljs.core.truth_(inst_91698)){
var statearr_92228_96023 = state_92137__$1;
(statearr_92228_96023[(1)] = (14));

} else {
var statearr_92229_96024 = state_92137__$1;
(statearr_92229_96024[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (22))){
var inst_91729 = (state_92137[(44)]);
var inst_91734 = inst_91729.cljs$lang$protocol_mask$partition0$;
var inst_91735 = (inst_91734 & (64));
var inst_91736 = inst_91729.cljs$core$ISeq$;
var inst_91737 = (cljs.core.PROTOCOL_SENTINEL === inst_91736);
var inst_91738 = ((inst_91735) || (inst_91737));
var state_92137__$1 = state_92137;
if(cljs.core.truth_(inst_91738)){
var statearr_92230_96025 = state_92137__$1;
(statearr_92230_96025[(1)] = (25));

} else {
var statearr_92231_96026 = state_92137__$1;
(statearr_92231_96026[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (90))){
var inst_91942 = (state_92137[(57)]);
var state_92137__$1 = state_92137;
var statearr_92232_96029 = state_92137__$1;
(statearr_92232_96029[(2)] = inst_91942);

(statearr_92232_96029[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (109))){
var inst_92006 = (state_92137[(58)]);
var inst_91694 = (state_92137[(13)]);
var inst_91971 = (state_92137[(55)]);
var inst_91964 = (state_92137[(50)]);
var inst_91688 = (state_92137[(14)]);
var inst_91963 = (state_92137[(51)]);
var inst_92013 = (state_92137[(48)]);
var inst_91697 = (state_92137[(30)]);
var inst_91693 = (state_92137[(31)]);
var inst_91965 = (state_92137[(52)]);
var inst_92011 = (state_92137[(59)]);
var inst_91687 = (state_92137[(37)]);
var inst_91691 = (state_92137[(15)]);
var inst_91938 = (state_92137[(53)]);
var inst_91939 = (state_92137[(54)]);
var inst_92014 = (state_92137[(46)]);
var inst_91689 = (state_92137[(41)]);
var inst_92021 = (function (){var input = inst_91689;
var items_map = inst_91939;
var cached = inst_91964;
var cached_set = inst_92014;
var linked_results = inst_92013;
var key = inst_91693;
var channels = inst_91971;
var _ = inst_92011;
var params = inst_91694;
var uncached = inst_91965;
var e = inst_91691;
var resolver_sym = inst_91688;
var trace_data = inst_91697;
var valid_inputs = inst_91938;
var batch_result = inst_92006;
var map__91665 = inst_91687;
var map__91927 = inst_91963;
return ((function (input,items_map,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,map__91665,map__91927,inst_92006,inst_91694,inst_91971,inst_91964,inst_91688,inst_91963,inst_92013,inst_91697,inst_91693,inst_91965,inst_92011,inst_91687,inst_91691,inst_91938,inst_91939,inst_92014,inst_91689,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap(cache){
var path__$1 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),(cljs.core.count(path) - (2)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path__$1,input,items_map,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,map__91665,map__91927,inst_92006,inst_91694,inst_91971,inst_91964,inst_91688,inst_91963,inst_92013,inst_91697,inst_91693,inst_91965,inst_92011,inst_91687,inst_91691,inst_91938,inst_91939,inst_92014,inst_91689,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce(cache__$1,p__92233){
var vec__92234 = p__92233;
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92234,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92234,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__92234,item,result,path__$1,input,items_map,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,map__91665,map__91927,inst_92006,inst_91694,inst_91971,inst_91964,inst_91688,inst_91963,inst_92013,inst_91697,inst_91693,inst_91965,inst_92011,inst_91687,inst_91691,inst_91938,inst_91939,inst_92014,inst_91689,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce_$_entity_path_inner_reduce(cache__$2,index){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cache__$2,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,index),((function (vec__92234,item,result,path__$1,input,items_map,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,map__91665,map__91927,inst_92006,inst_91694,inst_91971,inst_91964,inst_91688,inst_91963,inst_92013,inst_91697,inst_91693,inst_91965,inst_92011,inst_91687,inst_91691,inst_91938,inst_91939,inst_92014,inst_91689,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__91657_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result,p1__91657_SHARP_], 0));
});})(vec__92234,item,result,path__$1,input,items_map,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,map__91665,map__91927,inst_92006,inst_91694,inst_91971,inst_91964,inst_91688,inst_91963,inst_92013,inst_91697,inst_91693,inst_91965,inst_92011,inst_91687,inst_91691,inst_91938,inst_91939,inst_92014,inst_91689,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache))
);
});})(vec__92234,item,result,path__$1,input,items_map,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,map__91665,map__91927,inst_92006,inst_91694,inst_91971,inst_91964,inst_91688,inst_91963,inst_92013,inst_91697,inst_91693,inst_91965,inst_92011,inst_91687,inst_91691,inst_91938,inst_91939,inst_92014,inst_91689,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache))
,cache__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_map,item));
});})(path__$1,input,items_map,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,map__91665,map__91927,inst_92006,inst_91694,inst_91971,inst_91964,inst_91688,inst_91963,inst_92013,inst_91697,inst_91693,inst_91965,inst_92011,inst_91687,inst_91691,inst_91938,inst_91939,inst_92014,inst_91689,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache))
,cache,cljs.core.zipmap(uncached,batch_result));
});
;})(input,items_map,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,map__91665,map__91927,inst_92006,inst_91694,inst_91971,inst_91964,inst_91688,inst_91963,inst_92013,inst_91697,inst_91693,inst_91965,inst_92011,inst_91687,inst_91691,inst_91938,inst_91939,inst_92014,inst_91689,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_92022 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(entity_path_cache,inst_92021);
var state_92137__$1 = state_92137;
var statearr_92237_96056 = state_92137__$1;
(statearr_92237_96056[(2)] = inst_92022);

(statearr_92237_96056[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (36))){
var inst_91766 = (state_92137[(60)]);
var inst_91752 = (state_92137[(29)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_92137,(35),new cljs.core.Keyword(null,"default","default",-1987822328),null,(34));
var inst_91766__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_91752);
var inst_91767 = com.wsscode.async.async_cljs.chan_QMARK_(inst_91766__$1);
var state_92137__$1 = (function (){var statearr_92238 = state_92137;
(statearr_92238[(60)] = inst_91766__$1);

return statearr_92238;
})();
if(inst_91767){
var statearr_92239_96057 = state_92137__$1;
(statearr_92239_96057[(1)] = (37));

} else {
var statearr_92240_96058 = state_92137__$1;
(statearr_92240_96058[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (41))){
var inst_91766 = (state_92137[(60)]);
var inst_91775 = com.wsscode.async.async_cljs.promise__GT_chan(inst_91766);
var state_92137__$1 = state_92137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92137__$1,(44),inst_91775);
} else {
if((state_val_92138 === (118))){
var inst_92048 = (state_92137[(61)]);
var inst_92058 = cljs.core.async.close_BANG_(inst_92048);
var state_92137__$1 = state_92137;
var statearr_92241_96059 = state_92137__$1;
(statearr_92241_96059[(2)] = inst_92058);

(statearr_92241_96059[(1)] = (119));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (89))){
var inst_91942 = (state_92137[(57)]);
var inst_91960 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_91942);
var state_92137__$1 = state_92137;
var statearr_92242_96060 = state_92137__$1;
(statearr_92242_96060[(2)] = inst_91960);

(statearr_92242_96060[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (100))){
var inst_92000 = (state_92137[(2)]);
var inst_92001 = com.wsscode.async.async_cljs.throw_err(inst_92000);
var state_92137__$1 = state_92137;
var statearr_92243_96061 = state_92137__$1;
(statearr_92243_96061[(2)] = inst_92001);


cljs.core.async.impl.ioc_helpers.process_exception(state_92137__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (131))){
var inst_92064 = (state_92137[(62)]);
var inst_92094 = (state_92137[(2)]);
var inst_92095 = cljs.core.next(inst_92064);
var inst_92031 = inst_92095;
var inst_92032 = null;
var inst_92033 = (0);
var inst_92034 = (0);
var state_92137__$1 = (function (){var statearr_92244 = state_92137;
(statearr_92244[(22)] = inst_92033);

(statearr_92244[(23)] = inst_92032);

(statearr_92244[(24)] = inst_92034);

(statearr_92244[(63)] = inst_92094);

(statearr_92244[(25)] = inst_92031);

return statearr_92244;
})();
var statearr_92245_96065 = state_92137__$1;
(statearr_92245_96065[(2)] = null);

(statearr_92245_96065[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (122))){
var inst_92048 = (state_92137[(61)]);
var inst_92055 = (state_92137[(2)]);
var inst_92056 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_92048,inst_92055);
var state_92137__$1 = state_92137;
var statearr_92246_96066 = state_92137__$1;
(statearr_92246_96066[(2)] = inst_92056);

(statearr_92246_96066[(1)] = (119));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (43))){
var inst_91785 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
var statearr_92247_96067 = state_92137__$1;
(statearr_92247_96067[(2)] = inst_91785);

(statearr_92247_96067[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (61))){
var inst_91835 = (state_92137[(64)]);
var inst_91842 = (state_92137[(2)]);
var inst_91843 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_91835,inst_91842);
var state_92137__$1 = state_92137;
var statearr_92248_96068 = state_92137__$1;
(statearr_92248_96068[(2)] = inst_91843);

(statearr_92248_96068[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (29))){
var inst_91729 = (state_92137[(44)]);
var state_92137__$1 = state_92137;
var statearr_92249_96069 = state_92137__$1;
(statearr_92249_96069[(2)] = inst_91729);

(statearr_92249_96069[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (44))){
var inst_91777 = (state_92137[(2)]);
var inst_91778 = com.wsscode.async.async_cljs.consumer_pair(inst_91777);
var state_92137__$1 = state_92137;
var statearr_92250_96073 = state_92137__$1;
(statearr_92250_96073[(2)] = inst_91778);

(statearr_92250_96073[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (93))){
var state_92137__$1 = state_92137;
var statearr_92251_96074 = state_92137__$1;
(statearr_92251_96074[(2)] = null);

(statearr_92251_96074[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (6))){
var state_92137__$1 = state_92137;
var statearr_92252_96075 = state_92137__$1;
(statearr_92252_96075[(2)] = false);

(statearr_92252_96075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (111))){
var inst_92013 = (state_92137[(48)]);
var inst_92025 = (state_92137[(2)]);
var inst_92030 = cljs.core.seq(inst_92013);
var inst_92031 = inst_92030;
var inst_92032 = null;
var inst_92033 = (0);
var inst_92034 = (0);
var state_92137__$1 = (function (){var statearr_92253 = state_92137;
(statearr_92253[(22)] = inst_92033);

(statearr_92253[(23)] = inst_92032);

(statearr_92253[(24)] = inst_92034);

(statearr_92253[(65)] = inst_92025);

(statearr_92253[(25)] = inst_92031);

return statearr_92253;
})();
var statearr_92254_96076 = state_92137__$1;
(statearr_92254_96076[(2)] = null);

(statearr_92254_96076[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (28))){
var inst_91729 = (state_92137[(44)]);
var inst_91747 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_91729);
var state_92137__$1 = state_92137;
var statearr_92255_96077 = state_92137__$1;
(statearr_92255_96077[(2)] = inst_91747);

(statearr_92255_96077[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (134))){
var inst_92082 = (state_92137[(16)]);
var inst_92089 = (state_92137[(2)]);
var inst_92090 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_92082,inst_92089);
var state_92137__$1 = state_92137;
var statearr_92256_96078 = state_92137__$1;
(statearr_92256_96078[(2)] = inst_92090);

(statearr_92256_96078[(1)] = (131));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (64))){
var inst_91888 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
var statearr_92257_96079 = state_92137__$1;
(statearr_92257_96079[(2)] = inst_91888);

(statearr_92257_96079[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (103))){
var state_92137__$1 = state_92137;
var statearr_92258_96080 = state_92137__$1;
(statearr_92258_96080[(1)] = (106));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (51))){
var inst_91820 = (state_92137[(9)]);
var inst_91821 = (state_92137[(11)]);
var inst_91823 = (inst_91821 < inst_91820);
var inst_91824 = inst_91823;
var state_92137__$1 = state_92137;
if(cljs.core.truth_(inst_91824)){
var statearr_92260_96082 = state_92137__$1;
(statearr_92260_96082[(1)] = (53));

} else {
var statearr_92261_96083 = state_92137__$1;
(statearr_92261_96083[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (25))){
var state_92137__$1 = state_92137;
var statearr_92262_96084 = state_92137__$1;
(statearr_92262_96084[(2)] = true);

(statearr_92262_96084[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (34))){
var inst_91790 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
var statearr_92263_96085 = state_92137__$1;
(statearr_92263_96085[(2)] = inst_91790);

(statearr_92263_96085[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (125))){
var inst_92101 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
var statearr_92264_96086 = state_92137__$1;
(statearr_92264_96086[(2)] = inst_92101);

(statearr_92264_96086[(1)] = (116));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (17))){
var inst_91694 = (state_92137[(13)]);
var inst_91688 = (state_92137[(14)]);
var inst_91691 = (state_92137[(15)]);
var inst_91707 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91708 = [inst_91688,inst_91691,inst_91694];
var inst_91709 = (new cljs.core.PersistentVector(null,3,(5),inst_91707,inst_91708,null));
var inst_91710 = com.wsscode.pathom.core.cache_read(env,inst_91709);
var state_92137__$1 = state_92137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92137__$1,(20),inst_91710);
} else {
if((state_val_92138 === (3))){
var inst_91661 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
var statearr_92265_96090 = state_92137__$1;
(statearr_92265_96090[(2)] = inst_91661);


cljs.core.async.impl.ioc_helpers.process_exception(state_92137__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (12))){
var inst_91666 = (state_92137[(21)]);
var state_92137__$1 = state_92137;
var statearr_92266_96091 = state_92137__$1;
(statearr_92266_96091[(2)] = inst_91666);

(statearr_92266_96091[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (2))){
var inst_92128 = (state_92137[(66)]);
var inst_92128__$1 = (state_92137[(2)]);
var inst_92129 = (inst_92128__$1 == null);
var state_92137__$1 = (function (){var statearr_92267 = state_92137;
(statearr_92267[(66)] = inst_92128__$1);

return statearr_92267;
})();
if(cljs.core.truth_(inst_92129)){
var statearr_92268_96092 = state_92137__$1;
(statearr_92268_96092[(1)] = (139));

} else {
var statearr_92269_96093 = state_92137__$1;
(statearr_92269_96093[(1)] = (140));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (66))){
var inst_91851 = (state_92137[(7)]);
var inst_91870 = (state_92137[(67)]);
var inst_91866 = cljs.core.first(inst_91851);
var inst_91867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_91866,(0),null);
var inst_91868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_91866,(1),null);
var inst_91869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_91868,(0),null);
var inst_91870__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_91868,(1),null);
var state_92137__$1 = (function (){var statearr_92270 = state_92137;
(statearr_92270[(68)] = inst_91867);

(statearr_92270[(67)] = inst_91870__$1);

(statearr_92270[(19)] = inst_91869);

return statearr_92270;
})();
if(cljs.core.truth_(inst_91870__$1)){
var statearr_92271_96094 = state_92137__$1;
(statearr_92271_96094[(1)] = (68));

} else {
var statearr_92272_96095 = state_92137__$1;
(statearr_92272_96095[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (107))){
var state_92137__$1 = state_92137;
var statearr_92273_96096 = state_92137__$1;
(statearr_92273_96096[(2)] = null);

(statearr_92273_96096[(1)] = (108));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (23))){
var state_92137__$1 = state_92137;
var statearr_92274_96097 = state_92137__$1;
(statearr_92274_96097[(2)] = false);

(statearr_92274_96097[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (47))){
var inst_91783 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
var statearr_92275_96098 = state_92137__$1;
(statearr_92275_96098[(2)] = inst_91783);

(statearr_92275_96098[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (35))){
var inst_91761 = (state_92137[(2)]);
var inst_91762 = com.wsscode.pathom.connect.parallel_batch_error(env,inst_91761);
var state_92137__$1 = state_92137;
var statearr_92276_96099 = state_92137__$1;
(statearr_92276_96099[(2)] = inst_91762);


cljs.core.async.impl.ioc_helpers.process_exception(state_92137__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (127))){
var inst_92083 = (state_92137[(49)]);
var inst_92064 = (state_92137[(62)]);
var inst_92079 = cljs.core.first(inst_92064);
var inst_92080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_92079,(0),null);
var inst_92081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_92079,(1),null);
var inst_92082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_92081,(0),null);
var inst_92083__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_92081,(1),null);
var state_92137__$1 = (function (){var statearr_92277 = state_92137;
(statearr_92277[(69)] = inst_92080);

(statearr_92277[(16)] = inst_92082);

(statearr_92277[(49)] = inst_92083__$1);

return statearr_92277;
})();
if(cljs.core.truth_(inst_92083__$1)){
var statearr_92278_96100 = state_92137__$1;
(statearr_92278_96100[(1)] = (129));

} else {
var statearr_92279_96101 = state_92137__$1;
(statearr_92279_96101[(1)] = (130));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (82))){
var inst_91694 = (state_92137[(13)]);
var inst_91688 = (state_92137[(14)]);
var inst_91697 = (state_92137[(30)]);
var inst_91693 = (state_92137[(31)]);
var inst_91928 = (state_92137[(70)]);
var inst_91932 = (state_92137[(71)]);
var inst_91687 = (state_92137[(37)]);
var inst_91942 = (state_92137[(57)]);
var inst_91691 = (state_92137[(15)]);
var inst_91938 = (state_92137[(53)]);
var inst_91939 = (state_92137[(54)]);
var inst_91689 = (state_92137[(41)]);
var inst_91936 = (state_92137[(2)]);
var inst_91937 = com.wsscode.async.async_cljs.throw_err(inst_91936);
var inst_91938__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_91928,inst_91932,inst_91937);
var inst_91939__$1 = com.wsscode.pathom.connect.group_input_indexes(inst_91938__$1);
var inst_91940 = (function (){var input = inst_91689;
var items_map = inst_91939__$1;
var key = inst_91693;
var params = inst_91694;
var e = inst_91691;
var resolver_sym = inst_91688;
var trace_data = inst_91697;
var valid_inputs = inst_91938__$1;
var map__91665 = inst_91687;
return ((function (input,items_map,key,params,e,resolver_sym,trace_data,valid_inputs,map__91665,inst_91694,inst_91688,inst_91697,inst_91693,inst_91928,inst_91932,inst_91687,inst_91942,inst_91691,inst_91938,inst_91939,inst_91689,inst_91936,inst_91937,inst_91938__$1,inst_91939__$1,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__91656_SHARP_){
return com.wsscode.pathom.core.cache_contains_QMARK_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,p1__91656_SHARP_,params], null));
});
;})(input,items_map,key,params,e,resolver_sym,trace_data,valid_inputs,map__91665,inst_91694,inst_91688,inst_91697,inst_91693,inst_91928,inst_91932,inst_91687,inst_91942,inst_91691,inst_91938,inst_91939,inst_91689,inst_91936,inst_91937,inst_91938__$1,inst_91939__$1,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_91941 = cljs.core.keys(inst_91939__$1);
var inst_91942__$1 = cljs.core.group_by(inst_91940,inst_91941);
var inst_91944 = (inst_91942__$1 == null);
var inst_91945 = cljs.core.not(inst_91944);
var state_92137__$1 = (function (){var statearr_92280 = state_92137;
(statearr_92280[(57)] = inst_91942__$1);

(statearr_92280[(53)] = inst_91938__$1);

(statearr_92280[(54)] = inst_91939__$1);

return statearr_92280;
})();
if(inst_91945){
var statearr_92281_96102 = state_92137__$1;
(statearr_92281_96102[(1)] = (83));

} else {
var statearr_92282_96103 = state_92137__$1;
(statearr_92282_96103[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (76))){
var inst_91909 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
var statearr_92283_96104 = state_92137__$1;
(statearr_92283_96104[(2)] = inst_91909);

(statearr_92283_96104[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (97))){
var inst_91965 = (state_92137[(52)]);
var inst_91979 = (state_92137[(20)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_92137,(96),new cljs.core.Keyword(null,"default","default",-1987822328),null,(95));
var inst_91979__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_91965);
var inst_91980 = com.wsscode.async.async_cljs.chan_QMARK_(inst_91979__$1);
var state_92137__$1 = (function (){var statearr_92284 = state_92137;
(statearr_92284[(20)] = inst_91979__$1);

return statearr_92284;
})();
if(inst_91980){
var statearr_92285_96105 = state_92137__$1;
(statearr_92285_96105[(1)] = (98));

} else {
var statearr_92286_96106 = state_92137__$1;
(statearr_92286_96106[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (19))){
var inst_91697 = (state_92137[(30)]);
var inst_91701 = (state_92137[(38)]);
var inst_91911 = (state_92137[(2)]);
var inst_91912 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_91697,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_91913 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_91701,inst_91912);
var state_92137__$1 = (function (){var statearr_92287 = state_92137;
(statearr_92287[(72)] = inst_91913);

return statearr_92287;
})();
var statearr_92288_96107 = state_92137__$1;
(statearr_92288_96107[(2)] = inst_91911);

(statearr_92288_96107[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (57))){
var inst_91835 = (state_92137[(64)]);
var inst_91845 = cljs.core.async.close_BANG_(inst_91835);
var state_92137__$1 = state_92137;
var statearr_92289_96108 = state_92137__$1;
(statearr_92289_96108[(2)] = inst_91845);

(statearr_92289_96108[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (68))){
var inst_91870 = (state_92137[(67)]);
var state_92137__$1 = state_92137;
if(cljs.core.truth_(inst_91870)){
var statearr_92290_96109 = state_92137__$1;
(statearr_92290_96109[(1)] = (71));

} else {
var statearr_92291_96110 = state_92137__$1;
(statearr_92291_96110[(1)] = (72));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (11))){
var inst_91666 = (state_92137[(21)]);
var inst_91684 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_91666);
var state_92137__$1 = state_92137;
var statearr_92292_96111 = state_92137__$1;
(statearr_92292_96111[(2)] = inst_91684);

(statearr_92292_96111[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (115))){
var inst_92031 = (state_92137[(25)]);
var inst_92064 = (state_92137[(62)]);
var inst_92064__$1 = cljs.core.seq(inst_92031);
var state_92137__$1 = (function (){var statearr_92293 = state_92137;
(statearr_92293[(62)] = inst_92064__$1);

return statearr_92293;
})();
if(inst_92064__$1){
var statearr_92294_96112 = state_92137__$1;
(statearr_92294_96112[(1)] = (123));

} else {
var statearr_92295_96113 = state_92137__$1;
(statearr_92295_96113[(1)] = (124));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (9))){
var state_92137__$1 = state_92137;
var statearr_92296_96116 = state_92137__$1;
(statearr_92296_96116[(2)] = false);

(statearr_92296_96116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (5))){
var inst_91666 = (state_92137[(21)]);
var inst_91671 = inst_91666.cljs$lang$protocol_mask$partition0$;
var inst_91672 = (inst_91671 & (64));
var inst_91673 = inst_91666.cljs$core$ISeq$;
var inst_91674 = (cljs.core.PROTOCOL_SENTINEL === inst_91673);
var inst_91675 = ((inst_91672) || (inst_91674));
var state_92137__$1 = state_92137;
if(cljs.core.truth_(inst_91675)){
var statearr_92297_96128 = state_92137__$1;
(statearr_92297_96128[(1)] = (8));

} else {
var statearr_92298_96129 = state_92137__$1;
(statearr_92298_96129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (112))){
var inst_92033 = (state_92137[(22)]);
var inst_92034 = (state_92137[(24)]);
var inst_92036 = (inst_92034 < inst_92033);
var inst_92037 = inst_92036;
var state_92137__$1 = state_92137;
if(cljs.core.truth_(inst_92037)){
var statearr_92299_96130 = state_92137__$1;
(statearr_92299_96130[(1)] = (114));

} else {
var statearr_92300_96131 = state_92137__$1;
(statearr_92300_96131[(1)] = (115));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (83))){
var inst_91942 = (state_92137[(57)]);
var inst_91947 = inst_91942.cljs$lang$protocol_mask$partition0$;
var inst_91948 = (inst_91947 & (64));
var inst_91949 = inst_91942.cljs$core$ISeq$;
var inst_91950 = (cljs.core.PROTOCOL_SENTINEL === inst_91949);
var inst_91951 = ((inst_91948) || (inst_91950));
var state_92137__$1 = state_92137;
if(cljs.core.truth_(inst_91951)){
var statearr_92301_96134 = state_92137__$1;
(statearr_92301_96134[(1)] = (86));

} else {
var statearr_92302_96135 = state_92137__$1;
(statearr_92302_96135[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (138))){
var inst_92113 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
var statearr_92303_96136 = state_92137__$1;
(statearr_92303_96136[(2)] = inst_92113);

(statearr_92303_96136[(1)] = (137));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (14))){
var inst_91694 = (state_92137[(13)]);
var inst_91688 = (state_92137[(14)]);
var inst_91697 = (state_92137[(30)]);
var inst_91691 = (state_92137[(15)]);
var inst_91700 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_91697,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_91701 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_91700);
var inst_91702 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91703 = [inst_91688,inst_91691,inst_91694];
var inst_91704 = (new cljs.core.PersistentVector(null,3,(5),inst_91702,inst_91703,null));
var inst_91705 = com.wsscode.pathom.core.cache_contains_QMARK_(env,inst_91704);
var state_92137__$1 = (function (){var statearr_92304 = state_92137;
(statearr_92304[(38)] = inst_91701);

return statearr_92304;
})();
if(inst_91705){
var statearr_92305_96138 = state_92137__$1;
(statearr_92305_96138[(1)] = (17));

} else {
var statearr_92306_96139 = state_92137__$1;
(statearr_92306_96139[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (45))){
var inst_91766 = (state_92137[(60)]);
var state_92137__$1 = state_92137;
var statearr_92307_96140 = state_92137__$1;
(statearr_92307_96140[(2)] = inst_91766);

(statearr_92307_96140[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (53))){
var inst_91819 = (state_92137[(8)]);
var inst_91821 = (state_92137[(11)]);
var inst_91836 = (state_92137[(17)]);
var inst_91832 = cljs.core._nth(inst_91819,inst_91821);
var inst_91833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_91832,(0),null);
var inst_91834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_91832,(1),null);
var inst_91835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_91834,(0),null);
var inst_91836__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_91834,(1),null);
var state_92137__$1 = (function (){var statearr_92308 = state_92137;
(statearr_92308[(64)] = inst_91835);

(statearr_92308[(17)] = inst_91836__$1);

(statearr_92308[(73)] = inst_91833);

return statearr_92308;
})();
if(cljs.core.truth_(inst_91836__$1)){
var statearr_92309_96142 = state_92137__$1;
(statearr_92309_96142[(1)] = (56));

} else {
var statearr_92310_96143 = state_92137__$1;
(statearr_92310_96143[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (78))){
var inst_91694 = (state_92137[(13)]);
var inst_91688 = (state_92137[(14)]);
var inst_91691 = (state_92137[(15)]);
var inst_91920 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91921 = [inst_91688,inst_91691,inst_91694];
var inst_91922 = (new cljs.core.PersistentVector(null,3,(5),inst_91920,inst_91921,null));
var inst_91923 = com.wsscode.pathom.core.cache_read(env,inst_91922);
var state_92137__$1 = state_92137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92137__$1,(81),inst_91923);
} else {
if((state_val_92138 === (132))){
var inst_92083 = (state_92137[(49)]);
var state_92137__$1 = state_92137;
var statearr_92311_96144 = state_92137__$1;
(statearr_92311_96144[(2)] = inst_92083);

(statearr_92311_96144[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (26))){
var state_92137__$1 = state_92137;
var statearr_92312_96145 = state_92137__$1;
(statearr_92312_96145[(2)] = false);

(statearr_92312_96145[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (123))){
var inst_92064 = (state_92137[(62)]);
var inst_92066 = cljs.core.chunked_seq_QMARK_(inst_92064);
var state_92137__$1 = state_92137;
if(inst_92066){
var statearr_92313_96146 = state_92137__$1;
(statearr_92313_96146[(1)] = (126));

} else {
var statearr_92314_96147 = state_92137__$1;
(statearr_92314_96147[(1)] = (127));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (140))){
var inst_92128 = (state_92137[(66)]);
var inst_92133 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_92128);
var state_92137__$1 = state_92137;
var statearr_92315_96148 = state_92137__$1;
(statearr_92315_96148[(2)] = inst_92133);

(statearr_92315_96148[(1)] = (141));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (16))){
var inst_92126 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
var statearr_92316_96151 = state_92137__$1;
(statearr_92316_96151[(2)] = inst_92126);


cljs.core.async.impl.ioc_helpers.process_exception(state_92137__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (133))){
var inst_92087 = cljs.core.PersistentHashMap.EMPTY;
var state_92137__$1 = state_92137;
var statearr_92317_96153 = state_92137__$1;
(statearr_92317_96153[(2)] = inst_92087);

(statearr_92317_96153[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (81))){
var inst_91925 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
var statearr_92318_96164 = state_92137__$1;
(statearr_92318_96164[(2)] = inst_91925);

(statearr_92318_96164[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (120))){
var inst_92049 = (state_92137[(56)]);
var state_92137__$1 = state_92137;
var statearr_92319_96165 = state_92137__$1;
(statearr_92319_96165[(2)] = inst_92049);

(statearr_92319_96165[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (79))){
var inst_91694 = (state_92137[(13)]);
var inst_91688 = (state_92137[(14)]);
var inst_91697 = (state_92137[(30)]);
var inst_91693 = (state_92137[(31)]);
var inst_91687 = (state_92137[(37)]);
var inst_91691 = (state_92137[(15)]);
var inst_91689 = (state_92137[(41)]);
var inst_91928 = cljs.core.PersistentVector.EMPTY;
var inst_91929 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector);
var inst_91930 = (function (){var map__91665 = inst_91687;
var resolver_sym = inst_91688;
var input = inst_91689;
var e = inst_91691;
var key = inst_91693;
var params = inst_91694;
var trace_data = inst_91697;
return ((function (map__91665,resolver_sym,input,e,key,params,trace_data,inst_91694,inst_91688,inst_91697,inst_91693,inst_91687,inst_91691,inst_91689,inst_91928,inst_91929,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__91654_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(cljs.core.second(p1__91654_SHARP_),input);
});
;})(map__91665,resolver_sym,input,e,key,params,trace_data,inst_91694,inst_91688,inst_91697,inst_91693,inst_91687,inst_91691,inst_91689,inst_91928,inst_91929,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_91931 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_91930);
var inst_91932 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_91929,inst_91931);
var inst_91933 = (function (){var map__91665 = inst_91687;
var resolver_sym = inst_91688;
var input = inst_91689;
var e = inst_91691;
var key = inst_91693;
var params = inst_91694;
var trace_data = inst_91697;
return ((function (map__91665,resolver_sym,input,e,key,params,trace_data,inst_91694,inst_91688,inst_91697,inst_91693,inst_91687,inst_91691,inst_91689,inst_91928,inst_91929,inst_91930,inst_91931,inst_91932,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__91655_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__91655_SHARP_,input);
});
;})(map__91665,resolver_sym,input,e,key,params,trace_data,inst_91694,inst_91688,inst_91697,inst_91693,inst_91687,inst_91691,inst_91689,inst_91928,inst_91929,inst_91930,inst_91931,inst_91932,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_91934 = com.wsscode.pathom.connect.map_async_serial(inst_91933,processing_sequence);
var state_92137__$1 = (function (){var statearr_92320 = state_92137;
(statearr_92320[(70)] = inst_91928);

(statearr_92320[(71)] = inst_91932);

return statearr_92320;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92137__$1,(82),inst_91934);
} else {
if((state_val_92138 === (38))){
var inst_91766 = (state_92137[(60)]);
var inst_91773 = com.wsscode.async.async_cljs.promise_QMARK_(inst_91766);
var state_92137__$1 = state_92137;
if(cljs.core.truth_(inst_91773)){
var statearr_92321_96173 = state_92137__$1;
(statearr_92321_96173[(1)] = (41));

} else {
var statearr_92322_96174 = state_92137__$1;
(statearr_92322_96174[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (126))){
var inst_92064 = (state_92137[(62)]);
var inst_92068 = cljs.core.chunk_first(inst_92064);
var inst_92069 = cljs.core.chunk_rest(inst_92064);
var inst_92070 = cljs.core.count(inst_92068);
var inst_92031 = inst_92069;
var inst_92032 = inst_92068;
var inst_92033 = inst_92070;
var inst_92034 = (0);
var state_92137__$1 = (function (){var statearr_92323 = state_92137;
(statearr_92323[(22)] = inst_92033);

(statearr_92323[(23)] = inst_92032);

(statearr_92323[(24)] = inst_92034);

(statearr_92323[(25)] = inst_92031);

return statearr_92323;
})();
var statearr_92324_96178 = state_92137__$1;
(statearr_92324_96178[(2)] = null);

(statearr_92324_96178[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (98))){
var inst_91979 = (state_92137[(20)]);
var state_92137__$1 = state_92137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92137__$1,(101),inst_91979);
} else {
if((state_val_92138 === (124))){
var state_92137__$1 = state_92137;
var statearr_92325_96179 = state_92137__$1;
(statearr_92325_96179[(2)] = null);

(statearr_92325_96179[(1)] = (125));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (87))){
var state_92137__$1 = state_92137;
var statearr_92326_96180 = state_92137__$1;
(statearr_92326_96180[(2)] = false);

(statearr_92326_96180[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (30))){
var inst_91694 = (state_92137[(13)]);
var inst_91688 = (state_92137[(14)]);
var inst_91751 = (state_92137[(27)]);
var inst_91725 = (state_92137[(28)]);
var inst_91752 = (state_92137[(29)]);
var inst_91697 = (state_92137[(30)]);
var inst_91693 = (state_92137[(31)]);
var inst_91750 = (state_92137[(34)]);
var inst_91687 = (state_92137[(37)]);
var inst_91701 = (state_92137[(38)]);
var inst_91691 = (state_92137[(15)]);
var inst_91726 = (state_92137[(39)]);
var inst_91689 = (state_92137[(41)]);
var inst_91750__$1 = (state_92137[(2)]);
var inst_91751__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_91750__$1,true);
var inst_91752__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_91750__$1,false);
var inst_91753 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_91754 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_91752__$1];
var inst_91755 = cljs.core.PersistentHashMap.fromArrays(inst_91753,inst_91754);
var inst_91756 = com.wsscode.pathom.trace.trace(env,inst_91755);
var inst_91757 = (function (){var input = inst_91689;
var items_map = inst_91726;
var cached = inst_91751__$1;
var key = inst_91693;
var _ = inst_91756;
var params = inst_91694;
var uncached = inst_91752__$1;
var e = inst_91691;
var resolver_sym = inst_91688;
var trace_data = inst_91697;
var valid_inputs = inst_91725;
var trace_id__27094__auto__ = inst_91701;
var map__91665 = inst_91687;
var map__91714 = inst_91750__$1;
return ((function (input,items_map,cached,key,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,trace_id__27094__auto__,map__91665,map__91714,inst_91694,inst_91688,inst_91751,inst_91725,inst_91752,inst_91697,inst_91693,inst_91750,inst_91687,inst_91701,inst_91691,inst_91726,inst_91689,inst_91750__$1,inst_91751__$1,inst_91752__$1,inst_91753,inst_91754,inst_91755,inst_91756,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache){
return (function (resolver_input){
var ch = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.core.cache_hit(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,resolver_input,params], null),ch);

return ch;
});
;})(input,items_map,cached,key,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,trace_id__27094__auto__,map__91665,map__91714,inst_91694,inst_91688,inst_91751,inst_91725,inst_91752,inst_91697,inst_91693,inst_91750,inst_91687,inst_91701,inst_91691,inst_91726,inst_91689,inst_91750__$1,inst_91751__$1,inst_91752__$1,inst_91753,inst_91754,inst_91755,inst_91756,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_91758 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_91757,inst_91752__$1);
var inst_91759 = cljs.core.seq(inst_91752__$1);
var state_92137__$1 = (function (){var statearr_92327 = state_92137;
(statearr_92327[(27)] = inst_91751__$1);

(statearr_92327[(29)] = inst_91752__$1);

(statearr_92327[(33)] = inst_91758);

(statearr_92327[(34)] = inst_91750__$1);

return statearr_92327;
})();
if(inst_91759){
var statearr_92328_96188 = state_92137__$1;
(statearr_92328_96188[(1)] = (31));

} else {
var statearr_92329_96189 = state_92137__$1;
(statearr_92329_96189[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (73))){
var inst_91869 = (state_92137[(19)]);
var inst_91876 = (state_92137[(2)]);
var inst_91877 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_91869,inst_91876);
var state_92137__$1 = state_92137;
var statearr_92330_96190 = state_92137__$1;
(statearr_92330_96190[(2)] = inst_91877);

(statearr_92330_96190[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (96))){
var inst_91974 = (state_92137[(2)]);
var inst_91975 = com.wsscode.pathom.connect.parallel_batch_error(env,inst_91974);
var state_92137__$1 = state_92137;
var statearr_92331_96191 = state_92137__$1;
(statearr_92331_96191[(2)] = inst_91975);


cljs.core.async.impl.ioc_helpers.process_exception(state_92137__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (10))){
var inst_91679 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
var statearr_92332_96194 = state_92137__$1;
(statearr_92332_96194[(2)] = inst_91679);

(statearr_92332_96194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (18))){
var inst_91694 = (state_92137[(13)]);
var inst_91688 = (state_92137[(14)]);
var inst_91697 = (state_92137[(30)]);
var inst_91693 = (state_92137[(31)]);
var inst_91687 = (state_92137[(37)]);
var inst_91701 = (state_92137[(38)]);
var inst_91691 = (state_92137[(15)]);
var inst_91689 = (state_92137[(41)]);
var inst_91715 = cljs.core.PersistentVector.EMPTY;
var inst_91716 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector);
var inst_91717 = (function (){var map__91665 = inst_91687;
var resolver_sym = inst_91688;
var input = inst_91689;
var e = inst_91691;
var key = inst_91693;
var params = inst_91694;
var trace_data = inst_91697;
var trace_id__27094__auto__ = inst_91701;
return ((function (map__91665,resolver_sym,input,e,key,params,trace_data,trace_id__27094__auto__,inst_91694,inst_91688,inst_91697,inst_91693,inst_91687,inst_91701,inst_91691,inst_91689,inst_91715,inst_91716,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__91654_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(cljs.core.second(p1__91654_SHARP_),input);
});
;})(map__91665,resolver_sym,input,e,key,params,trace_data,trace_id__27094__auto__,inst_91694,inst_91688,inst_91697,inst_91693,inst_91687,inst_91701,inst_91691,inst_91689,inst_91715,inst_91716,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_91718 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_91717);
var inst_91719 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_91716,inst_91718);
var inst_91720 = (function (){var map__91665 = inst_91687;
var resolver_sym = inst_91688;
var input = inst_91689;
var e = inst_91691;
var key = inst_91693;
var params = inst_91694;
var trace_data = inst_91697;
var trace_id__27094__auto__ = inst_91701;
return ((function (map__91665,resolver_sym,input,e,key,params,trace_data,trace_id__27094__auto__,inst_91694,inst_91688,inst_91697,inst_91693,inst_91687,inst_91701,inst_91691,inst_91689,inst_91715,inst_91716,inst_91717,inst_91718,inst_91719,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__91655_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__91655_SHARP_,input);
});
;})(map__91665,resolver_sym,input,e,key,params,trace_data,trace_id__27094__auto__,inst_91694,inst_91688,inst_91697,inst_91693,inst_91687,inst_91701,inst_91691,inst_91689,inst_91715,inst_91716,inst_91717,inst_91718,inst_91719,state_val_92138,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_91721 = com.wsscode.pathom.connect.map_async_serial(inst_91720,processing_sequence);
var state_92137__$1 = (function (){var statearr_92333 = state_92137;
(statearr_92333[(43)] = inst_91715);

(statearr_92333[(45)] = inst_91719);

return statearr_92333;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92137__$1,(21),inst_91721);
} else {
if((state_val_92138 === (105))){
var inst_91990 = (state_92137[(2)]);
var inst_91991 = com.wsscode.async.async_cljs.consumer_pair(inst_91990);
var state_92137__$1 = state_92137;
var statearr_92334_96203 = state_92137__$1;
(statearr_92334_96203[(2)] = inst_91991);

(statearr_92334_96203[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (52))){
var inst_91801 = (state_92137[(35)]);
var inst_91691 = (state_92137[(15)]);
var inst_91892 = (state_92137[(2)]);
var inst_91893 = cljs.core.contains_QMARK_(inst_91801,inst_91691);
var state_92137__$1 = (function (){var statearr_92335 = state_92137;
(statearr_92335[(74)] = inst_91892);

return statearr_92335;
})();
if(inst_91893){
var statearr_92336_96206 = state_92137__$1;
(statearr_92336_96206[(1)] = (74));

} else {
var statearr_92337_96207 = state_92137__$1;
(statearr_92337_96207[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (114))){
var inst_92032 = (state_92137[(23)]);
var inst_92034 = (state_92137[(24)]);
var inst_92049 = (state_92137[(56)]);
var inst_92045 = cljs.core._nth(inst_92032,inst_92034);
var inst_92046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_92045,(0),null);
var inst_92047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_92045,(1),null);
var inst_92048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_92047,(0),null);
var inst_92049__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_92047,(1),null);
var state_92137__$1 = (function (){var statearr_92338 = state_92137;
(statearr_92338[(56)] = inst_92049__$1);

(statearr_92338[(75)] = inst_92046);

(statearr_92338[(61)] = inst_92048);

return statearr_92338;
})();
if(cljs.core.truth_(inst_92049__$1)){
var statearr_92339_96208 = state_92137__$1;
(statearr_92339_96208[(1)] = (117));

} else {
var statearr_92340_96209 = state_92137__$1;
(statearr_92340_96209[(1)] = (118));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (67))){
var inst_91885 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
var statearr_92341_96210 = state_92137__$1;
(statearr_92341_96210[(2)] = inst_91885);

(statearr_92341_96210[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (71))){
var inst_91870 = (state_92137[(67)]);
var state_92137__$1 = state_92137;
var statearr_92342_96211 = state_92137__$1;
(statearr_92342_96211[(2)] = inst_91870);

(statearr_92342_96211[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (42))){
var state_92137__$1 = state_92137;
var statearr_92343_96212 = state_92137__$1;
(statearr_92343_96212[(1)] = (45));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (80))){
var inst_92124 = (state_92137[(2)]);
var state_92137__$1 = state_92137;
var statearr_92345_96214 = state_92137__$1;
(statearr_92345_96214[(2)] = inst_92124);

(statearr_92345_96214[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (37))){
var inst_91766 = (state_92137[(60)]);
var state_92137__$1 = state_92137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92137__$1,(40),inst_91766);
} else {
if((state_val_92138 === (63))){
var state_92137__$1 = state_92137;
var statearr_92346_96216 = state_92137__$1;
(statearr_92346_96216[(2)] = null);

(statearr_92346_96216[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (94))){
var inst_92006 = (state_92137[(58)]);
var inst_91971 = (state_92137[(55)]);
var inst_91964 = (state_92137[(50)]);
var inst_91965 = (state_92137[(52)]);
var inst_92006__$1 = (state_92137[(2)]);
var inst_92007 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_92008 = cljs.core.count(inst_92006__$1);
var inst_92009 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_92008];
var inst_92010 = cljs.core.PersistentHashMap.fromArrays(inst_92007,inst_92009);
var inst_92011 = com.wsscode.pathom.trace.trace(env,inst_92010);
var inst_92012 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_91971,inst_92006__$1);
var inst_92013 = cljs.core.zipmap(inst_91965,inst_92012);
var inst_92014 = cljs.core.set(inst_91964);
var inst_92015 = cljs.core.first(inst_92006__$1);
var inst_92016 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_92015);
var inst_92017 = cljs.core.count(path);
var inst_92018 = (inst_92017 >= (2));
var inst_92019 = ((inst_92016) && (inst_92018));
var state_92137__$1 = (function (){var statearr_92347 = state_92137;
(statearr_92347[(58)] = inst_92006__$1);

(statearr_92347[(48)] = inst_92013);

(statearr_92347[(59)] = inst_92011);

(statearr_92347[(46)] = inst_92014);

return statearr_92347;
})();
if(cljs.core.truth_(inst_92019)){
var statearr_92348_96222 = state_92137__$1;
(statearr_92348_96222[(1)] = (109));

} else {
var statearr_92349_96223 = state_92137__$1;
(statearr_92349_96223[(1)] = (110));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (8))){
var state_92137__$1 = state_92137;
var statearr_92350_96224 = state_92137__$1;
(statearr_92350_96224[(2)] = true);

(statearr_92350_96224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (49))){
var state_92137__$1 = state_92137;
var statearr_92351_96226 = state_92137__$1;
(statearr_92351_96226[(2)] = null);

(statearr_92351_96226[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92138 === (84))){
var state_92137__$1 = state_92137;
var statearr_92352_96227 = state_92137__$1;
(statearr_92352_96227[(2)] = false);

(statearr_92352_96227[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache))
;
return ((function (switch__47663__auto__,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache){
return (function() {
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__47664__auto____0 = (function (){
var statearr_92353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_92353[(0)] = com$wsscode$pathom$connect$parallel_batch_$_state_machine__47664__auto__);

(statearr_92353[(1)] = (1));

return statearr_92353;
});
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__47664__auto____1 = (function (state_92137){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_92137);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e92354){if((e92354 instanceof Object)){
var ex__47667__auto__ = e92354;
var statearr_92355_96228 = state_92137;
(statearr_92355_96228[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_92137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92354;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__96229 = state_92137;
state_92137 = G__96229;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_batch_$_state_machine__47664__auto__ = function(state_92137){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__47664__auto____1.call(this,state_92137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_batch_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_batch_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$parallel_batch_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_batch_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache))
})();
var state__47948__auto__ = (function (){var statearr_92356 = f__47947__auto__();
(statearr_92356[(6)] = c__47946__auto___95872);

return statearr_92356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___95872,ch__53519__auto__,map__91659,map__91659__$1,env,processing_sequence,path,entity_path_cache))
);


return ch__53519__auto__;
});
com.wsscode.pathom.connect.parallel_reader = (function com$wsscode$pathom$connect$parallel_reader(p__92360){
var map__92361 = p__92360;
var map__92361__$1 = (((((!((map__92361 == null))))?(((((map__92361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__92361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__92361):map__92361);
var env = map__92361__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92361__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__92361__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92361__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var waiting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92361__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278));
var temp__5718__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__92363 = temp__5718__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92363,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__92363,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),out,new cljs.core.Keyword("com.wsscode.pathom.parser","response-stream","com.wsscode.pathom.parser/response-stream",1785550292),(function (){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var params = com.wsscode.pathom.core.params(env);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),plan);
var c__47946__auto___96233 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (state_92759){
var state_val_92760 = (state_92759[(1)]);
if((state_val_92760 === (65))){
var inst_92525 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_92761_96235 = state_92759__$1;
(statearr_92761_96235[(2)] = inst_92525);


cljs.core.async.impl.ioc_helpers.process_exception(state_92759__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (70))){
var inst_92536 = (state_92759[(7)]);
var inst_92586 = cljs.core.map_QMARK_(inst_92536);
var state_92759__$1 = state_92759;
if(inst_92586){
var statearr_92762_96236 = state_92759__$1;
(statearr_92762_96236[(1)] = (80));

} else {
var statearr_92763_96237 = state_92759__$1;
(statearr_92763_96237[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (62))){
var inst_92516 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_92764_96239 = state_92759__$1;
(statearr_92764_96239[(2)] = inst_92516);

(statearr_92764_96239[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (74))){
var inst_92584 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_92765_96240 = state_92759__$1;
(statearr_92765_96240[(2)] = inst_92584);

(statearr_92765_96240[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (110))){
var inst_92379 = (state_92759[(8)]);
var inst_92691 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882));
var inst_92692 = cljs.core.zipmap(inst_92379,inst_92691);
var state_92759__$1 = state_92759;
var statearr_92766_96241 = state_92759__$1;
(statearr_92766_96241[(2)] = inst_92692);

(statearr_92766_96241[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (7))){
var inst_92398 = (state_92759[(9)]);
var inst_92403 = inst_92398.cljs$lang$protocol_mask$partition0$;
var inst_92404 = (inst_92403 & (64));
var inst_92405 = inst_92398.cljs$core$ISeq$;
var inst_92406 = (cljs.core.PROTOCOL_SENTINEL === inst_92405);
var inst_92407 = ((inst_92404) || (inst_92406));
var state_92759__$1 = state_92759;
if(cljs.core.truth_(inst_92407)){
var statearr_92769_96243 = state_92759__$1;
(statearr_92769_96243[(1)] = (10));

} else {
var statearr_92770_96244 = state_92759__$1;
(statearr_92770_96244[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (59))){
var inst_92510 = (state_92759[(2)]);
var inst_92511 = com.wsscode.async.async_cljs.consumer_pair(inst_92510);
var state_92759__$1 = state_92759;
var statearr_92771_96245 = state_92759__$1;
(statearr_92771_96245[(2)] = inst_92511);

(statearr_92771_96245[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (86))){
var inst_92598 = (state_92759[(10)]);
var inst_92378 = (state_92759[(11)]);
var inst_92380 = (state_92759[(12)]);
var inst_92379 = (state_92759[(8)]);
var inst_92387 = (state_92759[(13)]);
var inst_92607 = (state_92759[(2)]);
var inst_92608 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_92379,inst_92598);
var tmp92767 = inst_92378;
var tmp92768 = inst_92380;
var inst_92377 = inst_92387;
var inst_92378__$1 = tmp92767;
var inst_92379__$1 = inst_92608;
var inst_92380__$1 = tmp92768;
var state_92759__$1 = (function (){var statearr_92774 = state_92759;
(statearr_92774[(14)] = inst_92607);

(statearr_92774[(11)] = inst_92378__$1);

(statearr_92774[(12)] = inst_92380__$1);

(statearr_92774[(8)] = inst_92379__$1);

(statearr_92774[(15)] = inst_92377);

return statearr_92774;
})();
var statearr_92775_96247 = state_92759__$1;
(statearr_92775_96247[(2)] = null);

(statearr_92775_96247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (20))){
var inst_92380 = (state_92759[(12)]);
var inst_92393 = (state_92759[(16)]);
var inst_92459 = cljs.core.contains_QMARK_(inst_92380,inst_92393);
var state_92759__$1 = state_92759;
if(inst_92459){
var statearr_92776_96248 = state_92759__$1;
(statearr_92776_96248[(1)] = (30));

} else {
var statearr_92777_96249 = state_92759__$1;
(statearr_92777_96249[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (72))){
var inst_92378 = (state_92759[(11)]);
var inst_92380 = (state_92759[(12)]);
var inst_92379 = (state_92759[(8)]);
var inst_92387 = (state_92759[(13)]);
var inst_92547 = (state_92759[(17)]);
var inst_92550 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_92379,inst_92547);
var tmp92772 = inst_92378;
var tmp92773 = inst_92380;
var inst_92377 = inst_92387;
var inst_92378__$1 = tmp92772;
var inst_92379__$1 = inst_92550;
var inst_92380__$1 = tmp92773;
var state_92759__$1 = (function (){var statearr_92778 = state_92759;
(statearr_92778[(11)] = inst_92378__$1);

(statearr_92778[(12)] = inst_92380__$1);

(statearr_92778[(8)] = inst_92379__$1);

(statearr_92778[(15)] = inst_92377);

return statearr_92778;
})();
var statearr_92779_96250 = state_92759__$1;
(statearr_92779_96250[(2)] = null);

(statearr_92779_96250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (58))){
var inst_92518 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_92780_96253 = state_92759__$1;
(statearr_92780_96253[(2)] = inst_92518);

(statearr_92780_96253[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (60))){
var inst_92499 = (state_92759[(18)]);
var state_92759__$1 = state_92759;
var statearr_92781_96254 = state_92759__$1;
(statearr_92781_96254[(2)] = inst_92499);

(statearr_92781_96254[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (27))){
var inst_92457 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_92782_96255 = state_92759__$1;
(statearr_92782_96255[(2)] = inst_92457);

(statearr_92782_96255[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (1))){
var inst_92373 = cljs.core.seq(plan);
var inst_92374 = cljs.core.first(inst_92373);
var inst_92375 = cljs.core.next(inst_92373);
var inst_92376 = cljs.core.PersistentHashMap.EMPTY;
var inst_92377 = plan;
var inst_92378 = inst_92376;
var inst_92379 = out;
var inst_92380 = waiting;
var state_92759__$1 = (function (){var statearr_92783 = state_92759;
(statearr_92783[(11)] = inst_92378);

(statearr_92783[(12)] = inst_92380);

(statearr_92783[(8)] = inst_92379);

(statearr_92783[(15)] = inst_92377);

(statearr_92783[(19)] = inst_92375);

(statearr_92783[(20)] = inst_92374);

return statearr_92783;
})();
var statearr_92784_96256 = state_92759__$1;
(statearr_92784_96256[(2)] = null);

(statearr_92784_96256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (69))){
var inst_92424 = (state_92759[(21)]);
var inst_92393 = (state_92759[(16)]);
var inst_92547 = (state_92759[(17)]);
var inst_92545 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_92424);
var inst_92546 = cljs.core.keys(inst_92545);
var inst_92547__$1 = cljs.core.set(inst_92546);
var inst_92548 = cljs.core.contains_QMARK_(inst_92547__$1,inst_92393);
var state_92759__$1 = (function (){var statearr_92785 = state_92759;
(statearr_92785[(17)] = inst_92547__$1);

return statearr_92785;
})();
if(inst_92548){
var statearr_92786_96257 = state_92759__$1;
(statearr_92786_96257[(1)] = (72));

} else {
var statearr_92787_96258 = state_92759__$1;
(statearr_92787_96258[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (101))){
var inst_92537 = (state_92759[(22)]);
var inst_92536 = (state_92759[(7)]);
var inst_92666 = cljs.core.PersistentHashMap.EMPTY;
var inst_92667 = (inst_92537.cljs$core$IFn$_invoke$arity$2 ? inst_92537.cljs$core$IFn$_invoke$arity$2(inst_92666,inst_92536) : inst_92537.call(null,inst_92666,inst_92536));
var state_92759__$1 = state_92759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92759__$1,(104),inst_92667);
} else {
if((state_val_92760 === (24))){
var inst_92441 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
if(cljs.core.truth_(inst_92441)){
var statearr_92788_96260 = state_92759__$1;
(statearr_92788_96260[(1)] = (25));

} else {
var statearr_92789_96261 = state_92759__$1;
(statearr_92789_96261[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (102))){
var state_92759__$1 = state_92759;
var statearr_92790_96262 = state_92759__$1;
(statearr_92790_96262[(1)] = (112));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (55))){
var inst_92503 = (state_92759[(2)]);
var inst_92504 = com.wsscode.async.async_cljs.throw_err(inst_92503);
var state_92759__$1 = state_92759;
var statearr_92792_96263 = state_92759__$1;
(statearr_92792_96263[(2)] = inst_92504);

(statearr_92792_96263[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (85))){
var inst_92662 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_92794_96264 = state_92759__$1;
(statearr_92794_96264[(2)] = inst_92662);

(statearr_92794_96264[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (39))){
var inst_92479 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_92795_96265 = state_92759__$1;
(statearr_92795_96265[(2)] = inst_92479);

(statearr_92795_96265[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (88))){
var inst_92380 = (state_92759[(12)]);
var inst_92617 = (state_92759[(23)]);
var inst_92622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_92617,(0),null);
var inst_92623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_92617,(1),null);
var inst_92624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_92617,(2),null);
var tmp92793 = inst_92380;
var inst_92377 = inst_92622;
var inst_92378 = inst_92623;
var inst_92379 = inst_92624;
var inst_92380__$1 = tmp92793;
var state_92759__$1 = (function (){var statearr_92796 = state_92759;
(statearr_92796[(11)] = inst_92378);

(statearr_92796[(12)] = inst_92380__$1);

(statearr_92796[(8)] = inst_92379);

(statearr_92796[(15)] = inst_92377);

return statearr_92796;
})();
var statearr_92797_96266 = state_92759__$1;
(statearr_92797_96266[(2)] = null);

(statearr_92797_96266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (46))){
var state_92759__$1 = state_92759;
var statearr_92798_96269 = state_92759__$1;
(statearr_92798_96269[(2)] = null);

(statearr_92798_96269[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (4))){
var inst_92394 = (state_92759[(24)]);
var inst_92398 = (state_92759[(9)]);
var inst_92386 = (state_92759[(25)]);
var inst_92393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_92386,(0),null);
var inst_92394__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_92386,(1),null);
var inst_92395 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_92396 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),inst_92394__$1];
var inst_92397 = (new cljs.core.PersistentVector(null,2,(5),inst_92395,inst_92396,null));
var inst_92398__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_92397);
var inst_92400 = (inst_92398__$1 == null);
var inst_92401 = cljs.core.not(inst_92400);
var state_92759__$1 = (function (){var statearr_92799 = state_92759;
(statearr_92799[(24)] = inst_92394__$1);

(statearr_92799[(16)] = inst_92393);

(statearr_92799[(9)] = inst_92398__$1);

return statearr_92799;
})();
if(inst_92401){
var statearr_92800_96271 = state_92759__$1;
(statearr_92800_96271[(1)] = (7));

} else {
var statearr_92801_96272 = state_92759__$1;
(statearr_92801_96272[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (77))){
var inst_92393 = (state_92759[(16)]);
var inst_92570 = [new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_92571 = [inst_92393];
var inst_92572 = cljs.core.PersistentHashMap.fromArrays(inst_92570,inst_92571);
var inst_92573 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Waited key missed response",inst_92572);
var inst_92574 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_92575 = cljs.core.PersistentHashMap.EMPTY;
var inst_92576 = [out,inst_92573,inst_92575];
var inst_92577 = cljs.core.PersistentHashMap.fromArrays(inst_92574,inst_92576);
var state_92759__$1 = state_92759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_92759__$1,(79),ch,inst_92577);
} else {
if((state_val_92760 === (106))){
var inst_92394 = (state_92759[(24)]);
var inst_92424 = (state_92759[(21)]);
var inst_92536 = (state_92759[(7)]);
var inst_92387 = (state_92759[(13)]);
var inst_92679 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_92680 = [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416),key,inst_92394];
var inst_92681 = cljs.core.PersistentHashMap.fromArrays(inst_92679,inst_92680);
var inst_92682 = com.wsscode.pathom.trace.trace(inst_92424,inst_92681);
var inst_92683 = com.wsscode.pathom.core.add_error(inst_92424,inst_92536);
var inst_92684 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_92685 = cljs.core.seq(inst_92387);
var state_92759__$1 = (function (){var statearr_92802 = state_92759;
(statearr_92802[(26)] = inst_92683);

(statearr_92802[(27)] = inst_92682);

(statearr_92802[(28)] = inst_92684);

return statearr_92802;
})();
if(inst_92685){
var statearr_92803_96273 = state_92759__$1;
(statearr_92803_96273[(1)] = (109));

} else {
var statearr_92804_96274 = state_92759__$1;
(statearr_92804_96274[(1)] = (110));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (119))){
var inst_92737 = (state_92759[(2)]);
var inst_92738 = cljs.core.async.close_BANG_(ch);
var state_92759__$1 = (function (){var statearr_92805 = state_92759;
(statearr_92805[(29)] = inst_92737);

return statearr_92805;
})();
var statearr_92806_96275 = state_92759__$1;
(statearr_92806_96275[(2)] = inst_92738);

(statearr_92806_96275[(1)] = (118));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (95))){
var inst_92588 = (state_92759[(30)]);
var inst_92393 = (state_92759[(16)]);
var inst_92644 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_92588,inst_92393,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_92759__$1 = state_92759;
var statearr_92807_96277 = state_92759__$1;
(statearr_92807_96277[(2)] = inst_92644);

(statearr_92807_96277[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (54))){
var inst_92520 = (state_92759[(31)]);
var inst_92520__$1 = (state_92759[(2)]);
var state_92759__$1 = (function (){var statearr_92808 = state_92759;
(statearr_92808[(31)] = inst_92520__$1);

return statearr_92808;
})();
if(cljs.core.truth_(inst_92520__$1)){
var statearr_92809_96278 = state_92759__$1;
(statearr_92809_96278[(1)] = (63));

} else {
var statearr_92810_96279 = state_92759__$1;
(statearr_92810_96279[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (92))){
var state_92759__$1 = state_92759;
var statearr_92811_96280 = state_92759__$1;
(statearr_92811_96280[(2)] = null);

(statearr_92811_96280[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (104))){
var inst_92669 = (state_92759[(32)]);
var inst_92669__$1 = (state_92759[(2)]);
var state_92759__$1 = (function (){var statearr_92812 = state_92759;
(statearr_92812[(32)] = inst_92669__$1);

return statearr_92812;
})();
if(cljs.core.truth_(inst_92669__$1)){
var statearr_92813_96281 = state_92759__$1;
(statearr_92813_96281[(1)] = (105));

} else {
var statearr_92814_96282 = state_92759__$1;
(statearr_92814_96282[(1)] = (106));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (15))){
var inst_92394 = (state_92759[(24)]);
var inst_92422 = (state_92759[(33)]);
var inst_92424 = (state_92759[(21)]);
var inst_92393 = (state_92759[(16)]);
var inst_92426 = (state_92759[(34)]);
var inst_92419 = (state_92759[(35)]);
var inst_92425 = (state_92759[(36)]);
var inst_92419__$1 = (state_92759[(2)]);
var inst_92420 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_92419__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_92421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_92419__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_92422__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_92419__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_92423 = com.wsscode.pathom.connect.resolver__GT_output(env__$1,inst_92394);
var inst_92424__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_92419__$1);
var inst_92425__$1 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_92424__$1);
var inst_92426__$1 = cljs.core.select_keys(inst_92425__$1,inst_92422__$1);
var inst_92427 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_92428 = [key,inst_92394,inst_92426__$1];
var inst_92429 = cljs.core.PersistentHashMap.fromArrays(inst_92427,inst_92428);
var inst_92430 = cljs.core.contains_QMARK_(inst_92425__$1,inst_92393);
var state_92759__$1 = (function (){var statearr_92815 = state_92759;
(statearr_92815[(37)] = inst_92429);

(statearr_92815[(33)] = inst_92422__$1);

(statearr_92815[(21)] = inst_92424__$1);

(statearr_92815[(38)] = inst_92421);

(statearr_92815[(39)] = inst_92423);

(statearr_92815[(34)] = inst_92426__$1);

(statearr_92815[(35)] = inst_92419__$1);

(statearr_92815[(40)] = inst_92420);

(statearr_92815[(36)] = inst_92425__$1);

return statearr_92815;
})();
if(inst_92430){
var statearr_92816_96284 = state_92759__$1;
(statearr_92816_96284[(1)] = (16));

} else {
var statearr_92817_96285 = state_92759__$1;
(statearr_92817_96285[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (48))){
var inst_92530 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_92819_96286 = state_92759__$1;
(statearr_92819_96286[(2)] = inst_92530);

(statearr_92819_96286[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (50))){
var inst_92495 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_92820_96287 = state_92759__$1;
(statearr_92820_96287[(2)] = inst_92495);


cljs.core.async.impl.ioc_helpers.process_exception(state_92759__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (116))){
var inst_92380 = (state_92759[(12)]);
var inst_92711 = (state_92759[(41)]);
var inst_92716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_92711,(0),null);
var inst_92717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_92711,(1),null);
var inst_92718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_92711,(2),null);
var tmp92818 = inst_92380;
var inst_92377 = inst_92716;
var inst_92378 = inst_92717;
var inst_92379 = inst_92718;
var inst_92380__$1 = tmp92818;
var state_92759__$1 = (function (){var statearr_92821 = state_92759;
(statearr_92821[(11)] = inst_92378);

(statearr_92821[(12)] = inst_92380__$1);

(statearr_92821[(8)] = inst_92379);

(statearr_92821[(15)] = inst_92377);

return statearr_92821;
})();
var statearr_92822_96288 = state_92759__$1;
(statearr_92822_96288[(2)] = null);

(statearr_92822_96288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (75))){
var inst_92560 = (state_92759[(42)]);
var inst_92560__$1 = (state_92759[(2)]);
var state_92759__$1 = (function (){var statearr_92823 = state_92759;
(statearr_92823[(42)] = inst_92560__$1);

return statearr_92823;
})();
if(cljs.core.truth_(inst_92560__$1)){
var statearr_92824_96289 = state_92759__$1;
(statearr_92824_96289[(1)] = (76));

} else {
var statearr_92825_96290 = state_92759__$1;
(statearr_92825_96290[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (99))){
var inst_92647 = (state_92759[(43)]);
var state_92759__$1 = state_92759;
var statearr_92826_96291 = state_92759__$1;
(statearr_92826_96291[(2)] = inst_92647);

(statearr_92826_96291[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (21))){
var inst_92534 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_92827_96292 = state_92759__$1;
(statearr_92827_96292[(2)] = inst_92534);

(statearr_92827_96292[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (31))){
var state_92759__$1 = state_92759;
var statearr_92828_96293 = state_92759__$1;
(statearr_92828_96293[(1)] = (46));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (113))){
var state_92759__$1 = state_92759;
var statearr_92830_96294 = state_92759__$1;
(statearr_92830_96294[(2)] = null);

(statearr_92830_96294[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (32))){
var inst_92532 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_92831_96295 = state_92759__$1;
(statearr_92831_96295[(2)] = inst_92532);

(statearr_92831_96295[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (40))){
var inst_92466 = (state_92759[(44)]);
var inst_92484 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_92466);
var state_92759__$1 = state_92759;
var statearr_92832_96296 = state_92759__$1;
(statearr_92832_96296[(2)] = inst_92484);

(statearr_92832_96296[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (91))){
var inst_92630 = (state_92759[(45)]);
var inst_92424 = (state_92759[(21)]);
var inst_92635 = com.wsscode.pathom.core.add_error(inst_92424,inst_92630);
var state_92759__$1 = state_92759;
var statearr_92833_96297 = state_92759__$1;
(statearr_92833_96297[(2)] = inst_92635);

(statearr_92833_96297[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (117))){
var inst_92394 = (state_92759[(24)]);
var inst_92424 = (state_92759[(21)]);
var inst_92536 = (state_92759[(7)]);
var inst_92721 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_92722 = [inst_92536];
var inst_92723 = cljs.core.PersistentHashMap.fromArrays(inst_92721,inst_92722);
var inst_92724 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_92723);
var inst_92725 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_92726 = [new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),key,inst_92394,inst_92536];
var inst_92727 = cljs.core.PersistentHashMap.fromArrays(inst_92725,inst_92726);
var inst_92728 = com.wsscode.pathom.trace.trace(inst_92424,inst_92727);
var inst_92729 = com.wsscode.pathom.core.add_error(inst_92424,inst_92724);
var inst_92730 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_92731 = [key];
var inst_92732 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_92733 = cljs.core.PersistentHashMap.fromArrays(inst_92731,inst_92732);
var inst_92734 = [out,inst_92724,inst_92733];
var inst_92735 = cljs.core.PersistentHashMap.fromArrays(inst_92730,inst_92734);
var state_92759__$1 = (function (){var statearr_92834 = state_92759;
(statearr_92834[(46)] = inst_92729);

(statearr_92834[(47)] = inst_92728);

return statearr_92834;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_92759__$1,(119),ch,inst_92735);
} else {
if((state_val_92760 === (108))){
var inst_92698 = (state_92759[(2)]);
var inst_92699 = cljs.core.async.close_BANG_(ch);
var state_92759__$1 = (function (){var statearr_92835 = state_92759;
(statearr_92835[(48)] = inst_92698);

return statearr_92835;
})();
var statearr_92836_96298 = state_92759__$1;
(statearr_92836_96298[(2)] = inst_92699);

(statearr_92836_96298[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (56))){
var inst_92499 = (state_92759[(18)]);
var inst_92508 = com.wsscode.async.async_cljs.promise__GT_chan(inst_92499);
var state_92759__$1 = state_92759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92759__$1,(59),inst_92508);
} else {
if((state_val_92760 === (33))){
var inst_92466 = (state_92759[(44)]);
var inst_92466__$1 = (state_92759[(2)]);
var inst_92468 = (inst_92466__$1 == null);
var inst_92469 = cljs.core.not(inst_92468);
var state_92759__$1 = (function (){var statearr_92837 = state_92759;
(statearr_92837[(44)] = inst_92466__$1);

return statearr_92837;
})();
if(inst_92469){
var statearr_92838_96299 = state_92759__$1;
(statearr_92838_96299[(1)] = (34));

} else {
var statearr_92839_96300 = state_92759__$1;
(statearr_92839_96300[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (13))){
var inst_92398 = (state_92759[(9)]);
var inst_92416 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_92398);
var state_92759__$1 = state_92759;
var statearr_92840_96301 = state_92759__$1;
(statearr_92840_96301[(2)] = inst_92416);

(statearr_92840_96301[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (22))){
var state_92759__$1 = state_92759;
var statearr_92841_96302 = state_92759__$1;
(statearr_92841_96302[(2)] = processing_sequence);

(statearr_92841_96302[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (90))){
var inst_92660 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_92842_96303 = state_92759__$1;
(statearr_92842_96303[(2)] = inst_92660);

(statearr_92842_96303[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (109))){
var inst_92687 = [key];
var inst_92688 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_92689 = cljs.core.PersistentHashMap.fromArrays(inst_92687,inst_92688);
var state_92759__$1 = state_92759;
var statearr_92843_96304 = state_92759__$1;
(statearr_92843_96304[(2)] = inst_92689);

(statearr_92843_96304[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (36))){
var inst_92482 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
if(cljs.core.truth_(inst_92482)){
var statearr_92844_96305 = state_92759__$1;
(statearr_92844_96305[(1)] = (40));

} else {
var statearr_92845_96306 = state_92759__$1;
(statearr_92845_96306[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (41))){
var inst_92466 = (state_92759[(44)]);
var state_92759__$1 = state_92759;
var statearr_92846_96309 = state_92759__$1;
(statearr_92846_96309[(2)] = inst_92466);

(statearr_92846_96309[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (118))){
var inst_92740 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_92847_96310 = state_92759__$1;
(statearr_92847_96310[(2)] = inst_92740);

(statearr_92847_96310[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (89))){
var inst_92429 = (state_92759[(37)]);
var inst_92394 = (state_92759[(24)]);
var inst_92378 = (state_92759[(11)]);
var inst_92630 = (state_92759[(45)]);
var inst_92422 = (state_92759[(33)]);
var inst_92380 = (state_92759[(12)]);
var inst_92537 = (state_92759[(22)]);
var inst_92424 = (state_92759[(21)]);
var inst_92588 = (state_92759[(30)]);
var inst_92379 = (state_92759[(8)]);
var inst_92393 = (state_92759[(16)]);
var inst_92421 = (state_92759[(38)]);
var inst_92377 = (state_92759[(15)]);
var inst_92375 = (state_92759[(19)]);
var inst_92374 = (state_92759[(20)]);
var inst_92387 = (state_92759[(13)]);
var inst_92423 = (state_92759[(39)]);
var inst_92426 = (state_92759[(34)]);
var inst_92419 = (state_92759[(35)]);
var inst_92420 = (state_92759[(40)]);
var inst_92425 = (state_92759[(36)]);
var inst_92386 = (state_92759[(25)]);
var inst_92617 = (state_92759[(23)]);
var inst_92627 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_92628 = [inst_92588,inst_92393];
var inst_92629 = cljs.core.PersistentHashMap.fromArrays(inst_92627,inst_92628);
var inst_92630__$1 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_92629);
var inst_92631 = (function (){var input = inst_92422;
var seq__92371 = inst_92375;
var step = inst_92386;
var entity = inst_92425;
var key_SINGLEQUOTE_ = inst_92393;
var response = inst_92588;
var cache_QMARK_ = inst_92420;
var out_left = inst_92379;
var first__92372 = inst_92374;
var failed_resolvers = inst_92378;
var G__92369 = inst_92377;
var vec__92389 = inst_92386;
var map__92392 = inst_92419;
var temp__5718__auto____$1 = inst_92617;
var err = inst_92630__$1;
var batch_QMARK_ = inst_92421;
var output = inst_92423;
var env__$2 = inst_92424;
var e = inst_92426;
var resolver_sym = inst_92394;
var waiting__$1 = inst_92380;
var trace_data = inst_92429;
var resolver = inst_92419;
var seq__92383 = inst_92387;
var replan = inst_92537;
var tail = inst_92387;
var first__92384 = inst_92386;
var vec__92370 = plan;
var vec__92382 = inst_92377;
return ((function (input,seq__92371,step,entity,key_SINGLEQUOTE_,response,cache_QMARK_,out_left,first__92372,failed_resolvers,G__92369,vec__92389,map__92392,temp__5718__auto____$1,err,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,seq__92383,replan,tail,first__92384,vec__92370,vec__92382,inst_92429,inst_92394,inst_92378,inst_92630,inst_92422,inst_92380,inst_92537,inst_92424,inst_92588,inst_92379,inst_92393,inst_92421,inst_92377,inst_92375,inst_92374,inst_92387,inst_92423,inst_92426,inst_92419,inst_92420,inst_92425,inst_92386,inst_92617,inst_92627,inst_92628,inst_92629,inst_92630__$1,state_val_92760,c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (p1__92359_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__92359_SHARP_], 0));
});
;})(input,seq__92371,step,entity,key_SINGLEQUOTE_,response,cache_QMARK_,out_left,first__92372,failed_resolvers,G__92369,vec__92389,map__92392,temp__5718__auto____$1,err,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,seq__92383,replan,tail,first__92384,vec__92370,vec__92382,inst_92429,inst_92394,inst_92378,inst_92630,inst_92422,inst_92380,inst_92537,inst_92424,inst_92588,inst_92379,inst_92393,inst_92421,inst_92377,inst_92375,inst_92374,inst_92387,inst_92423,inst_92426,inst_92419,inst_92420,inst_92425,inst_92386,inst_92617,inst_92627,inst_92628,inst_92629,inst_92630__$1,state_val_92760,c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_92632 = com.wsscode.pathom.core.swap_entity_BANG_(inst_92424,inst_92631);
var inst_92633 = cljs.core.seq(inst_92387);
var state_92759__$1 = (function (){var statearr_92848 = state_92759;
(statearr_92848[(49)] = inst_92632);

(statearr_92848[(45)] = inst_92630__$1);

return statearr_92848;
})();
if(inst_92633){
var statearr_92849_96313 = state_92759__$1;
(statearr_92849_96313[(1)] = (91));

} else {
var statearr_92850_96314 = state_92759__$1;
(statearr_92850_96314[(1)] = (92));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (100))){
var inst_92639 = (state_92759[(50)]);
var inst_92630 = (state_92759[(45)]);
var inst_92653 = (state_92759[(2)]);
var inst_92654 = [out,inst_92630,inst_92653];
var inst_92655 = cljs.core.PersistentHashMap.fromArrays(inst_92639,inst_92654);
var state_92759__$1 = state_92759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_92759__$1,(94),ch,inst_92655);
} else {
if((state_val_92760 === (43))){
var inst_92488 = (state_92759[(51)]);
var state_92759__$1 = state_92759;
var statearr_92851_96315 = state_92759__$1;
(statearr_92851_96315[(2)] = inst_92488);

(statearr_92851_96315[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (61))){
var state_92759__$1 = state_92759;
var statearr_92852_96316 = state_92759__$1;
(statearr_92852_96316[(2)] = null);

(statearr_92852_96316[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (29))){
var inst_92455 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_92853_96317 = state_92759__$1;
(statearr_92853_96317[(2)] = inst_92455);

(statearr_92853_96317[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (44))){
var state_92759__$1 = state_92759;
var statearr_92854_96318 = state_92759__$1;
(statearr_92854_96318[(2)] = new cljs.core.Keyword("com.wsscode.pathom.connect","watch-ready","com.wsscode.pathom.connect/watch-ready",943560359));

(statearr_92854_96318[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (93))){
var inst_92588 = (state_92759[(30)]);
var inst_92393 = (state_92759[(16)]);
var inst_92638 = (state_92759[(2)]);
var inst_92639 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_92641 = cljs.core.contains_QMARK_(inst_92588,inst_92393);
var inst_92642 = (!(inst_92641));
var state_92759__$1 = (function (){var statearr_92855 = state_92759;
(statearr_92855[(50)] = inst_92639);

(statearr_92855[(52)] = inst_92638);

return statearr_92855;
})();
if(inst_92642){
var statearr_92856_96319 = state_92759__$1;
(statearr_92856_96319[(1)] = (95));

} else {
var statearr_92857_96320 = state_92759__$1;
(statearr_92857_96320[(1)] = (96));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (6))){
var inst_92755 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_92858_96321 = state_92759__$1;
(statearr_92858_96321[(2)] = inst_92755);

(statearr_92858_96321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (111))){
var inst_92684 = (state_92759[(28)]);
var inst_92536 = (state_92759[(7)]);
var inst_92694 = (state_92759[(2)]);
var inst_92695 = [out,inst_92536,inst_92694];
var inst_92696 = cljs.core.PersistentHashMap.fromArrays(inst_92684,inst_92695);
var state_92759__$1 = state_92759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_92759__$1,(108),ch,inst_92696);
} else {
if((state_val_92760 === (28))){
var inst_92445 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_92859_96322 = state_92759__$1;
(statearr_92859_96322[(2)] = inst_92445);

(statearr_92859_96322[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (64))){
var inst_92523 = cljs.core.PersistentHashMap.EMPTY;
var state_92759__$1 = state_92759;
var statearr_92860_96323 = state_92759__$1;
(statearr_92860_96323[(2)] = inst_92523);

(statearr_92860_96323[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (103))){
var inst_92745 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_92861_96324 = state_92759__$1;
(statearr_92861_96324[(2)] = inst_92745);

(statearr_92861_96324[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (51))){
var inst_92499 = (state_92759[(18)]);
var inst_92424 = (state_92759[(21)]);
var inst_92426 = (state_92759[(34)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_92759,(50),new cljs.core.Keyword(null,"default","default",-1987822328),null,(49));
var inst_92499__$1 = com.wsscode.pathom.connect.call_resolver(inst_92424,inst_92426);
var inst_92500 = com.wsscode.async.async_cljs.chan_QMARK_(inst_92499__$1);
var state_92759__$1 = (function (){var statearr_92862 = state_92759;
(statearr_92862[(18)] = inst_92499__$1);

return statearr_92862;
})();
if(inst_92500){
var statearr_92863_96325 = state_92759__$1;
(statearr_92863_96325[(1)] = (52));

} else {
var statearr_92864_96326 = state_92759__$1;
(statearr_92864_96326[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (25))){
var inst_92424 = (state_92759[(21)]);
var inst_92443 = com.wsscode.pathom.connect.parallel_batch(inst_92424);
var state_92759__$1 = state_92759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92759__$1,(28),inst_92443);
} else {
if((state_val_92760 === (34))){
var inst_92466 = (state_92759[(44)]);
var inst_92471 = inst_92466.cljs$lang$protocol_mask$partition0$;
var inst_92472 = (inst_92471 & (64));
var inst_92473 = inst_92466.cljs$core$ISeq$;
var inst_92474 = (cljs.core.PROTOCOL_SENTINEL === inst_92473);
var inst_92475 = ((inst_92472) || (inst_92474));
var state_92759__$1 = state_92759;
if(cljs.core.truth_(inst_92475)){
var statearr_92865_96327 = state_92759__$1;
(statearr_92865_96327[(1)] = (37));

} else {
var statearr_92866_96328 = state_92759__$1;
(statearr_92866_96328[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (17))){
var inst_92420 = (state_92759[(40)]);
var state_92759__$1 = state_92759;
if(cljs.core.truth_(inst_92420)){
var statearr_92867_96329 = state_92759__$1;
(statearr_92867_96329[(1)] = (19));

} else {
var statearr_92868_96330 = state_92759__$1;
(statearr_92868_96330[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (3))){
var inst_92757 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_92759__$1,inst_92757);
} else {
if((state_val_92760 === (12))){
var inst_92411 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_92871_96331 = state_92759__$1;
(statearr_92871_96331[(2)] = inst_92411);

(statearr_92871_96331[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (2))){
var inst_92377 = (state_92759[(15)]);
var inst_92386 = (state_92759[(25)]);
var inst_92385 = cljs.core.seq(inst_92377);
var inst_92386__$1 = cljs.core.first(inst_92385);
var inst_92387 = cljs.core.next(inst_92385);
var state_92759__$1 = (function (){var statearr_92872 = state_92759;
(statearr_92872[(13)] = inst_92387);

(statearr_92872[(25)] = inst_92386__$1);

return statearr_92872;
})();
if(cljs.core.truth_(inst_92386__$1)){
var statearr_92873_96333 = state_92759__$1;
(statearr_92873_96333[(1)] = (4));

} else {
var statearr_92874_96334 = state_92759__$1;
(statearr_92874_96334[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (66))){
var inst_92378 = (state_92759[(11)]);
var inst_92380 = (state_92759[(12)]);
var inst_92379 = (state_92759[(8)]);
var inst_92393 = (state_92759[(16)]);
var inst_92540 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(inst_92380,inst_92393);
var tmp92869 = inst_92378;
var tmp92870 = inst_92379;
var inst_92377 = plan;
var inst_92378__$1 = tmp92869;
var inst_92379__$1 = tmp92870;
var inst_92380__$1 = inst_92540;
var state_92759__$1 = (function (){var statearr_92875 = state_92759;
(statearr_92875[(11)] = inst_92378__$1);

(statearr_92875[(12)] = inst_92380__$1);

(statearr_92875[(8)] = inst_92379__$1);

(statearr_92875[(15)] = inst_92377);

return statearr_92875;
})();
var statearr_92876_96335 = state_92759__$1;
(statearr_92876_96335[(2)] = null);

(statearr_92876_96335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (107))){
var inst_92701 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_92877_96338 = state_92759__$1;
(statearr_92877_96338[(2)] = inst_92701);

(statearr_92877_96338[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (23))){
var inst_92421 = (state_92759[(38)]);
var state_92759__$1 = state_92759;
var statearr_92878_96339 = state_92759__$1;
(statearr_92878_96339[(2)] = inst_92421);

(statearr_92878_96339[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (47))){
var state_92759__$1 = state_92759;
var statearr_92879_96340 = state_92759__$1;
(statearr_92879_96340[(2)] = null);

(statearr_92879_96340[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (35))){
var state_92759__$1 = state_92759;
var statearr_92881_96341 = state_92759__$1;
(statearr_92881_96341[(2)] = false);

(statearr_92881_96341[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (82))){
var inst_92747 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_92882_96342 = state_92759__$1;
(statearr_92882_96342[(2)] = inst_92747);

(statearr_92882_96342[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (76))){
var inst_92560 = (state_92759[(42)]);
var inst_92380 = (state_92759[(12)]);
var inst_92565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_92560,(0),null);
var inst_92566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_92560,(1),null);
var inst_92567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_92560,(2),null);
var tmp92880 = inst_92380;
var inst_92377 = inst_92565;
var inst_92378 = inst_92566;
var inst_92379 = inst_92567;
var inst_92380__$1 = tmp92880;
var state_92759__$1 = (function (){var statearr_92883 = state_92759;
(statearr_92883[(11)] = inst_92378);

(statearr_92883[(12)] = inst_92380__$1);

(statearr_92883[(8)] = inst_92379);

(statearr_92883[(15)] = inst_92377);

return statearr_92883;
})();
var statearr_92884_96343 = state_92759__$1;
(statearr_92884_96343[(2)] = null);

(statearr_92884_96343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (97))){
var inst_92387 = (state_92759[(13)]);
var inst_92647 = (state_92759[(2)]);
var inst_92648 = cljs.core.seq(inst_92387);
var state_92759__$1 = (function (){var statearr_92885 = state_92759;
(statearr_92885[(43)] = inst_92647);

return statearr_92885;
})();
if(inst_92648){
var statearr_92886_96344 = state_92759__$1;
(statearr_92886_96344[(1)] = (98));

} else {
var statearr_92887_96345 = state_92759__$1;
(statearr_92887_96345[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (19))){
var inst_92421 = (state_92759[(38)]);
var state_92759__$1 = state_92759;
if(cljs.core.truth_(inst_92421)){
var statearr_92888_96347 = state_92759__$1;
(statearr_92888_96347[(1)] = (22));

} else {
var statearr_92889_96348 = state_92759__$1;
(statearr_92889_96348[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (57))){
var state_92759__$1 = state_92759;
var statearr_92890_96349 = state_92759__$1;
(statearr_92890_96349[(1)] = (60));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (68))){
var inst_92751 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_92892_96350 = state_92759__$1;
(statearr_92892_96350[(2)] = inst_92751);

(statearr_92892_96350[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (11))){
var state_92759__$1 = state_92759;
var statearr_92893_96351 = state_92759__$1;
(statearr_92893_96351[(2)] = false);

(statearr_92893_96351[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (115))){
var inst_92711 = (state_92759[(41)]);
var inst_92711__$1 = (state_92759[(2)]);
var state_92759__$1 = (function (){var statearr_92894 = state_92759;
(statearr_92894[(41)] = inst_92711__$1);

return statearr_92894;
})();
if(cljs.core.truth_(inst_92711__$1)){
var statearr_92895_96353 = state_92759__$1;
(statearr_92895_96353[(1)] = (116));

} else {
var statearr_92896_96354 = state_92759__$1;
(statearr_92896_96354[(1)] = (117));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (9))){
var inst_92414 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
if(cljs.core.truth_(inst_92414)){
var statearr_92897_96355 = state_92759__$1;
(statearr_92897_96355[(1)] = (13));

} else {
var statearr_92898_96356 = state_92759__$1;
(statearr_92898_96356[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (5))){
var inst_92753 = cljs.core.async.close_BANG_(ch);
var state_92759__$1 = state_92759;
var statearr_92899_96357 = state_92759__$1;
(statearr_92899_96357[(2)] = inst_92753);

(statearr_92899_96357[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (112))){
var inst_92537 = (state_92759[(22)]);
var inst_92536 = (state_92759[(7)]);
var inst_92704 = cljs.core.PersistentHashMap.EMPTY;
var inst_92705 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_92706 = [inst_92536];
var inst_92707 = cljs.core.PersistentHashMap.fromArrays(inst_92705,inst_92706);
var inst_92708 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_92707);
var inst_92709 = (inst_92537.cljs$core$IFn$_invoke$arity$2 ? inst_92537.cljs$core$IFn$_invoke$arity$2(inst_92704,inst_92708) : inst_92537.call(null,inst_92704,inst_92708));
var state_92759__$1 = state_92759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92759__$1,(115),inst_92709);
} else {
if((state_val_92760 === (83))){
var inst_92394 = (state_92759[(24)]);
var inst_92598 = (state_92759[(10)]);
var inst_92424 = (state_92759[(21)]);
var inst_92588 = (state_92759[(30)]);
var inst_92423 = (state_92759[(39)]);
var inst_92598__$1 = com.wsscode.pathom.connect.output__GT_provides(inst_92423);
var inst_92599 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_92600 = [new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),key,inst_92394];
var inst_92601 = cljs.core.PersistentHashMap.fromArrays(inst_92599,inst_92600);
var inst_92602 = com.wsscode.pathom.trace.trace(inst_92424,inst_92601);
var inst_92603 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_92604 = [inst_92598__$1,inst_92588];
var inst_92605 = cljs.core.PersistentHashMap.fromArrays(inst_92603,inst_92604);
var state_92759__$1 = (function (){var statearr_92900 = state_92759;
(statearr_92900[(53)] = inst_92602);

(statearr_92900[(10)] = inst_92598__$1);

return statearr_92900;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_92759__$1,(86),ch,inst_92605);
} else {
if((state_val_92760 === (14))){
var inst_92398 = (state_92759[(9)]);
var state_92759__$1 = state_92759;
var statearr_92901_96360 = state_92759__$1;
(statearr_92901_96360[(2)] = inst_92398);

(statearr_92901_96360[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (45))){
var inst_92492 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_92902_96361 = state_92759__$1;
(statearr_92902_96361[(2)] = inst_92492);

(statearr_92902_96361[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (53))){
var inst_92499 = (state_92759[(18)]);
var inst_92506 = com.wsscode.async.async_cljs.promise_QMARK_(inst_92499);
var state_92759__$1 = state_92759;
if(cljs.core.truth_(inst_92506)){
var statearr_92903_96362 = state_92759__$1;
(statearr_92903_96362[(1)] = (56));

} else {
var statearr_92904_96363 = state_92759__$1;
(statearr_92904_96363[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (78))){
var inst_92582 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_92905_96364 = state_92759__$1;
(statearr_92905_96364[(2)] = inst_92582);

(statearr_92905_96364[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (26))){
var inst_92429 = (state_92759[(37)]);
var inst_92394 = (state_92759[(24)]);
var inst_92378 = (state_92759[(11)]);
var inst_92422 = (state_92759[(33)]);
var inst_92380 = (state_92759[(12)]);
var inst_92424 = (state_92759[(21)]);
var inst_92379 = (state_92759[(8)]);
var inst_92393 = (state_92759[(16)]);
var inst_92421 = (state_92759[(38)]);
var inst_92377 = (state_92759[(15)]);
var inst_92375 = (state_92759[(19)]);
var inst_92374 = (state_92759[(20)]);
var inst_92387 = (state_92759[(13)]);
var inst_92423 = (state_92759[(39)]);
var inst_92426 = (state_92759[(34)]);
var inst_92419 = (state_92759[(35)]);
var inst_92420 = (state_92759[(40)]);
var inst_92425 = (state_92759[(36)]);
var inst_92386 = (state_92759[(25)]);
var inst_92447 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_92429,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_92448 = com.wsscode.pathom.trace.trace(inst_92424,inst_92447);
var inst_92449 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_92450 = [inst_92394,inst_92426,params];
var inst_92451 = (new cljs.core.PersistentVector(null,3,(5),inst_92449,inst_92450,null));
var inst_92452 = (function (){var input = inst_92422;
var seq__92371 = inst_92375;
var step = inst_92386;
var entity = inst_92425;
var key_SINGLEQUOTE_ = inst_92393;
var cache_QMARK_ = inst_92420;
var out_left = inst_92379;
var first__92372 = inst_92374;
var failed_resolvers = inst_92378;
var G__92369 = inst_92377;
var vec__92389 = inst_92386;
var map__92392 = inst_92419;
var batch_QMARK_ = inst_92421;
var output = inst_92423;
var env__$2 = inst_92424;
var e = inst_92426;
var resolver_sym = inst_92394;
var waiting__$1 = inst_92380;
var trace_data = inst_92429;
var resolver = inst_92419;
var seq__92383 = inst_92387;
var tail = inst_92387;
var first__92384 = inst_92386;
var vec__92370 = plan;
var vec__92382 = inst_92377;
return ((function (input,seq__92371,step,entity,key_SINGLEQUOTE_,cache_QMARK_,out_left,first__92372,failed_resolvers,G__92369,vec__92389,map__92392,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,seq__92383,tail,first__92384,vec__92370,vec__92382,inst_92429,inst_92394,inst_92378,inst_92422,inst_92380,inst_92424,inst_92379,inst_92393,inst_92421,inst_92377,inst_92375,inst_92374,inst_92387,inst_92423,inst_92426,inst_92419,inst_92420,inst_92425,inst_92386,inst_92447,inst_92448,inst_92449,inst_92450,inst_92451,state_val_92760,c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___96367__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___96367__$1,ch__53519__auto__,input,seq__92371,step,entity,key_SINGLEQUOTE_,cache_QMARK_,out_left,first__92372,failed_resolvers,G__92369,vec__92389,map__92392,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,seq__92383,tail,first__92384,vec__92370,vec__92382,inst_92429,inst_92394,inst_92378,inst_92422,inst_92380,inst_92424,inst_92379,inst_92393,inst_92421,inst_92377,inst_92375,inst_92374,inst_92387,inst_92423,inst_92426,inst_92419,inst_92420,inst_92425,inst_92386,inst_92447,inst_92448,inst_92449,inst_92450,inst_92451,state_val_92760,c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___96367__$1,ch__53519__auto__,input,seq__92371,step,entity,key_SINGLEQUOTE_,cache_QMARK_,out_left,first__92372,failed_resolvers,G__92369,vec__92389,map__92392,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,seq__92383,tail,first__92384,vec__92370,vec__92382,inst_92429,inst_92394,inst_92378,inst_92422,inst_92380,inst_92424,inst_92379,inst_92393,inst_92421,inst_92377,inst_92375,inst_92374,inst_92387,inst_92423,inst_92426,inst_92419,inst_92420,inst_92425,inst_92386,inst_92447,inst_92448,inst_92449,inst_92450,inst_92451,state_val_92760,c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (state_92933){
var state_val_92934 = (state_92933[(1)]);
if((state_val_92934 === (7))){
var inst_92917 = (state_92933[(7)]);
var inst_92917__$1 = (state_92933[(2)]);
var state_92933__$1 = (function (){var statearr_92935 = state_92933;
(statearr_92935[(7)] = inst_92917__$1);

return statearr_92935;
})();
if(cljs.core.truth_(inst_92917__$1)){
var statearr_92936_96369 = state_92933__$1;
(statearr_92936_96369[(1)] = (9));

} else {
var statearr_92937_96370 = state_92933__$1;
(statearr_92937_96370[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92934 === (1))){
var state_92933__$1 = state_92933;
var statearr_92938_96371 = state_92933__$1;
(statearr_92938_96371[(2)] = null);

(statearr_92938_96371[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92934 === (4))){
var inst_92910 = (state_92933[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_92933,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_92910__$1 = com.wsscode.pathom.connect.call_resolver(env__$2,e);
var inst_92911 = com.wsscode.async.async_cljs.chan_QMARK_(inst_92910__$1);
var state_92933__$1 = (function (){var statearr_92939 = state_92933;
(statearr_92939[(8)] = inst_92910__$1);

return statearr_92939;
})();
if(inst_92911){
var statearr_92940_96372 = state_92933__$1;
(statearr_92940_96372[(1)] = (5));

} else {
var statearr_92941_96373 = state_92933__$1;
(statearr_92941_96373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92934 === (13))){
var inst_92924 = (state_92933[(9)]);
var inst_92929 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_92924);
var state_92933__$1 = state_92933;
var statearr_92942_96375 = state_92933__$1;
(statearr_92942_96375[(2)] = inst_92929);

(statearr_92942_96375[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92934 === (6))){
var inst_92910 = (state_92933[(8)]);
var state_92933__$1 = state_92933;
var statearr_92943_96376 = state_92933__$1;
(statearr_92943_96376[(2)] = inst_92910);

(statearr_92943_96376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92934 === (3))){
var inst_92906 = (state_92933[(2)]);
var state_92933__$1 = state_92933;
var statearr_92944_96377 = state_92933__$1;
(statearr_92944_96377[(2)] = inst_92906);


cljs.core.async.impl.ioc_helpers.process_exception(state_92933__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92934 === (12))){
var inst_92927 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_92933__$1 = state_92933;
var statearr_92945_96378 = state_92933__$1;
(statearr_92945_96378[(2)] = inst_92927);

(statearr_92945_96378[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92934 === (2))){
var inst_92924 = (state_92933[(9)]);
var inst_92924__$1 = (state_92933[(2)]);
var inst_92925 = (inst_92924__$1 == null);
var state_92933__$1 = (function (){var statearr_92946 = state_92933;
(statearr_92946[(9)] = inst_92924__$1);

return statearr_92946;
})();
if(cljs.core.truth_(inst_92925)){
var statearr_92947_96380 = state_92933__$1;
(statearr_92947_96380[(1)] = (12));

} else {
var statearr_92948_96381 = state_92933__$1;
(statearr_92948_96381[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92934 === (11))){
var inst_92922 = (state_92933[(2)]);
var state_92933__$1 = state_92933;
var statearr_92949_96382 = state_92933__$1;
(statearr_92949_96382[(2)] = inst_92922);


cljs.core.async.impl.ioc_helpers.process_exception(state_92933__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92934 === (9))){
var inst_92917 = (state_92933[(7)]);
var state_92933__$1 = state_92933;
var statearr_92950_96383 = state_92933__$1;
(statearr_92950_96383[(2)] = inst_92917);

(statearr_92950_96383[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92934 === (5))){
var inst_92910 = (state_92933[(8)]);
var state_92933__$1 = state_92933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92933__$1,(8),inst_92910);
} else {
if((state_val_92934 === (14))){
var inst_92931 = (state_92933[(2)]);
var state_92933__$1 = state_92933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_92933__$1,inst_92931);
} else {
if((state_val_92934 === (10))){
var inst_92920 = cljs.core.PersistentHashMap.EMPTY;
var state_92933__$1 = state_92933;
var statearr_92951_96384 = state_92933__$1;
(statearr_92951_96384[(2)] = inst_92920);

(statearr_92951_96384[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92934 === (8))){
var inst_92914 = (state_92933[(2)]);
var state_92933__$1 = state_92933;
var statearr_92952_96385 = state_92933__$1;
(statearr_92952_96385[(2)] = inst_92914);

(statearr_92952_96385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47946__auto___96367__$1,ch__53519__auto__,input,seq__92371,step,entity,key_SINGLEQUOTE_,cache_QMARK_,out_left,first__92372,failed_resolvers,G__92369,vec__92389,map__92392,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,seq__92383,tail,first__92384,vec__92370,vec__92382,inst_92429,inst_92394,inst_92378,inst_92422,inst_92380,inst_92424,inst_92379,inst_92393,inst_92421,inst_92377,inst_92375,inst_92374,inst_92387,inst_92423,inst_92426,inst_92419,inst_92420,inst_92425,inst_92386,inst_92447,inst_92448,inst_92449,inst_92450,inst_92451,state_val_92760,c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
;
return ((function (switch__47663__auto__,c__47946__auto___96367__$1,ch__53519__auto__,input,seq__92371,step,entity,key_SINGLEQUOTE_,cache_QMARK_,out_left,first__92372,failed_resolvers,G__92369,vec__92389,map__92392,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,seq__92383,tail,first__92384,vec__92370,vec__92382,inst_92429,inst_92394,inst_92378,inst_92422,inst_92380,inst_92424,inst_92379,inst_92393,inst_92421,inst_92377,inst_92375,inst_92374,inst_92387,inst_92423,inst_92426,inst_92419,inst_92420,inst_92425,inst_92386,inst_92447,inst_92448,inst_92449,inst_92450,inst_92451,state_val_92760,c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____0 = (function (){
var statearr_92953 = [null,null,null,null,null,null,null,null,null,null];
(statearr_92953[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__);

(statearr_92953[(1)] = (1));

return statearr_92953;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____1 = (function (state_92933){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_92933);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e92954){if((e92954 instanceof Object)){
var ex__47667__auto__ = e92954;
var statearr_92955_96389 = state_92933;
(statearr_92955_96389[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_92933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92954;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__96390 = state_92933;
state_92933 = G__96390;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__ = function(state_92933){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____1.call(this,state_92933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___96367__$1,ch__53519__auto__,input,seq__92371,step,entity,key_SINGLEQUOTE_,cache_QMARK_,out_left,first__92372,failed_resolvers,G__92369,vec__92389,map__92392,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,seq__92383,tail,first__92384,vec__92370,vec__92382,inst_92429,inst_92394,inst_92378,inst_92422,inst_92380,inst_92424,inst_92379,inst_92393,inst_92421,inst_92377,inst_92375,inst_92374,inst_92387,inst_92423,inst_92426,inst_92419,inst_92420,inst_92425,inst_92386,inst_92447,inst_92448,inst_92449,inst_92450,inst_92451,state_val_92760,c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var state__47948__auto__ = (function (){var statearr_92956 = f__47947__auto__();
(statearr_92956[(6)] = c__47946__auto___96367__$1);

return statearr_92956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___96367__$1,ch__53519__auto__,input,seq__92371,step,entity,key_SINGLEQUOTE_,cache_QMARK_,out_left,first__92372,failed_resolvers,G__92369,vec__92389,map__92392,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,seq__92383,tail,first__92384,vec__92370,vec__92382,inst_92429,inst_92394,inst_92378,inst_92422,inst_92380,inst_92424,inst_92379,inst_92393,inst_92421,inst_92377,inst_92375,inst_92374,inst_92387,inst_92423,inst_92426,inst_92419,inst_92420,inst_92425,inst_92386,inst_92447,inst_92448,inst_92449,inst_92450,inst_92451,state_val_92760,c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
);


return ch__53519__auto__;
});
;})(input,seq__92371,step,entity,key_SINGLEQUOTE_,cache_QMARK_,out_left,first__92372,failed_resolvers,G__92369,vec__92389,map__92392,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,seq__92383,tail,first__92384,vec__92370,vec__92382,inst_92429,inst_92394,inst_92378,inst_92422,inst_92380,inst_92424,inst_92379,inst_92393,inst_92421,inst_92377,inst_92375,inst_92374,inst_92387,inst_92423,inst_92426,inst_92419,inst_92420,inst_92425,inst_92386,inst_92447,inst_92448,inst_92449,inst_92450,inst_92451,state_val_92760,c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_92453 = com.wsscode.pathom.core.cached_async(inst_92424,inst_92451,inst_92452);
var state_92759__$1 = (function (){var statearr_92957 = state_92759;
(statearr_92957[(54)] = inst_92448);

return statearr_92957;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92759__$1,(29),inst_92453);
} else {
if((state_val_92760 === (16))){
var inst_92393 = (state_92759[(16)]);
var inst_92425 = (state_92759[(36)]);
var inst_92432 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_92433 = [inst_92393];
var inst_92434 = (new cljs.core.PersistentVector(null,1,(5),inst_92432,inst_92433,null));
var inst_92435 = cljs.core.select_keys(inst_92425,inst_92434);
var state_92759__$1 = state_92759;
var statearr_92958_96392 = state_92759__$1;
(statearr_92958_96392[(2)] = inst_92435);

(statearr_92958_96392[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (81))){
var inst_92536 = (state_92759[(7)]);
var inst_92664 = com.wsscode.async.async_cljs.error_QMARK_(inst_92536);
var state_92759__$1 = state_92759;
if(inst_92664){
var statearr_92959_96393 = state_92759__$1;
(statearr_92959_96393[(1)] = (101));

} else {
var statearr_92960_96394 = state_92759__$1;
(statearr_92960_96394[(1)] = (102));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (79))){
var inst_92579 = (state_92759[(2)]);
var inst_92580 = cljs.core.async.close_BANG_(ch);
var state_92759__$1 = (function (){var statearr_92961 = state_92759;
(statearr_92961[(55)] = inst_92579);

return statearr_92961;
})();
var statearr_92962_96395 = state_92759__$1;
(statearr_92962_96395[(2)] = inst_92580);

(statearr_92962_96395[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (38))){
var state_92759__$1 = state_92759;
var statearr_92963_96396 = state_92759__$1;
(statearr_92963_96396[(2)] = false);

(statearr_92963_96396[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (98))){
var inst_92647 = (state_92759[(43)]);
var inst_92393 = (state_92759[(16)]);
var inst_92650 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_92647,inst_92393,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882));
var state_92759__$1 = state_92759;
var statearr_92964_96397 = state_92759__$1;
(statearr_92964_96397[(2)] = inst_92650);

(statearr_92964_96397[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (87))){
var inst_92617 = (state_92759[(23)]);
var inst_92617__$1 = (state_92759[(2)]);
var state_92759__$1 = (function (){var statearr_92965 = state_92759;
(statearr_92965[(23)] = inst_92617__$1);

return statearr_92965;
})();
if(cljs.core.truth_(inst_92617__$1)){
var statearr_92966_96399 = state_92759__$1;
(statearr_92966_96399[(1)] = (88));

} else {
var statearr_92967_96400 = state_92759__$1;
(statearr_92967_96400[(1)] = (89));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (30))){
var inst_92429 = (state_92759[(37)]);
var inst_92424 = (state_92759[(21)]);
var inst_92393 = (state_92759[(16)]);
var inst_92461 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inst_92429,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","waiting-resolver","com.wsscode.pathom.connect/waiting-resolver",-321792495),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","waiting-key","com.wsscode.pathom.connect/waiting-key",261572653),inst_92393], 0));
var inst_92462 = com.wsscode.pathom.trace.trace(inst_92424,inst_92461);
var inst_92464 = com.wsscode.pathom.parser.watch_pending_key(inst_92424,inst_92393);
var state_92759__$1 = (function (){var statearr_92968 = state_92759;
(statearr_92968[(56)] = inst_92462);

return statearr_92968;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92759__$1,(33),inst_92464);
} else {
if((state_val_92760 === (73))){
var inst_92537 = (state_92759[(22)]);
var inst_92393 = (state_92759[(16)]);
var inst_92553 = cljs.core.PersistentHashMap.EMPTY;
var inst_92554 = [new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_92555 = [inst_92393];
var inst_92556 = cljs.core.PersistentHashMap.fromArrays(inst_92554,inst_92555);
var inst_92557 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Waited key missed response",inst_92556);
var inst_92558 = (inst_92537.cljs$core$IFn$_invoke$arity$2 ? inst_92537.cljs$core$IFn$_invoke$arity$2(inst_92553,inst_92557) : inst_92537.call(null,inst_92553,inst_92557));
var state_92759__$1 = state_92759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92759__$1,(75),inst_92558);
} else {
if((state_val_92760 === (96))){
var inst_92588 = (state_92759[(30)]);
var state_92759__$1 = state_92759;
var statearr_92969_96402 = state_92759__$1;
(statearr_92969_96402[(2)] = inst_92588);

(statearr_92969_96402[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (10))){
var state_92759__$1 = state_92759;
var statearr_92971_96404 = state_92759__$1;
(statearr_92971_96404[(2)] = true);

(statearr_92971_96404[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (18))){
var inst_92429 = (state_92759[(37)]);
var inst_92394 = (state_92759[(24)]);
var inst_92378 = (state_92759[(11)]);
var inst_92422 = (state_92759[(33)]);
var inst_92380 = (state_92759[(12)]);
var inst_92424 = (state_92759[(21)]);
var inst_92536 = (state_92759[(7)]);
var inst_92379 = (state_92759[(8)]);
var inst_92393 = (state_92759[(16)]);
var inst_92421 = (state_92759[(38)]);
var inst_92377 = (state_92759[(15)]);
var inst_92375 = (state_92759[(19)]);
var inst_92374 = (state_92759[(20)]);
var inst_92387 = (state_92759[(13)]);
var inst_92423 = (state_92759[(39)]);
var inst_92426 = (state_92759[(34)]);
var inst_92419 = (state_92759[(35)]);
var inst_92420 = (state_92759[(40)]);
var inst_92425 = (state_92759[(36)]);
var inst_92386 = (state_92759[(25)]);
var inst_92536__$1 = (state_92759[(2)]);
var inst_92537 = (function (){var input = inst_92422;
var seq__92371 = inst_92375;
var step = inst_92386;
var entity = inst_92425;
var key_SINGLEQUOTE_ = inst_92393;
var response = inst_92536__$1;
var cache_QMARK_ = inst_92420;
var out_left = inst_92379;
var first__92372 = inst_92374;
var failed_resolvers = inst_92378;
var G__92369 = inst_92377;
var vec__92389 = inst_92386;
var map__92392 = inst_92419;
var batch_QMARK_ = inst_92421;
var output = inst_92423;
var env__$2 = inst_92424;
var e = inst_92426;
var resolver_sym = inst_92394;
var waiting__$1 = inst_92380;
var trace_data = inst_92429;
var resolver = inst_92419;
var seq__92383 = inst_92387;
var tail = inst_92387;
var first__92384 = inst_92386;
var vec__92370 = plan;
var vec__92382 = inst_92377;
return ((function (input,seq__92371,step,entity,key_SINGLEQUOTE_,response,cache_QMARK_,out_left,first__92372,failed_resolvers,G__92369,vec__92389,map__92392,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,seq__92383,tail,first__92384,vec__92370,vec__92382,inst_92429,inst_92394,inst_92378,inst_92422,inst_92380,inst_92424,inst_92536,inst_92379,inst_92393,inst_92421,inst_92377,inst_92375,inst_92374,inst_92387,inst_92423,inst_92426,inst_92419,inst_92420,inst_92425,inst_92386,inst_92536__$1,state_val_92760,c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (value,error){
var c__47946__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto____$1,input,seq__92371,step,entity,key_SINGLEQUOTE_,response,cache_QMARK_,out_left,first__92372,failed_resolvers,G__92369,vec__92389,map__92392,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,seq__92383,tail,first__92384,vec__92370,vec__92382,inst_92429,inst_92394,inst_92378,inst_92422,inst_92380,inst_92424,inst_92536,inst_92379,inst_92393,inst_92421,inst_92377,inst_92375,inst_92374,inst_92387,inst_92423,inst_92426,inst_92419,inst_92420,inst_92425,inst_92386,inst_92536__$1,state_val_92760,c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto____$1,input,seq__92371,step,entity,key_SINGLEQUOTE_,response,cache_QMARK_,out_left,first__92372,failed_resolvers,G__92369,vec__92389,map__92392,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,seq__92383,tail,first__92384,vec__92370,vec__92382,inst_92429,inst_92394,inst_92378,inst_92422,inst_92380,inst_92424,inst_92536,inst_92379,inst_92393,inst_92421,inst_92377,inst_92375,inst_92374,inst_92387,inst_92423,inst_92426,inst_92419,inst_92420,inst_92425,inst_92386,inst_92536__$1,state_val_92760,c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (state_92994){
var state_val_92995 = (state_92994[(1)]);
if((state_val_92995 === (1))){
var inst_92975 = (state_92994[(7)]);
var inst_92972 = (state_92994[(8)]);
var inst_92972__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers,resolver_sym,error);
var inst_92973 = (function (){var failed_resolvers__$1 = inst_92972__$1;
return ((function (failed_resolvers__$1,inst_92975,inst_92972,inst_92972__$1,state_val_92995,c__47946__auto____$1,input,seq__92371,step,entity,key_SINGLEQUOTE_,response,cache_QMARK_,out_left,first__92372,failed_resolvers,G__92369,vec__92389,map__92392,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,seq__92383,tail,first__92384,vec__92370,vec__92382,inst_92429,inst_92394,inst_92378,inst_92422,inst_92380,inst_92424,inst_92536,inst_92379,inst_92393,inst_92421,inst_92377,inst_92375,inst_92374,inst_92387,inst_92423,inst_92426,inst_92419,inst_92420,inst_92425,inst_92386,inst_92536__$1,state_val_92760,c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (p1__92357_SHARP_){
var x__4222__auto__ = ((function (){var or__4131__auto__ = p1__92357_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() * (2));
var y__4223__auto__ = max_resolver_weight;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});
;})(failed_resolvers__$1,inst_92975,inst_92972,inst_92972__$1,state_val_92995,c__47946__auto____$1,input,seq__92371,step,entity,key_SINGLEQUOTE_,response,cache_QMARK_,out_left,first__92372,failed_resolvers,G__92369,vec__92389,map__92392,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,seq__92383,tail,first__92384,vec__92370,vec__92382,inst_92429,inst_92394,inst_92378,inst_92422,inst_92380,inst_92424,inst_92536,inst_92379,inst_92393,inst_92421,inst_92377,inst_92375,inst_92374,inst_92387,inst_92423,inst_92426,inst_92419,inst_92420,inst_92425,inst_92386,inst_92536__$1,state_val_92760,c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_92974 = com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$2,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_92973], 0));
var inst_92975__$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$2,inst_92972__$1);
var state_92994__$1 = (function (){var statearr_92996 = state_92994;
(statearr_92996[(7)] = inst_92975__$1);

(statearr_92996[(8)] = inst_92972__$1);

(statearr_92996[(9)] = inst_92974);

return statearr_92996;
})();
if(cljs.core.truth_(inst_92975__$1)){
var statearr_92997_96408 = state_92994__$1;
(statearr_92997_96408[(1)] = (2));

} else {
var statearr_92998_96410 = state_92994__$1;
(statearr_92998_96410[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92995 === (2))){
var inst_92981 = (state_92994[(10)]);
var inst_92975 = (state_92994[(7)]);
var inst_92980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_92975,(0),null);
var inst_92981__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_92975,(1),null);
var inst_92982 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_92983 = [out,inst_92981__$1,value];
var inst_92984 = cljs.core.PersistentHashMap.fromArrays(inst_92982,inst_92983);
var state_92994__$1 = (function (){var statearr_92999 = state_92994;
(statearr_92999[(10)] = inst_92981__$1);

(statearr_92999[(11)] = inst_92980);

return statearr_92999;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_92994__$1,(5),ch,inst_92984);
} else {
if((state_val_92995 === (3))){
var state_92994__$1 = state_92994;
var statearr_93000_96411 = state_92994__$1;
(statearr_93000_96411[(2)] = null);

(statearr_93000_96411[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92995 === (4))){
var inst_92992 = (state_92994[(2)]);
var state_92994__$1 = state_92994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_92994__$1,inst_92992);
} else {
if((state_val_92995 === (5))){
var inst_92981 = (state_92994[(10)]);
var inst_92972 = (state_92994[(8)]);
var inst_92980 = (state_92994[(11)]);
var inst_92986 = (state_92994[(2)]);
var inst_92987 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_92988 = [inst_92980,inst_92972,inst_92981];
var inst_92989 = (new cljs.core.PersistentVector(null,3,(5),inst_92987,inst_92988,null));
var state_92994__$1 = (function (){var statearr_93001 = state_92994;
(statearr_93001[(12)] = inst_92986);

return statearr_93001;
})();
var statearr_93002_96413 = state_92994__$1;
(statearr_93002_96413[(2)] = inst_92989);

(statearr_93002_96413[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto____$1,input,seq__92371,step,entity,key_SINGLEQUOTE_,response,cache_QMARK_,out_left,first__92372,failed_resolvers,G__92369,vec__92389,map__92392,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,seq__92383,tail,first__92384,vec__92370,vec__92382,inst_92429,inst_92394,inst_92378,inst_92422,inst_92380,inst_92424,inst_92536,inst_92379,inst_92393,inst_92421,inst_92377,inst_92375,inst_92374,inst_92387,inst_92423,inst_92426,inst_92419,inst_92420,inst_92425,inst_92386,inst_92536__$1,state_val_92760,c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
;
return ((function (switch__47663__auto__,c__47946__auto____$1,input,seq__92371,step,entity,key_SINGLEQUOTE_,response,cache_QMARK_,out_left,first__92372,failed_resolvers,G__92369,vec__92389,map__92392,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,seq__92383,tail,first__92384,vec__92370,vec__92382,inst_92429,inst_92394,inst_92378,inst_92422,inst_92380,inst_92424,inst_92536,inst_92379,inst_92393,inst_92421,inst_92377,inst_92375,inst_92374,inst_92387,inst_92423,inst_92426,inst_92419,inst_92420,inst_92425,inst_92386,inst_92536__$1,state_val_92760,c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____0 = (function (){
var statearr_93003 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_93003[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__);

(statearr_93003[(1)] = (1));

return statearr_93003;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____1 = (function (state_92994){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_92994);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e93004){if((e93004 instanceof Object)){
var ex__47667__auto__ = e93004;
var statearr_93005_96414 = state_92994;
(statearr_93005_96414[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_92994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93004;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__96415 = state_92994;
state_92994 = G__96415;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__ = function(state_92994){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____1.call(this,state_92994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto____$1,input,seq__92371,step,entity,key_SINGLEQUOTE_,response,cache_QMARK_,out_left,first__92372,failed_resolvers,G__92369,vec__92389,map__92392,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,seq__92383,tail,first__92384,vec__92370,vec__92382,inst_92429,inst_92394,inst_92378,inst_92422,inst_92380,inst_92424,inst_92536,inst_92379,inst_92393,inst_92421,inst_92377,inst_92375,inst_92374,inst_92387,inst_92423,inst_92426,inst_92419,inst_92420,inst_92425,inst_92386,inst_92536__$1,state_val_92760,c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var state__47948__auto__ = (function (){var statearr_93006 = f__47947__auto__();
(statearr_93006[(6)] = c__47946__auto____$1);

return statearr_93006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto____$1,input,seq__92371,step,entity,key_SINGLEQUOTE_,response,cache_QMARK_,out_left,first__92372,failed_resolvers,G__92369,vec__92389,map__92392,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,seq__92383,tail,first__92384,vec__92370,vec__92382,inst_92429,inst_92394,inst_92378,inst_92422,inst_92380,inst_92424,inst_92536,inst_92379,inst_92393,inst_92421,inst_92377,inst_92375,inst_92374,inst_92387,inst_92423,inst_92426,inst_92419,inst_92420,inst_92425,inst_92386,inst_92536__$1,state_val_92760,c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
);

return c__47946__auto____$1;
});
;})(input,seq__92371,step,entity,key_SINGLEQUOTE_,response,cache_QMARK_,out_left,first__92372,failed_resolvers,G__92369,vec__92389,map__92392,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,seq__92383,tail,first__92384,vec__92370,vec__92382,inst_92429,inst_92394,inst_92378,inst_92422,inst_92380,inst_92424,inst_92536,inst_92379,inst_92393,inst_92421,inst_92377,inst_92375,inst_92374,inst_92387,inst_92423,inst_92426,inst_92419,inst_92420,inst_92425,inst_92386,inst_92536__$1,state_val_92760,c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_92538 = (new cljs.core.Keyword("com.wsscode.pathom.parser","watch-pending-timeout","com.wsscode.pathom.parser/watch-pending-timeout",1047721820) === inst_92536__$1);
var state_92759__$1 = (function (){var statearr_93007 = state_92759;
(statearr_93007[(22)] = inst_92537);

(statearr_93007[(7)] = inst_92536__$1);

return statearr_93007;
})();
if(cljs.core.truth_(inst_92538)){
var statearr_93008_96416 = state_92759__$1;
(statearr_93008_96416[(1)] = (66));

} else {
var statearr_93009_96417 = state_92759__$1;
(statearr_93009_96417[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (105))){
var inst_92380 = (state_92759[(12)]);
var inst_92669 = (state_92759[(32)]);
var inst_92674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_92669,(0),null);
var inst_92675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_92669,(1),null);
var inst_92676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_92669,(2),null);
var tmp92970 = inst_92380;
var inst_92377 = inst_92674;
var inst_92378 = inst_92675;
var inst_92379 = inst_92676;
var inst_92380__$1 = tmp92970;
var state_92759__$1 = (function (){var statearr_93010 = state_92759;
(statearr_93010[(11)] = inst_92378);

(statearr_93010[(12)] = inst_92380__$1);

(statearr_93010[(8)] = inst_92379);

(statearr_93010[(15)] = inst_92377);

return statearr_93010;
})();
var statearr_93011_96419 = state_92759__$1;
(statearr_93011_96419[(2)] = null);

(statearr_93011_96419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (52))){
var inst_92499 = (state_92759[(18)]);
var state_92759__$1 = state_92759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92759__$1,(55),inst_92499);
} else {
if((state_val_92760 === (114))){
var inst_92743 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_93012_96420 = state_92759__$1;
(statearr_93012_96420[(2)] = inst_92743);

(statearr_93012_96420[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (67))){
var inst_92536 = (state_92759[(7)]);
var inst_92543 = (new cljs.core.Keyword("com.wsscode.pathom.connect","watch-ready","com.wsscode.pathom.connect/watch-ready",943560359) === inst_92536);
var state_92759__$1 = state_92759;
if(cljs.core.truth_(inst_92543)){
var statearr_93013_96421 = state_92759__$1;
(statearr_93013_96421[(1)] = (69));

} else {
var statearr_93014_96423 = state_92759__$1;
(statearr_93014_96423[(1)] = (70));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (71))){
var inst_92749 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_93015_96424 = state_92759__$1;
(statearr_93015_96424[(2)] = inst_92749);

(statearr_93015_96424[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (42))){
var inst_92488 = (state_92759[(51)]);
var inst_92487 = (state_92759[(2)]);
var inst_92488__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_92487,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973));
var state_92759__$1 = (function (){var statearr_93016 = state_92759;
(statearr_93016[(51)] = inst_92488__$1);

return statearr_93016;
})();
if(cljs.core.truth_(inst_92488__$1)){
var statearr_93017_96426 = state_92759__$1;
(statearr_93017_96426[(1)] = (43));

} else {
var statearr_93018_96427 = state_92759__$1;
(statearr_93018_96427[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (80))){
var inst_92429 = (state_92759[(37)]);
var inst_92394 = (state_92759[(24)]);
var inst_92378 = (state_92759[(11)]);
var inst_92422 = (state_92759[(33)]);
var inst_92380 = (state_92759[(12)]);
var inst_92537 = (state_92759[(22)]);
var inst_92424 = (state_92759[(21)]);
var inst_92588 = (state_92759[(30)]);
var inst_92536 = (state_92759[(7)]);
var inst_92379 = (state_92759[(8)]);
var inst_92393 = (state_92759[(16)]);
var inst_92421 = (state_92759[(38)]);
var inst_92377 = (state_92759[(15)]);
var inst_92375 = (state_92759[(19)]);
var inst_92374 = (state_92759[(20)]);
var inst_92387 = (state_92759[(13)]);
var inst_92423 = (state_92759[(39)]);
var inst_92426 = (state_92759[(34)]);
var inst_92419 = (state_92759[(35)]);
var inst_92420 = (state_92759[(40)]);
var inst_92425 = (state_92759[(36)]);
var inst_92386 = (state_92759[(25)]);
var inst_92588__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_92536,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_92589 = (function (){var input = inst_92422;
var seq__92371 = inst_92375;
var step = inst_92386;
var entity = inst_92425;
var key_SINGLEQUOTE_ = inst_92393;
var response = inst_92588__$1;
var cache_QMARK_ = inst_92420;
var out_left = inst_92379;
var first__92372 = inst_92374;
var failed_resolvers = inst_92378;
var G__92369 = inst_92377;
var vec__92389 = inst_92386;
var map__92392 = inst_92419;
var batch_QMARK_ = inst_92421;
var output = inst_92423;
var env__$2 = inst_92424;
var e = inst_92426;
var resolver_sym = inst_92394;
var waiting__$1 = inst_92380;
var trace_data = inst_92429;
var resolver = inst_92419;
var seq__92383 = inst_92387;
var replan = inst_92537;
var tail = inst_92387;
var first__92384 = inst_92386;
var vec__92370 = plan;
var vec__92382 = inst_92377;
return ((function (input,seq__92371,step,entity,key_SINGLEQUOTE_,response,cache_QMARK_,out_left,first__92372,failed_resolvers,G__92369,vec__92389,map__92392,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,seq__92383,replan,tail,first__92384,vec__92370,vec__92382,inst_92429,inst_92394,inst_92378,inst_92422,inst_92380,inst_92537,inst_92424,inst_92588,inst_92536,inst_92379,inst_92393,inst_92421,inst_92377,inst_92375,inst_92374,inst_92387,inst_92423,inst_92426,inst_92419,inst_92420,inst_92425,inst_92386,inst_92588__$1,state_val_92760,c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (p1__92358_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__92358_SHARP_], 0));
});
;})(input,seq__92371,step,entity,key_SINGLEQUOTE_,response,cache_QMARK_,out_left,first__92372,failed_resolvers,G__92369,vec__92389,map__92392,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,seq__92383,replan,tail,first__92384,vec__92370,vec__92382,inst_92429,inst_92394,inst_92378,inst_92422,inst_92380,inst_92537,inst_92424,inst_92588,inst_92536,inst_92379,inst_92393,inst_92421,inst_92377,inst_92375,inst_92374,inst_92387,inst_92423,inst_92426,inst_92419,inst_92420,inst_92425,inst_92386,inst_92588__$1,state_val_92760,c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_92590 = com.wsscode.pathom.core.swap_entity_BANG_(inst_92424,inst_92589);
var inst_92592 = cljs.core.contains_QMARK_(inst_92588__$1,inst_92393);
var inst_92593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_92588__$1,inst_92393);
var inst_92594 = (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(inst_92593) : com.wsscode.pathom.core.break_values.call(null,inst_92593));
var inst_92595 = cljs.core.not(inst_92594);
var inst_92596 = ((inst_92592) && (inst_92595));
var state_92759__$1 = (function (){var statearr_93019 = state_92759;
(statearr_93019[(30)] = inst_92588__$1);

(statearr_93019[(57)] = inst_92590);

return statearr_93019;
})();
if(cljs.core.truth_(inst_92596)){
var statearr_93020_96429 = state_92759__$1;
(statearr_93020_96429[(1)] = (83));

} else {
var statearr_93021_96430 = state_92759__$1;
(statearr_93021_96430[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (37))){
var state_92759__$1 = state_92759;
var statearr_93022_96431 = state_92759__$1;
(statearr_93022_96431[(2)] = true);

(statearr_93022_96431[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (63))){
var inst_92520 = (state_92759[(31)]);
var state_92759__$1 = state_92759;
var statearr_93023_96432 = state_92759__$1;
(statearr_93023_96432[(2)] = inst_92520);

(statearr_93023_96432[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (94))){
var inst_92657 = (state_92759[(2)]);
var inst_92658 = cljs.core.async.close_BANG_(ch);
var state_92759__$1 = (function (){var statearr_93024 = state_92759;
(statearr_93024[(58)] = inst_92657);

return statearr_93024;
})();
var statearr_93025_96433 = state_92759__$1;
(statearr_93025_96433[(2)] = inst_92658);

(statearr_93025_96433[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (8))){
var state_92759__$1 = state_92759;
var statearr_93026_96434 = state_92759__$1;
(statearr_93026_96434[(2)] = false);

(statearr_93026_96434[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (49))){
var inst_92527 = (state_92759[(2)]);
var state_92759__$1 = state_92759;
var statearr_93027_96435 = state_92759__$1;
(statearr_93027_96435[(2)] = inst_92527);

(statearr_93027_96435[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92760 === (84))){
var inst_92537 = (state_92759[(22)]);
var inst_92588 = (state_92759[(30)]);
var inst_92393 = (state_92759[(16)]);
var inst_92611 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_92612 = [inst_92588,inst_92393];
var inst_92613 = cljs.core.PersistentHashMap.fromArrays(inst_92611,inst_92612);
var inst_92614 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_92613);
var inst_92615 = (inst_92537.cljs$core$IFn$_invoke$arity$2 ? inst_92537.cljs$core$IFn$_invoke$arity$2(inst_92588,inst_92614) : inst_92537.call(null,inst_92588,inst_92614));
var state_92759__$1 = state_92759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_92759__$1,(87),inst_92615);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
;
return ((function (switch__47663__auto__,c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____0 = (function (){
var statearr_93028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_93028[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__);

(statearr_93028[(1)] = (1));

return statearr_93028;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____1 = (function (state_92759){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_92759);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e93029){if((e93029 instanceof Object)){
var ex__47667__auto__ = e93029;
var statearr_93030_96436 = state_92759;
(statearr_93030_96436[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_92759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93029;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__96437 = state_92759;
state_92759 = G__96437;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__ = function(state_92759){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____1.call(this,state_92759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var state__47948__auto__ = (function (){var statearr_93031 = f__47947__auto__();
(statearr_93031[(6)] = c__47946__auto___96233);

return statearr_93031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___96233,ch,key,params,env__$1,vec__92363,plan,out,temp__5718__auto__,map__92361,map__92361__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
);


return ch;
})()], null);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.index_reader = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),(function (p__93032){
var map__93033 = p__93032;
var map__93033__$1 = (((((!((map__93033 == null))))?(((((map__93033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93033):map__93033);
var env = map__93033__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93033__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(indexes,env);
})], null);
com.wsscode.pathom.connect.indexed_ident = (function com$wsscode$pathom$connect$indexed_ident(p__93035){
var map__93036 = p__93035;
var map__93036__$1 = (((((!((map__93036 == null))))?(((((map__93036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93036):map__93036);
var env = map__93036__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93036__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var temp__5718__auto__ = com.wsscode.pathom.core.ident_key(env);
if(cljs.core.truth_(temp__5718__auto__)){
var attr = temp__5718__auto__;
if(cljs.core.contains_QMARK_(new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007).cljs$core$IFn$_invoke$arity$1(indexes),attr)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,com.wsscode.pathom.core.ident_value(env)]);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Helper to return a resolver map
 */
com.wsscode.pathom.connect.resolver = (function com$wsscode$pathom$connect$resolver(sym,p__93038,resolve){
var map__93039 = p__93038;
var map__93039__$1 = (((((!((map__93039 == null))))?(((((map__93039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93039):map__93039);
var options = map__93039__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93039__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322));
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Resolver name must be a symbol","\n","(symbol? sym)"].join('')));
}

var G__93041 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),resolve], null),options], 0));
if(cljs.core.truth_(transform)){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__93041) : transform.call(null,G__93041));
} else {
return G__93041;
}
});
com.wsscode.pathom.connect.attr_alias_name = (function com$wsscode$pathom$connect$attr_alias_name(from,to){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(from),(1)))),"->",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),(1))))].join(''));
});
/**
 * Create a resolver that will convert property `from` to a property `to` with
 *   the same value. This only creates the alias in one direction
 */
com.wsscode.pathom.connect.alias_resolver = (function com$wsscode$pathom$connect$alias_resolver(from,to){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),com.wsscode.pathom.connect.attr_alias_name(from,to),new cljs.core.Keyword("com.wsscode.pathom.connect","alias?","com.wsscode.pathom.connect/alias?",-1915061463),true,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.PersistentHashSet.createAsIfByAssoc([from]),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [to], null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),(function (_,input){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([to,cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,from)]);
})], null);
});
/**
 * Like alias-resolver, but returns a vector containing the alias in both directions.
 */
com.wsscode.pathom.connect.alias_resolver2 = (function com$wsscode$pathom$connect$alias_resolver2(from,to){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.alias_resolver(from,to),com.wsscode.pathom.connect.alias_resolver(to,from)], null);
});
/**
 * Create a simple resolver that always return `value` for `attribute`.
 */
com.wsscode.pathom.connect.constantly_resolver = (function com$wsscode$pathom$connect$constantly_resolver(var_args){
var G__93043 = arguments.length;
switch (G__93043) {
case 2:
return com.wsscode.pathom.connect.constantly_resolver.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.wsscode.pathom.connect.constantly_resolver.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.connect.constantly_resolver.cljs$core$IFn$_invoke$arity$2 = (function (attribute,value){
return com.wsscode.pathom.connect.constantly_resolver.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword(null,"value","value",305978217),value], null));
});

com.wsscode.pathom.connect.constantly_resolver.cljs$core$IFn$_invoke$arity$1 = (function (p__93044){
var map__93045 = p__93044;
var map__93045__$1 = (((((!((map__93045 == null))))?(((((map__93045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93045):map__93045);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93045__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93045__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93045__$1,new cljs.core.Keyword(null,"value","value",305978217));
var sym__$1 = (function (){var or__4131__auto__ = sym;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(attribute),(1)))),"-constant"].join(''));
}
})();
return com.wsscode.pathom.connect.resolver(sym__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attribute], null)], null),((function (sym__$1,map__93045,map__93045__$1,attribute,sym,value){
return (function (_,___$1){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([attribute,value]);
});})(sym__$1,map__93045,map__93045__$1,attribute,sym,value))
);
});

com.wsscode.pathom.connect.constantly_resolver.cljs$lang$maxFixedArity = 2;

/**
 * Apply fn `f` to input `from` and spits the result with the name `to`.
 * 
 *   `f` receives a single argument, which is the input value from `from`.
 */
com.wsscode.pathom.connect.single_attr_resolver = (function com$wsscode$pathom$connect$single_attr_resolver(from,to,f){
var sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.attr_alias_name(from,to)),"-single-attr-transform"].join(''));
return com.wsscode.pathom.connect.resolver(sym,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.PersistentHashSet.createAsIfByAssoc([from]),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [to], null)], null),((function (sym){
return (function (_,input){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([to,(function (){var G__93047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,from);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__93047) : f.call(null,G__93047));
})()]);
});})(sym))
);
});
/**
 * Similar single-attr-resolver, but `f` receives two arguments, `env` and the input.
 */
com.wsscode.pathom.connect.single_attr_resolver2 = (function com$wsscode$pathom$connect$single_attr_resolver2(from,to,f){
var sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.attr_alias_name(from,to)),"-single-attr-transform"].join(''));
return com.wsscode.pathom.connect.resolver(sym,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.PersistentHashSet.createAsIfByAssoc([from]),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [to], null)], null),((function (sym){
return (function (env,input){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([to,(function (){var G__93048 = env;
var G__93049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,from);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__93048,G__93049) : f.call(null,G__93048,G__93049));
})()]);
});})(sym))
);
});
/**
 * Helper to return a mutation map
 */
com.wsscode.pathom.connect.mutation = (function com$wsscode$pathom$connect$mutation(sym,p__93050,mutate){
var map__93051 = p__93050;
var map__93051__$1 = (((((!((map__93051 == null))))?(((((map__93051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93051):map__93051);
var options = map__93051__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93051__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322));
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Mutation name must be a symbol","\n","(symbol? sym)"].join('')));
}

var G__93053 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),mutate], null),options], 0));
if(cljs.core.truth_(transform)){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__93053) : transform.call(null,G__93053));
} else {
return G__93053;
}
});
/**
 * Reader for idents on connect, this reader will make a join to the ident making the
 *   context have that ident key and value. For example the ident [:user/id 123] will make
 *   a join to a context {:user/id 123}. This reader will continue if connect doesn't have
 *   a path to respond to that ident.
 * 
 *   This reader also supports params to add more context besides the entity value. To use
 *   that send the `:pathom/context` param with the join, as in:
 * 
 *   [{([:user/id 123] {:pathom/context {:user/foo "bar"}})
 *  [:user/name]}]
 * 
 *   In the previous case, the context will be the merge between the identity and the
 *   context, {:user/id 123 :user/foo "bar"} in this case.
 */
com.wsscode.pathom.connect.ident_reader = (function com$wsscode$pathom$connect$ident_reader(env){
var temp__5718__auto__ = com.wsscode.pathom.connect.indexed_ident(env);
if(cljs.core.truth_(temp__5718__auto__)){
var ent = temp__5718__auto__;
var extra_context = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("pathom","context","pathom/context",-1452257614)], null));
var ent__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ent,extra_context], 0));
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(ent__$1),env);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
/**
 * Like ident-reader, but ident key doesn't have to be in the index, this will respond
 *   to any ident join. Also supports extra context with :pathom/context param.
 */
com.wsscode.pathom.connect.open_ident_reader = (function com$wsscode$pathom$connect$open_ident_reader(env){
var temp__5718__auto__ = com.wsscode.pathom.core.ident_key(env);
if(cljs.core.truth_(temp__5718__auto__)){
var key = temp__5718__auto__;
var extra_context = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("pathom","context","pathom/context",-1452257614)], null));
var ent = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([key,com.wsscode.pathom.core.ident_value(env)]),extra_context], 0));
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(ent),env);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
/**
 * Return a resolver that will dispatch to single-fn when the input is a single value, and multi-fn when
 *   multiple inputs are provided (on batch cases).
 * 
 *   Many times the implementation for the single can be the same as the multi, getting the first item, and
 *   if you provide only one function (the multi-fn) we will setup the single one automatically running
 *   the multi and returning the first result.
 */
com.wsscode.pathom.connect.batch_resolver = (function com$wsscode$pathom$connect$batch_resolver(var_args){
var G__93055 = arguments.length;
switch (G__93055) {
case 1:
return com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$1 = (function (multi_fn){
return com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$2((function (env,input){
var res__53554__auto__ = (function (){var G__93056 = env;
var G__93057 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null);
return (multi_fn.cljs$core$IFn$_invoke$arity$2 ? multi_fn.cljs$core$IFn$_invoke$arity$2(G__93056,G__93057) : multi_fn.call(null,G__93056,G__93057));
})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53554__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53554__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53554__auto__){
return (function (state_93069){
var state_val_93070 = (state_93069[(1)]);
if((state_val_93070 === (1))){
var state_93069__$1 = state_93069;
var statearr_93071_96444 = state_93069__$1;
(statearr_93071_96444[(2)] = null);

(statearr_93071_96444[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93070 === (2))){
var inst_93067 = (state_93069[(2)]);
var state_93069__$1 = state_93069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_93069__$1,inst_93067);
} else {
if((state_val_93070 === (3))){
var inst_93058 = (state_93069[(2)]);
var state_93069__$1 = state_93069;
var statearr_93072_96445 = state_93069__$1;
(statearr_93072_96445[(2)] = inst_93058);


cljs.core.async.impl.ioc_helpers.process_exception(state_93069__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93070 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_93069,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_93069__$1 = state_93069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93069__$1,(5),res__53554__auto__);
} else {
if((state_val_93070 === (5))){
var inst_93063 = (state_93069[(2)]);
var inst_93064 = com.wsscode.async.async_cljs.throw_err(inst_93063);
var inst_93065 = cljs.core.first(inst_93064);
var state_93069__$1 = state_93069;
var statearr_93073_96446 = state_93069__$1;
(statearr_93073_96446[(2)] = inst_93065);


cljs.core.async.impl.ioc_helpers.process_exception(state_93069__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__,res__53554__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto__,res__53554__auto__){
return (function() {
var com$wsscode$pathom$connect$state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$state_machine__47664__auto____0 = (function (){
var statearr_93074 = [null,null,null,null,null,null,null];
(statearr_93074[(0)] = com$wsscode$pathom$connect$state_machine__47664__auto__);

(statearr_93074[(1)] = (1));

return statearr_93074;
});
var com$wsscode$pathom$connect$state_machine__47664__auto____1 = (function (state_93069){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_93069);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e93075){if((e93075 instanceof Object)){
var ex__47667__auto__ = e93075;
var statearr_93076_96447 = state_93069;
(statearr_93076_96447[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_93069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93075;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__96449 = state_93069;
state_93069 = G__96449;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$state_machine__47664__auto__ = function(state_93069){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$state_machine__47664__auto____1.call(this,state_93069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$state_machine__47664__auto____0;
com$wsscode$pathom$connect$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$state_machine__47664__auto____1;
return com$wsscode$pathom$connect$state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__))
})();
var state__47948__auto__ = (function (){var statearr_93077 = f__47947__auto__();
(statearr_93077[(6)] = c__47946__auto__);

return statearr_93077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,res__53554__auto__))
);

return c__47946__auto__;
} else {
var res = res__53554__auto__;
return cljs.core.first(res);
}
}),multi_fn);
});

com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$2 = (function (single_fn,multi_fn){
return (function (env,input){
if(cljs.core.sequential_QMARK_(input)){
return (multi_fn.cljs$core$IFn$_invoke$arity$2 ? multi_fn.cljs$core$IFn$_invoke$arity$2(env,input) : multi_fn.call(null,env,input));
} else {
return (single_fn.cljs$core$IFn$_invoke$arity$2 ? single_fn.cljs$core$IFn$_invoke$arity$2(env,input) : single_fn.call(null,env,input));
}
});
});

com.wsscode.pathom.connect.batch_resolver.cljs$lang$maxFixedArity = 2;

/**
 * Given a resolver that implements the many case, return one that also supports the
 *   single case by running the many and taking the first result out.
 */
com.wsscode.pathom.connect.transform_batch_resolver = (function com$wsscode$pathom$connect$transform_batch_resolver(resolver){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resolver,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),true),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),com.wsscode.pathom.connect.batch_resolver);
});
/**
 * Given a resolver that implements the single item case, wrap it implementing a batch
 *   resolver that will make a batch by running many in parallel, using `n` as the concurrency
 *   number.
 */
com.wsscode.pathom.connect.transform_auto_batch = (function com$wsscode$pathom$connect$transform_auto_batch(n){
return (function (p__93078){
var map__93079 = p__93078;
var map__93079__$1 = (((((!((map__93079 == null))))?(((((map__93079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93079):map__93079);
var resolver = map__93079__$1;
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93079__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(resolver,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$1(((function (map__93079,map__93079__$1,resolver,resolve){
return (function (env,inputs){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__93079,map__93079__$1,resolver,resolve){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__93079,map__93079__$1,resolver,resolve){
return (function (state_93091){
var state_val_93092 = (state_93091[(1)]);
if((state_val_93092 === (1))){
var inst_93081 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var inst_93082 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var inst_93083 = cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(inst_93081,inputs);
var inst_93084 = (function (){var from_chan = inst_93081;
var out_chan = inst_93082;
return ((function (from_chan,out_chan,inst_93081,inst_93082,inst_93083,state_val_93092,c__47946__auto__,map__93079,map__93079__$1,resolver,resolve){
return (function com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline(input,res_ch){
var c__47946__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto____$1,from_chan,out_chan,inst_93081,inst_93082,inst_93083,state_val_93092,c__47946__auto__,map__93079,map__93079__$1,resolver,resolve){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto____$1,from_chan,out_chan,inst_93081,inst_93082,inst_93083,state_val_93092,c__47946__auto__,map__93079,map__93079__$1,resolver,resolve){
return (function (state_93105){
var state_val_93106 = (state_93105[(1)]);
if((state_val_93106 === (1))){
var inst_93093 = (state_93105[(7)]);
var inst_93093__$1 = (resolve.cljs$core$IFn$_invoke$arity$2 ? resolve.cljs$core$IFn$_invoke$arity$2(env,input) : resolve.call(null,env,input));
var inst_93094 = com.wsscode.async.async_cljs.chan_QMARK_(inst_93093__$1);
var state_93105__$1 = (function (){var statearr_93107 = state_93105;
(statearr_93107[(7)] = inst_93093__$1);

return statearr_93107;
})();
if(inst_93094){
var statearr_93108_96450 = state_93105__$1;
(statearr_93108_96450[(1)] = (2));

} else {
var statearr_93109_96451 = state_93105__$1;
(statearr_93109_96451[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93106 === (2))){
var inst_93093 = (state_93105[(7)]);
var state_93105__$1 = state_93105;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93105__$1,(5),inst_93093);
} else {
if((state_val_93106 === (3))){
var inst_93093 = (state_93105[(7)]);
var state_93105__$1 = state_93105;
var statearr_93110_96452 = state_93105__$1;
(statearr_93110_96452[(2)] = inst_93093);

(statearr_93110_96452[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93106 === (4))){
var inst_93100 = (state_93105[(2)]);
var state_93105__$1 = state_93105;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_93105__$1,(6),res_ch,inst_93100);
} else {
if((state_val_93106 === (5))){
var inst_93097 = (state_93105[(2)]);
var state_93105__$1 = state_93105;
var statearr_93111_96453 = state_93105__$1;
(statearr_93111_96453[(2)] = inst_93097);

(statearr_93111_96453[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93106 === (6))){
var inst_93102 = (state_93105[(2)]);
var inst_93103 = cljs.core.async.close_BANG_(res_ch);
var state_93105__$1 = (function (){var statearr_93112 = state_93105;
(statearr_93112[(8)] = inst_93102);

return statearr_93112;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_93105__$1,inst_93103);
} else {
return null;
}
}
}
}
}
}
});})(c__47946__auto____$1,from_chan,out_chan,inst_93081,inst_93082,inst_93083,state_val_93092,c__47946__auto__,map__93079,map__93079__$1,resolver,resolve))
;
return ((function (switch__47663__auto__,c__47946__auto____$1,from_chan,out_chan,inst_93081,inst_93082,inst_93083,state_val_93092,c__47946__auto__,map__93079,map__93079__$1,resolver,resolve){
return (function() {
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__47664__auto____0 = (function (){
var statearr_93113 = [null,null,null,null,null,null,null,null,null];
(statearr_93113[(0)] = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__47664__auto__);

(statearr_93113[(1)] = (1));

return statearr_93113;
});
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__47664__auto____1 = (function (state_93105){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_93105);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e93114){if((e93114 instanceof Object)){
var ex__47667__auto__ = e93114;
var statearr_93115_96455 = state_93105;
(statearr_93115_96455[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_93105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93114;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__96456 = state_93105;
state_93105 = G__96456;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__47664__auto__ = function(state_93105){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__47664__auto____1.call(this,state_93105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto____$1,from_chan,out_chan,inst_93081,inst_93082,inst_93083,state_val_93092,c__47946__auto__,map__93079,map__93079__$1,resolver,resolve))
})();
var state__47948__auto__ = (function (){var statearr_93116 = f__47947__auto__();
(statearr_93116[(6)] = c__47946__auto____$1);

return statearr_93116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto____$1,from_chan,out_chan,inst_93081,inst_93082,inst_93083,state_val_93092,c__47946__auto__,map__93079,map__93079__$1,resolver,resolve))
);

return c__47946__auto____$1;
});
;})(from_chan,out_chan,inst_93081,inst_93082,inst_93083,state_val_93092,c__47946__auto__,map__93079,map__93079__$1,resolver,resolve))
})();
var inst_93085 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4(n,inst_93082,inst_93084,inst_93081);
var inst_93086 = cljs.core.PersistentVector.EMPTY;
var inst_93087 = cljs.core.async.into(inst_93086,inst_93082);
var state_93091__$1 = (function (){var statearr_93117 = state_93091;
(statearr_93117[(7)] = inst_93083);

(statearr_93117[(8)] = inst_93085);

return statearr_93117;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93091__$1,(2),inst_93087);
} else {
if((state_val_93092 === (2))){
var inst_93089 = (state_93091[(2)]);
var state_93091__$1 = state_93091;
return cljs.core.async.impl.ioc_helpers.return_chan(state_93091__$1,inst_93089);
} else {
return null;
}
}
});})(c__47946__auto__,map__93079,map__93079__$1,resolver,resolve))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__93079,map__93079__$1,resolver,resolve){
return (function() {
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__47664__auto____0 = (function (){
var statearr_93118 = [null,null,null,null,null,null,null,null,null];
(statearr_93118[(0)] = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__47664__auto__);

(statearr_93118[(1)] = (1));

return statearr_93118;
});
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__47664__auto____1 = (function (state_93091){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_93091);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e93119){if((e93119 instanceof Object)){
var ex__47667__auto__ = e93119;
var statearr_93120_96457 = state_93091;
(statearr_93120_96457[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_93091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93119;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__96458 = state_93091;
state_93091 = G__96458;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__47664__auto__ = function(state_93091){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__47664__auto____1.call(this,state_93091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__93079,map__93079__$1,resolver,resolve))
})();
var state__47948__auto__ = (function (){var statearr_93121 = f__47947__auto__();
(statearr_93121[(6)] = c__47946__auto__);

return statearr_93121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__93079,map__93079__$1,resolver,resolve))
);

return c__47946__auto__;
});})(map__93079,map__93079__$1,resolver,resolve))
)], 0));
});
});
com.wsscode.pathom.connect.all_readers = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.reader,com.wsscode.pathom.connect.ident_reader,com.wsscode.pathom.connect.index_reader], null);
com.wsscode.pathom.connect.all_async_readers = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.async_reader,com.wsscode.pathom.connect.ident_reader,com.wsscode.pathom.connect.index_reader], null);
com.wsscode.pathom.connect.all_parallel_readers = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.ident_reader,com.wsscode.pathom.connect.index_reader], null);
/**
 * Helper method that extract key from ast symbol from env. It's recommended to use as a dispatch method for creating
 *   multi-methods for mutation dispatch.
 */
com.wsscode.pathom.connect.mutation_dispatch = (function com$wsscode$pathom$connect$mutation_dispatch(env,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
});
/**
 * This dispatch method will fire the mutation by looking at the ::pc/mutate
 *   key in the mutation map details.
 */
com.wsscode.pathom.connect.mutation_dispatch_embedded = (function com$wsscode$pathom$connect$mutation_dispatch_embedded(p__93122,entity){
var map__93123 = p__93122;
var map__93123__$1 = (((((!((map__93123 == null))))?(((((map__93123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93123):map__93123);
var env = map__93123__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93123__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var sym = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
var map__93125 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym], null));
var map__93125__$1 = (((((!((map__93125 == null))))?(((((map__93125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93125):map__93125);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93125__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112));
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ",["Can't find mutate fn for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),"\n","mutate"].join('')));
}

return (mutate.cljs$core$IFn$_invoke$arity$2 ? mutate.cljs$core$IFn$_invoke$arity$2(env,entity) : mutate.call(null,env,entity));
});
/**
 * Sync mutate function to integrate connect mutations to pathom parser.
 */
com.wsscode.pathom.connect.mutate = (function com$wsscode$pathom$connect$mutate(p__93127,sym_SINGLEQUOTE_,p__93128){
var map__93129 = p__93127;
var map__93129__$1 = (((((!((map__93129 == null))))?(((((map__93129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93129):map__93129);
var env = map__93129__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93129__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var mutate_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93129__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069));
var mutation_join_globals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__93129__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.PersistentVector.EMPTY);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93129__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93129__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__93130 = p__93128;
var map__93130__$1 = (((((!((map__93130 == null))))?(((((map__93130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93130):map__93130);
var input = map__93130__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93130__$1,new cljs.core.Keyword("pathom","context","pathom/context",-1452257614));
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym_SINGLEQUOTE_], null));
if(cljs.core.truth_(temp__5718__auto__)){
var map__93133 = temp__5718__auto__;
var map__93133__$1 = (((((!((map__93133 == null))))?(((((map__93133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93133):map__93133);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93133__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),sym);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env__$1,map__93133,map__93133__$1,sym,temp__5718__auto__,map__93129,map__93129__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__93130,map__93130__$1,input,context){
return (function (){
var res = (function (){var G__93135 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","source-mutation","com.wsscode.pathom.connect/source-mutation",-674985123),sym_SINGLEQUOTE_);
var G__93136 = input;
return (mutate_dispatch.cljs$core$IFn$_invoke$arity$2 ? mutate_dispatch.cljs$core$IFn$_invoke$arity$2(G__93135,G__93136) : mutate_dispatch.call(null,G__93135,G__93136));
})();
var res__$1 = (function (){var G__93137 = res;
if(cljs.core.truth_((function (){var and__4120__auto__ = context;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.map_QMARK_(res);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__93137,context], 0));
} else {
return G__93137;
}
})();
if(cljs.core.truth_((function (){var and__4120__auto__ = query;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.map_QMARK_(res__$1);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(res__$1,mutation_join_globals),com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(res__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-ast","com.wsscode.pathom.connect/mutation-ast",-602347707),ast))], 0));
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(res__$1,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378));
}
});})(env__$1,map__93133,map__93133__$1,sym,temp__5718__auto__,map__93129,map__93129__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__93130,map__93130__$1,input,context))
], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Mutation not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutation","mutation",-285823378),sym_SINGLEQUOTE_], null));
}
});
/**
 * Async mutate function to integrate connect mutations to pathom parser.
 */
com.wsscode.pathom.connect.mutate_async = (function com$wsscode$pathom$connect$mutate_async(p__93138,sym_SINGLEQUOTE_,p__93139){
var map__93140 = p__93138;
var map__93140__$1 = (((((!((map__93140 == null))))?(((((map__93140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93140):map__93140);
var env = map__93140__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93140__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var mutate_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93140__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069));
var mutation_join_globals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__93140__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.PersistentVector.EMPTY);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93140__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93140__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__93141 = p__93139;
var map__93141__$1 = (((((!((map__93141 == null))))?(((((map__93141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93141):map__93141);
var input = map__93141__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93141__$1,new cljs.core.Keyword("pathom","context","pathom/context",-1452257614));
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym_SINGLEQUOTE_], null));
if(cljs.core.truth_(temp__5718__auto__)){
var map__93144 = temp__5718__auto__;
var map__93144__$1 = (((((!((map__93144 == null))))?(((((map__93144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93144):map__93144);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93144__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),sym);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env__$1,map__93144,map__93144__$1,sym,temp__5718__auto__,map__93140,map__93140__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__93141,map__93141__$1,input,context){
return (function (){
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___96462 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___96462,ch__53519__auto__,env__$1,map__93144,map__93144__$1,sym,temp__5718__auto__,map__93140,map__93140__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__93141,map__93141__$1,input,context){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___96462,ch__53519__auto__,env__$1,map__93144,map__93144__$1,sym,temp__5718__auto__,map__93140,map__93140__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__93141,map__93141__$1,input,context){
return (function (state_93207){
var state_val_93208 = (state_93207[(1)]);
if((state_val_93208 === (7))){
var inst_93172 = (state_93207[(2)]);
var state_93207__$1 = (function (){var statearr_93209 = state_93207;
(statearr_93209[(7)] = inst_93172);

return statearr_93209;
})();
if(cljs.core.truth_(context)){
var statearr_93210_96463 = state_93207__$1;
(statearr_93210_96463[(1)] = (16));

} else {
var statearr_93211_96464 = state_93207__$1;
(statearr_93211_96464[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93208 === (20))){
var inst_93172 = (state_93207[(7)]);
var state_93207__$1 = state_93207;
var statearr_93212_96465 = state_93207__$1;
(statearr_93212_96465[(2)] = inst_93172);

(statearr_93212_96465[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93208 === (27))){
var inst_93198 = (state_93207[(8)]);
var inst_93203 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_93198);
var state_93207__$1 = state_93207;
var statearr_93213_96466 = state_93207__$1;
(statearr_93213_96466[(2)] = inst_93203);

(statearr_93213_96466[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93208 === (1))){
var state_93207__$1 = state_93207;
var statearr_93214_96467 = state_93207__$1;
(statearr_93214_96467[(2)] = null);

(statearr_93214_96467[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93208 === (24))){
var inst_93196 = (state_93207[(2)]);
var state_93207__$1 = state_93207;
var statearr_93215_96468 = state_93207__$1;
(statearr_93215_96468[(2)] = inst_93196);


cljs.core.async.impl.ioc_helpers.process_exception(state_93207__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93208 === (4))){
var inst_93151 = (state_93207[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_93207,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_93150 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","source-mutation","com.wsscode.pathom.connect/source-mutation",-674985123),sym_SINGLEQUOTE_);
var inst_93151__$1 = (mutate_dispatch.cljs$core$IFn$_invoke$arity$2 ? mutate_dispatch.cljs$core$IFn$_invoke$arity$2(inst_93150,input) : mutate_dispatch.call(null,inst_93150,input));
var inst_93152 = com.wsscode.async.async_cljs.chan_QMARK_(inst_93151__$1);
var state_93207__$1 = (function (){var statearr_93216 = state_93207;
(statearr_93216[(9)] = inst_93151__$1);

return statearr_93216;
})();
if(inst_93152){
var statearr_93217_96469 = state_93207__$1;
(statearr_93217_96469[(1)] = (5));

} else {
var statearr_93218_96470 = state_93207__$1;
(statearr_93218_96470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93208 === (15))){
var inst_93168 = (state_93207[(2)]);
var state_93207__$1 = state_93207;
var statearr_93219_96471 = state_93207__$1;
(statearr_93219_96471[(2)] = inst_93168);

(statearr_93219_96471[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93208 === (21))){
var inst_93183 = (state_93207[(2)]);
var state_93207__$1 = (function (){var statearr_93220 = state_93207;
(statearr_93220[(10)] = inst_93183);

return statearr_93220;
})();
if(cljs.core.truth_(query)){
var statearr_93221_96472 = state_93207__$1;
(statearr_93221_96472[(1)] = (22));

} else {
var statearr_93222_96473 = state_93207__$1;
(statearr_93222_96473[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93208 === (13))){
var inst_93151 = (state_93207[(9)]);
var state_93207__$1 = state_93207;
var statearr_93223_96474 = state_93207__$1;
(statearr_93223_96474[(2)] = inst_93151);

(statearr_93223_96474[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93208 === (22))){
var inst_93183 = (state_93207[(10)]);
var inst_93185 = cljs.core.select_keys(inst_93183,mutation_join_globals);
var inst_93186 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_93183);
var inst_93187 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-ast","com.wsscode.pathom.connect/mutation-ast",-602347707),ast);
var inst_93188 = com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(inst_93186,inst_93187);
var state_93207__$1 = (function (){var statearr_93224 = state_93207;
(statearr_93224[(11)] = inst_93185);

return statearr_93224;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93207__$1,(25),inst_93188);
} else {
if((state_val_93208 === (6))){
var inst_93151 = (state_93207[(9)]);
var inst_93158 = com.wsscode.async.async_cljs.promise_QMARK_(inst_93151);
var state_93207__$1 = state_93207;
if(cljs.core.truth_(inst_93158)){
var statearr_93225_96475 = state_93207__$1;
(statearr_93225_96475[(1)] = (9));

} else {
var statearr_93226_96476 = state_93207__$1;
(statearr_93226_96476[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93208 === (28))){
var inst_93205 = (state_93207[(2)]);
var state_93207__$1 = state_93207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_93207__$1,inst_93205);
} else {
if((state_val_93208 === (25))){
var inst_93185 = (state_93207[(11)]);
var inst_93190 = (state_93207[(2)]);
var inst_93191 = com.wsscode.async.async_cljs.throw_err(inst_93190);
var inst_93192 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_93185,inst_93191], 0));
var state_93207__$1 = state_93207;
var statearr_93227_96477 = state_93207__$1;
(statearr_93227_96477[(2)] = inst_93192);

(statearr_93227_96477[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93208 === (17))){
var state_93207__$1 = state_93207;
var statearr_93228_96478 = state_93207__$1;
(statearr_93228_96478[(2)] = context);

(statearr_93228_96478[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93208 === (3))){
var inst_93146 = (state_93207[(2)]);
var state_93207__$1 = state_93207;
var statearr_93229_96479 = state_93207__$1;
(statearr_93229_96479[(2)] = inst_93146);


cljs.core.async.impl.ioc_helpers.process_exception(state_93207__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93208 === (12))){
var inst_93162 = (state_93207[(2)]);
var inst_93163 = com.wsscode.async.async_cljs.consumer_pair(inst_93162);
var state_93207__$1 = state_93207;
var statearr_93230_96480 = state_93207__$1;
(statearr_93230_96480[(2)] = inst_93163);

(statearr_93230_96480[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93208 === (2))){
var inst_93198 = (state_93207[(8)]);
var inst_93198__$1 = (state_93207[(2)]);
var inst_93199 = (inst_93198__$1 == null);
var state_93207__$1 = (function (){var statearr_93231 = state_93207;
(statearr_93231[(8)] = inst_93198__$1);

return statearr_93231;
})();
if(cljs.core.truth_(inst_93199)){
var statearr_93232_96481 = state_93207__$1;
(statearr_93232_96481[(1)] = (26));

} else {
var statearr_93233_96483 = state_93207__$1;
(statearr_93233_96483[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93208 === (23))){
var inst_93183 = (state_93207[(10)]);
var inst_93194 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_93183,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378));
var state_93207__$1 = state_93207;
var statearr_93234_96484 = state_93207__$1;
(statearr_93234_96484[(2)] = inst_93194);

(statearr_93234_96484[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93208 === (19))){
var inst_93172 = (state_93207[(7)]);
var inst_93180 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_93172,context], 0));
var state_93207__$1 = state_93207;
var statearr_93235_96485 = state_93207__$1;
(statearr_93235_96485[(2)] = inst_93180);

(statearr_93235_96485[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93208 === (11))){
var inst_93170 = (state_93207[(2)]);
var state_93207__$1 = state_93207;
var statearr_93236_96486 = state_93207__$1;
(statearr_93236_96486[(2)] = inst_93170);

(statearr_93236_96486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93208 === (9))){
var inst_93151 = (state_93207[(9)]);
var inst_93160 = com.wsscode.async.async_cljs.promise__GT_chan(inst_93151);
var state_93207__$1 = state_93207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93207__$1,(12),inst_93160);
} else {
if((state_val_93208 === (5))){
var inst_93151 = (state_93207[(9)]);
var state_93207__$1 = state_93207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93207__$1,(8),inst_93151);
} else {
if((state_val_93208 === (14))){
var state_93207__$1 = state_93207;
var statearr_93237_96487 = state_93207__$1;
(statearr_93237_96487[(2)] = null);

(statearr_93237_96487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93208 === (26))){
var inst_93201 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_93207__$1 = state_93207;
var statearr_93238_96488 = state_93207__$1;
(statearr_93238_96488[(2)] = inst_93201);

(statearr_93238_96488[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93208 === (16))){
var inst_93172 = (state_93207[(7)]);
var inst_93175 = cljs.core.map_QMARK_(inst_93172);
var state_93207__$1 = state_93207;
var statearr_93239_96489 = state_93207__$1;
(statearr_93239_96489[(2)] = inst_93175);

(statearr_93239_96489[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93208 === (10))){
var state_93207__$1 = state_93207;
var statearr_93240_96490 = state_93207__$1;
(statearr_93240_96490[(1)] = (13));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93208 === (18))){
var inst_93178 = (state_93207[(2)]);
var state_93207__$1 = state_93207;
if(cljs.core.truth_(inst_93178)){
var statearr_93242_96491 = state_93207__$1;
(statearr_93242_96491[(1)] = (19));

} else {
var statearr_93243_96492 = state_93207__$1;
(statearr_93243_96492[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93208 === (8))){
var inst_93155 = (state_93207[(2)]);
var inst_93156 = com.wsscode.async.async_cljs.throw_err(inst_93155);
var state_93207__$1 = state_93207;
var statearr_93244_96493 = state_93207__$1;
(statearr_93244_96493[(2)] = inst_93156);

(statearr_93244_96493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47946__auto___96462,ch__53519__auto__,env__$1,map__93144,map__93144__$1,sym,temp__5718__auto__,map__93140,map__93140__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__93141,map__93141__$1,input,context))
;
return ((function (switch__47663__auto__,c__47946__auto___96462,ch__53519__auto__,env__$1,map__93144,map__93144__$1,sym,temp__5718__auto__,map__93140,map__93140__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__93141,map__93141__$1,input,context){
return (function() {
var com$wsscode$pathom$connect$mutate_async_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$mutate_async_$_state_machine__47664__auto____0 = (function (){
var statearr_93245 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_93245[(0)] = com$wsscode$pathom$connect$mutate_async_$_state_machine__47664__auto__);

(statearr_93245[(1)] = (1));

return statearr_93245;
});
var com$wsscode$pathom$connect$mutate_async_$_state_machine__47664__auto____1 = (function (state_93207){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_93207);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e93246){if((e93246 instanceof Object)){
var ex__47667__auto__ = e93246;
var statearr_93247_96494 = state_93207;
(statearr_93247_96494[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_93207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93246;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__96495 = state_93207;
state_93207 = G__96495;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$mutate_async_$_state_machine__47664__auto__ = function(state_93207){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$mutate_async_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$mutate_async_$_state_machine__47664__auto____1.call(this,state_93207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$mutate_async_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$mutate_async_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$mutate_async_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$mutate_async_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$mutate_async_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___96462,ch__53519__auto__,env__$1,map__93144,map__93144__$1,sym,temp__5718__auto__,map__93140,map__93140__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__93141,map__93141__$1,input,context))
})();
var state__47948__auto__ = (function (){var statearr_93248 = f__47947__auto__();
(statearr_93248[(6)] = c__47946__auto___96462);

return statearr_93248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___96462,ch__53519__auto__,env__$1,map__93144,map__93144__$1,sym,temp__5718__auto__,map__93140,map__93140__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__93141,map__93141__$1,input,context))
);


return ch__53519__auto__;
});})(env__$1,map__93144,map__93144__$1,sym,temp__5718__auto__,map__93140,map__93140__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__93141,map__93141__$1,input,context))
], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Mutation not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutation","mutation",-285823378),sym_SINGLEQUOTE_], null));
}
});
/**
 * Given multi-method mm and index atom idx, returns a function with the given signature:
 * [sym config f], the function will be add to the mm and will be indexed using config as
 * the config params for connect/add.
 */
com.wsscode.pathom.connect.resolver_factory = (function com$wsscode$pathom$connect$resolver_factory(mm,idx){
return (function com$wsscode$pathom$connect$resolver_factory_$_resolver_factory_internal(sym,config,f){
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Resolver name must be a symbol","\n","(symbol? sym)"].join('')));
}

mm.cljs$core$IMultiFn$_add_method$arity$3(null,sym,(function (env,input){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(env,input) : f.call(null,env,input));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(idx,com.wsscode.pathom.connect.add,sym,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),f], null),config], 0)));
});
});
com.wsscode.pathom.connect.mutation_factory = (function com$wsscode$pathom$connect$mutation_factory(mm,idx){
return (function com$wsscode$pathom$connect$mutation_factory_$_mutation_factory_internal(sym,config,f){
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Mutation name must be a symbol","\n","(symbol? sym)"].join('')));
}

mm.cljs$core$IMultiFn$_add_method$arity$3(null,sym,(function (env,input){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(env,input) : f.call(null,env,input));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(idx,com.wsscode.pathom.connect.add_mutation,sym,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),f], null),config], 0)));
});
});
com.wsscode.pathom.connect.cached = (function com$wsscode$pathom$connect$cached(cache,x,f){
if(cljs.core.truth_(cache)){
if(cljs.core.contains_QMARK_(cljs.core.deref(cache),x)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache),x);
} else {
var res = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,x,res);

return res;
}
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
com.wsscode.pathom.connect.discover_attrs = (function com$wsscode$pathom$connect$discover_attrs(p__93253,ctx){
var map__93254 = p__93253;
var map__93254__$1 = (((((!((map__93254 == null))))?(((((map__93254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93254):map__93254);
var index = map__93254__$1;
var index_io = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93254__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93254__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache","com.wsscode.pathom.connect/cache",328991776));
return com.wsscode.pathom.connect.cached(cache,ctx,((function (map__93254,map__93254__$1,index,index_io,cache){
return (function (){
var base_keys = (((cljs.core.count(ctx) > (1)))?(function (){var tree = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__93254,map__93254__$1,index,index_io,cache){
return (function (a,b){
var attrs = (function (){var G__93256 = index;
var G__93257 = cljs.core.vec(b);
return (com.wsscode.pathom.connect.discover_attrs.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.discover_attrs.cljs$core$IFn$_invoke$arity$2(G__93256,G__93257) : com.wsscode.pathom.connect.discover_attrs.call(null,G__93256,G__93257));
})();
if((a == null)){
return attrs;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(a,cljs.core.reverse(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(b)),com.wsscode.pathom.connect.merge_io,attrs);
}
});})(map__93254,map__93254__$1,index,index_io,cache))
,null,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__93254,map__93254__$1,index,index_io,cache){
return (function (p1__93250_SHARP_,p2__93249_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(p2__93249_SHARP_) - (p1__93250_SHARP_ + (1))),p2__93249_SHARP_);
});})(map__93254,map__93254__$1,index,index_io,cache))
,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.count(ctx) - (1)),ctx)));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.vec(cljs.core.next(cljs.core.reverse(ctx))));
})():(function (){var G__93258 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(index_io,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.first(ctx)], null));
var G__93259 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(index_io,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(ctx)]),cljs.core.PersistentArrayMap.EMPTY);
return (com.wsscode.pathom.connect.merge_io.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.merge_io.cljs$core$IFn$_invoke$arity$2(G__93258,G__93259) : com.wsscode.pathom.connect.merge_io.call(null,G__93258,G__93259));
})());
var available = index_io;
var collected = base_keys;
while(true){
var attrs = cljs.core.set(cljs.core.keys(collected));
var matches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (available,collected,attrs,base_keys,map__93254,map__93254__$1,index,index_io,cache){
return (function (p__93264){
var vec__93265 = p__93264;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93265,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93265,(1),null);
return cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(k,attrs));
});})(available,collected,attrs,base_keys,map__93254,map__93254__$1,index,index_io,cache))
,available);
if(cljs.core.seq(matches)){
var G__96497 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (available,collected,attrs,matches,base_keys,map__93254,map__93254__$1,index,index_io,cache){
return (function (p1__93251_SHARP_,p2__93252_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__93251_SHARP_,p2__93252_SHARP_);
});})(available,collected,attrs,matches,base_keys,map__93254,map__93254__$1,index,index_io,cache))
,available,cljs.core.keys(matches));
var G__96498 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.connect.merge_io,collected,cljs.core.vals(matches));
available = G__96497;
collected = G__96498;
continue;
} else {
return collected;
}
break;
}
});})(map__93254,map__93254__$1,index,index_io,cache))
);
});
/**
 * This will use the ::index-resolvers to re-build the index. You might need that if in development you changed some definitions
 *   and got in a dirty state somehow
 */
com.wsscode.pathom.connect.reprocess_index = (function com$wsscode$pathom$connect$reprocess_index(p__93268){
var map__93269 = p__93268;
var map__93269__$1 = (((((!((map__93269 == null))))?(((((map__93269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93269):map__93269);
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93269__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256));
return cljs.core.reduce_kv(com.wsscode.pathom.connect.add,cljs.core.PersistentArrayMap.EMPTY,index_resolvers);
});
com.wsscode.pathom.connect.valid_eql_key_QMARK_ = (function com$wsscode$pathom$connect$valid_eql_key_QMARK_(k){
return (((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol)) || (edn_query_language.core.ident_QMARK_(k)));
});
com.wsscode.pathom.connect.optimize_empty_joins = (function com$wsscode$pathom$connect$optimize_empty_joins(x){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (y){
if(((cljs.core.map_QMARK_(y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.vals(y)),cljs.core.PersistentVector.EMPTY)))){
return cljs.core.ffirst(y);
} else {
return y;
}
}),x);
});
/**
 * Helper function to transform a data into an output shape.
 */
com.wsscode.pathom.connect.data__GT_shape = (function com$wsscode$pathom$connect$data__GT_shape(data){
if(cljs.core.map_QMARK_(data)){
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,(function (p1__93271_SHARP_){
if(cljs.core.map_QMARK_(p1__93271_SHARP_)){
return cljs.core.ffirst(p1__93271_SHARP_);
} else {
return p1__93271_SHARP_;
}
})),cljs.core.reduce_kv((function (out,k,v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,((cljs.core.map_QMARK_(v))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,(com.wsscode.pathom.connect.data__GT_shape.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.data__GT_shape.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.connect.data__GT_shape.call(null,v))]):((cljs.core.sequential_QMARK_(v))?(function (){var shape = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (q,x){
return com.wsscode.pathom.core.merge_queries(q,(com.wsscode.pathom.connect.data__GT_shape.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.data__GT_shape.cljs$core$IFn$_invoke$arity$1(x) : com.wsscode.pathom.connect.data__GT_shape.call(null,x)));
}),cljs.core.PersistentVector.EMPTY,v);
if(cljs.core.seq(shape)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,shape]);
} else {
return k;
}
})():k
)));
}),cljs.core.PersistentVector.EMPTY,data)));
} else {
return null;
}
});
/**
 * Sorts output list to match input list.
 * 
 *   When doing batch requests you must return a vector in the same order respective to
 *   the order of inputs. Many times when calling an external API sending a list of ids
 *   the returned list doesn't always garantee input order. To fix these cases this
 *   function can restore the order. Example:
 * 
 *    (fn batch-resolver [env inputs]
 *      ; inputs => [{:my.entity/id 1} {:my.entity/id 2}]
 *      (batch-restore-sort {::inputs inputs
 *                           ::key    :my.entity/id}
 *        [{:my.entity/id    2
 *          :my.entity/color :my.entity.color/green}
 *         {:my.entity/id    1
 *          :my.entity/color :my.entity.color/purple}])
 *      ; => [{:my.entity/id    1
 *      ;      :my.entity/color :my.entity.color/purple}
 *      ;     {:my.entity/id    2
 *      ;      :my.entity/color :my.entity.color/green}]
 * 
 *   You can provide a ::batch-default function to fill in for missing items on the output. The
 *   default function will take the respective input and must return a map containing
 *   any data you want to add, usually some nil keys to declare that value should not
 *   require further lookup.
 */
com.wsscode.pathom.connect.batch_restore_sort = (function com$wsscode$pathom$connect$batch_restore_sort(p__93273,items){
var map__93274 = p__93273;
var map__93274__$1 = (((((!((map__93274 == null))))?(((((map__93274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93274):map__93274);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93274__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","inputs","com.wsscode.pathom.connect/inputs",-1635802936));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93274__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","key","com.wsscode.pathom.connect/key",1316653363));
var batch_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93274__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch-default","com.wsscode.pathom.connect/batch-default",2069925724));
var index = cljs.core.group_by(key,items);
var batch_default__$1 = (function (){var or__4131__auto__ = batch_default;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,index,map__93274,map__93274__$1,inputs,key,batch_default){
return (function (p1__93272_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([key],[cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__93272_SHARP_,key)]);
});
;})(or__4131__auto__,index,map__93274,map__93274__$1,inputs,key,batch_default))
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (index,batch_default__$1,map__93274,map__93274__$1,inputs,key,batch_default){
return (function (input){
var or__4131__auto__ = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,key)));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (batch_default__$1.cljs$core$IFn$_invoke$arity$1 ? batch_default__$1.cljs$core$IFn$_invoke$arity$1(input) : batch_default__$1.call(null,input));
}
});})(index,batch_default__$1,map__93274,map__93274__$1,inputs,key,batch_default))
),inputs);
});
com.wsscode.pathom.connect.index_explorer_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","index-explorer-resolver","com.wsscode.pathom.connect/index-explorer-resolver",-1613438284,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))], null);
}));
com.wsscode.pathom.connect.indexes_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","indexes-resolver","com.wsscode.pathom.connect/indexes-resolver",-1892611171,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","autocomplete-ignore","com.wsscode.pathom.connect/autocomplete-ignore",-191717401),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null)], null)], null)], null)], null)], null),(function (p__93276,_){
var map__93277 = p__93276;
var map__93277__$1 = (((((!((map__93277 == null))))?(((((map__93277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93277):map__93277);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93277__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),indexes], null);
}));
com.wsscode.pathom.connect.resolver_weights_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","resolver-weights-resolver","com.wsscode.pathom.connect/resolver-weights-resolver",-600539046,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),(function (){var G__93279 = env;
var G__93279__$1 = (((G__93279 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772).cljs$core$IFn$_invoke$arity$1(G__93279));
if((G__93279__$1 == null)){
return null;
} else {
return cljs.core.deref(G__93279__$1);
}
})()], null);
}));
com.wsscode.pathom.connect.resolver_weights_sorted_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","resolver-weights-sorted-resolver","com.wsscode.pathom.connect/resolver-weights-sorted-resolver",-1672618105,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights-sorted","com.wsscode.pathom.connect/resolver-weights-sorted",1502939218)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights-sorted","com.wsscode.pathom.connect/resolver-weights-sorted",1502939218),(function (){var G__93282 = env;
var G__93282__$1 = (((G__93282 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772).cljs$core$IFn$_invoke$arity$1(G__93282));
var G__93282__$2 = (((G__93282__$1 == null))?null:cljs.core.deref(G__93282__$1));
if((G__93282__$2 == null)){
return null;
} else {
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.second,((function (G__93282,G__93282__$1,G__93282__$2){
return (function (p1__93281_SHARP_,p2__93280_SHARP_){
return cljs.core.compare(p2__93280_SHARP_,p1__93281_SHARP_);
});})(G__93282,G__93282__$1,G__93282__$2))
,G__93282__$2);
}
})()], null);
}));
com.wsscode.pathom.connect.resolver_weights_resolvers = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.resolver_weights_resolver,com.wsscode.pathom.connect.resolver_weights_sorted_resolver], null);
com.wsscode.pathom.connect.connect_resolvers = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.indexes_resolver,com.wsscode.pathom.connect.resolver_weights_resolvers], null);
/**
 * This plugin facilitates the connect setup in a parser. It works by wrapping the parser,
 *   it setups the connect resolver and mutation dispatch using the embedded dispatchers (check resolver
 *   map format in the book for more details). It also sets up the resolver weights for load
 *   balacing calculation. Here are the available options to configure the plugin:
 * 
 *   `::pc/indexes` - provide an index atom to be used, otherwise the plugin will create one
 *   `::pc/register` - a resolver, mutation or sequence of resolvers/mutations to register in
 *   the index
 *   `::pc/pool-chan` - override the thread pool, use `nil` to disable thread pool feature (not recommended)
 * 
 *   This plugin also looks for the key `::pc/register` in the other plugins used in the
 *   parser configuration, this enable plugins to provide resolvers/mutations to be available
 *   in your connect system.
 * 
 *   By default this plugin will also register resolvers to provide the index itself, if
 *   you for some reason need to hide it you can dissoc the `::pc/register` from the output
 *   and they will not be available, but consider that doing so you lose the ability to
 *   have introspection tools like Pathom Viz and Fulcro Inspect.
 */
com.wsscode.pathom.connect.connect_plugin = (function com$wsscode$pathom$connect$connect_plugin(var_args){
var G__93284 = arguments.length;
switch (G__93284) {
case 0:
return com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1 = (function (p__93285){
var map__93286 = p__93285;
var map__93286__$1 = (((((!((map__93286 == null))))?(((((map__93286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93286):map__93286);
var env = map__93286__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93286__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var indexes__$1 = (function (){var or__4131__auto__ = indexes;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var pool_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser2","com.wsscode.pathom.core/wrap-parser2",776559497),((function (indexes__$1,pool_chan,map__93286,map__93286__$1,env,indexes){
return (function com$wsscode$pathom$connect$connect_wrap_parser(parser,p__93288){
var map__93289 = p__93288;
var map__93289__$1 = (((((!((map__93289 == null))))?(((((map__93289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93289):map__93289);
var plugins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93289__$1,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796));
var plugin_registry = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),plugins);
var resolver_weights = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(indexes__$1,com.wsscode.pathom.connect.register,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plugin_registry,cljs.core.get.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),cljs.core.PersistentVector.EMPTY)], null));

return ((function (plugin_registry,resolver_weights,map__93289,map__93289__$1,plugins,indexes__$1,pool_chan,map__93286,map__93286__$1,env,indexes){
return (function (env__$1,tx){
var G__93291 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.connect.resolver_dispatch_embedded,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069),com.wsscode.pathom.connect.mutation_dispatch_embedded,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.deref(indexes__$1),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),resolver_weights,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449),pool_chan], null),env__$1], 0));
var G__93292 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__93291,G__93292) : parser.call(null,G__93291,G__93292));
});
;})(plugin_registry,resolver_weights,map__93289,map__93289__$1,plugins,indexes__$1,pool_chan,map__93286,map__93286__$1,env,indexes))
});})(indexes__$1,pool_chan,map__93286,map__93286__$1,env,indexes))
,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),indexes__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.connect.connect_resolvers], null);
});

com.wsscode.pathom.connect.connect_plugin.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=com.wsscode.pathom.connect.js.map
