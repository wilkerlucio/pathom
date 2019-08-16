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

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__48942){
return cljs.core.set_QMARK_(G__48942);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"set","set",304602554)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__48954){
return cljs.core.set_QMARK_(G__48954);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48964){
return cljs.core.map_QMARK_(G__48964);
})], null),(function (G__48964){
return cljs.core.map_QMARK_(G__48964);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation","com.wsscode.pathom.connect/mutation",-1953746968),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48982){
return cljs.core.map_QMARK_(G__48982);
})], null),(function (G__48982){
return cljs.core.map_QMARK_(G__48982);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"plain","plain",1368629269),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"composed","composed",-1510693384),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plain","plain",1368629269),new cljs.core.Keyword(null,"composed","composed",-1510693384)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49000){
return cljs.core.map_QMARK_(G__49000);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),null)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attribute-list","attribute-list",1391116942),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1)),new cljs.core.Keyword(null,"union","union",2142937499),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribute-list","attribute-list",1391116942),new cljs.core.Keyword(null,"union","union",2142937499)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49025){
return ((cljs.core.vector_QMARK_(G__49025)) && (((((function (){var or__4131__auto__ = (1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((1)
,G__49025))) && ((cljs.core.bounded_count((1)
,G__49025) <= (function (){var or__4131__auto__ = null;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (9007199254740991);
}
})())))));
}),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49048){
return cljs.core.map_QMARK_(G__49048);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),null)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49070){
return cljs.core.map_QMARK_(G__49070);
}),(function (G__49070){
return cljs.core.contains_QMARK_(G__49070,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
})], null),(function (G__49070){
return ((cljs.core.map_QMARK_(G__49070)) && (cljs.core.contains_QMARK_(G__49070,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),cljs.core.list(new cljs.core.Symbol("com.wsscode.pathom.connect","atom-with","com.wsscode.pathom.connect/atom-with",1449744364,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null))),com.wsscode.pathom.connect.atom_with(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"number?","number?",-1747282210,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.number_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49185){
return cljs.core.map_QMARK_(G__49185);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null))], null),null)));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49188){
return cljs.core.map_QMARK_(G__49188);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49204){
return cljs.core.map_QMARK_(G__49204);
}),(function (G__49204){
return cljs.core.contains_QMARK_(G__49204,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
})], null),(function (G__49204){
return ((cljs.core.map_QMARK_(G__49204)) && (cljs.core.contains_QMARK_(G__49204,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutations","com.wsscode.pathom.connect/mutations",1762289215),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49257){
return cljs.core.map_QMARK_(G__49257);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49264){
return cljs.core.map_QMARK_(G__49264);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49267){
return cljs.core.map_QMARK_(G__49267);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("s","coll-of","s/coll-of",-1705285349,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol(null,"set?","set?",1636014792,null))),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49290){
return cljs.core.set_QMARK_(G__49290);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49280){
return cljs.core.map_QMARK_(G__49280);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49298){
return cljs.core.map_QMARK_(G__49298);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49309){
return cljs.core.map_QMARK_(G__49309);
})], null),(function (G__49309){
return cljs.core.map_QMARK_(G__49309);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","tuple","s/tuple",1167863840,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49334){
return cljs.core.set_QMARK_(G__49334);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),cljs.core.ifn_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),cljs.core.ifn_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49335){
return cljs.core.coll_QMARK_(G__49335);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null)));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword(null,"deep","deep",2090866875),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49337){
return cljs.core.map_QMARK_(G__49337);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"deep","deep",2090866875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49345){
return ((cljs.core.vector_QMARK_(G__49345)) && (((((function (){var or__4131__auto__ = (2);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((2)
,G__49345))) && ((cljs.core.bounded_count((2)
,G__49345) <= (function (){var or__4131__auto__ = null;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (9007199254740991);
}
})())))));
}),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49355){
return cljs.core.map_QMARK_(G__49355);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49358){
return cljs.core.set_QMARK_(G__49358);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49361){
return cljs.core.map_QMARK_(G__49361);
})], null),(function (G__49361){
return cljs.core.map_QMARK_(G__49361);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),cljs.core.list(new cljs.core.Symbol("s","or","s/or",1876282981,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"multi","multi",-190293005)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentHashSet.EMPTY]),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)], null),null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49377){
return cljs.core.map_QMARK_(G__49377);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49385){
return cljs.core.map_QMARK_(G__49385);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null))),cljs.spec.alpha.merge_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49391){
return cljs.core.map_QMARK_(G__49391);
}),(function (G__49391){
return cljs.core.contains_QMARK_(G__49391,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
}),(function (G__49391){
return cljs.core.contains_QMARK_(G__49391,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
})], null),(function (G__49391){
return ((cljs.core.map_QMARK_(G__49391)) && (cljs.core.contains_QMARK_(G__49391,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))) && (cljs.core.contains_QMARK_(G__49391,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)))], null),null]))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null))),cljs.spec.alpha.merge_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49460){
return cljs.core.map_QMARK_(G__49460);
}),(function (G__49460){
return cljs.core.contains_QMARK_(G__49460,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112));
})], null),(function (G__49460){
return ((cljs.core.map_QMARK_(G__49460)) && (cljs.core.contains_QMARK_(G__49460,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)))], null),null]))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"resolver","resolver",-1740553583),new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword(null,"mutation","mutation",-285823378),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolver","resolver",-1740553583),new cljs.core.Keyword(null,"mutation","mutation",-285823378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),new cljs.core.Keyword(null,"operations","operations",1630691895),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword(null,"operations","operations",1630691895)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49476){
return cljs.core.coll_QMARK_(G__49476);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))], null),null)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49481){
return cljs.core.coll_QMARK_(G__49481);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49483){
return cljs.core.coll_QMARK_(G__49483);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","sort-plan","com.wsscode.pathom.connect/sort-plan",-1506396873),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"plan","plan",1118952668)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
} else {
}
/**
 * Get resolver map information in env from the resolver sym.
 */
com.wsscode.pathom.connect.resolver_data = (function com$wsscode$pathom$connect$resolver_data(env_or_indexes,sym){
var idx = (function (){var G__49495 = env_or_indexes;
if(cljs.core.contains_QMARK_(env_or_indexes,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))){
return new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189).cljs$core$IFn$_invoke$arity$1(G__49495);
} else {
return G__49495;
}
})();
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),sym], null));
});
/**
 * Get mutation map information in env from the resolver sym.
 */
com.wsscode.pathom.connect.mutation_data = (function com$wsscode$pathom$connect$mutation_data(env_or_indexes,sym){
var idx = (function (){var G__49503 = env_or_indexes;
if(cljs.core.contains_QMARK_(env_or_indexes,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))){
return new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189).cljs$core$IFn$_invoke$arity$1(G__49503);
} else {
return G__49503;
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
var unions = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__49509){
var vec__49511 = p__49509;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49511,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49511,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.connect.normalize_io.call(null,v))], null);
})),output);
var merged = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.connect.merge_io_attrs,cljs.core.vals(unions));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(merged,new cljs.core.Keyword("com.wsscode.pathom.connect","unions","com.wsscode.pathom.connect/unions",-2088386406),unions);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
if(cljs.core.map_QMARK_(x)){
var vec__49517 = cljs.core.first(x);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49517,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49517,(1),null);
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
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (p1__49526_SHARP_,p2__49527_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__49526_SHARP_,p2__49527_SHARP_], 0));
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
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__49541 = cljs.core.get_global_hierarchy;
return (fexpr__49541.cljs$core$IFn$_invoke$arity$0 ? fexpr__49541.cljs$core$IFn$_invoke$arity$0() : fexpr__49541.call(null));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(idx,k,(function (p1__49551_SHARP_){
return (com.wsscode.pathom.connect.index_merger.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.index_merger.cljs$core$IFn$_invoke$arity$3(k,p1__49551_SHARP_,v) : com.wsscode.pathom.connect.index_merger.call(null,k,p1__49551_SHARP_,v));
}));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(idx,k,v);
}
}),ia,ib);
});
com.wsscode.pathom.connect.output_provides_STAR_ = (function com$wsscode$pathom$connect$output_provides_STAR_(p__49554){
var map__49555 = p__49554;
var map__49555__$1 = (((((!((map__49555 == null))))?(((((map__49555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49555):map__49555);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49555__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49555__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__$1 = (cljs.core.truth_((function (){var G__49558 = children;
var G__49558__$1 = (((G__49558 == null))?null:cljs.core.first(G__49558));
var G__49558__$2 = (((G__49558__$1 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__49558__$1));
if((G__49558__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__49558__$2,new cljs.core.Keyword(null,"union","union",2142937499));
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))], 0)):children);
var G__49563 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null);
if(cljs.core.seq(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(G__49563,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (G__49563,children__$1,map__49555,map__49555__$1,key,children){
return (function (x){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__49563,children__$1,map__49555,map__49555__$1,key,children){
return (function (p1__49552_SHARP_){
return cljs.core.vec(cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[key,p1__49552_SHARP_],null))));
});})(G__49563,children__$1,map__49555,map__49555__$1,key,children))
,x);
});})(G__49563,children__$1,map__49555,map__49555__$1,key,children))
,((function (G__49563,children__$1,map__49555,map__49555__$1,key,children){
return (function (p1__49553_SHARP_){
return (com.wsscode.pathom.connect.output_provides_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.output_provides_STAR_.cljs$core$IFn$_invoke$arity$1(p1__49553_SHARP_) : com.wsscode.pathom.connect.output_provides_STAR_.call(null,p1__49553_SHARP_));
});})(G__49563,children__$1,map__49555,map__49555__$1,key,children))
)),children__$1);
} else {
return G__49563;
}
});
com.wsscode.pathom.connect.output_provides = (function com$wsscode$pathom$connect$output_provides(query){
if(cljs.core.map_QMARK_(query)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.output_provides),cljs.core.vals(query));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.output_provides_STAR_),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(query)));
}
});
com.wsscode.pathom.connect.normalized_children = (function com$wsscode$pathom$connect$normalized_children(p__49574){
var map__49576 = p__49574;
var map__49576__$1 = (((((!((map__49576 == null))))?(((((map__49576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49576):map__49576);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49576__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_((function (){var G__49582 = children;
var G__49582__$1 = (((G__49582 == null))?null:cljs.core.first(G__49582));
var G__49582__$2 = (((G__49582__$1 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__49582__$1));
if((G__49582__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__49582__$2,new cljs.core.Keyword(null,"union","union",2142937499));
}
})())){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))], 0));
} else {
return children;
}
});
com.wsscode.pathom.connect.index_attributes = (function com$wsscode$pathom$connect$index_attributes(p__49587){
var map__49588 = p__49587;
var map__49588__$1 = (((((!((map__49588 == null))))?(((((map__49588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49588):map__49588);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49588__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49588__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49588__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var provides = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__49588,map__49588__$1,sym,input,output){
return (function (p1__49583_SHARP_){
return cljs.core.contains_QMARK_(input,p1__49583_SHARP_);
});})(map__49588,map__49588__$1,sym,input,output))
,com.wsscode.pathom.connect.output_provides(output));
var sym_group = cljs.core.PersistentHashSet.createAsIfByAssoc([sym]);
var attr_provides = cljs.core.zipmap(provides,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(sym_group));
var input_count = cljs.core.count(input);
var _LT__GT_ = cljs.core.PersistentArrayMap.EMPTY;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,provides,sym_group,attr_provides,input_count,map__49588,map__49588__$1,sym,input,output){
return (function (idx,in_attr){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,in_attr,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),in_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),attr_provides,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),sym_group], null));
});})(_LT__GT_,provides,sym_group,attr_provides,input_count,map__49588,map__49588__$1,sym,input,output))
,_LT__GT_,(function (){var G__49591 = input_count;
switch (G__49591) {
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
var _LT__GT___$2 = (((input_count > (1)))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,provides,sym_group,attr_provides,input_count,map__49588,map__49588__$1,sym,input,output){
return (function (idx,in_attr){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,in_attr,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),in_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),cljs.core.PersistentHashSet.createAsIfByAssoc([input]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),sym_group], null));
});})(_LT__GT_,_LT__GT___$1,provides,sym_group,attr_provides,input_count,map__49588,map__49588__$1,sym,input,output))
,_LT__GT___$1,input):_LT__GT___$1);
var _LT__GT___$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,_LT__GT___$2,provides,sym_group,attr_provides,input_count,map__49588,map__49588__$1,sym,input,output){
return (function (idx,out_attr){
if(cljs.core.vector_QMARK_(out_attr)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,cljs.core.peek(out_attr),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.peek(out_attr),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null),cljs.core.pop(out_attr)),sym_group]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),sym_group], null));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,out_attr,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),out_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.PersistentArrayMap.createAsIfByAssoc([input,sym_group]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),sym_group], null));
}
});})(_LT__GT_,_LT__GT___$1,_LT__GT___$2,provides,sym_group,attr_provides,input_count,map__49588,map__49588__$1,sym,input,output))
,_LT__GT___$2,provides);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__49588,map__49588__$1,sym,input,output){
return (function (idx,p__49593){
var map__49594 = p__49593;
var map__49594__$1 = (((((!((map__49594 == null))))?(((((map__49594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49594):map__49594);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49594__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49594__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__49603 = idx;
if(cljs.core.truth_(key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49603,key,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(children)?new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732):new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711)),sym_group]));
} else {
return G__49603;
}
});})(_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__49588,map__49588__$1,sym,input,output))
,_LT__GT___$3,((cljs.core.map_QMARK_(output))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__49588,map__49588__$1,sym,input,output){
return (function (p1__49586_SHARP_){
return cljs.core.tree_seq(new cljs.core.Keyword(null,"children","children",-940561982),com.wsscode.pathom.connect.normalized_children,edn_query_language.core.query__GT_ast(p1__49586_SHARP_));
});})(_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__49588,map__49588__$1,sym,input,output))
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
var G__49610 = arguments.length;
switch (G__49610) {
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
var map__49617 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.PersistentHashSet.EMPTY], null),sym_data], 0));
var map__49617__$1 = (((((!((map__49617 == null))))?(((((map__49617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49617):map__49617);
var sym_data__$1 = map__49617__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49617__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49617__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var input_SINGLEQUOTE_ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input))) && (cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.PersistentHashSet.EMPTY], null)),cljs.core.first(input)))))?cljs.core.PersistentHashSet.EMPTY:input);
return com.wsscode.pathom.connect.merge_indexes(indexes,(function (){var G__49621 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),cljs.core.PersistentArrayMap.createAsIfByAssoc([sym,sym_data__$1]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),com.wsscode.pathom.connect.index_attributes(sym_data__$1),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.PersistentArrayMap.createAsIfByAssoc([input_SINGLEQUOTE_,com.wsscode.pathom.connect.normalize_io(output)]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (input_SINGLEQUOTE_,map__49617,map__49617__$1,sym_data__$1,input,output){
return (function (indexes__$1,out_attr){
var G__49623 = indexes__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([out_attr]),input)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__49623,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out_attr,input], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),sym);
} else {
return G__49623;
}
});})(input_SINGLEQUOTE_,map__49617,map__49617__$1,sym_data__$1,input,output))
,cljs.core.PersistentArrayMap.EMPTY,com.wsscode.pathom.connect.flat_query(output))], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input_SINGLEQUOTE_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49621,new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(input_SINGLEQUOTE_)]));
} else {
return G__49621;
}
})());
});

com.wsscode.pathom.connect.add.cljs$lang$maxFixedArity = 3;

com.wsscode.pathom.connect.add_mutation = (function com$wsscode$pathom$connect$add_mutation(indexes,sym,p__49628){
var map__49629 = p__49628;
var map__49629__$1 = (((((!((map__49629 == null))))?(((((map__49629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49629):map__49629);
var data = map__49629__$1;
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49629__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49629__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
return com.wsscode.pathom.connect.merge_indexes(indexes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),cljs.core.PersistentArrayMap.createAsIfByAssoc([sym,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym)]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),(function (){var _LT__GT_ = cljs.core.PersistentArrayMap.EMPTY;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,map__49629,map__49629__$1,data,params,output){
return (function (idx,attribute){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,attribute,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),cljs.core.PersistentHashSet.createAsIfByAssoc([sym])], null));
});})(_LT__GT_,map__49629,map__49629__$1,data,params,output))
,_LT__GT_,(function (){var G__49631 = params;
var G__49631__$1 = (((G__49631 == null))?null:edn_query_language.core.query__GT_ast(G__49631));
if((G__49631__$1 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast_properties(G__49631__$1);
}
})());
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,map__49629,map__49629__$1,data,params,output){
return (function (idx,attribute){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,attribute,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),cljs.core.PersistentHashSet.createAsIfByAssoc([sym])], null));
});})(_LT__GT_,_LT__GT___$1,map__49629,map__49629__$1,data,params,output))
,_LT__GT___$1,(function (){var G__49634 = output;
var G__49634__$1 = (((G__49634 == null))?null:edn_query_language.core.query__GT_ast(G__49634));
if((G__49634__$1 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast_properties(G__49634__$1);
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
com.wsscode.pathom.connect.sort_resolvers = (function com$wsscode$pathom$connect$sort_resolvers(p__49638,resolvers,e){
var map__49639 = p__49638;
var map__49639__$1 = (((((!((map__49639 == null))))?(((((map__49639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49639):map__49639);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49639__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (map__49639,map__49639__$1,request_cache){
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
});})(map__49639,map__49639__$1,request_cache))
,resolvers);
});
/**
 * DEPRECATED
 */
com.wsscode.pathom.connect.pick_resolver = (function com$wsscode$pathom$connect$pick_resolver(p__49646){
var map__49647 = p__49646;
var map__49647__$1 = (((((!((map__49647 == null))))?(((((map__49647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49647):map__49647);
var env = map__49647__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49647__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var dependency_track = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49647__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null));
if(cljs.core.truth_(temp__5718__auto__)){
var attr_resolvers = temp__5718__auto__;
var r = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword(null,"missing","missing",362507769)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attr_resolvers,temp__5718__auto__,k,e,map__49647,map__49647__$1,env,indexes,dependency_track){
return (function (p__49655){
var vec__49656 = p__49655;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49656,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49656,(1),null);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.set(cljs.core.keys(e)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"missing","missing",362507769),missing], null);
});})(attr_resolvers,temp__5718__auto__,k,e,map__49647,map__49647__$1,env,indexes,dependency_track))
,attr_resolvers));
var G__49667 = r;
var vec__49675 = G__49667;
var seq__49676 = cljs.core.seq(vec__49675);
var first__49677 = cljs.core.first(seq__49676);
var seq__49676__$1 = cljs.core.next(seq__49676);
var map__49678 = first__49677;
var map__49678__$1 = (((((!((map__49678 == null))))?(((((map__49678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49678):map__49678);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49678__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49678__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var t = seq__49676__$1;
var xs = vec__49675;
var G__49667__$1 = G__49667;
while(true){
var vec__49743 = G__49667__$1;
var seq__49744 = cljs.core.seq(vec__49743);
var first__49745 = cljs.core.first(seq__49744);
var seq__49744__$1 = cljs.core.next(seq__49744);
var map__49746 = first__49745;
var map__49746__$1 = (((((!((map__49746 == null))))?(((((map__49746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49746):map__49746);
var sym__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49746__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var attrs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49746__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var t__$1 = seq__49744__$1;
var xs__$1 = vec__49743;
if(cljs.core.truth_(xs__$1)){
if((!(cljs.core.contains_QMARK_(dependency_track,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,attrs__$1], null))))){
var e__$1 = (function (){try{return com.wsscode.pathom.core.elide_items(com.wsscode.pathom.core.break_values,com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465),true),new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,attrs__$1], null)),attrs__$1));
}catch (e49753){var _ = e49753;
return cljs.core.PersistentArrayMap.EMPTY;
}})();
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attrs__$1),cljs.core.set(cljs.core.keys(e__$1)));
if(cljs.core.seq(missing)){
var G__54454 = t__$1;
G__49667__$1 = G__54454;
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
com.wsscode.pathom.connect.async_pick_resolver = (function com$wsscode$pathom$connect$async_pick_resolver(p__49783){
var map__49786 = p__49783;
var map__49786__$1 = (((((!((map__49786 == null))))?(((((map__49786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49786):map__49786);
var env = map__49786__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49786__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var dependency_track = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49786__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185));
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,map__49786,map__49786__$1,env,indexes,dependency_track){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,map__49786,map__49786__$1,env,indexes,dependency_track){
return (function (state_50047){
var state_val_50052 = (state_50047[(1)]);
if((state_val_50052 === (7))){
var inst_50039 = (state_50047[(2)]);
var state_50047__$1 = state_50047;
var statearr_50057_54463 = state_50047__$1;
(statearr_50057_54463[(2)] = inst_50039);


cljs.core.async.impl.ioc_helpers.process_exception(state_50047__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (20))){
var state_50047__$1 = state_50047;
var statearr_50063_54464 = state_50047__$1;
(statearr_50063_54464[(2)] = false);

(statearr_50063_54464[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (27))){
var inst_49940 = (state_50047[(7)]);
var inst_49972 = (state_50047[(2)]);
var inst_49973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49972,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var inst_49974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49972,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var state_50047__$1 = (function (){var statearr_50066 = state_50047;
(statearr_50066[(8)] = inst_49973);

(statearr_50066[(9)] = inst_49974);

return statearr_50066;
})();
if(cljs.core.truth_(inst_49940)){
var statearr_50074_54468 = state_50047__$1;
(statearr_50074_54468[(1)] = (28));

} else {
var statearr_50076_54469 = state_50047__$1;
(statearr_50076_54469[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (1))){
var state_50047__$1 = state_50047;
var statearr_50080_54470 = state_50047__$1;
(statearr_50080_54470[(2)] = null);

(statearr_50080_54470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (24))){
var inst_49963 = (state_50047[(2)]);
var state_50047__$1 = state_50047;
var statearr_50084_54471 = state_50047__$1;
(statearr_50084_54471[(2)] = inst_49963);

(statearr_50084_54471[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (39))){
var inst_49973 = (state_50047[(8)]);
var inst_49974 = (state_50047[(9)]);
var inst_50005 = (state_50047[(10)]);
var inst_50021 = [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"s","s",1705939918)];
var inst_50022 = cljs.core.select_keys(inst_50005,inst_49974);
var inst_50023 = com.wsscode.pathom.connect.sort_resolvers(env,inst_49973,inst_50005);
var inst_50024 = cljs.core.first(inst_50023);
var inst_50025 = [inst_50022,inst_50024];
var inst_50026 = cljs.core.PersistentHashMap.fromArrays(inst_50021,inst_50025);
var state_50047__$1 = state_50047;
var statearr_50090_54478 = state_50047__$1;
(statearr_50090_54478[(2)] = inst_50026);

(statearr_50090_54478[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (4))){
var inst_49819 = (state_50047[(11)]);
var inst_49808 = (state_50047[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50047,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_49806 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_49808__$1 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_49806);
var inst_49809 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var inst_49815 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49816 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),inst_49808__$1];
var inst_49818 = (new cljs.core.PersistentVector(null,2,(5),inst_49815,inst_49816,null));
var inst_49819__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_49818);
var state_50047__$1 = (function (){var statearr_50097 = state_50047;
(statearr_50097[(11)] = inst_49819__$1);

(statearr_50097[(13)] = inst_49809);

(statearr_50097[(12)] = inst_49808__$1);

return statearr_50097;
})();
if(cljs.core.truth_(inst_49819__$1)){
var statearr_50098_54484 = state_50047__$1;
(statearr_50098_54484[(1)] = (5));

} else {
var statearr_50100_54486 = state_50047__$1;
(statearr_50100_54486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (15))){
var inst_49897 = (state_50047[(14)]);
var state_50047__$1 = state_50047;
var statearr_50108_54487 = state_50047__$1;
(statearr_50108_54487[(2)] = inst_49897);

(statearr_50108_54487[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (21))){
var inst_49966 = (state_50047[(2)]);
var state_50047__$1 = state_50047;
if(cljs.core.truth_(inst_49966)){
var statearr_50112_54488 = state_50047__$1;
(statearr_50112_54488[(1)] = (25));

} else {
var statearr_50113_54489 = state_50047__$1;
(statearr_50113_54489[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (31))){
var state_50047__$1 = state_50047;
var statearr_50116_54492 = state_50047__$1;
(statearr_50116_54492[(2)] = null);

(statearr_50116_54492[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (32))){
var state_50047__$1 = state_50047;
var statearr_50120_54494 = state_50047__$1;
(statearr_50120_54494[(2)] = null);

(statearr_50120_54494[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (40))){
var inst_50028 = (state_50047[(2)]);
var state_50047__$1 = state_50047;
var statearr_50122_54496 = state_50047__$1;
(statearr_50122_54496[(2)] = inst_50028);

(statearr_50122_54496[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (33))){
var inst_50031 = (state_50047[(2)]);
var state_50047__$1 = state_50047;
var statearr_50123_54498 = state_50047__$1;
(statearr_50123_54498[(2)] = inst_50031);

(statearr_50123_54498[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (13))){
var inst_49928 = (state_50047[(2)]);
var state_50047__$1 = state_50047;
var statearr_50127_54499 = state_50047__$1;
(statearr_50127_54499[(2)] = inst_49928);

(statearr_50127_54499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (22))){
var state_50047__$1 = state_50047;
var statearr_50128_54501 = state_50047__$1;
(statearr_50128_54501[(2)] = true);

(statearr_50128_54501[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (36))){
var inst_49973 = (state_50047[(8)]);
var inst_49974 = (state_50047[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50047,(35),new cljs.core.Keyword(null,"default","default",-1987822328),null,(34));
var inst_49992 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465),true);
var inst_49993 = cljs.core.PersistentHashSet.EMPTY;
var inst_49994 = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,inst_49993);
var inst_49995 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49996 = [inst_49973,inst_49974];
var inst_49997 = (new cljs.core.PersistentVector(null,2,(5),inst_49995,inst_49996,null));
var inst_49998 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_49992,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),inst_49994,inst_49997);
var inst_49999 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(inst_49998,inst_49974);
var state_50047__$1 = state_50047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50047__$1,(37),inst_49999);
} else {
if((state_val_50052 === (29))){
var state_50047__$1 = state_50047;
var statearr_50143_54509 = state_50047__$1;
(statearr_50143_54509[(2)] = null);

(statearr_50143_54509[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (6))){
var state_50047__$1 = state_50047;
var statearr_50146_54512 = state_50047__$1;
(statearr_50146_54512[(2)] = null);

(statearr_50146_54512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (28))){
var inst_49973 = (state_50047[(8)]);
var inst_49974 = (state_50047[(9)]);
var inst_49977 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49978 = [inst_49973,inst_49974];
var inst_49979 = (new cljs.core.PersistentVector(null,2,(5),inst_49977,inst_49978,null));
var inst_49980 = cljs.core.contains_QMARK_(dependency_track,inst_49979);
var inst_49981 = (!(inst_49980));
var state_50047__$1 = state_50047;
if(inst_49981){
var statearr_50151_54517 = state_50047__$1;
(statearr_50151_54517[(1)] = (31));

} else {
var statearr_50152_54518 = state_50047__$1;
(statearr_50152_54518[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (25))){
var inst_49947 = (state_50047[(15)]);
var inst_49969 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49947);
var state_50047__$1 = state_50047;
var statearr_50162_54521 = state_50047__$1;
(statearr_50162_54521[(2)] = inst_49969);

(statearr_50162_54521[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (34))){
var inst_49974 = (state_50047[(9)]);
var inst_50005 = (state_50047[(10)]);
var inst_50005__$1 = (state_50047[(2)]);
var inst_50006 = cljs.core.set(inst_49974);
var inst_50007 = cljs.core.keys(inst_50005__$1);
var inst_50008 = cljs.core.set(inst_50007);
var inst_50009 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_50006,inst_50008);
var inst_50010 = cljs.core.seq(inst_50009);
var state_50047__$1 = (function (){var statearr_50163 = state_50047;
(statearr_50163[(10)] = inst_50005__$1);

return statearr_50163;
})();
if(inst_50010){
var statearr_50167_54526 = state_50047__$1;
(statearr_50167_54526[(1)] = (38));

} else {
var statearr_50168_54527 = state_50047__$1;
(statearr_50168_54527[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (17))){
var inst_49940 = (state_50047[(7)]);
var inst_49947 = (state_50047[(15)]);
var inst_49946 = cljs.core.seq(inst_49940);
var inst_49947__$1 = cljs.core.first(inst_49946);
var inst_49948 = cljs.core.next(inst_49946);
var inst_49950 = (inst_49947__$1 == null);
var inst_49951 = cljs.core.not(inst_49950);
var state_50047__$1 = (function (){var statearr_50169 = state_50047;
(statearr_50169[(16)] = inst_49948);

(statearr_50169[(15)] = inst_49947__$1);

return statearr_50169;
})();
if(inst_49951){
var statearr_50170_54528 = state_50047__$1;
(statearr_50170_54528[(1)] = (19));

} else {
var statearr_50174_54529 = state_50047__$1;
(statearr_50174_54529[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (3))){
var inst_49799 = (state_50047[(2)]);
var state_50047__$1 = state_50047;
var statearr_50178_54530 = state_50047__$1;
(statearr_50178_54530[(2)] = inst_49799);


cljs.core.async.impl.ioc_helpers.process_exception(state_50047__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (12))){
var state_50047__$1 = state_50047;
var statearr_50188_54532 = state_50047__$1;
(statearr_50188_54532[(2)] = false);

(statearr_50188_54532[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (2))){
var inst_50041 = (state_50047[(2)]);
var state_50047__$1 = state_50047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50047__$1,inst_50041);
} else {
if((state_val_50052 === (23))){
var state_50047__$1 = state_50047;
var statearr_50195_54538 = state_50047__$1;
(statearr_50195_54538[(2)] = false);

(statearr_50195_54538[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (35))){
var inst_49983 = (state_50047[(2)]);
var inst_49984 = cljs.core.PersistentHashMap.EMPTY;
var state_50047__$1 = (function (){var statearr_50201 = state_50047;
(statearr_50201[(17)] = inst_49983);

return statearr_50201;
})();
var statearr_50202_54539 = state_50047__$1;
(statearr_50202_54539[(2)] = inst_49984);


cljs.core.async.impl.ioc_helpers.process_exception(state_50047__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (19))){
var inst_49947 = (state_50047[(15)]);
var inst_49955 = inst_49947.cljs$lang$protocol_mask$partition0$;
var inst_49956 = (inst_49955 & (64));
var inst_49957 = inst_49947.cljs$core$ISeq$;
var inst_49958 = (cljs.core.PROTOCOL_SENTINEL === inst_49957);
var inst_49959 = ((inst_49956) || (inst_49958));
var state_50047__$1 = state_50047;
if(cljs.core.truth_(inst_49959)){
var statearr_50205_54546 = state_50047__$1;
(statearr_50205_54546[(1)] = (22));

} else {
var statearr_50206_54549 = state_50047__$1;
(statearr_50206_54549[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (11))){
var state_50047__$1 = state_50047;
var statearr_50208_54550 = state_50047__$1;
(statearr_50208_54550[(2)] = true);

(statearr_50208_54550[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (9))){
var state_50047__$1 = state_50047;
var statearr_50210_54552 = state_50047__$1;
(statearr_50210_54552[(2)] = false);

(statearr_50210_54552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (5))){
var inst_49819 = (state_50047[(11)]);
var inst_49809 = (state_50047[(13)]);
var inst_49877 = (state_50047[(18)]);
var inst_49808 = (state_50047[(12)]);
var inst_49897 = (state_50047[(14)]);
var inst_49838 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword(null,"missing","missing",362507769));
var inst_49870 = (function (){var k = inst_49808;
var e = inst_49809;
var temp__5718__auto__ = inst_49819;
var attr_resolvers = inst_49819;
return ((function (k,e,temp__5718__auto__,attr_resolvers,inst_49819,inst_49809,inst_49877,inst_49808,inst_49897,inst_49838,state_val_50052,c__39084__auto__,map__49786,map__49786__$1,env,indexes,dependency_track){
return (function (p__49869){
var vec__50219 = p__49869;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50219,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50219,(1),null);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.set(cljs.core.keys(e)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"missing","missing",362507769),missing], null);
});
;})(k,e,temp__5718__auto__,attr_resolvers,inst_49819,inst_49809,inst_49877,inst_49808,inst_49897,inst_49838,state_val_50052,c__39084__auto__,map__49786,map__49786__$1,env,indexes,dependency_track))
})();
var inst_49876 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_49870,inst_49819);
var inst_49877__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(inst_49838,inst_49876);
var inst_49896 = cljs.core.seq(inst_49877__$1);
var inst_49897__$1 = cljs.core.first(inst_49896);
var inst_49899 = cljs.core.next(inst_49896);
var inst_49909 = (inst_49897__$1 == null);
var inst_49914 = cljs.core.not(inst_49909);
var state_50047__$1 = (function (){var statearr_50225 = state_50047;
(statearr_50225[(18)] = inst_49877__$1);

(statearr_50225[(14)] = inst_49897__$1);

(statearr_50225[(19)] = inst_49899);

return statearr_50225;
})();
if(inst_49914){
var statearr_50226_54560 = state_50047__$1;
(statearr_50226_54560[(1)] = (8));

} else {
var statearr_50227_54562 = state_50047__$1;
(statearr_50227_54562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (14))){
var inst_49897 = (state_50047[(14)]);
var inst_49933 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49897);
var state_50047__$1 = state_50047;
var statearr_50231_54564 = state_50047__$1;
(statearr_50231_54564[(2)] = inst_49933);

(statearr_50231_54564[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (26))){
var inst_49947 = (state_50047[(15)]);
var state_50047__$1 = state_50047;
var statearr_50235_54567 = state_50047__$1;
(statearr_50235_54567[(2)] = inst_49947);

(statearr_50235_54567[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (16))){
var inst_49877 = (state_50047[(18)]);
var inst_49936 = (state_50047[(2)]);
var inst_49937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49936,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var inst_49938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49936,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var inst_49940 = inst_49877;
var state_50047__$1 = (function (){var statearr_50236 = state_50047;
(statearr_50236[(20)] = inst_49938);

(statearr_50236[(21)] = inst_49937);

(statearr_50236[(7)] = inst_49940);

return statearr_50236;
})();
var statearr_50238_54570 = state_50047__$1;
(statearr_50238_54570[(2)] = null);

(statearr_50238_54570[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (38))){
var inst_49948 = (state_50047[(16)]);
var inst_49940 = inst_49948;
var state_50047__$1 = (function (){var statearr_50242 = state_50047;
(statearr_50242[(7)] = inst_49940);

return statearr_50242;
})();
var statearr_50243_54571 = state_50047__$1;
(statearr_50243_54571[(2)] = null);

(statearr_50243_54571[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (30))){
var inst_50034 = (state_50047[(2)]);
var state_50047__$1 = state_50047;
var statearr_50244_54574 = state_50047__$1;
(statearr_50244_54574[(2)] = inst_50034);

(statearr_50244_54574[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (10))){
var inst_49931 = (state_50047[(2)]);
var state_50047__$1 = state_50047;
if(cljs.core.truth_(inst_49931)){
var statearr_50247_54580 = state_50047__$1;
(statearr_50247_54580[(1)] = (14));

} else {
var statearr_50248_54582 = state_50047__$1;
(statearr_50248_54582[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (18))){
var inst_50036 = (state_50047[(2)]);
var state_50047__$1 = state_50047;
var statearr_50255_54583 = state_50047__$1;
(statearr_50255_54583[(2)] = inst_50036);

(statearr_50255_54583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (37))){
var inst_50001 = (state_50047[(2)]);
var inst_50002 = com.wsscode.common.async_cljs.throw_err(inst_50001);
var inst_50003 = com.wsscode.pathom.core.elide_items(com.wsscode.pathom.core.break_values,inst_50002);
var state_50047__$1 = state_50047;
var statearr_50266_54584 = state_50047__$1;
(statearr_50266_54584[(2)] = inst_50003);


cljs.core.async.impl.ioc_helpers.process_exception(state_50047__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50052 === (8))){
var inst_49897 = (state_50047[(14)]);
var inst_49916 = inst_49897.cljs$lang$protocol_mask$partition0$;
var inst_49917 = (inst_49916 & (64));
var inst_49918 = inst_49897.cljs$core$ISeq$;
var inst_49919 = (cljs.core.PROTOCOL_SENTINEL === inst_49918);
var inst_49920 = ((inst_49917) || (inst_49919));
var state_50047__$1 = state_50047;
if(cljs.core.truth_(inst_49920)){
var statearr_50269_54586 = state_50047__$1;
(statearr_50269_54586[(1)] = (11));

} else {
var statearr_50270_54587 = state_50047__$1;
(statearr_50270_54587[(1)] = (12));

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
});})(c__39084__auto__,map__49786,map__49786__$1,env,indexes,dependency_track))
;
return ((function (switch__38786__auto__,c__39084__auto__,map__49786,map__49786__$1,env,indexes,dependency_track){
return (function() {
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38787__auto____0 = (function (){
var statearr_50278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50278[(0)] = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38787__auto__);

(statearr_50278[(1)] = (1));

return statearr_50278;
});
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38787__auto____1 = (function (state_50047){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_50047);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e50279){if((e50279 instanceof Object)){
var ex__38790__auto__ = e50279;
var statearr_50280_54592 = state_50047;
(statearr_50280_54592[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50279;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54596 = state_50047;
state_50047 = G__54596;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38787__auto__ = function(state_50047){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38787__auto____1.call(this,state_50047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38787__auto____0;
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38787__auto____1;
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,map__49786,map__49786__$1,env,indexes,dependency_track))
})();
var state__39086__auto__ = (function (){var statearr_50285 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_50285[(6)] = c__39084__auto__);

return statearr_50285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,map__49786,map__49786__$1,env,indexes,dependency_track))
);

return c__39084__auto__;
});
com.wsscode.pathom.connect.default_resolver_dispatch = (function com$wsscode$pathom$connect$default_resolver_dispatch(p__50293,entity){
var map__50302 = p__50293;
var map__50302__$1 = (((((!((map__50302 == null))))?(((((map__50302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50302):map__50302);
var env = map__50302__$1;
var map__50303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50302__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__50303__$1 = (((((!((map__50303 == null))))?(((((map__50303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50303):map__50303);
var resolver = map__50303__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50303__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Default resolver-dispatch is not supported on CLJS, please implement ::p.connect/resolver-dispatch in your parser environment.",cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Helper method that extract resolver symbol from env. It's recommended to use as a dispatch method for creating
 *   multi-methods for resolver dispatch.
 */
com.wsscode.pathom.connect.resolver_dispatch = (function com$wsscode$pathom$connect$resolver_dispatch(var_args){
var G__50323 = arguments.length;
switch (G__50323) {
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
com.wsscode.pathom.connect.resolver_dispatch_embedded = (function com$wsscode$pathom$connect$resolver_dispatch_embedded(p__50337,entity){
var map__50338 = p__50337;
var map__50338__$1 = (((((!((map__50338 == null))))?(((((map__50338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50338):map__50338);
var env = map__50338__$1;
var map__50339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50338__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__50339__$1 = (((((!((map__50339 == null))))?(((((map__50339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50339):map__50339);
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50339__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50339__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
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
var len__4730__auto___54634 = arguments.length;
var i__4731__auto___54635 = (0);
while(true){
if((i__4731__auto___54635 < len__4730__auto___54634)){
args__4736__auto__.push((arguments[i__4731__auto___54635]));

var G__54637 = (i__4731__auto___54635 + (1));
i__4731__auto___54635 = G__54637;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic = (function (p__50378,resolver,args){
var map__50379 = p__50378;
var map__50379__$1 = (((((!((map__50379 == null))))?(((((map__50379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50379):map__50379);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50379__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
if(cljs.core.truth_(resolver_weights)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,resolver_weights,cljs.core.update,resolver,args);
} else {
return null;
}
});

com.wsscode.pathom.connect.update_resolver_weight.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.connect.update_resolver_weight.cljs$lang$applyTo = (function (seq50365){
var G__50366 = cljs.core.first(seq50365);
var seq50365__$1 = cljs.core.next(seq50365);
var G__50367 = cljs.core.first(seq50365__$1);
var seq50365__$2 = cljs.core.next(seq50365__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50366,G__50367,seq50365__$2);
});

com.wsscode.pathom.connect.call_resolver_STAR_ = (function com$wsscode$pathom$connect$call_resolver_STAR_(p__50385,entity){
var map__50386 = p__50385;
var map__50386__$1 = (((((!((map__50386 == null))))?(((((map__50386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50386):map__50386);
var env = map__50386__$1;
var resolver_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50386__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.connect.default_resolver_dispatch);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50386__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var resolver_sym = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env));
var tid = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),resolver_sym,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),entity], null));
var start = com.wsscode.pathom.trace.now();
var res__44669__auto__ = (function (){try{return com.wsscode.pathom.core.exec_plugin_actions.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.connect","wrap-resolve","com.wsscode.pathom.connect/wrap-resolve",1728436586),resolver_dispatch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,entity], 0));
}catch (e50395){var e = e50395;
return e;
}})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44669__auto__)){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,res__44669__auto__,resolver_sym,tid,start,map__50386,map__50386__$1,env,resolver_dispatch,resolver_weights){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,res__44669__auto__,resolver_sym,tid,start,map__50386,map__50386__$1,env,resolver_dispatch,resolver_weights){
return (function (state_50442){
var state_val_50443 = (state_50442[(1)]);
if((state_val_50443 === (7))){
var state_50442__$1 = state_50442;
var statearr_50448_54642 = state_50442__$1;
(statearr_50448_54642[(2)] = null);

(statearr_50448_54642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50443 === (1))){
var state_50442__$1 = state_50442;
var statearr_50449_54644 = state_50442__$1;
(statearr_50449_54644[(2)] = null);

(statearr_50449_54644[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50443 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50442,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_50442__$1 = state_50442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50442__$1,(5),res__44669__auto__);
} else {
if((state_val_50443 === (6))){
var inst_50416 = com.wsscode.pathom.trace.now();
var inst_50417 = (inst_50416 - start);
var inst_50418 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(resolver_weights,cljs.core.update,resolver_sym,com.wsscode.pathom.connect.step_weight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_50417], 0));
var state_50442__$1 = state_50442;
var statearr_50459_54648 = state_50442__$1;
(statearr_50459_54648[(2)] = inst_50418);

(statearr_50459_54648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50443 === (3))){
var inst_50397 = (state_50442[(2)]);
var state_50442__$1 = state_50442;
var statearr_50460_54649 = state_50442__$1;
(statearr_50460_54649[(2)] = inst_50397);


cljs.core.async.impl.ioc_helpers.process_exception(state_50442__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50443 === (2))){
var inst_50437 = (state_50442[(2)]);
var state_50442__$1 = state_50442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50442__$1,inst_50437);
} else {
if((state_val_50443 === (11))){
var inst_50411 = (state_50442[(7)]);
var inst_50433 = (state_50442[(2)]);
var inst_50434 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,inst_50433);
var inst_50435 = com.wsscode.common.async_cljs.throw_err(inst_50411);
var state_50442__$1 = (function (){var statearr_50463 = state_50442;
(statearr_50463[(8)] = inst_50434);

return statearr_50463;
})();
var statearr_50464_54650 = state_50442__$1;
(statearr_50464_54650[(2)] = inst_50435);


cljs.core.async.impl.ioc_helpers.process_exception(state_50442__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50443 === (9))){
var inst_50426 = (state_50442[(9)]);
var inst_50411 = (state_50442[(7)]);
var inst_50429 = com.wsscode.pathom.core.process_error(env,inst_50411);
var inst_50430 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_50426,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),inst_50429);
var state_50442__$1 = state_50442;
var statearr_50465_54653 = state_50442__$1;
(statearr_50465_54653[(2)] = inst_50430);

(statearr_50465_54653[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50443 === (5))){
var inst_50411 = (state_50442[(2)]);
var state_50442__$1 = (function (){var statearr_50472 = state_50442;
(statearr_50472[(7)] = inst_50411);

return statearr_50472;
})();
if(cljs.core.truth_(resolver_weights)){
var statearr_50474_54656 = state_50442__$1;
(statearr_50474_54656[(1)] = (6));

} else {
var statearr_50475_54657 = state_50442__$1;
(statearr_50475_54657[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50443 === (10))){
var inst_50426 = (state_50442[(9)]);
var state_50442__$1 = state_50442;
var statearr_50477_54659 = state_50442__$1;
(statearr_50477_54659[(2)] = inst_50426);

(statearr_50477_54659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50443 === (8))){
var inst_50411 = (state_50442[(7)]);
var inst_50421 = (state_50442[(2)]);
var inst_50424 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_50425 = [new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624)];
var inst_50426 = cljs.core.PersistentHashMap.fromArrays(inst_50424,inst_50425);
var inst_50427 = com.wsscode.common.async_cljs.error_QMARK_(inst_50411);
var state_50442__$1 = (function (){var statearr_50486 = state_50442;
(statearr_50486[(10)] = inst_50421);

(statearr_50486[(9)] = inst_50426);

return statearr_50486;
})();
if(inst_50427){
var statearr_50487_54661 = state_50442__$1;
(statearr_50487_54661[(1)] = (9));

} else {
var statearr_50488_54662 = state_50442__$1;
(statearr_50488_54662[(1)] = (10));

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
});})(c__39084__auto__,res__44669__auto__,resolver_sym,tid,start,map__50386,map__50386__$1,env,resolver_dispatch,resolver_weights))
;
return ((function (switch__38786__auto__,c__39084__auto__,res__44669__auto__,resolver_sym,tid,start,map__50386,map__50386__$1,env,resolver_dispatch,resolver_weights){
return (function() {
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38787__auto____0 = (function (){
var statearr_50489 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50489[(0)] = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38787__auto__);

(statearr_50489[(1)] = (1));

return statearr_50489;
});
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38787__auto____1 = (function (state_50442){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_50442);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e50491){if((e50491 instanceof Object)){
var ex__38790__auto__ = e50491;
var statearr_50492_54667 = state_50442;
(statearr_50492_54667[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50491;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54669 = state_50442;
state_50442 = G__54669;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38787__auto__ = function(state_50442){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38787__auto____1.call(this,state_50442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38787__auto____0;
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38787__auto____1;
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,res__44669__auto__,resolver_sym,tid,start,map__50386,map__50386__$1,env,resolver_dispatch,resolver_weights))
})();
var state__39086__auto__ = (function (){var statearr_50493 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_50493[(6)] = c__39084__auto__);

return statearr_50493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,res__44669__auto__,resolver_sym,tid,start,map__50386,map__50386__$1,env,resolver_dispatch,resolver_weights))
);

return c__39084__auto__;
} else {
var x = res__44669__auto__;
if(cljs.core.truth_(resolver_weights)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(resolver_weights,cljs.core.update,resolver_sym,com.wsscode.pathom.connect.step_weight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.trace.now() - start)], 0));
} else {
}

com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,(function (){var G__50494 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624)], null);
if(com.wsscode.common.async_cljs.error_QMARK_(x)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50494,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),com.wsscode.pathom.core.process_error(env,x));
} else {
return G__50494;
}
})());

return com.wsscode.common.async_cljs.throw_err(x);
}
});
com.wsscode.pathom.connect.call_resolver = (function com$wsscode$pathom$connect$call_resolver(p__50497,entity){
var map__50498 = p__50497;
var map__50498__$1 = (((((!((map__50498 == null))))?(((((map__50498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50498):map__50498);
var env = map__50498__$1;
var pool_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50498__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449));
if(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__50498,map__50498__$1,env,pool_chan){
return (function (p1__50496_SHARP_){
return cljs.core.contains_QMARK_(com.wsscode.pathom.core.break_values,cljs.core.second(p1__50496_SHARP_));
});})(map__50498,map__50498__$1,env,pool_chan))
,entity))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver input",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity","entity",-450970276),entity], null));
} else {
if(cljs.core.truth_(pool_chan)){
var out = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__39084__auto___54684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto___54684,out,map__50498,map__50498__$1,env,pool_chan){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto___54684,out,map__50498,map__50498__$1,env,pool_chan){
return (function (state_50519){
var state_val_50520 = (state_50519[(1)]);
if((state_val_50520 === (1))){
var inst_50502 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_50503 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_50504 = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(inst_50503);
var inst_50505 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_50506 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_50505);
var inst_50507 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_50508 = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(inst_50507);
var inst_50509 = [new cljs.core.Keyword("com.wsscode.pathom.connect","schedule-resolver","com.wsscode.pathom.connect/schedule-resolver",939563419),inst_50504,inst_50506,inst_50508,entity];
var inst_50510 = cljs.core.PersistentHashMap.fromArrays(inst_50502,inst_50509);
var inst_50511 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_50510);
var inst_50512 = [new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"f","f",-1597136552)];
var inst_50513 = (function (){var tid = inst_50511;
return ((function (tid,inst_50502,inst_50503,inst_50504,inst_50505,inst_50506,inst_50507,inst_50508,inst_50509,inst_50510,inst_50511,inst_50512,state_val_50520,c__39084__auto___54684,out,map__50498,map__50498__$1,env,pool_chan){
return (function (){
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","schedule-resolver","com.wsscode.pathom.connect/schedule-resolver",939563419)], null));

try{return com.wsscode.pathom.connect.call_resolver_STAR_(env,entity);
}catch (e50522){var e = e50522;
return e;
}});
;})(tid,inst_50502,inst_50503,inst_50504,inst_50505,inst_50506,inst_50507,inst_50508,inst_50509,inst_50510,inst_50511,inst_50512,state_val_50520,c__39084__auto___54684,out,map__50498,map__50498__$1,env,pool_chan))
})();
var inst_50514 = [out,inst_50513];
var inst_50515 = cljs.core.PersistentHashMap.fromArrays(inst_50512,inst_50514);
var state_50519__$1 = state_50519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50519__$1,(2),pool_chan,inst_50515);
} else {
if((state_val_50520 === (2))){
var inst_50517 = (state_50519[(2)]);
var state_50519__$1 = state_50519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50519__$1,inst_50517);
} else {
return null;
}
}
});})(c__39084__auto___54684,out,map__50498,map__50498__$1,env,pool_chan))
;
return ((function (switch__38786__auto__,c__39084__auto___54684,out,map__50498,map__50498__$1,env,pool_chan){
return (function() {
var com$wsscode$pathom$connect$call_resolver_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$connect$call_resolver_$_state_machine__38787__auto____0 = (function (){
var statearr_50524 = [null,null,null,null,null,null,null];
(statearr_50524[(0)] = com$wsscode$pathom$connect$call_resolver_$_state_machine__38787__auto__);

(statearr_50524[(1)] = (1));

return statearr_50524;
});
var com$wsscode$pathom$connect$call_resolver_$_state_machine__38787__auto____1 = (function (state_50519){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_50519);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e50525){if((e50525 instanceof Object)){
var ex__38790__auto__ = e50525;
var statearr_50527_54712 = state_50519;
(statearr_50527_54712[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50525;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54713 = state_50519;
state_50519 = G__54713;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$connect$call_resolver_$_state_machine__38787__auto__ = function(state_50519){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$call_resolver_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$call_resolver_$_state_machine__38787__auto____1.call(this,state_50519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$call_resolver_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$call_resolver_$_state_machine__38787__auto____0;
com$wsscode$pathom$connect$call_resolver_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$call_resolver_$_state_machine__38787__auto____1;
return com$wsscode$pathom$connect$call_resolver_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto___54684,out,map__50498,map__50498__$1,env,pool_chan))
})();
var state__39086__auto__ = (function (){var statearr_50529 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_50529[(6)] = c__39084__auto___54684);

return statearr_50529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto___54684,out,map__50498,map__50498__$1,env,pool_chan))
);


return out;
} else {
return com.wsscode.pathom.connect.call_resolver_STAR_(env,entity);
}
}
});
com.wsscode.pathom.connect.entity_select_keys = (function com$wsscode$pathom$connect$entity_select_keys(env,entity,input){
var entity__$1 = com.wsscode.pathom.core.maybe_atom(entity);
var res__44659__auto__ = ((clojure.set.subset_QMARK_(input,entity__$1))?entity__$1:com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),entity__$1),new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404)], 0)),cljs.core.vec(input)));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44659__auto__)){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,res__44659__auto__,entity__$1){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,res__44659__auto__,entity__$1){
return (function (state_50551){
var state_val_50552 = (state_50551[(1)]);
if((state_val_50552 === (1))){
var state_50551__$1 = state_50551;
var statearr_50558_54724 = state_50551__$1;
(statearr_50558_54724[(2)] = null);

(statearr_50558_54724[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50552 === (2))){
var inst_50549 = (state_50551[(2)]);
var state_50551__$1 = state_50551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50551__$1,inst_50549);
} else {
if((state_val_50552 === (3))){
var inst_50539 = (state_50551[(2)]);
var state_50551__$1 = state_50551;
var statearr_50563_54732 = state_50551__$1;
(statearr_50563_54732[(2)] = inst_50539);


cljs.core.async.impl.ioc_helpers.process_exception(state_50551__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50552 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50551,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_50551__$1 = state_50551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50551__$1,(5),res__44659__auto__);
} else {
if((state_val_50552 === (5))){
var inst_50545 = (state_50551[(2)]);
var inst_50546 = com.wsscode.common.async_cljs.throw_err(inst_50545);
var inst_50547 = cljs.core.select_keys(inst_50546,input);
var state_50551__$1 = state_50551;
var statearr_50568_54736 = state_50551__$1;
(statearr_50568_54736[(2)] = inst_50547);


cljs.core.async.impl.ioc_helpers.process_exception(state_50551__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39084__auto__,res__44659__auto__,entity__$1))
;
return ((function (switch__38786__auto__,c__39084__auto__,res__44659__auto__,entity__$1){
return (function() {
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38787__auto____0 = (function (){
var statearr_50574 = [null,null,null,null,null,null,null];
(statearr_50574[(0)] = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38787__auto__);

(statearr_50574[(1)] = (1));

return statearr_50574;
});
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38787__auto____1 = (function (state_50551){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_50551);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e50580){if((e50580 instanceof Object)){
var ex__38790__auto__ = e50580;
var statearr_50581_54740 = state_50551;
(statearr_50581_54740[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50580;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54744 = state_50551;
state_50551 = G__54744;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38787__auto__ = function(state_50551){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38787__auto____1.call(this,state_50551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38787__auto____0;
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38787__auto____1;
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,res__44659__auto__,entity__$1))
})();
var state__39086__auto__ = (function (){var statearr_50584 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_50584[(6)] = c__39084__auto__);

return statearr_50584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,res__44659__auto__,entity__$1))
);

return c__39084__auto__;
} else {
var e = res__44659__auto__;
return cljs.core.select_keys(e,input);
}
});
com.wsscode.pathom.connect.all_values_valid_QMARK_ = (function com$wsscode$pathom$connect$all_values_valid_QMARK_(m,input){
return ((cljs.core.every_QMARK_((function (p__50623){
var vec__50625 = p__50623;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50625,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50625,(1),null);
return cljs.core.not((com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.core.break_values.call(null,v)));
}),m)) && (cljs.core.every_QMARK_(m,input)));
});
com.wsscode.pathom.connect.cache_batch = (function com$wsscode$pathom$connect$cache_batch(env,resolver_sym,linked_results){
var params = com.wsscode.pathom.core.params(env);
var seq__50637 = cljs.core.seq(linked_results);
var chunk__50638 = null;
var count__50639 = (0);
var i__50640 = (0);
while(true){
if((i__50640 < count__50639)){
var vec__50657 = chunk__50638.cljs$core$IIndexed$_nth$arity$2(null,i__50640);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50657,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50657,(1),null);
com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,input,params], null),((function (seq__50637,chunk__50638,count__50639,i__50640,vec__50657,input,value,params){
return (function (){
return value;
});})(seq__50637,chunk__50638,count__50639,i__50640,vec__50657,input,value,params))
);


var G__54751 = seq__50637;
var G__54752 = chunk__50638;
var G__54753 = count__50639;
var G__54755 = (i__50640 + (1));
seq__50637 = G__54751;
chunk__50638 = G__54752;
count__50639 = G__54753;
i__50640 = G__54755;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50637);
if(temp__5720__auto__){
var seq__50637__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50637__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50637__$1);
var G__54758 = cljs.core.chunk_rest(seq__50637__$1);
var G__54759 = c__4550__auto__;
var G__54760 = cljs.core.count(c__4550__auto__);
var G__54761 = (0);
seq__50637 = G__54758;
chunk__50638 = G__54759;
count__50639 = G__54760;
i__50640 = G__54761;
continue;
} else {
var vec__50663 = cljs.core.first(seq__50637__$1);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50663,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50663,(1),null);
com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,input,params], null),((function (seq__50637,chunk__50638,count__50639,i__50640,vec__50663,input,value,seq__50637__$1,temp__5720__auto__,params){
return (function (){
return value;
});})(seq__50637,chunk__50638,count__50639,i__50640,vec__50663,input,value,seq__50637__$1,temp__5720__auto__,params))
);


var G__54765 = cljs.core.next(seq__50637__$1);
var G__54766 = null;
var G__54767 = (0);
var G__54768 = (0);
seq__50637 = G__54765;
chunk__50638 = G__54766;
count__50639 = G__54767;
i__50640 = G__54768;
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
var G__50681 = arguments.length;
switch (G__50681) {
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
var G__54775 = null;
var G__54775__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__54775__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__54775__2 = (function (result,x){
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen),fx)){
return result;
} else {
seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen.cljs$core$IDeref$_deref$arity$1(null),fx));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__54775 = function(result,x){
switch(arguments.length){
case 0:
return G__54775__0.call(this);
case 1:
return G__54775__1.call(this,result);
case 2:
return G__54775__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__54775.cljs$core$IFn$_invoke$arity$0 = G__54775__0;
G__54775.cljs$core$IFn$_invoke$arity$1 = G__54775__1;
G__54775.cljs$core$IFn$_invoke$arity$2 = G__54775__2;
return G__54775;
})()
;})(seen))
});
});

com.wsscode.pathom.connect.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function com$wsscode$pathom$connect$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
var fexpr__50713 = (function (p__50715,seen__$1){
while(true){
var vec__50716 = p__50715;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50716,(0),null);
var xs__$1 = vec__50716;
var temp__5720__auto__ = cljs.core.seq(xs__$1);
if(temp__5720__auto__){
var s = temp__5720__auto__;
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(seen__$1,fx)){
var G__54778 = cljs.core.rest(s);
var G__54779 = seen__$1;
p__50715 = G__54778;
seen__$1 = G__54779;
continue;
} else {
return cljs.core.cons(x,com$wsscode$pathom$connect$step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,fx)));
}
} else {
return null;
}
break;
}
});
return fexpr__50713(xs,seen);
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
var new_paths = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__50731_SHARP_){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,p1__50731_SHARP_], null)],null));
})),resolvers);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(input,keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pending], 0));
if(cljs.core.seq(missing)){
var missing_paths = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (new_paths,missing){
return (function (p1__50734_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (new_paths,missing){
return (function (acc,x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,x);
});})(new_paths,missing))
,cljs.core.first(p1__50734_SHARP_),cljs.core.next(p1__50734_SHARP_));
});})(new_paths,missing))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(com.wsscode.common.combinatorics.cartesian_product,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (new_paths,missing){
return (function (p1__50733_SHARP_){
var G__50762 = index_oir;
var G__50763 = keys;
var G__50764 = bad_keys;
var G__50765 = p1__50733_SHARP_;
var G__50766 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pending,p1__50733_SHARP_);
return (com.wsscode.pathom.connect.compute_paths_STAR_.cljs$core$IFn$_invoke$arity$5 ? com.wsscode.pathom.connect.compute_paths_STAR_.cljs$core$IFn$_invoke$arity$5(G__50762,G__50763,G__50764,G__50765,G__50766) : com.wsscode.pathom.connect.compute_paths_STAR_.call(null,G__50762,G__50763,G__50764,G__50765,G__50766));
});})(new_paths,missing))
),missing)));
if(cljs.core.seq(missing_paths)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(paths,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (missing_paths,new_paths,missing){
return (function (p1__50735_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (missing_paths,new_paths,missing){
return (function (acc,x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,x);
});})(missing_paths,new_paths,missing))
,cljs.core.first(p1__50735_SHARP_),cljs.core.next(p1__50735_SHARP_));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$3((function (p1__50778_SHARP_){
return com.wsscode.pathom.connect.distinct_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__50778_SHARP_);
}),(function (p1__50780_SHARP_){
return com.wsscode.pathom.connect.distinct_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,p1__50780_SHARP_);
}),cljs.core.rseq)),com.wsscode.pathom.connect.compute_paths_STAR_(index_oir,keys,bad_keys,attr,cljs.core.PersistentHashSet.createAsIfByAssoc([attr])));
});
com.wsscode.pathom.connect.split_good_bad_keys = (function com$wsscode$pathom$connect$split_good_bad_keys(entity){
var map__50788 = cljs.core.group_by((function (p1__50786_SHARP_){
return cljs.core.contains_QMARK_(com.wsscode.pathom.core.break_values,cljs.core.second(p1__50786_SHARP_));
}),entity);
var map__50788__$1 = (((((!((map__50788 == null))))?(((((map__50788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50788):map__50788);
var bad_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50788__$1,true);
var good_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50788__$1,false);
var good_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),good_keys);
var bad_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),bad_keys);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [good_keys__$1,bad_keys__$1], null);
});
com.wsscode.pathom.connect.path_cost = (function com$wsscode$pathom$connect$path_cost(p__50805,path){
var map__50807 = p__50805;
var map__50807__$1 = (((((!((map__50807 == null))))?(((((map__50807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50807):map__50807);
var env = map__50807__$1;
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50807__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50807__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
var weights = (function (){var or__4131__auto__ = (function (){var G__50814 = resolver_weights;
if((G__50814 == null)){
return null;
} else {
return cljs.core.deref(G__50814);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (weights,map__50807,map__50807__$1,env,resolver_weights,request_cache){
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
});})(weights,map__50807,map__50807__$1,env,resolver_weights,request_cache))
),cljs.core._PLUS_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(path));
});
com.wsscode.pathom.connect.default_sort_plan = (function com$wsscode$pathom$connect$default_sort_plan(env,plan){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__50822_SHARP_){
return com.wsscode.pathom.connect.path_cost(env,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__50822_SHARP_));
}),plan);
});
com.wsscode.pathom.connect.resolve_plan = (function com$wsscode$pathom$connect$resolve_plan(p__50830){
var map__50831 = p__50830;
var map__50831__$1 = (((((!((map__50831 == null))))?(((((map__50831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50831):map__50831);
var env = map__50831__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50831__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var sort_plan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50831__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sort-plan","com.wsscode.pathom.connect/sort-plan",-1506396873));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var sort_plan__$1 = (function (){var or__4131__auto__ = sort_plan;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.connect.default_sort_plan;
}
})();
var vec__50835 = com.wsscode.pathom.connect.split_good_bad_keys(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env));
var good_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50835,(0),null);
var bad_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50835,(1),null);
var G__50841 = env;
var G__50842 = com.wsscode.pathom.connect.compute_paths(new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746).cljs$core$IFn$_invoke$arity$1(indexes),good_keys,bad_keys,key);
return (sort_plan__$1.cljs$core$IFn$_invoke$arity$2 ? sort_plan__$1.cljs$core$IFn$_invoke$arity$2(G__50841,G__50842) : sort_plan__$1.call(null,G__50841,G__50842));
});
com.wsscode.pathom.connect.resolver__GT_output = (function com$wsscode$pathom$connect$resolver__GT_output(env,resolver_sym){
var map__50844 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),resolver_sym], null));
var map__50844__$1 = (((((!((map__50844 == null))))?(((((map__50844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50844):map__50844);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50844__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var compute_output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50844__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","compute-output","com.wsscode.pathom.connect/compute-output",2103799942));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__50856_SHARP_){
return com.wsscode.pathom.connect.output__GT_provides(com.wsscode.pathom.connect.resolver__GT_output(env,cljs.core.second(p1__50856_SHARP_)));
})),plan);
});
com.wsscode.pathom.connect.plan__GT_resolvers = (function com$wsscode$pathom$connect$plan__GT_resolvers(plan){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.flatten(plan));
});
com.wsscode.pathom.connect.decrease_path_costs = (function com$wsscode$pathom$connect$decrease_path_costs(p__50875,plan){
var map__50876 = p__50875;
var map__50876__$1 = (((((!((map__50876 == null))))?(((((map__50876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50876):map__50876);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50876__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var resolver_weight_decrease_amount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50876__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weight-decrease-amount","com.wsscode.pathom.connect/resolver-weight-decrease-amount",-937582293),(1));
if(cljs.core.truth_(resolver_weights)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(resolver_weights,((function (map__50876,map__50876__$1,resolver_weights,resolver_weight_decrease_amount){
return (function (p1__50869_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__50876,map__50876__$1,resolver_weights,resolver_weight_decrease_amount){
return (function (rw,rsym){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rw,rsym,(function (){var x__4219__auto__ = (1);
var y__4220__auto__ = (cljs.core.get.cljs$core$IFn$_invoke$arity$3(rw,rsym,(0)) - resolver_weight_decrease_amount);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());
});})(map__50876,map__50876__$1,resolver_weights,resolver_weight_decrease_amount))
,p1__50869_SHARP_,com.wsscode.pathom.connect.plan__GT_resolvers(plan));
});})(map__50876,map__50876__$1,resolver_weights,resolver_weight_decrease_amount))
);
} else {
return null;
}
});
com.wsscode.pathom.connect.reader_compute_plan = (function com$wsscode$pathom$connect$reader_compute_plan(env,failed_resolvers){
var plan_trace_id = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978)], null));
var plan = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (plan_trace_id){
return (function (p1__50884_SHARP_){
return cljs.core.some(failed_resolvers,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__50884_SHARP_));
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
return (function (p__50888,p__50889){
var map__50890 = p__50888;
var map__50890__$1 = (((((!((map__50890 == null))))?(((((map__50890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50890):map__50890);
var acc = map__50890__$1;
var provided = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50890__$1,new cljs.core.Keyword(null,"provided","provided",-1493091365));
var map__50891 = p__50889;
var map__50891__$1 = (((((!((map__50891 == null))))?(((((map__50891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50891):map__50891);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50891__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.contains_QMARK_(provided,key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj,key);
} else {
var temp__5718__auto__ = cljs.core.first(com.wsscode.pathom.connect.resolve_plan(cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),key)));
if(cljs.core.truth_(temp__5718__auto__)){
var plan = temp__5718__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.into,(function (){var G__50895 = plan;
var G__50895__$1 = (((G__50895 == null))?null:cljs.core.first(G__50895));
var G__50895__$2 = (((G__50895__$1 == null))?null:cljs.core.second(G__50895__$1));
var G__50895__$3 = (((G__50895__$2 == null))?null:com.wsscode.pathom.connect.resolver_data(env,G__50895__$2));
if((G__50895__$3 == null)){
return null;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121).cljs$core$IFn$_invoke$arity$1(G__50895__$3);
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
com.wsscode.pathom.connect.project_parent_query_attributes = (function com$wsscode$pathom$connect$project_parent_query_attributes(p__50896){
var map__50897 = p__50896;
var map__50897__$1 = (((((!((map__50897 == null))))?(((((map__50897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50897):map__50897);
var env = map__50897__$1;
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50897__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
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
com.wsscode.pathom.connect.reader = (function com$wsscode$pathom$connect$reader(p__50902){
var map__50904 = p__50902;
var map__50904__$1 = (((((!((map__50904 == null))))?(((((map__50904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50904):map__50904);
var env = map__50904__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50904__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50904__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var p = com.wsscode.pathom.core.params(env);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null)))){
var temp__5718__auto__ = com.wsscode.pathom.connect.pick_resolver(env);
if(cljs.core.truth_(temp__5718__auto__)){
var map__50909 = temp__5718__auto__;
var map__50909__$1 = (((((!((map__50909 == null))))?(((((map__50909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50909):map__50909);
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50909__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50909__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var map__50911 = com.wsscode.pathom.connect.resolver_data(env,s);
var map__50911__$1 = (((((!((map__50911 == null))))?(((((map__50911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50911):map__50911);
var resolver = map__50911__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50911__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50911__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50911__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver);
var response = (cljs.core.truth_(cache_QMARK_)?com.wsscode.common.async_cljs.throw_err(com.wsscode.pathom.core.cached_STAR_(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,e,p], null),((function (map__50911,map__50911__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__50909,map__50909__$1,e,s,temp__5718__auto__,k,p,map__50904,map__50904__$1,env,indexes,processing_sequence){
return (function (){
if(cljs.core.truth_((function (){var and__4120__auto__ = batch_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return processing_sequence;
} else {
return and__4120__auto__;
}
})())){
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (map__50911,map__50911__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__50909,map__50909__$1,e,s,temp__5718__auto__,k,p,map__50904,map__50904__$1,env,indexes,processing_sequence){
return (function (p1__50900_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__50900_SHARP_,input);
});})(map__50911,map__50911__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__50909,map__50909__$1,e,s,temp__5718__auto__,k,p,map__50904,map__50904__$1,env,indexes,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__50911,map__50911__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__50909,map__50909__$1,e,s,temp__5718__auto__,k,p,map__50904,map__50904__$1,env,indexes,processing_sequence){
return (function (p1__50899_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__50899_SHARP_,input);
});})(map__50911,map__50911__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__50909,map__50909__$1,e,s,temp__5718__auto__,k,p,map__50904,map__50904__$1,env,indexes,processing_sequence))
,processing_sequence)));
var batch_result = com.wsscode.pathom.connect.call_resolver(env__$1,items);
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env__$1,s,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
} else {
return com.wsscode.pathom.connect.call_resolver(env__$1,e);
}
});})(map__50911,map__50911__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__50909,map__50909__$1,e,s,temp__5718__auto__,k,p,map__50904,map__50904__$1,env,indexes,processing_sequence))
)):com.wsscode.pathom.connect.call_resolver(env__$1,e));
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),env__$1);
var response__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
if((!((((response__$1 == null)) || (cljs.core.map_QMARK_(response__$1)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Response from resolver must be a map.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),s,new cljs.core.Keyword(null,"response","response",-1068424192),response__$1], null));
} else {
}

com.wsscode.pathom.core.swap_entity_BANG_(env_SINGLEQUOTE_,((function (map__50911,map__50911__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,response,env_SINGLEQUOTE_,response__$1,map__50909,map__50909__$1,e,s,temp__5718__auto__,k,p,map__50904,map__50904__$1,env,indexes,processing_sequence){
return (function (p1__50901_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$1,p1__50901_SHARP_], 0));
});})(map__50911,map__50911__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,response,env_SINGLEQUOTE_,response__$1,map__50909,map__50909__$1,e,s,temp__5718__auto__,k,p,map__50904,map__50904__$1,env,indexes,processing_sequence))
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
com.wsscode.pathom.connect.process_simple_reader_response = (function com$wsscode$pathom$connect$process_simple_reader_response(p__50920,response){
var map__50922 = p__50920;
var map__50922__$1 = (((((!((map__50922 == null))))?(((((map__50922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50922):map__50922);
var env = map__50922__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50922__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
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
com.wsscode.pathom.connect.reader2 = (function com$wsscode$pathom$connect$reader2(p__50941){
var map__50942 = p__50941;
var map__50942__$1 = (((((!((map__50942 == null))))?(((((map__50942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50942):map__50942);
var env = map__50942__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50942__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50942__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50942__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var temp__5718__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__50944 = temp__5718__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50944,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50944,(1),null);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var G__50951 = plan;
var vec__50952 = G__50951;
var seq__50953 = cljs.core.seq(vec__50952);
var first__50954 = cljs.core.first(seq__50953);
var seq__50953__$1 = cljs.core.next(seq__50953);
var step = first__50954;
var tail = seq__50953__$1;
var failed_resolvers = cljs.core.PersistentArrayMap.EMPTY;
var out_left = out;
var G__50951__$1 = G__50951;
var failed_resolvers__$1 = failed_resolvers;
var out_left__$1 = out_left;
while(true){
var vec__50989 = G__50951__$1;
var seq__50990 = cljs.core.seq(vec__50989);
var first__50991 = cljs.core.first(seq__50990);
var seq__50990__$1 = cljs.core.next(seq__50990);
var step__$1 = first__50991;
var tail__$1 = seq__50990__$1;
var failed_resolvers__$2 = failed_resolvers__$1;
var out_left__$2 = out_left__$1;
if(cljs.core.truth_(step__$1)){
var vec__50992 = step__$1;
var key_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50992,(0),null);
var resolver_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50992,(1),null);
var map__50995 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),resolver_sym], null));
var map__50995__$1 = (((((!((map__50995 == null))))?(((((map__50995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50995):map__50995);
var resolver = map__50995__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50995__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50995__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50995__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = com.wsscode.pathom.connect.resolver__GT_output(env,resolver_sym);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver);
var e = cljs.core.select_keys(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env__$1),input);
var p = com.wsscode.pathom.core.params(env__$1);
var trace_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),e], null);
var response = (cljs.core.truth_(cache_QMARK_)?com.wsscode.common.async_cljs.throw_err(com.wsscode.pathom.core.cached_STAR_(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,e,p], null),((function (G__50951__$1,failed_resolvers__$1,out_left__$1,vec__50992,key_SINGLEQUOTE_,resolver_sym,map__50995,map__50995__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__50989,seq__50990,first__50991,seq__50990__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50951,vec__50952,seq__50953,first__50954,seq__50953__$1,step,tail,failed_resolvers,out_left,key,vec__50944,plan,out,temp__5718__auto__,map__50942,map__50942__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (){
if(cljs.core.truth_((function (){var and__4120__auto__ = batch_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return processing_sequence;
} else {
return and__4120__auto__;
}
})())){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__21490__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769)));
var res__21491__auto__ = (function (){var _ = com.wsscode.pathom.trace.trace(env__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417)));
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (G__50951__$1,failed_resolvers__$1,out_left__$1,_,trace_id__21490__auto__,vec__50992,key_SINGLEQUOTE_,resolver_sym,map__50995,map__50995__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__50989,seq__50990,first__50991,seq__50990__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50951,vec__50952,seq__50953,first__50954,seq__50953__$1,step,tail,failed_resolvers,out_left,key,vec__50944,plan,out,temp__5718__auto__,map__50942,map__50942__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__50928_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__50928_SHARP_,input);
});})(G__50951__$1,failed_resolvers__$1,out_left__$1,_,trace_id__21490__auto__,vec__50992,key_SINGLEQUOTE_,resolver_sym,map__50995,map__50995__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__50989,seq__50990,first__50991,seq__50990__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50951,vec__50952,seq__50953,first__50954,seq__50953__$1,step,tail,failed_resolvers,out_left,key,vec__50944,plan,out,temp__5718__auto__,map__50942,map__50942__$1,env,indexes,max_resolver_weight,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__50951__$1,failed_resolvers__$1,out_left__$1,_,trace_id__21490__auto__,vec__50992,key_SINGLEQUOTE_,resolver_sym,map__50995,map__50995__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__50989,seq__50990,first__50991,seq__50990__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50951,vec__50952,seq__50953,first__50954,seq__50953__$1,step,tail,failed_resolvers,out_left,key,vec__50944,plan,out,temp__5718__auto__,map__50942,map__50942__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__50927_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__50927_SHARP_,input);
});})(G__50951__$1,failed_resolvers__$1,out_left__$1,_,trace_id__21490__auto__,vec__50992,key_SINGLEQUOTE_,resolver_sym,map__50995,map__50995__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__50989,seq__50990,first__50991,seq__50990__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50951,vec__50952,seq__50953,first__50954,seq__50953__$1,step,tail,failed_resolvers,out_left,key,vec__50944,plan,out,temp__5718__auto__,map__50942,map__50942__$1,env,indexes,max_resolver_weight,processing_sequence))
,processing_sequence)));
var ___$1 = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616),items], null));
var batch_result = com.wsscode.pathom.connect.call_resolver(env__$1,items);
var ___$2 = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429),cljs.core.count(batch_result)], null));
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env__$1,resolver_sym,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env__$1,trace_id__21490__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769)));

return res__21491__auto__;
} else {
var _ = com.wsscode.pathom.trace.trace(env__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417)));
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (G__50951__$1,failed_resolvers__$1,out_left__$1,_,vec__50992,key_SINGLEQUOTE_,resolver_sym,map__50995,map__50995__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__50989,seq__50990,first__50991,seq__50990__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50951,vec__50952,seq__50953,first__50954,seq__50953__$1,step,tail,failed_resolvers,out_left,key,vec__50944,plan,out,temp__5718__auto__,map__50942,map__50942__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__50928_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__50928_SHARP_,input);
});})(G__50951__$1,failed_resolvers__$1,out_left__$1,_,vec__50992,key_SINGLEQUOTE_,resolver_sym,map__50995,map__50995__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__50989,seq__50990,first__50991,seq__50990__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50951,vec__50952,seq__50953,first__50954,seq__50953__$1,step,tail,failed_resolvers,out_left,key,vec__50944,plan,out,temp__5718__auto__,map__50942,map__50942__$1,env,indexes,max_resolver_weight,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__50951__$1,failed_resolvers__$1,out_left__$1,_,vec__50992,key_SINGLEQUOTE_,resolver_sym,map__50995,map__50995__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__50989,seq__50990,first__50991,seq__50990__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50951,vec__50952,seq__50953,first__50954,seq__50953__$1,step,tail,failed_resolvers,out_left,key,vec__50944,plan,out,temp__5718__auto__,map__50942,map__50942__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__50927_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__50927_SHARP_,input);
});})(G__50951__$1,failed_resolvers__$1,out_left__$1,_,vec__50992,key_SINGLEQUOTE_,resolver_sym,map__50995,map__50995__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__50989,seq__50990,first__50991,seq__50990__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50951,vec__50952,seq__50953,first__50954,seq__50953__$1,step,tail,failed_resolvers,out_left,key,vec__50944,plan,out,temp__5718__auto__,map__50942,map__50942__$1,env,indexes,max_resolver_weight,processing_sequence))
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
});})(G__50951__$1,failed_resolvers__$1,out_left__$1,vec__50992,key_SINGLEQUOTE_,resolver_sym,map__50995,map__50995__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__50989,seq__50990,first__50991,seq__50990__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50951,vec__50952,seq__50953,first__50954,seq__50953__$1,step,tail,failed_resolvers,out_left,key,vec__50944,plan,out,temp__5718__auto__,map__50942,map__50942__$1,env,indexes,max_resolver_weight,processing_sequence))
)):com.wsscode.pathom.connect.call_resolver(env__$1,e));
var response__$1 = (function (){var or__4131__auto__ = response;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var replan = ((function (G__50951__$1,failed_resolvers__$1,out_left__$1,vec__50992,key_SINGLEQUOTE_,resolver_sym,map__50995,map__50995__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,response,response__$1,vec__50989,seq__50990,first__50991,seq__50990__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50951,vec__50952,seq__50953,first__50954,seq__50953__$1,step,tail,failed_resolvers,out_left,key,vec__50944,plan,out,temp__5718__auto__,map__50942,map__50942__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (error){
var failed_resolvers__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers__$2,resolver_sym,error);
com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$1,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (G__50951__$1,failed_resolvers__$1,out_left__$1,failed_resolvers__$3,vec__50992,key_SINGLEQUOTE_,resolver_sym,map__50995,map__50995__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,response,response__$1,vec__50989,seq__50990,first__50991,seq__50990__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50951,vec__50952,seq__50953,first__50954,seq__50953__$1,step,tail,failed_resolvers,out_left,key,vec__50944,plan,out,temp__5718__auto__,map__50942,map__50942__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__50933_SHARP_){
var x__4222__auto__ = ((function (){var or__4131__auto__ = p1__50933_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() * (2));
var y__4223__auto__ = max_resolver_weight;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});})(G__50951__$1,failed_resolvers__$1,out_left__$1,failed_resolvers__$3,vec__50992,key_SINGLEQUOTE_,resolver_sym,map__50995,map__50995__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,response,response__$1,vec__50989,seq__50990,first__50991,seq__50990__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50951,vec__50952,seq__50953,first__50954,seq__50953__$1,step,tail,failed_resolvers,out_left,key,vec__50944,plan,out,temp__5718__auto__,map__50942,map__50942__$1,env,indexes,max_resolver_weight,processing_sequence))
], 0));

var temp__5718__auto____$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$1,failed_resolvers__$3);
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__50997 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50997,(0),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50997,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan__$1,failed_resolvers__$3,out_SINGLEQUOTE_], null);
} else {
return null;
}
});})(G__50951__$1,failed_resolvers__$1,out_left__$1,vec__50992,key_SINGLEQUOTE_,resolver_sym,map__50995,map__50995__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,response,response__$1,vec__50989,seq__50990,first__50991,seq__50990__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50951,vec__50952,seq__50953,first__50954,seq__50953__$1,step,tail,failed_resolvers,out_left,key,vec__50944,plan,out,temp__5718__auto__,map__50942,map__50942__$1,env,indexes,max_resolver_weight,processing_sequence))
;
if(cljs.core.map_QMARK_(response__$1)){
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(response__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),env__$1);
var response__$2 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
com.wsscode.pathom.core.swap_entity_BANG_(env_SINGLEQUOTE_,((function (G__50951__$1,failed_resolvers__$1,out_left__$1,env_SINGLEQUOTE_,response__$2,vec__50992,key_SINGLEQUOTE_,resolver_sym,map__50995,map__50995__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,response,response__$1,replan,vec__50989,seq__50990,first__50991,seq__50990__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50951,vec__50952,seq__50953,first__50954,seq__50953__$1,step,tail,failed_resolvers,out_left,key,vec__50944,plan,out,temp__5718__auto__,map__50942,map__50942__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__50935_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$2,p1__50935_SHARP_], 0));
});})(G__50951__$1,failed_resolvers__$1,out_left__$1,env_SINGLEQUOTE_,response__$2,vec__50992,key_SINGLEQUOTE_,resolver_sym,map__50995,map__50995__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,response,response__$1,replan,vec__50989,seq__50990,first__50991,seq__50990__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50951,vec__50952,seq__50953,first__50954,seq__50953__$1,step,tail,failed_resolvers,out_left,key,vec__50944,plan,out,temp__5718__auto__,map__50942,map__50942__$1,env,indexes,max_resolver_weight,processing_sequence))
);

if(((cljs.core.contains_QMARK_(response__$2,key_SINGLEQUOTE_)) && (cljs.core.not((function (){var G__51008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response__$2,key_SINGLEQUOTE_);
return (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(G__51008) : com.wsscode.pathom.core.break_values.call(null,G__51008));
})())))){
var out_provides = com.wsscode.pathom.connect.output__GT_provides(output);
com.wsscode.pathom.trace.trace(env_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym], null));

if(cljs.core.seq(tail__$1)){
var G__54847 = tail__$1;
var G__54848 = failed_resolvers__$2;
var G__54849 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(out_left__$2,out_provides);
G__50951__$1 = G__54847;
failed_resolvers__$1 = G__54848;
out_left__$1 = G__54849;
continue;
} else {
return com.wsscode.pathom.connect.process_simple_reader_response(env_SINGLEQUOTE_,response__$2);
}
} else {
var temp__5718__auto____$1 = replan(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$2,new cljs.core.Keyword(null,"key","key",-1516042587),key_SINGLEQUOTE_], null)));
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__51013 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51013,(0),null);
var failed_resolvers__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51013,(1),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51013,(2),null);
var G__54853 = plan__$1;
var G__54854 = failed_resolvers__$3;
var G__54855 = out_SINGLEQUOTE_;
G__50951__$1 = G__54853;
failed_resolvers__$1 = G__54854;
out_left__$1 = G__54855;
continue;
} else {
if(cljs.core.seq(tail__$1)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$2,new cljs.core.Keyword(null,"key","key",-1516042587),key_SINGLEQUOTE_], null));
} else {
}

return com.wsscode.pathom.connect.process_simple_reader_response(env_SINGLEQUOTE_,response__$2);
}
}
} else {
var temp__5718__auto____$1 = replan(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$1], null)));
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__51016 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51016,(0),null);
var failed_resolvers__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51016,(1),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51016,(2),null);
var G__54860 = plan__$1;
var G__54861 = failed_resolvers__$3;
var G__54862 = out_SINGLEQUOTE_;
G__50951__$1 = G__54860;
failed_resolvers__$1 = G__54861;
out_left__$1 = G__54862;
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
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__){
return (function (state_51069){
var state_val_51070 = (state_51069[(1)]);
if((state_val_51070 === (7))){
var inst_51043 = (state_51069[(7)]);
var inst_51045 = (state_51069[(8)]);
var inst_51045__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51043) : f.call(null,inst_51043));
var inst_51046 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51045__$1);
var state_51069__$1 = (function (){var statearr_51079 = state_51069;
(statearr_51079[(8)] = inst_51045__$1);

return statearr_51079;
})();
if(inst_51046){
var statearr_51086_54865 = state_51069__$1;
(statearr_51086_54865[(1)] = (10));

} else {
var statearr_51088_54866 = state_51069__$1;
(statearr_51088_54866[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51070 === (1))){
var state_51069__$1 = state_51069;
var statearr_51093_54867 = state_51069__$1;
(statearr_51093_54867[(2)] = null);

(statearr_51093_54867[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51070 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_51069,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_51039 = cljs.core.PersistentVector.EMPTY;
var inst_51040 = inst_51039;
var inst_51041 = s;
var state_51069__$1 = (function (){var statearr_51099 = state_51069;
(statearr_51099[(9)] = inst_51040);

(statearr_51099[(10)] = inst_51041);

return statearr_51099;
})();
var statearr_51100_54868 = state_51069__$1;
(statearr_51100_54868[(2)] = null);

(statearr_51100_54868[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51070 === (13))){
var inst_51049 = (state_51069[(2)]);
var inst_51050 = com.wsscode.common.async_cljs.throw_err(inst_51049);
var state_51069__$1 = state_51069;
var statearr_51107_54869 = state_51069__$1;
(statearr_51107_54869[(2)] = inst_51050);

(statearr_51107_54869[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51070 === (6))){
var inst_51061 = (state_51069[(2)]);
var state_51069__$1 = state_51069;
var statearr_51115_54870 = state_51069__$1;
(statearr_51115_54870[(2)] = inst_51061);


cljs.core.async.impl.ioc_helpers.process_exception(state_51069__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51070 === (3))){
var inst_51035 = (state_51069[(2)]);
var state_51069__$1 = state_51069;
var statearr_51122_54871 = state_51069__$1;
(statearr_51122_54871[(2)] = inst_51035);


cljs.core.async.impl.ioc_helpers.process_exception(state_51069__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51070 === (12))){
var inst_51040 = (state_51069[(9)]);
var inst_51041 = (state_51069[(10)]);
var inst_51053 = (state_51069[(2)]);
var inst_51054 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_51040,inst_51053);
var inst_51055 = cljs.core.next(inst_51041);
var inst_51040__$1 = inst_51054;
var inst_51041__$1 = inst_51055;
var state_51069__$1 = (function (){var statearr_51124 = state_51069;
(statearr_51124[(9)] = inst_51040__$1);

(statearr_51124[(10)] = inst_51041__$1);

return statearr_51124;
})();
var statearr_51129_54876 = state_51069__$1;
(statearr_51129_54876[(2)] = null);

(statearr_51129_54876[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51070 === (2))){
var inst_51067 = (state_51069[(2)]);
var state_51069__$1 = state_51069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51069__$1,inst_51067);
} else {
if((state_val_51070 === (11))){
var inst_51045 = (state_51069[(8)]);
var state_51069__$1 = state_51069;
var statearr_51131_54877 = state_51069__$1;
(statearr_51131_54877[(2)] = inst_51045);

(statearr_51131_54877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51070 === (9))){
var inst_51059 = (state_51069[(2)]);
var state_51069__$1 = state_51069;
var statearr_51137_54879 = state_51069__$1;
(statearr_51137_54879[(2)] = inst_51059);

(statearr_51137_54879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51070 === (5))){
var inst_51043 = (state_51069[(7)]);
var inst_51041 = (state_51069[(10)]);
var inst_51043__$1 = cljs.core.first(inst_51041);
var state_51069__$1 = (function (){var statearr_51141 = state_51069;
(statearr_51141[(7)] = inst_51043__$1);

return statearr_51141;
})();
if(cljs.core.truth_(inst_51043__$1)){
var statearr_51146_54882 = state_51069__$1;
(statearr_51146_54882[(1)] = (7));

} else {
var statearr_51148_54883 = state_51069__$1;
(statearr_51148_54883[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51070 === (10))){
var inst_51045 = (state_51069[(8)]);
var state_51069__$1 = state_51069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51069__$1,(13),inst_51045);
} else {
if((state_val_51070 === (8))){
var inst_51040 = (state_51069[(9)]);
var state_51069__$1 = state_51069;
var statearr_51153_54884 = state_51069__$1;
(statearr_51153_54884[(2)] = inst_51040);

(statearr_51153_54884[(1)] = (9));


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
});})(c__39084__auto__))
;
return ((function (switch__38786__auto__,c__39084__auto__){
return (function() {
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__38787__auto____0 = (function (){
var statearr_51163 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51163[(0)] = com$wsscode$pathom$connect$map_async_serial_$_state_machine__38787__auto__);

(statearr_51163[(1)] = (1));

return statearr_51163;
});
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__38787__auto____1 = (function (state_51069){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_51069);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e51172){if((e51172 instanceof Object)){
var ex__38790__auto__ = e51172;
var statearr_51179_54890 = state_51069;
(statearr_51179_54890[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51172;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54891 = state_51069;
state_51069 = G__54891;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$connect$map_async_serial_$_state_machine__38787__auto__ = function(state_51069){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__38787__auto____1.call(this,state_51069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$map_async_serial_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$map_async_serial_$_state_machine__38787__auto____0;
com$wsscode$pathom$connect$map_async_serial_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$map_async_serial_$_state_machine__38787__auto____1;
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__))
})();
var state__39086__auto__ = (function (){var statearr_51185 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_51185[(6)] = c__39084__auto__);

return statearr_51185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__))
);

return c__39084__auto__;
});
/**
 * DEPRECATED: use async-reader2
 * 
 *   Like reader, but supports async values on resolver return.
 */
com.wsscode.pathom.connect.async_reader = (function com$wsscode$pathom$connect$async_reader(p__51207){
var map__51208 = p__51207;
var map__51208__$1 = (((((!((map__51208 == null))))?(((((map__51208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51208):map__51208);
var env = map__51208__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51208__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51208__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var p = com.wsscode.pathom.core.params(env);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null)))){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,k,p,map__51208,map__51208__$1,env,indexes,processing_sequence){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,k,p,map__51208,map__51208__$1,env,indexes,processing_sequence){
return (function (state_51429){
var state_val_51434 = (state_51429[(1)]);
if((state_val_51434 === (7))){
var state_51429__$1 = state_51429;
var statearr_51445_54895 = state_51429__$1;
(statearr_51445_54895[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));

(statearr_51445_54895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (59))){
var inst_51412 = (state_51429[(2)]);
var state_51429__$1 = state_51429;
var statearr_51447_54896 = state_51429__$1;
(statearr_51447_54896[(2)] = inst_51412);

(statearr_51447_54896[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (20))){
var inst_51285 = (state_51429[(2)]);
var state_51429__$1 = state_51429;
if(cljs.core.truth_(inst_51285)){
var statearr_51449_54898 = state_51429__$1;
(statearr_51449_54898[(1)] = (24));

} else {
var statearr_51450_54899 = state_51429__$1;
(statearr_51450_54899[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (58))){
var inst_51400 = (state_51429[(7)]);
var state_51429__$1 = state_51429;
var statearr_51452_54901 = state_51429__$1;
(statearr_51452_54901[(2)] = inst_51400);

(statearr_51452_54901[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (60))){
var inst_51408 = (state_51429[(2)]);
var inst_51409 = com.wsscode.common.async_cljs.throw_err(inst_51408);
var state_51429__$1 = state_51429;
var statearr_51453_54902 = state_51429__$1;
(statearr_51453_54902[(2)] = inst_51409);

(statearr_51453_54902[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (27))){
var inst_51260 = (state_51429[(8)]);
var inst_51300 = (state_51429[(9)]);
var inst_51318 = (state_51429[(10)]);
var inst_51299 = (state_51429[(11)]);
var inst_51296 = (state_51429[(12)]);
var inst_51255 = (state_51429[(13)]);
var inst_51224 = (state_51429[(14)]);
var inst_51294 = (state_51429[(15)]);
var inst_51254 = (state_51429[(16)]);
var inst_51297 = (state_51429[(17)]);
var inst_51314 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51315 = [inst_51260,inst_51255,p];
var inst_51316 = (new cljs.core.PersistentVector(null,3,(5),inst_51314,inst_51315,null));
var inst_51317 = (function (){var input = inst_51299;
var cache_QMARK_ = inst_51296;
var map__51261 = inst_51294;
var map__51226 = inst_51254;
var temp__5718__auto__ = inst_51224;
var batch_QMARK_ = inst_51297;
var env__$1 = inst_51300;
var e = inst_51255;
var s = inst_51260;
var resolver = inst_51294;
return ((function (input,cache_QMARK_,map__51261,map__51226,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_51260,inst_51300,inst_51318,inst_51299,inst_51296,inst_51255,inst_51224,inst_51294,inst_51254,inst_51297,inst_51314,inst_51315,inst_51316,state_val_51434,c__39084__auto__,k,p,map__51208,map__51208__$1,env,indexes,processing_sequence){
return (function (){
var c__39084__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto____$1,input,cache_QMARK_,map__51261,map__51226,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_51260,inst_51300,inst_51318,inst_51299,inst_51296,inst_51255,inst_51224,inst_51294,inst_51254,inst_51297,inst_51314,inst_51315,inst_51316,state_val_51434,c__39084__auto__,k,p,map__51208,map__51208__$1,env,indexes,processing_sequence){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto____$1,input,cache_QMARK_,map__51261,map__51226,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_51260,inst_51300,inst_51318,inst_51299,inst_51296,inst_51255,inst_51224,inst_51294,inst_51254,inst_51297,inst_51314,inst_51315,inst_51316,state_val_51434,c__39084__auto__,k,p,map__51208,map__51208__$1,env,indexes,processing_sequence){
return (function (state_51501){
var state_val_51502 = (state_51501[(1)]);
if((state_val_51502 === (7))){
var inst_51463 = (state_51501[(2)]);
var state_51501__$1 = state_51501;
if(cljs.core.truth_(inst_51463)){
var statearr_51505_54908 = state_51501__$1;
(statearr_51505_54908[(1)] = (8));

} else {
var statearr_51506_54909 = state_51501__$1;
(statearr_51506_54909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51502 === (1))){
var state_51501__$1 = state_51501;
var statearr_51509_54910 = state_51501__$1;
(statearr_51509_54910[(2)] = null);

(statearr_51509_54910[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51502 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_51501,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_51501__$1 = state_51501;
if(cljs.core.truth_(batch_QMARK_)){
var statearr_51510_54912 = state_51501__$1;
(statearr_51510_54912[(1)] = (5));

} else {
var statearr_51511_54913 = state_51501__$1;
(statearr_51511_54913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51502 === (15))){
var inst_51478 = (state_51501[(2)]);
var inst_51479 = com.wsscode.common.async_cljs.throw_err(inst_51478);
var state_51501__$1 = state_51501;
var statearr_51515_54914 = state_51501__$1;
(statearr_51515_54914[(2)] = inst_51479);

(statearr_51515_54914[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51502 === (13))){
var inst_51474 = (state_51501[(7)]);
var state_51501__$1 = state_51501;
var statearr_51517_54915 = state_51501__$1;
(statearr_51517_54915[(2)] = inst_51474);

(statearr_51517_54915[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51502 === (6))){
var state_51501__$1 = state_51501;
var statearr_51519_54916 = state_51501__$1;
(statearr_51519_54916[(2)] = batch_QMARK_);

(statearr_51519_54916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51502 === (17))){
var inst_51487 = (state_51501[(8)]);
var state_51501__$1 = state_51501;
var statearr_51520_54917 = state_51501__$1;
(statearr_51520_54917[(2)] = inst_51487);

(statearr_51520_54917[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51502 === (3))){
var inst_51456 = (state_51501[(2)]);
var state_51501__$1 = state_51501;
var statearr_51521_54918 = state_51501__$1;
(statearr_51521_54918[(2)] = inst_51456);


cljs.core.async.impl.ioc_helpers.process_exception(state_51501__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51502 === (12))){
var inst_51474 = (state_51501[(7)]);
var state_51501__$1 = state_51501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51501__$1,(15),inst_51474);
} else {
if((state_val_51502 === (2))){
var inst_51499 = (state_51501[(2)]);
var state_51501__$1 = state_51501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51501__$1,inst_51499);
} else {
if((state_val_51502 === (19))){
var inst_51491 = (state_51501[(2)]);
var inst_51492 = com.wsscode.common.async_cljs.throw_err(inst_51491);
var state_51501__$1 = state_51501;
var statearr_51527_54920 = state_51501__$1;
(statearr_51527_54920[(2)] = inst_51492);

(statearr_51527_54920[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51502 === (11))){
var inst_51473 = (state_51501[(9)]);
var inst_51474 = (state_51501[(7)]);
var inst_51467 = (state_51501[(10)]);
var inst_51471 = (state_51501[(2)]);
var inst_51472 = com.wsscode.common.async_cljs.throw_err(inst_51471);
var inst_51473__$1 = cljs.core.filterv(inst_51467,inst_51472);
var inst_51474__$1 = com.wsscode.pathom.connect.call_resolver(env__$1,inst_51473__$1);
var inst_51475 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51474__$1);
var state_51501__$1 = (function (){var statearr_51529 = state_51501;
(statearr_51529[(9)] = inst_51473__$1);

(statearr_51529[(7)] = inst_51474__$1);

return statearr_51529;
})();
if(inst_51475){
var statearr_51532_54921 = state_51501__$1;
(statearr_51532_54921[(1)] = (12));

} else {
var statearr_51533_54922 = state_51501__$1;
(statearr_51533_54922[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51502 === (9))){
var inst_51487 = (state_51501[(8)]);
var inst_51487__$1 = com.wsscode.pathom.connect.call_resolver(env__$1,e);
var inst_51488 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51487__$1);
var state_51501__$1 = (function (){var statearr_51534 = state_51501;
(statearr_51534[(8)] = inst_51487__$1);

return statearr_51534;
})();
if(inst_51488){
var statearr_51535_54924 = state_51501__$1;
(statearr_51535_54924[(1)] = (16));

} else {
var statearr_51536_54925 = state_51501__$1;
(statearr_51536_54925[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51502 === (5))){
var state_51501__$1 = state_51501;
var statearr_51537_54926 = state_51501__$1;
(statearr_51537_54926[(2)] = processing_sequence);

(statearr_51537_54926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51502 === (14))){
var inst_51473 = (state_51501[(9)]);
var inst_51482 = (state_51501[(2)]);
var inst_51483 = cljs.core.zipmap(inst_51473,inst_51482);
var inst_51484 = com.wsscode.pathom.connect.cache_batch(env__$1,s,inst_51483);
var inst_51485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51483,e);
var state_51501__$1 = (function (){var statearr_51541 = state_51501;
(statearr_51541[(11)] = inst_51484);

return statearr_51541;
})();
var statearr_51542_54927 = state_51501__$1;
(statearr_51542_54927[(2)] = inst_51485);

(statearr_51542_54927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51502 === (16))){
var inst_51487 = (state_51501[(8)]);
var state_51501__$1 = state_51501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51501__$1,(19),inst_51487);
} else {
if((state_val_51502 === (10))){
var inst_51497 = (state_51501[(2)]);
var state_51501__$1 = state_51501;
var statearr_51547_54929 = state_51501__$1;
(statearr_51547_54929[(2)] = inst_51497);


cljs.core.async.impl.ioc_helpers.process_exception(state_51501__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51502 === (18))){
var inst_51495 = (state_51501[(2)]);
var state_51501__$1 = state_51501;
var statearr_51548_54933 = state_51501__$1;
(statearr_51548_54933[(2)] = inst_51495);

(statearr_51548_54933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51502 === (8))){
var inst_51467 = (function (){return ((function (state_val_51502,c__39084__auto____$1,input,cache_QMARK_,map__51261,map__51226,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_51260,inst_51300,inst_51318,inst_51299,inst_51296,inst_51255,inst_51224,inst_51294,inst_51254,inst_51297,inst_51314,inst_51315,inst_51316,state_val_51434,c__39084__auto__,k,p,map__51208,map__51208__$1,env,indexes,processing_sequence){
return (function (p1__51199_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__51199_SHARP_,input);
});
;})(state_val_51502,c__39084__auto____$1,input,cache_QMARK_,map__51261,map__51226,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_51260,inst_51300,inst_51318,inst_51299,inst_51296,inst_51255,inst_51224,inst_51294,inst_51254,inst_51297,inst_51314,inst_51315,inst_51316,state_val_51434,c__39084__auto__,k,p,map__51208,map__51208__$1,env,indexes,processing_sequence))
})();
var inst_51468 = (function (){return ((function (inst_51467,state_val_51502,c__39084__auto____$1,input,cache_QMARK_,map__51261,map__51226,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_51260,inst_51300,inst_51318,inst_51299,inst_51296,inst_51255,inst_51224,inst_51294,inst_51254,inst_51297,inst_51314,inst_51315,inst_51316,state_val_51434,c__39084__auto__,k,p,map__51208,map__51208__$1,env,indexes,processing_sequence){
return (function (p1__51192_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__51192_SHARP_,input);
});
;})(inst_51467,state_val_51502,c__39084__auto____$1,input,cache_QMARK_,map__51261,map__51226,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_51260,inst_51300,inst_51318,inst_51299,inst_51296,inst_51255,inst_51224,inst_51294,inst_51254,inst_51297,inst_51314,inst_51315,inst_51316,state_val_51434,c__39084__auto__,k,p,map__51208,map__51208__$1,env,indexes,processing_sequence))
})();
var inst_51469 = com.wsscode.pathom.connect.map_async_serial(inst_51468,processing_sequence);
var state_51501__$1 = (function (){var statearr_51553 = state_51501;
(statearr_51553[(10)] = inst_51467);

return statearr_51553;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51501__$1,(11),inst_51469);
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
});})(c__39084__auto____$1,input,cache_QMARK_,map__51261,map__51226,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_51260,inst_51300,inst_51318,inst_51299,inst_51296,inst_51255,inst_51224,inst_51294,inst_51254,inst_51297,inst_51314,inst_51315,inst_51316,state_val_51434,c__39084__auto__,k,p,map__51208,map__51208__$1,env,indexes,processing_sequence))
;
return ((function (switch__38786__auto__,c__39084__auto____$1,input,cache_QMARK_,map__51261,map__51226,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_51260,inst_51300,inst_51318,inst_51299,inst_51296,inst_51255,inst_51224,inst_51294,inst_51254,inst_51297,inst_51314,inst_51315,inst_51316,state_val_51434,c__39084__auto__,k,p,map__51208,map__51208__$1,env,indexes,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_reader_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$connect$async_reader_$_state_machine__38787__auto____0 = (function (){
var statearr_51554 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51554[(0)] = com$wsscode$pathom$connect$async_reader_$_state_machine__38787__auto__);

(statearr_51554[(1)] = (1));

return statearr_51554;
});
var com$wsscode$pathom$connect$async_reader_$_state_machine__38787__auto____1 = (function (state_51501){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_51501);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e51559){if((e51559 instanceof Object)){
var ex__38790__auto__ = e51559;
var statearr_51560_54941 = state_51501;
(statearr_51560_54941[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51559;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54942 = state_51501;
state_51501 = G__54942;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader_$_state_machine__38787__auto__ = function(state_51501){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader_$_state_machine__38787__auto____1.call(this,state_51501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader_$_state_machine__38787__auto____0;
com$wsscode$pathom$connect$async_reader_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader_$_state_machine__38787__auto____1;
return com$wsscode$pathom$connect$async_reader_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto____$1,input,cache_QMARK_,map__51261,map__51226,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_51260,inst_51300,inst_51318,inst_51299,inst_51296,inst_51255,inst_51224,inst_51294,inst_51254,inst_51297,inst_51314,inst_51315,inst_51316,state_val_51434,c__39084__auto__,k,p,map__51208,map__51208__$1,env,indexes,processing_sequence))
})();
var state__39086__auto__ = (function (){var statearr_51561 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_51561[(6)] = c__39084__auto____$1);

return statearr_51561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto____$1,input,cache_QMARK_,map__51261,map__51226,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_51260,inst_51300,inst_51318,inst_51299,inst_51296,inst_51255,inst_51224,inst_51294,inst_51254,inst_51297,inst_51314,inst_51315,inst_51316,state_val_51434,c__39084__auto__,k,p,map__51208,map__51208__$1,env,indexes,processing_sequence))
);

return c__39084__auto____$1;
});
;})(input,cache_QMARK_,map__51261,map__51226,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,inst_51260,inst_51300,inst_51318,inst_51299,inst_51296,inst_51255,inst_51224,inst_51294,inst_51254,inst_51297,inst_51314,inst_51315,inst_51316,state_val_51434,c__39084__auto__,k,p,map__51208,map__51208__$1,env,indexes,processing_sequence))
})();
var inst_51318__$1 = com.wsscode.pathom.core.cached_async(inst_51300,inst_51316,inst_51317);
var inst_51319 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51318__$1);
var state_51429__$1 = (function (){var statearr_51562 = state_51429;
(statearr_51562[(10)] = inst_51318__$1);

return statearr_51562;
})();
if(inst_51319){
var statearr_51563_54944 = state_51429__$1;
(statearr_51563_54944[(1)] = (30));

} else {
var statearr_51564_54945 = state_51429__$1;
(statearr_51564_54945[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (1))){
var state_51429__$1 = state_51429;
var statearr_51565_54946 = state_51429__$1;
(statearr_51565_54946[(2)] = null);

(statearr_51565_54946[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (24))){
var inst_51262 = (state_51429[(18)]);
var inst_51291 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51262);
var state_51429__$1 = state_51429;
var statearr_51566_54951 = state_51429__$1;
(statearr_51566_54951[(2)] = inst_51291);

(statearr_51566_54951[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (55))){
var state_51429__$1 = state_51429;
var statearr_51567_54953 = state_51429__$1;
(statearr_51567_54953[(2)] = null);

(statearr_51567_54953[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (39))){
var state_51429__$1 = state_51429;
var statearr_51569_54954 = state_51429__$1;
(statearr_51569_54954[(2)] = null);

(statearr_51569_54954[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (46))){
var inst_51383 = (state_51429[(2)]);
var state_51429__$1 = state_51429;
var statearr_51570_54955 = state_51429__$1;
(statearr_51570_54955[(2)] = inst_51383);

(statearr_51570_54955[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_51429,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_51221 = com.wsscode.pathom.connect.async_pick_resolver(env);
var state_51429__$1 = state_51429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51429__$1,(5),inst_51221);
} else {
if((state_val_51434 === (54))){
var inst_51400 = (state_51429[(7)]);
var inst_51339 = (state_51429[(19)]);
var inst_51366 = (state_51429[(20)]);
var inst_51399 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_51366);
var inst_51400__$1 = com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(inst_51399,inst_51339);
var inst_51401 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51400__$1);
var state_51429__$1 = (function (){var statearr_51571 = state_51429;
(statearr_51571[(7)] = inst_51400__$1);

return statearr_51571;
})();
if(inst_51401){
var statearr_51572_54959 = state_51429__$1;
(statearr_51572_54959[(1)] = (57));

} else {
var statearr_51573_54960 = state_51429__$1;
(statearr_51573_54960[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (15))){
var inst_51224 = (state_51429[(14)]);
var inst_51250 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51224);
var state_51429__$1 = state_51429;
var statearr_51574_54962 = state_51429__$1;
(statearr_51574_54962[(2)] = inst_51250);

(statearr_51574_54962[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (48))){
var inst_51341 = (state_51429[(21)]);
var inst_51389 = cljs.core.contains_QMARK_(inst_51341,k);
var state_51429__$1 = state_51429;
if(inst_51389){
var statearr_51575_54963 = state_51429__$1;
(statearr_51575_54963[(1)] = (51));

} else {
var statearr_51576_54965 = state_51429__$1;
(statearr_51576_54965[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (50))){
var inst_51417 = (state_51429[(2)]);
var state_51429__$1 = state_51429;
var statearr_51577_54970 = state_51429__$1;
(statearr_51577_54970[(2)] = inst_51417);

(statearr_51577_54970[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (21))){
var state_51429__$1 = state_51429;
var statearr_51578_54971 = state_51429__$1;
(statearr_51578_54971[(2)] = true);

(statearr_51578_54971[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (31))){
var inst_51318 = (state_51429[(10)]);
var state_51429__$1 = state_51429;
var statearr_51579_54973 = state_51429__$1;
(statearr_51579_54973[(2)] = inst_51318);

(statearr_51579_54973[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (32))){
var inst_51326 = (state_51429[(2)]);
var state_51429__$1 = state_51429;
var statearr_51580_54974 = state_51429__$1;
(statearr_51580_54974[(2)] = inst_51326);

(statearr_51580_54974[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (40))){
var inst_51260 = (state_51429[(8)]);
var inst_51300 = (state_51429[(9)]);
var inst_51341 = (state_51429[(21)]);
var inst_51299 = (state_51429[(11)]);
var inst_51296 = (state_51429[(12)]);
var inst_51255 = (state_51429[(13)]);
var inst_51339 = (state_51429[(19)]);
var inst_51224 = (state_51429[(14)]);
var inst_51294 = (state_51429[(15)]);
var inst_51254 = (state_51429[(16)]);
var inst_51297 = (state_51429[(17)]);
var inst_51366 = (state_51429[(20)]);
var inst_51363 = (state_51429[(2)]);
var inst_51364 = (function (){var input = inst_51299;
var response = inst_51341;
var cache_QMARK_ = inst_51296;
var map__51261 = inst_51294;
var map__51226 = inst_51254;
var temp__5718__auto__ = inst_51224;
var batch_QMARK_ = inst_51297;
var env__$1 = inst_51300;
var e = inst_51255;
var s = inst_51260;
var resolver = inst_51294;
var env_SINGLEQUOTE_ = inst_51339;
return ((function (input,response,cache_QMARK_,map__51261,map__51226,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,env_SINGLEQUOTE_,inst_51260,inst_51300,inst_51341,inst_51299,inst_51296,inst_51255,inst_51339,inst_51224,inst_51294,inst_51254,inst_51297,inst_51366,inst_51363,state_val_51434,c__39084__auto__,k,p,map__51208,map__51208__$1,env,indexes,processing_sequence){
return (function (p1__51200_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__51200_SHARP_], 0));
});
;})(input,response,cache_QMARK_,map__51261,map__51226,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,env_SINGLEQUOTE_,inst_51260,inst_51300,inst_51341,inst_51299,inst_51296,inst_51255,inst_51339,inst_51224,inst_51294,inst_51254,inst_51297,inst_51366,inst_51363,state_val_51434,c__39084__auto__,k,p,map__51208,map__51208__$1,env,indexes,processing_sequence))
})();
var inst_51365 = com.wsscode.pathom.core.swap_entity_BANG_(inst_51339,inst_51364);
var inst_51366__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51341,k);
var inst_51370 = cljs.core.sequential_QMARK_(inst_51366__$1);
var state_51429__$1 = (function (){var statearr_51581 = state_51429;
(statearr_51581[(22)] = inst_51365);

(statearr_51581[(23)] = inst_51363);

(statearr_51581[(20)] = inst_51366__$1);

return statearr_51581;
})();
if(inst_51370){
var statearr_51582_54983 = state_51429__$1;
(statearr_51582_54983[(1)] = (41));

} else {
var statearr_51583_54984 = state_51429__$1;
(statearr_51583_54984[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (56))){
var inst_51415 = (state_51429[(2)]);
var state_51429__$1 = state_51429;
var statearr_51584_54986 = state_51429__$1;
(statearr_51584_54986[(2)] = inst_51415);

(statearr_51584_54986[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (33))){
var inst_51322 = (state_51429[(2)]);
var inst_51323 = com.wsscode.common.async_cljs.throw_err(inst_51322);
var state_51429__$1 = state_51429;
var statearr_51585_54987 = state_51429__$1;
(statearr_51585_54987[(2)] = inst_51323);

(statearr_51585_54987[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (13))){
var state_51429__$1 = state_51429;
var statearr_51586_54990 = state_51429__$1;
(statearr_51586_54990[(2)] = false);

(statearr_51586_54990[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (22))){
var state_51429__$1 = state_51429;
var statearr_51587_54992 = state_51429__$1;
(statearr_51587_54992[(2)] = false);

(statearr_51587_54992[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (36))){
var inst_51336 = (state_51429[(2)]);
var state_51429__$1 = state_51429;
var statearr_51588_54994 = state_51429__$1;
(statearr_51588_54994[(2)] = inst_51336);

(statearr_51588_54994[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (41))){
var inst_51373 = (state_51429[(24)]);
var inst_51339 = (state_51429[(19)]);
var inst_51366 = (state_51429[(20)]);
var inst_51372 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.atom,inst_51366);
var inst_51373__$1 = com.wsscode.pathom.core.join_seq(inst_51339,inst_51372);
var inst_51374 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51373__$1);
var state_51429__$1 = (function (){var statearr_51589 = state_51429;
(statearr_51589[(24)] = inst_51373__$1);

return statearr_51589;
})();
if(inst_51374){
var statearr_51590_54997 = state_51429__$1;
(statearr_51590_54997[(1)] = (44));

} else {
var statearr_51591_54998 = state_51429__$1;
(statearr_51591_54998[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (43))){
var inst_51419 = (state_51429[(2)]);
var state_51429__$1 = state_51429;
var statearr_51592_55001 = state_51429__$1;
(statearr_51592_55001[(2)] = inst_51419);

(statearr_51592_55001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (29))){
var inst_51300 = (state_51429[(9)]);
var inst_51341 = (state_51429[(21)]);
var inst_51338 = (state_51429[(2)]);
var inst_51339 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_51338,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),inst_51300);
var inst_51341__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_51338,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_51347 = (inst_51341__$1 == null);
var inst_51348 = cljs.core.map_QMARK_(inst_51341__$1);
var inst_51349 = ((inst_51347) || (inst_51348));
var inst_51350 = cljs.core.not(inst_51349);
var state_51429__$1 = (function (){var statearr_51593 = state_51429;
(statearr_51593[(21)] = inst_51341__$1);

(statearr_51593[(19)] = inst_51339);

return statearr_51593;
})();
if(inst_51350){
var statearr_51595_55002 = state_51429__$1;
(statearr_51595_55002[(1)] = (38));

} else {
var statearr_51596_55003 = state_51429__$1;
(statearr_51596_55003[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (44))){
var inst_51373 = (state_51429[(24)]);
var state_51429__$1 = state_51429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51429__$1,(47),inst_51373);
} else {
if((state_val_51434 === (6))){
var inst_51224 = (state_51429[(14)]);
var inst_51232 = (inst_51224 == null);
var inst_51233 = cljs.core.not(inst_51232);
var state_51429__$1 = state_51429;
if(inst_51233){
var statearr_51597_55006 = state_51429__$1;
(statearr_51597_55006[(1)] = (9));

} else {
var statearr_51598_55007 = state_51429__$1;
(statearr_51598_55007[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (28))){
var inst_51300 = (state_51429[(9)]);
var inst_51255 = (state_51429[(13)]);
var inst_51328 = (state_51429[(25)]);
var inst_51328__$1 = com.wsscode.pathom.connect.call_resolver(inst_51300,inst_51255);
var inst_51329 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51328__$1);
var state_51429__$1 = (function (){var statearr_51599 = state_51429;
(statearr_51599[(25)] = inst_51328__$1);

return statearr_51599;
})();
if(inst_51329){
var statearr_51604_55010 = state_51429__$1;
(statearr_51604_55010[(1)] = (34));

} else {
var statearr_51609_55011 = state_51429__$1;
(statearr_51609_55011[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (51))){
var inst_51366 = (state_51429[(20)]);
var state_51429__$1 = state_51429;
var statearr_51634_55012 = state_51429__$1;
(statearr_51634_55012[(2)] = inst_51366);

(statearr_51634_55012[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (25))){
var inst_51262 = (state_51429[(18)]);
var state_51429__$1 = state_51429;
var statearr_51635_55013 = state_51429__$1;
(statearr_51635_55013[(2)] = inst_51262);

(statearr_51635_55013[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (34))){
var inst_51328 = (state_51429[(25)]);
var state_51429__$1 = state_51429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51429__$1,(37),inst_51328);
} else {
if((state_val_51434 === (17))){
var inst_51260 = (state_51429[(8)]);
var inst_51262 = (state_51429[(18)]);
var inst_51254 = (state_51429[(16)]);
var inst_51254__$1 = (state_51429[(2)]);
var inst_51255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51254__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var inst_51260__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51254__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var inst_51262__$1 = com.wsscode.pathom.connect.resolver_data(env,inst_51260__$1);
var inst_51267 = (inst_51262__$1 == null);
var inst_51268 = cljs.core.not(inst_51267);
var state_51429__$1 = (function (){var statearr_51656 = state_51429;
(statearr_51656[(8)] = inst_51260__$1);

(statearr_51656[(18)] = inst_51262__$1);

(statearr_51656[(13)] = inst_51255);

(statearr_51656[(16)] = inst_51254__$1);

return statearr_51656;
})();
if(inst_51268){
var statearr_51665_55016 = state_51429__$1;
(statearr_51665_55016[(1)] = (18));

} else {
var statearr_51666_55017 = state_51429__$1;
(statearr_51666_55017[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (3))){
var inst_51217 = (state_51429[(2)]);
var state_51429__$1 = state_51429;
var statearr_51667_55018 = state_51429__$1;
(statearr_51667_55018[(2)] = inst_51217);


cljs.core.async.impl.ioc_helpers.process_exception(state_51429__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (12))){
var state_51429__$1 = state_51429;
var statearr_51668_55020 = state_51429__$1;
(statearr_51668_55020[(2)] = true);

(statearr_51668_55020[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (2))){
var inst_51424 = (state_51429[(2)]);
var state_51429__$1 = state_51429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51429__$1,inst_51424);
} else {
if((state_val_51434 === (23))){
var inst_51282 = (state_51429[(2)]);
var state_51429__$1 = state_51429;
var statearr_51669_55022 = state_51429__$1;
(statearr_51669_55022[(2)] = inst_51282);

(statearr_51669_55022[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (47))){
var inst_51377 = (state_51429[(2)]);
var inst_51378 = com.wsscode.common.async_cljs.throw_err(inst_51377);
var state_51429__$1 = state_51429;
var statearr_51670_55023 = state_51429__$1;
(statearr_51670_55023[(2)] = inst_51378);

(statearr_51670_55023[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (35))){
var inst_51328 = (state_51429[(25)]);
var state_51429__$1 = state_51429;
var statearr_51671_55024 = state_51429__$1;
(statearr_51671_55024[(2)] = inst_51328);

(statearr_51671_55024[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (19))){
var state_51429__$1 = state_51429;
var statearr_51672_55025 = state_51429__$1;
(statearr_51672_55025[(2)] = false);

(statearr_51672_55025[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (57))){
var inst_51400 = (state_51429[(7)]);
var state_51429__$1 = state_51429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51429__$1,(60),inst_51400);
} else {
if((state_val_51434 === (11))){
var inst_51248 = (state_51429[(2)]);
var state_51429__$1 = state_51429;
if(cljs.core.truth_(inst_51248)){
var statearr_51673_55031 = state_51429__$1;
(statearr_51673_55031[(1)] = (15));

} else {
var statearr_51674_55032 = state_51429__$1;
(statearr_51674_55032[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (9))){
var inst_51224 = (state_51429[(14)]);
var inst_51236 = inst_51224.cljs$lang$protocol_mask$partition0$;
var inst_51237 = (inst_51236 & (64));
var inst_51238 = inst_51224.cljs$core$ISeq$;
var inst_51239 = (cljs.core.PROTOCOL_SENTINEL === inst_51238);
var inst_51240 = ((inst_51237) || (inst_51239));
var state_51429__$1 = state_51429;
if(cljs.core.truth_(inst_51240)){
var statearr_51675_55033 = state_51429__$1;
(statearr_51675_55033[(1)] = (12));

} else {
var statearr_51676_55034 = state_51429__$1;
(statearr_51676_55034[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (5))){
var inst_51224 = (state_51429[(14)]);
var inst_51223 = (state_51429[(2)]);
var inst_51224__$1 = com.wsscode.common.async_cljs.throw_err(inst_51223);
var state_51429__$1 = (function (){var statearr_51677 = state_51429;
(statearr_51677[(14)] = inst_51224__$1);

return statearr_51677;
})();
if(cljs.core.truth_(inst_51224__$1)){
var statearr_51678_55036 = state_51429__$1;
(statearr_51678_55036[(1)] = (6));

} else {
var statearr_51679_55037 = state_51429__$1;
(statearr_51679_55037[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (14))){
var inst_51245 = (state_51429[(2)]);
var state_51429__$1 = state_51429;
var statearr_51680_55043 = state_51429__$1;
(statearr_51680_55043[(2)] = inst_51245);

(statearr_51680_55043[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (45))){
var inst_51373 = (state_51429[(24)]);
var state_51429__$1 = state_51429;
var statearr_51681_55045 = state_51429__$1;
(statearr_51681_55045[(2)] = inst_51373);

(statearr_51681_55045[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (53))){
var inst_51394 = (state_51429[(2)]);
var state_51429__$1 = state_51429;
var statearr_51682_55046 = state_51429__$1;
(statearr_51682_55046[(2)] = inst_51394);

(statearr_51682_55046[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (26))){
var inst_51296 = (state_51429[(12)]);
var inst_51294 = (state_51429[(15)]);
var inst_51294__$1 = (state_51429[(2)]);
var inst_51296__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_51294__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_51297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51294__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_51299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51294__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_51300 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_51294__$1);
var state_51429__$1 = (function (){var statearr_51683 = state_51429;
(statearr_51683[(9)] = inst_51300);

(statearr_51683[(11)] = inst_51299);

(statearr_51683[(12)] = inst_51296__$1);

(statearr_51683[(15)] = inst_51294__$1);

(statearr_51683[(17)] = inst_51297);

return statearr_51683;
})();
if(cljs.core.truth_(inst_51296__$1)){
var statearr_51684_55048 = state_51429__$1;
(statearr_51684_55048[(1)] = (27));

} else {
var statearr_51685_55049 = state_51429__$1;
(statearr_51685_55049[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (16))){
var inst_51224 = (state_51429[(14)]);
var state_51429__$1 = state_51429;
var statearr_51686_55050 = state_51429__$1;
(statearr_51686_55050[(2)] = inst_51224);

(statearr_51686_55050[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (38))){
var inst_51260 = (state_51429[(8)]);
var inst_51341 = (state_51429[(21)]);
var inst_51356 = [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"response","response",-1068424192)];
var inst_51357 = [inst_51260,inst_51341];
var inst_51358 = cljs.core.PersistentHashMap.fromArrays(inst_51356,inst_51357);
var inst_51359 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Response from reader must be a map.",inst_51358);
var inst_51360 = (function(){throw inst_51359})();
var state_51429__$1 = state_51429;
var statearr_51687_55055 = state_51429__$1;
(statearr_51687_55055[(2)] = inst_51360);

(statearr_51687_55055[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (30))){
var inst_51318 = (state_51429[(10)]);
var state_51429__$1 = state_51429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51429__$1,(33),inst_51318);
} else {
if((state_val_51434 === (10))){
var state_51429__$1 = state_51429;
var statearr_51688_55056 = state_51429__$1;
(statearr_51688_55056[(2)] = false);

(statearr_51688_55056[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (18))){
var inst_51262 = (state_51429[(18)]);
var inst_51274 = inst_51262.cljs$lang$protocol_mask$partition0$;
var inst_51275 = (inst_51274 & (64));
var inst_51276 = inst_51262.cljs$core$ISeq$;
var inst_51277 = (cljs.core.PROTOCOL_SENTINEL === inst_51276);
var inst_51278 = ((inst_51275) || (inst_51277));
var state_51429__$1 = state_51429;
if(cljs.core.truth_(inst_51278)){
var statearr_51689_55057 = state_51429__$1;
(statearr_51689_55057[(1)] = (21));

} else {
var statearr_51690_55058 = state_51429__$1;
(statearr_51690_55058[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (52))){
var state_51429__$1 = state_51429;
var statearr_51691_55060 = state_51429__$1;
(statearr_51691_55060[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));

(statearr_51691_55060[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (42))){
var inst_51366 = (state_51429[(20)]);
var inst_51387 = (inst_51366 == null);
var state_51429__$1 = state_51429;
if(cljs.core.truth_(inst_51387)){
var statearr_51692_55063 = state_51429__$1;
(statearr_51692_55063[(1)] = (48));

} else {
var statearr_51693_55067 = state_51429__$1;
(statearr_51693_55067[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (37))){
var inst_51332 = (state_51429[(2)]);
var inst_51333 = com.wsscode.common.async_cljs.throw_err(inst_51332);
var state_51429__$1 = state_51429;
var statearr_51694_55069 = state_51429__$1;
(statearr_51694_55069[(2)] = inst_51333);

(statearr_51694_55069[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (8))){
var inst_51422 = (state_51429[(2)]);
var state_51429__$1 = state_51429;
var statearr_51695_55071 = state_51429__$1;
(statearr_51695_55071[(2)] = inst_51422);


cljs.core.async.impl.ioc_helpers.process_exception(state_51429__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51434 === (49))){
var state_51429__$1 = state_51429;
var statearr_51696_55072 = state_51429__$1;
(statearr_51696_55072[(1)] = (54));



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
});})(c__39084__auto__,k,p,map__51208,map__51208__$1,env,indexes,processing_sequence))
;
return ((function (switch__38786__auto__,c__39084__auto__,k,p,map__51208,map__51208__$1,env,indexes,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_reader_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$connect$async_reader_$_state_machine__38787__auto____0 = (function (){
var statearr_51698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51698[(0)] = com$wsscode$pathom$connect$async_reader_$_state_machine__38787__auto__);

(statearr_51698[(1)] = (1));

return statearr_51698;
});
var com$wsscode$pathom$connect$async_reader_$_state_machine__38787__auto____1 = (function (state_51429){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_51429);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e51699){if((e51699 instanceof Object)){
var ex__38790__auto__ = e51699;
var statearr_51700_55074 = state_51429;
(statearr_51700_55074[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51699;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55076 = state_51429;
state_51429 = G__55076;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader_$_state_machine__38787__auto__ = function(state_51429){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader_$_state_machine__38787__auto____1.call(this,state_51429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader_$_state_machine__38787__auto____0;
com$wsscode$pathom$connect$async_reader_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader_$_state_machine__38787__auto____1;
return com$wsscode$pathom$connect$async_reader_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,k,p,map__51208,map__51208__$1,env,indexes,processing_sequence))
})();
var state__39086__auto__ = (function (){var statearr_51701 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_51701[(6)] = c__39084__auto__);

return statearr_51701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,k,p,map__51208,map__51208__$1,env,indexes,processing_sequence))
);

return c__39084__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.async_read_cache_read = (function com$wsscode$pathom$connect$async_read_cache_read(env,resolver_sym,e,batch_QMARK_,processing_sequence,trace_data,input){
var params = com.wsscode.pathom.core.params(env);
return com.wsscode.pathom.core.cached_async(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,e,params], null),((function (params){
return (function (){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,params){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,params){
return (function (state_51799){
var state_val_51800 = (state_51799[(1)]);
if((state_val_51800 === (7))){
var inst_51711 = (state_51799[(2)]);
var state_51799__$1 = state_51799;
if(cljs.core.truth_(inst_51711)){
var statearr_51801_55080 = state_51799__$1;
(statearr_51801_55080[(1)] = (8));

} else {
var statearr_51802_55081 = state_51799__$1;
(statearr_51802_55081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51800 === (20))){
var inst_51765 = (state_51799[(7)]);
var state_51799__$1 = state_51799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51799__$1,(23),inst_51765);
} else {
if((state_val_51800 === (27))){
var inst_51789 = (state_51799[(2)]);
var inst_51790 = com.wsscode.common.async_cljs.throw_err(inst_51789);
var state_51799__$1 = state_51799;
var statearr_51803_55082 = state_51799__$1;
(statearr_51803_55082[(2)] = inst_51790);

(statearr_51803_55082[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51800 === (1))){
var state_51799__$1 = state_51799;
var statearr_51804_55084 = state_51799__$1;
(statearr_51804_55084[(2)] = null);

(statearr_51804_55084[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51800 === (24))){
var inst_51785 = (state_51799[(8)]);
var state_51799__$1 = state_51799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51799__$1,(27),inst_51785);
} else {
if((state_val_51800 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_51799,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_51799__$1 = state_51799;
if(cljs.core.truth_(batch_QMARK_)){
var statearr_51805_55087 = state_51799__$1;
(statearr_51805_55087[(1)] = (5));

} else {
var statearr_51806_55088 = state_51799__$1;
(statearr_51806_55088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51800 === (15))){
var inst_51731 = (state_51799[(9)]);
var state_51799__$1 = state_51799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51799__$1,(18),inst_51731);
} else {
if((state_val_51800 === (21))){
var inst_51765 = (state_51799[(7)]);
var state_51799__$1 = state_51799;
var statearr_51807_55090 = state_51799__$1;
(statearr_51807_55090[(2)] = inst_51765);

(statearr_51807_55090[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51800 === (13))){
var inst_51783 = (state_51799[(2)]);
var state_51799__$1 = state_51799;
var statearr_51808_55091 = state_51799__$1;
(statearr_51808_55091[(2)] = inst_51783);

(statearr_51808_55091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51800 === (22))){
var inst_51760 = (state_51799[(10)]);
var inst_51773 = (state_51799[(2)]);
var inst_51774 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_51775 = cljs.core.count(inst_51773);
var inst_51776 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_51775];
var inst_51777 = cljs.core.PersistentHashMap.fromArrays(inst_51774,inst_51776);
var inst_51778 = com.wsscode.pathom.trace.trace(env,inst_51777);
var inst_51779 = cljs.core.zipmap(inst_51760,inst_51773);
var inst_51780 = com.wsscode.pathom.connect.cache_batch(env,resolver_sym,inst_51779);
var inst_51781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51779,e);
var state_51799__$1 = (function (){var statearr_51809 = state_51799;
(statearr_51809[(11)] = inst_51780);

(statearr_51809[(12)] = inst_51778);

return statearr_51809;
})();
var statearr_51810_55096 = state_51799__$1;
(statearr_51810_55096[(2)] = inst_51781);

(statearr_51810_55096[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51800 === (6))){
var state_51799__$1 = state_51799;
var statearr_51811_55097 = state_51799__$1;
(statearr_51811_55097[(2)] = batch_QMARK_);

(statearr_51811_55097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51800 === (25))){
var inst_51785 = (state_51799[(8)]);
var state_51799__$1 = state_51799;
var statearr_51812_55098 = state_51799__$1;
(statearr_51812_55098[(2)] = inst_51785);

(statearr_51812_55098[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51800 === (17))){
var inst_51726 = (state_51799[(13)]);
var inst_51716 = (state_51799[(14)]);
var inst_51739 = (state_51799[(2)]);
var inst_51740 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_51741 = cljs.core.count(inst_51739);
var inst_51742 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_51741];
var inst_51743 = cljs.core.PersistentHashMap.fromArrays(inst_51740,inst_51742);
var inst_51744 = com.wsscode.pathom.trace.trace(env,inst_51743);
var inst_51745 = cljs.core.zipmap(inst_51726,inst_51739);
var inst_51746 = com.wsscode.pathom.connect.cache_batch(env,resolver_sym,inst_51745);
var inst_51747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51745,e);
var inst_51748 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_51749 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_51716,inst_51748);
var state_51799__$1 = (function (){var statearr_51813 = state_51799;
(statearr_51813[(15)] = inst_51744);

(statearr_51813[(16)] = inst_51746);

(statearr_51813[(17)] = inst_51749);

return statearr_51813;
})();
var statearr_51814_55103 = state_51799__$1;
(statearr_51814_55103[(2)] = inst_51747);

(statearr_51814_55103[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51800 === (3))){
var inst_51704 = (state_51799[(2)]);
var state_51799__$1 = state_51799;
var statearr_51815_55104 = state_51799__$1;
(statearr_51815_55104[(2)] = inst_51704);


cljs.core.async.impl.ioc_helpers.process_exception(state_51799__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51800 === (12))){
var inst_51751 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_51752 = com.wsscode.pathom.trace.trace(env,inst_51751);
var inst_51753 = (function (){var _ = inst_51752;
return ((function (_,inst_51751,inst_51752,state_val_51800,c__39084__auto__,params){
return (function (p1__51703_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__51703_SHARP_,input);
});
;})(_,inst_51751,inst_51752,state_val_51800,c__39084__auto__,params))
})();
var inst_51754 = (function (){var _ = inst_51752;
return ((function (_,inst_51751,inst_51752,inst_51753,state_val_51800,c__39084__auto__,params){
return (function (p1__51702_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__51702_SHARP_,input);
});
;})(_,inst_51751,inst_51752,inst_51753,state_val_51800,c__39084__auto__,params))
})();
var inst_51755 = com.wsscode.pathom.connect.map_async_serial(inst_51754,processing_sequence);
var state_51799__$1 = (function (){var statearr_51816 = state_51799;
(statearr_51816[(18)] = inst_51753);

return statearr_51816;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51799__$1,(19),inst_51755);
} else {
if((state_val_51800 === (2))){
var inst_51797 = (state_51799[(2)]);
var state_51799__$1 = state_51799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51799__$1,inst_51797);
} else {
if((state_val_51800 === (23))){
var inst_51769 = (state_51799[(2)]);
var inst_51770 = com.wsscode.common.async_cljs.throw_err(inst_51769);
var state_51799__$1 = state_51799;
var statearr_51817_55109 = state_51799__$1;
(statearr_51817_55109[(2)] = inst_51770);

(statearr_51817_55109[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51800 === (19))){
var inst_51753 = (state_51799[(18)]);
var inst_51760 = (state_51799[(10)]);
var inst_51765 = (state_51799[(7)]);
var inst_51757 = (state_51799[(2)]);
var inst_51758 = com.wsscode.common.async_cljs.throw_err(inst_51757);
var inst_51759 = cljs.core.filterv(inst_51753,inst_51758);
var inst_51760__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_51759);
var inst_51761 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_51762 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_51760__$1];
var inst_51763 = cljs.core.PersistentHashMap.fromArrays(inst_51761,inst_51762);
var inst_51764 = com.wsscode.pathom.trace.trace(env,inst_51763);
var inst_51765__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_51760__$1);
var inst_51766 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51765__$1);
var state_51799__$1 = (function (){var statearr_51818 = state_51799;
(statearr_51818[(19)] = inst_51764);

(statearr_51818[(10)] = inst_51760__$1);

(statearr_51818[(7)] = inst_51765__$1);

return statearr_51818;
})();
if(inst_51766){
var statearr_51819_55110 = state_51799__$1;
(statearr_51819_55110[(1)] = (20));

} else {
var statearr_51820_55111 = state_51799__$1;
(statearr_51820_55111[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51800 === (11))){
var inst_51716 = (state_51799[(14)]);
var inst_51715 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_51716__$1 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_51715);
var inst_51717 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_51718 = com.wsscode.pathom.trace.trace(env,inst_51717);
var inst_51719 = (function (){var trace_id__21490__auto__ = inst_51716__$1;
var _ = inst_51718;
return ((function (trace_id__21490__auto__,_,inst_51716,inst_51715,inst_51716__$1,inst_51717,inst_51718,state_val_51800,c__39084__auto__,params){
return (function (p1__51703_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__51703_SHARP_,input);
});
;})(trace_id__21490__auto__,_,inst_51716,inst_51715,inst_51716__$1,inst_51717,inst_51718,state_val_51800,c__39084__auto__,params))
})();
var inst_51720 = (function (){var trace_id__21490__auto__ = inst_51716__$1;
var _ = inst_51718;
return ((function (trace_id__21490__auto__,_,inst_51716,inst_51715,inst_51716__$1,inst_51717,inst_51718,inst_51719,state_val_51800,c__39084__auto__,params){
return (function (p1__51702_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__51702_SHARP_,input);
});
;})(trace_id__21490__auto__,_,inst_51716,inst_51715,inst_51716__$1,inst_51717,inst_51718,inst_51719,state_val_51800,c__39084__auto__,params))
})();
var inst_51721 = com.wsscode.pathom.connect.map_async_serial(inst_51720,processing_sequence);
var state_51799__$1 = (function (){var statearr_51821 = state_51799;
(statearr_51821[(20)] = inst_51719);

(statearr_51821[(14)] = inst_51716__$1);

return statearr_51821;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51799__$1,(14),inst_51721);
} else {
if((state_val_51800 === (9))){
var inst_51785 = (state_51799[(8)]);
var inst_51785__$1 = com.wsscode.pathom.connect.call_resolver(env,e);
var inst_51786 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51785__$1);
var state_51799__$1 = (function (){var statearr_51822 = state_51799;
(statearr_51822[(8)] = inst_51785__$1);

return statearr_51822;
})();
if(inst_51786){
var statearr_51823_55112 = state_51799__$1;
(statearr_51823_55112[(1)] = (24));

} else {
var statearr_51824_55113 = state_51799__$1;
(statearr_51824_55113[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51800 === (5))){
var state_51799__$1 = state_51799;
var statearr_51825_55114 = state_51799__$1;
(statearr_51825_55114[(2)] = processing_sequence);

(statearr_51825_55114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51800 === (14))){
var inst_51719 = (state_51799[(20)]);
var inst_51731 = (state_51799[(9)]);
var inst_51726 = (state_51799[(13)]);
var inst_51723 = (state_51799[(2)]);
var inst_51724 = com.wsscode.common.async_cljs.throw_err(inst_51723);
var inst_51725 = cljs.core.filterv(inst_51719,inst_51724);
var inst_51726__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_51725);
var inst_51727 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_51728 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_51726__$1];
var inst_51729 = cljs.core.PersistentHashMap.fromArrays(inst_51727,inst_51728);
var inst_51730 = com.wsscode.pathom.trace.trace(env,inst_51729);
var inst_51731__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_51726__$1);
var inst_51732 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51731__$1);
var state_51799__$1 = (function (){var statearr_51826 = state_51799;
(statearr_51826[(9)] = inst_51731__$1);

(statearr_51826[(13)] = inst_51726__$1);

(statearr_51826[(21)] = inst_51730);

return statearr_51826;
})();
if(inst_51732){
var statearr_51827_55115 = state_51799__$1;
(statearr_51827_55115[(1)] = (15));

} else {
var statearr_51828_55116 = state_51799__$1;
(statearr_51828_55116[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51800 === (26))){
var inst_51793 = (state_51799[(2)]);
var state_51799__$1 = state_51799;
var statearr_51829_55117 = state_51799__$1;
(statearr_51829_55117[(2)] = inst_51793);

(statearr_51829_55117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51800 === (16))){
var inst_51731 = (state_51799[(9)]);
var state_51799__$1 = state_51799;
var statearr_51830_55118 = state_51799__$1;
(statearr_51830_55118[(2)] = inst_51731);

(statearr_51830_55118[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51800 === (10))){
var inst_51795 = (state_51799[(2)]);
var state_51799__$1 = state_51799;
var statearr_51831_55119 = state_51799__$1;
(statearr_51831_55119[(2)] = inst_51795);


cljs.core.async.impl.ioc_helpers.process_exception(state_51799__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51800 === (18))){
var inst_51735 = (state_51799[(2)]);
var inst_51736 = com.wsscode.common.async_cljs.throw_err(inst_51735);
var state_51799__$1 = state_51799;
var statearr_51832_55120 = state_51799__$1;
(statearr_51832_55120[(2)] = inst_51736);

(statearr_51832_55120[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51800 === (8))){
var inst_51713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_51799__$1 = state_51799;
if(cljs.core.truth_(inst_51713)){
var statearr_51833_55121 = state_51799__$1;
(statearr_51833_55121[(1)] = (11));

} else {
var statearr_51834_55122 = state_51799__$1;
(statearr_51834_55122[(1)] = (12));

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
});})(c__39084__auto__,params))
;
return ((function (switch__38786__auto__,c__39084__auto__,params){
return (function() {
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38787__auto____0 = (function (){
var statearr_51835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51835[(0)] = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38787__auto__);

(statearr_51835[(1)] = (1));

return statearr_51835;
});
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38787__auto____1 = (function (state_51799){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_51799);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e51836){if((e51836 instanceof Object)){
var ex__38790__auto__ = e51836;
var statearr_51837_55123 = state_51799;
(statearr_51837_55123[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51836;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55124 = state_51799;
state_51799 = G__55124;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38787__auto__ = function(state_51799){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38787__auto____1.call(this,state_51799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38787__auto____0;
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38787__auto____1;
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,params))
})();
var state__39086__auto__ = (function (){var statearr_51838 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_51838[(6)] = c__39084__auto__);

return statearr_51838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,params))
);

return c__39084__auto__;
});})(params))
);
});
/**
 * Like reader2, but supports async values on resolver return.
 */
com.wsscode.pathom.connect.async_reader2 = (function com$wsscode$pathom$connect$async_reader2(p__51841){
var map__51842 = p__51841;
var map__51842__$1 = (((((!((map__51842 == null))))?(((((map__51842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51842):map__51842);
var env = map__51842__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51842__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51842__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51842__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var temp__5718__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__51844 = temp__5718__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51844,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51844,(1),null);
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,vec__51844,plan,out,temp__5718__auto__,map__51842,map__51842__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,vec__51844,plan,out,temp__5718__auto__,map__51842,map__51842__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (state_52056){
var state_val_52057 = (state_52056[(1)]);
if((state_val_52057 === (7))){
var inst_51884 = (state_52056[(7)]);
var inst_51880 = (state_52056[(8)]);
var inst_51872 = (state_52056[(9)]);
var inst_51879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51872,(0),null);
var inst_51880__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51872,(1),null);
var inst_51881 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51882 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),inst_51880__$1];
var inst_51883 = (new cljs.core.PersistentVector(null,2,(5),inst_51881,inst_51882,null));
var inst_51884__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_51883);
var inst_51886 = (inst_51884__$1 == null);
var inst_51887 = cljs.core.not(inst_51886);
var state_52056__$1 = (function (){var statearr_52058 = state_52056;
(statearr_52058[(7)] = inst_51884__$1);

(statearr_52058[(8)] = inst_51880__$1);

(statearr_52058[(10)] = inst_51879);

return statearr_52058;
})();
if(inst_51887){
var statearr_52059_55125 = state_52056__$1;
(statearr_52059_55125[(1)] = (10));

} else {
var statearr_52060_55126 = state_52056__$1;
(statearr_52060_55126[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (59))){
var inst_52022 = (state_52056[(11)]);
var inst_52027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52022,(0),null);
var inst_52028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52022,(1),null);
var inst_52029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52022,(2),null);
var inst_51864 = inst_52027;
var inst_51865 = inst_52028;
var inst_51866 = inst_52029;
var state_52056__$1 = (function (){var statearr_52061 = state_52056;
(statearr_52061[(12)] = inst_51865);

(statearr_52061[(13)] = inst_51866);

(statearr_52061[(14)] = inst_51864);

return statearr_52061;
})();
var statearr_52062_55127 = state_52056__$1;
(statearr_52062_55127[(2)] = null);

(statearr_52062_55127[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (20))){
var inst_51912 = (state_52056[(15)]);
var inst_51910 = (state_52056[(16)]);
var inst_51927 = (state_52056[(17)]);
var inst_51927__$1 = com.wsscode.pathom.connect.call_resolver(inst_51910,inst_51912);
var inst_51928 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51927__$1);
var state_52056__$1 = (function (){var statearr_52063 = state_52056;
(statearr_52063[(17)] = inst_51927__$1);

return statearr_52063;
})();
if(inst_51928){
var statearr_52064_55128 = state_52056__$1;
(statearr_52064_55128[(1)] = (26));

} else {
var statearr_52065_55129 = state_52056__$1;
(statearr_52065_55129[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (58))){
var inst_52045 = (state_52056[(2)]);
var state_52056__$1 = state_52056;
var statearr_52066_55130 = state_52056__$1;
(statearr_52066_55130[(2)] = inst_52045);

(statearr_52066_55130[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (60))){
var inst_51852 = (state_52056[(18)]);
var inst_51942 = (state_52056[(19)]);
var inst_51880 = (state_52056[(8)]);
var inst_51910 = (state_52056[(16)]);
var inst_52032 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_52033 = [new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),inst_51852,inst_51880,inst_51942];
var inst_52034 = cljs.core.PersistentHashMap.fromArrays(inst_52032,inst_52033);
var inst_52035 = com.wsscode.pathom.trace.trace(inst_51910,inst_52034);
var inst_52036 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_52037 = [inst_51942];
var inst_52038 = cljs.core.PersistentHashMap.fromArrays(inst_52036,inst_52037);
var inst_52039 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_52038);
var inst_52040 = (function(){throw inst_52039})();
var state_52056__$1 = (function (){var statearr_52067 = state_52056;
(statearr_52067[(20)] = inst_52035);

return statearr_52067;
})();
var statearr_52068_55134 = state_52056__$1;
(statearr_52068_55134[(2)] = inst_52040);

(statearr_52068_55134[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (27))){
var inst_51927 = (state_52056[(17)]);
var state_52056__$1 = state_52056;
var statearr_52069_55135 = state_52056__$1;
(statearr_52069_55135[(2)] = inst_51927);

(statearr_52069_55135[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (1))){
var state_52056__$1 = state_52056;
var statearr_52070_55136 = state_52056__$1;
(statearr_52070_55136[(2)] = null);

(statearr_52070_55136[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (24))){
var inst_51925 = (state_52056[(2)]);
var state_52056__$1 = state_52056;
var statearr_52072_55137 = state_52056__$1;
(statearr_52072_55137[(2)] = inst_51925);

(statearr_52072_55137[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (55))){
var inst_52007 = (state_52056[(2)]);
var inst_52008 = com.wsscode.common.async_cljs.throw_err(inst_52007);
var state_52056__$1 = state_52056;
var statearr_52073_55139 = state_52056__$1;
(statearr_52073_55139[(2)] = inst_52008);

(statearr_52073_55139[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (39))){
var inst_51873 = (state_52056[(21)]);
var inst_51865 = (state_52056[(12)]);
var inst_51957 = (state_52056[(22)]);
var inst_51866 = (state_52056[(13)]);
var inst_51964 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_51866,inst_51957);
var tmp52071 = inst_51865;
var inst_51864 = inst_51873;
var inst_51865__$1 = tmp52071;
var inst_51866__$1 = inst_51964;
var state_52056__$1 = (function (){var statearr_52074 = state_52056;
(statearr_52074[(12)] = inst_51865__$1);

(statearr_52074[(13)] = inst_51866__$1);

(statearr_52074[(14)] = inst_51864);

return statearr_52074;
})();
var statearr_52075_55140 = state_52056__$1;
(statearr_52075_55140[(2)] = null);

(statearr_52075_55140[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (46))){
var inst_51983 = (state_52056[(23)]);
var inst_51988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51983,(0),null);
var inst_51989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51983,(1),null);
var inst_51990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51983,(2),null);
var inst_51864 = inst_51988;
var inst_51865 = inst_51989;
var inst_51866 = inst_51990;
var state_52056__$1 = (function (){var statearr_52076 = state_52056;
(statearr_52076[(12)] = inst_51865);

(statearr_52076[(13)] = inst_51866);

(statearr_52076[(14)] = inst_51864);

return statearr_52076;
})();
var statearr_52077_55150 = state_52056__$1;
(statearr_52077_55150[(2)] = null);

(statearr_52077_55150[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_52056,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_51851 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_51852 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_51851);
var inst_51860 = cljs.core.seq(plan);
var inst_51861 = cljs.core.first(inst_51860);
var inst_51862 = cljs.core.next(inst_51860);
var inst_51863 = cljs.core.PersistentHashMap.EMPTY;
var inst_51864 = plan;
var inst_51865 = inst_51863;
var inst_51866 = out;
var state_52056__$1 = (function (){var statearr_52078 = state_52056;
(statearr_52078[(18)] = inst_51852);

(statearr_52078[(24)] = inst_51862);

(statearr_52078[(12)] = inst_51865);

(statearr_52078[(25)] = inst_51861);

(statearr_52078[(13)] = inst_51866);

(statearr_52078[(14)] = inst_51864);

return statearr_52078;
})();
var statearr_52079_55154 = state_52056__$1;
(statearr_52079_55154[(2)] = null);

(statearr_52079_55154[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (54))){
var inst_52011 = (state_52056[(2)]);
var state_52056__$1 = state_52056;
var statearr_52080_55155 = state_52056__$1;
(statearr_52080_55155[(2)] = inst_52011);

(statearr_52080_55155[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (15))){
var inst_51897 = (state_52056[(2)]);
var state_52056__$1 = state_52056;
var statearr_52081_55159 = state_52056__$1;
(statearr_52081_55159[(2)] = inst_51897);

(statearr_52081_55159[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (48))){
var inst_52013 = (state_52056[(2)]);
var state_52056__$1 = state_52056;
var statearr_52082_55160 = state_52056__$1;
(statearr_52082_55160[(2)] = inst_52013);

(statearr_52082_55160[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (50))){
var state_52056__$1 = state_52056;
var statearr_52083_55161 = state_52056__$1;
(statearr_52083_55161[(2)] = null);

(statearr_52083_55161[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (21))){
var inst_51937 = (state_52056[(26)]);
var inst_51937__$1 = (state_52056[(2)]);
var state_52056__$1 = (function (){var statearr_52084 = state_52056;
(statearr_52084[(26)] = inst_51937__$1);

return statearr_52084;
})();
if(cljs.core.truth_(inst_51937__$1)){
var statearr_52085_55162 = state_52056__$1;
(statearr_52085_55162[(1)] = (30));

} else {
var statearr_52086_55163 = state_52056__$1;
(statearr_52086_55163[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (31))){
var inst_51940 = cljs.core.PersistentHashMap.EMPTY;
var state_52056__$1 = state_52056;
var statearr_52087_55164 = state_52056__$1;
(statearr_52087_55164[(2)] = inst_51940);

(statearr_52087_55164[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (32))){
var inst_51852 = (state_52056[(18)]);
var inst_51862 = (state_52056[(24)]);
var inst_51912 = (state_52056[(15)]);
var inst_51942 = (state_52056[(19)]);
var inst_51906 = (state_52056[(27)]);
var inst_51873 = (state_52056[(21)]);
var inst_51865 = (state_52056[(12)]);
var inst_51880 = (state_52056[(8)]);
var inst_51908 = (state_52056[(28)]);
var inst_51915 = (state_52056[(29)]);
var inst_51879 = (state_52056[(10)]);
var inst_51872 = (state_52056[(9)]);
var inst_51861 = (state_52056[(25)]);
var inst_51866 = (state_52056[(13)]);
var inst_51910 = (state_52056[(16)]);
var inst_51864 = (state_52056[(14)]);
var inst_51907 = (state_52056[(30)]);
var inst_51909 = (state_52056[(31)]);
var inst_51905 = (state_52056[(32)]);
var inst_51942__$1 = (state_52056[(2)]);
var inst_51943 = (function (){var input = inst_51908;
var step = inst_51872;
var G__51856 = inst_51864;
var key_SINGLEQUOTE_ = inst_51879;
var vec__51868 = inst_51864;
var response = inst_51942__$1;
var seq__51869 = inst_51873;
var vec__51875 = inst_51872;
var first__51859 = inst_51861;
var cache_QMARK_ = inst_51906;
var out_left = inst_51866;
var key = inst_51852;
var failed_resolvers = inst_51865;
var first__51870 = inst_51872;
var batch_QMARK_ = inst_51907;
var map__51878 = inst_51905;
var output = inst_51909;
var env__$1 = inst_51910;
var e = inst_51912;
var vec__51857 = plan;
var resolver_sym = inst_51880;
var trace_data = inst_51915;
var resolver = inst_51905;
var tail = inst_51873;
var seq__51858 = inst_51862;
return ((function (input,step,G__51856,key_SINGLEQUOTE_,vec__51868,response,seq__51869,vec__51875,first__51859,cache_QMARK_,out_left,key,failed_resolvers,first__51870,batch_QMARK_,map__51878,output,env__$1,e,vec__51857,resolver_sym,trace_data,resolver,tail,seq__51858,inst_51852,inst_51862,inst_51912,inst_51942,inst_51906,inst_51873,inst_51865,inst_51880,inst_51908,inst_51915,inst_51879,inst_51872,inst_51861,inst_51866,inst_51910,inst_51864,inst_51907,inst_51909,inst_51905,inst_51942__$1,state_val_52057,c__39084__auto__,vec__51844,plan,out,temp__5718__auto__,map__51842,map__51842__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (error){
var failed_resolvers__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers,resolver_sym,error);
com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$1,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (failed_resolvers__$1,input,step,G__51856,key_SINGLEQUOTE_,vec__51868,response,seq__51869,vec__51875,first__51859,cache_QMARK_,out_left,key,failed_resolvers,first__51870,batch_QMARK_,map__51878,output,env__$1,e,vec__51857,resolver_sym,trace_data,resolver,tail,seq__51858,inst_51852,inst_51862,inst_51912,inst_51942,inst_51906,inst_51873,inst_51865,inst_51880,inst_51908,inst_51915,inst_51879,inst_51872,inst_51861,inst_51866,inst_51910,inst_51864,inst_51907,inst_51909,inst_51905,inst_51942__$1,state_val_52057,c__39084__auto__,vec__51844,plan,out,temp__5718__auto__,map__51842,map__51842__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__51839_SHARP_){
var x__4222__auto__ = ((function (){var or__4131__auto__ = p1__51839_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() * (2));
var y__4223__auto__ = max_resolver_weight;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});})(failed_resolvers__$1,input,step,G__51856,key_SINGLEQUOTE_,vec__51868,response,seq__51869,vec__51875,first__51859,cache_QMARK_,out_left,key,failed_resolvers,first__51870,batch_QMARK_,map__51878,output,env__$1,e,vec__51857,resolver_sym,trace_data,resolver,tail,seq__51858,inst_51852,inst_51862,inst_51912,inst_51942,inst_51906,inst_51873,inst_51865,inst_51880,inst_51908,inst_51915,inst_51879,inst_51872,inst_51861,inst_51866,inst_51910,inst_51864,inst_51907,inst_51909,inst_51905,inst_51942__$1,state_val_52057,c__39084__auto__,vec__51844,plan,out,temp__5718__auto__,map__51842,map__51842__$1,env,indexes,max_resolver_weight,processing_sequence))
], 0));

var temp__5718__auto____$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$1,failed_resolvers__$1);
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__52088 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52088,(0),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52088,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan__$1,failed_resolvers__$1,out_SINGLEQUOTE_], null);
} else {
return null;
}
});
;})(input,step,G__51856,key_SINGLEQUOTE_,vec__51868,response,seq__51869,vec__51875,first__51859,cache_QMARK_,out_left,key,failed_resolvers,first__51870,batch_QMARK_,map__51878,output,env__$1,e,vec__51857,resolver_sym,trace_data,resolver,tail,seq__51858,inst_51852,inst_51862,inst_51912,inst_51942,inst_51906,inst_51873,inst_51865,inst_51880,inst_51908,inst_51915,inst_51879,inst_51872,inst_51861,inst_51866,inst_51910,inst_51864,inst_51907,inst_51909,inst_51905,inst_51942__$1,state_val_52057,c__39084__auto__,vec__51844,plan,out,temp__5718__auto__,map__51842,map__51842__$1,env,indexes,max_resolver_weight,processing_sequence))
})();
var inst_51944 = cljs.core.map_QMARK_(inst_51942__$1);
var state_52056__$1 = (function (){var statearr_52091 = state_52056;
(statearr_52091[(19)] = inst_51942__$1);

(statearr_52091[(33)] = inst_51943);

return statearr_52091;
})();
if(inst_51944){
var statearr_52092_55165 = state_52056__$1;
(statearr_52092_55165[(1)] = (33));

} else {
var statearr_52093_55166 = state_52056__$1;
(statearr_52093_55166[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (40))){
var inst_51946 = (state_52056[(34)]);
var inst_51947 = (state_52056[(35)]);
var inst_51967 = (state_52056[(36)]);
var inst_51967__$1 = com.wsscode.pathom.connect.process_simple_reader_response(inst_51946,inst_51947);
var inst_51968 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51967__$1);
var state_52056__$1 = (function (){var statearr_52094 = state_52056;
(statearr_52094[(36)] = inst_51967__$1);

return statearr_52094;
})();
if(inst_51968){
var statearr_52095_55167 = state_52056__$1;
(statearr_52095_55167[(1)] = (42));

} else {
var statearr_52096_55168 = state_52056__$1;
(statearr_52096_55168[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (56))){
var inst_52022 = (state_52056[(11)]);
var inst_51942 = (state_52056[(19)]);
var inst_51943 = (state_52056[(33)]);
var inst_52018 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_52019 = [inst_51942];
var inst_52020 = cljs.core.PersistentHashMap.fromArrays(inst_52018,inst_52019);
var inst_52021 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_52020);
var inst_52022__$1 = (inst_51943.cljs$core$IFn$_invoke$arity$1 ? inst_51943.cljs$core$IFn$_invoke$arity$1(inst_52021) : inst_51943.call(null,inst_52021));
var state_52056__$1 = (function (){var statearr_52097 = state_52056;
(statearr_52097[(11)] = inst_52022__$1);

return statearr_52097;
})();
if(cljs.core.truth_(inst_52022__$1)){
var statearr_52098_55169 = state_52056__$1;
(statearr_52098_55169[(1)] = (59));

} else {
var statearr_52099_55170 = state_52056__$1;
(statearr_52099_55170[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (33))){
var inst_51852 = (state_52056[(18)]);
var inst_51862 = (state_52056[(24)]);
var inst_51912 = (state_52056[(15)]);
var inst_51942 = (state_52056[(19)]);
var inst_51906 = (state_52056[(27)]);
var inst_51873 = (state_52056[(21)]);
var inst_51946 = (state_52056[(34)]);
var inst_51865 = (state_52056[(12)]);
var inst_51880 = (state_52056[(8)]);
var inst_51908 = (state_52056[(28)]);
var inst_51915 = (state_52056[(29)]);
var inst_51879 = (state_52056[(10)]);
var inst_51947 = (state_52056[(35)]);
var inst_51872 = (state_52056[(9)]);
var inst_51943 = (state_52056[(33)]);
var inst_51861 = (state_52056[(25)]);
var inst_51866 = (state_52056[(13)]);
var inst_51910 = (state_52056[(16)]);
var inst_51864 = (state_52056[(14)]);
var inst_51907 = (state_52056[(30)]);
var inst_51909 = (state_52056[(31)]);
var inst_51905 = (state_52056[(32)]);
var inst_51946__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_51942,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),inst_51910);
var inst_51947__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_51942,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_51948 = (function (){var input = inst_51908;
var step = inst_51872;
var G__51856 = inst_51864;
var key_SINGLEQUOTE_ = inst_51879;
var vec__51868 = inst_51864;
var response = inst_51947__$1;
var seq__51869 = inst_51873;
var vec__51875 = inst_51872;
var first__51859 = inst_51861;
var cache_QMARK_ = inst_51906;
var out_left = inst_51866;
var key = inst_51852;
var failed_resolvers = inst_51865;
var first__51870 = inst_51872;
var batch_QMARK_ = inst_51907;
var map__51878 = inst_51905;
var output = inst_51909;
var env__$1 = inst_51910;
var e = inst_51912;
var vec__51857 = plan;
var resolver_sym = inst_51880;
var trace_data = inst_51915;
var resolver = inst_51905;
var replan = inst_51943;
var env_SINGLEQUOTE_ = inst_51946__$1;
var tail = inst_51873;
var seq__51858 = inst_51862;
return ((function (input,step,G__51856,key_SINGLEQUOTE_,vec__51868,response,seq__51869,vec__51875,first__51859,cache_QMARK_,out_left,key,failed_resolvers,first__51870,batch_QMARK_,map__51878,output,env__$1,e,vec__51857,resolver_sym,trace_data,resolver,replan,env_SINGLEQUOTE_,tail,seq__51858,inst_51852,inst_51862,inst_51912,inst_51942,inst_51906,inst_51873,inst_51946,inst_51865,inst_51880,inst_51908,inst_51915,inst_51879,inst_51947,inst_51872,inst_51943,inst_51861,inst_51866,inst_51910,inst_51864,inst_51907,inst_51909,inst_51905,inst_51946__$1,inst_51947__$1,state_val_52057,c__39084__auto__,vec__51844,plan,out,temp__5718__auto__,map__51842,map__51842__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__51840_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__51840_SHARP_], 0));
});
;})(input,step,G__51856,key_SINGLEQUOTE_,vec__51868,response,seq__51869,vec__51875,first__51859,cache_QMARK_,out_left,key,failed_resolvers,first__51870,batch_QMARK_,map__51878,output,env__$1,e,vec__51857,resolver_sym,trace_data,resolver,replan,env_SINGLEQUOTE_,tail,seq__51858,inst_51852,inst_51862,inst_51912,inst_51942,inst_51906,inst_51873,inst_51946,inst_51865,inst_51880,inst_51908,inst_51915,inst_51879,inst_51947,inst_51872,inst_51943,inst_51861,inst_51866,inst_51910,inst_51864,inst_51907,inst_51909,inst_51905,inst_51946__$1,inst_51947__$1,state_val_52057,c__39084__auto__,vec__51844,plan,out,temp__5718__auto__,map__51842,map__51842__$1,env,indexes,max_resolver_weight,processing_sequence))
})();
var inst_51949 = com.wsscode.pathom.core.swap_entity_BANG_(inst_51946__$1,inst_51948);
var inst_51951 = cljs.core.contains_QMARK_(inst_51947__$1,inst_51879);
var inst_51952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51947__$1,inst_51879);
var inst_51953 = (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(inst_51952) : com.wsscode.pathom.core.break_values.call(null,inst_51952));
var inst_51954 = cljs.core.not(inst_51953);
var inst_51955 = ((inst_51951) && (inst_51954));
var state_52056__$1 = (function (){var statearr_52100 = state_52056;
(statearr_52100[(37)] = inst_51949);

(statearr_52100[(34)] = inst_51946__$1);

(statearr_52100[(35)] = inst_51947__$1);

return statearr_52100;
})();
if(cljs.core.truth_(inst_51955)){
var statearr_52101_55187 = state_52056__$1;
(statearr_52101_55187[(1)] = (36));

} else {
var statearr_52102_55188 = state_52056__$1;
(statearr_52102_55188[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (13))){
var state_52056__$1 = state_52056;
var statearr_52103_55189 = state_52056__$1;
(statearr_52103_55189[(2)] = true);

(statearr_52103_55189[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (22))){
var inst_51917 = (state_52056[(38)]);
var state_52056__$1 = state_52056;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52056__$1,(25),inst_51917);
} else {
if((state_val_52057 === (36))){
var inst_51852 = (state_52056[(18)]);
var inst_51873 = (state_52056[(21)]);
var inst_51946 = (state_52056[(34)]);
var inst_51880 = (state_52056[(8)]);
var inst_51909 = (state_52056[(31)]);
var inst_51957 = com.wsscode.pathom.connect.output__GT_provides(inst_51909);
var inst_51958 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_51959 = [new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),inst_51852,inst_51880];
var inst_51960 = cljs.core.PersistentHashMap.fromArrays(inst_51958,inst_51959);
var inst_51961 = com.wsscode.pathom.trace.trace(inst_51946,inst_51960);
var inst_51962 = cljs.core.seq(inst_51873);
var state_52056__$1 = (function (){var statearr_52104 = state_52056;
(statearr_52104[(39)] = inst_51961);

(statearr_52104[(22)] = inst_51957);

return statearr_52104;
})();
if(inst_51962){
var statearr_52105_55192 = state_52056__$1;
(statearr_52105_55192[(1)] = (39));

} else {
var statearr_52106_55195 = state_52056__$1;
(statearr_52106_55195[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (41))){
var inst_51977 = (state_52056[(2)]);
var state_52056__$1 = state_52056;
var statearr_52107_55199 = state_52056__$1;
(statearr_52107_55199[(2)] = inst_51977);

(statearr_52107_55199[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (43))){
var inst_51967 = (state_52056[(36)]);
var state_52056__$1 = state_52056;
var statearr_52108_55200 = state_52056__$1;
(statearr_52108_55200[(2)] = inst_51967);

(statearr_52108_55200[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (61))){
var inst_52042 = (state_52056[(2)]);
var state_52056__$1 = state_52056;
var statearr_52109_55202 = state_52056__$1;
(statearr_52109_55202[(2)] = inst_52042);

(statearr_52109_55202[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (29))){
var inst_51931 = (state_52056[(2)]);
var inst_51932 = com.wsscode.common.async_cljs.throw_err(inst_51931);
var state_52056__$1 = state_52056;
var statearr_52110_55203 = state_52056__$1;
(statearr_52110_55203[(2)] = inst_51932);

(statearr_52110_55203[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (44))){
var inst_51975 = (state_52056[(2)]);
var state_52056__$1 = state_52056;
var statearr_52111_55204 = state_52056__$1;
(statearr_52111_55204[(2)] = inst_51975);

(statearr_52111_55204[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (6))){
var inst_52052 = (state_52056[(2)]);
var state_52056__$1 = state_52056;
var statearr_52112_55208 = state_52056__$1;
(statearr_52112_55208[(2)] = inst_52052);


cljs.core.async.impl.ioc_helpers.process_exception(state_52056__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (28))){
var inst_51935 = (state_52056[(2)]);
var state_52056__$1 = state_52056;
var statearr_52113_55210 = state_52056__$1;
(statearr_52113_55210[(2)] = inst_51935);

(statearr_52113_55210[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (51))){
var inst_51946 = (state_52056[(34)]);
var inst_51947 = (state_52056[(35)]);
var inst_52003 = (state_52056[(40)]);
var inst_52002 = (state_52056[(2)]);
var inst_52003__$1 = com.wsscode.pathom.connect.process_simple_reader_response(inst_51946,inst_51947);
var inst_52004 = com.wsscode.common.async_cljs.chan_QMARK_(inst_52003__$1);
var state_52056__$1 = (function (){var statearr_52114 = state_52056;
(statearr_52114[(41)] = inst_52002);

(statearr_52114[(40)] = inst_52003__$1);

return statearr_52114;
})();
if(inst_52004){
var statearr_52115_55215 = state_52056__$1;
(statearr_52115_55215[(1)] = (52));

} else {
var statearr_52116_55216 = state_52056__$1;
(statearr_52116_55216[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (25))){
var inst_51921 = (state_52056[(2)]);
var inst_51922 = com.wsscode.common.async_cljs.throw_err(inst_51921);
var state_52056__$1 = state_52056;
var statearr_52117_55217 = state_52056__$1;
(statearr_52117_55217[(2)] = inst_51922);

(statearr_52117_55217[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (34))){
var state_52056__$1 = state_52056;
var statearr_52118_55218 = state_52056__$1;
(statearr_52118_55218[(1)] = (56));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (17))){
var inst_51884 = (state_52056[(7)]);
var state_52056__$1 = state_52056;
var statearr_52120_55219 = state_52056__$1;
(statearr_52120_55219[(2)] = inst_51884);

(statearr_52120_55219[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (3))){
var inst_51847 = (state_52056[(2)]);
var state_52056__$1 = state_52056;
var statearr_52121_55225 = state_52056__$1;
(statearr_52121_55225[(2)] = inst_51847);


cljs.core.async.impl.ioc_helpers.process_exception(state_52056__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (12))){
var inst_51900 = (state_52056[(2)]);
var state_52056__$1 = state_52056;
if(cljs.core.truth_(inst_51900)){
var statearr_52122_55229 = state_52056__$1;
(statearr_52122_55229[(1)] = (16));

} else {
var statearr_52123_55230 = state_52056__$1;
(statearr_52123_55230[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (2))){
var inst_52054 = (state_52056[(2)]);
var state_52056__$1 = state_52056;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52056__$1,inst_52054);
} else {
if((state_val_52057 === (23))){
var inst_51917 = (state_52056[(38)]);
var state_52056__$1 = state_52056;
var statearr_52124_55234 = state_52056__$1;
(statearr_52124_55234[(2)] = inst_51917);

(statearr_52124_55234[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (47))){
var inst_51873 = (state_52056[(21)]);
var inst_51993 = cljs.core.seq(inst_51873);
var state_52056__$1 = state_52056;
if(inst_51993){
var statearr_52125_55239 = state_52056__$1;
(statearr_52125_55239[(1)] = (49));

} else {
var statearr_52126_55243 = state_52056__$1;
(statearr_52126_55243[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (35))){
var inst_52047 = (state_52056[(2)]);
var state_52056__$1 = state_52056;
var statearr_52127_55245 = state_52056__$1;
(statearr_52127_55245[(2)] = inst_52047);

(statearr_52127_55245[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (19))){
var inst_51912 = (state_52056[(15)]);
var inst_51880 = (state_52056[(8)]);
var inst_51908 = (state_52056[(28)]);
var inst_51915 = (state_52056[(29)]);
var inst_51917 = (state_52056[(38)]);
var inst_51910 = (state_52056[(16)]);
var inst_51907 = (state_52056[(30)]);
var inst_51917__$1 = com.wsscode.pathom.connect.async_read_cache_read(inst_51910,inst_51880,inst_51912,inst_51907,processing_sequence,inst_51915,inst_51908);
var inst_51918 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51917__$1);
var state_52056__$1 = (function (){var statearr_52128 = state_52056;
(statearr_52128[(38)] = inst_51917__$1);

return statearr_52128;
})();
if(inst_51918){
var statearr_52129_55249 = state_52056__$1;
(statearr_52129_55249[(1)] = (22));

} else {
var statearr_52130_55250 = state_52056__$1;
(statearr_52130_55250[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (57))){
var state_52056__$1 = state_52056;
var statearr_52131_55251 = state_52056__$1;
(statearr_52131_55251[(2)] = null);

(statearr_52131_55251[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (11))){
var state_52056__$1 = state_52056;
var statearr_52132_55253 = state_52056__$1;
(statearr_52132_55253[(2)] = false);

(statearr_52132_55253[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (9))){
var inst_52050 = (state_52056[(2)]);
var state_52056__$1 = state_52056;
var statearr_52133_55256 = state_52056__$1;
(statearr_52133_55256[(2)] = inst_52050);

(statearr_52133_55256[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (5))){
var inst_51872 = (state_52056[(9)]);
var inst_51864 = (state_52056[(14)]);
var inst_51871 = cljs.core.seq(inst_51864);
var inst_51872__$1 = cljs.core.first(inst_51871);
var inst_51873 = cljs.core.next(inst_51871);
var state_52056__$1 = (function (){var statearr_52134 = state_52056;
(statearr_52134[(21)] = inst_51873);

(statearr_52134[(9)] = inst_51872__$1);

return statearr_52134;
})();
if(cljs.core.truth_(inst_51872__$1)){
var statearr_52135_55259 = state_52056__$1;
(statearr_52135_55259[(1)] = (7));

} else {
var statearr_52136_55264 = state_52056__$1;
(statearr_52136_55264[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (14))){
var state_52056__$1 = state_52056;
var statearr_52137_55268 = state_52056__$1;
(statearr_52137_55268[(2)] = false);

(statearr_52137_55268[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (45))){
var inst_51971 = (state_52056[(2)]);
var inst_51972 = com.wsscode.common.async_cljs.throw_err(inst_51971);
var state_52056__$1 = state_52056;
var statearr_52138_55269 = state_52056__$1;
(statearr_52138_55269[(2)] = inst_51972);

(statearr_52138_55269[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (53))){
var inst_52003 = (state_52056[(40)]);
var state_52056__$1 = state_52056;
var statearr_52139_55271 = state_52056__$1;
(statearr_52139_55271[(2)] = inst_52003);

(statearr_52139_55271[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (26))){
var inst_51927 = (state_52056[(17)]);
var state_52056__$1 = state_52056;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52056__$1,(29),inst_51927);
} else {
if((state_val_52057 === (16))){
var inst_51884 = (state_52056[(7)]);
var inst_51902 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51884);
var state_52056__$1 = state_52056;
var statearr_52140_55275 = state_52056__$1;
(statearr_52140_55275[(2)] = inst_51902);

(statearr_52140_55275[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (38))){
var inst_52015 = (state_52056[(2)]);
var state_52056__$1 = state_52056;
var statearr_52141_55277 = state_52056__$1;
(statearr_52141_55277[(2)] = inst_52015);

(statearr_52141_55277[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (30))){
var inst_51937 = (state_52056[(26)]);
var state_52056__$1 = state_52056;
var statearr_52142_55279 = state_52056__$1;
(statearr_52142_55279[(2)] = inst_51937);

(statearr_52142_55279[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (10))){
var inst_51884 = (state_52056[(7)]);
var inst_51889 = inst_51884.cljs$lang$protocol_mask$partition0$;
var inst_51890 = (inst_51889 & (64));
var inst_51891 = inst_51884.cljs$core$ISeq$;
var inst_51892 = (cljs.core.PROTOCOL_SENTINEL === inst_51891);
var inst_51893 = ((inst_51890) || (inst_51892));
var state_52056__$1 = state_52056;
if(cljs.core.truth_(inst_51893)){
var statearr_52143_55281 = state_52056__$1;
(statearr_52143_55281[(1)] = (13));

} else {
var statearr_52144_55282 = state_52056__$1;
(statearr_52144_55282[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (18))){
var inst_51852 = (state_52056[(18)]);
var inst_51912 = (state_52056[(15)]);
var inst_51906 = (state_52056[(27)]);
var inst_51880 = (state_52056[(8)]);
var inst_51908 = (state_52056[(28)]);
var inst_51910 = (state_52056[(16)]);
var inst_51905 = (state_52056[(32)]);
var inst_51905__$1 = (state_52056[(2)]);
var inst_51906__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_51905__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_51907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51905__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_51908__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51905__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_51909 = com.wsscode.pathom.connect.resolver__GT_output(env,inst_51880);
var inst_51910__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_51905__$1);
var inst_51911 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_51910__$1);
var inst_51912__$1 = cljs.core.select_keys(inst_51911,inst_51908__$1);
var inst_51913 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_51914 = [inst_51852,inst_51880,inst_51912__$1];
var inst_51915 = cljs.core.PersistentHashMap.fromArrays(inst_51913,inst_51914);
var state_52056__$1 = (function (){var statearr_52145 = state_52056;
(statearr_52145[(15)] = inst_51912__$1);

(statearr_52145[(27)] = inst_51906__$1);

(statearr_52145[(28)] = inst_51908__$1);

(statearr_52145[(29)] = inst_51915);

(statearr_52145[(16)] = inst_51910__$1);

(statearr_52145[(30)] = inst_51907);

(statearr_52145[(31)] = inst_51909);

(statearr_52145[(32)] = inst_51905__$1);

return statearr_52145;
})();
if(cljs.core.truth_(inst_51906__$1)){
var statearr_52146_55289 = state_52056__$1;
(statearr_52146_55289[(1)] = (19));

} else {
var statearr_52147_55290 = state_52056__$1;
(statearr_52147_55290[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (52))){
var inst_52003 = (state_52056[(40)]);
var state_52056__$1 = state_52056;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52056__$1,(55),inst_52003);
} else {
if((state_val_52057 === (42))){
var inst_51967 = (state_52056[(36)]);
var state_52056__$1 = state_52056;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52056__$1,(45),inst_51967);
} else {
if((state_val_52057 === (37))){
var inst_51879 = (state_52056[(10)]);
var inst_51947 = (state_52056[(35)]);
var inst_51943 = (state_52056[(33)]);
var inst_51983 = (state_52056[(23)]);
var inst_51979 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_51980 = [inst_51947,inst_51879];
var inst_51981 = cljs.core.PersistentHashMap.fromArrays(inst_51979,inst_51980);
var inst_51982 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_51981);
var inst_51983__$1 = (inst_51943.cljs$core$IFn$_invoke$arity$1 ? inst_51943.cljs$core$IFn$_invoke$arity$1(inst_51982) : inst_51943.call(null,inst_51982));
var state_52056__$1 = (function (){var statearr_52148 = state_52056;
(statearr_52148[(23)] = inst_51983__$1);

return statearr_52148;
})();
if(cljs.core.truth_(inst_51983__$1)){
var statearr_52149_55301 = state_52056__$1;
(statearr_52149_55301[(1)] = (46));

} else {
var statearr_52150_55303 = state_52056__$1;
(statearr_52150_55303[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (8))){
var state_52056__$1 = state_52056;
var statearr_52151_55305 = state_52056__$1;
(statearr_52151_55305[(2)] = null);

(statearr_52151_55305[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52057 === (49))){
var inst_51879 = (state_52056[(10)]);
var inst_51947 = (state_52056[(35)]);
var inst_51995 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_51996 = [inst_51947,inst_51879];
var inst_51997 = cljs.core.PersistentHashMap.fromArrays(inst_51995,inst_51996);
var inst_51998 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_51997);
var inst_51999 = (function(){throw inst_51998})();
var state_52056__$1 = state_52056;
var statearr_52152_55307 = state_52056__$1;
(statearr_52152_55307[(2)] = inst_51999);

(statearr_52152_55307[(1)] = (51));


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
});})(c__39084__auto__,vec__51844,plan,out,temp__5718__auto__,map__51842,map__51842__$1,env,indexes,max_resolver_weight,processing_sequence))
;
return ((function (switch__38786__auto__,c__39084__auto__,vec__51844,plan,out,temp__5718__auto__,map__51842,map__51842__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_reader2_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$connect$async_reader2_$_state_machine__38787__auto____0 = (function (){
var statearr_52153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52153[(0)] = com$wsscode$pathom$connect$async_reader2_$_state_machine__38787__auto__);

(statearr_52153[(1)] = (1));

return statearr_52153;
});
var com$wsscode$pathom$connect$async_reader2_$_state_machine__38787__auto____1 = (function (state_52056){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_52056);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e52154){if((e52154 instanceof Object)){
var ex__38790__auto__ = e52154;
var statearr_52155_55310 = state_52056;
(statearr_52155_55310[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52154;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55312 = state_52056;
state_52056 = G__55312;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader2_$_state_machine__38787__auto__ = function(state_52056){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader2_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader2_$_state_machine__38787__auto____1.call(this,state_52056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader2_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader2_$_state_machine__38787__auto____0;
com$wsscode$pathom$connect$async_reader2_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader2_$_state_machine__38787__auto____1;
return com$wsscode$pathom$connect$async_reader2_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,vec__51844,plan,out,temp__5718__auto__,map__51842,map__51842__$1,env,indexes,max_resolver_weight,processing_sequence))
})();
var state__39086__auto__ = (function (){var statearr_52156 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_52156[(6)] = c__39084__auto__);

return statearr_52156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,vec__51844,plan,out,temp__5718__auto__,map__51842,map__51842__$1,env,indexes,max_resolver_weight,processing_sequence))
);

return c__39084__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.parallel_batch_error = (function com$wsscode$pathom$connect$parallel_batch_error(p__52157,e){
var map__52158 = p__52157;
var map__52158__$1 = (((((!((map__52158 == null))))?(((((map__52158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52158):map__52158);
var env = map__52158__$1;
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52158__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var map__52160 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var map__52160__$1 = (((((!((map__52160 == null))))?(((((map__52160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52160):map__52160);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52160__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var item_count = cljs.core.count(processing_sequence);
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-error","com.wsscode.pathom.connect/batch-result-error",-1587594017),new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),com.wsscode.pathom.core.process_error(env,e)], null));

var output_SINGLEQUOTE_ = com.wsscode.pathom.connect.output__GT_provides(output);
var base_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take_while.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword_QMARK_),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661).cljs$core$IFn$_invoke$arity$1(env));
var seq__52162_55321 = cljs.core.seq(output_SINGLEQUOTE_);
var chunk__52167_55322 = null;
var count__52168_55323 = (0);
var i__52169_55324 = (0);
while(true){
if((i__52169_55324 < count__52168_55323)){
var o_55325 = chunk__52167_55322.cljs$core$IIndexed$_nth$arity$2(null,i__52169_55324);
var seq__52170_55326 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(item_count));
var chunk__52171_55327 = null;
var count__52172_55328 = (0);
var i__52173_55329 = (0);
while(true){
if((i__52173_55329 < count__52172_55328)){
var i_55332 = chunk__52171_55327.cljs$core$IIndexed$_nth$arity$2(null,i__52173_55329);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(base_path,i_55332,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o_55325], 0))),e);


var G__55333 = seq__52170_55326;
var G__55334 = chunk__52171_55327;
var G__55335 = count__52172_55328;
var G__55336 = (i__52173_55329 + (1));
seq__52170_55326 = G__55333;
chunk__52171_55327 = G__55334;
count__52172_55328 = G__55335;
i__52173_55329 = G__55336;
continue;
} else {
var temp__5720__auto___55337 = cljs.core.seq(seq__52170_55326);
if(temp__5720__auto___55337){
var seq__52170_55341__$1 = temp__5720__auto___55337;
if(cljs.core.chunked_seq_QMARK_(seq__52170_55341__$1)){
var c__4550__auto___55342 = cljs.core.chunk_first(seq__52170_55341__$1);
var G__55343 = cljs.core.chunk_rest(seq__52170_55341__$1);
var G__55344 = c__4550__auto___55342;
var G__55345 = cljs.core.count(c__4550__auto___55342);
var G__55346 = (0);
seq__52170_55326 = G__55343;
chunk__52171_55327 = G__55344;
count__52172_55328 = G__55345;
i__52173_55329 = G__55346;
continue;
} else {
var i_55347 = cljs.core.first(seq__52170_55341__$1);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(base_path,i_55347,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o_55325], 0))),e);


var G__55354 = cljs.core.next(seq__52170_55341__$1);
var G__55355 = null;
var G__55356 = (0);
var G__55357 = (0);
seq__52170_55326 = G__55354;
chunk__52171_55327 = G__55355;
count__52172_55328 = G__55356;
i__52173_55329 = G__55357;
continue;
}
} else {
}
}
break;
}

var G__55358 = seq__52162_55321;
var G__55359 = chunk__52167_55322;
var G__55360 = count__52168_55323;
var G__55361 = (i__52169_55324 + (1));
seq__52162_55321 = G__55358;
chunk__52167_55322 = G__55359;
count__52168_55323 = G__55360;
i__52169_55324 = G__55361;
continue;
} else {
var temp__5720__auto___55362 = cljs.core.seq(seq__52162_55321);
if(temp__5720__auto___55362){
var seq__52162_55363__$1 = temp__5720__auto___55362;
if(cljs.core.chunked_seq_QMARK_(seq__52162_55363__$1)){
var c__4550__auto___55364 = cljs.core.chunk_first(seq__52162_55363__$1);
var G__55365 = cljs.core.chunk_rest(seq__52162_55363__$1);
var G__55366 = c__4550__auto___55364;
var G__55367 = cljs.core.count(c__4550__auto___55364);
var G__55368 = (0);
seq__52162_55321 = G__55365;
chunk__52167_55322 = G__55366;
count__52168_55323 = G__55367;
i__52169_55324 = G__55368;
continue;
} else {
var o_55369 = cljs.core.first(seq__52162_55363__$1);
var seq__52163_55370 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(item_count));
var chunk__52164_55371 = null;
var count__52165_55372 = (0);
var i__52166_55373 = (0);
while(true){
if((i__52166_55373 < count__52165_55372)){
var i_55382 = chunk__52164_55371.cljs$core$IIndexed$_nth$arity$2(null,i__52166_55373);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(base_path,i_55382,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o_55369], 0))),e);


var G__55383 = seq__52163_55370;
var G__55384 = chunk__52164_55371;
var G__55385 = count__52165_55372;
var G__55386 = (i__52166_55373 + (1));
seq__52163_55370 = G__55383;
chunk__52164_55371 = G__55384;
count__52165_55372 = G__55385;
i__52166_55373 = G__55386;
continue;
} else {
var temp__5720__auto___55387__$1 = cljs.core.seq(seq__52163_55370);
if(temp__5720__auto___55387__$1){
var seq__52163_55388__$1 = temp__5720__auto___55387__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52163_55388__$1)){
var c__4550__auto___55392 = cljs.core.chunk_first(seq__52163_55388__$1);
var G__55393 = cljs.core.chunk_rest(seq__52163_55388__$1);
var G__55394 = c__4550__auto___55392;
var G__55395 = cljs.core.count(c__4550__auto___55392);
var G__55396 = (0);
seq__52163_55370 = G__55393;
chunk__52164_55371 = G__55394;
count__52165_55372 = G__55395;
i__52166_55373 = G__55396;
continue;
} else {
var i_55397 = cljs.core.first(seq__52163_55388__$1);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(base_path,i_55397,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o_55369], 0))),e);


var G__55404 = cljs.core.next(seq__52163_55388__$1);
var G__55405 = null;
var G__55406 = (0);
var G__55407 = (0);
seq__52163_55370 = G__55404;
chunk__52164_55371 = G__55405;
count__52165_55372 = G__55406;
i__52166_55373 = G__55407;
continue;
}
} else {
}
}
break;
}

var G__55408 = cljs.core.next(seq__52162_55363__$1);
var G__55409 = null;
var G__55410 = (0);
var G__55411 = (0);
seq__52162_55321 = G__55408;
chunk__52167_55322 = G__55409;
count__52168_55323 = G__55410;
i__52169_55324 = G__55411;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__52174){
var vec__52175 = p__52174;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52175,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52175,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,input,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),i);
}),cljs.core.PersistentArrayMap.EMPTY,inputs);
});
com.wsscode.pathom.connect.parallel_batch = (function com$wsscode$pathom$connect$parallel_batch(p__52182){
var map__52183 = p__52182;
var map__52183__$1 = (((((!((map__52183 == null))))?(((((map__52183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52183):map__52183);
var env = map__52183__$1;
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52183__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52183__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52183__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache){
return (function (state_52550){
var state_val_52551 = (state_52550[(1)]);
if((state_val_52551 === (65))){
var inst_52435 = (state_52550[(2)]);
var inst_52436 = com.wsscode.common.async_cljs.throw_err(inst_52435);
var state_52550__$1 = state_52550;
var statearr_52552_55428 = state_52550__$1;
(statearr_52552_55428[(2)] = inst_52436);


cljs.core.async.impl.ioc_helpers.process_exception(state_52550__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (70))){
var inst_52464 = (state_52550[(7)]);
var inst_52465 = (state_52550[(8)]);
var inst_52467 = (inst_52465 < inst_52464);
var inst_52468 = inst_52467;
var state_52550__$1 = state_52550;
if(cljs.core.truth_(inst_52468)){
var statearr_52553_55430 = state_52550__$1;
(statearr_52553_55430[(1)] = (72));

} else {
var statearr_52554_55431 = state_52550__$1;
(statearr_52554_55431[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (62))){
var inst_52413 = (state_52550[(9)]);
var inst_52427 = (state_52550[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_52550,(61),new cljs.core.Keyword(null,"default","default",-1987822328),null,(60));
var inst_52427__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_52413);
var inst_52428 = com.wsscode.common.async_cljs.chan_QMARK_(inst_52427__$1);
var state_52550__$1 = (function (){var statearr_52555 = state_52550;
(statearr_52555[(10)] = inst_52427__$1);

return statearr_52555;
})();
if(inst_52428){
var statearr_52556_55437 = state_52550__$1;
(statearr_52556_55437[(1)] = (63));

} else {
var statearr_52557_55439 = state_52550__$1;
(statearr_52557_55439[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (74))){
var inst_52534 = (state_52550[(2)]);
var state_52550__$1 = state_52550;
var statearr_52558_55445 = state_52550__$1;
(statearr_52558_55445[(2)] = inst_52534);

(statearr_52558_55445[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (7))){
var inst_52206 = (state_52550[(2)]);
var state_52550__$1 = state_52550;
if(cljs.core.truth_(inst_52206)){
var statearr_52559_55449 = state_52550__$1;
(statearr_52559_55449[(1)] = (11));

} else {
var statearr_52560_55450 = state_52550__$1;
(statearr_52560_55450[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (59))){
var inst_52217 = (state_52550[(11)]);
var inst_52215 = (state_52550[(12)]);
var inst_52413 = (state_52550[(9)]);
var inst_52218 = (state_52550[(13)]);
var inst_52211 = (state_52550[(14)]);
var inst_52213 = (state_52550[(15)]);
var inst_52212 = (state_52550[(16)]);
var inst_52399 = (state_52550[(17)]);
var inst_52221 = (state_52550[(18)]);
var inst_52412 = (state_52550[(19)]);
var inst_52405 = (state_52550[(20)]);
var inst_52409 = (state_52550[(2)]);
var inst_52410 = com.wsscode.common.async_cljs.throw_err(inst_52409);
var inst_52411 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_52399,inst_52405,inst_52410);
var inst_52412__$1 = com.wsscode.pathom.connect.group_input_indexes(inst_52411);
var inst_52413__$1 = cljs.core.keys(inst_52412__$1);
var inst_52414 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_52415 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_52413__$1];
var inst_52416 = cljs.core.PersistentHashMap.fromArrays(inst_52414,inst_52415);
var inst_52417 = com.wsscode.pathom.trace.trace(env,inst_52416);
var inst_52418 = cljs.core.PersistentVector.EMPTY;
var inst_52419 = (function (){var input = inst_52213;
var items = inst_52413__$1;
var items_map = inst_52412__$1;
var key = inst_52217;
var _ = inst_52417;
var params = inst_52218;
var e = inst_52215;
var resolver_sym = inst_52212;
var trace_data = inst_52221;
var map__52189 = inst_52211;
return ((function (input,items,items_map,key,_,params,e,resolver_sym,trace_data,map__52189,inst_52217,inst_52215,inst_52413,inst_52218,inst_52211,inst_52213,inst_52212,inst_52399,inst_52221,inst_52412,inst_52405,inst_52409,inst_52410,inst_52411,inst_52412__$1,inst_52413__$1,inst_52414,inst_52415,inst_52416,inst_52417,inst_52418,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache){
return (function (resolver_input){
var ch = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.core.cache_hit(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,resolver_input,params], null),ch);

return ch;
});
;})(input,items,items_map,key,_,params,e,resolver_sym,trace_data,map__52189,inst_52217,inst_52215,inst_52413,inst_52218,inst_52211,inst_52213,inst_52212,inst_52399,inst_52221,inst_52412,inst_52405,inst_52409,inst_52410,inst_52411,inst_52412__$1,inst_52413__$1,inst_52414,inst_52415,inst_52416,inst_52417,inst_52418,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_52420 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_52419);
var inst_52421 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_52418,inst_52420,inst_52413__$1);
var state_52550__$1 = (function (){var statearr_52561 = state_52550;
(statearr_52561[(9)] = inst_52413__$1);

(statearr_52561[(19)] = inst_52412__$1);

(statearr_52561[(21)] = inst_52421);

return statearr_52561;
})();
var statearr_52562_55465 = state_52550__$1;
(statearr_52562_55465[(2)] = null);

(statearr_52562_55465[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (86))){
var inst_52529 = (state_52550[(2)]);
var state_52550__$1 = state_52550;
var statearr_52563_55467 = state_52550__$1;
(statearr_52563_55467[(2)] = inst_52529);

(statearr_52563_55467[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (20))){
var inst_52236 = (state_52550[(2)]);
var state_52550__$1 = state_52550;
var statearr_52564_55468 = state_52550__$1;
(statearr_52564_55468[(2)] = inst_52236);

(statearr_52564_55468[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (72))){
var inst_52480 = (state_52550[(22)]);
var inst_52465 = (state_52550[(8)]);
var inst_52463 = (state_52550[(23)]);
var inst_52476 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_52463,inst_52465);
var inst_52477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52476,(0),null);
var inst_52478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52476,(1),null);
var inst_52479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52478,(0),null);
var inst_52480__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52478,(1),null);
var state_52550__$1 = (function (){var statearr_52565 = state_52550;
(statearr_52565[(24)] = inst_52477);

(statearr_52565[(22)] = inst_52480__$1);

(statearr_52565[(25)] = inst_52479);

return statearr_52565;
})();
if(cljs.core.truth_(inst_52480__$1)){
var statearr_52566_55469 = state_52550__$1;
(statearr_52566_55469[(1)] = (75));

} else {
var statearr_52567_55472 = state_52550__$1;
(statearr_52567_55472[(1)] = (76));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (58))){
var inst_52397 = (state_52550[(2)]);
var state_52550__$1 = state_52550;
var statearr_52568_55473 = state_52550__$1;
(statearr_52568_55473[(2)] = inst_52397);

(statearr_52568_55473[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (60))){
var inst_52413 = (state_52550[(9)]);
var inst_52438 = (state_52550[(26)]);
var inst_52421 = (state_52550[(21)]);
var inst_52438__$1 = (state_52550[(2)]);
var inst_52439 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_52440 = cljs.core.count(inst_52438__$1);
var inst_52441 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_52440];
var inst_52442 = cljs.core.PersistentHashMap.fromArrays(inst_52439,inst_52441);
var inst_52443 = com.wsscode.pathom.trace.trace(env,inst_52442);
var inst_52444 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_52421,inst_52438__$1);
var inst_52445 = cljs.core.zipmap(inst_52413,inst_52444);
var inst_52446 = cljs.core.first(inst_52438__$1);
var inst_52447 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_52446);
var inst_52448 = cljs.core.count(path);
var inst_52449 = (inst_52448 >= (2));
var inst_52450 = ((inst_52447) && (inst_52449));
var state_52550__$1 = (function (){var statearr_52569 = state_52550;
(statearr_52569[(27)] = inst_52443);

(statearr_52569[(28)] = inst_52445);

(statearr_52569[(26)] = inst_52438__$1);

return statearr_52569;
})();
if(cljs.core.truth_(inst_52450)){
var statearr_52570_55482 = state_52550__$1;
(statearr_52570_55482[(1)] = (67));

} else {
var statearr_52571_55483 = state_52550__$1;
(statearr_52571_55483[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (27))){
var inst_52274 = (state_52550[(2)]);
var inst_52275 = com.wsscode.common.async_cljs.throw_err(inst_52274);
var state_52550__$1 = state_52550;
var statearr_52572_55486 = state_52550__$1;
(statearr_52572_55486[(2)] = inst_52275);


cljs.core.async.impl.ioc_helpers.process_exception(state_52550__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (1))){
var state_52550__$1 = state_52550;
var statearr_52573_55489 = state_52550__$1;
(statearr_52573_55489[(2)] = null);

(statearr_52573_55489[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (69))){
var inst_52445 = (state_52550[(28)]);
var inst_52456 = (state_52550[(2)]);
var inst_52461 = cljs.core.seq(inst_52445);
var inst_52462 = inst_52461;
var inst_52463 = null;
var inst_52464 = (0);
var inst_52465 = (0);
var state_52550__$1 = (function (){var statearr_52574 = state_52550;
(statearr_52574[(29)] = inst_52462);

(statearr_52574[(7)] = inst_52464);

(statearr_52574[(30)] = inst_52456);

(statearr_52574[(8)] = inst_52465);

(statearr_52574[(23)] = inst_52463);

return statearr_52574;
})();
var statearr_52575_55492 = state_52550__$1;
(statearr_52575_55492[(2)] = null);

(statearr_52575_55492[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (24))){
var inst_52266 = (state_52550[(31)]);
var inst_52252 = (state_52550[(32)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_52550,(23),new cljs.core.Keyword(null,"default","default",-1987822328),null,(22));
var inst_52266__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_52252);
var inst_52267 = com.wsscode.common.async_cljs.chan_QMARK_(inst_52266__$1);
var state_52550__$1 = (function (){var statearr_52576 = state_52550;
(statearr_52576[(31)] = inst_52266__$1);

return statearr_52576;
})();
if(inst_52267){
var statearr_52577_55494 = state_52550__$1;
(statearr_52577_55494[(1)] = (25));

} else {
var statearr_52578_55496 = state_52550__$1;
(statearr_52578_55496[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (55))){
var inst_52215 = (state_52550[(12)]);
var inst_52218 = (state_52550[(13)]);
var inst_52212 = (state_52550[(16)]);
var inst_52392 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52393 = [inst_52212,inst_52215,inst_52218];
var inst_52394 = (new cljs.core.PersistentVector(null,3,(5),inst_52392,inst_52393,null));
var inst_52395 = com.wsscode.pathom.core.cache_read(env,inst_52394);
var state_52550__$1 = state_52550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52550__$1,(58),inst_52395);
} else {
if((state_val_52551 === (85))){
var inst_52495 = (state_52550[(33)]);
var inst_52514 = (state_52550[(34)]);
var inst_52510 = cljs.core.first(inst_52495);
var inst_52511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52510,(0),null);
var inst_52512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52510,(1),null);
var inst_52513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52512,(0),null);
var inst_52514__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52512,(1),null);
var state_52550__$1 = (function (){var statearr_52582 = state_52550;
(statearr_52582[(35)] = inst_52513);

(statearr_52582[(36)] = inst_52511);

(statearr_52582[(34)] = inst_52514__$1);

return statearr_52582;
})();
if(cljs.core.truth_(inst_52514__$1)){
var statearr_52583_55501 = state_52550__$1;
(statearr_52583_55501[(1)] = (87));

} else {
var statearr_52584_55502 = state_52550__$1;
(statearr_52584_55502[(1)] = (88));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (39))){
var inst_52301 = (state_52550[(37)]);
var inst_52304 = (state_52550[(38)]);
var inst_52303 = (state_52550[(39)]);
var inst_52302 = (state_52550[(40)]);
var inst_52330 = (state_52550[(2)]);
var inst_52331 = (inst_52304 + (1));
var tmp52579 = inst_52301;
var tmp52580 = inst_52303;
var tmp52581 = inst_52302;
var inst_52301__$1 = tmp52579;
var inst_52302__$1 = tmp52581;
var inst_52303__$1 = tmp52580;
var inst_52304__$1 = inst_52331;
var state_52550__$1 = (function (){var statearr_52585 = state_52550;
(statearr_52585[(41)] = inst_52330);

(statearr_52585[(37)] = inst_52301__$1);

(statearr_52585[(38)] = inst_52304__$1);

(statearr_52585[(39)] = inst_52303__$1);

(statearr_52585[(40)] = inst_52302__$1);

return statearr_52585;
})();
var statearr_52586_55505 = state_52550__$1;
(statearr_52586_55505[(2)] = null);

(statearr_52586_55505[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (88))){
var inst_52513 = (state_52550[(35)]);
var inst_52523 = cljs.core.async.close_BANG_(inst_52513);
var state_52550__$1 = state_52550;
var statearr_52587_55506 = state_52550__$1;
(statearr_52587_55506[(2)] = inst_52523);

(statearr_52587_55506[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (46))){
var inst_52334 = (state_52550[(42)]);
var inst_52338 = cljs.core.chunk_first(inst_52334);
var inst_52339 = cljs.core.chunk_rest(inst_52334);
var inst_52340 = cljs.core.count(inst_52338);
var inst_52301 = inst_52339;
var inst_52302 = inst_52338;
var inst_52303 = inst_52340;
var inst_52304 = (0);
var state_52550__$1 = (function (){var statearr_52591 = state_52550;
(statearr_52591[(37)] = inst_52301);

(statearr_52591[(38)] = inst_52304);

(statearr_52591[(39)] = inst_52303);

(statearr_52591[(40)] = inst_52302);

return statearr_52591;
})();
var statearr_52592_55512 = state_52550__$1;
(statearr_52592_55512[(2)] = null);

(statearr_52592_55512[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (4))){
var inst_52190 = (state_52550[(43)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_52550,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_52190__$1 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_52192 = (inst_52190__$1 == null);
var inst_52193 = cljs.core.not(inst_52192);
var state_52550__$1 = (function (){var statearr_52593 = state_52550;
(statearr_52593[(43)] = inst_52190__$1);

return statearr_52593;
})();
if(inst_52193){
var statearr_52594_55516 = state_52550__$1;
(statearr_52594_55516[(1)] = (5));

} else {
var statearr_52595_55519 = state_52550__$1;
(statearr_52595_55519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (77))){
var inst_52462 = (state_52550[(29)]);
var inst_52464 = (state_52550[(7)]);
var inst_52465 = (state_52550[(8)]);
var inst_52463 = (state_52550[(23)]);
var inst_52491 = (state_52550[(2)]);
var inst_52492 = (inst_52465 + (1));
var tmp52588 = inst_52462;
var tmp52589 = inst_52464;
var tmp52590 = inst_52463;
var inst_52462__$1 = tmp52588;
var inst_52463__$1 = tmp52590;
var inst_52464__$1 = tmp52589;
var inst_52465__$1 = inst_52492;
var state_52550__$1 = (function (){var statearr_52596 = state_52550;
(statearr_52596[(29)] = inst_52462__$1);

(statearr_52596[(44)] = inst_52491);

(statearr_52596[(7)] = inst_52464__$1);

(statearr_52596[(8)] = inst_52465__$1);

(statearr_52596[(23)] = inst_52463__$1);

return statearr_52596;
})();
var statearr_52597_55525 = state_52550__$1;
(statearr_52597_55525[(2)] = null);

(statearr_52597_55525[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (54))){
var inst_52352 = (state_52550[(45)]);
var inst_52359 = (state_52550[(2)]);
var inst_52360 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_52352,inst_52359);
var state_52550__$1 = state_52550;
var statearr_52598_55529 = state_52550__$1;
(statearr_52598_55529[(2)] = inst_52360);

(statearr_52598_55529[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (92))){
var inst_52513 = (state_52550[(35)]);
var inst_52520 = (state_52550[(2)]);
var inst_52521 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_52513,inst_52520);
var state_52550__$1 = state_52550;
var statearr_52599_55534 = state_52550__$1;
(statearr_52599_55534[(2)] = inst_52521);

(statearr_52599_55534[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (15))){
var inst_52215 = (state_52550[(12)]);
var inst_52218 = (state_52550[(13)]);
var inst_52212 = (state_52550[(16)]);
var inst_52387 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52388 = [inst_52212,inst_52215,inst_52218];
var inst_52389 = (new cljs.core.PersistentVector(null,3,(5),inst_52387,inst_52388,null));
var inst_52390 = com.wsscode.pathom.core.cache_contains_QMARK_(env,inst_52389);
var state_52550__$1 = state_52550;
if(inst_52390){
var statearr_52600_55536 = state_52550__$1;
(statearr_52600_55536[(1)] = (55));

} else {
var statearr_52601_55538 = state_52550__$1;
(statearr_52601_55538[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (48))){
var inst_52368 = (state_52550[(2)]);
var state_52550__$1 = state_52550;
var statearr_52602_55539 = state_52550__$1;
(statearr_52602_55539[(2)] = inst_52368);

(statearr_52602_55539[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (50))){
var inst_52352 = (state_52550[(45)]);
var inst_52362 = cljs.core.async.close_BANG_(inst_52352);
var state_52550__$1 = state_52550;
var statearr_52603_55544 = state_52550__$1;
(statearr_52603_55544[(2)] = inst_52362);

(statearr_52603_55544[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (75))){
var inst_52480 = (state_52550[(22)]);
var state_52550__$1 = state_52550;
if(cljs.core.truth_(inst_52480)){
var statearr_52604_55545 = state_52550__$1;
(statearr_52604_55545[(1)] = (78));

} else {
var statearr_52605_55546 = state_52550__$1;
(statearr_52605_55546[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (21))){
var inst_52217 = (state_52550[(11)]);
var inst_52215 = (state_52550[(12)]);
var inst_52218 = (state_52550[(13)]);
var inst_52244 = (state_52550[(46)]);
var inst_52211 = (state_52550[(14)]);
var inst_52238 = (state_52550[(47)]);
var inst_52213 = (state_52550[(15)]);
var inst_52212 = (state_52550[(16)]);
var inst_52221 = (state_52550[(18)]);
var inst_52225 = (state_52550[(48)]);
var inst_52251 = (state_52550[(49)]);
var inst_52252 = (state_52550[(32)]);
var inst_52248 = (state_52550[(2)]);
var inst_52249 = com.wsscode.common.async_cljs.throw_err(inst_52248);
var inst_52250 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_52238,inst_52244,inst_52249);
var inst_52251__$1 = com.wsscode.pathom.connect.group_input_indexes(inst_52250);
var inst_52252__$1 = cljs.core.keys(inst_52251__$1);
var inst_52253 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_52254 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_52252__$1];
var inst_52255 = cljs.core.PersistentHashMap.fromArrays(inst_52253,inst_52254);
var inst_52256 = com.wsscode.pathom.trace.trace(env,inst_52255);
var inst_52257 = cljs.core.PersistentVector.EMPTY;
var inst_52258 = (function (){var input = inst_52213;
var items = inst_52252__$1;
var trace_id__21490__auto__ = inst_52225;
var items_map = inst_52251__$1;
var key = inst_52217;
var _ = inst_52256;
var params = inst_52218;
var e = inst_52215;
var resolver_sym = inst_52212;
var trace_data = inst_52221;
var map__52189 = inst_52211;
return ((function (input,items,trace_id__21490__auto__,items_map,key,_,params,e,resolver_sym,trace_data,map__52189,inst_52217,inst_52215,inst_52218,inst_52244,inst_52211,inst_52238,inst_52213,inst_52212,inst_52221,inst_52225,inst_52251,inst_52252,inst_52248,inst_52249,inst_52250,inst_52251__$1,inst_52252__$1,inst_52253,inst_52254,inst_52255,inst_52256,inst_52257,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache){
return (function (resolver_input){
var ch = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.core.cache_hit(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,resolver_input,params], null),ch);

return ch;
});
;})(input,items,trace_id__21490__auto__,items_map,key,_,params,e,resolver_sym,trace_data,map__52189,inst_52217,inst_52215,inst_52218,inst_52244,inst_52211,inst_52238,inst_52213,inst_52212,inst_52221,inst_52225,inst_52251,inst_52252,inst_52248,inst_52249,inst_52250,inst_52251__$1,inst_52252__$1,inst_52253,inst_52254,inst_52255,inst_52256,inst_52257,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_52259 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_52258);
var inst_52260 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_52257,inst_52259,inst_52252__$1);
var state_52550__$1 = (function (){var statearr_52606 = state_52550;
(statearr_52606[(50)] = inst_52260);

(statearr_52606[(49)] = inst_52251__$1);

(statearr_52606[(32)] = inst_52252__$1);

return statearr_52606;
})();
var statearr_52607_55556 = state_52550__$1;
(statearr_52607_55556[(2)] = null);

(statearr_52607_55556[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (31))){
var inst_52284 = (state_52550[(51)]);
var inst_52295 = (state_52550[(2)]);
var inst_52300 = cljs.core.seq(inst_52284);
var inst_52301 = inst_52300;
var inst_52302 = null;
var inst_52303 = (0);
var inst_52304 = (0);
var state_52550__$1 = (function (){var statearr_52608 = state_52550;
(statearr_52608[(37)] = inst_52301);

(statearr_52608[(38)] = inst_52304);

(statearr_52608[(52)] = inst_52295);

(statearr_52608[(39)] = inst_52303);

(statearr_52608[(40)] = inst_52302);

return statearr_52608;
})();
var statearr_52609_55563 = state_52550__$1;
(statearr_52609_55563[(2)] = null);

(statearr_52609_55563[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (32))){
var inst_52304 = (state_52550[(38)]);
var inst_52303 = (state_52550[(39)]);
var inst_52306 = (inst_52304 < inst_52303);
var inst_52307 = inst_52306;
var state_52550__$1 = state_52550;
if(cljs.core.truth_(inst_52307)){
var statearr_52610_55569 = state_52550__$1;
(statearr_52610_55569[(1)] = (34));

} else {
var statearr_52611_55570 = state_52550__$1;
(statearr_52611_55570[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (40))){
var inst_52319 = (state_52550[(53)]);
var state_52550__$1 = state_52550;
var statearr_52612_55571 = state_52550__$1;
(statearr_52612_55571[(2)] = inst_52319);

(statearr_52612_55571[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (91))){
var inst_52518 = cljs.core.PersistentHashMap.EMPTY;
var state_52550__$1 = state_52550;
var statearr_52613_55576 = state_52550__$1;
(statearr_52613_55576[(2)] = inst_52518);

(statearr_52613_55576[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (56))){
var inst_52217 = (state_52550[(11)]);
var inst_52215 = (state_52550[(12)]);
var inst_52218 = (state_52550[(13)]);
var inst_52211 = (state_52550[(14)]);
var inst_52213 = (state_52550[(15)]);
var inst_52212 = (state_52550[(16)]);
var inst_52221 = (state_52550[(18)]);
var inst_52399 = cljs.core.PersistentVector.EMPTY;
var inst_52400 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector);
var inst_52401 = (function (){var map__52189 = inst_52211;
var resolver_sym = inst_52212;
var input = inst_52213;
var e = inst_52215;
var key = inst_52217;
var params = inst_52218;
var trace_data = inst_52221;
return ((function (map__52189,resolver_sym,input,e,key,params,trace_data,inst_52217,inst_52215,inst_52218,inst_52211,inst_52213,inst_52212,inst_52221,inst_52399,inst_52400,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__52179_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(cljs.core.second(p1__52179_SHARP_),input);
});
;})(map__52189,resolver_sym,input,e,key,params,trace_data,inst_52217,inst_52215,inst_52218,inst_52211,inst_52213,inst_52212,inst_52221,inst_52399,inst_52400,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_52402 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_52401);
var inst_52403 = (function (){var map__52189 = inst_52211;
var resolver_sym = inst_52212;
var input = inst_52213;
var e = inst_52215;
var key = inst_52217;
var params = inst_52218;
var trace_data = inst_52221;
return ((function (map__52189,resolver_sym,input,e,key,params,trace_data,inst_52217,inst_52215,inst_52218,inst_52211,inst_52213,inst_52212,inst_52221,inst_52399,inst_52400,inst_52401,inst_52402,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__52180_SHARP_){
return com.wsscode.pathom.core.cache_contains_QMARK_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,cljs.core.second(p1__52180_SHARP_),params], null));
});
;})(map__52189,resolver_sym,input,e,key,params,trace_data,inst_52217,inst_52215,inst_52218,inst_52211,inst_52213,inst_52212,inst_52221,inst_52399,inst_52400,inst_52401,inst_52402,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_52404 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_52403);
var inst_52405 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(inst_52400,inst_52402,inst_52404);
var inst_52406 = (function (){var map__52189 = inst_52211;
var resolver_sym = inst_52212;
var input = inst_52213;
var e = inst_52215;
var key = inst_52217;
var params = inst_52218;
var trace_data = inst_52221;
return ((function (map__52189,resolver_sym,input,e,key,params,trace_data,inst_52217,inst_52215,inst_52218,inst_52211,inst_52213,inst_52212,inst_52221,inst_52399,inst_52400,inst_52401,inst_52402,inst_52403,inst_52404,inst_52405,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__52178_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__52178_SHARP_,input);
});
;})(map__52189,resolver_sym,input,e,key,params,trace_data,inst_52217,inst_52215,inst_52218,inst_52211,inst_52213,inst_52212,inst_52221,inst_52399,inst_52400,inst_52401,inst_52402,inst_52403,inst_52404,inst_52405,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_52407 = com.wsscode.pathom.connect.map_async_serial(inst_52406,processing_sequence);
var state_52550__$1 = (function (){var statearr_52614 = state_52550;
(statearr_52614[(17)] = inst_52399);

(statearr_52614[(20)] = inst_52405);

return statearr_52614;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52550__$1,(59),inst_52407);
} else {
if((state_val_52551 === (33))){
var inst_52215 = (state_52550[(12)]);
var inst_52284 = (state_52550[(51)]);
var inst_52375 = (state_52550[(2)]);
var inst_52376 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52377 = cljs.core.PersistentHashMap.EMPTY;
var inst_52378 = [null,inst_52377];
var inst_52379 = (new cljs.core.PersistentVector(null,2,(5),inst_52376,inst_52378,null));
var inst_52380 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_52284,inst_52215,inst_52379);
var inst_52381 = cljs.core.second(inst_52380);
var state_52550__$1 = (function (){var statearr_52615 = state_52550;
(statearr_52615[(54)] = inst_52375);

return statearr_52615;
})();
var statearr_52616_55596 = state_52550__$1;
(statearr_52616_55596[(2)] = inst_52381);

(statearr_52616_55596[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (13))){
var inst_52217 = (state_52550[(11)]);
var inst_52215 = (state_52550[(12)]);
var inst_52211 = (state_52550[(14)]);
var inst_52213 = (state_52550[(15)]);
var inst_52212 = (state_52550[(16)]);
var inst_52211__$1 = (state_52550[(2)]);
var inst_52212__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52211__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var inst_52213__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52211__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_52214 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var inst_52215__$1 = cljs.core.select_keys(inst_52214,inst_52213__$1);
var inst_52216 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_52217__$1 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_52216);
var inst_52218 = com.wsscode.pathom.core.params(env);
var inst_52219 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_52220 = [inst_52217__$1,inst_52212__$1,inst_52215__$1];
var inst_52221 = cljs.core.PersistentHashMap.fromArrays(inst_52219,inst_52220);
var inst_52222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_52550__$1 = (function (){var statearr_52617 = state_52550;
(statearr_52617[(11)] = inst_52217__$1);

(statearr_52617[(12)] = inst_52215__$1);

(statearr_52617[(13)] = inst_52218);

(statearr_52617[(14)] = inst_52211__$1);

(statearr_52617[(15)] = inst_52213__$1);

(statearr_52617[(16)] = inst_52212__$1);

(statearr_52617[(18)] = inst_52221);

return statearr_52617;
})();
if(cljs.core.truth_(inst_52222)){
var statearr_52618_55602 = state_52550__$1;
(statearr_52618_55602[(1)] = (14));

} else {
var statearr_52619_55604 = state_52550__$1;
(statearr_52619_55604[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (22))){
var inst_52277 = (state_52550[(55)]);
var inst_52260 = (state_52550[(50)]);
var inst_52252 = (state_52550[(32)]);
var inst_52277__$1 = (state_52550[(2)]);
var inst_52278 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_52279 = cljs.core.count(inst_52277__$1);
var inst_52280 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_52279];
var inst_52281 = cljs.core.PersistentHashMap.fromArrays(inst_52278,inst_52280);
var inst_52282 = com.wsscode.pathom.trace.trace(env,inst_52281);
var inst_52283 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_52260,inst_52277__$1);
var inst_52284 = cljs.core.zipmap(inst_52252,inst_52283);
var inst_52285 = cljs.core.first(inst_52277__$1);
var inst_52286 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_52285);
var inst_52287 = cljs.core.count(path);
var inst_52288 = (inst_52287 >= (2));
var inst_52289 = ((inst_52286) && (inst_52288));
var state_52550__$1 = (function (){var statearr_52620 = state_52550;
(statearr_52620[(56)] = inst_52282);

(statearr_52620[(55)] = inst_52277__$1);

(statearr_52620[(51)] = inst_52284);

return statearr_52620;
})();
if(cljs.core.truth_(inst_52289)){
var statearr_52621_55606 = state_52550__$1;
(statearr_52621_55606[(1)] = (29));

} else {
var statearr_52622_55608 = state_52550__$1;
(statearr_52622_55608[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (90))){
var inst_52514 = (state_52550[(34)]);
var state_52550__$1 = state_52550;
var statearr_52623_55610 = state_52550__$1;
(statearr_52623_55610[(2)] = inst_52514);

(statearr_52623_55610[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (36))){
var inst_52373 = (state_52550[(2)]);
var state_52550__$1 = state_52550;
var statearr_52624_55613 = state_52550__$1;
(statearr_52624_55613[(2)] = inst_52373);

(statearr_52624_55613[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (41))){
var inst_52323 = cljs.core.PersistentHashMap.EMPTY;
var state_52550__$1 = state_52550;
var statearr_52625_55616 = state_52550__$1;
(statearr_52625_55616[(2)] = inst_52323);

(statearr_52625_55616[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (89))){
var inst_52495 = (state_52550[(33)]);
var inst_52525 = (state_52550[(2)]);
var inst_52526 = cljs.core.next(inst_52495);
var inst_52462 = inst_52526;
var inst_52463 = null;
var inst_52464 = (0);
var inst_52465 = (0);
var state_52550__$1 = (function (){var statearr_52626 = state_52550;
(statearr_52626[(29)] = inst_52462);

(statearr_52626[(57)] = inst_52525);

(statearr_52626[(7)] = inst_52464);

(statearr_52626[(8)] = inst_52465);

(statearr_52626[(23)] = inst_52463);

return statearr_52626;
})();
var statearr_52627_55626 = state_52550__$1;
(statearr_52627_55626[(2)] = null);

(statearr_52627_55626[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (43))){
var inst_52334 = (state_52550[(42)]);
var inst_52336 = cljs.core.chunked_seq_QMARK_(inst_52334);
var state_52550__$1 = state_52550;
if(inst_52336){
var statearr_52628_55631 = state_52550__$1;
(statearr_52628_55631[(1)] = (46));

} else {
var statearr_52629_55632 = state_52550__$1;
(statearr_52629_55632[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (61))){
var inst_52422 = (state_52550[(2)]);
var inst_52423 = com.wsscode.pathom.connect.parallel_batch_error(env,inst_52422);
var state_52550__$1 = state_52550;
var statearr_52630_55634 = state_52550__$1;
(statearr_52630_55634[(2)] = inst_52423);


cljs.core.async.impl.ioc_helpers.process_exception(state_52550__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (29))){
var inst_52217 = (state_52550[(11)]);
var inst_52215 = (state_52550[(12)]);
var inst_52218 = (state_52550[(13)]);
var inst_52211 = (state_52550[(14)]);
var inst_52213 = (state_52550[(15)]);
var inst_52212 = (state_52550[(16)]);
var inst_52282 = (state_52550[(56)]);
var inst_52277 = (state_52550[(55)]);
var inst_52260 = (state_52550[(50)]);
var inst_52221 = (state_52550[(18)]);
var inst_52284 = (state_52550[(51)]);
var inst_52225 = (state_52550[(48)]);
var inst_52251 = (state_52550[(49)]);
var inst_52252 = (state_52550[(32)]);
var inst_52291 = (function (){var input = inst_52213;
var items = inst_52252;
var trace_id__21490__auto__ = inst_52225;
var items_map = inst_52251;
var linked_results = inst_52284;
var key = inst_52217;
var channels = inst_52260;
var _ = inst_52282;
var params = inst_52218;
var e = inst_52215;
var resolver_sym = inst_52212;
var trace_data = inst_52221;
var batch_result = inst_52277;
var map__52189 = inst_52211;
return ((function (input,items,trace_id__21490__auto__,items_map,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,map__52189,inst_52217,inst_52215,inst_52218,inst_52211,inst_52213,inst_52212,inst_52282,inst_52277,inst_52260,inst_52221,inst_52284,inst_52225,inst_52251,inst_52252,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap(cache){
var path__$1 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),(cljs.core.count(path) - (2)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path__$1,input,items,trace_id__21490__auto__,items_map,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,map__52189,inst_52217,inst_52215,inst_52218,inst_52211,inst_52213,inst_52212,inst_52282,inst_52277,inst_52260,inst_52221,inst_52284,inst_52225,inst_52251,inst_52252,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce(cache__$1,p__52631){
var vec__52632 = p__52631;
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52632,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52632,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__52632,item,result,path__$1,input,items,trace_id__21490__auto__,items_map,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,map__52189,inst_52217,inst_52215,inst_52218,inst_52211,inst_52213,inst_52212,inst_52282,inst_52277,inst_52260,inst_52221,inst_52284,inst_52225,inst_52251,inst_52252,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce_$_entity_path_inner_reduce(cache__$2,index){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cache__$2,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,index),((function (vec__52632,item,result,path__$1,input,items,trace_id__21490__auto__,items_map,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,map__52189,inst_52217,inst_52215,inst_52218,inst_52211,inst_52213,inst_52212,inst_52282,inst_52277,inst_52260,inst_52221,inst_52284,inst_52225,inst_52251,inst_52252,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__52181_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result,p1__52181_SHARP_], 0));
});})(vec__52632,item,result,path__$1,input,items,trace_id__21490__auto__,items_map,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,map__52189,inst_52217,inst_52215,inst_52218,inst_52211,inst_52213,inst_52212,inst_52282,inst_52277,inst_52260,inst_52221,inst_52284,inst_52225,inst_52251,inst_52252,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache))
);
});})(vec__52632,item,result,path__$1,input,items,trace_id__21490__auto__,items_map,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,map__52189,inst_52217,inst_52215,inst_52218,inst_52211,inst_52213,inst_52212,inst_52282,inst_52277,inst_52260,inst_52221,inst_52284,inst_52225,inst_52251,inst_52252,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache))
,cache__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_map,item));
});})(path__$1,input,items,trace_id__21490__auto__,items_map,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,map__52189,inst_52217,inst_52215,inst_52218,inst_52211,inst_52213,inst_52212,inst_52282,inst_52277,inst_52260,inst_52221,inst_52284,inst_52225,inst_52251,inst_52252,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache))
,cache,cljs.core.zipmap(items,batch_result));
});
;})(input,items,trace_id__21490__auto__,items_map,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,map__52189,inst_52217,inst_52215,inst_52218,inst_52211,inst_52213,inst_52212,inst_52282,inst_52277,inst_52260,inst_52221,inst_52284,inst_52225,inst_52251,inst_52252,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_52292 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(entity_path_cache,inst_52291);
var state_52550__$1 = state_52550;
var statearr_52635_55650 = state_52550__$1;
(statearr_52635_55650[(2)] = inst_52292);

(statearr_52635_55650[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (44))){
var state_52550__$1 = state_52550;
var statearr_52636_55651 = state_52550__$1;
(statearr_52636_55651[(2)] = null);

(statearr_52636_55651[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (6))){
var state_52550__$1 = state_52550;
var statearr_52637_55652 = state_52550__$1;
(statearr_52637_55652[(2)] = false);

(statearr_52637_55652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (28))){
var inst_52270 = (state_52550[(2)]);
var inst_52271 = com.wsscode.common.async_cljs.throw_err(inst_52270);
var state_52550__$1 = state_52550;
var statearr_52638_55655 = state_52550__$1;
(statearr_52638_55655[(2)] = inst_52271);

(statearr_52638_55655[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (64))){
var inst_52427 = (state_52550[(10)]);
var state_52550__$1 = state_52550;
var statearr_52639_55656 = state_52550__$1;
(statearr_52639_55656[(2)] = inst_52427);

(statearr_52639_55656[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (51))){
var inst_52334 = (state_52550[(42)]);
var inst_52364 = (state_52550[(2)]);
var inst_52365 = cljs.core.next(inst_52334);
var inst_52301 = inst_52365;
var inst_52302 = null;
var inst_52303 = (0);
var inst_52304 = (0);
var state_52550__$1 = (function (){var statearr_52640 = state_52550;
(statearr_52640[(37)] = inst_52301);

(statearr_52640[(38)] = inst_52304);

(statearr_52640[(39)] = inst_52303);

(statearr_52640[(40)] = inst_52302);

(statearr_52640[(58)] = inst_52364);

return statearr_52640;
})();
var statearr_52641_55660 = state_52550__$1;
(statearr_52641_55660[(2)] = null);

(statearr_52641_55660[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (25))){
var inst_52266 = (state_52550[(31)]);
var state_52550__$1 = state_52550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52550__$1,(28),inst_52266);
} else {
if((state_val_52551 === (34))){
var inst_52304 = (state_52550[(38)]);
var inst_52319 = (state_52550[(53)]);
var inst_52302 = (state_52550[(40)]);
var inst_52315 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_52302,inst_52304);
var inst_52316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52315,(0),null);
var inst_52317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52315,(1),null);
var inst_52318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52317,(0),null);
var inst_52319__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52317,(1),null);
var state_52550__$1 = (function (){var statearr_52642 = state_52550;
(statearr_52642[(59)] = inst_52316);

(statearr_52642[(53)] = inst_52319__$1);

(statearr_52642[(60)] = inst_52318);

return statearr_52642;
})();
if(cljs.core.truth_(inst_52319__$1)){
var statearr_52643_55669 = state_52550__$1;
(statearr_52643_55669[(1)] = (37));

} else {
var statearr_52644_55670 = state_52550__$1;
(statearr_52644_55670[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (17))){
var inst_52215 = (state_52550[(12)]);
var inst_52218 = (state_52550[(13)]);
var inst_52212 = (state_52550[(16)]);
var inst_52231 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52232 = [inst_52212,inst_52215,inst_52218];
var inst_52233 = (new cljs.core.PersistentVector(null,3,(5),inst_52231,inst_52232,null));
var inst_52234 = com.wsscode.pathom.core.cache_read(env,inst_52233);
var state_52550__$1 = state_52550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52550__$1,(20),inst_52234);
} else {
if((state_val_52551 === (3))){
var inst_52185 = (state_52550[(2)]);
var state_52550__$1 = state_52550;
var statearr_52645_55675 = state_52550__$1;
(statearr_52645_55675[(2)] = inst_52185);


cljs.core.async.impl.ioc_helpers.process_exception(state_52550__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (12))){
var inst_52190 = (state_52550[(43)]);
var state_52550__$1 = state_52550;
var statearr_52646_55676 = state_52550__$1;
(statearr_52646_55676[(2)] = inst_52190);

(statearr_52646_55676[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (2))){
var inst_52548 = (state_52550[(2)]);
var state_52550__$1 = state_52550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52550__$1,inst_52548);
} else {
if((state_val_52551 === (66))){
var inst_52431 = (state_52550[(2)]);
var inst_52432 = com.wsscode.common.async_cljs.throw_err(inst_52431);
var state_52550__$1 = state_52550;
var statearr_52647_55679 = state_52550__$1;
(statearr_52647_55679[(2)] = inst_52432);

(statearr_52647_55679[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (23))){
var inst_52261 = (state_52550[(2)]);
var inst_52262 = com.wsscode.pathom.connect.parallel_batch_error(env,inst_52261);
var state_52550__$1 = state_52550;
var statearr_52648_55682 = state_52550__$1;
(statearr_52648_55682[(2)] = inst_52262);


cljs.core.async.impl.ioc_helpers.process_exception(state_52550__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (47))){
var inst_52353 = (state_52550[(61)]);
var inst_52334 = (state_52550[(42)]);
var inst_52349 = cljs.core.first(inst_52334);
var inst_52350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52349,(0),null);
var inst_52351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52349,(1),null);
var inst_52352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52351,(0),null);
var inst_52353__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52351,(1),null);
var state_52550__$1 = (function (){var statearr_52649 = state_52550;
(statearr_52649[(45)] = inst_52352);

(statearr_52649[(61)] = inst_52353__$1);

(statearr_52649[(62)] = inst_52350);

return statearr_52649;
})();
if(cljs.core.truth_(inst_52353__$1)){
var statearr_52650_55683 = state_52550__$1;
(statearr_52650_55683[(1)] = (49));

} else {
var statearr_52651_55684 = state_52550__$1;
(statearr_52651_55684[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (35))){
var inst_52301 = (state_52550[(37)]);
var inst_52334 = (state_52550[(42)]);
var inst_52334__$1 = cljs.core.seq(inst_52301);
var state_52550__$1 = (function (){var statearr_52652 = state_52550;
(statearr_52652[(42)] = inst_52334__$1);

return statearr_52652;
})();
if(inst_52334__$1){
var statearr_52653_55686 = state_52550__$1;
(statearr_52653_55686[(1)] = (43));

} else {
var statearr_52654_55687 = state_52550__$1;
(statearr_52654_55687[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (82))){
var state_52550__$1 = state_52550;
var statearr_52655_55688 = state_52550__$1;
(statearr_52655_55688[(2)] = null);

(statearr_52655_55688[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (76))){
var inst_52479 = (state_52550[(25)]);
var inst_52489 = cljs.core.async.close_BANG_(inst_52479);
var state_52550__$1 = state_52550;
var statearr_52656_55689 = state_52550__$1;
(statearr_52656_55689[(2)] = inst_52489);

(statearr_52656_55689[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (19))){
var inst_52221 = (state_52550[(18)]);
var inst_52225 = (state_52550[(48)]);
var inst_52383 = (state_52550[(2)]);
var inst_52384 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_52221,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_52385 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_52225,inst_52384);
var state_52550__$1 = (function (){var statearr_52657 = state_52550;
(statearr_52657[(63)] = inst_52385);

return statearr_52657;
})();
var statearr_52658_55691 = state_52550__$1;
(statearr_52658_55691[(2)] = inst_52383);

(statearr_52658_55691[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (57))){
var inst_52544 = (state_52550[(2)]);
var state_52550__$1 = state_52550;
var statearr_52659_55693 = state_52550__$1;
(statearr_52659_55693[(2)] = inst_52544);

(statearr_52659_55693[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (68))){
var state_52550__$1 = state_52550;
var statearr_52660_55694 = state_52550__$1;
(statearr_52660_55694[(2)] = null);

(statearr_52660_55694[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (11))){
var inst_52190 = (state_52550[(43)]);
var inst_52208 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52190);
var state_52550__$1 = state_52550;
var statearr_52661_55696 = state_52550__$1;
(statearr_52661_55696[(2)] = inst_52208);

(statearr_52661_55696[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (9))){
var state_52550__$1 = state_52550;
var statearr_52662_55697 = state_52550__$1;
(statearr_52662_55697[(2)] = false);

(statearr_52662_55697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (5))){
var inst_52190 = (state_52550[(43)]);
var inst_52195 = inst_52190.cljs$lang$protocol_mask$partition0$;
var inst_52196 = (inst_52195 & (64));
var inst_52197 = inst_52190.cljs$core$ISeq$;
var inst_52198 = (cljs.core.PROTOCOL_SENTINEL === inst_52197);
var inst_52199 = ((inst_52196) || (inst_52198));
var state_52550__$1 = state_52550;
if(cljs.core.truth_(inst_52199)){
var statearr_52663_55699 = state_52550__$1;
(statearr_52663_55699[(1)] = (8));

} else {
var statearr_52664_55700 = state_52550__$1;
(statearr_52664_55700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (83))){
var inst_52532 = (state_52550[(2)]);
var state_52550__$1 = state_52550;
var statearr_52665_55704 = state_52550__$1;
(statearr_52665_55704[(2)] = inst_52532);

(statearr_52665_55704[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (14))){
var inst_52215 = (state_52550[(12)]);
var inst_52218 = (state_52550[(13)]);
var inst_52212 = (state_52550[(16)]);
var inst_52221 = (state_52550[(18)]);
var inst_52224 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_52221,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_52225 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_52224);
var inst_52226 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52227 = [inst_52212,inst_52215,inst_52218];
var inst_52228 = (new cljs.core.PersistentVector(null,3,(5),inst_52226,inst_52227,null));
var inst_52229 = com.wsscode.pathom.core.cache_contains_QMARK_(env,inst_52228);
var state_52550__$1 = (function (){var statearr_52666 = state_52550;
(statearr_52666[(48)] = inst_52225);

return statearr_52666;
})();
if(inst_52229){
var statearr_52667_55708 = state_52550__$1;
(statearr_52667_55708[(1)] = (17));

} else {
var statearr_52668_55709 = state_52550__$1;
(statearr_52668_55709[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (45))){
var inst_52371 = (state_52550[(2)]);
var state_52550__$1 = state_52550;
var statearr_52669_55710 = state_52550__$1;
(statearr_52669_55710[(2)] = inst_52371);

(statearr_52669_55710[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (53))){
var inst_52357 = cljs.core.PersistentHashMap.EMPTY;
var state_52550__$1 = state_52550;
var statearr_52670_55711 = state_52550__$1;
(statearr_52670_55711[(2)] = inst_52357);

(statearr_52670_55711[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (78))){
var inst_52480 = (state_52550[(22)]);
var state_52550__$1 = state_52550;
var statearr_52671_55715 = state_52550__$1;
(statearr_52671_55715[(2)] = inst_52480);

(statearr_52671_55715[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (26))){
var inst_52266 = (state_52550[(31)]);
var state_52550__$1 = state_52550;
var statearr_52672_55716 = state_52550__$1;
(statearr_52672_55716[(2)] = inst_52266);

(statearr_52672_55716[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (16))){
var inst_52546 = (state_52550[(2)]);
var state_52550__$1 = state_52550;
var statearr_52673_55717 = state_52550__$1;
(statearr_52673_55717[(2)] = inst_52546);


cljs.core.async.impl.ioc_helpers.process_exception(state_52550__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (81))){
var inst_52495 = (state_52550[(33)]);
var inst_52497 = cljs.core.chunked_seq_QMARK_(inst_52495);
var state_52550__$1 = state_52550;
if(inst_52497){
var statearr_52674_55720 = state_52550__$1;
(statearr_52674_55720[(1)] = (84));

} else {
var statearr_52675_55721 = state_52550__$1;
(statearr_52675_55721[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (79))){
var inst_52484 = cljs.core.PersistentHashMap.EMPTY;
var state_52550__$1 = state_52550;
var statearr_52676_55722 = state_52550__$1;
(statearr_52676_55722[(2)] = inst_52484);

(statearr_52676_55722[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (38))){
var inst_52318 = (state_52550[(60)]);
var inst_52328 = cljs.core.async.close_BANG_(inst_52318);
var state_52550__$1 = state_52550;
var statearr_52677_55725 = state_52550__$1;
(statearr_52677_55725[(2)] = inst_52328);

(statearr_52677_55725[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (87))){
var inst_52514 = (state_52550[(34)]);
var state_52550__$1 = state_52550;
if(cljs.core.truth_(inst_52514)){
var statearr_52678_55726 = state_52550__$1;
(statearr_52678_55726[(1)] = (90));

} else {
var statearr_52679_55727 = state_52550__$1;
(statearr_52679_55727[(1)] = (91));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (30))){
var state_52550__$1 = state_52550;
var statearr_52680_55728 = state_52550__$1;
(statearr_52680_55728[(2)] = null);

(statearr_52680_55728[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (73))){
var inst_52462 = (state_52550[(29)]);
var inst_52495 = (state_52550[(33)]);
var inst_52495__$1 = cljs.core.seq(inst_52462);
var state_52550__$1 = (function (){var statearr_52681 = state_52550;
(statearr_52681[(33)] = inst_52495__$1);

return statearr_52681;
})();
if(inst_52495__$1){
var statearr_52682_55732 = state_52550__$1;
(statearr_52682_55732[(1)] = (81));

} else {
var statearr_52683_55733 = state_52550__$1;
(statearr_52683_55733[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (10))){
var inst_52203 = (state_52550[(2)]);
var state_52550__$1 = state_52550;
var statearr_52684_55734 = state_52550__$1;
(statearr_52684_55734[(2)] = inst_52203);

(statearr_52684_55734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (18))){
var inst_52217 = (state_52550[(11)]);
var inst_52215 = (state_52550[(12)]);
var inst_52218 = (state_52550[(13)]);
var inst_52211 = (state_52550[(14)]);
var inst_52213 = (state_52550[(15)]);
var inst_52212 = (state_52550[(16)]);
var inst_52221 = (state_52550[(18)]);
var inst_52225 = (state_52550[(48)]);
var inst_52238 = cljs.core.PersistentVector.EMPTY;
var inst_52239 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector);
var inst_52240 = (function (){var map__52189 = inst_52211;
var resolver_sym = inst_52212;
var input = inst_52213;
var e = inst_52215;
var key = inst_52217;
var params = inst_52218;
var trace_data = inst_52221;
var trace_id__21490__auto__ = inst_52225;
return ((function (map__52189,resolver_sym,input,e,key,params,trace_data,trace_id__21490__auto__,inst_52217,inst_52215,inst_52218,inst_52211,inst_52213,inst_52212,inst_52221,inst_52225,inst_52238,inst_52239,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__52179_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(cljs.core.second(p1__52179_SHARP_),input);
});
;})(map__52189,resolver_sym,input,e,key,params,trace_data,trace_id__21490__auto__,inst_52217,inst_52215,inst_52218,inst_52211,inst_52213,inst_52212,inst_52221,inst_52225,inst_52238,inst_52239,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_52241 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_52240);
var inst_52242 = (function (){var map__52189 = inst_52211;
var resolver_sym = inst_52212;
var input = inst_52213;
var e = inst_52215;
var key = inst_52217;
var params = inst_52218;
var trace_data = inst_52221;
var trace_id__21490__auto__ = inst_52225;
return ((function (map__52189,resolver_sym,input,e,key,params,trace_data,trace_id__21490__auto__,inst_52217,inst_52215,inst_52218,inst_52211,inst_52213,inst_52212,inst_52221,inst_52225,inst_52238,inst_52239,inst_52240,inst_52241,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__52180_SHARP_){
return com.wsscode.pathom.core.cache_contains_QMARK_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,cljs.core.second(p1__52180_SHARP_),params], null));
});
;})(map__52189,resolver_sym,input,e,key,params,trace_data,trace_id__21490__auto__,inst_52217,inst_52215,inst_52218,inst_52211,inst_52213,inst_52212,inst_52221,inst_52225,inst_52238,inst_52239,inst_52240,inst_52241,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_52243 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_52242);
var inst_52244 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(inst_52239,inst_52241,inst_52243);
var inst_52245 = (function (){var map__52189 = inst_52211;
var resolver_sym = inst_52212;
var input = inst_52213;
var e = inst_52215;
var key = inst_52217;
var params = inst_52218;
var trace_data = inst_52221;
var trace_id__21490__auto__ = inst_52225;
return ((function (map__52189,resolver_sym,input,e,key,params,trace_data,trace_id__21490__auto__,inst_52217,inst_52215,inst_52218,inst_52211,inst_52213,inst_52212,inst_52221,inst_52225,inst_52238,inst_52239,inst_52240,inst_52241,inst_52242,inst_52243,inst_52244,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__52178_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__52178_SHARP_,input);
});
;})(map__52189,resolver_sym,input,e,key,params,trace_data,trace_id__21490__auto__,inst_52217,inst_52215,inst_52218,inst_52211,inst_52213,inst_52212,inst_52221,inst_52225,inst_52238,inst_52239,inst_52240,inst_52241,inst_52242,inst_52243,inst_52244,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_52246 = com.wsscode.pathom.connect.map_async_serial(inst_52245,processing_sequence);
var state_52550__$1 = (function (){var statearr_52685 = state_52550;
(statearr_52685[(46)] = inst_52244);

(statearr_52685[(47)] = inst_52238);

return statearr_52685;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52550__$1,(21),inst_52246);
} else {
if((state_val_52551 === (52))){
var inst_52353 = (state_52550[(61)]);
var state_52550__$1 = state_52550;
var statearr_52686_55739 = state_52550__$1;
(statearr_52686_55739[(2)] = inst_52353);

(statearr_52686_55739[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (67))){
var inst_52443 = (state_52550[(27)]);
var inst_52217 = (state_52550[(11)]);
var inst_52215 = (state_52550[(12)]);
var inst_52413 = (state_52550[(9)]);
var inst_52218 = (state_52550[(13)]);
var inst_52211 = (state_52550[(14)]);
var inst_52213 = (state_52550[(15)]);
var inst_52212 = (state_52550[(16)]);
var inst_52445 = (state_52550[(28)]);
var inst_52221 = (state_52550[(18)]);
var inst_52412 = (state_52550[(19)]);
var inst_52438 = (state_52550[(26)]);
var inst_52421 = (state_52550[(21)]);
var inst_52452 = (function (){var input = inst_52213;
var items = inst_52413;
var items_map = inst_52412;
var linked_results = inst_52445;
var key = inst_52217;
var channels = inst_52421;
var _ = inst_52443;
var params = inst_52218;
var e = inst_52215;
var resolver_sym = inst_52212;
var trace_data = inst_52221;
var batch_result = inst_52438;
var map__52189 = inst_52211;
return ((function (input,items,items_map,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,map__52189,inst_52443,inst_52217,inst_52215,inst_52413,inst_52218,inst_52211,inst_52213,inst_52212,inst_52445,inst_52221,inst_52412,inst_52438,inst_52421,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap(cache){
var path__$1 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),(cljs.core.count(path) - (2)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path__$1,input,items,items_map,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,map__52189,inst_52443,inst_52217,inst_52215,inst_52413,inst_52218,inst_52211,inst_52213,inst_52212,inst_52445,inst_52221,inst_52412,inst_52438,inst_52421,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce(cache__$1,p__52687){
var vec__52688 = p__52687;
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52688,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52688,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__52688,item,result,path__$1,input,items,items_map,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,map__52189,inst_52443,inst_52217,inst_52215,inst_52413,inst_52218,inst_52211,inst_52213,inst_52212,inst_52445,inst_52221,inst_52412,inst_52438,inst_52421,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce_$_entity_path_inner_reduce(cache__$2,index){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cache__$2,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,index),((function (vec__52688,item,result,path__$1,input,items,items_map,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,map__52189,inst_52443,inst_52217,inst_52215,inst_52413,inst_52218,inst_52211,inst_52213,inst_52212,inst_52445,inst_52221,inst_52412,inst_52438,inst_52421,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__52181_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result,p1__52181_SHARP_], 0));
});})(vec__52688,item,result,path__$1,input,items,items_map,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,map__52189,inst_52443,inst_52217,inst_52215,inst_52413,inst_52218,inst_52211,inst_52213,inst_52212,inst_52445,inst_52221,inst_52412,inst_52438,inst_52421,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache))
);
});})(vec__52688,item,result,path__$1,input,items,items_map,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,map__52189,inst_52443,inst_52217,inst_52215,inst_52413,inst_52218,inst_52211,inst_52213,inst_52212,inst_52445,inst_52221,inst_52412,inst_52438,inst_52421,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache))
,cache__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_map,item));
});})(path__$1,input,items,items_map,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,map__52189,inst_52443,inst_52217,inst_52215,inst_52413,inst_52218,inst_52211,inst_52213,inst_52212,inst_52445,inst_52221,inst_52412,inst_52438,inst_52421,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache))
,cache,cljs.core.zipmap(items,batch_result));
});
;})(input,items,items_map,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,map__52189,inst_52443,inst_52217,inst_52215,inst_52413,inst_52218,inst_52211,inst_52213,inst_52212,inst_52445,inst_52221,inst_52412,inst_52438,inst_52421,state_val_52551,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_52453 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(entity_path_cache,inst_52452);
var state_52550__$1 = state_52550;
var statearr_52691_55757 = state_52550__$1;
(statearr_52691_55757[(2)] = inst_52453);

(statearr_52691_55757[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (71))){
var inst_52215 = (state_52550[(12)]);
var inst_52445 = (state_52550[(28)]);
var inst_52536 = (state_52550[(2)]);
var inst_52537 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52538 = cljs.core.PersistentHashMap.EMPTY;
var inst_52539 = [null,inst_52538];
var inst_52540 = (new cljs.core.PersistentVector(null,2,(5),inst_52537,inst_52539,null));
var inst_52541 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_52445,inst_52215,inst_52540);
var inst_52542 = cljs.core.second(inst_52541);
var state_52550__$1 = (function (){var statearr_52692 = state_52550;
(statearr_52692[(64)] = inst_52536);

return statearr_52692;
})();
var statearr_52693_55762 = state_52550__$1;
(statearr_52693_55762[(2)] = inst_52542);

(statearr_52693_55762[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (42))){
var inst_52318 = (state_52550[(60)]);
var inst_52325 = (state_52550[(2)]);
var inst_52326 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_52318,inst_52325);
var state_52550__$1 = state_52550;
var statearr_52694_55766 = state_52550__$1;
(statearr_52694_55766[(2)] = inst_52326);

(statearr_52694_55766[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (80))){
var inst_52479 = (state_52550[(25)]);
var inst_52486 = (state_52550[(2)]);
var inst_52487 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_52479,inst_52486);
var state_52550__$1 = state_52550;
var statearr_52695_55767 = state_52550__$1;
(statearr_52695_55767[(2)] = inst_52487);

(statearr_52695_55767[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (37))){
var inst_52319 = (state_52550[(53)]);
var state_52550__$1 = state_52550;
if(cljs.core.truth_(inst_52319)){
var statearr_52696_55770 = state_52550__$1;
(statearr_52696_55770[(1)] = (40));

} else {
var statearr_52697_55772 = state_52550__$1;
(statearr_52697_55772[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (63))){
var inst_52427 = (state_52550[(10)]);
var state_52550__$1 = state_52550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52550__$1,(66),inst_52427);
} else {
if((state_val_52551 === (8))){
var state_52550__$1 = state_52550;
var statearr_52698_55776 = state_52550__$1;
(statearr_52698_55776[(2)] = true);

(statearr_52698_55776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (49))){
var inst_52353 = (state_52550[(61)]);
var state_52550__$1 = state_52550;
if(cljs.core.truth_(inst_52353)){
var statearr_52699_55781 = state_52550__$1;
(statearr_52699_55781[(1)] = (52));

} else {
var statearr_52700_55782 = state_52550__$1;
(statearr_52700_55782[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52551 === (84))){
var inst_52495 = (state_52550[(33)]);
var inst_52499 = cljs.core.chunk_first(inst_52495);
var inst_52500 = cljs.core.chunk_rest(inst_52495);
var inst_52501 = cljs.core.count(inst_52499);
var inst_52462 = inst_52500;
var inst_52463 = inst_52499;
var inst_52464 = inst_52501;
var inst_52465 = (0);
var state_52550__$1 = (function (){var statearr_52701 = state_52550;
(statearr_52701[(29)] = inst_52462);

(statearr_52701[(7)] = inst_52464);

(statearr_52701[(8)] = inst_52465);

(statearr_52701[(23)] = inst_52463);

return statearr_52701;
})();
var statearr_52702_55791 = state_52550__$1;
(statearr_52702_55791[(2)] = null);

(statearr_52702_55791[(1)] = (70));


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
});})(c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache))
;
return ((function (switch__38786__auto__,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache){
return (function() {
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__38787__auto____0 = (function (){
var statearr_52703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52703[(0)] = com$wsscode$pathom$connect$parallel_batch_$_state_machine__38787__auto__);

(statearr_52703[(1)] = (1));

return statearr_52703;
});
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__38787__auto____1 = (function (state_52550){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_52550);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e52704){if((e52704 instanceof Object)){
var ex__38790__auto__ = e52704;
var statearr_52705_55799 = state_52550;
(statearr_52705_55799[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52704;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55800 = state_52550;
state_52550 = G__55800;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_batch_$_state_machine__38787__auto__ = function(state_52550){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__38787__auto____1.call(this,state_52550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_batch_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_batch_$_state_machine__38787__auto____0;
com$wsscode$pathom$connect$parallel_batch_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_batch_$_state_machine__38787__auto____1;
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache))
})();
var state__39086__auto__ = (function (){var statearr_52706 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_52706[(6)] = c__39084__auto__);

return statearr_52706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,map__52183,map__52183__$1,env,processing_sequence,path,entity_path_cache))
);

return c__39084__auto__;
});
com.wsscode.pathom.connect.parallel_reader = (function com$wsscode$pathom$connect$parallel_reader(p__52710){
var map__52711 = p__52710;
var map__52711__$1 = (((((!((map__52711 == null))))?(((((map__52711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52711):map__52711);
var env = map__52711__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52711__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52711__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52711__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var waiting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52711__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278));
var temp__5718__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__52713 = temp__5718__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52713,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52713,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),out,new cljs.core.Keyword("com.wsscode.pathom.parser","response-stream","com.wsscode.pathom.parser/response-stream",1785550292),(function (){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var params = com.wsscode.pathom.core.params(env);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),plan);
var c__39084__auto___55817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (state_53044){
var state_val_53045 = (state_53044[(1)]);
if((state_val_53045 === (65))){
var inst_52728 = (state_53044[(7)]);
var inst_52885 = (state_53044[(8)]);
var inst_52729 = (state_53044[(9)]);
var inst_52736 = (state_53044[(10)]);
var inst_52894 = (state_53044[(2)]);
var inst_52895 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_52729,inst_52885);
var tmp53046 = inst_52728;
var inst_52727 = inst_52736;
var inst_52728__$1 = tmp53046;
var inst_52729__$1 = inst_52895;
var state_53044__$1 = (function (){var statearr_53047 = state_53044;
(statearr_53047[(7)] = inst_52728__$1);

(statearr_53047[(11)] = inst_52727);

(statearr_53047[(9)] = inst_52729__$1);

(statearr_53047[(12)] = inst_52894);

return statearr_53047;
})();
var statearr_53048_55825 = state_53044__$1;
(statearr_53048_55825[(2)] = null);

(statearr_53048_55825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (70))){
var inst_52773 = (state_53044[(13)]);
var inst_52917 = (state_53044[(14)]);
var inst_52922 = com.wsscode.pathom.core.add_error(inst_52773,inst_52917);
var state_53044__$1 = state_53044;
var statearr_53049_55826 = state_53044__$1;
(statearr_53049_55826[(2)] = inst_52922);

(statearr_53049_55826[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (62))){
var inst_52743 = (state_53044[(15)]);
var inst_52875 = (state_53044[(16)]);
var inst_52772 = (state_53044[(17)]);
var inst_52885 = (state_53044[(8)]);
var inst_52773 = (state_53044[(13)]);
var inst_52885__$1 = com.wsscode.pathom.connect.output__GT_provides(inst_52772);
var inst_52886 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_52887 = [new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),key,inst_52743];
var inst_52888 = cljs.core.PersistentHashMap.fromArrays(inst_52886,inst_52887);
var inst_52889 = com.wsscode.pathom.trace.trace(inst_52773,inst_52888);
var inst_52890 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_52891 = [inst_52885__$1,inst_52875];
var inst_52892 = cljs.core.PersistentHashMap.fromArrays(inst_52890,inst_52891);
var state_53044__$1 = (function (){var statearr_53050 = state_53044;
(statearr_53050[(18)] = inst_52889);

(statearr_53050[(8)] = inst_52885__$1);

return statearr_53050;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53044__$1,(65),ch,inst_52892);
} else {
if((state_val_53045 === (74))){
var inst_52875 = (state_53044[(16)]);
var inst_52742 = (state_53044[(19)]);
var inst_52931 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_52875,inst_52742,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_53044__$1 = state_53044;
var statearr_53051_55829 = state_53044__$1;
(statearr_53051_55829[(2)] = inst_52931);

(statearr_53051_55829[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (7))){
var inst_52747 = (state_53044[(20)]);
var inst_52752 = inst_52747.cljs$lang$protocol_mask$partition0$;
var inst_52753 = (inst_52752 & (64));
var inst_52754 = inst_52747.cljs$core$ISeq$;
var inst_52755 = (cljs.core.PROTOCOL_SENTINEL === inst_52754);
var inst_52756 = ((inst_52753) || (inst_52755));
var state_53044__$1 = state_53044;
if(cljs.core.truth_(inst_52756)){
var statearr_53052_55831 = state_53044__$1;
(statearr_53052_55831[(1)] = (10));

} else {
var statearr_53053_55832 = state_53044__$1;
(statearr_53053_55832[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (59))){
var inst_52728 = (state_53044[(7)]);
var inst_52743 = (state_53044[(15)]);
var inst_52725 = (state_53044[(21)]);
var inst_52775 = (state_53044[(22)]);
var inst_52863 = (state_53044[(23)]);
var inst_52769 = (state_53044[(24)]);
var inst_52768 = (state_53044[(25)]);
var inst_52875 = (state_53044[(16)]);
var inst_52778 = (state_53044[(26)]);
var inst_52772 = (state_53044[(17)]);
var inst_52742 = (state_53044[(19)]);
var inst_52771 = (state_53044[(27)]);
var inst_52773 = (state_53044[(13)]);
var inst_52727 = (state_53044[(11)]);
var inst_52729 = (state_53044[(9)]);
var inst_52770 = (state_53044[(28)]);
var inst_52724 = (state_53044[(29)]);
var inst_52736 = (state_53044[(10)]);
var inst_52864 = (state_53044[(30)]);
var inst_52735 = (state_53044[(31)]);
var inst_52875__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_52863,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_52876 = (function (){var input = inst_52771;
var step = inst_52735;
var first__52722 = inst_52724;
var key_SINGLEQUOTE_ = inst_52742;
var response = inst_52875__$1;
var vec__52720 = plan;
var cache_QMARK_ = inst_52769;
var out_left = inst_52729;
var failed_resolvers = inst_52728;
var vec__52738 = inst_52735;
var batch_QMARK_ = inst_52770;
var seq__52732 = inst_52736;
var map__52741 = inst_52768;
var output = inst_52772;
var env__$2 = inst_52773;
var e = inst_52775;
var first__52733 = inst_52735;
var resolver_sym = inst_52743;
var G__52719 = inst_52727;
var trace_data = inst_52778;
var resolver = inst_52768;
var replan = inst_52864;
var tail = inst_52736;
var vec__52731 = inst_52727;
var seq__52721 = inst_52725;
return ((function (input,step,first__52722,key_SINGLEQUOTE_,response,vec__52720,cache_QMARK_,out_left,failed_resolvers,vec__52738,batch_QMARK_,seq__52732,map__52741,output,env__$2,e,first__52733,resolver_sym,G__52719,trace_data,resolver,replan,tail,vec__52731,seq__52721,inst_52728,inst_52743,inst_52725,inst_52775,inst_52863,inst_52769,inst_52768,inst_52875,inst_52778,inst_52772,inst_52742,inst_52771,inst_52773,inst_52727,inst_52729,inst_52770,inst_52724,inst_52736,inst_52864,inst_52735,inst_52875__$1,state_val_53045,c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (p1__52708_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__52708_SHARP_], 0));
});
;})(input,step,first__52722,key_SINGLEQUOTE_,response,vec__52720,cache_QMARK_,out_left,failed_resolvers,vec__52738,batch_QMARK_,seq__52732,map__52741,output,env__$2,e,first__52733,resolver_sym,G__52719,trace_data,resolver,replan,tail,vec__52731,seq__52721,inst_52728,inst_52743,inst_52725,inst_52775,inst_52863,inst_52769,inst_52768,inst_52875,inst_52778,inst_52772,inst_52742,inst_52771,inst_52773,inst_52727,inst_52729,inst_52770,inst_52724,inst_52736,inst_52864,inst_52735,inst_52875__$1,state_val_53045,c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_52877 = com.wsscode.pathom.core.swap_entity_BANG_(inst_52773,inst_52876);
var inst_52879 = cljs.core.contains_QMARK_(inst_52875__$1,inst_52742);
var inst_52880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52875__$1,inst_52742);
var inst_52881 = (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(inst_52880) : com.wsscode.pathom.core.break_values.call(null,inst_52880));
var inst_52882 = cljs.core.not(inst_52881);
var inst_52883 = ((inst_52879) && (inst_52882));
var state_53044__$1 = (function (){var statearr_53054 = state_53044;
(statearr_53054[(16)] = inst_52875__$1);

(statearr_53054[(32)] = inst_52877);

return statearr_53054;
})();
if(cljs.core.truth_(inst_52883)){
var statearr_53055_55842 = state_53044__$1;
(statearr_53055_55842[(1)] = (62));

} else {
var statearr_53056_55843 = state_53044__$1;
(statearr_53056_55843[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (86))){
var inst_52988 = (state_53044[(2)]);
var state_53044__$1 = state_53044;
var statearr_53057_55845 = state_53044__$1;
(statearr_53057_55845[(2)] = inst_52988);

(statearr_53057_55845[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (20))){
var inst_52786 = (state_53044[(33)]);
var inst_52791 = inst_52786.cljs$lang$protocol_mask$partition0$;
var inst_52792 = (inst_52791 & (64));
var inst_52793 = inst_52786.cljs$core$ISeq$;
var inst_52794 = (cljs.core.PROTOCOL_SENTINEL === inst_52793);
var inst_52795 = ((inst_52792) || (inst_52794));
var state_53044__$1 = state_53044;
if(cljs.core.truth_(inst_52795)){
var statearr_53058_55847 = state_53044__$1;
(statearr_53058_55847[(1)] = (23));

} else {
var statearr_53059_55849 = state_53044__$1;
(statearr_53059_55849[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (72))){
var inst_52875 = (state_53044[(16)]);
var inst_52742 = (state_53044[(19)]);
var inst_52925 = (state_53044[(2)]);
var inst_52926 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_52928 = cljs.core.contains_QMARK_(inst_52875,inst_52742);
var inst_52929 = (!(inst_52928));
var state_53044__$1 = (function (){var statearr_53060 = state_53044;
(statearr_53060[(34)] = inst_52925);

(statearr_53060[(35)] = inst_52926);

return statearr_53060;
})();
if(inst_52929){
var statearr_53061_55850 = state_53044__$1;
(statearr_53061_55850[(1)] = (74));

} else {
var statearr_53062_55853 = state_53044__$1;
(statearr_53062_55853[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (58))){
var inst_53036 = (state_53044[(2)]);
var state_53044__$1 = state_53044;
var statearr_53063_55855 = state_53044__$1;
(statearr_53063_55855[(2)] = inst_53036);

(statearr_53063_55855[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (60))){
var inst_52863 = (state_53044[(23)]);
var inst_52951 = com.wsscode.common.async_cljs.error_QMARK_(inst_52863);
var state_53044__$1 = state_53044;
if(inst_52951){
var statearr_53064_55856 = state_53044__$1;
(statearr_53064_55856[(1)] = (80));

} else {
var statearr_53065_55857 = state_53044__$1;
(statearr_53065_55857[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (27))){
var inst_52786 = (state_53044[(33)]);
var state_53044__$1 = state_53044;
var statearr_53066_55862 = state_53044__$1;
(statearr_53066_55862[(2)] = inst_52786);

(statearr_53066_55862[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (1))){
var inst_52723 = cljs.core.seq(plan);
var inst_52724 = cljs.core.first(inst_52723);
var inst_52725 = cljs.core.next(inst_52723);
var inst_52726 = cljs.core.PersistentHashMap.EMPTY;
var inst_52727 = plan;
var inst_52728 = inst_52726;
var inst_52729 = out;
var state_53044__$1 = (function (){var statearr_53067 = state_53044;
(statearr_53067[(7)] = inst_52728);

(statearr_53067[(21)] = inst_52725);

(statearr_53067[(11)] = inst_52727);

(statearr_53067[(9)] = inst_52729);

(statearr_53067[(29)] = inst_52724);

return statearr_53067;
})();
var statearr_53068_55870 = state_53044__$1;
(statearr_53068_55870[(2)] = null);

(statearr_53068_55870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (69))){
var inst_52947 = (state_53044[(2)]);
var state_53044__$1 = state_53044;
var statearr_53069_55874 = state_53044__$1;
(statearr_53069_55874[(2)] = inst_52947);

(statearr_53069_55874[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (24))){
var state_53044__$1 = state_53044;
var statearr_53070_55877 = state_53044__$1;
(statearr_53070_55877[(2)] = false);

(statearr_53070_55877[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (55))){
var inst_52854 = (state_53044[(2)]);
var state_53044__$1 = state_53044;
var statearr_53071_55878 = state_53044__$1;
(statearr_53071_55878[(2)] = inst_52854);


cljs.core.async.impl.ioc_helpers.process_exception(state_53044__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (85))){
var inst_52743 = (state_53044[(15)]);
var inst_52863 = (state_53044[(23)]);
var inst_52773 = (state_53044[(13)]);
var inst_52736 = (state_53044[(10)]);
var inst_52966 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_52967 = [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416),key,inst_52743];
var inst_52968 = cljs.core.PersistentHashMap.fromArrays(inst_52966,inst_52967);
var inst_52969 = com.wsscode.pathom.trace.trace(inst_52773,inst_52968);
var inst_52970 = com.wsscode.pathom.core.add_error(inst_52773,inst_52863);
var inst_52971 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_52972 = cljs.core.seq(inst_52736);
var state_53044__$1 = (function (){var statearr_53072 = state_53044;
(statearr_53072[(36)] = inst_52971);

(statearr_53072[(37)] = inst_52969);

(statearr_53072[(38)] = inst_52970);

return statearr_53072;
})();
if(inst_52972){
var statearr_53073_55881 = state_53044__$1;
(statearr_53073_55881[(1)] = (88));

} else {
var statearr_53074_55882 = state_53044__$1;
(statearr_53074_55882[(1)] = (89));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (39))){
var inst_52728 = (state_53044[(7)]);
var inst_52743 = (state_53044[(15)]);
var inst_52725 = (state_53044[(21)]);
var inst_52775 = (state_53044[(22)]);
var inst_52769 = (state_53044[(24)]);
var inst_52768 = (state_53044[(25)]);
var inst_52778 = (state_53044[(26)]);
var inst_52772 = (state_53044[(17)]);
var inst_52742 = (state_53044[(19)]);
var inst_52771 = (state_53044[(27)]);
var inst_52773 = (state_53044[(13)]);
var inst_52727 = (state_53044[(11)]);
var inst_52729 = (state_53044[(9)]);
var inst_52770 = (state_53044[(28)]);
var inst_52724 = (state_53044[(29)]);
var inst_52736 = (state_53044[(10)]);
var inst_52735 = (state_53044[(31)]);
var inst_52824 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_52778,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_52825 = com.wsscode.pathom.trace.trace(inst_52773,inst_52824);
var inst_52826 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52827 = [inst_52743,inst_52775,params];
var inst_52828 = (new cljs.core.PersistentVector(null,3,(5),inst_52826,inst_52827,null));
var inst_52829 = (function (){var input = inst_52771;
var step = inst_52735;
var first__52722 = inst_52724;
var key_SINGLEQUOTE_ = inst_52742;
var vec__52720 = plan;
var cache_QMARK_ = inst_52769;
var out_left = inst_52729;
var failed_resolvers = inst_52728;
var vec__52738 = inst_52735;
var batch_QMARK_ = inst_52770;
var seq__52732 = inst_52736;
var map__52741 = inst_52768;
var output = inst_52772;
var env__$2 = inst_52773;
var e = inst_52775;
var first__52733 = inst_52735;
var resolver_sym = inst_52743;
var G__52719 = inst_52727;
var trace_data = inst_52778;
var resolver = inst_52768;
var tail = inst_52736;
var vec__52731 = inst_52727;
var seq__52721 = inst_52725;
return ((function (input,step,first__52722,key_SINGLEQUOTE_,vec__52720,cache_QMARK_,out_left,failed_resolvers,vec__52738,batch_QMARK_,seq__52732,map__52741,output,env__$2,e,first__52733,resolver_sym,G__52719,trace_data,resolver,tail,vec__52731,seq__52721,inst_52728,inst_52743,inst_52725,inst_52775,inst_52769,inst_52768,inst_52778,inst_52772,inst_52742,inst_52771,inst_52773,inst_52727,inst_52729,inst_52770,inst_52724,inst_52736,inst_52735,inst_52824,inst_52825,inst_52826,inst_52827,inst_52828,state_val_53045,c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var c__39084__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto____$1,input,step,first__52722,key_SINGLEQUOTE_,vec__52720,cache_QMARK_,out_left,failed_resolvers,vec__52738,batch_QMARK_,seq__52732,map__52741,output,env__$2,e,first__52733,resolver_sym,G__52719,trace_data,resolver,tail,vec__52731,seq__52721,inst_52728,inst_52743,inst_52725,inst_52775,inst_52769,inst_52768,inst_52778,inst_52772,inst_52742,inst_52771,inst_52773,inst_52727,inst_52729,inst_52770,inst_52724,inst_52736,inst_52735,inst_52824,inst_52825,inst_52826,inst_52827,inst_52828,state_val_53045,c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto____$1,input,step,first__52722,key_SINGLEQUOTE_,vec__52720,cache_QMARK_,out_left,failed_resolvers,vec__52738,batch_QMARK_,seq__52732,map__52741,output,env__$2,e,first__52733,resolver_sym,G__52719,trace_data,resolver,tail,vec__52731,seq__52721,inst_52728,inst_52743,inst_52725,inst_52775,inst_52769,inst_52768,inst_52778,inst_52772,inst_52742,inst_52771,inst_52773,inst_52727,inst_52729,inst_52770,inst_52724,inst_52736,inst_52735,inst_52824,inst_52825,inst_52826,inst_52827,inst_52828,state_val_53045,c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (state_53095){
var state_val_53096 = (state_53095[(1)]);
if((state_val_53096 === (7))){
var inst_53086 = (state_53095[(7)]);
var inst_53086__$1 = (state_53095[(2)]);
var state_53095__$1 = (function (){var statearr_53097 = state_53095;
(statearr_53097[(7)] = inst_53086__$1);

return statearr_53097;
})();
if(cljs.core.truth_(inst_53086__$1)){
var statearr_53098_55902 = state_53095__$1;
(statearr_53098_55902[(1)] = (9));

} else {
var statearr_53099_55903 = state_53095__$1;
(statearr_53099_55903[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53096 === (1))){
var state_53095__$1 = state_53095;
var statearr_53100_55904 = state_53095__$1;
(statearr_53100_55904[(2)] = null);

(statearr_53100_55904[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53096 === (4))){
var inst_53079 = (state_53095[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53095,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_53079__$1 = com.wsscode.pathom.connect.call_resolver(env__$2,e);
var inst_53080 = com.wsscode.common.async_cljs.chan_QMARK_(inst_53079__$1);
var state_53095__$1 = (function (){var statearr_53101 = state_53095;
(statearr_53101[(8)] = inst_53079__$1);

return statearr_53101;
})();
if(inst_53080){
var statearr_53102_55906 = state_53095__$1;
(statearr_53102_55906[(1)] = (5));

} else {
var statearr_53103_55909 = state_53095__$1;
(statearr_53103_55909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53096 === (6))){
var inst_53079 = (state_53095[(8)]);
var state_53095__$1 = state_53095;
var statearr_53104_55913 = state_53095__$1;
(statearr_53104_55913[(2)] = inst_53079);

(statearr_53104_55913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53096 === (3))){
var inst_53075 = (state_53095[(2)]);
var state_53095__$1 = state_53095;
var statearr_53105_55914 = state_53095__$1;
(statearr_53105_55914[(2)] = inst_53075);


cljs.core.async.impl.ioc_helpers.process_exception(state_53095__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53096 === (2))){
var inst_53093 = (state_53095[(2)]);
var state_53095__$1 = state_53095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53095__$1,inst_53093);
} else {
if((state_val_53096 === (11))){
var inst_53091 = (state_53095[(2)]);
var state_53095__$1 = state_53095;
var statearr_53106_55915 = state_53095__$1;
(statearr_53106_55915[(2)] = inst_53091);


cljs.core.async.impl.ioc_helpers.process_exception(state_53095__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53096 === (9))){
var inst_53086 = (state_53095[(7)]);
var state_53095__$1 = state_53095;
var statearr_53107_55917 = state_53095__$1;
(statearr_53107_55917[(2)] = inst_53086);

(statearr_53107_55917[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53096 === (5))){
var inst_53079 = (state_53095[(8)]);
var state_53095__$1 = state_53095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53095__$1,(8),inst_53079);
} else {
if((state_val_53096 === (10))){
var inst_53089 = cljs.core.PersistentHashMap.EMPTY;
var state_53095__$1 = state_53095;
var statearr_53108_55923 = state_53095__$1;
(statearr_53108_55923[(2)] = inst_53089);

(statearr_53108_55923[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53096 === (8))){
var inst_53083 = (state_53095[(2)]);
var state_53095__$1 = state_53095;
var statearr_53109_55924 = state_53095__$1;
(statearr_53109_55924[(2)] = inst_53083);

(statearr_53109_55924[(1)] = (7));


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
});})(c__39084__auto____$1,input,step,first__52722,key_SINGLEQUOTE_,vec__52720,cache_QMARK_,out_left,failed_resolvers,vec__52738,batch_QMARK_,seq__52732,map__52741,output,env__$2,e,first__52733,resolver_sym,G__52719,trace_data,resolver,tail,vec__52731,seq__52721,inst_52728,inst_52743,inst_52725,inst_52775,inst_52769,inst_52768,inst_52778,inst_52772,inst_52742,inst_52771,inst_52773,inst_52727,inst_52729,inst_52770,inst_52724,inst_52736,inst_52735,inst_52824,inst_52825,inst_52826,inst_52827,inst_52828,state_val_53045,c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
;
return ((function (switch__38786__auto__,c__39084__auto____$1,input,step,first__52722,key_SINGLEQUOTE_,vec__52720,cache_QMARK_,out_left,failed_resolvers,vec__52738,batch_QMARK_,seq__52732,map__52741,output,env__$2,e,first__52733,resolver_sym,G__52719,trace_data,resolver,tail,vec__52731,seq__52721,inst_52728,inst_52743,inst_52725,inst_52775,inst_52769,inst_52768,inst_52778,inst_52772,inst_52742,inst_52771,inst_52773,inst_52727,inst_52729,inst_52770,inst_52724,inst_52736,inst_52735,inst_52824,inst_52825,inst_52826,inst_52827,inst_52828,state_val_53045,c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto____0 = (function (){
var statearr_53110 = [null,null,null,null,null,null,null,null,null];
(statearr_53110[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto__);

(statearr_53110[(1)] = (1));

return statearr_53110;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto____1 = (function (state_53095){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_53095);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e53111){if((e53111 instanceof Object)){
var ex__38790__auto__ = e53111;
var statearr_53112_55927 = state_53095;
(statearr_53112_55927[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53111;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55928 = state_53095;
state_53095 = G__55928;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto__ = function(state_53095){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto____1.call(this,state_53095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto____$1,input,step,first__52722,key_SINGLEQUOTE_,vec__52720,cache_QMARK_,out_left,failed_resolvers,vec__52738,batch_QMARK_,seq__52732,map__52741,output,env__$2,e,first__52733,resolver_sym,G__52719,trace_data,resolver,tail,vec__52731,seq__52721,inst_52728,inst_52743,inst_52725,inst_52775,inst_52769,inst_52768,inst_52778,inst_52772,inst_52742,inst_52771,inst_52773,inst_52727,inst_52729,inst_52770,inst_52724,inst_52736,inst_52735,inst_52824,inst_52825,inst_52826,inst_52827,inst_52828,state_val_53045,c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var state__39086__auto__ = (function (){var statearr_53113 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_53113[(6)] = c__39084__auto____$1);

return statearr_53113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto____$1,input,step,first__52722,key_SINGLEQUOTE_,vec__52720,cache_QMARK_,out_left,failed_resolvers,vec__52738,batch_QMARK_,seq__52732,map__52741,output,env__$2,e,first__52733,resolver_sym,G__52719,trace_data,resolver,tail,vec__52731,seq__52721,inst_52728,inst_52743,inst_52725,inst_52775,inst_52769,inst_52768,inst_52778,inst_52772,inst_52742,inst_52771,inst_52773,inst_52727,inst_52729,inst_52770,inst_52724,inst_52736,inst_52735,inst_52824,inst_52825,inst_52826,inst_52827,inst_52828,state_val_53045,c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
);

return c__39084__auto____$1;
});
;})(input,step,first__52722,key_SINGLEQUOTE_,vec__52720,cache_QMARK_,out_left,failed_resolvers,vec__52738,batch_QMARK_,seq__52732,map__52741,output,env__$2,e,first__52733,resolver_sym,G__52719,trace_data,resolver,tail,vec__52731,seq__52721,inst_52728,inst_52743,inst_52725,inst_52775,inst_52769,inst_52768,inst_52778,inst_52772,inst_52742,inst_52771,inst_52773,inst_52727,inst_52729,inst_52770,inst_52724,inst_52736,inst_52735,inst_52824,inst_52825,inst_52826,inst_52827,inst_52828,state_val_53045,c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_52830 = com.wsscode.pathom.core.cached_async(inst_52773,inst_52828,inst_52829);
var state_53044__$1 = (function (){var statearr_53114 = state_53044;
(statearr_53114[(39)] = inst_52825);

return statearr_53114;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53044__$1,(42),inst_52830);
} else {
if((state_val_53045 === (88))){
var inst_52974 = [key];
var inst_52975 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_52976 = cljs.core.PersistentHashMap.fromArrays(inst_52974,inst_52975);
var state_53044__$1 = state_53044;
var statearr_53115_55931 = state_53044__$1;
(statearr_53115_55931[(2)] = inst_52976);

(statearr_53115_55931[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (46))){
var inst_52856 = (state_53044[(2)]);
var state_53044__$1 = state_53044;
var statearr_53116_55932 = state_53044__$1;
(statearr_53116_55932[(2)] = inst_52856);

(statearr_53116_55932[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (4))){
var inst_52743 = (state_53044[(15)]);
var inst_52747 = (state_53044[(20)]);
var inst_52735 = (state_53044[(31)]);
var inst_52742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52735,(0),null);
var inst_52743__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52735,(1),null);
var inst_52744 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52745 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),inst_52743__$1];
var inst_52746 = (new cljs.core.PersistentVector(null,2,(5),inst_52744,inst_52745,null));
var inst_52747__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_52746);
var inst_52749 = (inst_52747__$1 == null);
var inst_52750 = cljs.core.not(inst_52749);
var state_53044__$1 = (function (){var statearr_53117 = state_53044;
(statearr_53117[(15)] = inst_52743__$1);

(statearr_53117[(20)] = inst_52747__$1);

(statearr_53117[(19)] = inst_52742);

return statearr_53117;
})();
if(inst_52750){
var statearr_53118_55935 = state_53044__$1;
(statearr_53118_55935[(1)] = (7));

} else {
var statearr_53119_55936 = state_53044__$1;
(statearr_53119_55936[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (77))){
var inst_52934 = (state_53044[(40)]);
var inst_52742 = (state_53044[(19)]);
var inst_52937 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_52934,inst_52742,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882));
var state_53044__$1 = state_53044;
var statearr_53120_55938 = state_53044__$1;
(statearr_53120_55938[(2)] = inst_52937);

(statearr_53120_55938[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (95))){
var inst_52998 = (state_53044[(41)]);
var inst_53003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52998,(0),null);
var inst_53004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52998,(1),null);
var inst_53005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52998,(2),null);
var inst_52727 = inst_53003;
var inst_52728 = inst_53004;
var inst_52729 = inst_53005;
var state_53044__$1 = (function (){var statearr_53121 = state_53044;
(statearr_53121[(7)] = inst_52728);

(statearr_53121[(11)] = inst_52727);

(statearr_53121[(9)] = inst_52729);

return statearr_53121;
})();
var statearr_53122_55940 = state_53044__$1;
(statearr_53122_55940[(2)] = null);

(statearr_53122_55940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (54))){
var inst_52852 = cljs.core.PersistentHashMap.EMPTY;
var state_53044__$1 = state_53044;
var statearr_53123_55942 = state_53044__$1;
(statearr_53123_55942[(2)] = inst_52852);

(statearr_53123_55942[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (92))){
var state_53044__$1 = state_53044;
var statearr_53124_55945 = state_53044__$1;
(statearr_53124_55945[(2)] = null);

(statearr_53124_55945[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (15))){
var inst_52743 = (state_53044[(15)]);
var inst_52775 = (state_53044[(22)]);
var inst_52768 = (state_53044[(25)]);
var inst_52742 = (state_53044[(19)]);
var inst_52771 = (state_53044[(27)]);
var inst_52773 = (state_53044[(13)]);
var inst_52768__$1 = (state_53044[(2)]);
var inst_52769 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_52768__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_52770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52768__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_52771__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52768__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_52772 = com.wsscode.pathom.connect.resolver__GT_output(env__$1,inst_52743);
var inst_52773__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_52768__$1);
var inst_52774 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_52773__$1);
var inst_52775__$1 = cljs.core.select_keys(inst_52774,inst_52771__$1);
var inst_52776 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_52777 = [key,inst_52743,inst_52775__$1];
var inst_52778 = cljs.core.PersistentHashMap.fromArrays(inst_52776,inst_52777);
var inst_52779 = cljs.core.contains_QMARK_(waiting,inst_52742);
var state_53044__$1 = (function (){var statearr_53125 = state_53044;
(statearr_53125[(22)] = inst_52775__$1);

(statearr_53125[(24)] = inst_52769);

(statearr_53125[(25)] = inst_52768__$1);

(statearr_53125[(26)] = inst_52778);

(statearr_53125[(17)] = inst_52772);

(statearr_53125[(27)] = inst_52771__$1);

(statearr_53125[(13)] = inst_52773__$1);

(statearr_53125[(28)] = inst_52770);

return statearr_53125;
})();
if(inst_52779){
var statearr_53126_55953 = state_53044__$1;
(statearr_53126_55953[(1)] = (16));

} else {
var statearr_53127_55955 = state_53044__$1;
(statearr_53127_55955[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (48))){
var inst_52775 = (state_53044[(22)]);
var inst_52773 = (state_53044[(13)]);
var inst_52841 = (state_53044[(42)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53044,(47),new cljs.core.Keyword(null,"default","default",-1987822328),null,(46));
var inst_52841__$1 = com.wsscode.pathom.connect.call_resolver(inst_52773,inst_52775);
var inst_52842 = com.wsscode.common.async_cljs.chan_QMARK_(inst_52841__$1);
var state_53044__$1 = (function (){var statearr_53128 = state_53044;
(statearr_53128[(42)] = inst_52841__$1);

return statearr_53128;
})();
if(inst_52842){
var statearr_53129_55960 = state_53044__$1;
(statearr_53129_55960[(1)] = (49));

} else {
var statearr_53130_55962 = state_53044__$1;
(statearr_53130_55962[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (50))){
var inst_52841 = (state_53044[(42)]);
var state_53044__$1 = state_53044;
var statearr_53131_55964 = state_53044__$1;
(statearr_53131_55964[(2)] = inst_52841);

(statearr_53131_55964[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (75))){
var inst_52875 = (state_53044[(16)]);
var state_53044__$1 = state_53044;
var statearr_53132_55965 = state_53044__$1;
(statearr_53132_55965[(2)] = inst_52875);

(statearr_53132_55965[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (21))){
var state_53044__$1 = state_53044;
var statearr_53133_55967 = state_53044__$1;
(statearr_53133_55967[(2)] = false);

(statearr_53133_55967[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (31))){
var inst_52812 = (state_53044[(2)]);
var state_53044__$1 = state_53044;
var statearr_53134_55968 = state_53044__$1;
(statearr_53134_55968[(2)] = inst_52812);

(statearr_53134_55968[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (32))){
var inst_52770 = (state_53044[(28)]);
var state_53044__$1 = state_53044;
if(cljs.core.truth_(inst_52770)){
var statearr_53135_55971 = state_53044__$1;
(statearr_53135_55971[(1)] = (35));

} else {
var statearr_53136_55973 = state_53044__$1;
(statearr_53136_55973[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (40))){
var inst_52834 = (state_53044[(2)]);
var state_53044__$1 = state_53044;
var statearr_53138_55974 = state_53044__$1;
(statearr_53138_55974[(2)] = inst_52834);

(statearr_53138_55974[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (91))){
var inst_52863 = (state_53044[(23)]);
var inst_52864 = (state_53044[(30)]);
var inst_52991 = cljs.core.PersistentHashMap.EMPTY;
var inst_52992 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_52993 = [inst_52863];
var inst_52994 = cljs.core.PersistentHashMap.fromArrays(inst_52992,inst_52993);
var inst_52995 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_52994);
var inst_52996 = (inst_52864.cljs$core$IFn$_invoke$arity$2 ? inst_52864.cljs$core$IFn$_invoke$arity$2(inst_52991,inst_52995) : inst_52864.call(null,inst_52991,inst_52995));
var state_53044__$1 = state_53044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53044__$1,(94),inst_52996);
} else {
if((state_val_53045 === (56))){
var inst_52728 = (state_53044[(7)]);
var inst_52773 = (state_53044[(13)]);
var inst_52729 = (state_53044[(9)]);
var inst_52736 = (state_53044[(10)]);
var inst_52867 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_52773);
var inst_52868 = cljs.core.keys(inst_52867);
var inst_52869 = cljs.core.set(inst_52868);
var inst_52870 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_52729,inst_52869);
var tmp53137 = inst_52728;
var inst_52727 = inst_52736;
var inst_52728__$1 = tmp53137;
var inst_52729__$1 = inst_52870;
var state_53044__$1 = (function (){var statearr_53139 = state_53044;
(statearr_53139[(7)] = inst_52728__$1);

(statearr_53139[(11)] = inst_52727);

(statearr_53139[(9)] = inst_52729__$1);

return statearr_53139;
})();
var statearr_53140_55980 = state_53044__$1;
(statearr_53140_55980[(2)] = null);

(statearr_53140_55980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (33))){
var state_53044__$1 = state_53044;
var statearr_53141_55982 = state_53044__$1;
(statearr_53141_55982[(1)] = (43));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (13))){
var inst_52747 = (state_53044[(20)]);
var inst_52765 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52747);
var state_53044__$1 = state_53044;
var statearr_53143_55984 = state_53044__$1;
(statearr_53143_55984[(2)] = inst_52765);

(statearr_53143_55984[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (22))){
var inst_52802 = (state_53044[(2)]);
var state_53044__$1 = state_53044;
if(cljs.core.truth_(inst_52802)){
var statearr_53144_55985 = state_53044__$1;
(statearr_53144_55985[(1)] = (26));

} else {
var statearr_53145_55986 = state_53044__$1;
(statearr_53145_55986[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (90))){
var inst_52971 = (state_53044[(36)]);
var inst_52863 = (state_53044[(23)]);
var inst_52981 = (state_53044[(2)]);
var inst_52982 = [out,inst_52863,inst_52981];
var inst_52983 = cljs.core.PersistentHashMap.fromArrays(inst_52971,inst_52982);
var state_53044__$1 = state_53044;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53044__$1,(87),ch,inst_52983);
} else {
if((state_val_53045 === (36))){
var inst_52770 = (state_53044[(28)]);
var state_53044__$1 = state_53044;
var statearr_53146_55989 = state_53044__$1;
(statearr_53146_55989[(2)] = inst_52770);

(statearr_53146_55989[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (41))){
var inst_52822 = (state_53044[(2)]);
var state_53044__$1 = state_53044;
var statearr_53147_55996 = state_53044__$1;
(statearr_53147_55996[(2)] = inst_52822);

(statearr_53147_55996[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (89))){
var inst_52729 = (state_53044[(9)]);
var inst_52978 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882));
var inst_52979 = cljs.core.zipmap(inst_52729,inst_52978);
var state_53044__$1 = state_53044;
var statearr_53148_55999 = state_53044__$1;
(statearr_53148_55999[(2)] = inst_52979);

(statearr_53148_55999[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (43))){
var state_53044__$1 = state_53044;
var statearr_53149_56000 = state_53044__$1;
(statearr_53149_56000[(2)] = null);

(statearr_53149_56000[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (61))){
var inst_53034 = (state_53044[(2)]);
var state_53044__$1 = state_53044;
var statearr_53150_56005 = state_53044__$1;
(statearr_53150_56005[(2)] = inst_53034);

(statearr_53150_56005[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (29))){
var inst_52808 = (state_53044[(43)]);
var state_53044__$1 = state_53044;
var statearr_53151_56009 = state_53044__$1;
(statearr_53151_56009[(2)] = inst_52808);

(statearr_53151_56009[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (44))){
var state_53044__$1 = state_53044;
var statearr_53152_56011 = state_53044__$1;
(statearr_53152_56011[(2)] = null);

(statearr_53152_56011[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (93))){
var inst_53030 = (state_53044[(2)]);
var state_53044__$1 = state_53044;
var statearr_53153_56012 = state_53044__$1;
(statearr_53153_56012[(2)] = inst_53030);

(statearr_53153_56012[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (6))){
var inst_53040 = (state_53044[(2)]);
var state_53044__$1 = state_53044;
var statearr_53154_56013 = state_53044__$1;
(statearr_53154_56013[(2)] = inst_53040);

(statearr_53154_56013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (28))){
var inst_52808 = (state_53044[(43)]);
var inst_52807 = (state_53044[(2)]);
var inst_52808__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52807,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973));
var state_53044__$1 = (function (){var statearr_53155 = state_53044;
(statearr_53155[(43)] = inst_52808__$1);

return statearr_53155;
})();
if(cljs.core.truth_(inst_52808__$1)){
var statearr_53156_56015 = state_53044__$1;
(statearr_53156_56015[(1)] = (29));

} else {
var statearr_53157_56016 = state_53044__$1;
(statearr_53157_56016[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (64))){
var inst_52949 = (state_53044[(2)]);
var state_53044__$1 = state_53044;
var statearr_53158_56017 = state_53044__$1;
(statearr_53158_56017[(2)] = inst_52949);

(statearr_53158_56017[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (51))){
var inst_52849 = (state_53044[(44)]);
var inst_52849__$1 = (state_53044[(2)]);
var state_53044__$1 = (function (){var statearr_53159 = state_53044;
(statearr_53159[(44)] = inst_52849__$1);

return statearr_53159;
})();
if(cljs.core.truth_(inst_52849__$1)){
var statearr_53160_56020 = state_53044__$1;
(statearr_53160_56020[(1)] = (53));

} else {
var statearr_53161_56021 = state_53044__$1;
(statearr_53161_56021[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (25))){
var inst_52799 = (state_53044[(2)]);
var state_53044__$1 = state_53044;
var statearr_53162_56023 = state_53044__$1;
(statearr_53162_56023[(2)] = inst_52799);

(statearr_53162_56023[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (34))){
var inst_52861 = (state_53044[(2)]);
var state_53044__$1 = state_53044;
var statearr_53163_56024 = state_53044__$1;
(statearr_53163_56024[(2)] = inst_52861);

(statearr_53163_56024[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (17))){
var inst_52769 = (state_53044[(24)]);
var state_53044__$1 = state_53044;
if(cljs.core.truth_(inst_52769)){
var statearr_53164_56026 = state_53044__$1;
(statearr_53164_56026[(1)] = (32));

} else {
var statearr_53165_56027 = state_53044__$1;
(statearr_53165_56027[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (3))){
var inst_53042 = (state_53044[(2)]);
var state_53044__$1 = state_53044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53044__$1,inst_53042);
} else {
if((state_val_53045 === (12))){
var inst_52760 = (state_53044[(2)]);
var state_53044__$1 = state_53044;
var statearr_53166_56030 = state_53044__$1;
(statearr_53166_56030[(2)] = inst_52760);

(statearr_53166_56030[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (2))){
var inst_52727 = (state_53044[(11)]);
var inst_52735 = (state_53044[(31)]);
var inst_52734 = cljs.core.seq(inst_52727);
var inst_52735__$1 = cljs.core.first(inst_52734);
var inst_52736 = cljs.core.next(inst_52734);
var state_53044__$1 = (function (){var statearr_53167 = state_53044;
(statearr_53167[(10)] = inst_52736);

(statearr_53167[(31)] = inst_52735__$1);

return statearr_53167;
})();
if(cljs.core.truth_(inst_52735__$1)){
var statearr_53168_56032 = state_53044__$1;
(statearr_53168_56032[(1)] = (4));

} else {
var statearr_53169_56034 = state_53044__$1;
(statearr_53169_56034[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (66))){
var inst_52904 = (state_53044[(45)]);
var inst_52904__$1 = (state_53044[(2)]);
var state_53044__$1 = (function (){var statearr_53170 = state_53044;
(statearr_53170[(45)] = inst_52904__$1);

return statearr_53170;
})();
if(cljs.core.truth_(inst_52904__$1)){
var statearr_53171_56035 = state_53044__$1;
(statearr_53171_56035[(1)] = (67));

} else {
var statearr_53172_56036 = state_53044__$1;
(statearr_53172_56036[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (23))){
var state_53044__$1 = state_53044;
var statearr_53173_56039 = state_53044__$1;
(statearr_53173_56039[(2)] = true);

(statearr_53173_56039[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (47))){
var inst_52837 = (state_53044[(2)]);
var state_53044__$1 = state_53044;
var statearr_53174_56040 = state_53044__$1;
(statearr_53174_56040[(2)] = inst_52837);


cljs.core.async.impl.ioc_helpers.process_exception(state_53044__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (35))){
var state_53044__$1 = state_53044;
var statearr_53175_56042 = state_53044__$1;
(statearr_53175_56042[(2)] = processing_sequence);

(statearr_53175_56042[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (82))){
var inst_53032 = (state_53044[(2)]);
var state_53044__$1 = state_53044;
var statearr_53176_56043 = state_53044__$1;
(statearr_53176_56043[(2)] = inst_53032);

(statearr_53176_56043[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (76))){
var inst_52736 = (state_53044[(10)]);
var inst_52934 = (state_53044[(2)]);
var inst_52935 = cljs.core.seq(inst_52736);
var state_53044__$1 = (function (){var statearr_53177 = state_53044;
(statearr_53177[(40)] = inst_52934);

return statearr_53177;
})();
if(inst_52935){
var statearr_53178_56044 = state_53044__$1;
(statearr_53178_56044[(1)] = (77));

} else {
var statearr_53179_56045 = state_53044__$1;
(statearr_53179_56045[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (97))){
var inst_53027 = (state_53044[(2)]);
var state_53044__$1 = state_53044;
var statearr_53180_56049 = state_53044__$1;
(statearr_53180_56049[(2)] = inst_53027);

(statearr_53180_56049[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (19))){
var inst_52786 = (state_53044[(33)]);
var inst_52786__$1 = (state_53044[(2)]);
var inst_52788 = (inst_52786__$1 == null);
var inst_52789 = cljs.core.not(inst_52788);
var state_53044__$1 = (function (){var statearr_53181 = state_53044;
(statearr_53181[(33)] = inst_52786__$1);

return statearr_53181;
})();
if(inst_52789){
var statearr_53182_56051 = state_53044__$1;
(statearr_53182_56051[(1)] = (20));

} else {
var statearr_53183_56052 = state_53044__$1;
(statearr_53183_56052[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (57))){
var inst_52863 = (state_53044[(23)]);
var inst_52873 = cljs.core.map_QMARK_(inst_52863);
var state_53044__$1 = state_53044;
if(inst_52873){
var statearr_53184_56057 = state_53044__$1;
(statearr_53184_56057[(1)] = (59));

} else {
var statearr_53185_56059 = state_53044__$1;
(statearr_53185_56059[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (68))){
var inst_52728 = (state_53044[(7)]);
var inst_52743 = (state_53044[(15)]);
var inst_52725 = (state_53044[(21)]);
var inst_52775 = (state_53044[(22)]);
var inst_52769 = (state_53044[(24)]);
var inst_52768 = (state_53044[(25)]);
var inst_52875 = (state_53044[(16)]);
var inst_52778 = (state_53044[(26)]);
var inst_52772 = (state_53044[(17)]);
var inst_52742 = (state_53044[(19)]);
var inst_52771 = (state_53044[(27)]);
var inst_52773 = (state_53044[(13)]);
var inst_52917 = (state_53044[(14)]);
var inst_52727 = (state_53044[(11)]);
var inst_52729 = (state_53044[(9)]);
var inst_52904 = (state_53044[(45)]);
var inst_52770 = (state_53044[(28)]);
var inst_52724 = (state_53044[(29)]);
var inst_52736 = (state_53044[(10)]);
var inst_52864 = (state_53044[(30)]);
var inst_52735 = (state_53044[(31)]);
var inst_52914 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_52915 = [inst_52875,inst_52742];
var inst_52916 = cljs.core.PersistentHashMap.fromArrays(inst_52914,inst_52915);
var inst_52917__$1 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_52916);
var inst_52918 = (function (){var input = inst_52771;
var step = inst_52735;
var first__52722 = inst_52724;
var key_SINGLEQUOTE_ = inst_52742;
var response = inst_52875;
var vec__52720 = plan;
var cache_QMARK_ = inst_52769;
var out_left = inst_52729;
var failed_resolvers = inst_52728;
var vec__52738 = inst_52735;
var temp__5718__auto____$1 = inst_52904;
var err = inst_52917__$1;
var batch_QMARK_ = inst_52770;
var seq__52732 = inst_52736;
var map__52741 = inst_52768;
var output = inst_52772;
var env__$2 = inst_52773;
var e = inst_52775;
var first__52733 = inst_52735;
var resolver_sym = inst_52743;
var G__52719 = inst_52727;
var trace_data = inst_52778;
var resolver = inst_52768;
var replan = inst_52864;
var tail = inst_52736;
var vec__52731 = inst_52727;
var seq__52721 = inst_52725;
return ((function (input,step,first__52722,key_SINGLEQUOTE_,response,vec__52720,cache_QMARK_,out_left,failed_resolvers,vec__52738,temp__5718__auto____$1,err,batch_QMARK_,seq__52732,map__52741,output,env__$2,e,first__52733,resolver_sym,G__52719,trace_data,resolver,replan,tail,vec__52731,seq__52721,inst_52728,inst_52743,inst_52725,inst_52775,inst_52769,inst_52768,inst_52875,inst_52778,inst_52772,inst_52742,inst_52771,inst_52773,inst_52917,inst_52727,inst_52729,inst_52904,inst_52770,inst_52724,inst_52736,inst_52864,inst_52735,inst_52914,inst_52915,inst_52916,inst_52917__$1,state_val_53045,c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (p1__52709_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__52709_SHARP_], 0));
});
;})(input,step,first__52722,key_SINGLEQUOTE_,response,vec__52720,cache_QMARK_,out_left,failed_resolvers,vec__52738,temp__5718__auto____$1,err,batch_QMARK_,seq__52732,map__52741,output,env__$2,e,first__52733,resolver_sym,G__52719,trace_data,resolver,replan,tail,vec__52731,seq__52721,inst_52728,inst_52743,inst_52725,inst_52775,inst_52769,inst_52768,inst_52875,inst_52778,inst_52772,inst_52742,inst_52771,inst_52773,inst_52917,inst_52727,inst_52729,inst_52904,inst_52770,inst_52724,inst_52736,inst_52864,inst_52735,inst_52914,inst_52915,inst_52916,inst_52917__$1,state_val_53045,c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_52919 = com.wsscode.pathom.core.swap_entity_BANG_(inst_52773,inst_52918);
var inst_52920 = cljs.core.seq(inst_52736);
var state_53044__$1 = (function (){var statearr_53186 = state_53044;
(statearr_53186[(14)] = inst_52917__$1);

(statearr_53186[(46)] = inst_52919);

return statearr_53186;
})();
if(inst_52920){
var statearr_53187_56073 = state_53044__$1;
(statearr_53187_56073[(1)] = (70));

} else {
var statearr_53188_56076 = state_53044__$1;
(statearr_53188_56076[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (11))){
var state_53044__$1 = state_53044;
var statearr_53189_56078 = state_53044__$1;
(statearr_53189_56078[(2)] = false);

(statearr_53189_56078[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (9))){
var inst_52763 = (state_53044[(2)]);
var state_53044__$1 = state_53044;
if(cljs.core.truth_(inst_52763)){
var statearr_53190_56079 = state_53044__$1;
(statearr_53190_56079[(1)] = (13));

} else {
var statearr_53191_56081 = state_53044__$1;
(statearr_53191_56081[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (5))){
var inst_53038 = cljs.core.async.close_BANG_(ch);
var state_53044__$1 = state_53044;
var statearr_53192_56082 = state_53044__$1;
(statearr_53192_56082[(2)] = inst_53038);

(statearr_53192_56082[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (83))){
var inst_52956 = (state_53044[(47)]);
var inst_52956__$1 = (state_53044[(2)]);
var state_53044__$1 = (function (){var statearr_53193 = state_53044;
(statearr_53193[(47)] = inst_52956__$1);

return statearr_53193;
})();
if(cljs.core.truth_(inst_52956__$1)){
var statearr_53194_56086 = state_53044__$1;
(statearr_53194_56086[(1)] = (84));

} else {
var statearr_53195_56087 = state_53044__$1;
(statearr_53195_56087[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (14))){
var inst_52747 = (state_53044[(20)]);
var state_53044__$1 = state_53044;
var statearr_53196_56088 = state_53044__$1;
(statearr_53196_56088[(2)] = inst_52747);

(statearr_53196_56088[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (45))){
var inst_52859 = (state_53044[(2)]);
var state_53044__$1 = state_53044;
var statearr_53197_56089 = state_53044__$1;
(statearr_53197_56089[(2)] = inst_52859);

(statearr_53197_56089[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (53))){
var inst_52849 = (state_53044[(44)]);
var state_53044__$1 = state_53044;
var statearr_53198_56090 = state_53044__$1;
(statearr_53198_56090[(2)] = inst_52849);

(statearr_53198_56090[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (78))){
var inst_52934 = (state_53044[(40)]);
var state_53044__$1 = state_53044;
var statearr_53199_56091 = state_53044__$1;
(statearr_53199_56091[(2)] = inst_52934);

(statearr_53199_56091[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (26))){
var inst_52786 = (state_53044[(33)]);
var inst_52804 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52786);
var state_53044__$1 = state_53044;
var statearr_53200_56092 = state_53044__$1;
(statearr_53200_56092[(2)] = inst_52804);

(statearr_53200_56092[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (16))){
var inst_52778 = (state_53044[(26)]);
var inst_52742 = (state_53044[(19)]);
var inst_52773 = (state_53044[(13)]);
var inst_52781 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inst_52778,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","waiting-resolver","com.wsscode.pathom.connect/waiting-resolver",-321792495),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","waiting-key","com.wsscode.pathom.connect/waiting-key",261572653),inst_52742], 0));
var inst_52782 = com.wsscode.pathom.trace.trace(inst_52773,inst_52781);
var inst_52784 = com.wsscode.pathom.parser.watch_pending_key(inst_52773,inst_52742);
var state_53044__$1 = (function (){var statearr_53201 = state_53044;
(statearr_53201[(48)] = inst_52782);

return statearr_53201;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53044__$1,(19),inst_52784);
} else {
if((state_val_53045 === (81))){
var state_53044__$1 = state_53044;
var statearr_53202_56098 = state_53044__$1;
(statearr_53202_56098[(1)] = (91));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (79))){
var inst_52917 = (state_53044[(14)]);
var inst_52926 = (state_53044[(35)]);
var inst_52940 = (state_53044[(2)]);
var inst_52941 = [out,inst_52917,inst_52940];
var inst_52942 = cljs.core.PersistentHashMap.fromArrays(inst_52926,inst_52941);
var state_53044__$1 = state_53044;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53044__$1,(73),ch,inst_52942);
} else {
if((state_val_53045 === (38))){
var inst_52773 = (state_53044[(13)]);
var inst_52820 = com.wsscode.pathom.connect.parallel_batch(inst_52773);
var state_53044__$1 = state_53044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53044__$1,(41),inst_52820);
} else {
if((state_val_53045 === (98))){
var inst_53024 = (state_53044[(2)]);
var inst_53025 = cljs.core.async.close_BANG_(ch);
var state_53044__$1 = (function (){var statearr_53204 = state_53044;
(statearr_53204[(49)] = inst_53024);

return statearr_53204;
})();
var statearr_53205_56104 = state_53044__$1;
(statearr_53205_56104[(2)] = inst_53025);

(statearr_53205_56104[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (87))){
var inst_52985 = (state_53044[(2)]);
var inst_52986 = cljs.core.async.close_BANG_(ch);
var state_53044__$1 = (function (){var statearr_53206 = state_53044;
(statearr_53206[(50)] = inst_52985);

return statearr_53206;
})();
var statearr_53207_56105 = state_53044__$1;
(statearr_53207_56105[(2)] = inst_52986);

(statearr_53207_56105[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (30))){
var state_53044__$1 = state_53044;
var statearr_53208_56106 = state_53044__$1;
(statearr_53208_56106[(2)] = new cljs.core.Keyword("com.wsscode.pathom.connect","watch-ready","com.wsscode.pathom.connect/watch-ready",943560359));

(statearr_53208_56106[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (73))){
var inst_52944 = (state_53044[(2)]);
var inst_52945 = cljs.core.async.close_BANG_(ch);
var state_53044__$1 = (function (){var statearr_53209 = state_53044;
(statearr_53209[(51)] = inst_52944);

return statearr_53209;
})();
var statearr_53210_56110 = state_53044__$1;
(statearr_53210_56110[(2)] = inst_52945);

(statearr_53210_56110[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (96))){
var inst_52743 = (state_53044[(15)]);
var inst_52863 = (state_53044[(23)]);
var inst_52773 = (state_53044[(13)]);
var inst_53008 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_53009 = [inst_52863];
var inst_53010 = cljs.core.PersistentHashMap.fromArrays(inst_53008,inst_53009);
var inst_53011 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_53010);
var inst_53012 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_53013 = [new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),key,inst_52743,inst_52863];
var inst_53014 = cljs.core.PersistentHashMap.fromArrays(inst_53012,inst_53013);
var inst_53015 = com.wsscode.pathom.trace.trace(inst_52773,inst_53014);
var inst_53016 = com.wsscode.pathom.core.add_error(inst_52773,inst_53011);
var inst_53017 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_53018 = [key];
var inst_53019 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_53020 = cljs.core.PersistentHashMap.fromArrays(inst_53018,inst_53019);
var inst_53021 = [out,inst_53011,inst_53020];
var inst_53022 = cljs.core.PersistentHashMap.fromArrays(inst_53017,inst_53021);
var state_53044__$1 = (function (){var statearr_53211 = state_53044;
(statearr_53211[(52)] = inst_53016);

(statearr_53211[(53)] = inst_53015);

return statearr_53211;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53044__$1,(98),ch,inst_53022);
} else {
if((state_val_53045 === (10))){
var state_53044__$1 = state_53044;
var statearr_53212_56115 = state_53044__$1;
(statearr_53212_56115[(2)] = true);

(statearr_53212_56115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (18))){
var inst_52728 = (state_53044[(7)]);
var inst_52743 = (state_53044[(15)]);
var inst_52725 = (state_53044[(21)]);
var inst_52775 = (state_53044[(22)]);
var inst_52863 = (state_53044[(23)]);
var inst_52769 = (state_53044[(24)]);
var inst_52768 = (state_53044[(25)]);
var inst_52778 = (state_53044[(26)]);
var inst_52772 = (state_53044[(17)]);
var inst_52742 = (state_53044[(19)]);
var inst_52771 = (state_53044[(27)]);
var inst_52773 = (state_53044[(13)]);
var inst_52727 = (state_53044[(11)]);
var inst_52729 = (state_53044[(9)]);
var inst_52770 = (state_53044[(28)]);
var inst_52724 = (state_53044[(29)]);
var inst_52736 = (state_53044[(10)]);
var inst_52735 = (state_53044[(31)]);
var inst_52863__$1 = (state_53044[(2)]);
var inst_52864 = (function (){var input = inst_52771;
var step = inst_52735;
var first__52722 = inst_52724;
var key_SINGLEQUOTE_ = inst_52742;
var response = inst_52863__$1;
var vec__52720 = plan;
var cache_QMARK_ = inst_52769;
var out_left = inst_52729;
var failed_resolvers = inst_52728;
var vec__52738 = inst_52735;
var batch_QMARK_ = inst_52770;
var seq__52732 = inst_52736;
var map__52741 = inst_52768;
var output = inst_52772;
var env__$2 = inst_52773;
var e = inst_52775;
var first__52733 = inst_52735;
var resolver_sym = inst_52743;
var G__52719 = inst_52727;
var trace_data = inst_52778;
var resolver = inst_52768;
var tail = inst_52736;
var vec__52731 = inst_52727;
var seq__52721 = inst_52725;
return ((function (input,step,first__52722,key_SINGLEQUOTE_,response,vec__52720,cache_QMARK_,out_left,failed_resolvers,vec__52738,batch_QMARK_,seq__52732,map__52741,output,env__$2,e,first__52733,resolver_sym,G__52719,trace_data,resolver,tail,vec__52731,seq__52721,inst_52728,inst_52743,inst_52725,inst_52775,inst_52863,inst_52769,inst_52768,inst_52778,inst_52772,inst_52742,inst_52771,inst_52773,inst_52727,inst_52729,inst_52770,inst_52724,inst_52736,inst_52735,inst_52863__$1,state_val_53045,c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (value,error){
var c__39084__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto____$1,input,step,first__52722,key_SINGLEQUOTE_,response,vec__52720,cache_QMARK_,out_left,failed_resolvers,vec__52738,batch_QMARK_,seq__52732,map__52741,output,env__$2,e,first__52733,resolver_sym,G__52719,trace_data,resolver,tail,vec__52731,seq__52721,inst_52728,inst_52743,inst_52725,inst_52775,inst_52863,inst_52769,inst_52768,inst_52778,inst_52772,inst_52742,inst_52771,inst_52773,inst_52727,inst_52729,inst_52770,inst_52724,inst_52736,inst_52735,inst_52863__$1,state_val_53045,c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto____$1,input,step,first__52722,key_SINGLEQUOTE_,response,vec__52720,cache_QMARK_,out_left,failed_resolvers,vec__52738,batch_QMARK_,seq__52732,map__52741,output,env__$2,e,first__52733,resolver_sym,G__52719,trace_data,resolver,tail,vec__52731,seq__52721,inst_52728,inst_52743,inst_52725,inst_52775,inst_52863,inst_52769,inst_52768,inst_52778,inst_52772,inst_52742,inst_52771,inst_52773,inst_52727,inst_52729,inst_52770,inst_52724,inst_52736,inst_52735,inst_52863__$1,state_val_53045,c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (state_53235){
var state_val_53236 = (state_53235[(1)]);
if((state_val_53236 === (1))){
var inst_53216 = (state_53235[(7)]);
var inst_53213 = (state_53235[(8)]);
var inst_53213__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers,resolver_sym,error);
var inst_53214 = (function (){var failed_resolvers__$1 = inst_53213__$1;
return ((function (failed_resolvers__$1,inst_53216,inst_53213,inst_53213__$1,state_val_53236,c__39084__auto____$1,input,step,first__52722,key_SINGLEQUOTE_,response,vec__52720,cache_QMARK_,out_left,failed_resolvers,vec__52738,batch_QMARK_,seq__52732,map__52741,output,env__$2,e,first__52733,resolver_sym,G__52719,trace_data,resolver,tail,vec__52731,seq__52721,inst_52728,inst_52743,inst_52725,inst_52775,inst_52863,inst_52769,inst_52768,inst_52778,inst_52772,inst_52742,inst_52771,inst_52773,inst_52727,inst_52729,inst_52770,inst_52724,inst_52736,inst_52735,inst_52863__$1,state_val_53045,c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (p1__52707_SHARP_){
var x__4222__auto__ = ((function (){var or__4131__auto__ = p1__52707_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() * (2));
var y__4223__auto__ = max_resolver_weight;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});
;})(failed_resolvers__$1,inst_53216,inst_53213,inst_53213__$1,state_val_53236,c__39084__auto____$1,input,step,first__52722,key_SINGLEQUOTE_,response,vec__52720,cache_QMARK_,out_left,failed_resolvers,vec__52738,batch_QMARK_,seq__52732,map__52741,output,env__$2,e,first__52733,resolver_sym,G__52719,trace_data,resolver,tail,vec__52731,seq__52721,inst_52728,inst_52743,inst_52725,inst_52775,inst_52863,inst_52769,inst_52768,inst_52778,inst_52772,inst_52742,inst_52771,inst_52773,inst_52727,inst_52729,inst_52770,inst_52724,inst_52736,inst_52735,inst_52863__$1,state_val_53045,c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_53215 = com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$2,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_53214], 0));
var inst_53216__$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$2,inst_53213__$1);
var state_53235__$1 = (function (){var statearr_53237 = state_53235;
(statearr_53237[(7)] = inst_53216__$1);

(statearr_53237[(9)] = inst_53215);

(statearr_53237[(8)] = inst_53213__$1);

return statearr_53237;
})();
if(cljs.core.truth_(inst_53216__$1)){
var statearr_53238_56148 = state_53235__$1;
(statearr_53238_56148[(1)] = (2));

} else {
var statearr_53239_56150 = state_53235__$1;
(statearr_53239_56150[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53236 === (2))){
var inst_53222 = (state_53235[(10)]);
var inst_53216 = (state_53235[(7)]);
var inst_53221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53216,(0),null);
var inst_53222__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53216,(1),null);
var inst_53223 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_53224 = [out,inst_53222__$1,value];
var inst_53225 = cljs.core.PersistentHashMap.fromArrays(inst_53223,inst_53224);
var state_53235__$1 = (function (){var statearr_53240 = state_53235;
(statearr_53240[(10)] = inst_53222__$1);

(statearr_53240[(11)] = inst_53221);

return statearr_53240;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53235__$1,(5),ch,inst_53225);
} else {
if((state_val_53236 === (3))){
var state_53235__$1 = state_53235;
var statearr_53241_56160 = state_53235__$1;
(statearr_53241_56160[(2)] = null);

(statearr_53241_56160[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53236 === (4))){
var inst_53233 = (state_53235[(2)]);
var state_53235__$1 = state_53235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53235__$1,inst_53233);
} else {
if((state_val_53236 === (5))){
var inst_53222 = (state_53235[(10)]);
var inst_53221 = (state_53235[(11)]);
var inst_53213 = (state_53235[(8)]);
var inst_53227 = (state_53235[(2)]);
var inst_53228 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53229 = [inst_53221,inst_53213,inst_53222];
var inst_53230 = (new cljs.core.PersistentVector(null,3,(5),inst_53228,inst_53229,null));
var state_53235__$1 = (function (){var statearr_53242 = state_53235;
(statearr_53242[(12)] = inst_53227);

return statearr_53242;
})();
var statearr_53243_56165 = state_53235__$1;
(statearr_53243_56165[(2)] = inst_53230);

(statearr_53243_56165[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39084__auto____$1,input,step,first__52722,key_SINGLEQUOTE_,response,vec__52720,cache_QMARK_,out_left,failed_resolvers,vec__52738,batch_QMARK_,seq__52732,map__52741,output,env__$2,e,first__52733,resolver_sym,G__52719,trace_data,resolver,tail,vec__52731,seq__52721,inst_52728,inst_52743,inst_52725,inst_52775,inst_52863,inst_52769,inst_52768,inst_52778,inst_52772,inst_52742,inst_52771,inst_52773,inst_52727,inst_52729,inst_52770,inst_52724,inst_52736,inst_52735,inst_52863__$1,state_val_53045,c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
;
return ((function (switch__38786__auto__,c__39084__auto____$1,input,step,first__52722,key_SINGLEQUOTE_,response,vec__52720,cache_QMARK_,out_left,failed_resolvers,vec__52738,batch_QMARK_,seq__52732,map__52741,output,env__$2,e,first__52733,resolver_sym,G__52719,trace_data,resolver,tail,vec__52731,seq__52721,inst_52728,inst_52743,inst_52725,inst_52775,inst_52863,inst_52769,inst_52768,inst_52778,inst_52772,inst_52742,inst_52771,inst_52773,inst_52727,inst_52729,inst_52770,inst_52724,inst_52736,inst_52735,inst_52863__$1,state_val_53045,c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto____0 = (function (){
var statearr_53244 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53244[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto__);

(statearr_53244[(1)] = (1));

return statearr_53244;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto____1 = (function (state_53235){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_53235);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e53245){if((e53245 instanceof Object)){
var ex__38790__auto__ = e53245;
var statearr_53246_56174 = state_53235;
(statearr_53246_56174[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53245;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56175 = state_53235;
state_53235 = G__56175;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto__ = function(state_53235){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto____1.call(this,state_53235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto____$1,input,step,first__52722,key_SINGLEQUOTE_,response,vec__52720,cache_QMARK_,out_left,failed_resolvers,vec__52738,batch_QMARK_,seq__52732,map__52741,output,env__$2,e,first__52733,resolver_sym,G__52719,trace_data,resolver,tail,vec__52731,seq__52721,inst_52728,inst_52743,inst_52725,inst_52775,inst_52863,inst_52769,inst_52768,inst_52778,inst_52772,inst_52742,inst_52771,inst_52773,inst_52727,inst_52729,inst_52770,inst_52724,inst_52736,inst_52735,inst_52863__$1,state_val_53045,c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var state__39086__auto__ = (function (){var statearr_53247 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_53247[(6)] = c__39084__auto____$1);

return statearr_53247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto____$1,input,step,first__52722,key_SINGLEQUOTE_,response,vec__52720,cache_QMARK_,out_left,failed_resolvers,vec__52738,batch_QMARK_,seq__52732,map__52741,output,env__$2,e,first__52733,resolver_sym,G__52719,trace_data,resolver,tail,vec__52731,seq__52721,inst_52728,inst_52743,inst_52725,inst_52775,inst_52863,inst_52769,inst_52768,inst_52778,inst_52772,inst_52742,inst_52771,inst_52773,inst_52727,inst_52729,inst_52770,inst_52724,inst_52736,inst_52735,inst_52863__$1,state_val_53045,c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
);

return c__39084__auto____$1;
});
;})(input,step,first__52722,key_SINGLEQUOTE_,response,vec__52720,cache_QMARK_,out_left,failed_resolvers,vec__52738,batch_QMARK_,seq__52732,map__52741,output,env__$2,e,first__52733,resolver_sym,G__52719,trace_data,resolver,tail,vec__52731,seq__52721,inst_52728,inst_52743,inst_52725,inst_52775,inst_52863,inst_52769,inst_52768,inst_52778,inst_52772,inst_52742,inst_52771,inst_52773,inst_52727,inst_52729,inst_52770,inst_52724,inst_52736,inst_52735,inst_52863__$1,state_val_53045,c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_52865 = (new cljs.core.Keyword("com.wsscode.pathom.connect","watch-ready","com.wsscode.pathom.connect/watch-ready",943560359) === inst_52863__$1);
var state_53044__$1 = (function (){var statearr_53248 = state_53044;
(statearr_53248[(23)] = inst_52863__$1);

(statearr_53248[(30)] = inst_52864);

return statearr_53248;
})();
if(cljs.core.truth_(inst_52865)){
var statearr_53249_56183 = state_53044__$1;
(statearr_53249_56183[(1)] = (56));

} else {
var statearr_53250_56184 = state_53044__$1;
(statearr_53250_56184[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (52))){
var inst_52845 = (state_53044[(2)]);
var inst_52846 = com.wsscode.common.async_cljs.throw_err(inst_52845);
var state_53044__$1 = state_53044;
var statearr_53251_56185 = state_53044__$1;
(statearr_53251_56185[(2)] = inst_52846);

(statearr_53251_56185[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (67))){
var inst_52904 = (state_53044[(45)]);
var inst_52909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52904,(0),null);
var inst_52910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52904,(1),null);
var inst_52911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52904,(2),null);
var inst_52727 = inst_52909;
var inst_52728 = inst_52910;
var inst_52729 = inst_52911;
var state_53044__$1 = (function (){var statearr_53252 = state_53044;
(statearr_53252[(7)] = inst_52728);

(statearr_53252[(11)] = inst_52727);

(statearr_53252[(9)] = inst_52729);

return statearr_53252;
})();
var statearr_53253_56190 = state_53044__$1;
(statearr_53253_56190[(2)] = null);

(statearr_53253_56190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (71))){
var state_53044__$1 = state_53044;
var statearr_53254_56191 = state_53044__$1;
(statearr_53254_56191[(2)] = null);

(statearr_53254_56191[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (42))){
var inst_52832 = (state_53044[(2)]);
var state_53044__$1 = state_53044;
var statearr_53255_56193 = state_53044__$1;
(statearr_53255_56193[(2)] = inst_52832);

(statearr_53255_56193[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (80))){
var inst_52863 = (state_53044[(23)]);
var inst_52864 = (state_53044[(30)]);
var inst_52953 = cljs.core.PersistentHashMap.EMPTY;
var inst_52954 = (inst_52864.cljs$core$IFn$_invoke$arity$2 ? inst_52864.cljs$core$IFn$_invoke$arity$2(inst_52953,inst_52863) : inst_52864.call(null,inst_52953,inst_52863));
var state_53044__$1 = state_53044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53044__$1,(83),inst_52954);
} else {
if((state_val_53045 === (37))){
var inst_52818 = (state_53044[(2)]);
var state_53044__$1 = state_53044;
if(cljs.core.truth_(inst_52818)){
var statearr_53256_56197 = state_53044__$1;
(statearr_53256_56197[(1)] = (38));

} else {
var statearr_53257_56198 = state_53044__$1;
(statearr_53257_56198[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (63))){
var inst_52875 = (state_53044[(16)]);
var inst_52742 = (state_53044[(19)]);
var inst_52864 = (state_53044[(30)]);
var inst_52898 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_52899 = [inst_52875,inst_52742];
var inst_52900 = cljs.core.PersistentHashMap.fromArrays(inst_52898,inst_52899);
var inst_52901 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_52900);
var inst_52902 = (inst_52864.cljs$core$IFn$_invoke$arity$2 ? inst_52864.cljs$core$IFn$_invoke$arity$2(inst_52875,inst_52901) : inst_52864.call(null,inst_52875,inst_52901));
var state_53044__$1 = state_53044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53044__$1,(66),inst_52902);
} else {
if((state_val_53045 === (94))){
var inst_52998 = (state_53044[(41)]);
var inst_52998__$1 = (state_53044[(2)]);
var state_53044__$1 = (function (){var statearr_53258 = state_53044;
(statearr_53258[(41)] = inst_52998__$1);

return statearr_53258;
})();
if(cljs.core.truth_(inst_52998__$1)){
var statearr_53259_56203 = state_53044__$1;
(statearr_53259_56203[(1)] = (95));

} else {
var statearr_53260_56205 = state_53044__$1;
(statearr_53260_56205[(1)] = (96));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (8))){
var state_53044__$1 = state_53044;
var statearr_53261_56206 = state_53044__$1;
(statearr_53261_56206[(2)] = false);

(statearr_53261_56206[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53045 === (49))){
var inst_52841 = (state_53044[(42)]);
var state_53044__$1 = state_53044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53044__$1,(52),inst_52841);
} else {
if((state_val_53045 === (84))){
var inst_52956 = (state_53044[(47)]);
var inst_52961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52956,(0),null);
var inst_52962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52956,(1),null);
var inst_52963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52956,(2),null);
var inst_52727 = inst_52961;
var inst_52728 = inst_52962;
var inst_52729 = inst_52963;
var state_53044__$1 = (function (){var statearr_53262 = state_53044;
(statearr_53262[(7)] = inst_52728);

(statearr_53262[(11)] = inst_52727);

(statearr_53262[(9)] = inst_52729);

return statearr_53262;
})();
var statearr_53263_56211 = state_53044__$1;
(statearr_53263_56211[(2)] = null);

(statearr_53263_56211[(1)] = (2));


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
});})(c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
;
return ((function (switch__38786__auto__,c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto____0 = (function (){
var statearr_53264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53264[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto__);

(statearr_53264[(1)] = (1));

return statearr_53264;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto____1 = (function (state_53044){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_53044);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e53265){if((e53265 instanceof Object)){
var ex__38790__auto__ = e53265;
var statearr_53266_56218 = state_53044;
(statearr_53266_56218[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53265;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56220 = state_53044;
state_53044 = G__56220;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto__ = function(state_53044){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto____1.call(this,state_53044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var state__39086__auto__ = (function (){var statearr_53267 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_53267[(6)] = c__39084__auto___55817);

return statearr_53267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto___55817,ch,key,params,env__$1,vec__52713,plan,out,temp__5718__auto__,map__52711,map__52711__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
);


return ch;
})()], null);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.index_reader = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),(function (p__53268){
var map__53269 = p__53268;
var map__53269__$1 = (((((!((map__53269 == null))))?(((((map__53269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53269):map__53269);
var env = map__53269__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53269__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(indexes,env);
})], null);
com.wsscode.pathom.connect.indexed_ident = (function com$wsscode$pathom$connect$indexed_ident(p__53271){
var map__53272 = p__53271;
var map__53272__$1 = (((((!((map__53272 == null))))?(((((map__53272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53272):map__53272);
var env = map__53272__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53272__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
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
com.wsscode.pathom.connect.resolver = (function com$wsscode$pathom$connect$resolver(sym,p__53274,resolve){
var map__53275 = p__53274;
var map__53275__$1 = (((((!((map__53275 == null))))?(((((map__53275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53275):map__53275);
var options = map__53275__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53275__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322));
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Resolver name must be a symbol","\n","(symbol? sym)"].join('')));
}

var G__53277 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),resolve], null),options], 0));
if(cljs.core.truth_(transform)){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__53277) : transform.call(null,G__53277));
} else {
return G__53277;
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
 * Helper to return a mutation map
 */
com.wsscode.pathom.connect.mutation = (function com$wsscode$pathom$connect$mutation(sym,p__53278,mutate){
var map__53279 = p__53278;
var map__53279__$1 = (((((!((map__53279 == null))))?(((((map__53279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53279):map__53279);
var options = map__53279__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53279__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322));
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Mutation name must be a symbol","\n","(symbol? sym)"].join('')));
}

var G__53281 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),mutate], null),options], 0));
if(cljs.core.truth_(transform)){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__53281) : transform.call(null,G__53281));
} else {
return G__53281;
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
var G__53283 = arguments.length;
switch (G__53283) {
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
var res__44659__auto__ = (function (){var G__53284 = env;
var G__53285 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null);
return (multi_fn.cljs$core$IFn$_invoke$arity$2 ? multi_fn.cljs$core$IFn$_invoke$arity$2(G__53284,G__53285) : multi_fn.call(null,G__53284,G__53285));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44659__auto__)){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,res__44659__auto__){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,res__44659__auto__){
return (function (state_53297){
var state_val_53298 = (state_53297[(1)]);
if((state_val_53298 === (1))){
var state_53297__$1 = state_53297;
var statearr_53299_56250 = state_53297__$1;
(statearr_53299_56250[(2)] = null);

(statearr_53299_56250[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53298 === (2))){
var inst_53295 = (state_53297[(2)]);
var state_53297__$1 = state_53297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53297__$1,inst_53295);
} else {
if((state_val_53298 === (3))){
var inst_53286 = (state_53297[(2)]);
var state_53297__$1 = state_53297;
var statearr_53300_56252 = state_53297__$1;
(statearr_53300_56252[(2)] = inst_53286);


cljs.core.async.impl.ioc_helpers.process_exception(state_53297__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53298 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53297,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_53297__$1 = state_53297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53297__$1,(5),res__44659__auto__);
} else {
if((state_val_53298 === (5))){
var inst_53291 = (state_53297[(2)]);
var inst_53292 = com.wsscode.common.async_cljs.throw_err(inst_53291);
var inst_53293 = cljs.core.first(inst_53292);
var state_53297__$1 = state_53297;
var statearr_53301_56255 = state_53297__$1;
(statearr_53301_56255[(2)] = inst_53293);


cljs.core.async.impl.ioc_helpers.process_exception(state_53297__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39084__auto__,res__44659__auto__))
;
return ((function (switch__38786__auto__,c__39084__auto__,res__44659__auto__){
return (function() {
var com$wsscode$pathom$connect$state_machine__38787__auto__ = null;
var com$wsscode$pathom$connect$state_machine__38787__auto____0 = (function (){
var statearr_53302 = [null,null,null,null,null,null,null];
(statearr_53302[(0)] = com$wsscode$pathom$connect$state_machine__38787__auto__);

(statearr_53302[(1)] = (1));

return statearr_53302;
});
var com$wsscode$pathom$connect$state_machine__38787__auto____1 = (function (state_53297){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_53297);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e53303){if((e53303 instanceof Object)){
var ex__38790__auto__ = e53303;
var statearr_53304_56259 = state_53297;
(statearr_53304_56259[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53303;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56262 = state_53297;
state_53297 = G__56262;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$connect$state_machine__38787__auto__ = function(state_53297){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$state_machine__38787__auto____1.call(this,state_53297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$state_machine__38787__auto____0;
com$wsscode$pathom$connect$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$state_machine__38787__auto____1;
return com$wsscode$pathom$connect$state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,res__44659__auto__))
})();
var state__39086__auto__ = (function (){var statearr_53305 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_53305[(6)] = c__39084__auto__);

return statearr_53305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,res__44659__auto__))
);

return c__39084__auto__;
} else {
var res = res__44659__auto__;
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
return (function (p__53306){
var map__53307 = p__53306;
var map__53307__$1 = (((((!((map__53307 == null))))?(((((map__53307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53307):map__53307);
var resolver = map__53307__$1;
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53307__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(resolver,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$1(((function (map__53307,map__53307__$1,resolver,resolve){
return (function (env,inputs){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,map__53307,map__53307__$1,resolver,resolve){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,map__53307,map__53307__$1,resolver,resolve){
return (function (state_53319){
var state_val_53320 = (state_53319[(1)]);
if((state_val_53320 === (1))){
var inst_53309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var inst_53310 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var inst_53311 = cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(inst_53309,inputs);
var inst_53312 = (function (){var from_chan = inst_53309;
var out_chan = inst_53310;
return ((function (from_chan,out_chan,inst_53309,inst_53310,inst_53311,state_val_53320,c__39084__auto__,map__53307,map__53307__$1,resolver,resolve){
return (function com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline(input,res_ch){
var c__39084__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto____$1,from_chan,out_chan,inst_53309,inst_53310,inst_53311,state_val_53320,c__39084__auto__,map__53307,map__53307__$1,resolver,resolve){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto____$1,from_chan,out_chan,inst_53309,inst_53310,inst_53311,state_val_53320,c__39084__auto__,map__53307,map__53307__$1,resolver,resolve){
return (function (state_53333){
var state_val_53334 = (state_53333[(1)]);
if((state_val_53334 === (1))){
var inst_53321 = (state_53333[(7)]);
var inst_53321__$1 = (resolve.cljs$core$IFn$_invoke$arity$2 ? resolve.cljs$core$IFn$_invoke$arity$2(env,input) : resolve.call(null,env,input));
var inst_53322 = com.wsscode.common.async_cljs.chan_QMARK_(inst_53321__$1);
var state_53333__$1 = (function (){var statearr_53335 = state_53333;
(statearr_53335[(7)] = inst_53321__$1);

return statearr_53335;
})();
if(inst_53322){
var statearr_53336_56277 = state_53333__$1;
(statearr_53336_56277[(1)] = (2));

} else {
var statearr_53337_56279 = state_53333__$1;
(statearr_53337_56279[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53334 === (2))){
var inst_53321 = (state_53333[(7)]);
var state_53333__$1 = state_53333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53333__$1,(5),inst_53321);
} else {
if((state_val_53334 === (3))){
var inst_53321 = (state_53333[(7)]);
var state_53333__$1 = state_53333;
var statearr_53338_56283 = state_53333__$1;
(statearr_53338_56283[(2)] = inst_53321);

(statearr_53338_56283[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53334 === (4))){
var inst_53328 = (state_53333[(2)]);
var state_53333__$1 = state_53333;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53333__$1,(6),res_ch,inst_53328);
} else {
if((state_val_53334 === (5))){
var inst_53325 = (state_53333[(2)]);
var state_53333__$1 = state_53333;
var statearr_53339_56284 = state_53333__$1;
(statearr_53339_56284[(2)] = inst_53325);

(statearr_53339_56284[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53334 === (6))){
var inst_53330 = (state_53333[(2)]);
var inst_53331 = cljs.core.async.close_BANG_(res_ch);
var state_53333__$1 = (function (){var statearr_53340 = state_53333;
(statearr_53340[(8)] = inst_53330);

return statearr_53340;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53333__$1,inst_53331);
} else {
return null;
}
}
}
}
}
}
});})(c__39084__auto____$1,from_chan,out_chan,inst_53309,inst_53310,inst_53311,state_val_53320,c__39084__auto__,map__53307,map__53307__$1,resolver,resolve))
;
return ((function (switch__38786__auto__,c__39084__auto____$1,from_chan,out_chan,inst_53309,inst_53310,inst_53311,state_val_53320,c__39084__auto__,map__53307,map__53307__$1,resolver,resolve){
return (function() {
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38787__auto____0 = (function (){
var statearr_53341 = [null,null,null,null,null,null,null,null,null];
(statearr_53341[(0)] = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38787__auto__);

(statearr_53341[(1)] = (1));

return statearr_53341;
});
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38787__auto____1 = (function (state_53333){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_53333);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e53342){if((e53342 instanceof Object)){
var ex__38790__auto__ = e53342;
var statearr_53343_56291 = state_53333;
(statearr_53343_56291[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53342;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56293 = state_53333;
state_53333 = G__56293;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38787__auto__ = function(state_53333){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38787__auto____1.call(this,state_53333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38787__auto____0;
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38787__auto____1;
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto____$1,from_chan,out_chan,inst_53309,inst_53310,inst_53311,state_val_53320,c__39084__auto__,map__53307,map__53307__$1,resolver,resolve))
})();
var state__39086__auto__ = (function (){var statearr_53344 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_53344[(6)] = c__39084__auto____$1);

return statearr_53344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto____$1,from_chan,out_chan,inst_53309,inst_53310,inst_53311,state_val_53320,c__39084__auto__,map__53307,map__53307__$1,resolver,resolve))
);

return c__39084__auto____$1;
});
;})(from_chan,out_chan,inst_53309,inst_53310,inst_53311,state_val_53320,c__39084__auto__,map__53307,map__53307__$1,resolver,resolve))
})();
var inst_53313 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4(n,inst_53310,inst_53312,inst_53309);
var inst_53314 = cljs.core.PersistentVector.EMPTY;
var inst_53315 = cljs.core.async.into(inst_53314,inst_53310);
var state_53319__$1 = (function (){var statearr_53345 = state_53319;
(statearr_53345[(7)] = inst_53311);

(statearr_53345[(8)] = inst_53313);

return statearr_53345;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53319__$1,(2),inst_53315);
} else {
if((state_val_53320 === (2))){
var inst_53317 = (state_53319[(2)]);
var state_53319__$1 = state_53319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53319__$1,inst_53317);
} else {
return null;
}
}
});})(c__39084__auto__,map__53307,map__53307__$1,resolver,resolve))
;
return ((function (switch__38786__auto__,c__39084__auto__,map__53307,map__53307__$1,resolver,resolve){
return (function() {
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38787__auto____0 = (function (){
var statearr_53346 = [null,null,null,null,null,null,null,null,null];
(statearr_53346[(0)] = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38787__auto__);

(statearr_53346[(1)] = (1));

return statearr_53346;
});
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38787__auto____1 = (function (state_53319){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_53319);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e53347){if((e53347 instanceof Object)){
var ex__38790__auto__ = e53347;
var statearr_53348_56307 = state_53319;
(statearr_53348_56307[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53347;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56308 = state_53319;
state_53319 = G__56308;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38787__auto__ = function(state_53319){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38787__auto____1.call(this,state_53319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38787__auto____0;
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38787__auto____1;
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,map__53307,map__53307__$1,resolver,resolve))
})();
var state__39086__auto__ = (function (){var statearr_53349 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_53349[(6)] = c__39084__auto__);

return statearr_53349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,map__53307,map__53307__$1,resolver,resolve))
);

return c__39084__auto__;
});})(map__53307,map__53307__$1,resolver,resolve))
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
com.wsscode.pathom.connect.mutation_dispatch_embedded = (function com$wsscode$pathom$connect$mutation_dispatch_embedded(p__53350,entity){
var map__53351 = p__53350;
var map__53351__$1 = (((((!((map__53351 == null))))?(((((map__53351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53351):map__53351);
var env = map__53351__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53351__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var sym = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
var map__53353 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym], null));
var map__53353__$1 = (((((!((map__53353 == null))))?(((((map__53353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53353):map__53353);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53353__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112));
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ",["Can't find mutate fn for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),"\n","mutate"].join('')));
}

return (mutate.cljs$core$IFn$_invoke$arity$2 ? mutate.cljs$core$IFn$_invoke$arity$2(env,entity) : mutate.call(null,env,entity));
});
/**
 * Sync mutate function to integrate connect mutations to pathom parser.
 */
com.wsscode.pathom.connect.mutate = (function com$wsscode$pathom$connect$mutate(p__53355,sym_SINGLEQUOTE_,p__53356){
var map__53357 = p__53355;
var map__53357__$1 = (((((!((map__53357 == null))))?(((((map__53357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53357):map__53357);
var env = map__53357__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53357__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var mutate_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53357__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069));
var mutation_join_globals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53357__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.PersistentVector.EMPTY);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53357__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__53358 = p__53356;
var map__53358__$1 = (((((!((map__53358 == null))))?(((((map__53358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53358):map__53358);
var input = map__53358__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53358__$1,new cljs.core.Keyword("pathom","context","pathom/context",-1452257614));
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym_SINGLEQUOTE_], null));
if(cljs.core.truth_(temp__5718__auto__)){
var map__53361 = temp__5718__auto__;
var map__53361__$1 = (((((!((map__53361 == null))))?(((((map__53361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53361):map__53361);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53361__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),sym);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env__$1,map__53361,map__53361__$1,sym,temp__5718__auto__,map__53357,map__53357__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__53358,map__53358__$1,input,context){
return (function (){
var res = (function (){var G__53363 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","source-mutation","com.wsscode.pathom.connect/source-mutation",-674985123),sym_SINGLEQUOTE_);
var G__53364 = input;
return (mutate_dispatch.cljs$core$IFn$_invoke$arity$2 ? mutate_dispatch.cljs$core$IFn$_invoke$arity$2(G__53363,G__53364) : mutate_dispatch.call(null,G__53363,G__53364));
})();
var res__$1 = (function (){var G__53365 = res;
if(cljs.core.truth_((function (){var and__4120__auto__ = context;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.map_QMARK_(res);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__53365,context], 0));
} else {
return G__53365;
}
})();
if(cljs.core.truth_((function (){var and__4120__auto__ = query;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.map_QMARK_(res__$1);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(res__$1,mutation_join_globals),com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(res__$1),env__$1)], 0));
} else {
return res__$1;
}
});})(env__$1,map__53361,map__53361__$1,sym,temp__5718__auto__,map__53357,map__53357__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__53358,map__53358__$1,input,context))
], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Mutation not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutation","mutation",-285823378),sym_SINGLEQUOTE_], null));
}
});
/**
 * Async mutate function to integrate connect mutations to pathom parser.
 */
com.wsscode.pathom.connect.mutate_async = (function com$wsscode$pathom$connect$mutate_async(p__53366,sym_SINGLEQUOTE_,p__53367){
var map__53368 = p__53366;
var map__53368__$1 = (((((!((map__53368 == null))))?(((((map__53368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53368):map__53368);
var env = map__53368__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53368__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var mutate_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53368__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069));
var mutation_join_globals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53368__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.PersistentVector.EMPTY);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53368__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__53369 = p__53367;
var map__53369__$1 = (((((!((map__53369 == null))))?(((((map__53369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53369):map__53369);
var input = map__53369__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53369__$1,new cljs.core.Keyword("pathom","context","pathom/context",-1452257614));
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym_SINGLEQUOTE_], null));
if(cljs.core.truth_(temp__5718__auto__)){
var map__53372 = temp__5718__auto__;
var map__53372__$1 = (((((!((map__53372 == null))))?(((((map__53372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53372):map__53372);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53372__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),sym);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env__$1,map__53372,map__53372__$1,sym,temp__5718__auto__,map__53368,map__53368__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__53369,map__53369__$1,input,context){
return (function (){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,env__$1,map__53372,map__53372__$1,sym,temp__5718__auto__,map__53368,map__53368__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__53369,map__53369__$1,input,context){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,env__$1,map__53372,map__53372__$1,sym,temp__5718__auto__,map__53368,map__53368__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__53369,map__53369__$1,input,context){
return (function (state_53413){
var state_val_53414 = (state_53413[(1)]);
if((state_val_53414 === (7))){
var inst_53387 = (state_53413[(2)]);
var state_53413__$1 = (function (){var statearr_53415 = state_53413;
(statearr_53415[(7)] = inst_53387);

return statearr_53415;
})();
if(cljs.core.truth_(context)){
var statearr_53416_56348 = state_53413__$1;
(statearr_53416_56348[(1)] = (9));

} else {
var statearr_53417_56349 = state_53413__$1;
(statearr_53417_56349[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53414 === (1))){
var state_53413__$1 = state_53413;
var statearr_53418_56350 = state_53413__$1;
(statearr_53418_56350[(2)] = null);

(statearr_53418_56350[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53414 === (4))){
var inst_53379 = (state_53413[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53413,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_53378 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","source-mutation","com.wsscode.pathom.connect/source-mutation",-674985123),sym_SINGLEQUOTE_);
var inst_53379__$1 = (mutate_dispatch.cljs$core$IFn$_invoke$arity$2 ? mutate_dispatch.cljs$core$IFn$_invoke$arity$2(inst_53378,input) : mutate_dispatch.call(null,inst_53378,input));
var inst_53380 = com.wsscode.common.async_cljs.chan_QMARK_(inst_53379__$1);
var state_53413__$1 = (function (){var statearr_53419 = state_53413;
(statearr_53419[(8)] = inst_53379__$1);

return statearr_53419;
})();
if(inst_53380){
var statearr_53420_56352 = state_53413__$1;
(statearr_53420_56352[(1)] = (5));

} else {
var statearr_53421_56353 = state_53413__$1;
(statearr_53421_56353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53414 === (15))){
var inst_53398 = (state_53413[(9)]);
var inst_53400 = cljs.core.select_keys(inst_53398,mutation_join_globals);
var inst_53401 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_53398);
var inst_53402 = com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(inst_53401,env__$1);
var state_53413__$1 = (function (){var statearr_53422 = state_53413;
(statearr_53422[(10)] = inst_53400);

return statearr_53422;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53413__$1,(18),inst_53402);
} else {
if((state_val_53414 === (13))){
var inst_53387 = (state_53413[(7)]);
var state_53413__$1 = state_53413;
var statearr_53423_56355 = state_53413__$1;
(statearr_53423_56355[(2)] = inst_53387);

(statearr_53423_56355[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53414 === (6))){
var inst_53379 = (state_53413[(8)]);
var state_53413__$1 = state_53413;
var statearr_53424_56356 = state_53413__$1;
(statearr_53424_56356[(2)] = inst_53379);

(statearr_53424_56356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53414 === (17))){
var inst_53409 = (state_53413[(2)]);
var state_53413__$1 = state_53413;
var statearr_53425_56357 = state_53413__$1;
(statearr_53425_56357[(2)] = inst_53409);


cljs.core.async.impl.ioc_helpers.process_exception(state_53413__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53414 === (3))){
var inst_53374 = (state_53413[(2)]);
var state_53413__$1 = state_53413;
var statearr_53426_56359 = state_53413__$1;
(statearr_53426_56359[(2)] = inst_53374);


cljs.core.async.impl.ioc_helpers.process_exception(state_53413__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53414 === (12))){
var inst_53387 = (state_53413[(7)]);
var inst_53395 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_53387,context], 0));
var state_53413__$1 = state_53413;
var statearr_53427_56362 = state_53413__$1;
(statearr_53427_56362[(2)] = inst_53395);

(statearr_53427_56362[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53414 === (2))){
var inst_53411 = (state_53413[(2)]);
var state_53413__$1 = state_53413;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53413__$1,inst_53411);
} else {
if((state_val_53414 === (11))){
var inst_53393 = (state_53413[(2)]);
var state_53413__$1 = state_53413;
if(cljs.core.truth_(inst_53393)){
var statearr_53428_56365 = state_53413__$1;
(statearr_53428_56365[(1)] = (12));

} else {
var statearr_53429_56366 = state_53413__$1;
(statearr_53429_56366[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53414 === (9))){
var inst_53387 = (state_53413[(7)]);
var inst_53390 = cljs.core.map_QMARK_(inst_53387);
var state_53413__$1 = state_53413;
var statearr_53430_56368 = state_53413__$1;
(statearr_53430_56368[(2)] = inst_53390);

(statearr_53430_56368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53414 === (5))){
var inst_53379 = (state_53413[(8)]);
var state_53413__$1 = state_53413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53413__$1,(8),inst_53379);
} else {
if((state_val_53414 === (14))){
var inst_53398 = (state_53413[(2)]);
var state_53413__$1 = (function (){var statearr_53431 = state_53413;
(statearr_53431[(9)] = inst_53398);

return statearr_53431;
})();
if(cljs.core.truth_(query)){
var statearr_53432_56371 = state_53413__$1;
(statearr_53432_56371[(1)] = (15));

} else {
var statearr_53433_56372 = state_53413__$1;
(statearr_53433_56372[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53414 === (16))){
var inst_53398 = (state_53413[(9)]);
var state_53413__$1 = state_53413;
var statearr_53434_56376 = state_53413__$1;
(statearr_53434_56376[(2)] = inst_53398);

(statearr_53434_56376[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53414 === (10))){
var state_53413__$1 = state_53413;
var statearr_53435_56377 = state_53413__$1;
(statearr_53435_56377[(2)] = context);

(statearr_53435_56377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53414 === (18))){
var inst_53400 = (state_53413[(10)]);
var inst_53404 = (state_53413[(2)]);
var inst_53405 = com.wsscode.common.async_cljs.throw_err(inst_53404);
var inst_53406 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_53400,inst_53405], 0));
var state_53413__$1 = state_53413;
var statearr_53436_56382 = state_53413__$1;
(statearr_53436_56382[(2)] = inst_53406);

(statearr_53436_56382[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53414 === (8))){
var inst_53383 = (state_53413[(2)]);
var inst_53384 = com.wsscode.common.async_cljs.throw_err(inst_53383);
var state_53413__$1 = state_53413;
var statearr_53437_56383 = state_53413__$1;
(statearr_53437_56383[(2)] = inst_53384);

(statearr_53437_56383[(1)] = (7));


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
});})(c__39084__auto__,env__$1,map__53372,map__53372__$1,sym,temp__5718__auto__,map__53368,map__53368__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__53369,map__53369__$1,input,context))
;
return ((function (switch__38786__auto__,c__39084__auto__,env__$1,map__53372,map__53372__$1,sym,temp__5718__auto__,map__53368,map__53368__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__53369,map__53369__$1,input,context){
return (function() {
var com$wsscode$pathom$connect$mutate_async_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$connect$mutate_async_$_state_machine__38787__auto____0 = (function (){
var statearr_53438 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53438[(0)] = com$wsscode$pathom$connect$mutate_async_$_state_machine__38787__auto__);

(statearr_53438[(1)] = (1));

return statearr_53438;
});
var com$wsscode$pathom$connect$mutate_async_$_state_machine__38787__auto____1 = (function (state_53413){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_53413);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e53439){if((e53439 instanceof Object)){
var ex__38790__auto__ = e53439;
var statearr_53440_56387 = state_53413;
(statearr_53440_56387[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53439;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56388 = state_53413;
state_53413 = G__56388;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$connect$mutate_async_$_state_machine__38787__auto__ = function(state_53413){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$mutate_async_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$mutate_async_$_state_machine__38787__auto____1.call(this,state_53413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$mutate_async_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$mutate_async_$_state_machine__38787__auto____0;
com$wsscode$pathom$connect$mutate_async_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$mutate_async_$_state_machine__38787__auto____1;
return com$wsscode$pathom$connect$mutate_async_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,env__$1,map__53372,map__53372__$1,sym,temp__5718__auto__,map__53368,map__53368__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__53369,map__53369__$1,input,context))
})();
var state__39086__auto__ = (function (){var statearr_53441 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_53441[(6)] = c__39084__auto__);

return statearr_53441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,env__$1,map__53372,map__53372__$1,sym,temp__5718__auto__,map__53368,map__53368__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__53369,map__53369__$1,input,context))
);

return c__39084__auto__;
});})(env__$1,map__53372,map__53372__$1,sym,temp__5718__auto__,map__53368,map__53368__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__53369,map__53369__$1,input,context))
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
com.wsscode.pathom.connect.discover_attrs = (function com$wsscode$pathom$connect$discover_attrs(p__53446,ctx){
var map__53447 = p__53446;
var map__53447__$1 = (((((!((map__53447 == null))))?(((((map__53447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53447):map__53447);
var index = map__53447__$1;
var index_io = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53447__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53447__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache","com.wsscode.pathom.connect/cache",328991776));
return com.wsscode.pathom.connect.cached(cache,ctx,((function (map__53447,map__53447__$1,index,index_io,cache){
return (function (){
var base_keys = (((cljs.core.count(ctx) > (1)))?(function (){var tree = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__53447,map__53447__$1,index,index_io,cache){
return (function (a,b){
var attrs = (function (){var G__53449 = index;
var G__53450 = cljs.core.vec(b);
return (com.wsscode.pathom.connect.discover_attrs.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.discover_attrs.cljs$core$IFn$_invoke$arity$2(G__53449,G__53450) : com.wsscode.pathom.connect.discover_attrs.call(null,G__53449,G__53450));
})();
if((a == null)){
return attrs;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(a,cljs.core.reverse(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(b)),com.wsscode.pathom.connect.merge_io,attrs);
}
});})(map__53447,map__53447__$1,index,index_io,cache))
,null,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__53447,map__53447__$1,index,index_io,cache){
return (function (p1__53443_SHARP_,p2__53442_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(p2__53442_SHARP_) - (p1__53443_SHARP_ + (1))),p2__53442_SHARP_);
});})(map__53447,map__53447__$1,index,index_io,cache))
,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.count(ctx) - (1)),ctx)));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.vec(cljs.core.next(cljs.core.reverse(ctx))));
})():com.wsscode.pathom.connect.merge_io(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(index_io,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.first(ctx)], null)),cljs.core.get.cljs$core$IFn$_invoke$arity$3(index_io,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(ctx)]),cljs.core.PersistentArrayMap.EMPTY)));
var available = index_io;
var collected = base_keys;
while(true){
var attrs = cljs.core.set(cljs.core.keys(collected));
var matches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (available,collected,attrs,base_keys,map__53447,map__53447__$1,index,index_io,cache){
return (function (p__53455){
var vec__53456 = p__53455;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53456,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53456,(1),null);
return cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(k,attrs));
});})(available,collected,attrs,base_keys,map__53447,map__53447__$1,index,index_io,cache))
,available);
if(cljs.core.seq(matches)){
var G__56407 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (available,collected,attrs,matches,base_keys,map__53447,map__53447__$1,index,index_io,cache){
return (function (p1__53444_SHARP_,p2__53445_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53444_SHARP_,p2__53445_SHARP_);
});})(available,collected,attrs,matches,base_keys,map__53447,map__53447__$1,index,index_io,cache))
,available,cljs.core.keys(matches));
var G__56408 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.connect.merge_io,collected,cljs.core.vals(matches));
available = G__56407;
collected = G__56408;
continue;
} else {
return collected;
}
break;
}
});})(map__53447,map__53447__$1,index,index_io,cache))
);
});
/**
 * This will use the ::index-resolvers to re-build the index. You might need that if in development you changed some definitions
 *   and got in a dirty state somehow
 */
com.wsscode.pathom.connect.reprocess_index = (function com$wsscode$pathom$connect$reprocess_index(p__53459){
var map__53460 = p__53459;
var map__53460__$1 = (((((!((map__53460 == null))))?(((((map__53460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53460):map__53460);
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53460__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256));
return cljs.core.reduce_kv(com.wsscode.pathom.connect.add,cljs.core.PersistentArrayMap.EMPTY,index_resolvers);
});
/**
 * Helper function to transform a data into an output shape.
 */
com.wsscode.pathom.connect.data__GT_shape = (function com$wsscode$pathom$connect$data__GT_shape(data){
if(cljs.core.map_QMARK_(data)){
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,(function (p1__53462_SHARP_){
if(cljs.core.map_QMARK_(p1__53462_SHARP_)){
return cljs.core.ffirst(p1__53462_SHARP_);
} else {
return p1__53462_SHARP_;
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
com.wsscode.pathom.connect.batch_restore_sort = (function com$wsscode$pathom$connect$batch_restore_sort(p__53464,items){
var map__53465 = p__53464;
var map__53465__$1 = (((((!((map__53465 == null))))?(((((map__53465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53465):map__53465);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53465__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","inputs","com.wsscode.pathom.connect/inputs",-1635802936));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53465__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","key","com.wsscode.pathom.connect/key",1316653363));
var batch_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53465__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch-default","com.wsscode.pathom.connect/batch-default",2069925724));
var index = cljs.core.group_by(key,items);
var batch_default__$1 = (function (){var or__4131__auto__ = batch_default;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,index,map__53465,map__53465__$1,inputs,key,batch_default){
return (function (p1__53463_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([key],[cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__53463_SHARP_,key)]);
});
;})(or__4131__auto__,index,map__53465,map__53465__$1,inputs,key,batch_default))
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (index,batch_default__$1,map__53465,map__53465__$1,inputs,key,batch_default){
return (function (input){
var or__4131__auto__ = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,key)));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (batch_default__$1.cljs$core$IFn$_invoke$arity$1 ? batch_default__$1.cljs$core$IFn$_invoke$arity$1(input) : batch_default__$1.call(null,input));
}
});})(index,batch_default__$1,map__53465,map__53465__$1,inputs,key,batch_default))
),inputs);
});
com.wsscode.pathom.connect.index_explorer_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","index-explorer-resolver","com.wsscode.pathom.connect/index-explorer-resolver",-1613438284,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))], null);
}));
com.wsscode.pathom.connect.indexes_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","indexes-resolver","com.wsscode.pathom.connect/indexes-resolver",-1892611171,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","autocomplete-ignore","com.wsscode.pathom.connect/autocomplete-ignore",-191717401),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null)], null)], null)], null)], null)], null),(function (env,_){
return cljs.core.select_keys(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null));
}));
com.wsscode.pathom.connect.resolver_weights_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","resolver-weights-resolver","com.wsscode.pathom.connect/resolver-weights-resolver",-600539046,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),(function (){var G__53467 = env;
var G__53467__$1 = (((G__53467 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772).cljs$core$IFn$_invoke$arity$1(G__53467));
if((G__53467__$1 == null)){
return null;
} else {
return cljs.core.deref(G__53467__$1);
}
})()], null);
}));
com.wsscode.pathom.connect.resolver_weights_sorted_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","resolver-weights-sorted-resolver","com.wsscode.pathom.connect/resolver-weights-sorted-resolver",-1672618105,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights-sorted","com.wsscode.pathom.connect/resolver-weights-sorted",1502939218)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights-sorted","com.wsscode.pathom.connect/resolver-weights-sorted",1502939218),(function (){var G__53470 = env;
var G__53470__$1 = (((G__53470 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772).cljs$core$IFn$_invoke$arity$1(G__53470));
var G__53470__$2 = (((G__53470__$1 == null))?null:cljs.core.deref(G__53470__$1));
if((G__53470__$2 == null)){
return null;
} else {
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.second,((function (G__53470,G__53470__$1,G__53470__$2){
return (function (p1__53469_SHARP_,p2__53468_SHARP_){
return cljs.core.compare(p2__53468_SHARP_,p1__53469_SHARP_);
});})(G__53470,G__53470__$1,G__53470__$2))
,G__53470__$2);
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
var G__53472 = arguments.length;
switch (G__53472) {
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

com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1 = (function (p__53473){
var map__53474 = p__53473;
var map__53474__$1 = (((((!((map__53474 == null))))?(((((map__53474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53474):map__53474);
var env = map__53474__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53474__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var indexes__$1 = (function (){var or__4131__auto__ = indexes;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var pool_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser2","com.wsscode.pathom.core/wrap-parser2",776559497),((function (indexes__$1,pool_chan,map__53474,map__53474__$1,env,indexes){
return (function com$wsscode$pathom$connect$connect_wrap_parser(parser,p__53476){
var map__53477 = p__53476;
var map__53477__$1 = (((((!((map__53477 == null))))?(((((map__53477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53477):map__53477);
var plugins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53477__$1,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796));
var plugin_registry = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),plugins);
var resolver_weights = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(indexes__$1,com.wsscode.pathom.connect.register,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plugin_registry,cljs.core.get.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),cljs.core.PersistentVector.EMPTY)], null));

return ((function (plugin_registry,resolver_weights,map__53477,map__53477__$1,plugins,indexes__$1,pool_chan,map__53474,map__53474__$1,env,indexes){
return (function (env__$1,tx){
var G__53479 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.connect.resolver_dispatch_embedded,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069),com.wsscode.pathom.connect.mutation_dispatch_embedded,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.deref(indexes__$1),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),resolver_weights,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449),pool_chan], null),env__$1], 0));
var G__53480 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__53479,G__53480) : parser.call(null,G__53479,G__53480));
});
;})(plugin_registry,resolver_weights,map__53477,map__53477__$1,plugins,indexes__$1,pool_chan,map__53474,map__53474__$1,env,indexes))
});})(indexes__$1,pool_chan,map__53474,map__53474__$1,env,indexes))
,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),indexes__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.connect.connect_resolvers], null);
});

com.wsscode.pathom.connect.connect_plugin.cljs$lang$maxFixedArity = 1;

if(com.wsscode.pathom.misc.INCLUDE_SPECS){
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","add","com.wsscode.pathom.connect/add",-52020600,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"blank","blank",-1249652109)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentArrayMap.EMPTY])], null),null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__53481){
return cljs.core.map_QMARK_(G__53481);
})], null),(function (G__53481){
return cljs.core.map_QMARK_(G__53481);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)])),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","add-mutation","com.wsscode.pathom.connect/add-mutation",-1209253784,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"blank","blank",-1249652109)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentArrayMap.EMPTY])], null),null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__53482){
return cljs.core.map_QMARK_(G__53482);
})], null),(function (G__53482){
return cljs.core.map_QMARK_(G__53482);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)])),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",1254247877,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"register","register",1968522516)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","pick-resolver","com.wsscode.pathom.connect/pick-resolver",162465702,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__53483){
return cljs.core.map_QMARK_(G__53483);
}),(function (G__53483){
return cljs.core.contains_QMARK_(G__53483,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
})], null),(function (G__53483){
return ((cljs.core.map_QMARK_(G__53483)) && (cljs.core.contains_QMARK_(G__53483,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null)]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","path-cost","com.wsscode.pathom.connect/path-cost",-825763067,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"plan","plan",1118952668)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__53484){
return cljs.core.coll_QMARK_(G__53484);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))], null),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","project-parent-query-attributes","com.wsscode.pathom.connect/project-parent-query-attributes",-418196403,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","defresolver","com.wsscode.pathom.connect/defresolver",1615901468,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.simple_symbol_QMARK_,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"any?","any?",-318999933,null),cljs.core.any_QMARK_,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__53485){
return ((cljs.core.vector_QMARK_(G__53485)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.bounded_count((2),G__53485))));
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"count","count",2139924085),(2),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2))], null),null),cljs.core.any_QMARK_,cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","alias-resolver","com.wsscode.pathom.connect/alias-resolver",920724457,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","alias-resolver2","com.wsscode.pathom.connect/alias-resolver2",-133273996,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","defmutation","com.wsscode.pathom.connect/defmutation",642780868,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.simple_symbol_QMARK_,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"any?","any?",-318999933,null),cljs.core.any_QMARK_,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__53486){
return ((cljs.core.vector_QMARK_(G__53486)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.bounded_count((2),G__53486))));
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"count","count",2139924085),(2),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2))], null),null),cljs.core.any_QMARK_,cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","discover-attrs","com.wsscode.pathom.connect/discover-attrs",-1426753571,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"ctx","ctx",-493610118),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"ctx","ctx",-493610118),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"ctx","ctx",-493610118)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__53487){
return cljs.core.coll_QMARK_(G__53487);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"ctx","ctx",-493610118),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462),null,null,null));
} else {
}

//# sourceMappingURL=com.wsscode.pathom.connect.js.map
