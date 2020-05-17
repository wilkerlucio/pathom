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
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56654){
return cljs.core.set_QMARK_(G__56654);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","alias?","com.wsscode.pathom.connect/alias?",-1915061463),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__56656){
return cljs.core.map_QMARK_(G__56656);
})], null),(function (G__56656){
return cljs.core.map_QMARK_(G__56656);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation","com.wsscode.pathom.connect/mutation",-1953746968),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__56660){
return cljs.core.map_QMARK_(G__56660);
})], null),(function (G__56660){
return cljs.core.map_QMARK_(G__56660);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"plain","plain",1368629269),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"composed","composed",-1510693384),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plain","plain",1368629269),new cljs.core.Keyword(null,"composed","composed",-1510693384)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56668){
return cljs.core.map_QMARK_(G__56668);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attribute-list","attribute-list",1391116942),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1)),new cljs.core.Keyword(null,"union","union",2142937499),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribute-list","attribute-list",1391116942),new cljs.core.Keyword(null,"union","union",2142937499)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56675){
return ((cljs.core.vector_QMARK_(G__56675)) && (((((function (){var or__4131__auto__ = (1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((1)
,G__56675))) && ((cljs.core.bounded_count((1)
,G__56675) <= (function (){var or__4131__auto__ = null;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (9007199254740991);
}
})())))));
}),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56678){
return cljs.core.map_QMARK_(G__56678);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__56680){
return cljs.core.map_QMARK_(G__56680);
}),(function (G__56680){
return cljs.core.contains_QMARK_(G__56680,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
})], null),(function (G__56680){
return ((cljs.core.map_QMARK_(G__56680)) && (cljs.core.contains_QMARK_(G__56680,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),cljs.core.list(new cljs.core.Symbol("com.wsscode.pathom.connect","atom-with","com.wsscode.pathom.connect/atom-with",1449744364,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null))),com.wsscode.pathom.connect.atom_with(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"number?","number?",-1747282210,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.number_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56690){
return cljs.core.map_QMARK_(G__56690);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null))], null),null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56692){
return cljs.core.map_QMARK_(G__56692);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__56694){
return cljs.core.map_QMARK_(G__56694);
}),(function (G__56694){
return cljs.core.contains_QMARK_(G__56694,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
})], null),(function (G__56694){
return ((cljs.core.map_QMARK_(G__56694)) && (cljs.core.contains_QMARK_(G__56694,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutations","com.wsscode.pathom.connect/mutations",1762289215),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56709){
return cljs.core.map_QMARK_(G__56709);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56718){
return cljs.core.map_QMARK_(G__56718);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("s","coll-of","s/coll-of",-1705285349,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol(null,"set?","set?",1636014792,null))),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56725){
return cljs.core.set_QMARK_(G__56725);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56722){
return cljs.core.map_QMARK_(G__56722);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56728){
return cljs.core.map_QMARK_(G__56728);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__56733){
return cljs.core.map_QMARK_(G__56733);
})], null),(function (G__56733){
return cljs.core.map_QMARK_(G__56733);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","tuple","s/tuple",1167863840,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56748){
return cljs.core.set_QMARK_(G__56748);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),cljs.core.ifn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),cljs.core.ifn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56754){
return cljs.core.coll_QMARK_(G__56754);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword(null,"deep","deep",2090866875),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56766){
return cljs.core.map_QMARK_(G__56766);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"deep","deep",2090866875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56774){
return ((cljs.core.vector_QMARK_(G__56774)) && (((((function (){var or__4131__auto__ = (2);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((2)
,G__56774))) && ((cljs.core.bounded_count((2)
,G__56774) <= (function (){var or__4131__auto__ = null;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (9007199254740991);
}
})())))));
}),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56793){
return cljs.core.map_QMARK_(G__56793);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56795){
return cljs.core.set_QMARK_(G__56795);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__56799){
return cljs.core.map_QMARK_(G__56799);
})], null),(function (G__56799){
return cljs.core.map_QMARK_(G__56799);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"multi","multi",-190293005)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentHashSet.EMPTY]),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56805){
return cljs.core.map_QMARK_(G__56805);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56808){
return cljs.core.map_QMARK_(G__56808);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null))),cljs.spec.alpha.merge_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__56812){
return cljs.core.map_QMARK_(G__56812);
}),(function (G__56812){
return cljs.core.contains_QMARK_(G__56812,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
}),(function (G__56812){
return cljs.core.contains_QMARK_(G__56812,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
})], null),(function (G__56812){
return ((cljs.core.map_QMARK_(G__56812)) && (cljs.core.contains_QMARK_(G__56812,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))) && (cljs.core.contains_QMARK_(G__56812,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)))], null),null]))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null))),cljs.spec.alpha.merge_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__56882){
return cljs.core.map_QMARK_(G__56882);
}),(function (G__56882){
return cljs.core.contains_QMARK_(G__56882,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112));
})], null),(function (G__56882){
return ((cljs.core.map_QMARK_(G__56882)) && (cljs.core.contains_QMARK_(G__56882,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)))], null),null]))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"resolver","resolver",-1740553583),new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword(null,"mutation","mutation",-285823378),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolver","resolver",-1740553583),new cljs.core.Keyword(null,"mutation","mutation",-285823378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),new cljs.core.Keyword(null,"operations","operations",1630691895),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword(null,"operations","operations",1630691895)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56894){
return cljs.core.coll_QMARK_(G__56894);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56896){
return cljs.core.coll_QMARK_(G__56896);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"flat-plan","flat-plan",-883399921),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),new cljs.core.Keyword(null,"graph-plan","graph-plan",-503579673),new cljs.core.Keyword("com.wsscode.pathom.connect.planner","graph","com.wsscode.pathom.connect.planner/graph",507959439)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flat-plan","flat-plan",-883399921),new cljs.core.Keyword(null,"graph-plan","graph-plan",-503579673)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),new cljs.core.Keyword("com.wsscode.pathom.connect.planner","graph","com.wsscode.pathom.connect.planner/graph",507959439)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56900){
return cljs.core.coll_QMARK_(G__56900);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098))], null),null),new cljs.core.Keyword("com.wsscode.pathom.connect.planner","graph","com.wsscode.pathom.connect.planner/graph",507959439)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","sort-plan","com.wsscode.pathom.connect/sort-plan",-1506396873),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"plan","plan",1118952668)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-computed-plans","com.wsscode.pathom.connect/reader3-computed-plans",-307073851),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56901){
return cljs.core.set_QMARK_(G__56901);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
com.wsscode.pathom.connect.resolver_data = com.wsscode.pathom.connect.indexes.resolver_data;
/**
 * Get mutation map information in env from the resolver sym.
 */
com.wsscode.pathom.connect.mutation_data = (function com$wsscode$pathom$connect$mutation_data(env_or_indexes,sym){
var idx = (function (){var G__56902 = env_or_indexes;
if(cljs.core.contains_QMARK_(env_or_indexes,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))){
return new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189).cljs$core$IFn$_invoke$arity$1(G__56902);
} else {
return G__56902;
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
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__56904 = cljs.core.get_global_hierarchy;
return (fexpr__56904.cljs$core$IFn$_invoke$arity$0 ? fexpr__56904.cljs$core$IFn$_invoke$arity$0() : fexpr__56904.call(null));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(idx,k,(function (p1__56906_SHARP_){
return com.wsscode.pathom.connect.index_merger.cljs$core$IFn$_invoke$arity$3(k,p1__56906_SHARP_,v);
}));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(idx,k,v);
}
}),ia,ib);
});
com.wsscode.pathom.connect.output_provides_STAR_ = (function com$wsscode$pathom$connect$output_provides_STAR_(p__56909){
var map__56910 = p__56909;
var map__56910__$1 = (((((!((map__56910 == null))))?(((((map__56910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56910):map__56910);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56910__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56910__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__$1 = (cljs.core.truth_((function (){var G__56914 = children;
var G__56914__$1 = (((G__56914 == null))?null:cljs.core.first(G__56914));
var G__56914__$2 = (((G__56914__$1 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__56914__$1));
if((G__56914__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__56914__$2,new cljs.core.Keyword(null,"union","union",2142937499));
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))], 0)):children);
var G__56915 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null);
if(cljs.core.seq(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(G__56915,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (G__56915,children__$1,map__56910,map__56910__$1,key,children){
return (function (x){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__56915,children__$1,map__56910,map__56910__$1,key,children){
return (function (p1__56907_SHARP_){
return cljs.core.vec(cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[key,p1__56907_SHARP_],null))));
});})(G__56915,children__$1,map__56910,map__56910__$1,key,children))
,x);
});})(G__56915,children__$1,map__56910,map__56910__$1,key,children))
,((function (G__56915,children__$1,map__56910,map__56910__$1,key,children){
return (function (p1__56908_SHARP_){
return (com.wsscode.pathom.connect.output_provides_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.output_provides_STAR_.cljs$core$IFn$_invoke$arity$1(p1__56908_SHARP_) : com.wsscode.pathom.connect.output_provides_STAR_.call(null,p1__56908_SHARP_));
});})(G__56915,children__$1,map__56910,map__56910__$1,key,children))
)),children__$1);
} else {
return G__56915;
}
});
com.wsscode.pathom.connect.output_provides = (function com$wsscode$pathom$connect$output_provides(query){
if(cljs.core.map_QMARK_(query)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.output_provides),cljs.core.vals(query));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.output_provides_STAR_),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(query)));
}
});
com.wsscode.pathom.connect.normalized_children = (function com$wsscode$pathom$connect$normalized_children(p__56916){
var map__56917 = p__56916;
var map__56917__$1 = (((((!((map__56917 == null))))?(((((map__56917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56917):map__56917);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56917__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_((function (){var G__56919 = children;
var G__56919__$1 = (((G__56919 == null))?null:cljs.core.first(G__56919));
var G__56919__$2 = (((G__56919__$1 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__56919__$1));
if((G__56919__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__56919__$2,new cljs.core.Keyword(null,"union","union",2142937499));
}
})())){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))], 0));
} else {
return children;
}
});
com.wsscode.pathom.connect.index_attributes = (function com$wsscode$pathom$connect$index_attributes(p__56922){
var map__56923 = p__56922;
var map__56923__$1 = (((((!((map__56923 == null))))?(((((map__56923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56923):map__56923);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56923__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56923__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56923__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var provides = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__56923,map__56923__$1,sym,input,output){
return (function (p1__56920_SHARP_){
return cljs.core.contains_QMARK_(input,p1__56920_SHARP_);
});})(map__56923,map__56923__$1,sym,input,output))
,com.wsscode.pathom.connect.output_provides(output));
var sym_group = cljs.core.PersistentHashSet.createAsIfByAssoc([sym]);
var attr_provides = cljs.core.zipmap(provides,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(sym_group));
var input_count = cljs.core.count(input);
var _LT__GT_ = cljs.core.PersistentArrayMap.EMPTY;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,provides,sym_group,attr_provides,input_count,map__56923,map__56923__$1,sym,input,output){
return (function (idx,in_attr){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,in_attr,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),in_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),attr_provides,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),sym_group], null));
});})(_LT__GT_,provides,sym_group,attr_provides,input_count,map__56923,map__56923__$1,sym,input,output))
,_LT__GT_,(function (){var G__56925 = input_count;
switch (G__56925) {
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
var _LT__GT___$2 = (((input_count > (1)))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,provides,sym_group,attr_provides,input_count,map__56923,map__56923__$1,sym,input,output){
return (function (idx,in_attr){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,in_attr,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),in_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),cljs.core.PersistentHashSet.createAsIfByAssoc([input]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),sym_group], null));
});})(_LT__GT_,_LT__GT___$1,provides,sym_group,attr_provides,input_count,map__56923,map__56923__$1,sym,input,output))
,_LT__GT___$1,input):_LT__GT___$1);
var _LT__GT___$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,_LT__GT___$2,provides,sym_group,attr_provides,input_count,map__56923,map__56923__$1,sym,input,output){
return (function (idx,out_attr){
if(cljs.core.vector_QMARK_(out_attr)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,cljs.core.peek(out_attr),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),cljs.core.peek(out_attr),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null),cljs.core.pop(out_attr)),sym_group]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),sym_group], null));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,out_attr,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),out_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.PersistentArrayMap.createAsIfByAssoc([input,sym_group]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),sym_group], null));
}
});})(_LT__GT_,_LT__GT___$1,_LT__GT___$2,provides,sym_group,attr_provides,input_count,map__56923,map__56923__$1,sym,input,output))
,_LT__GT___$2,provides);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__56923,map__56923__$1,sym,input,output){
return (function (idx,p__56926){
var map__56927 = p__56926;
var map__56927__$1 = (((((!((map__56927 == null))))?(((((map__56927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56927):map__56927);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56927__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56927__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__56929 = idx;
if(cljs.core.truth_(key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__56929,key,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(children)?new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732):new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711)),sym_group]));
} else {
return G__56929;
}
});})(_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__56923,map__56923__$1,sym,input,output))
,_LT__GT___$3,((cljs.core.map_QMARK_(output))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__56923,map__56923__$1,sym,input,output){
return (function (p1__56921_SHARP_){
return cljs.core.tree_seq(new cljs.core.Keyword(null,"children","children",-940561982),com.wsscode.pathom.connect.normalized_children,edn_query_language.core.query__GT_ast(p1__56921_SHARP_));
});})(_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__56923,map__56923__$1,sym,input,output))
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
var G__56931 = arguments.length;
switch (G__56931) {
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
var provides = (function (){var G__56933 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(sym_data,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),cljs.core.PersistentVector.EMPTY);
return (com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1(G__56933) : com.wsscode.pathom.connect.normalize_io.call(null,G__56933));
})();
var map__56932 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.wsscode.pathom.connect","provides","com.wsscode.pathom.connect/provides",865831498),provides], null),sym_data], 0));
var map__56932__$1 = (((((!((map__56932 == null))))?(((((map__56932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56932):map__56932);
var sym_data__$1 = map__56932__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56932__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56932__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var input_SINGLEQUOTE_ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input))) && (cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.PersistentHashSet.EMPTY], null)),cljs.core.first(input)))))?cljs.core.PersistentHashSet.EMPTY:input);
return com.wsscode.pathom.connect.merge_indexes(indexes,(function (){var G__56935 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),cljs.core.PersistentArrayMap.createAsIfByAssoc([sym,sym_data__$1]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),com.wsscode.pathom.connect.index_attributes(sym_data__$1),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.PersistentArrayMap.createAsIfByAssoc([input_SINGLEQUOTE_,provides]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (provides,map__56932,map__56932__$1,sym_data__$1,input,output,input_SINGLEQUOTE_){
return (function (indexes__$1,out_attr){
var G__56936 = indexes__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([out_attr]),input)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__56936,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out_attr,input], null),com.wsscode.pathom.misc.sconj,sym);
} else {
return G__56936;
}
});})(provides,map__56932,map__56932__$1,sym_data__$1,input,output,input_SINGLEQUOTE_))
,cljs.core.PersistentArrayMap.EMPTY,com.wsscode.pathom.connect.flat_query(output))], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input_SINGLEQUOTE_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56935,new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(input_SINGLEQUOTE_)]));
} else {
return G__56935;
}
})());
});

com.wsscode.pathom.connect.add.cljs$lang$maxFixedArity = 3;

com.wsscode.pathom.connect.add_mutation = (function com$wsscode$pathom$connect$add_mutation(indexes,sym,p__56938){
var map__56939 = p__56938;
var map__56939__$1 = (((((!((map__56939 == null))))?(((((map__56939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56939):map__56939);
var data = map__56939__$1;
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56939__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56939__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
return com.wsscode.pathom.connect.merge_indexes(indexes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),cljs.core.PersistentArrayMap.createAsIfByAssoc([sym,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym)]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),(function (){var _LT__GT_ = cljs.core.PersistentArrayMap.EMPTY;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,map__56939,map__56939__$1,data,params,output){
return (function (idx,attribute){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,attribute,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),attribute,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),cljs.core.PersistentHashSet.createAsIfByAssoc([sym])], null));
});})(_LT__GT_,map__56939,map__56939__$1,data,params,output))
,_LT__GT_,(function (){var G__56941 = params;
var G__56941__$1 = (((G__56941 == null))?null:edn_query_language.core.query__GT_ast(G__56941));
if((G__56941__$1 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast_properties(G__56941__$1);
}
})());
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,map__56939,map__56939__$1,data,params,output){
return (function (idx,attribute){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,attribute,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),attribute,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),cljs.core.PersistentHashSet.createAsIfByAssoc([sym])], null));
});})(_LT__GT_,_LT__GT___$1,map__56939,map__56939__$1,data,params,output))
,_LT__GT___$1,(function (){var G__56945 = output;
var G__56945__$1 = (((G__56945 == null))?null:edn_query_language.core.query__GT_ast(G__56945));
if((G__56945__$1 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast_properties(G__56945__$1);
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
com.wsscode.pathom.connect.sort_resolvers = (function com$wsscode$pathom$connect$sort_resolvers(p__56946,resolvers,e){
var map__56947 = p__56946;
var map__56947__$1 = (((((!((map__56947 == null))))?(((((map__56947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56947):map__56947);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56947__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (map__56947,map__56947__$1,request_cache){
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
});})(map__56947,map__56947__$1,request_cache))
,resolvers);
});
/**
 * DEPRECATED
 */
com.wsscode.pathom.connect.pick_resolver = (function com$wsscode$pathom$connect$pick_resolver(p__56949){
var map__56950 = p__56949;
var map__56950__$1 = (((((!((map__56950 == null))))?(((((map__56950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56950):map__56950);
var env = map__56950__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56950__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var dependency_track = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56950__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null));
if(cljs.core.truth_(temp__5718__auto__)){
var attr_resolvers = temp__5718__auto__;
var r = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword(null,"missing","missing",362507769)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attr_resolvers,temp__5718__auto__,k,e,map__56950,map__56950__$1,env,indexes,dependency_track){
return (function (p__56952){
var vec__56953 = p__56952;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56953,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56953,(1),null);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.set(cljs.core.keys(e)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"missing","missing",362507769),missing], null);
});})(attr_resolvers,temp__5718__auto__,k,e,map__56950,map__56950__$1,env,indexes,dependency_track))
,attr_resolvers));
var G__56961 = r;
var vec__56962 = G__56961;
var seq__56963 = cljs.core.seq(vec__56962);
var first__56964 = cljs.core.first(seq__56963);
var seq__56963__$1 = cljs.core.next(seq__56963);
var map__56965 = first__56964;
var map__56965__$1 = (((((!((map__56965 == null))))?(((((map__56965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56965):map__56965);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56965__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56965__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var t = seq__56963__$1;
var xs = vec__56962;
var G__56961__$1 = G__56961;
while(true){
var vec__56967 = G__56961__$1;
var seq__56968 = cljs.core.seq(vec__56967);
var first__56969 = cljs.core.first(seq__56968);
var seq__56968__$1 = cljs.core.next(seq__56968);
var map__56970 = first__56969;
var map__56970__$1 = (((((!((map__56970 == null))))?(((((map__56970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56970):map__56970);
var sym__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56970__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var attrs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56970__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var t__$1 = seq__56968__$1;
var xs__$1 = vec__56967;
if(cljs.core.truth_(xs__$1)){
if((!(cljs.core.contains_QMARK_(dependency_track,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,attrs__$1], null))))){
var e__$1 = (function (){try{return com.wsscode.pathom.core.elide_items(com.wsscode.pathom.core.break_values,com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465),true),new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,attrs__$1], null)),attrs__$1));
}catch (e56972){var _ = e56972;
return cljs.core.PersistentArrayMap.EMPTY;
}})();
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attrs__$1),cljs.core.set(cljs.core.keys(e__$1)));
if(cljs.core.seq(missing)){
var G__61429 = t__$1;
G__56961__$1 = G__61429;
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
com.wsscode.pathom.connect.async_pick_resolver = (function com$wsscode$pathom$connect$async_pick_resolver(p__56973){
var map__56974 = p__56973;
var map__56974__$1 = (((((!((map__56974 == null))))?(((((map__56974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56974):map__56974);
var env = map__56974__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56974__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var dependency_track = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56974__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185));
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__56974,map__56974__$1,env,indexes,dependency_track){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__56974,map__56974__$1,env,indexes,dependency_track){
return (function (state_57116){
var state_val_57117 = (state_57116[(1)]);
if((state_val_57117 === (7))){
var inst_57112 = (state_57116[(2)]);
var state_57116__$1 = state_57116;
var statearr_57118_61436 = state_57116__$1;
(statearr_57118_61436[(2)] = inst_57112);


cljs.core.async.impl.ioc_helpers.process_exception(state_57116__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (20))){
var state_57116__$1 = state_57116;
var statearr_57119_61437 = state_57116__$1;
(statearr_57119_61437[(2)] = false);

(statearr_57119_61437[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (27))){
var inst_57028 = (state_57116[(7)]);
var inst_57057 = (state_57116[(2)]);
var inst_57058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57057,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var inst_57059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57057,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var state_57116__$1 = (function (){var statearr_57120 = state_57116;
(statearr_57120[(8)] = inst_57059);

(statearr_57120[(9)] = inst_57058);

return statearr_57120;
})();
if(cljs.core.truth_(inst_57028)){
var statearr_57121_61438 = state_57116__$1;
(statearr_57121_61438[(1)] = (28));

} else {
var statearr_57122_61440 = state_57116__$1;
(statearr_57122_61440[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (1))){
var state_57116__$1 = state_57116;
var statearr_57123_61441 = state_57116__$1;
(statearr_57123_61441[(2)] = null);

(statearr_57123_61441[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (24))){
var inst_57049 = (state_57116[(2)]);
var state_57116__$1 = state_57116;
var statearr_57124_61442 = state_57116__$1;
(statearr_57124_61442[(2)] = inst_57049);

(statearr_57124_61442[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (39))){
var inst_57085 = (state_57116[(10)]);
var inst_57059 = (state_57116[(8)]);
var inst_57058 = (state_57116[(9)]);
var inst_57094 = [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"s","s",1705939918)];
var inst_57095 = cljs.core.select_keys(inst_57085,inst_57059);
var inst_57096 = com.wsscode.pathom.connect.sort_resolvers(env,inst_57058,inst_57085);
var inst_57097 = cljs.core.first(inst_57096);
var inst_57098 = [inst_57095,inst_57097];
var inst_57099 = cljs.core.PersistentHashMap.fromArrays(inst_57094,inst_57098);
var state_57116__$1 = state_57116;
var statearr_57125_61443 = state_57116__$1;
(statearr_57125_61443[(2)] = inst_57099);

(statearr_57125_61443[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (4))){
var inst_56981 = (state_57116[(11)]);
var inst_56986 = (state_57116[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_57116,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_56980 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_56981__$1 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_56980);
var inst_56982 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var inst_56983 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56984 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),inst_56981__$1];
var inst_56985 = (new cljs.core.PersistentVector(null,2,(5),inst_56983,inst_56984,null));
var inst_56986__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_56985);
var state_57116__$1 = (function (){var statearr_57126 = state_57116;
(statearr_57126[(11)] = inst_56981__$1);

(statearr_57126[(12)] = inst_56986__$1);

(statearr_57126[(13)] = inst_56982);

return statearr_57126;
})();
if(cljs.core.truth_(inst_56986__$1)){
var statearr_57127_61448 = state_57116__$1;
(statearr_57127_61448[(1)] = (5));

} else {
var statearr_57128_61449 = state_57116__$1;
(statearr_57128_61449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (15))){
var inst_57003 = (state_57116[(14)]);
var state_57116__$1 = state_57116;
var statearr_57129_61450 = state_57116__$1;
(statearr_57129_61450[(2)] = inst_57003);

(statearr_57129_61450[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (21))){
var inst_57052 = (state_57116[(2)]);
var state_57116__$1 = state_57116;
if(cljs.core.truth_(inst_57052)){
var statearr_57130_61452 = state_57116__$1;
(statearr_57130_61452[(1)] = (25));

} else {
var statearr_57131_61455 = state_57116__$1;
(statearr_57131_61455[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (31))){
var state_57116__$1 = state_57116;
var statearr_57132_61456 = state_57116__$1;
(statearr_57132_61456[(2)] = null);

(statearr_57132_61456[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (32))){
var state_57116__$1 = state_57116;
var statearr_57133_61458 = state_57116__$1;
(statearr_57133_61458[(2)] = null);

(statearr_57133_61458[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (40))){
var inst_57101 = (state_57116[(2)]);
var state_57116__$1 = state_57116;
var statearr_57134_61462 = state_57116__$1;
(statearr_57134_61462[(2)] = inst_57101);

(statearr_57134_61462[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (33))){
var inst_57104 = (state_57116[(2)]);
var state_57116__$1 = state_57116;
var statearr_57135_61464 = state_57116__$1;
(statearr_57135_61464[(2)] = inst_57104);

(statearr_57135_61464[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (13))){
var inst_57017 = (state_57116[(2)]);
var state_57116__$1 = state_57116;
var statearr_57136_61466 = state_57116__$1;
(statearr_57136_61466[(2)] = inst_57017);

(statearr_57136_61466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (22))){
var state_57116__$1 = state_57116;
var statearr_57137_61468 = state_57116__$1;
(statearr_57137_61468[(2)] = true);

(statearr_57137_61468[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (36))){
var inst_57059 = (state_57116[(8)]);
var inst_57058 = (state_57116[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_57116,(35),new cljs.core.Keyword(null,"default","default",-1987822328),null,(34));
var inst_57072 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465),true);
var inst_57073 = cljs.core.PersistentHashSet.EMPTY;
var inst_57074 = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,inst_57073);
var inst_57075 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57076 = [inst_57058,inst_57059];
var inst_57077 = (new cljs.core.PersistentVector(null,2,(5),inst_57075,inst_57076,null));
var inst_57078 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_57072,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),inst_57074,inst_57077);
var inst_57079 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(inst_57078,inst_57059);
var state_57116__$1 = state_57116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57116__$1,(37),inst_57079);
} else {
if((state_val_57117 === (29))){
var state_57116__$1 = state_57116;
var statearr_57138_61497 = state_57116__$1;
(statearr_57138_61497[(2)] = null);

(statearr_57138_61497[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (6))){
var state_57116__$1 = state_57116;
var statearr_57139_61499 = state_57116__$1;
(statearr_57139_61499[(2)] = null);

(statearr_57139_61499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (28))){
var inst_57059 = (state_57116[(8)]);
var inst_57058 = (state_57116[(9)]);
var inst_57061 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57062 = [inst_57058,inst_57059];
var inst_57063 = (new cljs.core.PersistentVector(null,2,(5),inst_57061,inst_57062,null));
var inst_57064 = cljs.core.contains_QMARK_(dependency_track,inst_57063);
var inst_57065 = (!(inst_57064));
var state_57116__$1 = state_57116;
if(inst_57065){
var statearr_57140_61503 = state_57116__$1;
(statearr_57140_61503[(1)] = (31));

} else {
var statearr_57141_61504 = state_57116__$1;
(statearr_57141_61504[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (25))){
var inst_57035 = (state_57116[(15)]);
var inst_57054 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_57035);
var state_57116__$1 = state_57116;
var statearr_57142_61512 = state_57116__$1;
(statearr_57142_61512[(2)] = inst_57054);

(statearr_57142_61512[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (34))){
var inst_57085 = (state_57116[(10)]);
var inst_57059 = (state_57116[(8)]);
var inst_57085__$1 = (state_57116[(2)]);
var inst_57086 = cljs.core.set(inst_57059);
var inst_57087 = cljs.core.keys(inst_57085__$1);
var inst_57088 = cljs.core.set(inst_57087);
var inst_57089 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_57086,inst_57088);
var inst_57090 = cljs.core.seq(inst_57089);
var state_57116__$1 = (function (){var statearr_57143 = state_57116;
(statearr_57143[(10)] = inst_57085__$1);

return statearr_57143;
})();
if(inst_57090){
var statearr_57144_61514 = state_57116__$1;
(statearr_57144_61514[(1)] = (38));

} else {
var statearr_57145_61515 = state_57116__$1;
(statearr_57145_61515[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (17))){
var inst_57035 = (state_57116[(15)]);
var inst_57028 = (state_57116[(7)]);
var inst_57034 = cljs.core.seq(inst_57028);
var inst_57035__$1 = cljs.core.first(inst_57034);
var inst_57036 = cljs.core.next(inst_57034);
var inst_57038 = (inst_57035__$1 == null);
var inst_57039 = cljs.core.not(inst_57038);
var state_57116__$1 = (function (){var statearr_57146 = state_57116;
(statearr_57146[(15)] = inst_57035__$1);

(statearr_57146[(16)] = inst_57036);

return statearr_57146;
})();
if(inst_57039){
var statearr_57147_61519 = state_57116__$1;
(statearr_57147_61519[(1)] = (19));

} else {
var statearr_57148_61521 = state_57116__$1;
(statearr_57148_61521[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (3))){
var inst_56976 = (state_57116[(2)]);
var state_57116__$1 = state_57116;
var statearr_57149_61525 = state_57116__$1;
(statearr_57149_61525[(2)] = inst_56976);


cljs.core.async.impl.ioc_helpers.process_exception(state_57116__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (12))){
var state_57116__$1 = state_57116;
var statearr_57150_61528 = state_57116__$1;
(statearr_57150_61528[(2)] = false);

(statearr_57150_61528[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (2))){
var inst_57114 = (state_57116[(2)]);
var state_57116__$1 = state_57116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57116__$1,inst_57114);
} else {
if((state_val_57117 === (23))){
var state_57116__$1 = state_57116;
var statearr_57151_61543 = state_57116__$1;
(statearr_57151_61543[(2)] = false);

(statearr_57151_61543[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (35))){
var inst_57067 = (state_57116[(2)]);
var inst_57068 = cljs.core.PersistentHashMap.EMPTY;
var state_57116__$1 = (function (){var statearr_57152 = state_57116;
(statearr_57152[(17)] = inst_57067);

return statearr_57152;
})();
var statearr_57153_61548 = state_57116__$1;
(statearr_57153_61548[(2)] = inst_57068);


cljs.core.async.impl.ioc_helpers.process_exception(state_57116__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (19))){
var inst_57035 = (state_57116[(15)]);
var inst_57041 = inst_57035.cljs$lang$protocol_mask$partition0$;
var inst_57042 = (inst_57041 & (64));
var inst_57043 = inst_57035.cljs$core$ISeq$;
var inst_57044 = (cljs.core.PROTOCOL_SENTINEL === inst_57043);
var inst_57045 = ((inst_57042) || (inst_57044));
var state_57116__$1 = state_57116;
if(cljs.core.truth_(inst_57045)){
var statearr_57154_61553 = state_57116__$1;
(statearr_57154_61553[(1)] = (22));

} else {
var statearr_57155_61554 = state_57116__$1;
(statearr_57155_61554[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (11))){
var state_57116__$1 = state_57116;
var statearr_57156_61563 = state_57116__$1;
(statearr_57156_61563[(2)] = true);

(statearr_57156_61563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (9))){
var state_57116__$1 = state_57116;
var statearr_57157_61566 = state_57116__$1;
(statearr_57157_61566[(2)] = false);

(statearr_57157_61566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (5))){
var inst_56981 = (state_57116[(11)]);
var inst_56986 = (state_57116[(12)]);
var inst_57003 = (state_57116[(14)]);
var inst_56992 = (state_57116[(18)]);
var inst_56982 = (state_57116[(13)]);
var inst_56988 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword(null,"missing","missing",362507769));
var inst_56990 = (function (){var k = inst_56981;
var e = inst_56982;
var temp__5718__auto__ = inst_56986;
var attr_resolvers = inst_56986;
return ((function (k,e,temp__5718__auto__,attr_resolvers,inst_56981,inst_56986,inst_57003,inst_56992,inst_56982,inst_56988,state_val_57117,c__47946__auto__,map__56974,map__56974__$1,env,indexes,dependency_track){
return (function (p__56989){
var vec__57158 = p__56989;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57158,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57158,(1),null);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.set(cljs.core.keys(e)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"missing","missing",362507769),missing], null);
});
;})(k,e,temp__5718__auto__,attr_resolvers,inst_56981,inst_56986,inst_57003,inst_56992,inst_56982,inst_56988,state_val_57117,c__47946__auto__,map__56974,map__56974__$1,env,indexes,dependency_track))
})();
var inst_56991 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_56990,inst_56986);
var inst_56992__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(inst_56988,inst_56991);
var inst_57002 = cljs.core.seq(inst_56992__$1);
var inst_57003__$1 = cljs.core.first(inst_57002);
var inst_57004 = cljs.core.next(inst_57002);
var inst_57006 = (inst_57003__$1 == null);
var inst_57007 = cljs.core.not(inst_57006);
var state_57116__$1 = (function (){var statearr_57161 = state_57116;
(statearr_57161[(14)] = inst_57003__$1);

(statearr_57161[(18)] = inst_56992__$1);

(statearr_57161[(19)] = inst_57004);

return statearr_57161;
})();
if(inst_57007){
var statearr_57162_61610 = state_57116__$1;
(statearr_57162_61610[(1)] = (8));

} else {
var statearr_57163_61611 = state_57116__$1;
(statearr_57163_61611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (14))){
var inst_57003 = (state_57116[(14)]);
var inst_57022 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_57003);
var state_57116__$1 = state_57116;
var statearr_57164_61616 = state_57116__$1;
(statearr_57164_61616[(2)] = inst_57022);

(statearr_57164_61616[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (26))){
var inst_57035 = (state_57116[(15)]);
var state_57116__$1 = state_57116;
var statearr_57165_61618 = state_57116__$1;
(statearr_57165_61618[(2)] = inst_57035);

(statearr_57165_61618[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (16))){
var inst_56992 = (state_57116[(18)]);
var inst_57025 = (state_57116[(2)]);
var inst_57026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57025,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var inst_57027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57025,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var inst_57028 = inst_56992;
var state_57116__$1 = (function (){var statearr_57166 = state_57116;
(statearr_57166[(20)] = inst_57027);

(statearr_57166[(21)] = inst_57026);

(statearr_57166[(7)] = inst_57028);

return statearr_57166;
})();
var statearr_57167_61623 = state_57116__$1;
(statearr_57167_61623[(2)] = null);

(statearr_57167_61623[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (38))){
var inst_57036 = (state_57116[(16)]);
var inst_57028 = inst_57036;
var state_57116__$1 = (function (){var statearr_57168 = state_57116;
(statearr_57168[(7)] = inst_57028);

return statearr_57168;
})();
var statearr_57169_61625 = state_57116__$1;
(statearr_57169_61625[(2)] = null);

(statearr_57169_61625[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (30))){
var inst_57107 = (state_57116[(2)]);
var state_57116__$1 = state_57116;
var statearr_57170_61627 = state_57116__$1;
(statearr_57170_61627[(2)] = inst_57107);

(statearr_57170_61627[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (10))){
var inst_57020 = (state_57116[(2)]);
var state_57116__$1 = state_57116;
if(cljs.core.truth_(inst_57020)){
var statearr_57171_61632 = state_57116__$1;
(statearr_57171_61632[(1)] = (14));

} else {
var statearr_57172_61633 = state_57116__$1;
(statearr_57172_61633[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (18))){
var inst_57109 = (state_57116[(2)]);
var state_57116__$1 = state_57116;
var statearr_57173_61637 = state_57116__$1;
(statearr_57173_61637[(2)] = inst_57109);

(statearr_57173_61637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (37))){
var inst_57081 = (state_57116[(2)]);
var inst_57082 = com.wsscode.async.async_cljs.throw_err(inst_57081);
var inst_57083 = com.wsscode.pathom.core.elide_items(com.wsscode.pathom.core.break_values,inst_57082);
var state_57116__$1 = state_57116;
var statearr_57174_61641 = state_57116__$1;
(statearr_57174_61641[(2)] = inst_57083);


cljs.core.async.impl.ioc_helpers.process_exception(state_57116__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57117 === (8))){
var inst_57003 = (state_57116[(14)]);
var inst_57009 = inst_57003.cljs$lang$protocol_mask$partition0$;
var inst_57010 = (inst_57009 & (64));
var inst_57011 = inst_57003.cljs$core$ISeq$;
var inst_57012 = (cljs.core.PROTOCOL_SENTINEL === inst_57011);
var inst_57013 = ((inst_57010) || (inst_57012));
var state_57116__$1 = state_57116;
if(cljs.core.truth_(inst_57013)){
var statearr_57175_61648 = state_57116__$1;
(statearr_57175_61648[(1)] = (11));

} else {
var statearr_57176_61652 = state_57116__$1;
(statearr_57176_61652[(1)] = (12));

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
});})(c__47946__auto__,map__56974,map__56974__$1,env,indexes,dependency_track))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__56974,map__56974__$1,env,indexes,dependency_track){
return (function() {
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__47664__auto____0 = (function (){
var statearr_57177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57177[(0)] = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__47664__auto__);

(statearr_57177[(1)] = (1));

return statearr_57177;
});
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__47664__auto____1 = (function (state_57116){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_57116);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e57178){if((e57178 instanceof Object)){
var ex__47667__auto__ = e57178;
var statearr_57179_61656 = state_57116;
(statearr_57179_61656[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57178;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61657 = state_57116;
state_57116 = G__61657;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__47664__auto__ = function(state_57116){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__47664__auto____1.call(this,state_57116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__56974,map__56974__$1,env,indexes,dependency_track))
})();
var state__47948__auto__ = (function (){var statearr_57180 = f__47947__auto__();
(statearr_57180[(6)] = c__47946__auto__);

return statearr_57180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__56974,map__56974__$1,env,indexes,dependency_track))
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
var G__57182 = arguments.length;
switch (G__57182) {
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
com.wsscode.pathom.connect.resolver_dispatch_embedded = (function com$wsscode$pathom$connect$resolver_dispatch_embedded(p__57183,entity){
var map__57184 = p__57183;
var map__57184__$1 = (((((!((map__57184 == null))))?(((((map__57184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57184):map__57184);
var env = map__57184__$1;
var map__57185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57184__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__57185__$1 = (((((!((map__57185 == null))))?(((((map__57185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57185):map__57185);
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57185__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57185__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
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
var len__4730__auto___61676 = arguments.length;
var i__4731__auto___61678 = (0);
while(true){
if((i__4731__auto___61678 < len__4730__auto___61676)){
args__4736__auto__.push((arguments[i__4731__auto___61678]));

var G__61679 = (i__4731__auto___61678 + (1));
i__4731__auto___61678 = G__61679;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic = (function (p__57191,resolver,args){
var map__57192 = p__57191;
var map__57192__$1 = (((((!((map__57192 == null))))?(((((map__57192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57192):map__57192);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57192__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
if(cljs.core.truth_(resolver_weights)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,resolver_weights,cljs.core.update,resolver,args);
} else {
return null;
}
});

com.wsscode.pathom.connect.update_resolver_weight.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.connect.update_resolver_weight.cljs$lang$applyTo = (function (seq57188){
var G__57189 = cljs.core.first(seq57188);
var seq57188__$1 = cljs.core.next(seq57188);
var G__57190 = cljs.core.first(seq57188__$1);
var seq57188__$2 = cljs.core.next(seq57188__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57189,G__57190,seq57188__$2);
});

com.wsscode.pathom.connect.call_resolver_STAR_ = (function com$wsscode$pathom$connect$call_resolver_STAR_(p__57194,entity){
var map__57195 = p__57194;
var map__57195__$1 = (((((!((map__57195 == null))))?(((((map__57195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57195):map__57195);
var env = map__57195__$1;
var resolver_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57195__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.connect.default_resolver_dispatch);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57195__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var resolver_sym = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env));
var tid = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),cljs.core.str.cljs$core$IFn$_invoke$arity$1(resolver_sym),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),entity], null));
var start = com.wsscode.pathom.trace.now();
var res__53564__auto__ = (function (){try{return com.wsscode.pathom.core.exec_plugin_actions.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.connect","wrap-resolve","com.wsscode.pathom.connect/wrap-resolve",1728436586),resolver_dispatch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,entity], 0));
}catch (e57197){var e = e57197;
return e;
}})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53564__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53564__auto__,resolver_sym,tid,start,map__57195,map__57195__$1,env,resolver_dispatch,resolver_weights){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53564__auto__,resolver_sym,tid,start,map__57195,map__57195__$1,env,resolver_dispatch,resolver_weights){
return (function (state_57227){
var state_val_57228 = (state_57227[(1)]);
if((state_val_57228 === (7))){
var state_57227__$1 = state_57227;
var statearr_57229_61721 = state_57227__$1;
(statearr_57229_61721[(2)] = null);

(statearr_57229_61721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57228 === (1))){
var state_57227__$1 = state_57227;
var statearr_57230_61722 = state_57227__$1;
(statearr_57230_61722[(2)] = null);

(statearr_57230_61722[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57228 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_57227,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_57227__$1 = state_57227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57227__$1,(5),res__53564__auto__);
} else {
if((state_val_57228 === (6))){
var inst_57205 = com.wsscode.pathom.trace.now();
var inst_57206 = (inst_57205 - start);
var inst_57207 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(resolver_weights,cljs.core.update,resolver_sym,com.wsscode.pathom.connect.step_weight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_57206], 0));
var state_57227__$1 = state_57227;
var statearr_57231_61729 = state_57227__$1;
(statearr_57231_61729[(2)] = inst_57207);

(statearr_57231_61729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57228 === (3))){
var inst_57198 = (state_57227[(2)]);
var state_57227__$1 = state_57227;
var statearr_57232_61731 = state_57227__$1;
(statearr_57232_61731[(2)] = inst_57198);


cljs.core.async.impl.ioc_helpers.process_exception(state_57227__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57228 === (2))){
var inst_57225 = (state_57227[(2)]);
var state_57227__$1 = state_57227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57227__$1,inst_57225);
} else {
if((state_val_57228 === (11))){
var inst_57203 = (state_57227[(7)]);
var inst_57221 = (state_57227[(2)]);
var inst_57222 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,inst_57221);
var inst_57223 = com.wsscode.async.async_cljs.throw_err(inst_57203);
var state_57227__$1 = (function (){var statearr_57233 = state_57227;
(statearr_57233[(8)] = inst_57222);

return statearr_57233;
})();
var statearr_57234_61735 = state_57227__$1;
(statearr_57234_61735[(2)] = inst_57223);


cljs.core.async.impl.ioc_helpers.process_exception(state_57227__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57228 === (9))){
var inst_57203 = (state_57227[(7)]);
var inst_57214 = (state_57227[(9)]);
var inst_57217 = com.wsscode.pathom.core.process_error(env,inst_57203);
var inst_57218 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_57214,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),inst_57217);
var state_57227__$1 = state_57227;
var statearr_57235_61737 = state_57227__$1;
(statearr_57235_61737[(2)] = inst_57218);

(statearr_57235_61737[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57228 === (5))){
var inst_57203 = (state_57227[(2)]);
var state_57227__$1 = (function (){var statearr_57236 = state_57227;
(statearr_57236[(7)] = inst_57203);

return statearr_57236;
})();
if(cljs.core.truth_(resolver_weights)){
var statearr_57237_61741 = state_57227__$1;
(statearr_57237_61741[(1)] = (6));

} else {
var statearr_57238_61742 = state_57227__$1;
(statearr_57238_61742[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57228 === (10))){
var inst_57214 = (state_57227[(9)]);
var state_57227__$1 = state_57227;
var statearr_57239_61744 = state_57227__$1;
(statearr_57239_61744[(2)] = inst_57214);

(statearr_57239_61744[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57228 === (8))){
var inst_57203 = (state_57227[(7)]);
var inst_57210 = (state_57227[(2)]);
var inst_57212 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_57213 = [new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624)];
var inst_57214 = cljs.core.PersistentHashMap.fromArrays(inst_57212,inst_57213);
var inst_57215 = com.wsscode.async.async_cljs.error_QMARK_(inst_57203);
var state_57227__$1 = (function (){var statearr_57240 = state_57227;
(statearr_57240[(10)] = inst_57210);

(statearr_57240[(9)] = inst_57214);

return statearr_57240;
})();
if(inst_57215){
var statearr_57241_61746 = state_57227__$1;
(statearr_57241_61746[(1)] = (9));

} else {
var statearr_57242_61747 = state_57227__$1;
(statearr_57242_61747[(1)] = (10));

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
});})(c__47946__auto__,res__53564__auto__,resolver_sym,tid,start,map__57195,map__57195__$1,env,resolver_dispatch,resolver_weights))
;
return ((function (switch__47663__auto__,c__47946__auto__,res__53564__auto__,resolver_sym,tid,start,map__57195,map__57195__$1,env,resolver_dispatch,resolver_weights){
return (function() {
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__47664__auto____0 = (function (){
var statearr_57243 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57243[(0)] = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__47664__auto__);

(statearr_57243[(1)] = (1));

return statearr_57243;
});
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__47664__auto____1 = (function (state_57227){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_57227);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e57244){if((e57244 instanceof Object)){
var ex__47667__auto__ = e57244;
var statearr_57245_61749 = state_57227;
(statearr_57245_61749[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57244;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61750 = state_57227;
state_57227 = G__61750;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__47664__auto__ = function(state_57227){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__47664__auto____1.call(this,state_57227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53564__auto__,resolver_sym,tid,start,map__57195,map__57195__$1,env,resolver_dispatch,resolver_weights))
})();
var state__47948__auto__ = (function (){var statearr_57246 = f__47947__auto__();
(statearr_57246[(6)] = c__47946__auto__);

return statearr_57246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,res__53564__auto__,resolver_sym,tid,start,map__57195,map__57195__$1,env,resolver_dispatch,resolver_weights))
);

return c__47946__auto__;
} else {
var x = res__53564__auto__;
if(cljs.core.truth_(resolver_weights)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(resolver_weights,cljs.core.update,resolver_sym,com.wsscode.pathom.connect.step_weight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.trace.now() - start)], 0));
} else {
}

com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,(function (){var G__57247 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624)], null);
if(com.wsscode.async.async_cljs.error_QMARK_(x)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57247,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),com.wsscode.pathom.core.process_error(env,x));
} else {
return G__57247;
}
})());

return com.wsscode.async.async_cljs.throw_err(x);
}
});
com.wsscode.pathom.connect.call_resolver = (function com$wsscode$pathom$connect$call_resolver(p__57249,entity){
var map__57250 = p__57249;
var map__57250__$1 = (((((!((map__57250 == null))))?(((((map__57250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57250):map__57250);
var env = map__57250__$1;
var pool_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57250__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449));
if(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__57250,map__57250__$1,env,pool_chan){
return (function (p1__57248_SHARP_){
return cljs.core.contains_QMARK_(com.wsscode.pathom.core.break_values,cljs.core.second(p1__57248_SHARP_));
});})(map__57250,map__57250__$1,env,pool_chan))
,entity))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver input",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity","entity",-450970276),entity], null));
} else {
if(cljs.core.truth_(pool_chan)){
var out = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___61756 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___61756,out,map__57250,map__57250__$1,env,pool_chan){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___61756,out,map__57250,map__57250__$1,env,pool_chan){
return (function (state_57270){
var state_val_57271 = (state_57270[(1)]);
if((state_val_57271 === (1))){
var inst_57252 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_57253 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_57254 = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(inst_57253);
var inst_57255 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_57254);
var inst_57256 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_57257 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_57256);
var inst_57258 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_57259 = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(inst_57258);
var inst_57260 = [new cljs.core.Keyword("com.wsscode.pathom.connect","schedule-resolver","com.wsscode.pathom.connect/schedule-resolver",939563419),inst_57255,inst_57257,inst_57259,entity];
var inst_57261 = cljs.core.PersistentHashMap.fromArrays(inst_57252,inst_57260);
var inst_57262 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_57261);
var inst_57263 = [new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"f","f",-1597136552)];
var inst_57264 = (function (){var tid = inst_57262;
return ((function (tid,inst_57252,inst_57253,inst_57254,inst_57255,inst_57256,inst_57257,inst_57258,inst_57259,inst_57260,inst_57261,inst_57262,inst_57263,state_val_57271,c__47946__auto___61756,out,map__57250,map__57250__$1,env,pool_chan){
return (function (){
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","schedule-resolver","com.wsscode.pathom.connect/schedule-resolver",939563419)], null));

try{return com.wsscode.pathom.connect.call_resolver_STAR_(env,entity);
}catch (e57272){var e = e57272;
return e;
}});
;})(tid,inst_57252,inst_57253,inst_57254,inst_57255,inst_57256,inst_57257,inst_57258,inst_57259,inst_57260,inst_57261,inst_57262,inst_57263,state_val_57271,c__47946__auto___61756,out,map__57250,map__57250__$1,env,pool_chan))
})();
var inst_57265 = [out,inst_57264];
var inst_57266 = cljs.core.PersistentHashMap.fromArrays(inst_57263,inst_57265);
var state_57270__$1 = state_57270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57270__$1,(2),pool_chan,inst_57266);
} else {
if((state_val_57271 === (2))){
var inst_57268 = (state_57270[(2)]);
var state_57270__$1 = state_57270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57270__$1,inst_57268);
} else {
return null;
}
}
});})(c__47946__auto___61756,out,map__57250,map__57250__$1,env,pool_chan))
;
return ((function (switch__47663__auto__,c__47946__auto___61756,out,map__57250,map__57250__$1,env,pool_chan){
return (function() {
var com$wsscode$pathom$connect$call_resolver_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$call_resolver_$_state_machine__47664__auto____0 = (function (){
var statearr_57273 = [null,null,null,null,null,null,null];
(statearr_57273[(0)] = com$wsscode$pathom$connect$call_resolver_$_state_machine__47664__auto__);

(statearr_57273[(1)] = (1));

return statearr_57273;
});
var com$wsscode$pathom$connect$call_resolver_$_state_machine__47664__auto____1 = (function (state_57270){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_57270);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e57274){if((e57274 instanceof Object)){
var ex__47667__auto__ = e57274;
var statearr_57275_61769 = state_57270;
(statearr_57275_61769[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57274;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61770 = state_57270;
state_57270 = G__61770;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$call_resolver_$_state_machine__47664__auto__ = function(state_57270){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$call_resolver_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$call_resolver_$_state_machine__47664__auto____1.call(this,state_57270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$call_resolver_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$call_resolver_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$call_resolver_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$call_resolver_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$call_resolver_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___61756,out,map__57250,map__57250__$1,env,pool_chan))
})();
var state__47948__auto__ = (function (){var statearr_57276 = f__47947__auto__();
(statearr_57276[(6)] = c__47946__auto___61756);

return statearr_57276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___61756,out,map__57250,map__57250__$1,env,pool_chan))
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
return (function (state_57288){
var state_val_57289 = (state_57288[(1)]);
if((state_val_57289 === (1))){
var state_57288__$1 = state_57288;
var statearr_57290_61777 = state_57288__$1;
(statearr_57290_61777[(2)] = null);

(statearr_57290_61777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57289 === (2))){
var inst_57286 = (state_57288[(2)]);
var state_57288__$1 = state_57288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57288__$1,inst_57286);
} else {
if((state_val_57289 === (3))){
var inst_57277 = (state_57288[(2)]);
var state_57288__$1 = state_57288;
var statearr_57291_61781 = state_57288__$1;
(statearr_57291_61781[(2)] = inst_57277);


cljs.core.async.impl.ioc_helpers.process_exception(state_57288__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57289 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_57288,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_57288__$1 = state_57288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57288__$1,(5),res__53554__auto__);
} else {
if((state_val_57289 === (5))){
var inst_57282 = (state_57288[(2)]);
var inst_57283 = com.wsscode.async.async_cljs.throw_err(inst_57282);
var inst_57284 = cljs.core.select_keys(inst_57283,input);
var state_57288__$1 = state_57288;
var statearr_57292_61784 = state_57288__$1;
(statearr_57292_61784[(2)] = inst_57284);


cljs.core.async.impl.ioc_helpers.process_exception(state_57288__$1);

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
var statearr_57293 = [null,null,null,null,null,null,null];
(statearr_57293[(0)] = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__47664__auto__);

(statearr_57293[(1)] = (1));

return statearr_57293;
});
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__47664__auto____1 = (function (state_57288){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_57288);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e57294){if((e57294 instanceof Object)){
var ex__47667__auto__ = e57294;
var statearr_57295_61787 = state_57288;
(statearr_57295_61787[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57294;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61790 = state_57288;
state_57288 = G__61790;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__47664__auto__ = function(state_57288){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__47664__auto____1.call(this,state_57288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__,entity__$1))
})();
var state__47948__auto__ = (function (){var statearr_57296 = f__47947__auto__();
(statearr_57296[(6)] = c__47946__auto__);

return statearr_57296;
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
return ((cljs.core.every_QMARK_((function (p__57301){
var vec__57302 = p__57301;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57302,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57302,(1),null);
return cljs.core.not((com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.core.break_values.call(null,v)));
}),m)) && (cljs.core.every_QMARK_(m,input)));
});
com.wsscode.pathom.connect.cache_batch = (function com$wsscode$pathom$connect$cache_batch(env,resolver_sym,linked_results){
var params = com.wsscode.pathom.core.params(env);
var seq__57305 = cljs.core.seq(linked_results);
var chunk__57306 = null;
var count__57307 = (0);
var i__57308 = (0);
while(true){
if((i__57308 < count__57307)){
var vec__57315 = chunk__57306.cljs$core$IIndexed$_nth$arity$2(null,i__57308);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57315,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57315,(1),null);
com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,input,params], null),((function (seq__57305,chunk__57306,count__57307,i__57308,vec__57315,input,value,params){
return (function (){
return value;
});})(seq__57305,chunk__57306,count__57307,i__57308,vec__57315,input,value,params))
);


var G__61797 = seq__57305;
var G__61798 = chunk__57306;
var G__61799 = count__57307;
var G__61800 = (i__57308 + (1));
seq__57305 = G__61797;
chunk__57306 = G__61798;
count__57307 = G__61799;
i__57308 = G__61800;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__57305);
if(temp__5720__auto__){
var seq__57305__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57305__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__57305__$1);
var G__61801 = cljs.core.chunk_rest(seq__57305__$1);
var G__61802 = c__4550__auto__;
var G__61803 = cljs.core.count(c__4550__auto__);
var G__61804 = (0);
seq__57305 = G__61801;
chunk__57306 = G__61802;
count__57307 = G__61803;
i__57308 = G__61804;
continue;
} else {
var vec__57318 = cljs.core.first(seq__57305__$1);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57318,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57318,(1),null);
com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,input,params], null),((function (seq__57305,chunk__57306,count__57307,i__57308,vec__57318,input,value,seq__57305__$1,temp__5720__auto__,params){
return (function (){
return value;
});})(seq__57305,chunk__57306,count__57307,i__57308,vec__57318,input,value,seq__57305__$1,temp__5720__auto__,params))
);


var G__61806 = cljs.core.next(seq__57305__$1);
var G__61807 = null;
var G__61808 = (0);
var G__61809 = (0);
seq__57305 = G__61806;
chunk__57306 = G__61807;
count__57307 = G__61808;
i__57308 = G__61809;
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
var new_paths = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__57321_SHARP_){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,p1__57321_SHARP_], null)],null));
})),resolvers);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(input,keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pending], 0));
if(cljs.core.seq(missing)){
var missing_paths = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (new_paths,missing){
return (function (p1__57323_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (new_paths,missing){
return (function (acc,x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,x);
});})(new_paths,missing))
,cljs.core.first(p1__57323_SHARP_),cljs.core.next(p1__57323_SHARP_));
});})(new_paths,missing))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(com.wsscode.common.combinatorics.cartesian_product,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (new_paths,missing){
return (function (p1__57322_SHARP_){
var G__57325 = index_oir;
var G__57326 = keys;
var G__57327 = bad_keys;
var G__57328 = p1__57322_SHARP_;
var G__57329 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pending,p1__57322_SHARP_);
return (com.wsscode.pathom.connect.compute_paths_STAR_.cljs$core$IFn$_invoke$arity$5 ? com.wsscode.pathom.connect.compute_paths_STAR_.cljs$core$IFn$_invoke$arity$5(G__57325,G__57326,G__57327,G__57328,G__57329) : com.wsscode.pathom.connect.compute_paths_STAR_.call(null,G__57325,G__57326,G__57327,G__57328,G__57329));
});})(new_paths,missing))
),missing)));
if(cljs.core.seq(missing_paths)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(paths,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (missing_paths,new_paths,missing){
return (function (p1__57324_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (missing_paths,new_paths,missing){
return (function (acc,x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,x);
});})(missing_paths,new_paths,missing))
,cljs.core.first(p1__57324_SHARP_),cljs.core.next(p1__57324_SHARP_));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$3((function (p1__57330_SHARP_){
return com.wsscode.pathom.misc.distinct_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__57330_SHARP_);
}),(function (p1__57331_SHARP_){
return com.wsscode.pathom.misc.distinct_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,p1__57331_SHARP_);
}),cljs.core.rseq)),com.wsscode.pathom.connect.compute_paths_STAR_(index_oir,keys,bad_keys,attr,cljs.core.PersistentHashSet.createAsIfByAssoc([attr])));
});
com.wsscode.pathom.connect.split_good_bad_keys = (function com$wsscode$pathom$connect$split_good_bad_keys(entity){
var map__57333 = cljs.core.group_by((function (p1__57332_SHARP_){
return cljs.core.contains_QMARK_(com.wsscode.pathom.core.break_values,cljs.core.second(p1__57332_SHARP_));
}),entity);
var map__57333__$1 = (((((!((map__57333 == null))))?(((((map__57333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57333):map__57333);
var bad_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57333__$1,true);
var good_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57333__$1,false);
var good_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),good_keys);
var bad_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),bad_keys);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [good_keys__$1,bad_keys__$1], null);
});
com.wsscode.pathom.connect.path_cost = (function com$wsscode$pathom$connect$path_cost(p__57335,path){
var map__57336 = p__57335;
var map__57336__$1 = (((((!((map__57336 == null))))?(((((map__57336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57336):map__57336);
var env = map__57336__$1;
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57336__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57336__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
var weights = (function (){var or__4131__auto__ = (function (){var G__57339 = resolver_weights;
if((G__57339 == null)){
return null;
} else {
return cljs.core.deref(G__57339);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (weights,map__57336,map__57336__$1,env,resolver_weights,request_cache){
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
});})(weights,map__57336,map__57336__$1,env,resolver_weights,request_cache))
),cljs.core._PLUS_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(path));
});
com.wsscode.pathom.connect.default_sort_plan = (function com$wsscode$pathom$connect$default_sort_plan(env,plan){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__57340_SHARP_){
return com.wsscode.pathom.connect.path_cost(env,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__57340_SHARP_));
}),plan);
});
com.wsscode.pathom.connect.resolve_plan = (function com$wsscode$pathom$connect$resolve_plan(p__57341){
var map__57342 = p__57341;
var map__57342__$1 = (((((!((map__57342 == null))))?(((((map__57342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57342):map__57342);
var env = map__57342__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57342__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var sort_plan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57342__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sort-plan","com.wsscode.pathom.connect/sort-plan",-1506396873));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var sort_plan__$1 = (function (){var or__4131__auto__ = sort_plan;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.connect.default_sort_plan;
}
})();
var vec__57344 = com.wsscode.pathom.connect.split_good_bad_keys(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env));
var good_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57344,(0),null);
var bad_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57344,(1),null);
var G__57347 = env;
var G__57348 = com.wsscode.pathom.connect.compute_paths(new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746).cljs$core$IFn$_invoke$arity$1(indexes),good_keys,bad_keys,key);
return (sort_plan__$1.cljs$core$IFn$_invoke$arity$2 ? sort_plan__$1.cljs$core$IFn$_invoke$arity$2(G__57347,G__57348) : sort_plan__$1.call(null,G__57347,G__57348));
});
com.wsscode.pathom.connect.resolver__GT_output = (function com$wsscode$pathom$connect$resolver__GT_output(env,resolver_sym){
var map__57349 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),resolver_sym], null));
var map__57349__$1 = (((((!((map__57349 == null))))?(((((map__57349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57349):map__57349);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57349__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var compute_output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57349__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","compute-output","com.wsscode.pathom.connect/compute-output",2103799942));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__57351_SHARP_){
return com.wsscode.pathom.connect.output__GT_provides(com.wsscode.pathom.connect.resolver__GT_output(env,cljs.core.second(p1__57351_SHARP_)));
})),plan);
});
com.wsscode.pathom.connect.plan__GT_resolvers = (function com$wsscode$pathom$connect$plan__GT_resolvers(plan){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.flatten(plan));
});
com.wsscode.pathom.connect.decrease_path_costs = (function com$wsscode$pathom$connect$decrease_path_costs(p__57353,plan){
var map__57354 = p__57353;
var map__57354__$1 = (((((!((map__57354 == null))))?(((((map__57354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57354):map__57354);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57354__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var resolver_weight_decrease_amount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57354__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weight-decrease-amount","com.wsscode.pathom.connect/resolver-weight-decrease-amount",-937582293),(1));
if(cljs.core.truth_(resolver_weights)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(resolver_weights,((function (map__57354,map__57354__$1,resolver_weights,resolver_weight_decrease_amount){
return (function (p1__57352_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__57354,map__57354__$1,resolver_weights,resolver_weight_decrease_amount){
return (function (rw,rsym){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rw,rsym,(function (){var x__4219__auto__ = (1);
var y__4220__auto__ = (cljs.core.get.cljs$core$IFn$_invoke$arity$3(rw,rsym,(0)) - resolver_weight_decrease_amount);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());
});})(map__57354,map__57354__$1,resolver_weights,resolver_weight_decrease_amount))
,p1__57352_SHARP_,com.wsscode.pathom.connect.plan__GT_resolvers(plan));
});})(map__57354,map__57354__$1,resolver_weights,resolver_weight_decrease_amount))
);
} else {
return null;
}
});
com.wsscode.pathom.connect.reader_compute_plan = (function com$wsscode$pathom$connect$reader_compute_plan(env,failed_resolvers){
var plan_trace_id = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978)], null));
var plan = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (plan_trace_id){
return (function (p1__57356_SHARP_){
return cljs.core.some(failed_resolvers,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__57356_SHARP_));
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
return (function (p__57357,p__57358){
var map__57359 = p__57357;
var map__57359__$1 = (((((!((map__57359 == null))))?(((((map__57359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57359):map__57359);
var acc = map__57359__$1;
var provided = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57359__$1,new cljs.core.Keyword(null,"provided","provided",-1493091365));
var map__57360 = p__57358;
var map__57360__$1 = (((((!((map__57360 == null))))?(((((map__57360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57360):map__57360);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57360__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.contains_QMARK_(provided,key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj,key);
} else {
var temp__5718__auto__ = cljs.core.first(com.wsscode.pathom.connect.resolve_plan(cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),key)));
if(cljs.core.truth_(temp__5718__auto__)){
var plan = temp__5718__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.into,(function (){var G__57363 = plan;
var G__57363__$1 = (((G__57363 == null))?null:cljs.core.first(G__57363));
var G__57363__$2 = (((G__57363__$1 == null))?null:cljs.core.second(G__57363__$1));
var G__57363__$3 = (((G__57363__$2 == null))?null:(com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2(env,G__57363__$2) : com.wsscode.pathom.connect.resolver_data.call(null,env,G__57363__$2)));
if((G__57363__$3 == null)){
return null;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121).cljs$core$IFn$_invoke$arity$1(G__57363__$3);
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
com.wsscode.pathom.connect.project_parent_query_attributes = (function com$wsscode$pathom$connect$project_parent_query_attributes(p__57364){
var map__57365 = p__57364;
var map__57365__$1 = (((((!((map__57365 == null))))?(((((map__57365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57365):map__57365);
var env = map__57365__$1;
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57365__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
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
com.wsscode.pathom.connect.reader = (function com$wsscode$pathom$connect$reader(p__57370){
var map__57371 = p__57370;
var map__57371__$1 = (((((!((map__57371 == null))))?(((((map__57371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57371):map__57371);
var env = map__57371__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57371__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57371__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var p = com.wsscode.pathom.core.params(env);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null)))){
var temp__5718__auto__ = com.wsscode.pathom.connect.pick_resolver(env);
if(cljs.core.truth_(temp__5718__auto__)){
var map__57373 = temp__5718__auto__;
var map__57373__$1 = (((((!((map__57373 == null))))?(((((map__57373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57373):map__57373);
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57373__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57373__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var map__57375 = (com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2(env,s) : com.wsscode.pathom.connect.resolver_data.call(null,env,s));
var map__57375__$1 = (((((!((map__57375 == null))))?(((((map__57375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57375):map__57375);
var resolver = map__57375__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57375__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57375__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57375__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver);
var response = (cljs.core.truth_(cache_QMARK_)?com.wsscode.async.async_cljs.throw_err(com.wsscode.pathom.core.cached_STAR_(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,e,p], null),((function (map__57375,map__57375__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__57373,map__57373__$1,e,s,temp__5718__auto__,k,p,map__57371,map__57371__$1,env,indexes,processing_sequence){
return (function (){
if(cljs.core.truth_((function (){var and__4120__auto__ = batch_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return processing_sequence;
} else {
return and__4120__auto__;
}
})())){
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (map__57375,map__57375__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__57373,map__57373__$1,e,s,temp__5718__auto__,k,p,map__57371,map__57371__$1,env,indexes,processing_sequence){
return (function (p1__57368_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__57368_SHARP_,input);
});})(map__57375,map__57375__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__57373,map__57373__$1,e,s,temp__5718__auto__,k,p,map__57371,map__57371__$1,env,indexes,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__57375,map__57375__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__57373,map__57373__$1,e,s,temp__5718__auto__,k,p,map__57371,map__57371__$1,env,indexes,processing_sequence){
return (function (p1__57367_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__57367_SHARP_,input);
});})(map__57375,map__57375__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__57373,map__57373__$1,e,s,temp__5718__auto__,k,p,map__57371,map__57371__$1,env,indexes,processing_sequence))
,processing_sequence)));
var batch_result = com.wsscode.pathom.connect.call_resolver(env__$1,items);
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env__$1,s,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
} else {
return com.wsscode.pathom.connect.call_resolver(env__$1,e);
}
});})(map__57375,map__57375__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__57373,map__57373__$1,e,s,temp__5718__auto__,k,p,map__57371,map__57371__$1,env,indexes,processing_sequence))
)):com.wsscode.pathom.connect.call_resolver(env__$1,e));
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),env__$1);
var response__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
if((!((((response__$1 == null)) || (cljs.core.map_QMARK_(response__$1)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Response from resolver must be a map.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),s,new cljs.core.Keyword(null,"response","response",-1068424192),response__$1], null));
} else {
}

com.wsscode.pathom.core.swap_entity_BANG_(env_SINGLEQUOTE_,((function (map__57375,map__57375__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,response,env_SINGLEQUOTE_,response__$1,map__57373,map__57373__$1,e,s,temp__5718__auto__,k,p,map__57371,map__57371__$1,env,indexes,processing_sequence){
return (function (p1__57369_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$1,p1__57369_SHARP_], 0));
});})(map__57375,map__57375__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,response,env_SINGLEQUOTE_,response__$1,map__57373,map__57373__$1,e,s,temp__5718__auto__,k,p,map__57371,map__57371__$1,env,indexes,processing_sequence))
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
com.wsscode.pathom.connect.serial_resolver_call_batch = (function com$wsscode$pathom$connect$serial_resolver_call_batch(p__57379,e){
var map__57380 = p__57379;
var map__57380__$1 = (((((!((map__57380 == null))))?(((((map__57380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57380):map__57380);
var env = map__57380__$1;
var map__57381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57380__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__57381__$1 = (((((!((map__57381 == null))))?(((((map__57381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57381):map__57381);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57381__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57381__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57380__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var trace_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),e], null);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__27094__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769)));
var res__27095__auto__ = (function (){var _ = com.wsscode.pathom.trace.trace(env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417)));
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (_,trace_id__27094__auto__,trace_data,map__57380,map__57380__$1,env,map__57381,map__57381__$1,sym,input,processing_sequence){
return (function (p1__57378_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__57378_SHARP_,input);
});})(_,trace_id__27094__auto__,trace_data,map__57380,map__57380__$1,env,map__57381,map__57381__$1,sym,input,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (_,trace_id__27094__auto__,trace_data,map__57380,map__57380__$1,env,map__57381,map__57381__$1,sym,input,processing_sequence){
return (function (p1__57377_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__57377_SHARP_,input);
});})(_,trace_id__27094__auto__,trace_data,map__57380,map__57380__$1,env,map__57381,map__57381__$1,sym,input,processing_sequence))
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
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (_,trace_data,map__57380,map__57380__$1,env,map__57381,map__57381__$1,sym,input,processing_sequence){
return (function (p1__57378_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__57378_SHARP_,input);
});})(_,trace_data,map__57380,map__57380__$1,env,map__57381,map__57381__$1,sym,input,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (_,trace_data,map__57380,map__57380__$1,env,map__57381,map__57381__$1,sym,input,processing_sequence){
return (function (p1__57377_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__57377_SHARP_,input);
});})(_,trace_data,map__57380,map__57380__$1,env,map__57381,map__57381__$1,sym,input,processing_sequence))
,processing_sequence)));
var ___$1 = com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616),items], null));
var batch_result = com.wsscode.pathom.connect.call_resolver(env,items);
var ___$2 = com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429),cljs.core.count(batch_result)], null));
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env,sym,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
}
});
com.wsscode.pathom.connect.serial_cache_resolver_call = (function com$wsscode$pathom$connect$serial_cache_resolver_call(p__57384,e){
var map__57385 = p__57384;
var map__57385__$1 = (((((!((map__57385 == null))))?(((((map__57385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57385):map__57385);
var env = map__57385__$1;
var map__57386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57385__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__57386__$1 = (((((!((map__57386 == null))))?(((((map__57386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57386):map__57386);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57386__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57386__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57385__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var p = com.wsscode.pathom.core.params(env);
return com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,e,p], null),((function (p,map__57385,map__57385__$1,env,map__57386,map__57386__$1,sym,batch_QMARK_,processing_sequence){
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
});})(p,map__57385,map__57385__$1,env,map__57386,map__57386__$1,sym,batch_QMARK_,processing_sequence))
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
com.wsscode.pathom.connect.reader2 = (function com$wsscode$pathom$connect$reader2(p__57393){
var map__57394 = p__57393;
var map__57394__$1 = (((((!((map__57394 == null))))?(((((map__57394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57394):map__57394);
var env = map__57394__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57394__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57394__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57394__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var temp__5718__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__57396 = temp__5718__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57396,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57396,(1),null);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var G__57402 = plan;
var vec__57403 = G__57402;
var seq__57404 = cljs.core.seq(vec__57403);
var first__57405 = cljs.core.first(seq__57404);
var seq__57404__$1 = cljs.core.next(seq__57404);
var step = first__57405;
var tail = seq__57404__$1;
var failed_resolvers = cljs.core.PersistentArrayMap.EMPTY;
var out_left = out;
var G__57402__$1 = G__57402;
var failed_resolvers__$1 = failed_resolvers;
var out_left__$1 = out_left;
while(true){
var vec__57427 = G__57402__$1;
var seq__57428 = cljs.core.seq(vec__57427);
var first__57429 = cljs.core.first(seq__57428);
var seq__57428__$1 = cljs.core.next(seq__57428);
var step__$1 = first__57429;
var tail__$1 = seq__57428__$1;
var failed_resolvers__$2 = failed_resolvers__$1;
var out_left__$2 = out_left__$1;
if(cljs.core.truth_(step__$1)){
var vec__57430 = step__$1;
var key_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57430,(0),null);
var resolver_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57430,(1),null);
var map__57433 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),resolver_sym], null));
var map__57433__$1 = (((((!((map__57433 == null))))?(((((map__57433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57433):map__57433);
var resolver = map__57433__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57433__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57433__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57433__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = com.wsscode.pathom.connect.resolver__GT_output(env,resolver_sym);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver);
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env__$1);
var e = cljs.core.select_keys(entity,input);
var p = com.wsscode.pathom.core.params(env__$1);
var trace_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),e], null);
var response = ((cljs.core.contains_QMARK_(entity,key_SINGLEQUOTE_))?cljs.core.select_keys(entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)):(cljs.core.truth_(cache_QMARK_)?com.wsscode.async.async_cljs.throw_err(com.wsscode.pathom.core.cached_STAR_(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,e,p], null),((function (G__57402__$1,failed_resolvers__$1,out_left__$1,vec__57430,key_SINGLEQUOTE_,resolver_sym,map__57433,map__57433__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__57427,seq__57428,first__57429,seq__57428__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__57402,vec__57403,seq__57404,first__57405,seq__57404__$1,step,tail,failed_resolvers,out_left,key,vec__57396,plan,out,temp__5718__auto__,map__57394,map__57394__$1,env,indexes,max_resolver_weight,processing_sequence){
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
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (G__57402__$1,failed_resolvers__$1,out_left__$1,_,trace_id__27094__auto__,vec__57430,key_SINGLEQUOTE_,resolver_sym,map__57433,map__57433__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__57427,seq__57428,first__57429,seq__57428__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__57402,vec__57403,seq__57404,first__57405,seq__57404__$1,step,tail,failed_resolvers,out_left,key,vec__57396,plan,out,temp__5718__auto__,map__57394,map__57394__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__57390_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__57390_SHARP_,input);
});})(G__57402__$1,failed_resolvers__$1,out_left__$1,_,trace_id__27094__auto__,vec__57430,key_SINGLEQUOTE_,resolver_sym,map__57433,map__57433__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__57427,seq__57428,first__57429,seq__57428__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__57402,vec__57403,seq__57404,first__57405,seq__57404__$1,step,tail,failed_resolvers,out_left,key,vec__57396,plan,out,temp__5718__auto__,map__57394,map__57394__$1,env,indexes,max_resolver_weight,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__57402__$1,failed_resolvers__$1,out_left__$1,_,trace_id__27094__auto__,vec__57430,key_SINGLEQUOTE_,resolver_sym,map__57433,map__57433__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__57427,seq__57428,first__57429,seq__57428__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__57402,vec__57403,seq__57404,first__57405,seq__57404__$1,step,tail,failed_resolvers,out_left,key,vec__57396,plan,out,temp__5718__auto__,map__57394,map__57394__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__57389_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__57389_SHARP_,input);
});})(G__57402__$1,failed_resolvers__$1,out_left__$1,_,trace_id__27094__auto__,vec__57430,key_SINGLEQUOTE_,resolver_sym,map__57433,map__57433__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__57427,seq__57428,first__57429,seq__57428__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__57402,vec__57403,seq__57404,first__57405,seq__57404__$1,step,tail,failed_resolvers,out_left,key,vec__57396,plan,out,temp__5718__auto__,map__57394,map__57394__$1,env,indexes,max_resolver_weight,processing_sequence))
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
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (G__57402__$1,failed_resolvers__$1,out_left__$1,_,vec__57430,key_SINGLEQUOTE_,resolver_sym,map__57433,map__57433__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__57427,seq__57428,first__57429,seq__57428__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__57402,vec__57403,seq__57404,first__57405,seq__57404__$1,step,tail,failed_resolvers,out_left,key,vec__57396,plan,out,temp__5718__auto__,map__57394,map__57394__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__57390_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__57390_SHARP_,input);
});})(G__57402__$1,failed_resolvers__$1,out_left__$1,_,vec__57430,key_SINGLEQUOTE_,resolver_sym,map__57433,map__57433__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__57427,seq__57428,first__57429,seq__57428__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__57402,vec__57403,seq__57404,first__57405,seq__57404__$1,step,tail,failed_resolvers,out_left,key,vec__57396,plan,out,temp__5718__auto__,map__57394,map__57394__$1,env,indexes,max_resolver_weight,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__57402__$1,failed_resolvers__$1,out_left__$1,_,vec__57430,key_SINGLEQUOTE_,resolver_sym,map__57433,map__57433__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__57427,seq__57428,first__57429,seq__57428__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__57402,vec__57403,seq__57404,first__57405,seq__57404__$1,step,tail,failed_resolvers,out_left,key,vec__57396,plan,out,temp__5718__auto__,map__57394,map__57394__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__57389_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__57389_SHARP_,input);
});})(G__57402__$1,failed_resolvers__$1,out_left__$1,_,vec__57430,key_SINGLEQUOTE_,resolver_sym,map__57433,map__57433__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__57427,seq__57428,first__57429,seq__57428__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__57402,vec__57403,seq__57404,first__57405,seq__57404__$1,step,tail,failed_resolvers,out_left,key,vec__57396,plan,out,temp__5718__auto__,map__57394,map__57394__$1,env,indexes,max_resolver_weight,processing_sequence))
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
});})(G__57402__$1,failed_resolvers__$1,out_left__$1,vec__57430,key_SINGLEQUOTE_,resolver_sym,map__57433,map__57433__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__57427,seq__57428,first__57429,seq__57428__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__57402,vec__57403,seq__57404,first__57405,seq__57404__$1,step,tail,failed_resolvers,out_left,key,vec__57396,plan,out,temp__5718__auto__,map__57394,map__57394__$1,env,indexes,max_resolver_weight,processing_sequence))
)):com.wsscode.pathom.connect.call_resolver(env__$1,e)
));
var response__$1 = (function (){var or__4131__auto__ = response;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var replan = ((function (G__57402__$1,failed_resolvers__$1,out_left__$1,vec__57430,key_SINGLEQUOTE_,resolver_sym,map__57433,map__57433__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,vec__57427,seq__57428,first__57429,seq__57428__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__57402,vec__57403,seq__57404,first__57405,seq__57404__$1,step,tail,failed_resolvers,out_left,key,vec__57396,plan,out,temp__5718__auto__,map__57394,map__57394__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (error){
var failed_resolvers__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers__$2,resolver_sym,error);
com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$1,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (G__57402__$1,failed_resolvers__$1,out_left__$1,failed_resolvers__$3,vec__57430,key_SINGLEQUOTE_,resolver_sym,map__57433,map__57433__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,vec__57427,seq__57428,first__57429,seq__57428__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__57402,vec__57403,seq__57404,first__57405,seq__57404__$1,step,tail,failed_resolvers,out_left,key,vec__57396,plan,out,temp__5718__auto__,map__57394,map__57394__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__57391_SHARP_){
var x__4222__auto__ = ((function (){var or__4131__auto__ = p1__57391_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() * (2));
var y__4223__auto__ = max_resolver_weight;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});})(G__57402__$1,failed_resolvers__$1,out_left__$1,failed_resolvers__$3,vec__57430,key_SINGLEQUOTE_,resolver_sym,map__57433,map__57433__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,vec__57427,seq__57428,first__57429,seq__57428__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__57402,vec__57403,seq__57404,first__57405,seq__57404__$1,step,tail,failed_resolvers,out_left,key,vec__57396,plan,out,temp__5718__auto__,map__57394,map__57394__$1,env,indexes,max_resolver_weight,processing_sequence))
], 0));

var temp__5718__auto____$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$1,failed_resolvers__$3);
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__57435 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57435,(0),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57435,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan__$1,failed_resolvers__$3,out_SINGLEQUOTE_], null);
} else {
return null;
}
});})(G__57402__$1,failed_resolvers__$1,out_left__$1,vec__57430,key_SINGLEQUOTE_,resolver_sym,map__57433,map__57433__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,vec__57427,seq__57428,first__57429,seq__57428__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__57402,vec__57403,seq__57404,first__57405,seq__57404__$1,step,tail,failed_resolvers,out_left,key,vec__57396,plan,out,temp__5718__auto__,map__57394,map__57394__$1,env,indexes,max_resolver_weight,processing_sequence))
;
if(cljs.core.map_QMARK_(response__$1)){
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(response__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),env__$1);
var response__$2 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
com.wsscode.pathom.core.swap_entity_BANG_(env_SINGLEQUOTE_,((function (G__57402__$1,failed_resolvers__$1,out_left__$1,env_SINGLEQUOTE_,response__$2,vec__57430,key_SINGLEQUOTE_,resolver_sym,map__57433,map__57433__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,replan,vec__57427,seq__57428,first__57429,seq__57428__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__57402,vec__57403,seq__57404,first__57405,seq__57404__$1,step,tail,failed_resolvers,out_left,key,vec__57396,plan,out,temp__5718__auto__,map__57394,map__57394__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__57392_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$2,p1__57392_SHARP_], 0));
});})(G__57402__$1,failed_resolvers__$1,out_left__$1,env_SINGLEQUOTE_,response__$2,vec__57430,key_SINGLEQUOTE_,resolver_sym,map__57433,map__57433__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,replan,vec__57427,seq__57428,first__57429,seq__57428__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__57402,vec__57403,seq__57404,first__57405,seq__57404__$1,step,tail,failed_resolvers,out_left,key,vec__57396,plan,out,temp__5718__auto__,map__57394,map__57394__$1,env,indexes,max_resolver_weight,processing_sequence))
);

if(((cljs.core.contains_QMARK_(response__$2,key_SINGLEQUOTE_)) && (cljs.core.not((function (){var G__57439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response__$2,key_SINGLEQUOTE_);
return (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(G__57439) : com.wsscode.pathom.core.break_values.call(null,G__57439));
})())))){
var out_provides = com.wsscode.pathom.connect.output__GT_provides(output);
com.wsscode.pathom.trace.trace(env_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym], null));

if(cljs.core.seq(tail__$1)){
var G__61956 = tail__$1;
var G__61957 = failed_resolvers__$2;
var G__61958 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(out_left__$2,out_provides);
G__57402__$1 = G__61956;
failed_resolvers__$1 = G__61957;
out_left__$1 = G__61958;
continue;
} else {
return com.wsscode.pathom.core.map_reader(env_SINGLEQUOTE_);
}
} else {
var temp__5718__auto____$1 = replan(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$2,new cljs.core.Keyword(null,"key","key",-1516042587),key_SINGLEQUOTE_], null)));
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__57440 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57440,(0),null);
var failed_resolvers__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57440,(1),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57440,(2),null);
var G__61962 = plan__$1;
var G__61963 = failed_resolvers__$3;
var G__61964 = out_SINGLEQUOTE_;
G__57402__$1 = G__61962;
failed_resolvers__$1 = G__61963;
out_left__$1 = G__61964;
continue;
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.seq(tail__$1);
if(and__4120__auto__){
var G__57444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response__$2,key_SINGLEQUOTE_);
return (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(G__57444) : com.wsscode.pathom.core.break_values.call(null,G__57444));
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
var vec__57445 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57445,(0),null);
var failed_resolvers__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57445,(1),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57445,(2),null);
var G__61972 = plan__$1;
var G__61973 = failed_resolvers__$3;
var G__61974 = out_SINGLEQUOTE_;
G__57402__$1 = G__61972;
failed_resolvers__$1 = G__61973;
out_left__$1 = G__61974;
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
return (function (state_57491){
var state_val_57492 = (state_57491[(1)]);
if((state_val_57492 === (7))){
var inst_57456 = (state_57491[(7)]);
var inst_57458 = (state_57491[(8)]);
var inst_57458__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_57456) : f.call(null,inst_57456));
var inst_57459 = com.wsscode.async.async_cljs.chan_QMARK_(inst_57458__$1);
var state_57491__$1 = (function (){var statearr_57493 = state_57491;
(statearr_57493[(8)] = inst_57458__$1);

return statearr_57493;
})();
if(inst_57459){
var statearr_57494_61982 = state_57491__$1;
(statearr_57494_61982[(1)] = (10));

} else {
var statearr_57495_61984 = state_57491__$1;
(statearr_57495_61984[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57492 === (20))){
var inst_57475 = (state_57491[(2)]);
var state_57491__$1 = state_57491;
var statearr_57496_61986 = state_57491__$1;
(statearr_57496_61986[(2)] = inst_57475);

(statearr_57496_61986[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57492 === (1))){
var state_57491__$1 = state_57491;
var statearr_57497_61988 = state_57491__$1;
(statearr_57497_61988[(2)] = null);

(statearr_57497_61988[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57492 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_57491,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_57452 = cljs.core.PersistentVector.EMPTY;
var inst_57453 = inst_57452;
var inst_57454 = s;
var state_57491__$1 = (function (){var statearr_57498 = state_57491;
(statearr_57498[(9)] = inst_57454);

(statearr_57498[(10)] = inst_57453);

return statearr_57498;
})();
var statearr_57499_61993 = state_57491__$1;
(statearr_57499_61993[(2)] = null);

(statearr_57499_61993[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57492 === (15))){
var state_57491__$1 = state_57491;
var statearr_57500_61994 = state_57491__$1;
(statearr_57500_61994[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57492 === (13))){
var inst_57462 = (state_57491[(2)]);
var inst_57463 = com.wsscode.async.async_cljs.throw_err(inst_57462);
var state_57491__$1 = state_57491;
var statearr_57502_61995 = state_57491__$1;
(statearr_57502_61995[(2)] = inst_57463);

(statearr_57502_61995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57492 === (6))){
var inst_57487 = (state_57491[(2)]);
var state_57491__$1 = state_57491;
var statearr_57503_61996 = state_57491__$1;
(statearr_57503_61996[(2)] = inst_57487);


cljs.core.async.impl.ioc_helpers.process_exception(state_57491__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57492 === (17))){
var inst_57469 = (state_57491[(2)]);
var inst_57470 = com.wsscode.async.async_cljs.consumer_pair(inst_57469);
var state_57491__$1 = state_57491;
var statearr_57504_61999 = state_57491__$1;
(statearr_57504_61999[(2)] = inst_57470);

(statearr_57504_61999[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57492 === (3))){
var inst_57448 = (state_57491[(2)]);
var state_57491__$1 = state_57491;
var statearr_57505_62000 = state_57491__$1;
(statearr_57505_62000[(2)] = inst_57448);


cljs.core.async.impl.ioc_helpers.process_exception(state_57491__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57492 === (12))){
var inst_57454 = (state_57491[(9)]);
var inst_57453 = (state_57491[(10)]);
var inst_57479 = (state_57491[(2)]);
var inst_57480 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_57453,inst_57479);
var inst_57481 = cljs.core.next(inst_57454);
var inst_57453__$1 = inst_57480;
var inst_57454__$1 = inst_57481;
var state_57491__$1 = (function (){var statearr_57506 = state_57491;
(statearr_57506[(9)] = inst_57454__$1);

(statearr_57506[(10)] = inst_57453__$1);

return statearr_57506;
})();
var statearr_57507_62014 = state_57491__$1;
(statearr_57507_62014[(2)] = null);

(statearr_57507_62014[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57492 === (2))){
var inst_57489 = (state_57491[(2)]);
var state_57491__$1 = state_57491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57491__$1,inst_57489);
} else {
if((state_val_57492 === (19))){
var state_57491__$1 = state_57491;
var statearr_57508_62033 = state_57491__$1;
(statearr_57508_62033[(2)] = null);

(statearr_57508_62033[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57492 === (11))){
var inst_57458 = (state_57491[(8)]);
var inst_57465 = com.wsscode.async.async_cljs.promise_QMARK_(inst_57458);
var state_57491__$1 = state_57491;
if(cljs.core.truth_(inst_57465)){
var statearr_57509_62044 = state_57491__$1;
(statearr_57509_62044[(1)] = (14));

} else {
var statearr_57510_62045 = state_57491__$1;
(statearr_57510_62045[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57492 === (9))){
var inst_57485 = (state_57491[(2)]);
var state_57491__$1 = state_57491;
var statearr_57511_62046 = state_57491__$1;
(statearr_57511_62046[(2)] = inst_57485);

(statearr_57511_62046[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57492 === (5))){
var inst_57456 = (state_57491[(7)]);
var inst_57454 = (state_57491[(9)]);
var inst_57456__$1 = cljs.core.first(inst_57454);
var state_57491__$1 = (function (){var statearr_57512 = state_57491;
(statearr_57512[(7)] = inst_57456__$1);

return statearr_57512;
})();
if(cljs.core.truth_(inst_57456__$1)){
var statearr_57513_62047 = state_57491__$1;
(statearr_57513_62047[(1)] = (7));

} else {
var statearr_57514_62048 = state_57491__$1;
(statearr_57514_62048[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57492 === (14))){
var inst_57458 = (state_57491[(8)]);
var inst_57467 = com.wsscode.async.async_cljs.promise__GT_chan(inst_57458);
var state_57491__$1 = state_57491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57491__$1,(17),inst_57467);
} else {
if((state_val_57492 === (16))){
var inst_57477 = (state_57491[(2)]);
var state_57491__$1 = state_57491;
var statearr_57515_62051 = state_57491__$1;
(statearr_57515_62051[(2)] = inst_57477);

(statearr_57515_62051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57492 === (10))){
var inst_57458 = (state_57491[(8)]);
var state_57491__$1 = state_57491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57491__$1,(13),inst_57458);
} else {
if((state_val_57492 === (18))){
var inst_57458 = (state_57491[(8)]);
var state_57491__$1 = state_57491;
var statearr_57516_62053 = state_57491__$1;
(statearr_57516_62053[(2)] = inst_57458);

(statearr_57516_62053[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57492 === (8))){
var inst_57453 = (state_57491[(10)]);
var state_57491__$1 = state_57491;
var statearr_57517_62055 = state_57491__$1;
(statearr_57517_62055[(2)] = inst_57453);

(statearr_57517_62055[(1)] = (9));


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
var statearr_57518 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57518[(0)] = com$wsscode$pathom$connect$map_async_serial_$_state_machine__47664__auto__);

(statearr_57518[(1)] = (1));

return statearr_57518;
});
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__47664__auto____1 = (function (state_57491){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_57491);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e57519){if((e57519 instanceof Object)){
var ex__47667__auto__ = e57519;
var statearr_57520_62058 = state_57491;
(statearr_57520_62058[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57519;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62059 = state_57491;
state_57491 = G__62059;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$map_async_serial_$_state_machine__47664__auto__ = function(state_57491){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__47664__auto____1.call(this,state_57491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$map_async_serial_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$map_async_serial_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$map_async_serial_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$map_async_serial_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_57521 = f__47947__auto__();
(statearr_57521[(6)] = c__47946__auto__);

return statearr_57521;
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
com.wsscode.pathom.connect.async_reader = (function com$wsscode$pathom$connect$async_reader(p__57525){
var map__57526 = p__57525;
var map__57526__$1 = (((((!((map__57526 == null))))?(((((map__57526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57526):map__57526);
var env = map__57526__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57526__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57526__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var p = com.wsscode.pathom.core.params(env);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null)))){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,k,p,map__57526,map__57526__$1,env,indexes,processing_sequence){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,k,p,map__57526,map__57526__$1,env,indexes,processing_sequence){
return (function (state_57729){
var state_val_57730 = (state_57729[(1)]);
if((state_val_57730 === (65))){
var inst_57672 = (state_57729[(2)]);
var inst_57673 = com.wsscode.async.async_cljs.consumer_pair(inst_57672);
var state_57729__$1 = state_57729;
var statearr_57731_62077 = state_57729__$1;
(statearr_57731_62077[(2)] = inst_57673);

(statearr_57731_62077[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (70))){
var state_57729__$1 = state_57729;
var statearr_57732_62079 = state_57729__$1;
(statearr_57732_62079[(1)] = (75));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (62))){
var inst_57661 = (state_57729[(7)]);
var inst_57670 = com.wsscode.async.async_cljs.promise__GT_chan(inst_57661);
var state_57729__$1 = state_57729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57729__$1,(65),inst_57670);
} else {
if((state_val_57730 === (74))){
var inst_57690 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
var statearr_57734_62085 = state_57729__$1;
(statearr_57734_62085[(2)] = inst_57690);

(statearr_57734_62085[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (7))){
var state_57729__$1 = state_57729;
var statearr_57735_62088 = state_57729__$1;
(statearr_57735_62088[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));

(statearr_57735_62088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (59))){
var inst_57661 = (state_57729[(7)]);
var inst_57668 = com.wsscode.async.async_cljs.promise_QMARK_(inst_57661);
var state_57729__$1 = state_57729;
if(cljs.core.truth_(inst_57668)){
var statearr_57736_62089 = state_57729__$1;
(statearr_57736_62089[(1)] = (62));

} else {
var statearr_57737_62091 = state_57729__$1;
(statearr_57737_62091[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (86))){
var inst_57694 = (state_57729[(8)]);
var state_57729__$1 = state_57729;
var statearr_57738_62092 = state_57729__$1;
(statearr_57738_62092[(2)] = inst_57694);

(statearr_57738_62092[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (20))){
var inst_57578 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
if(cljs.core.truth_(inst_57578)){
var statearr_57739_62093 = state_57729__$1;
(statearr_57739_62093[(1)] = (24));

} else {
var statearr_57740_62094 = state_57729__$1;
(statearr_57740_62094[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (72))){
var inst_57657 = (state_57729[(9)]);
var state_57729__$1 = state_57729;
var statearr_57741_62096 = state_57729__$1;
(statearr_57741_62096[(2)] = inst_57657);

(statearr_57741_62096[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (58))){
var inst_57661 = (state_57729[(7)]);
var state_57729__$1 = state_57729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57729__$1,(61),inst_57661);
} else {
if((state_val_57730 === (60))){
var inst_57682 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
var statearr_57742_62097 = state_57729__$1;
(statearr_57742_62097[(2)] = inst_57682);

(statearr_57742_62097[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (27))){
var inst_57559 = (state_57729[(10)]);
var inst_57585 = (state_57729[(11)]);
var inst_57586 = (state_57729[(12)]);
var inst_57587 = (state_57729[(13)]);
var inst_57558 = (state_57729[(14)]);
var inst_57583 = (state_57729[(15)]);
var inst_57535 = (state_57729[(16)]);
var inst_57560 = (state_57729[(17)]);
var inst_57584 = (state_57729[(18)]);
var inst_57593 = (state_57729[(19)]);
var inst_57589 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57590 = [inst_57560,inst_57559,p];
var inst_57591 = (new cljs.core.PersistentVector(null,3,(5),inst_57589,inst_57590,null));
var inst_57592 = (function (){var input = inst_57586;
var cache_QMARK_ = inst_57584;
var map__57537 = inst_57558;
var map__57561 = inst_57583;
var temp__5718__auto__ = inst_57535;
var batch_QMARK_ = inst_57585;
var env__$1 = inst_57587;
var e = inst_57559;
var s = inst_57560;
var resolver = inst_57583;
return ((function (input,cache_QMARK_,map__57537,map__57561,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_57559,inst_57585,inst_57586,inst_57587,inst_57558,inst_57583,inst_57535,inst_57560,inst_57584,inst_57593,inst_57589,inst_57590,inst_57591,state_val_57730,c__47946__auto__,k,p,map__57526,map__57526__$1,env,indexes,processing_sequence){
return (function (){
var c__47946__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto____$1,input,cache_QMARK_,map__57537,map__57561,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_57559,inst_57585,inst_57586,inst_57587,inst_57558,inst_57583,inst_57535,inst_57560,inst_57584,inst_57593,inst_57589,inst_57590,inst_57591,state_val_57730,c__47946__auto__,k,p,map__57526,map__57526__$1,env,indexes,processing_sequence){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto____$1,input,cache_QMARK_,map__57537,map__57561,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_57559,inst_57585,inst_57586,inst_57587,inst_57558,inst_57583,inst_57535,inst_57560,inst_57584,inst_57593,inst_57589,inst_57590,inst_57591,state_val_57730,c__47946__auto__,k,p,map__57526,map__57526__$1,env,indexes,processing_sequence){
return (function (state_57812){
var state_val_57813 = (state_57812[(1)]);
if((state_val_57813 === (7))){
var inst_57750 = (state_57812[(2)]);
var state_57812__$1 = state_57812;
if(cljs.core.truth_(inst_57750)){
var statearr_57814_62139 = state_57812__$1;
(statearr_57814_62139[(1)] = (8));

} else {
var statearr_57815_62140 = state_57812__$1;
(statearr_57815_62140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (20))){
var inst_57759 = (state_57812[(7)]);
var state_57812__$1 = state_57812;
var statearr_57816_62142 = state_57812__$1;
(statearr_57816_62142[(2)] = inst_57759);

(statearr_57816_62142[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (27))){
var inst_57785 = (state_57812[(8)]);
var inst_57794 = com.wsscode.async.async_cljs.promise__GT_chan(inst_57785);
var state_57812__$1 = state_57812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57812__$1,(30),inst_57794);
} else {
if((state_val_57813 === (1))){
var state_57812__$1 = state_57812;
var statearr_57817_62148 = state_57812__$1;
(statearr_57817_62148[(2)] = null);

(statearr_57817_62148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (24))){
var inst_57785 = (state_57812[(8)]);
var inst_57792 = com.wsscode.async.async_cljs.promise_QMARK_(inst_57785);
var state_57812__$1 = state_57812;
if(cljs.core.truth_(inst_57792)){
var statearr_57818_62150 = state_57812__$1;
(statearr_57818_62150[(1)] = (27));

} else {
var statearr_57819_62151 = state_57812__$1;
(statearr_57819_62151[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_57812,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_57812__$1 = state_57812;
if(cljs.core.truth_(batch_QMARK_)){
var statearr_57820_62153 = state_57812__$1;
(statearr_57820_62153[(1)] = (5));

} else {
var statearr_57821_62155 = state_57812__$1;
(statearr_57821_62155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (15))){
var inst_57763 = (state_57812[(2)]);
var inst_57764 = com.wsscode.async.async_cljs.throw_err(inst_57763);
var state_57812__$1 = state_57812;
var statearr_57822_62157 = state_57812__$1;
(statearr_57822_62157[(2)] = inst_57764);

(statearr_57822_62157[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (21))){
var state_57812__$1 = state_57812;
var statearr_57823_62160 = state_57812__$1;
(statearr_57823_62160[(2)] = null);

(statearr_57823_62160[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (31))){
var inst_57785 = (state_57812[(8)]);
var state_57812__$1 = state_57812;
var statearr_57824_62162 = state_57812__$1;
(statearr_57824_62162[(2)] = inst_57785);

(statearr_57824_62162[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (32))){
var state_57812__$1 = state_57812;
var statearr_57825_62163 = state_57812__$1;
(statearr_57825_62163[(2)] = null);

(statearr_57825_62163[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (33))){
var inst_57802 = (state_57812[(2)]);
var state_57812__$1 = state_57812;
var statearr_57826_62165 = state_57812__$1;
(statearr_57826_62165[(2)] = inst_57802);

(statearr_57826_62165[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (13))){
var inst_57759 = (state_57812[(7)]);
var inst_57766 = com.wsscode.async.async_cljs.promise_QMARK_(inst_57759);
var state_57812__$1 = state_57812;
if(cljs.core.truth_(inst_57766)){
var statearr_57827_62167 = state_57812__$1;
(statearr_57827_62167[(1)] = (16));

} else {
var statearr_57828_62169 = state_57812__$1;
(statearr_57828_62169[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (22))){
var inst_57776 = (state_57812[(2)]);
var state_57812__$1 = state_57812;
var statearr_57829_62171 = state_57812__$1;
(statearr_57829_62171[(2)] = inst_57776);

(statearr_57829_62171[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (29))){
var inst_57804 = (state_57812[(2)]);
var state_57812__$1 = state_57812;
var statearr_57830_62173 = state_57812__$1;
(statearr_57830_62173[(2)] = inst_57804);

(statearr_57830_62173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (6))){
var state_57812__$1 = state_57812;
var statearr_57831_62175 = state_57812__$1;
(statearr_57831_62175[(2)] = batch_QMARK_);

(statearr_57831_62175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (28))){
var state_57812__$1 = state_57812;
var statearr_57832_62177 = state_57812__$1;
(statearr_57832_62177[(1)] = (31));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (25))){
var inst_57806 = (state_57812[(2)]);
var state_57812__$1 = state_57812;
var statearr_57834_62179 = state_57812__$1;
(statearr_57834_62179[(2)] = inst_57806);

(statearr_57834_62179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (17))){
var state_57812__$1 = state_57812;
var statearr_57835_62181 = state_57812__$1;
(statearr_57835_62181[(1)] = (20));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (3))){
var inst_57743 = (state_57812[(2)]);
var state_57812__$1 = state_57812;
var statearr_57837_62185 = state_57812__$1;
(statearr_57837_62185[(2)] = inst_57743);


cljs.core.async.impl.ioc_helpers.process_exception(state_57812__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (12))){
var inst_57759 = (state_57812[(7)]);
var state_57812__$1 = state_57812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57812__$1,(15),inst_57759);
} else {
if((state_val_57813 === (2))){
var inst_57810 = (state_57812[(2)]);
var state_57812__$1 = state_57812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57812__$1,inst_57810);
} else {
if((state_val_57813 === (23))){
var inst_57785 = (state_57812[(8)]);
var state_57812__$1 = state_57812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57812__$1,(26),inst_57785);
} else {
if((state_val_57813 === (19))){
var inst_57770 = (state_57812[(2)]);
var inst_57771 = com.wsscode.async.async_cljs.consumer_pair(inst_57770);
var state_57812__$1 = state_57812;
var statearr_57838_62193 = state_57812__$1;
(statearr_57838_62193[(2)] = inst_57771);

(statearr_57838_62193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (11))){
var inst_57752 = (state_57812[(9)]);
var inst_57758 = (state_57812[(10)]);
var inst_57759 = (state_57812[(7)]);
var inst_57756 = (state_57812[(2)]);
var inst_57757 = com.wsscode.async.async_cljs.throw_err(inst_57756);
var inst_57758__$1 = cljs.core.filterv(inst_57752,inst_57757);
var inst_57759__$1 = com.wsscode.pathom.connect.call_resolver(env__$1,inst_57758__$1);
var inst_57760 = com.wsscode.async.async_cljs.chan_QMARK_(inst_57759__$1);
var state_57812__$1 = (function (){var statearr_57839 = state_57812;
(statearr_57839[(10)] = inst_57758__$1);

(statearr_57839[(7)] = inst_57759__$1);

return statearr_57839;
})();
if(inst_57760){
var statearr_57840_62217 = state_57812__$1;
(statearr_57840_62217[(1)] = (12));

} else {
var statearr_57841_62224 = state_57812__$1;
(statearr_57841_62224[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (9))){
var inst_57785 = (state_57812[(8)]);
var inst_57785__$1 = com.wsscode.pathom.connect.call_resolver(env__$1,e);
var inst_57786 = com.wsscode.async.async_cljs.chan_QMARK_(inst_57785__$1);
var state_57812__$1 = (function (){var statearr_57842 = state_57812;
(statearr_57842[(8)] = inst_57785__$1);

return statearr_57842;
})();
if(inst_57786){
var statearr_57843_62247 = state_57812__$1;
(statearr_57843_62247[(1)] = (23));

} else {
var statearr_57844_62248 = state_57812__$1;
(statearr_57844_62248[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (5))){
var state_57812__$1 = state_57812;
var statearr_57845_62251 = state_57812__$1;
(statearr_57845_62251[(2)] = processing_sequence);

(statearr_57845_62251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (14))){
var inst_57758 = (state_57812[(10)]);
var inst_57780 = (state_57812[(2)]);
var inst_57781 = cljs.core.zipmap(inst_57758,inst_57780);
var inst_57782 = com.wsscode.pathom.connect.cache_batch(env__$1,s,inst_57781);
var inst_57783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57781,e);
var state_57812__$1 = (function (){var statearr_57846 = state_57812;
(statearr_57846[(11)] = inst_57782);

return statearr_57846;
})();
var statearr_57847_62252 = state_57812__$1;
(statearr_57847_62252[(2)] = inst_57783);

(statearr_57847_62252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (26))){
var inst_57789 = (state_57812[(2)]);
var inst_57790 = com.wsscode.async.async_cljs.throw_err(inst_57789);
var state_57812__$1 = state_57812;
var statearr_57848_62255 = state_57812__$1;
(statearr_57848_62255[(2)] = inst_57790);

(statearr_57848_62255[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (16))){
var inst_57759 = (state_57812[(7)]);
var inst_57768 = com.wsscode.async.async_cljs.promise__GT_chan(inst_57759);
var state_57812__$1 = state_57812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57812__$1,(19),inst_57768);
} else {
if((state_val_57813 === (30))){
var inst_57796 = (state_57812[(2)]);
var inst_57797 = com.wsscode.async.async_cljs.consumer_pair(inst_57796);
var state_57812__$1 = state_57812;
var statearr_57849_62262 = state_57812__$1;
(statearr_57849_62262[(2)] = inst_57797);

(statearr_57849_62262[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (10))){
var inst_57808 = (state_57812[(2)]);
var state_57812__$1 = state_57812;
var statearr_57850_62265 = state_57812__$1;
(statearr_57850_62265[(2)] = inst_57808);


cljs.core.async.impl.ioc_helpers.process_exception(state_57812__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (18))){
var inst_57778 = (state_57812[(2)]);
var state_57812__$1 = state_57812;
var statearr_57851_62266 = state_57812__$1;
(statearr_57851_62266[(2)] = inst_57778);

(statearr_57851_62266[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57813 === (8))){
var inst_57752 = (function (){return ((function (state_val_57813,c__47946__auto____$1,input,cache_QMARK_,map__57537,map__57561,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_57559,inst_57585,inst_57586,inst_57587,inst_57558,inst_57583,inst_57535,inst_57560,inst_57584,inst_57593,inst_57589,inst_57590,inst_57591,state_val_57730,c__47946__auto__,k,p,map__57526,map__57526__$1,env,indexes,processing_sequence){
return (function (p1__57523_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__57523_SHARP_,input);
});
;})(state_val_57813,c__47946__auto____$1,input,cache_QMARK_,map__57537,map__57561,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_57559,inst_57585,inst_57586,inst_57587,inst_57558,inst_57583,inst_57535,inst_57560,inst_57584,inst_57593,inst_57589,inst_57590,inst_57591,state_val_57730,c__47946__auto__,k,p,map__57526,map__57526__$1,env,indexes,processing_sequence))
})();
var inst_57753 = (function (){return ((function (inst_57752,state_val_57813,c__47946__auto____$1,input,cache_QMARK_,map__57537,map__57561,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_57559,inst_57585,inst_57586,inst_57587,inst_57558,inst_57583,inst_57535,inst_57560,inst_57584,inst_57593,inst_57589,inst_57590,inst_57591,state_val_57730,c__47946__auto__,k,p,map__57526,map__57526__$1,env,indexes,processing_sequence){
return (function (p1__57522_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__57522_SHARP_,input);
});
;})(inst_57752,state_val_57813,c__47946__auto____$1,input,cache_QMARK_,map__57537,map__57561,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_57559,inst_57585,inst_57586,inst_57587,inst_57558,inst_57583,inst_57535,inst_57560,inst_57584,inst_57593,inst_57589,inst_57590,inst_57591,state_val_57730,c__47946__auto__,k,p,map__57526,map__57526__$1,env,indexes,processing_sequence))
})();
var inst_57754 = com.wsscode.pathom.connect.map_async_serial(inst_57753,processing_sequence);
var state_57812__$1 = (function (){var statearr_57852 = state_57812;
(statearr_57852[(9)] = inst_57752);

return statearr_57852;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57812__$1,(11),inst_57754);
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
});})(c__47946__auto____$1,input,cache_QMARK_,map__57537,map__57561,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_57559,inst_57585,inst_57586,inst_57587,inst_57558,inst_57583,inst_57535,inst_57560,inst_57584,inst_57593,inst_57589,inst_57590,inst_57591,state_val_57730,c__47946__auto__,k,p,map__57526,map__57526__$1,env,indexes,processing_sequence))
;
return ((function (switch__47663__auto__,c__47946__auto____$1,input,cache_QMARK_,map__57537,map__57561,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_57559,inst_57585,inst_57586,inst_57587,inst_57558,inst_57583,inst_57535,inst_57560,inst_57584,inst_57593,inst_57589,inst_57590,inst_57591,state_val_57730,c__47946__auto__,k,p,map__57526,map__57526__$1,env,indexes,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto____0 = (function (){
var statearr_57853 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57853[(0)] = com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto__);

(statearr_57853[(1)] = (1));

return statearr_57853;
});
var com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto____1 = (function (state_57812){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_57812);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e57854){if((e57854 instanceof Object)){
var ex__47667__auto__ = e57854;
var statearr_57855_62285 = state_57812;
(statearr_57855_62285[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57854;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62291 = state_57812;
state_57812 = G__62291;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto__ = function(state_57812){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto____1.call(this,state_57812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto____$1,input,cache_QMARK_,map__57537,map__57561,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_57559,inst_57585,inst_57586,inst_57587,inst_57558,inst_57583,inst_57535,inst_57560,inst_57584,inst_57593,inst_57589,inst_57590,inst_57591,state_val_57730,c__47946__auto__,k,p,map__57526,map__57526__$1,env,indexes,processing_sequence))
})();
var state__47948__auto__ = (function (){var statearr_57856 = f__47947__auto__();
(statearr_57856[(6)] = c__47946__auto____$1);

return statearr_57856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto____$1,input,cache_QMARK_,map__57537,map__57561,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_57559,inst_57585,inst_57586,inst_57587,inst_57558,inst_57583,inst_57535,inst_57560,inst_57584,inst_57593,inst_57589,inst_57590,inst_57591,state_val_57730,c__47946__auto__,k,p,map__57526,map__57526__$1,env,indexes,processing_sequence))
);

return c__47946__auto____$1;
});
;})(input,cache_QMARK_,map__57537,map__57561,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_57559,inst_57585,inst_57586,inst_57587,inst_57558,inst_57583,inst_57535,inst_57560,inst_57584,inst_57593,inst_57589,inst_57590,inst_57591,state_val_57730,c__47946__auto__,k,p,map__57526,map__57526__$1,env,indexes,processing_sequence))
})();
var inst_57593__$1 = com.wsscode.pathom.core.cached_async(inst_57587,inst_57591,inst_57592);
var inst_57594 = com.wsscode.async.async_cljs.chan_QMARK_(inst_57593__$1);
var state_57729__$1 = (function (){var statearr_57857 = state_57729;
(statearr_57857[(19)] = inst_57593__$1);

return statearr_57857;
})();
if(inst_57594){
var statearr_57858_62300 = state_57729__$1;
(statearr_57858_62300[(1)] = (30));

} else {
var statearr_57859_62301 = state_57729__$1;
(statearr_57859_62301[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (1))){
var state_57729__$1 = state_57729;
var statearr_57860_62302 = state_57729__$1;
(statearr_57860_62302[(2)] = null);

(statearr_57860_62302[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (69))){
var inst_57641 = (state_57729[(20)]);
var inst_57686 = cljs.core.contains_QMARK_(inst_57641,k);
var state_57729__$1 = state_57729;
if(inst_57686){
var statearr_57861_62305 = state_57729__$1;
(statearr_57861_62305[(1)] = (72));

} else {
var statearr_57862_62306 = state_57729__$1;
(statearr_57862_62306[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (24))){
var inst_57562 = (state_57729[(21)]);
var inst_57580 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_57562);
var state_57729__$1 = state_57729;
var statearr_57863_62308 = state_57729__$1;
(statearr_57863_62308[(2)] = inst_57580);

(statearr_57863_62308[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (55))){
var inst_57640 = (state_57729[(22)]);
var inst_57657 = (state_57729[(9)]);
var inst_57661 = (state_57729[(7)]);
var inst_57660 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.atom,inst_57657);
var inst_57661__$1 = com.wsscode.pathom.core.join_seq(inst_57640,inst_57660);
var inst_57662 = com.wsscode.async.async_cljs.chan_QMARK_(inst_57661__$1);
var state_57729__$1 = (function (){var statearr_57864 = state_57729;
(statearr_57864[(7)] = inst_57661__$1);

return statearr_57864;
})();
if(inst_57662){
var statearr_57865_62310 = state_57729__$1;
(statearr_57865_62310[(1)] = (58));

} else {
var statearr_57866_62312 = state_57729__$1;
(statearr_57866_62312[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (85))){
var inst_57705 = (state_57729[(2)]);
var inst_57706 = com.wsscode.async.async_cljs.consumer_pair(inst_57705);
var state_57729__$1 = state_57729;
var statearr_57867_62315 = state_57729__$1;
(statearr_57867_62315[(2)] = inst_57706);

(statearr_57867_62315[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (39))){
var state_57729__$1 = state_57729;
var statearr_57868_62316 = state_57729__$1;
(statearr_57868_62316[(2)] = null);

(statearr_57868_62316[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (88))){
var inst_57711 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
var statearr_57869_62317 = state_57729__$1;
(statearr_57869_62317[(2)] = inst_57711);

(statearr_57869_62317[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (46))){
var state_57729__$1 = state_57729;
var statearr_57870_62318 = state_57729__$1;
(statearr_57870_62318[(1)] = (49));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_57729,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_57532 = com.wsscode.pathom.connect.async_pick_resolver(env);
var state_57729__$1 = state_57729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57729__$1,(5),inst_57532);
} else {
if((state_val_57730 === (77))){
var inst_57718 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
var statearr_57872_62322 = state_57729__$1;
(statearr_57872_62322[(2)] = inst_57718);

(statearr_57872_62322[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (54))){
var inst_57640 = (state_57729[(22)]);
var inst_57559 = (state_57729[(10)]);
var inst_57657 = (state_57729[(9)]);
var inst_57585 = (state_57729[(11)]);
var inst_57586 = (state_57729[(12)]);
var inst_57587 = (state_57729[(13)]);
var inst_57558 = (state_57729[(14)]);
var inst_57583 = (state_57729[(15)]);
var inst_57535 = (state_57729[(16)]);
var inst_57560 = (state_57729[(17)]);
var inst_57641 = (state_57729[(20)]);
var inst_57584 = (state_57729[(18)]);
var inst_57654 = (state_57729[(2)]);
var inst_57655 = (function (){var input = inst_57586;
var response = inst_57641;
var cache_QMARK_ = inst_57584;
var map__57537 = inst_57558;
var map__57561 = inst_57583;
var temp__5718__auto__ = inst_57535;
var batch_QMARK_ = inst_57585;
var env__$1 = inst_57587;
var e = inst_57559;
var s = inst_57560;
var resolver = inst_57583;
var env_SINGLEQUOTE_ = inst_57640;
return ((function (input,response,cache_QMARK_,map__57537,map__57561,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,env_SINGLEQUOTE_,inst_57640,inst_57559,inst_57657,inst_57585,inst_57586,inst_57587,inst_57558,inst_57583,inst_57535,inst_57560,inst_57641,inst_57584,inst_57654,state_val_57730,c__47946__auto__,k,p,map__57526,map__57526__$1,env,indexes,processing_sequence){
return (function (p1__57524_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__57524_SHARP_], 0));
});
;})(input,response,cache_QMARK_,map__57537,map__57561,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,env_SINGLEQUOTE_,inst_57640,inst_57559,inst_57657,inst_57585,inst_57586,inst_57587,inst_57558,inst_57583,inst_57535,inst_57560,inst_57641,inst_57584,inst_57654,state_val_57730,c__47946__auto__,k,p,map__57526,map__57526__$1,env,indexes,processing_sequence))
})();
var inst_57656 = com.wsscode.pathom.core.swap_entity_BANG_(inst_57640,inst_57655);
var inst_57657__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57641,k);
var inst_57658 = cljs.core.sequential_QMARK_(inst_57657__$1);
var state_57729__$1 = (function (){var statearr_57873 = state_57729;
(statearr_57873[(23)] = inst_57656);

(statearr_57873[(9)] = inst_57657__$1);

(statearr_57873[(24)] = inst_57654);

return statearr_57873;
})();
if(inst_57658){
var statearr_57874_62335 = state_57729__$1;
(statearr_57874_62335[(1)] = (55));

} else {
var statearr_57875_62336 = state_57729__$1;
(statearr_57875_62336[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (15))){
var inst_57535 = (state_57729[(16)]);
var inst_57555 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_57535);
var state_57729__$1 = state_57729;
var statearr_57876_62339 = state_57729__$1;
(statearr_57876_62339[(2)] = inst_57555);

(statearr_57876_62339[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (48))){
var inst_57627 = (state_57729[(2)]);
var inst_57628 = com.wsscode.async.async_cljs.consumer_pair(inst_57627);
var state_57729__$1 = state_57729;
var statearr_57877_62342 = state_57729__$1;
(statearr_57877_62342[(2)] = inst_57628);

(statearr_57877_62342[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (50))){
var state_57729__$1 = state_57729;
var statearr_57878_62343 = state_57729__$1;
(statearr_57878_62343[(2)] = null);

(statearr_57878_62343[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (75))){
var inst_57694 = (state_57729[(8)]);
var inst_57640 = (state_57729[(22)]);
var inst_57657 = (state_57729[(9)]);
var inst_57693 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_57657);
var inst_57694__$1 = com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(inst_57693,inst_57640);
var inst_57695 = com.wsscode.async.async_cljs.chan_QMARK_(inst_57694__$1);
var state_57729__$1 = (function (){var statearr_57879 = state_57729;
(statearr_57879[(8)] = inst_57694__$1);

return statearr_57879;
})();
if(inst_57695){
var statearr_57880_62347 = state_57729__$1;
(statearr_57880_62347[(1)] = (78));

} else {
var statearr_57881_62348 = state_57729__$1;
(statearr_57881_62348[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (21))){
var state_57729__$1 = state_57729;
var statearr_57882_62349 = state_57729__$1;
(statearr_57882_62349[(2)] = true);

(statearr_57882_62349[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (31))){
var inst_57593 = (state_57729[(19)]);
var inst_57600 = com.wsscode.async.async_cljs.promise_QMARK_(inst_57593);
var state_57729__$1 = state_57729;
if(cljs.core.truth_(inst_57600)){
var statearr_57883_62350 = state_57729__$1;
(statearr_57883_62350[(1)] = (34));

} else {
var statearr_57884_62351 = state_57729__$1;
(statearr_57884_62351[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (32))){
var inst_57614 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
var statearr_57885_62353 = state_57729__$1;
(statearr_57885_62353[(2)] = inst_57614);

(statearr_57885_62353[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (40))){
var inst_57610 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
var statearr_57886_62354 = state_57729__$1;
(statearr_57886_62354[(2)] = inst_57610);

(statearr_57886_62354[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (56))){
var inst_57657 = (state_57729[(9)]);
var inst_57684 = (inst_57657 == null);
var state_57729__$1 = state_57729;
if(cljs.core.truth_(inst_57684)){
var statearr_57887_62359 = state_57729__$1;
(statearr_57887_62359[(1)] = (69));

} else {
var statearr_57888_62360 = state_57729__$1;
(statearr_57888_62360[(1)] = (70));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (33))){
var inst_57597 = (state_57729[(2)]);
var inst_57598 = com.wsscode.async.async_cljs.throw_err(inst_57597);
var state_57729__$1 = state_57729;
var statearr_57889_62367 = state_57729__$1;
(statearr_57889_62367[(2)] = inst_57598);

(statearr_57889_62367[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (13))){
var state_57729__$1 = state_57729;
var statearr_57890_62369 = state_57729__$1;
(statearr_57890_62369[(2)] = false);

(statearr_57890_62369[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (22))){
var state_57729__$1 = state_57729;
var statearr_57891_62371 = state_57729__$1;
(statearr_57891_62371[(2)] = false);

(statearr_57891_62371[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (36))){
var inst_57612 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
var statearr_57892_62374 = state_57729__$1;
(statearr_57892_62374[(2)] = inst_57612);

(statearr_57892_62374[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (41))){
var inst_57616 = (state_57729[(25)]);
var state_57729__$1 = state_57729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57729__$1,(44),inst_57616);
} else {
if((state_val_57730 === (43))){
var inst_57637 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
var statearr_57893_62377 = state_57729__$1;
(statearr_57893_62377[(2)] = inst_57637);

(statearr_57893_62377[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (61))){
var inst_57665 = (state_57729[(2)]);
var inst_57666 = com.wsscode.async.async_cljs.throw_err(inst_57665);
var state_57729__$1 = state_57729;
var statearr_57894_62381 = state_57729__$1;
(statearr_57894_62381[(2)] = inst_57666);

(statearr_57894_62381[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (29))){
var inst_57587 = (state_57729[(13)]);
var inst_57641 = (state_57729[(20)]);
var inst_57639 = (state_57729[(2)]);
var inst_57640 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_57639,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),inst_57587);
var inst_57641__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_57639,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_57642 = (inst_57641__$1 == null);
var inst_57643 = cljs.core.map_QMARK_(inst_57641__$1);
var inst_57644 = ((inst_57642) || (inst_57643));
var inst_57645 = cljs.core.not(inst_57644);
var state_57729__$1 = (function (){var statearr_57895 = state_57729;
(statearr_57895[(22)] = inst_57640);

(statearr_57895[(20)] = inst_57641__$1);

return statearr_57895;
})();
if(inst_57645){
var statearr_57896_62389 = state_57729__$1;
(statearr_57896_62389[(1)] = (52));

} else {
var statearr_57897_62390 = state_57729__$1;
(statearr_57897_62390[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (44))){
var inst_57620 = (state_57729[(2)]);
var inst_57621 = com.wsscode.async.async_cljs.throw_err(inst_57620);
var state_57729__$1 = state_57729;
var statearr_57898_62392 = state_57729__$1;
(statearr_57898_62392[(2)] = inst_57621);

(statearr_57898_62392[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (6))){
var inst_57535 = (state_57729[(16)]);
var inst_57539 = (inst_57535 == null);
var inst_57540 = cljs.core.not(inst_57539);
var state_57729__$1 = state_57729;
if(inst_57540){
var statearr_57899_62396 = state_57729__$1;
(statearr_57899_62396[(1)] = (9));

} else {
var statearr_57900_62397 = state_57729__$1;
(statearr_57900_62397[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (28))){
var inst_57616 = (state_57729[(25)]);
var inst_57559 = (state_57729[(10)]);
var inst_57587 = (state_57729[(13)]);
var inst_57616__$1 = com.wsscode.pathom.connect.call_resolver(inst_57587,inst_57559);
var inst_57617 = com.wsscode.async.async_cljs.chan_QMARK_(inst_57616__$1);
var state_57729__$1 = (function (){var statearr_57901 = state_57729;
(statearr_57901[(25)] = inst_57616__$1);

return statearr_57901;
})();
if(inst_57617){
var statearr_57902_62401 = state_57729__$1;
(statearr_57902_62401[(1)] = (41));

} else {
var statearr_57903_62402 = state_57729__$1;
(statearr_57903_62402[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (64))){
var inst_57680 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
var statearr_57904_62404 = state_57729__$1;
(statearr_57904_62404[(2)] = inst_57680);

(statearr_57904_62404[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (51))){
var inst_57633 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
var statearr_57905_62405 = state_57729__$1;
(statearr_57905_62405[(2)] = inst_57633);

(statearr_57905_62405[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (25))){
var inst_57562 = (state_57729[(21)]);
var state_57729__$1 = state_57729;
var statearr_57906_62415 = state_57729__$1;
(statearr_57906_62415[(2)] = inst_57562);

(statearr_57906_62415[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (34))){
var inst_57593 = (state_57729[(19)]);
var inst_57602 = com.wsscode.async.async_cljs.promise__GT_chan(inst_57593);
var state_57729__$1 = state_57729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57729__$1,(37),inst_57602);
} else {
if((state_val_57730 === (17))){
var inst_57562 = (state_57729[(21)]);
var inst_57558 = (state_57729[(14)]);
var inst_57560 = (state_57729[(17)]);
var inst_57558__$1 = (state_57729[(2)]);
var inst_57559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57558__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var inst_57560__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57558__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var inst_57562__$1 = (com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2(env,inst_57560__$1) : com.wsscode.pathom.connect.resolver_data.call(null,env,inst_57560__$1));
var inst_57564 = (inst_57562__$1 == null);
var inst_57565 = cljs.core.not(inst_57564);
var state_57729__$1 = (function (){var statearr_57907 = state_57729;
(statearr_57907[(21)] = inst_57562__$1);

(statearr_57907[(10)] = inst_57559);

(statearr_57907[(14)] = inst_57558__$1);

(statearr_57907[(17)] = inst_57560__$1);

return statearr_57907;
})();
if(inst_57565){
var statearr_57908_62426 = state_57729__$1;
(statearr_57908_62426[(1)] = (18));

} else {
var statearr_57909_62429 = state_57729__$1;
(statearr_57909_62429[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (3))){
var inst_57528 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
var statearr_57910_62430 = state_57729__$1;
(statearr_57910_62430[(2)] = inst_57528);


cljs.core.async.impl.ioc_helpers.process_exception(state_57729__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (12))){
var state_57729__$1 = state_57729;
var statearr_57911_62431 = state_57729__$1;
(statearr_57911_62431[(2)] = true);

(statearr_57911_62431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (2))){
var inst_57727 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57729__$1,inst_57727);
} else {
if((state_val_57730 === (66))){
var inst_57661 = (state_57729[(7)]);
var state_57729__$1 = state_57729;
var statearr_57912_62432 = state_57729__$1;
(statearr_57912_62432[(2)] = inst_57661);

(statearr_57912_62432[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (23))){
var inst_57575 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
var statearr_57913_62433 = state_57729__$1;
(statearr_57913_62433[(2)] = inst_57575);

(statearr_57913_62433[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (47))){
var inst_57635 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
var statearr_57914_62435 = state_57729__$1;
(statearr_57914_62435[(2)] = inst_57635);

(statearr_57914_62435[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (35))){
var state_57729__$1 = state_57729;
var statearr_57915_62438 = state_57729__$1;
(statearr_57915_62438[(1)] = (38));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (82))){
var inst_57694 = (state_57729[(8)]);
var inst_57703 = com.wsscode.async.async_cljs.promise__GT_chan(inst_57694);
var state_57729__$1 = state_57729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57729__$1,(85),inst_57703);
} else {
if((state_val_57730 === (76))){
var state_57729__$1 = state_57729;
var statearr_57917_62441 = state_57729__$1;
(statearr_57917_62441[(2)] = null);

(statearr_57917_62441[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (19))){
var state_57729__$1 = state_57729;
var statearr_57918_62445 = state_57729__$1;
(statearr_57918_62445[(2)] = false);

(statearr_57918_62445[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (57))){
var inst_57722 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
var statearr_57919_62447 = state_57729__$1;
(statearr_57919_62447[(2)] = inst_57722);

(statearr_57919_62447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (68))){
var inst_57678 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
var statearr_57920_62448 = state_57729__$1;
(statearr_57920_62448[(2)] = inst_57678);

(statearr_57920_62448[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (11))){
var inst_57553 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
if(cljs.core.truth_(inst_57553)){
var statearr_57921_62450 = state_57729__$1;
(statearr_57921_62450[(1)] = (15));

} else {
var statearr_57922_62451 = state_57729__$1;
(statearr_57922_62451[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (9))){
var inst_57535 = (state_57729[(16)]);
var inst_57542 = inst_57535.cljs$lang$protocol_mask$partition0$;
var inst_57543 = (inst_57542 & (64));
var inst_57544 = inst_57535.cljs$core$ISeq$;
var inst_57545 = (cljs.core.PROTOCOL_SENTINEL === inst_57544);
var inst_57546 = ((inst_57543) || (inst_57545));
var state_57729__$1 = state_57729;
if(cljs.core.truth_(inst_57546)){
var statearr_57923_62452 = state_57729__$1;
(statearr_57923_62452[(1)] = (12));

} else {
var statearr_57924_62453 = state_57729__$1;
(statearr_57924_62453[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (5))){
var inst_57535 = (state_57729[(16)]);
var inst_57534 = (state_57729[(2)]);
var inst_57535__$1 = com.wsscode.async.async_cljs.throw_err(inst_57534);
var state_57729__$1 = (function (){var statearr_57925 = state_57729;
(statearr_57925[(16)] = inst_57535__$1);

return statearr_57925;
})();
if(cljs.core.truth_(inst_57535__$1)){
var statearr_57926_62454 = state_57729__$1;
(statearr_57926_62454[(1)] = (6));

} else {
var statearr_57927_62455 = state_57729__$1;
(statearr_57927_62455[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (83))){
var state_57729__$1 = state_57729;
var statearr_57928_62456 = state_57729__$1;
(statearr_57928_62456[(1)] = (86));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (14))){
var inst_57550 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
var statearr_57930_62457 = state_57729__$1;
(statearr_57930_62457[(2)] = inst_57550);

(statearr_57930_62457[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (45))){
var inst_57616 = (state_57729[(25)]);
var inst_57625 = com.wsscode.async.async_cljs.promise__GT_chan(inst_57616);
var state_57729__$1 = state_57729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57729__$1,(48),inst_57625);
} else {
if((state_val_57730 === (53))){
var state_57729__$1 = state_57729;
var statearr_57931_62458 = state_57729__$1;
(statearr_57931_62458[(2)] = null);

(statearr_57931_62458[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (78))){
var inst_57694 = (state_57729[(8)]);
var state_57729__$1 = state_57729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57729__$1,(81),inst_57694);
} else {
if((state_val_57730 === (26))){
var inst_57583 = (state_57729[(15)]);
var inst_57584 = (state_57729[(18)]);
var inst_57583__$1 = (state_57729[(2)]);
var inst_57584__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_57583__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_57585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57583__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_57586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57583__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_57587 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_57583__$1);
var state_57729__$1 = (function (){var statearr_57932 = state_57729;
(statearr_57932[(11)] = inst_57585);

(statearr_57932[(12)] = inst_57586);

(statearr_57932[(13)] = inst_57587);

(statearr_57932[(15)] = inst_57583__$1);

(statearr_57932[(18)] = inst_57584__$1);

return statearr_57932;
})();
if(cljs.core.truth_(inst_57584__$1)){
var statearr_57933_62459 = state_57729__$1;
(statearr_57933_62459[(1)] = (27));

} else {
var statearr_57934_62460 = state_57729__$1;
(statearr_57934_62460[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (16))){
var inst_57535 = (state_57729[(16)]);
var state_57729__$1 = state_57729;
var statearr_57935_62461 = state_57729__$1;
(statearr_57935_62461[(2)] = inst_57535);

(statearr_57935_62461[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (81))){
var inst_57698 = (state_57729[(2)]);
var inst_57699 = com.wsscode.async.async_cljs.throw_err(inst_57698);
var state_57729__$1 = state_57729;
var statearr_57936_62462 = state_57729__$1;
(statearr_57936_62462[(2)] = inst_57699);

(statearr_57936_62462[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (79))){
var inst_57694 = (state_57729[(8)]);
var inst_57701 = com.wsscode.async.async_cljs.promise_QMARK_(inst_57694);
var state_57729__$1 = state_57729;
if(cljs.core.truth_(inst_57701)){
var statearr_57937_62466 = state_57729__$1;
(statearr_57937_62466[(1)] = (82));

} else {
var statearr_57938_62467 = state_57729__$1;
(statearr_57938_62467[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (38))){
var inst_57593 = (state_57729[(19)]);
var state_57729__$1 = state_57729;
var statearr_57939_62468 = state_57729__$1;
(statearr_57939_62468[(2)] = inst_57593);

(statearr_57939_62468[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (87))){
var state_57729__$1 = state_57729;
var statearr_57940_62469 = state_57729__$1;
(statearr_57940_62469[(2)] = null);

(statearr_57940_62469[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (30))){
var inst_57593 = (state_57729[(19)]);
var state_57729__$1 = state_57729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57729__$1,(33),inst_57593);
} else {
if((state_val_57730 === (73))){
var state_57729__$1 = state_57729;
var statearr_57941_62470 = state_57729__$1;
(statearr_57941_62470[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));

(statearr_57941_62470[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (10))){
var state_57729__$1 = state_57729;
var statearr_57942_62471 = state_57729__$1;
(statearr_57942_62471[(2)] = false);

(statearr_57942_62471[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (18))){
var inst_57562 = (state_57729[(21)]);
var inst_57567 = inst_57562.cljs$lang$protocol_mask$partition0$;
var inst_57568 = (inst_57567 & (64));
var inst_57569 = inst_57562.cljs$core$ISeq$;
var inst_57570 = (cljs.core.PROTOCOL_SENTINEL === inst_57569);
var inst_57571 = ((inst_57568) || (inst_57570));
var state_57729__$1 = state_57729;
if(cljs.core.truth_(inst_57571)){
var statearr_57943_62472 = state_57729__$1;
(statearr_57943_62472[(1)] = (21));

} else {
var statearr_57944_62473 = state_57729__$1;
(statearr_57944_62473[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (52))){
var inst_57560 = (state_57729[(17)]);
var inst_57641 = (state_57729[(20)]);
var inst_57647 = [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"response","response",-1068424192)];
var inst_57648 = [inst_57560,inst_57641];
var inst_57649 = cljs.core.PersistentHashMap.fromArrays(inst_57647,inst_57648);
var inst_57650 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Response from reader must be a map.",inst_57649);
var inst_57651 = (function(){throw inst_57650})();
var state_57729__$1 = state_57729;
var statearr_57945_62475 = state_57729__$1;
(statearr_57945_62475[(2)] = inst_57651);

(statearr_57945_62475[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (67))){
var state_57729__$1 = state_57729;
var statearr_57946_62476 = state_57729__$1;
(statearr_57946_62476[(2)] = null);

(statearr_57946_62476[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (71))){
var inst_57720 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
var statearr_57947_62477 = state_57729__$1;
(statearr_57947_62477[(2)] = inst_57720);

(statearr_57947_62477[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (42))){
var inst_57616 = (state_57729[(25)]);
var inst_57623 = com.wsscode.async.async_cljs.promise_QMARK_(inst_57616);
var state_57729__$1 = state_57729;
if(cljs.core.truth_(inst_57623)){
var statearr_57948_62478 = state_57729__$1;
(statearr_57948_62478[(1)] = (45));

} else {
var statearr_57949_62479 = state_57729__$1;
(statearr_57949_62479[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (80))){
var inst_57715 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
var statearr_57950_62480 = state_57729__$1;
(statearr_57950_62480[(2)] = inst_57715);

(statearr_57950_62480[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (37))){
var inst_57604 = (state_57729[(2)]);
var inst_57605 = com.wsscode.async.async_cljs.consumer_pair(inst_57604);
var state_57729__$1 = state_57729;
var statearr_57951_62482 = state_57729__$1;
(statearr_57951_62482[(2)] = inst_57605);

(statearr_57951_62482[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (63))){
var state_57729__$1 = state_57729;
var statearr_57952_62483 = state_57729__$1;
(statearr_57952_62483[(1)] = (66));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (8))){
var inst_57725 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
var statearr_57954_62484 = state_57729__$1;
(statearr_57954_62484[(2)] = inst_57725);


cljs.core.async.impl.ioc_helpers.process_exception(state_57729__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (49))){
var inst_57616 = (state_57729[(25)]);
var state_57729__$1 = state_57729;
var statearr_57955_62487 = state_57729__$1;
(statearr_57955_62487[(2)] = inst_57616);

(statearr_57955_62487[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57730 === (84))){
var inst_57713 = (state_57729[(2)]);
var state_57729__$1 = state_57729;
var statearr_57956_62488 = state_57729__$1;
(statearr_57956_62488[(2)] = inst_57713);

(statearr_57956_62488[(1)] = (80));


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
});})(c__47946__auto__,k,p,map__57526,map__57526__$1,env,indexes,processing_sequence))
;
return ((function (switch__47663__auto__,c__47946__auto__,k,p,map__57526,map__57526__$1,env,indexes,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto____0 = (function (){
var statearr_57957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57957[(0)] = com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto__);

(statearr_57957[(1)] = (1));

return statearr_57957;
});
var com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto____1 = (function (state_57729){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_57729);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e57958){if((e57958 instanceof Object)){
var ex__47667__auto__ = e57958;
var statearr_57959_62493 = state_57729;
(statearr_57959_62493[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57958;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62494 = state_57729;
state_57729 = G__62494;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto__ = function(state_57729){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto____1.call(this,state_57729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$async_reader_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,k,p,map__57526,map__57526__$1,env,indexes,processing_sequence))
})();
var state__47948__auto__ = (function (){var statearr_57960 = f__47947__auto__();
(statearr_57960[(6)] = c__47946__auto__);

return statearr_57960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,k,p,map__57526,map__57526__$1,env,indexes,processing_sequence))
);

return c__47946__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.async_read_call_batch = (function com$wsscode$pathom$connect$async_read_call_batch(p__57963,e,trace_data,input){
var map__57964 = p__57963;
var map__57964__$1 = (((((!((map__57964 == null))))?(((((map__57964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57964):map__57964);
var env = map__57964__$1;
var map__57965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57964__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__57965__$1 = (((((!((map__57965 == null))))?(((((map__57965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57965):map__57965);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57965__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57964__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___62500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___62500,ch__53519__auto__,map__57964,map__57964__$1,env,map__57965,map__57965__$1,sym,processing_sequence){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___62500,ch__53519__auto__,map__57964,map__57964__$1,env,map__57965,map__57965__$1,sym,processing_sequence){
return (function (state_58079){
var state_val_58080 = (state_58079[(1)]);
if((state_val_58080 === (7))){
var inst_58068 = (state_58079[(2)]);
var state_58079__$1 = state_58079;
var statearr_58081_62505 = state_58079__$1;
(statearr_58081_62505[(2)] = inst_58068);


cljs.core.async.impl.ioc_helpers.process_exception(state_58079__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (20))){
var inst_58032 = (state_58079[(7)]);
var inst_58025 = (state_58079[(8)]);
var inst_58037 = (state_58079[(9)]);
var inst_58029 = (state_58079[(2)]);
var inst_58030 = com.wsscode.async.async_cljs.throw_err(inst_58029);
var inst_58031 = cljs.core.filterv(inst_58025,inst_58030);
var inst_58032__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_58031);
var inst_58033 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_58034 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_58032__$1];
var inst_58035 = cljs.core.PersistentHashMap.fromArrays(inst_58033,inst_58034);
var inst_58036 = com.wsscode.pathom.trace.trace(env,inst_58035);
var inst_58037__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_58032__$1);
var inst_58038 = com.wsscode.async.async_cljs.chan_QMARK_(inst_58037__$1);
var state_58079__$1 = (function (){var statearr_58082 = state_58079;
(statearr_58082[(7)] = inst_58032__$1);

(statearr_58082[(9)] = inst_58037__$1);

(statearr_58082[(10)] = inst_58036);

return statearr_58082;
})();
if(inst_58038){
var statearr_58083_62508 = state_58079__$1;
(statearr_58083_62508[(1)] = (21));

} else {
var statearr_58084_62510 = state_58079__$1;
(statearr_58084_62510[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (27))){
var inst_58056 = (state_58079[(2)]);
var state_58079__$1 = state_58079;
var statearr_58085_62513 = state_58079__$1;
(statearr_58085_62513[(2)] = inst_58056);

(statearr_58085_62513[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (1))){
var state_58079__$1 = state_58079;
var statearr_58086_62514 = state_58079__$1;
(statearr_58086_62514[(2)] = null);

(statearr_58086_62514[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (24))){
var inst_58041 = (state_58079[(2)]);
var inst_58042 = com.wsscode.async.async_cljs.throw_err(inst_58041);
var state_58079__$1 = state_58079;
var statearr_58087_62515 = state_58079__$1;
(statearr_58087_62515[(2)] = inst_58042);

(statearr_58087_62515[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_58079,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_57972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_58079__$1 = state_58079;
if(cljs.core.truth_(inst_57972)){
var statearr_58088_62516 = state_58079__$1;
(statearr_58088_62516[(1)] = (5));

} else {
var statearr_58089_62517 = state_58079__$1;
(statearr_58089_62517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (15))){
var inst_58009 = (state_58079[(2)]);
var state_58079__$1 = state_58079;
var statearr_58090_62519 = state_58079__$1;
(statearr_58090_62519[(2)] = inst_58009);

(statearr_58090_62519[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (21))){
var inst_58037 = (state_58079[(9)]);
var state_58079__$1 = state_58079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58079__$1,(24),inst_58037);
} else {
if((state_val_58080 === (31))){
var inst_58054 = (state_58079[(2)]);
var state_58079__$1 = state_58079;
var statearr_58091_62523 = state_58079__$1;
(statearr_58091_62523[(2)] = inst_58054);

(statearr_58091_62523[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (32))){
var inst_58073 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_58079__$1 = state_58079;
var statearr_58092_62524 = state_58079__$1;
(statearr_58092_62524[(2)] = inst_58073);

(statearr_58092_62524[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (33))){
var inst_58070 = (state_58079[(11)]);
var inst_58075 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_58070);
var state_58079__$1 = state_58079;
var statearr_58093_62525 = state_58079__$1;
(statearr_58093_62525[(2)] = inst_58075);

(statearr_58093_62525[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (13))){
var inst_57990 = (state_58079[(12)]);
var inst_57999 = com.wsscode.async.async_cljs.promise__GT_chan(inst_57990);
var state_58079__$1 = state_58079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58079__$1,(16),inst_57999);
} else {
if((state_val_58080 === (22))){
var inst_58037 = (state_58079[(9)]);
var inst_58044 = com.wsscode.async.async_cljs.promise_QMARK_(inst_58037);
var state_58079__$1 = state_58079;
if(cljs.core.truth_(inst_58044)){
var statearr_58094_62527 = state_58079__$1;
(statearr_58094_62527[(1)] = (25));

} else {
var statearr_58095_62528 = state_58079__$1;
(statearr_58095_62528[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (29))){
var inst_58037 = (state_58079[(9)]);
var state_58079__$1 = state_58079;
var statearr_58096_62531 = state_58079__$1;
(statearr_58096_62531[(2)] = inst_58037);

(statearr_58096_62531[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (6))){
var inst_58023 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_58024 = com.wsscode.pathom.trace.trace(env,inst_58023);
var inst_58025 = (function (){var _ = inst_58024;
return ((function (_,inst_58023,inst_58024,state_val_58080,c__47946__auto___62500,ch__53519__auto__,map__57964,map__57964__$1,env,map__57965,map__57965__$1,sym,processing_sequence){
return (function (p1__57962_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__57962_SHARP_,input);
});
;})(_,inst_58023,inst_58024,state_val_58080,c__47946__auto___62500,ch__53519__auto__,map__57964,map__57964__$1,env,map__57965,map__57965__$1,sym,processing_sequence))
})();
var inst_58026 = (function (){var _ = inst_58024;
return ((function (_,inst_58023,inst_58024,inst_58025,state_val_58080,c__47946__auto___62500,ch__53519__auto__,map__57964,map__57964__$1,env,map__57965,map__57965__$1,sym,processing_sequence){
return (function (p1__57961_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__57961_SHARP_,input);
});
;})(_,inst_58023,inst_58024,inst_58025,state_val_58080,c__47946__auto___62500,ch__53519__auto__,map__57964,map__57964__$1,env,map__57965,map__57965__$1,sym,processing_sequence))
})();
var inst_58027 = com.wsscode.pathom.connect.map_async_serial(inst_58026,processing_sequence);
var state_58079__$1 = (function (){var statearr_58097 = state_58079;
(statearr_58097[(8)] = inst_58025);

return statearr_58097;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58079__$1,(20),inst_58027);
} else {
if((state_val_58080 === (28))){
var inst_58048 = (state_58079[(2)]);
var inst_58049 = com.wsscode.async.async_cljs.consumer_pair(inst_58048);
var state_58079__$1 = state_58079;
var statearr_58098_62542 = state_58079__$1;
(statearr_58098_62542[(2)] = inst_58049);

(statearr_58098_62542[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (25))){
var inst_58037 = (state_58079[(9)]);
var inst_58046 = com.wsscode.async.async_cljs.promise__GT_chan(inst_58037);
var state_58079__$1 = state_58079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58079__$1,(28),inst_58046);
} else {
if((state_val_58080 === (34))){
var inst_58077 = (state_58079[(2)]);
var state_58079__$1 = state_58079;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58079__$1,inst_58077);
} else {
if((state_val_58080 === (17))){
var inst_57990 = (state_58079[(12)]);
var state_58079__$1 = state_58079;
var statearr_58099_62548 = state_58079__$1;
(statearr_58099_62548[(2)] = inst_57990);

(statearr_58099_62548[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (3))){
var inst_57968 = (state_58079[(2)]);
var state_58079__$1 = state_58079;
var statearr_58100_62550 = state_58079__$1;
(statearr_58100_62550[(2)] = inst_57968);


cljs.core.async.impl.ioc_helpers.process_exception(state_58079__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (12))){
var inst_57994 = (state_58079[(2)]);
var inst_57995 = com.wsscode.async.async_cljs.throw_err(inst_57994);
var state_58079__$1 = state_58079;
var statearr_58101_62551 = state_58079__$1;
(statearr_58101_62551[(2)] = inst_57995);

(statearr_58101_62551[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (2))){
var inst_58070 = (state_58079[(11)]);
var inst_58070__$1 = (state_58079[(2)]);
var inst_58071 = (inst_58070__$1 == null);
var state_58079__$1 = (function (){var statearr_58102 = state_58079;
(statearr_58102[(11)] = inst_58070__$1);

return statearr_58102;
})();
if(cljs.core.truth_(inst_58071)){
var statearr_58103_62553 = state_58079__$1;
(statearr_58103_62553[(1)] = (32));

} else {
var statearr_58104_62554 = state_58079__$1;
(statearr_58104_62554[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (23))){
var inst_58032 = (state_58079[(7)]);
var inst_58058 = (state_58079[(2)]);
var inst_58059 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_58060 = cljs.core.count(inst_58058);
var inst_58061 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_58060];
var inst_58062 = cljs.core.PersistentHashMap.fromArrays(inst_58059,inst_58061);
var inst_58063 = com.wsscode.pathom.trace.trace(env,inst_58062);
var inst_58064 = cljs.core.zipmap(inst_58032,inst_58058);
var inst_58065 = com.wsscode.pathom.connect.cache_batch(env,sym,inst_58064);
var inst_58066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58064,e);
var state_58079__$1 = (function (){var statearr_58105 = state_58079;
(statearr_58105[(13)] = inst_58063);

(statearr_58105[(14)] = inst_58065);

return statearr_58105;
})();
var statearr_58106_62556 = state_58079__$1;
(statearr_58106_62556[(2)] = inst_58066);

(statearr_58106_62556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (19))){
var inst_58007 = (state_58079[(2)]);
var state_58079__$1 = state_58079;
var statearr_58107_62561 = state_58079__$1;
(statearr_58107_62561[(2)] = inst_58007);

(statearr_58107_62561[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (11))){
var inst_57975 = (state_58079[(15)]);
var inst_57985 = (state_58079[(16)]);
var inst_58011 = (state_58079[(2)]);
var inst_58012 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_58013 = cljs.core.count(inst_58011);
var inst_58014 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_58013];
var inst_58015 = cljs.core.PersistentHashMap.fromArrays(inst_58012,inst_58014);
var inst_58016 = com.wsscode.pathom.trace.trace(env,inst_58015);
var inst_58017 = cljs.core.zipmap(inst_57985,inst_58011);
var inst_58018 = com.wsscode.pathom.connect.cache_batch(env,sym,inst_58017);
var inst_58019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58017,e);
var inst_58020 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_58021 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_57975,inst_58020);
var state_58079__$1 = (function (){var statearr_58108 = state_58079;
(statearr_58108[(17)] = inst_58021);

(statearr_58108[(18)] = inst_58018);

(statearr_58108[(19)] = inst_58016);

return statearr_58108;
})();
var statearr_58109_62565 = state_58079__$1;
(statearr_58109_62565[(2)] = inst_58019);

(statearr_58109_62565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (9))){
var inst_57990 = (state_58079[(12)]);
var state_58079__$1 = state_58079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58079__$1,(12),inst_57990);
} else {
if((state_val_58080 === (5))){
var inst_57975 = (state_58079[(15)]);
var inst_57974 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_57975__$1 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_57974);
var inst_57976 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_57977 = com.wsscode.pathom.trace.trace(env,inst_57976);
var inst_57978 = (function (){var trace_id__27094__auto__ = inst_57975__$1;
var _ = inst_57977;
return ((function (trace_id__27094__auto__,_,inst_57975,inst_57974,inst_57975__$1,inst_57976,inst_57977,state_val_58080,c__47946__auto___62500,ch__53519__auto__,map__57964,map__57964__$1,env,map__57965,map__57965__$1,sym,processing_sequence){
return (function (p1__57962_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__57962_SHARP_,input);
});
;})(trace_id__27094__auto__,_,inst_57975,inst_57974,inst_57975__$1,inst_57976,inst_57977,state_val_58080,c__47946__auto___62500,ch__53519__auto__,map__57964,map__57964__$1,env,map__57965,map__57965__$1,sym,processing_sequence))
})();
var inst_57979 = (function (){var trace_id__27094__auto__ = inst_57975__$1;
var _ = inst_57977;
return ((function (trace_id__27094__auto__,_,inst_57975,inst_57974,inst_57975__$1,inst_57976,inst_57977,inst_57978,state_val_58080,c__47946__auto___62500,ch__53519__auto__,map__57964,map__57964__$1,env,map__57965,map__57965__$1,sym,processing_sequence){
return (function (p1__57961_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__57961_SHARP_,input);
});
;})(trace_id__27094__auto__,_,inst_57975,inst_57974,inst_57975__$1,inst_57976,inst_57977,inst_57978,state_val_58080,c__47946__auto___62500,ch__53519__auto__,map__57964,map__57964__$1,env,map__57965,map__57965__$1,sym,processing_sequence))
})();
var inst_57980 = com.wsscode.pathom.connect.map_async_serial(inst_57979,processing_sequence);
var state_58079__$1 = (function (){var statearr_58110 = state_58079;
(statearr_58110[(15)] = inst_57975__$1);

(statearr_58110[(20)] = inst_57978);

return statearr_58110;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58079__$1,(8),inst_57980);
} else {
if((state_val_58080 === (14))){
var state_58079__$1 = state_58079;
var statearr_58111_62574 = state_58079__$1;
(statearr_58111_62574[(1)] = (17));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (26))){
var state_58079__$1 = state_58079;
var statearr_58113_62575 = state_58079__$1;
(statearr_58113_62575[(1)] = (29));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (16))){
var inst_58001 = (state_58079[(2)]);
var inst_58002 = com.wsscode.async.async_cljs.consumer_pair(inst_58001);
var state_58079__$1 = state_58079;
var statearr_58115_62577 = state_58079__$1;
(statearr_58115_62577[(2)] = inst_58002);

(statearr_58115_62577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (30))){
var state_58079__$1 = state_58079;
var statearr_58116_62579 = state_58079__$1;
(statearr_58116_62579[(2)] = null);

(statearr_58116_62579[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (10))){
var inst_57990 = (state_58079[(12)]);
var inst_57997 = com.wsscode.async.async_cljs.promise_QMARK_(inst_57990);
var state_58079__$1 = state_58079;
if(cljs.core.truth_(inst_57997)){
var statearr_58117_62581 = state_58079__$1;
(statearr_58117_62581[(1)] = (13));

} else {
var statearr_58118_62582 = state_58079__$1;
(statearr_58118_62582[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (18))){
var state_58079__$1 = state_58079;
var statearr_58119_62586 = state_58079__$1;
(statearr_58119_62586[(2)] = null);

(statearr_58119_62586[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58080 === (8))){
var inst_57978 = (state_58079[(20)]);
var inst_57985 = (state_58079[(16)]);
var inst_57990 = (state_58079[(12)]);
var inst_57982 = (state_58079[(2)]);
var inst_57983 = com.wsscode.async.async_cljs.throw_err(inst_57982);
var inst_57984 = cljs.core.filterv(inst_57978,inst_57983);
var inst_57985__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_57984);
var inst_57986 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_57987 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_57985__$1];
var inst_57988 = cljs.core.PersistentHashMap.fromArrays(inst_57986,inst_57987);
var inst_57989 = com.wsscode.pathom.trace.trace(env,inst_57988);
var inst_57990__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_57985__$1);
var inst_57991 = com.wsscode.async.async_cljs.chan_QMARK_(inst_57990__$1);
var state_58079__$1 = (function (){var statearr_58120 = state_58079;
(statearr_58120[(21)] = inst_57989);

(statearr_58120[(16)] = inst_57985__$1);

(statearr_58120[(12)] = inst_57990__$1);

return statearr_58120;
})();
if(inst_57991){
var statearr_58121_62588 = state_58079__$1;
(statearr_58121_62588[(1)] = (9));

} else {
var statearr_58122_62590 = state_58079__$1;
(statearr_58122_62590[(1)] = (10));

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
});})(c__47946__auto___62500,ch__53519__auto__,map__57964,map__57964__$1,env,map__57965,map__57965__$1,sym,processing_sequence))
;
return ((function (switch__47663__auto__,c__47946__auto___62500,ch__53519__auto__,map__57964,map__57964__$1,env,map__57965,map__57965__$1,sym,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__47664__auto____0 = (function (){
var statearr_58123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58123[(0)] = com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__47664__auto__);

(statearr_58123[(1)] = (1));

return statearr_58123;
});
var com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__47664__auto____1 = (function (state_58079){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_58079);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e58124){if((e58124 instanceof Object)){
var ex__47667__auto__ = e58124;
var statearr_58125_62592 = state_58079;
(statearr_58125_62592[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58124;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62595 = state_58079;
state_58079 = G__62595;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__47664__auto__ = function(state_58079){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__47664__auto____1.call(this,state_58079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___62500,ch__53519__auto__,map__57964,map__57964__$1,env,map__57965,map__57965__$1,sym,processing_sequence))
})();
var state__47948__auto__ = (function (){var statearr_58126 = f__47947__auto__();
(statearr_58126[(6)] = c__47946__auto___62500);

return statearr_58126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___62500,ch__53519__auto__,map__57964,map__57964__$1,env,map__57965,map__57965__$1,sym,processing_sequence))
);


return ch__53519__auto__;
});
com.wsscode.pathom.connect.async_read_cache_read = (function com$wsscode$pathom$connect$async_read_cache_read(p__58127,e,trace_data,input){
var map__58128 = p__58127;
var map__58128__$1 = (((((!((map__58128 == null))))?(((((map__58128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58128):map__58128);
var env = map__58128__$1;
var map__58129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58128__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__58129__$1 = (((((!((map__58129 == null))))?(((((map__58129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58129):map__58129);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58129__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58129__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58128__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var params = com.wsscode.pathom.core.params(env);
return com.wsscode.pathom.core.cached_async(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,e,params], null),((function (params,map__58128,map__58128__$1,env,map__58129,map__58129__$1,sym,batch_QMARK_,processing_sequence){
return (function (){
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___62606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___62606,ch__53519__auto__,params,map__58128,map__58128__$1,env,map__58129,map__58129__$1,sym,batch_QMARK_,processing_sequence){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___62606,ch__53519__auto__,params,map__58128,map__58128__$1,env,map__58129,map__58129__$1,sym,batch_QMARK_,processing_sequence){
return (function (state_58203){
var state_val_58204 = (state_58203[(1)]);
if((state_val_58204 === (7))){
var inst_58139 = (state_58203[(2)]);
var state_58203__$1 = state_58203;
if(cljs.core.truth_(inst_58139)){
var statearr_58205_62608 = state_58203__$1;
(statearr_58205_62608[(1)] = (8));

} else {
var statearr_58206_62609 = state_58203__$1;
(statearr_58206_62609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (20))){
var state_58203__$1 = state_58203;
var statearr_58207_62610 = state_58203__$1;
(statearr_58207_62610[(2)] = null);

(statearr_58207_62610[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (27))){
var state_58203__$1 = state_58203;
var statearr_58208_62612 = state_58203__$1;
(statearr_58208_62612[(1)] = (30));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (1))){
var state_58203__$1 = state_58203;
var statearr_58210_62617 = state_58203__$1;
(statearr_58210_62617[(2)] = null);

(statearr_58210_62617[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (24))){
var inst_58185 = (state_58203[(2)]);
var state_58203__$1 = state_58203;
var statearr_58211_62618 = state_58203__$1;
(statearr_58211_62618[(2)] = inst_58185);

(statearr_58211_62618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_58203,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_58203__$1 = state_58203;
if(cljs.core.truth_(batch_QMARK_)){
var statearr_58212_62619 = state_58203__$1;
(statearr_58212_62619[(1)] = (5));

} else {
var statearr_58213_62620 = state_58203__$1;
(statearr_58213_62620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (15))){
var inst_58141 = (state_58203[(7)]);
var inst_58150 = com.wsscode.async.async_cljs.promise__GT_chan(inst_58141);
var state_58203__$1 = state_58203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58203__$1,(18),inst_58150);
} else {
if((state_val_58204 === (21))){
var inst_58158 = (state_58203[(2)]);
var state_58203__$1 = state_58203;
var statearr_58214_62625 = state_58203__$1;
(statearr_58214_62625[(2)] = inst_58158);

(statearr_58214_62625[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (31))){
var state_58203__$1 = state_58203;
var statearr_58215_62626 = state_58203__$1;
(statearr_58215_62626[(2)] = null);

(statearr_58215_62626[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (32))){
var inst_58181 = (state_58203[(2)]);
var state_58203__$1 = state_58203;
var statearr_58216_62627 = state_58203__$1;
(statearr_58216_62627[(2)] = inst_58181);

(statearr_58216_62627[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (33))){
var inst_58187 = (state_58203[(8)]);
var state_58203__$1 = state_58203;
var statearr_58217_62629 = state_58203__$1;
(statearr_58217_62629[(2)] = inst_58187);

(statearr_58217_62629[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (13))){
var inst_58162 = (state_58203[(2)]);
var state_58203__$1 = state_58203;
var statearr_58218_62634 = state_58203__$1;
(statearr_58218_62634[(2)] = inst_58162);

(statearr_58218_62634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (22))){
var inst_58164 = (state_58203[(9)]);
var state_58203__$1 = state_58203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58203__$1,(25),inst_58164);
} else {
if((state_val_58204 === (36))){
var inst_58197 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_58203__$1 = state_58203;
var statearr_58219_62635 = state_58203__$1;
(statearr_58219_62635[(2)] = inst_58197);

(statearr_58219_62635[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (29))){
var inst_58175 = (state_58203[(2)]);
var inst_58176 = com.wsscode.async.async_cljs.consumer_pair(inst_58175);
var state_58203__$1 = state_58203;
var statearr_58220_62637 = state_58203__$1;
(statearr_58220_62637[(2)] = inst_58176);

(statearr_58220_62637[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (6))){
var state_58203__$1 = state_58203;
var statearr_58221_62640 = state_58203__$1;
(statearr_58221_62640[(2)] = batch_QMARK_);

(statearr_58221_62640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (28))){
var inst_58183 = (state_58203[(2)]);
var state_58203__$1 = state_58203;
var statearr_58222_62641 = state_58203__$1;
(statearr_58222_62641[(2)] = inst_58183);

(statearr_58222_62641[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (25))){
var inst_58168 = (state_58203[(2)]);
var inst_58169 = com.wsscode.async.async_cljs.throw_err(inst_58168);
var state_58203__$1 = state_58203;
var statearr_58223_62643 = state_58203__$1;
(statearr_58223_62643[(2)] = inst_58169);

(statearr_58223_62643[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (34))){
var inst_58190 = cljs.core.PersistentHashMap.EMPTY;
var state_58203__$1 = state_58203;
var statearr_58224_62645 = state_58203__$1;
(statearr_58224_62645[(2)] = inst_58190);

(statearr_58224_62645[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (17))){
var inst_58160 = (state_58203[(2)]);
var state_58203__$1 = state_58203;
var statearr_58225_62646 = state_58203__$1;
(statearr_58225_62646[(2)] = inst_58160);

(statearr_58225_62646[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (3))){
var inst_58132 = (state_58203[(2)]);
var state_58203__$1 = state_58203;
var statearr_58226_62649 = state_58203__$1;
(statearr_58226_62649[(2)] = inst_58132);


cljs.core.async.impl.ioc_helpers.process_exception(state_58203__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (12))){
var inst_58141 = (state_58203[(7)]);
var inst_58148 = com.wsscode.async.async_cljs.promise_QMARK_(inst_58141);
var state_58203__$1 = state_58203;
if(cljs.core.truth_(inst_58148)){
var statearr_58227_62652 = state_58203__$1;
(statearr_58227_62652[(1)] = (15));

} else {
var statearr_58228_62654 = state_58203__$1;
(statearr_58228_62654[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (2))){
var inst_58194 = (state_58203[(10)]);
var inst_58194__$1 = (state_58203[(2)]);
var inst_58195 = (inst_58194__$1 == null);
var state_58203__$1 = (function (){var statearr_58229 = state_58203;
(statearr_58229[(10)] = inst_58194__$1);

return statearr_58229;
})();
if(cljs.core.truth_(inst_58195)){
var statearr_58230_62656 = state_58203__$1;
(statearr_58230_62656[(1)] = (36));

} else {
var statearr_58231_62658 = state_58203__$1;
(statearr_58231_62658[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (23))){
var inst_58164 = (state_58203[(9)]);
var inst_58171 = com.wsscode.async.async_cljs.promise_QMARK_(inst_58164);
var state_58203__$1 = state_58203;
if(cljs.core.truth_(inst_58171)){
var statearr_58232_62659 = state_58203__$1;
(statearr_58232_62659[(1)] = (26));

} else {
var statearr_58233_62661 = state_58203__$1;
(statearr_58233_62661[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (35))){
var inst_58192 = (state_58203[(2)]);
var state_58203__$1 = state_58203;
var statearr_58234_62662 = state_58203__$1;
(statearr_58234_62662[(2)] = inst_58192);


cljs.core.async.impl.ioc_helpers.process_exception(state_58203__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (19))){
var inst_58141 = (state_58203[(7)]);
var state_58203__$1 = state_58203;
var statearr_58235_62664 = state_58203__$1;
(statearr_58235_62664[(2)] = inst_58141);

(statearr_58235_62664[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (11))){
var inst_58141 = (state_58203[(7)]);
var state_58203__$1 = state_58203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58203__$1,(14),inst_58141);
} else {
if((state_val_58204 === (9))){
var inst_58164 = (state_58203[(9)]);
var inst_58164__$1 = com.wsscode.pathom.connect.call_resolver(env,e);
var inst_58165 = com.wsscode.async.async_cljs.chan_QMARK_(inst_58164__$1);
var state_58203__$1 = (function (){var statearr_58236 = state_58203;
(statearr_58236[(9)] = inst_58164__$1);

return statearr_58236;
})();
if(inst_58165){
var statearr_58237_62669 = state_58203__$1;
(statearr_58237_62669[(1)] = (22));

} else {
var statearr_58238_62670 = state_58203__$1;
(statearr_58238_62670[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (5))){
var state_58203__$1 = state_58203;
var statearr_58239_62671 = state_58203__$1;
(statearr_58239_62671[(2)] = processing_sequence);

(statearr_58239_62671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (14))){
var inst_58145 = (state_58203[(2)]);
var inst_58146 = com.wsscode.async.async_cljs.throw_err(inst_58145);
var state_58203__$1 = state_58203;
var statearr_58240_62672 = state_58203__$1;
(statearr_58240_62672[(2)] = inst_58146);

(statearr_58240_62672[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (26))){
var inst_58164 = (state_58203[(9)]);
var inst_58173 = com.wsscode.async.async_cljs.promise__GT_chan(inst_58164);
var state_58203__$1 = state_58203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58203__$1,(29),inst_58173);
} else {
if((state_val_58204 === (16))){
var state_58203__$1 = state_58203;
var statearr_58241_62676 = state_58203__$1;
(statearr_58241_62676[(1)] = (19));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (38))){
var inst_58201 = (state_58203[(2)]);
var state_58203__$1 = state_58203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58203__$1,inst_58201);
} else {
if((state_val_58204 === (30))){
var inst_58164 = (state_58203[(9)]);
var state_58203__$1 = state_58203;
var statearr_58243_62678 = state_58203__$1;
(statearr_58243_62678[(2)] = inst_58164);

(statearr_58243_62678[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (10))){
var inst_58187 = (state_58203[(8)]);
var inst_58187__$1 = (state_58203[(2)]);
var state_58203__$1 = (function (){var statearr_58244 = state_58203;
(statearr_58244[(8)] = inst_58187__$1);

return statearr_58244;
})();
if(cljs.core.truth_(inst_58187__$1)){
var statearr_58245_62679 = state_58203__$1;
(statearr_58245_62679[(1)] = (33));

} else {
var statearr_58246_62682 = state_58203__$1;
(statearr_58246_62682[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (18))){
var inst_58152 = (state_58203[(2)]);
var inst_58153 = com.wsscode.async.async_cljs.consumer_pair(inst_58152);
var state_58203__$1 = state_58203;
var statearr_58247_62685 = state_58203__$1;
(statearr_58247_62685[(2)] = inst_58153);

(statearr_58247_62685[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (37))){
var inst_58194 = (state_58203[(10)]);
var inst_58199 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_58194);
var state_58203__$1 = state_58203;
var statearr_58248_62686 = state_58203__$1;
(statearr_58248_62686[(2)] = inst_58199);

(statearr_58248_62686[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58204 === (8))){
var inst_58141 = (state_58203[(7)]);
var inst_58141__$1 = com.wsscode.pathom.connect.async_read_call_batch(env,e,trace_data,input);
var inst_58142 = com.wsscode.async.async_cljs.chan_QMARK_(inst_58141__$1);
var state_58203__$1 = (function (){var statearr_58249 = state_58203;
(statearr_58249[(7)] = inst_58141__$1);

return statearr_58249;
})();
if(inst_58142){
var statearr_58250_62692 = state_58203__$1;
(statearr_58250_62692[(1)] = (11));

} else {
var statearr_58251_62693 = state_58203__$1;
(statearr_58251_62693[(1)] = (12));

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
});})(c__47946__auto___62606,ch__53519__auto__,params,map__58128,map__58128__$1,env,map__58129,map__58129__$1,sym,batch_QMARK_,processing_sequence))
;
return ((function (switch__47663__auto__,c__47946__auto___62606,ch__53519__auto__,params,map__58128,map__58128__$1,env,map__58129,map__58129__$1,sym,batch_QMARK_,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__47664__auto____0 = (function (){
var statearr_58252 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58252[(0)] = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__47664__auto__);

(statearr_58252[(1)] = (1));

return statearr_58252;
});
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__47664__auto____1 = (function (state_58203){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_58203);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e58253){if((e58253 instanceof Object)){
var ex__47667__auto__ = e58253;
var statearr_58254_62695 = state_58203;
(statearr_58254_62695[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58253;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62698 = state_58203;
state_58203 = G__62698;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__47664__auto__ = function(state_58203){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__47664__auto____1.call(this,state_58203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___62606,ch__53519__auto__,params,map__58128,map__58128__$1,env,map__58129,map__58129__$1,sym,batch_QMARK_,processing_sequence))
})();
var state__47948__auto__ = (function (){var statearr_58255 = f__47947__auto__();
(statearr_58255[(6)] = c__47946__auto___62606);

return statearr_58255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___62606,ch__53519__auto__,params,map__58128,map__58128__$1,env,map__58129,map__58129__$1,sym,batch_QMARK_,processing_sequence))
);


return ch__53519__auto__;
});})(params,map__58128,map__58128__$1,env,map__58129,map__58129__$1,sym,batch_QMARK_,processing_sequence))
);
});
/**
 * Works in the same way `reader2`, but supports async values (core.async channels)
 * on resolver return.
 */
com.wsscode.pathom.connect.async_reader2 = (function com$wsscode$pathom$connect$async_reader2(p__58258){
var map__58259 = p__58258;
var map__58259__$1 = (((((!((map__58259 == null))))?(((((map__58259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58259):map__58259);
var env = map__58259__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58259__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58259__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var temp__5718__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__58261 = temp__5718__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58261,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58261,(1),null);
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,vec__58261,plan,out,temp__5718__auto__,map__58259,map__58259__$1,env,indexes,max_resolver_weight){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,vec__58261,plan,out,temp__5718__auto__,map__58259,map__58259__$1,env,indexes,max_resolver_weight){
return (function (state_58537){
var state_val_58538 = (state_58537[(1)]);
if((state_val_58538 === (65))){
var inst_58426 = (state_58537[(2)]);
var inst_58427 = com.wsscode.async.async_cljs.throw_err(inst_58426);
var state_58537__$1 = state_58537;
var statearr_58539_62708 = state_58537__$1;
(statearr_58539_62708[(2)] = inst_58427);

(statearr_58539_62708[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (70))){
var inst_58422 = (state_58537[(7)]);
var state_58537__$1 = state_58537;
var statearr_58540_62709 = state_58537__$1;
(statearr_58540_62709[(2)] = inst_58422);

(statearr_58540_62709[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (62))){
var inst_58422 = (state_58537[(7)]);
var state_58537__$1 = state_58537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58537__$1,(65),inst_58422);
} else {
if((state_val_58538 === (74))){
var inst_58290 = (state_58537[(8)]);
var inst_58461 = cljs.core.seq(inst_58290);
var state_58537__$1 = state_58537;
if(inst_58461){
var statearr_58542_62713 = state_58537__$1;
(statearr_58542_62713[(1)] = (76));

} else {
var statearr_58543_62717 = state_58537__$1;
(statearr_58543_62717[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (7))){
var inst_58301 = (state_58537[(9)]);
var inst_58289 = (state_58537[(10)]);
var inst_58297 = (state_58537[(11)]);
var inst_58296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58289,(0),null);
var inst_58297__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58289,(1),null);
var inst_58298 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_58299 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),inst_58297__$1];
var inst_58300 = (new cljs.core.PersistentVector(null,2,(5),inst_58298,inst_58299,null));
var inst_58301__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_58300);
var inst_58303 = (inst_58301__$1 == null);
var inst_58304 = cljs.core.not(inst_58303);
var state_58537__$1 = (function (){var statearr_58544 = state_58537;
(statearr_58544[(12)] = inst_58296);

(statearr_58544[(9)] = inst_58301__$1);

(statearr_58544[(11)] = inst_58297__$1);

return statearr_58544;
})();
if(inst_58304){
var statearr_58545_62720 = state_58537__$1;
(statearr_58545_62720[(1)] = (10));

} else {
var statearr_58546_62721 = state_58537__$1;
(statearr_58546_62721[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (59))){
var inst_58283 = (state_58537[(13)]);
var inst_58290 = (state_58537[(8)]);
var inst_58412 = (state_58537[(14)]);
var inst_58282 = (state_58537[(15)]);
var inst_58419 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_58283,inst_58412);
var tmp58541 = inst_58282;
var inst_58281 = inst_58290;
var inst_58282__$1 = tmp58541;
var inst_58283__$1 = inst_58419;
var state_58537__$1 = (function (){var statearr_58547 = state_58537;
(statearr_58547[(16)] = inst_58281);

(statearr_58547[(13)] = inst_58283__$1);

(statearr_58547[(15)] = inst_58282__$1);

return statearr_58547;
})();
var statearr_58548_62724 = state_58537__$1;
(statearr_58548_62724[(2)] = null);

(statearr_58548_62724[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (86))){
var inst_58482 = (state_58537[(2)]);
var inst_58483 = com.wsscode.async.async_cljs.consumer_pair(inst_58482);
var state_58537__$1 = state_58537;
var statearr_58549_62727 = state_58537__$1;
(statearr_58549_62727[(2)] = inst_58483);

(statearr_58549_62727[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (20))){
var inst_58323 = (state_58537[(17)]);
var state_58537__$1 = state_58537;
if(cljs.core.truth_(inst_58323)){
var statearr_58550_62729 = state_58537__$1;
(statearr_58550_62729[(1)] = (22));

} else {
var statearr_58551_62730 = state_58537__$1;
(statearr_58551_62730[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (72))){
var inst_58439 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58552_62731 = state_58537__$1;
(statearr_58552_62731[(2)] = inst_58439);

(statearr_58552_62731[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (58))){
var inst_58496 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58553_62732 = state_58537__$1;
(statearr_58553_62732[(2)] = inst_58496);

(statearr_58553_62732[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (60))){
var inst_58422 = (state_58537[(7)]);
var inst_58401 = (state_58537[(18)]);
var inst_58422__$1 = com.wsscode.pathom.core.map_reader(inst_58401);
var inst_58423 = com.wsscode.async.async_cljs.chan_QMARK_(inst_58422__$1);
var state_58537__$1 = (function (){var statearr_58554 = state_58537;
(statearr_58554[(7)] = inst_58422__$1);

return statearr_58554;
})();
if(inst_58423){
var statearr_58555_62736 = state_58537__$1;
(statearr_58555_62736[(1)] = (62));

} else {
var statearr_58556_62737 = state_58537__$1;
(statearr_58556_62737[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (27))){
var inst_58361 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58557_62738 = state_58537__$1;
(statearr_58557_62738[(2)] = inst_58361);

(statearr_58557_62738[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (1))){
var state_58537__$1 = state_58537;
var statearr_58558_62740 = state_58537__$1;
(statearr_58558_62740[(2)] = null);

(statearr_58558_62740[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (69))){
var inst_58433 = (state_58537[(2)]);
var inst_58434 = com.wsscode.async.async_cljs.consumer_pair(inst_58433);
var state_58537__$1 = state_58537;
var statearr_58559_62741 = state_58537__$1;
(statearr_58559_62741[(2)] = inst_58434);

(statearr_58559_62741[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (24))){
var inst_58390 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58560_62744 = state_58537__$1;
(statearr_58560_62744[(2)] = inst_58390);

(statearr_58560_62744[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (55))){
var inst_58528 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58561_62747 = state_58537__$1;
(statearr_58561_62747[(2)] = inst_58528);

(statearr_58561_62747[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (85))){
var inst_58490 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58562_62748 = state_58537__$1;
(statearr_58562_62748[(2)] = inst_58490);

(statearr_58562_62748[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (39))){
var inst_58364 = (state_58537[(19)]);
var state_58537__$1 = state_58537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58537__$1,(42),inst_58364);
} else {
if((state_val_58538 === (88))){
var state_58537__$1 = state_58537;
var statearr_58563_62749 = state_58537__$1;
(statearr_58563_62749[(2)] = null);

(statearr_58563_62749[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (46))){
var inst_58375 = (state_58537[(2)]);
var inst_58376 = com.wsscode.async.async_cljs.consumer_pair(inst_58375);
var state_58537__$1 = state_58537;
var statearr_58564_62753 = state_58537__$1;
(statearr_58564_62753[(2)] = inst_58376);

(statearr_58564_62753[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_58537,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_58268 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_58269 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_58268);
var inst_58277 = cljs.core.seq(plan);
var inst_58278 = cljs.core.first(inst_58277);
var inst_58279 = cljs.core.next(inst_58277);
var inst_58280 = cljs.core.PersistentHashMap.EMPTY;
var inst_58281 = plan;
var inst_58282 = inst_58280;
var inst_58283 = out;
var state_58537__$1 = (function (){var statearr_58565 = state_58537;
(statearr_58565[(16)] = inst_58281);

(statearr_58565[(20)] = inst_58279);

(statearr_58565[(21)] = inst_58278);

(statearr_58565[(22)] = inst_58269);

(statearr_58565[(13)] = inst_58283);

(statearr_58565[(15)] = inst_58282);

return statearr_58565;
})();
var statearr_58566_62755 = state_58537__$1;
(statearr_58566_62755[(2)] = null);

(statearr_58566_62755[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (77))){
var state_58537__$1 = state_58537;
var statearr_58567_62758 = state_58537__$1;
(statearr_58567_62758[(2)] = null);

(statearr_58567_62758[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (95))){
var inst_58523 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58568_62761 = state_58537__$1;
(statearr_58568_62761[(2)] = inst_58523);

(statearr_58568_62761[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (54))){
var state_58537__$1 = state_58537;
var statearr_58569_62762 = state_58537__$1;
(statearr_58569_62762[(1)] = (90));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (92))){
var inst_58526 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58571_62763 = state_58537__$1;
(statearr_58571_62763[(2)] = inst_58526);

(statearr_58571_62763[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (15))){
var inst_58314 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58572_62767 = state_58537__$1;
(statearr_58572_62767[(2)] = inst_58314);

(statearr_58572_62767[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (48))){
var state_58537__$1 = state_58537;
var statearr_58573_62768 = state_58537__$1;
(statearr_58573_62768[(2)] = null);

(statearr_58573_62768[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (50))){
var inst_58392 = (state_58537[(23)]);
var state_58537__$1 = state_58537;
var statearr_58574_62769 = state_58537__$1;
(statearr_58574_62769[(2)] = inst_58392);

(statearr_58574_62769[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (75))){
var inst_58494 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58575_62770 = state_58537__$1;
(statearr_58575_62770[(2)] = inst_58494);

(statearr_58575_62770[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (21))){
var inst_58392 = (state_58537[(23)]);
var inst_58392__$1 = (state_58537[(2)]);
var state_58537__$1 = (function (){var statearr_58576 = state_58537;
(statearr_58576[(23)] = inst_58392__$1);

return statearr_58576;
})();
if(cljs.core.truth_(inst_58392__$1)){
var statearr_58577_62772 = state_58537__$1;
(statearr_58577_62772[(1)] = (50));

} else {
var statearr_58578_62773 = state_58537__$1;
(statearr_58578_62773[(1)] = (51));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (31))){
var inst_58359 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58579_62776 = state_58537__$1;
(statearr_58579_62776[(2)] = inst_58359);

(statearr_58579_62776[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (32))){
var inst_58351 = (state_58537[(2)]);
var inst_58352 = com.wsscode.async.async_cljs.consumer_pair(inst_58351);
var state_58537__$1 = state_58537;
var statearr_58580_62778 = state_58537__$1;
(statearr_58580_62778[(2)] = inst_58352);

(statearr_58580_62778[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (40))){
var inst_58364 = (state_58537[(19)]);
var inst_58371 = com.wsscode.async.async_cljs.promise_QMARK_(inst_58364);
var state_58537__$1 = state_58537;
if(cljs.core.truth_(inst_58371)){
var statearr_58581_62789 = state_58537__$1;
(statearr_58581_62789[(1)] = (43));

} else {
var statearr_58582_62790 = state_58537__$1;
(statearr_58582_62790[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (91))){
var state_58537__$1 = state_58537;
var statearr_58583_62791 = state_58537__$1;
(statearr_58583_62791[(2)] = null);

(statearr_58583_62791[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (56))){
var inst_58269 = (state_58537[(22)]);
var inst_58290 = (state_58537[(8)]);
var inst_58297 = (state_58537[(11)]);
var inst_58325 = (state_58537[(24)]);
var inst_58401 = (state_58537[(18)]);
var inst_58412 = com.wsscode.pathom.connect.output__GT_provides(inst_58325);
var inst_58413 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_58414 = [new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),inst_58269,inst_58297];
var inst_58415 = cljs.core.PersistentHashMap.fromArrays(inst_58413,inst_58414);
var inst_58416 = com.wsscode.pathom.trace.trace(inst_58401,inst_58415);
var inst_58417 = cljs.core.seq(inst_58290);
var state_58537__$1 = (function (){var statearr_58584 = state_58537;
(statearr_58584[(25)] = inst_58416);

(statearr_58584[(14)] = inst_58412);

return statearr_58584;
})();
if(inst_58417){
var statearr_58585_62795 = state_58537__$1;
(statearr_58585_62795[(1)] = (59));

} else {
var statearr_58586_62796 = state_58537__$1;
(statearr_58586_62796[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (33))){
var inst_58340 = (state_58537[(26)]);
var state_58537__$1 = state_58537;
var statearr_58587_62800 = state_58537__$1;
(statearr_58587_62800[(2)] = inst_58340);

(statearr_58587_62800[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (13))){
var state_58537__$1 = state_58537;
var statearr_58588_62801 = state_58537__$1;
(statearr_58588_62801[(2)] = true);

(statearr_58588_62801[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (22))){
var inst_58324 = (state_58537[(27)]);
var inst_58328 = (state_58537[(28)]);
var inst_58326 = (state_58537[(29)]);
var inst_58340 = (state_58537[(26)]);
var inst_58331 = (state_58537[(30)]);
var inst_58340__$1 = com.wsscode.pathom.connect.async_read_cache_read(inst_58326,inst_58328,inst_58331,inst_58324);
var inst_58341 = com.wsscode.async.async_cljs.chan_QMARK_(inst_58340__$1);
var state_58537__$1 = (function (){var statearr_58589 = state_58537;
(statearr_58589[(26)] = inst_58340__$1);

return statearr_58589;
})();
if(inst_58341){
var statearr_58590_62804 = state_58537__$1;
(statearr_58590_62804[(1)] = (25));

} else {
var statearr_58591_62806 = state_58537__$1;
(statearr_58591_62806[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (90))){
var inst_58397 = (state_58537[(31)]);
var inst_58398 = (state_58537[(32)]);
var inst_58503 = (state_58537[(33)]);
var inst_58499 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_58500 = [inst_58397];
var inst_58501 = cljs.core.PersistentHashMap.fromArrays(inst_58499,inst_58500);
var inst_58502 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_58501);
var inst_58503__$1 = (inst_58398.cljs$core$IFn$_invoke$arity$1 ? inst_58398.cljs$core$IFn$_invoke$arity$1(inst_58502) : inst_58398.call(null,inst_58502));
var state_58537__$1 = (function (){var statearr_58592 = state_58537;
(statearr_58592[(33)] = inst_58503__$1);

return statearr_58592;
})();
if(cljs.core.truth_(inst_58503__$1)){
var statearr_58593_62807 = state_58537__$1;
(statearr_58593_62807[(1)] = (93));

} else {
var statearr_58594_62808 = state_58537__$1;
(statearr_58594_62808[(1)] = (94));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (36))){
var inst_58364 = (state_58537[(19)]);
var inst_58328 = (state_58537[(28)]);
var inst_58326 = (state_58537[(29)]);
var inst_58364__$1 = com.wsscode.pathom.connect.call_resolver(inst_58326,inst_58328);
var inst_58365 = com.wsscode.async.async_cljs.chan_QMARK_(inst_58364__$1);
var state_58537__$1 = (function (){var statearr_58595 = state_58537;
(statearr_58595[(19)] = inst_58364__$1);

return statearr_58595;
})();
if(inst_58365){
var statearr_58596_62809 = state_58537__$1;
(statearr_58596_62809[(1)] = (39));

} else {
var statearr_58597_62811 = state_58537__$1;
(statearr_58597_62811[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (41))){
var inst_58385 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58598_62812 = state_58537__$1;
(statearr_58598_62812[(2)] = inst_58385);

(statearr_58598_62812[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (89))){
var inst_58488 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58599_62816 = state_58537__$1;
(statearr_58599_62816[(2)] = inst_58488);

(statearr_58599_62816[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (43))){
var inst_58364 = (state_58537[(19)]);
var inst_58373 = com.wsscode.async.async_cljs.promise__GT_chan(inst_58364);
var state_58537__$1 = state_58537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58537__$1,(46),inst_58373);
} else {
if((state_val_58538 === (61))){
var inst_58445 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58600_62817 = state_58537__$1;
(statearr_58600_62817[(2)] = inst_58445);

(statearr_58600_62817[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (29))){
var inst_58340 = (state_58537[(26)]);
var inst_58349 = com.wsscode.async.async_cljs.promise__GT_chan(inst_58340);
var state_58537__$1 = state_58537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58537__$1,(32),inst_58349);
} else {
if((state_val_58538 === (44))){
var state_58537__$1 = state_58537;
var statearr_58601_62818 = state_58537__$1;
(statearr_58601_62818[(1)] = (47));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (93))){
var inst_58503 = (state_58537[(33)]);
var inst_58508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58503,(0),null);
var inst_58509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58503,(1),null);
var inst_58510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58503,(2),null);
var inst_58281 = inst_58508;
var inst_58282 = inst_58509;
var inst_58283 = inst_58510;
var state_58537__$1 = (function (){var statearr_58603 = state_58537;
(statearr_58603[(16)] = inst_58281);

(statearr_58603[(13)] = inst_58283);

(statearr_58603[(15)] = inst_58282);

return statearr_58603;
})();
var statearr_58604_62819 = state_58537__$1;
(statearr_58604_62819[(2)] = null);

(statearr_58604_62819[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (6))){
var inst_58533 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58605_62820 = state_58537__$1;
(statearr_58605_62820[(2)] = inst_58533);


cljs.core.async.impl.ioc_helpers.process_exception(state_58537__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (28))){
var inst_58344 = (state_58537[(2)]);
var inst_58345 = com.wsscode.async.async_cljs.throw_err(inst_58344);
var state_58537__$1 = state_58537;
var statearr_58606_62821 = state_58537__$1;
(statearr_58606_62821[(2)] = inst_58345);

(statearr_58606_62821[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (64))){
var inst_58443 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58607_62822 = state_58537__$1;
(statearr_58607_62822[(2)] = inst_58443);

(statearr_58607_62822[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (51))){
var inst_58395 = cljs.core.PersistentHashMap.EMPTY;
var state_58537__$1 = state_58537;
var statearr_58608_62825 = state_58537__$1;
(statearr_58608_62825[(2)] = inst_58395);

(statearr_58608_62825[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (25))){
var inst_58340 = (state_58537[(26)]);
var state_58537__$1 = state_58537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58537__$1,(28),inst_58340);
} else {
if((state_val_58538 === (34))){
var state_58537__$1 = state_58537;
var statearr_58609_62827 = state_58537__$1;
(statearr_58609_62827[(2)] = null);

(statearr_58609_62827[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (17))){
var inst_58301 = (state_58537[(9)]);
var state_58537__$1 = state_58537;
var statearr_58610_62838 = state_58537__$1;
(statearr_58610_62838[(2)] = inst_58301);

(statearr_58610_62838[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (3))){
var inst_58264 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58611_62839 = state_58537__$1;
(statearr_58611_62839[(2)] = inst_58264);


cljs.core.async.impl.ioc_helpers.process_exception(state_58537__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (12))){
var inst_58317 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
if(cljs.core.truth_(inst_58317)){
var statearr_58612_62842 = state_58537__$1;
(statearr_58612_62842[(1)] = (16));

} else {
var statearr_58613_62843 = state_58537__$1;
(statearr_58613_62843[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (2))){
var inst_58535 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58537__$1,inst_58535);
} else {
if((state_val_58538 === (66))){
var inst_58422 = (state_58537[(7)]);
var inst_58431 = com.wsscode.async.async_cljs.promise__GT_chan(inst_58422);
var state_58537__$1 = state_58537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58537__$1,(69),inst_58431);
} else {
if((state_val_58538 === (23))){
var state_58537__$1 = state_58537;
var statearr_58614_62844 = state_58537__$1;
(statearr_58614_62844[(1)] = (36));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (47))){
var inst_58364 = (state_58537[(19)]);
var state_58537__$1 = state_58537;
var statearr_58616_62845 = state_58537__$1;
(statearr_58616_62845[(2)] = inst_58364);

(statearr_58616_62845[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (35))){
var inst_58357 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58617_62846 = state_58537__$1;
(statearr_58617_62846[(2)] = inst_58357);

(statearr_58617_62846[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (82))){
var inst_58475 = (state_58537[(2)]);
var inst_58476 = com.wsscode.async.async_cljs.throw_err(inst_58475);
var state_58537__$1 = state_58537;
var statearr_58618_62848 = state_58537__$1;
(statearr_58618_62848[(2)] = inst_58476);

(statearr_58618_62848[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (76))){
var inst_58402 = (state_58537[(34)]);
var inst_58296 = (state_58537[(12)]);
var inst_58463 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_58464 = [inst_58402,inst_58296];
var inst_58465 = cljs.core.PersistentHashMap.fromArrays(inst_58463,inst_58464);
var inst_58466 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_58465);
var inst_58467 = (function(){throw inst_58466})();
var state_58537__$1 = state_58537;
var statearr_58619_62851 = state_58537__$1;
(statearr_58619_62851[(2)] = inst_58467);

(statearr_58619_62851[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (19))){
var inst_58269 = (state_58537[(22)]);
var inst_58327 = (state_58537[(35)]);
var inst_58334 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_58335 = [inst_58269];
var inst_58336 = (new cljs.core.PersistentVector(null,1,(5),inst_58334,inst_58335,null));
var inst_58337 = cljs.core.select_keys(inst_58327,inst_58336);
var state_58537__$1 = state_58537;
var statearr_58620_62854 = state_58537__$1;
(statearr_58620_62854[(2)] = inst_58337);

(statearr_58620_62854[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (57))){
var inst_58402 = (state_58537[(34)]);
var inst_58451 = (state_58537[(36)]);
var inst_58398 = (state_58537[(32)]);
var inst_58296 = (state_58537[(12)]);
var inst_58447 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_58448 = [inst_58402,inst_58296];
var inst_58449 = cljs.core.PersistentHashMap.fromArrays(inst_58447,inst_58448);
var inst_58450 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_58449);
var inst_58451__$1 = (inst_58398.cljs$core$IFn$_invoke$arity$1 ? inst_58398.cljs$core$IFn$_invoke$arity$1(inst_58450) : inst_58398.call(null,inst_58450));
var state_58537__$1 = (function (){var statearr_58621 = state_58537;
(statearr_58621[(36)] = inst_58451__$1);

return statearr_58621;
})();
if(cljs.core.truth_(inst_58451__$1)){
var statearr_58622_62860 = state_58537__$1;
(statearr_58622_62860[(1)] = (73));

} else {
var statearr_58623_62861 = state_58537__$1;
(statearr_58623_62861[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (68))){
var inst_58441 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58624_62862 = state_58537__$1;
(statearr_58624_62862[(2)] = inst_58441);

(statearr_58624_62862[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (11))){
var state_58537__$1 = state_58537;
var statearr_58625_62863 = state_58537__$1;
(statearr_58625_62863[(2)] = false);

(statearr_58625_62863[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (9))){
var inst_58531 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58626_62865 = state_58537__$1;
(statearr_58626_62865[(2)] = inst_58531);

(statearr_58626_62865[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (5))){
var inst_58281 = (state_58537[(16)]);
var inst_58289 = (state_58537[(10)]);
var inst_58288 = cljs.core.seq(inst_58281);
var inst_58289__$1 = cljs.core.first(inst_58288);
var inst_58290 = cljs.core.next(inst_58288);
var state_58537__$1 = (function (){var statearr_58627 = state_58537;
(statearr_58627[(8)] = inst_58290);

(statearr_58627[(10)] = inst_58289__$1);

return statearr_58627;
})();
if(cljs.core.truth_(inst_58289__$1)){
var statearr_58628_62866 = state_58537__$1;
(statearr_58628_62866[(1)] = (7));

} else {
var statearr_58629_62867 = state_58537__$1;
(statearr_58629_62867[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (83))){
var inst_58471 = (state_58537[(37)]);
var inst_58480 = com.wsscode.async.async_cljs.promise__GT_chan(inst_58471);
var state_58537__$1 = state_58537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58537__$1,(86),inst_58480);
} else {
if((state_val_58538 === (14))){
var state_58537__$1 = state_58537;
var statearr_58630_62868 = state_58537__$1;
(statearr_58630_62868[(2)] = false);

(statearr_58630_62868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (45))){
var inst_58383 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58631_62871 = state_58537__$1;
(statearr_58631_62871[(2)] = inst_58383);

(statearr_58631_62871[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (53))){
var inst_58402 = (state_58537[(34)]);
var inst_58324 = (state_58537[(27)]);
var inst_58397 = (state_58537[(31)]);
var inst_58281 = (state_58537[(16)]);
var inst_58398 = (state_58537[(32)]);
var inst_58328 = (state_58537[(28)]);
var inst_58279 = (state_58537[(20)]);
var inst_58278 = (state_58537[(21)]);
var inst_58269 = (state_58537[(22)]);
var inst_58296 = (state_58537[(12)]);
var inst_58323 = (state_58537[(17)]);
var inst_58283 = (state_58537[(13)]);
var inst_58290 = (state_58537[(8)]);
var inst_58326 = (state_58537[(29)]);
var inst_58331 = (state_58537[(30)]);
var inst_58289 = (state_58537[(10)]);
var inst_58322 = (state_58537[(38)]);
var inst_58297 = (state_58537[(11)]);
var inst_58325 = (state_58537[(24)]);
var inst_58327 = (state_58537[(35)]);
var inst_58282 = (state_58537[(15)]);
var inst_58401 = (state_58537[(18)]);
var inst_58401__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_58397,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),inst_58326);
var inst_58402__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_58397,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_58403 = (function (){var input = inst_58324;
var vec__58274 = plan;
var step = inst_58289;
var entity = inst_58327;
var key_SINGLEQUOTE_ = inst_58296;
var response = inst_58402__$1;
var map__58295 = inst_58322;
var vec__58292 = inst_58289;
var cache_QMARK_ = inst_58323;
var first__58276 = inst_58278;
var out_left = inst_58283;
var first__58287 = inst_58289;
var key = inst_58269;
var failed_resolvers = inst_58282;
var G__58273 = inst_58281;
var output = inst_58325;
var env__$1 = inst_58326;
var e = inst_58328;
var resolver_sym = inst_58297;
var trace_data = inst_58331;
var resolver = inst_58322;
var vec__58285 = inst_58281;
var replan = inst_58398;
var env_SINGLEQUOTE_ = inst_58401__$1;
var tail = inst_58290;
var seq__58275 = inst_58279;
var seq__58286 = inst_58290;
return ((function (input,vec__58274,step,entity,key_SINGLEQUOTE_,response,map__58295,vec__58292,cache_QMARK_,first__58276,out_left,first__58287,key,failed_resolvers,G__58273,output,env__$1,e,resolver_sym,trace_data,resolver,vec__58285,replan,env_SINGLEQUOTE_,tail,seq__58275,seq__58286,inst_58402,inst_58324,inst_58397,inst_58281,inst_58398,inst_58328,inst_58279,inst_58278,inst_58269,inst_58296,inst_58323,inst_58283,inst_58290,inst_58326,inst_58331,inst_58289,inst_58322,inst_58297,inst_58325,inst_58327,inst_58282,inst_58401,inst_58401__$1,inst_58402__$1,state_val_58538,c__47946__auto__,vec__58261,plan,out,temp__5718__auto__,map__58259,map__58259__$1,env,indexes,max_resolver_weight){
return (function (p1__58257_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__58257_SHARP_], 0));
});
;})(input,vec__58274,step,entity,key_SINGLEQUOTE_,response,map__58295,vec__58292,cache_QMARK_,first__58276,out_left,first__58287,key,failed_resolvers,G__58273,output,env__$1,e,resolver_sym,trace_data,resolver,vec__58285,replan,env_SINGLEQUOTE_,tail,seq__58275,seq__58286,inst_58402,inst_58324,inst_58397,inst_58281,inst_58398,inst_58328,inst_58279,inst_58278,inst_58269,inst_58296,inst_58323,inst_58283,inst_58290,inst_58326,inst_58331,inst_58289,inst_58322,inst_58297,inst_58325,inst_58327,inst_58282,inst_58401,inst_58401__$1,inst_58402__$1,state_val_58538,c__47946__auto__,vec__58261,plan,out,temp__5718__auto__,map__58259,map__58259__$1,env,indexes,max_resolver_weight))
})();
var inst_58404 = com.wsscode.pathom.core.swap_entity_BANG_(inst_58401__$1,inst_58403);
var inst_58406 = cljs.core.contains_QMARK_(inst_58402__$1,inst_58296);
var inst_58407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58402__$1,inst_58296);
var inst_58408 = (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(inst_58407) : com.wsscode.pathom.core.break_values.call(null,inst_58407));
var inst_58409 = cljs.core.not(inst_58408);
var inst_58410 = ((inst_58406) && (inst_58409));
var state_58537__$1 = (function (){var statearr_58632 = state_58537;
(statearr_58632[(34)] = inst_58402__$1);

(statearr_58632[(39)] = inst_58404);

(statearr_58632[(18)] = inst_58401__$1);

return statearr_58632;
})();
if(cljs.core.truth_(inst_58410)){
var statearr_58633_62877 = state_58537__$1;
(statearr_58633_62877[(1)] = (56));

} else {
var statearr_58634_62878 = state_58537__$1;
(statearr_58634_62878[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (78))){
var inst_58471 = (state_58537[(37)]);
var inst_58401 = (state_58537[(18)]);
var inst_58470 = (state_58537[(2)]);
var inst_58471__$1 = com.wsscode.pathom.core.map_reader(inst_58401);
var inst_58472 = com.wsscode.async.async_cljs.chan_QMARK_(inst_58471__$1);
var state_58537__$1 = (function (){var statearr_58635 = state_58537;
(statearr_58635[(37)] = inst_58471__$1);

(statearr_58635[(40)] = inst_58470);

return statearr_58635;
})();
if(inst_58472){
var statearr_58636_62879 = state_58537__$1;
(statearr_58636_62879[(1)] = (79));

} else {
var statearr_58637_62880 = state_58537__$1;
(statearr_58637_62880[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (26))){
var inst_58340 = (state_58537[(26)]);
var inst_58347 = com.wsscode.async.async_cljs.promise_QMARK_(inst_58340);
var state_58537__$1 = state_58537;
if(cljs.core.truth_(inst_58347)){
var statearr_58638_62882 = state_58537__$1;
(statearr_58638_62882[(1)] = (29));

} else {
var statearr_58639_62883 = state_58537__$1;
(statearr_58639_62883[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (16))){
var inst_58301 = (state_58537[(9)]);
var inst_58319 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_58301);
var state_58537__$1 = state_58537;
var statearr_58640_62884 = state_58537__$1;
(statearr_58640_62884[(2)] = inst_58319);

(statearr_58640_62884[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (81))){
var inst_58492 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58641_62886 = state_58537__$1;
(statearr_58641_62886[(2)] = inst_58492);

(statearr_58641_62886[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (79))){
var inst_58471 = (state_58537[(37)]);
var state_58537__$1 = state_58537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58537__$1,(82),inst_58471);
} else {
if((state_val_58538 === (38))){
var inst_58388 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58642_62887 = state_58537__$1;
(statearr_58642_62887[(2)] = inst_58388);

(statearr_58642_62887[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (87))){
var inst_58471 = (state_58537[(37)]);
var state_58537__$1 = state_58537;
var statearr_58643_62888 = state_58537__$1;
(statearr_58643_62888[(2)] = inst_58471);

(statearr_58643_62888[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (30))){
var state_58537__$1 = state_58537;
var statearr_58644_62889 = state_58537__$1;
(statearr_58644_62889[(1)] = (33));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (73))){
var inst_58451 = (state_58537[(36)]);
var inst_58456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58451,(0),null);
var inst_58457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58451,(1),null);
var inst_58458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58451,(2),null);
var inst_58281 = inst_58456;
var inst_58282 = inst_58457;
var inst_58283 = inst_58458;
var state_58537__$1 = (function (){var statearr_58646 = state_58537;
(statearr_58646[(16)] = inst_58281);

(statearr_58646[(13)] = inst_58283);

(statearr_58646[(15)] = inst_58282);

return statearr_58646;
})();
var statearr_58647_62891 = state_58537__$1;
(statearr_58647_62891[(2)] = null);

(statearr_58647_62891[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (10))){
var inst_58301 = (state_58537[(9)]);
var inst_58306 = inst_58301.cljs$lang$protocol_mask$partition0$;
var inst_58307 = (inst_58306 & (64));
var inst_58308 = inst_58301.cljs$core$ISeq$;
var inst_58309 = (cljs.core.PROTOCOL_SENTINEL === inst_58308);
var inst_58310 = ((inst_58307) || (inst_58309));
var state_58537__$1 = state_58537;
if(cljs.core.truth_(inst_58310)){
var statearr_58648_62892 = state_58537__$1;
(statearr_58648_62892[(1)] = (13));

} else {
var statearr_58649_62893 = state_58537__$1;
(statearr_58649_62893[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (18))){
var inst_58324 = (state_58537[(27)]);
var inst_58328 = (state_58537[(28)]);
var inst_58269 = (state_58537[(22)]);
var inst_58296 = (state_58537[(12)]);
var inst_58326 = (state_58537[(29)]);
var inst_58322 = (state_58537[(38)]);
var inst_58297 = (state_58537[(11)]);
var inst_58327 = (state_58537[(35)]);
var inst_58322__$1 = (state_58537[(2)]);
var inst_58323 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_58322__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_58324__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58322__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_58325 = com.wsscode.pathom.connect.resolver__GT_output(env,inst_58297);
var inst_58326__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_58322__$1);
var inst_58327__$1 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_58326__$1);
var inst_58328__$1 = cljs.core.select_keys(inst_58327__$1,inst_58324__$1);
var inst_58329 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_58330 = [inst_58269,inst_58297,inst_58328__$1];
var inst_58331 = cljs.core.PersistentHashMap.fromArrays(inst_58329,inst_58330);
var inst_58332 = cljs.core.contains_QMARK_(inst_58327__$1,inst_58296);
var state_58537__$1 = (function (){var statearr_58650 = state_58537;
(statearr_58650[(27)] = inst_58324__$1);

(statearr_58650[(28)] = inst_58328__$1);

(statearr_58650[(17)] = inst_58323);

(statearr_58650[(29)] = inst_58326__$1);

(statearr_58650[(30)] = inst_58331);

(statearr_58650[(38)] = inst_58322__$1);

(statearr_58650[(24)] = inst_58325);

(statearr_58650[(35)] = inst_58327__$1);

return statearr_58650;
})();
if(inst_58332){
var statearr_58651_62895 = state_58537__$1;
(statearr_58651_62895[(1)] = (19));

} else {
var statearr_58652_62896 = state_58537__$1;
(statearr_58652_62896[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (52))){
var inst_58324 = (state_58537[(27)]);
var inst_58397 = (state_58537[(31)]);
var inst_58281 = (state_58537[(16)]);
var inst_58328 = (state_58537[(28)]);
var inst_58279 = (state_58537[(20)]);
var inst_58278 = (state_58537[(21)]);
var inst_58269 = (state_58537[(22)]);
var inst_58296 = (state_58537[(12)]);
var inst_58323 = (state_58537[(17)]);
var inst_58283 = (state_58537[(13)]);
var inst_58290 = (state_58537[(8)]);
var inst_58326 = (state_58537[(29)]);
var inst_58331 = (state_58537[(30)]);
var inst_58289 = (state_58537[(10)]);
var inst_58322 = (state_58537[(38)]);
var inst_58297 = (state_58537[(11)]);
var inst_58325 = (state_58537[(24)]);
var inst_58327 = (state_58537[(35)]);
var inst_58282 = (state_58537[(15)]);
var inst_58397__$1 = (state_58537[(2)]);
var inst_58398 = (function (){var input = inst_58324;
var vec__58274 = plan;
var step = inst_58289;
var entity = inst_58327;
var key_SINGLEQUOTE_ = inst_58296;
var response = inst_58397__$1;
var map__58295 = inst_58322;
var vec__58292 = inst_58289;
var cache_QMARK_ = inst_58323;
var first__58276 = inst_58278;
var out_left = inst_58283;
var first__58287 = inst_58289;
var key = inst_58269;
var failed_resolvers = inst_58282;
var G__58273 = inst_58281;
var output = inst_58325;
var env__$1 = inst_58326;
var e = inst_58328;
var resolver_sym = inst_58297;
var trace_data = inst_58331;
var resolver = inst_58322;
var vec__58285 = inst_58281;
var tail = inst_58290;
var seq__58275 = inst_58279;
var seq__58286 = inst_58290;
return ((function (input,vec__58274,step,entity,key_SINGLEQUOTE_,response,map__58295,vec__58292,cache_QMARK_,first__58276,out_left,first__58287,key,failed_resolvers,G__58273,output,env__$1,e,resolver_sym,trace_data,resolver,vec__58285,tail,seq__58275,seq__58286,inst_58324,inst_58397,inst_58281,inst_58328,inst_58279,inst_58278,inst_58269,inst_58296,inst_58323,inst_58283,inst_58290,inst_58326,inst_58331,inst_58289,inst_58322,inst_58297,inst_58325,inst_58327,inst_58282,inst_58397__$1,state_val_58538,c__47946__auto__,vec__58261,plan,out,temp__5718__auto__,map__58259,map__58259__$1,env,indexes,max_resolver_weight){
return (function (error){
var failed_resolvers__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers,resolver_sym,error);
com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$1,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (failed_resolvers__$1,input,vec__58274,step,entity,key_SINGLEQUOTE_,response,map__58295,vec__58292,cache_QMARK_,first__58276,out_left,first__58287,key,failed_resolvers,G__58273,output,env__$1,e,resolver_sym,trace_data,resolver,vec__58285,tail,seq__58275,seq__58286,inst_58324,inst_58397,inst_58281,inst_58328,inst_58279,inst_58278,inst_58269,inst_58296,inst_58323,inst_58283,inst_58290,inst_58326,inst_58331,inst_58289,inst_58322,inst_58297,inst_58325,inst_58327,inst_58282,inst_58397__$1,state_val_58538,c__47946__auto__,vec__58261,plan,out,temp__5718__auto__,map__58259,map__58259__$1,env,indexes,max_resolver_weight){
return (function (p1__58256_SHARP_){
var x__4222__auto__ = ((function (){var or__4131__auto__ = p1__58256_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() * (2));
var y__4223__auto__ = max_resolver_weight;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});})(failed_resolvers__$1,input,vec__58274,step,entity,key_SINGLEQUOTE_,response,map__58295,vec__58292,cache_QMARK_,first__58276,out_left,first__58287,key,failed_resolvers,G__58273,output,env__$1,e,resolver_sym,trace_data,resolver,vec__58285,tail,seq__58275,seq__58286,inst_58324,inst_58397,inst_58281,inst_58328,inst_58279,inst_58278,inst_58269,inst_58296,inst_58323,inst_58283,inst_58290,inst_58326,inst_58331,inst_58289,inst_58322,inst_58297,inst_58325,inst_58327,inst_58282,inst_58397__$1,state_val_58538,c__47946__auto__,vec__58261,plan,out,temp__5718__auto__,map__58259,map__58259__$1,env,indexes,max_resolver_weight))
], 0));

var temp__5718__auto____$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$1,failed_resolvers__$1);
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__58653 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58653,(0),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58653,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan__$1,failed_resolvers__$1,out_SINGLEQUOTE_], null);
} else {
return null;
}
});
;})(input,vec__58274,step,entity,key_SINGLEQUOTE_,response,map__58295,vec__58292,cache_QMARK_,first__58276,out_left,first__58287,key,failed_resolvers,G__58273,output,env__$1,e,resolver_sym,trace_data,resolver,vec__58285,tail,seq__58275,seq__58286,inst_58324,inst_58397,inst_58281,inst_58328,inst_58279,inst_58278,inst_58269,inst_58296,inst_58323,inst_58283,inst_58290,inst_58326,inst_58331,inst_58289,inst_58322,inst_58297,inst_58325,inst_58327,inst_58282,inst_58397__$1,state_val_58538,c__47946__auto__,vec__58261,plan,out,temp__5718__auto__,map__58259,map__58259__$1,env,indexes,max_resolver_weight))
})();
var inst_58399 = cljs.core.map_QMARK_(inst_58397__$1);
var state_58537__$1 = (function (){var statearr_58656 = state_58537;
(statearr_58656[(31)] = inst_58397__$1);

(statearr_58656[(32)] = inst_58398);

return statearr_58656;
})();
if(inst_58399){
var statearr_58657_62902 = state_58537__$1;
(statearr_58657_62902[(1)] = (53));

} else {
var statearr_58658_62903 = state_58537__$1;
(statearr_58658_62903[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (67))){
var state_58537__$1 = state_58537;
var statearr_58659_62906 = state_58537__$1;
(statearr_58659_62906[(1)] = (70));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (71))){
var state_58537__$1 = state_58537;
var statearr_58661_62908 = state_58537__$1;
(statearr_58661_62908[(2)] = null);

(statearr_58661_62908[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (42))){
var inst_58368 = (state_58537[(2)]);
var inst_58369 = com.wsscode.async.async_cljs.throw_err(inst_58368);
var state_58537__$1 = state_58537;
var statearr_58662_62910 = state_58537__$1;
(statearr_58662_62910[(2)] = inst_58369);

(statearr_58662_62910[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (80))){
var inst_58471 = (state_58537[(37)]);
var inst_58478 = com.wsscode.async.async_cljs.promise_QMARK_(inst_58471);
var state_58537__$1 = state_58537;
if(cljs.core.truth_(inst_58478)){
var statearr_58663_62911 = state_58537__$1;
(statearr_58663_62911[(1)] = (83));

} else {
var statearr_58664_62912 = state_58537__$1;
(statearr_58664_62912[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (37))){
var state_58537__$1 = state_58537;
var statearr_58665_62913 = state_58537__$1;
(statearr_58665_62913[(2)] = null);

(statearr_58665_62913[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (63))){
var inst_58422 = (state_58537[(7)]);
var inst_58429 = com.wsscode.async.async_cljs.promise_QMARK_(inst_58422);
var state_58537__$1 = state_58537;
if(cljs.core.truth_(inst_58429)){
var statearr_58666_62914 = state_58537__$1;
(statearr_58666_62914[(1)] = (66));

} else {
var statearr_58667_62915 = state_58537__$1;
(statearr_58667_62915[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (94))){
var inst_58397 = (state_58537[(31)]);
var inst_58269 = (state_58537[(22)]);
var inst_58326 = (state_58537[(29)]);
var inst_58297 = (state_58537[(11)]);
var inst_58513 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_58514 = [new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),inst_58269,inst_58297,inst_58397];
var inst_58515 = cljs.core.PersistentHashMap.fromArrays(inst_58513,inst_58514);
var inst_58516 = com.wsscode.pathom.trace.trace(inst_58326,inst_58515);
var inst_58517 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_58518 = [inst_58397];
var inst_58519 = cljs.core.PersistentHashMap.fromArrays(inst_58517,inst_58518);
var inst_58520 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_58519);
var inst_58521 = (function(){throw inst_58520})();
var state_58537__$1 = (function (){var statearr_58668 = state_58537;
(statearr_58668[(41)] = inst_58516);

return statearr_58668;
})();
var statearr_58669_62920 = state_58537__$1;
(statearr_58669_62920[(2)] = inst_58521);

(statearr_58669_62920[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (8))){
var state_58537__$1 = state_58537;
var statearr_58670_62922 = state_58537__$1;
(statearr_58670_62922[(2)] = null);

(statearr_58670_62922[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (49))){
var inst_58381 = (state_58537[(2)]);
var state_58537__$1 = state_58537;
var statearr_58671_62926 = state_58537__$1;
(statearr_58671_62926[(2)] = inst_58381);

(statearr_58671_62926[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58538 === (84))){
var state_58537__$1 = state_58537;
var statearr_58672_62927 = state_58537__$1;
(statearr_58672_62927[(1)] = (87));



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
});})(c__47946__auto__,vec__58261,plan,out,temp__5718__auto__,map__58259,map__58259__$1,env,indexes,max_resolver_weight))
;
return ((function (switch__47663__auto__,c__47946__auto__,vec__58261,plan,out,temp__5718__auto__,map__58259,map__58259__$1,env,indexes,max_resolver_weight){
return (function() {
var com$wsscode$pathom$connect$async_reader2_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$async_reader2_$_state_machine__47664__auto____0 = (function (){
var statearr_58674 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58674[(0)] = com$wsscode$pathom$connect$async_reader2_$_state_machine__47664__auto__);

(statearr_58674[(1)] = (1));

return statearr_58674;
});
var com$wsscode$pathom$connect$async_reader2_$_state_machine__47664__auto____1 = (function (state_58537){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_58537);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e58675){if((e58675 instanceof Object)){
var ex__47667__auto__ = e58675;
var statearr_58676_62932 = state_58537;
(statearr_58676_62932[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58675;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62933 = state_58537;
state_58537 = G__62933;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader2_$_state_machine__47664__auto__ = function(state_58537){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader2_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader2_$_state_machine__47664__auto____1.call(this,state_58537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader2_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader2_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$async_reader2_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader2_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$async_reader2_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,vec__58261,plan,out,temp__5718__auto__,map__58259,map__58259__$1,env,indexes,max_resolver_weight))
})();
var state__47948__auto__ = (function (){var statearr_58677 = f__47947__auto__();
(statearr_58677[(6)] = c__47946__auto__);

return statearr_58677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,vec__58261,plan,out,temp__5718__auto__,map__58259,map__58259__$1,env,indexes,max_resolver_weight))
);

return c__47946__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.reader3_node_log_BANG_ = (function com$wsscode$pathom$connect$reader3_node_log_BANG_(p__58678,p__58679,event){
var map__58680 = p__58678;
var map__58680__$1 = (((((!((map__58680 == null))))?(((((map__58680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58680):map__58680);
var env = map__58680__$1;
var run_plan_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58680__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","run-plan*","com.wsscode.pathom.connect/run-plan*",-2140918000));
var map__58681 = p__58679;
var map__58681__$1 = (((((!((map__58681 == null))))?(((((map__58681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58681):map__58681);
var node_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58681__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","node-id","com.wsscode.pathom.connect.planner/node-id",1016027450));
if(cljs.core.truth_(run_plan_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(run_plan_STAR_,com.wsscode.pathom.connect.planner.add_node_log,node_id,event);
} else {
}

return env;
});
com.wsscode.pathom.connect.reader3_run_next_node = (function com$wsscode$pathom$connect$reader3_run_next_node(env,plan,p__58684){
var map__58685 = p__58684;
var map__58685__$1 = (((((!((map__58685 == null))))?(((((map__58685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58685):map__58685);
var run_next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-next","com.wsscode.pathom.connect.planner/run-next",932482163));
if(cljs.core.truth_(run_next)){
var G__58687 = env;
var G__58688 = plan;
var G__58689 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,run_next);
return (com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(G__58687,G__58688,G__58689) : com.wsscode.pathom.connect.reader3_run_node.call(null,G__58687,G__58688,G__58689));
} else {
return null;
}
});
com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_ = (function com$wsscode$pathom$connect$reader3_all_requires_ready_QMARK_(env,p__58691){
var map__58692 = p__58691;
var map__58692__$1 = (((((!((map__58692 == null))))?(((((map__58692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58692):map__58692);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58692__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","requires","com.wsscode.pathom.connect.planner/requires",-2118404289));
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
return cljs.core.every_QMARK_(((function (entity,map__58692,map__58692__$1,requires){
return (function (p1__58690_SHARP_){
return cljs.core.contains_QMARK_(entity,p1__58690_SHARP_);
});})(entity,map__58692,map__58692__$1,requires))
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
return (function (p1__58694_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$1,p1__58694_SHARP_], 0));
});})(env_SINGLEQUOTE_,response__$1))
);
} else {
return com.wsscode.pathom.connect.reader3_report_invalid_response(env,sym,response);
}
});
/**
 * Call a run graph node resolver and execute it.
 */
com.wsscode.pathom.connect.reader3_run_resolver_node = (function com$wsscode$pathom$connect$reader3_run_resolver_node(p__58695,plan,p__58696){
var map__58697 = p__58695;
var map__58697__$1 = (((((!((map__58697 == null))))?(((((map__58697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58697):map__58697);
var env = map__58697__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58697__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var async_parser_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58697__$1,new cljs.core.Keyword("com.wsscode.pathom.core","async-parser?","com.wsscode.pathom.core/async-parser?",920199905));
var map__58698 = p__58696;
var map__58698__$1 = (((((!((map__58698 == null))))?(((((map__58698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58698):map__58698);
var node = map__58698__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58698__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58698__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","input","com.wsscode.pathom.connect.planner/input",713704915));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58698__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","params","com.wsscode.pathom.connect.planner/params",600636577));
if(com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_(env,node)){
com.wsscode.pathom.connect.reader3_node_log_BANG_(env,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","skip-node-requires-ready","com.wsscode.pathom.connect/skip-node-requires-ready",-1999300692)], null));

return com.wsscode.pathom.connect.reader3_run_next_node(env,plan,node);
} else {
var input_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(input));
var map__58701 = (function (){var G__58702 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),sym], null));
if(cljs.core.seq(input)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__58702,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),input_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect.planner","input","com.wsscode.pathom.connect.planner/input",713704915),input], 0));
} else {
return G__58702;
}
})();
var map__58701__$1 = (((((!((map__58701 == null))))?(((((map__58701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58701):map__58701);
var resolver = map__58701__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58701__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var env__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect.planner","node","com.wsscode.pathom.connect.planner/node",754110552),node], 0)),new cljs.core.Keyword(null,"ast","ast",-860334068),cljs.core.assoc,new cljs.core.Keyword(null,"params","params",710516235),params);
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env__$1);
var e = cljs.core.select_keys(entity,input_SINGLEQUOTE_);
var trace_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),e], null);
var response = (cljs.core.truth_(cache_QMARK_)?(cljs.core.truth_(async_parser_QMARK_)?com.wsscode.pathom.connect.async_read_cache_read(env__$1,e,trace_data,input_SINGLEQUOTE_):(function (){try{var r = com.wsscode.pathom.connect.serial_cache_resolver_call(env__$1,e);
com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-success","com.wsscode.pathom.connect/node-resolver-success",1463092150),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),e,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-response","com.wsscode.pathom.connect/resolver-response",480860817),r], null));

return r;
}catch (e58704){var err = e58704;
com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-error","com.wsscode.pathom.connect/node-resolver-error",-305161287),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),e,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416),err], null));

throw err;
}})()):(function (){try{var r = com.wsscode.pathom.connect.call_resolver(env__$1,e);
com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-success","com.wsscode.pathom.connect/node-resolver-success",1463092150),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),e,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-response","com.wsscode.pathom.connect/resolver-response",480860817),r], null));

return r;
}catch (e58705){var err = e58705;
com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-error","com.wsscode.pathom.connect/node-resolver-error",-305161287),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),e,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416),err], null));

throw err;
}})());
if(cljs.core.truth_(async_parser_QMARK_)){
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___62961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___62961,ch__53519__auto__,input_SINGLEQUOTE_,map__58701,map__58701__$1,resolver,cache_QMARK_,env__$1,entity,e,trace_data,response,map__58697,map__58697__$1,env,indexes,async_parser_QMARK_,map__58698,map__58698__$1,node,sym,input,params){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___62961,ch__53519__auto__,input_SINGLEQUOTE_,map__58701,map__58701__$1,resolver,cache_QMARK_,env__$1,entity,e,trace_data,response,map__58697,map__58697__$1,env,indexes,async_parser_QMARK_,map__58698,map__58698__$1,node,sym,input,params){
return (function (state_58783){
var state_val_58784 = (state_58783[(1)]);
if((state_val_58784 === (7))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_58783,(6),new cljs.core.Keyword(null,"default","default",-1987822328),null,(5));
var inst_58719 = com.wsscode.async.async_cljs.chan_QMARK_(response);
var state_58783__$1 = state_58783;
if(inst_58719){
var statearr_58785_62964 = state_58783__$1;
(statearr_58785_62964[(1)] = (8));

} else {
var statearr_58786_62966 = state_58783__$1;
(statearr_58786_62966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (20))){
var state_58783__$1 = state_58783;
var statearr_58787_62971 = state_58783__$1;
(statearr_58787_62971[(2)] = null);

(statearr_58787_62971[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (27))){
var state_58783__$1 = state_58783;
var statearr_58788_62972 = state_58783__$1;
(statearr_58788_62972[(1)] = (30));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (1))){
var state_58783__$1 = state_58783;
var statearr_58790_62975 = state_58783__$1;
(statearr_58790_62975[(2)] = null);

(statearr_58790_62975[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (24))){
var inst_58769 = (state_58783[(2)]);
var state_58783__$1 = state_58783;
var statearr_58791_62976 = state_58783__$1;
(statearr_58791_62976[(2)] = inst_58769);

(statearr_58791_62976[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_58783,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_58783__$1 = state_58783;
var statearr_58792_62978 = state_58783__$1;
(statearr_58792_62978[(2)] = null);

(statearr_58792_62978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (15))){
var inst_58729 = (state_58783[(2)]);
var inst_58730 = com.wsscode.async.async_cljs.consumer_pair(inst_58729);
var state_58783__$1 = state_58783;
var statearr_58793_62980 = state_58783__$1;
(statearr_58793_62980[(2)] = inst_58730);

(statearr_58793_62980[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (21))){
var inst_58772 = (state_58783[(2)]);
var state_58783__$1 = state_58783;
var statearr_58794_62981 = state_58783__$1;
(statearr_58794_62981[(2)] = inst_58772);


cljs.core.async.impl.ioc_helpers.process_exception(state_58783__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (31))){
var state_58783__$1 = state_58783;
var statearr_58795_62984 = state_58783__$1;
(statearr_58795_62984[(2)] = null);

(statearr_58795_62984[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (32))){
var inst_58765 = (state_58783[(2)]);
var state_58783__$1 = state_58783;
var statearr_58796_62985 = state_58783__$1;
(statearr_58796_62985[(2)] = inst_58765);

(statearr_58796_62985[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (33))){
var inst_58777 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_58783__$1 = state_58783;
var statearr_58797_62988 = state_58783__$1;
(statearr_58797_62988[(2)] = inst_58777);

(statearr_58797_62988[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (13))){
var state_58783__$1 = state_58783;
var statearr_58798_62989 = state_58783__$1;
(statearr_58798_62989[(1)] = (16));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (22))){
var inst_58748 = (state_58783[(7)]);
var state_58783__$1 = state_58783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58783__$1,(25),inst_58748);
} else {
if((state_val_58784 === (29))){
var inst_58759 = (state_58783[(2)]);
var inst_58760 = com.wsscode.async.async_cljs.consumer_pair(inst_58759);
var state_58783__$1 = state_58783;
var statearr_58800_62997 = state_58783__$1;
(statearr_58800_62997[(2)] = inst_58760);

(statearr_58800_62997[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (6))){
var inst_58710 = (state_58783[(2)]);
var inst_58711 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416)];
var inst_58712 = [new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-error","com.wsscode.pathom.connect/node-resolver-error",-305161287),e,inst_58710];
var inst_58713 = cljs.core.PersistentHashMap.fromArrays(inst_58711,inst_58712);
var inst_58714 = com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,inst_58713);
var inst_58715 = (function(){throw inst_58710})();
var state_58783__$1 = (function (){var statearr_58801 = state_58783;
(statearr_58801[(8)] = inst_58714);

return statearr_58801;
})();
var statearr_58802_62998 = state_58783__$1;
(statearr_58802_62998[(2)] = inst_58715);


cljs.core.async.impl.ioc_helpers.process_exception(state_58783__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (28))){
var inst_58767 = (state_58783[(2)]);
var state_58783__$1 = state_58783;
var statearr_58803_63000 = state_58783__$1;
(statearr_58803_63000[(2)] = inst_58767);

(statearr_58803_63000[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (25))){
var inst_58752 = (state_58783[(2)]);
var inst_58753 = com.wsscode.async.async_cljs.throw_err(inst_58752);
var state_58783__$1 = state_58783;
var statearr_58804_63003 = state_58783__$1;
(statearr_58804_63003[(2)] = inst_58753);

(statearr_58804_63003[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (34))){
var inst_58774 = (state_58783[(9)]);
var inst_58779 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_58774);
var state_58783__$1 = state_58783;
var statearr_58805_63005 = state_58783__$1;
(statearr_58805_63005[(2)] = inst_58779);

(statearr_58805_63005[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (17))){
var state_58783__$1 = state_58783;
var statearr_58806_63007 = state_58783__$1;
(statearr_58806_63007[(2)] = null);

(statearr_58806_63007[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (3))){
var inst_58706 = (state_58783[(2)]);
var state_58783__$1 = state_58783;
var statearr_58807_63009 = state_58783__$1;
(statearr_58807_63009[(2)] = inst_58706);


cljs.core.async.impl.ioc_helpers.process_exception(state_58783__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (12))){
var inst_58727 = com.wsscode.async.async_cljs.promise__GT_chan(response);
var state_58783__$1 = state_58783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58783__$1,(15),inst_58727);
} else {
if((state_val_58784 === (2))){
var inst_58774 = (state_58783[(9)]);
var inst_58774__$1 = (state_58783[(2)]);
var inst_58775 = (inst_58774__$1 == null);
var state_58783__$1 = (function (){var statearr_58808 = state_58783;
(statearr_58808[(9)] = inst_58774__$1);

return statearr_58808;
})();
if(cljs.core.truth_(inst_58775)){
var statearr_58809_63010 = state_58783__$1;
(statearr_58809_63010[(1)] = (33));

} else {
var statearr_58810_63012 = state_58783__$1;
(statearr_58810_63012[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (23))){
var inst_58748 = (state_58783[(7)]);
var inst_58755 = com.wsscode.async.async_cljs.promise_QMARK_(inst_58748);
var state_58783__$1 = state_58783;
if(cljs.core.truth_(inst_58755)){
var statearr_58811_63013 = state_58783__$1;
(statearr_58811_63013[(1)] = (26));

} else {
var statearr_58812_63014 = state_58783__$1;
(statearr_58812_63014[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (35))){
var inst_58781 = (state_58783[(2)]);
var state_58783__$1 = state_58783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58783__$1,inst_58781);
} else {
if((state_val_58784 === (19))){
var inst_58748 = (state_58783[(7)]);
var inst_58748__$1 = com.wsscode.pathom.connect.reader3_run_next_node(env__$1,plan,node);
var inst_58749 = com.wsscode.async.async_cljs.chan_QMARK_(inst_58748__$1);
var state_58783__$1 = (function (){var statearr_58813 = state_58783;
(statearr_58813[(7)] = inst_58748__$1);

return statearr_58813;
})();
if(inst_58749){
var statearr_58814_63018 = state_58783__$1;
(statearr_58814_63018[(1)] = (22));

} else {
var statearr_58815_63019 = state_58783__$1;
(statearr_58815_63019[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (11))){
var inst_58722 = (state_58783[(2)]);
var inst_58723 = com.wsscode.async.async_cljs.throw_err(inst_58722);
var state_58783__$1 = state_58783;
var statearr_58816_63021 = state_58783__$1;
(statearr_58816_63021[(2)] = inst_58723);

(statearr_58816_63021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (9))){
var inst_58725 = com.wsscode.async.async_cljs.promise_QMARK_(response);
var state_58783__$1 = state_58783;
if(cljs.core.truth_(inst_58725)){
var statearr_58817_63027 = state_58783__$1;
(statearr_58817_63027[(1)] = (12));

} else {
var statearr_58818_63030 = state_58783__$1;
(statearr_58818_63030[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (5))){
var inst_58745 = (state_58783[(2)]);
var inst_58746 = com.wsscode.pathom.connect.reader3_merge_resolver_response(env__$1,sym,inst_58745);
var state_58783__$1 = state_58783;
if(cljs.core.truth_(inst_58746)){
var statearr_58819_63033 = state_58783__$1;
(statearr_58819_63033[(1)] = (19));

} else {
var statearr_58820_63034 = state_58783__$1;
(statearr_58820_63034[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (14))){
var inst_58737 = (state_58783[(2)]);
var state_58783__$1 = state_58783;
var statearr_58821_63036 = state_58783__$1;
(statearr_58821_63036[(2)] = inst_58737);

(statearr_58821_63036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (26))){
var inst_58748 = (state_58783[(7)]);
var inst_58757 = com.wsscode.async.async_cljs.promise__GT_chan(inst_58748);
var state_58783__$1 = state_58783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58783__$1,(29),inst_58757);
} else {
if((state_val_58784 === (16))){
var state_58783__$1 = state_58783;
var statearr_58822_63040 = state_58783__$1;
(statearr_58822_63040[(2)] = response);

(statearr_58822_63040[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (30))){
var inst_58748 = (state_58783[(7)]);
var state_58783__$1 = state_58783;
var statearr_58823_63041 = state_58783__$1;
(statearr_58823_63041[(2)] = inst_58748);

(statearr_58823_63041[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (10))){
var inst_58739 = (state_58783[(2)]);
var inst_58740 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-response","com.wsscode.pathom.connect/resolver-response",480860817)];
var inst_58741 = [new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-success","com.wsscode.pathom.connect/node-resolver-success",1463092150),e,inst_58739];
var inst_58742 = cljs.core.PersistentHashMap.fromArrays(inst_58740,inst_58741);
var inst_58743 = com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,inst_58742);
var state_58783__$1 = (function (){var statearr_58824 = state_58783;
(statearr_58824[(10)] = inst_58743);

return statearr_58824;
})();
var statearr_58825_63042 = state_58783__$1;
(statearr_58825_63042[(2)] = inst_58739);


cljs.core.async.impl.ioc_helpers.process_exception(state_58783__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (18))){
var inst_58735 = (state_58783[(2)]);
var state_58783__$1 = state_58783;
var statearr_58826_63043 = state_58783__$1;
(statearr_58826_63043[(2)] = inst_58735);

(statearr_58826_63043[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58784 === (8))){
var state_58783__$1 = state_58783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58783__$1,(11),response);
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
});})(c__47946__auto___62961,ch__53519__auto__,input_SINGLEQUOTE_,map__58701,map__58701__$1,resolver,cache_QMARK_,env__$1,entity,e,trace_data,response,map__58697,map__58697__$1,env,indexes,async_parser_QMARK_,map__58698,map__58698__$1,node,sym,input,params))
;
return ((function (switch__47663__auto__,c__47946__auto___62961,ch__53519__auto__,input_SINGLEQUOTE_,map__58701,map__58701__$1,resolver,cache_QMARK_,env__$1,entity,e,trace_data,response,map__58697,map__58697__$1,env,indexes,async_parser_QMARK_,map__58698,map__58698__$1,node,sym,input,params){
return (function() {
var com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__47664__auto____0 = (function (){
var statearr_58827 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58827[(0)] = com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__47664__auto__);

(statearr_58827[(1)] = (1));

return statearr_58827;
});
var com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__47664__auto____1 = (function (state_58783){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_58783);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e58828){if((e58828 instanceof Object)){
var ex__47667__auto__ = e58828;
var statearr_58829_63046 = state_58783;
(statearr_58829_63046[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58828;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63049 = state_58783;
state_58783 = G__63049;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__47664__auto__ = function(state_58783){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__47664__auto____1.call(this,state_58783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___62961,ch__53519__auto__,input_SINGLEQUOTE_,map__58701,map__58701__$1,resolver,cache_QMARK_,env__$1,entity,e,trace_data,response,map__58697,map__58697__$1,env,indexes,async_parser_QMARK_,map__58698,map__58698__$1,node,sym,input,params))
})();
var state__47948__auto__ = (function (){var statearr_58830 = f__47947__auto__();
(statearr_58830[(6)] = c__47946__auto___62961);

return statearr_58830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___62961,ch__53519__auto__,input_SINGLEQUOTE_,map__58701,map__58701__$1,resolver,cache_QMARK_,env__$1,entity,e,trace_data,response,map__58697,map__58697__$1,env,indexes,async_parser_QMARK_,map__58698,map__58698__$1,node,sym,input,params))
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
com.wsscode.pathom.connect.reader3_run_and_node_sync = (function com$wsscode$pathom$connect$reader3_run_and_node_sync(env,plan,p__58831){
var map__58832 = p__58831;
var map__58832__$1 = (((((!((map__58832 == null))))?(((((map__58832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58832):map__58832);
var node = map__58832__$1;
var run_and = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58832__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-and","com.wsscode.pathom.connect.planner/run-and",-690922453));
var seq__58834_63052 = cljs.core.seq(run_and);
var chunk__58835_63053 = null;
var count__58836_63054 = (0);
var i__58837_63055 = (0);
while(true){
if((i__58837_63055 < count__58836_63054)){
var node_id_63057 = chunk__58835_63053.cljs$core$IIndexed$_nth$arity$2(null,i__58837_63055);
var G__58844_63060 = env;
var G__58845_63061 = plan;
var G__58846_63062 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,node_id_63057);
(com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(G__58844_63060,G__58845_63061,G__58846_63062) : com.wsscode.pathom.connect.reader3_run_node.call(null,G__58844_63060,G__58845_63061,G__58846_63062));


var G__63064 = seq__58834_63052;
var G__63065 = chunk__58835_63053;
var G__63066 = count__58836_63054;
var G__63067 = (i__58837_63055 + (1));
seq__58834_63052 = G__63064;
chunk__58835_63053 = G__63065;
count__58836_63054 = G__63066;
i__58837_63055 = G__63067;
continue;
} else {
var temp__5720__auto___63068 = cljs.core.seq(seq__58834_63052);
if(temp__5720__auto___63068){
var seq__58834_63069__$1 = temp__5720__auto___63068;
if(cljs.core.chunked_seq_QMARK_(seq__58834_63069__$1)){
var c__4550__auto___63070 = cljs.core.chunk_first(seq__58834_63069__$1);
var G__63071 = cljs.core.chunk_rest(seq__58834_63069__$1);
var G__63072 = c__4550__auto___63070;
var G__63073 = cljs.core.count(c__4550__auto___63070);
var G__63074 = (0);
seq__58834_63052 = G__63071;
chunk__58835_63053 = G__63072;
count__58836_63054 = G__63073;
i__58837_63055 = G__63074;
continue;
} else {
var node_id_63075 = cljs.core.first(seq__58834_63069__$1);
var G__58847_63076 = env;
var G__58848_63077 = plan;
var G__58849_63078 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,node_id_63075);
(com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(G__58847_63076,G__58848_63077,G__58849_63078) : com.wsscode.pathom.connect.reader3_run_node.call(null,G__58847_63076,G__58848_63077,G__58849_63078));


var G__63079 = cljs.core.next(seq__58834_63069__$1);
var G__63080 = null;
var G__63081 = (0);
var G__63082 = (0);
seq__58834_63052 = G__63079;
chunk__58835_63053 = G__63080;
count__58836_63054 = G__63081;
i__58837_63055 = G__63082;
continue;
}
} else {
}
}
break;
}

return com.wsscode.pathom.connect.reader3_run_next_node(env,plan,node);
});
com.wsscode.pathom.connect.reader3_run_and_node_async = (function com$wsscode$pathom$connect$reader3_run_and_node_async(env,plan,p__58850){
var map__58851 = p__58850;
var map__58851__$1 = (((((!((map__58851 == null))))?(((((map__58851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58851):map__58851);
var node = map__58851__$1;
var run_and = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58851__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-and","com.wsscode.pathom.connect.planner/run-and",-690922453));
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___63090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___63090,ch__53519__auto__,map__58851,map__58851__$1,node,run_and){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___63090,ch__53519__auto__,map__58851,map__58851__$1,node,run_and){
return (function (state_58902){
var state_val_58903 = (state_58902[(1)]);
if((state_val_58903 === (7))){
var state_58902__$1 = state_58902;
var statearr_58904_63098 = state_58902__$1;
(statearr_58904_63098[(2)] = null);

(statearr_58904_63098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58903 === (20))){
var inst_58896 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_58902__$1 = state_58902;
var statearr_58905_63099 = state_58902__$1;
(statearr_58905_63099[(2)] = inst_58896);

(statearr_58905_63099[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58903 === (1))){
var state_58902__$1 = state_58902;
var statearr_58906_63100 = state_58902__$1;
(statearr_58906_63100[(2)] = null);

(statearr_58906_63100[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58903 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_58902,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_58857 = cljs.core.async.to_chan(run_and);
var inst_58858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_58859 = (function (){var from_chan = inst_58857;
var out_chan = inst_58858;
return ((function (from_chan,out_chan,_,inst_58857,inst_58858,state_val_58903,c__47946__auto___63090,ch__53519__auto__,map__58851,map__58851__$1,node,run_and){
return (function com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline(node_id,res_ch){
var c__47946__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto____$1,from_chan,out_chan,_,inst_58857,inst_58858,state_val_58903,c__47946__auto___63090,ch__53519__auto__,map__58851,map__58851__$1,node,run_and){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto____$1,from_chan,out_chan,_,inst_58857,inst_58858,state_val_58903,c__47946__auto___63090,ch__53519__auto__,map__58851,map__58851__$1,node,run_and){
return (function (state_58925){
var state_val_58926 = (state_58925[(1)]);
if((state_val_58926 === (7))){
var inst_58915 = (state_58925[(7)]);
var state_58925__$1 = state_58925;
var statearr_58927_63107 = state_58925__$1;
(statearr_58927_63107[(2)] = inst_58915);

(statearr_58927_63107[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58926 === (1))){
var inst_58908 = (state_58925[(8)]);
var inst_58907 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,node_id);
var inst_58908__$1 = (com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(env,plan,inst_58907) : com.wsscode.pathom.connect.reader3_run_node.call(null,env,plan,inst_58907));
var inst_58909 = com.wsscode.async.async_cljs.chan_QMARK_(inst_58908__$1);
var state_58925__$1 = (function (){var statearr_58928 = state_58925;
(statearr_58928[(8)] = inst_58908__$1);

return statearr_58928;
})();
if(inst_58909){
var statearr_58929_63111 = state_58925__$1;
(statearr_58929_63111[(1)] = (2));

} else {
var statearr_58930_63112 = state_58925__$1;
(statearr_58930_63112[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58926 === (4))){
var inst_58915 = (state_58925[(7)]);
var inst_58915__$1 = (state_58925[(2)]);
var state_58925__$1 = (function (){var statearr_58931 = state_58925;
(statearr_58931[(7)] = inst_58915__$1);

return statearr_58931;
})();
if(cljs.core.truth_(inst_58915__$1)){
var statearr_58932_63113 = state_58925__$1;
(statearr_58932_63113[(1)] = (7));

} else {
var statearr_58933_63114 = state_58925__$1;
(statearr_58933_63114[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58926 === (6))){
var inst_58922 = (state_58925[(2)]);
var inst_58923 = cljs.core.async.close_BANG_(res_ch);
var state_58925__$1 = (function (){var statearr_58934 = state_58925;
(statearr_58934[(9)] = inst_58922);

return statearr_58934;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58925__$1,inst_58923);
} else {
if((state_val_58926 === (3))){
var inst_58908 = (state_58925[(8)]);
var state_58925__$1 = state_58925;
var statearr_58935_63115 = state_58925__$1;
(statearr_58935_63115[(2)] = inst_58908);

(statearr_58935_63115[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58926 === (2))){
var inst_58908 = (state_58925[(8)]);
var state_58925__$1 = state_58925;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58925__$1,(5),inst_58908);
} else {
if((state_val_58926 === (9))){
var inst_58920 = (state_58925[(2)]);
var state_58925__$1 = state_58925;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58925__$1,(6),res_ch,inst_58920);
} else {
if((state_val_58926 === (5))){
var inst_58912 = (state_58925[(2)]);
var state_58925__$1 = state_58925;
var statearr_58936_63118 = state_58925__$1;
(statearr_58936_63118[(2)] = inst_58912);

(statearr_58936_63118[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58926 === (8))){
var inst_58918 = cljs.core.PersistentHashMap.EMPTY;
var state_58925__$1 = state_58925;
var statearr_58937_63119 = state_58925__$1;
(statearr_58937_63119[(2)] = inst_58918);

(statearr_58937_63119[(1)] = (9));


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
});})(c__47946__auto____$1,from_chan,out_chan,_,inst_58857,inst_58858,state_val_58903,c__47946__auto___63090,ch__53519__auto__,map__58851,map__58851__$1,node,run_and))
;
return ((function (switch__47663__auto__,c__47946__auto____$1,from_chan,out_chan,_,inst_58857,inst_58858,state_val_58903,c__47946__auto___63090,ch__53519__auto__,map__58851,map__58851__$1,node,run_and){
return (function() {
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__47664__auto____0 = (function (){
var statearr_58938 = [null,null,null,null,null,null,null,null,null,null];
(statearr_58938[(0)] = com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__47664__auto__);

(statearr_58938[(1)] = (1));

return statearr_58938;
});
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__47664__auto____1 = (function (state_58925){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_58925);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e58939){if((e58939 instanceof Object)){
var ex__47667__auto__ = e58939;
var statearr_58940_63122 = state_58925;
(statearr_58940_63122[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58939;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63124 = state_58925;
state_58925 = G__63124;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__47664__auto__ = function(state_58925){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__47664__auto____1.call(this,state_58925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto____$1,from_chan,out_chan,_,inst_58857,inst_58858,state_val_58903,c__47946__auto___63090,ch__53519__auto__,map__58851,map__58851__$1,node,run_and))
})();
var state__47948__auto__ = (function (){var statearr_58941 = f__47947__auto__();
(statearr_58941[(6)] = c__47946__auto____$1);

return statearr_58941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto____$1,from_chan,out_chan,_,inst_58857,inst_58858,state_val_58903,c__47946__auto___63090,ch__53519__auto__,map__58851,map__58851__$1,node,run_and))
);

return c__47946__auto____$1;
});
;})(from_chan,out_chan,_,inst_58857,inst_58858,state_val_58903,c__47946__auto___63090,ch__53519__auto__,map__58851,map__58851__$1,node,run_and))
})();
var inst_58860 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_58858,inst_58859,inst_58857);
var inst_58861 = cljs.core.PersistentVector.EMPTY;
var inst_58862 = cljs.core.async.into(inst_58861,inst_58858);
var state_58902__$1 = (function (){var statearr_58942 = state_58902;
(statearr_58942[(7)] = inst_58860);

return statearr_58942;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58902__$1,(5),inst_58862);
} else {
if((state_val_58903 === (15))){
var inst_58886 = (state_58902[(2)]);
var state_58902__$1 = state_58902;
var statearr_58943_63127 = state_58902__$1;
(statearr_58943_63127[(2)] = inst_58886);

(statearr_58943_63127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58903 === (21))){
var inst_58893 = (state_58902[(8)]);
var inst_58898 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_58893);
var state_58902__$1 = state_58902;
var statearr_58944_63128 = state_58902__$1;
(statearr_58944_63128[(2)] = inst_58898);

(statearr_58944_63128[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58903 === (13))){
var inst_58867 = (state_58902[(9)]);
var inst_58876 = com.wsscode.async.async_cljs.promise__GT_chan(inst_58867);
var state_58902__$1 = state_58902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58902__$1,(16),inst_58876);
} else {
if((state_val_58903 === (22))){
var inst_58900 = (state_58902[(2)]);
var state_58902__$1 = state_58902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58902__$1,inst_58900);
} else {
if((state_val_58903 === (6))){
var inst_58867 = (state_58902[(9)]);
var inst_58867__$1 = com.wsscode.pathom.connect.reader3_run_next_node(env,plan,node);
var inst_58868 = com.wsscode.async.async_cljs.chan_QMARK_(inst_58867__$1);
var state_58902__$1 = (function (){var statearr_58945 = state_58902;
(statearr_58945[(9)] = inst_58867__$1);

return statearr_58945;
})();
if(inst_58868){
var statearr_58946_63135 = state_58902__$1;
(statearr_58946_63135[(1)] = (9));

} else {
var statearr_58947_63136 = state_58902__$1;
(statearr_58947_63136[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58903 === (17))){
var inst_58867 = (state_58902[(9)]);
var state_58902__$1 = state_58902;
var statearr_58948_63137 = state_58902__$1;
(statearr_58948_63137[(2)] = inst_58867);

(statearr_58948_63137[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58903 === (3))){
var inst_58853 = (state_58902[(2)]);
var state_58902__$1 = state_58902;
var statearr_58949_63139 = state_58902__$1;
(statearr_58949_63139[(2)] = inst_58853);


cljs.core.async.impl.ioc_helpers.process_exception(state_58902__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58903 === (12))){
var inst_58871 = (state_58902[(2)]);
var inst_58872 = com.wsscode.async.async_cljs.throw_err(inst_58871);
var state_58902__$1 = state_58902;
var statearr_58950_63141 = state_58902__$1;
(statearr_58950_63141[(2)] = inst_58872);

(statearr_58950_63141[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58903 === (2))){
var inst_58893 = (state_58902[(8)]);
var inst_58893__$1 = (state_58902[(2)]);
var inst_58894 = (inst_58893__$1 == null);
var state_58902__$1 = (function (){var statearr_58951 = state_58902;
(statearr_58951[(8)] = inst_58893__$1);

return statearr_58951;
})();
if(cljs.core.truth_(inst_58894)){
var statearr_58952_63144 = state_58902__$1;
(statearr_58952_63144[(1)] = (20));

} else {
var statearr_58953_63147 = state_58902__$1;
(statearr_58953_63147[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58903 === (19))){
var inst_58884 = (state_58902[(2)]);
var state_58902__$1 = state_58902;
var statearr_58954_63148 = state_58902__$1;
(statearr_58954_63148[(2)] = inst_58884);

(statearr_58954_63148[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58903 === (11))){
var inst_58888 = (state_58902[(2)]);
var state_58902__$1 = state_58902;
var statearr_58955_63151 = state_58902__$1;
(statearr_58955_63151[(2)] = inst_58888);

(statearr_58955_63151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58903 === (9))){
var inst_58867 = (state_58902[(9)]);
var state_58902__$1 = state_58902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58902__$1,(12),inst_58867);
} else {
if((state_val_58903 === (5))){
var inst_58864 = (state_58902[(2)]);
var inst_58865 = com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_(env,node);
var state_58902__$1 = (function (){var statearr_58956 = state_58902;
(statearr_58956[(10)] = inst_58864);

return statearr_58956;
})();
if(inst_58865){
var statearr_58957_63157 = state_58902__$1;
(statearr_58957_63157[(1)] = (6));

} else {
var statearr_58958_63158 = state_58902__$1;
(statearr_58958_63158[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58903 === (14))){
var state_58902__$1 = state_58902;
var statearr_58959_63159 = state_58902__$1;
(statearr_58959_63159[(1)] = (17));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58903 === (16))){
var inst_58878 = (state_58902[(2)]);
var inst_58879 = com.wsscode.async.async_cljs.consumer_pair(inst_58878);
var state_58902__$1 = state_58902;
var statearr_58961_63162 = state_58902__$1;
(statearr_58961_63162[(2)] = inst_58879);

(statearr_58961_63162[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58903 === (10))){
var inst_58867 = (state_58902[(9)]);
var inst_58874 = com.wsscode.async.async_cljs.promise_QMARK_(inst_58867);
var state_58902__$1 = state_58902;
if(cljs.core.truth_(inst_58874)){
var statearr_58962_63164 = state_58902__$1;
(statearr_58962_63164[(1)] = (13));

} else {
var statearr_58963_63166 = state_58902__$1;
(statearr_58963_63166[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58903 === (18))){
var state_58902__$1 = state_58902;
var statearr_58964_63168 = state_58902__$1;
(statearr_58964_63168[(2)] = null);

(statearr_58964_63168[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58903 === (8))){
var inst_58891 = (state_58902[(2)]);
var state_58902__$1 = state_58902;
var statearr_58965_63172 = state_58902__$1;
(statearr_58965_63172[(2)] = inst_58891);


cljs.core.async.impl.ioc_helpers.process_exception(state_58902__$1);

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
});})(c__47946__auto___63090,ch__53519__auto__,map__58851,map__58851__$1,node,run_and))
;
return ((function (switch__47663__auto__,c__47946__auto___63090,ch__53519__auto__,map__58851,map__58851__$1,node,run_and){
return (function() {
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__47664__auto____0 = (function (){
var statearr_58966 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58966[(0)] = com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__47664__auto__);

(statearr_58966[(1)] = (1));

return statearr_58966;
});
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__47664__auto____1 = (function (state_58902){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_58902);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e58967){if((e58967 instanceof Object)){
var ex__47667__auto__ = e58967;
var statearr_58968_63179 = state_58902;
(statearr_58968_63179[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58967;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63185 = state_58902;
state_58902 = G__63185;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__47664__auto__ = function(state_58902){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__47664__auto____1.call(this,state_58902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___63090,ch__53519__auto__,map__58851,map__58851__$1,node,run_and))
})();
var state__47948__auto__ = (function (){var statearr_58969 = f__47947__auto__();
(statearr_58969[(6)] = c__47946__auto___63090);

return statearr_58969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___63090,ch__53519__auto__,map__58851,map__58851__$1,node,run_and))
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
com.wsscode.pathom.connect.reader3_run_or_node_sync = (function com$wsscode$pathom$connect$reader3_run_or_node_sync(env,plan,p__58970){
var map__58971 = p__58970;
var map__58971__$1 = (((((!((map__58971 == null))))?(((((map__58971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58971):map__58971);
var or_node = map__58971__$1;
var run_or = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58971__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-or","com.wsscode.pathom.connect.planner/run-or",-13021664));
var nodes_63207 = run_or;
var resp_63208 = null;
while(true){
var vec__58979_63209 = nodes_63207;
var seq__58980_63210 = cljs.core.seq(vec__58979_63209);
var first__58981_63211 = cljs.core.first(seq__58980_63210);
var seq__58980_63212__$1 = cljs.core.next(seq__58980_63210);
var node_id_63213 = first__58981_63211;
var tail_63214 = seq__58980_63212__$1;
if(cljs.core.truth_(node_id_63213)){
var response_63215 = (function (){var G__58982 = env;
var G__58983 = plan;
var G__58984 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,node_id_63213);
return (com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(G__58982,G__58983,G__58984) : com.wsscode.pathom.connect.reader3_run_node.call(null,G__58982,G__58983,G__58984));
})();
if(com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_(env,or_node)){
} else {
var G__63231 = tail_63214;
var G__63232 = response_63215;
nodes_63207 = G__63231;
resp_63208 = G__63232;
continue;
}
} else {
}
break;
}

return com.wsscode.pathom.connect.reader3_run_next_node(env,plan,or_node);
});
com.wsscode.pathom.connect.reader3_run_or_node_async = (function com$wsscode$pathom$connect$reader3_run_or_node_async(env,plan,p__58985){
var map__58986 = p__58985;
var map__58986__$1 = (((((!((map__58986 == null))))?(((((map__58986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58986):map__58986);
var or_node = map__58986__$1;
var run_or = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58986__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-or","com.wsscode.pathom.connect.planner/run-or",-13021664));
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___63233 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___63233,ch__53519__auto__,map__58986,map__58986__$1,or_node,run_or){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___63233,ch__53519__auto__,map__58986,map__58986__$1,or_node,run_or){
return (function (state_59054){
var state_val_59055 = (state_59054[(1)]);
if((state_val_59055 === (7))){
var inst_59003 = (state_59054[(7)]);
var inst_58999 = (state_59054[(8)]);
var inst_59002 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,inst_58999);
var inst_59003__$1 = (com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(env,plan,inst_59002) : com.wsscode.pathom.connect.reader3_run_node.call(null,env,plan,inst_59002));
var inst_59004 = com.wsscode.async.async_cljs.chan_QMARK_(inst_59003__$1);
var state_59054__$1 = (function (){var statearr_59056 = state_59054;
(statearr_59056[(7)] = inst_59003__$1);

return statearr_59056;
})();
if(inst_59004){
var statearr_59057_63236 = state_59054__$1;
(statearr_59057_63236[(1)] = (10));

} else {
var statearr_59058_63238 = state_59054__$1;
(statearr_59058_63238[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (20))){
var inst_59026 = (state_59054[(2)]);
var inst_59027 = com.wsscode.async.async_cljs.throw_err(inst_59026);
var state_59054__$1 = state_59054;
var statearr_59059_63241 = state_59054__$1;
(statearr_59059_63241[(2)] = inst_59027);

(statearr_59059_63241[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (27))){
var inst_59039 = (state_59054[(2)]);
var state_59054__$1 = state_59054;
var statearr_59060_63242 = state_59054__$1;
(statearr_59060_63242[(2)] = inst_59039);

(statearr_59060_63242[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (1))){
var state_59054__$1 = state_59054;
var statearr_59061_63246 = state_59054__$1;
(statearr_59061_63246[(2)] = null);

(statearr_59061_63246[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (24))){
var inst_59033 = (state_59054[(2)]);
var inst_59034 = com.wsscode.async.async_cljs.consumer_pair(inst_59033);
var state_59054__$1 = state_59054;
var statearr_59062_63250 = state_59054__$1;
(statearr_59062_63250[(2)] = inst_59034);

(statearr_59062_63250[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_59054,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_58992 = run_or;
var inst_58993 = null;
var state_59054__$1 = (function (){var statearr_59063 = state_59054;
(statearr_59063[(9)] = inst_58993);

(statearr_59063[(10)] = inst_58992);

return statearr_59063;
})();
var statearr_59064_63254 = state_59054__$1;
(statearr_59064_63254[(2)] = null);

(statearr_59064_63254[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (15))){
var inst_59000 = (state_59054[(11)]);
var inst_59010 = (state_59054[(12)]);
var inst_58992 = inst_59000;
var inst_58993 = inst_59010;
var state_59054__$1 = (function (){var statearr_59065 = state_59054;
(statearr_59065[(9)] = inst_58993);

(statearr_59065[(10)] = inst_58992);

return statearr_59065;
})();
var statearr_59066_63256 = state_59054__$1;
(statearr_59066_63256[(2)] = null);

(statearr_59066_63256[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (21))){
var inst_59022 = (state_59054[(13)]);
var inst_59031 = com.wsscode.async.async_cljs.promise__GT_chan(inst_59022);
var state_59054__$1 = state_59054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59054__$1,(24),inst_59031);
} else {
if((state_val_59055 === (13))){
var inst_59007 = (state_59054[(2)]);
var state_59054__$1 = state_59054;
var statearr_59067_63261 = state_59054__$1;
(statearr_59067_63261[(2)] = inst_59007);

(statearr_59067_63261[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (22))){
var state_59054__$1 = state_59054;
var statearr_59068_63263 = state_59054__$1;
(statearr_59068_63263[(1)] = (25));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (29))){
var inst_59045 = (state_59054[(14)]);
var inst_59050 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_59045);
var state_59054__$1 = state_59054;
var statearr_59070_63266 = state_59054__$1;
(statearr_59070_63266[(2)] = inst_59050);

(statearr_59070_63266[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (6))){
var inst_59022 = (state_59054[(13)]);
var inst_59021 = (state_59054[(2)]);
var inst_59022__$1 = com.wsscode.pathom.connect.reader3_run_next_node(env,plan,or_node);
var inst_59023 = com.wsscode.async.async_cljs.chan_QMARK_(inst_59022__$1);
var state_59054__$1 = (function (){var statearr_59071 = state_59054;
(statearr_59071[(15)] = inst_59021);

(statearr_59071[(13)] = inst_59022__$1);

return statearr_59071;
})();
if(inst_59023){
var statearr_59072_63270 = state_59054__$1;
(statearr_59072_63270[(1)] = (17));

} else {
var statearr_59073_63271 = state_59054__$1;
(statearr_59073_63271[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (28))){
var inst_59048 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_59054__$1 = state_59054;
var statearr_59074_63274 = state_59054__$1;
(statearr_59074_63274[(2)] = inst_59048);

(statearr_59074_63274[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (25))){
var inst_59022 = (state_59054[(13)]);
var state_59054__$1 = state_59054;
var statearr_59075_63278 = state_59054__$1;
(statearr_59075_63278[(2)] = inst_59022);

(statearr_59075_63278[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (17))){
var inst_59022 = (state_59054[(13)]);
var state_59054__$1 = state_59054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59054__$1,(20),inst_59022);
} else {
if((state_val_59055 === (3))){
var inst_58988 = (state_59054[(2)]);
var state_59054__$1 = state_59054;
var statearr_59076_63280 = state_59054__$1;
(statearr_59076_63280[(2)] = inst_58988);


cljs.core.async.impl.ioc_helpers.process_exception(state_59054__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (12))){
var inst_59010 = (state_59054[(2)]);
var inst_59011 = com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_(env,or_node);
var state_59054__$1 = (function (){var statearr_59077 = state_59054;
(statearr_59077[(12)] = inst_59010);

return statearr_59077;
})();
if(inst_59011){
var statearr_59078_63283 = state_59054__$1;
(statearr_59078_63283[(1)] = (14));

} else {
var statearr_59079_63284 = state_59054__$1;
(statearr_59079_63284[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (2))){
var inst_59045 = (state_59054[(14)]);
var inst_59045__$1 = (state_59054[(2)]);
var inst_59046 = (inst_59045__$1 == null);
var state_59054__$1 = (function (){var statearr_59080 = state_59054;
(statearr_59080[(14)] = inst_59045__$1);

return statearr_59080;
})();
if(cljs.core.truth_(inst_59046)){
var statearr_59081_63285 = state_59054__$1;
(statearr_59081_63285[(1)] = (28));

} else {
var statearr_59082_63286 = state_59054__$1;
(statearr_59082_63286[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (23))){
var inst_59041 = (state_59054[(2)]);
var state_59054__$1 = state_59054;
var statearr_59083_63287 = state_59054__$1;
(statearr_59083_63287[(2)] = inst_59041);

(statearr_59083_63287[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (19))){
var inst_59043 = (state_59054[(2)]);
var state_59054__$1 = state_59054;
var statearr_59084_63290 = state_59054__$1;
(statearr_59084_63290[(2)] = inst_59043);


cljs.core.async.impl.ioc_helpers.process_exception(state_59054__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (11))){
var inst_59003 = (state_59054[(7)]);
var state_59054__$1 = state_59054;
var statearr_59085_63292 = state_59054__$1;
(statearr_59085_63292[(2)] = inst_59003);

(statearr_59085_63292[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (9))){
var inst_59019 = (state_59054[(2)]);
var state_59054__$1 = state_59054;
var statearr_59086_63293 = state_59054__$1;
(statearr_59086_63293[(2)] = inst_59019);

(statearr_59086_63293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (5))){
var inst_58992 = (state_59054[(10)]);
var inst_58999 = (state_59054[(8)]);
var inst_58998 = cljs.core.seq(inst_58992);
var inst_58999__$1 = cljs.core.first(inst_58998);
var inst_59000 = cljs.core.next(inst_58998);
var state_59054__$1 = (function (){var statearr_59087 = state_59054;
(statearr_59087[(11)] = inst_59000);

(statearr_59087[(8)] = inst_58999__$1);

return statearr_59087;
})();
if(cljs.core.truth_(inst_58999__$1)){
var statearr_59088_63294 = state_59054__$1;
(statearr_59088_63294[(1)] = (7));

} else {
var statearr_59089_63297 = state_59054__$1;
(statearr_59089_63297[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (14))){
var inst_59010 = (state_59054[(12)]);
var state_59054__$1 = state_59054;
var statearr_59090_63300 = state_59054__$1;
(statearr_59090_63300[(2)] = inst_59010);

(statearr_59090_63300[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (26))){
var state_59054__$1 = state_59054;
var statearr_59091_63303 = state_59054__$1;
(statearr_59091_63303[(2)] = null);

(statearr_59091_63303[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (16))){
var inst_59016 = (state_59054[(2)]);
var state_59054__$1 = state_59054;
var statearr_59092_63307 = state_59054__$1;
(statearr_59092_63307[(2)] = inst_59016);

(statearr_59092_63307[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (30))){
var inst_59052 = (state_59054[(2)]);
var state_59054__$1 = state_59054;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59054__$1,inst_59052);
} else {
if((state_val_59055 === (10))){
var inst_59003 = (state_59054[(7)]);
var state_59054__$1 = state_59054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59054__$1,(13),inst_59003);
} else {
if((state_val_59055 === (18))){
var inst_59022 = (state_59054[(13)]);
var inst_59029 = com.wsscode.async.async_cljs.promise_QMARK_(inst_59022);
var state_59054__$1 = state_59054;
if(cljs.core.truth_(inst_59029)){
var statearr_59093_63309 = state_59054__$1;
(statearr_59093_63309[(1)] = (21));

} else {
var statearr_59094_63310 = state_59054__$1;
(statearr_59094_63310[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59055 === (8))){
var inst_58993 = (state_59054[(9)]);
var state_59054__$1 = state_59054;
var statearr_59095_63313 = state_59054__$1;
(statearr_59095_63313[(2)] = inst_58993);

(statearr_59095_63313[(1)] = (9));


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
});})(c__47946__auto___63233,ch__53519__auto__,map__58986,map__58986__$1,or_node,run_or))
;
return ((function (switch__47663__auto__,c__47946__auto___63233,ch__53519__auto__,map__58986,map__58986__$1,or_node,run_or){
return (function() {
var com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__47664__auto____0 = (function (){
var statearr_59096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59096[(0)] = com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__47664__auto__);

(statearr_59096[(1)] = (1));

return statearr_59096;
});
var com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__47664__auto____1 = (function (state_59054){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_59054);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e59097){if((e59097 instanceof Object)){
var ex__47667__auto__ = e59097;
var statearr_59098_63316 = state_59054;
(statearr_59098_63316[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_59054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59097;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63317 = state_59054;
state_59054 = G__63317;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__47664__auto__ = function(state_59054){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__47664__auto____1.call(this,state_59054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___63233,ch__53519__auto__,map__58986,map__58986__$1,or_node,run_or))
})();
var state__47948__auto__ = (function (){var statearr_59099 = f__47947__auto__();
(statearr_59099[(6)] = c__47946__auto___63233);

return statearr_59099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___63233,ch__53519__auto__,map__58986,map__58986__$1,or_node,run_or))
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
var G__59100 = com.wsscode.pathom.connect.planner.node_kind(node);
var G__59100__$1 = (((G__59100 instanceof cljs.core.Keyword))?G__59100.fqn:null);
switch (G__59100__$1) {
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
com.wsscode.pathom.connect.reader3_prepare_ast = (function com$wsscode$pathom$connect$reader3_prepare_ast(p__59101){
var map__59102 = p__59101;
var map__59102__$1 = (((((!((map__59102 == null))))?(((((map__59102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59102):map__59102);
var env = map__59102__$1;
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59102__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
return com.wsscode.pathom.connect.planner.prepare_ast(env,com.wsscode.pathom.core.query__GT_ast(parent_query));
});
com.wsscode.pathom.connect.reader3_compute_run_graph = (function com$wsscode$pathom$connect$reader3_compute_run_graph(env){
var plan_trace_id = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978)], null));
var plan = com.wsscode.pathom.connect.planner.compute_run_graph.cljs$core$IFn$_invoke$arity$1(env);
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,plan_trace_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978),new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),plan], null));

return plan;
});
com.wsscode.pathom.connect.reader3 = (function com$wsscode$pathom$connect$reader3(p__59104){
var map__59105 = p__59104;
var map__59105__$1 = (((((!((map__59105 == null))))?(((((map__59105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59105):map__59105);
var env = map__59105__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59105__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var reader3_computed_plans = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59105__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-computed-plans","com.wsscode.pathom.connect/reader3-computed-plans",-307073851));
var async_parser_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59105__$1,new cljs.core.Keyword("com.wsscode.pathom.core","async-parser?","com.wsscode.pathom.core/async-parser?",920199905));
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
var c__47946__auto___63336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___63336,ch__53519__auto__,root,temp__5718__auto__,ast,available_data,process_start,plan,plan_STAR_,env__$1,path,map__59105,map__59105__$1,env,indexes,reader3_computed_plans,async_parser_QMARK_){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___63336,ch__53519__auto__,root,temp__5718__auto__,ast,available_data,process_start,plan,plan_STAR_,env__$1,path,map__59105,map__59105__$1,env,indexes,reader3_computed_plans,async_parser_QMARK_){
return (function (state_59174){
var state_val_59175 = (state_59174[(1)]);
if((state_val_59175 === (7))){
var inst_59142 = (state_59174[(7)]);
var inst_59132 = (state_59174[(2)]);
var inst_59133 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_59134 = cljs.core.deref(plan_STAR_);
var inst_59135 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_59136 = ["#6ac5ec"];
var inst_59137 = cljs.core.PersistentHashMap.fromArrays(inst_59135,inst_59136);
var inst_59138 = [new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-execute","com.wsscode.pathom.connect/reader3-execute",1795970935),inst_59134,inst_59137];
var inst_59139 = cljs.core.PersistentHashMap.fromArrays(inst_59133,inst_59138);
var inst_59140 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env__$1,process_start,inst_59139);
var inst_59141 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-computed-plans","com.wsscode.pathom.connect/reader3-computed-plans",-307073851),com.wsscode.pathom.misc.sconj,path);
var inst_59142__$1 = com.wsscode.pathom.core.reader(inst_59141);
var inst_59143 = com.wsscode.async.async_cljs.chan_QMARK_(inst_59142__$1);
var state_59174__$1 = (function (){var statearr_59176 = state_59174;
(statearr_59176[(8)] = inst_59132);

(statearr_59176[(9)] = inst_59140);

(statearr_59176[(7)] = inst_59142__$1);

return statearr_59176;
})();
if(inst_59143){
var statearr_59177_63352 = state_59174__$1;
(statearr_59177_63352[(1)] = (16));

} else {
var statearr_59178_63353 = state_59174__$1;
(statearr_59178_63353[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59175 === (20))){
var inst_59142 = (state_59174[(7)]);
var inst_59151 = com.wsscode.async.async_cljs.promise__GT_chan(inst_59142);
var state_59174__$1 = state_59174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59174__$1,(23),inst_59151);
} else {
if((state_val_59175 === (27))){
var inst_59168 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_59174__$1 = state_59174;
var statearr_59179_63357 = state_59174__$1;
(statearr_59179_63357[(2)] = inst_59168);

(statearr_59179_63357[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59175 === (1))){
var state_59174__$1 = state_59174;
var statearr_59180_63359 = state_59174__$1;
(statearr_59180_63359[(2)] = null);

(statearr_59180_63359[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59175 === (24))){
var inst_59142 = (state_59174[(7)]);
var state_59174__$1 = state_59174;
var statearr_59181_63361 = state_59174__$1;
(statearr_59181_63361[(2)] = inst_59142);

(statearr_59181_63361[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59175 === (4))){
var inst_59111 = (state_59174[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_59174,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_59111__$1 = com.wsscode.pathom.connect.reader3_run_node(env__$1,plan,root);
var inst_59112 = com.wsscode.async.async_cljs.chan_QMARK_(inst_59111__$1);
var state_59174__$1 = (function (){var statearr_59182 = state_59174;
(statearr_59182[(10)] = inst_59111__$1);

return statearr_59182;
})();
if(inst_59112){
var statearr_59183_63369 = state_59174__$1;
(statearr_59183_63369[(1)] = (5));

} else {
var statearr_59184_63370 = state_59174__$1;
(statearr_59184_63370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59175 === (15))){
var inst_59128 = (state_59174[(2)]);
var state_59174__$1 = state_59174;
var statearr_59185_63373 = state_59174__$1;
(statearr_59185_63373[(2)] = inst_59128);

(statearr_59185_63373[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59175 === (21))){
var state_59174__$1 = state_59174;
var statearr_59186_63375 = state_59174__$1;
(statearr_59186_63375[(1)] = (24));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59175 === (13))){
var inst_59111 = (state_59174[(10)]);
var state_59174__$1 = state_59174;
var statearr_59188_63381 = state_59174__$1;
(statearr_59188_63381[(2)] = inst_59111);

(statearr_59188_63381[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59175 === (22))){
var inst_59161 = (state_59174[(2)]);
var state_59174__$1 = state_59174;
var statearr_59189_63384 = state_59174__$1;
(statearr_59189_63384[(2)] = inst_59161);

(statearr_59189_63384[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59175 === (29))){
var inst_59172 = (state_59174[(2)]);
var state_59174__$1 = state_59174;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59174__$1,inst_59172);
} else {
if((state_val_59175 === (6))){
var inst_59111 = (state_59174[(10)]);
var inst_59118 = com.wsscode.async.async_cljs.promise_QMARK_(inst_59111);
var state_59174__$1 = state_59174;
if(cljs.core.truth_(inst_59118)){
var statearr_59190_63389 = state_59174__$1;
(statearr_59190_63389[(1)] = (9));

} else {
var statearr_59191_63390 = state_59174__$1;
(statearr_59191_63390[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59175 === (28))){
var inst_59165 = (state_59174[(11)]);
var inst_59170 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_59165);
var state_59174__$1 = state_59174;
var statearr_59192_63391 = state_59174__$1;
(statearr_59192_63391[(2)] = inst_59170);

(statearr_59192_63391[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59175 === (25))){
var state_59174__$1 = state_59174;
var statearr_59193_63394 = state_59174__$1;
(statearr_59193_63394[(2)] = null);

(statearr_59193_63394[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59175 === (17))){
var inst_59142 = (state_59174[(7)]);
var inst_59149 = com.wsscode.async.async_cljs.promise_QMARK_(inst_59142);
var state_59174__$1 = state_59174;
if(cljs.core.truth_(inst_59149)){
var statearr_59194_63400 = state_59174__$1;
(statearr_59194_63400[(1)] = (20));

} else {
var statearr_59195_63401 = state_59174__$1;
(statearr_59195_63401[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59175 === (3))){
var inst_59107 = (state_59174[(2)]);
var state_59174__$1 = state_59174;
var statearr_59196_63404 = state_59174__$1;
(statearr_59196_63404[(2)] = inst_59107);


cljs.core.async.impl.ioc_helpers.process_exception(state_59174__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59175 === (12))){
var inst_59122 = (state_59174[(2)]);
var inst_59123 = com.wsscode.async.async_cljs.consumer_pair(inst_59122);
var state_59174__$1 = state_59174;
var statearr_59197_63405 = state_59174__$1;
(statearr_59197_63405[(2)] = inst_59123);

(statearr_59197_63405[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59175 === (2))){
var inst_59165 = (state_59174[(11)]);
var inst_59165__$1 = (state_59174[(2)]);
var inst_59166 = (inst_59165__$1 == null);
var state_59174__$1 = (function (){var statearr_59198 = state_59174;
(statearr_59198[(11)] = inst_59165__$1);

return statearr_59198;
})();
if(cljs.core.truth_(inst_59166)){
var statearr_59199_63408 = state_59174__$1;
(statearr_59199_63408[(1)] = (27));

} else {
var statearr_59200_63409 = state_59174__$1;
(statearr_59200_63409[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59175 === (23))){
var inst_59153 = (state_59174[(2)]);
var inst_59154 = com.wsscode.async.async_cljs.consumer_pair(inst_59153);
var state_59174__$1 = state_59174;
var statearr_59201_63412 = state_59174__$1;
(statearr_59201_63412[(2)] = inst_59154);

(statearr_59201_63412[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59175 === (19))){
var inst_59146 = (state_59174[(2)]);
var inst_59147 = com.wsscode.async.async_cljs.throw_err(inst_59146);
var state_59174__$1 = state_59174;
var statearr_59202_63414 = state_59174__$1;
(statearr_59202_63414[(2)] = inst_59147);

(statearr_59202_63414[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59175 === (11))){
var inst_59130 = (state_59174[(2)]);
var state_59174__$1 = state_59174;
var statearr_59203_63415 = state_59174__$1;
(statearr_59203_63415[(2)] = inst_59130);

(statearr_59203_63415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59175 === (9))){
var inst_59111 = (state_59174[(10)]);
var inst_59120 = com.wsscode.async.async_cljs.promise__GT_chan(inst_59111);
var state_59174__$1 = state_59174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59174__$1,(12),inst_59120);
} else {
if((state_val_59175 === (5))){
var inst_59111 = (state_59174[(10)]);
var state_59174__$1 = state_59174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59174__$1,(8),inst_59111);
} else {
if((state_val_59175 === (14))){
var state_59174__$1 = state_59174;
var statearr_59204_63416 = state_59174__$1;
(statearr_59204_63416[(2)] = null);

(statearr_59204_63416[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59175 === (26))){
var inst_59159 = (state_59174[(2)]);
var state_59174__$1 = state_59174;
var statearr_59205_63417 = state_59174__$1;
(statearr_59205_63417[(2)] = inst_59159);

(statearr_59205_63417[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59175 === (16))){
var inst_59142 = (state_59174[(7)]);
var state_59174__$1 = state_59174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59174__$1,(19),inst_59142);
} else {
if((state_val_59175 === (10))){
var state_59174__$1 = state_59174;
var statearr_59206_63419 = state_59174__$1;
(statearr_59206_63419[(1)] = (13));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59175 === (18))){
var inst_59163 = (state_59174[(2)]);
var state_59174__$1 = state_59174;
var statearr_59208_63420 = state_59174__$1;
(statearr_59208_63420[(2)] = inst_59163);


cljs.core.async.impl.ioc_helpers.process_exception(state_59174__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59175 === (8))){
var inst_59115 = (state_59174[(2)]);
var inst_59116 = com.wsscode.async.async_cljs.throw_err(inst_59115);
var state_59174__$1 = state_59174;
var statearr_59209_63421 = state_59174__$1;
(statearr_59209_63421[(2)] = inst_59116);

(statearr_59209_63421[(1)] = (7));


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
});})(c__47946__auto___63336,ch__53519__auto__,root,temp__5718__auto__,ast,available_data,process_start,plan,plan_STAR_,env__$1,path,map__59105,map__59105__$1,env,indexes,reader3_computed_plans,async_parser_QMARK_))
;
return ((function (switch__47663__auto__,c__47946__auto___63336,ch__53519__auto__,root,temp__5718__auto__,ast,available_data,process_start,plan,plan_STAR_,env__$1,path,map__59105,map__59105__$1,env,indexes,reader3_computed_plans,async_parser_QMARK_){
return (function() {
var com$wsscode$pathom$connect$reader3_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$reader3_$_state_machine__47664__auto____0 = (function (){
var statearr_59210 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59210[(0)] = com$wsscode$pathom$connect$reader3_$_state_machine__47664__auto__);

(statearr_59210[(1)] = (1));

return statearr_59210;
});
var com$wsscode$pathom$connect$reader3_$_state_machine__47664__auto____1 = (function (state_59174){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_59174);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e59211){if((e59211 instanceof Object)){
var ex__47667__auto__ = e59211;
var statearr_59212_63422 = state_59174;
(statearr_59212_63422[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_59174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59211;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63430 = state_59174;
state_59174 = G__63430;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$reader3_$_state_machine__47664__auto__ = function(state_59174){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$reader3_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$reader3_$_state_machine__47664__auto____1.call(this,state_59174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$reader3_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$reader3_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$reader3_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$reader3_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$reader3_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___63336,ch__53519__auto__,root,temp__5718__auto__,ast,available_data,process_start,plan,plan_STAR_,env__$1,path,map__59105,map__59105__$1,env,indexes,reader3_computed_plans,async_parser_QMARK_))
})();
var state__47948__auto__ = (function (){var statearr_59213 = f__47947__auto__();
(statearr_59213[(6)] = c__47946__auto___63336);

return statearr_59213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___63336,ch__53519__auto__,root,temp__5718__auto__,ast,available_data,process_start,plan,plan_STAR_,env__$1,path,map__59105,map__59105__$1,env,indexes,reader3_computed_plans,async_parser_QMARK_))
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
com.wsscode.pathom.connect.parallel_batch_error = (function com$wsscode$pathom$connect$parallel_batch_error(p__59214,e){
var map__59215 = p__59214;
var map__59215__$1 = (((((!((map__59215 == null))))?(((((map__59215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59215):map__59215);
var env = map__59215__$1;
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59215__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var map__59217 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var map__59217__$1 = (((((!((map__59217 == null))))?(((((map__59217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59217):map__59217);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59217__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var item_count = cljs.core.count(processing_sequence);
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-error","com.wsscode.pathom.connect/batch-result-error",-1587594017),new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),com.wsscode.pathom.core.process_error(env,e)], null));

var output_SINGLEQUOTE_ = com.wsscode.pathom.connect.output__GT_provides(output);
var base_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take_while.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword_QMARK_),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661).cljs$core$IFn$_invoke$arity$1(env));
var seq__59219_63432 = cljs.core.seq(output_SINGLEQUOTE_);
var chunk__59224_63433 = null;
var count__59225_63434 = (0);
var i__59226_63435 = (0);
while(true){
if((i__59226_63435 < count__59225_63434)){
var o_63436 = chunk__59224_63433.cljs$core$IIndexed$_nth$arity$2(null,i__59226_63435);
var seq__59227_63437 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(item_count));
var chunk__59228_63438 = null;
var count__59229_63439 = (0);
var i__59230_63440 = (0);
while(true){
if((i__59230_63440 < count__59229_63439)){
var i_63441 = chunk__59228_63438.cljs$core$IIndexed$_nth$arity$2(null,i__59230_63440);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),com.wsscode.pathom.misc.vconj(base_path,i_63441,o_63436)),e);


var G__63442 = seq__59227_63437;
var G__63443 = chunk__59228_63438;
var G__63444 = count__59229_63439;
var G__63445 = (i__59230_63440 + (1));
seq__59227_63437 = G__63442;
chunk__59228_63438 = G__63443;
count__59229_63439 = G__63444;
i__59230_63440 = G__63445;
continue;
} else {
var temp__5720__auto___63449 = cljs.core.seq(seq__59227_63437);
if(temp__5720__auto___63449){
var seq__59227_63451__$1 = temp__5720__auto___63449;
if(cljs.core.chunked_seq_QMARK_(seq__59227_63451__$1)){
var c__4550__auto___63452 = cljs.core.chunk_first(seq__59227_63451__$1);
var G__63453 = cljs.core.chunk_rest(seq__59227_63451__$1);
var G__63454 = c__4550__auto___63452;
var G__63455 = cljs.core.count(c__4550__auto___63452);
var G__63456 = (0);
seq__59227_63437 = G__63453;
chunk__59228_63438 = G__63454;
count__59229_63439 = G__63455;
i__59230_63440 = G__63456;
continue;
} else {
var i_63457 = cljs.core.first(seq__59227_63451__$1);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),com.wsscode.pathom.misc.vconj(base_path,i_63457,o_63436)),e);


var G__63458 = cljs.core.next(seq__59227_63451__$1);
var G__63459 = null;
var G__63460 = (0);
var G__63461 = (0);
seq__59227_63437 = G__63458;
chunk__59228_63438 = G__63459;
count__59229_63439 = G__63460;
i__59230_63440 = G__63461;
continue;
}
} else {
}
}
break;
}

var G__63464 = seq__59219_63432;
var G__63465 = chunk__59224_63433;
var G__63466 = count__59225_63434;
var G__63467 = (i__59226_63435 + (1));
seq__59219_63432 = G__63464;
chunk__59224_63433 = G__63465;
count__59225_63434 = G__63466;
i__59226_63435 = G__63467;
continue;
} else {
var temp__5720__auto___63468 = cljs.core.seq(seq__59219_63432);
if(temp__5720__auto___63468){
var seq__59219_63469__$1 = temp__5720__auto___63468;
if(cljs.core.chunked_seq_QMARK_(seq__59219_63469__$1)){
var c__4550__auto___63470 = cljs.core.chunk_first(seq__59219_63469__$1);
var G__63471 = cljs.core.chunk_rest(seq__59219_63469__$1);
var G__63472 = c__4550__auto___63470;
var G__63473 = cljs.core.count(c__4550__auto___63470);
var G__63474 = (0);
seq__59219_63432 = G__63471;
chunk__59224_63433 = G__63472;
count__59225_63434 = G__63473;
i__59226_63435 = G__63474;
continue;
} else {
var o_63475 = cljs.core.first(seq__59219_63469__$1);
var seq__59220_63476 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(item_count));
var chunk__59221_63477 = null;
var count__59222_63478 = (0);
var i__59223_63479 = (0);
while(true){
if((i__59223_63479 < count__59222_63478)){
var i_63482 = chunk__59221_63477.cljs$core$IIndexed$_nth$arity$2(null,i__59223_63479);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),com.wsscode.pathom.misc.vconj(base_path,i_63482,o_63475)),e);


var G__63483 = seq__59220_63476;
var G__63484 = chunk__59221_63477;
var G__63485 = count__59222_63478;
var G__63486 = (i__59223_63479 + (1));
seq__59220_63476 = G__63483;
chunk__59221_63477 = G__63484;
count__59222_63478 = G__63485;
i__59223_63479 = G__63486;
continue;
} else {
var temp__5720__auto___63487__$1 = cljs.core.seq(seq__59220_63476);
if(temp__5720__auto___63487__$1){
var seq__59220_63488__$1 = temp__5720__auto___63487__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59220_63488__$1)){
var c__4550__auto___63489 = cljs.core.chunk_first(seq__59220_63488__$1);
var G__63490 = cljs.core.chunk_rest(seq__59220_63488__$1);
var G__63491 = c__4550__auto___63489;
var G__63492 = cljs.core.count(c__4550__auto___63489);
var G__63493 = (0);
seq__59220_63476 = G__63490;
chunk__59221_63477 = G__63491;
count__59222_63478 = G__63492;
i__59223_63479 = G__63493;
continue;
} else {
var i_63496 = cljs.core.first(seq__59220_63488__$1);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),com.wsscode.pathom.misc.vconj(base_path,i_63496,o_63475)),e);


var G__63501 = cljs.core.next(seq__59220_63488__$1);
var G__63502 = null;
var G__63503 = (0);
var G__63504 = (0);
seq__59220_63476 = G__63501;
chunk__59221_63477 = G__63502;
count__59222_63478 = G__63503;
i__59223_63479 = G__63504;
continue;
}
} else {
}
}
break;
}

var G__63505 = cljs.core.next(seq__59219_63469__$1);
var G__63506 = null;
var G__63507 = (0);
var G__63508 = (0);
seq__59219_63432 = G__63505;
chunk__59224_63433 = G__63506;
count__59225_63434 = G__63507;
i__59226_63435 = G__63508;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__59231){
var vec__59232 = p__59231;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59232,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59232,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,input,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),i);
}),cljs.core.PersistentArrayMap.EMPTY,inputs);
});
com.wsscode.pathom.connect.parallel_batch = (function com$wsscode$pathom$connect$parallel_batch(p__59239){
var map__59240 = p__59239;
var map__59240__$1 = (((((!((map__59240 == null))))?(((((map__59240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59240):map__59240);
var env = map__59240__$1;
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59240__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59240__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59240__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___63518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache){
return (function (state_59718){
var state_val_59719 = (state_59718[(1)]);
if((state_val_59719 === (121))){
var inst_59634 = cljs.core.PersistentHashMap.EMPTY;
var state_59718__$1 = state_59718;
var statearr_59720_63523 = state_59718__$1;
(statearr_59720_63523[(2)] = inst_59634);

(statearr_59720_63523[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (65))){
var inst_59432 = (state_59718[(7)]);
var inst_59436 = cljs.core.chunk_first(inst_59432);
var inst_59437 = cljs.core.chunk_rest(inst_59432);
var inst_59438 = cljs.core.count(inst_59436);
var inst_59399 = inst_59437;
var inst_59400 = inst_59436;
var inst_59401 = inst_59438;
var inst_59402 = (0);
var state_59718__$1 = (function (){var statearr_59721 = state_59718;
(statearr_59721[(8)] = inst_59400);

(statearr_59721[(9)] = inst_59402);

(statearr_59721[(10)] = inst_59399);

(statearr_59721[(11)] = inst_59401);

return statearr_59721;
})();
var statearr_59722_63532 = state_59718__$1;
(statearr_59722_63532[(2)] = null);

(statearr_59722_63532[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (70))){
var inst_59432 = (state_59718[(7)]);
var inst_59462 = (state_59718[(2)]);
var inst_59463 = cljs.core.next(inst_59432);
var inst_59399 = inst_59463;
var inst_59400 = null;
var inst_59401 = (0);
var inst_59402 = (0);
var state_59718__$1 = (function (){var statearr_59723 = state_59718;
(statearr_59723[(12)] = inst_59462);

(statearr_59723[(8)] = inst_59400);

(statearr_59723[(9)] = inst_59402);

(statearr_59723[(10)] = inst_59399);

(statearr_59723[(11)] = inst_59401);

return statearr_59723;
})();
var statearr_59724_63537 = state_59718__$1;
(statearr_59724_63537[(2)] = null);

(statearr_59724_63537[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (62))){
var inst_59432 = (state_59718[(7)]);
var inst_59434 = cljs.core.chunked_seq_QMARK_(inst_59432);
var state_59718__$1 = state_59718;
if(inst_59434){
var statearr_59725_63540 = state_59718__$1;
(statearr_59725_63540[(1)] = (65));

} else {
var statearr_59726_63541 = state_59718__$1;
(statearr_59726_63541[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (74))){
var inst_59269 = (state_59718[(13)]);
var inst_59272 = (state_59718[(14)]);
var inst_59275 = (state_59718[(15)]);
var inst_59476 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59477 = [inst_59269,inst_59272,inst_59275];
var inst_59478 = (new cljs.core.PersistentVector(null,3,(5),inst_59476,inst_59477,null));
var inst_59479 = com.wsscode.pathom.core.cache_read(env,inst_59478);
var state_59718__$1 = state_59718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59718__$1,(77),inst_59479);
} else {
if((state_val_59719 === (110))){
var state_59718__$1 = state_59718;
var statearr_59727_63546 = state_59718__$1;
(statearr_59727_63546[(2)] = null);

(statearr_59727_63546[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (130))){
var inst_59663 = (state_59718[(16)]);
var inst_59673 = cljs.core.async.close_BANG_(inst_59663);
var state_59718__$1 = state_59718;
var statearr_59728_63548 = state_59718__$1;
(statearr_59728_63548[(2)] = inst_59673);

(statearr_59728_63548[(1)] = (131));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (128))){
var inst_59679 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
var statearr_59729_63549 = state_59718__$1;
(statearr_59729_63549[(2)] = inst_59679);

(statearr_59729_63549[(1)] = (125));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (7))){
var inst_59263 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
if(cljs.core.truth_(inst_59263)){
var statearr_59730_63551 = state_59718__$1;
(statearr_59730_63551[(1)] = (11));

} else {
var statearr_59731_63556 = state_59718__$1;
(statearr_59731_63556[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (59))){
var inst_59417 = (state_59718[(17)]);
var state_59718__$1 = state_59718;
var statearr_59732_63558 = state_59718__$1;
(statearr_59732_63558[(2)] = inst_59417);

(statearr_59732_63558[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (86))){
var state_59718__$1 = state_59718;
var statearr_59733_63559 = state_59718__$1;
(statearr_59733_63559[(2)] = true);

(statearr_59733_63559[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (20))){
var inst_59293 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
var statearr_59737_63560 = state_59718__$1;
(statearr_59737_63560[(2)] = inst_59293);

(statearr_59737_63560[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (72))){
var inst_59455 = cljs.core.PersistentHashMap.EMPTY;
var state_59718__$1 = state_59718;
var statearr_59738_63561 = state_59718__$1;
(statearr_59738_63561[(2)] = inst_59455);

(statearr_59738_63561[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (58))){
var inst_59400 = (state_59718[(8)]);
var inst_59402 = (state_59718[(9)]);
var inst_59399 = (state_59718[(10)]);
var inst_59401 = (state_59718[(11)]);
var inst_59428 = (state_59718[(2)]);
var inst_59429 = (inst_59402 + (1));
var tmp59734 = inst_59400;
var tmp59735 = inst_59399;
var tmp59736 = inst_59401;
var inst_59399__$1 = tmp59735;
var inst_59400__$1 = tmp59734;
var inst_59401__$1 = tmp59736;
var inst_59402__$1 = inst_59429;
var state_59718__$1 = (function (){var statearr_59739 = state_59718;
(statearr_59739[(8)] = inst_59400__$1);

(statearr_59739[(9)] = inst_59402__$1);

(statearr_59739[(10)] = inst_59399__$1);

(statearr_59739[(18)] = inst_59428);

(statearr_59739[(11)] = inst_59401__$1);

return statearr_59739;
})();
var statearr_59740_63565 = state_59718__$1;
(statearr_59740_63565[(2)] = null);

(statearr_59740_63565[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (60))){
var inst_59421 = cljs.core.PersistentHashMap.EMPTY;
var state_59718__$1 = state_59718;
var statearr_59741_63569 = state_59718__$1;
(statearr_59741_63569[(2)] = inst_59421);

(statearr_59741_63569[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (27))){
var inst_59323 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
var statearr_59742_63572 = state_59718__$1;
(statearr_59742_63572[(2)] = inst_59323);

(statearr_59742_63572[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (1))){
var state_59718__$1 = state_59718;
var statearr_59743_63573 = state_59718__$1;
(statearr_59743_63573[(2)] = null);

(statearr_59743_63573[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (69))){
var inst_59450 = (state_59718[(19)]);
var inst_59460 = cljs.core.async.close_BANG_(inst_59450);
var state_59718__$1 = state_59718;
var statearr_59744_63576 = state_59718__$1;
(statearr_59744_63576[(2)] = inst_59460);

(statearr_59744_63576[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (101))){
var inst_59564 = (state_59718[(2)]);
var inst_59565 = com.wsscode.async.async_cljs.throw_err(inst_59564);
var state_59718__$1 = state_59718;
var statearr_59745_63579 = state_59718__$1;
(statearr_59745_63579[(2)] = inst_59565);

(statearr_59745_63579[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (24))){
var inst_59326 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
if(cljs.core.truth_(inst_59326)){
var statearr_59746_63580 = state_59718__$1;
(statearr_59746_63580[(1)] = (28));

} else {
var statearr_59747_63581 = state_59718__$1;
(statearr_59747_63581[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (102))){
var inst_59560 = (state_59718[(20)]);
var inst_59569 = com.wsscode.async.async_cljs.promise__GT_chan(inst_59560);
var state_59718__$1 = state_59718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59718__$1,(105),inst_59569);
} else {
if((state_val_59719 === (135))){
var inst_59269 = (state_59718[(13)]);
var inst_59272 = (state_59718[(14)]);
var inst_59275 = (state_59718[(15)]);
var inst_59689 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59690 = [inst_59269,inst_59272,inst_59275];
var inst_59691 = (new cljs.core.PersistentVector(null,3,(5),inst_59689,inst_59690,null));
var inst_59692 = com.wsscode.pathom.core.cache_read(env,inst_59691);
var state_59718__$1 = state_59718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59718__$1,(138),inst_59692);
} else {
if((state_val_59719 === (55))){
var inst_59471 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
var statearr_59748_63597 = state_59718__$1;
(statearr_59748_63597[(2)] = inst_59471);

(statearr_59748_63597[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (85))){
var inst_59539 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
if(cljs.core.truth_(inst_59539)){
var statearr_59749_63598 = state_59718__$1;
(statearr_59749_63598[(1)] = (89));

} else {
var statearr_59750_63599 = state_59718__$1;
(statearr_59750_63599[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (39))){
var inst_59368 = (state_59718[(2)]);
var inst_59369 = com.wsscode.async.async_cljs.throw_err(inst_59368);
var state_59718__$1 = state_59718;
var statearr_59751_63605 = state_59718__$1;
(statearr_59751_63605[(2)] = inst_59369);


cljs.core.async.impl.ioc_helpers.process_exception(state_59718__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (88))){
var inst_59536 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
var statearr_59752_63608 = state_59718__$1;
(statearr_59752_63608[(2)] = inst_59536);

(statearr_59752_63608[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (46))){
var state_59718__$1 = state_59718;
var statearr_59753_63609 = state_59718__$1;
(statearr_59753_63609[(2)] = null);

(statearr_59753_63609[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (4))){
var inst_59247 = (state_59718[(21)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_59718,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_59247__$1 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_59249 = (inst_59247__$1 == null);
var inst_59250 = cljs.core.not(inst_59249);
var state_59718__$1 = (function (){var statearr_59754 = state_59718;
(statearr_59754[(21)] = inst_59247__$1);

return statearr_59754;
})();
if(inst_59250){
var statearr_59755_63611 = state_59718__$1;
(statearr_59755_63611[(1)] = (5));

} else {
var statearr_59756_63612 = state_59718__$1;
(statearr_59756_63612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (77))){
var inst_59481 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
var statearr_59760_63613 = state_59718__$1;
(statearr_59760_63613[(2)] = inst_59481);

(statearr_59760_63613[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (106))){
var inst_59560 = (state_59718[(20)]);
var state_59718__$1 = state_59718;
var statearr_59761_63614 = state_59718__$1;
(statearr_59761_63614[(2)] = inst_59560);

(statearr_59761_63614[(1)] = (108));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (119))){
var inst_59615 = (state_59718[(22)]);
var inst_59612 = (state_59718[(23)]);
var inst_59613 = (state_59718[(24)]);
var inst_59614 = (state_59718[(25)]);
var inst_59641 = (state_59718[(2)]);
var inst_59642 = (inst_59615 + (1));
var tmp59757 = inst_59612;
var tmp59758 = inst_59613;
var tmp59759 = inst_59614;
var inst_59612__$1 = tmp59757;
var inst_59613__$1 = tmp59758;
var inst_59614__$1 = tmp59759;
var inst_59615__$1 = inst_59642;
var state_59718__$1 = (function (){var statearr_59762 = state_59718;
(statearr_59762[(22)] = inst_59615__$1);

(statearr_59762[(23)] = inst_59612__$1);

(statearr_59762[(24)] = inst_59613__$1);

(statearr_59762[(25)] = inst_59614__$1);

(statearr_59762[(26)] = inst_59641);

return statearr_59762;
})();
var statearr_59763_63615 = state_59718__$1;
(statearr_59763_63615[(2)] = null);

(statearr_59763_63615[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (95))){
var inst_59584 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
var statearr_59764_63616 = state_59718__$1;
(statearr_59764_63616[(2)] = inst_59584);

(statearr_59764_63616[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (54))){
var inst_59432 = (state_59718[(7)]);
var inst_59399 = (state_59718[(10)]);
var inst_59432__$1 = cljs.core.seq(inst_59399);
var state_59718__$1 = (function (){var statearr_59765 = state_59718;
(statearr_59765[(7)] = inst_59432__$1);

return statearr_59765;
})();
if(inst_59432__$1){
var statearr_59766_63619 = state_59718__$1;
(statearr_59766_63619[(1)] = (62));

} else {
var statearr_59767_63620 = state_59718__$1;
(statearr_59767_63620[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (92))){
var state_59718__$1 = state_59718;
var statearr_59768_63621 = state_59718__$1;
(statearr_59768_63621[(2)] = null);

(statearr_59768_63621[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (141))){
var inst_59716 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59718__$1,inst_59716);
} else {
if((state_val_59719 === (137))){
var inst_59703 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
var statearr_59769_63623 = state_59718__$1;
(statearr_59769_63623[(2)] = inst_59703);

(statearr_59769_63623[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (104))){
var inst_59579 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
var statearr_59770_63624 = state_59718__$1;
(statearr_59770_63624[(2)] = inst_59579);

(statearr_59770_63624[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (15))){
var inst_59269 = (state_59718[(13)]);
var inst_59272 = (state_59718[(14)]);
var inst_59275 = (state_59718[(15)]);
var inst_59496 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59497 = [inst_59269,inst_59272,inst_59275];
var inst_59498 = (new cljs.core.PersistentVector(null,3,(5),inst_59496,inst_59497,null));
var inst_59499 = com.wsscode.pathom.core.cache_contains_QMARK_(env,inst_59498);
var state_59718__$1 = state_59718;
if(inst_59499){
var statearr_59771_63625 = state_59718__$1;
(statearr_59771_63625[(1)] = (78));

} else {
var statearr_59772_63626 = state_59718__$1;
(statearr_59772_63626[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (48))){
var inst_59282 = (state_59718[(27)]);
var inst_59274 = (state_59718[(28)]);
var inst_59268 = (state_59718[(29)]);
var inst_59374 = (state_59718[(30)]);
var inst_59382 = (state_59718[(31)]);
var inst_59278 = (state_59718[(32)]);
var inst_59306 = (state_59718[(33)]);
var inst_59339 = (state_59718[(34)]);
var inst_59381 = (state_59718[(35)]);
var inst_59269 = (state_59718[(13)]);
var inst_59331 = (state_59718[(36)]);
var inst_59333 = (state_59718[(37)]);
var inst_59307 = (state_59718[(38)]);
var inst_59272 = (state_59718[(14)]);
var inst_59270 = (state_59718[(39)]);
var inst_59332 = (state_59718[(40)]);
var inst_59275 = (state_59718[(15)]);
var inst_59379 = (state_59718[(41)]);
var inst_59389 = (function (){var input = inst_59270;
var items_map = inst_59307;
var cached = inst_59332;
var cached_set = inst_59382;
var linked_results = inst_59381;
var key = inst_59274;
var channels = inst_59339;
var _ = inst_59379;
var map__59246 = inst_59268;
var params = inst_59275;
var uncached = inst_59333;
var map__59295 = inst_59331;
var e = inst_59272;
var resolver_sym = inst_59269;
var trace_data = inst_59278;
var valid_inputs = inst_59306;
var batch_result = inst_59374;
var trace_id__27094__auto__ = inst_59282;
return ((function (input,items_map,cached,cached_set,linked_results,key,channels,_,map__59246,params,uncached,map__59295,e,resolver_sym,trace_data,valid_inputs,batch_result,trace_id__27094__auto__,inst_59282,inst_59274,inst_59268,inst_59374,inst_59382,inst_59278,inst_59306,inst_59339,inst_59381,inst_59269,inst_59331,inst_59333,inst_59307,inst_59272,inst_59270,inst_59332,inst_59275,inst_59379,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap(cache){
var path__$1 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),(cljs.core.count(path) - (2)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path__$1,input,items_map,cached,cached_set,linked_results,key,channels,_,map__59246,params,uncached,map__59295,e,resolver_sym,trace_data,valid_inputs,batch_result,trace_id__27094__auto__,inst_59282,inst_59274,inst_59268,inst_59374,inst_59382,inst_59278,inst_59306,inst_59339,inst_59381,inst_59269,inst_59331,inst_59333,inst_59307,inst_59272,inst_59270,inst_59332,inst_59275,inst_59379,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce(cache__$1,p__59773){
var vec__59774 = p__59773;
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59774,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59774,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__59774,item,result,path__$1,input,items_map,cached,cached_set,linked_results,key,channels,_,map__59246,params,uncached,map__59295,e,resolver_sym,trace_data,valid_inputs,batch_result,trace_id__27094__auto__,inst_59282,inst_59274,inst_59268,inst_59374,inst_59382,inst_59278,inst_59306,inst_59339,inst_59381,inst_59269,inst_59331,inst_59333,inst_59307,inst_59272,inst_59270,inst_59332,inst_59275,inst_59379,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce_$_entity_path_inner_reduce(cache__$2,index){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cache__$2,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,index),((function (vec__59774,item,result,path__$1,input,items_map,cached,cached_set,linked_results,key,channels,_,map__59246,params,uncached,map__59295,e,resolver_sym,trace_data,valid_inputs,batch_result,trace_id__27094__auto__,inst_59282,inst_59274,inst_59268,inst_59374,inst_59382,inst_59278,inst_59306,inst_59339,inst_59381,inst_59269,inst_59331,inst_59333,inst_59307,inst_59272,inst_59270,inst_59332,inst_59275,inst_59379,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__59238_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result,p1__59238_SHARP_], 0));
});})(vec__59774,item,result,path__$1,input,items_map,cached,cached_set,linked_results,key,channels,_,map__59246,params,uncached,map__59295,e,resolver_sym,trace_data,valid_inputs,batch_result,trace_id__27094__auto__,inst_59282,inst_59274,inst_59268,inst_59374,inst_59382,inst_59278,inst_59306,inst_59339,inst_59381,inst_59269,inst_59331,inst_59333,inst_59307,inst_59272,inst_59270,inst_59332,inst_59275,inst_59379,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache))
);
});})(vec__59774,item,result,path__$1,input,items_map,cached,cached_set,linked_results,key,channels,_,map__59246,params,uncached,map__59295,e,resolver_sym,trace_data,valid_inputs,batch_result,trace_id__27094__auto__,inst_59282,inst_59274,inst_59268,inst_59374,inst_59382,inst_59278,inst_59306,inst_59339,inst_59381,inst_59269,inst_59331,inst_59333,inst_59307,inst_59272,inst_59270,inst_59332,inst_59275,inst_59379,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache))
,cache__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_map,item));
});})(path__$1,input,items_map,cached,cached_set,linked_results,key,channels,_,map__59246,params,uncached,map__59295,e,resolver_sym,trace_data,valid_inputs,batch_result,trace_id__27094__auto__,inst_59282,inst_59274,inst_59268,inst_59374,inst_59382,inst_59278,inst_59306,inst_59339,inst_59381,inst_59269,inst_59331,inst_59333,inst_59307,inst_59272,inst_59270,inst_59332,inst_59275,inst_59379,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache))
,cache,cljs.core.zipmap(uncached,batch_result));
});
;})(input,items_map,cached,cached_set,linked_results,key,channels,_,map__59246,params,uncached,map__59295,e,resolver_sym,trace_data,valid_inputs,batch_result,trace_id__27094__auto__,inst_59282,inst_59274,inst_59268,inst_59374,inst_59382,inst_59278,inst_59306,inst_59339,inst_59381,inst_59269,inst_59331,inst_59333,inst_59307,inst_59272,inst_59270,inst_59332,inst_59275,inst_59379,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_59390 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(entity_path_cache,inst_59389);
var state_59718__$1 = state_59718;
var statearr_59777_63637 = state_59718__$1;
(statearr_59777_63637[(2)] = inst_59390);

(statearr_59777_63637[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (50))){
var inst_59381 = (state_59718[(35)]);
var inst_59393 = (state_59718[(2)]);
var inst_59398 = cljs.core.seq(inst_59381);
var inst_59399 = inst_59398;
var inst_59400 = null;
var inst_59401 = (0);
var inst_59402 = (0);
var state_59718__$1 = (function (){var statearr_59778 = state_59718;
(statearr_59778[(42)] = inst_59393);

(statearr_59778[(8)] = inst_59400);

(statearr_59778[(9)] = inst_59402);

(statearr_59778[(10)] = inst_59399);

(statearr_59778[(11)] = inst_59401);

return statearr_59778;
})();
var statearr_59779_63640 = state_59718__$1;
(statearr_59779_63640[(2)] = null);

(statearr_59779_63640[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (116))){
var inst_59684 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
var statearr_59780_63642 = state_59718__$1;
(statearr_59780_63642[(2)] = inst_59684);

(statearr_59780_63642[(1)] = (113));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (75))){
var inst_59381 = (state_59718[(35)]);
var inst_59272 = (state_59718[(14)]);
var inst_59483 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59484 = cljs.core.PersistentHashMap.EMPTY;
var inst_59485 = [null,inst_59484];
var inst_59486 = (new cljs.core.PersistentVector(null,2,(5),inst_59483,inst_59485,null));
var inst_59487 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_59381,inst_59272,inst_59486);
var inst_59488 = cljs.core.second(inst_59487);
var state_59718__$1 = state_59718;
var statearr_59781_63643 = state_59718__$1;
(statearr_59781_63643[(2)] = inst_59488);

(statearr_59781_63643[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (99))){
var inst_59560 = (state_59718[(20)]);
var inst_59567 = com.wsscode.async.async_cljs.promise_QMARK_(inst_59560);
var state_59718__$1 = state_59718;
if(cljs.core.truth_(inst_59567)){
var statearr_59782_63644 = state_59718__$1;
(statearr_59782_63644[(1)] = (102));

} else {
var statearr_59783_63645 = state_59718__$1;
(statearr_59783_63645[(1)] = (103));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (21))){
var inst_59310 = (state_59718[(43)]);
var inst_59282 = (state_59718[(27)]);
var inst_59274 = (state_59718[(28)]);
var inst_59268 = (state_59718[(29)]);
var inst_59278 = (state_59718[(32)]);
var inst_59306 = (state_59718[(33)]);
var inst_59269 = (state_59718[(13)]);
var inst_59307 = (state_59718[(38)]);
var inst_59272 = (state_59718[(14)]);
var inst_59296 = (state_59718[(44)]);
var inst_59270 = (state_59718[(39)]);
var inst_59300 = (state_59718[(45)]);
var inst_59275 = (state_59718[(15)]);
var inst_59304 = (state_59718[(2)]);
var inst_59305 = com.wsscode.async.async_cljs.throw_err(inst_59304);
var inst_59306__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_59296,inst_59300,inst_59305);
var inst_59307__$1 = com.wsscode.pathom.connect.group_input_indexes(inst_59306__$1);
var inst_59308 = (function (){var input = inst_59270;
var items_map = inst_59307__$1;
var key = inst_59274;
var map__59246 = inst_59268;
var params = inst_59275;
var e = inst_59272;
var resolver_sym = inst_59269;
var trace_data = inst_59278;
var valid_inputs = inst_59306__$1;
var trace_id__27094__auto__ = inst_59282;
return ((function (input,items_map,key,map__59246,params,e,resolver_sym,trace_data,valid_inputs,trace_id__27094__auto__,inst_59310,inst_59282,inst_59274,inst_59268,inst_59278,inst_59306,inst_59269,inst_59307,inst_59272,inst_59296,inst_59270,inst_59300,inst_59275,inst_59304,inst_59305,inst_59306__$1,inst_59307__$1,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__59237_SHARP_){
return com.wsscode.pathom.core.cache_contains_QMARK_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,p1__59237_SHARP_,params], null));
});
;})(input,items_map,key,map__59246,params,e,resolver_sym,trace_data,valid_inputs,trace_id__27094__auto__,inst_59310,inst_59282,inst_59274,inst_59268,inst_59278,inst_59306,inst_59269,inst_59307,inst_59272,inst_59296,inst_59270,inst_59300,inst_59275,inst_59304,inst_59305,inst_59306__$1,inst_59307__$1,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_59309 = cljs.core.keys(inst_59307__$1);
var inst_59310__$1 = cljs.core.group_by(inst_59308,inst_59309);
var inst_59312 = (inst_59310__$1 == null);
var inst_59313 = cljs.core.not(inst_59312);
var state_59718__$1 = (function (){var statearr_59784 = state_59718;
(statearr_59784[(43)] = inst_59310__$1);

(statearr_59784[(33)] = inst_59306__$1);

(statearr_59784[(38)] = inst_59307__$1);

return statearr_59784;
})();
if(inst_59313){
var statearr_59785_63650 = state_59718__$1;
(statearr_59785_63650[(1)] = (22));

} else {
var statearr_59786_63652 = state_59718__$1;
(statearr_59786_63652[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (31))){
var state_59718__$1 = state_59718;
var statearr_59787_63655 = state_59718__$1;
(statearr_59787_63655[(2)] = null);

(statearr_59787_63655[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (113))){
var inst_59595 = (state_59718[(46)]);
var inst_59272 = (state_59718[(14)]);
var inst_59686 = (state_59718[(2)]);
var inst_59687 = cljs.core.contains_QMARK_(inst_59595,inst_59272);
var state_59718__$1 = (function (){var statearr_59788 = state_59718;
(statearr_59788[(47)] = inst_59686);

return statearr_59788;
})();
if(inst_59687){
var statearr_59789_63656 = state_59718__$1;
(statearr_59789_63656[(1)] = (135));

} else {
var statearr_59790_63657 = state_59718__$1;
(statearr_59790_63657[(1)] = (136));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (32))){
var state_59718__$1 = state_59718;
var statearr_59791_63658 = state_59718__$1;
(statearr_59791_63658[(2)] = null);

(statearr_59791_63658[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (136))){
var inst_59594 = (state_59718[(48)]);
var inst_59272 = (state_59718[(14)]);
var inst_59696 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59697 = cljs.core.PersistentHashMap.EMPTY;
var inst_59698 = [null,inst_59697];
var inst_59699 = (new cljs.core.PersistentVector(null,2,(5),inst_59696,inst_59698,null));
var inst_59700 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_59594,inst_59272,inst_59699);
var inst_59701 = cljs.core.second(inst_59700);
var state_59718__$1 = state_59718;
var statearr_59792_63660 = state_59718__$1;
(statearr_59792_63660[(2)] = inst_59701);

(statearr_59792_63660[(1)] = (137));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (139))){
var inst_59712 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_59718__$1 = state_59718;
var statearr_59793_63662 = state_59718__$1;
(statearr_59793_63662[(2)] = inst_59712);

(statearr_59793_63662[(1)] = (141));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (40))){
var inst_59351 = (state_59718[(2)]);
var inst_59352 = com.wsscode.async.async_cljs.throw_err(inst_59351);
var state_59718__$1 = state_59718;
var statearr_59794_63665 = state_59718__$1;
(statearr_59794_63665[(2)] = inst_59352);

(statearr_59794_63665[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (129))){
var inst_59664 = (state_59718[(49)]);
var state_59718__$1 = state_59718;
if(cljs.core.truth_(inst_59664)){
var statearr_59795_63668 = state_59718__$1;
(statearr_59795_63668[(1)] = (132));

} else {
var statearr_59796_63670 = state_59718__$1;
(statearr_59796_63670[(1)] = (133));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (91))){
var inst_59274 = (state_59718[(28)]);
var inst_59519 = (state_59718[(50)]);
var inst_59268 = (state_59718[(29)]);
var inst_59278 = (state_59718[(32)]);
var inst_59545 = (state_59718[(51)]);
var inst_59546 = (state_59718[(52)]);
var inst_59269 = (state_59718[(13)]);
var inst_59520 = (state_59718[(53)]);
var inst_59272 = (state_59718[(14)]);
var inst_59270 = (state_59718[(39)]);
var inst_59275 = (state_59718[(15)]);
var inst_59544 = (state_59718[(54)]);
var inst_59544__$1 = (state_59718[(2)]);
var inst_59545__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59544__$1,true);
var inst_59546__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59544__$1,false);
var inst_59547 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_59548 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_59546__$1];
var inst_59549 = cljs.core.PersistentHashMap.fromArrays(inst_59547,inst_59548);
var inst_59550 = com.wsscode.pathom.trace.trace(env,inst_59549);
var inst_59551 = (function (){var input = inst_59270;
var items_map = inst_59520;
var map__59508 = inst_59544__$1;
var cached = inst_59545__$1;
var key = inst_59274;
var _ = inst_59550;
var map__59246 = inst_59268;
var params = inst_59275;
var uncached = inst_59546__$1;
var e = inst_59272;
var resolver_sym = inst_59269;
var trace_data = inst_59278;
var valid_inputs = inst_59519;
return ((function (input,items_map,map__59508,cached,key,_,map__59246,params,uncached,e,resolver_sym,trace_data,valid_inputs,inst_59274,inst_59519,inst_59268,inst_59278,inst_59545,inst_59546,inst_59269,inst_59520,inst_59272,inst_59270,inst_59275,inst_59544,inst_59544__$1,inst_59545__$1,inst_59546__$1,inst_59547,inst_59548,inst_59549,inst_59550,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache){
return (function (resolver_input){
var ch = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.core.cache_hit(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,resolver_input,params], null),ch);

return ch;
});
;})(input,items_map,map__59508,cached,key,_,map__59246,params,uncached,e,resolver_sym,trace_data,valid_inputs,inst_59274,inst_59519,inst_59268,inst_59278,inst_59545,inst_59546,inst_59269,inst_59520,inst_59272,inst_59270,inst_59275,inst_59544,inst_59544__$1,inst_59545__$1,inst_59546__$1,inst_59547,inst_59548,inst_59549,inst_59550,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_59552 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_59551,inst_59546__$1);
var inst_59553 = cljs.core.seq(inst_59546__$1);
var state_59718__$1 = (function (){var statearr_59797 = state_59718;
(statearr_59797[(51)] = inst_59545__$1);

(statearr_59797[(52)] = inst_59546__$1);

(statearr_59797[(55)] = inst_59552);

(statearr_59797[(54)] = inst_59544__$1);

return statearr_59797;
})();
if(inst_59553){
var statearr_59798_63680 = state_59718__$1;
(statearr_59798_63680[(1)] = (92));

} else {
var statearr_59799_63681 = state_59718__$1;
(statearr_59799_63681[(1)] = (93));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (117))){
var inst_59630 = (state_59718[(56)]);
var state_59718__$1 = state_59718;
if(cljs.core.truth_(inst_59630)){
var statearr_59800_63682 = state_59718__$1;
(statearr_59800_63682[(1)] = (120));

} else {
var statearr_59801_63683 = state_59718__$1;
(statearr_59801_63683[(1)] = (121));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (108))){
var inst_59577 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
var statearr_59802_63684 = state_59718__$1;
(statearr_59802_63684[(2)] = inst_59577);

(statearr_59802_63684[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (56))){
var inst_59417 = (state_59718[(17)]);
var state_59718__$1 = state_59718;
if(cljs.core.truth_(inst_59417)){
var statearr_59803_63685 = state_59718__$1;
(statearr_59803_63685[(1)] = (59));

} else {
var statearr_59804_63686 = state_59718__$1;
(statearr_59804_63686[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (33))){
var inst_59374 = (state_59718[(30)]);
var inst_59339 = (state_59718[(34)]);
var inst_59333 = (state_59718[(37)]);
var inst_59332 = (state_59718[(40)]);
var inst_59374__$1 = (state_59718[(2)]);
var inst_59375 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_59376 = cljs.core.count(inst_59374__$1);
var inst_59377 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_59376];
var inst_59378 = cljs.core.PersistentHashMap.fromArrays(inst_59375,inst_59377);
var inst_59379 = com.wsscode.pathom.trace.trace(env,inst_59378);
var inst_59380 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_59339,inst_59374__$1);
var inst_59381 = cljs.core.zipmap(inst_59333,inst_59380);
var inst_59382 = cljs.core.set(inst_59332);
var inst_59383 = cljs.core.first(inst_59374__$1);
var inst_59384 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_59383);
var inst_59385 = cljs.core.count(path);
var inst_59386 = (inst_59385 >= (2));
var inst_59387 = ((inst_59384) && (inst_59386));
var state_59718__$1 = (function (){var statearr_59805 = state_59718;
(statearr_59805[(30)] = inst_59374__$1);

(statearr_59805[(31)] = inst_59382);

(statearr_59805[(35)] = inst_59381);

(statearr_59805[(41)] = inst_59379);

return statearr_59805;
})();
if(cljs.core.truth_(inst_59387)){
var statearr_59806_63694 = state_59718__$1;
(statearr_59806_63694[(1)] = (48));

} else {
var statearr_59807_63695 = state_59718__$1;
(statearr_59807_63695[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (13))){
var inst_59274 = (state_59718[(28)]);
var inst_59268 = (state_59718[(29)]);
var inst_59269 = (state_59718[(13)]);
var inst_59272 = (state_59718[(14)]);
var inst_59270 = (state_59718[(39)]);
var inst_59268__$1 = (state_59718[(2)]);
var inst_59269__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59268__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var inst_59270__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59268__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_59271 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var inst_59272__$1 = cljs.core.select_keys(inst_59271,inst_59270__$1);
var inst_59273 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_59274__$1 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_59273);
var inst_59275 = com.wsscode.pathom.core.params(env);
var inst_59276 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_59277 = [inst_59274__$1,inst_59269__$1,inst_59272__$1];
var inst_59278 = cljs.core.PersistentHashMap.fromArrays(inst_59276,inst_59277);
var inst_59279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_59718__$1 = (function (){var statearr_59808 = state_59718;
(statearr_59808[(28)] = inst_59274__$1);

(statearr_59808[(29)] = inst_59268__$1);

(statearr_59808[(32)] = inst_59278);

(statearr_59808[(13)] = inst_59269__$1);

(statearr_59808[(14)] = inst_59272__$1);

(statearr_59808[(39)] = inst_59270__$1);

(statearr_59808[(15)] = inst_59275);

return statearr_59808;
})();
if(cljs.core.truth_(inst_59279)){
var statearr_59809_63704 = state_59718__$1;
(statearr_59809_63704[(1)] = (14));

} else {
var statearr_59810_63706 = state_59718__$1;
(statearr_59810_63706[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (22))){
var inst_59310 = (state_59718[(43)]);
var inst_59315 = inst_59310.cljs$lang$protocol_mask$partition0$;
var inst_59316 = (inst_59315 & (64));
var inst_59317 = inst_59310.cljs$core$ISeq$;
var inst_59318 = (cljs.core.PROTOCOL_SENTINEL === inst_59317);
var inst_59319 = ((inst_59316) || (inst_59318));
var state_59718__$1 = state_59718;
if(cljs.core.truth_(inst_59319)){
var statearr_59811_63709 = state_59718__$1;
(statearr_59811_63709[(1)] = (25));

} else {
var statearr_59812_63713 = state_59718__$1;
(statearr_59812_63713[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (90))){
var inst_59523 = (state_59718[(57)]);
var state_59718__$1 = state_59718;
var statearr_59813_63715 = state_59718__$1;
(statearr_59813_63715[(2)] = inst_59523);

(statearr_59813_63715[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (109))){
var inst_59274 = (state_59718[(28)]);
var inst_59519 = (state_59718[(50)]);
var inst_59268 = (state_59718[(29)]);
var inst_59594 = (state_59718[(48)]);
var inst_59278 = (state_59718[(32)]);
var inst_59592 = (state_59718[(58)]);
var inst_59545 = (state_59718[(51)]);
var inst_59546 = (state_59718[(52)]);
var inst_59552 = (state_59718[(55)]);
var inst_59595 = (state_59718[(46)]);
var inst_59269 = (state_59718[(13)]);
var inst_59587 = (state_59718[(59)]);
var inst_59520 = (state_59718[(53)]);
var inst_59272 = (state_59718[(14)]);
var inst_59270 = (state_59718[(39)]);
var inst_59275 = (state_59718[(15)]);
var inst_59544 = (state_59718[(54)]);
var inst_59602 = (function (){var input = inst_59270;
var items_map = inst_59520;
var map__59508 = inst_59544;
var cached = inst_59545;
var cached_set = inst_59595;
var linked_results = inst_59594;
var key = inst_59274;
var channels = inst_59552;
var _ = inst_59592;
var map__59246 = inst_59268;
var params = inst_59275;
var uncached = inst_59546;
var e = inst_59272;
var resolver_sym = inst_59269;
var trace_data = inst_59278;
var valid_inputs = inst_59519;
var batch_result = inst_59587;
return ((function (input,items_map,map__59508,cached,cached_set,linked_results,key,channels,_,map__59246,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_59274,inst_59519,inst_59268,inst_59594,inst_59278,inst_59592,inst_59545,inst_59546,inst_59552,inst_59595,inst_59269,inst_59587,inst_59520,inst_59272,inst_59270,inst_59275,inst_59544,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap(cache){
var path__$1 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),(cljs.core.count(path) - (2)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path__$1,input,items_map,map__59508,cached,cached_set,linked_results,key,channels,_,map__59246,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_59274,inst_59519,inst_59268,inst_59594,inst_59278,inst_59592,inst_59545,inst_59546,inst_59552,inst_59595,inst_59269,inst_59587,inst_59520,inst_59272,inst_59270,inst_59275,inst_59544,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce(cache__$1,p__59814){
var vec__59815 = p__59814;
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59815,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59815,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__59815,item,result,path__$1,input,items_map,map__59508,cached,cached_set,linked_results,key,channels,_,map__59246,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_59274,inst_59519,inst_59268,inst_59594,inst_59278,inst_59592,inst_59545,inst_59546,inst_59552,inst_59595,inst_59269,inst_59587,inst_59520,inst_59272,inst_59270,inst_59275,inst_59544,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce_$_entity_path_inner_reduce(cache__$2,index){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cache__$2,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,index),((function (vec__59815,item,result,path__$1,input,items_map,map__59508,cached,cached_set,linked_results,key,channels,_,map__59246,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_59274,inst_59519,inst_59268,inst_59594,inst_59278,inst_59592,inst_59545,inst_59546,inst_59552,inst_59595,inst_59269,inst_59587,inst_59520,inst_59272,inst_59270,inst_59275,inst_59544,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__59238_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result,p1__59238_SHARP_], 0));
});})(vec__59815,item,result,path__$1,input,items_map,map__59508,cached,cached_set,linked_results,key,channels,_,map__59246,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_59274,inst_59519,inst_59268,inst_59594,inst_59278,inst_59592,inst_59545,inst_59546,inst_59552,inst_59595,inst_59269,inst_59587,inst_59520,inst_59272,inst_59270,inst_59275,inst_59544,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache))
);
});})(vec__59815,item,result,path__$1,input,items_map,map__59508,cached,cached_set,linked_results,key,channels,_,map__59246,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_59274,inst_59519,inst_59268,inst_59594,inst_59278,inst_59592,inst_59545,inst_59546,inst_59552,inst_59595,inst_59269,inst_59587,inst_59520,inst_59272,inst_59270,inst_59275,inst_59544,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache))
,cache__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_map,item));
});})(path__$1,input,items_map,map__59508,cached,cached_set,linked_results,key,channels,_,map__59246,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_59274,inst_59519,inst_59268,inst_59594,inst_59278,inst_59592,inst_59545,inst_59546,inst_59552,inst_59595,inst_59269,inst_59587,inst_59520,inst_59272,inst_59270,inst_59275,inst_59544,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache))
,cache,cljs.core.zipmap(uncached,batch_result));
});
;})(input,items_map,map__59508,cached,cached_set,linked_results,key,channels,_,map__59246,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_59274,inst_59519,inst_59268,inst_59594,inst_59278,inst_59592,inst_59545,inst_59546,inst_59552,inst_59595,inst_59269,inst_59587,inst_59520,inst_59272,inst_59270,inst_59275,inst_59544,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_59603 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(entity_path_cache,inst_59602);
var state_59718__$1 = state_59718;
var statearr_59818_63735 = state_59718__$1;
(statearr_59818_63735[(2)] = inst_59603);

(statearr_59818_63735[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (36))){
var inst_59347 = (state_59718[(60)]);
var inst_59333 = (state_59718[(37)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_59718,(35),new cljs.core.Keyword(null,"default","default",-1987822328),null,(34));
var inst_59347__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_59333);
var inst_59348 = com.wsscode.async.async_cljs.chan_QMARK_(inst_59347__$1);
var state_59718__$1 = (function (){var statearr_59819 = state_59718;
(statearr_59819[(60)] = inst_59347__$1);

return statearr_59819;
})();
if(inst_59348){
var statearr_59820_63741 = state_59718__$1;
(statearr_59820_63741[(1)] = (37));

} else {
var statearr_59821_63742 = state_59718__$1;
(statearr_59821_63742[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (41))){
var inst_59347 = (state_59718[(60)]);
var inst_59356 = com.wsscode.async.async_cljs.promise__GT_chan(inst_59347);
var state_59718__$1 = state_59718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59718__$1,(44),inst_59356);
} else {
if((state_val_59719 === (118))){
var inst_59629 = (state_59718[(61)]);
var inst_59639 = cljs.core.async.close_BANG_(inst_59629);
var state_59718__$1 = state_59718;
var statearr_59822_63743 = state_59718__$1;
(statearr_59822_63743[(2)] = inst_59639);

(statearr_59822_63743[(1)] = (119));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (89))){
var inst_59523 = (state_59718[(57)]);
var inst_59541 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_59523);
var state_59718__$1 = state_59718;
var statearr_59823_63748 = state_59718__$1;
(statearr_59823_63748[(2)] = inst_59541);

(statearr_59823_63748[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (100))){
var inst_59581 = (state_59718[(2)]);
var inst_59582 = com.wsscode.async.async_cljs.throw_err(inst_59581);
var state_59718__$1 = state_59718;
var statearr_59824_63750 = state_59718__$1;
(statearr_59824_63750[(2)] = inst_59582);


cljs.core.async.impl.ioc_helpers.process_exception(state_59718__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (131))){
var inst_59645 = (state_59718[(62)]);
var inst_59675 = (state_59718[(2)]);
var inst_59676 = cljs.core.next(inst_59645);
var inst_59612 = inst_59676;
var inst_59613 = null;
var inst_59614 = (0);
var inst_59615 = (0);
var state_59718__$1 = (function (){var statearr_59825 = state_59718;
(statearr_59825[(22)] = inst_59615);

(statearr_59825[(63)] = inst_59675);

(statearr_59825[(23)] = inst_59612);

(statearr_59825[(24)] = inst_59613);

(statearr_59825[(25)] = inst_59614);

return statearr_59825;
})();
var statearr_59826_63754 = state_59718__$1;
(statearr_59826_63754[(2)] = null);

(statearr_59826_63754[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (122))){
var inst_59629 = (state_59718[(61)]);
var inst_59636 = (state_59718[(2)]);
var inst_59637 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_59629,inst_59636);
var state_59718__$1 = state_59718;
var statearr_59827_63755 = state_59718__$1;
(statearr_59827_63755[(2)] = inst_59637);

(statearr_59827_63755[(1)] = (119));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (43))){
var inst_59366 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
var statearr_59828_63756 = state_59718__$1;
(statearr_59828_63756[(2)] = inst_59366);

(statearr_59828_63756[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (61))){
var inst_59416 = (state_59718[(64)]);
var inst_59423 = (state_59718[(2)]);
var inst_59424 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_59416,inst_59423);
var state_59718__$1 = state_59718;
var statearr_59829_63757 = state_59718__$1;
(statearr_59829_63757[(2)] = inst_59424);

(statearr_59829_63757[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (29))){
var inst_59310 = (state_59718[(43)]);
var state_59718__$1 = state_59718;
var statearr_59830_63758 = state_59718__$1;
(statearr_59830_63758[(2)] = inst_59310);

(statearr_59830_63758[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (44))){
var inst_59358 = (state_59718[(2)]);
var inst_59359 = com.wsscode.async.async_cljs.consumer_pair(inst_59358);
var state_59718__$1 = state_59718;
var statearr_59831_63759 = state_59718__$1;
(statearr_59831_63759[(2)] = inst_59359);

(statearr_59831_63759[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (93))){
var state_59718__$1 = state_59718;
var statearr_59832_63760 = state_59718__$1;
(statearr_59832_63760[(2)] = null);

(statearr_59832_63760[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (6))){
var state_59718__$1 = state_59718;
var statearr_59833_63761 = state_59718__$1;
(statearr_59833_63761[(2)] = false);

(statearr_59833_63761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (111))){
var inst_59594 = (state_59718[(48)]);
var inst_59606 = (state_59718[(2)]);
var inst_59611 = cljs.core.seq(inst_59594);
var inst_59612 = inst_59611;
var inst_59613 = null;
var inst_59614 = (0);
var inst_59615 = (0);
var state_59718__$1 = (function (){var statearr_59834 = state_59718;
(statearr_59834[(22)] = inst_59615);

(statearr_59834[(23)] = inst_59612);

(statearr_59834[(24)] = inst_59613);

(statearr_59834[(25)] = inst_59614);

(statearr_59834[(65)] = inst_59606);

return statearr_59834;
})();
var statearr_59835_63763 = state_59718__$1;
(statearr_59835_63763[(2)] = null);

(statearr_59835_63763[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (28))){
var inst_59310 = (state_59718[(43)]);
var inst_59328 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_59310);
var state_59718__$1 = state_59718;
var statearr_59836_63764 = state_59718__$1;
(statearr_59836_63764[(2)] = inst_59328);

(statearr_59836_63764[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (134))){
var inst_59663 = (state_59718[(16)]);
var inst_59670 = (state_59718[(2)]);
var inst_59671 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_59663,inst_59670);
var state_59718__$1 = state_59718;
var statearr_59837_63765 = state_59718__$1;
(statearr_59837_63765[(2)] = inst_59671);

(statearr_59837_63765[(1)] = (131));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (64))){
var inst_59469 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
var statearr_59838_63766 = state_59718__$1;
(statearr_59838_63766[(2)] = inst_59469);

(statearr_59838_63766[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (103))){
var state_59718__$1 = state_59718;
var statearr_59839_63767 = state_59718__$1;
(statearr_59839_63767[(1)] = (106));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (51))){
var inst_59402 = (state_59718[(9)]);
var inst_59401 = (state_59718[(11)]);
var inst_59404 = (inst_59402 < inst_59401);
var inst_59405 = inst_59404;
var state_59718__$1 = state_59718;
if(cljs.core.truth_(inst_59405)){
var statearr_59841_63768 = state_59718__$1;
(statearr_59841_63768[(1)] = (53));

} else {
var statearr_59842_63769 = state_59718__$1;
(statearr_59842_63769[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (25))){
var state_59718__$1 = state_59718;
var statearr_59843_63771 = state_59718__$1;
(statearr_59843_63771[(2)] = true);

(statearr_59843_63771[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (34))){
var inst_59371 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
var statearr_59844_63772 = state_59718__$1;
(statearr_59844_63772[(2)] = inst_59371);

(statearr_59844_63772[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (125))){
var inst_59682 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
var statearr_59845_63773 = state_59718__$1;
(statearr_59845_63773[(2)] = inst_59682);

(statearr_59845_63773[(1)] = (116));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (17))){
var inst_59269 = (state_59718[(13)]);
var inst_59272 = (state_59718[(14)]);
var inst_59275 = (state_59718[(15)]);
var inst_59288 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59289 = [inst_59269,inst_59272,inst_59275];
var inst_59290 = (new cljs.core.PersistentVector(null,3,(5),inst_59288,inst_59289,null));
var inst_59291 = com.wsscode.pathom.core.cache_read(env,inst_59290);
var state_59718__$1 = state_59718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59718__$1,(20),inst_59291);
} else {
if((state_val_59719 === (3))){
var inst_59242 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
var statearr_59846_63774 = state_59718__$1;
(statearr_59846_63774[(2)] = inst_59242);


cljs.core.async.impl.ioc_helpers.process_exception(state_59718__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (12))){
var inst_59247 = (state_59718[(21)]);
var state_59718__$1 = state_59718;
var statearr_59847_63775 = state_59718__$1;
(statearr_59847_63775[(2)] = inst_59247);

(statearr_59847_63775[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (2))){
var inst_59709 = (state_59718[(66)]);
var inst_59709__$1 = (state_59718[(2)]);
var inst_59710 = (inst_59709__$1 == null);
var state_59718__$1 = (function (){var statearr_59848 = state_59718;
(statearr_59848[(66)] = inst_59709__$1);

return statearr_59848;
})();
if(cljs.core.truth_(inst_59710)){
var statearr_59849_63776 = state_59718__$1;
(statearr_59849_63776[(1)] = (139));

} else {
var statearr_59850_63777 = state_59718__$1;
(statearr_59850_63777[(1)] = (140));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (66))){
var inst_59432 = (state_59718[(7)]);
var inst_59451 = (state_59718[(67)]);
var inst_59447 = cljs.core.first(inst_59432);
var inst_59448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59447,(0),null);
var inst_59449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59447,(1),null);
var inst_59450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59449,(0),null);
var inst_59451__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59449,(1),null);
var state_59718__$1 = (function (){var statearr_59851 = state_59718;
(statearr_59851[(68)] = inst_59448);

(statearr_59851[(19)] = inst_59450);

(statearr_59851[(67)] = inst_59451__$1);

return statearr_59851;
})();
if(cljs.core.truth_(inst_59451__$1)){
var statearr_59852_63778 = state_59718__$1;
(statearr_59852_63778[(1)] = (68));

} else {
var statearr_59853_63779 = state_59718__$1;
(statearr_59853_63779[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (107))){
var state_59718__$1 = state_59718;
var statearr_59854_63780 = state_59718__$1;
(statearr_59854_63780[(2)] = null);

(statearr_59854_63780[(1)] = (108));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (23))){
var state_59718__$1 = state_59718;
var statearr_59855_63781 = state_59718__$1;
(statearr_59855_63781[(2)] = false);

(statearr_59855_63781[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (47))){
var inst_59364 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
var statearr_59856_63782 = state_59718__$1;
(statearr_59856_63782[(2)] = inst_59364);

(statearr_59856_63782[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (35))){
var inst_59342 = (state_59718[(2)]);
var inst_59343 = com.wsscode.pathom.connect.parallel_batch_error(env,inst_59342);
var state_59718__$1 = state_59718;
var statearr_59857_63783 = state_59718__$1;
(statearr_59857_63783[(2)] = inst_59343);


cljs.core.async.impl.ioc_helpers.process_exception(state_59718__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (127))){
var inst_59645 = (state_59718[(62)]);
var inst_59664 = (state_59718[(49)]);
var inst_59660 = cljs.core.first(inst_59645);
var inst_59661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59660,(0),null);
var inst_59662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59660,(1),null);
var inst_59663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59662,(0),null);
var inst_59664__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59662,(1),null);
var state_59718__$1 = (function (){var statearr_59858 = state_59718;
(statearr_59858[(69)] = inst_59661);

(statearr_59858[(49)] = inst_59664__$1);

(statearr_59858[(16)] = inst_59663);

return statearr_59858;
})();
if(cljs.core.truth_(inst_59664__$1)){
var statearr_59859_63784 = state_59718__$1;
(statearr_59859_63784[(1)] = (129));

} else {
var statearr_59860_63785 = state_59718__$1;
(statearr_59860_63785[(1)] = (130));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (82))){
var inst_59274 = (state_59718[(28)]);
var inst_59519 = (state_59718[(50)]);
var inst_59268 = (state_59718[(29)]);
var inst_59509 = (state_59718[(70)]);
var inst_59278 = (state_59718[(32)]);
var inst_59269 = (state_59718[(13)]);
var inst_59523 = (state_59718[(57)]);
var inst_59513 = (state_59718[(71)]);
var inst_59520 = (state_59718[(53)]);
var inst_59272 = (state_59718[(14)]);
var inst_59270 = (state_59718[(39)]);
var inst_59275 = (state_59718[(15)]);
var inst_59517 = (state_59718[(2)]);
var inst_59518 = com.wsscode.async.async_cljs.throw_err(inst_59517);
var inst_59519__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_59509,inst_59513,inst_59518);
var inst_59520__$1 = com.wsscode.pathom.connect.group_input_indexes(inst_59519__$1);
var inst_59521 = (function (){var input = inst_59270;
var items_map = inst_59520__$1;
var key = inst_59274;
var map__59246 = inst_59268;
var params = inst_59275;
var e = inst_59272;
var resolver_sym = inst_59269;
var trace_data = inst_59278;
var valid_inputs = inst_59519__$1;
return ((function (input,items_map,key,map__59246,params,e,resolver_sym,trace_data,valid_inputs,inst_59274,inst_59519,inst_59268,inst_59509,inst_59278,inst_59269,inst_59523,inst_59513,inst_59520,inst_59272,inst_59270,inst_59275,inst_59517,inst_59518,inst_59519__$1,inst_59520__$1,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__59237_SHARP_){
return com.wsscode.pathom.core.cache_contains_QMARK_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,p1__59237_SHARP_,params], null));
});
;})(input,items_map,key,map__59246,params,e,resolver_sym,trace_data,valid_inputs,inst_59274,inst_59519,inst_59268,inst_59509,inst_59278,inst_59269,inst_59523,inst_59513,inst_59520,inst_59272,inst_59270,inst_59275,inst_59517,inst_59518,inst_59519__$1,inst_59520__$1,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_59522 = cljs.core.keys(inst_59520__$1);
var inst_59523__$1 = cljs.core.group_by(inst_59521,inst_59522);
var inst_59525 = (inst_59523__$1 == null);
var inst_59526 = cljs.core.not(inst_59525);
var state_59718__$1 = (function (){var statearr_59861 = state_59718;
(statearr_59861[(50)] = inst_59519__$1);

(statearr_59861[(57)] = inst_59523__$1);

(statearr_59861[(53)] = inst_59520__$1);

return statearr_59861;
})();
if(inst_59526){
var statearr_59862_63790 = state_59718__$1;
(statearr_59862_63790[(1)] = (83));

} else {
var statearr_59863_63792 = state_59718__$1;
(statearr_59863_63792[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (76))){
var inst_59490 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
var statearr_59864_63795 = state_59718__$1;
(statearr_59864_63795[(2)] = inst_59490);

(statearr_59864_63795[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (97))){
var inst_59560 = (state_59718[(20)]);
var inst_59546 = (state_59718[(52)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_59718,(96),new cljs.core.Keyword(null,"default","default",-1987822328),null,(95));
var inst_59560__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_59546);
var inst_59561 = com.wsscode.async.async_cljs.chan_QMARK_(inst_59560__$1);
var state_59718__$1 = (function (){var statearr_59865 = state_59718;
(statearr_59865[(20)] = inst_59560__$1);

return statearr_59865;
})();
if(inst_59561){
var statearr_59866_63802 = state_59718__$1;
(statearr_59866_63802[(1)] = (98));

} else {
var statearr_59867_63803 = state_59718__$1;
(statearr_59867_63803[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (19))){
var inst_59282 = (state_59718[(27)]);
var inst_59278 = (state_59718[(32)]);
var inst_59492 = (state_59718[(2)]);
var inst_59493 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_59278,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_59494 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_59282,inst_59493);
var state_59718__$1 = (function (){var statearr_59868 = state_59718;
(statearr_59868[(72)] = inst_59494);

return statearr_59868;
})();
var statearr_59869_63806 = state_59718__$1;
(statearr_59869_63806[(2)] = inst_59492);

(statearr_59869_63806[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (57))){
var inst_59416 = (state_59718[(64)]);
var inst_59426 = cljs.core.async.close_BANG_(inst_59416);
var state_59718__$1 = state_59718;
var statearr_59870_63809 = state_59718__$1;
(statearr_59870_63809[(2)] = inst_59426);

(statearr_59870_63809[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (68))){
var inst_59451 = (state_59718[(67)]);
var state_59718__$1 = state_59718;
if(cljs.core.truth_(inst_59451)){
var statearr_59871_63814 = state_59718__$1;
(statearr_59871_63814[(1)] = (71));

} else {
var statearr_59872_63815 = state_59718__$1;
(statearr_59872_63815[(1)] = (72));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (11))){
var inst_59247 = (state_59718[(21)]);
var inst_59265 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_59247);
var state_59718__$1 = state_59718;
var statearr_59873_63819 = state_59718__$1;
(statearr_59873_63819[(2)] = inst_59265);

(statearr_59873_63819[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (115))){
var inst_59612 = (state_59718[(23)]);
var inst_59645 = (state_59718[(62)]);
var inst_59645__$1 = cljs.core.seq(inst_59612);
var state_59718__$1 = (function (){var statearr_59874 = state_59718;
(statearr_59874[(62)] = inst_59645__$1);

return statearr_59874;
})();
if(inst_59645__$1){
var statearr_59875_63824 = state_59718__$1;
(statearr_59875_63824[(1)] = (123));

} else {
var statearr_59876_63826 = state_59718__$1;
(statearr_59876_63826[(1)] = (124));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (9))){
var state_59718__$1 = state_59718;
var statearr_59877_63827 = state_59718__$1;
(statearr_59877_63827[(2)] = false);

(statearr_59877_63827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (5))){
var inst_59247 = (state_59718[(21)]);
var inst_59252 = inst_59247.cljs$lang$protocol_mask$partition0$;
var inst_59253 = (inst_59252 & (64));
var inst_59254 = inst_59247.cljs$core$ISeq$;
var inst_59255 = (cljs.core.PROTOCOL_SENTINEL === inst_59254);
var inst_59256 = ((inst_59253) || (inst_59255));
var state_59718__$1 = state_59718;
if(cljs.core.truth_(inst_59256)){
var statearr_59878_63829 = state_59718__$1;
(statearr_59878_63829[(1)] = (8));

} else {
var statearr_59879_63830 = state_59718__$1;
(statearr_59879_63830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (112))){
var inst_59615 = (state_59718[(22)]);
var inst_59614 = (state_59718[(25)]);
var inst_59617 = (inst_59615 < inst_59614);
var inst_59618 = inst_59617;
var state_59718__$1 = state_59718;
if(cljs.core.truth_(inst_59618)){
var statearr_59880_63831 = state_59718__$1;
(statearr_59880_63831[(1)] = (114));

} else {
var statearr_59881_63832 = state_59718__$1;
(statearr_59881_63832[(1)] = (115));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (83))){
var inst_59523 = (state_59718[(57)]);
var inst_59528 = inst_59523.cljs$lang$protocol_mask$partition0$;
var inst_59529 = (inst_59528 & (64));
var inst_59530 = inst_59523.cljs$core$ISeq$;
var inst_59531 = (cljs.core.PROTOCOL_SENTINEL === inst_59530);
var inst_59532 = ((inst_59529) || (inst_59531));
var state_59718__$1 = state_59718;
if(cljs.core.truth_(inst_59532)){
var statearr_59882_63833 = state_59718__$1;
(statearr_59882_63833[(1)] = (86));

} else {
var statearr_59883_63834 = state_59718__$1;
(statearr_59883_63834[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (138))){
var inst_59694 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
var statearr_59884_63835 = state_59718__$1;
(statearr_59884_63835[(2)] = inst_59694);

(statearr_59884_63835[(1)] = (137));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (14))){
var inst_59278 = (state_59718[(32)]);
var inst_59269 = (state_59718[(13)]);
var inst_59272 = (state_59718[(14)]);
var inst_59275 = (state_59718[(15)]);
var inst_59281 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_59278,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_59282 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_59281);
var inst_59283 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59284 = [inst_59269,inst_59272,inst_59275];
var inst_59285 = (new cljs.core.PersistentVector(null,3,(5),inst_59283,inst_59284,null));
var inst_59286 = com.wsscode.pathom.core.cache_contains_QMARK_(env,inst_59285);
var state_59718__$1 = (function (){var statearr_59885 = state_59718;
(statearr_59885[(27)] = inst_59282);

return statearr_59885;
})();
if(inst_59286){
var statearr_59886_63837 = state_59718__$1;
(statearr_59886_63837[(1)] = (17));

} else {
var statearr_59887_63838 = state_59718__$1;
(statearr_59887_63838[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (45))){
var inst_59347 = (state_59718[(60)]);
var state_59718__$1 = state_59718;
var statearr_59888_63844 = state_59718__$1;
(statearr_59888_63844[(2)] = inst_59347);

(statearr_59888_63844[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (53))){
var inst_59417 = (state_59718[(17)]);
var inst_59400 = (state_59718[(8)]);
var inst_59402 = (state_59718[(9)]);
var inst_59413 = cljs.core._nth(inst_59400,inst_59402);
var inst_59414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59413,(0),null);
var inst_59415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59413,(1),null);
var inst_59416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59415,(0),null);
var inst_59417__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59415,(1),null);
var state_59718__$1 = (function (){var statearr_59889 = state_59718;
(statearr_59889[(17)] = inst_59417__$1);

(statearr_59889[(73)] = inst_59414);

(statearr_59889[(64)] = inst_59416);

return statearr_59889;
})();
if(cljs.core.truth_(inst_59417__$1)){
var statearr_59890_63852 = state_59718__$1;
(statearr_59890_63852[(1)] = (56));

} else {
var statearr_59891_63854 = state_59718__$1;
(statearr_59891_63854[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (78))){
var inst_59269 = (state_59718[(13)]);
var inst_59272 = (state_59718[(14)]);
var inst_59275 = (state_59718[(15)]);
var inst_59501 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59502 = [inst_59269,inst_59272,inst_59275];
var inst_59503 = (new cljs.core.PersistentVector(null,3,(5),inst_59501,inst_59502,null));
var inst_59504 = com.wsscode.pathom.core.cache_read(env,inst_59503);
var state_59718__$1 = state_59718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59718__$1,(81),inst_59504);
} else {
if((state_val_59719 === (132))){
var inst_59664 = (state_59718[(49)]);
var state_59718__$1 = state_59718;
var statearr_59892_63860 = state_59718__$1;
(statearr_59892_63860[(2)] = inst_59664);

(statearr_59892_63860[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (26))){
var state_59718__$1 = state_59718;
var statearr_59893_63863 = state_59718__$1;
(statearr_59893_63863[(2)] = false);

(statearr_59893_63863[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (123))){
var inst_59645 = (state_59718[(62)]);
var inst_59647 = cljs.core.chunked_seq_QMARK_(inst_59645);
var state_59718__$1 = state_59718;
if(inst_59647){
var statearr_59894_63870 = state_59718__$1;
(statearr_59894_63870[(1)] = (126));

} else {
var statearr_59895_63871 = state_59718__$1;
(statearr_59895_63871[(1)] = (127));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (140))){
var inst_59709 = (state_59718[(66)]);
var inst_59714 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_59709);
var state_59718__$1 = state_59718;
var statearr_59896_63873 = state_59718__$1;
(statearr_59896_63873[(2)] = inst_59714);

(statearr_59896_63873[(1)] = (141));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (16))){
var inst_59707 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
var statearr_59897_63878 = state_59718__$1;
(statearr_59897_63878[(2)] = inst_59707);


cljs.core.async.impl.ioc_helpers.process_exception(state_59718__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (133))){
var inst_59668 = cljs.core.PersistentHashMap.EMPTY;
var state_59718__$1 = state_59718;
var statearr_59898_63880 = state_59718__$1;
(statearr_59898_63880[(2)] = inst_59668);

(statearr_59898_63880[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (81))){
var inst_59506 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
var statearr_59899_63882 = state_59718__$1;
(statearr_59899_63882[(2)] = inst_59506);

(statearr_59899_63882[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (120))){
var inst_59630 = (state_59718[(56)]);
var state_59718__$1 = state_59718;
var statearr_59900_63883 = state_59718__$1;
(statearr_59900_63883[(2)] = inst_59630);

(statearr_59900_63883[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (79))){
var inst_59274 = (state_59718[(28)]);
var inst_59268 = (state_59718[(29)]);
var inst_59278 = (state_59718[(32)]);
var inst_59269 = (state_59718[(13)]);
var inst_59272 = (state_59718[(14)]);
var inst_59270 = (state_59718[(39)]);
var inst_59275 = (state_59718[(15)]);
var inst_59509 = cljs.core.PersistentVector.EMPTY;
var inst_59510 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector);
var inst_59511 = (function (){var map__59246 = inst_59268;
var resolver_sym = inst_59269;
var input = inst_59270;
var e = inst_59272;
var key = inst_59274;
var params = inst_59275;
var trace_data = inst_59278;
return ((function (map__59246,resolver_sym,input,e,key,params,trace_data,inst_59274,inst_59268,inst_59278,inst_59269,inst_59272,inst_59270,inst_59275,inst_59509,inst_59510,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__59235_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(cljs.core.second(p1__59235_SHARP_),input);
});
;})(map__59246,resolver_sym,input,e,key,params,trace_data,inst_59274,inst_59268,inst_59278,inst_59269,inst_59272,inst_59270,inst_59275,inst_59509,inst_59510,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_59512 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_59511);
var inst_59513 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_59510,inst_59512);
var inst_59514 = (function (){var map__59246 = inst_59268;
var resolver_sym = inst_59269;
var input = inst_59270;
var e = inst_59272;
var key = inst_59274;
var params = inst_59275;
var trace_data = inst_59278;
return ((function (map__59246,resolver_sym,input,e,key,params,trace_data,inst_59274,inst_59268,inst_59278,inst_59269,inst_59272,inst_59270,inst_59275,inst_59509,inst_59510,inst_59511,inst_59512,inst_59513,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__59236_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__59236_SHARP_,input);
});
;})(map__59246,resolver_sym,input,e,key,params,trace_data,inst_59274,inst_59268,inst_59278,inst_59269,inst_59272,inst_59270,inst_59275,inst_59509,inst_59510,inst_59511,inst_59512,inst_59513,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_59515 = com.wsscode.pathom.connect.map_async_serial(inst_59514,processing_sequence);
var state_59718__$1 = (function (){var statearr_59901 = state_59718;
(statearr_59901[(70)] = inst_59509);

(statearr_59901[(71)] = inst_59513);

return statearr_59901;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59718__$1,(82),inst_59515);
} else {
if((state_val_59719 === (38))){
var inst_59347 = (state_59718[(60)]);
var inst_59354 = com.wsscode.async.async_cljs.promise_QMARK_(inst_59347);
var state_59718__$1 = state_59718;
if(cljs.core.truth_(inst_59354)){
var statearr_59902_63896 = state_59718__$1;
(statearr_59902_63896[(1)] = (41));

} else {
var statearr_59903_63897 = state_59718__$1;
(statearr_59903_63897[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (126))){
var inst_59645 = (state_59718[(62)]);
var inst_59649 = cljs.core.chunk_first(inst_59645);
var inst_59650 = cljs.core.chunk_rest(inst_59645);
var inst_59651 = cljs.core.count(inst_59649);
var inst_59612 = inst_59650;
var inst_59613 = inst_59649;
var inst_59614 = inst_59651;
var inst_59615 = (0);
var state_59718__$1 = (function (){var statearr_59904 = state_59718;
(statearr_59904[(22)] = inst_59615);

(statearr_59904[(23)] = inst_59612);

(statearr_59904[(24)] = inst_59613);

(statearr_59904[(25)] = inst_59614);

return statearr_59904;
})();
var statearr_59905_63904 = state_59718__$1;
(statearr_59905_63904[(2)] = null);

(statearr_59905_63904[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (98))){
var inst_59560 = (state_59718[(20)]);
var state_59718__$1 = state_59718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59718__$1,(101),inst_59560);
} else {
if((state_val_59719 === (124))){
var state_59718__$1 = state_59718;
var statearr_59906_63910 = state_59718__$1;
(statearr_59906_63910[(2)] = null);

(statearr_59906_63910[(1)] = (125));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (87))){
var state_59718__$1 = state_59718;
var statearr_59907_63911 = state_59718__$1;
(statearr_59907_63911[(2)] = false);

(statearr_59907_63911[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (30))){
var inst_59282 = (state_59718[(27)]);
var inst_59274 = (state_59718[(28)]);
var inst_59268 = (state_59718[(29)]);
var inst_59278 = (state_59718[(32)]);
var inst_59306 = (state_59718[(33)]);
var inst_59269 = (state_59718[(13)]);
var inst_59331 = (state_59718[(36)]);
var inst_59333 = (state_59718[(37)]);
var inst_59307 = (state_59718[(38)]);
var inst_59272 = (state_59718[(14)]);
var inst_59270 = (state_59718[(39)]);
var inst_59332 = (state_59718[(40)]);
var inst_59275 = (state_59718[(15)]);
var inst_59331__$1 = (state_59718[(2)]);
var inst_59332__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59331__$1,true);
var inst_59333__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59331__$1,false);
var inst_59334 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_59335 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_59333__$1];
var inst_59336 = cljs.core.PersistentHashMap.fromArrays(inst_59334,inst_59335);
var inst_59337 = com.wsscode.pathom.trace.trace(env,inst_59336);
var inst_59338 = (function (){var input = inst_59270;
var items_map = inst_59307;
var cached = inst_59332__$1;
var key = inst_59274;
var _ = inst_59337;
var map__59246 = inst_59268;
var params = inst_59275;
var uncached = inst_59333__$1;
var map__59295 = inst_59331__$1;
var e = inst_59272;
var resolver_sym = inst_59269;
var trace_data = inst_59278;
var valid_inputs = inst_59306;
var trace_id__27094__auto__ = inst_59282;
return ((function (input,items_map,cached,key,_,map__59246,params,uncached,map__59295,e,resolver_sym,trace_data,valid_inputs,trace_id__27094__auto__,inst_59282,inst_59274,inst_59268,inst_59278,inst_59306,inst_59269,inst_59331,inst_59333,inst_59307,inst_59272,inst_59270,inst_59332,inst_59275,inst_59331__$1,inst_59332__$1,inst_59333__$1,inst_59334,inst_59335,inst_59336,inst_59337,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache){
return (function (resolver_input){
var ch = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.core.cache_hit(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,resolver_input,params], null),ch);

return ch;
});
;})(input,items_map,cached,key,_,map__59246,params,uncached,map__59295,e,resolver_sym,trace_data,valid_inputs,trace_id__27094__auto__,inst_59282,inst_59274,inst_59268,inst_59278,inst_59306,inst_59269,inst_59331,inst_59333,inst_59307,inst_59272,inst_59270,inst_59332,inst_59275,inst_59331__$1,inst_59332__$1,inst_59333__$1,inst_59334,inst_59335,inst_59336,inst_59337,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_59339 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_59338,inst_59333__$1);
var inst_59340 = cljs.core.seq(inst_59333__$1);
var state_59718__$1 = (function (){var statearr_59908 = state_59718;
(statearr_59908[(34)] = inst_59339);

(statearr_59908[(36)] = inst_59331__$1);

(statearr_59908[(37)] = inst_59333__$1);

(statearr_59908[(40)] = inst_59332__$1);

return statearr_59908;
})();
if(inst_59340){
var statearr_59909_63933 = state_59718__$1;
(statearr_59909_63933[(1)] = (31));

} else {
var statearr_59910_63934 = state_59718__$1;
(statearr_59910_63934[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (73))){
var inst_59450 = (state_59718[(19)]);
var inst_59457 = (state_59718[(2)]);
var inst_59458 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_59450,inst_59457);
var state_59718__$1 = state_59718;
var statearr_59911_63939 = state_59718__$1;
(statearr_59911_63939[(2)] = inst_59458);

(statearr_59911_63939[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (96))){
var inst_59555 = (state_59718[(2)]);
var inst_59556 = com.wsscode.pathom.connect.parallel_batch_error(env,inst_59555);
var state_59718__$1 = state_59718;
var statearr_59912_63944 = state_59718__$1;
(statearr_59912_63944[(2)] = inst_59556);


cljs.core.async.impl.ioc_helpers.process_exception(state_59718__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (10))){
var inst_59260 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
var statearr_59913_63947 = state_59718__$1;
(statearr_59913_63947[(2)] = inst_59260);

(statearr_59913_63947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (18))){
var inst_59282 = (state_59718[(27)]);
var inst_59274 = (state_59718[(28)]);
var inst_59268 = (state_59718[(29)]);
var inst_59278 = (state_59718[(32)]);
var inst_59269 = (state_59718[(13)]);
var inst_59272 = (state_59718[(14)]);
var inst_59270 = (state_59718[(39)]);
var inst_59275 = (state_59718[(15)]);
var inst_59296 = cljs.core.PersistentVector.EMPTY;
var inst_59297 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector);
var inst_59298 = (function (){var map__59246 = inst_59268;
var resolver_sym = inst_59269;
var input = inst_59270;
var e = inst_59272;
var key = inst_59274;
var params = inst_59275;
var trace_data = inst_59278;
var trace_id__27094__auto__ = inst_59282;
return ((function (map__59246,resolver_sym,input,e,key,params,trace_data,trace_id__27094__auto__,inst_59282,inst_59274,inst_59268,inst_59278,inst_59269,inst_59272,inst_59270,inst_59275,inst_59296,inst_59297,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__59235_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(cljs.core.second(p1__59235_SHARP_),input);
});
;})(map__59246,resolver_sym,input,e,key,params,trace_data,trace_id__27094__auto__,inst_59282,inst_59274,inst_59268,inst_59278,inst_59269,inst_59272,inst_59270,inst_59275,inst_59296,inst_59297,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_59299 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_59298);
var inst_59300 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_59297,inst_59299);
var inst_59301 = (function (){var map__59246 = inst_59268;
var resolver_sym = inst_59269;
var input = inst_59270;
var e = inst_59272;
var key = inst_59274;
var params = inst_59275;
var trace_data = inst_59278;
var trace_id__27094__auto__ = inst_59282;
return ((function (map__59246,resolver_sym,input,e,key,params,trace_data,trace_id__27094__auto__,inst_59282,inst_59274,inst_59268,inst_59278,inst_59269,inst_59272,inst_59270,inst_59275,inst_59296,inst_59297,inst_59298,inst_59299,inst_59300,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__59236_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__59236_SHARP_,input);
});
;})(map__59246,resolver_sym,input,e,key,params,trace_data,trace_id__27094__auto__,inst_59282,inst_59274,inst_59268,inst_59278,inst_59269,inst_59272,inst_59270,inst_59275,inst_59296,inst_59297,inst_59298,inst_59299,inst_59300,state_val_59719,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_59302 = com.wsscode.pathom.connect.map_async_serial(inst_59301,processing_sequence);
var state_59718__$1 = (function (){var statearr_59914 = state_59718;
(statearr_59914[(44)] = inst_59296);

(statearr_59914[(45)] = inst_59300);

return statearr_59914;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59718__$1,(21),inst_59302);
} else {
if((state_val_59719 === (105))){
var inst_59571 = (state_59718[(2)]);
var inst_59572 = com.wsscode.async.async_cljs.consumer_pair(inst_59571);
var state_59718__$1 = state_59718;
var statearr_59915_63953 = state_59718__$1;
(statearr_59915_63953[(2)] = inst_59572);

(statearr_59915_63953[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (52))){
var inst_59382 = (state_59718[(31)]);
var inst_59272 = (state_59718[(14)]);
var inst_59473 = (state_59718[(2)]);
var inst_59474 = cljs.core.contains_QMARK_(inst_59382,inst_59272);
var state_59718__$1 = (function (){var statearr_59916 = state_59718;
(statearr_59916[(74)] = inst_59473);

return statearr_59916;
})();
if(inst_59474){
var statearr_59917_63958 = state_59718__$1;
(statearr_59917_63958[(1)] = (74));

} else {
var statearr_59918_63959 = state_59718__$1;
(statearr_59918_63959[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (114))){
var inst_59615 = (state_59718[(22)]);
var inst_59613 = (state_59718[(24)]);
var inst_59630 = (state_59718[(56)]);
var inst_59626 = cljs.core._nth(inst_59613,inst_59615);
var inst_59627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59626,(0),null);
var inst_59628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59626,(1),null);
var inst_59629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59628,(0),null);
var inst_59630__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59628,(1),null);
var state_59718__$1 = (function (){var statearr_59919 = state_59718;
(statearr_59919[(75)] = inst_59627);

(statearr_59919[(61)] = inst_59629);

(statearr_59919[(56)] = inst_59630__$1);

return statearr_59919;
})();
if(cljs.core.truth_(inst_59630__$1)){
var statearr_59920_63960 = state_59718__$1;
(statearr_59920_63960[(1)] = (117));

} else {
var statearr_59921_63961 = state_59718__$1;
(statearr_59921_63961[(1)] = (118));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (67))){
var inst_59466 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
var statearr_59922_63962 = state_59718__$1;
(statearr_59922_63962[(2)] = inst_59466);

(statearr_59922_63962[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (71))){
var inst_59451 = (state_59718[(67)]);
var state_59718__$1 = state_59718;
var statearr_59923_63965 = state_59718__$1;
(statearr_59923_63965[(2)] = inst_59451);

(statearr_59923_63965[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (42))){
var state_59718__$1 = state_59718;
var statearr_59924_63966 = state_59718__$1;
(statearr_59924_63966[(1)] = (45));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (80))){
var inst_59705 = (state_59718[(2)]);
var state_59718__$1 = state_59718;
var statearr_59926_63969 = state_59718__$1;
(statearr_59926_63969[(2)] = inst_59705);

(statearr_59926_63969[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (37))){
var inst_59347 = (state_59718[(60)]);
var state_59718__$1 = state_59718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59718__$1,(40),inst_59347);
} else {
if((state_val_59719 === (63))){
var state_59718__$1 = state_59718;
var statearr_59927_63972 = state_59718__$1;
(statearr_59927_63972[(2)] = null);

(statearr_59927_63972[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (94))){
var inst_59545 = (state_59718[(51)]);
var inst_59546 = (state_59718[(52)]);
var inst_59552 = (state_59718[(55)]);
var inst_59587 = (state_59718[(59)]);
var inst_59587__$1 = (state_59718[(2)]);
var inst_59588 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_59589 = cljs.core.count(inst_59587__$1);
var inst_59590 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_59589];
var inst_59591 = cljs.core.PersistentHashMap.fromArrays(inst_59588,inst_59590);
var inst_59592 = com.wsscode.pathom.trace.trace(env,inst_59591);
var inst_59593 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_59552,inst_59587__$1);
var inst_59594 = cljs.core.zipmap(inst_59546,inst_59593);
var inst_59595 = cljs.core.set(inst_59545);
var inst_59596 = cljs.core.first(inst_59587__$1);
var inst_59597 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_59596);
var inst_59598 = cljs.core.count(path);
var inst_59599 = (inst_59598 >= (2));
var inst_59600 = ((inst_59597) && (inst_59599));
var state_59718__$1 = (function (){var statearr_59928 = state_59718;
(statearr_59928[(48)] = inst_59594);

(statearr_59928[(58)] = inst_59592);

(statearr_59928[(46)] = inst_59595);

(statearr_59928[(59)] = inst_59587__$1);

return statearr_59928;
})();
if(cljs.core.truth_(inst_59600)){
var statearr_59929_63979 = state_59718__$1;
(statearr_59929_63979[(1)] = (109));

} else {
var statearr_59930_63980 = state_59718__$1;
(statearr_59930_63980[(1)] = (110));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (8))){
var state_59718__$1 = state_59718;
var statearr_59931_63981 = state_59718__$1;
(statearr_59931_63981[(2)] = true);

(statearr_59931_63981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (49))){
var state_59718__$1 = state_59718;
var statearr_59932_63983 = state_59718__$1;
(statearr_59932_63983[(2)] = null);

(statearr_59932_63983[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59719 === (84))){
var state_59718__$1 = state_59718;
var statearr_59933_63985 = state_59718__$1;
(statearr_59933_63985[(2)] = false);

(statearr_59933_63985[(1)] = (85));


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
});})(c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache))
;
return ((function (switch__47663__auto__,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache){
return (function() {
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__47664__auto____0 = (function (){
var statearr_59934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59934[(0)] = com$wsscode$pathom$connect$parallel_batch_$_state_machine__47664__auto__);

(statearr_59934[(1)] = (1));

return statearr_59934;
});
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__47664__auto____1 = (function (state_59718){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_59718);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e59935){if((e59935 instanceof Object)){
var ex__47667__auto__ = e59935;
var statearr_59936_63997 = state_59718;
(statearr_59936_63997[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_59718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59935;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63998 = state_59718;
state_59718 = G__63998;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_batch_$_state_machine__47664__auto__ = function(state_59718){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__47664__auto____1.call(this,state_59718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_batch_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_batch_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$parallel_batch_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_batch_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache))
})();
var state__47948__auto__ = (function (){var statearr_59937 = f__47947__auto__();
(statearr_59937[(6)] = c__47946__auto___63518);

return statearr_59937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___63518,ch__53519__auto__,map__59240,map__59240__$1,env,processing_sequence,path,entity_path_cache))
);


return ch__53519__auto__;
});
com.wsscode.pathom.connect.parallel_reader = (function com$wsscode$pathom$connect$parallel_reader(p__59941){
var map__59942 = p__59941;
var map__59942__$1 = (((((!((map__59942 == null))))?(((((map__59942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59942):map__59942);
var env = map__59942__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59942__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59942__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59942__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var waiting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59942__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278));
var temp__5718__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__59944 = temp__5718__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59944,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59944,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),out,new cljs.core.Keyword("com.wsscode.pathom.parser","response-stream","com.wsscode.pathom.parser/response-stream",1785550292),(function (){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var params = com.wsscode.pathom.core.params(env);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),plan);
var c__47946__auto___64003 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (state_60340){
var state_val_60341 = (state_60340[(1)]);
if((state_val_60341 === (65))){
var inst_60106 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60342_64006 = state_60340__$1;
(statearr_60342_64006[(2)] = inst_60106);


cljs.core.async.impl.ioc_helpers.process_exception(state_60340__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (70))){
var inst_60117 = (state_60340[(7)]);
var inst_60167 = cljs.core.map_QMARK_(inst_60117);
var state_60340__$1 = state_60340;
if(inst_60167){
var statearr_60343_64008 = state_60340__$1;
(statearr_60343_64008[(1)] = (80));

} else {
var statearr_60344_64010 = state_60340__$1;
(statearr_60344_64010[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (62))){
var inst_60097 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60345_64011 = state_60340__$1;
(statearr_60345_64011[(2)] = inst_60097);

(statearr_60345_64011[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (74))){
var inst_60165 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60346_64014 = state_60340__$1;
(statearr_60346_64014[(2)] = inst_60165);

(statearr_60346_64014[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (110))){
var inst_59960 = (state_60340[(8)]);
var inst_60272 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882));
var inst_60273 = cljs.core.zipmap(inst_59960,inst_60272);
var state_60340__$1 = state_60340;
var statearr_60347_64017 = state_60340__$1;
(statearr_60347_64017[(2)] = inst_60273);

(statearr_60347_64017[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (7))){
var inst_59979 = (state_60340[(9)]);
var inst_59984 = inst_59979.cljs$lang$protocol_mask$partition0$;
var inst_59985 = (inst_59984 & (64));
var inst_59986 = inst_59979.cljs$core$ISeq$;
var inst_59987 = (cljs.core.PROTOCOL_SENTINEL === inst_59986);
var inst_59988 = ((inst_59985) || (inst_59987));
var state_60340__$1 = state_60340;
if(cljs.core.truth_(inst_59988)){
var statearr_60350_64020 = state_60340__$1;
(statearr_60350_64020[(1)] = (10));

} else {
var statearr_60351_64021 = state_60340__$1;
(statearr_60351_64021[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (59))){
var inst_60091 = (state_60340[(2)]);
var inst_60092 = com.wsscode.async.async_cljs.consumer_pair(inst_60091);
var state_60340__$1 = state_60340;
var statearr_60352_64024 = state_60340__$1;
(statearr_60352_64024[(2)] = inst_60092);

(statearr_60352_64024[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (86))){
var inst_59959 = (state_60340[(10)]);
var inst_59961 = (state_60340[(11)]);
var inst_59968 = (state_60340[(12)]);
var inst_59960 = (state_60340[(8)]);
var inst_60179 = (state_60340[(13)]);
var inst_60188 = (state_60340[(2)]);
var inst_60189 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_59960,inst_60179);
var tmp60348 = inst_59959;
var tmp60349 = inst_59961;
var inst_59958 = inst_59968;
var inst_59959__$1 = tmp60348;
var inst_59960__$1 = inst_60189;
var inst_59961__$1 = tmp60349;
var state_60340__$1 = (function (){var statearr_60355 = state_60340;
(statearr_60355[(10)] = inst_59959__$1);

(statearr_60355[(11)] = inst_59961__$1);

(statearr_60355[(14)] = inst_60188);

(statearr_60355[(15)] = inst_59958);

(statearr_60355[(8)] = inst_59960__$1);

return statearr_60355;
})();
var statearr_60356_64029 = state_60340__$1;
(statearr_60356_64029[(2)] = null);

(statearr_60356_64029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (20))){
var inst_59961 = (state_60340[(11)]);
var inst_59974 = (state_60340[(16)]);
var inst_60040 = cljs.core.contains_QMARK_(inst_59961,inst_59974);
var state_60340__$1 = state_60340;
if(inst_60040){
var statearr_60357_64033 = state_60340__$1;
(statearr_60357_64033[(1)] = (30));

} else {
var statearr_60358_64034 = state_60340__$1;
(statearr_60358_64034[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (72))){
var inst_59959 = (state_60340[(10)]);
var inst_59961 = (state_60340[(11)]);
var inst_60128 = (state_60340[(17)]);
var inst_59968 = (state_60340[(12)]);
var inst_59960 = (state_60340[(8)]);
var inst_60131 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_59960,inst_60128);
var tmp60353 = inst_59959;
var tmp60354 = inst_59961;
var inst_59958 = inst_59968;
var inst_59959__$1 = tmp60353;
var inst_59960__$1 = inst_60131;
var inst_59961__$1 = tmp60354;
var state_60340__$1 = (function (){var statearr_60359 = state_60340;
(statearr_60359[(10)] = inst_59959__$1);

(statearr_60359[(11)] = inst_59961__$1);

(statearr_60359[(15)] = inst_59958);

(statearr_60359[(8)] = inst_59960__$1);

return statearr_60359;
})();
var statearr_60360_64035 = state_60340__$1;
(statearr_60360_64035[(2)] = null);

(statearr_60360_64035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (58))){
var inst_60099 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60361_64036 = state_60340__$1;
(statearr_60361_64036[(2)] = inst_60099);

(statearr_60361_64036[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (60))){
var inst_60080 = (state_60340[(18)]);
var state_60340__$1 = state_60340;
var statearr_60362_64037 = state_60340__$1;
(statearr_60362_64037[(2)] = inst_60080);

(statearr_60362_64037[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (27))){
var inst_60038 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60363_64042 = state_60340__$1;
(statearr_60363_64042[(2)] = inst_60038);

(statearr_60363_64042[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (1))){
var inst_59954 = cljs.core.seq(plan);
var inst_59955 = cljs.core.first(inst_59954);
var inst_59956 = cljs.core.next(inst_59954);
var inst_59957 = cljs.core.PersistentHashMap.EMPTY;
var inst_59958 = plan;
var inst_59959 = inst_59957;
var inst_59960 = out;
var inst_59961 = waiting;
var state_60340__$1 = (function (){var statearr_60364 = state_60340;
(statearr_60364[(19)] = inst_59955);

(statearr_60364[(20)] = inst_59956);

(statearr_60364[(10)] = inst_59959);

(statearr_60364[(11)] = inst_59961);

(statearr_60364[(15)] = inst_59958);

(statearr_60364[(8)] = inst_59960);

return statearr_60364;
})();
var statearr_60365_64043 = state_60340__$1;
(statearr_60365_64043[(2)] = null);

(statearr_60365_64043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (69))){
var inst_60128 = (state_60340[(17)]);
var inst_60005 = (state_60340[(21)]);
var inst_59974 = (state_60340[(16)]);
var inst_60126 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_60005);
var inst_60127 = cljs.core.keys(inst_60126);
var inst_60128__$1 = cljs.core.set(inst_60127);
var inst_60129 = cljs.core.contains_QMARK_(inst_60128__$1,inst_59974);
var state_60340__$1 = (function (){var statearr_60366 = state_60340;
(statearr_60366[(17)] = inst_60128__$1);

return statearr_60366;
})();
if(inst_60129){
var statearr_60367_64046 = state_60340__$1;
(statearr_60367_64046[(1)] = (72));

} else {
var statearr_60368_64047 = state_60340__$1;
(statearr_60368_64047[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (101))){
var inst_60118 = (state_60340[(22)]);
var inst_60117 = (state_60340[(7)]);
var inst_60247 = cljs.core.PersistentHashMap.EMPTY;
var inst_60248 = (inst_60118.cljs$core$IFn$_invoke$arity$2 ? inst_60118.cljs$core$IFn$_invoke$arity$2(inst_60247,inst_60117) : inst_60118.call(null,inst_60247,inst_60117));
var state_60340__$1 = state_60340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60340__$1,(104),inst_60248);
} else {
if((state_val_60341 === (24))){
var inst_60022 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
if(cljs.core.truth_(inst_60022)){
var statearr_60369_64048 = state_60340__$1;
(statearr_60369_64048[(1)] = (25));

} else {
var statearr_60370_64049 = state_60340__$1;
(statearr_60370_64049[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (102))){
var state_60340__$1 = state_60340;
var statearr_60371_64051 = state_60340__$1;
(statearr_60371_64051[(1)] = (112));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (55))){
var inst_60084 = (state_60340[(2)]);
var inst_60085 = com.wsscode.async.async_cljs.throw_err(inst_60084);
var state_60340__$1 = state_60340;
var statearr_60373_64054 = state_60340__$1;
(statearr_60373_64054[(2)] = inst_60085);

(statearr_60373_64054[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (85))){
var inst_60243 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60375_64055 = state_60340__$1;
(statearr_60375_64055[(2)] = inst_60243);

(statearr_60375_64055[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (39))){
var inst_60060 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60376_64057 = state_60340__$1;
(statearr_60376_64057[(2)] = inst_60060);

(statearr_60376_64057[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (88))){
var inst_59961 = (state_60340[(11)]);
var inst_60198 = (state_60340[(23)]);
var inst_60203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60198,(0),null);
var inst_60204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60198,(1),null);
var inst_60205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60198,(2),null);
var tmp60374 = inst_59961;
var inst_59958 = inst_60203;
var inst_59959 = inst_60204;
var inst_59960 = inst_60205;
var inst_59961__$1 = tmp60374;
var state_60340__$1 = (function (){var statearr_60377 = state_60340;
(statearr_60377[(10)] = inst_59959);

(statearr_60377[(11)] = inst_59961__$1);

(statearr_60377[(15)] = inst_59958);

(statearr_60377[(8)] = inst_59960);

return statearr_60377;
})();
var statearr_60378_64060 = state_60340__$1;
(statearr_60378_64060[(2)] = null);

(statearr_60378_64060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (46))){
var state_60340__$1 = state_60340;
var statearr_60379_64061 = state_60340__$1;
(statearr_60379_64061[(2)] = null);

(statearr_60379_64061[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (4))){
var inst_59967 = (state_60340[(24)]);
var inst_59975 = (state_60340[(25)]);
var inst_59979 = (state_60340[(9)]);
var inst_59974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59967,(0),null);
var inst_59975__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59967,(1),null);
var inst_59976 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59977 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),inst_59975__$1];
var inst_59978 = (new cljs.core.PersistentVector(null,2,(5),inst_59976,inst_59977,null));
var inst_59979__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_59978);
var inst_59981 = (inst_59979__$1 == null);
var inst_59982 = cljs.core.not(inst_59981);
var state_60340__$1 = (function (){var statearr_60380 = state_60340;
(statearr_60380[(16)] = inst_59974);

(statearr_60380[(25)] = inst_59975__$1);

(statearr_60380[(9)] = inst_59979__$1);

return statearr_60380;
})();
if(inst_59982){
var statearr_60381_64062 = state_60340__$1;
(statearr_60381_64062[(1)] = (7));

} else {
var statearr_60382_64063 = state_60340__$1;
(statearr_60382_64063[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (77))){
var inst_59974 = (state_60340[(16)]);
var inst_60151 = [new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_60152 = [inst_59974];
var inst_60153 = cljs.core.PersistentHashMap.fromArrays(inst_60151,inst_60152);
var inst_60154 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Waited key missed response",inst_60153);
var inst_60155 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_60156 = cljs.core.PersistentHashMap.EMPTY;
var inst_60157 = [out,inst_60154,inst_60156];
var inst_60158 = cljs.core.PersistentHashMap.fromArrays(inst_60155,inst_60157);
var state_60340__$1 = state_60340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60340__$1,(79),ch,inst_60158);
} else {
if((state_val_60341 === (106))){
var inst_60005 = (state_60340[(21)]);
var inst_59975 = (state_60340[(25)]);
var inst_59968 = (state_60340[(12)]);
var inst_60117 = (state_60340[(7)]);
var inst_60260 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_60261 = [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416),key,inst_59975];
var inst_60262 = cljs.core.PersistentHashMap.fromArrays(inst_60260,inst_60261);
var inst_60263 = com.wsscode.pathom.trace.trace(inst_60005,inst_60262);
var inst_60264 = com.wsscode.pathom.core.add_error(inst_60005,inst_60117);
var inst_60265 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_60266 = cljs.core.seq(inst_59968);
var state_60340__$1 = (function (){var statearr_60383 = state_60340;
(statearr_60383[(26)] = inst_60265);

(statearr_60383[(27)] = inst_60263);

(statearr_60383[(28)] = inst_60264);

return statearr_60383;
})();
if(inst_60266){
var statearr_60384_64067 = state_60340__$1;
(statearr_60384_64067[(1)] = (109));

} else {
var statearr_60385_64068 = state_60340__$1;
(statearr_60385_64068[(1)] = (110));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (119))){
var inst_60318 = (state_60340[(2)]);
var inst_60319 = cljs.core.async.close_BANG_(ch);
var state_60340__$1 = (function (){var statearr_60386 = state_60340;
(statearr_60386[(29)] = inst_60318);

return statearr_60386;
})();
var statearr_60387_64070 = state_60340__$1;
(statearr_60387_64070[(2)] = inst_60319);

(statearr_60387_64070[(1)] = (118));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (95))){
var inst_60169 = (state_60340[(30)]);
var inst_59974 = (state_60340[(16)]);
var inst_60225 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_60169,inst_59974,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_60340__$1 = state_60340;
var statearr_60388_64081 = state_60340__$1;
(statearr_60388_64081[(2)] = inst_60225);

(statearr_60388_64081[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (54))){
var inst_60101 = (state_60340[(31)]);
var inst_60101__$1 = (state_60340[(2)]);
var state_60340__$1 = (function (){var statearr_60389 = state_60340;
(statearr_60389[(31)] = inst_60101__$1);

return statearr_60389;
})();
if(cljs.core.truth_(inst_60101__$1)){
var statearr_60390_64082 = state_60340__$1;
(statearr_60390_64082[(1)] = (63));

} else {
var statearr_60391_64083 = state_60340__$1;
(statearr_60391_64083[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (92))){
var state_60340__$1 = state_60340;
var statearr_60392_64084 = state_60340__$1;
(statearr_60392_64084[(2)] = null);

(statearr_60392_64084[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (104))){
var inst_60250 = (state_60340[(32)]);
var inst_60250__$1 = (state_60340[(2)]);
var state_60340__$1 = (function (){var statearr_60393 = state_60340;
(statearr_60393[(32)] = inst_60250__$1);

return statearr_60393;
})();
if(cljs.core.truth_(inst_60250__$1)){
var statearr_60394_64087 = state_60340__$1;
(statearr_60394_64087[(1)] = (105));

} else {
var statearr_60395_64088 = state_60340__$1;
(statearr_60395_64088[(1)] = (106));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (15))){
var inst_60000 = (state_60340[(33)]);
var inst_60003 = (state_60340[(34)]);
var inst_60005 = (state_60340[(21)]);
var inst_59974 = (state_60340[(16)]);
var inst_59975 = (state_60340[(25)]);
var inst_60007 = (state_60340[(35)]);
var inst_60006 = (state_60340[(36)]);
var inst_60000__$1 = (state_60340[(2)]);
var inst_60001 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_60000__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_60002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60000__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_60003__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60000__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_60004 = com.wsscode.pathom.connect.resolver__GT_output(env__$1,inst_59975);
var inst_60005__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_60000__$1);
var inst_60006__$1 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_60005__$1);
var inst_60007__$1 = cljs.core.select_keys(inst_60006__$1,inst_60003__$1);
var inst_60008 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_60009 = [key,inst_59975,inst_60007__$1];
var inst_60010 = cljs.core.PersistentHashMap.fromArrays(inst_60008,inst_60009);
var inst_60011 = cljs.core.contains_QMARK_(inst_60006__$1,inst_59974);
var state_60340__$1 = (function (){var statearr_60396 = state_60340;
(statearr_60396[(33)] = inst_60000__$1);

(statearr_60396[(37)] = inst_60002);

(statearr_60396[(34)] = inst_60003__$1);

(statearr_60396[(38)] = inst_60010);

(statearr_60396[(39)] = inst_60001);

(statearr_60396[(21)] = inst_60005__$1);

(statearr_60396[(35)] = inst_60007__$1);

(statearr_60396[(36)] = inst_60006__$1);

(statearr_60396[(40)] = inst_60004);

return statearr_60396;
})();
if(inst_60011){
var statearr_60397_64089 = state_60340__$1;
(statearr_60397_64089[(1)] = (16));

} else {
var statearr_60398_64091 = state_60340__$1;
(statearr_60398_64091[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (48))){
var inst_60111 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60400_64092 = state_60340__$1;
(statearr_60400_64092[(2)] = inst_60111);

(statearr_60400_64092[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (50))){
var inst_60076 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60401_64093 = state_60340__$1;
(statearr_60401_64093[(2)] = inst_60076);


cljs.core.async.impl.ioc_helpers.process_exception(state_60340__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (116))){
var inst_59961 = (state_60340[(11)]);
var inst_60292 = (state_60340[(41)]);
var inst_60297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60292,(0),null);
var inst_60298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60292,(1),null);
var inst_60299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60292,(2),null);
var tmp60399 = inst_59961;
var inst_59958 = inst_60297;
var inst_59959 = inst_60298;
var inst_59960 = inst_60299;
var inst_59961__$1 = tmp60399;
var state_60340__$1 = (function (){var statearr_60402 = state_60340;
(statearr_60402[(10)] = inst_59959);

(statearr_60402[(11)] = inst_59961__$1);

(statearr_60402[(15)] = inst_59958);

(statearr_60402[(8)] = inst_59960);

return statearr_60402;
})();
var statearr_60403_64094 = state_60340__$1;
(statearr_60403_64094[(2)] = null);

(statearr_60403_64094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (75))){
var inst_60141 = (state_60340[(42)]);
var inst_60141__$1 = (state_60340[(2)]);
var state_60340__$1 = (function (){var statearr_60404 = state_60340;
(statearr_60404[(42)] = inst_60141__$1);

return statearr_60404;
})();
if(cljs.core.truth_(inst_60141__$1)){
var statearr_60405_64095 = state_60340__$1;
(statearr_60405_64095[(1)] = (76));

} else {
var statearr_60406_64096 = state_60340__$1;
(statearr_60406_64096[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (99))){
var inst_60228 = (state_60340[(43)]);
var state_60340__$1 = state_60340;
var statearr_60407_64097 = state_60340__$1;
(statearr_60407_64097[(2)] = inst_60228);

(statearr_60407_64097[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (21))){
var inst_60115 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60408_64098 = state_60340__$1;
(statearr_60408_64098[(2)] = inst_60115);

(statearr_60408_64098[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (31))){
var state_60340__$1 = state_60340;
var statearr_60409_64100 = state_60340__$1;
(statearr_60409_64100[(1)] = (46));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (113))){
var state_60340__$1 = state_60340;
var statearr_60411_64101 = state_60340__$1;
(statearr_60411_64101[(2)] = null);

(statearr_60411_64101[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (32))){
var inst_60113 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60412_64102 = state_60340__$1;
(statearr_60412_64102[(2)] = inst_60113);

(statearr_60412_64102[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (40))){
var inst_60047 = (state_60340[(44)]);
var inst_60065 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60047);
var state_60340__$1 = state_60340;
var statearr_60413_64103 = state_60340__$1;
(statearr_60413_64103[(2)] = inst_60065);

(statearr_60413_64103[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (91))){
var inst_60005 = (state_60340[(21)]);
var inst_60211 = (state_60340[(45)]);
var inst_60216 = com.wsscode.pathom.core.add_error(inst_60005,inst_60211);
var state_60340__$1 = state_60340;
var statearr_60414_64104 = state_60340__$1;
(statearr_60414_64104[(2)] = inst_60216);

(statearr_60414_64104[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (117))){
var inst_60005 = (state_60340[(21)]);
var inst_59975 = (state_60340[(25)]);
var inst_60117 = (state_60340[(7)]);
var inst_60302 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_60303 = [inst_60117];
var inst_60304 = cljs.core.PersistentHashMap.fromArrays(inst_60302,inst_60303);
var inst_60305 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_60304);
var inst_60306 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_60307 = [new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),key,inst_59975,inst_60117];
var inst_60308 = cljs.core.PersistentHashMap.fromArrays(inst_60306,inst_60307);
var inst_60309 = com.wsscode.pathom.trace.trace(inst_60005,inst_60308);
var inst_60310 = com.wsscode.pathom.core.add_error(inst_60005,inst_60305);
var inst_60311 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_60312 = [key];
var inst_60313 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_60314 = cljs.core.PersistentHashMap.fromArrays(inst_60312,inst_60313);
var inst_60315 = [out,inst_60305,inst_60314];
var inst_60316 = cljs.core.PersistentHashMap.fromArrays(inst_60311,inst_60315);
var state_60340__$1 = (function (){var statearr_60415 = state_60340;
(statearr_60415[(46)] = inst_60310);

(statearr_60415[(47)] = inst_60309);

return statearr_60415;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60340__$1,(119),ch,inst_60316);
} else {
if((state_val_60341 === (108))){
var inst_60279 = (state_60340[(2)]);
var inst_60280 = cljs.core.async.close_BANG_(ch);
var state_60340__$1 = (function (){var statearr_60416 = state_60340;
(statearr_60416[(48)] = inst_60279);

return statearr_60416;
})();
var statearr_60417_64105 = state_60340__$1;
(statearr_60417_64105[(2)] = inst_60280);

(statearr_60417_64105[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (56))){
var inst_60080 = (state_60340[(18)]);
var inst_60089 = com.wsscode.async.async_cljs.promise__GT_chan(inst_60080);
var state_60340__$1 = state_60340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60340__$1,(59),inst_60089);
} else {
if((state_val_60341 === (33))){
var inst_60047 = (state_60340[(44)]);
var inst_60047__$1 = (state_60340[(2)]);
var inst_60049 = (inst_60047__$1 == null);
var inst_60050 = cljs.core.not(inst_60049);
var state_60340__$1 = (function (){var statearr_60418 = state_60340;
(statearr_60418[(44)] = inst_60047__$1);

return statearr_60418;
})();
if(inst_60050){
var statearr_60419_64107 = state_60340__$1;
(statearr_60419_64107[(1)] = (34));

} else {
var statearr_60420_64108 = state_60340__$1;
(statearr_60420_64108[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (13))){
var inst_59979 = (state_60340[(9)]);
var inst_59997 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_59979);
var state_60340__$1 = state_60340;
var statearr_60421_64109 = state_60340__$1;
(statearr_60421_64109[(2)] = inst_59997);

(statearr_60421_64109[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (22))){
var state_60340__$1 = state_60340;
var statearr_60422_64111 = state_60340__$1;
(statearr_60422_64111[(2)] = processing_sequence);

(statearr_60422_64111[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (90))){
var inst_60241 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60423_64112 = state_60340__$1;
(statearr_60423_64112[(2)] = inst_60241);

(statearr_60423_64112[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (109))){
var inst_60268 = [key];
var inst_60269 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_60270 = cljs.core.PersistentHashMap.fromArrays(inst_60268,inst_60269);
var state_60340__$1 = state_60340;
var statearr_60424_64113 = state_60340__$1;
(statearr_60424_64113[(2)] = inst_60270);

(statearr_60424_64113[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (36))){
var inst_60063 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
if(cljs.core.truth_(inst_60063)){
var statearr_60425_64115 = state_60340__$1;
(statearr_60425_64115[(1)] = (40));

} else {
var statearr_60426_64116 = state_60340__$1;
(statearr_60426_64116[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (41))){
var inst_60047 = (state_60340[(44)]);
var state_60340__$1 = state_60340;
var statearr_60427_64119 = state_60340__$1;
(statearr_60427_64119[(2)] = inst_60047);

(statearr_60427_64119[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (118))){
var inst_60321 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60428_64120 = state_60340__$1;
(statearr_60428_64120[(2)] = inst_60321);

(statearr_60428_64120[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (89))){
var inst_60000 = (state_60340[(33)]);
var inst_60002 = (state_60340[(37)]);
var inst_59967 = (state_60340[(24)]);
var inst_59955 = (state_60340[(19)]);
var inst_60003 = (state_60340[(34)]);
var inst_59956 = (state_60340[(20)]);
var inst_60169 = (state_60340[(30)]);
var inst_59959 = (state_60340[(10)]);
var inst_60010 = (state_60340[(38)]);
var inst_59961 = (state_60340[(11)]);
var inst_60001 = (state_60340[(39)]);
var inst_60005 = (state_60340[(21)]);
var inst_59974 = (state_60340[(16)]);
var inst_59975 = (state_60340[(25)]);
var inst_59958 = (state_60340[(15)]);
var inst_60211 = (state_60340[(45)]);
var inst_59968 = (state_60340[(12)]);
var inst_60007 = (state_60340[(35)]);
var inst_59960 = (state_60340[(8)]);
var inst_60118 = (state_60340[(22)]);
var inst_60006 = (state_60340[(36)]);
var inst_60198 = (state_60340[(23)]);
var inst_60004 = (state_60340[(40)]);
var inst_60208 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_60209 = [inst_60169,inst_59974];
var inst_60210 = cljs.core.PersistentHashMap.fromArrays(inst_60208,inst_60209);
var inst_60211__$1 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_60210);
var inst_60212 = (function (){var input = inst_60003;
var G__59950 = inst_59958;
var step = inst_59967;
var entity = inst_60006;
var key_SINGLEQUOTE_ = inst_59974;
var vec__59970 = inst_59967;
var response = inst_60169;
var seq__59952 = inst_59956;
var vec__59951 = plan;
var cache_QMARK_ = inst_60001;
var seq__59964 = inst_59968;
var out_left = inst_59960;
var failed_resolvers = inst_59959;
var temp__5718__auto____$1 = inst_60198;
var err = inst_60211__$1;
var batch_QMARK_ = inst_60002;
var output = inst_60004;
var env__$2 = inst_60005;
var e = inst_60007;
var resolver_sym = inst_59975;
var map__59973 = inst_60000;
var waiting__$1 = inst_59961;
var trace_data = inst_60010;
var resolver = inst_60000;
var first__59965 = inst_59967;
var replan = inst_60118;
var vec__59963 = inst_59958;
var tail = inst_59968;
var first__59953 = inst_59955;
return ((function (input,G__59950,step,entity,key_SINGLEQUOTE_,vec__59970,response,seq__59952,vec__59951,cache_QMARK_,seq__59964,out_left,failed_resolvers,temp__5718__auto____$1,err,batch_QMARK_,output,env__$2,e,resolver_sym,map__59973,waiting__$1,trace_data,resolver,first__59965,replan,vec__59963,tail,first__59953,inst_60000,inst_60002,inst_59967,inst_59955,inst_60003,inst_59956,inst_60169,inst_59959,inst_60010,inst_59961,inst_60001,inst_60005,inst_59974,inst_59975,inst_59958,inst_60211,inst_59968,inst_60007,inst_59960,inst_60118,inst_60006,inst_60198,inst_60004,inst_60208,inst_60209,inst_60210,inst_60211__$1,state_val_60341,c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (p1__59940_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__59940_SHARP_], 0));
});
;})(input,G__59950,step,entity,key_SINGLEQUOTE_,vec__59970,response,seq__59952,vec__59951,cache_QMARK_,seq__59964,out_left,failed_resolvers,temp__5718__auto____$1,err,batch_QMARK_,output,env__$2,e,resolver_sym,map__59973,waiting__$1,trace_data,resolver,first__59965,replan,vec__59963,tail,first__59953,inst_60000,inst_60002,inst_59967,inst_59955,inst_60003,inst_59956,inst_60169,inst_59959,inst_60010,inst_59961,inst_60001,inst_60005,inst_59974,inst_59975,inst_59958,inst_60211,inst_59968,inst_60007,inst_59960,inst_60118,inst_60006,inst_60198,inst_60004,inst_60208,inst_60209,inst_60210,inst_60211__$1,state_val_60341,c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_60213 = com.wsscode.pathom.core.swap_entity_BANG_(inst_60005,inst_60212);
var inst_60214 = cljs.core.seq(inst_59968);
var state_60340__$1 = (function (){var statearr_60429 = state_60340;
(statearr_60429[(49)] = inst_60213);

(statearr_60429[(45)] = inst_60211__$1);

return statearr_60429;
})();
if(inst_60214){
var statearr_60430_64135 = state_60340__$1;
(statearr_60430_64135[(1)] = (91));

} else {
var statearr_60431_64136 = state_60340__$1;
(statearr_60431_64136[(1)] = (92));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (100))){
var inst_60220 = (state_60340[(50)]);
var inst_60211 = (state_60340[(45)]);
var inst_60234 = (state_60340[(2)]);
var inst_60235 = [out,inst_60211,inst_60234];
var inst_60236 = cljs.core.PersistentHashMap.fromArrays(inst_60220,inst_60235);
var state_60340__$1 = state_60340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60340__$1,(94),ch,inst_60236);
} else {
if((state_val_60341 === (43))){
var inst_60069 = (state_60340[(51)]);
var state_60340__$1 = state_60340;
var statearr_60432_64137 = state_60340__$1;
(statearr_60432_64137[(2)] = inst_60069);

(statearr_60432_64137[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (61))){
var state_60340__$1 = state_60340;
var statearr_60433_64138 = state_60340__$1;
(statearr_60433_64138[(2)] = null);

(statearr_60433_64138[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (29))){
var inst_60036 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60434_64141 = state_60340__$1;
(statearr_60434_64141[(2)] = inst_60036);

(statearr_60434_64141[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (44))){
var state_60340__$1 = state_60340;
var statearr_60435_64142 = state_60340__$1;
(statearr_60435_64142[(2)] = new cljs.core.Keyword("com.wsscode.pathom.connect","watch-ready","com.wsscode.pathom.connect/watch-ready",943560359));

(statearr_60435_64142[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (93))){
var inst_60169 = (state_60340[(30)]);
var inst_59974 = (state_60340[(16)]);
var inst_60219 = (state_60340[(2)]);
var inst_60220 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_60222 = cljs.core.contains_QMARK_(inst_60169,inst_59974);
var inst_60223 = (!(inst_60222));
var state_60340__$1 = (function (){var statearr_60436 = state_60340;
(statearr_60436[(50)] = inst_60220);

(statearr_60436[(52)] = inst_60219);

return statearr_60436;
})();
if(inst_60223){
var statearr_60437_64145 = state_60340__$1;
(statearr_60437_64145[(1)] = (95));

} else {
var statearr_60438_64146 = state_60340__$1;
(statearr_60438_64146[(1)] = (96));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (6))){
var inst_60336 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60439_64147 = state_60340__$1;
(statearr_60439_64147[(2)] = inst_60336);

(statearr_60439_64147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (111))){
var inst_60265 = (state_60340[(26)]);
var inst_60117 = (state_60340[(7)]);
var inst_60275 = (state_60340[(2)]);
var inst_60276 = [out,inst_60117,inst_60275];
var inst_60277 = cljs.core.PersistentHashMap.fromArrays(inst_60265,inst_60276);
var state_60340__$1 = state_60340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60340__$1,(108),ch,inst_60277);
} else {
if((state_val_60341 === (28))){
var inst_60026 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60440_64152 = state_60340__$1;
(statearr_60440_64152[(2)] = inst_60026);

(statearr_60440_64152[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (64))){
var inst_60104 = cljs.core.PersistentHashMap.EMPTY;
var state_60340__$1 = state_60340;
var statearr_60441_64153 = state_60340__$1;
(statearr_60441_64153[(2)] = inst_60104);

(statearr_60441_64153[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (103))){
var inst_60326 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60442_64157 = state_60340__$1;
(statearr_60442_64157[(2)] = inst_60326);

(statearr_60442_64157[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (51))){
var inst_60080 = (state_60340[(18)]);
var inst_60005 = (state_60340[(21)]);
var inst_60007 = (state_60340[(35)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_60340,(50),new cljs.core.Keyword(null,"default","default",-1987822328),null,(49));
var inst_60080__$1 = com.wsscode.pathom.connect.call_resolver(inst_60005,inst_60007);
var inst_60081 = com.wsscode.async.async_cljs.chan_QMARK_(inst_60080__$1);
var state_60340__$1 = (function (){var statearr_60443 = state_60340;
(statearr_60443[(18)] = inst_60080__$1);

return statearr_60443;
})();
if(inst_60081){
var statearr_60444_64161 = state_60340__$1;
(statearr_60444_64161[(1)] = (52));

} else {
var statearr_60445_64162 = state_60340__$1;
(statearr_60445_64162[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (25))){
var inst_60005 = (state_60340[(21)]);
var inst_60024 = com.wsscode.pathom.connect.parallel_batch(inst_60005);
var state_60340__$1 = state_60340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60340__$1,(28),inst_60024);
} else {
if((state_val_60341 === (34))){
var inst_60047 = (state_60340[(44)]);
var inst_60052 = inst_60047.cljs$lang$protocol_mask$partition0$;
var inst_60053 = (inst_60052 & (64));
var inst_60054 = inst_60047.cljs$core$ISeq$;
var inst_60055 = (cljs.core.PROTOCOL_SENTINEL === inst_60054);
var inst_60056 = ((inst_60053) || (inst_60055));
var state_60340__$1 = state_60340;
if(cljs.core.truth_(inst_60056)){
var statearr_60446_64166 = state_60340__$1;
(statearr_60446_64166[(1)] = (37));

} else {
var statearr_60447_64167 = state_60340__$1;
(statearr_60447_64167[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (17))){
var inst_60001 = (state_60340[(39)]);
var state_60340__$1 = state_60340;
if(cljs.core.truth_(inst_60001)){
var statearr_60448_64168 = state_60340__$1;
(statearr_60448_64168[(1)] = (19));

} else {
var statearr_60449_64169 = state_60340__$1;
(statearr_60449_64169[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (3))){
var inst_60338 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60340__$1,inst_60338);
} else {
if((state_val_60341 === (12))){
var inst_59992 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60452_64170 = state_60340__$1;
(statearr_60452_64170[(2)] = inst_59992);

(statearr_60452_64170[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (2))){
var inst_59967 = (state_60340[(24)]);
var inst_59958 = (state_60340[(15)]);
var inst_59966 = cljs.core.seq(inst_59958);
var inst_59967__$1 = cljs.core.first(inst_59966);
var inst_59968 = cljs.core.next(inst_59966);
var state_60340__$1 = (function (){var statearr_60453 = state_60340;
(statearr_60453[(24)] = inst_59967__$1);

(statearr_60453[(12)] = inst_59968);

return statearr_60453;
})();
if(cljs.core.truth_(inst_59967__$1)){
var statearr_60454_64171 = state_60340__$1;
(statearr_60454_64171[(1)] = (4));

} else {
var statearr_60455_64173 = state_60340__$1;
(statearr_60455_64173[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (66))){
var inst_59959 = (state_60340[(10)]);
var inst_59961 = (state_60340[(11)]);
var inst_59974 = (state_60340[(16)]);
var inst_59960 = (state_60340[(8)]);
var inst_60121 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(inst_59961,inst_59974);
var tmp60450 = inst_59959;
var tmp60451 = inst_59960;
var inst_59958 = plan;
var inst_59959__$1 = tmp60450;
var inst_59960__$1 = tmp60451;
var inst_59961__$1 = inst_60121;
var state_60340__$1 = (function (){var statearr_60456 = state_60340;
(statearr_60456[(10)] = inst_59959__$1);

(statearr_60456[(11)] = inst_59961__$1);

(statearr_60456[(15)] = inst_59958);

(statearr_60456[(8)] = inst_59960__$1);

return statearr_60456;
})();
var statearr_60457_64178 = state_60340__$1;
(statearr_60457_64178[(2)] = null);

(statearr_60457_64178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (107))){
var inst_60282 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60458_64179 = state_60340__$1;
(statearr_60458_64179[(2)] = inst_60282);

(statearr_60458_64179[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (23))){
var inst_60002 = (state_60340[(37)]);
var state_60340__$1 = state_60340;
var statearr_60459_64180 = state_60340__$1;
(statearr_60459_64180[(2)] = inst_60002);

(statearr_60459_64180[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (47))){
var state_60340__$1 = state_60340;
var statearr_60460_64181 = state_60340__$1;
(statearr_60460_64181[(2)] = null);

(statearr_60460_64181[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (35))){
var state_60340__$1 = state_60340;
var statearr_60462_64182 = state_60340__$1;
(statearr_60462_64182[(2)] = false);

(statearr_60462_64182[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (82))){
var inst_60328 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60463_64187 = state_60340__$1;
(statearr_60463_64187[(2)] = inst_60328);

(statearr_60463_64187[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (76))){
var inst_59961 = (state_60340[(11)]);
var inst_60141 = (state_60340[(42)]);
var inst_60146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60141,(0),null);
var inst_60147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60141,(1),null);
var inst_60148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60141,(2),null);
var tmp60461 = inst_59961;
var inst_59958 = inst_60146;
var inst_59959 = inst_60147;
var inst_59960 = inst_60148;
var inst_59961__$1 = tmp60461;
var state_60340__$1 = (function (){var statearr_60464 = state_60340;
(statearr_60464[(10)] = inst_59959);

(statearr_60464[(11)] = inst_59961__$1);

(statearr_60464[(15)] = inst_59958);

(statearr_60464[(8)] = inst_59960);

return statearr_60464;
})();
var statearr_60465_64188 = state_60340__$1;
(statearr_60465_64188[(2)] = null);

(statearr_60465_64188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (97))){
var inst_59968 = (state_60340[(12)]);
var inst_60228 = (state_60340[(2)]);
var inst_60229 = cljs.core.seq(inst_59968);
var state_60340__$1 = (function (){var statearr_60466 = state_60340;
(statearr_60466[(43)] = inst_60228);

return statearr_60466;
})();
if(inst_60229){
var statearr_60467_64190 = state_60340__$1;
(statearr_60467_64190[(1)] = (98));

} else {
var statearr_60468_64192 = state_60340__$1;
(statearr_60468_64192[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (19))){
var inst_60002 = (state_60340[(37)]);
var state_60340__$1 = state_60340;
if(cljs.core.truth_(inst_60002)){
var statearr_60469_64193 = state_60340__$1;
(statearr_60469_64193[(1)] = (22));

} else {
var statearr_60470_64194 = state_60340__$1;
(statearr_60470_64194[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (57))){
var state_60340__$1 = state_60340;
var statearr_60471_64197 = state_60340__$1;
(statearr_60471_64197[(1)] = (60));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (68))){
var inst_60332 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60473_64199 = state_60340__$1;
(statearr_60473_64199[(2)] = inst_60332);

(statearr_60473_64199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (11))){
var state_60340__$1 = state_60340;
var statearr_60474_64200 = state_60340__$1;
(statearr_60474_64200[(2)] = false);

(statearr_60474_64200[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (115))){
var inst_60292 = (state_60340[(41)]);
var inst_60292__$1 = (state_60340[(2)]);
var state_60340__$1 = (function (){var statearr_60475 = state_60340;
(statearr_60475[(41)] = inst_60292__$1);

return statearr_60475;
})();
if(cljs.core.truth_(inst_60292__$1)){
var statearr_60476_64203 = state_60340__$1;
(statearr_60476_64203[(1)] = (116));

} else {
var statearr_60477_64204 = state_60340__$1;
(statearr_60477_64204[(1)] = (117));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (9))){
var inst_59995 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
if(cljs.core.truth_(inst_59995)){
var statearr_60478_64205 = state_60340__$1;
(statearr_60478_64205[(1)] = (13));

} else {
var statearr_60479_64206 = state_60340__$1;
(statearr_60479_64206[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (5))){
var inst_60334 = cljs.core.async.close_BANG_(ch);
var state_60340__$1 = state_60340;
var statearr_60480_64207 = state_60340__$1;
(statearr_60480_64207[(2)] = inst_60334);

(statearr_60480_64207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (112))){
var inst_60118 = (state_60340[(22)]);
var inst_60117 = (state_60340[(7)]);
var inst_60285 = cljs.core.PersistentHashMap.EMPTY;
var inst_60286 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_60287 = [inst_60117];
var inst_60288 = cljs.core.PersistentHashMap.fromArrays(inst_60286,inst_60287);
var inst_60289 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_60288);
var inst_60290 = (inst_60118.cljs$core$IFn$_invoke$arity$2 ? inst_60118.cljs$core$IFn$_invoke$arity$2(inst_60285,inst_60289) : inst_60118.call(null,inst_60285,inst_60289));
var state_60340__$1 = state_60340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60340__$1,(115),inst_60290);
} else {
if((state_val_60341 === (83))){
var inst_60169 = (state_60340[(30)]);
var inst_60005 = (state_60340[(21)]);
var inst_59975 = (state_60340[(25)]);
var inst_60179 = (state_60340[(13)]);
var inst_60004 = (state_60340[(40)]);
var inst_60179__$1 = com.wsscode.pathom.connect.output__GT_provides(inst_60004);
var inst_60180 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_60181 = [new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),key,inst_59975];
var inst_60182 = cljs.core.PersistentHashMap.fromArrays(inst_60180,inst_60181);
var inst_60183 = com.wsscode.pathom.trace.trace(inst_60005,inst_60182);
var inst_60184 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_60185 = [inst_60179__$1,inst_60169];
var inst_60186 = cljs.core.PersistentHashMap.fromArrays(inst_60184,inst_60185);
var state_60340__$1 = (function (){var statearr_60481 = state_60340;
(statearr_60481[(53)] = inst_60183);

(statearr_60481[(13)] = inst_60179__$1);

return statearr_60481;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60340__$1,(86),ch,inst_60186);
} else {
if((state_val_60341 === (14))){
var inst_59979 = (state_60340[(9)]);
var state_60340__$1 = state_60340;
var statearr_60482_64215 = state_60340__$1;
(statearr_60482_64215[(2)] = inst_59979);

(statearr_60482_64215[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (45))){
var inst_60073 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60483_64216 = state_60340__$1;
(statearr_60483_64216[(2)] = inst_60073);

(statearr_60483_64216[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (53))){
var inst_60080 = (state_60340[(18)]);
var inst_60087 = com.wsscode.async.async_cljs.promise_QMARK_(inst_60080);
var state_60340__$1 = state_60340;
if(cljs.core.truth_(inst_60087)){
var statearr_60484_64217 = state_60340__$1;
(statearr_60484_64217[(1)] = (56));

} else {
var statearr_60485_64218 = state_60340__$1;
(statearr_60485_64218[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (78))){
var inst_60163 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60486_64219 = state_60340__$1;
(statearr_60486_64219[(2)] = inst_60163);

(statearr_60486_64219[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (26))){
var inst_60000 = (state_60340[(33)]);
var inst_60002 = (state_60340[(37)]);
var inst_59967 = (state_60340[(24)]);
var inst_59955 = (state_60340[(19)]);
var inst_60003 = (state_60340[(34)]);
var inst_59956 = (state_60340[(20)]);
var inst_59959 = (state_60340[(10)]);
var inst_60010 = (state_60340[(38)]);
var inst_59961 = (state_60340[(11)]);
var inst_60001 = (state_60340[(39)]);
var inst_60005 = (state_60340[(21)]);
var inst_59974 = (state_60340[(16)]);
var inst_59975 = (state_60340[(25)]);
var inst_59958 = (state_60340[(15)]);
var inst_59968 = (state_60340[(12)]);
var inst_60007 = (state_60340[(35)]);
var inst_59960 = (state_60340[(8)]);
var inst_60006 = (state_60340[(36)]);
var inst_60004 = (state_60340[(40)]);
var inst_60028 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_60010,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_60029 = com.wsscode.pathom.trace.trace(inst_60005,inst_60028);
var inst_60030 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60031 = [inst_59975,inst_60007,params];
var inst_60032 = (new cljs.core.PersistentVector(null,3,(5),inst_60030,inst_60031,null));
var inst_60033 = (function (){var input = inst_60003;
var G__59950 = inst_59958;
var step = inst_59967;
var entity = inst_60006;
var key_SINGLEQUOTE_ = inst_59974;
var vec__59970 = inst_59967;
var seq__59952 = inst_59956;
var vec__59951 = plan;
var cache_QMARK_ = inst_60001;
var seq__59964 = inst_59968;
var out_left = inst_59960;
var failed_resolvers = inst_59959;
var batch_QMARK_ = inst_60002;
var output = inst_60004;
var env__$2 = inst_60005;
var e = inst_60007;
var resolver_sym = inst_59975;
var map__59973 = inst_60000;
var waiting__$1 = inst_59961;
var trace_data = inst_60010;
var resolver = inst_60000;
var first__59965 = inst_59967;
var vec__59963 = inst_59958;
var tail = inst_59968;
var first__59953 = inst_59955;
return ((function (input,G__59950,step,entity,key_SINGLEQUOTE_,vec__59970,seq__59952,vec__59951,cache_QMARK_,seq__59964,out_left,failed_resolvers,batch_QMARK_,output,env__$2,e,resolver_sym,map__59973,waiting__$1,trace_data,resolver,first__59965,vec__59963,tail,first__59953,inst_60000,inst_60002,inst_59967,inst_59955,inst_60003,inst_59956,inst_59959,inst_60010,inst_59961,inst_60001,inst_60005,inst_59974,inst_59975,inst_59958,inst_59968,inst_60007,inst_59960,inst_60006,inst_60004,inst_60028,inst_60029,inst_60030,inst_60031,inst_60032,state_val_60341,c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___64232__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___64232__$1,ch__53519__auto__,input,G__59950,step,entity,key_SINGLEQUOTE_,vec__59970,seq__59952,vec__59951,cache_QMARK_,seq__59964,out_left,failed_resolvers,batch_QMARK_,output,env__$2,e,resolver_sym,map__59973,waiting__$1,trace_data,resolver,first__59965,vec__59963,tail,first__59953,inst_60000,inst_60002,inst_59967,inst_59955,inst_60003,inst_59956,inst_59959,inst_60010,inst_59961,inst_60001,inst_60005,inst_59974,inst_59975,inst_59958,inst_59968,inst_60007,inst_59960,inst_60006,inst_60004,inst_60028,inst_60029,inst_60030,inst_60031,inst_60032,state_val_60341,c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___64232__$1,ch__53519__auto__,input,G__59950,step,entity,key_SINGLEQUOTE_,vec__59970,seq__59952,vec__59951,cache_QMARK_,seq__59964,out_left,failed_resolvers,batch_QMARK_,output,env__$2,e,resolver_sym,map__59973,waiting__$1,trace_data,resolver,first__59965,vec__59963,tail,first__59953,inst_60000,inst_60002,inst_59967,inst_59955,inst_60003,inst_59956,inst_59959,inst_60010,inst_59961,inst_60001,inst_60005,inst_59974,inst_59975,inst_59958,inst_59968,inst_60007,inst_59960,inst_60006,inst_60004,inst_60028,inst_60029,inst_60030,inst_60031,inst_60032,state_val_60341,c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (state_60514){
var state_val_60515 = (state_60514[(1)]);
if((state_val_60515 === (7))){
var inst_60498 = (state_60514[(7)]);
var inst_60498__$1 = (state_60514[(2)]);
var state_60514__$1 = (function (){var statearr_60516 = state_60514;
(statearr_60516[(7)] = inst_60498__$1);

return statearr_60516;
})();
if(cljs.core.truth_(inst_60498__$1)){
var statearr_60517_64239 = state_60514__$1;
(statearr_60517_64239[(1)] = (9));

} else {
var statearr_60518_64240 = state_60514__$1;
(statearr_60518_64240[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60515 === (1))){
var state_60514__$1 = state_60514;
var statearr_60519_64241 = state_60514__$1;
(statearr_60519_64241[(2)] = null);

(statearr_60519_64241[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60515 === (4))){
var inst_60491 = (state_60514[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_60514,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_60491__$1 = com.wsscode.pathom.connect.call_resolver(env__$2,e);
var inst_60492 = com.wsscode.async.async_cljs.chan_QMARK_(inst_60491__$1);
var state_60514__$1 = (function (){var statearr_60520 = state_60514;
(statearr_60520[(8)] = inst_60491__$1);

return statearr_60520;
})();
if(inst_60492){
var statearr_60521_64243 = state_60514__$1;
(statearr_60521_64243[(1)] = (5));

} else {
var statearr_60522_64244 = state_60514__$1;
(statearr_60522_64244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60515 === (13))){
var inst_60505 = (state_60514[(9)]);
var inst_60510 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_60505);
var state_60514__$1 = state_60514;
var statearr_60523_64245 = state_60514__$1;
(statearr_60523_64245[(2)] = inst_60510);

(statearr_60523_64245[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60515 === (6))){
var inst_60491 = (state_60514[(8)]);
var state_60514__$1 = state_60514;
var statearr_60524_64246 = state_60514__$1;
(statearr_60524_64246[(2)] = inst_60491);

(statearr_60524_64246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60515 === (3))){
var inst_60487 = (state_60514[(2)]);
var state_60514__$1 = state_60514;
var statearr_60525_64247 = state_60514__$1;
(statearr_60525_64247[(2)] = inst_60487);


cljs.core.async.impl.ioc_helpers.process_exception(state_60514__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60515 === (12))){
var inst_60508 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_60514__$1 = state_60514;
var statearr_60526_64248 = state_60514__$1;
(statearr_60526_64248[(2)] = inst_60508);

(statearr_60526_64248[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60515 === (2))){
var inst_60505 = (state_60514[(9)]);
var inst_60505__$1 = (state_60514[(2)]);
var inst_60506 = (inst_60505__$1 == null);
var state_60514__$1 = (function (){var statearr_60527 = state_60514;
(statearr_60527[(9)] = inst_60505__$1);

return statearr_60527;
})();
if(cljs.core.truth_(inst_60506)){
var statearr_60528_64249 = state_60514__$1;
(statearr_60528_64249[(1)] = (12));

} else {
var statearr_60529_64250 = state_60514__$1;
(statearr_60529_64250[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60515 === (11))){
var inst_60503 = (state_60514[(2)]);
var state_60514__$1 = state_60514;
var statearr_60530_64251 = state_60514__$1;
(statearr_60530_64251[(2)] = inst_60503);


cljs.core.async.impl.ioc_helpers.process_exception(state_60514__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60515 === (9))){
var inst_60498 = (state_60514[(7)]);
var state_60514__$1 = state_60514;
var statearr_60531_64252 = state_60514__$1;
(statearr_60531_64252[(2)] = inst_60498);

(statearr_60531_64252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60515 === (5))){
var inst_60491 = (state_60514[(8)]);
var state_60514__$1 = state_60514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60514__$1,(8),inst_60491);
} else {
if((state_val_60515 === (14))){
var inst_60512 = (state_60514[(2)]);
var state_60514__$1 = state_60514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60514__$1,inst_60512);
} else {
if((state_val_60515 === (10))){
var inst_60501 = cljs.core.PersistentHashMap.EMPTY;
var state_60514__$1 = state_60514;
var statearr_60532_64255 = state_60514__$1;
(statearr_60532_64255[(2)] = inst_60501);

(statearr_60532_64255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60515 === (8))){
var inst_60495 = (state_60514[(2)]);
var state_60514__$1 = state_60514;
var statearr_60533_64259 = state_60514__$1;
(statearr_60533_64259[(2)] = inst_60495);

(statearr_60533_64259[(1)] = (7));


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
});})(c__47946__auto___64232__$1,ch__53519__auto__,input,G__59950,step,entity,key_SINGLEQUOTE_,vec__59970,seq__59952,vec__59951,cache_QMARK_,seq__59964,out_left,failed_resolvers,batch_QMARK_,output,env__$2,e,resolver_sym,map__59973,waiting__$1,trace_data,resolver,first__59965,vec__59963,tail,first__59953,inst_60000,inst_60002,inst_59967,inst_59955,inst_60003,inst_59956,inst_59959,inst_60010,inst_59961,inst_60001,inst_60005,inst_59974,inst_59975,inst_59958,inst_59968,inst_60007,inst_59960,inst_60006,inst_60004,inst_60028,inst_60029,inst_60030,inst_60031,inst_60032,state_val_60341,c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
;
return ((function (switch__47663__auto__,c__47946__auto___64232__$1,ch__53519__auto__,input,G__59950,step,entity,key_SINGLEQUOTE_,vec__59970,seq__59952,vec__59951,cache_QMARK_,seq__59964,out_left,failed_resolvers,batch_QMARK_,output,env__$2,e,resolver_sym,map__59973,waiting__$1,trace_data,resolver,first__59965,vec__59963,tail,first__59953,inst_60000,inst_60002,inst_59967,inst_59955,inst_60003,inst_59956,inst_59959,inst_60010,inst_59961,inst_60001,inst_60005,inst_59974,inst_59975,inst_59958,inst_59968,inst_60007,inst_59960,inst_60006,inst_60004,inst_60028,inst_60029,inst_60030,inst_60031,inst_60032,state_val_60341,c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____0 = (function (){
var statearr_60534 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60534[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__);

(statearr_60534[(1)] = (1));

return statearr_60534;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____1 = (function (state_60514){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_60514);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e60535){if((e60535 instanceof Object)){
var ex__47667__auto__ = e60535;
var statearr_60536_64261 = state_60514;
(statearr_60536_64261[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60535;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64263 = state_60514;
state_60514 = G__64263;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__ = function(state_60514){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____1.call(this,state_60514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___64232__$1,ch__53519__auto__,input,G__59950,step,entity,key_SINGLEQUOTE_,vec__59970,seq__59952,vec__59951,cache_QMARK_,seq__59964,out_left,failed_resolvers,batch_QMARK_,output,env__$2,e,resolver_sym,map__59973,waiting__$1,trace_data,resolver,first__59965,vec__59963,tail,first__59953,inst_60000,inst_60002,inst_59967,inst_59955,inst_60003,inst_59956,inst_59959,inst_60010,inst_59961,inst_60001,inst_60005,inst_59974,inst_59975,inst_59958,inst_59968,inst_60007,inst_59960,inst_60006,inst_60004,inst_60028,inst_60029,inst_60030,inst_60031,inst_60032,state_val_60341,c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var state__47948__auto__ = (function (){var statearr_60537 = f__47947__auto__();
(statearr_60537[(6)] = c__47946__auto___64232__$1);

return statearr_60537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___64232__$1,ch__53519__auto__,input,G__59950,step,entity,key_SINGLEQUOTE_,vec__59970,seq__59952,vec__59951,cache_QMARK_,seq__59964,out_left,failed_resolvers,batch_QMARK_,output,env__$2,e,resolver_sym,map__59973,waiting__$1,trace_data,resolver,first__59965,vec__59963,tail,first__59953,inst_60000,inst_60002,inst_59967,inst_59955,inst_60003,inst_59956,inst_59959,inst_60010,inst_59961,inst_60001,inst_60005,inst_59974,inst_59975,inst_59958,inst_59968,inst_60007,inst_59960,inst_60006,inst_60004,inst_60028,inst_60029,inst_60030,inst_60031,inst_60032,state_val_60341,c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
);


return ch__53519__auto__;
});
;})(input,G__59950,step,entity,key_SINGLEQUOTE_,vec__59970,seq__59952,vec__59951,cache_QMARK_,seq__59964,out_left,failed_resolvers,batch_QMARK_,output,env__$2,e,resolver_sym,map__59973,waiting__$1,trace_data,resolver,first__59965,vec__59963,tail,first__59953,inst_60000,inst_60002,inst_59967,inst_59955,inst_60003,inst_59956,inst_59959,inst_60010,inst_59961,inst_60001,inst_60005,inst_59974,inst_59975,inst_59958,inst_59968,inst_60007,inst_59960,inst_60006,inst_60004,inst_60028,inst_60029,inst_60030,inst_60031,inst_60032,state_val_60341,c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_60034 = com.wsscode.pathom.core.cached_async(inst_60005,inst_60032,inst_60033);
var state_60340__$1 = (function (){var statearr_60538 = state_60340;
(statearr_60538[(54)] = inst_60029);

return statearr_60538;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60340__$1,(29),inst_60034);
} else {
if((state_val_60341 === (16))){
var inst_59974 = (state_60340[(16)]);
var inst_60006 = (state_60340[(36)]);
var inst_60013 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60014 = [inst_59974];
var inst_60015 = (new cljs.core.PersistentVector(null,1,(5),inst_60013,inst_60014,null));
var inst_60016 = cljs.core.select_keys(inst_60006,inst_60015);
var state_60340__$1 = state_60340;
var statearr_60539_64264 = state_60340__$1;
(statearr_60539_64264[(2)] = inst_60016);

(statearr_60539_64264[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (81))){
var inst_60117 = (state_60340[(7)]);
var inst_60245 = com.wsscode.async.async_cljs.error_QMARK_(inst_60117);
var state_60340__$1 = state_60340;
if(inst_60245){
var statearr_60540_64265 = state_60340__$1;
(statearr_60540_64265[(1)] = (101));

} else {
var statearr_60541_64266 = state_60340__$1;
(statearr_60541_64266[(1)] = (102));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (79))){
var inst_60160 = (state_60340[(2)]);
var inst_60161 = cljs.core.async.close_BANG_(ch);
var state_60340__$1 = (function (){var statearr_60542 = state_60340;
(statearr_60542[(55)] = inst_60160);

return statearr_60542;
})();
var statearr_60543_64267 = state_60340__$1;
(statearr_60543_64267[(2)] = inst_60161);

(statearr_60543_64267[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (38))){
var state_60340__$1 = state_60340;
var statearr_60544_64268 = state_60340__$1;
(statearr_60544_64268[(2)] = false);

(statearr_60544_64268[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (98))){
var inst_59974 = (state_60340[(16)]);
var inst_60228 = (state_60340[(43)]);
var inst_60231 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_60228,inst_59974,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882));
var state_60340__$1 = state_60340;
var statearr_60545_64270 = state_60340__$1;
(statearr_60545_64270[(2)] = inst_60231);

(statearr_60545_64270[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (87))){
var inst_60198 = (state_60340[(23)]);
var inst_60198__$1 = (state_60340[(2)]);
var state_60340__$1 = (function (){var statearr_60546 = state_60340;
(statearr_60546[(23)] = inst_60198__$1);

return statearr_60546;
})();
if(cljs.core.truth_(inst_60198__$1)){
var statearr_60547_64271 = state_60340__$1;
(statearr_60547_64271[(1)] = (88));

} else {
var statearr_60548_64272 = state_60340__$1;
(statearr_60548_64272[(1)] = (89));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (30))){
var inst_60010 = (state_60340[(38)]);
var inst_60005 = (state_60340[(21)]);
var inst_59974 = (state_60340[(16)]);
var inst_60042 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inst_60010,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","waiting-resolver","com.wsscode.pathom.connect/waiting-resolver",-321792495),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","waiting-key","com.wsscode.pathom.connect/waiting-key",261572653),inst_59974], 0));
var inst_60043 = com.wsscode.pathom.trace.trace(inst_60005,inst_60042);
var inst_60045 = com.wsscode.pathom.parser.watch_pending_key(inst_60005,inst_59974);
var state_60340__$1 = (function (){var statearr_60549 = state_60340;
(statearr_60549[(56)] = inst_60043);

return statearr_60549;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60340__$1,(33),inst_60045);
} else {
if((state_val_60341 === (73))){
var inst_59974 = (state_60340[(16)]);
var inst_60118 = (state_60340[(22)]);
var inst_60134 = cljs.core.PersistentHashMap.EMPTY;
var inst_60135 = [new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_60136 = [inst_59974];
var inst_60137 = cljs.core.PersistentHashMap.fromArrays(inst_60135,inst_60136);
var inst_60138 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Waited key missed response",inst_60137);
var inst_60139 = (inst_60118.cljs$core$IFn$_invoke$arity$2 ? inst_60118.cljs$core$IFn$_invoke$arity$2(inst_60134,inst_60138) : inst_60118.call(null,inst_60134,inst_60138));
var state_60340__$1 = state_60340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60340__$1,(75),inst_60139);
} else {
if((state_val_60341 === (96))){
var inst_60169 = (state_60340[(30)]);
var state_60340__$1 = state_60340;
var statearr_60550_64277 = state_60340__$1;
(statearr_60550_64277[(2)] = inst_60169);

(statearr_60550_64277[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (10))){
var state_60340__$1 = state_60340;
var statearr_60552_64278 = state_60340__$1;
(statearr_60552_64278[(2)] = true);

(statearr_60552_64278[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (18))){
var inst_60000 = (state_60340[(33)]);
var inst_60002 = (state_60340[(37)]);
var inst_59967 = (state_60340[(24)]);
var inst_59955 = (state_60340[(19)]);
var inst_60003 = (state_60340[(34)]);
var inst_59956 = (state_60340[(20)]);
var inst_59959 = (state_60340[(10)]);
var inst_60010 = (state_60340[(38)]);
var inst_59961 = (state_60340[(11)]);
var inst_60001 = (state_60340[(39)]);
var inst_60005 = (state_60340[(21)]);
var inst_59974 = (state_60340[(16)]);
var inst_59975 = (state_60340[(25)]);
var inst_59958 = (state_60340[(15)]);
var inst_59968 = (state_60340[(12)]);
var inst_60007 = (state_60340[(35)]);
var inst_59960 = (state_60340[(8)]);
var inst_60006 = (state_60340[(36)]);
var inst_60117 = (state_60340[(7)]);
var inst_60004 = (state_60340[(40)]);
var inst_60117__$1 = (state_60340[(2)]);
var inst_60118 = (function (){var input = inst_60003;
var G__59950 = inst_59958;
var step = inst_59967;
var entity = inst_60006;
var key_SINGLEQUOTE_ = inst_59974;
var vec__59970 = inst_59967;
var response = inst_60117__$1;
var seq__59952 = inst_59956;
var vec__59951 = plan;
var cache_QMARK_ = inst_60001;
var seq__59964 = inst_59968;
var out_left = inst_59960;
var failed_resolvers = inst_59959;
var batch_QMARK_ = inst_60002;
var output = inst_60004;
var env__$2 = inst_60005;
var e = inst_60007;
var resolver_sym = inst_59975;
var map__59973 = inst_60000;
var waiting__$1 = inst_59961;
var trace_data = inst_60010;
var resolver = inst_60000;
var first__59965 = inst_59967;
var vec__59963 = inst_59958;
var tail = inst_59968;
var first__59953 = inst_59955;
return ((function (input,G__59950,step,entity,key_SINGLEQUOTE_,vec__59970,response,seq__59952,vec__59951,cache_QMARK_,seq__59964,out_left,failed_resolvers,batch_QMARK_,output,env__$2,e,resolver_sym,map__59973,waiting__$1,trace_data,resolver,first__59965,vec__59963,tail,first__59953,inst_60000,inst_60002,inst_59967,inst_59955,inst_60003,inst_59956,inst_59959,inst_60010,inst_59961,inst_60001,inst_60005,inst_59974,inst_59975,inst_59958,inst_59968,inst_60007,inst_59960,inst_60006,inst_60117,inst_60004,inst_60117__$1,state_val_60341,c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (value,error){
var c__47946__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto____$1,input,G__59950,step,entity,key_SINGLEQUOTE_,vec__59970,response,seq__59952,vec__59951,cache_QMARK_,seq__59964,out_left,failed_resolvers,batch_QMARK_,output,env__$2,e,resolver_sym,map__59973,waiting__$1,trace_data,resolver,first__59965,vec__59963,tail,first__59953,inst_60000,inst_60002,inst_59967,inst_59955,inst_60003,inst_59956,inst_59959,inst_60010,inst_59961,inst_60001,inst_60005,inst_59974,inst_59975,inst_59958,inst_59968,inst_60007,inst_59960,inst_60006,inst_60117,inst_60004,inst_60117__$1,state_val_60341,c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto____$1,input,G__59950,step,entity,key_SINGLEQUOTE_,vec__59970,response,seq__59952,vec__59951,cache_QMARK_,seq__59964,out_left,failed_resolvers,batch_QMARK_,output,env__$2,e,resolver_sym,map__59973,waiting__$1,trace_data,resolver,first__59965,vec__59963,tail,first__59953,inst_60000,inst_60002,inst_59967,inst_59955,inst_60003,inst_59956,inst_59959,inst_60010,inst_59961,inst_60001,inst_60005,inst_59974,inst_59975,inst_59958,inst_59968,inst_60007,inst_59960,inst_60006,inst_60117,inst_60004,inst_60117__$1,state_val_60341,c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (state_60575){
var state_val_60576 = (state_60575[(1)]);
if((state_val_60576 === (1))){
var inst_60556 = (state_60575[(7)]);
var inst_60553 = (state_60575[(8)]);
var inst_60553__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers,resolver_sym,error);
var inst_60554 = (function (){var failed_resolvers__$1 = inst_60553__$1;
return ((function (failed_resolvers__$1,inst_60556,inst_60553,inst_60553__$1,state_val_60576,c__47946__auto____$1,input,G__59950,step,entity,key_SINGLEQUOTE_,vec__59970,response,seq__59952,vec__59951,cache_QMARK_,seq__59964,out_left,failed_resolvers,batch_QMARK_,output,env__$2,e,resolver_sym,map__59973,waiting__$1,trace_data,resolver,first__59965,vec__59963,tail,first__59953,inst_60000,inst_60002,inst_59967,inst_59955,inst_60003,inst_59956,inst_59959,inst_60010,inst_59961,inst_60001,inst_60005,inst_59974,inst_59975,inst_59958,inst_59968,inst_60007,inst_59960,inst_60006,inst_60117,inst_60004,inst_60117__$1,state_val_60341,c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (p1__59938_SHARP_){
var x__4222__auto__ = ((function (){var or__4131__auto__ = p1__59938_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() * (2));
var y__4223__auto__ = max_resolver_weight;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});
;})(failed_resolvers__$1,inst_60556,inst_60553,inst_60553__$1,state_val_60576,c__47946__auto____$1,input,G__59950,step,entity,key_SINGLEQUOTE_,vec__59970,response,seq__59952,vec__59951,cache_QMARK_,seq__59964,out_left,failed_resolvers,batch_QMARK_,output,env__$2,e,resolver_sym,map__59973,waiting__$1,trace_data,resolver,first__59965,vec__59963,tail,first__59953,inst_60000,inst_60002,inst_59967,inst_59955,inst_60003,inst_59956,inst_59959,inst_60010,inst_59961,inst_60001,inst_60005,inst_59974,inst_59975,inst_59958,inst_59968,inst_60007,inst_59960,inst_60006,inst_60117,inst_60004,inst_60117__$1,state_val_60341,c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_60555 = com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$2,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_60554], 0));
var inst_60556__$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$2,inst_60553__$1);
var state_60575__$1 = (function (){var statearr_60577 = state_60575;
(statearr_60577[(7)] = inst_60556__$1);

(statearr_60577[(8)] = inst_60553__$1);

(statearr_60577[(9)] = inst_60555);

return statearr_60577;
})();
if(cljs.core.truth_(inst_60556__$1)){
var statearr_60578_64287 = state_60575__$1;
(statearr_60578_64287[(1)] = (2));

} else {
var statearr_60579_64289 = state_60575__$1;
(statearr_60579_64289[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60576 === (2))){
var inst_60556 = (state_60575[(7)]);
var inst_60562 = (state_60575[(10)]);
var inst_60561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60556,(0),null);
var inst_60562__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60556,(1),null);
var inst_60563 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_60564 = [out,inst_60562__$1,value];
var inst_60565 = cljs.core.PersistentHashMap.fromArrays(inst_60563,inst_60564);
var state_60575__$1 = (function (){var statearr_60580 = state_60575;
(statearr_60580[(11)] = inst_60561);

(statearr_60580[(10)] = inst_60562__$1);

return statearr_60580;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60575__$1,(5),ch,inst_60565);
} else {
if((state_val_60576 === (3))){
var state_60575__$1 = state_60575;
var statearr_60581_64290 = state_60575__$1;
(statearr_60581_64290[(2)] = null);

(statearr_60581_64290[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60576 === (4))){
var inst_60573 = (state_60575[(2)]);
var state_60575__$1 = state_60575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60575__$1,inst_60573);
} else {
if((state_val_60576 === (5))){
var inst_60561 = (state_60575[(11)]);
var inst_60562 = (state_60575[(10)]);
var inst_60553 = (state_60575[(8)]);
var inst_60567 = (state_60575[(2)]);
var inst_60568 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60569 = [inst_60561,inst_60553,inst_60562];
var inst_60570 = (new cljs.core.PersistentVector(null,3,(5),inst_60568,inst_60569,null));
var state_60575__$1 = (function (){var statearr_60582 = state_60575;
(statearr_60582[(12)] = inst_60567);

return statearr_60582;
})();
var statearr_60583_64291 = state_60575__$1;
(statearr_60583_64291[(2)] = inst_60570);

(statearr_60583_64291[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto____$1,input,G__59950,step,entity,key_SINGLEQUOTE_,vec__59970,response,seq__59952,vec__59951,cache_QMARK_,seq__59964,out_left,failed_resolvers,batch_QMARK_,output,env__$2,e,resolver_sym,map__59973,waiting__$1,trace_data,resolver,first__59965,vec__59963,tail,first__59953,inst_60000,inst_60002,inst_59967,inst_59955,inst_60003,inst_59956,inst_59959,inst_60010,inst_59961,inst_60001,inst_60005,inst_59974,inst_59975,inst_59958,inst_59968,inst_60007,inst_59960,inst_60006,inst_60117,inst_60004,inst_60117__$1,state_val_60341,c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
;
return ((function (switch__47663__auto__,c__47946__auto____$1,input,G__59950,step,entity,key_SINGLEQUOTE_,vec__59970,response,seq__59952,vec__59951,cache_QMARK_,seq__59964,out_left,failed_resolvers,batch_QMARK_,output,env__$2,e,resolver_sym,map__59973,waiting__$1,trace_data,resolver,first__59965,vec__59963,tail,first__59953,inst_60000,inst_60002,inst_59967,inst_59955,inst_60003,inst_59956,inst_59959,inst_60010,inst_59961,inst_60001,inst_60005,inst_59974,inst_59975,inst_59958,inst_59968,inst_60007,inst_59960,inst_60006,inst_60117,inst_60004,inst_60117__$1,state_val_60341,c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____0 = (function (){
var statearr_60584 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60584[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__);

(statearr_60584[(1)] = (1));

return statearr_60584;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____1 = (function (state_60575){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_60575);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e60585){if((e60585 instanceof Object)){
var ex__47667__auto__ = e60585;
var statearr_60586_64295 = state_60575;
(statearr_60586_64295[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60585;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64297 = state_60575;
state_60575 = G__64297;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__ = function(state_60575){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____1.call(this,state_60575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto____$1,input,G__59950,step,entity,key_SINGLEQUOTE_,vec__59970,response,seq__59952,vec__59951,cache_QMARK_,seq__59964,out_left,failed_resolvers,batch_QMARK_,output,env__$2,e,resolver_sym,map__59973,waiting__$1,trace_data,resolver,first__59965,vec__59963,tail,first__59953,inst_60000,inst_60002,inst_59967,inst_59955,inst_60003,inst_59956,inst_59959,inst_60010,inst_59961,inst_60001,inst_60005,inst_59974,inst_59975,inst_59958,inst_59968,inst_60007,inst_59960,inst_60006,inst_60117,inst_60004,inst_60117__$1,state_val_60341,c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var state__47948__auto__ = (function (){var statearr_60587 = f__47947__auto__();
(statearr_60587[(6)] = c__47946__auto____$1);

return statearr_60587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto____$1,input,G__59950,step,entity,key_SINGLEQUOTE_,vec__59970,response,seq__59952,vec__59951,cache_QMARK_,seq__59964,out_left,failed_resolvers,batch_QMARK_,output,env__$2,e,resolver_sym,map__59973,waiting__$1,trace_data,resolver,first__59965,vec__59963,tail,first__59953,inst_60000,inst_60002,inst_59967,inst_59955,inst_60003,inst_59956,inst_59959,inst_60010,inst_59961,inst_60001,inst_60005,inst_59974,inst_59975,inst_59958,inst_59968,inst_60007,inst_59960,inst_60006,inst_60117,inst_60004,inst_60117__$1,state_val_60341,c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
);

return c__47946__auto____$1;
});
;})(input,G__59950,step,entity,key_SINGLEQUOTE_,vec__59970,response,seq__59952,vec__59951,cache_QMARK_,seq__59964,out_left,failed_resolvers,batch_QMARK_,output,env__$2,e,resolver_sym,map__59973,waiting__$1,trace_data,resolver,first__59965,vec__59963,tail,first__59953,inst_60000,inst_60002,inst_59967,inst_59955,inst_60003,inst_59956,inst_59959,inst_60010,inst_59961,inst_60001,inst_60005,inst_59974,inst_59975,inst_59958,inst_59968,inst_60007,inst_59960,inst_60006,inst_60117,inst_60004,inst_60117__$1,state_val_60341,c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_60119 = (new cljs.core.Keyword("com.wsscode.pathom.parser","watch-pending-timeout","com.wsscode.pathom.parser/watch-pending-timeout",1047721820) === inst_60117__$1);
var state_60340__$1 = (function (){var statearr_60588 = state_60340;
(statearr_60588[(22)] = inst_60118);

(statearr_60588[(7)] = inst_60117__$1);

return statearr_60588;
})();
if(cljs.core.truth_(inst_60119)){
var statearr_60589_64299 = state_60340__$1;
(statearr_60589_64299[(1)] = (66));

} else {
var statearr_60590_64300 = state_60340__$1;
(statearr_60590_64300[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (105))){
var inst_59961 = (state_60340[(11)]);
var inst_60250 = (state_60340[(32)]);
var inst_60255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60250,(0),null);
var inst_60256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60250,(1),null);
var inst_60257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60250,(2),null);
var tmp60551 = inst_59961;
var inst_59958 = inst_60255;
var inst_59959 = inst_60256;
var inst_59960 = inst_60257;
var inst_59961__$1 = tmp60551;
var state_60340__$1 = (function (){var statearr_60591 = state_60340;
(statearr_60591[(10)] = inst_59959);

(statearr_60591[(11)] = inst_59961__$1);

(statearr_60591[(15)] = inst_59958);

(statearr_60591[(8)] = inst_59960);

return statearr_60591;
})();
var statearr_60592_64301 = state_60340__$1;
(statearr_60592_64301[(2)] = null);

(statearr_60592_64301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (52))){
var inst_60080 = (state_60340[(18)]);
var state_60340__$1 = state_60340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60340__$1,(55),inst_60080);
} else {
if((state_val_60341 === (114))){
var inst_60324 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60593_64302 = state_60340__$1;
(statearr_60593_64302[(2)] = inst_60324);

(statearr_60593_64302[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (67))){
var inst_60117 = (state_60340[(7)]);
var inst_60124 = (new cljs.core.Keyword("com.wsscode.pathom.connect","watch-ready","com.wsscode.pathom.connect/watch-ready",943560359) === inst_60117);
var state_60340__$1 = state_60340;
if(cljs.core.truth_(inst_60124)){
var statearr_60594_64304 = state_60340__$1;
(statearr_60594_64304[(1)] = (69));

} else {
var statearr_60595_64305 = state_60340__$1;
(statearr_60595_64305[(1)] = (70));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (71))){
var inst_60330 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60596_64306 = state_60340__$1;
(statearr_60596_64306[(2)] = inst_60330);

(statearr_60596_64306[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (42))){
var inst_60069 = (state_60340[(51)]);
var inst_60068 = (state_60340[(2)]);
var inst_60069__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60068,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973));
var state_60340__$1 = (function (){var statearr_60597 = state_60340;
(statearr_60597[(51)] = inst_60069__$1);

return statearr_60597;
})();
if(cljs.core.truth_(inst_60069__$1)){
var statearr_60598_64308 = state_60340__$1;
(statearr_60598_64308[(1)] = (43));

} else {
var statearr_60599_64309 = state_60340__$1;
(statearr_60599_64309[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (80))){
var inst_60000 = (state_60340[(33)]);
var inst_60002 = (state_60340[(37)]);
var inst_59967 = (state_60340[(24)]);
var inst_59955 = (state_60340[(19)]);
var inst_60003 = (state_60340[(34)]);
var inst_59956 = (state_60340[(20)]);
var inst_60169 = (state_60340[(30)]);
var inst_59959 = (state_60340[(10)]);
var inst_60010 = (state_60340[(38)]);
var inst_59961 = (state_60340[(11)]);
var inst_60001 = (state_60340[(39)]);
var inst_60005 = (state_60340[(21)]);
var inst_59974 = (state_60340[(16)]);
var inst_59975 = (state_60340[(25)]);
var inst_59958 = (state_60340[(15)]);
var inst_59968 = (state_60340[(12)]);
var inst_60007 = (state_60340[(35)]);
var inst_59960 = (state_60340[(8)]);
var inst_60118 = (state_60340[(22)]);
var inst_60006 = (state_60340[(36)]);
var inst_60117 = (state_60340[(7)]);
var inst_60004 = (state_60340[(40)]);
var inst_60169__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_60117,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_60170 = (function (){var input = inst_60003;
var G__59950 = inst_59958;
var step = inst_59967;
var entity = inst_60006;
var key_SINGLEQUOTE_ = inst_59974;
var vec__59970 = inst_59967;
var response = inst_60169__$1;
var seq__59952 = inst_59956;
var vec__59951 = plan;
var cache_QMARK_ = inst_60001;
var seq__59964 = inst_59968;
var out_left = inst_59960;
var failed_resolvers = inst_59959;
var batch_QMARK_ = inst_60002;
var output = inst_60004;
var env__$2 = inst_60005;
var e = inst_60007;
var resolver_sym = inst_59975;
var map__59973 = inst_60000;
var waiting__$1 = inst_59961;
var trace_data = inst_60010;
var resolver = inst_60000;
var first__59965 = inst_59967;
var replan = inst_60118;
var vec__59963 = inst_59958;
var tail = inst_59968;
var first__59953 = inst_59955;
return ((function (input,G__59950,step,entity,key_SINGLEQUOTE_,vec__59970,response,seq__59952,vec__59951,cache_QMARK_,seq__59964,out_left,failed_resolvers,batch_QMARK_,output,env__$2,e,resolver_sym,map__59973,waiting__$1,trace_data,resolver,first__59965,replan,vec__59963,tail,first__59953,inst_60000,inst_60002,inst_59967,inst_59955,inst_60003,inst_59956,inst_60169,inst_59959,inst_60010,inst_59961,inst_60001,inst_60005,inst_59974,inst_59975,inst_59958,inst_59968,inst_60007,inst_59960,inst_60118,inst_60006,inst_60117,inst_60004,inst_60169__$1,state_val_60341,c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (p1__59939_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__59939_SHARP_], 0));
});
;})(input,G__59950,step,entity,key_SINGLEQUOTE_,vec__59970,response,seq__59952,vec__59951,cache_QMARK_,seq__59964,out_left,failed_resolvers,batch_QMARK_,output,env__$2,e,resolver_sym,map__59973,waiting__$1,trace_data,resolver,first__59965,replan,vec__59963,tail,first__59953,inst_60000,inst_60002,inst_59967,inst_59955,inst_60003,inst_59956,inst_60169,inst_59959,inst_60010,inst_59961,inst_60001,inst_60005,inst_59974,inst_59975,inst_59958,inst_59968,inst_60007,inst_59960,inst_60118,inst_60006,inst_60117,inst_60004,inst_60169__$1,state_val_60341,c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_60171 = com.wsscode.pathom.core.swap_entity_BANG_(inst_60005,inst_60170);
var inst_60173 = cljs.core.contains_QMARK_(inst_60169__$1,inst_59974);
var inst_60174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60169__$1,inst_59974);
var inst_60175 = (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(inst_60174) : com.wsscode.pathom.core.break_values.call(null,inst_60174));
var inst_60176 = cljs.core.not(inst_60175);
var inst_60177 = ((inst_60173) && (inst_60176));
var state_60340__$1 = (function (){var statearr_60600 = state_60340;
(statearr_60600[(30)] = inst_60169__$1);

(statearr_60600[(57)] = inst_60171);

return statearr_60600;
})();
if(cljs.core.truth_(inst_60177)){
var statearr_60601_64312 = state_60340__$1;
(statearr_60601_64312[(1)] = (83));

} else {
var statearr_60602_64313 = state_60340__$1;
(statearr_60602_64313[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (37))){
var state_60340__$1 = state_60340;
var statearr_60603_64314 = state_60340__$1;
(statearr_60603_64314[(2)] = true);

(statearr_60603_64314[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (63))){
var inst_60101 = (state_60340[(31)]);
var state_60340__$1 = state_60340;
var statearr_60604_64315 = state_60340__$1;
(statearr_60604_64315[(2)] = inst_60101);

(statearr_60604_64315[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (94))){
var inst_60238 = (state_60340[(2)]);
var inst_60239 = cljs.core.async.close_BANG_(ch);
var state_60340__$1 = (function (){var statearr_60605 = state_60340;
(statearr_60605[(58)] = inst_60238);

return statearr_60605;
})();
var statearr_60606_64317 = state_60340__$1;
(statearr_60606_64317[(2)] = inst_60239);

(statearr_60606_64317[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (8))){
var state_60340__$1 = state_60340;
var statearr_60607_64319 = state_60340__$1;
(statearr_60607_64319[(2)] = false);

(statearr_60607_64319[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (49))){
var inst_60108 = (state_60340[(2)]);
var state_60340__$1 = state_60340;
var statearr_60608_64320 = state_60340__$1;
(statearr_60608_64320[(2)] = inst_60108);

(statearr_60608_64320[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60341 === (84))){
var inst_60169 = (state_60340[(30)]);
var inst_59974 = (state_60340[(16)]);
var inst_60118 = (state_60340[(22)]);
var inst_60192 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_60193 = [inst_60169,inst_59974];
var inst_60194 = cljs.core.PersistentHashMap.fromArrays(inst_60192,inst_60193);
var inst_60195 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_60194);
var inst_60196 = (inst_60118.cljs$core$IFn$_invoke$arity$2 ? inst_60118.cljs$core$IFn$_invoke$arity$2(inst_60169,inst_60195) : inst_60118.call(null,inst_60169,inst_60195));
var state_60340__$1 = state_60340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60340__$1,(87),inst_60196);
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
});})(c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
;
return ((function (switch__47663__auto__,c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____0 = (function (){
var statearr_60609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60609[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__);

(statearr_60609[(1)] = (1));

return statearr_60609;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____1 = (function (state_60340){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_60340);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e60610){if((e60610 instanceof Object)){
var ex__47667__auto__ = e60610;
var statearr_60611_64324 = state_60340;
(statearr_60611_64324[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60610;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64325 = state_60340;
state_60340 = G__64325;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__ = function(state_60340){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____1.call(this,state_60340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var state__47948__auto__ = (function (){var statearr_60612 = f__47947__auto__();
(statearr_60612[(6)] = c__47946__auto___64003);

return statearr_60612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___64003,ch,key,params,env__$1,vec__59944,plan,out,temp__5718__auto__,map__59942,map__59942__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
);


return ch;
})()], null);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.index_reader = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),(function (p__60613){
var map__60614 = p__60613;
var map__60614__$1 = (((((!((map__60614 == null))))?(((((map__60614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60614):map__60614);
var env = map__60614__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60614__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(indexes,env);
})], null);
com.wsscode.pathom.connect.indexed_ident = (function com$wsscode$pathom$connect$indexed_ident(p__60616){
var map__60617 = p__60616;
var map__60617__$1 = (((((!((map__60617 == null))))?(((((map__60617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60617):map__60617);
var env = map__60617__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60617__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
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
com.wsscode.pathom.connect.resolver = (function com$wsscode$pathom$connect$resolver(sym,p__60619,resolve){
var map__60620 = p__60619;
var map__60620__$1 = (((((!((map__60620 == null))))?(((((map__60620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60620):map__60620);
var options = map__60620__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60620__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322));
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Resolver name must be a symbol","\n","(symbol? sym)"].join('')));
}

var G__60622 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),resolve], null),options], 0));
if(cljs.core.truth_(transform)){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__60622) : transform.call(null,G__60622));
} else {
return G__60622;
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
var G__60624 = arguments.length;
switch (G__60624) {
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

com.wsscode.pathom.connect.constantly_resolver.cljs$core$IFn$_invoke$arity$1 = (function (p__60625){
var map__60626 = p__60625;
var map__60626__$1 = (((((!((map__60626 == null))))?(((((map__60626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60626):map__60626);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60626__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60626__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60626__$1,new cljs.core.Keyword(null,"value","value",305978217));
var sym__$1 = (function (){var or__4131__auto__ = sym;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(attribute),(1)))),"-constant"].join(''));
}
})();
return com.wsscode.pathom.connect.resolver(sym__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attribute], null)], null),((function (sym__$1,map__60626,map__60626__$1,attribute,sym,value){
return (function (_,___$1){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([attribute,value]);
});})(sym__$1,map__60626,map__60626__$1,attribute,sym,value))
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
return cljs.core.PersistentArrayMap.createAsIfByAssoc([to,(function (){var G__60628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,from);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60628) : f.call(null,G__60628));
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
return cljs.core.PersistentArrayMap.createAsIfByAssoc([to,(function (){var G__60629 = env;
var G__60630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,from);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__60629,G__60630) : f.call(null,G__60629,G__60630));
})()]);
});})(sym))
);
});
/**
 * Helper to return a mutation map
 */
com.wsscode.pathom.connect.mutation = (function com$wsscode$pathom$connect$mutation(sym,p__60631,mutate){
var map__60632 = p__60631;
var map__60632__$1 = (((((!((map__60632 == null))))?(((((map__60632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60632):map__60632);
var options = map__60632__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60632__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322));
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Mutation name must be a symbol","\n","(symbol? sym)"].join('')));
}

var G__60634 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),mutate], null),options], 0));
if(cljs.core.truth_(transform)){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__60634) : transform.call(null,G__60634));
} else {
return G__60634;
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
var G__60636 = arguments.length;
switch (G__60636) {
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
var res__53554__auto__ = (function (){var G__60637 = env;
var G__60638 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null);
return (multi_fn.cljs$core$IFn$_invoke$arity$2 ? multi_fn.cljs$core$IFn$_invoke$arity$2(G__60637,G__60638) : multi_fn.call(null,G__60637,G__60638));
})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53554__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53554__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53554__auto__){
return (function (state_60650){
var state_val_60651 = (state_60650[(1)]);
if((state_val_60651 === (1))){
var state_60650__$1 = state_60650;
var statearr_60652_64368 = state_60650__$1;
(statearr_60652_64368[(2)] = null);

(statearr_60652_64368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60651 === (2))){
var inst_60648 = (state_60650[(2)]);
var state_60650__$1 = state_60650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60650__$1,inst_60648);
} else {
if((state_val_60651 === (3))){
var inst_60639 = (state_60650[(2)]);
var state_60650__$1 = state_60650;
var statearr_60653_64370 = state_60650__$1;
(statearr_60653_64370[(2)] = inst_60639);


cljs.core.async.impl.ioc_helpers.process_exception(state_60650__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60651 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_60650,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_60650__$1 = state_60650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60650__$1,(5),res__53554__auto__);
} else {
if((state_val_60651 === (5))){
var inst_60644 = (state_60650[(2)]);
var inst_60645 = com.wsscode.async.async_cljs.throw_err(inst_60644);
var inst_60646 = cljs.core.first(inst_60645);
var state_60650__$1 = state_60650;
var statearr_60654_64372 = state_60650__$1;
(statearr_60654_64372[(2)] = inst_60646);


cljs.core.async.impl.ioc_helpers.process_exception(state_60650__$1);

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
var statearr_60655 = [null,null,null,null,null,null,null];
(statearr_60655[(0)] = com$wsscode$pathom$connect$state_machine__47664__auto__);

(statearr_60655[(1)] = (1));

return statearr_60655;
});
var com$wsscode$pathom$connect$state_machine__47664__auto____1 = (function (state_60650){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_60650);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e60656){if((e60656 instanceof Object)){
var ex__47667__auto__ = e60656;
var statearr_60657_64375 = state_60650;
(statearr_60657_64375[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60656;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64376 = state_60650;
state_60650 = G__64376;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$state_machine__47664__auto__ = function(state_60650){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$state_machine__47664__auto____1.call(this,state_60650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$state_machine__47664__auto____0;
com$wsscode$pathom$connect$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$state_machine__47664__auto____1;
return com$wsscode$pathom$connect$state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__))
})();
var state__47948__auto__ = (function (){var statearr_60658 = f__47947__auto__();
(statearr_60658[(6)] = c__47946__auto__);

return statearr_60658;
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
return (function (p__60659){
var map__60660 = p__60659;
var map__60660__$1 = (((((!((map__60660 == null))))?(((((map__60660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60660):map__60660);
var resolver = map__60660__$1;
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60660__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(resolver,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$1(((function (map__60660,map__60660__$1,resolver,resolve){
return (function (env,inputs){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__60660,map__60660__$1,resolver,resolve){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__60660,map__60660__$1,resolver,resolve){
return (function (state_60672){
var state_val_60673 = (state_60672[(1)]);
if((state_val_60673 === (1))){
var inst_60662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var inst_60663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var inst_60664 = cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(inst_60662,inputs);
var inst_60665 = (function (){var from_chan = inst_60662;
var out_chan = inst_60663;
return ((function (from_chan,out_chan,inst_60662,inst_60663,inst_60664,state_val_60673,c__47946__auto__,map__60660,map__60660__$1,resolver,resolve){
return (function com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline(input,res_ch){
var c__47946__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto____$1,from_chan,out_chan,inst_60662,inst_60663,inst_60664,state_val_60673,c__47946__auto__,map__60660,map__60660__$1,resolver,resolve){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto____$1,from_chan,out_chan,inst_60662,inst_60663,inst_60664,state_val_60673,c__47946__auto__,map__60660,map__60660__$1,resolver,resolve){
return (function (state_60686){
var state_val_60687 = (state_60686[(1)]);
if((state_val_60687 === (1))){
var inst_60674 = (state_60686[(7)]);
var inst_60674__$1 = (resolve.cljs$core$IFn$_invoke$arity$2 ? resolve.cljs$core$IFn$_invoke$arity$2(env,input) : resolve.call(null,env,input));
var inst_60675 = com.wsscode.async.async_cljs.chan_QMARK_(inst_60674__$1);
var state_60686__$1 = (function (){var statearr_60688 = state_60686;
(statearr_60688[(7)] = inst_60674__$1);

return statearr_60688;
})();
if(inst_60675){
var statearr_60689_64386 = state_60686__$1;
(statearr_60689_64386[(1)] = (2));

} else {
var statearr_60690_64397 = state_60686__$1;
(statearr_60690_64397[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60687 === (2))){
var inst_60674 = (state_60686[(7)]);
var state_60686__$1 = state_60686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60686__$1,(5),inst_60674);
} else {
if((state_val_60687 === (3))){
var inst_60674 = (state_60686[(7)]);
var state_60686__$1 = state_60686;
var statearr_60691_64398 = state_60686__$1;
(statearr_60691_64398[(2)] = inst_60674);

(statearr_60691_64398[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60687 === (4))){
var inst_60681 = (state_60686[(2)]);
var state_60686__$1 = state_60686;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60686__$1,(6),res_ch,inst_60681);
} else {
if((state_val_60687 === (5))){
var inst_60678 = (state_60686[(2)]);
var state_60686__$1 = state_60686;
var statearr_60692_64402 = state_60686__$1;
(statearr_60692_64402[(2)] = inst_60678);

(statearr_60692_64402[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60687 === (6))){
var inst_60683 = (state_60686[(2)]);
var inst_60684 = cljs.core.async.close_BANG_(res_ch);
var state_60686__$1 = (function (){var statearr_60693 = state_60686;
(statearr_60693[(8)] = inst_60683);

return statearr_60693;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60686__$1,inst_60684);
} else {
return null;
}
}
}
}
}
}
});})(c__47946__auto____$1,from_chan,out_chan,inst_60662,inst_60663,inst_60664,state_val_60673,c__47946__auto__,map__60660,map__60660__$1,resolver,resolve))
;
return ((function (switch__47663__auto__,c__47946__auto____$1,from_chan,out_chan,inst_60662,inst_60663,inst_60664,state_val_60673,c__47946__auto__,map__60660,map__60660__$1,resolver,resolve){
return (function() {
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__47664__auto____0 = (function (){
var statearr_60694 = [null,null,null,null,null,null,null,null,null];
(statearr_60694[(0)] = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__47664__auto__);

(statearr_60694[(1)] = (1));

return statearr_60694;
});
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__47664__auto____1 = (function (state_60686){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_60686);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e60695){if((e60695 instanceof Object)){
var ex__47667__auto__ = e60695;
var statearr_60696_64405 = state_60686;
(statearr_60696_64405[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60695;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64406 = state_60686;
state_60686 = G__64406;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__47664__auto__ = function(state_60686){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__47664__auto____1.call(this,state_60686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto____$1,from_chan,out_chan,inst_60662,inst_60663,inst_60664,state_val_60673,c__47946__auto__,map__60660,map__60660__$1,resolver,resolve))
})();
var state__47948__auto__ = (function (){var statearr_60697 = f__47947__auto__();
(statearr_60697[(6)] = c__47946__auto____$1);

return statearr_60697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto____$1,from_chan,out_chan,inst_60662,inst_60663,inst_60664,state_val_60673,c__47946__auto__,map__60660,map__60660__$1,resolver,resolve))
);

return c__47946__auto____$1;
});
;})(from_chan,out_chan,inst_60662,inst_60663,inst_60664,state_val_60673,c__47946__auto__,map__60660,map__60660__$1,resolver,resolve))
})();
var inst_60666 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4(n,inst_60663,inst_60665,inst_60662);
var inst_60667 = cljs.core.PersistentVector.EMPTY;
var inst_60668 = cljs.core.async.into(inst_60667,inst_60663);
var state_60672__$1 = (function (){var statearr_60698 = state_60672;
(statearr_60698[(7)] = inst_60664);

(statearr_60698[(8)] = inst_60666);

return statearr_60698;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60672__$1,(2),inst_60668);
} else {
if((state_val_60673 === (2))){
var inst_60670 = (state_60672[(2)]);
var state_60672__$1 = state_60672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60672__$1,inst_60670);
} else {
return null;
}
}
});})(c__47946__auto__,map__60660,map__60660__$1,resolver,resolve))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__60660,map__60660__$1,resolver,resolve){
return (function() {
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__47664__auto____0 = (function (){
var statearr_60699 = [null,null,null,null,null,null,null,null,null];
(statearr_60699[(0)] = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__47664__auto__);

(statearr_60699[(1)] = (1));

return statearr_60699;
});
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__47664__auto____1 = (function (state_60672){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_60672);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e60700){if((e60700 instanceof Object)){
var ex__47667__auto__ = e60700;
var statearr_60701_64414 = state_60672;
(statearr_60701_64414[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60700;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64415 = state_60672;
state_60672 = G__64415;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__47664__auto__ = function(state_60672){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__47664__auto____1.call(this,state_60672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__60660,map__60660__$1,resolver,resolve))
})();
var state__47948__auto__ = (function (){var statearr_60702 = f__47947__auto__();
(statearr_60702[(6)] = c__47946__auto__);

return statearr_60702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__60660,map__60660__$1,resolver,resolve))
);

return c__47946__auto__;
});})(map__60660,map__60660__$1,resolver,resolve))
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
com.wsscode.pathom.connect.mutation_dispatch_embedded = (function com$wsscode$pathom$connect$mutation_dispatch_embedded(p__60703,entity){
var map__60704 = p__60703;
var map__60704__$1 = (((((!((map__60704 == null))))?(((((map__60704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60704):map__60704);
var env = map__60704__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60704__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var sym = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
var map__60706 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym], null));
var map__60706__$1 = (((((!((map__60706 == null))))?(((((map__60706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60706):map__60706);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60706__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112));
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ",["Can't find mutate fn for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),"\n","mutate"].join('')));
}

return (mutate.cljs$core$IFn$_invoke$arity$2 ? mutate.cljs$core$IFn$_invoke$arity$2(env,entity) : mutate.call(null,env,entity));
});
/**
 * Sync mutate function to integrate connect mutations to pathom parser.
 */
com.wsscode.pathom.connect.mutate = (function com$wsscode$pathom$connect$mutate(p__60708,sym_SINGLEQUOTE_,p__60709){
var map__60710 = p__60708;
var map__60710__$1 = (((((!((map__60710 == null))))?(((((map__60710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60710):map__60710);
var env = map__60710__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60710__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var mutate_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60710__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069));
var mutation_join_globals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60710__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.PersistentVector.EMPTY);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60710__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60710__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__60711 = p__60709;
var map__60711__$1 = (((((!((map__60711 == null))))?(((((map__60711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60711):map__60711);
var input = map__60711__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60711__$1,new cljs.core.Keyword("pathom","context","pathom/context",-1452257614));
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym_SINGLEQUOTE_], null));
if(cljs.core.truth_(temp__5718__auto__)){
var map__60714 = temp__5718__auto__;
var map__60714__$1 = (((((!((map__60714 == null))))?(((((map__60714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60714):map__60714);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60714__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),sym);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env__$1,map__60714,map__60714__$1,sym,temp__5718__auto__,map__60710,map__60710__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__60711,map__60711__$1,input,context){
return (function (){
var res = (function (){var G__60716 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","source-mutation","com.wsscode.pathom.connect/source-mutation",-674985123),sym_SINGLEQUOTE_);
var G__60717 = input;
return (mutate_dispatch.cljs$core$IFn$_invoke$arity$2 ? mutate_dispatch.cljs$core$IFn$_invoke$arity$2(G__60716,G__60717) : mutate_dispatch.call(null,G__60716,G__60717));
})();
var res__$1 = (function (){var G__60718 = res;
if(cljs.core.truth_((function (){var and__4120__auto__ = context;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.map_QMARK_(res);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__60718,context], 0));
} else {
return G__60718;
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
});})(env__$1,map__60714,map__60714__$1,sym,temp__5718__auto__,map__60710,map__60710__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__60711,map__60711__$1,input,context))
], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Mutation not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutation","mutation",-285823378),sym_SINGLEQUOTE_], null));
}
});
/**
 * Async mutate function to integrate connect mutations to pathom parser.
 */
com.wsscode.pathom.connect.mutate_async = (function com$wsscode$pathom$connect$mutate_async(p__60719,sym_SINGLEQUOTE_,p__60720){
var map__60721 = p__60719;
var map__60721__$1 = (((((!((map__60721 == null))))?(((((map__60721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60721):map__60721);
var env = map__60721__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60721__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var mutate_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60721__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069));
var mutation_join_globals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60721__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.PersistentVector.EMPTY);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60721__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60721__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__60722 = p__60720;
var map__60722__$1 = (((((!((map__60722 == null))))?(((((map__60722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60722):map__60722);
var input = map__60722__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60722__$1,new cljs.core.Keyword("pathom","context","pathom/context",-1452257614));
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym_SINGLEQUOTE_], null));
if(cljs.core.truth_(temp__5718__auto__)){
var map__60725 = temp__5718__auto__;
var map__60725__$1 = (((((!((map__60725 == null))))?(((((map__60725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60725):map__60725);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60725__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),sym);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env__$1,map__60725,map__60725__$1,sym,temp__5718__auto__,map__60721,map__60721__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__60722,map__60722__$1,input,context){
return (function (){
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___64420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___64420,ch__53519__auto__,env__$1,map__60725,map__60725__$1,sym,temp__5718__auto__,map__60721,map__60721__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__60722,map__60722__$1,input,context){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___64420,ch__53519__auto__,env__$1,map__60725,map__60725__$1,sym,temp__5718__auto__,map__60721,map__60721__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__60722,map__60722__$1,input,context){
return (function (state_60788){
var state_val_60789 = (state_60788[(1)]);
if((state_val_60789 === (7))){
var inst_60753 = (state_60788[(2)]);
var state_60788__$1 = (function (){var statearr_60790 = state_60788;
(statearr_60790[(7)] = inst_60753);

return statearr_60790;
})();
if(cljs.core.truth_(context)){
var statearr_60791_64422 = state_60788__$1;
(statearr_60791_64422[(1)] = (16));

} else {
var statearr_60792_64423 = state_60788__$1;
(statearr_60792_64423[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (20))){
var inst_60753 = (state_60788[(7)]);
var state_60788__$1 = state_60788;
var statearr_60793_64425 = state_60788__$1;
(statearr_60793_64425[(2)] = inst_60753);

(statearr_60793_64425[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (27))){
var inst_60779 = (state_60788[(8)]);
var inst_60784 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_60779);
var state_60788__$1 = state_60788;
var statearr_60794_64428 = state_60788__$1;
(statearr_60794_64428[(2)] = inst_60784);

(statearr_60794_64428[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (1))){
var state_60788__$1 = state_60788;
var statearr_60795_64430 = state_60788__$1;
(statearr_60795_64430[(2)] = null);

(statearr_60795_64430[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (24))){
var inst_60777 = (state_60788[(2)]);
var state_60788__$1 = state_60788;
var statearr_60796_64431 = state_60788__$1;
(statearr_60796_64431[(2)] = inst_60777);


cljs.core.async.impl.ioc_helpers.process_exception(state_60788__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (4))){
var inst_60732 = (state_60788[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_60788,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_60731 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","source-mutation","com.wsscode.pathom.connect/source-mutation",-674985123),sym_SINGLEQUOTE_);
var inst_60732__$1 = (mutate_dispatch.cljs$core$IFn$_invoke$arity$2 ? mutate_dispatch.cljs$core$IFn$_invoke$arity$2(inst_60731,input) : mutate_dispatch.call(null,inst_60731,input));
var inst_60733 = com.wsscode.async.async_cljs.chan_QMARK_(inst_60732__$1);
var state_60788__$1 = (function (){var statearr_60797 = state_60788;
(statearr_60797[(9)] = inst_60732__$1);

return statearr_60797;
})();
if(inst_60733){
var statearr_60798_64437 = state_60788__$1;
(statearr_60798_64437[(1)] = (5));

} else {
var statearr_60799_64440 = state_60788__$1;
(statearr_60799_64440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (15))){
var inst_60749 = (state_60788[(2)]);
var state_60788__$1 = state_60788;
var statearr_60800_64442 = state_60788__$1;
(statearr_60800_64442[(2)] = inst_60749);

(statearr_60800_64442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (21))){
var inst_60764 = (state_60788[(2)]);
var state_60788__$1 = (function (){var statearr_60801 = state_60788;
(statearr_60801[(10)] = inst_60764);

return statearr_60801;
})();
if(cljs.core.truth_(query)){
var statearr_60802_64444 = state_60788__$1;
(statearr_60802_64444[(1)] = (22));

} else {
var statearr_60803_64445 = state_60788__$1;
(statearr_60803_64445[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (13))){
var inst_60732 = (state_60788[(9)]);
var state_60788__$1 = state_60788;
var statearr_60804_64456 = state_60788__$1;
(statearr_60804_64456[(2)] = inst_60732);

(statearr_60804_64456[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (22))){
var inst_60764 = (state_60788[(10)]);
var inst_60766 = cljs.core.select_keys(inst_60764,mutation_join_globals);
var inst_60767 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_60764);
var inst_60768 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-ast","com.wsscode.pathom.connect/mutation-ast",-602347707),ast);
var inst_60769 = com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(inst_60767,inst_60768);
var state_60788__$1 = (function (){var statearr_60805 = state_60788;
(statearr_60805[(11)] = inst_60766);

return statearr_60805;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60788__$1,(25),inst_60769);
} else {
if((state_val_60789 === (6))){
var inst_60732 = (state_60788[(9)]);
var inst_60739 = com.wsscode.async.async_cljs.promise_QMARK_(inst_60732);
var state_60788__$1 = state_60788;
if(cljs.core.truth_(inst_60739)){
var statearr_60806_64471 = state_60788__$1;
(statearr_60806_64471[(1)] = (9));

} else {
var statearr_60807_64472 = state_60788__$1;
(statearr_60807_64472[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (28))){
var inst_60786 = (state_60788[(2)]);
var state_60788__$1 = state_60788;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60788__$1,inst_60786);
} else {
if((state_val_60789 === (25))){
var inst_60766 = (state_60788[(11)]);
var inst_60771 = (state_60788[(2)]);
var inst_60772 = com.wsscode.async.async_cljs.throw_err(inst_60771);
var inst_60773 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_60766,inst_60772], 0));
var state_60788__$1 = state_60788;
var statearr_60808_64477 = state_60788__$1;
(statearr_60808_64477[(2)] = inst_60773);

(statearr_60808_64477[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (17))){
var state_60788__$1 = state_60788;
var statearr_60809_64478 = state_60788__$1;
(statearr_60809_64478[(2)] = context);

(statearr_60809_64478[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (3))){
var inst_60727 = (state_60788[(2)]);
var state_60788__$1 = state_60788;
var statearr_60810_64480 = state_60788__$1;
(statearr_60810_64480[(2)] = inst_60727);


cljs.core.async.impl.ioc_helpers.process_exception(state_60788__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (12))){
var inst_60743 = (state_60788[(2)]);
var inst_60744 = com.wsscode.async.async_cljs.consumer_pair(inst_60743);
var state_60788__$1 = state_60788;
var statearr_60811_64482 = state_60788__$1;
(statearr_60811_64482[(2)] = inst_60744);

(statearr_60811_64482[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (2))){
var inst_60779 = (state_60788[(8)]);
var inst_60779__$1 = (state_60788[(2)]);
var inst_60780 = (inst_60779__$1 == null);
var state_60788__$1 = (function (){var statearr_60812 = state_60788;
(statearr_60812[(8)] = inst_60779__$1);

return statearr_60812;
})();
if(cljs.core.truth_(inst_60780)){
var statearr_60813_64483 = state_60788__$1;
(statearr_60813_64483[(1)] = (26));

} else {
var statearr_60814_64484 = state_60788__$1;
(statearr_60814_64484[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (23))){
var inst_60764 = (state_60788[(10)]);
var inst_60775 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_60764,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378));
var state_60788__$1 = state_60788;
var statearr_60815_64485 = state_60788__$1;
(statearr_60815_64485[(2)] = inst_60775);

(statearr_60815_64485[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (19))){
var inst_60753 = (state_60788[(7)]);
var inst_60761 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_60753,context], 0));
var state_60788__$1 = state_60788;
var statearr_60816_64487 = state_60788__$1;
(statearr_60816_64487[(2)] = inst_60761);

(statearr_60816_64487[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (11))){
var inst_60751 = (state_60788[(2)]);
var state_60788__$1 = state_60788;
var statearr_60817_64489 = state_60788__$1;
(statearr_60817_64489[(2)] = inst_60751);

(statearr_60817_64489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (9))){
var inst_60732 = (state_60788[(9)]);
var inst_60741 = com.wsscode.async.async_cljs.promise__GT_chan(inst_60732);
var state_60788__$1 = state_60788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60788__$1,(12),inst_60741);
} else {
if((state_val_60789 === (5))){
var inst_60732 = (state_60788[(9)]);
var state_60788__$1 = state_60788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60788__$1,(8),inst_60732);
} else {
if((state_val_60789 === (14))){
var state_60788__$1 = state_60788;
var statearr_60818_64492 = state_60788__$1;
(statearr_60818_64492[(2)] = null);

(statearr_60818_64492[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (26))){
var inst_60782 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_60788__$1 = state_60788;
var statearr_60819_64494 = state_60788__$1;
(statearr_60819_64494[(2)] = inst_60782);

(statearr_60819_64494[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (16))){
var inst_60753 = (state_60788[(7)]);
var inst_60756 = cljs.core.map_QMARK_(inst_60753);
var state_60788__$1 = state_60788;
var statearr_60820_64496 = state_60788__$1;
(statearr_60820_64496[(2)] = inst_60756);

(statearr_60820_64496[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (10))){
var state_60788__$1 = state_60788;
var statearr_60821_64497 = state_60788__$1;
(statearr_60821_64497[(1)] = (13));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (18))){
var inst_60759 = (state_60788[(2)]);
var state_60788__$1 = state_60788;
if(cljs.core.truth_(inst_60759)){
var statearr_60823_64499 = state_60788__$1;
(statearr_60823_64499[(1)] = (19));

} else {
var statearr_60824_64500 = state_60788__$1;
(statearr_60824_64500[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (8))){
var inst_60736 = (state_60788[(2)]);
var inst_60737 = com.wsscode.async.async_cljs.throw_err(inst_60736);
var state_60788__$1 = state_60788;
var statearr_60825_64502 = state_60788__$1;
(statearr_60825_64502[(2)] = inst_60737);

(statearr_60825_64502[(1)] = (7));


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
});})(c__47946__auto___64420,ch__53519__auto__,env__$1,map__60725,map__60725__$1,sym,temp__5718__auto__,map__60721,map__60721__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__60722,map__60722__$1,input,context))
;
return ((function (switch__47663__auto__,c__47946__auto___64420,ch__53519__auto__,env__$1,map__60725,map__60725__$1,sym,temp__5718__auto__,map__60721,map__60721__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__60722,map__60722__$1,input,context){
return (function() {
var com$wsscode$pathom$connect$mutate_async_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$connect$mutate_async_$_state_machine__47664__auto____0 = (function (){
var statearr_60826 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60826[(0)] = com$wsscode$pathom$connect$mutate_async_$_state_machine__47664__auto__);

(statearr_60826[(1)] = (1));

return statearr_60826;
});
var com$wsscode$pathom$connect$mutate_async_$_state_machine__47664__auto____1 = (function (state_60788){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_60788);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e60827){if((e60827 instanceof Object)){
var ex__47667__auto__ = e60827;
var statearr_60828_64506 = state_60788;
(statearr_60828_64506[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60827;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64508 = state_60788;
state_60788 = G__64508;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$connect$mutate_async_$_state_machine__47664__auto__ = function(state_60788){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$mutate_async_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$mutate_async_$_state_machine__47664__auto____1.call(this,state_60788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$mutate_async_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$mutate_async_$_state_machine__47664__auto____0;
com$wsscode$pathom$connect$mutate_async_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$mutate_async_$_state_machine__47664__auto____1;
return com$wsscode$pathom$connect$mutate_async_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___64420,ch__53519__auto__,env__$1,map__60725,map__60725__$1,sym,temp__5718__auto__,map__60721,map__60721__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__60722,map__60722__$1,input,context))
})();
var state__47948__auto__ = (function (){var statearr_60829 = f__47947__auto__();
(statearr_60829[(6)] = c__47946__auto___64420);

return statearr_60829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___64420,ch__53519__auto__,env__$1,map__60725,map__60725__$1,sym,temp__5718__auto__,map__60721,map__60721__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__60722,map__60722__$1,input,context))
);


return ch__53519__auto__;
});})(env__$1,map__60725,map__60725__$1,sym,temp__5718__auto__,map__60721,map__60721__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__60722,map__60722__$1,input,context))
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
com.wsscode.pathom.connect.discover_attrs = (function com$wsscode$pathom$connect$discover_attrs(p__60834,ctx){
var map__60835 = p__60834;
var map__60835__$1 = (((((!((map__60835 == null))))?(((((map__60835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60835):map__60835);
var index = map__60835__$1;
var index_io = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60835__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60835__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache","com.wsscode.pathom.connect/cache",328991776));
return com.wsscode.pathom.connect.cached(cache,ctx,((function (map__60835,map__60835__$1,index,index_io,cache){
return (function (){
var base_keys = (((cljs.core.count(ctx) > (1)))?(function (){var tree = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__60835,map__60835__$1,index,index_io,cache){
return (function (a,b){
var attrs = (function (){var G__60837 = index;
var G__60838 = cljs.core.vec(b);
return (com.wsscode.pathom.connect.discover_attrs.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.discover_attrs.cljs$core$IFn$_invoke$arity$2(G__60837,G__60838) : com.wsscode.pathom.connect.discover_attrs.call(null,G__60837,G__60838));
})();
if((a == null)){
return attrs;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(a,cljs.core.reverse(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(b)),com.wsscode.pathom.connect.merge_io,attrs);
}
});})(map__60835,map__60835__$1,index,index_io,cache))
,null,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__60835,map__60835__$1,index,index_io,cache){
return (function (p1__60831_SHARP_,p2__60830_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(p2__60830_SHARP_) - (p1__60831_SHARP_ + (1))),p2__60830_SHARP_);
});})(map__60835,map__60835__$1,index,index_io,cache))
,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.count(ctx) - (1)),ctx)));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.vec(cljs.core.next(cljs.core.reverse(ctx))));
})():(function (){var G__60839 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(index_io,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.first(ctx)], null));
var G__60840 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(index_io,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(ctx)]),cljs.core.PersistentArrayMap.EMPTY);
return (com.wsscode.pathom.connect.merge_io.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.merge_io.cljs$core$IFn$_invoke$arity$2(G__60839,G__60840) : com.wsscode.pathom.connect.merge_io.call(null,G__60839,G__60840));
})());
var available = index_io;
var collected = base_keys;
while(true){
var attrs = cljs.core.set(cljs.core.keys(collected));
var matches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (available,collected,attrs,base_keys,map__60835,map__60835__$1,index,index_io,cache){
return (function (p__60845){
var vec__60846 = p__60845;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60846,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60846,(1),null);
return cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(k,attrs));
});})(available,collected,attrs,base_keys,map__60835,map__60835__$1,index,index_io,cache))
,available);
if(cljs.core.seq(matches)){
var G__64528 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (available,collected,attrs,matches,base_keys,map__60835,map__60835__$1,index,index_io,cache){
return (function (p1__60832_SHARP_,p2__60833_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__60832_SHARP_,p2__60833_SHARP_);
});})(available,collected,attrs,matches,base_keys,map__60835,map__60835__$1,index,index_io,cache))
,available,cljs.core.keys(matches));
var G__64529 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.connect.merge_io,collected,cljs.core.vals(matches));
available = G__64528;
collected = G__64529;
continue;
} else {
return collected;
}
break;
}
});})(map__60835,map__60835__$1,index,index_io,cache))
);
});
/**
 * This will use the ::index-resolvers to re-build the index. You might need that if in development you changed some definitions
 *   and got in a dirty state somehow
 */
com.wsscode.pathom.connect.reprocess_index = (function com$wsscode$pathom$connect$reprocess_index(p__60849){
var map__60850 = p__60849;
var map__60850__$1 = (((((!((map__60850 == null))))?(((((map__60850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60850):map__60850);
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60850__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256));
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
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,(function (p1__60852_SHARP_){
if(cljs.core.map_QMARK_(p1__60852_SHARP_)){
return cljs.core.ffirst(p1__60852_SHARP_);
} else {
return p1__60852_SHARP_;
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
com.wsscode.pathom.connect.batch_restore_sort = (function com$wsscode$pathom$connect$batch_restore_sort(p__60854,items){
var map__60855 = p__60854;
var map__60855__$1 = (((((!((map__60855 == null))))?(((((map__60855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60855):map__60855);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60855__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","inputs","com.wsscode.pathom.connect/inputs",-1635802936));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60855__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","key","com.wsscode.pathom.connect/key",1316653363));
var batch_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60855__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch-default","com.wsscode.pathom.connect/batch-default",2069925724));
var index = cljs.core.group_by(key,items);
var batch_default__$1 = (function (){var or__4131__auto__ = batch_default;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,index,map__60855,map__60855__$1,inputs,key,batch_default){
return (function (p1__60853_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([key],[cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__60853_SHARP_,key)]);
});
;})(or__4131__auto__,index,map__60855,map__60855__$1,inputs,key,batch_default))
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (index,batch_default__$1,map__60855,map__60855__$1,inputs,key,batch_default){
return (function (input){
var or__4131__auto__ = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,key)));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (batch_default__$1.cljs$core$IFn$_invoke$arity$1 ? batch_default__$1.cljs$core$IFn$_invoke$arity$1(input) : batch_default__$1.call(null,input));
}
});})(index,batch_default__$1,map__60855,map__60855__$1,inputs,key,batch_default))
),inputs);
});
com.wsscode.pathom.connect.index_explorer_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","index-explorer-resolver","com.wsscode.pathom.connect/index-explorer-resolver",-1613438284,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))], null);
}));
com.wsscode.pathom.connect.indexes_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","indexes-resolver","com.wsscode.pathom.connect/indexes-resolver",-1892611171,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","autocomplete-ignore","com.wsscode.pathom.connect/autocomplete-ignore",-191717401),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null)], null)], null)], null)], null)], null),(function (p__60857,_){
var map__60858 = p__60857;
var map__60858__$1 = (((((!((map__60858 == null))))?(((((map__60858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60858):map__60858);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60858__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),indexes], null);
}));
com.wsscode.pathom.connect.resolver_weights_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","resolver-weights-resolver","com.wsscode.pathom.connect/resolver-weights-resolver",-600539046,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),(function (){var G__60860 = env;
var G__60860__$1 = (((G__60860 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772).cljs$core$IFn$_invoke$arity$1(G__60860));
if((G__60860__$1 == null)){
return null;
} else {
return cljs.core.deref(G__60860__$1);
}
})()], null);
}));
com.wsscode.pathom.connect.resolver_weights_sorted_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","resolver-weights-sorted-resolver","com.wsscode.pathom.connect/resolver-weights-sorted-resolver",-1672618105,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights-sorted","com.wsscode.pathom.connect/resolver-weights-sorted",1502939218)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights-sorted","com.wsscode.pathom.connect/resolver-weights-sorted",1502939218),(function (){var G__60863 = env;
var G__60863__$1 = (((G__60863 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772).cljs$core$IFn$_invoke$arity$1(G__60863));
var G__60863__$2 = (((G__60863__$1 == null))?null:cljs.core.deref(G__60863__$1));
if((G__60863__$2 == null)){
return null;
} else {
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.second,((function (G__60863,G__60863__$1,G__60863__$2){
return (function (p1__60862_SHARP_,p2__60861_SHARP_){
return cljs.core.compare(p2__60861_SHARP_,p1__60862_SHARP_);
});})(G__60863,G__60863__$1,G__60863__$2))
,G__60863__$2);
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
var G__60865 = arguments.length;
switch (G__60865) {
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

com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1 = (function (p__60866){
var map__60867 = p__60866;
var map__60867__$1 = (((((!((map__60867 == null))))?(((((map__60867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60867):map__60867);
var env = map__60867__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60867__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var indexes__$1 = (function (){var or__4131__auto__ = indexes;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var pool_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser2","com.wsscode.pathom.core/wrap-parser2",776559497),((function (indexes__$1,pool_chan,map__60867,map__60867__$1,env,indexes){
return (function com$wsscode$pathom$connect$connect_wrap_parser(parser,p__60869){
var map__60870 = p__60869;
var map__60870__$1 = (((((!((map__60870 == null))))?(((((map__60870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60870):map__60870);
var plugins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60870__$1,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796));
var plugin_registry = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),plugins);
var resolver_weights = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(indexes__$1,com.wsscode.pathom.connect.register,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plugin_registry,cljs.core.get.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),cljs.core.PersistentVector.EMPTY)], null));

return ((function (plugin_registry,resolver_weights,map__60870,map__60870__$1,plugins,indexes__$1,pool_chan,map__60867,map__60867__$1,env,indexes){
return (function (env__$1,tx){
var G__60872 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.connect.resolver_dispatch_embedded,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069),com.wsscode.pathom.connect.mutation_dispatch_embedded,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.deref(indexes__$1),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),resolver_weights,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449),pool_chan], null),env__$1], 0));
var G__60873 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__60872,G__60873) : parser.call(null,G__60872,G__60873));
});
;})(plugin_registry,resolver_weights,map__60870,map__60870__$1,plugins,indexes__$1,pool_chan,map__60867,map__60867__$1,env,indexes))
});})(indexes__$1,pool_chan,map__60867,map__60867__$1,env,indexes))
,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),indexes__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.connect.connect_resolvers], null);
});

com.wsscode.pathom.connect.connect_plugin.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=com.wsscode.pathom.connect.js.map
