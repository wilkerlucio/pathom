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

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122806){
return cljs.core.set_QMARK_(G__122806);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"set","set",304602554)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122807){
return cljs.core.set_QMARK_(G__122807);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__122808){
return cljs.core.map_QMARK_(G__122808);
})], null),(function (G__122808){
return cljs.core.map_QMARK_(G__122808);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation","com.wsscode.pathom.connect/mutation",-1953746968),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__122809){
return cljs.core.map_QMARK_(G__122809);
})], null),(function (G__122809){
return cljs.core.map_QMARK_(G__122809);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"plain","plain",1368629269),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"composed","composed",-1510693384),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plain","plain",1368629269),new cljs.core.Keyword(null,"composed","composed",-1510693384)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122810){
return cljs.core.map_QMARK_(G__122810);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),null)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attribute-list","attribute-list",1391116942),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1)),new cljs.core.Keyword(null,"union","union",2142937499),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribute-list","attribute-list",1391116942),new cljs.core.Keyword(null,"union","union",2142937499)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122811){
return ((cljs.core.vector_QMARK_(G__122811)) && (((((function (){var or__4131__auto__ = (1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((1)
,G__122811))) && ((cljs.core.bounded_count((1)
,G__122811) <= (function (){var or__4131__auto__ = null;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (9007199254740991);
}
})())))));
}),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122812){
return cljs.core.map_QMARK_(G__122812);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),null)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__122813){
return cljs.core.map_QMARK_(G__122813);
}),(function (G__122813){
return cljs.core.contains_QMARK_(G__122813,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
})], null),(function (G__122813){
return ((cljs.core.map_QMARK_(G__122813)) && (cljs.core.contains_QMARK_(G__122813,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),cljs.core.list(new cljs.core.Symbol("com.wsscode.pathom.connect","atom-with","com.wsscode.pathom.connect/atom-with",1449744364,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null))),com.wsscode.pathom.connect.atom_with(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"number?","number?",-1747282210,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.number_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122820){
return cljs.core.map_QMARK_(G__122820);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null))], null),null)));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122821){
return cljs.core.map_QMARK_(G__122821);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__122822){
return cljs.core.map_QMARK_(G__122822);
}),(function (G__122822){
return cljs.core.contains_QMARK_(G__122822,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
})], null),(function (G__122822){
return ((cljs.core.map_QMARK_(G__122822)) && (cljs.core.contains_QMARK_(G__122822,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutations","com.wsscode.pathom.connect/mutations",1762289215),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122825){
return cljs.core.map_QMARK_(G__122825);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122826){
return cljs.core.map_QMARK_(G__122826);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122830){
return cljs.core.map_QMARK_(G__122830);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("s","coll-of","s/coll-of",-1705285349,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol(null,"set?","set?",1636014792,null))),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122836){
return cljs.core.set_QMARK_(G__122836);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122835){
return cljs.core.map_QMARK_(G__122835);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122837){
return cljs.core.map_QMARK_(G__122837);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__122838){
return cljs.core.map_QMARK_(G__122838);
})], null),(function (G__122838){
return cljs.core.map_QMARK_(G__122838);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","tuple","s/tuple",1167863840,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122840){
return cljs.core.set_QMARK_(G__122840);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),cljs.core.ifn_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),cljs.core.ifn_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122841){
return cljs.core.coll_QMARK_(G__122841);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null)));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword(null,"deep","deep",2090866875),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122842){
return cljs.core.map_QMARK_(G__122842);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"deep","deep",2090866875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122843){
return ((cljs.core.vector_QMARK_(G__122843)) && (((((function (){var or__4131__auto__ = (2);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((2)
,G__122843))) && ((cljs.core.bounded_count((2)
,G__122843) <= (function (){var or__4131__auto__ = null;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (9007199254740991);
}
})())))));
}),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122844){
return cljs.core.map_QMARK_(G__122844);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122845){
return cljs.core.set_QMARK_(G__122845);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__122847){
return cljs.core.map_QMARK_(G__122847);
})], null),(function (G__122847){
return cljs.core.map_QMARK_(G__122847);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),cljs.core.list(new cljs.core.Symbol("s","or","s/or",1876282981,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"multi","multi",-190293005)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentHashSet.EMPTY]),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)], null),null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122856){
return cljs.core.map_QMARK_(G__122856);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122857){
return cljs.core.map_QMARK_(G__122857);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null))),cljs.spec.alpha.merge_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__122858){
return cljs.core.map_QMARK_(G__122858);
}),(function (G__122858){
return cljs.core.contains_QMARK_(G__122858,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
}),(function (G__122858){
return cljs.core.contains_QMARK_(G__122858,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
})], null),(function (G__122858){
return ((cljs.core.map_QMARK_(G__122858)) && (cljs.core.contains_QMARK_(G__122858,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))) && (cljs.core.contains_QMARK_(G__122858,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)))], null),null]))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null))),cljs.spec.alpha.merge_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__122878){
return cljs.core.map_QMARK_(G__122878);
}),(function (G__122878){
return cljs.core.contains_QMARK_(G__122878,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112));
})], null),(function (G__122878){
return ((cljs.core.map_QMARK_(G__122878)) && (cljs.core.contains_QMARK_(G__122878,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)))], null),null]))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"resolver","resolver",-1740553583),new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword(null,"mutation","mutation",-285823378),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolver","resolver",-1740553583),new cljs.core.Keyword(null,"mutation","mutation",-285823378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),new cljs.core.Keyword(null,"operations","operations",1630691895),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword(null,"operations","operations",1630691895)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122886){
return cljs.core.coll_QMARK_(G__122886);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))], null),null)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122888){
return cljs.core.coll_QMARK_(G__122888);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122889){
return cljs.core.coll_QMARK_(G__122889);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","sort-plan","com.wsscode.pathom.connect/sort-plan",-1506396873),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"plan","plan",1118952668)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
} else {
}
/**
 * Get resolver map information in env from the resolver sym.
 */
com.wsscode.pathom.connect.resolver_data = (function com$wsscode$pathom$connect$resolver_data(env_or_indexes,sym){
var idx = (function (){var G__122891 = env_or_indexes;
if(cljs.core.contains_QMARK_(env_or_indexes,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))){
return new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189).cljs$core$IFn$_invoke$arity$1(G__122891);
} else {
return G__122891;
}
})();
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),sym], null));
});
/**
 * Get mutation map information in env from the resolver sym.
 */
com.wsscode.pathom.connect.mutation_data = (function com$wsscode$pathom$connect$mutation_data(env_or_indexes,sym){
var idx = (function (){var G__122892 = env_or_indexes;
if(cljs.core.contains_QMARK_(env_or_indexes,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))){
return new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189).cljs$core$IFn$_invoke$arity$1(G__122892);
} else {
return G__122892;
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
var unions = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__122897){
var vec__122898 = p__122897;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122898,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122898,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.connect.normalize_io.call(null,v))], null);
})),output);
var merged = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.connect.merge_io_attrs,cljs.core.vals(unions));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(merged,new cljs.core.Keyword("com.wsscode.pathom.connect","unions","com.wsscode.pathom.connect/unions",-2088386406),unions);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
if(cljs.core.map_QMARK_(x)){
var vec__122901 = cljs.core.first(x);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122901,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122901,(1),null);
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
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (p1__122907_SHARP_,p2__122908_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__122907_SHARP_,p2__122908_SHARP_], 0));
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
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__122912 = cljs.core.get_global_hierarchy;
return (fexpr__122912.cljs$core$IFn$_invoke$arity$0 ? fexpr__122912.cljs$core$IFn$_invoke$arity$0() : fexpr__122912.call(null));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(idx,k,(function (p1__122913_SHARP_){
return (com.wsscode.pathom.connect.index_merger.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.index_merger.cljs$core$IFn$_invoke$arity$3(k,p1__122913_SHARP_,v) : com.wsscode.pathom.connect.index_merger.call(null,k,p1__122913_SHARP_,v));
}));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(idx,k,v);
}
}),ia,ib);
});
com.wsscode.pathom.connect.output_provides_STAR_ = (function com$wsscode$pathom$connect$output_provides_STAR_(p__122917){
var map__122918 = p__122917;
var map__122918__$1 = (((((!((map__122918 == null))))?(((((map__122918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122918):map__122918);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122918__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122918__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__$1 = (cljs.core.truth_((function (){var G__122920 = children;
var G__122920__$1 = (((G__122920 == null))?null:cljs.core.first(G__122920));
var G__122920__$2 = (((G__122920__$1 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__122920__$1));
if((G__122920__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__122920__$2,new cljs.core.Keyword(null,"union","union",2142937499));
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))], 0)):children);
var G__122921 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null);
if(cljs.core.seq(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(G__122921,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (G__122921,children__$1,map__122918,map__122918__$1,key,children){
return (function (x){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__122921,children__$1,map__122918,map__122918__$1,key,children){
return (function (p1__122915_SHARP_){
return cljs.core.vec(cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[key,p1__122915_SHARP_],null))));
});})(G__122921,children__$1,map__122918,map__122918__$1,key,children))
,x);
});})(G__122921,children__$1,map__122918,map__122918__$1,key,children))
,((function (G__122921,children__$1,map__122918,map__122918__$1,key,children){
return (function (p1__122916_SHARP_){
return (com.wsscode.pathom.connect.output_provides_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.output_provides_STAR_.cljs$core$IFn$_invoke$arity$1(p1__122916_SHARP_) : com.wsscode.pathom.connect.output_provides_STAR_.call(null,p1__122916_SHARP_));
});})(G__122921,children__$1,map__122918,map__122918__$1,key,children))
)),children__$1);
} else {
return G__122921;
}
});
com.wsscode.pathom.connect.output_provides = (function com$wsscode$pathom$connect$output_provides(query){
if(cljs.core.map_QMARK_(query)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.output_provides),cljs.core.vals(query));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.output_provides_STAR_),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(query)));
}
});
com.wsscode.pathom.connect.normalized_children = (function com$wsscode$pathom$connect$normalized_children(p__122922){
var map__122923 = p__122922;
var map__122923__$1 = (((((!((map__122923 == null))))?(((((map__122923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122923):map__122923);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122923__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_((function (){var G__122925 = children;
var G__122925__$1 = (((G__122925 == null))?null:cljs.core.first(G__122925));
var G__122925__$2 = (((G__122925__$1 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__122925__$1));
if((G__122925__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__122925__$2,new cljs.core.Keyword(null,"union","union",2142937499));
}
})())){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))], 0));
} else {
return children;
}
});
com.wsscode.pathom.connect.index_attributes = (function com$wsscode$pathom$connect$index_attributes(p__122930){
var map__122931 = p__122930;
var map__122931__$1 = (((((!((map__122931 == null))))?(((((map__122931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122931):map__122931);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122931__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122931__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122931__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var provides = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__122931,map__122931__$1,sym,input,output){
return (function (p1__122926_SHARP_){
return cljs.core.contains_QMARK_(input,p1__122926_SHARP_);
});})(map__122931,map__122931__$1,sym,input,output))
,com.wsscode.pathom.connect.output_provides(output));
var sym_group = cljs.core.PersistentHashSet.createAsIfByAssoc([sym]);
var attr_provides = cljs.core.zipmap(provides,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(sym_group));
var input_count = cljs.core.count(input);
var _LT__GT_ = cljs.core.PersistentArrayMap.EMPTY;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,provides,sym_group,attr_provides,input_count,map__122931,map__122931__$1,sym,input,output){
return (function (idx,in_attr){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,in_attr,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),in_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),attr_provides,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),sym_group], null));
});})(_LT__GT_,provides,sym_group,attr_provides,input_count,map__122931,map__122931__$1,sym,input,output))
,_LT__GT_,(function (){var G__122936 = input_count;
switch (G__122936) {
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
var _LT__GT___$2 = (((input_count > (1)))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,provides,sym_group,attr_provides,input_count,map__122931,map__122931__$1,sym,input,output){
return (function (idx,in_attr){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,in_attr,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),in_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),cljs.core.PersistentHashSet.createAsIfByAssoc([input]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),sym_group], null));
});})(_LT__GT_,_LT__GT___$1,provides,sym_group,attr_provides,input_count,map__122931,map__122931__$1,sym,input,output))
,_LT__GT___$1,input):_LT__GT___$1);
var _LT__GT___$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,_LT__GT___$2,provides,sym_group,attr_provides,input_count,map__122931,map__122931__$1,sym,input,output){
return (function (idx,out_attr){
if(cljs.core.vector_QMARK_(out_attr)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,cljs.core.peek(out_attr),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.peek(out_attr),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null),cljs.core.pop(out_attr)),sym_group]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),sym_group], null));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,out_attr,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),out_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.PersistentArrayMap.createAsIfByAssoc([input,sym_group]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),sym_group], null));
}
});})(_LT__GT_,_LT__GT___$1,_LT__GT___$2,provides,sym_group,attr_provides,input_count,map__122931,map__122931__$1,sym,input,output))
,_LT__GT___$2,provides);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__122931,map__122931__$1,sym,input,output){
return (function (idx,p__122937){
var map__122939 = p__122937;
var map__122939__$1 = (((((!((map__122939 == null))))?(((((map__122939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122939):map__122939);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122939__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122939__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__122942 = idx;
if(cljs.core.truth_(key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__122942,key,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(children)?new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732):new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711)),sym_group]));
} else {
return G__122942;
}
});})(_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__122931,map__122931__$1,sym,input,output))
,_LT__GT___$3,((cljs.core.map_QMARK_(output))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__122931,map__122931__$1,sym,input,output){
return (function (p1__122928_SHARP_){
return cljs.core.tree_seq(new cljs.core.Keyword(null,"children","children",-940561982),com.wsscode.pathom.connect.normalized_children,edn_query_language.core.query__GT_ast(p1__122928_SHARP_));
});})(_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__122931,map__122931__$1,sym,input,output))
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
var G__122946 = arguments.length;
switch (G__122946) {
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
var map__122947 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.PersistentHashSet.EMPTY], null),sym_data], 0));
var map__122947__$1 = (((((!((map__122947 == null))))?(((((map__122947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122947):map__122947);
var sym_data__$1 = map__122947__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122947__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122947__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var input_SINGLEQUOTE_ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input))) && (cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.PersistentHashSet.EMPTY], null)),cljs.core.first(input)))))?cljs.core.PersistentHashSet.EMPTY:input);
return com.wsscode.pathom.connect.merge_indexes(indexes,(function (){var G__122949 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),cljs.core.PersistentArrayMap.createAsIfByAssoc([sym,sym_data__$1]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),com.wsscode.pathom.connect.index_attributes(sym_data__$1),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.PersistentArrayMap.createAsIfByAssoc([input_SINGLEQUOTE_,com.wsscode.pathom.connect.normalize_io(output)]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (input_SINGLEQUOTE_,map__122947,map__122947__$1,sym_data__$1,input,output){
return (function (indexes__$1,out_attr){
var G__122950 = indexes__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([out_attr]),input)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__122950,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out_attr,input], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),sym);
} else {
return G__122950;
}
});})(input_SINGLEQUOTE_,map__122947,map__122947__$1,sym_data__$1,input,output))
,cljs.core.PersistentArrayMap.EMPTY,com.wsscode.pathom.connect.flat_query(output))], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input_SINGLEQUOTE_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__122949,new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(input_SINGLEQUOTE_)]));
} else {
return G__122949;
}
})());
});

com.wsscode.pathom.connect.add.cljs$lang$maxFixedArity = 3;

com.wsscode.pathom.connect.add_mutation = (function com$wsscode$pathom$connect$add_mutation(indexes,sym,p__122956){
var map__122957 = p__122956;
var map__122957__$1 = (((((!((map__122957 == null))))?(((((map__122957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122957):map__122957);
var data = map__122957__$1;
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122957__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122957__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
return com.wsscode.pathom.connect.merge_indexes(indexes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),cljs.core.PersistentArrayMap.createAsIfByAssoc([sym,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym)]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),(function (){var _LT__GT_ = cljs.core.PersistentArrayMap.EMPTY;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,map__122957,map__122957__$1,data,params,output){
return (function (idx,attribute){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,attribute,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),cljs.core.PersistentHashSet.createAsIfByAssoc([sym])], null));
});})(_LT__GT_,map__122957,map__122957__$1,data,params,output))
,_LT__GT_,(function (){var G__122961 = params;
var G__122961__$1 = (((G__122961 == null))?null:edn_query_language.core.query__GT_ast(G__122961));
if((G__122961__$1 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast_properties(G__122961__$1);
}
})());
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,map__122957,map__122957__$1,data,params,output){
return (function (idx,attribute){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,attribute,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),cljs.core.PersistentHashSet.createAsIfByAssoc([sym])], null));
});})(_LT__GT_,_LT__GT___$1,map__122957,map__122957__$1,data,params,output))
,_LT__GT___$1,(function (){var G__122963 = output;
var G__122963__$1 = (((G__122963 == null))?null:edn_query_language.core.query__GT_ast(G__122963));
if((G__122963__$1 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast_properties(G__122963__$1);
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
com.wsscode.pathom.connect.sort_resolvers = (function com$wsscode$pathom$connect$sort_resolvers(p__122969,resolvers,e){
var map__122970 = p__122969;
var map__122970__$1 = (((((!((map__122970 == null))))?(((((map__122970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122970):map__122970);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122970__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (map__122970,map__122970__$1,request_cache){
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
});})(map__122970,map__122970__$1,request_cache))
,resolvers);
});
/**
 * DEPRECATED
 */
com.wsscode.pathom.connect.pick_resolver = (function com$wsscode$pathom$connect$pick_resolver(p__122972){
var map__122973 = p__122972;
var map__122973__$1 = (((((!((map__122973 == null))))?(((((map__122973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122973):map__122973);
var env = map__122973__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122973__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var dependency_track = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122973__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null));
if(cljs.core.truth_(temp__5718__auto__)){
var attr_resolvers = temp__5718__auto__;
var r = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword(null,"missing","missing",362507769)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attr_resolvers,temp__5718__auto__,k,e,map__122973,map__122973__$1,env,indexes,dependency_track){
return (function (p__122978){
var vec__122979 = p__122978;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122979,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122979,(1),null);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.set(cljs.core.keys(e)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"missing","missing",362507769),missing], null);
});})(attr_resolvers,temp__5718__auto__,k,e,map__122973,map__122973__$1,env,indexes,dependency_track))
,attr_resolvers));
var G__122986 = r;
var vec__122987 = G__122986;
var seq__122988 = cljs.core.seq(vec__122987);
var first__122989 = cljs.core.first(seq__122988);
var seq__122988__$1 = cljs.core.next(seq__122988);
var map__122990 = first__122989;
var map__122990__$1 = (((((!((map__122990 == null))))?(((((map__122990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122990):map__122990);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122990__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122990__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var t = seq__122988__$1;
var xs = vec__122987;
var G__122986__$1 = G__122986;
while(true){
var vec__122994 = G__122986__$1;
var seq__122995 = cljs.core.seq(vec__122994);
var first__122996 = cljs.core.first(seq__122995);
var seq__122995__$1 = cljs.core.next(seq__122995);
var map__122997 = first__122996;
var map__122997__$1 = (((((!((map__122997 == null))))?(((((map__122997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122997):map__122997);
var sym__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122997__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var attrs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122997__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var t__$1 = seq__122995__$1;
var xs__$1 = vec__122994;
if(cljs.core.truth_(xs__$1)){
if((!(cljs.core.contains_QMARK_(dependency_track,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,attrs__$1], null))))){
var e__$1 = (function (){try{return com.wsscode.pathom.core.elide_items(com.wsscode.pathom.core.break_values,com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465),true),new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,attrs__$1], null)),attrs__$1));
}catch (e122999){var _ = e122999;
return cljs.core.PersistentArrayMap.EMPTY;
}})();
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attrs__$1),cljs.core.set(cljs.core.keys(e__$1)));
if(cljs.core.seq(missing)){
var G__125782 = t__$1;
G__122986__$1 = G__125782;
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
com.wsscode.pathom.connect.async_pick_resolver = (function com$wsscode$pathom$connect$async_pick_resolver(p__123000){
var map__123001 = p__123000;
var map__123001__$1 = (((((!((map__123001 == null))))?(((((map__123001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__123001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__123001):map__123001);
var env = map__123001__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123001__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var dependency_track = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123001__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185));
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,map__123001,map__123001__$1,env,indexes,dependency_track){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,map__123001,map__123001__$1,env,indexes,dependency_track){
return (function (state_123150){
var state_val_123151 = (state_123150[(1)]);
if((state_val_123151 === (7))){
var inst_123146 = (state_123150[(2)]);
var state_123150__$1 = state_123150;
var statearr_123152_125783 = state_123150__$1;
(statearr_123152_125783[(2)] = inst_123146);


cljs.core.async.impl.ioc_helpers.process_exception(state_123150__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (20))){
var state_123150__$1 = state_123150;
var statearr_123153_125784 = state_123150__$1;
(statearr_123153_125784[(2)] = false);

(statearr_123153_125784[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (27))){
var inst_123062 = (state_123150[(7)]);
var inst_123091 = (state_123150[(2)]);
var inst_123092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_123091,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var inst_123093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_123091,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var state_123150__$1 = (function (){var statearr_123154 = state_123150;
(statearr_123154[(8)] = inst_123093);

(statearr_123154[(9)] = inst_123092);

return statearr_123154;
})();
if(cljs.core.truth_(inst_123062)){
var statearr_123155_125785 = state_123150__$1;
(statearr_123155_125785[(1)] = (28));

} else {
var statearr_123157_125786 = state_123150__$1;
(statearr_123157_125786[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (1))){
var state_123150__$1 = state_123150;
var statearr_123159_125787 = state_123150__$1;
(statearr_123159_125787[(2)] = null);

(statearr_123159_125787[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (24))){
var inst_123083 = (state_123150[(2)]);
var state_123150__$1 = state_123150;
var statearr_123160_125788 = state_123150__$1;
(statearr_123160_125788[(2)] = inst_123083);

(statearr_123160_125788[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (39))){
var inst_123119 = (state_123150[(10)]);
var inst_123093 = (state_123150[(8)]);
var inst_123092 = (state_123150[(9)]);
var inst_123128 = [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"s","s",1705939918)];
var inst_123129 = cljs.core.select_keys(inst_123119,inst_123093);
var inst_123130 = com.wsscode.pathom.connect.sort_resolvers(env,inst_123092,inst_123119);
var inst_123131 = cljs.core.first(inst_123130);
var inst_123132 = [inst_123129,inst_123131];
var inst_123133 = cljs.core.PersistentHashMap.fromArrays(inst_123128,inst_123132);
var state_123150__$1 = state_123150;
var statearr_123163_125789 = state_123150__$1;
(statearr_123163_125789[(2)] = inst_123133);

(statearr_123163_125789[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (4))){
var inst_123017 = (state_123150[(11)]);
var inst_123011 = (state_123150[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_123150,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_123010 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_123011__$1 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_123010);
var inst_123012 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var inst_123014 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_123015 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),inst_123011__$1];
var inst_123016 = (new cljs.core.PersistentVector(null,2,(5),inst_123014,inst_123015,null));
var inst_123017__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_123016);
var state_123150__$1 = (function (){var statearr_123164 = state_123150;
(statearr_123164[(11)] = inst_123017__$1);

(statearr_123164[(12)] = inst_123011__$1);

(statearr_123164[(13)] = inst_123012);

return statearr_123164;
})();
if(cljs.core.truth_(inst_123017__$1)){
var statearr_123165_125790 = state_123150__$1;
(statearr_123165_125790[(1)] = (5));

} else {
var statearr_123166_125791 = state_123150__$1;
(statearr_123166_125791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (15))){
var inst_123035 = (state_123150[(14)]);
var state_123150__$1 = state_123150;
var statearr_123167_125792 = state_123150__$1;
(statearr_123167_125792[(2)] = inst_123035);

(statearr_123167_125792[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (21))){
var inst_123086 = (state_123150[(2)]);
var state_123150__$1 = state_123150;
if(cljs.core.truth_(inst_123086)){
var statearr_123168_125793 = state_123150__$1;
(statearr_123168_125793[(1)] = (25));

} else {
var statearr_123169_125794 = state_123150__$1;
(statearr_123169_125794[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (31))){
var state_123150__$1 = state_123150;
var statearr_123170_125795 = state_123150__$1;
(statearr_123170_125795[(2)] = null);

(statearr_123170_125795[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (32))){
var state_123150__$1 = state_123150;
var statearr_123171_125796 = state_123150__$1;
(statearr_123171_125796[(2)] = null);

(statearr_123171_125796[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (40))){
var inst_123135 = (state_123150[(2)]);
var state_123150__$1 = state_123150;
var statearr_123172_125797 = state_123150__$1;
(statearr_123172_125797[(2)] = inst_123135);

(statearr_123172_125797[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (33))){
var inst_123138 = (state_123150[(2)]);
var state_123150__$1 = state_123150;
var statearr_123174_125798 = state_123150__$1;
(statearr_123174_125798[(2)] = inst_123138);

(statearr_123174_125798[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (13))){
var inst_123051 = (state_123150[(2)]);
var state_123150__$1 = state_123150;
var statearr_123175_125799 = state_123150__$1;
(statearr_123175_125799[(2)] = inst_123051);

(statearr_123175_125799[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (22))){
var state_123150__$1 = state_123150;
var statearr_123178_125800 = state_123150__$1;
(statearr_123178_125800[(2)] = true);

(statearr_123178_125800[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (36))){
var inst_123093 = (state_123150[(8)]);
var inst_123092 = (state_123150[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_123150,(35),new cljs.core.Keyword(null,"default","default",-1987822328),null,(34));
var inst_123106 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465),true);
var inst_123107 = cljs.core.PersistentHashSet.EMPTY;
var inst_123108 = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,inst_123107);
var inst_123109 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_123110 = [inst_123092,inst_123093];
var inst_123111 = (new cljs.core.PersistentVector(null,2,(5),inst_123109,inst_123110,null));
var inst_123112 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_123106,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),inst_123108,inst_123111);
var inst_123113 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(inst_123112,inst_123093);
var state_123150__$1 = state_123150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_123150__$1,(37),inst_123113);
} else {
if((state_val_123151 === (29))){
var state_123150__$1 = state_123150;
var statearr_123183_125801 = state_123150__$1;
(statearr_123183_125801[(2)] = null);

(statearr_123183_125801[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (6))){
var state_123150__$1 = state_123150;
var statearr_123185_125802 = state_123150__$1;
(statearr_123185_125802[(2)] = null);

(statearr_123185_125802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (28))){
var inst_123093 = (state_123150[(8)]);
var inst_123092 = (state_123150[(9)]);
var inst_123095 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_123096 = [inst_123092,inst_123093];
var inst_123097 = (new cljs.core.PersistentVector(null,2,(5),inst_123095,inst_123096,null));
var inst_123098 = cljs.core.contains_QMARK_(dependency_track,inst_123097);
var inst_123099 = (!(inst_123098));
var state_123150__$1 = state_123150;
if(inst_123099){
var statearr_123188_125803 = state_123150__$1;
(statearr_123188_125803[(1)] = (31));

} else {
var statearr_123189_125804 = state_123150__$1;
(statearr_123189_125804[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (25))){
var inst_123069 = (state_123150[(15)]);
var inst_123088 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_123069);
var state_123150__$1 = state_123150;
var statearr_123191_125805 = state_123150__$1;
(statearr_123191_125805[(2)] = inst_123088);

(statearr_123191_125805[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (34))){
var inst_123119 = (state_123150[(10)]);
var inst_123093 = (state_123150[(8)]);
var inst_123119__$1 = (state_123150[(2)]);
var inst_123120 = cljs.core.set(inst_123093);
var inst_123121 = cljs.core.keys(inst_123119__$1);
var inst_123122 = cljs.core.set(inst_123121);
var inst_123123 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_123120,inst_123122);
var inst_123124 = cljs.core.seq(inst_123123);
var state_123150__$1 = (function (){var statearr_123194 = state_123150;
(statearr_123194[(10)] = inst_123119__$1);

return statearr_123194;
})();
if(inst_123124){
var statearr_123195_125806 = state_123150__$1;
(statearr_123195_125806[(1)] = (38));

} else {
var statearr_123196_125807 = state_123150__$1;
(statearr_123196_125807[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (17))){
var inst_123069 = (state_123150[(15)]);
var inst_123062 = (state_123150[(7)]);
var inst_123068 = cljs.core.seq(inst_123062);
var inst_123069__$1 = cljs.core.first(inst_123068);
var inst_123070 = cljs.core.next(inst_123068);
var inst_123072 = (inst_123069__$1 == null);
var inst_123073 = cljs.core.not(inst_123072);
var state_123150__$1 = (function (){var statearr_123197 = state_123150;
(statearr_123197[(15)] = inst_123069__$1);

(statearr_123197[(16)] = inst_123070);

return statearr_123197;
})();
if(inst_123073){
var statearr_123198_125808 = state_123150__$1;
(statearr_123198_125808[(1)] = (19));

} else {
var statearr_123199_125809 = state_123150__$1;
(statearr_123199_125809[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (3))){
var inst_123005 = (state_123150[(2)]);
var state_123150__$1 = state_123150;
var statearr_123205_125810 = state_123150__$1;
(statearr_123205_125810[(2)] = inst_123005);


cljs.core.async.impl.ioc_helpers.process_exception(state_123150__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (12))){
var state_123150__$1 = state_123150;
var statearr_123206_125811 = state_123150__$1;
(statearr_123206_125811[(2)] = false);

(statearr_123206_125811[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (2))){
var inst_123148 = (state_123150[(2)]);
var state_123150__$1 = state_123150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_123150__$1,inst_123148);
} else {
if((state_val_123151 === (23))){
var state_123150__$1 = state_123150;
var statearr_123207_125812 = state_123150__$1;
(statearr_123207_125812[(2)] = false);

(statearr_123207_125812[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (35))){
var inst_123101 = (state_123150[(2)]);
var inst_123102 = cljs.core.PersistentHashMap.EMPTY;
var state_123150__$1 = (function (){var statearr_123208 = state_123150;
(statearr_123208[(17)] = inst_123101);

return statearr_123208;
})();
var statearr_123209_125813 = state_123150__$1;
(statearr_123209_125813[(2)] = inst_123102);


cljs.core.async.impl.ioc_helpers.process_exception(state_123150__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (19))){
var inst_123069 = (state_123150[(15)]);
var inst_123075 = inst_123069.cljs$lang$protocol_mask$partition0$;
var inst_123076 = (inst_123075 & (64));
var inst_123077 = inst_123069.cljs$core$ISeq$;
var inst_123078 = (cljs.core.PROTOCOL_SENTINEL === inst_123077);
var inst_123079 = ((inst_123076) || (inst_123078));
var state_123150__$1 = state_123150;
if(cljs.core.truth_(inst_123079)){
var statearr_123210_125814 = state_123150__$1;
(statearr_123210_125814[(1)] = (22));

} else {
var statearr_123211_125815 = state_123150__$1;
(statearr_123211_125815[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (11))){
var state_123150__$1 = state_123150;
var statearr_123214_125816 = state_123150__$1;
(statearr_123214_125816[(2)] = true);

(statearr_123214_125816[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (9))){
var state_123150__$1 = state_123150;
var statearr_123215_125817 = state_123150__$1;
(statearr_123215_125817[(2)] = false);

(statearr_123215_125817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (5))){
var inst_123017 = (state_123150[(11)]);
var inst_123023 = (state_123150[(18)]);
var inst_123011 = (state_123150[(12)]);
var inst_123035 = (state_123150[(14)]);
var inst_123012 = (state_123150[(13)]);
var inst_123019 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword(null,"missing","missing",362507769));
var inst_123021 = (function (){var k = inst_123011;
var e = inst_123012;
var temp__5718__auto__ = inst_123017;
var attr_resolvers = inst_123017;
return ((function (k,e,temp__5718__auto__,attr_resolvers,inst_123017,inst_123023,inst_123011,inst_123035,inst_123012,inst_123019,state_val_123151,c__39003__auto__,map__123001,map__123001__$1,env,indexes,dependency_track){
return (function (p__123020){
var vec__123216 = p__123020;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123216,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123216,(1),null);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.set(cljs.core.keys(e)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"missing","missing",362507769),missing], null);
});
;})(k,e,temp__5718__auto__,attr_resolvers,inst_123017,inst_123023,inst_123011,inst_123035,inst_123012,inst_123019,state_val_123151,c__39003__auto__,map__123001,map__123001__$1,env,indexes,dependency_track))
})();
var inst_123022 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_123021,inst_123017);
var inst_123023__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(inst_123019,inst_123022);
var inst_123033 = cljs.core.seq(inst_123023__$1);
var inst_123035__$1 = cljs.core.first(inst_123033);
var inst_123036 = cljs.core.next(inst_123033);
var inst_123040 = (inst_123035__$1 == null);
var inst_123041 = cljs.core.not(inst_123040);
var state_123150__$1 = (function (){var statearr_123219 = state_123150;
(statearr_123219[(19)] = inst_123036);

(statearr_123219[(18)] = inst_123023__$1);

(statearr_123219[(14)] = inst_123035__$1);

return statearr_123219;
})();
if(inst_123041){
var statearr_123220_125818 = state_123150__$1;
(statearr_123220_125818[(1)] = (8));

} else {
var statearr_123221_125819 = state_123150__$1;
(statearr_123221_125819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (14))){
var inst_123035 = (state_123150[(14)]);
var inst_123056 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_123035);
var state_123150__$1 = state_123150;
var statearr_123222_125820 = state_123150__$1;
(statearr_123222_125820[(2)] = inst_123056);

(statearr_123222_125820[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (26))){
var inst_123069 = (state_123150[(15)]);
var state_123150__$1 = state_123150;
var statearr_123223_125821 = state_123150__$1;
(statearr_123223_125821[(2)] = inst_123069);

(statearr_123223_125821[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (16))){
var inst_123023 = (state_123150[(18)]);
var inst_123059 = (state_123150[(2)]);
var inst_123060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_123059,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var inst_123061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_123059,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var inst_123062 = inst_123023;
var state_123150__$1 = (function (){var statearr_123224 = state_123150;
(statearr_123224[(20)] = inst_123061);

(statearr_123224[(7)] = inst_123062);

(statearr_123224[(21)] = inst_123060);

return statearr_123224;
})();
var statearr_123225_125822 = state_123150__$1;
(statearr_123225_125822[(2)] = null);

(statearr_123225_125822[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (38))){
var inst_123070 = (state_123150[(16)]);
var inst_123062 = inst_123070;
var state_123150__$1 = (function (){var statearr_123226 = state_123150;
(statearr_123226[(7)] = inst_123062);

return statearr_123226;
})();
var statearr_123227_125823 = state_123150__$1;
(statearr_123227_125823[(2)] = null);

(statearr_123227_125823[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (30))){
var inst_123141 = (state_123150[(2)]);
var state_123150__$1 = state_123150;
var statearr_123228_125824 = state_123150__$1;
(statearr_123228_125824[(2)] = inst_123141);

(statearr_123228_125824[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (10))){
var inst_123054 = (state_123150[(2)]);
var state_123150__$1 = state_123150;
if(cljs.core.truth_(inst_123054)){
var statearr_123229_125825 = state_123150__$1;
(statearr_123229_125825[(1)] = (14));

} else {
var statearr_123230_125826 = state_123150__$1;
(statearr_123230_125826[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (18))){
var inst_123143 = (state_123150[(2)]);
var state_123150__$1 = state_123150;
var statearr_123231_125827 = state_123150__$1;
(statearr_123231_125827[(2)] = inst_123143);

(statearr_123231_125827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (37))){
var inst_123115 = (state_123150[(2)]);
var inst_123116 = com.wsscode.common.async_cljs.throw_err(inst_123115);
var inst_123117 = com.wsscode.pathom.core.elide_items(com.wsscode.pathom.core.break_values,inst_123116);
var state_123150__$1 = state_123150;
var statearr_123232_125828 = state_123150__$1;
(statearr_123232_125828[(2)] = inst_123117);


cljs.core.async.impl.ioc_helpers.process_exception(state_123150__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123151 === (8))){
var inst_123035 = (state_123150[(14)]);
var inst_123043 = inst_123035.cljs$lang$protocol_mask$partition0$;
var inst_123044 = (inst_123043 & (64));
var inst_123045 = inst_123035.cljs$core$ISeq$;
var inst_123046 = (cljs.core.PROTOCOL_SENTINEL === inst_123045);
var inst_123047 = ((inst_123044) || (inst_123046));
var state_123150__$1 = state_123150;
if(cljs.core.truth_(inst_123047)){
var statearr_123233_125829 = state_123150__$1;
(statearr_123233_125829[(1)] = (11));

} else {
var statearr_123234_125830 = state_123150__$1;
(statearr_123234_125830[(1)] = (12));

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
});})(c__39003__auto__,map__123001,map__123001__$1,env,indexes,dependency_track))
;
return ((function (switch__38929__auto__,c__39003__auto__,map__123001,map__123001__$1,env,indexes,dependency_track){
return (function() {
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38930__auto____0 = (function (){
var statearr_123235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_123235[(0)] = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38930__auto__);

(statearr_123235[(1)] = (1));

return statearr_123235;
});
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38930__auto____1 = (function (state_123150){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_123150);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e123236){if((e123236 instanceof Object)){
var ex__38933__auto__ = e123236;
var statearr_123237_125831 = state_123150;
(statearr_123237_125831[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_123150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e123236;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__125832 = state_123150;
state_123150 = G__125832;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38930__auto__ = function(state_123150){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38930__auto____1.call(this,state_123150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38930__auto____0;
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38930__auto____1;
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,map__123001,map__123001__$1,env,indexes,dependency_track))
})();
var state__39005__auto__ = (function (){var statearr_123239 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_123239[(6)] = c__39003__auto__);

return statearr_123239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,map__123001,map__123001__$1,env,indexes,dependency_track))
);

return c__39003__auto__;
});
com.wsscode.pathom.connect.default_resolver_dispatch = (function com$wsscode$pathom$connect$default_resolver_dispatch(p__123241,entity){
var map__123242 = p__123241;
var map__123242__$1 = (((((!((map__123242 == null))))?(((((map__123242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__123242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__123242):map__123242);
var env = map__123242__$1;
var map__123243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123242__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__123243__$1 = (((((!((map__123243 == null))))?(((((map__123243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__123243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__123243):map__123243);
var resolver = map__123243__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123243__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Default resolver-dispatch is not supported on CLJS, please implement ::p.connect/resolver-dispatch in your parser environment.",cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Helper method that extract resolver symbol from env. It's recommended to use as a dispatch method for creating
 *   multi-methods for resolver dispatch.
 */
com.wsscode.pathom.connect.resolver_dispatch = (function com$wsscode$pathom$connect$resolver_dispatch(var_args){
var G__123252 = arguments.length;
switch (G__123252) {
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
com.wsscode.pathom.connect.resolver_dispatch_embedded = (function com$wsscode$pathom$connect$resolver_dispatch_embedded(p__123255,entity){
var map__123256 = p__123255;
var map__123256__$1 = (((((!((map__123256 == null))))?(((((map__123256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__123256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__123256):map__123256);
var env = map__123256__$1;
var map__123257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123256__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__123257__$1 = (((((!((map__123257 == null))))?(((((map__123257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__123257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__123257):map__123257);
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123257__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123257__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
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
var len__4730__auto___125834 = arguments.length;
var i__4731__auto___125835 = (0);
while(true){
if((i__4731__auto___125835 < len__4730__auto___125834)){
args__4736__auto__.push((arguments[i__4731__auto___125835]));

var G__125836 = (i__4731__auto___125835 + (1));
i__4731__auto___125835 = G__125836;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic = (function (p__123267,resolver,args){
var map__123268 = p__123267;
var map__123268__$1 = (((((!((map__123268 == null))))?(((((map__123268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__123268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__123268):map__123268);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123268__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
if(cljs.core.truth_(resolver_weights)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,resolver_weights,cljs.core.update,resolver,args);
} else {
return null;
}
});

com.wsscode.pathom.connect.update_resolver_weight.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.connect.update_resolver_weight.cljs$lang$applyTo = (function (seq123264){
var G__123265 = cljs.core.first(seq123264);
var seq123264__$1 = cljs.core.next(seq123264);
var G__123266 = cljs.core.first(seq123264__$1);
var seq123264__$2 = cljs.core.next(seq123264__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__123265,G__123266,seq123264__$2);
});

com.wsscode.pathom.connect.call_resolver_STAR_ = (function com$wsscode$pathom$connect$call_resolver_STAR_(p__123270,entity){
var map__123271 = p__123270;
var map__123271__$1 = (((((!((map__123271 == null))))?(((((map__123271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__123271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__123271):map__123271);
var env = map__123271__$1;
var resolver_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__123271__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.connect.default_resolver_dispatch);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123271__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var resolver_sym = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env));
var tid = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),resolver_sym,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),entity], null));
var start = com.wsscode.pathom.trace.now();
var res__44812__auto__ = (function (){try{return com.wsscode.pathom.core.exec_plugin_actions.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.connect","wrap-resolve","com.wsscode.pathom.connect/wrap-resolve",1728436586),resolver_dispatch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,entity], 0));
}catch (e123273){var e = e123273;
return e;
}})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44812__auto__)){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,res__44812__auto__,resolver_sym,tid,start,map__123271,map__123271__$1,env,resolver_dispatch,resolver_weights){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,res__44812__auto__,resolver_sym,tid,start,map__123271,map__123271__$1,env,resolver_dispatch,resolver_weights){
return (function (state_123303){
var state_val_123304 = (state_123303[(1)]);
if((state_val_123304 === (7))){
var state_123303__$1 = state_123303;
var statearr_123305_125837 = state_123303__$1;
(statearr_123305_125837[(2)] = null);

(statearr_123305_125837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123304 === (1))){
var state_123303__$1 = state_123303;
var statearr_123306_125838 = state_123303__$1;
(statearr_123306_125838[(2)] = null);

(statearr_123306_125838[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123304 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_123303,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_123303__$1 = state_123303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_123303__$1,(5),res__44812__auto__);
} else {
if((state_val_123304 === (6))){
var inst_123281 = com.wsscode.pathom.trace.now();
var inst_123282 = (inst_123281 - start);
var inst_123283 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(resolver_weights,cljs.core.update,resolver_sym,com.wsscode.pathom.connect.step_weight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_123282], 0));
var state_123303__$1 = state_123303;
var statearr_123307_125839 = state_123303__$1;
(statearr_123307_125839[(2)] = inst_123283);

(statearr_123307_125839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123304 === (3))){
var inst_123274 = (state_123303[(2)]);
var state_123303__$1 = state_123303;
var statearr_123308_125840 = state_123303__$1;
(statearr_123308_125840[(2)] = inst_123274);


cljs.core.async.impl.ioc_helpers.process_exception(state_123303__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123304 === (2))){
var inst_123301 = (state_123303[(2)]);
var state_123303__$1 = state_123303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_123303__$1,inst_123301);
} else {
if((state_val_123304 === (11))){
var inst_123279 = (state_123303[(7)]);
var inst_123297 = (state_123303[(2)]);
var inst_123298 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,inst_123297);
var inst_123299 = com.wsscode.common.async_cljs.throw_err(inst_123279);
var state_123303__$1 = (function (){var statearr_123309 = state_123303;
(statearr_123309[(8)] = inst_123298);

return statearr_123309;
})();
var statearr_123310_125841 = state_123303__$1;
(statearr_123310_125841[(2)] = inst_123299);


cljs.core.async.impl.ioc_helpers.process_exception(state_123303__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123304 === (9))){
var inst_123290 = (state_123303[(9)]);
var inst_123279 = (state_123303[(7)]);
var inst_123293 = com.wsscode.pathom.core.process_error(env,inst_123279);
var inst_123294 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_123290,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),inst_123293);
var state_123303__$1 = state_123303;
var statearr_123311_125842 = state_123303__$1;
(statearr_123311_125842[(2)] = inst_123294);

(statearr_123311_125842[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123304 === (5))){
var inst_123279 = (state_123303[(2)]);
var state_123303__$1 = (function (){var statearr_123312 = state_123303;
(statearr_123312[(7)] = inst_123279);

return statearr_123312;
})();
if(cljs.core.truth_(resolver_weights)){
var statearr_123313_125843 = state_123303__$1;
(statearr_123313_125843[(1)] = (6));

} else {
var statearr_123314_125844 = state_123303__$1;
(statearr_123314_125844[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123304 === (10))){
var inst_123290 = (state_123303[(9)]);
var state_123303__$1 = state_123303;
var statearr_123315_125845 = state_123303__$1;
(statearr_123315_125845[(2)] = inst_123290);

(statearr_123315_125845[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123304 === (8))){
var inst_123279 = (state_123303[(7)]);
var inst_123286 = (state_123303[(2)]);
var inst_123288 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_123289 = [new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624)];
var inst_123290 = cljs.core.PersistentHashMap.fromArrays(inst_123288,inst_123289);
var inst_123291 = com.wsscode.common.async_cljs.error_QMARK_(inst_123279);
var state_123303__$1 = (function (){var statearr_123316 = state_123303;
(statearr_123316[(9)] = inst_123290);

(statearr_123316[(10)] = inst_123286);

return statearr_123316;
})();
if(inst_123291){
var statearr_123317_125846 = state_123303__$1;
(statearr_123317_125846[(1)] = (9));

} else {
var statearr_123318_125847 = state_123303__$1;
(statearr_123318_125847[(1)] = (10));

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
});})(c__39003__auto__,res__44812__auto__,resolver_sym,tid,start,map__123271,map__123271__$1,env,resolver_dispatch,resolver_weights))
;
return ((function (switch__38929__auto__,c__39003__auto__,res__44812__auto__,resolver_sym,tid,start,map__123271,map__123271__$1,env,resolver_dispatch,resolver_weights){
return (function() {
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38930__auto____0 = (function (){
var statearr_123319 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_123319[(0)] = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38930__auto__);

(statearr_123319[(1)] = (1));

return statearr_123319;
});
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38930__auto____1 = (function (state_123303){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_123303);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e123320){if((e123320 instanceof Object)){
var ex__38933__auto__ = e123320;
var statearr_123321_125848 = state_123303;
(statearr_123321_125848[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_123303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e123320;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__125849 = state_123303;
state_123303 = G__125849;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38930__auto__ = function(state_123303){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38930__auto____1.call(this,state_123303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38930__auto____0;
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38930__auto____1;
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,res__44812__auto__,resolver_sym,tid,start,map__123271,map__123271__$1,env,resolver_dispatch,resolver_weights))
})();
var state__39005__auto__ = (function (){var statearr_123322 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_123322[(6)] = c__39003__auto__);

return statearr_123322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,res__44812__auto__,resolver_sym,tid,start,map__123271,map__123271__$1,env,resolver_dispatch,resolver_weights))
);

return c__39003__auto__;
} else {
var x = res__44812__auto__;
if(cljs.core.truth_(resolver_weights)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(resolver_weights,cljs.core.update,resolver_sym,com.wsscode.pathom.connect.step_weight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.trace.now() - start)], 0));
} else {
}

com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,(function (){var G__123323 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624)], null);
if(com.wsscode.common.async_cljs.error_QMARK_(x)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__123323,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),com.wsscode.pathom.core.process_error(env,x));
} else {
return G__123323;
}
})());

return com.wsscode.common.async_cljs.throw_err(x);
}
});
com.wsscode.pathom.connect.call_resolver = (function com$wsscode$pathom$connect$call_resolver(p__123325,entity){
var map__123326 = p__123325;
var map__123326__$1 = (((((!((map__123326 == null))))?(((((map__123326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__123326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__123326):map__123326);
var env = map__123326__$1;
var pool_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123326__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449));
if(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__123326,map__123326__$1,env,pool_chan){
return (function (p1__123324_SHARP_){
return cljs.core.contains_QMARK_(com.wsscode.pathom.core.break_values,cljs.core.second(p1__123324_SHARP_));
});})(map__123326,map__123326__$1,env,pool_chan))
,entity))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver input",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity","entity",-450970276),entity], null));
} else {
if(cljs.core.truth_(pool_chan)){
var out = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__39003__auto___125850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto___125850,out,map__123326,map__123326__$1,env,pool_chan){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto___125850,out,map__123326,map__123326__$1,env,pool_chan){
return (function (state_123345){
var state_val_123346 = (state_123345[(1)]);
if((state_val_123346 === (1))){
var inst_123328 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_123329 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_123330 = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(inst_123329);
var inst_123331 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_123332 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_123331);
var inst_123333 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_123334 = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(inst_123333);
var inst_123335 = [new cljs.core.Keyword("com.wsscode.pathom.connect","schedule-resolver","com.wsscode.pathom.connect/schedule-resolver",939563419),inst_123330,inst_123332,inst_123334,entity];
var inst_123336 = cljs.core.PersistentHashMap.fromArrays(inst_123328,inst_123335);
var inst_123337 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_123336);
var inst_123338 = [new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"f","f",-1597136552)];
var inst_123339 = (function (){var tid = inst_123337;
return ((function (tid,inst_123328,inst_123329,inst_123330,inst_123331,inst_123332,inst_123333,inst_123334,inst_123335,inst_123336,inst_123337,inst_123338,state_val_123346,c__39003__auto___125850,out,map__123326,map__123326__$1,env,pool_chan){
return (function (){
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","schedule-resolver","com.wsscode.pathom.connect/schedule-resolver",939563419)], null));

try{return com.wsscode.pathom.connect.call_resolver_STAR_(env,entity);
}catch (e123347){var e = e123347;
return e;
}});
;})(tid,inst_123328,inst_123329,inst_123330,inst_123331,inst_123332,inst_123333,inst_123334,inst_123335,inst_123336,inst_123337,inst_123338,state_val_123346,c__39003__auto___125850,out,map__123326,map__123326__$1,env,pool_chan))
})();
var inst_123340 = [out,inst_123339];
var inst_123341 = cljs.core.PersistentHashMap.fromArrays(inst_123338,inst_123340);
var state_123345__$1 = state_123345;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_123345__$1,(2),pool_chan,inst_123341);
} else {
if((state_val_123346 === (2))){
var inst_123343 = (state_123345[(2)]);
var state_123345__$1 = state_123345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_123345__$1,inst_123343);
} else {
return null;
}
}
});})(c__39003__auto___125850,out,map__123326,map__123326__$1,env,pool_chan))
;
return ((function (switch__38929__auto__,c__39003__auto___125850,out,map__123326,map__123326__$1,env,pool_chan){
return (function() {
var com$wsscode$pathom$connect$call_resolver_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$connect$call_resolver_$_state_machine__38930__auto____0 = (function (){
var statearr_123348 = [null,null,null,null,null,null,null];
(statearr_123348[(0)] = com$wsscode$pathom$connect$call_resolver_$_state_machine__38930__auto__);

(statearr_123348[(1)] = (1));

return statearr_123348;
});
var com$wsscode$pathom$connect$call_resolver_$_state_machine__38930__auto____1 = (function (state_123345){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_123345);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e123349){if((e123349 instanceof Object)){
var ex__38933__auto__ = e123349;
var statearr_123350_125851 = state_123345;
(statearr_123350_125851[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_123345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e123349;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__125852 = state_123345;
state_123345 = G__125852;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$connect$call_resolver_$_state_machine__38930__auto__ = function(state_123345){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$call_resolver_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$call_resolver_$_state_machine__38930__auto____1.call(this,state_123345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$call_resolver_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$call_resolver_$_state_machine__38930__auto____0;
com$wsscode$pathom$connect$call_resolver_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$call_resolver_$_state_machine__38930__auto____1;
return com$wsscode$pathom$connect$call_resolver_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto___125850,out,map__123326,map__123326__$1,env,pool_chan))
})();
var state__39005__auto__ = (function (){var statearr_123351 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_123351[(6)] = c__39003__auto___125850);

return statearr_123351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto___125850,out,map__123326,map__123326__$1,env,pool_chan))
);


return out;
} else {
return com.wsscode.pathom.connect.call_resolver_STAR_(env,entity);
}
}
});
com.wsscode.pathom.connect.entity_select_keys = (function com$wsscode$pathom$connect$entity_select_keys(env,entity,input){
var entity__$1 = com.wsscode.pathom.core.maybe_atom(entity);
var res__44802__auto__ = ((clojure.set.subset_QMARK_(input,entity__$1))?entity__$1:com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),entity__$1),new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404)], 0)),cljs.core.vec(input)));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44802__auto__)){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,res__44802__auto__,entity__$1){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,res__44802__auto__,entity__$1){
return (function (state_123363){
var state_val_123364 = (state_123363[(1)]);
if((state_val_123364 === (1))){
var state_123363__$1 = state_123363;
var statearr_123365_125853 = state_123363__$1;
(statearr_123365_125853[(2)] = null);

(statearr_123365_125853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123364 === (2))){
var inst_123361 = (state_123363[(2)]);
var state_123363__$1 = state_123363;
return cljs.core.async.impl.ioc_helpers.return_chan(state_123363__$1,inst_123361);
} else {
if((state_val_123364 === (3))){
var inst_123352 = (state_123363[(2)]);
var state_123363__$1 = state_123363;
var statearr_123366_125854 = state_123363__$1;
(statearr_123366_125854[(2)] = inst_123352);


cljs.core.async.impl.ioc_helpers.process_exception(state_123363__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123364 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_123363,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_123363__$1 = state_123363;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_123363__$1,(5),res__44802__auto__);
} else {
if((state_val_123364 === (5))){
var inst_123357 = (state_123363[(2)]);
var inst_123358 = com.wsscode.common.async_cljs.throw_err(inst_123357);
var inst_123359 = cljs.core.select_keys(inst_123358,input);
var state_123363__$1 = state_123363;
var statearr_123367_125855 = state_123363__$1;
(statearr_123367_125855[(2)] = inst_123359);


cljs.core.async.impl.ioc_helpers.process_exception(state_123363__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39003__auto__,res__44802__auto__,entity__$1))
;
return ((function (switch__38929__auto__,c__39003__auto__,res__44802__auto__,entity__$1){
return (function() {
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38930__auto____0 = (function (){
var statearr_123369 = [null,null,null,null,null,null,null];
(statearr_123369[(0)] = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38930__auto__);

(statearr_123369[(1)] = (1));

return statearr_123369;
});
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38930__auto____1 = (function (state_123363){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_123363);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e123371){if((e123371 instanceof Object)){
var ex__38933__auto__ = e123371;
var statearr_123372_125856 = state_123363;
(statearr_123372_125856[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_123363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e123371;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__125857 = state_123363;
state_123363 = G__125857;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38930__auto__ = function(state_123363){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38930__auto____1.call(this,state_123363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38930__auto____0;
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38930__auto____1;
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,res__44802__auto__,entity__$1))
})();
var state__39005__auto__ = (function (){var statearr_123374 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_123374[(6)] = c__39003__auto__);

return statearr_123374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,res__44802__auto__,entity__$1))
);

return c__39003__auto__;
} else {
var e = res__44802__auto__;
return cljs.core.select_keys(e,input);
}
});
com.wsscode.pathom.connect.all_values_valid_QMARK_ = (function com$wsscode$pathom$connect$all_values_valid_QMARK_(m,input){
return ((cljs.core.every_QMARK_((function (p__123381){
var vec__123382 = p__123381;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123382,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123382,(1),null);
return cljs.core.not((com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.core.break_values.call(null,v)));
}),m)) && (cljs.core.every_QMARK_(m,input)));
});
com.wsscode.pathom.connect.cache_batch = (function com$wsscode$pathom$connect$cache_batch(env,resolver_sym,linked_results){
var params = com.wsscode.pathom.core.params(env);
var seq__123385 = cljs.core.seq(linked_results);
var chunk__123386 = null;
var count__123387 = (0);
var i__123388 = (0);
while(true){
if((i__123388 < count__123387)){
var vec__123395 = chunk__123386.cljs$core$IIndexed$_nth$arity$2(null,i__123388);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123395,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123395,(1),null);
com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,input,params], null),((function (seq__123385,chunk__123386,count__123387,i__123388,vec__123395,input,value,params){
return (function (){
return value;
});})(seq__123385,chunk__123386,count__123387,i__123388,vec__123395,input,value,params))
);


var G__125858 = seq__123385;
var G__125859 = chunk__123386;
var G__125860 = count__123387;
var G__125861 = (i__123388 + (1));
seq__123385 = G__125858;
chunk__123386 = G__125859;
count__123387 = G__125860;
i__123388 = G__125861;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__123385);
if(temp__5720__auto__){
var seq__123385__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__123385__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__123385__$1);
var G__125862 = cljs.core.chunk_rest(seq__123385__$1);
var G__125863 = c__4550__auto__;
var G__125864 = cljs.core.count(c__4550__auto__);
var G__125865 = (0);
seq__123385 = G__125862;
chunk__123386 = G__125863;
count__123387 = G__125864;
i__123388 = G__125865;
continue;
} else {
var vec__123399 = cljs.core.first(seq__123385__$1);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123399,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123399,(1),null);
com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,input,params], null),((function (seq__123385,chunk__123386,count__123387,i__123388,vec__123399,input,value,seq__123385__$1,temp__5720__auto__,params){
return (function (){
return value;
});})(seq__123385,chunk__123386,count__123387,i__123388,vec__123399,input,value,seq__123385__$1,temp__5720__auto__,params))
);


var G__125866 = cljs.core.next(seq__123385__$1);
var G__125867 = null;
var G__125868 = (0);
var G__125869 = (0);
seq__123385 = G__125866;
chunk__123386 = G__125867;
count__123387 = G__125868;
i__123388 = G__125869;
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
var G__123404 = arguments.length;
switch (G__123404) {
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
var G__125871 = null;
var G__125871__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__125871__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__125871__2 = (function (result,x){
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen),fx)){
return result;
} else {
seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen.cljs$core$IDeref$_deref$arity$1(null),fx));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__125871 = function(result,x){
switch(arguments.length){
case 0:
return G__125871__0.call(this);
case 1:
return G__125871__1.call(this,result);
case 2:
return G__125871__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__125871.cljs$core$IFn$_invoke$arity$0 = G__125871__0;
G__125871.cljs$core$IFn$_invoke$arity$1 = G__125871__1;
G__125871.cljs$core$IFn$_invoke$arity$2 = G__125871__2;
return G__125871;
})()
;})(seen))
});
});

com.wsscode.pathom.connect.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function com$wsscode$pathom$connect$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
var fexpr__123419 = (function (p__123421,seen__$1){
while(true){
var vec__123423 = p__123421;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123423,(0),null);
var xs__$1 = vec__123423;
var temp__5720__auto__ = cljs.core.seq(xs__$1);
if(temp__5720__auto__){
var s = temp__5720__auto__;
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(seen__$1,fx)){
var G__125872 = cljs.core.rest(s);
var G__125873 = seen__$1;
p__123421 = G__125872;
seen__$1 = G__125873;
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
return fexpr__123419(xs,seen);
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
var new_paths = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__123426_SHARP_){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,p1__123426_SHARP_], null)],null));
})),resolvers);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(input,keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pending], 0));
if(cljs.core.seq(missing)){
var missing_paths = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (new_paths,missing){
return (function (p1__123428_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (new_paths,missing){
return (function (acc,x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,x);
});})(new_paths,missing))
,cljs.core.first(p1__123428_SHARP_),cljs.core.next(p1__123428_SHARP_));
});})(new_paths,missing))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(com.wsscode.common.combinatorics.cartesian_product,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (new_paths,missing){
return (function (p1__123427_SHARP_){
var G__123434 = index_oir;
var G__123435 = keys;
var G__123436 = bad_keys;
var G__123437 = p1__123427_SHARP_;
var G__123438 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pending,p1__123427_SHARP_);
return (com.wsscode.pathom.connect.compute_paths_STAR_.cljs$core$IFn$_invoke$arity$5 ? com.wsscode.pathom.connect.compute_paths_STAR_.cljs$core$IFn$_invoke$arity$5(G__123434,G__123435,G__123436,G__123437,G__123438) : com.wsscode.pathom.connect.compute_paths_STAR_.call(null,G__123434,G__123435,G__123436,G__123437,G__123438));
});})(new_paths,missing))
),missing)));
if(cljs.core.seq(missing_paths)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(paths,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (missing_paths,new_paths,missing){
return (function (p1__123429_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (missing_paths,new_paths,missing){
return (function (acc,x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,x);
});})(missing_paths,new_paths,missing))
,cljs.core.first(p1__123429_SHARP_),cljs.core.next(p1__123429_SHARP_));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$3((function (p1__123442_SHARP_){
return com.wsscode.pathom.connect.distinct_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__123442_SHARP_);
}),(function (p1__123443_SHARP_){
return com.wsscode.pathom.connect.distinct_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,p1__123443_SHARP_);
}),cljs.core.rseq)),com.wsscode.pathom.connect.compute_paths_STAR_(index_oir,keys,bad_keys,attr,cljs.core.PersistentHashSet.createAsIfByAssoc([attr])));
});
com.wsscode.pathom.connect.split_good_bad_keys = (function com$wsscode$pathom$connect$split_good_bad_keys(entity){
var map__123447 = cljs.core.group_by((function (p1__123446_SHARP_){
return cljs.core.contains_QMARK_(com.wsscode.pathom.core.break_values,cljs.core.second(p1__123446_SHARP_));
}),entity);
var map__123447__$1 = (((((!((map__123447 == null))))?(((((map__123447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__123447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__123447):map__123447);
var bad_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123447__$1,true);
var good_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123447__$1,false);
var good_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),good_keys);
var bad_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),bad_keys);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [good_keys__$1,bad_keys__$1], null);
});
com.wsscode.pathom.connect.path_cost = (function com$wsscode$pathom$connect$path_cost(p__123450,path){
var map__123451 = p__123450;
var map__123451__$1 = (((((!((map__123451 == null))))?(((((map__123451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__123451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__123451):map__123451);
var env = map__123451__$1;
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123451__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123451__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
var weights = (function (){var or__4131__auto__ = (function (){var G__123454 = resolver_weights;
if((G__123454 == null)){
return null;
} else {
return cljs.core.deref(G__123454);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (weights,map__123451,map__123451__$1,env,resolver_weights,request_cache){
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
});})(weights,map__123451,map__123451__$1,env,resolver_weights,request_cache))
),cljs.core._PLUS_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(path));
});
com.wsscode.pathom.connect.default_sort_plan = (function com$wsscode$pathom$connect$default_sort_plan(env,plan){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__123455_SHARP_){
return com.wsscode.pathom.connect.path_cost(env,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__123455_SHARP_));
}),plan);
});
com.wsscode.pathom.connect.resolve_plan = (function com$wsscode$pathom$connect$resolve_plan(p__123456){
var map__123457 = p__123456;
var map__123457__$1 = (((((!((map__123457 == null))))?(((((map__123457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__123457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__123457):map__123457);
var env = map__123457__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123457__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var sort_plan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123457__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sort-plan","com.wsscode.pathom.connect/sort-plan",-1506396873));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var sort_plan__$1 = (function (){var or__4131__auto__ = sort_plan;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.connect.default_sort_plan;
}
})();
var vec__123459 = com.wsscode.pathom.connect.split_good_bad_keys(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env));
var good_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123459,(0),null);
var bad_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123459,(1),null);
var G__123462 = env;
var G__123463 = com.wsscode.pathom.connect.compute_paths(new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746).cljs$core$IFn$_invoke$arity$1(indexes),good_keys,bad_keys,key);
return (sort_plan__$1.cljs$core$IFn$_invoke$arity$2 ? sort_plan__$1.cljs$core$IFn$_invoke$arity$2(G__123462,G__123463) : sort_plan__$1.call(null,G__123462,G__123463));
});
com.wsscode.pathom.connect.resolver__GT_output = (function com$wsscode$pathom$connect$resolver__GT_output(env,resolver_sym){
var map__123466 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),resolver_sym], null));
var map__123466__$1 = (((((!((map__123466 == null))))?(((((map__123466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__123466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__123466):map__123466);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123466__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var compute_output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123466__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","compute-output","com.wsscode.pathom.connect/compute-output",2103799942));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__123469_SHARP_){
return com.wsscode.pathom.connect.output__GT_provides(com.wsscode.pathom.connect.resolver__GT_output(env,cljs.core.second(p1__123469_SHARP_)));
})),plan);
});
com.wsscode.pathom.connect.plan__GT_resolvers = (function com$wsscode$pathom$connect$plan__GT_resolvers(plan){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.flatten(plan));
});
com.wsscode.pathom.connect.decrease_path_costs = (function com$wsscode$pathom$connect$decrease_path_costs(p__123473,plan){
var map__123474 = p__123473;
var map__123474__$1 = (((((!((map__123474 == null))))?(((((map__123474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__123474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__123474):map__123474);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123474__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var resolver_weight_decrease_amount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__123474__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weight-decrease-amount","com.wsscode.pathom.connect/resolver-weight-decrease-amount",-937582293),(1));
if(cljs.core.truth_(resolver_weights)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(resolver_weights,((function (map__123474,map__123474__$1,resolver_weights,resolver_weight_decrease_amount){
return (function (p1__123472_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__123474,map__123474__$1,resolver_weights,resolver_weight_decrease_amount){
return (function (rw,rsym){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rw,rsym,(function (){var x__4219__auto__ = (1);
var y__4220__auto__ = (cljs.core.get.cljs$core$IFn$_invoke$arity$3(rw,rsym,(0)) - resolver_weight_decrease_amount);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());
});})(map__123474,map__123474__$1,resolver_weights,resolver_weight_decrease_amount))
,p1__123472_SHARP_,com.wsscode.pathom.connect.plan__GT_resolvers(plan));
});})(map__123474,map__123474__$1,resolver_weights,resolver_weight_decrease_amount))
);
} else {
return null;
}
});
com.wsscode.pathom.connect.reader_compute_plan = (function com$wsscode$pathom$connect$reader_compute_plan(env,failed_resolvers){
var plan_trace_id = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978)], null));
var plan = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (plan_trace_id){
return (function (p1__123478_SHARP_){
return cljs.core.some(failed_resolvers,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__123478_SHARP_));
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
return (function (p__123485,p__123486){
var map__123487 = p__123485;
var map__123487__$1 = (((((!((map__123487 == null))))?(((((map__123487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__123487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__123487):map__123487);
var acc = map__123487__$1;
var provided = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123487__$1,new cljs.core.Keyword(null,"provided","provided",-1493091365));
var map__123488 = p__123486;
var map__123488__$1 = (((((!((map__123488 == null))))?(((((map__123488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__123488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__123488):map__123488);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123488__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.contains_QMARK_(provided,key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj,key);
} else {
var temp__5718__auto__ = cljs.core.first(com.wsscode.pathom.connect.resolve_plan(cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),key)));
if(cljs.core.truth_(temp__5718__auto__)){
var plan = temp__5718__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.into,(function (){var G__123493 = plan;
var G__123493__$1 = (((G__123493 == null))?null:cljs.core.first(G__123493));
var G__123493__$2 = (((G__123493__$1 == null))?null:cljs.core.second(G__123493__$1));
var G__123493__$3 = (((G__123493__$2 == null))?null:com.wsscode.pathom.connect.resolver_data(env,G__123493__$2));
if((G__123493__$3 == null)){
return null;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121).cljs$core$IFn$_invoke$arity$1(G__123493__$3);
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
com.wsscode.pathom.connect.project_parent_query_attributes = (function com$wsscode$pathom$connect$project_parent_query_attributes(p__123497){
var map__123499 = p__123497;
var map__123499__$1 = (((((!((map__123499 == null))))?(((((map__123499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__123499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__123499):map__123499);
var env = map__123499__$1;
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123499__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
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
com.wsscode.pathom.connect.reader = (function com$wsscode$pathom$connect$reader(p__123508){
var map__123509 = p__123508;
var map__123509__$1 = (((((!((map__123509 == null))))?(((((map__123509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__123509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__123509):map__123509);
var env = map__123509__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123509__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123509__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var p = com.wsscode.pathom.core.params(env);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null)))){
var temp__5718__auto__ = com.wsscode.pathom.connect.pick_resolver(env);
if(cljs.core.truth_(temp__5718__auto__)){
var map__123513 = temp__5718__auto__;
var map__123513__$1 = (((((!((map__123513 == null))))?(((((map__123513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__123513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__123513):map__123513);
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123513__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123513__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var map__123515 = com.wsscode.pathom.connect.resolver_data(env,s);
var map__123515__$1 = (((((!((map__123515 == null))))?(((((map__123515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__123515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__123515):map__123515);
var resolver = map__123515__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__123515__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123515__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123515__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver);
var response = (cljs.core.truth_(cache_QMARK_)?com.wsscode.common.async_cljs.throw_err(com.wsscode.pathom.core.cached_STAR_(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,e,p], null),((function (map__123515,map__123515__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__123513,map__123513__$1,e,s,temp__5718__auto__,k,p,map__123509,map__123509__$1,env,indexes,processing_sequence){
return (function (){
if(cljs.core.truth_((function (){var and__4120__auto__ = batch_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return processing_sequence;
} else {
return and__4120__auto__;
}
})())){
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (map__123515,map__123515__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__123513,map__123513__$1,e,s,temp__5718__auto__,k,p,map__123509,map__123509__$1,env,indexes,processing_sequence){
return (function (p1__123505_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__123505_SHARP_,input);
});})(map__123515,map__123515__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__123513,map__123513__$1,e,s,temp__5718__auto__,k,p,map__123509,map__123509__$1,env,indexes,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__123515,map__123515__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__123513,map__123513__$1,e,s,temp__5718__auto__,k,p,map__123509,map__123509__$1,env,indexes,processing_sequence){
return (function (p1__123504_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__123504_SHARP_,input);
});})(map__123515,map__123515__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__123513,map__123513__$1,e,s,temp__5718__auto__,k,p,map__123509,map__123509__$1,env,indexes,processing_sequence))
,processing_sequence)));
var batch_result = com.wsscode.pathom.connect.call_resolver(env__$1,items);
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env__$1,s,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
} else {
return com.wsscode.pathom.connect.call_resolver(env__$1,e);
}
});})(map__123515,map__123515__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__123513,map__123513__$1,e,s,temp__5718__auto__,k,p,map__123509,map__123509__$1,env,indexes,processing_sequence))
)):com.wsscode.pathom.connect.call_resolver(env__$1,e));
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),env__$1);
var response__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
if((!((((response__$1 == null)) || (cljs.core.map_QMARK_(response__$1)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Response from resolver must be a map.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),s,new cljs.core.Keyword(null,"response","response",-1068424192),response__$1], null));
} else {
}

com.wsscode.pathom.core.swap_entity_BANG_(env_SINGLEQUOTE_,((function (map__123515,map__123515__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,response,env_SINGLEQUOTE_,response__$1,map__123513,map__123513__$1,e,s,temp__5718__auto__,k,p,map__123509,map__123509__$1,env,indexes,processing_sequence){
return (function (p1__123506_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$1,p1__123506_SHARP_], 0));
});})(map__123515,map__123515__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,response,env_SINGLEQUOTE_,response__$1,map__123513,map__123513__$1,e,s,temp__5718__auto__,k,p,map__123509,map__123509__$1,env,indexes,processing_sequence))
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
com.wsscode.pathom.connect.process_simple_reader_response = (function com$wsscode$pathom$connect$process_simple_reader_response(p__123521,response){
var map__123522 = p__123521;
var map__123522__$1 = (((((!((map__123522 == null))))?(((((map__123522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__123522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__123522):map__123522);
var env = map__123522__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123522__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
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
com.wsscode.pathom.connect.reader2 = (function com$wsscode$pathom$connect$reader2(p__123531){
var map__123532 = p__123531;
var map__123532__$1 = (((((!((map__123532 == null))))?(((((map__123532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__123532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__123532):map__123532);
var env = map__123532__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123532__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__123532__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123532__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var temp__5718__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__123537 = temp__5718__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123537,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123537,(1),null);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var G__123543 = plan;
var vec__123545 = G__123543;
var seq__123546 = cljs.core.seq(vec__123545);
var first__123547 = cljs.core.first(seq__123546);
var seq__123546__$1 = cljs.core.next(seq__123546);
var step = first__123547;
var tail = seq__123546__$1;
var failed_resolvers = cljs.core.PersistentArrayMap.EMPTY;
var out_left = out;
var G__123543__$1 = G__123543;
var failed_resolvers__$1 = failed_resolvers;
var out_left__$1 = out_left;
while(true){
var vec__123573 = G__123543__$1;
var seq__123574 = cljs.core.seq(vec__123573);
var first__123575 = cljs.core.first(seq__123574);
var seq__123574__$1 = cljs.core.next(seq__123574);
var step__$1 = first__123575;
var tail__$1 = seq__123574__$1;
var failed_resolvers__$2 = failed_resolvers__$1;
var out_left__$2 = out_left__$1;
if(cljs.core.truth_(step__$1)){
var vec__123577 = step__$1;
var key_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123577,(0),null);
var resolver_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123577,(1),null);
var map__123580 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),resolver_sym], null));
var map__123580__$1 = (((((!((map__123580 == null))))?(((((map__123580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__123580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__123580):map__123580);
var resolver = map__123580__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__123580__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123580__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123580__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = com.wsscode.pathom.connect.resolver__GT_output(env,resolver_sym);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver);
var e = cljs.core.select_keys(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env__$1),input);
var p = com.wsscode.pathom.core.params(env__$1);
var trace_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),e], null);
var response = (cljs.core.truth_(cache_QMARK_)?com.wsscode.common.async_cljs.throw_err(com.wsscode.pathom.core.cached_STAR_(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,e,p], null),((function (G__123543__$1,failed_resolvers__$1,out_left__$1,vec__123577,key_SINGLEQUOTE_,resolver_sym,map__123580,map__123580__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__123573,seq__123574,first__123575,seq__123574__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__123543,vec__123545,seq__123546,first__123547,seq__123546__$1,step,tail,failed_resolvers,out_left,key,vec__123537,plan,out,temp__5718__auto__,map__123532,map__123532__$1,env,indexes,max_resolver_weight,processing_sequence){
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
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (G__123543__$1,failed_resolvers__$1,out_left__$1,_,trace_id__21490__auto__,vec__123577,key_SINGLEQUOTE_,resolver_sym,map__123580,map__123580__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__123573,seq__123574,first__123575,seq__123574__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__123543,vec__123545,seq__123546,first__123547,seq__123546__$1,step,tail,failed_resolvers,out_left,key,vec__123537,plan,out,temp__5718__auto__,map__123532,map__123532__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__123527_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__123527_SHARP_,input);
});})(G__123543__$1,failed_resolvers__$1,out_left__$1,_,trace_id__21490__auto__,vec__123577,key_SINGLEQUOTE_,resolver_sym,map__123580,map__123580__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__123573,seq__123574,first__123575,seq__123574__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__123543,vec__123545,seq__123546,first__123547,seq__123546__$1,step,tail,failed_resolvers,out_left,key,vec__123537,plan,out,temp__5718__auto__,map__123532,map__123532__$1,env,indexes,max_resolver_weight,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__123543__$1,failed_resolvers__$1,out_left__$1,_,trace_id__21490__auto__,vec__123577,key_SINGLEQUOTE_,resolver_sym,map__123580,map__123580__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__123573,seq__123574,first__123575,seq__123574__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__123543,vec__123545,seq__123546,first__123547,seq__123546__$1,step,tail,failed_resolvers,out_left,key,vec__123537,plan,out,temp__5718__auto__,map__123532,map__123532__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__123526_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__123526_SHARP_,input);
});})(G__123543__$1,failed_resolvers__$1,out_left__$1,_,trace_id__21490__auto__,vec__123577,key_SINGLEQUOTE_,resolver_sym,map__123580,map__123580__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__123573,seq__123574,first__123575,seq__123574__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__123543,vec__123545,seq__123546,first__123547,seq__123546__$1,step,tail,failed_resolvers,out_left,key,vec__123537,plan,out,temp__5718__auto__,map__123532,map__123532__$1,env,indexes,max_resolver_weight,processing_sequence))
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
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (G__123543__$1,failed_resolvers__$1,out_left__$1,_,vec__123577,key_SINGLEQUOTE_,resolver_sym,map__123580,map__123580__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__123573,seq__123574,first__123575,seq__123574__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__123543,vec__123545,seq__123546,first__123547,seq__123546__$1,step,tail,failed_resolvers,out_left,key,vec__123537,plan,out,temp__5718__auto__,map__123532,map__123532__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__123527_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__123527_SHARP_,input);
});})(G__123543__$1,failed_resolvers__$1,out_left__$1,_,vec__123577,key_SINGLEQUOTE_,resolver_sym,map__123580,map__123580__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__123573,seq__123574,first__123575,seq__123574__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__123543,vec__123545,seq__123546,first__123547,seq__123546__$1,step,tail,failed_resolvers,out_left,key,vec__123537,plan,out,temp__5718__auto__,map__123532,map__123532__$1,env,indexes,max_resolver_weight,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__123543__$1,failed_resolvers__$1,out_left__$1,_,vec__123577,key_SINGLEQUOTE_,resolver_sym,map__123580,map__123580__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__123573,seq__123574,first__123575,seq__123574__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__123543,vec__123545,seq__123546,first__123547,seq__123546__$1,step,tail,failed_resolvers,out_left,key,vec__123537,plan,out,temp__5718__auto__,map__123532,map__123532__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__123526_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__123526_SHARP_,input);
});})(G__123543__$1,failed_resolvers__$1,out_left__$1,_,vec__123577,key_SINGLEQUOTE_,resolver_sym,map__123580,map__123580__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__123573,seq__123574,first__123575,seq__123574__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__123543,vec__123545,seq__123546,first__123547,seq__123546__$1,step,tail,failed_resolvers,out_left,key,vec__123537,plan,out,temp__5718__auto__,map__123532,map__123532__$1,env,indexes,max_resolver_weight,processing_sequence))
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
});})(G__123543__$1,failed_resolvers__$1,out_left__$1,vec__123577,key_SINGLEQUOTE_,resolver_sym,map__123580,map__123580__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__123573,seq__123574,first__123575,seq__123574__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__123543,vec__123545,seq__123546,first__123547,seq__123546__$1,step,tail,failed_resolvers,out_left,key,vec__123537,plan,out,temp__5718__auto__,map__123532,map__123532__$1,env,indexes,max_resolver_weight,processing_sequence))
)):com.wsscode.pathom.connect.call_resolver(env__$1,e));
var response__$1 = (function (){var or__4131__auto__ = response;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var replan = ((function (G__123543__$1,failed_resolvers__$1,out_left__$1,vec__123577,key_SINGLEQUOTE_,resolver_sym,map__123580,map__123580__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,response,response__$1,vec__123573,seq__123574,first__123575,seq__123574__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__123543,vec__123545,seq__123546,first__123547,seq__123546__$1,step,tail,failed_resolvers,out_left,key,vec__123537,plan,out,temp__5718__auto__,map__123532,map__123532__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (error){
var failed_resolvers__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers__$2,resolver_sym,error);
com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$1,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (G__123543__$1,failed_resolvers__$1,out_left__$1,failed_resolvers__$3,vec__123577,key_SINGLEQUOTE_,resolver_sym,map__123580,map__123580__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,response,response__$1,vec__123573,seq__123574,first__123575,seq__123574__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__123543,vec__123545,seq__123546,first__123547,seq__123546__$1,step,tail,failed_resolvers,out_left,key,vec__123537,plan,out,temp__5718__auto__,map__123532,map__123532__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__123528_SHARP_){
var x__4222__auto__ = ((function (){var or__4131__auto__ = p1__123528_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() * (2));
var y__4223__auto__ = max_resolver_weight;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});})(G__123543__$1,failed_resolvers__$1,out_left__$1,failed_resolvers__$3,vec__123577,key_SINGLEQUOTE_,resolver_sym,map__123580,map__123580__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,response,response__$1,vec__123573,seq__123574,first__123575,seq__123574__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__123543,vec__123545,seq__123546,first__123547,seq__123546__$1,step,tail,failed_resolvers,out_left,key,vec__123537,plan,out,temp__5718__auto__,map__123532,map__123532__$1,env,indexes,max_resolver_weight,processing_sequence))
], 0));

var temp__5718__auto____$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$1,failed_resolvers__$3);
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__123587 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123587,(0),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123587,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan__$1,failed_resolvers__$3,out_SINGLEQUOTE_], null);
} else {
return null;
}
});})(G__123543__$1,failed_resolvers__$1,out_left__$1,vec__123577,key_SINGLEQUOTE_,resolver_sym,map__123580,map__123580__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,response,response__$1,vec__123573,seq__123574,first__123575,seq__123574__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__123543,vec__123545,seq__123546,first__123547,seq__123546__$1,step,tail,failed_resolvers,out_left,key,vec__123537,plan,out,temp__5718__auto__,map__123532,map__123532__$1,env,indexes,max_resolver_weight,processing_sequence))
;
if(cljs.core.map_QMARK_(response__$1)){
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(response__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),env__$1);
var response__$2 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
com.wsscode.pathom.core.swap_entity_BANG_(env_SINGLEQUOTE_,((function (G__123543__$1,failed_resolvers__$1,out_left__$1,env_SINGLEQUOTE_,response__$2,vec__123577,key_SINGLEQUOTE_,resolver_sym,map__123580,map__123580__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,response,response__$1,replan,vec__123573,seq__123574,first__123575,seq__123574__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__123543,vec__123545,seq__123546,first__123547,seq__123546__$1,step,tail,failed_resolvers,out_left,key,vec__123537,plan,out,temp__5718__auto__,map__123532,map__123532__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__123529_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$2,p1__123529_SHARP_], 0));
});})(G__123543__$1,failed_resolvers__$1,out_left__$1,env_SINGLEQUOTE_,response__$2,vec__123577,key_SINGLEQUOTE_,resolver_sym,map__123580,map__123580__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,response,response__$1,replan,vec__123573,seq__123574,first__123575,seq__123574__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__123543,vec__123545,seq__123546,first__123547,seq__123546__$1,step,tail,failed_resolvers,out_left,key,vec__123537,plan,out,temp__5718__auto__,map__123532,map__123532__$1,env,indexes,max_resolver_weight,processing_sequence))
);

if(((cljs.core.contains_QMARK_(response__$2,key_SINGLEQUOTE_)) && (cljs.core.not((function (){var G__123592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response__$2,key_SINGLEQUOTE_);
return (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(G__123592) : com.wsscode.pathom.core.break_values.call(null,G__123592));
})())))){
var out_provides = com.wsscode.pathom.connect.output__GT_provides(output);
com.wsscode.pathom.trace.trace(env_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym], null));

if(cljs.core.seq(tail__$1)){
var G__125874 = tail__$1;
var G__125875 = failed_resolvers__$2;
var G__125876 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(out_left__$2,out_provides);
G__123543__$1 = G__125874;
failed_resolvers__$1 = G__125875;
out_left__$1 = G__125876;
continue;
} else {
return com.wsscode.pathom.connect.process_simple_reader_response(env_SINGLEQUOTE_,response__$2);
}
} else {
var temp__5718__auto____$1 = replan(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$2,new cljs.core.Keyword(null,"key","key",-1516042587),key_SINGLEQUOTE_], null)));
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__123594 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123594,(0),null);
var failed_resolvers__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123594,(1),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123594,(2),null);
var G__125877 = plan__$1;
var G__125878 = failed_resolvers__$3;
var G__125879 = out_SINGLEQUOTE_;
G__123543__$1 = G__125877;
failed_resolvers__$1 = G__125878;
out_left__$1 = G__125879;
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
var vec__123598 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123598,(0),null);
var failed_resolvers__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123598,(1),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__123598,(2),null);
var G__125880 = plan__$1;
var G__125881 = failed_resolvers__$3;
var G__125882 = out_SINGLEQUOTE_;
G__123543__$1 = G__125880;
failed_resolvers__$1 = G__125881;
out_left__$1 = G__125882;
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
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__){
return (function (state_123634){
var state_val_123635 = (state_123634[(1)]);
if((state_val_123635 === (7))){
var inst_123614 = (state_123634[(7)]);
var inst_123612 = (state_123634[(8)]);
var inst_123614__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_123612) : f.call(null,inst_123612));
var inst_123615 = com.wsscode.common.async_cljs.chan_QMARK_(inst_123614__$1);
var state_123634__$1 = (function (){var statearr_123639 = state_123634;
(statearr_123639[(7)] = inst_123614__$1);

return statearr_123639;
})();
if(inst_123615){
var statearr_123640_125883 = state_123634__$1;
(statearr_123640_125883[(1)] = (10));

} else {
var statearr_123641_125884 = state_123634__$1;
(statearr_123641_125884[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123635 === (1))){
var state_123634__$1 = state_123634;
var statearr_123642_125885 = state_123634__$1;
(statearr_123642_125885[(2)] = null);

(statearr_123642_125885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123635 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_123634,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_123608 = cljs.core.PersistentVector.EMPTY;
var inst_123609 = inst_123608;
var inst_123610 = s;
var state_123634__$1 = (function (){var statearr_123643 = state_123634;
(statearr_123643[(9)] = inst_123610);

(statearr_123643[(10)] = inst_123609);

return statearr_123643;
})();
var statearr_123644_125886 = state_123634__$1;
(statearr_123644_125886[(2)] = null);

(statearr_123644_125886[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123635 === (13))){
var inst_123618 = (state_123634[(2)]);
var inst_123619 = com.wsscode.common.async_cljs.throw_err(inst_123618);
var state_123634__$1 = state_123634;
var statearr_123645_125887 = state_123634__$1;
(statearr_123645_125887[(2)] = inst_123619);

(statearr_123645_125887[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123635 === (6))){
var inst_123630 = (state_123634[(2)]);
var state_123634__$1 = state_123634;
var statearr_123646_125888 = state_123634__$1;
(statearr_123646_125888[(2)] = inst_123630);


cljs.core.async.impl.ioc_helpers.process_exception(state_123634__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123635 === (3))){
var inst_123604 = (state_123634[(2)]);
var state_123634__$1 = state_123634;
var statearr_123647_125889 = state_123634__$1;
(statearr_123647_125889[(2)] = inst_123604);


cljs.core.async.impl.ioc_helpers.process_exception(state_123634__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123635 === (12))){
var inst_123610 = (state_123634[(9)]);
var inst_123609 = (state_123634[(10)]);
var inst_123622 = (state_123634[(2)]);
var inst_123623 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_123609,inst_123622);
var inst_123624 = cljs.core.next(inst_123610);
var inst_123609__$1 = inst_123623;
var inst_123610__$1 = inst_123624;
var state_123634__$1 = (function (){var statearr_123648 = state_123634;
(statearr_123648[(9)] = inst_123610__$1);

(statearr_123648[(10)] = inst_123609__$1);

return statearr_123648;
})();
var statearr_123649_125890 = state_123634__$1;
(statearr_123649_125890[(2)] = null);

(statearr_123649_125890[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123635 === (2))){
var inst_123632 = (state_123634[(2)]);
var state_123634__$1 = state_123634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_123634__$1,inst_123632);
} else {
if((state_val_123635 === (11))){
var inst_123614 = (state_123634[(7)]);
var state_123634__$1 = state_123634;
var statearr_123650_125891 = state_123634__$1;
(statearr_123650_125891[(2)] = inst_123614);

(statearr_123650_125891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123635 === (9))){
var inst_123628 = (state_123634[(2)]);
var state_123634__$1 = state_123634;
var statearr_123651_125892 = state_123634__$1;
(statearr_123651_125892[(2)] = inst_123628);

(statearr_123651_125892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123635 === (5))){
var inst_123610 = (state_123634[(9)]);
var inst_123612 = (state_123634[(8)]);
var inst_123612__$1 = cljs.core.first(inst_123610);
var state_123634__$1 = (function (){var statearr_123652 = state_123634;
(statearr_123652[(8)] = inst_123612__$1);

return statearr_123652;
})();
if(cljs.core.truth_(inst_123612__$1)){
var statearr_123653_125893 = state_123634__$1;
(statearr_123653_125893[(1)] = (7));

} else {
var statearr_123654_125894 = state_123634__$1;
(statearr_123654_125894[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123635 === (10))){
var inst_123614 = (state_123634[(7)]);
var state_123634__$1 = state_123634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_123634__$1,(13),inst_123614);
} else {
if((state_val_123635 === (8))){
var inst_123609 = (state_123634[(10)]);
var state_123634__$1 = state_123634;
var statearr_123655_125895 = state_123634__$1;
(statearr_123655_125895[(2)] = inst_123609);

(statearr_123655_125895[(1)] = (9));


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
});})(c__39003__auto__))
;
return ((function (switch__38929__auto__,c__39003__auto__){
return (function() {
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__38930__auto____0 = (function (){
var statearr_123656 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_123656[(0)] = com$wsscode$pathom$connect$map_async_serial_$_state_machine__38930__auto__);

(statearr_123656[(1)] = (1));

return statearr_123656;
});
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__38930__auto____1 = (function (state_123634){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_123634);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e123657){if((e123657 instanceof Object)){
var ex__38933__auto__ = e123657;
var statearr_123658_125896 = state_123634;
(statearr_123658_125896[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_123634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e123657;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__125897 = state_123634;
state_123634 = G__125897;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$connect$map_async_serial_$_state_machine__38930__auto__ = function(state_123634){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__38930__auto____1.call(this,state_123634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$map_async_serial_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$map_async_serial_$_state_machine__38930__auto____0;
com$wsscode$pathom$connect$map_async_serial_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$map_async_serial_$_state_machine__38930__auto____1;
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__))
})();
var state__39005__auto__ = (function (){var statearr_123659 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_123659[(6)] = c__39003__auto__);

return statearr_123659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__))
);

return c__39003__auto__;
});
/**
 * DEPRECATED: use async-reader2
 * 
 *   Like reader, but supports async values on resolver return.
 */
com.wsscode.pathom.connect.async_reader = (function com$wsscode$pathom$connect$async_reader(p__123664){
var map__123665 = p__123664;
var map__123665__$1 = (((((!((map__123665 == null))))?(((((map__123665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__123665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__123665):map__123665);
var env = map__123665__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123665__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__123665__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var p = com.wsscode.pathom.core.params(env);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null)))){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,k,p,map__123665,map__123665__$1,env,indexes,processing_sequence){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,k,p,map__123665,map__123665__$1,env,indexes,processing_sequence){
return (function (state_123816){
var state_val_123817 = (state_123816[(1)]);
if((state_val_123817 === (7))){
var state_123816__$1 = state_123816;
var statearr_123818_125898 = state_123816__$1;
(statearr_123818_125898[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));

(statearr_123818_125898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (59))){
var inst_123802 = (state_123816[(2)]);
var state_123816__$1 = state_123816;
var statearr_123819_125899 = state_123816__$1;
(statearr_123819_125899[(2)] = inst_123802);

(statearr_123819_125899[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (20))){
var inst_123717 = (state_123816[(2)]);
var state_123816__$1 = state_123816;
if(cljs.core.truth_(inst_123717)){
var statearr_123820_125900 = state_123816__$1;
(statearr_123820_125900[(1)] = (24));

} else {
var statearr_123821_125901 = state_123816__$1;
(statearr_123821_125901[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (58))){
var inst_123794 = (state_123816[(7)]);
var state_123816__$1 = state_123816;
var statearr_123822_125902 = state_123816__$1;
(statearr_123822_125902[(2)] = inst_123794);

(statearr_123822_125902[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (60))){
var inst_123798 = (state_123816[(2)]);
var inst_123799 = com.wsscode.common.async_cljs.throw_err(inst_123798);
var state_123816__$1 = state_123816;
var statearr_123823_125903 = state_123816__$1;
(statearr_123823_125903[(2)] = inst_123799);

(statearr_123823_125903[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (27))){
var inst_123699 = (state_123816[(8)]);
var inst_123698 = (state_123816[(9)]);
var inst_123732 = (state_123816[(10)]);
var inst_123722 = (state_123816[(11)]);
var inst_123725 = (state_123816[(12)]);
var inst_123723 = (state_123816[(13)]);
var inst_123724 = (state_123816[(14)]);
var inst_123697 = (state_123816[(15)]);
var inst_123726 = (state_123816[(16)]);
var inst_123674 = (state_123816[(17)]);
var inst_123728 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_123729 = [inst_123699,inst_123698,p];
var inst_123730 = (new cljs.core.PersistentVector(null,3,(5),inst_123728,inst_123729,null));
var inst_123731 = (function (){var input = inst_123725;
var map__123676 = inst_123697;
var cache_QMARK_ = inst_123723;
var temp__5718__auto__ = inst_123674;
var batch_QMARK_ = inst_123724;
var env__$1 = inst_123726;
var e = inst_123698;
var s = inst_123699;
var map__123700 = inst_123722;
var resolver = inst_123722;
return ((function (input,map__123676,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,map__123700,resolver,inst_123699,inst_123698,inst_123732,inst_123722,inst_123725,inst_123723,inst_123724,inst_123697,inst_123726,inst_123674,inst_123728,inst_123729,inst_123730,state_val_123817,c__39003__auto__,k,p,map__123665,map__123665__$1,env,indexes,processing_sequence){
return (function (){
var c__39003__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto____$1,input,map__123676,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,map__123700,resolver,inst_123699,inst_123698,inst_123732,inst_123722,inst_123725,inst_123723,inst_123724,inst_123697,inst_123726,inst_123674,inst_123728,inst_123729,inst_123730,state_val_123817,c__39003__auto__,k,p,map__123665,map__123665__$1,env,indexes,processing_sequence){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto____$1,input,map__123676,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,map__123700,resolver,inst_123699,inst_123698,inst_123732,inst_123722,inst_123725,inst_123723,inst_123724,inst_123697,inst_123726,inst_123674,inst_123728,inst_123729,inst_123730,state_val_123817,c__39003__auto__,k,p,map__123665,map__123665__$1,env,indexes,processing_sequence){
return (function (state_123867){
var state_val_123868 = (state_123867[(1)]);
if((state_val_123868 === (7))){
var inst_123831 = (state_123867[(2)]);
var state_123867__$1 = state_123867;
if(cljs.core.truth_(inst_123831)){
var statearr_123869_125904 = state_123867__$1;
(statearr_123869_125904[(1)] = (8));

} else {
var statearr_123870_125905 = state_123867__$1;
(statearr_123870_125905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123868 === (1))){
var state_123867__$1 = state_123867;
var statearr_123871_125906 = state_123867__$1;
(statearr_123871_125906[(2)] = null);

(statearr_123871_125906[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123868 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_123867,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_123867__$1 = state_123867;
if(cljs.core.truth_(batch_QMARK_)){
var statearr_123872_125907 = state_123867__$1;
(statearr_123872_125907[(1)] = (5));

} else {
var statearr_123873_125908 = state_123867__$1;
(statearr_123873_125908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123868 === (15))){
var inst_123844 = (state_123867[(2)]);
var inst_123845 = com.wsscode.common.async_cljs.throw_err(inst_123844);
var state_123867__$1 = state_123867;
var statearr_123874_125909 = state_123867__$1;
(statearr_123874_125909[(2)] = inst_123845);

(statearr_123874_125909[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123868 === (13))){
var inst_123840 = (state_123867[(7)]);
var state_123867__$1 = state_123867;
var statearr_123875_125910 = state_123867__$1;
(statearr_123875_125910[(2)] = inst_123840);

(statearr_123875_125910[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123868 === (6))){
var state_123867__$1 = state_123867;
var statearr_123876_125911 = state_123867__$1;
(statearr_123876_125911[(2)] = batch_QMARK_);

(statearr_123876_125911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123868 === (17))){
var inst_123853 = (state_123867[(8)]);
var state_123867__$1 = state_123867;
var statearr_123877_125912 = state_123867__$1;
(statearr_123877_125912[(2)] = inst_123853);

(statearr_123877_125912[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123868 === (3))){
var inst_123824 = (state_123867[(2)]);
var state_123867__$1 = state_123867;
var statearr_123878_125913 = state_123867__$1;
(statearr_123878_125913[(2)] = inst_123824);


cljs.core.async.impl.ioc_helpers.process_exception(state_123867__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123868 === (12))){
var inst_123840 = (state_123867[(7)]);
var state_123867__$1 = state_123867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_123867__$1,(15),inst_123840);
} else {
if((state_val_123868 === (2))){
var inst_123865 = (state_123867[(2)]);
var state_123867__$1 = state_123867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_123867__$1,inst_123865);
} else {
if((state_val_123868 === (19))){
var inst_123857 = (state_123867[(2)]);
var inst_123858 = com.wsscode.common.async_cljs.throw_err(inst_123857);
var state_123867__$1 = state_123867;
var statearr_123879_125914 = state_123867__$1;
(statearr_123879_125914[(2)] = inst_123858);

(statearr_123879_125914[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123868 === (11))){
var inst_123833 = (state_123867[(9)]);
var inst_123839 = (state_123867[(10)]);
var inst_123840 = (state_123867[(7)]);
var inst_123837 = (state_123867[(2)]);
var inst_123838 = com.wsscode.common.async_cljs.throw_err(inst_123837);
var inst_123839__$1 = cljs.core.filterv(inst_123833,inst_123838);
var inst_123840__$1 = com.wsscode.pathom.connect.call_resolver(env__$1,inst_123839__$1);
var inst_123841 = com.wsscode.common.async_cljs.chan_QMARK_(inst_123840__$1);
var state_123867__$1 = (function (){var statearr_123880 = state_123867;
(statearr_123880[(10)] = inst_123839__$1);

(statearr_123880[(7)] = inst_123840__$1);

return statearr_123880;
})();
if(inst_123841){
var statearr_123881_125915 = state_123867__$1;
(statearr_123881_125915[(1)] = (12));

} else {
var statearr_123882_125916 = state_123867__$1;
(statearr_123882_125916[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123868 === (9))){
var inst_123853 = (state_123867[(8)]);
var inst_123853__$1 = com.wsscode.pathom.connect.call_resolver(env__$1,e);
var inst_123854 = com.wsscode.common.async_cljs.chan_QMARK_(inst_123853__$1);
var state_123867__$1 = (function (){var statearr_123883 = state_123867;
(statearr_123883[(8)] = inst_123853__$1);

return statearr_123883;
})();
if(inst_123854){
var statearr_123884_125917 = state_123867__$1;
(statearr_123884_125917[(1)] = (16));

} else {
var statearr_123885_125918 = state_123867__$1;
(statearr_123885_125918[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123868 === (5))){
var state_123867__$1 = state_123867;
var statearr_123886_125919 = state_123867__$1;
(statearr_123886_125919[(2)] = processing_sequence);

(statearr_123886_125919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123868 === (14))){
var inst_123839 = (state_123867[(10)]);
var inst_123848 = (state_123867[(2)]);
var inst_123849 = cljs.core.zipmap(inst_123839,inst_123848);
var inst_123850 = com.wsscode.pathom.connect.cache_batch(env__$1,s,inst_123849);
var inst_123851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_123849,e);
var state_123867__$1 = (function (){var statearr_123887 = state_123867;
(statearr_123887[(11)] = inst_123850);

return statearr_123887;
})();
var statearr_123888_125920 = state_123867__$1;
(statearr_123888_125920[(2)] = inst_123851);

(statearr_123888_125920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123868 === (16))){
var inst_123853 = (state_123867[(8)]);
var state_123867__$1 = state_123867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_123867__$1,(19),inst_123853);
} else {
if((state_val_123868 === (10))){
var inst_123863 = (state_123867[(2)]);
var state_123867__$1 = state_123867;
var statearr_123889_125921 = state_123867__$1;
(statearr_123889_125921[(2)] = inst_123863);


cljs.core.async.impl.ioc_helpers.process_exception(state_123867__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123868 === (18))){
var inst_123861 = (state_123867[(2)]);
var state_123867__$1 = state_123867;
var statearr_123890_125922 = state_123867__$1;
(statearr_123890_125922[(2)] = inst_123861);

(statearr_123890_125922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123868 === (8))){
var inst_123833 = (function (){return ((function (state_val_123868,c__39003__auto____$1,input,map__123676,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,map__123700,resolver,inst_123699,inst_123698,inst_123732,inst_123722,inst_123725,inst_123723,inst_123724,inst_123697,inst_123726,inst_123674,inst_123728,inst_123729,inst_123730,state_val_123817,c__39003__auto__,k,p,map__123665,map__123665__$1,env,indexes,processing_sequence){
return (function (p1__123662_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__123662_SHARP_,input);
});
;})(state_val_123868,c__39003__auto____$1,input,map__123676,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,map__123700,resolver,inst_123699,inst_123698,inst_123732,inst_123722,inst_123725,inst_123723,inst_123724,inst_123697,inst_123726,inst_123674,inst_123728,inst_123729,inst_123730,state_val_123817,c__39003__auto__,k,p,map__123665,map__123665__$1,env,indexes,processing_sequence))
})();
var inst_123834 = (function (){return ((function (inst_123833,state_val_123868,c__39003__auto____$1,input,map__123676,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,map__123700,resolver,inst_123699,inst_123698,inst_123732,inst_123722,inst_123725,inst_123723,inst_123724,inst_123697,inst_123726,inst_123674,inst_123728,inst_123729,inst_123730,state_val_123817,c__39003__auto__,k,p,map__123665,map__123665__$1,env,indexes,processing_sequence){
return (function (p1__123661_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__123661_SHARP_,input);
});
;})(inst_123833,state_val_123868,c__39003__auto____$1,input,map__123676,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,map__123700,resolver,inst_123699,inst_123698,inst_123732,inst_123722,inst_123725,inst_123723,inst_123724,inst_123697,inst_123726,inst_123674,inst_123728,inst_123729,inst_123730,state_val_123817,c__39003__auto__,k,p,map__123665,map__123665__$1,env,indexes,processing_sequence))
})();
var inst_123835 = com.wsscode.pathom.connect.map_async_serial(inst_123834,processing_sequence);
var state_123867__$1 = (function (){var statearr_123891 = state_123867;
(statearr_123891[(9)] = inst_123833);

return statearr_123891;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_123867__$1,(11),inst_123835);
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
});})(c__39003__auto____$1,input,map__123676,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,map__123700,resolver,inst_123699,inst_123698,inst_123732,inst_123722,inst_123725,inst_123723,inst_123724,inst_123697,inst_123726,inst_123674,inst_123728,inst_123729,inst_123730,state_val_123817,c__39003__auto__,k,p,map__123665,map__123665__$1,env,indexes,processing_sequence))
;
return ((function (switch__38929__auto__,c__39003__auto____$1,input,map__123676,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,map__123700,resolver,inst_123699,inst_123698,inst_123732,inst_123722,inst_123725,inst_123723,inst_123724,inst_123697,inst_123726,inst_123674,inst_123728,inst_123729,inst_123730,state_val_123817,c__39003__auto__,k,p,map__123665,map__123665__$1,env,indexes,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_reader_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$connect$async_reader_$_state_machine__38930__auto____0 = (function (){
var statearr_123892 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_123892[(0)] = com$wsscode$pathom$connect$async_reader_$_state_machine__38930__auto__);

(statearr_123892[(1)] = (1));

return statearr_123892;
});
var com$wsscode$pathom$connect$async_reader_$_state_machine__38930__auto____1 = (function (state_123867){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_123867);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e123893){if((e123893 instanceof Object)){
var ex__38933__auto__ = e123893;
var statearr_123894_125923 = state_123867;
(statearr_123894_125923[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_123867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e123893;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__125924 = state_123867;
state_123867 = G__125924;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader_$_state_machine__38930__auto__ = function(state_123867){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader_$_state_machine__38930__auto____1.call(this,state_123867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader_$_state_machine__38930__auto____0;
com$wsscode$pathom$connect$async_reader_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader_$_state_machine__38930__auto____1;
return com$wsscode$pathom$connect$async_reader_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto____$1,input,map__123676,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,map__123700,resolver,inst_123699,inst_123698,inst_123732,inst_123722,inst_123725,inst_123723,inst_123724,inst_123697,inst_123726,inst_123674,inst_123728,inst_123729,inst_123730,state_val_123817,c__39003__auto__,k,p,map__123665,map__123665__$1,env,indexes,processing_sequence))
})();
var state__39005__auto__ = (function (){var statearr_123895 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_123895[(6)] = c__39003__auto____$1);

return statearr_123895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto____$1,input,map__123676,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,map__123700,resolver,inst_123699,inst_123698,inst_123732,inst_123722,inst_123725,inst_123723,inst_123724,inst_123697,inst_123726,inst_123674,inst_123728,inst_123729,inst_123730,state_val_123817,c__39003__auto__,k,p,map__123665,map__123665__$1,env,indexes,processing_sequence))
);

return c__39003__auto____$1;
});
;})(input,map__123676,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,map__123700,resolver,inst_123699,inst_123698,inst_123732,inst_123722,inst_123725,inst_123723,inst_123724,inst_123697,inst_123726,inst_123674,inst_123728,inst_123729,inst_123730,state_val_123817,c__39003__auto__,k,p,map__123665,map__123665__$1,env,indexes,processing_sequence))
})();
var inst_123732__$1 = com.wsscode.pathom.core.cached_async(inst_123726,inst_123730,inst_123731);
var inst_123733 = com.wsscode.common.async_cljs.chan_QMARK_(inst_123732__$1);
var state_123816__$1 = (function (){var statearr_123896 = state_123816;
(statearr_123896[(10)] = inst_123732__$1);

return statearr_123896;
})();
if(inst_123733){
var statearr_123897_125925 = state_123816__$1;
(statearr_123897_125925[(1)] = (30));

} else {
var statearr_123898_125926 = state_123816__$1;
(statearr_123898_125926[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (1))){
var state_123816__$1 = state_123816;
var statearr_123899_125927 = state_123816__$1;
(statearr_123899_125927[(2)] = null);

(statearr_123899_125927[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (24))){
var inst_123701 = (state_123816[(18)]);
var inst_123719 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_123701);
var state_123816__$1 = state_123816;
var statearr_123900_125928 = state_123816__$1;
(statearr_123900_125928[(2)] = inst_123719);

(statearr_123900_125928[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (55))){
var state_123816__$1 = state_123816;
var statearr_123901_125929 = state_123816__$1;
(statearr_123901_125929[(2)] = null);

(statearr_123901_125929[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (39))){
var state_123816__$1 = state_123816;
var statearr_123902_125930 = state_123816__$1;
(statearr_123902_125930[(2)] = null);

(statearr_123902_125930[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (46))){
var inst_123782 = (state_123816[(2)]);
var state_123816__$1 = state_123816;
var statearr_123903_125931 = state_123816__$1;
(statearr_123903_125931[(2)] = inst_123782);

(statearr_123903_125931[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_123816,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_123671 = com.wsscode.pathom.connect.async_pick_resolver(env);
var state_123816__$1 = state_123816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_123816__$1,(5),inst_123671);
} else {
if((state_val_123817 === (54))){
var inst_123794 = (state_123816[(7)]);
var inst_123770 = (state_123816[(19)]);
var inst_123753 = (state_123816[(20)]);
var inst_123793 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_123770);
var inst_123794__$1 = com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(inst_123793,inst_123753);
var inst_123795 = com.wsscode.common.async_cljs.chan_QMARK_(inst_123794__$1);
var state_123816__$1 = (function (){var statearr_123904 = state_123816;
(statearr_123904[(7)] = inst_123794__$1);

return statearr_123904;
})();
if(inst_123795){
var statearr_123905_125932 = state_123816__$1;
(statearr_123905_125932[(1)] = (57));

} else {
var statearr_123906_125933 = state_123816__$1;
(statearr_123906_125933[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (15))){
var inst_123674 = (state_123816[(17)]);
var inst_123694 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_123674);
var state_123816__$1 = state_123816;
var statearr_123907_125934 = state_123816__$1;
(statearr_123907_125934[(2)] = inst_123694);

(statearr_123907_125934[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (48))){
var inst_123754 = (state_123816[(21)]);
var inst_123786 = cljs.core.contains_QMARK_(inst_123754,k);
var state_123816__$1 = state_123816;
if(inst_123786){
var statearr_123908_125935 = state_123816__$1;
(statearr_123908_125935[(1)] = (51));

} else {
var statearr_123909_125936 = state_123816__$1;
(statearr_123909_125936[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (50))){
var inst_123807 = (state_123816[(2)]);
var state_123816__$1 = state_123816;
var statearr_123910_125937 = state_123816__$1;
(statearr_123910_125937[(2)] = inst_123807);

(statearr_123910_125937[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (21))){
var state_123816__$1 = state_123816;
var statearr_123911_125938 = state_123816__$1;
(statearr_123911_125938[(2)] = true);

(statearr_123911_125938[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (31))){
var inst_123732 = (state_123816[(10)]);
var state_123816__$1 = state_123816;
var statearr_123912_125939 = state_123816__$1;
(statearr_123912_125939[(2)] = inst_123732);

(statearr_123912_125939[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (32))){
var inst_123740 = (state_123816[(2)]);
var state_123816__$1 = state_123816;
var statearr_123913_125940 = state_123816__$1;
(statearr_123913_125940[(2)] = inst_123740);

(statearr_123913_125940[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (40))){
var inst_123699 = (state_123816[(8)]);
var inst_123698 = (state_123816[(9)]);
var inst_123754 = (state_123816[(21)]);
var inst_123770 = (state_123816[(19)]);
var inst_123722 = (state_123816[(11)]);
var inst_123725 = (state_123816[(12)]);
var inst_123753 = (state_123816[(20)]);
var inst_123723 = (state_123816[(13)]);
var inst_123724 = (state_123816[(14)]);
var inst_123697 = (state_123816[(15)]);
var inst_123726 = (state_123816[(16)]);
var inst_123674 = (state_123816[(17)]);
var inst_123767 = (state_123816[(2)]);
var inst_123768 = (function (){var input = inst_123725;
var map__123676 = inst_123697;
var response = inst_123754;
var cache_QMARK_ = inst_123723;
var temp__5718__auto__ = inst_123674;
var batch_QMARK_ = inst_123724;
var env__$1 = inst_123726;
var e = inst_123698;
var s = inst_123699;
var map__123700 = inst_123722;
var resolver = inst_123722;
var env_SINGLEQUOTE_ = inst_123753;
return ((function (input,map__123676,response,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,map__123700,resolver,env_SINGLEQUOTE_,inst_123699,inst_123698,inst_123754,inst_123770,inst_123722,inst_123725,inst_123753,inst_123723,inst_123724,inst_123697,inst_123726,inst_123674,inst_123767,state_val_123817,c__39003__auto__,k,p,map__123665,map__123665__$1,env,indexes,processing_sequence){
return (function (p1__123663_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__123663_SHARP_], 0));
});
;})(input,map__123676,response,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,map__123700,resolver,env_SINGLEQUOTE_,inst_123699,inst_123698,inst_123754,inst_123770,inst_123722,inst_123725,inst_123753,inst_123723,inst_123724,inst_123697,inst_123726,inst_123674,inst_123767,state_val_123817,c__39003__auto__,k,p,map__123665,map__123665__$1,env,indexes,processing_sequence))
})();
var inst_123769 = com.wsscode.pathom.core.swap_entity_BANG_(inst_123753,inst_123768);
var inst_123770__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_123754,k);
var inst_123771 = cljs.core.sequential_QMARK_(inst_123770__$1);
var state_123816__$1 = (function (){var statearr_123914 = state_123816;
(statearr_123914[(22)] = inst_123767);

(statearr_123914[(19)] = inst_123770__$1);

(statearr_123914[(23)] = inst_123769);

return statearr_123914;
})();
if(inst_123771){
var statearr_123915_125941 = state_123816__$1;
(statearr_123915_125941[(1)] = (41));

} else {
var statearr_123916_125942 = state_123816__$1;
(statearr_123916_125942[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (56))){
var inst_123805 = (state_123816[(2)]);
var state_123816__$1 = state_123816;
var statearr_123917_125943 = state_123816__$1;
(statearr_123917_125943[(2)] = inst_123805);

(statearr_123917_125943[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (33))){
var inst_123736 = (state_123816[(2)]);
var inst_123737 = com.wsscode.common.async_cljs.throw_err(inst_123736);
var state_123816__$1 = state_123816;
var statearr_123918_125944 = state_123816__$1;
(statearr_123918_125944[(2)] = inst_123737);

(statearr_123918_125944[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (13))){
var state_123816__$1 = state_123816;
var statearr_123919_125945 = state_123816__$1;
(statearr_123919_125945[(2)] = false);

(statearr_123919_125945[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (22))){
var state_123816__$1 = state_123816;
var statearr_123920_125946 = state_123816__$1;
(statearr_123920_125946[(2)] = false);

(statearr_123920_125946[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (36))){
var inst_123750 = (state_123816[(2)]);
var state_123816__$1 = state_123816;
var statearr_123921_125947 = state_123816__$1;
(statearr_123921_125947[(2)] = inst_123750);

(statearr_123921_125947[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (41))){
var inst_123774 = (state_123816[(24)]);
var inst_123770 = (state_123816[(19)]);
var inst_123753 = (state_123816[(20)]);
var inst_123773 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.atom,inst_123770);
var inst_123774__$1 = com.wsscode.pathom.core.join_seq(inst_123753,inst_123773);
var inst_123775 = com.wsscode.common.async_cljs.chan_QMARK_(inst_123774__$1);
var state_123816__$1 = (function (){var statearr_123922 = state_123816;
(statearr_123922[(24)] = inst_123774__$1);

return statearr_123922;
})();
if(inst_123775){
var statearr_123923_125948 = state_123816__$1;
(statearr_123923_125948[(1)] = (44));

} else {
var statearr_123924_125949 = state_123816__$1;
(statearr_123924_125949[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (43))){
var inst_123809 = (state_123816[(2)]);
var state_123816__$1 = state_123816;
var statearr_123925_125950 = state_123816__$1;
(statearr_123925_125950[(2)] = inst_123809);

(statearr_123925_125950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (29))){
var inst_123754 = (state_123816[(21)]);
var inst_123726 = (state_123816[(16)]);
var inst_123752 = (state_123816[(2)]);
var inst_123753 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_123752,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),inst_123726);
var inst_123754__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_123752,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_123755 = (inst_123754__$1 == null);
var inst_123756 = cljs.core.map_QMARK_(inst_123754__$1);
var inst_123757 = ((inst_123755) || (inst_123756));
var inst_123758 = cljs.core.not(inst_123757);
var state_123816__$1 = (function (){var statearr_123926 = state_123816;
(statearr_123926[(21)] = inst_123754__$1);

(statearr_123926[(20)] = inst_123753);

return statearr_123926;
})();
if(inst_123758){
var statearr_123927_125951 = state_123816__$1;
(statearr_123927_125951[(1)] = (38));

} else {
var statearr_123928_125952 = state_123816__$1;
(statearr_123928_125952[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (44))){
var inst_123774 = (state_123816[(24)]);
var state_123816__$1 = state_123816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_123816__$1,(47),inst_123774);
} else {
if((state_val_123817 === (6))){
var inst_123674 = (state_123816[(17)]);
var inst_123678 = (inst_123674 == null);
var inst_123679 = cljs.core.not(inst_123678);
var state_123816__$1 = state_123816;
if(inst_123679){
var statearr_123929_125953 = state_123816__$1;
(statearr_123929_125953[(1)] = (9));

} else {
var statearr_123930_125954 = state_123816__$1;
(statearr_123930_125954[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (28))){
var inst_123698 = (state_123816[(9)]);
var inst_123742 = (state_123816[(25)]);
var inst_123726 = (state_123816[(16)]);
var inst_123742__$1 = com.wsscode.pathom.connect.call_resolver(inst_123726,inst_123698);
var inst_123743 = com.wsscode.common.async_cljs.chan_QMARK_(inst_123742__$1);
var state_123816__$1 = (function (){var statearr_123931 = state_123816;
(statearr_123931[(25)] = inst_123742__$1);

return statearr_123931;
})();
if(inst_123743){
var statearr_123932_125955 = state_123816__$1;
(statearr_123932_125955[(1)] = (34));

} else {
var statearr_123933_125956 = state_123816__$1;
(statearr_123933_125956[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (51))){
var inst_123770 = (state_123816[(19)]);
var state_123816__$1 = state_123816;
var statearr_123934_125957 = state_123816__$1;
(statearr_123934_125957[(2)] = inst_123770);

(statearr_123934_125957[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (25))){
var inst_123701 = (state_123816[(18)]);
var state_123816__$1 = state_123816;
var statearr_123935_125958 = state_123816__$1;
(statearr_123935_125958[(2)] = inst_123701);

(statearr_123935_125958[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (34))){
var inst_123742 = (state_123816[(25)]);
var state_123816__$1 = state_123816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_123816__$1,(37),inst_123742);
} else {
if((state_val_123817 === (17))){
var inst_123699 = (state_123816[(8)]);
var inst_123701 = (state_123816[(18)]);
var inst_123697 = (state_123816[(15)]);
var inst_123697__$1 = (state_123816[(2)]);
var inst_123698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_123697__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var inst_123699__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_123697__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var inst_123701__$1 = com.wsscode.pathom.connect.resolver_data(env,inst_123699__$1);
var inst_123703 = (inst_123701__$1 == null);
var inst_123704 = cljs.core.not(inst_123703);
var state_123816__$1 = (function (){var statearr_123936 = state_123816;
(statearr_123936[(8)] = inst_123699__$1);

(statearr_123936[(9)] = inst_123698);

(statearr_123936[(18)] = inst_123701__$1);

(statearr_123936[(15)] = inst_123697__$1);

return statearr_123936;
})();
if(inst_123704){
var statearr_123937_125959 = state_123816__$1;
(statearr_123937_125959[(1)] = (18));

} else {
var statearr_123938_125960 = state_123816__$1;
(statearr_123938_125960[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (3))){
var inst_123667 = (state_123816[(2)]);
var state_123816__$1 = state_123816;
var statearr_123939_125961 = state_123816__$1;
(statearr_123939_125961[(2)] = inst_123667);


cljs.core.async.impl.ioc_helpers.process_exception(state_123816__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (12))){
var state_123816__$1 = state_123816;
var statearr_123940_125962 = state_123816__$1;
(statearr_123940_125962[(2)] = true);

(statearr_123940_125962[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (2))){
var inst_123814 = (state_123816[(2)]);
var state_123816__$1 = state_123816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_123816__$1,inst_123814);
} else {
if((state_val_123817 === (23))){
var inst_123714 = (state_123816[(2)]);
var state_123816__$1 = state_123816;
var statearr_123941_125963 = state_123816__$1;
(statearr_123941_125963[(2)] = inst_123714);

(statearr_123941_125963[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (47))){
var inst_123778 = (state_123816[(2)]);
var inst_123779 = com.wsscode.common.async_cljs.throw_err(inst_123778);
var state_123816__$1 = state_123816;
var statearr_123942_125964 = state_123816__$1;
(statearr_123942_125964[(2)] = inst_123779);

(statearr_123942_125964[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (35))){
var inst_123742 = (state_123816[(25)]);
var state_123816__$1 = state_123816;
var statearr_123943_125965 = state_123816__$1;
(statearr_123943_125965[(2)] = inst_123742);

(statearr_123943_125965[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (19))){
var state_123816__$1 = state_123816;
var statearr_123944_125966 = state_123816__$1;
(statearr_123944_125966[(2)] = false);

(statearr_123944_125966[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (57))){
var inst_123794 = (state_123816[(7)]);
var state_123816__$1 = state_123816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_123816__$1,(60),inst_123794);
} else {
if((state_val_123817 === (11))){
var inst_123692 = (state_123816[(2)]);
var state_123816__$1 = state_123816;
if(cljs.core.truth_(inst_123692)){
var statearr_123945_125967 = state_123816__$1;
(statearr_123945_125967[(1)] = (15));

} else {
var statearr_123946_125968 = state_123816__$1;
(statearr_123946_125968[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (9))){
var inst_123674 = (state_123816[(17)]);
var inst_123681 = inst_123674.cljs$lang$protocol_mask$partition0$;
var inst_123682 = (inst_123681 & (64));
var inst_123683 = inst_123674.cljs$core$ISeq$;
var inst_123684 = (cljs.core.PROTOCOL_SENTINEL === inst_123683);
var inst_123685 = ((inst_123682) || (inst_123684));
var state_123816__$1 = state_123816;
if(cljs.core.truth_(inst_123685)){
var statearr_123947_125969 = state_123816__$1;
(statearr_123947_125969[(1)] = (12));

} else {
var statearr_123948_125970 = state_123816__$1;
(statearr_123948_125970[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (5))){
var inst_123674 = (state_123816[(17)]);
var inst_123673 = (state_123816[(2)]);
var inst_123674__$1 = com.wsscode.common.async_cljs.throw_err(inst_123673);
var state_123816__$1 = (function (){var statearr_123949 = state_123816;
(statearr_123949[(17)] = inst_123674__$1);

return statearr_123949;
})();
if(cljs.core.truth_(inst_123674__$1)){
var statearr_123950_125971 = state_123816__$1;
(statearr_123950_125971[(1)] = (6));

} else {
var statearr_123951_125972 = state_123816__$1;
(statearr_123951_125972[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (14))){
var inst_123689 = (state_123816[(2)]);
var state_123816__$1 = state_123816;
var statearr_123952_125973 = state_123816__$1;
(statearr_123952_125973[(2)] = inst_123689);

(statearr_123952_125973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (45))){
var inst_123774 = (state_123816[(24)]);
var state_123816__$1 = state_123816;
var statearr_123953_125974 = state_123816__$1;
(statearr_123953_125974[(2)] = inst_123774);

(statearr_123953_125974[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (53))){
var inst_123790 = (state_123816[(2)]);
var state_123816__$1 = state_123816;
var statearr_123954_125975 = state_123816__$1;
(statearr_123954_125975[(2)] = inst_123790);

(statearr_123954_125975[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (26))){
var inst_123722 = (state_123816[(11)]);
var inst_123723 = (state_123816[(13)]);
var inst_123722__$1 = (state_123816[(2)]);
var inst_123723__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_123722__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_123724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_123722__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_123725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_123722__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_123726 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_123722__$1);
var state_123816__$1 = (function (){var statearr_123955 = state_123816;
(statearr_123955[(11)] = inst_123722__$1);

(statearr_123955[(12)] = inst_123725);

(statearr_123955[(13)] = inst_123723__$1);

(statearr_123955[(14)] = inst_123724);

(statearr_123955[(16)] = inst_123726);

return statearr_123955;
})();
if(cljs.core.truth_(inst_123723__$1)){
var statearr_123956_125976 = state_123816__$1;
(statearr_123956_125976[(1)] = (27));

} else {
var statearr_123957_125977 = state_123816__$1;
(statearr_123957_125977[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (16))){
var inst_123674 = (state_123816[(17)]);
var state_123816__$1 = state_123816;
var statearr_123958_125978 = state_123816__$1;
(statearr_123958_125978[(2)] = inst_123674);

(statearr_123958_125978[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (38))){
var inst_123699 = (state_123816[(8)]);
var inst_123754 = (state_123816[(21)]);
var inst_123760 = [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"response","response",-1068424192)];
var inst_123761 = [inst_123699,inst_123754];
var inst_123762 = cljs.core.PersistentHashMap.fromArrays(inst_123760,inst_123761);
var inst_123763 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Response from reader must be a map.",inst_123762);
var inst_123764 = (function(){throw inst_123763})();
var state_123816__$1 = state_123816;
var statearr_123959_125979 = state_123816__$1;
(statearr_123959_125979[(2)] = inst_123764);

(statearr_123959_125979[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (30))){
var inst_123732 = (state_123816[(10)]);
var state_123816__$1 = state_123816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_123816__$1,(33),inst_123732);
} else {
if((state_val_123817 === (10))){
var state_123816__$1 = state_123816;
var statearr_123960_125980 = state_123816__$1;
(statearr_123960_125980[(2)] = false);

(statearr_123960_125980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (18))){
var inst_123701 = (state_123816[(18)]);
var inst_123706 = inst_123701.cljs$lang$protocol_mask$partition0$;
var inst_123707 = (inst_123706 & (64));
var inst_123708 = inst_123701.cljs$core$ISeq$;
var inst_123709 = (cljs.core.PROTOCOL_SENTINEL === inst_123708);
var inst_123710 = ((inst_123707) || (inst_123709));
var state_123816__$1 = state_123816;
if(cljs.core.truth_(inst_123710)){
var statearr_123961_125981 = state_123816__$1;
(statearr_123961_125981[(1)] = (21));

} else {
var statearr_123962_125982 = state_123816__$1;
(statearr_123962_125982[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (52))){
var state_123816__$1 = state_123816;
var statearr_123963_125983 = state_123816__$1;
(statearr_123963_125983[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));

(statearr_123963_125983[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (42))){
var inst_123770 = (state_123816[(19)]);
var inst_123784 = (inst_123770 == null);
var state_123816__$1 = state_123816;
if(cljs.core.truth_(inst_123784)){
var statearr_123964_125984 = state_123816__$1;
(statearr_123964_125984[(1)] = (48));

} else {
var statearr_123965_125985 = state_123816__$1;
(statearr_123965_125985[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (37))){
var inst_123746 = (state_123816[(2)]);
var inst_123747 = com.wsscode.common.async_cljs.throw_err(inst_123746);
var state_123816__$1 = state_123816;
var statearr_123966_125986 = state_123816__$1;
(statearr_123966_125986[(2)] = inst_123747);

(statearr_123966_125986[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (8))){
var inst_123812 = (state_123816[(2)]);
var state_123816__$1 = state_123816;
var statearr_123967_125987 = state_123816__$1;
(statearr_123967_125987[(2)] = inst_123812);


cljs.core.async.impl.ioc_helpers.process_exception(state_123816__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_123817 === (49))){
var state_123816__$1 = state_123816;
var statearr_123968_125988 = state_123816__$1;
(statearr_123968_125988[(1)] = (54));



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
});})(c__39003__auto__,k,p,map__123665,map__123665__$1,env,indexes,processing_sequence))
;
return ((function (switch__38929__auto__,c__39003__auto__,k,p,map__123665,map__123665__$1,env,indexes,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_reader_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$connect$async_reader_$_state_machine__38930__auto____0 = (function (){
var statearr_123970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_123970[(0)] = com$wsscode$pathom$connect$async_reader_$_state_machine__38930__auto__);

(statearr_123970[(1)] = (1));

return statearr_123970;
});
var com$wsscode$pathom$connect$async_reader_$_state_machine__38930__auto____1 = (function (state_123816){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_123816);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e123971){if((e123971 instanceof Object)){
var ex__38933__auto__ = e123971;
var statearr_123972_125989 = state_123816;
(statearr_123972_125989[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_123816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e123971;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__125990 = state_123816;
state_123816 = G__125990;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader_$_state_machine__38930__auto__ = function(state_123816){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader_$_state_machine__38930__auto____1.call(this,state_123816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader_$_state_machine__38930__auto____0;
com$wsscode$pathom$connect$async_reader_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader_$_state_machine__38930__auto____1;
return com$wsscode$pathom$connect$async_reader_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,k,p,map__123665,map__123665__$1,env,indexes,processing_sequence))
})();
var state__39005__auto__ = (function (){var statearr_123973 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_123973[(6)] = c__39003__auto__);

return statearr_123973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,k,p,map__123665,map__123665__$1,env,indexes,processing_sequence))
);

return c__39003__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.async_read_cache_read = (function com$wsscode$pathom$connect$async_read_cache_read(env,resolver_sym,e,batch_QMARK_,processing_sequence,trace_data,input){
var params = com.wsscode.pathom.core.params(env);
return com.wsscode.pathom.core.cached_async(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,e,params], null),((function (params){
return (function (){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,params){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,params){
return (function (state_124071){
var state_val_124072 = (state_124071[(1)]);
if((state_val_124072 === (7))){
var inst_123983 = (state_124071[(2)]);
var state_124071__$1 = state_124071;
if(cljs.core.truth_(inst_123983)){
var statearr_124073_125991 = state_124071__$1;
(statearr_124073_125991[(1)] = (8));

} else {
var statearr_124074_125992 = state_124071__$1;
(statearr_124074_125992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124072 === (20))){
var inst_124037 = (state_124071[(7)]);
var state_124071__$1 = state_124071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124071__$1,(23),inst_124037);
} else {
if((state_val_124072 === (27))){
var inst_124061 = (state_124071[(2)]);
var inst_124062 = com.wsscode.common.async_cljs.throw_err(inst_124061);
var state_124071__$1 = state_124071;
var statearr_124075_125993 = state_124071__$1;
(statearr_124075_125993[(2)] = inst_124062);

(statearr_124075_125993[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124072 === (1))){
var state_124071__$1 = state_124071;
var statearr_124076_125994 = state_124071__$1;
(statearr_124076_125994[(2)] = null);

(statearr_124076_125994[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124072 === (24))){
var inst_124057 = (state_124071[(8)]);
var state_124071__$1 = state_124071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124071__$1,(27),inst_124057);
} else {
if((state_val_124072 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_124071,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_124071__$1 = state_124071;
if(cljs.core.truth_(batch_QMARK_)){
var statearr_124077_125995 = state_124071__$1;
(statearr_124077_125995[(1)] = (5));

} else {
var statearr_124078_125996 = state_124071__$1;
(statearr_124078_125996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124072 === (15))){
var inst_124003 = (state_124071[(9)]);
var state_124071__$1 = state_124071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124071__$1,(18),inst_124003);
} else {
if((state_val_124072 === (21))){
var inst_124037 = (state_124071[(7)]);
var state_124071__$1 = state_124071;
var statearr_124079_125997 = state_124071__$1;
(statearr_124079_125997[(2)] = inst_124037);

(statearr_124079_125997[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124072 === (13))){
var inst_124055 = (state_124071[(2)]);
var state_124071__$1 = state_124071;
var statearr_124080_125998 = state_124071__$1;
(statearr_124080_125998[(2)] = inst_124055);

(statearr_124080_125998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124072 === (22))){
var inst_124032 = (state_124071[(10)]);
var inst_124045 = (state_124071[(2)]);
var inst_124046 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_124047 = cljs.core.count(inst_124045);
var inst_124048 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_124047];
var inst_124049 = cljs.core.PersistentHashMap.fromArrays(inst_124046,inst_124048);
var inst_124050 = com.wsscode.pathom.trace.trace(env,inst_124049);
var inst_124051 = cljs.core.zipmap(inst_124032,inst_124045);
var inst_124052 = com.wsscode.pathom.connect.cache_batch(env,resolver_sym,inst_124051);
var inst_124053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_124051,e);
var state_124071__$1 = (function (){var statearr_124081 = state_124071;
(statearr_124081[(11)] = inst_124050);

(statearr_124081[(12)] = inst_124052);

return statearr_124081;
})();
var statearr_124082_125999 = state_124071__$1;
(statearr_124082_125999[(2)] = inst_124053);

(statearr_124082_125999[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124072 === (6))){
var state_124071__$1 = state_124071;
var statearr_124083_126000 = state_124071__$1;
(statearr_124083_126000[(2)] = batch_QMARK_);

(statearr_124083_126000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124072 === (25))){
var inst_124057 = (state_124071[(8)]);
var state_124071__$1 = state_124071;
var statearr_124084_126001 = state_124071__$1;
(statearr_124084_126001[(2)] = inst_124057);

(statearr_124084_126001[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124072 === (17))){
var inst_123998 = (state_124071[(13)]);
var inst_123988 = (state_124071[(14)]);
var inst_124011 = (state_124071[(2)]);
var inst_124012 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_124013 = cljs.core.count(inst_124011);
var inst_124014 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_124013];
var inst_124015 = cljs.core.PersistentHashMap.fromArrays(inst_124012,inst_124014);
var inst_124016 = com.wsscode.pathom.trace.trace(env,inst_124015);
var inst_124017 = cljs.core.zipmap(inst_123998,inst_124011);
var inst_124018 = com.wsscode.pathom.connect.cache_batch(env,resolver_sym,inst_124017);
var inst_124019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_124017,e);
var inst_124020 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_124021 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_123988,inst_124020);
var state_124071__$1 = (function (){var statearr_124085 = state_124071;
(statearr_124085[(15)] = inst_124018);

(statearr_124085[(16)] = inst_124016);

(statearr_124085[(17)] = inst_124021);

return statearr_124085;
})();
var statearr_124086_126002 = state_124071__$1;
(statearr_124086_126002[(2)] = inst_124019);

(statearr_124086_126002[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124072 === (3))){
var inst_123976 = (state_124071[(2)]);
var state_124071__$1 = state_124071;
var statearr_124087_126003 = state_124071__$1;
(statearr_124087_126003[(2)] = inst_123976);


cljs.core.async.impl.ioc_helpers.process_exception(state_124071__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124072 === (12))){
var inst_124023 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_124024 = com.wsscode.pathom.trace.trace(env,inst_124023);
var inst_124025 = (function (){var _ = inst_124024;
return ((function (_,inst_124023,inst_124024,state_val_124072,c__39003__auto__,params){
return (function (p1__123975_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__123975_SHARP_,input);
});
;})(_,inst_124023,inst_124024,state_val_124072,c__39003__auto__,params))
})();
var inst_124026 = (function (){var _ = inst_124024;
return ((function (_,inst_124023,inst_124024,inst_124025,state_val_124072,c__39003__auto__,params){
return (function (p1__123974_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__123974_SHARP_,input);
});
;})(_,inst_124023,inst_124024,inst_124025,state_val_124072,c__39003__auto__,params))
})();
var inst_124027 = com.wsscode.pathom.connect.map_async_serial(inst_124026,processing_sequence);
var state_124071__$1 = (function (){var statearr_124088 = state_124071;
(statearr_124088[(18)] = inst_124025);

return statearr_124088;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124071__$1,(19),inst_124027);
} else {
if((state_val_124072 === (2))){
var inst_124069 = (state_124071[(2)]);
var state_124071__$1 = state_124071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_124071__$1,inst_124069);
} else {
if((state_val_124072 === (23))){
var inst_124041 = (state_124071[(2)]);
var inst_124042 = com.wsscode.common.async_cljs.throw_err(inst_124041);
var state_124071__$1 = state_124071;
var statearr_124089_126004 = state_124071__$1;
(statearr_124089_126004[(2)] = inst_124042);

(statearr_124089_126004[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124072 === (19))){
var inst_124025 = (state_124071[(18)]);
var inst_124032 = (state_124071[(10)]);
var inst_124037 = (state_124071[(7)]);
var inst_124029 = (state_124071[(2)]);
var inst_124030 = com.wsscode.common.async_cljs.throw_err(inst_124029);
var inst_124031 = cljs.core.filterv(inst_124025,inst_124030);
var inst_124032__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_124031);
var inst_124033 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_124034 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_124032__$1];
var inst_124035 = cljs.core.PersistentHashMap.fromArrays(inst_124033,inst_124034);
var inst_124036 = com.wsscode.pathom.trace.trace(env,inst_124035);
var inst_124037__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_124032__$1);
var inst_124038 = com.wsscode.common.async_cljs.chan_QMARK_(inst_124037__$1);
var state_124071__$1 = (function (){var statearr_124090 = state_124071;
(statearr_124090[(19)] = inst_124036);

(statearr_124090[(10)] = inst_124032__$1);

(statearr_124090[(7)] = inst_124037__$1);

return statearr_124090;
})();
if(inst_124038){
var statearr_124091_126005 = state_124071__$1;
(statearr_124091_126005[(1)] = (20));

} else {
var statearr_124092_126006 = state_124071__$1;
(statearr_124092_126006[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124072 === (11))){
var inst_123988 = (state_124071[(14)]);
var inst_123987 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_123988__$1 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_123987);
var inst_123989 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_123990 = com.wsscode.pathom.trace.trace(env,inst_123989);
var inst_123991 = (function (){var trace_id__21490__auto__ = inst_123988__$1;
var _ = inst_123990;
return ((function (trace_id__21490__auto__,_,inst_123988,inst_123987,inst_123988__$1,inst_123989,inst_123990,state_val_124072,c__39003__auto__,params){
return (function (p1__123975_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__123975_SHARP_,input);
});
;})(trace_id__21490__auto__,_,inst_123988,inst_123987,inst_123988__$1,inst_123989,inst_123990,state_val_124072,c__39003__auto__,params))
})();
var inst_123992 = (function (){var trace_id__21490__auto__ = inst_123988__$1;
var _ = inst_123990;
return ((function (trace_id__21490__auto__,_,inst_123988,inst_123987,inst_123988__$1,inst_123989,inst_123990,inst_123991,state_val_124072,c__39003__auto__,params){
return (function (p1__123974_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__123974_SHARP_,input);
});
;})(trace_id__21490__auto__,_,inst_123988,inst_123987,inst_123988__$1,inst_123989,inst_123990,inst_123991,state_val_124072,c__39003__auto__,params))
})();
var inst_123993 = com.wsscode.pathom.connect.map_async_serial(inst_123992,processing_sequence);
var state_124071__$1 = (function (){var statearr_124093 = state_124071;
(statearr_124093[(20)] = inst_123991);

(statearr_124093[(14)] = inst_123988__$1);

return statearr_124093;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124071__$1,(14),inst_123993);
} else {
if((state_val_124072 === (9))){
var inst_124057 = (state_124071[(8)]);
var inst_124057__$1 = com.wsscode.pathom.connect.call_resolver(env,e);
var inst_124058 = com.wsscode.common.async_cljs.chan_QMARK_(inst_124057__$1);
var state_124071__$1 = (function (){var statearr_124094 = state_124071;
(statearr_124094[(8)] = inst_124057__$1);

return statearr_124094;
})();
if(inst_124058){
var statearr_124095_126007 = state_124071__$1;
(statearr_124095_126007[(1)] = (24));

} else {
var statearr_124096_126008 = state_124071__$1;
(statearr_124096_126008[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124072 === (5))){
var state_124071__$1 = state_124071;
var statearr_124097_126009 = state_124071__$1;
(statearr_124097_126009[(2)] = processing_sequence);

(statearr_124097_126009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124072 === (14))){
var inst_124003 = (state_124071[(9)]);
var inst_123991 = (state_124071[(20)]);
var inst_123998 = (state_124071[(13)]);
var inst_123995 = (state_124071[(2)]);
var inst_123996 = com.wsscode.common.async_cljs.throw_err(inst_123995);
var inst_123997 = cljs.core.filterv(inst_123991,inst_123996);
var inst_123998__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_123997);
var inst_123999 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_124000 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_123998__$1];
var inst_124001 = cljs.core.PersistentHashMap.fromArrays(inst_123999,inst_124000);
var inst_124002 = com.wsscode.pathom.trace.trace(env,inst_124001);
var inst_124003__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_123998__$1);
var inst_124004 = com.wsscode.common.async_cljs.chan_QMARK_(inst_124003__$1);
var state_124071__$1 = (function (){var statearr_124098 = state_124071;
(statearr_124098[(9)] = inst_124003__$1);

(statearr_124098[(13)] = inst_123998__$1);

(statearr_124098[(21)] = inst_124002);

return statearr_124098;
})();
if(inst_124004){
var statearr_124099_126010 = state_124071__$1;
(statearr_124099_126010[(1)] = (15));

} else {
var statearr_124100_126011 = state_124071__$1;
(statearr_124100_126011[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124072 === (26))){
var inst_124065 = (state_124071[(2)]);
var state_124071__$1 = state_124071;
var statearr_124101_126012 = state_124071__$1;
(statearr_124101_126012[(2)] = inst_124065);

(statearr_124101_126012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124072 === (16))){
var inst_124003 = (state_124071[(9)]);
var state_124071__$1 = state_124071;
var statearr_124102_126013 = state_124071__$1;
(statearr_124102_126013[(2)] = inst_124003);

(statearr_124102_126013[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124072 === (10))){
var inst_124067 = (state_124071[(2)]);
var state_124071__$1 = state_124071;
var statearr_124103_126014 = state_124071__$1;
(statearr_124103_126014[(2)] = inst_124067);


cljs.core.async.impl.ioc_helpers.process_exception(state_124071__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124072 === (18))){
var inst_124007 = (state_124071[(2)]);
var inst_124008 = com.wsscode.common.async_cljs.throw_err(inst_124007);
var state_124071__$1 = state_124071;
var statearr_124104_126015 = state_124071__$1;
(statearr_124104_126015[(2)] = inst_124008);

(statearr_124104_126015[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124072 === (8))){
var inst_123985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_124071__$1 = state_124071;
if(cljs.core.truth_(inst_123985)){
var statearr_124105_126016 = state_124071__$1;
(statearr_124105_126016[(1)] = (11));

} else {
var statearr_124106_126017 = state_124071__$1;
(statearr_124106_126017[(1)] = (12));

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
});})(c__39003__auto__,params))
;
return ((function (switch__38929__auto__,c__39003__auto__,params){
return (function() {
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38930__auto____0 = (function (){
var statearr_124107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_124107[(0)] = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38930__auto__);

(statearr_124107[(1)] = (1));

return statearr_124107;
});
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38930__auto____1 = (function (state_124071){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_124071);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e124108){if((e124108 instanceof Object)){
var ex__38933__auto__ = e124108;
var statearr_124109_126018 = state_124071;
(statearr_124109_126018[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_124071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e124108;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__126019 = state_124071;
state_124071 = G__126019;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38930__auto__ = function(state_124071){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38930__auto____1.call(this,state_124071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38930__auto____0;
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38930__auto____1;
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,params))
})();
var state__39005__auto__ = (function (){var statearr_124110 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_124110[(6)] = c__39003__auto__);

return statearr_124110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,params))
);

return c__39003__auto__;
});})(params))
);
});
/**
 * Like reader2, but supports async values on resolver return.
 */
com.wsscode.pathom.connect.async_reader2 = (function com$wsscode$pathom$connect$async_reader2(p__124113){
var map__124114 = p__124113;
var map__124114__$1 = (((((!((map__124114 == null))))?(((((map__124114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__124114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__124114):map__124114);
var env = map__124114__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__124114__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__124114__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__124114__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var temp__5718__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__124116 = temp__5718__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__124116,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__124116,(1),null);
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,vec__124116,plan,out,temp__5718__auto__,map__124114,map__124114__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,vec__124116,plan,out,temp__5718__auto__,map__124114,map__124114__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (state_124328){
var state_val_124329 = (state_124328[(1)]);
if((state_val_124329 === (7))){
var inst_124152 = (state_124328[(7)]);
var inst_124156 = (state_124328[(8)]);
var inst_124144 = (state_124328[(9)]);
var inst_124151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124144,(0),null);
var inst_124152__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124144,(1),null);
var inst_124153 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124154 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),inst_124152__$1];
var inst_124155 = (new cljs.core.PersistentVector(null,2,(5),inst_124153,inst_124154,null));
var inst_124156__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_124155);
var inst_124158 = (inst_124156__$1 == null);
var inst_124159 = cljs.core.not(inst_124158);
var state_124328__$1 = (function (){var statearr_124330 = state_124328;
(statearr_124330[(10)] = inst_124151);

(statearr_124330[(7)] = inst_124152__$1);

(statearr_124330[(8)] = inst_124156__$1);

return statearr_124330;
})();
if(inst_124159){
var statearr_124331_126020 = state_124328__$1;
(statearr_124331_126020[(1)] = (10));

} else {
var statearr_124332_126021 = state_124328__$1;
(statearr_124332_126021[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (59))){
var inst_124294 = (state_124328[(11)]);
var inst_124299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124294,(0),null);
var inst_124300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124294,(1),null);
var inst_124301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124294,(2),null);
var inst_124136 = inst_124299;
var inst_124137 = inst_124300;
var inst_124138 = inst_124301;
var state_124328__$1 = (function (){var statearr_124333 = state_124328;
(statearr_124333[(12)] = inst_124136);

(statearr_124333[(13)] = inst_124137);

(statearr_124333[(14)] = inst_124138);

return statearr_124333;
})();
var statearr_124334_126022 = state_124328__$1;
(statearr_124334_126022[(2)] = null);

(statearr_124334_126022[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (20))){
var inst_124184 = (state_124328[(15)]);
var inst_124199 = (state_124328[(16)]);
var inst_124182 = (state_124328[(17)]);
var inst_124199__$1 = com.wsscode.pathom.connect.call_resolver(inst_124182,inst_124184);
var inst_124200 = com.wsscode.common.async_cljs.chan_QMARK_(inst_124199__$1);
var state_124328__$1 = (function (){var statearr_124335 = state_124328;
(statearr_124335[(16)] = inst_124199__$1);

return statearr_124335;
})();
if(inst_124200){
var statearr_124336_126023 = state_124328__$1;
(statearr_124336_126023[(1)] = (26));

} else {
var statearr_124337_126024 = state_124328__$1;
(statearr_124337_126024[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (58))){
var inst_124317 = (state_124328[(2)]);
var state_124328__$1 = state_124328;
var statearr_124338_126025 = state_124328__$1;
(statearr_124338_126025[(2)] = inst_124317);

(statearr_124338_126025[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (60))){
var inst_124182 = (state_124328[(17)]);
var inst_124152 = (state_124328[(7)]);
var inst_124124 = (state_124328[(18)]);
var inst_124214 = (state_124328[(19)]);
var inst_124304 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_124305 = [new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),inst_124124,inst_124152,inst_124214];
var inst_124306 = cljs.core.PersistentHashMap.fromArrays(inst_124304,inst_124305);
var inst_124307 = com.wsscode.pathom.trace.trace(inst_124182,inst_124306);
var inst_124308 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_124309 = [inst_124214];
var inst_124310 = cljs.core.PersistentHashMap.fromArrays(inst_124308,inst_124309);
var inst_124311 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_124310);
var inst_124312 = (function(){throw inst_124311})();
var state_124328__$1 = (function (){var statearr_124339 = state_124328;
(statearr_124339[(20)] = inst_124307);

return statearr_124339;
})();
var statearr_124340_126026 = state_124328__$1;
(statearr_124340_126026[(2)] = inst_124312);

(statearr_124340_126026[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (27))){
var inst_124199 = (state_124328[(16)]);
var state_124328__$1 = state_124328;
var statearr_124341_126027 = state_124328__$1;
(statearr_124341_126027[(2)] = inst_124199);

(statearr_124341_126027[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (1))){
var state_124328__$1 = state_124328;
var statearr_124342_126028 = state_124328__$1;
(statearr_124342_126028[(2)] = null);

(statearr_124342_126028[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (24))){
var inst_124197 = (state_124328[(2)]);
var state_124328__$1 = state_124328;
var statearr_124344_126029 = state_124328__$1;
(statearr_124344_126029[(2)] = inst_124197);

(statearr_124344_126029[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (55))){
var inst_124279 = (state_124328[(2)]);
var inst_124280 = com.wsscode.common.async_cljs.throw_err(inst_124279);
var state_124328__$1 = state_124328;
var statearr_124345_126030 = state_124328__$1;
(statearr_124345_126030[(2)] = inst_124280);

(statearr_124345_126030[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (39))){
var inst_124229 = (state_124328[(21)]);
var inst_124137 = (state_124328[(13)]);
var inst_124145 = (state_124328[(22)]);
var inst_124138 = (state_124328[(14)]);
var inst_124236 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_124138,inst_124229);
var tmp124343 = inst_124137;
var inst_124136 = inst_124145;
var inst_124137__$1 = tmp124343;
var inst_124138__$1 = inst_124236;
var state_124328__$1 = (function (){var statearr_124346 = state_124328;
(statearr_124346[(12)] = inst_124136);

(statearr_124346[(13)] = inst_124137__$1);

(statearr_124346[(14)] = inst_124138__$1);

return statearr_124346;
})();
var statearr_124347_126031 = state_124328__$1;
(statearr_124347_126031[(2)] = null);

(statearr_124347_126031[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (46))){
var inst_124255 = (state_124328[(23)]);
var inst_124260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124255,(0),null);
var inst_124261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124255,(1),null);
var inst_124262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124255,(2),null);
var inst_124136 = inst_124260;
var inst_124137 = inst_124261;
var inst_124138 = inst_124262;
var state_124328__$1 = (function (){var statearr_124348 = state_124328;
(statearr_124348[(12)] = inst_124136);

(statearr_124348[(13)] = inst_124137);

(statearr_124348[(14)] = inst_124138);

return statearr_124348;
})();
var statearr_124349_126032 = state_124328__$1;
(statearr_124349_126032[(2)] = null);

(statearr_124349_126032[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_124328,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_124123 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_124124 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_124123);
var inst_124132 = cljs.core.seq(plan);
var inst_124133 = cljs.core.first(inst_124132);
var inst_124134 = cljs.core.next(inst_124132);
var inst_124135 = cljs.core.PersistentHashMap.EMPTY;
var inst_124136 = plan;
var inst_124137 = inst_124135;
var inst_124138 = out;
var state_124328__$1 = (function (){var statearr_124350 = state_124328;
(statearr_124350[(24)] = inst_124133);

(statearr_124350[(25)] = inst_124134);

(statearr_124350[(12)] = inst_124136);

(statearr_124350[(13)] = inst_124137);

(statearr_124350[(18)] = inst_124124);

(statearr_124350[(14)] = inst_124138);

return statearr_124350;
})();
var statearr_124351_126033 = state_124328__$1;
(statearr_124351_126033[(2)] = null);

(statearr_124351_126033[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (54))){
var inst_124283 = (state_124328[(2)]);
var state_124328__$1 = state_124328;
var statearr_124352_126034 = state_124328__$1;
(statearr_124352_126034[(2)] = inst_124283);

(statearr_124352_126034[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (15))){
var inst_124169 = (state_124328[(2)]);
var state_124328__$1 = state_124328;
var statearr_124353_126035 = state_124328__$1;
(statearr_124353_126035[(2)] = inst_124169);

(statearr_124353_126035[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (48))){
var inst_124285 = (state_124328[(2)]);
var state_124328__$1 = state_124328;
var statearr_124354_126036 = state_124328__$1;
(statearr_124354_126036[(2)] = inst_124285);

(statearr_124354_126036[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (50))){
var state_124328__$1 = state_124328;
var statearr_124355_126037 = state_124328__$1;
(statearr_124355_126037[(2)] = null);

(statearr_124355_126037[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (21))){
var inst_124209 = (state_124328[(26)]);
var inst_124209__$1 = (state_124328[(2)]);
var state_124328__$1 = (function (){var statearr_124356 = state_124328;
(statearr_124356[(26)] = inst_124209__$1);

return statearr_124356;
})();
if(cljs.core.truth_(inst_124209__$1)){
var statearr_124357_126038 = state_124328__$1;
(statearr_124357_126038[(1)] = (30));

} else {
var statearr_124358_126039 = state_124328__$1;
(statearr_124358_126039[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (31))){
var inst_124212 = cljs.core.PersistentHashMap.EMPTY;
var state_124328__$1 = state_124328;
var statearr_124359_126040 = state_124328__$1;
(statearr_124359_126040[(2)] = inst_124212);

(statearr_124359_126040[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (32))){
var inst_124184 = (state_124328[(15)]);
var inst_124180 = (state_124328[(27)]);
var inst_124133 = (state_124328[(24)]);
var inst_124151 = (state_124328[(10)]);
var inst_124134 = (state_124328[(25)]);
var inst_124136 = (state_124328[(12)]);
var inst_124177 = (state_124328[(28)]);
var inst_124178 = (state_124328[(29)]);
var inst_124137 = (state_124328[(13)]);
var inst_124179 = (state_124328[(30)]);
var inst_124181 = (state_124328[(31)]);
var inst_124182 = (state_124328[(17)]);
var inst_124152 = (state_124328[(7)]);
var inst_124124 = (state_124328[(18)]);
var inst_124145 = (state_124328[(22)]);
var inst_124138 = (state_124328[(14)]);
var inst_124144 = (state_124328[(9)]);
var inst_124187 = (state_124328[(32)]);
var inst_124214 = (state_124328[(19)]);
var inst_124214__$1 = (state_124328[(2)]);
var inst_124215 = (function (){var input = inst_124180;
var step = inst_124144;
var key_SINGLEQUOTE_ = inst_124151;
var seq__124130 = inst_124134;
var first__124131 = inst_124133;
var G__124128 = inst_124136;
var response = inst_124214__$1;
var cache_QMARK_ = inst_124178;
var out_left = inst_124138;
var vec__124147 = inst_124144;
var key = inst_124124;
var first__124142 = inst_124144;
var failed_resolvers = inst_124137;
var batch_QMARK_ = inst_124179;
var map__124150 = inst_124177;
var output = inst_124181;
var env__$1 = inst_124182;
var seq__124141 = inst_124145;
var e = inst_124184;
var resolver_sym = inst_124152;
var trace_data = inst_124187;
var resolver = inst_124177;
var vec__124129 = plan;
var vec__124140 = inst_124136;
var tail = inst_124145;
return ((function (input,step,key_SINGLEQUOTE_,seq__124130,first__124131,G__124128,response,cache_QMARK_,out_left,vec__124147,key,first__124142,failed_resolvers,batch_QMARK_,map__124150,output,env__$1,seq__124141,e,resolver_sym,trace_data,resolver,vec__124129,vec__124140,tail,inst_124184,inst_124180,inst_124133,inst_124151,inst_124134,inst_124136,inst_124177,inst_124178,inst_124137,inst_124179,inst_124181,inst_124182,inst_124152,inst_124124,inst_124145,inst_124138,inst_124144,inst_124187,inst_124214,inst_124214__$1,state_val_124329,c__39003__auto__,vec__124116,plan,out,temp__5718__auto__,map__124114,map__124114__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (error){
var failed_resolvers__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers,resolver_sym,error);
com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$1,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (failed_resolvers__$1,input,step,key_SINGLEQUOTE_,seq__124130,first__124131,G__124128,response,cache_QMARK_,out_left,vec__124147,key,first__124142,failed_resolvers,batch_QMARK_,map__124150,output,env__$1,seq__124141,e,resolver_sym,trace_data,resolver,vec__124129,vec__124140,tail,inst_124184,inst_124180,inst_124133,inst_124151,inst_124134,inst_124136,inst_124177,inst_124178,inst_124137,inst_124179,inst_124181,inst_124182,inst_124152,inst_124124,inst_124145,inst_124138,inst_124144,inst_124187,inst_124214,inst_124214__$1,state_val_124329,c__39003__auto__,vec__124116,plan,out,temp__5718__auto__,map__124114,map__124114__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__124111_SHARP_){
var x__4222__auto__ = ((function (){var or__4131__auto__ = p1__124111_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() * (2));
var y__4223__auto__ = max_resolver_weight;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});})(failed_resolvers__$1,input,step,key_SINGLEQUOTE_,seq__124130,first__124131,G__124128,response,cache_QMARK_,out_left,vec__124147,key,first__124142,failed_resolvers,batch_QMARK_,map__124150,output,env__$1,seq__124141,e,resolver_sym,trace_data,resolver,vec__124129,vec__124140,tail,inst_124184,inst_124180,inst_124133,inst_124151,inst_124134,inst_124136,inst_124177,inst_124178,inst_124137,inst_124179,inst_124181,inst_124182,inst_124152,inst_124124,inst_124145,inst_124138,inst_124144,inst_124187,inst_124214,inst_124214__$1,state_val_124329,c__39003__auto__,vec__124116,plan,out,temp__5718__auto__,map__124114,map__124114__$1,env,indexes,max_resolver_weight,processing_sequence))
], 0));

var temp__5718__auto____$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$1,failed_resolvers__$1);
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__124360 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__124360,(0),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__124360,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan__$1,failed_resolvers__$1,out_SINGLEQUOTE_], null);
} else {
return null;
}
});
;})(input,step,key_SINGLEQUOTE_,seq__124130,first__124131,G__124128,response,cache_QMARK_,out_left,vec__124147,key,first__124142,failed_resolvers,batch_QMARK_,map__124150,output,env__$1,seq__124141,e,resolver_sym,trace_data,resolver,vec__124129,vec__124140,tail,inst_124184,inst_124180,inst_124133,inst_124151,inst_124134,inst_124136,inst_124177,inst_124178,inst_124137,inst_124179,inst_124181,inst_124182,inst_124152,inst_124124,inst_124145,inst_124138,inst_124144,inst_124187,inst_124214,inst_124214__$1,state_val_124329,c__39003__auto__,vec__124116,plan,out,temp__5718__auto__,map__124114,map__124114__$1,env,indexes,max_resolver_weight,processing_sequence))
})();
var inst_124216 = cljs.core.map_QMARK_(inst_124214__$1);
var state_124328__$1 = (function (){var statearr_124363 = state_124328;
(statearr_124363[(33)] = inst_124215);

(statearr_124363[(19)] = inst_124214__$1);

return statearr_124363;
})();
if(inst_124216){
var statearr_124364_126041 = state_124328__$1;
(statearr_124364_126041[(1)] = (33));

} else {
var statearr_124365_126042 = state_124328__$1;
(statearr_124365_126042[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (40))){
var inst_124219 = (state_124328[(34)]);
var inst_124239 = (state_124328[(35)]);
var inst_124218 = (state_124328[(36)]);
var inst_124239__$1 = com.wsscode.pathom.connect.process_simple_reader_response(inst_124218,inst_124219);
var inst_124240 = com.wsscode.common.async_cljs.chan_QMARK_(inst_124239__$1);
var state_124328__$1 = (function (){var statearr_124366 = state_124328;
(statearr_124366[(35)] = inst_124239__$1);

return statearr_124366;
})();
if(inst_124240){
var statearr_124367_126043 = state_124328__$1;
(statearr_124367_126043[(1)] = (42));

} else {
var statearr_124368_126044 = state_124328__$1;
(statearr_124368_126044[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (56))){
var inst_124215 = (state_124328[(33)]);
var inst_124294 = (state_124328[(11)]);
var inst_124214 = (state_124328[(19)]);
var inst_124290 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_124291 = [inst_124214];
var inst_124292 = cljs.core.PersistentHashMap.fromArrays(inst_124290,inst_124291);
var inst_124293 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_124292);
var inst_124294__$1 = (inst_124215.cljs$core$IFn$_invoke$arity$1 ? inst_124215.cljs$core$IFn$_invoke$arity$1(inst_124293) : inst_124215.call(null,inst_124293));
var state_124328__$1 = (function (){var statearr_124369 = state_124328;
(statearr_124369[(11)] = inst_124294__$1);

return statearr_124369;
})();
if(cljs.core.truth_(inst_124294__$1)){
var statearr_124370_126045 = state_124328__$1;
(statearr_124370_126045[(1)] = (59));

} else {
var statearr_124371_126046 = state_124328__$1;
(statearr_124371_126046[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (33))){
var inst_124184 = (state_124328[(15)]);
var inst_124180 = (state_124328[(27)]);
var inst_124133 = (state_124328[(24)]);
var inst_124151 = (state_124328[(10)]);
var inst_124134 = (state_124328[(25)]);
var inst_124136 = (state_124328[(12)]);
var inst_124177 = (state_124328[(28)]);
var inst_124219 = (state_124328[(34)]);
var inst_124215 = (state_124328[(33)]);
var inst_124178 = (state_124328[(29)]);
var inst_124137 = (state_124328[(13)]);
var inst_124179 = (state_124328[(30)]);
var inst_124181 = (state_124328[(31)]);
var inst_124218 = (state_124328[(36)]);
var inst_124182 = (state_124328[(17)]);
var inst_124152 = (state_124328[(7)]);
var inst_124124 = (state_124328[(18)]);
var inst_124145 = (state_124328[(22)]);
var inst_124138 = (state_124328[(14)]);
var inst_124144 = (state_124328[(9)]);
var inst_124187 = (state_124328[(32)]);
var inst_124214 = (state_124328[(19)]);
var inst_124218__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_124214,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),inst_124182);
var inst_124219__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_124214,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_124220 = (function (){var input = inst_124180;
var step = inst_124144;
var key_SINGLEQUOTE_ = inst_124151;
var seq__124130 = inst_124134;
var first__124131 = inst_124133;
var G__124128 = inst_124136;
var response = inst_124219__$1;
var cache_QMARK_ = inst_124178;
var out_left = inst_124138;
var vec__124147 = inst_124144;
var key = inst_124124;
var first__124142 = inst_124144;
var failed_resolvers = inst_124137;
var batch_QMARK_ = inst_124179;
var map__124150 = inst_124177;
var output = inst_124181;
var env__$1 = inst_124182;
var seq__124141 = inst_124145;
var e = inst_124184;
var resolver_sym = inst_124152;
var trace_data = inst_124187;
var resolver = inst_124177;
var vec__124129 = plan;
var replan = inst_124215;
var env_SINGLEQUOTE_ = inst_124218__$1;
var vec__124140 = inst_124136;
var tail = inst_124145;
return ((function (input,step,key_SINGLEQUOTE_,seq__124130,first__124131,G__124128,response,cache_QMARK_,out_left,vec__124147,key,first__124142,failed_resolvers,batch_QMARK_,map__124150,output,env__$1,seq__124141,e,resolver_sym,trace_data,resolver,vec__124129,replan,env_SINGLEQUOTE_,vec__124140,tail,inst_124184,inst_124180,inst_124133,inst_124151,inst_124134,inst_124136,inst_124177,inst_124219,inst_124215,inst_124178,inst_124137,inst_124179,inst_124181,inst_124218,inst_124182,inst_124152,inst_124124,inst_124145,inst_124138,inst_124144,inst_124187,inst_124214,inst_124218__$1,inst_124219__$1,state_val_124329,c__39003__auto__,vec__124116,plan,out,temp__5718__auto__,map__124114,map__124114__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__124112_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__124112_SHARP_], 0));
});
;})(input,step,key_SINGLEQUOTE_,seq__124130,first__124131,G__124128,response,cache_QMARK_,out_left,vec__124147,key,first__124142,failed_resolvers,batch_QMARK_,map__124150,output,env__$1,seq__124141,e,resolver_sym,trace_data,resolver,vec__124129,replan,env_SINGLEQUOTE_,vec__124140,tail,inst_124184,inst_124180,inst_124133,inst_124151,inst_124134,inst_124136,inst_124177,inst_124219,inst_124215,inst_124178,inst_124137,inst_124179,inst_124181,inst_124218,inst_124182,inst_124152,inst_124124,inst_124145,inst_124138,inst_124144,inst_124187,inst_124214,inst_124218__$1,inst_124219__$1,state_val_124329,c__39003__auto__,vec__124116,plan,out,temp__5718__auto__,map__124114,map__124114__$1,env,indexes,max_resolver_weight,processing_sequence))
})();
var inst_124221 = com.wsscode.pathom.core.swap_entity_BANG_(inst_124218__$1,inst_124220);
var inst_124223 = cljs.core.contains_QMARK_(inst_124219__$1,inst_124151);
var inst_124224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_124219__$1,inst_124151);
var inst_124225 = (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(inst_124224) : com.wsscode.pathom.core.break_values.call(null,inst_124224));
var inst_124226 = cljs.core.not(inst_124225);
var inst_124227 = ((inst_124223) && (inst_124226));
var state_124328__$1 = (function (){var statearr_124372 = state_124328;
(statearr_124372[(34)] = inst_124219__$1);

(statearr_124372[(37)] = inst_124221);

(statearr_124372[(36)] = inst_124218__$1);

return statearr_124372;
})();
if(cljs.core.truth_(inst_124227)){
var statearr_124373_126047 = state_124328__$1;
(statearr_124373_126047[(1)] = (36));

} else {
var statearr_124374_126048 = state_124328__$1;
(statearr_124374_126048[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (13))){
var state_124328__$1 = state_124328;
var statearr_124375_126049 = state_124328__$1;
(statearr_124375_126049[(2)] = true);

(statearr_124375_126049[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (22))){
var inst_124189 = (state_124328[(38)]);
var state_124328__$1 = state_124328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124328__$1,(25),inst_124189);
} else {
if((state_val_124329 === (36))){
var inst_124181 = (state_124328[(31)]);
var inst_124218 = (state_124328[(36)]);
var inst_124152 = (state_124328[(7)]);
var inst_124124 = (state_124328[(18)]);
var inst_124145 = (state_124328[(22)]);
var inst_124229 = com.wsscode.pathom.connect.output__GT_provides(inst_124181);
var inst_124230 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_124231 = [new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),inst_124124,inst_124152];
var inst_124232 = cljs.core.PersistentHashMap.fromArrays(inst_124230,inst_124231);
var inst_124233 = com.wsscode.pathom.trace.trace(inst_124218,inst_124232);
var inst_124234 = cljs.core.seq(inst_124145);
var state_124328__$1 = (function (){var statearr_124376 = state_124328;
(statearr_124376[(21)] = inst_124229);

(statearr_124376[(39)] = inst_124233);

return statearr_124376;
})();
if(inst_124234){
var statearr_124377_126050 = state_124328__$1;
(statearr_124377_126050[(1)] = (39));

} else {
var statearr_124378_126051 = state_124328__$1;
(statearr_124378_126051[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (41))){
var inst_124249 = (state_124328[(2)]);
var state_124328__$1 = state_124328;
var statearr_124379_126052 = state_124328__$1;
(statearr_124379_126052[(2)] = inst_124249);

(statearr_124379_126052[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (43))){
var inst_124239 = (state_124328[(35)]);
var state_124328__$1 = state_124328;
var statearr_124380_126053 = state_124328__$1;
(statearr_124380_126053[(2)] = inst_124239);

(statearr_124380_126053[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (61))){
var inst_124314 = (state_124328[(2)]);
var state_124328__$1 = state_124328;
var statearr_124381_126054 = state_124328__$1;
(statearr_124381_126054[(2)] = inst_124314);

(statearr_124381_126054[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (29))){
var inst_124203 = (state_124328[(2)]);
var inst_124204 = com.wsscode.common.async_cljs.throw_err(inst_124203);
var state_124328__$1 = state_124328;
var statearr_124382_126055 = state_124328__$1;
(statearr_124382_126055[(2)] = inst_124204);

(statearr_124382_126055[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (44))){
var inst_124247 = (state_124328[(2)]);
var state_124328__$1 = state_124328;
var statearr_124383_126056 = state_124328__$1;
(statearr_124383_126056[(2)] = inst_124247);

(statearr_124383_126056[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (6))){
var inst_124324 = (state_124328[(2)]);
var state_124328__$1 = state_124328;
var statearr_124384_126057 = state_124328__$1;
(statearr_124384_126057[(2)] = inst_124324);


cljs.core.async.impl.ioc_helpers.process_exception(state_124328__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (28))){
var inst_124207 = (state_124328[(2)]);
var state_124328__$1 = state_124328;
var statearr_124385_126058 = state_124328__$1;
(statearr_124385_126058[(2)] = inst_124207);

(statearr_124385_126058[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (51))){
var inst_124275 = (state_124328[(40)]);
var inst_124219 = (state_124328[(34)]);
var inst_124218 = (state_124328[(36)]);
var inst_124274 = (state_124328[(2)]);
var inst_124275__$1 = com.wsscode.pathom.connect.process_simple_reader_response(inst_124218,inst_124219);
var inst_124276 = com.wsscode.common.async_cljs.chan_QMARK_(inst_124275__$1);
var state_124328__$1 = (function (){var statearr_124386 = state_124328;
(statearr_124386[(40)] = inst_124275__$1);

(statearr_124386[(41)] = inst_124274);

return statearr_124386;
})();
if(inst_124276){
var statearr_124387_126059 = state_124328__$1;
(statearr_124387_126059[(1)] = (52));

} else {
var statearr_124388_126060 = state_124328__$1;
(statearr_124388_126060[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (25))){
var inst_124193 = (state_124328[(2)]);
var inst_124194 = com.wsscode.common.async_cljs.throw_err(inst_124193);
var state_124328__$1 = state_124328;
var statearr_124389_126061 = state_124328__$1;
(statearr_124389_126061[(2)] = inst_124194);

(statearr_124389_126061[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (34))){
var state_124328__$1 = state_124328;
var statearr_124390_126062 = state_124328__$1;
(statearr_124390_126062[(1)] = (56));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (17))){
var inst_124156 = (state_124328[(8)]);
var state_124328__$1 = state_124328;
var statearr_124392_126063 = state_124328__$1;
(statearr_124392_126063[(2)] = inst_124156);

(statearr_124392_126063[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (3))){
var inst_124119 = (state_124328[(2)]);
var state_124328__$1 = state_124328;
var statearr_124393_126064 = state_124328__$1;
(statearr_124393_126064[(2)] = inst_124119);


cljs.core.async.impl.ioc_helpers.process_exception(state_124328__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (12))){
var inst_124172 = (state_124328[(2)]);
var state_124328__$1 = state_124328;
if(cljs.core.truth_(inst_124172)){
var statearr_124394_126065 = state_124328__$1;
(statearr_124394_126065[(1)] = (16));

} else {
var statearr_124395_126066 = state_124328__$1;
(statearr_124395_126066[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (2))){
var inst_124326 = (state_124328[(2)]);
var state_124328__$1 = state_124328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_124328__$1,inst_124326);
} else {
if((state_val_124329 === (23))){
var inst_124189 = (state_124328[(38)]);
var state_124328__$1 = state_124328;
var statearr_124396_126067 = state_124328__$1;
(statearr_124396_126067[(2)] = inst_124189);

(statearr_124396_126067[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (47))){
var inst_124145 = (state_124328[(22)]);
var inst_124265 = cljs.core.seq(inst_124145);
var state_124328__$1 = state_124328;
if(inst_124265){
var statearr_124397_126068 = state_124328__$1;
(statearr_124397_126068[(1)] = (49));

} else {
var statearr_124398_126069 = state_124328__$1;
(statearr_124398_126069[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (35))){
var inst_124319 = (state_124328[(2)]);
var state_124328__$1 = state_124328;
var statearr_124399_126070 = state_124328__$1;
(statearr_124399_126070[(2)] = inst_124319);

(statearr_124399_126070[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (19))){
var inst_124184 = (state_124328[(15)]);
var inst_124180 = (state_124328[(27)]);
var inst_124189 = (state_124328[(38)]);
var inst_124179 = (state_124328[(30)]);
var inst_124182 = (state_124328[(17)]);
var inst_124152 = (state_124328[(7)]);
var inst_124187 = (state_124328[(32)]);
var inst_124189__$1 = com.wsscode.pathom.connect.async_read_cache_read(inst_124182,inst_124152,inst_124184,inst_124179,processing_sequence,inst_124187,inst_124180);
var inst_124190 = com.wsscode.common.async_cljs.chan_QMARK_(inst_124189__$1);
var state_124328__$1 = (function (){var statearr_124400 = state_124328;
(statearr_124400[(38)] = inst_124189__$1);

return statearr_124400;
})();
if(inst_124190){
var statearr_124401_126071 = state_124328__$1;
(statearr_124401_126071[(1)] = (22));

} else {
var statearr_124402_126072 = state_124328__$1;
(statearr_124402_126072[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (57))){
var state_124328__$1 = state_124328;
var statearr_124403_126073 = state_124328__$1;
(statearr_124403_126073[(2)] = null);

(statearr_124403_126073[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (11))){
var state_124328__$1 = state_124328;
var statearr_124404_126074 = state_124328__$1;
(statearr_124404_126074[(2)] = false);

(statearr_124404_126074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (9))){
var inst_124322 = (state_124328[(2)]);
var state_124328__$1 = state_124328;
var statearr_124405_126075 = state_124328__$1;
(statearr_124405_126075[(2)] = inst_124322);

(statearr_124405_126075[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (5))){
var inst_124136 = (state_124328[(12)]);
var inst_124144 = (state_124328[(9)]);
var inst_124143 = cljs.core.seq(inst_124136);
var inst_124144__$1 = cljs.core.first(inst_124143);
var inst_124145 = cljs.core.next(inst_124143);
var state_124328__$1 = (function (){var statearr_124406 = state_124328;
(statearr_124406[(22)] = inst_124145);

(statearr_124406[(9)] = inst_124144__$1);

return statearr_124406;
})();
if(cljs.core.truth_(inst_124144__$1)){
var statearr_124407_126076 = state_124328__$1;
(statearr_124407_126076[(1)] = (7));

} else {
var statearr_124408_126077 = state_124328__$1;
(statearr_124408_126077[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (14))){
var state_124328__$1 = state_124328;
var statearr_124409_126078 = state_124328__$1;
(statearr_124409_126078[(2)] = false);

(statearr_124409_126078[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (45))){
var inst_124243 = (state_124328[(2)]);
var inst_124244 = com.wsscode.common.async_cljs.throw_err(inst_124243);
var state_124328__$1 = state_124328;
var statearr_124410_126079 = state_124328__$1;
(statearr_124410_126079[(2)] = inst_124244);

(statearr_124410_126079[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (53))){
var inst_124275 = (state_124328[(40)]);
var state_124328__$1 = state_124328;
var statearr_124411_126080 = state_124328__$1;
(statearr_124411_126080[(2)] = inst_124275);

(statearr_124411_126080[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (26))){
var inst_124199 = (state_124328[(16)]);
var state_124328__$1 = state_124328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124328__$1,(29),inst_124199);
} else {
if((state_val_124329 === (16))){
var inst_124156 = (state_124328[(8)]);
var inst_124174 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_124156);
var state_124328__$1 = state_124328;
var statearr_124412_126081 = state_124328__$1;
(statearr_124412_126081[(2)] = inst_124174);

(statearr_124412_126081[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (38))){
var inst_124287 = (state_124328[(2)]);
var state_124328__$1 = state_124328;
var statearr_124413_126082 = state_124328__$1;
(statearr_124413_126082[(2)] = inst_124287);

(statearr_124413_126082[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (30))){
var inst_124209 = (state_124328[(26)]);
var state_124328__$1 = state_124328;
var statearr_124414_126083 = state_124328__$1;
(statearr_124414_126083[(2)] = inst_124209);

(statearr_124414_126083[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (10))){
var inst_124156 = (state_124328[(8)]);
var inst_124161 = inst_124156.cljs$lang$protocol_mask$partition0$;
var inst_124162 = (inst_124161 & (64));
var inst_124163 = inst_124156.cljs$core$ISeq$;
var inst_124164 = (cljs.core.PROTOCOL_SENTINEL === inst_124163);
var inst_124165 = ((inst_124162) || (inst_124164));
var state_124328__$1 = state_124328;
if(cljs.core.truth_(inst_124165)){
var statearr_124415_126084 = state_124328__$1;
(statearr_124415_126084[(1)] = (13));

} else {
var statearr_124416_126085 = state_124328__$1;
(statearr_124416_126085[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (18))){
var inst_124184 = (state_124328[(15)]);
var inst_124180 = (state_124328[(27)]);
var inst_124177 = (state_124328[(28)]);
var inst_124178 = (state_124328[(29)]);
var inst_124182 = (state_124328[(17)]);
var inst_124152 = (state_124328[(7)]);
var inst_124124 = (state_124328[(18)]);
var inst_124177__$1 = (state_124328[(2)]);
var inst_124178__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_124177__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_124179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_124177__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_124180__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_124177__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_124181 = com.wsscode.pathom.connect.resolver__GT_output(env,inst_124152);
var inst_124182__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_124177__$1);
var inst_124183 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_124182__$1);
var inst_124184__$1 = cljs.core.select_keys(inst_124183,inst_124180__$1);
var inst_124185 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_124186 = [inst_124124,inst_124152,inst_124184__$1];
var inst_124187 = cljs.core.PersistentHashMap.fromArrays(inst_124185,inst_124186);
var state_124328__$1 = (function (){var statearr_124417 = state_124328;
(statearr_124417[(15)] = inst_124184__$1);

(statearr_124417[(27)] = inst_124180__$1);

(statearr_124417[(28)] = inst_124177__$1);

(statearr_124417[(29)] = inst_124178__$1);

(statearr_124417[(30)] = inst_124179);

(statearr_124417[(31)] = inst_124181);

(statearr_124417[(17)] = inst_124182__$1);

(statearr_124417[(32)] = inst_124187);

return statearr_124417;
})();
if(cljs.core.truth_(inst_124178__$1)){
var statearr_124418_126086 = state_124328__$1;
(statearr_124418_126086[(1)] = (19));

} else {
var statearr_124419_126087 = state_124328__$1;
(statearr_124419_126087[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (52))){
var inst_124275 = (state_124328[(40)]);
var state_124328__$1 = state_124328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124328__$1,(55),inst_124275);
} else {
if((state_val_124329 === (42))){
var inst_124239 = (state_124328[(35)]);
var state_124328__$1 = state_124328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124328__$1,(45),inst_124239);
} else {
if((state_val_124329 === (37))){
var inst_124151 = (state_124328[(10)]);
var inst_124219 = (state_124328[(34)]);
var inst_124215 = (state_124328[(33)]);
var inst_124255 = (state_124328[(23)]);
var inst_124251 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_124252 = [inst_124219,inst_124151];
var inst_124253 = cljs.core.PersistentHashMap.fromArrays(inst_124251,inst_124252);
var inst_124254 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_124253);
var inst_124255__$1 = (inst_124215.cljs$core$IFn$_invoke$arity$1 ? inst_124215.cljs$core$IFn$_invoke$arity$1(inst_124254) : inst_124215.call(null,inst_124254));
var state_124328__$1 = (function (){var statearr_124420 = state_124328;
(statearr_124420[(23)] = inst_124255__$1);

return statearr_124420;
})();
if(cljs.core.truth_(inst_124255__$1)){
var statearr_124421_126088 = state_124328__$1;
(statearr_124421_126088[(1)] = (46));

} else {
var statearr_124422_126089 = state_124328__$1;
(statearr_124422_126089[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (8))){
var state_124328__$1 = state_124328;
var statearr_124423_126090 = state_124328__$1;
(statearr_124423_126090[(2)] = null);

(statearr_124423_126090[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124329 === (49))){
var inst_124151 = (state_124328[(10)]);
var inst_124219 = (state_124328[(34)]);
var inst_124267 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_124268 = [inst_124219,inst_124151];
var inst_124269 = cljs.core.PersistentHashMap.fromArrays(inst_124267,inst_124268);
var inst_124270 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_124269);
var inst_124271 = (function(){throw inst_124270})();
var state_124328__$1 = state_124328;
var statearr_124424_126091 = state_124328__$1;
(statearr_124424_126091[(2)] = inst_124271);

(statearr_124424_126091[(1)] = (51));


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
});})(c__39003__auto__,vec__124116,plan,out,temp__5718__auto__,map__124114,map__124114__$1,env,indexes,max_resolver_weight,processing_sequence))
;
return ((function (switch__38929__auto__,c__39003__auto__,vec__124116,plan,out,temp__5718__auto__,map__124114,map__124114__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_reader2_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$connect$async_reader2_$_state_machine__38930__auto____0 = (function (){
var statearr_124425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_124425[(0)] = com$wsscode$pathom$connect$async_reader2_$_state_machine__38930__auto__);

(statearr_124425[(1)] = (1));

return statearr_124425;
});
var com$wsscode$pathom$connect$async_reader2_$_state_machine__38930__auto____1 = (function (state_124328){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_124328);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e124426){if((e124426 instanceof Object)){
var ex__38933__auto__ = e124426;
var statearr_124427_126092 = state_124328;
(statearr_124427_126092[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_124328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e124426;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__126093 = state_124328;
state_124328 = G__126093;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader2_$_state_machine__38930__auto__ = function(state_124328){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader2_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader2_$_state_machine__38930__auto____1.call(this,state_124328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader2_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader2_$_state_machine__38930__auto____0;
com$wsscode$pathom$connect$async_reader2_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader2_$_state_machine__38930__auto____1;
return com$wsscode$pathom$connect$async_reader2_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,vec__124116,plan,out,temp__5718__auto__,map__124114,map__124114__$1,env,indexes,max_resolver_weight,processing_sequence))
})();
var state__39005__auto__ = (function (){var statearr_124428 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_124428[(6)] = c__39003__auto__);

return statearr_124428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,vec__124116,plan,out,temp__5718__auto__,map__124114,map__124114__$1,env,indexes,max_resolver_weight,processing_sequence))
);

return c__39003__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.parallel_batch_error = (function com$wsscode$pathom$connect$parallel_batch_error(p__124429,e){
var map__124430 = p__124429;
var map__124430__$1 = (((((!((map__124430 == null))))?(((((map__124430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__124430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__124430):map__124430);
var env = map__124430__$1;
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__124430__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var map__124432 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var map__124432__$1 = (((((!((map__124432 == null))))?(((((map__124432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__124432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__124432):map__124432);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__124432__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var item_count = cljs.core.count(processing_sequence);
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-error","com.wsscode.pathom.connect/batch-result-error",-1587594017),new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),com.wsscode.pathom.core.process_error(env,e)], null));

var output_SINGLEQUOTE_ = com.wsscode.pathom.connect.output__GT_provides(output);
var base_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take_while.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword_QMARK_),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661).cljs$core$IFn$_invoke$arity$1(env));
var seq__124434_126094 = cljs.core.seq(output_SINGLEQUOTE_);
var chunk__124439_126095 = null;
var count__124440_126096 = (0);
var i__124441_126097 = (0);
while(true){
if((i__124441_126097 < count__124440_126096)){
var o_126098 = chunk__124439_126095.cljs$core$IIndexed$_nth$arity$2(null,i__124441_126097);
var seq__124442_126099 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(item_count));
var chunk__124443_126100 = null;
var count__124444_126101 = (0);
var i__124445_126102 = (0);
while(true){
if((i__124445_126102 < count__124444_126101)){
var i_126103 = chunk__124443_126100.cljs$core$IIndexed$_nth$arity$2(null,i__124445_126102);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(base_path,i_126103,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o_126098], 0))),e);


var G__126104 = seq__124442_126099;
var G__126105 = chunk__124443_126100;
var G__126106 = count__124444_126101;
var G__126107 = (i__124445_126102 + (1));
seq__124442_126099 = G__126104;
chunk__124443_126100 = G__126105;
count__124444_126101 = G__126106;
i__124445_126102 = G__126107;
continue;
} else {
var temp__5720__auto___126108 = cljs.core.seq(seq__124442_126099);
if(temp__5720__auto___126108){
var seq__124442_126109__$1 = temp__5720__auto___126108;
if(cljs.core.chunked_seq_QMARK_(seq__124442_126109__$1)){
var c__4550__auto___126110 = cljs.core.chunk_first(seq__124442_126109__$1);
var G__126111 = cljs.core.chunk_rest(seq__124442_126109__$1);
var G__126112 = c__4550__auto___126110;
var G__126113 = cljs.core.count(c__4550__auto___126110);
var G__126114 = (0);
seq__124442_126099 = G__126111;
chunk__124443_126100 = G__126112;
count__124444_126101 = G__126113;
i__124445_126102 = G__126114;
continue;
} else {
var i_126115 = cljs.core.first(seq__124442_126109__$1);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(base_path,i_126115,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o_126098], 0))),e);


var G__126116 = cljs.core.next(seq__124442_126109__$1);
var G__126117 = null;
var G__126118 = (0);
var G__126119 = (0);
seq__124442_126099 = G__126116;
chunk__124443_126100 = G__126117;
count__124444_126101 = G__126118;
i__124445_126102 = G__126119;
continue;
}
} else {
}
}
break;
}

var G__126120 = seq__124434_126094;
var G__126121 = chunk__124439_126095;
var G__126122 = count__124440_126096;
var G__126123 = (i__124441_126097 + (1));
seq__124434_126094 = G__126120;
chunk__124439_126095 = G__126121;
count__124440_126096 = G__126122;
i__124441_126097 = G__126123;
continue;
} else {
var temp__5720__auto___126124 = cljs.core.seq(seq__124434_126094);
if(temp__5720__auto___126124){
var seq__124434_126125__$1 = temp__5720__auto___126124;
if(cljs.core.chunked_seq_QMARK_(seq__124434_126125__$1)){
var c__4550__auto___126126 = cljs.core.chunk_first(seq__124434_126125__$1);
var G__126127 = cljs.core.chunk_rest(seq__124434_126125__$1);
var G__126128 = c__4550__auto___126126;
var G__126129 = cljs.core.count(c__4550__auto___126126);
var G__126130 = (0);
seq__124434_126094 = G__126127;
chunk__124439_126095 = G__126128;
count__124440_126096 = G__126129;
i__124441_126097 = G__126130;
continue;
} else {
var o_126131 = cljs.core.first(seq__124434_126125__$1);
var seq__124435_126132 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(item_count));
var chunk__124436_126133 = null;
var count__124437_126134 = (0);
var i__124438_126135 = (0);
while(true){
if((i__124438_126135 < count__124437_126134)){
var i_126136 = chunk__124436_126133.cljs$core$IIndexed$_nth$arity$2(null,i__124438_126135);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(base_path,i_126136,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o_126131], 0))),e);


var G__126137 = seq__124435_126132;
var G__126138 = chunk__124436_126133;
var G__126139 = count__124437_126134;
var G__126140 = (i__124438_126135 + (1));
seq__124435_126132 = G__126137;
chunk__124436_126133 = G__126138;
count__124437_126134 = G__126139;
i__124438_126135 = G__126140;
continue;
} else {
var temp__5720__auto___126141__$1 = cljs.core.seq(seq__124435_126132);
if(temp__5720__auto___126141__$1){
var seq__124435_126142__$1 = temp__5720__auto___126141__$1;
if(cljs.core.chunked_seq_QMARK_(seq__124435_126142__$1)){
var c__4550__auto___126143 = cljs.core.chunk_first(seq__124435_126142__$1);
var G__126144 = cljs.core.chunk_rest(seq__124435_126142__$1);
var G__126145 = c__4550__auto___126143;
var G__126146 = cljs.core.count(c__4550__auto___126143);
var G__126147 = (0);
seq__124435_126132 = G__126144;
chunk__124436_126133 = G__126145;
count__124437_126134 = G__126146;
i__124438_126135 = G__126147;
continue;
} else {
var i_126148 = cljs.core.first(seq__124435_126142__$1);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(base_path,i_126148,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o_126131], 0))),e);


var G__126149 = cljs.core.next(seq__124435_126142__$1);
var G__126150 = null;
var G__126151 = (0);
var G__126152 = (0);
seq__124435_126132 = G__126149;
chunk__124436_126133 = G__126150;
count__124437_126134 = G__126151;
i__124438_126135 = G__126152;
continue;
}
} else {
}
}
break;
}

var G__126153 = cljs.core.next(seq__124434_126125__$1);
var G__126154 = null;
var G__126155 = (0);
var G__126156 = (0);
seq__124434_126094 = G__126153;
chunk__124439_126095 = G__126154;
count__124440_126096 = G__126155;
i__124441_126097 = G__126156;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__124446){
var vec__124447 = p__124446;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__124447,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__124447,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,input,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),i);
}),cljs.core.PersistentArrayMap.EMPTY,inputs);
});
com.wsscode.pathom.connect.parallel_batch = (function com$wsscode$pathom$connect$parallel_batch(p__124454){
var map__124455 = p__124454;
var map__124455__$1 = (((((!((map__124455 == null))))?(((((map__124455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__124455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__124455):map__124455);
var env = map__124455__$1;
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__124455__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__124455__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__124455__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache){
return (function (state_124822){
var state_val_124823 = (state_124822[(1)]);
if((state_val_124823 === (65))){
var inst_124707 = (state_124822[(2)]);
var inst_124708 = com.wsscode.common.async_cljs.throw_err(inst_124707);
var state_124822__$1 = state_124822;
var statearr_124824_126157 = state_124822__$1;
(statearr_124824_126157[(2)] = inst_124708);


cljs.core.async.impl.ioc_helpers.process_exception(state_124822__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (70))){
var inst_124737 = (state_124822[(7)]);
var inst_124736 = (state_124822[(8)]);
var inst_124739 = (inst_124737 < inst_124736);
var inst_124740 = inst_124739;
var state_124822__$1 = state_124822;
if(cljs.core.truth_(inst_124740)){
var statearr_124825_126158 = state_124822__$1;
(statearr_124825_126158[(1)] = (72));

} else {
var statearr_124826_126159 = state_124822__$1;
(statearr_124826_126159[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (62))){
var inst_124699 = (state_124822[(9)]);
var inst_124685 = (state_124822[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_124822,(61),new cljs.core.Keyword(null,"default","default",-1987822328),null,(60));
var inst_124699__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_124685);
var inst_124700 = com.wsscode.common.async_cljs.chan_QMARK_(inst_124699__$1);
var state_124822__$1 = (function (){var statearr_124827 = state_124822;
(statearr_124827[(9)] = inst_124699__$1);

return statearr_124827;
})();
if(inst_124700){
var statearr_124828_126160 = state_124822__$1;
(statearr_124828_126160[(1)] = (63));

} else {
var statearr_124829_126161 = state_124822__$1;
(statearr_124829_126161[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (74))){
var inst_124806 = (state_124822[(2)]);
var state_124822__$1 = state_124822;
var statearr_124830_126162 = state_124822__$1;
(statearr_124830_126162[(2)] = inst_124806);

(statearr_124830_126162[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (7))){
var inst_124478 = (state_124822[(2)]);
var state_124822__$1 = state_124822;
if(cljs.core.truth_(inst_124478)){
var statearr_124831_126163 = state_124822__$1;
(statearr_124831_126163[(1)] = (11));

} else {
var statearr_124832_126164 = state_124822__$1;
(statearr_124832_126164[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (59))){
var inst_124487 = (state_124822[(11)]);
var inst_124493 = (state_124822[(12)]);
var inst_124485 = (state_124822[(13)]);
var inst_124489 = (state_124822[(14)]);
var inst_124685 = (state_124822[(10)]);
var inst_124677 = (state_124822[(15)]);
var inst_124671 = (state_124822[(16)]);
var inst_124483 = (state_124822[(17)]);
var inst_124490 = (state_124822[(18)]);
var inst_124684 = (state_124822[(19)]);
var inst_124484 = (state_124822[(20)]);
var inst_124681 = (state_124822[(2)]);
var inst_124682 = com.wsscode.common.async_cljs.throw_err(inst_124681);
var inst_124683 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_124671,inst_124677,inst_124682);
var inst_124684__$1 = com.wsscode.pathom.connect.group_input_indexes(inst_124683);
var inst_124685__$1 = cljs.core.keys(inst_124684__$1);
var inst_124686 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_124687 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_124685__$1];
var inst_124688 = cljs.core.PersistentHashMap.fromArrays(inst_124686,inst_124687);
var inst_124689 = com.wsscode.pathom.trace.trace(env,inst_124688);
var inst_124690 = cljs.core.PersistentVector.EMPTY;
var inst_124691 = (function (){var input = inst_124485;
var items = inst_124685__$1;
var items_map = inst_124684__$1;
var key = inst_124489;
var _ = inst_124689;
var params = inst_124490;
var e = inst_124487;
var resolver_sym = inst_124484;
var map__124461 = inst_124483;
var trace_data = inst_124493;
return ((function (input,items,items_map,key,_,params,e,resolver_sym,map__124461,trace_data,inst_124487,inst_124493,inst_124485,inst_124489,inst_124685,inst_124677,inst_124671,inst_124483,inst_124490,inst_124684,inst_124484,inst_124681,inst_124682,inst_124683,inst_124684__$1,inst_124685__$1,inst_124686,inst_124687,inst_124688,inst_124689,inst_124690,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache){
return (function (resolver_input){
var ch = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.core.cache_hit(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,resolver_input,params], null),ch);

return ch;
});
;})(input,items,items_map,key,_,params,e,resolver_sym,map__124461,trace_data,inst_124487,inst_124493,inst_124485,inst_124489,inst_124685,inst_124677,inst_124671,inst_124483,inst_124490,inst_124684,inst_124484,inst_124681,inst_124682,inst_124683,inst_124684__$1,inst_124685__$1,inst_124686,inst_124687,inst_124688,inst_124689,inst_124690,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_124692 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_124691);
var inst_124693 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_124690,inst_124692,inst_124685__$1);
var state_124822__$1 = (function (){var statearr_124833 = state_124822;
(statearr_124833[(21)] = inst_124693);

(statearr_124833[(10)] = inst_124685__$1);

(statearr_124833[(19)] = inst_124684__$1);

return statearr_124833;
})();
var statearr_124834_126165 = state_124822__$1;
(statearr_124834_126165[(2)] = null);

(statearr_124834_126165[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (86))){
var inst_124801 = (state_124822[(2)]);
var state_124822__$1 = state_124822;
var statearr_124835_126166 = state_124822__$1;
(statearr_124835_126166[(2)] = inst_124801);

(statearr_124835_126166[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (20))){
var inst_124508 = (state_124822[(2)]);
var state_124822__$1 = state_124822;
var statearr_124836_126167 = state_124822__$1;
(statearr_124836_126167[(2)] = inst_124508);

(statearr_124836_126167[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (72))){
var inst_124737 = (state_124822[(7)]);
var inst_124752 = (state_124822[(22)]);
var inst_124735 = (state_124822[(23)]);
var inst_124748 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_124735,inst_124737);
var inst_124749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124748,(0),null);
var inst_124750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124748,(1),null);
var inst_124751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124750,(0),null);
var inst_124752__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124750,(1),null);
var state_124822__$1 = (function (){var statearr_124837 = state_124822;
(statearr_124837[(24)] = inst_124751);

(statearr_124837[(25)] = inst_124749);

(statearr_124837[(22)] = inst_124752__$1);

return statearr_124837;
})();
if(cljs.core.truth_(inst_124752__$1)){
var statearr_124838_126168 = state_124822__$1;
(statearr_124838_126168[(1)] = (75));

} else {
var statearr_124839_126169 = state_124822__$1;
(statearr_124839_126169[(1)] = (76));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (58))){
var inst_124669 = (state_124822[(2)]);
var state_124822__$1 = state_124822;
var statearr_124840_126170 = state_124822__$1;
(statearr_124840_126170[(2)] = inst_124669);

(statearr_124840_126170[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (60))){
var inst_124693 = (state_124822[(21)]);
var inst_124685 = (state_124822[(10)]);
var inst_124710 = (state_124822[(26)]);
var inst_124710__$1 = (state_124822[(2)]);
var inst_124711 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_124712 = cljs.core.count(inst_124710__$1);
var inst_124713 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_124712];
var inst_124714 = cljs.core.PersistentHashMap.fromArrays(inst_124711,inst_124713);
var inst_124715 = com.wsscode.pathom.trace.trace(env,inst_124714);
var inst_124716 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_124693,inst_124710__$1);
var inst_124717 = cljs.core.zipmap(inst_124685,inst_124716);
var inst_124718 = cljs.core.first(inst_124710__$1);
var inst_124719 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_124718);
var inst_124720 = cljs.core.count(path);
var inst_124721 = (inst_124720 >= (2));
var inst_124722 = ((inst_124719) && (inst_124721));
var state_124822__$1 = (function (){var statearr_124841 = state_124822;
(statearr_124841[(27)] = inst_124717);

(statearr_124841[(28)] = inst_124715);

(statearr_124841[(26)] = inst_124710__$1);

return statearr_124841;
})();
if(cljs.core.truth_(inst_124722)){
var statearr_124842_126171 = state_124822__$1;
(statearr_124842_126171[(1)] = (67));

} else {
var statearr_124843_126172 = state_124822__$1;
(statearr_124843_126172[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (27))){
var inst_124546 = (state_124822[(2)]);
var inst_124547 = com.wsscode.common.async_cljs.throw_err(inst_124546);
var state_124822__$1 = state_124822;
var statearr_124844_126173 = state_124822__$1;
(statearr_124844_126173[(2)] = inst_124547);


cljs.core.async.impl.ioc_helpers.process_exception(state_124822__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (1))){
var state_124822__$1 = state_124822;
var statearr_124845_126174 = state_124822__$1;
(statearr_124845_126174[(2)] = null);

(statearr_124845_126174[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (69))){
var inst_124717 = (state_124822[(27)]);
var inst_124728 = (state_124822[(2)]);
var inst_124733 = cljs.core.seq(inst_124717);
var inst_124734 = inst_124733;
var inst_124735 = null;
var inst_124736 = (0);
var inst_124737 = (0);
var state_124822__$1 = (function (){var statearr_124846 = state_124822;
(statearr_124846[(29)] = inst_124734);

(statearr_124846[(30)] = inst_124728);

(statearr_124846[(7)] = inst_124737);

(statearr_124846[(8)] = inst_124736);

(statearr_124846[(23)] = inst_124735);

return statearr_124846;
})();
var statearr_124847_126175 = state_124822__$1;
(statearr_124847_126175[(2)] = null);

(statearr_124847_126175[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (24))){
var inst_124538 = (state_124822[(31)]);
var inst_124524 = (state_124822[(32)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_124822,(23),new cljs.core.Keyword(null,"default","default",-1987822328),null,(22));
var inst_124538__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_124524);
var inst_124539 = com.wsscode.common.async_cljs.chan_QMARK_(inst_124538__$1);
var state_124822__$1 = (function (){var statearr_124848 = state_124822;
(statearr_124848[(31)] = inst_124538__$1);

return statearr_124848;
})();
if(inst_124539){
var statearr_124849_126176 = state_124822__$1;
(statearr_124849_126176[(1)] = (25));

} else {
var statearr_124850_126177 = state_124822__$1;
(statearr_124850_126177[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (55))){
var inst_124487 = (state_124822[(11)]);
var inst_124490 = (state_124822[(18)]);
var inst_124484 = (state_124822[(20)]);
var inst_124664 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124665 = [inst_124484,inst_124487,inst_124490];
var inst_124666 = (new cljs.core.PersistentVector(null,3,(5),inst_124664,inst_124665,null));
var inst_124667 = com.wsscode.pathom.core.cache_read(env,inst_124666);
var state_124822__$1 = state_124822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124822__$1,(58),inst_124667);
} else {
if((state_val_124823 === (85))){
var inst_124786 = (state_124822[(33)]);
var inst_124767 = (state_124822[(34)]);
var inst_124782 = cljs.core.first(inst_124767);
var inst_124783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124782,(0),null);
var inst_124784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124782,(1),null);
var inst_124785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124784,(0),null);
var inst_124786__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124784,(1),null);
var state_124822__$1 = (function (){var statearr_124854 = state_124822;
(statearr_124854[(35)] = inst_124785);

(statearr_124854[(33)] = inst_124786__$1);

(statearr_124854[(36)] = inst_124783);

return statearr_124854;
})();
if(cljs.core.truth_(inst_124786__$1)){
var statearr_124855_126178 = state_124822__$1;
(statearr_124855_126178[(1)] = (87));

} else {
var statearr_124856_126179 = state_124822__$1;
(statearr_124856_126179[(1)] = (88));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (39))){
var inst_124576 = (state_124822[(37)]);
var inst_124575 = (state_124822[(38)]);
var inst_124574 = (state_124822[(39)]);
var inst_124573 = (state_124822[(40)]);
var inst_124602 = (state_124822[(2)]);
var inst_124603 = (inst_124576 + (1));
var tmp124851 = inst_124575;
var tmp124852 = inst_124574;
var tmp124853 = inst_124573;
var inst_124573__$1 = tmp124853;
var inst_124574__$1 = tmp124852;
var inst_124575__$1 = tmp124851;
var inst_124576__$1 = inst_124603;
var state_124822__$1 = (function (){var statearr_124857 = state_124822;
(statearr_124857[(37)] = inst_124576__$1);

(statearr_124857[(38)] = inst_124575__$1);

(statearr_124857[(41)] = inst_124602);

(statearr_124857[(39)] = inst_124574__$1);

(statearr_124857[(40)] = inst_124573__$1);

return statearr_124857;
})();
var statearr_124858_126180 = state_124822__$1;
(statearr_124858_126180[(2)] = null);

(statearr_124858_126180[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (88))){
var inst_124785 = (state_124822[(35)]);
var inst_124795 = cljs.core.async.close_BANG_(inst_124785);
var state_124822__$1 = state_124822;
var statearr_124859_126181 = state_124822__$1;
(statearr_124859_126181[(2)] = inst_124795);

(statearr_124859_126181[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (46))){
var inst_124606 = (state_124822[(42)]);
var inst_124610 = cljs.core.chunk_first(inst_124606);
var inst_124611 = cljs.core.chunk_rest(inst_124606);
var inst_124612 = cljs.core.count(inst_124610);
var inst_124573 = inst_124611;
var inst_124574 = inst_124610;
var inst_124575 = inst_124612;
var inst_124576 = (0);
var state_124822__$1 = (function (){var statearr_124863 = state_124822;
(statearr_124863[(37)] = inst_124576);

(statearr_124863[(38)] = inst_124575);

(statearr_124863[(39)] = inst_124574);

(statearr_124863[(40)] = inst_124573);

return statearr_124863;
})();
var statearr_124864_126182 = state_124822__$1;
(statearr_124864_126182[(2)] = null);

(statearr_124864_126182[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (4))){
var inst_124462 = (state_124822[(43)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_124822,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_124462__$1 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_124464 = (inst_124462__$1 == null);
var inst_124465 = cljs.core.not(inst_124464);
var state_124822__$1 = (function (){var statearr_124865 = state_124822;
(statearr_124865[(43)] = inst_124462__$1);

return statearr_124865;
})();
if(inst_124465){
var statearr_124866_126183 = state_124822__$1;
(statearr_124866_126183[(1)] = (5));

} else {
var statearr_124867_126184 = state_124822__$1;
(statearr_124867_126184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (77))){
var inst_124734 = (state_124822[(29)]);
var inst_124737 = (state_124822[(7)]);
var inst_124736 = (state_124822[(8)]);
var inst_124735 = (state_124822[(23)]);
var inst_124763 = (state_124822[(2)]);
var inst_124764 = (inst_124737 + (1));
var tmp124860 = inst_124734;
var tmp124861 = inst_124736;
var tmp124862 = inst_124735;
var inst_124734__$1 = tmp124860;
var inst_124735__$1 = tmp124862;
var inst_124736__$1 = tmp124861;
var inst_124737__$1 = inst_124764;
var state_124822__$1 = (function (){var statearr_124868 = state_124822;
(statearr_124868[(29)] = inst_124734__$1);

(statearr_124868[(7)] = inst_124737__$1);

(statearr_124868[(8)] = inst_124736__$1);

(statearr_124868[(44)] = inst_124763);

(statearr_124868[(23)] = inst_124735__$1);

return statearr_124868;
})();
var statearr_124869_126185 = state_124822__$1;
(statearr_124869_126185[(2)] = null);

(statearr_124869_126185[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (54))){
var inst_124624 = (state_124822[(45)]);
var inst_124631 = (state_124822[(2)]);
var inst_124632 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_124624,inst_124631);
var state_124822__$1 = state_124822;
var statearr_124870_126186 = state_124822__$1;
(statearr_124870_126186[(2)] = inst_124632);

(statearr_124870_126186[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (92))){
var inst_124785 = (state_124822[(35)]);
var inst_124792 = (state_124822[(2)]);
var inst_124793 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_124785,inst_124792);
var state_124822__$1 = state_124822;
var statearr_124871_126187 = state_124822__$1;
(statearr_124871_126187[(2)] = inst_124793);

(statearr_124871_126187[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (15))){
var inst_124487 = (state_124822[(11)]);
var inst_124490 = (state_124822[(18)]);
var inst_124484 = (state_124822[(20)]);
var inst_124659 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124660 = [inst_124484,inst_124487,inst_124490];
var inst_124661 = (new cljs.core.PersistentVector(null,3,(5),inst_124659,inst_124660,null));
var inst_124662 = com.wsscode.pathom.core.cache_contains_QMARK_(env,inst_124661);
var state_124822__$1 = state_124822;
if(inst_124662){
var statearr_124872_126188 = state_124822__$1;
(statearr_124872_126188[(1)] = (55));

} else {
var statearr_124873_126189 = state_124822__$1;
(statearr_124873_126189[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (48))){
var inst_124640 = (state_124822[(2)]);
var state_124822__$1 = state_124822;
var statearr_124874_126190 = state_124822__$1;
(statearr_124874_126190[(2)] = inst_124640);

(statearr_124874_126190[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (50))){
var inst_124624 = (state_124822[(45)]);
var inst_124634 = cljs.core.async.close_BANG_(inst_124624);
var state_124822__$1 = state_124822;
var statearr_124875_126191 = state_124822__$1;
(statearr_124875_126191[(2)] = inst_124634);

(statearr_124875_126191[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (75))){
var inst_124752 = (state_124822[(22)]);
var state_124822__$1 = state_124822;
if(cljs.core.truth_(inst_124752)){
var statearr_124876_126192 = state_124822__$1;
(statearr_124876_126192[(1)] = (78));

} else {
var statearr_124877_126193 = state_124822__$1;
(statearr_124877_126193[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (21))){
var inst_124523 = (state_124822[(46)]);
var inst_124510 = (state_124822[(47)]);
var inst_124487 = (state_124822[(11)]);
var inst_124493 = (state_124822[(12)]);
var inst_124516 = (state_124822[(48)]);
var inst_124485 = (state_124822[(13)]);
var inst_124497 = (state_124822[(49)]);
var inst_124489 = (state_124822[(14)]);
var inst_124483 = (state_124822[(17)]);
var inst_124490 = (state_124822[(18)]);
var inst_124484 = (state_124822[(20)]);
var inst_124524 = (state_124822[(32)]);
var inst_124520 = (state_124822[(2)]);
var inst_124521 = com.wsscode.common.async_cljs.throw_err(inst_124520);
var inst_124522 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_124510,inst_124516,inst_124521);
var inst_124523__$1 = com.wsscode.pathom.connect.group_input_indexes(inst_124522);
var inst_124524__$1 = cljs.core.keys(inst_124523__$1);
var inst_124525 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_124526 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_124524__$1];
var inst_124527 = cljs.core.PersistentHashMap.fromArrays(inst_124525,inst_124526);
var inst_124528 = com.wsscode.pathom.trace.trace(env,inst_124527);
var inst_124529 = cljs.core.PersistentVector.EMPTY;
var inst_124530 = (function (){var input = inst_124485;
var items = inst_124524__$1;
var trace_id__21490__auto__ = inst_124497;
var items_map = inst_124523__$1;
var key = inst_124489;
var _ = inst_124528;
var params = inst_124490;
var e = inst_124487;
var resolver_sym = inst_124484;
var map__124461 = inst_124483;
var trace_data = inst_124493;
return ((function (input,items,trace_id__21490__auto__,items_map,key,_,params,e,resolver_sym,map__124461,trace_data,inst_124523,inst_124510,inst_124487,inst_124493,inst_124516,inst_124485,inst_124497,inst_124489,inst_124483,inst_124490,inst_124484,inst_124524,inst_124520,inst_124521,inst_124522,inst_124523__$1,inst_124524__$1,inst_124525,inst_124526,inst_124527,inst_124528,inst_124529,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache){
return (function (resolver_input){
var ch = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.core.cache_hit(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,resolver_input,params], null),ch);

return ch;
});
;})(input,items,trace_id__21490__auto__,items_map,key,_,params,e,resolver_sym,map__124461,trace_data,inst_124523,inst_124510,inst_124487,inst_124493,inst_124516,inst_124485,inst_124497,inst_124489,inst_124483,inst_124490,inst_124484,inst_124524,inst_124520,inst_124521,inst_124522,inst_124523__$1,inst_124524__$1,inst_124525,inst_124526,inst_124527,inst_124528,inst_124529,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_124531 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_124530);
var inst_124532 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_124529,inst_124531,inst_124524__$1);
var state_124822__$1 = (function (){var statearr_124878 = state_124822;
(statearr_124878[(46)] = inst_124523__$1);

(statearr_124878[(50)] = inst_124532);

(statearr_124878[(32)] = inst_124524__$1);

return statearr_124878;
})();
var statearr_124879_126194 = state_124822__$1;
(statearr_124879_126194[(2)] = null);

(statearr_124879_126194[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (31))){
var inst_124556 = (state_124822[(51)]);
var inst_124567 = (state_124822[(2)]);
var inst_124572 = cljs.core.seq(inst_124556);
var inst_124573 = inst_124572;
var inst_124574 = null;
var inst_124575 = (0);
var inst_124576 = (0);
var state_124822__$1 = (function (){var statearr_124880 = state_124822;
(statearr_124880[(37)] = inst_124576);

(statearr_124880[(52)] = inst_124567);

(statearr_124880[(38)] = inst_124575);

(statearr_124880[(39)] = inst_124574);

(statearr_124880[(40)] = inst_124573);

return statearr_124880;
})();
var statearr_124881_126195 = state_124822__$1;
(statearr_124881_126195[(2)] = null);

(statearr_124881_126195[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (32))){
var inst_124576 = (state_124822[(37)]);
var inst_124575 = (state_124822[(38)]);
var inst_124578 = (inst_124576 < inst_124575);
var inst_124579 = inst_124578;
var state_124822__$1 = state_124822;
if(cljs.core.truth_(inst_124579)){
var statearr_124882_126196 = state_124822__$1;
(statearr_124882_126196[(1)] = (34));

} else {
var statearr_124883_126197 = state_124822__$1;
(statearr_124883_126197[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (40))){
var inst_124591 = (state_124822[(53)]);
var state_124822__$1 = state_124822;
var statearr_124884_126198 = state_124822__$1;
(statearr_124884_126198[(2)] = inst_124591);

(statearr_124884_126198[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (91))){
var inst_124790 = cljs.core.PersistentHashMap.EMPTY;
var state_124822__$1 = state_124822;
var statearr_124885_126199 = state_124822__$1;
(statearr_124885_126199[(2)] = inst_124790);

(statearr_124885_126199[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (56))){
var inst_124487 = (state_124822[(11)]);
var inst_124493 = (state_124822[(12)]);
var inst_124485 = (state_124822[(13)]);
var inst_124489 = (state_124822[(14)]);
var inst_124483 = (state_124822[(17)]);
var inst_124490 = (state_124822[(18)]);
var inst_124484 = (state_124822[(20)]);
var inst_124671 = cljs.core.PersistentVector.EMPTY;
var inst_124672 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector);
var inst_124673 = (function (){var map__124461 = inst_124483;
var resolver_sym = inst_124484;
var input = inst_124485;
var e = inst_124487;
var key = inst_124489;
var params = inst_124490;
var trace_data = inst_124493;
return ((function (map__124461,resolver_sym,input,e,key,params,trace_data,inst_124487,inst_124493,inst_124485,inst_124489,inst_124483,inst_124490,inst_124484,inst_124671,inst_124672,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__124451_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(cljs.core.second(p1__124451_SHARP_),input);
});
;})(map__124461,resolver_sym,input,e,key,params,trace_data,inst_124487,inst_124493,inst_124485,inst_124489,inst_124483,inst_124490,inst_124484,inst_124671,inst_124672,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_124674 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_124673);
var inst_124675 = (function (){var map__124461 = inst_124483;
var resolver_sym = inst_124484;
var input = inst_124485;
var e = inst_124487;
var key = inst_124489;
var params = inst_124490;
var trace_data = inst_124493;
return ((function (map__124461,resolver_sym,input,e,key,params,trace_data,inst_124487,inst_124493,inst_124485,inst_124489,inst_124483,inst_124490,inst_124484,inst_124671,inst_124672,inst_124673,inst_124674,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__124452_SHARP_){
return com.wsscode.pathom.core.cache_contains_QMARK_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,cljs.core.second(p1__124452_SHARP_),params], null));
});
;})(map__124461,resolver_sym,input,e,key,params,trace_data,inst_124487,inst_124493,inst_124485,inst_124489,inst_124483,inst_124490,inst_124484,inst_124671,inst_124672,inst_124673,inst_124674,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_124676 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_124675);
var inst_124677 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(inst_124672,inst_124674,inst_124676);
var inst_124678 = (function (){var map__124461 = inst_124483;
var resolver_sym = inst_124484;
var input = inst_124485;
var e = inst_124487;
var key = inst_124489;
var params = inst_124490;
var trace_data = inst_124493;
return ((function (map__124461,resolver_sym,input,e,key,params,trace_data,inst_124487,inst_124493,inst_124485,inst_124489,inst_124483,inst_124490,inst_124484,inst_124671,inst_124672,inst_124673,inst_124674,inst_124675,inst_124676,inst_124677,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__124450_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__124450_SHARP_,input);
});
;})(map__124461,resolver_sym,input,e,key,params,trace_data,inst_124487,inst_124493,inst_124485,inst_124489,inst_124483,inst_124490,inst_124484,inst_124671,inst_124672,inst_124673,inst_124674,inst_124675,inst_124676,inst_124677,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_124679 = com.wsscode.pathom.connect.map_async_serial(inst_124678,processing_sequence);
var state_124822__$1 = (function (){var statearr_124886 = state_124822;
(statearr_124886[(15)] = inst_124677);

(statearr_124886[(16)] = inst_124671);

return statearr_124886;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124822__$1,(59),inst_124679);
} else {
if((state_val_124823 === (33))){
var inst_124487 = (state_124822[(11)]);
var inst_124556 = (state_124822[(51)]);
var inst_124647 = (state_124822[(2)]);
var inst_124648 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124649 = cljs.core.PersistentHashMap.EMPTY;
var inst_124650 = [null,inst_124649];
var inst_124651 = (new cljs.core.PersistentVector(null,2,(5),inst_124648,inst_124650,null));
var inst_124652 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_124556,inst_124487,inst_124651);
var inst_124653 = cljs.core.second(inst_124652);
var state_124822__$1 = (function (){var statearr_124887 = state_124822;
(statearr_124887[(54)] = inst_124647);

return statearr_124887;
})();
var statearr_124888_126200 = state_124822__$1;
(statearr_124888_126200[(2)] = inst_124653);

(statearr_124888_126200[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (13))){
var inst_124487 = (state_124822[(11)]);
var inst_124485 = (state_124822[(13)]);
var inst_124489 = (state_124822[(14)]);
var inst_124483 = (state_124822[(17)]);
var inst_124484 = (state_124822[(20)]);
var inst_124483__$1 = (state_124822[(2)]);
var inst_124484__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_124483__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var inst_124485__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_124483__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_124486 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var inst_124487__$1 = cljs.core.select_keys(inst_124486,inst_124485__$1);
var inst_124488 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_124489__$1 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_124488);
var inst_124490 = com.wsscode.pathom.core.params(env);
var inst_124491 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_124492 = [inst_124489__$1,inst_124484__$1,inst_124487__$1];
var inst_124493 = cljs.core.PersistentHashMap.fromArrays(inst_124491,inst_124492);
var inst_124494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_124822__$1 = (function (){var statearr_124889 = state_124822;
(statearr_124889[(11)] = inst_124487__$1);

(statearr_124889[(12)] = inst_124493);

(statearr_124889[(13)] = inst_124485__$1);

(statearr_124889[(14)] = inst_124489__$1);

(statearr_124889[(17)] = inst_124483__$1);

(statearr_124889[(18)] = inst_124490);

(statearr_124889[(20)] = inst_124484__$1);

return statearr_124889;
})();
if(cljs.core.truth_(inst_124494)){
var statearr_124890_126201 = state_124822__$1;
(statearr_124890_126201[(1)] = (14));

} else {
var statearr_124891_126202 = state_124822__$1;
(statearr_124891_126202[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (22))){
var inst_124532 = (state_124822[(50)]);
var inst_124549 = (state_124822[(55)]);
var inst_124524 = (state_124822[(32)]);
var inst_124549__$1 = (state_124822[(2)]);
var inst_124550 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_124551 = cljs.core.count(inst_124549__$1);
var inst_124552 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_124551];
var inst_124553 = cljs.core.PersistentHashMap.fromArrays(inst_124550,inst_124552);
var inst_124554 = com.wsscode.pathom.trace.trace(env,inst_124553);
var inst_124555 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_124532,inst_124549__$1);
var inst_124556 = cljs.core.zipmap(inst_124524,inst_124555);
var inst_124557 = cljs.core.first(inst_124549__$1);
var inst_124558 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_124557);
var inst_124559 = cljs.core.count(path);
var inst_124560 = (inst_124559 >= (2));
var inst_124561 = ((inst_124558) && (inst_124560));
var state_124822__$1 = (function (){var statearr_124892 = state_124822;
(statearr_124892[(55)] = inst_124549__$1);

(statearr_124892[(56)] = inst_124554);

(statearr_124892[(51)] = inst_124556);

return statearr_124892;
})();
if(cljs.core.truth_(inst_124561)){
var statearr_124893_126203 = state_124822__$1;
(statearr_124893_126203[(1)] = (29));

} else {
var statearr_124894_126204 = state_124822__$1;
(statearr_124894_126204[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (90))){
var inst_124786 = (state_124822[(33)]);
var state_124822__$1 = state_124822;
var statearr_124895_126205 = state_124822__$1;
(statearr_124895_126205[(2)] = inst_124786);

(statearr_124895_126205[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (36))){
var inst_124645 = (state_124822[(2)]);
var state_124822__$1 = state_124822;
var statearr_124896_126206 = state_124822__$1;
(statearr_124896_126206[(2)] = inst_124645);

(statearr_124896_126206[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (41))){
var inst_124595 = cljs.core.PersistentHashMap.EMPTY;
var state_124822__$1 = state_124822;
var statearr_124897_126207 = state_124822__$1;
(statearr_124897_126207[(2)] = inst_124595);

(statearr_124897_126207[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (89))){
var inst_124767 = (state_124822[(34)]);
var inst_124797 = (state_124822[(2)]);
var inst_124798 = cljs.core.next(inst_124767);
var inst_124734 = inst_124798;
var inst_124735 = null;
var inst_124736 = (0);
var inst_124737 = (0);
var state_124822__$1 = (function (){var statearr_124898 = state_124822;
(statearr_124898[(57)] = inst_124797);

(statearr_124898[(29)] = inst_124734);

(statearr_124898[(7)] = inst_124737);

(statearr_124898[(8)] = inst_124736);

(statearr_124898[(23)] = inst_124735);

return statearr_124898;
})();
var statearr_124899_126208 = state_124822__$1;
(statearr_124899_126208[(2)] = null);

(statearr_124899_126208[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (43))){
var inst_124606 = (state_124822[(42)]);
var inst_124608 = cljs.core.chunked_seq_QMARK_(inst_124606);
var state_124822__$1 = state_124822;
if(inst_124608){
var statearr_124900_126209 = state_124822__$1;
(statearr_124900_126209[(1)] = (46));

} else {
var statearr_124901_126210 = state_124822__$1;
(statearr_124901_126210[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (61))){
var inst_124694 = (state_124822[(2)]);
var inst_124695 = com.wsscode.pathom.connect.parallel_batch_error(env,inst_124694);
var state_124822__$1 = state_124822;
var statearr_124902_126211 = state_124822__$1;
(statearr_124902_126211[(2)] = inst_124695);


cljs.core.async.impl.ioc_helpers.process_exception(state_124822__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (29))){
var inst_124523 = (state_124822[(46)]);
var inst_124487 = (state_124822[(11)]);
var inst_124493 = (state_124822[(12)]);
var inst_124485 = (state_124822[(13)]);
var inst_124497 = (state_124822[(49)]);
var inst_124489 = (state_124822[(14)]);
var inst_124532 = (state_124822[(50)]);
var inst_124549 = (state_124822[(55)]);
var inst_124554 = (state_124822[(56)]);
var inst_124483 = (state_124822[(17)]);
var inst_124490 = (state_124822[(18)]);
var inst_124556 = (state_124822[(51)]);
var inst_124484 = (state_124822[(20)]);
var inst_124524 = (state_124822[(32)]);
var inst_124563 = (function (){var input = inst_124485;
var items = inst_124524;
var trace_id__21490__auto__ = inst_124497;
var items_map = inst_124523;
var linked_results = inst_124556;
var key = inst_124489;
var channels = inst_124532;
var _ = inst_124554;
var params = inst_124490;
var e = inst_124487;
var resolver_sym = inst_124484;
var map__124461 = inst_124483;
var trace_data = inst_124493;
var batch_result = inst_124549;
return ((function (input,items,trace_id__21490__auto__,items_map,linked_results,key,channels,_,params,e,resolver_sym,map__124461,trace_data,batch_result,inst_124523,inst_124487,inst_124493,inst_124485,inst_124497,inst_124489,inst_124532,inst_124549,inst_124554,inst_124483,inst_124490,inst_124556,inst_124484,inst_124524,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap(cache){
var path__$1 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),(cljs.core.count(path) - (2)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path__$1,input,items,trace_id__21490__auto__,items_map,linked_results,key,channels,_,params,e,resolver_sym,map__124461,trace_data,batch_result,inst_124523,inst_124487,inst_124493,inst_124485,inst_124497,inst_124489,inst_124532,inst_124549,inst_124554,inst_124483,inst_124490,inst_124556,inst_124484,inst_124524,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce(cache__$1,p__124903){
var vec__124904 = p__124903;
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__124904,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__124904,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__124904,item,result,path__$1,input,items,trace_id__21490__auto__,items_map,linked_results,key,channels,_,params,e,resolver_sym,map__124461,trace_data,batch_result,inst_124523,inst_124487,inst_124493,inst_124485,inst_124497,inst_124489,inst_124532,inst_124549,inst_124554,inst_124483,inst_124490,inst_124556,inst_124484,inst_124524,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce_$_entity_path_inner_reduce(cache__$2,index){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cache__$2,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,index),((function (vec__124904,item,result,path__$1,input,items,trace_id__21490__auto__,items_map,linked_results,key,channels,_,params,e,resolver_sym,map__124461,trace_data,batch_result,inst_124523,inst_124487,inst_124493,inst_124485,inst_124497,inst_124489,inst_124532,inst_124549,inst_124554,inst_124483,inst_124490,inst_124556,inst_124484,inst_124524,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__124453_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result,p1__124453_SHARP_], 0));
});})(vec__124904,item,result,path__$1,input,items,trace_id__21490__auto__,items_map,linked_results,key,channels,_,params,e,resolver_sym,map__124461,trace_data,batch_result,inst_124523,inst_124487,inst_124493,inst_124485,inst_124497,inst_124489,inst_124532,inst_124549,inst_124554,inst_124483,inst_124490,inst_124556,inst_124484,inst_124524,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache))
);
});})(vec__124904,item,result,path__$1,input,items,trace_id__21490__auto__,items_map,linked_results,key,channels,_,params,e,resolver_sym,map__124461,trace_data,batch_result,inst_124523,inst_124487,inst_124493,inst_124485,inst_124497,inst_124489,inst_124532,inst_124549,inst_124554,inst_124483,inst_124490,inst_124556,inst_124484,inst_124524,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache))
,cache__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_map,item));
});})(path__$1,input,items,trace_id__21490__auto__,items_map,linked_results,key,channels,_,params,e,resolver_sym,map__124461,trace_data,batch_result,inst_124523,inst_124487,inst_124493,inst_124485,inst_124497,inst_124489,inst_124532,inst_124549,inst_124554,inst_124483,inst_124490,inst_124556,inst_124484,inst_124524,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache))
,cache,cljs.core.zipmap(items,batch_result));
});
;})(input,items,trace_id__21490__auto__,items_map,linked_results,key,channels,_,params,e,resolver_sym,map__124461,trace_data,batch_result,inst_124523,inst_124487,inst_124493,inst_124485,inst_124497,inst_124489,inst_124532,inst_124549,inst_124554,inst_124483,inst_124490,inst_124556,inst_124484,inst_124524,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_124564 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(entity_path_cache,inst_124563);
var state_124822__$1 = state_124822;
var statearr_124907_126212 = state_124822__$1;
(statearr_124907_126212[(2)] = inst_124564);

(statearr_124907_126212[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (44))){
var state_124822__$1 = state_124822;
var statearr_124908_126213 = state_124822__$1;
(statearr_124908_126213[(2)] = null);

(statearr_124908_126213[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (6))){
var state_124822__$1 = state_124822;
var statearr_124909_126214 = state_124822__$1;
(statearr_124909_126214[(2)] = false);

(statearr_124909_126214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (28))){
var inst_124542 = (state_124822[(2)]);
var inst_124543 = com.wsscode.common.async_cljs.throw_err(inst_124542);
var state_124822__$1 = state_124822;
var statearr_124910_126215 = state_124822__$1;
(statearr_124910_126215[(2)] = inst_124543);

(statearr_124910_126215[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (64))){
var inst_124699 = (state_124822[(9)]);
var state_124822__$1 = state_124822;
var statearr_124911_126216 = state_124822__$1;
(statearr_124911_126216[(2)] = inst_124699);

(statearr_124911_126216[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (51))){
var inst_124606 = (state_124822[(42)]);
var inst_124636 = (state_124822[(2)]);
var inst_124637 = cljs.core.next(inst_124606);
var inst_124573 = inst_124637;
var inst_124574 = null;
var inst_124575 = (0);
var inst_124576 = (0);
var state_124822__$1 = (function (){var statearr_124912 = state_124822;
(statearr_124912[(37)] = inst_124576);

(statearr_124912[(58)] = inst_124636);

(statearr_124912[(38)] = inst_124575);

(statearr_124912[(39)] = inst_124574);

(statearr_124912[(40)] = inst_124573);

return statearr_124912;
})();
var statearr_124913_126217 = state_124822__$1;
(statearr_124913_126217[(2)] = null);

(statearr_124913_126217[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (25))){
var inst_124538 = (state_124822[(31)]);
var state_124822__$1 = state_124822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124822__$1,(28),inst_124538);
} else {
if((state_val_124823 === (34))){
var inst_124576 = (state_124822[(37)]);
var inst_124591 = (state_124822[(53)]);
var inst_124574 = (state_124822[(39)]);
var inst_124587 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_124574,inst_124576);
var inst_124588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124587,(0),null);
var inst_124589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124587,(1),null);
var inst_124590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124589,(0),null);
var inst_124591__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124589,(1),null);
var state_124822__$1 = (function (){var statearr_124914 = state_124822;
(statearr_124914[(53)] = inst_124591__$1);

(statearr_124914[(59)] = inst_124590);

(statearr_124914[(60)] = inst_124588);

return statearr_124914;
})();
if(cljs.core.truth_(inst_124591__$1)){
var statearr_124915_126218 = state_124822__$1;
(statearr_124915_126218[(1)] = (37));

} else {
var statearr_124916_126219 = state_124822__$1;
(statearr_124916_126219[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (17))){
var inst_124487 = (state_124822[(11)]);
var inst_124490 = (state_124822[(18)]);
var inst_124484 = (state_124822[(20)]);
var inst_124503 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124504 = [inst_124484,inst_124487,inst_124490];
var inst_124505 = (new cljs.core.PersistentVector(null,3,(5),inst_124503,inst_124504,null));
var inst_124506 = com.wsscode.pathom.core.cache_read(env,inst_124505);
var state_124822__$1 = state_124822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124822__$1,(20),inst_124506);
} else {
if((state_val_124823 === (3))){
var inst_124457 = (state_124822[(2)]);
var state_124822__$1 = state_124822;
var statearr_124917_126220 = state_124822__$1;
(statearr_124917_126220[(2)] = inst_124457);


cljs.core.async.impl.ioc_helpers.process_exception(state_124822__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (12))){
var inst_124462 = (state_124822[(43)]);
var state_124822__$1 = state_124822;
var statearr_124918_126221 = state_124822__$1;
(statearr_124918_126221[(2)] = inst_124462);

(statearr_124918_126221[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (2))){
var inst_124820 = (state_124822[(2)]);
var state_124822__$1 = state_124822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_124822__$1,inst_124820);
} else {
if((state_val_124823 === (66))){
var inst_124703 = (state_124822[(2)]);
var inst_124704 = com.wsscode.common.async_cljs.throw_err(inst_124703);
var state_124822__$1 = state_124822;
var statearr_124919_126222 = state_124822__$1;
(statearr_124919_126222[(2)] = inst_124704);

(statearr_124919_126222[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (23))){
var inst_124533 = (state_124822[(2)]);
var inst_124534 = com.wsscode.pathom.connect.parallel_batch_error(env,inst_124533);
var state_124822__$1 = state_124822;
var statearr_124920_126223 = state_124822__$1;
(statearr_124920_126223[(2)] = inst_124534);


cljs.core.async.impl.ioc_helpers.process_exception(state_124822__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (47))){
var inst_124625 = (state_124822[(61)]);
var inst_124606 = (state_124822[(42)]);
var inst_124621 = cljs.core.first(inst_124606);
var inst_124622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124621,(0),null);
var inst_124623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124621,(1),null);
var inst_124624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124623,(0),null);
var inst_124625__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_124623,(1),null);
var state_124822__$1 = (function (){var statearr_124921 = state_124822;
(statearr_124921[(61)] = inst_124625__$1);

(statearr_124921[(45)] = inst_124624);

(statearr_124921[(62)] = inst_124622);

return statearr_124921;
})();
if(cljs.core.truth_(inst_124625__$1)){
var statearr_124922_126224 = state_124822__$1;
(statearr_124922_126224[(1)] = (49));

} else {
var statearr_124923_126225 = state_124822__$1;
(statearr_124923_126225[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (35))){
var inst_124606 = (state_124822[(42)]);
var inst_124573 = (state_124822[(40)]);
var inst_124606__$1 = cljs.core.seq(inst_124573);
var state_124822__$1 = (function (){var statearr_124924 = state_124822;
(statearr_124924[(42)] = inst_124606__$1);

return statearr_124924;
})();
if(inst_124606__$1){
var statearr_124925_126226 = state_124822__$1;
(statearr_124925_126226[(1)] = (43));

} else {
var statearr_124926_126227 = state_124822__$1;
(statearr_124926_126227[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (82))){
var state_124822__$1 = state_124822;
var statearr_124927_126228 = state_124822__$1;
(statearr_124927_126228[(2)] = null);

(statearr_124927_126228[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (76))){
var inst_124751 = (state_124822[(24)]);
var inst_124761 = cljs.core.async.close_BANG_(inst_124751);
var state_124822__$1 = state_124822;
var statearr_124928_126229 = state_124822__$1;
(statearr_124928_126229[(2)] = inst_124761);

(statearr_124928_126229[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (19))){
var inst_124493 = (state_124822[(12)]);
var inst_124497 = (state_124822[(49)]);
var inst_124655 = (state_124822[(2)]);
var inst_124656 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_124493,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_124657 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_124497,inst_124656);
var state_124822__$1 = (function (){var statearr_124929 = state_124822;
(statearr_124929[(63)] = inst_124657);

return statearr_124929;
})();
var statearr_124930_126230 = state_124822__$1;
(statearr_124930_126230[(2)] = inst_124655);

(statearr_124930_126230[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (57))){
var inst_124816 = (state_124822[(2)]);
var state_124822__$1 = state_124822;
var statearr_124931_126231 = state_124822__$1;
(statearr_124931_126231[(2)] = inst_124816);

(statearr_124931_126231[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (68))){
var state_124822__$1 = state_124822;
var statearr_124932_126232 = state_124822__$1;
(statearr_124932_126232[(2)] = null);

(statearr_124932_126232[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (11))){
var inst_124462 = (state_124822[(43)]);
var inst_124480 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_124462);
var state_124822__$1 = state_124822;
var statearr_124933_126233 = state_124822__$1;
(statearr_124933_126233[(2)] = inst_124480);

(statearr_124933_126233[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (9))){
var state_124822__$1 = state_124822;
var statearr_124934_126234 = state_124822__$1;
(statearr_124934_126234[(2)] = false);

(statearr_124934_126234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (5))){
var inst_124462 = (state_124822[(43)]);
var inst_124467 = inst_124462.cljs$lang$protocol_mask$partition0$;
var inst_124468 = (inst_124467 & (64));
var inst_124469 = inst_124462.cljs$core$ISeq$;
var inst_124470 = (cljs.core.PROTOCOL_SENTINEL === inst_124469);
var inst_124471 = ((inst_124468) || (inst_124470));
var state_124822__$1 = state_124822;
if(cljs.core.truth_(inst_124471)){
var statearr_124935_126235 = state_124822__$1;
(statearr_124935_126235[(1)] = (8));

} else {
var statearr_124936_126236 = state_124822__$1;
(statearr_124936_126236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (83))){
var inst_124804 = (state_124822[(2)]);
var state_124822__$1 = state_124822;
var statearr_124937_126237 = state_124822__$1;
(statearr_124937_126237[(2)] = inst_124804);

(statearr_124937_126237[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (14))){
var inst_124487 = (state_124822[(11)]);
var inst_124493 = (state_124822[(12)]);
var inst_124490 = (state_124822[(18)]);
var inst_124484 = (state_124822[(20)]);
var inst_124496 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_124493,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_124497 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_124496);
var inst_124498 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124499 = [inst_124484,inst_124487,inst_124490];
var inst_124500 = (new cljs.core.PersistentVector(null,3,(5),inst_124498,inst_124499,null));
var inst_124501 = com.wsscode.pathom.core.cache_contains_QMARK_(env,inst_124500);
var state_124822__$1 = (function (){var statearr_124938 = state_124822;
(statearr_124938[(49)] = inst_124497);

return statearr_124938;
})();
if(inst_124501){
var statearr_124939_126238 = state_124822__$1;
(statearr_124939_126238[(1)] = (17));

} else {
var statearr_124940_126239 = state_124822__$1;
(statearr_124940_126239[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (45))){
var inst_124643 = (state_124822[(2)]);
var state_124822__$1 = state_124822;
var statearr_124941_126240 = state_124822__$1;
(statearr_124941_126240[(2)] = inst_124643);

(statearr_124941_126240[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (53))){
var inst_124629 = cljs.core.PersistentHashMap.EMPTY;
var state_124822__$1 = state_124822;
var statearr_124942_126241 = state_124822__$1;
(statearr_124942_126241[(2)] = inst_124629);

(statearr_124942_126241[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (78))){
var inst_124752 = (state_124822[(22)]);
var state_124822__$1 = state_124822;
var statearr_124943_126242 = state_124822__$1;
(statearr_124943_126242[(2)] = inst_124752);

(statearr_124943_126242[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (26))){
var inst_124538 = (state_124822[(31)]);
var state_124822__$1 = state_124822;
var statearr_124944_126243 = state_124822__$1;
(statearr_124944_126243[(2)] = inst_124538);

(statearr_124944_126243[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (16))){
var inst_124818 = (state_124822[(2)]);
var state_124822__$1 = state_124822;
var statearr_124945_126244 = state_124822__$1;
(statearr_124945_126244[(2)] = inst_124818);


cljs.core.async.impl.ioc_helpers.process_exception(state_124822__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (81))){
var inst_124767 = (state_124822[(34)]);
var inst_124769 = cljs.core.chunked_seq_QMARK_(inst_124767);
var state_124822__$1 = state_124822;
if(inst_124769){
var statearr_124946_126245 = state_124822__$1;
(statearr_124946_126245[(1)] = (84));

} else {
var statearr_124947_126246 = state_124822__$1;
(statearr_124947_126246[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (79))){
var inst_124756 = cljs.core.PersistentHashMap.EMPTY;
var state_124822__$1 = state_124822;
var statearr_124948_126247 = state_124822__$1;
(statearr_124948_126247[(2)] = inst_124756);

(statearr_124948_126247[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (38))){
var inst_124590 = (state_124822[(59)]);
var inst_124600 = cljs.core.async.close_BANG_(inst_124590);
var state_124822__$1 = state_124822;
var statearr_124949_126248 = state_124822__$1;
(statearr_124949_126248[(2)] = inst_124600);

(statearr_124949_126248[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (87))){
var inst_124786 = (state_124822[(33)]);
var state_124822__$1 = state_124822;
if(cljs.core.truth_(inst_124786)){
var statearr_124950_126249 = state_124822__$1;
(statearr_124950_126249[(1)] = (90));

} else {
var statearr_124951_126250 = state_124822__$1;
(statearr_124951_126250[(1)] = (91));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (30))){
var state_124822__$1 = state_124822;
var statearr_124952_126251 = state_124822__$1;
(statearr_124952_126251[(2)] = null);

(statearr_124952_126251[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (73))){
var inst_124734 = (state_124822[(29)]);
var inst_124767 = (state_124822[(34)]);
var inst_124767__$1 = cljs.core.seq(inst_124734);
var state_124822__$1 = (function (){var statearr_124953 = state_124822;
(statearr_124953[(34)] = inst_124767__$1);

return statearr_124953;
})();
if(inst_124767__$1){
var statearr_124954_126252 = state_124822__$1;
(statearr_124954_126252[(1)] = (81));

} else {
var statearr_124955_126253 = state_124822__$1;
(statearr_124955_126253[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (10))){
var inst_124475 = (state_124822[(2)]);
var state_124822__$1 = state_124822;
var statearr_124956_126254 = state_124822__$1;
(statearr_124956_126254[(2)] = inst_124475);

(statearr_124956_126254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (18))){
var inst_124487 = (state_124822[(11)]);
var inst_124493 = (state_124822[(12)]);
var inst_124485 = (state_124822[(13)]);
var inst_124497 = (state_124822[(49)]);
var inst_124489 = (state_124822[(14)]);
var inst_124483 = (state_124822[(17)]);
var inst_124490 = (state_124822[(18)]);
var inst_124484 = (state_124822[(20)]);
var inst_124510 = cljs.core.PersistentVector.EMPTY;
var inst_124511 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector);
var inst_124512 = (function (){var map__124461 = inst_124483;
var resolver_sym = inst_124484;
var input = inst_124485;
var e = inst_124487;
var key = inst_124489;
var params = inst_124490;
var trace_data = inst_124493;
var trace_id__21490__auto__ = inst_124497;
return ((function (map__124461,resolver_sym,input,e,key,params,trace_data,trace_id__21490__auto__,inst_124487,inst_124493,inst_124485,inst_124497,inst_124489,inst_124483,inst_124490,inst_124484,inst_124510,inst_124511,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__124451_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(cljs.core.second(p1__124451_SHARP_),input);
});
;})(map__124461,resolver_sym,input,e,key,params,trace_data,trace_id__21490__auto__,inst_124487,inst_124493,inst_124485,inst_124497,inst_124489,inst_124483,inst_124490,inst_124484,inst_124510,inst_124511,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_124513 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_124512);
var inst_124514 = (function (){var map__124461 = inst_124483;
var resolver_sym = inst_124484;
var input = inst_124485;
var e = inst_124487;
var key = inst_124489;
var params = inst_124490;
var trace_data = inst_124493;
var trace_id__21490__auto__ = inst_124497;
return ((function (map__124461,resolver_sym,input,e,key,params,trace_data,trace_id__21490__auto__,inst_124487,inst_124493,inst_124485,inst_124497,inst_124489,inst_124483,inst_124490,inst_124484,inst_124510,inst_124511,inst_124512,inst_124513,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__124452_SHARP_){
return com.wsscode.pathom.core.cache_contains_QMARK_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,cljs.core.second(p1__124452_SHARP_),params], null));
});
;})(map__124461,resolver_sym,input,e,key,params,trace_data,trace_id__21490__auto__,inst_124487,inst_124493,inst_124485,inst_124497,inst_124489,inst_124483,inst_124490,inst_124484,inst_124510,inst_124511,inst_124512,inst_124513,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_124515 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_124514);
var inst_124516 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(inst_124511,inst_124513,inst_124515);
var inst_124517 = (function (){var map__124461 = inst_124483;
var resolver_sym = inst_124484;
var input = inst_124485;
var e = inst_124487;
var key = inst_124489;
var params = inst_124490;
var trace_data = inst_124493;
var trace_id__21490__auto__ = inst_124497;
return ((function (map__124461,resolver_sym,input,e,key,params,trace_data,trace_id__21490__auto__,inst_124487,inst_124493,inst_124485,inst_124497,inst_124489,inst_124483,inst_124490,inst_124484,inst_124510,inst_124511,inst_124512,inst_124513,inst_124514,inst_124515,inst_124516,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__124450_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__124450_SHARP_,input);
});
;})(map__124461,resolver_sym,input,e,key,params,trace_data,trace_id__21490__auto__,inst_124487,inst_124493,inst_124485,inst_124497,inst_124489,inst_124483,inst_124490,inst_124484,inst_124510,inst_124511,inst_124512,inst_124513,inst_124514,inst_124515,inst_124516,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_124518 = com.wsscode.pathom.connect.map_async_serial(inst_124517,processing_sequence);
var state_124822__$1 = (function (){var statearr_124957 = state_124822;
(statearr_124957[(47)] = inst_124510);

(statearr_124957[(48)] = inst_124516);

return statearr_124957;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124822__$1,(21),inst_124518);
} else {
if((state_val_124823 === (52))){
var inst_124625 = (state_124822[(61)]);
var state_124822__$1 = state_124822;
var statearr_124958_126255 = state_124822__$1;
(statearr_124958_126255[(2)] = inst_124625);

(statearr_124958_126255[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (67))){
var inst_124487 = (state_124822[(11)]);
var inst_124493 = (state_124822[(12)]);
var inst_124693 = (state_124822[(21)]);
var inst_124485 = (state_124822[(13)]);
var inst_124717 = (state_124822[(27)]);
var inst_124489 = (state_124822[(14)]);
var inst_124685 = (state_124822[(10)]);
var inst_124715 = (state_124822[(28)]);
var inst_124710 = (state_124822[(26)]);
var inst_124483 = (state_124822[(17)]);
var inst_124490 = (state_124822[(18)]);
var inst_124684 = (state_124822[(19)]);
var inst_124484 = (state_124822[(20)]);
var inst_124724 = (function (){var input = inst_124485;
var items = inst_124685;
var items_map = inst_124684;
var linked_results = inst_124717;
var key = inst_124489;
var channels = inst_124693;
var _ = inst_124715;
var params = inst_124490;
var e = inst_124487;
var resolver_sym = inst_124484;
var map__124461 = inst_124483;
var trace_data = inst_124493;
var batch_result = inst_124710;
return ((function (input,items,items_map,linked_results,key,channels,_,params,e,resolver_sym,map__124461,trace_data,batch_result,inst_124487,inst_124493,inst_124693,inst_124485,inst_124717,inst_124489,inst_124685,inst_124715,inst_124710,inst_124483,inst_124490,inst_124684,inst_124484,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap(cache){
var path__$1 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),(cljs.core.count(path) - (2)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path__$1,input,items,items_map,linked_results,key,channels,_,params,e,resolver_sym,map__124461,trace_data,batch_result,inst_124487,inst_124493,inst_124693,inst_124485,inst_124717,inst_124489,inst_124685,inst_124715,inst_124710,inst_124483,inst_124490,inst_124684,inst_124484,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce(cache__$1,p__124959){
var vec__124960 = p__124959;
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__124960,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__124960,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__124960,item,result,path__$1,input,items,items_map,linked_results,key,channels,_,params,e,resolver_sym,map__124461,trace_data,batch_result,inst_124487,inst_124493,inst_124693,inst_124485,inst_124717,inst_124489,inst_124685,inst_124715,inst_124710,inst_124483,inst_124490,inst_124684,inst_124484,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce_$_entity_path_inner_reduce(cache__$2,index){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cache__$2,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,index),((function (vec__124960,item,result,path__$1,input,items,items_map,linked_results,key,channels,_,params,e,resolver_sym,map__124461,trace_data,batch_result,inst_124487,inst_124493,inst_124693,inst_124485,inst_124717,inst_124489,inst_124685,inst_124715,inst_124710,inst_124483,inst_124490,inst_124684,inst_124484,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__124453_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result,p1__124453_SHARP_], 0));
});})(vec__124960,item,result,path__$1,input,items,items_map,linked_results,key,channels,_,params,e,resolver_sym,map__124461,trace_data,batch_result,inst_124487,inst_124493,inst_124693,inst_124485,inst_124717,inst_124489,inst_124685,inst_124715,inst_124710,inst_124483,inst_124490,inst_124684,inst_124484,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache))
);
});})(vec__124960,item,result,path__$1,input,items,items_map,linked_results,key,channels,_,params,e,resolver_sym,map__124461,trace_data,batch_result,inst_124487,inst_124493,inst_124693,inst_124485,inst_124717,inst_124489,inst_124685,inst_124715,inst_124710,inst_124483,inst_124490,inst_124684,inst_124484,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache))
,cache__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_map,item));
});})(path__$1,input,items,items_map,linked_results,key,channels,_,params,e,resolver_sym,map__124461,trace_data,batch_result,inst_124487,inst_124493,inst_124693,inst_124485,inst_124717,inst_124489,inst_124685,inst_124715,inst_124710,inst_124483,inst_124490,inst_124684,inst_124484,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache))
,cache,cljs.core.zipmap(items,batch_result));
});
;})(input,items,items_map,linked_results,key,channels,_,params,e,resolver_sym,map__124461,trace_data,batch_result,inst_124487,inst_124493,inst_124693,inst_124485,inst_124717,inst_124489,inst_124685,inst_124715,inst_124710,inst_124483,inst_124490,inst_124684,inst_124484,state_val_124823,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_124725 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(entity_path_cache,inst_124724);
var state_124822__$1 = state_124822;
var statearr_124963_126256 = state_124822__$1;
(statearr_124963_126256[(2)] = inst_124725);

(statearr_124963_126256[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (71))){
var inst_124487 = (state_124822[(11)]);
var inst_124717 = (state_124822[(27)]);
var inst_124808 = (state_124822[(2)]);
var inst_124809 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_124810 = cljs.core.PersistentHashMap.EMPTY;
var inst_124811 = [null,inst_124810];
var inst_124812 = (new cljs.core.PersistentVector(null,2,(5),inst_124809,inst_124811,null));
var inst_124813 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_124717,inst_124487,inst_124812);
var inst_124814 = cljs.core.second(inst_124813);
var state_124822__$1 = (function (){var statearr_124964 = state_124822;
(statearr_124964[(64)] = inst_124808);

return statearr_124964;
})();
var statearr_124965_126257 = state_124822__$1;
(statearr_124965_126257[(2)] = inst_124814);

(statearr_124965_126257[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (42))){
var inst_124590 = (state_124822[(59)]);
var inst_124597 = (state_124822[(2)]);
var inst_124598 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_124590,inst_124597);
var state_124822__$1 = state_124822;
var statearr_124966_126258 = state_124822__$1;
(statearr_124966_126258[(2)] = inst_124598);

(statearr_124966_126258[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (80))){
var inst_124751 = (state_124822[(24)]);
var inst_124758 = (state_124822[(2)]);
var inst_124759 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_124751,inst_124758);
var state_124822__$1 = state_124822;
var statearr_124967_126259 = state_124822__$1;
(statearr_124967_126259[(2)] = inst_124759);

(statearr_124967_126259[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (37))){
var inst_124591 = (state_124822[(53)]);
var state_124822__$1 = state_124822;
if(cljs.core.truth_(inst_124591)){
var statearr_124968_126260 = state_124822__$1;
(statearr_124968_126260[(1)] = (40));

} else {
var statearr_124969_126261 = state_124822__$1;
(statearr_124969_126261[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (63))){
var inst_124699 = (state_124822[(9)]);
var state_124822__$1 = state_124822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_124822__$1,(66),inst_124699);
} else {
if((state_val_124823 === (8))){
var state_124822__$1 = state_124822;
var statearr_124970_126262 = state_124822__$1;
(statearr_124970_126262[(2)] = true);

(statearr_124970_126262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (49))){
var inst_124625 = (state_124822[(61)]);
var state_124822__$1 = state_124822;
if(cljs.core.truth_(inst_124625)){
var statearr_124971_126263 = state_124822__$1;
(statearr_124971_126263[(1)] = (52));

} else {
var statearr_124972_126264 = state_124822__$1;
(statearr_124972_126264[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124823 === (84))){
var inst_124767 = (state_124822[(34)]);
var inst_124771 = cljs.core.chunk_first(inst_124767);
var inst_124772 = cljs.core.chunk_rest(inst_124767);
var inst_124773 = cljs.core.count(inst_124771);
var inst_124734 = inst_124772;
var inst_124735 = inst_124771;
var inst_124736 = inst_124773;
var inst_124737 = (0);
var state_124822__$1 = (function (){var statearr_124973 = state_124822;
(statearr_124973[(29)] = inst_124734);

(statearr_124973[(7)] = inst_124737);

(statearr_124973[(8)] = inst_124736);

(statearr_124973[(23)] = inst_124735);

return statearr_124973;
})();
var statearr_124974_126265 = state_124822__$1;
(statearr_124974_126265[(2)] = null);

(statearr_124974_126265[(1)] = (70));


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
});})(c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache))
;
return ((function (switch__38929__auto__,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache){
return (function() {
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__38930__auto____0 = (function (){
var statearr_124975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_124975[(0)] = com$wsscode$pathom$connect$parallel_batch_$_state_machine__38930__auto__);

(statearr_124975[(1)] = (1));

return statearr_124975;
});
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__38930__auto____1 = (function (state_124822){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_124822);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e124976){if((e124976 instanceof Object)){
var ex__38933__auto__ = e124976;
var statearr_124977_126266 = state_124822;
(statearr_124977_126266[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_124822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e124976;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__126267 = state_124822;
state_124822 = G__126267;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_batch_$_state_machine__38930__auto__ = function(state_124822){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__38930__auto____1.call(this,state_124822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_batch_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_batch_$_state_machine__38930__auto____0;
com$wsscode$pathom$connect$parallel_batch_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_batch_$_state_machine__38930__auto____1;
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache))
})();
var state__39005__auto__ = (function (){var statearr_124978 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_124978[(6)] = c__39003__auto__);

return statearr_124978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,map__124455,map__124455__$1,env,processing_sequence,path,entity_path_cache))
);

return c__39003__auto__;
});
com.wsscode.pathom.connect.parallel_reader = (function com$wsscode$pathom$connect$parallel_reader(p__124982){
var map__124983 = p__124982;
var map__124983__$1 = (((((!((map__124983 == null))))?(((((map__124983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__124983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__124983):map__124983);
var env = map__124983__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__124983__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__124983__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__124983__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var waiting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__124983__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278));
var temp__5718__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__124985 = temp__5718__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__124985,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__124985,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),out,new cljs.core.Keyword("com.wsscode.pathom.parser","response-stream","com.wsscode.pathom.parser/response-stream",1785550292),(function (){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var params = com.wsscode.pathom.core.params(env);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),plan);
var c__39003__auto___126268 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (state_125324){
var state_val_125325 = (state_125324[(1)]);
if((state_val_125325 === (65))){
var inst_125045 = (state_125324[(7)]);
var inst_125153 = (state_125324[(8)]);
var inst_125016 = (state_125324[(9)]);
var inst_125163 = (state_125324[(10)]);
var inst_125046 = (state_125324[(11)]);
var inst_125163__$1 = com.wsscode.pathom.connect.output__GT_provides(inst_125045);
var inst_125164 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_125165 = [new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),key,inst_125016];
var inst_125166 = cljs.core.PersistentHashMap.fromArrays(inst_125164,inst_125165);
var inst_125167 = com.wsscode.pathom.trace.trace(inst_125046,inst_125166);
var inst_125168 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_125169 = [inst_125163__$1,inst_125153];
var inst_125170 = cljs.core.PersistentHashMap.fromArrays(inst_125168,inst_125169);
var state_125324__$1 = (function (){var statearr_125327 = state_125324;
(statearr_125327[(12)] = inst_125167);

(statearr_125327[(10)] = inst_125163__$1);

return statearr_125327;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_125324__$1,(68),ch,inst_125170);
} else {
if((state_val_125325 === (70))){
var inst_125002 = (state_125324[(13)]);
var inst_125182 = (state_125324[(14)]);
var inst_125187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_125182,(0),null);
var inst_125188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_125182,(1),null);
var inst_125189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_125182,(2),null);
var tmp125326 = inst_125002;
var inst_124999 = inst_125187;
var inst_125000 = inst_125188;
var inst_125001 = inst_125189;
var inst_125002__$1 = tmp125326;
var state_125324__$1 = (function (){var statearr_125328 = state_125324;
(statearr_125328[(13)] = inst_125002__$1);

(statearr_125328[(15)] = inst_125001);

(statearr_125328[(16)] = inst_124999);

(statearr_125328[(17)] = inst_125000);

return statearr_125328;
})();
var statearr_125329_126269 = state_125324__$1;
(statearr_125329_126269[(2)] = null);

(statearr_125329_126269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (62))){
var inst_125051 = (state_125324[(18)]);
var inst_125043 = (state_125324[(19)]);
var inst_125015 = (state_125324[(20)]);
var inst_125045 = (state_125324[(7)]);
var inst_125002 = (state_125324[(13)]);
var inst_125153 = (state_125324[(8)]);
var inst_125001 = (state_125324[(15)]);
var inst_124999 = (state_125324[(16)]);
var inst_125009 = (state_125324[(21)]);
var inst_125000 = (state_125324[(17)]);
var inst_125042 = (state_125324[(22)]);
var inst_125137 = (state_125324[(23)]);
var inst_125016 = (state_125324[(9)]);
var inst_125046 = (state_125324[(11)]);
var inst_125136 = (state_125324[(24)]);
var inst_125044 = (state_125324[(25)]);
var inst_125008 = (state_125324[(26)]);
var inst_124996 = (state_125324[(27)]);
var inst_125041 = (state_125324[(28)]);
var inst_125048 = (state_125324[(29)]);
var inst_124997 = (state_125324[(30)]);
var inst_125153__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_125136,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_125154 = (function (){var input = inst_125044;
var vec__124992 = plan;
var step = inst_125008;
var seq__124993 = inst_124997;
var map__125014 = inst_125041;
var key_SINGLEQUOTE_ = inst_125015;
var G__124991 = inst_124999;
var response = inst_125153__$1;
var cache_QMARK_ = inst_125042;
var out_left = inst_125001;
var failed_resolvers = inst_125000;
var vec__125011 = inst_125008;
var batch_QMARK_ = inst_125043;
var output = inst_125045;
var env__$2 = inst_125046;
var e = inst_125048;
var resolver_sym = inst_125016;
var waiting__$1 = inst_125002;
var trace_data = inst_125051;
var resolver = inst_125041;
var first__124994 = inst_124996;
var replan = inst_125137;
var vec__125004 = inst_124999;
var tail = inst_125009;
var first__125006 = inst_125008;
var seq__125005 = inst_125009;
return ((function (input,vec__124992,step,seq__124993,map__125014,key_SINGLEQUOTE_,G__124991,response,cache_QMARK_,out_left,failed_resolvers,vec__125011,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,first__124994,replan,vec__125004,tail,first__125006,seq__125005,inst_125051,inst_125043,inst_125015,inst_125045,inst_125002,inst_125153,inst_125001,inst_124999,inst_125009,inst_125000,inst_125042,inst_125137,inst_125016,inst_125046,inst_125136,inst_125044,inst_125008,inst_124996,inst_125041,inst_125048,inst_124997,inst_125153__$1,state_val_125325,c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (p1__124980_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__124980_SHARP_], 0));
});
;})(input,vec__124992,step,seq__124993,map__125014,key_SINGLEQUOTE_,G__124991,response,cache_QMARK_,out_left,failed_resolvers,vec__125011,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,first__124994,replan,vec__125004,tail,first__125006,seq__125005,inst_125051,inst_125043,inst_125015,inst_125045,inst_125002,inst_125153,inst_125001,inst_124999,inst_125009,inst_125000,inst_125042,inst_125137,inst_125016,inst_125046,inst_125136,inst_125044,inst_125008,inst_124996,inst_125041,inst_125048,inst_124997,inst_125153__$1,state_val_125325,c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_125155 = com.wsscode.pathom.core.swap_entity_BANG_(inst_125046,inst_125154);
var inst_125157 = cljs.core.contains_QMARK_(inst_125153__$1,inst_125015);
var inst_125158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_125153__$1,inst_125015);
var inst_125159 = (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(inst_125158) : com.wsscode.pathom.core.break_values.call(null,inst_125158));
var inst_125160 = cljs.core.not(inst_125159);
var inst_125161 = ((inst_125157) && (inst_125160));
var state_125324__$1 = (function (){var statearr_125330 = state_125324;
(statearr_125330[(8)] = inst_125153__$1);

(statearr_125330[(31)] = inst_125155);

return statearr_125330;
})();
if(cljs.core.truth_(inst_125161)){
var statearr_125331_126270 = state_125324__$1;
(statearr_125331_126270[(1)] = (65));

} else {
var statearr_125332_126271 = state_125324__$1;
(statearr_125332_126271[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (74))){
var state_125324__$1 = state_125324;
var statearr_125335_126272 = state_125324__$1;
(statearr_125335_126272[(2)] = null);

(statearr_125335_126272[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (7))){
var inst_125020 = (state_125324[(32)]);
var inst_125025 = inst_125020.cljs$lang$protocol_mask$partition0$;
var inst_125026 = (inst_125025 & (64));
var inst_125027 = inst_125020.cljs$core$ISeq$;
var inst_125028 = (cljs.core.PROTOCOL_SENTINEL === inst_125027);
var inst_125029 = ((inst_125026) || (inst_125028));
var state_125324__$1 = state_125324;
if(cljs.core.truth_(inst_125029)){
var statearr_125336_126273 = state_125324__$1;
(statearr_125336_126273[(1)] = (10));

} else {
var statearr_125337_126274 = state_125324__$1;
(statearr_125337_126274[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (59))){
var inst_125002 = (state_125324[(13)]);
var inst_125001 = (state_125324[(15)]);
var inst_125009 = (state_125324[(21)]);
var inst_125000 = (state_125324[(17)]);
var inst_125046 = (state_125324[(11)]);
var inst_125145 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_125046);
var inst_125146 = cljs.core.keys(inst_125145);
var inst_125147 = cljs.core.set(inst_125146);
var inst_125148 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_125001,inst_125147);
var tmp125333 = inst_125002;
var tmp125334 = inst_125000;
var inst_124999 = inst_125009;
var inst_125000__$1 = tmp125334;
var inst_125001__$1 = inst_125148;
var inst_125002__$1 = tmp125333;
var state_125324__$1 = (function (){var statearr_125338 = state_125324;
(statearr_125338[(13)] = inst_125002__$1);

(statearr_125338[(15)] = inst_125001__$1);

(statearr_125338[(16)] = inst_124999);

(statearr_125338[(17)] = inst_125000__$1);

return statearr_125338;
})();
var statearr_125339_126275 = state_125324__$1;
(statearr_125339_126275[(2)] = null);

(statearr_125339_126275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (86))){
var inst_125234 = (state_125324[(33)]);
var inst_125234__$1 = (state_125324[(2)]);
var state_125324__$1 = (function (){var statearr_125340 = state_125324;
(statearr_125340[(33)] = inst_125234__$1);

return statearr_125340;
})();
if(cljs.core.truth_(inst_125234__$1)){
var statearr_125341_126276 = state_125324__$1;
(statearr_125341_126276[(1)] = (87));

} else {
var statearr_125342_126277 = state_125324__$1;
(statearr_125342_126277[(1)] = (88));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (20))){
var inst_125059 = (state_125324[(34)]);
var inst_125064 = inst_125059.cljs$lang$protocol_mask$partition0$;
var inst_125065 = (inst_125064 & (64));
var inst_125066 = inst_125059.cljs$core$ISeq$;
var inst_125067 = (cljs.core.PROTOCOL_SENTINEL === inst_125066);
var inst_125068 = ((inst_125065) || (inst_125067));
var state_125324__$1 = state_125324;
if(cljs.core.truth_(inst_125068)){
var statearr_125343_126278 = state_125324__$1;
(statearr_125343_126278[(1)] = (23));

} else {
var statearr_125344_126279 = state_125324__$1;
(statearr_125344_126279[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (72))){
var inst_125225 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
var statearr_125345_126280 = state_125324__$1;
(statearr_125345_126280[(2)] = inst_125225);

(statearr_125345_126280[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (58))){
var inst_125316 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
var statearr_125346_126281 = state_125324__$1;
(statearr_125346_126281[(2)] = inst_125316);

(statearr_125346_126281[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (60))){
var inst_125136 = (state_125324[(24)]);
var inst_125151 = cljs.core.map_QMARK_(inst_125136);
var state_125324__$1 = state_125324;
if(inst_125151){
var statearr_125347_126282 = state_125324__$1;
(statearr_125347_126282[(1)] = (62));

} else {
var statearr_125348_126283 = state_125324__$1;
(statearr_125348_126283[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (27))){
var inst_125059 = (state_125324[(34)]);
var state_125324__$1 = state_125324;
var statearr_125349_126284 = state_125324__$1;
(statearr_125349_126284[(2)] = inst_125059);

(statearr_125349_126284[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (1))){
var inst_124995 = cljs.core.seq(plan);
var inst_124996 = cljs.core.first(inst_124995);
var inst_124997 = cljs.core.next(inst_124995);
var inst_124998 = cljs.core.PersistentHashMap.EMPTY;
var inst_124999 = plan;
var inst_125000 = inst_124998;
var inst_125001 = out;
var inst_125002 = waiting;
var state_125324__$1 = (function (){var statearr_125350 = state_125324;
(statearr_125350[(13)] = inst_125002);

(statearr_125350[(15)] = inst_125001);

(statearr_125350[(16)] = inst_124999);

(statearr_125350[(17)] = inst_125000);

(statearr_125350[(27)] = inst_124996);

(statearr_125350[(30)] = inst_124997);

return statearr_125350;
})();
var statearr_125351_126285 = state_125324__$1;
(statearr_125351_126285[(2)] = null);

(statearr_125351_126285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (69))){
var inst_125182 = (state_125324[(14)]);
var inst_125182__$1 = (state_125324[(2)]);
var state_125324__$1 = (function (){var statearr_125352 = state_125324;
(statearr_125352[(14)] = inst_125182__$1);

return statearr_125352;
})();
if(cljs.core.truth_(inst_125182__$1)){
var statearr_125353_126286 = state_125324__$1;
(statearr_125353_126286[(1)] = (70));

} else {
var statearr_125354_126287 = state_125324__$1;
(statearr_125354_126287[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (101))){
var inst_125302 = (state_125324[(2)]);
var inst_125303 = cljs.core.async.close_BANG_(ch);
var state_125324__$1 = (function (){var statearr_125355 = state_125324;
(statearr_125355[(35)] = inst_125302);

return statearr_125355;
})();
var statearr_125356_126288 = state_125324__$1;
(statearr_125356_126288[(2)] = inst_125303);

(statearr_125356_126288[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (24))){
var state_125324__$1 = state_125324;
var statearr_125357_126289 = state_125324__$1;
(statearr_125357_126289[(2)] = false);

(statearr_125357_126289[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (55))){
var inst_125127 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
var statearr_125358_126290 = state_125324__$1;
(statearr_125358_126290[(2)] = inst_125127);


cljs.core.async.impl.ioc_helpers.process_exception(state_125324__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (85))){
var inst_125310 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
var statearr_125359_126291 = state_125324__$1;
(statearr_125359_126291[(2)] = inst_125310);

(statearr_125359_126291[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (39))){
var inst_125051 = (state_125324[(18)]);
var inst_125043 = (state_125324[(19)]);
var inst_125015 = (state_125324[(20)]);
var inst_125045 = (state_125324[(7)]);
var inst_125002 = (state_125324[(13)]);
var inst_125001 = (state_125324[(15)]);
var inst_124999 = (state_125324[(16)]);
var inst_125009 = (state_125324[(21)]);
var inst_125000 = (state_125324[(17)]);
var inst_125042 = (state_125324[(22)]);
var inst_125016 = (state_125324[(9)]);
var inst_125046 = (state_125324[(11)]);
var inst_125044 = (state_125324[(25)]);
var inst_125008 = (state_125324[(26)]);
var inst_124996 = (state_125324[(27)]);
var inst_125041 = (state_125324[(28)]);
var inst_125048 = (state_125324[(29)]);
var inst_124997 = (state_125324[(30)]);
var inst_125097 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_125051,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_125098 = com.wsscode.pathom.trace.trace(inst_125046,inst_125097);
var inst_125099 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_125100 = [inst_125016,inst_125048,params];
var inst_125101 = (new cljs.core.PersistentVector(null,3,(5),inst_125099,inst_125100,null));
var inst_125102 = (function (){var input = inst_125044;
var vec__124992 = plan;
var step = inst_125008;
var seq__124993 = inst_124997;
var map__125014 = inst_125041;
var key_SINGLEQUOTE_ = inst_125015;
var G__124991 = inst_124999;
var cache_QMARK_ = inst_125042;
var out_left = inst_125001;
var failed_resolvers = inst_125000;
var vec__125011 = inst_125008;
var batch_QMARK_ = inst_125043;
var output = inst_125045;
var env__$2 = inst_125046;
var e = inst_125048;
var resolver_sym = inst_125016;
var waiting__$1 = inst_125002;
var trace_data = inst_125051;
var resolver = inst_125041;
var first__124994 = inst_124996;
var vec__125004 = inst_124999;
var tail = inst_125009;
var first__125006 = inst_125008;
var seq__125005 = inst_125009;
return ((function (input,vec__124992,step,seq__124993,map__125014,key_SINGLEQUOTE_,G__124991,cache_QMARK_,out_left,failed_resolvers,vec__125011,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,first__124994,vec__125004,tail,first__125006,seq__125005,inst_125051,inst_125043,inst_125015,inst_125045,inst_125002,inst_125001,inst_124999,inst_125009,inst_125000,inst_125042,inst_125016,inst_125046,inst_125044,inst_125008,inst_124996,inst_125041,inst_125048,inst_124997,inst_125097,inst_125098,inst_125099,inst_125100,inst_125101,state_val_125325,c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var c__39003__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto____$1,input,vec__124992,step,seq__124993,map__125014,key_SINGLEQUOTE_,G__124991,cache_QMARK_,out_left,failed_resolvers,vec__125011,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,first__124994,vec__125004,tail,first__125006,seq__125005,inst_125051,inst_125043,inst_125015,inst_125045,inst_125002,inst_125001,inst_124999,inst_125009,inst_125000,inst_125042,inst_125016,inst_125046,inst_125044,inst_125008,inst_124996,inst_125041,inst_125048,inst_124997,inst_125097,inst_125098,inst_125099,inst_125100,inst_125101,state_val_125325,c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto____$1,input,vec__124992,step,seq__124993,map__125014,key_SINGLEQUOTE_,G__124991,cache_QMARK_,out_left,failed_resolvers,vec__125011,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,first__124994,vec__125004,tail,first__125006,seq__125005,inst_125051,inst_125043,inst_125015,inst_125045,inst_125002,inst_125001,inst_124999,inst_125009,inst_125000,inst_125042,inst_125016,inst_125046,inst_125044,inst_125008,inst_124996,inst_125041,inst_125048,inst_124997,inst_125097,inst_125098,inst_125099,inst_125100,inst_125101,state_val_125325,c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (state_125380){
var state_val_125381 = (state_125380[(1)]);
if((state_val_125381 === (7))){
var inst_125371 = (state_125380[(7)]);
var inst_125371__$1 = (state_125380[(2)]);
var state_125380__$1 = (function (){var statearr_125382 = state_125380;
(statearr_125382[(7)] = inst_125371__$1);

return statearr_125382;
})();
if(cljs.core.truth_(inst_125371__$1)){
var statearr_125383_126292 = state_125380__$1;
(statearr_125383_126292[(1)] = (9));

} else {
var statearr_125384_126293 = state_125380__$1;
(statearr_125384_126293[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125381 === (1))){
var state_125380__$1 = state_125380;
var statearr_125385_126294 = state_125380__$1;
(statearr_125385_126294[(2)] = null);

(statearr_125385_126294[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125381 === (4))){
var inst_125364 = (state_125380[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_125380,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_125364__$1 = com.wsscode.pathom.connect.call_resolver(env__$2,e);
var inst_125365 = com.wsscode.common.async_cljs.chan_QMARK_(inst_125364__$1);
var state_125380__$1 = (function (){var statearr_125386 = state_125380;
(statearr_125386[(8)] = inst_125364__$1);

return statearr_125386;
})();
if(inst_125365){
var statearr_125387_126295 = state_125380__$1;
(statearr_125387_126295[(1)] = (5));

} else {
var statearr_125388_126296 = state_125380__$1;
(statearr_125388_126296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125381 === (6))){
var inst_125364 = (state_125380[(8)]);
var state_125380__$1 = state_125380;
var statearr_125389_126297 = state_125380__$1;
(statearr_125389_126297[(2)] = inst_125364);

(statearr_125389_126297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125381 === (3))){
var inst_125360 = (state_125380[(2)]);
var state_125380__$1 = state_125380;
var statearr_125390_126298 = state_125380__$1;
(statearr_125390_126298[(2)] = inst_125360);


cljs.core.async.impl.ioc_helpers.process_exception(state_125380__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125381 === (2))){
var inst_125378 = (state_125380[(2)]);
var state_125380__$1 = state_125380;
return cljs.core.async.impl.ioc_helpers.return_chan(state_125380__$1,inst_125378);
} else {
if((state_val_125381 === (11))){
var inst_125376 = (state_125380[(2)]);
var state_125380__$1 = state_125380;
var statearr_125391_126299 = state_125380__$1;
(statearr_125391_126299[(2)] = inst_125376);


cljs.core.async.impl.ioc_helpers.process_exception(state_125380__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125381 === (9))){
var inst_125371 = (state_125380[(7)]);
var state_125380__$1 = state_125380;
var statearr_125392_126300 = state_125380__$1;
(statearr_125392_126300[(2)] = inst_125371);

(statearr_125392_126300[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125381 === (5))){
var inst_125364 = (state_125380[(8)]);
var state_125380__$1 = state_125380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125380__$1,(8),inst_125364);
} else {
if((state_val_125381 === (10))){
var inst_125374 = cljs.core.PersistentHashMap.EMPTY;
var state_125380__$1 = state_125380;
var statearr_125393_126301 = state_125380__$1;
(statearr_125393_126301[(2)] = inst_125374);

(statearr_125393_126301[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125381 === (8))){
var inst_125368 = (state_125380[(2)]);
var state_125380__$1 = state_125380;
var statearr_125394_126302 = state_125380__$1;
(statearr_125394_126302[(2)] = inst_125368);

(statearr_125394_126302[(1)] = (7));


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
});})(c__39003__auto____$1,input,vec__124992,step,seq__124993,map__125014,key_SINGLEQUOTE_,G__124991,cache_QMARK_,out_left,failed_resolvers,vec__125011,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,first__124994,vec__125004,tail,first__125006,seq__125005,inst_125051,inst_125043,inst_125015,inst_125045,inst_125002,inst_125001,inst_124999,inst_125009,inst_125000,inst_125042,inst_125016,inst_125046,inst_125044,inst_125008,inst_124996,inst_125041,inst_125048,inst_124997,inst_125097,inst_125098,inst_125099,inst_125100,inst_125101,state_val_125325,c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
;
return ((function (switch__38929__auto__,c__39003__auto____$1,input,vec__124992,step,seq__124993,map__125014,key_SINGLEQUOTE_,G__124991,cache_QMARK_,out_left,failed_resolvers,vec__125011,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,first__124994,vec__125004,tail,first__125006,seq__125005,inst_125051,inst_125043,inst_125015,inst_125045,inst_125002,inst_125001,inst_124999,inst_125009,inst_125000,inst_125042,inst_125016,inst_125046,inst_125044,inst_125008,inst_124996,inst_125041,inst_125048,inst_124997,inst_125097,inst_125098,inst_125099,inst_125100,inst_125101,state_val_125325,c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto____0 = (function (){
var statearr_125395 = [null,null,null,null,null,null,null,null,null];
(statearr_125395[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto__);

(statearr_125395[(1)] = (1));

return statearr_125395;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto____1 = (function (state_125380){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_125380);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e125396){if((e125396 instanceof Object)){
var ex__38933__auto__ = e125396;
var statearr_125397_126303 = state_125380;
(statearr_125397_126303[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_125380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e125396;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__126304 = state_125380;
state_125380 = G__126304;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto__ = function(state_125380){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto____1.call(this,state_125380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto____$1,input,vec__124992,step,seq__124993,map__125014,key_SINGLEQUOTE_,G__124991,cache_QMARK_,out_left,failed_resolvers,vec__125011,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,first__124994,vec__125004,tail,first__125006,seq__125005,inst_125051,inst_125043,inst_125015,inst_125045,inst_125002,inst_125001,inst_124999,inst_125009,inst_125000,inst_125042,inst_125016,inst_125046,inst_125044,inst_125008,inst_124996,inst_125041,inst_125048,inst_124997,inst_125097,inst_125098,inst_125099,inst_125100,inst_125101,state_val_125325,c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var state__39005__auto__ = (function (){var statearr_125398 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_125398[(6)] = c__39003__auto____$1);

return statearr_125398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto____$1,input,vec__124992,step,seq__124993,map__125014,key_SINGLEQUOTE_,G__124991,cache_QMARK_,out_left,failed_resolvers,vec__125011,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,first__124994,vec__125004,tail,first__125006,seq__125005,inst_125051,inst_125043,inst_125015,inst_125045,inst_125002,inst_125001,inst_124999,inst_125009,inst_125000,inst_125042,inst_125016,inst_125046,inst_125044,inst_125008,inst_124996,inst_125041,inst_125048,inst_124997,inst_125097,inst_125098,inst_125099,inst_125100,inst_125101,state_val_125325,c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
);

return c__39003__auto____$1;
});
;})(input,vec__124992,step,seq__124993,map__125014,key_SINGLEQUOTE_,G__124991,cache_QMARK_,out_left,failed_resolvers,vec__125011,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,first__124994,vec__125004,tail,first__125006,seq__125005,inst_125051,inst_125043,inst_125015,inst_125045,inst_125002,inst_125001,inst_124999,inst_125009,inst_125000,inst_125042,inst_125016,inst_125046,inst_125044,inst_125008,inst_124996,inst_125041,inst_125048,inst_124997,inst_125097,inst_125098,inst_125099,inst_125100,inst_125101,state_val_125325,c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_125103 = com.wsscode.pathom.core.cached_async(inst_125046,inst_125101,inst_125102);
var state_125324__$1 = (function (){var statearr_125399 = state_125324;
(statearr_125399[(36)] = inst_125098);

return statearr_125399;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125324__$1,(42),inst_125103);
} else {
if((state_val_125325 === (88))){
var inst_125009 = (state_125324[(21)]);
var inst_125016 = (state_125324[(9)]);
var inst_125046 = (state_125324[(11)]);
var inst_125136 = (state_125324[(24)]);
var inst_125244 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_125245 = [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416),key,inst_125016];
var inst_125246 = cljs.core.PersistentHashMap.fromArrays(inst_125244,inst_125245);
var inst_125247 = com.wsscode.pathom.trace.trace(inst_125046,inst_125246);
var inst_125248 = com.wsscode.pathom.core.add_error(inst_125046,inst_125136);
var inst_125249 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_125250 = cljs.core.seq(inst_125009);
var state_125324__$1 = (function (){var statearr_125400 = state_125324;
(statearr_125400[(37)] = inst_125249);

(statearr_125400[(38)] = inst_125248);

(statearr_125400[(39)] = inst_125247);

return statearr_125400;
})();
if(inst_125250){
var statearr_125401_126305 = state_125324__$1;
(statearr_125401_126305[(1)] = (91));

} else {
var statearr_125402_126306 = state_125324__$1;
(statearr_125402_126306[(1)] = (92));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (46))){
var inst_125129 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
var statearr_125403_126307 = state_125324__$1;
(statearr_125403_126307[(2)] = inst_125129);

(statearr_125403_126307[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (4))){
var inst_125020 = (state_125324[(32)]);
var inst_125016 = (state_125324[(9)]);
var inst_125008 = (state_125324[(26)]);
var inst_125015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_125008,(0),null);
var inst_125016__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_125008,(1),null);
var inst_125017 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_125018 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),inst_125016__$1];
var inst_125019 = (new cljs.core.PersistentVector(null,2,(5),inst_125017,inst_125018,null));
var inst_125020__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_125019);
var inst_125022 = (inst_125020__$1 == null);
var inst_125023 = cljs.core.not(inst_125022);
var state_125324__$1 = (function (){var statearr_125404 = state_125324;
(statearr_125404[(20)] = inst_125015);

(statearr_125404[(32)] = inst_125020__$1);

(statearr_125404[(9)] = inst_125016__$1);

return statearr_125404;
})();
if(inst_125023){
var statearr_125405_126308 = state_125324__$1;
(statearr_125405_126308[(1)] = (7));

} else {
var statearr_125406_126309 = state_125324__$1;
(statearr_125406_126309[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (77))){
var inst_125015 = (state_125324[(20)]);
var inst_125153 = (state_125324[(8)]);
var inst_125209 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_125153,inst_125015,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_125324__$1 = state_125324;
var statearr_125407_126310 = state_125324__$1;
(statearr_125407_126310[(2)] = inst_125209);

(statearr_125407_126310[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (95))){
var state_125324__$1 = state_125324;
var statearr_125408_126311 = state_125324__$1;
(statearr_125408_126311[(2)] = null);

(statearr_125408_126311[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (54))){
var inst_125125 = cljs.core.PersistentHashMap.EMPTY;
var state_125324__$1 = state_125324;
var statearr_125409_126312 = state_125324__$1;
(statearr_125409_126312[(2)] = inst_125125);

(statearr_125409_126312[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (92))){
var inst_125001 = (state_125324[(15)]);
var inst_125256 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882));
var inst_125257 = cljs.core.zipmap(inst_125001,inst_125256);
var state_125324__$1 = state_125324;
var statearr_125410_126313 = state_125324__$1;
(statearr_125410_126313[(2)] = inst_125257);

(statearr_125410_126313[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (15))){
var inst_125015 = (state_125324[(20)]);
var inst_125002 = (state_125324[(13)]);
var inst_125016 = (state_125324[(9)]);
var inst_125046 = (state_125324[(11)]);
var inst_125044 = (state_125324[(25)]);
var inst_125041 = (state_125324[(28)]);
var inst_125048 = (state_125324[(29)]);
var inst_125041__$1 = (state_125324[(2)]);
var inst_125042 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_125041__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_125043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_125041__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_125044__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_125041__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_125045 = com.wsscode.pathom.connect.resolver__GT_output(env__$1,inst_125016);
var inst_125046__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_125041__$1);
var inst_125047 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_125046__$1);
var inst_125048__$1 = cljs.core.select_keys(inst_125047,inst_125044__$1);
var inst_125049 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_125050 = [key,inst_125016,inst_125048__$1];
var inst_125051 = cljs.core.PersistentHashMap.fromArrays(inst_125049,inst_125050);
var inst_125052 = cljs.core.contains_QMARK_(inst_125002,inst_125015);
var state_125324__$1 = (function (){var statearr_125411 = state_125324;
(statearr_125411[(18)] = inst_125051);

(statearr_125411[(19)] = inst_125043);

(statearr_125411[(7)] = inst_125045);

(statearr_125411[(22)] = inst_125042);

(statearr_125411[(11)] = inst_125046__$1);

(statearr_125411[(25)] = inst_125044__$1);

(statearr_125411[(28)] = inst_125041__$1);

(statearr_125411[(29)] = inst_125048__$1);

return statearr_125411;
})();
if(inst_125052){
var statearr_125412_126314 = state_125324__$1;
(statearr_125412_126314[(1)] = (16));

} else {
var statearr_125413_126315 = state_125324__$1;
(statearr_125413_126315[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (48))){
var inst_125114 = (state_125324[(40)]);
var inst_125046 = (state_125324[(11)]);
var inst_125048 = (state_125324[(29)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_125324,(47),new cljs.core.Keyword(null,"default","default",-1987822328),null,(46));
var inst_125114__$1 = com.wsscode.pathom.connect.call_resolver(inst_125046,inst_125048);
var inst_125115 = com.wsscode.common.async_cljs.chan_QMARK_(inst_125114__$1);
var state_125324__$1 = (function (){var statearr_125414 = state_125324;
(statearr_125414[(40)] = inst_125114__$1);

return statearr_125414;
})();
if(inst_125115){
var statearr_125415_126316 = state_125324__$1;
(statearr_125415_126316[(1)] = (49));

} else {
var statearr_125416_126317 = state_125324__$1;
(statearr_125416_126317[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (50))){
var inst_125114 = (state_125324[(40)]);
var state_125324__$1 = state_125324;
var statearr_125417_126318 = state_125324__$1;
(statearr_125417_126318[(2)] = inst_125114);

(statearr_125417_126318[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (75))){
var inst_125015 = (state_125324[(20)]);
var inst_125153 = (state_125324[(8)]);
var inst_125203 = (state_125324[(2)]);
var inst_125204 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_125206 = cljs.core.contains_QMARK_(inst_125153,inst_125015);
var inst_125207 = (!(inst_125206));
var state_125324__$1 = (function (){var statearr_125418 = state_125324;
(statearr_125418[(41)] = inst_125204);

(statearr_125418[(42)] = inst_125203);

return statearr_125418;
})();
if(inst_125207){
var statearr_125419_126319 = state_125324__$1;
(statearr_125419_126319[(1)] = (77));

} else {
var statearr_125420_126320 = state_125324__$1;
(statearr_125420_126320[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (99))){
var inst_125016 = (state_125324[(9)]);
var inst_125046 = (state_125324[(11)]);
var inst_125136 = (state_125324[(24)]);
var inst_125286 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_125287 = [inst_125136];
var inst_125288 = cljs.core.PersistentHashMap.fromArrays(inst_125286,inst_125287);
var inst_125289 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_125288);
var inst_125290 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_125291 = [new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),key,inst_125016,inst_125136];
var inst_125292 = cljs.core.PersistentHashMap.fromArrays(inst_125290,inst_125291);
var inst_125293 = com.wsscode.pathom.trace.trace(inst_125046,inst_125292);
var inst_125294 = com.wsscode.pathom.core.add_error(inst_125046,inst_125289);
var inst_125295 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_125296 = [key];
var inst_125297 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_125298 = cljs.core.PersistentHashMap.fromArrays(inst_125296,inst_125297);
var inst_125299 = [out,inst_125289,inst_125298];
var inst_125300 = cljs.core.PersistentHashMap.fromArrays(inst_125295,inst_125299);
var state_125324__$1 = (function (){var statearr_125421 = state_125324;
(statearr_125421[(43)] = inst_125294);

(statearr_125421[(44)] = inst_125293);

return statearr_125421;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_125324__$1,(101),ch,inst_125300);
} else {
if((state_val_125325 === (21))){
var state_125324__$1 = state_125324;
var statearr_125422_126321 = state_125324__$1;
(statearr_125422_126321[(2)] = false);

(statearr_125422_126321[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (31))){
var inst_125085 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
var statearr_125423_126322 = state_125324__$1;
(statearr_125423_126322[(2)] = inst_125085);

(statearr_125423_126322[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (32))){
var inst_125043 = (state_125324[(19)]);
var state_125324__$1 = state_125324;
if(cljs.core.truth_(inst_125043)){
var statearr_125424_126323 = state_125324__$1;
(statearr_125424_126323[(1)] = (35));

} else {
var statearr_125425_126324 = state_125324__$1;
(statearr_125425_126324[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (40))){
var inst_125107 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
var statearr_125428_126325 = state_125324__$1;
(statearr_125428_126325[(2)] = inst_125107);

(statearr_125428_126325[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (91))){
var inst_125252 = [key];
var inst_125253 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_125254 = cljs.core.PersistentHashMap.fromArrays(inst_125252,inst_125253);
var state_125324__$1 = state_125324;
var statearr_125429_126326 = state_125324__$1;
(statearr_125429_126326[(2)] = inst_125254);

(statearr_125429_126326[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (56))){
var inst_125015 = (state_125324[(20)]);
var inst_125002 = (state_125324[(13)]);
var inst_125001 = (state_125324[(15)]);
var inst_125000 = (state_125324[(17)]);
var inst_125140 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(inst_125002,inst_125015);
var tmp125426 = inst_125001;
var tmp125427 = inst_125000;
var inst_124999 = plan;
var inst_125000__$1 = tmp125427;
var inst_125001__$1 = tmp125426;
var inst_125002__$1 = inst_125140;
var state_125324__$1 = (function (){var statearr_125430 = state_125324;
(statearr_125430[(13)] = inst_125002__$1);

(statearr_125430[(15)] = inst_125001__$1);

(statearr_125430[(16)] = inst_124999);

(statearr_125430[(17)] = inst_125000__$1);

return statearr_125430;
})();
var statearr_125431_126327 = state_125324__$1;
(statearr_125431_126327[(2)] = null);

(statearr_125431_126327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (33))){
var state_125324__$1 = state_125324;
var statearr_125432_126328 = state_125324__$1;
(statearr_125432_126328[(1)] = (43));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (13))){
var inst_125020 = (state_125324[(32)]);
var inst_125038 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_125020);
var state_125324__$1 = state_125324;
var statearr_125434_126329 = state_125324__$1;
(statearr_125434_126329[(2)] = inst_125038);

(statearr_125434_126329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (22))){
var inst_125075 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
if(cljs.core.truth_(inst_125075)){
var statearr_125435_126330 = state_125324__$1;
(statearr_125435_126330[(1)] = (26));

} else {
var statearr_125436_126331 = state_125324__$1;
(statearr_125436_126331[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (90))){
var inst_125263 = (state_125324[(2)]);
var inst_125264 = cljs.core.async.close_BANG_(ch);
var state_125324__$1 = (function (){var statearr_125437 = state_125324;
(statearr_125437[(45)] = inst_125263);

return statearr_125437;
})();
var statearr_125438_126332 = state_125324__$1;
(statearr_125438_126332[(2)] = inst_125264);

(statearr_125438_126332[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (36))){
var inst_125043 = (state_125324[(19)]);
var state_125324__$1 = state_125324;
var statearr_125439_126333 = state_125324__$1;
(statearr_125439_126333[(2)] = inst_125043);

(statearr_125439_126333[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (41))){
var inst_125095 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
var statearr_125440_126334 = state_125324__$1;
(statearr_125440_126334[(2)] = inst_125095);

(statearr_125440_126334[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (89))){
var inst_125266 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
var statearr_125441_126335 = state_125324__$1;
(statearr_125441_126335[(2)] = inst_125266);

(statearr_125441_126335[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (100))){
var inst_125305 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
var statearr_125442_126336 = state_125324__$1;
(statearr_125442_126336[(2)] = inst_125305);

(statearr_125442_126336[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (43))){
var state_125324__$1 = state_125324;
var statearr_125443_126337 = state_125324__$1;
(statearr_125443_126337[(2)] = null);

(statearr_125443_126337[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (61))){
var inst_125314 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
var statearr_125444_126338 = state_125324__$1;
(statearr_125444_126338[(2)] = inst_125314);

(statearr_125444_126338[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (29))){
var inst_125081 = (state_125324[(46)]);
var state_125324__$1 = state_125324;
var statearr_125445_126339 = state_125324__$1;
(statearr_125445_126339[(2)] = inst_125081);

(statearr_125445_126339[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (44))){
var state_125324__$1 = state_125324;
var statearr_125446_126340 = state_125324__$1;
(statearr_125446_126340[(2)] = null);

(statearr_125446_126340[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (93))){
var inst_125249 = (state_125324[(37)]);
var inst_125136 = (state_125324[(24)]);
var inst_125259 = (state_125324[(2)]);
var inst_125260 = [out,inst_125136,inst_125259];
var inst_125261 = cljs.core.PersistentHashMap.fromArrays(inst_125249,inst_125260);
var state_125324__$1 = state_125324;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_125324__$1,(90),ch,inst_125261);
} else {
if((state_val_125325 === (6))){
var inst_125320 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
var statearr_125447_126341 = state_125324__$1;
(statearr_125447_126341[(2)] = inst_125320);

(statearr_125447_126341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (28))){
var inst_125081 = (state_125324[(46)]);
var inst_125080 = (state_125324[(2)]);
var inst_125081__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_125080,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973));
var state_125324__$1 = (function (){var statearr_125448 = state_125324;
(statearr_125448[(46)] = inst_125081__$1);

return statearr_125448;
})();
if(cljs.core.truth_(inst_125081__$1)){
var statearr_125449_126342 = state_125324__$1;
(statearr_125449_126342[(1)] = (29));

} else {
var statearr_125450_126343 = state_125324__$1;
(statearr_125450_126343[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (64))){
var inst_125312 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
var statearr_125451_126344 = state_125324__$1;
(statearr_125451_126344[(2)] = inst_125312);

(statearr_125451_126344[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (51))){
var inst_125122 = (state_125324[(47)]);
var inst_125122__$1 = (state_125324[(2)]);
var state_125324__$1 = (function (){var statearr_125452 = state_125324;
(statearr_125452[(47)] = inst_125122__$1);

return statearr_125452;
})();
if(cljs.core.truth_(inst_125122__$1)){
var statearr_125453_126345 = state_125324__$1;
(statearr_125453_126345[(1)] = (53));

} else {
var statearr_125454_126346 = state_125324__$1;
(statearr_125454_126346[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (25))){
var inst_125072 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
var statearr_125455_126347 = state_125324__$1;
(statearr_125455_126347[(2)] = inst_125072);

(statearr_125455_126347[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (34))){
var inst_125134 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
var statearr_125456_126348 = state_125324__$1;
(statearr_125456_126348[(2)] = inst_125134);

(statearr_125456_126348[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (17))){
var inst_125042 = (state_125324[(22)]);
var state_125324__$1 = state_125324;
if(cljs.core.truth_(inst_125042)){
var statearr_125457_126349 = state_125324__$1;
(statearr_125457_126349[(1)] = (32));

} else {
var statearr_125458_126350 = state_125324__$1;
(statearr_125458_126350[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (3))){
var inst_125322 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_125324__$1,inst_125322);
} else {
if((state_val_125325 === (12))){
var inst_125033 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
var statearr_125459_126351 = state_125324__$1;
(statearr_125459_126351[(2)] = inst_125033);

(statearr_125459_126351[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (2))){
var inst_124999 = (state_125324[(16)]);
var inst_125008 = (state_125324[(26)]);
var inst_125007 = cljs.core.seq(inst_124999);
var inst_125008__$1 = cljs.core.first(inst_125007);
var inst_125009 = cljs.core.next(inst_125007);
var state_125324__$1 = (function (){var statearr_125460 = state_125324;
(statearr_125460[(21)] = inst_125009);

(statearr_125460[(26)] = inst_125008__$1);

return statearr_125460;
})();
if(cljs.core.truth_(inst_125008__$1)){
var statearr_125461_126352 = state_125324__$1;
(statearr_125461_126352[(1)] = (4));

} else {
var statearr_125462_126353 = state_125324__$1;
(statearr_125462_126353[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (66))){
var inst_125015 = (state_125324[(20)]);
var inst_125153 = (state_125324[(8)]);
var inst_125137 = (state_125324[(23)]);
var inst_125176 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_125177 = [inst_125153,inst_125015];
var inst_125178 = cljs.core.PersistentHashMap.fromArrays(inst_125176,inst_125177);
var inst_125179 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_125178);
var inst_125180 = (inst_125137.cljs$core$IFn$_invoke$arity$2 ? inst_125137.cljs$core$IFn$_invoke$arity$2(inst_125153,inst_125179) : inst_125137.call(null,inst_125153,inst_125179));
var state_125324__$1 = state_125324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125324__$1,(69),inst_125180);
} else {
if((state_val_125325 === (23))){
var state_125324__$1 = state_125324;
var statearr_125463_126354 = state_125324__$1;
(statearr_125463_126354[(2)] = true);

(statearr_125463_126354[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (47))){
var inst_125110 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
var statearr_125464_126355 = state_125324__$1;
(statearr_125464_126355[(2)] = inst_125110);


cljs.core.async.impl.ioc_helpers.process_exception(state_125324__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (35))){
var state_125324__$1 = state_125324;
var statearr_125465_126356 = state_125324__$1;
(statearr_125465_126356[(2)] = processing_sequence);

(statearr_125465_126356[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (82))){
var inst_125195 = (state_125324[(48)]);
var inst_125204 = (state_125324[(41)]);
var inst_125218 = (state_125324[(2)]);
var inst_125219 = [out,inst_125195,inst_125218];
var inst_125220 = cljs.core.PersistentHashMap.fromArrays(inst_125204,inst_125219);
var state_125324__$1 = state_125324;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_125324__$1,(76),ch,inst_125220);
} else {
if((state_val_125325 === (76))){
var inst_125222 = (state_125324[(2)]);
var inst_125223 = cljs.core.async.close_BANG_(ch);
var state_125324__$1 = (function (){var statearr_125466 = state_125324;
(statearr_125466[(49)] = inst_125222);

return statearr_125466;
})();
var statearr_125467_126357 = state_125324__$1;
(statearr_125467_126357[(2)] = inst_125223);

(statearr_125467_126357[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (97))){
var inst_125276 = (state_125324[(50)]);
var inst_125276__$1 = (state_125324[(2)]);
var state_125324__$1 = (function (){var statearr_125468 = state_125324;
(statearr_125468[(50)] = inst_125276__$1);

return statearr_125468;
})();
if(cljs.core.truth_(inst_125276__$1)){
var statearr_125469_126358 = state_125324__$1;
(statearr_125469_126358[(1)] = (98));

} else {
var statearr_125470_126359 = state_125324__$1;
(statearr_125470_126359[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (19))){
var inst_125059 = (state_125324[(34)]);
var inst_125059__$1 = (state_125324[(2)]);
var inst_125061 = (inst_125059__$1 == null);
var inst_125062 = cljs.core.not(inst_125061);
var state_125324__$1 = (function (){var statearr_125473 = state_125324;
(statearr_125473[(34)] = inst_125059__$1);

return statearr_125473;
})();
if(inst_125062){
var statearr_125474_126360 = state_125324__$1;
(statearr_125474_126360[(1)] = (20));

} else {
var statearr_125475_126361 = state_125324__$1;
(statearr_125475_126361[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (57))){
var inst_125136 = (state_125324[(24)]);
var inst_125143 = (new cljs.core.Keyword("com.wsscode.pathom.connect","watch-ready","com.wsscode.pathom.connect/watch-ready",943560359) === inst_125136);
var state_125324__$1 = state_125324;
if(cljs.core.truth_(inst_125143)){
var statearr_125476_126362 = state_125324__$1;
(statearr_125476_126362[(1)] = (59));

} else {
var statearr_125477_126363 = state_125324__$1;
(statearr_125477_126363[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (68))){
var inst_125002 = (state_125324[(13)]);
var inst_125001 = (state_125324[(15)]);
var inst_125009 = (state_125324[(21)]);
var inst_125000 = (state_125324[(17)]);
var inst_125163 = (state_125324[(10)]);
var inst_125172 = (state_125324[(2)]);
var inst_125173 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_125001,inst_125163);
var tmp125471 = inst_125002;
var tmp125472 = inst_125000;
var inst_124999 = inst_125009;
var inst_125000__$1 = tmp125472;
var inst_125001__$1 = inst_125173;
var inst_125002__$1 = tmp125471;
var state_125324__$1 = (function (){var statearr_125478 = state_125324;
(statearr_125478[(13)] = inst_125002__$1);

(statearr_125478[(15)] = inst_125001__$1);

(statearr_125478[(16)] = inst_124999);

(statearr_125478[(17)] = inst_125000__$1);

(statearr_125478[(51)] = inst_125172);

return statearr_125478;
})();
var statearr_125479_126364 = state_125324__$1;
(statearr_125479_126364[(2)] = null);

(statearr_125479_126364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (11))){
var state_125324__$1 = state_125324;
var statearr_125480_126365 = state_125324__$1;
(statearr_125480_126365[(2)] = false);

(statearr_125480_126365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (9))){
var inst_125036 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
if(cljs.core.truth_(inst_125036)){
var statearr_125481_126366 = state_125324__$1;
(statearr_125481_126366[(1)] = (13));

} else {
var statearr_125482_126367 = state_125324__$1;
(statearr_125482_126367[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (5))){
var inst_125318 = cljs.core.async.close_BANG_(ch);
var state_125324__$1 = state_125324;
var statearr_125483_126368 = state_125324__$1;
(statearr_125483_126368[(2)] = inst_125318);

(statearr_125483_126368[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (83))){
var inst_125137 = (state_125324[(23)]);
var inst_125136 = (state_125324[(24)]);
var inst_125231 = cljs.core.PersistentHashMap.EMPTY;
var inst_125232 = (inst_125137.cljs$core$IFn$_invoke$arity$2 ? inst_125137.cljs$core$IFn$_invoke$arity$2(inst_125231,inst_125136) : inst_125137.call(null,inst_125231,inst_125136));
var state_125324__$1 = state_125324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125324__$1,(86),inst_125232);
} else {
if((state_val_125325 === (14))){
var inst_125020 = (state_125324[(32)]);
var state_125324__$1 = state_125324;
var statearr_125484_126369 = state_125324__$1;
(statearr_125484_126369[(2)] = inst_125020);

(statearr_125484_126369[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (45))){
var inst_125132 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
var statearr_125485_126370 = state_125324__$1;
(statearr_125485_126370[(2)] = inst_125132);

(statearr_125485_126370[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (53))){
var inst_125122 = (state_125324[(47)]);
var state_125324__$1 = state_125324;
var statearr_125486_126371 = state_125324__$1;
(statearr_125486_126371[(2)] = inst_125122);

(statearr_125486_126371[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (78))){
var inst_125153 = (state_125324[(8)]);
var state_125324__$1 = state_125324;
var statearr_125487_126372 = state_125324__$1;
(statearr_125487_126372[(2)] = inst_125153);

(statearr_125487_126372[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (26))){
var inst_125059 = (state_125324[(34)]);
var inst_125077 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_125059);
var state_125324__$1 = state_125324;
var statearr_125488_126373 = state_125324__$1;
(statearr_125488_126373[(2)] = inst_125077);

(statearr_125488_126373[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (16))){
var inst_125051 = (state_125324[(18)]);
var inst_125015 = (state_125324[(20)]);
var inst_125046 = (state_125324[(11)]);
var inst_125054 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inst_125051,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","waiting-resolver","com.wsscode.pathom.connect/waiting-resolver",-321792495),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","waiting-key","com.wsscode.pathom.connect/waiting-key",261572653),inst_125015], 0));
var inst_125055 = com.wsscode.pathom.trace.trace(inst_125046,inst_125054);
var inst_125057 = com.wsscode.pathom.parser.watch_pending_key(inst_125046,inst_125015);
var state_125324__$1 = (function (){var statearr_125489 = state_125324;
(statearr_125489[(52)] = inst_125055);

return statearr_125489;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125324__$1,(19),inst_125057);
} else {
if((state_val_125325 === (81))){
var inst_125212 = (state_125324[(53)]);
var state_125324__$1 = state_125324;
var statearr_125490_126374 = state_125324__$1;
(statearr_125490_126374[(2)] = inst_125212);

(statearr_125490_126374[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (79))){
var inst_125009 = (state_125324[(21)]);
var inst_125212 = (state_125324[(2)]);
var inst_125213 = cljs.core.seq(inst_125009);
var state_125324__$1 = (function (){var statearr_125492 = state_125324;
(statearr_125492[(53)] = inst_125212);

return statearr_125492;
})();
if(inst_125213){
var statearr_125493_126375 = state_125324__$1;
(statearr_125493_126375[(1)] = (80));

} else {
var statearr_125494_126376 = state_125324__$1;
(statearr_125494_126376[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (38))){
var inst_125046 = (state_125324[(11)]);
var inst_125093 = com.wsscode.pathom.connect.parallel_batch(inst_125046);
var state_125324__$1 = state_125324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125324__$1,(41),inst_125093);
} else {
if((state_val_125325 === (98))){
var inst_125002 = (state_125324[(13)]);
var inst_125276 = (state_125324[(50)]);
var inst_125281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_125276,(0),null);
var inst_125282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_125276,(1),null);
var inst_125283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_125276,(2),null);
var tmp125491 = inst_125002;
var inst_124999 = inst_125281;
var inst_125000 = inst_125282;
var inst_125001 = inst_125283;
var inst_125002__$1 = tmp125491;
var state_125324__$1 = (function (){var statearr_125496 = state_125324;
(statearr_125496[(13)] = inst_125002__$1);

(statearr_125496[(15)] = inst_125001);

(statearr_125496[(16)] = inst_124999);

(statearr_125496[(17)] = inst_125000);

return statearr_125496;
})();
var statearr_125497_126377 = state_125324__$1;
(statearr_125497_126377[(2)] = null);

(statearr_125497_126377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (87))){
var inst_125234 = (state_125324[(33)]);
var inst_125002 = (state_125324[(13)]);
var inst_125239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_125234,(0),null);
var inst_125240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_125234,(1),null);
var inst_125241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_125234,(2),null);
var tmp125495 = inst_125002;
var inst_124999 = inst_125239;
var inst_125000 = inst_125240;
var inst_125001 = inst_125241;
var inst_125002__$1 = tmp125495;
var state_125324__$1 = (function (){var statearr_125498 = state_125324;
(statearr_125498[(13)] = inst_125002__$1);

(statearr_125498[(15)] = inst_125001);

(statearr_125498[(16)] = inst_124999);

(statearr_125498[(17)] = inst_125000);

return statearr_125498;
})();
var statearr_125499_126378 = state_125324__$1;
(statearr_125499_126378[(2)] = null);

(statearr_125499_126378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (30))){
var state_125324__$1 = state_125324;
var statearr_125500_126379 = state_125324__$1;
(statearr_125500_126379[(2)] = new cljs.core.Keyword("com.wsscode.pathom.connect","watch-ready","com.wsscode.pathom.connect/watch-ready",943560359));

(statearr_125500_126379[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (73))){
var inst_125195 = (state_125324[(48)]);
var inst_125046 = (state_125324[(11)]);
var inst_125200 = com.wsscode.pathom.core.add_error(inst_125046,inst_125195);
var state_125324__$1 = state_125324;
var statearr_125501_126380 = state_125324__$1;
(statearr_125501_126380[(2)] = inst_125200);

(statearr_125501_126380[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (96))){
var inst_125308 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
var statearr_125502_126381 = state_125324__$1;
(statearr_125502_126381[(2)] = inst_125308);

(statearr_125502_126381[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (10))){
var state_125324__$1 = state_125324;
var statearr_125503_126382 = state_125324__$1;
(statearr_125503_126382[(2)] = true);

(statearr_125503_126382[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (18))){
var inst_125051 = (state_125324[(18)]);
var inst_125043 = (state_125324[(19)]);
var inst_125015 = (state_125324[(20)]);
var inst_125045 = (state_125324[(7)]);
var inst_125002 = (state_125324[(13)]);
var inst_125001 = (state_125324[(15)]);
var inst_124999 = (state_125324[(16)]);
var inst_125009 = (state_125324[(21)]);
var inst_125000 = (state_125324[(17)]);
var inst_125042 = (state_125324[(22)]);
var inst_125016 = (state_125324[(9)]);
var inst_125046 = (state_125324[(11)]);
var inst_125136 = (state_125324[(24)]);
var inst_125044 = (state_125324[(25)]);
var inst_125008 = (state_125324[(26)]);
var inst_124996 = (state_125324[(27)]);
var inst_125041 = (state_125324[(28)]);
var inst_125048 = (state_125324[(29)]);
var inst_124997 = (state_125324[(30)]);
var inst_125136__$1 = (state_125324[(2)]);
var inst_125137 = (function (){var input = inst_125044;
var vec__124992 = plan;
var step = inst_125008;
var seq__124993 = inst_124997;
var map__125014 = inst_125041;
var key_SINGLEQUOTE_ = inst_125015;
var G__124991 = inst_124999;
var response = inst_125136__$1;
var cache_QMARK_ = inst_125042;
var out_left = inst_125001;
var failed_resolvers = inst_125000;
var vec__125011 = inst_125008;
var batch_QMARK_ = inst_125043;
var output = inst_125045;
var env__$2 = inst_125046;
var e = inst_125048;
var resolver_sym = inst_125016;
var waiting__$1 = inst_125002;
var trace_data = inst_125051;
var resolver = inst_125041;
var first__124994 = inst_124996;
var vec__125004 = inst_124999;
var tail = inst_125009;
var first__125006 = inst_125008;
var seq__125005 = inst_125009;
return ((function (input,vec__124992,step,seq__124993,map__125014,key_SINGLEQUOTE_,G__124991,response,cache_QMARK_,out_left,failed_resolvers,vec__125011,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,first__124994,vec__125004,tail,first__125006,seq__125005,inst_125051,inst_125043,inst_125015,inst_125045,inst_125002,inst_125001,inst_124999,inst_125009,inst_125000,inst_125042,inst_125016,inst_125046,inst_125136,inst_125044,inst_125008,inst_124996,inst_125041,inst_125048,inst_124997,inst_125136__$1,state_val_125325,c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (value,error){
var c__39003__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto____$1,input,vec__124992,step,seq__124993,map__125014,key_SINGLEQUOTE_,G__124991,response,cache_QMARK_,out_left,failed_resolvers,vec__125011,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,first__124994,vec__125004,tail,first__125006,seq__125005,inst_125051,inst_125043,inst_125015,inst_125045,inst_125002,inst_125001,inst_124999,inst_125009,inst_125000,inst_125042,inst_125016,inst_125046,inst_125136,inst_125044,inst_125008,inst_124996,inst_125041,inst_125048,inst_124997,inst_125136__$1,state_val_125325,c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto____$1,input,vec__124992,step,seq__124993,map__125014,key_SINGLEQUOTE_,G__124991,response,cache_QMARK_,out_left,failed_resolvers,vec__125011,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,first__124994,vec__125004,tail,first__125006,seq__125005,inst_125051,inst_125043,inst_125015,inst_125045,inst_125002,inst_125001,inst_124999,inst_125009,inst_125000,inst_125042,inst_125016,inst_125046,inst_125136,inst_125044,inst_125008,inst_124996,inst_125041,inst_125048,inst_124997,inst_125136__$1,state_val_125325,c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (state_125526){
var state_val_125527 = (state_125526[(1)]);
if((state_val_125527 === (1))){
var inst_125504 = (state_125526[(7)]);
var inst_125507 = (state_125526[(8)]);
var inst_125504__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers,resolver_sym,error);
var inst_125505 = (function (){var failed_resolvers__$1 = inst_125504__$1;
return ((function (failed_resolvers__$1,inst_125504,inst_125507,inst_125504__$1,state_val_125527,c__39003__auto____$1,input,vec__124992,step,seq__124993,map__125014,key_SINGLEQUOTE_,G__124991,response,cache_QMARK_,out_left,failed_resolvers,vec__125011,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,first__124994,vec__125004,tail,first__125006,seq__125005,inst_125051,inst_125043,inst_125015,inst_125045,inst_125002,inst_125001,inst_124999,inst_125009,inst_125000,inst_125042,inst_125016,inst_125046,inst_125136,inst_125044,inst_125008,inst_124996,inst_125041,inst_125048,inst_124997,inst_125136__$1,state_val_125325,c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (p1__124979_SHARP_){
var x__4222__auto__ = ((function (){var or__4131__auto__ = p1__124979_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() * (2));
var y__4223__auto__ = max_resolver_weight;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});
;})(failed_resolvers__$1,inst_125504,inst_125507,inst_125504__$1,state_val_125527,c__39003__auto____$1,input,vec__124992,step,seq__124993,map__125014,key_SINGLEQUOTE_,G__124991,response,cache_QMARK_,out_left,failed_resolvers,vec__125011,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,first__124994,vec__125004,tail,first__125006,seq__125005,inst_125051,inst_125043,inst_125015,inst_125045,inst_125002,inst_125001,inst_124999,inst_125009,inst_125000,inst_125042,inst_125016,inst_125046,inst_125136,inst_125044,inst_125008,inst_124996,inst_125041,inst_125048,inst_124997,inst_125136__$1,state_val_125325,c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_125506 = com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$2,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_125505], 0));
var inst_125507__$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$2,inst_125504__$1);
var state_125526__$1 = (function (){var statearr_125528 = state_125526;
(statearr_125528[(7)] = inst_125504__$1);

(statearr_125528[(8)] = inst_125507__$1);

(statearr_125528[(9)] = inst_125506);

return statearr_125528;
})();
if(cljs.core.truth_(inst_125507__$1)){
var statearr_125529_126383 = state_125526__$1;
(statearr_125529_126383[(1)] = (2));

} else {
var statearr_125530_126384 = state_125526__$1;
(statearr_125530_126384[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125527 === (2))){
var inst_125507 = (state_125526[(8)]);
var inst_125513 = (state_125526[(10)]);
var inst_125512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_125507,(0),null);
var inst_125513__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_125507,(1),null);
var inst_125514 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_125515 = [out,inst_125513__$1,value];
var inst_125516 = cljs.core.PersistentHashMap.fromArrays(inst_125514,inst_125515);
var state_125526__$1 = (function (){var statearr_125531 = state_125526;
(statearr_125531[(10)] = inst_125513__$1);

(statearr_125531[(11)] = inst_125512);

return statearr_125531;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_125526__$1,(5),ch,inst_125516);
} else {
if((state_val_125527 === (3))){
var state_125526__$1 = state_125526;
var statearr_125532_126385 = state_125526__$1;
(statearr_125532_126385[(2)] = null);

(statearr_125532_126385[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125527 === (4))){
var inst_125524 = (state_125526[(2)]);
var state_125526__$1 = state_125526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_125526__$1,inst_125524);
} else {
if((state_val_125527 === (5))){
var inst_125504 = (state_125526[(7)]);
var inst_125513 = (state_125526[(10)]);
var inst_125512 = (state_125526[(11)]);
var inst_125518 = (state_125526[(2)]);
var inst_125519 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_125520 = [inst_125512,inst_125504,inst_125513];
var inst_125521 = (new cljs.core.PersistentVector(null,3,(5),inst_125519,inst_125520,null));
var state_125526__$1 = (function (){var statearr_125533 = state_125526;
(statearr_125533[(12)] = inst_125518);

return statearr_125533;
})();
var statearr_125534_126386 = state_125526__$1;
(statearr_125534_126386[(2)] = inst_125521);

(statearr_125534_126386[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39003__auto____$1,input,vec__124992,step,seq__124993,map__125014,key_SINGLEQUOTE_,G__124991,response,cache_QMARK_,out_left,failed_resolvers,vec__125011,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,first__124994,vec__125004,tail,first__125006,seq__125005,inst_125051,inst_125043,inst_125015,inst_125045,inst_125002,inst_125001,inst_124999,inst_125009,inst_125000,inst_125042,inst_125016,inst_125046,inst_125136,inst_125044,inst_125008,inst_124996,inst_125041,inst_125048,inst_124997,inst_125136__$1,state_val_125325,c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
;
return ((function (switch__38929__auto__,c__39003__auto____$1,input,vec__124992,step,seq__124993,map__125014,key_SINGLEQUOTE_,G__124991,response,cache_QMARK_,out_left,failed_resolvers,vec__125011,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,first__124994,vec__125004,tail,first__125006,seq__125005,inst_125051,inst_125043,inst_125015,inst_125045,inst_125002,inst_125001,inst_124999,inst_125009,inst_125000,inst_125042,inst_125016,inst_125046,inst_125136,inst_125044,inst_125008,inst_124996,inst_125041,inst_125048,inst_124997,inst_125136__$1,state_val_125325,c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto____0 = (function (){
var statearr_125535 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_125535[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto__);

(statearr_125535[(1)] = (1));

return statearr_125535;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto____1 = (function (state_125526){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_125526);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e125536){if((e125536 instanceof Object)){
var ex__38933__auto__ = e125536;
var statearr_125537_126387 = state_125526;
(statearr_125537_126387[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_125526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e125536;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__126388 = state_125526;
state_125526 = G__126388;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto__ = function(state_125526){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto____1.call(this,state_125526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto____$1,input,vec__124992,step,seq__124993,map__125014,key_SINGLEQUOTE_,G__124991,response,cache_QMARK_,out_left,failed_resolvers,vec__125011,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,first__124994,vec__125004,tail,first__125006,seq__125005,inst_125051,inst_125043,inst_125015,inst_125045,inst_125002,inst_125001,inst_124999,inst_125009,inst_125000,inst_125042,inst_125016,inst_125046,inst_125136,inst_125044,inst_125008,inst_124996,inst_125041,inst_125048,inst_124997,inst_125136__$1,state_val_125325,c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var state__39005__auto__ = (function (){var statearr_125538 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_125538[(6)] = c__39003__auto____$1);

return statearr_125538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto____$1,input,vec__124992,step,seq__124993,map__125014,key_SINGLEQUOTE_,G__124991,response,cache_QMARK_,out_left,failed_resolvers,vec__125011,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,first__124994,vec__125004,tail,first__125006,seq__125005,inst_125051,inst_125043,inst_125015,inst_125045,inst_125002,inst_125001,inst_124999,inst_125009,inst_125000,inst_125042,inst_125016,inst_125046,inst_125136,inst_125044,inst_125008,inst_124996,inst_125041,inst_125048,inst_124997,inst_125136__$1,state_val_125325,c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
);

return c__39003__auto____$1;
});
;})(input,vec__124992,step,seq__124993,map__125014,key_SINGLEQUOTE_,G__124991,response,cache_QMARK_,out_left,failed_resolvers,vec__125011,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,first__124994,vec__125004,tail,first__125006,seq__125005,inst_125051,inst_125043,inst_125015,inst_125045,inst_125002,inst_125001,inst_124999,inst_125009,inst_125000,inst_125042,inst_125016,inst_125046,inst_125136,inst_125044,inst_125008,inst_124996,inst_125041,inst_125048,inst_124997,inst_125136__$1,state_val_125325,c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_125138 = (new cljs.core.Keyword("com.wsscode.pathom.parser","watch-pending-timeout","com.wsscode.pathom.parser/watch-pending-timeout",1047721820) === inst_125136__$1);
var state_125324__$1 = (function (){var statearr_125539 = state_125324;
(statearr_125539[(23)] = inst_125137);

(statearr_125539[(24)] = inst_125136__$1);

return statearr_125539;
})();
if(cljs.core.truth_(inst_125138)){
var statearr_125540_126389 = state_125324__$1;
(statearr_125540_126389[(1)] = (56));

} else {
var statearr_125541_126390 = state_125324__$1;
(statearr_125541_126390[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (52))){
var inst_125118 = (state_125324[(2)]);
var inst_125119 = com.wsscode.common.async_cljs.throw_err(inst_125118);
var state_125324__$1 = state_125324;
var statearr_125542_126391 = state_125324__$1;
(statearr_125542_126391[(2)] = inst_125119);

(statearr_125542_126391[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (67))){
var inst_125227 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
var statearr_125543_126392 = state_125324__$1;
(statearr_125543_126392[(2)] = inst_125227);

(statearr_125543_126392[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (71))){
var inst_125051 = (state_125324[(18)]);
var inst_125043 = (state_125324[(19)]);
var inst_125015 = (state_125324[(20)]);
var inst_125045 = (state_125324[(7)]);
var inst_125002 = (state_125324[(13)]);
var inst_125153 = (state_125324[(8)]);
var inst_125195 = (state_125324[(48)]);
var inst_125001 = (state_125324[(15)]);
var inst_124999 = (state_125324[(16)]);
var inst_125009 = (state_125324[(21)]);
var inst_125000 = (state_125324[(17)]);
var inst_125042 = (state_125324[(22)]);
var inst_125137 = (state_125324[(23)]);
var inst_125016 = (state_125324[(9)]);
var inst_125182 = (state_125324[(14)]);
var inst_125046 = (state_125324[(11)]);
var inst_125044 = (state_125324[(25)]);
var inst_125008 = (state_125324[(26)]);
var inst_124996 = (state_125324[(27)]);
var inst_125041 = (state_125324[(28)]);
var inst_125048 = (state_125324[(29)]);
var inst_124997 = (state_125324[(30)]);
var inst_125192 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_125193 = [inst_125153,inst_125015];
var inst_125194 = cljs.core.PersistentHashMap.fromArrays(inst_125192,inst_125193);
var inst_125195__$1 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_125194);
var inst_125196 = (function (){var input = inst_125044;
var vec__124992 = plan;
var step = inst_125008;
var seq__124993 = inst_124997;
var map__125014 = inst_125041;
var key_SINGLEQUOTE_ = inst_125015;
var G__124991 = inst_124999;
var response = inst_125153;
var cache_QMARK_ = inst_125042;
var out_left = inst_125001;
var failed_resolvers = inst_125000;
var vec__125011 = inst_125008;
var temp__5718__auto____$1 = inst_125182;
var err = inst_125195__$1;
var batch_QMARK_ = inst_125043;
var output = inst_125045;
var env__$2 = inst_125046;
var e = inst_125048;
var resolver_sym = inst_125016;
var waiting__$1 = inst_125002;
var trace_data = inst_125051;
var resolver = inst_125041;
var first__124994 = inst_124996;
var replan = inst_125137;
var vec__125004 = inst_124999;
var tail = inst_125009;
var first__125006 = inst_125008;
var seq__125005 = inst_125009;
return ((function (input,vec__124992,step,seq__124993,map__125014,key_SINGLEQUOTE_,G__124991,response,cache_QMARK_,out_left,failed_resolvers,vec__125011,temp__5718__auto____$1,err,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,first__124994,replan,vec__125004,tail,first__125006,seq__125005,inst_125051,inst_125043,inst_125015,inst_125045,inst_125002,inst_125153,inst_125195,inst_125001,inst_124999,inst_125009,inst_125000,inst_125042,inst_125137,inst_125016,inst_125182,inst_125046,inst_125044,inst_125008,inst_124996,inst_125041,inst_125048,inst_124997,inst_125192,inst_125193,inst_125194,inst_125195__$1,state_val_125325,c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (p1__124981_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__124981_SHARP_], 0));
});
;})(input,vec__124992,step,seq__124993,map__125014,key_SINGLEQUOTE_,G__124991,response,cache_QMARK_,out_left,failed_resolvers,vec__125011,temp__5718__auto____$1,err,batch_QMARK_,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,first__124994,replan,vec__125004,tail,first__125006,seq__125005,inst_125051,inst_125043,inst_125015,inst_125045,inst_125002,inst_125153,inst_125195,inst_125001,inst_124999,inst_125009,inst_125000,inst_125042,inst_125137,inst_125016,inst_125182,inst_125046,inst_125044,inst_125008,inst_124996,inst_125041,inst_125048,inst_124997,inst_125192,inst_125193,inst_125194,inst_125195__$1,state_val_125325,c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_125197 = com.wsscode.pathom.core.swap_entity_BANG_(inst_125046,inst_125196);
var inst_125198 = cljs.core.seq(inst_125009);
var state_125324__$1 = (function (){var statearr_125544 = state_125324;
(statearr_125544[(48)] = inst_125195__$1);

(statearr_125544[(54)] = inst_125197);

return statearr_125544;
})();
if(inst_125198){
var statearr_125545_126393 = state_125324__$1;
(statearr_125545_126393[(1)] = (73));

} else {
var statearr_125546_126394 = state_125324__$1;
(statearr_125546_126394[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (42))){
var inst_125105 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
var statearr_125547_126395 = state_125324__$1;
(statearr_125547_126395[(2)] = inst_125105);

(statearr_125547_126395[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (80))){
var inst_125015 = (state_125324[(20)]);
var inst_125212 = (state_125324[(53)]);
var inst_125215 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_125212,inst_125015,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882));
var state_125324__$1 = state_125324;
var statearr_125548_126396 = state_125324__$1;
(statearr_125548_126396[(2)] = inst_125215);

(statearr_125548_126396[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (37))){
var inst_125091 = (state_125324[(2)]);
var state_125324__$1 = state_125324;
if(cljs.core.truth_(inst_125091)){
var statearr_125549_126397 = state_125324__$1;
(statearr_125549_126397[(1)] = (38));

} else {
var statearr_125550_126398 = state_125324__$1;
(statearr_125550_126398[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (63))){
var inst_125136 = (state_125324[(24)]);
var inst_125229 = com.wsscode.common.async_cljs.error_QMARK_(inst_125136);
var state_125324__$1 = state_125324;
if(inst_125229){
var statearr_125551_126399 = state_125324__$1;
(statearr_125551_126399[(1)] = (83));

} else {
var statearr_125552_126400 = state_125324__$1;
(statearr_125552_126400[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (94))){
var inst_125137 = (state_125324[(23)]);
var inst_125136 = (state_125324[(24)]);
var inst_125269 = cljs.core.PersistentHashMap.EMPTY;
var inst_125270 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_125271 = [inst_125136];
var inst_125272 = cljs.core.PersistentHashMap.fromArrays(inst_125270,inst_125271);
var inst_125273 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_125272);
var inst_125274 = (inst_125137.cljs$core$IFn$_invoke$arity$2 ? inst_125137.cljs$core$IFn$_invoke$arity$2(inst_125269,inst_125273) : inst_125137.call(null,inst_125269,inst_125273));
var state_125324__$1 = state_125324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125324__$1,(97),inst_125274);
} else {
if((state_val_125325 === (8))){
var state_125324__$1 = state_125324;
var statearr_125553_126401 = state_125324__$1;
(statearr_125553_126401[(2)] = false);

(statearr_125553_126401[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125325 === (49))){
var inst_125114 = (state_125324[(40)]);
var state_125324__$1 = state_125324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125324__$1,(52),inst_125114);
} else {
if((state_val_125325 === (84))){
var state_125324__$1 = state_125324;
var statearr_125554_126402 = state_125324__$1;
(statearr_125554_126402[(1)] = (94));



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
});})(c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
;
return ((function (switch__38929__auto__,c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto____0 = (function (){
var statearr_125556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_125556[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto__);

(statearr_125556[(1)] = (1));

return statearr_125556;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto____1 = (function (state_125324){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_125324);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e125557){if((e125557 instanceof Object)){
var ex__38933__auto__ = e125557;
var statearr_125558_126403 = state_125324;
(statearr_125558_126403[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_125324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e125557;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__126404 = state_125324;
state_125324 = G__126404;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto__ = function(state_125324){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto____1.call(this,state_125324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var state__39005__auto__ = (function (){var statearr_125559 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_125559[(6)] = c__39003__auto___126268);

return statearr_125559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto___126268,ch,key,params,env__$1,vec__124985,plan,out,temp__5718__auto__,map__124983,map__124983__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
);


return ch;
})()], null);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.index_reader = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),(function (p__125560){
var map__125561 = p__125560;
var map__125561__$1 = (((((!((map__125561 == null))))?(((((map__125561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125561):map__125561);
var env = map__125561__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125561__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(indexes,env);
})], null);
com.wsscode.pathom.connect.indexed_ident = (function com$wsscode$pathom$connect$indexed_ident(p__125563){
var map__125564 = p__125563;
var map__125564__$1 = (((((!((map__125564 == null))))?(((((map__125564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125564):map__125564);
var env = map__125564__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125564__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
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
com.wsscode.pathom.connect.resolver = (function com$wsscode$pathom$connect$resolver(sym,p__125566,resolve){
var map__125567 = p__125566;
var map__125567__$1 = (((((!((map__125567 == null))))?(((((map__125567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125567):map__125567);
var options = map__125567__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125567__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322));
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Resolver name must be a symbol","\n","(symbol? sym)"].join('')));
}

var G__125569 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),resolve], null),options], 0));
if(cljs.core.truth_(transform)){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__125569) : transform.call(null,G__125569));
} else {
return G__125569;
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
com.wsscode.pathom.connect.mutation = (function com$wsscode$pathom$connect$mutation(sym,p__125570,mutate){
var map__125571 = p__125570;
var map__125571__$1 = (((((!((map__125571 == null))))?(((((map__125571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125571):map__125571);
var options = map__125571__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125571__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322));
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Mutation name must be a symbol","\n","(symbol? sym)"].join('')));
}

var G__125573 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),mutate], null),options], 0));
if(cljs.core.truth_(transform)){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__125573) : transform.call(null,G__125573));
} else {
return G__125573;
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
var G__125575 = arguments.length;
switch (G__125575) {
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
var res__44802__auto__ = (function (){var G__125576 = env;
var G__125577 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null);
return (multi_fn.cljs$core$IFn$_invoke$arity$2 ? multi_fn.cljs$core$IFn$_invoke$arity$2(G__125576,G__125577) : multi_fn.call(null,G__125576,G__125577));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44802__auto__)){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,res__44802__auto__){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,res__44802__auto__){
return (function (state_125589){
var state_val_125590 = (state_125589[(1)]);
if((state_val_125590 === (1))){
var state_125589__$1 = state_125589;
var statearr_125591_126406 = state_125589__$1;
(statearr_125591_126406[(2)] = null);

(statearr_125591_126406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125590 === (2))){
var inst_125587 = (state_125589[(2)]);
var state_125589__$1 = state_125589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_125589__$1,inst_125587);
} else {
if((state_val_125590 === (3))){
var inst_125578 = (state_125589[(2)]);
var state_125589__$1 = state_125589;
var statearr_125592_126407 = state_125589__$1;
(statearr_125592_126407[(2)] = inst_125578);


cljs.core.async.impl.ioc_helpers.process_exception(state_125589__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125590 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_125589,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_125589__$1 = state_125589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125589__$1,(5),res__44802__auto__);
} else {
if((state_val_125590 === (5))){
var inst_125583 = (state_125589[(2)]);
var inst_125584 = com.wsscode.common.async_cljs.throw_err(inst_125583);
var inst_125585 = cljs.core.first(inst_125584);
var state_125589__$1 = state_125589;
var statearr_125593_126408 = state_125589__$1;
(statearr_125593_126408[(2)] = inst_125585);


cljs.core.async.impl.ioc_helpers.process_exception(state_125589__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39003__auto__,res__44802__auto__))
;
return ((function (switch__38929__auto__,c__39003__auto__,res__44802__auto__){
return (function() {
var com$wsscode$pathom$connect$state_machine__38930__auto__ = null;
var com$wsscode$pathom$connect$state_machine__38930__auto____0 = (function (){
var statearr_125594 = [null,null,null,null,null,null,null];
(statearr_125594[(0)] = com$wsscode$pathom$connect$state_machine__38930__auto__);

(statearr_125594[(1)] = (1));

return statearr_125594;
});
var com$wsscode$pathom$connect$state_machine__38930__auto____1 = (function (state_125589){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_125589);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e125595){if((e125595 instanceof Object)){
var ex__38933__auto__ = e125595;
var statearr_125596_126409 = state_125589;
(statearr_125596_126409[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_125589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e125595;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__126410 = state_125589;
state_125589 = G__126410;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$connect$state_machine__38930__auto__ = function(state_125589){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$state_machine__38930__auto____1.call(this,state_125589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$state_machine__38930__auto____0;
com$wsscode$pathom$connect$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$state_machine__38930__auto____1;
return com$wsscode$pathom$connect$state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,res__44802__auto__))
})();
var state__39005__auto__ = (function (){var statearr_125597 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_125597[(6)] = c__39003__auto__);

return statearr_125597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,res__44802__auto__))
);

return c__39003__auto__;
} else {
var res = res__44802__auto__;
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
return (function (p__125598){
var map__125599 = p__125598;
var map__125599__$1 = (((((!((map__125599 == null))))?(((((map__125599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125599):map__125599);
var resolver = map__125599__$1;
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125599__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(resolver,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$1(((function (map__125599,map__125599__$1,resolver,resolve){
return (function (env,inputs){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,map__125599,map__125599__$1,resolver,resolve){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,map__125599,map__125599__$1,resolver,resolve){
return (function (state_125611){
var state_val_125612 = (state_125611[(1)]);
if((state_val_125612 === (1))){
var inst_125601 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var inst_125602 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var inst_125603 = cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(inst_125601,inputs);
var inst_125604 = (function (){var from_chan = inst_125601;
var out_chan = inst_125602;
return ((function (from_chan,out_chan,inst_125601,inst_125602,inst_125603,state_val_125612,c__39003__auto__,map__125599,map__125599__$1,resolver,resolve){
return (function com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline(input,res_ch){
var c__39003__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto____$1,from_chan,out_chan,inst_125601,inst_125602,inst_125603,state_val_125612,c__39003__auto__,map__125599,map__125599__$1,resolver,resolve){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto____$1,from_chan,out_chan,inst_125601,inst_125602,inst_125603,state_val_125612,c__39003__auto__,map__125599,map__125599__$1,resolver,resolve){
return (function (state_125625){
var state_val_125626 = (state_125625[(1)]);
if((state_val_125626 === (1))){
var inst_125613 = (state_125625[(7)]);
var inst_125613__$1 = (resolve.cljs$core$IFn$_invoke$arity$2 ? resolve.cljs$core$IFn$_invoke$arity$2(env,input) : resolve.call(null,env,input));
var inst_125614 = com.wsscode.common.async_cljs.chan_QMARK_(inst_125613__$1);
var state_125625__$1 = (function (){var statearr_125627 = state_125625;
(statearr_125627[(7)] = inst_125613__$1);

return statearr_125627;
})();
if(inst_125614){
var statearr_125628_126411 = state_125625__$1;
(statearr_125628_126411[(1)] = (2));

} else {
var statearr_125629_126412 = state_125625__$1;
(statearr_125629_126412[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125626 === (2))){
var inst_125613 = (state_125625[(7)]);
var state_125625__$1 = state_125625;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125625__$1,(5),inst_125613);
} else {
if((state_val_125626 === (3))){
var inst_125613 = (state_125625[(7)]);
var state_125625__$1 = state_125625;
var statearr_125630_126413 = state_125625__$1;
(statearr_125630_126413[(2)] = inst_125613);

(statearr_125630_126413[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125626 === (4))){
var inst_125620 = (state_125625[(2)]);
var state_125625__$1 = state_125625;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_125625__$1,(6),res_ch,inst_125620);
} else {
if((state_val_125626 === (5))){
var inst_125617 = (state_125625[(2)]);
var state_125625__$1 = state_125625;
var statearr_125631_126414 = state_125625__$1;
(statearr_125631_126414[(2)] = inst_125617);

(statearr_125631_126414[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125626 === (6))){
var inst_125622 = (state_125625[(2)]);
var inst_125623 = cljs.core.async.close_BANG_(res_ch);
var state_125625__$1 = (function (){var statearr_125632 = state_125625;
(statearr_125632[(8)] = inst_125622);

return statearr_125632;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_125625__$1,inst_125623);
} else {
return null;
}
}
}
}
}
}
});})(c__39003__auto____$1,from_chan,out_chan,inst_125601,inst_125602,inst_125603,state_val_125612,c__39003__auto__,map__125599,map__125599__$1,resolver,resolve))
;
return ((function (switch__38929__auto__,c__39003__auto____$1,from_chan,out_chan,inst_125601,inst_125602,inst_125603,state_val_125612,c__39003__auto__,map__125599,map__125599__$1,resolver,resolve){
return (function() {
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38930__auto____0 = (function (){
var statearr_125633 = [null,null,null,null,null,null,null,null,null];
(statearr_125633[(0)] = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38930__auto__);

(statearr_125633[(1)] = (1));

return statearr_125633;
});
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38930__auto____1 = (function (state_125625){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_125625);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e125634){if((e125634 instanceof Object)){
var ex__38933__auto__ = e125634;
var statearr_125635_126415 = state_125625;
(statearr_125635_126415[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_125625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e125634;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__126416 = state_125625;
state_125625 = G__126416;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38930__auto__ = function(state_125625){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38930__auto____1.call(this,state_125625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38930__auto____0;
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38930__auto____1;
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto____$1,from_chan,out_chan,inst_125601,inst_125602,inst_125603,state_val_125612,c__39003__auto__,map__125599,map__125599__$1,resolver,resolve))
})();
var state__39005__auto__ = (function (){var statearr_125636 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_125636[(6)] = c__39003__auto____$1);

return statearr_125636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto____$1,from_chan,out_chan,inst_125601,inst_125602,inst_125603,state_val_125612,c__39003__auto__,map__125599,map__125599__$1,resolver,resolve))
);

return c__39003__auto____$1;
});
;})(from_chan,out_chan,inst_125601,inst_125602,inst_125603,state_val_125612,c__39003__auto__,map__125599,map__125599__$1,resolver,resolve))
})();
var inst_125605 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4(n,inst_125602,inst_125604,inst_125601);
var inst_125606 = cljs.core.PersistentVector.EMPTY;
var inst_125607 = cljs.core.async.into(inst_125606,inst_125602);
var state_125611__$1 = (function (){var statearr_125637 = state_125611;
(statearr_125637[(7)] = inst_125605);

(statearr_125637[(8)] = inst_125603);

return statearr_125637;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125611__$1,(2),inst_125607);
} else {
if((state_val_125612 === (2))){
var inst_125609 = (state_125611[(2)]);
var state_125611__$1 = state_125611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_125611__$1,inst_125609);
} else {
return null;
}
}
});})(c__39003__auto__,map__125599,map__125599__$1,resolver,resolve))
;
return ((function (switch__38929__auto__,c__39003__auto__,map__125599,map__125599__$1,resolver,resolve){
return (function() {
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38930__auto____0 = (function (){
var statearr_125638 = [null,null,null,null,null,null,null,null,null];
(statearr_125638[(0)] = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38930__auto__);

(statearr_125638[(1)] = (1));

return statearr_125638;
});
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38930__auto____1 = (function (state_125611){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_125611);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e125639){if((e125639 instanceof Object)){
var ex__38933__auto__ = e125639;
var statearr_125640_126417 = state_125611;
(statearr_125640_126417[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_125611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e125639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__126418 = state_125611;
state_125611 = G__126418;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38930__auto__ = function(state_125611){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38930__auto____1.call(this,state_125611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38930__auto____0;
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38930__auto____1;
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,map__125599,map__125599__$1,resolver,resolve))
})();
var state__39005__auto__ = (function (){var statearr_125641 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_125641[(6)] = c__39003__auto__);

return statearr_125641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,map__125599,map__125599__$1,resolver,resolve))
);

return c__39003__auto__;
});})(map__125599,map__125599__$1,resolver,resolve))
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
com.wsscode.pathom.connect.mutation_dispatch_embedded = (function com$wsscode$pathom$connect$mutation_dispatch_embedded(p__125642,entity){
var map__125643 = p__125642;
var map__125643__$1 = (((((!((map__125643 == null))))?(((((map__125643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125643):map__125643);
var env = map__125643__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125643__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var sym = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
var map__125645 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym], null));
var map__125645__$1 = (((((!((map__125645 == null))))?(((((map__125645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125645):map__125645);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125645__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112));
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ",["Can't find mutate fn for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),"\n","mutate"].join('')));
}

return (mutate.cljs$core$IFn$_invoke$arity$2 ? mutate.cljs$core$IFn$_invoke$arity$2(env,entity) : mutate.call(null,env,entity));
});
/**
 * Sync mutate function to integrate connect mutations to pathom parser.
 */
com.wsscode.pathom.connect.mutate = (function com$wsscode$pathom$connect$mutate(p__125647,sym_SINGLEQUOTE_,p__125648){
var map__125649 = p__125647;
var map__125649__$1 = (((((!((map__125649 == null))))?(((((map__125649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125649):map__125649);
var env = map__125649__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125649__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var mutate_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125649__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069));
var mutation_join_globals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__125649__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.PersistentVector.EMPTY);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125649__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__125650 = p__125648;
var map__125650__$1 = (((((!((map__125650 == null))))?(((((map__125650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125650):map__125650);
var input = map__125650__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125650__$1,new cljs.core.Keyword("pathom","context","pathom/context",-1452257614));
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym_SINGLEQUOTE_], null));
if(cljs.core.truth_(temp__5718__auto__)){
var map__125653 = temp__5718__auto__;
var map__125653__$1 = (((((!((map__125653 == null))))?(((((map__125653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125653):map__125653);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125653__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),sym);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env__$1,map__125653,map__125653__$1,sym,temp__5718__auto__,map__125649,map__125649__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__125650,map__125650__$1,input,context){
return (function (){
var res = (function (){var G__125655 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","source-mutation","com.wsscode.pathom.connect/source-mutation",-674985123),sym_SINGLEQUOTE_);
var G__125656 = input;
return (mutate_dispatch.cljs$core$IFn$_invoke$arity$2 ? mutate_dispatch.cljs$core$IFn$_invoke$arity$2(G__125655,G__125656) : mutate_dispatch.call(null,G__125655,G__125656));
})();
var res__$1 = (function (){var G__125657 = res;
if(cljs.core.truth_((function (){var and__4120__auto__ = context;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.map_QMARK_(res);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__125657,context], 0));
} else {
return G__125657;
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
});})(env__$1,map__125653,map__125653__$1,sym,temp__5718__auto__,map__125649,map__125649__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__125650,map__125650__$1,input,context))
], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Mutation not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutation","mutation",-285823378),sym_SINGLEQUOTE_], null));
}
});
/**
 * Async mutate function to integrate connect mutations to pathom parser.
 */
com.wsscode.pathom.connect.mutate_async = (function com$wsscode$pathom$connect$mutate_async(p__125658,sym_SINGLEQUOTE_,p__125659){
var map__125660 = p__125658;
var map__125660__$1 = (((((!((map__125660 == null))))?(((((map__125660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125660):map__125660);
var env = map__125660__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125660__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var mutate_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125660__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069));
var mutation_join_globals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__125660__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.PersistentVector.EMPTY);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125660__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__125661 = p__125659;
var map__125661__$1 = (((((!((map__125661 == null))))?(((((map__125661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125661):map__125661);
var input = map__125661__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125661__$1,new cljs.core.Keyword("pathom","context","pathom/context",-1452257614));
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym_SINGLEQUOTE_], null));
if(cljs.core.truth_(temp__5718__auto__)){
var map__125664 = temp__5718__auto__;
var map__125664__$1 = (((((!((map__125664 == null))))?(((((map__125664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125664):map__125664);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125664__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),sym);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env__$1,map__125664,map__125664__$1,sym,temp__5718__auto__,map__125660,map__125660__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__125661,map__125661__$1,input,context){
return (function (){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,env__$1,map__125664,map__125664__$1,sym,temp__5718__auto__,map__125660,map__125660__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__125661,map__125661__$1,input,context){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,env__$1,map__125664,map__125664__$1,sym,temp__5718__auto__,map__125660,map__125660__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__125661,map__125661__$1,input,context){
return (function (state_125705){
var state_val_125706 = (state_125705[(1)]);
if((state_val_125706 === (7))){
var inst_125679 = (state_125705[(2)]);
var state_125705__$1 = (function (){var statearr_125707 = state_125705;
(statearr_125707[(7)] = inst_125679);

return statearr_125707;
})();
if(cljs.core.truth_(context)){
var statearr_125708_126419 = state_125705__$1;
(statearr_125708_126419[(1)] = (9));

} else {
var statearr_125709_126420 = state_125705__$1;
(statearr_125709_126420[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125706 === (1))){
var state_125705__$1 = state_125705;
var statearr_125710_126421 = state_125705__$1;
(statearr_125710_126421[(2)] = null);

(statearr_125710_126421[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125706 === (4))){
var inst_125671 = (state_125705[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_125705,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_125670 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","source-mutation","com.wsscode.pathom.connect/source-mutation",-674985123),sym_SINGLEQUOTE_);
var inst_125671__$1 = (mutate_dispatch.cljs$core$IFn$_invoke$arity$2 ? mutate_dispatch.cljs$core$IFn$_invoke$arity$2(inst_125670,input) : mutate_dispatch.call(null,inst_125670,input));
var inst_125672 = com.wsscode.common.async_cljs.chan_QMARK_(inst_125671__$1);
var state_125705__$1 = (function (){var statearr_125711 = state_125705;
(statearr_125711[(8)] = inst_125671__$1);

return statearr_125711;
})();
if(inst_125672){
var statearr_125712_126422 = state_125705__$1;
(statearr_125712_126422[(1)] = (5));

} else {
var statearr_125713_126423 = state_125705__$1;
(statearr_125713_126423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125706 === (15))){
var inst_125690 = (state_125705[(9)]);
var inst_125692 = cljs.core.select_keys(inst_125690,mutation_join_globals);
var inst_125693 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_125690);
var inst_125694 = com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(inst_125693,env__$1);
var state_125705__$1 = (function (){var statearr_125714 = state_125705;
(statearr_125714[(10)] = inst_125692);

return statearr_125714;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125705__$1,(18),inst_125694);
} else {
if((state_val_125706 === (13))){
var inst_125679 = (state_125705[(7)]);
var state_125705__$1 = state_125705;
var statearr_125715_126424 = state_125705__$1;
(statearr_125715_126424[(2)] = inst_125679);

(statearr_125715_126424[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125706 === (6))){
var inst_125671 = (state_125705[(8)]);
var state_125705__$1 = state_125705;
var statearr_125716_126425 = state_125705__$1;
(statearr_125716_126425[(2)] = inst_125671);

(statearr_125716_126425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125706 === (17))){
var inst_125701 = (state_125705[(2)]);
var state_125705__$1 = state_125705;
var statearr_125717_126426 = state_125705__$1;
(statearr_125717_126426[(2)] = inst_125701);


cljs.core.async.impl.ioc_helpers.process_exception(state_125705__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125706 === (3))){
var inst_125666 = (state_125705[(2)]);
var state_125705__$1 = state_125705;
var statearr_125718_126427 = state_125705__$1;
(statearr_125718_126427[(2)] = inst_125666);


cljs.core.async.impl.ioc_helpers.process_exception(state_125705__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125706 === (12))){
var inst_125679 = (state_125705[(7)]);
var inst_125687 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_125679,context], 0));
var state_125705__$1 = state_125705;
var statearr_125719_126428 = state_125705__$1;
(statearr_125719_126428[(2)] = inst_125687);

(statearr_125719_126428[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125706 === (2))){
var inst_125703 = (state_125705[(2)]);
var state_125705__$1 = state_125705;
return cljs.core.async.impl.ioc_helpers.return_chan(state_125705__$1,inst_125703);
} else {
if((state_val_125706 === (11))){
var inst_125685 = (state_125705[(2)]);
var state_125705__$1 = state_125705;
if(cljs.core.truth_(inst_125685)){
var statearr_125720_126429 = state_125705__$1;
(statearr_125720_126429[(1)] = (12));

} else {
var statearr_125721_126430 = state_125705__$1;
(statearr_125721_126430[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125706 === (9))){
var inst_125679 = (state_125705[(7)]);
var inst_125682 = cljs.core.map_QMARK_(inst_125679);
var state_125705__$1 = state_125705;
var statearr_125722_126431 = state_125705__$1;
(statearr_125722_126431[(2)] = inst_125682);

(statearr_125722_126431[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125706 === (5))){
var inst_125671 = (state_125705[(8)]);
var state_125705__$1 = state_125705;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125705__$1,(8),inst_125671);
} else {
if((state_val_125706 === (14))){
var inst_125690 = (state_125705[(2)]);
var state_125705__$1 = (function (){var statearr_125723 = state_125705;
(statearr_125723[(9)] = inst_125690);

return statearr_125723;
})();
if(cljs.core.truth_(query)){
var statearr_125724_126432 = state_125705__$1;
(statearr_125724_126432[(1)] = (15));

} else {
var statearr_125725_126433 = state_125705__$1;
(statearr_125725_126433[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125706 === (16))){
var inst_125690 = (state_125705[(9)]);
var state_125705__$1 = state_125705;
var statearr_125726_126434 = state_125705__$1;
(statearr_125726_126434[(2)] = inst_125690);

(statearr_125726_126434[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125706 === (10))){
var state_125705__$1 = state_125705;
var statearr_125727_126435 = state_125705__$1;
(statearr_125727_126435[(2)] = context);

(statearr_125727_126435[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125706 === (18))){
var inst_125692 = (state_125705[(10)]);
var inst_125696 = (state_125705[(2)]);
var inst_125697 = com.wsscode.common.async_cljs.throw_err(inst_125696);
var inst_125698 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_125692,inst_125697], 0));
var state_125705__$1 = state_125705;
var statearr_125728_126436 = state_125705__$1;
(statearr_125728_126436[(2)] = inst_125698);

(statearr_125728_126436[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125706 === (8))){
var inst_125675 = (state_125705[(2)]);
var inst_125676 = com.wsscode.common.async_cljs.throw_err(inst_125675);
var state_125705__$1 = state_125705;
var statearr_125729_126437 = state_125705__$1;
(statearr_125729_126437[(2)] = inst_125676);

(statearr_125729_126437[(1)] = (7));


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
});})(c__39003__auto__,env__$1,map__125664,map__125664__$1,sym,temp__5718__auto__,map__125660,map__125660__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__125661,map__125661__$1,input,context))
;
return ((function (switch__38929__auto__,c__39003__auto__,env__$1,map__125664,map__125664__$1,sym,temp__5718__auto__,map__125660,map__125660__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__125661,map__125661__$1,input,context){
return (function() {
var com$wsscode$pathom$connect$mutate_async_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$connect$mutate_async_$_state_machine__38930__auto____0 = (function (){
var statearr_125730 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_125730[(0)] = com$wsscode$pathom$connect$mutate_async_$_state_machine__38930__auto__);

(statearr_125730[(1)] = (1));

return statearr_125730;
});
var com$wsscode$pathom$connect$mutate_async_$_state_machine__38930__auto____1 = (function (state_125705){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_125705);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e125731){if((e125731 instanceof Object)){
var ex__38933__auto__ = e125731;
var statearr_125732_126438 = state_125705;
(statearr_125732_126438[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_125705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e125731;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__126439 = state_125705;
state_125705 = G__126439;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$connect$mutate_async_$_state_machine__38930__auto__ = function(state_125705){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$mutate_async_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$mutate_async_$_state_machine__38930__auto____1.call(this,state_125705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$mutate_async_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$mutate_async_$_state_machine__38930__auto____0;
com$wsscode$pathom$connect$mutate_async_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$mutate_async_$_state_machine__38930__auto____1;
return com$wsscode$pathom$connect$mutate_async_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,env__$1,map__125664,map__125664__$1,sym,temp__5718__auto__,map__125660,map__125660__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__125661,map__125661__$1,input,context))
})();
var state__39005__auto__ = (function (){var statearr_125733 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_125733[(6)] = c__39003__auto__);

return statearr_125733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,env__$1,map__125664,map__125664__$1,sym,temp__5718__auto__,map__125660,map__125660__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__125661,map__125661__$1,input,context))
);

return c__39003__auto__;
});})(env__$1,map__125664,map__125664__$1,sym,temp__5718__auto__,map__125660,map__125660__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__125661,map__125661__$1,input,context))
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
com.wsscode.pathom.connect.discover_attrs = (function com$wsscode$pathom$connect$discover_attrs(p__125738,ctx){
var map__125739 = p__125738;
var map__125739__$1 = (((((!((map__125739 == null))))?(((((map__125739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125739):map__125739);
var index = map__125739__$1;
var index_io = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125739__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125739__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache","com.wsscode.pathom.connect/cache",328991776));
return com.wsscode.pathom.connect.cached(cache,ctx,((function (map__125739,map__125739__$1,index,index_io,cache){
return (function (){
var base_keys = (((cljs.core.count(ctx) > (1)))?(function (){var tree = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__125739,map__125739__$1,index,index_io,cache){
return (function (a,b){
var attrs = (function (){var G__125741 = index;
var G__125742 = cljs.core.vec(b);
return (com.wsscode.pathom.connect.discover_attrs.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.discover_attrs.cljs$core$IFn$_invoke$arity$2(G__125741,G__125742) : com.wsscode.pathom.connect.discover_attrs.call(null,G__125741,G__125742));
})();
if((a == null)){
return attrs;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(a,cljs.core.reverse(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(b)),com.wsscode.pathom.connect.merge_io,attrs);
}
});})(map__125739,map__125739__$1,index,index_io,cache))
,null,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__125739,map__125739__$1,index,index_io,cache){
return (function (p1__125735_SHARP_,p2__125734_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(p2__125734_SHARP_) - (p1__125735_SHARP_ + (1))),p2__125734_SHARP_);
});})(map__125739,map__125739__$1,index,index_io,cache))
,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.count(ctx) - (1)),ctx)));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.vec(cljs.core.next(cljs.core.reverse(ctx))));
})():com.wsscode.pathom.connect.merge_io(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(index_io,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.first(ctx)], null)),cljs.core.get.cljs$core$IFn$_invoke$arity$3(index_io,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(ctx)]),cljs.core.PersistentArrayMap.EMPTY)));
var available = index_io;
var collected = base_keys;
while(true){
var attrs = cljs.core.set(cljs.core.keys(collected));
var matches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (available,collected,attrs,base_keys,map__125739,map__125739__$1,index,index_io,cache){
return (function (p__125747){
var vec__125748 = p__125747;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125748,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__125748,(1),null);
return cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(k,attrs));
});})(available,collected,attrs,base_keys,map__125739,map__125739__$1,index,index_io,cache))
,available);
if(cljs.core.seq(matches)){
var G__126440 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (available,collected,attrs,matches,base_keys,map__125739,map__125739__$1,index,index_io,cache){
return (function (p1__125736_SHARP_,p2__125737_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__125736_SHARP_,p2__125737_SHARP_);
});})(available,collected,attrs,matches,base_keys,map__125739,map__125739__$1,index,index_io,cache))
,available,cljs.core.keys(matches));
var G__126441 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.connect.merge_io,collected,cljs.core.vals(matches));
available = G__126440;
collected = G__126441;
continue;
} else {
return collected;
}
break;
}
});})(map__125739,map__125739__$1,index,index_io,cache))
);
});
/**
 * This will use the ::index-resolvers to re-build the index. You might need that if in development you changed some definitions
 *   and got in a dirty state somehow
 */
com.wsscode.pathom.connect.reprocess_index = (function com$wsscode$pathom$connect$reprocess_index(p__125751){
var map__125752 = p__125751;
var map__125752__$1 = (((((!((map__125752 == null))))?(((((map__125752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125752):map__125752);
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125752__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256));
return cljs.core.reduce_kv(com.wsscode.pathom.connect.add,cljs.core.PersistentArrayMap.EMPTY,index_resolvers);
});
/**
 * Helper function to transform a data into an output shape.
 */
com.wsscode.pathom.connect.data__GT_shape = (function com$wsscode$pathom$connect$data__GT_shape(data){
if(cljs.core.map_QMARK_(data)){
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,(function (p1__125754_SHARP_){
if(cljs.core.map_QMARK_(p1__125754_SHARP_)){
return cljs.core.ffirst(p1__125754_SHARP_);
} else {
return p1__125754_SHARP_;
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
com.wsscode.pathom.connect.batch_restore_sort = (function com$wsscode$pathom$connect$batch_restore_sort(p__125756,items){
var map__125757 = p__125756;
var map__125757__$1 = (((((!((map__125757 == null))))?(((((map__125757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125757):map__125757);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125757__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","inputs","com.wsscode.pathom.connect/inputs",-1635802936));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125757__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","key","com.wsscode.pathom.connect/key",1316653363));
var batch_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125757__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch-default","com.wsscode.pathom.connect/batch-default",2069925724));
var index = cljs.core.group_by(key,items);
var batch_default__$1 = (function (){var or__4131__auto__ = batch_default;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,index,map__125757,map__125757__$1,inputs,key,batch_default){
return (function (p1__125755_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([key],[cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__125755_SHARP_,key)]);
});
;})(or__4131__auto__,index,map__125757,map__125757__$1,inputs,key,batch_default))
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (index,batch_default__$1,map__125757,map__125757__$1,inputs,key,batch_default){
return (function (input){
var or__4131__auto__ = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,key)));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (batch_default__$1.cljs$core$IFn$_invoke$arity$1 ? batch_default__$1.cljs$core$IFn$_invoke$arity$1(input) : batch_default__$1.call(null,input));
}
});})(index,batch_default__$1,map__125757,map__125757__$1,inputs,key,batch_default))
),inputs);
});
com.wsscode.pathom.connect.index_explorer_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","index-explorer-resolver","com.wsscode.pathom.connect/index-explorer-resolver",-1613438284,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))], null);
}));
com.wsscode.pathom.connect.indexes_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","indexes-resolver","com.wsscode.pathom.connect/indexes-resolver",-1892611171,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","autocomplete-ignore","com.wsscode.pathom.connect/autocomplete-ignore",-191717401),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null)], null)], null)], null)], null)], null),(function (env,_){
return cljs.core.select_keys(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null));
}));
com.wsscode.pathom.connect.resolver_weights_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","resolver-weights-resolver","com.wsscode.pathom.connect/resolver-weights-resolver",-600539046,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),(function (){var G__125759 = env;
var G__125759__$1 = (((G__125759 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772).cljs$core$IFn$_invoke$arity$1(G__125759));
if((G__125759__$1 == null)){
return null;
} else {
return cljs.core.deref(G__125759__$1);
}
})()], null);
}));
com.wsscode.pathom.connect.resolver_weights_sorted_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","resolver-weights-sorted-resolver","com.wsscode.pathom.connect/resolver-weights-sorted-resolver",-1672618105,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights-sorted","com.wsscode.pathom.connect/resolver-weights-sorted",1502939218)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights-sorted","com.wsscode.pathom.connect/resolver-weights-sorted",1502939218),(function (){var G__125762 = env;
var G__125762__$1 = (((G__125762 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772).cljs$core$IFn$_invoke$arity$1(G__125762));
var G__125762__$2 = (((G__125762__$1 == null))?null:cljs.core.deref(G__125762__$1));
if((G__125762__$2 == null)){
return null;
} else {
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.second,((function (G__125762,G__125762__$1,G__125762__$2){
return (function (p1__125761_SHARP_,p2__125760_SHARP_){
return cljs.core.compare(p2__125760_SHARP_,p1__125761_SHARP_);
});})(G__125762,G__125762__$1,G__125762__$2))
,G__125762__$2);
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
var G__125764 = arguments.length;
switch (G__125764) {
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

com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1 = (function (p__125765){
var map__125766 = p__125765;
var map__125766__$1 = (((((!((map__125766 == null))))?(((((map__125766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125766):map__125766);
var env = map__125766__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125766__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var indexes__$1 = (function (){var or__4131__auto__ = indexes;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var pool_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser2","com.wsscode.pathom.core/wrap-parser2",776559497),((function (indexes__$1,pool_chan,map__125766,map__125766__$1,env,indexes){
return (function com$wsscode$pathom$connect$connect_wrap_parser(parser,p__125768){
var map__125769 = p__125768;
var map__125769__$1 = (((((!((map__125769 == null))))?(((((map__125769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__125769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__125769):map__125769);
var plugins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__125769__$1,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796));
var plugin_registry = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),plugins);
var resolver_weights = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(indexes__$1,com.wsscode.pathom.connect.register,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plugin_registry,cljs.core.get.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),cljs.core.PersistentVector.EMPTY)], null));

return ((function (plugin_registry,resolver_weights,map__125769,map__125769__$1,plugins,indexes__$1,pool_chan,map__125766,map__125766__$1,env,indexes){
return (function (env__$1,tx){
var G__125771 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.connect.resolver_dispatch_embedded,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069),com.wsscode.pathom.connect.mutation_dispatch_embedded,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.deref(indexes__$1),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),resolver_weights,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449),pool_chan], null),env__$1], 0));
var G__125772 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__125771,G__125772) : parser.call(null,G__125771,G__125772));
});
;})(plugin_registry,resolver_weights,map__125769,map__125769__$1,plugins,indexes__$1,pool_chan,map__125766,map__125766__$1,env,indexes))
});})(indexes__$1,pool_chan,map__125766,map__125766__$1,env,indexes))
,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),indexes__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.connect.connect_resolvers], null);
});

com.wsscode.pathom.connect.connect_plugin.cljs$lang$maxFixedArity = 1;

if(com.wsscode.pathom.misc.INCLUDE_SPECS){
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","add","com.wsscode.pathom.connect/add",-52020600,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"blank","blank",-1249652109)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentArrayMap.EMPTY])], null),null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__125773){
return cljs.core.map_QMARK_(G__125773);
})], null),(function (G__125773){
return cljs.core.map_QMARK_(G__125773);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)])),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","add-mutation","com.wsscode.pathom.connect/add-mutation",-1209253784,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"blank","blank",-1249652109)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentArrayMap.EMPTY])], null),null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__125774){
return cljs.core.map_QMARK_(G__125774);
})], null),(function (G__125774){
return cljs.core.map_QMARK_(G__125774);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)])),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",1254247877,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"register","register",1968522516)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","pick-resolver","com.wsscode.pathom.connect/pick-resolver",162465702,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__125775){
return cljs.core.map_QMARK_(G__125775);
}),(function (G__125775){
return cljs.core.contains_QMARK_(G__125775,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
})], null),(function (G__125775){
return ((cljs.core.map_QMARK_(G__125775)) && (cljs.core.contains_QMARK_(G__125775,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null)]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","path-cost","com.wsscode.pathom.connect/path-cost",-825763067,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"plan","plan",1118952668)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__125776){
return cljs.core.coll_QMARK_(G__125776);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))], null),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","project-parent-query-attributes","com.wsscode.pathom.connect/project-parent-query-attributes",-418196403,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","defresolver","com.wsscode.pathom.connect/defresolver",1615901468,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.simple_symbol_QMARK_,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"any?","any?",-318999933,null),cljs.core.any_QMARK_,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__125777){
return ((cljs.core.vector_QMARK_(G__125777)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.bounded_count((2),G__125777))));
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"count","count",2139924085),(2),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2))], null),null),cljs.core.any_QMARK_,cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","alias-resolver","com.wsscode.pathom.connect/alias-resolver",920724457,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","alias-resolver2","com.wsscode.pathom.connect/alias-resolver2",-133273996,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","defmutation","com.wsscode.pathom.connect/defmutation",642780868,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.simple_symbol_QMARK_,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"any?","any?",-318999933,null),cljs.core.any_QMARK_,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__125778){
return ((cljs.core.vector_QMARK_(G__125778)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.bounded_count((2),G__125778))));
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"count","count",2139924085),(2),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2))], null),null),cljs.core.any_QMARK_,cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","discover-attrs","com.wsscode.pathom.connect/discover-attrs",-1426753571,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"ctx","ctx",-493610118),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"ctx","ctx",-493610118),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"ctx","ctx",-493610118)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__125779){
return cljs.core.coll_QMARK_(G__125779);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"ctx","ctx",-493610118),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462),null,null,null));
} else {
}

//# sourceMappingURL=com.wsscode.pathom.connect.js.map
