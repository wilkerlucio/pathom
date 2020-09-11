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
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60697){
return cljs.core.set_QMARK_(G__60697);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","alias?","com.wsscode.pathom.connect/alias?",-1915061463),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__60699){
return cljs.core.map_QMARK_(G__60699);
})], null),(function (G__60699){
return cljs.core.map_QMARK_(G__60699);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation","com.wsscode.pathom.connect/mutation",-1953746968),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__60709){
return cljs.core.map_QMARK_(G__60709);
})], null),(function (G__60709){
return cljs.core.map_QMARK_(G__60709);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"plain","plain",1368629269),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"composed","composed",-1510693384),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plain","plain",1368629269),new cljs.core.Keyword(null,"composed","composed",-1510693384)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60719){
return cljs.core.map_QMARK_(G__60719);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13301__auto__,v__13302__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13302__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attribute-list","attribute-list",1391116942),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1)),new cljs.core.Keyword(null,"union","union",2142937499),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribute-list","attribute-list",1391116942),new cljs.core.Keyword(null,"union","union",2142937499)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60726){
return ((cljs.core.vector_QMARK_(G__60726)) && (((((function (){var or__4131__auto__ = (1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((1)
,G__60726))) && ((cljs.core.bounded_count((1)
,G__60726) <= (function (){var or__4131__auto__ = null;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (9007199254740991);
}
})())))));
}),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60731){
return cljs.core.map_QMARK_(G__60731);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13301__auto__,v__13302__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13302__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__60733){
return cljs.core.map_QMARK_(G__60733);
}),(function (G__60733){
return cljs.core.contains_QMARK_(G__60733,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
})], null),(function (G__60733){
return ((cljs.core.map_QMARK_(G__60733)) && (cljs.core.contains_QMARK_(G__60733,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),cljs.core.list(new cljs.core.Symbol("com.wsscode.pathom.connect","atom-with","com.wsscode.pathom.connect/atom-with",1449744364,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null))),com.wsscode.pathom.connect.atom_with(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"number?","number?",-1747282210,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.number_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60744){
return cljs.core.map_QMARK_(G__60744);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13301__auto__,v__13302__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13302__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null))], null),null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60745){
return cljs.core.map_QMARK_(G__60745);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13301__auto__,v__13302__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13302__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__60747){
return cljs.core.map_QMARK_(G__60747);
}),(function (G__60747){
return cljs.core.contains_QMARK_(G__60747,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
})], null),(function (G__60747){
return ((cljs.core.map_QMARK_(G__60747)) && (cljs.core.contains_QMARK_(G__60747,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutations","com.wsscode.pathom.connect/mutations",1762289215),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60774){
return cljs.core.map_QMARK_(G__60774);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13301__auto__,v__13302__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13302__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60775){
return cljs.core.map_QMARK_(G__60775);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13301__auto__,v__13302__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13302__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("s","coll-of","s/coll-of",-1705285349,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol(null,"set?","set?",1636014792,null))),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60778){
return cljs.core.set_QMARK_(G__60778);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60777){
return cljs.core.map_QMARK_(G__60777);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13301__auto__,v__13302__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13302__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60779){
return cljs.core.map_QMARK_(G__60779);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13301__auto__,v__13302__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13302__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__60780){
return cljs.core.map_QMARK_(G__60780);
})], null),(function (G__60780){
return cljs.core.map_QMARK_(G__60780);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","tuple","s/tuple",1167863840,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60814){
return cljs.core.set_QMARK_(G__60814);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),cljs.core.ifn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),cljs.core.ifn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60827){
return cljs.core.coll_QMARK_(G__60827);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword(null,"deep","deep",2090866875),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60844){
return cljs.core.map_QMARK_(G__60844);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13301__auto__,v__13302__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13302__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"deep","deep",2090866875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60845){
return ((cljs.core.vector_QMARK_(G__60845)) && (((((function (){var or__4131__auto__ = (2);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((2)
,G__60845))) && ((cljs.core.bounded_count((2)
,G__60845) <= (function (){var or__4131__auto__ = null;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (9007199254740991);
}
})())))));
}),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60846){
return cljs.core.map_QMARK_(G__60846);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13301__auto__,v__13302__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13302__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60847){
return cljs.core.set_QMARK_(G__60847);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__60848){
return cljs.core.map_QMARK_(G__60848);
})], null),(function (G__60848){
return cljs.core.map_QMARK_(G__60848);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"multi","multi",-190293005)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentHashSet.EMPTY]),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60849){
return cljs.core.map_QMARK_(G__60849);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13301__auto__,v__13302__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13302__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60850){
return cljs.core.map_QMARK_(G__60850);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13301__auto__,v__13302__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13302__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null))),cljs.spec.alpha.merge_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__60851){
return cljs.core.map_QMARK_(G__60851);
}),(function (G__60851){
return cljs.core.contains_QMARK_(G__60851,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
}),(function (G__60851){
return cljs.core.contains_QMARK_(G__60851,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
})], null),(function (G__60851){
return ((cljs.core.map_QMARK_(G__60851)) && (cljs.core.contains_QMARK_(G__60851,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))) && (cljs.core.contains_QMARK_(G__60851,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)))], null),null]))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null))),cljs.spec.alpha.merge_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__60853){
return cljs.core.map_QMARK_(G__60853);
}),(function (G__60853){
return cljs.core.contains_QMARK_(G__60853,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112));
})], null),(function (G__60853){
return ((cljs.core.map_QMARK_(G__60853)) && (cljs.core.contains_QMARK_(G__60853,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)))], null),null]))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"resolver","resolver",-1740553583),new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword(null,"mutation","mutation",-285823378),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolver","resolver",-1740553583),new cljs.core.Keyword(null,"mutation","mutation",-285823378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),new cljs.core.Keyword(null,"operations","operations",1630691895),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword(null,"operations","operations",1630691895)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60856){
return cljs.core.coll_QMARK_(G__60856);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60857){
return cljs.core.coll_QMARK_(G__60857);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"flat-plan","flat-plan",-883399921),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),new cljs.core.Keyword(null,"graph-plan","graph-plan",-503579673),new cljs.core.Keyword("com.wsscode.pathom.connect.planner","graph","com.wsscode.pathom.connect.planner/graph",507959439)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flat-plan","flat-plan",-883399921),new cljs.core.Keyword(null,"graph-plan","graph-plan",-503579673)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),new cljs.core.Keyword("com.wsscode.pathom.connect.planner","graph","com.wsscode.pathom.connect.planner/graph",507959439)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60858){
return cljs.core.coll_QMARK_(G__60858);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098))], null),null),new cljs.core.Keyword("com.wsscode.pathom.connect.planner","graph","com.wsscode.pathom.connect.planner/graph",507959439)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","sort-plan","com.wsscode.pathom.connect/sort-plan",-1506396873),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"plan","plan",1118952668)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-computed-plans","com.wsscode.pathom.connect/reader3-computed-plans",-307073851),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__60859){
return cljs.core.set_QMARK_(G__60859);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
com.wsscode.pathom.connect.resolver_data = com.wsscode.pathom.connect.indexes.resolver_data;
/**
 * Get mutation map information in env from the resolver sym.
 */
com.wsscode.pathom.connect.mutation_data = (function com$wsscode$pathom$connect$mutation_data(env_or_indexes,sym){
var idx = (function (){var G__60861 = env_or_indexes;
if(cljs.core.contains_QMARK_(env_or_indexes,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))){
return new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189).cljs$core$IFn$_invoke$arity$1(G__60861);
} else {
return G__60861;
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
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__60865 = cljs.core.get_global_hierarchy;
return (fexpr__60865.cljs$core$IFn$_invoke$arity$0 ? fexpr__60865.cljs$core$IFn$_invoke$arity$0() : fexpr__60865.call(null));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(idx,k,(function (p1__60866_SHARP_){
return com.wsscode.pathom.connect.index_merger.cljs$core$IFn$_invoke$arity$3(k,p1__60866_SHARP_,v);
}));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(idx,k,v);
}
}),ia,ib);
});
com.wsscode.pathom.connect.output_provides_STAR_ = (function com$wsscode$pathom$connect$output_provides_STAR_(p__60870){
var map__60871 = p__60870;
var map__60871__$1 = (((((!((map__60871 == null))))?(((((map__60871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60871):map__60871);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60871__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60871__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__$1 = (cljs.core.truth_((function (){var G__60873 = children;
var G__60873__$1 = (((G__60873 == null))?null:cljs.core.first(G__60873));
var G__60873__$2 = (((G__60873__$1 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__60873__$1));
if((G__60873__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__60873__$2,new cljs.core.Keyword(null,"union","union",2142937499));
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))], 0)):children);
var G__60874 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null);
if(cljs.core.seq(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(G__60874,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (G__60874,children__$1,map__60871,map__60871__$1,key,children){
return (function (x){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__60874,children__$1,map__60871,map__60871__$1,key,children){
return (function (p1__60868_SHARP_){
return cljs.core.vec(cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[key,p1__60868_SHARP_],null))));
});})(G__60874,children__$1,map__60871,map__60871__$1,key,children))
,x);
});})(G__60874,children__$1,map__60871,map__60871__$1,key,children))
,((function (G__60874,children__$1,map__60871,map__60871__$1,key,children){
return (function (p1__60869_SHARP_){
return (com.wsscode.pathom.connect.output_provides_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.output_provides_STAR_.cljs$core$IFn$_invoke$arity$1(p1__60869_SHARP_) : com.wsscode.pathom.connect.output_provides_STAR_.call(null,p1__60869_SHARP_));
});})(G__60874,children__$1,map__60871,map__60871__$1,key,children))
)),children__$1);
} else {
return G__60874;
}
});
com.wsscode.pathom.connect.output_provides = (function com$wsscode$pathom$connect$output_provides(query){
if(cljs.core.map_QMARK_(query)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.output_provides),cljs.core.vals(query));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.output_provides_STAR_),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(query)));
}
});
com.wsscode.pathom.connect.normalized_children = (function com$wsscode$pathom$connect$normalized_children(p__60875){
var map__60876 = p__60875;
var map__60876__$1 = (((((!((map__60876 == null))))?(((((map__60876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60876):map__60876);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60876__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_((function (){var G__60878 = children;
var G__60878__$1 = (((G__60878 == null))?null:cljs.core.first(G__60878));
var G__60878__$2 = (((G__60878__$1 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__60878__$1));
if((G__60878__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__60878__$2,new cljs.core.Keyword(null,"union","union",2142937499));
}
})())){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))], 0));
} else {
return children;
}
});
com.wsscode.pathom.connect.index_attributes = (function com$wsscode$pathom$connect$index_attributes(p__60881){
var map__60882 = p__60881;
var map__60882__$1 = (((((!((map__60882 == null))))?(((((map__60882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60882):map__60882);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60882__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60882__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60882__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var provides = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__60882,map__60882__$1,sym,input,output){
return (function (p1__60879_SHARP_){
return cljs.core.contains_QMARK_(input,p1__60879_SHARP_);
});})(map__60882,map__60882__$1,sym,input,output))
,com.wsscode.pathom.connect.output_provides(output));
var sym_group = cljs.core.PersistentHashSet.createAsIfByAssoc([sym]);
var attr_provides = cljs.core.zipmap(provides,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(sym_group));
var input_count = cljs.core.count(input);
var _LT__GT_ = cljs.core.PersistentArrayMap.EMPTY;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,provides,sym_group,attr_provides,input_count,map__60882,map__60882__$1,sym,input,output){
return (function (idx,in_attr){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,in_attr,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),in_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),attr_provides,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),sym_group], null));
});})(_LT__GT_,provides,sym_group,attr_provides,input_count,map__60882,map__60882__$1,sym,input,output))
,_LT__GT_,(function (){var G__60884 = input_count;
switch (G__60884) {
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
var _LT__GT___$2 = (((input_count > (1)))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,provides,sym_group,attr_provides,input_count,map__60882,map__60882__$1,sym,input,output){
return (function (idx,in_attr){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,in_attr,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),in_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),cljs.core.PersistentHashSet.createAsIfByAssoc([input]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),sym_group], null));
});})(_LT__GT_,_LT__GT___$1,provides,sym_group,attr_provides,input_count,map__60882,map__60882__$1,sym,input,output))
,_LT__GT___$1,input):_LT__GT___$1);
var _LT__GT___$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,_LT__GT___$2,provides,sym_group,attr_provides,input_count,map__60882,map__60882__$1,sym,input,output){
return (function (idx,out_attr){
if(cljs.core.vector_QMARK_(out_attr)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,cljs.core.peek(out_attr),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),cljs.core.peek(out_attr),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null),cljs.core.pop(out_attr)),sym_group]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),sym_group], null));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,out_attr,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),out_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.PersistentArrayMap.createAsIfByAssoc([input,sym_group]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),sym_group], null));
}
});})(_LT__GT_,_LT__GT___$1,_LT__GT___$2,provides,sym_group,attr_provides,input_count,map__60882,map__60882__$1,sym,input,output))
,_LT__GT___$2,provides);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__60882,map__60882__$1,sym,input,output){
return (function (idx,p__60885){
var map__60886 = p__60885;
var map__60886__$1 = (((((!((map__60886 == null))))?(((((map__60886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60886):map__60886);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60886__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60886__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__60888 = idx;
if(cljs.core.truth_(key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__60888,key,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(children)?new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732):new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711)),sym_group]));
} else {
return G__60888;
}
});})(_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__60882,map__60882__$1,sym,input,output))
,_LT__GT___$3,((cljs.core.map_QMARK_(output))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__60882,map__60882__$1,sym,input,output){
return (function (p1__60880_SHARP_){
return cljs.core.tree_seq(new cljs.core.Keyword(null,"children","children",-940561982),com.wsscode.pathom.connect.normalized_children,edn_query_language.core.query__GT_ast(p1__60880_SHARP_));
});})(_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__60882,map__60882__$1,sym,input,output))
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
var G__60890 = arguments.length;
switch (G__60890) {
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
var provides = (function (){var G__60892 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(sym_data,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),cljs.core.PersistentVector.EMPTY);
return (com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1(G__60892) : com.wsscode.pathom.connect.normalize_io.call(null,G__60892));
})();
var map__60891 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("com.wsscode.pathom.connect","provides","com.wsscode.pathom.connect/provides",865831498),provides], null),sym_data], 0));
var map__60891__$1 = (((((!((map__60891 == null))))?(((((map__60891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60891):map__60891);
var sym_data__$1 = map__60891__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60891__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60891__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var input_SINGLEQUOTE_ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input))) && (cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.PersistentHashSet.EMPTY], null)),cljs.core.first(input)))))?cljs.core.PersistentHashSet.EMPTY:input);
return com.wsscode.pathom.connect.merge_indexes(indexes,(function (){var G__60894 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),cljs.core.PersistentArrayMap.createAsIfByAssoc([sym,sym_data__$1]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),com.wsscode.pathom.connect.index_attributes(sym_data__$1),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.PersistentArrayMap.createAsIfByAssoc([input_SINGLEQUOTE_,provides]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (provides,map__60891,map__60891__$1,sym_data__$1,input,output,input_SINGLEQUOTE_){
return (function (indexes__$1,out_attr){
var G__60895 = indexes__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([out_attr]),input)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__60895,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out_attr,input], null),com.wsscode.pathom.misc.sconj,sym);
} else {
return G__60895;
}
});})(provides,map__60891,map__60891__$1,sym_data__$1,input,output,input_SINGLEQUOTE_))
,cljs.core.PersistentArrayMap.EMPTY,com.wsscode.pathom.connect.flat_query(output))], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input_SINGLEQUOTE_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60894,new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(input_SINGLEQUOTE_)]));
} else {
return G__60894;
}
})());
});

com.wsscode.pathom.connect.add.cljs$lang$maxFixedArity = 3;

com.wsscode.pathom.connect.add_mutation = (function com$wsscode$pathom$connect$add_mutation(indexes,sym,p__60896){
var map__60897 = p__60896;
var map__60897__$1 = (((((!((map__60897 == null))))?(((((map__60897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60897):map__60897);
var data = map__60897__$1;
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60897__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60897__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
return com.wsscode.pathom.connect.merge_indexes(indexes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),cljs.core.PersistentArrayMap.createAsIfByAssoc([sym,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym)]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),(function (){var _LT__GT_ = cljs.core.PersistentArrayMap.EMPTY;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,map__60897,map__60897__$1,data,params,output){
return (function (idx,attribute){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,attribute,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),attribute,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),cljs.core.PersistentHashSet.createAsIfByAssoc([sym])], null));
});})(_LT__GT_,map__60897,map__60897__$1,data,params,output))
,_LT__GT_,(function (){var G__60899 = params;
var G__60899__$1 = (((G__60899 == null))?null:edn_query_language.core.query__GT_ast(G__60899));
if((G__60899__$1 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast_properties(G__60899__$1);
}
})());
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,map__60897,map__60897__$1,data,params,output){
return (function (idx,attribute){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,attribute,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),attribute,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),cljs.core.PersistentHashSet.createAsIfByAssoc([sym])], null));
});})(_LT__GT_,_LT__GT___$1,map__60897,map__60897__$1,data,params,output))
,_LT__GT___$1,(function (){var G__60900 = output;
var G__60900__$1 = (((G__60900 == null))?null:edn_query_language.core.query__GT_ast(G__60900));
if((G__60900__$1 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast_properties(G__60900__$1);
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
com.wsscode.pathom.connect.sort_resolvers = (function com$wsscode$pathom$connect$sort_resolvers(p__60901,resolvers,e){
var map__60902 = p__60901;
var map__60902__$1 = (((((!((map__60902 == null))))?(((((map__60902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60902):map__60902);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60902__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (map__60902,map__60902__$1,request_cache){
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
});})(map__60902,map__60902__$1,request_cache))
,resolvers);
});
/**
 * DEPRECATED
 */
com.wsscode.pathom.connect.pick_resolver = (function com$wsscode$pathom$connect$pick_resolver(p__60904){
var map__60905 = p__60904;
var map__60905__$1 = (((((!((map__60905 == null))))?(((((map__60905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60905):map__60905);
var env = map__60905__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60905__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var dependency_track = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60905__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null));
if(cljs.core.truth_(temp__5718__auto__)){
var attr_resolvers = temp__5718__auto__;
var r = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword(null,"missing","missing",362507769)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attr_resolvers,temp__5718__auto__,k,e,map__60905,map__60905__$1,env,indexes,dependency_track){
return (function (p__60907){
var vec__60908 = p__60907;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60908,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60908,(1),null);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.set(cljs.core.keys(e)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"missing","missing",362507769),missing], null);
});})(attr_resolvers,temp__5718__auto__,k,e,map__60905,map__60905__$1,env,indexes,dependency_track))
,attr_resolvers));
var G__60915 = r;
var vec__60916 = G__60915;
var seq__60917 = cljs.core.seq(vec__60916);
var first__60918 = cljs.core.first(seq__60917);
var seq__60917__$1 = cljs.core.next(seq__60917);
var map__60919 = first__60918;
var map__60919__$1 = (((((!((map__60919 == null))))?(((((map__60919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60919):map__60919);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60919__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60919__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var t = seq__60917__$1;
var xs = vec__60916;
var G__60915__$1 = G__60915;
while(true){
var vec__60921 = G__60915__$1;
var seq__60922 = cljs.core.seq(vec__60921);
var first__60923 = cljs.core.first(seq__60922);
var seq__60922__$1 = cljs.core.next(seq__60922);
var map__60924 = first__60923;
var map__60924__$1 = (((((!((map__60924 == null))))?(((((map__60924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60924):map__60924);
var sym__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60924__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var attrs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60924__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var t__$1 = seq__60922__$1;
var xs__$1 = vec__60921;
if(cljs.core.truth_(xs__$1)){
if((!(cljs.core.contains_QMARK_(dependency_track,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,attrs__$1], null))))){
var e__$1 = (function (){try{return com.wsscode.pathom.core.elide_items(com.wsscode.pathom.core.break_values,com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465),true),new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,attrs__$1], null)),attrs__$1));
}catch (e60926){var _ = e60926;
return cljs.core.PersistentArrayMap.EMPTY;
}})();
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attrs__$1),cljs.core.set(cljs.core.keys(e__$1)));
if(cljs.core.seq(missing)){
var G__65699 = t__$1;
G__60915__$1 = G__65699;
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
com.wsscode.pathom.connect.async_pick_resolver = (function com$wsscode$pathom$connect$async_pick_resolver(p__60927){
var map__60928 = p__60927;
var map__60928__$1 = (((((!((map__60928 == null))))?(((((map__60928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60928):map__60928);
var env = map__60928__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60928__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var dependency_track = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60928__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185));
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,map__60928,map__60928__$1,env,indexes,dependency_track){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,map__60928,map__60928__$1,env,indexes,dependency_track){
return (function (state_61076){
var state_val_61077 = (state_61076[(1)]);
if((state_val_61077 === (7))){
var state_61076__$1 = state_61076;
var statearr_61078_65715 = state_61076__$1;
(statearr_61078_65715[(2)] = null);

(statearr_61078_65715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (20))){
var inst_60991 = (state_61076[(7)]);
var inst_60997 = inst_60991.cljs$lang$protocol_mask$partition0$;
var inst_60998 = (inst_60997 & (64));
var inst_60999 = inst_60991.cljs$core$ISeq$;
var inst_61000 = (cljs.core.PROTOCOL_SENTINEL === inst_60999);
var inst_61001 = ((inst_60998) || (inst_61000));
var state_61076__$1 = state_61076;
if(cljs.core.truth_(inst_61001)){
var statearr_61079_65719 = state_61076__$1;
(statearr_61079_65719[(1)] = (23));

} else {
var statearr_61080_65726 = state_61076__$1;
(statearr_61080_65726[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (27))){
var inst_60991 = (state_61076[(7)]);
var state_61076__$1 = state_61076;
var statearr_61081_65728 = state_61076__$1;
(statearr_61081_65728[(2)] = inst_60991);

(statearr_61081_65728[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (1))){
var state_61076__$1 = state_61076;
var statearr_61082_65729 = state_61076__$1;
(statearr_61082_65729[(2)] = null);

(statearr_61082_65729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (24))){
var state_61076__$1 = state_61076;
var statearr_61083_65730 = state_61076__$1;
(statearr_61083_65730[(2)] = false);

(statearr_61083_65730[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (39))){
var inst_61039 = (state_61076[(2)]);
var inst_61040 = com.wsscode.async.async_cljs.throw_err(inst_61039);
var inst_61041 = com.wsscode.pathom.core.elide_items(com.wsscode.pathom.core.break_values,inst_61040);
var _ = (function (){var statearr_61084 = state_61076;
(statearr_61084[(4)] = cljs.core.rest((state_61076[(4)])));

return statearr_61084;
})();
var state_61076__$1 = state_61076;
var statearr_61085_65740 = state_61076__$1;
(statearr_61085_65740[(2)] = inst_61041);

(statearr_61085_65740[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (4))){
var inst_60930 = (state_61076[(2)]);
var state_61076__$1 = state_61076;
var statearr_61086_65744 = state_61076__$1;
(statearr_61086_65744[(2)] = inst_60930);

(statearr_61086_65744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (15))){
var inst_60959 = (state_61076[(8)]);
var inst_60978 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60959);
var state_61076__$1 = state_61076;
var statearr_61087_65748 = state_61076__$1;
(statearr_61087_65748[(2)] = inst_60978);

(statearr_61087_65748[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (21))){
var state_61076__$1 = state_61076;
var statearr_61088_65751 = state_61076__$1;
(statearr_61088_65751[(2)] = false);

(statearr_61088_65751[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (31))){
var inst_61066 = (state_61076[(2)]);
var state_61076__$1 = state_61076;
var statearr_61089_65754 = state_61076__$1;
(statearr_61089_65754[(2)] = inst_61066);

(statearr_61089_65754[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (32))){
var state_61076__$1 = state_61076;
var statearr_61090_65756 = state_61076__$1;
(statearr_61090_65756[(2)] = null);

(statearr_61090_65756[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (40))){
var inst_60992 = (state_61076[(9)]);
var inst_60984 = inst_60992;
var state_61076__$1 = (function (){var statearr_61091 = state_61076;
(statearr_61091[(10)] = inst_60984);

return statearr_61091;
})();
var statearr_61092_65758 = state_61076__$1;
(statearr_61092_65758[(2)] = null);

(statearr_61092_65758[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (33))){
var state_61076__$1 = state_61076;
var statearr_61093_65762 = state_61076__$1;
(statearr_61093_65762[(2)] = null);

(statearr_61093_65762[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (13))){
var state_61076__$1 = state_61076;
var statearr_61094_65765 = state_61076__$1;
(statearr_61094_65765[(2)] = false);

(statearr_61094_65765[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (22))){
var inst_61008 = (state_61076[(2)]);
var state_61076__$1 = state_61076;
if(cljs.core.truth_(inst_61008)){
var statearr_61095_65766 = state_61076__$1;
(statearr_61095_65766[(1)] = (26));

} else {
var statearr_61096_65767 = state_61076__$1;
(statearr_61096_65767[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (36))){
var inst_61015 = (state_61076[(11)]);
var inst_61044 = (state_61076[(12)]);
var inst_61044__$1 = (state_61076[(2)]);
var inst_61045 = cljs.core.set(inst_61015);
var inst_61046 = cljs.core.keys(inst_61044__$1);
var inst_61047 = cljs.core.set(inst_61046);
var inst_61048 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_61045,inst_61047);
var inst_61049 = cljs.core.seq(inst_61048);
var state_61076__$1 = (function (){var statearr_61097 = state_61076;
(statearr_61097[(12)] = inst_61044__$1);

return statearr_61097;
})();
if(inst_61049){
var statearr_61098_65774 = state_61076__$1;
(statearr_61098_65774[(1)] = (40));

} else {
var statearr_61099_65775 = state_61076__$1;
(statearr_61099_65775[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (41))){
var inst_61014 = (state_61076[(13)]);
var inst_61015 = (state_61076[(11)]);
var inst_61044 = (state_61076[(12)]);
var inst_61053 = [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"s","s",1705939918)];
var inst_61054 = cljs.core.select_keys(inst_61044,inst_61015);
var inst_61055 = com.wsscode.pathom.connect.sort_resolvers(env,inst_61014,inst_61044);
var inst_61056 = cljs.core.first(inst_61055);
var inst_61057 = [inst_61054,inst_61056];
var inst_61058 = cljs.core.PersistentHashMap.fromArrays(inst_61053,inst_61057);
var state_61076__$1 = state_61076;
var statearr_61100_65782 = state_61076__$1;
(statearr_61100_65782[(2)] = inst_61058);

(statearr_61100_65782[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (29))){
var inst_61014 = (state_61076[(13)]);
var inst_61015 = (state_61076[(11)]);
var inst_61017 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61018 = [inst_61014,inst_61015];
var inst_61019 = (new cljs.core.PersistentVector(null,2,(5),inst_61017,inst_61018,null));
var inst_61020 = cljs.core.contains_QMARK_(dependency_track,inst_61019);
var inst_61021 = (!(inst_61020));
var state_61076__$1 = state_61076;
if(inst_61021){
var statearr_61101_65786 = state_61076__$1;
(statearr_61101_65786[(1)] = (32));

} else {
var statearr_61102_65787 = state_61076__$1;
(statearr_61102_65787[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (6))){
var inst_60938 = (state_61076[(14)]);
var inst_60942 = (state_61076[(15)]);
var inst_60959 = (state_61076[(8)]);
var inst_60948 = (state_61076[(16)]);
var inst_60937 = (state_61076[(17)]);
var inst_60944 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword(null,"missing","missing",362507769));
var inst_60946 = (function (){var k = inst_60937;
var e = inst_60938;
var temp__5718__auto__ = inst_60942;
var attr_resolvers = inst_60942;
return ((function (k,e,temp__5718__auto__,attr_resolvers,inst_60938,inst_60942,inst_60959,inst_60948,inst_60937,inst_60944,state_val_61077,c__48839__auto__,map__60928,map__60928__$1,env,indexes,dependency_track){
return (function (p__60945){
var vec__61103 = p__60945;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61103,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61103,(1),null);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.set(cljs.core.keys(e)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"missing","missing",362507769),missing], null);
});
;})(k,e,temp__5718__auto__,attr_resolvers,inst_60938,inst_60942,inst_60959,inst_60948,inst_60937,inst_60944,state_val_61077,c__48839__auto__,map__60928,map__60928__$1,env,indexes,dependency_track))
})();
var inst_60947 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_60946,inst_60942);
var inst_60948__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(inst_60944,inst_60947);
var inst_60958 = cljs.core.seq(inst_60948__$1);
var inst_60959__$1 = cljs.core.first(inst_60958);
var inst_60960 = cljs.core.next(inst_60958);
var inst_60962 = (inst_60959__$1 == null);
var inst_60963 = cljs.core.not(inst_60962);
var state_61076__$1 = (function (){var statearr_61106 = state_61076;
(statearr_61106[(8)] = inst_60959__$1);

(statearr_61106[(18)] = inst_60960);

(statearr_61106[(16)] = inst_60948__$1);

return statearr_61106;
})();
if(inst_60963){
var statearr_61107_65801 = state_61076__$1;
(statearr_61107_65801[(1)] = (9));

} else {
var statearr_61108_65804 = state_61076__$1;
(statearr_61108_65804[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (28))){
var inst_60984 = (state_61076[(10)]);
var inst_61013 = (state_61076[(2)]);
var inst_61014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61013,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var inst_61015 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61013,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var state_61076__$1 = (function (){var statearr_61109 = state_61076;
(statearr_61109[(13)] = inst_61014);

(statearr_61109[(11)] = inst_61015);

return statearr_61109;
})();
if(cljs.core.truth_(inst_60984)){
var statearr_61110_65809 = state_61076__$1;
(statearr_61110_65809[(1)] = (29));

} else {
var statearr_61111_65810 = state_61076__$1;
(statearr_61111_65810[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (25))){
var inst_61005 = (state_61076[(2)]);
var state_61076__$1 = state_61076;
var statearr_61112_65811 = state_61076__$1;
(statearr_61112_65811[(2)] = inst_61005);

(statearr_61112_65811[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (34))){
var inst_61063 = (state_61076[(2)]);
var state_61076__$1 = state_61076;
var statearr_61113_65816 = state_61076__$1;
(statearr_61113_65816[(2)] = inst_61063);

(statearr_61113_65816[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (17))){
var inst_60948 = (state_61076[(16)]);
var inst_60981 = (state_61076[(2)]);
var inst_60982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60981,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var inst_60983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60981,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var inst_60984 = inst_60948;
var state_61076__$1 = (function (){var statearr_61114 = state_61076;
(statearr_61114[(19)] = inst_60982);

(statearr_61114[(20)] = inst_60983);

(statearr_61114[(10)] = inst_60984);

return statearr_61114;
})();
var statearr_61115_65818 = state_61076__$1;
(statearr_61115_65818[(2)] = null);

(statearr_61115_65818[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (3))){
var inst_61074 = (state_61076[(2)]);
var state_61076__$1 = state_61076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61076__$1,inst_61074);
} else {
if((state_val_61077 === (12))){
var state_61076__$1 = state_61076;
var statearr_61116_65823 = state_61076__$1;
(statearr_61116_65823[(2)] = true);

(statearr_61116_65823[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (2))){
var inst_60942 = (state_61076[(15)]);
var inst_60937 = (state_61076[(17)]);
var _ = (function (){var statearr_61117 = state_61076;
(statearr_61117[(4)] = cljs.core.cons((5),(state_61076[(4)])));

return statearr_61117;
})();
var inst_60936 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_60937__$1 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_60936);
var inst_60938 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var inst_60939 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60940 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),inst_60937__$1];
var inst_60941 = (new cljs.core.PersistentVector(null,2,(5),inst_60939,inst_60940,null));
var inst_60942__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_60941);
var state_61076__$1 = (function (){var statearr_61118 = state_61076;
(statearr_61118[(14)] = inst_60938);

(statearr_61118[(15)] = inst_60942__$1);

(statearr_61118[(17)] = inst_60937__$1);

return statearr_61118;
})();
if(cljs.core.truth_(inst_60942__$1)){
var statearr_61119_65828 = state_61076__$1;
(statearr_61119_65828[(1)] = (6));

} else {
var statearr_61120_65831 = state_61076__$1;
(statearr_61120_65831[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (23))){
var state_61076__$1 = state_61076;
var statearr_61121_65833 = state_61076__$1;
(statearr_61121_65833[(2)] = true);

(statearr_61121_65833[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (35))){
var inst_61014 = (state_61076[(13)]);
var inst_61015 = (state_61076[(11)]);
var _ = (function (){var statearr_61122 = state_61076;
(statearr_61122[(4)] = cljs.core.cons((38),(state_61076[(4)])));

return statearr_61122;
})();
var inst_61030 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465),true);
var inst_61031 = cljs.core.PersistentHashSet.EMPTY;
var inst_61032 = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,inst_61031);
var inst_61033 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61034 = [inst_61014,inst_61015];
var inst_61035 = (new cljs.core.PersistentVector(null,2,(5),inst_61033,inst_61034,null));
var inst_61036 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_61030,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),inst_61032,inst_61035);
var inst_61037 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(inst_61036,inst_61015);
var state_61076__$1 = state_61076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61076__$1,(39),inst_61037);
} else {
if((state_val_61077 === (19))){
var inst_61068 = (state_61076[(2)]);
var state_61076__$1 = state_61076;
var statearr_61123_65841 = state_61076__$1;
(statearr_61123_65841[(2)] = inst_61068);

(statearr_61123_65841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (11))){
var inst_60976 = (state_61076[(2)]);
var state_61076__$1 = state_61076;
if(cljs.core.truth_(inst_60976)){
var statearr_61125_65844 = state_61076__$1;
(statearr_61125_65844[(1)] = (15));

} else {
var statearr_61126_65845 = state_61076__$1;
(statearr_61126_65845[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (9))){
var inst_60959 = (state_61076[(8)]);
var inst_60965 = inst_60959.cljs$lang$protocol_mask$partition0$;
var inst_60966 = (inst_60965 & (64));
var inst_60967 = inst_60959.cljs$core$ISeq$;
var inst_60968 = (cljs.core.PROTOCOL_SENTINEL === inst_60967);
var inst_60969 = ((inst_60966) || (inst_60968));
var state_61076__$1 = state_61076;
if(cljs.core.truth_(inst_60969)){
var statearr_61127_65847 = state_61076__$1;
(statearr_61127_65847[(1)] = (12));

} else {
var statearr_61128_65848 = state_61076__$1;
(statearr_61128_65848[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (5))){
var _ = (function (){var statearr_61129 = state_61076;
(statearr_61129[(4)] = cljs.core.rest((state_61076[(4)])));

return statearr_61129;
})();
var state_61076__$1 = state_61076;
var ex61124 = (state_61076__$1[(2)]);
var statearr_61130_65850 = state_61076__$1;
(statearr_61130_65850[(5)] = ex61124);


var statearr_61131_65856 = state_61076__$1;
(statearr_61131_65856[(1)] = (4));

(statearr_61131_65856[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (14))){
var inst_60973 = (state_61076[(2)]);
var state_61076__$1 = state_61076;
var statearr_61132_65860 = state_61076__$1;
(statearr_61132_65860[(2)] = inst_60973);

(statearr_61132_65860[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (26))){
var inst_60991 = (state_61076[(7)]);
var inst_61010 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60991);
var state_61076__$1 = state_61076;
var statearr_61134_65861 = state_61076__$1;
(statearr_61134_65861[(2)] = inst_61010);

(statearr_61134_65861[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (16))){
var inst_60959 = (state_61076[(8)]);
var state_61076__$1 = state_61076;
var statearr_61135_65863 = state_61076__$1;
(statearr_61135_65863[(2)] = inst_60959);

(statearr_61135_65863[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (38))){
var _ = (function (){var statearr_61136 = state_61076;
(statearr_61136[(4)] = cljs.core.rest((state_61076[(4)])));

return statearr_61136;
})();
var state_61076__$1 = state_61076;
var ex61133 = (state_61076__$1[(2)]);
var statearr_61137_65864 = state_61076__$1;
(statearr_61137_65864[(5)] = ex61133);


var statearr_61138_65865 = state_61076__$1;
(statearr_61138_65865[(1)] = (37));

(statearr_61138_65865[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (30))){
var state_61076__$1 = state_61076;
var statearr_61139_65867 = state_61076__$1;
(statearr_61139_65867[(2)] = null);

(statearr_61139_65867[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (10))){
var state_61076__$1 = state_61076;
var statearr_61140_65871 = state_61076__$1;
(statearr_61140_65871[(2)] = false);

(statearr_61140_65871[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (18))){
var inst_60991 = (state_61076[(7)]);
var inst_60984 = (state_61076[(10)]);
var inst_60990 = cljs.core.seq(inst_60984);
var inst_60991__$1 = cljs.core.first(inst_60990);
var inst_60992 = cljs.core.next(inst_60990);
var inst_60994 = (inst_60991__$1 == null);
var inst_60995 = cljs.core.not(inst_60994);
var state_61076__$1 = (function (){var statearr_61141 = state_61076;
(statearr_61141[(7)] = inst_60991__$1);

(statearr_61141[(9)] = inst_60992);

return statearr_61141;
})();
if(inst_60995){
var statearr_61142_65874 = state_61076__$1;
(statearr_61142_65874[(1)] = (20));

} else {
var statearr_61143_65875 = state_61076__$1;
(statearr_61143_65875[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (42))){
var inst_61060 = (state_61076[(2)]);
var state_61076__$1 = state_61076;
var statearr_61144_65876 = state_61076__$1;
(statearr_61144_65876[(2)] = inst_61060);

(statearr_61144_65876[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (37))){
var inst_61023 = (state_61076[(2)]);
var inst_61024 = cljs.core.PersistentHashMap.EMPTY;
var state_61076__$1 = (function (){var statearr_61145 = state_61076;
(statearr_61145[(21)] = inst_61023);

return statearr_61145;
})();
var statearr_61146_65879 = state_61076__$1;
(statearr_61146_65879[(2)] = inst_61024);

(statearr_61146_65879[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61077 === (8))){
var inst_61071 = (state_61076[(2)]);
var _ = (function (){var statearr_61147 = state_61076;
(statearr_61147[(4)] = cljs.core.rest((state_61076[(4)])));

return statearr_61147;
})();
var state_61076__$1 = state_61076;
var statearr_61148_65885 = state_61076__$1;
(statearr_61148_65885[(2)] = inst_61071);

(statearr_61148_65885[(1)] = (3));


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
});})(c__48839__auto__,map__60928,map__60928__$1,env,indexes,dependency_track))
;
return ((function (switch__48139__auto__,c__48839__auto__,map__60928,map__60928__$1,env,indexes,dependency_track){
return (function() {
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__48140__auto____0 = (function (){
var statearr_61149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61149[(0)] = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__48140__auto__);

(statearr_61149[(1)] = (1));

return statearr_61149;
});
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__48140__auto____1 = (function (state_61076){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_61076);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e61150){var ex__48143__auto__ = e61150;
var statearr_61151_65887 = state_61076;
(statearr_61151_65887[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_61076[(4)]))){
var statearr_61152_65889 = state_61076;
(statearr_61152_65889[(1)] = cljs.core.first((state_61076[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65893 = state_61076;
state_61076 = G__65893;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__48140__auto__ = function(state_61076){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__48140__auto____1.call(this,state_61076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__48140__auto____0;
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__48140__auto____1;
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,map__60928,map__60928__$1,env,indexes,dependency_track))
})();
var state__48841__auto__ = (function (){var statearr_61153 = f__48840__auto__();
(statearr_61153[(6)] = c__48839__auto__);

return statearr_61153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,map__60928,map__60928__$1,env,indexes,dependency_track))
);

return c__48839__auto__;
});
com.wsscode.pathom.connect.default_resolver_dispatch = (function com$wsscode$pathom$connect$default_resolver_dispatch(_env,_entity){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Default resolver-dispatch is not supported on CLJS, please implement ::p.connect/resolver-dispatch in your parser environment.",cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Helper method that extract resolver symbol from env. It's recommended to use as a dispatch method for creating
 *   multi-methods for resolver dispatch.
 */
com.wsscode.pathom.connect.resolver_dispatch = (function com$wsscode$pathom$connect$resolver_dispatch(var_args){
var G__61155 = arguments.length;
switch (G__61155) {
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
com.wsscode.pathom.connect.resolver_dispatch_embedded = (function com$wsscode$pathom$connect$resolver_dispatch_embedded(p__61156,entity){
var map__61157 = p__61156;
var map__61157__$1 = (((((!((map__61157 == null))))?(((((map__61157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61157):map__61157);
var env = map__61157__$1;
var map__61158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61157__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__61158__$1 = (((((!((map__61158 == null))))?(((((map__61158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61158):map__61158);
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61158__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61158__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
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
var len__4730__auto___65921 = arguments.length;
var i__4731__auto___65922 = (0);
while(true){
if((i__4731__auto___65922 < len__4730__auto___65921)){
args__4736__auto__.push((arguments[i__4731__auto___65922]));

var G__65923 = (i__4731__auto___65922 + (1));
i__4731__auto___65922 = G__65923;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic = (function (p__61164,resolver,args){
var map__61165 = p__61164;
var map__61165__$1 = (((((!((map__61165 == null))))?(((((map__61165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61165):map__61165);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61165__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
if(cljs.core.truth_(resolver_weights)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,resolver_weights,cljs.core.update,resolver,args);
} else {
return null;
}
});

com.wsscode.pathom.connect.update_resolver_weight.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.connect.update_resolver_weight.cljs$lang$applyTo = (function (seq61161){
var G__61162 = cljs.core.first(seq61161);
var seq61161__$1 = cljs.core.next(seq61161);
var G__61163 = cljs.core.first(seq61161__$1);
var seq61161__$2 = cljs.core.next(seq61161__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61162,G__61163,seq61161__$2);
});

com.wsscode.pathom.connect.call_resolver_STAR_ = (function com$wsscode$pathom$connect$call_resolver_STAR_(p__61167,entity){
var map__61168 = p__61167;
var map__61168__$1 = (((((!((map__61168 == null))))?(((((map__61168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61168):map__61168);
var env = map__61168__$1;
var resolver_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61168__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.connect.default_resolver_dispatch);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61168__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var resolver_sym = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env));
var tid = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),cljs.core.str.cljs$core$IFn$_invoke$arity$1(resolver_sym),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),entity], null));
var start = com.wsscode.pathom.trace.now();
var res__54040__auto__ = (function (){try{return com.wsscode.pathom.core.exec_plugin_actions.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.connect","wrap-resolve","com.wsscode.pathom.connect/wrap-resolve",1728436586),resolver_dispatch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,entity], 0));
}catch (e61170){var e = e61170;
return e;
}})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__54040__auto__)){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,res__54040__auto__,resolver_sym,tid,start,map__61168,map__61168__$1,env,resolver_dispatch,resolver_weights){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,res__54040__auto__,resolver_sym,tid,start,map__61168,map__61168__$1,env,resolver_dispatch,resolver_weights){
return (function (state_61203){
var state_val_61204 = (state_61203[(1)]);
if((state_val_61204 === (7))){
var inst_61180 = com.wsscode.pathom.trace.now();
var inst_61181 = (inst_61180 - start);
var inst_61182 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(resolver_weights,cljs.core.update,resolver_sym,com.wsscode.pathom.connect.step_weight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_61181], 0));
var state_61203__$1 = state_61203;
var statearr_61205_65935 = state_61203__$1;
(statearr_61205_65935[(2)] = inst_61182);

(statearr_61205_65935[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61204 === (1))){
var state_61203__$1 = state_61203;
var statearr_61206_65938 = state_61203__$1;
(statearr_61206_65938[(2)] = null);

(statearr_61206_65938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61204 === (4))){
var inst_61171 = (state_61203[(2)]);
var state_61203__$1 = state_61203;
var statearr_61207_65940 = state_61203__$1;
(statearr_61207_65940[(2)] = inst_61171);

(statearr_61207_65940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61204 === (6))){
var inst_61178 = (state_61203[(2)]);
var state_61203__$1 = (function (){var statearr_61208 = state_61203;
(statearr_61208[(7)] = inst_61178);

return statearr_61208;
})();
if(cljs.core.truth_(resolver_weights)){
var statearr_61209_65942 = state_61203__$1;
(statearr_61209_65942[(1)] = (7));

} else {
var statearr_61210_65943 = state_61203__$1;
(statearr_61210_65943[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61204 === (3))){
var inst_61201 = (state_61203[(2)]);
var state_61203__$1 = state_61203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61203__$1,inst_61201);
} else {
if((state_val_61204 === (12))){
var inst_61178 = (state_61203[(7)]);
var inst_61196 = (state_61203[(2)]);
var inst_61197 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,inst_61196);
var inst_61198 = com.wsscode.async.async_cljs.throw_err(inst_61178);
var _ = (function (){var statearr_61211 = state_61203;
(statearr_61211[(4)] = cljs.core.rest((state_61203[(4)])));

return statearr_61211;
})();
var state_61203__$1 = (function (){var statearr_61212 = state_61203;
(statearr_61212[(8)] = inst_61197);

return statearr_61212;
})();
var statearr_61213_65946 = state_61203__$1;
(statearr_61213_65946[(2)] = inst_61198);

(statearr_61213_65946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61204 === (2))){
var _ = (function (){var statearr_61214 = state_61203;
(statearr_61214[(4)] = cljs.core.cons((5),(state_61203[(4)])));

return statearr_61214;
})();
var state_61203__$1 = state_61203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61203__$1,(6),res__54040__auto__);
} else {
if((state_val_61204 === (11))){
var inst_61189 = (state_61203[(9)]);
var state_61203__$1 = state_61203;
var statearr_61216_65947 = state_61203__$1;
(statearr_61216_65947[(2)] = inst_61189);

(statearr_61216_65947[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61204 === (9))){
var inst_61178 = (state_61203[(7)]);
var inst_61185 = (state_61203[(2)]);
var inst_61187 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_61188 = [new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624)];
var inst_61189 = cljs.core.PersistentHashMap.fromArrays(inst_61187,inst_61188);
var inst_61190 = com.wsscode.async.async_cljs.error_QMARK_(inst_61178);
var state_61203__$1 = (function (){var statearr_61217 = state_61203;
(statearr_61217[(10)] = inst_61185);

(statearr_61217[(9)] = inst_61189);

return statearr_61217;
})();
if(inst_61190){
var statearr_61218_65949 = state_61203__$1;
(statearr_61218_65949[(1)] = (10));

} else {
var statearr_61219_65951 = state_61203__$1;
(statearr_61219_65951[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61204 === (5))){
var _ = (function (){var statearr_61220 = state_61203;
(statearr_61220[(4)] = cljs.core.rest((state_61203[(4)])));

return statearr_61220;
})();
var state_61203__$1 = state_61203;
var ex61215 = (state_61203__$1[(2)]);
var statearr_61221_65955 = state_61203__$1;
(statearr_61221_65955[(5)] = ex61215);


var statearr_61222_65956 = state_61203__$1;
(statearr_61222_65956[(1)] = (4));

(statearr_61222_65956[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61204 === (10))){
var inst_61189 = (state_61203[(9)]);
var inst_61178 = (state_61203[(7)]);
var inst_61192 = com.wsscode.pathom.core.process_error(env,inst_61178);
var inst_61193 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_61189,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),inst_61192);
var state_61203__$1 = state_61203;
var statearr_61223_65957 = state_61203__$1;
(statearr_61223_65957[(2)] = inst_61193);

(statearr_61223_65957[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61204 === (8))){
var state_61203__$1 = state_61203;
var statearr_61224_65958 = state_61203__$1;
(statearr_61224_65958[(2)] = null);

(statearr_61224_65958[(1)] = (9));


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
});})(c__48839__auto__,res__54040__auto__,resolver_sym,tid,start,map__61168,map__61168__$1,env,resolver_dispatch,resolver_weights))
;
return ((function (switch__48139__auto__,c__48839__auto__,res__54040__auto__,resolver_sym,tid,start,map__61168,map__61168__$1,env,resolver_dispatch,resolver_weights){
return (function() {
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__48140__auto____0 = (function (){
var statearr_61225 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61225[(0)] = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__48140__auto__);

(statearr_61225[(1)] = (1));

return statearr_61225;
});
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__48140__auto____1 = (function (state_61203){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_61203);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e61226){var ex__48143__auto__ = e61226;
var statearr_61227_65961 = state_61203;
(statearr_61227_65961[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_61203[(4)]))){
var statearr_61228_65963 = state_61203;
(statearr_61228_65963[(1)] = cljs.core.first((state_61203[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65964 = state_61203;
state_61203 = G__65964;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__48140__auto__ = function(state_61203){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__48140__auto____1.call(this,state_61203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__48140__auto____0;
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__48140__auto____1;
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,res__54040__auto__,resolver_sym,tid,start,map__61168,map__61168__$1,env,resolver_dispatch,resolver_weights))
})();
var state__48841__auto__ = (function (){var statearr_61229 = f__48840__auto__();
(statearr_61229[(6)] = c__48839__auto__);

return statearr_61229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,res__54040__auto__,resolver_sym,tid,start,map__61168,map__61168__$1,env,resolver_dispatch,resolver_weights))
);

return c__48839__auto__;
} else {
var x = res__54040__auto__;
if(cljs.core.truth_(resolver_weights)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(resolver_weights,cljs.core.update,resolver_sym,com.wsscode.pathom.connect.step_weight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.trace.now() - start)], 0));
} else {
}

com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,(function (){var G__61230 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624)], null);
if(com.wsscode.async.async_cljs.error_QMARK_(x)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61230,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),com.wsscode.pathom.core.process_error(env,x));
} else {
return G__61230;
}
})());

return com.wsscode.async.async_cljs.throw_err(x);
}
});
com.wsscode.pathom.connect.call_resolver = (function com$wsscode$pathom$connect$call_resolver(p__61232,entity){
var map__61233 = p__61232;
var map__61233__$1 = (((((!((map__61233 == null))))?(((((map__61233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61233):map__61233);
var env = map__61233__$1;
var pool_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61233__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449));
if(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__61233,map__61233__$1,env,pool_chan){
return (function (p1__61231_SHARP_){
return cljs.core.contains_QMARK_(com.wsscode.pathom.core.break_values,cljs.core.second(p1__61231_SHARP_));
});})(map__61233,map__61233__$1,env,pool_chan))
,entity))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver input",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity","entity",-450970276),entity], null));
} else {
if(cljs.core.truth_(pool_chan)){
var out = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__48839__auto___65973 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto___65973,out,map__61233,map__61233__$1,env,pool_chan){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto___65973,out,map__61233,map__61233__$1,env,pool_chan){
return (function (state_61253){
var state_val_61254 = (state_61253[(1)]);
if((state_val_61254 === (1))){
var inst_61235 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_61236 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_61237 = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(inst_61236);
var inst_61238 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_61237);
var inst_61239 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_61240 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_61239);
var inst_61241 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_61242 = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(inst_61241);
var inst_61243 = [new cljs.core.Keyword("com.wsscode.pathom.connect","schedule-resolver","com.wsscode.pathom.connect/schedule-resolver",939563419),inst_61238,inst_61240,inst_61242,entity];
var inst_61244 = cljs.core.PersistentHashMap.fromArrays(inst_61235,inst_61243);
var inst_61245 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_61244);
var inst_61246 = [new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"f","f",-1597136552)];
var inst_61247 = (function (){var tid = inst_61245;
return ((function (tid,inst_61235,inst_61236,inst_61237,inst_61238,inst_61239,inst_61240,inst_61241,inst_61242,inst_61243,inst_61244,inst_61245,inst_61246,state_val_61254,c__48839__auto___65973,out,map__61233,map__61233__$1,env,pool_chan){
return (function (){
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","schedule-resolver","com.wsscode.pathom.connect/schedule-resolver",939563419)], null));

try{return com.wsscode.pathom.connect.call_resolver_STAR_(env,entity);
}catch (e61255){var e = e61255;
return e;
}});
;})(tid,inst_61235,inst_61236,inst_61237,inst_61238,inst_61239,inst_61240,inst_61241,inst_61242,inst_61243,inst_61244,inst_61245,inst_61246,state_val_61254,c__48839__auto___65973,out,map__61233,map__61233__$1,env,pool_chan))
})();
var inst_61248 = [out,inst_61247];
var inst_61249 = cljs.core.PersistentHashMap.fromArrays(inst_61246,inst_61248);
var state_61253__$1 = state_61253;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61253__$1,(2),pool_chan,inst_61249);
} else {
if((state_val_61254 === (2))){
var inst_61251 = (state_61253[(2)]);
var state_61253__$1 = state_61253;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61253__$1,inst_61251);
} else {
return null;
}
}
});})(c__48839__auto___65973,out,map__61233,map__61233__$1,env,pool_chan))
;
return ((function (switch__48139__auto__,c__48839__auto___65973,out,map__61233,map__61233__$1,env,pool_chan){
return (function() {
var com$wsscode$pathom$connect$call_resolver_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$connect$call_resolver_$_state_machine__48140__auto____0 = (function (){
var statearr_61256 = [null,null,null,null,null,null,null];
(statearr_61256[(0)] = com$wsscode$pathom$connect$call_resolver_$_state_machine__48140__auto__);

(statearr_61256[(1)] = (1));

return statearr_61256;
});
var com$wsscode$pathom$connect$call_resolver_$_state_machine__48140__auto____1 = (function (state_61253){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_61253);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e61257){var ex__48143__auto__ = e61257;
var statearr_61258_65986 = state_61253;
(statearr_61258_65986[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_61253[(4)]))){
var statearr_61259_65987 = state_61253;
(statearr_61259_65987[(1)] = cljs.core.first((state_61253[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65988 = state_61253;
state_61253 = G__65988;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$connect$call_resolver_$_state_machine__48140__auto__ = function(state_61253){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$call_resolver_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$call_resolver_$_state_machine__48140__auto____1.call(this,state_61253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$call_resolver_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$call_resolver_$_state_machine__48140__auto____0;
com$wsscode$pathom$connect$call_resolver_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$call_resolver_$_state_machine__48140__auto____1;
return com$wsscode$pathom$connect$call_resolver_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto___65973,out,map__61233,map__61233__$1,env,pool_chan))
})();
var state__48841__auto__ = (function (){var statearr_61260 = f__48840__auto__();
(statearr_61260[(6)] = c__48839__auto___65973);

return statearr_61260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto___65973,out,map__61233,map__61233__$1,env,pool_chan))
);


return out;
} else {
return com.wsscode.pathom.connect.call_resolver_STAR_(env,entity);
}
}
});
com.wsscode.pathom.connect.entity_select_keys = (function com$wsscode$pathom$connect$entity_select_keys(env,entity,input){
var entity__$1 = com.wsscode.pathom.core.maybe_atom(entity);
var res__54030__auto__ = ((clojure.set.subset_QMARK_(input,entity__$1))?entity__$1:com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(entity__$1)),new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404)], 0)),cljs.core.vec(input)));
if(com.wsscode.async.async_cljs.chan_QMARK_(res__54030__auto__)){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,res__54030__auto__,entity__$1){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,res__54030__auto__,entity__$1){
return (function (state_61275){
var state_val_61276 = (state_61275[(1)]);
if((state_val_61276 === (1))){
var state_61275__$1 = state_61275;
var statearr_61277_65992 = state_61275__$1;
(statearr_61277_65992[(2)] = null);

(statearr_61277_65992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61276 === (2))){
var _ = (function (){var statearr_61278 = state_61275;
(statearr_61278[(4)] = cljs.core.cons((5),(state_61275[(4)])));

return statearr_61278;
})();
var state_61275__$1 = state_61275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61275__$1,(6),res__54030__auto__);
} else {
if((state_val_61276 === (3))){
var inst_61273 = (state_61275[(2)]);
var state_61275__$1 = state_61275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61275__$1,inst_61273);
} else {
if((state_val_61276 === (4))){
var inst_61261 = (state_61275[(2)]);
var state_61275__$1 = state_61275;
var statearr_61280_65996 = state_61275__$1;
(statearr_61280_65996[(2)] = inst_61261);

(statearr_61280_65996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61276 === (5))){
var _ = (function (){var statearr_61281 = state_61275;
(statearr_61281[(4)] = cljs.core.rest((state_61275[(4)])));

return statearr_61281;
})();
var state_61275__$1 = state_61275;
var ex61279 = (state_61275__$1[(2)]);
var statearr_61282_65997 = state_61275__$1;
(statearr_61282_65997[(5)] = ex61279);


var statearr_61283_65998 = state_61275__$1;
(statearr_61283_65998[(1)] = (4));

(statearr_61283_65998[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61276 === (6))){
var inst_61268 = (state_61275[(2)]);
var inst_61269 = com.wsscode.async.async_cljs.throw_err(inst_61268);
var inst_61270 = cljs.core.select_keys(inst_61269,input);
var _ = (function (){var statearr_61284 = state_61275;
(statearr_61284[(4)] = cljs.core.rest((state_61275[(4)])));

return statearr_61284;
})();
var state_61275__$1 = state_61275;
var statearr_61285_66003 = state_61275__$1;
(statearr_61285_66003[(2)] = inst_61270);

(statearr_61285_66003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__48839__auto__,res__54030__auto__,entity__$1))
;
return ((function (switch__48139__auto__,c__48839__auto__,res__54030__auto__,entity__$1){
return (function() {
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__48140__auto____0 = (function (){
var statearr_61286 = [null,null,null,null,null,null,null];
(statearr_61286[(0)] = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__48140__auto__);

(statearr_61286[(1)] = (1));

return statearr_61286;
});
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__48140__auto____1 = (function (state_61275){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_61275);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e61287){var ex__48143__auto__ = e61287;
var statearr_61288_66007 = state_61275;
(statearr_61288_66007[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_61275[(4)]))){
var statearr_61289_66009 = state_61275;
(statearr_61289_66009[(1)] = cljs.core.first((state_61275[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66010 = state_61275;
state_61275 = G__66010;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__48140__auto__ = function(state_61275){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__48140__auto____1.call(this,state_61275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__48140__auto____0;
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__48140__auto____1;
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,res__54030__auto__,entity__$1))
})();
var state__48841__auto__ = (function (){var statearr_61290 = f__48840__auto__();
(statearr_61290[(6)] = c__48839__auto__);

return statearr_61290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,res__54030__auto__,entity__$1))
);

return c__48839__auto__;
} else {
var e = res__54030__auto__;
return cljs.core.select_keys(e,input);
}
});
com.wsscode.pathom.connect.all_values_valid_QMARK_ = (function com$wsscode$pathom$connect$all_values_valid_QMARK_(m,input){
return ((cljs.core.every_QMARK_((function (p__61295){
var vec__61296 = p__61295;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61296,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61296,(1),null);
return cljs.core.not((com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.core.break_values.call(null,v)));
}),m)) && (cljs.core.every_QMARK_(m,input)));
});
com.wsscode.pathom.connect.cache_batch = (function com$wsscode$pathom$connect$cache_batch(env,resolver_sym,linked_results){
var params = com.wsscode.pathom.core.params(env);
var seq__61299 = cljs.core.seq(linked_results);
var chunk__61300 = null;
var count__61301 = (0);
var i__61302 = (0);
while(true){
if((i__61302 < count__61301)){
var vec__61309 = chunk__61300.cljs$core$IIndexed$_nth$arity$2(null,i__61302);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61309,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61309,(1),null);
com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,input,params], null),((function (seq__61299,chunk__61300,count__61301,i__61302,vec__61309,input,value,params){
return (function (){
return value;
});})(seq__61299,chunk__61300,count__61301,i__61302,vec__61309,input,value,params))
);


var G__66014 = seq__61299;
var G__66015 = chunk__61300;
var G__66016 = count__61301;
var G__66017 = (i__61302 + (1));
seq__61299 = G__66014;
chunk__61300 = G__66015;
count__61301 = G__66016;
i__61302 = G__66017;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__61299);
if(temp__5720__auto__){
var seq__61299__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61299__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61299__$1);
var G__66019 = cljs.core.chunk_rest(seq__61299__$1);
var G__66020 = c__4550__auto__;
var G__66021 = cljs.core.count(c__4550__auto__);
var G__66022 = (0);
seq__61299 = G__66019;
chunk__61300 = G__66020;
count__61301 = G__66021;
i__61302 = G__66022;
continue;
} else {
var vec__61312 = cljs.core.first(seq__61299__$1);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61312,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61312,(1),null);
com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,input,params], null),((function (seq__61299,chunk__61300,count__61301,i__61302,vec__61312,input,value,seq__61299__$1,temp__5720__auto__,params){
return (function (){
return value;
});})(seq__61299,chunk__61300,count__61301,i__61302,vec__61312,input,value,seq__61299__$1,temp__5720__auto__,params))
);


var G__66028 = cljs.core.next(seq__61299__$1);
var G__66029 = null;
var G__66030 = (0);
var G__66031 = (0);
seq__61299 = G__66028;
chunk__61300 = G__66029;
count__61301 = G__66030;
i__61302 = G__66031;
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
var new_paths = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__61315_SHARP_){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,p1__61315_SHARP_], null)],null));
})),resolvers);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(input,keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pending], 0));
if(cljs.core.seq(missing)){
var missing_paths = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (new_paths,missing){
return (function (p1__61317_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (new_paths,missing){
return (function (acc,x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,x);
});})(new_paths,missing))
,cljs.core.first(p1__61317_SHARP_),cljs.core.next(p1__61317_SHARP_));
});})(new_paths,missing))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(com.wsscode.common.combinatorics.cartesian_product,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (new_paths,missing){
return (function (p1__61316_SHARP_){
var G__61319 = index_oir;
var G__61320 = keys;
var G__61321 = bad_keys;
var G__61322 = p1__61316_SHARP_;
var G__61323 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pending,p1__61316_SHARP_);
return (com.wsscode.pathom.connect.compute_paths_STAR_.cljs$core$IFn$_invoke$arity$5 ? com.wsscode.pathom.connect.compute_paths_STAR_.cljs$core$IFn$_invoke$arity$5(G__61319,G__61320,G__61321,G__61322,G__61323) : com.wsscode.pathom.connect.compute_paths_STAR_.call(null,G__61319,G__61320,G__61321,G__61322,G__61323));
});})(new_paths,missing))
),missing)));
if(cljs.core.seq(missing_paths)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(paths,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (missing_paths,new_paths,missing){
return (function (p1__61318_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (missing_paths,new_paths,missing){
return (function (acc,x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,x);
});})(missing_paths,new_paths,missing))
,cljs.core.first(p1__61318_SHARP_),cljs.core.next(p1__61318_SHARP_));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$3((function (p1__61324_SHARP_){
return com.wsscode.pathom.misc.distinct_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__61324_SHARP_);
}),(function (p1__61325_SHARP_){
return com.wsscode.pathom.misc.distinct_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,p1__61325_SHARP_);
}),cljs.core.rseq)),com.wsscode.pathom.connect.compute_paths_STAR_(index_oir,keys,bad_keys,attr,cljs.core.PersistentHashSet.createAsIfByAssoc([attr])));
});
com.wsscode.pathom.connect.split_good_bad_keys = (function com$wsscode$pathom$connect$split_good_bad_keys(entity){
var map__61327 = cljs.core.group_by((function (p1__61326_SHARP_){
return cljs.core.contains_QMARK_(com.wsscode.pathom.core.break_values,cljs.core.second(p1__61326_SHARP_));
}),entity);
var map__61327__$1 = (((((!((map__61327 == null))))?(((((map__61327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61327):map__61327);
var bad_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61327__$1,true);
var good_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61327__$1,false);
var good_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),good_keys);
var bad_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),bad_keys);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [good_keys__$1,bad_keys__$1], null);
});
com.wsscode.pathom.connect.path_cost = (function com$wsscode$pathom$connect$path_cost(p__61329,path){
var map__61330 = p__61329;
var map__61330__$1 = (((((!((map__61330 == null))))?(((((map__61330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61330):map__61330);
var env = map__61330__$1;
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61330__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61330__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
var weights = (function (){var or__4131__auto__ = (function (){var G__61333 = resolver_weights;
if((G__61333 == null)){
return null;
} else {
return cljs.core.deref(G__61333);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (weights,map__61330,map__61330__$1,env,resolver_weights,request_cache){
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
});})(weights,map__61330,map__61330__$1,env,resolver_weights,request_cache))
),cljs.core._PLUS_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(path));
});
com.wsscode.pathom.connect.default_sort_plan = (function com$wsscode$pathom$connect$default_sort_plan(env,plan){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__61334_SHARP_){
return com.wsscode.pathom.connect.path_cost(env,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__61334_SHARP_));
}),plan);
});
com.wsscode.pathom.connect.resolve_plan = (function com$wsscode$pathom$connect$resolve_plan(p__61335){
var map__61336 = p__61335;
var map__61336__$1 = (((((!((map__61336 == null))))?(((((map__61336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61336):map__61336);
var env = map__61336__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61336__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var sort_plan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61336__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sort-plan","com.wsscode.pathom.connect/sort-plan",-1506396873));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var sort_plan__$1 = (function (){var or__4131__auto__ = sort_plan;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.connect.default_sort_plan;
}
})();
var vec__61338 = com.wsscode.pathom.connect.split_good_bad_keys(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env));
var good_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61338,(0),null);
var bad_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61338,(1),null);
var G__61341 = env;
var G__61342 = com.wsscode.pathom.connect.compute_paths(new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746).cljs$core$IFn$_invoke$arity$1(indexes),good_keys,bad_keys,key);
return (sort_plan__$1.cljs$core$IFn$_invoke$arity$2 ? sort_plan__$1.cljs$core$IFn$_invoke$arity$2(G__61341,G__61342) : sort_plan__$1.call(null,G__61341,G__61342));
});
com.wsscode.pathom.connect.resolver__GT_output = (function com$wsscode$pathom$connect$resolver__GT_output(env,resolver_sym){
var map__61343 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),resolver_sym], null));
var map__61343__$1 = (((((!((map__61343 == null))))?(((((map__61343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61343):map__61343);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61343__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var compute_output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61343__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","compute-output","com.wsscode.pathom.connect/compute-output",2103799942));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__61345_SHARP_){
return com.wsscode.pathom.connect.output__GT_provides(com.wsscode.pathom.connect.resolver__GT_output(env,cljs.core.second(p1__61345_SHARP_)));
})),plan);
});
com.wsscode.pathom.connect.plan__GT_resolvers = (function com$wsscode$pathom$connect$plan__GT_resolvers(plan){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.flatten(plan));
});
com.wsscode.pathom.connect.decrease_path_costs = (function com$wsscode$pathom$connect$decrease_path_costs(p__61347,plan){
var map__61348 = p__61347;
var map__61348__$1 = (((((!((map__61348 == null))))?(((((map__61348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61348):map__61348);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61348__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var resolver_weight_decrease_amount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61348__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weight-decrease-amount","com.wsscode.pathom.connect/resolver-weight-decrease-amount",-937582293),(1));
if(cljs.core.truth_(resolver_weights)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(resolver_weights,((function (map__61348,map__61348__$1,resolver_weights,resolver_weight_decrease_amount){
return (function (p1__61346_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__61348,map__61348__$1,resolver_weights,resolver_weight_decrease_amount){
return (function (rw,rsym){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rw,rsym,(function (){var x__4219__auto__ = (1);
var y__4220__auto__ = (cljs.core.get.cljs$core$IFn$_invoke$arity$3(rw,rsym,(0)) - resolver_weight_decrease_amount);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());
});})(map__61348,map__61348__$1,resolver_weights,resolver_weight_decrease_amount))
,p1__61346_SHARP_,com.wsscode.pathom.connect.plan__GT_resolvers(plan));
});})(map__61348,map__61348__$1,resolver_weights,resolver_weight_decrease_amount))
);
} else {
return null;
}
});
com.wsscode.pathom.connect.reader_compute_plan = (function com$wsscode$pathom$connect$reader_compute_plan(env,failed_resolvers){
var plan_trace_id = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978)], null));
var plan = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (plan_trace_id){
return (function (p1__61350_SHARP_){
return cljs.core.some(failed_resolvers,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__61350_SHARP_));
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
return (function (p__61351,p__61352){
var map__61353 = p__61351;
var map__61353__$1 = (((((!((map__61353 == null))))?(((((map__61353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61353):map__61353);
var acc = map__61353__$1;
var provided = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61353__$1,new cljs.core.Keyword(null,"provided","provided",-1493091365));
var map__61354 = p__61352;
var map__61354__$1 = (((((!((map__61354 == null))))?(((((map__61354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61354):map__61354);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61354__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.contains_QMARK_(provided,key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj,key);
} else {
var temp__5718__auto__ = cljs.core.first(com.wsscode.pathom.connect.resolve_plan(cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),key)));
if(cljs.core.truth_(temp__5718__auto__)){
var plan = temp__5718__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.into,(function (){var G__61357 = plan;
var G__61357__$1 = (((G__61357 == null))?null:cljs.core.first(G__61357));
var G__61357__$2 = (((G__61357__$1 == null))?null:cljs.core.second(G__61357__$1));
var G__61357__$3 = (((G__61357__$2 == null))?null:(com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2(env,G__61357__$2) : com.wsscode.pathom.connect.resolver_data.call(null,env,G__61357__$2)));
if((G__61357__$3 == null)){
return null;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121).cljs$core$IFn$_invoke$arity$1(G__61357__$3);
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
com.wsscode.pathom.connect.project_parent_query_attributes = (function com$wsscode$pathom$connect$project_parent_query_attributes(p__61358){
var map__61359 = p__61358;
var map__61359__$1 = (((((!((map__61359 == null))))?(((((map__61359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61359):map__61359);
var env = map__61359__$1;
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61359__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
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
com.wsscode.pathom.connect.reader = (function com$wsscode$pathom$connect$reader(p__61364){
var map__61365 = p__61364;
var map__61365__$1 = (((((!((map__61365 == null))))?(((((map__61365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61365):map__61365);
var env = map__61365__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61365__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61365__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var p = com.wsscode.pathom.core.params(env);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null)))){
var temp__5718__auto__ = com.wsscode.pathom.connect.pick_resolver(env);
if(cljs.core.truth_(temp__5718__auto__)){
var map__61367 = temp__5718__auto__;
var map__61367__$1 = (((((!((map__61367 == null))))?(((((map__61367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61367):map__61367);
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61367__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61367__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var map__61369 = (com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2(env,s) : com.wsscode.pathom.connect.resolver_data.call(null,env,s));
var map__61369__$1 = (((((!((map__61369 == null))))?(((((map__61369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61369):map__61369);
var resolver = map__61369__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61369__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61369__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61369__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver);
var response = (cljs.core.truth_(cache_QMARK_)?com.wsscode.async.async_cljs.throw_err(com.wsscode.pathom.core.cached_STAR_(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,e,p], null),((function (map__61369,map__61369__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__61367,map__61367__$1,e,s,temp__5718__auto__,k,p,map__61365,map__61365__$1,env,indexes,processing_sequence){
return (function (){
if(cljs.core.truth_((function (){var and__4120__auto__ = batch_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return processing_sequence;
} else {
return and__4120__auto__;
}
})())){
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (map__61369,map__61369__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__61367,map__61367__$1,e,s,temp__5718__auto__,k,p,map__61365,map__61365__$1,env,indexes,processing_sequence){
return (function (p1__61362_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__61362_SHARP_,input);
});})(map__61369,map__61369__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__61367,map__61367__$1,e,s,temp__5718__auto__,k,p,map__61365,map__61365__$1,env,indexes,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__61369,map__61369__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__61367,map__61367__$1,e,s,temp__5718__auto__,k,p,map__61365,map__61365__$1,env,indexes,processing_sequence){
return (function (p1__61361_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__61361_SHARP_,input);
});})(map__61369,map__61369__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__61367,map__61367__$1,e,s,temp__5718__auto__,k,p,map__61365,map__61365__$1,env,indexes,processing_sequence))
,processing_sequence)));
var batch_result = com.wsscode.pathom.connect.call_resolver(env__$1,items);
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env__$1,s,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
} else {
return com.wsscode.pathom.connect.call_resolver(env__$1,e);
}
});})(map__61369,map__61369__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__61367,map__61367__$1,e,s,temp__5718__auto__,k,p,map__61365,map__61365__$1,env,indexes,processing_sequence))
)):com.wsscode.pathom.connect.call_resolver(env__$1,e));
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),env__$1);
var response__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
if((!((((response__$1 == null)) || (cljs.core.map_QMARK_(response__$1)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Response from resolver must be a map.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),s,new cljs.core.Keyword(null,"response","response",-1068424192),response__$1], null));
} else {
}

com.wsscode.pathom.core.swap_entity_BANG_(env_SINGLEQUOTE_,((function (map__61369,map__61369__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,response,env_SINGLEQUOTE_,response__$1,map__61367,map__61367__$1,e,s,temp__5718__auto__,k,p,map__61365,map__61365__$1,env,indexes,processing_sequence){
return (function (p1__61363_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$1,p1__61363_SHARP_], 0));
});})(map__61369,map__61369__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,response,env_SINGLEQUOTE_,response__$1,map__61367,map__61367__$1,e,s,temp__5718__auto__,k,p,map__61365,map__61365__$1,env,indexes,processing_sequence))
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
com.wsscode.pathom.connect.serial_resolver_call_batch = (function com$wsscode$pathom$connect$serial_resolver_call_batch(p__61373,e){
var map__61374 = p__61373;
var map__61374__$1 = (((((!((map__61374 == null))))?(((((map__61374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61374):map__61374);
var env = map__61374__$1;
var map__61375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61374__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__61375__$1 = (((((!((map__61375 == null))))?(((((map__61375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61375):map__61375);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61375__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61375__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61374__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var trace_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),e], null);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__27500__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769)));
var res__27501__auto__ = (function (){var _ = com.wsscode.pathom.trace.trace(env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417)));
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (_,trace_id__27500__auto__,trace_data,map__61374,map__61374__$1,env,map__61375,map__61375__$1,sym,input,processing_sequence){
return (function (p1__61372_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__61372_SHARP_,input);
});})(_,trace_id__27500__auto__,trace_data,map__61374,map__61374__$1,env,map__61375,map__61375__$1,sym,input,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (_,trace_id__27500__auto__,trace_data,map__61374,map__61374__$1,env,map__61375,map__61375__$1,sym,input,processing_sequence){
return (function (p1__61371_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__61371_SHARP_,input);
});})(_,trace_id__27500__auto__,trace_data,map__61374,map__61374__$1,env,map__61375,map__61375__$1,sym,input,processing_sequence))
,processing_sequence)));
var ___$1 = com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616),items], null));
var batch_result = com.wsscode.pathom.connect.call_resolver(env,items);
var ___$2 = com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429),cljs.core.count(batch_result)], null));
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env,sym,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__27500__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769)));

return res__27501__auto__;
} else {
var _ = com.wsscode.pathom.trace.trace(env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417)));
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (_,trace_data,map__61374,map__61374__$1,env,map__61375,map__61375__$1,sym,input,processing_sequence){
return (function (p1__61372_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__61372_SHARP_,input);
});})(_,trace_data,map__61374,map__61374__$1,env,map__61375,map__61375__$1,sym,input,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (_,trace_data,map__61374,map__61374__$1,env,map__61375,map__61375__$1,sym,input,processing_sequence){
return (function (p1__61371_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__61371_SHARP_,input);
});})(_,trace_data,map__61374,map__61374__$1,env,map__61375,map__61375__$1,sym,input,processing_sequence))
,processing_sequence)));
var ___$1 = com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616),items], null));
var batch_result = com.wsscode.pathom.connect.call_resolver(env,items);
var ___$2 = com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429),cljs.core.count(batch_result)], null));
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env,sym,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
}
});
com.wsscode.pathom.connect.serial_cache_resolver_call = (function com$wsscode$pathom$connect$serial_cache_resolver_call(p__61378,e){
var map__61379 = p__61378;
var map__61379__$1 = (((((!((map__61379 == null))))?(((((map__61379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61379):map__61379);
var env = map__61379__$1;
var map__61380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61379__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__61380__$1 = (((((!((map__61380 == null))))?(((((map__61380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61380):map__61380);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61380__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61380__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61379__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var p = com.wsscode.pathom.core.params(env);
return com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,e,p], null),((function (p,map__61379,map__61379__$1,env,map__61380,map__61380__$1,sym,batch_QMARK_,processing_sequence){
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
});})(p,map__61379,map__61379__$1,env,map__61380,map__61380__$1,sym,batch_QMARK_,processing_sequence))
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
com.wsscode.pathom.connect.reader2 = (function com$wsscode$pathom$connect$reader2(p__61387){
var map__61388 = p__61387;
var map__61388__$1 = (((((!((map__61388 == null))))?(((((map__61388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61388):map__61388);
var env = map__61388__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61388__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61388__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61388__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var temp__5718__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__61390 = temp__5718__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61390,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61390,(1),null);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var G__61396 = plan;
var vec__61397 = G__61396;
var seq__61398 = cljs.core.seq(vec__61397);
var first__61399 = cljs.core.first(seq__61398);
var seq__61398__$1 = cljs.core.next(seq__61398);
var step = first__61399;
var tail = seq__61398__$1;
var failed_resolvers = cljs.core.PersistentArrayMap.EMPTY;
var out_left = out;
var G__61396__$1 = G__61396;
var failed_resolvers__$1 = failed_resolvers;
var out_left__$1 = out_left;
while(true){
var vec__61421 = G__61396__$1;
var seq__61422 = cljs.core.seq(vec__61421);
var first__61423 = cljs.core.first(seq__61422);
var seq__61422__$1 = cljs.core.next(seq__61422);
var step__$1 = first__61423;
var tail__$1 = seq__61422__$1;
var failed_resolvers__$2 = failed_resolvers__$1;
var out_left__$2 = out_left__$1;
if(cljs.core.truth_(step__$1)){
var vec__61424 = step__$1;
var key_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61424,(0),null);
var resolver_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61424,(1),null);
var map__61427 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),resolver_sym], null));
var map__61427__$1 = (((((!((map__61427 == null))))?(((((map__61427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61427):map__61427);
var resolver = map__61427__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61427__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61427__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61427__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = com.wsscode.pathom.connect.resolver__GT_output(env,resolver_sym);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver);
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env__$1);
var e = cljs.core.select_keys(entity,input);
var p = com.wsscode.pathom.core.params(env__$1);
var trace_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),e], null);
var response = ((cljs.core.contains_QMARK_(entity,key_SINGLEQUOTE_))?cljs.core.select_keys(entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)):(cljs.core.truth_(cache_QMARK_)?com.wsscode.async.async_cljs.throw_err(com.wsscode.pathom.core.cached_STAR_(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,e,p], null),((function (G__61396__$1,failed_resolvers__$1,out_left__$1,vec__61424,key_SINGLEQUOTE_,resolver_sym,map__61427,map__61427__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__61421,seq__61422,first__61423,seq__61422__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__61396,vec__61397,seq__61398,first__61399,seq__61398__$1,step,tail,failed_resolvers,out_left,key,vec__61390,plan,out,temp__5718__auto__,map__61388,map__61388__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (){
if(cljs.core.truth_((function (){var and__4120__auto__ = batch_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return processing_sequence;
} else {
return and__4120__auto__;
}
})())){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__27500__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769)));
var res__27501__auto__ = (function (){var _ = com.wsscode.pathom.trace.trace(env__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417)));
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (G__61396__$1,failed_resolvers__$1,out_left__$1,_,trace_id__27500__auto__,vec__61424,key_SINGLEQUOTE_,resolver_sym,map__61427,map__61427__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__61421,seq__61422,first__61423,seq__61422__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__61396,vec__61397,seq__61398,first__61399,seq__61398__$1,step,tail,failed_resolvers,out_left,key,vec__61390,plan,out,temp__5718__auto__,map__61388,map__61388__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__61384_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__61384_SHARP_,input);
});})(G__61396__$1,failed_resolvers__$1,out_left__$1,_,trace_id__27500__auto__,vec__61424,key_SINGLEQUOTE_,resolver_sym,map__61427,map__61427__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__61421,seq__61422,first__61423,seq__61422__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__61396,vec__61397,seq__61398,first__61399,seq__61398__$1,step,tail,failed_resolvers,out_left,key,vec__61390,plan,out,temp__5718__auto__,map__61388,map__61388__$1,env,indexes,max_resolver_weight,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__61396__$1,failed_resolvers__$1,out_left__$1,_,trace_id__27500__auto__,vec__61424,key_SINGLEQUOTE_,resolver_sym,map__61427,map__61427__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__61421,seq__61422,first__61423,seq__61422__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__61396,vec__61397,seq__61398,first__61399,seq__61398__$1,step,tail,failed_resolvers,out_left,key,vec__61390,plan,out,temp__5718__auto__,map__61388,map__61388__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__61383_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__61383_SHARP_,input);
});})(G__61396__$1,failed_resolvers__$1,out_left__$1,_,trace_id__27500__auto__,vec__61424,key_SINGLEQUOTE_,resolver_sym,map__61427,map__61427__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__61421,seq__61422,first__61423,seq__61422__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__61396,vec__61397,seq__61398,first__61399,seq__61398__$1,step,tail,failed_resolvers,out_left,key,vec__61390,plan,out,temp__5718__auto__,map__61388,map__61388__$1,env,indexes,max_resolver_weight,processing_sequence))
,processing_sequence)));
var ___$1 = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616),items], null));
var batch_result = com.wsscode.pathom.connect.call_resolver(env__$1,items);
var ___$2 = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429),cljs.core.count(batch_result)], null));
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env__$1,resolver_sym,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env__$1,trace_id__27500__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769)));

return res__27501__auto__;
} else {
var _ = com.wsscode.pathom.trace.trace(env__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417)));
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (G__61396__$1,failed_resolvers__$1,out_left__$1,_,vec__61424,key_SINGLEQUOTE_,resolver_sym,map__61427,map__61427__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__61421,seq__61422,first__61423,seq__61422__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__61396,vec__61397,seq__61398,first__61399,seq__61398__$1,step,tail,failed_resolvers,out_left,key,vec__61390,plan,out,temp__5718__auto__,map__61388,map__61388__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__61384_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__61384_SHARP_,input);
});})(G__61396__$1,failed_resolvers__$1,out_left__$1,_,vec__61424,key_SINGLEQUOTE_,resolver_sym,map__61427,map__61427__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__61421,seq__61422,first__61423,seq__61422__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__61396,vec__61397,seq__61398,first__61399,seq__61398__$1,step,tail,failed_resolvers,out_left,key,vec__61390,plan,out,temp__5718__auto__,map__61388,map__61388__$1,env,indexes,max_resolver_weight,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__61396__$1,failed_resolvers__$1,out_left__$1,_,vec__61424,key_SINGLEQUOTE_,resolver_sym,map__61427,map__61427__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__61421,seq__61422,first__61423,seq__61422__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__61396,vec__61397,seq__61398,first__61399,seq__61398__$1,step,tail,failed_resolvers,out_left,key,vec__61390,plan,out,temp__5718__auto__,map__61388,map__61388__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__61383_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__61383_SHARP_,input);
});})(G__61396__$1,failed_resolvers__$1,out_left__$1,_,vec__61424,key_SINGLEQUOTE_,resolver_sym,map__61427,map__61427__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__61421,seq__61422,first__61423,seq__61422__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__61396,vec__61397,seq__61398,first__61399,seq__61398__$1,step,tail,failed_resolvers,out_left,key,vec__61390,plan,out,temp__5718__auto__,map__61388,map__61388__$1,env,indexes,max_resolver_weight,processing_sequence))
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
});})(G__61396__$1,failed_resolvers__$1,out_left__$1,vec__61424,key_SINGLEQUOTE_,resolver_sym,map__61427,map__61427__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__61421,seq__61422,first__61423,seq__61422__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__61396,vec__61397,seq__61398,first__61399,seq__61398__$1,step,tail,failed_resolvers,out_left,key,vec__61390,plan,out,temp__5718__auto__,map__61388,map__61388__$1,env,indexes,max_resolver_weight,processing_sequence))
)):com.wsscode.pathom.connect.call_resolver(env__$1,e)
));
var response__$1 = (function (){var or__4131__auto__ = response;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var replan = ((function (G__61396__$1,failed_resolvers__$1,out_left__$1,vec__61424,key_SINGLEQUOTE_,resolver_sym,map__61427,map__61427__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,vec__61421,seq__61422,first__61423,seq__61422__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__61396,vec__61397,seq__61398,first__61399,seq__61398__$1,step,tail,failed_resolvers,out_left,key,vec__61390,plan,out,temp__5718__auto__,map__61388,map__61388__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (error){
var failed_resolvers__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers__$2,resolver_sym,error);
com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$1,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (G__61396__$1,failed_resolvers__$1,out_left__$1,failed_resolvers__$3,vec__61424,key_SINGLEQUOTE_,resolver_sym,map__61427,map__61427__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,vec__61421,seq__61422,first__61423,seq__61422__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__61396,vec__61397,seq__61398,first__61399,seq__61398__$1,step,tail,failed_resolvers,out_left,key,vec__61390,plan,out,temp__5718__auto__,map__61388,map__61388__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__61385_SHARP_){
var x__4222__auto__ = ((function (){var or__4131__auto__ = p1__61385_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() * (2));
var y__4223__auto__ = max_resolver_weight;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});})(G__61396__$1,failed_resolvers__$1,out_left__$1,failed_resolvers__$3,vec__61424,key_SINGLEQUOTE_,resolver_sym,map__61427,map__61427__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,vec__61421,seq__61422,first__61423,seq__61422__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__61396,vec__61397,seq__61398,first__61399,seq__61398__$1,step,tail,failed_resolvers,out_left,key,vec__61390,plan,out,temp__5718__auto__,map__61388,map__61388__$1,env,indexes,max_resolver_weight,processing_sequence))
], 0));

var temp__5718__auto____$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$1,failed_resolvers__$3);
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__61429 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61429,(0),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61429,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan__$1,failed_resolvers__$3,out_SINGLEQUOTE_], null);
} else {
return null;
}
});})(G__61396__$1,failed_resolvers__$1,out_left__$1,vec__61424,key_SINGLEQUOTE_,resolver_sym,map__61427,map__61427__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,vec__61421,seq__61422,first__61423,seq__61422__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__61396,vec__61397,seq__61398,first__61399,seq__61398__$1,step,tail,failed_resolvers,out_left,key,vec__61390,plan,out,temp__5718__auto__,map__61388,map__61388__$1,env,indexes,max_resolver_weight,processing_sequence))
;
if(cljs.core.map_QMARK_(response__$1)){
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(response__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),env__$1);
var response__$2 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
com.wsscode.pathom.core.swap_entity_BANG_(env_SINGLEQUOTE_,((function (G__61396__$1,failed_resolvers__$1,out_left__$1,env_SINGLEQUOTE_,response__$2,vec__61424,key_SINGLEQUOTE_,resolver_sym,map__61427,map__61427__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,replan,vec__61421,seq__61422,first__61423,seq__61422__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__61396,vec__61397,seq__61398,first__61399,seq__61398__$1,step,tail,failed_resolvers,out_left,key,vec__61390,plan,out,temp__5718__auto__,map__61388,map__61388__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__61386_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$2,p1__61386_SHARP_], 0));
});})(G__61396__$1,failed_resolvers__$1,out_left__$1,env_SINGLEQUOTE_,response__$2,vec__61424,key_SINGLEQUOTE_,resolver_sym,map__61427,map__61427__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,replan,vec__61421,seq__61422,first__61423,seq__61422__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__61396,vec__61397,seq__61398,first__61399,seq__61398__$1,step,tail,failed_resolvers,out_left,key,vec__61390,plan,out,temp__5718__auto__,map__61388,map__61388__$1,env,indexes,max_resolver_weight,processing_sequence))
);

if(((cljs.core.contains_QMARK_(response__$2,key_SINGLEQUOTE_)) && (cljs.core.not((function (){var G__61433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response__$2,key_SINGLEQUOTE_);
return (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(G__61433) : com.wsscode.pathom.core.break_values.call(null,G__61433));
})())))){
var out_provides = com.wsscode.pathom.connect.output__GT_provides(output);
com.wsscode.pathom.trace.trace(env_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym], null));

if(cljs.core.seq(tail__$1)){
var G__66507 = tail__$1;
var G__66508 = failed_resolvers__$2;
var G__66509 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(out_left__$2,out_provides);
G__61396__$1 = G__66507;
failed_resolvers__$1 = G__66508;
out_left__$1 = G__66509;
continue;
} else {
return com.wsscode.pathom.core.map_reader(env_SINGLEQUOTE_);
}
} else {
var temp__5718__auto____$1 = replan(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$2,new cljs.core.Keyword(null,"key","key",-1516042587),key_SINGLEQUOTE_], null)));
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__61434 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61434,(0),null);
var failed_resolvers__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61434,(1),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61434,(2),null);
var G__66514 = plan__$1;
var G__66515 = failed_resolvers__$3;
var G__66516 = out_SINGLEQUOTE_;
G__61396__$1 = G__66514;
failed_resolvers__$1 = G__66515;
out_left__$1 = G__66516;
continue;
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.seq(tail__$1);
if(and__4120__auto__){
var G__61438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response__$2,key_SINGLEQUOTE_);
return (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(G__61438) : com.wsscode.pathom.core.break_values.call(null,G__61438));
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
var vec__61439 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61439,(0),null);
var failed_resolvers__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61439,(1),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61439,(2),null);
var G__66523 = plan__$1;
var G__66524 = failed_resolvers__$3;
var G__66525 = out_SINGLEQUOTE_;
G__61396__$1 = G__66523;
failed_resolvers__$1 = G__66524;
out_left__$1 = G__66525;
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
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__){
return (function (state_61489){
var state_val_61490 = (state_61489[(1)]);
if((state_val_61490 === (7))){
var inst_61484 = (state_61489[(2)]);
var _ = (function (){var statearr_61491 = state_61489;
(statearr_61491[(4)] = cljs.core.rest((state_61489[(4)])));

return statearr_61491;
})();
var state_61489__$1 = state_61489;
var statearr_61492_66536 = state_61489__$1;
(statearr_61492_66536[(2)] = inst_61484);

(statearr_61492_66536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61490 === (20))){
var state_61489__$1 = state_61489;
var statearr_61493_66538 = state_61489__$1;
(statearr_61493_66538[(2)] = null);

(statearr_61493_66538[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61490 === (1))){
var state_61489__$1 = state_61489;
var statearr_61494_66542 = state_61489__$1;
(statearr_61494_66542[(2)] = null);

(statearr_61494_66542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61490 === (4))){
var inst_61442 = (state_61489[(2)]);
var state_61489__$1 = state_61489;
var statearr_61495_66546 = state_61489__$1;
(statearr_61495_66546[(2)] = inst_61442);

(statearr_61495_66546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61490 === (15))){
var inst_61455 = (state_61489[(7)]);
var inst_61464 = com.wsscode.async.async_cljs.promise__GT_chan(inst_61455);
var state_61489__$1 = state_61489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61489__$1,(18),inst_61464);
} else {
if((state_val_61490 === (21))){
var inst_61472 = (state_61489[(2)]);
var state_61489__$1 = state_61489;
var statearr_61496_66551 = state_61489__$1;
(statearr_61496_66551[(2)] = inst_61472);

(statearr_61496_66551[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61490 === (13))){
var inst_61451 = (state_61489[(8)]);
var inst_61450 = (state_61489[(9)]);
var inst_61476 = (state_61489[(2)]);
var inst_61477 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_61450,inst_61476);
var inst_61478 = cljs.core.next(inst_61451);
var inst_61450__$1 = inst_61477;
var inst_61451__$1 = inst_61478;
var state_61489__$1 = (function (){var statearr_61497 = state_61489;
(statearr_61497[(8)] = inst_61451__$1);

(statearr_61497[(9)] = inst_61450__$1);

return statearr_61497;
})();
var statearr_61498_66555 = state_61489__$1;
(statearr_61498_66555[(2)] = null);

(statearr_61498_66555[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61490 === (6))){
var inst_61451 = (state_61489[(8)]);
var inst_61453 = (state_61489[(10)]);
var inst_61453__$1 = cljs.core.first(inst_61451);
var state_61489__$1 = (function (){var statearr_61499 = state_61489;
(statearr_61499[(10)] = inst_61453__$1);

return statearr_61499;
})();
if(cljs.core.truth_(inst_61453__$1)){
var statearr_61500_66558 = state_61489__$1;
(statearr_61500_66558[(1)] = (8));

} else {
var statearr_61501_66559 = state_61489__$1;
(statearr_61501_66559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61490 === (17))){
var inst_61474 = (state_61489[(2)]);
var state_61489__$1 = state_61489;
var statearr_61502_66561 = state_61489__$1;
(statearr_61502_66561[(2)] = inst_61474);

(statearr_61502_66561[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61490 === (3))){
var inst_61487 = (state_61489[(2)]);
var state_61489__$1 = state_61489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61489__$1,inst_61487);
} else {
if((state_val_61490 === (12))){
var inst_61455 = (state_61489[(7)]);
var inst_61462 = com.wsscode.async.async_cljs.promise_QMARK_(inst_61455);
var state_61489__$1 = state_61489;
if(cljs.core.truth_(inst_61462)){
var statearr_61503_66573 = state_61489__$1;
(statearr_61503_66573[(1)] = (15));

} else {
var statearr_61504_66576 = state_61489__$1;
(statearr_61504_66576[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61490 === (2))){
var _ = (function (){var statearr_61505 = state_61489;
(statearr_61505[(4)] = cljs.core.cons((5),(state_61489[(4)])));

return statearr_61505;
})();
var inst_61448 = cljs.core.PersistentVector.EMPTY;
var inst_61449 = s;
var inst_61450 = inst_61448;
var inst_61451 = inst_61449;
var state_61489__$1 = (function (){var statearr_61506 = state_61489;
(statearr_61506[(8)] = inst_61451);

(statearr_61506[(9)] = inst_61450);

return statearr_61506;
})();
var statearr_61507_66589 = state_61489__$1;
(statearr_61507_66589[(2)] = null);

(statearr_61507_66589[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61490 === (19))){
var inst_61455 = (state_61489[(7)]);
var state_61489__$1 = state_61489;
var statearr_61508_66592 = state_61489__$1;
(statearr_61508_66592[(2)] = inst_61455);

(statearr_61508_66592[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61490 === (11))){
var inst_61455 = (state_61489[(7)]);
var state_61489__$1 = state_61489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61489__$1,(14),inst_61455);
} else {
if((state_val_61490 === (9))){
var inst_61450 = (state_61489[(9)]);
var state_61489__$1 = state_61489;
var statearr_61510_66596 = state_61489__$1;
(statearr_61510_66596[(2)] = inst_61450);

(statearr_61510_66596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61490 === (5))){
var _ = (function (){var statearr_61511 = state_61489;
(statearr_61511[(4)] = cljs.core.rest((state_61489[(4)])));

return statearr_61511;
})();
var state_61489__$1 = state_61489;
var ex61509 = (state_61489__$1[(2)]);
var statearr_61512_66599 = state_61489__$1;
(statearr_61512_66599[(5)] = ex61509);


var statearr_61513_66603 = state_61489__$1;
(statearr_61513_66603[(1)] = (4));

(statearr_61513_66603[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61490 === (14))){
var inst_61459 = (state_61489[(2)]);
var inst_61460 = com.wsscode.async.async_cljs.throw_err(inst_61459);
var state_61489__$1 = state_61489;
var statearr_61514_66607 = state_61489__$1;
(statearr_61514_66607[(2)] = inst_61460);

(statearr_61514_66607[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61490 === (16))){
var state_61489__$1 = state_61489;
var statearr_61515_66609 = state_61489__$1;
(statearr_61515_66609[(1)] = (19));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61490 === (10))){
var inst_61482 = (state_61489[(2)]);
var state_61489__$1 = state_61489;
var statearr_61517_66616 = state_61489__$1;
(statearr_61517_66616[(2)] = inst_61482);

(statearr_61517_66616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61490 === (18))){
var inst_61466 = (state_61489[(2)]);
var inst_61467 = com.wsscode.async.async_cljs.consumer_pair(inst_61466);
var state_61489__$1 = state_61489;
var statearr_61518_66622 = state_61489__$1;
(statearr_61518_66622[(2)] = inst_61467);

(statearr_61518_66622[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61490 === (8))){
var inst_61453 = (state_61489[(10)]);
var inst_61455 = (state_61489[(7)]);
var inst_61455__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_61453) : f.call(null,inst_61453));
var inst_61456 = com.wsscode.async.async_cljs.chan_QMARK_(inst_61455__$1);
var state_61489__$1 = (function (){var statearr_61519 = state_61489;
(statearr_61519[(7)] = inst_61455__$1);

return statearr_61519;
})();
if(inst_61456){
var statearr_61520_66624 = state_61489__$1;
(statearr_61520_66624[(1)] = (11));

} else {
var statearr_61521_66625 = state_61489__$1;
(statearr_61521_66625[(1)] = (12));

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
});})(c__48839__auto__))
;
return ((function (switch__48139__auto__,c__48839__auto__){
return (function() {
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__48140__auto____0 = (function (){
var statearr_61522 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61522[(0)] = com$wsscode$pathom$connect$map_async_serial_$_state_machine__48140__auto__);

(statearr_61522[(1)] = (1));

return statearr_61522;
});
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__48140__auto____1 = (function (state_61489){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_61489);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e61523){var ex__48143__auto__ = e61523;
var statearr_61524_66631 = state_61489;
(statearr_61524_66631[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_61489[(4)]))){
var statearr_61525_66633 = state_61489;
(statearr_61525_66633[(1)] = cljs.core.first((state_61489[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66635 = state_61489;
state_61489 = G__66635;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$connect$map_async_serial_$_state_machine__48140__auto__ = function(state_61489){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__48140__auto____1.call(this,state_61489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$map_async_serial_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$map_async_serial_$_state_machine__48140__auto____0;
com$wsscode$pathom$connect$map_async_serial_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$map_async_serial_$_state_machine__48140__auto____1;
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__))
})();
var state__48841__auto__ = (function (){var statearr_61526 = f__48840__auto__();
(statearr_61526[(6)] = c__48839__auto__);

return statearr_61526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__))
);

return c__48839__auto__;
});
/**
 * DEPRECATED: use async-reader2
 * 
 *   Like reader, but supports async values on resolver return.
 */
com.wsscode.pathom.connect.async_reader = (function com$wsscode$pathom$connect$async_reader(p__61530){
var map__61531 = p__61530;
var map__61531__$1 = (((((!((map__61531 == null))))?(((((map__61531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61531):map__61531);
var env = map__61531__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61531__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61531__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var p = com.wsscode.pathom.core.params(env);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null)))){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,k,p,map__61531,map__61531__$1,env,indexes,processing_sequence){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,k,p,map__61531,map__61531__$1,env,indexes,processing_sequence){
return (function (state_61737){
var state_val_61738 = (state_61737[(1)]);
if((state_val_61738 === (65))){
var inst_61687 = (state_61737[(2)]);
var state_61737__$1 = state_61737;
var statearr_61739_66649 = state_61737__$1;
(statearr_61739_66649[(2)] = inst_61687);

(statearr_61739_66649[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (70))){
var inst_61648 = (state_61737[(7)]);
var inst_61693 = cljs.core.contains_QMARK_(inst_61648,k);
var state_61737__$1 = state_61737;
if(inst_61693){
var statearr_61740_66653 = state_61737__$1;
(statearr_61740_66653[(1)] = (73));

} else {
var statearr_61741_66654 = state_61737__$1;
(statearr_61741_66654[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (62))){
var inst_61672 = (state_61737[(2)]);
var inst_61673 = com.wsscode.async.async_cljs.throw_err(inst_61672);
var state_61737__$1 = state_61737;
var statearr_61742_66656 = state_61737__$1;
(statearr_61742_66656[(2)] = inst_61673);

(statearr_61742_66656[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (74))){
var state_61737__$1 = state_61737;
var statearr_61743_66660 = state_61737__$1;
(statearr_61743_66660[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));

(statearr_61743_66660[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (7))){
var inst_61542 = (state_61737[(8)]);
var inst_61546 = (inst_61542 == null);
var inst_61547 = cljs.core.not(inst_61546);
var state_61737__$1 = state_61737;
if(inst_61547){
var statearr_61744_66666 = state_61737__$1;
(statearr_61744_66666[(1)] = (10));

} else {
var statearr_61745_66668 = state_61737__$1;
(statearr_61745_66668[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (59))){
var inst_61668 = (state_61737[(9)]);
var state_61737__$1 = state_61737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61737__$1,(62),inst_61668);
} else {
if((state_val_61738 === (86))){
var inst_61712 = (state_61737[(2)]);
var inst_61713 = com.wsscode.async.async_cljs.consumer_pair(inst_61712);
var state_61737__$1 = state_61737;
var statearr_61746_66670 = state_61737__$1;
(statearr_61746_66670[(2)] = inst_61713);

(statearr_61746_66670[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (20))){
var state_61737__$1 = state_61737;
var statearr_61747_66671 = state_61737__$1;
(statearr_61747_66671[(2)] = false);

(statearr_61747_66671[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (72))){
var inst_61727 = (state_61737[(2)]);
var state_61737__$1 = state_61737;
var statearr_61748_66672 = state_61737__$1;
(statearr_61748_66672[(2)] = inst_61727);

(statearr_61748_66672[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (58))){
var inst_61729 = (state_61737[(2)]);
var state_61737__$1 = state_61737;
var statearr_61749_66674 = state_61737__$1;
(statearr_61749_66674[(2)] = inst_61729);

(statearr_61749_66674[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (60))){
var inst_61668 = (state_61737[(9)]);
var inst_61675 = com.wsscode.async.async_cljs.promise_QMARK_(inst_61668);
var state_61737__$1 = state_61737;
if(cljs.core.truth_(inst_61675)){
var statearr_61750_66680 = state_61737__$1;
(statearr_61750_66680[(1)] = (63));

} else {
var statearr_61751_66681 = state_61737__$1;
(statearr_61751_66681[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (27))){
var inst_61590 = (state_61737[(10)]);
var inst_61591 = (state_61737[(11)]);
var inst_61590__$1 = (state_61737[(2)]);
var inst_61591__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_61590__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_61592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61590__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_61593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61590__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_61594 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_61590__$1);
var state_61737__$1 = (function (){var statearr_61752 = state_61737;
(statearr_61752[(10)] = inst_61590__$1);

(statearr_61752[(11)] = inst_61591__$1);

(statearr_61752[(12)] = inst_61593);

(statearr_61752[(13)] = inst_61592);

(statearr_61752[(14)] = inst_61594);

return statearr_61752;
})();
if(cljs.core.truth_(inst_61591__$1)){
var statearr_61753_66683 = state_61737__$1;
(statearr_61753_66683[(1)] = (28));

} else {
var statearr_61754_66684 = state_61737__$1;
(statearr_61754_66684[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (1))){
var state_61737__$1 = state_61737;
var statearr_61755_66687 = state_61737__$1;
(statearr_61755_66687[(2)] = null);

(statearr_61755_66687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (69))){
var inst_61685 = (state_61737[(2)]);
var state_61737__$1 = state_61737;
var statearr_61756_66690 = state_61737__$1;
(statearr_61756_66690[(2)] = inst_61685);

(statearr_61756_66690[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (24))){
var inst_61582 = (state_61737[(2)]);
var state_61737__$1 = state_61737;
var statearr_61757_66692 = state_61737__$1;
(statearr_61757_66692[(2)] = inst_61582);

(statearr_61757_66692[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (55))){
var inst_61664 = (state_61737[(15)]);
var inst_61590 = (state_61737[(10)]);
var inst_61647 = (state_61737[(16)]);
var inst_61591 = (state_61737[(11)]);
var inst_61567 = (state_61737[(17)]);
var inst_61593 = (state_61737[(12)]);
var inst_61566 = (state_61737[(18)]);
var inst_61592 = (state_61737[(13)]);
var inst_61565 = (state_61737[(19)]);
var inst_61542 = (state_61737[(8)]);
var inst_61648 = (state_61737[(7)]);
var inst_61594 = (state_61737[(14)]);
var inst_61661 = (state_61737[(2)]);
var inst_61662 = (function (){var input = inst_61593;
var map__61544 = inst_61565;
var map__61568 = inst_61590;
var response = inst_61648;
var cache_QMARK_ = inst_61591;
var temp__5718__auto__ = inst_61542;
var batch_QMARK_ = inst_61592;
var env__$1 = inst_61594;
var e = inst_61566;
var s = inst_61567;
var resolver = inst_61590;
var env_SINGLEQUOTE_ = inst_61647;
return ((function (input,map__61544,map__61568,response,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,env_SINGLEQUOTE_,inst_61664,inst_61590,inst_61647,inst_61591,inst_61567,inst_61593,inst_61566,inst_61592,inst_61565,inst_61542,inst_61648,inst_61594,inst_61661,state_val_61738,c__48839__auto__,k,p,map__61531,map__61531__$1,env,indexes,processing_sequence){
return (function (p1__61529_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__61529_SHARP_], 0));
});
;})(input,map__61544,map__61568,response,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,env_SINGLEQUOTE_,inst_61664,inst_61590,inst_61647,inst_61591,inst_61567,inst_61593,inst_61566,inst_61592,inst_61565,inst_61542,inst_61648,inst_61594,inst_61661,state_val_61738,c__48839__auto__,k,p,map__61531,map__61531__$1,env,indexes,processing_sequence))
})();
var inst_61663 = com.wsscode.pathom.core.swap_entity_BANG_(inst_61647,inst_61662);
var inst_61664__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61648,k);
var inst_61665 = cljs.core.sequential_QMARK_(inst_61664__$1);
var state_61737__$1 = (function (){var statearr_61758 = state_61737;
(statearr_61758[(20)] = inst_61661);

(statearr_61758[(15)] = inst_61664__$1);

(statearr_61758[(21)] = inst_61663);

return statearr_61758;
})();
if(inst_61665){
var statearr_61759_66703 = state_61737__$1;
(statearr_61759_66703[(1)] = (56));

} else {
var statearr_61760_66704 = state_61737__$1;
(statearr_61760_66704[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (85))){
var inst_61720 = (state_61737[(2)]);
var state_61737__$1 = state_61737;
var statearr_61761_66707 = state_61737__$1;
(statearr_61761_66707[(2)] = inst_61720);

(statearr_61761_66707[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (39))){
var inst_61600 = (state_61737[(22)]);
var state_61737__$1 = state_61737;
var statearr_61762_66708 = state_61737__$1;
(statearr_61762_66708[(2)] = inst_61600);

(statearr_61762_66708[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (88))){
var state_61737__$1 = state_61737;
var statearr_61763_66709 = state_61737__$1;
(statearr_61763_66709[(2)] = null);

(statearr_61763_66709[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (46))){
var inst_61623 = (state_61737[(23)]);
var inst_61632 = com.wsscode.async.async_cljs.promise__GT_chan(inst_61623);
var state_61737__$1 = state_61737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61737__$1,(49),inst_61632);
} else {
if((state_val_61738 === (4))){
var inst_61533 = (state_61737[(2)]);
var state_61737__$1 = state_61737;
var statearr_61764_66713 = state_61737__$1;
(statearr_61764_66713[(2)] = inst_61533);

(statearr_61764_66713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (77))){
var state_61737__$1 = state_61737;
var statearr_61765_66715 = state_61737__$1;
(statearr_61765_66715[(2)] = null);

(statearr_61765_66715[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (54))){
var state_61737__$1 = state_61737;
var statearr_61766_66716 = state_61737__$1;
(statearr_61766_66716[(2)] = null);

(statearr_61766_66716[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (15))){
var inst_61557 = (state_61737[(2)]);
var state_61737__$1 = state_61737;
var statearr_61767_66718 = state_61737__$1;
(statearr_61767_66718[(2)] = inst_61557);

(statearr_61767_66718[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (48))){
var inst_61642 = (state_61737[(2)]);
var state_61737__$1 = state_61737;
var statearr_61768_66723 = state_61737__$1;
(statearr_61768_66723[(2)] = inst_61642);

(statearr_61768_66723[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (50))){
var inst_61623 = (state_61737[(23)]);
var state_61737__$1 = state_61737;
var statearr_61769_66727 = state_61737__$1;
(statearr_61769_66727[(2)] = inst_61623);

(statearr_61769_66727[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (75))){
var inst_61697 = (state_61737[(2)]);
var state_61737__$1 = state_61737;
var statearr_61770_66729 = state_61737__$1;
(statearr_61770_66729[(2)] = inst_61697);

(statearr_61770_66729[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (21))){
var inst_61585 = (state_61737[(2)]);
var state_61737__$1 = state_61737;
if(cljs.core.truth_(inst_61585)){
var statearr_61771_66733 = state_61737__$1;
(statearr_61771_66733[(1)] = (25));

} else {
var statearr_61772_66734 = state_61737__$1;
(statearr_61772_66734[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (31))){
var inst_61600 = (state_61737[(22)]);
var state_61737__$1 = state_61737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61737__$1,(34),inst_61600);
} else {
if((state_val_61738 === (32))){
var inst_61600 = (state_61737[(22)]);
var inst_61607 = com.wsscode.async.async_cljs.promise_QMARK_(inst_61600);
var state_61737__$1 = state_61737;
if(cljs.core.truth_(inst_61607)){
var statearr_61773_66740 = state_61737__$1;
(statearr_61773_66740[(1)] = (35));

} else {
var statearr_61774_66742 = state_61737__$1;
(statearr_61774_66742[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (40))){
var state_61737__$1 = state_61737;
var statearr_61775_66743 = state_61737__$1;
(statearr_61775_66743[(2)] = null);

(statearr_61775_66743[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (56))){
var inst_61664 = (state_61737[(15)]);
var inst_61668 = (state_61737[(9)]);
var inst_61647 = (state_61737[(16)]);
var inst_61667 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.atom,inst_61664);
var inst_61668__$1 = com.wsscode.pathom.core.join_seq(inst_61647,inst_61667);
var inst_61669 = com.wsscode.async.async_cljs.chan_QMARK_(inst_61668__$1);
var state_61737__$1 = (function (){var statearr_61776 = state_61737;
(statearr_61776[(9)] = inst_61668__$1);

return statearr_61776;
})();
if(inst_61669){
var statearr_61777_66749 = state_61737__$1;
(statearr_61777_66749[(1)] = (59));

} else {
var statearr_61778_66750 = state_61737__$1;
(statearr_61778_66750[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (33))){
var inst_61621 = (state_61737[(2)]);
var state_61737__$1 = state_61737;
var statearr_61779_66752 = state_61737__$1;
(statearr_61779_66752[(2)] = inst_61621);

(statearr_61779_66752[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (13))){
var state_61737__$1 = state_61737;
var statearr_61780_66755 = state_61737__$1;
(statearr_61780_66755[(2)] = true);

(statearr_61780_66755[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (22))){
var state_61737__$1 = state_61737;
var statearr_61781_66758 = state_61737__$1;
(statearr_61781_66758[(2)] = true);

(statearr_61781_66758[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (36))){
var state_61737__$1 = state_61737;
var statearr_61782_66760 = state_61737__$1;
(statearr_61782_66760[(1)] = (39));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (41))){
var inst_61617 = (state_61737[(2)]);
var state_61737__$1 = state_61737;
var statearr_61784_66762 = state_61737__$1;
(statearr_61784_66762[(2)] = inst_61617);

(statearr_61784_66762[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (89))){
var inst_61718 = (state_61737[(2)]);
var state_61737__$1 = state_61737;
var statearr_61785_66764 = state_61737__$1;
(statearr_61785_66764[(2)] = inst_61718);

(statearr_61785_66764[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (43))){
var inst_61623 = (state_61737[(23)]);
var inst_61630 = com.wsscode.async.async_cljs.promise_QMARK_(inst_61623);
var state_61737__$1 = state_61737;
if(cljs.core.truth_(inst_61630)){
var statearr_61786_66766 = state_61737__$1;
(statearr_61786_66766[(1)] = (46));

} else {
var statearr_61787_66767 = state_61737__$1;
(statearr_61787_66767[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (61))){
var inst_61689 = (state_61737[(2)]);
var state_61737__$1 = state_61737;
var statearr_61788_66769 = state_61737__$1;
(statearr_61788_66769[(2)] = inst_61689);

(statearr_61788_66769[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (29))){
var inst_61566 = (state_61737[(18)]);
var inst_61623 = (state_61737[(23)]);
var inst_61594 = (state_61737[(14)]);
var inst_61623__$1 = com.wsscode.pathom.connect.call_resolver(inst_61594,inst_61566);
var inst_61624 = com.wsscode.async.async_cljs.chan_QMARK_(inst_61623__$1);
var state_61737__$1 = (function (){var statearr_61789 = state_61737;
(statearr_61789[(23)] = inst_61623__$1);

return statearr_61789;
})();
if(inst_61624){
var statearr_61790_66773 = state_61737__$1;
(statearr_61790_66773[(1)] = (42));

} else {
var statearr_61791_66775 = state_61737__$1;
(statearr_61791_66775[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (44))){
var inst_61644 = (state_61737[(2)]);
var state_61737__$1 = state_61737;
var statearr_61792_66778 = state_61737__$1;
(statearr_61792_66778[(2)] = inst_61644);

(statearr_61792_66778[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (6))){
var inst_61542 = (state_61737[(8)]);
var inst_61541 = (state_61737[(2)]);
var inst_61542__$1 = com.wsscode.async.async_cljs.throw_err(inst_61541);
var state_61737__$1 = (function (){var statearr_61793 = state_61737;
(statearr_61793[(8)] = inst_61542__$1);

return statearr_61793;
})();
if(cljs.core.truth_(inst_61542__$1)){
var statearr_61794_66781 = state_61737__$1;
(statearr_61794_66781[(1)] = (7));

} else {
var statearr_61795_66782 = state_61737__$1;
(statearr_61795_66782[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (28))){
var inst_61590 = (state_61737[(10)]);
var inst_61600 = (state_61737[(22)]);
var inst_61591 = (state_61737[(11)]);
var inst_61567 = (state_61737[(17)]);
var inst_61593 = (state_61737[(12)]);
var inst_61566 = (state_61737[(18)]);
var inst_61592 = (state_61737[(13)]);
var inst_61565 = (state_61737[(19)]);
var inst_61542 = (state_61737[(8)]);
var inst_61594 = (state_61737[(14)]);
var inst_61596 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61597 = [inst_61567,inst_61566,p];
var inst_61598 = (new cljs.core.PersistentVector(null,3,(5),inst_61596,inst_61597,null));
var inst_61599 = (function (){var input = inst_61593;
var map__61544 = inst_61565;
var map__61568 = inst_61590;
var cache_QMARK_ = inst_61591;
var temp__5718__auto__ = inst_61542;
var batch_QMARK_ = inst_61592;
var env__$1 = inst_61594;
var e = inst_61566;
var s = inst_61567;
var resolver = inst_61590;
return ((function (input,map__61544,map__61568,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_61590,inst_61600,inst_61591,inst_61567,inst_61593,inst_61566,inst_61592,inst_61565,inst_61542,inst_61594,inst_61596,inst_61597,inst_61598,state_val_61738,c__48839__auto__,k,p,map__61531,map__61531__$1,env,indexes,processing_sequence){
return (function (){
var c__48839__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto____$1,input,map__61544,map__61568,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_61590,inst_61600,inst_61591,inst_61567,inst_61593,inst_61566,inst_61592,inst_61565,inst_61542,inst_61594,inst_61596,inst_61597,inst_61598,state_val_61738,c__48839__auto__,k,p,map__61531,map__61531__$1,env,indexes,processing_sequence){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto____$1,input,map__61544,map__61568,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_61590,inst_61600,inst_61591,inst_61567,inst_61593,inst_61566,inst_61592,inst_61565,inst_61542,inst_61594,inst_61596,inst_61597,inst_61598,state_val_61738,c__48839__auto__,k,p,map__61531,map__61531__$1,env,indexes,processing_sequence){
return (function (state_61869){
var state_val_61870 = (state_61869[(1)]);
if((state_val_61870 === (7))){
var inst_61802 = (state_61869[(7)]);
var state_61869__$1 = state_61869;
var statearr_61871_66793 = state_61869__$1;
(statearr_61871_66793[(2)] = inst_61802);

(statearr_61871_66793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (20))){
var inst_61826 = (state_61869[(2)]);
var inst_61827 = com.wsscode.async.async_cljs.consumer_pair(inst_61826);
var state_61869__$1 = state_61869;
var statearr_61872_66797 = state_61869__$1;
(statearr_61872_66797[(2)] = inst_61827);

(statearr_61872_66797[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (27))){
var inst_61845 = (state_61869[(2)]);
var inst_61846 = com.wsscode.async.async_cljs.throw_err(inst_61845);
var state_61869__$1 = state_61869;
var statearr_61873_66801 = state_61869__$1;
(statearr_61873_66801[(2)] = inst_61846);

(statearr_61873_66801[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (1))){
var state_61869__$1 = state_61869;
var statearr_61874_66802 = state_61869__$1;
(statearr_61874_66802[(2)] = null);

(statearr_61874_66802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (24))){
var inst_61841 = (state_61869[(8)]);
var state_61869__$1 = state_61869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61869__$1,(27),inst_61841);
} else {
if((state_val_61870 === (4))){
var inst_61796 = (state_61869[(2)]);
var state_61869__$1 = state_61869;
var statearr_61875_66803 = state_61869__$1;
(statearr_61875_66803[(2)] = inst_61796);

(statearr_61875_66803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (15))){
var inst_61814 = (state_61869[(9)]);
var inst_61836 = (state_61869[(2)]);
var inst_61837 = cljs.core.zipmap(inst_61814,inst_61836);
var inst_61838 = com.wsscode.pathom.connect.cache_batch(env__$1,s,inst_61837);
var inst_61839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61837,e);
var state_61869__$1 = (function (){var statearr_61876 = state_61869;
(statearr_61876[(10)] = inst_61838);

return statearr_61876;
})();
var statearr_61877_66804 = state_61869__$1;
(statearr_61877_66804[(2)] = inst_61839);

(statearr_61877_66804[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (21))){
var inst_61815 = (state_61869[(11)]);
var state_61869__$1 = state_61869;
var statearr_61878_66805 = state_61869__$1;
(statearr_61878_66805[(2)] = inst_61815);

(statearr_61878_66805[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (31))){
var inst_61852 = (state_61869[(2)]);
var inst_61853 = com.wsscode.async.async_cljs.consumer_pair(inst_61852);
var state_61869__$1 = state_61869;
var statearr_61879_66808 = state_61869__$1;
(statearr_61879_66808[(2)] = inst_61853);

(statearr_61879_66808[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (32))){
var inst_61841 = (state_61869[(8)]);
var state_61869__$1 = state_61869;
var statearr_61880_66811 = state_61869__$1;
(statearr_61880_66811[(2)] = inst_61841);

(statearr_61880_66811[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (33))){
var state_61869__$1 = state_61869;
var statearr_61881_66815 = state_61869__$1;
(statearr_61881_66815[(2)] = null);

(statearr_61881_66815[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (13))){
var inst_61815 = (state_61869[(11)]);
var state_61869__$1 = state_61869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61869__$1,(16),inst_61815);
} else {
if((state_val_61870 === (22))){
var state_61869__$1 = state_61869;
var statearr_61882_66817 = state_61869__$1;
(statearr_61882_66817[(2)] = null);

(statearr_61882_66817[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (29))){
var state_61869__$1 = state_61869;
var statearr_61883_66820 = state_61869__$1;
(statearr_61883_66820[(1)] = (32));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (6))){
var state_61869__$1 = state_61869;
var statearr_61885_66822 = state_61869__$1;
(statearr_61885_66822[(2)] = processing_sequence);

(statearr_61885_66822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (28))){
var inst_61841 = (state_61869[(8)]);
var inst_61850 = com.wsscode.async.async_cljs.promise__GT_chan(inst_61841);
var state_61869__$1 = state_61869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61869__$1,(31),inst_61850);
} else {
if((state_val_61870 === (25))){
var inst_61841 = (state_61869[(8)]);
var inst_61848 = com.wsscode.async.async_cljs.promise_QMARK_(inst_61841);
var state_61869__$1 = state_61869;
if(cljs.core.truth_(inst_61848)){
var statearr_61886_66826 = state_61869__$1;
(statearr_61886_66826[(1)] = (28));

} else {
var statearr_61887_66827 = state_61869__$1;
(statearr_61887_66827[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (34))){
var inst_61858 = (state_61869[(2)]);
var state_61869__$1 = state_61869;
var statearr_61888_66829 = state_61869__$1;
(statearr_61888_66829[(2)] = inst_61858);

(statearr_61888_66829[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (17))){
var inst_61815 = (state_61869[(11)]);
var inst_61824 = com.wsscode.async.async_cljs.promise__GT_chan(inst_61815);
var state_61869__$1 = state_61869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61869__$1,(20),inst_61824);
} else {
if((state_val_61870 === (3))){
var inst_61867 = (state_61869[(2)]);
var state_61869__$1 = state_61869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61869__$1,inst_61867);
} else {
if((state_val_61870 === (12))){
var inst_61814 = (state_61869[(9)]);
var inst_61815 = (state_61869[(11)]);
var inst_61808 = (state_61869[(12)]);
var inst_61812 = (state_61869[(2)]);
var inst_61813 = com.wsscode.async.async_cljs.throw_err(inst_61812);
var inst_61814__$1 = cljs.core.filterv(inst_61808,inst_61813);
var inst_61815__$1 = com.wsscode.pathom.connect.call_resolver(env__$1,inst_61814__$1);
var inst_61816 = com.wsscode.async.async_cljs.chan_QMARK_(inst_61815__$1);
var state_61869__$1 = (function (){var statearr_61889 = state_61869;
(statearr_61889[(9)] = inst_61814__$1);

(statearr_61889[(11)] = inst_61815__$1);

return statearr_61889;
})();
if(inst_61816){
var statearr_61890_66833 = state_61869__$1;
(statearr_61890_66833[(1)] = (13));

} else {
var statearr_61891_66834 = state_61869__$1;
(statearr_61891_66834[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (2))){
var inst_61802 = (state_61869[(7)]);
var _ = (function (){var statearr_61892 = state_61869;
(statearr_61892[(4)] = cljs.core.cons((5),(state_61869[(4)])));

return statearr_61892;
})();
var inst_61802__$1 = batch_QMARK_;
var state_61869__$1 = (function (){var statearr_61893 = state_61869;
(statearr_61893[(7)] = inst_61802__$1);

return statearr_61893;
})();
if(cljs.core.truth_(inst_61802__$1)){
var statearr_61894_66836 = state_61869__$1;
(statearr_61894_66836[(1)] = (6));

} else {
var statearr_61895_66837 = state_61869__$1;
(statearr_61895_66837[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (23))){
var inst_61832 = (state_61869[(2)]);
var state_61869__$1 = state_61869;
var statearr_61896_66844 = state_61869__$1;
(statearr_61896_66844[(2)] = inst_61832);

(statearr_61896_66844[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (19))){
var inst_61834 = (state_61869[(2)]);
var state_61869__$1 = state_61869;
var statearr_61897_66846 = state_61869__$1;
(statearr_61897_66846[(2)] = inst_61834);

(statearr_61897_66846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (11))){
var inst_61864 = (state_61869[(2)]);
var _ = (function (){var statearr_61899 = state_61869;
(statearr_61899[(4)] = cljs.core.rest((state_61869[(4)])));

return statearr_61899;
})();
var state_61869__$1 = state_61869;
var statearr_61900_66848 = state_61869__$1;
(statearr_61900_66848[(2)] = inst_61864);

(statearr_61900_66848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (9))){
var inst_61808 = (function (){return ((function (state_val_61870,c__48839__auto____$1,input,map__61544,map__61568,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_61590,inst_61600,inst_61591,inst_61567,inst_61593,inst_61566,inst_61592,inst_61565,inst_61542,inst_61594,inst_61596,inst_61597,inst_61598,state_val_61738,c__48839__auto__,k,p,map__61531,map__61531__$1,env,indexes,processing_sequence){
return (function (p1__61528_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__61528_SHARP_,input);
});
;})(state_val_61870,c__48839__auto____$1,input,map__61544,map__61568,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_61590,inst_61600,inst_61591,inst_61567,inst_61593,inst_61566,inst_61592,inst_61565,inst_61542,inst_61594,inst_61596,inst_61597,inst_61598,state_val_61738,c__48839__auto__,k,p,map__61531,map__61531__$1,env,indexes,processing_sequence))
})();
var inst_61809 = (function (){return ((function (inst_61808,state_val_61870,c__48839__auto____$1,input,map__61544,map__61568,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_61590,inst_61600,inst_61591,inst_61567,inst_61593,inst_61566,inst_61592,inst_61565,inst_61542,inst_61594,inst_61596,inst_61597,inst_61598,state_val_61738,c__48839__auto__,k,p,map__61531,map__61531__$1,env,indexes,processing_sequence){
return (function (p1__61527_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__61527_SHARP_,input);
});
;})(inst_61808,state_val_61870,c__48839__auto____$1,input,map__61544,map__61568,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_61590,inst_61600,inst_61591,inst_61567,inst_61593,inst_61566,inst_61592,inst_61565,inst_61542,inst_61594,inst_61596,inst_61597,inst_61598,state_val_61738,c__48839__auto__,k,p,map__61531,map__61531__$1,env,indexes,processing_sequence))
})();
var inst_61810 = com.wsscode.pathom.connect.map_async_serial(inst_61809,processing_sequence);
var state_61869__$1 = (function (){var statearr_61901 = state_61869;
(statearr_61901[(12)] = inst_61808);

return statearr_61901;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61869__$1,(12),inst_61810);
} else {
if((state_val_61870 === (5))){
var _ = (function (){var statearr_61902 = state_61869;
(statearr_61902[(4)] = cljs.core.rest((state_61869[(4)])));

return statearr_61902;
})();
var state_61869__$1 = state_61869;
var ex61898 = (state_61869__$1[(2)]);
var statearr_61903_66858 = state_61869__$1;
(statearr_61903_66858[(5)] = ex61898);


var statearr_61904_66859 = state_61869__$1;
(statearr_61904_66859[(1)] = (4));

(statearr_61904_66859[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (14))){
var inst_61815 = (state_61869[(11)]);
var inst_61822 = com.wsscode.async.async_cljs.promise_QMARK_(inst_61815);
var state_61869__$1 = state_61869;
if(cljs.core.truth_(inst_61822)){
var statearr_61905_66861 = state_61869__$1;
(statearr_61905_66861[(1)] = (17));

} else {
var statearr_61906_66862 = state_61869__$1;
(statearr_61906_66862[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (26))){
var inst_61862 = (state_61869[(2)]);
var state_61869__$1 = state_61869;
var statearr_61907_66863 = state_61869__$1;
(statearr_61907_66863[(2)] = inst_61862);

(statearr_61907_66863[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (16))){
var inst_61819 = (state_61869[(2)]);
var inst_61820 = com.wsscode.async.async_cljs.throw_err(inst_61819);
var state_61869__$1 = state_61869;
var statearr_61908_66868 = state_61869__$1;
(statearr_61908_66868[(2)] = inst_61820);

(statearr_61908_66868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (30))){
var inst_61860 = (state_61869[(2)]);
var state_61869__$1 = state_61869;
var statearr_61909_66869 = state_61869__$1;
(statearr_61909_66869[(2)] = inst_61860);

(statearr_61909_66869[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (10))){
var inst_61841 = (state_61869[(8)]);
var inst_61841__$1 = com.wsscode.pathom.connect.call_resolver(env__$1,e);
var inst_61842 = com.wsscode.async.async_cljs.chan_QMARK_(inst_61841__$1);
var state_61869__$1 = (function (){var statearr_61910 = state_61869;
(statearr_61910[(8)] = inst_61841__$1);

return statearr_61910;
})();
if(inst_61842){
var statearr_61911_66873 = state_61869__$1;
(statearr_61911_66873[(1)] = (24));

} else {
var statearr_61912_66874 = state_61869__$1;
(statearr_61912_66874[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (18))){
var state_61869__$1 = state_61869;
var statearr_61913_66875 = state_61869__$1;
(statearr_61913_66875[(1)] = (21));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61870 === (8))){
var inst_61806 = (state_61869[(2)]);
var state_61869__$1 = state_61869;
if(cljs.core.truth_(inst_61806)){
var statearr_61915_66877 = state_61869__$1;
(statearr_61915_66877[(1)] = (9));

} else {
var statearr_61916_66882 = state_61869__$1;
(statearr_61916_66882[(1)] = (10));

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
});})(c__48839__auto____$1,input,map__61544,map__61568,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_61590,inst_61600,inst_61591,inst_61567,inst_61593,inst_61566,inst_61592,inst_61565,inst_61542,inst_61594,inst_61596,inst_61597,inst_61598,state_val_61738,c__48839__auto__,k,p,map__61531,map__61531__$1,env,indexes,processing_sequence))
;
return ((function (switch__48139__auto__,c__48839__auto____$1,input,map__61544,map__61568,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_61590,inst_61600,inst_61591,inst_61567,inst_61593,inst_61566,inst_61592,inst_61565,inst_61542,inst_61594,inst_61596,inst_61597,inst_61598,state_val_61738,c__48839__auto__,k,p,map__61531,map__61531__$1,env,indexes,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_reader_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$connect$async_reader_$_state_machine__48140__auto____0 = (function (){
var statearr_61917 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61917[(0)] = com$wsscode$pathom$connect$async_reader_$_state_machine__48140__auto__);

(statearr_61917[(1)] = (1));

return statearr_61917;
});
var com$wsscode$pathom$connect$async_reader_$_state_machine__48140__auto____1 = (function (state_61869){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_61869);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e61918){var ex__48143__auto__ = e61918;
var statearr_61919_66888 = state_61869;
(statearr_61919_66888[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_61869[(4)]))){
var statearr_61920_66890 = state_61869;
(statearr_61920_66890[(1)] = cljs.core.first((state_61869[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66892 = state_61869;
state_61869 = G__66892;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader_$_state_machine__48140__auto__ = function(state_61869){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader_$_state_machine__48140__auto____1.call(this,state_61869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader_$_state_machine__48140__auto____0;
com$wsscode$pathom$connect$async_reader_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader_$_state_machine__48140__auto____1;
return com$wsscode$pathom$connect$async_reader_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto____$1,input,map__61544,map__61568,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_61590,inst_61600,inst_61591,inst_61567,inst_61593,inst_61566,inst_61592,inst_61565,inst_61542,inst_61594,inst_61596,inst_61597,inst_61598,state_val_61738,c__48839__auto__,k,p,map__61531,map__61531__$1,env,indexes,processing_sequence))
})();
var state__48841__auto__ = (function (){var statearr_61921 = f__48840__auto__();
(statearr_61921[(6)] = c__48839__auto____$1);

return statearr_61921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto____$1,input,map__61544,map__61568,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_61590,inst_61600,inst_61591,inst_61567,inst_61593,inst_61566,inst_61592,inst_61565,inst_61542,inst_61594,inst_61596,inst_61597,inst_61598,state_val_61738,c__48839__auto__,k,p,map__61531,map__61531__$1,env,indexes,processing_sequence))
);

return c__48839__auto____$1;
});
;})(input,map__61544,map__61568,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_61590,inst_61600,inst_61591,inst_61567,inst_61593,inst_61566,inst_61592,inst_61565,inst_61542,inst_61594,inst_61596,inst_61597,inst_61598,state_val_61738,c__48839__auto__,k,p,map__61531,map__61531__$1,env,indexes,processing_sequence))
})();
var inst_61600__$1 = com.wsscode.pathom.core.cached_async(inst_61594,inst_61598,inst_61599);
var inst_61601 = com.wsscode.async.async_cljs.chan_QMARK_(inst_61600__$1);
var state_61737__$1 = (function (){var statearr_61922 = state_61737;
(statearr_61922[(22)] = inst_61600__$1);

return statearr_61922;
})();
if(inst_61601){
var statearr_61923_66897 = state_61737__$1;
(statearr_61923_66897[(1)] = (31));

} else {
var statearr_61924_66898 = state_61737__$1;
(statearr_61924_66898[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (64))){
var state_61737__$1 = state_61737;
var statearr_61925_66900 = state_61737__$1;
(statearr_61925_66900[(1)] = (67));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (51))){
var state_61737__$1 = state_61737;
var statearr_61927_66902 = state_61737__$1;
(statearr_61927_66902[(2)] = null);

(statearr_61927_66902[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (25))){
var inst_61569 = (state_61737[(24)]);
var inst_61587 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61569);
var state_61737__$1 = state_61737;
var statearr_61928_66905 = state_61737__$1;
(statearr_61928_66905[(2)] = inst_61587);

(statearr_61928_66905[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (34))){
var inst_61604 = (state_61737[(2)]);
var inst_61605 = com.wsscode.async.async_cljs.throw_err(inst_61604);
var state_61737__$1 = state_61737;
var statearr_61929_66907 = state_61737__$1;
(statearr_61929_66907[(2)] = inst_61605);

(statearr_61929_66907[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (17))){
var inst_61542 = (state_61737[(8)]);
var state_61737__$1 = state_61737;
var statearr_61930_66908 = state_61737__$1;
(statearr_61930_66908[(2)] = inst_61542);

(statearr_61930_66908[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (3))){
var inst_61735 = (state_61737[(2)]);
var state_61737__$1 = state_61737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61737__$1,inst_61735);
} else {
if((state_val_61738 === (12))){
var inst_61560 = (state_61737[(2)]);
var state_61737__$1 = state_61737;
if(cljs.core.truth_(inst_61560)){
var statearr_61931_66914 = state_61737__$1;
(statearr_61931_66914[(1)] = (16));

} else {
var statearr_61932_66917 = state_61737__$1;
(statearr_61932_66917[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (2))){
var _ = (function (){var statearr_61933 = state_61737;
(statearr_61933[(4)] = cljs.core.cons((5),(state_61737[(4)])));

return statearr_61933;
})();
var inst_61539 = com.wsscode.pathom.connect.async_pick_resolver(env);
var state_61737__$1 = state_61737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61737__$1,(6),inst_61539);
} else {
if((state_val_61738 === (66))){
var inst_61679 = (state_61737[(2)]);
var inst_61680 = com.wsscode.async.async_cljs.consumer_pair(inst_61679);
var state_61737__$1 = state_61737;
var statearr_61934_66924 = state_61737__$1;
(statearr_61934_66924[(2)] = inst_61680);

(statearr_61934_66924[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (23))){
var state_61737__$1 = state_61737;
var statearr_61935_66926 = state_61737__$1;
(statearr_61935_66926[(2)] = false);

(statearr_61935_66926[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (47))){
var state_61737__$1 = state_61737;
var statearr_61936_66928 = state_61737__$1;
(statearr_61936_66928[(1)] = (50));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (35))){
var inst_61600 = (state_61737[(22)]);
var inst_61609 = com.wsscode.async.async_cljs.promise__GT_chan(inst_61600);
var state_61737__$1 = state_61737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61737__$1,(38),inst_61609);
} else {
if((state_val_61738 === (82))){
var inst_61705 = (state_61737[(2)]);
var inst_61706 = com.wsscode.async.async_cljs.throw_err(inst_61705);
var state_61737__$1 = state_61737;
var statearr_61938_66930 = state_61737__$1;
(statearr_61938_66930[(2)] = inst_61706);

(statearr_61938_66930[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (76))){
var inst_61664 = (state_61737[(15)]);
var inst_61647 = (state_61737[(16)]);
var inst_61701 = (state_61737[(25)]);
var inst_61700 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_61664);
var inst_61701__$1 = com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(inst_61700,inst_61647);
var inst_61702 = com.wsscode.async.async_cljs.chan_QMARK_(inst_61701__$1);
var state_61737__$1 = (function (){var statearr_61939 = state_61737;
(statearr_61939[(25)] = inst_61701__$1);

return statearr_61939;
})();
if(inst_61702){
var statearr_61940_66936 = state_61737__$1;
(statearr_61940_66936[(1)] = (79));

} else {
var statearr_61941_66937 = state_61737__$1;
(statearr_61941_66937[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (19))){
var inst_61569 = (state_61737[(24)]);
var inst_61574 = inst_61569.cljs$lang$protocol_mask$partition0$;
var inst_61575 = (inst_61574 & (64));
var inst_61576 = inst_61569.cljs$core$ISeq$;
var inst_61577 = (cljs.core.PROTOCOL_SENTINEL === inst_61576);
var inst_61578 = ((inst_61575) || (inst_61577));
var state_61737__$1 = state_61737;
if(cljs.core.truth_(inst_61578)){
var statearr_61942_66938 = state_61737__$1;
(statearr_61942_66938[(1)] = (22));

} else {
var statearr_61943_66939 = state_61737__$1;
(statearr_61943_66939[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (57))){
var inst_61664 = (state_61737[(15)]);
var inst_61691 = (inst_61664 == null);
var state_61737__$1 = state_61737;
if(cljs.core.truth_(inst_61691)){
var statearr_61944_66943 = state_61737__$1;
(statearr_61944_66943[(1)] = (70));

} else {
var statearr_61945_66944 = state_61737__$1;
(statearr_61945_66944[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (68))){
var state_61737__$1 = state_61737;
var statearr_61946_66946 = state_61737__$1;
(statearr_61946_66946[(2)] = null);

(statearr_61946_66946[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (11))){
var state_61737__$1 = state_61737;
var statearr_61948_66947 = state_61737__$1;
(statearr_61948_66947[(2)] = false);

(statearr_61948_66947[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (9))){
var inst_61732 = (state_61737[(2)]);
var _ = (function (){var statearr_61949 = state_61737;
(statearr_61949[(4)] = cljs.core.rest((state_61737[(4)])));

return statearr_61949;
})();
var state_61737__$1 = state_61737;
var statearr_61950_66953 = state_61737__$1;
(statearr_61950_66953[(2)] = inst_61732);

(statearr_61950_66953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (5))){
var _ = (function (){var statearr_61951 = state_61737;
(statearr_61951[(4)] = cljs.core.rest((state_61737[(4)])));

return statearr_61951;
})();
var state_61737__$1 = state_61737;
var ex61947 = (state_61737__$1[(2)]);
var statearr_61952_66954 = state_61737__$1;
(statearr_61952_66954[(5)] = ex61947);


var statearr_61953_66956 = state_61737__$1;
(statearr_61953_66956[(1)] = (4));

(statearr_61953_66956[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (83))){
var inst_61701 = (state_61737[(25)]);
var inst_61710 = com.wsscode.async.async_cljs.promise__GT_chan(inst_61701);
var state_61737__$1 = state_61737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61737__$1,(86),inst_61710);
} else {
if((state_val_61738 === (14))){
var state_61737__$1 = state_61737;
var statearr_61954_66958 = state_61737__$1;
(statearr_61954_66958[(2)] = false);

(statearr_61954_66958[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (45))){
var inst_61627 = (state_61737[(2)]);
var inst_61628 = com.wsscode.async.async_cljs.throw_err(inst_61627);
var state_61737__$1 = state_61737;
var statearr_61955_66960 = state_61737__$1;
(statearr_61955_66960[(2)] = inst_61628);

(statearr_61955_66960[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (53))){
var inst_61567 = (state_61737[(17)]);
var inst_61648 = (state_61737[(7)]);
var inst_61654 = [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"response","response",-1068424192)];
var inst_61655 = [inst_61567,inst_61648];
var inst_61656 = cljs.core.PersistentHashMap.fromArrays(inst_61654,inst_61655);
var inst_61657 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Response from reader must be a map.",inst_61656);
var inst_61658 = (function(){throw inst_61657})();
var state_61737__$1 = state_61737;
var statearr_61956_66963 = state_61737__$1;
(statearr_61956_66963[(2)] = inst_61658);

(statearr_61956_66963[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (78))){
var inst_61725 = (state_61737[(2)]);
var state_61737__$1 = state_61737;
var statearr_61957_66966 = state_61737__$1;
(statearr_61957_66966[(2)] = inst_61725);

(statearr_61957_66966[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (26))){
var inst_61569 = (state_61737[(24)]);
var state_61737__$1 = state_61737;
var statearr_61958_66969 = state_61737__$1;
(statearr_61958_66969[(2)] = inst_61569);

(statearr_61958_66969[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (16))){
var inst_61542 = (state_61737[(8)]);
var inst_61562 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61542);
var state_61737__$1 = state_61737;
var statearr_61959_66971 = state_61737__$1;
(statearr_61959_66971[(2)] = inst_61562);

(statearr_61959_66971[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (81))){
var inst_61722 = (state_61737[(2)]);
var state_61737__$1 = state_61737;
var statearr_61960_66973 = state_61737__$1;
(statearr_61960_66973[(2)] = inst_61722);

(statearr_61960_66973[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (79))){
var inst_61701 = (state_61737[(25)]);
var state_61737__$1 = state_61737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61737__$1,(82),inst_61701);
} else {
if((state_val_61738 === (38))){
var inst_61611 = (state_61737[(2)]);
var inst_61612 = com.wsscode.async.async_cljs.consumer_pair(inst_61611);
var state_61737__$1 = state_61737;
var statearr_61961_66976 = state_61737__$1;
(statearr_61961_66976[(2)] = inst_61612);

(statearr_61961_66976[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (87))){
var inst_61701 = (state_61737[(25)]);
var state_61737__$1 = state_61737;
var statearr_61962_66978 = state_61737__$1;
(statearr_61962_66978[(2)] = inst_61701);

(statearr_61962_66978[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (30))){
var inst_61648 = (state_61737[(7)]);
var inst_61594 = (state_61737[(14)]);
var inst_61646 = (state_61737[(2)]);
var inst_61647 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_61646,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),inst_61594);
var inst_61648__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_61646,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_61649 = (inst_61648__$1 == null);
var inst_61650 = cljs.core.map_QMARK_(inst_61648__$1);
var inst_61651 = ((inst_61649) || (inst_61650));
var inst_61652 = cljs.core.not(inst_61651);
var state_61737__$1 = (function (){var statearr_61963 = state_61737;
(statearr_61963[(16)] = inst_61647);

(statearr_61963[(7)] = inst_61648__$1);

return statearr_61963;
})();
if(inst_61652){
var statearr_61964_66983 = state_61737__$1;
(statearr_61964_66983[(1)] = (53));

} else {
var statearr_61965_66984 = state_61737__$1;
(statearr_61965_66984[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (73))){
var inst_61664 = (state_61737[(15)]);
var state_61737__$1 = state_61737;
var statearr_61966_66985 = state_61737__$1;
(statearr_61966_66985[(2)] = inst_61664);

(statearr_61966_66985[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (10))){
var inst_61542 = (state_61737[(8)]);
var inst_61549 = inst_61542.cljs$lang$protocol_mask$partition0$;
var inst_61550 = (inst_61549 & (64));
var inst_61551 = inst_61542.cljs$core$ISeq$;
var inst_61552 = (cljs.core.PROTOCOL_SENTINEL === inst_61551);
var inst_61553 = ((inst_61550) || (inst_61552));
var state_61737__$1 = state_61737;
if(cljs.core.truth_(inst_61553)){
var statearr_61967_66988 = state_61737__$1;
(statearr_61967_66988[(1)] = (13));

} else {
var statearr_61968_66989 = state_61737__$1;
(statearr_61968_66989[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (18))){
var inst_61567 = (state_61737[(17)]);
var inst_61565 = (state_61737[(19)]);
var inst_61569 = (state_61737[(24)]);
var inst_61565__$1 = (state_61737[(2)]);
var inst_61566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61565__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var inst_61567__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61565__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var inst_61569__$1 = (com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.resolver_data.cljs$core$IFn$_invoke$arity$2(env,inst_61567__$1) : com.wsscode.pathom.connect.resolver_data.call(null,env,inst_61567__$1));
var inst_61571 = (inst_61569__$1 == null);
var inst_61572 = cljs.core.not(inst_61571);
var state_61737__$1 = (function (){var statearr_61969 = state_61737;
(statearr_61969[(17)] = inst_61567__$1);

(statearr_61969[(18)] = inst_61566);

(statearr_61969[(19)] = inst_61565__$1);

(statearr_61969[(24)] = inst_61569__$1);

return statearr_61969;
})();
if(inst_61572){
var statearr_61970_66992 = state_61737__$1;
(statearr_61970_66992[(1)] = (19));

} else {
var statearr_61971_66994 = state_61737__$1;
(statearr_61971_66994[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (52))){
var inst_61640 = (state_61737[(2)]);
var state_61737__$1 = state_61737;
var statearr_61972_66996 = state_61737__$1;
(statearr_61972_66996[(2)] = inst_61640);

(statearr_61972_66996[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (67))){
var inst_61668 = (state_61737[(9)]);
var state_61737__$1 = state_61737;
var statearr_61973_66999 = state_61737__$1;
(statearr_61973_66999[(2)] = inst_61668);

(statearr_61973_66999[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (71))){
var state_61737__$1 = state_61737;
var statearr_61974_67000 = state_61737__$1;
(statearr_61974_67000[(1)] = (76));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (42))){
var inst_61623 = (state_61737[(23)]);
var state_61737__$1 = state_61737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61737__$1,(45),inst_61623);
} else {
if((state_val_61738 === (80))){
var inst_61701 = (state_61737[(25)]);
var inst_61708 = com.wsscode.async.async_cljs.promise_QMARK_(inst_61701);
var state_61737__$1 = state_61737;
if(cljs.core.truth_(inst_61708)){
var statearr_61976_67005 = state_61737__$1;
(statearr_61976_67005[(1)] = (83));

} else {
var statearr_61977_67007 = state_61737__$1;
(statearr_61977_67007[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (37))){
var inst_61619 = (state_61737[(2)]);
var state_61737__$1 = state_61737;
var statearr_61978_67008 = state_61737__$1;
(statearr_61978_67008[(2)] = inst_61619);

(statearr_61978_67008[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (63))){
var inst_61668 = (state_61737[(9)]);
var inst_61677 = com.wsscode.async.async_cljs.promise__GT_chan(inst_61668);
var state_61737__$1 = state_61737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61737__$1,(66),inst_61677);
} else {
if((state_val_61738 === (8))){
var state_61737__$1 = state_61737;
var statearr_61979_67009 = state_61737__$1;
(statearr_61979_67009[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));

(statearr_61979_67009[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (49))){
var inst_61634 = (state_61737[(2)]);
var inst_61635 = com.wsscode.async.async_cljs.consumer_pair(inst_61634);
var state_61737__$1 = state_61737;
var statearr_61980_67010 = state_61737__$1;
(statearr_61980_67010[(2)] = inst_61635);

(statearr_61980_67010[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61738 === (84))){
var state_61737__$1 = state_61737;
var statearr_61981_67012 = state_61737__$1;
(statearr_61981_67012[(1)] = (87));



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
});})(c__48839__auto__,k,p,map__61531,map__61531__$1,env,indexes,processing_sequence))
;
return ((function (switch__48139__auto__,c__48839__auto__,k,p,map__61531,map__61531__$1,env,indexes,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_reader_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$connect$async_reader_$_state_machine__48140__auto____0 = (function (){
var statearr_61983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61983[(0)] = com$wsscode$pathom$connect$async_reader_$_state_machine__48140__auto__);

(statearr_61983[(1)] = (1));

return statearr_61983;
});
var com$wsscode$pathom$connect$async_reader_$_state_machine__48140__auto____1 = (function (state_61737){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_61737);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e61984){var ex__48143__auto__ = e61984;
var statearr_61985_67020 = state_61737;
(statearr_61985_67020[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_61737[(4)]))){
var statearr_61986_67021 = state_61737;
(statearr_61986_67021[(1)] = cljs.core.first((state_61737[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67022 = state_61737;
state_61737 = G__67022;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader_$_state_machine__48140__auto__ = function(state_61737){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader_$_state_machine__48140__auto____1.call(this,state_61737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader_$_state_machine__48140__auto____0;
com$wsscode$pathom$connect$async_reader_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader_$_state_machine__48140__auto____1;
return com$wsscode$pathom$connect$async_reader_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,k,p,map__61531,map__61531__$1,env,indexes,processing_sequence))
})();
var state__48841__auto__ = (function (){var statearr_61987 = f__48840__auto__();
(statearr_61987[(6)] = c__48839__auto__);

return statearr_61987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,k,p,map__61531,map__61531__$1,env,indexes,processing_sequence))
);

return c__48839__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.async_read_call_batch = (function com$wsscode$pathom$connect$async_read_call_batch(p__61990,e,trace_data,input){
var map__61991 = p__61990;
var map__61991__$1 = (((((!((map__61991 == null))))?(((((map__61991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61991):map__61991);
var env = map__61991__$1;
var map__61992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61991__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__61992__$1 = (((((!((map__61992 == null))))?(((((map__61992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61992):map__61992);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61992__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61991__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var ch__53995__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__48839__auto___67027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto___67027,ch__53995__auto__,map__61991,map__61991__$1,env,map__61992,map__61992__$1,sym,processing_sequence){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto___67027,ch__53995__auto__,map__61991,map__61991__$1,env,map__61992,map__61992__$1,sym,processing_sequence){
return (function (state_62109){
var state_val_62110 = (state_62109[(1)]);
if((state_val_62110 === (7))){
var inst_62052 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_62053 = com.wsscode.pathom.trace.trace(env,inst_62052);
var inst_62054 = (function (){var _ = inst_62053;
return ((function (_,inst_62052,inst_62053,state_val_62110,c__48839__auto___67027,ch__53995__auto__,map__61991,map__61991__$1,env,map__61992,map__61992__$1,sym,processing_sequence){
return (function (p1__61989_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__61989_SHARP_,input);
});
;})(_,inst_62052,inst_62053,state_val_62110,c__48839__auto___67027,ch__53995__auto__,map__61991,map__61991__$1,env,map__61992,map__61992__$1,sym,processing_sequence))
})();
var inst_62055 = (function (){var _ = inst_62053;
return ((function (_,inst_62052,inst_62053,inst_62054,state_val_62110,c__48839__auto___67027,ch__53995__auto__,map__61991,map__61991__$1,env,map__61992,map__61992__$1,sym,processing_sequence){
return (function (p1__61988_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__61988_SHARP_,input);
});
;})(_,inst_62052,inst_62053,inst_62054,state_val_62110,c__48839__auto___67027,ch__53995__auto__,map__61991,map__61991__$1,env,map__61992,map__61992__$1,sym,processing_sequence))
})();
var inst_62056 = com.wsscode.pathom.connect.map_async_serial(inst_62055,processing_sequence);
var state_62109__$1 = (function (){var statearr_62111 = state_62109;
(statearr_62111[(7)] = inst_62054);

return statearr_62111;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62109__$1,(21),inst_62056);
} else {
if((state_val_62110 === (20))){
var inst_62036 = (state_62109[(2)]);
var state_62109__$1 = state_62109;
var statearr_62112_67036 = state_62109__$1;
(statearr_62112_67036[(2)] = inst_62036);

(statearr_62112_67036[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (27))){
var state_62109__$1 = state_62109;
var statearr_62113_67037 = state_62109__$1;
(statearr_62113_67037[(1)] = (30));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (1))){
var state_62109__$1 = state_62109;
var statearr_62115_67038 = state_62109__$1;
(statearr_62115_67038[(2)] = null);

(statearr_62115_67038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (24))){
var inst_62061 = (state_62109[(8)]);
var inst_62087 = (state_62109[(2)]);
var inst_62088 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_62089 = cljs.core.count(inst_62087);
var inst_62090 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_62089];
var inst_62091 = cljs.core.PersistentHashMap.fromArrays(inst_62088,inst_62090);
var inst_62092 = com.wsscode.pathom.trace.trace(env,inst_62091);
var inst_62093 = cljs.core.zipmap(inst_62061,inst_62087);
var inst_62094 = com.wsscode.pathom.connect.cache_batch(env,sym,inst_62093);
var inst_62095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62093,e);
var state_62109__$1 = (function (){var statearr_62116 = state_62109;
(statearr_62116[(9)] = inst_62094);

(statearr_62116[(10)] = inst_62092);

return statearr_62116;
})();
var statearr_62117_67044 = state_62109__$1;
(statearr_62117_67044[(2)] = inst_62095);

(statearr_62117_67044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (4))){
var inst_61995 = (state_62109[(2)]);
var state_62109__$1 = state_62109;
var statearr_62118_67045 = state_62109__$1;
(statearr_62118_67045[(2)] = inst_61995);

(statearr_62118_67045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (15))){
var state_62109__$1 = state_62109;
var statearr_62119_67046 = state_62109__$1;
(statearr_62119_67046[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (21))){
var inst_62066 = (state_62109[(11)]);
var inst_62054 = (state_62109[(7)]);
var inst_62061 = (state_62109[(8)]);
var inst_62058 = (state_62109[(2)]);
var inst_62059 = com.wsscode.async.async_cljs.throw_err(inst_62058);
var inst_62060 = cljs.core.filterv(inst_62054,inst_62059);
var inst_62061__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_62060);
var inst_62062 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_62063 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_62061__$1];
var inst_62064 = cljs.core.PersistentHashMap.fromArrays(inst_62062,inst_62063);
var inst_62065 = com.wsscode.pathom.trace.trace(env,inst_62064);
var inst_62066__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_62061__$1);
var inst_62067 = com.wsscode.async.async_cljs.chan_QMARK_(inst_62066__$1);
var state_62109__$1 = (function (){var statearr_62121 = state_62109;
(statearr_62121[(12)] = inst_62065);

(statearr_62121[(11)] = inst_62066__$1);

(statearr_62121[(8)] = inst_62061__$1);

return statearr_62121;
})();
if(inst_62067){
var statearr_62122_67051 = state_62109__$1;
(statearr_62122_67051[(1)] = (22));

} else {
var statearr_62123_67052 = state_62109__$1;
(statearr_62123_67052[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (31))){
var state_62109__$1 = state_62109;
var statearr_62124_67053 = state_62109__$1;
(statearr_62124_67053[(2)] = null);

(statearr_62124_67053[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (32))){
var inst_62083 = (state_62109[(2)]);
var state_62109__$1 = state_62109;
var statearr_62125_67056 = state_62109__$1;
(statearr_62125_67056[(2)] = inst_62083);

(statearr_62125_67056[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (33))){
var inst_62103 = cljs.core.async.close_BANG_(ch__53995__auto__);
var state_62109__$1 = state_62109;
var statearr_62126_67059 = state_62109__$1;
(statearr_62126_67059[(2)] = inst_62103);

(statearr_62126_67059[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (13))){
var inst_62023 = (state_62109[(2)]);
var inst_62024 = com.wsscode.async.async_cljs.throw_err(inst_62023);
var state_62109__$1 = state_62109;
var statearr_62127_67060 = state_62109__$1;
(statearr_62127_67060[(2)] = inst_62024);

(statearr_62127_67060[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (22))){
var inst_62066 = (state_62109[(11)]);
var state_62109__$1 = state_62109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62109__$1,(25),inst_62066);
} else {
if((state_val_62110 === (29))){
var inst_62077 = (state_62109[(2)]);
var inst_62078 = com.wsscode.async.async_cljs.consumer_pair(inst_62077);
var state_62109__$1 = state_62109;
var statearr_62128_67062 = state_62109__$1;
(statearr_62128_67062[(2)] = inst_62078);

(statearr_62128_67062[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (6))){
var inst_62004 = (state_62109[(13)]);
var inst_62003 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_62004__$1 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_62003);
var inst_62005 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_62006 = com.wsscode.pathom.trace.trace(env,inst_62005);
var inst_62007 = (function (){var trace_id__27500__auto__ = inst_62004__$1;
var _ = inst_62006;
return ((function (trace_id__27500__auto__,_,inst_62004,inst_62003,inst_62004__$1,inst_62005,inst_62006,state_val_62110,c__48839__auto___67027,ch__53995__auto__,map__61991,map__61991__$1,env,map__61992,map__61992__$1,sym,processing_sequence){
return (function (p1__61989_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__61989_SHARP_,input);
});
;})(trace_id__27500__auto__,_,inst_62004,inst_62003,inst_62004__$1,inst_62005,inst_62006,state_val_62110,c__48839__auto___67027,ch__53995__auto__,map__61991,map__61991__$1,env,map__61992,map__61992__$1,sym,processing_sequence))
})();
var inst_62008 = (function (){var trace_id__27500__auto__ = inst_62004__$1;
var _ = inst_62006;
return ((function (trace_id__27500__auto__,_,inst_62004,inst_62003,inst_62004__$1,inst_62005,inst_62006,inst_62007,state_val_62110,c__48839__auto___67027,ch__53995__auto__,map__61991,map__61991__$1,env,map__61992,map__61992__$1,sym,processing_sequence){
return (function (p1__61988_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__61988_SHARP_,input);
});
;})(trace_id__27500__auto__,_,inst_62004,inst_62003,inst_62004__$1,inst_62005,inst_62006,inst_62007,state_val_62110,c__48839__auto___67027,ch__53995__auto__,map__61991,map__61991__$1,env,map__61992,map__61992__$1,sym,processing_sequence))
})();
var inst_62009 = com.wsscode.pathom.connect.map_async_serial(inst_62008,processing_sequence);
var state_62109__$1 = (function (){var statearr_62129 = state_62109;
(statearr_62129[(14)] = inst_62007);

(statearr_62129[(13)] = inst_62004__$1);

return statearr_62129;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62109__$1,(9),inst_62009);
} else {
if((state_val_62110 === (28))){
var inst_62085 = (state_62109[(2)]);
var state_62109__$1 = state_62109;
var statearr_62130_67070 = state_62109__$1;
(statearr_62130_67070[(2)] = inst_62085);

(statearr_62130_67070[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (25))){
var inst_62070 = (state_62109[(2)]);
var inst_62071 = com.wsscode.async.async_cljs.throw_err(inst_62070);
var state_62109__$1 = state_62109;
var statearr_62131_67071 = state_62109__$1;
(statearr_62131_67071[(2)] = inst_62071);

(statearr_62131_67071[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (34))){
var inst_62100 = (state_62109[(15)]);
var inst_62105 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53995__auto__,inst_62100);
var state_62109__$1 = state_62109;
var statearr_62132_67072 = state_62109__$1;
(statearr_62132_67072[(2)] = inst_62105);

(statearr_62132_67072[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (17))){
var inst_62030 = (state_62109[(2)]);
var inst_62031 = com.wsscode.async.async_cljs.consumer_pair(inst_62030);
var state_62109__$1 = state_62109;
var statearr_62133_67076 = state_62109__$1;
(statearr_62133_67076[(2)] = inst_62031);

(statearr_62133_67076[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (3))){
var inst_62100 = (state_62109[(15)]);
var inst_62100__$1 = (state_62109[(2)]);
var inst_62101 = (inst_62100__$1 == null);
var state_62109__$1 = (function (){var statearr_62134 = state_62109;
(statearr_62134[(15)] = inst_62100__$1);

return statearr_62134;
})();
if(cljs.core.truth_(inst_62101)){
var statearr_62135_67077 = state_62109__$1;
(statearr_62135_67077[(1)] = (33));

} else {
var statearr_62136_67078 = state_62109__$1;
(statearr_62136_67078[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (12))){
var inst_62004 = (state_62109[(13)]);
var inst_62014 = (state_62109[(16)]);
var inst_62040 = (state_62109[(2)]);
var inst_62041 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_62042 = cljs.core.count(inst_62040);
var inst_62043 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_62042];
var inst_62044 = cljs.core.PersistentHashMap.fromArrays(inst_62041,inst_62043);
var inst_62045 = com.wsscode.pathom.trace.trace(env,inst_62044);
var inst_62046 = cljs.core.zipmap(inst_62014,inst_62040);
var inst_62047 = com.wsscode.pathom.connect.cache_batch(env,sym,inst_62046);
var inst_62048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62046,e);
var inst_62049 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_62050 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_62004,inst_62049);
var state_62109__$1 = (function (){var statearr_62137 = state_62109;
(statearr_62137[(17)] = inst_62050);

(statearr_62137[(18)] = inst_62045);

(statearr_62137[(19)] = inst_62047);

return statearr_62137;
})();
var statearr_62138_67080 = state_62109__$1;
(statearr_62138_67080[(2)] = inst_62048);

(statearr_62138_67080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (2))){
var _ = (function (){var statearr_62139 = state_62109;
(statearr_62139[(4)] = cljs.core.cons((5),(state_62109[(4)])));

return statearr_62139;
})();
var inst_62001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_62109__$1 = state_62109;
if(cljs.core.truth_(inst_62001)){
var statearr_62140_67081 = state_62109__$1;
(statearr_62140_67081[(1)] = (6));

} else {
var statearr_62141_67082 = state_62109__$1;
(statearr_62141_67082[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (23))){
var inst_62066 = (state_62109[(11)]);
var inst_62073 = com.wsscode.async.async_cljs.promise_QMARK_(inst_62066);
var state_62109__$1 = state_62109;
if(cljs.core.truth_(inst_62073)){
var statearr_62142_67083 = state_62109__$1;
(statearr_62142_67083[(1)] = (26));

} else {
var statearr_62143_67084 = state_62109__$1;
(statearr_62143_67084[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (35))){
var inst_62107 = (state_62109[(2)]);
var state_62109__$1 = state_62109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62109__$1,inst_62107);
} else {
if((state_val_62110 === (19))){
var state_62109__$1 = state_62109;
var statearr_62144_67085 = state_62109__$1;
(statearr_62144_67085[(2)] = null);

(statearr_62144_67085[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (11))){
var inst_62019 = (state_62109[(20)]);
var inst_62026 = com.wsscode.async.async_cljs.promise_QMARK_(inst_62019);
var state_62109__$1 = state_62109;
if(cljs.core.truth_(inst_62026)){
var statearr_62146_67090 = state_62109__$1;
(statearr_62146_67090[(1)] = (14));

} else {
var statearr_62147_67091 = state_62109__$1;
(statearr_62147_67091[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (9))){
var inst_62007 = (state_62109[(14)]);
var inst_62014 = (state_62109[(16)]);
var inst_62019 = (state_62109[(20)]);
var inst_62011 = (state_62109[(2)]);
var inst_62012 = com.wsscode.async.async_cljs.throw_err(inst_62011);
var inst_62013 = cljs.core.filterv(inst_62007,inst_62012);
var inst_62014__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_62013);
var inst_62015 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_62016 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_62014__$1];
var inst_62017 = cljs.core.PersistentHashMap.fromArrays(inst_62015,inst_62016);
var inst_62018 = com.wsscode.pathom.trace.trace(env,inst_62017);
var inst_62019__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_62014__$1);
var inst_62020 = com.wsscode.async.async_cljs.chan_QMARK_(inst_62019__$1);
var state_62109__$1 = (function (){var statearr_62148 = state_62109;
(statearr_62148[(16)] = inst_62014__$1);

(statearr_62148[(21)] = inst_62018);

(statearr_62148[(20)] = inst_62019__$1);

return statearr_62148;
})();
if(inst_62020){
var statearr_62149_67094 = state_62109__$1;
(statearr_62149_67094[(1)] = (10));

} else {
var statearr_62150_67095 = state_62109__$1;
(statearr_62150_67095[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (5))){
var _ = (function (){var statearr_62151 = state_62109;
(statearr_62151[(4)] = cljs.core.rest((state_62109[(4)])));

return statearr_62151;
})();
var state_62109__$1 = state_62109;
var ex62145 = (state_62109__$1[(2)]);
var statearr_62152_67098 = state_62109__$1;
(statearr_62152_67098[(5)] = ex62145);


var statearr_62153_67100 = state_62109__$1;
(statearr_62153_67100[(1)] = (4));

(statearr_62153_67100[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (14))){
var inst_62019 = (state_62109[(20)]);
var inst_62028 = com.wsscode.async.async_cljs.promise__GT_chan(inst_62019);
var state_62109__$1 = state_62109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62109__$1,(17),inst_62028);
} else {
if((state_val_62110 === (26))){
var inst_62066 = (state_62109[(11)]);
var inst_62075 = com.wsscode.async.async_cljs.promise__GT_chan(inst_62066);
var state_62109__$1 = state_62109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62109__$1,(29),inst_62075);
} else {
if((state_val_62110 === (16))){
var inst_62038 = (state_62109[(2)]);
var state_62109__$1 = state_62109;
var statearr_62154_67101 = state_62109__$1;
(statearr_62154_67101[(2)] = inst_62038);

(statearr_62154_67101[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (30))){
var inst_62066 = (state_62109[(11)]);
var state_62109__$1 = state_62109;
var statearr_62155_67102 = state_62109__$1;
(statearr_62155_67102[(2)] = inst_62066);

(statearr_62155_67102[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (10))){
var inst_62019 = (state_62109[(20)]);
var state_62109__$1 = state_62109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62109__$1,(13),inst_62019);
} else {
if((state_val_62110 === (18))){
var inst_62019 = (state_62109[(20)]);
var state_62109__$1 = state_62109;
var statearr_62156_67103 = state_62109__$1;
(statearr_62156_67103[(2)] = inst_62019);

(statearr_62156_67103[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62110 === (8))){
var inst_62097 = (state_62109[(2)]);
var _ = (function (){var statearr_62157 = state_62109;
(statearr_62157[(4)] = cljs.core.rest((state_62109[(4)])));

return statearr_62157;
})();
var state_62109__$1 = state_62109;
var statearr_62158_67104 = state_62109__$1;
(statearr_62158_67104[(2)] = inst_62097);

(statearr_62158_67104[(1)] = (3));


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
});})(c__48839__auto___67027,ch__53995__auto__,map__61991,map__61991__$1,env,map__61992,map__61992__$1,sym,processing_sequence))
;
return ((function (switch__48139__auto__,c__48839__auto___67027,ch__53995__auto__,map__61991,map__61991__$1,env,map__61992,map__61992__$1,sym,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__48140__auto____0 = (function (){
var statearr_62159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62159[(0)] = com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__48140__auto__);

(statearr_62159[(1)] = (1));

return statearr_62159;
});
var com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__48140__auto____1 = (function (state_62109){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_62109);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e62160){var ex__48143__auto__ = e62160;
var statearr_62161_67105 = state_62109;
(statearr_62161_67105[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_62109[(4)]))){
var statearr_62162_67106 = state_62109;
(statearr_62162_67106[(1)] = cljs.core.first((state_62109[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67107 = state_62109;
state_62109 = G__67107;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__48140__auto__ = function(state_62109){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__48140__auto____1.call(this,state_62109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__48140__auto____0;
com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__48140__auto____1;
return com$wsscode$pathom$connect$async_read_call_batch_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto___67027,ch__53995__auto__,map__61991,map__61991__$1,env,map__61992,map__61992__$1,sym,processing_sequence))
})();
var state__48841__auto__ = (function (){var statearr_62163 = f__48840__auto__();
(statearr_62163[(6)] = c__48839__auto___67027);

return statearr_62163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto___67027,ch__53995__auto__,map__61991,map__61991__$1,env,map__61992,map__61992__$1,sym,processing_sequence))
);


return ch__53995__auto__;
});
com.wsscode.pathom.connect.async_read_cache_read = (function com$wsscode$pathom$connect$async_read_cache_read(p__62164,e,trace_data,input){
var map__62165 = p__62164;
var map__62165__$1 = (((((!((map__62165 == null))))?(((((map__62165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62165):map__62165);
var env = map__62165__$1;
var map__62166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62165__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__62166__$1 = (((((!((map__62166 == null))))?(((((map__62166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62166):map__62166);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62166__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62166__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62165__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var params = com.wsscode.pathom.core.params(env);
return com.wsscode.pathom.core.cached_async(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,e,params], null),((function (params,map__62165,map__62165__$1,env,map__62166,map__62166__$1,sym,batch_QMARK_,processing_sequence){
return (function (){
var ch__53995__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__48839__auto___67108 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto___67108,ch__53995__auto__,params,map__62165,map__62165__$1,env,map__62166,map__62166__$1,sym,batch_QMARK_,processing_sequence){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto___67108,ch__53995__auto__,params,map__62165,map__62165__$1,env,map__62166,map__62166__$1,sym,batch_QMARK_,processing_sequence){
return (function (state_62244){
var state_val_62245 = (state_62244[(1)]);
if((state_val_62245 === (7))){
var inst_62175 = (state_62244[(7)]);
var state_62244__$1 = state_62244;
var statearr_62246_67109 = state_62244__$1;
(statearr_62246_67109[(2)] = inst_62175);

(statearr_62246_67109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (20))){
var inst_62181 = (state_62244[(8)]);
var state_62244__$1 = state_62244;
var statearr_62247_67110 = state_62244__$1;
(statearr_62247_67110[(2)] = inst_62181);

(statearr_62247_67110[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (27))){
var inst_62204 = (state_62244[(9)]);
var inst_62213 = com.wsscode.async.async_cljs.promise__GT_chan(inst_62204);
var state_62244__$1 = state_62244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62244__$1,(30),inst_62213);
} else {
if((state_val_62245 === (1))){
var state_62244__$1 = state_62244;
var statearr_62248_67111 = state_62244__$1;
(statearr_62248_67111[(2)] = null);

(statearr_62248_67111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (24))){
var inst_62204 = (state_62244[(9)]);
var inst_62211 = com.wsscode.async.async_cljs.promise_QMARK_(inst_62204);
var state_62244__$1 = state_62244;
if(cljs.core.truth_(inst_62211)){
var statearr_62249_67112 = state_62244__$1;
(statearr_62249_67112[(1)] = (27));

} else {
var statearr_62250_67113 = state_62244__$1;
(statearr_62250_67113[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (39))){
var inst_62242 = (state_62244[(2)]);
var state_62244__$1 = state_62244;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62244__$1,inst_62242);
} else {
if((state_val_62245 === (4))){
var inst_62169 = (state_62244[(2)]);
var state_62244__$1 = state_62244;
var statearr_62251_67114 = state_62244__$1;
(statearr_62251_67114[(2)] = inst_62169);

(statearr_62251_67114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (15))){
var inst_62185 = (state_62244[(2)]);
var inst_62186 = com.wsscode.async.async_cljs.throw_err(inst_62185);
var state_62244__$1 = state_62244;
var statearr_62252_67115 = state_62244__$1;
(statearr_62252_67115[(2)] = inst_62186);

(statearr_62252_67115[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (21))){
var state_62244__$1 = state_62244;
var statearr_62253_67116 = state_62244__$1;
(statearr_62253_67116[(2)] = null);

(statearr_62253_67116[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (31))){
var inst_62204 = (state_62244[(9)]);
var state_62244__$1 = state_62244;
var statearr_62254_67117 = state_62244__$1;
(statearr_62254_67117[(2)] = inst_62204);

(statearr_62254_67117[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (32))){
var state_62244__$1 = state_62244;
var statearr_62255_67118 = state_62244__$1;
(statearr_62255_67118[(2)] = null);

(statearr_62255_67118[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (33))){
var inst_62221 = (state_62244[(2)]);
var state_62244__$1 = state_62244;
var statearr_62256_67119 = state_62244__$1;
(statearr_62256_67119[(2)] = inst_62221);

(statearr_62256_67119[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (13))){
var inst_62181 = (state_62244[(8)]);
var inst_62188 = com.wsscode.async.async_cljs.promise_QMARK_(inst_62181);
var state_62244__$1 = state_62244;
if(cljs.core.truth_(inst_62188)){
var statearr_62257_67120 = state_62244__$1;
(statearr_62257_67120[(1)] = (16));

} else {
var statearr_62258_67121 = state_62244__$1;
(statearr_62258_67121[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (22))){
var inst_62198 = (state_62244[(2)]);
var state_62244__$1 = state_62244;
var statearr_62259_67122 = state_62244__$1;
(statearr_62259_67122[(2)] = inst_62198);

(statearr_62259_67122[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (36))){
var inst_62232 = (state_62244[(2)]);
var _ = (function (){var statearr_62260 = state_62244;
(statearr_62260[(4)] = cljs.core.rest((state_62244[(4)])));

return statearr_62260;
})();
var state_62244__$1 = state_62244;
var statearr_62261_67125 = state_62244__$1;
(statearr_62261_67125[(2)] = inst_62232);

(statearr_62261_67125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (29))){
var inst_62223 = (state_62244[(2)]);
var state_62244__$1 = state_62244;
var statearr_62262_67130 = state_62244__$1;
(statearr_62262_67130[(2)] = inst_62223);

(statearr_62262_67130[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (6))){
var state_62244__$1 = state_62244;
var statearr_62263_67133 = state_62244__$1;
(statearr_62263_67133[(2)] = processing_sequence);

(statearr_62263_67133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (28))){
var state_62244__$1 = state_62244;
var statearr_62264_67134 = state_62244__$1;
(statearr_62264_67134[(1)] = (31));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (25))){
var inst_62225 = (state_62244[(2)]);
var state_62244__$1 = state_62244;
var statearr_62266_67146 = state_62244__$1;
(statearr_62266_67146[(2)] = inst_62225);

(statearr_62266_67146[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (34))){
var inst_62227 = (state_62244[(10)]);
var state_62244__$1 = state_62244;
var statearr_62267_67147 = state_62244__$1;
(statearr_62267_67147[(2)] = inst_62227);

(statearr_62267_67147[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (17))){
var state_62244__$1 = state_62244;
var statearr_62268_67148 = state_62244__$1;
(statearr_62268_67148[(1)] = (20));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (3))){
var inst_62235 = (state_62244[(11)]);
var inst_62235__$1 = (state_62244[(2)]);
var inst_62236 = (inst_62235__$1 == null);
var state_62244__$1 = (function (){var statearr_62270 = state_62244;
(statearr_62270[(11)] = inst_62235__$1);

return statearr_62270;
})();
if(cljs.core.truth_(inst_62236)){
var statearr_62271_67150 = state_62244__$1;
(statearr_62271_67150[(1)] = (37));

} else {
var statearr_62272_67151 = state_62244__$1;
(statearr_62272_67151[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (12))){
var inst_62181 = (state_62244[(8)]);
var state_62244__$1 = state_62244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62244__$1,(15),inst_62181);
} else {
if((state_val_62245 === (2))){
var inst_62175 = (state_62244[(7)]);
var _ = (function (){var statearr_62273 = state_62244;
(statearr_62273[(4)] = cljs.core.cons((5),(state_62244[(4)])));

return statearr_62273;
})();
var inst_62175__$1 = batch_QMARK_;
var state_62244__$1 = (function (){var statearr_62274 = state_62244;
(statearr_62274[(7)] = inst_62175__$1);

return statearr_62274;
})();
if(cljs.core.truth_(inst_62175__$1)){
var statearr_62275_67153 = state_62244__$1;
(statearr_62275_67153[(1)] = (6));

} else {
var statearr_62276_67154 = state_62244__$1;
(statearr_62276_67154[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (23))){
var inst_62204 = (state_62244[(9)]);
var state_62244__$1 = state_62244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62244__$1,(26),inst_62204);
} else {
if((state_val_62245 === (35))){
var inst_62230 = cljs.core.PersistentHashMap.EMPTY;
var state_62244__$1 = state_62244;
var statearr_62277_67156 = state_62244__$1;
(statearr_62277_67156[(2)] = inst_62230);

(statearr_62277_67156[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (19))){
var inst_62192 = (state_62244[(2)]);
var inst_62193 = com.wsscode.async.async_cljs.consumer_pair(inst_62192);
var state_62244__$1 = state_62244;
var statearr_62278_67157 = state_62244__$1;
(statearr_62278_67157[(2)] = inst_62193);

(statearr_62278_67157[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (11))){
var inst_62227 = (state_62244[(10)]);
var inst_62227__$1 = (state_62244[(2)]);
var state_62244__$1 = (function (){var statearr_62280 = state_62244;
(statearr_62280[(10)] = inst_62227__$1);

return statearr_62280;
})();
if(cljs.core.truth_(inst_62227__$1)){
var statearr_62281_67158 = state_62244__$1;
(statearr_62281_67158[(1)] = (34));

} else {
var statearr_62282_67159 = state_62244__$1;
(statearr_62282_67159[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (9))){
var inst_62181 = (state_62244[(8)]);
var inst_62181__$1 = com.wsscode.pathom.connect.async_read_call_batch(env,e,trace_data,input);
var inst_62182 = com.wsscode.async.async_cljs.chan_QMARK_(inst_62181__$1);
var state_62244__$1 = (function (){var statearr_62283 = state_62244;
(statearr_62283[(8)] = inst_62181__$1);

return statearr_62283;
})();
if(inst_62182){
var statearr_62284_67160 = state_62244__$1;
(statearr_62284_67160[(1)] = (12));

} else {
var statearr_62285_67161 = state_62244__$1;
(statearr_62285_67161[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (5))){
var _ = (function (){var statearr_62286 = state_62244;
(statearr_62286[(4)] = cljs.core.rest((state_62244[(4)])));

return statearr_62286;
})();
var state_62244__$1 = state_62244;
var ex62279 = (state_62244__$1[(2)]);
var statearr_62287_67163 = state_62244__$1;
(statearr_62287_67163[(5)] = ex62279);


var statearr_62288_67164 = state_62244__$1;
(statearr_62288_67164[(1)] = (4));

(statearr_62288_67164[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (14))){
var inst_62202 = (state_62244[(2)]);
var state_62244__$1 = state_62244;
var statearr_62289_67165 = state_62244__$1;
(statearr_62289_67165[(2)] = inst_62202);

(statearr_62289_67165[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (26))){
var inst_62208 = (state_62244[(2)]);
var inst_62209 = com.wsscode.async.async_cljs.throw_err(inst_62208);
var state_62244__$1 = state_62244;
var statearr_62290_67166 = state_62244__$1;
(statearr_62290_67166[(2)] = inst_62209);

(statearr_62290_67166[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (16))){
var inst_62181 = (state_62244[(8)]);
var inst_62190 = com.wsscode.async.async_cljs.promise__GT_chan(inst_62181);
var state_62244__$1 = state_62244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62244__$1,(19),inst_62190);
} else {
if((state_val_62245 === (38))){
var inst_62235 = (state_62244[(11)]);
var inst_62240 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53995__auto__,inst_62235);
var state_62244__$1 = state_62244;
var statearr_62291_67167 = state_62244__$1;
(statearr_62291_67167[(2)] = inst_62240);

(statearr_62291_67167[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (30))){
var inst_62215 = (state_62244[(2)]);
var inst_62216 = com.wsscode.async.async_cljs.consumer_pair(inst_62215);
var state_62244__$1 = state_62244;
var statearr_62292_67168 = state_62244__$1;
(statearr_62292_67168[(2)] = inst_62216);

(statearr_62292_67168[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (10))){
var inst_62204 = (state_62244[(9)]);
var inst_62204__$1 = com.wsscode.pathom.connect.call_resolver(env,e);
var inst_62205 = com.wsscode.async.async_cljs.chan_QMARK_(inst_62204__$1);
var state_62244__$1 = (function (){var statearr_62293 = state_62244;
(statearr_62293[(9)] = inst_62204__$1);

return statearr_62293;
})();
if(inst_62205){
var statearr_62294_67169 = state_62244__$1;
(statearr_62294_67169[(1)] = (23));

} else {
var statearr_62295_67170 = state_62244__$1;
(statearr_62295_67170[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (18))){
var inst_62200 = (state_62244[(2)]);
var state_62244__$1 = state_62244;
var statearr_62296_67171 = state_62244__$1;
(statearr_62296_67171[(2)] = inst_62200);

(statearr_62296_67171[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (37))){
var inst_62238 = cljs.core.async.close_BANG_(ch__53995__auto__);
var state_62244__$1 = state_62244;
var statearr_62297_67172 = state_62244__$1;
(statearr_62297_67172[(2)] = inst_62238);

(statearr_62297_67172[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62245 === (8))){
var inst_62179 = (state_62244[(2)]);
var state_62244__$1 = state_62244;
if(cljs.core.truth_(inst_62179)){
var statearr_62298_67173 = state_62244__$1;
(statearr_62298_67173[(1)] = (9));

} else {
var statearr_62299_67174 = state_62244__$1;
(statearr_62299_67174[(1)] = (10));

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
});})(c__48839__auto___67108,ch__53995__auto__,params,map__62165,map__62165__$1,env,map__62166,map__62166__$1,sym,batch_QMARK_,processing_sequence))
;
return ((function (switch__48139__auto__,c__48839__auto___67108,ch__53995__auto__,params,map__62165,map__62165__$1,env,map__62166,map__62166__$1,sym,batch_QMARK_,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__48140__auto____0 = (function (){
var statearr_62300 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62300[(0)] = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__48140__auto__);

(statearr_62300[(1)] = (1));

return statearr_62300;
});
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__48140__auto____1 = (function (state_62244){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_62244);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e62301){var ex__48143__auto__ = e62301;
var statearr_62302_67188 = state_62244;
(statearr_62302_67188[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_62244[(4)]))){
var statearr_62303_67189 = state_62244;
(statearr_62303_67189[(1)] = cljs.core.first((state_62244[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67190 = state_62244;
state_62244 = G__67190;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__48140__auto__ = function(state_62244){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__48140__auto____1.call(this,state_62244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__48140__auto____0;
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__48140__auto____1;
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto___67108,ch__53995__auto__,params,map__62165,map__62165__$1,env,map__62166,map__62166__$1,sym,batch_QMARK_,processing_sequence))
})();
var state__48841__auto__ = (function (){var statearr_62304 = f__48840__auto__();
(statearr_62304[(6)] = c__48839__auto___67108);

return statearr_62304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto___67108,ch__53995__auto__,params,map__62165,map__62165__$1,env,map__62166,map__62166__$1,sym,batch_QMARK_,processing_sequence))
);


return ch__53995__auto__;
});})(params,map__62165,map__62165__$1,env,map__62166,map__62166__$1,sym,batch_QMARK_,processing_sequence))
);
});
/**
 * Works in the same way `reader2`, but supports async values (core.async channels)
 * on resolver return.
 */
com.wsscode.pathom.connect.async_reader2 = (function com$wsscode$pathom$connect$async_reader2(p__62307){
var map__62308 = p__62307;
var map__62308__$1 = (((((!((map__62308 == null))))?(((((map__62308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62308):map__62308);
var env = map__62308__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62308__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62308__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var temp__5718__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__62310 = temp__5718__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62310,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62310,(1),null);
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,vec__62310,plan,out,temp__5718__auto__,map__62308,map__62308__$1,env,indexes,max_resolver_weight){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,vec__62310,plan,out,temp__5718__auto__,map__62308,map__62308__$1,env,indexes,max_resolver_weight){
return (function (state_62591){
var state_val_62592 = (state_62591[(1)]);
if((state_val_62592 === (65))){
var inst_62496 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
var statearr_62593_67194 = state_62591__$1;
(statearr_62593_67194[(2)] = inst_62496);

(statearr_62593_67194[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (70))){
var inst_62486 = (state_62591[(2)]);
var inst_62487 = com.wsscode.async.async_cljs.consumer_pair(inst_62486);
var state_62591__$1 = state_62591;
var statearr_62594_67195 = state_62591__$1;
(statearr_62594_67195[(2)] = inst_62487);

(statearr_62594_67195[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (62))){
var inst_62498 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
var statearr_62595_67196 = state_62591__$1;
(statearr_62595_67196[(2)] = inst_62498);

(statearr_62595_67196[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (74))){
var inst_62504 = (state_62591[(7)]);
var inst_62509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62504,(0),null);
var inst_62510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62504,(1),null);
var inst_62511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62504,(2),null);
var inst_62334 = inst_62509;
var inst_62335 = inst_62510;
var inst_62336 = inst_62511;
var state_62591__$1 = (function (){var statearr_62596 = state_62591;
(statearr_62596[(8)] = inst_62336);

(statearr_62596[(9)] = inst_62335);

(statearr_62596[(10)] = inst_62334);

return statearr_62596;
})();
var statearr_62597_67200 = state_62591__$1;
(statearr_62597_67200[(2)] = null);

(statearr_62597_67200[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (7))){
var inst_62586 = (state_62591[(2)]);
var _ = (function (){var statearr_62598 = state_62591;
(statearr_62598[(4)] = cljs.core.rest((state_62591[(4)])));

return statearr_62598;
})();
var state_62591__$1 = state_62591;
var statearr_62599_67201 = state_62591__$1;
(statearr_62599_67201[(2)] = inst_62586);

(statearr_62599_67201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (59))){
var inst_62549 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
var statearr_62600_67203 = state_62591__$1;
(statearr_62600_67203[(2)] = inst_62549);

(statearr_62600_67203[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (86))){
var inst_62543 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
var statearr_62601_67204 = state_62591__$1;
(statearr_62601_67204[(2)] = inst_62543);

(statearr_62601_67204[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (20))){
var inst_62320 = (state_62591[(11)]);
var inst_62380 = (state_62591[(12)]);
var inst_62387 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62388 = [inst_62320];
var inst_62389 = (new cljs.core.PersistentVector(null,1,(5),inst_62387,inst_62388,null));
var inst_62390 = cljs.core.select_keys(inst_62380,inst_62389);
var state_62591__$1 = state_62591;
var statearr_62602_67205 = state_62591__$1;
(statearr_62602_67205[(2)] = inst_62390);

(statearr_62602_67205[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (72))){
var state_62591__$1 = state_62591;
var statearr_62604_67206 = state_62591__$1;
(statearr_62604_67206[(2)] = null);

(statearr_62604_67206[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (58))){
var inst_62451 = (state_62591[(13)]);
var inst_62349 = (state_62591[(14)]);
var inst_62455 = (state_62591[(15)]);
var inst_62504 = (state_62591[(7)]);
var inst_62500 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_62501 = [inst_62455,inst_62349];
var inst_62502 = cljs.core.PersistentHashMap.fromArrays(inst_62500,inst_62501);
var inst_62503 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_62502);
var inst_62504__$1 = (inst_62451.cljs$core$IFn$_invoke$arity$1 ? inst_62451.cljs$core$IFn$_invoke$arity$1(inst_62503) : inst_62451.call(null,inst_62503));
var state_62591__$1 = (function (){var statearr_62605 = state_62591;
(statearr_62605[(7)] = inst_62504__$1);

return statearr_62605;
})();
if(cljs.core.truth_(inst_62504__$1)){
var statearr_62606_67210 = state_62591__$1;
(statearr_62606_67210[(1)] = (74));

} else {
var statearr_62607_67211 = state_62591__$1;
(statearr_62607_67211[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (60))){
var inst_62336 = (state_62591[(8)]);
var inst_62343 = (state_62591[(16)]);
var inst_62465 = (state_62591[(17)]);
var inst_62335 = (state_62591[(9)]);
var inst_62472 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_62336,inst_62465);
var tmp62603 = inst_62335;
var inst_62334 = inst_62343;
var inst_62335__$1 = tmp62603;
var inst_62336__$1 = inst_62472;
var state_62591__$1 = (function (){var statearr_62608 = state_62591;
(statearr_62608[(8)] = inst_62336__$1);

(statearr_62608[(9)] = inst_62335__$1);

(statearr_62608[(10)] = inst_62334);

return statearr_62608;
})();
var statearr_62609_67212 = state_62591__$1;
(statearr_62609_67212[(2)] = null);

(statearr_62609_67212[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (27))){
var inst_62393 = (state_62591[(18)]);
var inst_62400 = com.wsscode.async.async_cljs.promise_QMARK_(inst_62393);
var state_62591__$1 = state_62591;
if(cljs.core.truth_(inst_62400)){
var statearr_62610_67213 = state_62591__$1;
(statearr_62610_67213[(1)] = (30));

} else {
var statearr_62611_67214 = state_62591__$1;
(statearr_62611_67214[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (1))){
var state_62591__$1 = state_62591;
var statearr_62612_67215 = state_62591__$1;
(statearr_62612_67215[(2)] = null);

(statearr_62612_67215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (69))){
var inst_62494 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
var statearr_62613_67216 = state_62591__$1;
(statearr_62613_67216[(2)] = inst_62494);

(statearr_62613_67216[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (24))){
var state_62591__$1 = state_62591;
var statearr_62614_67219 = state_62591__$1;
(statearr_62614_67219[(1)] = (37));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (55))){
var state_62591__$1 = state_62591;
var statearr_62616_67221 = state_62591__$1;
(statearr_62616_67221[(1)] = (91));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (85))){
var state_62591__$1 = state_62591;
var statearr_62618_67222 = state_62591__$1;
(statearr_62618_67222[(1)] = (88));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (39))){
var inst_62441 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
var statearr_62620_67223 = state_62591__$1;
(statearr_62620_67223[(2)] = inst_62441);

(statearr_62620_67223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (88))){
var inst_62524 = (state_62591[(19)]);
var state_62591__$1 = state_62591;
var statearr_62621_67224 = state_62591__$1;
(statearr_62621_67224[(2)] = inst_62524);

(statearr_62621_67224[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (46))){
var inst_62436 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
var statearr_62622_67225 = state_62591__$1;
(statearr_62622_67225[(2)] = inst_62436);

(statearr_62622_67225[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (4))){
var inst_62313 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
var statearr_62623_67228 = state_62591__$1;
(statearr_62623_67228[(2)] = inst_62313);

(statearr_62623_67228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (77))){
var inst_62349 = (state_62591[(14)]);
var inst_62455 = (state_62591[(15)]);
var inst_62516 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_62517 = [inst_62455,inst_62349];
var inst_62518 = cljs.core.PersistentHashMap.fromArrays(inst_62516,inst_62517);
var inst_62519 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_62518);
var inst_62520 = (function(){throw inst_62519})();
var state_62591__$1 = state_62591;
var statearr_62624_67232 = state_62591__$1;
(statearr_62624_67232[(2)] = inst_62520);

(statearr_62624_67232[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (95))){
var inst_62320 = (state_62591[(11)]);
var inst_62350 = (state_62591[(20)]);
var inst_62450 = (state_62591[(21)]);
var inst_62379 = (state_62591[(22)]);
var inst_62566 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_62567 = [new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),inst_62320,inst_62350,inst_62450];
var inst_62568 = cljs.core.PersistentHashMap.fromArrays(inst_62566,inst_62567);
var inst_62569 = com.wsscode.pathom.trace.trace(inst_62379,inst_62568);
var inst_62570 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_62571 = [inst_62450];
var inst_62572 = cljs.core.PersistentHashMap.fromArrays(inst_62570,inst_62571);
var inst_62573 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_62572);
var inst_62574 = (function(){throw inst_62573})();
var state_62591__$1 = (function (){var statearr_62625 = state_62591;
(statearr_62625[(23)] = inst_62569);

return statearr_62625;
})();
var statearr_62626_67238 = state_62591__$1;
(statearr_62626_67238[(2)] = inst_62574);

(statearr_62626_67238[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (54))){
var inst_62336 = (state_62591[(8)]);
var inst_62375 = (state_62591[(24)]);
var inst_62320 = (state_62591[(11)]);
var inst_62350 = (state_62591[(20)]);
var inst_62343 = (state_62591[(16)]);
var inst_62450 = (state_62591[(21)]);
var inst_62379 = (state_62591[(22)]);
var inst_62454 = (state_62591[(25)]);
var inst_62330 = (state_62591[(26)]);
var inst_62342 = (state_62591[(27)]);
var inst_62331 = (state_62591[(28)]);
var inst_62380 = (state_62591[(12)]);
var inst_62451 = (state_62591[(13)]);
var inst_62378 = (state_62591[(29)]);
var inst_62384 = (state_62591[(30)]);
var inst_62376 = (state_62591[(31)]);
var inst_62377 = (state_62591[(32)]);
var inst_62349 = (state_62591[(14)]);
var inst_62328 = (state_62591[(33)]);
var inst_62455 = (state_62591[(15)]);
var inst_62381 = (state_62591[(34)]);
var inst_62335 = (state_62591[(9)]);
var inst_62334 = (state_62591[(10)]);
var inst_62454__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_62450,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),inst_62379);
var inst_62455__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_62450,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_62456 = (function (){var input = inst_62377;
var step = inst_62342;
var entity = inst_62380;
var first__62340 = inst_62342;
var key_SINGLEQUOTE_ = inst_62349;
var response = inst_62455__$1;
var cache_QMARK_ = inst_62376;
var out_left = inst_62336;
var key = inst_62320;
var seq__62326 = inst_62331;
var vec__62345 = inst_62342;
var failed_resolvers = inst_62335;
var map__62348 = inst_62375;
var seq__62339 = inst_62343;
var output = inst_62378;
var env__$1 = inst_62379;
var e = inst_62381;
var resolver_sym = inst_62350;
var first__62327 = inst_62330;
var trace_data = inst_62384;
var resolver = inst_62375;
var vec__62325 = inst_62328;
var vec__62338 = inst_62334;
var replan = inst_62451;
var env_SINGLEQUOTE_ = inst_62454__$1;
var tail = inst_62343;
var G__62324 = inst_62334;
return ((function (input,step,entity,first__62340,key_SINGLEQUOTE_,response,cache_QMARK_,out_left,key,seq__62326,vec__62345,failed_resolvers,map__62348,seq__62339,output,env__$1,e,resolver_sym,first__62327,trace_data,resolver,vec__62325,vec__62338,replan,env_SINGLEQUOTE_,tail,G__62324,inst_62336,inst_62375,inst_62320,inst_62350,inst_62343,inst_62450,inst_62379,inst_62454,inst_62330,inst_62342,inst_62331,inst_62380,inst_62451,inst_62378,inst_62384,inst_62376,inst_62377,inst_62349,inst_62328,inst_62455,inst_62381,inst_62335,inst_62334,inst_62454__$1,inst_62455__$1,state_val_62592,c__48839__auto__,vec__62310,plan,out,temp__5718__auto__,map__62308,map__62308__$1,env,indexes,max_resolver_weight){
return (function (p1__62306_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__62306_SHARP_], 0));
});
;})(input,step,entity,first__62340,key_SINGLEQUOTE_,response,cache_QMARK_,out_left,key,seq__62326,vec__62345,failed_resolvers,map__62348,seq__62339,output,env__$1,e,resolver_sym,first__62327,trace_data,resolver,vec__62325,vec__62338,replan,env_SINGLEQUOTE_,tail,G__62324,inst_62336,inst_62375,inst_62320,inst_62350,inst_62343,inst_62450,inst_62379,inst_62454,inst_62330,inst_62342,inst_62331,inst_62380,inst_62451,inst_62378,inst_62384,inst_62376,inst_62377,inst_62349,inst_62328,inst_62455,inst_62381,inst_62335,inst_62334,inst_62454__$1,inst_62455__$1,state_val_62592,c__48839__auto__,vec__62310,plan,out,temp__5718__auto__,map__62308,map__62308__$1,env,indexes,max_resolver_weight))
})();
var inst_62457 = com.wsscode.pathom.core.swap_entity_BANG_(inst_62454__$1,inst_62456);
var inst_62459 = cljs.core.contains_QMARK_(inst_62455__$1,inst_62349);
var inst_62460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62455__$1,inst_62349);
var inst_62461 = (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(inst_62460) : com.wsscode.pathom.core.break_values.call(null,inst_62460));
var inst_62462 = cljs.core.not(inst_62461);
var inst_62463 = ((inst_62459) && (inst_62462));
var state_62591__$1 = (function (){var statearr_62627 = state_62591;
(statearr_62627[(25)] = inst_62454__$1);

(statearr_62627[(15)] = inst_62455__$1);

(statearr_62627[(35)] = inst_62457);

return statearr_62627;
})();
if(cljs.core.truth_(inst_62463)){
var statearr_62628_67257 = state_62591__$1;
(statearr_62628_67257[(1)] = (57));

} else {
var statearr_62629_67258 = state_62591__$1;
(statearr_62629_67258[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (92))){
var state_62591__$1 = state_62591;
var statearr_62630_67260 = state_62591__$1;
(statearr_62630_67260[(2)] = null);

(statearr_62630_67260[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (15))){
var state_62591__$1 = state_62591;
var statearr_62631_67262 = state_62591__$1;
(statearr_62631_67262[(2)] = false);

(statearr_62631_67262[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (48))){
var inst_62417 = (state_62591[(36)]);
var state_62591__$1 = state_62591;
var statearr_62632_67265 = state_62591__$1;
(statearr_62632_67265[(2)] = inst_62417);

(statearr_62632_67265[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (50))){
var inst_62434 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
var statearr_62633_67267 = state_62591__$1;
(statearr_62633_67267[(2)] = inst_62434);

(statearr_62633_67267[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (75))){
var inst_62343 = (state_62591[(16)]);
var inst_62514 = cljs.core.seq(inst_62343);
var state_62591__$1 = state_62591;
if(inst_62514){
var statearr_62634_67270 = state_62591__$1;
(statearr_62634_67270[(1)] = (77));

} else {
var statearr_62635_67272 = state_62591__$1;
(statearr_62635_67272[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (21))){
var inst_62376 = (state_62591[(31)]);
var state_62591__$1 = state_62591;
if(cljs.core.truth_(inst_62376)){
var statearr_62636_67273 = state_62591__$1;
(statearr_62636_67273[(1)] = (23));

} else {
var statearr_62637_67275 = state_62591__$1;
(statearr_62637_67275[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (31))){
var state_62591__$1 = state_62591;
var statearr_62638_67276 = state_62591__$1;
(statearr_62638_67276[(1)] = (34));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (32))){
var inst_62412 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
var statearr_62640_67277 = state_62591__$1;
(statearr_62640_67277[(2)] = inst_62412);

(statearr_62640_67277[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (40))){
var inst_62417 = (state_62591[(36)]);
var state_62591__$1 = state_62591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62591__$1,(43),inst_62417);
} else {
if((state_val_62592 === (91))){
var inst_62450 = (state_62591[(21)]);
var inst_62451 = (state_62591[(13)]);
var inst_62556 = (state_62591[(37)]);
var inst_62552 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_62553 = [inst_62450];
var inst_62554 = cljs.core.PersistentHashMap.fromArrays(inst_62552,inst_62553);
var inst_62555 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_62554);
var inst_62556__$1 = (inst_62451.cljs$core$IFn$_invoke$arity$1 ? inst_62451.cljs$core$IFn$_invoke$arity$1(inst_62555) : inst_62451.call(null,inst_62555));
var state_62591__$1 = (function (){var statearr_62641 = state_62591;
(statearr_62641[(37)] = inst_62556__$1);

return statearr_62641;
})();
if(cljs.core.truth_(inst_62556__$1)){
var statearr_62642_67281 = state_62591__$1;
(statearr_62642_67281[(1)] = (94));

} else {
var statearr_62643_67282 = state_62591__$1;
(statearr_62643_67282[(1)] = (95));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (56))){
var inst_62581 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
var statearr_62644_67284 = state_62591__$1;
(statearr_62644_67284[(2)] = inst_62581);

(statearr_62644_67284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (33))){
var inst_62404 = (state_62591[(2)]);
var inst_62405 = com.wsscode.async.async_cljs.consumer_pair(inst_62404);
var state_62591__$1 = state_62591;
var statearr_62645_67285 = state_62591__$1;
(statearr_62645_67285[(2)] = inst_62405);

(statearr_62645_67285[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (13))){
var inst_62370 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
if(cljs.core.truth_(inst_62370)){
var statearr_62646_67287 = state_62591__$1;
(statearr_62646_67287[(1)] = (17));

} else {
var statearr_62647_67288 = state_62591__$1;
(statearr_62647_67288[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (22))){
var inst_62445 = (state_62591[(38)]);
var inst_62445__$1 = (state_62591[(2)]);
var state_62591__$1 = (function (){var statearr_62648 = state_62591;
(statearr_62648[(38)] = inst_62445__$1);

return statearr_62648;
})();
if(cljs.core.truth_(inst_62445__$1)){
var statearr_62649_67289 = state_62591__$1;
(statearr_62649_67289[(1)] = (51));

} else {
var statearr_62650_67290 = state_62591__$1;
(statearr_62650_67290[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (90))){
var inst_62541 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
var statearr_62651_67291 = state_62591__$1;
(statearr_62651_67291[(2)] = inst_62541);

(statearr_62651_67291[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (36))){
var inst_62410 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
var statearr_62652_67293 = state_62591__$1;
(statearr_62652_67293[(2)] = inst_62410);

(statearr_62652_67293[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (41))){
var inst_62417 = (state_62591[(36)]);
var inst_62424 = com.wsscode.async.async_cljs.promise_QMARK_(inst_62417);
var state_62591__$1 = state_62591;
if(cljs.core.truth_(inst_62424)){
var statearr_62653_67295 = state_62591__$1;
(statearr_62653_67295[(1)] = (44));

} else {
var statearr_62654_67296 = state_62591__$1;
(statearr_62654_67296[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (89))){
var state_62591__$1 = state_62591;
var statearr_62655_67298 = state_62591__$1;
(statearr_62655_67298[(2)] = null);

(statearr_62655_67298[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (43))){
var inst_62421 = (state_62591[(2)]);
var inst_62422 = com.wsscode.async.async_cljs.throw_err(inst_62421);
var state_62591__$1 = state_62591;
var statearr_62656_67299 = state_62591__$1;
(statearr_62656_67299[(2)] = inst_62422);

(statearr_62656_67299[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (61))){
var inst_62454 = (state_62591[(25)]);
var inst_62475 = (state_62591[(39)]);
var inst_62475__$1 = com.wsscode.pathom.core.map_reader(inst_62454);
var inst_62476 = com.wsscode.async.async_cljs.chan_QMARK_(inst_62475__$1);
var state_62591__$1 = (function (){var statearr_62657 = state_62591;
(statearr_62657[(39)] = inst_62475__$1);

return statearr_62657;
})();
if(inst_62476){
var statearr_62658_67300 = state_62591__$1;
(statearr_62658_67300[(1)] = (63));

} else {
var statearr_62659_67301 = state_62591__$1;
(statearr_62659_67301[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (29))){
var inst_62397 = (state_62591[(2)]);
var inst_62398 = com.wsscode.async.async_cljs.throw_err(inst_62397);
var state_62591__$1 = state_62591;
var statearr_62660_67303 = state_62591__$1;
(statearr_62660_67303[(2)] = inst_62398);

(statearr_62660_67303[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (44))){
var inst_62417 = (state_62591[(36)]);
var inst_62426 = com.wsscode.async.async_cljs.promise__GT_chan(inst_62417);
var state_62591__$1 = state_62591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62591__$1,(47),inst_62426);
} else {
if((state_val_62592 === (93))){
var inst_62579 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
var statearr_62661_67310 = state_62591__$1;
(statearr_62661_67310[(2)] = inst_62579);

(statearr_62661_67310[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (6))){
var inst_62342 = (state_62591[(27)]);
var inst_62334 = (state_62591[(10)]);
var inst_62341 = cljs.core.seq(inst_62334);
var inst_62342__$1 = cljs.core.first(inst_62341);
var inst_62343 = cljs.core.next(inst_62341);
var state_62591__$1 = (function (){var statearr_62662 = state_62591;
(statearr_62662[(16)] = inst_62343);

(statearr_62662[(27)] = inst_62342__$1);

return statearr_62662;
})();
if(cljs.core.truth_(inst_62342__$1)){
var statearr_62663_67312 = state_62591__$1;
(statearr_62663_67312[(1)] = (8));

} else {
var statearr_62664_67313 = state_62591__$1;
(statearr_62664_67313[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (28))){
var inst_62414 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
var statearr_62665_67314 = state_62591__$1;
(statearr_62665_67314[(2)] = inst_62414);

(statearr_62665_67314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (64))){
var inst_62475 = (state_62591[(39)]);
var inst_62482 = com.wsscode.async.async_cljs.promise_QMARK_(inst_62475);
var state_62591__$1 = state_62591;
if(cljs.core.truth_(inst_62482)){
var statearr_62666_67316 = state_62591__$1;
(statearr_62666_67316[(1)] = (67));

} else {
var statearr_62667_67317 = state_62591__$1;
(statearr_62667_67317[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (51))){
var inst_62445 = (state_62591[(38)]);
var state_62591__$1 = state_62591;
var statearr_62668_67318 = state_62591__$1;
(statearr_62668_67318[(2)] = inst_62445);

(statearr_62668_67318[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (25))){
var inst_62443 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
var statearr_62669_67319 = state_62591__$1;
(statearr_62669_67319[(2)] = inst_62443);

(statearr_62669_67319[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (34))){
var inst_62393 = (state_62591[(18)]);
var state_62591__$1 = state_62591;
var statearr_62670_67320 = state_62591__$1;
(statearr_62670_67320[(2)] = inst_62393);

(statearr_62670_67320[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (17))){
var inst_62354 = (state_62591[(40)]);
var inst_62372 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_62354);
var state_62591__$1 = state_62591;
var statearr_62671_67327 = state_62591__$1;
(statearr_62671_67327[(2)] = inst_62372);

(statearr_62671_67327[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (3))){
var inst_62589 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62591__$1,inst_62589);
} else {
if((state_val_62592 === (12))){
var state_62591__$1 = state_62591;
var statearr_62672_67330 = state_62591__$1;
(statearr_62672_67330[(2)] = false);

(statearr_62672_67330[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (2))){
var inst_62328 = (state_62591[(33)]);
var _ = (function (){var statearr_62673 = state_62591;
(statearr_62673[(4)] = cljs.core.cons((5),(state_62591[(4)])));

return statearr_62673;
})();
var inst_62319 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_62320 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_62319);
var inst_62328__$1 = plan;
var inst_62329 = cljs.core.seq(inst_62328__$1);
var inst_62330 = cljs.core.first(inst_62329);
var inst_62331 = cljs.core.next(inst_62329);
var inst_62332 = cljs.core.PersistentHashMap.EMPTY;
var inst_62333 = out;
var inst_62334 = inst_62328__$1;
var inst_62335 = inst_62332;
var inst_62336 = inst_62333;
var state_62591__$1 = (function (){var statearr_62674 = state_62591;
(statearr_62674[(8)] = inst_62336);

(statearr_62674[(11)] = inst_62320);

(statearr_62674[(26)] = inst_62330);

(statearr_62674[(28)] = inst_62331);

(statearr_62674[(33)] = inst_62328__$1);

(statearr_62674[(9)] = inst_62335);

(statearr_62674[(10)] = inst_62334);

return statearr_62674;
})();
var statearr_62675_67335 = state_62591__$1;
(statearr_62675_67335[(2)] = null);

(statearr_62675_67335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (66))){
var inst_62479 = (state_62591[(2)]);
var inst_62480 = com.wsscode.async.async_cljs.throw_err(inst_62479);
var state_62591__$1 = state_62591;
var statearr_62676_67336 = state_62591__$1;
(statearr_62676_67336[(2)] = inst_62480);

(statearr_62676_67336[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (23))){
var inst_62379 = (state_62591[(22)]);
var inst_62384 = (state_62591[(30)]);
var inst_62377 = (state_62591[(32)]);
var inst_62393 = (state_62591[(18)]);
var inst_62381 = (state_62591[(34)]);
var inst_62393__$1 = com.wsscode.pathom.connect.async_read_cache_read(inst_62379,inst_62381,inst_62384,inst_62377);
var inst_62394 = com.wsscode.async.async_cljs.chan_QMARK_(inst_62393__$1);
var state_62591__$1 = (function (){var statearr_62677 = state_62591;
(statearr_62677[(18)] = inst_62393__$1);

return statearr_62677;
})();
if(inst_62394){
var statearr_62678_67339 = state_62591__$1;
(statearr_62678_67339[(1)] = (26));

} else {
var statearr_62679_67340 = state_62591__$1;
(statearr_62679_67340[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (47))){
var inst_62428 = (state_62591[(2)]);
var inst_62429 = com.wsscode.async.async_cljs.consumer_pair(inst_62428);
var state_62591__$1 = state_62591;
var statearr_62680_67344 = state_62591__$1;
(statearr_62680_67344[(2)] = inst_62429);

(statearr_62680_67344[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (35))){
var state_62591__$1 = state_62591;
var statearr_62681_67349 = state_62591__$1;
(statearr_62681_67349[(2)] = null);

(statearr_62681_67349[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (82))){
var inst_62545 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
var statearr_62682_67350 = state_62591__$1;
(statearr_62682_67350[(2)] = inst_62545);

(statearr_62682_67350[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (76))){
var inst_62547 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
var statearr_62683_67351 = state_62591__$1;
(statearr_62683_67351[(2)] = inst_62547);

(statearr_62683_67351[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (19))){
var inst_62375 = (state_62591[(24)]);
var inst_62320 = (state_62591[(11)]);
var inst_62350 = (state_62591[(20)]);
var inst_62379 = (state_62591[(22)]);
var inst_62380 = (state_62591[(12)]);
var inst_62377 = (state_62591[(32)]);
var inst_62349 = (state_62591[(14)]);
var inst_62381 = (state_62591[(34)]);
var inst_62375__$1 = (state_62591[(2)]);
var inst_62376 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_62375__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_62377__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62375__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_62378 = com.wsscode.pathom.connect.resolver__GT_output(env,inst_62350);
var inst_62379__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_62375__$1);
var inst_62380__$1 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_62379__$1);
var inst_62381__$1 = cljs.core.select_keys(inst_62380__$1,inst_62377__$1);
var inst_62382 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_62383 = [inst_62320,inst_62350,inst_62381__$1];
var inst_62384 = cljs.core.PersistentHashMap.fromArrays(inst_62382,inst_62383);
var inst_62385 = cljs.core.contains_QMARK_(inst_62380__$1,inst_62349);
var state_62591__$1 = (function (){var statearr_62684 = state_62591;
(statearr_62684[(24)] = inst_62375__$1);

(statearr_62684[(22)] = inst_62379__$1);

(statearr_62684[(12)] = inst_62380__$1);

(statearr_62684[(29)] = inst_62378);

(statearr_62684[(30)] = inst_62384);

(statearr_62684[(31)] = inst_62376);

(statearr_62684[(32)] = inst_62377__$1);

(statearr_62684[(34)] = inst_62381__$1);

return statearr_62684;
})();
if(inst_62385){
var statearr_62685_67358 = state_62591__$1;
(statearr_62685_67358[(1)] = (20));

} else {
var statearr_62686_67359 = state_62591__$1;
(statearr_62686_67359[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (57))){
var inst_62320 = (state_62591[(11)]);
var inst_62350 = (state_62591[(20)]);
var inst_62343 = (state_62591[(16)]);
var inst_62454 = (state_62591[(25)]);
var inst_62378 = (state_62591[(29)]);
var inst_62465 = com.wsscode.pathom.connect.output__GT_provides(inst_62378);
var inst_62466 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_62467 = [new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),inst_62320,inst_62350];
var inst_62468 = cljs.core.PersistentHashMap.fromArrays(inst_62466,inst_62467);
var inst_62469 = com.wsscode.pathom.trace.trace(inst_62454,inst_62468);
var inst_62470 = cljs.core.seq(inst_62343);
var state_62591__$1 = (function (){var statearr_62687 = state_62591;
(statearr_62687[(17)] = inst_62465);

(statearr_62687[(41)] = inst_62469);

return statearr_62687;
})();
if(inst_62470){
var statearr_62688_67362 = state_62591__$1;
(statearr_62688_67362[(1)] = (60));

} else {
var statearr_62689_67363 = state_62591__$1;
(statearr_62689_67363[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (68))){
var state_62591__$1 = state_62591;
var statearr_62690_67366 = state_62591__$1;
(statearr_62690_67366[(1)] = (71));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (11))){
var inst_62354 = (state_62591[(40)]);
var inst_62359 = inst_62354.cljs$lang$protocol_mask$partition0$;
var inst_62360 = (inst_62359 & (64));
var inst_62361 = inst_62354.cljs$core$ISeq$;
var inst_62362 = (cljs.core.PROTOCOL_SENTINEL === inst_62361);
var inst_62363 = ((inst_62360) || (inst_62362));
var state_62591__$1 = state_62591;
if(cljs.core.truth_(inst_62363)){
var statearr_62693_67370 = state_62591__$1;
(statearr_62693_67370[(1)] = (14));

} else {
var statearr_62694_67372 = state_62591__$1;
(statearr_62694_67372[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (9))){
var state_62591__$1 = state_62591;
var statearr_62695_67373 = state_62591__$1;
(statearr_62695_67373[(2)] = null);

(statearr_62695_67373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (5))){
var _ = (function (){var statearr_62696 = state_62591;
(statearr_62696[(4)] = cljs.core.rest((state_62591[(4)])));

return statearr_62696;
})();
var state_62591__$1 = state_62591;
var ex62692 = (state_62591__$1[(2)]);
var statearr_62697_67379 = state_62591__$1;
(statearr_62697_67379[(5)] = ex62692);


var statearr_62698_67381 = state_62591__$1;
(statearr_62698_67381[(1)] = (4));

(statearr_62698_67381[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (83))){
var inst_62528 = (state_62591[(2)]);
var inst_62529 = com.wsscode.async.async_cljs.throw_err(inst_62528);
var state_62591__$1 = state_62591;
var statearr_62699_67382 = state_62591__$1;
(statearr_62699_67382[(2)] = inst_62529);

(statearr_62699_67382[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (14))){
var state_62591__$1 = state_62591;
var statearr_62700_67384 = state_62591__$1;
(statearr_62700_67384[(2)] = true);

(statearr_62700_67384[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (45))){
var state_62591__$1 = state_62591;
var statearr_62701_67387 = state_62591__$1;
(statearr_62701_67387[(1)] = (48));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (53))){
var inst_62336 = (state_62591[(8)]);
var inst_62375 = (state_62591[(24)]);
var inst_62320 = (state_62591[(11)]);
var inst_62350 = (state_62591[(20)]);
var inst_62343 = (state_62591[(16)]);
var inst_62450 = (state_62591[(21)]);
var inst_62379 = (state_62591[(22)]);
var inst_62330 = (state_62591[(26)]);
var inst_62342 = (state_62591[(27)]);
var inst_62331 = (state_62591[(28)]);
var inst_62380 = (state_62591[(12)]);
var inst_62378 = (state_62591[(29)]);
var inst_62384 = (state_62591[(30)]);
var inst_62376 = (state_62591[(31)]);
var inst_62377 = (state_62591[(32)]);
var inst_62349 = (state_62591[(14)]);
var inst_62328 = (state_62591[(33)]);
var inst_62381 = (state_62591[(34)]);
var inst_62335 = (state_62591[(9)]);
var inst_62334 = (state_62591[(10)]);
var inst_62450__$1 = (state_62591[(2)]);
var inst_62451 = (function (){var input = inst_62377;
var step = inst_62342;
var entity = inst_62380;
var first__62340 = inst_62342;
var key_SINGLEQUOTE_ = inst_62349;
var response = inst_62450__$1;
var cache_QMARK_ = inst_62376;
var out_left = inst_62336;
var key = inst_62320;
var seq__62326 = inst_62331;
var vec__62345 = inst_62342;
var failed_resolvers = inst_62335;
var map__62348 = inst_62375;
var seq__62339 = inst_62343;
var output = inst_62378;
var env__$1 = inst_62379;
var e = inst_62381;
var resolver_sym = inst_62350;
var first__62327 = inst_62330;
var trace_data = inst_62384;
var resolver = inst_62375;
var vec__62325 = inst_62328;
var vec__62338 = inst_62334;
var tail = inst_62343;
var G__62324 = inst_62334;
return ((function (input,step,entity,first__62340,key_SINGLEQUOTE_,response,cache_QMARK_,out_left,key,seq__62326,vec__62345,failed_resolvers,map__62348,seq__62339,output,env__$1,e,resolver_sym,first__62327,trace_data,resolver,vec__62325,vec__62338,tail,G__62324,inst_62336,inst_62375,inst_62320,inst_62350,inst_62343,inst_62450,inst_62379,inst_62330,inst_62342,inst_62331,inst_62380,inst_62378,inst_62384,inst_62376,inst_62377,inst_62349,inst_62328,inst_62381,inst_62335,inst_62334,inst_62450__$1,state_val_62592,c__48839__auto__,vec__62310,plan,out,temp__5718__auto__,map__62308,map__62308__$1,env,indexes,max_resolver_weight){
return (function (error){
var failed_resolvers__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers,resolver_sym,error);
com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$1,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (failed_resolvers__$1,input,step,entity,first__62340,key_SINGLEQUOTE_,response,cache_QMARK_,out_left,key,seq__62326,vec__62345,failed_resolvers,map__62348,seq__62339,output,env__$1,e,resolver_sym,first__62327,trace_data,resolver,vec__62325,vec__62338,tail,G__62324,inst_62336,inst_62375,inst_62320,inst_62350,inst_62343,inst_62450,inst_62379,inst_62330,inst_62342,inst_62331,inst_62380,inst_62378,inst_62384,inst_62376,inst_62377,inst_62349,inst_62328,inst_62381,inst_62335,inst_62334,inst_62450__$1,state_val_62592,c__48839__auto__,vec__62310,plan,out,temp__5718__auto__,map__62308,map__62308__$1,env,indexes,max_resolver_weight){
return (function (p1__62305_SHARP_){
var x__4222__auto__ = ((function (){var or__4131__auto__ = p1__62305_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() * (2));
var y__4223__auto__ = max_resolver_weight;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});})(failed_resolvers__$1,input,step,entity,first__62340,key_SINGLEQUOTE_,response,cache_QMARK_,out_left,key,seq__62326,vec__62345,failed_resolvers,map__62348,seq__62339,output,env__$1,e,resolver_sym,first__62327,trace_data,resolver,vec__62325,vec__62338,tail,G__62324,inst_62336,inst_62375,inst_62320,inst_62350,inst_62343,inst_62450,inst_62379,inst_62330,inst_62342,inst_62331,inst_62380,inst_62378,inst_62384,inst_62376,inst_62377,inst_62349,inst_62328,inst_62381,inst_62335,inst_62334,inst_62450__$1,state_val_62592,c__48839__auto__,vec__62310,plan,out,temp__5718__auto__,map__62308,map__62308__$1,env,indexes,max_resolver_weight))
], 0));

var temp__5718__auto____$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$1,failed_resolvers__$1);
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__62703 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62703,(0),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62703,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan__$1,failed_resolvers__$1,out_SINGLEQUOTE_], null);
} else {
return null;
}
});
;})(input,step,entity,first__62340,key_SINGLEQUOTE_,response,cache_QMARK_,out_left,key,seq__62326,vec__62345,failed_resolvers,map__62348,seq__62339,output,env__$1,e,resolver_sym,first__62327,trace_data,resolver,vec__62325,vec__62338,tail,G__62324,inst_62336,inst_62375,inst_62320,inst_62350,inst_62343,inst_62450,inst_62379,inst_62330,inst_62342,inst_62331,inst_62380,inst_62378,inst_62384,inst_62376,inst_62377,inst_62349,inst_62328,inst_62381,inst_62335,inst_62334,inst_62450__$1,state_val_62592,c__48839__auto__,vec__62310,plan,out,temp__5718__auto__,map__62308,map__62308__$1,env,indexes,max_resolver_weight))
})();
var inst_62452 = cljs.core.map_QMARK_(inst_62450__$1);
var state_62591__$1 = (function (){var statearr_62706 = state_62591;
(statearr_62706[(21)] = inst_62450__$1);

(statearr_62706[(13)] = inst_62451);

return statearr_62706;
})();
if(inst_62452){
var statearr_62707_67401 = state_62591__$1;
(statearr_62707_67401[(1)] = (54));

} else {
var statearr_62708_67402 = state_62591__$1;
(statearr_62708_67402[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (78))){
var state_62591__$1 = state_62591;
var statearr_62709_67404 = state_62591__$1;
(statearr_62709_67404[(2)] = null);

(statearr_62709_67404[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (26))){
var inst_62393 = (state_62591[(18)]);
var state_62591__$1 = state_62591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62591__$1,(29),inst_62393);
} else {
if((state_val_62592 === (16))){
var inst_62367 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
var statearr_62710_67412 = state_62591__$1;
(statearr_62710_67412[(2)] = inst_62367);

(statearr_62710_67412[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (81))){
var inst_62524 = (state_62591[(19)]);
var inst_62531 = com.wsscode.async.async_cljs.promise_QMARK_(inst_62524);
var state_62591__$1 = state_62591;
if(cljs.core.truth_(inst_62531)){
var statearr_62711_67417 = state_62591__$1;
(statearr_62711_67417[(1)] = (84));

} else {
var statearr_62712_67418 = state_62591__$1;
(statearr_62712_67418[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (79))){
var inst_62524 = (state_62591[(19)]);
var inst_62454 = (state_62591[(25)]);
var inst_62523 = (state_62591[(2)]);
var inst_62524__$1 = com.wsscode.pathom.core.map_reader(inst_62454);
var inst_62525 = com.wsscode.async.async_cljs.chan_QMARK_(inst_62524__$1);
var state_62591__$1 = (function (){var statearr_62713 = state_62591;
(statearr_62713[(42)] = inst_62523);

(statearr_62713[(19)] = inst_62524__$1);

return statearr_62713;
})();
if(inst_62525){
var statearr_62714_67419 = state_62591__$1;
(statearr_62714_67419[(1)] = (80));

} else {
var statearr_62715_67421 = state_62591__$1;
(statearr_62715_67421[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (38))){
var state_62591__$1 = state_62591;
var statearr_62716_67424 = state_62591__$1;
(statearr_62716_67424[(2)] = null);

(statearr_62716_67424[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (87))){
var inst_62535 = (state_62591[(2)]);
var inst_62536 = com.wsscode.async.async_cljs.consumer_pair(inst_62535);
var state_62591__$1 = state_62591;
var statearr_62717_67426 = state_62591__$1;
(statearr_62717_67426[(2)] = inst_62536);

(statearr_62717_67426[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (30))){
var inst_62393 = (state_62591[(18)]);
var inst_62402 = com.wsscode.async.async_cljs.promise__GT_chan(inst_62393);
var state_62591__$1 = state_62591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62591__$1,(33),inst_62402);
} else {
if((state_val_62592 === (73))){
var inst_62492 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
var statearr_62718_67429 = state_62591__$1;
(statearr_62718_67429[(2)] = inst_62492);

(statearr_62718_67429[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (96))){
var inst_62576 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
var statearr_62719_67430 = state_62591__$1;
(statearr_62719_67430[(2)] = inst_62576);

(statearr_62719_67430[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (10))){
var inst_62584 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
var statearr_62720_67432 = state_62591__$1;
(statearr_62720_67432[(2)] = inst_62584);

(statearr_62720_67432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (18))){
var inst_62354 = (state_62591[(40)]);
var state_62591__$1 = state_62591;
var statearr_62721_67435 = state_62591__$1;
(statearr_62721_67435[(2)] = inst_62354);

(statearr_62721_67435[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (52))){
var inst_62448 = cljs.core.PersistentHashMap.EMPTY;
var state_62591__$1 = state_62591;
var statearr_62722_67436 = state_62591__$1;
(statearr_62722_67436[(2)] = inst_62448);

(statearr_62722_67436[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (67))){
var inst_62475 = (state_62591[(39)]);
var inst_62484 = com.wsscode.async.async_cljs.promise__GT_chan(inst_62475);
var state_62591__$1 = state_62591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62591__$1,(70),inst_62484);
} else {
if((state_val_62592 === (71))){
var inst_62475 = (state_62591[(39)]);
var state_62591__$1 = state_62591;
var statearr_62723_67438 = state_62591__$1;
(statearr_62723_67438[(2)] = inst_62475);

(statearr_62723_67438[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (42))){
var inst_62438 = (state_62591[(2)]);
var state_62591__$1 = state_62591;
var statearr_62724_67439 = state_62591__$1;
(statearr_62724_67439[(2)] = inst_62438);

(statearr_62724_67439[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (80))){
var inst_62524 = (state_62591[(19)]);
var state_62591__$1 = state_62591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62591__$1,(83),inst_62524);
} else {
if((state_val_62592 === (37))){
var inst_62379 = (state_62591[(22)]);
var inst_62381 = (state_62591[(34)]);
var inst_62417 = (state_62591[(36)]);
var inst_62417__$1 = com.wsscode.pathom.connect.call_resolver(inst_62379,inst_62381);
var inst_62418 = com.wsscode.async.async_cljs.chan_QMARK_(inst_62417__$1);
var state_62591__$1 = (function (){var statearr_62725 = state_62591;
(statearr_62725[(36)] = inst_62417__$1);

return statearr_62725;
})();
if(inst_62418){
var statearr_62726_67442 = state_62591__$1;
(statearr_62726_67442[(1)] = (40));

} else {
var statearr_62727_67443 = state_62591__$1;
(statearr_62727_67443[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (63))){
var inst_62475 = (state_62591[(39)]);
var state_62591__$1 = state_62591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62591__$1,(66),inst_62475);
} else {
if((state_val_62592 === (94))){
var inst_62556 = (state_62591[(37)]);
var inst_62561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62556,(0),null);
var inst_62562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62556,(1),null);
var inst_62563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62556,(2),null);
var inst_62334 = inst_62561;
var inst_62335 = inst_62562;
var inst_62336 = inst_62563;
var state_62591__$1 = (function (){var statearr_62728 = state_62591;
(statearr_62728[(8)] = inst_62336);

(statearr_62728[(9)] = inst_62335);

(statearr_62728[(10)] = inst_62334);

return statearr_62728;
})();
var statearr_62729_67446 = state_62591__$1;
(statearr_62729_67446[(2)] = null);

(statearr_62729_67446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (8))){
var inst_62350 = (state_62591[(20)]);
var inst_62342 = (state_62591[(27)]);
var inst_62354 = (state_62591[(40)]);
var inst_62349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62342,(0),null);
var inst_62350__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62342,(1),null);
var inst_62351 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62352 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),inst_62350__$1];
var inst_62353 = (new cljs.core.PersistentVector(null,2,(5),inst_62351,inst_62352,null));
var inst_62354__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_62353);
var inst_62356 = (inst_62354__$1 == null);
var inst_62357 = cljs.core.not(inst_62356);
var state_62591__$1 = (function (){var statearr_62730 = state_62591;
(statearr_62730[(20)] = inst_62350__$1);

(statearr_62730[(14)] = inst_62349);

(statearr_62730[(40)] = inst_62354__$1);

return statearr_62730;
})();
if(inst_62357){
var statearr_62731_67448 = state_62591__$1;
(statearr_62731_67448[(1)] = (11));

} else {
var statearr_62732_67450 = state_62591__$1;
(statearr_62732_67450[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (49))){
var state_62591__$1 = state_62591;
var statearr_62733_67451 = state_62591__$1;
(statearr_62733_67451[(2)] = null);

(statearr_62733_67451[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62592 === (84))){
var inst_62524 = (state_62591[(19)]);
var inst_62533 = com.wsscode.async.async_cljs.promise__GT_chan(inst_62524);
var state_62591__$1 = state_62591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62591__$1,(87),inst_62533);
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
});})(c__48839__auto__,vec__62310,plan,out,temp__5718__auto__,map__62308,map__62308__$1,env,indexes,max_resolver_weight))
;
return ((function (switch__48139__auto__,c__48839__auto__,vec__62310,plan,out,temp__5718__auto__,map__62308,map__62308__$1,env,indexes,max_resolver_weight){
return (function() {
var com$wsscode$pathom$connect$async_reader2_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$connect$async_reader2_$_state_machine__48140__auto____0 = (function (){
var statearr_62734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62734[(0)] = com$wsscode$pathom$connect$async_reader2_$_state_machine__48140__auto__);

(statearr_62734[(1)] = (1));

return statearr_62734;
});
var com$wsscode$pathom$connect$async_reader2_$_state_machine__48140__auto____1 = (function (state_62591){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_62591);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e62735){var ex__48143__auto__ = e62735;
var statearr_62736_67458 = state_62591;
(statearr_62736_67458[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_62591[(4)]))){
var statearr_62737_67459 = state_62591;
(statearr_62737_67459[(1)] = cljs.core.first((state_62591[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67460 = state_62591;
state_62591 = G__67460;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader2_$_state_machine__48140__auto__ = function(state_62591){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader2_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader2_$_state_machine__48140__auto____1.call(this,state_62591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader2_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader2_$_state_machine__48140__auto____0;
com$wsscode$pathom$connect$async_reader2_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader2_$_state_machine__48140__auto____1;
return com$wsscode$pathom$connect$async_reader2_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,vec__62310,plan,out,temp__5718__auto__,map__62308,map__62308__$1,env,indexes,max_resolver_weight))
})();
var state__48841__auto__ = (function (){var statearr_62738 = f__48840__auto__();
(statearr_62738[(6)] = c__48839__auto__);

return statearr_62738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,vec__62310,plan,out,temp__5718__auto__,map__62308,map__62308__$1,env,indexes,max_resolver_weight))
);

return c__48839__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.reader3_node_log_BANG_ = (function com$wsscode$pathom$connect$reader3_node_log_BANG_(p__62739,p__62740,event){
var map__62741 = p__62739;
var map__62741__$1 = (((((!((map__62741 == null))))?(((((map__62741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62741):map__62741);
var env = map__62741__$1;
var run_plan_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62741__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","run-plan*","com.wsscode.pathom.connect/run-plan*",-2140918000));
var map__62742 = p__62740;
var map__62742__$1 = (((((!((map__62742 == null))))?(((((map__62742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62742):map__62742);
var node_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62742__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","node-id","com.wsscode.pathom.connect.planner/node-id",1016027450));
if(cljs.core.truth_(run_plan_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(run_plan_STAR_,com.wsscode.pathom.connect.planner.add_node_log,node_id,event);
} else {
}

return env;
});
com.wsscode.pathom.connect.reader3_run_next_node = (function com$wsscode$pathom$connect$reader3_run_next_node(env,plan,p__62745){
var map__62746 = p__62745;
var map__62746__$1 = (((((!((map__62746 == null))))?(((((map__62746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62746):map__62746);
var run_next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62746__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-next","com.wsscode.pathom.connect.planner/run-next",932482163));
if(cljs.core.truth_(run_next)){
var G__62748 = env;
var G__62749 = plan;
var G__62750 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,run_next);
return (com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(G__62748,G__62749,G__62750) : com.wsscode.pathom.connect.reader3_run_node.call(null,G__62748,G__62749,G__62750));
} else {
return null;
}
});
com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_ = (function com$wsscode$pathom$connect$reader3_all_requires_ready_QMARK_(env,p__62752){
var map__62753 = p__62752;
var map__62753__$1 = (((((!((map__62753 == null))))?(((((map__62753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62753):map__62753);
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62753__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","requires","com.wsscode.pathom.connect.planner/requires",-2118404289));
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
return cljs.core.every_QMARK_(((function (entity,map__62753,map__62753__$1,requires){
return (function (p1__62751_SHARP_){
return cljs.core.contains_QMARK_(entity,p1__62751_SHARP_);
});})(entity,map__62753,map__62753__$1,requires))
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
return (function (p1__62755_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$1,p1__62755_SHARP_], 0));
});})(env_SINGLEQUOTE_,response__$1))
);
} else {
return com.wsscode.pathom.connect.reader3_report_invalid_response(env,sym,response);
}
});
/**
 * Call a run graph node resolver and execute it.
 */
com.wsscode.pathom.connect.reader3_run_resolver_node = (function com$wsscode$pathom$connect$reader3_run_resolver_node(p__62756,plan,p__62757){
var map__62758 = p__62756;
var map__62758__$1 = (((((!((map__62758 == null))))?(((((map__62758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62758):map__62758);
var env = map__62758__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62758__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var async_parser_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62758__$1,new cljs.core.Keyword("com.wsscode.pathom.core","async-parser?","com.wsscode.pathom.core/async-parser?",920199905));
var map__62759 = p__62757;
var map__62759__$1 = (((((!((map__62759 == null))))?(((((map__62759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62759):map__62759);
var node = map__62759__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62759__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62759__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","input","com.wsscode.pathom.connect.planner/input",713704915));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62759__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","params","com.wsscode.pathom.connect.planner/params",600636577));
if(com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_(env,node)){
com.wsscode.pathom.connect.reader3_node_log_BANG_(env,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","skip-node-requires-ready","com.wsscode.pathom.connect/skip-node-requires-ready",-1999300692)], null));

return com.wsscode.pathom.connect.reader3_run_next_node(env,plan,node);
} else {
var input_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(input));
var map__62762 = (function (){var G__62763 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),sym], null));
if(cljs.core.seq(input)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__62763,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),input_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect.planner","input","com.wsscode.pathom.connect.planner/input",713704915),input], 0));
} else {
return G__62763;
}
})();
var map__62762__$1 = (((((!((map__62762 == null))))?(((((map__62762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62762):map__62762);
var resolver = map__62762__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62762__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var env__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect.planner","node","com.wsscode.pathom.connect.planner/node",754110552),node], 0)),new cljs.core.Keyword(null,"ast","ast",-860334068),cljs.core.assoc,new cljs.core.Keyword(null,"params","params",710516235),params);
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env__$1);
var e = cljs.core.select_keys(entity,input_SINGLEQUOTE_);
var trace_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),e], null);
var response = (cljs.core.truth_(cache_QMARK_)?(cljs.core.truth_(async_parser_QMARK_)?com.wsscode.pathom.connect.async_read_cache_read(env__$1,e,trace_data,input_SINGLEQUOTE_):(function (){try{var r = com.wsscode.pathom.connect.serial_cache_resolver_call(env__$1,e);
com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-success","com.wsscode.pathom.connect/node-resolver-success",1463092150),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),e,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-response","com.wsscode.pathom.connect/resolver-response",480860817),r], null));

return r;
}catch (e62765){var err = e62765;
com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-error","com.wsscode.pathom.connect/node-resolver-error",-305161287),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),e,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416),err], null));

throw err;
}})()):(function (){try{var r = com.wsscode.pathom.connect.call_resolver(env__$1,e);
com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-success","com.wsscode.pathom.connect/node-resolver-success",1463092150),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),e,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-response","com.wsscode.pathom.connect/resolver-response",480860817),r], null));

return r;
}catch (e62766){var err = e62766;
com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-error","com.wsscode.pathom.connect/node-resolver-error",-305161287),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),e,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416),err], null));

throw err;
}})());
if(cljs.core.truth_(async_parser_QMARK_)){
var ch__53995__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__48839__auto___67537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto___67537,ch__53995__auto__,input_SINGLEQUOTE_,map__62762,map__62762__$1,resolver,cache_QMARK_,env__$1,entity,e,trace_data,response,map__62758,map__62758__$1,env,indexes,async_parser_QMARK_,map__62759,map__62759__$1,node,sym,input,params){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto___67537,ch__53995__auto__,input_SINGLEQUOTE_,map__62762,map__62762__$1,resolver,cache_QMARK_,env__$1,entity,e,trace_data,response,map__62758,map__62758__$1,env,indexes,async_parser_QMARK_,map__62759,map__62759__$1,node,sym,input,params){
return (function (state_62851){
var state_val_62852 = (state_62851[(1)]);
if((state_val_62852 === (7))){
var inst_62812 = (state_62851[(2)]);
var inst_62813 = com.wsscode.pathom.connect.reader3_merge_resolver_response(env__$1,sym,inst_62812);
var state_62851__$1 = state_62851;
if(cljs.core.truth_(inst_62813)){
var statearr_62853_67544 = state_62851__$1;
(statearr_62853_67544[(1)] = (21));

} else {
var statearr_62854_67546 = state_62851__$1;
(statearr_62854_67546[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (20))){
var inst_62801 = (state_62851[(2)]);
var state_62851__$1 = state_62851;
var statearr_62855_67549 = state_62851__$1;
(statearr_62855_67549[(2)] = inst_62801);

(statearr_62855_67549[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (27))){
var inst_62819 = (state_62851[(2)]);
var inst_62820 = com.wsscode.async.async_cljs.throw_err(inst_62819);
var state_62851__$1 = state_62851;
var statearr_62856_67552 = state_62851__$1;
(statearr_62856_67552[(2)] = inst_62820);

(statearr_62856_67552[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (1))){
var state_62851__$1 = state_62851;
var statearr_62857_67556 = state_62851__$1;
(statearr_62857_67556[(2)] = null);

(statearr_62857_67556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (24))){
var inst_62815 = (state_62851[(7)]);
var state_62851__$1 = state_62851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62851__$1,(27),inst_62815);
} else {
if((state_val_62852 === (4))){
var inst_62767 = (state_62851[(2)]);
var state_62851__$1 = state_62851;
var statearr_62858_67559 = state_62851__$1;
(statearr_62858_67559[(2)] = inst_62767);

(statearr_62858_67559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (15))){
var state_62851__$1 = state_62851;
var statearr_62859_67562 = state_62851__$1;
(statearr_62859_67562[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (21))){
var inst_62815 = (state_62851[(7)]);
var inst_62815__$1 = com.wsscode.pathom.connect.reader3_run_next_node(env__$1,plan,node);
var inst_62816 = com.wsscode.async.async_cljs.chan_QMARK_(inst_62815__$1);
var state_62851__$1 = (function (){var statearr_62861 = state_62851;
(statearr_62861[(7)] = inst_62815__$1);

return statearr_62861;
})();
if(inst_62816){
var statearr_62862_67567 = state_62851__$1;
(statearr_62862_67567[(1)] = (24));

} else {
var statearr_62863_67568 = state_62851__$1;
(statearr_62863_67568[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (31))){
var inst_62826 = (state_62851[(2)]);
var inst_62827 = com.wsscode.async.async_cljs.consumer_pair(inst_62826);
var state_62851__$1 = state_62851;
var statearr_62864_67571 = state_62851__$1;
(statearr_62864_67571[(2)] = inst_62827);

(statearr_62864_67571[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (32))){
var inst_62815 = (state_62851[(7)]);
var state_62851__$1 = state_62851;
var statearr_62865_67573 = state_62851__$1;
(statearr_62865_67573[(2)] = inst_62815);

(statearr_62865_67573[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (33))){
var state_62851__$1 = state_62851;
var statearr_62866_67574 = state_62851__$1;
(statearr_62866_67574[(2)] = null);

(statearr_62866_67574[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (13))){
var inst_62788 = (state_62851[(2)]);
var inst_62789 = com.wsscode.async.async_cljs.throw_err(inst_62788);
var state_62851__$1 = state_62851;
var statearr_62867_67575 = state_62851__$1;
(statearr_62867_67575[(2)] = inst_62789);

(statearr_62867_67575[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (22))){
var state_62851__$1 = state_62851;
var statearr_62868_67576 = state_62851__$1;
(statearr_62868_67576[(2)] = null);

(statearr_62868_67576[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (36))){
var inst_62842 = (state_62851[(8)]);
var inst_62847 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53995__auto__,inst_62842);
var state_62851__$1 = state_62851;
var statearr_62869_67580 = state_62851__$1;
(statearr_62869_67580[(2)] = inst_62847);

(statearr_62869_67580[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (29))){
var state_62851__$1 = state_62851;
var statearr_62870_67581 = state_62851__$1;
(statearr_62870_67581[(1)] = (32));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (6))){
var inst_62784 = (state_62851[(9)]);
var _ = (function (){var statearr_62872 = state_62851;
(statearr_62872[(4)] = cljs.core.cons((9),(state_62851[(4)])));

return statearr_62872;
})();
var inst_62784__$1 = response;
var inst_62785 = com.wsscode.async.async_cljs.chan_QMARK_(inst_62784__$1);
var state_62851__$1 = (function (){var statearr_62873 = state_62851;
(statearr_62873[(9)] = inst_62784__$1);

return statearr_62873;
})();
if(inst_62785){
var statearr_62874_67582 = state_62851__$1;
(statearr_62874_67582[(1)] = (10));

} else {
var statearr_62875_67583 = state_62851__$1;
(statearr_62875_67583[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (28))){
var inst_62815 = (state_62851[(7)]);
var inst_62824 = com.wsscode.async.async_cljs.promise__GT_chan(inst_62815);
var state_62851__$1 = state_62851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62851__$1,(31),inst_62824);
} else {
if((state_val_62852 === (25))){
var inst_62815 = (state_62851[(7)]);
var inst_62822 = com.wsscode.async.async_cljs.promise_QMARK_(inst_62815);
var state_62851__$1 = state_62851;
if(cljs.core.truth_(inst_62822)){
var statearr_62876_67587 = state_62851__$1;
(statearr_62876_67587[(1)] = (28));

} else {
var statearr_62877_67591 = state_62851__$1;
(statearr_62877_67591[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (34))){
var inst_62832 = (state_62851[(2)]);
var state_62851__$1 = state_62851;
var statearr_62878_67593 = state_62851__$1;
(statearr_62878_67593[(2)] = inst_62832);

(statearr_62878_67593[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (17))){
var inst_62795 = (state_62851[(2)]);
var inst_62796 = com.wsscode.async.async_cljs.consumer_pair(inst_62795);
var state_62851__$1 = state_62851;
var statearr_62879_67597 = state_62851__$1;
(statearr_62879_67597[(2)] = inst_62796);

(statearr_62879_67597[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (3))){
var inst_62842 = (state_62851[(8)]);
var inst_62842__$1 = (state_62851[(2)]);
var inst_62843 = (inst_62842__$1 == null);
var state_62851__$1 = (function (){var statearr_62880 = state_62851;
(statearr_62880[(8)] = inst_62842__$1);

return statearr_62880;
})();
if(cljs.core.truth_(inst_62843)){
var statearr_62881_67598 = state_62851__$1;
(statearr_62881_67598[(1)] = (35));

} else {
var statearr_62882_67599 = state_62851__$1;
(statearr_62882_67599[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (12))){
var inst_62805 = (state_62851[(2)]);
var inst_62806 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-response","com.wsscode.pathom.connect/resolver-response",480860817)];
var inst_62807 = [new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-success","com.wsscode.pathom.connect/node-resolver-success",1463092150),e,inst_62805];
var inst_62808 = cljs.core.PersistentHashMap.fromArrays(inst_62806,inst_62807);
var inst_62809 = com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,inst_62808);
var _ = (function (){var statearr_62883 = state_62851;
(statearr_62883[(4)] = cljs.core.rest((state_62851[(4)])));

return statearr_62883;
})();
var state_62851__$1 = (function (){var statearr_62884 = state_62851;
(statearr_62884[(10)] = inst_62809);

return statearr_62884;
})();
var statearr_62885_67604 = state_62851__$1;
(statearr_62885_67604[(2)] = inst_62805);

(statearr_62885_67604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (2))){
var _ = (function (){var statearr_62886 = state_62851;
(statearr_62886[(4)] = cljs.core.cons((5),(state_62851[(4)])));

return statearr_62886;
})();
var state_62851__$1 = state_62851;
var statearr_62887_67605 = state_62851__$1;
(statearr_62887_67605[(2)] = null);

(statearr_62887_67605[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (23))){
var inst_62839 = (state_62851[(2)]);
var _ = (function (){var statearr_62888 = state_62851;
(statearr_62888[(4)] = cljs.core.rest((state_62851[(4)])));

return statearr_62888;
})();
var state_62851__$1 = state_62851;
var statearr_62889_67606 = state_62851__$1;
(statearr_62889_67606[(2)] = inst_62839);

(statearr_62889_67606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (35))){
var inst_62845 = cljs.core.async.close_BANG_(ch__53995__auto__);
var state_62851__$1 = state_62851;
var statearr_62890_67607 = state_62851__$1;
(statearr_62890_67607[(2)] = inst_62845);

(statearr_62890_67607[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (19))){
var state_62851__$1 = state_62851;
var statearr_62892_67608 = state_62851__$1;
(statearr_62892_67608[(2)] = null);

(statearr_62892_67608[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (11))){
var inst_62784 = (state_62851[(9)]);
var inst_62791 = com.wsscode.async.async_cljs.promise_QMARK_(inst_62784);
var state_62851__$1 = state_62851;
if(cljs.core.truth_(inst_62791)){
var statearr_62894_67610 = state_62851__$1;
(statearr_62894_67610[(1)] = (14));

} else {
var statearr_62895_67612 = state_62851__$1;
(statearr_62895_67612[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (9))){
var _ = (function (){var statearr_62896 = state_62851;
(statearr_62896[(4)] = cljs.core.rest((state_62851[(4)])));

return statearr_62896;
})();
var state_62851__$1 = state_62851;
var ex62891 = (state_62851__$1[(2)]);
var statearr_62897_67616 = state_62851__$1;
(statearr_62897_67616[(5)] = ex62891);


var statearr_62898_67617 = state_62851__$1;
(statearr_62898_67617[(1)] = (8));

(statearr_62898_67617[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (5))){
var _ = (function (){var statearr_62899 = state_62851;
(statearr_62899[(4)] = cljs.core.rest((state_62851[(4)])));

return statearr_62899;
})();
var state_62851__$1 = state_62851;
var ex62893 = (state_62851__$1[(2)]);
var statearr_62900_67620 = state_62851__$1;
(statearr_62900_67620[(5)] = ex62893);


var statearr_62901_67622 = state_62851__$1;
(statearr_62901_67622[(1)] = (4));

(statearr_62901_67622[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (14))){
var inst_62784 = (state_62851[(9)]);
var inst_62793 = com.wsscode.async.async_cljs.promise__GT_chan(inst_62784);
var state_62851__$1 = state_62851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62851__$1,(17),inst_62793);
} else {
if((state_val_62852 === (26))){
var inst_62836 = (state_62851[(2)]);
var state_62851__$1 = state_62851;
var statearr_62902_67623 = state_62851__$1;
(statearr_62902_67623[(2)] = inst_62836);

(statearr_62902_67623[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (16))){
var inst_62803 = (state_62851[(2)]);
var state_62851__$1 = state_62851;
var statearr_62903_67624 = state_62851__$1;
(statearr_62903_67624[(2)] = inst_62803);

(statearr_62903_67624[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (30))){
var inst_62834 = (state_62851[(2)]);
var state_62851__$1 = state_62851;
var statearr_62904_67625 = state_62851__$1;
(statearr_62904_67625[(2)] = inst_62834);

(statearr_62904_67625[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (10))){
var inst_62784 = (state_62851[(9)]);
var state_62851__$1 = state_62851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62851__$1,(13),inst_62784);
} else {
if((state_val_62852 === (18))){
var inst_62784 = (state_62851[(9)]);
var state_62851__$1 = state_62851;
var statearr_62905_67626 = state_62851__$1;
(statearr_62905_67626[(2)] = inst_62784);

(statearr_62905_67626[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62852 === (37))){
var inst_62849 = (state_62851[(2)]);
var state_62851__$1 = state_62851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62851__$1,inst_62849);
} else {
if((state_val_62852 === (8))){
var inst_62773 = (state_62851[(2)]);
var inst_62774 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-call-input","com.wsscode.pathom.connect/resolver-call-input",1246453757),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416)];
var inst_62775 = [new cljs.core.Keyword("com.wsscode.pathom.connect","node-resolver-error","com.wsscode.pathom.connect/node-resolver-error",-305161287),e,inst_62773];
var inst_62776 = cljs.core.PersistentHashMap.fromArrays(inst_62774,inst_62775);
var inst_62777 = com.wsscode.pathom.connect.reader3_node_log_BANG_(env__$1,node,inst_62776);
var inst_62778 = (function(){throw inst_62773})();
var state_62851__$1 = (function (){var statearr_62906 = state_62851;
(statearr_62906[(11)] = inst_62777);

return statearr_62906;
})();
var statearr_62907_67630 = state_62851__$1;
(statearr_62907_67630[(2)] = inst_62778);

(statearr_62907_67630[(1)] = (7));


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
});})(c__48839__auto___67537,ch__53995__auto__,input_SINGLEQUOTE_,map__62762,map__62762__$1,resolver,cache_QMARK_,env__$1,entity,e,trace_data,response,map__62758,map__62758__$1,env,indexes,async_parser_QMARK_,map__62759,map__62759__$1,node,sym,input,params))
;
return ((function (switch__48139__auto__,c__48839__auto___67537,ch__53995__auto__,input_SINGLEQUOTE_,map__62762,map__62762__$1,resolver,cache_QMARK_,env__$1,entity,e,trace_data,response,map__62758,map__62758__$1,env,indexes,async_parser_QMARK_,map__62759,map__62759__$1,node,sym,input,params){
return (function() {
var com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__48140__auto____0 = (function (){
var statearr_62908 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62908[(0)] = com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__48140__auto__);

(statearr_62908[(1)] = (1));

return statearr_62908;
});
var com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__48140__auto____1 = (function (state_62851){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_62851);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e62909){var ex__48143__auto__ = e62909;
var statearr_62910_67635 = state_62851;
(statearr_62910_67635[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_62851[(4)]))){
var statearr_62911_67637 = state_62851;
(statearr_62911_67637[(1)] = cljs.core.first((state_62851[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67641 = state_62851;
state_62851 = G__67641;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__48140__auto__ = function(state_62851){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__48140__auto____1.call(this,state_62851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__48140__auto____0;
com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__48140__auto____1;
return com$wsscode$pathom$connect$reader3_run_resolver_node_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto___67537,ch__53995__auto__,input_SINGLEQUOTE_,map__62762,map__62762__$1,resolver,cache_QMARK_,env__$1,entity,e,trace_data,response,map__62758,map__62758__$1,env,indexes,async_parser_QMARK_,map__62759,map__62759__$1,node,sym,input,params))
})();
var state__48841__auto__ = (function (){var statearr_62912 = f__48840__auto__();
(statearr_62912[(6)] = c__48839__auto___67537);

return statearr_62912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto___67537,ch__53995__auto__,input_SINGLEQUOTE_,map__62762,map__62762__$1,resolver,cache_QMARK_,env__$1,entity,e,trace_data,response,map__62758,map__62758__$1,env,indexes,async_parser_QMARK_,map__62759,map__62759__$1,node,sym,input,params))
);


return ch__53995__auto__;
} else {
if(cljs.core.truth_(com.wsscode.pathom.connect.reader3_merge_resolver_response(env__$1,sym,response))){
return com.wsscode.pathom.connect.reader3_run_next_node(env__$1,plan,node);
} else {
return null;
}
}
}
});
com.wsscode.pathom.connect.reader3_run_and_node_sync = (function com$wsscode$pathom$connect$reader3_run_and_node_sync(env,plan,p__62913){
var map__62914 = p__62913;
var map__62914__$1 = (((((!((map__62914 == null))))?(((((map__62914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62914):map__62914);
var node = map__62914__$1;
var run_and = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62914__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-and","com.wsscode.pathom.connect.planner/run-and",-690922453));
var seq__62916_67654 = cljs.core.seq(run_and);
var chunk__62917_67655 = null;
var count__62918_67656 = (0);
var i__62919_67657 = (0);
while(true){
if((i__62919_67657 < count__62918_67656)){
var node_id_67659 = chunk__62917_67655.cljs$core$IIndexed$_nth$arity$2(null,i__62919_67657);
var G__62926_67660 = env;
var G__62927_67661 = plan;
var G__62928_67662 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,node_id_67659);
(com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(G__62926_67660,G__62927_67661,G__62928_67662) : com.wsscode.pathom.connect.reader3_run_node.call(null,G__62926_67660,G__62927_67661,G__62928_67662));


var G__67666 = seq__62916_67654;
var G__67667 = chunk__62917_67655;
var G__67668 = count__62918_67656;
var G__67669 = (i__62919_67657 + (1));
seq__62916_67654 = G__67666;
chunk__62917_67655 = G__67667;
count__62918_67656 = G__67668;
i__62919_67657 = G__67669;
continue;
} else {
var temp__5720__auto___67671 = cljs.core.seq(seq__62916_67654);
if(temp__5720__auto___67671){
var seq__62916_67672__$1 = temp__5720__auto___67671;
if(cljs.core.chunked_seq_QMARK_(seq__62916_67672__$1)){
var c__4550__auto___67673 = cljs.core.chunk_first(seq__62916_67672__$1);
var G__67674 = cljs.core.chunk_rest(seq__62916_67672__$1);
var G__67675 = c__4550__auto___67673;
var G__67676 = cljs.core.count(c__4550__auto___67673);
var G__67677 = (0);
seq__62916_67654 = G__67674;
chunk__62917_67655 = G__67675;
count__62918_67656 = G__67676;
i__62919_67657 = G__67677;
continue;
} else {
var node_id_67678 = cljs.core.first(seq__62916_67672__$1);
var G__62929_67680 = env;
var G__62930_67681 = plan;
var G__62931_67682 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,node_id_67678);
(com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(G__62929_67680,G__62930_67681,G__62931_67682) : com.wsscode.pathom.connect.reader3_run_node.call(null,G__62929_67680,G__62930_67681,G__62931_67682));


var G__67686 = cljs.core.next(seq__62916_67672__$1);
var G__67687 = null;
var G__67688 = (0);
var G__67689 = (0);
seq__62916_67654 = G__67686;
chunk__62917_67655 = G__67687;
count__62918_67656 = G__67688;
i__62919_67657 = G__67689;
continue;
}
} else {
}
}
break;
}

return com.wsscode.pathom.connect.reader3_run_next_node(env,plan,node);
});
com.wsscode.pathom.connect.reader3_run_and_node_async = (function com$wsscode$pathom$connect$reader3_run_and_node_async(env,plan,p__62932){
var map__62933 = p__62932;
var map__62933__$1 = (((((!((map__62933 == null))))?(((((map__62933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62933):map__62933);
var node = map__62933__$1;
var run_and = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62933__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-and","com.wsscode.pathom.connect.planner/run-and",-690922453));
var ch__53995__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__48839__auto___67696 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto___67696,ch__53995__auto__,map__62933,map__62933__$1,node,run_and){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto___67696,ch__53995__auto__,map__62933,map__62933__$1,node,run_and){
return (function (state_62987){
var state_val_62988 = (state_62987[(1)]);
if((state_val_62988 === (7))){
var inst_62951 = (state_62987[(7)]);
var inst_62951__$1 = com.wsscode.pathom.connect.reader3_run_next_node(env,plan,node);
var inst_62952 = com.wsscode.async.async_cljs.chan_QMARK_(inst_62951__$1);
var state_62987__$1 = (function (){var statearr_62989 = state_62987;
(statearr_62989[(7)] = inst_62951__$1);

return statearr_62989;
})();
if(inst_62952){
var statearr_62990_67705 = state_62987__$1;
(statearr_62990_67705[(1)] = (10));

} else {
var statearr_62991_67706 = state_62987__$1;
(statearr_62991_67706[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (20))){
var inst_62968 = (state_62987[(2)]);
var state_62987__$1 = state_62987;
var statearr_62992_67708 = state_62987__$1;
(statearr_62992_67708[(2)] = inst_62968);

(statearr_62992_67708[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (1))){
var state_62987__$1 = state_62987;
var statearr_62993_67712 = state_62987__$1;
(statearr_62993_67712[(2)] = null);

(statearr_62993_67712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (4))){
var inst_62935 = (state_62987[(2)]);
var state_62987__$1 = state_62987;
var statearr_62994_67713 = state_62987__$1;
(statearr_62994_67713[(2)] = inst_62935);

(statearr_62994_67713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (15))){
var state_62987__$1 = state_62987;
var statearr_62995_67716 = state_62987__$1;
(statearr_62995_67716[(1)] = (18));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (21))){
var inst_62981 = cljs.core.async.close_BANG_(ch__53995__auto__);
var state_62987__$1 = state_62987;
var statearr_62997_67721 = state_62987__$1;
(statearr_62997_67721[(2)] = inst_62981);

(statearr_62997_67721[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (13))){
var inst_62955 = (state_62987[(2)]);
var inst_62956 = com.wsscode.async.async_cljs.throw_err(inst_62955);
var state_62987__$1 = state_62987;
var statearr_62998_67724 = state_62987__$1;
(statearr_62998_67724[(2)] = inst_62956);

(statearr_62998_67724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (22))){
var inst_62978 = (state_62987[(8)]);
var inst_62983 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53995__auto__,inst_62978);
var state_62987__$1 = state_62987;
var statearr_62999_67726 = state_62987__$1;
(statearr_62999_67726[(2)] = inst_62983);

(statearr_62999_67726[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (6))){
var inst_62948 = (state_62987[(2)]);
var inst_62949 = com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_(env,node);
var state_62987__$1 = (function (){var statearr_63000 = state_62987;
(statearr_63000[(9)] = inst_62948);

return statearr_63000;
})();
if(inst_62949){
var statearr_63001_67728 = state_62987__$1;
(statearr_63001_67728[(1)] = (7));

} else {
var statearr_63002_67730 = state_62987__$1;
(statearr_63002_67730[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (17))){
var inst_62962 = (state_62987[(2)]);
var inst_62963 = com.wsscode.async.async_cljs.consumer_pair(inst_62962);
var state_62987__$1 = state_62987;
var statearr_63003_67731 = state_62987__$1;
(statearr_63003_67731[(2)] = inst_62963);

(statearr_63003_67731[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (3))){
var inst_62978 = (state_62987[(8)]);
var inst_62978__$1 = (state_62987[(2)]);
var inst_62979 = (inst_62978__$1 == null);
var state_62987__$1 = (function (){var statearr_63004 = state_62987;
(statearr_63004[(8)] = inst_62978__$1);

return statearr_63004;
})();
if(cljs.core.truth_(inst_62979)){
var statearr_63005_67735 = state_62987__$1;
(statearr_63005_67735[(1)] = (21));

} else {
var statearr_63006_67736 = state_62987__$1;
(statearr_63006_67736[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (12))){
var inst_62972 = (state_62987[(2)]);
var state_62987__$1 = state_62987;
var statearr_63007_67737 = state_62987__$1;
(statearr_63007_67737[(2)] = inst_62972);

(statearr_63007_67737[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (2))){
var _ = (function (){var statearr_63008 = state_62987;
(statearr_63008[(4)] = cljs.core.cons((5),(state_62987[(4)])));

return statearr_63008;
})();
var inst_62941 = cljs.core.async.to_chan_BANG_(run_and);
var inst_62942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_62943 = (function (){var from_chan = inst_62941;
var out_chan = inst_62942;
return ((function (from_chan,out_chan,_,inst_62941,inst_62942,state_val_62988,c__48839__auto___67696,ch__53995__auto__,map__62933,map__62933__$1,node,run_and){
return (function com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline(node_id,res_ch){
var c__48839__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto____$1,from_chan,out_chan,_,inst_62941,inst_62942,state_val_62988,c__48839__auto___67696,ch__53995__auto__,map__62933,map__62933__$1,node,run_and){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto____$1,from_chan,out_chan,_,inst_62941,inst_62942,state_val_62988,c__48839__auto___67696,ch__53995__auto__,map__62933,map__62933__$1,node,run_and){
return (function (state_63027){
var state_val_63028 = (state_63027[(1)]);
if((state_val_63028 === (7))){
var inst_63017 = (state_63027[(7)]);
var state_63027__$1 = state_63027;
var statearr_63029_67739 = state_63027__$1;
(statearr_63029_67739[(2)] = inst_63017);

(statearr_63029_67739[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63028 === (1))){
var inst_63010 = (state_63027[(8)]);
var inst_63009 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,node_id);
var inst_63010__$1 = (com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(env,plan,inst_63009) : com.wsscode.pathom.connect.reader3_run_node.call(null,env,plan,inst_63009));
var inst_63011 = com.wsscode.async.async_cljs.chan_QMARK_(inst_63010__$1);
var state_63027__$1 = (function (){var statearr_63030 = state_63027;
(statearr_63030[(8)] = inst_63010__$1);

return statearr_63030;
})();
if(inst_63011){
var statearr_63031_67740 = state_63027__$1;
(statearr_63031_67740[(1)] = (2));

} else {
var statearr_63032_67741 = state_63027__$1;
(statearr_63032_67741[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63028 === (4))){
var inst_63017 = (state_63027[(7)]);
var inst_63017__$1 = (state_63027[(2)]);
var state_63027__$1 = (function (){var statearr_63033 = state_63027;
(statearr_63033[(7)] = inst_63017__$1);

return statearr_63033;
})();
if(cljs.core.truth_(inst_63017__$1)){
var statearr_63034_67742 = state_63027__$1;
(statearr_63034_67742[(1)] = (7));

} else {
var statearr_63035_67743 = state_63027__$1;
(statearr_63035_67743[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63028 === (6))){
var inst_63024 = (state_63027[(2)]);
var inst_63025 = cljs.core.async.close_BANG_(res_ch);
var state_63027__$1 = (function (){var statearr_63036 = state_63027;
(statearr_63036[(9)] = inst_63024);

return statearr_63036;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63027__$1,inst_63025);
} else {
if((state_val_63028 === (3))){
var inst_63010 = (state_63027[(8)]);
var state_63027__$1 = state_63027;
var statearr_63037_67751 = state_63027__$1;
(statearr_63037_67751[(2)] = inst_63010);

(statearr_63037_67751[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63028 === (2))){
var inst_63010 = (state_63027[(8)]);
var state_63027__$1 = state_63027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63027__$1,(5),inst_63010);
} else {
if((state_val_63028 === (9))){
var inst_63022 = (state_63027[(2)]);
var state_63027__$1 = state_63027;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63027__$1,(6),res_ch,inst_63022);
} else {
if((state_val_63028 === (5))){
var inst_63014 = (state_63027[(2)]);
var state_63027__$1 = state_63027;
var statearr_63038_67752 = state_63027__$1;
(statearr_63038_67752[(2)] = inst_63014);

(statearr_63038_67752[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63028 === (8))){
var inst_63020 = cljs.core.PersistentHashMap.EMPTY;
var state_63027__$1 = state_63027;
var statearr_63039_67753 = state_63027__$1;
(statearr_63039_67753[(2)] = inst_63020);

(statearr_63039_67753[(1)] = (9));


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
});})(c__48839__auto____$1,from_chan,out_chan,_,inst_62941,inst_62942,state_val_62988,c__48839__auto___67696,ch__53995__auto__,map__62933,map__62933__$1,node,run_and))
;
return ((function (switch__48139__auto__,c__48839__auto____$1,from_chan,out_chan,_,inst_62941,inst_62942,state_val_62988,c__48839__auto___67696,ch__53995__auto__,map__62933,map__62933__$1,node,run_and){
return (function() {
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__48140__auto____0 = (function (){
var statearr_63040 = [null,null,null,null,null,null,null,null,null,null];
(statearr_63040[(0)] = com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__48140__auto__);

(statearr_63040[(1)] = (1));

return statearr_63040;
});
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__48140__auto____1 = (function (state_63027){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_63027);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e63041){var ex__48143__auto__ = e63041;
var statearr_63042_67755 = state_63027;
(statearr_63042_67755[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_63027[(4)]))){
var statearr_63043_67756 = state_63027;
(statearr_63043_67756[(1)] = cljs.core.first((state_63027[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67757 = state_63027;
state_63027 = G__67757;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__48140__auto__ = function(state_63027){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__48140__auto____1.call(this,state_63027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__48140__auto____0;
com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__48140__auto____1;
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_join_seq_pipeline_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto____$1,from_chan,out_chan,_,inst_62941,inst_62942,state_val_62988,c__48839__auto___67696,ch__53995__auto__,map__62933,map__62933__$1,node,run_and))
})();
var state__48841__auto__ = (function (){var statearr_63044 = f__48840__auto__();
(statearr_63044[(6)] = c__48839__auto____$1);

return statearr_63044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto____$1,from_chan,out_chan,_,inst_62941,inst_62942,state_val_62988,c__48839__auto___67696,ch__53995__auto__,map__62933,map__62933__$1,node,run_and))
);

return c__48839__auto____$1;
});
;})(from_chan,out_chan,_,inst_62941,inst_62942,state_val_62988,c__48839__auto___67696,ch__53995__auto__,map__62933,map__62933__$1,node,run_and))
})();
var inst_62944 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_62942,inst_62943,inst_62941);
var inst_62945 = cljs.core.PersistentVector.EMPTY;
var inst_62946 = cljs.core.async.into(inst_62945,inst_62942);
var state_62987__$1 = (function (){var statearr_63045 = state_62987;
(statearr_63045[(10)] = inst_62944);

return statearr_63045;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62987__$1,(6),inst_62946);
} else {
if((state_val_62988 === (23))){
var inst_62985 = (state_62987[(2)]);
var state_62987__$1 = state_62987;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62987__$1,inst_62985);
} else {
if((state_val_62988 === (19))){
var state_62987__$1 = state_62987;
var statearr_63046_67758 = state_62987__$1;
(statearr_63046_67758[(2)] = null);

(statearr_63046_67758[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (11))){
var inst_62951 = (state_62987[(7)]);
var inst_62958 = com.wsscode.async.async_cljs.promise_QMARK_(inst_62951);
var state_62987__$1 = state_62987;
if(cljs.core.truth_(inst_62958)){
var statearr_63048_67763 = state_62987__$1;
(statearr_63048_67763[(1)] = (14));

} else {
var statearr_63049_67764 = state_62987__$1;
(statearr_63049_67764[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (9))){
var inst_62975 = (state_62987[(2)]);
var _ = (function (){var statearr_63050 = state_62987;
(statearr_63050[(4)] = cljs.core.rest((state_62987[(4)])));

return statearr_63050;
})();
var state_62987__$1 = state_62987;
var statearr_63051_67765 = state_62987__$1;
(statearr_63051_67765[(2)] = inst_62975);

(statearr_63051_67765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (5))){
var _ = (function (){var statearr_63052 = state_62987;
(statearr_63052[(4)] = cljs.core.rest((state_62987[(4)])));

return statearr_63052;
})();
var state_62987__$1 = state_62987;
var ex63047 = (state_62987__$1[(2)]);
var statearr_63053_67768 = state_62987__$1;
(statearr_63053_67768[(5)] = ex63047);


var statearr_63054_67769 = state_62987__$1;
(statearr_63054_67769[(1)] = (4));

(statearr_63054_67769[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (14))){
var inst_62951 = (state_62987[(7)]);
var inst_62960 = com.wsscode.async.async_cljs.promise__GT_chan(inst_62951);
var state_62987__$1 = state_62987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62987__$1,(17),inst_62960);
} else {
if((state_val_62988 === (16))){
var inst_62970 = (state_62987[(2)]);
var state_62987__$1 = state_62987;
var statearr_63055_67770 = state_62987__$1;
(statearr_63055_67770[(2)] = inst_62970);

(statearr_63055_67770[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (10))){
var inst_62951 = (state_62987[(7)]);
var state_62987__$1 = state_62987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62987__$1,(13),inst_62951);
} else {
if((state_val_62988 === (18))){
var inst_62951 = (state_62987[(7)]);
var state_62987__$1 = state_62987;
var statearr_63056_67773 = state_62987__$1;
(statearr_63056_67773[(2)] = inst_62951);

(statearr_63056_67773[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62988 === (8))){
var state_62987__$1 = state_62987;
var statearr_63057_67774 = state_62987__$1;
(statearr_63057_67774[(2)] = null);

(statearr_63057_67774[(1)] = (9));


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
});})(c__48839__auto___67696,ch__53995__auto__,map__62933,map__62933__$1,node,run_and))
;
return ((function (switch__48139__auto__,c__48839__auto___67696,ch__53995__auto__,map__62933,map__62933__$1,node,run_and){
return (function() {
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__48140__auto____0 = (function (){
var statearr_63058 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63058[(0)] = com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__48140__auto__);

(statearr_63058[(1)] = (1));

return statearr_63058;
});
var com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__48140__auto____1 = (function (state_62987){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_62987);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e63059){var ex__48143__auto__ = e63059;
var statearr_63060_67781 = state_62987;
(statearr_63060_67781[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_62987[(4)]))){
var statearr_63061_67782 = state_62987;
(statearr_63061_67782[(1)] = cljs.core.first((state_62987[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67784 = state_62987;
state_62987 = G__67784;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__48140__auto__ = function(state_62987){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__48140__auto____1.call(this,state_62987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__48140__auto____0;
com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__48140__auto____1;
return com$wsscode$pathom$connect$reader3_run_and_node_async_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto___67696,ch__53995__auto__,map__62933,map__62933__$1,node,run_and))
})();
var state__48841__auto__ = (function (){var statearr_63062 = f__48840__auto__();
(statearr_63062[(6)] = c__48839__auto___67696);

return statearr_63062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto___67696,ch__53995__auto__,map__62933,map__62933__$1,node,run_and))
);


return ch__53995__auto__;
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
com.wsscode.pathom.connect.reader3_run_or_node_sync = (function com$wsscode$pathom$connect$reader3_run_or_node_sync(env,plan,p__63063){
var map__63064 = p__63063;
var map__63064__$1 = (((((!((map__63064 == null))))?(((((map__63064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63064):map__63064);
var or_node = map__63064__$1;
var run_or = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63064__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-or","com.wsscode.pathom.connect.planner/run-or",-13021664));
var nodes_67795 = run_or;
var resp_67796 = null;
while(true){
var vec__63072_67798 = nodes_67795;
var seq__63073_67799 = cljs.core.seq(vec__63072_67798);
var first__63074_67800 = cljs.core.first(seq__63073_67799);
var seq__63073_67801__$1 = cljs.core.next(seq__63073_67799);
var node_id_67802 = first__63074_67800;
var tail_67803 = seq__63073_67801__$1;
if(cljs.core.truth_(node_id_67802)){
var response_67806 = (function (){var G__63075 = env;
var G__63076 = plan;
var G__63077 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,node_id_67802);
return (com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(G__63075,G__63076,G__63077) : com.wsscode.pathom.connect.reader3_run_node.call(null,G__63075,G__63076,G__63077));
})();
if(com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_(env,or_node)){
} else {
var G__67808 = tail_67803;
var G__67809 = response_67806;
nodes_67795 = G__67808;
resp_67796 = G__67809;
continue;
}
} else {
}
break;
}

return com.wsscode.pathom.connect.reader3_run_next_node(env,plan,or_node);
});
com.wsscode.pathom.connect.reader3_run_or_node_async = (function com$wsscode$pathom$connect$reader3_run_or_node_async(env,plan,p__63078){
var map__63079 = p__63078;
var map__63079__$1 = (((((!((map__63079 == null))))?(((((map__63079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63079):map__63079);
var or_node = map__63079__$1;
var run_or = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63079__$1,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","run-or","com.wsscode.pathom.connect.planner/run-or",-13021664));
var ch__53995__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__48839__auto___67819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto___67819,ch__53995__auto__,map__63079,map__63079__$1,or_node,run_or){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto___67819,ch__53995__auto__,map__63079,map__63079__$1,or_node,run_or){
return (function (state_63151){
var state_val_63152 = (state_63151[(1)]);
if((state_val_63152 === (7))){
var inst_63118 = (state_63151[(7)]);
var inst_63117 = (state_63151[(2)]);
var inst_63118__$1 = com.wsscode.pathom.connect.reader3_run_next_node(env,plan,or_node);
var inst_63119 = com.wsscode.async.async_cljs.chan_QMARK_(inst_63118__$1);
var state_63151__$1 = (function (){var statearr_63153 = state_63151;
(statearr_63153[(8)] = inst_63117);

(statearr_63153[(7)] = inst_63118__$1);

return statearr_63153;
})();
if(inst_63119){
var statearr_63154_67823 = state_63151__$1;
(statearr_63154_67823[(1)] = (18));

} else {
var statearr_63155_67824 = state_63151__$1;
(statearr_63155_67824[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (20))){
var inst_63139 = (state_63151[(2)]);
var _ = (function (){var statearr_63156 = state_63151;
(statearr_63156[(4)] = cljs.core.rest((state_63151[(4)])));

return statearr_63156;
})();
var state_63151__$1 = state_63151;
var statearr_63157_67825 = state_63151__$1;
(statearr_63157_67825[(2)] = inst_63139);

(statearr_63157_67825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (27))){
var state_63151__$1 = state_63151;
var statearr_63158_67829 = state_63151__$1;
(statearr_63158_67829[(2)] = null);

(statearr_63158_67829[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (1))){
var state_63151__$1 = state_63151;
var statearr_63159_67830 = state_63151__$1;
(statearr_63159_67830[(2)] = null);

(statearr_63159_67830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (24))){
var inst_63137 = (state_63151[(2)]);
var state_63151__$1 = state_63151;
var statearr_63160_67832 = state_63151__$1;
(statearr_63160_67832[(2)] = inst_63137);

(statearr_63160_67832[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (4))){
var inst_63081 = (state_63151[(2)]);
var state_63151__$1 = state_63151;
var statearr_63161_67834 = state_63151__$1;
(statearr_63161_67834[(2)] = inst_63081);

(statearr_63161_67834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (15))){
var inst_63106 = (state_63151[(9)]);
var state_63151__$1 = state_63151;
var statearr_63162_67835 = state_63151__$1;
(statearr_63162_67835[(2)] = inst_63106);

(statearr_63162_67835[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (21))){
var inst_63122 = (state_63151[(2)]);
var inst_63123 = com.wsscode.async.async_cljs.throw_err(inst_63122);
var state_63151__$1 = state_63151;
var statearr_63163_67840 = state_63151__$1;
(statearr_63163_67840[(2)] = inst_63123);

(statearr_63163_67840[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (31))){
var inst_63149 = (state_63151[(2)]);
var state_63151__$1 = state_63151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63151__$1,inst_63149);
} else {
if((state_val_63152 === (13))){
var inst_63106 = (state_63151[(2)]);
var inst_63107 = com.wsscode.pathom.connect.reader3_all_requires_ready_QMARK_(env,or_node);
var state_63151__$1 = (function (){var statearr_63164 = state_63151;
(statearr_63164[(9)] = inst_63106);

return statearr_63164;
})();
if(inst_63107){
var statearr_63165_67843 = state_63151__$1;
(statearr_63165_67843[(1)] = (15));

} else {
var statearr_63166_67844 = state_63151__$1;
(statearr_63166_67844[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (22))){
var inst_63118 = (state_63151[(7)]);
var inst_63127 = com.wsscode.async.async_cljs.promise__GT_chan(inst_63118);
var state_63151__$1 = state_63151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63151__$1,(25),inst_63127);
} else {
if((state_val_63152 === (29))){
var inst_63145 = cljs.core.async.close_BANG_(ch__53995__auto__);
var state_63151__$1 = state_63151;
var statearr_63167_67845 = state_63151__$1;
(statearr_63167_67845[(2)] = inst_63145);

(statearr_63167_67845[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (6))){
var inst_63088 = (state_63151[(10)]);
var inst_63095 = (state_63151[(11)]);
var inst_63094 = cljs.core.seq(inst_63088);
var inst_63095__$1 = cljs.core.first(inst_63094);
var inst_63096 = cljs.core.next(inst_63094);
var state_63151__$1 = (function (){var statearr_63168 = state_63151;
(statearr_63168[(11)] = inst_63095__$1);

(statearr_63168[(12)] = inst_63096);

return statearr_63168;
})();
if(cljs.core.truth_(inst_63095__$1)){
var statearr_63169_67847 = state_63151__$1;
(statearr_63169_67847[(1)] = (8));

} else {
var statearr_63170_67848 = state_63151__$1;
(statearr_63170_67848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (28))){
var inst_63135 = (state_63151[(2)]);
var state_63151__$1 = state_63151;
var statearr_63171_67854 = state_63151__$1;
(statearr_63171_67854[(2)] = inst_63135);

(statearr_63171_67854[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (25))){
var inst_63129 = (state_63151[(2)]);
var inst_63130 = com.wsscode.async.async_cljs.consumer_pair(inst_63129);
var state_63151__$1 = state_63151;
var statearr_63172_67855 = state_63151__$1;
(statearr_63172_67855[(2)] = inst_63130);

(statearr_63172_67855[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (17))){
var inst_63112 = (state_63151[(2)]);
var state_63151__$1 = state_63151;
var statearr_63173_67857 = state_63151__$1;
(statearr_63173_67857[(2)] = inst_63112);

(statearr_63173_67857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (3))){
var inst_63142 = (state_63151[(13)]);
var inst_63142__$1 = (state_63151[(2)]);
var inst_63143 = (inst_63142__$1 == null);
var state_63151__$1 = (function (){var statearr_63174 = state_63151;
(statearr_63174[(13)] = inst_63142__$1);

return statearr_63174;
})();
if(cljs.core.truth_(inst_63143)){
var statearr_63175_67859 = state_63151__$1;
(statearr_63175_67859[(1)] = (29));

} else {
var statearr_63176_67862 = state_63151__$1;
(statearr_63176_67862[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (12))){
var inst_63099 = (state_63151[(14)]);
var state_63151__$1 = state_63151;
var statearr_63177_67863 = state_63151__$1;
(statearr_63177_67863[(2)] = inst_63099);

(statearr_63177_67863[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (2))){
var _ = (function (){var statearr_63178 = state_63151;
(statearr_63178[(4)] = cljs.core.cons((5),(state_63151[(4)])));

return statearr_63178;
})();
var inst_63087 = run_or;
var inst_63088 = inst_63087;
var inst_63089 = null;
var state_63151__$1 = (function (){var statearr_63179 = state_63151;
(statearr_63179[(10)] = inst_63088);

(statearr_63179[(15)] = inst_63089);

return statearr_63179;
})();
var statearr_63180_67866 = state_63151__$1;
(statearr_63180_67866[(2)] = null);

(statearr_63180_67866[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (23))){
var state_63151__$1 = state_63151;
var statearr_63181_67869 = state_63151__$1;
(statearr_63181_67869[(1)] = (26));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (19))){
var inst_63118 = (state_63151[(7)]);
var inst_63125 = com.wsscode.async.async_cljs.promise_QMARK_(inst_63118);
var state_63151__$1 = state_63151;
if(cljs.core.truth_(inst_63125)){
var statearr_63183_67875 = state_63151__$1;
(statearr_63183_67875[(1)] = (22));

} else {
var statearr_63184_67878 = state_63151__$1;
(statearr_63184_67878[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (11))){
var inst_63099 = (state_63151[(14)]);
var state_63151__$1 = state_63151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63151__$1,(14),inst_63099);
} else {
if((state_val_63152 === (9))){
var inst_63089 = (state_63151[(15)]);
var state_63151__$1 = state_63151;
var statearr_63186_67884 = state_63151__$1;
(statearr_63186_67884[(2)] = inst_63089);

(statearr_63186_67884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (5))){
var _ = (function (){var statearr_63187 = state_63151;
(statearr_63187[(4)] = cljs.core.rest((state_63151[(4)])));

return statearr_63187;
})();
var state_63151__$1 = state_63151;
var ex63185 = (state_63151__$1[(2)]);
var statearr_63188_67886 = state_63151__$1;
(statearr_63188_67886[(5)] = ex63185);


var statearr_63189_67887 = state_63151__$1;
(statearr_63189_67887[(1)] = (4));

(statearr_63189_67887[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (14))){
var inst_63103 = (state_63151[(2)]);
var state_63151__$1 = state_63151;
var statearr_63190_67893 = state_63151__$1;
(statearr_63190_67893[(2)] = inst_63103);

(statearr_63190_67893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (26))){
var inst_63118 = (state_63151[(7)]);
var state_63151__$1 = state_63151;
var statearr_63191_67896 = state_63151__$1;
(statearr_63191_67896[(2)] = inst_63118);

(statearr_63191_67896[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (16))){
var inst_63106 = (state_63151[(9)]);
var inst_63096 = (state_63151[(12)]);
var inst_63088 = inst_63096;
var inst_63089 = inst_63106;
var state_63151__$1 = (function (){var statearr_63192 = state_63151;
(statearr_63192[(10)] = inst_63088);

(statearr_63192[(15)] = inst_63089);

return statearr_63192;
})();
var statearr_63193_67897 = state_63151__$1;
(statearr_63193_67897[(2)] = null);

(statearr_63193_67897[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (30))){
var inst_63142 = (state_63151[(13)]);
var inst_63147 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53995__auto__,inst_63142);
var state_63151__$1 = state_63151;
var statearr_63194_67898 = state_63151__$1;
(statearr_63194_67898[(2)] = inst_63147);

(statearr_63194_67898[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (10))){
var inst_63115 = (state_63151[(2)]);
var state_63151__$1 = state_63151;
var statearr_63195_67900 = state_63151__$1;
(statearr_63195_67900[(2)] = inst_63115);

(statearr_63195_67900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63152 === (18))){
var inst_63118 = (state_63151[(7)]);
var state_63151__$1 = state_63151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63151__$1,(21),inst_63118);
} else {
if((state_val_63152 === (8))){
var inst_63095 = (state_63151[(11)]);
var inst_63099 = (state_63151[(14)]);
var inst_63098 = com.wsscode.pathom.connect.planner.get_node.cljs$core$IFn$_invoke$arity$2(plan,inst_63095);
var inst_63099__$1 = (com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.reader3_run_node.cljs$core$IFn$_invoke$arity$3(env,plan,inst_63098) : com.wsscode.pathom.connect.reader3_run_node.call(null,env,plan,inst_63098));
var inst_63100 = com.wsscode.async.async_cljs.chan_QMARK_(inst_63099__$1);
var state_63151__$1 = (function (){var statearr_63196 = state_63151;
(statearr_63196[(14)] = inst_63099__$1);

return statearr_63196;
})();
if(inst_63100){
var statearr_63197_67901 = state_63151__$1;
(statearr_63197_67901[(1)] = (11));

} else {
var statearr_63198_67902 = state_63151__$1;
(statearr_63198_67902[(1)] = (12));

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
});})(c__48839__auto___67819,ch__53995__auto__,map__63079,map__63079__$1,or_node,run_or))
;
return ((function (switch__48139__auto__,c__48839__auto___67819,ch__53995__auto__,map__63079,map__63079__$1,or_node,run_or){
return (function() {
var com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__48140__auto____0 = (function (){
var statearr_63199 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63199[(0)] = com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__48140__auto__);

(statearr_63199[(1)] = (1));

return statearr_63199;
});
var com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__48140__auto____1 = (function (state_63151){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_63151);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e63200){var ex__48143__auto__ = e63200;
var statearr_63201_67903 = state_63151;
(statearr_63201_67903[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_63151[(4)]))){
var statearr_63202_67904 = state_63151;
(statearr_63202_67904[(1)] = cljs.core.first((state_63151[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67907 = state_63151;
state_63151 = G__67907;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__48140__auto__ = function(state_63151){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__48140__auto____1.call(this,state_63151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__48140__auto____0;
com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__48140__auto____1;
return com$wsscode$pathom$connect$reader3_run_or_node_async_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto___67819,ch__53995__auto__,map__63079,map__63079__$1,or_node,run_or))
})();
var state__48841__auto__ = (function (){var statearr_63203 = f__48840__auto__();
(statearr_63203[(6)] = c__48839__auto___67819);

return statearr_63203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto___67819,ch__53995__auto__,map__63079,map__63079__$1,or_node,run_or))
);


return ch__53995__auto__;
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
var G__63204 = com.wsscode.pathom.connect.planner.node_kind(node);
var G__63204__$1 = (((G__63204 instanceof cljs.core.Keyword))?G__63204.fqn:null);
switch (G__63204__$1) {
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
com.wsscode.pathom.connect.reader3_prepare_ast = (function com$wsscode$pathom$connect$reader3_prepare_ast(p__63205){
var map__63206 = p__63205;
var map__63206__$1 = (((((!((map__63206 == null))))?(((((map__63206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63206):map__63206);
var env = map__63206__$1;
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63206__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
return com.wsscode.pathom.connect.planner.prepare_ast(env,com.wsscode.pathom.core.query__GT_ast(parent_query));
});
com.wsscode.pathom.connect.reader3_compute_run_graph = (function com$wsscode$pathom$connect$reader3_compute_run_graph(env){
var plan_trace_id = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978)], null));
var plan = com.wsscode.pathom.connect.planner.compute_run_graph.cljs$core$IFn$_invoke$arity$1(env);
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,plan_trace_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978),new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),plan], null));

return plan;
});
com.wsscode.pathom.connect.reader3 = (function com$wsscode$pathom$connect$reader3(p__63208){
var map__63209 = p__63208;
var map__63209__$1 = (((((!((map__63209 == null))))?(((((map__63209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63209):map__63209);
var env = map__63209__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63209__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var reader3_computed_plans = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63209__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-computed-plans","com.wsscode.pathom.connect/reader3-computed-plans",-307073851));
var async_parser_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63209__$1,new cljs.core.Keyword("com.wsscode.pathom.core","async-parser?","com.wsscode.pathom.core/async-parser?",920199905));
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-enter","com.wsscode.pathom.connect/reader3-enter",-1844342031)], null));

var path = com.wsscode.pathom.core.path_without_placeholders(env);
if(cljs.core.contains_QMARK_(reader3_computed_plans,path)){
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
} else {
var ast = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))?(function (){var trace_id__27500__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-prepare-ast","com.wsscode.pathom.connect/reader3-prepare-ast",2123235486)], null));
var res__27501__auto__ = com.wsscode.pathom.connect.reader3_prepare_ast(env);
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__27500__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-prepare-ast","com.wsscode.pathom.connect/reader3-prepare-ast",2123235486)], null));

return res__27501__auto__;
})():com.wsscode.pathom.connect.reader3_prepare_ast(env));
var available_data = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))?(function (){var trace_id__27500__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-entity-shape","com.wsscode.pathom.connect/reader3-entity-shape",721688024)], null));
var res__27501__auto__ = com.wsscode.pathom.core.map__GT_shape_descriptor(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env));
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__27500__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-entity-shape","com.wsscode.pathom.connect/reader3-entity-shape",721688024)], null));

return res__27501__auto__;
})():com.wsscode.pathom.core.map__GT_shape_descriptor(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env)));
var process_start = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-execute","com.wsscode.pathom.connect/reader3-execute",1795970935)], null));
var plan = com.wsscode.pathom.connect.reader3_compute_run_graph(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,indexes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957),ast,new cljs.core.Keyword("com.wsscode.pathom.connect.planner","available-data","com.wsscode.pathom.connect.planner/available-data",-2081264117),available_data], null)], 0)));
var plan_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(plan);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","run-plan*","com.wsscode.pathom.connect/run-plan*",-2140918000),plan_STAR_);
var temp__5718__auto__ = com.wsscode.pathom.connect.planner.get_root_node(plan);
if(cljs.core.truth_(temp__5718__auto__)){
var root = temp__5718__auto__;
if(cljs.core.truth_(async_parser_QMARK_)){
var ch__53995__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__48839__auto___67919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto___67919,ch__53995__auto__,root,temp__5718__auto__,ast,available_data,process_start,plan,plan_STAR_,env__$1,path,map__63209,map__63209__$1,env,indexes,reader3_computed_plans,async_parser_QMARK_){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto___67919,ch__53995__auto__,root,temp__5718__auto__,ast,available_data,process_start,plan,plan_STAR_,env__$1,path,map__63209,map__63209__$1,env,indexes,reader3_computed_plans,async_parser_QMARK_){
return (function (state_63281){
var state_val_63282 = (state_63281[(1)]);
if((state_val_63282 === (7))){
var inst_63217 = (state_63281[(7)]);
var inst_63224 = com.wsscode.async.async_cljs.promise_QMARK_(inst_63217);
var state_63281__$1 = state_63281;
if(cljs.core.truth_(inst_63224)){
var statearr_63283_67921 = state_63281__$1;
(statearr_63283_67921[(1)] = (10));

} else {
var statearr_63284_67922 = state_63281__$1;
(statearr_63284_67922[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63282 === (20))){
var inst_63252 = (state_63281[(2)]);
var inst_63253 = com.wsscode.async.async_cljs.throw_err(inst_63252);
var state_63281__$1 = state_63281;
var statearr_63285_67924 = state_63281__$1;
(statearr_63285_67924[(2)] = inst_63253);

(statearr_63285_67924[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63282 === (27))){
var inst_63265 = (state_63281[(2)]);
var state_63281__$1 = state_63281;
var statearr_63286_67926 = state_63281__$1;
(statearr_63286_67926[(2)] = inst_63265);

(statearr_63286_67926[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63282 === (1))){
var state_63281__$1 = state_63281;
var statearr_63287_67927 = state_63281__$1;
(statearr_63287_67927[(2)] = null);

(statearr_63287_67927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63282 === (24))){
var inst_63259 = (state_63281[(2)]);
var inst_63260 = com.wsscode.async.async_cljs.consumer_pair(inst_63259);
var state_63281__$1 = state_63281;
var statearr_63288_67929 = state_63281__$1;
(statearr_63288_67929[(2)] = inst_63260);

(statearr_63288_67929[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63282 === (4))){
var inst_63211 = (state_63281[(2)]);
var state_63281__$1 = state_63281;
var statearr_63289_67930 = state_63281__$1;
(statearr_63289_67930[(2)] = inst_63211);

(statearr_63289_67930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63282 === (15))){
var state_63281__$1 = state_63281;
var statearr_63290_67931 = state_63281__$1;
(statearr_63290_67931[(2)] = null);

(statearr_63290_67931[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63282 === (21))){
var inst_63248 = (state_63281[(8)]);
var inst_63257 = com.wsscode.async.async_cljs.promise__GT_chan(inst_63248);
var state_63281__$1 = state_63281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63281__$1,(24),inst_63257);
} else {
if((state_val_63282 === (13))){
var inst_63228 = (state_63281[(2)]);
var inst_63229 = com.wsscode.async.async_cljs.consumer_pair(inst_63228);
var state_63281__$1 = state_63281;
var statearr_63291_67932 = state_63281__$1;
(statearr_63291_67932[(2)] = inst_63229);

(statearr_63291_67932[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63282 === (22))){
var state_63281__$1 = state_63281;
var statearr_63292_67933 = state_63281__$1;
(statearr_63292_67933[(1)] = (25));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63282 === (29))){
var inst_63272 = (state_63281[(9)]);
var inst_63277 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53995__auto__,inst_63272);
var state_63281__$1 = state_63281;
var statearr_63294_67934 = state_63281__$1;
(statearr_63294_67934[(2)] = inst_63277);

(statearr_63294_67934[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63282 === (6))){
var inst_63217 = (state_63281[(7)]);
var state_63281__$1 = state_63281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63281__$1,(9),inst_63217);
} else {
if((state_val_63282 === (28))){
var inst_63275 = cljs.core.async.close_BANG_(ch__53995__auto__);
var state_63281__$1 = state_63281;
var statearr_63295_67936 = state_63281__$1;
(statearr_63295_67936[(2)] = inst_63275);

(statearr_63295_67936[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63282 === (25))){
var inst_63248 = (state_63281[(8)]);
var state_63281__$1 = state_63281;
var statearr_63296_67937 = state_63281__$1;
(statearr_63296_67937[(2)] = inst_63248);

(statearr_63296_67937[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63282 === (17))){
var inst_63248 = (state_63281[(8)]);
var state_63281__$1 = state_63281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63281__$1,(20),inst_63248);
} else {
if((state_val_63282 === (3))){
var inst_63272 = (state_63281[(9)]);
var inst_63272__$1 = (state_63281[(2)]);
var inst_63273 = (inst_63272__$1 == null);
var state_63281__$1 = (function (){var statearr_63297 = state_63281;
(statearr_63297[(9)] = inst_63272__$1);

return statearr_63297;
})();
if(cljs.core.truth_(inst_63273)){
var statearr_63298_67940 = state_63281__$1;
(statearr_63298_67940[(1)] = (28));

} else {
var statearr_63299_67942 = state_63281__$1;
(statearr_63299_67942[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63282 === (12))){
var inst_63236 = (state_63281[(2)]);
var state_63281__$1 = state_63281;
var statearr_63300_67945 = state_63281__$1;
(statearr_63300_67945[(2)] = inst_63236);

(statearr_63300_67945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63282 === (2))){
var inst_63217 = (state_63281[(7)]);
var _ = (function (){var statearr_63301 = state_63281;
(statearr_63301[(4)] = cljs.core.cons((5),(state_63281[(4)])));

return statearr_63301;
})();
var inst_63217__$1 = com.wsscode.pathom.connect.reader3_run_node(env__$1,plan,root);
var inst_63218 = com.wsscode.async.async_cljs.chan_QMARK_(inst_63217__$1);
var state_63281__$1 = (function (){var statearr_63302 = state_63281;
(statearr_63302[(7)] = inst_63217__$1);

return statearr_63302;
})();
if(inst_63218){
var statearr_63303_67947 = state_63281__$1;
(statearr_63303_67947[(1)] = (6));

} else {
var statearr_63304_67948 = state_63281__$1;
(statearr_63304_67948[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63282 === (23))){
var inst_63267 = (state_63281[(2)]);
var state_63281__$1 = state_63281;
var statearr_63305_67949 = state_63281__$1;
(statearr_63305_67949[(2)] = inst_63267);

(statearr_63305_67949[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63282 === (19))){
var inst_63269 = (state_63281[(2)]);
var _ = (function (){var statearr_63306 = state_63281;
(statearr_63306[(4)] = cljs.core.rest((state_63281[(4)])));

return statearr_63306;
})();
var state_63281__$1 = state_63281;
var statearr_63307_67951 = state_63281__$1;
(statearr_63307_67951[(2)] = inst_63269);

(statearr_63307_67951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63282 === (11))){
var state_63281__$1 = state_63281;
var statearr_63309_67952 = state_63281__$1;
(statearr_63309_67952[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63282 === (9))){
var inst_63221 = (state_63281[(2)]);
var inst_63222 = com.wsscode.async.async_cljs.throw_err(inst_63221);
var state_63281__$1 = state_63281;
var statearr_63311_67954 = state_63281__$1;
(statearr_63311_67954[(2)] = inst_63222);

(statearr_63311_67954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63282 === (5))){
var _ = (function (){var statearr_63312 = state_63281;
(statearr_63312[(4)] = cljs.core.rest((state_63281[(4)])));

return statearr_63312;
})();
var state_63281__$1 = state_63281;
var ex63308 = (state_63281__$1[(2)]);
var statearr_63313_67955 = state_63281__$1;
(statearr_63313_67955[(5)] = ex63308);


var statearr_63314_67957 = state_63281__$1;
(statearr_63314_67957[(1)] = (4));

(statearr_63314_67957[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63282 === (14))){
var inst_63217 = (state_63281[(7)]);
var state_63281__$1 = state_63281;
var statearr_63315_67961 = state_63281__$1;
(statearr_63315_67961[(2)] = inst_63217);

(statearr_63315_67961[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63282 === (26))){
var state_63281__$1 = state_63281;
var statearr_63316_67963 = state_63281__$1;
(statearr_63316_67963[(2)] = null);

(statearr_63316_67963[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63282 === (16))){
var inst_63234 = (state_63281[(2)]);
var state_63281__$1 = state_63281;
var statearr_63317_67964 = state_63281__$1;
(statearr_63317_67964[(2)] = inst_63234);

(statearr_63317_67964[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63282 === (30))){
var inst_63279 = (state_63281[(2)]);
var state_63281__$1 = state_63281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63281__$1,inst_63279);
} else {
if((state_val_63282 === (10))){
var inst_63217 = (state_63281[(7)]);
var inst_63226 = com.wsscode.async.async_cljs.promise__GT_chan(inst_63217);
var state_63281__$1 = state_63281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63281__$1,(13),inst_63226);
} else {
if((state_val_63282 === (18))){
var inst_63248 = (state_63281[(8)]);
var inst_63255 = com.wsscode.async.async_cljs.promise_QMARK_(inst_63248);
var state_63281__$1 = state_63281;
if(cljs.core.truth_(inst_63255)){
var statearr_63318_67967 = state_63281__$1;
(statearr_63318_67967[(1)] = (21));

} else {
var statearr_63319_67969 = state_63281__$1;
(statearr_63319_67969[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63282 === (8))){
var inst_63248 = (state_63281[(8)]);
var inst_63238 = (state_63281[(2)]);
var inst_63239 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_63240 = cljs.core.deref(plan_STAR_);
var inst_63241 = [new cljs.core.Keyword(null,"fill","fill",883462889)];
var inst_63242 = ["#6ac5ec"];
var inst_63243 = cljs.core.PersistentHashMap.fromArrays(inst_63241,inst_63242);
var inst_63244 = [new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-execute","com.wsscode.pathom.connect/reader3-execute",1795970935),inst_63240,inst_63243];
var inst_63245 = cljs.core.PersistentHashMap.fromArrays(inst_63239,inst_63244);
var inst_63246 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env__$1,process_start,inst_63245);
var inst_63247 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","reader3-computed-plans","com.wsscode.pathom.connect/reader3-computed-plans",-307073851),com.wsscode.pathom.misc.sconj,path);
var inst_63248__$1 = com.wsscode.pathom.core.reader(inst_63247);
var inst_63249 = com.wsscode.async.async_cljs.chan_QMARK_(inst_63248__$1);
var state_63281__$1 = (function (){var statearr_63320 = state_63281;
(statearr_63320[(8)] = inst_63248__$1);

(statearr_63320[(10)] = inst_63246);

(statearr_63320[(11)] = inst_63238);

return statearr_63320;
})();
if(inst_63249){
var statearr_63321_67976 = state_63281__$1;
(statearr_63321_67976[(1)] = (17));

} else {
var statearr_63322_67977 = state_63281__$1;
(statearr_63322_67977[(1)] = (18));

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
});})(c__48839__auto___67919,ch__53995__auto__,root,temp__5718__auto__,ast,available_data,process_start,plan,plan_STAR_,env__$1,path,map__63209,map__63209__$1,env,indexes,reader3_computed_plans,async_parser_QMARK_))
;
return ((function (switch__48139__auto__,c__48839__auto___67919,ch__53995__auto__,root,temp__5718__auto__,ast,available_data,process_start,plan,plan_STAR_,env__$1,path,map__63209,map__63209__$1,env,indexes,reader3_computed_plans,async_parser_QMARK_){
return (function() {
var com$wsscode$pathom$connect$reader3_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$connect$reader3_$_state_machine__48140__auto____0 = (function (){
var statearr_63323 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63323[(0)] = com$wsscode$pathom$connect$reader3_$_state_machine__48140__auto__);

(statearr_63323[(1)] = (1));

return statearr_63323;
});
var com$wsscode$pathom$connect$reader3_$_state_machine__48140__auto____1 = (function (state_63281){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_63281);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e63324){var ex__48143__auto__ = e63324;
var statearr_63325_67978 = state_63281;
(statearr_63325_67978[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_63281[(4)]))){
var statearr_63326_67979 = state_63281;
(statearr_63326_67979[(1)] = cljs.core.first((state_63281[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67980 = state_63281;
state_63281 = G__67980;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$connect$reader3_$_state_machine__48140__auto__ = function(state_63281){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$reader3_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$reader3_$_state_machine__48140__auto____1.call(this,state_63281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$reader3_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$reader3_$_state_machine__48140__auto____0;
com$wsscode$pathom$connect$reader3_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$reader3_$_state_machine__48140__auto____1;
return com$wsscode$pathom$connect$reader3_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto___67919,ch__53995__auto__,root,temp__5718__auto__,ast,available_data,process_start,plan,plan_STAR_,env__$1,path,map__63209,map__63209__$1,env,indexes,reader3_computed_plans,async_parser_QMARK_))
})();
var state__48841__auto__ = (function (){var statearr_63327 = f__48840__auto__();
(statearr_63327[(6)] = c__48839__auto___67919);

return statearr_63327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto___67919,ch__53995__auto__,root,temp__5718__auto__,ast,available_data,process_start,plan,plan_STAR_,env__$1,path,map__63209,map__63209__$1,env,indexes,reader3_computed_plans,async_parser_QMARK_))
);


return ch__53995__auto__;
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
com.wsscode.pathom.connect.parallel_batch_error = (function com$wsscode$pathom$connect$parallel_batch_error(p__63328,e){
var map__63329 = p__63328;
var map__63329__$1 = (((((!((map__63329 == null))))?(((((map__63329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63329):map__63329);
var env = map__63329__$1;
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63329__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var map__63331 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var map__63331__$1 = (((((!((map__63331 == null))))?(((((map__63331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63331):map__63331);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63331__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var item_count = cljs.core.count(processing_sequence);
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-error","com.wsscode.pathom.connect/batch-result-error",-1587594017),new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),com.wsscode.pathom.core.process_error(env,e)], null));

var output_SINGLEQUOTE_ = com.wsscode.pathom.connect.output__GT_provides(output);
var base_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take_while.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword_QMARK_),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661).cljs$core$IFn$_invoke$arity$1(env));
var seq__63333_67996 = cljs.core.seq(output_SINGLEQUOTE_);
var chunk__63338_67997 = null;
var count__63339_67998 = (0);
var i__63340_67999 = (0);
while(true){
if((i__63340_67999 < count__63339_67998)){
var o_68000 = chunk__63338_67997.cljs$core$IIndexed$_nth$arity$2(null,i__63340_67999);
var seq__63341_68001 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(item_count));
var chunk__63342_68002 = null;
var count__63343_68003 = (0);
var i__63344_68004 = (0);
while(true){
if((i__63344_68004 < count__63343_68003)){
var i_68006 = chunk__63342_68002.cljs$core$IIndexed$_nth$arity$2(null,i__63344_68004);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),com.wsscode.pathom.misc.vconj(base_path,i_68006,o_68000)),e);


var G__68007 = seq__63341_68001;
var G__68008 = chunk__63342_68002;
var G__68009 = count__63343_68003;
var G__68010 = (i__63344_68004 + (1));
seq__63341_68001 = G__68007;
chunk__63342_68002 = G__68008;
count__63343_68003 = G__68009;
i__63344_68004 = G__68010;
continue;
} else {
var temp__5720__auto___68016 = cljs.core.seq(seq__63341_68001);
if(temp__5720__auto___68016){
var seq__63341_68018__$1 = temp__5720__auto___68016;
if(cljs.core.chunked_seq_QMARK_(seq__63341_68018__$1)){
var c__4550__auto___68019 = cljs.core.chunk_first(seq__63341_68018__$1);
var G__68020 = cljs.core.chunk_rest(seq__63341_68018__$1);
var G__68021 = c__4550__auto___68019;
var G__68022 = cljs.core.count(c__4550__auto___68019);
var G__68023 = (0);
seq__63341_68001 = G__68020;
chunk__63342_68002 = G__68021;
count__63343_68003 = G__68022;
i__63344_68004 = G__68023;
continue;
} else {
var i_68026 = cljs.core.first(seq__63341_68018__$1);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),com.wsscode.pathom.misc.vconj(base_path,i_68026,o_68000)),e);


var G__68028 = cljs.core.next(seq__63341_68018__$1);
var G__68029 = null;
var G__68030 = (0);
var G__68031 = (0);
seq__63341_68001 = G__68028;
chunk__63342_68002 = G__68029;
count__63343_68003 = G__68030;
i__63344_68004 = G__68031;
continue;
}
} else {
}
}
break;
}

var G__68035 = seq__63333_67996;
var G__68036 = chunk__63338_67997;
var G__68037 = count__63339_67998;
var G__68038 = (i__63340_67999 + (1));
seq__63333_67996 = G__68035;
chunk__63338_67997 = G__68036;
count__63339_67998 = G__68037;
i__63340_67999 = G__68038;
continue;
} else {
var temp__5720__auto___68040 = cljs.core.seq(seq__63333_67996);
if(temp__5720__auto___68040){
var seq__63333_68041__$1 = temp__5720__auto___68040;
if(cljs.core.chunked_seq_QMARK_(seq__63333_68041__$1)){
var c__4550__auto___68042 = cljs.core.chunk_first(seq__63333_68041__$1);
var G__68043 = cljs.core.chunk_rest(seq__63333_68041__$1);
var G__68044 = c__4550__auto___68042;
var G__68045 = cljs.core.count(c__4550__auto___68042);
var G__68046 = (0);
seq__63333_67996 = G__68043;
chunk__63338_67997 = G__68044;
count__63339_67998 = G__68045;
i__63340_67999 = G__68046;
continue;
} else {
var o_68047 = cljs.core.first(seq__63333_68041__$1);
var seq__63334_68050 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(item_count));
var chunk__63335_68051 = null;
var count__63336_68052 = (0);
var i__63337_68053 = (0);
while(true){
if((i__63337_68053 < count__63336_68052)){
var i_68058 = chunk__63335_68051.cljs$core$IIndexed$_nth$arity$2(null,i__63337_68053);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),com.wsscode.pathom.misc.vconj(base_path,i_68058,o_68047)),e);


var G__68060 = seq__63334_68050;
var G__68061 = chunk__63335_68051;
var G__68062 = count__63336_68052;
var G__68063 = (i__63337_68053 + (1));
seq__63334_68050 = G__68060;
chunk__63335_68051 = G__68061;
count__63336_68052 = G__68062;
i__63337_68053 = G__68063;
continue;
} else {
var temp__5720__auto___68066__$1 = cljs.core.seq(seq__63334_68050);
if(temp__5720__auto___68066__$1){
var seq__63334_68067__$1 = temp__5720__auto___68066__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63334_68067__$1)){
var c__4550__auto___68069 = cljs.core.chunk_first(seq__63334_68067__$1);
var G__68070 = cljs.core.chunk_rest(seq__63334_68067__$1);
var G__68071 = c__4550__auto___68069;
var G__68072 = cljs.core.count(c__4550__auto___68069);
var G__68073 = (0);
seq__63334_68050 = G__68070;
chunk__63335_68051 = G__68071;
count__63336_68052 = G__68072;
i__63337_68053 = G__68073;
continue;
} else {
var i_68074 = cljs.core.first(seq__63334_68067__$1);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),com.wsscode.pathom.misc.vconj(base_path,i_68074,o_68047)),e);


var G__68075 = cljs.core.next(seq__63334_68067__$1);
var G__68076 = null;
var G__68077 = (0);
var G__68078 = (0);
seq__63334_68050 = G__68075;
chunk__63335_68051 = G__68076;
count__63336_68052 = G__68077;
i__63337_68053 = G__68078;
continue;
}
} else {
}
}
break;
}

var G__68079 = cljs.core.next(seq__63333_68041__$1);
var G__68080 = null;
var G__68081 = (0);
var G__68082 = (0);
seq__63333_67996 = G__68079;
chunk__63338_67997 = G__68080;
count__63339_67998 = G__68081;
i__63340_67999 = G__68082;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__63345){
var vec__63346 = p__63345;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63346,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63346,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,input,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),i);
}),cljs.core.PersistentArrayMap.EMPTY,inputs);
});
com.wsscode.pathom.connect.parallel_batch = (function com$wsscode$pathom$connect$parallel_batch(p__63353){
var map__63354 = p__63353;
var map__63354__$1 = (((((!((map__63354 == null))))?(((((map__63354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63354):map__63354);
var env = map__63354__$1;
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63354__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63354__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63354__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
var ch__53995__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__48839__auto___68085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache){
return (function (state_63841){
var state_val_63842 = (state_63841[(1)]);
if((state_val_63842 === (121))){
var inst_63751 = (state_63841[(7)]);
var inst_63761 = cljs.core.async.close_BANG_(inst_63751);
var state_63841__$1 = state_63841;
var statearr_63843_68086 = state_63841__$1;
(statearr_63843_68086[(2)] = inst_63761);

(statearr_63843_68086[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (65))){
var state_63841__$1 = state_63841;
var statearr_63844_68087 = state_63841__$1;
(statearr_63844_68087[(2)] = null);

(statearr_63844_68087[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (70))){
var inst_63570 = (state_63841[(8)]);
var state_63841__$1 = state_63841;
if(cljs.core.truth_(inst_63570)){
var statearr_63845_68089 = state_63841__$1;
(statearr_63845_68089[(1)] = (73));

} else {
var statearr_63846_68094 = state_63841__$1;
(statearr_63846_68094[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (62))){
var inst_63540 = cljs.core.PersistentHashMap.EMPTY;
var state_63841__$1 = state_63841;
var statearr_63847_68095 = state_63841__$1;
(statearr_63847_68095[(2)] = inst_63540);

(statearr_63847_68095[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (74))){
var inst_63574 = cljs.core.PersistentHashMap.EMPTY;
var state_63841__$1 = state_63841;
var statearr_63848_68096 = state_63841__$1;
(statearr_63848_68096[(2)] = inst_63574);

(statearr_63848_68096[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (110))){
var state_63841__$1 = state_63841;
var statearr_63849_68097 = state_63841__$1;
(statearr_63849_68097[(2)] = null);

(statearr_63849_68097[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (130))){
var inst_63767 = (state_63841[(9)]);
var inst_63786 = (state_63841[(10)]);
var inst_63782 = cljs.core.first(inst_63767);
var inst_63783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63782,(0),null);
var inst_63784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63782,(1),null);
var inst_63785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63784,(0),null);
var inst_63786__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63784,(1),null);
var state_63841__$1 = (function (){var statearr_63850 = state_63841;
(statearr_63850[(11)] = inst_63783);

(statearr_63850[(12)] = inst_63785);

(statearr_63850[(10)] = inst_63786__$1);

return statearr_63850;
})();
if(cljs.core.truth_(inst_63786__$1)){
var statearr_63851_68103 = state_63841__$1;
(statearr_63851_68103[(1)] = (132));

} else {
var statearr_63852_68104 = state_63841__$1;
(statearr_63852_68104[(1)] = (133));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (128))){
var inst_63804 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_63853_68106 = state_63841__$1;
(statearr_63853_68106[(2)] = inst_63804);

(statearr_63853_68106[(1)] = (119));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (7))){
var state_63841__$1 = state_63841;
var statearr_63854_68109 = state_63841__$1;
(statearr_63854_68109[(2)] = false);

(statearr_63854_68109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (59))){
var inst_63535 = (state_63841[(13)]);
var inst_63545 = cljs.core.async.close_BANG_(inst_63535);
var state_63841__$1 = state_63841;
var statearr_63855_68110 = state_63841__$1;
(statearr_63855_68110[(2)] = inst_63545);

(statearr_63855_68110[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (86))){
var state_63841__$1 = state_63841;
var statearr_63856_68111 = state_63841__$1;
(statearr_63856_68111[(2)] = false);

(statearr_63856_68111[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (20))){
var inst_63398 = (state_63841[(14)]);
var inst_63394 = (state_63841[(15)]);
var inst_63611 = (state_63841[(2)]);
var inst_63612 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_63394,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_63613 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_63398,inst_63612);
var state_63841__$1 = (function (){var statearr_63857 = state_63841;
(statearr_63857[(16)] = inst_63613);

return statearr_63857;
})();
var statearr_63858_68112 = state_63841__$1;
(statearr_63858_68112[(2)] = inst_63611);

(statearr_63858_68112[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (72))){
var inst_63551 = (state_63841[(17)]);
var inst_63581 = (state_63841[(2)]);
var inst_63582 = cljs.core.next(inst_63551);
var inst_63518 = inst_63582;
var inst_63519 = null;
var inst_63520 = (0);
var inst_63521 = (0);
var state_63841__$1 = (function (){var statearr_63862 = state_63841;
(statearr_63862[(18)] = inst_63521);

(statearr_63862[(19)] = inst_63518);

(statearr_63862[(20)] = inst_63581);

(statearr_63862[(21)] = inst_63520);

(statearr_63862[(22)] = inst_63519);

return statearr_63862;
})();
var statearr_63863_68113 = state_63841__$1;
(statearr_63863_68113[(2)] = null);

(statearr_63863_68113[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (58))){
var inst_63536 = (state_63841[(23)]);
var state_63841__$1 = state_63841;
if(cljs.core.truth_(inst_63536)){
var statearr_63864_68114 = state_63841__$1;
(statearr_63864_68114[(1)] = (61));

} else {
var statearr_63865_68115 = state_63841__$1;
(statearr_63865_68115[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (60))){
var inst_63521 = (state_63841[(18)]);
var inst_63518 = (state_63841[(19)]);
var inst_63520 = (state_63841[(21)]);
var inst_63519 = (state_63841[(22)]);
var inst_63547 = (state_63841[(2)]);
var inst_63548 = (inst_63521 + (1));
var tmp63859 = inst_63518;
var tmp63860 = inst_63520;
var tmp63861 = inst_63519;
var inst_63518__$1 = tmp63859;
var inst_63519__$1 = tmp63861;
var inst_63520__$1 = tmp63860;
var inst_63521__$1 = inst_63548;
var state_63841__$1 = (function (){var statearr_63866 = state_63841;
(statearr_63866[(18)] = inst_63521__$1);

(statearr_63866[(19)] = inst_63518__$1);

(statearr_63866[(24)] = inst_63547);

(statearr_63866[(21)] = inst_63520__$1);

(statearr_63866[(22)] = inst_63519__$1);

return statearr_63866;
})();
var statearr_63867_68117 = state_63841__$1;
(statearr_63867_68117[(2)] = null);

(statearr_63867_68117[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (27))){
var state_63841__$1 = state_63841;
var statearr_63868_68118 = state_63841__$1;
(statearr_63868_68118[(2)] = false);

(statearr_63868_68118[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (1))){
var state_63841__$1 = state_63841;
var statearr_63869_68119 = state_63841__$1;
(statearr_63869_68119[(2)] = null);

(statearr_63869_68119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (69))){
var inst_63585 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_63870_68120 = state_63841__$1;
(statearr_63870_68120[(2)] = inst_63585);

(statearr_63870_68120[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (101))){
var inst_63681 = (state_63841[(25)]);
var state_63841__$1 = state_63841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63841__$1,(104),inst_63681);
} else {
if((state_val_63842 === (24))){
var state_63841__$1 = state_63841;
var statearr_63871_68121 = state_63841__$1;
(statearr_63871_68121[(2)] = false);

(statearr_63871_68121[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (102))){
var inst_63681 = (state_63841[(25)]);
var inst_63688 = com.wsscode.async.async_cljs.promise_QMARK_(inst_63681);
var state_63841__$1 = state_63841;
if(cljs.core.truth_(inst_63688)){
var statearr_63872_68122 = state_63841__$1;
(statearr_63872_68122[(1)] = (105));

} else {
var statearr_63873_68123 = state_63841__$1;
(statearr_63873_68123[(1)] = (106));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (135))){
var inst_63786 = (state_63841[(10)]);
var state_63841__$1 = state_63841;
var statearr_63874_68124 = state_63841__$1;
(statearr_63874_68124[(2)] = inst_63786);

(statearr_63874_68124[(1)] = (137));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (55))){
var inst_63521 = (state_63841[(18)]);
var inst_63536 = (state_63841[(23)]);
var inst_63519 = (state_63841[(22)]);
var inst_63532 = cljs.core._nth(inst_63519,inst_63521);
var inst_63533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63532,(0),null);
var inst_63534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63532,(1),null);
var inst_63535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63534,(0),null);
var inst_63536__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63534,(1),null);
var state_63841__$1 = (function (){var statearr_63875 = state_63841;
(statearr_63875[(26)] = inst_63533);

(statearr_63875[(13)] = inst_63535);

(statearr_63875[(23)] = inst_63536__$1);

return statearr_63875;
})();
if(cljs.core.truth_(inst_63536__$1)){
var statearr_63876_68126 = state_63841__$1;
(statearr_63876_68126[(1)] = (58));

} else {
var statearr_63877_68127 = state_63841__$1;
(statearr_63877_68127[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (85))){
var inst_63642 = (state_63841[(27)]);
var inst_63647 = inst_63642.cljs$lang$protocol_mask$partition0$;
var inst_63648 = (inst_63647 & (64));
var inst_63649 = inst_63642.cljs$core$ISeq$;
var inst_63650 = (cljs.core.PROTOCOL_SENTINEL === inst_63649);
var inst_63651 = ((inst_63648) || (inst_63650));
var state_63841__$1 = state_63841;
if(cljs.core.truth_(inst_63651)){
var statearr_63878_68128 = state_63841__$1;
(statearr_63878_68128[(1)] = (88));

} else {
var statearr_63879_68129 = state_63841__$1;
(statearr_63879_68129[(1)] = (89));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (39))){
var inst_63465 = (state_63841[(28)]);
var state_63841__$1 = state_63841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63841__$1,(42),inst_63465);
} else {
if((state_val_63842 === (88))){
var state_63841__$1 = state_63841;
var statearr_63880_68130 = state_63841__$1;
(statearr_63880_68130[(2)] = true);

(statearr_63880_68130[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (46))){
var inst_63476 = (state_63841[(2)]);
var inst_63477 = com.wsscode.async.async_cljs.consumer_pair(inst_63476);
var state_63841__$1 = state_63841;
var statearr_63881_68131 = state_63841__$1;
(statearr_63881_68131[(2)] = inst_63477);

(statearr_63881_68131[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (4))){
var inst_63356 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_63882_68132 = state_63841__$1;
(statearr_63882_68132[(2)] = inst_63356);

(statearr_63882_68132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (77))){
var inst_63388 = (state_63841[(29)]);
var inst_63500 = (state_63841[(30)]);
var inst_63602 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63603 = cljs.core.PersistentHashMap.EMPTY;
var inst_63604 = [null,inst_63603];
var inst_63605 = (new cljs.core.PersistentVector(null,2,(5),inst_63602,inst_63604,null));
var inst_63606 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_63500,inst_63388,inst_63605);
var inst_63607 = cljs.core.second(inst_63606);
var state_63841__$1 = state_63841;
var statearr_63883_68133 = state_63841__$1;
(statearr_63883_68133[(2)] = inst_63607);

(statearr_63883_68133[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (106))){
var state_63841__$1 = state_63841;
var statearr_63884_68134 = state_63841__$1;
(statearr_63884_68134[(1)] = (109));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (119))){
var inst_63806 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_63886_68135 = state_63841__$1;
(statearr_63886_68135[(2)] = inst_63806);

(statearr_63886_68135[(1)] = (116));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (95))){
var state_63841__$1 = state_63841;
var statearr_63887_68136 = state_63841__$1;
(statearr_63887_68136[(2)] = null);

(statearr_63887_68136[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (144))){
var inst_63839 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63841__$1,inst_63839);
} else {
if((state_val_63842 === (54))){
var inst_63388 = (state_63841[(29)]);
var inst_63501 = (state_63841[(31)]);
var inst_63592 = (state_63841[(2)]);
var inst_63593 = cljs.core.contains_QMARK_(inst_63501,inst_63388);
var state_63841__$1 = (function (){var statearr_63888 = state_63841;
(statearr_63888[(32)] = inst_63592);

return statearr_63888;
})();
if(inst_63593){
var statearr_63889_68137 = state_63841__$1;
(statearr_63889_68137[(1)] = (76));

} else {
var statearr_63890_68138 = state_63841__$1;
(statearr_63890_68138[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (92))){
var inst_63642 = (state_63841[(27)]);
var state_63841__$1 = state_63841;
var statearr_63891_68139 = state_63841__$1;
(statearr_63891_68139[(2)] = inst_63642);

(statearr_63891_68139[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (141))){
var inst_63816 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_63892_68140 = state_63841__$1;
(statearr_63892_68140[(2)] = inst_63816);

(statearr_63892_68140[(1)] = (140));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (137))){
var inst_63785 = (state_63841[(12)]);
var inst_63792 = (state_63841[(2)]);
var inst_63793 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_63785,inst_63792);
var state_63841__$1 = state_63841;
var statearr_63893_68141 = state_63841__$1;
(statearr_63893_68141[(2)] = inst_63793);

(statearr_63893_68141[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (104))){
var inst_63685 = (state_63841[(2)]);
var inst_63686 = com.wsscode.async.async_cljs.throw_err(inst_63685);
var state_63841__$1 = state_63841;
var statearr_63894_68142 = state_63841__$1;
(statearr_63894_68142[(2)] = inst_63686);

(statearr_63894_68142[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (15))){
var inst_63391 = (state_63841[(33)]);
var inst_63388 = (state_63841[(29)]);
var inst_63385 = (state_63841[(34)]);
var inst_63394 = (state_63841[(15)]);
var inst_63397 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_63394,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_63398 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_63397);
var inst_63399 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63400 = [inst_63385,inst_63388,inst_63391];
var inst_63401 = (new cljs.core.PersistentVector(null,3,(5),inst_63399,inst_63400,null));
var inst_63402 = com.wsscode.pathom.core.cache_contains_QMARK_(env,inst_63401);
var state_63841__$1 = (function (){var statearr_63895 = state_63841;
(statearr_63895[(14)] = inst_63398);

return statearr_63895;
})();
if(inst_63402){
var statearr_63896_68143 = state_63841__$1;
(statearr_63896_68143[(1)] = (18));

} else {
var statearr_63897_68144 = state_63841__$1;
(statearr_63897_68144[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (48))){
var state_63841__$1 = state_63841;
var statearr_63898_68145 = state_63841__$1;
(statearr_63898_68145[(2)] = null);

(statearr_63898_68145[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (50))){
var inst_63391 = (state_63841[(33)]);
var inst_63493 = (state_63841[(35)]);
var inst_63422 = (state_63841[(36)]);
var inst_63498 = (state_63841[(37)]);
var inst_63449 = (state_63841[(38)]);
var inst_63398 = (state_63841[(14)]);
var inst_63388 = (state_63841[(29)]);
var inst_63385 = (state_63841[(34)]);
var inst_63390 = (state_63841[(39)]);
var inst_63455 = (state_63841[(40)]);
var inst_63448 = (state_63841[(41)]);
var inst_63394 = (state_63841[(15)]);
var inst_63501 = (state_63841[(31)]);
var inst_63423 = (state_63841[(42)]);
var inst_63447 = (state_63841[(43)]);
var inst_63384 = (state_63841[(44)]);
var inst_63500 = (state_63841[(30)]);
var inst_63386 = (state_63841[(45)]);
var inst_63508 = (function (){var input = inst_63386;
var items_map = inst_63423;
var map__63362 = inst_63384;
var cached = inst_63448;
var cached_set = inst_63501;
var linked_results = inst_63500;
var key = inst_63390;
var map__63411 = inst_63447;
var channels = inst_63455;
var _ = inst_63498;
var params = inst_63391;
var uncached = inst_63449;
var trace_id__27500__auto__ = inst_63398;
var e = inst_63388;
var resolver_sym = inst_63385;
var trace_data = inst_63394;
var valid_inputs = inst_63422;
var batch_result = inst_63493;
return ((function (input,items_map,map__63362,cached,cached_set,linked_results,key,map__63411,channels,_,params,uncached,trace_id__27500__auto__,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_63391,inst_63493,inst_63422,inst_63498,inst_63449,inst_63398,inst_63388,inst_63385,inst_63390,inst_63455,inst_63448,inst_63394,inst_63501,inst_63423,inst_63447,inst_63384,inst_63500,inst_63386,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap(cache){
var path__$1 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),(cljs.core.count(path) - (2)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path__$1,input,items_map,map__63362,cached,cached_set,linked_results,key,map__63411,channels,_,params,uncached,trace_id__27500__auto__,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_63391,inst_63493,inst_63422,inst_63498,inst_63449,inst_63398,inst_63388,inst_63385,inst_63390,inst_63455,inst_63448,inst_63394,inst_63501,inst_63423,inst_63447,inst_63384,inst_63500,inst_63386,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce(cache__$1,p__63899){
var vec__63900 = p__63899;
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63900,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63900,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__63900,item,result,path__$1,input,items_map,map__63362,cached,cached_set,linked_results,key,map__63411,channels,_,params,uncached,trace_id__27500__auto__,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_63391,inst_63493,inst_63422,inst_63498,inst_63449,inst_63398,inst_63388,inst_63385,inst_63390,inst_63455,inst_63448,inst_63394,inst_63501,inst_63423,inst_63447,inst_63384,inst_63500,inst_63386,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce_$_entity_path_inner_reduce(cache__$2,index){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cache__$2,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,index),((function (vec__63900,item,result,path__$1,input,items_map,map__63362,cached,cached_set,linked_results,key,map__63411,channels,_,params,uncached,trace_id__27500__auto__,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_63391,inst_63493,inst_63422,inst_63498,inst_63449,inst_63398,inst_63388,inst_63385,inst_63390,inst_63455,inst_63448,inst_63394,inst_63501,inst_63423,inst_63447,inst_63384,inst_63500,inst_63386,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__63352_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result,p1__63352_SHARP_], 0));
});})(vec__63900,item,result,path__$1,input,items_map,map__63362,cached,cached_set,linked_results,key,map__63411,channels,_,params,uncached,trace_id__27500__auto__,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_63391,inst_63493,inst_63422,inst_63498,inst_63449,inst_63398,inst_63388,inst_63385,inst_63390,inst_63455,inst_63448,inst_63394,inst_63501,inst_63423,inst_63447,inst_63384,inst_63500,inst_63386,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache))
);
});})(vec__63900,item,result,path__$1,input,items_map,map__63362,cached,cached_set,linked_results,key,map__63411,channels,_,params,uncached,trace_id__27500__auto__,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_63391,inst_63493,inst_63422,inst_63498,inst_63449,inst_63398,inst_63388,inst_63385,inst_63390,inst_63455,inst_63448,inst_63394,inst_63501,inst_63423,inst_63447,inst_63384,inst_63500,inst_63386,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache))
,cache__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_map,item));
});})(path__$1,input,items_map,map__63362,cached,cached_set,linked_results,key,map__63411,channels,_,params,uncached,trace_id__27500__auto__,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_63391,inst_63493,inst_63422,inst_63498,inst_63449,inst_63398,inst_63388,inst_63385,inst_63390,inst_63455,inst_63448,inst_63394,inst_63501,inst_63423,inst_63447,inst_63384,inst_63500,inst_63386,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache))
,cache,cljs.core.zipmap(uncached,batch_result));
});
;})(input,items_map,map__63362,cached,cached_set,linked_results,key,map__63411,channels,_,params,uncached,trace_id__27500__auto__,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_63391,inst_63493,inst_63422,inst_63498,inst_63449,inst_63398,inst_63388,inst_63385,inst_63390,inst_63455,inst_63448,inst_63394,inst_63501,inst_63423,inst_63447,inst_63384,inst_63500,inst_63386,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_63509 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(entity_path_cache,inst_63508);
var state_63841__$1 = state_63841;
var statearr_63903_68175 = state_63841__$1;
(statearr_63903_68175[(2)] = inst_63509);

(statearr_63903_68175[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (116))){
var inst_63388 = (state_63841[(29)]);
var inst_63717 = (state_63841[(46)]);
var inst_63808 = (state_63841[(2)]);
var inst_63809 = cljs.core.contains_QMARK_(inst_63717,inst_63388);
var state_63841__$1 = (function (){var statearr_63904 = state_63841;
(statearr_63904[(47)] = inst_63808);

return statearr_63904;
})();
if(inst_63809){
var statearr_63905_68177 = state_63841__$1;
(statearr_63905_68177[(1)] = (138));

} else {
var statearr_63906_68178 = state_63841__$1;
(statearr_63906_68178[(1)] = (139));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (75))){
var inst_63569 = (state_63841[(48)]);
var inst_63576 = (state_63841[(2)]);
var inst_63577 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_63569,inst_63576);
var state_63841__$1 = state_63841;
var statearr_63907_68179 = state_63841__$1;
(statearr_63907_68179[(2)] = inst_63577);

(statearr_63907_68179[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (99))){
var inst_63674 = (state_63841[(2)]);
var inst_63675 = com.wsscode.pathom.connect.parallel_batch_error(env,inst_63674);
var state_63841__$1 = state_63841;
var statearr_63908_68180 = state_63841__$1;
(statearr_63908_68180[(2)] = inst_63675);

(statearr_63908_68180[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (21))){
var inst_63409 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_63909_68181 = state_63841__$1;
(statearr_63909_68181[(2)] = inst_63409);

(statearr_63909_68181[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (31))){
var inst_63391 = (state_63841[(33)]);
var inst_63422 = (state_63841[(36)]);
var inst_63449 = (state_63841[(38)]);
var inst_63398 = (state_63841[(14)]);
var inst_63388 = (state_63841[(29)]);
var inst_63385 = (state_63841[(34)]);
var inst_63390 = (state_63841[(39)]);
var inst_63448 = (state_63841[(41)]);
var inst_63394 = (state_63841[(15)]);
var inst_63423 = (state_63841[(42)]);
var inst_63447 = (state_63841[(43)]);
var inst_63384 = (state_63841[(44)]);
var inst_63386 = (state_63841[(45)]);
var inst_63447__$1 = (state_63841[(2)]);
var inst_63448__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63447__$1,true);
var inst_63449__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63447__$1,false);
var inst_63450 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_63451 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_63449__$1];
var inst_63452 = cljs.core.PersistentHashMap.fromArrays(inst_63450,inst_63451);
var inst_63453 = com.wsscode.pathom.trace.trace(env,inst_63452);
var inst_63454 = (function (){var input = inst_63386;
var items_map = inst_63423;
var map__63362 = inst_63384;
var cached = inst_63448__$1;
var key = inst_63390;
var map__63411 = inst_63447__$1;
var _ = inst_63453;
var params = inst_63391;
var uncached = inst_63449__$1;
var trace_id__27500__auto__ = inst_63398;
var e = inst_63388;
var resolver_sym = inst_63385;
var trace_data = inst_63394;
var valid_inputs = inst_63422;
return ((function (input,items_map,map__63362,cached,key,map__63411,_,params,uncached,trace_id__27500__auto__,e,resolver_sym,trace_data,valid_inputs,inst_63391,inst_63422,inst_63449,inst_63398,inst_63388,inst_63385,inst_63390,inst_63448,inst_63394,inst_63423,inst_63447,inst_63384,inst_63386,inst_63447__$1,inst_63448__$1,inst_63449__$1,inst_63450,inst_63451,inst_63452,inst_63453,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache){
return (function (resolver_input){
var ch = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.core.cache_hit(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,resolver_input,params], null),ch);

return ch;
});
;})(input,items_map,map__63362,cached,key,map__63411,_,params,uncached,trace_id__27500__auto__,e,resolver_sym,trace_data,valid_inputs,inst_63391,inst_63422,inst_63449,inst_63398,inst_63388,inst_63385,inst_63390,inst_63448,inst_63394,inst_63423,inst_63447,inst_63384,inst_63386,inst_63447__$1,inst_63448__$1,inst_63449__$1,inst_63450,inst_63451,inst_63452,inst_63453,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_63455 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_63454,inst_63449__$1);
var inst_63456 = cljs.core.seq(inst_63449__$1);
var state_63841__$1 = (function (){var statearr_63910 = state_63841;
(statearr_63910[(38)] = inst_63449__$1);

(statearr_63910[(40)] = inst_63455);

(statearr_63910[(41)] = inst_63448__$1);

(statearr_63910[(43)] = inst_63447__$1);

return statearr_63910;
})();
if(inst_63456){
var statearr_63911_68196 = state_63841__$1;
(statearr_63911_68196[(1)] = (32));

} else {
var statearr_63912_68197 = state_63841__$1;
(statearr_63912_68197[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (113))){
var state_63841__$1 = state_63841;
var statearr_63913_68198 = state_63841__$1;
(statearr_63913_68198[(2)] = null);

(statearr_63913_68198[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (32))){
var state_63841__$1 = state_63841;
var statearr_63914_68200 = state_63841__$1;
(statearr_63914_68200[(2)] = null);

(statearr_63914_68200[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (136))){
var inst_63790 = cljs.core.PersistentHashMap.EMPTY;
var state_63841__$1 = state_63841;
var statearr_63915_68204 = state_63841__$1;
(statearr_63915_68204[(2)] = inst_63790);

(statearr_63915_68204[(1)] = (137));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (139))){
var inst_63716 = (state_63841[(49)]);
var inst_63388 = (state_63841[(29)]);
var inst_63818 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63819 = cljs.core.PersistentHashMap.EMPTY;
var inst_63820 = [null,inst_63819];
var inst_63821 = (new cljs.core.PersistentVector(null,2,(5),inst_63818,inst_63820,null));
var inst_63822 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_63716,inst_63388,inst_63821);
var inst_63823 = cljs.core.second(inst_63822);
var state_63841__$1 = state_63841;
var statearr_63916_68213 = state_63841__$1;
(statearr_63916_68213[(2)] = inst_63823);

(statearr_63916_68213[(1)] = (140));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (40))){
var inst_63465 = (state_63841[(28)]);
var inst_63472 = com.wsscode.async.async_cljs.promise_QMARK_(inst_63465);
var state_63841__$1 = state_63841;
if(cljs.core.truth_(inst_63472)){
var statearr_63917_68215 = state_63841__$1;
(statearr_63917_68215[(1)] = (43));

} else {
var statearr_63918_68217 = state_63841__$1;
(statearr_63918_68217[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (129))){
var inst_63767 = (state_63841[(9)]);
var inst_63771 = cljs.core.chunk_first(inst_63767);
var inst_63772 = cljs.core.chunk_rest(inst_63767);
var inst_63773 = cljs.core.count(inst_63771);
var inst_63734 = inst_63772;
var inst_63735 = inst_63771;
var inst_63736 = inst_63773;
var inst_63737 = (0);
var state_63841__$1 = (function (){var statearr_63919 = state_63841;
(statearr_63919[(50)] = inst_63735);

(statearr_63919[(51)] = inst_63736);

(statearr_63919[(52)] = inst_63737);

(statearr_63919[(53)] = inst_63734);

return statearr_63919;
})();
var statearr_63920_68223 = state_63841__$1;
(statearr_63920_68223[(2)] = null);

(statearr_63920_68223[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (91))){
var inst_63642 = (state_63841[(27)]);
var inst_63660 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_63642);
var state_63841__$1 = state_63841;
var statearr_63921_68225 = state_63841__$1;
(statearr_63921_68225[(2)] = inst_63660);

(statearr_63921_68225[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (117))){
var inst_63735 = (state_63841[(50)]);
var inst_63752 = (state_63841[(54)]);
var inst_63737 = (state_63841[(52)]);
var inst_63748 = cljs.core._nth(inst_63735,inst_63737);
var inst_63749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63748,(0),null);
var inst_63750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63748,(1),null);
var inst_63751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63750,(0),null);
var inst_63752__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63750,(1),null);
var state_63841__$1 = (function (){var statearr_63922 = state_63841;
(statearr_63922[(55)] = inst_63749);

(statearr_63922[(7)] = inst_63751);

(statearr_63922[(54)] = inst_63752__$1);

return statearr_63922;
})();
if(cljs.core.truth_(inst_63752__$1)){
var statearr_63923_68227 = state_63841__$1;
(statearr_63923_68227[(1)] = (120));

} else {
var statearr_63924_68228 = state_63841__$1;
(statearr_63924_68228[(1)] = (121));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (108))){
var inst_63692 = (state_63841[(2)]);
var inst_63693 = com.wsscode.async.async_cljs.consumer_pair(inst_63692);
var state_63841__$1 = state_63841;
var statearr_63925_68229 = state_63841__$1;
(statearr_63925_68229[(2)] = inst_63693);

(statearr_63925_68229[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (56))){
var inst_63518 = (state_63841[(19)]);
var inst_63551 = (state_63841[(17)]);
var inst_63551__$1 = cljs.core.seq(inst_63518);
var state_63841__$1 = (function (){var statearr_63926 = state_63841;
(statearr_63926[(17)] = inst_63551__$1);

return statearr_63926;
})();
if(inst_63551__$1){
var statearr_63927_68235 = state_63841__$1;
(statearr_63927_68235[(1)] = (64));

} else {
var statearr_63928_68236 = state_63841__$1;
(statearr_63928_68236[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (33))){
var state_63841__$1 = state_63841;
var statearr_63929_68238 = state_63841__$1;
(statearr_63929_68238[(2)] = null);

(statearr_63929_68238[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (13))){
var inst_63363 = (state_63841[(56)]);
var state_63841__$1 = state_63841;
var statearr_63930_68239 = state_63841__$1;
(statearr_63930_68239[(2)] = inst_63363);

(statearr_63930_68239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (22))){
var inst_63391 = (state_63841[(33)]);
var inst_63422 = (state_63841[(36)]);
var inst_63412 = (state_63841[(57)]);
var inst_63426 = (state_63841[(58)]);
var inst_63398 = (state_63841[(14)]);
var inst_63388 = (state_63841[(29)]);
var inst_63385 = (state_63841[(34)]);
var inst_63416 = (state_63841[(59)]);
var inst_63390 = (state_63841[(39)]);
var inst_63394 = (state_63841[(15)]);
var inst_63423 = (state_63841[(42)]);
var inst_63384 = (state_63841[(44)]);
var inst_63386 = (state_63841[(45)]);
var inst_63420 = (state_63841[(2)]);
var inst_63421 = com.wsscode.async.async_cljs.throw_err(inst_63420);
var inst_63422__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_63412,inst_63416,inst_63421);
var inst_63423__$1 = com.wsscode.pathom.connect.group_input_indexes(inst_63422__$1);
var inst_63424 = (function (){var input = inst_63386;
var items_map = inst_63423__$1;
var map__63362 = inst_63384;
var key = inst_63390;
var params = inst_63391;
var trace_id__27500__auto__ = inst_63398;
var e = inst_63388;
var resolver_sym = inst_63385;
var trace_data = inst_63394;
var valid_inputs = inst_63422__$1;
return ((function (input,items_map,map__63362,key,params,trace_id__27500__auto__,e,resolver_sym,trace_data,valid_inputs,inst_63391,inst_63422,inst_63412,inst_63426,inst_63398,inst_63388,inst_63385,inst_63416,inst_63390,inst_63394,inst_63423,inst_63384,inst_63386,inst_63420,inst_63421,inst_63422__$1,inst_63423__$1,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__63351_SHARP_){
return com.wsscode.pathom.core.cache_contains_QMARK_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,p1__63351_SHARP_,params], null));
});
;})(input,items_map,map__63362,key,params,trace_id__27500__auto__,e,resolver_sym,trace_data,valid_inputs,inst_63391,inst_63422,inst_63412,inst_63426,inst_63398,inst_63388,inst_63385,inst_63416,inst_63390,inst_63394,inst_63423,inst_63384,inst_63386,inst_63420,inst_63421,inst_63422__$1,inst_63423__$1,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_63425 = cljs.core.keys(inst_63423__$1);
var inst_63426__$1 = cljs.core.group_by(inst_63424,inst_63425);
var inst_63428 = (inst_63426__$1 == null);
var inst_63429 = cljs.core.not(inst_63428);
var state_63841__$1 = (function (){var statearr_63931 = state_63841;
(statearr_63931[(36)] = inst_63422__$1);

(statearr_63931[(58)] = inst_63426__$1);

(statearr_63931[(42)] = inst_63423__$1);

return statearr_63931;
})();
if(inst_63429){
var statearr_63932_68256 = state_63841__$1;
(statearr_63932_68256[(1)] = (23));

} else {
var statearr_63933_68257 = state_63841__$1;
(statearr_63933_68257[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (90))){
var inst_63655 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_63934_68259 = state_63841__$1;
(statearr_63934_68259[(2)] = inst_63655);

(statearr_63934_68259[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (109))){
var inst_63681 = (state_63841[(25)]);
var state_63841__$1 = state_63841;
var statearr_63935_68260 = state_63841__$1;
(statearr_63935_68260[(2)] = inst_63681);

(statearr_63935_68260[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (143))){
var inst_63832 = (state_63841[(60)]);
var inst_63837 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53995__auto__,inst_63832);
var state_63841__$1 = state_63841;
var statearr_63936_68265 = state_63841__$1;
(statearr_63936_68265[(2)] = inst_63837);

(statearr_63936_68265[(1)] = (144));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (36))){
var inst_63490 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_63937_68266 = state_63841__$1;
(statearr_63937_68266[(2)] = inst_63490);

(statearr_63937_68266[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (41))){
var inst_63486 = (state_63841[(2)]);
var inst_63487 = com.wsscode.async.async_cljs.throw_err(inst_63486);
var _ = (function (){var statearr_63938 = state_63841;
(statearr_63938[(4)] = cljs.core.rest((state_63841[(4)])));

return statearr_63938;
})();
var state_63841__$1 = state_63841;
var statearr_63939_68272 = state_63841__$1;
(statearr_63939_68272[(2)] = inst_63487);

(statearr_63939_68272[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (118))){
var inst_63767 = (state_63841[(9)]);
var inst_63734 = (state_63841[(53)]);
var inst_63767__$1 = cljs.core.seq(inst_63734);
var state_63841__$1 = (function (){var statearr_63941 = state_63841;
(statearr_63941[(9)] = inst_63767__$1);

return statearr_63941;
})();
if(inst_63767__$1){
var statearr_63942_68279 = state_63841__$1;
(statearr_63942_68279[(1)] = (126));

} else {
var statearr_63943_68280 = state_63841__$1;
(statearr_63943_68280[(1)] = (127));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (89))){
var state_63841__$1 = state_63841;
var statearr_63944_68282 = state_63841__$1;
(statearr_63944_68282[(2)] = false);

(statearr_63944_68282[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (100))){
var _ = (function (){var statearr_63948 = state_63841;
(statearr_63948[(4)] = cljs.core.rest((state_63841[(4)])));

return statearr_63948;
})();
var state_63841__$1 = state_63841;
var ex63940 = (state_63841__$1[(2)]);
var statearr_63949_68287 = state_63841__$1;
(statearr_63949_68287[(5)] = ex63940);


var statearr_63950_68288 = state_63841__$1;
(statearr_63950_68288[(1)] = (99));

(statearr_63950_68288[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (131))){
var inst_63801 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_63951_68292 = state_63841__$1;
(statearr_63951_68292[(2)] = inst_63801);

(statearr_63951_68292[(1)] = (128));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (122))){
var inst_63735 = (state_63841[(50)]);
var inst_63736 = (state_63841[(51)]);
var inst_63737 = (state_63841[(52)]);
var inst_63734 = (state_63841[(53)]);
var inst_63763 = (state_63841[(2)]);
var inst_63764 = (inst_63737 + (1));
var tmp63945 = inst_63735;
var tmp63946 = inst_63736;
var tmp63947 = inst_63734;
var inst_63734__$1 = tmp63947;
var inst_63735__$1 = tmp63945;
var inst_63736__$1 = tmp63946;
var inst_63737__$1 = inst_63764;
var state_63841__$1 = (function (){var statearr_63952 = state_63841;
(statearr_63952[(61)] = inst_63763);

(statearr_63952[(50)] = inst_63735__$1);

(statearr_63952[(51)] = inst_63736__$1);

(statearr_63952[(52)] = inst_63737__$1);

(statearr_63952[(53)] = inst_63734__$1);

return statearr_63952;
})();
var statearr_63953_68302 = state_63841__$1;
(statearr_63953_68302[(2)] = null);

(statearr_63953_68302[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (43))){
var inst_63465 = (state_63841[(28)]);
var inst_63474 = com.wsscode.async.async_cljs.promise__GT_chan(inst_63465);
var state_63841__$1 = state_63841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63841__$1,(46),inst_63474);
} else {
if((state_val_63842 === (61))){
var inst_63536 = (state_63841[(23)]);
var state_63841__$1 = state_63841;
var statearr_63954_68303 = state_63841__$1;
(statearr_63954_68303[(2)] = inst_63536);

(statearr_63954_68303[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (29))){
var inst_63426 = (state_63841[(58)]);
var inst_63444 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_63426);
var state_63841__$1 = state_63841;
var statearr_63955_68304 = state_63841__$1;
(statearr_63955_68304[(2)] = inst_63444);

(statearr_63955_68304[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (44))){
var state_63841__$1 = state_63841;
var statearr_63956_68305 = state_63841__$1;
(statearr_63956_68305[(1)] = (47));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (93))){
var inst_63638 = (state_63841[(62)]);
var inst_63391 = (state_63841[(33)]);
var inst_63388 = (state_63841[(29)]);
var inst_63663 = (state_63841[(63)]);
var inst_63639 = (state_63841[(64)]);
var inst_63385 = (state_63841[(34)]);
var inst_63390 = (state_63841[(39)]);
var inst_63665 = (state_63841[(65)]);
var inst_63664 = (state_63841[(66)]);
var inst_63394 = (state_63841[(15)]);
var inst_63384 = (state_63841[(44)]);
var inst_63386 = (state_63841[(45)]);
var inst_63663__$1 = (state_63841[(2)]);
var inst_63664__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63663__$1,true);
var inst_63665__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63663__$1,false);
var inst_63666 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_63667 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_63665__$1];
var inst_63668 = cljs.core.PersistentHashMap.fromArrays(inst_63666,inst_63667);
var inst_63669 = com.wsscode.pathom.trace.trace(env,inst_63668);
var inst_63670 = (function (){var input = inst_63386;
var items_map = inst_63639;
var map__63627 = inst_63663__$1;
var map__63362 = inst_63384;
var cached = inst_63664__$1;
var key = inst_63390;
var _ = inst_63669;
var params = inst_63391;
var uncached = inst_63665__$1;
var e = inst_63388;
var resolver_sym = inst_63385;
var trace_data = inst_63394;
var valid_inputs = inst_63638;
return ((function (input,items_map,map__63627,map__63362,cached,key,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,inst_63638,inst_63391,inst_63388,inst_63663,inst_63639,inst_63385,inst_63390,inst_63665,inst_63664,inst_63394,inst_63384,inst_63386,inst_63663__$1,inst_63664__$1,inst_63665__$1,inst_63666,inst_63667,inst_63668,inst_63669,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache){
return (function (resolver_input){
var ch = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.core.cache_hit(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,resolver_input,params], null),ch);

return ch;
});
;})(input,items_map,map__63627,map__63362,cached,key,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,inst_63638,inst_63391,inst_63388,inst_63663,inst_63639,inst_63385,inst_63390,inst_63665,inst_63664,inst_63394,inst_63384,inst_63386,inst_63663__$1,inst_63664__$1,inst_63665__$1,inst_63666,inst_63667,inst_63668,inst_63669,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_63671 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_63670,inst_63665__$1);
var inst_63672 = cljs.core.seq(inst_63665__$1);
var state_63841__$1 = (function (){var statearr_63958 = state_63841;
(statearr_63958[(63)] = inst_63663__$1);

(statearr_63958[(67)] = inst_63671);

(statearr_63958[(65)] = inst_63665__$1);

(statearr_63958[(66)] = inst_63664__$1);

return statearr_63958;
})();
if(inst_63672){
var statearr_63959_68313 = state_63841__$1;
(statearr_63959_68313[(1)] = (94));

} else {
var statearr_63960_68314 = state_63841__$1;
(statearr_63960_68314[(1)] = (95));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (6))){
var inst_63363 = (state_63841[(56)]);
var inst_63368 = inst_63363.cljs$lang$protocol_mask$partition0$;
var inst_63369 = (inst_63368 & (64));
var inst_63370 = inst_63363.cljs$core$ISeq$;
var inst_63371 = (cljs.core.PROTOCOL_SENTINEL === inst_63370);
var inst_63372 = ((inst_63369) || (inst_63371));
var state_63841__$1 = state_63841;
if(cljs.core.truth_(inst_63372)){
var statearr_63961_68315 = state_63841__$1;
(statearr_63961_68315[(1)] = (9));

} else {
var statearr_63962_68316 = state_63841__$1;
(statearr_63962_68316[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (111))){
var inst_63698 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_63963_68317 = state_63841__$1;
(statearr_63963_68317[(2)] = inst_63698);

(statearr_63963_68317[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (28))){
var inst_63439 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_63964_68319 = state_63841__$1;
(statearr_63964_68319[(2)] = inst_63439);

(statearr_63964_68319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (134))){
var inst_63767 = (state_63841[(9)]);
var inst_63797 = (state_63841[(2)]);
var inst_63798 = cljs.core.next(inst_63767);
var inst_63734 = inst_63798;
var inst_63735 = null;
var inst_63736 = (0);
var inst_63737 = (0);
var state_63841__$1 = (function (){var statearr_63965 = state_63841;
(statearr_63965[(50)] = inst_63735);

(statearr_63965[(51)] = inst_63736);

(statearr_63965[(52)] = inst_63737);

(statearr_63965[(68)] = inst_63797);

(statearr_63965[(53)] = inst_63734);

return statearr_63965;
})();
var statearr_63966_68323 = state_63841__$1;
(statearr_63966_68323[(2)] = null);

(statearr_63966_68323[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (64))){
var inst_63551 = (state_63841[(17)]);
var inst_63553 = cljs.core.chunked_seq_QMARK_(inst_63551);
var state_63841__$1 = state_63841;
if(inst_63553){
var statearr_63967_68326 = state_63841__$1;
(statearr_63967_68326[(1)] = (67));

} else {
var statearr_63968_68327 = state_63841__$1;
(statearr_63968_68327[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (103))){
var inst_63702 = (state_63841[(2)]);
var inst_63703 = com.wsscode.async.async_cljs.throw_err(inst_63702);
var _ = (function (){var statearr_63969 = state_63841;
(statearr_63969[(4)] = cljs.core.rest((state_63841[(4)])));

return statearr_63969;
})();
var state_63841__$1 = state_63841;
var statearr_63970_68328 = state_63841__$1;
(statearr_63970_68328[(2)] = inst_63703);

(statearr_63970_68328[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (51))){
var state_63841__$1 = state_63841;
var statearr_63971_68331 = state_63841__$1;
(statearr_63971_68331[(2)] = null);

(statearr_63971_68331[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (25))){
var inst_63442 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
if(cljs.core.truth_(inst_63442)){
var statearr_63972_68332 = state_63841__$1;
(statearr_63972_68332[(1)] = (29));

} else {
var statearr_63973_68333 = state_63841__$1;
(statearr_63973_68333[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (34))){
var inst_63493 = (state_63841[(35)]);
var inst_63449 = (state_63841[(38)]);
var inst_63455 = (state_63841[(40)]);
var inst_63448 = (state_63841[(41)]);
var inst_63493__$1 = (state_63841[(2)]);
var inst_63494 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_63495 = cljs.core.count(inst_63493__$1);
var inst_63496 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_63495];
var inst_63497 = cljs.core.PersistentHashMap.fromArrays(inst_63494,inst_63496);
var inst_63498 = com.wsscode.pathom.trace.trace(env,inst_63497);
var inst_63499 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_63455,inst_63493__$1);
var inst_63500 = cljs.core.zipmap(inst_63449,inst_63499);
var inst_63501 = cljs.core.set(inst_63448);
var inst_63502 = cljs.core.first(inst_63493__$1);
var inst_63503 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_63502);
var inst_63504 = cljs.core.count(path);
var inst_63505 = (inst_63504 >= (2));
var inst_63506 = ((inst_63503) && (inst_63505));
var state_63841__$1 = (function (){var statearr_63974 = state_63841;
(statearr_63974[(35)] = inst_63493__$1);

(statearr_63974[(37)] = inst_63498);

(statearr_63974[(31)] = inst_63501);

(statearr_63974[(30)] = inst_63500);

return statearr_63974;
})();
if(cljs.core.truth_(inst_63506)){
var statearr_63975_68341 = state_63841__$1;
(statearr_63975_68341[(1)] = (50));

} else {
var statearr_63976_68343 = state_63841__$1;
(statearr_63976_68343[(1)] = (51));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (125))){
var inst_63751 = (state_63841[(7)]);
var inst_63758 = (state_63841[(2)]);
var inst_63759 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_63751,inst_63758);
var state_63841__$1 = state_63841;
var statearr_63977_68346 = state_63841__$1;
(statearr_63977_68346[(2)] = inst_63759);

(statearr_63977_68346[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (17))){
var inst_63829 = (state_63841[(2)]);
var _ = (function (){var statearr_63978 = state_63841;
(statearr_63978[(4)] = cljs.core.rest((state_63841[(4)])));

return statearr_63978;
})();
var state_63841__$1 = state_63841;
var statearr_63979_68349 = state_63841__$1;
(statearr_63979_68349[(2)] = inst_63829);

(statearr_63979_68349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (3))){
var inst_63832 = (state_63841[(60)]);
var inst_63832__$1 = (state_63841[(2)]);
var inst_63833 = (inst_63832__$1 == null);
var state_63841__$1 = (function (){var statearr_63980 = state_63841;
(statearr_63980[(60)] = inst_63832__$1);

return statearr_63980;
})();
if(cljs.core.truth_(inst_63833)){
var statearr_63981_68353 = state_63841__$1;
(statearr_63981_68353[(1)] = (142));

} else {
var statearr_63982_68354 = state_63841__$1;
(statearr_63982_68354[(1)] = (143));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (12))){
var inst_63363 = (state_63841[(56)]);
var inst_63381 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_63363);
var state_63841__$1 = state_63841;
var statearr_63983_68357 = state_63841__$1;
(statearr_63983_68357[(2)] = inst_63381);

(statearr_63983_68357[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (2))){
var inst_63363 = (state_63841[(56)]);
var _ = (function (){var statearr_63984 = state_63841;
(statearr_63984[(4)] = cljs.core.cons((5),(state_63841[(4)])));

return statearr_63984;
})();
var inst_63363__$1 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_63365 = (inst_63363__$1 == null);
var inst_63366 = cljs.core.not(inst_63365);
var state_63841__$1 = (function (){var statearr_63985 = state_63841;
(statearr_63985[(56)] = inst_63363__$1);

return statearr_63985;
})();
if(inst_63366){
var statearr_63986_68358 = state_63841__$1;
(statearr_63986_68358[(1)] = (6));

} else {
var statearr_63987_68359 = state_63841__$1;
(statearr_63987_68359[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (66))){
var inst_63588 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_63988_68360 = state_63841__$1;
(statearr_63988_68360[(2)] = inst_63588);

(statearr_63988_68360[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (142))){
var inst_63835 = cljs.core.async.close_BANG_(ch__53995__auto__);
var state_63841__$1 = state_63841;
var statearr_63989_68361 = state_63841__$1;
(statearr_63989_68361[(2)] = inst_63835);

(statearr_63989_68361[(1)] = (144));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (107))){
var inst_63700 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_63990_68362 = state_63841__$1;
(statearr_63990_68362[(2)] = inst_63700);

(statearr_63990_68362[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (23))){
var inst_63426 = (state_63841[(58)]);
var inst_63431 = inst_63426.cljs$lang$protocol_mask$partition0$;
var inst_63432 = (inst_63431 & (64));
var inst_63433 = inst_63426.cljs$core$ISeq$;
var inst_63434 = (cljs.core.PROTOCOL_SENTINEL === inst_63433);
var inst_63435 = ((inst_63432) || (inst_63434));
var state_63841__$1 = state_63841;
if(cljs.core.truth_(inst_63435)){
var statearr_63991_68365 = state_63841__$1;
(statearr_63991_68365[(1)] = (26));

} else {
var statearr_63992_68366 = state_63841__$1;
(statearr_63992_68366[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (47))){
var inst_63465 = (state_63841[(28)]);
var state_63841__$1 = state_63841;
var statearr_63993_68369 = state_63841__$1;
(statearr_63993_68369[(2)] = inst_63465);

(statearr_63993_68369[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (35))){
var inst_63449 = (state_63841[(38)]);
var inst_63465 = (state_63841[(28)]);
var _ = (function (){var statearr_63994 = state_63841;
(statearr_63994[(4)] = cljs.core.cons((38),(state_63841[(4)])));

return statearr_63994;
})();
var inst_63465__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_63449);
var inst_63466 = com.wsscode.async.async_cljs.chan_QMARK_(inst_63465__$1);
var state_63841__$1 = (function (){var statearr_63995 = state_63841;
(statearr_63995[(28)] = inst_63465__$1);

return statearr_63995;
})();
if(inst_63466){
var statearr_63996_68372 = state_63841__$1;
(statearr_63996_68372[(1)] = (39));

} else {
var statearr_63997_68373 = state_63841__$1;
(statearr_63997_68373[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (127))){
var state_63841__$1 = state_63841;
var statearr_63998_68374 = state_63841__$1;
(statearr_63998_68374[(2)] = null);

(statearr_63998_68374[(1)] = (128));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (82))){
var inst_63827 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_63999_68376 = state_63841__$1;
(statearr_63999_68376[(2)] = inst_63827);

(statearr_63999_68376[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (76))){
var inst_63391 = (state_63841[(33)]);
var inst_63388 = (state_63841[(29)]);
var inst_63385 = (state_63841[(34)]);
var inst_63595 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63596 = [inst_63385,inst_63388,inst_63391];
var inst_63597 = (new cljs.core.PersistentVector(null,3,(5),inst_63595,inst_63596,null));
var inst_63598 = com.wsscode.pathom.core.cache_read(env,inst_63597);
var state_63841__$1 = state_63841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63841__$1,(79),inst_63598);
} else {
if((state_val_63842 === (97))){
var inst_63665 = (state_63841[(65)]);
var inst_63681 = (state_63841[(25)]);
var _ = (function (){var statearr_64000 = state_63841;
(statearr_64000[(4)] = cljs.core.cons((100),(state_63841[(4)])));

return statearr_64000;
})();
var inst_63681__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_63665);
var inst_63682 = com.wsscode.async.async_cljs.chan_QMARK_(inst_63681__$1);
var state_63841__$1 = (function (){var statearr_64001 = state_63841;
(statearr_64001[(25)] = inst_63681__$1);

return statearr_64001;
})();
if(inst_63682){
var statearr_64002_68382 = state_63841__$1;
(statearr_64002_68382[(1)] = (101));

} else {
var statearr_64003_68383 = state_63841__$1;
(statearr_64003_68383[(1)] = (102));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (19))){
var inst_63391 = (state_63841[(33)]);
var inst_63398 = (state_63841[(14)]);
var inst_63388 = (state_63841[(29)]);
var inst_63385 = (state_63841[(34)]);
var inst_63390 = (state_63841[(39)]);
var inst_63394 = (state_63841[(15)]);
var inst_63384 = (state_63841[(44)]);
var inst_63386 = (state_63841[(45)]);
var inst_63412 = cljs.core.PersistentVector.EMPTY;
var inst_63413 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector);
var inst_63414 = (function (){var map__63362 = inst_63384;
var resolver_sym = inst_63385;
var input = inst_63386;
var e = inst_63388;
var key = inst_63390;
var params = inst_63391;
var trace_data = inst_63394;
var trace_id__27500__auto__ = inst_63398;
return ((function (map__63362,resolver_sym,input,e,key,params,trace_data,trace_id__27500__auto__,inst_63391,inst_63398,inst_63388,inst_63385,inst_63390,inst_63394,inst_63384,inst_63386,inst_63412,inst_63413,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__63349_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(cljs.core.second(p1__63349_SHARP_),input);
});
;})(map__63362,resolver_sym,input,e,key,params,trace_data,trace_id__27500__auto__,inst_63391,inst_63398,inst_63388,inst_63385,inst_63390,inst_63394,inst_63384,inst_63386,inst_63412,inst_63413,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_63415 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_63414);
var inst_63416 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_63413,inst_63415);
var inst_63417 = (function (){var map__63362 = inst_63384;
var resolver_sym = inst_63385;
var input = inst_63386;
var e = inst_63388;
var key = inst_63390;
var params = inst_63391;
var trace_data = inst_63394;
var trace_id__27500__auto__ = inst_63398;
return ((function (map__63362,resolver_sym,input,e,key,params,trace_data,trace_id__27500__auto__,inst_63391,inst_63398,inst_63388,inst_63385,inst_63390,inst_63394,inst_63384,inst_63386,inst_63412,inst_63413,inst_63414,inst_63415,inst_63416,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__63350_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__63350_SHARP_,input);
});
;})(map__63362,resolver_sym,input,e,key,params,trace_data,trace_id__27500__auto__,inst_63391,inst_63398,inst_63388,inst_63385,inst_63390,inst_63394,inst_63384,inst_63386,inst_63412,inst_63413,inst_63414,inst_63415,inst_63416,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_63418 = com.wsscode.pathom.connect.map_async_serial(inst_63417,processing_sequence);
var state_63841__$1 = (function (){var statearr_64004 = state_63841;
(statearr_64004[(57)] = inst_63412);

(statearr_64004[(59)] = inst_63416);

return statearr_64004;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63841__$1,(22),inst_63418);
} else {
if((state_val_63842 === (57))){
var inst_63590 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_64005_68395 = state_63841__$1;
(statearr_64005_68395[(2)] = inst_63590);

(statearr_64005_68395[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (68))){
var inst_63570 = (state_63841[(8)]);
var inst_63551 = (state_63841[(17)]);
var inst_63566 = cljs.core.first(inst_63551);
var inst_63567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63566,(0),null);
var inst_63568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63566,(1),null);
var inst_63569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63568,(0),null);
var inst_63570__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63568,(1),null);
var state_63841__$1 = (function (){var statearr_64006 = state_63841;
(statearr_64006[(48)] = inst_63569);

(statearr_64006[(69)] = inst_63567);

(statearr_64006[(8)] = inst_63570__$1);

return statearr_64006;
})();
if(cljs.core.truth_(inst_63570__$1)){
var statearr_64007_68396 = state_63841__$1;
(statearr_64007_68396[(1)] = (70));

} else {
var statearr_64008_68397 = state_63841__$1;
(statearr_64008_68397[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (11))){
var inst_63376 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_64009_68402 = state_63841__$1;
(statearr_64009_68402[(2)] = inst_63376);

(statearr_64009_68402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (115))){
var inst_63736 = (state_63841[(51)]);
var inst_63737 = (state_63841[(52)]);
var inst_63739 = (inst_63737 < inst_63736);
var inst_63740 = inst_63739;
var state_63841__$1 = state_63841;
if(cljs.core.truth_(inst_63740)){
var statearr_64011_68403 = state_63841__$1;
(statearr_64011_68403[(1)] = (117));

} else {
var statearr_64012_68404 = state_63841__$1;
(statearr_64012_68404[(1)] = (118));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (9))){
var state_63841__$1 = state_63841;
var statearr_64013_68405 = state_63841__$1;
(statearr_64013_68405[(2)] = true);

(statearr_64013_68405[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (5))){
var _ = (function (){var statearr_64014 = state_63841;
(statearr_64014[(4)] = cljs.core.rest((state_63841[(4)])));

return statearr_64014;
})();
var state_63841__$1 = state_63841;
var ex64010 = (state_63841__$1[(2)]);
var statearr_64015_68408 = state_63841__$1;
(statearr_64015_68408[(5)] = ex64010);


var statearr_64016_68409 = state_63841__$1;
(statearr_64016_68409[(1)] = (4));

(statearr_64016_68409[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (112))){
var inst_63638 = (state_63841[(62)]);
var inst_63391 = (state_63841[(33)]);
var inst_63716 = (state_63841[(49)]);
var inst_63709 = (state_63841[(70)]);
var inst_63388 = (state_63841[(29)]);
var inst_63663 = (state_63841[(63)]);
var inst_63639 = (state_63841[(64)]);
var inst_63385 = (state_63841[(34)]);
var inst_63390 = (state_63841[(39)]);
var inst_63671 = (state_63841[(67)]);
var inst_63665 = (state_63841[(65)]);
var inst_63664 = (state_63841[(66)]);
var inst_63717 = (state_63841[(46)]);
var inst_63394 = (state_63841[(15)]);
var inst_63714 = (state_63841[(71)]);
var inst_63384 = (state_63841[(44)]);
var inst_63386 = (state_63841[(45)]);
var inst_63724 = (function (){var input = inst_63386;
var items_map = inst_63639;
var map__63627 = inst_63663;
var map__63362 = inst_63384;
var cached = inst_63664;
var cached_set = inst_63717;
var linked_results = inst_63716;
var key = inst_63390;
var channels = inst_63671;
var _ = inst_63714;
var params = inst_63391;
var uncached = inst_63665;
var e = inst_63388;
var resolver_sym = inst_63385;
var trace_data = inst_63394;
var valid_inputs = inst_63638;
var batch_result = inst_63709;
return ((function (input,items_map,map__63627,map__63362,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_63638,inst_63391,inst_63716,inst_63709,inst_63388,inst_63663,inst_63639,inst_63385,inst_63390,inst_63671,inst_63665,inst_63664,inst_63717,inst_63394,inst_63714,inst_63384,inst_63386,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap(cache){
var path__$1 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),(cljs.core.count(path) - (2)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path__$1,input,items_map,map__63627,map__63362,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_63638,inst_63391,inst_63716,inst_63709,inst_63388,inst_63663,inst_63639,inst_63385,inst_63390,inst_63671,inst_63665,inst_63664,inst_63717,inst_63394,inst_63714,inst_63384,inst_63386,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce(cache__$1,p__64017){
var vec__64018 = p__64017;
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64018,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64018,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__64018,item,result,path__$1,input,items_map,map__63627,map__63362,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_63638,inst_63391,inst_63716,inst_63709,inst_63388,inst_63663,inst_63639,inst_63385,inst_63390,inst_63671,inst_63665,inst_63664,inst_63717,inst_63394,inst_63714,inst_63384,inst_63386,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce_$_entity_path_inner_reduce(cache__$2,index){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cache__$2,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,index),((function (vec__64018,item,result,path__$1,input,items_map,map__63627,map__63362,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_63638,inst_63391,inst_63716,inst_63709,inst_63388,inst_63663,inst_63639,inst_63385,inst_63390,inst_63671,inst_63665,inst_63664,inst_63717,inst_63394,inst_63714,inst_63384,inst_63386,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__63352_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result,p1__63352_SHARP_], 0));
});})(vec__64018,item,result,path__$1,input,items_map,map__63627,map__63362,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_63638,inst_63391,inst_63716,inst_63709,inst_63388,inst_63663,inst_63639,inst_63385,inst_63390,inst_63671,inst_63665,inst_63664,inst_63717,inst_63394,inst_63714,inst_63384,inst_63386,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache))
);
});})(vec__64018,item,result,path__$1,input,items_map,map__63627,map__63362,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_63638,inst_63391,inst_63716,inst_63709,inst_63388,inst_63663,inst_63639,inst_63385,inst_63390,inst_63671,inst_63665,inst_63664,inst_63717,inst_63394,inst_63714,inst_63384,inst_63386,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache))
,cache__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_map,item));
});})(path__$1,input,items_map,map__63627,map__63362,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_63638,inst_63391,inst_63716,inst_63709,inst_63388,inst_63663,inst_63639,inst_63385,inst_63390,inst_63671,inst_63665,inst_63664,inst_63717,inst_63394,inst_63714,inst_63384,inst_63386,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache))
,cache,cljs.core.zipmap(uncached,batch_result));
});
;})(input,items_map,map__63627,map__63362,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_63638,inst_63391,inst_63716,inst_63709,inst_63388,inst_63663,inst_63639,inst_63385,inst_63390,inst_63671,inst_63665,inst_63664,inst_63717,inst_63394,inst_63714,inst_63384,inst_63386,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_63725 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(entity_path_cache,inst_63724);
var state_63841__$1 = state_63841;
var statearr_64021_68417 = state_63841__$1;
(statearr_64021_68417[(2)] = inst_63725);

(statearr_64021_68417[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (83))){
var inst_63625 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_64022_68418 = state_63841__$1;
(statearr_64022_68418[(2)] = inst_63625);

(statearr_64022_68418[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (138))){
var inst_63391 = (state_63841[(33)]);
var inst_63388 = (state_63841[(29)]);
var inst_63385 = (state_63841[(34)]);
var inst_63811 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63812 = [inst_63385,inst_63388,inst_63391];
var inst_63813 = (new cljs.core.PersistentVector(null,3,(5),inst_63811,inst_63812,null));
var inst_63814 = com.wsscode.pathom.core.cache_read(env,inst_63813);
var state_63841__$1 = state_63841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63841__$1,(141),inst_63814);
} else {
if((state_val_63842 === (14))){
var inst_63388 = (state_63841[(29)]);
var inst_63385 = (state_63841[(34)]);
var inst_63390 = (state_63841[(39)]);
var inst_63384 = (state_63841[(44)]);
var inst_63386 = (state_63841[(45)]);
var inst_63384__$1 = (state_63841[(2)]);
var inst_63385__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63384__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var inst_63386__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63384__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_63387 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var inst_63388__$1 = cljs.core.select_keys(inst_63387,inst_63386__$1);
var inst_63389 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_63390__$1 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_63389);
var inst_63391 = com.wsscode.pathom.core.params(env);
var inst_63392 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_63393 = [inst_63390__$1,inst_63385__$1,inst_63388__$1];
var inst_63394 = cljs.core.PersistentHashMap.fromArrays(inst_63392,inst_63393);
var inst_63395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_63841__$1 = (function (){var statearr_64023 = state_63841;
(statearr_64023[(33)] = inst_63391);

(statearr_64023[(29)] = inst_63388__$1);

(statearr_64023[(34)] = inst_63385__$1);

(statearr_64023[(39)] = inst_63390__$1);

(statearr_64023[(15)] = inst_63394);

(statearr_64023[(44)] = inst_63384__$1);

(statearr_64023[(45)] = inst_63386__$1);

return statearr_64023;
})();
if(cljs.core.truth_(inst_63395)){
var statearr_64024_68432 = state_63841__$1;
(statearr_64024_68432[(1)] = (15));

} else {
var statearr_64025_68433 = state_63841__$1;
(statearr_64025_68433[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (45))){
var inst_63484 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_64026_68434 = state_63841__$1;
(statearr_64026_68434[(2)] = inst_63484);

(statearr_64026_68434[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (53))){
var inst_63521 = (state_63841[(18)]);
var inst_63520 = (state_63841[(21)]);
var inst_63523 = (inst_63521 < inst_63520);
var inst_63524 = inst_63523;
var state_63841__$1 = state_63841;
if(cljs.core.truth_(inst_63524)){
var statearr_64027_68437 = state_63841__$1;
(statearr_64027_68437[(1)] = (55));

} else {
var statearr_64028_68438 = state_63841__$1;
(statearr_64028_68438[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (78))){
var inst_63609 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_64029_68439 = state_63841__$1;
(statearr_64029_68439[(2)] = inst_63609);

(statearr_64029_68439[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (132))){
var inst_63786 = (state_63841[(10)]);
var state_63841__$1 = state_63841;
if(cljs.core.truth_(inst_63786)){
var statearr_64030_68440 = state_63841__$1;
(statearr_64030_68440[(1)] = (135));

} else {
var statearr_64031_68441 = state_63841__$1;
(statearr_64031_68441[(1)] = (136));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (26))){
var state_63841__$1 = state_63841;
var statearr_64032_68442 = state_63841__$1;
(statearr_64032_68442[(2)] = true);

(statearr_64032_68442[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (123))){
var inst_63752 = (state_63841[(54)]);
var state_63841__$1 = state_63841;
var statearr_64033_68443 = state_63841__$1;
(statearr_64033_68443[(2)] = inst_63752);

(statearr_64033_68443[(1)] = (125));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (140))){
var inst_63825 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_64034_68444 = state_63841__$1;
(statearr_64034_68444[(2)] = inst_63825);

(statearr_64034_68444[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (16))){
var inst_63391 = (state_63841[(33)]);
var inst_63388 = (state_63841[(29)]);
var inst_63385 = (state_63841[(34)]);
var inst_63615 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63616 = [inst_63385,inst_63388,inst_63391];
var inst_63617 = (new cljs.core.PersistentVector(null,3,(5),inst_63615,inst_63616,null));
var inst_63618 = com.wsscode.pathom.core.cache_contains_QMARK_(env,inst_63617);
var state_63841__$1 = state_63841;
if(inst_63618){
var statearr_64035_68446 = state_63841__$1;
(statearr_64035_68446[(1)] = (80));

} else {
var statearr_64036_68447 = state_63841__$1;
(statearr_64036_68447[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (133))){
var inst_63785 = (state_63841[(12)]);
var inst_63795 = cljs.core.async.close_BANG_(inst_63785);
var state_63841__$1 = state_63841;
var statearr_64037_68448 = state_63841__$1;
(statearr_64037_68448[(2)] = inst_63795);

(statearr_64037_68448[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (81))){
var inst_63391 = (state_63841[(33)]);
var inst_63388 = (state_63841[(29)]);
var inst_63385 = (state_63841[(34)]);
var inst_63390 = (state_63841[(39)]);
var inst_63394 = (state_63841[(15)]);
var inst_63384 = (state_63841[(44)]);
var inst_63386 = (state_63841[(45)]);
var inst_63628 = cljs.core.PersistentVector.EMPTY;
var inst_63629 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector);
var inst_63630 = (function (){var map__63362 = inst_63384;
var resolver_sym = inst_63385;
var input = inst_63386;
var e = inst_63388;
var key = inst_63390;
var params = inst_63391;
var trace_data = inst_63394;
return ((function (map__63362,resolver_sym,input,e,key,params,trace_data,inst_63391,inst_63388,inst_63385,inst_63390,inst_63394,inst_63384,inst_63386,inst_63628,inst_63629,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__63349_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(cljs.core.second(p1__63349_SHARP_),input);
});
;})(map__63362,resolver_sym,input,e,key,params,trace_data,inst_63391,inst_63388,inst_63385,inst_63390,inst_63394,inst_63384,inst_63386,inst_63628,inst_63629,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_63631 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_63630);
var inst_63632 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_63629,inst_63631);
var inst_63633 = (function (){var map__63362 = inst_63384;
var resolver_sym = inst_63385;
var input = inst_63386;
var e = inst_63388;
var key = inst_63390;
var params = inst_63391;
var trace_data = inst_63394;
return ((function (map__63362,resolver_sym,input,e,key,params,trace_data,inst_63391,inst_63388,inst_63385,inst_63390,inst_63394,inst_63384,inst_63386,inst_63628,inst_63629,inst_63630,inst_63631,inst_63632,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__63350_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__63350_SHARP_,input);
});
;})(map__63362,resolver_sym,input,e,key,params,trace_data,inst_63391,inst_63388,inst_63385,inst_63390,inst_63394,inst_63384,inst_63386,inst_63628,inst_63629,inst_63630,inst_63631,inst_63632,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_63634 = com.wsscode.pathom.connect.map_async_serial(inst_63633,processing_sequence);
var state_63841__$1 = (function (){var statearr_64038 = state_63841;
(statearr_64038[(72)] = inst_63628);

(statearr_64038[(73)] = inst_63632);

return statearr_64038;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63841__$1,(84),inst_63634);
} else {
if((state_val_63842 === (120))){
var inst_63752 = (state_63841[(54)]);
var state_63841__$1 = state_63841;
if(cljs.core.truth_(inst_63752)){
var statearr_64040_68450 = state_63841__$1;
(statearr_64040_68450[(1)] = (123));

} else {
var statearr_64041_68451 = state_63841__$1;
(statearr_64041_68451[(1)] = (124));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (79))){
var inst_63600 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_64042_68452 = state_63841__$1;
(statearr_64042_68452[(2)] = inst_63600);

(statearr_64042_68452[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (38))){
var _ = (function (){var statearr_64043 = state_63841;
(statearr_64043[(4)] = cljs.core.rest((state_63841[(4)])));

return statearr_64043;
})();
var state_63841__$1 = state_63841;
var ex64039 = (state_63841__$1[(2)]);
var statearr_64044_68454 = state_63841__$1;
(statearr_64044_68454[(5)] = ex64039);


var statearr_64045_68455 = state_63841__$1;
(statearr_64045_68455[(1)] = (37));

(statearr_64045_68455[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (126))){
var inst_63767 = (state_63841[(9)]);
var inst_63769 = cljs.core.chunked_seq_QMARK_(inst_63767);
var state_63841__$1 = state_63841;
if(inst_63769){
var statearr_64046_68457 = state_63841__$1;
(statearr_64046_68457[(1)] = (129));

} else {
var statearr_64047_68458 = state_63841__$1;
(statearr_64047_68458[(1)] = (130));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (98))){
var inst_63706 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_64048_68459 = state_63841__$1;
(statearr_64048_68459[(2)] = inst_63706);

(statearr_64048_68459[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (124))){
var inst_63756 = cljs.core.PersistentHashMap.EMPTY;
var state_63841__$1 = state_63841;
var statearr_64049_68460 = state_63841__$1;
(statearr_64049_68460[(2)] = inst_63756);

(statearr_64049_68460[(1)] = (125));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (87))){
var inst_63658 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
if(cljs.core.truth_(inst_63658)){
var statearr_64050_68462 = state_63841__$1;
(statearr_64050_68462[(1)] = (91));

} else {
var statearr_64051_68463 = state_63841__$1;
(statearr_64051_68463[(1)] = (92));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (30))){
var inst_63426 = (state_63841[(58)]);
var state_63841__$1 = state_63841;
var statearr_64052_68464 = state_63841__$1;
(statearr_64052_68464[(2)] = inst_63426);

(statearr_64052_68464[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (73))){
var inst_63570 = (state_63841[(8)]);
var state_63841__$1 = state_63841;
var statearr_64053_68465 = state_63841__$1;
(statearr_64053_68465[(2)] = inst_63570);

(statearr_64053_68465[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (96))){
var inst_63709 = (state_63841[(70)]);
var inst_63671 = (state_63841[(67)]);
var inst_63665 = (state_63841[(65)]);
var inst_63664 = (state_63841[(66)]);
var inst_63709__$1 = (state_63841[(2)]);
var inst_63710 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_63711 = cljs.core.count(inst_63709__$1);
var inst_63712 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_63711];
var inst_63713 = cljs.core.PersistentHashMap.fromArrays(inst_63710,inst_63712);
var inst_63714 = com.wsscode.pathom.trace.trace(env,inst_63713);
var inst_63715 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_63671,inst_63709__$1);
var inst_63716 = cljs.core.zipmap(inst_63665,inst_63715);
var inst_63717 = cljs.core.set(inst_63664);
var inst_63718 = cljs.core.first(inst_63709__$1);
var inst_63719 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_63718);
var inst_63720 = cljs.core.count(path);
var inst_63721 = (inst_63720 >= (2));
var inst_63722 = ((inst_63719) && (inst_63721));
var state_63841__$1 = (function (){var statearr_64054 = state_63841;
(statearr_64054[(49)] = inst_63716);

(statearr_64054[(70)] = inst_63709__$1);

(statearr_64054[(46)] = inst_63717);

(statearr_64054[(71)] = inst_63714);

return statearr_64054;
})();
if(cljs.core.truth_(inst_63722)){
var statearr_64055_68468 = state_63841__$1;
(statearr_64055_68468[(1)] = (112));

} else {
var statearr_64056_68469 = state_63841__$1;
(statearr_64056_68469[(1)] = (113));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (10))){
var state_63841__$1 = state_63841;
var statearr_64057_68471 = state_63841__$1;
(statearr_64057_68471[(2)] = false);

(statearr_64057_68471[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (18))){
var inst_63391 = (state_63841[(33)]);
var inst_63388 = (state_63841[(29)]);
var inst_63385 = (state_63841[(34)]);
var inst_63404 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63405 = [inst_63385,inst_63388,inst_63391];
var inst_63406 = (new cljs.core.PersistentVector(null,3,(5),inst_63404,inst_63405,null));
var inst_63407 = com.wsscode.pathom.core.cache_read(env,inst_63406);
var state_63841__$1 = state_63841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63841__$1,(21),inst_63407);
} else {
if((state_val_63842 === (105))){
var inst_63681 = (state_63841[(25)]);
var inst_63690 = com.wsscode.async.async_cljs.promise__GT_chan(inst_63681);
var state_63841__$1 = state_63841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63841__$1,(108),inst_63690);
} else {
if((state_val_63842 === (52))){
var inst_63500 = (state_63841[(30)]);
var inst_63512 = (state_63841[(2)]);
var inst_63517 = cljs.core.seq(inst_63500);
var inst_63518 = inst_63517;
var inst_63519 = null;
var inst_63520 = (0);
var inst_63521 = (0);
var state_63841__$1 = (function (){var statearr_64058 = state_63841;
(statearr_64058[(18)] = inst_63521);

(statearr_64058[(19)] = inst_63518);

(statearr_64058[(74)] = inst_63512);

(statearr_64058[(21)] = inst_63520);

(statearr_64058[(22)] = inst_63519);

return statearr_64058;
})();
var statearr_64059_68485 = state_63841__$1;
(statearr_64059_68485[(2)] = null);

(statearr_64059_68485[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (114))){
var inst_63716 = (state_63841[(49)]);
var inst_63728 = (state_63841[(2)]);
var inst_63733 = cljs.core.seq(inst_63716);
var inst_63734 = inst_63733;
var inst_63735 = null;
var inst_63736 = (0);
var inst_63737 = (0);
var state_63841__$1 = (function (){var statearr_64060 = state_63841;
(statearr_64060[(50)] = inst_63735);

(statearr_64060[(51)] = inst_63736);

(statearr_64060[(52)] = inst_63737);

(statearr_64060[(75)] = inst_63728);

(statearr_64060[(53)] = inst_63734);

return statearr_64060;
})();
var statearr_64061_68486 = state_63841__$1;
(statearr_64061_68486[(2)] = null);

(statearr_64061_68486[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (67))){
var inst_63551 = (state_63841[(17)]);
var inst_63555 = cljs.core.chunk_first(inst_63551);
var inst_63556 = cljs.core.chunk_rest(inst_63551);
var inst_63557 = cljs.core.count(inst_63555);
var inst_63518 = inst_63556;
var inst_63519 = inst_63555;
var inst_63520 = inst_63557;
var inst_63521 = (0);
var state_63841__$1 = (function (){var statearr_64062 = state_63841;
(statearr_64062[(18)] = inst_63521);

(statearr_64062[(19)] = inst_63518);

(statearr_64062[(21)] = inst_63520);

(statearr_64062[(22)] = inst_63519);

return statearr_64062;
})();
var statearr_64063_68491 = state_63841__$1;
(statearr_64063_68491[(2)] = null);

(statearr_64063_68491[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (71))){
var inst_63569 = (state_63841[(48)]);
var inst_63579 = cljs.core.async.close_BANG_(inst_63569);
var state_63841__$1 = state_63841;
var statearr_64064_68492 = state_63841__$1;
(statearr_64064_68492[(2)] = inst_63579);

(statearr_64064_68492[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (42))){
var inst_63469 = (state_63841[(2)]);
var inst_63470 = com.wsscode.async.async_cljs.throw_err(inst_63469);
var state_63841__$1 = state_63841;
var statearr_64065_68497 = state_63841__$1;
(statearr_64065_68497[(2)] = inst_63470);

(statearr_64065_68497[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (80))){
var inst_63391 = (state_63841[(33)]);
var inst_63388 = (state_63841[(29)]);
var inst_63385 = (state_63841[(34)]);
var inst_63620 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63621 = [inst_63385,inst_63388,inst_63391];
var inst_63622 = (new cljs.core.PersistentVector(null,3,(5),inst_63620,inst_63621,null));
var inst_63623 = com.wsscode.pathom.core.cache_read(env,inst_63622);
var state_63841__$1 = state_63841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63841__$1,(83),inst_63623);
} else {
if((state_val_63842 === (37))){
var inst_63458 = (state_63841[(2)]);
var inst_63459 = com.wsscode.pathom.connect.parallel_batch_error(env,inst_63458);
var state_63841__$1 = state_63841;
var statearr_64066_68501 = state_63841__$1;
(statearr_64066_68501[(2)] = inst_63459);

(statearr_64066_68501[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (63))){
var inst_63535 = (state_63841[(13)]);
var inst_63542 = (state_63841[(2)]);
var inst_63543 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_63535,inst_63542);
var state_63841__$1 = state_63841;
var statearr_64067_68502 = state_63841__$1;
(statearr_64067_68502[(2)] = inst_63543);

(statearr_64067_68502[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (94))){
var state_63841__$1 = state_63841;
var statearr_64068_68503 = state_63841__$1;
(statearr_64068_68503[(2)] = null);

(statearr_64068_68503[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (8))){
var inst_63379 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
if(cljs.core.truth_(inst_63379)){
var statearr_64069_68507 = state_63841__$1;
(statearr_64069_68507[(1)] = (12));

} else {
var statearr_64070_68508 = state_63841__$1;
(statearr_64070_68508[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (49))){
var inst_63482 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_64071_68513 = state_63841__$1;
(statearr_64071_68513[(2)] = inst_63482);

(statearr_64071_68513[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (84))){
var inst_63638 = (state_63841[(62)]);
var inst_63391 = (state_63841[(33)]);
var inst_63628 = (state_63841[(72)]);
var inst_63632 = (state_63841[(73)]);
var inst_63388 = (state_63841[(29)]);
var inst_63639 = (state_63841[(64)]);
var inst_63385 = (state_63841[(34)]);
var inst_63390 = (state_63841[(39)]);
var inst_63642 = (state_63841[(27)]);
var inst_63394 = (state_63841[(15)]);
var inst_63384 = (state_63841[(44)]);
var inst_63386 = (state_63841[(45)]);
var inst_63636 = (state_63841[(2)]);
var inst_63637 = com.wsscode.async.async_cljs.throw_err(inst_63636);
var inst_63638__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_63628,inst_63632,inst_63637);
var inst_63639__$1 = com.wsscode.pathom.connect.group_input_indexes(inst_63638__$1);
var inst_63640 = (function (){var input = inst_63386;
var items_map = inst_63639__$1;
var map__63362 = inst_63384;
var key = inst_63390;
var params = inst_63391;
var e = inst_63388;
var resolver_sym = inst_63385;
var trace_data = inst_63394;
var valid_inputs = inst_63638__$1;
return ((function (input,items_map,map__63362,key,params,e,resolver_sym,trace_data,valid_inputs,inst_63638,inst_63391,inst_63628,inst_63632,inst_63388,inst_63639,inst_63385,inst_63390,inst_63642,inst_63394,inst_63384,inst_63386,inst_63636,inst_63637,inst_63638__$1,inst_63639__$1,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__63351_SHARP_){
return com.wsscode.pathom.core.cache_contains_QMARK_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,p1__63351_SHARP_,params], null));
});
;})(input,items_map,map__63362,key,params,e,resolver_sym,trace_data,valid_inputs,inst_63638,inst_63391,inst_63628,inst_63632,inst_63388,inst_63639,inst_63385,inst_63390,inst_63642,inst_63394,inst_63384,inst_63386,inst_63636,inst_63637,inst_63638__$1,inst_63639__$1,state_val_63842,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_63641 = cljs.core.keys(inst_63639__$1);
var inst_63642__$1 = cljs.core.group_by(inst_63640,inst_63641);
var inst_63644 = (inst_63642__$1 == null);
var inst_63645 = cljs.core.not(inst_63644);
var state_63841__$1 = (function (){var statearr_64072 = state_63841;
(statearr_64072[(62)] = inst_63638__$1);

(statearr_64072[(64)] = inst_63639__$1);

(statearr_64072[(27)] = inst_63642__$1);

return statearr_64072;
})();
if(inst_63645){
var statearr_64073_68523 = state_63841__$1;
(statearr_64073_68523[(1)] = (85));

} else {
var statearr_64074_68524 = state_63841__$1;
(statearr_64074_68524[(1)] = (86));

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache))
;
return ((function (switch__48139__auto__,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache){
return (function() {
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__48140__auto____0 = (function (){
var statearr_64075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64075[(0)] = com$wsscode$pathom$connect$parallel_batch_$_state_machine__48140__auto__);

(statearr_64075[(1)] = (1));

return statearr_64075;
});
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__48140__auto____1 = (function (state_63841){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_63841);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e64076){var ex__48143__auto__ = e64076;
var statearr_64077_68530 = state_63841;
(statearr_64077_68530[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_63841[(4)]))){
var statearr_64078_68531 = state_63841;
(statearr_64078_68531[(1)] = cljs.core.first((state_63841[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68532 = state_63841;
state_63841 = G__68532;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_batch_$_state_machine__48140__auto__ = function(state_63841){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__48140__auto____1.call(this,state_63841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_batch_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_batch_$_state_machine__48140__auto____0;
com$wsscode$pathom$connect$parallel_batch_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_batch_$_state_machine__48140__auto____1;
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache))
})();
var state__48841__auto__ = (function (){var statearr_64079 = f__48840__auto__();
(statearr_64079[(6)] = c__48839__auto___68085);

return statearr_64079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto___68085,ch__53995__auto__,map__63354,map__63354__$1,env,processing_sequence,path,entity_path_cache))
);


return ch__53995__auto__;
});
com.wsscode.pathom.connect.parallel_reader = (function com$wsscode$pathom$connect$parallel_reader(p__64083){
var map__64084 = p__64083;
var map__64084__$1 = (((((!((map__64084 == null))))?(((((map__64084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64084):map__64084);
var env = map__64084__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64084__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64084__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64084__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var waiting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64084__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278));
var temp__5718__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__64086 = temp__5718__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64086,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64086,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),out,new cljs.core.Keyword("com.wsscode.pathom.parser","response-stream","com.wsscode.pathom.parser/response-stream",1785550292),(function (){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var params = com.wsscode.pathom.core.params(env);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),plan);
var c__48839__auto___68538 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (state_64488){
var state_val_64489 = (state_64488[(1)]);
if((state_val_64489 === (65))){
var inst_64251 = cljs.core.PersistentHashMap.EMPTY;
var state_64488__$1 = state_64488;
var statearr_64490_68539 = state_64488__$1;
(statearr_64490_68539[(2)] = inst_64251);

(statearr_64490_68539[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (70))){
var inst_64276 = (state_64488[(7)]);
var inst_64150 = (state_64488[(8)]);
var inst_64119 = (state_64488[(9)]);
var inst_64274 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_64150);
var inst_64275 = cljs.core.keys(inst_64274);
var inst_64276__$1 = cljs.core.set(inst_64275);
var inst_64277 = cljs.core.contains_QMARK_(inst_64276__$1,inst_64119);
var state_64488__$1 = (function (){var statearr_64491 = state_64488;
(statearr_64491[(7)] = inst_64276__$1);

return statearr_64491;
})();
if(inst_64277){
var statearr_64492_68542 = state_64488__$1;
(statearr_64492_68542[(1)] = (73));

} else {
var statearr_64493_68543 = state_64488__$1;
(statearr_64493_68543[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (62))){
var state_64488__$1 = state_64488;
var statearr_64494_68550 = state_64488__$1;
(statearr_64494_68550[(2)] = null);

(statearr_64494_68550[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (74))){
var inst_64266 = (state_64488[(10)]);
var inst_64119 = (state_64488[(9)]);
var inst_64282 = cljs.core.PersistentHashMap.EMPTY;
var inst_64283 = [new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_64284 = [inst_64119];
var inst_64285 = cljs.core.PersistentHashMap.fromArrays(inst_64283,inst_64284);
var inst_64286 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Waited key missed response",inst_64285);
var inst_64287 = (inst_64266.cljs$core$IFn$_invoke$arity$2 ? inst_64266.cljs$core$IFn$_invoke$arity$2(inst_64282,inst_64286) : inst_64266.call(null,inst_64282,inst_64286));
var state_64488__$1 = state_64488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64488__$1,(76),inst_64287);
} else {
if((state_val_64489 === (110))){
var inst_64416 = [key];
var inst_64417 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_64418 = cljs.core.PersistentHashMap.fromArrays(inst_64416,inst_64417);
var state_64488__$1 = state_64488;
var statearr_64495_68554 = state_64488__$1;
(statearr_64495_68554[(2)] = inst_64418);

(statearr_64495_68554[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (7))){
var inst_64124 = (state_64488[(11)]);
var inst_64129 = inst_64124.cljs$lang$protocol_mask$partition0$;
var inst_64130 = (inst_64129 & (64));
var inst_64131 = inst_64124.cljs$core$ISeq$;
var inst_64132 = (cljs.core.PROTOCOL_SENTINEL === inst_64131);
var inst_64133 = ((inst_64130) || (inst_64132));
var state_64488__$1 = state_64488;
if(cljs.core.truth_(inst_64133)){
var statearr_64496_68559 = state_64488__$1;
(statearr_64496_68559[(1)] = (10));

} else {
var statearr_64497_68560 = state_64488__$1;
(statearr_64497_68560[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (59))){
var inst_64246 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64498_68561 = state_64488__$1;
(statearr_64498_68561[(2)] = inst_64246);

(statearr_64498_68561[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (86))){
var inst_64391 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64499_68562 = state_64488__$1;
(statearr_64499_68562[(2)] = inst_64391);

(statearr_64499_68562[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (20))){
var inst_64106 = (state_64488[(12)]);
var inst_64119 = (state_64488[(9)]);
var inst_64185 = cljs.core.contains_QMARK_(inst_64106,inst_64119);
var state_64488__$1 = state_64488;
if(inst_64185){
var statearr_64500_68565 = state_64488__$1;
(statearr_64500_68565[(1)] = (30));

} else {
var statearr_64501_68566 = state_64488__$1;
(statearr_64501_68566[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (72))){
var inst_64478 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64502_68571 = state_64488__$1;
(statearr_64502_68571[(2)] = inst_64478);

(statearr_64502_68571[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (58))){
var state_64488__$1 = state_64488;
var statearr_64503_68572 = state_64488__$1;
(statearr_64503_68572[(1)] = (61));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (60))){
var inst_64238 = (state_64488[(2)]);
var inst_64239 = com.wsscode.async.async_cljs.consumer_pair(inst_64238);
var state_64488__$1 = state_64488;
var statearr_64505_68573 = state_64488__$1;
(statearr_64505_68573[(2)] = inst_64239);

(statearr_64505_68573[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (27))){
var inst_64183 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64506_68574 = state_64488__$1;
(statearr_64506_68574[(2)] = inst_64183);

(statearr_64506_68574[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (1))){
var inst_64096 = (state_64488[(13)]);
var inst_64096__$1 = plan;
var inst_64097 = cljs.core.seq(inst_64096__$1);
var inst_64098 = cljs.core.first(inst_64097);
var inst_64099 = cljs.core.next(inst_64097);
var inst_64100 = cljs.core.PersistentHashMap.EMPTY;
var inst_64101 = out;
var inst_64102 = waiting;
var inst_64103 = inst_64096__$1;
var inst_64104 = inst_64100;
var inst_64105 = inst_64101;
var inst_64106 = inst_64102;
var state_64488__$1 = (function (){var statearr_64507 = state_64488;
(statearr_64507[(14)] = inst_64098);

(statearr_64507[(15)] = inst_64099);

(statearr_64507[(16)] = inst_64104);

(statearr_64507[(12)] = inst_64106);

(statearr_64507[(17)] = inst_64105);

(statearr_64507[(18)] = inst_64103);

(statearr_64507[(13)] = inst_64096__$1);

return statearr_64507;
})();
var statearr_64508_68575 = state_64488__$1;
(statearr_64508_68575[(2)] = null);

(statearr_64508_68575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (69))){
var inst_64480 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64509_68576 = state_64488__$1;
(statearr_64509_68576[(2)] = inst_64480);

(statearr_64509_68576[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (101))){
var inst_64359 = (state_64488[(19)]);
var inst_64368 = (state_64488[(20)]);
var inst_64382 = (state_64488[(2)]);
var inst_64383 = [out,inst_64359,inst_64382];
var inst_64384 = cljs.core.PersistentHashMap.fromArrays(inst_64368,inst_64383);
var state_64488__$1 = state_64488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64488__$1,(95),ch,inst_64384);
} else {
if((state_val_64489 === (24))){
var inst_64167 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
if(cljs.core.truth_(inst_64167)){
var statearr_64510_68579 = state_64488__$1;
(statearr_64510_68579[(1)] = (25));

} else {
var statearr_64511_68581 = state_64488__$1;
(statearr_64511_68581[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (102))){
var inst_64265 = (state_64488[(21)]);
var inst_64266 = (state_64488[(10)]);
var inst_64395 = cljs.core.PersistentHashMap.EMPTY;
var inst_64396 = (inst_64266.cljs$core$IFn$_invoke$arity$2 ? inst_64266.cljs$core$IFn$_invoke$arity$2(inst_64395,inst_64265) : inst_64266.call(null,inst_64395,inst_64265));
var state_64488__$1 = state_64488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64488__$1,(105),inst_64396);
} else {
if((state_val_64489 === (55))){
var inst_64248 = (state_64488[(22)]);
var inst_64248__$1 = (state_64488[(2)]);
var state_64488__$1 = (function (){var statearr_64512 = state_64488;
(statearr_64512[(22)] = inst_64248__$1);

return statearr_64512;
})();
if(cljs.core.truth_(inst_64248__$1)){
var statearr_64513_68584 = state_64488__$1;
(statearr_64513_68584[(1)] = (64));

} else {
var statearr_64514_68585 = state_64488__$1;
(statearr_64514_68585[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (85))){
var inst_64317 = (state_64488[(23)]);
var inst_64266 = (state_64488[(10)]);
var inst_64119 = (state_64488[(9)]);
var inst_64340 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_64341 = [inst_64317,inst_64119];
var inst_64342 = cljs.core.PersistentHashMap.fromArrays(inst_64340,inst_64341);
var inst_64343 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_64342);
var inst_64344 = (inst_64266.cljs$core$IFn$_invoke$arity$2 ? inst_64266.cljs$core$IFn$_invoke$arity$2(inst_64317,inst_64343) : inst_64266.call(null,inst_64317,inst_64343));
var state_64488__$1 = state_64488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64488__$1,(88),inst_64344);
} else {
if((state_val_64489 === (39))){
var inst_64205 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64515_68587 = state_64488__$1;
(statearr_64515_68587[(2)] = inst_64205);

(statearr_64515_68587[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (88))){
var inst_64346 = (state_64488[(24)]);
var inst_64346__$1 = (state_64488[(2)]);
var state_64488__$1 = (function (){var statearr_64516 = state_64488;
(statearr_64516[(24)] = inst_64346__$1);

return statearr_64516;
})();
if(cljs.core.truth_(inst_64346__$1)){
var statearr_64517_68588 = state_64488__$1;
(statearr_64517_68588[(1)] = (89));

} else {
var statearr_64518_68589 = state_64488__$1;
(statearr_64518_68589[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (46))){
var state_64488__$1 = state_64488;
var statearr_64520_68590 = state_64488__$1;
(statearr_64520_68590[(2)] = null);

(statearr_64520_68590[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (4))){
var inst_64120 = (state_64488[(25)]);
var inst_64112 = (state_64488[(26)]);
var inst_64124 = (state_64488[(11)]);
var inst_64119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64112,(0),null);
var inst_64120__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64112,(1),null);
var inst_64121 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64122 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),inst_64120__$1];
var inst_64123 = (new cljs.core.PersistentVector(null,2,(5),inst_64121,inst_64122,null));
var inst_64124__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_64123);
var inst_64126 = (inst_64124__$1 == null);
var inst_64127 = cljs.core.not(inst_64126);
var state_64488__$1 = (function (){var statearr_64522 = state_64488;
(statearr_64522[(25)] = inst_64120__$1);

(statearr_64522[(9)] = inst_64119);

(statearr_64522[(11)] = inst_64124__$1);

return statearr_64522;
})();
if(inst_64127){
var statearr_64523_68591 = state_64488__$1;
(statearr_64523_68591[(1)] = (7));

} else {
var statearr_64524_68593 = state_64488__$1;
(statearr_64524_68593[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (77))){
var inst_64106 = (state_64488[(12)]);
var inst_64289 = (state_64488[(27)]);
var inst_64294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64289,(0),null);
var inst_64295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64289,(1),null);
var inst_64296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64289,(2),null);
var tmp64519 = inst_64106;
var inst_64103 = inst_64294;
var inst_64104 = inst_64295;
var inst_64105 = inst_64296;
var inst_64106__$1 = tmp64519;
var state_64488__$1 = (function (){var statearr_64525 = state_64488;
(statearr_64525[(16)] = inst_64104);

(statearr_64525[(12)] = inst_64106__$1);

(statearr_64525[(17)] = inst_64105);

(statearr_64525[(18)] = inst_64103);

return statearr_64525;
})();
var statearr_64526_68594 = state_64488__$1;
(statearr_64526_68594[(2)] = null);

(statearr_64526_68594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (106))){
var inst_64398 = (state_64488[(28)]);
var inst_64106 = (state_64488[(12)]);
var inst_64403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64398,(0),null);
var inst_64404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64398,(1),null);
var inst_64405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64398,(2),null);
var tmp64521 = inst_64106;
var inst_64103 = inst_64403;
var inst_64104 = inst_64404;
var inst_64105 = inst_64405;
var inst_64106__$1 = tmp64521;
var state_64488__$1 = (function (){var statearr_64527 = state_64488;
(statearr_64527[(16)] = inst_64104);

(statearr_64527[(12)] = inst_64106__$1);

(statearr_64527[(17)] = inst_64105);

(statearr_64527[(18)] = inst_64103);

return statearr_64527;
})();
var statearr_64528_68595 = state_64488__$1;
(statearr_64528_68595[(2)] = null);

(statearr_64528_68595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (119))){
var inst_64469 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64529_68597 = state_64488__$1;
(statearr_64529_68597[(2)] = inst_64469);

(statearr_64529_68597[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (95))){
var inst_64386 = (state_64488[(2)]);
var inst_64387 = cljs.core.async.close_BANG_(ch);
var state_64488__$1 = (function (){var statearr_64530 = state_64488;
(statearr_64530[(29)] = inst_64386);

return statearr_64530;
})();
var statearr_64531_68598 = state_64488__$1;
(statearr_64531_68598[(2)] = inst_64387);

(statearr_64531_68598[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (54))){
var inst_64227 = (state_64488[(30)]);
var inst_64234 = com.wsscode.async.async_cljs.promise_QMARK_(inst_64227);
var state_64488__$1 = state_64488;
if(cljs.core.truth_(inst_64234)){
var statearr_64532_68603 = state_64488__$1;
(statearr_64532_68603[(1)] = (57));

} else {
var statearr_64533_68604 = state_64488__$1;
(statearr_64533_68604[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (92))){
var inst_64359 = (state_64488[(19)]);
var inst_64150 = (state_64488[(8)]);
var inst_64364 = com.wsscode.pathom.core.add_error(inst_64150,inst_64359);
var state_64488__$1 = state_64488;
var statearr_64534_68605 = state_64488__$1;
(statearr_64534_68605[(2)] = inst_64364);

(statearr_64534_68605[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (104))){
var inst_64474 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64535_68606 = state_64488__$1;
(statearr_64535_68606[(2)] = inst_64474);

(statearr_64535_68606[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (15))){
var inst_64145 = (state_64488[(31)]);
var inst_64148 = (state_64488[(32)]);
var inst_64152 = (state_64488[(33)]);
var inst_64120 = (state_64488[(25)]);
var inst_64151 = (state_64488[(34)]);
var inst_64150 = (state_64488[(8)]);
var inst_64119 = (state_64488[(9)]);
var inst_64145__$1 = (state_64488[(2)]);
var inst_64146 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_64145__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_64147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64145__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_64148__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64145__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_64149 = com.wsscode.pathom.connect.resolver__GT_output(env__$1,inst_64120);
var inst_64150__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_64145__$1);
var inst_64151__$1 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_64150__$1);
var inst_64152__$1 = cljs.core.select_keys(inst_64151__$1,inst_64148__$1);
var inst_64153 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_64154 = [key,inst_64120,inst_64152__$1];
var inst_64155 = cljs.core.PersistentHashMap.fromArrays(inst_64153,inst_64154);
var inst_64156 = cljs.core.contains_QMARK_(inst_64151__$1,inst_64119);
var state_64488__$1 = (function (){var statearr_64536 = state_64488;
(statearr_64536[(35)] = inst_64147);

(statearr_64536[(31)] = inst_64145__$1);

(statearr_64536[(32)] = inst_64148__$1);

(statearr_64536[(36)] = inst_64155);

(statearr_64536[(33)] = inst_64152__$1);

(statearr_64536[(34)] = inst_64151__$1);

(statearr_64536[(37)] = inst_64146);

(statearr_64536[(8)] = inst_64150__$1);

(statearr_64536[(38)] = inst_64149);

return statearr_64536;
})();
if(inst_64156){
var statearr_64537_68612 = state_64488__$1;
(statearr_64537_68612[(1)] = (16));

} else {
var statearr_64538_68613 = state_64488__$1;
(statearr_64538_68613[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (48))){
var inst_64259 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64539_68614 = state_64488__$1;
(statearr_64539_68614[(2)] = inst_64259);

(statearr_64539_68614[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (50))){
var inst_64256 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64540_68615 = state_64488__$1;
(statearr_64540_68615[(2)] = inst_64256);

(statearr_64540_68615[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (116))){
var inst_64440 = (state_64488[(39)]);
var inst_64440__$1 = (state_64488[(2)]);
var state_64488__$1 = (function (){var statearr_64541 = state_64488;
(statearr_64541[(39)] = inst_64440__$1);

return statearr_64541;
})();
if(cljs.core.truth_(inst_64440__$1)){
var statearr_64542_68616 = state_64488__$1;
(statearr_64542_68616[(1)] = (117));

} else {
var statearr_64543_68617 = state_64488__$1;
(statearr_64543_68617[(1)] = (118));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (75))){
var inst_64313 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64544_68618 = state_64488__$1;
(statearr_64544_68618[(2)] = inst_64313);

(statearr_64544_68618[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (99))){
var inst_64119 = (state_64488[(9)]);
var inst_64376 = (state_64488[(40)]);
var inst_64379 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_64376,inst_64119,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882));
var state_64488__$1 = state_64488;
var statearr_64545_68619 = state_64488__$1;
(statearr_64545_68619[(2)] = inst_64379);

(statearr_64545_68619[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (21))){
var inst_64263 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64546_68620 = state_64488__$1;
(statearr_64546_68620[(2)] = inst_64263);

(statearr_64546_68620[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (31))){
var state_64488__$1 = state_64488;
var statearr_64547_68621 = state_64488__$1;
(statearr_64547_68621[(1)] = (46));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (113))){
var inst_64265 = (state_64488[(21)]);
var inst_64266 = (state_64488[(10)]);
var inst_64433 = cljs.core.PersistentHashMap.EMPTY;
var inst_64434 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_64435 = [inst_64265];
var inst_64436 = cljs.core.PersistentHashMap.fromArrays(inst_64434,inst_64435);
var inst_64437 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_64436);
var inst_64438 = (inst_64266.cljs$core$IFn$_invoke$arity$2 ? inst_64266.cljs$core$IFn$_invoke$arity$2(inst_64433,inst_64437) : inst_64266.call(null,inst_64433,inst_64437));
var state_64488__$1 = state_64488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64488__$1,(116),inst_64438);
} else {
if((state_val_64489 === (32))){
var inst_64261 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64549_68625 = state_64488__$1;
(statearr_64549_68625[(2)] = inst_64261);

(statearr_64549_68625[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (40))){
var inst_64192 = (state_64488[(41)]);
var inst_64210 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_64192);
var state_64488__$1 = state_64488;
var statearr_64551_68627 = state_64488__$1;
(statearr_64551_68627[(2)] = inst_64210);

(statearr_64551_68627[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (91))){
var inst_64389 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64552_68628 = state_64488__$1;
(statearr_64552_68628[(2)] = inst_64389);

(statearr_64552_68628[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (117))){
var inst_64106 = (state_64488[(12)]);
var inst_64440 = (state_64488[(39)]);
var inst_64445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64440,(0),null);
var inst_64446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64440,(1),null);
var inst_64447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64440,(2),null);
var tmp64550 = inst_64106;
var inst_64103 = inst_64445;
var inst_64104 = inst_64446;
var inst_64105 = inst_64447;
var inst_64106__$1 = tmp64550;
var state_64488__$1 = (function (){var statearr_64553 = state_64488;
(statearr_64553[(16)] = inst_64104);

(statearr_64553[(12)] = inst_64106__$1);

(statearr_64553[(17)] = inst_64105);

(statearr_64553[(18)] = inst_64103);

return statearr_64553;
})();
var statearr_64554_68629 = state_64488__$1;
(statearr_64554_68629[(2)] = null);

(statearr_64554_68629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (108))){
var inst_64430 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64555_68630 = state_64488__$1;
(statearr_64555_68630[(2)] = inst_64430);

(statearr_64555_68630[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (56))){
var inst_64231 = (state_64488[(2)]);
var inst_64232 = com.wsscode.async.async_cljs.throw_err(inst_64231);
var state_64488__$1 = state_64488;
var statearr_64556_68633 = state_64488__$1;
(statearr_64556_68633[(2)] = inst_64232);

(statearr_64556_68633[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (33))){
var inst_64192 = (state_64488[(41)]);
var inst_64192__$1 = (state_64488[(2)]);
var inst_64194 = (inst_64192__$1 == null);
var inst_64195 = cljs.core.not(inst_64194);
var state_64488__$1 = (function (){var statearr_64557 = state_64488;
(statearr_64557[(41)] = inst_64192__$1);

return statearr_64557;
})();
if(inst_64195){
var statearr_64558_68635 = state_64488__$1;
(statearr_64558_68635[(1)] = (34));

} else {
var statearr_64559_68636 = state_64488__$1;
(statearr_64559_68636[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (13))){
var inst_64124 = (state_64488[(11)]);
var inst_64142 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_64124);
var state_64488__$1 = state_64488;
var statearr_64560_68637 = state_64488__$1;
(statearr_64560_68637[(2)] = inst_64142);

(statearr_64560_68637[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (22))){
var state_64488__$1 = state_64488;
var statearr_64561_68638 = state_64488__$1;
(statearr_64561_68638[(2)] = processing_sequence);

(statearr_64561_68638[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (90))){
var inst_64147 = (state_64488[(35)]);
var inst_64317 = (state_64488[(23)]);
var inst_64145 = (state_64488[(31)]);
var inst_64098 = (state_64488[(14)]);
var inst_64099 = (state_64488[(15)]);
var inst_64148 = (state_64488[(32)]);
var inst_64155 = (state_64488[(36)]);
var inst_64359 = (state_64488[(19)]);
var inst_64104 = (state_64488[(16)]);
var inst_64152 = (state_64488[(33)]);
var inst_64106 = (state_64488[(12)]);
var inst_64120 = (state_64488[(25)]);
var inst_64105 = (state_64488[(17)]);
var inst_64346 = (state_64488[(24)]);
var inst_64113 = (state_64488[(42)]);
var inst_64151 = (state_64488[(34)]);
var inst_64146 = (state_64488[(37)]);
var inst_64103 = (state_64488[(18)]);
var inst_64150 = (state_64488[(8)]);
var inst_64266 = (state_64488[(10)]);
var inst_64112 = (state_64488[(26)]);
var inst_64149 = (state_64488[(38)]);
var inst_64096 = (state_64488[(13)]);
var inst_64119 = (state_64488[(9)]);
var inst_64356 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_64357 = [inst_64317,inst_64119];
var inst_64358 = cljs.core.PersistentHashMap.fromArrays(inst_64356,inst_64357);
var inst_64359__$1 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_64358);
var inst_64360 = (function (){var input = inst_64148;
var vec__64108 = inst_64103;
var step = inst_64112;
var vec__64115 = inst_64112;
var entity = inst_64151;
var seq__64109 = inst_64113;
var first__64095 = inst_64098;
var key_SINGLEQUOTE_ = inst_64119;
var G__64092 = inst_64103;
var response = inst_64317;
var cache_QMARK_ = inst_64146;
var out_left = inst_64105;
var failed_resolvers = inst_64104;
var seq__64094 = inst_64099;
var vec__64093 = inst_64096;
var temp__5718__auto____$1 = inst_64346;
var err = inst_64359__$1;
var batch_QMARK_ = inst_64147;
var output = inst_64149;
var env__$2 = inst_64150;
var e = inst_64152;
var resolver_sym = inst_64120;
var waiting__$1 = inst_64106;
var trace_data = inst_64155;
var resolver = inst_64145;
var replan = inst_64266;
var map__64118 = inst_64145;
var tail = inst_64113;
var first__64110 = inst_64112;
return ((function (input,vec__64108,step,vec__64115,entity,seq__64109,first__64095,key_SINGLEQUOTE_,G__64092,response,cache_QMARK_,out_left,failed_resolvers,seq__64094,vec__64093,temp__5718__auto____$1,err,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,replan,map__64118,tail,first__64110,inst_64147,inst_64317,inst_64145,inst_64098,inst_64099,inst_64148,inst_64155,inst_64359,inst_64104,inst_64152,inst_64106,inst_64120,inst_64105,inst_64346,inst_64113,inst_64151,inst_64146,inst_64103,inst_64150,inst_64266,inst_64112,inst_64149,inst_64096,inst_64119,inst_64356,inst_64357,inst_64358,inst_64359__$1,state_val_64489,c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (p1__64082_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__64082_SHARP_], 0));
});
;})(input,vec__64108,step,vec__64115,entity,seq__64109,first__64095,key_SINGLEQUOTE_,G__64092,response,cache_QMARK_,out_left,failed_resolvers,seq__64094,vec__64093,temp__5718__auto____$1,err,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,replan,map__64118,tail,first__64110,inst_64147,inst_64317,inst_64145,inst_64098,inst_64099,inst_64148,inst_64155,inst_64359,inst_64104,inst_64152,inst_64106,inst_64120,inst_64105,inst_64346,inst_64113,inst_64151,inst_64146,inst_64103,inst_64150,inst_64266,inst_64112,inst_64149,inst_64096,inst_64119,inst_64356,inst_64357,inst_64358,inst_64359__$1,state_val_64489,c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_64361 = com.wsscode.pathom.core.swap_entity_BANG_(inst_64150,inst_64360);
var inst_64362 = cljs.core.seq(inst_64113);
var state_64488__$1 = (function (){var statearr_64562 = state_64488;
(statearr_64562[(19)] = inst_64359__$1);

(statearr_64562[(43)] = inst_64361);

return statearr_64562;
})();
if(inst_64362){
var statearr_64563_68640 = state_64488__$1;
(statearr_64563_68640[(1)] = (92));

} else {
var statearr_64564_68641 = state_64488__$1;
(statearr_64564_68641[(1)] = (93));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (109))){
var inst_64427 = (state_64488[(2)]);
var inst_64428 = cljs.core.async.close_BANG_(ch);
var state_64488__$1 = (function (){var statearr_64565 = state_64488;
(statearr_64565[(44)] = inst_64427);

return statearr_64565;
})();
var statearr_64566_68643 = state_64488__$1;
(statearr_64566_68643[(2)] = inst_64428);

(statearr_64566_68643[(1)] = (108));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (36))){
var inst_64208 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
if(cljs.core.truth_(inst_64208)){
var statearr_64567_68644 = state_64488__$1;
(statearr_64567_68644[(1)] = (40));

} else {
var statearr_64568_68646 = state_64488__$1;
(statearr_64568_68646[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (41))){
var inst_64192 = (state_64488[(41)]);
var state_64488__$1 = state_64488;
var statearr_64570_68647 = state_64488__$1;
(statearr_64570_68647[(2)] = inst_64192);

(statearr_64570_68647[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (118))){
var inst_64120 = (state_64488[(25)]);
var inst_64150 = (state_64488[(8)]);
var inst_64265 = (state_64488[(21)]);
var inst_64450 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_64451 = [inst_64265];
var inst_64452 = cljs.core.PersistentHashMap.fromArrays(inst_64450,inst_64451);
var inst_64453 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_64452);
var inst_64454 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_64455 = [new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),key,inst_64120,inst_64265];
var inst_64456 = cljs.core.PersistentHashMap.fromArrays(inst_64454,inst_64455);
var inst_64457 = com.wsscode.pathom.trace.trace(inst_64150,inst_64456);
var inst_64458 = com.wsscode.pathom.core.add_error(inst_64150,inst_64453);
var inst_64459 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_64460 = [key];
var inst_64461 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_64462 = cljs.core.PersistentHashMap.fromArrays(inst_64460,inst_64461);
var inst_64463 = [out,inst_64453,inst_64462];
var inst_64464 = cljs.core.PersistentHashMap.fromArrays(inst_64459,inst_64463);
var state_64488__$1 = (function (){var statearr_64571 = state_64488;
(statearr_64571[(45)] = inst_64457);

(statearr_64571[(46)] = inst_64458);

return statearr_64571;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64488__$1,(120),ch,inst_64464);
} else {
if((state_val_64489 === (89))){
var inst_64106 = (state_64488[(12)]);
var inst_64346 = (state_64488[(24)]);
var inst_64351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64346,(0),null);
var inst_64352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64346,(1),null);
var inst_64353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64346,(2),null);
var tmp64569 = inst_64106;
var inst_64103 = inst_64351;
var inst_64104 = inst_64352;
var inst_64105 = inst_64353;
var inst_64106__$1 = tmp64569;
var state_64488__$1 = (function (){var statearr_64572 = state_64488;
(statearr_64572[(16)] = inst_64104);

(statearr_64572[(12)] = inst_64106__$1);

(statearr_64572[(17)] = inst_64105);

(statearr_64572[(18)] = inst_64103);

return statearr_64572;
})();
var statearr_64573_68651 = state_64488__$1;
(statearr_64573_68651[(2)] = null);

(statearr_64573_68651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (100))){
var inst_64376 = (state_64488[(40)]);
var state_64488__$1 = state_64488;
var statearr_64574_68653 = state_64488__$1;
(statearr_64574_68653[(2)] = inst_64376);

(statearr_64574_68653[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (43))){
var inst_64214 = (state_64488[(47)]);
var state_64488__$1 = state_64488;
var statearr_64575_68654 = state_64488__$1;
(statearr_64575_68654[(2)] = inst_64214);

(statearr_64575_68654[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (61))){
var inst_64227 = (state_64488[(30)]);
var state_64488__$1 = state_64488;
var statearr_64576_68655 = state_64488__$1;
(statearr_64576_68655[(2)] = inst_64227);

(statearr_64576_68655[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (29))){
var inst_64181 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64577_68656 = state_64488__$1;
(statearr_64577_68656[(2)] = inst_64181);

(statearr_64577_68656[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (44))){
var state_64488__$1 = state_64488;
var statearr_64578_68657 = state_64488__$1;
(statearr_64578_68657[(2)] = new cljs.core.Keyword("com.wsscode.pathom.connect","watch-ready","com.wsscode.pathom.connect/watch-ready",943560359));

(statearr_64578_68657[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (93))){
var state_64488__$1 = state_64488;
var statearr_64579_68659 = state_64488__$1;
(statearr_64579_68659[(2)] = null);

(statearr_64579_68659[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (6))){
var inst_64484 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64580_68660 = state_64488__$1;
(statearr_64580_68660[(2)] = inst_64484);

(statearr_64580_68660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (111))){
var inst_64105 = (state_64488[(17)]);
var inst_64420 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882));
var inst_64421 = cljs.core.zipmap(inst_64105,inst_64420);
var state_64488__$1 = state_64488;
var statearr_64581_68661 = state_64488__$1;
(statearr_64581_68661[(2)] = inst_64421);

(statearr_64581_68661[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (28))){
var inst_64171 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64582_68662 = state_64488__$1;
(statearr_64582_68662[(2)] = inst_64171);

(statearr_64582_68662[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (64))){
var inst_64248 = (state_64488[(22)]);
var state_64488__$1 = state_64488;
var statearr_64583_68665 = state_64488__$1;
(statearr_64583_68665[(2)] = inst_64248);

(statearr_64583_68665[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (103))){
var state_64488__$1 = state_64488;
var statearr_64584_68666 = state_64488__$1;
(statearr_64584_68666[(1)] = (113));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (51))){
var inst_64221 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64586_68669 = state_64488__$1;
(statearr_64586_68669[(2)] = inst_64221);

(statearr_64586_68669[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (25))){
var inst_64150 = (state_64488[(8)]);
var inst_64169 = com.wsscode.pathom.connect.parallel_batch(inst_64150);
var state_64488__$1 = state_64488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64488__$1,(28),inst_64169);
} else {
if((state_val_64489 === (34))){
var inst_64192 = (state_64488[(41)]);
var inst_64197 = inst_64192.cljs$lang$protocol_mask$partition0$;
var inst_64198 = (inst_64197 & (64));
var inst_64199 = inst_64192.cljs$core$ISeq$;
var inst_64200 = (cljs.core.PROTOCOL_SENTINEL === inst_64199);
var inst_64201 = ((inst_64198) || (inst_64200));
var state_64488__$1 = state_64488;
if(cljs.core.truth_(inst_64201)){
var statearr_64587_68673 = state_64488__$1;
(statearr_64587_68673[(1)] = (37));

} else {
var statearr_64588_68674 = state_64488__$1;
(statearr_64588_68674[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (17))){
var inst_64146 = (state_64488[(37)]);
var state_64488__$1 = state_64488;
if(cljs.core.truth_(inst_64146)){
var statearr_64589_68675 = state_64488__$1;
(statearr_64589_68675[(1)] = (19));

} else {
var statearr_64590_68676 = state_64488__$1;
(statearr_64590_68676[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (3))){
var inst_64486 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64488__$1,inst_64486);
} else {
if((state_val_64489 === (12))){
var inst_64137 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64591_68687 = state_64488__$1;
(statearr_64591_68687[(2)] = inst_64137);

(statearr_64591_68687[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (2))){
var inst_64103 = (state_64488[(18)]);
var inst_64112 = (state_64488[(26)]);
var inst_64111 = cljs.core.seq(inst_64103);
var inst_64112__$1 = cljs.core.first(inst_64111);
var inst_64113 = cljs.core.next(inst_64111);
var state_64488__$1 = (function (){var statearr_64592 = state_64488;
(statearr_64592[(42)] = inst_64113);

(statearr_64592[(26)] = inst_64112__$1);

return statearr_64592;
})();
if(cljs.core.truth_(inst_64112__$1)){
var statearr_64593_68688 = state_64488__$1;
(statearr_64593_68688[(1)] = (4));

} else {
var statearr_64594_68689 = state_64488__$1;
(statearr_64594_68689[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (66))){
var inst_64253 = (state_64488[(2)]);
var _ = (function (){var statearr_64595 = state_64488;
(statearr_64595[(4)] = cljs.core.rest((state_64488[(4)])));

return statearr_64595;
})();
var state_64488__$1 = state_64488;
var statearr_64596_68690 = state_64488__$1;
(statearr_64596_68690[(2)] = inst_64253);

(statearr_64596_68690[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (107))){
var inst_64120 = (state_64488[(25)]);
var inst_64113 = (state_64488[(42)]);
var inst_64150 = (state_64488[(8)]);
var inst_64265 = (state_64488[(21)]);
var inst_64408 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_64409 = [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416),key,inst_64120];
var inst_64410 = cljs.core.PersistentHashMap.fromArrays(inst_64408,inst_64409);
var inst_64411 = com.wsscode.pathom.trace.trace(inst_64150,inst_64410);
var inst_64412 = com.wsscode.pathom.core.add_error(inst_64150,inst_64265);
var inst_64413 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_64414 = cljs.core.seq(inst_64113);
var state_64488__$1 = (function (){var statearr_64597 = state_64488;
(statearr_64597[(48)] = inst_64413);

(statearr_64597[(49)] = inst_64411);

(statearr_64597[(50)] = inst_64412);

return statearr_64597;
})();
if(inst_64414){
var statearr_64598_68692 = state_64488__$1;
(statearr_64598_68692[(1)] = (110));

} else {
var statearr_64599_68693 = state_64488__$1;
(statearr_64599_68693[(1)] = (111));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (23))){
var inst_64147 = (state_64488[(35)]);
var state_64488__$1 = state_64488;
var statearr_64600_68694 = state_64488__$1;
(statearr_64600_68694[(2)] = inst_64147);

(statearr_64600_68694[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (47))){
var state_64488__$1 = state_64488;
var statearr_64601_68695 = state_64488__$1;
(statearr_64601_68695[(2)] = null);

(statearr_64601_68695[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (35))){
var state_64488__$1 = state_64488;
var statearr_64602_68696 = state_64488__$1;
(statearr_64602_68696[(2)] = false);

(statearr_64602_68696[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (82))){
var inst_64265 = (state_64488[(21)]);
var inst_64393 = com.wsscode.async.async_cljs.error_QMARK_(inst_64265);
var state_64488__$1 = state_64488;
if(inst_64393){
var statearr_64603_68697 = state_64488__$1;
(statearr_64603_68697[(1)] = (102));

} else {
var statearr_64604_68698 = state_64488__$1;
(statearr_64604_68698[(1)] = (103));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (76))){
var inst_64289 = (state_64488[(27)]);
var inst_64289__$1 = (state_64488[(2)]);
var state_64488__$1 = (function (){var statearr_64605 = state_64488;
(statearr_64605[(27)] = inst_64289__$1);

return statearr_64605;
})();
if(cljs.core.truth_(inst_64289__$1)){
var statearr_64606_68699 = state_64488__$1;
(statearr_64606_68699[(1)] = (77));

} else {
var statearr_64607_68700 = state_64488__$1;
(statearr_64607_68700[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (97))){
var inst_64317 = (state_64488[(23)]);
var state_64488__$1 = state_64488;
var statearr_64608_68701 = state_64488__$1;
(statearr_64608_68701[(2)] = inst_64317);

(statearr_64608_68701[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (19))){
var inst_64147 = (state_64488[(35)]);
var state_64488__$1 = state_64488;
if(cljs.core.truth_(inst_64147)){
var statearr_64609_68703 = state_64488__$1;
(statearr_64609_68703[(1)] = (22));

} else {
var statearr_64610_68704 = state_64488__$1;
(statearr_64610_68704[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (57))){
var inst_64227 = (state_64488[(30)]);
var inst_64236 = com.wsscode.async.async_cljs.promise__GT_chan(inst_64227);
var state_64488__$1 = state_64488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64488__$1,(60),inst_64236);
} else {
if((state_val_64489 === (68))){
var inst_64265 = (state_64488[(21)]);
var inst_64272 = (new cljs.core.Keyword("com.wsscode.pathom.connect","watch-ready","com.wsscode.pathom.connect/watch-ready",943560359) === inst_64265);
var state_64488__$1 = state_64488;
if(cljs.core.truth_(inst_64272)){
var statearr_64611_68707 = state_64488__$1;
(statearr_64611_68707[(1)] = (70));

} else {
var statearr_64612_68708 = state_64488__$1;
(statearr_64612_68708[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (11))){
var state_64488__$1 = state_64488;
var statearr_64613_68710 = state_64488__$1;
(statearr_64613_68710[(2)] = false);

(statearr_64613_68710[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (115))){
var inst_64472 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64614_68711 = state_64488__$1;
(statearr_64614_68711[(2)] = inst_64472);

(statearr_64614_68711[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (9))){
var inst_64140 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
if(cljs.core.truth_(inst_64140)){
var statearr_64615_68722 = state_64488__$1;
(statearr_64615_68722[(1)] = (13));

} else {
var statearr_64616_68724 = state_64488__$1;
(statearr_64616_68724[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (5))){
var inst_64482 = cljs.core.async.close_BANG_(ch);
var state_64488__$1 = state_64488;
var statearr_64617_68725 = state_64488__$1;
(statearr_64617_68725[(2)] = inst_64482);

(statearr_64617_68725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (112))){
var inst_64413 = (state_64488[(48)]);
var inst_64265 = (state_64488[(21)]);
var inst_64423 = (state_64488[(2)]);
var inst_64424 = [out,inst_64265,inst_64423];
var inst_64425 = cljs.core.PersistentHashMap.fromArrays(inst_64413,inst_64424);
var state_64488__$1 = state_64488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64488__$1,(109),ch,inst_64425);
} else {
if((state_val_64489 === (83))){
var inst_64476 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64618_68728 = state_64488__$1;
(statearr_64618_68728[(2)] = inst_64476);

(statearr_64618_68728[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (14))){
var inst_64124 = (state_64488[(11)]);
var state_64488__$1 = state_64488;
var statearr_64619_68729 = state_64488__$1;
(statearr_64619_68729[(2)] = inst_64124);

(statearr_64619_68729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (45))){
var inst_64218 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64620_68730 = state_64488__$1;
(statearr_64620_68730[(2)] = inst_64218);

(statearr_64620_68730[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (53))){
var inst_64227 = (state_64488[(30)]);
var state_64488__$1 = state_64488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64488__$1,(56),inst_64227);
} else {
if((state_val_64489 === (78))){
var inst_64119 = (state_64488[(9)]);
var inst_64299 = [new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_64300 = [inst_64119];
var inst_64301 = cljs.core.PersistentHashMap.fromArrays(inst_64299,inst_64300);
var inst_64302 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Waited key missed response",inst_64301);
var inst_64303 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_64304 = cljs.core.PersistentHashMap.EMPTY;
var inst_64305 = [out,inst_64302,inst_64304];
var inst_64306 = cljs.core.PersistentHashMap.fromArrays(inst_64303,inst_64305);
var state_64488__$1 = state_64488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64488__$1,(80),ch,inst_64306);
} else {
if((state_val_64489 === (26))){
var inst_64147 = (state_64488[(35)]);
var inst_64145 = (state_64488[(31)]);
var inst_64098 = (state_64488[(14)]);
var inst_64099 = (state_64488[(15)]);
var inst_64148 = (state_64488[(32)]);
var inst_64155 = (state_64488[(36)]);
var inst_64104 = (state_64488[(16)]);
var inst_64152 = (state_64488[(33)]);
var inst_64106 = (state_64488[(12)]);
var inst_64120 = (state_64488[(25)]);
var inst_64105 = (state_64488[(17)]);
var inst_64113 = (state_64488[(42)]);
var inst_64151 = (state_64488[(34)]);
var inst_64146 = (state_64488[(37)]);
var inst_64103 = (state_64488[(18)]);
var inst_64150 = (state_64488[(8)]);
var inst_64112 = (state_64488[(26)]);
var inst_64149 = (state_64488[(38)]);
var inst_64096 = (state_64488[(13)]);
var inst_64119 = (state_64488[(9)]);
var inst_64173 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_64155,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_64174 = com.wsscode.pathom.trace.trace(inst_64150,inst_64173);
var inst_64175 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64176 = [inst_64120,inst_64152,params];
var inst_64177 = (new cljs.core.PersistentVector(null,3,(5),inst_64175,inst_64176,null));
var inst_64178 = (function (){var input = inst_64148;
var vec__64108 = inst_64103;
var step = inst_64112;
var vec__64115 = inst_64112;
var entity = inst_64151;
var seq__64109 = inst_64113;
var first__64095 = inst_64098;
var key_SINGLEQUOTE_ = inst_64119;
var G__64092 = inst_64103;
var cache_QMARK_ = inst_64146;
var out_left = inst_64105;
var failed_resolvers = inst_64104;
var seq__64094 = inst_64099;
var vec__64093 = inst_64096;
var batch_QMARK_ = inst_64147;
var output = inst_64149;
var env__$2 = inst_64150;
var e = inst_64152;
var resolver_sym = inst_64120;
var waiting__$1 = inst_64106;
var trace_data = inst_64155;
var resolver = inst_64145;
var map__64118 = inst_64145;
var tail = inst_64113;
var first__64110 = inst_64112;
return ((function (input,vec__64108,step,vec__64115,entity,seq__64109,first__64095,key_SINGLEQUOTE_,G__64092,cache_QMARK_,out_left,failed_resolvers,seq__64094,vec__64093,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,map__64118,tail,first__64110,inst_64147,inst_64145,inst_64098,inst_64099,inst_64148,inst_64155,inst_64104,inst_64152,inst_64106,inst_64120,inst_64105,inst_64113,inst_64151,inst_64146,inst_64103,inst_64150,inst_64112,inst_64149,inst_64096,inst_64119,inst_64173,inst_64174,inst_64175,inst_64176,inst_64177,state_val_64489,c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var ch__53995__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__48839__auto___68743__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto___68743__$1,ch__53995__auto__,input,vec__64108,step,vec__64115,entity,seq__64109,first__64095,key_SINGLEQUOTE_,G__64092,cache_QMARK_,out_left,failed_resolvers,seq__64094,vec__64093,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,map__64118,tail,first__64110,inst_64147,inst_64145,inst_64098,inst_64099,inst_64148,inst_64155,inst_64104,inst_64152,inst_64106,inst_64120,inst_64105,inst_64113,inst_64151,inst_64146,inst_64103,inst_64150,inst_64112,inst_64149,inst_64096,inst_64119,inst_64173,inst_64174,inst_64175,inst_64176,inst_64177,state_val_64489,c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto___68743__$1,ch__53995__auto__,input,vec__64108,step,vec__64115,entity,seq__64109,first__64095,key_SINGLEQUOTE_,G__64092,cache_QMARK_,out_left,failed_resolvers,seq__64094,vec__64093,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,map__64118,tail,first__64110,inst_64147,inst_64145,inst_64098,inst_64099,inst_64148,inst_64155,inst_64104,inst_64152,inst_64106,inst_64120,inst_64105,inst_64113,inst_64151,inst_64146,inst_64103,inst_64150,inst_64112,inst_64149,inst_64096,inst_64119,inst_64173,inst_64174,inst_64175,inst_64176,inst_64177,state_val_64489,c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (state_64651){
var state_val_64652 = (state_64651[(1)]);
if((state_val_64652 === (7))){
var inst_64627 = (state_64651[(7)]);
var state_64651__$1 = state_64651;
var statearr_64653_68746 = state_64651__$1;
(statearr_64653_68746[(2)] = inst_64627);

(statearr_64653_68746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64652 === (1))){
var state_64651__$1 = state_64651;
var statearr_64654_68747 = state_64651__$1;
(statearr_64654_68747[(2)] = null);

(statearr_64654_68747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64652 === (4))){
var inst_64621 = (state_64651[(2)]);
var state_64651__$1 = state_64651;
var statearr_64655_68750 = state_64651__$1;
(statearr_64655_68750[(2)] = inst_64621);

(statearr_64655_68750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64652 === (15))){
var inst_64649 = (state_64651[(2)]);
var state_64651__$1 = state_64651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64651__$1,inst_64649);
} else {
if((state_val_64652 === (13))){
var inst_64645 = cljs.core.async.close_BANG_(ch__53995__auto__);
var state_64651__$1 = state_64651;
var statearr_64656_68753 = state_64651__$1;
(statearr_64656_68753[(2)] = inst_64645);

(statearr_64656_68753[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64652 === (6))){
var inst_64627 = (state_64651[(7)]);
var state_64651__$1 = state_64651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64651__$1,(9),inst_64627);
} else {
if((state_val_64652 === (3))){
var inst_64642 = (state_64651[(8)]);
var inst_64642__$1 = (state_64651[(2)]);
var inst_64643 = (inst_64642__$1 == null);
var state_64651__$1 = (function (){var statearr_64657 = state_64651;
(statearr_64657[(8)] = inst_64642__$1);

return statearr_64657;
})();
if(cljs.core.truth_(inst_64643)){
var statearr_64658_68754 = state_64651__$1;
(statearr_64658_68754[(1)] = (13));

} else {
var statearr_64659_68755 = state_64651__$1;
(statearr_64659_68755[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64652 === (12))){
var inst_64639 = (state_64651[(2)]);
var _ = (function (){var statearr_64660 = state_64651;
(statearr_64660[(4)] = cljs.core.rest((state_64651[(4)])));

return statearr_64660;
})();
var state_64651__$1 = state_64651;
var statearr_64661_68756 = state_64651__$1;
(statearr_64661_68756[(2)] = inst_64639);

(statearr_64661_68756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64652 === (2))){
var inst_64627 = (state_64651[(7)]);
var _ = (function (){var statearr_64662 = state_64651;
(statearr_64662[(4)] = cljs.core.cons((5),(state_64651[(4)])));

return statearr_64662;
})();
var inst_64627__$1 = com.wsscode.pathom.connect.call_resolver(env__$2,e);
var inst_64628 = com.wsscode.async.async_cljs.chan_QMARK_(inst_64627__$1);
var state_64651__$1 = (function (){var statearr_64663 = state_64651;
(statearr_64663[(7)] = inst_64627__$1);

return statearr_64663;
})();
if(inst_64628){
var statearr_64664_68760 = state_64651__$1;
(statearr_64664_68760[(1)] = (6));

} else {
var statearr_64665_68762 = state_64651__$1;
(statearr_64665_68762[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64652 === (11))){
var inst_64637 = cljs.core.PersistentHashMap.EMPTY;
var state_64651__$1 = state_64651;
var statearr_64667_68763 = state_64651__$1;
(statearr_64667_68763[(2)] = inst_64637);

(statearr_64667_68763[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64652 === (9))){
var inst_64631 = (state_64651[(2)]);
var state_64651__$1 = state_64651;
var statearr_64668_68774 = state_64651__$1;
(statearr_64668_68774[(2)] = inst_64631);

(statearr_64668_68774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64652 === (5))){
var _ = (function (){var statearr_64669 = state_64651;
(statearr_64669[(4)] = cljs.core.rest((state_64651[(4)])));

return statearr_64669;
})();
var state_64651__$1 = state_64651;
var ex64666 = (state_64651__$1[(2)]);
var statearr_64670_68775 = state_64651__$1;
(statearr_64670_68775[(5)] = ex64666);


var statearr_64671_68776 = state_64651__$1;
(statearr_64671_68776[(1)] = (4));

(statearr_64671_68776[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64652 === (14))){
var inst_64642 = (state_64651[(8)]);
var inst_64647 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53995__auto__,inst_64642);
var state_64651__$1 = state_64651;
var statearr_64672_68780 = state_64651__$1;
(statearr_64672_68780[(2)] = inst_64647);

(statearr_64672_68780[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64652 === (10))){
var inst_64634 = (state_64651[(9)]);
var state_64651__$1 = state_64651;
var statearr_64673_68782 = state_64651__$1;
(statearr_64673_68782[(2)] = inst_64634);

(statearr_64673_68782[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64652 === (8))){
var inst_64634 = (state_64651[(9)]);
var inst_64634__$1 = (state_64651[(2)]);
var state_64651__$1 = (function (){var statearr_64674 = state_64651;
(statearr_64674[(9)] = inst_64634__$1);

return statearr_64674;
})();
if(cljs.core.truth_(inst_64634__$1)){
var statearr_64675_68784 = state_64651__$1;
(statearr_64675_68784[(1)] = (10));

} else {
var statearr_64676_68785 = state_64651__$1;
(statearr_64676_68785[(1)] = (11));

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
});})(c__48839__auto___68743__$1,ch__53995__auto__,input,vec__64108,step,vec__64115,entity,seq__64109,first__64095,key_SINGLEQUOTE_,G__64092,cache_QMARK_,out_left,failed_resolvers,seq__64094,vec__64093,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,map__64118,tail,first__64110,inst_64147,inst_64145,inst_64098,inst_64099,inst_64148,inst_64155,inst_64104,inst_64152,inst_64106,inst_64120,inst_64105,inst_64113,inst_64151,inst_64146,inst_64103,inst_64150,inst_64112,inst_64149,inst_64096,inst_64119,inst_64173,inst_64174,inst_64175,inst_64176,inst_64177,state_val_64489,c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
;
return ((function (switch__48139__auto__,c__48839__auto___68743__$1,ch__53995__auto__,input,vec__64108,step,vec__64115,entity,seq__64109,first__64095,key_SINGLEQUOTE_,G__64092,cache_QMARK_,out_left,failed_resolvers,seq__64094,vec__64093,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,map__64118,tail,first__64110,inst_64147,inst_64145,inst_64098,inst_64099,inst_64148,inst_64155,inst_64104,inst_64152,inst_64106,inst_64120,inst_64105,inst_64113,inst_64151,inst_64146,inst_64103,inst_64150,inst_64112,inst_64149,inst_64096,inst_64119,inst_64173,inst_64174,inst_64175,inst_64176,inst_64177,state_val_64489,c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto____0 = (function (){
var statearr_64677 = [null,null,null,null,null,null,null,null,null,null];
(statearr_64677[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto__);

(statearr_64677[(1)] = (1));

return statearr_64677;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto____1 = (function (state_64651){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_64651);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e64678){var ex__48143__auto__ = e64678;
var statearr_64679_68790 = state_64651;
(statearr_64679_68790[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_64651[(4)]))){
var statearr_64680_68791 = state_64651;
(statearr_64680_68791[(1)] = cljs.core.first((state_64651[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68794 = state_64651;
state_64651 = G__68794;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto__ = function(state_64651){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto____1.call(this,state_64651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto___68743__$1,ch__53995__auto__,input,vec__64108,step,vec__64115,entity,seq__64109,first__64095,key_SINGLEQUOTE_,G__64092,cache_QMARK_,out_left,failed_resolvers,seq__64094,vec__64093,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,map__64118,tail,first__64110,inst_64147,inst_64145,inst_64098,inst_64099,inst_64148,inst_64155,inst_64104,inst_64152,inst_64106,inst_64120,inst_64105,inst_64113,inst_64151,inst_64146,inst_64103,inst_64150,inst_64112,inst_64149,inst_64096,inst_64119,inst_64173,inst_64174,inst_64175,inst_64176,inst_64177,state_val_64489,c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var state__48841__auto__ = (function (){var statearr_64681 = f__48840__auto__();
(statearr_64681[(6)] = c__48839__auto___68743__$1);

return statearr_64681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto___68743__$1,ch__53995__auto__,input,vec__64108,step,vec__64115,entity,seq__64109,first__64095,key_SINGLEQUOTE_,G__64092,cache_QMARK_,out_left,failed_resolvers,seq__64094,vec__64093,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,map__64118,tail,first__64110,inst_64147,inst_64145,inst_64098,inst_64099,inst_64148,inst_64155,inst_64104,inst_64152,inst_64106,inst_64120,inst_64105,inst_64113,inst_64151,inst_64146,inst_64103,inst_64150,inst_64112,inst_64149,inst_64096,inst_64119,inst_64173,inst_64174,inst_64175,inst_64176,inst_64177,state_val_64489,c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
);


return ch__53995__auto__;
});
;})(input,vec__64108,step,vec__64115,entity,seq__64109,first__64095,key_SINGLEQUOTE_,G__64092,cache_QMARK_,out_left,failed_resolvers,seq__64094,vec__64093,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,map__64118,tail,first__64110,inst_64147,inst_64145,inst_64098,inst_64099,inst_64148,inst_64155,inst_64104,inst_64152,inst_64106,inst_64120,inst_64105,inst_64113,inst_64151,inst_64146,inst_64103,inst_64150,inst_64112,inst_64149,inst_64096,inst_64119,inst_64173,inst_64174,inst_64175,inst_64176,inst_64177,state_val_64489,c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_64179 = com.wsscode.pathom.core.cached_async(inst_64150,inst_64177,inst_64178);
var state_64488__$1 = (function (){var statearr_64682 = state_64488;
(statearr_64682[(51)] = inst_64174);

return statearr_64682;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64488__$1,(29),inst_64179);
} else {
if((state_val_64489 === (16))){
var inst_64151 = (state_64488[(34)]);
var inst_64119 = (state_64488[(9)]);
var inst_64158 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64159 = [inst_64119];
var inst_64160 = (new cljs.core.PersistentVector(null,1,(5),inst_64158,inst_64159,null));
var inst_64161 = cljs.core.select_keys(inst_64151,inst_64160);
var state_64488__$1 = state_64488;
var statearr_64683_68797 = state_64488__$1;
(statearr_64683_68797[(2)] = inst_64161);

(statearr_64683_68797[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (81))){
var inst_64147 = (state_64488[(35)]);
var inst_64317 = (state_64488[(23)]);
var inst_64145 = (state_64488[(31)]);
var inst_64098 = (state_64488[(14)]);
var inst_64099 = (state_64488[(15)]);
var inst_64148 = (state_64488[(32)]);
var inst_64155 = (state_64488[(36)]);
var inst_64104 = (state_64488[(16)]);
var inst_64152 = (state_64488[(33)]);
var inst_64106 = (state_64488[(12)]);
var inst_64120 = (state_64488[(25)]);
var inst_64105 = (state_64488[(17)]);
var inst_64113 = (state_64488[(42)]);
var inst_64151 = (state_64488[(34)]);
var inst_64146 = (state_64488[(37)]);
var inst_64103 = (state_64488[(18)]);
var inst_64150 = (state_64488[(8)]);
var inst_64265 = (state_64488[(21)]);
var inst_64266 = (state_64488[(10)]);
var inst_64112 = (state_64488[(26)]);
var inst_64149 = (state_64488[(38)]);
var inst_64096 = (state_64488[(13)]);
var inst_64119 = (state_64488[(9)]);
var inst_64317__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_64265,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_64318 = (function (){var input = inst_64148;
var vec__64108 = inst_64103;
var step = inst_64112;
var vec__64115 = inst_64112;
var entity = inst_64151;
var seq__64109 = inst_64113;
var first__64095 = inst_64098;
var key_SINGLEQUOTE_ = inst_64119;
var G__64092 = inst_64103;
var response = inst_64317__$1;
var cache_QMARK_ = inst_64146;
var out_left = inst_64105;
var failed_resolvers = inst_64104;
var seq__64094 = inst_64099;
var vec__64093 = inst_64096;
var batch_QMARK_ = inst_64147;
var output = inst_64149;
var env__$2 = inst_64150;
var e = inst_64152;
var resolver_sym = inst_64120;
var waiting__$1 = inst_64106;
var trace_data = inst_64155;
var resolver = inst_64145;
var replan = inst_64266;
var map__64118 = inst_64145;
var tail = inst_64113;
var first__64110 = inst_64112;
return ((function (input,vec__64108,step,vec__64115,entity,seq__64109,first__64095,key_SINGLEQUOTE_,G__64092,response,cache_QMARK_,out_left,failed_resolvers,seq__64094,vec__64093,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,replan,map__64118,tail,first__64110,inst_64147,inst_64317,inst_64145,inst_64098,inst_64099,inst_64148,inst_64155,inst_64104,inst_64152,inst_64106,inst_64120,inst_64105,inst_64113,inst_64151,inst_64146,inst_64103,inst_64150,inst_64265,inst_64266,inst_64112,inst_64149,inst_64096,inst_64119,inst_64317__$1,state_val_64489,c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (p1__64081_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__64081_SHARP_], 0));
});
;})(input,vec__64108,step,vec__64115,entity,seq__64109,first__64095,key_SINGLEQUOTE_,G__64092,response,cache_QMARK_,out_left,failed_resolvers,seq__64094,vec__64093,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,replan,map__64118,tail,first__64110,inst_64147,inst_64317,inst_64145,inst_64098,inst_64099,inst_64148,inst_64155,inst_64104,inst_64152,inst_64106,inst_64120,inst_64105,inst_64113,inst_64151,inst_64146,inst_64103,inst_64150,inst_64265,inst_64266,inst_64112,inst_64149,inst_64096,inst_64119,inst_64317__$1,state_val_64489,c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_64319 = com.wsscode.pathom.core.swap_entity_BANG_(inst_64150,inst_64318);
var inst_64321 = cljs.core.contains_QMARK_(inst_64317__$1,inst_64119);
var inst_64322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64317__$1,inst_64119);
var inst_64323 = (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(inst_64322) : com.wsscode.pathom.core.break_values.call(null,inst_64322));
var inst_64324 = cljs.core.not(inst_64323);
var inst_64325 = ((inst_64321) && (inst_64324));
var state_64488__$1 = (function (){var statearr_64684 = state_64488;
(statearr_64684[(23)] = inst_64317__$1);

(statearr_64684[(52)] = inst_64319);

return statearr_64684;
})();
if(cljs.core.truth_(inst_64325)){
var statearr_64685_68801 = state_64488__$1;
(statearr_64685_68801[(1)] = (84));

} else {
var statearr_64686_68802 = state_64488__$1;
(statearr_64686_68802[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (120))){
var inst_64466 = (state_64488[(2)]);
var inst_64467 = cljs.core.async.close_BANG_(ch);
var state_64488__$1 = (function (){var statearr_64687 = state_64488;
(statearr_64687[(53)] = inst_64466);

return statearr_64687;
})();
var statearr_64688_68803 = state_64488__$1;
(statearr_64688_68803[(2)] = inst_64467);

(statearr_64688_68803[(1)] = (119));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (79))){
var inst_64311 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64689_68804 = state_64488__$1;
(statearr_64689_68804[(2)] = inst_64311);

(statearr_64689_68804[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (38))){
var state_64488__$1 = state_64488;
var statearr_64692_68805 = state_64488__$1;
(statearr_64692_68805[(2)] = false);

(statearr_64692_68805[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (98))){
var inst_64113 = (state_64488[(42)]);
var inst_64376 = (state_64488[(2)]);
var inst_64377 = cljs.core.seq(inst_64113);
var state_64488__$1 = (function (){var statearr_64693 = state_64488;
(statearr_64693[(40)] = inst_64376);

return statearr_64693;
})();
if(inst_64377){
var statearr_64694_68806 = state_64488__$1;
(statearr_64694_68806[(1)] = (99));

} else {
var statearr_64695_68807 = state_64488__$1;
(statearr_64695_68807[(1)] = (100));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (87))){
var inst_64327 = (state_64488[(54)]);
var inst_64104 = (state_64488[(16)]);
var inst_64106 = (state_64488[(12)]);
var inst_64105 = (state_64488[(17)]);
var inst_64113 = (state_64488[(42)]);
var inst_64336 = (state_64488[(2)]);
var inst_64337 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_64105,inst_64327);
var tmp64690 = inst_64104;
var tmp64691 = inst_64106;
var inst_64103 = inst_64113;
var inst_64104__$1 = tmp64690;
var inst_64105__$1 = inst_64337;
var inst_64106__$1 = tmp64691;
var state_64488__$1 = (function (){var statearr_64698 = state_64488;
(statearr_64698[(16)] = inst_64104__$1);

(statearr_64698[(12)] = inst_64106__$1);

(statearr_64698[(17)] = inst_64105__$1);

(statearr_64698[(18)] = inst_64103);

(statearr_64698[(55)] = inst_64336);

return statearr_64698;
})();
var statearr_64699_68808 = state_64488__$1;
(statearr_64699_68808[(2)] = null);

(statearr_64699_68808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (30))){
var inst_64155 = (state_64488[(36)]);
var inst_64150 = (state_64488[(8)]);
var inst_64119 = (state_64488[(9)]);
var inst_64187 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inst_64155,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","waiting-resolver","com.wsscode.pathom.connect/waiting-resolver",-321792495),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","waiting-key","com.wsscode.pathom.connect/waiting-key",261572653),inst_64119], 0));
var inst_64188 = com.wsscode.pathom.trace.trace(inst_64150,inst_64187);
var inst_64190 = com.wsscode.pathom.parser.watch_pending_key(inst_64150,inst_64119);
var state_64488__$1 = (function (){var statearr_64700 = state_64488;
(statearr_64700[(56)] = inst_64188);

return statearr_64700;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64488__$1,(33),inst_64190);
} else {
if((state_val_64489 === (73))){
var inst_64104 = (state_64488[(16)]);
var inst_64106 = (state_64488[(12)]);
var inst_64276 = (state_64488[(7)]);
var inst_64105 = (state_64488[(17)]);
var inst_64113 = (state_64488[(42)]);
var inst_64279 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_64105,inst_64276);
var tmp64696 = inst_64104;
var tmp64697 = inst_64106;
var inst_64103 = inst_64113;
var inst_64104__$1 = tmp64696;
var inst_64105__$1 = inst_64279;
var inst_64106__$1 = tmp64697;
var state_64488__$1 = (function (){var statearr_64701 = state_64488;
(statearr_64701[(16)] = inst_64104__$1);

(statearr_64701[(12)] = inst_64106__$1);

(statearr_64701[(17)] = inst_64105__$1);

(statearr_64701[(18)] = inst_64103);

return statearr_64701;
})();
var statearr_64702_68809 = state_64488__$1;
(statearr_64702_68809[(2)] = null);

(statearr_64702_68809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (96))){
var inst_64317 = (state_64488[(23)]);
var inst_64119 = (state_64488[(9)]);
var inst_64373 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_64317,inst_64119,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_64488__$1 = state_64488;
var statearr_64703_68810 = state_64488__$1;
(statearr_64703_68810[(2)] = inst_64373);

(statearr_64703_68810[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (10))){
var state_64488__$1 = state_64488;
var statearr_64704_68811 = state_64488__$1;
(statearr_64704_68811[(2)] = true);

(statearr_64704_68811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (18))){
var inst_64147 = (state_64488[(35)]);
var inst_64145 = (state_64488[(31)]);
var inst_64098 = (state_64488[(14)]);
var inst_64099 = (state_64488[(15)]);
var inst_64148 = (state_64488[(32)]);
var inst_64155 = (state_64488[(36)]);
var inst_64104 = (state_64488[(16)]);
var inst_64152 = (state_64488[(33)]);
var inst_64106 = (state_64488[(12)]);
var inst_64120 = (state_64488[(25)]);
var inst_64105 = (state_64488[(17)]);
var inst_64113 = (state_64488[(42)]);
var inst_64151 = (state_64488[(34)]);
var inst_64146 = (state_64488[(37)]);
var inst_64103 = (state_64488[(18)]);
var inst_64150 = (state_64488[(8)]);
var inst_64265 = (state_64488[(21)]);
var inst_64112 = (state_64488[(26)]);
var inst_64149 = (state_64488[(38)]);
var inst_64096 = (state_64488[(13)]);
var inst_64119 = (state_64488[(9)]);
var inst_64265__$1 = (state_64488[(2)]);
var inst_64266 = (function (){var input = inst_64148;
var vec__64108 = inst_64103;
var step = inst_64112;
var vec__64115 = inst_64112;
var entity = inst_64151;
var seq__64109 = inst_64113;
var first__64095 = inst_64098;
var key_SINGLEQUOTE_ = inst_64119;
var G__64092 = inst_64103;
var response = inst_64265__$1;
var cache_QMARK_ = inst_64146;
var out_left = inst_64105;
var failed_resolvers = inst_64104;
var seq__64094 = inst_64099;
var vec__64093 = inst_64096;
var batch_QMARK_ = inst_64147;
var output = inst_64149;
var env__$2 = inst_64150;
var e = inst_64152;
var resolver_sym = inst_64120;
var waiting__$1 = inst_64106;
var trace_data = inst_64155;
var resolver = inst_64145;
var map__64118 = inst_64145;
var tail = inst_64113;
var first__64110 = inst_64112;
return ((function (input,vec__64108,step,vec__64115,entity,seq__64109,first__64095,key_SINGLEQUOTE_,G__64092,response,cache_QMARK_,out_left,failed_resolvers,seq__64094,vec__64093,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,map__64118,tail,first__64110,inst_64147,inst_64145,inst_64098,inst_64099,inst_64148,inst_64155,inst_64104,inst_64152,inst_64106,inst_64120,inst_64105,inst_64113,inst_64151,inst_64146,inst_64103,inst_64150,inst_64265,inst_64112,inst_64149,inst_64096,inst_64119,inst_64265__$1,state_val_64489,c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (value,error){
var c__48839__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto____$1,input,vec__64108,step,vec__64115,entity,seq__64109,first__64095,key_SINGLEQUOTE_,G__64092,response,cache_QMARK_,out_left,failed_resolvers,seq__64094,vec__64093,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,map__64118,tail,first__64110,inst_64147,inst_64145,inst_64098,inst_64099,inst_64148,inst_64155,inst_64104,inst_64152,inst_64106,inst_64120,inst_64105,inst_64113,inst_64151,inst_64146,inst_64103,inst_64150,inst_64265,inst_64112,inst_64149,inst_64096,inst_64119,inst_64265__$1,state_val_64489,c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto____$1,input,vec__64108,step,vec__64115,entity,seq__64109,first__64095,key_SINGLEQUOTE_,G__64092,response,cache_QMARK_,out_left,failed_resolvers,seq__64094,vec__64093,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,map__64118,tail,first__64110,inst_64147,inst_64145,inst_64098,inst_64099,inst_64148,inst_64155,inst_64104,inst_64152,inst_64106,inst_64120,inst_64105,inst_64113,inst_64151,inst_64146,inst_64103,inst_64150,inst_64265,inst_64112,inst_64149,inst_64096,inst_64119,inst_64265__$1,state_val_64489,c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (state_64728){
var state_val_64729 = (state_64728[(1)]);
if((state_val_64729 === (1))){
var inst_64709 = (state_64728[(7)]);
var inst_64706 = (state_64728[(8)]);
var inst_64706__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers,resolver_sym,error);
var inst_64707 = (function (){var failed_resolvers__$1 = inst_64706__$1;
return ((function (failed_resolvers__$1,inst_64709,inst_64706,inst_64706__$1,state_val_64729,c__48839__auto____$1,input,vec__64108,step,vec__64115,entity,seq__64109,first__64095,key_SINGLEQUOTE_,G__64092,response,cache_QMARK_,out_left,failed_resolvers,seq__64094,vec__64093,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,map__64118,tail,first__64110,inst_64147,inst_64145,inst_64098,inst_64099,inst_64148,inst_64155,inst_64104,inst_64152,inst_64106,inst_64120,inst_64105,inst_64113,inst_64151,inst_64146,inst_64103,inst_64150,inst_64265,inst_64112,inst_64149,inst_64096,inst_64119,inst_64265__$1,state_val_64489,c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (p1__64080_SHARP_){
var x__4222__auto__ = ((function (){var or__4131__auto__ = p1__64080_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() * (2));
var y__4223__auto__ = max_resolver_weight;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});
;})(failed_resolvers__$1,inst_64709,inst_64706,inst_64706__$1,state_val_64729,c__48839__auto____$1,input,vec__64108,step,vec__64115,entity,seq__64109,first__64095,key_SINGLEQUOTE_,G__64092,response,cache_QMARK_,out_left,failed_resolvers,seq__64094,vec__64093,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,map__64118,tail,first__64110,inst_64147,inst_64145,inst_64098,inst_64099,inst_64148,inst_64155,inst_64104,inst_64152,inst_64106,inst_64120,inst_64105,inst_64113,inst_64151,inst_64146,inst_64103,inst_64150,inst_64265,inst_64112,inst_64149,inst_64096,inst_64119,inst_64265__$1,state_val_64489,c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_64708 = com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$2,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_64707], 0));
var inst_64709__$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$2,inst_64706__$1);
var state_64728__$1 = (function (){var statearr_64730 = state_64728;
(statearr_64730[(9)] = inst_64708);

(statearr_64730[(7)] = inst_64709__$1);

(statearr_64730[(8)] = inst_64706__$1);

return statearr_64730;
})();
if(cljs.core.truth_(inst_64709__$1)){
var statearr_64731_68853 = state_64728__$1;
(statearr_64731_68853[(1)] = (2));

} else {
var statearr_64732_68856 = state_64728__$1;
(statearr_64732_68856[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64729 === (2))){
var inst_64715 = (state_64728[(10)]);
var inst_64709 = (state_64728[(7)]);
var inst_64714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64709,(0),null);
var inst_64715__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_64709,(1),null);
var inst_64716 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_64717 = [out,inst_64715__$1,value];
var inst_64718 = cljs.core.PersistentHashMap.fromArrays(inst_64716,inst_64717);
var state_64728__$1 = (function (){var statearr_64733 = state_64728;
(statearr_64733[(10)] = inst_64715__$1);

(statearr_64733[(11)] = inst_64714);

return statearr_64733;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64728__$1,(5),ch,inst_64718);
} else {
if((state_val_64729 === (3))){
var state_64728__$1 = state_64728;
var statearr_64734_68860 = state_64728__$1;
(statearr_64734_68860[(2)] = null);

(statearr_64734_68860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64729 === (4))){
var inst_64726 = (state_64728[(2)]);
var state_64728__$1 = state_64728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64728__$1,inst_64726);
} else {
if((state_val_64729 === (5))){
var inst_64715 = (state_64728[(10)]);
var inst_64714 = (state_64728[(11)]);
var inst_64706 = (state_64728[(8)]);
var inst_64720 = (state_64728[(2)]);
var inst_64721 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64722 = [inst_64714,inst_64706,inst_64715];
var inst_64723 = (new cljs.core.PersistentVector(null,3,(5),inst_64721,inst_64722,null));
var state_64728__$1 = (function (){var statearr_64735 = state_64728;
(statearr_64735[(12)] = inst_64720);

return statearr_64735;
})();
var statearr_64736_68865 = state_64728__$1;
(statearr_64736_68865[(2)] = inst_64723);

(statearr_64736_68865[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__48839__auto____$1,input,vec__64108,step,vec__64115,entity,seq__64109,first__64095,key_SINGLEQUOTE_,G__64092,response,cache_QMARK_,out_left,failed_resolvers,seq__64094,vec__64093,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,map__64118,tail,first__64110,inst_64147,inst_64145,inst_64098,inst_64099,inst_64148,inst_64155,inst_64104,inst_64152,inst_64106,inst_64120,inst_64105,inst_64113,inst_64151,inst_64146,inst_64103,inst_64150,inst_64265,inst_64112,inst_64149,inst_64096,inst_64119,inst_64265__$1,state_val_64489,c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
;
return ((function (switch__48139__auto__,c__48839__auto____$1,input,vec__64108,step,vec__64115,entity,seq__64109,first__64095,key_SINGLEQUOTE_,G__64092,response,cache_QMARK_,out_left,failed_resolvers,seq__64094,vec__64093,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,map__64118,tail,first__64110,inst_64147,inst_64145,inst_64098,inst_64099,inst_64148,inst_64155,inst_64104,inst_64152,inst_64106,inst_64120,inst_64105,inst_64113,inst_64151,inst_64146,inst_64103,inst_64150,inst_64265,inst_64112,inst_64149,inst_64096,inst_64119,inst_64265__$1,state_val_64489,c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto____0 = (function (){
var statearr_64737 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64737[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto__);

(statearr_64737[(1)] = (1));

return statearr_64737;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto____1 = (function (state_64728){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_64728);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e64738){var ex__48143__auto__ = e64738;
var statearr_64739_68871 = state_64728;
(statearr_64739_68871[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_64728[(4)]))){
var statearr_64740_68872 = state_64728;
(statearr_64740_68872[(1)] = cljs.core.first((state_64728[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68873 = state_64728;
state_64728 = G__68873;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto__ = function(state_64728){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto____1.call(this,state_64728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto____$1,input,vec__64108,step,vec__64115,entity,seq__64109,first__64095,key_SINGLEQUOTE_,G__64092,response,cache_QMARK_,out_left,failed_resolvers,seq__64094,vec__64093,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,map__64118,tail,first__64110,inst_64147,inst_64145,inst_64098,inst_64099,inst_64148,inst_64155,inst_64104,inst_64152,inst_64106,inst_64120,inst_64105,inst_64113,inst_64151,inst_64146,inst_64103,inst_64150,inst_64265,inst_64112,inst_64149,inst_64096,inst_64119,inst_64265__$1,state_val_64489,c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var state__48841__auto__ = (function (){var statearr_64741 = f__48840__auto__();
(statearr_64741[(6)] = c__48839__auto____$1);

return statearr_64741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto____$1,input,vec__64108,step,vec__64115,entity,seq__64109,first__64095,key_SINGLEQUOTE_,G__64092,response,cache_QMARK_,out_left,failed_resolvers,seq__64094,vec__64093,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,map__64118,tail,first__64110,inst_64147,inst_64145,inst_64098,inst_64099,inst_64148,inst_64155,inst_64104,inst_64152,inst_64106,inst_64120,inst_64105,inst_64113,inst_64151,inst_64146,inst_64103,inst_64150,inst_64265,inst_64112,inst_64149,inst_64096,inst_64119,inst_64265__$1,state_val_64489,c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
);

return c__48839__auto____$1;
});
;})(input,vec__64108,step,vec__64115,entity,seq__64109,first__64095,key_SINGLEQUOTE_,G__64092,response,cache_QMARK_,out_left,failed_resolvers,seq__64094,vec__64093,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,map__64118,tail,first__64110,inst_64147,inst_64145,inst_64098,inst_64099,inst_64148,inst_64155,inst_64104,inst_64152,inst_64106,inst_64120,inst_64105,inst_64113,inst_64151,inst_64146,inst_64103,inst_64150,inst_64265,inst_64112,inst_64149,inst_64096,inst_64119,inst_64265__$1,state_val_64489,c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_64267 = (new cljs.core.Keyword("com.wsscode.pathom.parser","watch-pending-timeout","com.wsscode.pathom.parser/watch-pending-timeout",1047721820) === inst_64265__$1);
var state_64488__$1 = (function (){var statearr_64742 = state_64488;
(statearr_64742[(21)] = inst_64265__$1);

(statearr_64742[(10)] = inst_64266);

return statearr_64742;
})();
if(cljs.core.truth_(inst_64267)){
var statearr_64743_68879 = state_64488__$1;
(statearr_64743_68879[(1)] = (67));

} else {
var statearr_64744_68880 = state_64488__$1;
(statearr_64744_68880[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (105))){
var inst_64398 = (state_64488[(28)]);
var inst_64398__$1 = (state_64488[(2)]);
var state_64488__$1 = (function (){var statearr_64745 = state_64488;
(statearr_64745[(28)] = inst_64398__$1);

return statearr_64745;
})();
if(cljs.core.truth_(inst_64398__$1)){
var statearr_64746_68881 = state_64488__$1;
(statearr_64746_68881[(1)] = (106));

} else {
var statearr_64747_68882 = state_64488__$1;
(statearr_64747_68882[(1)] = (107));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (52))){
var _ = (function (){var statearr_64750 = state_64488;
(statearr_64750[(4)] = cljs.core.rest((state_64488[(4)])));

return statearr_64750;
})();
var state_64488__$1 = state_64488;
var ex64705 = (state_64488__$1[(2)]);
var statearr_64751_68885 = state_64488__$1;
(statearr_64751_68885[(5)] = ex64705);


var statearr_64752_68886 = state_64488__$1;
(statearr_64752_68886[(1)] = (51));

(statearr_64752_68886[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (114))){
var state_64488__$1 = state_64488;
var statearr_64753_68887 = state_64488__$1;
(statearr_64753_68887[(2)] = null);

(statearr_64753_68887[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (67))){
var inst_64104 = (state_64488[(16)]);
var inst_64106 = (state_64488[(12)]);
var inst_64105 = (state_64488[(17)]);
var inst_64119 = (state_64488[(9)]);
var inst_64269 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(inst_64106,inst_64119);
var tmp64748 = inst_64104;
var tmp64749 = inst_64105;
var inst_64103 = plan;
var inst_64104__$1 = tmp64748;
var inst_64105__$1 = tmp64749;
var inst_64106__$1 = inst_64269;
var state_64488__$1 = (function (){var statearr_64754 = state_64488;
(statearr_64754[(16)] = inst_64104__$1);

(statearr_64754[(12)] = inst_64106__$1);

(statearr_64754[(17)] = inst_64105__$1);

(statearr_64754[(18)] = inst_64103);

return statearr_64754;
})();
var statearr_64755_68888 = state_64488__$1;
(statearr_64755_68888[(2)] = null);

(statearr_64755_68888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (71))){
var inst_64265 = (state_64488[(21)]);
var inst_64315 = cljs.core.map_QMARK_(inst_64265);
var state_64488__$1 = state_64488;
if(inst_64315){
var statearr_64756_68889 = state_64488__$1;
(statearr_64756_68889[(1)] = (81));

} else {
var statearr_64757_68890 = state_64488__$1;
(statearr_64757_68890[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (42))){
var inst_64214 = (state_64488[(47)]);
var inst_64213 = (state_64488[(2)]);
var inst_64214__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_64213,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973));
var state_64488__$1 = (function (){var statearr_64758 = state_64488;
(statearr_64758[(47)] = inst_64214__$1);

return statearr_64758;
})();
if(cljs.core.truth_(inst_64214__$1)){
var statearr_64759_68891 = state_64488__$1;
(statearr_64759_68891[(1)] = (43));

} else {
var statearr_64760_68892 = state_64488__$1;
(statearr_64760_68892[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (80))){
var inst_64308 = (state_64488[(2)]);
var inst_64309 = cljs.core.async.close_BANG_(ch);
var state_64488__$1 = (function (){var statearr_64761 = state_64488;
(statearr_64761[(57)] = inst_64308);

return statearr_64761;
})();
var statearr_64762_68895 = state_64488__$1;
(statearr_64762_68895[(2)] = inst_64309);

(statearr_64762_68895[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (37))){
var state_64488__$1 = state_64488;
var statearr_64763_68896 = state_64488__$1;
(statearr_64763_68896[(2)] = true);

(statearr_64763_68896[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (63))){
var inst_64244 = (state_64488[(2)]);
var state_64488__$1 = state_64488;
var statearr_64764_68898 = state_64488__$1;
(statearr_64764_68898[(2)] = inst_64244);

(statearr_64764_68898[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (94))){
var inst_64317 = (state_64488[(23)]);
var inst_64119 = (state_64488[(9)]);
var inst_64367 = (state_64488[(2)]);
var inst_64368 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_64370 = cljs.core.contains_QMARK_(inst_64317,inst_64119);
var inst_64371 = (!(inst_64370));
var state_64488__$1 = (function (){var statearr_64765 = state_64488;
(statearr_64765[(20)] = inst_64368);

(statearr_64765[(58)] = inst_64367);

return statearr_64765;
})();
if(inst_64371){
var statearr_64766_68909 = state_64488__$1;
(statearr_64766_68909[(1)] = (96));

} else {
var statearr_64767_68910 = state_64488__$1;
(statearr_64767_68910[(1)] = (97));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (8))){
var state_64488__$1 = state_64488;
var statearr_64768_68911 = state_64488__$1;
(statearr_64768_68911[(2)] = false);

(statearr_64768_68911[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (49))){
var inst_64227 = (state_64488[(30)]);
var inst_64152 = (state_64488[(33)]);
var inst_64150 = (state_64488[(8)]);
var _ = (function (){var statearr_64769 = state_64488;
(statearr_64769[(4)] = cljs.core.cons((52),(state_64488[(4)])));

return statearr_64769;
})();
var inst_64227__$1 = com.wsscode.pathom.connect.call_resolver(inst_64150,inst_64152);
var inst_64228 = com.wsscode.async.async_cljs.chan_QMARK_(inst_64227__$1);
var state_64488__$1 = (function (){var statearr_64770 = state_64488;
(statearr_64770[(30)] = inst_64227__$1);

return statearr_64770;
})();
if(inst_64228){
var statearr_64771_68913 = state_64488__$1;
(statearr_64771_68913[(1)] = (53));

} else {
var statearr_64772_68914 = state_64488__$1;
(statearr_64772_68914[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64489 === (84))){
var inst_64317 = (state_64488[(23)]);
var inst_64327 = (state_64488[(54)]);
var inst_64120 = (state_64488[(25)]);
var inst_64150 = (state_64488[(8)]);
var inst_64149 = (state_64488[(38)]);
var inst_64327__$1 = com.wsscode.pathom.connect.output__GT_provides(inst_64149);
var inst_64328 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_64329 = [new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),key,inst_64120];
var inst_64330 = cljs.core.PersistentHashMap.fromArrays(inst_64328,inst_64329);
var inst_64331 = com.wsscode.pathom.trace.trace(inst_64150,inst_64330);
var inst_64332 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_64333 = [inst_64327__$1,inst_64317];
var inst_64334 = cljs.core.PersistentHashMap.fromArrays(inst_64332,inst_64333);
var state_64488__$1 = (function (){var statearr_64773 = state_64488;
(statearr_64773[(54)] = inst_64327__$1);

(statearr_64773[(59)] = inst_64331);

return statearr_64773;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64488__$1,(87),ch,inst_64334);
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
});})(c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
;
return ((function (switch__48139__auto__,c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto____0 = (function (){
var statearr_64774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64774[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto__);

(statearr_64774[(1)] = (1));

return statearr_64774;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto____1 = (function (state_64488){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_64488);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e64775){var ex__48143__auto__ = e64775;
var statearr_64776_68916 = state_64488;
(statearr_64776_68916[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_64488[(4)]))){
var statearr_64777_68919 = state_64488;
(statearr_64777_68919[(1)] = cljs.core.first((state_64488[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68921 = state_64488;
state_64488 = G__68921;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto__ = function(state_64488){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto____1.call(this,state_64488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var state__48841__auto__ = (function (){var statearr_64778 = f__48840__auto__();
(statearr_64778[(6)] = c__48839__auto___68538);

return statearr_64778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto___68538,ch,key,params,env__$1,vec__64086,plan,out,temp__5718__auto__,map__64084,map__64084__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
);


return ch;
})()], null);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.index_reader = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),(function (p__64779){
var map__64780 = p__64779;
var map__64780__$1 = (((((!((map__64780 == null))))?(((((map__64780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64780):map__64780);
var env = map__64780__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64780__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(indexes,env);
})], null);
com.wsscode.pathom.connect.indexed_ident = (function com$wsscode$pathom$connect$indexed_ident(p__64782){
var map__64783 = p__64782;
var map__64783__$1 = (((((!((map__64783 == null))))?(((((map__64783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64783):map__64783);
var env = map__64783__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64783__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
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
com.wsscode.pathom.connect.resolver = (function com$wsscode$pathom$connect$resolver(sym,p__64785,resolve){
var map__64786 = p__64785;
var map__64786__$1 = (((((!((map__64786 == null))))?(((((map__64786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64786):map__64786);
var options = map__64786__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64786__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322));
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Resolver name must be a symbol","\n","(symbol? sym)"].join('')));
}

var G__64788 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),resolve], null),options], 0));
if(cljs.core.truth_(transform)){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__64788) : transform.call(null,G__64788));
} else {
return G__64788;
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
var G__64790 = arguments.length;
switch (G__64790) {
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

com.wsscode.pathom.connect.constantly_resolver.cljs$core$IFn$_invoke$arity$1 = (function (p__64791){
var map__64792 = p__64791;
var map__64792__$1 = (((((!((map__64792 == null))))?(((((map__64792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64792):map__64792);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64792__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64792__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64792__$1,new cljs.core.Keyword(null,"value","value",305978217));
var sym__$1 = (function (){var or__4131__auto__ = sym;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(attribute),(1)))),"-constant"].join(''));
}
})();
return com.wsscode.pathom.connect.resolver(sym__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attribute], null)], null),((function (sym__$1,map__64792,map__64792__$1,attribute,sym,value){
return (function (_,___$1){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([attribute,value]);
});})(sym__$1,map__64792,map__64792__$1,attribute,sym,value))
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
return cljs.core.PersistentArrayMap.createAsIfByAssoc([to,(function (){var G__64794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,from);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__64794) : f.call(null,G__64794));
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
return cljs.core.PersistentArrayMap.createAsIfByAssoc([to,(function (){var G__64795 = env;
var G__64796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,from);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__64795,G__64796) : f.call(null,G__64795,G__64796));
})()]);
});})(sym))
);
});
/**
 * Helper to return a mutation map
 */
com.wsscode.pathom.connect.mutation = (function com$wsscode$pathom$connect$mutation(sym,p__64797,mutate){
var map__64798 = p__64797;
var map__64798__$1 = (((((!((map__64798 == null))))?(((((map__64798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64798):map__64798);
var options = map__64798__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64798__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322));
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Mutation name must be a symbol","\n","(symbol? sym)"].join('')));
}

var G__64800 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),mutate], null),options], 0));
if(cljs.core.truth_(transform)){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__64800) : transform.call(null,G__64800));
} else {
return G__64800;
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
var G__64802 = arguments.length;
switch (G__64802) {
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
var res__54030__auto__ = (function (){var G__64803 = env;
var G__64804 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null);
return (multi_fn.cljs$core$IFn$_invoke$arity$2 ? multi_fn.cljs$core$IFn$_invoke$arity$2(G__64803,G__64804) : multi_fn.call(null,G__64803,G__64804));
})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__54030__auto__)){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,res__54030__auto__){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,res__54030__auto__){
return (function (state_64819){
var state_val_64820 = (state_64819[(1)]);
if((state_val_64820 === (1))){
var state_64819__$1 = state_64819;
var statearr_64821_68960 = state_64819__$1;
(statearr_64821_68960[(2)] = null);

(statearr_64821_68960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64820 === (2))){
var _ = (function (){var statearr_64822 = state_64819;
(statearr_64822[(4)] = cljs.core.cons((5),(state_64819[(4)])));

return statearr_64822;
})();
var state_64819__$1 = state_64819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64819__$1,(6),res__54030__auto__);
} else {
if((state_val_64820 === (3))){
var inst_64817 = (state_64819[(2)]);
var state_64819__$1 = state_64819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64819__$1,inst_64817);
} else {
if((state_val_64820 === (4))){
var inst_64805 = (state_64819[(2)]);
var state_64819__$1 = state_64819;
var statearr_64824_68962 = state_64819__$1;
(statearr_64824_68962[(2)] = inst_64805);

(statearr_64824_68962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64820 === (5))){
var _ = (function (){var statearr_64825 = state_64819;
(statearr_64825[(4)] = cljs.core.rest((state_64819[(4)])));

return statearr_64825;
})();
var state_64819__$1 = state_64819;
var ex64823 = (state_64819__$1[(2)]);
var statearr_64826_68963 = state_64819__$1;
(statearr_64826_68963[(5)] = ex64823);


var statearr_64827_68964 = state_64819__$1;
(statearr_64827_68964[(1)] = (4));

(statearr_64827_68964[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64820 === (6))){
var inst_64812 = (state_64819[(2)]);
var inst_64813 = com.wsscode.async.async_cljs.throw_err(inst_64812);
var inst_64814 = cljs.core.first(inst_64813);
var _ = (function (){var statearr_64828 = state_64819;
(statearr_64828[(4)] = cljs.core.rest((state_64819[(4)])));

return statearr_64828;
})();
var state_64819__$1 = state_64819;
var statearr_64829_68967 = state_64819__$1;
(statearr_64829_68967[(2)] = inst_64814);

(statearr_64829_68967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__48839__auto__,res__54030__auto__))
;
return ((function (switch__48139__auto__,c__48839__auto__,res__54030__auto__){
return (function() {
var com$wsscode$pathom$connect$state_machine__48140__auto__ = null;
var com$wsscode$pathom$connect$state_machine__48140__auto____0 = (function (){
var statearr_64830 = [null,null,null,null,null,null,null];
(statearr_64830[(0)] = com$wsscode$pathom$connect$state_machine__48140__auto__);

(statearr_64830[(1)] = (1));

return statearr_64830;
});
var com$wsscode$pathom$connect$state_machine__48140__auto____1 = (function (state_64819){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_64819);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e64831){var ex__48143__auto__ = e64831;
var statearr_64832_68968 = state_64819;
(statearr_64832_68968[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_64819[(4)]))){
var statearr_64833_68969 = state_64819;
(statearr_64833_68969[(1)] = cljs.core.first((state_64819[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68970 = state_64819;
state_64819 = G__68970;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$connect$state_machine__48140__auto__ = function(state_64819){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$state_machine__48140__auto____1.call(this,state_64819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$state_machine__48140__auto____0;
com$wsscode$pathom$connect$state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$state_machine__48140__auto____1;
return com$wsscode$pathom$connect$state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,res__54030__auto__))
})();
var state__48841__auto__ = (function (){var statearr_64834 = f__48840__auto__();
(statearr_64834[(6)] = c__48839__auto__);

return statearr_64834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,res__54030__auto__))
);

return c__48839__auto__;
} else {
var res = res__54030__auto__;
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
return (function (p__64835){
var map__64836 = p__64835;
var map__64836__$1 = (((((!((map__64836 == null))))?(((((map__64836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64836):map__64836);
var resolver = map__64836__$1;
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64836__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(resolver,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$1(((function (map__64836,map__64836__$1,resolver,resolve){
return (function (env,inputs){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,map__64836,map__64836__$1,resolver,resolve){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,map__64836,map__64836__$1,resolver,resolve){
return (function (state_64848){
var state_val_64849 = (state_64848[(1)]);
if((state_val_64849 === (1))){
var inst_64838 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var inst_64839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var inst_64840 = cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(inst_64838,inputs);
var inst_64841 = (function (){var from_chan = inst_64838;
var out_chan = inst_64839;
return ((function (from_chan,out_chan,inst_64838,inst_64839,inst_64840,state_val_64849,c__48839__auto__,map__64836,map__64836__$1,resolver,resolve){
return (function com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline(input,res_ch){
var c__48839__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto____$1,from_chan,out_chan,inst_64838,inst_64839,inst_64840,state_val_64849,c__48839__auto__,map__64836,map__64836__$1,resolver,resolve){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto____$1,from_chan,out_chan,inst_64838,inst_64839,inst_64840,state_val_64849,c__48839__auto__,map__64836,map__64836__$1,resolver,resolve){
return (function (state_64862){
var state_val_64863 = (state_64862[(1)]);
if((state_val_64863 === (1))){
var inst_64850 = (state_64862[(7)]);
var inst_64850__$1 = (resolve.cljs$core$IFn$_invoke$arity$2 ? resolve.cljs$core$IFn$_invoke$arity$2(env,input) : resolve.call(null,env,input));
var inst_64851 = com.wsscode.async.async_cljs.chan_QMARK_(inst_64850__$1);
var state_64862__$1 = (function (){var statearr_64864 = state_64862;
(statearr_64864[(7)] = inst_64850__$1);

return statearr_64864;
})();
if(inst_64851){
var statearr_64865_68975 = state_64862__$1;
(statearr_64865_68975[(1)] = (2));

} else {
var statearr_64866_68976 = state_64862__$1;
(statearr_64866_68976[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64863 === (2))){
var inst_64850 = (state_64862[(7)]);
var state_64862__$1 = state_64862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64862__$1,(5),inst_64850);
} else {
if((state_val_64863 === (3))){
var inst_64850 = (state_64862[(7)]);
var state_64862__$1 = state_64862;
var statearr_64867_68977 = state_64862__$1;
(statearr_64867_68977[(2)] = inst_64850);

(statearr_64867_68977[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64863 === (4))){
var inst_64857 = (state_64862[(2)]);
var state_64862__$1 = state_64862;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64862__$1,(6),res_ch,inst_64857);
} else {
if((state_val_64863 === (5))){
var inst_64854 = (state_64862[(2)]);
var state_64862__$1 = state_64862;
var statearr_64868_68978 = state_64862__$1;
(statearr_64868_68978[(2)] = inst_64854);

(statearr_64868_68978[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64863 === (6))){
var inst_64859 = (state_64862[(2)]);
var inst_64860 = cljs.core.async.close_BANG_(res_ch);
var state_64862__$1 = (function (){var statearr_64869 = state_64862;
(statearr_64869[(8)] = inst_64859);

return statearr_64869;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64862__$1,inst_64860);
} else {
return null;
}
}
}
}
}
}
});})(c__48839__auto____$1,from_chan,out_chan,inst_64838,inst_64839,inst_64840,state_val_64849,c__48839__auto__,map__64836,map__64836__$1,resolver,resolve))
;
return ((function (switch__48139__auto__,c__48839__auto____$1,from_chan,out_chan,inst_64838,inst_64839,inst_64840,state_val_64849,c__48839__auto__,map__64836,map__64836__$1,resolver,resolve){
return (function() {
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__48140__auto____0 = (function (){
var statearr_64870 = [null,null,null,null,null,null,null,null,null];
(statearr_64870[(0)] = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__48140__auto__);

(statearr_64870[(1)] = (1));

return statearr_64870;
});
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__48140__auto____1 = (function (state_64862){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_64862);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e64871){var ex__48143__auto__ = e64871;
var statearr_64872_68979 = state_64862;
(statearr_64872_68979[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_64862[(4)]))){
var statearr_64873_68980 = state_64862;
(statearr_64873_68980[(1)] = cljs.core.first((state_64862[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68981 = state_64862;
state_64862 = G__68981;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__48140__auto__ = function(state_64862){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__48140__auto____1.call(this,state_64862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__48140__auto____0;
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__48140__auto____1;
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto____$1,from_chan,out_chan,inst_64838,inst_64839,inst_64840,state_val_64849,c__48839__auto__,map__64836,map__64836__$1,resolver,resolve))
})();
var state__48841__auto__ = (function (){var statearr_64874 = f__48840__auto__();
(statearr_64874[(6)] = c__48839__auto____$1);

return statearr_64874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto____$1,from_chan,out_chan,inst_64838,inst_64839,inst_64840,state_val_64849,c__48839__auto__,map__64836,map__64836__$1,resolver,resolve))
);

return c__48839__auto____$1;
});
;})(from_chan,out_chan,inst_64838,inst_64839,inst_64840,state_val_64849,c__48839__auto__,map__64836,map__64836__$1,resolver,resolve))
})();
var inst_64842 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4(n,inst_64839,inst_64841,inst_64838);
var inst_64843 = cljs.core.PersistentVector.EMPTY;
var inst_64844 = cljs.core.async.into(inst_64843,inst_64839);
var state_64848__$1 = (function (){var statearr_64875 = state_64848;
(statearr_64875[(7)] = inst_64842);

(statearr_64875[(8)] = inst_64840);

return statearr_64875;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64848__$1,(2),inst_64844);
} else {
if((state_val_64849 === (2))){
var inst_64846 = (state_64848[(2)]);
var state_64848__$1 = state_64848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64848__$1,inst_64846);
} else {
return null;
}
}
});})(c__48839__auto__,map__64836,map__64836__$1,resolver,resolve))
;
return ((function (switch__48139__auto__,c__48839__auto__,map__64836,map__64836__$1,resolver,resolve){
return (function() {
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__48140__auto____0 = (function (){
var statearr_64876 = [null,null,null,null,null,null,null,null,null];
(statearr_64876[(0)] = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__48140__auto__);

(statearr_64876[(1)] = (1));

return statearr_64876;
});
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__48140__auto____1 = (function (state_64848){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_64848);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e64877){var ex__48143__auto__ = e64877;
var statearr_64878_68982 = state_64848;
(statearr_64878_68982[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_64848[(4)]))){
var statearr_64879_68983 = state_64848;
(statearr_64879_68983[(1)] = cljs.core.first((state_64848[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68984 = state_64848;
state_64848 = G__68984;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__48140__auto__ = function(state_64848){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__48140__auto____1.call(this,state_64848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__48140__auto____0;
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__48140__auto____1;
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,map__64836,map__64836__$1,resolver,resolve))
})();
var state__48841__auto__ = (function (){var statearr_64880 = f__48840__auto__();
(statearr_64880[(6)] = c__48839__auto__);

return statearr_64880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,map__64836,map__64836__$1,resolver,resolve))
);

return c__48839__auto__;
});})(map__64836,map__64836__$1,resolver,resolve))
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
com.wsscode.pathom.connect.mutation_dispatch_embedded = (function com$wsscode$pathom$connect$mutation_dispatch_embedded(p__64881,entity){
var map__64882 = p__64881;
var map__64882__$1 = (((((!((map__64882 == null))))?(((((map__64882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64882):map__64882);
var env = map__64882__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64882__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var sym = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
var map__64884 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym], null));
var map__64884__$1 = (((((!((map__64884 == null))))?(((((map__64884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64884):map__64884);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64884__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112));
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ",["Can't find mutate fn for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),"\n","mutate"].join('')));
}

return (mutate.cljs$core$IFn$_invoke$arity$2 ? mutate.cljs$core$IFn$_invoke$arity$2(env,entity) : mutate.call(null,env,entity));
});
/**
 * Sync mutate function to integrate connect mutations to pathom parser.
 */
com.wsscode.pathom.connect.mutate = (function com$wsscode$pathom$connect$mutate(p__64886,sym_SINGLEQUOTE_,p__64887){
var map__64888 = p__64886;
var map__64888__$1 = (((((!((map__64888 == null))))?(((((map__64888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64888):map__64888);
var env = map__64888__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64888__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var mutate_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64888__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069));
var mutation_join_globals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64888__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.PersistentVector.EMPTY);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64888__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64888__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__64889 = p__64887;
var map__64889__$1 = (((((!((map__64889 == null))))?(((((map__64889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64889):map__64889);
var input = map__64889__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64889__$1,new cljs.core.Keyword("pathom","context","pathom/context",-1452257614));
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym_SINGLEQUOTE_], null));
if(cljs.core.truth_(temp__5718__auto__)){
var map__64892 = temp__5718__auto__;
var map__64892__$1 = (((((!((map__64892 == null))))?(((((map__64892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64892):map__64892);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64892__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),sym);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env__$1,map__64892,map__64892__$1,sym,temp__5718__auto__,map__64888,map__64888__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__64889,map__64889__$1,input,context){
return (function (){
var res = (function (){var G__64894 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","source-mutation","com.wsscode.pathom.connect/source-mutation",-674985123),sym_SINGLEQUOTE_);
var G__64895 = input;
return (mutate_dispatch.cljs$core$IFn$_invoke$arity$2 ? mutate_dispatch.cljs$core$IFn$_invoke$arity$2(G__64894,G__64895) : mutate_dispatch.call(null,G__64894,G__64895));
})();
var res__$1 = (function (){var G__64896 = res;
if(cljs.core.truth_((function (){var and__4120__auto__ = context;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.map_QMARK_(res);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__64896,context], 0));
} else {
return G__64896;
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
});})(env__$1,map__64892,map__64892__$1,sym,temp__5718__auto__,map__64888,map__64888__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__64889,map__64889__$1,input,context))
], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Mutation not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutation","mutation",-285823378),sym_SINGLEQUOTE_], null));
}
});
/**
 * Async mutate function to integrate connect mutations to pathom parser.
 */
com.wsscode.pathom.connect.mutate_async = (function com$wsscode$pathom$connect$mutate_async(p__64897,sym_SINGLEQUOTE_,p__64898){
var map__64899 = p__64897;
var map__64899__$1 = (((((!((map__64899 == null))))?(((((map__64899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64899):map__64899);
var env = map__64899__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64899__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var mutate_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64899__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069));
var mutation_join_globals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64899__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.PersistentVector.EMPTY);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64899__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64899__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__64900 = p__64898;
var map__64900__$1 = (((((!((map__64900 == null))))?(((((map__64900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64900):map__64900);
var input = map__64900__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64900__$1,new cljs.core.Keyword("pathom","context","pathom/context",-1452257614));
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym_SINGLEQUOTE_], null));
if(cljs.core.truth_(temp__5718__auto__)){
var map__64903 = temp__5718__auto__;
var map__64903__$1 = (((((!((map__64903 == null))))?(((((map__64903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64903):map__64903);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64903__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),sym);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env__$1,map__64903,map__64903__$1,sym,temp__5718__auto__,map__64899,map__64899__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__64900,map__64900__$1,input,context){
return (function (){
var ch__53995__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__48839__auto___68997 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto___68997,ch__53995__auto__,env__$1,map__64903,map__64903__$1,sym,temp__5718__auto__,map__64899,map__64899__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__64900,map__64900__$1,input,context){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto___68997,ch__53995__auto__,env__$1,map__64903,map__64903__$1,sym,temp__5718__auto__,map__64899,map__64899__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__64900,map__64900__$1,input,context){
return (function (state_64970){
var state_val_64971 = (state_64970[(1)]);
if((state_val_64971 === (7))){
var inst_64912 = (state_64970[(7)]);
var inst_64919 = com.wsscode.async.async_cljs.promise_QMARK_(inst_64912);
var state_64970__$1 = state_64970;
if(cljs.core.truth_(inst_64919)){
var statearr_64972_68999 = state_64970__$1;
(statearr_64972_68999[(1)] = (10));

} else {
var statearr_64973_69000 = state_64970__$1;
(statearr_64973_69000[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64971 === (20))){
var inst_64933 = (state_64970[(8)]);
var inst_64942 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_64933,context], 0));
var state_64970__$1 = state_64970;
var statearr_64974_69001 = state_64970__$1;
(statearr_64974_69001[(2)] = inst_64942);

(statearr_64974_69001[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64971 === (27))){
var inst_64964 = cljs.core.async.close_BANG_(ch__53995__auto__);
var state_64970__$1 = state_64970;
var statearr_64975_69003 = state_64970__$1;
(statearr_64975_69003[(2)] = inst_64964);

(statearr_64975_69003[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64971 === (1))){
var state_64970__$1 = state_64970;
var statearr_64976_69004 = state_64970__$1;
(statearr_64976_69004[(2)] = null);

(statearr_64976_69004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64971 === (24))){
var inst_64945 = (state_64970[(9)]);
var inst_64956 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_64945,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378));
var state_64970__$1 = state_64970;
var statearr_64977_69006 = state_64970__$1;
(statearr_64977_69006[(2)] = inst_64956);

(statearr_64977_69006[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64971 === (4))){
var inst_64905 = (state_64970[(2)]);
var state_64970__$1 = state_64970;
var statearr_64978_69007 = state_64970__$1;
(statearr_64978_69007[(2)] = inst_64905);

(statearr_64978_69007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64971 === (15))){
var state_64970__$1 = state_64970;
var statearr_64979_69008 = state_64970__$1;
(statearr_64979_69008[(2)] = null);

(statearr_64979_69008[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64971 === (21))){
var inst_64933 = (state_64970[(8)]);
var state_64970__$1 = state_64970;
var statearr_64980_69009 = state_64970__$1;
(statearr_64980_69009[(2)] = inst_64933);

(statearr_64980_69009[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64971 === (13))){
var inst_64923 = (state_64970[(2)]);
var inst_64924 = com.wsscode.async.async_cljs.consumer_pair(inst_64923);
var state_64970__$1 = state_64970;
var statearr_64981_69010 = state_64970__$1;
(statearr_64981_69010[(2)] = inst_64924);

(statearr_64981_69010[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64971 === (22))){
var inst_64945 = (state_64970[(2)]);
var state_64970__$1 = (function (){var statearr_64982 = state_64970;
(statearr_64982[(9)] = inst_64945);

return statearr_64982;
})();
if(cljs.core.truth_(query)){
var statearr_64983_69011 = state_64970__$1;
(statearr_64983_69011[(1)] = (23));

} else {
var statearr_64984_69012 = state_64970__$1;
(statearr_64984_69012[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64971 === (29))){
var inst_64968 = (state_64970[(2)]);
var state_64970__$1 = state_64970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64970__$1,inst_64968);
} else {
if((state_val_64971 === (6))){
var inst_64912 = (state_64970[(7)]);
var state_64970__$1 = state_64970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64970__$1,(9),inst_64912);
} else {
if((state_val_64971 === (28))){
var inst_64961 = (state_64970[(10)]);
var inst_64966 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53995__auto__,inst_64961);
var state_64970__$1 = state_64970;
var statearr_64985_69014 = state_64970__$1;
(statearr_64985_69014[(2)] = inst_64966);

(statearr_64985_69014[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64971 === (25))){
var inst_64958 = (state_64970[(2)]);
var _ = (function (){var statearr_64986 = state_64970;
(statearr_64986[(4)] = cljs.core.rest((state_64970[(4)])));

return statearr_64986;
})();
var state_64970__$1 = state_64970;
var statearr_64987_69015 = state_64970__$1;
(statearr_64987_69015[(2)] = inst_64958);

(statearr_64987_69015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64971 === (17))){
var inst_64933 = (state_64970[(8)]);
var inst_64937 = cljs.core.map_QMARK_(inst_64933);
var state_64970__$1 = state_64970;
var statearr_64988_69016 = state_64970__$1;
(statearr_64988_69016[(2)] = inst_64937);

(statearr_64988_69016[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64971 === (3))){
var inst_64961 = (state_64970[(10)]);
var inst_64961__$1 = (state_64970[(2)]);
var inst_64962 = (inst_64961__$1 == null);
var state_64970__$1 = (function (){var statearr_64989 = state_64970;
(statearr_64989[(10)] = inst_64961__$1);

return statearr_64989;
})();
if(cljs.core.truth_(inst_64962)){
var statearr_64990_69017 = state_64970__$1;
(statearr_64990_69017[(1)] = (27));

} else {
var statearr_64991_69018 = state_64970__$1;
(statearr_64991_69018[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64971 === (12))){
var inst_64931 = (state_64970[(2)]);
var state_64970__$1 = state_64970;
var statearr_64992_69019 = state_64970__$1;
(statearr_64992_69019[(2)] = inst_64931);

(statearr_64992_69019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64971 === (2))){
var inst_64912 = (state_64970[(7)]);
var _ = (function (){var statearr_64993 = state_64970;
(statearr_64993[(4)] = cljs.core.cons((5),(state_64970[(4)])));

return statearr_64993;
})();
var inst_64911 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","source-mutation","com.wsscode.pathom.connect/source-mutation",-674985123),sym_SINGLEQUOTE_);
var inst_64912__$1 = (mutate_dispatch.cljs$core$IFn$_invoke$arity$2 ? mutate_dispatch.cljs$core$IFn$_invoke$arity$2(inst_64911,input) : mutate_dispatch.call(null,inst_64911,input));
var inst_64913 = com.wsscode.async.async_cljs.chan_QMARK_(inst_64912__$1);
var state_64970__$1 = (function (){var statearr_64994 = state_64970;
(statearr_64994[(7)] = inst_64912__$1);

return statearr_64994;
})();
if(inst_64913){
var statearr_64995_69020 = state_64970__$1;
(statearr_64995_69020[(1)] = (6));

} else {
var statearr_64996_69021 = state_64970__$1;
(statearr_64996_69021[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64971 === (23))){
var inst_64945 = (state_64970[(9)]);
var inst_64947 = cljs.core.select_keys(inst_64945,mutation_join_globals);
var inst_64948 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_64945);
var inst_64949 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-ast","com.wsscode.pathom.connect/mutation-ast",-602347707),ast);
var inst_64950 = com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(inst_64948,inst_64949);
var state_64970__$1 = (function (){var statearr_64997 = state_64970;
(statearr_64997[(11)] = inst_64947);

return statearr_64997;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64970__$1,(26),inst_64950);
} else {
if((state_val_64971 === (19))){
var inst_64940 = (state_64970[(2)]);
var state_64970__$1 = state_64970;
if(cljs.core.truth_(inst_64940)){
var statearr_64998_69022 = state_64970__$1;
(statearr_64998_69022[(1)] = (20));

} else {
var statearr_64999_69023 = state_64970__$1;
(statearr_64999_69023[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64971 === (11))){
var state_64970__$1 = state_64970;
var statearr_65001_69024 = state_64970__$1;
(statearr_65001_69024[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64971 === (9))){
var inst_64916 = (state_64970[(2)]);
var inst_64917 = com.wsscode.async.async_cljs.throw_err(inst_64916);
var state_64970__$1 = state_64970;
var statearr_65003_69025 = state_64970__$1;
(statearr_65003_69025[(2)] = inst_64917);

(statearr_65003_69025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64971 === (5))){
var _ = (function (){var statearr_65004 = state_64970;
(statearr_65004[(4)] = cljs.core.rest((state_64970[(4)])));

return statearr_65004;
})();
var state_64970__$1 = state_64970;
var ex65000 = (state_64970__$1[(2)]);
var statearr_65005_69026 = state_64970__$1;
(statearr_65005_69026[(5)] = ex65000);


var statearr_65006_69027 = state_64970__$1;
(statearr_65006_69027[(1)] = (4));

(statearr_65006_69027[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64971 === (14))){
var inst_64912 = (state_64970[(7)]);
var state_64970__$1 = state_64970;
var statearr_65007_69028 = state_64970__$1;
(statearr_65007_69028[(2)] = inst_64912);

(statearr_65007_69028[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64971 === (26))){
var inst_64947 = (state_64970[(11)]);
var inst_64952 = (state_64970[(2)]);
var inst_64953 = com.wsscode.async.async_cljs.throw_err(inst_64952);
var inst_64954 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_64947,inst_64953], 0));
var state_64970__$1 = state_64970;
var statearr_65008_69029 = state_64970__$1;
(statearr_65008_69029[(2)] = inst_64954);

(statearr_65008_69029[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64971 === (16))){
var inst_64929 = (state_64970[(2)]);
var state_64970__$1 = state_64970;
var statearr_65009_69030 = state_64970__$1;
(statearr_65009_69030[(2)] = inst_64929);

(statearr_65009_69030[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64971 === (10))){
var inst_64912 = (state_64970[(7)]);
var inst_64921 = com.wsscode.async.async_cljs.promise__GT_chan(inst_64912);
var state_64970__$1 = state_64970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64970__$1,(13),inst_64921);
} else {
if((state_val_64971 === (18))){
var inst_64935 = (state_64970[(12)]);
var state_64970__$1 = state_64970;
var statearr_65010_69031 = state_64970__$1;
(statearr_65010_69031[(2)] = inst_64935);

(statearr_65010_69031[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64971 === (8))){
var inst_64935 = (state_64970[(12)]);
var inst_64933 = (state_64970[(2)]);
var inst_64935__$1 = context;
var state_64970__$1 = (function (){var statearr_65011 = state_64970;
(statearr_65011[(8)] = inst_64933);

(statearr_65011[(12)] = inst_64935__$1);

return statearr_65011;
})();
if(cljs.core.truth_(inst_64935__$1)){
var statearr_65012_69032 = state_64970__$1;
(statearr_65012_69032[(1)] = (17));

} else {
var statearr_65013_69033 = state_64970__$1;
(statearr_65013_69033[(1)] = (18));

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
});})(c__48839__auto___68997,ch__53995__auto__,env__$1,map__64903,map__64903__$1,sym,temp__5718__auto__,map__64899,map__64899__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__64900,map__64900__$1,input,context))
;
return ((function (switch__48139__auto__,c__48839__auto___68997,ch__53995__auto__,env__$1,map__64903,map__64903__$1,sym,temp__5718__auto__,map__64899,map__64899__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__64900,map__64900__$1,input,context){
return (function() {
var com$wsscode$pathom$connect$mutate_async_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$connect$mutate_async_$_state_machine__48140__auto____0 = (function (){
var statearr_65014 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65014[(0)] = com$wsscode$pathom$connect$mutate_async_$_state_machine__48140__auto__);

(statearr_65014[(1)] = (1));

return statearr_65014;
});
var com$wsscode$pathom$connect$mutate_async_$_state_machine__48140__auto____1 = (function (state_64970){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_64970);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e65015){var ex__48143__auto__ = e65015;
var statearr_65016_69034 = state_64970;
(statearr_65016_69034[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_64970[(4)]))){
var statearr_65017_69035 = state_64970;
(statearr_65017_69035[(1)] = cljs.core.first((state_64970[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69036 = state_64970;
state_64970 = G__69036;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$connect$mutate_async_$_state_machine__48140__auto__ = function(state_64970){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$mutate_async_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$mutate_async_$_state_machine__48140__auto____1.call(this,state_64970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$mutate_async_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$mutate_async_$_state_machine__48140__auto____0;
com$wsscode$pathom$connect$mutate_async_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$mutate_async_$_state_machine__48140__auto____1;
return com$wsscode$pathom$connect$mutate_async_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto___68997,ch__53995__auto__,env__$1,map__64903,map__64903__$1,sym,temp__5718__auto__,map__64899,map__64899__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__64900,map__64900__$1,input,context))
})();
var state__48841__auto__ = (function (){var statearr_65018 = f__48840__auto__();
(statearr_65018[(6)] = c__48839__auto___68997);

return statearr_65018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto___68997,ch__53995__auto__,env__$1,map__64903,map__64903__$1,sym,temp__5718__auto__,map__64899,map__64899__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__64900,map__64900__$1,input,context))
);


return ch__53995__auto__;
});})(env__$1,map__64903,map__64903__$1,sym,temp__5718__auto__,map__64899,map__64899__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__64900,map__64900__$1,input,context))
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
com.wsscode.pathom.connect.discover_attrs = (function com$wsscode$pathom$connect$discover_attrs(p__65023,ctx){
var map__65024 = p__65023;
var map__65024__$1 = (((((!((map__65024 == null))))?(((((map__65024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65024):map__65024);
var index = map__65024__$1;
var index_io = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65024__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65024__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache","com.wsscode.pathom.connect/cache",328991776));
return com.wsscode.pathom.connect.cached(cache,ctx,((function (map__65024,map__65024__$1,index,index_io,cache){
return (function (){
var base_keys = (((cljs.core.count(ctx) > (1)))?(function (){var tree = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__65024,map__65024__$1,index,index_io,cache){
return (function (a,b){
var attrs = (function (){var G__65026 = index;
var G__65027 = cljs.core.vec(b);
return (com.wsscode.pathom.connect.discover_attrs.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.discover_attrs.cljs$core$IFn$_invoke$arity$2(G__65026,G__65027) : com.wsscode.pathom.connect.discover_attrs.call(null,G__65026,G__65027));
})();
if((a == null)){
return attrs;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(a,cljs.core.reverse(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(b)),com.wsscode.pathom.connect.merge_io,attrs);
}
});})(map__65024,map__65024__$1,index,index_io,cache))
,null,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__65024,map__65024__$1,index,index_io,cache){
return (function (p1__65020_SHARP_,p2__65019_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(p2__65019_SHARP_) - (p1__65020_SHARP_ + (1))),p2__65019_SHARP_);
});})(map__65024,map__65024__$1,index,index_io,cache))
,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.count(ctx) - (1)),ctx)));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.vec(cljs.core.next(cljs.core.reverse(ctx))));
})():(function (){var G__65028 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(index_io,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.first(ctx)], null));
var G__65029 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(index_io,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(ctx)]),cljs.core.PersistentArrayMap.EMPTY);
return (com.wsscode.pathom.connect.merge_io.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.merge_io.cljs$core$IFn$_invoke$arity$2(G__65028,G__65029) : com.wsscode.pathom.connect.merge_io.call(null,G__65028,G__65029));
})());
var available = index_io;
var collected = base_keys;
while(true){
var attrs = cljs.core.set(cljs.core.keys(collected));
var matches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (available,collected,attrs,base_keys,map__65024,map__65024__$1,index,index_io,cache){
return (function (p__65034){
var vec__65035 = p__65034;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65035,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65035,(1),null);
return cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(k,attrs));
});})(available,collected,attrs,base_keys,map__65024,map__65024__$1,index,index_io,cache))
,available);
if(cljs.core.seq(matches)){
var G__69060 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (available,collected,attrs,matches,base_keys,map__65024,map__65024__$1,index,index_io,cache){
return (function (p1__65021_SHARP_,p2__65022_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__65021_SHARP_,p2__65022_SHARP_);
});})(available,collected,attrs,matches,base_keys,map__65024,map__65024__$1,index,index_io,cache))
,available,cljs.core.keys(matches));
var G__69061 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.connect.merge_io,collected,cljs.core.vals(matches));
available = G__69060;
collected = G__69061;
continue;
} else {
return collected;
}
break;
}
});})(map__65024,map__65024__$1,index,index_io,cache))
);
});
/**
 * This will use the ::index-resolvers to re-build the index. You might need that if in development you changed some definitions
 *   and got in a dirty state somehow
 */
com.wsscode.pathom.connect.reprocess_index = (function com$wsscode$pathom$connect$reprocess_index(p__65038){
var map__65039 = p__65038;
var map__65039__$1 = (((((!((map__65039 == null))))?(((((map__65039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65039):map__65039);
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65039__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256));
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
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,(function (p1__65041_SHARP_){
if(cljs.core.map_QMARK_(p1__65041_SHARP_)){
return cljs.core.ffirst(p1__65041_SHARP_);
} else {
return p1__65041_SHARP_;
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
com.wsscode.pathom.connect.batch_restore_sort = (function com$wsscode$pathom$connect$batch_restore_sort(p__65043,items){
var map__65044 = p__65043;
var map__65044__$1 = (((((!((map__65044 == null))))?(((((map__65044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65044):map__65044);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65044__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","inputs","com.wsscode.pathom.connect/inputs",-1635802936));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65044__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","key","com.wsscode.pathom.connect/key",1316653363));
var batch_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65044__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch-default","com.wsscode.pathom.connect/batch-default",2069925724));
var index = cljs.core.group_by(key,items);
var batch_default__$1 = (function (){var or__4131__auto__ = batch_default;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,index,map__65044,map__65044__$1,inputs,key,batch_default){
return (function (p1__65042_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([key],[cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__65042_SHARP_,key)]);
});
;})(or__4131__auto__,index,map__65044,map__65044__$1,inputs,key,batch_default))
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (index,batch_default__$1,map__65044,map__65044__$1,inputs,key,batch_default){
return (function (input){
var or__4131__auto__ = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,key)));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (batch_default__$1.cljs$core$IFn$_invoke$arity$1 ? batch_default__$1.cljs$core$IFn$_invoke$arity$1(input) : batch_default__$1.call(null,input));
}
});})(index,batch_default__$1,map__65044,map__65044__$1,inputs,key,batch_default))
),inputs);
});
com.wsscode.pathom.connect.index_explorer_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","index-explorer-resolver","com.wsscode.pathom.connect/index-explorer-resolver",-1613438284,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))], null);
}));
com.wsscode.pathom.connect.indexes_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","indexes-resolver","com.wsscode.pathom.connect/indexes-resolver",-1892611171,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","autocomplete-ignore","com.wsscode.pathom.connect/autocomplete-ignore",-191717401),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-id","com.wsscode.pathom.connect/attribute-id",2018760542),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null)], null)], null)], null)], null)], null),(function (p__65046,_){
var map__65047 = p__65046;
var map__65047__$1 = (((((!((map__65047 == null))))?(((((map__65047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65047):map__65047);
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65047__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),indexes], null);
}));
com.wsscode.pathom.connect.resolver_weights_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","resolver-weights-resolver","com.wsscode.pathom.connect/resolver-weights-resolver",-600539046,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),(function (){var G__65049 = env;
var G__65049__$1 = (((G__65049 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772).cljs$core$IFn$_invoke$arity$1(G__65049));
if((G__65049__$1 == null)){
return null;
} else {
return cljs.core.deref(G__65049__$1);
}
})()], null);
}));
com.wsscode.pathom.connect.resolver_weights_sorted_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","resolver-weights-sorted-resolver","com.wsscode.pathom.connect/resolver-weights-sorted-resolver",-1672618105,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights-sorted","com.wsscode.pathom.connect/resolver-weights-sorted",1502939218)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights-sorted","com.wsscode.pathom.connect/resolver-weights-sorted",1502939218),(function (){var G__65052 = env;
var G__65052__$1 = (((G__65052 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772).cljs$core$IFn$_invoke$arity$1(G__65052));
var G__65052__$2 = (((G__65052__$1 == null))?null:cljs.core.deref(G__65052__$1));
if((G__65052__$2 == null)){
return null;
} else {
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.second,((function (G__65052,G__65052__$1,G__65052__$2){
return (function (p1__65051_SHARP_,p2__65050_SHARP_){
return cljs.core.compare(p2__65050_SHARP_,p1__65051_SHARP_);
});})(G__65052,G__65052__$1,G__65052__$2))
,G__65052__$2);
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
var G__65054 = arguments.length;
switch (G__65054) {
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

com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1 = (function (p__65055){
var map__65056 = p__65055;
var map__65056__$1 = (((((!((map__65056 == null))))?(((((map__65056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65056):map__65056);
var env = map__65056__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65056__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var indexes__$1 = (function (){var or__4131__auto__ = indexes;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var pool_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser2","com.wsscode.pathom.core/wrap-parser2",776559497),((function (indexes__$1,pool_chan,map__65056,map__65056__$1,env,indexes){
return (function com$wsscode$pathom$connect$connect_wrap_parser(parser,p__65058){
var map__65059 = p__65058;
var map__65059__$1 = (((((!((map__65059 == null))))?(((((map__65059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65059):map__65059);
var plugins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65059__$1,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796));
var plugin_registry = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),plugins);
var resolver_weights = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(indexes__$1,com.wsscode.pathom.connect.register,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plugin_registry,cljs.core.get.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),cljs.core.PersistentVector.EMPTY)], null));

return ((function (plugin_registry,resolver_weights,map__65059,map__65059__$1,plugins,indexes__$1,pool_chan,map__65056,map__65056__$1,env,indexes){
return (function (env__$1,tx){
var G__65061 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.connect.resolver_dispatch_embedded,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069),com.wsscode.pathom.connect.mutation_dispatch_embedded,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.deref(indexes__$1),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),resolver_weights,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449),pool_chan], null),env__$1], 0));
var G__65062 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__65061,G__65062) : parser.call(null,G__65061,G__65062));
});
;})(plugin_registry,resolver_weights,map__65059,map__65059__$1,plugins,indexes__$1,pool_chan,map__65056,map__65056__$1,env,indexes))
});})(indexes__$1,pool_chan,map__65056,map__65056__$1,env,indexes))
,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),indexes__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.connect.connect_resolvers], null);
});

com.wsscode.pathom.connect.connect_plugin.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=com.wsscode.pathom.connect.js.map
