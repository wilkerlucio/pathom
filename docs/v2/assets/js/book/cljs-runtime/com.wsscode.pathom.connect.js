goog.provide('com.wsscode.pathom.connect');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.gen.alpha');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.parser');
goog.require('com.wsscode.pathom.trace');
goog.require('com.wsscode.pathom.misc');
goog.require('com.wsscode.common.combinatorics');
goog.require('com.wsscode.common.async_cljs');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('edn_query_language.core');
com.wsscode.pathom.connect.atom_with = (function com$wsscode$pathom$connect$atom_with(spec){
return cljs.spec.alpha.with_gen(com.wsscode.pathom.core.atom_QMARK_,(function (){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.atom,cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(spec)], 0));
}));
});
if(com.wsscode.pathom.misc.INCLUDE_SPECS){
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),cljs.core.symbol_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68318){
return cljs.core.set_QMARK_(G__68318);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"set","set",304602554)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68325){
return cljs.core.set_QMARK_(G__68325);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__68334){
return cljs.core.map_QMARK_(G__68334);
})], null),(function (G__68334){
return cljs.core.map_QMARK_(G__68334);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation","com.wsscode.pathom.connect/mutation",-1953746968),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__68368){
return cljs.core.map_QMARK_(G__68368);
})], null),(function (G__68368){
return cljs.core.map_QMARK_(G__68368);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"plain","plain",1368629269),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"composed","composed",-1510693384),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plain","plain",1368629269),new cljs.core.Keyword(null,"composed","composed",-1510693384)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68399){
return cljs.core.map_QMARK_(G__68399);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13080__auto__,v__13081__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13081__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),null)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attribute-list","attribute-list",1391116942),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1)),new cljs.core.Keyword(null,"union","union",2142937499),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribute-list","attribute-list",1391116942),new cljs.core.Keyword(null,"union","union",2142937499)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68408){
return ((cljs.core.vector_QMARK_(G__68408)) && (((((function (){var or__4131__auto__ = (1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((1)
,G__68408))) && ((cljs.core.bounded_count((1)
,G__68408) <= (function (){var or__4131__auto__ = null;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (9007199254740991);
}
})())))));
}),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68414){
return cljs.core.map_QMARK_(G__68414);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13080__auto__,v__13081__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13081__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),null)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__68418){
return cljs.core.map_QMARK_(G__68418);
}),(function (G__68418){
return cljs.core.contains_QMARK_(G__68418,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
})], null),(function (G__68418){
return ((cljs.core.map_QMARK_(G__68418)) && (cljs.core.contains_QMARK_(G__68418,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),cljs.core.list(new cljs.core.Symbol("com.wsscode.pathom.connect","atom-with","com.wsscode.pathom.connect/atom-with",1449744364,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null))),com.wsscode.pathom.connect.atom_with(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"number?","number?",-1747282210,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.number_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68448){
return cljs.core.map_QMARK_(G__68448);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13080__auto__,v__13081__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13081__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null))], null),null)));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68456){
return cljs.core.map_QMARK_(G__68456);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13080__auto__,v__13081__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13081__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__68462){
return cljs.core.map_QMARK_(G__68462);
}),(function (G__68462){
return cljs.core.contains_QMARK_(G__68462,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
})], null),(function (G__68462){
return ((cljs.core.map_QMARK_(G__68462)) && (cljs.core.contains_QMARK_(G__68462,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutations","com.wsscode.pathom.connect/mutations",1762289215),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68511){
return cljs.core.map_QMARK_(G__68511);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13080__auto__,v__13081__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13081__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68517){
return cljs.core.map_QMARK_(G__68517);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13080__auto__,v__13081__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13081__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68519){
return cljs.core.map_QMARK_(G__68519);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13080__auto__,v__13081__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13081__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("s","coll-of","s/coll-of",-1705285349,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol(null,"set?","set?",1636014792,null))),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68532){
return cljs.core.set_QMARK_(G__68532);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68527){
return cljs.core.map_QMARK_(G__68527);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13080__auto__,v__13081__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13081__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68537){
return cljs.core.map_QMARK_(G__68537);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13080__auto__,v__13081__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13081__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__68542){
return cljs.core.map_QMARK_(G__68542);
})], null),(function (G__68542){
return cljs.core.map_QMARK_(G__68542);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","tuple","s/tuple",1167863840,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68559){
return cljs.core.set_QMARK_(G__68559);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),cljs.core.ifn_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),cljs.core.ifn_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68568){
return cljs.core.coll_QMARK_(G__68568);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null)));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword(null,"deep","deep",2090866875),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68575){
return cljs.core.map_QMARK_(G__68575);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13080__auto__,v__13081__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13081__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"deep","deep",2090866875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68579){
return ((cljs.core.vector_QMARK_(G__68579)) && (((((function (){var or__4131__auto__ = (2);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((2)
,G__68579))) && ((cljs.core.bounded_count((2)
,G__68579) <= (function (){var or__4131__auto__ = null;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (9007199254740991);
}
})())))));
}),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68611){
return cljs.core.map_QMARK_(G__68611);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13080__auto__,v__13081__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13081__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68616){
return cljs.core.set_QMARK_(G__68616);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__68619){
return cljs.core.map_QMARK_(G__68619);
})], null),(function (G__68619){
return cljs.core.map_QMARK_(G__68619);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),cljs.core.list(new cljs.core.Symbol("s","or","s/or",1876282981,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"multi","multi",-190293005)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentHashSet.EMPTY]),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)], null),null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68633){
return cljs.core.map_QMARK_(G__68633);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13080__auto__,v__13081__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13081__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68637){
return cljs.core.map_QMARK_(G__68637);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13080__auto__,v__13081__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13081__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null))),cljs.spec.alpha.merge_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__68644){
return cljs.core.map_QMARK_(G__68644);
}),(function (G__68644){
return cljs.core.contains_QMARK_(G__68644,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
}),(function (G__68644){
return cljs.core.contains_QMARK_(G__68644,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
})], null),(function (G__68644){
return ((cljs.core.map_QMARK_(G__68644)) && (cljs.core.contains_QMARK_(G__68644,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))) && (cljs.core.contains_QMARK_(G__68644,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)))], null),null]))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null))),cljs.spec.alpha.merge_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__68675){
return cljs.core.map_QMARK_(G__68675);
}),(function (G__68675){
return cljs.core.contains_QMARK_(G__68675,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112));
})], null),(function (G__68675){
return ((cljs.core.map_QMARK_(G__68675)) && (cljs.core.contains_QMARK_(G__68675,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)))], null),null]))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"resolver","resolver",-1740553583),new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword(null,"mutation","mutation",-285823378),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolver","resolver",-1740553583),new cljs.core.Keyword(null,"mutation","mutation",-285823378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),new cljs.core.Keyword(null,"operations","operations",1630691895),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword(null,"operations","operations",1630691895)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68700){
return cljs.core.coll_QMARK_(G__68700);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))], null),null)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68701){
return cljs.core.coll_QMARK_(G__68701);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68704){
return cljs.core.coll_QMARK_(G__68704);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","sort-plan","com.wsscode.pathom.connect/sort-plan",-1506396873),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"plan","plan",1118952668)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
} else {
}
/**
 * Get resolver map information in env from the resolver sym.
 */
com.wsscode.pathom.connect.resolver_data = (function com$wsscode$pathom$connect$resolver_data(env_or_indexes,sym){
var idx = (function (){var G__68724 = env_or_indexes;
if(cljs.core.contains_QMARK_(env_or_indexes,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))){
return new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189).cljs$core$IFn$_invoke$arity$1(G__68724);
} else {
return G__68724;
}
})();
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),sym], null));
});
/**
 * Get mutation map information in env from the resolver sym.
 */
com.wsscode.pathom.connect.mutation_data = (function com$wsscode$pathom$connect$mutation_data(env_or_indexes,sym){
var idx = (function (){var G__68728 = env_or_indexes;
if(cljs.core.contains_QMARK_(env_or_indexes,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))){
return new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189).cljs$core$IFn$_invoke$arity$1(G__68728);
} else {
return G__68728;
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
com.wsscode.pathom.connect.merge_io_attrs = (function com$wsscode$pathom$connect$merge_io_attrs(a,b){
if(((cljs.core.map_QMARK_(a)) && (cljs.core.map_QMARK_(b)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.connect.merge_io_attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
} else {
if(cljs.core.map_QMARK_(a)){
return a;
} else {
if(cljs.core.map_QMARK_(b)){
return b;
} else {
return b;

}
}
}
});
com.wsscode.pathom.connect.normalize_io = (function com$wsscode$pathom$connect$normalize_io(output){
if(cljs.core.map_QMARK_(output)){
var unions = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__68736){
var vec__68738 = p__68736;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68738,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68738,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.connect.normalize_io.call(null,v))], null);
})),output);
var merged = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.connect.merge_io_attrs,cljs.core.vals(unions));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(merged,new cljs.core.Keyword("com.wsscode.pathom.connect","unions","com.wsscode.pathom.connect/unions",-2088386406),unions);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
if(cljs.core.map_QMARK_(x)){
var vec__68750 = cljs.core.first(x);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68750,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68750,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.connect.normalize_io.call(null,v))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.PersistentArrayMap.EMPTY], null);
}
})),output);
}
});
/**
 * Merge ::index-io maps.
 */
com.wsscode.pathom.connect.merge_io = (function com$wsscode$pathom$connect$merge_io(a,b){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.connect.merge_io_attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
/**
 * Merge ::index-oir maps.
 */
com.wsscode.pathom.connect.merge_oir = (function com$wsscode$pathom$connect$merge_oir(a,b){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (p1__68754_SHARP_,p2__68755_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__68754_SHARP_,p2__68755_SHARP_], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
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
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__68763 = cljs.core.get_global_hierarchy;
return (fexpr__68763.cljs$core$IFn$_invoke$arity$0 ? fexpr__68763.cljs$core$IFn$_invoke$arity$0() : fexpr__68763.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.wsscode.pathom.connect","index-merger"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (k,_,___$1){
return k;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
com.wsscode.pathom.connect.index_merger.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),(function (_,ia,ib){
return com.wsscode.pathom.connect.merge_io(ia,ib);
}));
com.wsscode.pathom.connect.index_merger.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),(function (_,ia,ib){
return com.wsscode.pathom.connect.merge_oir(ia,ib);
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(idx,k,(function (p1__68769_SHARP_){
return com.wsscode.pathom.connect.index_merger.cljs$core$IFn$_invoke$arity$3(k,p1__68769_SHARP_,v);
}));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(idx,k,v);
}
}),ia,ib);
});
com.wsscode.pathom.connect.output_provides_STAR_ = (function com$wsscode$pathom$connect$output_provides_STAR_(p__68775){
var map__68776 = p__68775;
var map__68776__$1 = (((((!((map__68776 == null))))?(((((map__68776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68776):map__68776);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68776__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68776__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__$1 = (cljs.core.truth_((function (){var G__68782 = children;
var G__68782__$1 = (((G__68782 == null))?null:cljs.core.first(G__68782));
var G__68782__$2 = (((G__68782__$1 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__68782__$1));
if((G__68782__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__68782__$2,new cljs.core.Keyword(null,"union","union",2142937499));
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))], 0)):children);
var G__68786 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null);
if(cljs.core.seq(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(G__68786,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (G__68786,children__$1,map__68776,map__68776__$1,key,children){
return (function (x){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__68786,children__$1,map__68776,map__68776__$1,key,children){
return (function (p1__68773_SHARP_){
return cljs.core.vec(cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[key,p1__68773_SHARP_],null))));
});})(G__68786,children__$1,map__68776,map__68776__$1,key,children))
,x);
});})(G__68786,children__$1,map__68776,map__68776__$1,key,children))
,((function (G__68786,children__$1,map__68776,map__68776__$1,key,children){
return (function (p1__68774_SHARP_){
return (com.wsscode.pathom.connect.output_provides_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.output_provides_STAR_.cljs$core$IFn$_invoke$arity$1(p1__68774_SHARP_) : com.wsscode.pathom.connect.output_provides_STAR_.call(null,p1__68774_SHARP_));
});})(G__68786,children__$1,map__68776,map__68776__$1,key,children))
)),children__$1);
} else {
return G__68786;
}
});
com.wsscode.pathom.connect.output_provides = (function com$wsscode$pathom$connect$output_provides(query){
if(cljs.core.map_QMARK_(query)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.output_provides),cljs.core.vals(query));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.output_provides_STAR_),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(query)));
}
});
com.wsscode.pathom.connect.normalized_children = (function com$wsscode$pathom$connect$normalized_children(p__68792){
var map__68793 = p__68792;
var map__68793__$1 = (((((!((map__68793 == null))))?(((((map__68793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68793):map__68793);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68793__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_((function (){var G__68795 = children;
var G__68795__$1 = (((G__68795 == null))?null:cljs.core.first(G__68795));
var G__68795__$2 = (((G__68795__$1 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__68795__$1));
if((G__68795__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__68795__$2,new cljs.core.Keyword(null,"union","union",2142937499));
}
})())){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))], 0));
} else {
return children;
}
});
com.wsscode.pathom.connect.index_attributes = (function com$wsscode$pathom$connect$index_attributes(p__68802){
var map__68803 = p__68802;
var map__68803__$1 = (((((!((map__68803 == null))))?(((((map__68803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68803):map__68803);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68803__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68803__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68803__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var provides = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__68803,map__68803__$1,sym,input,output){
return (function (p1__68796_SHARP_){
return cljs.core.contains_QMARK_(input,p1__68796_SHARP_);
});})(map__68803,map__68803__$1,sym,input,output))
,com.wsscode.pathom.connect.output_provides(output));
var sym_group = cljs.core.PersistentHashSet.createAsIfByAssoc([sym]);
var attr_provides = cljs.core.zipmap(provides,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(sym_group));
var input_count = cljs.core.count(input);
var _LT__GT_ = cljs.core.PersistentArrayMap.EMPTY;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,provides,sym_group,attr_provides,input_count,map__68803,map__68803__$1,sym,input,output){
return (function (idx,in_attr){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,in_attr,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),in_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),attr_provides,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),sym_group], null));
});})(_LT__GT_,provides,sym_group,attr_provides,input_count,map__68803,map__68803__$1,sym,input,output))
,_LT__GT_,(function (){var G__68809 = input_count;
switch (G__68809) {
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
var _LT__GT___$2 = (((input_count > (1)))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,provides,sym_group,attr_provides,input_count,map__68803,map__68803__$1,sym,input,output){
return (function (idx,in_attr){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,in_attr,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),in_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),cljs.core.PersistentHashSet.createAsIfByAssoc([input]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),sym_group], null));
});})(_LT__GT_,_LT__GT___$1,provides,sym_group,attr_provides,input_count,map__68803,map__68803__$1,sym,input,output))
,_LT__GT___$1,input):_LT__GT___$1);
var _LT__GT___$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,_LT__GT___$2,provides,sym_group,attr_provides,input_count,map__68803,map__68803__$1,sym,input,output){
return (function (idx,out_attr){
if(cljs.core.vector_QMARK_(out_attr)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,cljs.core.peek(out_attr),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.peek(out_attr),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null),cljs.core.pop(out_attr)),sym_group]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),sym_group], null));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,out_attr,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),out_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.PersistentArrayMap.createAsIfByAssoc([input,sym_group]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),sym_group], null));
}
});})(_LT__GT_,_LT__GT___$1,_LT__GT___$2,provides,sym_group,attr_provides,input_count,map__68803,map__68803__$1,sym,input,output))
,_LT__GT___$2,provides);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__68803,map__68803__$1,sym,input,output){
return (function (idx,p__68811){
var map__68812 = p__68811;
var map__68812__$1 = (((((!((map__68812 == null))))?(((((map__68812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68812):map__68812);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68812__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68812__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__68814 = idx;
if(cljs.core.truth_(key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__68814,key,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(children)?new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732):new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711)),sym_group]));
} else {
return G__68814;
}
});})(_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__68803,map__68803__$1,sym,input,output))
,_LT__GT___$3,((cljs.core.map_QMARK_(output))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__68803,map__68803__$1,sym,input,output){
return (function (p1__68800_SHARP_){
return cljs.core.tree_seq(new cljs.core.Keyword(null,"children","children",-940561982),com.wsscode.pathom.connect.normalized_children,edn_query_language.core.query__GT_ast(p1__68800_SHARP_));
});})(_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__68803,map__68803__$1,sym,input,output))
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
var G__68818 = arguments.length;
switch (G__68818) {
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
var map__68821 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.PersistentHashSet.EMPTY], null),sym_data], 0));
var map__68821__$1 = (((((!((map__68821 == null))))?(((((map__68821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68821):map__68821);
var sym_data__$1 = map__68821__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68821__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68821__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var input_SINGLEQUOTE_ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input))) && (cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.PersistentHashSet.EMPTY], null)),cljs.core.first(input)))))?cljs.core.PersistentHashSet.EMPTY:input);
return com.wsscode.pathom.connect.merge_indexes(indexes,(function (){var G__68823 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),cljs.core.PersistentArrayMap.createAsIfByAssoc([sym,sym_data__$1]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),com.wsscode.pathom.connect.index_attributes(sym_data__$1),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.PersistentArrayMap.createAsIfByAssoc([input_SINGLEQUOTE_,com.wsscode.pathom.connect.normalize_io(output)]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (input_SINGLEQUOTE_,map__68821,map__68821__$1,sym_data__$1,input,output){
return (function (indexes__$1,out_attr){
var G__68824 = indexes__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([out_attr]),input)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__68824,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out_attr,input], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),sym);
} else {
return G__68824;
}
});})(input_SINGLEQUOTE_,map__68821,map__68821__$1,sym_data__$1,input,output))
,cljs.core.PersistentArrayMap.EMPTY,com.wsscode.pathom.connect.flat_query(output))], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input_SINGLEQUOTE_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68823,new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(input_SINGLEQUOTE_)]));
} else {
return G__68823;
}
})());
});

com.wsscode.pathom.connect.add.cljs$lang$maxFixedArity = 3;

com.wsscode.pathom.connect.add_mutation = (function com$wsscode$pathom$connect$add_mutation(indexes,sym,p__68825){
var map__68826 = p__68825;
var map__68826__$1 = (((((!((map__68826 == null))))?(((((map__68826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68826):map__68826);
var data = map__68826__$1;
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68826__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68826__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
return com.wsscode.pathom.connect.merge_indexes(indexes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),cljs.core.PersistentArrayMap.createAsIfByAssoc([sym,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym)]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),(function (){var _LT__GT_ = cljs.core.PersistentArrayMap.EMPTY;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,map__68826,map__68826__$1,data,params,output){
return (function (idx,attribute){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,attribute,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),cljs.core.PersistentHashSet.createAsIfByAssoc([sym])], null));
});})(_LT__GT_,map__68826,map__68826__$1,data,params,output))
,_LT__GT_,(function (){var G__68830 = params;
var G__68830__$1 = (((G__68830 == null))?null:edn_query_language.core.query__GT_ast(G__68830));
if((G__68830__$1 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast_properties(G__68830__$1);
}
})());
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,map__68826,map__68826__$1,data,params,output){
return (function (idx,attribute){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,attribute,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),cljs.core.PersistentHashSet.createAsIfByAssoc([sym])], null));
});})(_LT__GT_,_LT__GT___$1,map__68826,map__68826__$1,data,params,output))
,_LT__GT___$1,(function (){var G__68833 = output;
var G__68833__$1 = (((G__68833 == null))?null:edn_query_language.core.query__GT_ast(G__68833));
if((G__68833__$1 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast_properties(G__68833__$1);
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
com.wsscode.pathom.connect.sort_resolvers = (function com$wsscode$pathom$connect$sort_resolvers(p__68851,resolvers,e){
var map__68855 = p__68851;
var map__68855__$1 = (((((!((map__68855 == null))))?(((((map__68855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68855):map__68855);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68855__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (map__68855,map__68855__$1,request_cache){
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
});})(map__68855,map__68855__$1,request_cache))
,resolvers);
});
/**
 * DEPRECATED
 */
com.wsscode.pathom.connect.pick_resolver = (function com$wsscode$pathom$connect$pick_resolver(p__68906){
var map__68907 = p__68906;
var map__68907__$1 = (((((!((map__68907 == null))))?(((((map__68907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68907):map__68907);
var env = map__68907__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68907__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var dependency_track = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68907__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null));
if(cljs.core.truth_(temp__5718__auto__)){
var attr_resolvers = temp__5718__auto__;
var r = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword(null,"missing","missing",362507769)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attr_resolvers,temp__5718__auto__,k,e,map__68907,map__68907__$1,env,indexes,dependency_track){
return (function (p__68914){
var vec__68915 = p__68914;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68915,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68915,(1),null);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.set(cljs.core.keys(e)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"missing","missing",362507769),missing], null);
});})(attr_resolvers,temp__5718__auto__,k,e,map__68907,map__68907__$1,env,indexes,dependency_track))
,attr_resolvers));
var G__68925 = r;
var vec__68928 = G__68925;
var seq__68929 = cljs.core.seq(vec__68928);
var first__68930 = cljs.core.first(seq__68929);
var seq__68929__$1 = cljs.core.next(seq__68929);
var map__68931 = first__68930;
var map__68931__$1 = (((((!((map__68931 == null))))?(((((map__68931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68931):map__68931);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68931__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68931__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var t = seq__68929__$1;
var xs = vec__68928;
var G__68925__$1 = G__68925;
while(true){
var vec__68936 = G__68925__$1;
var seq__68937 = cljs.core.seq(vec__68936);
var first__68938 = cljs.core.first(seq__68937);
var seq__68937__$1 = cljs.core.next(seq__68937);
var map__68939 = first__68938;
var map__68939__$1 = (((((!((map__68939 == null))))?(((((map__68939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68939):map__68939);
var sym__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68939__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var attrs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68939__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var t__$1 = seq__68937__$1;
var xs__$1 = vec__68936;
if(cljs.core.truth_(xs__$1)){
if((!(cljs.core.contains_QMARK_(dependency_track,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,attrs__$1], null))))){
var e__$1 = (function (){try{return com.wsscode.pathom.core.elide_items(com.wsscode.pathom.core.break_values,com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465),true),new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,attrs__$1], null)),attrs__$1));
}catch (e68943){var _ = e68943;
return cljs.core.PersistentArrayMap.EMPTY;
}})();
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attrs__$1),cljs.core.set(cljs.core.keys(e__$1)));
if(cljs.core.seq(missing)){
var G__73407 = t__$1;
G__68925__$1 = G__73407;
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
com.wsscode.pathom.connect.async_pick_resolver = (function com$wsscode$pathom$connect$async_pick_resolver(p__68950){
var map__68951 = p__68950;
var map__68951__$1 = (((((!((map__68951 == null))))?(((((map__68951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68951):map__68951);
var env = map__68951__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68951__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var dependency_track = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68951__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185));
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,map__68951,map__68951__$1,env,indexes,dependency_track){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,map__68951,map__68951__$1,env,indexes,dependency_track){
return (function (state_69117){
var state_val_69118 = (state_69117[(1)]);
if((state_val_69118 === (7))){
var inst_69111 = (state_69117[(2)]);
var state_69117__$1 = state_69117;
var statearr_69149_73408 = state_69117__$1;
(statearr_69149_73408[(2)] = inst_69111);


cljs.core.async.impl.ioc_helpers.process_exception(state_69117__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (20))){
var state_69117__$1 = state_69117;
var statearr_69161_73409 = state_69117__$1;
(statearr_69161_73409[(2)] = false);

(statearr_69161_73409[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (27))){
var inst_69020 = (state_69117[(7)]);
var inst_69049 = (state_69117[(2)]);
var inst_69050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69049,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var inst_69052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69049,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var state_69117__$1 = (function (){var statearr_69184 = state_69117;
(statearr_69184[(8)] = inst_69052);

(statearr_69184[(9)] = inst_69050);

return statearr_69184;
})();
if(cljs.core.truth_(inst_69020)){
var statearr_69186_73411 = state_69117__$1;
(statearr_69186_73411[(1)] = (28));

} else {
var statearr_69187_73412 = state_69117__$1;
(statearr_69187_73412[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (1))){
var state_69117__$1 = state_69117;
var statearr_69188_73414 = state_69117__$1;
(statearr_69188_73414[(2)] = null);

(statearr_69188_73414[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (24))){
var inst_69041 = (state_69117[(2)]);
var state_69117__$1 = state_69117;
var statearr_69190_73415 = state_69117__$1;
(statearr_69190_73415[(2)] = inst_69041);

(statearr_69190_73415[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (39))){
var inst_69083 = (state_69117[(10)]);
var inst_69052 = (state_69117[(8)]);
var inst_69050 = (state_69117[(9)]);
var inst_69093 = [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"s","s",1705939918)];
var inst_69094 = cljs.core.select_keys(inst_69083,inst_69052);
var inst_69095 = com.wsscode.pathom.connect.sort_resolvers(env,inst_69050,inst_69083);
var inst_69096 = cljs.core.first(inst_69095);
var inst_69097 = [inst_69094,inst_69096];
var inst_69098 = cljs.core.PersistentHashMap.fromArrays(inst_69093,inst_69097);
var state_69117__$1 = state_69117;
var statearr_69192_73417 = state_69117__$1;
(statearr_69192_73417[(2)] = inst_69098);

(statearr_69192_73417[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (4))){
var inst_68965 = (state_69117[(11)]);
var inst_68971 = (state_69117[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_69117,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_68964 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_68965__$1 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_68964);
var inst_68966 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var inst_68968 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_68969 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),inst_68965__$1];
var inst_68970 = (new cljs.core.PersistentVector(null,2,(5),inst_68968,inst_68969,null));
var inst_68971__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_68970);
var state_69117__$1 = (function (){var statearr_69196 = state_69117;
(statearr_69196[(11)] = inst_68965__$1);

(statearr_69196[(12)] = inst_68971__$1);

(statearr_69196[(13)] = inst_68966);

return statearr_69196;
})();
if(cljs.core.truth_(inst_68971__$1)){
var statearr_69197_73419 = state_69117__$1;
(statearr_69197_73419[(1)] = (5));

} else {
var statearr_69199_73421 = state_69117__$1;
(statearr_69199_73421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (15))){
var inst_68990 = (state_69117[(14)]);
var state_69117__$1 = state_69117;
var statearr_69202_73422 = state_69117__$1;
(statearr_69202_73422[(2)] = inst_68990);

(statearr_69202_73422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (21))){
var inst_69044 = (state_69117[(2)]);
var state_69117__$1 = state_69117;
if(cljs.core.truth_(inst_69044)){
var statearr_69206_73423 = state_69117__$1;
(statearr_69206_73423[(1)] = (25));

} else {
var statearr_69207_73424 = state_69117__$1;
(statearr_69207_73424[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (31))){
var state_69117__$1 = state_69117;
var statearr_69210_73425 = state_69117__$1;
(statearr_69210_73425[(2)] = null);

(statearr_69210_73425[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (32))){
var state_69117__$1 = state_69117;
var statearr_69213_73427 = state_69117__$1;
(statearr_69213_73427[(2)] = null);

(statearr_69213_73427[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (40))){
var inst_69100 = (state_69117[(2)]);
var state_69117__$1 = state_69117;
var statearr_69214_73428 = state_69117__$1;
(statearr_69214_73428[(2)] = inst_69100);

(statearr_69214_73428[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (33))){
var inst_69103 = (state_69117[(2)]);
var state_69117__$1 = state_69117;
var statearr_69216_73430 = state_69117__$1;
(statearr_69216_73430[(2)] = inst_69103);

(statearr_69216_73430[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (13))){
var inst_69009 = (state_69117[(2)]);
var state_69117__$1 = state_69117;
var statearr_69220_73431 = state_69117__$1;
(statearr_69220_73431[(2)] = inst_69009);

(statearr_69220_73431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (22))){
var state_69117__$1 = state_69117;
var statearr_69221_73433 = state_69117__$1;
(statearr_69221_73433[(2)] = true);

(statearr_69221_73433[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (36))){
var inst_69052 = (state_69117[(8)]);
var inst_69050 = (state_69117[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_69117,(35),new cljs.core.Keyword(null,"default","default",-1987822328),null,(34));
var inst_69066 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465),true);
var inst_69067 = cljs.core.PersistentHashSet.EMPTY;
var inst_69068 = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,inst_69067);
var inst_69070 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69072 = [inst_69050,inst_69052];
var inst_69073 = (new cljs.core.PersistentVector(null,2,(5),inst_69070,inst_69072,null));
var inst_69074 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_69066,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),inst_69068,inst_69073);
var inst_69075 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(inst_69074,inst_69052);
var state_69117__$1 = state_69117;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69117__$1,(37),inst_69075);
} else {
if((state_val_69118 === (29))){
var state_69117__$1 = state_69117;
var statearr_69227_73436 = state_69117__$1;
(statearr_69227_73436[(2)] = null);

(statearr_69227_73436[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (6))){
var state_69117__$1 = state_69117;
var statearr_69230_73437 = state_69117__$1;
(statearr_69230_73437[(2)] = null);

(statearr_69230_73437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (28))){
var inst_69052 = (state_69117[(8)]);
var inst_69050 = (state_69117[(9)]);
var inst_69054 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69055 = [inst_69050,inst_69052];
var inst_69056 = (new cljs.core.PersistentVector(null,2,(5),inst_69054,inst_69055,null));
var inst_69057 = cljs.core.contains_QMARK_(dependency_track,inst_69056);
var inst_69058 = (!(inst_69057));
var state_69117__$1 = state_69117;
if(inst_69058){
var statearr_69233_73438 = state_69117__$1;
(statearr_69233_73438[(1)] = (31));

} else {
var statearr_69234_73440 = state_69117__$1;
(statearr_69234_73440[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (25))){
var inst_69027 = (state_69117[(15)]);
var inst_69046 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_69027);
var state_69117__$1 = state_69117;
var statearr_69237_73441 = state_69117__$1;
(statearr_69237_73441[(2)] = inst_69046);

(statearr_69237_73441[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (34))){
var inst_69083 = (state_69117[(10)]);
var inst_69052 = (state_69117[(8)]);
var inst_69083__$1 = (state_69117[(2)]);
var inst_69084 = cljs.core.set(inst_69052);
var inst_69085 = cljs.core.keys(inst_69083__$1);
var inst_69086 = cljs.core.set(inst_69085);
var inst_69087 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_69084,inst_69086);
var inst_69088 = cljs.core.seq(inst_69087);
var state_69117__$1 = (function (){var statearr_69240 = state_69117;
(statearr_69240[(10)] = inst_69083__$1);

return statearr_69240;
})();
if(inst_69088){
var statearr_69241_73463 = state_69117__$1;
(statearr_69241_73463[(1)] = (38));

} else {
var statearr_69242_73468 = state_69117__$1;
(statearr_69242_73468[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (17))){
var inst_69020 = (state_69117[(7)]);
var inst_69027 = (state_69117[(15)]);
var inst_69026 = cljs.core.seq(inst_69020);
var inst_69027__$1 = cljs.core.first(inst_69026);
var inst_69028 = cljs.core.next(inst_69026);
var inst_69030 = (inst_69027__$1 == null);
var inst_69031 = cljs.core.not(inst_69030);
var state_69117__$1 = (function (){var statearr_69243 = state_69117;
(statearr_69243[(16)] = inst_69028);

(statearr_69243[(15)] = inst_69027__$1);

return statearr_69243;
})();
if(inst_69031){
var statearr_69244_73469 = state_69117__$1;
(statearr_69244_73469[(1)] = (19));

} else {
var statearr_69245_73470 = state_69117__$1;
(statearr_69245_73470[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (3))){
var inst_68958 = (state_69117[(2)]);
var state_69117__$1 = state_69117;
var statearr_69247_73471 = state_69117__$1;
(statearr_69247_73471[(2)] = inst_68958);


cljs.core.async.impl.ioc_helpers.process_exception(state_69117__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (12))){
var state_69117__$1 = state_69117;
var statearr_69248_73479 = state_69117__$1;
(statearr_69248_73479[(2)] = false);

(statearr_69248_73479[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (2))){
var inst_69113 = (state_69117[(2)]);
var state_69117__$1 = state_69117;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69117__$1,inst_69113);
} else {
if((state_val_69118 === (23))){
var state_69117__$1 = state_69117;
var statearr_69249_73487 = state_69117__$1;
(statearr_69249_73487[(2)] = false);

(statearr_69249_73487[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (35))){
var inst_69061 = (state_69117[(2)]);
var inst_69062 = cljs.core.PersistentHashMap.EMPTY;
var state_69117__$1 = (function (){var statearr_69250 = state_69117;
(statearr_69250[(17)] = inst_69061);

return statearr_69250;
})();
var statearr_69257_73489 = state_69117__$1;
(statearr_69257_73489[(2)] = inst_69062);


cljs.core.async.impl.ioc_helpers.process_exception(state_69117__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (19))){
var inst_69027 = (state_69117[(15)]);
var inst_69033 = inst_69027.cljs$lang$protocol_mask$partition0$;
var inst_69034 = (inst_69033 & (64));
var inst_69035 = inst_69027.cljs$core$ISeq$;
var inst_69036 = (cljs.core.PROTOCOL_SENTINEL === inst_69035);
var inst_69037 = ((inst_69034) || (inst_69036));
var state_69117__$1 = state_69117;
if(cljs.core.truth_(inst_69037)){
var statearr_69259_73493 = state_69117__$1;
(statearr_69259_73493[(1)] = (22));

} else {
var statearr_69261_73494 = state_69117__$1;
(statearr_69261_73494[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (11))){
var state_69117__$1 = state_69117;
var statearr_69265_73496 = state_69117__$1;
(statearr_69265_73496[(2)] = true);

(statearr_69265_73496[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (9))){
var state_69117__$1 = state_69117;
var statearr_69267_73498 = state_69117__$1;
(statearr_69267_73498[(2)] = false);

(statearr_69267_73498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (5))){
var inst_68965 = (state_69117[(11)]);
var inst_68971 = (state_69117[(12)]);
var inst_68978 = (state_69117[(18)]);
var inst_68990 = (state_69117[(14)]);
var inst_68966 = (state_69117[(13)]);
var inst_68974 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword(null,"missing","missing",362507769));
var inst_68976 = (function (){var k = inst_68965;
var e = inst_68966;
var temp__5718__auto__ = inst_68971;
var attr_resolvers = inst_68971;
return ((function (k,e,temp__5718__auto__,attr_resolvers,inst_68965,inst_68971,inst_68978,inst_68990,inst_68966,inst_68974,state_val_69118,c__45808__auto__,map__68951,map__68951__$1,env,indexes,dependency_track){
return (function (p__68975){
var vec__69275 = p__68975;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69275,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69275,(1),null);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.set(cljs.core.keys(e)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"missing","missing",362507769),missing], null);
});
;})(k,e,temp__5718__auto__,attr_resolvers,inst_68965,inst_68971,inst_68978,inst_68990,inst_68966,inst_68974,state_val_69118,c__45808__auto__,map__68951,map__68951__$1,env,indexes,dependency_track))
})();
var inst_68977 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_68976,inst_68971);
var inst_68978__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(inst_68974,inst_68977);
var inst_68989 = cljs.core.seq(inst_68978__$1);
var inst_68990__$1 = cljs.core.first(inst_68989);
var inst_68992 = cljs.core.next(inst_68989);
var inst_68997 = (inst_68990__$1 == null);
var inst_68998 = cljs.core.not(inst_68997);
var state_69117__$1 = (function (){var statearr_69282 = state_69117;
(statearr_69282[(18)] = inst_68978__$1);

(statearr_69282[(14)] = inst_68990__$1);

(statearr_69282[(19)] = inst_68992);

return statearr_69282;
})();
if(inst_68998){
var statearr_69283_73514 = state_69117__$1;
(statearr_69283_73514[(1)] = (8));

} else {
var statearr_69284_73516 = state_69117__$1;
(statearr_69284_73516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (14))){
var inst_68990 = (state_69117[(14)]);
var inst_69014 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_68990);
var state_69117__$1 = state_69117;
var statearr_69291_73533 = state_69117__$1;
(statearr_69291_73533[(2)] = inst_69014);

(statearr_69291_73533[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (26))){
var inst_69027 = (state_69117[(15)]);
var state_69117__$1 = state_69117;
var statearr_69293_73537 = state_69117__$1;
(statearr_69293_73537[(2)] = inst_69027);

(statearr_69293_73537[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (16))){
var inst_68978 = (state_69117[(18)]);
var inst_69017 = (state_69117[(2)]);
var inst_69018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69017,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var inst_69019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69017,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var inst_69020 = inst_68978;
var state_69117__$1 = (function (){var statearr_69296 = state_69117;
(statearr_69296[(7)] = inst_69020);

(statearr_69296[(20)] = inst_69018);

(statearr_69296[(21)] = inst_69019);

return statearr_69296;
})();
var statearr_69297_73542 = state_69117__$1;
(statearr_69297_73542[(2)] = null);

(statearr_69297_73542[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (38))){
var inst_69028 = (state_69117[(16)]);
var inst_69020 = inst_69028;
var state_69117__$1 = (function (){var statearr_69300 = state_69117;
(statearr_69300[(7)] = inst_69020);

return statearr_69300;
})();
var statearr_69301_73548 = state_69117__$1;
(statearr_69301_73548[(2)] = null);

(statearr_69301_73548[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (30))){
var inst_69106 = (state_69117[(2)]);
var state_69117__$1 = state_69117;
var statearr_69306_73555 = state_69117__$1;
(statearr_69306_73555[(2)] = inst_69106);

(statearr_69306_73555[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (10))){
var inst_69012 = (state_69117[(2)]);
var state_69117__$1 = state_69117;
if(cljs.core.truth_(inst_69012)){
var statearr_69310_73572 = state_69117__$1;
(statearr_69310_73572[(1)] = (14));

} else {
var statearr_69311_73576 = state_69117__$1;
(statearr_69311_73576[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (18))){
var inst_69108 = (state_69117[(2)]);
var state_69117__$1 = state_69117;
var statearr_69313_73584 = state_69117__$1;
(statearr_69313_73584[(2)] = inst_69108);

(statearr_69313_73584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (37))){
var inst_69078 = (state_69117[(2)]);
var inst_69079 = com.wsscode.common.async_cljs.throw_err(inst_69078);
var inst_69080 = com.wsscode.pathom.core.elide_items(com.wsscode.pathom.core.break_values,inst_69079);
var state_69117__$1 = state_69117;
var statearr_69316_73587 = state_69117__$1;
(statearr_69316_73587[(2)] = inst_69080);


cljs.core.async.impl.ioc_helpers.process_exception(state_69117__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69118 === (8))){
var inst_68990 = (state_69117[(14)]);
var inst_69001 = inst_68990.cljs$lang$protocol_mask$partition0$;
var inst_69002 = (inst_69001 & (64));
var inst_69003 = inst_68990.cljs$core$ISeq$;
var inst_69004 = (cljs.core.PROTOCOL_SENTINEL === inst_69003);
var inst_69005 = ((inst_69002) || (inst_69004));
var state_69117__$1 = state_69117;
if(cljs.core.truth_(inst_69005)){
var statearr_69318_73593 = state_69117__$1;
(statearr_69318_73593[(1)] = (11));

} else {
var statearr_69319_73595 = state_69117__$1;
(statearr_69319_73595[(1)] = (12));

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
});})(c__45808__auto__,map__68951,map__68951__$1,env,indexes,dependency_track))
;
return ((function (switch__45525__auto__,c__45808__auto__,map__68951,map__68951__$1,env,indexes,dependency_track){
return (function() {
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__45526__auto____0 = (function (){
var statearr_69326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69326[(0)] = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__45526__auto__);

(statearr_69326[(1)] = (1));

return statearr_69326;
});
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__45526__auto____1 = (function (state_69117){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_69117);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e69328){if((e69328 instanceof Object)){
var ex__45529__auto__ = e69328;
var statearr_69329_73601 = state_69117;
(statearr_69329_73601[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69328;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73609 = state_69117;
state_69117 = G__73609;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__45526__auto__ = function(state_69117){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__45526__auto____1.call(this,state_69117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__45526__auto____0;
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__45526__auto____1;
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,map__68951,map__68951__$1,env,indexes,dependency_track))
})();
var state__45810__auto__ = (function (){var statearr_69332 = f__45809__auto__();
(statearr_69332[(6)] = c__45808__auto__);

return statearr_69332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,map__68951,map__68951__$1,env,indexes,dependency_track))
);

return c__45808__auto__;
});
com.wsscode.pathom.connect.default_resolver_dispatch = (function com$wsscode$pathom$connect$default_resolver_dispatch(p__69335,entity){
var map__69336 = p__69335;
var map__69336__$1 = (((((!((map__69336 == null))))?(((((map__69336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69336):map__69336);
var env = map__69336__$1;
var map__69337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69336__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__69337__$1 = (((((!((map__69337 == null))))?(((((map__69337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69337):map__69337);
var resolver = map__69337__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69337__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Default resolver-dispatch is not supported on CLJS, please implement ::p.connect/resolver-dispatch in your parser environment.",cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Helper method that extract resolver symbol from env. It's recommended to use as a dispatch method for creating
 *   multi-methods for resolver dispatch.
 */
com.wsscode.pathom.connect.resolver_dispatch = (function com$wsscode$pathom$connect$resolver_dispatch(var_args){
var G__69345 = arguments.length;
switch (G__69345) {
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
com.wsscode.pathom.connect.resolver_dispatch_embedded = (function com$wsscode$pathom$connect$resolver_dispatch_embedded(p__69348,entity){
var map__69349 = p__69348;
var map__69349__$1 = (((((!((map__69349 == null))))?(((((map__69349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69349):map__69349);
var env = map__69349__$1;
var map__69350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69349__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__69350__$1 = (((((!((map__69350 == null))))?(((((map__69350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69350):map__69350);
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69350__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69350__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
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
var len__4730__auto___73650 = arguments.length;
var i__4731__auto___73651 = (0);
while(true){
if((i__4731__auto___73651 < len__4730__auto___73650)){
args__4736__auto__.push((arguments[i__4731__auto___73651]));

var G__73657 = (i__4731__auto___73651 + (1));
i__4731__auto___73651 = G__73657;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic = (function (p__69368,resolver,args){
var map__69370 = p__69368;
var map__69370__$1 = (((((!((map__69370 == null))))?(((((map__69370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69370):map__69370);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69370__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
if(cljs.core.truth_(resolver_weights)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,resolver_weights,cljs.core.update,resolver,args);
} else {
return null;
}
});

com.wsscode.pathom.connect.update_resolver_weight.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.connect.update_resolver_weight.cljs$lang$applyTo = (function (seq69361){
var G__69362 = cljs.core.first(seq69361);
var seq69361__$1 = cljs.core.next(seq69361);
var G__69363 = cljs.core.first(seq69361__$1);
var seq69361__$2 = cljs.core.next(seq69361__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69362,G__69363,seq69361__$2);
});

com.wsscode.pathom.connect.call_resolver_STAR_ = (function com$wsscode$pathom$connect$call_resolver_STAR_(p__69384,entity){
var map__69389 = p__69384;
var map__69389__$1 = (((((!((map__69389 == null))))?(((((map__69389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69389):map__69389);
var env = map__69389__$1;
var resolver_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69389__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.connect.default_resolver_dispatch);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69389__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var resolver_sym = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env));
var tid = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),resolver_sym,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),entity], null));
var start = com.wsscode.pathom.trace.now();
var res__61957__auto__ = (function (){try{return com.wsscode.pathom.core.exec_plugin_actions.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.connect","wrap-resolve","com.wsscode.pathom.connect/wrap-resolve",1728436586),resolver_dispatch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,entity], 0));
}catch (e69393){var e = e69393;
return e;
}})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__61957__auto__)){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,res__61957__auto__,resolver_sym,tid,start,map__69389,map__69389__$1,env,resolver_dispatch,resolver_weights){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,res__61957__auto__,resolver_sym,tid,start,map__69389,map__69389__$1,env,resolver_dispatch,resolver_weights){
return (function (state_69427){
var state_val_69428 = (state_69427[(1)]);
if((state_val_69428 === (7))){
var state_69427__$1 = state_69427;
var statearr_69429_73731 = state_69427__$1;
(statearr_69429_73731[(2)] = null);

(statearr_69429_73731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69428 === (1))){
var state_69427__$1 = state_69427;
var statearr_69430_73734 = state_69427__$1;
(statearr_69430_73734[(2)] = null);

(statearr_69430_73734[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69428 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_69427,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_69427__$1 = state_69427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69427__$1,(5),res__61957__auto__);
} else {
if((state_val_69428 === (6))){
var inst_69405 = com.wsscode.pathom.trace.now();
var inst_69406 = (inst_69405 - start);
var inst_69407 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(resolver_weights,cljs.core.update,resolver_sym,com.wsscode.pathom.connect.step_weight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_69406], 0));
var state_69427__$1 = state_69427;
var statearr_69434_73740 = state_69427__$1;
(statearr_69434_73740[(2)] = inst_69407);

(statearr_69434_73740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69428 === (3))){
var inst_69394 = (state_69427[(2)]);
var state_69427__$1 = state_69427;
var statearr_69435_73743 = state_69427__$1;
(statearr_69435_73743[(2)] = inst_69394);


cljs.core.async.impl.ioc_helpers.process_exception(state_69427__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69428 === (2))){
var inst_69425 = (state_69427[(2)]);
var state_69427__$1 = state_69427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69427__$1,inst_69425);
} else {
if((state_val_69428 === (11))){
var inst_69399 = (state_69427[(7)]);
var inst_69421 = (state_69427[(2)]);
var inst_69422 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,inst_69421);
var inst_69423 = com.wsscode.common.async_cljs.throw_err(inst_69399);
var state_69427__$1 = (function (){var statearr_69440 = state_69427;
(statearr_69440[(8)] = inst_69422);

return statearr_69440;
})();
var statearr_69441_73746 = state_69427__$1;
(statearr_69441_73746[(2)] = inst_69423);


cljs.core.async.impl.ioc_helpers.process_exception(state_69427__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69428 === (9))){
var inst_69414 = (state_69427[(9)]);
var inst_69399 = (state_69427[(7)]);
var inst_69417 = com.wsscode.pathom.core.process_error(env,inst_69399);
var inst_69418 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_69414,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),inst_69417);
var state_69427__$1 = state_69427;
var statearr_69442_73748 = state_69427__$1;
(statearr_69442_73748[(2)] = inst_69418);

(statearr_69442_73748[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69428 === (5))){
var inst_69399 = (state_69427[(2)]);
var state_69427__$1 = (function (){var statearr_69447 = state_69427;
(statearr_69447[(7)] = inst_69399);

return statearr_69447;
})();
if(cljs.core.truth_(resolver_weights)){
var statearr_69448_73750 = state_69427__$1;
(statearr_69448_73750[(1)] = (6));

} else {
var statearr_69450_73751 = state_69427__$1;
(statearr_69450_73751[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69428 === (10))){
var inst_69414 = (state_69427[(9)]);
var state_69427__$1 = state_69427;
var statearr_69451_73753 = state_69427__$1;
(statearr_69451_73753[(2)] = inst_69414);

(statearr_69451_73753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69428 === (8))){
var inst_69399 = (state_69427[(7)]);
var inst_69410 = (state_69427[(2)]);
var inst_69412 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_69413 = [new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624)];
var inst_69414 = cljs.core.PersistentHashMap.fromArrays(inst_69412,inst_69413);
var inst_69415 = com.wsscode.common.async_cljs.error_QMARK_(inst_69399);
var state_69427__$1 = (function (){var statearr_69453 = state_69427;
(statearr_69453[(9)] = inst_69414);

(statearr_69453[(10)] = inst_69410);

return statearr_69453;
})();
if(inst_69415){
var statearr_69454_73760 = state_69427__$1;
(statearr_69454_73760[(1)] = (9));

} else {
var statearr_69455_73761 = state_69427__$1;
(statearr_69455_73761[(1)] = (10));

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
});})(c__45808__auto__,res__61957__auto__,resolver_sym,tid,start,map__69389,map__69389__$1,env,resolver_dispatch,resolver_weights))
;
return ((function (switch__45525__auto__,c__45808__auto__,res__61957__auto__,resolver_sym,tid,start,map__69389,map__69389__$1,env,resolver_dispatch,resolver_weights){
return (function() {
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__45526__auto____0 = (function (){
var statearr_69457 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69457[(0)] = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__45526__auto__);

(statearr_69457[(1)] = (1));

return statearr_69457;
});
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__45526__auto____1 = (function (state_69427){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_69427);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e69458){if((e69458 instanceof Object)){
var ex__45529__auto__ = e69458;
var statearr_69460_73764 = state_69427;
(statearr_69460_73764[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69458;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73766 = state_69427;
state_69427 = G__73766;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__45526__auto__ = function(state_69427){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__45526__auto____1.call(this,state_69427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__45526__auto____0;
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__45526__auto____1;
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,res__61957__auto__,resolver_sym,tid,start,map__69389,map__69389__$1,env,resolver_dispatch,resolver_weights))
})();
var state__45810__auto__ = (function (){var statearr_69464 = f__45809__auto__();
(statearr_69464[(6)] = c__45808__auto__);

return statearr_69464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,res__61957__auto__,resolver_sym,tid,start,map__69389,map__69389__$1,env,resolver_dispatch,resolver_weights))
);

return c__45808__auto__;
} else {
var x = res__61957__auto__;
if(cljs.core.truth_(resolver_weights)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(resolver_weights,cljs.core.update,resolver_sym,com.wsscode.pathom.connect.step_weight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.trace.now() - start)], 0));
} else {
}

com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,(function (){var G__69469 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624)], null);
if(com.wsscode.common.async_cljs.error_QMARK_(x)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69469,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),com.wsscode.pathom.core.process_error(env,x));
} else {
return G__69469;
}
})());

return com.wsscode.common.async_cljs.throw_err(x);
}
});
com.wsscode.pathom.connect.call_resolver = (function com$wsscode$pathom$connect$call_resolver(p__69472,entity){
var map__69474 = p__69472;
var map__69474__$1 = (((((!((map__69474 == null))))?(((((map__69474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69474):map__69474);
var env = map__69474__$1;
var pool_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69474__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449));
if(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__69474,map__69474__$1,env,pool_chan){
return (function (p1__69470_SHARP_){
return cljs.core.contains_QMARK_(com.wsscode.pathom.core.break_values,cljs.core.second(p1__69470_SHARP_));
});})(map__69474,map__69474__$1,env,pool_chan))
,entity))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver input",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity","entity",-450970276),entity], null));
} else {
if(cljs.core.truth_(pool_chan)){
var out = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__45808__auto___73777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto___73777,out,map__69474,map__69474__$1,env,pool_chan){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto___73777,out,map__69474,map__69474__$1,env,pool_chan){
return (function (state_69499){
var state_val_69500 = (state_69499[(1)]);
if((state_val_69500 === (1))){
var inst_69481 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_69482 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_69483 = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(inst_69482);
var inst_69484 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_69485 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_69484);
var inst_69486 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_69487 = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(inst_69486);
var inst_69488 = [new cljs.core.Keyword("com.wsscode.pathom.connect","schedule-resolver","com.wsscode.pathom.connect/schedule-resolver",939563419),inst_69483,inst_69485,inst_69487,entity];
var inst_69489 = cljs.core.PersistentHashMap.fromArrays(inst_69481,inst_69488);
var inst_69490 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_69489);
var inst_69491 = [new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"f","f",-1597136552)];
var inst_69492 = (function (){var tid = inst_69490;
return ((function (tid,inst_69481,inst_69482,inst_69483,inst_69484,inst_69485,inst_69486,inst_69487,inst_69488,inst_69489,inst_69490,inst_69491,state_val_69500,c__45808__auto___73777,out,map__69474,map__69474__$1,env,pool_chan){
return (function (){
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","schedule-resolver","com.wsscode.pathom.connect/schedule-resolver",939563419)], null));

try{return com.wsscode.pathom.connect.call_resolver_STAR_(env,entity);
}catch (e69505){var e = e69505;
return e;
}});
;})(tid,inst_69481,inst_69482,inst_69483,inst_69484,inst_69485,inst_69486,inst_69487,inst_69488,inst_69489,inst_69490,inst_69491,state_val_69500,c__45808__auto___73777,out,map__69474,map__69474__$1,env,pool_chan))
})();
var inst_69493 = [out,inst_69492];
var inst_69494 = cljs.core.PersistentHashMap.fromArrays(inst_69491,inst_69493);
var state_69499__$1 = state_69499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_69499__$1,(2),pool_chan,inst_69494);
} else {
if((state_val_69500 === (2))){
var inst_69496 = (state_69499[(2)]);
var state_69499__$1 = state_69499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69499__$1,inst_69496);
} else {
return null;
}
}
});})(c__45808__auto___73777,out,map__69474,map__69474__$1,env,pool_chan))
;
return ((function (switch__45525__auto__,c__45808__auto___73777,out,map__69474,map__69474__$1,env,pool_chan){
return (function() {
var com$wsscode$pathom$connect$call_resolver_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$connect$call_resolver_$_state_machine__45526__auto____0 = (function (){
var statearr_69512 = [null,null,null,null,null,null,null];
(statearr_69512[(0)] = com$wsscode$pathom$connect$call_resolver_$_state_machine__45526__auto__);

(statearr_69512[(1)] = (1));

return statearr_69512;
});
var com$wsscode$pathom$connect$call_resolver_$_state_machine__45526__auto____1 = (function (state_69499){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_69499);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e69514){if((e69514 instanceof Object)){
var ex__45529__auto__ = e69514;
var statearr_69515_73795 = state_69499;
(statearr_69515_73795[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69514;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73796 = state_69499;
state_69499 = G__73796;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$connect$call_resolver_$_state_machine__45526__auto__ = function(state_69499){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$call_resolver_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$call_resolver_$_state_machine__45526__auto____1.call(this,state_69499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$call_resolver_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$call_resolver_$_state_machine__45526__auto____0;
com$wsscode$pathom$connect$call_resolver_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$call_resolver_$_state_machine__45526__auto____1;
return com$wsscode$pathom$connect$call_resolver_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto___73777,out,map__69474,map__69474__$1,env,pool_chan))
})();
var state__45810__auto__ = (function (){var statearr_69516 = f__45809__auto__();
(statearr_69516[(6)] = c__45808__auto___73777);

return statearr_69516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto___73777,out,map__69474,map__69474__$1,env,pool_chan))
);


return out;
} else {
return com.wsscode.pathom.connect.call_resolver_STAR_(env,entity);
}
}
});
com.wsscode.pathom.connect.entity_select_keys = (function com$wsscode$pathom$connect$entity_select_keys(env,entity,input){
var entity__$1 = com.wsscode.pathom.core.maybe_atom(entity);
var res__61936__auto__ = ((clojure.set.subset_QMARK_(input,entity__$1))?entity__$1:com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),entity__$1),new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404)], 0)),cljs.core.vec(input)));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__61936__auto__)){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,res__61936__auto__,entity__$1){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,res__61936__auto__,entity__$1){
return (function (state_69535){
var state_val_69536 = (state_69535[(1)]);
if((state_val_69536 === (1))){
var state_69535__$1 = state_69535;
var statearr_69537_73800 = state_69535__$1;
(statearr_69537_73800[(2)] = null);

(statearr_69537_73800[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69536 === (2))){
var inst_69533 = (state_69535[(2)]);
var state_69535__$1 = state_69535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69535__$1,inst_69533);
} else {
if((state_val_69536 === (3))){
var inst_69524 = (state_69535[(2)]);
var state_69535__$1 = state_69535;
var statearr_69539_73803 = state_69535__$1;
(statearr_69539_73803[(2)] = inst_69524);


cljs.core.async.impl.ioc_helpers.process_exception(state_69535__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69536 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_69535,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_69535__$1 = state_69535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69535__$1,(5),res__61936__auto__);
} else {
if((state_val_69536 === (5))){
var inst_69529 = (state_69535[(2)]);
var inst_69530 = com.wsscode.common.async_cljs.throw_err(inst_69529);
var inst_69531 = cljs.core.select_keys(inst_69530,input);
var state_69535__$1 = state_69535;
var statearr_69542_73805 = state_69535__$1;
(statearr_69542_73805[(2)] = inst_69531);


cljs.core.async.impl.ioc_helpers.process_exception(state_69535__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__45808__auto__,res__61936__auto__,entity__$1))
;
return ((function (switch__45525__auto__,c__45808__auto__,res__61936__auto__,entity__$1){
return (function() {
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__45526__auto____0 = (function (){
var statearr_69546 = [null,null,null,null,null,null,null];
(statearr_69546[(0)] = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__45526__auto__);

(statearr_69546[(1)] = (1));

return statearr_69546;
});
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__45526__auto____1 = (function (state_69535){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_69535);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e69547){if((e69547 instanceof Object)){
var ex__45529__auto__ = e69547;
var statearr_69548_73810 = state_69535;
(statearr_69548_73810[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69547;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73813 = state_69535;
state_69535 = G__73813;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__45526__auto__ = function(state_69535){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__45526__auto____1.call(this,state_69535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__45526__auto____0;
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__45526__auto____1;
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,res__61936__auto__,entity__$1))
})();
var state__45810__auto__ = (function (){var statearr_69549 = f__45809__auto__();
(statearr_69549[(6)] = c__45808__auto__);

return statearr_69549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,res__61936__auto__,entity__$1))
);

return c__45808__auto__;
} else {
var e = res__61936__auto__;
return cljs.core.select_keys(e,input);
}
});
com.wsscode.pathom.connect.all_values_valid_QMARK_ = (function com$wsscode$pathom$connect$all_values_valid_QMARK_(m,input){
return ((cljs.core.every_QMARK_((function (p__69554){
var vec__69556 = p__69554;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69556,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69556,(1),null);
return cljs.core.not((com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.core.break_values.call(null,v)));
}),m)) && (cljs.core.every_QMARK_(m,input)));
});
com.wsscode.pathom.connect.cache_batch = (function com$wsscode$pathom$connect$cache_batch(env,resolver_sym,linked_results){
var params = com.wsscode.pathom.core.params(env);
var seq__69560 = cljs.core.seq(linked_results);
var chunk__69561 = null;
var count__69562 = (0);
var i__69563 = (0);
while(true){
if((i__69563 < count__69562)){
var vec__69570 = chunk__69561.cljs$core$IIndexed$_nth$arity$2(null,i__69563);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69570,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69570,(1),null);
com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,input,params], null),((function (seq__69560,chunk__69561,count__69562,i__69563,vec__69570,input,value,params){
return (function (){
return value;
});})(seq__69560,chunk__69561,count__69562,i__69563,vec__69570,input,value,params))
);


var G__73819 = seq__69560;
var G__73820 = chunk__69561;
var G__73821 = count__69562;
var G__73822 = (i__69563 + (1));
seq__69560 = G__73819;
chunk__69561 = G__73820;
count__69562 = G__73821;
i__69563 = G__73822;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__69560);
if(temp__5720__auto__){
var seq__69560__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69560__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__69560__$1);
var G__73823 = cljs.core.chunk_rest(seq__69560__$1);
var G__73824 = c__4550__auto__;
var G__73825 = cljs.core.count(c__4550__auto__);
var G__73826 = (0);
seq__69560 = G__73823;
chunk__69561 = G__73824;
count__69562 = G__73825;
i__69563 = G__73826;
continue;
} else {
var vec__69573 = cljs.core.first(seq__69560__$1);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69573,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69573,(1),null);
com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,input,params], null),((function (seq__69560,chunk__69561,count__69562,i__69563,vec__69573,input,value,seq__69560__$1,temp__5720__auto__,params){
return (function (){
return value;
});})(seq__69560,chunk__69561,count__69562,i__69563,vec__69573,input,value,seq__69560__$1,temp__5720__auto__,params))
);


var G__73831 = cljs.core.next(seq__69560__$1);
var G__73832 = null;
var G__73833 = (0);
var G__73834 = (0);
seq__69560 = G__73831;
chunk__69561 = G__73832;
count__69562 = G__73833;
i__69563 = G__73834;
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
/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f.
 */
com.wsscode.pathom.connect.distinct_by = (function com$wsscode$pathom$connect$distinct_by(var_args){
var G__69578 = arguments.length;
switch (G__69578) {
case 1:
return com.wsscode.pathom.connect.distinct_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.connect.distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.connect.distinct_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var seen = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return ((function (seen){
return (function() {
var G__73836 = null;
var G__73836__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__73836__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__73836__2 = (function (result,x){
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen),fx)){
return result;
} else {
seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen.cljs$core$IDeref$_deref$arity$1(null),fx));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__73836 = function(result,x){
switch(arguments.length){
case 0:
return G__73836__0.call(this);
case 1:
return G__73836__1.call(this,result);
case 2:
return G__73836__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__73836.cljs$core$IFn$_invoke$arity$0 = G__73836__0;
G__73836.cljs$core$IFn$_invoke$arity$1 = G__73836__1;
G__73836.cljs$core$IFn$_invoke$arity$2 = G__73836__2;
return G__73836;
})()
;})(seen))
});
});

com.wsscode.pathom.connect.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function com$wsscode$pathom$connect$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__69583,seen__$1){
while(true){
var vec__69585 = p__69583;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69585,(0),null);
var xs__$1 = vec__69585;
var temp__5720__auto__ = cljs.core.seq(xs__$1);
if(temp__5720__auto__){
var s = temp__5720__auto__;
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(seen__$1,fx)){
var G__73849 = cljs.core.rest(s);
var G__73850 = seen__$1;
p__69583 = G__73849;
seen__$1 = G__73850;
continue;
} else {
return cljs.core.cons(x,com$wsscode$pathom$connect$step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,fx)));
}
} else {
return null;
}
break;
}
})(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});

com.wsscode.pathom.connect.distinct_by.cljs$lang$maxFixedArity = 2;

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
var new_paths = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__69589_SHARP_){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,p1__69589_SHARP_], null)],null));
})),resolvers);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(input,keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pending], 0));
if(cljs.core.seq(missing)){
var missing_paths = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (new_paths,missing){
return (function (p1__69592_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (new_paths,missing){
return (function (acc,x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,x);
});})(new_paths,missing))
,cljs.core.first(p1__69592_SHARP_),cljs.core.next(p1__69592_SHARP_));
});})(new_paths,missing))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(com.wsscode.common.combinatorics.cartesian_product,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (new_paths,missing){
return (function (p1__69591_SHARP_){
var G__69596 = index_oir;
var G__69597 = keys;
var G__69598 = bad_keys;
var G__69599 = p1__69591_SHARP_;
var G__69600 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pending,p1__69591_SHARP_);
return (com.wsscode.pathom.connect.compute_paths_STAR_.cljs$core$IFn$_invoke$arity$5 ? com.wsscode.pathom.connect.compute_paths_STAR_.cljs$core$IFn$_invoke$arity$5(G__69596,G__69597,G__69598,G__69599,G__69600) : com.wsscode.pathom.connect.compute_paths_STAR_.call(null,G__69596,G__69597,G__69598,G__69599,G__69600));
});})(new_paths,missing))
),missing)));
if(cljs.core.seq(missing_paths)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(paths,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (missing_paths,new_paths,missing){
return (function (p1__69593_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (missing_paths,new_paths,missing){
return (function (acc,x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,x);
});})(missing_paths,new_paths,missing))
,cljs.core.first(p1__69593_SHARP_),cljs.core.next(p1__69593_SHARP_));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$3((function (p1__69601_SHARP_){
return com.wsscode.pathom.connect.distinct_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__69601_SHARP_);
}),(function (p1__69602_SHARP_){
return com.wsscode.pathom.connect.distinct_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,p1__69602_SHARP_);
}),cljs.core.rseq)),com.wsscode.pathom.connect.compute_paths_STAR_(index_oir,keys,bad_keys,attr,cljs.core.PersistentHashSet.createAsIfByAssoc([attr])));
});
com.wsscode.pathom.connect.split_good_bad_keys = (function com$wsscode$pathom$connect$split_good_bad_keys(entity){
var map__69604 = cljs.core.group_by((function (p1__69603_SHARP_){
return cljs.core.contains_QMARK_(com.wsscode.pathom.core.break_values,cljs.core.second(p1__69603_SHARP_));
}),entity);
var map__69604__$1 = (((((!((map__69604 == null))))?(((((map__69604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69604):map__69604);
var bad_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69604__$1,true);
var good_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69604__$1,false);
var good_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),good_keys);
var bad_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),bad_keys);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [good_keys__$1,bad_keys__$1], null);
});
com.wsscode.pathom.connect.path_cost = (function com$wsscode$pathom$connect$path_cost(p__69606,path){
var map__69607 = p__69606;
var map__69607__$1 = (((((!((map__69607 == null))))?(((((map__69607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69607):map__69607);
var env = map__69607__$1;
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69607__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69607__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
var weights = (function (){var or__4131__auto__ = (function (){var G__69610 = resolver_weights;
if((G__69610 == null)){
return null;
} else {
return cljs.core.deref(G__69610);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (weights,map__69607,map__69607__$1,env,resolver_weights,request_cache){
return (function (sym){
var e = cljs.core.select_keys(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.resolver_data(env,sym)));
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
});})(weights,map__69607,map__69607__$1,env,resolver_weights,request_cache))
),cljs.core._PLUS_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(path));
});
com.wsscode.pathom.connect.default_sort_plan = (function com$wsscode$pathom$connect$default_sort_plan(env,plan){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__69611_SHARP_){
return com.wsscode.pathom.connect.path_cost(env,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__69611_SHARP_));
}),plan);
});
com.wsscode.pathom.connect.resolve_plan = (function com$wsscode$pathom$connect$resolve_plan(p__69613){
var map__69614 = p__69613;
var map__69614__$1 = (((((!((map__69614 == null))))?(((((map__69614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69614):map__69614);
var env = map__69614__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69614__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var sort_plan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69614__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sort-plan","com.wsscode.pathom.connect/sort-plan",-1506396873));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var sort_plan__$1 = (function (){var or__4131__auto__ = sort_plan;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.connect.default_sort_plan;
}
})();
var vec__69617 = com.wsscode.pathom.connect.split_good_bad_keys(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env));
var good_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69617,(0),null);
var bad_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69617,(1),null);
var G__69620 = env;
var G__69621 = com.wsscode.pathom.connect.compute_paths(new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746).cljs$core$IFn$_invoke$arity$1(indexes),good_keys,bad_keys,key);
return (sort_plan__$1.cljs$core$IFn$_invoke$arity$2 ? sort_plan__$1.cljs$core$IFn$_invoke$arity$2(G__69620,G__69621) : sort_plan__$1.call(null,G__69620,G__69621));
});
com.wsscode.pathom.connect.resolver__GT_output = (function com$wsscode$pathom$connect$resolver__GT_output(env,resolver_sym){
var map__69622 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),resolver_sym], null));
var map__69622__$1 = (((((!((map__69622 == null))))?(((((map__69622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69622):map__69622);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69622__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var compute_output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69622__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","compute-output","com.wsscode.pathom.connect/compute-output",2103799942));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__69624_SHARP_){
return com.wsscode.pathom.connect.output__GT_provides(com.wsscode.pathom.connect.resolver__GT_output(env,cljs.core.second(p1__69624_SHARP_)));
})),plan);
});
com.wsscode.pathom.connect.plan__GT_resolvers = (function com$wsscode$pathom$connect$plan__GT_resolvers(plan){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.flatten(plan));
});
com.wsscode.pathom.connect.decrease_path_costs = (function com$wsscode$pathom$connect$decrease_path_costs(p__69626,plan){
var map__69627 = p__69626;
var map__69627__$1 = (((((!((map__69627 == null))))?(((((map__69627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69627):map__69627);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69627__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var resolver_weight_decrease_amount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69627__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weight-decrease-amount","com.wsscode.pathom.connect/resolver-weight-decrease-amount",-937582293),(1));
if(cljs.core.truth_(resolver_weights)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(resolver_weights,((function (map__69627,map__69627__$1,resolver_weights,resolver_weight_decrease_amount){
return (function (p1__69625_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__69627,map__69627__$1,resolver_weights,resolver_weight_decrease_amount){
return (function (rw,rsym){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rw,rsym,(function (){var x__4219__auto__ = (1);
var y__4220__auto__ = (cljs.core.get.cljs$core$IFn$_invoke$arity$3(rw,rsym,(0)) - resolver_weight_decrease_amount);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());
});})(map__69627,map__69627__$1,resolver_weights,resolver_weight_decrease_amount))
,p1__69625_SHARP_,com.wsscode.pathom.connect.plan__GT_resolvers(plan));
});})(map__69627,map__69627__$1,resolver_weights,resolver_weight_decrease_amount))
);
} else {
return null;
}
});
com.wsscode.pathom.connect.reader_compute_plan = (function com$wsscode$pathom$connect$reader_compute_plan(env,failed_resolvers){
var plan_trace_id = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978)], null));
var plan = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (plan_trace_id){
return (function (p1__69629_SHARP_){
return cljs.core.some(failed_resolvers,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__69629_SHARP_));
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
return (function (p__69630,p__69631){
var map__69632 = p__69630;
var map__69632__$1 = (((((!((map__69632 == null))))?(((((map__69632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69632):map__69632);
var acc = map__69632__$1;
var provided = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69632__$1,new cljs.core.Keyword(null,"provided","provided",-1493091365));
var map__69633 = p__69631;
var map__69633__$1 = (((((!((map__69633 == null))))?(((((map__69633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69633):map__69633);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69633__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.contains_QMARK_(provided,key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj,key);
} else {
var temp__5718__auto__ = cljs.core.first(com.wsscode.pathom.connect.resolve_plan(cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),key)));
if(cljs.core.truth_(temp__5718__auto__)){
var plan = temp__5718__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.into,(function (){var G__69636 = plan;
var G__69636__$1 = (((G__69636 == null))?null:cljs.core.first(G__69636));
var G__69636__$2 = (((G__69636__$1 == null))?null:cljs.core.second(G__69636__$1));
var G__69636__$3 = (((G__69636__$2 == null))?null:com.wsscode.pathom.connect.resolver_data(env,G__69636__$2));
if((G__69636__$3 == null)){
return null;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121).cljs$core$IFn$_invoke$arity$1(G__69636__$3);
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
com.wsscode.pathom.connect.project_parent_query_attributes = (function com$wsscode$pathom$connect$project_parent_query_attributes(p__69637){
var map__69638 = p__69637;
var map__69638__$1 = (((((!((map__69638 == null))))?(((((map__69638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69638):map__69638);
var env = map__69638__$1;
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69638__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
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
com.wsscode.pathom.connect.reader = (function com$wsscode$pathom$connect$reader(p__69644){
var map__69645 = p__69644;
var map__69645__$1 = (((((!((map__69645 == null))))?(((((map__69645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69645):map__69645);
var env = map__69645__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69645__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69645__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var p = com.wsscode.pathom.core.params(env);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null)))){
var temp__5718__auto__ = com.wsscode.pathom.connect.pick_resolver(env);
if(cljs.core.truth_(temp__5718__auto__)){
var map__69647 = temp__5718__auto__;
var map__69647__$1 = (((((!((map__69647 == null))))?(((((map__69647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69647):map__69647);
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69647__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69647__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var map__69649 = com.wsscode.pathom.connect.resolver_data(env,s);
var map__69649__$1 = (((((!((map__69649 == null))))?(((((map__69649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69649):map__69649);
var resolver = map__69649__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69649__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69649__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69649__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver);
var response = (cljs.core.truth_(cache_QMARK_)?com.wsscode.common.async_cljs.throw_err(com.wsscode.pathom.core.cached_STAR_(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,e,p], null),((function (map__69649,map__69649__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__69647,map__69647__$1,e,s,temp__5718__auto__,k,p,map__69645,map__69645__$1,env,indexes,processing_sequence){
return (function (){
if(cljs.core.truth_((function (){var and__4120__auto__ = batch_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return processing_sequence;
} else {
return and__4120__auto__;
}
})())){
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (map__69649,map__69649__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__69647,map__69647__$1,e,s,temp__5718__auto__,k,p,map__69645,map__69645__$1,env,indexes,processing_sequence){
return (function (p1__69642_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__69642_SHARP_,input);
});})(map__69649,map__69649__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__69647,map__69647__$1,e,s,temp__5718__auto__,k,p,map__69645,map__69645__$1,env,indexes,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__69649,map__69649__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__69647,map__69647__$1,e,s,temp__5718__auto__,k,p,map__69645,map__69645__$1,env,indexes,processing_sequence){
return (function (p1__69641_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__69641_SHARP_,input);
});})(map__69649,map__69649__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__69647,map__69647__$1,e,s,temp__5718__auto__,k,p,map__69645,map__69645__$1,env,indexes,processing_sequence))
,processing_sequence)));
var batch_result = com.wsscode.pathom.connect.call_resolver(env__$1,items);
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env__$1,s,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
} else {
return com.wsscode.pathom.connect.call_resolver(env__$1,e);
}
});})(map__69649,map__69649__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__69647,map__69647__$1,e,s,temp__5718__auto__,k,p,map__69645,map__69645__$1,env,indexes,processing_sequence))
)):com.wsscode.pathom.connect.call_resolver(env__$1,e));
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),env__$1);
var response__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
if((!((((response__$1 == null)) || (cljs.core.map_QMARK_(response__$1)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Response from resolver must be a map.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),s,new cljs.core.Keyword(null,"response","response",-1068424192),response__$1], null));
} else {
}

com.wsscode.pathom.core.swap_entity_BANG_(env_SINGLEQUOTE_,((function (map__69649,map__69649__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,response,env_SINGLEQUOTE_,response__$1,map__69647,map__69647__$1,e,s,temp__5718__auto__,k,p,map__69645,map__69645__$1,env,indexes,processing_sequence){
return (function (p1__69643_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$1,p1__69643_SHARP_], 0));
});})(map__69649,map__69649__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,response,env_SINGLEQUOTE_,response__$1,map__69647,map__69647__$1,e,s,temp__5718__auto__,k,p,map__69645,map__69645__$1,env,indexes,processing_sequence))
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
com.wsscode.pathom.connect.process_simple_reader_response = (function com$wsscode$pathom$connect$process_simple_reader_response(p__69651,response){
var map__69652 = p__69651;
var map__69652__$1 = (((((!((map__69652 == null))))?(((((map__69652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69652):map__69652);
var env = map__69652__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69652__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,key);
if(cljs.core.truth_((function (){var and__4120__auto__ = query;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.sequential_QMARK_(x);
} else {
return and__4120__auto__;
}
})())){
return com.wsscode.pathom.core.join_seq(env,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.atom,x));
} else {
if((x == null)){
if(cljs.core.contains_QMARK_(response,key)){
return null;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
} else {
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(x),env);

}
}
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
com.wsscode.pathom.connect.reader2 = (function com$wsscode$pathom$connect$reader2(p__69658){
var map__69659 = p__69658;
var map__69659__$1 = (((((!((map__69659 == null))))?(((((map__69659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69659):map__69659);
var env = map__69659__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69659__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69659__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69659__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var temp__5718__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__69661 = temp__5718__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69661,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69661,(1),null);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var G__69667 = plan;
var vec__69668 = G__69667;
var seq__69669 = cljs.core.seq(vec__69668);
var first__69670 = cljs.core.first(seq__69669);
var seq__69669__$1 = cljs.core.next(seq__69669);
var step = first__69670;
var tail = seq__69669__$1;
var failed_resolvers = cljs.core.PersistentArrayMap.EMPTY;
var out_left = out;
var G__69667__$1 = G__69667;
var failed_resolvers__$1 = failed_resolvers;
var out_left__$1 = out_left;
while(true){
var vec__69693 = G__69667__$1;
var seq__69694 = cljs.core.seq(vec__69693);
var first__69695 = cljs.core.first(seq__69694);
var seq__69694__$1 = cljs.core.next(seq__69694);
var step__$1 = first__69695;
var tail__$1 = seq__69694__$1;
var failed_resolvers__$2 = failed_resolvers__$1;
var out_left__$2 = out_left__$1;
if(cljs.core.truth_(step__$1)){
var vec__69698 = step__$1;
var key_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69698,(0),null);
var resolver_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69698,(1),null);
var map__69701 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),resolver_sym], null));
var map__69701__$1 = (((((!((map__69701 == null))))?(((((map__69701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69701):map__69701);
var resolver = map__69701__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69701__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69701__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69701__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = com.wsscode.pathom.connect.resolver__GT_output(env,resolver_sym);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver);
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env__$1);
var e = cljs.core.select_keys(entity,input);
var p = com.wsscode.pathom.core.params(env__$1);
var trace_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),e], null);
var response = ((cljs.core.contains_QMARK_(entity,key_SINGLEQUOTE_))?cljs.core.select_keys(entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)):(cljs.core.truth_(cache_QMARK_)?com.wsscode.common.async_cljs.throw_err(com.wsscode.pathom.core.cached_STAR_(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,e,p], null),((function (G__69667__$1,failed_resolvers__$1,out_left__$1,vec__69698,key_SINGLEQUOTE_,resolver_sym,map__69701,map__69701__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__69693,seq__69694,first__69695,seq__69694__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__69667,vec__69668,seq__69669,first__69670,seq__69669__$1,step,tail,failed_resolvers,out_left,key,vec__69661,plan,out,temp__5718__auto__,map__69659,map__69659__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (){
if(cljs.core.truth_((function (){var and__4120__auto__ = batch_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return processing_sequence;
} else {
return and__4120__auto__;
}
})())){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__22799__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769)));
var res__22800__auto__ = (function (){var _ = com.wsscode.pathom.trace.trace(env__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417)));
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (G__69667__$1,failed_resolvers__$1,out_left__$1,_,trace_id__22799__auto__,vec__69698,key_SINGLEQUOTE_,resolver_sym,map__69701,map__69701__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__69693,seq__69694,first__69695,seq__69694__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__69667,vec__69668,seq__69669,first__69670,seq__69669__$1,step,tail,failed_resolvers,out_left,key,vec__69661,plan,out,temp__5718__auto__,map__69659,map__69659__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__69655_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__69655_SHARP_,input);
});})(G__69667__$1,failed_resolvers__$1,out_left__$1,_,trace_id__22799__auto__,vec__69698,key_SINGLEQUOTE_,resolver_sym,map__69701,map__69701__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__69693,seq__69694,first__69695,seq__69694__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__69667,vec__69668,seq__69669,first__69670,seq__69669__$1,step,tail,failed_resolvers,out_left,key,vec__69661,plan,out,temp__5718__auto__,map__69659,map__69659__$1,env,indexes,max_resolver_weight,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__69667__$1,failed_resolvers__$1,out_left__$1,_,trace_id__22799__auto__,vec__69698,key_SINGLEQUOTE_,resolver_sym,map__69701,map__69701__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__69693,seq__69694,first__69695,seq__69694__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__69667,vec__69668,seq__69669,first__69670,seq__69669__$1,step,tail,failed_resolvers,out_left,key,vec__69661,plan,out,temp__5718__auto__,map__69659,map__69659__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__69654_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__69654_SHARP_,input);
});})(G__69667__$1,failed_resolvers__$1,out_left__$1,_,trace_id__22799__auto__,vec__69698,key_SINGLEQUOTE_,resolver_sym,map__69701,map__69701__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__69693,seq__69694,first__69695,seq__69694__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__69667,vec__69668,seq__69669,first__69670,seq__69669__$1,step,tail,failed_resolvers,out_left,key,vec__69661,plan,out,temp__5718__auto__,map__69659,map__69659__$1,env,indexes,max_resolver_weight,processing_sequence))
,processing_sequence)));
var ___$1 = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616),items], null));
var batch_result = com.wsscode.pathom.connect.call_resolver(env__$1,items);
var ___$2 = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429),cljs.core.count(batch_result)], null));
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env__$1,resolver_sym,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env__$1,trace_id__22799__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769)));

return res__22800__auto__;
} else {
var _ = com.wsscode.pathom.trace.trace(env__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417)));
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (G__69667__$1,failed_resolvers__$1,out_left__$1,_,vec__69698,key_SINGLEQUOTE_,resolver_sym,map__69701,map__69701__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__69693,seq__69694,first__69695,seq__69694__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__69667,vec__69668,seq__69669,first__69670,seq__69669__$1,step,tail,failed_resolvers,out_left,key,vec__69661,plan,out,temp__5718__auto__,map__69659,map__69659__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__69655_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__69655_SHARP_,input);
});})(G__69667__$1,failed_resolvers__$1,out_left__$1,_,vec__69698,key_SINGLEQUOTE_,resolver_sym,map__69701,map__69701__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__69693,seq__69694,first__69695,seq__69694__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__69667,vec__69668,seq__69669,first__69670,seq__69669__$1,step,tail,failed_resolvers,out_left,key,vec__69661,plan,out,temp__5718__auto__,map__69659,map__69659__$1,env,indexes,max_resolver_weight,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__69667__$1,failed_resolvers__$1,out_left__$1,_,vec__69698,key_SINGLEQUOTE_,resolver_sym,map__69701,map__69701__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__69693,seq__69694,first__69695,seq__69694__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__69667,vec__69668,seq__69669,first__69670,seq__69669__$1,step,tail,failed_resolvers,out_left,key,vec__69661,plan,out,temp__5718__auto__,map__69659,map__69659__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__69654_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__69654_SHARP_,input);
});})(G__69667__$1,failed_resolvers__$1,out_left__$1,_,vec__69698,key_SINGLEQUOTE_,resolver_sym,map__69701,map__69701__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__69693,seq__69694,first__69695,seq__69694__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__69667,vec__69668,seq__69669,first__69670,seq__69669__$1,step,tail,failed_resolvers,out_left,key,vec__69661,plan,out,temp__5718__auto__,map__69659,map__69659__$1,env,indexes,max_resolver_weight,processing_sequence))
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
});})(G__69667__$1,failed_resolvers__$1,out_left__$1,vec__69698,key_SINGLEQUOTE_,resolver_sym,map__69701,map__69701__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,vec__69693,seq__69694,first__69695,seq__69694__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__69667,vec__69668,seq__69669,first__69670,seq__69669__$1,step,tail,failed_resolvers,out_left,key,vec__69661,plan,out,temp__5718__auto__,map__69659,map__69659__$1,env,indexes,max_resolver_weight,processing_sequence))
)):com.wsscode.pathom.connect.call_resolver(env__$1,e)
));
var response__$1 = (function (){var or__4131__auto__ = response;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var replan = ((function (G__69667__$1,failed_resolvers__$1,out_left__$1,vec__69698,key_SINGLEQUOTE_,resolver_sym,map__69701,map__69701__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,vec__69693,seq__69694,first__69695,seq__69694__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__69667,vec__69668,seq__69669,first__69670,seq__69669__$1,step,tail,failed_resolvers,out_left,key,vec__69661,plan,out,temp__5718__auto__,map__69659,map__69659__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (error){
var failed_resolvers__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers__$2,resolver_sym,error);
com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$1,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (G__69667__$1,failed_resolvers__$1,out_left__$1,failed_resolvers__$3,vec__69698,key_SINGLEQUOTE_,resolver_sym,map__69701,map__69701__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,vec__69693,seq__69694,first__69695,seq__69694__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__69667,vec__69668,seq__69669,first__69670,seq__69669__$1,step,tail,failed_resolvers,out_left,key,vec__69661,plan,out,temp__5718__auto__,map__69659,map__69659__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__69656_SHARP_){
var x__4222__auto__ = ((function (){var or__4131__auto__ = p1__69656_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() * (2));
var y__4223__auto__ = max_resolver_weight;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});})(G__69667__$1,failed_resolvers__$1,out_left__$1,failed_resolvers__$3,vec__69698,key_SINGLEQUOTE_,resolver_sym,map__69701,map__69701__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,vec__69693,seq__69694,first__69695,seq__69694__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__69667,vec__69668,seq__69669,first__69670,seq__69669__$1,step,tail,failed_resolvers,out_left,key,vec__69661,plan,out,temp__5718__auto__,map__69659,map__69659__$1,env,indexes,max_resolver_weight,processing_sequence))
], 0));

var temp__5718__auto____$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$1,failed_resolvers__$3);
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__69715 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69715,(0),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69715,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan__$1,failed_resolvers__$3,out_SINGLEQUOTE_], null);
} else {
return null;
}
});})(G__69667__$1,failed_resolvers__$1,out_left__$1,vec__69698,key_SINGLEQUOTE_,resolver_sym,map__69701,map__69701__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,vec__69693,seq__69694,first__69695,seq__69694__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__69667,vec__69668,seq__69669,first__69670,seq__69669__$1,step,tail,failed_resolvers,out_left,key,vec__69661,plan,out,temp__5718__auto__,map__69659,map__69659__$1,env,indexes,max_resolver_weight,processing_sequence))
;
if(cljs.core.map_QMARK_(response__$1)){
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(response__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),env__$1);
var response__$2 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
com.wsscode.pathom.core.swap_entity_BANG_(env_SINGLEQUOTE_,((function (G__69667__$1,failed_resolvers__$1,out_left__$1,env_SINGLEQUOTE_,response__$2,vec__69698,key_SINGLEQUOTE_,resolver_sym,map__69701,map__69701__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,replan,vec__69693,seq__69694,first__69695,seq__69694__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__69667,vec__69668,seq__69669,first__69670,seq__69669__$1,step,tail,failed_resolvers,out_left,key,vec__69661,plan,out,temp__5718__auto__,map__69659,map__69659__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__69657_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$2,p1__69657_SHARP_], 0));
});})(G__69667__$1,failed_resolvers__$1,out_left__$1,env_SINGLEQUOTE_,response__$2,vec__69698,key_SINGLEQUOTE_,resolver_sym,map__69701,map__69701__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,entity,e,p,trace_data,response,response__$1,replan,vec__69693,seq__69694,first__69695,seq__69694__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__69667,vec__69668,seq__69669,first__69670,seq__69669__$1,step,tail,failed_resolvers,out_left,key,vec__69661,plan,out,temp__5718__auto__,map__69659,map__69659__$1,env,indexes,max_resolver_weight,processing_sequence))
);

if(((cljs.core.contains_QMARK_(response__$2,key_SINGLEQUOTE_)) && (cljs.core.not((function (){var G__69722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response__$2,key_SINGLEQUOTE_);
return (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(G__69722) : com.wsscode.pathom.core.break_values.call(null,G__69722));
})())))){
var out_provides = com.wsscode.pathom.connect.output__GT_provides(output);
com.wsscode.pathom.trace.trace(env_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym], null));

if(cljs.core.seq(tail__$1)){
var G__73928 = tail__$1;
var G__73929 = failed_resolvers__$2;
var G__73930 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(out_left__$2,out_provides);
G__69667__$1 = G__73928;
failed_resolvers__$1 = G__73929;
out_left__$1 = G__73930;
continue;
} else {
return com.wsscode.pathom.connect.process_simple_reader_response(env_SINGLEQUOTE_,response__$2);
}
} else {
var temp__5718__auto____$1 = replan(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$2,new cljs.core.Keyword(null,"key","key",-1516042587),key_SINGLEQUOTE_], null)));
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__69725 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69725,(0),null);
var failed_resolvers__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69725,(1),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69725,(2),null);
var G__73935 = plan__$1;
var G__73936 = failed_resolvers__$3;
var G__73937 = out_SINGLEQUOTE_;
G__69667__$1 = G__73935;
failed_resolvers__$1 = G__73936;
out_left__$1 = G__73937;
continue;
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.seq(tail__$1);
if(and__4120__auto__){
var G__69729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response__$2,key_SINGLEQUOTE_);
return (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(G__69729) : com.wsscode.pathom.core.break_values.call(null,G__69729));
} else {
return and__4120__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$2,new cljs.core.Keyword(null,"key","key",-1516042587),key_SINGLEQUOTE_], null));
} else {
}

return com.wsscode.pathom.connect.process_simple_reader_response(env_SINGLEQUOTE_,response__$2);
}
}
} else {
var temp__5718__auto____$1 = replan(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$1], null)));
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__69732 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69732,(0),null);
var failed_resolvers__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69732,(1),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69732,(2),null);
var G__73941 = plan__$1;
var G__73942 = failed_resolvers__$3;
var G__73943 = out_SINGLEQUOTE_;
G__69667__$1 = G__73941;
failed_resolvers__$1 = G__73942;
out_left__$1 = G__73943;
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
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__){
return (function (state_69766){
var state_val_69767 = (state_69766[(1)]);
if((state_val_69767 === (7))){
var inst_69744 = (state_69766[(7)]);
var inst_69746 = (state_69766[(8)]);
var inst_69746__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_69744) : f.call(null,inst_69744));
var inst_69747 = com.wsscode.common.async_cljs.chan_QMARK_(inst_69746__$1);
var state_69766__$1 = (function (){var statearr_69770 = state_69766;
(statearr_69770[(8)] = inst_69746__$1);

return statearr_69770;
})();
if(inst_69747){
var statearr_69771_73948 = state_69766__$1;
(statearr_69771_73948[(1)] = (10));

} else {
var statearr_69772_73952 = state_69766__$1;
(statearr_69772_73952[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69767 === (1))){
var state_69766__$1 = state_69766;
var statearr_69773_73954 = state_69766__$1;
(statearr_69773_73954[(2)] = null);

(statearr_69773_73954[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69767 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_69766,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_69739 = cljs.core.PersistentVector.EMPTY;
var inst_69741 = inst_69739;
var inst_69742 = s;
var state_69766__$1 = (function (){var statearr_69774 = state_69766;
(statearr_69774[(9)] = inst_69741);

(statearr_69774[(10)] = inst_69742);

return statearr_69774;
})();
var statearr_69775_73955 = state_69766__$1;
(statearr_69775_73955[(2)] = null);

(statearr_69775_73955[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69767 === (13))){
var inst_69750 = (state_69766[(2)]);
var inst_69751 = com.wsscode.common.async_cljs.throw_err(inst_69750);
var state_69766__$1 = state_69766;
var statearr_69777_73956 = state_69766__$1;
(statearr_69777_73956[(2)] = inst_69751);

(statearr_69777_73956[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69767 === (6))){
var inst_69762 = (state_69766[(2)]);
var state_69766__$1 = state_69766;
var statearr_69780_73958 = state_69766__$1;
(statearr_69780_73958[(2)] = inst_69762);


cljs.core.async.impl.ioc_helpers.process_exception(state_69766__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69767 === (3))){
var inst_69735 = (state_69766[(2)]);
var state_69766__$1 = state_69766;
var statearr_69782_73960 = state_69766__$1;
(statearr_69782_73960[(2)] = inst_69735);


cljs.core.async.impl.ioc_helpers.process_exception(state_69766__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69767 === (12))){
var inst_69741 = (state_69766[(9)]);
var inst_69742 = (state_69766[(10)]);
var inst_69754 = (state_69766[(2)]);
var inst_69755 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_69741,inst_69754);
var inst_69756 = cljs.core.next(inst_69742);
var inst_69741__$1 = inst_69755;
var inst_69742__$1 = inst_69756;
var state_69766__$1 = (function (){var statearr_69784 = state_69766;
(statearr_69784[(9)] = inst_69741__$1);

(statearr_69784[(10)] = inst_69742__$1);

return statearr_69784;
})();
var statearr_69786_73963 = state_69766__$1;
(statearr_69786_73963[(2)] = null);

(statearr_69786_73963[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69767 === (2))){
var inst_69764 = (state_69766[(2)]);
var state_69766__$1 = state_69766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69766__$1,inst_69764);
} else {
if((state_val_69767 === (11))){
var inst_69746 = (state_69766[(8)]);
var state_69766__$1 = state_69766;
var statearr_69788_73964 = state_69766__$1;
(statearr_69788_73964[(2)] = inst_69746);

(statearr_69788_73964[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69767 === (9))){
var inst_69760 = (state_69766[(2)]);
var state_69766__$1 = state_69766;
var statearr_69790_73965 = state_69766__$1;
(statearr_69790_73965[(2)] = inst_69760);

(statearr_69790_73965[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69767 === (5))){
var inst_69744 = (state_69766[(7)]);
var inst_69742 = (state_69766[(10)]);
var inst_69744__$1 = cljs.core.first(inst_69742);
var state_69766__$1 = (function (){var statearr_69792 = state_69766;
(statearr_69792[(7)] = inst_69744__$1);

return statearr_69792;
})();
if(cljs.core.truth_(inst_69744__$1)){
var statearr_69793_73966 = state_69766__$1;
(statearr_69793_73966[(1)] = (7));

} else {
var statearr_69794_73968 = state_69766__$1;
(statearr_69794_73968[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69767 === (10))){
var inst_69746 = (state_69766[(8)]);
var state_69766__$1 = state_69766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69766__$1,(13),inst_69746);
} else {
if((state_val_69767 === (8))){
var inst_69741 = (state_69766[(9)]);
var state_69766__$1 = state_69766;
var statearr_69796_73971 = state_69766__$1;
(statearr_69796_73971[(2)] = inst_69741);

(statearr_69796_73971[(1)] = (9));


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
});})(c__45808__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto__){
return (function() {
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__45526__auto____0 = (function (){
var statearr_69800 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69800[(0)] = com$wsscode$pathom$connect$map_async_serial_$_state_machine__45526__auto__);

(statearr_69800[(1)] = (1));

return statearr_69800;
});
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__45526__auto____1 = (function (state_69766){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_69766);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e69801){if((e69801 instanceof Object)){
var ex__45529__auto__ = e69801;
var statearr_69802_73974 = state_69766;
(statearr_69802_73974[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69801;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73977 = state_69766;
state_69766 = G__73977;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$connect$map_async_serial_$_state_machine__45526__auto__ = function(state_69766){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__45526__auto____1.call(this,state_69766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$map_async_serial_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$map_async_serial_$_state_machine__45526__auto____0;
com$wsscode$pathom$connect$map_async_serial_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$map_async_serial_$_state_machine__45526__auto____1;
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__))
})();
var state__45810__auto__ = (function (){var statearr_69805 = f__45809__auto__();
(statearr_69805[(6)] = c__45808__auto__);

return statearr_69805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__))
);

return c__45808__auto__;
});
/**
 * DEPRECATED: use async-reader2
 * 
 *   Like reader, but supports async values on resolver return.
 */
com.wsscode.pathom.connect.async_reader = (function com$wsscode$pathom$connect$async_reader(p__69813){
var map__69814 = p__69813;
var map__69814__$1 = (((((!((map__69814 == null))))?(((((map__69814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69814):map__69814);
var env = map__69814__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69814__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69814__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var p = com.wsscode.pathom.core.params(env);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null)))){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,k,p,map__69814,map__69814__$1,env,indexes,processing_sequence){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,k,p,map__69814,map__69814__$1,env,indexes,processing_sequence){
return (function (state_69978){
var state_val_69979 = (state_69978[(1)]);
if((state_val_69979 === (7))){
var state_69978__$1 = state_69978;
var statearr_69980_73986 = state_69978__$1;
(statearr_69980_73986[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));

(statearr_69980_73986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (59))){
var inst_69964 = (state_69978[(2)]);
var state_69978__$1 = state_69978;
var statearr_69981_73987 = state_69978__$1;
(statearr_69981_73987[(2)] = inst_69964);

(statearr_69981_73987[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (20))){
var inst_69878 = (state_69978[(2)]);
var state_69978__$1 = state_69978;
if(cljs.core.truth_(inst_69878)){
var statearr_69982_73989 = state_69978__$1;
(statearr_69982_73989[(1)] = (24));

} else {
var statearr_69983_73990 = state_69978__$1;
(statearr_69983_73990[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (58))){
var inst_69956 = (state_69978[(7)]);
var state_69978__$1 = state_69978;
var statearr_69984_73991 = state_69978__$1;
(statearr_69984_73991[(2)] = inst_69956);

(statearr_69984_73991[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (60))){
var inst_69960 = (state_69978[(2)]);
var inst_69961 = com.wsscode.common.async_cljs.throw_err(inst_69960);
var state_69978__$1 = state_69978;
var statearr_69985_73993 = state_69978__$1;
(statearr_69985_73993[(2)] = inst_69961);

(statearr_69985_73993[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (27))){
var inst_69885 = (state_69978[(8)]);
var inst_69850 = (state_69978[(9)]);
var inst_69886 = (state_69978[(10)]);
var inst_69823 = (state_69978[(11)]);
var inst_69852 = (state_69978[(12)]);
var inst_69884 = (state_69978[(13)]);
var inst_69883 = (state_69978[(14)]);
var inst_69893 = (state_69978[(15)]);
var inst_69887 = (state_69978[(16)]);
var inst_69851 = (state_69978[(17)]);
var inst_69889 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69890 = [inst_69852,inst_69851,p];
var inst_69891 = (new cljs.core.PersistentVector(null,3,(5),inst_69889,inst_69890,null));
var inst_69892 = (function (){var input = inst_69886;
var cache_QMARK_ = inst_69884;
var temp__5718__auto__ = inst_69823;
var map__69825 = inst_69850;
var batch_QMARK_ = inst_69885;
var env__$1 = inst_69887;
var e = inst_69851;
var s = inst_69852;
var resolver = inst_69883;
var map__69857 = inst_69883;
return ((function (input,cache_QMARK_,temp__5718__auto__,map__69825,batch_QMARK_,env__$1,e,s,resolver,map__69857,inst_69885,inst_69850,inst_69886,inst_69823,inst_69852,inst_69884,inst_69883,inst_69893,inst_69887,inst_69851,inst_69889,inst_69890,inst_69891,state_val_69979,c__45808__auto__,k,p,map__69814,map__69814__$1,env,indexes,processing_sequence){
return (function (){
var c__45808__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto____$1,input,cache_QMARK_,temp__5718__auto__,map__69825,batch_QMARK_,env__$1,e,s,resolver,map__69857,inst_69885,inst_69850,inst_69886,inst_69823,inst_69852,inst_69884,inst_69883,inst_69893,inst_69887,inst_69851,inst_69889,inst_69890,inst_69891,state_val_69979,c__45808__auto__,k,p,map__69814,map__69814__$1,env,indexes,processing_sequence){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto____$1,input,cache_QMARK_,temp__5718__auto__,map__69825,batch_QMARK_,env__$1,e,s,resolver,map__69857,inst_69885,inst_69850,inst_69886,inst_69823,inst_69852,inst_69884,inst_69883,inst_69893,inst_69887,inst_69851,inst_69889,inst_69890,inst_69891,state_val_69979,c__45808__auto__,k,p,map__69814,map__69814__$1,env,indexes,processing_sequence){
return (function (state_70029){
var state_val_70030 = (state_70029[(1)]);
if((state_val_70030 === (7))){
var inst_69993 = (state_70029[(2)]);
var state_70029__$1 = state_70029;
if(cljs.core.truth_(inst_69993)){
var statearr_70032_74006 = state_70029__$1;
(statearr_70032_74006[(1)] = (8));

} else {
var statearr_70033_74008 = state_70029__$1;
(statearr_70033_74008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70030 === (1))){
var state_70029__$1 = state_70029;
var statearr_70034_74009 = state_70029__$1;
(statearr_70034_74009[(2)] = null);

(statearr_70034_74009[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70030 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_70029,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_70029__$1 = state_70029;
if(cljs.core.truth_(batch_QMARK_)){
var statearr_70035_74015 = state_70029__$1;
(statearr_70035_74015[(1)] = (5));

} else {
var statearr_70036_74016 = state_70029__$1;
(statearr_70036_74016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70030 === (15))){
var inst_70006 = (state_70029[(2)]);
var inst_70007 = com.wsscode.common.async_cljs.throw_err(inst_70006);
var state_70029__$1 = state_70029;
var statearr_70041_74017 = state_70029__$1;
(statearr_70041_74017[(2)] = inst_70007);

(statearr_70041_74017[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70030 === (13))){
var inst_70002 = (state_70029[(7)]);
var state_70029__$1 = state_70029;
var statearr_70046_74021 = state_70029__$1;
(statearr_70046_74021[(2)] = inst_70002);

(statearr_70046_74021[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70030 === (6))){
var state_70029__$1 = state_70029;
var statearr_70051_74028 = state_70029__$1;
(statearr_70051_74028[(2)] = batch_QMARK_);

(statearr_70051_74028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70030 === (17))){
var inst_70015 = (state_70029[(8)]);
var state_70029__$1 = state_70029;
var statearr_70052_74029 = state_70029__$1;
(statearr_70052_74029[(2)] = inst_70015);

(statearr_70052_74029[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70030 === (3))){
var inst_69986 = (state_70029[(2)]);
var state_70029__$1 = state_70029;
var statearr_70053_74030 = state_70029__$1;
(statearr_70053_74030[(2)] = inst_69986);


cljs.core.async.impl.ioc_helpers.process_exception(state_70029__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70030 === (12))){
var inst_70002 = (state_70029[(7)]);
var state_70029__$1 = state_70029;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70029__$1,(15),inst_70002);
} else {
if((state_val_70030 === (2))){
var inst_70027 = (state_70029[(2)]);
var state_70029__$1 = state_70029;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70029__$1,inst_70027);
} else {
if((state_val_70030 === (19))){
var inst_70019 = (state_70029[(2)]);
var inst_70020 = com.wsscode.common.async_cljs.throw_err(inst_70019);
var state_70029__$1 = state_70029;
var statearr_70066_74032 = state_70029__$1;
(statearr_70066_74032[(2)] = inst_70020);

(statearr_70066_74032[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70030 === (11))){
var inst_70001 = (state_70029[(9)]);
var inst_69995 = (state_70029[(10)]);
var inst_70002 = (state_70029[(7)]);
var inst_69999 = (state_70029[(2)]);
var inst_70000 = com.wsscode.common.async_cljs.throw_err(inst_69999);
var inst_70001__$1 = cljs.core.filterv(inst_69995,inst_70000);
var inst_70002__$1 = com.wsscode.pathom.connect.call_resolver(env__$1,inst_70001__$1);
var inst_70003 = com.wsscode.common.async_cljs.chan_QMARK_(inst_70002__$1);
var state_70029__$1 = (function (){var statearr_70075 = state_70029;
(statearr_70075[(9)] = inst_70001__$1);

(statearr_70075[(7)] = inst_70002__$1);

return statearr_70075;
})();
if(inst_70003){
var statearr_70076_74034 = state_70029__$1;
(statearr_70076_74034[(1)] = (12));

} else {
var statearr_70077_74036 = state_70029__$1;
(statearr_70077_74036[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70030 === (9))){
var inst_70015 = (state_70029[(8)]);
var inst_70015__$1 = com.wsscode.pathom.connect.call_resolver(env__$1,e);
var inst_70016 = com.wsscode.common.async_cljs.chan_QMARK_(inst_70015__$1);
var state_70029__$1 = (function (){var statearr_70078 = state_70029;
(statearr_70078[(8)] = inst_70015__$1);

return statearr_70078;
})();
if(inst_70016){
var statearr_70079_74042 = state_70029__$1;
(statearr_70079_74042[(1)] = (16));

} else {
var statearr_70080_74043 = state_70029__$1;
(statearr_70080_74043[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70030 === (5))){
var state_70029__$1 = state_70029;
var statearr_70085_74044 = state_70029__$1;
(statearr_70085_74044[(2)] = processing_sequence);

(statearr_70085_74044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70030 === (14))){
var inst_70001 = (state_70029[(9)]);
var inst_70010 = (state_70029[(2)]);
var inst_70011 = cljs.core.zipmap(inst_70001,inst_70010);
var inst_70012 = com.wsscode.pathom.connect.cache_batch(env__$1,s,inst_70011);
var inst_70013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70011,e);
var state_70029__$1 = (function (){var statearr_70090 = state_70029;
(statearr_70090[(11)] = inst_70012);

return statearr_70090;
})();
var statearr_70095_74053 = state_70029__$1;
(statearr_70095_74053[(2)] = inst_70013);

(statearr_70095_74053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70030 === (16))){
var inst_70015 = (state_70029[(8)]);
var state_70029__$1 = state_70029;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70029__$1,(19),inst_70015);
} else {
if((state_val_70030 === (10))){
var inst_70025 = (state_70029[(2)]);
var state_70029__$1 = state_70029;
var statearr_70096_74054 = state_70029__$1;
(statearr_70096_74054[(2)] = inst_70025);


cljs.core.async.impl.ioc_helpers.process_exception(state_70029__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70030 === (18))){
var inst_70023 = (state_70029[(2)]);
var state_70029__$1 = state_70029;
var statearr_70101_74055 = state_70029__$1;
(statearr_70101_74055[(2)] = inst_70023);

(statearr_70101_74055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70030 === (8))){
var inst_69995 = (function (){return ((function (state_val_70030,c__45808__auto____$1,input,cache_QMARK_,temp__5718__auto__,map__69825,batch_QMARK_,env__$1,e,s,resolver,map__69857,inst_69885,inst_69850,inst_69886,inst_69823,inst_69852,inst_69884,inst_69883,inst_69893,inst_69887,inst_69851,inst_69889,inst_69890,inst_69891,state_val_69979,c__45808__auto__,k,p,map__69814,map__69814__$1,env,indexes,processing_sequence){
return (function (p1__69807_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__69807_SHARP_,input);
});
;})(state_val_70030,c__45808__auto____$1,input,cache_QMARK_,temp__5718__auto__,map__69825,batch_QMARK_,env__$1,e,s,resolver,map__69857,inst_69885,inst_69850,inst_69886,inst_69823,inst_69852,inst_69884,inst_69883,inst_69893,inst_69887,inst_69851,inst_69889,inst_69890,inst_69891,state_val_69979,c__45808__auto__,k,p,map__69814,map__69814__$1,env,indexes,processing_sequence))
})();
var inst_69996 = (function (){return ((function (inst_69995,state_val_70030,c__45808__auto____$1,input,cache_QMARK_,temp__5718__auto__,map__69825,batch_QMARK_,env__$1,e,s,resolver,map__69857,inst_69885,inst_69850,inst_69886,inst_69823,inst_69852,inst_69884,inst_69883,inst_69893,inst_69887,inst_69851,inst_69889,inst_69890,inst_69891,state_val_69979,c__45808__auto__,k,p,map__69814,map__69814__$1,env,indexes,processing_sequence){
return (function (p1__69806_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__69806_SHARP_,input);
});
;})(inst_69995,state_val_70030,c__45808__auto____$1,input,cache_QMARK_,temp__5718__auto__,map__69825,batch_QMARK_,env__$1,e,s,resolver,map__69857,inst_69885,inst_69850,inst_69886,inst_69823,inst_69852,inst_69884,inst_69883,inst_69893,inst_69887,inst_69851,inst_69889,inst_69890,inst_69891,state_val_69979,c__45808__auto__,k,p,map__69814,map__69814__$1,env,indexes,processing_sequence))
})();
var inst_69997 = com.wsscode.pathom.connect.map_async_serial(inst_69996,processing_sequence);
var state_70029__$1 = (function (){var statearr_70110 = state_70029;
(statearr_70110[(10)] = inst_69995);

return statearr_70110;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70029__$1,(11),inst_69997);
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
});})(c__45808__auto____$1,input,cache_QMARK_,temp__5718__auto__,map__69825,batch_QMARK_,env__$1,e,s,resolver,map__69857,inst_69885,inst_69850,inst_69886,inst_69823,inst_69852,inst_69884,inst_69883,inst_69893,inst_69887,inst_69851,inst_69889,inst_69890,inst_69891,state_val_69979,c__45808__auto__,k,p,map__69814,map__69814__$1,env,indexes,processing_sequence))
;
return ((function (switch__45525__auto__,c__45808__auto____$1,input,cache_QMARK_,temp__5718__auto__,map__69825,batch_QMARK_,env__$1,e,s,resolver,map__69857,inst_69885,inst_69850,inst_69886,inst_69823,inst_69852,inst_69884,inst_69883,inst_69893,inst_69887,inst_69851,inst_69889,inst_69890,inst_69891,state_val_69979,c__45808__auto__,k,p,map__69814,map__69814__$1,env,indexes,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_reader_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$connect$async_reader_$_state_machine__45526__auto____0 = (function (){
var statearr_70115 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70115[(0)] = com$wsscode$pathom$connect$async_reader_$_state_machine__45526__auto__);

(statearr_70115[(1)] = (1));

return statearr_70115;
});
var com$wsscode$pathom$connect$async_reader_$_state_machine__45526__auto____1 = (function (state_70029){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_70029);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e70116){if((e70116 instanceof Object)){
var ex__45529__auto__ = e70116;
var statearr_70117_74072 = state_70029;
(statearr_70117_74072[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_70029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70116;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74086 = state_70029;
state_70029 = G__74086;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader_$_state_machine__45526__auto__ = function(state_70029){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader_$_state_machine__45526__auto____1.call(this,state_70029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader_$_state_machine__45526__auto____0;
com$wsscode$pathom$connect$async_reader_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader_$_state_machine__45526__auto____1;
return com$wsscode$pathom$connect$async_reader_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto____$1,input,cache_QMARK_,temp__5718__auto__,map__69825,batch_QMARK_,env__$1,e,s,resolver,map__69857,inst_69885,inst_69850,inst_69886,inst_69823,inst_69852,inst_69884,inst_69883,inst_69893,inst_69887,inst_69851,inst_69889,inst_69890,inst_69891,state_val_69979,c__45808__auto__,k,p,map__69814,map__69814__$1,env,indexes,processing_sequence))
})();
var state__45810__auto__ = (function (){var statearr_70118 = f__45809__auto__();
(statearr_70118[(6)] = c__45808__auto____$1);

return statearr_70118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto____$1,input,cache_QMARK_,temp__5718__auto__,map__69825,batch_QMARK_,env__$1,e,s,resolver,map__69857,inst_69885,inst_69850,inst_69886,inst_69823,inst_69852,inst_69884,inst_69883,inst_69893,inst_69887,inst_69851,inst_69889,inst_69890,inst_69891,state_val_69979,c__45808__auto__,k,p,map__69814,map__69814__$1,env,indexes,processing_sequence))
);

return c__45808__auto____$1;
});
;})(input,cache_QMARK_,temp__5718__auto__,map__69825,batch_QMARK_,env__$1,e,s,resolver,map__69857,inst_69885,inst_69850,inst_69886,inst_69823,inst_69852,inst_69884,inst_69883,inst_69893,inst_69887,inst_69851,inst_69889,inst_69890,inst_69891,state_val_69979,c__45808__auto__,k,p,map__69814,map__69814__$1,env,indexes,processing_sequence))
})();
var inst_69893__$1 = com.wsscode.pathom.core.cached_async(inst_69887,inst_69891,inst_69892);
var inst_69894 = com.wsscode.common.async_cljs.chan_QMARK_(inst_69893__$1);
var state_69978__$1 = (function (){var statearr_70119 = state_69978;
(statearr_70119[(15)] = inst_69893__$1);

return statearr_70119;
})();
if(inst_69894){
var statearr_70120_74099 = state_69978__$1;
(statearr_70120_74099[(1)] = (30));

} else {
var statearr_70121_74100 = state_69978__$1;
(statearr_70121_74100[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (1))){
var state_69978__$1 = state_69978;
var statearr_70122_74102 = state_69978__$1;
(statearr_70122_74102[(2)] = null);

(statearr_70122_74102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (24))){
var inst_69858 = (state_69978[(18)]);
var inst_69880 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_69858);
var state_69978__$1 = state_69978;
var statearr_70123_74104 = state_69978__$1;
(statearr_70123_74104[(2)] = inst_69880);

(statearr_70123_74104[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (55))){
var state_69978__$1 = state_69978;
var statearr_70124_74105 = state_69978__$1;
(statearr_70124_74105[(2)] = null);

(statearr_70124_74105[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (39))){
var state_69978__$1 = state_69978;
var statearr_70125_74106 = state_69978__$1;
(statearr_70125_74106[(2)] = null);

(statearr_70125_74106[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (46))){
var inst_69944 = (state_69978[(2)]);
var state_69978__$1 = state_69978;
var statearr_70126_74108 = state_69978__$1;
(statearr_70126_74108[(2)] = inst_69944);

(statearr_70126_74108[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_69978,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_69820 = com.wsscode.pathom.connect.async_pick_resolver(env);
var state_69978__$1 = state_69978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69978__$1,(5),inst_69820);
} else {
if((state_val_69979 === (54))){
var inst_69932 = (state_69978[(19)]);
var inst_69956 = (state_69978[(7)]);
var inst_69914 = (state_69978[(20)]);
var inst_69955 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_69932);
var inst_69956__$1 = com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(inst_69955,inst_69914);
var inst_69957 = com.wsscode.common.async_cljs.chan_QMARK_(inst_69956__$1);
var state_69978__$1 = (function (){var statearr_70127 = state_69978;
(statearr_70127[(7)] = inst_69956__$1);

return statearr_70127;
})();
if(inst_69957){
var statearr_70128_74110 = state_69978__$1;
(statearr_70128_74110[(1)] = (57));

} else {
var statearr_70129_74111 = state_69978__$1;
(statearr_70129_74111[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (15))){
var inst_69823 = (state_69978[(11)]);
var inst_69847 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_69823);
var state_69978__$1 = state_69978;
var statearr_70130_74114 = state_69978__$1;
(statearr_70130_74114[(2)] = inst_69847);

(statearr_70130_74114[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (48))){
var inst_69915 = (state_69978[(21)]);
var inst_69948 = cljs.core.contains_QMARK_(inst_69915,k);
var state_69978__$1 = state_69978;
if(inst_69948){
var statearr_70131_74125 = state_69978__$1;
(statearr_70131_74125[(1)] = (51));

} else {
var statearr_70132_74126 = state_69978__$1;
(statearr_70132_74126[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (50))){
var inst_69969 = (state_69978[(2)]);
var state_69978__$1 = state_69978;
var statearr_70133_74128 = state_69978__$1;
(statearr_70133_74128[(2)] = inst_69969);

(statearr_70133_74128[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (21))){
var state_69978__$1 = state_69978;
var statearr_70134_74132 = state_69978__$1;
(statearr_70134_74132[(2)] = true);

(statearr_70134_74132[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (31))){
var inst_69893 = (state_69978[(15)]);
var state_69978__$1 = state_69978;
var statearr_70135_74133 = state_69978__$1;
(statearr_70135_74133[(2)] = inst_69893);

(statearr_70135_74133[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (32))){
var inst_69901 = (state_69978[(2)]);
var state_69978__$1 = state_69978;
var statearr_70136_74135 = state_69978__$1;
(statearr_70136_74135[(2)] = inst_69901);

(statearr_70136_74135[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (40))){
var inst_69885 = (state_69978[(8)]);
var inst_69932 = (state_69978[(19)]);
var inst_69850 = (state_69978[(9)]);
var inst_69886 = (state_69978[(10)]);
var inst_69823 = (state_69978[(11)]);
var inst_69852 = (state_69978[(12)]);
var inst_69914 = (state_69978[(20)]);
var inst_69884 = (state_69978[(13)]);
var inst_69883 = (state_69978[(14)]);
var inst_69887 = (state_69978[(16)]);
var inst_69915 = (state_69978[(21)]);
var inst_69851 = (state_69978[(17)]);
var inst_69928 = (state_69978[(2)]);
var inst_69929 = (function (){var input = inst_69886;
var response = inst_69915;
var cache_QMARK_ = inst_69884;
var temp__5718__auto__ = inst_69823;
var map__69825 = inst_69850;
var batch_QMARK_ = inst_69885;
var env__$1 = inst_69887;
var e = inst_69851;
var s = inst_69852;
var resolver = inst_69883;
var env_SINGLEQUOTE_ = inst_69914;
var map__69857 = inst_69883;
return ((function (input,response,cache_QMARK_,temp__5718__auto__,map__69825,batch_QMARK_,env__$1,e,s,resolver,env_SINGLEQUOTE_,map__69857,inst_69885,inst_69932,inst_69850,inst_69886,inst_69823,inst_69852,inst_69914,inst_69884,inst_69883,inst_69887,inst_69915,inst_69851,inst_69928,state_val_69979,c__45808__auto__,k,p,map__69814,map__69814__$1,env,indexes,processing_sequence){
return (function (p1__69809_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__69809_SHARP_], 0));
});
;})(input,response,cache_QMARK_,temp__5718__auto__,map__69825,batch_QMARK_,env__$1,e,s,resolver,env_SINGLEQUOTE_,map__69857,inst_69885,inst_69932,inst_69850,inst_69886,inst_69823,inst_69852,inst_69914,inst_69884,inst_69883,inst_69887,inst_69915,inst_69851,inst_69928,state_val_69979,c__45808__auto__,k,p,map__69814,map__69814__$1,env,indexes,processing_sequence))
})();
var inst_69930 = com.wsscode.pathom.core.swap_entity_BANG_(inst_69914,inst_69929);
var inst_69932__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69915,k);
var inst_69933 = cljs.core.sequential_QMARK_(inst_69932__$1);
var state_69978__$1 = (function (){var statearr_70137 = state_69978;
(statearr_70137[(22)] = inst_69930);

(statearr_70137[(19)] = inst_69932__$1);

(statearr_70137[(23)] = inst_69928);

return statearr_70137;
})();
if(inst_69933){
var statearr_70138_74140 = state_69978__$1;
(statearr_70138_74140[(1)] = (41));

} else {
var statearr_70139_74141 = state_69978__$1;
(statearr_70139_74141[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (56))){
var inst_69967 = (state_69978[(2)]);
var state_69978__$1 = state_69978;
var statearr_70140_74143 = state_69978__$1;
(statearr_70140_74143[(2)] = inst_69967);

(statearr_70140_74143[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (33))){
var inst_69897 = (state_69978[(2)]);
var inst_69898 = com.wsscode.common.async_cljs.throw_err(inst_69897);
var state_69978__$1 = state_69978;
var statearr_70141_74144 = state_69978__$1;
(statearr_70141_74144[(2)] = inst_69898);

(statearr_70141_74144[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (13))){
var state_69978__$1 = state_69978;
var statearr_70142_74145 = state_69978__$1;
(statearr_70142_74145[(2)] = false);

(statearr_70142_74145[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (22))){
var state_69978__$1 = state_69978;
var statearr_70143_74146 = state_69978__$1;
(statearr_70143_74146[(2)] = false);

(statearr_70143_74146[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (36))){
var inst_69911 = (state_69978[(2)]);
var state_69978__$1 = state_69978;
var statearr_70144_74147 = state_69978__$1;
(statearr_70144_74147[(2)] = inst_69911);

(statearr_70144_74147[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (41))){
var inst_69932 = (state_69978[(19)]);
var inst_69914 = (state_69978[(20)]);
var inst_69936 = (state_69978[(24)]);
var inst_69935 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.atom,inst_69932);
var inst_69936__$1 = com.wsscode.pathom.core.join_seq(inst_69914,inst_69935);
var inst_69937 = com.wsscode.common.async_cljs.chan_QMARK_(inst_69936__$1);
var state_69978__$1 = (function (){var statearr_70145 = state_69978;
(statearr_70145[(24)] = inst_69936__$1);

return statearr_70145;
})();
if(inst_69937){
var statearr_70146_74148 = state_69978__$1;
(statearr_70146_74148[(1)] = (44));

} else {
var statearr_70147_74151 = state_69978__$1;
(statearr_70147_74151[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (43))){
var inst_69971 = (state_69978[(2)]);
var state_69978__$1 = state_69978;
var statearr_70148_74154 = state_69978__$1;
(statearr_70148_74154[(2)] = inst_69971);

(statearr_70148_74154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (29))){
var inst_69887 = (state_69978[(16)]);
var inst_69915 = (state_69978[(21)]);
var inst_69913 = (state_69978[(2)]);
var inst_69914 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_69913,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),inst_69887);
var inst_69915__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_69913,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_69916 = (inst_69915__$1 == null);
var inst_69917 = cljs.core.map_QMARK_(inst_69915__$1);
var inst_69918 = ((inst_69916) || (inst_69917));
var inst_69919 = cljs.core.not(inst_69918);
var state_69978__$1 = (function (){var statearr_70149 = state_69978;
(statearr_70149[(20)] = inst_69914);

(statearr_70149[(21)] = inst_69915__$1);

return statearr_70149;
})();
if(inst_69919){
var statearr_70150_74155 = state_69978__$1;
(statearr_70150_74155[(1)] = (38));

} else {
var statearr_70151_74158 = state_69978__$1;
(statearr_70151_74158[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (44))){
var inst_69936 = (state_69978[(24)]);
var state_69978__$1 = state_69978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69978__$1,(47),inst_69936);
} else {
if((state_val_69979 === (6))){
var inst_69823 = (state_69978[(11)]);
var inst_69827 = (inst_69823 == null);
var inst_69828 = cljs.core.not(inst_69827);
var state_69978__$1 = state_69978;
if(inst_69828){
var statearr_70152_74159 = state_69978__$1;
(statearr_70152_74159[(1)] = (9));

} else {
var statearr_70153_74160 = state_69978__$1;
(statearr_70153_74160[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (28))){
var inst_69903 = (state_69978[(25)]);
var inst_69887 = (state_69978[(16)]);
var inst_69851 = (state_69978[(17)]);
var inst_69903__$1 = com.wsscode.pathom.connect.call_resolver(inst_69887,inst_69851);
var inst_69904 = com.wsscode.common.async_cljs.chan_QMARK_(inst_69903__$1);
var state_69978__$1 = (function (){var statearr_70154 = state_69978;
(statearr_70154[(25)] = inst_69903__$1);

return statearr_70154;
})();
if(inst_69904){
var statearr_70155_74163 = state_69978__$1;
(statearr_70155_74163[(1)] = (34));

} else {
var statearr_70156_74164 = state_69978__$1;
(statearr_70156_74164[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (51))){
var inst_69932 = (state_69978[(19)]);
var state_69978__$1 = state_69978;
var statearr_70157_74165 = state_69978__$1;
(statearr_70157_74165[(2)] = inst_69932);

(statearr_70157_74165[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (25))){
var inst_69858 = (state_69978[(18)]);
var state_69978__$1 = state_69978;
var statearr_70158_74166 = state_69978__$1;
(statearr_70158_74166[(2)] = inst_69858);

(statearr_70158_74166[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (34))){
var inst_69903 = (state_69978[(25)]);
var state_69978__$1 = state_69978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69978__$1,(37),inst_69903);
} else {
if((state_val_69979 === (17))){
var inst_69850 = (state_69978[(9)]);
var inst_69858 = (state_69978[(18)]);
var inst_69852 = (state_69978[(12)]);
var inst_69850__$1 = (state_69978[(2)]);
var inst_69851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69850__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var inst_69852__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69850__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var inst_69858__$1 = com.wsscode.pathom.connect.resolver_data(env,inst_69852__$1);
var inst_69860 = (inst_69858__$1 == null);
var inst_69861 = cljs.core.not(inst_69860);
var state_69978__$1 = (function (){var statearr_70159 = state_69978;
(statearr_70159[(9)] = inst_69850__$1);

(statearr_70159[(18)] = inst_69858__$1);

(statearr_70159[(12)] = inst_69852__$1);

(statearr_70159[(17)] = inst_69851);

return statearr_70159;
})();
if(inst_69861){
var statearr_70160_74168 = state_69978__$1;
(statearr_70160_74168[(1)] = (18));

} else {
var statearr_70161_74173 = state_69978__$1;
(statearr_70161_74173[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (3))){
var inst_69816 = (state_69978[(2)]);
var state_69978__$1 = state_69978;
var statearr_70162_74175 = state_69978__$1;
(statearr_70162_74175[(2)] = inst_69816);


cljs.core.async.impl.ioc_helpers.process_exception(state_69978__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (12))){
var state_69978__$1 = state_69978;
var statearr_70163_74176 = state_69978__$1;
(statearr_70163_74176[(2)] = true);

(statearr_70163_74176[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (2))){
var inst_69976 = (state_69978[(2)]);
var state_69978__$1 = state_69978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69978__$1,inst_69976);
} else {
if((state_val_69979 === (23))){
var inst_69875 = (state_69978[(2)]);
var state_69978__$1 = state_69978;
var statearr_70164_74180 = state_69978__$1;
(statearr_70164_74180[(2)] = inst_69875);

(statearr_70164_74180[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (47))){
var inst_69940 = (state_69978[(2)]);
var inst_69941 = com.wsscode.common.async_cljs.throw_err(inst_69940);
var state_69978__$1 = state_69978;
var statearr_70165_74190 = state_69978__$1;
(statearr_70165_74190[(2)] = inst_69941);

(statearr_70165_74190[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (35))){
var inst_69903 = (state_69978[(25)]);
var state_69978__$1 = state_69978;
var statearr_70166_74191 = state_69978__$1;
(statearr_70166_74191[(2)] = inst_69903);

(statearr_70166_74191[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (19))){
var state_69978__$1 = state_69978;
var statearr_70167_74193 = state_69978__$1;
(statearr_70167_74193[(2)] = false);

(statearr_70167_74193[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (57))){
var inst_69956 = (state_69978[(7)]);
var state_69978__$1 = state_69978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69978__$1,(60),inst_69956);
} else {
if((state_val_69979 === (11))){
var inst_69845 = (state_69978[(2)]);
var state_69978__$1 = state_69978;
if(cljs.core.truth_(inst_69845)){
var statearr_70168_74195 = state_69978__$1;
(statearr_70168_74195[(1)] = (15));

} else {
var statearr_70169_74196 = state_69978__$1;
(statearr_70169_74196[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (9))){
var inst_69823 = (state_69978[(11)]);
var inst_69834 = inst_69823.cljs$lang$protocol_mask$partition0$;
var inst_69835 = (inst_69834 & (64));
var inst_69836 = inst_69823.cljs$core$ISeq$;
var inst_69837 = (cljs.core.PROTOCOL_SENTINEL === inst_69836);
var inst_69838 = ((inst_69835) || (inst_69837));
var state_69978__$1 = state_69978;
if(cljs.core.truth_(inst_69838)){
var statearr_70170_74201 = state_69978__$1;
(statearr_70170_74201[(1)] = (12));

} else {
var statearr_70171_74208 = state_69978__$1;
(statearr_70171_74208[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (5))){
var inst_69823 = (state_69978[(11)]);
var inst_69822 = (state_69978[(2)]);
var inst_69823__$1 = com.wsscode.common.async_cljs.throw_err(inst_69822);
var state_69978__$1 = (function (){var statearr_70172 = state_69978;
(statearr_70172[(11)] = inst_69823__$1);

return statearr_70172;
})();
if(cljs.core.truth_(inst_69823__$1)){
var statearr_70173_74210 = state_69978__$1;
(statearr_70173_74210[(1)] = (6));

} else {
var statearr_70174_74212 = state_69978__$1;
(statearr_70174_74212[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (14))){
var inst_69842 = (state_69978[(2)]);
var state_69978__$1 = state_69978;
var statearr_70175_74219 = state_69978__$1;
(statearr_70175_74219[(2)] = inst_69842);

(statearr_70175_74219[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (45))){
var inst_69936 = (state_69978[(24)]);
var state_69978__$1 = state_69978;
var statearr_70176_74224 = state_69978__$1;
(statearr_70176_74224[(2)] = inst_69936);

(statearr_70176_74224[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (53))){
var inst_69952 = (state_69978[(2)]);
var state_69978__$1 = state_69978;
var statearr_70177_74230 = state_69978__$1;
(statearr_70177_74230[(2)] = inst_69952);

(statearr_70177_74230[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (26))){
var inst_69884 = (state_69978[(13)]);
var inst_69883 = (state_69978[(14)]);
var inst_69883__$1 = (state_69978[(2)]);
var inst_69884__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_69883__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_69885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69883__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_69886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69883__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_69887 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_69883__$1);
var state_69978__$1 = (function (){var statearr_70178 = state_69978;
(statearr_70178[(8)] = inst_69885);

(statearr_70178[(10)] = inst_69886);

(statearr_70178[(13)] = inst_69884__$1);

(statearr_70178[(14)] = inst_69883__$1);

(statearr_70178[(16)] = inst_69887);

return statearr_70178;
})();
if(cljs.core.truth_(inst_69884__$1)){
var statearr_70179_74234 = state_69978__$1;
(statearr_70179_74234[(1)] = (27));

} else {
var statearr_70180_74235 = state_69978__$1;
(statearr_70180_74235[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (16))){
var inst_69823 = (state_69978[(11)]);
var state_69978__$1 = state_69978;
var statearr_70181_74239 = state_69978__$1;
(statearr_70181_74239[(2)] = inst_69823);

(statearr_70181_74239[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (38))){
var inst_69852 = (state_69978[(12)]);
var inst_69915 = (state_69978[(21)]);
var inst_69921 = [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"response","response",-1068424192)];
var inst_69922 = [inst_69852,inst_69915];
var inst_69923 = cljs.core.PersistentHashMap.fromArrays(inst_69921,inst_69922);
var inst_69924 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Response from reader must be a map.",inst_69923);
var inst_69925 = (function(){throw inst_69924})();
var state_69978__$1 = state_69978;
var statearr_70182_74241 = state_69978__$1;
(statearr_70182_74241[(2)] = inst_69925);

(statearr_70182_74241[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (30))){
var inst_69893 = (state_69978[(15)]);
var state_69978__$1 = state_69978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69978__$1,(33),inst_69893);
} else {
if((state_val_69979 === (10))){
var state_69978__$1 = state_69978;
var statearr_70183_74251 = state_69978__$1;
(statearr_70183_74251[(2)] = false);

(statearr_70183_74251[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (18))){
var inst_69858 = (state_69978[(18)]);
var inst_69863 = inst_69858.cljs$lang$protocol_mask$partition0$;
var inst_69864 = (inst_69863 & (64));
var inst_69865 = inst_69858.cljs$core$ISeq$;
var inst_69870 = (cljs.core.PROTOCOL_SENTINEL === inst_69865);
var inst_69871 = ((inst_69864) || (inst_69870));
var state_69978__$1 = state_69978;
if(cljs.core.truth_(inst_69871)){
var statearr_70184_74252 = state_69978__$1;
(statearr_70184_74252[(1)] = (21));

} else {
var statearr_70185_74253 = state_69978__$1;
(statearr_70185_74253[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (52))){
var state_69978__$1 = state_69978;
var statearr_70186_74254 = state_69978__$1;
(statearr_70186_74254[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));

(statearr_70186_74254[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (42))){
var inst_69932 = (state_69978[(19)]);
var inst_69946 = (inst_69932 == null);
var state_69978__$1 = state_69978;
if(cljs.core.truth_(inst_69946)){
var statearr_70187_74258 = state_69978__$1;
(statearr_70187_74258[(1)] = (48));

} else {
var statearr_70188_74259 = state_69978__$1;
(statearr_70188_74259[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (37))){
var inst_69907 = (state_69978[(2)]);
var inst_69908 = com.wsscode.common.async_cljs.throw_err(inst_69907);
var state_69978__$1 = state_69978;
var statearr_70189_74265 = state_69978__$1;
(statearr_70189_74265[(2)] = inst_69908);

(statearr_70189_74265[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (8))){
var inst_69974 = (state_69978[(2)]);
var state_69978__$1 = state_69978;
var statearr_70190_74270 = state_69978__$1;
(statearr_70190_74270[(2)] = inst_69974);


cljs.core.async.impl.ioc_helpers.process_exception(state_69978__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69979 === (49))){
var state_69978__$1 = state_69978;
var statearr_70191_74271 = state_69978__$1;
(statearr_70191_74271[(1)] = (54));



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
});})(c__45808__auto__,k,p,map__69814,map__69814__$1,env,indexes,processing_sequence))
;
return ((function (switch__45525__auto__,c__45808__auto__,k,p,map__69814,map__69814__$1,env,indexes,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_reader_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$connect$async_reader_$_state_machine__45526__auto____0 = (function (){
var statearr_70193 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70193[(0)] = com$wsscode$pathom$connect$async_reader_$_state_machine__45526__auto__);

(statearr_70193[(1)] = (1));

return statearr_70193;
});
var com$wsscode$pathom$connect$async_reader_$_state_machine__45526__auto____1 = (function (state_69978){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_69978);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e70194){if((e70194 instanceof Object)){
var ex__45529__auto__ = e70194;
var statearr_70195_74276 = state_69978;
(statearr_70195_74276[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70194;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74280 = state_69978;
state_69978 = G__74280;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader_$_state_machine__45526__auto__ = function(state_69978){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader_$_state_machine__45526__auto____1.call(this,state_69978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader_$_state_machine__45526__auto____0;
com$wsscode$pathom$connect$async_reader_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader_$_state_machine__45526__auto____1;
return com$wsscode$pathom$connect$async_reader_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,k,p,map__69814,map__69814__$1,env,indexes,processing_sequence))
})();
var state__45810__auto__ = (function (){var statearr_70196 = f__45809__auto__();
(statearr_70196[(6)] = c__45808__auto__);

return statearr_70196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,k,p,map__69814,map__69814__$1,env,indexes,processing_sequence))
);

return c__45808__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.async_read_cache_read = (function com$wsscode$pathom$connect$async_read_cache_read(env,resolver_sym,e,batch_QMARK_,processing_sequence,trace_data,input){
var params = com.wsscode.pathom.core.params(env);
return com.wsscode.pathom.core.cached_async(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,e,params], null),((function (params){
return (function (){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,params){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,params){
return (function (state_70294){
var state_val_70295 = (state_70294[(1)]);
if((state_val_70295 === (7))){
var inst_70206 = (state_70294[(2)]);
var state_70294__$1 = state_70294;
if(cljs.core.truth_(inst_70206)){
var statearr_70296_74298 = state_70294__$1;
(statearr_70296_74298[(1)] = (8));

} else {
var statearr_70297_74300 = state_70294__$1;
(statearr_70297_74300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70295 === (20))){
var inst_70260 = (state_70294[(7)]);
var state_70294__$1 = state_70294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70294__$1,(23),inst_70260);
} else {
if((state_val_70295 === (27))){
var inst_70284 = (state_70294[(2)]);
var inst_70285 = com.wsscode.common.async_cljs.throw_err(inst_70284);
var state_70294__$1 = state_70294;
var statearr_70298_74304 = state_70294__$1;
(statearr_70298_74304[(2)] = inst_70285);

(statearr_70298_74304[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70295 === (1))){
var state_70294__$1 = state_70294;
var statearr_70299_74306 = state_70294__$1;
(statearr_70299_74306[(2)] = null);

(statearr_70299_74306[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70295 === (24))){
var inst_70280 = (state_70294[(8)]);
var state_70294__$1 = state_70294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70294__$1,(27),inst_70280);
} else {
if((state_val_70295 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_70294,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_70294__$1 = state_70294;
if(cljs.core.truth_(batch_QMARK_)){
var statearr_70300_74310 = state_70294__$1;
(statearr_70300_74310[(1)] = (5));

} else {
var statearr_70301_74311 = state_70294__$1;
(statearr_70301_74311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70295 === (15))){
var inst_70226 = (state_70294[(9)]);
var state_70294__$1 = state_70294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70294__$1,(18),inst_70226);
} else {
if((state_val_70295 === (21))){
var inst_70260 = (state_70294[(7)]);
var state_70294__$1 = state_70294;
var statearr_70302_74312 = state_70294__$1;
(statearr_70302_74312[(2)] = inst_70260);

(statearr_70302_74312[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70295 === (13))){
var inst_70278 = (state_70294[(2)]);
var state_70294__$1 = state_70294;
var statearr_70303_74318 = state_70294__$1;
(statearr_70303_74318[(2)] = inst_70278);

(statearr_70303_74318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70295 === (22))){
var inst_70255 = (state_70294[(10)]);
var inst_70268 = (state_70294[(2)]);
var inst_70269 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_70270 = cljs.core.count(inst_70268);
var inst_70271 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_70270];
var inst_70272 = cljs.core.PersistentHashMap.fromArrays(inst_70269,inst_70271);
var inst_70273 = com.wsscode.pathom.trace.trace(env,inst_70272);
var inst_70274 = cljs.core.zipmap(inst_70255,inst_70268);
var inst_70275 = com.wsscode.pathom.connect.cache_batch(env,resolver_sym,inst_70274);
var inst_70276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70274,e);
var state_70294__$1 = (function (){var statearr_70304 = state_70294;
(statearr_70304[(11)] = inst_70273);

(statearr_70304[(12)] = inst_70275);

return statearr_70304;
})();
var statearr_70305_74328 = state_70294__$1;
(statearr_70305_74328[(2)] = inst_70276);

(statearr_70305_74328[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70295 === (6))){
var state_70294__$1 = state_70294;
var statearr_70306_74337 = state_70294__$1;
(statearr_70306_74337[(2)] = batch_QMARK_);

(statearr_70306_74337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70295 === (25))){
var inst_70280 = (state_70294[(8)]);
var state_70294__$1 = state_70294;
var statearr_70307_74338 = state_70294__$1;
(statearr_70307_74338[(2)] = inst_70280);

(statearr_70307_74338[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70295 === (17))){
var inst_70211 = (state_70294[(13)]);
var inst_70221 = (state_70294[(14)]);
var inst_70234 = (state_70294[(2)]);
var inst_70235 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_70236 = cljs.core.count(inst_70234);
var inst_70237 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_70236];
var inst_70238 = cljs.core.PersistentHashMap.fromArrays(inst_70235,inst_70237);
var inst_70239 = com.wsscode.pathom.trace.trace(env,inst_70238);
var inst_70240 = cljs.core.zipmap(inst_70221,inst_70234);
var inst_70241 = com.wsscode.pathom.connect.cache_batch(env,resolver_sym,inst_70240);
var inst_70242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70240,e);
var inst_70243 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_70244 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_70211,inst_70243);
var state_70294__$1 = (function (){var statearr_70308 = state_70294;
(statearr_70308[(15)] = inst_70241);

(statearr_70308[(16)] = inst_70244);

(statearr_70308[(17)] = inst_70239);

return statearr_70308;
})();
var statearr_70309_74342 = state_70294__$1;
(statearr_70309_74342[(2)] = inst_70242);

(statearr_70309_74342[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70295 === (3))){
var inst_70199 = (state_70294[(2)]);
var state_70294__$1 = state_70294;
var statearr_70310_74348 = state_70294__$1;
(statearr_70310_74348[(2)] = inst_70199);


cljs.core.async.impl.ioc_helpers.process_exception(state_70294__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70295 === (12))){
var inst_70246 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_70247 = com.wsscode.pathom.trace.trace(env,inst_70246);
var inst_70248 = (function (){var _ = inst_70247;
return ((function (_,inst_70246,inst_70247,state_val_70295,c__45808__auto__,params){
return (function (p1__70198_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__70198_SHARP_,input);
});
;})(_,inst_70246,inst_70247,state_val_70295,c__45808__auto__,params))
})();
var inst_70249 = (function (){var _ = inst_70247;
return ((function (_,inst_70246,inst_70247,inst_70248,state_val_70295,c__45808__auto__,params){
return (function (p1__70197_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__70197_SHARP_,input);
});
;})(_,inst_70246,inst_70247,inst_70248,state_val_70295,c__45808__auto__,params))
})();
var inst_70250 = com.wsscode.pathom.connect.map_async_serial(inst_70249,processing_sequence);
var state_70294__$1 = (function (){var statearr_70311 = state_70294;
(statearr_70311[(18)] = inst_70248);

return statearr_70311;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70294__$1,(19),inst_70250);
} else {
if((state_val_70295 === (2))){
var inst_70292 = (state_70294[(2)]);
var state_70294__$1 = state_70294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70294__$1,inst_70292);
} else {
if((state_val_70295 === (23))){
var inst_70264 = (state_70294[(2)]);
var inst_70265 = com.wsscode.common.async_cljs.throw_err(inst_70264);
var state_70294__$1 = state_70294;
var statearr_70312_74356 = state_70294__$1;
(statearr_70312_74356[(2)] = inst_70265);

(statearr_70312_74356[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70295 === (19))){
var inst_70255 = (state_70294[(10)]);
var inst_70260 = (state_70294[(7)]);
var inst_70248 = (state_70294[(18)]);
var inst_70252 = (state_70294[(2)]);
var inst_70253 = com.wsscode.common.async_cljs.throw_err(inst_70252);
var inst_70254 = cljs.core.filterv(inst_70248,inst_70253);
var inst_70255__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_70254);
var inst_70256 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_70257 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_70255__$1];
var inst_70258 = cljs.core.PersistentHashMap.fromArrays(inst_70256,inst_70257);
var inst_70259 = com.wsscode.pathom.trace.trace(env,inst_70258);
var inst_70260__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_70255__$1);
var inst_70261 = com.wsscode.common.async_cljs.chan_QMARK_(inst_70260__$1);
var state_70294__$1 = (function (){var statearr_70313 = state_70294;
(statearr_70313[(19)] = inst_70259);

(statearr_70313[(10)] = inst_70255__$1);

(statearr_70313[(7)] = inst_70260__$1);

return statearr_70313;
})();
if(inst_70261){
var statearr_70314_74365 = state_70294__$1;
(statearr_70314_74365[(1)] = (20));

} else {
var statearr_70315_74367 = state_70294__$1;
(statearr_70315_74367[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70295 === (11))){
var inst_70211 = (state_70294[(13)]);
var inst_70210 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_70211__$1 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_70210);
var inst_70212 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_70213 = com.wsscode.pathom.trace.trace(env,inst_70212);
var inst_70214 = (function (){var trace_id__22799__auto__ = inst_70211__$1;
var _ = inst_70213;
return ((function (trace_id__22799__auto__,_,inst_70211,inst_70210,inst_70211__$1,inst_70212,inst_70213,state_val_70295,c__45808__auto__,params){
return (function (p1__70198_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__70198_SHARP_,input);
});
;})(trace_id__22799__auto__,_,inst_70211,inst_70210,inst_70211__$1,inst_70212,inst_70213,state_val_70295,c__45808__auto__,params))
})();
var inst_70215 = (function (){var trace_id__22799__auto__ = inst_70211__$1;
var _ = inst_70213;
return ((function (trace_id__22799__auto__,_,inst_70211,inst_70210,inst_70211__$1,inst_70212,inst_70213,inst_70214,state_val_70295,c__45808__auto__,params){
return (function (p1__70197_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__70197_SHARP_,input);
});
;})(trace_id__22799__auto__,_,inst_70211,inst_70210,inst_70211__$1,inst_70212,inst_70213,inst_70214,state_val_70295,c__45808__auto__,params))
})();
var inst_70216 = com.wsscode.pathom.connect.map_async_serial(inst_70215,processing_sequence);
var state_70294__$1 = (function (){var statearr_70316 = state_70294;
(statearr_70316[(13)] = inst_70211__$1);

(statearr_70316[(20)] = inst_70214);

return statearr_70316;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70294__$1,(14),inst_70216);
} else {
if((state_val_70295 === (9))){
var inst_70280 = (state_70294[(8)]);
var inst_70280__$1 = com.wsscode.pathom.connect.call_resolver(env,e);
var inst_70281 = com.wsscode.common.async_cljs.chan_QMARK_(inst_70280__$1);
var state_70294__$1 = (function (){var statearr_70317 = state_70294;
(statearr_70317[(8)] = inst_70280__$1);

return statearr_70317;
})();
if(inst_70281){
var statearr_70318_74370 = state_70294__$1;
(statearr_70318_74370[(1)] = (24));

} else {
var statearr_70319_74371 = state_70294__$1;
(statearr_70319_74371[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70295 === (5))){
var state_70294__$1 = state_70294;
var statearr_70320_74375 = state_70294__$1;
(statearr_70320_74375[(2)] = processing_sequence);

(statearr_70320_74375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70295 === (14))){
var inst_70226 = (state_70294[(9)]);
var inst_70214 = (state_70294[(20)]);
var inst_70221 = (state_70294[(14)]);
var inst_70218 = (state_70294[(2)]);
var inst_70219 = com.wsscode.common.async_cljs.throw_err(inst_70218);
var inst_70220 = cljs.core.filterv(inst_70214,inst_70219);
var inst_70221__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_70220);
var inst_70222 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_70223 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_70221__$1];
var inst_70224 = cljs.core.PersistentHashMap.fromArrays(inst_70222,inst_70223);
var inst_70225 = com.wsscode.pathom.trace.trace(env,inst_70224);
var inst_70226__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_70221__$1);
var inst_70227 = com.wsscode.common.async_cljs.chan_QMARK_(inst_70226__$1);
var state_70294__$1 = (function (){var statearr_70321 = state_70294;
(statearr_70321[(9)] = inst_70226__$1);

(statearr_70321[(14)] = inst_70221__$1);

(statearr_70321[(21)] = inst_70225);

return statearr_70321;
})();
if(inst_70227){
var statearr_70322_74376 = state_70294__$1;
(statearr_70322_74376[(1)] = (15));

} else {
var statearr_70323_74377 = state_70294__$1;
(statearr_70323_74377[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70295 === (26))){
var inst_70288 = (state_70294[(2)]);
var state_70294__$1 = state_70294;
var statearr_70324_74380 = state_70294__$1;
(statearr_70324_74380[(2)] = inst_70288);

(statearr_70324_74380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70295 === (16))){
var inst_70226 = (state_70294[(9)]);
var state_70294__$1 = state_70294;
var statearr_70325_74383 = state_70294__$1;
(statearr_70325_74383[(2)] = inst_70226);

(statearr_70325_74383[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70295 === (10))){
var inst_70290 = (state_70294[(2)]);
var state_70294__$1 = state_70294;
var statearr_70326_74384 = state_70294__$1;
(statearr_70326_74384[(2)] = inst_70290);


cljs.core.async.impl.ioc_helpers.process_exception(state_70294__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70295 === (18))){
var inst_70230 = (state_70294[(2)]);
var inst_70231 = com.wsscode.common.async_cljs.throw_err(inst_70230);
var state_70294__$1 = state_70294;
var statearr_70327_74385 = state_70294__$1;
(statearr_70327_74385[(2)] = inst_70231);

(statearr_70327_74385[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70295 === (8))){
var inst_70208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_70294__$1 = state_70294;
if(cljs.core.truth_(inst_70208)){
var statearr_70328_74387 = state_70294__$1;
(statearr_70328_74387[(1)] = (11));

} else {
var statearr_70329_74388 = state_70294__$1;
(statearr_70329_74388[(1)] = (12));

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
});})(c__45808__auto__,params))
;
return ((function (switch__45525__auto__,c__45808__auto__,params){
return (function() {
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__45526__auto____0 = (function (){
var statearr_70330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70330[(0)] = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__45526__auto__);

(statearr_70330[(1)] = (1));

return statearr_70330;
});
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__45526__auto____1 = (function (state_70294){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_70294);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e70331){if((e70331 instanceof Object)){
var ex__45529__auto__ = e70331;
var statearr_70332_74391 = state_70294;
(statearr_70332_74391[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_70294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70331;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74394 = state_70294;
state_70294 = G__74394;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__45526__auto__ = function(state_70294){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__45526__auto____1.call(this,state_70294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__45526__auto____0;
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__45526__auto____1;
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,params))
})();
var state__45810__auto__ = (function (){var statearr_70333 = f__45809__auto__();
(statearr_70333[(6)] = c__45808__auto__);

return statearr_70333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,params))
);

return c__45808__auto__;
});})(params))
);
});
/**
 * Works in the same way `reader2`, but supports async values (core.async channels)
 * on resolver return.
 */
com.wsscode.pathom.connect.async_reader2 = (function com$wsscode$pathom$connect$async_reader2(p__70336){
var map__70337 = p__70336;
var map__70337__$1 = (((((!((map__70337 == null))))?(((((map__70337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70337):map__70337);
var env = map__70337__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70337__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70337__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70337__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var temp__5718__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__70339 = temp__5718__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70339,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70339,(1),null);
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,vec__70339,plan,out,temp__5718__auto__,map__70337,map__70337__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,vec__70339,plan,out,temp__5718__auto__,map__70337,map__70337__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (state_70564){
var state_val_70565 = (state_70564[(1)]);
if((state_val_70565 === (65))){
var inst_70530 = (state_70564[(7)]);
var inst_70535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70530,(0),null);
var inst_70536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70530,(1),null);
var inst_70537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70530,(2),null);
var inst_70359 = inst_70535;
var inst_70360 = inst_70536;
var inst_70361 = inst_70537;
var state_70564__$1 = (function (){var statearr_70566 = state_70564;
(statearr_70566[(8)] = inst_70361);

(statearr_70566[(9)] = inst_70360);

(statearr_70566[(10)] = inst_70359);

return statearr_70566;
})();
var statearr_70567_74403 = state_70564__$1;
(statearr_70567_74403[(2)] = null);

(statearr_70567_74403[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (62))){
var inst_70451 = (state_70564[(11)]);
var inst_70530 = (state_70564[(7)]);
var inst_70450 = (state_70564[(12)]);
var inst_70526 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_70527 = [inst_70450];
var inst_70528 = cljs.core.PersistentHashMap.fromArrays(inst_70526,inst_70527);
var inst_70529 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_70528);
var inst_70530__$1 = (inst_70451.cljs$core$IFn$_invoke$arity$1 ? inst_70451.cljs$core$IFn$_invoke$arity$1(inst_70529) : inst_70451.call(null,inst_70529));
var state_70564__$1 = (function (){var statearr_70568 = state_70564;
(statearr_70568[(7)] = inst_70530__$1);

return statearr_70568;
})();
if(cljs.core.truth_(inst_70530__$1)){
var statearr_70569_74410 = state_70564__$1;
(statearr_70569_74410[(1)] = (65));

} else {
var statearr_70570_74411 = state_70564__$1;
(statearr_70570_74411[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (7))){
var inst_70375 = (state_70564[(13)]);
var inst_70379 = (state_70564[(14)]);
var inst_70367 = (state_70564[(15)]);
var inst_70374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70367,(0),null);
var inst_70375__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70367,(1),null);
var inst_70376 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70377 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),inst_70375__$1];
var inst_70378 = (new cljs.core.PersistentVector(null,2,(5),inst_70376,inst_70377,null));
var inst_70379__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_70378);
var inst_70381 = (inst_70379__$1 == null);
var inst_70382 = cljs.core.not(inst_70381);
var state_70564__$1 = (function (){var statearr_70571 = state_70564;
(statearr_70571[(13)] = inst_70375__$1);

(statearr_70571[(16)] = inst_70374);

(statearr_70571[(14)] = inst_70379__$1);

return statearr_70571;
})();
if(inst_70382){
var statearr_70572_74415 = state_70564__$1;
(statearr_70572_74415[(1)] = (10));

} else {
var statearr_70573_74416 = state_70564__$1;
(statearr_70573_74416[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (59))){
var inst_70511 = (state_70564[(17)]);
var state_70564__$1 = state_70564;
var statearr_70574_74421 = state_70564__$1;
(statearr_70574_74421[(2)] = inst_70511);

(statearr_70574_74421[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (20))){
var inst_70401 = (state_70564[(18)]);
var state_70564__$1 = state_70564;
if(cljs.core.truth_(inst_70401)){
var statearr_70575_74426 = state_70564__$1;
(statearr_70575_74426[(1)] = (22));

} else {
var statearr_70576_74429 = state_70564__$1;
(statearr_70576_74429[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (58))){
var inst_70511 = (state_70564[(17)]);
var state_70564__$1 = state_70564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70564__$1,(61),inst_70511);
} else {
if((state_val_70565 === (60))){
var inst_70519 = (state_70564[(2)]);
var state_70564__$1 = state_70564;
var statearr_70577_74435 = state_70564__$1;
(statearr_70577_74435[(2)] = inst_70519);

(statearr_70577_74435[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (27))){
var inst_70427 = (state_70564[(2)]);
var state_70564__$1 = state_70564;
var statearr_70578_74436 = state_70564__$1;
(statearr_70578_74436[(2)] = inst_70427);

(statearr_70578_74436[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (1))){
var state_70564__$1 = state_70564;
var statearr_70579_74437 = state_70564__$1;
(statearr_70579_74437[(2)] = null);

(statearr_70579_74437[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (24))){
var inst_70443 = (state_70564[(2)]);
var state_70564__$1 = state_70564;
var statearr_70580_74438 = state_70564__$1;
(statearr_70580_74438[(2)] = inst_70443);

(statearr_70580_74438[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (55))){
var inst_70374 = (state_70564[(16)]);
var inst_70455 = (state_70564[(19)]);
var inst_70503 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_70504 = [inst_70455,inst_70374];
var inst_70505 = cljs.core.PersistentHashMap.fromArrays(inst_70503,inst_70504);
var inst_70506 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_70505);
var inst_70507 = (function(){throw inst_70506})();
var state_70564__$1 = state_70564;
var statearr_70581_74441 = state_70564__$1;
(statearr_70581_74441[(2)] = inst_70507);

(statearr_70581_74441[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (39))){
var inst_70356 = (state_70564[(20)]);
var inst_70357 = (state_70564[(21)]);
var inst_70347 = (state_70564[(22)]);
var inst_70451 = (state_70564[(11)]);
var inst_70361 = (state_70564[(8)]);
var inst_70375 = (state_70564[(13)]);
var inst_70404 = (state_70564[(23)]);
var inst_70360 = (state_70564[(9)]);
var inst_70374 = (state_70564[(16)]);
var inst_70455 = (state_70564[(19)]);
var inst_70401 = (state_70564[(18)]);
var inst_70402 = (state_70564[(24)]);
var inst_70454 = (state_70564[(25)]);
var inst_70359 = (state_70564[(10)]);
var inst_70410 = (state_70564[(26)]);
var inst_70403 = (state_70564[(27)]);
var inst_70400 = (state_70564[(28)]);
var inst_70405 = (state_70564[(29)]);
var inst_70368 = (state_70564[(30)]);
var inst_70367 = (state_70564[(15)]);
var inst_70450 = (state_70564[(12)]);
var inst_70406 = (state_70564[(31)]);
var inst_70407 = (state_70564[(32)]);
var inst_70454__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_70450,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),inst_70405);
var inst_70455__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_70450,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_70456 = (function (){var input = inst_70403;
var seq__70364 = inst_70368;
var step = inst_70367;
var seq__70353 = inst_70357;
var entity = inst_70406;
var key_SINGLEQUOTE_ = inst_70374;
var map__70373 = inst_70400;
var response = inst_70455__$1;
var first__70354 = inst_70356;
var G__70351 = inst_70359;
var cache_QMARK_ = inst_70401;
var out_left = inst_70361;
var vec__70352 = plan;
var key = inst_70347;
var failed_resolvers = inst_70360;
var batch_QMARK_ = inst_70402;
var output = inst_70404;
var env__$1 = inst_70405;
var first__70365 = inst_70367;
var e = inst_70407;
var vec__70363 = inst_70359;
var resolver_sym = inst_70375;
var trace_data = inst_70410;
var resolver = inst_70400;
var replan = inst_70451;
var env_SINGLEQUOTE_ = inst_70454__$1;
var tail = inst_70368;
var vec__70370 = inst_70367;
return ((function (input,seq__70364,step,seq__70353,entity,key_SINGLEQUOTE_,map__70373,response,first__70354,G__70351,cache_QMARK_,out_left,vec__70352,key,failed_resolvers,batch_QMARK_,output,env__$1,first__70365,e,vec__70363,resolver_sym,trace_data,resolver,replan,env_SINGLEQUOTE_,tail,vec__70370,inst_70356,inst_70357,inst_70347,inst_70451,inst_70361,inst_70375,inst_70404,inst_70360,inst_70374,inst_70455,inst_70401,inst_70402,inst_70454,inst_70359,inst_70410,inst_70403,inst_70400,inst_70405,inst_70368,inst_70367,inst_70450,inst_70406,inst_70407,inst_70454__$1,inst_70455__$1,state_val_70565,c__45808__auto__,vec__70339,plan,out,temp__5718__auto__,map__70337,map__70337__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__70335_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__70335_SHARP_], 0));
});
;})(input,seq__70364,step,seq__70353,entity,key_SINGLEQUOTE_,map__70373,response,first__70354,G__70351,cache_QMARK_,out_left,vec__70352,key,failed_resolvers,batch_QMARK_,output,env__$1,first__70365,e,vec__70363,resolver_sym,trace_data,resolver,replan,env_SINGLEQUOTE_,tail,vec__70370,inst_70356,inst_70357,inst_70347,inst_70451,inst_70361,inst_70375,inst_70404,inst_70360,inst_70374,inst_70455,inst_70401,inst_70402,inst_70454,inst_70359,inst_70410,inst_70403,inst_70400,inst_70405,inst_70368,inst_70367,inst_70450,inst_70406,inst_70407,inst_70454__$1,inst_70455__$1,state_val_70565,c__45808__auto__,vec__70339,plan,out,temp__5718__auto__,map__70337,map__70337__$1,env,indexes,max_resolver_weight,processing_sequence))
})();
var inst_70457 = com.wsscode.pathom.core.swap_entity_BANG_(inst_70454__$1,inst_70456);
var inst_70459 = cljs.core.contains_QMARK_(inst_70455__$1,inst_70374);
var inst_70460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70455__$1,inst_70374);
var inst_70461 = (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(inst_70460) : com.wsscode.pathom.core.break_values.call(null,inst_70460));
var inst_70462 = cljs.core.not(inst_70461);
var inst_70463 = ((inst_70459) && (inst_70462));
var state_70564__$1 = (function (){var statearr_70582 = state_70564;
(statearr_70582[(19)] = inst_70455__$1);

(statearr_70582[(25)] = inst_70454__$1);

(statearr_70582[(33)] = inst_70457);

return statearr_70582;
})();
if(cljs.core.truth_(inst_70463)){
var statearr_70583_74453 = state_70564__$1;
(statearr_70583_74453[(1)] = (42));

} else {
var statearr_70584_74455 = state_70564__$1;
(statearr_70584_74455[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (46))){
var inst_70475 = (state_70564[(34)]);
var inst_70455 = (state_70564[(19)]);
var inst_70454 = (state_70564[(25)]);
var inst_70475__$1 = com.wsscode.pathom.connect.process_simple_reader_response(inst_70454,inst_70455);
var inst_70476 = com.wsscode.common.async_cljs.chan_QMARK_(inst_70475__$1);
var state_70564__$1 = (function (){var statearr_70585 = state_70564;
(statearr_70585[(34)] = inst_70475__$1);

return statearr_70585;
})();
if(inst_70476){
var statearr_70586_74462 = state_70564__$1;
(statearr_70586_74462[(1)] = (48));

} else {
var statearr_70587_74463 = state_70564__$1;
(statearr_70587_74463[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_70564,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_70346 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_70347 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_70346);
var inst_70355 = cljs.core.seq(plan);
var inst_70356 = cljs.core.first(inst_70355);
var inst_70357 = cljs.core.next(inst_70355);
var inst_70358 = cljs.core.PersistentHashMap.EMPTY;
var inst_70359 = plan;
var inst_70360 = inst_70358;
var inst_70361 = out;
var state_70564__$1 = (function (){var statearr_70588 = state_70564;
(statearr_70588[(20)] = inst_70356);

(statearr_70588[(21)] = inst_70357);

(statearr_70588[(22)] = inst_70347);

(statearr_70588[(8)] = inst_70361);

(statearr_70588[(9)] = inst_70360);

(statearr_70588[(10)] = inst_70359);

return statearr_70588;
})();
var statearr_70589_74464 = state_70564__$1;
(statearr_70589_74464[(2)] = null);

(statearr_70589_74464[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (54))){
var inst_70521 = (state_70564[(2)]);
var state_70564__$1 = state_70564;
var statearr_70590_74469 = state_70564__$1;
(statearr_70590_74469[(2)] = inst_70521);

(statearr_70590_74469[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (15))){
var inst_70392 = (state_70564[(2)]);
var state_70564__$1 = state_70564;
var statearr_70591_74473 = state_70564__$1;
(statearr_70591_74473[(2)] = inst_70392);

(statearr_70591_74473[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (48))){
var inst_70475 = (state_70564[(34)]);
var state_70564__$1 = state_70564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70564__$1,(51),inst_70475);
} else {
if((state_val_70565 === (50))){
var inst_70483 = (state_70564[(2)]);
var state_70564__$1 = state_70564;
var statearr_70592_74487 = state_70564__$1;
(statearr_70592_74487[(2)] = inst_70483);

(statearr_70592_74487[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (21))){
var inst_70445 = (state_70564[(35)]);
var inst_70445__$1 = (state_70564[(2)]);
var state_70564__$1 = (function (){var statearr_70593 = state_70564;
(statearr_70593[(35)] = inst_70445__$1);

return statearr_70593;
})();
if(cljs.core.truth_(inst_70445__$1)){
var statearr_70594_74493 = state_70564__$1;
(statearr_70594_74493[(1)] = (36));

} else {
var statearr_70595_74498 = state_70564__$1;
(statearr_70595_74498[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (31))){
var inst_70441 = (state_70564[(2)]);
var state_70564__$1 = state_70564;
var statearr_70596_74499 = state_70564__$1;
(statearr_70596_74499[(2)] = inst_70441);

(statearr_70596_74499[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (32))){
var inst_70430 = (state_70564[(36)]);
var state_70564__$1 = state_70564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70564__$1,(35),inst_70430);
} else {
if((state_val_70565 === (40))){
var state_70564__$1 = state_70564;
var statearr_70597_74501 = state_70564__$1;
(statearr_70597_74501[(1)] = (62));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (56))){
var state_70564__$1 = state_70564;
var statearr_70599_74502 = state_70564__$1;
(statearr_70599_74502[(2)] = null);

(statearr_70599_74502[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (33))){
var inst_70430 = (state_70564[(36)]);
var state_70564__$1 = state_70564;
var statearr_70600_74503 = state_70564__$1;
(statearr_70600_74503[(2)] = inst_70430);

(statearr_70600_74503[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (13))){
var state_70564__$1 = state_70564;
var statearr_70601_74504 = state_70564__$1;
(statearr_70601_74504[(2)] = true);

(statearr_70601_74504[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (22))){
var inst_70375 = (state_70564[(13)]);
var inst_70402 = (state_70564[(24)]);
var inst_70410 = (state_70564[(26)]);
var inst_70403 = (state_70564[(27)]);
var inst_70405 = (state_70564[(29)]);
var inst_70419 = (state_70564[(37)]);
var inst_70407 = (state_70564[(32)]);
var inst_70419__$1 = com.wsscode.pathom.connect.async_read_cache_read(inst_70405,inst_70375,inst_70407,inst_70402,processing_sequence,inst_70410,inst_70403);
var inst_70420 = com.wsscode.common.async_cljs.chan_QMARK_(inst_70419__$1);
var state_70564__$1 = (function (){var statearr_70602 = state_70564;
(statearr_70602[(37)] = inst_70419__$1);

return statearr_70602;
})();
if(inst_70420){
var statearr_70603_74506 = state_70564__$1;
(statearr_70603_74506[(1)] = (25));

} else {
var statearr_70604_74507 = state_70564__$1;
(statearr_70604_74507[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (36))){
var inst_70445 = (state_70564[(35)]);
var state_70564__$1 = state_70564;
var statearr_70605_74508 = state_70564__$1;
(statearr_70605_74508[(2)] = inst_70445);

(statearr_70605_74508[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (41))){
var inst_70555 = (state_70564[(2)]);
var state_70564__$1 = state_70564;
var statearr_70606_74509 = state_70564__$1;
(statearr_70606_74509[(2)] = inst_70555);

(statearr_70606_74509[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (43))){
var inst_70451 = (state_70564[(11)]);
var inst_70374 = (state_70564[(16)]);
var inst_70455 = (state_70564[(19)]);
var inst_70491 = (state_70564[(38)]);
var inst_70487 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_70488 = [inst_70455,inst_70374];
var inst_70489 = cljs.core.PersistentHashMap.fromArrays(inst_70487,inst_70488);
var inst_70490 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_70489);
var inst_70491__$1 = (inst_70451.cljs$core$IFn$_invoke$arity$1 ? inst_70451.cljs$core$IFn$_invoke$arity$1(inst_70490) : inst_70451.call(null,inst_70490));
var state_70564__$1 = (function (){var statearr_70607 = state_70564;
(statearr_70607[(38)] = inst_70491__$1);

return statearr_70607;
})();
if(cljs.core.truth_(inst_70491__$1)){
var statearr_70608_74514 = state_70564__$1;
(statearr_70608_74514[(1)] = (52));

} else {
var statearr_70609_74516 = state_70564__$1;
(statearr_70609_74516[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (61))){
var inst_70515 = (state_70564[(2)]);
var inst_70516 = com.wsscode.common.async_cljs.throw_err(inst_70515);
var state_70564__$1 = state_70564;
var statearr_70610_74519 = state_70564__$1;
(statearr_70610_74519[(2)] = inst_70516);

(statearr_70610_74519[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (29))){
var inst_70430 = (state_70564[(36)]);
var inst_70405 = (state_70564[(29)]);
var inst_70407 = (state_70564[(32)]);
var inst_70430__$1 = com.wsscode.pathom.connect.call_resolver(inst_70405,inst_70407);
var inst_70431 = com.wsscode.common.async_cljs.chan_QMARK_(inst_70430__$1);
var state_70564__$1 = (function (){var statearr_70611 = state_70564;
(statearr_70611[(36)] = inst_70430__$1);

return statearr_70611;
})();
if(inst_70431){
var statearr_70612_74520 = state_70564__$1;
(statearr_70612_74520[(1)] = (32));

} else {
var statearr_70613_74521 = state_70564__$1;
(statearr_70613_74521[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (44))){
var inst_70523 = (state_70564[(2)]);
var state_70564__$1 = state_70564;
var statearr_70614_74522 = state_70564__$1;
(statearr_70614_74522[(2)] = inst_70523);

(statearr_70614_74522[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (6))){
var inst_70560 = (state_70564[(2)]);
var state_70564__$1 = state_70564;
var statearr_70615_74523 = state_70564__$1;
(statearr_70615_74523[(2)] = inst_70560);


cljs.core.async.impl.ioc_helpers.process_exception(state_70564__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (28))){
var inst_70423 = (state_70564[(2)]);
var inst_70424 = com.wsscode.common.async_cljs.throw_err(inst_70423);
var state_70564__$1 = state_70564;
var statearr_70616_74524 = state_70564__$1;
(statearr_70616_74524[(2)] = inst_70424);

(statearr_70616_74524[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (64))){
var inst_70553 = (state_70564[(2)]);
var state_70564__$1 = state_70564;
var statearr_70617_74525 = state_70564__$1;
(statearr_70617_74525[(2)] = inst_70553);

(statearr_70617_74525[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (51))){
var inst_70479 = (state_70564[(2)]);
var inst_70480 = com.wsscode.common.async_cljs.throw_err(inst_70479);
var state_70564__$1 = state_70564;
var statearr_70618_74526 = state_70564__$1;
(statearr_70618_74526[(2)] = inst_70480);

(statearr_70618_74526[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (25))){
var inst_70419 = (state_70564[(37)]);
var state_70564__$1 = state_70564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70564__$1,(28),inst_70419);
} else {
if((state_val_70565 === (34))){
var inst_70438 = (state_70564[(2)]);
var state_70564__$1 = state_70564;
var statearr_70619_74531 = state_70564__$1;
(statearr_70619_74531[(2)] = inst_70438);

(statearr_70619_74531[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (17))){
var inst_70379 = (state_70564[(14)]);
var state_70564__$1 = state_70564;
var statearr_70620_74532 = state_70564__$1;
(statearr_70620_74532[(2)] = inst_70379);

(statearr_70620_74532[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (3))){
var inst_70342 = (state_70564[(2)]);
var state_70564__$1 = state_70564;
var statearr_70621_74533 = state_70564__$1;
(statearr_70621_74533[(2)] = inst_70342);


cljs.core.async.impl.ioc_helpers.process_exception(state_70564__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (12))){
var inst_70395 = (state_70564[(2)]);
var state_70564__$1 = state_70564;
if(cljs.core.truth_(inst_70395)){
var statearr_70622_74538 = state_70564__$1;
(statearr_70622_74538[(1)] = (16));

} else {
var statearr_70623_74539 = state_70564__$1;
(statearr_70623_74539[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (2))){
var inst_70562 = (state_70564[(2)]);
var state_70564__$1 = state_70564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70564__$1,inst_70562);
} else {
if((state_val_70565 === (66))){
var inst_70347 = (state_70564[(22)]);
var inst_70375 = (state_70564[(13)]);
var inst_70405 = (state_70564[(29)]);
var inst_70450 = (state_70564[(12)]);
var inst_70540 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_70541 = [new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),inst_70347,inst_70375,inst_70450];
var inst_70542 = cljs.core.PersistentHashMap.fromArrays(inst_70540,inst_70541);
var inst_70543 = com.wsscode.pathom.trace.trace(inst_70405,inst_70542);
var inst_70544 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_70545 = [inst_70450];
var inst_70546 = cljs.core.PersistentHashMap.fromArrays(inst_70544,inst_70545);
var inst_70547 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_70546);
var inst_70548 = (function(){throw inst_70547})();
var state_70564__$1 = (function (){var statearr_70624 = state_70564;
(statearr_70624[(39)] = inst_70543);

return statearr_70624;
})();
var statearr_70625_74541 = state_70564__$1;
(statearr_70625_74541[(2)] = inst_70548);

(statearr_70625_74541[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (23))){
var state_70564__$1 = state_70564;
var statearr_70626_74546 = state_70564__$1;
(statearr_70626_74546[(1)] = (29));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (47))){
var inst_70485 = (state_70564[(2)]);
var state_70564__$1 = state_70564;
var statearr_70628_74551 = state_70564__$1;
(statearr_70628_74551[(2)] = inst_70485);

(statearr_70628_74551[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (35))){
var inst_70434 = (state_70564[(2)]);
var inst_70435 = com.wsscode.common.async_cljs.throw_err(inst_70434);
var state_70564__$1 = state_70564;
var statearr_70629_74555 = state_70564__$1;
(statearr_70629_74555[(2)] = inst_70435);

(statearr_70629_74555[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (19))){
var inst_70347 = (state_70564[(22)]);
var inst_70406 = (state_70564[(31)]);
var inst_70413 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70414 = [inst_70347];
var inst_70415 = (new cljs.core.PersistentVector(null,1,(5),inst_70413,inst_70414,null));
var inst_70416 = cljs.core.select_keys(inst_70406,inst_70415);
var state_70564__$1 = state_70564;
var statearr_70630_74559 = state_70564__$1;
(statearr_70630_74559[(2)] = inst_70416);

(statearr_70630_74559[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (57))){
var inst_70455 = (state_70564[(19)]);
var inst_70511 = (state_70564[(17)]);
var inst_70454 = (state_70564[(25)]);
var inst_70510 = (state_70564[(2)]);
var inst_70511__$1 = com.wsscode.pathom.connect.process_simple_reader_response(inst_70454,inst_70455);
var inst_70512 = com.wsscode.common.async_cljs.chan_QMARK_(inst_70511__$1);
var state_70564__$1 = (function (){var statearr_70631 = state_70564;
(statearr_70631[(40)] = inst_70510);

(statearr_70631[(17)] = inst_70511__$1);

return statearr_70631;
})();
if(inst_70512){
var statearr_70632_74561 = state_70564__$1;
(statearr_70632_74561[(1)] = (58));

} else {
var statearr_70633_74562 = state_70564__$1;
(statearr_70633_74562[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (11))){
var state_70564__$1 = state_70564;
var statearr_70634_74563 = state_70564__$1;
(statearr_70634_74563[(2)] = false);

(statearr_70634_74563[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (9))){
var inst_70558 = (state_70564[(2)]);
var state_70564__$1 = state_70564;
var statearr_70635_74564 = state_70564__$1;
(statearr_70635_74564[(2)] = inst_70558);

(statearr_70635_74564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (5))){
var inst_70359 = (state_70564[(10)]);
var inst_70367 = (state_70564[(15)]);
var inst_70366 = cljs.core.seq(inst_70359);
var inst_70367__$1 = cljs.core.first(inst_70366);
var inst_70368 = cljs.core.next(inst_70366);
var state_70564__$1 = (function (){var statearr_70637 = state_70564;
(statearr_70637[(30)] = inst_70368);

(statearr_70637[(15)] = inst_70367__$1);

return statearr_70637;
})();
if(cljs.core.truth_(inst_70367__$1)){
var statearr_70638_74566 = state_70564__$1;
(statearr_70638_74566[(1)] = (7));

} else {
var statearr_70639_74567 = state_70564__$1;
(statearr_70639_74567[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (14))){
var state_70564__$1 = state_70564;
var statearr_70640_74568 = state_70564__$1;
(statearr_70640_74568[(2)] = false);

(statearr_70640_74568[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (45))){
var inst_70361 = (state_70564[(8)]);
var inst_70360 = (state_70564[(9)]);
var inst_70465 = (state_70564[(41)]);
var inst_70368 = (state_70564[(30)]);
var inst_70472 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_70361,inst_70465);
var tmp70636 = inst_70360;
var inst_70359 = inst_70368;
var inst_70360__$1 = tmp70636;
var inst_70361__$1 = inst_70472;
var state_70564__$1 = (function (){var statearr_70641 = state_70564;
(statearr_70641[(8)] = inst_70361__$1);

(statearr_70641[(9)] = inst_70360__$1);

(statearr_70641[(10)] = inst_70359);

return statearr_70641;
})();
var statearr_70642_74570 = state_70564__$1;
(statearr_70642_74570[(2)] = null);

(statearr_70642_74570[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (53))){
var inst_70368 = (state_70564[(30)]);
var inst_70501 = cljs.core.seq(inst_70368);
var state_70564__$1 = state_70564;
if(inst_70501){
var statearr_70643_74571 = state_70564__$1;
(statearr_70643_74571[(1)] = (55));

} else {
var statearr_70644_74572 = state_70564__$1;
(statearr_70644_74572[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (26))){
var inst_70419 = (state_70564[(37)]);
var state_70564__$1 = state_70564;
var statearr_70646_74573 = state_70564__$1;
(statearr_70646_74573[(2)] = inst_70419);

(statearr_70646_74573[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (16))){
var inst_70379 = (state_70564[(14)]);
var inst_70397 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_70379);
var state_70564__$1 = state_70564;
var statearr_70647_74577 = state_70564__$1;
(statearr_70647_74577[(2)] = inst_70397);

(statearr_70647_74577[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (38))){
var inst_70356 = (state_70564[(20)]);
var inst_70357 = (state_70564[(21)]);
var inst_70347 = (state_70564[(22)]);
var inst_70361 = (state_70564[(8)]);
var inst_70375 = (state_70564[(13)]);
var inst_70404 = (state_70564[(23)]);
var inst_70360 = (state_70564[(9)]);
var inst_70374 = (state_70564[(16)]);
var inst_70401 = (state_70564[(18)]);
var inst_70402 = (state_70564[(24)]);
var inst_70359 = (state_70564[(10)]);
var inst_70410 = (state_70564[(26)]);
var inst_70403 = (state_70564[(27)]);
var inst_70400 = (state_70564[(28)]);
var inst_70405 = (state_70564[(29)]);
var inst_70368 = (state_70564[(30)]);
var inst_70367 = (state_70564[(15)]);
var inst_70450 = (state_70564[(12)]);
var inst_70406 = (state_70564[(31)]);
var inst_70407 = (state_70564[(32)]);
var inst_70450__$1 = (state_70564[(2)]);
var inst_70451 = (function (){var input = inst_70403;
var seq__70364 = inst_70368;
var step = inst_70367;
var seq__70353 = inst_70357;
var entity = inst_70406;
var key_SINGLEQUOTE_ = inst_70374;
var map__70373 = inst_70400;
var response = inst_70450__$1;
var first__70354 = inst_70356;
var G__70351 = inst_70359;
var cache_QMARK_ = inst_70401;
var out_left = inst_70361;
var vec__70352 = plan;
var key = inst_70347;
var failed_resolvers = inst_70360;
var batch_QMARK_ = inst_70402;
var output = inst_70404;
var env__$1 = inst_70405;
var first__70365 = inst_70367;
var e = inst_70407;
var vec__70363 = inst_70359;
var resolver_sym = inst_70375;
var trace_data = inst_70410;
var resolver = inst_70400;
var tail = inst_70368;
var vec__70370 = inst_70367;
return ((function (input,seq__70364,step,seq__70353,entity,key_SINGLEQUOTE_,map__70373,response,first__70354,G__70351,cache_QMARK_,out_left,vec__70352,key,failed_resolvers,batch_QMARK_,output,env__$1,first__70365,e,vec__70363,resolver_sym,trace_data,resolver,tail,vec__70370,inst_70356,inst_70357,inst_70347,inst_70361,inst_70375,inst_70404,inst_70360,inst_70374,inst_70401,inst_70402,inst_70359,inst_70410,inst_70403,inst_70400,inst_70405,inst_70368,inst_70367,inst_70450,inst_70406,inst_70407,inst_70450__$1,state_val_70565,c__45808__auto__,vec__70339,plan,out,temp__5718__auto__,map__70337,map__70337__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (error){
var failed_resolvers__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers,resolver_sym,error);
com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$1,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (failed_resolvers__$1,input,seq__70364,step,seq__70353,entity,key_SINGLEQUOTE_,map__70373,response,first__70354,G__70351,cache_QMARK_,out_left,vec__70352,key,failed_resolvers,batch_QMARK_,output,env__$1,first__70365,e,vec__70363,resolver_sym,trace_data,resolver,tail,vec__70370,inst_70356,inst_70357,inst_70347,inst_70361,inst_70375,inst_70404,inst_70360,inst_70374,inst_70401,inst_70402,inst_70359,inst_70410,inst_70403,inst_70400,inst_70405,inst_70368,inst_70367,inst_70450,inst_70406,inst_70407,inst_70450__$1,state_val_70565,c__45808__auto__,vec__70339,plan,out,temp__5718__auto__,map__70337,map__70337__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__70334_SHARP_){
var x__4222__auto__ = ((function (){var or__4131__auto__ = p1__70334_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() * (2));
var y__4223__auto__ = max_resolver_weight;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});})(failed_resolvers__$1,input,seq__70364,step,seq__70353,entity,key_SINGLEQUOTE_,map__70373,response,first__70354,G__70351,cache_QMARK_,out_left,vec__70352,key,failed_resolvers,batch_QMARK_,output,env__$1,first__70365,e,vec__70363,resolver_sym,trace_data,resolver,tail,vec__70370,inst_70356,inst_70357,inst_70347,inst_70361,inst_70375,inst_70404,inst_70360,inst_70374,inst_70401,inst_70402,inst_70359,inst_70410,inst_70403,inst_70400,inst_70405,inst_70368,inst_70367,inst_70450,inst_70406,inst_70407,inst_70450__$1,state_val_70565,c__45808__auto__,vec__70339,plan,out,temp__5718__auto__,map__70337,map__70337__$1,env,indexes,max_resolver_weight,processing_sequence))
], 0));

var temp__5718__auto____$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$1,failed_resolvers__$1);
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__70648 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70648,(0),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70648,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan__$1,failed_resolvers__$1,out_SINGLEQUOTE_], null);
} else {
return null;
}
});
;})(input,seq__70364,step,seq__70353,entity,key_SINGLEQUOTE_,map__70373,response,first__70354,G__70351,cache_QMARK_,out_left,vec__70352,key,failed_resolvers,batch_QMARK_,output,env__$1,first__70365,e,vec__70363,resolver_sym,trace_data,resolver,tail,vec__70370,inst_70356,inst_70357,inst_70347,inst_70361,inst_70375,inst_70404,inst_70360,inst_70374,inst_70401,inst_70402,inst_70359,inst_70410,inst_70403,inst_70400,inst_70405,inst_70368,inst_70367,inst_70450,inst_70406,inst_70407,inst_70450__$1,state_val_70565,c__45808__auto__,vec__70339,plan,out,temp__5718__auto__,map__70337,map__70337__$1,env,indexes,max_resolver_weight,processing_sequence))
})();
var inst_70452 = cljs.core.map_QMARK_(inst_70450__$1);
var state_70564__$1 = (function (){var statearr_70651 = state_70564;
(statearr_70651[(11)] = inst_70451);

(statearr_70651[(12)] = inst_70450__$1);

return statearr_70651;
})();
if(inst_70452){
var statearr_70652_74587 = state_70564__$1;
(statearr_70652_74587[(1)] = (39));

} else {
var statearr_70653_74588 = state_70564__$1;
(statearr_70653_74588[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (30))){
var state_70564__$1 = state_70564;
var statearr_70654_74589 = state_70564__$1;
(statearr_70654_74589[(2)] = null);

(statearr_70654_74589[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (10))){
var inst_70379 = (state_70564[(14)]);
var inst_70384 = inst_70379.cljs$lang$protocol_mask$partition0$;
var inst_70385 = (inst_70384 & (64));
var inst_70386 = inst_70379.cljs$core$ISeq$;
var inst_70387 = (cljs.core.PROTOCOL_SENTINEL === inst_70386);
var inst_70388 = ((inst_70385) || (inst_70387));
var state_70564__$1 = state_70564;
if(cljs.core.truth_(inst_70388)){
var statearr_70655_74590 = state_70564__$1;
(statearr_70655_74590[(1)] = (13));

} else {
var statearr_70656_74591 = state_70564__$1;
(statearr_70656_74591[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (18))){
var inst_70347 = (state_70564[(22)]);
var inst_70375 = (state_70564[(13)]);
var inst_70374 = (state_70564[(16)]);
var inst_70403 = (state_70564[(27)]);
var inst_70400 = (state_70564[(28)]);
var inst_70405 = (state_70564[(29)]);
var inst_70406 = (state_70564[(31)]);
var inst_70407 = (state_70564[(32)]);
var inst_70400__$1 = (state_70564[(2)]);
var inst_70401 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_70400__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_70402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70400__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_70403__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70400__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_70404 = com.wsscode.pathom.connect.resolver__GT_output(env,inst_70375);
var inst_70405__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_70400__$1);
var inst_70406__$1 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_70405__$1);
var inst_70407__$1 = cljs.core.select_keys(inst_70406__$1,inst_70403__$1);
var inst_70408 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_70409 = [inst_70347,inst_70375,inst_70407__$1];
var inst_70410 = cljs.core.PersistentHashMap.fromArrays(inst_70408,inst_70409);
var inst_70411 = cljs.core.contains_QMARK_(inst_70406__$1,inst_70374);
var state_70564__$1 = (function (){var statearr_70658 = state_70564;
(statearr_70658[(23)] = inst_70404);

(statearr_70658[(18)] = inst_70401);

(statearr_70658[(24)] = inst_70402);

(statearr_70658[(26)] = inst_70410);

(statearr_70658[(27)] = inst_70403__$1);

(statearr_70658[(28)] = inst_70400__$1);

(statearr_70658[(29)] = inst_70405__$1);

(statearr_70658[(31)] = inst_70406__$1);

(statearr_70658[(32)] = inst_70407__$1);

return statearr_70658;
})();
if(inst_70411){
var statearr_70659_74597 = state_70564__$1;
(statearr_70659_74597[(1)] = (19));

} else {
var statearr_70660_74600 = state_70564__$1;
(statearr_70660_74600[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (52))){
var inst_70491 = (state_70564[(38)]);
var inst_70496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70491,(0),null);
var inst_70497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70491,(1),null);
var inst_70498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70491,(2),null);
var inst_70359 = inst_70496;
var inst_70360 = inst_70497;
var inst_70361 = inst_70498;
var state_70564__$1 = (function (){var statearr_70662 = state_70564;
(statearr_70662[(8)] = inst_70361);

(statearr_70662[(9)] = inst_70360);

(statearr_70662[(10)] = inst_70359);

return statearr_70662;
})();
var statearr_70663_74603 = state_70564__$1;
(statearr_70663_74603[(2)] = null);

(statearr_70663_74603[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (67))){
var inst_70550 = (state_70564[(2)]);
var state_70564__$1 = state_70564;
var statearr_70664_74604 = state_70564__$1;
(statearr_70664_74604[(2)] = inst_70550);

(statearr_70664_74604[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (42))){
var inst_70347 = (state_70564[(22)]);
var inst_70375 = (state_70564[(13)]);
var inst_70404 = (state_70564[(23)]);
var inst_70454 = (state_70564[(25)]);
var inst_70368 = (state_70564[(30)]);
var inst_70465 = com.wsscode.pathom.connect.output__GT_provides(inst_70404);
var inst_70466 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_70467 = [new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),inst_70347,inst_70375];
var inst_70468 = cljs.core.PersistentHashMap.fromArrays(inst_70466,inst_70467);
var inst_70469 = com.wsscode.pathom.trace.trace(inst_70454,inst_70468);
var inst_70470 = cljs.core.seq(inst_70368);
var state_70564__$1 = (function (){var statearr_70665 = state_70564;
(statearr_70665[(42)] = inst_70469);

(statearr_70665[(41)] = inst_70465);

return statearr_70665;
})();
if(inst_70470){
var statearr_70666_74607 = state_70564__$1;
(statearr_70666_74607[(1)] = (45));

} else {
var statearr_70667_74608 = state_70564__$1;
(statearr_70667_74608[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (37))){
var inst_70448 = cljs.core.PersistentHashMap.EMPTY;
var state_70564__$1 = state_70564;
var statearr_70668_74612 = state_70564__$1;
(statearr_70668_74612[(2)] = inst_70448);

(statearr_70668_74612[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (63))){
var state_70564__$1 = state_70564;
var statearr_70669_74613 = state_70564__$1;
(statearr_70669_74613[(2)] = null);

(statearr_70669_74613[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (8))){
var state_70564__$1 = state_70564;
var statearr_70670_74614 = state_70564__$1;
(statearr_70670_74614[(2)] = null);

(statearr_70670_74614[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70565 === (49))){
var inst_70475 = (state_70564[(34)]);
var state_70564__$1 = state_70564;
var statearr_70671_74616 = state_70564__$1;
(statearr_70671_74616[(2)] = inst_70475);

(statearr_70671_74616[(1)] = (50));


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
});})(c__45808__auto__,vec__70339,plan,out,temp__5718__auto__,map__70337,map__70337__$1,env,indexes,max_resolver_weight,processing_sequence))
;
return ((function (switch__45525__auto__,c__45808__auto__,vec__70339,plan,out,temp__5718__auto__,map__70337,map__70337__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_reader2_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$connect$async_reader2_$_state_machine__45526__auto____0 = (function (){
var statearr_70672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70672[(0)] = com$wsscode$pathom$connect$async_reader2_$_state_machine__45526__auto__);

(statearr_70672[(1)] = (1));

return statearr_70672;
});
var com$wsscode$pathom$connect$async_reader2_$_state_machine__45526__auto____1 = (function (state_70564){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_70564);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e70673){if((e70673 instanceof Object)){
var ex__45529__auto__ = e70673;
var statearr_70674_74618 = state_70564;
(statearr_70674_74618[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_70564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70673;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74619 = state_70564;
state_70564 = G__74619;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader2_$_state_machine__45526__auto__ = function(state_70564){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader2_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader2_$_state_machine__45526__auto____1.call(this,state_70564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader2_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader2_$_state_machine__45526__auto____0;
com$wsscode$pathom$connect$async_reader2_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader2_$_state_machine__45526__auto____1;
return com$wsscode$pathom$connect$async_reader2_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,vec__70339,plan,out,temp__5718__auto__,map__70337,map__70337__$1,env,indexes,max_resolver_weight,processing_sequence))
})();
var state__45810__auto__ = (function (){var statearr_70675 = f__45809__auto__();
(statearr_70675[(6)] = c__45808__auto__);

return statearr_70675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,vec__70339,plan,out,temp__5718__auto__,map__70337,map__70337__$1,env,indexes,max_resolver_weight,processing_sequence))
);

return c__45808__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.parallel_batch_error = (function com$wsscode$pathom$connect$parallel_batch_error(p__70677,e){
var map__70678 = p__70677;
var map__70678__$1 = (((((!((map__70678 == null))))?(((((map__70678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70678):map__70678);
var env = map__70678__$1;
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70678__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var map__70680 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var map__70680__$1 = (((((!((map__70680 == null))))?(((((map__70680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70680):map__70680);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70680__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var item_count = cljs.core.count(processing_sequence);
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-error","com.wsscode.pathom.connect/batch-result-error",-1587594017),new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),com.wsscode.pathom.core.process_error(env,e)], null));

var output_SINGLEQUOTE_ = com.wsscode.pathom.connect.output__GT_provides(output);
var base_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take_while.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword_QMARK_),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661).cljs$core$IFn$_invoke$arity$1(env));
var seq__70683_74623 = cljs.core.seq(output_SINGLEQUOTE_);
var chunk__70688_74624 = null;
var count__70689_74625 = (0);
var i__70690_74626 = (0);
while(true){
if((i__70690_74626 < count__70689_74625)){
var o_74627 = chunk__70688_74624.cljs$core$IIndexed$_nth$arity$2(null,i__70690_74626);
var seq__70691_74628 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(item_count));
var chunk__70692_74629 = null;
var count__70693_74630 = (0);
var i__70694_74631 = (0);
while(true){
if((i__70694_74631 < count__70693_74630)){
var i_74634 = chunk__70692_74629.cljs$core$IIndexed$_nth$arity$2(null,i__70694_74631);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(base_path,i_74634,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o_74627], 0))),e);


var G__74635 = seq__70691_74628;
var G__74636 = chunk__70692_74629;
var G__74637 = count__70693_74630;
var G__74638 = (i__70694_74631 + (1));
seq__70691_74628 = G__74635;
chunk__70692_74629 = G__74636;
count__70693_74630 = G__74637;
i__70694_74631 = G__74638;
continue;
} else {
var temp__5720__auto___74639 = cljs.core.seq(seq__70691_74628);
if(temp__5720__auto___74639){
var seq__70691_74640__$1 = temp__5720__auto___74639;
if(cljs.core.chunked_seq_QMARK_(seq__70691_74640__$1)){
var c__4550__auto___74641 = cljs.core.chunk_first(seq__70691_74640__$1);
var G__74642 = cljs.core.chunk_rest(seq__70691_74640__$1);
var G__74643 = c__4550__auto___74641;
var G__74644 = cljs.core.count(c__4550__auto___74641);
var G__74645 = (0);
seq__70691_74628 = G__74642;
chunk__70692_74629 = G__74643;
count__70693_74630 = G__74644;
i__70694_74631 = G__74645;
continue;
} else {
var i_74646 = cljs.core.first(seq__70691_74640__$1);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(base_path,i_74646,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o_74627], 0))),e);


var G__74648 = cljs.core.next(seq__70691_74640__$1);
var G__74649 = null;
var G__74650 = (0);
var G__74651 = (0);
seq__70691_74628 = G__74648;
chunk__70692_74629 = G__74649;
count__70693_74630 = G__74650;
i__70694_74631 = G__74651;
continue;
}
} else {
}
}
break;
}

var G__74653 = seq__70683_74623;
var G__74654 = chunk__70688_74624;
var G__74655 = count__70689_74625;
var G__74656 = (i__70690_74626 + (1));
seq__70683_74623 = G__74653;
chunk__70688_74624 = G__74654;
count__70689_74625 = G__74655;
i__70690_74626 = G__74656;
continue;
} else {
var temp__5720__auto___74657 = cljs.core.seq(seq__70683_74623);
if(temp__5720__auto___74657){
var seq__70683_74658__$1 = temp__5720__auto___74657;
if(cljs.core.chunked_seq_QMARK_(seq__70683_74658__$1)){
var c__4550__auto___74659 = cljs.core.chunk_first(seq__70683_74658__$1);
var G__74660 = cljs.core.chunk_rest(seq__70683_74658__$1);
var G__74661 = c__4550__auto___74659;
var G__74662 = cljs.core.count(c__4550__auto___74659);
var G__74663 = (0);
seq__70683_74623 = G__74660;
chunk__70688_74624 = G__74661;
count__70689_74625 = G__74662;
i__70690_74626 = G__74663;
continue;
} else {
var o_74664 = cljs.core.first(seq__70683_74658__$1);
var seq__70684_74665 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(item_count));
var chunk__70685_74666 = null;
var count__70686_74667 = (0);
var i__70687_74668 = (0);
while(true){
if((i__70687_74668 < count__70686_74667)){
var i_74669 = chunk__70685_74666.cljs$core$IIndexed$_nth$arity$2(null,i__70687_74668);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(base_path,i_74669,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o_74664], 0))),e);


var G__74672 = seq__70684_74665;
var G__74673 = chunk__70685_74666;
var G__74674 = count__70686_74667;
var G__74675 = (i__70687_74668 + (1));
seq__70684_74665 = G__74672;
chunk__70685_74666 = G__74673;
count__70686_74667 = G__74674;
i__70687_74668 = G__74675;
continue;
} else {
var temp__5720__auto___74676__$1 = cljs.core.seq(seq__70684_74665);
if(temp__5720__auto___74676__$1){
var seq__70684_74677__$1 = temp__5720__auto___74676__$1;
if(cljs.core.chunked_seq_QMARK_(seq__70684_74677__$1)){
var c__4550__auto___74678 = cljs.core.chunk_first(seq__70684_74677__$1);
var G__74679 = cljs.core.chunk_rest(seq__70684_74677__$1);
var G__74680 = c__4550__auto___74678;
var G__74681 = cljs.core.count(c__4550__auto___74678);
var G__74682 = (0);
seq__70684_74665 = G__74679;
chunk__70685_74666 = G__74680;
count__70686_74667 = G__74681;
i__70687_74668 = G__74682;
continue;
} else {
var i_74683 = cljs.core.first(seq__70684_74677__$1);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(base_path,i_74683,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o_74664], 0))),e);


var G__74684 = cljs.core.next(seq__70684_74677__$1);
var G__74685 = null;
var G__74686 = (0);
var G__74687 = (0);
seq__70684_74665 = G__74684;
chunk__70685_74666 = G__74685;
count__70686_74667 = G__74686;
i__70687_74668 = G__74687;
continue;
}
} else {
}
}
break;
}

var G__74688 = cljs.core.next(seq__70683_74658__$1);
var G__74689 = null;
var G__74690 = (0);
var G__74691 = (0);
seq__70683_74623 = G__74688;
chunk__70688_74624 = G__74689;
count__70689_74625 = G__74690;
i__70690_74626 = G__74691;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__70736){
var vec__70737 = p__70736;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70737,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70737,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,input,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),i);
}),cljs.core.PersistentArrayMap.EMPTY,inputs);
});
com.wsscode.pathom.connect.parallel_batch = (function com$wsscode$pathom$connect$parallel_batch(p__70755){
var map__70756 = p__70755;
var map__70756__$1 = (((((!((map__70756 == null))))?(((((map__70756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70756):map__70756);
var env = map__70756__$1;
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70756__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70756__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70756__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache){
return (function (state_71287){
var state_val_71291 = (state_71287[(1)]);
if((state_val_71291 === (121))){
var inst_70797 = (state_71287[(7)]);
var inst_70800 = (state_71287[(8)]);
var inst_70794 = (state_71287[(9)]);
var inst_71256 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71257 = [inst_70794,inst_70797,inst_70800];
var inst_71258 = (new cljs.core.PersistentVector(null,3,(5),inst_71256,inst_71257,null));
var inst_71259 = com.wsscode.pathom.core.cache_read(env,inst_71258);
var state_71287__$1 = state_71287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71287__$1,(124),inst_71259);
} else {
if((state_val_71291 === (65))){
var inst_70997 = cljs.core.PersistentHashMap.EMPTY;
var state_71287__$1 = state_71287;
var statearr_71297_74698 = state_71287__$1;
(statearr_71297_74698[(2)] = inst_70997);

(statearr_71297_74698[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (70))){
var inst_71024 = (state_71287[(2)]);
var state_71287__$1 = state_71287;
var statearr_71300_74699 = state_71287__$1;
(statearr_71300_74699[(2)] = inst_71024);

(statearr_71300_74699[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (62))){
var inst_70988 = (state_71287[(10)]);
var inst_71002 = cljs.core.async.close_BANG_(inst_70988);
var state_71287__$1 = state_71287;
var statearr_71305_74700 = state_71287__$1;
(statearr_71305_74700[(2)] = inst_71002);

(statearr_71305_74700[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (74))){
var inst_71051 = (state_71287[(2)]);
var state_71287__$1 = state_71287;
var statearr_71309_74701 = state_71287__$1;
(statearr_71309_74701[(2)] = inst_71051);

(statearr_71309_74701[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (110))){
var state_71287__$1 = state_71287;
var statearr_71310_74702 = state_71287__$1;
(statearr_71310_74702[(2)] = null);

(statearr_71310_74702[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (7))){
var inst_70785 = (state_71287[(2)]);
var state_71287__$1 = state_71287;
if(cljs.core.truth_(inst_70785)){
var statearr_71311_74705 = state_71287__$1;
(statearr_71311_74705[(1)] = (11));

} else {
var statearr_71312_74706 = state_71287__$1;
(statearr_71312_74706[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (59))){
var inst_70989 = (state_71287[(11)]);
var inst_70967 = (state_71287[(12)]);
var inst_70985 = cljs.core.first(inst_70967);
var inst_70986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70985,(0),null);
var inst_70987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70985,(1),null);
var inst_70988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70987,(0),null);
var inst_70989__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70987,(1),null);
var state_71287__$1 = (function (){var statearr_71316 = state_71287;
(statearr_71316[(10)] = inst_70988);

(statearr_71316[(11)] = inst_70989__$1);

(statearr_71316[(13)] = inst_70986);

return statearr_71316;
})();
if(cljs.core.truth_(inst_70989__$1)){
var statearr_71320_74708 = state_71287__$1;
(statearr_71320_74708[(1)] = (61));

} else {
var statearr_71321_74709 = state_71287__$1;
(statearr_71321_74709[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (86))){
var state_71287__$1 = state_71287;
var statearr_71325_74710 = state_71287__$1;
(statearr_71325_74710[(2)] = null);

(statearr_71325_74710[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (20))){
var inst_70821 = (state_71287[(2)]);
var state_71287__$1 = state_71287;
var statearr_71326_74711 = state_71287__$1;
(statearr_71326_74711[(2)] = inst_70821);

(statearr_71326_74711[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (72))){
var inst_70799 = (state_71287[(14)]);
var inst_70790 = (state_71287[(15)]);
var inst_70797 = (state_71287[(7)]);
var inst_70803 = (state_71287[(16)]);
var inst_70800 = (state_71287[(8)]);
var inst_70795 = (state_71287[(17)]);
var inst_70794 = (state_71287[(9)]);
var inst_71054 = cljs.core.PersistentVector.EMPTY;
var inst_71059 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector);
var inst_71060 = (function (){var map__70765 = inst_70790;
var resolver_sym = inst_70794;
var input = inst_70795;
var e = inst_70797;
var key = inst_70799;
var params = inst_70800;
var trace_data = inst_70803;
return ((function (map__70765,resolver_sym,input,e,key,params,trace_data,inst_70799,inst_70790,inst_70797,inst_70803,inst_70800,inst_70795,inst_70794,inst_71054,inst_71059,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__70745_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(cljs.core.second(p1__70745_SHARP_),input);
});
;})(map__70765,resolver_sym,input,e,key,params,trace_data,inst_70799,inst_70790,inst_70797,inst_70803,inst_70800,inst_70795,inst_70794,inst_71054,inst_71059,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_71061 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_71060);
var inst_71062 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_71059,inst_71061);
var inst_71063 = (function (){var map__70765 = inst_70790;
var resolver_sym = inst_70794;
var input = inst_70795;
var e = inst_70797;
var key = inst_70799;
var params = inst_70800;
var trace_data = inst_70803;
return ((function (map__70765,resolver_sym,input,e,key,params,trace_data,inst_70799,inst_70790,inst_70797,inst_70803,inst_70800,inst_70795,inst_70794,inst_71054,inst_71059,inst_71060,inst_71061,inst_71062,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__70746_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__70746_SHARP_,input);
});
;})(map__70765,resolver_sym,input,e,key,params,trace_data,inst_70799,inst_70790,inst_70797,inst_70803,inst_70800,inst_70795,inst_70794,inst_71054,inst_71059,inst_71060,inst_71061,inst_71062,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_71064 = com.wsscode.pathom.connect.map_async_serial(inst_71063,processing_sequence);
var state_71287__$1 = (function (){var statearr_71334 = state_71287;
(statearr_71334[(18)] = inst_71062);

(statearr_71334[(19)] = inst_71054);

return statearr_71334;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71287__$1,(75),inst_71064);
} else {
if((state_val_71291 === (58))){
var inst_70967 = (state_71287[(12)]);
var inst_70974 = cljs.core.chunk_first(inst_70967);
var inst_70975 = cljs.core.chunk_rest(inst_70967);
var inst_70976 = cljs.core.count(inst_70974);
var inst_70928 = inst_70975;
var inst_70929 = inst_70974;
var inst_70930 = inst_70976;
var inst_70931 = (0);
var state_71287__$1 = (function (){var statearr_71342 = state_71287;
(statearr_71342[(20)] = inst_70930);

(statearr_71342[(21)] = inst_70928);

(statearr_71342[(22)] = inst_70929);

(statearr_71342[(23)] = inst_70931);

return statearr_71342;
})();
var statearr_71343_74716 = state_71287__$1;
(statearr_71343_74716[(2)] = null);

(statearr_71343_74716[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (60))){
var inst_71008 = (state_71287[(2)]);
var state_71287__$1 = state_71287;
var statearr_71344_74719 = state_71287__$1;
(statearr_71344_74719[(2)] = inst_71008);

(statearr_71344_74719[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (27))){
var inst_70856 = (state_71287[(2)]);
var state_71287__$1 = state_71287;
var statearr_71348_74721 = state_71287__$1;
(statearr_71348_74721[(2)] = inst_70856);

(statearr_71348_74721[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (1))){
var state_71287__$1 = state_71287;
var statearr_71349_74724 = state_71287__$1;
(statearr_71349_74724[(2)] = null);

(statearr_71349_74724[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (69))){
var inst_71033 = (state_71287[(2)]);
var state_71287__$1 = state_71287;
var statearr_71353_74726 = state_71287__$1;
(statearr_71353_74726[(2)] = inst_71033);

(statearr_71353_74726[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (101))){
var inst_71160 = (state_71287[(24)]);
var inst_71197 = (state_71287[(25)]);
var inst_71197__$1 = cljs.core.seq(inst_71160);
var state_71287__$1 = (function (){var statearr_71354 = state_71287;
(statearr_71354[(25)] = inst_71197__$1);

return statearr_71354;
})();
if(inst_71197__$1){
var statearr_71355_74727 = state_71287__$1;
(statearr_71355_74727[(1)] = (109));

} else {
var statearr_71359_74728 = state_71287__$1;
(statearr_71359_74728[(1)] = (110));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (24))){
var inst_70859 = (state_71287[(2)]);
var state_71287__$1 = state_71287;
if(cljs.core.truth_(inst_70859)){
var statearr_71360_74729 = state_71287__$1;
(statearr_71360_74729[(1)] = (28));

} else {
var statearr_71361_74730 = state_71287__$1;
(statearr_71361_74730[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (102))){
var inst_71247 = (state_71287[(2)]);
var state_71287__$1 = state_71287;
var statearr_71362_74733 = state_71287__$1;
(statearr_71362_74733[(2)] = inst_71247);

(statearr_71362_74733[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (55))){
var inst_70967 = (state_71287[(12)]);
var inst_70969 = cljs.core.chunked_seq_QMARK_(inst_70967);
var state_71287__$1 = state_71287;
if(inst_70969){
var statearr_71367_74736 = state_71287__$1;
(statearr_71367_74736[(1)] = (58));

} else {
var statearr_71369_74737 = state_71287__$1;
(statearr_71369_74737[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (85))){
var state_71287__$1 = state_71287;
var statearr_71370_74738 = state_71287__$1;
(statearr_71370_74738[(2)] = null);

(statearr_71370_74738[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (39))){
var inst_70890 = (state_71287[(2)]);
var inst_70891 = com.wsscode.common.async_cljs.throw_err(inst_70890);
var state_71287__$1 = state_71287;
var statearr_71373_74739 = state_71287__$1;
(statearr_71373_74739[(2)] = inst_70891);


cljs.core.async.impl.ioc_helpers.process_exception(state_71287__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (88))){
var inst_71126 = (state_71287[(2)]);
var state_71287__$1 = state_71287;
var statearr_71374_74740 = state_71287__$1;
(statearr_71374_74740[(2)] = inst_71126);

(statearr_71374_74740[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (46))){
var inst_70929 = (state_71287[(22)]);
var inst_70949 = (state_71287[(26)]);
var inst_70931 = (state_71287[(23)]);
var inst_70945 = cljs.core._nth(inst_70929,inst_70931);
var inst_70946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70945,(0),null);
var inst_70947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70945,(1),null);
var inst_70948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70947,(0),null);
var inst_70949__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70947,(1),null);
var state_71287__$1 = (function (){var statearr_71382 = state_71287;
(statearr_71382[(27)] = inst_70948);

(statearr_71382[(26)] = inst_70949__$1);

(statearr_71382[(28)] = inst_70946);

return statearr_71382;
})();
if(cljs.core.truth_(inst_70949__$1)){
var statearr_71383_74742 = state_71287__$1;
(statearr_71383_74742[(1)] = (49));

} else {
var statearr_71384_74743 = state_71287__$1;
(statearr_71384_74743[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (4))){
var inst_70766 = (state_71287[(29)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_71287,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_70766__$1 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_70771 = (inst_70766__$1 == null);
var inst_70772 = cljs.core.not(inst_70771);
var state_71287__$1 = (function (){var statearr_71388 = state_71287;
(statearr_71388[(29)] = inst_70766__$1);

return statearr_71388;
})();
if(inst_70772){
var statearr_71389_74746 = state_71287__$1;
(statearr_71389_74746[(1)] = (5));

} else {
var statearr_71390_74749 = state_71287__$1;
(statearr_71390_74749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (77))){
var state_71287__$1 = state_71287;
var statearr_71394_74750 = state_71287__$1;
(statearr_71394_74750[(2)] = false);

(statearr_71394_74750[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (106))){
var inst_71178 = (state_71287[(30)]);
var state_71287__$1 = state_71287;
var statearr_71395_74751 = state_71287__$1;
(statearr_71395_74751[(2)] = inst_71178);

(statearr_71395_74751[(1)] = (108));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (119))){
var inst_71230 = cljs.core.PersistentHashMap.EMPTY;
var state_71287__$1 = state_71287;
var statearr_71396_74752 = state_71287__$1;
(statearr_71396_74752[(2)] = inst_71230);

(statearr_71396_74752[(1)] = (120));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (95))){
var inst_70799 = (state_71287[(14)]);
var inst_70790 = (state_71287[(15)]);
var inst_71069 = (state_71287[(31)]);
var inst_71129 = (state_71287[(32)]);
var inst_71097 = (state_71287[(33)]);
var inst_70797 = (state_71287[(7)]);
var inst_71096 = (state_71287[(34)]);
var inst_70803 = (state_71287[(16)]);
var inst_71140 = (state_71287[(35)]);
var inst_71068 = (state_71287[(36)]);
var inst_70800 = (state_71287[(8)]);
var inst_70795 = (state_71287[(17)]);
var inst_71137 = (state_71287[(37)]);
var inst_70794 = (state_71287[(9)]);
var inst_71104 = (state_71287[(38)]);
var inst_71139 = (state_71287[(39)]);
var inst_71098 = (state_71287[(40)]);
var inst_71147 = (function (){var input = inst_70795;
var map__71053 = inst_71096;
var items_map = inst_71069;
var map__70765 = inst_70790;
var cached = inst_71097;
var cached_set = inst_71140;
var linked_results = inst_71139;
var key = inst_70799;
var channels = inst_71104;
var _ = inst_71137;
var params = inst_70800;
var uncached = inst_71098;
var e = inst_70797;
var resolver_sym = inst_70794;
var trace_data = inst_70803;
var valid_inputs = inst_71068;
var batch_result = inst_71129;
return ((function (input,map__71053,items_map,map__70765,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_70799,inst_70790,inst_71069,inst_71129,inst_71097,inst_70797,inst_71096,inst_70803,inst_71140,inst_71068,inst_70800,inst_70795,inst_71137,inst_70794,inst_71104,inst_71139,inst_71098,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap(cache){
var path__$1 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),(cljs.core.count(path) - (2)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path__$1,input,map__71053,items_map,map__70765,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_70799,inst_70790,inst_71069,inst_71129,inst_71097,inst_70797,inst_71096,inst_70803,inst_71140,inst_71068,inst_70800,inst_70795,inst_71137,inst_70794,inst_71104,inst_71139,inst_71098,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce(cache__$1,p__71412){
var vec__71414 = p__71412;
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71414,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71414,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__71414,item,result,path__$1,input,map__71053,items_map,map__70765,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_70799,inst_70790,inst_71069,inst_71129,inst_71097,inst_70797,inst_71096,inst_70803,inst_71140,inst_71068,inst_70800,inst_70795,inst_71137,inst_70794,inst_71104,inst_71139,inst_71098,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce_$_entity_path_inner_reduce(cache__$2,index){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cache__$2,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,index),((function (vec__71414,item,result,path__$1,input,map__71053,items_map,map__70765,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_70799,inst_70790,inst_71069,inst_71129,inst_71097,inst_70797,inst_71096,inst_70803,inst_71140,inst_71068,inst_70800,inst_70795,inst_71137,inst_70794,inst_71104,inst_71139,inst_71098,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__70750_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result,p1__70750_SHARP_], 0));
});})(vec__71414,item,result,path__$1,input,map__71053,items_map,map__70765,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_70799,inst_70790,inst_71069,inst_71129,inst_71097,inst_70797,inst_71096,inst_70803,inst_71140,inst_71068,inst_70800,inst_70795,inst_71137,inst_70794,inst_71104,inst_71139,inst_71098,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache))
);
});})(vec__71414,item,result,path__$1,input,map__71053,items_map,map__70765,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_70799,inst_70790,inst_71069,inst_71129,inst_71097,inst_70797,inst_71096,inst_70803,inst_71140,inst_71068,inst_70800,inst_70795,inst_71137,inst_70794,inst_71104,inst_71139,inst_71098,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache))
,cache__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_map,item));
});})(path__$1,input,map__71053,items_map,map__70765,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_70799,inst_70790,inst_71069,inst_71129,inst_71097,inst_70797,inst_71096,inst_70803,inst_71140,inst_71068,inst_70800,inst_70795,inst_71137,inst_70794,inst_71104,inst_71139,inst_71098,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache))
,cache,cljs.core.zipmap(uncached,batch_result));
});
;})(input,map__71053,items_map,map__70765,cached,cached_set,linked_results,key,channels,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_70799,inst_70790,inst_71069,inst_71129,inst_71097,inst_70797,inst_71096,inst_70803,inst_71140,inst_71068,inst_70800,inst_70795,inst_71137,inst_70794,inst_71104,inst_71139,inst_71098,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_71148 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(entity_path_cache,inst_71147);
var state_71287__$1 = state_71287;
var statearr_71419_74766 = state_71287__$1;
(statearr_71419_74766[(2)] = inst_71148);

(statearr_71419_74766[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (54))){
var inst_70948 = (state_71287[(27)]);
var inst_70958 = (state_71287[(2)]);
var inst_70959 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_70948,inst_70958);
var state_71287__$1 = state_71287;
var statearr_71424_74769 = state_71287__$1;
(statearr_71424_74769[(2)] = inst_70959);

(statearr_71424_74769[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (92))){
var inst_71115 = (state_71287[(41)]);
var state_71287__$1 = state_71287;
var statearr_71428_74770 = state_71287__$1;
(statearr_71428_74770[(2)] = inst_71115);

(statearr_71428_74770[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (104))){
var inst_71177 = (state_71287[(42)]);
var inst_71189 = cljs.core.async.close_BANG_(inst_71177);
var state_71287__$1 = state_71287;
var statearr_71429_74772 = state_71287__$1;
(statearr_71429_74772[(2)] = inst_71189);

(statearr_71429_74772[(1)] = (105));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (15))){
var inst_70797 = (state_71287[(7)]);
var inst_70800 = (state_71287[(8)]);
var inst_70794 = (state_71287[(9)]);
var inst_71041 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71042 = [inst_70794,inst_70797,inst_70800];
var inst_71043 = (new cljs.core.PersistentVector(null,3,(5),inst_71041,inst_71042,null));
var inst_71044 = com.wsscode.pathom.core.cache_contains_QMARK_(env,inst_71043);
var state_71287__$1 = state_71287;
if(inst_71044){
var statearr_71433_74773 = state_71287__$1;
(statearr_71433_74773[(1)] = (71));

} else {
var statearr_71434_74775 = state_71287__$1;
(statearr_71434_74775[(1)] = (72));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (48))){
var inst_71014 = (state_71287[(2)]);
var state_71287__$1 = state_71287;
var statearr_71438_74776 = state_71287__$1;
(statearr_71438_74776[(2)] = inst_71014);

(statearr_71438_74776[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (50))){
var inst_70948 = (state_71287[(27)]);
var inst_70961 = cljs.core.async.close_BANG_(inst_70948);
var state_71287__$1 = state_71287;
var statearr_71439_74777 = state_71287__$1;
(statearr_71439_74777[(2)] = inst_70961);

(statearr_71439_74777[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (116))){
var inst_71224 = (state_71287[(43)]);
var inst_71236 = cljs.core.async.close_BANG_(inst_71224);
var state_71287__$1 = state_71287;
var statearr_71443_74780 = state_71287__$1;
(statearr_71443_74780[(2)] = inst_71236);

(statearr_71443_74780[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (75))){
var inst_70799 = (state_71287[(14)]);
var inst_70790 = (state_71287[(15)]);
var inst_71069 = (state_71287[(31)]);
var inst_71072 = (state_71287[(44)]);
var inst_70797 = (state_71287[(7)]);
var inst_71062 = (state_71287[(18)]);
var inst_70803 = (state_71287[(16)]);
var inst_71068 = (state_71287[(36)]);
var inst_70800 = (state_71287[(8)]);
var inst_70795 = (state_71287[(17)]);
var inst_71054 = (state_71287[(19)]);
var inst_70794 = (state_71287[(9)]);
var inst_71066 = (state_71287[(2)]);
var inst_71067 = com.wsscode.common.async_cljs.throw_err(inst_71066);
var inst_71068__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_71054,inst_71062,inst_71067);
var inst_71069__$1 = com.wsscode.pathom.connect.group_input_indexes(inst_71068__$1);
var inst_71070 = (function (){var input = inst_70795;
var items_map = inst_71069__$1;
var map__70765 = inst_70790;
var key = inst_70799;
var params = inst_70800;
var e = inst_70797;
var resolver_sym = inst_70794;
var trace_data = inst_70803;
var valid_inputs = inst_71068__$1;
return ((function (input,items_map,map__70765,key,params,e,resolver_sym,trace_data,valid_inputs,inst_70799,inst_70790,inst_71069,inst_71072,inst_70797,inst_71062,inst_70803,inst_71068,inst_70800,inst_70795,inst_71054,inst_70794,inst_71066,inst_71067,inst_71068__$1,inst_71069__$1,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__70747_SHARP_){
return com.wsscode.pathom.core.cache_contains_QMARK_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,p1__70747_SHARP_,params], null));
});
;})(input,items_map,map__70765,key,params,e,resolver_sym,trace_data,valid_inputs,inst_70799,inst_70790,inst_71069,inst_71072,inst_70797,inst_71062,inst_70803,inst_71068,inst_70800,inst_70795,inst_71054,inst_70794,inst_71066,inst_71067,inst_71068__$1,inst_71069__$1,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_71071 = cljs.core.keys(inst_71069__$1);
var inst_71072__$1 = cljs.core.group_by(inst_71070,inst_71071);
var inst_71077 = (inst_71072__$1 == null);
var inst_71078 = cljs.core.not(inst_71077);
var state_71287__$1 = (function (){var statearr_71450 = state_71287;
(statearr_71450[(31)] = inst_71069__$1);

(statearr_71450[(44)] = inst_71072__$1);

(statearr_71450[(36)] = inst_71068__$1);

return statearr_71450;
})();
if(inst_71078){
var statearr_71452_74787 = state_71287__$1;
(statearr_71452_74787[(1)] = (76));

} else {
var statearr_71453_74788 = state_71287__$1;
(statearr_71453_74788[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (99))){
var inst_70797 = (state_71287[(7)]);
var inst_71140 = (state_71287[(35)]);
var inst_71249 = (state_71287[(2)]);
var inst_71250 = cljs.core.contains_QMARK_(inst_71140,inst_70797);
var state_71287__$1 = (function (){var statearr_71458 = state_71287;
(statearr_71458[(45)] = inst_71249);

return statearr_71458;
})();
if(inst_71250){
var statearr_71459_74790 = state_71287__$1;
(statearr_71459_74790[(1)] = (121));

} else {
var statearr_71463_74791 = state_71287__$1;
(statearr_71463_74791[(1)] = (122));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (21))){
var inst_70799 = (state_71287[(14)]);
var inst_70790 = (state_71287[(15)]);
var inst_70828 = (state_71287[(46)]);
var inst_70824 = (state_71287[(47)]);
var inst_70834 = (state_71287[(48)]);
var inst_70797 = (state_71287[(7)]);
var inst_70807 = (state_71287[(49)]);
var inst_70803 = (state_71287[(16)]);
var inst_70800 = (state_71287[(8)]);
var inst_70795 = (state_71287[(17)]);
var inst_70838 = (state_71287[(50)]);
var inst_70794 = (state_71287[(9)]);
var inst_70835 = (state_71287[(51)]);
var inst_70832 = (state_71287[(2)]);
var inst_70833 = com.wsscode.common.async_cljs.throw_err(inst_70832);
var inst_70834__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_70824,inst_70828,inst_70833);
var inst_70835__$1 = com.wsscode.pathom.connect.group_input_indexes(inst_70834__$1);
var inst_70836 = (function (){var input = inst_70795;
var items_map = inst_70835__$1;
var map__70765 = inst_70790;
var key = inst_70799;
var params = inst_70800;
var trace_id__22799__auto__ = inst_70807;
var e = inst_70797;
var resolver_sym = inst_70794;
var trace_data = inst_70803;
var valid_inputs = inst_70834__$1;
return ((function (input,items_map,map__70765,key,params,trace_id__22799__auto__,e,resolver_sym,trace_data,valid_inputs,inst_70799,inst_70790,inst_70828,inst_70824,inst_70834,inst_70797,inst_70807,inst_70803,inst_70800,inst_70795,inst_70838,inst_70794,inst_70835,inst_70832,inst_70833,inst_70834__$1,inst_70835__$1,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__70747_SHARP_){
return com.wsscode.pathom.core.cache_contains_QMARK_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,p1__70747_SHARP_,params], null));
});
;})(input,items_map,map__70765,key,params,trace_id__22799__auto__,e,resolver_sym,trace_data,valid_inputs,inst_70799,inst_70790,inst_70828,inst_70824,inst_70834,inst_70797,inst_70807,inst_70803,inst_70800,inst_70795,inst_70838,inst_70794,inst_70835,inst_70832,inst_70833,inst_70834__$1,inst_70835__$1,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_70837 = cljs.core.keys(inst_70835__$1);
var inst_70838__$1 = cljs.core.group_by(inst_70836,inst_70837);
var inst_70844 = (inst_70838__$1 == null);
var inst_70845 = cljs.core.not(inst_70844);
var state_71287__$1 = (function (){var statearr_71470 = state_71287;
(statearr_71470[(48)] = inst_70834__$1);

(statearr_71470[(50)] = inst_70838__$1);

(statearr_71470[(51)] = inst_70835__$1);

return statearr_71470;
})();
if(inst_70845){
var statearr_71471_74800 = state_71287__$1;
(statearr_71471_74800[(1)] = (22));

} else {
var statearr_71472_74801 = state_71287__$1;
(statearr_71472_74801[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (31))){
var state_71287__$1 = state_71287;
var statearr_71473_74802 = state_71287__$1;
(statearr_71473_74802[(2)] = null);

(statearr_71473_74802[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (113))){
var inst_71197 = (state_71287[(25)]);
var inst_71225 = (state_71287[(52)]);
var inst_71221 = cljs.core.first(inst_71197);
var inst_71222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71221,(0),null);
var inst_71223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71221,(1),null);
var inst_71224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71223,(0),null);
var inst_71225__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71223,(1),null);
var state_71287__$1 = (function (){var statearr_71481 = state_71287;
(statearr_71481[(53)] = inst_71222);

(statearr_71481[(52)] = inst_71225__$1);

(statearr_71481[(43)] = inst_71224);

return statearr_71481;
})();
if(cljs.core.truth_(inst_71225__$1)){
var statearr_71483_74804 = state_71287__$1;
(statearr_71483_74804[(1)] = (115));

} else {
var statearr_71484_74805 = state_71287__$1;
(statearr_71484_74805[(1)] = (116));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (32))){
var state_71287__$1 = state_71287;
var statearr_71485_74808 = state_71287__$1;
(statearr_71485_74808[(2)] = null);

(statearr_71485_74808[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (40))){
var inst_70886 = (state_71287[(2)]);
var inst_70887 = com.wsscode.common.async_cljs.throw_err(inst_70886);
var state_71287__$1 = state_71287;
var statearr_71488_74811 = state_71287__$1;
(statearr_71488_74811[(2)] = inst_70887);

(statearr_71488_74811[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (91))){
var inst_71115 = (state_71287[(41)]);
var state_71287__$1 = state_71287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71287__$1,(94),inst_71115);
} else {
if((state_val_71291 === (117))){
var inst_71197 = (state_71287[(25)]);
var inst_71238 = (state_71287[(2)]);
var inst_71239 = cljs.core.next(inst_71197);
var inst_71160 = inst_71239;
var inst_71161 = null;
var inst_71162 = (0);
var inst_71163 = (0);
var state_71287__$1 = (function (){var statearr_71496 = state_71287;
(statearr_71496[(54)] = inst_71161);

(statearr_71496[(24)] = inst_71160);

(statearr_71496[(55)] = inst_71238);

(statearr_71496[(56)] = inst_71162);

(statearr_71496[(57)] = inst_71163);

return statearr_71496;
})();
var statearr_71497_74813 = state_71287__$1;
(statearr_71497_74813[(2)] = null);

(statearr_71497_74813[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (108))){
var inst_71177 = (state_71287[(42)]);
var inst_71186 = (state_71287[(2)]);
var inst_71187 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_71177,inst_71186);
var state_71287__$1 = state_71287;
var statearr_71501_74816 = state_71287__$1;
(statearr_71501_74816[(2)] = inst_71187);

(statearr_71501_74816[(1)] = (105));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (56))){
var state_71287__$1 = state_71287;
var statearr_71502_74817 = state_71287__$1;
(statearr_71502_74817[(2)] = null);

(statearr_71502_74817[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (33))){
var inst_70874 = (state_71287[(58)]);
var inst_70896 = (state_71287[(59)]);
var inst_70865 = (state_71287[(60)]);
var inst_70866 = (state_71287[(61)]);
var inst_70896__$1 = (state_71287[(2)]);
var inst_70901 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_70902 = cljs.core.count(inst_70896__$1);
var inst_70903 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_70902];
var inst_70904 = cljs.core.PersistentHashMap.fromArrays(inst_70901,inst_70903);
var inst_70905 = com.wsscode.pathom.trace.trace(env,inst_70904);
var inst_70906 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_70874,inst_70896__$1);
var inst_70907 = cljs.core.zipmap(inst_70866,inst_70906);
var inst_70908 = cljs.core.set(inst_70865);
var inst_70912 = cljs.core.first(inst_70896__$1);
var inst_70913 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_70912);
var inst_70914 = cljs.core.count(path);
var inst_70915 = (inst_70914 >= (2));
var inst_70916 = ((inst_70913) && (inst_70915));
var state_71287__$1 = (function (){var statearr_71509 = state_71287;
(statearr_71509[(62)] = inst_70908);

(statearr_71509[(63)] = inst_70905);

(statearr_71509[(64)] = inst_70907);

(statearr_71509[(59)] = inst_70896__$1);

return statearr_71509;
})();
if(cljs.core.truth_(inst_70916)){
var statearr_71510_74823 = state_71287__$1;
(statearr_71510_74823[(1)] = (41));

} else {
var statearr_71511_74824 = state_71287__$1;
(statearr_71511_74824[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (13))){
var inst_70799 = (state_71287[(14)]);
var inst_70790 = (state_71287[(15)]);
var inst_70797 = (state_71287[(7)]);
var inst_70795 = (state_71287[(17)]);
var inst_70794 = (state_71287[(9)]);
var inst_70790__$1 = (state_71287[(2)]);
var inst_70794__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70790__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var inst_70795__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70790__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_70796 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var inst_70797__$1 = cljs.core.select_keys(inst_70796,inst_70795__$1);
var inst_70798 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_70799__$1 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_70798);
var inst_70800 = com.wsscode.pathom.core.params(env);
var inst_70801 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_70802 = [inst_70799__$1,inst_70794__$1,inst_70797__$1];
var inst_70803 = cljs.core.PersistentHashMap.fromArrays(inst_70801,inst_70802);
var inst_70804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_71287__$1 = (function (){var statearr_71517 = state_71287;
(statearr_71517[(14)] = inst_70799__$1);

(statearr_71517[(15)] = inst_70790__$1);

(statearr_71517[(7)] = inst_70797__$1);

(statearr_71517[(16)] = inst_70803);

(statearr_71517[(8)] = inst_70800);

(statearr_71517[(17)] = inst_70795__$1);

(statearr_71517[(9)] = inst_70794__$1);

return statearr_71517;
})();
if(cljs.core.truth_(inst_70804)){
var statearr_71520_74829 = state_71287__$1;
(statearr_71520_74829[(1)] = (14));

} else {
var statearr_71521_74831 = state_71287__$1;
(statearr_71521_74831[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (22))){
var inst_70838 = (state_71287[(50)]);
var inst_70848 = inst_70838.cljs$lang$protocol_mask$partition0$;
var inst_70849 = (inst_70848 & (64));
var inst_70850 = inst_70838.cljs$core$ISeq$;
var inst_70851 = (cljs.core.PROTOCOL_SENTINEL === inst_70850);
var inst_70852 = ((inst_70849) || (inst_70851));
var state_71287__$1 = state_71287;
if(cljs.core.truth_(inst_70852)){
var statearr_71529_74834 = state_71287__$1;
(statearr_71529_74834[(1)] = (25));

} else {
var statearr_71530_74835 = state_71287__$1;
(statearr_71530_74835[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (90))){
var inst_71098 = (state_71287[(40)]);
var inst_71115 = (state_71287[(41)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_71287,(89),new cljs.core.Keyword(null,"default","default",-1987822328),null,(88));
var inst_71115__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_71098);
var inst_71116 = com.wsscode.common.async_cljs.chan_QMARK_(inst_71115__$1);
var state_71287__$1 = (function (){var statearr_71531 = state_71287;
(statearr_71531[(41)] = inst_71115__$1);

return statearr_71531;
})();
if(inst_71116){
var statearr_71532_74838 = state_71287__$1;
(statearr_71532_74838[(1)] = (91));

} else {
var statearr_71536_74840 = state_71287__$1;
(statearr_71536_74840[(1)] = (92));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (109))){
var inst_71197 = (state_71287[(25)]);
var inst_71203 = cljs.core.chunked_seq_QMARK_(inst_71197);
var state_71287__$1 = state_71287;
if(inst_71203){
var statearr_71537_74844 = state_71287__$1;
(statearr_71537_74844[(1)] = (112));

} else {
var statearr_71541_74845 = state_71287__$1;
(statearr_71541_74845[(1)] = (113));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (36))){
var inst_70882 = (state_71287[(65)]);
var inst_70866 = (state_71287[(61)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_71287,(35),new cljs.core.Keyword(null,"default","default",-1987822328),null,(34));
var inst_70882__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_70866);
var inst_70883 = com.wsscode.common.async_cljs.chan_QMARK_(inst_70882__$1);
var state_71287__$1 = (function (){var statearr_71542 = state_71287;
(statearr_71542[(65)] = inst_70882__$1);

return statearr_71542;
})();
if(inst_70883){
var statearr_71543_74848 = state_71287__$1;
(statearr_71543_74848[(1)] = (37));

} else {
var statearr_71544_74849 = state_71287__$1;
(statearr_71544_74849[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (41))){
var inst_70799 = (state_71287[(14)]);
var inst_70790 = (state_71287[(15)]);
var inst_70874 = (state_71287[(58)]);
var inst_70908 = (state_71287[(62)]);
var inst_70905 = (state_71287[(63)]);
var inst_70834 = (state_71287[(48)]);
var inst_70907 = (state_71287[(64)]);
var inst_70797 = (state_71287[(7)]);
var inst_70807 = (state_71287[(49)]);
var inst_70896 = (state_71287[(59)]);
var inst_70803 = (state_71287[(16)]);
var inst_70864 = (state_71287[(66)]);
var inst_70800 = (state_71287[(8)]);
var inst_70795 = (state_71287[(17)]);
var inst_70865 = (state_71287[(60)]);
var inst_70794 = (state_71287[(9)]);
var inst_70866 = (state_71287[(61)]);
var inst_70835 = (state_71287[(51)]);
var inst_70918 = (function (){var input = inst_70795;
var items_map = inst_70835;
var map__70765 = inst_70790;
var map__70823 = inst_70864;
var cached = inst_70865;
var cached_set = inst_70908;
var linked_results = inst_70907;
var key = inst_70799;
var channels = inst_70874;
var _ = inst_70905;
var params = inst_70800;
var uncached = inst_70866;
var trace_id__22799__auto__ = inst_70807;
var e = inst_70797;
var resolver_sym = inst_70794;
var trace_data = inst_70803;
var valid_inputs = inst_70834;
var batch_result = inst_70896;
return ((function (input,items_map,map__70765,map__70823,cached,cached_set,linked_results,key,channels,_,params,uncached,trace_id__22799__auto__,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_70799,inst_70790,inst_70874,inst_70908,inst_70905,inst_70834,inst_70907,inst_70797,inst_70807,inst_70896,inst_70803,inst_70864,inst_70800,inst_70795,inst_70865,inst_70794,inst_70866,inst_70835,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap(cache){
var path__$1 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),(cljs.core.count(path) - (2)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path__$1,input,items_map,map__70765,map__70823,cached,cached_set,linked_results,key,channels,_,params,uncached,trace_id__22799__auto__,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_70799,inst_70790,inst_70874,inst_70908,inst_70905,inst_70834,inst_70907,inst_70797,inst_70807,inst_70896,inst_70803,inst_70864,inst_70800,inst_70795,inst_70865,inst_70794,inst_70866,inst_70835,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce(cache__$1,p__71556){
var vec__71561 = p__71556;
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71561,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71561,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__71561,item,result,path__$1,input,items_map,map__70765,map__70823,cached,cached_set,linked_results,key,channels,_,params,uncached,trace_id__22799__auto__,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_70799,inst_70790,inst_70874,inst_70908,inst_70905,inst_70834,inst_70907,inst_70797,inst_70807,inst_70896,inst_70803,inst_70864,inst_70800,inst_70795,inst_70865,inst_70794,inst_70866,inst_70835,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce_$_entity_path_inner_reduce(cache__$2,index){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cache__$2,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,index),((function (vec__71561,item,result,path__$1,input,items_map,map__70765,map__70823,cached,cached_set,linked_results,key,channels,_,params,uncached,trace_id__22799__auto__,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_70799,inst_70790,inst_70874,inst_70908,inst_70905,inst_70834,inst_70907,inst_70797,inst_70807,inst_70896,inst_70803,inst_70864,inst_70800,inst_70795,inst_70865,inst_70794,inst_70866,inst_70835,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__70750_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result,p1__70750_SHARP_], 0));
});})(vec__71561,item,result,path__$1,input,items_map,map__70765,map__70823,cached,cached_set,linked_results,key,channels,_,params,uncached,trace_id__22799__auto__,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_70799,inst_70790,inst_70874,inst_70908,inst_70905,inst_70834,inst_70907,inst_70797,inst_70807,inst_70896,inst_70803,inst_70864,inst_70800,inst_70795,inst_70865,inst_70794,inst_70866,inst_70835,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache))
);
});})(vec__71561,item,result,path__$1,input,items_map,map__70765,map__70823,cached,cached_set,linked_results,key,channels,_,params,uncached,trace_id__22799__auto__,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_70799,inst_70790,inst_70874,inst_70908,inst_70905,inst_70834,inst_70907,inst_70797,inst_70807,inst_70896,inst_70803,inst_70864,inst_70800,inst_70795,inst_70865,inst_70794,inst_70866,inst_70835,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache))
,cache__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_map,item));
});})(path__$1,input,items_map,map__70765,map__70823,cached,cached_set,linked_results,key,channels,_,params,uncached,trace_id__22799__auto__,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_70799,inst_70790,inst_70874,inst_70908,inst_70905,inst_70834,inst_70907,inst_70797,inst_70807,inst_70896,inst_70803,inst_70864,inst_70800,inst_70795,inst_70865,inst_70794,inst_70866,inst_70835,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache))
,cache,cljs.core.zipmap(uncached,batch_result));
});
;})(input,items_map,map__70765,map__70823,cached,cached_set,linked_results,key,channels,_,params,uncached,trace_id__22799__auto__,e,resolver_sym,trace_data,valid_inputs,batch_result,inst_70799,inst_70790,inst_70874,inst_70908,inst_70905,inst_70834,inst_70907,inst_70797,inst_70807,inst_70896,inst_70803,inst_70864,inst_70800,inst_70795,inst_70865,inst_70794,inst_70866,inst_70835,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_70919 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(entity_path_cache,inst_70918);
var state_71287__$1 = state_71287;
var statearr_71567_74869 = state_71287__$1;
(statearr_71567_74869[(2)] = inst_70919);

(statearr_71567_74869[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (118))){
var inst_71225 = (state_71287[(52)]);
var state_71287__$1 = state_71287;
var statearr_71568_74873 = state_71287__$1;
(statearr_71568_74873[(2)] = inst_71225);

(statearr_71568_74873[(1)] = (120));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (89))){
var inst_71110 = (state_71287[(2)]);
var inst_71111 = com.wsscode.pathom.connect.parallel_batch_error(env,inst_71110);
var state_71287__$1 = state_71287;
var statearr_71576_74875 = state_71287__$1;
(statearr_71576_74875[(2)] = inst_71111);


cljs.core.async.impl.ioc_helpers.process_exception(state_71287__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (100))){
var inst_71178 = (state_71287[(30)]);
var inst_71161 = (state_71287[(54)]);
var inst_71163 = (state_71287[(57)]);
var inst_71174 = cljs.core._nth(inst_71161,inst_71163);
var inst_71175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71174,(0),null);
var inst_71176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71174,(1),null);
var inst_71177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71176,(0),null);
var inst_71178__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71176,(1),null);
var state_71287__$1 = (function (){var statearr_71577 = state_71287;
(statearr_71577[(30)] = inst_71178__$1);

(statearr_71577[(67)] = inst_71175);

(statearr_71577[(42)] = inst_71177);

return statearr_71577;
})();
if(cljs.core.truth_(inst_71178__$1)){
var statearr_71581_74878 = state_71287__$1;
(statearr_71581_74878[(1)] = (103));

} else {
var statearr_71582_74879 = state_71287__$1;
(statearr_71582_74879[(1)] = (104));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (122))){
var inst_70797 = (state_71287[(7)]);
var inst_71139 = (state_71287[(39)]);
var inst_71263 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71267 = cljs.core.PersistentHashMap.EMPTY;
var inst_71268 = [null,inst_71267];
var inst_71269 = (new cljs.core.PersistentVector(null,2,(5),inst_71263,inst_71268,null));
var inst_71270 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_71139,inst_70797,inst_71269);
var inst_71271 = cljs.core.second(inst_71270);
var state_71287__$1 = state_71287;
var statearr_71586_74882 = state_71287__$1;
(statearr_71586_74882[(2)] = inst_71271);

(statearr_71586_74882[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (43))){
var inst_70907 = (state_71287[(64)]);
var inst_70922 = (state_71287[(2)]);
var inst_70927 = cljs.core.seq(inst_70907);
var inst_70928 = inst_70927;
var inst_70929 = null;
var inst_70930 = (0);
var inst_70931 = (0);
var state_71287__$1 = (function (){var statearr_71587 = state_71287;
(statearr_71587[(20)] = inst_70930);

(statearr_71587[(21)] = inst_70928);

(statearr_71587[(22)] = inst_70929);

(statearr_71587[(68)] = inst_70922);

(statearr_71587[(23)] = inst_70931);

return statearr_71587;
})();
var statearr_71591_74884 = state_71287__$1;
(statearr_71591_74884[(2)] = null);

(statearr_71591_74884[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (61))){
var inst_70989 = (state_71287[(11)]);
var state_71287__$1 = state_71287;
if(cljs.core.truth_(inst_70989)){
var statearr_71592_74885 = state_71287__$1;
(statearr_71592_74885[(1)] = (64));

} else {
var statearr_71593_74889 = state_71287__$1;
(statearr_71593_74889[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (29))){
var inst_70838 = (state_71287[(50)]);
var state_71287__$1 = state_71287;
var statearr_71594_74890 = state_71287__$1;
(statearr_71594_74890[(2)] = inst_70838);

(statearr_71594_74890[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (44))){
var inst_70930 = (state_71287[(20)]);
var inst_70931 = (state_71287[(23)]);
var inst_70933 = (inst_70931 < inst_70930);
var inst_70934 = inst_70933;
var state_71287__$1 = state_71287;
if(cljs.core.truth_(inst_70934)){
var statearr_71600_74892 = state_71287__$1;
(statearr_71600_74892[(1)] = (46));

} else {
var statearr_71601_74893 = state_71287__$1;
(statearr_71601_74893[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (93))){
var inst_71123 = (state_71287[(2)]);
var inst_71124 = com.wsscode.common.async_cljs.throw_err(inst_71123);
var state_71287__$1 = state_71287;
var statearr_71604_74894 = state_71287__$1;
(statearr_71604_74894[(2)] = inst_71124);


cljs.core.async.impl.ioc_helpers.process_exception(state_71287__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (6))){
var state_71287__$1 = state_71287;
var statearr_71605_74895 = state_71287__$1;
(statearr_71605_74895[(2)] = false);

(statearr_71605_74895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (111))){
var inst_71245 = (state_71287[(2)]);
var state_71287__$1 = state_71287;
var statearr_71610_74898 = state_71287__$1;
(statearr_71610_74898[(2)] = inst_71245);

(statearr_71610_74898[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (28))){
var inst_70838 = (state_71287[(50)]);
var inst_70861 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_70838);
var state_71287__$1 = state_71287;
var statearr_71614_74901 = state_71287__$1;
(statearr_71614_74901[(2)] = inst_70861);

(statearr_71614_74901[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (64))){
var inst_70989 = (state_71287[(11)]);
var state_71287__$1 = state_71287;
var statearr_71618_74902 = state_71287__$1;
(statearr_71618_74902[(2)] = inst_70989);

(statearr_71618_74902[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (103))){
var inst_71178 = (state_71287[(30)]);
var state_71287__$1 = state_71287;
if(cljs.core.truth_(inst_71178)){
var statearr_71622_74903 = state_71287__$1;
(statearr_71622_74903[(1)] = (106));

} else {
var statearr_71623_74904 = state_71287__$1;
(statearr_71623_74904[(1)] = (107));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (51))){
var inst_70930 = (state_71287[(20)]);
var inst_70928 = (state_71287[(21)]);
var inst_70929 = (state_71287[(22)]);
var inst_70931 = (state_71287[(23)]);
var inst_70963 = (state_71287[(2)]);
var inst_70964 = (inst_70931 + (1));
var tmp71615 = inst_70930;
var tmp71616 = inst_70928;
var tmp71617 = inst_70929;
var inst_70928__$1 = tmp71616;
var inst_70929__$1 = tmp71617;
var inst_70930__$1 = tmp71615;
var inst_70931__$1 = inst_70964;
var state_71287__$1 = (function (){var statearr_71627 = state_71287;
(statearr_71627[(20)] = inst_70930__$1);

(statearr_71627[(69)] = inst_70963);

(statearr_71627[(21)] = inst_70928__$1);

(statearr_71627[(22)] = inst_70929__$1);

(statearr_71627[(23)] = inst_70931__$1);

return statearr_71627;
})();
var statearr_71628_74906 = state_71287__$1;
(statearr_71628_74906[(2)] = null);

(statearr_71628_74906[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (25))){
var state_71287__$1 = state_71287;
var statearr_71629_74907 = state_71287__$1;
(statearr_71629_74907[(2)] = true);

(statearr_71629_74907[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (34))){
var inst_70893 = (state_71287[(2)]);
var state_71287__$1 = state_71287;
var statearr_71633_74910 = state_71287__$1;
(statearr_71633_74910[(2)] = inst_70893);

(statearr_71633_74910[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (17))){
var inst_70797 = (state_71287[(7)]);
var inst_70800 = (state_71287[(8)]);
var inst_70794 = (state_71287[(9)]);
var inst_70813 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70814 = [inst_70794,inst_70797,inst_70800];
var inst_70818 = (new cljs.core.PersistentVector(null,3,(5),inst_70813,inst_70814,null));
var inst_70819 = com.wsscode.pathom.core.cache_read(env,inst_70818);
var state_71287__$1 = state_71287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71287__$1,(20),inst_70819);
} else {
if((state_val_71291 === (3))){
var inst_70761 = (state_71287[(2)]);
var state_71287__$1 = state_71287;
var statearr_71639_74913 = state_71287__$1;
(statearr_71639_74913[(2)] = inst_70761);


cljs.core.async.impl.ioc_helpers.process_exception(state_71287__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (12))){
var inst_70766 = (state_71287[(29)]);
var state_71287__$1 = state_71287;
var statearr_71642_74914 = state_71287__$1;
(statearr_71642_74914[(2)] = inst_70766);

(statearr_71642_74914[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (2))){
var inst_71279 = (state_71287[(2)]);
var state_71287__$1 = state_71287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71287__$1,inst_71279);
} else {
if((state_val_71291 === (66))){
var inst_70988 = (state_71287[(10)]);
var inst_70999 = (state_71287[(2)]);
var inst_71000 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_70988,inst_70999);
var state_71287__$1 = state_71287;
var statearr_71647_74916 = state_71287__$1;
(statearr_71647_74916[(2)] = inst_71000);

(statearr_71647_74916[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (107))){
var inst_71184 = cljs.core.PersistentHashMap.EMPTY;
var state_71287__$1 = state_71287;
var statearr_71651_74919 = state_71287__$1;
(statearr_71651_74919[(2)] = inst_71184);

(statearr_71651_74919[(1)] = (108));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (23))){
var state_71287__$1 = state_71287;
var statearr_71652_74920 = state_71287__$1;
(statearr_71652_74920[(2)] = false);

(statearr_71652_74920[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (47))){
var inst_70928 = (state_71287[(21)]);
var inst_70967 = (state_71287[(12)]);
var inst_70967__$1 = cljs.core.seq(inst_70928);
var state_71287__$1 = (function (){var statearr_71656 = state_71287;
(statearr_71656[(12)] = inst_70967__$1);

return statearr_71656;
})();
if(inst_70967__$1){
var statearr_71657_74923 = state_71287__$1;
(statearr_71657_74923[(1)] = (55));

} else {
var statearr_71658_74924 = state_71287__$1;
(statearr_71658_74924[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (35))){
var inst_70877 = (state_71287[(2)]);
var inst_70878 = com.wsscode.pathom.connect.parallel_batch_error(env,inst_70877);
var state_71287__$1 = state_71287;
var statearr_71662_74925 = state_71287__$1;
(statearr_71662_74925[(2)] = inst_70878);


cljs.core.async.impl.ioc_helpers.process_exception(state_71287__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (82))){
var inst_71072 = (state_71287[(44)]);
var inst_71093 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_71072);
var state_71287__$1 = state_71287;
var statearr_71663_74927 = state_71287__$1;
(statearr_71663_74927[(2)] = inst_71093);

(statearr_71663_74927[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (76))){
var inst_71072 = (state_71287[(44)]);
var inst_71080 = inst_71072.cljs$lang$protocol_mask$partition0$;
var inst_71081 = (inst_71080 & (64));
var inst_71082 = inst_71072.cljs$core$ISeq$;
var inst_71083 = (cljs.core.PROTOCOL_SENTINEL === inst_71082);
var inst_71084 = ((inst_71081) || (inst_71083));
var state_71287__$1 = state_71287;
if(cljs.core.truth_(inst_71084)){
var statearr_71667_74930 = state_71287__$1;
(statearr_71667_74930[(1)] = (79));

} else {
var statearr_71668_74931 = state_71287__$1;
(statearr_71668_74931[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (97))){
var inst_71139 = (state_71287[(39)]);
var inst_71151 = (state_71287[(2)]);
var inst_71156 = cljs.core.seq(inst_71139);
var inst_71160 = inst_71156;
var inst_71161 = null;
var inst_71162 = (0);
var inst_71163 = (0);
var state_71287__$1 = (function (){var statearr_71669 = state_71287;
(statearr_71669[(54)] = inst_71161);

(statearr_71669[(70)] = inst_71151);

(statearr_71669[(24)] = inst_71160);

(statearr_71669[(56)] = inst_71162);

(statearr_71669[(57)] = inst_71163);

return statearr_71669;
})();
var statearr_71675_74934 = state_71287__$1;
(statearr_71675_74934[(2)] = null);

(statearr_71675_74934[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (19))){
var inst_70807 = (state_71287[(49)]);
var inst_70803 = (state_71287[(16)]);
var inst_71035 = (state_71287[(2)]);
var inst_71037 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_70803,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_71038 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_70807,inst_71037);
var state_71287__$1 = (function (){var statearr_71677 = state_71287;
(statearr_71677[(71)] = inst_71038);

return statearr_71677;
})();
var statearr_71679_74936 = state_71287__$1;
(statearr_71679_74936[(2)] = inst_71035);

(statearr_71679_74936[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (57))){
var inst_71011 = (state_71287[(2)]);
var state_71287__$1 = state_71287;
var statearr_71680_74937 = state_71287__$1;
(statearr_71680_74937[(2)] = inst_71011);

(statearr_71680_74937[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (68))){
var inst_70907 = (state_71287[(64)]);
var inst_70797 = (state_71287[(7)]);
var inst_71026 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71027 = cljs.core.PersistentHashMap.EMPTY;
var inst_71028 = [null,inst_71027];
var inst_71029 = (new cljs.core.PersistentVector(null,2,(5),inst_71026,inst_71028,null));
var inst_71030 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_70907,inst_70797,inst_71029);
var inst_71031 = cljs.core.second(inst_71030);
var state_71287__$1 = state_71287;
var statearr_71688_74942 = state_71287__$1;
(statearr_71688_74942[(2)] = inst_71031);

(statearr_71688_74942[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (11))){
var inst_70766 = (state_71287[(29)]);
var inst_70787 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_70766);
var state_71287__$1 = state_71287;
var statearr_71689_74943 = state_71287__$1;
(statearr_71689_74943[(2)] = inst_70787);

(statearr_71689_74943[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (115))){
var inst_71225 = (state_71287[(52)]);
var state_71287__$1 = state_71287;
if(cljs.core.truth_(inst_71225)){
var statearr_71693_74944 = state_71287__$1;
(statearr_71693_74944[(1)] = (118));

} else {
var statearr_71694_74945 = state_71287__$1;
(statearr_71694_74945[(1)] = (119));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (9))){
var state_71287__$1 = state_71287;
var statearr_71698_74947 = state_71287__$1;
(statearr_71698_74947[(2)] = false);

(statearr_71698_74947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (5))){
var inst_70766 = (state_71287[(29)]);
var inst_70774 = inst_70766.cljs$lang$protocol_mask$partition0$;
var inst_70775 = (inst_70774 & (64));
var inst_70776 = inst_70766.cljs$core$ISeq$;
var inst_70777 = (cljs.core.PROTOCOL_SENTINEL === inst_70776);
var inst_70778 = ((inst_70775) || (inst_70777));
var state_71287__$1 = state_71287;
if(cljs.core.truth_(inst_70778)){
var statearr_71699_74950 = state_71287__$1;
(statearr_71699_74950[(1)] = (8));

} else {
var statearr_71700_74951 = state_71287__$1;
(statearr_71700_74951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (112))){
var inst_71197 = (state_71287[(25)]);
var inst_71205 = cljs.core.chunk_first(inst_71197);
var inst_71210 = cljs.core.chunk_rest(inst_71197);
var inst_71211 = cljs.core.count(inst_71205);
var inst_71160 = inst_71210;
var inst_71161 = inst_71205;
var inst_71162 = inst_71211;
var inst_71163 = (0);
var state_71287__$1 = (function (){var statearr_71704 = state_71287;
(statearr_71704[(54)] = inst_71161);

(statearr_71704[(24)] = inst_71160);

(statearr_71704[(56)] = inst_71162);

(statearr_71704[(57)] = inst_71163);

return statearr_71704;
})();
var statearr_71705_74954 = state_71287__$1;
(statearr_71705_74954[(2)] = null);

(statearr_71705_74954[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (83))){
var inst_71072 = (state_71287[(44)]);
var state_71287__$1 = state_71287;
var statearr_71706_74955 = state_71287__$1;
(statearr_71706_74955[(2)] = inst_71072);

(statearr_71706_74955[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (14))){
var inst_70797 = (state_71287[(7)]);
var inst_70803 = (state_71287[(16)]);
var inst_70800 = (state_71287[(8)]);
var inst_70794 = (state_71287[(9)]);
var inst_70806 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_70803,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_70807 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_70806);
var inst_70808 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70809 = [inst_70794,inst_70797,inst_70800];
var inst_70810 = (new cljs.core.PersistentVector(null,3,(5),inst_70808,inst_70809,null));
var inst_70811 = com.wsscode.pathom.core.cache_contains_QMARK_(env,inst_70810);
var state_71287__$1 = (function (){var statearr_71707 = state_71287;
(statearr_71707[(49)] = inst_70807);

return statearr_71707;
})();
if(inst_70811){
var statearr_71708_74960 = state_71287__$1;
(statearr_71708_74960[(1)] = (17));

} else {
var statearr_71709_74961 = state_71287__$1;
(statearr_71709_74961[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (45))){
var inst_70908 = (state_71287[(62)]);
var inst_70797 = (state_71287[(7)]);
var inst_71016 = (state_71287[(2)]);
var inst_71017 = cljs.core.contains_QMARK_(inst_70908,inst_70797);
var state_71287__$1 = (function (){var statearr_71710 = state_71287;
(statearr_71710[(72)] = inst_71016);

return statearr_71710;
})();
if(inst_71017){
var statearr_71711_74962 = state_71287__$1;
(statearr_71711_74962[(1)] = (67));

} else {
var statearr_71712_74963 = state_71287__$1;
(statearr_71712_74963[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (53))){
var inst_70956 = cljs.core.PersistentHashMap.EMPTY;
var state_71287__$1 = state_71287;
var statearr_71713_74964 = state_71287__$1;
(statearr_71713_74964[(2)] = inst_70956);

(statearr_71713_74964[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (78))){
var inst_71091 = (state_71287[(2)]);
var state_71287__$1 = state_71287;
if(cljs.core.truth_(inst_71091)){
var statearr_71715_74966 = state_71287__$1;
(statearr_71715_74966[(1)] = (82));

} else {
var statearr_71716_74967 = state_71287__$1;
(statearr_71716_74967[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (26))){
var state_71287__$1 = state_71287;
var statearr_71717_74970 = state_71287__$1;
(statearr_71717_74970[(2)] = false);

(statearr_71717_74970[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (123))){
var inst_71273 = (state_71287[(2)]);
var state_71287__$1 = state_71287;
var statearr_71718_74971 = state_71287__$1;
(statearr_71718_74971[(2)] = inst_71273);

(statearr_71718_74971[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (16))){
var inst_71277 = (state_71287[(2)]);
var state_71287__$1 = state_71287;
var statearr_71719_74972 = state_71287__$1;
(statearr_71719_74972[(2)] = inst_71277);


cljs.core.async.impl.ioc_helpers.process_exception(state_71287__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (81))){
var inst_71088 = (state_71287[(2)]);
var state_71287__$1 = state_71287;
var statearr_71720_74973 = state_71287__$1;
(statearr_71720_74973[(2)] = inst_71088);

(statearr_71720_74973[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (120))){
var inst_71224 = (state_71287[(43)]);
var inst_71232 = (state_71287[(2)]);
var inst_71234 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_71224,inst_71232);
var state_71287__$1 = state_71287;
var statearr_71721_74975 = state_71287__$1;
(statearr_71721_74975[(2)] = inst_71234);

(statearr_71721_74975[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (79))){
var state_71287__$1 = state_71287;
var statearr_71722_74977 = state_71287__$1;
(statearr_71722_74977[(2)] = true);

(statearr_71722_74977[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (38))){
var inst_70882 = (state_71287[(65)]);
var state_71287__$1 = state_71287;
var statearr_71723_74980 = state_71287__$1;
(statearr_71723_74980[(2)] = inst_70882);

(statearr_71723_74980[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (98))){
var inst_71162 = (state_71287[(56)]);
var inst_71163 = (state_71287[(57)]);
var inst_71165 = (inst_71163 < inst_71162);
var inst_71166 = inst_71165;
var state_71287__$1 = state_71287;
if(cljs.core.truth_(inst_71166)){
var statearr_71724_74981 = state_71287__$1;
(statearr_71724_74981[(1)] = (100));

} else {
var statearr_71725_74982 = state_71287__$1;
(statearr_71725_74982[(1)] = (101));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (124))){
var inst_71261 = (state_71287[(2)]);
var state_71287__$1 = state_71287;
var statearr_71726_74983 = state_71287__$1;
(statearr_71726_74983[(2)] = inst_71261);

(statearr_71726_74983[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (87))){
var inst_71129 = (state_71287[(32)]);
var inst_71097 = (state_71287[(33)]);
var inst_71104 = (state_71287[(38)]);
var inst_71098 = (state_71287[(40)]);
var inst_71129__$1 = (state_71287[(2)]);
var inst_71133 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_71134 = cljs.core.count(inst_71129__$1);
var inst_71135 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_71134];
var inst_71136 = cljs.core.PersistentHashMap.fromArrays(inst_71133,inst_71135);
var inst_71137 = com.wsscode.pathom.trace.trace(env,inst_71136);
var inst_71138 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_71104,inst_71129__$1);
var inst_71139 = cljs.core.zipmap(inst_71098,inst_71138);
var inst_71140 = cljs.core.set(inst_71097);
var inst_71141 = cljs.core.first(inst_71129__$1);
var inst_71142 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_71141);
var inst_71143 = cljs.core.count(path);
var inst_71144 = (inst_71143 >= (2));
var inst_71145 = ((inst_71142) && (inst_71144));
var state_71287__$1 = (function (){var statearr_71727 = state_71287;
(statearr_71727[(32)] = inst_71129__$1);

(statearr_71727[(35)] = inst_71140);

(statearr_71727[(37)] = inst_71137);

(statearr_71727[(39)] = inst_71139);

return statearr_71727;
})();
if(cljs.core.truth_(inst_71145)){
var statearr_71728_74993 = state_71287__$1;
(statearr_71728_74993[(1)] = (95));

} else {
var statearr_71729_74994 = state_71287__$1;
(statearr_71729_74994[(1)] = (96));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (30))){
var inst_70799 = (state_71287[(14)]);
var inst_70790 = (state_71287[(15)]);
var inst_70834 = (state_71287[(48)]);
var inst_70797 = (state_71287[(7)]);
var inst_70807 = (state_71287[(49)]);
var inst_70803 = (state_71287[(16)]);
var inst_70864 = (state_71287[(66)]);
var inst_70800 = (state_71287[(8)]);
var inst_70795 = (state_71287[(17)]);
var inst_70865 = (state_71287[(60)]);
var inst_70794 = (state_71287[(9)]);
var inst_70866 = (state_71287[(61)]);
var inst_70835 = (state_71287[(51)]);
var inst_70864__$1 = (state_71287[(2)]);
var inst_70865__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70864__$1,true);
var inst_70866__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_70864__$1,false);
var inst_70867 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_70868 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_70866__$1];
var inst_70869 = cljs.core.PersistentHashMap.fromArrays(inst_70867,inst_70868);
var inst_70870 = com.wsscode.pathom.trace.trace(env,inst_70869);
var inst_70873 = (function (){var input = inst_70795;
var items_map = inst_70835;
var map__70765 = inst_70790;
var map__70823 = inst_70864__$1;
var cached = inst_70865__$1;
var key = inst_70799;
var _ = inst_70870;
var params = inst_70800;
var uncached = inst_70866__$1;
var trace_id__22799__auto__ = inst_70807;
var e = inst_70797;
var resolver_sym = inst_70794;
var trace_data = inst_70803;
var valid_inputs = inst_70834;
return ((function (input,items_map,map__70765,map__70823,cached,key,_,params,uncached,trace_id__22799__auto__,e,resolver_sym,trace_data,valid_inputs,inst_70799,inst_70790,inst_70834,inst_70797,inst_70807,inst_70803,inst_70864,inst_70800,inst_70795,inst_70865,inst_70794,inst_70866,inst_70835,inst_70864__$1,inst_70865__$1,inst_70866__$1,inst_70867,inst_70868,inst_70869,inst_70870,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache){
return (function (resolver_input){
var ch = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.core.cache_hit(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,resolver_input,params], null),ch);

return ch;
});
;})(input,items_map,map__70765,map__70823,cached,key,_,params,uncached,trace_id__22799__auto__,e,resolver_sym,trace_data,valid_inputs,inst_70799,inst_70790,inst_70834,inst_70797,inst_70807,inst_70803,inst_70864,inst_70800,inst_70795,inst_70865,inst_70794,inst_70866,inst_70835,inst_70864__$1,inst_70865__$1,inst_70866__$1,inst_70867,inst_70868,inst_70869,inst_70870,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_70874 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_70873,inst_70866__$1);
var inst_70875 = cljs.core.seq(inst_70866__$1);
var state_71287__$1 = (function (){var statearr_71730 = state_71287;
(statearr_71730[(58)] = inst_70874);

(statearr_71730[(66)] = inst_70864__$1);

(statearr_71730[(60)] = inst_70865__$1);

(statearr_71730[(61)] = inst_70866__$1);

return statearr_71730;
})();
if(inst_70875){
var statearr_71731_75003 = state_71287__$1;
(statearr_71731_75003[(1)] = (31));

} else {
var statearr_71732_75007 = state_71287__$1;
(statearr_71732_75007[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (73))){
var inst_71275 = (state_71287[(2)]);
var state_71287__$1 = state_71287;
var statearr_71733_75008 = state_71287__$1;
(statearr_71733_75008[(2)] = inst_71275);

(statearr_71733_75008[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (96))){
var state_71287__$1 = state_71287;
var statearr_71734_75009 = state_71287__$1;
(statearr_71734_75009[(2)] = null);

(statearr_71734_75009[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (10))){
var inst_70782 = (state_71287[(2)]);
var state_71287__$1 = state_71287;
var statearr_71738_75010 = state_71287__$1;
(statearr_71738_75010[(2)] = inst_70782);

(statearr_71738_75010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (18))){
var inst_70799 = (state_71287[(14)]);
var inst_70790 = (state_71287[(15)]);
var inst_70797 = (state_71287[(7)]);
var inst_70807 = (state_71287[(49)]);
var inst_70803 = (state_71287[(16)]);
var inst_70800 = (state_71287[(8)]);
var inst_70795 = (state_71287[(17)]);
var inst_70794 = (state_71287[(9)]);
var inst_70824 = cljs.core.PersistentVector.EMPTY;
var inst_70825 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector);
var inst_70826 = (function (){var map__70765 = inst_70790;
var resolver_sym = inst_70794;
var input = inst_70795;
var e = inst_70797;
var key = inst_70799;
var params = inst_70800;
var trace_data = inst_70803;
var trace_id__22799__auto__ = inst_70807;
return ((function (map__70765,resolver_sym,input,e,key,params,trace_data,trace_id__22799__auto__,inst_70799,inst_70790,inst_70797,inst_70807,inst_70803,inst_70800,inst_70795,inst_70794,inst_70824,inst_70825,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__70745_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(cljs.core.second(p1__70745_SHARP_),input);
});
;})(map__70765,resolver_sym,input,e,key,params,trace_data,trace_id__22799__auto__,inst_70799,inst_70790,inst_70797,inst_70807,inst_70803,inst_70800,inst_70795,inst_70794,inst_70824,inst_70825,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_70827 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_70826);
var inst_70828 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_70825,inst_70827);
var inst_70829 = (function (){var map__70765 = inst_70790;
var resolver_sym = inst_70794;
var input = inst_70795;
var e = inst_70797;
var key = inst_70799;
var params = inst_70800;
var trace_data = inst_70803;
var trace_id__22799__auto__ = inst_70807;
return ((function (map__70765,resolver_sym,input,e,key,params,trace_data,trace_id__22799__auto__,inst_70799,inst_70790,inst_70797,inst_70807,inst_70803,inst_70800,inst_70795,inst_70794,inst_70824,inst_70825,inst_70826,inst_70827,inst_70828,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__70746_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__70746_SHARP_,input);
});
;})(map__70765,resolver_sym,input,e,key,params,trace_data,trace_id__22799__auto__,inst_70799,inst_70790,inst_70797,inst_70807,inst_70803,inst_70800,inst_70795,inst_70794,inst_70824,inst_70825,inst_70826,inst_70827,inst_70828,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_70830 = com.wsscode.pathom.connect.map_async_serial(inst_70829,processing_sequence);
var state_71287__$1 = (function (){var statearr_71739 = state_71287;
(statearr_71739[(46)] = inst_70828);

(statearr_71739[(47)] = inst_70824);

return statearr_71739;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71287__$1,(21),inst_70830);
} else {
if((state_val_71291 === (105))){
var inst_71161 = (state_71287[(54)]);
var inst_71160 = (state_71287[(24)]);
var inst_71162 = (state_71287[(56)]);
var inst_71163 = (state_71287[(57)]);
var inst_71191 = (state_71287[(2)]);
var inst_71192 = (inst_71163 + (1));
var tmp71735 = inst_71161;
var tmp71736 = inst_71160;
var tmp71737 = inst_71162;
var inst_71160__$1 = tmp71736;
var inst_71161__$1 = tmp71735;
var inst_71162__$1 = tmp71737;
var inst_71163__$1 = inst_71192;
var state_71287__$1 = (function (){var statearr_71740 = state_71287;
(statearr_71740[(73)] = inst_71191);

(statearr_71740[(54)] = inst_71161__$1);

(statearr_71740[(24)] = inst_71160__$1);

(statearr_71740[(56)] = inst_71162__$1);

(statearr_71740[(57)] = inst_71163__$1);

return statearr_71740;
})();
var statearr_71741_75019 = state_71287__$1;
(statearr_71741_75019[(2)] = null);

(statearr_71741_75019[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (52))){
var inst_70949 = (state_71287[(26)]);
var state_71287__$1 = state_71287;
var statearr_71742_75020 = state_71287__$1;
(statearr_71742_75020[(2)] = inst_70949);

(statearr_71742_75020[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (114))){
var inst_71242 = (state_71287[(2)]);
var state_71287__$1 = state_71287;
var statearr_71743_75023 = state_71287__$1;
(statearr_71743_75023[(2)] = inst_71242);

(statearr_71743_75023[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (67))){
var inst_70797 = (state_71287[(7)]);
var inst_70800 = (state_71287[(8)]);
var inst_70794 = (state_71287[(9)]);
var inst_71019 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71020 = [inst_70794,inst_70797,inst_70800];
var inst_71021 = (new cljs.core.PersistentVector(null,3,(5),inst_71019,inst_71020,null));
var inst_71022 = com.wsscode.pathom.core.cache_read(env,inst_71021);
var state_71287__$1 = state_71287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71287__$1,(70),inst_71022);
} else {
if((state_val_71291 === (71))){
var inst_70797 = (state_71287[(7)]);
var inst_70800 = (state_71287[(8)]);
var inst_70794 = (state_71287[(9)]);
var inst_71046 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71047 = [inst_70794,inst_70797,inst_70800];
var inst_71048 = (new cljs.core.PersistentVector(null,3,(5),inst_71046,inst_71047,null));
var inst_71049 = com.wsscode.pathom.core.cache_read(env,inst_71048);
var state_71287__$1 = state_71287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71287__$1,(74),inst_71049);
} else {
if((state_val_71291 === (42))){
var state_71287__$1 = state_71287;
var statearr_71744_75027 = state_71287__$1;
(statearr_71744_75027[(2)] = null);

(statearr_71744_75027[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (80))){
var state_71287__$1 = state_71287;
var statearr_71748_75028 = state_71287__$1;
(statearr_71748_75028[(2)] = false);

(statearr_71748_75028[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (37))){
var inst_70882 = (state_71287[(65)]);
var state_71287__$1 = state_71287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71287__$1,(40),inst_70882);
} else {
if((state_val_71291 === (63))){
var inst_70967 = (state_71287[(12)]);
var inst_71004 = (state_71287[(2)]);
var inst_71005 = cljs.core.next(inst_70967);
var inst_70928 = inst_71005;
var inst_70929 = null;
var inst_70930 = (0);
var inst_70931 = (0);
var state_71287__$1 = (function (){var statearr_71749 = state_71287;
(statearr_71749[(20)] = inst_70930);

(statearr_71749[(21)] = inst_70928);

(statearr_71749[(74)] = inst_71004);

(statearr_71749[(22)] = inst_70929);

(statearr_71749[(23)] = inst_70931);

return statearr_71749;
})();
var statearr_71750_75033 = state_71287__$1;
(statearr_71750_75033[(2)] = null);

(statearr_71750_75033[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (94))){
var inst_71119 = (state_71287[(2)]);
var inst_71120 = com.wsscode.common.async_cljs.throw_err(inst_71119);
var state_71287__$1 = state_71287;
var statearr_71751_75034 = state_71287__$1;
(statearr_71751_75034[(2)] = inst_71120);

(statearr_71751_75034[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (8))){
var state_71287__$1 = state_71287;
var statearr_71752_75036 = state_71287__$1;
(statearr_71752_75036[(2)] = true);

(statearr_71752_75036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (49))){
var inst_70949 = (state_71287[(26)]);
var state_71287__$1 = state_71287;
if(cljs.core.truth_(inst_70949)){
var statearr_71753_75037 = state_71287__$1;
(statearr_71753_75037[(1)] = (52));

} else {
var statearr_71755_75038 = state_71287__$1;
(statearr_71755_75038[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71291 === (84))){
var inst_70799 = (state_71287[(14)]);
var inst_70790 = (state_71287[(15)]);
var inst_71069 = (state_71287[(31)]);
var inst_71097 = (state_71287[(33)]);
var inst_70797 = (state_71287[(7)]);
var inst_71096 = (state_71287[(34)]);
var inst_70803 = (state_71287[(16)]);
var inst_71068 = (state_71287[(36)]);
var inst_70800 = (state_71287[(8)]);
var inst_70795 = (state_71287[(17)]);
var inst_70794 = (state_71287[(9)]);
var inst_71098 = (state_71287[(40)]);
var inst_71096__$1 = (state_71287[(2)]);
var inst_71097__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71096__$1,true);
var inst_71098__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71096__$1,false);
var inst_71099 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_71100 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_71098__$1];
var inst_71101 = cljs.core.PersistentHashMap.fromArrays(inst_71099,inst_71100);
var inst_71102 = com.wsscode.pathom.trace.trace(env,inst_71101);
var inst_71103 = (function (){var input = inst_70795;
var map__71053 = inst_71096__$1;
var items_map = inst_71069;
var map__70765 = inst_70790;
var cached = inst_71097__$1;
var key = inst_70799;
var _ = inst_71102;
var params = inst_70800;
var uncached = inst_71098__$1;
var e = inst_70797;
var resolver_sym = inst_70794;
var trace_data = inst_70803;
var valid_inputs = inst_71068;
return ((function (input,map__71053,items_map,map__70765,cached,key,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,inst_70799,inst_70790,inst_71069,inst_71097,inst_70797,inst_71096,inst_70803,inst_71068,inst_70800,inst_70795,inst_70794,inst_71098,inst_71096__$1,inst_71097__$1,inst_71098__$1,inst_71099,inst_71100,inst_71101,inst_71102,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache){
return (function (resolver_input){
var ch = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.core.cache_hit(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,resolver_input,params], null),ch);

return ch;
});
;})(input,map__71053,items_map,map__70765,cached,key,_,params,uncached,e,resolver_sym,trace_data,valid_inputs,inst_70799,inst_70790,inst_71069,inst_71097,inst_70797,inst_71096,inst_70803,inst_71068,inst_70800,inst_70795,inst_70794,inst_71098,inst_71096__$1,inst_71097__$1,inst_71098__$1,inst_71099,inst_71100,inst_71101,inst_71102,state_val_71291,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_71104 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_71103,inst_71098__$1);
var inst_71108 = cljs.core.seq(inst_71098__$1);
var state_71287__$1 = (function (){var statearr_71759 = state_71287;
(statearr_71759[(33)] = inst_71097__$1);

(statearr_71759[(34)] = inst_71096__$1);

(statearr_71759[(38)] = inst_71104);

(statearr_71759[(40)] = inst_71098__$1);

return statearr_71759;
})();
if(inst_71108){
var statearr_71761_75048 = state_71287__$1;
(statearr_71761_75048[(1)] = (85));

} else {
var statearr_71762_75049 = state_71287__$1;
(statearr_71762_75049[(1)] = (86));

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
});})(c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache))
;
return ((function (switch__45525__auto__,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache){
return (function() {
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__45526__auto____0 = (function (){
var statearr_71767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71767[(0)] = com$wsscode$pathom$connect$parallel_batch_$_state_machine__45526__auto__);

(statearr_71767[(1)] = (1));

return statearr_71767;
});
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__45526__auto____1 = (function (state_71287){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_71287);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e71769){if((e71769 instanceof Object)){
var ex__45529__auto__ = e71769;
var statearr_71770_75061 = state_71287;
(statearr_71770_75061[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71769;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75062 = state_71287;
state_71287 = G__75062;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_batch_$_state_machine__45526__auto__ = function(state_71287){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__45526__auto____1.call(this,state_71287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_batch_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_batch_$_state_machine__45526__auto____0;
com$wsscode$pathom$connect$parallel_batch_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_batch_$_state_machine__45526__auto____1;
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache))
})();
var state__45810__auto__ = (function (){var statearr_71771 = f__45809__auto__();
(statearr_71771[(6)] = c__45808__auto__);

return statearr_71771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,map__70756,map__70756__$1,env,processing_sequence,path,entity_path_cache))
);

return c__45808__auto__;
});
com.wsscode.pathom.connect.parallel_reader = (function com$wsscode$pathom$connect$parallel_reader(p__71775){
var map__71776 = p__71775;
var map__71776__$1 = (((((!((map__71776 == null))))?(((((map__71776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71776):map__71776);
var env = map__71776__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71776__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71776__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71776__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var waiting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71776__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278));
var temp__5718__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__71778 = temp__5718__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71778,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71778,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),out,new cljs.core.Keyword("com.wsscode.pathom.parser","response-stream","com.wsscode.pathom.parser/response-stream",1785550292),(function (){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var params = com.wsscode.pathom.core.params(env);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),plan);
var c__45808__auto___75067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (state_72277){
var state_val_72285 = (state_72277[(1)]);
if((state_val_72285 === (65))){
var inst_71795 = (state_72277[(7)]);
var inst_71802 = (state_72277[(8)]);
var inst_71794 = (state_72277[(9)]);
var inst_71793 = (state_72277[(10)]);
var inst_71950 = (state_72277[(11)]);
var inst_71953 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_71794,inst_71950);
var tmp72286 = inst_71795;
var tmp72287 = inst_71793;
var inst_71792 = inst_71802;
var inst_71793__$1 = tmp72287;
var inst_71794__$1 = inst_71953;
var inst_71795__$1 = tmp72286;
var state_72277__$1 = (function (){var statearr_72308 = state_72277;
(statearr_72308[(7)] = inst_71795__$1);

(statearr_72308[(12)] = inst_71792);

(statearr_72308[(9)] = inst_71794__$1);

(statearr_72308[(10)] = inst_71793__$1);

return statearr_72308;
})();
var statearr_72314_75073 = state_72277__$1;
(statearr_72314_75073[(2)] = null);

(statearr_72314_75073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (70))){
var inst_71808 = (state_72277[(13)]);
var inst_71983 = [new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_71984 = [inst_71808];
var inst_71985 = cljs.core.PersistentHashMap.fromArrays(inst_71983,inst_71984);
var inst_71986 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Waited key missed response",inst_71985);
var inst_71991 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_71992 = cljs.core.PersistentHashMap.EMPTY;
var inst_71993 = [out,inst_71986,inst_71992];
var inst_71994 = cljs.core.PersistentHashMap.fromArrays(inst_71991,inst_71993);
var state_72277__$1 = state_72277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72277__$1,(72),ch,inst_71994);
} else {
if((state_val_72285 === (62))){
var inst_71839 = (state_72277[(14)]);
var inst_71808 = (state_72277[(13)]);
var inst_71950 = (state_72277[(11)]);
var inst_71948 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_71839);
var inst_71949 = cljs.core.keys(inst_71948);
var inst_71950__$1 = cljs.core.set(inst_71949);
var inst_71951 = cljs.core.contains_QMARK_(inst_71950__$1,inst_71808);
var state_72277__$1 = (function (){var statearr_72329 = state_72277;
(statearr_72329[(11)] = inst_71950__$1);

return statearr_72329;
})();
if(inst_71951){
var statearr_72333_75080 = state_72277__$1;
(statearr_72333_75080[(1)] = (65));

} else {
var statearr_72334_75081 = state_72277__$1;
(statearr_72334_75081[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (74))){
var inst_71939 = (state_72277[(15)]);
var inst_72127 = com.wsscode.common.async_cljs.error_QMARK_(inst_71939);
var state_72277__$1 = state_72277;
if(inst_72127){
var statearr_72341_75082 = state_72277__$1;
(statearr_72341_75082[(1)] = (94));

} else {
var statearr_72347_75083 = state_72277__$1;
(statearr_72347_75083[(1)] = (95));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (110))){
var inst_71839 = (state_72277[(14)]);
var inst_71939 = (state_72277[(15)]);
var inst_71809 = (state_72277[(16)]);
var inst_72217 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_72218 = [inst_71939];
var inst_72219 = cljs.core.PersistentHashMap.fromArrays(inst_72217,inst_72218);
var inst_72220 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_72219);
var inst_72225 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_72226 = [new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),key,inst_71809,inst_71939];
var inst_72227 = cljs.core.PersistentHashMap.fromArrays(inst_72225,inst_72226);
var inst_72228 = com.wsscode.pathom.trace.trace(inst_71839,inst_72227);
var inst_72229 = com.wsscode.pathom.core.add_error(inst_71839,inst_72220);
var inst_72230 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_72231 = [key];
var inst_72232 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_72233 = cljs.core.PersistentHashMap.fromArrays(inst_72231,inst_72232);
var inst_72234 = [out,inst_72220,inst_72233];
var inst_72235 = cljs.core.PersistentHashMap.fromArrays(inst_72230,inst_72234);
var state_72277__$1 = (function (){var statearr_72365 = state_72277;
(statearr_72365[(17)] = inst_72229);

(statearr_72365[(18)] = inst_72228);

return statearr_72365;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72277__$1,(112),ch,inst_72235);
} else {
if((state_val_72285 === (7))){
var inst_71813 = (state_72277[(19)]);
var inst_71818 = inst_71813.cljs$lang$protocol_mask$partition0$;
var inst_71819 = (inst_71818 & (64));
var inst_71820 = inst_71813.cljs$core$ISeq$;
var inst_71821 = (cljs.core.PROTOCOL_SENTINEL === inst_71820);
var inst_71822 = ((inst_71819) || (inst_71821));
var state_72277__$1 = state_72277;
if(cljs.core.truth_(inst_71822)){
var statearr_72366_75089 = state_72277__$1;
(statearr_72366_75089[(1)] = (10));

} else {
var statearr_72367_75090 = state_72277__$1;
(statearr_72367_75090[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (59))){
var inst_71795 = (state_72277[(7)]);
var inst_71794 = (state_72277[(9)]);
var inst_71808 = (state_72277[(13)]);
var inst_71793 = (state_72277[(10)]);
var inst_71943 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(inst_71795,inst_71808);
var tmp72351 = inst_71794;
var tmp72352 = inst_71793;
var inst_71792 = plan;
var inst_71793__$1 = tmp72352;
var inst_71794__$1 = tmp72351;
var inst_71795__$1 = inst_71943;
var state_72277__$1 = (function (){var statearr_72368 = state_72277;
(statearr_72368[(7)] = inst_71795__$1);

(statearr_72368[(12)] = inst_71792);

(statearr_72368[(9)] = inst_71794__$1);

(statearr_72368[(10)] = inst_71793__$1);

return statearr_72368;
})();
var statearr_72369_75094 = state_72277__$1;
(statearr_72369_75094[(2)] = null);

(statearr_72369_75094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (86))){
var inst_72005 = (state_72277[(20)]);
var inst_71808 = (state_72277[(13)]);
var inst_72095 = (state_72277[(2)]);
var inst_72098 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_72100 = cljs.core.contains_QMARK_(inst_72005,inst_71808);
var inst_72101 = (!(inst_72100));
var state_72277__$1 = (function (){var statearr_72370 = state_72277;
(statearr_72370[(21)] = inst_72098);

(statearr_72370[(22)] = inst_72095);

return statearr_72370;
})();
if(inst_72101){
var statearr_72371_75098 = state_72277__$1;
(statearr_72371_75098[(1)] = (88));

} else {
var statearr_72372_75099 = state_72277__$1;
(statearr_72372_75099[(1)] = (89));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (20))){
var inst_71795 = (state_72277[(7)]);
var inst_71808 = (state_72277[(13)]);
var inst_71874 = cljs.core.contains_QMARK_(inst_71795,inst_71808);
var state_72277__$1 = state_72277;
if(inst_71874){
var statearr_72373_75101 = state_72277__$1;
(statearr_72373_75101[(1)] = (30));

} else {
var statearr_72374_75104 = state_72277__$1;
(statearr_72374_75104[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (72))){
var inst_71996 = (state_72277[(2)]);
var inst_71997 = cljs.core.async.close_BANG_(ch);
var state_72277__$1 = (function (){var statearr_72375 = state_72277;
(statearr_72375[(23)] = inst_71996);

return statearr_72375;
})();
var statearr_72376_75108 = state_72277__$1;
(statearr_72376_75108[(2)] = inst_71997);

(statearr_72376_75108[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (58))){
var inst_71928 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72377_75109 = state_72277__$1;
(statearr_72377_75109[(2)] = inst_71928);


cljs.core.async.impl.ioc_helpers.process_exception(state_72277__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (60))){
var inst_71939 = (state_72277[(15)]);
var inst_71946 = (new cljs.core.Keyword("com.wsscode.pathom.connect","watch-ready","com.wsscode.pathom.connect/watch-ready",943560359) === inst_71939);
var state_72277__$1 = state_72277;
if(cljs.core.truth_(inst_71946)){
var statearr_72378_75110 = state_72277__$1;
(statearr_72378_75110[(1)] = (62));

} else {
var statearr_72379_75111 = state_72277__$1;
(statearr_72379_75111[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (27))){
var inst_71872 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72382_75115 = state_72277__$1;
(statearr_72382_75115[(2)] = inst_71872);

(statearr_72382_75115[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (1))){
var inst_71788 = cljs.core.seq(plan);
var inst_71789 = cljs.core.first(inst_71788);
var inst_71790 = cljs.core.next(inst_71788);
var inst_71791 = cljs.core.PersistentHashMap.EMPTY;
var inst_71792 = plan;
var inst_71793 = inst_71791;
var inst_71794 = out;
var inst_71795 = waiting;
var state_72277__$1 = (function (){var statearr_72383 = state_72277;
(statearr_72383[(7)] = inst_71795);

(statearr_72383[(24)] = inst_71789);

(statearr_72383[(12)] = inst_71792);

(statearr_72383[(9)] = inst_71794);

(statearr_72383[(25)] = inst_71790);

(statearr_72383[(10)] = inst_71793);

return statearr_72383;
})();
var statearr_72384_75119 = state_72277__$1;
(statearr_72384_75119[(2)] = null);

(statearr_72384_75119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (69))){
var inst_71795 = (state_72277[(7)]);
var inst_71967 = (state_72277[(26)]);
var inst_71978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71967,(0),null);
var inst_71979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71967,(1),null);
var inst_71980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71967,(2),null);
var tmp72380 = inst_71795;
var inst_71792 = inst_71978;
var inst_71793 = inst_71979;
var inst_71794 = inst_71980;
var inst_71795__$1 = tmp72380;
var state_72277__$1 = (function (){var statearr_72385 = state_72277;
(statearr_72385[(7)] = inst_71795__$1);

(statearr_72385[(12)] = inst_71792);

(statearr_72385[(9)] = inst_71794);

(statearr_72385[(10)] = inst_71793);

return statearr_72385;
})();
var statearr_72386_75126 = state_72277__$1;
(statearr_72386_75126[(2)] = null);

(statearr_72386_75126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (101))){
var inst_72174 = (state_72277[(2)]);
var inst_72176 = cljs.core.async.close_BANG_(ch);
var state_72277__$1 = (function (){var statearr_72387 = state_72277;
(statearr_72387[(27)] = inst_72174);

return statearr_72387;
})();
var statearr_72388_75127 = state_72277__$1;
(statearr_72388_75127[(2)] = inst_72176);

(statearr_72388_75127[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (24))){
var inst_71856 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
if(cljs.core.truth_(inst_71856)){
var statearr_72389_75131 = state_72277__$1;
(statearr_72389_75131[(1)] = (25));

} else {
var statearr_72390_75132 = state_72277__$1;
(statearr_72390_75132[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (102))){
var inst_72162 = [key];
var inst_72163 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_72164 = cljs.core.PersistentHashMap.fromArrays(inst_72162,inst_72163);
var state_72277__$1 = state_72277;
var statearr_72391_75136 = state_72277__$1;
(statearr_72391_75136[(2)] = inst_72164);

(statearr_72391_75136[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (55))){
var inst_71919 = (state_72277[(2)]);
var inst_71920 = com.wsscode.common.async_cljs.throw_err(inst_71919);
var state_72277__$1 = state_72277;
var statearr_72392_75137 = state_72277__$1;
(statearr_72392_75137[(2)] = inst_71920);

(statearr_72392_75137[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (85))){
var state_72277__$1 = state_72277;
var statearr_72393_75139 = state_72277__$1;
(statearr_72393_75139[(2)] = null);

(statearr_72393_75139[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (39))){
var inst_71894 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72394_75143 = state_72277__$1;
(statearr_72394_75143[(2)] = inst_71894);

(statearr_72394_75143[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (88))){
var inst_72005 = (state_72277[(20)]);
var inst_71808 = (state_72277[(13)]);
var inst_72103 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_72005,inst_71808,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_72277__$1 = state_72277;
var statearr_72395_75146 = state_72277__$1;
(statearr_72395_75146[(2)] = inst_72103);

(statearr_72395_75146[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (46))){
var state_72277__$1 = state_72277;
var statearr_72396_75147 = state_72277__$1;
(statearr_72396_75147[(2)] = null);

(statearr_72396_75147[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (4))){
var inst_71813 = (state_72277[(19)]);
var inst_71801 = (state_72277[(28)]);
var inst_71809 = (state_72277[(16)]);
var inst_71808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71801,(0),null);
var inst_71809__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71801,(1),null);
var inst_71810 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71811 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),inst_71809__$1];
var inst_71812 = (new cljs.core.PersistentVector(null,2,(5),inst_71810,inst_71811,null));
var inst_71813__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_71812);
var inst_71815 = (inst_71813__$1 == null);
var inst_71816 = cljs.core.not(inst_71815);
var state_72277__$1 = (function (){var statearr_72397 = state_72277;
(statearr_72397[(19)] = inst_71813__$1);

(statearr_72397[(16)] = inst_71809__$1);

(statearr_72397[(13)] = inst_71808);

return statearr_72397;
})();
if(inst_71816){
var statearr_72398_75148 = state_72277__$1;
(statearr_72398_75148[(1)] = (7));

} else {
var statearr_72399_75149 = state_72277__$1;
(statearr_72399_75149[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (77))){
var inst_71940 = (state_72277[(29)]);
var inst_72005 = (state_72277[(20)]);
var inst_71808 = (state_72277[(13)]);
var inst_72049 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_72050 = [inst_72005,inst_71808];
var inst_72051 = cljs.core.PersistentHashMap.fromArrays(inst_72049,inst_72050);
var inst_72052 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_72051);
var inst_72053 = (inst_71940.cljs$core$IFn$_invoke$arity$2 ? inst_71940.cljs$core$IFn$_invoke$arity$2(inst_72005,inst_72052) : inst_71940.call(null,inst_72005,inst_72052));
var state_72277__$1 = state_72277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72277__$1,(80),inst_72053);
} else {
if((state_val_72285 === (106))){
var state_72277__$1 = state_72277;
var statearr_72400_75152 = state_72277__$1;
(statearr_72400_75152[(2)] = null);

(statearr_72400_75152[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (95))){
var state_72277__$1 = state_72277;
var statearr_72401_75153 = state_72277__$1;
(statearr_72401_75153[(1)] = (105));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (54))){
var inst_71923 = (state_72277[(30)]);
var inst_71923__$1 = (state_72277[(2)]);
var state_72277__$1 = (function (){var statearr_72403 = state_72277;
(statearr_72403[(30)] = inst_71923__$1);

return statearr_72403;
})();
if(cljs.core.truth_(inst_71923__$1)){
var statearr_72404_75154 = state_72277__$1;
(statearr_72404_75154[(1)] = (56));

} else {
var statearr_72405_75155 = state_72277__$1;
(statearr_72405_75155[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (92))){
var inst_72106 = (state_72277[(31)]);
var state_72277__$1 = state_72277;
var statearr_72406_75157 = state_72277__$1;
(statearr_72406_75157[(2)] = inst_72106);

(statearr_72406_75157[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (104))){
var inst_72158 = (state_72277[(32)]);
var inst_71939 = (state_72277[(15)]);
var inst_72170 = (state_72277[(2)]);
var inst_72171 = [out,inst_71939,inst_72170];
var inst_72172 = cljs.core.PersistentHashMap.fromArrays(inst_72158,inst_72171);
var state_72277__$1 = state_72277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72277__$1,(101),ch,inst_72172);
} else {
if((state_val_72285 === (15))){
var inst_71837 = (state_72277[(33)]);
var inst_71841 = (state_72277[(34)]);
var inst_71839 = (state_72277[(14)]);
var inst_71840 = (state_72277[(35)]);
var inst_71809 = (state_72277[(16)]);
var inst_71808 = (state_72277[(13)]);
var inst_71834 = (state_72277[(36)]);
var inst_71834__$1 = (state_72277[(2)]);
var inst_71835 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_71834__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_71836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71834__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_71837__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71834__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_71838 = com.wsscode.pathom.connect.resolver__GT_output(env__$1,inst_71809);
var inst_71839__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_71834__$1);
var inst_71840__$1 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_71839__$1);
var inst_71841__$1 = cljs.core.select_keys(inst_71840__$1,inst_71837__$1);
var inst_71842 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_71843 = [key,inst_71809,inst_71841__$1];
var inst_71844 = cljs.core.PersistentHashMap.fromArrays(inst_71842,inst_71843);
var inst_71845 = cljs.core.contains_QMARK_(inst_71840__$1,inst_71808);
var state_72277__$1 = (function (){var statearr_72407 = state_72277;
(statearr_72407[(33)] = inst_71837__$1);

(statearr_72407[(37)] = inst_71835);

(statearr_72407[(38)] = inst_71836);

(statearr_72407[(34)] = inst_71841__$1);

(statearr_72407[(39)] = inst_71838);

(statearr_72407[(14)] = inst_71839__$1);

(statearr_72407[(35)] = inst_71840__$1);

(statearr_72407[(36)] = inst_71834__$1);

(statearr_72407[(40)] = inst_71844);

return statearr_72407;
})();
if(inst_71845){
var statearr_72408_75161 = state_72277__$1;
(statearr_72408_75161[(1)] = (16));

} else {
var statearr_72409_75162 = state_72277__$1;
(statearr_72409_75162[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (48))){
var inst_71933 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72410_75163 = state_72277__$1;
(statearr_72410_75163[(2)] = inst_71933);

(statearr_72410_75163[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (50))){
var inst_71910 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72411_75164 = state_72277__$1;
(statearr_72411_75164[(2)] = inst_71910);


cljs.core.async.impl.ioc_helpers.process_exception(state_72277__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (75))){
var inst_72251 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72412_75166 = state_72277__$1;
(statearr_72412_75166[(2)] = inst_72251);

(statearr_72412_75166[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (99))){
var inst_71839 = (state_72277[(14)]);
var inst_71939 = (state_72277[(15)]);
var inst_71802 = (state_72277[(8)]);
var inst_71809 = (state_72277[(16)]);
var inst_72149 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_72150 = [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416),key,inst_71809];
var inst_72151 = cljs.core.PersistentHashMap.fromArrays(inst_72149,inst_72150);
var inst_72152 = com.wsscode.pathom.trace.trace(inst_71839,inst_72151);
var inst_72153 = com.wsscode.pathom.core.add_error(inst_71839,inst_71939);
var inst_72158 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_72159 = cljs.core.seq(inst_71802);
var state_72277__$1 = (function (){var statearr_72413 = state_72277;
(statearr_72413[(41)] = inst_72153);

(statearr_72413[(32)] = inst_72158);

(statearr_72413[(42)] = inst_72152);

return statearr_72413;
})();
if(inst_72159){
var statearr_72414_75169 = state_72277__$1;
(statearr_72414_75169[(1)] = (102));

} else {
var statearr_72415_75170 = state_72277__$1;
(statearr_72415_75170[(1)] = (103));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (21))){
var inst_71937 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72416_75173 = state_72277__$1;
(statearr_72416_75173[(2)] = inst_71937);

(statearr_72416_75173[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (31))){
var state_72277__$1 = state_72277;
var statearr_72417_75174 = state_72277__$1;
(statearr_72417_75174[(1)] = (46));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (32))){
var inst_71935 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72419_75176 = state_72277__$1;
(statearr_72419_75176[(2)] = inst_71935);

(statearr_72419_75176[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (40))){
var inst_71881 = (state_72277[(43)]);
var inst_71899 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_71881);
var state_72277__$1 = state_72277;
var statearr_72420_75177 = state_72277__$1;
(statearr_72420_75177[(2)] = inst_71899);

(statearr_72420_75177[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (91))){
var inst_72106 = (state_72277[(31)]);
var inst_71808 = (state_72277[(13)]);
var inst_72109 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_72106,inst_71808,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882));
var state_72277__$1 = state_72277;
var statearr_72421_75179 = state_72277__$1;
(statearr_72421_75179[(2)] = inst_72109);

(statearr_72421_75179[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (108))){
var inst_72199 = (state_72277[(44)]);
var inst_72199__$1 = (state_72277[(2)]);
var state_72277__$1 = (function (){var statearr_72422 = state_72277;
(statearr_72422[(44)] = inst_72199__$1);

return statearr_72422;
})();
if(cljs.core.truth_(inst_72199__$1)){
var statearr_72423_75182 = state_72277__$1;
(statearr_72423_75182[(1)] = (109));

} else {
var statearr_72424_75183 = state_72277__$1;
(statearr_72424_75183[(1)] = (110));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (56))){
var inst_71923 = (state_72277[(30)]);
var state_72277__$1 = state_72277;
var statearr_72425_75186 = state_72277__$1;
(statearr_72425_75186[(2)] = inst_71923);

(statearr_72425_75186[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (33))){
var inst_71881 = (state_72277[(43)]);
var inst_71881__$1 = (state_72277[(2)]);
var inst_71883 = (inst_71881__$1 == null);
var inst_71884 = cljs.core.not(inst_71883);
var state_72277__$1 = (function (){var statearr_72426 = state_72277;
(statearr_72426[(43)] = inst_71881__$1);

return statearr_72426;
})();
if(inst_71884){
var statearr_72427_75187 = state_72277__$1;
(statearr_72427_75187[(1)] = (34));

} else {
var statearr_72428_75188 = state_72277__$1;
(statearr_72428_75188[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (13))){
var inst_71813 = (state_72277[(19)]);
var inst_71831 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_71813);
var state_72277__$1 = state_72277;
var statearr_72429_75191 = state_72277__$1;
(statearr_72429_75191[(2)] = inst_71831);

(statearr_72429_75191[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (22))){
var state_72277__$1 = state_72277;
var statearr_72431_75192 = state_72277__$1;
(statearr_72431_75192[(2)] = processing_sequence);

(statearr_72431_75192[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (90))){
var inst_71802 = (state_72277[(8)]);
var inst_72106 = (state_72277[(2)]);
var inst_72107 = cljs.core.seq(inst_71802);
var state_72277__$1 = (function (){var statearr_72432 = state_72277;
(statearr_72432[(31)] = inst_72106);

return statearr_72432;
})();
if(inst_72107){
var statearr_72433_75194 = state_72277__$1;
(statearr_72433_75194[(1)] = (91));

} else {
var statearr_72434_75195 = state_72277__$1;
(statearr_72434_75195[(1)] = (92));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (109))){
var inst_71795 = (state_72277[(7)]);
var inst_72199 = (state_72277[(44)]);
var inst_72208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72199,(0),null);
var inst_72209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72199,(1),null);
var inst_72214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72199,(2),null);
var tmp72430 = inst_71795;
var inst_71792 = inst_72208;
var inst_71793 = inst_72209;
var inst_71794 = inst_72214;
var inst_71795__$1 = tmp72430;
var state_72277__$1 = (function (){var statearr_72435 = state_72277;
(statearr_72435[(7)] = inst_71795__$1);

(statearr_72435[(12)] = inst_71792);

(statearr_72435[(9)] = inst_71794);

(statearr_72435[(10)] = inst_71793);

return statearr_72435;
})();
var statearr_72436_75198 = state_72277__$1;
(statearr_72436_75198[(2)] = null);

(statearr_72436_75198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (36))){
var inst_71897 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
if(cljs.core.truth_(inst_71897)){
var statearr_72437_75201 = state_72277__$1;
(statearr_72437_75201[(1)] = (40));

} else {
var statearr_72438_75202 = state_72277__$1;
(statearr_72438_75202[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (41))){
var inst_71881 = (state_72277[(43)]);
var state_72277__$1 = state_72277;
var statearr_72439_75203 = state_72277__$1;
(statearr_72439_75203[(2)] = inst_71881);

(statearr_72439_75203[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (89))){
var inst_72005 = (state_72277[(20)]);
var state_72277__$1 = state_72277;
var statearr_72440_75204 = state_72277__$1;
(statearr_72440_75204[(2)] = inst_72005);

(statearr_72440_75204[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (100))){
var inst_72178 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72441_75205 = state_72277__$1;
(statearr_72441_75205[(2)] = inst_72178);

(statearr_72441_75205[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (43))){
var inst_71903 = (state_72277[(45)]);
var state_72277__$1 = state_72277;
var statearr_72442_75206 = state_72277__$1;
(statearr_72442_75206[(2)] = inst_71903);

(statearr_72442_75206[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (61))){
var inst_72255 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72443_75207 = state_72277__$1;
(statearr_72443_75207[(2)] = inst_72255);

(statearr_72443_75207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (29))){
var inst_71870 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72444_75208 = state_72277__$1;
(statearr_72444_75208[(2)] = inst_71870);

(statearr_72444_75208[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (44))){
var state_72277__$1 = state_72277;
var statearr_72445_75210 = state_72277__$1;
(statearr_72445_75210[(2)] = new cljs.core.Keyword("com.wsscode.pathom.connect","watch-ready","com.wsscode.pathom.connect/watch-ready",943560359));

(statearr_72445_75210[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (93))){
var inst_72098 = (state_72277[(21)]);
var inst_72083 = (state_72277[(46)]);
var inst_72112 = (state_72277[(2)]);
var inst_72113 = [out,inst_72083,inst_72112];
var inst_72114 = cljs.core.PersistentHashMap.fromArrays(inst_72098,inst_72113);
var state_72277__$1 = state_72277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72277__$1,(87),ch,inst_72114);
} else {
if((state_val_72285 === (6))){
var inst_72259 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72446_75212 = state_72277__$1;
(statearr_72446_75212[(2)] = inst_72259);

(statearr_72446_75212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (111))){
var inst_72240 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72447_75214 = state_72277__$1;
(statearr_72447_75214[(2)] = inst_72240);

(statearr_72447_75214[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (28))){
var inst_71860 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72448_75215 = state_72277__$1;
(statearr_72448_75215[(2)] = inst_71860);

(statearr_72448_75215[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (64))){
var inst_72253 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72449_75217 = state_72277__$1;
(statearr_72449_75217[(2)] = inst_72253);

(statearr_72449_75217[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (103))){
var inst_71794 = (state_72277[(9)]);
var inst_72167 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882));
var inst_72168 = cljs.core.zipmap(inst_71794,inst_72167);
var state_72277__$1 = state_72277;
var statearr_72450_75219 = state_72277__$1;
(statearr_72450_75219[(2)] = inst_72168);

(statearr_72450_75219[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (51))){
var inst_71841 = (state_72277[(34)]);
var inst_71839 = (state_72277[(14)]);
var inst_71915 = (state_72277[(47)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_72277,(50),new cljs.core.Keyword(null,"default","default",-1987822328),null,(49));
var inst_71915__$1 = com.wsscode.pathom.connect.call_resolver(inst_71839,inst_71841);
var inst_71916 = com.wsscode.common.async_cljs.chan_QMARK_(inst_71915__$1);
var state_72277__$1 = (function (){var statearr_72451 = state_72277;
(statearr_72451[(47)] = inst_71915__$1);

return statearr_72451;
})();
if(inst_71916){
var statearr_72452_75221 = state_72277__$1;
(statearr_72452_75221[(1)] = (52));

} else {
var statearr_72453_75222 = state_72277__$1;
(statearr_72453_75222[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (25))){
var inst_71839 = (state_72277[(14)]);
var inst_71858 = com.wsscode.pathom.connect.parallel_batch(inst_71839);
var state_72277__$1 = state_72277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72277__$1,(28),inst_71858);
} else {
if((state_val_72285 === (34))){
var inst_71881 = (state_72277[(43)]);
var inst_71886 = inst_71881.cljs$lang$protocol_mask$partition0$;
var inst_71887 = (inst_71886 & (64));
var inst_71888 = inst_71881.cljs$core$ISeq$;
var inst_71889 = (cljs.core.PROTOCOL_SENTINEL === inst_71888);
var inst_71890 = ((inst_71887) || (inst_71889));
var state_72277__$1 = state_72277;
if(cljs.core.truth_(inst_71890)){
var statearr_72454_75225 = state_72277__$1;
(statearr_72454_75225[(1)] = (37));

} else {
var statearr_72455_75226 = state_72277__$1;
(statearr_72455_75226[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (17))){
var inst_71835 = (state_72277[(37)]);
var state_72277__$1 = state_72277;
if(cljs.core.truth_(inst_71835)){
var statearr_72456_75227 = state_72277__$1;
(statearr_72456_75227[(1)] = (19));

} else {
var statearr_72457_75229 = state_72277__$1;
(statearr_72457_75229[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (3))){
var inst_72261 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72277__$1,inst_72261);
} else {
if((state_val_72285 === (12))){
var inst_71826 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72458_75230 = state_72277__$1;
(statearr_72458_75230[(2)] = inst_71826);

(statearr_72458_75230[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (2))){
var inst_71801 = (state_72277[(28)]);
var inst_71792 = (state_72277[(12)]);
var inst_71800 = cljs.core.seq(inst_71792);
var inst_71801__$1 = cljs.core.first(inst_71800);
var inst_71802 = cljs.core.next(inst_71800);
var state_72277__$1 = (function (){var statearr_72459 = state_72277;
(statearr_72459[(28)] = inst_71801__$1);

(statearr_72459[(8)] = inst_71802);

return statearr_72459;
})();
if(cljs.core.truth_(inst_71801__$1)){
var statearr_72460_75233 = state_72277__$1;
(statearr_72460_75233[(1)] = (4));

} else {
var statearr_72461_75234 = state_72277__$1;
(statearr_72461_75234[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (66))){
var inst_71940 = (state_72277[(29)]);
var inst_71808 = (state_72277[(13)]);
var inst_71956 = cljs.core.PersistentHashMap.EMPTY;
var inst_71961 = [new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_71962 = [inst_71808];
var inst_71963 = cljs.core.PersistentHashMap.fromArrays(inst_71961,inst_71962);
var inst_71964 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Waited key missed response",inst_71963);
var inst_71965 = (inst_71940.cljs$core$IFn$_invoke$arity$2 ? inst_71940.cljs$core$IFn$_invoke$arity$2(inst_71956,inst_71964) : inst_71940.call(null,inst_71956,inst_71964));
var state_72277__$1 = state_72277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72277__$1,(68),inst_71965);
} else {
if((state_val_72285 === (107))){
var inst_72247 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72462_75236 = state_72277__$1;
(statearr_72462_75236[(2)] = inst_72247);

(statearr_72462_75236[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (23))){
var inst_71836 = (state_72277[(38)]);
var state_72277__$1 = state_72277;
var statearr_72463_75239 = state_72277__$1;
(statearr_72463_75239[(2)] = inst_71836);

(statearr_72463_75239[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (47))){
var state_72277__$1 = state_72277;
var statearr_72464_75240 = state_72277__$1;
(statearr_72464_75240[(2)] = null);

(statearr_72464_75240[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (35))){
var state_72277__$1 = state_72277;
var statearr_72465_75241 = state_72277__$1;
(statearr_72465_75241[(2)] = false);

(statearr_72465_75241[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (82))){
var inst_71837 = (state_72277[(33)]);
var inst_72055 = (state_72277[(48)]);
var inst_71940 = (state_72277[(29)]);
var inst_71835 = (state_72277[(37)]);
var inst_71795 = (state_72277[(7)]);
var inst_71836 = (state_72277[(38)]);
var inst_72005 = (state_72277[(20)]);
var inst_71789 = (state_72277[(24)]);
var inst_71841 = (state_72277[(34)]);
var inst_71801 = (state_72277[(28)]);
var inst_71838 = (state_72277[(39)]);
var inst_71839 = (state_72277[(14)]);
var inst_71792 = (state_72277[(12)]);
var inst_71840 = (state_72277[(35)]);
var inst_71802 = (state_72277[(8)]);
var inst_71794 = (state_72277[(9)]);
var inst_71809 = (state_72277[(16)]);
var inst_71808 = (state_72277[(13)]);
var inst_71790 = (state_72277[(25)]);
var inst_71793 = (state_72277[(10)]);
var inst_71834 = (state_72277[(36)]);
var inst_72083 = (state_72277[(46)]);
var inst_71844 = (state_72277[(40)]);
var inst_72076 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_72081 = [inst_72005,inst_71808];
var inst_72082 = cljs.core.PersistentHashMap.fromArrays(inst_72076,inst_72081);
var inst_72083__$1 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_72082);
var inst_72084 = (function (){var input = inst_71837;
var first__71787 = inst_71789;
var vec__71797 = inst_71792;
var step = inst_71801;
var entity = inst_71840;
var key_SINGLEQUOTE_ = inst_71808;
var seq__71786 = inst_71790;
var response = inst_72005;
var G__71784 = inst_71792;
var cache_QMARK_ = inst_71835;
var out_left = inst_71794;
var failed_resolvers = inst_71793;
var map__71807 = inst_71834;
var seq__71798 = inst_71802;
var temp__5718__auto____$1 = inst_72055;
var err = inst_72083__$1;
var vec__71804 = inst_71801;
var batch_QMARK_ = inst_71836;
var output = inst_71838;
var env__$2 = inst_71839;
var e = inst_71841;
var resolver_sym = inst_71809;
var waiting__$1 = inst_71795;
var trace_data = inst_71844;
var resolver = inst_71834;
var vec__71785 = plan;
var replan = inst_71940;
var tail = inst_71802;
var first__71799 = inst_71801;
return ((function (input,first__71787,vec__71797,step,entity,key_SINGLEQUOTE_,seq__71786,response,G__71784,cache_QMARK_,out_left,failed_resolvers,map__71807,seq__71798,temp__5718__auto____$1,err,vec__71804,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,vec__71785,replan,tail,first__71799,inst_71837,inst_72055,inst_71940,inst_71835,inst_71795,inst_71836,inst_72005,inst_71789,inst_71841,inst_71801,inst_71838,inst_71839,inst_71792,inst_71840,inst_71802,inst_71794,inst_71809,inst_71808,inst_71790,inst_71793,inst_71834,inst_72083,inst_71844,inst_72076,inst_72081,inst_72082,inst_72083__$1,state_val_72285,c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (p1__71774_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__71774_SHARP_], 0));
});
;})(input,first__71787,vec__71797,step,entity,key_SINGLEQUOTE_,seq__71786,response,G__71784,cache_QMARK_,out_left,failed_resolvers,map__71807,seq__71798,temp__5718__auto____$1,err,vec__71804,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,vec__71785,replan,tail,first__71799,inst_71837,inst_72055,inst_71940,inst_71835,inst_71795,inst_71836,inst_72005,inst_71789,inst_71841,inst_71801,inst_71838,inst_71839,inst_71792,inst_71840,inst_71802,inst_71794,inst_71809,inst_71808,inst_71790,inst_71793,inst_71834,inst_72083,inst_71844,inst_72076,inst_72081,inst_72082,inst_72083__$1,state_val_72285,c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_72085 = com.wsscode.pathom.core.swap_entity_BANG_(inst_71839,inst_72084);
var inst_72086 = cljs.core.seq(inst_71802);
var state_72277__$1 = (function (){var statearr_72466 = state_72277;
(statearr_72466[(49)] = inst_72085);

(statearr_72466[(46)] = inst_72083__$1);

return statearr_72466;
})();
if(inst_72086){
var statearr_72467_75255 = state_72277__$1;
(statearr_72467_75255[(1)] = (84));

} else {
var statearr_72468_75256 = state_72277__$1;
(statearr_72468_75256[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (76))){
var inst_72022 = (state_72277[(50)]);
var inst_72005 = (state_72277[(20)]);
var inst_71838 = (state_72277[(39)]);
var inst_71839 = (state_72277[(14)]);
var inst_71809 = (state_72277[(16)]);
var inst_72022__$1 = com.wsscode.pathom.connect.output__GT_provides(inst_71838);
var inst_72027 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_72028 = [new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),key,inst_71809];
var inst_72029 = cljs.core.PersistentHashMap.fromArrays(inst_72027,inst_72028);
var inst_72030 = com.wsscode.pathom.trace.trace(inst_71839,inst_72029);
var inst_72033 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_72034 = [inst_72022__$1,inst_72005];
var inst_72035 = cljs.core.PersistentHashMap.fromArrays(inst_72033,inst_72034);
var state_72277__$1 = (function (){var statearr_72469 = state_72277;
(statearr_72469[(50)] = inst_72022__$1);

(statearr_72469[(51)] = inst_72030);

return statearr_72469;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72277__$1,(79),ch,inst_72035);
} else {
if((state_val_72285 === (97))){
var inst_72132 = (state_72277[(52)]);
var inst_72132__$1 = (state_72277[(2)]);
var state_72277__$1 = (function (){var statearr_72470 = state_72277;
(statearr_72470[(52)] = inst_72132__$1);

return statearr_72470;
})();
if(cljs.core.truth_(inst_72132__$1)){
var statearr_72471_75261 = state_72277__$1;
(statearr_72471_75261[(1)] = (98));

} else {
var statearr_72472_75262 = state_72277__$1;
(statearr_72472_75262[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (19))){
var inst_71836 = (state_72277[(38)]);
var state_72277__$1 = state_72277;
if(cljs.core.truth_(inst_71836)){
var statearr_72473_75264 = state_72277__$1;
(statearr_72473_75264[(1)] = (22));

} else {
var statearr_72474_75265 = state_72277__$1;
(statearr_72474_75265[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (57))){
var inst_71926 = cljs.core.PersistentHashMap.EMPTY;
var state_72277__$1 = state_72277;
var statearr_72475_75266 = state_72277__$1;
(statearr_72475_75266[(2)] = inst_71926);

(statearr_72475_75266[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (68))){
var inst_71967 = (state_72277[(26)]);
var inst_71967__$1 = (state_72277[(2)]);
var state_72277__$1 = (function (){var statearr_72476 = state_72277;
(statearr_72476[(26)] = inst_71967__$1);

return statearr_72476;
})();
if(cljs.core.truth_(inst_71967__$1)){
var statearr_72477_75269 = state_72277__$1;
(statearr_72477_75269[(1)] = (69));

} else {
var statearr_72478_75270 = state_72277__$1;
(statearr_72478_75270[(1)] = (70));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (11))){
var state_72277__$1 = state_72277;
var statearr_72479_75271 = state_72277__$1;
(statearr_72479_75271[(2)] = false);

(statearr_72479_75271[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (9))){
var inst_71829 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
if(cljs.core.truth_(inst_71829)){
var statearr_72480_75272 = state_72277__$1;
(statearr_72480_75272[(1)] = (13));

} else {
var statearr_72481_75274 = state_72277__$1;
(statearr_72481_75274[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (5))){
var inst_72257 = cljs.core.async.close_BANG_(ch);
var state_72277__$1 = state_72277;
var statearr_72482_75276 = state_72277__$1;
(statearr_72482_75276[(2)] = inst_72257);

(statearr_72482_75276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (112))){
var inst_72237 = (state_72277[(2)]);
var inst_72238 = cljs.core.async.close_BANG_(ch);
var state_72277__$1 = (function (){var statearr_72483 = state_72277;
(statearr_72483[(53)] = inst_72237);

return statearr_72483;
})();
var statearr_72484_75277 = state_72277__$1;
(statearr_72484_75277[(2)] = inst_72238);

(statearr_72484_75277[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (83))){
var inst_72119 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72485_75279 = state_72277__$1;
(statearr_72485_75279[(2)] = inst_72119);

(statearr_72485_75279[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (14))){
var inst_71813 = (state_72277[(19)]);
var state_72277__$1 = state_72277;
var statearr_72486_75280 = state_72277__$1;
(statearr_72486_75280[(2)] = inst_71813);

(statearr_72486_75280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (45))){
var inst_71907 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72487_75281 = state_72277__$1;
(statearr_72487_75281[(2)] = inst_71907);

(statearr_72487_75281[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (53))){
var inst_71915 = (state_72277[(47)]);
var state_72277__$1 = state_72277;
var statearr_72488_75283 = state_72277__$1;
(statearr_72488_75283[(2)] = inst_71915);

(statearr_72488_75283[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (78))){
var inst_72125 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72489_75284 = state_72277__$1;
(statearr_72489_75284[(2)] = inst_72125);

(statearr_72489_75284[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (26))){
var inst_71837 = (state_72277[(33)]);
var inst_71835 = (state_72277[(37)]);
var inst_71795 = (state_72277[(7)]);
var inst_71836 = (state_72277[(38)]);
var inst_71789 = (state_72277[(24)]);
var inst_71841 = (state_72277[(34)]);
var inst_71801 = (state_72277[(28)]);
var inst_71838 = (state_72277[(39)]);
var inst_71839 = (state_72277[(14)]);
var inst_71792 = (state_72277[(12)]);
var inst_71840 = (state_72277[(35)]);
var inst_71802 = (state_72277[(8)]);
var inst_71794 = (state_72277[(9)]);
var inst_71809 = (state_72277[(16)]);
var inst_71808 = (state_72277[(13)]);
var inst_71790 = (state_72277[(25)]);
var inst_71793 = (state_72277[(10)]);
var inst_71834 = (state_72277[(36)]);
var inst_71844 = (state_72277[(40)]);
var inst_71862 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_71844,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_71863 = com.wsscode.pathom.trace.trace(inst_71839,inst_71862);
var inst_71864 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71865 = [inst_71809,inst_71841,params];
var inst_71866 = (new cljs.core.PersistentVector(null,3,(5),inst_71864,inst_71865,null));
var inst_71867 = (function (){var input = inst_71837;
var first__71787 = inst_71789;
var vec__71797 = inst_71792;
var step = inst_71801;
var entity = inst_71840;
var key_SINGLEQUOTE_ = inst_71808;
var seq__71786 = inst_71790;
var G__71784 = inst_71792;
var cache_QMARK_ = inst_71835;
var out_left = inst_71794;
var failed_resolvers = inst_71793;
var map__71807 = inst_71834;
var seq__71798 = inst_71802;
var vec__71804 = inst_71801;
var batch_QMARK_ = inst_71836;
var output = inst_71838;
var env__$2 = inst_71839;
var e = inst_71841;
var resolver_sym = inst_71809;
var waiting__$1 = inst_71795;
var trace_data = inst_71844;
var resolver = inst_71834;
var vec__71785 = plan;
var tail = inst_71802;
var first__71799 = inst_71801;
return ((function (input,first__71787,vec__71797,step,entity,key_SINGLEQUOTE_,seq__71786,G__71784,cache_QMARK_,out_left,failed_resolvers,map__71807,seq__71798,vec__71804,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,vec__71785,tail,first__71799,inst_71837,inst_71835,inst_71795,inst_71836,inst_71789,inst_71841,inst_71801,inst_71838,inst_71839,inst_71792,inst_71840,inst_71802,inst_71794,inst_71809,inst_71808,inst_71790,inst_71793,inst_71834,inst_71844,inst_71862,inst_71863,inst_71864,inst_71865,inst_71866,state_val_72285,c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var c__45808__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto____$1,input,first__71787,vec__71797,step,entity,key_SINGLEQUOTE_,seq__71786,G__71784,cache_QMARK_,out_left,failed_resolvers,map__71807,seq__71798,vec__71804,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,vec__71785,tail,first__71799,inst_71837,inst_71835,inst_71795,inst_71836,inst_71789,inst_71841,inst_71801,inst_71838,inst_71839,inst_71792,inst_71840,inst_71802,inst_71794,inst_71809,inst_71808,inst_71790,inst_71793,inst_71834,inst_71844,inst_71862,inst_71863,inst_71864,inst_71865,inst_71866,state_val_72285,c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto____$1,input,first__71787,vec__71797,step,entity,key_SINGLEQUOTE_,seq__71786,G__71784,cache_QMARK_,out_left,failed_resolvers,map__71807,seq__71798,vec__71804,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,vec__71785,tail,first__71799,inst_71837,inst_71835,inst_71795,inst_71836,inst_71789,inst_71841,inst_71801,inst_71838,inst_71839,inst_71792,inst_71840,inst_71802,inst_71794,inst_71809,inst_71808,inst_71790,inst_71793,inst_71834,inst_71844,inst_71862,inst_71863,inst_71864,inst_71865,inst_71866,state_val_72285,c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (state_72511){
var state_val_72512 = (state_72511[(1)]);
if((state_val_72512 === (7))){
var inst_72502 = (state_72511[(7)]);
var inst_72502__$1 = (state_72511[(2)]);
var state_72511__$1 = (function (){var statearr_72513 = state_72511;
(statearr_72513[(7)] = inst_72502__$1);

return statearr_72513;
})();
if(cljs.core.truth_(inst_72502__$1)){
var statearr_72514_75299 = state_72511__$1;
(statearr_72514_75299[(1)] = (9));

} else {
var statearr_72515_75300 = state_72511__$1;
(statearr_72515_75300[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72512 === (1))){
var state_72511__$1 = state_72511;
var statearr_72516_75301 = state_72511__$1;
(statearr_72516_75301[(2)] = null);

(statearr_72516_75301[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72512 === (4))){
var inst_72495 = (state_72511[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_72511,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_72495__$1 = com.wsscode.pathom.connect.call_resolver(env__$2,e);
var inst_72496 = com.wsscode.common.async_cljs.chan_QMARK_(inst_72495__$1);
var state_72511__$1 = (function (){var statearr_72517 = state_72511;
(statearr_72517[(8)] = inst_72495__$1);

return statearr_72517;
})();
if(inst_72496){
var statearr_72518_75304 = state_72511__$1;
(statearr_72518_75304[(1)] = (5));

} else {
var statearr_72519_75305 = state_72511__$1;
(statearr_72519_75305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72512 === (6))){
var inst_72495 = (state_72511[(8)]);
var state_72511__$1 = state_72511;
var statearr_72520_75308 = state_72511__$1;
(statearr_72520_75308[(2)] = inst_72495);

(statearr_72520_75308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72512 === (3))){
var inst_72491 = (state_72511[(2)]);
var state_72511__$1 = state_72511;
var statearr_72521_75309 = state_72511__$1;
(statearr_72521_75309[(2)] = inst_72491);


cljs.core.async.impl.ioc_helpers.process_exception(state_72511__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72512 === (2))){
var inst_72509 = (state_72511[(2)]);
var state_72511__$1 = state_72511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72511__$1,inst_72509);
} else {
if((state_val_72512 === (11))){
var inst_72507 = (state_72511[(2)]);
var state_72511__$1 = state_72511;
var statearr_72522_75312 = state_72511__$1;
(statearr_72522_75312[(2)] = inst_72507);


cljs.core.async.impl.ioc_helpers.process_exception(state_72511__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72512 === (9))){
var inst_72502 = (state_72511[(7)]);
var state_72511__$1 = state_72511;
var statearr_72523_75313 = state_72511__$1;
(statearr_72523_75313[(2)] = inst_72502);

(statearr_72523_75313[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72512 === (5))){
var inst_72495 = (state_72511[(8)]);
var state_72511__$1 = state_72511;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72511__$1,(8),inst_72495);
} else {
if((state_val_72512 === (10))){
var inst_72505 = cljs.core.PersistentHashMap.EMPTY;
var state_72511__$1 = state_72511;
var statearr_72524_75314 = state_72511__$1;
(statearr_72524_75314[(2)] = inst_72505);

(statearr_72524_75314[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72512 === (8))){
var inst_72499 = (state_72511[(2)]);
var state_72511__$1 = state_72511;
var statearr_72525_75317 = state_72511__$1;
(statearr_72525_75317[(2)] = inst_72499);

(statearr_72525_75317[(1)] = (7));


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
});})(c__45808__auto____$1,input,first__71787,vec__71797,step,entity,key_SINGLEQUOTE_,seq__71786,G__71784,cache_QMARK_,out_left,failed_resolvers,map__71807,seq__71798,vec__71804,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,vec__71785,tail,first__71799,inst_71837,inst_71835,inst_71795,inst_71836,inst_71789,inst_71841,inst_71801,inst_71838,inst_71839,inst_71792,inst_71840,inst_71802,inst_71794,inst_71809,inst_71808,inst_71790,inst_71793,inst_71834,inst_71844,inst_71862,inst_71863,inst_71864,inst_71865,inst_71866,state_val_72285,c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
;
return ((function (switch__45525__auto__,c__45808__auto____$1,input,first__71787,vec__71797,step,entity,key_SINGLEQUOTE_,seq__71786,G__71784,cache_QMARK_,out_left,failed_resolvers,map__71807,seq__71798,vec__71804,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,vec__71785,tail,first__71799,inst_71837,inst_71835,inst_71795,inst_71836,inst_71789,inst_71841,inst_71801,inst_71838,inst_71839,inst_71792,inst_71840,inst_71802,inst_71794,inst_71809,inst_71808,inst_71790,inst_71793,inst_71834,inst_71844,inst_71862,inst_71863,inst_71864,inst_71865,inst_71866,state_val_72285,c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto____0 = (function (){
var statearr_72526 = [null,null,null,null,null,null,null,null,null];
(statearr_72526[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto__);

(statearr_72526[(1)] = (1));

return statearr_72526;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto____1 = (function (state_72511){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_72511);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e72527){if((e72527 instanceof Object)){
var ex__45529__auto__ = e72527;
var statearr_72528_75322 = state_72511;
(statearr_72528_75322[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_72511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72527;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75323 = state_72511;
state_72511 = G__75323;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto__ = function(state_72511){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto____1.call(this,state_72511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto____$1,input,first__71787,vec__71797,step,entity,key_SINGLEQUOTE_,seq__71786,G__71784,cache_QMARK_,out_left,failed_resolvers,map__71807,seq__71798,vec__71804,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,vec__71785,tail,first__71799,inst_71837,inst_71835,inst_71795,inst_71836,inst_71789,inst_71841,inst_71801,inst_71838,inst_71839,inst_71792,inst_71840,inst_71802,inst_71794,inst_71809,inst_71808,inst_71790,inst_71793,inst_71834,inst_71844,inst_71862,inst_71863,inst_71864,inst_71865,inst_71866,state_val_72285,c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var state__45810__auto__ = (function (){var statearr_72529 = f__45809__auto__();
(statearr_72529[(6)] = c__45808__auto____$1);

return statearr_72529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto____$1,input,first__71787,vec__71797,step,entity,key_SINGLEQUOTE_,seq__71786,G__71784,cache_QMARK_,out_left,failed_resolvers,map__71807,seq__71798,vec__71804,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,vec__71785,tail,first__71799,inst_71837,inst_71835,inst_71795,inst_71836,inst_71789,inst_71841,inst_71801,inst_71838,inst_71839,inst_71792,inst_71840,inst_71802,inst_71794,inst_71809,inst_71808,inst_71790,inst_71793,inst_71834,inst_71844,inst_71862,inst_71863,inst_71864,inst_71865,inst_71866,state_val_72285,c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
);

return c__45808__auto____$1;
});
;})(input,first__71787,vec__71797,step,entity,key_SINGLEQUOTE_,seq__71786,G__71784,cache_QMARK_,out_left,failed_resolvers,map__71807,seq__71798,vec__71804,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,vec__71785,tail,first__71799,inst_71837,inst_71835,inst_71795,inst_71836,inst_71789,inst_71841,inst_71801,inst_71838,inst_71839,inst_71792,inst_71840,inst_71802,inst_71794,inst_71809,inst_71808,inst_71790,inst_71793,inst_71834,inst_71844,inst_71862,inst_71863,inst_71864,inst_71865,inst_71866,state_val_72285,c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_71868 = com.wsscode.pathom.core.cached_async(inst_71839,inst_71866,inst_71867);
var state_72277__$1 = (function (){var statearr_72530 = state_72277;
(statearr_72530[(54)] = inst_71863);

return statearr_72530;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72277__$1,(29),inst_71868);
} else {
if((state_val_72285 === (16))){
var inst_71840 = (state_72277[(35)]);
var inst_71808 = (state_72277[(13)]);
var inst_71847 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71848 = [inst_71808];
var inst_71849 = (new cljs.core.PersistentVector(null,1,(5),inst_71847,inst_71848,null));
var inst_71850 = cljs.core.select_keys(inst_71840,inst_71849);
var state_72277__$1 = state_72277;
var statearr_72533_75334 = state_72277__$1;
(statearr_72533_75334[(2)] = inst_71850);

(statearr_72533_75334[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (81))){
var inst_72055 = (state_72277[(48)]);
var inst_71795 = (state_72277[(7)]);
var inst_72068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72055,(0),null);
var inst_72069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72055,(1),null);
var inst_72070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72055,(2),null);
var tmp72490 = inst_71795;
var inst_71792 = inst_72068;
var inst_71793 = inst_72069;
var inst_71794 = inst_72070;
var inst_71795__$1 = tmp72490;
var state_72277__$1 = (function (){var statearr_72534 = state_72277;
(statearr_72534[(7)] = inst_71795__$1);

(statearr_72534[(12)] = inst_71792);

(statearr_72534[(9)] = inst_71794);

(statearr_72534[(10)] = inst_71793);

return statearr_72534;
})();
var statearr_72535_75335 = state_72277__$1;
(statearr_72535_75335[(2)] = null);

(statearr_72535_75335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (79))){
var inst_72022 = (state_72277[(50)]);
var inst_71795 = (state_72277[(7)]);
var inst_71802 = (state_72277[(8)]);
var inst_71794 = (state_72277[(9)]);
var inst_71793 = (state_72277[(10)]);
var inst_72037 = (state_72277[(2)]);
var inst_72039 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_71794,inst_72022);
var tmp72531 = inst_71795;
var tmp72532 = inst_71793;
var inst_71792 = inst_71802;
var inst_71793__$1 = tmp72532;
var inst_71794__$1 = inst_72039;
var inst_71795__$1 = tmp72531;
var state_72277__$1 = (function (){var statearr_72537 = state_72277;
(statearr_72537[(7)] = inst_71795__$1);

(statearr_72537[(12)] = inst_71792);

(statearr_72537[(55)] = inst_72037);

(statearr_72537[(9)] = inst_71794__$1);

(statearr_72537[(10)] = inst_71793__$1);

return statearr_72537;
})();
var statearr_72538_75337 = state_72277__$1;
(statearr_72538_75337[(2)] = null);

(statearr_72538_75337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (38))){
var state_72277__$1 = state_72277;
var statearr_72539_75338 = state_72277__$1;
(statearr_72539_75338[(2)] = false);

(statearr_72539_75338[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (98))){
var inst_71795 = (state_72277[(7)]);
var inst_72132 = (state_72277[(52)]);
var inst_72141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72132,(0),null);
var inst_72142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72132,(1),null);
var inst_72143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72132,(2),null);
var tmp72536 = inst_71795;
var inst_71792 = inst_72141;
var inst_71793 = inst_72142;
var inst_71794 = inst_72143;
var inst_71795__$1 = tmp72536;
var state_72277__$1 = (function (){var statearr_72540 = state_72277;
(statearr_72540[(7)] = inst_71795__$1);

(statearr_72540[(12)] = inst_71792);

(statearr_72540[(9)] = inst_71794);

(statearr_72540[(10)] = inst_71793);

return statearr_72540;
})();
var statearr_72541_75340 = state_72277__$1;
(statearr_72541_75340[(2)] = null);

(statearr_72541_75340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (87))){
var inst_72116 = (state_72277[(2)]);
var inst_72117 = cljs.core.async.close_BANG_(ch);
var state_72277__$1 = (function (){var statearr_72542 = state_72277;
(statearr_72542[(56)] = inst_72116);

return statearr_72542;
})();
var statearr_72543_75341 = state_72277__$1;
(statearr_72543_75341[(2)] = inst_72117);

(statearr_72543_75341[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (30))){
var inst_71839 = (state_72277[(14)]);
var inst_71808 = (state_72277[(13)]);
var inst_71844 = (state_72277[(40)]);
var inst_71876 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inst_71844,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","waiting-resolver","com.wsscode.pathom.connect/waiting-resolver",-321792495),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","waiting-key","com.wsscode.pathom.connect/waiting-key",261572653),inst_71808], 0));
var inst_71877 = com.wsscode.pathom.trace.trace(inst_71839,inst_71876);
var inst_71879 = com.wsscode.pathom.parser.watch_pending_key(inst_71839,inst_71808);
var state_72277__$1 = (function (){var statearr_72544 = state_72277;
(statearr_72544[(57)] = inst_71877);

return statearr_72544;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72277__$1,(33),inst_71879);
} else {
if((state_val_72285 === (73))){
var inst_71837 = (state_72277[(33)]);
var inst_71940 = (state_72277[(29)]);
var inst_71835 = (state_72277[(37)]);
var inst_71795 = (state_72277[(7)]);
var inst_71836 = (state_72277[(38)]);
var inst_72005 = (state_72277[(20)]);
var inst_71789 = (state_72277[(24)]);
var inst_71841 = (state_72277[(34)]);
var inst_71801 = (state_72277[(28)]);
var inst_71838 = (state_72277[(39)]);
var inst_71839 = (state_72277[(14)]);
var inst_71792 = (state_72277[(12)]);
var inst_71840 = (state_72277[(35)]);
var inst_71939 = (state_72277[(15)]);
var inst_71802 = (state_72277[(8)]);
var inst_71794 = (state_72277[(9)]);
var inst_71809 = (state_72277[(16)]);
var inst_71808 = (state_72277[(13)]);
var inst_71790 = (state_72277[(25)]);
var inst_71793 = (state_72277[(10)]);
var inst_71834 = (state_72277[(36)]);
var inst_71844 = (state_72277[(40)]);
var inst_72005__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_71939,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_72006 = (function (){var input = inst_71837;
var first__71787 = inst_71789;
var vec__71797 = inst_71792;
var step = inst_71801;
var entity = inst_71840;
var key_SINGLEQUOTE_ = inst_71808;
var seq__71786 = inst_71790;
var response = inst_72005__$1;
var G__71784 = inst_71792;
var cache_QMARK_ = inst_71835;
var out_left = inst_71794;
var failed_resolvers = inst_71793;
var map__71807 = inst_71834;
var seq__71798 = inst_71802;
var vec__71804 = inst_71801;
var batch_QMARK_ = inst_71836;
var output = inst_71838;
var env__$2 = inst_71839;
var e = inst_71841;
var resolver_sym = inst_71809;
var waiting__$1 = inst_71795;
var trace_data = inst_71844;
var resolver = inst_71834;
var vec__71785 = plan;
var replan = inst_71940;
var tail = inst_71802;
var first__71799 = inst_71801;
return ((function (input,first__71787,vec__71797,step,entity,key_SINGLEQUOTE_,seq__71786,response,G__71784,cache_QMARK_,out_left,failed_resolvers,map__71807,seq__71798,vec__71804,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,vec__71785,replan,tail,first__71799,inst_71837,inst_71940,inst_71835,inst_71795,inst_71836,inst_72005,inst_71789,inst_71841,inst_71801,inst_71838,inst_71839,inst_71792,inst_71840,inst_71939,inst_71802,inst_71794,inst_71809,inst_71808,inst_71790,inst_71793,inst_71834,inst_71844,inst_72005__$1,state_val_72285,c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (p1__71773_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__71773_SHARP_], 0));
});
;})(input,first__71787,vec__71797,step,entity,key_SINGLEQUOTE_,seq__71786,response,G__71784,cache_QMARK_,out_left,failed_resolvers,map__71807,seq__71798,vec__71804,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,vec__71785,replan,tail,first__71799,inst_71837,inst_71940,inst_71835,inst_71795,inst_71836,inst_72005,inst_71789,inst_71841,inst_71801,inst_71838,inst_71839,inst_71792,inst_71840,inst_71939,inst_71802,inst_71794,inst_71809,inst_71808,inst_71790,inst_71793,inst_71834,inst_71844,inst_72005__$1,state_val_72285,c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_72007 = com.wsscode.pathom.core.swap_entity_BANG_(inst_71839,inst_72006);
var inst_72016 = cljs.core.contains_QMARK_(inst_72005__$1,inst_71808);
var inst_72017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72005__$1,inst_71808);
var inst_72018 = (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(inst_72017) : com.wsscode.pathom.core.break_values.call(null,inst_72017));
var inst_72019 = cljs.core.not(inst_72018);
var inst_72020 = ((inst_72016) && (inst_72019));
var state_72277__$1 = (function (){var statearr_72545 = state_72277;
(statearr_72545[(58)] = inst_72007);

(statearr_72545[(20)] = inst_72005__$1);

return statearr_72545;
})();
if(cljs.core.truth_(inst_72020)){
var statearr_72546_75350 = state_72277__$1;
(statearr_72546_75350[(1)] = (76));

} else {
var statearr_72547_75351 = state_72277__$1;
(statearr_72547_75351[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (96))){
var inst_72249 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72548_75352 = state_72277__$1;
(statearr_72548_75352[(2)] = inst_72249);

(statearr_72548_75352[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (10))){
var state_72277__$1 = state_72277;
var statearr_72549_75354 = state_72277__$1;
(statearr_72549_75354[(2)] = true);

(statearr_72549_75354[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (18))){
var inst_71837 = (state_72277[(33)]);
var inst_71835 = (state_72277[(37)]);
var inst_71795 = (state_72277[(7)]);
var inst_71836 = (state_72277[(38)]);
var inst_71789 = (state_72277[(24)]);
var inst_71841 = (state_72277[(34)]);
var inst_71801 = (state_72277[(28)]);
var inst_71838 = (state_72277[(39)]);
var inst_71839 = (state_72277[(14)]);
var inst_71792 = (state_72277[(12)]);
var inst_71840 = (state_72277[(35)]);
var inst_71939 = (state_72277[(15)]);
var inst_71802 = (state_72277[(8)]);
var inst_71794 = (state_72277[(9)]);
var inst_71809 = (state_72277[(16)]);
var inst_71808 = (state_72277[(13)]);
var inst_71790 = (state_72277[(25)]);
var inst_71793 = (state_72277[(10)]);
var inst_71834 = (state_72277[(36)]);
var inst_71844 = (state_72277[(40)]);
var inst_71939__$1 = (state_72277[(2)]);
var inst_71940 = (function (){var input = inst_71837;
var first__71787 = inst_71789;
var vec__71797 = inst_71792;
var step = inst_71801;
var entity = inst_71840;
var key_SINGLEQUOTE_ = inst_71808;
var seq__71786 = inst_71790;
var response = inst_71939__$1;
var G__71784 = inst_71792;
var cache_QMARK_ = inst_71835;
var out_left = inst_71794;
var failed_resolvers = inst_71793;
var map__71807 = inst_71834;
var seq__71798 = inst_71802;
var vec__71804 = inst_71801;
var batch_QMARK_ = inst_71836;
var output = inst_71838;
var env__$2 = inst_71839;
var e = inst_71841;
var resolver_sym = inst_71809;
var waiting__$1 = inst_71795;
var trace_data = inst_71844;
var resolver = inst_71834;
var vec__71785 = plan;
var tail = inst_71802;
var first__71799 = inst_71801;
return ((function (input,first__71787,vec__71797,step,entity,key_SINGLEQUOTE_,seq__71786,response,G__71784,cache_QMARK_,out_left,failed_resolvers,map__71807,seq__71798,vec__71804,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,vec__71785,tail,first__71799,inst_71837,inst_71835,inst_71795,inst_71836,inst_71789,inst_71841,inst_71801,inst_71838,inst_71839,inst_71792,inst_71840,inst_71939,inst_71802,inst_71794,inst_71809,inst_71808,inst_71790,inst_71793,inst_71834,inst_71844,inst_71939__$1,state_val_72285,c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (value,error){
var c__45808__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto____$1,input,first__71787,vec__71797,step,entity,key_SINGLEQUOTE_,seq__71786,response,G__71784,cache_QMARK_,out_left,failed_resolvers,map__71807,seq__71798,vec__71804,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,vec__71785,tail,first__71799,inst_71837,inst_71835,inst_71795,inst_71836,inst_71789,inst_71841,inst_71801,inst_71838,inst_71839,inst_71792,inst_71840,inst_71939,inst_71802,inst_71794,inst_71809,inst_71808,inst_71790,inst_71793,inst_71834,inst_71844,inst_71939__$1,state_val_72285,c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto____$1,input,first__71787,vec__71797,step,entity,key_SINGLEQUOTE_,seq__71786,response,G__71784,cache_QMARK_,out_left,failed_resolvers,map__71807,seq__71798,vec__71804,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,vec__71785,tail,first__71799,inst_71837,inst_71835,inst_71795,inst_71836,inst_71789,inst_71841,inst_71801,inst_71838,inst_71839,inst_71792,inst_71840,inst_71939,inst_71802,inst_71794,inst_71809,inst_71808,inst_71790,inst_71793,inst_71834,inst_71844,inst_71939__$1,state_val_72285,c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (state_72572){
var state_val_72573 = (state_72572[(1)]);
if((state_val_72573 === (1))){
var inst_72550 = (state_72572[(7)]);
var inst_72553 = (state_72572[(8)]);
var inst_72550__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers,resolver_sym,error);
var inst_72551 = (function (){var failed_resolvers__$1 = inst_72550__$1;
return ((function (failed_resolvers__$1,inst_72550,inst_72553,inst_72550__$1,state_val_72573,c__45808__auto____$1,input,first__71787,vec__71797,step,entity,key_SINGLEQUOTE_,seq__71786,response,G__71784,cache_QMARK_,out_left,failed_resolvers,map__71807,seq__71798,vec__71804,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,vec__71785,tail,first__71799,inst_71837,inst_71835,inst_71795,inst_71836,inst_71789,inst_71841,inst_71801,inst_71838,inst_71839,inst_71792,inst_71840,inst_71939,inst_71802,inst_71794,inst_71809,inst_71808,inst_71790,inst_71793,inst_71834,inst_71844,inst_71939__$1,state_val_72285,c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (p1__71772_SHARP_){
var x__4222__auto__ = ((function (){var or__4131__auto__ = p1__71772_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() * (2));
var y__4223__auto__ = max_resolver_weight;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});
;})(failed_resolvers__$1,inst_72550,inst_72553,inst_72550__$1,state_val_72573,c__45808__auto____$1,input,first__71787,vec__71797,step,entity,key_SINGLEQUOTE_,seq__71786,response,G__71784,cache_QMARK_,out_left,failed_resolvers,map__71807,seq__71798,vec__71804,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,vec__71785,tail,first__71799,inst_71837,inst_71835,inst_71795,inst_71836,inst_71789,inst_71841,inst_71801,inst_71838,inst_71839,inst_71792,inst_71840,inst_71939,inst_71802,inst_71794,inst_71809,inst_71808,inst_71790,inst_71793,inst_71834,inst_71844,inst_71939__$1,state_val_72285,c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_72552 = com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$2,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_72551], 0));
var inst_72553__$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$2,inst_72550__$1);
var state_72572__$1 = (function (){var statearr_72574 = state_72572;
(statearr_72574[(7)] = inst_72550__$1);

(statearr_72574[(8)] = inst_72553__$1);

(statearr_72574[(9)] = inst_72552);

return statearr_72574;
})();
if(cljs.core.truth_(inst_72553__$1)){
var statearr_72575_75365 = state_72572__$1;
(statearr_72575_75365[(1)] = (2));

} else {
var statearr_72576_75367 = state_72572__$1;
(statearr_72576_75367[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72573 === (2))){
var inst_72553 = (state_72572[(8)]);
var inst_72559 = (state_72572[(10)]);
var inst_72558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72553,(0),null);
var inst_72559__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72553,(1),null);
var inst_72560 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_72561 = [out,inst_72559__$1,value];
var inst_72562 = cljs.core.PersistentHashMap.fromArrays(inst_72560,inst_72561);
var state_72572__$1 = (function (){var statearr_72577 = state_72572;
(statearr_72577[(11)] = inst_72558);

(statearr_72577[(10)] = inst_72559__$1);

return statearr_72577;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72572__$1,(5),ch,inst_72562);
} else {
if((state_val_72573 === (3))){
var state_72572__$1 = state_72572;
var statearr_72578_75369 = state_72572__$1;
(statearr_72578_75369[(2)] = null);

(statearr_72578_75369[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72573 === (4))){
var inst_72570 = (state_72572[(2)]);
var state_72572__$1 = state_72572;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72572__$1,inst_72570);
} else {
if((state_val_72573 === (5))){
var inst_72558 = (state_72572[(11)]);
var inst_72550 = (state_72572[(7)]);
var inst_72559 = (state_72572[(10)]);
var inst_72564 = (state_72572[(2)]);
var inst_72565 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_72566 = [inst_72558,inst_72550,inst_72559];
var inst_72567 = (new cljs.core.PersistentVector(null,3,(5),inst_72565,inst_72566,null));
var state_72572__$1 = (function (){var statearr_72579 = state_72572;
(statearr_72579[(12)] = inst_72564);

return statearr_72579;
})();
var statearr_72580_75378 = state_72572__$1;
(statearr_72580_75378[(2)] = inst_72567);

(statearr_72580_75378[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__45808__auto____$1,input,first__71787,vec__71797,step,entity,key_SINGLEQUOTE_,seq__71786,response,G__71784,cache_QMARK_,out_left,failed_resolvers,map__71807,seq__71798,vec__71804,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,vec__71785,tail,first__71799,inst_71837,inst_71835,inst_71795,inst_71836,inst_71789,inst_71841,inst_71801,inst_71838,inst_71839,inst_71792,inst_71840,inst_71939,inst_71802,inst_71794,inst_71809,inst_71808,inst_71790,inst_71793,inst_71834,inst_71844,inst_71939__$1,state_val_72285,c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
;
return ((function (switch__45525__auto__,c__45808__auto____$1,input,first__71787,vec__71797,step,entity,key_SINGLEQUOTE_,seq__71786,response,G__71784,cache_QMARK_,out_left,failed_resolvers,map__71807,seq__71798,vec__71804,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,vec__71785,tail,first__71799,inst_71837,inst_71835,inst_71795,inst_71836,inst_71789,inst_71841,inst_71801,inst_71838,inst_71839,inst_71792,inst_71840,inst_71939,inst_71802,inst_71794,inst_71809,inst_71808,inst_71790,inst_71793,inst_71834,inst_71844,inst_71939__$1,state_val_72285,c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto____0 = (function (){
var statearr_72581 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72581[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto__);

(statearr_72581[(1)] = (1));

return statearr_72581;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto____1 = (function (state_72572){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_72572);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e72582){if((e72582 instanceof Object)){
var ex__45529__auto__ = e72582;
var statearr_72583_75382 = state_72572;
(statearr_72583_75382[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_72572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72582;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75383 = state_72572;
state_72572 = G__75383;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto__ = function(state_72572){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto____1.call(this,state_72572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto____$1,input,first__71787,vec__71797,step,entity,key_SINGLEQUOTE_,seq__71786,response,G__71784,cache_QMARK_,out_left,failed_resolvers,map__71807,seq__71798,vec__71804,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,vec__71785,tail,first__71799,inst_71837,inst_71835,inst_71795,inst_71836,inst_71789,inst_71841,inst_71801,inst_71838,inst_71839,inst_71792,inst_71840,inst_71939,inst_71802,inst_71794,inst_71809,inst_71808,inst_71790,inst_71793,inst_71834,inst_71844,inst_71939__$1,state_val_72285,c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var state__45810__auto__ = (function (){var statearr_72584 = f__45809__auto__();
(statearr_72584[(6)] = c__45808__auto____$1);

return statearr_72584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto____$1,input,first__71787,vec__71797,step,entity,key_SINGLEQUOTE_,seq__71786,response,G__71784,cache_QMARK_,out_left,failed_resolvers,map__71807,seq__71798,vec__71804,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,vec__71785,tail,first__71799,inst_71837,inst_71835,inst_71795,inst_71836,inst_71789,inst_71841,inst_71801,inst_71838,inst_71839,inst_71792,inst_71840,inst_71939,inst_71802,inst_71794,inst_71809,inst_71808,inst_71790,inst_71793,inst_71834,inst_71844,inst_71939__$1,state_val_72285,c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
);

return c__45808__auto____$1;
});
;})(input,first__71787,vec__71797,step,entity,key_SINGLEQUOTE_,seq__71786,response,G__71784,cache_QMARK_,out_left,failed_resolvers,map__71807,seq__71798,vec__71804,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,vec__71785,tail,first__71799,inst_71837,inst_71835,inst_71795,inst_71836,inst_71789,inst_71841,inst_71801,inst_71838,inst_71839,inst_71792,inst_71840,inst_71939,inst_71802,inst_71794,inst_71809,inst_71808,inst_71790,inst_71793,inst_71834,inst_71844,inst_71939__$1,state_val_72285,c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_71941 = (new cljs.core.Keyword("com.wsscode.pathom.parser","watch-pending-timeout","com.wsscode.pathom.parser/watch-pending-timeout",1047721820) === inst_71939__$1);
var state_72277__$1 = (function (){var statearr_72585 = state_72277;
(statearr_72585[(29)] = inst_71940);

(statearr_72585[(15)] = inst_71939__$1);

return statearr_72585;
})();
if(cljs.core.truth_(inst_71941)){
var statearr_72586_75386 = state_72277__$1;
(statearr_72586_75386[(1)] = (59));

} else {
var statearr_72587_75387 = state_72277__$1;
(statearr_72587_75387[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (105))){
var inst_71940 = (state_72277[(29)]);
var inst_71939 = (state_72277[(15)]);
var inst_72188 = cljs.core.PersistentHashMap.EMPTY;
var inst_72189 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_72194 = [inst_71939];
var inst_72195 = cljs.core.PersistentHashMap.fromArrays(inst_72189,inst_72194);
var inst_72196 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_72195);
var inst_72197 = (inst_71940.cljs$core$IFn$_invoke$arity$2 ? inst_71940.cljs$core$IFn$_invoke$arity$2(inst_72188,inst_72196) : inst_71940.call(null,inst_72188,inst_72196));
var state_72277__$1 = state_72277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72277__$1,(108),inst_72197);
} else {
if((state_val_72285 === (52))){
var inst_71915 = (state_72277[(47)]);
var state_72277__$1 = state_72277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72277__$1,(55),inst_71915);
} else {
if((state_val_72285 === (67))){
var inst_72001 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72588_75389 = state_72277__$1;
(statearr_72588_75389[(2)] = inst_72001);

(statearr_72588_75389[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (71))){
var inst_71999 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72589_75390 = state_72277__$1;
(statearr_72589_75390[(2)] = inst_71999);

(statearr_72589_75390[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (42))){
var inst_71903 = (state_72277[(45)]);
var inst_71902 = (state_72277[(2)]);
var inst_71903__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71902,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973));
var state_72277__$1 = (function (){var statearr_72590 = state_72277;
(statearr_72590[(45)] = inst_71903__$1);

return statearr_72590;
})();
if(cljs.core.truth_(inst_71903__$1)){
var statearr_72591_75391 = state_72277__$1;
(statearr_72591_75391[(1)] = (43));

} else {
var statearr_72592_75392 = state_72277__$1;
(statearr_72592_75392[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (80))){
var inst_72055 = (state_72277[(48)]);
var inst_72055__$1 = (state_72277[(2)]);
var state_72277__$1 = (function (){var statearr_72593 = state_72277;
(statearr_72593[(48)] = inst_72055__$1);

return statearr_72593;
})();
if(cljs.core.truth_(inst_72055__$1)){
var statearr_72594_75394 = state_72277__$1;
(statearr_72594_75394[(1)] = (81));

} else {
var statearr_72595_75395 = state_72277__$1;
(statearr_72595_75395[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (37))){
var state_72277__$1 = state_72277;
var statearr_72596_75396 = state_72277__$1;
(statearr_72596_75396[(2)] = true);

(statearr_72596_75396[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (63))){
var inst_71939 = (state_72277[(15)]);
var inst_72003 = cljs.core.map_QMARK_(inst_71939);
var state_72277__$1 = state_72277;
if(inst_72003){
var statearr_72597_75397 = state_72277__$1;
(statearr_72597_75397[(1)] = (73));

} else {
var statearr_72598_75398 = state_72277__$1;
(statearr_72598_75398[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (94))){
var inst_71940 = (state_72277[(29)]);
var inst_71939 = (state_72277[(15)]);
var inst_72129 = cljs.core.PersistentHashMap.EMPTY;
var inst_72130 = (inst_71940.cljs$core$IFn$_invoke$arity$2 ? inst_71940.cljs$core$IFn$_invoke$arity$2(inst_72129,inst_71939) : inst_71940.call(null,inst_72129,inst_71939));
var state_72277__$1 = state_72277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72277__$1,(97),inst_72130);
} else {
if((state_val_72285 === (8))){
var state_72277__$1 = state_72277;
var statearr_72599_75401 = state_72277__$1;
(statearr_72599_75401[(2)] = false);

(statearr_72599_75401[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (49))){
var inst_71930 = (state_72277[(2)]);
var state_72277__$1 = state_72277;
var statearr_72600_75402 = state_72277__$1;
(statearr_72600_75402[(2)] = inst_71930);

(statearr_72600_75402[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72285 === (84))){
var inst_71839 = (state_72277[(14)]);
var inst_72083 = (state_72277[(46)]);
var inst_72088 = com.wsscode.pathom.core.add_error(inst_71839,inst_72083);
var state_72277__$1 = state_72277;
var statearr_72601_75405 = state_72277__$1;
(statearr_72601_75405[(2)] = inst_72088);

(statearr_72601_75405[(1)] = (86));


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
});})(c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
;
return ((function (switch__45525__auto__,c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto____0 = (function (){
var statearr_72602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72602[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto__);

(statearr_72602[(1)] = (1));

return statearr_72602;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto____1 = (function (state_72277){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_72277);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e72603){if((e72603 instanceof Object)){
var ex__45529__auto__ = e72603;
var statearr_72604_75410 = state_72277;
(statearr_72604_75410[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_72277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72603;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75411 = state_72277;
state_72277 = G__75411;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto__ = function(state_72277){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto____1.call(this,state_72277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var state__45810__auto__ = (function (){var statearr_72605 = f__45809__auto__();
(statearr_72605[(6)] = c__45808__auto___75067);

return statearr_72605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto___75067,ch,key,params,env__$1,vec__71778,plan,out,temp__5718__auto__,map__71776,map__71776__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
);


return ch;
})()], null);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.index_reader = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),(function (p__72606){
var map__72607 = p__72606;
var map__72607__$1 = (((((!((map__72607 == null))))?(((((map__72607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72607):map__72607);
var env = map__72607__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72607__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(indexes,env);
})], null);
com.wsscode.pathom.connect.indexed_ident = (function com$wsscode$pathom$connect$indexed_ident(p__72609){
var map__72610 = p__72609;
var map__72610__$1 = (((((!((map__72610 == null))))?(((((map__72610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72610):map__72610);
var env = map__72610__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72610__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
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
com.wsscode.pathom.connect.resolver = (function com$wsscode$pathom$connect$resolver(sym,p__72612,resolve){
var map__72613 = p__72612;
var map__72613__$1 = (((((!((map__72613 == null))))?(((((map__72613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72613):map__72613);
var options = map__72613__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72613__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322));
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Resolver name must be a symbol","\n","(symbol? sym)"].join('')));
}

var G__72615 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),resolve], null),options], 0));
if(cljs.core.truth_(transform)){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__72615) : transform.call(null,G__72615));
} else {
return G__72615;
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
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),com.wsscode.pathom.connect.attr_alias_name(from,to),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.PersistentHashSet.createAsIfByAssoc([from]),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [to], null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),(function (_,input){
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
var G__72617 = arguments.length;
switch (G__72617) {
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

com.wsscode.pathom.connect.constantly_resolver.cljs$core$IFn$_invoke$arity$1 = (function (p__72618){
var map__72619 = p__72618;
var map__72619__$1 = (((((!((map__72619 == null))))?(((((map__72619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72619):map__72619);
var attribute = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72619__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72619__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72619__$1,new cljs.core.Keyword(null,"value","value",305978217));
var sym__$1 = (function (){var or__4131__auto__ = sym;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(attribute),(1)))),"-constant"].join(''));
}
})();
return com.wsscode.pathom.connect.resolver(sym__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attribute], null)], null),((function (sym__$1,map__72619,map__72619__$1,attribute,sym,value){
return (function (_,___$1){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([attribute,value]);
});})(sym__$1,map__72619,map__72619__$1,attribute,sym,value))
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
return cljs.core.PersistentArrayMap.createAsIfByAssoc([to,(function (){var G__72621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,from);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__72621) : f.call(null,G__72621));
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
return cljs.core.PersistentArrayMap.createAsIfByAssoc([to,(function (){var G__72622 = env;
var G__72623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,from);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__72622,G__72623) : f.call(null,G__72622,G__72623));
})()]);
});})(sym))
);
});
/**
 * Helper to return a mutation map
 */
com.wsscode.pathom.connect.mutation = (function com$wsscode$pathom$connect$mutation(sym,p__72624,mutate){
var map__72625 = p__72624;
var map__72625__$1 = (((((!((map__72625 == null))))?(((((map__72625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72625):map__72625);
var options = map__72625__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72625__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322));
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Mutation name must be a symbol","\n","(symbol? sym)"].join('')));
}

var G__72627 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),mutate], null),options], 0));
if(cljs.core.truth_(transform)){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__72627) : transform.call(null,G__72627));
} else {
return G__72627;
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
var G__72629 = arguments.length;
switch (G__72629) {
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
var res__61936__auto__ = (function (){var G__72630 = env;
var G__72631 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null);
return (multi_fn.cljs$core$IFn$_invoke$arity$2 ? multi_fn.cljs$core$IFn$_invoke$arity$2(G__72630,G__72631) : multi_fn.call(null,G__72630,G__72631));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__61936__auto__)){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,res__61936__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,res__61936__auto__){
return (function (state_72643){
var state_val_72644 = (state_72643[(1)]);
if((state_val_72644 === (1))){
var state_72643__$1 = state_72643;
var statearr_72645_75439 = state_72643__$1;
(statearr_72645_75439[(2)] = null);

(statearr_72645_75439[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72644 === (2))){
var inst_72641 = (state_72643[(2)]);
var state_72643__$1 = state_72643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72643__$1,inst_72641);
} else {
if((state_val_72644 === (3))){
var inst_72632 = (state_72643[(2)]);
var state_72643__$1 = state_72643;
var statearr_72646_75442 = state_72643__$1;
(statearr_72646_75442[(2)] = inst_72632);


cljs.core.async.impl.ioc_helpers.process_exception(state_72643__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72644 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_72643,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_72643__$1 = state_72643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72643__$1,(5),res__61936__auto__);
} else {
if((state_val_72644 === (5))){
var inst_72637 = (state_72643[(2)]);
var inst_72638 = com.wsscode.common.async_cljs.throw_err(inst_72637);
var inst_72639 = cljs.core.first(inst_72638);
var state_72643__$1 = state_72643;
var statearr_72647_75445 = state_72643__$1;
(statearr_72647_75445[(2)] = inst_72639);


cljs.core.async.impl.ioc_helpers.process_exception(state_72643__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__45808__auto__,res__61936__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto__,res__61936__auto__){
return (function() {
var com$wsscode$pathom$connect$state_machine__45526__auto__ = null;
var com$wsscode$pathom$connect$state_machine__45526__auto____0 = (function (){
var statearr_72648 = [null,null,null,null,null,null,null];
(statearr_72648[(0)] = com$wsscode$pathom$connect$state_machine__45526__auto__);

(statearr_72648[(1)] = (1));

return statearr_72648;
});
var com$wsscode$pathom$connect$state_machine__45526__auto____1 = (function (state_72643){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_72643);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e72649){if((e72649 instanceof Object)){
var ex__45529__auto__ = e72649;
var statearr_72650_75450 = state_72643;
(statearr_72650_75450[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_72643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72649;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75451 = state_72643;
state_72643 = G__75451;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$connect$state_machine__45526__auto__ = function(state_72643){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$state_machine__45526__auto____1.call(this,state_72643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$state_machine__45526__auto____0;
com$wsscode$pathom$connect$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$state_machine__45526__auto____1;
return com$wsscode$pathom$connect$state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,res__61936__auto__))
})();
var state__45810__auto__ = (function (){var statearr_72651 = f__45809__auto__();
(statearr_72651[(6)] = c__45808__auto__);

return statearr_72651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,res__61936__auto__))
);

return c__45808__auto__;
} else {
var res = res__61936__auto__;
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
return (function (p__72652){
var map__72653 = p__72652;
var map__72653__$1 = (((((!((map__72653 == null))))?(((((map__72653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72653):map__72653);
var resolver = map__72653__$1;
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72653__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(resolver,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$1(((function (map__72653,map__72653__$1,resolver,resolve){
return (function (env,inputs){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,map__72653,map__72653__$1,resolver,resolve){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,map__72653,map__72653__$1,resolver,resolve){
return (function (state_72665){
var state_val_72666 = (state_72665[(1)]);
if((state_val_72666 === (1))){
var inst_72655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var inst_72656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var inst_72657 = cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(inst_72655,inputs);
var inst_72658 = (function (){var from_chan = inst_72655;
var out_chan = inst_72656;
return ((function (from_chan,out_chan,inst_72655,inst_72656,inst_72657,state_val_72666,c__45808__auto__,map__72653,map__72653__$1,resolver,resolve){
return (function com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline(input,res_ch){
var c__45808__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto____$1,from_chan,out_chan,inst_72655,inst_72656,inst_72657,state_val_72666,c__45808__auto__,map__72653,map__72653__$1,resolver,resolve){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto____$1,from_chan,out_chan,inst_72655,inst_72656,inst_72657,state_val_72666,c__45808__auto__,map__72653,map__72653__$1,resolver,resolve){
return (function (state_72679){
var state_val_72680 = (state_72679[(1)]);
if((state_val_72680 === (1))){
var inst_72667 = (state_72679[(7)]);
var inst_72667__$1 = (resolve.cljs$core$IFn$_invoke$arity$2 ? resolve.cljs$core$IFn$_invoke$arity$2(env,input) : resolve.call(null,env,input));
var inst_72668 = com.wsscode.common.async_cljs.chan_QMARK_(inst_72667__$1);
var state_72679__$1 = (function (){var statearr_72681 = state_72679;
(statearr_72681[(7)] = inst_72667__$1);

return statearr_72681;
})();
if(inst_72668){
var statearr_72682_75462 = state_72679__$1;
(statearr_72682_75462[(1)] = (2));

} else {
var statearr_72683_75463 = state_72679__$1;
(statearr_72683_75463[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72680 === (2))){
var inst_72667 = (state_72679[(7)]);
var state_72679__$1 = state_72679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72679__$1,(5),inst_72667);
} else {
if((state_val_72680 === (3))){
var inst_72667 = (state_72679[(7)]);
var state_72679__$1 = state_72679;
var statearr_72684_75466 = state_72679__$1;
(statearr_72684_75466[(2)] = inst_72667);

(statearr_72684_75466[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72680 === (4))){
var inst_72674 = (state_72679[(2)]);
var state_72679__$1 = state_72679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72679__$1,(6),res_ch,inst_72674);
} else {
if((state_val_72680 === (5))){
var inst_72671 = (state_72679[(2)]);
var state_72679__$1 = state_72679;
var statearr_72685_75467 = state_72679__$1;
(statearr_72685_75467[(2)] = inst_72671);

(statearr_72685_75467[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72680 === (6))){
var inst_72676 = (state_72679[(2)]);
var inst_72677 = cljs.core.async.close_BANG_(res_ch);
var state_72679__$1 = (function (){var statearr_72686 = state_72679;
(statearr_72686[(8)] = inst_72676);

return statearr_72686;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_72679__$1,inst_72677);
} else {
return null;
}
}
}
}
}
}
});})(c__45808__auto____$1,from_chan,out_chan,inst_72655,inst_72656,inst_72657,state_val_72666,c__45808__auto__,map__72653,map__72653__$1,resolver,resolve))
;
return ((function (switch__45525__auto__,c__45808__auto____$1,from_chan,out_chan,inst_72655,inst_72656,inst_72657,state_val_72666,c__45808__auto__,map__72653,map__72653__$1,resolver,resolve){
return (function() {
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__45526__auto____0 = (function (){
var statearr_72687 = [null,null,null,null,null,null,null,null,null];
(statearr_72687[(0)] = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__45526__auto__);

(statearr_72687[(1)] = (1));

return statearr_72687;
});
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__45526__auto____1 = (function (state_72679){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_72679);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e72688){if((e72688 instanceof Object)){
var ex__45529__auto__ = e72688;
var statearr_72689_75471 = state_72679;
(statearr_72689_75471[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_72679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72688;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75472 = state_72679;
state_72679 = G__75472;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__45526__auto__ = function(state_72679){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__45526__auto____1.call(this,state_72679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__45526__auto____0;
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__45526__auto____1;
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto____$1,from_chan,out_chan,inst_72655,inst_72656,inst_72657,state_val_72666,c__45808__auto__,map__72653,map__72653__$1,resolver,resolve))
})();
var state__45810__auto__ = (function (){var statearr_72690 = f__45809__auto__();
(statearr_72690[(6)] = c__45808__auto____$1);

return statearr_72690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto____$1,from_chan,out_chan,inst_72655,inst_72656,inst_72657,state_val_72666,c__45808__auto__,map__72653,map__72653__$1,resolver,resolve))
);

return c__45808__auto____$1;
});
;})(from_chan,out_chan,inst_72655,inst_72656,inst_72657,state_val_72666,c__45808__auto__,map__72653,map__72653__$1,resolver,resolve))
})();
var inst_72659 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4(n,inst_72656,inst_72658,inst_72655);
var inst_72660 = cljs.core.PersistentVector.EMPTY;
var inst_72661 = cljs.core.async.into(inst_72660,inst_72656);
var state_72665__$1 = (function (){var statearr_72691 = state_72665;
(statearr_72691[(7)] = inst_72659);

(statearr_72691[(8)] = inst_72657);

return statearr_72691;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72665__$1,(2),inst_72661);
} else {
if((state_val_72666 === (2))){
var inst_72663 = (state_72665[(2)]);
var state_72665__$1 = state_72665;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72665__$1,inst_72663);
} else {
return null;
}
}
});})(c__45808__auto__,map__72653,map__72653__$1,resolver,resolve))
;
return ((function (switch__45525__auto__,c__45808__auto__,map__72653,map__72653__$1,resolver,resolve){
return (function() {
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__45526__auto____0 = (function (){
var statearr_72692 = [null,null,null,null,null,null,null,null,null];
(statearr_72692[(0)] = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__45526__auto__);

(statearr_72692[(1)] = (1));

return statearr_72692;
});
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__45526__auto____1 = (function (state_72665){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_72665);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e72693){if((e72693 instanceof Object)){
var ex__45529__auto__ = e72693;
var statearr_72694_75476 = state_72665;
(statearr_72694_75476[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_72665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72693;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75477 = state_72665;
state_72665 = G__75477;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__45526__auto__ = function(state_72665){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__45526__auto____1.call(this,state_72665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__45526__auto____0;
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__45526__auto____1;
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,map__72653,map__72653__$1,resolver,resolve))
})();
var state__45810__auto__ = (function (){var statearr_72695 = f__45809__auto__();
(statearr_72695[(6)] = c__45808__auto__);

return statearr_72695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,map__72653,map__72653__$1,resolver,resolve))
);

return c__45808__auto__;
});})(map__72653,map__72653__$1,resolver,resolve))
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
com.wsscode.pathom.connect.mutation_dispatch_embedded = (function com$wsscode$pathom$connect$mutation_dispatch_embedded(p__72696,entity){
var map__72697 = p__72696;
var map__72697__$1 = (((((!((map__72697 == null))))?(((((map__72697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72697):map__72697);
var env = map__72697__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72697__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var sym = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
var map__72699 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym], null));
var map__72699__$1 = (((((!((map__72699 == null))))?(((((map__72699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72699):map__72699);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72699__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112));
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ",["Can't find mutate fn for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),"\n","mutate"].join('')));
}

return (mutate.cljs$core$IFn$_invoke$arity$2 ? mutate.cljs$core$IFn$_invoke$arity$2(env,entity) : mutate.call(null,env,entity));
});
/**
 * Sync mutate function to integrate connect mutations to pathom parser.
 */
com.wsscode.pathom.connect.mutate = (function com$wsscode$pathom$connect$mutate(p__72701,sym_SINGLEQUOTE_,p__72702){
var map__72703 = p__72701;
var map__72703__$1 = (((((!((map__72703 == null))))?(((((map__72703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72703):map__72703);
var env = map__72703__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72703__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var mutate_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72703__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069));
var mutation_join_globals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72703__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.PersistentVector.EMPTY);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72703__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72703__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__72704 = p__72702;
var map__72704__$1 = (((((!((map__72704 == null))))?(((((map__72704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72704):map__72704);
var input = map__72704__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72704__$1,new cljs.core.Keyword("pathom","context","pathom/context",-1452257614));
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym_SINGLEQUOTE_], null));
if(cljs.core.truth_(temp__5718__auto__)){
var map__72707 = temp__5718__auto__;
var map__72707__$1 = (((((!((map__72707 == null))))?(((((map__72707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72707):map__72707);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72707__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),sym);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env__$1,map__72707,map__72707__$1,sym,temp__5718__auto__,map__72703,map__72703__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__72704,map__72704__$1,input,context){
return (function (){
var res = (function (){var G__72709 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","source-mutation","com.wsscode.pathom.connect/source-mutation",-674985123),sym_SINGLEQUOTE_);
var G__72710 = input;
return (mutate_dispatch.cljs$core$IFn$_invoke$arity$2 ? mutate_dispatch.cljs$core$IFn$_invoke$arity$2(G__72709,G__72710) : mutate_dispatch.call(null,G__72709,G__72710));
})();
var res__$1 = (function (){var G__72711 = res;
if(cljs.core.truth_((function (){var and__4120__auto__ = context;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.map_QMARK_(res);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__72711,context], 0));
} else {
return G__72711;
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
});})(env__$1,map__72707,map__72707__$1,sym,temp__5718__auto__,map__72703,map__72703__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__72704,map__72704__$1,input,context))
], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Mutation not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutation","mutation",-285823378),sym_SINGLEQUOTE_], null));
}
});
/**
 * Async mutate function to integrate connect mutations to pathom parser.
 */
com.wsscode.pathom.connect.mutate_async = (function com$wsscode$pathom$connect$mutate_async(p__72712,sym_SINGLEQUOTE_,p__72713){
var map__72714 = p__72712;
var map__72714__$1 = (((((!((map__72714 == null))))?(((((map__72714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72714):map__72714);
var env = map__72714__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72714__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var mutate_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72714__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069));
var mutation_join_globals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72714__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.PersistentVector.EMPTY);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72714__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72714__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__72715 = p__72713;
var map__72715__$1 = (((((!((map__72715 == null))))?(((((map__72715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72715):map__72715);
var input = map__72715__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72715__$1,new cljs.core.Keyword("pathom","context","pathom/context",-1452257614));
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym_SINGLEQUOTE_], null));
if(cljs.core.truth_(temp__5718__auto__)){
var map__72718 = temp__5718__auto__;
var map__72718__$1 = (((((!((map__72718 == null))))?(((((map__72718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72718):map__72718);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72718__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),sym);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env__$1,map__72718,map__72718__$1,sym,temp__5718__auto__,map__72714,map__72714__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__72715,map__72715__$1,input,context){
return (function (){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,env__$1,map__72718,map__72718__$1,sym,temp__5718__auto__,map__72714,map__72714__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__72715,map__72715__$1,input,context){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,env__$1,map__72718,map__72718__$1,sym,temp__5718__auto__,map__72714,map__72714__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__72715,map__72715__$1,input,context){
return (function (state_72761){
var state_val_72762 = (state_72761[(1)]);
if((state_val_72762 === (7))){
var inst_72733 = (state_72761[(2)]);
var state_72761__$1 = (function (){var statearr_72763 = state_72761;
(statearr_72763[(7)] = inst_72733);

return statearr_72763;
})();
if(cljs.core.truth_(context)){
var statearr_72764_75500 = state_72761__$1;
(statearr_72764_75500[(1)] = (9));

} else {
var statearr_72765_75501 = state_72761__$1;
(statearr_72765_75501[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72762 === (1))){
var state_72761__$1 = state_72761;
var statearr_72766_75502 = state_72761__$1;
(statearr_72766_75502[(2)] = null);

(statearr_72766_75502[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72762 === (4))){
var inst_72725 = (state_72761[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_72761,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_72724 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","source-mutation","com.wsscode.pathom.connect/source-mutation",-674985123),sym_SINGLEQUOTE_);
var inst_72725__$1 = (mutate_dispatch.cljs$core$IFn$_invoke$arity$2 ? mutate_dispatch.cljs$core$IFn$_invoke$arity$2(inst_72724,input) : mutate_dispatch.call(null,inst_72724,input));
var inst_72726 = com.wsscode.common.async_cljs.chan_QMARK_(inst_72725__$1);
var state_72761__$1 = (function (){var statearr_72767 = state_72761;
(statearr_72767[(8)] = inst_72725__$1);

return statearr_72767;
})();
if(inst_72726){
var statearr_72768_75509 = state_72761__$1;
(statearr_72768_75509[(1)] = (5));

} else {
var statearr_72769_75511 = state_72761__$1;
(statearr_72769_75511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72762 === (15))){
var inst_72744 = (state_72761[(9)]);
var inst_72746 = cljs.core.select_keys(inst_72744,mutation_join_globals);
var inst_72747 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_72744);
var inst_72748 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-ast","com.wsscode.pathom.connect/mutation-ast",-602347707),ast);
var inst_72749 = com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(inst_72747,inst_72748);
var state_72761__$1 = (function (){var statearr_72770 = state_72761;
(statearr_72770[(10)] = inst_72746);

return statearr_72770;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72761__$1,(18),inst_72749);
} else {
if((state_val_72762 === (13))){
var inst_72733 = (state_72761[(7)]);
var state_72761__$1 = state_72761;
var statearr_72771_75512 = state_72761__$1;
(statearr_72771_75512[(2)] = inst_72733);

(statearr_72771_75512[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72762 === (6))){
var inst_72725 = (state_72761[(8)]);
var state_72761__$1 = state_72761;
var statearr_72772_75514 = state_72761__$1;
(statearr_72772_75514[(2)] = inst_72725);

(statearr_72772_75514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72762 === (17))){
var inst_72757 = (state_72761[(2)]);
var state_72761__$1 = state_72761;
var statearr_72773_75515 = state_72761__$1;
(statearr_72773_75515[(2)] = inst_72757);


cljs.core.async.impl.ioc_helpers.process_exception(state_72761__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72762 === (3))){
var inst_72720 = (state_72761[(2)]);
var state_72761__$1 = state_72761;
var statearr_72774_75517 = state_72761__$1;
(statearr_72774_75517[(2)] = inst_72720);


cljs.core.async.impl.ioc_helpers.process_exception(state_72761__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72762 === (12))){
var inst_72733 = (state_72761[(7)]);
var inst_72741 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_72733,context], 0));
var state_72761__$1 = state_72761;
var statearr_72775_75520 = state_72761__$1;
(statearr_72775_75520[(2)] = inst_72741);

(statearr_72775_75520[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72762 === (2))){
var inst_72759 = (state_72761[(2)]);
var state_72761__$1 = state_72761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72761__$1,inst_72759);
} else {
if((state_val_72762 === (11))){
var inst_72739 = (state_72761[(2)]);
var state_72761__$1 = state_72761;
if(cljs.core.truth_(inst_72739)){
var statearr_72776_75522 = state_72761__$1;
(statearr_72776_75522[(1)] = (12));

} else {
var statearr_72777_75523 = state_72761__$1;
(statearr_72777_75523[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72762 === (9))){
var inst_72733 = (state_72761[(7)]);
var inst_72736 = cljs.core.map_QMARK_(inst_72733);
var state_72761__$1 = state_72761;
var statearr_72778_75526 = state_72761__$1;
(statearr_72778_75526[(2)] = inst_72736);

(statearr_72778_75526[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72762 === (5))){
var inst_72725 = (state_72761[(8)]);
var state_72761__$1 = state_72761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72761__$1,(8),inst_72725);
} else {
if((state_val_72762 === (14))){
var inst_72744 = (state_72761[(2)]);
var state_72761__$1 = (function (){var statearr_72779 = state_72761;
(statearr_72779[(9)] = inst_72744);

return statearr_72779;
})();
if(cljs.core.truth_(query)){
var statearr_72780_75529 = state_72761__$1;
(statearr_72780_75529[(1)] = (15));

} else {
var statearr_72781_75530 = state_72761__$1;
(statearr_72781_75530[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72762 === (16))){
var inst_72744 = (state_72761[(9)]);
var inst_72755 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_72744,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378));
var state_72761__$1 = state_72761;
var statearr_72782_75531 = state_72761__$1;
(statearr_72782_75531[(2)] = inst_72755);

(statearr_72782_75531[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72762 === (10))){
var state_72761__$1 = state_72761;
var statearr_72783_75532 = state_72761__$1;
(statearr_72783_75532[(2)] = context);

(statearr_72783_75532[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72762 === (18))){
var inst_72746 = (state_72761[(10)]);
var inst_72751 = (state_72761[(2)]);
var inst_72752 = com.wsscode.common.async_cljs.throw_err(inst_72751);
var inst_72753 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_72746,inst_72752], 0));
var state_72761__$1 = state_72761;
var statearr_72784_75541 = state_72761__$1;
(statearr_72784_75541[(2)] = inst_72753);

(statearr_72784_75541[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72762 === (8))){
var inst_72729 = (state_72761[(2)]);
var inst_72730 = com.wsscode.common.async_cljs.throw_err(inst_72729);
var state_72761__$1 = state_72761;
var statearr_72785_75545 = state_72761__$1;
(statearr_72785_75545[(2)] = inst_72730);

(statearr_72785_75545[(1)] = (7));


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
});})(c__45808__auto__,env__$1,map__72718,map__72718__$1,sym,temp__5718__auto__,map__72714,map__72714__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__72715,map__72715__$1,input,context))
;
return ((function (switch__45525__auto__,c__45808__auto__,env__$1,map__72718,map__72718__$1,sym,temp__5718__auto__,map__72714,map__72714__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__72715,map__72715__$1,input,context){
return (function() {
var com$wsscode$pathom$connect$mutate_async_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$connect$mutate_async_$_state_machine__45526__auto____0 = (function (){
var statearr_72786 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_72786[(0)] = com$wsscode$pathom$connect$mutate_async_$_state_machine__45526__auto__);

(statearr_72786[(1)] = (1));

return statearr_72786;
});
var com$wsscode$pathom$connect$mutate_async_$_state_machine__45526__auto____1 = (function (state_72761){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_72761);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e72787){if((e72787 instanceof Object)){
var ex__45529__auto__ = e72787;
var statearr_72788_75549 = state_72761;
(statearr_72788_75549[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_72761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72787;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75550 = state_72761;
state_72761 = G__75550;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$connect$mutate_async_$_state_machine__45526__auto__ = function(state_72761){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$mutate_async_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$mutate_async_$_state_machine__45526__auto____1.call(this,state_72761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$mutate_async_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$mutate_async_$_state_machine__45526__auto____0;
com$wsscode$pathom$connect$mutate_async_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$mutate_async_$_state_machine__45526__auto____1;
return com$wsscode$pathom$connect$mutate_async_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,env__$1,map__72718,map__72718__$1,sym,temp__5718__auto__,map__72714,map__72714__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__72715,map__72715__$1,input,context))
})();
var state__45810__auto__ = (function (){var statearr_72789 = f__45809__auto__();
(statearr_72789[(6)] = c__45808__auto__);

return statearr_72789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,env__$1,map__72718,map__72718__$1,sym,temp__5718__auto__,map__72714,map__72714__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__72715,map__72715__$1,input,context))
);

return c__45808__auto__;
});})(env__$1,map__72718,map__72718__$1,sym,temp__5718__auto__,map__72714,map__72714__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,ast,map__72715,map__72715__$1,input,context))
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
com.wsscode.pathom.connect.discover_attrs = (function com$wsscode$pathom$connect$discover_attrs(p__72794,ctx){
var map__72795 = p__72794;
var map__72795__$1 = (((((!((map__72795 == null))))?(((((map__72795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72795):map__72795);
var index = map__72795__$1;
var index_io = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72795__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72795__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache","com.wsscode.pathom.connect/cache",328991776));
return com.wsscode.pathom.connect.cached(cache,ctx,((function (map__72795,map__72795__$1,index,index_io,cache){
return (function (){
var base_keys = (((cljs.core.count(ctx) > (1)))?(function (){var tree = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__72795,map__72795__$1,index,index_io,cache){
return (function (a,b){
var attrs = (function (){var G__72797 = index;
var G__72798 = cljs.core.vec(b);
return (com.wsscode.pathom.connect.discover_attrs.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.discover_attrs.cljs$core$IFn$_invoke$arity$2(G__72797,G__72798) : com.wsscode.pathom.connect.discover_attrs.call(null,G__72797,G__72798));
})();
if((a == null)){
return attrs;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(a,cljs.core.reverse(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(b)),com.wsscode.pathom.connect.merge_io,attrs);
}
});})(map__72795,map__72795__$1,index,index_io,cache))
,null,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__72795,map__72795__$1,index,index_io,cache){
return (function (p1__72791_SHARP_,p2__72790_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(p2__72790_SHARP_) - (p1__72791_SHARP_ + (1))),p2__72790_SHARP_);
});})(map__72795,map__72795__$1,index,index_io,cache))
,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.count(ctx) - (1)),ctx)));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.vec(cljs.core.next(cljs.core.reverse(ctx))));
})():com.wsscode.pathom.connect.merge_io(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(index_io,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.first(ctx)], null)),cljs.core.get.cljs$core$IFn$_invoke$arity$3(index_io,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(ctx)]),cljs.core.PersistentArrayMap.EMPTY)));
var available = index_io;
var collected = base_keys;
while(true){
var attrs = cljs.core.set(cljs.core.keys(collected));
var matches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (available,collected,attrs,base_keys,map__72795,map__72795__$1,index,index_io,cache){
return (function (p__72803){
var vec__72804 = p__72803;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72804,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72804,(1),null);
return cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(k,attrs));
});})(available,collected,attrs,base_keys,map__72795,map__72795__$1,index,index_io,cache))
,available);
if(cljs.core.seq(matches)){
var G__75568 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (available,collected,attrs,matches,base_keys,map__72795,map__72795__$1,index,index_io,cache){
return (function (p1__72792_SHARP_,p2__72793_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__72792_SHARP_,p2__72793_SHARP_);
});})(available,collected,attrs,matches,base_keys,map__72795,map__72795__$1,index,index_io,cache))
,available,cljs.core.keys(matches));
var G__75569 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.connect.merge_io,collected,cljs.core.vals(matches));
available = G__75568;
collected = G__75569;
continue;
} else {
return collected;
}
break;
}
});})(map__72795,map__72795__$1,index,index_io,cache))
);
});
/**
 * This will use the ::index-resolvers to re-build the index. You might need that if in development you changed some definitions
 *   and got in a dirty state somehow
 */
com.wsscode.pathom.connect.reprocess_index = (function com$wsscode$pathom$connect$reprocess_index(p__72807){
var map__72808 = p__72807;
var map__72808__$1 = (((((!((map__72808 == null))))?(((((map__72808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72808):map__72808);
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72808__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256));
return cljs.core.reduce_kv(com.wsscode.pathom.connect.add,cljs.core.PersistentArrayMap.EMPTY,index_resolvers);
});
/**
 * Helper function to transform a data into an output shape.
 */
com.wsscode.pathom.connect.data__GT_shape = (function com$wsscode$pathom$connect$data__GT_shape(data){
if(cljs.core.map_QMARK_(data)){
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,(function (p1__72810_SHARP_){
if(cljs.core.map_QMARK_(p1__72810_SHARP_)){
return cljs.core.ffirst(p1__72810_SHARP_);
} else {
return p1__72810_SHARP_;
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
com.wsscode.pathom.connect.batch_restore_sort = (function com$wsscode$pathom$connect$batch_restore_sort(p__72812,items){
var map__72813 = p__72812;
var map__72813__$1 = (((((!((map__72813 == null))))?(((((map__72813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72813):map__72813);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72813__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","inputs","com.wsscode.pathom.connect/inputs",-1635802936));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72813__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","key","com.wsscode.pathom.connect/key",1316653363));
var batch_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72813__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch-default","com.wsscode.pathom.connect/batch-default",2069925724));
var index = cljs.core.group_by(key,items);
var batch_default__$1 = (function (){var or__4131__auto__ = batch_default;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,index,map__72813,map__72813__$1,inputs,key,batch_default){
return (function (p1__72811_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([key],[cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__72811_SHARP_,key)]);
});
;})(or__4131__auto__,index,map__72813,map__72813__$1,inputs,key,batch_default))
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (index,batch_default__$1,map__72813,map__72813__$1,inputs,key,batch_default){
return (function (input){
var or__4131__auto__ = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,key)));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (batch_default__$1.cljs$core$IFn$_invoke$arity$1 ? batch_default__$1.cljs$core$IFn$_invoke$arity$1(input) : batch_default__$1.call(null,input));
}
});})(index,batch_default__$1,map__72813,map__72813__$1,inputs,key,batch_default))
),inputs);
});
com.wsscode.pathom.connect.index_explorer_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","index-explorer-resolver","com.wsscode.pathom.connect/index-explorer-resolver",-1613438284,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))], null);
}));
com.wsscode.pathom.connect.indexes_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","indexes-resolver","com.wsscode.pathom.connect/indexes-resolver",-1892611171,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","autocomplete-ignore","com.wsscode.pathom.connect/autocomplete-ignore",-191717401),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null)], null)], null)], null)], null)], null),(function (env,_){
return cljs.core.select_keys(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null));
}));
com.wsscode.pathom.connect.resolver_weights_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","resolver-weights-resolver","com.wsscode.pathom.connect/resolver-weights-resolver",-600539046,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),(function (){var G__72815 = env;
var G__72815__$1 = (((G__72815 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772).cljs$core$IFn$_invoke$arity$1(G__72815));
if((G__72815__$1 == null)){
return null;
} else {
return cljs.core.deref(G__72815__$1);
}
})()], null);
}));
com.wsscode.pathom.connect.resolver_weights_sorted_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","resolver-weights-sorted-resolver","com.wsscode.pathom.connect/resolver-weights-sorted-resolver",-1672618105,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights-sorted","com.wsscode.pathom.connect/resolver-weights-sorted",1502939218)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights-sorted","com.wsscode.pathom.connect/resolver-weights-sorted",1502939218),(function (){var G__72818 = env;
var G__72818__$1 = (((G__72818 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772).cljs$core$IFn$_invoke$arity$1(G__72818));
var G__72818__$2 = (((G__72818__$1 == null))?null:cljs.core.deref(G__72818__$1));
if((G__72818__$2 == null)){
return null;
} else {
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.second,((function (G__72818,G__72818__$1,G__72818__$2){
return (function (p1__72817_SHARP_,p2__72816_SHARP_){
return cljs.core.compare(p2__72816_SHARP_,p1__72817_SHARP_);
});})(G__72818,G__72818__$1,G__72818__$2))
,G__72818__$2);
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
 *   `::pc/pool-chan` - override the thread pool, use `nil` to disable thread pool feature (not recommneded)
 * 
 *   This plugin also looks for the key `::pc/register` in the other plugins used in the
 *   parser configuration, this enable plugins to provide resolvers/mutations to be available
 *   in your connect system.
 * 
 *   By default this plugin will also register resolvers to provide the index itself, if
 *   you for some reason need to hide it you can dissoc the `::pc/register` from the output
 *   and they will not be available, but consider that doing so you lose the ability to
 *   have instrospection in tools like Pathom Viz and Fulcro Inspect.
 */
com.wsscode.pathom.connect.connect_plugin = (function com$wsscode$pathom$connect$connect_plugin(var_args){
var G__72820 = arguments.length;
switch (G__72820) {
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

com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1 = (function (p__72821){
var map__72822 = p__72821;
var map__72822__$1 = (((((!((map__72822 == null))))?(((((map__72822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72822):map__72822);
var env = map__72822__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72822__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var indexes__$1 = (function (){var or__4131__auto__ = indexes;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var pool_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser2","com.wsscode.pathom.core/wrap-parser2",776559497),((function (indexes__$1,pool_chan,map__72822,map__72822__$1,env,indexes){
return (function com$wsscode$pathom$connect$connect_wrap_parser(parser,p__72824){
var map__72825 = p__72824;
var map__72825__$1 = (((((!((map__72825 == null))))?(((((map__72825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72825):map__72825);
var plugins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72825__$1,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796));
var plugin_registry = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),plugins);
var resolver_weights = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(indexes__$1,com.wsscode.pathom.connect.register,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plugin_registry,cljs.core.get.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),cljs.core.PersistentVector.EMPTY)], null));

return ((function (plugin_registry,resolver_weights,map__72825,map__72825__$1,plugins,indexes__$1,pool_chan,map__72822,map__72822__$1,env,indexes){
return (function (env__$1,tx){
var G__72827 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.connect.resolver_dispatch_embedded,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069),com.wsscode.pathom.connect.mutation_dispatch_embedded,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.deref(indexes__$1),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),resolver_weights,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449),pool_chan], null),env__$1], 0));
var G__72828 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__72827,G__72828) : parser.call(null,G__72827,G__72828));
});
;})(plugin_registry,resolver_weights,map__72825,map__72825__$1,plugins,indexes__$1,pool_chan,map__72822,map__72822__$1,env,indexes))
});})(indexes__$1,pool_chan,map__72822,map__72822__$1,env,indexes))
,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),indexes__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.connect.connect_resolvers], null);
});

com.wsscode.pathom.connect.connect_plugin.cljs$lang$maxFixedArity = 1;

if(com.wsscode.pathom.misc.INCLUDE_SPECS){
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","add","com.wsscode.pathom.connect/add",-52020600,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"blank","blank",-1249652109)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentArrayMap.EMPTY])], null),null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__72829){
return cljs.core.map_QMARK_(G__72829);
})], null),(function (G__72829){
return cljs.core.map_QMARK_(G__72829);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)])),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","add-mutation","com.wsscode.pathom.connect/add-mutation",-1209253784,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"blank","blank",-1249652109)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentArrayMap.EMPTY])], null),null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__72830){
return cljs.core.map_QMARK_(G__72830);
})], null),(function (G__72830){
return cljs.core.map_QMARK_(G__72830);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)])),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",1254247877,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"register","register",1968522516)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","pick-resolver","com.wsscode.pathom.connect/pick-resolver",162465702,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__72831){
return cljs.core.map_QMARK_(G__72831);
}),(function (G__72831){
return cljs.core.contains_QMARK_(G__72831,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
})], null),(function (G__72831){
return ((cljs.core.map_QMARK_(G__72831)) && (cljs.core.contains_QMARK_(G__72831,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null)]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","path-cost","com.wsscode.pathom.connect/path-cost",-825763067,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"plan","plan",1118952668)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__72832){
return cljs.core.coll_QMARK_(G__72832);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))], null),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","project-parent-query-attributes","com.wsscode.pathom.connect/project-parent-query-attributes",-418196403,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","defresolver","com.wsscode.pathom.connect/defresolver",1615901468,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"docstring","docstring",879233117),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"docstring","docstring",879233117),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"docstring","docstring",879233117),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.simple_symbol_QMARK_,cljs.spec.alpha.maybe_impl(cljs.core.string_QMARK_,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"any?","any?",-318999933,null),cljs.core.any_QMARK_,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__72833){
return ((cljs.core.vector_QMARK_(G__72833)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.bounded_count((2),G__72833))));
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"count","count",2139924085),(2),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2))], null),null),cljs.core.any_QMARK_,cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"docstring","docstring",879233117),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","alias-resolver","com.wsscode.pathom.connect/alias-resolver",920724457,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","alias-resolver2","com.wsscode.pathom.connect/alias-resolver2",-133273996,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","defmutation","com.wsscode.pathom.connect/defmutation",642780868,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.simple_symbol_QMARK_,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"any?","any?",-318999933,null),cljs.core.any_QMARK_,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__72834){
return ((cljs.core.vector_QMARK_(G__72834)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.bounded_count((2),G__72834))));
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"count","count",2139924085),(2),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2))], null),null),cljs.core.any_QMARK_,cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","discover-attrs","com.wsscode.pathom.connect/discover-attrs",-1426753571,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"ctx","ctx",-493610118),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"ctx","ctx",-493610118),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"ctx","ctx",-493610118)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__72835){
return cljs.core.coll_QMARK_(G__72835);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"ctx","ctx",-493610118),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462),null,null,null));
} else {
}

//# sourceMappingURL=com.wsscode.pathom.connect.js.map
