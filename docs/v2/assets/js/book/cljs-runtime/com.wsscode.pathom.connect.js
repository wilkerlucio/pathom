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

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__48965){
return cljs.core.set_QMARK_(G__48965);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"set","set",304602554)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__48972){
return cljs.core.set_QMARK_(G__48972);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48999){
return cljs.core.map_QMARK_(G__48999);
})], null),(function (G__48999){
return cljs.core.map_QMARK_(G__48999);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation","com.wsscode.pathom.connect/mutation",-1953746968),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49094){
return cljs.core.map_QMARK_(G__49094);
})], null),(function (G__49094){
return cljs.core.map_QMARK_(G__49094);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"plain","plain",1368629269),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"composed","composed",-1510693384),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plain","plain",1368629269),new cljs.core.Keyword(null,"composed","composed",-1510693384)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49119){
return cljs.core.map_QMARK_(G__49119);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),null)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attribute-list","attribute-list",1391116942),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1)),new cljs.core.Keyword(null,"union","union",2142937499),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribute-list","attribute-list",1391116942),new cljs.core.Keyword(null,"union","union",2142937499)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49140){
return ((cljs.core.vector_QMARK_(G__49140)) && (((((function (){var or__4131__auto__ = (1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((1)
,G__49140))) && ((cljs.core.bounded_count((1)
,G__49140) <= (function (){var or__4131__auto__ = null;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (9007199254740991);
}
})())))));
}),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","out-attribute","com.wsscode.pathom.connect/out-attribute",-2052467515),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(1),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49156){
return cljs.core.map_QMARK_(G__49156);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))], null),null)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49178){
return cljs.core.map_QMARK_(G__49178);
}),(function (G__49178){
return cljs.core.contains_QMARK_(G__49178,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
})], null),(function (G__49178){
return ((cljs.core.map_QMARK_(G__49178)) && (cljs.core.contains_QMARK_(G__49178,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),cljs.core.list(new cljs.core.Symbol("com.wsscode.pathom.connect","atom-with","com.wsscode.pathom.connect/atom-with",1449744364,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null))),com.wsscode.pathom.connect.atom_with(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol(null,"number?","number?",-1747282210,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.number_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49235){
return cljs.core.map_QMARK_(G__49235);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null))], null),null)));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49242){
return cljs.core.map_QMARK_(G__49242);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49246){
return cljs.core.map_QMARK_(G__49246);
}),(function (G__49246){
return cljs.core.contains_QMARK_(G__49246,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
})], null),(function (G__49246){
return ((cljs.core.map_QMARK_(G__49246)) && (cljs.core.contains_QMARK_(G__49246,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutations","com.wsscode.pathom.connect/mutations",1762289215),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49299){
return cljs.core.map_QMARK_(G__49299);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49307){
return cljs.core.map_QMARK_(G__49307);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49313){
return cljs.core.map_QMARK_(G__49313);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("s","coll-of","s/coll-of",-1705285349,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol(null,"set?","set?",1636014792,null))),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49335){
return cljs.core.set_QMARK_(G__49335);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49332){
return cljs.core.map_QMARK_(G__49332);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49341){
return cljs.core.map_QMARK_(G__49341);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-paths","com.wsscode.pathom.connect/attribute-paths",-969708455))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49346){
return cljs.core.map_QMARK_(G__49346);
})], null),(function (G__49346){
return cljs.core.map_QMARK_(G__49346);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","tuple","s/tuple",1167863840,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49367){
return cljs.core.set_QMARK_(G__49367);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),cljs.core.ifn_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069),new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),cljs.core.ifn_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49371){
return cljs.core.coll_QMARK_(G__49371);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.spec.alpha.rep_PLUS_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null)));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword(null,"deep","deep",2090866875),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-simple-key","com.wsscode.pathom.connect/attr-reach-via-simple-key",299497188),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-deep-key","com.wsscode.pathom.connect/attr-reach-via-deep-key",1875587274)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49379){
return cljs.core.map_QMARK_(G__49379);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via-key","com.wsscode.pathom.connect/attr-reach-via-key",-729847714),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"deep","deep",2090866875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"deep","deep",2090866875)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49384){
return ((cljs.core.vector_QMARK_(G__49384)) && (((((function (){var or__4131__auto__ = (2);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((2)
,G__49384))) && ((cljs.core.bounded_count((2)
,G__49384) <= (function (){var or__4131__auto__ = null;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (9007199254740991);
}
})())))));
}),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"min-count","min-count",1594709013),(2),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49392){
return cljs.core.map_QMARK_(G__49392);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides-key","com.wsscode.pathom.connect/attr-provides-key",980578124),new cljs.core.Keyword("com.wsscode.pathom.connect","sym-set","com.wsscode.pathom.connect/sym-set",-662703745))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49393){
return cljs.core.set_QMARK_(G__49393);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49402){
return cljs.core.map_QMARK_(G__49402);
})], null),(function (G__49402){
return cljs.core.map_QMARK_(G__49402);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),cljs.core.list(new cljs.core.Symbol("s","or","s/or",1876282981,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"multi","multi",-190293005)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentHashSet.EMPTY]),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)], null),null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49417){
return cljs.core.map_QMARK_(G__49417);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentHashSet.EMPTY,"null"], null), null),new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121)),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute-info","com.wsscode.pathom.connect/attribute-info",1556372253))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49428){
return cljs.core.map_QMARK_(G__49428);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null))),cljs.spec.alpha.merge_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49433){
return cljs.core.map_QMARK_(G__49433);
}),(function (G__49433){
return cljs.core.contains_QMARK_(G__49433,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
}),(function (G__49433){
return cljs.core.contains_QMARK_(G__49433,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
})], null),(function (G__49433){
return ((cljs.core.map_QMARK_(G__49433)) && (cljs.core.contains_QMARK_(G__49433,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))) && (cljs.core.contains_QMARK_(G__49433,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772)))], null),null]))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null))),cljs.spec.alpha.merge_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-data","com.wsscode.pathom.connect/mutation-data",1690706978),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49503){
return cljs.core.map_QMARK_(G__49503);
}),(function (G__49503){
return cljs.core.contains_QMARK_(G__49503,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112));
})], null),(function (G__49503){
return ((cljs.core.map_QMARK_(G__49503)) && (cljs.core.contains_QMARK_(G__49503,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112)))], null),null]))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"resolver","resolver",-1740553583),new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword(null,"mutation","mutation",-285823378),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resolver","resolver",-1740553583),new cljs.core.Keyword(null,"mutation","mutation",-285823378)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-resolver","com.wsscode.pathom.connect/map-resolver",1053659700),new cljs.core.Keyword("com.wsscode.pathom.connect","map-mutation","com.wsscode.pathom.connect/map-mutation",-142491295)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),new cljs.core.Keyword(null,"operations","operations",1630691895),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword(null,"operations","operations",1630691895)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","map-operation","com.wsscode.pathom.connect/map-operation",-1307385750),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49535){
return cljs.core.coll_QMARK_(G__49535);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))], null),null)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)], null)));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49541){
return cljs.core.coll_QMARK_(G__49541);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","path-coordinate","com.wsscode.pathom.connect/path-coordinate",1524310779))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","plan","com.wsscode.pathom.connect/plan",-809870322),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49542){
return cljs.core.coll_QMARK_(G__49542);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","sort-plan","com.wsscode.pathom.connect/sort-plan",-1506396873),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"plan","plan",1118952668)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
} else {
}
/**
 * Get resolver map information in env from the resolver sym.
 */
com.wsscode.pathom.connect.resolver_data = (function com$wsscode$pathom$connect$resolver_data(env_or_indexes,sym){
var idx = (function (){var G__49544 = env_or_indexes;
if(cljs.core.contains_QMARK_(env_or_indexes,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))){
return new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189).cljs$core$IFn$_invoke$arity$1(G__49544);
} else {
return G__49544;
}
})();
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),sym], null));
});
/**
 * Get mutation map information in env from the resolver sym.
 */
com.wsscode.pathom.connect.mutation_data = (function com$wsscode$pathom$connect$mutation_data(env_or_indexes,sym){
var idx = (function (){var G__49545 = env_or_indexes;
if(cljs.core.contains_QMARK_(env_or_indexes,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))){
return new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189).cljs$core$IFn$_invoke$arity$1(G__49545);
} else {
return G__49545;
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
var unions = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__49560){
var vec__49561 = p__49560;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49561,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49561,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.normalize_io.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.connect.normalize_io.call(null,v))], null);
})),output);
var merged = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.connect.merge_io_attrs,cljs.core.vals(unions));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(merged,new cljs.core.Keyword("com.wsscode.pathom.connect","unions","com.wsscode.pathom.connect/unions",-2088386406),unions);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
if(cljs.core.map_QMARK_(x)){
var vec__49564 = cljs.core.first(x);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49564,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49564,(1),null);
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
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (p1__49567_SHARP_,p2__49568_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__49567_SHARP_,p2__49568_SHARP_], 0));
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
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__49572 = cljs.core.get_global_hierarchy;
return (fexpr__49572.cljs$core$IFn$_invoke$arity$0 ? fexpr__49572.cljs$core$IFn$_invoke$arity$0() : fexpr__49572.call(null));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(idx,k,(function (p1__49585_SHARP_){
return (com.wsscode.pathom.connect.index_merger.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.connect.index_merger.cljs$core$IFn$_invoke$arity$3(k,p1__49585_SHARP_,v) : com.wsscode.pathom.connect.index_merger.call(null,k,p1__49585_SHARP_,v));
}));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(idx,k,v);
}
}),ia,ib);
});
com.wsscode.pathom.connect.output_provides_STAR_ = (function com$wsscode$pathom$connect$output_provides_STAR_(p__49589){
var map__49590 = p__49589;
var map__49590__$1 = (((((!((map__49590 == null))))?(((((map__49590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49590):map__49590);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49590__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49590__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__$1 = (cljs.core.truth_((function (){var G__49593 = children;
var G__49593__$1 = (((G__49593 == null))?null:cljs.core.first(G__49593));
var G__49593__$2 = (((G__49593__$1 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__49593__$1));
if((G__49593__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__49593__$2,new cljs.core.Keyword(null,"union","union",2142937499));
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))], 0)):children);
var G__49598 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null);
if(cljs.core.seq(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(G__49598,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (G__49598,children__$1,map__49590,map__49590__$1,key,children){
return (function (x){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__49598,children__$1,map__49590,map__49590__$1,key,children){
return (function (p1__49587_SHARP_){
return cljs.core.vec(cljs.core.flatten((new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[key,p1__49587_SHARP_],null))));
});})(G__49598,children__$1,map__49590,map__49590__$1,key,children))
,x);
});})(G__49598,children__$1,map__49590,map__49590__$1,key,children))
,((function (G__49598,children__$1,map__49590,map__49590__$1,key,children){
return (function (p1__49588_SHARP_){
return (com.wsscode.pathom.connect.output_provides_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.connect.output_provides_STAR_.cljs$core$IFn$_invoke$arity$1(p1__49588_SHARP_) : com.wsscode.pathom.connect.output_provides_STAR_.call(null,p1__49588_SHARP_));
});})(G__49598,children__$1,map__49590,map__49590__$1,key,children))
)),children__$1);
} else {
return G__49598;
}
});
com.wsscode.pathom.connect.output_provides = (function com$wsscode$pathom$connect$output_provides(query){
if(cljs.core.map_QMARK_(query)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.output_provides),cljs.core.vals(query));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.connect.output_provides_STAR_),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(edn_query_language.core.query__GT_ast(query)));
}
});
com.wsscode.pathom.connect.normalized_children = (function com$wsscode$pathom$connect$normalized_children(p__49609){
var map__49611 = p__49609;
var map__49611__$1 = (((((!((map__49611 == null))))?(((((map__49611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49611):map__49611);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49611__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.truth_((function (){var G__49615 = children;
var G__49615__$1 = (((G__49615 == null))?null:cljs.core.first(G__49615));
var G__49615__$2 = (((G__49615__$1 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__49615__$1));
if((G__49615__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__49615__$2,new cljs.core.Keyword(null,"union","union",2142937499));
}
})())){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))], 0));
} else {
return children;
}
});
com.wsscode.pathom.connect.index_attributes = (function com$wsscode$pathom$connect$index_attributes(p__49622){
var map__49623 = p__49622;
var map__49623__$1 = (((((!((map__49623 == null))))?(((((map__49623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49623):map__49623);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49623__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49623__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49623__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var provides = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__49623,map__49623__$1,sym,input,output){
return (function (p1__49619_SHARP_){
return cljs.core.contains_QMARK_(input,p1__49619_SHARP_);
});})(map__49623,map__49623__$1,sym,input,output))
,com.wsscode.pathom.connect.output_provides(output));
var sym_group = cljs.core.PersistentHashSet.createAsIfByAssoc([sym]);
var attr_provides = cljs.core.zipmap(provides,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(sym_group));
var input_count = cljs.core.count(input);
var _LT__GT_ = cljs.core.PersistentArrayMap.EMPTY;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,provides,sym_group,attr_provides,input_count,map__49623,map__49623__$1,sym,input,output){
return (function (idx,in_attr){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,in_attr,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),in_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),attr_provides,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),sym_group], null));
});})(_LT__GT_,provides,sym_group,attr_provides,input_count,map__49623,map__49623__$1,sym,input,output))
,_LT__GT_,(function (){var G__49631 = input_count;
switch (G__49631) {
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
var _LT__GT___$2 = (((input_count > (1)))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,provides,sym_group,attr_provides,input_count,map__49623,map__49623__$1,sym,input,output){
return (function (idx,in_attr){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,in_attr,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),in_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),cljs.core.PersistentHashSet.createAsIfByAssoc([input]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),sym_group], null));
});})(_LT__GT_,_LT__GT___$1,provides,sym_group,attr_provides,input_count,map__49623,map__49623__$1,sym,input,output))
,_LT__GT___$1,input):_LT__GT___$1);
var _LT__GT___$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,_LT__GT___$2,provides,sym_group,attr_provides,input_count,map__49623,map__49623__$1,sym,input,output){
return (function (idx,out_attr){
if(cljs.core.vector_QMARK_(out_attr)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,cljs.core.peek(out_attr),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),cljs.core.peek(out_attr),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null),cljs.core.pop(out_attr)),sym_group]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),sym_group], null));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,out_attr,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),out_attr,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559),cljs.core.PersistentArrayMap.createAsIfByAssoc([input,sym_group]),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),sym_group], null));
}
});})(_LT__GT_,_LT__GT___$1,_LT__GT___$2,provides,sym_group,attr_provides,input_count,map__49623,map__49623__$1,sym,input,output))
,_LT__GT___$2,provides);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__49623,map__49623__$1,sym,input,output){
return (function (idx,p__49639){
var map__49640 = p__49639;
var map__49640__$1 = (((((!((map__49640 == null))))?(((((map__49640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49640):map__49640);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49640__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49640__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__49642 = idx;
if(cljs.core.truth_(key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__49642,key,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(children)?new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732):new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711)),sym_group]));
} else {
return G__49642;
}
});})(_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__49623,map__49623__$1,sym,input,output))
,_LT__GT___$3,((cljs.core.map_QMARK_(output))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__49623,map__49623__$1,sym,input,output){
return (function (p1__49621_SHARP_){
return cljs.core.tree_seq(new cljs.core.Keyword(null,"children","children",-940561982),com.wsscode.pathom.connect.normalized_children,edn_query_language.core.query__GT_ast(p1__49621_SHARP_));
});})(_LT__GT_,_LT__GT___$1,_LT__GT___$2,_LT__GT___$3,provides,sym_group,attr_provides,input_count,map__49623,map__49623__$1,sym,input,output))
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
var G__49651 = arguments.length;
switch (G__49651) {
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
var map__49654 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),cljs.core.PersistentHashSet.EMPTY], null),sym_data], 0));
var map__49654__$1 = (((((!((map__49654 == null))))?(((((map__49654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49654):map__49654);
var sym_data__$1 = map__49654__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49654__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49654__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var input_SINGLEQUOTE_ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input))) && (cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.PersistentHashSet.EMPTY], null)),cljs.core.first(input)))))?cljs.core.PersistentHashSet.EMPTY:input);
return com.wsscode.pathom.connect.merge_indexes(indexes,(function (){var G__49658 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),cljs.core.PersistentArrayMap.createAsIfByAssoc([sym,sym_data__$1]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),com.wsscode.pathom.connect.index_attributes(sym_data__$1),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),cljs.core.PersistentArrayMap.createAsIfByAssoc([input_SINGLEQUOTE_,com.wsscode.pathom.connect.normalize_io(output)]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (input_SINGLEQUOTE_,map__49654,map__49654__$1,sym_data__$1,input,output){
return (function (indexes__$1,out_attr){
var G__49661 = indexes__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([out_attr]),input)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__49661,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out_attr,input], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),sym);
} else {
return G__49661;
}
});})(input_SINGLEQUOTE_,map__49654,map__49654__$1,sym_data__$1,input,output))
,cljs.core.PersistentArrayMap.EMPTY,com.wsscode.pathom.connect.flat_query(output))], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(input_SINGLEQUOTE_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49658,new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(input_SINGLEQUOTE_)]));
} else {
return G__49658;
}
})());
});

com.wsscode.pathom.connect.add.cljs$lang$maxFixedArity = 3;

com.wsscode.pathom.connect.add_mutation = (function com$wsscode$pathom$connect$add_mutation(indexes,sym,p__49672){
var map__49674 = p__49672;
var map__49674__$1 = (((((!((map__49674 == null))))?(((((map__49674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49674):map__49674);
var data = map__49674__$1;
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49674__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49674__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
return com.wsscode.pathom.connect.merge_indexes(indexes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),cljs.core.PersistentArrayMap.createAsIfByAssoc([sym,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym)]),new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),(function (){var _LT__GT_ = cljs.core.PersistentArrayMap.EMPTY;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,map__49674,map__49674__$1,data,params,output){
return (function (idx,attribute){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,attribute,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),cljs.core.PersistentHashSet.createAsIfByAssoc([sym])], null));
});})(_LT__GT_,map__49674,map__49674__$1,data,params,output))
,_LT__GT_,(function (){var G__49678 = params;
var G__49678__$1 = (((G__49678 == null))?null:edn_query_language.core.query__GT_ast(G__49678));
if((G__49678__$1 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast_properties(G__49678__$1);
}
})());
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_LT__GT_,_LT__GT___$1,map__49674,map__49674__$1,data,params,output){
return (function (idx,attribute){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(idx,attribute,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,com.wsscode.pathom.connect.merge_grow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),attribute,new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),cljs.core.PersistentHashSet.createAsIfByAssoc([sym])], null));
});})(_LT__GT_,_LT__GT___$1,map__49674,map__49674__$1,data,params,output))
,_LT__GT___$1,(function (){var G__49680 = output;
var G__49680__$1 = (((G__49680 == null))?null:edn_query_language.core.query__GT_ast(G__49680));
if((G__49680__$1 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast_properties(G__49680__$1);
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
com.wsscode.pathom.connect.sort_resolvers = (function com$wsscode$pathom$connect$sort_resolvers(p__49689,resolvers,e){
var map__49690 = p__49689;
var map__49690__$1 = (((((!((map__49690 == null))))?(((((map__49690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49690):map__49690);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49690__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (map__49690,map__49690__$1,request_cache){
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
});})(map__49690,map__49690__$1,request_cache))
,resolvers);
});
/**
 * DEPRECATED
 */
com.wsscode.pathom.connect.pick_resolver = (function com$wsscode$pathom$connect$pick_resolver(p__49692){
var map__49693 = p__49692;
var map__49693__$1 = (((((!((map__49693 == null))))?(((((map__49693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49693):map__49693);
var env = map__49693__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49693__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var dependency_track = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49693__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null));
if(cljs.core.truth_(temp__5718__auto__)){
var attr_resolvers = temp__5718__auto__;
var r = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword(null,"missing","missing",362507769)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (attr_resolvers,temp__5718__auto__,k,e,map__49693,map__49693__$1,env,indexes,dependency_track){
return (function (p__49696){
var vec__49697 = p__49696;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49697,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49697,(1),null);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.set(cljs.core.keys(e)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"missing","missing",362507769),missing], null);
});})(attr_resolvers,temp__5718__auto__,k,e,map__49693,map__49693__$1,env,indexes,dependency_track))
,attr_resolvers));
var G__49704 = r;
var vec__49706 = G__49704;
var seq__49707 = cljs.core.seq(vec__49706);
var first__49708 = cljs.core.first(seq__49707);
var seq__49707__$1 = cljs.core.next(seq__49707);
var map__49709 = first__49708;
var map__49709__$1 = (((((!((map__49709 == null))))?(((((map__49709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49709):map__49709);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49709__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49709__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var t = seq__49707__$1;
var xs = vec__49706;
var G__49704__$1 = G__49704;
while(true){
var vec__49716 = G__49704__$1;
var seq__49717 = cljs.core.seq(vec__49716);
var first__49718 = cljs.core.first(seq__49717);
var seq__49717__$1 = cljs.core.next(seq__49717);
var map__49719 = first__49718;
var map__49719__$1 = (((((!((map__49719 == null))))?(((((map__49719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49719):map__49719);
var sym__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49719__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var attrs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49719__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var t__$1 = seq__49717__$1;
var xs__$1 = vec__49716;
if(cljs.core.truth_(xs__$1)){
if((!(cljs.core.contains_QMARK_(dependency_track,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,attrs__$1], null))))){
var e__$1 = (function (){try{return com.wsscode.pathom.core.elide_items(com.wsscode.pathom.core.break_values,com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465),true),new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,attrs__$1], null)),attrs__$1));
}catch (e49723){var _ = e49723;
return cljs.core.PersistentArrayMap.EMPTY;
}})();
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attrs__$1),cljs.core.set(cljs.core.keys(e__$1)));
if(cljs.core.seq(missing)){
var G__53618 = t__$1;
G__49704__$1 = G__53618;
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
com.wsscode.pathom.connect.async_pick_resolver = (function com$wsscode$pathom$connect$async_pick_resolver(p__49727){
var map__49728 = p__49727;
var map__49728__$1 = (((((!((map__49728 == null))))?(((((map__49728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49728):map__49728);
var env = map__49728__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49728__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var dependency_track = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49728__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185));
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,map__49728,map__49728__$1,env,indexes,dependency_track){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,map__49728,map__49728__$1,env,indexes,dependency_track){
return (function (state_49881){
var state_val_49882 = (state_49881[(1)]);
if((state_val_49882 === (7))){
var inst_49877 = (state_49881[(2)]);
var state_49881__$1 = state_49881;
var statearr_49883_53631 = state_49881__$1;
(statearr_49883_53631[(2)] = inst_49877);


cljs.core.async.impl.ioc_helpers.process_exception(state_49881__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (20))){
var state_49881__$1 = state_49881;
var statearr_49884_53636 = state_49881__$1;
(statearr_49884_53636[(2)] = false);

(statearr_49884_53636[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (27))){
var inst_49787 = (state_49881[(7)]);
var inst_49818 = (state_49881[(2)]);
var inst_49819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49818,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var inst_49821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49818,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var state_49881__$1 = (function (){var statearr_49885 = state_49881;
(statearr_49885[(8)] = inst_49819);

(statearr_49885[(9)] = inst_49821);

return statearr_49885;
})();
if(cljs.core.truth_(inst_49787)){
var statearr_49887_53638 = state_49881__$1;
(statearr_49887_53638[(1)] = (28));

} else {
var statearr_49888_53639 = state_49881__$1;
(statearr_49888_53639[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (1))){
var state_49881__$1 = state_49881;
var statearr_49889_53640 = state_49881__$1;
(statearr_49889_53640[(2)] = null);

(statearr_49889_53640[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (24))){
var inst_49810 = (state_49881[(2)]);
var state_49881__$1 = state_49881;
var statearr_49890_53644 = state_49881__$1;
(statearr_49890_53644[(2)] = inst_49810);

(statearr_49890_53644[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (39))){
var inst_49819 = (state_49881[(8)]);
var inst_49848 = (state_49881[(10)]);
var inst_49821 = (state_49881[(9)]);
var inst_49858 = [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"s","s",1705939918)];
var inst_49859 = cljs.core.select_keys(inst_49848,inst_49821);
var inst_49860 = com.wsscode.pathom.connect.sort_resolvers(env,inst_49819,inst_49848);
var inst_49861 = cljs.core.first(inst_49860);
var inst_49862 = [inst_49859,inst_49861];
var inst_49863 = cljs.core.PersistentHashMap.fromArrays(inst_49858,inst_49862);
var state_49881__$1 = state_49881;
var statearr_49892_53651 = state_49881__$1;
(statearr_49892_53651[(2)] = inst_49863);

(statearr_49892_53651[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (4))){
var inst_49742 = (state_49881[(11)]);
var inst_49737 = (state_49881[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49881,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_49736 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_49737__$1 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_49736);
var inst_49738 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var inst_49739 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49740 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),inst_49737__$1];
var inst_49741 = (new cljs.core.PersistentVector(null,2,(5),inst_49739,inst_49740,null));
var inst_49742__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_49741);
var state_49881__$1 = (function (){var statearr_49894 = state_49881;
(statearr_49894[(11)] = inst_49742__$1);

(statearr_49894[(12)] = inst_49737__$1);

(statearr_49894[(13)] = inst_49738);

return statearr_49894;
})();
if(cljs.core.truth_(inst_49742__$1)){
var statearr_49895_53659 = state_49881__$1;
(statearr_49895_53659[(1)] = (5));

} else {
var statearr_49896_53661 = state_49881__$1;
(statearr_49896_53661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (15))){
var inst_49759 = (state_49881[(14)]);
var state_49881__$1 = state_49881;
var statearr_49898_53663 = state_49881__$1;
(statearr_49898_53663[(2)] = inst_49759);

(statearr_49898_53663[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (21))){
var inst_49813 = (state_49881[(2)]);
var state_49881__$1 = state_49881;
if(cljs.core.truth_(inst_49813)){
var statearr_49899_53668 = state_49881__$1;
(statearr_49899_53668[(1)] = (25));

} else {
var statearr_49900_53669 = state_49881__$1;
(statearr_49900_53669[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (31))){
var state_49881__$1 = state_49881;
var statearr_49901_53671 = state_49881__$1;
(statearr_49901_53671[(2)] = null);

(statearr_49901_53671[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (32))){
var state_49881__$1 = state_49881;
var statearr_49902_53672 = state_49881__$1;
(statearr_49902_53672[(2)] = null);

(statearr_49902_53672[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (40))){
var inst_49865 = (state_49881[(2)]);
var state_49881__$1 = state_49881;
var statearr_49903_53677 = state_49881__$1;
(statearr_49903_53677[(2)] = inst_49865);

(statearr_49903_53677[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (33))){
var inst_49868 = (state_49881[(2)]);
var state_49881__$1 = state_49881;
var statearr_49904_53678 = state_49881__$1;
(statearr_49904_53678[(2)] = inst_49868);

(statearr_49904_53678[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (13))){
var inst_49776 = (state_49881[(2)]);
var state_49881__$1 = state_49881;
var statearr_49905_53679 = state_49881__$1;
(statearr_49905_53679[(2)] = inst_49776);

(statearr_49905_53679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (22))){
var state_49881__$1 = state_49881;
var statearr_49906_53680 = state_49881__$1;
(statearr_49906_53680[(2)] = true);

(statearr_49906_53680[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (36))){
var inst_49819 = (state_49881[(8)]);
var inst_49821 = (state_49881[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49881,(35),new cljs.core.Keyword(null,"default","default",-1987822328),null,(34));
var inst_49835 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465),true);
var inst_49836 = cljs.core.PersistentHashSet.EMPTY;
var inst_49837 = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,inst_49836);
var inst_49838 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49839 = [inst_49819,inst_49821];
var inst_49840 = (new cljs.core.PersistentVector(null,2,(5),inst_49838,inst_49839,null));
var inst_49841 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_49835,new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185),inst_49837,inst_49840);
var inst_49842 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(inst_49841,inst_49821);
var state_49881__$1 = state_49881;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49881__$1,(37),inst_49842);
} else {
if((state_val_49882 === (29))){
var state_49881__$1 = state_49881;
var statearr_49909_53689 = state_49881__$1;
(statearr_49909_53689[(2)] = null);

(statearr_49909_53689[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (6))){
var state_49881__$1 = state_49881;
var statearr_49912_53694 = state_49881__$1;
(statearr_49912_53694[(2)] = null);

(statearr_49912_53694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (28))){
var inst_49819 = (state_49881[(8)]);
var inst_49821 = (state_49881[(9)]);
var inst_49823 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49824 = [inst_49819,inst_49821];
var inst_49825 = (new cljs.core.PersistentVector(null,2,(5),inst_49823,inst_49824,null));
var inst_49826 = cljs.core.contains_QMARK_(dependency_track,inst_49825);
var inst_49827 = (!(inst_49826));
var state_49881__$1 = state_49881;
if(inst_49827){
var statearr_49914_53702 = state_49881__$1;
(statearr_49914_53702[(1)] = (31));

} else {
var statearr_49916_53703 = state_49881__$1;
(statearr_49916_53703[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (25))){
var inst_49795 = (state_49881[(15)]);
var inst_49815 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49795);
var state_49881__$1 = state_49881;
var statearr_49919_53704 = state_49881__$1;
(statearr_49919_53704[(2)] = inst_49815);

(statearr_49919_53704[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (34))){
var inst_49848 = (state_49881[(10)]);
var inst_49821 = (state_49881[(9)]);
var inst_49848__$1 = (state_49881[(2)]);
var inst_49849 = cljs.core.set(inst_49821);
var inst_49851 = cljs.core.keys(inst_49848__$1);
var inst_49852 = cljs.core.set(inst_49851);
var inst_49853 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_49849,inst_49852);
var inst_49854 = cljs.core.seq(inst_49853);
var state_49881__$1 = (function (){var statearr_49924 = state_49881;
(statearr_49924[(10)] = inst_49848__$1);

return statearr_49924;
})();
if(inst_49854){
var statearr_49925_53707 = state_49881__$1;
(statearr_49925_53707[(1)] = (38));

} else {
var statearr_49926_53708 = state_49881__$1;
(statearr_49926_53708[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (17))){
var inst_49795 = (state_49881[(15)]);
var inst_49787 = (state_49881[(7)]);
var inst_49794 = cljs.core.seq(inst_49787);
var inst_49795__$1 = cljs.core.first(inst_49794);
var inst_49796 = cljs.core.next(inst_49794);
var inst_49798 = (inst_49795__$1 == null);
var inst_49799 = cljs.core.not(inst_49798);
var state_49881__$1 = (function (){var statearr_49934 = state_49881;
(statearr_49934[(15)] = inst_49795__$1);

(statearr_49934[(16)] = inst_49796);

return statearr_49934;
})();
if(inst_49799){
var statearr_49940_53718 = state_49881__$1;
(statearr_49940_53718[(1)] = (19));

} else {
var statearr_49946_53719 = state_49881__$1;
(statearr_49946_53719[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (3))){
var inst_49732 = (state_49881[(2)]);
var state_49881__$1 = state_49881;
var statearr_49955_53722 = state_49881__$1;
(statearr_49955_53722[(2)] = inst_49732);


cljs.core.async.impl.ioc_helpers.process_exception(state_49881__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (12))){
var state_49881__$1 = state_49881;
var statearr_49969_53725 = state_49881__$1;
(statearr_49969_53725[(2)] = false);

(statearr_49969_53725[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (2))){
var inst_49879 = (state_49881[(2)]);
var state_49881__$1 = state_49881;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49881__$1,inst_49879);
} else {
if((state_val_49882 === (23))){
var state_49881__$1 = state_49881;
var statearr_49997_53727 = state_49881__$1;
(statearr_49997_53727[(2)] = false);

(statearr_49997_53727[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (35))){
var inst_49829 = (state_49881[(2)]);
var inst_49830 = cljs.core.PersistentHashMap.EMPTY;
var state_49881__$1 = (function (){var statearr_50000 = state_49881;
(statearr_50000[(17)] = inst_49829);

return statearr_50000;
})();
var statearr_50001_53729 = state_49881__$1;
(statearr_50001_53729[(2)] = inst_49830);


cljs.core.async.impl.ioc_helpers.process_exception(state_49881__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (19))){
var inst_49795 = (state_49881[(15)]);
var inst_49802 = inst_49795.cljs$lang$protocol_mask$partition0$;
var inst_49803 = (inst_49802 & (64));
var inst_49804 = inst_49795.cljs$core$ISeq$;
var inst_49805 = (cljs.core.PROTOCOL_SENTINEL === inst_49804);
var inst_49806 = ((inst_49803) || (inst_49805));
var state_49881__$1 = state_49881;
if(cljs.core.truth_(inst_49806)){
var statearr_50002_53733 = state_49881__$1;
(statearr_50002_53733[(1)] = (22));

} else {
var statearr_50004_53734 = state_49881__$1;
(statearr_50004_53734[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (11))){
var state_49881__$1 = state_49881;
var statearr_50006_53736 = state_49881__$1;
(statearr_50006_53736[(2)] = true);

(statearr_50006_53736[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (9))){
var state_49881__$1 = state_49881;
var statearr_50007_53737 = state_49881__$1;
(statearr_50007_53737[(2)] = false);

(statearr_50007_53737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (5))){
var inst_49742 = (state_49881[(11)]);
var inst_49759 = (state_49881[(14)]);
var inst_49737 = (state_49881[(12)]);
var inst_49748 = (state_49881[(18)]);
var inst_49738 = (state_49881[(13)]);
var inst_49744 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword(null,"missing","missing",362507769));
var inst_49746 = (function (){var k = inst_49737;
var e = inst_49738;
var temp__5718__auto__ = inst_49742;
var attr_resolvers = inst_49742;
return ((function (k,e,temp__5718__auto__,attr_resolvers,inst_49742,inst_49759,inst_49737,inst_49748,inst_49738,inst_49744,state_val_49882,c__38971__auto__,map__49728,map__49728__$1,env,indexes,dependency_track){
return (function (p__49745){
var vec__50013 = p__49745;
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50013,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50013,(1),null);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.set(cljs.core.keys(e)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"missing","missing",362507769),missing], null);
});
;})(k,e,temp__5718__auto__,attr_resolvers,inst_49742,inst_49759,inst_49737,inst_49748,inst_49738,inst_49744,state_val_49882,c__38971__auto__,map__49728,map__49728__$1,env,indexes,dependency_track))
})();
var inst_49747 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_49746,inst_49742);
var inst_49748__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(inst_49744,inst_49747);
var inst_49758 = cljs.core.seq(inst_49748__$1);
var inst_49759__$1 = cljs.core.first(inst_49758);
var inst_49760 = cljs.core.next(inst_49758);
var inst_49765 = (inst_49759__$1 == null);
var inst_49766 = cljs.core.not(inst_49765);
var state_49881__$1 = (function (){var statearr_50019 = state_49881;
(statearr_50019[(14)] = inst_49759__$1);

(statearr_50019[(18)] = inst_49748__$1);

(statearr_50019[(19)] = inst_49760);

return statearr_50019;
})();
if(inst_49766){
var statearr_50020_53752 = state_49881__$1;
(statearr_50020_53752[(1)] = (8));

} else {
var statearr_50022_53753 = state_49881__$1;
(statearr_50022_53753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (14))){
var inst_49759 = (state_49881[(14)]);
var inst_49781 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49759);
var state_49881__$1 = state_49881;
var statearr_50024_53754 = state_49881__$1;
(statearr_50024_53754[(2)] = inst_49781);

(statearr_50024_53754[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (26))){
var inst_49795 = (state_49881[(15)]);
var state_49881__$1 = state_49881;
var statearr_50028_53759 = state_49881__$1;
(statearr_50028_53759[(2)] = inst_49795);

(statearr_50028_53759[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (16))){
var inst_49748 = (state_49881[(18)]);
var inst_49784 = (state_49881[(2)]);
var inst_49785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49784,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var inst_49786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49784,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var inst_49787 = inst_49748;
var state_49881__$1 = (function (){var statearr_50030 = state_49881;
(statearr_50030[(20)] = inst_49785);

(statearr_50030[(21)] = inst_49786);

(statearr_50030[(7)] = inst_49787);

return statearr_50030;
})();
var statearr_50032_53762 = state_49881__$1;
(statearr_50032_53762[(2)] = null);

(statearr_50032_53762[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (38))){
var inst_49796 = (state_49881[(16)]);
var inst_49787 = inst_49796;
var state_49881__$1 = (function (){var statearr_50033 = state_49881;
(statearr_50033[(7)] = inst_49787);

return statearr_50033;
})();
var statearr_50034_53765 = state_49881__$1;
(statearr_50034_53765[(2)] = null);

(statearr_50034_53765[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (30))){
var inst_49871 = (state_49881[(2)]);
var state_49881__$1 = state_49881;
var statearr_50037_53766 = state_49881__$1;
(statearr_50037_53766[(2)] = inst_49871);

(statearr_50037_53766[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (10))){
var inst_49779 = (state_49881[(2)]);
var state_49881__$1 = state_49881;
if(cljs.core.truth_(inst_49779)){
var statearr_50040_53770 = state_49881__$1;
(statearr_50040_53770[(1)] = (14));

} else {
var statearr_50041_53771 = state_49881__$1;
(statearr_50041_53771[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (18))){
var inst_49873 = (state_49881[(2)]);
var state_49881__$1 = state_49881;
var statearr_50046_53772 = state_49881__$1;
(statearr_50046_53772[(2)] = inst_49873);

(statearr_50046_53772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (37))){
var inst_49844 = (state_49881[(2)]);
var inst_49845 = com.wsscode.common.async_cljs.throw_err(inst_49844);
var inst_49846 = com.wsscode.pathom.core.elide_items(com.wsscode.pathom.core.break_values,inst_49845);
var state_49881__$1 = state_49881;
var statearr_50048_53784 = state_49881__$1;
(statearr_50048_53784[(2)] = inst_49846);


cljs.core.async.impl.ioc_helpers.process_exception(state_49881__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (8))){
var inst_49759 = (state_49881[(14)]);
var inst_49768 = inst_49759.cljs$lang$protocol_mask$partition0$;
var inst_49769 = (inst_49768 & (64));
var inst_49770 = inst_49759.cljs$core$ISeq$;
var inst_49771 = (cljs.core.PROTOCOL_SENTINEL === inst_49770);
var inst_49772 = ((inst_49769) || (inst_49771));
var state_49881__$1 = state_49881;
if(cljs.core.truth_(inst_49772)){
var statearr_50053_53786 = state_49881__$1;
(statearr_50053_53786[(1)] = (11));

} else {
var statearr_50054_53790 = state_49881__$1;
(statearr_50054_53790[(1)] = (12));

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
});})(c__38971__auto__,map__49728,map__49728__$1,env,indexes,dependency_track))
;
return ((function (switch__38924__auto__,c__38971__auto__,map__49728,map__49728__$1,env,indexes,dependency_track){
return (function() {
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38925__auto____0 = (function (){
var statearr_50057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50057[(0)] = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38925__auto__);

(statearr_50057[(1)] = (1));

return statearr_50057;
});
var com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38925__auto____1 = (function (state_49881){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_49881);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e50060){if((e50060 instanceof Object)){
var ex__38928__auto__ = e50060;
var statearr_50061_53792 = state_49881;
(statearr_50061_53792[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50060;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53794 = state_49881;
state_49881 = G__53794;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38925__auto__ = function(state_49881){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38925__auto____1.call(this,state_49881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38925__auto____0;
com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38925__auto____1;
return com$wsscode$pathom$connect$async_pick_resolver_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,map__49728,map__49728__$1,env,indexes,dependency_track))
})();
var state__38973__auto__ = (function (){var statearr_50065 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_50065[(6)] = c__38971__auto__);

return statearr_50065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,map__49728,map__49728__$1,env,indexes,dependency_track))
);

return c__38971__auto__;
});
com.wsscode.pathom.connect.default_resolver_dispatch = (function com$wsscode$pathom$connect$default_resolver_dispatch(p__50067,entity){
var map__50068 = p__50067;
var map__50068__$1 = (((((!((map__50068 == null))))?(((((map__50068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50068):map__50068);
var env = map__50068__$1;
var map__50069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50068__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__50069__$1 = (((((!((map__50069 == null))))?(((((map__50069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50069):map__50069);
var resolver = map__50069__$1;
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50069__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Default resolver-dispatch is not supported on CLJS, please implement ::p.connect/resolver-dispatch in your parser environment.",cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Helper method that extract resolver symbol from env. It's recommended to use as a dispatch method for creating
 *   multi-methods for resolver dispatch.
 */
com.wsscode.pathom.connect.resolver_dispatch = (function com$wsscode$pathom$connect$resolver_dispatch(var_args){
var G__50077 = arguments.length;
switch (G__50077) {
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
com.wsscode.pathom.connect.resolver_dispatch_embedded = (function com$wsscode$pathom$connect$resolver_dispatch_embedded(p__50087,entity){
var map__50091 = p__50087;
var map__50091__$1 = (((((!((map__50091 == null))))?(((((map__50091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50091):map__50091);
var env = map__50091__$1;
var map__50093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50091__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073));
var map__50093__$1 = (((((!((map__50093 == null))))?(((((map__50093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50093):map__50093);
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50093__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50093__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
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
var len__4730__auto___53806 = arguments.length;
var i__4731__auto___53807 = (0);
while(true){
if((i__4731__auto___53807 < len__4730__auto___53806)){
args__4736__auto__.push((arguments[i__4731__auto___53807]));

var G__53808 = (i__4731__auto___53807 + (1));
i__4731__auto___53807 = G__53808;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic = (function (p__50163,resolver,args){
var map__50164 = p__50163;
var map__50164__$1 = (((((!((map__50164 == null))))?(((((map__50164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50164):map__50164);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50164__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
if(cljs.core.truth_(resolver_weights)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.swap_BANG_,resolver_weights,cljs.core.update,resolver,args);
} else {
return null;
}
});

com.wsscode.pathom.connect.update_resolver_weight.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.connect.update_resolver_weight.cljs$lang$applyTo = (function (seq50157){
var G__50158 = cljs.core.first(seq50157);
var seq50157__$1 = cljs.core.next(seq50157);
var G__50159 = cljs.core.first(seq50157__$1);
var seq50157__$2 = cljs.core.next(seq50157__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50158,G__50159,seq50157__$2);
});

com.wsscode.pathom.connect.call_resolver_STAR_ = (function com$wsscode$pathom$connect$call_resolver_STAR_(p__50172,entity){
var map__50173 = p__50172;
var map__50173__$1 = (((((!((map__50173 == null))))?(((((map__50173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50173):map__50173);
var env = map__50173__$1;
var resolver_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50173__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.connect.default_resolver_dispatch);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50173__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var resolver_sym = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env));
var tid = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),resolver_sym,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),entity], null));
var start = com.wsscode.pathom.trace.now();
var res__44807__auto__ = (function (){try{return com.wsscode.pathom.core.exec_plugin_actions.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.connect","wrap-resolve","com.wsscode.pathom.connect/wrap-resolve",1728436586),resolver_dispatch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,entity], 0));
}catch (e50179){var e = e50179;
return e;
}})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44807__auto__)){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,res__44807__auto__,resolver_sym,tid,start,map__50173,map__50173__$1,env,resolver_dispatch,resolver_weights){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,res__44807__auto__,resolver_sym,tid,start,map__50173,map__50173__$1,env,resolver_dispatch,resolver_weights){
return (function (state_50213){
var state_val_50214 = (state_50213[(1)]);
if((state_val_50214 === (7))){
var state_50213__$1 = state_50213;
var statearr_50220_53813 = state_50213__$1;
(statearr_50220_53813[(2)] = null);

(statearr_50220_53813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50214 === (1))){
var state_50213__$1 = state_50213;
var statearr_50221_53814 = state_50213__$1;
(statearr_50221_53814[(2)] = null);

(statearr_50221_53814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50214 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50213,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_50213__$1 = state_50213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50213__$1,(5),res__44807__auto__);
} else {
if((state_val_50214 === (6))){
var inst_50189 = com.wsscode.pathom.trace.now();
var inst_50190 = (inst_50189 - start);
var inst_50191 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(resolver_weights,cljs.core.update,resolver_sym,com.wsscode.pathom.connect.step_weight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_50190], 0));
var state_50213__$1 = state_50213;
var statearr_50224_53817 = state_50213__$1;
(statearr_50224_53817[(2)] = inst_50191);

(statearr_50224_53817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50214 === (3))){
var inst_50181 = (state_50213[(2)]);
var state_50213__$1 = state_50213;
var statearr_50227_53818 = state_50213__$1;
(statearr_50227_53818[(2)] = inst_50181);


cljs.core.async.impl.ioc_helpers.process_exception(state_50213__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50214 === (2))){
var inst_50211 = (state_50213[(2)]);
var state_50213__$1 = state_50213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50213__$1,inst_50211);
} else {
if((state_val_50214 === (11))){
var inst_50186 = (state_50213[(7)]);
var inst_50207 = (state_50213[(2)]);
var inst_50208 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,inst_50207);
var inst_50209 = com.wsscode.common.async_cljs.throw_err(inst_50186);
var state_50213__$1 = (function (){var statearr_50229 = state_50213;
(statearr_50229[(8)] = inst_50208);

return statearr_50229;
})();
var statearr_50230_53821 = state_50213__$1;
(statearr_50230_53821[(2)] = inst_50209);


cljs.core.async.impl.ioc_helpers.process_exception(state_50213__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50214 === (9))){
var inst_50198 = (state_50213[(9)]);
var inst_50186 = (state_50213[(7)]);
var inst_50202 = com.wsscode.pathom.core.process_error(env,inst_50186);
var inst_50203 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_50198,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),inst_50202);
var state_50213__$1 = state_50213;
var statearr_50231_53822 = state_50213__$1;
(statearr_50231_53822[(2)] = inst_50203);

(statearr_50231_53822[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50214 === (5))){
var inst_50186 = (state_50213[(2)]);
var state_50213__$1 = (function (){var statearr_50233 = state_50213;
(statearr_50233[(7)] = inst_50186);

return statearr_50233;
})();
if(cljs.core.truth_(resolver_weights)){
var statearr_50235_53823 = state_50213__$1;
(statearr_50235_53823[(1)] = (6));

} else {
var statearr_50236_53824 = state_50213__$1;
(statearr_50236_53824[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50214 === (10))){
var inst_50198 = (state_50213[(9)]);
var state_50213__$1 = state_50213;
var statearr_50244_53825 = state_50213__$1;
(statearr_50244_53825[(2)] = inst_50198);

(statearr_50244_53825[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50214 === (8))){
var inst_50186 = (state_50213[(7)]);
var inst_50194 = (state_50213[(2)]);
var inst_50196 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_50197 = [new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624)];
var inst_50198 = cljs.core.PersistentHashMap.fromArrays(inst_50196,inst_50197);
var inst_50200 = com.wsscode.common.async_cljs.error_QMARK_(inst_50186);
var state_50213__$1 = (function (){var statearr_50247 = state_50213;
(statearr_50247[(10)] = inst_50194);

(statearr_50247[(9)] = inst_50198);

return statearr_50247;
})();
if(inst_50200){
var statearr_50248_53829 = state_50213__$1;
(statearr_50248_53829[(1)] = (9));

} else {
var statearr_50253_53830 = state_50213__$1;
(statearr_50253_53830[(1)] = (10));

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
});})(c__38971__auto__,res__44807__auto__,resolver_sym,tid,start,map__50173,map__50173__$1,env,resolver_dispatch,resolver_weights))
;
return ((function (switch__38924__auto__,c__38971__auto__,res__44807__auto__,resolver_sym,tid,start,map__50173,map__50173__$1,env,resolver_dispatch,resolver_weights){
return (function() {
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38925__auto____0 = (function (){
var statearr_50256 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50256[(0)] = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38925__auto__);

(statearr_50256[(1)] = (1));

return statearr_50256;
});
var com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38925__auto____1 = (function (state_50213){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_50213);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e50257){if((e50257 instanceof Object)){
var ex__38928__auto__ = e50257;
var statearr_50264_53833 = state_50213;
(statearr_50264_53833[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50257;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53836 = state_50213;
state_50213 = G__53836;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38925__auto__ = function(state_50213){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38925__auto____1.call(this,state_50213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38925__auto____0;
com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38925__auto____1;
return com$wsscode$pathom$connect$call_resolver_STAR__$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,res__44807__auto__,resolver_sym,tid,start,map__50173,map__50173__$1,env,resolver_dispatch,resolver_weights))
})();
var state__38973__auto__ = (function (){var statearr_50266 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_50266[(6)] = c__38971__auto__);

return statearr_50266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,res__44807__auto__,resolver_sym,tid,start,map__50173,map__50173__$1,env,resolver_dispatch,resolver_weights))
);

return c__38971__auto__;
} else {
var x = res__44807__auto__;
if(cljs.core.truth_(resolver_weights)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(resolver_weights,cljs.core.update,resolver_sym,com.wsscode.pathom.connect.step_weight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.trace.now() - start)], 0));
} else {
}

com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,(function (){var G__50271 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver","com.wsscode.pathom.connect/call-resolver",-13258624)], null);
if(com.wsscode.common.async_cljs.error_QMARK_(x)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50271,new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),com.wsscode.pathom.core.process_error(env,x));
} else {
return G__50271;
}
})());

return com.wsscode.common.async_cljs.throw_err(x);
}
});
com.wsscode.pathom.connect.call_resolver = (function com$wsscode$pathom$connect$call_resolver(p__50281,entity){
var map__50282 = p__50281;
var map__50282__$1 = (((((!((map__50282 == null))))?(((((map__50282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50282):map__50282);
var env = map__50282__$1;
var pool_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50282__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449));
if(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__50282,map__50282__$1,env,pool_chan){
return (function (p1__50273_SHARP_){
return cljs.core.contains_QMARK_(com.wsscode.pathom.core.break_values,cljs.core.second(p1__50273_SHARP_));
});})(map__50282,map__50282__$1,env,pool_chan))
,entity))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver input",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entity","entity",-450970276),entity], null));
} else {
if(cljs.core.truth_(pool_chan)){
var out = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__38971__auto___53846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto___53846,out,map__50282,map__50282__$1,env,pool_chan){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto___53846,out,map__50282,map__50282__$1,env,pool_chan){
return (function (state_50312){
var state_val_50313 = (state_50312[(1)]);
if((state_val_50313 === (1))){
var inst_50289 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","label","com.wsscode.pathom.trace/label",-1549388543),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_50291 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_50292 = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(inst_50291);
var inst_50293 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_50296 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_50293);
var inst_50297 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_50300 = new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581).cljs$core$IFn$_invoke$arity$1(inst_50297);
var inst_50301 = [new cljs.core.Keyword("com.wsscode.pathom.connect","schedule-resolver","com.wsscode.pathom.connect/schedule-resolver",939563419),inst_50292,inst_50296,inst_50300,entity];
var inst_50302 = cljs.core.PersistentHashMap.fromArrays(inst_50289,inst_50301);
var inst_50303 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_50302);
var inst_50304 = [new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"f","f",-1597136552)];
var inst_50305 = (function (){var tid = inst_50303;
return ((function (tid,inst_50289,inst_50291,inst_50292,inst_50293,inst_50296,inst_50297,inst_50300,inst_50301,inst_50302,inst_50303,inst_50304,state_val_50313,c__38971__auto___53846,out,map__50282,map__50282__$1,env,pool_chan){
return (function (){
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,tid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","schedule-resolver","com.wsscode.pathom.connect/schedule-resolver",939563419)], null));

try{return com.wsscode.pathom.connect.call_resolver_STAR_(env,entity);
}catch (e50318){var e = e50318;
return e;
}});
;})(tid,inst_50289,inst_50291,inst_50292,inst_50293,inst_50296,inst_50297,inst_50300,inst_50301,inst_50302,inst_50303,inst_50304,state_val_50313,c__38971__auto___53846,out,map__50282,map__50282__$1,env,pool_chan))
})();
var inst_50306 = [out,inst_50305];
var inst_50307 = cljs.core.PersistentHashMap.fromArrays(inst_50304,inst_50306);
var state_50312__$1 = state_50312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50312__$1,(2),pool_chan,inst_50307);
} else {
if((state_val_50313 === (2))){
var inst_50309 = (state_50312[(2)]);
var state_50312__$1 = state_50312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50312__$1,inst_50309);
} else {
return null;
}
}
});})(c__38971__auto___53846,out,map__50282,map__50282__$1,env,pool_chan))
;
return ((function (switch__38924__auto__,c__38971__auto___53846,out,map__50282,map__50282__$1,env,pool_chan){
return (function() {
var com$wsscode$pathom$connect$call_resolver_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$connect$call_resolver_$_state_machine__38925__auto____0 = (function (){
var statearr_50320 = [null,null,null,null,null,null,null];
(statearr_50320[(0)] = com$wsscode$pathom$connect$call_resolver_$_state_machine__38925__auto__);

(statearr_50320[(1)] = (1));

return statearr_50320;
});
var com$wsscode$pathom$connect$call_resolver_$_state_machine__38925__auto____1 = (function (state_50312){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_50312);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e50321){if((e50321 instanceof Object)){
var ex__38928__auto__ = e50321;
var statearr_50326_53854 = state_50312;
(statearr_50326_53854[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50321;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53855 = state_50312;
state_50312 = G__53855;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$connect$call_resolver_$_state_machine__38925__auto__ = function(state_50312){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$call_resolver_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$call_resolver_$_state_machine__38925__auto____1.call(this,state_50312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$call_resolver_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$call_resolver_$_state_machine__38925__auto____0;
com$wsscode$pathom$connect$call_resolver_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$call_resolver_$_state_machine__38925__auto____1;
return com$wsscode$pathom$connect$call_resolver_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto___53846,out,map__50282,map__50282__$1,env,pool_chan))
})();
var state__38973__auto__ = (function (){var statearr_50329 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_50329[(6)] = c__38971__auto___53846);

return statearr_50329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto___53846,out,map__50282,map__50282__$1,env,pool_chan))
);


return out;
} else {
return com.wsscode.pathom.connect.call_resolver_STAR_(env,entity);
}
}
});
com.wsscode.pathom.connect.entity_select_keys = (function com$wsscode$pathom$connect$entity_select_keys(env,entity,input){
var entity__$1 = com.wsscode.pathom.core.maybe_atom(entity);
var res__44797__auto__ = ((clojure.set.subset_QMARK_(input,entity__$1))?entity__$1:com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),entity__$1),new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404)], 0)),cljs.core.vec(input)));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44797__auto__)){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,res__44797__auto__,entity__$1){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,res__44797__auto__,entity__$1){
return (function (state_50342){
var state_val_50343 = (state_50342[(1)]);
if((state_val_50343 === (1))){
var state_50342__$1 = state_50342;
var statearr_50346_53856 = state_50342__$1;
(statearr_50346_53856[(2)] = null);

(statearr_50346_53856[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50343 === (2))){
var inst_50340 = (state_50342[(2)]);
var state_50342__$1 = state_50342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50342__$1,inst_50340);
} else {
if((state_val_50343 === (3))){
var inst_50331 = (state_50342[(2)]);
var state_50342__$1 = state_50342;
var statearr_50347_53857 = state_50342__$1;
(statearr_50347_53857[(2)] = inst_50331);


cljs.core.async.impl.ioc_helpers.process_exception(state_50342__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50343 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50342,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_50342__$1 = state_50342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50342__$1,(5),res__44797__auto__);
} else {
if((state_val_50343 === (5))){
var inst_50336 = (state_50342[(2)]);
var inst_50337 = com.wsscode.common.async_cljs.throw_err(inst_50336);
var inst_50338 = cljs.core.select_keys(inst_50337,input);
var state_50342__$1 = state_50342;
var statearr_50350_53858 = state_50342__$1;
(statearr_50350_53858[(2)] = inst_50338);


cljs.core.async.impl.ioc_helpers.process_exception(state_50342__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__38971__auto__,res__44797__auto__,entity__$1))
;
return ((function (switch__38924__auto__,c__38971__auto__,res__44797__auto__,entity__$1){
return (function() {
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38925__auto____0 = (function (){
var statearr_50351 = [null,null,null,null,null,null,null];
(statearr_50351[(0)] = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38925__auto__);

(statearr_50351[(1)] = (1));

return statearr_50351;
});
var com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38925__auto____1 = (function (state_50342){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_50342);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e50352){if((e50352 instanceof Object)){
var ex__38928__auto__ = e50352;
var statearr_50353_53859 = state_50342;
(statearr_50353_53859[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50352;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53861 = state_50342;
state_50342 = G__53861;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38925__auto__ = function(state_50342){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38925__auto____1.call(this,state_50342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38925__auto____0;
com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38925__auto____1;
return com$wsscode$pathom$connect$entity_select_keys_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,res__44797__auto__,entity__$1))
})();
var state__38973__auto__ = (function (){var statearr_50355 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_50355[(6)] = c__38971__auto__);

return statearr_50355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,res__44797__auto__,entity__$1))
);

return c__38971__auto__;
} else {
var e = res__44797__auto__;
return cljs.core.select_keys(e,input);
}
});
com.wsscode.pathom.connect.all_values_valid_QMARK_ = (function com$wsscode$pathom$connect$all_values_valid_QMARK_(m,input){
return ((cljs.core.every_QMARK_((function (p__50367){
var vec__50369 = p__50367;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50369,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50369,(1),null);
return cljs.core.not((com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.core.break_values.call(null,v)));
}),m)) && (cljs.core.every_QMARK_(m,input)));
});
com.wsscode.pathom.connect.cache_batch = (function com$wsscode$pathom$connect$cache_batch(env,resolver_sym,linked_results){
var params = com.wsscode.pathom.core.params(env);
var seq__50375 = cljs.core.seq(linked_results);
var chunk__50376 = null;
var count__50377 = (0);
var i__50378 = (0);
while(true){
if((i__50378 < count__50377)){
var vec__50390 = chunk__50376.cljs$core$IIndexed$_nth$arity$2(null,i__50378);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50390,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50390,(1),null);
com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,input,params], null),((function (seq__50375,chunk__50376,count__50377,i__50378,vec__50390,input,value,params){
return (function (){
return value;
});})(seq__50375,chunk__50376,count__50377,i__50378,vec__50390,input,value,params))
);


var G__53868 = seq__50375;
var G__53869 = chunk__50376;
var G__53870 = count__50377;
var G__53871 = (i__50378 + (1));
seq__50375 = G__53868;
chunk__50376 = G__53869;
count__50377 = G__53870;
i__50378 = G__53871;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50375);
if(temp__5720__auto__){
var seq__50375__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50375__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50375__$1);
var G__53872 = cljs.core.chunk_rest(seq__50375__$1);
var G__53873 = c__4550__auto__;
var G__53874 = cljs.core.count(c__4550__auto__);
var G__53875 = (0);
seq__50375 = G__53872;
chunk__50376 = G__53873;
count__50377 = G__53874;
i__50378 = G__53875;
continue;
} else {
var vec__50394 = cljs.core.first(seq__50375__$1);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50394,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50394,(1),null);
com.wsscode.pathom.core.cached_STAR_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,input,params], null),((function (seq__50375,chunk__50376,count__50377,i__50378,vec__50394,input,value,seq__50375__$1,temp__5720__auto__,params){
return (function (){
return value;
});})(seq__50375,chunk__50376,count__50377,i__50378,vec__50394,input,value,seq__50375__$1,temp__5720__auto__,params))
);


var G__53880 = cljs.core.next(seq__50375__$1);
var G__53881 = null;
var G__53882 = (0);
var G__53883 = (0);
seq__50375 = G__53880;
chunk__50376 = G__53881;
count__50377 = G__53882;
i__50378 = G__53883;
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
var G__50409 = arguments.length;
switch (G__50409) {
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
var G__53886 = null;
var G__53886__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__53886__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__53886__2 = (function (result,x){
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen),fx)){
return result;
} else {
seen.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen.cljs$core$IDeref$_deref$arity$1(null),fx));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,x) : rf.call(null,result,x));
}
});
G__53886 = function(result,x){
switch(arguments.length){
case 0:
return G__53886__0.call(this);
case 1:
return G__53886__1.call(this,result);
case 2:
return G__53886__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__53886.cljs$core$IFn$_invoke$arity$0 = G__53886__0;
G__53886.cljs$core$IFn$_invoke$arity$1 = G__53886__1;
G__53886.cljs$core$IFn$_invoke$arity$2 = G__53886__2;
return G__53886;
})()
;})(seen))
});
});

com.wsscode.pathom.connect.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function com$wsscode$pathom$connect$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
var fexpr__50421 = (function (p__50422,seen__$1){
while(true){
var vec__50423 = p__50422;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50423,(0),null);
var xs__$1 = vec__50423;
var temp__5720__auto__ = cljs.core.seq(xs__$1);
if(temp__5720__auto__){
var s = temp__5720__auto__;
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(seen__$1,fx)){
var G__53892 = cljs.core.rest(s);
var G__53893 = seen__$1;
p__50422 = G__53892;
seen__$1 = G__53893;
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
return fexpr__50421(xs,seen);
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
var new_paths = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__50434_SHARP_){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,p1__50434_SHARP_], null)],null));
})),resolvers);
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(input,keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pending], 0));
if(cljs.core.seq(missing)){
var missing_paths = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (new_paths,missing){
return (function (p1__50436_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (new_paths,missing){
return (function (acc,x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,x);
});})(new_paths,missing))
,cljs.core.first(p1__50436_SHARP_),cljs.core.next(p1__50436_SHARP_));
});})(new_paths,missing))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(com.wsscode.common.combinatorics.cartesian_product,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (new_paths,missing){
return (function (p1__50435_SHARP_){
var G__50445 = index_oir;
var G__50446 = keys;
var G__50447 = bad_keys;
var G__50448 = p1__50435_SHARP_;
var G__50449 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pending,p1__50435_SHARP_);
return (com.wsscode.pathom.connect.compute_paths_STAR_.cljs$core$IFn$_invoke$arity$5 ? com.wsscode.pathom.connect.compute_paths_STAR_.cljs$core$IFn$_invoke$arity$5(G__50445,G__50446,G__50447,G__50448,G__50449) : com.wsscode.pathom.connect.compute_paths_STAR_.call(null,G__50445,G__50446,G__50447,G__50448,G__50449));
});})(new_paths,missing))
),missing)));
if(cljs.core.seq(missing_paths)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(paths,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (missing_paths,new_paths,missing){
return (function (p1__50437_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (missing_paths,new_paths,missing){
return (function (acc,x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,x);
});})(missing_paths,new_paths,missing))
,cljs.core.first(p1__50437_SHARP_),cljs.core.next(p1__50437_SHARP_));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$3((function (p1__50452_SHARP_){
return com.wsscode.pathom.connect.distinct_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__50452_SHARP_);
}),(function (p1__50453_SHARP_){
return com.wsscode.pathom.connect.distinct_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,p1__50453_SHARP_);
}),cljs.core.rseq)),com.wsscode.pathom.connect.compute_paths_STAR_(index_oir,keys,bad_keys,attr,cljs.core.PersistentHashSet.createAsIfByAssoc([attr])));
});
com.wsscode.pathom.connect.split_good_bad_keys = (function com$wsscode$pathom$connect$split_good_bad_keys(entity){
var map__50462 = cljs.core.group_by((function (p1__50457_SHARP_){
return cljs.core.contains_QMARK_(com.wsscode.pathom.core.break_values,cljs.core.second(p1__50457_SHARP_));
}),entity);
var map__50462__$1 = (((((!((map__50462 == null))))?(((((map__50462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50462):map__50462);
var bad_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50462__$1,true);
var good_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50462__$1,false);
var good_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),good_keys);
var bad_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),bad_keys);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [good_keys__$1,bad_keys__$1], null);
});
com.wsscode.pathom.connect.path_cost = (function com$wsscode$pathom$connect$path_cost(p__50474,path){
var map__50475 = p__50474;
var map__50475__$1 = (((((!((map__50475 == null))))?(((((map__50475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50475):map__50475);
var env = map__50475__$1;
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50475__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50475__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
var weights = (function (){var or__4131__auto__ = (function (){var G__50478 = resolver_weights;
if((G__50478 == null)){
return null;
} else {
return cljs.core.deref(G__50478);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (weights,map__50475,map__50475__$1,env,resolver_weights,request_cache){
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
});})(weights,map__50475,map__50475__$1,env,resolver_weights,request_cache))
),cljs.core._PLUS_,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(path));
});
com.wsscode.pathom.connect.default_sort_plan = (function com$wsscode$pathom$connect$default_sort_plan(env,plan){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__50479_SHARP_){
return com.wsscode.pathom.connect.path_cost(env,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__50479_SHARP_));
}),plan);
});
com.wsscode.pathom.connect.resolve_plan = (function com$wsscode$pathom$connect$resolve_plan(p__50482){
var map__50483 = p__50482;
var map__50483__$1 = (((((!((map__50483 == null))))?(((((map__50483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50483):map__50483);
var env = map__50483__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50483__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var sort_plan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50483__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sort-plan","com.wsscode.pathom.connect/sort-plan",-1506396873));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var sort_plan__$1 = (function (){var or__4131__auto__ = sort_plan;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.connect.default_sort_plan;
}
})();
var vec__50489 = com.wsscode.pathom.connect.split_good_bad_keys(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env));
var good_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50489,(0),null);
var bad_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50489,(1),null);
var G__50492 = env;
var G__50493 = com.wsscode.pathom.connect.compute_paths(new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746).cljs$core$IFn$_invoke$arity$1(indexes),good_keys,bad_keys,key);
return (sort_plan__$1.cljs$core$IFn$_invoke$arity$2 ? sort_plan__$1.cljs$core$IFn$_invoke$arity$2(G__50492,G__50493) : sort_plan__$1.call(null,G__50492,G__50493));
});
com.wsscode.pathom.connect.resolver__GT_output = (function com$wsscode$pathom$connect$resolver__GT_output(env,resolver_sym){
var map__50494 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),resolver_sym], null));
var map__50494__$1 = (((((!((map__50494 == null))))?(((((map__50494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50494):map__50494);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50494__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var compute_output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50494__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","compute-output","com.wsscode.pathom.connect/compute-output",2103799942));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__50500_SHARP_){
return com.wsscode.pathom.connect.output__GT_provides(com.wsscode.pathom.connect.resolver__GT_output(env,cljs.core.second(p1__50500_SHARP_)));
})),plan);
});
com.wsscode.pathom.connect.plan__GT_resolvers = (function com$wsscode$pathom$connect$plan__GT_resolvers(plan){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.flatten(plan));
});
com.wsscode.pathom.connect.decrease_path_costs = (function com$wsscode$pathom$connect$decrease_path_costs(p__50503,plan){
var map__50504 = p__50503;
var map__50504__$1 = (((((!((map__50504 == null))))?(((((map__50504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50504):map__50504);
var resolver_weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50504__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772));
var resolver_weight_decrease_amount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50504__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weight-decrease-amount","com.wsscode.pathom.connect/resolver-weight-decrease-amount",-937582293),(1));
if(cljs.core.truth_(resolver_weights)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(resolver_weights,((function (map__50504,map__50504__$1,resolver_weights,resolver_weight_decrease_amount){
return (function (p1__50502_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__50504,map__50504__$1,resolver_weights,resolver_weight_decrease_amount){
return (function (rw,rsym){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rw,rsym,(function (){var x__4219__auto__ = (1);
var y__4220__auto__ = (cljs.core.get.cljs$core$IFn$_invoke$arity$3(rw,rsym,(0)) - resolver_weight_decrease_amount);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})());
});})(map__50504,map__50504__$1,resolver_weights,resolver_weight_decrease_amount))
,p1__50502_SHARP_,com.wsscode.pathom.connect.plan__GT_resolvers(plan));
});})(map__50504,map__50504__$1,resolver_weights,resolver_weight_decrease_amount))
);
} else {
return null;
}
});
com.wsscode.pathom.connect.reader_compute_plan = (function com$wsscode$pathom$connect$reader_compute_plan(env,failed_resolvers){
var plan_trace_id = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","compute-plan","com.wsscode.pathom.connect/compute-plan",1145992978)], null));
var plan = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (plan_trace_id){
return (function (p1__50512_SHARP_){
return cljs.core.some(failed_resolvers,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,p1__50512_SHARP_));
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
return (function (p__50514,p__50515){
var map__50516 = p__50514;
var map__50516__$1 = (((((!((map__50516 == null))))?(((((map__50516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50516):map__50516);
var acc = map__50516__$1;
var provided = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50516__$1,new cljs.core.Keyword(null,"provided","provided",-1493091365));
var map__50517 = p__50515;
var map__50517__$1 = (((((!((map__50517 == null))))?(((((map__50517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50517):map__50517);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50517__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.contains_QMARK_(provided,key)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj,key);
} else {
var temp__5718__auto__ = cljs.core.first(com.wsscode.pathom.connect.resolve_plan(cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),key)));
if(cljs.core.truth_(temp__5718__auto__)){
var plan = temp__5718__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.into,(function (){var G__50520 = plan;
var G__50520__$1 = (((G__50520 == null))?null:cljs.core.first(G__50520));
var G__50520__$2 = (((G__50520__$1 == null))?null:cljs.core.second(G__50520__$1));
var G__50520__$3 = (((G__50520__$2 == null))?null:com.wsscode.pathom.connect.resolver_data(env,G__50520__$2));
if((G__50520__$3 == null)){
return null;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121).cljs$core$IFn$_invoke$arity$1(G__50520__$3);
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
com.wsscode.pathom.connect.project_parent_query_attributes = (function com$wsscode$pathom$connect$project_parent_query_attributes(p__50521){
var map__50522 = p__50521;
var map__50522__$1 = (((((!((map__50522 == null))))?(((((map__50522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50522):map__50522);
var env = map__50522__$1;
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50522__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
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
com.wsscode.pathom.connect.reader = (function com$wsscode$pathom$connect$reader(p__50527){
var map__50528 = p__50527;
var map__50528__$1 = (((((!((map__50528 == null))))?(((((map__50528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50528):map__50528);
var env = map__50528__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50528__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50528__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var p = com.wsscode.pathom.core.params(env);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null)))){
var temp__5718__auto__ = com.wsscode.pathom.connect.pick_resolver(env);
if(cljs.core.truth_(temp__5718__auto__)){
var map__50531 = temp__5718__auto__;
var map__50531__$1 = (((((!((map__50531 == null))))?(((((map__50531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50531):map__50531);
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50531__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50531__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var map__50533 = com.wsscode.pathom.connect.resolver_data(env,s);
var map__50533__$1 = (((((!((map__50533 == null))))?(((((map__50533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50533):map__50533);
var resolver = map__50533__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50533__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50533__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50533__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver);
var response = (cljs.core.truth_(cache_QMARK_)?com.wsscode.common.async_cljs.throw_err(com.wsscode.pathom.core.cached_STAR_(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,e,p], null),((function (map__50533,map__50533__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__50531,map__50531__$1,e,s,temp__5718__auto__,k,p,map__50528,map__50528__$1,env,indexes,processing_sequence){
return (function (){
if(cljs.core.truth_((function (){var and__4120__auto__ = batch_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return processing_sequence;
} else {
return and__4120__auto__;
}
})())){
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (map__50533,map__50533__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__50531,map__50531__$1,e,s,temp__5718__auto__,k,p,map__50528,map__50528__$1,env,indexes,processing_sequence){
return (function (p1__50525_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__50525_SHARP_,input);
});})(map__50533,map__50533__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__50531,map__50531__$1,e,s,temp__5718__auto__,k,p,map__50528,map__50528__$1,env,indexes,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__50533,map__50533__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__50531,map__50531__$1,e,s,temp__5718__auto__,k,p,map__50528,map__50528__$1,env,indexes,processing_sequence){
return (function (p1__50524_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__50524_SHARP_,input);
});})(map__50533,map__50533__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__50531,map__50531__$1,e,s,temp__5718__auto__,k,p,map__50528,map__50528__$1,env,indexes,processing_sequence))
,processing_sequence)));
var batch_result = com.wsscode.pathom.connect.call_resolver(env__$1,items);
var linked_results = cljs.core.zipmap(items,batch_result);
com.wsscode.pathom.connect.cache_batch(env__$1,s,linked_results);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(linked_results,e);
} else {
return com.wsscode.pathom.connect.call_resolver(env__$1,e);
}
});})(map__50533,map__50533__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,map__50531,map__50531__$1,e,s,temp__5718__auto__,k,p,map__50528,map__50528__$1,env,indexes,processing_sequence))
)):com.wsscode.pathom.connect.call_resolver(env__$1,e));
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),env__$1);
var response__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
if((!((((response__$1 == null)) || (cljs.core.map_QMARK_(response__$1)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Response from resolver must be a map.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),s,new cljs.core.Keyword(null,"response","response",-1068424192),response__$1], null));
} else {
}

com.wsscode.pathom.core.swap_entity_BANG_(env_SINGLEQUOTE_,((function (map__50533,map__50533__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,response,env_SINGLEQUOTE_,response__$1,map__50531,map__50531__$1,e,s,temp__5718__auto__,k,p,map__50528,map__50528__$1,env,indexes,processing_sequence){
return (function (p1__50526_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$1,p1__50526_SHARP_], 0));
});})(map__50533,map__50533__$1,resolver,cache_QMARK_,batch_QMARK_,input,env__$1,response,env_SINGLEQUOTE_,response__$1,map__50531,map__50531__$1,e,s,temp__5718__auto__,k,p,map__50528,map__50528__$1,env,indexes,processing_sequence))
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
com.wsscode.pathom.connect.process_simple_reader_response = (function com$wsscode$pathom$connect$process_simple_reader_response(p__50541,response){
var map__50542 = p__50541;
var map__50542__$1 = (((((!((map__50542 == null))))?(((((map__50542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50542):map__50542);
var env = map__50542__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50542__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
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
com.wsscode.pathom.connect.reader2 = (function com$wsscode$pathom$connect$reader2(p__50550){
var map__50551 = p__50550;
var map__50551__$1 = (((((!((map__50551 == null))))?(((((map__50551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50551):map__50551);
var env = map__50551__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50551__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50551__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50551__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var temp__5718__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__50554 = temp__5718__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50554,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50554,(1),null);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var G__50560 = plan;
var vec__50561 = G__50560;
var seq__50562 = cljs.core.seq(vec__50561);
var first__50563 = cljs.core.first(seq__50562);
var seq__50562__$1 = cljs.core.next(seq__50562);
var step = first__50563;
var tail = seq__50562__$1;
var failed_resolvers = cljs.core.PersistentArrayMap.EMPTY;
var out_left = out;
var G__50560__$1 = G__50560;
var failed_resolvers__$1 = failed_resolvers;
var out_left__$1 = out_left;
while(true){
var vec__50584 = G__50560__$1;
var seq__50585 = cljs.core.seq(vec__50584);
var first__50586 = cljs.core.first(seq__50585);
var seq__50585__$1 = cljs.core.next(seq__50585);
var step__$1 = first__50586;
var tail__$1 = seq__50585__$1;
var failed_resolvers__$2 = failed_resolvers__$1;
var out_left__$2 = out_left__$1;
if(cljs.core.truth_(step__$1)){
var vec__50587 = step__$1;
var key_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50587,(0),null);
var resolver_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50587,(1),null);
var map__50590 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),resolver_sym], null));
var map__50590__$1 = (((((!((map__50590 == null))))?(((((map__50590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50590):map__50590);
var resolver = map__50590__$1;
var cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50590__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var batch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50590__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50590__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var output = com.wsscode.pathom.connect.resolver__GT_output(env,resolver_sym);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),resolver);
var e = cljs.core.select_keys(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env__$1),input);
var p = com.wsscode.pathom.core.params(env__$1);
var trace_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym,new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507),e], null);
var response = (cljs.core.truth_(cache_QMARK_)?com.wsscode.common.async_cljs.throw_err(com.wsscode.pathom.core.cached_STAR_(env__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,e,p], null),((function (G__50560__$1,failed_resolvers__$1,out_left__$1,vec__50587,key_SINGLEQUOTE_,resolver_sym,map__50590,map__50590__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__50584,seq__50585,first__50586,seq__50585__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50560,vec__50561,seq__50562,first__50563,seq__50562__$1,step,tail,failed_resolvers,out_left,key,vec__50554,plan,out,temp__5718__auto__,map__50551,map__50551__$1,env,indexes,max_resolver_weight,processing_sequence){
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
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (G__50560__$1,failed_resolvers__$1,out_left__$1,_,trace_id__21490__auto__,vec__50587,key_SINGLEQUOTE_,resolver_sym,map__50590,map__50590__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__50584,seq__50585,first__50586,seq__50585__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50560,vec__50561,seq__50562,first__50563,seq__50562__$1,step,tail,failed_resolvers,out_left,key,vec__50554,plan,out,temp__5718__auto__,map__50551,map__50551__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__50547_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__50547_SHARP_,input);
});})(G__50560__$1,failed_resolvers__$1,out_left__$1,_,trace_id__21490__auto__,vec__50587,key_SINGLEQUOTE_,resolver_sym,map__50590,map__50590__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__50584,seq__50585,first__50586,seq__50585__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50560,vec__50561,seq__50562,first__50563,seq__50562__$1,step,tail,failed_resolvers,out_left,key,vec__50554,plan,out,temp__5718__auto__,map__50551,map__50551__$1,env,indexes,max_resolver_weight,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__50560__$1,failed_resolvers__$1,out_left__$1,_,trace_id__21490__auto__,vec__50587,key_SINGLEQUOTE_,resolver_sym,map__50590,map__50590__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__50584,seq__50585,first__50586,seq__50585__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50560,vec__50561,seq__50562,first__50563,seq__50562__$1,step,tail,failed_resolvers,out_left,key,vec__50554,plan,out,temp__5718__auto__,map__50551,map__50551__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__50546_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__50546_SHARP_,input);
});})(G__50560__$1,failed_resolvers__$1,out_left__$1,_,trace_id__21490__auto__,vec__50587,key_SINGLEQUOTE_,resolver_sym,map__50590,map__50590__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__50584,seq__50585,first__50586,seq__50585__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50560,vec__50561,seq__50562,first__50563,seq__50562__$1,step,tail,failed_resolvers,out_left,key,vec__50554,plan,out,temp__5718__auto__,map__50551,map__50551__$1,env,indexes,max_resolver_weight,processing_sequence))
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
var items = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filterv(((function (G__50560__$1,failed_resolvers__$1,out_left__$1,_,vec__50587,key_SINGLEQUOTE_,resolver_sym,map__50590,map__50590__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__50584,seq__50585,first__50586,seq__50585__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50560,vec__50561,seq__50562,first__50563,seq__50562__$1,step,tail,failed_resolvers,out_left,key,vec__50554,plan,out,temp__5718__auto__,map__50551,map__50551__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__50547_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__50547_SHARP_,input);
});})(G__50560__$1,failed_resolvers__$1,out_left__$1,_,vec__50587,key_SINGLEQUOTE_,resolver_sym,map__50590,map__50590__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__50584,seq__50585,first__50586,seq__50585__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50560,vec__50561,seq__50562,first__50563,seq__50562__$1,step,tail,failed_resolvers,out_left,key,vec__50554,plan,out,temp__5718__auto__,map__50551,map__50551__$1,env,indexes,max_resolver_weight,processing_sequence))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__50560__$1,failed_resolvers__$1,out_left__$1,_,vec__50587,key_SINGLEQUOTE_,resolver_sym,map__50590,map__50590__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__50584,seq__50585,first__50586,seq__50585__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50560,vec__50561,seq__50562,first__50563,seq__50562__$1,step,tail,failed_resolvers,out_left,key,vec__50554,plan,out,temp__5718__auto__,map__50551,map__50551__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__50546_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__50546_SHARP_,input);
});})(G__50560__$1,failed_resolvers__$1,out_left__$1,_,vec__50587,key_SINGLEQUOTE_,resolver_sym,map__50590,map__50590__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__50584,seq__50585,first__50586,seq__50585__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50560,vec__50561,seq__50562,first__50563,seq__50562__$1,step,tail,failed_resolvers,out_left,key,vec__50554,plan,out,temp__5718__auto__,map__50551,map__50551__$1,env,indexes,max_resolver_weight,processing_sequence))
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
});})(G__50560__$1,failed_resolvers__$1,out_left__$1,vec__50587,key_SINGLEQUOTE_,resolver_sym,map__50590,map__50590__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,vec__50584,seq__50585,first__50586,seq__50585__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50560,vec__50561,seq__50562,first__50563,seq__50562__$1,step,tail,failed_resolvers,out_left,key,vec__50554,plan,out,temp__5718__auto__,map__50551,map__50551__$1,env,indexes,max_resolver_weight,processing_sequence))
)):com.wsscode.pathom.connect.call_resolver(env__$1,e));
var response__$1 = (function (){var or__4131__auto__ = response;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var replan = ((function (G__50560__$1,failed_resolvers__$1,out_left__$1,vec__50587,key_SINGLEQUOTE_,resolver_sym,map__50590,map__50590__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,response,response__$1,vec__50584,seq__50585,first__50586,seq__50585__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50560,vec__50561,seq__50562,first__50563,seq__50562__$1,step,tail,failed_resolvers,out_left,key,vec__50554,plan,out,temp__5718__auto__,map__50551,map__50551__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (error){
var failed_resolvers__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers__$2,resolver_sym,error);
com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$1,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (G__50560__$1,failed_resolvers__$1,out_left__$1,failed_resolvers__$3,vec__50587,key_SINGLEQUOTE_,resolver_sym,map__50590,map__50590__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,response,response__$1,vec__50584,seq__50585,first__50586,seq__50585__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50560,vec__50561,seq__50562,first__50563,seq__50562__$1,step,tail,failed_resolvers,out_left,key,vec__50554,plan,out,temp__5718__auto__,map__50551,map__50551__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__50548_SHARP_){
var x__4222__auto__ = ((function (){var or__4131__auto__ = p1__50548_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() * (2));
var y__4223__auto__ = max_resolver_weight;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});})(G__50560__$1,failed_resolvers__$1,out_left__$1,failed_resolvers__$3,vec__50587,key_SINGLEQUOTE_,resolver_sym,map__50590,map__50590__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,response,response__$1,vec__50584,seq__50585,first__50586,seq__50585__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50560,vec__50561,seq__50562,first__50563,seq__50562__$1,step,tail,failed_resolvers,out_left,key,vec__50554,plan,out,temp__5718__auto__,map__50551,map__50551__$1,env,indexes,max_resolver_weight,processing_sequence))
], 0));

var temp__5718__auto____$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$1,failed_resolvers__$3);
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__50593 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50593,(0),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50593,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan__$1,failed_resolvers__$3,out_SINGLEQUOTE_], null);
} else {
return null;
}
});})(G__50560__$1,failed_resolvers__$1,out_left__$1,vec__50587,key_SINGLEQUOTE_,resolver_sym,map__50590,map__50590__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,response,response__$1,vec__50584,seq__50585,first__50586,seq__50585__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50560,vec__50561,seq__50562,first__50563,seq__50562__$1,step,tail,failed_resolvers,out_left,key,vec__50554,plan,out,temp__5718__auto__,map__50551,map__50551__$1,env,indexes,max_resolver_weight,processing_sequence))
;
if(cljs.core.map_QMARK_(response__$1)){
var env_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(response__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),env__$1);
var response__$2 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(response__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
com.wsscode.pathom.core.swap_entity_BANG_(env_SINGLEQUOTE_,((function (G__50560__$1,failed_resolvers__$1,out_left__$1,env_SINGLEQUOTE_,response__$2,vec__50587,key_SINGLEQUOTE_,resolver_sym,map__50590,map__50590__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,response,response__$1,replan,vec__50584,seq__50585,first__50586,seq__50585__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50560,vec__50561,seq__50562,first__50563,seq__50562__$1,step,tail,failed_resolvers,out_left,key,vec__50554,plan,out,temp__5718__auto__,map__50551,map__50551__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__50549_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response__$2,p1__50549_SHARP_], 0));
});})(G__50560__$1,failed_resolvers__$1,out_left__$1,env_SINGLEQUOTE_,response__$2,vec__50587,key_SINGLEQUOTE_,resolver_sym,map__50590,map__50590__$1,resolver,cache_QMARK_,batch_QMARK_,input,output,env__$1,e,p,trace_data,response,response__$1,replan,vec__50584,seq__50585,first__50586,seq__50585__$1,step__$1,tail__$1,failed_resolvers__$2,out_left__$2,G__50560,vec__50561,seq__50562,first__50563,seq__50562__$1,step,tail,failed_resolvers,out_left,key,vec__50554,plan,out,temp__5718__auto__,map__50551,map__50551__$1,env,indexes,max_resolver_weight,processing_sequence))
);

if(((cljs.core.contains_QMARK_(response__$2,key_SINGLEQUOTE_)) && (cljs.core.not((function (){var G__50597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response__$2,key_SINGLEQUOTE_);
return (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(G__50597) : com.wsscode.pathom.core.break_values.call(null,G__50597));
})())))){
var out_provides = com.wsscode.pathom.connect.output__GT_provides(output);
com.wsscode.pathom.trace.trace(env_SINGLEQUOTE_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),resolver_sym], null));

if(cljs.core.seq(tail__$1)){
var G__54053 = tail__$1;
var G__54054 = failed_resolvers__$2;
var G__54055 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(out_left__$2,out_provides);
G__50560__$1 = G__54053;
failed_resolvers__$1 = G__54054;
out_left__$1 = G__54055;
continue;
} else {
return com.wsscode.pathom.connect.process_simple_reader_response(env_SINGLEQUOTE_,response__$2);
}
} else {
var temp__5718__auto____$1 = replan(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),response__$2,new cljs.core.Keyword(null,"key","key",-1516042587),key_SINGLEQUOTE_], null)));
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__50598 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50598,(0),null);
var failed_resolvers__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50598,(1),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50598,(2),null);
var G__54059 = plan__$1;
var G__54060 = failed_resolvers__$3;
var G__54061 = out_SINGLEQUOTE_;
G__50560__$1 = G__54059;
failed_resolvers__$1 = G__54060;
out_left__$1 = G__54061;
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
var vec__50601 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50601,(0),null);
var failed_resolvers__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50601,(1),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50601,(2),null);
var G__54067 = plan__$1;
var G__54068 = failed_resolvers__$3;
var G__54069 = out_SINGLEQUOTE_;
G__50560__$1 = G__54067;
failed_resolvers__$1 = G__54068;
out_left__$1 = G__54069;
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
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__){
return (function (state_50634){
var state_val_50635 = (state_50634[(1)]);
if((state_val_50635 === (7))){
var inst_50612 = (state_50634[(7)]);
var inst_50614 = (state_50634[(8)]);
var inst_50614__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50612) : f.call(null,inst_50612));
var inst_50615 = com.wsscode.common.async_cljs.chan_QMARK_(inst_50614__$1);
var state_50634__$1 = (function (){var statearr_50636 = state_50634;
(statearr_50636[(8)] = inst_50614__$1);

return statearr_50636;
})();
if(inst_50615){
var statearr_50637_54075 = state_50634__$1;
(statearr_50637_54075[(1)] = (10));

} else {
var statearr_50638_54076 = state_50634__$1;
(statearr_50638_54076[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50635 === (1))){
var state_50634__$1 = state_50634;
var statearr_50639_54077 = state_50634__$1;
(statearr_50639_54077[(2)] = null);

(statearr_50639_54077[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50635 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50634,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_50608 = cljs.core.PersistentVector.EMPTY;
var inst_50609 = inst_50608;
var inst_50610 = s;
var state_50634__$1 = (function (){var statearr_50640 = state_50634;
(statearr_50640[(9)] = inst_50610);

(statearr_50640[(10)] = inst_50609);

return statearr_50640;
})();
var statearr_50641_54079 = state_50634__$1;
(statearr_50641_54079[(2)] = null);

(statearr_50641_54079[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50635 === (13))){
var inst_50618 = (state_50634[(2)]);
var inst_50619 = com.wsscode.common.async_cljs.throw_err(inst_50618);
var state_50634__$1 = state_50634;
var statearr_50642_54081 = state_50634__$1;
(statearr_50642_54081[(2)] = inst_50619);

(statearr_50642_54081[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50635 === (6))){
var inst_50630 = (state_50634[(2)]);
var state_50634__$1 = state_50634;
var statearr_50643_54082 = state_50634__$1;
(statearr_50643_54082[(2)] = inst_50630);


cljs.core.async.impl.ioc_helpers.process_exception(state_50634__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50635 === (3))){
var inst_50604 = (state_50634[(2)]);
var state_50634__$1 = state_50634;
var statearr_50644_54083 = state_50634__$1;
(statearr_50644_54083[(2)] = inst_50604);


cljs.core.async.impl.ioc_helpers.process_exception(state_50634__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50635 === (12))){
var inst_50610 = (state_50634[(9)]);
var inst_50609 = (state_50634[(10)]);
var inst_50622 = (state_50634[(2)]);
var inst_50623 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_50609,inst_50622);
var inst_50624 = cljs.core.next(inst_50610);
var inst_50609__$1 = inst_50623;
var inst_50610__$1 = inst_50624;
var state_50634__$1 = (function (){var statearr_50645 = state_50634;
(statearr_50645[(9)] = inst_50610__$1);

(statearr_50645[(10)] = inst_50609__$1);

return statearr_50645;
})();
var statearr_50646_54086 = state_50634__$1;
(statearr_50646_54086[(2)] = null);

(statearr_50646_54086[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50635 === (2))){
var inst_50632 = (state_50634[(2)]);
var state_50634__$1 = state_50634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50634__$1,inst_50632);
} else {
if((state_val_50635 === (11))){
var inst_50614 = (state_50634[(8)]);
var state_50634__$1 = state_50634;
var statearr_50647_54089 = state_50634__$1;
(statearr_50647_54089[(2)] = inst_50614);

(statearr_50647_54089[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50635 === (9))){
var inst_50628 = (state_50634[(2)]);
var state_50634__$1 = state_50634;
var statearr_50648_54090 = state_50634__$1;
(statearr_50648_54090[(2)] = inst_50628);

(statearr_50648_54090[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50635 === (5))){
var inst_50610 = (state_50634[(9)]);
var inst_50612 = (state_50634[(7)]);
var inst_50612__$1 = cljs.core.first(inst_50610);
var state_50634__$1 = (function (){var statearr_50649 = state_50634;
(statearr_50649[(7)] = inst_50612__$1);

return statearr_50649;
})();
if(cljs.core.truth_(inst_50612__$1)){
var statearr_50650_54091 = state_50634__$1;
(statearr_50650_54091[(1)] = (7));

} else {
var statearr_50651_54092 = state_50634__$1;
(statearr_50651_54092[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50635 === (10))){
var inst_50614 = (state_50634[(8)]);
var state_50634__$1 = state_50634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50634__$1,(13),inst_50614);
} else {
if((state_val_50635 === (8))){
var inst_50609 = (state_50634[(10)]);
var state_50634__$1 = state_50634;
var statearr_50652_54095 = state_50634__$1;
(statearr_50652_54095[(2)] = inst_50609);

(statearr_50652_54095[(1)] = (9));


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
});})(c__38971__auto__))
;
return ((function (switch__38924__auto__,c__38971__auto__){
return (function() {
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__38925__auto____0 = (function (){
var statearr_50654 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50654[(0)] = com$wsscode$pathom$connect$map_async_serial_$_state_machine__38925__auto__);

(statearr_50654[(1)] = (1));

return statearr_50654;
});
var com$wsscode$pathom$connect$map_async_serial_$_state_machine__38925__auto____1 = (function (state_50634){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_50634);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e50655){if((e50655 instanceof Object)){
var ex__38928__auto__ = e50655;
var statearr_50656_54098 = state_50634;
(statearr_50656_54098[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50655;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54104 = state_50634;
state_50634 = G__54104;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$connect$map_async_serial_$_state_machine__38925__auto__ = function(state_50634){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__38925__auto____1.call(this,state_50634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$map_async_serial_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$map_async_serial_$_state_machine__38925__auto____0;
com$wsscode$pathom$connect$map_async_serial_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$map_async_serial_$_state_machine__38925__auto____1;
return com$wsscode$pathom$connect$map_async_serial_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__))
})();
var state__38973__auto__ = (function (){var statearr_50657 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_50657[(6)] = c__38971__auto__);

return statearr_50657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__))
);

return c__38971__auto__;
});
/**
 * DEPRECATED: use async-reader2
 * 
 *   Like reader, but supports async values on resolver return.
 */
com.wsscode.pathom.connect.async_reader = (function com$wsscode$pathom$connect$async_reader(p__50661){
var map__50662 = p__50661;
var map__50662__$1 = (((((!((map__50662 == null))))?(((((map__50662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50662):map__50662);
var env = map__50662__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50662__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50662__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var p = com.wsscode.pathom.core.params(env);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),k], null)))){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,k,p,map__50662,map__50662__$1,env,indexes,processing_sequence){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,k,p,map__50662,map__50662__$1,env,indexes,processing_sequence){
return (function (state_50813){
var state_val_50814 = (state_50813[(1)]);
if((state_val_50814 === (7))){
var state_50813__$1 = state_50813;
var statearr_50815_54110 = state_50813__$1;
(statearr_50815_54110[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));

(statearr_50815_54110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (59))){
var inst_50799 = (state_50813[(2)]);
var state_50813__$1 = state_50813;
var statearr_50816_54111 = state_50813__$1;
(statearr_50816_54111[(2)] = inst_50799);

(statearr_50816_54111[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (20))){
var inst_50714 = (state_50813[(2)]);
var state_50813__$1 = state_50813;
if(cljs.core.truth_(inst_50714)){
var statearr_50817_54112 = state_50813__$1;
(statearr_50817_54112[(1)] = (24));

} else {
var statearr_50818_54113 = state_50813__$1;
(statearr_50818_54113[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (58))){
var inst_50791 = (state_50813[(7)]);
var state_50813__$1 = state_50813;
var statearr_50819_54116 = state_50813__$1;
(statearr_50819_54116[(2)] = inst_50791);

(statearr_50819_54116[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (60))){
var inst_50795 = (state_50813[(2)]);
var inst_50796 = com.wsscode.common.async_cljs.throw_err(inst_50795);
var state_50813__$1 = state_50813;
var statearr_50820_54119 = state_50813__$1;
(statearr_50820_54119[(2)] = inst_50796);

(statearr_50820_54119[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (27))){
var inst_50722 = (state_50813[(8)]);
var inst_50695 = (state_50813[(9)]);
var inst_50719 = (state_50813[(10)]);
var inst_50720 = (state_50813[(11)]);
var inst_50694 = (state_50813[(12)]);
var inst_50696 = (state_50813[(13)]);
var inst_50671 = (state_50813[(14)]);
var inst_50721 = (state_50813[(15)]);
var inst_50723 = (state_50813[(16)]);
var inst_50729 = (state_50813[(17)]);
var inst_50725 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50726 = [inst_50696,inst_50695,p];
var inst_50727 = (new cljs.core.PersistentVector(null,3,(5),inst_50725,inst_50726,null));
var inst_50728 = (function (){var input = inst_50722;
var cache_QMARK_ = inst_50720;
var temp__5718__auto__ = inst_50671;
var batch_QMARK_ = inst_50721;
var env__$1 = inst_50723;
var e = inst_50695;
var s = inst_50696;
var resolver = inst_50719;
var map__50697 = inst_50719;
var map__50673 = inst_50694;
return ((function (input,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,map__50697,map__50673,inst_50722,inst_50695,inst_50719,inst_50720,inst_50694,inst_50696,inst_50671,inst_50721,inst_50723,inst_50729,inst_50725,inst_50726,inst_50727,state_val_50814,c__38971__auto__,k,p,map__50662,map__50662__$1,env,indexes,processing_sequence){
return (function (){
var c__38971__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto____$1,input,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,map__50697,map__50673,inst_50722,inst_50695,inst_50719,inst_50720,inst_50694,inst_50696,inst_50671,inst_50721,inst_50723,inst_50729,inst_50725,inst_50726,inst_50727,state_val_50814,c__38971__auto__,k,p,map__50662,map__50662__$1,env,indexes,processing_sequence){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto____$1,input,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,map__50697,map__50673,inst_50722,inst_50695,inst_50719,inst_50720,inst_50694,inst_50696,inst_50671,inst_50721,inst_50723,inst_50729,inst_50725,inst_50726,inst_50727,state_val_50814,c__38971__auto__,k,p,map__50662,map__50662__$1,env,indexes,processing_sequence){
return (function (state_50864){
var state_val_50865 = (state_50864[(1)]);
if((state_val_50865 === (7))){
var inst_50828 = (state_50864[(2)]);
var state_50864__$1 = state_50864;
if(cljs.core.truth_(inst_50828)){
var statearr_50866_54128 = state_50864__$1;
(statearr_50866_54128[(1)] = (8));

} else {
var statearr_50867_54129 = state_50864__$1;
(statearr_50867_54129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50865 === (1))){
var state_50864__$1 = state_50864;
var statearr_50868_54131 = state_50864__$1;
(statearr_50868_54131[(2)] = null);

(statearr_50868_54131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50865 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50864,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_50864__$1 = state_50864;
if(cljs.core.truth_(batch_QMARK_)){
var statearr_50869_54136 = state_50864__$1;
(statearr_50869_54136[(1)] = (5));

} else {
var statearr_50870_54137 = state_50864__$1;
(statearr_50870_54137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50865 === (15))){
var inst_50841 = (state_50864[(2)]);
var inst_50842 = com.wsscode.common.async_cljs.throw_err(inst_50841);
var state_50864__$1 = state_50864;
var statearr_50871_54138 = state_50864__$1;
(statearr_50871_54138[(2)] = inst_50842);

(statearr_50871_54138[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50865 === (13))){
var inst_50837 = (state_50864[(7)]);
var state_50864__$1 = state_50864;
var statearr_50872_54142 = state_50864__$1;
(statearr_50872_54142[(2)] = inst_50837);

(statearr_50872_54142[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50865 === (6))){
var state_50864__$1 = state_50864;
var statearr_50873_54143 = state_50864__$1;
(statearr_50873_54143[(2)] = batch_QMARK_);

(statearr_50873_54143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50865 === (17))){
var inst_50850 = (state_50864[(8)]);
var state_50864__$1 = state_50864;
var statearr_50874_54146 = state_50864__$1;
(statearr_50874_54146[(2)] = inst_50850);

(statearr_50874_54146[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50865 === (3))){
var inst_50821 = (state_50864[(2)]);
var state_50864__$1 = state_50864;
var statearr_50875_54151 = state_50864__$1;
(statearr_50875_54151[(2)] = inst_50821);


cljs.core.async.impl.ioc_helpers.process_exception(state_50864__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50865 === (12))){
var inst_50837 = (state_50864[(7)]);
var state_50864__$1 = state_50864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50864__$1,(15),inst_50837);
} else {
if((state_val_50865 === (2))){
var inst_50862 = (state_50864[(2)]);
var state_50864__$1 = state_50864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50864__$1,inst_50862);
} else {
if((state_val_50865 === (19))){
var inst_50854 = (state_50864[(2)]);
var inst_50855 = com.wsscode.common.async_cljs.throw_err(inst_50854);
var state_50864__$1 = state_50864;
var statearr_50876_54154 = state_50864__$1;
(statearr_50876_54154[(2)] = inst_50855);

(statearr_50876_54154[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50865 === (11))){
var inst_50830 = (state_50864[(9)]);
var inst_50836 = (state_50864[(10)]);
var inst_50837 = (state_50864[(7)]);
var inst_50834 = (state_50864[(2)]);
var inst_50835 = com.wsscode.common.async_cljs.throw_err(inst_50834);
var inst_50836__$1 = cljs.core.filterv(inst_50830,inst_50835);
var inst_50837__$1 = com.wsscode.pathom.connect.call_resolver(env__$1,inst_50836__$1);
var inst_50838 = com.wsscode.common.async_cljs.chan_QMARK_(inst_50837__$1);
var state_50864__$1 = (function (){var statearr_50877 = state_50864;
(statearr_50877[(10)] = inst_50836__$1);

(statearr_50877[(7)] = inst_50837__$1);

return statearr_50877;
})();
if(inst_50838){
var statearr_50878_54155 = state_50864__$1;
(statearr_50878_54155[(1)] = (12));

} else {
var statearr_50879_54156 = state_50864__$1;
(statearr_50879_54156[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50865 === (9))){
var inst_50850 = (state_50864[(8)]);
var inst_50850__$1 = com.wsscode.pathom.connect.call_resolver(env__$1,e);
var inst_50851 = com.wsscode.common.async_cljs.chan_QMARK_(inst_50850__$1);
var state_50864__$1 = (function (){var statearr_50880 = state_50864;
(statearr_50880[(8)] = inst_50850__$1);

return statearr_50880;
})();
if(inst_50851){
var statearr_50881_54160 = state_50864__$1;
(statearr_50881_54160[(1)] = (16));

} else {
var statearr_50882_54161 = state_50864__$1;
(statearr_50882_54161[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50865 === (5))){
var state_50864__$1 = state_50864;
var statearr_50883_54162 = state_50864__$1;
(statearr_50883_54162[(2)] = processing_sequence);

(statearr_50883_54162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50865 === (14))){
var inst_50836 = (state_50864[(10)]);
var inst_50845 = (state_50864[(2)]);
var inst_50846 = cljs.core.zipmap(inst_50836,inst_50845);
var inst_50847 = com.wsscode.pathom.connect.cache_batch(env__$1,s,inst_50846);
var inst_50848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50846,e);
var state_50864__$1 = (function (){var statearr_50884 = state_50864;
(statearr_50884[(11)] = inst_50847);

return statearr_50884;
})();
var statearr_50885_54164 = state_50864__$1;
(statearr_50885_54164[(2)] = inst_50848);

(statearr_50885_54164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50865 === (16))){
var inst_50850 = (state_50864[(8)]);
var state_50864__$1 = state_50864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50864__$1,(19),inst_50850);
} else {
if((state_val_50865 === (10))){
var inst_50860 = (state_50864[(2)]);
var state_50864__$1 = state_50864;
var statearr_50886_54165 = state_50864__$1;
(statearr_50886_54165[(2)] = inst_50860);


cljs.core.async.impl.ioc_helpers.process_exception(state_50864__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50865 === (18))){
var inst_50858 = (state_50864[(2)]);
var state_50864__$1 = state_50864;
var statearr_50887_54167 = state_50864__$1;
(statearr_50887_54167[(2)] = inst_50858);

(statearr_50887_54167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50865 === (8))){
var inst_50830 = (function (){return ((function (state_val_50865,c__38971__auto____$1,input,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,map__50697,map__50673,inst_50722,inst_50695,inst_50719,inst_50720,inst_50694,inst_50696,inst_50671,inst_50721,inst_50723,inst_50729,inst_50725,inst_50726,inst_50727,state_val_50814,c__38971__auto__,k,p,map__50662,map__50662__$1,env,indexes,processing_sequence){
return (function (p1__50659_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__50659_SHARP_,input);
});
;})(state_val_50865,c__38971__auto____$1,input,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,map__50697,map__50673,inst_50722,inst_50695,inst_50719,inst_50720,inst_50694,inst_50696,inst_50671,inst_50721,inst_50723,inst_50729,inst_50725,inst_50726,inst_50727,state_val_50814,c__38971__auto__,k,p,map__50662,map__50662__$1,env,indexes,processing_sequence))
})();
var inst_50831 = (function (){return ((function (inst_50830,state_val_50865,c__38971__auto____$1,input,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,map__50697,map__50673,inst_50722,inst_50695,inst_50719,inst_50720,inst_50694,inst_50696,inst_50671,inst_50721,inst_50723,inst_50729,inst_50725,inst_50726,inst_50727,state_val_50814,c__38971__auto__,k,p,map__50662,map__50662__$1,env,indexes,processing_sequence){
return (function (p1__50658_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env__$1,p1__50658_SHARP_,input);
});
;})(inst_50830,state_val_50865,c__38971__auto____$1,input,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,map__50697,map__50673,inst_50722,inst_50695,inst_50719,inst_50720,inst_50694,inst_50696,inst_50671,inst_50721,inst_50723,inst_50729,inst_50725,inst_50726,inst_50727,state_val_50814,c__38971__auto__,k,p,map__50662,map__50662__$1,env,indexes,processing_sequence))
})();
var inst_50832 = com.wsscode.pathom.connect.map_async_serial(inst_50831,processing_sequence);
var state_50864__$1 = (function (){var statearr_50888 = state_50864;
(statearr_50888[(9)] = inst_50830);

return statearr_50888;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50864__$1,(11),inst_50832);
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
});})(c__38971__auto____$1,input,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,map__50697,map__50673,inst_50722,inst_50695,inst_50719,inst_50720,inst_50694,inst_50696,inst_50671,inst_50721,inst_50723,inst_50729,inst_50725,inst_50726,inst_50727,state_val_50814,c__38971__auto__,k,p,map__50662,map__50662__$1,env,indexes,processing_sequence))
;
return ((function (switch__38924__auto__,c__38971__auto____$1,input,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,map__50697,map__50673,inst_50722,inst_50695,inst_50719,inst_50720,inst_50694,inst_50696,inst_50671,inst_50721,inst_50723,inst_50729,inst_50725,inst_50726,inst_50727,state_val_50814,c__38971__auto__,k,p,map__50662,map__50662__$1,env,indexes,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_reader_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$connect$async_reader_$_state_machine__38925__auto____0 = (function (){
var statearr_50889 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50889[(0)] = com$wsscode$pathom$connect$async_reader_$_state_machine__38925__auto__);

(statearr_50889[(1)] = (1));

return statearr_50889;
});
var com$wsscode$pathom$connect$async_reader_$_state_machine__38925__auto____1 = (function (state_50864){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_50864);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e50890){if((e50890 instanceof Object)){
var ex__38928__auto__ = e50890;
var statearr_50891_54174 = state_50864;
(statearr_50891_54174[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50890;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54176 = state_50864;
state_50864 = G__54176;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader_$_state_machine__38925__auto__ = function(state_50864){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader_$_state_machine__38925__auto____1.call(this,state_50864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader_$_state_machine__38925__auto____0;
com$wsscode$pathom$connect$async_reader_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader_$_state_machine__38925__auto____1;
return com$wsscode$pathom$connect$async_reader_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto____$1,input,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,map__50697,map__50673,inst_50722,inst_50695,inst_50719,inst_50720,inst_50694,inst_50696,inst_50671,inst_50721,inst_50723,inst_50729,inst_50725,inst_50726,inst_50727,state_val_50814,c__38971__auto__,k,p,map__50662,map__50662__$1,env,indexes,processing_sequence))
})();
var state__38973__auto__ = (function (){var statearr_50892 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_50892[(6)] = c__38971__auto____$1);

return statearr_50892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto____$1,input,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,map__50697,map__50673,inst_50722,inst_50695,inst_50719,inst_50720,inst_50694,inst_50696,inst_50671,inst_50721,inst_50723,inst_50729,inst_50725,inst_50726,inst_50727,state_val_50814,c__38971__auto__,k,p,map__50662,map__50662__$1,env,indexes,processing_sequence))
);

return c__38971__auto____$1;
});
;})(input,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,map__50697,map__50673,inst_50722,inst_50695,inst_50719,inst_50720,inst_50694,inst_50696,inst_50671,inst_50721,inst_50723,inst_50729,inst_50725,inst_50726,inst_50727,state_val_50814,c__38971__auto__,k,p,map__50662,map__50662__$1,env,indexes,processing_sequence))
})();
var inst_50729__$1 = com.wsscode.pathom.core.cached_async(inst_50723,inst_50727,inst_50728);
var inst_50730 = com.wsscode.common.async_cljs.chan_QMARK_(inst_50729__$1);
var state_50813__$1 = (function (){var statearr_50893 = state_50813;
(statearr_50893[(17)] = inst_50729__$1);

return statearr_50893;
})();
if(inst_50730){
var statearr_50894_54180 = state_50813__$1;
(statearr_50894_54180[(1)] = (30));

} else {
var statearr_50895_54181 = state_50813__$1;
(statearr_50895_54181[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (1))){
var state_50813__$1 = state_50813;
var statearr_50896_54182 = state_50813__$1;
(statearr_50896_54182[(2)] = null);

(statearr_50896_54182[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (24))){
var inst_50698 = (state_50813[(18)]);
var inst_50716 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50698);
var state_50813__$1 = state_50813;
var statearr_50898_54184 = state_50813__$1;
(statearr_50898_54184[(2)] = inst_50716);

(statearr_50898_54184[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (55))){
var state_50813__$1 = state_50813;
var statearr_50899_54185 = state_50813__$1;
(statearr_50899_54185[(2)] = null);

(statearr_50899_54185[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (39))){
var state_50813__$1 = state_50813;
var statearr_50900_54187 = state_50813__$1;
(statearr_50900_54187[(2)] = null);

(statearr_50900_54187[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (46))){
var inst_50779 = (state_50813[(2)]);
var state_50813__$1 = state_50813;
var statearr_50901_54188 = state_50813__$1;
(statearr_50901_54188[(2)] = inst_50779);

(statearr_50901_54188[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50813,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_50668 = com.wsscode.pathom.connect.async_pick_resolver(env);
var state_50813__$1 = state_50813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50813__$1,(5),inst_50668);
} else {
if((state_val_50814 === (54))){
var inst_50767 = (state_50813[(19)]);
var inst_50750 = (state_50813[(20)]);
var inst_50791 = (state_50813[(7)]);
var inst_50790 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_50767);
var inst_50791__$1 = com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(inst_50790,inst_50750);
var inst_50792 = com.wsscode.common.async_cljs.chan_QMARK_(inst_50791__$1);
var state_50813__$1 = (function (){var statearr_50904 = state_50813;
(statearr_50904[(7)] = inst_50791__$1);

return statearr_50904;
})();
if(inst_50792){
var statearr_50905_54190 = state_50813__$1;
(statearr_50905_54190[(1)] = (57));

} else {
var statearr_50906_54191 = state_50813__$1;
(statearr_50906_54191[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (15))){
var inst_50671 = (state_50813[(14)]);
var inst_50691 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50671);
var state_50813__$1 = state_50813;
var statearr_50907_54192 = state_50813__$1;
(statearr_50907_54192[(2)] = inst_50691);

(statearr_50907_54192[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (48))){
var inst_50751 = (state_50813[(21)]);
var inst_50783 = cljs.core.contains_QMARK_(inst_50751,k);
var state_50813__$1 = state_50813;
if(inst_50783){
var statearr_50908_54194 = state_50813__$1;
(statearr_50908_54194[(1)] = (51));

} else {
var statearr_50909_54195 = state_50813__$1;
(statearr_50909_54195[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (50))){
var inst_50804 = (state_50813[(2)]);
var state_50813__$1 = state_50813;
var statearr_50910_54196 = state_50813__$1;
(statearr_50910_54196[(2)] = inst_50804);

(statearr_50910_54196[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (21))){
var state_50813__$1 = state_50813;
var statearr_50911_54199 = state_50813__$1;
(statearr_50911_54199[(2)] = true);

(statearr_50911_54199[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (31))){
var inst_50729 = (state_50813[(17)]);
var state_50813__$1 = state_50813;
var statearr_50912_54201 = state_50813__$1;
(statearr_50912_54201[(2)] = inst_50729);

(statearr_50912_54201[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (32))){
var inst_50737 = (state_50813[(2)]);
var state_50813__$1 = state_50813;
var statearr_50913_54203 = state_50813__$1;
(statearr_50913_54203[(2)] = inst_50737);

(statearr_50913_54203[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (40))){
var inst_50722 = (state_50813[(8)]);
var inst_50695 = (state_50813[(9)]);
var inst_50719 = (state_50813[(10)]);
var inst_50720 = (state_50813[(11)]);
var inst_50694 = (state_50813[(12)]);
var inst_50696 = (state_50813[(13)]);
var inst_50767 = (state_50813[(19)]);
var inst_50671 = (state_50813[(14)]);
var inst_50751 = (state_50813[(21)]);
var inst_50721 = (state_50813[(15)]);
var inst_50723 = (state_50813[(16)]);
var inst_50750 = (state_50813[(20)]);
var inst_50764 = (state_50813[(2)]);
var inst_50765 = (function (){var input = inst_50722;
var response = inst_50751;
var cache_QMARK_ = inst_50720;
var temp__5718__auto__ = inst_50671;
var batch_QMARK_ = inst_50721;
var env__$1 = inst_50723;
var e = inst_50695;
var s = inst_50696;
var resolver = inst_50719;
var env_SINGLEQUOTE_ = inst_50750;
var map__50697 = inst_50719;
var map__50673 = inst_50694;
return ((function (input,response,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,env_SINGLEQUOTE_,map__50697,map__50673,inst_50722,inst_50695,inst_50719,inst_50720,inst_50694,inst_50696,inst_50767,inst_50671,inst_50751,inst_50721,inst_50723,inst_50750,inst_50764,state_val_50814,c__38971__auto__,k,p,map__50662,map__50662__$1,env,indexes,processing_sequence){
return (function (p1__50660_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__50660_SHARP_], 0));
});
;})(input,response,cache_QMARK_,temp__5718__auto__,batch_QMARK_,env__$1,e,s,resolver,env_SINGLEQUOTE_,map__50697,map__50673,inst_50722,inst_50695,inst_50719,inst_50720,inst_50694,inst_50696,inst_50767,inst_50671,inst_50751,inst_50721,inst_50723,inst_50750,inst_50764,state_val_50814,c__38971__auto__,k,p,map__50662,map__50662__$1,env,indexes,processing_sequence))
})();
var inst_50766 = com.wsscode.pathom.core.swap_entity_BANG_(inst_50750,inst_50765);
var inst_50767__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50751,k);
var inst_50768 = cljs.core.sequential_QMARK_(inst_50767__$1);
var state_50813__$1 = (function (){var statearr_50917 = state_50813;
(statearr_50917[(22)] = inst_50766);

(statearr_50917[(23)] = inst_50764);

(statearr_50917[(19)] = inst_50767__$1);

return statearr_50917;
})();
if(inst_50768){
var statearr_50918_54210 = state_50813__$1;
(statearr_50918_54210[(1)] = (41));

} else {
var statearr_50919_54211 = state_50813__$1;
(statearr_50919_54211[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (56))){
var inst_50802 = (state_50813[(2)]);
var state_50813__$1 = state_50813;
var statearr_50921_54215 = state_50813__$1;
(statearr_50921_54215[(2)] = inst_50802);

(statearr_50921_54215[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (33))){
var inst_50733 = (state_50813[(2)]);
var inst_50734 = com.wsscode.common.async_cljs.throw_err(inst_50733);
var state_50813__$1 = state_50813;
var statearr_50923_54221 = state_50813__$1;
(statearr_50923_54221[(2)] = inst_50734);

(statearr_50923_54221[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (13))){
var state_50813__$1 = state_50813;
var statearr_50924_54222 = state_50813__$1;
(statearr_50924_54222[(2)] = false);

(statearr_50924_54222[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (22))){
var state_50813__$1 = state_50813;
var statearr_50925_54231 = state_50813__$1;
(statearr_50925_54231[(2)] = false);

(statearr_50925_54231[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (36))){
var inst_50747 = (state_50813[(2)]);
var state_50813__$1 = state_50813;
var statearr_50926_54233 = state_50813__$1;
(statearr_50926_54233[(2)] = inst_50747);

(statearr_50926_54233[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (41))){
var inst_50771 = (state_50813[(24)]);
var inst_50767 = (state_50813[(19)]);
var inst_50750 = (state_50813[(20)]);
var inst_50770 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.atom,inst_50767);
var inst_50771__$1 = com.wsscode.pathom.core.join_seq(inst_50750,inst_50770);
var inst_50772 = com.wsscode.common.async_cljs.chan_QMARK_(inst_50771__$1);
var state_50813__$1 = (function (){var statearr_50927 = state_50813;
(statearr_50927[(24)] = inst_50771__$1);

return statearr_50927;
})();
if(inst_50772){
var statearr_50929_54239 = state_50813__$1;
(statearr_50929_54239[(1)] = (44));

} else {
var statearr_50930_54240 = state_50813__$1;
(statearr_50930_54240[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (43))){
var inst_50806 = (state_50813[(2)]);
var state_50813__$1 = state_50813;
var statearr_50931_54241 = state_50813__$1;
(statearr_50931_54241[(2)] = inst_50806);

(statearr_50931_54241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (29))){
var inst_50751 = (state_50813[(21)]);
var inst_50723 = (state_50813[(16)]);
var inst_50749 = (state_50813[(2)]);
var inst_50750 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_50749,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),inst_50723);
var inst_50751__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_50749,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_50752 = (inst_50751__$1 == null);
var inst_50753 = cljs.core.map_QMARK_(inst_50751__$1);
var inst_50754 = ((inst_50752) || (inst_50753));
var inst_50755 = cljs.core.not(inst_50754);
var state_50813__$1 = (function (){var statearr_50934 = state_50813;
(statearr_50934[(21)] = inst_50751__$1);

(statearr_50934[(20)] = inst_50750);

return statearr_50934;
})();
if(inst_50755){
var statearr_50935_54245 = state_50813__$1;
(statearr_50935_54245[(1)] = (38));

} else {
var statearr_50937_54247 = state_50813__$1;
(statearr_50937_54247[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (44))){
var inst_50771 = (state_50813[(24)]);
var state_50813__$1 = state_50813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50813__$1,(47),inst_50771);
} else {
if((state_val_50814 === (6))){
var inst_50671 = (state_50813[(14)]);
var inst_50675 = (inst_50671 == null);
var inst_50676 = cljs.core.not(inst_50675);
var state_50813__$1 = state_50813;
if(inst_50676){
var statearr_50941_54249 = state_50813__$1;
(statearr_50941_54249[(1)] = (9));

} else {
var statearr_50942_54254 = state_50813__$1;
(statearr_50942_54254[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (28))){
var inst_50695 = (state_50813[(9)]);
var inst_50739 = (state_50813[(25)]);
var inst_50723 = (state_50813[(16)]);
var inst_50739__$1 = com.wsscode.pathom.connect.call_resolver(inst_50723,inst_50695);
var inst_50740 = com.wsscode.common.async_cljs.chan_QMARK_(inst_50739__$1);
var state_50813__$1 = (function (){var statearr_50945 = state_50813;
(statearr_50945[(25)] = inst_50739__$1);

return statearr_50945;
})();
if(inst_50740){
var statearr_50946_54255 = state_50813__$1;
(statearr_50946_54255[(1)] = (34));

} else {
var statearr_50947_54256 = state_50813__$1;
(statearr_50947_54256[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (51))){
var inst_50767 = (state_50813[(19)]);
var state_50813__$1 = state_50813;
var statearr_50949_54257 = state_50813__$1;
(statearr_50949_54257[(2)] = inst_50767);

(statearr_50949_54257[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (25))){
var inst_50698 = (state_50813[(18)]);
var state_50813__$1 = state_50813;
var statearr_50951_54258 = state_50813__$1;
(statearr_50951_54258[(2)] = inst_50698);

(statearr_50951_54258[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (34))){
var inst_50739 = (state_50813[(25)]);
var state_50813__$1 = state_50813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50813__$1,(37),inst_50739);
} else {
if((state_val_50814 === (17))){
var inst_50698 = (state_50813[(18)]);
var inst_50694 = (state_50813[(12)]);
var inst_50696 = (state_50813[(13)]);
var inst_50694__$1 = (state_50813[(2)]);
var inst_50695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50694__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var inst_50696__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50694__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var inst_50698__$1 = com.wsscode.pathom.connect.resolver_data(env,inst_50696__$1);
var inst_50700 = (inst_50698__$1 == null);
var inst_50701 = cljs.core.not(inst_50700);
var state_50813__$1 = (function (){var statearr_50953 = state_50813;
(statearr_50953[(9)] = inst_50695);

(statearr_50953[(18)] = inst_50698__$1);

(statearr_50953[(12)] = inst_50694__$1);

(statearr_50953[(13)] = inst_50696__$1);

return statearr_50953;
})();
if(inst_50701){
var statearr_50954_54262 = state_50813__$1;
(statearr_50954_54262[(1)] = (18));

} else {
var statearr_50956_54263 = state_50813__$1;
(statearr_50956_54263[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (3))){
var inst_50664 = (state_50813[(2)]);
var state_50813__$1 = state_50813;
var statearr_50958_54264 = state_50813__$1;
(statearr_50958_54264[(2)] = inst_50664);


cljs.core.async.impl.ioc_helpers.process_exception(state_50813__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (12))){
var state_50813__$1 = state_50813;
var statearr_50959_54265 = state_50813__$1;
(statearr_50959_54265[(2)] = true);

(statearr_50959_54265[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (2))){
var inst_50811 = (state_50813[(2)]);
var state_50813__$1 = state_50813;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50813__$1,inst_50811);
} else {
if((state_val_50814 === (23))){
var inst_50711 = (state_50813[(2)]);
var state_50813__$1 = state_50813;
var statearr_50960_54270 = state_50813__$1;
(statearr_50960_54270[(2)] = inst_50711);

(statearr_50960_54270[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (47))){
var inst_50775 = (state_50813[(2)]);
var inst_50776 = com.wsscode.common.async_cljs.throw_err(inst_50775);
var state_50813__$1 = state_50813;
var statearr_50961_54272 = state_50813__$1;
(statearr_50961_54272[(2)] = inst_50776);

(statearr_50961_54272[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (35))){
var inst_50739 = (state_50813[(25)]);
var state_50813__$1 = state_50813;
var statearr_50962_54273 = state_50813__$1;
(statearr_50962_54273[(2)] = inst_50739);

(statearr_50962_54273[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (19))){
var state_50813__$1 = state_50813;
var statearr_50963_54275 = state_50813__$1;
(statearr_50963_54275[(2)] = false);

(statearr_50963_54275[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (57))){
var inst_50791 = (state_50813[(7)]);
var state_50813__$1 = state_50813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50813__$1,(60),inst_50791);
} else {
if((state_val_50814 === (11))){
var inst_50689 = (state_50813[(2)]);
var state_50813__$1 = state_50813;
if(cljs.core.truth_(inst_50689)){
var statearr_50965_54276 = state_50813__$1;
(statearr_50965_54276[(1)] = (15));

} else {
var statearr_50966_54277 = state_50813__$1;
(statearr_50966_54277[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (9))){
var inst_50671 = (state_50813[(14)]);
var inst_50678 = inst_50671.cljs$lang$protocol_mask$partition0$;
var inst_50679 = (inst_50678 & (64));
var inst_50680 = inst_50671.cljs$core$ISeq$;
var inst_50681 = (cljs.core.PROTOCOL_SENTINEL === inst_50680);
var inst_50682 = ((inst_50679) || (inst_50681));
var state_50813__$1 = state_50813;
if(cljs.core.truth_(inst_50682)){
var statearr_50967_54284 = state_50813__$1;
(statearr_50967_54284[(1)] = (12));

} else {
var statearr_50968_54285 = state_50813__$1;
(statearr_50968_54285[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (5))){
var inst_50671 = (state_50813[(14)]);
var inst_50670 = (state_50813[(2)]);
var inst_50671__$1 = com.wsscode.common.async_cljs.throw_err(inst_50670);
var state_50813__$1 = (function (){var statearr_50970 = state_50813;
(statearr_50970[(14)] = inst_50671__$1);

return statearr_50970;
})();
if(cljs.core.truth_(inst_50671__$1)){
var statearr_50972_54287 = state_50813__$1;
(statearr_50972_54287[(1)] = (6));

} else {
var statearr_50973_54288 = state_50813__$1;
(statearr_50973_54288[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (14))){
var inst_50686 = (state_50813[(2)]);
var state_50813__$1 = state_50813;
var statearr_50974_54289 = state_50813__$1;
(statearr_50974_54289[(2)] = inst_50686);

(statearr_50974_54289[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (45))){
var inst_50771 = (state_50813[(24)]);
var state_50813__$1 = state_50813;
var statearr_50975_54290 = state_50813__$1;
(statearr_50975_54290[(2)] = inst_50771);

(statearr_50975_54290[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (53))){
var inst_50787 = (state_50813[(2)]);
var state_50813__$1 = state_50813;
var statearr_50976_54293 = state_50813__$1;
(statearr_50976_54293[(2)] = inst_50787);

(statearr_50976_54293[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (26))){
var inst_50719 = (state_50813[(10)]);
var inst_50720 = (state_50813[(11)]);
var inst_50719__$1 = (state_50813[(2)]);
var inst_50720__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_50719__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_50721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50719__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_50722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50719__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_50723 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_50719__$1);
var state_50813__$1 = (function (){var statearr_50978 = state_50813;
(statearr_50978[(8)] = inst_50722);

(statearr_50978[(10)] = inst_50719__$1);

(statearr_50978[(11)] = inst_50720__$1);

(statearr_50978[(15)] = inst_50721);

(statearr_50978[(16)] = inst_50723);

return statearr_50978;
})();
if(cljs.core.truth_(inst_50720__$1)){
var statearr_50979_54295 = state_50813__$1;
(statearr_50979_54295[(1)] = (27));

} else {
var statearr_50980_54296 = state_50813__$1;
(statearr_50980_54296[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (16))){
var inst_50671 = (state_50813[(14)]);
var state_50813__$1 = state_50813;
var statearr_50983_54297 = state_50813__$1;
(statearr_50983_54297[(2)] = inst_50671);

(statearr_50983_54297[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (38))){
var inst_50696 = (state_50813[(13)]);
var inst_50751 = (state_50813[(21)]);
var inst_50757 = [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"response","response",-1068424192)];
var inst_50758 = [inst_50696,inst_50751];
var inst_50759 = cljs.core.PersistentHashMap.fromArrays(inst_50757,inst_50758);
var inst_50760 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Response from reader must be a map.",inst_50759);
var inst_50761 = (function(){throw inst_50760})();
var state_50813__$1 = state_50813;
var statearr_50985_54298 = state_50813__$1;
(statearr_50985_54298[(2)] = inst_50761);

(statearr_50985_54298[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (30))){
var inst_50729 = (state_50813[(17)]);
var state_50813__$1 = state_50813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50813__$1,(33),inst_50729);
} else {
if((state_val_50814 === (10))){
var state_50813__$1 = state_50813;
var statearr_50988_54301 = state_50813__$1;
(statearr_50988_54301[(2)] = false);

(statearr_50988_54301[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (18))){
var inst_50698 = (state_50813[(18)]);
var inst_50703 = inst_50698.cljs$lang$protocol_mask$partition0$;
var inst_50704 = (inst_50703 & (64));
var inst_50705 = inst_50698.cljs$core$ISeq$;
var inst_50706 = (cljs.core.PROTOCOL_SENTINEL === inst_50705);
var inst_50707 = ((inst_50704) || (inst_50706));
var state_50813__$1 = state_50813;
if(cljs.core.truth_(inst_50707)){
var statearr_50990_54302 = state_50813__$1;
(statearr_50990_54302[(1)] = (21));

} else {
var statearr_50991_54303 = state_50813__$1;
(statearr_50991_54303[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (52))){
var state_50813__$1 = state_50813;
var statearr_50994_54306 = state_50813__$1;
(statearr_50994_54306[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));

(statearr_50994_54306[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (42))){
var inst_50767 = (state_50813[(19)]);
var inst_50781 = (inst_50767 == null);
var state_50813__$1 = state_50813;
if(cljs.core.truth_(inst_50781)){
var statearr_50995_54308 = state_50813__$1;
(statearr_50995_54308[(1)] = (48));

} else {
var statearr_50996_54309 = state_50813__$1;
(statearr_50996_54309[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (37))){
var inst_50743 = (state_50813[(2)]);
var inst_50744 = com.wsscode.common.async_cljs.throw_err(inst_50743);
var state_50813__$1 = state_50813;
var statearr_51000_54310 = state_50813__$1;
(statearr_51000_54310[(2)] = inst_50744);

(statearr_51000_54310[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (8))){
var inst_50809 = (state_50813[(2)]);
var state_50813__$1 = state_50813;
var statearr_51002_54311 = state_50813__$1;
(statearr_51002_54311[(2)] = inst_50809);


cljs.core.async.impl.ioc_helpers.process_exception(state_50813__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50814 === (49))){
var state_50813__$1 = state_50813;
var statearr_51003_54314 = state_50813__$1;
(statearr_51003_54314[(1)] = (54));



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
});})(c__38971__auto__,k,p,map__50662,map__50662__$1,env,indexes,processing_sequence))
;
return ((function (switch__38924__auto__,c__38971__auto__,k,p,map__50662,map__50662__$1,env,indexes,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_reader_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$connect$async_reader_$_state_machine__38925__auto____0 = (function (){
var statearr_51007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51007[(0)] = com$wsscode$pathom$connect$async_reader_$_state_machine__38925__auto__);

(statearr_51007[(1)] = (1));

return statearr_51007;
});
var com$wsscode$pathom$connect$async_reader_$_state_machine__38925__auto____1 = (function (state_50813){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_50813);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e51008){if((e51008 instanceof Object)){
var ex__38928__auto__ = e51008;
var statearr_51010_54319 = state_50813;
(statearr_51010_54319[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51008;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54320 = state_50813;
state_50813 = G__54320;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader_$_state_machine__38925__auto__ = function(state_50813){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader_$_state_machine__38925__auto____1.call(this,state_50813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader_$_state_machine__38925__auto____0;
com$wsscode$pathom$connect$async_reader_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader_$_state_machine__38925__auto____1;
return com$wsscode$pathom$connect$async_reader_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,k,p,map__50662,map__50662__$1,env,indexes,processing_sequence))
})();
var state__38973__auto__ = (function (){var statearr_51012 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_51012[(6)] = c__38971__auto__);

return statearr_51012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,k,p,map__50662,map__50662__$1,env,indexes,processing_sequence))
);

return c__38971__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.async_read_cache_read = (function com$wsscode$pathom$connect$async_read_cache_read(env,resolver_sym,e,batch_QMARK_,processing_sequence,trace_data,input){
var params = com.wsscode.pathom.core.params(env);
return com.wsscode.pathom.core.cached_async(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,e,params], null),((function (params){
return (function (){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,params){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,params){
return (function (state_51124){
var state_val_51125 = (state_51124[(1)]);
if((state_val_51125 === (7))){
var inst_51024 = (state_51124[(2)]);
var state_51124__$1 = state_51124;
if(cljs.core.truth_(inst_51024)){
var statearr_51127_54323 = state_51124__$1;
(statearr_51127_54323[(1)] = (8));

} else {
var statearr_51128_54326 = state_51124__$1;
(statearr_51128_54326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51125 === (20))){
var inst_51090 = (state_51124[(7)]);
var state_51124__$1 = state_51124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51124__$1,(23),inst_51090);
} else {
if((state_val_51125 === (27))){
var inst_51114 = (state_51124[(2)]);
var inst_51115 = com.wsscode.common.async_cljs.throw_err(inst_51114);
var state_51124__$1 = state_51124;
var statearr_51129_54327 = state_51124__$1;
(statearr_51129_54327[(2)] = inst_51115);

(statearr_51129_54327[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51125 === (1))){
var state_51124__$1 = state_51124;
var statearr_51130_54328 = state_51124__$1;
(statearr_51130_54328[(2)] = null);

(statearr_51130_54328[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51125 === (24))){
var inst_51110 = (state_51124[(8)]);
var state_51124__$1 = state_51124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51124__$1,(27),inst_51110);
} else {
if((state_val_51125 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_51124,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_51124__$1 = state_51124;
if(cljs.core.truth_(batch_QMARK_)){
var statearr_51131_54329 = state_51124__$1;
(statearr_51131_54329[(1)] = (5));

} else {
var statearr_51132_54330 = state_51124__$1;
(statearr_51132_54330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51125 === (15))){
var inst_51048 = (state_51124[(9)]);
var state_51124__$1 = state_51124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51124__$1,(18),inst_51048);
} else {
if((state_val_51125 === (21))){
var inst_51090 = (state_51124[(7)]);
var state_51124__$1 = state_51124;
var statearr_51133_54331 = state_51124__$1;
(statearr_51133_54331[(2)] = inst_51090);

(statearr_51133_54331[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51125 === (13))){
var inst_51108 = (state_51124[(2)]);
var state_51124__$1 = state_51124;
var statearr_51134_54333 = state_51124__$1;
(statearr_51134_54333[(2)] = inst_51108);

(statearr_51134_54333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51125 === (22))){
var inst_51081 = (state_51124[(10)]);
var inst_51098 = (state_51124[(2)]);
var inst_51099 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_51100 = cljs.core.count(inst_51098);
var inst_51101 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_51100];
var inst_51102 = cljs.core.PersistentHashMap.fromArrays(inst_51099,inst_51101);
var inst_51103 = com.wsscode.pathom.trace.trace(env,inst_51102);
var inst_51104 = cljs.core.zipmap(inst_51081,inst_51098);
var inst_51105 = com.wsscode.pathom.connect.cache_batch(env,resolver_sym,inst_51104);
var inst_51106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51104,e);
var state_51124__$1 = (function (){var statearr_51135 = state_51124;
(statearr_51135[(11)] = inst_51103);

(statearr_51135[(12)] = inst_51105);

return statearr_51135;
})();
var statearr_51136_54337 = state_51124__$1;
(statearr_51136_54337[(2)] = inst_51106);

(statearr_51136_54337[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51125 === (6))){
var state_51124__$1 = state_51124;
var statearr_51137_54338 = state_51124__$1;
(statearr_51137_54338[(2)] = batch_QMARK_);

(statearr_51137_54338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51125 === (25))){
var inst_51110 = (state_51124[(8)]);
var state_51124__$1 = state_51124;
var statearr_51138_54340 = state_51124__$1;
(statearr_51138_54340[(2)] = inst_51110);

(statearr_51138_54340[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51125 === (17))){
var inst_51029 = (state_51124[(13)]);
var inst_51043 = (state_51124[(14)]);
var inst_51056 = (state_51124[(2)]);
var inst_51057 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_51058 = cljs.core.count(inst_51056);
var inst_51059 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_51058];
var inst_51060 = cljs.core.PersistentHashMap.fromArrays(inst_51057,inst_51059);
var inst_51061 = com.wsscode.pathom.trace.trace(env,inst_51060);
var inst_51062 = cljs.core.zipmap(inst_51043,inst_51056);
var inst_51063 = com.wsscode.pathom.connect.cache_batch(env,resolver_sym,inst_51062);
var inst_51064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51062,e);
var inst_51069 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_51070 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_51029,inst_51069);
var state_51124__$1 = (function (){var statearr_51139 = state_51124;
(statearr_51139[(15)] = inst_51061);

(statearr_51139[(16)] = inst_51063);

(statearr_51139[(17)] = inst_51070);

return statearr_51139;
})();
var statearr_51140_54343 = state_51124__$1;
(statearr_51140_54343[(2)] = inst_51064);

(statearr_51140_54343[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51125 === (3))){
var inst_51017 = (state_51124[(2)]);
var state_51124__$1 = state_51124;
var statearr_51141_54345 = state_51124__$1;
(statearr_51141_54345[(2)] = inst_51017);


cljs.core.async.impl.ioc_helpers.process_exception(state_51124__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51125 === (12))){
var inst_51072 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_51073 = com.wsscode.pathom.trace.trace(env,inst_51072);
var inst_51074 = (function (){var _ = inst_51073;
return ((function (_,inst_51072,inst_51073,state_val_51125,c__38971__auto__,params){
return (function (p1__51016_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__51016_SHARP_,input);
});
;})(_,inst_51072,inst_51073,state_val_51125,c__38971__auto__,params))
})();
var inst_51075 = (function (){var _ = inst_51073;
return ((function (_,inst_51072,inst_51073,inst_51074,state_val_51125,c__38971__auto__,params){
return (function (p1__51015_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__51015_SHARP_,input);
});
;})(_,inst_51072,inst_51073,inst_51074,state_val_51125,c__38971__auto__,params))
})();
var inst_51076 = com.wsscode.pathom.connect.map_async_serial(inst_51075,processing_sequence);
var state_51124__$1 = (function (){var statearr_51142 = state_51124;
(statearr_51142[(18)] = inst_51074);

return statearr_51142;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51124__$1,(19),inst_51076);
} else {
if((state_val_51125 === (2))){
var inst_51122 = (state_51124[(2)]);
var state_51124__$1 = state_51124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51124__$1,inst_51122);
} else {
if((state_val_51125 === (23))){
var inst_51094 = (state_51124[(2)]);
var inst_51095 = com.wsscode.common.async_cljs.throw_err(inst_51094);
var state_51124__$1 = state_51124;
var statearr_51144_54349 = state_51124__$1;
(statearr_51144_54349[(2)] = inst_51095);

(statearr_51144_54349[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51125 === (19))){
var inst_51074 = (state_51124[(18)]);
var inst_51081 = (state_51124[(10)]);
var inst_51090 = (state_51124[(7)]);
var inst_51078 = (state_51124[(2)]);
var inst_51079 = com.wsscode.common.async_cljs.throw_err(inst_51078);
var inst_51080 = cljs.core.filterv(inst_51074,inst_51079);
var inst_51081__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_51080);
var inst_51086 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_51087 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_51081__$1];
var inst_51088 = cljs.core.PersistentHashMap.fromArrays(inst_51086,inst_51087);
var inst_51089 = com.wsscode.pathom.trace.trace(env,inst_51088);
var inst_51090__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_51081__$1);
var inst_51091 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51090__$1);
var state_51124__$1 = (function (){var statearr_51145 = state_51124;
(statearr_51145[(10)] = inst_51081__$1);

(statearr_51145[(19)] = inst_51089);

(statearr_51145[(7)] = inst_51090__$1);

return statearr_51145;
})();
if(inst_51091){
var statearr_51146_54352 = state_51124__$1;
(statearr_51146_54352[(1)] = (20));

} else {
var statearr_51147_54353 = state_51124__$1;
(statearr_51147_54353[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51125 === (11))){
var inst_51029 = (state_51124[(13)]);
var inst_51028 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_51029__$1 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_51028);
var inst_51030 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(trace_data,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_51031 = com.wsscode.pathom.trace.trace(env,inst_51030);
var inst_51032 = (function (){var trace_id__21490__auto__ = inst_51029__$1;
var _ = inst_51031;
return ((function (trace_id__21490__auto__,_,inst_51029,inst_51028,inst_51029__$1,inst_51030,inst_51031,state_val_51125,c__38971__auto__,params){
return (function (p1__51016_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(p1__51016_SHARP_,input);
});
;})(trace_id__21490__auto__,_,inst_51029,inst_51028,inst_51029__$1,inst_51030,inst_51031,state_val_51125,c__38971__auto__,params))
})();
var inst_51033 = (function (){var trace_id__21490__auto__ = inst_51029__$1;
var _ = inst_51031;
return ((function (trace_id__21490__auto__,_,inst_51029,inst_51028,inst_51029__$1,inst_51030,inst_51031,inst_51032,state_val_51125,c__38971__auto__,params){
return (function (p1__51015_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__51015_SHARP_,input);
});
;})(trace_id__21490__auto__,_,inst_51029,inst_51028,inst_51029__$1,inst_51030,inst_51031,inst_51032,state_val_51125,c__38971__auto__,params))
})();
var inst_51034 = com.wsscode.pathom.connect.map_async_serial(inst_51033,processing_sequence);
var state_51124__$1 = (function (){var statearr_51148 = state_51124;
(statearr_51148[(13)] = inst_51029__$1);

(statearr_51148[(20)] = inst_51032);

return statearr_51148;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51124__$1,(14),inst_51034);
} else {
if((state_val_51125 === (9))){
var inst_51110 = (state_51124[(8)]);
var inst_51110__$1 = com.wsscode.pathom.connect.call_resolver(env,e);
var inst_51111 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51110__$1);
var state_51124__$1 = (function (){var statearr_51153 = state_51124;
(statearr_51153[(8)] = inst_51110__$1);

return statearr_51153;
})();
if(inst_51111){
var statearr_51154_54360 = state_51124__$1;
(statearr_51154_54360[(1)] = (24));

} else {
var statearr_51155_54361 = state_51124__$1;
(statearr_51155_54361[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51125 === (5))){
var state_51124__$1 = state_51124;
var statearr_51160_54362 = state_51124__$1;
(statearr_51160_54362[(2)] = processing_sequence);

(statearr_51160_54362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51125 === (14))){
var inst_51043 = (state_51124[(14)]);
var inst_51048 = (state_51124[(9)]);
var inst_51032 = (state_51124[(20)]);
var inst_51040 = (state_51124[(2)]);
var inst_51041 = com.wsscode.common.async_cljs.throw_err(inst_51040);
var inst_51042 = cljs.core.filterv(inst_51032,inst_51041);
var inst_51043__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_51042);
var inst_51044 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_51045 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_51043__$1];
var inst_51046 = cljs.core.PersistentHashMap.fromArrays(inst_51044,inst_51045);
var inst_51047 = com.wsscode.pathom.trace.trace(env,inst_51046);
var inst_51048__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_51043__$1);
var inst_51049 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51048__$1);
var state_51124__$1 = (function (){var statearr_51165 = state_51124;
(statearr_51165[(14)] = inst_51043__$1);

(statearr_51165[(9)] = inst_51048__$1);

(statearr_51165[(21)] = inst_51047);

return statearr_51165;
})();
if(inst_51049){
var statearr_51166_54365 = state_51124__$1;
(statearr_51166_54365[(1)] = (15));

} else {
var statearr_51167_54366 = state_51124__$1;
(statearr_51167_54366[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51125 === (26))){
var inst_51118 = (state_51124[(2)]);
var state_51124__$1 = state_51124;
var statearr_51172_54367 = state_51124__$1;
(statearr_51172_54367[(2)] = inst_51118);

(statearr_51172_54367[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51125 === (16))){
var inst_51048 = (state_51124[(9)]);
var state_51124__$1 = state_51124;
var statearr_51177_54368 = state_51124__$1;
(statearr_51177_54368[(2)] = inst_51048);

(statearr_51177_54368[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51125 === (10))){
var inst_51120 = (state_51124[(2)]);
var state_51124__$1 = state_51124;
var statearr_51182_54369 = state_51124__$1;
(statearr_51182_54369[(2)] = inst_51120);


cljs.core.async.impl.ioc_helpers.process_exception(state_51124__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51125 === (18))){
var inst_51052 = (state_51124[(2)]);
var inst_51053 = com.wsscode.common.async_cljs.throw_err(inst_51052);
var state_51124__$1 = state_51124;
var statearr_51187_54370 = state_51124__$1;
(statearr_51187_54370[(2)] = inst_51053);

(statearr_51187_54370[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51125 === (8))){
var inst_51026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_51124__$1 = state_51124;
if(cljs.core.truth_(inst_51026)){
var statearr_51192_54371 = state_51124__$1;
(statearr_51192_54371[(1)] = (11));

} else {
var statearr_51193_54372 = state_51124__$1;
(statearr_51193_54372[(1)] = (12));

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
});})(c__38971__auto__,params))
;
return ((function (switch__38924__auto__,c__38971__auto__,params){
return (function() {
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38925__auto____0 = (function (){
var statearr_51194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51194[(0)] = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38925__auto__);

(statearr_51194[(1)] = (1));

return statearr_51194;
});
var com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38925__auto____1 = (function (state_51124){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_51124);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e51195){if((e51195 instanceof Object)){
var ex__38928__auto__ = e51195;
var statearr_51200_54374 = state_51124;
(statearr_51200_54374[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51195;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54377 = state_51124;
state_51124 = G__54377;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38925__auto__ = function(state_51124){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38925__auto____1.call(this,state_51124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38925__auto____0;
com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38925__auto____1;
return com$wsscode$pathom$connect$async_read_cache_read_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,params))
})();
var state__38973__auto__ = (function (){var statearr_51209 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_51209[(6)] = c__38971__auto__);

return statearr_51209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,params))
);

return c__38971__auto__;
});})(params))
);
});
/**
 * Like reader2, but supports async values on resolver return.
 */
com.wsscode.pathom.connect.async_reader2 = (function com$wsscode$pathom$connect$async_reader2(p__51228){
var map__51229 = p__51228;
var map__51229__$1 = (((((!((map__51229 == null))))?(((((map__51229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51229):map__51229);
var env = map__51229__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51229__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51229__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51229__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var temp__5718__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__51231 = temp__5718__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51231,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51231,(1),null);
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,vec__51231,plan,out,temp__5718__auto__,map__51229,map__51229__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,vec__51231,plan,out,temp__5718__auto__,map__51229,map__51229__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (state_51443){
var state_val_51444 = (state_51443[(1)]);
if((state_val_51444 === (7))){
var inst_51259 = (state_51443[(7)]);
var inst_51267 = (state_51443[(8)]);
var inst_51271 = (state_51443[(9)]);
var inst_51266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51259,(0),null);
var inst_51267__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51259,(1),null);
var inst_51268 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51269 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),inst_51267__$1];
var inst_51270 = (new cljs.core.PersistentVector(null,2,(5),inst_51268,inst_51269,null));
var inst_51271__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_51270);
var inst_51273 = (inst_51271__$1 == null);
var inst_51274 = cljs.core.not(inst_51273);
var state_51443__$1 = (function (){var statearr_51445 = state_51443;
(statearr_51445[(8)] = inst_51267__$1);

(statearr_51445[(10)] = inst_51266);

(statearr_51445[(9)] = inst_51271__$1);

return statearr_51445;
})();
if(inst_51274){
var statearr_51446_54393 = state_51443__$1;
(statearr_51446_54393[(1)] = (10));

} else {
var statearr_51447_54394 = state_51443__$1;
(statearr_51447_54394[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (59))){
var inst_51409 = (state_51443[(11)]);
var inst_51414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51409,(0),null);
var inst_51415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51409,(1),null);
var inst_51416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51409,(2),null);
var inst_51251 = inst_51414;
var inst_51252 = inst_51415;
var inst_51253 = inst_51416;
var state_51443__$1 = (function (){var statearr_51448 = state_51443;
(statearr_51448[(12)] = inst_51252);

(statearr_51448[(13)] = inst_51253);

(statearr_51448[(14)] = inst_51251);

return statearr_51448;
})();
var statearr_51449_54395 = state_51443__$1;
(statearr_51449_54395[(2)] = null);

(statearr_51449_54395[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (20))){
var inst_51314 = (state_51443[(15)]);
var inst_51299 = (state_51443[(16)]);
var inst_51297 = (state_51443[(17)]);
var inst_51314__$1 = com.wsscode.pathom.connect.call_resolver(inst_51297,inst_51299);
var inst_51315 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51314__$1);
var state_51443__$1 = (function (){var statearr_51450 = state_51443;
(statearr_51450[(15)] = inst_51314__$1);

return statearr_51450;
})();
if(inst_51315){
var statearr_51451_54396 = state_51443__$1;
(statearr_51451_54396[(1)] = (26));

} else {
var statearr_51452_54397 = state_51443__$1;
(statearr_51452_54397[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (58))){
var inst_51432 = (state_51443[(2)]);
var state_51443__$1 = state_51443;
var statearr_51453_54398 = state_51443__$1;
(statearr_51453_54398[(2)] = inst_51432);

(statearr_51453_54398[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (60))){
var inst_51329 = (state_51443[(18)]);
var inst_51267 = (state_51443[(8)]);
var inst_51297 = (state_51443[(17)]);
var inst_51239 = (state_51443[(19)]);
var inst_51419 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_51420 = [new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),inst_51239,inst_51267,inst_51329];
var inst_51421 = cljs.core.PersistentHashMap.fromArrays(inst_51419,inst_51420);
var inst_51422 = com.wsscode.pathom.trace.trace(inst_51297,inst_51421);
var inst_51423 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_51424 = [inst_51329];
var inst_51425 = cljs.core.PersistentHashMap.fromArrays(inst_51423,inst_51424);
var inst_51426 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_51425);
var inst_51427 = (function(){throw inst_51426})();
var state_51443__$1 = (function (){var statearr_51454 = state_51443;
(statearr_51454[(20)] = inst_51422);

return statearr_51454;
})();
var statearr_51455_54401 = state_51443__$1;
(statearr_51455_54401[(2)] = inst_51427);

(statearr_51455_54401[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (27))){
var inst_51314 = (state_51443[(15)]);
var state_51443__$1 = state_51443;
var statearr_51456_54404 = state_51443__$1;
(statearr_51456_54404[(2)] = inst_51314);

(statearr_51456_54404[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (1))){
var state_51443__$1 = state_51443;
var statearr_51457_54406 = state_51443__$1;
(statearr_51457_54406[(2)] = null);

(statearr_51457_54406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (24))){
var inst_51312 = (state_51443[(2)]);
var state_51443__$1 = state_51443;
var statearr_51459_54408 = state_51443__$1;
(statearr_51459_54408[(2)] = inst_51312);

(statearr_51459_54408[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (55))){
var inst_51394 = (state_51443[(2)]);
var inst_51395 = com.wsscode.common.async_cljs.throw_err(inst_51394);
var state_51443__$1 = state_51443;
var statearr_51460_54409 = state_51443__$1;
(statearr_51460_54409[(2)] = inst_51395);

(statearr_51460_54409[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (39))){
var inst_51260 = (state_51443[(21)]);
var inst_51252 = (state_51443[(12)]);
var inst_51253 = (state_51443[(13)]);
var inst_51344 = (state_51443[(22)]);
var inst_51351 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_51253,inst_51344);
var tmp51458 = inst_51252;
var inst_51251 = inst_51260;
var inst_51252__$1 = tmp51458;
var inst_51253__$1 = inst_51351;
var state_51443__$1 = (function (){var statearr_51461 = state_51443;
(statearr_51461[(12)] = inst_51252__$1);

(statearr_51461[(13)] = inst_51253__$1);

(statearr_51461[(14)] = inst_51251);

return statearr_51461;
})();
var statearr_51462_54411 = state_51443__$1;
(statearr_51462_54411[(2)] = null);

(statearr_51462_54411[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (46))){
var inst_51370 = (state_51443[(23)]);
var inst_51375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51370,(0),null);
var inst_51376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51370,(1),null);
var inst_51377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51370,(2),null);
var inst_51251 = inst_51375;
var inst_51252 = inst_51376;
var inst_51253 = inst_51377;
var state_51443__$1 = (function (){var statearr_51463 = state_51443;
(statearr_51463[(12)] = inst_51252);

(statearr_51463[(13)] = inst_51253);

(statearr_51463[(14)] = inst_51251);

return statearr_51463;
})();
var statearr_51464_54412 = state_51443__$1;
(statearr_51464_54412[(2)] = null);

(statearr_51464_54412[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_51443,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_51238 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_51239 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_51238);
var inst_51247 = cljs.core.seq(plan);
var inst_51248 = cljs.core.first(inst_51247);
var inst_51249 = cljs.core.next(inst_51247);
var inst_51250 = cljs.core.PersistentHashMap.EMPTY;
var inst_51251 = plan;
var inst_51252 = inst_51250;
var inst_51253 = out;
var state_51443__$1 = (function (){var statearr_51465 = state_51443;
(statearr_51465[(12)] = inst_51252);

(statearr_51465[(24)] = inst_51248);

(statearr_51465[(13)] = inst_51253);

(statearr_51465[(25)] = inst_51249);

(statearr_51465[(14)] = inst_51251);

(statearr_51465[(19)] = inst_51239);

return statearr_51465;
})();
var statearr_51466_54413 = state_51443__$1;
(statearr_51466_54413[(2)] = null);

(statearr_51466_54413[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (54))){
var inst_51398 = (state_51443[(2)]);
var state_51443__$1 = state_51443;
var statearr_51467_54414 = state_51443__$1;
(statearr_51467_54414[(2)] = inst_51398);

(statearr_51467_54414[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (15))){
var inst_51284 = (state_51443[(2)]);
var state_51443__$1 = state_51443;
var statearr_51468_54415 = state_51443__$1;
(statearr_51468_54415[(2)] = inst_51284);

(statearr_51468_54415[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (48))){
var inst_51400 = (state_51443[(2)]);
var state_51443__$1 = state_51443;
var statearr_51469_54416 = state_51443__$1;
(statearr_51469_54416[(2)] = inst_51400);

(statearr_51469_54416[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (50))){
var state_51443__$1 = state_51443;
var statearr_51470_54417 = state_51443__$1;
(statearr_51470_54417[(2)] = null);

(statearr_51470_54417[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (21))){
var inst_51324 = (state_51443[(26)]);
var inst_51324__$1 = (state_51443[(2)]);
var state_51443__$1 = (function (){var statearr_51471 = state_51443;
(statearr_51471[(26)] = inst_51324__$1);

return statearr_51471;
})();
if(cljs.core.truth_(inst_51324__$1)){
var statearr_51472_54418 = state_51443__$1;
(statearr_51472_54418[(1)] = (30));

} else {
var statearr_51473_54419 = state_51443__$1;
(statearr_51473_54419[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (31))){
var inst_51327 = cljs.core.PersistentHashMap.EMPTY;
var state_51443__$1 = state_51443;
var statearr_51474_54420 = state_51443__$1;
(statearr_51474_54420[(2)] = inst_51327);

(statearr_51474_54420[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (32))){
var inst_51293 = (state_51443[(27)]);
var inst_51295 = (state_51443[(28)]);
var inst_51260 = (state_51443[(21)]);
var inst_51259 = (state_51443[(7)]);
var inst_51252 = (state_51443[(12)]);
var inst_51329 = (state_51443[(18)]);
var inst_51267 = (state_51443[(8)]);
var inst_51266 = (state_51443[(10)]);
var inst_51299 = (state_51443[(16)]);
var inst_51296 = (state_51443[(29)]);
var inst_51248 = (state_51443[(24)]);
var inst_51253 = (state_51443[(13)]);
var inst_51249 = (state_51443[(25)]);
var inst_51292 = (state_51443[(30)]);
var inst_51302 = (state_51443[(31)]);
var inst_51294 = (state_51443[(32)]);
var inst_51297 = (state_51443[(17)]);
var inst_51251 = (state_51443[(14)]);
var inst_51239 = (state_51443[(19)]);
var inst_51329__$1 = (state_51443[(2)]);
var inst_51330 = (function (){var input = inst_51295;
var step = inst_51259;
var key_SINGLEQUOTE_ = inst_51266;
var G__51243 = inst_51251;
var first__51257 = inst_51259;
var map__51265 = inst_51292;
var response = inst_51329__$1;
var cache_QMARK_ = inst_51293;
var out_left = inst_51253;
var key = inst_51239;
var vec__51244 = plan;
var failed_resolvers = inst_51252;
var vec__51262 = inst_51259;
var batch_QMARK_ = inst_51294;
var seq__51256 = inst_51260;
var output = inst_51296;
var env__$1 = inst_51297;
var e = inst_51299;
var resolver_sym = inst_51267;
var seq__51245 = inst_51249;
var trace_data = inst_51302;
var resolver = inst_51292;
var tail = inst_51260;
var vec__51255 = inst_51251;
var first__51246 = inst_51248;
return ((function (input,step,key_SINGLEQUOTE_,G__51243,first__51257,map__51265,response,cache_QMARK_,out_left,key,vec__51244,failed_resolvers,vec__51262,batch_QMARK_,seq__51256,output,env__$1,e,resolver_sym,seq__51245,trace_data,resolver,tail,vec__51255,first__51246,inst_51293,inst_51295,inst_51260,inst_51259,inst_51252,inst_51329,inst_51267,inst_51266,inst_51299,inst_51296,inst_51248,inst_51253,inst_51249,inst_51292,inst_51302,inst_51294,inst_51297,inst_51251,inst_51239,inst_51329__$1,state_val_51444,c__38971__auto__,vec__51231,plan,out,temp__5718__auto__,map__51229,map__51229__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (error){
var failed_resolvers__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers,resolver_sym,error);
com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$1,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (failed_resolvers__$1,input,step,key_SINGLEQUOTE_,G__51243,first__51257,map__51265,response,cache_QMARK_,out_left,key,vec__51244,failed_resolvers,vec__51262,batch_QMARK_,seq__51256,output,env__$1,e,resolver_sym,seq__51245,trace_data,resolver,tail,vec__51255,first__51246,inst_51293,inst_51295,inst_51260,inst_51259,inst_51252,inst_51329,inst_51267,inst_51266,inst_51299,inst_51296,inst_51248,inst_51253,inst_51249,inst_51292,inst_51302,inst_51294,inst_51297,inst_51251,inst_51239,inst_51329__$1,state_val_51444,c__38971__auto__,vec__51231,plan,out,temp__5718__auto__,map__51229,map__51229__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__51214_SHARP_){
var x__4222__auto__ = ((function (){var or__4131__auto__ = p1__51214_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() * (2));
var y__4223__auto__ = max_resolver_weight;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});})(failed_resolvers__$1,input,step,key_SINGLEQUOTE_,G__51243,first__51257,map__51265,response,cache_QMARK_,out_left,key,vec__51244,failed_resolvers,vec__51262,batch_QMARK_,seq__51256,output,env__$1,e,resolver_sym,seq__51245,trace_data,resolver,tail,vec__51255,first__51246,inst_51293,inst_51295,inst_51260,inst_51259,inst_51252,inst_51329,inst_51267,inst_51266,inst_51299,inst_51296,inst_51248,inst_51253,inst_51249,inst_51292,inst_51302,inst_51294,inst_51297,inst_51251,inst_51239,inst_51329__$1,state_val_51444,c__38971__auto__,vec__51231,plan,out,temp__5718__auto__,map__51229,map__51229__$1,env,indexes,max_resolver_weight,processing_sequence))
], 0));

var temp__5718__auto____$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$1,failed_resolvers__$1);
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__51475 = temp__5718__auto____$1;
var plan__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51475,(0),null);
var out_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51475,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [plan__$1,failed_resolvers__$1,out_SINGLEQUOTE_], null);
} else {
return null;
}
});
;})(input,step,key_SINGLEQUOTE_,G__51243,first__51257,map__51265,response,cache_QMARK_,out_left,key,vec__51244,failed_resolvers,vec__51262,batch_QMARK_,seq__51256,output,env__$1,e,resolver_sym,seq__51245,trace_data,resolver,tail,vec__51255,first__51246,inst_51293,inst_51295,inst_51260,inst_51259,inst_51252,inst_51329,inst_51267,inst_51266,inst_51299,inst_51296,inst_51248,inst_51253,inst_51249,inst_51292,inst_51302,inst_51294,inst_51297,inst_51251,inst_51239,inst_51329__$1,state_val_51444,c__38971__auto__,vec__51231,plan,out,temp__5718__auto__,map__51229,map__51229__$1,env,indexes,max_resolver_weight,processing_sequence))
})();
var inst_51331 = cljs.core.map_QMARK_(inst_51329__$1);
var state_51443__$1 = (function (){var statearr_51478 = state_51443;
(statearr_51478[(18)] = inst_51329__$1);

(statearr_51478[(33)] = inst_51330);

return statearr_51478;
})();
if(inst_51331){
var statearr_51479_54427 = state_51443__$1;
(statearr_51479_54427[(1)] = (33));

} else {
var statearr_51480_54428 = state_51443__$1;
(statearr_51480_54428[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (40))){
var inst_51333 = (state_51443[(34)]);
var inst_51334 = (state_51443[(35)]);
var inst_51354 = (state_51443[(36)]);
var inst_51354__$1 = com.wsscode.pathom.connect.process_simple_reader_response(inst_51333,inst_51334);
var inst_51355 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51354__$1);
var state_51443__$1 = (function (){var statearr_51481 = state_51443;
(statearr_51481[(36)] = inst_51354__$1);

return statearr_51481;
})();
if(inst_51355){
var statearr_51482_54429 = state_51443__$1;
(statearr_51482_54429[(1)] = (42));

} else {
var statearr_51483_54430 = state_51443__$1;
(statearr_51483_54430[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (56))){
var inst_51329 = (state_51443[(18)]);
var inst_51409 = (state_51443[(11)]);
var inst_51330 = (state_51443[(33)]);
var inst_51405 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_51406 = [inst_51329];
var inst_51407 = cljs.core.PersistentHashMap.fromArrays(inst_51405,inst_51406);
var inst_51408 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_51407);
var inst_51409__$1 = (inst_51330.cljs$core$IFn$_invoke$arity$1 ? inst_51330.cljs$core$IFn$_invoke$arity$1(inst_51408) : inst_51330.call(null,inst_51408));
var state_51443__$1 = (function (){var statearr_51484 = state_51443;
(statearr_51484[(11)] = inst_51409__$1);

return statearr_51484;
})();
if(cljs.core.truth_(inst_51409__$1)){
var statearr_51485_54433 = state_51443__$1;
(statearr_51485_54433[(1)] = (59));

} else {
var statearr_51486_54434 = state_51443__$1;
(statearr_51486_54434[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (33))){
var inst_51293 = (state_51443[(27)]);
var inst_51295 = (state_51443[(28)]);
var inst_51333 = (state_51443[(34)]);
var inst_51260 = (state_51443[(21)]);
var inst_51259 = (state_51443[(7)]);
var inst_51252 = (state_51443[(12)]);
var inst_51329 = (state_51443[(18)]);
var inst_51267 = (state_51443[(8)]);
var inst_51266 = (state_51443[(10)]);
var inst_51299 = (state_51443[(16)]);
var inst_51296 = (state_51443[(29)]);
var inst_51248 = (state_51443[(24)]);
var inst_51253 = (state_51443[(13)]);
var inst_51249 = (state_51443[(25)]);
var inst_51292 = (state_51443[(30)]);
var inst_51302 = (state_51443[(31)]);
var inst_51330 = (state_51443[(33)]);
var inst_51294 = (state_51443[(32)]);
var inst_51334 = (state_51443[(35)]);
var inst_51297 = (state_51443[(17)]);
var inst_51251 = (state_51443[(14)]);
var inst_51239 = (state_51443[(19)]);
var inst_51333__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_51329,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257),inst_51297);
var inst_51334__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_51329,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_51335 = (function (){var input = inst_51295;
var step = inst_51259;
var key_SINGLEQUOTE_ = inst_51266;
var G__51243 = inst_51251;
var first__51257 = inst_51259;
var map__51265 = inst_51292;
var response = inst_51334__$1;
var cache_QMARK_ = inst_51293;
var out_left = inst_51253;
var key = inst_51239;
var vec__51244 = plan;
var failed_resolvers = inst_51252;
var vec__51262 = inst_51259;
var batch_QMARK_ = inst_51294;
var seq__51256 = inst_51260;
var output = inst_51296;
var env__$1 = inst_51297;
var e = inst_51299;
var resolver_sym = inst_51267;
var seq__51245 = inst_51249;
var trace_data = inst_51302;
var resolver = inst_51292;
var replan = inst_51330;
var env_SINGLEQUOTE_ = inst_51333__$1;
var tail = inst_51260;
var vec__51255 = inst_51251;
var first__51246 = inst_51248;
return ((function (input,step,key_SINGLEQUOTE_,G__51243,first__51257,map__51265,response,cache_QMARK_,out_left,key,vec__51244,failed_resolvers,vec__51262,batch_QMARK_,seq__51256,output,env__$1,e,resolver_sym,seq__51245,trace_data,resolver,replan,env_SINGLEQUOTE_,tail,vec__51255,first__51246,inst_51293,inst_51295,inst_51333,inst_51260,inst_51259,inst_51252,inst_51329,inst_51267,inst_51266,inst_51299,inst_51296,inst_51248,inst_51253,inst_51249,inst_51292,inst_51302,inst_51330,inst_51294,inst_51334,inst_51297,inst_51251,inst_51239,inst_51333__$1,inst_51334__$1,state_val_51444,c__38971__auto__,vec__51231,plan,out,temp__5718__auto__,map__51229,map__51229__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function (p1__51215_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__51215_SHARP_], 0));
});
;})(input,step,key_SINGLEQUOTE_,G__51243,first__51257,map__51265,response,cache_QMARK_,out_left,key,vec__51244,failed_resolvers,vec__51262,batch_QMARK_,seq__51256,output,env__$1,e,resolver_sym,seq__51245,trace_data,resolver,replan,env_SINGLEQUOTE_,tail,vec__51255,first__51246,inst_51293,inst_51295,inst_51333,inst_51260,inst_51259,inst_51252,inst_51329,inst_51267,inst_51266,inst_51299,inst_51296,inst_51248,inst_51253,inst_51249,inst_51292,inst_51302,inst_51330,inst_51294,inst_51334,inst_51297,inst_51251,inst_51239,inst_51333__$1,inst_51334__$1,state_val_51444,c__38971__auto__,vec__51231,plan,out,temp__5718__auto__,map__51229,map__51229__$1,env,indexes,max_resolver_weight,processing_sequence))
})();
var inst_51336 = com.wsscode.pathom.core.swap_entity_BANG_(inst_51333__$1,inst_51335);
var inst_51338 = cljs.core.contains_QMARK_(inst_51334__$1,inst_51266);
var inst_51339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51334__$1,inst_51266);
var inst_51340 = (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(inst_51339) : com.wsscode.pathom.core.break_values.call(null,inst_51339));
var inst_51341 = cljs.core.not(inst_51340);
var inst_51342 = ((inst_51338) && (inst_51341));
var state_51443__$1 = (function (){var statearr_51487 = state_51443;
(statearr_51487[(37)] = inst_51336);

(statearr_51487[(34)] = inst_51333__$1);

(statearr_51487[(35)] = inst_51334__$1);

return statearr_51487;
})();
if(cljs.core.truth_(inst_51342)){
var statearr_51488_54445 = state_51443__$1;
(statearr_51488_54445[(1)] = (36));

} else {
var statearr_51489_54446 = state_51443__$1;
(statearr_51489_54446[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (13))){
var state_51443__$1 = state_51443;
var statearr_51490_54447 = state_51443__$1;
(statearr_51490_54447[(2)] = true);

(statearr_51490_54447[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (22))){
var inst_51304 = (state_51443[(38)]);
var state_51443__$1 = state_51443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51443__$1,(25),inst_51304);
} else {
if((state_val_51444 === (36))){
var inst_51333 = (state_51443[(34)]);
var inst_51260 = (state_51443[(21)]);
var inst_51267 = (state_51443[(8)]);
var inst_51296 = (state_51443[(29)]);
var inst_51239 = (state_51443[(19)]);
var inst_51344 = com.wsscode.pathom.connect.output__GT_provides(inst_51296);
var inst_51345 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_51346 = [new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),inst_51239,inst_51267];
var inst_51347 = cljs.core.PersistentHashMap.fromArrays(inst_51345,inst_51346);
var inst_51348 = com.wsscode.pathom.trace.trace(inst_51333,inst_51347);
var inst_51349 = cljs.core.seq(inst_51260);
var state_51443__$1 = (function (){var statearr_51491 = state_51443;
(statearr_51491[(39)] = inst_51348);

(statearr_51491[(22)] = inst_51344);

return statearr_51491;
})();
if(inst_51349){
var statearr_51492_54449 = state_51443__$1;
(statearr_51492_54449[(1)] = (39));

} else {
var statearr_51493_54450 = state_51443__$1;
(statearr_51493_54450[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (41))){
var inst_51364 = (state_51443[(2)]);
var state_51443__$1 = state_51443;
var statearr_51494_54451 = state_51443__$1;
(statearr_51494_54451[(2)] = inst_51364);

(statearr_51494_54451[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (43))){
var inst_51354 = (state_51443[(36)]);
var state_51443__$1 = state_51443;
var statearr_51495_54452 = state_51443__$1;
(statearr_51495_54452[(2)] = inst_51354);

(statearr_51495_54452[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (61))){
var inst_51429 = (state_51443[(2)]);
var state_51443__$1 = state_51443;
var statearr_51496_54454 = state_51443__$1;
(statearr_51496_54454[(2)] = inst_51429);

(statearr_51496_54454[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (29))){
var inst_51318 = (state_51443[(2)]);
var inst_51319 = com.wsscode.common.async_cljs.throw_err(inst_51318);
var state_51443__$1 = state_51443;
var statearr_51497_54455 = state_51443__$1;
(statearr_51497_54455[(2)] = inst_51319);

(statearr_51497_54455[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (44))){
var inst_51362 = (state_51443[(2)]);
var state_51443__$1 = state_51443;
var statearr_51498_54457 = state_51443__$1;
(statearr_51498_54457[(2)] = inst_51362);

(statearr_51498_54457[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (6))){
var inst_51439 = (state_51443[(2)]);
var state_51443__$1 = state_51443;
var statearr_51499_54458 = state_51443__$1;
(statearr_51499_54458[(2)] = inst_51439);


cljs.core.async.impl.ioc_helpers.process_exception(state_51443__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (28))){
var inst_51322 = (state_51443[(2)]);
var state_51443__$1 = state_51443;
var statearr_51500_54459 = state_51443__$1;
(statearr_51500_54459[(2)] = inst_51322);

(statearr_51500_54459[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (51))){
var inst_51333 = (state_51443[(34)]);
var inst_51390 = (state_51443[(40)]);
var inst_51334 = (state_51443[(35)]);
var inst_51389 = (state_51443[(2)]);
var inst_51390__$1 = com.wsscode.pathom.connect.process_simple_reader_response(inst_51333,inst_51334);
var inst_51391 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51390__$1);
var state_51443__$1 = (function (){var statearr_51501 = state_51443;
(statearr_51501[(41)] = inst_51389);

(statearr_51501[(40)] = inst_51390__$1);

return statearr_51501;
})();
if(inst_51391){
var statearr_51502_54466 = state_51443__$1;
(statearr_51502_54466[(1)] = (52));

} else {
var statearr_51503_54467 = state_51443__$1;
(statearr_51503_54467[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (25))){
var inst_51308 = (state_51443[(2)]);
var inst_51309 = com.wsscode.common.async_cljs.throw_err(inst_51308);
var state_51443__$1 = state_51443;
var statearr_51504_54469 = state_51443__$1;
(statearr_51504_54469[(2)] = inst_51309);

(statearr_51504_54469[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (34))){
var state_51443__$1 = state_51443;
var statearr_51505_54471 = state_51443__$1;
(statearr_51505_54471[(1)] = (56));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (17))){
var inst_51271 = (state_51443[(9)]);
var state_51443__$1 = state_51443;
var statearr_51507_54472 = state_51443__$1;
(statearr_51507_54472[(2)] = inst_51271);

(statearr_51507_54472[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (3))){
var inst_51234 = (state_51443[(2)]);
var state_51443__$1 = state_51443;
var statearr_51508_54473 = state_51443__$1;
(statearr_51508_54473[(2)] = inst_51234);


cljs.core.async.impl.ioc_helpers.process_exception(state_51443__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (12))){
var inst_51287 = (state_51443[(2)]);
var state_51443__$1 = state_51443;
if(cljs.core.truth_(inst_51287)){
var statearr_51509_54474 = state_51443__$1;
(statearr_51509_54474[(1)] = (16));

} else {
var statearr_51510_54476 = state_51443__$1;
(statearr_51510_54476[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (2))){
var inst_51441 = (state_51443[(2)]);
var state_51443__$1 = state_51443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51443__$1,inst_51441);
} else {
if((state_val_51444 === (23))){
var inst_51304 = (state_51443[(38)]);
var state_51443__$1 = state_51443;
var statearr_51511_54479 = state_51443__$1;
(statearr_51511_54479[(2)] = inst_51304);

(statearr_51511_54479[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (47))){
var inst_51260 = (state_51443[(21)]);
var inst_51380 = cljs.core.seq(inst_51260);
var state_51443__$1 = state_51443;
if(inst_51380){
var statearr_51512_54484 = state_51443__$1;
(statearr_51512_54484[(1)] = (49));

} else {
var statearr_51513_54485 = state_51443__$1;
(statearr_51513_54485[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (35))){
var inst_51434 = (state_51443[(2)]);
var state_51443__$1 = state_51443;
var statearr_51514_54486 = state_51443__$1;
(statearr_51514_54486[(2)] = inst_51434);

(statearr_51514_54486[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (19))){
var inst_51295 = (state_51443[(28)]);
var inst_51267 = (state_51443[(8)]);
var inst_51299 = (state_51443[(16)]);
var inst_51302 = (state_51443[(31)]);
var inst_51304 = (state_51443[(38)]);
var inst_51294 = (state_51443[(32)]);
var inst_51297 = (state_51443[(17)]);
var inst_51304__$1 = com.wsscode.pathom.connect.async_read_cache_read(inst_51297,inst_51267,inst_51299,inst_51294,processing_sequence,inst_51302,inst_51295);
var inst_51305 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51304__$1);
var state_51443__$1 = (function (){var statearr_51515 = state_51443;
(statearr_51515[(38)] = inst_51304__$1);

return statearr_51515;
})();
if(inst_51305){
var statearr_51516_54488 = state_51443__$1;
(statearr_51516_54488[(1)] = (22));

} else {
var statearr_51517_54489 = state_51443__$1;
(statearr_51517_54489[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (57))){
var state_51443__$1 = state_51443;
var statearr_51518_54491 = state_51443__$1;
(statearr_51518_54491[(2)] = null);

(statearr_51518_54491[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (11))){
var state_51443__$1 = state_51443;
var statearr_51519_54492 = state_51443__$1;
(statearr_51519_54492[(2)] = false);

(statearr_51519_54492[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (9))){
var inst_51437 = (state_51443[(2)]);
var state_51443__$1 = state_51443;
var statearr_51520_54493 = state_51443__$1;
(statearr_51520_54493[(2)] = inst_51437);

(statearr_51520_54493[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (5))){
var inst_51259 = (state_51443[(7)]);
var inst_51251 = (state_51443[(14)]);
var inst_51258 = cljs.core.seq(inst_51251);
var inst_51259__$1 = cljs.core.first(inst_51258);
var inst_51260 = cljs.core.next(inst_51258);
var state_51443__$1 = (function (){var statearr_51521 = state_51443;
(statearr_51521[(21)] = inst_51260);

(statearr_51521[(7)] = inst_51259__$1);

return statearr_51521;
})();
if(cljs.core.truth_(inst_51259__$1)){
var statearr_51522_54494 = state_51443__$1;
(statearr_51522_54494[(1)] = (7));

} else {
var statearr_51523_54496 = state_51443__$1;
(statearr_51523_54496[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (14))){
var state_51443__$1 = state_51443;
var statearr_51524_54500 = state_51443__$1;
(statearr_51524_54500[(2)] = false);

(statearr_51524_54500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (45))){
var inst_51358 = (state_51443[(2)]);
var inst_51359 = com.wsscode.common.async_cljs.throw_err(inst_51358);
var state_51443__$1 = state_51443;
var statearr_51525_54501 = state_51443__$1;
(statearr_51525_54501[(2)] = inst_51359);

(statearr_51525_54501[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (53))){
var inst_51390 = (state_51443[(40)]);
var state_51443__$1 = state_51443;
var statearr_51526_54502 = state_51443__$1;
(statearr_51526_54502[(2)] = inst_51390);

(statearr_51526_54502[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (26))){
var inst_51314 = (state_51443[(15)]);
var state_51443__$1 = state_51443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51443__$1,(29),inst_51314);
} else {
if((state_val_51444 === (16))){
var inst_51271 = (state_51443[(9)]);
var inst_51289 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51271);
var state_51443__$1 = state_51443;
var statearr_51527_54506 = state_51443__$1;
(statearr_51527_54506[(2)] = inst_51289);

(statearr_51527_54506[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (38))){
var inst_51402 = (state_51443[(2)]);
var state_51443__$1 = state_51443;
var statearr_51528_54507 = state_51443__$1;
(statearr_51528_54507[(2)] = inst_51402);

(statearr_51528_54507[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (30))){
var inst_51324 = (state_51443[(26)]);
var state_51443__$1 = state_51443;
var statearr_51529_54508 = state_51443__$1;
(statearr_51529_54508[(2)] = inst_51324);

(statearr_51529_54508[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (10))){
var inst_51271 = (state_51443[(9)]);
var inst_51276 = inst_51271.cljs$lang$protocol_mask$partition0$;
var inst_51277 = (inst_51276 & (64));
var inst_51278 = inst_51271.cljs$core$ISeq$;
var inst_51279 = (cljs.core.PROTOCOL_SENTINEL === inst_51278);
var inst_51280 = ((inst_51277) || (inst_51279));
var state_51443__$1 = state_51443;
if(cljs.core.truth_(inst_51280)){
var statearr_51530_54514 = state_51443__$1;
(statearr_51530_54514[(1)] = (13));

} else {
var statearr_51531_54515 = state_51443__$1;
(statearr_51531_54515[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (18))){
var inst_51293 = (state_51443[(27)]);
var inst_51295 = (state_51443[(28)]);
var inst_51267 = (state_51443[(8)]);
var inst_51299 = (state_51443[(16)]);
var inst_51292 = (state_51443[(30)]);
var inst_51297 = (state_51443[(17)]);
var inst_51239 = (state_51443[(19)]);
var inst_51292__$1 = (state_51443[(2)]);
var inst_51293__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_51292__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_51294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51292__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_51295__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51292__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_51296 = com.wsscode.pathom.connect.resolver__GT_output(env,inst_51267);
var inst_51297__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_51292__$1);
var inst_51298 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_51297__$1);
var inst_51299__$1 = cljs.core.select_keys(inst_51298,inst_51295__$1);
var inst_51300 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_51301 = [inst_51239,inst_51267,inst_51299__$1];
var inst_51302 = cljs.core.PersistentHashMap.fromArrays(inst_51300,inst_51301);
var state_51443__$1 = (function (){var statearr_51532 = state_51443;
(statearr_51532[(27)] = inst_51293__$1);

(statearr_51532[(28)] = inst_51295__$1);

(statearr_51532[(16)] = inst_51299__$1);

(statearr_51532[(29)] = inst_51296);

(statearr_51532[(30)] = inst_51292__$1);

(statearr_51532[(31)] = inst_51302);

(statearr_51532[(32)] = inst_51294);

(statearr_51532[(17)] = inst_51297__$1);

return statearr_51532;
})();
if(cljs.core.truth_(inst_51293__$1)){
var statearr_51533_54519 = state_51443__$1;
(statearr_51533_54519[(1)] = (19));

} else {
var statearr_51534_54520 = state_51443__$1;
(statearr_51534_54520[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (52))){
var inst_51390 = (state_51443[(40)]);
var state_51443__$1 = state_51443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51443__$1,(55),inst_51390);
} else {
if((state_val_51444 === (42))){
var inst_51354 = (state_51443[(36)]);
var state_51443__$1 = state_51443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51443__$1,(45),inst_51354);
} else {
if((state_val_51444 === (37))){
var inst_51266 = (state_51443[(10)]);
var inst_51330 = (state_51443[(33)]);
var inst_51334 = (state_51443[(35)]);
var inst_51370 = (state_51443[(23)]);
var inst_51366 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_51367 = [inst_51334,inst_51266];
var inst_51368 = cljs.core.PersistentHashMap.fromArrays(inst_51366,inst_51367);
var inst_51369 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_51368);
var inst_51370__$1 = (inst_51330.cljs$core$IFn$_invoke$arity$1 ? inst_51330.cljs$core$IFn$_invoke$arity$1(inst_51369) : inst_51330.call(null,inst_51369));
var state_51443__$1 = (function (){var statearr_51535 = state_51443;
(statearr_51535[(23)] = inst_51370__$1);

return statearr_51535;
})();
if(cljs.core.truth_(inst_51370__$1)){
var statearr_51536_54527 = state_51443__$1;
(statearr_51536_54527[(1)] = (46));

} else {
var statearr_51537_54528 = state_51443__$1;
(statearr_51537_54528[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (8))){
var state_51443__$1 = state_51443;
var statearr_51538_54529 = state_51443__$1;
(statearr_51538_54529[(2)] = null);

(statearr_51538_54529[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51444 === (49))){
var inst_51266 = (state_51443[(10)]);
var inst_51334 = (state_51443[(35)]);
var inst_51382 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_51383 = [inst_51334,inst_51266];
var inst_51384 = cljs.core.PersistentHashMap.fromArrays(inst_51382,inst_51383);
var inst_51385 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_51384);
var inst_51386 = (function(){throw inst_51385})();
var state_51443__$1 = state_51443;
var statearr_51539_54530 = state_51443__$1;
(statearr_51539_54530[(2)] = inst_51386);

(statearr_51539_54530[(1)] = (51));


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
});})(c__38971__auto__,vec__51231,plan,out,temp__5718__auto__,map__51229,map__51229__$1,env,indexes,max_resolver_weight,processing_sequence))
;
return ((function (switch__38924__auto__,c__38971__auto__,vec__51231,plan,out,temp__5718__auto__,map__51229,map__51229__$1,env,indexes,max_resolver_weight,processing_sequence){
return (function() {
var com$wsscode$pathom$connect$async_reader2_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$connect$async_reader2_$_state_machine__38925__auto____0 = (function (){
var statearr_51540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51540[(0)] = com$wsscode$pathom$connect$async_reader2_$_state_machine__38925__auto__);

(statearr_51540[(1)] = (1));

return statearr_51540;
});
var com$wsscode$pathom$connect$async_reader2_$_state_machine__38925__auto____1 = (function (state_51443){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_51443);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e51541){if((e51541 instanceof Object)){
var ex__38928__auto__ = e51541;
var statearr_51542_54533 = state_51443;
(statearr_51542_54533[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51541;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54534 = state_51443;
state_51443 = G__54534;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$connect$async_reader2_$_state_machine__38925__auto__ = function(state_51443){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$async_reader2_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$async_reader2_$_state_machine__38925__auto____1.call(this,state_51443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$async_reader2_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$async_reader2_$_state_machine__38925__auto____0;
com$wsscode$pathom$connect$async_reader2_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$async_reader2_$_state_machine__38925__auto____1;
return com$wsscode$pathom$connect$async_reader2_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,vec__51231,plan,out,temp__5718__auto__,map__51229,map__51229__$1,env,indexes,max_resolver_weight,processing_sequence))
})();
var state__38973__auto__ = (function (){var statearr_51543 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_51543[(6)] = c__38971__auto__);

return statearr_51543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,vec__51231,plan,out,temp__5718__auto__,map__51229,map__51229__$1,env,indexes,max_resolver_weight,processing_sequence))
);

return c__38971__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.parallel_batch_error = (function com$wsscode$pathom$connect$parallel_batch_error(p__51544,e){
var map__51545 = p__51544;
var map__51545__$1 = (((((!((map__51545 == null))))?(((((map__51545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51545):map__51545);
var env = map__51545__$1;
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51545__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var map__51547 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var map__51547__$1 = (((((!((map__51547 == null))))?(((((map__51547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51547):map__51547);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51547__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303));
var item_count = cljs.core.count(processing_sequence);
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-error","com.wsscode.pathom.connect/batch-result-error",-1587594017),new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),com.wsscode.pathom.core.process_error(env,e)], null));

var output_SINGLEQUOTE_ = com.wsscode.pathom.connect.output__GT_provides(output);
var base_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take_while.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword_QMARK_),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661).cljs$core$IFn$_invoke$arity$1(env));
var seq__51549_54543 = cljs.core.seq(output_SINGLEQUOTE_);
var chunk__51554_54544 = null;
var count__51555_54545 = (0);
var i__51556_54546 = (0);
while(true){
if((i__51556_54546 < count__51555_54545)){
var o_54549 = chunk__51554_54544.cljs$core$IIndexed$_nth$arity$2(null,i__51556_54546);
var seq__51557_54550 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(item_count));
var chunk__51558_54551 = null;
var count__51559_54552 = (0);
var i__51560_54553 = (0);
while(true){
if((i__51560_54553 < count__51559_54552)){
var i_54555 = chunk__51558_54551.cljs$core$IIndexed$_nth$arity$2(null,i__51560_54553);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(base_path,i_54555,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o_54549], 0))),e);


var G__54557 = seq__51557_54550;
var G__54558 = chunk__51558_54551;
var G__54559 = count__51559_54552;
var G__54560 = (i__51560_54553 + (1));
seq__51557_54550 = G__54557;
chunk__51558_54551 = G__54558;
count__51559_54552 = G__54559;
i__51560_54553 = G__54560;
continue;
} else {
var temp__5720__auto___54561 = cljs.core.seq(seq__51557_54550);
if(temp__5720__auto___54561){
var seq__51557_54562__$1 = temp__5720__auto___54561;
if(cljs.core.chunked_seq_QMARK_(seq__51557_54562__$1)){
var c__4550__auto___54563 = cljs.core.chunk_first(seq__51557_54562__$1);
var G__54564 = cljs.core.chunk_rest(seq__51557_54562__$1);
var G__54565 = c__4550__auto___54563;
var G__54566 = cljs.core.count(c__4550__auto___54563);
var G__54567 = (0);
seq__51557_54550 = G__54564;
chunk__51558_54551 = G__54565;
count__51559_54552 = G__54566;
i__51560_54553 = G__54567;
continue;
} else {
var i_54568 = cljs.core.first(seq__51557_54562__$1);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(base_path,i_54568,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o_54549], 0))),e);


var G__54569 = cljs.core.next(seq__51557_54562__$1);
var G__54570 = null;
var G__54571 = (0);
var G__54572 = (0);
seq__51557_54550 = G__54569;
chunk__51558_54551 = G__54570;
count__51559_54552 = G__54571;
i__51560_54553 = G__54572;
continue;
}
} else {
}
}
break;
}

var G__54574 = seq__51549_54543;
var G__54575 = chunk__51554_54544;
var G__54576 = count__51555_54545;
var G__54577 = (i__51556_54546 + (1));
seq__51549_54543 = G__54574;
chunk__51554_54544 = G__54575;
count__51555_54545 = G__54576;
i__51556_54546 = G__54577;
continue;
} else {
var temp__5720__auto___54578 = cljs.core.seq(seq__51549_54543);
if(temp__5720__auto___54578){
var seq__51549_54579__$1 = temp__5720__auto___54578;
if(cljs.core.chunked_seq_QMARK_(seq__51549_54579__$1)){
var c__4550__auto___54580 = cljs.core.chunk_first(seq__51549_54579__$1);
var G__54581 = cljs.core.chunk_rest(seq__51549_54579__$1);
var G__54582 = c__4550__auto___54580;
var G__54583 = cljs.core.count(c__4550__auto___54580);
var G__54584 = (0);
seq__51549_54543 = G__54581;
chunk__51554_54544 = G__54582;
count__51555_54545 = G__54583;
i__51556_54546 = G__54584;
continue;
} else {
var o_54586 = cljs.core.first(seq__51549_54579__$1);
var seq__51550_54587 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(item_count));
var chunk__51551_54588 = null;
var count__51552_54589 = (0);
var i__51553_54590 = (0);
while(true){
if((i__51553_54590 < count__51552_54589)){
var i_54591 = chunk__51551_54588.cljs$core$IIndexed$_nth$arity$2(null,i__51553_54590);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(base_path,i_54591,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o_54586], 0))),e);


var G__54592 = seq__51550_54587;
var G__54593 = chunk__51551_54588;
var G__54594 = count__51552_54589;
var G__54595 = (i__51553_54590 + (1));
seq__51550_54587 = G__54592;
chunk__51551_54588 = G__54593;
count__51552_54589 = G__54594;
i__51553_54590 = G__54595;
continue;
} else {
var temp__5720__auto___54600__$1 = cljs.core.seq(seq__51550_54587);
if(temp__5720__auto___54600__$1){
var seq__51550_54602__$1 = temp__5720__auto___54600__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51550_54602__$1)){
var c__4550__auto___54603 = cljs.core.chunk_first(seq__51550_54602__$1);
var G__54604 = cljs.core.chunk_rest(seq__51550_54602__$1);
var G__54605 = c__4550__auto___54603;
var G__54606 = cljs.core.count(c__4550__auto___54603);
var G__54607 = (0);
seq__51550_54587 = G__54604;
chunk__51551_54588 = G__54605;
count__51552_54589 = G__54606;
i__51553_54590 = G__54607;
continue;
} else {
var i_54608 = cljs.core.first(seq__51550_54602__$1);
com.wsscode.pathom.core.add_error(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(base_path,i_54608,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o_54586], 0))),e);


var G__54609 = cljs.core.next(seq__51550_54602__$1);
var G__54610 = null;
var G__54611 = (0);
var G__54612 = (0);
seq__51550_54587 = G__54609;
chunk__51551_54588 = G__54610;
count__51552_54589 = G__54611;
i__51553_54590 = G__54612;
continue;
}
} else {
}
}
break;
}

var G__54613 = cljs.core.next(seq__51549_54579__$1);
var G__54614 = null;
var G__54615 = (0);
var G__54616 = (0);
seq__51549_54543 = G__54613;
chunk__51554_54544 = G__54614;
count__51555_54545 = G__54615;
i__51556_54546 = G__54616;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__51561){
var vec__51562 = p__51561;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51562,(0),null);
var input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51562,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,input,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),i);
}),cljs.core.PersistentArrayMap.EMPTY,inputs);
});
com.wsscode.pathom.connect.parallel_batch = (function com$wsscode$pathom$connect$parallel_batch(p__51569){
var map__51570 = p__51569;
var map__51570__$1 = (((((!((map__51570 == null))))?(((((map__51570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51570):map__51570);
var env = map__51570__$1;
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51570__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51570__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51570__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache){
return (function (state_51937){
var state_val_51938 = (state_51937[(1)]);
if((state_val_51938 === (65))){
var inst_51822 = (state_51937[(2)]);
var inst_51823 = com.wsscode.common.async_cljs.throw_err(inst_51822);
var state_51937__$1 = state_51937;
var statearr_51939_54626 = state_51937__$1;
(statearr_51939_54626[(2)] = inst_51823);


cljs.core.async.impl.ioc_helpers.process_exception(state_51937__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (70))){
var inst_51852 = (state_51937[(7)]);
var inst_51851 = (state_51937[(8)]);
var inst_51854 = (inst_51852 < inst_51851);
var inst_51855 = inst_51854;
var state_51937__$1 = state_51937;
if(cljs.core.truth_(inst_51855)){
var statearr_51940_54627 = state_51937__$1;
(statearr_51940_54627[(1)] = (72));

} else {
var statearr_51941_54628 = state_51937__$1;
(statearr_51941_54628[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (62))){
var inst_51800 = (state_51937[(9)]);
var inst_51814 = (state_51937[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_51937,(61),new cljs.core.Keyword(null,"default","default",-1987822328),null,(60));
var inst_51814__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_51800);
var inst_51815 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51814__$1);
var state_51937__$1 = (function (){var statearr_51942 = state_51937;
(statearr_51942[(10)] = inst_51814__$1);

return statearr_51942;
})();
if(inst_51815){
var statearr_51943_54632 = state_51937__$1;
(statearr_51943_54632[(1)] = (63));

} else {
var statearr_51944_54633 = state_51937__$1;
(statearr_51944_54633[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (74))){
var inst_51921 = (state_51937[(2)]);
var state_51937__$1 = state_51937;
var statearr_51945_54635 = state_51937__$1;
(statearr_51945_54635[(2)] = inst_51921);

(statearr_51945_54635[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (7))){
var inst_51593 = (state_51937[(2)]);
var state_51937__$1 = state_51937;
if(cljs.core.truth_(inst_51593)){
var statearr_51946_54636 = state_51937__$1;
(statearr_51946_54636[(1)] = (11));

} else {
var statearr_51947_54637 = state_51937__$1;
(statearr_51947_54637[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (59))){
var inst_51598 = (state_51937[(11)]);
var inst_51600 = (state_51937[(12)]);
var inst_51608 = (state_51937[(13)]);
var inst_51602 = (state_51937[(14)]);
var inst_51599 = (state_51937[(15)]);
var inst_51800 = (state_51937[(9)]);
var inst_51605 = (state_51937[(16)]);
var inst_51799 = (state_51937[(17)]);
var inst_51604 = (state_51937[(18)]);
var inst_51786 = (state_51937[(19)]);
var inst_51792 = (state_51937[(20)]);
var inst_51796 = (state_51937[(2)]);
var inst_51797 = com.wsscode.common.async_cljs.throw_err(inst_51796);
var inst_51798 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_51786,inst_51792,inst_51797);
var inst_51799__$1 = com.wsscode.pathom.connect.group_input_indexes(inst_51798);
var inst_51800__$1 = cljs.core.keys(inst_51799__$1);
var inst_51801 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_51802 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_51800__$1];
var inst_51803 = cljs.core.PersistentHashMap.fromArrays(inst_51801,inst_51802);
var inst_51804 = com.wsscode.pathom.trace.trace(env,inst_51803);
var inst_51805 = cljs.core.PersistentVector.EMPTY;
var inst_51806 = (function (){var input = inst_51600;
var items = inst_51800__$1;
var items_map = inst_51799__$1;
var map__51576 = inst_51598;
var key = inst_51604;
var _ = inst_51804;
var params = inst_51605;
var e = inst_51602;
var resolver_sym = inst_51599;
var trace_data = inst_51608;
return ((function (input,items,items_map,map__51576,key,_,params,e,resolver_sym,trace_data,inst_51598,inst_51600,inst_51608,inst_51602,inst_51599,inst_51800,inst_51605,inst_51799,inst_51604,inst_51786,inst_51792,inst_51796,inst_51797,inst_51798,inst_51799__$1,inst_51800__$1,inst_51801,inst_51802,inst_51803,inst_51804,inst_51805,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache){
return (function (resolver_input){
var ch = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.core.cache_hit(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,resolver_input,params], null),ch);

return ch;
});
;})(input,items,items_map,map__51576,key,_,params,e,resolver_sym,trace_data,inst_51598,inst_51600,inst_51608,inst_51602,inst_51599,inst_51800,inst_51605,inst_51799,inst_51604,inst_51786,inst_51792,inst_51796,inst_51797,inst_51798,inst_51799__$1,inst_51800__$1,inst_51801,inst_51802,inst_51803,inst_51804,inst_51805,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_51807 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_51806);
var inst_51808 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_51805,inst_51807,inst_51800__$1);
var state_51937__$1 = (function (){var statearr_51948 = state_51937;
(statearr_51948[(9)] = inst_51800__$1);

(statearr_51948[(17)] = inst_51799__$1);

(statearr_51948[(21)] = inst_51808);

return statearr_51948;
})();
var statearr_51949_54647 = state_51937__$1;
(statearr_51949_54647[(2)] = null);

(statearr_51949_54647[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (86))){
var inst_51916 = (state_51937[(2)]);
var state_51937__$1 = state_51937;
var statearr_51950_54648 = state_51937__$1;
(statearr_51950_54648[(2)] = inst_51916);

(statearr_51950_54648[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (20))){
var inst_51623 = (state_51937[(2)]);
var state_51937__$1 = state_51937;
var statearr_51951_54650 = state_51937__$1;
(statearr_51951_54650[(2)] = inst_51623);

(statearr_51951_54650[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (72))){
var inst_51852 = (state_51937[(7)]);
var inst_51867 = (state_51937[(22)]);
var inst_51850 = (state_51937[(23)]);
var inst_51863 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_51850,inst_51852);
var inst_51864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51863,(0),null);
var inst_51865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51863,(1),null);
var inst_51866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51865,(0),null);
var inst_51867__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51865,(1),null);
var state_51937__$1 = (function (){var statearr_51952 = state_51937;
(statearr_51952[(22)] = inst_51867__$1);

(statearr_51952[(24)] = inst_51866);

(statearr_51952[(25)] = inst_51864);

return statearr_51952;
})();
if(cljs.core.truth_(inst_51867__$1)){
var statearr_51953_54655 = state_51937__$1;
(statearr_51953_54655[(1)] = (75));

} else {
var statearr_51954_54656 = state_51937__$1;
(statearr_51954_54656[(1)] = (76));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (58))){
var inst_51784 = (state_51937[(2)]);
var state_51937__$1 = state_51937;
var statearr_51955_54657 = state_51937__$1;
(statearr_51955_54657[(2)] = inst_51784);

(statearr_51955_54657[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (60))){
var inst_51800 = (state_51937[(9)]);
var inst_51825 = (state_51937[(26)]);
var inst_51808 = (state_51937[(21)]);
var inst_51825__$1 = (state_51937[(2)]);
var inst_51826 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_51827 = cljs.core.count(inst_51825__$1);
var inst_51828 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_51827];
var inst_51829 = cljs.core.PersistentHashMap.fromArrays(inst_51826,inst_51828);
var inst_51830 = com.wsscode.pathom.trace.trace(env,inst_51829);
var inst_51831 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_51808,inst_51825__$1);
var inst_51832 = cljs.core.zipmap(inst_51800,inst_51831);
var inst_51833 = cljs.core.first(inst_51825__$1);
var inst_51834 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_51833);
var inst_51835 = cljs.core.count(path);
var inst_51836 = (inst_51835 >= (2));
var inst_51837 = ((inst_51834) && (inst_51836));
var state_51937__$1 = (function (){var statearr_51956 = state_51937;
(statearr_51956[(27)] = inst_51832);

(statearr_51956[(28)] = inst_51830);

(statearr_51956[(26)] = inst_51825__$1);

return statearr_51956;
})();
if(cljs.core.truth_(inst_51837)){
var statearr_51957_54662 = state_51937__$1;
(statearr_51957_54662[(1)] = (67));

} else {
var statearr_51958_54663 = state_51937__$1;
(statearr_51958_54663[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (27))){
var inst_51661 = (state_51937[(2)]);
var inst_51662 = com.wsscode.common.async_cljs.throw_err(inst_51661);
var state_51937__$1 = state_51937;
var statearr_51959_54664 = state_51937__$1;
(statearr_51959_54664[(2)] = inst_51662);


cljs.core.async.impl.ioc_helpers.process_exception(state_51937__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (1))){
var state_51937__$1 = state_51937;
var statearr_51960_54665 = state_51937__$1;
(statearr_51960_54665[(2)] = null);

(statearr_51960_54665[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (69))){
var inst_51832 = (state_51937[(27)]);
var inst_51843 = (state_51937[(2)]);
var inst_51848 = cljs.core.seq(inst_51832);
var inst_51849 = inst_51848;
var inst_51850 = null;
var inst_51851 = (0);
var inst_51852 = (0);
var state_51937__$1 = (function (){var statearr_51961 = state_51937;
(statearr_51961[(7)] = inst_51852);

(statearr_51961[(8)] = inst_51851);

(statearr_51961[(23)] = inst_51850);

(statearr_51961[(29)] = inst_51849);

(statearr_51961[(30)] = inst_51843);

return statearr_51961;
})();
var statearr_51962_54668 = state_51937__$1;
(statearr_51962_54668[(2)] = null);

(statearr_51962_54668[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (24))){
var inst_51639 = (state_51937[(31)]);
var inst_51653 = (state_51937[(32)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_51937,(23),new cljs.core.Keyword(null,"default","default",-1987822328),null,(22));
var inst_51653__$1 = com.wsscode.pathom.connect.call_resolver(env,inst_51639);
var inst_51654 = com.wsscode.common.async_cljs.chan_QMARK_(inst_51653__$1);
var state_51937__$1 = (function (){var statearr_51963 = state_51937;
(statearr_51963[(32)] = inst_51653__$1);

return statearr_51963;
})();
if(inst_51654){
var statearr_51964_54671 = state_51937__$1;
(statearr_51964_54671[(1)] = (25));

} else {
var statearr_51965_54672 = state_51937__$1;
(statearr_51965_54672[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (55))){
var inst_51602 = (state_51937[(14)]);
var inst_51599 = (state_51937[(15)]);
var inst_51605 = (state_51937[(16)]);
var inst_51779 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51780 = [inst_51599,inst_51602,inst_51605];
var inst_51781 = (new cljs.core.PersistentVector(null,3,(5),inst_51779,inst_51780,null));
var inst_51782 = com.wsscode.pathom.core.cache_read(env,inst_51781);
var state_51937__$1 = state_51937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51937__$1,(58),inst_51782);
} else {
if((state_val_51938 === (85))){
var inst_51882 = (state_51937[(33)]);
var inst_51901 = (state_51937[(34)]);
var inst_51897 = cljs.core.first(inst_51882);
var inst_51898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51897,(0),null);
var inst_51899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51897,(1),null);
var inst_51900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51899,(0),null);
var inst_51901__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51899,(1),null);
var state_51937__$1 = (function (){var statearr_51969 = state_51937;
(statearr_51969[(35)] = inst_51898);

(statearr_51969[(34)] = inst_51901__$1);

(statearr_51969[(36)] = inst_51900);

return statearr_51969;
})();
if(cljs.core.truth_(inst_51901__$1)){
var statearr_51970_54678 = state_51937__$1;
(statearr_51970_54678[(1)] = (87));

} else {
var statearr_51971_54679 = state_51937__$1;
(statearr_51971_54679[(1)] = (88));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (39))){
var inst_51688 = (state_51937[(37)]);
var inst_51691 = (state_51937[(38)]);
var inst_51689 = (state_51937[(39)]);
var inst_51690 = (state_51937[(40)]);
var inst_51717 = (state_51937[(2)]);
var inst_51718 = (inst_51691 + (1));
var tmp51966 = inst_51688;
var tmp51967 = inst_51689;
var tmp51968 = inst_51690;
var inst_51688__$1 = tmp51966;
var inst_51689__$1 = tmp51967;
var inst_51690__$1 = tmp51968;
var inst_51691__$1 = inst_51718;
var state_51937__$1 = (function (){var statearr_51972 = state_51937;
(statearr_51972[(37)] = inst_51688__$1);

(statearr_51972[(38)] = inst_51691__$1);

(statearr_51972[(39)] = inst_51689__$1);

(statearr_51972[(41)] = inst_51717);

(statearr_51972[(40)] = inst_51690__$1);

return statearr_51972;
})();
var statearr_51973_54680 = state_51937__$1;
(statearr_51973_54680[(2)] = null);

(statearr_51973_54680[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (88))){
var inst_51900 = (state_51937[(36)]);
var inst_51910 = cljs.core.async.close_BANG_(inst_51900);
var state_51937__$1 = state_51937;
var statearr_51974_54684 = state_51937__$1;
(statearr_51974_54684[(2)] = inst_51910);

(statearr_51974_54684[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (46))){
var inst_51721 = (state_51937[(42)]);
var inst_51725 = cljs.core.chunk_first(inst_51721);
var inst_51726 = cljs.core.chunk_rest(inst_51721);
var inst_51727 = cljs.core.count(inst_51725);
var inst_51688 = inst_51726;
var inst_51689 = inst_51725;
var inst_51690 = inst_51727;
var inst_51691 = (0);
var state_51937__$1 = (function (){var statearr_51978 = state_51937;
(statearr_51978[(37)] = inst_51688);

(statearr_51978[(38)] = inst_51691);

(statearr_51978[(39)] = inst_51689);

(statearr_51978[(40)] = inst_51690);

return statearr_51978;
})();
var statearr_51979_54689 = state_51937__$1;
(statearr_51979_54689[(2)] = null);

(statearr_51979_54689[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (4))){
var inst_51577 = (state_51937[(43)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_51937,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_51577__$1 = new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073).cljs$core$IFn$_invoke$arity$1(env);
var inst_51579 = (inst_51577__$1 == null);
var inst_51580 = cljs.core.not(inst_51579);
var state_51937__$1 = (function (){var statearr_51980 = state_51937;
(statearr_51980[(43)] = inst_51577__$1);

return statearr_51980;
})();
if(inst_51580){
var statearr_51981_54691 = state_51937__$1;
(statearr_51981_54691[(1)] = (5));

} else {
var statearr_51982_54692 = state_51937__$1;
(statearr_51982_54692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (77))){
var inst_51852 = (state_51937[(7)]);
var inst_51851 = (state_51937[(8)]);
var inst_51850 = (state_51937[(23)]);
var inst_51849 = (state_51937[(29)]);
var inst_51878 = (state_51937[(2)]);
var inst_51879 = (inst_51852 + (1));
var tmp51975 = inst_51851;
var tmp51976 = inst_51850;
var tmp51977 = inst_51849;
var inst_51849__$1 = tmp51977;
var inst_51850__$1 = tmp51976;
var inst_51851__$1 = tmp51975;
var inst_51852__$1 = inst_51879;
var state_51937__$1 = (function (){var statearr_51983 = state_51937;
(statearr_51983[(7)] = inst_51852__$1);

(statearr_51983[(8)] = inst_51851__$1);

(statearr_51983[(23)] = inst_51850__$1);

(statearr_51983[(29)] = inst_51849__$1);

(statearr_51983[(44)] = inst_51878);

return statearr_51983;
})();
var statearr_51984_54693 = state_51937__$1;
(statearr_51984_54693[(2)] = null);

(statearr_51984_54693[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (54))){
var inst_51739 = (state_51937[(45)]);
var inst_51746 = (state_51937[(2)]);
var inst_51747 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51739,inst_51746);
var state_51937__$1 = state_51937;
var statearr_51985_54694 = state_51937__$1;
(statearr_51985_54694[(2)] = inst_51747);

(statearr_51985_54694[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (92))){
var inst_51900 = (state_51937[(36)]);
var inst_51907 = (state_51937[(2)]);
var inst_51908 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51900,inst_51907);
var state_51937__$1 = state_51937;
var statearr_51986_54695 = state_51937__$1;
(statearr_51986_54695[(2)] = inst_51908);

(statearr_51986_54695[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (15))){
var inst_51602 = (state_51937[(14)]);
var inst_51599 = (state_51937[(15)]);
var inst_51605 = (state_51937[(16)]);
var inst_51774 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51775 = [inst_51599,inst_51602,inst_51605];
var inst_51776 = (new cljs.core.PersistentVector(null,3,(5),inst_51774,inst_51775,null));
var inst_51777 = com.wsscode.pathom.core.cache_contains_QMARK_(env,inst_51776);
var state_51937__$1 = state_51937;
if(inst_51777){
var statearr_51987_54698 = state_51937__$1;
(statearr_51987_54698[(1)] = (55));

} else {
var statearr_51988_54699 = state_51937__$1;
(statearr_51988_54699[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (48))){
var inst_51755 = (state_51937[(2)]);
var state_51937__$1 = state_51937;
var statearr_51989_54702 = state_51937__$1;
(statearr_51989_54702[(2)] = inst_51755);

(statearr_51989_54702[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (50))){
var inst_51739 = (state_51937[(45)]);
var inst_51749 = cljs.core.async.close_BANG_(inst_51739);
var state_51937__$1 = state_51937;
var statearr_51990_54703 = state_51937__$1;
(statearr_51990_54703[(2)] = inst_51749);

(statearr_51990_54703[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (75))){
var inst_51867 = (state_51937[(22)]);
var state_51937__$1 = state_51937;
if(cljs.core.truth_(inst_51867)){
var statearr_51991_54704 = state_51937__$1;
(statearr_51991_54704[(1)] = (78));

} else {
var statearr_51992_54705 = state_51937__$1;
(statearr_51992_54705[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (21))){
var inst_51639 = (state_51937[(31)]);
var inst_51598 = (state_51937[(11)]);
var inst_51631 = (state_51937[(46)]);
var inst_51600 = (state_51937[(12)]);
var inst_51608 = (state_51937[(13)]);
var inst_51602 = (state_51937[(14)]);
var inst_51599 = (state_51937[(15)]);
var inst_51625 = (state_51937[(47)]);
var inst_51605 = (state_51937[(16)]);
var inst_51612 = (state_51937[(48)]);
var inst_51638 = (state_51937[(49)]);
var inst_51604 = (state_51937[(18)]);
var inst_51635 = (state_51937[(2)]);
var inst_51636 = com.wsscode.common.async_cljs.throw_err(inst_51635);
var inst_51637 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_51625,inst_51631,inst_51636);
var inst_51638__$1 = com.wsscode.pathom.connect.group_input_indexes(inst_51637);
var inst_51639__$1 = cljs.core.keys(inst_51638__$1);
var inst_51640 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items","com.wsscode.pathom.connect/items",-968170616)];
var inst_51641 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-items-ready","com.wsscode.pathom.connect/batch-items-ready",-985129199),inst_51639__$1];
var inst_51642 = cljs.core.PersistentHashMap.fromArrays(inst_51640,inst_51641);
var inst_51643 = com.wsscode.pathom.trace.trace(env,inst_51642);
var inst_51644 = cljs.core.PersistentVector.EMPTY;
var inst_51645 = (function (){var input = inst_51600;
var items = inst_51639__$1;
var trace_id__21490__auto__ = inst_51612;
var items_map = inst_51638__$1;
var map__51576 = inst_51598;
var key = inst_51604;
var _ = inst_51643;
var params = inst_51605;
var e = inst_51602;
var resolver_sym = inst_51599;
var trace_data = inst_51608;
return ((function (input,items,trace_id__21490__auto__,items_map,map__51576,key,_,params,e,resolver_sym,trace_data,inst_51639,inst_51598,inst_51631,inst_51600,inst_51608,inst_51602,inst_51599,inst_51625,inst_51605,inst_51612,inst_51638,inst_51604,inst_51635,inst_51636,inst_51637,inst_51638__$1,inst_51639__$1,inst_51640,inst_51641,inst_51642,inst_51643,inst_51644,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache){
return (function (resolver_input){
var ch = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
com.wsscode.pathom.core.cache_hit(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,resolver_input,params], null),ch);

return ch;
});
;})(input,items,trace_id__21490__auto__,items_map,map__51576,key,_,params,e,resolver_sym,trace_data,inst_51639,inst_51598,inst_51631,inst_51600,inst_51608,inst_51602,inst_51599,inst_51625,inst_51605,inst_51612,inst_51638,inst_51604,inst_51635,inst_51636,inst_51637,inst_51638__$1,inst_51639__$1,inst_51640,inst_51641,inst_51642,inst_51643,inst_51644,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_51646 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_51645);
var inst_51647 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_51644,inst_51646,inst_51639__$1);
var state_51937__$1 = (function (){var statearr_51993 = state_51937;
(statearr_51993[(31)] = inst_51639__$1);

(statearr_51993[(49)] = inst_51638__$1);

(statearr_51993[(50)] = inst_51647);

return statearr_51993;
})();
var statearr_51994_54714 = state_51937__$1;
(statearr_51994_54714[(2)] = null);

(statearr_51994_54714[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (31))){
var inst_51671 = (state_51937[(51)]);
var inst_51682 = (state_51937[(2)]);
var inst_51687 = cljs.core.seq(inst_51671);
var inst_51688 = inst_51687;
var inst_51689 = null;
var inst_51690 = (0);
var inst_51691 = (0);
var state_51937__$1 = (function (){var statearr_51995 = state_51937;
(statearr_51995[(52)] = inst_51682);

(statearr_51995[(37)] = inst_51688);

(statearr_51995[(38)] = inst_51691);

(statearr_51995[(39)] = inst_51689);

(statearr_51995[(40)] = inst_51690);

return statearr_51995;
})();
var statearr_51996_54717 = state_51937__$1;
(statearr_51996_54717[(2)] = null);

(statearr_51996_54717[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (32))){
var inst_51691 = (state_51937[(38)]);
var inst_51690 = (state_51937[(40)]);
var inst_51693 = (inst_51691 < inst_51690);
var inst_51694 = inst_51693;
var state_51937__$1 = state_51937;
if(cljs.core.truth_(inst_51694)){
var statearr_51997_54720 = state_51937__$1;
(statearr_51997_54720[(1)] = (34));

} else {
var statearr_51998_54721 = state_51937__$1;
(statearr_51998_54721[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (40))){
var inst_51706 = (state_51937[(53)]);
var state_51937__$1 = state_51937;
var statearr_51999_54722 = state_51937__$1;
(statearr_51999_54722[(2)] = inst_51706);

(statearr_51999_54722[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (91))){
var inst_51905 = cljs.core.PersistentHashMap.EMPTY;
var state_51937__$1 = state_51937;
var statearr_52000_54723 = state_51937__$1;
(statearr_52000_54723[(2)] = inst_51905);

(statearr_52000_54723[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (56))){
var inst_51598 = (state_51937[(11)]);
var inst_51600 = (state_51937[(12)]);
var inst_51608 = (state_51937[(13)]);
var inst_51602 = (state_51937[(14)]);
var inst_51599 = (state_51937[(15)]);
var inst_51605 = (state_51937[(16)]);
var inst_51604 = (state_51937[(18)]);
var inst_51786 = cljs.core.PersistentVector.EMPTY;
var inst_51787 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector);
var inst_51788 = (function (){var map__51576 = inst_51598;
var resolver_sym = inst_51599;
var input = inst_51600;
var e = inst_51602;
var key = inst_51604;
var params = inst_51605;
var trace_data = inst_51608;
return ((function (map__51576,resolver_sym,input,e,key,params,trace_data,inst_51598,inst_51600,inst_51608,inst_51602,inst_51599,inst_51605,inst_51604,inst_51786,inst_51787,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__51566_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(cljs.core.second(p1__51566_SHARP_),input);
});
;})(map__51576,resolver_sym,input,e,key,params,trace_data,inst_51598,inst_51600,inst_51608,inst_51602,inst_51599,inst_51605,inst_51604,inst_51786,inst_51787,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_51789 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_51788);
var inst_51790 = (function (){var map__51576 = inst_51598;
var resolver_sym = inst_51599;
var input = inst_51600;
var e = inst_51602;
var key = inst_51604;
var params = inst_51605;
var trace_data = inst_51608;
return ((function (map__51576,resolver_sym,input,e,key,params,trace_data,inst_51598,inst_51600,inst_51608,inst_51602,inst_51599,inst_51605,inst_51604,inst_51786,inst_51787,inst_51788,inst_51789,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__51567_SHARP_){
return com.wsscode.pathom.core.cache_contains_QMARK_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,cljs.core.second(p1__51567_SHARP_),params], null));
});
;})(map__51576,resolver_sym,input,e,key,params,trace_data,inst_51598,inst_51600,inst_51608,inst_51602,inst_51599,inst_51605,inst_51604,inst_51786,inst_51787,inst_51788,inst_51789,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_51791 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_51790);
var inst_51792 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(inst_51787,inst_51789,inst_51791);
var inst_51793 = (function (){var map__51576 = inst_51598;
var resolver_sym = inst_51599;
var input = inst_51600;
var e = inst_51602;
var key = inst_51604;
var params = inst_51605;
var trace_data = inst_51608;
return ((function (map__51576,resolver_sym,input,e,key,params,trace_data,inst_51598,inst_51600,inst_51608,inst_51602,inst_51599,inst_51605,inst_51604,inst_51786,inst_51787,inst_51788,inst_51789,inst_51790,inst_51791,inst_51792,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__51565_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__51565_SHARP_,input);
});
;})(map__51576,resolver_sym,input,e,key,params,trace_data,inst_51598,inst_51600,inst_51608,inst_51602,inst_51599,inst_51605,inst_51604,inst_51786,inst_51787,inst_51788,inst_51789,inst_51790,inst_51791,inst_51792,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_51794 = com.wsscode.pathom.connect.map_async_serial(inst_51793,processing_sequence);
var state_51937__$1 = (function (){var statearr_52001 = state_51937;
(statearr_52001[(19)] = inst_51786);

(statearr_52001[(20)] = inst_51792);

return statearr_52001;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51937__$1,(59),inst_51794);
} else {
if((state_val_51938 === (33))){
var inst_51602 = (state_51937[(14)]);
var inst_51671 = (state_51937[(51)]);
var inst_51762 = (state_51937[(2)]);
var inst_51763 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51764 = cljs.core.PersistentHashMap.EMPTY;
var inst_51765 = [null,inst_51764];
var inst_51766 = (new cljs.core.PersistentVector(null,2,(5),inst_51763,inst_51765,null));
var inst_51767 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_51671,inst_51602,inst_51766);
var inst_51768 = cljs.core.second(inst_51767);
var state_51937__$1 = (function (){var statearr_52002 = state_51937;
(statearr_52002[(54)] = inst_51762);

return statearr_52002;
})();
var statearr_52003_54733 = state_51937__$1;
(statearr_52003_54733[(2)] = inst_51768);

(statearr_52003_54733[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (13))){
var inst_51598 = (state_51937[(11)]);
var inst_51600 = (state_51937[(12)]);
var inst_51602 = (state_51937[(14)]);
var inst_51599 = (state_51937[(15)]);
var inst_51604 = (state_51937[(18)]);
var inst_51598__$1 = (state_51937[(2)]);
var inst_51599__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51598__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var inst_51600__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51598__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_51601 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var inst_51602__$1 = cljs.core.select_keys(inst_51601,inst_51600__$1);
var inst_51603 = new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env);
var inst_51604__$1 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(inst_51603);
var inst_51605 = com.wsscode.pathom.core.params(env);
var inst_51606 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_51607 = [inst_51604__$1,inst_51599__$1,inst_51602__$1];
var inst_51608 = cljs.core.PersistentHashMap.fromArrays(inst_51606,inst_51607);
var inst_51609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_51937__$1 = (function (){var statearr_52004 = state_51937;
(statearr_52004[(11)] = inst_51598__$1);

(statearr_52004[(12)] = inst_51600__$1);

(statearr_52004[(13)] = inst_51608);

(statearr_52004[(14)] = inst_51602__$1);

(statearr_52004[(15)] = inst_51599__$1);

(statearr_52004[(16)] = inst_51605);

(statearr_52004[(18)] = inst_51604__$1);

return statearr_52004;
})();
if(cljs.core.truth_(inst_51609)){
var statearr_52005_54738 = state_51937__$1;
(statearr_52005_54738[(1)] = (14));

} else {
var statearr_52006_54739 = state_51937__$1;
(statearr_52006_54739[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (22))){
var inst_51639 = (state_51937[(31)]);
var inst_51664 = (state_51937[(55)]);
var inst_51647 = (state_51937[(50)]);
var inst_51664__$1 = (state_51937[(2)]);
var inst_51665 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","items-count","com.wsscode.pathom.connect/items-count",1662294429)];
var inst_51666 = cljs.core.count(inst_51664__$1);
var inst_51667 = [new cljs.core.Keyword("com.wsscode.pathom.connect","batch-result-ready","com.wsscode.pathom.connect/batch-result-ready",-305843464),inst_51666];
var inst_51668 = cljs.core.PersistentHashMap.fromArrays(inst_51665,inst_51667);
var inst_51669 = com.wsscode.pathom.trace.trace(env,inst_51668);
var inst_51670 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_51647,inst_51664__$1);
var inst_51671 = cljs.core.zipmap(inst_51639,inst_51670);
var inst_51672 = cljs.core.first(inst_51664__$1);
var inst_51673 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_51672);
var inst_51674 = cljs.core.count(path);
var inst_51675 = (inst_51674 >= (2));
var inst_51676 = ((inst_51673) && (inst_51675));
var state_51937__$1 = (function (){var statearr_52007 = state_51937;
(statearr_52007[(55)] = inst_51664__$1);

(statearr_52007[(56)] = inst_51669);

(statearr_52007[(51)] = inst_51671);

return statearr_52007;
})();
if(cljs.core.truth_(inst_51676)){
var statearr_52008_54744 = state_51937__$1;
(statearr_52008_54744[(1)] = (29));

} else {
var statearr_52009_54745 = state_51937__$1;
(statearr_52009_54745[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (90))){
var inst_51901 = (state_51937[(34)]);
var state_51937__$1 = state_51937;
var statearr_52010_54746 = state_51937__$1;
(statearr_52010_54746[(2)] = inst_51901);

(statearr_52010_54746[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (36))){
var inst_51760 = (state_51937[(2)]);
var state_51937__$1 = state_51937;
var statearr_52011_54747 = state_51937__$1;
(statearr_52011_54747[(2)] = inst_51760);

(statearr_52011_54747[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (41))){
var inst_51710 = cljs.core.PersistentHashMap.EMPTY;
var state_51937__$1 = state_51937;
var statearr_52012_54748 = state_51937__$1;
(statearr_52012_54748[(2)] = inst_51710);

(statearr_52012_54748[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (89))){
var inst_51882 = (state_51937[(33)]);
var inst_51912 = (state_51937[(2)]);
var inst_51913 = cljs.core.next(inst_51882);
var inst_51849 = inst_51913;
var inst_51850 = null;
var inst_51851 = (0);
var inst_51852 = (0);
var state_51937__$1 = (function (){var statearr_52013 = state_51937;
(statearr_52013[(7)] = inst_51852);

(statearr_52013[(8)] = inst_51851);

(statearr_52013[(57)] = inst_51912);

(statearr_52013[(23)] = inst_51850);

(statearr_52013[(29)] = inst_51849);

return statearr_52013;
})();
var statearr_52014_54749 = state_51937__$1;
(statearr_52014_54749[(2)] = null);

(statearr_52014_54749[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (43))){
var inst_51721 = (state_51937[(42)]);
var inst_51723 = cljs.core.chunked_seq_QMARK_(inst_51721);
var state_51937__$1 = state_51937;
if(inst_51723){
var statearr_52015_54750 = state_51937__$1;
(statearr_52015_54750[(1)] = (46));

} else {
var statearr_52016_54751 = state_51937__$1;
(statearr_52016_54751[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (61))){
var inst_51809 = (state_51937[(2)]);
var inst_51810 = com.wsscode.pathom.connect.parallel_batch_error(env,inst_51809);
var state_51937__$1 = state_51937;
var statearr_52017_54752 = state_51937__$1;
(statearr_52017_54752[(2)] = inst_51810);


cljs.core.async.impl.ioc_helpers.process_exception(state_51937__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (29))){
var inst_51639 = (state_51937[(31)]);
var inst_51598 = (state_51937[(11)]);
var inst_51664 = (state_51937[(55)]);
var inst_51600 = (state_51937[(12)]);
var inst_51608 = (state_51937[(13)]);
var inst_51602 = (state_51937[(14)]);
var inst_51669 = (state_51937[(56)]);
var inst_51599 = (state_51937[(15)]);
var inst_51671 = (state_51937[(51)]);
var inst_51605 = (state_51937[(16)]);
var inst_51612 = (state_51937[(48)]);
var inst_51638 = (state_51937[(49)]);
var inst_51647 = (state_51937[(50)]);
var inst_51604 = (state_51937[(18)]);
var inst_51678 = (function (){var input = inst_51600;
var items = inst_51639;
var trace_id__21490__auto__ = inst_51612;
var items_map = inst_51638;
var map__51576 = inst_51598;
var linked_results = inst_51671;
var key = inst_51604;
var channels = inst_51647;
var _ = inst_51669;
var params = inst_51605;
var e = inst_51602;
var resolver_sym = inst_51599;
var trace_data = inst_51608;
var batch_result = inst_51664;
return ((function (input,items,trace_id__21490__auto__,items_map,map__51576,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,inst_51639,inst_51598,inst_51664,inst_51600,inst_51608,inst_51602,inst_51669,inst_51599,inst_51671,inst_51605,inst_51612,inst_51638,inst_51647,inst_51604,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap(cache){
var path__$1 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),(cljs.core.count(path) - (2)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path__$1,input,items,trace_id__21490__auto__,items_map,map__51576,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,inst_51639,inst_51598,inst_51664,inst_51600,inst_51608,inst_51602,inst_51669,inst_51599,inst_51671,inst_51605,inst_51612,inst_51638,inst_51647,inst_51604,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce(cache__$1,p__52018){
var vec__52019 = p__52018;
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52019,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52019,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__52019,item,result,path__$1,input,items,trace_id__21490__auto__,items_map,map__51576,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,inst_51639,inst_51598,inst_51664,inst_51600,inst_51608,inst_51602,inst_51669,inst_51599,inst_51671,inst_51605,inst_51612,inst_51638,inst_51647,inst_51604,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce_$_entity_path_inner_reduce(cache__$2,index){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cache__$2,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,index),((function (vec__52019,item,result,path__$1,input,items,trace_id__21490__auto__,items_map,map__51576,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,inst_51639,inst_51598,inst_51664,inst_51600,inst_51608,inst_51602,inst_51669,inst_51599,inst_51671,inst_51605,inst_51612,inst_51638,inst_51647,inst_51604,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__51568_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result,p1__51568_SHARP_], 0));
});})(vec__52019,item,result,path__$1,input,items,trace_id__21490__auto__,items_map,map__51576,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,inst_51639,inst_51598,inst_51664,inst_51600,inst_51608,inst_51602,inst_51669,inst_51599,inst_51671,inst_51605,inst_51612,inst_51638,inst_51647,inst_51604,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache))
);
});})(vec__52019,item,result,path__$1,input,items,trace_id__21490__auto__,items_map,map__51576,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,inst_51639,inst_51598,inst_51664,inst_51600,inst_51608,inst_51602,inst_51669,inst_51599,inst_51671,inst_51605,inst_51612,inst_51638,inst_51647,inst_51604,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache))
,cache__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_map,item));
});})(path__$1,input,items,trace_id__21490__auto__,items_map,map__51576,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,inst_51639,inst_51598,inst_51664,inst_51600,inst_51608,inst_51602,inst_51669,inst_51599,inst_51671,inst_51605,inst_51612,inst_51638,inst_51647,inst_51604,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache))
,cache,cljs.core.zipmap(items,batch_result));
});
;})(input,items,trace_id__21490__auto__,items_map,map__51576,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,inst_51639,inst_51598,inst_51664,inst_51600,inst_51608,inst_51602,inst_51669,inst_51599,inst_51671,inst_51605,inst_51612,inst_51638,inst_51647,inst_51604,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_51679 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(entity_path_cache,inst_51678);
var state_51937__$1 = state_51937;
var statearr_52022_54753 = state_51937__$1;
(statearr_52022_54753[(2)] = inst_51679);

(statearr_52022_54753[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (44))){
var state_51937__$1 = state_51937;
var statearr_52023_54754 = state_51937__$1;
(statearr_52023_54754[(2)] = null);

(statearr_52023_54754[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (6))){
var state_51937__$1 = state_51937;
var statearr_52024_54755 = state_51937__$1;
(statearr_52024_54755[(2)] = false);

(statearr_52024_54755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (28))){
var inst_51657 = (state_51937[(2)]);
var inst_51658 = com.wsscode.common.async_cljs.throw_err(inst_51657);
var state_51937__$1 = state_51937;
var statearr_52025_54756 = state_51937__$1;
(statearr_52025_54756[(2)] = inst_51658);

(statearr_52025_54756[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (64))){
var inst_51814 = (state_51937[(10)]);
var state_51937__$1 = state_51937;
var statearr_52026_54757 = state_51937__$1;
(statearr_52026_54757[(2)] = inst_51814);

(statearr_52026_54757[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (51))){
var inst_51721 = (state_51937[(42)]);
var inst_51751 = (state_51937[(2)]);
var inst_51752 = cljs.core.next(inst_51721);
var inst_51688 = inst_51752;
var inst_51689 = null;
var inst_51690 = (0);
var inst_51691 = (0);
var state_51937__$1 = (function (){var statearr_52027 = state_51937;
(statearr_52027[(58)] = inst_51751);

(statearr_52027[(37)] = inst_51688);

(statearr_52027[(38)] = inst_51691);

(statearr_52027[(39)] = inst_51689);

(statearr_52027[(40)] = inst_51690);

return statearr_52027;
})();
var statearr_52028_54758 = state_51937__$1;
(statearr_52028_54758[(2)] = null);

(statearr_52028_54758[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (25))){
var inst_51653 = (state_51937[(32)]);
var state_51937__$1 = state_51937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51937__$1,(28),inst_51653);
} else {
if((state_val_51938 === (34))){
var inst_51706 = (state_51937[(53)]);
var inst_51691 = (state_51937[(38)]);
var inst_51689 = (state_51937[(39)]);
var inst_51702 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_51689,inst_51691);
var inst_51703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51702,(0),null);
var inst_51704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51702,(1),null);
var inst_51705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51704,(0),null);
var inst_51706__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51704,(1),null);
var state_51937__$1 = (function (){var statearr_52029 = state_51937;
(statearr_52029[(53)] = inst_51706__$1);

(statearr_52029[(59)] = inst_51705);

(statearr_52029[(60)] = inst_51703);

return statearr_52029;
})();
if(cljs.core.truth_(inst_51706__$1)){
var statearr_52030_54759 = state_51937__$1;
(statearr_52030_54759[(1)] = (37));

} else {
var statearr_52031_54760 = state_51937__$1;
(statearr_52031_54760[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (17))){
var inst_51602 = (state_51937[(14)]);
var inst_51599 = (state_51937[(15)]);
var inst_51605 = (state_51937[(16)]);
var inst_51618 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51619 = [inst_51599,inst_51602,inst_51605];
var inst_51620 = (new cljs.core.PersistentVector(null,3,(5),inst_51618,inst_51619,null));
var inst_51621 = com.wsscode.pathom.core.cache_read(env,inst_51620);
var state_51937__$1 = state_51937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51937__$1,(20),inst_51621);
} else {
if((state_val_51938 === (3))){
var inst_51572 = (state_51937[(2)]);
var state_51937__$1 = state_51937;
var statearr_52032_54761 = state_51937__$1;
(statearr_52032_54761[(2)] = inst_51572);


cljs.core.async.impl.ioc_helpers.process_exception(state_51937__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (12))){
var inst_51577 = (state_51937[(43)]);
var state_51937__$1 = state_51937;
var statearr_52033_54762 = state_51937__$1;
(statearr_52033_54762[(2)] = inst_51577);

(statearr_52033_54762[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (2))){
var inst_51935 = (state_51937[(2)]);
var state_51937__$1 = state_51937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51937__$1,inst_51935);
} else {
if((state_val_51938 === (66))){
var inst_51818 = (state_51937[(2)]);
var inst_51819 = com.wsscode.common.async_cljs.throw_err(inst_51818);
var state_51937__$1 = state_51937;
var statearr_52034_54763 = state_51937__$1;
(statearr_52034_54763[(2)] = inst_51819);

(statearr_52034_54763[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (23))){
var inst_51648 = (state_51937[(2)]);
var inst_51649 = com.wsscode.pathom.connect.parallel_batch_error(env,inst_51648);
var state_51937__$1 = state_51937;
var statearr_52035_54764 = state_51937__$1;
(statearr_52035_54764[(2)] = inst_51649);


cljs.core.async.impl.ioc_helpers.process_exception(state_51937__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (47))){
var inst_51721 = (state_51937[(42)]);
var inst_51740 = (state_51937[(61)]);
var inst_51736 = cljs.core.first(inst_51721);
var inst_51737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51736,(0),null);
var inst_51738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51736,(1),null);
var inst_51739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51738,(0),null);
var inst_51740__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51738,(1),null);
var state_51937__$1 = (function (){var statearr_52036 = state_51937;
(statearr_52036[(45)] = inst_51739);

(statearr_52036[(61)] = inst_51740__$1);

(statearr_52036[(62)] = inst_51737);

return statearr_52036;
})();
if(cljs.core.truth_(inst_51740__$1)){
var statearr_52037_54765 = state_51937__$1;
(statearr_52037_54765[(1)] = (49));

} else {
var statearr_52038_54766 = state_51937__$1;
(statearr_52038_54766[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (35))){
var inst_51721 = (state_51937[(42)]);
var inst_51688 = (state_51937[(37)]);
var inst_51721__$1 = cljs.core.seq(inst_51688);
var state_51937__$1 = (function (){var statearr_52039 = state_51937;
(statearr_52039[(42)] = inst_51721__$1);

return statearr_52039;
})();
if(inst_51721__$1){
var statearr_52040_54767 = state_51937__$1;
(statearr_52040_54767[(1)] = (43));

} else {
var statearr_52041_54768 = state_51937__$1;
(statearr_52041_54768[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (82))){
var state_51937__$1 = state_51937;
var statearr_52042_54769 = state_51937__$1;
(statearr_52042_54769[(2)] = null);

(statearr_52042_54769[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (76))){
var inst_51866 = (state_51937[(24)]);
var inst_51876 = cljs.core.async.close_BANG_(inst_51866);
var state_51937__$1 = state_51937;
var statearr_52043_54770 = state_51937__$1;
(statearr_52043_54770[(2)] = inst_51876);

(statearr_52043_54770[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (19))){
var inst_51608 = (state_51937[(13)]);
var inst_51612 = (state_51937[(48)]);
var inst_51770 = (state_51937[(2)]);
var inst_51771 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_51608,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_51772 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_51612,inst_51771);
var state_51937__$1 = (function (){var statearr_52044 = state_51937;
(statearr_52044[(63)] = inst_51772);

return statearr_52044;
})();
var statearr_52045_54771 = state_51937__$1;
(statearr_52045_54771[(2)] = inst_51770);

(statearr_52045_54771[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (57))){
var inst_51931 = (state_51937[(2)]);
var state_51937__$1 = state_51937;
var statearr_52046_54772 = state_51937__$1;
(statearr_52046_54772[(2)] = inst_51931);

(statearr_52046_54772[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (68))){
var state_51937__$1 = state_51937;
var statearr_52047_54773 = state_51937__$1;
(statearr_52047_54773[(2)] = null);

(statearr_52047_54773[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (11))){
var inst_51577 = (state_51937[(43)]);
var inst_51595 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51577);
var state_51937__$1 = state_51937;
var statearr_52048_54774 = state_51937__$1;
(statearr_52048_54774[(2)] = inst_51595);

(statearr_52048_54774[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (9))){
var state_51937__$1 = state_51937;
var statearr_52049_54775 = state_51937__$1;
(statearr_52049_54775[(2)] = false);

(statearr_52049_54775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (5))){
var inst_51577 = (state_51937[(43)]);
var inst_51582 = inst_51577.cljs$lang$protocol_mask$partition0$;
var inst_51583 = (inst_51582 & (64));
var inst_51584 = inst_51577.cljs$core$ISeq$;
var inst_51585 = (cljs.core.PROTOCOL_SENTINEL === inst_51584);
var inst_51586 = ((inst_51583) || (inst_51585));
var state_51937__$1 = state_51937;
if(cljs.core.truth_(inst_51586)){
var statearr_52050_54776 = state_51937__$1;
(statearr_52050_54776[(1)] = (8));

} else {
var statearr_52051_54777 = state_51937__$1;
(statearr_52051_54777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (83))){
var inst_51919 = (state_51937[(2)]);
var state_51937__$1 = state_51937;
var statearr_52052_54778 = state_51937__$1;
(statearr_52052_54778[(2)] = inst_51919);

(statearr_52052_54778[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (14))){
var inst_51608 = (state_51937[(13)]);
var inst_51602 = (state_51937[(14)]);
var inst_51599 = (state_51937[(15)]);
var inst_51605 = (state_51937[(16)]);
var inst_51611 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_51608,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-batch","com.wsscode.pathom.connect/call-resolver-batch",297643769));
var inst_51612 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_51611);
var inst_51613 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51614 = [inst_51599,inst_51602,inst_51605];
var inst_51615 = (new cljs.core.PersistentVector(null,3,(5),inst_51613,inst_51614,null));
var inst_51616 = com.wsscode.pathom.core.cache_contains_QMARK_(env,inst_51615);
var state_51937__$1 = (function (){var statearr_52053 = state_51937;
(statearr_52053[(48)] = inst_51612);

return statearr_52053;
})();
if(inst_51616){
var statearr_52054_54779 = state_51937__$1;
(statearr_52054_54779[(1)] = (17));

} else {
var statearr_52055_54780 = state_51937__$1;
(statearr_52055_54780[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (45))){
var inst_51758 = (state_51937[(2)]);
var state_51937__$1 = state_51937;
var statearr_52056_54781 = state_51937__$1;
(statearr_52056_54781[(2)] = inst_51758);

(statearr_52056_54781[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (53))){
var inst_51744 = cljs.core.PersistentHashMap.EMPTY;
var state_51937__$1 = state_51937;
var statearr_52057_54782 = state_51937__$1;
(statearr_52057_54782[(2)] = inst_51744);

(statearr_52057_54782[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (78))){
var inst_51867 = (state_51937[(22)]);
var state_51937__$1 = state_51937;
var statearr_52058_54783 = state_51937__$1;
(statearr_52058_54783[(2)] = inst_51867);

(statearr_52058_54783[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (26))){
var inst_51653 = (state_51937[(32)]);
var state_51937__$1 = state_51937;
var statearr_52059_54784 = state_51937__$1;
(statearr_52059_54784[(2)] = inst_51653);

(statearr_52059_54784[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (16))){
var inst_51933 = (state_51937[(2)]);
var state_51937__$1 = state_51937;
var statearr_52060_54785 = state_51937__$1;
(statearr_52060_54785[(2)] = inst_51933);


cljs.core.async.impl.ioc_helpers.process_exception(state_51937__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (81))){
var inst_51882 = (state_51937[(33)]);
var inst_51884 = cljs.core.chunked_seq_QMARK_(inst_51882);
var state_51937__$1 = state_51937;
if(inst_51884){
var statearr_52061_54787 = state_51937__$1;
(statearr_52061_54787[(1)] = (84));

} else {
var statearr_52062_54789 = state_51937__$1;
(statearr_52062_54789[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (79))){
var inst_51871 = cljs.core.PersistentHashMap.EMPTY;
var state_51937__$1 = state_51937;
var statearr_52063_54790 = state_51937__$1;
(statearr_52063_54790[(2)] = inst_51871);

(statearr_52063_54790[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (38))){
var inst_51705 = (state_51937[(59)]);
var inst_51715 = cljs.core.async.close_BANG_(inst_51705);
var state_51937__$1 = state_51937;
var statearr_52064_54792 = state_51937__$1;
(statearr_52064_54792[(2)] = inst_51715);

(statearr_52064_54792[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (87))){
var inst_51901 = (state_51937[(34)]);
var state_51937__$1 = state_51937;
if(cljs.core.truth_(inst_51901)){
var statearr_52065_54795 = state_51937__$1;
(statearr_52065_54795[(1)] = (90));

} else {
var statearr_52066_54796 = state_51937__$1;
(statearr_52066_54796[(1)] = (91));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (30))){
var state_51937__$1 = state_51937;
var statearr_52067_54798 = state_51937__$1;
(statearr_52067_54798[(2)] = null);

(statearr_52067_54798[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (73))){
var inst_51882 = (state_51937[(33)]);
var inst_51849 = (state_51937[(29)]);
var inst_51882__$1 = cljs.core.seq(inst_51849);
var state_51937__$1 = (function (){var statearr_52068 = state_51937;
(statearr_52068[(33)] = inst_51882__$1);

return statearr_52068;
})();
if(inst_51882__$1){
var statearr_52069_54799 = state_51937__$1;
(statearr_52069_54799[(1)] = (81));

} else {
var statearr_52070_54800 = state_51937__$1;
(statearr_52070_54800[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (10))){
var inst_51590 = (state_51937[(2)]);
var state_51937__$1 = state_51937;
var statearr_52071_54801 = state_51937__$1;
(statearr_52071_54801[(2)] = inst_51590);

(statearr_52071_54801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (18))){
var inst_51598 = (state_51937[(11)]);
var inst_51600 = (state_51937[(12)]);
var inst_51608 = (state_51937[(13)]);
var inst_51602 = (state_51937[(14)]);
var inst_51599 = (state_51937[(15)]);
var inst_51605 = (state_51937[(16)]);
var inst_51612 = (state_51937[(48)]);
var inst_51604 = (state_51937[(18)]);
var inst_51625 = cljs.core.PersistentVector.EMPTY;
var inst_51626 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector);
var inst_51627 = (function (){var map__51576 = inst_51598;
var resolver_sym = inst_51599;
var input = inst_51600;
var e = inst_51602;
var key = inst_51604;
var params = inst_51605;
var trace_data = inst_51608;
var trace_id__21490__auto__ = inst_51612;
return ((function (map__51576,resolver_sym,input,e,key,params,trace_data,trace_id__21490__auto__,inst_51598,inst_51600,inst_51608,inst_51602,inst_51599,inst_51605,inst_51612,inst_51604,inst_51625,inst_51626,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__51566_SHARP_){
return com.wsscode.pathom.connect.all_values_valid_QMARK_(cljs.core.second(p1__51566_SHARP_),input);
});
;})(map__51576,resolver_sym,input,e,key,params,trace_data,trace_id__21490__auto__,inst_51598,inst_51600,inst_51608,inst_51602,inst_51599,inst_51605,inst_51612,inst_51604,inst_51625,inst_51626,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_51628 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_51627);
var inst_51629 = (function (){var map__51576 = inst_51598;
var resolver_sym = inst_51599;
var input = inst_51600;
var e = inst_51602;
var key = inst_51604;
var params = inst_51605;
var trace_data = inst_51608;
var trace_id__21490__auto__ = inst_51612;
return ((function (map__51576,resolver_sym,input,e,key,params,trace_data,trace_id__21490__auto__,inst_51598,inst_51600,inst_51608,inst_51602,inst_51599,inst_51605,inst_51612,inst_51604,inst_51625,inst_51626,inst_51627,inst_51628,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__51567_SHARP_){
return com.wsscode.pathom.core.cache_contains_QMARK_(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver_sym,cljs.core.second(p1__51567_SHARP_),params], null));
});
;})(map__51576,resolver_sym,input,e,key,params,trace_data,trace_id__21490__auto__,inst_51598,inst_51600,inst_51608,inst_51602,inst_51599,inst_51605,inst_51612,inst_51604,inst_51625,inst_51626,inst_51627,inst_51628,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_51630 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_51629);
var inst_51631 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(inst_51626,inst_51628,inst_51630);
var inst_51632 = (function (){var map__51576 = inst_51598;
var resolver_sym = inst_51599;
var input = inst_51600;
var e = inst_51602;
var key = inst_51604;
var params = inst_51605;
var trace_data = inst_51608;
var trace_id__21490__auto__ = inst_51612;
return ((function (map__51576,resolver_sym,input,e,key,params,trace_data,trace_id__21490__auto__,inst_51598,inst_51600,inst_51608,inst_51602,inst_51599,inst_51605,inst_51612,inst_51604,inst_51625,inst_51626,inst_51627,inst_51628,inst_51629,inst_51630,inst_51631,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__51565_SHARP_){
return com.wsscode.pathom.connect.entity_select_keys(env,p1__51565_SHARP_,input);
});
;})(map__51576,resolver_sym,input,e,key,params,trace_data,trace_id__21490__auto__,inst_51598,inst_51600,inst_51608,inst_51602,inst_51599,inst_51605,inst_51612,inst_51604,inst_51625,inst_51626,inst_51627,inst_51628,inst_51629,inst_51630,inst_51631,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_51633 = com.wsscode.pathom.connect.map_async_serial(inst_51632,processing_sequence);
var state_51937__$1 = (function (){var statearr_52072 = state_51937;
(statearr_52072[(46)] = inst_51631);

(statearr_52072[(47)] = inst_51625);

return statearr_52072;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51937__$1,(21),inst_51633);
} else {
if((state_val_51938 === (52))){
var inst_51740 = (state_51937[(61)]);
var state_51937__$1 = state_51937;
var statearr_52073_54802 = state_51937__$1;
(statearr_52073_54802[(2)] = inst_51740);

(statearr_52073_54802[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (67))){
var inst_51832 = (state_51937[(27)]);
var inst_51598 = (state_51937[(11)]);
var inst_51600 = (state_51937[(12)]);
var inst_51608 = (state_51937[(13)]);
var inst_51602 = (state_51937[(14)]);
var inst_51599 = (state_51937[(15)]);
var inst_51800 = (state_51937[(9)]);
var inst_51605 = (state_51937[(16)]);
var inst_51830 = (state_51937[(28)]);
var inst_51825 = (state_51937[(26)]);
var inst_51799 = (state_51937[(17)]);
var inst_51604 = (state_51937[(18)]);
var inst_51808 = (state_51937[(21)]);
var inst_51839 = (function (){var input = inst_51600;
var items = inst_51800;
var items_map = inst_51799;
var map__51576 = inst_51598;
var linked_results = inst_51832;
var key = inst_51604;
var channels = inst_51808;
var _ = inst_51830;
var params = inst_51605;
var e = inst_51602;
var resolver_sym = inst_51599;
var trace_data = inst_51608;
var batch_result = inst_51825;
return ((function (input,items,items_map,map__51576,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,inst_51832,inst_51598,inst_51600,inst_51608,inst_51602,inst_51599,inst_51800,inst_51605,inst_51830,inst_51825,inst_51799,inst_51604,inst_51808,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap(cache){
var path__$1 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(path,(0),(cljs.core.count(path) - (2)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path__$1,input,items,items_map,map__51576,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,inst_51832,inst_51598,inst_51600,inst_51608,inst_51602,inst_51599,inst_51800,inst_51605,inst_51830,inst_51825,inst_51799,inst_51604,inst_51808,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce(cache__$1,p__52074){
var vec__52075 = p__52074;
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52075,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52075,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__52075,item,result,path__$1,input,items,items_map,map__51576,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,inst_51832,inst_51598,inst_51600,inst_51608,inst_51602,inst_51599,inst_51800,inst_51605,inst_51830,inst_51825,inst_51799,inst_51604,inst_51808,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache){
return (function com$wsscode$pathom$connect$parallel_batch_$_entity_path_swap_$_entity_path_outer_reduce_$_entity_path_inner_reduce(cache__$2,index){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cache__$2,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,index),((function (vec__52075,item,result,path__$1,input,items,items_map,map__51576,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,inst_51832,inst_51598,inst_51600,inst_51608,inst_51602,inst_51599,inst_51800,inst_51605,inst_51830,inst_51825,inst_51799,inst_51604,inst_51808,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache){
return (function (p1__51568_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result,p1__51568_SHARP_], 0));
});})(vec__52075,item,result,path__$1,input,items,items_map,map__51576,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,inst_51832,inst_51598,inst_51600,inst_51608,inst_51602,inst_51599,inst_51800,inst_51605,inst_51830,inst_51825,inst_51799,inst_51604,inst_51808,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache))
);
});})(vec__52075,item,result,path__$1,input,items,items_map,map__51576,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,inst_51832,inst_51598,inst_51600,inst_51608,inst_51602,inst_51599,inst_51800,inst_51605,inst_51830,inst_51825,inst_51799,inst_51604,inst_51808,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache))
,cache__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(items_map,item));
});})(path__$1,input,items,items_map,map__51576,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,inst_51832,inst_51598,inst_51600,inst_51608,inst_51602,inst_51599,inst_51800,inst_51605,inst_51830,inst_51825,inst_51799,inst_51604,inst_51808,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache))
,cache,cljs.core.zipmap(items,batch_result));
});
;})(input,items,items_map,map__51576,linked_results,key,channels,_,params,e,resolver_sym,trace_data,batch_result,inst_51832,inst_51598,inst_51600,inst_51608,inst_51602,inst_51599,inst_51800,inst_51605,inst_51830,inst_51825,inst_51799,inst_51604,inst_51808,state_val_51938,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache))
})();
var inst_51840 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(entity_path_cache,inst_51839);
var state_51937__$1 = state_51937;
var statearr_52078_54803 = state_51937__$1;
(statearr_52078_54803[(2)] = inst_51840);

(statearr_52078_54803[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (71))){
var inst_51832 = (state_51937[(27)]);
var inst_51602 = (state_51937[(14)]);
var inst_51923 = (state_51937[(2)]);
var inst_51924 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51925 = cljs.core.PersistentHashMap.EMPTY;
var inst_51926 = [null,inst_51925];
var inst_51927 = (new cljs.core.PersistentVector(null,2,(5),inst_51924,inst_51926,null));
var inst_51928 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_51832,inst_51602,inst_51927);
var inst_51929 = cljs.core.second(inst_51928);
var state_51937__$1 = (function (){var statearr_52079 = state_51937;
(statearr_52079[(64)] = inst_51923);

return statearr_52079;
})();
var statearr_52080_54804 = state_51937__$1;
(statearr_52080_54804[(2)] = inst_51929);

(statearr_52080_54804[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (42))){
var inst_51705 = (state_51937[(59)]);
var inst_51712 = (state_51937[(2)]);
var inst_51713 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51705,inst_51712);
var state_51937__$1 = state_51937;
var statearr_52081_54805 = state_51937__$1;
(statearr_52081_54805[(2)] = inst_51713);

(statearr_52081_54805[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (80))){
var inst_51866 = (state_51937[(24)]);
var inst_51873 = (state_51937[(2)]);
var inst_51874 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51866,inst_51873);
var state_51937__$1 = state_51937;
var statearr_52082_54806 = state_51937__$1;
(statearr_52082_54806[(2)] = inst_51874);

(statearr_52082_54806[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (37))){
var inst_51706 = (state_51937[(53)]);
var state_51937__$1 = state_51937;
if(cljs.core.truth_(inst_51706)){
var statearr_52083_54807 = state_51937__$1;
(statearr_52083_54807[(1)] = (40));

} else {
var statearr_52084_54808 = state_51937__$1;
(statearr_52084_54808[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (63))){
var inst_51814 = (state_51937[(10)]);
var state_51937__$1 = state_51937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51937__$1,(66),inst_51814);
} else {
if((state_val_51938 === (8))){
var state_51937__$1 = state_51937;
var statearr_52085_54809 = state_51937__$1;
(statearr_52085_54809[(2)] = true);

(statearr_52085_54809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (49))){
var inst_51740 = (state_51937[(61)]);
var state_51937__$1 = state_51937;
if(cljs.core.truth_(inst_51740)){
var statearr_52086_54810 = state_51937__$1;
(statearr_52086_54810[(1)] = (52));

} else {
var statearr_52087_54811 = state_51937__$1;
(statearr_52087_54811[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51938 === (84))){
var inst_51882 = (state_51937[(33)]);
var inst_51886 = cljs.core.chunk_first(inst_51882);
var inst_51887 = cljs.core.chunk_rest(inst_51882);
var inst_51888 = cljs.core.count(inst_51886);
var inst_51849 = inst_51887;
var inst_51850 = inst_51886;
var inst_51851 = inst_51888;
var inst_51852 = (0);
var state_51937__$1 = (function (){var statearr_52088 = state_51937;
(statearr_52088[(7)] = inst_51852);

(statearr_52088[(8)] = inst_51851);

(statearr_52088[(23)] = inst_51850);

(statearr_52088[(29)] = inst_51849);

return statearr_52088;
})();
var statearr_52089_54812 = state_51937__$1;
(statearr_52089_54812[(2)] = null);

(statearr_52089_54812[(1)] = (70));


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
});})(c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache))
;
return ((function (switch__38924__auto__,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache){
return (function() {
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__38925__auto____0 = (function (){
var statearr_52090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52090[(0)] = com$wsscode$pathom$connect$parallel_batch_$_state_machine__38925__auto__);

(statearr_52090[(1)] = (1));

return statearr_52090;
});
var com$wsscode$pathom$connect$parallel_batch_$_state_machine__38925__auto____1 = (function (state_51937){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_51937);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e52091){if((e52091 instanceof Object)){
var ex__38928__auto__ = e52091;
var statearr_52092_54813 = state_51937;
(statearr_52092_54813[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52091;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54814 = state_51937;
state_51937 = G__54814;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_batch_$_state_machine__38925__auto__ = function(state_51937){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__38925__auto____1.call(this,state_51937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_batch_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_batch_$_state_machine__38925__auto____0;
com$wsscode$pathom$connect$parallel_batch_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_batch_$_state_machine__38925__auto____1;
return com$wsscode$pathom$connect$parallel_batch_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache))
})();
var state__38973__auto__ = (function (){var statearr_52093 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_52093[(6)] = c__38971__auto__);

return statearr_52093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,map__51570,map__51570__$1,env,processing_sequence,path,entity_path_cache))
);

return c__38971__auto__;
});
com.wsscode.pathom.connect.parallel_reader = (function com$wsscode$pathom$connect$parallel_reader(p__52097){
var map__52098 = p__52097;
var map__52098__$1 = (((((!((map__52098 == null))))?(((((map__52098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52098):map__52098);
var env = map__52098__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52098__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var max_resolver_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52098__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","max-resolver-weight","com.wsscode.pathom.connect/max-resolver-weight",1018237010),(3600000));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52098__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var waiting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52098__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278));
var temp__5718__auto__ = com.wsscode.pathom.connect.reader_compute_plan(env,cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__52100 = temp__5718__auto__;
var plan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52100,(0),null);
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52100,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),out,new cljs.core.Keyword("com.wsscode.pathom.parser","response-stream","com.wsscode.pathom.parser/response-stream",1785550292),(function (){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
var params = com.wsscode.pathom.core.params(env);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","plan-path","com.wsscode.pathom.connect/plan-path",1931172098),plan);
var c__38971__auto___54815 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (state_52439){
var state_val_52440 = (state_52439[(1)]);
if((state_val_52440 === (65))){
var inst_52131 = (state_52439[(7)]);
var inst_52160 = (state_52439[(8)]);
var inst_52278 = (state_52439[(9)]);
var inst_52268 = (state_52439[(10)]);
var inst_52161 = (state_52439[(11)]);
var inst_52278__$1 = com.wsscode.pathom.connect.output__GT_provides(inst_52160);
var inst_52279 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_52280 = [new cljs.core.Keyword("com.wsscode.pathom.connect","merge-resolver-response","com.wsscode.pathom.connect/merge-resolver-response",435657374),key,inst_52131];
var inst_52281 = cljs.core.PersistentHashMap.fromArrays(inst_52279,inst_52280);
var inst_52282 = com.wsscode.pathom.trace.trace(inst_52161,inst_52281);
var inst_52283 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_52284 = [inst_52278__$1,inst_52268];
var inst_52285 = cljs.core.PersistentHashMap.fromArrays(inst_52283,inst_52284);
var state_52439__$1 = (function (){var statearr_52442 = state_52439;
(statearr_52442[(9)] = inst_52278__$1);

(statearr_52442[(12)] = inst_52282);

return statearr_52442;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52439__$1,(68),ch,inst_52285);
} else {
if((state_val_52440 === (70))){
var inst_52297 = (state_52439[(13)]);
var inst_52117 = (state_52439[(14)]);
var inst_52302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52297,(0),null);
var inst_52303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52297,(1),null);
var inst_52304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52297,(2),null);
var tmp52441 = inst_52117;
var inst_52114 = inst_52302;
var inst_52115 = inst_52303;
var inst_52116 = inst_52304;
var inst_52117__$1 = tmp52441;
var state_52439__$1 = (function (){var statearr_52443 = state_52439;
(statearr_52443[(15)] = inst_52115);

(statearr_52443[(14)] = inst_52117__$1);

(statearr_52443[(16)] = inst_52114);

(statearr_52443[(17)] = inst_52116);

return statearr_52443;
})();
var statearr_52444_54816 = state_52439__$1;
(statearr_52444_54816[(2)] = null);

(statearr_52444_54816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (62))){
var inst_52163 = (state_52439[(18)]);
var inst_52157 = (state_52439[(19)]);
var inst_52158 = (state_52439[(20)]);
var inst_52166 = (state_52439[(21)]);
var inst_52131 = (state_52439[(7)]);
var inst_52160 = (state_52439[(8)]);
var inst_52115 = (state_52439[(15)]);
var inst_52111 = (state_52439[(22)]);
var inst_52124 = (state_52439[(23)]);
var inst_52112 = (state_52439[(24)]);
var inst_52117 = (state_52439[(14)]);
var inst_52130 = (state_52439[(25)]);
var inst_52114 = (state_52439[(16)]);
var inst_52268 = (state_52439[(10)]);
var inst_52123 = (state_52439[(26)]);
var inst_52159 = (state_52439[(27)]);
var inst_52156 = (state_52439[(28)]);
var inst_52116 = (state_52439[(17)]);
var inst_52161 = (state_52439[(11)]);
var inst_52251 = (state_52439[(29)]);
var inst_52252 = (state_52439[(30)]);
var inst_52268__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_52251,new cljs.core.Keyword("com.wsscode.pathom.connect","env","com.wsscode.pathom.connect/env",-14785257));
var inst_52269 = (function (){var input = inst_52159;
var step = inst_52123;
var seq__52108 = inst_52112;
var key_SINGLEQUOTE_ = inst_52130;
var vec__52126 = inst_52123;
var response = inst_52268__$1;
var cache_QMARK_ = inst_52157;
var out_left = inst_52116;
var map__52129 = inst_52156;
var failed_resolvers = inst_52115;
var batch_QMARK_ = inst_52158;
var vec__52107 = plan;
var output = inst_52160;
var env__$2 = inst_52161;
var e = inst_52163;
var resolver_sym = inst_52131;
var waiting__$1 = inst_52117;
var trace_data = inst_52166;
var resolver = inst_52156;
var G__52106 = inst_52114;
var replan = inst_52252;
var first__52109 = inst_52111;
var tail = inst_52124;
var first__52121 = inst_52123;
var vec__52119 = inst_52114;
var seq__52120 = inst_52124;
return ((function (input,step,seq__52108,key_SINGLEQUOTE_,vec__52126,response,cache_QMARK_,out_left,map__52129,failed_resolvers,batch_QMARK_,vec__52107,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,G__52106,replan,first__52109,tail,first__52121,vec__52119,seq__52120,inst_52163,inst_52157,inst_52158,inst_52166,inst_52131,inst_52160,inst_52115,inst_52111,inst_52124,inst_52112,inst_52117,inst_52130,inst_52114,inst_52268,inst_52123,inst_52159,inst_52156,inst_52116,inst_52161,inst_52251,inst_52252,inst_52268__$1,state_val_52440,c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (p1__52095_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__52095_SHARP_], 0));
});
;})(input,step,seq__52108,key_SINGLEQUOTE_,vec__52126,response,cache_QMARK_,out_left,map__52129,failed_resolvers,batch_QMARK_,vec__52107,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,G__52106,replan,first__52109,tail,first__52121,vec__52119,seq__52120,inst_52163,inst_52157,inst_52158,inst_52166,inst_52131,inst_52160,inst_52115,inst_52111,inst_52124,inst_52112,inst_52117,inst_52130,inst_52114,inst_52268,inst_52123,inst_52159,inst_52156,inst_52116,inst_52161,inst_52251,inst_52252,inst_52268__$1,state_val_52440,c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_52270 = com.wsscode.pathom.core.swap_entity_BANG_(inst_52161,inst_52269);
var inst_52272 = cljs.core.contains_QMARK_(inst_52268__$1,inst_52130);
var inst_52273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52268__$1,inst_52130);
var inst_52274 = (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(inst_52273) : com.wsscode.pathom.core.break_values.call(null,inst_52273));
var inst_52275 = cljs.core.not(inst_52274);
var inst_52276 = ((inst_52272) && (inst_52275));
var state_52439__$1 = (function (){var statearr_52445 = state_52439;
(statearr_52445[(31)] = inst_52270);

(statearr_52445[(10)] = inst_52268__$1);

return statearr_52445;
})();
if(cljs.core.truth_(inst_52276)){
var statearr_52446_54817 = state_52439__$1;
(statearr_52446_54817[(1)] = (65));

} else {
var statearr_52447_54818 = state_52439__$1;
(statearr_52447_54818[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (74))){
var state_52439__$1 = state_52439;
var statearr_52450_54819 = state_52439__$1;
(statearr_52450_54819[(2)] = null);

(statearr_52450_54819[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (7))){
var inst_52135 = (state_52439[(32)]);
var inst_52140 = inst_52135.cljs$lang$protocol_mask$partition0$;
var inst_52141 = (inst_52140 & (64));
var inst_52142 = inst_52135.cljs$core$ISeq$;
var inst_52143 = (cljs.core.PROTOCOL_SENTINEL === inst_52142);
var inst_52144 = ((inst_52141) || (inst_52143));
var state_52439__$1 = state_52439;
if(cljs.core.truth_(inst_52144)){
var statearr_52451_54820 = state_52439__$1;
(statearr_52451_54820[(1)] = (10));

} else {
var statearr_52452_54821 = state_52439__$1;
(statearr_52452_54821[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (59))){
var inst_52115 = (state_52439[(15)]);
var inst_52124 = (state_52439[(23)]);
var inst_52117 = (state_52439[(14)]);
var inst_52116 = (state_52439[(17)]);
var inst_52161 = (state_52439[(11)]);
var inst_52260 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_52161);
var inst_52261 = cljs.core.keys(inst_52260);
var inst_52262 = cljs.core.set(inst_52261);
var inst_52263 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_52116,inst_52262);
var tmp52448 = inst_52115;
var tmp52449 = inst_52117;
var inst_52114 = inst_52124;
var inst_52115__$1 = tmp52448;
var inst_52116__$1 = inst_52263;
var inst_52117__$1 = tmp52449;
var state_52439__$1 = (function (){var statearr_52453 = state_52439;
(statearr_52453[(15)] = inst_52115__$1);

(statearr_52453[(14)] = inst_52117__$1);

(statearr_52453[(16)] = inst_52114);

(statearr_52453[(17)] = inst_52116__$1);

return statearr_52453;
})();
var statearr_52454_54822 = state_52439__$1;
(statearr_52454_54822[(2)] = null);

(statearr_52454_54822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (86))){
var inst_52349 = (state_52439[(33)]);
var inst_52349__$1 = (state_52439[(2)]);
var state_52439__$1 = (function (){var statearr_52455 = state_52439;
(statearr_52455[(33)] = inst_52349__$1);

return statearr_52455;
})();
if(cljs.core.truth_(inst_52349__$1)){
var statearr_52456_54825 = state_52439__$1;
(statearr_52456_54825[(1)] = (87));

} else {
var statearr_52457_54826 = state_52439__$1;
(statearr_52457_54826[(1)] = (88));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (20))){
var inst_52174 = (state_52439[(34)]);
var inst_52179 = inst_52174.cljs$lang$protocol_mask$partition0$;
var inst_52180 = (inst_52179 & (64));
var inst_52181 = inst_52174.cljs$core$ISeq$;
var inst_52182 = (cljs.core.PROTOCOL_SENTINEL === inst_52181);
var inst_52183 = ((inst_52180) || (inst_52182));
var state_52439__$1 = state_52439;
if(cljs.core.truth_(inst_52183)){
var statearr_52458_54827 = state_52439__$1;
(statearr_52458_54827[(1)] = (23));

} else {
var statearr_52459_54828 = state_52439__$1;
(statearr_52459_54828[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (72))){
var inst_52340 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
var statearr_52460_54829 = state_52439__$1;
(statearr_52460_54829[(2)] = inst_52340);

(statearr_52460_54829[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (58))){
var inst_52431 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
var statearr_52461_54832 = state_52439__$1;
(statearr_52461_54832[(2)] = inst_52431);

(statearr_52461_54832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (60))){
var inst_52251 = (state_52439[(29)]);
var inst_52266 = cljs.core.map_QMARK_(inst_52251);
var state_52439__$1 = state_52439;
if(inst_52266){
var statearr_52462_54833 = state_52439__$1;
(statearr_52462_54833[(1)] = (62));

} else {
var statearr_52463_54835 = state_52439__$1;
(statearr_52463_54835[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (27))){
var inst_52174 = (state_52439[(34)]);
var state_52439__$1 = state_52439;
var statearr_52464_54837 = state_52439__$1;
(statearr_52464_54837[(2)] = inst_52174);

(statearr_52464_54837[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (1))){
var inst_52110 = cljs.core.seq(plan);
var inst_52111 = cljs.core.first(inst_52110);
var inst_52112 = cljs.core.next(inst_52110);
var inst_52113 = cljs.core.PersistentHashMap.EMPTY;
var inst_52114 = plan;
var inst_52115 = inst_52113;
var inst_52116 = out;
var inst_52117 = waiting;
var state_52439__$1 = (function (){var statearr_52465 = state_52439;
(statearr_52465[(15)] = inst_52115);

(statearr_52465[(22)] = inst_52111);

(statearr_52465[(24)] = inst_52112);

(statearr_52465[(14)] = inst_52117);

(statearr_52465[(16)] = inst_52114);

(statearr_52465[(17)] = inst_52116);

return statearr_52465;
})();
var statearr_52466_54840 = state_52439__$1;
(statearr_52466_54840[(2)] = null);

(statearr_52466_54840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (69))){
var inst_52297 = (state_52439[(13)]);
var inst_52297__$1 = (state_52439[(2)]);
var state_52439__$1 = (function (){var statearr_52467 = state_52439;
(statearr_52467[(13)] = inst_52297__$1);

return statearr_52467;
})();
if(cljs.core.truth_(inst_52297__$1)){
var statearr_52468_54841 = state_52439__$1;
(statearr_52468_54841[(1)] = (70));

} else {
var statearr_52469_54842 = state_52439__$1;
(statearr_52469_54842[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (101))){
var inst_52417 = (state_52439[(2)]);
var inst_52418 = cljs.core.async.close_BANG_(ch);
var state_52439__$1 = (function (){var statearr_52470 = state_52439;
(statearr_52470[(35)] = inst_52417);

return statearr_52470;
})();
var statearr_52471_54843 = state_52439__$1;
(statearr_52471_54843[(2)] = inst_52418);

(statearr_52471_54843[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (24))){
var state_52439__$1 = state_52439;
var statearr_52472_54844 = state_52439__$1;
(statearr_52472_54844[(2)] = false);

(statearr_52472_54844[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (55))){
var inst_52242 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
var statearr_52473_54845 = state_52439__$1;
(statearr_52473_54845[(2)] = inst_52242);


cljs.core.async.impl.ioc_helpers.process_exception(state_52439__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (85))){
var inst_52425 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
var statearr_52474_54846 = state_52439__$1;
(statearr_52474_54846[(2)] = inst_52425);

(statearr_52474_54846[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (39))){
var inst_52163 = (state_52439[(18)]);
var inst_52157 = (state_52439[(19)]);
var inst_52158 = (state_52439[(20)]);
var inst_52166 = (state_52439[(21)]);
var inst_52131 = (state_52439[(7)]);
var inst_52160 = (state_52439[(8)]);
var inst_52115 = (state_52439[(15)]);
var inst_52111 = (state_52439[(22)]);
var inst_52124 = (state_52439[(23)]);
var inst_52112 = (state_52439[(24)]);
var inst_52117 = (state_52439[(14)]);
var inst_52130 = (state_52439[(25)]);
var inst_52114 = (state_52439[(16)]);
var inst_52123 = (state_52439[(26)]);
var inst_52159 = (state_52439[(27)]);
var inst_52156 = (state_52439[(28)]);
var inst_52116 = (state_52439[(17)]);
var inst_52161 = (state_52439[(11)]);
var inst_52212 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_52166,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","call-resolver-with-cache","com.wsscode.pathom.connect/call-resolver-with-cache",-1377424417));
var inst_52213 = com.wsscode.pathom.trace.trace(inst_52161,inst_52212);
var inst_52214 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52215 = [inst_52131,inst_52163,params];
var inst_52216 = (new cljs.core.PersistentVector(null,3,(5),inst_52214,inst_52215,null));
var inst_52217 = (function (){var input = inst_52159;
var step = inst_52123;
var seq__52108 = inst_52112;
var key_SINGLEQUOTE_ = inst_52130;
var vec__52126 = inst_52123;
var cache_QMARK_ = inst_52157;
var out_left = inst_52116;
var map__52129 = inst_52156;
var failed_resolvers = inst_52115;
var batch_QMARK_ = inst_52158;
var vec__52107 = plan;
var output = inst_52160;
var env__$2 = inst_52161;
var e = inst_52163;
var resolver_sym = inst_52131;
var waiting__$1 = inst_52117;
var trace_data = inst_52166;
var resolver = inst_52156;
var G__52106 = inst_52114;
var first__52109 = inst_52111;
var tail = inst_52124;
var first__52121 = inst_52123;
var vec__52119 = inst_52114;
var seq__52120 = inst_52124;
return ((function (input,step,seq__52108,key_SINGLEQUOTE_,vec__52126,cache_QMARK_,out_left,map__52129,failed_resolvers,batch_QMARK_,vec__52107,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,G__52106,first__52109,tail,first__52121,vec__52119,seq__52120,inst_52163,inst_52157,inst_52158,inst_52166,inst_52131,inst_52160,inst_52115,inst_52111,inst_52124,inst_52112,inst_52117,inst_52130,inst_52114,inst_52123,inst_52159,inst_52156,inst_52116,inst_52161,inst_52212,inst_52213,inst_52214,inst_52215,inst_52216,state_val_52440,c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var c__38971__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto____$1,input,step,seq__52108,key_SINGLEQUOTE_,vec__52126,cache_QMARK_,out_left,map__52129,failed_resolvers,batch_QMARK_,vec__52107,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,G__52106,first__52109,tail,first__52121,vec__52119,seq__52120,inst_52163,inst_52157,inst_52158,inst_52166,inst_52131,inst_52160,inst_52115,inst_52111,inst_52124,inst_52112,inst_52117,inst_52130,inst_52114,inst_52123,inst_52159,inst_52156,inst_52116,inst_52161,inst_52212,inst_52213,inst_52214,inst_52215,inst_52216,state_val_52440,c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto____$1,input,step,seq__52108,key_SINGLEQUOTE_,vec__52126,cache_QMARK_,out_left,map__52129,failed_resolvers,batch_QMARK_,vec__52107,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,G__52106,first__52109,tail,first__52121,vec__52119,seq__52120,inst_52163,inst_52157,inst_52158,inst_52166,inst_52131,inst_52160,inst_52115,inst_52111,inst_52124,inst_52112,inst_52117,inst_52130,inst_52114,inst_52123,inst_52159,inst_52156,inst_52116,inst_52161,inst_52212,inst_52213,inst_52214,inst_52215,inst_52216,state_val_52440,c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (state_52495){
var state_val_52496 = (state_52495[(1)]);
if((state_val_52496 === (7))){
var inst_52486 = (state_52495[(7)]);
var inst_52486__$1 = (state_52495[(2)]);
var state_52495__$1 = (function (){var statearr_52497 = state_52495;
(statearr_52497[(7)] = inst_52486__$1);

return statearr_52497;
})();
if(cljs.core.truth_(inst_52486__$1)){
var statearr_52498_54855 = state_52495__$1;
(statearr_52498_54855[(1)] = (9));

} else {
var statearr_52499_54856 = state_52495__$1;
(statearr_52499_54856[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (1))){
var state_52495__$1 = state_52495;
var statearr_52500_54857 = state_52495__$1;
(statearr_52500_54857[(2)] = null);

(statearr_52500_54857[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (4))){
var inst_52479 = (state_52495[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_52495,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_52479__$1 = com.wsscode.pathom.connect.call_resolver(env__$2,e);
var inst_52480 = com.wsscode.common.async_cljs.chan_QMARK_(inst_52479__$1);
var state_52495__$1 = (function (){var statearr_52501 = state_52495;
(statearr_52501[(8)] = inst_52479__$1);

return statearr_52501;
})();
if(inst_52480){
var statearr_52502_54858 = state_52495__$1;
(statearr_52502_54858[(1)] = (5));

} else {
var statearr_52503_54859 = state_52495__$1;
(statearr_52503_54859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (6))){
var inst_52479 = (state_52495[(8)]);
var state_52495__$1 = state_52495;
var statearr_52504_54860 = state_52495__$1;
(statearr_52504_54860[(2)] = inst_52479);

(statearr_52504_54860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (3))){
var inst_52475 = (state_52495[(2)]);
var state_52495__$1 = state_52495;
var statearr_52505_54861 = state_52495__$1;
(statearr_52505_54861[(2)] = inst_52475);


cljs.core.async.impl.ioc_helpers.process_exception(state_52495__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (2))){
var inst_52493 = (state_52495[(2)]);
var state_52495__$1 = state_52495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52495__$1,inst_52493);
} else {
if((state_val_52496 === (11))){
var inst_52491 = (state_52495[(2)]);
var state_52495__$1 = state_52495;
var statearr_52506_54864 = state_52495__$1;
(statearr_52506_54864[(2)] = inst_52491);


cljs.core.async.impl.ioc_helpers.process_exception(state_52495__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (9))){
var inst_52486 = (state_52495[(7)]);
var state_52495__$1 = state_52495;
var statearr_52507_54865 = state_52495__$1;
(statearr_52507_54865[(2)] = inst_52486);

(statearr_52507_54865[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (5))){
var inst_52479 = (state_52495[(8)]);
var state_52495__$1 = state_52495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52495__$1,(8),inst_52479);
} else {
if((state_val_52496 === (10))){
var inst_52489 = cljs.core.PersistentHashMap.EMPTY;
var state_52495__$1 = state_52495;
var statearr_52508_54868 = state_52495__$1;
(statearr_52508_54868[(2)] = inst_52489);

(statearr_52508_54868[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52496 === (8))){
var inst_52483 = (state_52495[(2)]);
var state_52495__$1 = state_52495;
var statearr_52509_54869 = state_52495__$1;
(statearr_52509_54869[(2)] = inst_52483);

(statearr_52509_54869[(1)] = (7));


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
});})(c__38971__auto____$1,input,step,seq__52108,key_SINGLEQUOTE_,vec__52126,cache_QMARK_,out_left,map__52129,failed_resolvers,batch_QMARK_,vec__52107,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,G__52106,first__52109,tail,first__52121,vec__52119,seq__52120,inst_52163,inst_52157,inst_52158,inst_52166,inst_52131,inst_52160,inst_52115,inst_52111,inst_52124,inst_52112,inst_52117,inst_52130,inst_52114,inst_52123,inst_52159,inst_52156,inst_52116,inst_52161,inst_52212,inst_52213,inst_52214,inst_52215,inst_52216,state_val_52440,c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
;
return ((function (switch__38924__auto__,c__38971__auto____$1,input,step,seq__52108,key_SINGLEQUOTE_,vec__52126,cache_QMARK_,out_left,map__52129,failed_resolvers,batch_QMARK_,vec__52107,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,G__52106,first__52109,tail,first__52121,vec__52119,seq__52120,inst_52163,inst_52157,inst_52158,inst_52166,inst_52131,inst_52160,inst_52115,inst_52111,inst_52124,inst_52112,inst_52117,inst_52130,inst_52114,inst_52123,inst_52159,inst_52156,inst_52116,inst_52161,inst_52212,inst_52213,inst_52214,inst_52215,inst_52216,state_val_52440,c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto____0 = (function (){
var statearr_52510 = [null,null,null,null,null,null,null,null,null];
(statearr_52510[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto__);

(statearr_52510[(1)] = (1));

return statearr_52510;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto____1 = (function (state_52495){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_52495);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e52511){if((e52511 instanceof Object)){
var ex__38928__auto__ = e52511;
var statearr_52512_54874 = state_52495;
(statearr_52512_54874[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52511;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54875 = state_52495;
state_52495 = G__54875;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto__ = function(state_52495){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto____1.call(this,state_52495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto____$1,input,step,seq__52108,key_SINGLEQUOTE_,vec__52126,cache_QMARK_,out_left,map__52129,failed_resolvers,batch_QMARK_,vec__52107,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,G__52106,first__52109,tail,first__52121,vec__52119,seq__52120,inst_52163,inst_52157,inst_52158,inst_52166,inst_52131,inst_52160,inst_52115,inst_52111,inst_52124,inst_52112,inst_52117,inst_52130,inst_52114,inst_52123,inst_52159,inst_52156,inst_52116,inst_52161,inst_52212,inst_52213,inst_52214,inst_52215,inst_52216,state_val_52440,c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var state__38973__auto__ = (function (){var statearr_52513 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_52513[(6)] = c__38971__auto____$1);

return statearr_52513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto____$1,input,step,seq__52108,key_SINGLEQUOTE_,vec__52126,cache_QMARK_,out_left,map__52129,failed_resolvers,batch_QMARK_,vec__52107,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,G__52106,first__52109,tail,first__52121,vec__52119,seq__52120,inst_52163,inst_52157,inst_52158,inst_52166,inst_52131,inst_52160,inst_52115,inst_52111,inst_52124,inst_52112,inst_52117,inst_52130,inst_52114,inst_52123,inst_52159,inst_52156,inst_52116,inst_52161,inst_52212,inst_52213,inst_52214,inst_52215,inst_52216,state_val_52440,c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
);

return c__38971__auto____$1;
});
;})(input,step,seq__52108,key_SINGLEQUOTE_,vec__52126,cache_QMARK_,out_left,map__52129,failed_resolvers,batch_QMARK_,vec__52107,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,G__52106,first__52109,tail,first__52121,vec__52119,seq__52120,inst_52163,inst_52157,inst_52158,inst_52166,inst_52131,inst_52160,inst_52115,inst_52111,inst_52124,inst_52112,inst_52117,inst_52130,inst_52114,inst_52123,inst_52159,inst_52156,inst_52116,inst_52161,inst_52212,inst_52213,inst_52214,inst_52215,inst_52216,state_val_52440,c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_52218 = com.wsscode.pathom.core.cached_async(inst_52161,inst_52216,inst_52217);
var state_52439__$1 = (function (){var statearr_52514 = state_52439;
(statearr_52514[(36)] = inst_52213);

return statearr_52514;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52439__$1,(42),inst_52218);
} else {
if((state_val_52440 === (88))){
var inst_52131 = (state_52439[(7)]);
var inst_52124 = (state_52439[(23)]);
var inst_52161 = (state_52439[(11)]);
var inst_52251 = (state_52439[(29)]);
var inst_52359 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)];
var inst_52360 = [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-error","com.wsscode.pathom.connect/resolver-error",965584416),key,inst_52131];
var inst_52361 = cljs.core.PersistentHashMap.fromArrays(inst_52359,inst_52360);
var inst_52362 = com.wsscode.pathom.trace.trace(inst_52161,inst_52361);
var inst_52363 = com.wsscode.pathom.core.add_error(inst_52161,inst_52251);
var inst_52364 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_52365 = cljs.core.seq(inst_52124);
var state_52439__$1 = (function (){var statearr_52515 = state_52439;
(statearr_52515[(37)] = inst_52362);

(statearr_52515[(38)] = inst_52363);

(statearr_52515[(39)] = inst_52364);

return statearr_52515;
})();
if(inst_52365){
var statearr_52516_54880 = state_52439__$1;
(statearr_52516_54880[(1)] = (91));

} else {
var statearr_52517_54881 = state_52439__$1;
(statearr_52517_54881[(1)] = (92));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (46))){
var inst_52244 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
var statearr_52518_54882 = state_52439__$1;
(statearr_52518_54882[(2)] = inst_52244);

(statearr_52518_54882[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (4))){
var inst_52131 = (state_52439[(7)]);
var inst_52135 = (state_52439[(32)]);
var inst_52123 = (state_52439[(26)]);
var inst_52130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52123,(0),null);
var inst_52131__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52123,(1),null);
var inst_52132 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52133 = [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),inst_52131__$1];
var inst_52134 = (new cljs.core.PersistentVector(null,2,(5),inst_52132,inst_52133,null));
var inst_52135__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,inst_52134);
var inst_52137 = (inst_52135__$1 == null);
var inst_52138 = cljs.core.not(inst_52137);
var state_52439__$1 = (function (){var statearr_52519 = state_52439;
(statearr_52519[(7)] = inst_52131__$1);

(statearr_52519[(25)] = inst_52130);

(statearr_52519[(32)] = inst_52135__$1);

return statearr_52519;
})();
if(inst_52138){
var statearr_52520_54887 = state_52439__$1;
(statearr_52520_54887[(1)] = (7));

} else {
var statearr_52521_54888 = state_52439__$1;
(statearr_52521_54888[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (77))){
var inst_52130 = (state_52439[(25)]);
var inst_52268 = (state_52439[(10)]);
var inst_52324 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_52268,inst_52130,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_52439__$1 = state_52439;
var statearr_52522_54889 = state_52439__$1;
(statearr_52522_54889[(2)] = inst_52324);

(statearr_52522_54889[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (95))){
var state_52439__$1 = state_52439;
var statearr_52523_54890 = state_52439__$1;
(statearr_52523_54890[(2)] = null);

(statearr_52523_54890[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (54))){
var inst_52240 = cljs.core.PersistentHashMap.EMPTY;
var state_52439__$1 = state_52439;
var statearr_52524_54891 = state_52439__$1;
(statearr_52524_54891[(2)] = inst_52240);

(statearr_52524_54891[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (92))){
var inst_52116 = (state_52439[(17)]);
var inst_52371 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882));
var inst_52372 = cljs.core.zipmap(inst_52116,inst_52371);
var state_52439__$1 = state_52439;
var statearr_52525_54892 = state_52439__$1;
(statearr_52525_54892[(2)] = inst_52372);

(statearr_52525_54892[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (15))){
var inst_52163 = (state_52439[(18)]);
var inst_52131 = (state_52439[(7)]);
var inst_52117 = (state_52439[(14)]);
var inst_52130 = (state_52439[(25)]);
var inst_52159 = (state_52439[(27)]);
var inst_52156 = (state_52439[(28)]);
var inst_52161 = (state_52439[(11)]);
var inst_52156__$1 = (state_52439[(2)]);
var inst_52157 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_52156__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),true);
var inst_52158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52156__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659));
var inst_52159__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52156__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121));
var inst_52160 = com.wsscode.pathom.connect.resolver__GT_output(env__$1,inst_52131);
var inst_52161__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-data","com.wsscode.pathom.connect/resolver-data",-1641186073),inst_52156__$1);
var inst_52162 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(inst_52161__$1);
var inst_52163__$1 = cljs.core.select_keys(inst_52162,inst_52159__$1);
var inst_52164 = [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input-data","com.wsscode.pathom.connect/input-data",-851204507)];
var inst_52165 = [key,inst_52131,inst_52163__$1];
var inst_52166 = cljs.core.PersistentHashMap.fromArrays(inst_52164,inst_52165);
var inst_52167 = cljs.core.contains_QMARK_(inst_52117,inst_52130);
var state_52439__$1 = (function (){var statearr_52526 = state_52439;
(statearr_52526[(18)] = inst_52163__$1);

(statearr_52526[(19)] = inst_52157);

(statearr_52526[(20)] = inst_52158);

(statearr_52526[(21)] = inst_52166);

(statearr_52526[(8)] = inst_52160);

(statearr_52526[(27)] = inst_52159__$1);

(statearr_52526[(28)] = inst_52156__$1);

(statearr_52526[(11)] = inst_52161__$1);

return statearr_52526;
})();
if(inst_52167){
var statearr_52527_54897 = state_52439__$1;
(statearr_52527_54897[(1)] = (16));

} else {
var statearr_52528_54898 = state_52439__$1;
(statearr_52528_54898[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (48))){
var inst_52163 = (state_52439[(18)]);
var inst_52161 = (state_52439[(11)]);
var inst_52229 = (state_52439[(40)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_52439,(47),new cljs.core.Keyword(null,"default","default",-1987822328),null,(46));
var inst_52229__$1 = com.wsscode.pathom.connect.call_resolver(inst_52161,inst_52163);
var inst_52230 = com.wsscode.common.async_cljs.chan_QMARK_(inst_52229__$1);
var state_52439__$1 = (function (){var statearr_52529 = state_52439;
(statearr_52529[(40)] = inst_52229__$1);

return statearr_52529;
})();
if(inst_52230){
var statearr_52530_54903 = state_52439__$1;
(statearr_52530_54903[(1)] = (49));

} else {
var statearr_52531_54904 = state_52439__$1;
(statearr_52531_54904[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (50))){
var inst_52229 = (state_52439[(40)]);
var state_52439__$1 = state_52439;
var statearr_52532_54905 = state_52439__$1;
(statearr_52532_54905[(2)] = inst_52229);

(statearr_52532_54905[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (75))){
var inst_52130 = (state_52439[(25)]);
var inst_52268 = (state_52439[(10)]);
var inst_52318 = (state_52439[(2)]);
var inst_52319 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_52321 = cljs.core.contains_QMARK_(inst_52268,inst_52130);
var inst_52322 = (!(inst_52321));
var state_52439__$1 = (function (){var statearr_52533 = state_52439;
(statearr_52533[(41)] = inst_52319);

(statearr_52533[(42)] = inst_52318);

return statearr_52533;
})();
if(inst_52322){
var statearr_52534_54907 = state_52439__$1;
(statearr_52534_54907[(1)] = (77));

} else {
var statearr_52535_54908 = state_52439__$1;
(statearr_52535_54908[(1)] = (78));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (99))){
var inst_52131 = (state_52439[(7)]);
var inst_52161 = (state_52439[(11)]);
var inst_52251 = (state_52439[(29)]);
var inst_52401 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_52402 = [inst_52251];
var inst_52403 = cljs.core.PersistentHashMap.fromArrays(inst_52401,inst_52402);
var inst_52404 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_52403);
var inst_52405 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_52406 = [new cljs.core.Keyword("com.wsscode.pathom.connect","invalid-resolve-response","com.wsscode.pathom.connect/invalid-resolve-response",-1476859070),key,inst_52131,inst_52251];
var inst_52407 = cljs.core.PersistentHashMap.fromArrays(inst_52405,inst_52406);
var inst_52408 = com.wsscode.pathom.trace.trace(inst_52161,inst_52407);
var inst_52409 = com.wsscode.pathom.core.add_error(inst_52161,inst_52404);
var inst_52410 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_52411 = [key];
var inst_52412 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_52413 = cljs.core.PersistentHashMap.fromArrays(inst_52411,inst_52412);
var inst_52414 = [out,inst_52404,inst_52413];
var inst_52415 = cljs.core.PersistentHashMap.fromArrays(inst_52410,inst_52414);
var state_52439__$1 = (function (){var statearr_52536 = state_52439;
(statearr_52536[(43)] = inst_52408);

(statearr_52536[(44)] = inst_52409);

return statearr_52536;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52439__$1,(101),ch,inst_52415);
} else {
if((state_val_52440 === (21))){
var state_52439__$1 = state_52439;
var statearr_52537_54912 = state_52439__$1;
(statearr_52537_54912[(2)] = false);

(statearr_52537_54912[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (31))){
var inst_52200 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
var statearr_52538_54913 = state_52439__$1;
(statearr_52538_54913[(2)] = inst_52200);

(statearr_52538_54913[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (32))){
var inst_52158 = (state_52439[(20)]);
var state_52439__$1 = state_52439;
if(cljs.core.truth_(inst_52158)){
var statearr_52539_54916 = state_52439__$1;
(statearr_52539_54916[(1)] = (35));

} else {
var statearr_52540_54917 = state_52439__$1;
(statearr_52540_54917[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (40))){
var inst_52222 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
var statearr_52543_54919 = state_52439__$1;
(statearr_52543_54919[(2)] = inst_52222);

(statearr_52543_54919[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (91))){
var inst_52367 = [key];
var inst_52368 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_52369 = cljs.core.PersistentHashMap.fromArrays(inst_52367,inst_52368);
var state_52439__$1 = state_52439;
var statearr_52544_54922 = state_52439__$1;
(statearr_52544_54922[(2)] = inst_52369);

(statearr_52544_54922[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (56))){
var inst_52115 = (state_52439[(15)]);
var inst_52117 = (state_52439[(14)]);
var inst_52130 = (state_52439[(25)]);
var inst_52116 = (state_52439[(17)]);
var inst_52255 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(inst_52117,inst_52130);
var tmp52541 = inst_52115;
var tmp52542 = inst_52116;
var inst_52114 = plan;
var inst_52115__$1 = tmp52541;
var inst_52116__$1 = tmp52542;
var inst_52117__$1 = inst_52255;
var state_52439__$1 = (function (){var statearr_52545 = state_52439;
(statearr_52545[(15)] = inst_52115__$1);

(statearr_52545[(14)] = inst_52117__$1);

(statearr_52545[(16)] = inst_52114);

(statearr_52545[(17)] = inst_52116__$1);

return statearr_52545;
})();
var statearr_52546_54924 = state_52439__$1;
(statearr_52546_54924[(2)] = null);

(statearr_52546_54924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (33))){
var state_52439__$1 = state_52439;
var statearr_52547_54925 = state_52439__$1;
(statearr_52547_54925[(1)] = (43));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (13))){
var inst_52135 = (state_52439[(32)]);
var inst_52153 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52135);
var state_52439__$1 = state_52439;
var statearr_52549_54927 = state_52439__$1;
(statearr_52549_54927[(2)] = inst_52153);

(statearr_52549_54927[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (22))){
var inst_52190 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
if(cljs.core.truth_(inst_52190)){
var statearr_52550_54929 = state_52439__$1;
(statearr_52550_54929[(1)] = (26));

} else {
var statearr_52551_54930 = state_52439__$1;
(statearr_52551_54930[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (90))){
var inst_52378 = (state_52439[(2)]);
var inst_52379 = cljs.core.async.close_BANG_(ch);
var state_52439__$1 = (function (){var statearr_52552 = state_52439;
(statearr_52552[(45)] = inst_52378);

return statearr_52552;
})();
var statearr_52553_54931 = state_52439__$1;
(statearr_52553_54931[(2)] = inst_52379);

(statearr_52553_54931[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (36))){
var inst_52158 = (state_52439[(20)]);
var state_52439__$1 = state_52439;
var statearr_52554_54932 = state_52439__$1;
(statearr_52554_54932[(2)] = inst_52158);

(statearr_52554_54932[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (41))){
var inst_52210 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
var statearr_52555_54933 = state_52439__$1;
(statearr_52555_54933[(2)] = inst_52210);

(statearr_52555_54933[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (89))){
var inst_52381 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
var statearr_52556_54934 = state_52439__$1;
(statearr_52556_54934[(2)] = inst_52381);

(statearr_52556_54934[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (100))){
var inst_52420 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
var statearr_52557_54935 = state_52439__$1;
(statearr_52557_54935[(2)] = inst_52420);

(statearr_52557_54935[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (43))){
var state_52439__$1 = state_52439;
var statearr_52558_54938 = state_52439__$1;
(statearr_52558_54938[(2)] = null);

(statearr_52558_54938[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (61))){
var inst_52429 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
var statearr_52559_54939 = state_52439__$1;
(statearr_52559_54939[(2)] = inst_52429);

(statearr_52559_54939[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (29))){
var inst_52196 = (state_52439[(46)]);
var state_52439__$1 = state_52439;
var statearr_52560_54940 = state_52439__$1;
(statearr_52560_54940[(2)] = inst_52196);

(statearr_52560_54940[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (44))){
var state_52439__$1 = state_52439;
var statearr_52561_54941 = state_52439__$1;
(statearr_52561_54941[(2)] = null);

(statearr_52561_54941[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (93))){
var inst_52364 = (state_52439[(39)]);
var inst_52251 = (state_52439[(29)]);
var inst_52374 = (state_52439[(2)]);
var inst_52375 = [out,inst_52251,inst_52374];
var inst_52376 = cljs.core.PersistentHashMap.fromArrays(inst_52364,inst_52375);
var state_52439__$1 = state_52439;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52439__$1,(90),ch,inst_52376);
} else {
if((state_val_52440 === (6))){
var inst_52435 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
var statearr_52562_54944 = state_52439__$1;
(statearr_52562_54944[(2)] = inst_52435);

(statearr_52562_54944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (28))){
var inst_52196 = (state_52439[(46)]);
var inst_52195 = (state_52439[(2)]);
var inst_52196__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52195,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973));
var state_52439__$1 = (function (){var statearr_52563 = state_52439;
(statearr_52563[(46)] = inst_52196__$1);

return statearr_52563;
})();
if(cljs.core.truth_(inst_52196__$1)){
var statearr_52564_54947 = state_52439__$1;
(statearr_52564_54947[(1)] = (29));

} else {
var statearr_52565_54948 = state_52439__$1;
(statearr_52565_54948[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (64))){
var inst_52427 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
var statearr_52566_54949 = state_52439__$1;
(statearr_52566_54949[(2)] = inst_52427);

(statearr_52566_54949[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (51))){
var inst_52237 = (state_52439[(47)]);
var inst_52237__$1 = (state_52439[(2)]);
var state_52439__$1 = (function (){var statearr_52567 = state_52439;
(statearr_52567[(47)] = inst_52237__$1);

return statearr_52567;
})();
if(cljs.core.truth_(inst_52237__$1)){
var statearr_52568_54958 = state_52439__$1;
(statearr_52568_54958[(1)] = (53));

} else {
var statearr_52569_54959 = state_52439__$1;
(statearr_52569_54959[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (25))){
var inst_52187 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
var statearr_52570_54960 = state_52439__$1;
(statearr_52570_54960[(2)] = inst_52187);

(statearr_52570_54960[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (34))){
var inst_52249 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
var statearr_52571_54961 = state_52439__$1;
(statearr_52571_54961[(2)] = inst_52249);

(statearr_52571_54961[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (17))){
var inst_52157 = (state_52439[(19)]);
var state_52439__$1 = state_52439;
if(cljs.core.truth_(inst_52157)){
var statearr_52572_54962 = state_52439__$1;
(statearr_52572_54962[(1)] = (32));

} else {
var statearr_52573_54963 = state_52439__$1;
(statearr_52573_54963[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (3))){
var inst_52437 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52439__$1,inst_52437);
} else {
if((state_val_52440 === (12))){
var inst_52148 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
var statearr_52574_54965 = state_52439__$1;
(statearr_52574_54965[(2)] = inst_52148);

(statearr_52574_54965[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (2))){
var inst_52114 = (state_52439[(16)]);
var inst_52123 = (state_52439[(26)]);
var inst_52122 = cljs.core.seq(inst_52114);
var inst_52123__$1 = cljs.core.first(inst_52122);
var inst_52124 = cljs.core.next(inst_52122);
var state_52439__$1 = (function (){var statearr_52575 = state_52439;
(statearr_52575[(23)] = inst_52124);

(statearr_52575[(26)] = inst_52123__$1);

return statearr_52575;
})();
if(cljs.core.truth_(inst_52123__$1)){
var statearr_52576_54967 = state_52439__$1;
(statearr_52576_54967[(1)] = (4));

} else {
var statearr_52577_54968 = state_52439__$1;
(statearr_52577_54968[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (66))){
var inst_52130 = (state_52439[(25)]);
var inst_52268 = (state_52439[(10)]);
var inst_52252 = (state_52439[(30)]);
var inst_52291 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_52292 = [inst_52268,inst_52130];
var inst_52293 = cljs.core.PersistentHashMap.fromArrays(inst_52291,inst_52292);
var inst_52294 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_52293);
var inst_52295 = (inst_52252.cljs$core$IFn$_invoke$arity$2 ? inst_52252.cljs$core$IFn$_invoke$arity$2(inst_52268,inst_52294) : inst_52252.call(null,inst_52268,inst_52294));
var state_52439__$1 = state_52439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52439__$1,(69),inst_52295);
} else {
if((state_val_52440 === (23))){
var state_52439__$1 = state_52439;
var statearr_52578_54972 = state_52439__$1;
(statearr_52578_54972[(2)] = true);

(statearr_52578_54972[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (47))){
var inst_52225 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
var statearr_52579_54973 = state_52439__$1;
(statearr_52579_54973[(2)] = inst_52225);


cljs.core.async.impl.ioc_helpers.process_exception(state_52439__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (35))){
var state_52439__$1 = state_52439;
var statearr_52580_54974 = state_52439__$1;
(statearr_52580_54974[(2)] = processing_sequence);

(statearr_52580_54974[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (82))){
var inst_52310 = (state_52439[(48)]);
var inst_52319 = (state_52439[(41)]);
var inst_52333 = (state_52439[(2)]);
var inst_52334 = [out,inst_52310,inst_52333];
var inst_52335 = cljs.core.PersistentHashMap.fromArrays(inst_52319,inst_52334);
var state_52439__$1 = state_52439;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52439__$1,(76),ch,inst_52335);
} else {
if((state_val_52440 === (76))){
var inst_52337 = (state_52439[(2)]);
var inst_52338 = cljs.core.async.close_BANG_(ch);
var state_52439__$1 = (function (){var statearr_52581 = state_52439;
(statearr_52581[(49)] = inst_52337);

return statearr_52581;
})();
var statearr_52582_54977 = state_52439__$1;
(statearr_52582_54977[(2)] = inst_52338);

(statearr_52582_54977[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (97))){
var inst_52391 = (state_52439[(50)]);
var inst_52391__$1 = (state_52439[(2)]);
var state_52439__$1 = (function (){var statearr_52583 = state_52439;
(statearr_52583[(50)] = inst_52391__$1);

return statearr_52583;
})();
if(cljs.core.truth_(inst_52391__$1)){
var statearr_52584_54978 = state_52439__$1;
(statearr_52584_54978[(1)] = (98));

} else {
var statearr_52585_54979 = state_52439__$1;
(statearr_52585_54979[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (19))){
var inst_52174 = (state_52439[(34)]);
var inst_52174__$1 = (state_52439[(2)]);
var inst_52176 = (inst_52174__$1 == null);
var inst_52177 = cljs.core.not(inst_52176);
var state_52439__$1 = (function (){var statearr_52588 = state_52439;
(statearr_52588[(34)] = inst_52174__$1);

return statearr_52588;
})();
if(inst_52177){
var statearr_52589_54980 = state_52439__$1;
(statearr_52589_54980[(1)] = (20));

} else {
var statearr_52590_54981 = state_52439__$1;
(statearr_52590_54981[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (57))){
var inst_52251 = (state_52439[(29)]);
var inst_52258 = (new cljs.core.Keyword("com.wsscode.pathom.connect","watch-ready","com.wsscode.pathom.connect/watch-ready",943560359) === inst_52251);
var state_52439__$1 = state_52439;
if(cljs.core.truth_(inst_52258)){
var statearr_52591_54982 = state_52439__$1;
(statearr_52591_54982[(1)] = (59));

} else {
var statearr_52592_54983 = state_52439__$1;
(statearr_52592_54983[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (68))){
var inst_52278 = (state_52439[(9)]);
var inst_52115 = (state_52439[(15)]);
var inst_52124 = (state_52439[(23)]);
var inst_52117 = (state_52439[(14)]);
var inst_52116 = (state_52439[(17)]);
var inst_52287 = (state_52439[(2)]);
var inst_52288 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_52116,inst_52278);
var tmp52586 = inst_52115;
var tmp52587 = inst_52117;
var inst_52114 = inst_52124;
var inst_52115__$1 = tmp52586;
var inst_52116__$1 = inst_52288;
var inst_52117__$1 = tmp52587;
var state_52439__$1 = (function (){var statearr_52593 = state_52439;
(statearr_52593[(15)] = inst_52115__$1);

(statearr_52593[(51)] = inst_52287);

(statearr_52593[(14)] = inst_52117__$1);

(statearr_52593[(16)] = inst_52114);

(statearr_52593[(17)] = inst_52116__$1);

return statearr_52593;
})();
var statearr_52594_54986 = state_52439__$1;
(statearr_52594_54986[(2)] = null);

(statearr_52594_54986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (11))){
var state_52439__$1 = state_52439;
var statearr_52595_54987 = state_52439__$1;
(statearr_52595_54987[(2)] = false);

(statearr_52595_54987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (9))){
var inst_52151 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
if(cljs.core.truth_(inst_52151)){
var statearr_52596_54989 = state_52439__$1;
(statearr_52596_54989[(1)] = (13));

} else {
var statearr_52597_54990 = state_52439__$1;
(statearr_52597_54990[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (5))){
var inst_52433 = cljs.core.async.close_BANG_(ch);
var state_52439__$1 = state_52439;
var statearr_52598_54992 = state_52439__$1;
(statearr_52598_54992[(2)] = inst_52433);

(statearr_52598_54992[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (83))){
var inst_52251 = (state_52439[(29)]);
var inst_52252 = (state_52439[(30)]);
var inst_52346 = cljs.core.PersistentHashMap.EMPTY;
var inst_52347 = (inst_52252.cljs$core$IFn$_invoke$arity$2 ? inst_52252.cljs$core$IFn$_invoke$arity$2(inst_52346,inst_52251) : inst_52252.call(null,inst_52346,inst_52251));
var state_52439__$1 = state_52439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52439__$1,(86),inst_52347);
} else {
if((state_val_52440 === (14))){
var inst_52135 = (state_52439[(32)]);
var state_52439__$1 = state_52439;
var statearr_52599_54995 = state_52439__$1;
(statearr_52599_54995[(2)] = inst_52135);

(statearr_52599_54995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (45))){
var inst_52247 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
var statearr_52600_54997 = state_52439__$1;
(statearr_52600_54997[(2)] = inst_52247);

(statearr_52600_54997[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (53))){
var inst_52237 = (state_52439[(47)]);
var state_52439__$1 = state_52439;
var statearr_52601_55002 = state_52439__$1;
(statearr_52601_55002[(2)] = inst_52237);

(statearr_52601_55002[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (78))){
var inst_52268 = (state_52439[(10)]);
var state_52439__$1 = state_52439;
var statearr_52602_55006 = state_52439__$1;
(statearr_52602_55006[(2)] = inst_52268);

(statearr_52602_55006[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (26))){
var inst_52174 = (state_52439[(34)]);
var inst_52192 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52174);
var state_52439__$1 = state_52439;
var statearr_52603_55007 = state_52439__$1;
(statearr_52603_55007[(2)] = inst_52192);

(statearr_52603_55007[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (16))){
var inst_52166 = (state_52439[(21)]);
var inst_52130 = (state_52439[(25)]);
var inst_52161 = (state_52439[(11)]);
var inst_52169 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(inst_52166,new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.connect","waiting-resolver","com.wsscode.pathom.connect/waiting-resolver",-321792495),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","waiting-key","com.wsscode.pathom.connect/waiting-key",261572653),inst_52130], 0));
var inst_52170 = com.wsscode.pathom.trace.trace(inst_52161,inst_52169);
var inst_52172 = com.wsscode.pathom.parser.watch_pending_key(inst_52161,inst_52130);
var state_52439__$1 = (function (){var statearr_52604 = state_52439;
(statearr_52604[(52)] = inst_52170);

return statearr_52604;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52439__$1,(19),inst_52172);
} else {
if((state_val_52440 === (81))){
var inst_52327 = (state_52439[(53)]);
var state_52439__$1 = state_52439;
var statearr_52605_55010 = state_52439__$1;
(statearr_52605_55010[(2)] = inst_52327);

(statearr_52605_55010[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (79))){
var inst_52124 = (state_52439[(23)]);
var inst_52327 = (state_52439[(2)]);
var inst_52328 = cljs.core.seq(inst_52124);
var state_52439__$1 = (function (){var statearr_52607 = state_52439;
(statearr_52607[(53)] = inst_52327);

return statearr_52607;
})();
if(inst_52328){
var statearr_52608_55012 = state_52439__$1;
(statearr_52608_55012[(1)] = (80));

} else {
var statearr_52609_55013 = state_52439__$1;
(statearr_52609_55013[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (38))){
var inst_52161 = (state_52439[(11)]);
var inst_52208 = com.wsscode.pathom.connect.parallel_batch(inst_52161);
var state_52439__$1 = state_52439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52439__$1,(41),inst_52208);
} else {
if((state_val_52440 === (98))){
var inst_52391 = (state_52439[(50)]);
var inst_52117 = (state_52439[(14)]);
var inst_52396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52391,(0),null);
var inst_52397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52391,(1),null);
var inst_52398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52391,(2),null);
var tmp52606 = inst_52117;
var inst_52114 = inst_52396;
var inst_52115 = inst_52397;
var inst_52116 = inst_52398;
var inst_52117__$1 = tmp52606;
var state_52439__$1 = (function (){var statearr_52611 = state_52439;
(statearr_52611[(15)] = inst_52115);

(statearr_52611[(14)] = inst_52117__$1);

(statearr_52611[(16)] = inst_52114);

(statearr_52611[(17)] = inst_52116);

return statearr_52611;
})();
var statearr_52612_55016 = state_52439__$1;
(statearr_52612_55016[(2)] = null);

(statearr_52612_55016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (87))){
var inst_52349 = (state_52439[(33)]);
var inst_52117 = (state_52439[(14)]);
var inst_52354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52349,(0),null);
var inst_52355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52349,(1),null);
var inst_52356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52349,(2),null);
var tmp52610 = inst_52117;
var inst_52114 = inst_52354;
var inst_52115 = inst_52355;
var inst_52116 = inst_52356;
var inst_52117__$1 = tmp52610;
var state_52439__$1 = (function (){var statearr_52613 = state_52439;
(statearr_52613[(15)] = inst_52115);

(statearr_52613[(14)] = inst_52117__$1);

(statearr_52613[(16)] = inst_52114);

(statearr_52613[(17)] = inst_52116);

return statearr_52613;
})();
var statearr_52614_55018 = state_52439__$1;
(statearr_52614_55018[(2)] = null);

(statearr_52614_55018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (30))){
var state_52439__$1 = state_52439;
var statearr_52615_55019 = state_52439__$1;
(statearr_52615_55019[(2)] = new cljs.core.Keyword("com.wsscode.pathom.connect","watch-ready","com.wsscode.pathom.connect/watch-ready",943560359));

(statearr_52615_55019[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (73))){
var inst_52310 = (state_52439[(48)]);
var inst_52161 = (state_52439[(11)]);
var inst_52315 = com.wsscode.pathom.core.add_error(inst_52161,inst_52310);
var state_52439__$1 = state_52439;
var statearr_52616_55021 = state_52439__$1;
(statearr_52616_55021[(2)] = inst_52315);

(statearr_52616_55021[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (96))){
var inst_52423 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
var statearr_52617_55022 = state_52439__$1;
(statearr_52617_55022[(2)] = inst_52423);

(statearr_52617_55022[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (10))){
var state_52439__$1 = state_52439;
var statearr_52618_55023 = state_52439__$1;
(statearr_52618_55023[(2)] = true);

(statearr_52618_55023[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (18))){
var inst_52163 = (state_52439[(18)]);
var inst_52157 = (state_52439[(19)]);
var inst_52158 = (state_52439[(20)]);
var inst_52166 = (state_52439[(21)]);
var inst_52131 = (state_52439[(7)]);
var inst_52160 = (state_52439[(8)]);
var inst_52115 = (state_52439[(15)]);
var inst_52111 = (state_52439[(22)]);
var inst_52124 = (state_52439[(23)]);
var inst_52112 = (state_52439[(24)]);
var inst_52117 = (state_52439[(14)]);
var inst_52130 = (state_52439[(25)]);
var inst_52114 = (state_52439[(16)]);
var inst_52123 = (state_52439[(26)]);
var inst_52159 = (state_52439[(27)]);
var inst_52156 = (state_52439[(28)]);
var inst_52116 = (state_52439[(17)]);
var inst_52161 = (state_52439[(11)]);
var inst_52251 = (state_52439[(29)]);
var inst_52251__$1 = (state_52439[(2)]);
var inst_52252 = (function (){var input = inst_52159;
var step = inst_52123;
var seq__52108 = inst_52112;
var key_SINGLEQUOTE_ = inst_52130;
var vec__52126 = inst_52123;
var response = inst_52251__$1;
var cache_QMARK_ = inst_52157;
var out_left = inst_52116;
var map__52129 = inst_52156;
var failed_resolvers = inst_52115;
var batch_QMARK_ = inst_52158;
var vec__52107 = plan;
var output = inst_52160;
var env__$2 = inst_52161;
var e = inst_52163;
var resolver_sym = inst_52131;
var waiting__$1 = inst_52117;
var trace_data = inst_52166;
var resolver = inst_52156;
var G__52106 = inst_52114;
var first__52109 = inst_52111;
var tail = inst_52124;
var first__52121 = inst_52123;
var vec__52119 = inst_52114;
var seq__52120 = inst_52124;
return ((function (input,step,seq__52108,key_SINGLEQUOTE_,vec__52126,response,cache_QMARK_,out_left,map__52129,failed_resolvers,batch_QMARK_,vec__52107,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,G__52106,first__52109,tail,first__52121,vec__52119,seq__52120,inst_52163,inst_52157,inst_52158,inst_52166,inst_52131,inst_52160,inst_52115,inst_52111,inst_52124,inst_52112,inst_52117,inst_52130,inst_52114,inst_52123,inst_52159,inst_52156,inst_52116,inst_52161,inst_52251,inst_52251__$1,state_val_52440,c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (value,error){
var c__38971__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto____$1,input,step,seq__52108,key_SINGLEQUOTE_,vec__52126,response,cache_QMARK_,out_left,map__52129,failed_resolvers,batch_QMARK_,vec__52107,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,G__52106,first__52109,tail,first__52121,vec__52119,seq__52120,inst_52163,inst_52157,inst_52158,inst_52166,inst_52131,inst_52160,inst_52115,inst_52111,inst_52124,inst_52112,inst_52117,inst_52130,inst_52114,inst_52123,inst_52159,inst_52156,inst_52116,inst_52161,inst_52251,inst_52251__$1,state_val_52440,c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto____$1,input,step,seq__52108,key_SINGLEQUOTE_,vec__52126,response,cache_QMARK_,out_left,map__52129,failed_resolvers,batch_QMARK_,vec__52107,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,G__52106,first__52109,tail,first__52121,vec__52119,seq__52120,inst_52163,inst_52157,inst_52158,inst_52166,inst_52131,inst_52160,inst_52115,inst_52111,inst_52124,inst_52112,inst_52117,inst_52130,inst_52114,inst_52123,inst_52159,inst_52156,inst_52116,inst_52161,inst_52251,inst_52251__$1,state_val_52440,c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (state_52641){
var state_val_52642 = (state_52641[(1)]);
if((state_val_52642 === (1))){
var inst_52622 = (state_52641[(7)]);
var inst_52619 = (state_52641[(8)]);
var inst_52619__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failed_resolvers,resolver_sym,error);
var inst_52620 = (function (){var failed_resolvers__$1 = inst_52619__$1;
return ((function (failed_resolvers__$1,inst_52622,inst_52619,inst_52619__$1,state_val_52642,c__38971__auto____$1,input,step,seq__52108,key_SINGLEQUOTE_,vec__52126,response,cache_QMARK_,out_left,map__52129,failed_resolvers,batch_QMARK_,vec__52107,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,G__52106,first__52109,tail,first__52121,vec__52119,seq__52120,inst_52163,inst_52157,inst_52158,inst_52166,inst_52131,inst_52160,inst_52115,inst_52111,inst_52124,inst_52112,inst_52117,inst_52130,inst_52114,inst_52123,inst_52159,inst_52156,inst_52116,inst_52161,inst_52251,inst_52251__$1,state_val_52440,c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (p1__52094_SHARP_){
var x__4222__auto__ = ((function (){var or__4131__auto__ = p1__52094_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})() * (2));
var y__4223__auto__ = max_resolver_weight;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});
;})(failed_resolvers__$1,inst_52622,inst_52619,inst_52619__$1,state_val_52642,c__38971__auto____$1,input,step,seq__52108,key_SINGLEQUOTE_,vec__52126,response,cache_QMARK_,out_left,map__52129,failed_resolvers,batch_QMARK_,vec__52107,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,G__52106,first__52109,tail,first__52121,vec__52119,seq__52120,inst_52163,inst_52157,inst_52158,inst_52166,inst_52131,inst_52160,inst_52115,inst_52111,inst_52124,inst_52112,inst_52117,inst_52130,inst_52114,inst_52123,inst_52159,inst_52156,inst_52116,inst_52161,inst_52251,inst_52251__$1,state_val_52440,c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_52621 = com.wsscode.pathom.connect.update_resolver_weight.cljs$core$IFn$_invoke$arity$variadic(env__$2,resolver_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_52620], 0));
var inst_52622__$1 = com.wsscode.pathom.connect.reader_compute_plan(env__$2,inst_52619__$1);
var state_52641__$1 = (function (){var statearr_52643 = state_52641;
(statearr_52643[(7)] = inst_52622__$1);

(statearr_52643[(9)] = inst_52621);

(statearr_52643[(8)] = inst_52619__$1);

return statearr_52643;
})();
if(cljs.core.truth_(inst_52622__$1)){
var statearr_52644_55035 = state_52641__$1;
(statearr_52644_55035[(1)] = (2));

} else {
var statearr_52645_55037 = state_52641__$1;
(statearr_52645_55037[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52642 === (2))){
var inst_52628 = (state_52641[(10)]);
var inst_52622 = (state_52641[(7)]);
var inst_52627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52622,(0),null);
var inst_52628__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52622,(1),null);
var inst_52629 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_52630 = [out,inst_52628__$1,value];
var inst_52631 = cljs.core.PersistentHashMap.fromArrays(inst_52629,inst_52630);
var state_52641__$1 = (function (){var statearr_52646 = state_52641;
(statearr_52646[(10)] = inst_52628__$1);

(statearr_52646[(11)] = inst_52627);

return statearr_52646;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52641__$1,(5),ch,inst_52631);
} else {
if((state_val_52642 === (3))){
var state_52641__$1 = state_52641;
var statearr_52647_55046 = state_52641__$1;
(statearr_52647_55046[(2)] = null);

(statearr_52647_55046[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52642 === (4))){
var inst_52639 = (state_52641[(2)]);
var state_52641__$1 = state_52641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52641__$1,inst_52639);
} else {
if((state_val_52642 === (5))){
var inst_52628 = (state_52641[(10)]);
var inst_52627 = (state_52641[(11)]);
var inst_52619 = (state_52641[(8)]);
var inst_52633 = (state_52641[(2)]);
var inst_52634 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52635 = [inst_52627,inst_52619,inst_52628];
var inst_52636 = (new cljs.core.PersistentVector(null,3,(5),inst_52634,inst_52635,null));
var state_52641__$1 = (function (){var statearr_52648 = state_52641;
(statearr_52648[(12)] = inst_52633);

return statearr_52648;
})();
var statearr_52649_55047 = state_52641__$1;
(statearr_52649_55047[(2)] = inst_52636);

(statearr_52649_55047[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__38971__auto____$1,input,step,seq__52108,key_SINGLEQUOTE_,vec__52126,response,cache_QMARK_,out_left,map__52129,failed_resolvers,batch_QMARK_,vec__52107,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,G__52106,first__52109,tail,first__52121,vec__52119,seq__52120,inst_52163,inst_52157,inst_52158,inst_52166,inst_52131,inst_52160,inst_52115,inst_52111,inst_52124,inst_52112,inst_52117,inst_52130,inst_52114,inst_52123,inst_52159,inst_52156,inst_52116,inst_52161,inst_52251,inst_52251__$1,state_val_52440,c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
;
return ((function (switch__38924__auto__,c__38971__auto____$1,input,step,seq__52108,key_SINGLEQUOTE_,vec__52126,response,cache_QMARK_,out_left,map__52129,failed_resolvers,batch_QMARK_,vec__52107,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,G__52106,first__52109,tail,first__52121,vec__52119,seq__52120,inst_52163,inst_52157,inst_52158,inst_52166,inst_52131,inst_52160,inst_52115,inst_52111,inst_52124,inst_52112,inst_52117,inst_52130,inst_52114,inst_52123,inst_52159,inst_52156,inst_52116,inst_52161,inst_52251,inst_52251__$1,state_val_52440,c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto____0 = (function (){
var statearr_52650 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52650[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto__);

(statearr_52650[(1)] = (1));

return statearr_52650;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto____1 = (function (state_52641){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_52641);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e52651){if((e52651 instanceof Object)){
var ex__38928__auto__ = e52651;
var statearr_52652_55059 = state_52641;
(statearr_52652_55059[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52651;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55060 = state_52641;
state_52641 = G__55060;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto__ = function(state_52641){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto____1.call(this,state_52641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto____$1,input,step,seq__52108,key_SINGLEQUOTE_,vec__52126,response,cache_QMARK_,out_left,map__52129,failed_resolvers,batch_QMARK_,vec__52107,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,G__52106,first__52109,tail,first__52121,vec__52119,seq__52120,inst_52163,inst_52157,inst_52158,inst_52166,inst_52131,inst_52160,inst_52115,inst_52111,inst_52124,inst_52112,inst_52117,inst_52130,inst_52114,inst_52123,inst_52159,inst_52156,inst_52116,inst_52161,inst_52251,inst_52251__$1,state_val_52440,c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var state__38973__auto__ = (function (){var statearr_52653 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_52653[(6)] = c__38971__auto____$1);

return statearr_52653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto____$1,input,step,seq__52108,key_SINGLEQUOTE_,vec__52126,response,cache_QMARK_,out_left,map__52129,failed_resolvers,batch_QMARK_,vec__52107,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,G__52106,first__52109,tail,first__52121,vec__52119,seq__52120,inst_52163,inst_52157,inst_52158,inst_52166,inst_52131,inst_52160,inst_52115,inst_52111,inst_52124,inst_52112,inst_52117,inst_52130,inst_52114,inst_52123,inst_52159,inst_52156,inst_52116,inst_52161,inst_52251,inst_52251__$1,state_val_52440,c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
);

return c__38971__auto____$1;
});
;})(input,step,seq__52108,key_SINGLEQUOTE_,vec__52126,response,cache_QMARK_,out_left,map__52129,failed_resolvers,batch_QMARK_,vec__52107,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,G__52106,first__52109,tail,first__52121,vec__52119,seq__52120,inst_52163,inst_52157,inst_52158,inst_52166,inst_52131,inst_52160,inst_52115,inst_52111,inst_52124,inst_52112,inst_52117,inst_52130,inst_52114,inst_52123,inst_52159,inst_52156,inst_52116,inst_52161,inst_52251,inst_52251__$1,state_val_52440,c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_52253 = (new cljs.core.Keyword("com.wsscode.pathom.parser","watch-pending-timeout","com.wsscode.pathom.parser/watch-pending-timeout",1047721820) === inst_52251__$1);
var state_52439__$1 = (function (){var statearr_52654 = state_52439;
(statearr_52654[(29)] = inst_52251__$1);

(statearr_52654[(30)] = inst_52252);

return statearr_52654;
})();
if(cljs.core.truth_(inst_52253)){
var statearr_52655_55067 = state_52439__$1;
(statearr_52655_55067[(1)] = (56));

} else {
var statearr_52656_55071 = state_52439__$1;
(statearr_52656_55071[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (52))){
var inst_52233 = (state_52439[(2)]);
var inst_52234 = com.wsscode.common.async_cljs.throw_err(inst_52233);
var state_52439__$1 = state_52439;
var statearr_52657_55072 = state_52439__$1;
(statearr_52657_55072[(2)] = inst_52234);

(statearr_52657_55072[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (67))){
var inst_52342 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
var statearr_52658_55076 = state_52439__$1;
(statearr_52658_55076[(2)] = inst_52342);

(statearr_52658_55076[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (71))){
var inst_52310 = (state_52439[(48)]);
var inst_52163 = (state_52439[(18)]);
var inst_52157 = (state_52439[(19)]);
var inst_52158 = (state_52439[(20)]);
var inst_52166 = (state_52439[(21)]);
var inst_52131 = (state_52439[(7)]);
var inst_52160 = (state_52439[(8)]);
var inst_52297 = (state_52439[(13)]);
var inst_52115 = (state_52439[(15)]);
var inst_52111 = (state_52439[(22)]);
var inst_52124 = (state_52439[(23)]);
var inst_52112 = (state_52439[(24)]);
var inst_52117 = (state_52439[(14)]);
var inst_52130 = (state_52439[(25)]);
var inst_52114 = (state_52439[(16)]);
var inst_52268 = (state_52439[(10)]);
var inst_52123 = (state_52439[(26)]);
var inst_52159 = (state_52439[(27)]);
var inst_52156 = (state_52439[(28)]);
var inst_52116 = (state_52439[(17)]);
var inst_52161 = (state_52439[(11)]);
var inst_52252 = (state_52439[(30)]);
var inst_52307 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_52308 = [inst_52268,inst_52130];
var inst_52309 = cljs.core.PersistentHashMap.fromArrays(inst_52307,inst_52308);
var inst_52310__$1 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient resolver output",inst_52309);
var inst_52311 = (function (){var input = inst_52159;
var step = inst_52123;
var seq__52108 = inst_52112;
var key_SINGLEQUOTE_ = inst_52130;
var vec__52126 = inst_52123;
var response = inst_52268;
var cache_QMARK_ = inst_52157;
var out_left = inst_52116;
var map__52129 = inst_52156;
var failed_resolvers = inst_52115;
var temp__5718__auto____$1 = inst_52297;
var err = inst_52310__$1;
var batch_QMARK_ = inst_52158;
var vec__52107 = plan;
var output = inst_52160;
var env__$2 = inst_52161;
var e = inst_52163;
var resolver_sym = inst_52131;
var waiting__$1 = inst_52117;
var trace_data = inst_52166;
var resolver = inst_52156;
var G__52106 = inst_52114;
var replan = inst_52252;
var first__52109 = inst_52111;
var tail = inst_52124;
var first__52121 = inst_52123;
var vec__52119 = inst_52114;
var seq__52120 = inst_52124;
return ((function (input,step,seq__52108,key_SINGLEQUOTE_,vec__52126,response,cache_QMARK_,out_left,map__52129,failed_resolvers,temp__5718__auto____$1,err,batch_QMARK_,vec__52107,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,G__52106,replan,first__52109,tail,first__52121,vec__52119,seq__52120,inst_52310,inst_52163,inst_52157,inst_52158,inst_52166,inst_52131,inst_52160,inst_52297,inst_52115,inst_52111,inst_52124,inst_52112,inst_52117,inst_52130,inst_52114,inst_52268,inst_52123,inst_52159,inst_52156,inst_52116,inst_52161,inst_52252,inst_52307,inst_52308,inst_52309,inst_52310__$1,state_val_52440,c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function (p1__52096_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response,p1__52096_SHARP_], 0));
});
;})(input,step,seq__52108,key_SINGLEQUOTE_,vec__52126,response,cache_QMARK_,out_left,map__52129,failed_resolvers,temp__5718__auto____$1,err,batch_QMARK_,vec__52107,output,env__$2,e,resolver_sym,waiting__$1,trace_data,resolver,G__52106,replan,first__52109,tail,first__52121,vec__52119,seq__52120,inst_52310,inst_52163,inst_52157,inst_52158,inst_52166,inst_52131,inst_52160,inst_52297,inst_52115,inst_52111,inst_52124,inst_52112,inst_52117,inst_52130,inst_52114,inst_52268,inst_52123,inst_52159,inst_52156,inst_52116,inst_52161,inst_52252,inst_52307,inst_52308,inst_52309,inst_52310__$1,state_val_52440,c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var inst_52312 = com.wsscode.pathom.core.swap_entity_BANG_(inst_52161,inst_52311);
var inst_52313 = cljs.core.seq(inst_52124);
var state_52439__$1 = (function (){var statearr_52659 = state_52439;
(statearr_52659[(48)] = inst_52310__$1);

(statearr_52659[(54)] = inst_52312);

return statearr_52659;
})();
if(inst_52313){
var statearr_52660_55088 = state_52439__$1;
(statearr_52660_55088[(1)] = (73));

} else {
var statearr_52661_55089 = state_52439__$1;
(statearr_52661_55089[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (42))){
var inst_52220 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
var statearr_52662_55090 = state_52439__$1;
(statearr_52662_55090[(2)] = inst_52220);

(statearr_52662_55090[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (80))){
var inst_52130 = (state_52439[(25)]);
var inst_52327 = (state_52439[(53)]);
var inst_52330 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_52327,inst_52130,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882));
var state_52439__$1 = state_52439;
var statearr_52663_55093 = state_52439__$1;
(statearr_52663_55093[(2)] = inst_52330);

(statearr_52663_55093[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (37))){
var inst_52206 = (state_52439[(2)]);
var state_52439__$1 = state_52439;
if(cljs.core.truth_(inst_52206)){
var statearr_52664_55098 = state_52439__$1;
(statearr_52664_55098[(1)] = (38));

} else {
var statearr_52665_55099 = state_52439__$1;
(statearr_52665_55099[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (63))){
var inst_52251 = (state_52439[(29)]);
var inst_52344 = com.wsscode.common.async_cljs.error_QMARK_(inst_52251);
var state_52439__$1 = state_52439;
if(inst_52344){
var statearr_52666_55105 = state_52439__$1;
(statearr_52666_55105[(1)] = (83));

} else {
var statearr_52667_55107 = state_52439__$1;
(statearr_52667_55107[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (94))){
var inst_52251 = (state_52439[(29)]);
var inst_52252 = (state_52439[(30)]);
var inst_52384 = cljs.core.PersistentHashMap.EMPTY;
var inst_52385 = [new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_52386 = [inst_52251];
var inst_52387 = cljs.core.PersistentHashMap.fromArrays(inst_52385,inst_52386);
var inst_52388 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid resolve response",inst_52387);
var inst_52389 = (inst_52252.cljs$core$IFn$_invoke$arity$2 ? inst_52252.cljs$core$IFn$_invoke$arity$2(inst_52384,inst_52388) : inst_52252.call(null,inst_52384,inst_52388));
var state_52439__$1 = state_52439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52439__$1,(97),inst_52389);
} else {
if((state_val_52440 === (8))){
var state_52439__$1 = state_52439;
var statearr_52668_55110 = state_52439__$1;
(statearr_52668_55110[(2)] = false);

(statearr_52668_55110[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52440 === (49))){
var inst_52229 = (state_52439[(40)]);
var state_52439__$1 = state_52439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52439__$1,(52),inst_52229);
} else {
if((state_val_52440 === (84))){
var state_52439__$1 = state_52439;
var statearr_52669_55112 = state_52439__$1;
(statearr_52669_55112[(1)] = (94));



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
});})(c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
;
return ((function (switch__38924__auto__,c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting){
return (function() {
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto____0 = (function (){
var statearr_52671 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52671[(0)] = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto__);

(statearr_52671[(1)] = (1));

return statearr_52671;
});
var com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto____1 = (function (state_52439){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_52439);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e52672){if((e52672 instanceof Object)){
var ex__38928__auto__ = e52672;
var statearr_52673_55119 = state_52439;
(statearr_52673_55119[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52672;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55120 = state_52439;
state_52439 = G__55120;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto__ = function(state_52439){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto____1.call(this,state_52439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto____0;
com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto____1;
return com$wsscode$pathom$connect$parallel_reader_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
})();
var state__38973__auto__ = (function (){var statearr_52674 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_52674[(6)] = c__38971__auto___54815);

return statearr_52674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto___54815,ch,key,params,env__$1,vec__52100,plan,out,temp__5718__auto__,map__52098,map__52098__$1,env,indexes,max_resolver_weight,processing_sequence,waiting))
);


return ch;
})()], null);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
com.wsscode.pathom.connect.index_reader = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),(function (p__52675){
var map__52676 = p__52675;
var map__52676__$1 = (((((!((map__52676 == null))))?(((((map__52676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52676):map__52676);
var env = map__52676__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52676__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(indexes,env);
})], null);
com.wsscode.pathom.connect.indexed_ident = (function com$wsscode$pathom$connect$indexed_ident(p__52678){
var map__52679 = p__52678;
var map__52679__$1 = (((((!((map__52679 == null))))?(((((map__52679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52679):map__52679);
var env = map__52679__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52679__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
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
com.wsscode.pathom.connect.resolver = (function com$wsscode$pathom$connect$resolver(sym,p__52681,resolve){
var map__52682 = p__52681;
var map__52682__$1 = (((((!((map__52682 == null))))?(((((map__52682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52682):map__52682);
var options = map__52682__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52682__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322));
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Resolver name must be a symbol","\n","(symbol? sym)"].join('')));
}

var G__52684 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),resolve], null),options], 0));
if(cljs.core.truth_(transform)){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__52684) : transform.call(null,G__52684));
} else {
return G__52684;
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
com.wsscode.pathom.connect.mutation = (function com$wsscode$pathom$connect$mutation(sym,p__52685,mutate){
var map__52686 = p__52685;
var map__52686__$1 = (((((!((map__52686 == null))))?(((((map__52686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52686):map__52686);
var options = map__52686__$1;
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52686__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","transform","com.wsscode.pathom.connect/transform",-953450322));
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","Mutation name must be a symbol","\n","(symbol? sym)"].join('')));
}

var G__52688 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),sym,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),mutate], null),options], 0));
if(cljs.core.truth_(transform)){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__52688) : transform.call(null,G__52688));
} else {
return G__52688;
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
var G__52690 = arguments.length;
switch (G__52690) {
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
var res__44797__auto__ = (function (){var G__52691 = env;
var G__52692 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null);
return (multi_fn.cljs$core$IFn$_invoke$arity$2 ? multi_fn.cljs$core$IFn$_invoke$arity$2(G__52691,G__52692) : multi_fn.call(null,G__52691,G__52692));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44797__auto__)){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,res__44797__auto__){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,res__44797__auto__){
return (function (state_52704){
var state_val_52705 = (state_52704[(1)]);
if((state_val_52705 === (1))){
var state_52704__$1 = state_52704;
var statearr_52706_55138 = state_52704__$1;
(statearr_52706_55138[(2)] = null);

(statearr_52706_55138[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52705 === (2))){
var inst_52702 = (state_52704[(2)]);
var state_52704__$1 = state_52704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52704__$1,inst_52702);
} else {
if((state_val_52705 === (3))){
var inst_52693 = (state_52704[(2)]);
var state_52704__$1 = state_52704;
var statearr_52707_55139 = state_52704__$1;
(statearr_52707_55139[(2)] = inst_52693);


cljs.core.async.impl.ioc_helpers.process_exception(state_52704__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52705 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_52704,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_52704__$1 = state_52704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52704__$1,(5),res__44797__auto__);
} else {
if((state_val_52705 === (5))){
var inst_52698 = (state_52704[(2)]);
var inst_52699 = com.wsscode.common.async_cljs.throw_err(inst_52698);
var inst_52700 = cljs.core.first(inst_52699);
var state_52704__$1 = state_52704;
var statearr_52708_55142 = state_52704__$1;
(statearr_52708_55142[(2)] = inst_52700);


cljs.core.async.impl.ioc_helpers.process_exception(state_52704__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__38971__auto__,res__44797__auto__))
;
return ((function (switch__38924__auto__,c__38971__auto__,res__44797__auto__){
return (function() {
var com$wsscode$pathom$connect$state_machine__38925__auto__ = null;
var com$wsscode$pathom$connect$state_machine__38925__auto____0 = (function (){
var statearr_52709 = [null,null,null,null,null,null,null];
(statearr_52709[(0)] = com$wsscode$pathom$connect$state_machine__38925__auto__);

(statearr_52709[(1)] = (1));

return statearr_52709;
});
var com$wsscode$pathom$connect$state_machine__38925__auto____1 = (function (state_52704){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_52704);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e52710){if((e52710 instanceof Object)){
var ex__38928__auto__ = e52710;
var statearr_52711_55145 = state_52704;
(statearr_52711_55145[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52710;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55146 = state_52704;
state_52704 = G__55146;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$connect$state_machine__38925__auto__ = function(state_52704){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$state_machine__38925__auto____1.call(this,state_52704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$state_machine__38925__auto____0;
com$wsscode$pathom$connect$state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$state_machine__38925__auto____1;
return com$wsscode$pathom$connect$state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,res__44797__auto__))
})();
var state__38973__auto__ = (function (){var statearr_52712 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_52712[(6)] = c__38971__auto__);

return statearr_52712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,res__44797__auto__))
);

return c__38971__auto__;
} else {
var res = res__44797__auto__;
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
return (function (p__52713){
var map__52714 = p__52713;
var map__52714__$1 = (((((!((map__52714 == null))))?(((((map__52714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52714):map__52714);
var resolver = map__52714__$1;
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52714__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(resolver,new cljs.core.Keyword("com.wsscode.pathom.connect","batch?","com.wsscode.pathom.connect/batch?",-427062659),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.connect","resolve","com.wsscode.pathom.connect/resolve",842516772),com.wsscode.pathom.connect.batch_resolver.cljs$core$IFn$_invoke$arity$1(((function (map__52714,map__52714__$1,resolver,resolve){
return (function (env,inputs){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,map__52714,map__52714__$1,resolver,resolve){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,map__52714,map__52714__$1,resolver,resolve){
return (function (state_52726){
var state_val_52727 = (state_52726[(1)]);
if((state_val_52727 === (1))){
var inst_52716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var inst_52717 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var inst_52718 = cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(inst_52716,inputs);
var inst_52719 = (function (){var from_chan = inst_52716;
var out_chan = inst_52717;
return ((function (from_chan,out_chan,inst_52716,inst_52717,inst_52718,state_val_52727,c__38971__auto__,map__52714,map__52714__$1,resolver,resolve){
return (function com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline(input,res_ch){
var c__38971__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto____$1,from_chan,out_chan,inst_52716,inst_52717,inst_52718,state_val_52727,c__38971__auto__,map__52714,map__52714__$1,resolver,resolve){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto____$1,from_chan,out_chan,inst_52716,inst_52717,inst_52718,state_val_52727,c__38971__auto__,map__52714,map__52714__$1,resolver,resolve){
return (function (state_52740){
var state_val_52741 = (state_52740[(1)]);
if((state_val_52741 === (1))){
var inst_52728 = (state_52740[(7)]);
var inst_52728__$1 = (resolve.cljs$core$IFn$_invoke$arity$2 ? resolve.cljs$core$IFn$_invoke$arity$2(env,input) : resolve.call(null,env,input));
var inst_52729 = com.wsscode.common.async_cljs.chan_QMARK_(inst_52728__$1);
var state_52740__$1 = (function (){var statearr_52742 = state_52740;
(statearr_52742[(7)] = inst_52728__$1);

return statearr_52742;
})();
if(inst_52729){
var statearr_52743_55155 = state_52740__$1;
(statearr_52743_55155[(1)] = (2));

} else {
var statearr_52744_55156 = state_52740__$1;
(statearr_52744_55156[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52741 === (2))){
var inst_52728 = (state_52740[(7)]);
var state_52740__$1 = state_52740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52740__$1,(5),inst_52728);
} else {
if((state_val_52741 === (3))){
var inst_52728 = (state_52740[(7)]);
var state_52740__$1 = state_52740;
var statearr_52745_55158 = state_52740__$1;
(statearr_52745_55158[(2)] = inst_52728);

(statearr_52745_55158[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52741 === (4))){
var inst_52735 = (state_52740[(2)]);
var state_52740__$1 = state_52740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52740__$1,(6),res_ch,inst_52735);
} else {
if((state_val_52741 === (5))){
var inst_52732 = (state_52740[(2)]);
var state_52740__$1 = state_52740;
var statearr_52746_55159 = state_52740__$1;
(statearr_52746_55159[(2)] = inst_52732);

(statearr_52746_55159[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52741 === (6))){
var inst_52737 = (state_52740[(2)]);
var inst_52738 = cljs.core.async.close_BANG_(res_ch);
var state_52740__$1 = (function (){var statearr_52747 = state_52740;
(statearr_52747[(8)] = inst_52737);

return statearr_52747;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52740__$1,inst_52738);
} else {
return null;
}
}
}
}
}
}
});})(c__38971__auto____$1,from_chan,out_chan,inst_52716,inst_52717,inst_52718,state_val_52727,c__38971__auto__,map__52714,map__52714__$1,resolver,resolve))
;
return ((function (switch__38924__auto__,c__38971__auto____$1,from_chan,out_chan,inst_52716,inst_52717,inst_52718,state_val_52727,c__38971__auto__,map__52714,map__52714__$1,resolver,resolve){
return (function() {
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38925__auto____0 = (function (){
var statearr_52748 = [null,null,null,null,null,null,null,null,null];
(statearr_52748[(0)] = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38925__auto__);

(statearr_52748[(1)] = (1));

return statearr_52748;
});
var com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38925__auto____1 = (function (state_52740){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_52740);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e52749){if((e52749 instanceof Object)){
var ex__38928__auto__ = e52749;
var statearr_52750_55162 = state_52740;
(statearr_52750_55162[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52749;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55163 = state_52740;
state_52740 = G__55163;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38925__auto__ = function(state_52740){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38925__auto____1.call(this,state_52740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38925__auto____0;
com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38925__auto____1;
return com$wsscode$pathom$connect$transform_auto_batch_$_auth_batch_pipeline_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto____$1,from_chan,out_chan,inst_52716,inst_52717,inst_52718,state_val_52727,c__38971__auto__,map__52714,map__52714__$1,resolver,resolve))
})();
var state__38973__auto__ = (function (){var statearr_52751 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_52751[(6)] = c__38971__auto____$1);

return statearr_52751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto____$1,from_chan,out_chan,inst_52716,inst_52717,inst_52718,state_val_52727,c__38971__auto__,map__52714,map__52714__$1,resolver,resolve))
);

return c__38971__auto____$1;
});
;})(from_chan,out_chan,inst_52716,inst_52717,inst_52718,state_val_52727,c__38971__auto__,map__52714,map__52714__$1,resolver,resolve))
})();
var inst_52720 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4(n,inst_52717,inst_52719,inst_52716);
var inst_52721 = cljs.core.PersistentVector.EMPTY;
var inst_52722 = cljs.core.async.into(inst_52721,inst_52717);
var state_52726__$1 = (function (){var statearr_52752 = state_52726;
(statearr_52752[(7)] = inst_52718);

(statearr_52752[(8)] = inst_52720);

return statearr_52752;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52726__$1,(2),inst_52722);
} else {
if((state_val_52727 === (2))){
var inst_52724 = (state_52726[(2)]);
var state_52726__$1 = state_52726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52726__$1,inst_52724);
} else {
return null;
}
}
});})(c__38971__auto__,map__52714,map__52714__$1,resolver,resolve))
;
return ((function (switch__38924__auto__,c__38971__auto__,map__52714,map__52714__$1,resolver,resolve){
return (function() {
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38925__auto____0 = (function (){
var statearr_52753 = [null,null,null,null,null,null,null,null,null];
(statearr_52753[(0)] = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38925__auto__);

(statearr_52753[(1)] = (1));

return statearr_52753;
});
var com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38925__auto____1 = (function (state_52726){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_52726);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e52754){if((e52754 instanceof Object)){
var ex__38928__auto__ = e52754;
var statearr_52755_55166 = state_52726;
(statearr_52755_55166[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52754;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55169 = state_52726;
state_52726 = G__55169;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38925__auto__ = function(state_52726){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38925__auto____1.call(this,state_52726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38925__auto____0;
com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38925__auto____1;
return com$wsscode$pathom$connect$transform_auto_batch_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,map__52714,map__52714__$1,resolver,resolve))
})();
var state__38973__auto__ = (function (){var statearr_52756 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_52756[(6)] = c__38971__auto__);

return statearr_52756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,map__52714,map__52714__$1,resolver,resolve))
);

return c__38971__auto__;
});})(map__52714,map__52714__$1,resolver,resolve))
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
com.wsscode.pathom.connect.mutation_dispatch_embedded = (function com$wsscode$pathom$connect$mutation_dispatch_embedded(p__52757,entity){
var map__52758 = p__52757;
var map__52758__$1 = (((((!((map__52758 == null))))?(((((map__52758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52758):map__52758);
var env = map__52758__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52758__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var sym = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
var map__52760 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym], null));
var map__52760__$1 = (((((!((map__52760 == null))))?(((((map__52760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52760):map__52760);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52760__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112));
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ",["Can't find mutate fn for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),"\n","mutate"].join('')));
}

return (mutate.cljs$core$IFn$_invoke$arity$2 ? mutate.cljs$core$IFn$_invoke$arity$2(env,entity) : mutate.call(null,env,entity));
});
/**
 * Sync mutate function to integrate connect mutations to pathom parser.
 */
com.wsscode.pathom.connect.mutate = (function com$wsscode$pathom$connect$mutate(p__52762,sym_SINGLEQUOTE_,p__52763){
var map__52764 = p__52762;
var map__52764__$1 = (((((!((map__52764 == null))))?(((((map__52764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52764):map__52764);
var env = map__52764__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52764__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var mutate_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52764__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069));
var mutation_join_globals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52764__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.PersistentVector.EMPTY);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52764__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__52765 = p__52763;
var map__52765__$1 = (((((!((map__52765 == null))))?(((((map__52765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52765):map__52765);
var input = map__52765__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52765__$1,new cljs.core.Keyword("pathom","context","pathom/context",-1452257614));
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym_SINGLEQUOTE_], null));
if(cljs.core.truth_(temp__5718__auto__)){
var map__52768 = temp__5718__auto__;
var map__52768__$1 = (((((!((map__52768 == null))))?(((((map__52768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52768):map__52768);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52768__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),sym);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env__$1,map__52768,map__52768__$1,sym,temp__5718__auto__,map__52764,map__52764__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__52765,map__52765__$1,input,context){
return (function (){
var res = (function (){var G__52770 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","source-mutation","com.wsscode.pathom.connect/source-mutation",-674985123),sym_SINGLEQUOTE_);
var G__52771 = input;
return (mutate_dispatch.cljs$core$IFn$_invoke$arity$2 ? mutate_dispatch.cljs$core$IFn$_invoke$arity$2(G__52770,G__52771) : mutate_dispatch.call(null,G__52770,G__52771));
})();
var res__$1 = (function (){var G__52772 = res;
if(cljs.core.truth_((function (){var and__4120__auto__ = context;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.map_QMARK_(res);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__52772,context], 0));
} else {
return G__52772;
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
});})(env__$1,map__52768,map__52768__$1,sym,temp__5718__auto__,map__52764,map__52764__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__52765,map__52765__$1,input,context))
], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Mutation not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutation","mutation",-285823378),sym_SINGLEQUOTE_], null));
}
});
/**
 * Async mutate function to integrate connect mutations to pathom parser.
 */
com.wsscode.pathom.connect.mutate_async = (function com$wsscode$pathom$connect$mutate_async(p__52773,sym_SINGLEQUOTE_,p__52774){
var map__52775 = p__52773;
var map__52775__$1 = (((((!((map__52775 == null))))?(((((map__52775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52775):map__52775);
var env = map__52775__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52775__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var mutate_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52775__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069));
var mutation_join_globals = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52775__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),cljs.core.PersistentVector.EMPTY);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52775__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__52776 = p__52774;
var map__52776__$1 = (((((!((map__52776 == null))))?(((((map__52776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52776):map__52776);
var input = map__52776__$1;
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52776__$1,new cljs.core.Keyword("pathom","context","pathom/context",-1452257614));
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),sym_SINGLEQUOTE_], null));
if(cljs.core.truth_(temp__5718__auto__)){
var map__52779 = temp__5718__auto__;
var map__52779__$1 = (((((!((map__52779 == null))))?(((((map__52779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52779):map__52779);
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52779__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"key","key",-1516042587)], null),sym);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (env__$1,map__52779,map__52779__$1,sym,temp__5718__auto__,map__52775,map__52775__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__52776,map__52776__$1,input,context){
return (function (){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,env__$1,map__52779,map__52779__$1,sym,temp__5718__auto__,map__52775,map__52775__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__52776,map__52776__$1,input,context){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,env__$1,map__52779,map__52779__$1,sym,temp__5718__auto__,map__52775,map__52775__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__52776,map__52776__$1,input,context){
return (function (state_52820){
var state_val_52821 = (state_52820[(1)]);
if((state_val_52821 === (7))){
var inst_52794 = (state_52820[(2)]);
var state_52820__$1 = (function (){var statearr_52822 = state_52820;
(statearr_52822[(7)] = inst_52794);

return statearr_52822;
})();
if(cljs.core.truth_(context)){
var statearr_52823_55202 = state_52820__$1;
(statearr_52823_55202[(1)] = (9));

} else {
var statearr_52824_55203 = state_52820__$1;
(statearr_52824_55203[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52821 === (1))){
var state_52820__$1 = state_52820;
var statearr_52825_55205 = state_52820__$1;
(statearr_52825_55205[(2)] = null);

(statearr_52825_55205[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52821 === (4))){
var inst_52786 = (state_52820[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_52820,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_52785 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","source-mutation","com.wsscode.pathom.connect/source-mutation",-674985123),sym_SINGLEQUOTE_);
var inst_52786__$1 = (mutate_dispatch.cljs$core$IFn$_invoke$arity$2 ? mutate_dispatch.cljs$core$IFn$_invoke$arity$2(inst_52785,input) : mutate_dispatch.call(null,inst_52785,input));
var inst_52787 = com.wsscode.common.async_cljs.chan_QMARK_(inst_52786__$1);
var state_52820__$1 = (function (){var statearr_52826 = state_52820;
(statearr_52826[(8)] = inst_52786__$1);

return statearr_52826;
})();
if(inst_52787){
var statearr_52827_55207 = state_52820__$1;
(statearr_52827_55207[(1)] = (5));

} else {
var statearr_52828_55208 = state_52820__$1;
(statearr_52828_55208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52821 === (15))){
var inst_52805 = (state_52820[(9)]);
var inst_52807 = cljs.core.select_keys(inst_52805,mutation_join_globals);
var inst_52808 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_52805);
var inst_52809 = com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(inst_52808,env__$1);
var state_52820__$1 = (function (){var statearr_52829 = state_52820;
(statearr_52829[(10)] = inst_52807);

return statearr_52829;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52820__$1,(18),inst_52809);
} else {
if((state_val_52821 === (13))){
var inst_52794 = (state_52820[(7)]);
var state_52820__$1 = state_52820;
var statearr_52830_55213 = state_52820__$1;
(statearr_52830_55213[(2)] = inst_52794);

(statearr_52830_55213[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52821 === (6))){
var inst_52786 = (state_52820[(8)]);
var state_52820__$1 = state_52820;
var statearr_52831_55216 = state_52820__$1;
(statearr_52831_55216[(2)] = inst_52786);

(statearr_52831_55216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52821 === (17))){
var inst_52816 = (state_52820[(2)]);
var state_52820__$1 = state_52820;
var statearr_52832_55217 = state_52820__$1;
(statearr_52832_55217[(2)] = inst_52816);


cljs.core.async.impl.ioc_helpers.process_exception(state_52820__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52821 === (3))){
var inst_52781 = (state_52820[(2)]);
var state_52820__$1 = state_52820;
var statearr_52833_55218 = state_52820__$1;
(statearr_52833_55218[(2)] = inst_52781);


cljs.core.async.impl.ioc_helpers.process_exception(state_52820__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52821 === (12))){
var inst_52794 = (state_52820[(7)]);
var inst_52802 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_52794,context], 0));
var state_52820__$1 = state_52820;
var statearr_52834_55220 = state_52820__$1;
(statearr_52834_55220[(2)] = inst_52802);

(statearr_52834_55220[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52821 === (2))){
var inst_52818 = (state_52820[(2)]);
var state_52820__$1 = state_52820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52820__$1,inst_52818);
} else {
if((state_val_52821 === (11))){
var inst_52800 = (state_52820[(2)]);
var state_52820__$1 = state_52820;
if(cljs.core.truth_(inst_52800)){
var statearr_52835_55225 = state_52820__$1;
(statearr_52835_55225[(1)] = (12));

} else {
var statearr_52836_55226 = state_52820__$1;
(statearr_52836_55226[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52821 === (9))){
var inst_52794 = (state_52820[(7)]);
var inst_52797 = cljs.core.map_QMARK_(inst_52794);
var state_52820__$1 = state_52820;
var statearr_52837_55227 = state_52820__$1;
(statearr_52837_55227[(2)] = inst_52797);

(statearr_52837_55227[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52821 === (5))){
var inst_52786 = (state_52820[(8)]);
var state_52820__$1 = state_52820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52820__$1,(8),inst_52786);
} else {
if((state_val_52821 === (14))){
var inst_52805 = (state_52820[(2)]);
var state_52820__$1 = (function (){var statearr_52838 = state_52820;
(statearr_52838[(9)] = inst_52805);

return statearr_52838;
})();
if(cljs.core.truth_(query)){
var statearr_52839_55230 = state_52820__$1;
(statearr_52839_55230[(1)] = (15));

} else {
var statearr_52840_55232 = state_52820__$1;
(statearr_52840_55232[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52821 === (16))){
var inst_52805 = (state_52820[(9)]);
var state_52820__$1 = state_52820;
var statearr_52841_55234 = state_52820__$1;
(statearr_52841_55234[(2)] = inst_52805);

(statearr_52841_55234[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52821 === (10))){
var state_52820__$1 = state_52820;
var statearr_52842_55237 = state_52820__$1;
(statearr_52842_55237[(2)] = context);

(statearr_52842_55237[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52821 === (18))){
var inst_52807 = (state_52820[(10)]);
var inst_52811 = (state_52820[(2)]);
var inst_52812 = com.wsscode.common.async_cljs.throw_err(inst_52811);
var inst_52813 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_52807,inst_52812], 0));
var state_52820__$1 = state_52820;
var statearr_52843_55240 = state_52820__$1;
(statearr_52843_55240[(2)] = inst_52813);

(statearr_52843_55240[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52821 === (8))){
var inst_52790 = (state_52820[(2)]);
var inst_52791 = com.wsscode.common.async_cljs.throw_err(inst_52790);
var state_52820__$1 = state_52820;
var statearr_52844_55241 = state_52820__$1;
(statearr_52844_55241[(2)] = inst_52791);

(statearr_52844_55241[(1)] = (7));


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
});})(c__38971__auto__,env__$1,map__52779,map__52779__$1,sym,temp__5718__auto__,map__52775,map__52775__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__52776,map__52776__$1,input,context))
;
return ((function (switch__38924__auto__,c__38971__auto__,env__$1,map__52779,map__52779__$1,sym,temp__5718__auto__,map__52775,map__52775__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__52776,map__52776__$1,input,context){
return (function() {
var com$wsscode$pathom$connect$mutate_async_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$connect$mutate_async_$_state_machine__38925__auto____0 = (function (){
var statearr_52845 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52845[(0)] = com$wsscode$pathom$connect$mutate_async_$_state_machine__38925__auto__);

(statearr_52845[(1)] = (1));

return statearr_52845;
});
var com$wsscode$pathom$connect$mutate_async_$_state_machine__38925__auto____1 = (function (state_52820){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_52820);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e52846){if((e52846 instanceof Object)){
var ex__38928__auto__ = e52846;
var statearr_52847_55246 = state_52820;
(statearr_52847_55246[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52846;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55248 = state_52820;
state_52820 = G__55248;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$connect$mutate_async_$_state_machine__38925__auto__ = function(state_52820){
switch(arguments.length){
case 0:
return com$wsscode$pathom$connect$mutate_async_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$connect$mutate_async_$_state_machine__38925__auto____1.call(this,state_52820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$connect$mutate_async_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$connect$mutate_async_$_state_machine__38925__auto____0;
com$wsscode$pathom$connect$mutate_async_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$connect$mutate_async_$_state_machine__38925__auto____1;
return com$wsscode$pathom$connect$mutate_async_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,env__$1,map__52779,map__52779__$1,sym,temp__5718__auto__,map__52775,map__52775__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__52776,map__52776__$1,input,context))
})();
var state__38973__auto__ = (function (){var statearr_52848 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_52848[(6)] = c__38971__auto__);

return statearr_52848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,env__$1,map__52779,map__52779__$1,sym,temp__5718__auto__,map__52775,map__52775__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__52776,map__52776__$1,input,context))
);

return c__38971__auto__;
});})(env__$1,map__52779,map__52779__$1,sym,temp__5718__auto__,map__52775,map__52775__$1,env,indexes,mutate_dispatch,mutation_join_globals,query,map__52776,map__52776__$1,input,context))
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
com.wsscode.pathom.connect.discover_attrs = (function com$wsscode$pathom$connect$discover_attrs(p__52853,ctx){
var map__52854 = p__52853;
var map__52854__$1 = (((((!((map__52854 == null))))?(((((map__52854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52854):map__52854);
var index = map__52854__$1;
var index_io = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52854__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52854__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","cache","com.wsscode.pathom.connect/cache",328991776));
return com.wsscode.pathom.connect.cached(cache,ctx,((function (map__52854,map__52854__$1,index,index_io,cache){
return (function (){
var base_keys = (((cljs.core.count(ctx) > (1)))?(function (){var tree = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__52854,map__52854__$1,index,index_io,cache){
return (function (a,b){
var attrs = (function (){var G__52856 = index;
var G__52857 = cljs.core.vec(b);
return (com.wsscode.pathom.connect.discover_attrs.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.connect.discover_attrs.cljs$core$IFn$_invoke$arity$2(G__52856,G__52857) : com.wsscode.pathom.connect.discover_attrs.call(null,G__52856,G__52857));
})();
if((a == null)){
return attrs;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(a,cljs.core.reverse(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(b)),com.wsscode.pathom.connect.merge_io,attrs);
}
});})(map__52854,map__52854__$1,index,index_io,cache))
,null,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__52854,map__52854__$1,index,index_io,cache){
return (function (p1__52850_SHARP_,p2__52849_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(p2__52849_SHARP_) - (p1__52850_SHARP_ + (1))),p2__52849_SHARP_);
});})(map__52854,map__52854__$1,index,index_io,cache))
,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.count(ctx) - (1)),ctx)));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.vec(cljs.core.next(cljs.core.reverse(ctx))));
})():com.wsscode.pathom.connect.merge_io(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(index_io,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.first(ctx)], null)),cljs.core.get.cljs$core$IFn$_invoke$arity$3(index_io,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(ctx)]),cljs.core.PersistentArrayMap.EMPTY)));
var available = index_io;
var collected = base_keys;
while(true){
var attrs = cljs.core.set(cljs.core.keys(collected));
var matches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (available,collected,attrs,base_keys,map__52854,map__52854__$1,index,index_io,cache){
return (function (p__52862){
var vec__52863 = p__52862;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52863,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52863,(1),null);
return cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(k,attrs));
});})(available,collected,attrs,base_keys,map__52854,map__52854__$1,index,index_io,cache))
,available);
if(cljs.core.seq(matches)){
var G__55265 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (available,collected,attrs,matches,base_keys,map__52854,map__52854__$1,index,index_io,cache){
return (function (p1__52851_SHARP_,p2__52852_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52851_SHARP_,p2__52852_SHARP_);
});})(available,collected,attrs,matches,base_keys,map__52854,map__52854__$1,index,index_io,cache))
,available,cljs.core.keys(matches));
var G__55266 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.connect.merge_io,collected,cljs.core.vals(matches));
available = G__55265;
collected = G__55266;
continue;
} else {
return collected;
}
break;
}
});})(map__52854,map__52854__$1,index,index_io,cache))
);
});
/**
 * This will use the ::index-resolvers to re-build the index. You might need that if in development you changed some definitions
 *   and got in a dirty state somehow
 */
com.wsscode.pathom.connect.reprocess_index = (function com$wsscode$pathom$connect$reprocess_index(p__52866){
var map__52867 = p__52866;
var map__52867__$1 = (((((!((map__52867 == null))))?(((((map__52867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52867):map__52867);
var index_resolvers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52867__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256));
return cljs.core.reduce_kv(com.wsscode.pathom.connect.add,cljs.core.PersistentArrayMap.EMPTY,index_resolvers);
});
/**
 * Helper function to transform a data into an output shape.
 */
com.wsscode.pathom.connect.data__GT_shape = (function com$wsscode$pathom$connect$data__GT_shape(data){
if(cljs.core.map_QMARK_(data)){
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,(function (p1__52869_SHARP_){
if(cljs.core.map_QMARK_(p1__52869_SHARP_)){
return cljs.core.ffirst(p1__52869_SHARP_);
} else {
return p1__52869_SHARP_;
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
com.wsscode.pathom.connect.batch_restore_sort = (function com$wsscode$pathom$connect$batch_restore_sort(p__52871,items){
var map__52872 = p__52871;
var map__52872__$1 = (((((!((map__52872 == null))))?(((((map__52872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52872):map__52872);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52872__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","inputs","com.wsscode.pathom.connect/inputs",-1635802936));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52872__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","key","com.wsscode.pathom.connect/key",1316653363));
var batch_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52872__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","batch-default","com.wsscode.pathom.connect/batch-default",2069925724));
var index = cljs.core.group_by(key,items);
var batch_default__$1 = (function (){var or__4131__auto__ = batch_default;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,index,map__52872,map__52872__$1,inputs,key,batch_default){
return (function (p1__52870_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([key],[cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__52870_SHARP_,key)]);
});
;})(or__4131__auto__,index,map__52872,map__52872__$1,inputs,key,batch_default))
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (index,batch_default__$1,map__52872,map__52872__$1,inputs,key,batch_default){
return (function (input){
var or__4131__auto__ = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(index,cljs.core.get.cljs$core$IFn$_invoke$arity$2(input,key)));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (batch_default__$1.cljs$core$IFn$_invoke$arity$1 ? batch_default__$1.cljs$core$IFn$_invoke$arity$1(input) : batch_default__$1.call(null,input));
}
});})(index,batch_default__$1,map__52872,map__52872__$1,inputs,key,batch_default))
),inputs);
});
com.wsscode.pathom.connect.index_explorer_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","index-explorer-resolver","com.wsscode.pathom.connect/index-explorer-resolver",-1613438284,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.index-explorer","index","com.wsscode.pathom.viz.index-explorer/index",-1539481252),cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))], null);
}));
com.wsscode.pathom.connect.indexes_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","indexes-resolver","com.wsscode.pathom.connect/indexes-resolver",-1892611171,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","index-oir","com.wsscode.pathom.connect/index-oir",976969746),new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","autocomplete-ignore","com.wsscode.pathom.connect/autocomplete-ignore",-191717401),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-attributes","com.wsscode.pathom.connect/index-attributes",-24325279),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-leaf-in","com.wsscode.pathom.connect/attr-leaf-in",-1959401711),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-branch-in","com.wsscode.pathom.connect/attr-branch-in",1982854732),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-combinations","com.wsscode.pathom.connect/attr-combinations",-1163990806),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-input-in","com.wsscode.pathom.connect/attr-input-in",-2112912399),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-output-in","com.wsscode.pathom.connect/attr-output-in",-62045610),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-output-in","com.wsscode.pathom.connect/attr-mutation-output-in",1122448739),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-mutation-param-in","com.wsscode.pathom.connect/attr-mutation-param-in",-1474382671),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-provides","com.wsscode.pathom.connect/attr-provides",-474523918),new cljs.core.Keyword("com.wsscode.pathom.connect","attr-reach-via","com.wsscode.pathom.connect/attr-reach-via",-483841559)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-resolvers","com.wsscode.pathom.connect/index-resolvers",916075256),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","index-mutations","com.wsscode.pathom.connect/index-mutations",1981352054),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795)], null)], null)], null)], null)], null)], null),(function (env,_){
return cljs.core.select_keys(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null));
}));
com.wsscode.pathom.connect.resolver_weights_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","resolver-weights-resolver","com.wsscode.pathom.connect/resolver-weights-resolver",-600539046,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),(function (){var G__52874 = env;
var G__52874__$1 = (((G__52874 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772).cljs$core$IFn$_invoke$arity$1(G__52874));
if((G__52874__$1 == null)){
return null;
} else {
return cljs.core.deref(G__52874__$1);
}
})()], null);
}));
com.wsscode.pathom.connect.resolver_weights_sorted_resolver = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.connect","resolver-weights-sorted-resolver","com.wsscode.pathom.connect/resolver-weights-sorted-resolver",-1672618105,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights-sorted","com.wsscode.pathom.connect/resolver-weights-sorted",1502939218)], null)], null),(function (env,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights-sorted","com.wsscode.pathom.connect/resolver-weights-sorted",1502939218),(function (){var G__52877 = env;
var G__52877__$1 = (((G__52877 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772).cljs$core$IFn$_invoke$arity$1(G__52877));
var G__52877__$2 = (((G__52877__$1 == null))?null:cljs.core.deref(G__52877__$1));
if((G__52877__$2 == null)){
return null;
} else {
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.second,((function (G__52877,G__52877__$1,G__52877__$2){
return (function (p1__52876_SHARP_,p2__52875_SHARP_){
return cljs.core.compare(p2__52875_SHARP_,p1__52876_SHARP_);
});})(G__52877,G__52877__$1,G__52877__$2))
,G__52877__$2);
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
var G__52879 = arguments.length;
switch (G__52879) {
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

com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1 = (function (p__52880){
var map__52881 = p__52880;
var map__52881__$1 = (((((!((map__52881 == null))))?(((((map__52881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52881):map__52881);
var env = map__52881__$1;
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52881__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var indexes__$1 = (function (){var or__4131__auto__ = indexes;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var pool_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser2","com.wsscode.pathom.core/wrap-parser2",776559497),((function (indexes__$1,pool_chan,map__52881,map__52881__$1,env,indexes){
return (function com$wsscode$pathom$connect$connect_wrap_parser(parser,p__52883){
var map__52884 = p__52883;
var map__52884__$1 = (((((!((map__52884 == null))))?(((((map__52884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52884):map__52884);
var plugins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52884__$1,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796));
var plugin_registry = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),plugins);
var resolver_weights = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(indexes__$1,com.wsscode.pathom.connect.register,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plugin_registry,cljs.core.get.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),cljs.core.PersistentVector.EMPTY)], null));

return ((function (plugin_registry,resolver_weights,map__52884,map__52884__$1,plugins,indexes__$1,pool_chan,map__52881,map__52881__$1,env,indexes){
return (function (env__$1,tx){
var G__52886 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.connect.resolver_dispatch_embedded,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate-dispatch","com.wsscode.pathom.connect/mutate-dispatch",792217069),com.wsscode.pathom.connect.mutation_dispatch_embedded,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.deref(indexes__$1),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-weights","com.wsscode.pathom.connect/resolver-weights",-1154876772),resolver_weights,new cljs.core.Keyword("com.wsscode.pathom.connect","pool-chan","com.wsscode.pathom.connect/pool-chan",1405163449),pool_chan], null),env__$1], 0));
var G__52887 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__52886,G__52887) : parser.call(null,G__52886,G__52887));
});
;})(plugin_registry,resolver_weights,map__52884,map__52884__$1,plugins,indexes__$1,pool_chan,map__52881,map__52881__$1,env,indexes))
});})(indexes__$1,pool_chan,map__52881,map__52881__$1,env,indexes))
,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),indexes__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.connect.connect_resolvers], null);
});

com.wsscode.pathom.connect.connect_plugin.cljs$lang$maxFixedArity = 1;

if(com.wsscode.pathom.misc.INCLUDE_SPECS){
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","add","com.wsscode.pathom.connect/add",-52020600,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"blank","blank",-1249652109)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentArrayMap.EMPTY])], null),null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__52888){
return cljs.core.map_QMARK_(G__52888);
})], null),(function (G__52888){
return cljs.core.map_QMARK_(G__52888);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)])),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","add-mutation","com.wsscode.pathom.connect/add-mutation",-1209253784,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"blank","blank",-1249652109)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentArrayMap.EMPTY])], null),null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__52889){
return cljs.core.map_QMARK_(G__52889);
})], null),(function (G__52889){
return cljs.core.map_QMARK_(G__52889);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)])),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.PersistentArrayMap.EMPTY,"null"], null), null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"sym-data","sym-data",-380108714),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303)], null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",1254247877,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"register","register",1968522516)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"register","register",1968522516),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","pick-resolver","com.wsscode.pathom.connect/pick-resolver",162465702,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__52890){
return cljs.core.map_QMARK_(G__52890);
}),(function (G__52890){
return cljs.core.contains_QMARK_(G__52890,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
})], null),(function (G__52890){
return ((cljs.core.map_QMARK_(G__52890)) && (cljs.core.contains_QMARK_(G__52890,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null)]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","dependency-track","com.wsscode.pathom.connect/dependency-track",-841235185)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","path-cost","com.wsscode.pathom.connect/path-cost",-825763067,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"plan","plan",1118952668)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__52891){
return cljs.core.coll_QMARK_(G__52891);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))], null),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"plan","plan",1118952668),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","project-parent-query-attributes","com.wsscode.pathom.connect/project-parent-query-attributes",-418196403,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attributes-set","com.wsscode.pathom.connect/attributes-set",671683205),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","defresolver","com.wsscode.pathom.connect/defresolver",1615901468,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.simple_symbol_QMARK_,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"any?","any?",-318999933,null),cljs.core.any_QMARK_,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__52892){
return ((cljs.core.vector_QMARK_(G__52892)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.bounded_count((2),G__52892))));
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"count","count",2139924085),(2),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2))], null),null),cljs.core.any_QMARK_,cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","alias-resolver","com.wsscode.pathom.connect/alias-resolver",920724457,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","alias-resolver2","com.wsscode.pathom.connect/alias-resolver2",-133273996,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver","com.wsscode.pathom.connect/resolver",126338059)),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","defmutation","com.wsscode.pathom.connect/defmutation",642780868,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.simple_symbol_QMARK_,cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"any?","any?",-318999933,null),cljs.core.any_QMARK_,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__52893){
return ((cljs.core.vector_QMARK_(G__52893)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.bounded_count((2),G__52893))));
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword(null,"count","count",2139924085),(2),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2))], null),null),cljs.core.any_QMARK_,cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Symbol("cljs.core","simple-symbol?","cljs.core/simple-symbol?",-1951205629,null),new cljs.core.Keyword(null,"arglist","arglist",-1808272150),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"count","count",2139924085),(2)),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.connect","discover-attrs","com.wsscode.pathom.connect/discover-attrs",-1426753571,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"ctx","ctx",-493610118),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"ctx","ctx",-493610118),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"ctx","ctx",-493610118)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__52894){
return cljs.core.coll_QMARK_(G__52894);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword(null,"ctx","ctx",-493610118),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462),null,null),new cljs.core.Keyword("com.wsscode.pathom.connect","io-map","com.wsscode.pathom.connect/io-map",-1661450462),null,null,null));
} else {
}

//# sourceMappingURL=com.wsscode.pathom.connect.js.map
