goog.provide('com.wsscode.pathom.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.parser');
goog.require('com.wsscode.pathom.misc');
goog.require('clojure.set');
goog.require('clojure.walk');
goog.require('edn_query_language.core');
goog.require('goog.object');
goog.require('com.wsscode.pathom.trace');
if(com.wsscode.pathom.misc.INCLUDE_SPECS){
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__66543){
return cljs.core.map_QMARK_(G__66543);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13080__auto__,v__13081__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13081__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__66554){
return cljs.core.vector_QMARK_(G__66554);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","optional?","com.wsscode.pathom.core/optional?",910087942),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"list","list",765357683)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","process-reader","com.wsscode.pathom.core/process-reader",348867871),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader","reader",169660853)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),null,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"gen","gen",142575302),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),"Generated sample error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some","some",-1951079573),"data"], null)),"null"], null), null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Generated sample error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some","some",-1951079573),"data"], null))]));
}),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__66584){
return cljs.core.map_QMARK_(G__66584);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13080__auto__,v__13081__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13081__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("cljs.core","IAtom","cljs.core/IAtom",-1037999645,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__66542_SHARP_){
return (p1__66542_SHARP_ instanceof cljs.core.IAtom);
}));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","map-key-transform","com.wsscode.pathom.core/map-key-transform",-238565800),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","map-value-transform","com.wsscode.pathom.core/map-value-transform",1252006952),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),cljs.core.set_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","js-key-transform","com.wsscode.pathom.core/js-key-transform",-1588372758),new cljs.core.Keyword("com.wsscode.pathom.core","map-key-transform","com.wsscode.pathom.core/map-key-transform",-238565800),new cljs.core.Keyword("com.wsscode.pathom.core","map-key-transform","com.wsscode.pathom.core/map-key-transform",-238565800));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","js-value-transform","com.wsscode.pathom.core/js-value-transform",1418749137),new cljs.core.Keyword("com.wsscode.pathom.core","map-value-transform","com.wsscode.pathom.core/map-value-transform",1252006952),new cljs.core.Keyword("com.wsscode.pathom.core","map-value-transform","com.wsscode.pathom.core/map-value-transform",1252006952));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"tx","tx",466630418)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader","reader",169660853)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),null,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395),new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395),null,null),new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","plugin","com.wsscode.pathom.core/plugin",-881556304),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__66658){
return cljs.core.map_QMARK_(G__66658);
})], null),(function (G__66658){
return cljs.core.map_QMARK_(G__66658);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null)])));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","parent-join-key","com.wsscode.pathom.core/parent-join-key",-289005491),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"call","call",-519999866)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","union-path","com.wsscode.pathom.core/union-path",-2083478095),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),cljs.core.fn_QMARK_], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch-size","com.wsscode.pathom.core/async-request-cache-ch-size",-437531159),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_);
} else {
}
com.wsscode.pathom.core.break_values = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),null], null), null);
/**
 * Takes an AST and return a single set with all properties that appear in a query.
 * 
 *   Example:
 * 
 *   (-> [:foo {:bar [:baz]}] eql/query->ast pc/all-out-attributes)
 *   ; => #{:foo :bar :baz}
 */
com.wsscode.pathom.core.ast_properties = (function com$wsscode$pathom$core$ast_properties(p__66671){
var map__66672 = p__66671;
var map__66672__$1 = (((((!((map__66672 == null))))?(((((map__66672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66672):map__66672);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66672__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__66672,map__66672__$1,children){
return (function (attrs,p__66675){
var map__66676 = p__66675;
var map__66676__$1 = (((((!((map__66676 == null))))?(((((map__66676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66676):map__66676);
var node = map__66676__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66676__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66676__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__66681 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs,key);
if(cljs.core.truth_(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__66681,(com.wsscode.pathom.core.ast_properties.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.ast_properties.cljs$core$IFn$_invoke$arity$1(node) : com.wsscode.pathom.core.ast_properties.call(null,node)));
} else {
return G__66681;
}
});})(map__66672,map__66672__$1,children))
,cljs.core.PersistentHashSet.EMPTY,children);
});
com.wsscode.pathom.core.deep_merge = (function com$wsscode$pathom$core$deep_merge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___68173 = arguments.length;
var i__4731__auto___68174 = (0);
while(true){
if((i__4731__auto___68174 < len__4730__auto___68173)){
args__4736__auto__.push((arguments[i__4731__auto___68174]));

var G__68175 = (i__4731__auto___68174 + (1));
i__4731__auto___68174 = G__68175;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.wsscode.pathom.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.wsscode.pathom.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (xs){

if(cljs.core.every_QMARK_((function (p1__66683_SHARP_){
return ((cljs.core.map_QMARK_(p1__66683_SHARP_)) || ((p1__66683_SHARP_ == null)));
}),xs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,com.wsscode.pathom.core.deep_merge,xs);
} else {
return cljs.core.last(xs);
}
});

com.wsscode.pathom.core.deep_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.wsscode.pathom.core.deep_merge.cljs$lang$applyTo = (function (seq66684){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66684));
});

/**
 * Given a query expression convert it into an AST.
 */
com.wsscode.pathom.core.query__GT_ast = (function com$wsscode$pathom$core$query__GT_ast(query_expr){
return com.wsscode.pathom.parser.query__GT_ast(query_expr);
});
/**
 * Call query->ast and return the first children.
 */
com.wsscode.pathom.core.query__GT_ast1 = (function com$wsscode$pathom$core$query__GT_ast1(query_expr){
return cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.core.query__GT_ast(query_expr)));
});
com.wsscode.pathom.core.ast__GT_query = (function com$wsscode$pathom$core$ast__GT_query(query_ast){

return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(query_ast,true);
});
com.wsscode.pathom.core.filter_ast = (function com$wsscode$pathom$core$filter_ast(f,ast){
return clojure.walk.prewalk((function com$wsscode$pathom$core$filter_ast_$_filter_ast_walk(x){
if(((cljs.core.map_QMARK_(x)) && (cljs.core.contains_QMARK_(x,new cljs.core.Keyword(null,"children","children",-940561982))))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__66695_SHARP_){
return cljs.core.filterv(f,p1__66695_SHARP_);
}));
} else {
return x;
}
}),ast);
});
/**
 * Get params from env, always returns a map.
 */
com.wsscode.pathom.core.params = (function com$wsscode$pathom$core$params(env){
var or__4131__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Add attribute param, eg:
 * 
 *   ```
 *   (p/update-attribute-param :keyword assoc :foo "bar") => (:keyword {:foo "bar"})
 *   (p/update-attribute-param '(:keyword {:param "prev"}) assoc :foo "bar") => (:keyword {:foo "bar" :param "prev"})
 *   ```
 *   
 */
com.wsscode.pathom.core.update_attribute_param = (function com$wsscode$pathom$core$update_attribute_param(var_args){
var args__4736__auto__ = [];
var len__4730__auto___68200 = arguments.length;
var i__4731__auto___68201 = (0);
while(true){
if((i__4731__auto___68201 < len__4730__auto___68200)){
args__4736__auto__.push((arguments[i__4731__auto___68201]));

var G__68203 = (i__4731__auto___68201 + (1));
i__4731__auto___68201 = G__68203;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.update_attribute_param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.update_attribute_param.cljs$core$IFn$_invoke$arity$variadic = (function (x,f,args){
if(cljs.core.seq_QMARK_(x)){
var vec__66710 = x;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66710,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66710,(1),null);
return (new cljs.core.List(null,k,(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p,args),null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,x,(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.PersistentArrayMap.EMPTY,args),null,(1),null)),(2),null));
}
});

com.wsscode.pathom.core.update_attribute_param.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.core.update_attribute_param.cljs$lang$applyTo = (function (seq66704){
var G__66705 = cljs.core.first(seq66704);
var seq66704__$1 = cljs.core.next(seq66704);
var G__66706 = cljs.core.first(seq66704__$1);
var seq66704__$2 = cljs.core.next(seq66704__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66705,G__66706,seq66704__$2);
});

com.wsscode.pathom.core.optional_attribute = (function com$wsscode$pathom$core$optional_attribute(x){
if(cljs.core.truth_((function (){var or__4131__auto__ = (x instanceof cljs.core.Keyword);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return (new cljs.core.List(null,x,null,(1),null));
}
})())){
} else {
throw (new Error(["Assert failed: ","Optional value must be a keyword or a parameterized attribute","\n","(or (keyword? x) (list x))"].join('')));
}

return com.wsscode.pathom.core.update_attribute_param.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","optional?","com.wsscode.pathom.core/optional?",910087942),true], 0));
});
com.wsscode.pathom.core._QMARK_ = com.wsscode.pathom.core.optional_attribute;
/**
 * Given an AST point, check if the children is a union query type.
 */
com.wsscode.pathom.core.union_children_QMARK_ = (function com$wsscode$pathom$core$union_children_QMARK_(ast){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),(function (){var G__66716 = ast;
var G__66716__$1 = (((G__66716 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__66716));
var G__66716__$2 = (((G__66716__$1 == null))?null:cljs.core.first(G__66716__$1));
if((G__66716__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__66716__$2);
}
})());
});
com.wsscode.pathom.core.read_from_STAR_ = (function com$wsscode$pathom$core$read_from_STAR_(p__66722,reader){
var map__66723 = p__66722;
var map__66723__$1 = (((((!((map__66723 == null))))?(((((map__66723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66723):map__66723);
var env = map__66723__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66723__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core.map_QMARK_(reader)){
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var temp__5718__auto__ = cljs.core.find(reader,k);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__66728 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66728,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66728,(1),null);
return (com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2(env,v) : com.wsscode.pathom.core.read_from_STAR_.call(null,env,v));
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
} else {
if(cljs.core.vector_QMARK_(reader)){
var res = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__66723,map__66723__$1,env,ast){
return (function (p1__66717_SHARP_){
return (com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2(env,p1__66717_SHARP_) : com.wsscode.pathom.core.read_from_STAR_.call(null,env,p1__66717_SHARP_));
});})(map__66723,map__66723__$1,env,ast))
),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$1(((function (map__66723,map__66723__$1,env,ast){
return (function (p1__66719_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__66719_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));
});})(map__66723,map__66723__$1,env,ast))
),cljs.core.take.cljs$core$IFn$_invoke$arity$1((1))),reader);
if(cljs.core.seq(res)){
return cljs.core.first(res);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
} else {
if(cljs.core.ifn_QMARK_(reader)){
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't process reader",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reader","reader",169660853),reader], null));

}
}
}
});
/**
 * Runs the read process for the reading, the reader can be a function, a vector or a map:
 * 
 *   function: will receive the environment as argument
 *   map: will dispatch from the ast key to a reader on the map value
 *   vector: will try to run each reader in sequence, when a reader returns ::p/continue it will try the next
 */
com.wsscode.pathom.core.read_from = (function com$wsscode$pathom$core$read_from(env,reader){
var res__61936__auto__ = com.wsscode.pathom.core.read_from_STAR_(env,reader);
if(com.wsscode.common.async_cljs.chan_QMARK_(res__61936__auto__)){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,res__61936__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,res__61936__auto__){
return (function (state_66748){
var state_val_66749 = (state_66748[(1)]);
if((state_val_66749 === (1))){
var state_66748__$1 = state_66748;
var statearr_66750_68333 = state_66748__$1;
(statearr_66750_68333[(2)] = null);

(statearr_66750_68333[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66749 === (2))){
var inst_66746 = (state_66748[(2)]);
var state_66748__$1 = state_66748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66748__$1,inst_66746);
} else {
if((state_val_66749 === (3))){
var inst_66733 = (state_66748[(2)]);
var state_66748__$1 = state_66748;
var statearr_66754_68338 = state_66748__$1;
(statearr_66754_68338[(2)] = inst_66733);


cljs.core.async.impl.ioc_helpers.process_exception(state_66748__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66749 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_66748,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_66748__$1 = state_66748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66748__$1,(5),res__61936__auto__);
} else {
if((state_val_66749 === (5))){
var inst_66739 = (state_66748[(7)]);
var inst_66738 = (state_66748[(2)]);
var inst_66739__$1 = com.wsscode.common.async_cljs.throw_err(inst_66738);
var inst_66740 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66739__$1,new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));
var state_66748__$1 = (function (){var statearr_66755 = state_66748;
(statearr_66755[(7)] = inst_66739__$1);

return statearr_66755;
})();
if(inst_66740){
var statearr_66756_68347 = state_66748__$1;
(statearr_66756_68347[(1)] = (6));

} else {
var statearr_66757_68349 = state_66748__$1;
(statearr_66757_68349[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66749 === (6))){
var state_66748__$1 = state_66748;
var statearr_66758_68350 = state_66748__$1;
(statearr_66758_68350[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));

(statearr_66758_68350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66749 === (7))){
var inst_66739 = (state_66748[(7)]);
var state_66748__$1 = state_66748;
var statearr_66759_68351 = state_66748__$1;
(statearr_66759_68351[(2)] = inst_66739);

(statearr_66759_68351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66749 === (8))){
var inst_66744 = (state_66748[(2)]);
var state_66748__$1 = state_66748;
var statearr_66760_68354 = state_66748__$1;
(statearr_66760_68354[(2)] = inst_66744);


cljs.core.async.impl.ioc_helpers.process_exception(state_66748__$1);

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
});})(c__45808__auto__,res__61936__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto__,res__61936__auto__){
return (function() {
var com$wsscode$pathom$core$read_from_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$core$read_from_$_state_machine__45526__auto____0 = (function (){
var statearr_66762 = [null,null,null,null,null,null,null,null];
(statearr_66762[(0)] = com$wsscode$pathom$core$read_from_$_state_machine__45526__auto__);

(statearr_66762[(1)] = (1));

return statearr_66762;
});
var com$wsscode$pathom$core$read_from_$_state_machine__45526__auto____1 = (function (state_66748){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_66748);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e66765){if((e66765 instanceof Object)){
var ex__45529__auto__ = e66765;
var statearr_66766_68358 = state_66748;
(statearr_66766_68358[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66765;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68360 = state_66748;
state_66748 = G__68360;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$core$read_from_$_state_machine__45526__auto__ = function(state_66748){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$read_from_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$read_from_$_state_machine__45526__auto____1.call(this,state_66748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$read_from_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$read_from_$_state_machine__45526__auto____0;
com$wsscode$pathom$core$read_from_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$read_from_$_state_machine__45526__auto____1;
return com$wsscode$pathom$core$read_from_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,res__61936__auto__))
})();
var state__45810__auto__ = (function (){var statearr_66768 = f__45809__auto__();
(statearr_66768[(6)] = c__45808__auto__);

return statearr_66768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,res__61936__auto__))
);

return c__45808__auto__;
} else {
var res = res__61936__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194))){
return new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137);
} else {
return res;
}
}
});
com.wsscode.pathom.core.native_map_QMARK_ = (function com$wsscode$pathom$core$native_map_QMARK_(x){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(x),cljs.core.PersistentArrayMap)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(x),cljs.core.PersistentHashMap)));
});
/**
 * Walk the structure and transduce every map with xform.
 */
com.wsscode.pathom.core.transduce_maps = (function com$wsscode$pathom$core$transduce_maps(xform,input){
return clojure.walk.prewalk((function com$wsscode$pathom$core$transduce_maps_$_elide_items_walk(x){
if(com.wsscode.pathom.core.native_map_QMARK_(x)){
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,xform,x),cljs.core.meta(x));
} else {
return x;
}
}),input);
});
/**
 * Recursivelly transduce children on the AST, you can use this to apply filter/transformations
 *   on a whole AST. Each iteration of the transducer will get a single AST node to process.
 * 
 *   ```
 *   (->> [:a {:b [:c :d]} :e]
 *     (p/query->ast)
 *     (p/transduce-children (remove (comp #{:a :c} :key)))
 *     (p/ast->query))
 *   ; => [{:b [:d]} :e]
 *   ```
 */
com.wsscode.pathom.core.transduce_children = (function com$wsscode$pathom$core$transduce_children(xform,p__66779){
var map__66780 = p__66779;
var map__66780__$1 = (((((!((map__66780 == null))))?(((((map__66780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66780):map__66780);
var node = map__66780__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66780__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__66784 = node;
if(cljs.core.seq(children)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__66784,new cljs.core.Keyword(null,"children","children",-940561982),((function (G__66784,map__66780,map__66780__$1,node,children){
return (function (children__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__66784,map__66780,map__66780__$1,node,children){
return (function (p1__66776_SHARP_){
return (com.wsscode.pathom.core.transduce_children.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.transduce_children.cljs$core$IFn$_invoke$arity$2(xform,p1__66776_SHARP_) : com.wsscode.pathom.core.transduce_children.call(null,xform,p1__66776_SHARP_));
});})(G__66784,map__66780,map__66780__$1,node,children))
)),children__$1);
});})(G__66784,map__66780,map__66780__$1,node,children))
);
} else {
return G__66784;
}
});
/**
 * Removes any item on set item-set from the input
 */
com.wsscode.pathom.core.elide_items = (function com$wsscode$pathom$core$elide_items(item_set,input){
return cljs.core.with_meta(com.wsscode.pathom.core.transduce_maps(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__66787){
var vec__66788 = p__66787;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66788,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66788,(1),null);
return cljs.core.contains_QMARK_(item_set,v);
})),input),cljs.core.meta(input));
});
/**
 * Convert all ::p/not-found values of maps to nil
 */
com.wsscode.pathom.core.elide_not_found = (function com$wsscode$pathom$core$elide_not_found(input){
return com.wsscode.pathom.core.elide_items(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null], null), null),input);
});
com.wsscode.pathom.core.focus_subquery = com.wsscode.pathom.parser.focus_subquery;
com.wsscode.pathom.core.atom_QMARK_ = (function com$wsscode$pathom$core$atom_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});
com.wsscode.pathom.core.normalize_atom = (function com$wsscode$pathom$core$normalize_atom(x){
if(com.wsscode.pathom.core.atom_QMARK_(x)){
return x;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(x);
}
});
com.wsscode.pathom.core.special_outputs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),null], null), null);
com.wsscode.pathom.core.raw_entity = (function com$wsscode$pathom$core$raw_entity(p__66804){
var map__66805 = p__66804;
var map__66805__$1 = (((((!((map__66805 == null))))?(((((map__66805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66805):map__66805);
var env = map__66805__$1;
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66805__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,(function (){var or__4131__auto__ = entity_key;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031);
}
})());
});
com.wsscode.pathom.core.maybe_atom = (function com$wsscode$pathom$core$maybe_atom(x){
if(com.wsscode.pathom.core.atom_QMARK_(x)){
return cljs.core.deref(x);
} else {
return x;
}
});
/**
 * This is used for merging new parsed attributes from entity, works like regular merge but if the value from the right
 *   direction is not found, then the previous value will be kept.
 */
com.wsscode.pathom.core.entity_value_merge = (function com$wsscode$pathom$core$entity_value_merge(x,y){
if((y === new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137))){
return x;
} else {
return y;
}
});
/**
 * Fetch the entity according to the ::entity-key. If the entity is an IAtom, it will be derefed.
 * 
 *   If a second argument is sent, calls the parser against current element to guarantee that some fields are loaded. This
 *   is useful when you need to ensure some values are loaded in order to fetch some more complex data. NOTE: When using
 *   this call with an explicit vector of attributes the parser will not be invoked for attributes that already exist in
 *   the current value of the current entity.
 */
com.wsscode.pathom.core.entity = (function com$wsscode$pathom$core$entity(var_args){
var G__66814 = arguments.length;
switch (G__66814) {
case 1:
return com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1 = (function (env){
var e = com.wsscode.pathom.core.raw_entity(env);
return com.wsscode.pathom.core.maybe_atom(e);
});

com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2 = (function (p__66815,attributes){
var map__66816 = p__66815;
var map__66816__$1 = (((((!((map__66816 == null))))?(((((map__66816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66816):map__66816);
var env = map__66816__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66816__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var res__61936__auto__ = (function (){var G__66818 = env;
var G__66819 = cljs.core.filterv(cljs.core.complement(cljs.core.set(cljs.core.keys(e))),attributes);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__66818,G__66819) : parser.call(null,G__66818,G__66819));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__61936__auto__)){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,res__61936__auto__,e,map__66816,map__66816__$1,env,parser){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,res__61936__auto__,e,map__66816,map__66816__$1,env,parser){
return (function (state_66839){
var state_val_66840 = (state_66839[(1)]);
if((state_val_66840 === (1))){
var state_66839__$1 = state_66839;
var statearr_66842_68406 = state_66839__$1;
(statearr_66842_68406[(2)] = null);

(statearr_66842_68406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66840 === (2))){
var inst_66837 = (state_66839[(2)]);
var state_66839__$1 = state_66839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66839__$1,inst_66837);
} else {
if((state_val_66840 === (3))){
var inst_66823 = (state_66839[(2)]);
var state_66839__$1 = state_66839;
var statearr_66845_68409 = state_66839__$1;
(statearr_66845_68409[(2)] = inst_66823);


cljs.core.async.impl.ioc_helpers.process_exception(state_66839__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66840 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_66839,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_66839__$1 = state_66839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66839__$1,(5),res__61936__auto__);
} else {
if((state_val_66840 === (5))){
var inst_66829 = (state_66839[(7)]);
var inst_66828 = (state_66839[(2)]);
var inst_66829__$1 = com.wsscode.common.async_cljs.throw_err(inst_66828);
var inst_66830 = cljs.core.map_QMARK_(inst_66829__$1);
var state_66839__$1 = (function (){var statearr_66847 = state_66839;
(statearr_66847[(7)] = inst_66829__$1);

return statearr_66847;
})();
if(inst_66830){
var statearr_66848_68411 = state_66839__$1;
(statearr_66848_68411[(1)] = (6));

} else {
var statearr_66849_68412 = state_66839__$1;
(statearr_66849_68412[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66840 === (6))){
var inst_66829 = (state_66839[(7)]);
var inst_66832 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.entity_value_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,inst_66829], 0));
var state_66839__$1 = state_66839;
var statearr_66851_68415 = state_66839__$1;
(statearr_66851_68415[(2)] = inst_66832);

(statearr_66851_68415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66840 === (7))){
var state_66839__$1 = state_66839;
var statearr_66853_68416 = state_66839__$1;
(statearr_66853_68416[(2)] = e);

(statearr_66853_68416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66840 === (8))){
var inst_66835 = (state_66839[(2)]);
var state_66839__$1 = state_66839;
var statearr_66856_68417 = state_66839__$1;
(statearr_66856_68417[(2)] = inst_66835);


cljs.core.async.impl.ioc_helpers.process_exception(state_66839__$1);

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
});})(c__45808__auto__,res__61936__auto__,e,map__66816,map__66816__$1,env,parser))
;
return ((function (switch__45525__auto__,c__45808__auto__,res__61936__auto__,e,map__66816,map__66816__$1,env,parser){
return (function() {
var com$wsscode$pathom$core$state_machine__45526__auto__ = null;
var com$wsscode$pathom$core$state_machine__45526__auto____0 = (function (){
var statearr_66858 = [null,null,null,null,null,null,null,null];
(statearr_66858[(0)] = com$wsscode$pathom$core$state_machine__45526__auto__);

(statearr_66858[(1)] = (1));

return statearr_66858;
});
var com$wsscode$pathom$core$state_machine__45526__auto____1 = (function (state_66839){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_66839);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e66861){if((e66861 instanceof Object)){
var ex__45529__auto__ = e66861;
var statearr_66862_68419 = state_66839;
(statearr_66862_68419[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66861;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68420 = state_66839;
state_66839 = G__68420;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__45526__auto__ = function(state_66839){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__45526__auto____1.call(this,state_66839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__45526__auto____0;
com$wsscode$pathom$core$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__45526__auto____1;
return com$wsscode$pathom$core$state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,res__61936__auto__,e,map__66816,map__66816__$1,env,parser))
})();
var state__45810__auto__ = (function (){var statearr_66865 = f__45809__auto__();
(statearr_66865[(6)] = c__45808__auto__);

return statearr_66865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,res__61936__auto__,e,map__66816,map__66816__$1,env,parser))
);

return c__45808__auto__;
} else {
var res = res__61936__auto__;
if(cljs.core.map_QMARK_(res)){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.entity_value_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,res], 0));
} else {
return e;
}
}
});

com.wsscode.pathom.core.entity.cljs$lang$maxFixedArity = 2;

/**
 * Helper function to fetch a single attribute from current entity.
 */
com.wsscode.pathom.core.entity_attr = (function com$wsscode$pathom$core$entity_attr(var_args){
var G__66867 = arguments.length;
switch (G__66867) {
case 2:
return com.wsscode.pathom.core.entity_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.wsscode.pathom.core.entity_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.core.entity_attr.cljs$core$IFn$_invoke$arity$2 = (function (env,attr){
var res__61936__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__61936__auto__)){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,res__61936__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,res__61936__auto__){
return (function (state_66883){
var state_val_66884 = (state_66883[(1)]);
if((state_val_66884 === (1))){
var state_66883__$1 = state_66883;
var statearr_66888_68424 = state_66883__$1;
(statearr_66888_68424[(2)] = null);

(statearr_66888_68424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66884 === (2))){
var inst_66881 = (state_66883[(2)]);
var state_66883__$1 = state_66883;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66883__$1,inst_66881);
} else {
if((state_val_66884 === (3))){
var inst_66871 = (state_66883[(2)]);
var state_66883__$1 = state_66883;
var statearr_66890_68425 = state_66883__$1;
(statearr_66890_68425[(2)] = inst_66871);


cljs.core.async.impl.ioc_helpers.process_exception(state_66883__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66884 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_66883,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_66883__$1 = state_66883;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66883__$1,(5),res__61936__auto__);
} else {
if((state_val_66884 === (5))){
var inst_66877 = (state_66883[(2)]);
var inst_66878 = com.wsscode.common.async_cljs.throw_err(inst_66877);
var inst_66879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66878,attr);
var state_66883__$1 = state_66883;
var statearr_66894_68426 = state_66883__$1;
(statearr_66894_68426[(2)] = inst_66879);


cljs.core.async.impl.ioc_helpers.process_exception(state_66883__$1);

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
var com$wsscode$pathom$core$state_machine__45526__auto__ = null;
var com$wsscode$pathom$core$state_machine__45526__auto____0 = (function (){
var statearr_66897 = [null,null,null,null,null,null,null];
(statearr_66897[(0)] = com$wsscode$pathom$core$state_machine__45526__auto__);

(statearr_66897[(1)] = (1));

return statearr_66897;
});
var com$wsscode$pathom$core$state_machine__45526__auto____1 = (function (state_66883){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_66883);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e66898){if((e66898 instanceof Object)){
var ex__45529__auto__ = e66898;
var statearr_66899_68427 = state_66883;
(statearr_66899_68427[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66898;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68428 = state_66883;
state_66883 = G__68428;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__45526__auto__ = function(state_66883){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__45526__auto____1.call(this,state_66883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__45526__auto____0;
com$wsscode$pathom$core$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__45526__auto____1;
return com$wsscode$pathom$core$state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,res__61936__auto__))
})();
var state__45810__auto__ = (function (){var statearr_66902 = f__45809__auto__();
(statearr_66902[(6)] = c__45808__auto__);

return statearr_66902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,res__61936__auto__))
);

return c__45808__auto__;
} else {
var e = res__61936__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
}
});

com.wsscode.pathom.core.entity_attr.cljs$core$IFn$_invoke$arity$3 = (function (env,attr,default$){
var res__61936__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__61936__auto__)){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,res__61936__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,res__61936__auto__){
return (function (state_66928){
var state_val_66929 = (state_66928[(1)]);
if((state_val_66929 === (1))){
var state_66928__$1 = state_66928;
var statearr_66933_68436 = state_66928__$1;
(statearr_66933_68436[(2)] = null);

(statearr_66933_68436[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66929 === (2))){
var inst_66924 = (state_66928[(2)]);
var state_66928__$1 = state_66928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66928__$1,inst_66924);
} else {
if((state_val_66929 === (3))){
var inst_66907 = (state_66928[(2)]);
var state_66928__$1 = state_66928;
var statearr_66935_68449 = state_66928__$1;
(statearr_66935_68449[(2)] = inst_66907);


cljs.core.async.impl.ioc_helpers.process_exception(state_66928__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66929 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_66928,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_66928__$1 = state_66928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66928__$1,(5),res__61936__auto__);
} else {
if((state_val_66929 === (5))){
var inst_66914 = (state_66928[(7)]);
var inst_66912 = (state_66928[(2)]);
var inst_66913 = com.wsscode.common.async_cljs.throw_err(inst_66912);
var inst_66914__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66913,attr);
var inst_66915 = [null,null,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null];
var inst_66916 = (new cljs.core.PersistentArrayMap(null,2,inst_66915,null));
var inst_66917 = (new cljs.core.PersistentHashSet(null,inst_66916,null));
var inst_66918 = (inst_66917.cljs$core$IFn$_invoke$arity$1 ? inst_66917.cljs$core$IFn$_invoke$arity$1(inst_66914__$1) : inst_66917.call(null,inst_66914__$1));
var state_66928__$1 = (function (){var statearr_66940 = state_66928;
(statearr_66940[(7)] = inst_66914__$1);

return statearr_66940;
})();
if(cljs.core.truth_(inst_66918)){
var statearr_66942_68459 = state_66928__$1;
(statearr_66942_68459[(1)] = (6));

} else {
var statearr_66943_68460 = state_66928__$1;
(statearr_66943_68460[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66929 === (6))){
var state_66928__$1 = state_66928;
var statearr_66944_68461 = state_66928__$1;
(statearr_66944_68461[(2)] = default$);

(statearr_66944_68461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66929 === (7))){
var inst_66914 = (state_66928[(7)]);
var state_66928__$1 = state_66928;
var statearr_66947_68463 = state_66928__$1;
(statearr_66947_68463[(2)] = inst_66914);

(statearr_66947_68463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66929 === (8))){
var inst_66922 = (state_66928[(2)]);
var state_66928__$1 = state_66928;
var statearr_66948_68464 = state_66928__$1;
(statearr_66948_68464[(2)] = inst_66922);


cljs.core.async.impl.ioc_helpers.process_exception(state_66928__$1);

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
});})(c__45808__auto__,res__61936__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto__,res__61936__auto__){
return (function() {
var com$wsscode$pathom$core$state_machine__45526__auto__ = null;
var com$wsscode$pathom$core$state_machine__45526__auto____0 = (function (){
var statearr_66952 = [null,null,null,null,null,null,null,null];
(statearr_66952[(0)] = com$wsscode$pathom$core$state_machine__45526__auto__);

(statearr_66952[(1)] = (1));

return statearr_66952;
});
var com$wsscode$pathom$core$state_machine__45526__auto____1 = (function (state_66928){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_66928);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e66954){if((e66954 instanceof Object)){
var ex__45529__auto__ = e66954;
var statearr_66956_68469 = state_66928;
(statearr_66956_68469[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66954;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68471 = state_66928;
state_66928 = G__68471;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__45526__auto__ = function(state_66928){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__45526__auto____1.call(this,state_66928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__45526__auto____0;
com$wsscode$pathom$core$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__45526__auto____1;
return com$wsscode$pathom$core$state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,res__61936__auto__))
})();
var state__45810__auto__ = (function (){var statearr_66959 = f__45809__auto__();
(statearr_66959[(6)] = c__45808__auto__);

return statearr_66959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,res__61936__auto__))
);

return c__45808__auto__;
} else {
var e = res__61936__auto__;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
if(cljs.core.truth_((function (){var fexpr__66964 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null], null), null);
return (fexpr__66964.cljs$core$IFn$_invoke$arity$1 ? fexpr__66964.cljs$core$IFn$_invoke$arity$1(x) : fexpr__66964.call(null,x));
})())){
return default$;
} else {
return x;
}
}
});

com.wsscode.pathom.core.entity_attr.cljs$lang$maxFixedArity = 3;

com.wsscode.pathom.core.entity_BANG_ = (function com$wsscode$pathom$core$entity_BANG_(p__66968,attributes){
var map__66969 = p__66968;
var map__66969__$1 = (((((!((map__66969 == null))))?(((((map__66969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66969):map__66969);
var env = map__66969__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66969__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var res__61936__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,attributes);
if(com.wsscode.common.async_cljs.chan_QMARK_(res__61936__auto__)){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,res__61936__auto__,map__66969,map__66969__$1,env,path){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,res__61936__auto__,map__66969,map__66969__$1,env,path){
return (function (state_67004){
var state_val_67005 = (state_67004[(1)]);
if((state_val_67005 === (1))){
var state_67004__$1 = state_67004;
var statearr_67008_68476 = state_67004__$1;
(statearr_67008_68476[(2)] = null);

(statearr_67008_68476[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67005 === (2))){
var inst_67001 = (state_67004[(2)]);
var state_67004__$1 = state_67004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67004__$1,inst_67001);
} else {
if((state_val_67005 === (3))){
var inst_66973 = (state_67004[(2)]);
var state_67004__$1 = state_67004;
var statearr_67009_68479 = state_67004__$1;
(statearr_67009_68479[(2)] = inst_66973);


cljs.core.async.impl.ioc_helpers.process_exception(state_67004__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67005 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_67004,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_67004__$1 = state_67004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67004__$1,(5),res__61936__auto__);
} else {
if((state_val_67005 === (5))){
var inst_66980 = (state_67004[(7)]);
var inst_66986 = (state_67004[(8)]);
var inst_66979 = (state_67004[(2)]);
var inst_66980__$1 = com.wsscode.common.async_cljs.throw_err(inst_66979);
var inst_66982 = cljs.core.set(attributes);
var inst_66983 = com.wsscode.pathom.core.elide_not_found(inst_66980__$1);
var inst_66984 = cljs.core.keys(inst_66983);
var inst_66985 = cljs.core.set(inst_66984);
var inst_66986__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_66982,inst_66985);
var inst_66987 = cljs.core.seq(inst_66986__$1);
var state_67004__$1 = (function (){var statearr_67010 = state_67004;
(statearr_67010[(7)] = inst_66980__$1);

(statearr_67010[(8)] = inst_66986__$1);

return statearr_67010;
})();
if(inst_66987){
var statearr_67011_68486 = state_67004__$1;
(statearr_67011_68486[(1)] = (6));

} else {
var statearr_67012_68487 = state_67004__$1;
(statearr_67012_68487[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67005 === (6))){
var inst_66980 = (state_67004[(7)]);
var inst_66986 = (state_67004[(8)]);
var inst_66989 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_66986], 0));
var inst_66990 = ["Entity attributes ",inst_66989," could not be realized"].join('');
var inst_66992 = [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword("com.wsscode.pathom.core","missing-attributes","com.wsscode.pathom.core/missing-attributes",1114260849)];
var inst_66993 = [inst_66980,path,inst_66986];
var inst_66994 = cljs.core.PersistentHashMap.fromArrays(inst_66992,inst_66993);
var inst_66995 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(inst_66990,inst_66994);
var inst_66996 = (function(){throw inst_66995})();
var state_67004__$1 = state_67004;
var statearr_67013_68497 = state_67004__$1;
(statearr_67013_68497[(2)] = inst_66996);

(statearr_67013_68497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67005 === (7))){
var state_67004__$1 = state_67004;
var statearr_67014_68500 = state_67004__$1;
(statearr_67014_68500[(2)] = null);

(statearr_67014_68500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67005 === (8))){
var inst_66980 = (state_67004[(7)]);
var inst_66999 = (state_67004[(2)]);
var state_67004__$1 = (function (){var statearr_67015 = state_67004;
(statearr_67015[(9)] = inst_66999);

return statearr_67015;
})();
var statearr_67016_68501 = state_67004__$1;
(statearr_67016_68501[(2)] = inst_66980);


cljs.core.async.impl.ioc_helpers.process_exception(state_67004__$1);

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
});})(c__45808__auto__,res__61936__auto__,map__66969,map__66969__$1,env,path))
;
return ((function (switch__45525__auto__,c__45808__auto__,res__61936__auto__,map__66969,map__66969__$1,env,path){
return (function() {
var com$wsscode$pathom$core$entity_BANG__$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$core$entity_BANG__$_state_machine__45526__auto____0 = (function (){
var statearr_67020 = [null,null,null,null,null,null,null,null,null,null];
(statearr_67020[(0)] = com$wsscode$pathom$core$entity_BANG__$_state_machine__45526__auto__);

(statearr_67020[(1)] = (1));

return statearr_67020;
});
var com$wsscode$pathom$core$entity_BANG__$_state_machine__45526__auto____1 = (function (state_67004){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_67004);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e67021){if((e67021 instanceof Object)){
var ex__45529__auto__ = e67021;
var statearr_67023_68508 = state_67004;
(statearr_67023_68508[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67021;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68510 = state_67004;
state_67004 = G__68510;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$core$entity_BANG__$_state_machine__45526__auto__ = function(state_67004){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$entity_BANG__$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$entity_BANG__$_state_machine__45526__auto____1.call(this,state_67004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$entity_BANG__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$entity_BANG__$_state_machine__45526__auto____0;
com$wsscode$pathom$core$entity_BANG__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$entity_BANG__$_state_machine__45526__auto____1;
return com$wsscode$pathom$core$entity_BANG__$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,res__61936__auto__,map__66969,map__66969__$1,env,path))
})();
var state__45810__auto__ = (function (){var statearr_67026 = f__45809__auto__();
(statearr_67026[(6)] = c__45808__auto__);

return statearr_67026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,res__61936__auto__,map__66969,map__66969__$1,env,path))
);

return c__45808__auto__;
} else {
var e = res__61936__auto__;
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attributes),cljs.core.set(cljs.core.keys(com.wsscode.pathom.core.elide_not_found(e))));
if(cljs.core.seq(missing)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Entity attributes ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing], 0))," could not be realized"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),e,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),path,new cljs.core.Keyword("com.wsscode.pathom.core","missing-attributes","com.wsscode.pathom.core/missing-attributes",1114260849),missing], null));
} else {
}

return e;
}
});
/**
 * Like entity-attr. Raises an exception if the property can't be retrieved.
 */
com.wsscode.pathom.core.entity_attr_BANG_ = (function com$wsscode$pathom$core$entity_attr_BANG_(env,attr){
var res__61936__auto__ = com.wsscode.pathom.core.entity_BANG_(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__61936__auto__)){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,res__61936__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,res__61936__auto__){
return (function (state_67039){
var state_val_67040 = (state_67039[(1)]);
if((state_val_67040 === (1))){
var state_67039__$1 = state_67039;
var statearr_67044_68518 = state_67039__$1;
(statearr_67044_68518[(2)] = null);

(statearr_67044_68518[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67040 === (2))){
var inst_67037 = (state_67039[(2)]);
var state_67039__$1 = state_67039;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67039__$1,inst_67037);
} else {
if((state_val_67040 === (3))){
var inst_67027 = (state_67039[(2)]);
var state_67039__$1 = state_67039;
var statearr_67047_68525 = state_67039__$1;
(statearr_67047_68525[(2)] = inst_67027);


cljs.core.async.impl.ioc_helpers.process_exception(state_67039__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67040 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_67039,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_67039__$1 = state_67039;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67039__$1,(5),res__61936__auto__);
} else {
if((state_val_67040 === (5))){
var inst_67033 = (state_67039[(2)]);
var inst_67034 = com.wsscode.common.async_cljs.throw_err(inst_67033);
var inst_67035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67034,attr);
var state_67039__$1 = state_67039;
var statearr_67049_68526 = state_67039__$1;
(statearr_67049_68526[(2)] = inst_67035);


cljs.core.async.impl.ioc_helpers.process_exception(state_67039__$1);

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
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__45526__auto____0 = (function (){
var statearr_67053 = [null,null,null,null,null,null,null];
(statearr_67053[(0)] = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__45526__auto__);

(statearr_67053[(1)] = (1));

return statearr_67053;
});
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__45526__auto____1 = (function (state_67039){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_67039);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e67055){if((e67055 instanceof Object)){
var ex__45529__auto__ = e67055;
var statearr_67057_68531 = state_67039;
(statearr_67057_68531[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67055;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68533 = state_67039;
state_67039 = G__68533;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__45526__auto__ = function(state_67039){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__45526__auto____1.call(this,state_67039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__45526__auto____0;
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__45526__auto____1;
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,res__61936__auto__))
})();
var state__45810__auto__ = (function (){var statearr_67058 = f__45809__auto__();
(statearr_67058[(6)] = c__45808__auto__);

return statearr_67058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,res__61936__auto__))
);

return c__45808__auto__;
} else {
var e = res__61936__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
}
});
/**
 * Helper to swap the current entity value.
 */
com.wsscode.pathom.core.swap_entity_BANG_ = (function com$wsscode$pathom$core$swap_entity_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___68534 = arguments.length;
var i__4731__auto___68535 = (0);
while(true){
if((i__4731__auto___68535 < len__4730__auto___68534)){
args__4736__auto__.push((arguments[i__4731__auto___68535]));

var G__68536 = (i__4731__auto___68535 + (1));
i__4731__auto___68535 = G__68536;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.swap_entity_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (env,fn,args){
var e = com.wsscode.pathom.core.raw_entity(env);
if(com.wsscode.pathom.core.atom_QMARK_(e)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,e,fn,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fn,e,args);
}
});

com.wsscode.pathom.core.swap_entity_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.core.swap_entity_BANG_.cljs$lang$applyTo = (function (seq67060){
var G__67061 = cljs.core.first(seq67060);
var seq67060__$1 = cljs.core.next(seq67060);
var G__67062 = cljs.core.first(seq67060__$1);
var seq67060__$2 = cljs.core.next(seq67060__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67061,G__67062,seq67060__$2);
});

/**
 * Given an AST, find the child with a given key and run update against it.
 */
com.wsscode.pathom.core.update_child = (function com$wsscode$pathom$core$update_child(var_args){
var args__4736__auto__ = [];
var len__4730__auto___68540 = arguments.length;
var i__4731__auto___68541 = (0);
while(true){
if((i__4731__auto___68541 < len__4730__auto___68540)){
args__4736__auto__.push((arguments[i__4731__auto___68541]));

var G__68543 = (i__4731__auto___68541 + (1));
i__4731__auto___68541 = G__68543;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.update_child.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.update_child.cljs$core$IFn$_invoke$arity$variadic = (function (ast,key,args){
var temp__5718__auto__ = (function (){var G__67071 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var G__67071__$1 = (((G__67071 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__67071));
var G__67071__$2 = (((G__67071__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([key]),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.second),G__67071__$1));
if((G__67071__$2 == null)){
return null;
} else {
return cljs.core.ffirst(G__67071__$2);
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var idx = temp__5718__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),idx], null),args);
} else {
return ast;
}
});

com.wsscode.pathom.core.update_child.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.core.update_child.cljs$lang$applyTo = (function (seq67066){
var G__67067 = cljs.core.first(seq67066);
var seq67066__$1 = cljs.core.next(seq67066);
var G__67068 = cljs.core.first(seq67066__$1);
var seq67066__$2 = cljs.core.next(seq67066__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67067,G__67068,seq67066__$2);
});

/**
 * Given an AST, find the child with a given key and run update against it.
 */
com.wsscode.pathom.core.update_recursive_depth = (function com$wsscode$pathom$core$update_recursive_depth(var_args){
var args__4736__auto__ = [];
var len__4730__auto___68550 = arguments.length;
var i__4731__auto___68551 = (0);
while(true){
if((i__4731__auto___68551 < len__4730__auto___68550)){
args__4736__auto__.push((arguments[i__4731__auto___68551]));

var G__68553 = (i__4731__auto___68551 + (1));
i__4731__auto___68551 = G__68553;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.update_recursive_depth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.update_recursive_depth.cljs$core$IFn$_invoke$arity$variadic = (function (ast,key,args){
var temp__5718__auto__ = (function (){var G__67086 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var G__67086__$1 = (((G__67086 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__67086));
var G__67086__$2 = (((G__67086__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (G__67086,G__67086__$1){
return (function (p1__67077_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__67077_SHARP_))) && (cljs.core.pos_int_QMARK_(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__67077_SHARP_))));
});})(G__67086,G__67086__$1))
,cljs.core.second),G__67086__$1));
if((G__67086__$2 == null)){
return null;
} else {
return cljs.core.ffirst(G__67086__$2);
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var idx = temp__5718__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,ast,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),idx,new cljs.core.Keyword(null,"query","query",-1288509510)], null),args);
} else {
return ast;
}
});

com.wsscode.pathom.core.update_recursive_depth.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.core.update_recursive_depth.cljs$lang$applyTo = (function (seq67079){
var G__67080 = cljs.core.first(seq67079);
var seq67079__$1 = cljs.core.next(seq67079);
var G__67081 = cljs.core.first(seq67079__$1);
var seq67079__$2 = cljs.core.next(seq67079__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67080,G__67081,seq67079__$2);
});

com.wsscode.pathom.core.remove_query_wildcard = (function com$wsscode$pathom$core$remove_query_wildcard(query){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(query)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null)),query);
});
com.wsscode.pathom.core.default_union_path = (function com$wsscode$pathom$core$default_union_path(p__67092){
var map__67093 = p__67092;
var map__67093__$1 = (((((!((map__67093 == null))))?(((((map__67093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67093):map__67093);
var env = map__67093__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67093__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5718__auto__ = (function (){var G__67097 = cljs.core.keys(query);
var G__67097__$1 = (((G__67097 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__67097,e,map__67093,map__67093__$1,env,query){
return (function (p1__67091_SHARP_){
return cljs.core.contains_QMARK_(e,p1__67091_SHARP_);
});})(G__67097,e,map__67093,map__67093__$1,env,query))
,G__67097));
if((G__67097__$1 == null)){
return null;
} else {
return cljs.core.first(G__67097__$1);
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var path = temp__5718__auto__;
return path;
} else {
return null;
}
});
/**
 * Runs a parser with current sub-query. When run with an `entity` argument, that entity is set as the new environment
 * value of `::entity`, and the subquery is parsed with that new environment. When run without an `entity` it
 * parses the current subquery in the context of whatever entity was already in `::entity` of the env.
 */
com.wsscode.pathom.core.join = (function com$wsscode$pathom$core$join(var_args){
var G__67103 = arguments.length;
switch (G__67103) {
case 2:
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2 = (function (entity,p__67106){
var map__67107 = p__67106;
var map__67107__$1 = (((((!((map__67107 == null))))?(((((map__67107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67107):map__67107);
var env = map__67107__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67107__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67107__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67107__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
if(com.wsscode.pathom.core.atom_QMARK_(entity)){
var temp__5718__auto__ = new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(entity));
if(cljs.core.truth_(temp__5718__auto__)){
var env_SINGLEQUOTE_ = temp__5718__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(entity,cljs.core.dissoc,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378));

return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env_SINGLEQUOTE_,new cljs.core.Keyword(null,"ast","ast",-860334068),ast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510),query,entity_key,entity], 0)));
} else {
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,entity));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378).cljs$core$IFn$_invoke$arity$1(entity))){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)),new cljs.core.Keyword(null,"ast","ast",-860334068),ast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510),query,entity_key,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)))], 0)));
} else {
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(entity)));
}
}
});

com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1 = (function (p__67114){
var map__67115 = p__67114;
var map__67115__$1 = (((((!((map__67115 == null))))?(((((map__67115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67115):map__67115);
var env = map__67115__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67115__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67115__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67115__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var union_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67115__$1,new cljs.core.Keyword("com.wsscode.pathom.core","union-path","com.wsscode.pathom.core/union-path",-2083478095));
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67115__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67115__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67115__$1,new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var placeholder_QMARK_ = cljs.core.contains_QMARK_((function (){var or__4131__auto__ = placeholder_prefixes;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),(function (){var G__67118 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast);
if((G__67118 == null)){
return null;
} else {
return cljs.core.namespace(G__67118);
}
})());
var union_path__$1 = ((com.wsscode.pathom.core.union_children_QMARK_(ast))?(function (){var union_path__$1 = (function (){var or__4131__auto__ = union_path;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.core.default_union_path;
}
})();
var path = ((cljs.core.fn_QMARK_(union_path__$1))?(union_path__$1.cljs$core$IFn$_invoke$arity$1 ? union_path__$1.cljs$core$IFn$_invoke$arity$1(env) : union_path__$1.call(null,env)):(((union_path__$1 instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.entity_BANG_(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_path__$1], null)),union_path__$1):null));
return path;
})():null);
var query__$1 = ((com.wsscode.pathom.core.union_children_QMARK_(ast))?(function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,union_path__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","blank-union","com.wsscode.pathom.core/blank-union",1901666614);
}
})():query);
var env_SINGLEQUOTE_ = (function (){var G__67123 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__67125 = env;
if(cljs.core.truth_(union_path__$1)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__67125,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,union_path__$1);
} else {
return G__67125;
}
})(),new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),query__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-join-key","com.wsscode.pathom.core/parent-join-key",-289005491),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast)], 0));
if((!(placeholder_QMARK_))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67123,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404)], 0));
} else {
return G__67123;
}
})();
var env_SINGLEQUOTE___$1 = (cljs.core.truth_(processing_sequence)?(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword("com.wsscode.pathom.core","stop-sequence?","com.wsscode.pathom.core/stop-sequence?",-1854144982).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(processing_sequence));
if(cljs.core.truth_(and__4120__auto__)){
return (!(placeholder_QMARK_));
} else {
return and__4120__auto__;
}
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637)):cljs.core.update.cljs$core$IFn$_invoke$arity$6(env_SINGLEQUOTE_,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),cljs.core.vary_meta,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.core","stop-sequence?","com.wsscode.pathom.core/stop-sequence?",-1854144982),true)):env_SINGLEQUOTE_);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","blank-union","com.wsscode.pathom.core/blank-union",1901666614),query__$1)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if((query__$1 == null)){
return e;
} else {
if(cljs.core.nat_int_QMARK_(query__$1)){
if((query__$1 === (0))){
return null;
} else {
var parent_query_SINGLEQUOTE_ = com.wsscode.pathom.core.ast__GT_query(com.wsscode.pathom.core.update_recursive_depth.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.query__GT_ast(parent_query),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dec], 0)));
var G__67131 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env_SINGLEQUOTE___$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),parent_query_SINGLEQUOTE_);
var G__67132 = com.wsscode.pathom.core.remove_query_wildcard(parent_query_SINGLEQUOTE_);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__67131,G__67132) : parser.call(null,G__67131,G__67132));
}
} else {
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null),query__$1))){
var res__61936__auto__ = (function (){var G__67135 = env_SINGLEQUOTE___$1;
var G__67136 = com.wsscode.pathom.core.remove_query_wildcard(query__$1);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__67135,G__67136) : parser.call(null,G__67135,G__67136));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__61936__auto__)){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,res__61936__auto__,e,placeholder_QMARK_,union_path__$1,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__67115,map__67115__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,res__61936__auto__,e,placeholder_QMARK_,union_path__$1,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__67115,map__67115__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes){
return (function (state_67151){
var state_val_67152 = (state_67151[(1)]);
if((state_val_67152 === (1))){
var state_67151__$1 = state_67151;
var statearr_67154_68612 = state_67151__$1;
(statearr_67154_68612[(2)] = null);

(statearr_67154_68612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67152 === (2))){
var inst_67149 = (state_67151[(2)]);
var state_67151__$1 = state_67151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67151__$1,inst_67149);
} else {
if((state_val_67152 === (3))){
var inst_67138 = (state_67151[(2)]);
var state_67151__$1 = state_67151;
var statearr_67159_68614 = state_67151__$1;
(statearr_67159_68614[(2)] = inst_67138);


cljs.core.async.impl.ioc_helpers.process_exception(state_67151__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67152 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_67151,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_67151__$1 = state_67151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67151__$1,(5),res__61936__auto__);
} else {
if((state_val_67152 === (5))){
var inst_67143 = (state_67151[(2)]);
var inst_67144 = com.wsscode.common.async_cljs.throw_err(inst_67143);
var inst_67146 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env_SINGLEQUOTE___$1);
var inst_67147 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_67146,inst_67144], 0));
var state_67151__$1 = state_67151;
var statearr_67160_68615 = state_67151__$1;
(statearr_67160_68615[(2)] = inst_67147);


cljs.core.async.impl.ioc_helpers.process_exception(state_67151__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__45808__auto__,res__61936__auto__,e,placeholder_QMARK_,union_path__$1,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__67115,map__67115__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes))
;
return ((function (switch__45525__auto__,c__45808__auto__,res__61936__auto__,e,placeholder_QMARK_,union_path__$1,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__67115,map__67115__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes){
return (function() {
var com$wsscode$pathom$core$state_machine__45526__auto__ = null;
var com$wsscode$pathom$core$state_machine__45526__auto____0 = (function (){
var statearr_67161 = [null,null,null,null,null,null,null];
(statearr_67161[(0)] = com$wsscode$pathom$core$state_machine__45526__auto__);

(statearr_67161[(1)] = (1));

return statearr_67161;
});
var com$wsscode$pathom$core$state_machine__45526__auto____1 = (function (state_67151){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_67151);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e67162){if((e67162 instanceof Object)){
var ex__45529__auto__ = e67162;
var statearr_67163_68620 = state_67151;
(statearr_67163_68620[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67162;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68622 = state_67151;
state_67151 = G__68622;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__45526__auto__ = function(state_67151){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__45526__auto____1.call(this,state_67151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__45526__auto____0;
com$wsscode$pathom$core$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__45526__auto____1;
return com$wsscode$pathom$core$state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,res__61936__auto__,e,placeholder_QMARK_,union_path__$1,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__67115,map__67115__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes))
})();
var state__45810__auto__ = (function (){var statearr_67165 = f__45809__auto__();
(statearr_67165[(6)] = c__45808__auto__);

return statearr_67165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,res__61936__auto__,e,placeholder_QMARK_,union_path__$1,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__67115,map__67115__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes))
);

return c__45808__auto__;
} else {
var computed_e = res__61936__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env_SINGLEQUOTE___$1),computed_e], 0));
}
} else {
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env_SINGLEQUOTE___$1,query__$1) : parser.call(null,env_SINGLEQUOTE___$1,query__$1));

}
}
}
}
});

com.wsscode.pathom.core.join.cljs$lang$maxFixedArity = 2;

com.wsscode.pathom.core.join_seq_parallel = (function com$wsscode$pathom$core$join_seq_parallel(p__67169,coll){
var map__67170 = p__67169;
var map__67170__$1 = (((((!((map__67170 == null))))?(((((map__67170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67170):map__67170);
var env = map__67170__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67170__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67170__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67170__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
var query_SINGLEQUOTE_ = ((cljs.core.nat_int_QMARK_(query))?parent_query:query);
if(((cljs.core.seq(coll)) && (((cljs.core.vector_QMARK_(query)) || (cljs.core.pos_int_QMARK_(query)))))){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query){
return (function (state_67282){
var state_val_67284 = (state_67282[(1)]);
if((state_val_67284 === (7))){
var inst_67278 = (state_67282[(2)]);
var state_67282__$1 = state_67282;
var statearr_67288_68627 = state_67282__$1;
(statearr_67288_68627[(2)] = inst_67278);


cljs.core.async.impl.ioc_helpers.process_exception(state_67282__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67284 === (1))){
var state_67282__$1 = state_67282;
var statearr_67290_68629 = state_67282__$1;
(statearr_67290_68629[(2)] = null);

(statearr_67290_68629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67284 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_67282,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_67182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_67282__$1 = state_67282;
if(cljs.core.truth_(inst_67182)){
var statearr_67292_68630 = state_67282__$1;
(statearr_67292_68630[(1)] = (5));

} else {
var statearr_67293_68631 = state_67282__$1;
(statearr_67293_68631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67284 === (15))){
var inst_67246 = (state_67282[(7)]);
var inst_67247 = (state_67282[(8)]);
var inst_67249 = (state_67282[(9)]);
var inst_67241 = (state_67282[(10)]);
var inst_67244 = (state_67282[(11)]);
var inst_67250 = (state_67282[(12)]);
var inst_67262 = (state_67282[(2)]);
var inst_67263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_67264 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_67266 = cljs.core.range.cljs$core$IFn$_invoke$arity$0();
var inst_67267 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_67250,inst_67266);
var inst_67268 = cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(inst_67263,inst_67267);
var inst_67269 = (function (){var from_chan = inst_67263;
var join_item = inst_67246;
var first_res = inst_67262;
var check_ast_opt_QMARK_ = inst_67244;
var vec__67238 = coll;
var out_chan = inst_67264;
var first__67240 = inst_67249;
var seq__67239 = inst_67250;
var ast = inst_67241;
var env__$1 = inst_67247;
var head = inst_67249;
var tail = inst_67250;
return ((function (from_chan,join_item,first_res,check_ast_opt_QMARK_,vec__67238,out_chan,first__67240,seq__67239,ast,env__$1,head,tail,inst_67246,inst_67247,inst_67249,inst_67241,inst_67244,inst_67250,inst_67262,inst_67263,inst_67264,inst_67266,inst_67267,inst_67268,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline(p__67297,res_ch){
var vec__67298 = p__67297;
var ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67298,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67298,(1),null);
var c__45808__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto____$1,vec__67298,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,vec__67238,out_chan,first__67240,seq__67239,ast,env__$1,head,tail,inst_67246,inst_67247,inst_67249,inst_67241,inst_67244,inst_67250,inst_67262,inst_67263,inst_67264,inst_67266,inst_67267,inst_67268,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto____$1,vec__67298,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,vec__67238,out_chan,first__67240,seq__67239,ast,env__$1,head,tail,inst_67246,inst_67247,inst_67249,inst_67241,inst_67244,inst_67250,inst_67262,inst_67263,inst_67264,inst_67266,inst_67267,inst_67268,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query){
return (function (state_67344){
var state_val_67345 = (state_67344[(1)]);
if((state_val_67345 === (7))){
var inst_67316 = (state_67344[(2)]);
var state_67344__$1 = state_67344;
var statearr_67346_68638 = state_67344__$1;
(statearr_67346_68638[(2)] = inst_67316);

(statearr_67346_68638[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67345 === (1))){
var inst_67303 = (state_67344[(7)]);
var inst_67302 = (i + (1));
var inst_67303__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,inst_67302);
var inst_67305 = (inst_67303__$1 == null);
var inst_67306 = cljs.core.not(inst_67305);
var state_67344__$1 = (function (){var statearr_67347 = state_67344;
(statearr_67347[(7)] = inst_67303__$1);

return statearr_67347;
})();
if(inst_67306){
var statearr_67348_68640 = state_67344__$1;
(statearr_67348_68640[(1)] = (2));

} else {
var statearr_67349_68641 = state_67344__$1;
(statearr_67349_68641[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67345 === (4))){
var inst_67319 = (state_67344[(2)]);
var state_67344__$1 = state_67344;
if(cljs.core.truth_(inst_67319)){
var statearr_67351_68642 = state_67344__$1;
(statearr_67351_68642[(1)] = (8));

} else {
var statearr_67352_68643 = state_67344__$1;
(statearr_67352_68643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67345 === (15))){
var inst_67341 = (state_67344[(2)]);
var inst_67342 = cljs.core.async.close_BANG_(res_ch);
var state_67344__$1 = (function (){var statearr_67353 = state_67344;
(statearr_67353[(8)] = inst_67341);

return statearr_67353;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_67344__$1,inst_67342);
} else {
if((state_val_67345 === (13))){
var inst_67339 = (state_67344[(2)]);
var state_67344__$1 = state_67344;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67344__$1,(15),res_ch,inst_67339);
} else {
if((state_val_67345 === (6))){
var state_67344__$1 = state_67344;
var statearr_67354_68649 = state_67344__$1;
(statearr_67354_68649[(2)] = false);

(statearr_67354_68649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67345 === (3))){
var state_67344__$1 = state_67344;
var statearr_67358_68650 = state_67344__$1;
(statearr_67358_68650[(2)] = false);

(statearr_67358_68650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67345 === (12))){
var inst_67332 = (state_67344[(9)]);
var state_67344__$1 = state_67344;
var statearr_67360_68652 = state_67344__$1;
(statearr_67360_68652[(2)] = inst_67332);

(statearr_67360_68652[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67345 === (2))){
var inst_67303 = (state_67344[(7)]);
var inst_67308 = inst_67303.cljs$lang$protocol_mask$partition0$;
var inst_67309 = (inst_67308 & (64));
var inst_67310 = inst_67303.cljs$core$ISeq$;
var inst_67311 = (cljs.core.PROTOCOL_SENTINEL === inst_67310);
var inst_67312 = ((inst_67309) || (inst_67311));
var state_67344__$1 = state_67344;
if(cljs.core.truth_(inst_67312)){
var statearr_67362_68653 = state_67344__$1;
(statearr_67362_68653[(1)] = (5));

} else {
var statearr_67363_68654 = state_67344__$1;
(statearr_67363_68654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67345 === (11))){
var inst_67332 = (state_67344[(9)]);
var state_67344__$1 = state_67344;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67344__$1,(14),inst_67332);
} else {
if((state_val_67345 === (9))){
var inst_67303 = (state_67344[(7)]);
var state_67344__$1 = state_67344;
var statearr_67365_68655 = state_67344__$1;
(statearr_67365_68655[(2)] = inst_67303);

(statearr_67365_68655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67345 === (5))){
var state_67344__$1 = state_67344;
var statearr_67367_68656 = state_67344__$1;
(statearr_67367_68656[(2)] = true);

(statearr_67367_68656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67345 === (14))){
var inst_67336 = (state_67344[(2)]);
var state_67344__$1 = state_67344;
var statearr_67368_68658 = state_67344__$1;
(statearr_67368_68658[(2)] = inst_67336);

(statearr_67368_68658[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67345 === (10))){
var inst_67332 = (state_67344[(9)]);
var inst_67324 = (state_67344[(2)]);
var inst_67325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67324,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var inst_67326 = cljs.core.deref(entity_path_cache);
var inst_67327 = cljs.core.PersistentHashMap.EMPTY;
var inst_67328 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_67326,inst_67325,inst_67327);
var inst_67329 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_67328,ent], 0));
var inst_67332__$1 = (join_item.cljs$core$IFn$_invoke$arity$2 ? join_item.cljs$core$IFn$_invoke$arity$2(inst_67324,inst_67329) : join_item.call(null,inst_67324,inst_67329));
var inst_67333 = com.wsscode.common.async_cljs.chan_QMARK_(inst_67332__$1);
var state_67344__$1 = (function (){var statearr_67370 = state_67344;
(statearr_67370[(9)] = inst_67332__$1);

return statearr_67370;
})();
if(inst_67333){
var statearr_67371_68663 = state_67344__$1;
(statearr_67371_68663[(1)] = (11));

} else {
var statearr_67372_68664 = state_67344__$1;
(statearr_67372_68664[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67345 === (8))){
var inst_67303 = (state_67344[(7)]);
var inst_67321 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_67303);
var state_67344__$1 = state_67344;
var statearr_67375_68665 = state_67344__$1;
(statearr_67375_68665[(2)] = inst_67321);

(statearr_67375_68665[(1)] = (10));


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
});})(c__45808__auto____$1,vec__67298,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,vec__67238,out_chan,first__67240,seq__67239,ast,env__$1,head,tail,inst_67246,inst_67247,inst_67249,inst_67241,inst_67244,inst_67250,inst_67262,inst_67263,inst_67264,inst_67266,inst_67267,inst_67268,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query))
;
return ((function (switch__45525__auto__,c__45808__auto____$1,vec__67298,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,vec__67238,out_chan,first__67240,seq__67239,ast,env__$1,head,tail,inst_67246,inst_67247,inst_67249,inst_67241,inst_67244,inst_67250,inst_67262,inst_67263,inst_67264,inst_67266,inst_67267,inst_67268,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__45526__auto____0 = (function (){
var statearr_67376 = [null,null,null,null,null,null,null,null,null,null];
(statearr_67376[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__45526__auto__);

(statearr_67376[(1)] = (1));

return statearr_67376;
});
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__45526__auto____1 = (function (state_67344){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_67344);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e67377){if((e67377 instanceof Object)){
var ex__45529__auto__ = e67377;
var statearr_67379_68666 = state_67344;
(statearr_67379_68666[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67377;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68667 = state_67344;
state_67344 = G__68667;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__45526__auto__ = function(state_67344){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__45526__auto____1.call(this,state_67344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__45526__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__45526__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto____$1,vec__67298,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,vec__67238,out_chan,first__67240,seq__67239,ast,env__$1,head,tail,inst_67246,inst_67247,inst_67249,inst_67241,inst_67244,inst_67250,inst_67262,inst_67263,inst_67264,inst_67266,inst_67267,inst_67268,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query))
})();
var state__45810__auto__ = (function (){var statearr_67381 = f__45809__auto__();
(statearr_67381[(6)] = c__45808__auto____$1);

return statearr_67381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto____$1,vec__67298,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,vec__67238,out_chan,first__67240,seq__67239,ast,env__$1,head,tail,inst_67246,inst_67247,inst_67249,inst_67241,inst_67244,inst_67250,inst_67262,inst_67263,inst_67264,inst_67266,inst_67267,inst_67268,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query))
);

return c__45808__auto____$1;
});
;})(from_chan,join_item,first_res,check_ast_opt_QMARK_,vec__67238,out_chan,first__67240,seq__67239,ast,env__$1,head,tail,inst_67246,inst_67247,inst_67249,inst_67241,inst_67244,inst_67250,inst_67262,inst_67263,inst_67264,inst_67266,inst_67267,inst_67268,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query))
})();
var inst_67270 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_67264,inst_67269,inst_67263);
var inst_67271 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67272 = [inst_67262];
var inst_67273 = (new cljs.core.PersistentVector(null,1,(5),inst_67271,inst_67272,null));
var inst_67274 = cljs.core.async.into(inst_67273,inst_67264);
var state_67282__$1 = (function (){var statearr_67382 = state_67282;
(statearr_67382[(13)] = inst_67268);

(statearr_67382[(14)] = inst_67270);

return statearr_67382;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67282__$1,(17),inst_67274);
} else {
if((state_val_67284 === (13))){
var inst_67252 = (state_67282[(15)]);
var state_67282__$1 = state_67282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67282__$1,(16),inst_67252);
} else {
if((state_val_67284 === (6))){
var inst_67246 = (state_67282[(7)]);
var inst_67247 = (state_67282[(8)]);
var inst_67249 = (state_67282[(9)]);
var inst_67241 = (state_67282[(10)]);
var inst_67252 = (state_67282[(15)]);
var inst_67244 = (state_67282[(11)]);
var inst_67241__$1 = edn_query_language.core.query__GT_ast(query_SINGLEQUOTE_);
var inst_67242 = (function (){var ast = inst_67241__$1;
return ((function (ast,inst_67246,inst_67247,inst_67249,inst_67241,inst_67252,inst_67244,inst_67241__$1,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query){
return (function (p1__67168_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__67168_SHARP_));
});
;})(ast,inst_67246,inst_67247,inst_67249,inst_67241,inst_67252,inst_67244,inst_67241__$1,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query))
})();
var inst_67243 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_67241__$1);
var inst_67244__$1 = cljs.core.every_QMARK_(inst_67242,inst_67243);
var inst_67246__$1 = (function (){var ast = inst_67241__$1;
var check_ast_opt_QMARK_ = inst_67244__$1;
return ((function (ast,check_ast_opt_QMARK_,inst_67246,inst_67247,inst_67249,inst_67241,inst_67252,inst_67244,inst_67241__$1,inst_67242,inst_67243,inst_67244__$1,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_item(env__$1,entity){
var or__4131__auto__ = (function (){var and__4120__auto__ = check_ast_opt_QMARK_;
if(and__4120__auto__){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4120__auto__,ast,check_ast_opt_QMARK_,inst_67246,inst_67247,inst_67249,inst_67241,inst_67252,inst_67244,inst_67241__$1,inst_67242,inst_67243,inst_67244__$1,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query){
return (function (ent,p__67401){
var map__67402 = p__67401;
var map__67402__$1 = (((((!((map__67402 == null))))?(((((map__67402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67402):map__67402);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67402__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67402__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5718__auto__ = cljs.core.find(entity,key);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__67404 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67404,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67404,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ent,cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450),key),v);
} else {
return cljs.core.reduced(null);
}
});})(and__4120__auto__,ast,check_ast_opt_QMARK_,inst_67246,inst_67247,inst_67249,inst_67241,inst_67252,inst_67244,inst_67241__$1,inst_67242,inst_67243,inst_67244__$1,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query))
,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(entity,env__$1);
}
});
;})(ast,check_ast_opt_QMARK_,inst_67246,inst_67247,inst_67249,inst_67241,inst_67252,inst_67244,inst_67241__$1,inst_67242,inst_67243,inst_67244__$1,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query))
})();
var inst_67247__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll);
var inst_67248 = cljs.core.seq(coll);
var inst_67249__$1 = cljs.core.first(inst_67248);
var inst_67250 = cljs.core.next(inst_67248);
var inst_67251 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_67247__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,(0));
var inst_67252__$1 = inst_67246__$1(inst_67251,inst_67249__$1);
var inst_67254 = com.wsscode.common.async_cljs.chan_QMARK_(inst_67252__$1);
var state_67282__$1 = (function (){var statearr_67407 = state_67282;
(statearr_67407[(7)] = inst_67246__$1);

(statearr_67407[(8)] = inst_67247__$1);

(statearr_67407[(9)] = inst_67249__$1);

(statearr_67407[(10)] = inst_67241__$1);

(statearr_67407[(15)] = inst_67252__$1);

(statearr_67407[(11)] = inst_67244__$1);

(statearr_67407[(12)] = inst_67250);

return statearr_67407;
})();
if(inst_67254){
var statearr_67408_68671 = state_67282__$1;
(statearr_67408_68671[(1)] = (13));

} else {
var statearr_67409_68672 = state_67282__$1;
(statearr_67409_68672[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67284 === (17))){
var inst_67276 = (state_67282[(2)]);
var state_67282__$1 = state_67282;
var statearr_67410_68673 = state_67282__$1;
(statearr_67410_68673[(2)] = inst_67276);

(statearr_67410_68673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67284 === (3))){
var inst_67177 = (state_67282[(2)]);
var state_67282__$1 = state_67282;
var statearr_67411_68674 = state_67282__$1;
(statearr_67411_68674[(2)] = inst_67177);


cljs.core.async.impl.ioc_helpers.process_exception(state_67282__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67284 === (12))){
var inst_67190 = (state_67282[(16)]);
var inst_67228 = (state_67282[(2)]);
var inst_67229 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_67230 = [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_67231 = ["#e0e3a4","0.8"];
var inst_67232 = cljs.core.PersistentHashMap.fromArrays(inst_67230,inst_67231);
var inst_67233 = [new cljs.core.Keyword("com.wsscode.pathom.core","parallel-sequence-loop","com.wsscode.pathom.core/parallel-sequence-loop",1692546245),inst_67232];
var inst_67234 = cljs.core.PersistentHashMap.fromArrays(inst_67229,inst_67233);
var inst_67235 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_67190,inst_67234);
var state_67282__$1 = (function (){var statearr_67412 = state_67282;
(statearr_67412[(17)] = inst_67235);

return statearr_67412;
})();
var statearr_67413_68676 = state_67282__$1;
(statearr_67413_68676[(2)] = inst_67228);

(statearr_67413_68676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67284 === (2))){
var inst_67280 = (state_67282[(2)]);
var state_67282__$1 = state_67282;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67282__$1,inst_67280);
} else {
if((state_val_67284 === (11))){
var inst_67211 = (state_67282[(2)]);
var inst_67212 = com.wsscode.common.async_cljs.throw_err(inst_67211);
var state_67282__$1 = state_67282;
var statearr_67414_68678 = state_67282__$1;
(statearr_67414_68678[(2)] = inst_67212);

(statearr_67414_68678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67284 === (9))){
var inst_67206 = (state_67282[(18)]);
var state_67282__$1 = state_67282;
var statearr_67415_68679 = state_67282__$1;
(statearr_67415_68679[(2)] = inst_67206);

(statearr_67415_68679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67284 === (5))){
var inst_67206 = (state_67282[(18)]);
var inst_67200 = (state_67282[(19)]);
var inst_67194 = (state_67282[(20)]);
var inst_67197 = (state_67282[(21)]);
var inst_67202 = (state_67282[(22)]);
var inst_67190 = (state_67282[(16)]);
var inst_67198 = (state_67282[(23)]);
var inst_67184 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_67185 = [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_67186 = ["#e0e3a4","0.8"];
var inst_67187 = cljs.core.PersistentHashMap.fromArrays(inst_67185,inst_67186);
var inst_67188 = [new cljs.core.Keyword("com.wsscode.pathom.core","parallel-sequence-loop","com.wsscode.pathom.core/parallel-sequence-loop",1692546245),inst_67187];
var inst_67189 = cljs.core.PersistentHashMap.fromArrays(inst_67184,inst_67188);
var inst_67190__$1 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_67189);
var inst_67194__$1 = edn_query_language.core.query__GT_ast(query_SINGLEQUOTE_);
var inst_67195 = (function (){var trace_id__22799__auto__ = inst_67190__$1;
var ast = inst_67194__$1;
return ((function (trace_id__22799__auto__,ast,inst_67206,inst_67200,inst_67194,inst_67197,inst_67202,inst_67190,inst_67198,inst_67184,inst_67185,inst_67186,inst_67187,inst_67188,inst_67189,inst_67190__$1,inst_67194__$1,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query){
return (function (p1__67168_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__67168_SHARP_));
});
;})(trace_id__22799__auto__,ast,inst_67206,inst_67200,inst_67194,inst_67197,inst_67202,inst_67190,inst_67198,inst_67184,inst_67185,inst_67186,inst_67187,inst_67188,inst_67189,inst_67190__$1,inst_67194__$1,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query))
})();
var inst_67196 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_67194__$1);
var inst_67197__$1 = cljs.core.every_QMARK_(inst_67195,inst_67196);
var inst_67198__$1 = (function (){var trace_id__22799__auto__ = inst_67190__$1;
var ast = inst_67194__$1;
var check_ast_opt_QMARK_ = inst_67197__$1;
return ((function (trace_id__22799__auto__,ast,check_ast_opt_QMARK_,inst_67206,inst_67200,inst_67194,inst_67197,inst_67202,inst_67190,inst_67198,inst_67184,inst_67185,inst_67186,inst_67187,inst_67188,inst_67189,inst_67190__$1,inst_67194__$1,inst_67195,inst_67196,inst_67197__$1,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_item(env__$1,entity){
var or__4131__auto__ = (function (){var and__4120__auto__ = check_ast_opt_QMARK_;
if(and__4120__auto__){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4120__auto__,trace_id__22799__auto__,ast,check_ast_opt_QMARK_,inst_67206,inst_67200,inst_67194,inst_67197,inst_67202,inst_67190,inst_67198,inst_67184,inst_67185,inst_67186,inst_67187,inst_67188,inst_67189,inst_67190__$1,inst_67194__$1,inst_67195,inst_67196,inst_67197__$1,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query){
return (function (ent,p__67434){
var map__67435 = p__67434;
var map__67435__$1 = (((((!((map__67435 == null))))?(((((map__67435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67435):map__67435);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67435__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67435__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5718__auto__ = cljs.core.find(entity,key);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__67437 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67437,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67437,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ent,cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450),key),v);
} else {
return cljs.core.reduced(null);
}
});})(and__4120__auto__,trace_id__22799__auto__,ast,check_ast_opt_QMARK_,inst_67206,inst_67200,inst_67194,inst_67197,inst_67202,inst_67190,inst_67198,inst_67184,inst_67185,inst_67186,inst_67187,inst_67188,inst_67189,inst_67190__$1,inst_67194__$1,inst_67195,inst_67196,inst_67197__$1,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query))
,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(entity,env__$1);
}
});
;})(trace_id__22799__auto__,ast,check_ast_opt_QMARK_,inst_67206,inst_67200,inst_67194,inst_67197,inst_67202,inst_67190,inst_67198,inst_67184,inst_67185,inst_67186,inst_67187,inst_67188,inst_67189,inst_67190__$1,inst_67194__$1,inst_67195,inst_67196,inst_67197__$1,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query))
})();
var inst_67200__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll);
var inst_67201 = cljs.core.seq(coll);
var inst_67202__$1 = cljs.core.first(inst_67201);
var inst_67204 = cljs.core.next(inst_67201);
var inst_67205 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_67200__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,(0));
var inst_67206__$1 = inst_67198__$1(inst_67205,inst_67202__$1);
var inst_67207 = com.wsscode.common.async_cljs.chan_QMARK_(inst_67206__$1);
var state_67282__$1 = (function (){var statearr_67440 = state_67282;
(statearr_67440[(18)] = inst_67206__$1);

(statearr_67440[(19)] = inst_67200__$1);

(statearr_67440[(20)] = inst_67194__$1);

(statearr_67440[(24)] = inst_67204);

(statearr_67440[(21)] = inst_67197__$1);

(statearr_67440[(22)] = inst_67202__$1);

(statearr_67440[(16)] = inst_67190__$1);

(statearr_67440[(23)] = inst_67198__$1);

return statearr_67440;
})();
if(inst_67207){
var statearr_67441_68692 = state_67282__$1;
(statearr_67441_68692[(1)] = (8));

} else {
var statearr_67442_68693 = state_67282__$1;
(statearr_67442_68693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67284 === (14))){
var inst_67252 = (state_67282[(15)]);
var state_67282__$1 = state_67282;
var statearr_67443_68698 = state_67282__$1;
(statearr_67443_68698[(2)] = inst_67252);

(statearr_67443_68698[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67284 === (16))){
var inst_67258 = (state_67282[(2)]);
var inst_67259 = com.wsscode.common.async_cljs.throw_err(inst_67258);
var state_67282__$1 = state_67282;
var statearr_67444_68699 = state_67282__$1;
(statearr_67444_68699[(2)] = inst_67259);

(statearr_67444_68699[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67284 === (10))){
var inst_67200 = (state_67282[(19)]);
var inst_67194 = (state_67282[(20)]);
var inst_67204 = (state_67282[(24)]);
var inst_67197 = (state_67282[(21)]);
var inst_67202 = (state_67282[(22)]);
var inst_67190 = (state_67282[(16)]);
var inst_67198 = (state_67282[(23)]);
var inst_67215 = (state_67282[(2)]);
var inst_67216 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_67217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_67218 = cljs.core.range.cljs$core$IFn$_invoke$arity$0();
var inst_67219 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_67204,inst_67218);
var inst_67220 = cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(inst_67216,inst_67219);
var inst_67221 = (function (){var from_chan = inst_67216;
var join_item = inst_67198;
var first_res = inst_67215;
var check_ast_opt_QMARK_ = inst_67197;
var seq__67192 = inst_67204;
var out_chan = inst_67217;
var ast = inst_67194;
var trace_id__22799__auto__ = inst_67190;
var env__$1 = inst_67200;
var first__67193 = inst_67202;
var head = inst_67202;
var tail = inst_67204;
var vec__67191 = coll;
return ((function (from_chan,join_item,first_res,check_ast_opt_QMARK_,seq__67192,out_chan,ast,trace_id__22799__auto__,env__$1,first__67193,head,tail,vec__67191,inst_67200,inst_67194,inst_67204,inst_67197,inst_67202,inst_67190,inst_67198,inst_67215,inst_67216,inst_67217,inst_67218,inst_67219,inst_67220,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline(p__67445,res_ch){
var vec__67446 = p__67445;
var ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67446,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67446,(1),null);
var c__45808__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto____$1,vec__67446,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,seq__67192,out_chan,ast,trace_id__22799__auto__,env__$1,first__67193,head,tail,vec__67191,inst_67200,inst_67194,inst_67204,inst_67197,inst_67202,inst_67190,inst_67198,inst_67215,inst_67216,inst_67217,inst_67218,inst_67219,inst_67220,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto____$1,vec__67446,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,seq__67192,out_chan,ast,trace_id__22799__auto__,env__$1,first__67193,head,tail,vec__67191,inst_67200,inst_67194,inst_67204,inst_67197,inst_67202,inst_67190,inst_67198,inst_67215,inst_67216,inst_67217,inst_67218,inst_67219,inst_67220,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query){
return (function (state_67490){
var state_val_67491 = (state_67490[(1)]);
if((state_val_67491 === (7))){
var inst_67464 = (state_67490[(2)]);
var state_67490__$1 = state_67490;
var statearr_67492_68702 = state_67490__$1;
(statearr_67492_68702[(2)] = inst_67464);

(statearr_67492_68702[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67491 === (1))){
var inst_67451 = (state_67490[(7)]);
var inst_67450 = (i + (1));
var inst_67451__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,inst_67450);
var inst_67453 = (inst_67451__$1 == null);
var inst_67454 = cljs.core.not(inst_67453);
var state_67490__$1 = (function (){var statearr_67493 = state_67490;
(statearr_67493[(7)] = inst_67451__$1);

return statearr_67493;
})();
if(inst_67454){
var statearr_67494_68703 = state_67490__$1;
(statearr_67494_68703[(1)] = (2));

} else {
var statearr_67495_68705 = state_67490__$1;
(statearr_67495_68705[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67491 === (4))){
var inst_67467 = (state_67490[(2)]);
var state_67490__$1 = state_67490;
if(cljs.core.truth_(inst_67467)){
var statearr_67496_68706 = state_67490__$1;
(statearr_67496_68706[(1)] = (8));

} else {
var statearr_67497_68707 = state_67490__$1;
(statearr_67497_68707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67491 === (15))){
var inst_67487 = (state_67490[(2)]);
var inst_67488 = cljs.core.async.close_BANG_(res_ch);
var state_67490__$1 = (function (){var statearr_67498 = state_67490;
(statearr_67498[(8)] = inst_67487);

return statearr_67498;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_67490__$1,inst_67488);
} else {
if((state_val_67491 === (13))){
var inst_67485 = (state_67490[(2)]);
var state_67490__$1 = state_67490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67490__$1,(15),res_ch,inst_67485);
} else {
if((state_val_67491 === (6))){
var state_67490__$1 = state_67490;
var statearr_67499_68710 = state_67490__$1;
(statearr_67499_68710[(2)] = false);

(statearr_67499_68710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67491 === (3))){
var state_67490__$1 = state_67490;
var statearr_67500_68711 = state_67490__$1;
(statearr_67500_68711[(2)] = false);

(statearr_67500_68711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67491 === (12))){
var inst_67478 = (state_67490[(9)]);
var state_67490__$1 = state_67490;
var statearr_67501_68712 = state_67490__$1;
(statearr_67501_68712[(2)] = inst_67478);

(statearr_67501_68712[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67491 === (2))){
var inst_67451 = (state_67490[(7)]);
var inst_67456 = inst_67451.cljs$lang$protocol_mask$partition0$;
var inst_67457 = (inst_67456 & (64));
var inst_67458 = inst_67451.cljs$core$ISeq$;
var inst_67459 = (cljs.core.PROTOCOL_SENTINEL === inst_67458);
var inst_67460 = ((inst_67457) || (inst_67459));
var state_67490__$1 = state_67490;
if(cljs.core.truth_(inst_67460)){
var statearr_67502_68713 = state_67490__$1;
(statearr_67502_68713[(1)] = (5));

} else {
var statearr_67503_68716 = state_67490__$1;
(statearr_67503_68716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67491 === (11))){
var inst_67478 = (state_67490[(9)]);
var state_67490__$1 = state_67490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67490__$1,(14),inst_67478);
} else {
if((state_val_67491 === (9))){
var inst_67451 = (state_67490[(7)]);
var state_67490__$1 = state_67490;
var statearr_67504_68719 = state_67490__$1;
(statearr_67504_68719[(2)] = inst_67451);

(statearr_67504_68719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67491 === (5))){
var state_67490__$1 = state_67490;
var statearr_67505_68721 = state_67490__$1;
(statearr_67505_68721[(2)] = true);

(statearr_67505_68721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67491 === (14))){
var inst_67482 = (state_67490[(2)]);
var state_67490__$1 = state_67490;
var statearr_67506_68723 = state_67490__$1;
(statearr_67506_68723[(2)] = inst_67482);

(statearr_67506_68723[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67491 === (10))){
var inst_67478 = (state_67490[(9)]);
var inst_67472 = (state_67490[(2)]);
var inst_67473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_67472,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var inst_67474 = cljs.core.deref(entity_path_cache);
var inst_67475 = cljs.core.PersistentHashMap.EMPTY;
var inst_67476 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_67474,inst_67473,inst_67475);
var inst_67477 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_67476,ent], 0));
var inst_67478__$1 = (join_item.cljs$core$IFn$_invoke$arity$2 ? join_item.cljs$core$IFn$_invoke$arity$2(inst_67472,inst_67477) : join_item.call(null,inst_67472,inst_67477));
var inst_67479 = com.wsscode.common.async_cljs.chan_QMARK_(inst_67478__$1);
var state_67490__$1 = (function (){var statearr_67507 = state_67490;
(statearr_67507[(9)] = inst_67478__$1);

return statearr_67507;
})();
if(inst_67479){
var statearr_67508_68726 = state_67490__$1;
(statearr_67508_68726[(1)] = (11));

} else {
var statearr_67509_68727 = state_67490__$1;
(statearr_67509_68727[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67491 === (8))){
var inst_67451 = (state_67490[(7)]);
var inst_67469 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_67451);
var state_67490__$1 = state_67490;
var statearr_67510_68732 = state_67490__$1;
(statearr_67510_68732[(2)] = inst_67469);

(statearr_67510_68732[(1)] = (10));


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
});})(c__45808__auto____$1,vec__67446,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,seq__67192,out_chan,ast,trace_id__22799__auto__,env__$1,first__67193,head,tail,vec__67191,inst_67200,inst_67194,inst_67204,inst_67197,inst_67202,inst_67190,inst_67198,inst_67215,inst_67216,inst_67217,inst_67218,inst_67219,inst_67220,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query))
;
return ((function (switch__45525__auto__,c__45808__auto____$1,vec__67446,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,seq__67192,out_chan,ast,trace_id__22799__auto__,env__$1,first__67193,head,tail,vec__67191,inst_67200,inst_67194,inst_67204,inst_67197,inst_67202,inst_67190,inst_67198,inst_67215,inst_67216,inst_67217,inst_67218,inst_67219,inst_67220,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__45526__auto____0 = (function (){
var statearr_67511 = [null,null,null,null,null,null,null,null,null,null];
(statearr_67511[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__45526__auto__);

(statearr_67511[(1)] = (1));

return statearr_67511;
});
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__45526__auto____1 = (function (state_67490){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_67490);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e67512){if((e67512 instanceof Object)){
var ex__45529__auto__ = e67512;
var statearr_67513_68733 = state_67490;
(statearr_67513_68733[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67512;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68734 = state_67490;
state_67490 = G__68734;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__45526__auto__ = function(state_67490){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__45526__auto____1.call(this,state_67490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__45526__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__45526__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto____$1,vec__67446,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,seq__67192,out_chan,ast,trace_id__22799__auto__,env__$1,first__67193,head,tail,vec__67191,inst_67200,inst_67194,inst_67204,inst_67197,inst_67202,inst_67190,inst_67198,inst_67215,inst_67216,inst_67217,inst_67218,inst_67219,inst_67220,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query))
})();
var state__45810__auto__ = (function (){var statearr_67514 = f__45809__auto__();
(statearr_67514[(6)] = c__45808__auto____$1);

return statearr_67514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto____$1,vec__67446,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,seq__67192,out_chan,ast,trace_id__22799__auto__,env__$1,first__67193,head,tail,vec__67191,inst_67200,inst_67194,inst_67204,inst_67197,inst_67202,inst_67190,inst_67198,inst_67215,inst_67216,inst_67217,inst_67218,inst_67219,inst_67220,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query))
);

return c__45808__auto____$1;
});
;})(from_chan,join_item,first_res,check_ast_opt_QMARK_,seq__67192,out_chan,ast,trace_id__22799__auto__,env__$1,first__67193,head,tail,vec__67191,inst_67200,inst_67194,inst_67204,inst_67197,inst_67202,inst_67190,inst_67198,inst_67215,inst_67216,inst_67217,inst_67218,inst_67219,inst_67220,state_val_67284,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query))
})();
var inst_67222 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_67217,inst_67221,inst_67216);
var inst_67223 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67224 = [inst_67215];
var inst_67225 = (new cljs.core.PersistentVector(null,1,(5),inst_67223,inst_67224,null));
var inst_67226 = cljs.core.async.into(inst_67225,inst_67217);
var state_67282__$1 = (function (){var statearr_67515 = state_67282;
(statearr_67515[(25)] = inst_67220);

(statearr_67515[(26)] = inst_67222);

return statearr_67515;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67282__$1,(12),inst_67226);
} else {
if((state_val_67284 === (8))){
var inst_67206 = (state_67282[(18)]);
var state_67282__$1 = state_67282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67282__$1,(11),inst_67206);
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
});})(c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query))
;
return ((function (switch__45525__auto__,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__45526__auto____0 = (function (){
var statearr_67516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67516[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__45526__auto__);

(statearr_67516[(1)] = (1));

return statearr_67516;
});
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__45526__auto____1 = (function (state_67282){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_67282);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e67517){if((e67517 instanceof Object)){
var ex__45529__auto__ = e67517;
var statearr_67518_68737 = state_67282;
(statearr_67518_68737[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67517;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68744 = state_67282;
state_67282 = G__68744;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__45526__auto__ = function(state_67282){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__45526__auto____1.call(this,state_67282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__45526__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__45526__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query))
})();
var state__45810__auto__ = (function (){var statearr_67519 = f__45809__auto__();
(statearr_67519[(6)] = c__45808__auto__);

return statearr_67519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,query_SINGLEQUOTE_,map__67170,map__67170__$1,env,query,entity_path_cache,parent_query))
);

return c__45808__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Runs the current subquery against the items of the given collection.
 */
com.wsscode.pathom.core.join_seq = (function com$wsscode$pathom$core$join_seq(p__67520,coll){
var map__67521 = p__67520;
var map__67521__$1 = (((((!((map__67521 == null))))?(((((map__67521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67521):map__67521);
var env = map__67521__$1;
var parallel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67521__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","parallel?","com.wsscode.pathom.parser/parallel?",2071817193));
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","join-seq","com.wsscode.pathom.core/join-seq",523699901),new cljs.core.Keyword("com.wsscode.pathom.core","seq-count","com.wsscode.pathom.core/seq-count",-1671473836),cljs.core.count(coll)], null));

if(cljs.core.truth_(parallel_QMARK_)){
return com.wsscode.pathom.core.join_seq_parallel(env,coll);
} else {
var join_item = ((function (map__67521,map__67521__$1,env,parallel_QMARK_){
return (function com$wsscode$pathom$core$join_seq_$_join_item(ent,out){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(ent,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,cljs.core.count(out)));
});})(map__67521,map__67521__$1,env,parallel_QMARK_))
;
var out = cljs.core.PersistentVector.EMPTY;
var G__67526 = coll;
var vec__67527 = G__67526;
var seq__67528 = cljs.core.seq(vec__67527);
var first__67529 = cljs.core.first(seq__67528);
var seq__67528__$1 = cljs.core.next(seq__67528);
var ent = first__67529;
var tail = seq__67528__$1;
var out__$1 = out;
var G__67526__$1 = G__67526;
while(true){
var out__$2 = out__$1;
var vec__67596 = G__67526__$1;
var seq__67597 = cljs.core.seq(vec__67596);
var first__67598 = cljs.core.first(seq__67597);
var seq__67597__$1 = cljs.core.next(seq__67597);
var ent__$1 = first__67598;
var tail__$1 = seq__67597__$1;
if(cljs.core.truth_(ent__$1)){
var res = join_item(ent__$1,out__$2);
if(com.wsscode.common.async_cljs.chan_QMARK_(res)){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (out__$1,G__67526__$1,c__45808__auto__,res,out__$2,vec__67596,seq__67597,first__67598,seq__67597__$1,ent__$1,tail__$1,out,G__67526,vec__67527,seq__67528,first__67529,seq__67528__$1,ent,tail,map__67521,map__67521__$1,env,parallel_QMARK_){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (out__$1,G__67526__$1,c__45808__auto__,res,out__$2,vec__67596,seq__67597,first__67598,seq__67597__$1,ent__$1,tail__$1,out,G__67526,vec__67527,seq__67528,first__67529,seq__67528__$1,ent,tail,map__67521,map__67521__$1,env,parallel_QMARK_){
return (function (state_67643){
var state_val_67644 = (state_67643[(1)]);
if((state_val_67644 === (7))){
var inst_67639 = (state_67643[(2)]);
var state_67643__$1 = state_67643;
var statearr_67645_68761 = state_67643__$1;
(statearr_67645_68761[(2)] = inst_67639);


cljs.core.async.impl.ioc_helpers.process_exception(state_67643__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67644 === (1))){
var state_67643__$1 = state_67643;
var statearr_67646_68762 = state_67643__$1;
(statearr_67646_68762[(2)] = null);

(statearr_67646_68762[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67644 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_67643,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_67610 = cljs.core.PersistentVector.EMPTY_NODE;
var state_67643__$1 = (function (){var statearr_67647 = state_67643;
(statearr_67647[(7)] = inst_67610);

return statearr_67647;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67643__$1,(5),res);
} else {
if((state_val_67644 === (6))){
var inst_67620 = (state_67643[(8)]);
var inst_67626 = (state_67643[(9)]);
var inst_67625 = cljs.core.seq(inst_67620);
var inst_67626__$1 = cljs.core.first(inst_67625);
var inst_67627 = cljs.core.next(inst_67625);
var state_67643__$1 = (function (){var statearr_67648 = state_67643;
(statearr_67648[(9)] = inst_67626__$1);

(statearr_67648[(10)] = inst_67627);

return statearr_67648;
})();
if(cljs.core.truth_(inst_67626__$1)){
var statearr_67649_68764 = state_67643__$1;
(statearr_67649_68764[(1)] = (8));

} else {
var statearr_67650_68765 = state_67643__$1;
(statearr_67650_68765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67644 === (3))){
var inst_67599 = (state_67643[(2)]);
var state_67643__$1 = state_67643;
var statearr_67651_68766 = state_67643__$1;
(statearr_67651_68766[(2)] = inst_67599);


cljs.core.async.impl.ioc_helpers.process_exception(state_67643__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67644 === (2))){
var inst_67641 = (state_67643[(2)]);
var state_67643__$1 = state_67643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67643__$1,inst_67641);
} else {
if((state_val_67644 === (11))){
var inst_67627 = (state_67643[(10)]);
var inst_67619 = (state_67643[(11)]);
var inst_67631 = (state_67643[(2)]);
var inst_67632 = com.wsscode.common.async_cljs.throw_err(inst_67631);
var inst_67633 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_67619,inst_67632);
var inst_67619__$1 = inst_67633;
var inst_67620 = inst_67627;
var state_67643__$1 = (function (){var statearr_67652 = state_67643;
(statearr_67652[(8)] = inst_67620);

(statearr_67652[(11)] = inst_67619__$1);

return statearr_67652;
})();
var statearr_67653_68767 = state_67643__$1;
(statearr_67653_68767[(2)] = null);

(statearr_67653_68767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67644 === (9))){
var inst_67619 = (state_67643[(11)]);
var state_67643__$1 = state_67643;
var statearr_67654_68768 = state_67643__$1;
(statearr_67654_68768[(2)] = inst_67619);

(statearr_67654_68768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67644 === (5))){
var inst_67610 = (state_67643[(7)]);
var inst_67612 = (state_67643[(2)]);
var inst_67613 = com.wsscode.common.async_cljs.throw_err(inst_67612);
var inst_67614 = [inst_67613];
var inst_67615 = (new cljs.core.PersistentVector(null,1,(5),inst_67610,inst_67614,null));
var inst_67616 = cljs.core.seq(tail__$1);
var inst_67617 = cljs.core.first(inst_67616);
var inst_67618 = cljs.core.next(inst_67616);
var inst_67619 = inst_67615;
var inst_67620 = tail__$1;
var state_67643__$1 = (function (){var statearr_67655 = state_67643;
(statearr_67655[(8)] = inst_67620);

(statearr_67655[(12)] = inst_67617);

(statearr_67655[(11)] = inst_67619);

(statearr_67655[(13)] = inst_67618);

return statearr_67655;
})();
var statearr_67656_68770 = state_67643__$1;
(statearr_67656_68770[(2)] = null);

(statearr_67656_68770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67644 === (10))){
var inst_67637 = (state_67643[(2)]);
var state_67643__$1 = state_67643;
var statearr_67657_68771 = state_67643__$1;
(statearr_67657_68771[(2)] = inst_67637);

(statearr_67657_68771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67644 === (8))){
var inst_67626 = (state_67643[(9)]);
var inst_67619 = (state_67643[(11)]);
var inst_67629 = join_item(inst_67626,inst_67619);
var state_67643__$1 = state_67643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67643__$1,(11),inst_67629);
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
});})(out__$1,G__67526__$1,c__45808__auto__,res,out__$2,vec__67596,seq__67597,first__67598,seq__67597__$1,ent__$1,tail__$1,out,G__67526,vec__67527,seq__67528,first__67529,seq__67528__$1,ent,tail,map__67521,map__67521__$1,env,parallel_QMARK_))
;
return ((function (out__$1,G__67526__$1,switch__45525__auto__,c__45808__auto__,res,out__$2,vec__67596,seq__67597,first__67598,seq__67597__$1,ent__$1,tail__$1,out,G__67526,vec__67527,seq__67528,first__67529,seq__67528__$1,ent,tail,map__67521,map__67521__$1,env,parallel_QMARK_){
return (function() {
var com$wsscode$pathom$core$join_seq_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$core$join_seq_$_state_machine__45526__auto____0 = (function (){
var statearr_67658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67658[(0)] = com$wsscode$pathom$core$join_seq_$_state_machine__45526__auto__);

(statearr_67658[(1)] = (1));

return statearr_67658;
});
var com$wsscode$pathom$core$join_seq_$_state_machine__45526__auto____1 = (function (state_67643){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_67643);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e67659){if((e67659 instanceof Object)){
var ex__45529__auto__ = e67659;
var statearr_67660_68781 = state_67643;
(statearr_67660_68781[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67659;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68783 = state_67643;
state_67643 = G__68783;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_$_state_machine__45526__auto__ = function(state_67643){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_$_state_machine__45526__auto____1.call(this,state_67643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_$_state_machine__45526__auto____0;
com$wsscode$pathom$core$join_seq_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_$_state_machine__45526__auto____1;
return com$wsscode$pathom$core$join_seq_$_state_machine__45526__auto__;
})()
;})(out__$1,G__67526__$1,switch__45525__auto__,c__45808__auto__,res,out__$2,vec__67596,seq__67597,first__67598,seq__67597__$1,ent__$1,tail__$1,out,G__67526,vec__67527,seq__67528,first__67529,seq__67528__$1,ent,tail,map__67521,map__67521__$1,env,parallel_QMARK_))
})();
var state__45810__auto__ = (function (){var statearr_67661 = f__45809__auto__();
(statearr_67661[(6)] = c__45808__auto__);

return statearr_67661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(out__$1,G__67526__$1,c__45808__auto__,res,out__$2,vec__67596,seq__67597,first__67598,seq__67597__$1,ent__$1,tail__$1,out,G__67526,vec__67527,seq__67528,first__67529,seq__67528__$1,ent,tail,map__67521,map__67521__$1,env,parallel_QMARK_))
);

return c__45808__auto__;
} else {
var G__68784 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out__$2,res);
var G__68785 = tail__$1;
out__$1 = G__68784;
G__67526__$1 = G__68785;
continue;
}
} else {
return out__$2;
}
break;
}
}
});
com.wsscode.pathom.core.ident_QMARK_ = (function com$wsscode$pathom$core$ident_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(x))));
});
com.wsscode.pathom.core.ident_key_STAR_ = (function com$wsscode$pathom$core$ident_key_STAR_(key){
if(cljs.core.vector_QMARK_(key)){
return cljs.core.first(key);
} else {
return null;
}
});
/**
 * The first element of an ident.
 */
com.wsscode.pathom.core.ident_key = (function com$wsscode$pathom$core$ident_key(p__67662){
var map__67663 = p__67662;
var map__67663__$1 = (((((!((map__67663 == null))))?(((((map__67663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67663):map__67663);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67663__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var key = (function (){var G__67665 = ast;
if((G__67665 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__67665);
}
})();
if(cljs.core.vector_QMARK_(key)){
return cljs.core.first(key);
} else {
return null;
}
});
com.wsscode.pathom.core.ident_value_STAR_ = (function com$wsscode$pathom$core$ident_value_STAR_(key){
if(cljs.core.vector_QMARK_(key)){
return cljs.core.second(key);
} else {
return null;
}
});
/**
 * The second element of an ident
 */
com.wsscode.pathom.core.ident_value = (function com$wsscode$pathom$core$ident_value(p__67666){
var map__67667 = p__67666;
var map__67667__$1 = (((((!((map__67667 == null))))?(((((map__67667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67667):map__67667);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67667__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var key = (function (){var G__67669 = ast;
if((G__67669 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__67669);
}
})();
if(cljs.core.sequential_QMARK_(key)){
return cljs.core.second(key);
} else {
return null;
}
});
/**
 * Remove items from a query (AST) that have a key listed in the elision-set
 */
com.wsscode.pathom.core.elide_ast_nodes = (function com$wsscode$pathom$core$elide_ast_nodes(p__67671,elision_set){
var map__67672 = p__67671;
var map__67672__$1 = (((((!((map__67672 == null))))?(((((map__67672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67672):map__67672);
var ast = map__67672__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67672__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67672__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var union_elision_QMARK_ = cljs.core.contains_QMARK_(elision_set,union_key);
if(((union_elision_QMARK_) || (cljs.core.contains_QMARK_(elision_set,key)))){
return null;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"children","children",-940561982),((function (union_elision_QMARK_,map__67672,map__67672__$1,ast,key,union_key){
return (function (c){
if(cljs.core.truth_(c)){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (union_elision_QMARK_,map__67672,map__67672__$1,ast,key,union_key){
return (function (p1__67670_SHARP_){
return (com.wsscode.pathom.core.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2(p1__67670_SHARP_,elision_set) : com.wsscode.pathom.core.elide_ast_nodes.call(null,p1__67670_SHARP_,elision_set));
});})(union_elision_QMARK_,map__67672,map__67672__$1,ast,key,union_key))
,c));
} else {
return null;
}
});})(union_elision_QMARK_,map__67672,map__67672__$1,ast,key,union_key))
);
}
});
com.wsscode.pathom.core.normalize_env = (function com$wsscode$pathom$core$normalize_env(p__67674){
var map__67675 = p__67674;
var map__67675__$1 = (((((!((map__67675 == null))))?(((((map__67675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67675):map__67675);
var env = map__67675__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67675__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var G__67677 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
if((new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249).cljs$core$IFn$_invoke$arity$1(env) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67677,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031));
} else {
return G__67677;
}
});
com.wsscode.pathom.core.merge_queries_STAR_ = (function com$wsscode$pathom$core$merge_queries_STAR_(qa,qb){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ast,p__67680){
var map__67681 = p__67680;
var map__67681__$1 = (((((!((map__67681 == null))))?(((((map__67681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67681):map__67681);
var item_b = map__67681__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67681__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67681__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67681__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5718__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__67681,map__67681__$1,item_b,key,type,params){
return (function (p1__67679_SHARP_,p2__67678_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p2__67678_SHARP_),key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__67679_SHARP_,p2__67678_SHARP_], null);
} else {
return null;
}
});})(map__67681,map__67681__$1,item_b,key,type,params))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__67683 = temp__5718__auto__;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67683,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67683,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(item),params)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),idx], null),com.wsscode.pathom.core.merge_queries_STAR_,item_b);
} else {
return cljs.core.reduced(null);
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),type)))){
return cljs.core.assoc_in(ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),idx], null),item_b);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type)){
return cljs.core.reduced(null);
} else {
return ast;

}
}
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj,item_b);
}
}),qa,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(qb));
});
com.wsscode.pathom.core.merge_queries = (function com$wsscode$pathom$core$merge_queries(qa,qb){
var G__67686 = com.wsscode.pathom.core.merge_queries_STAR_(com.wsscode.pathom.core.query__GT_ast(qa),com.wsscode.pathom.core.query__GT_ast(qb));
if((G__67686 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast__GT_query(G__67686);
}
});
/**
 * Converts ident values and param values to ::p/var.
 */
com.wsscode.pathom.core.normalize_query_variables = (function com$wsscode$pathom$core$normalize_query_variables(query){
return com.wsscode.pathom.core.ast__GT_query(com.wsscode.pathom.core.transduce_children(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
var G__67688 = x;
var G__67688__$1 = ((com.wsscode.pathom.core.ident_QMARK_(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67688,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x)),new cljs.core.Keyword("com.wsscode.pathom.core","var","com.wsscode.pathom.core/var",-2126559442)], null)):G__67688);
if(cljs.core.truth_(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__67688__$1,new cljs.core.Keyword(null,"params","params",710516235),((function (G__67688,G__67688__$1){
return (function (p1__67687_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__67688,G__67688__$1){
return (function (p__67689){
var vec__67690 = p__67689;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67690,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67690,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword("com.wsscode.pathom.core","var","com.wsscode.pathom.core/var",-2126559442)], null);
});})(G__67688,G__67688__$1))
),p1__67687_SHARP_);
});})(G__67688,G__67688__$1))
);
} else {
return G__67688__$1;
}
})),com.wsscode.pathom.core.query__GT_ast(query)));
});
/**
 * Generates a consistent hash from the query. The query first goes to a process to remove any
 *   variables from idents and params, then we get the Clojure hash of it. You can use this to save
 *   information about a query that can be used to correlate with the query later.
 */
com.wsscode.pathom.core.query_id = (function com$wsscode$pathom$core$query_id(query){
return cljs.core.hash(com.wsscode.pathom.core.normalize_query_variables(query));
});
com.wsscode.pathom.core.key_dispatch = (function com$wsscode$pathom$core$key_dispatch(p__67693){
var map__67694 = p__67693;
var map__67694__$1 = (((((!((map__67694 == null))))?(((((map__67694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67694):map__67694);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67694__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
});
/**
 * Dispatch on the first element (type) of an incoming ident.
 */
com.wsscode.pathom.core.entity_dispatch = (function com$wsscode$pathom$core$entity_dispatch(p__67696){
var map__67697 = p__67696;
var map__67697__$1 = (((((!((map__67697 == null))))?(((((map__67697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67697):map__67697);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67697__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core.vector_QMARK_(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.core.first(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return null;
}
});
/**
 * Produces a reader that will respond to any keyword whose namespace
 *   is in the set `(::placeholder-prefixes env)`. The join node logical
 *   level stays the same as the parent where the placeholder node is
 *   requested.
 */
com.wsscode.pathom.core.env_placeholder_reader = (function com$wsscode$pathom$core$env_placeholder_reader(p__67699){
var map__67700 = p__67699;
var map__67700__$1 = (((((!((map__67700 == null))))?(((((map__67700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67700):map__67700);
var env = map__67700__$1;
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67700__$1,new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644));
if(cljs.core.truth_(placeholder_prefixes)){
} else {
throw (new Error(["Assert failed: ","To use env-placeholder-reader please add ::p/placeholder-prefixes to your environment.","\n","placeholder-prefixes"].join('')));
}

if(cljs.core.contains_QMARK_(placeholder_prefixes,cljs.core.namespace(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env))))){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(env);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
/**
 * This will lift the queries from placeholders to the same level of the query, as if there was not placeholders in it.
 */
com.wsscode.pathom.core.lift_placeholders = (function com$wsscode$pathom$core$lift_placeholders(p__67703,query){
var map__67704 = p__67703;
var map__67704__$1 = (((((!((map__67704 == null))))?(((((map__67704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67704):map__67704);
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67704__$1,new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644));
var ast = com.wsscode.pathom.core.query__GT_ast(query);
var ast_SINGLEQUOTE_ = clojure.walk.postwalk(((function (ast,map__67704,map__67704__$1,placeholder_prefixes){
return (function (x){
var temp__5718__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__5718__auto__)){
var children = temp__5718__auto__;
var map__67706 = cljs.core.group_by(((function (children,temp__5718__auto__,ast,map__67704,map__67704__$1,placeholder_prefixes){
return (function (p1__67702_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__67702_SHARP_))) && (cljs.core.contains_QMARK_(placeholder_prefixes,cljs.core.namespace(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(p1__67702_SHARP_)))));
});})(children,temp__5718__auto__,ast,map__67704,map__67704__$1,placeholder_prefixes))
,children);
var map__67706__$1 = (((((!((map__67706 == null))))?(((((map__67706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67706):map__67706);
var placeholders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67706__$1,true);
var regular = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67706__$1,false);
var _LT__GT_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var or__4131__auto__ = regular;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.core.merge_queries_STAR_,_LT__GT_,placeholders);
} else {
return x;
}
});})(ast,map__67704,map__67704__$1,placeholder_prefixes))
,ast);
return com.wsscode.pathom.core.ast__GT_query(ast_SINGLEQUOTE_);
});
/**
 * Map reader will try to find the ast key on the current entity and output it. When the value is a map and a
 *   sub query is present, it will apply the sub query on that value (recursively). When the value is a sequence,
 *   map-reader will do a join on each of the items (and apply sub queries if it's present and values are maps.
 * 
 *   Map-reader will defer the read when the key is not present at entity.
 */
com.wsscode.pathom.core.map_reader = (function com$wsscode$pathom$core$map_reader(p__67708){
var map__67709 = p__67708;
var map__67709__$1 = (((((!((map__67709 == null))))?(((((map__67709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67709):map__67709);
var env = map__67709__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67709__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67709__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.contains_QMARK_(entity,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast))){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.sequential_QMARK_(v)){
if(cljs.core.truth_((function (){var and__4120__auto__ = query;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(new cljs.core.Keyword("com.wsscode.pathom.core","final","com.wsscode.pathom.core/final",891454300).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)));
} else {
return and__4120__auto__;
}
})())){
return com.wsscode.pathom.core.join_seq(env,v);
} else {
return v;
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.map_QMARK_(v);
if(and__4120__auto__){
var and__4120__auto____$1 = query;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.not(new cljs.core.Keyword("com.wsscode.pathom.core","final","com.wsscode.pathom.core/final",891454300).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(v,env);
} else {
return v;
}
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
/**
 * Like map-reader, but it has extra options (read from the environment):
 *   map-key-transform: (fn [key]) will transform the key on the AST before trying to match with entity key
 *   map-value-transform: (fn [key value]) will transform the output value after reading from the entity.
 * 
 *   The reason to have a separated reader is so the plain version (map-reader) can be faster by avoiding checking
 *   the presence of transform functions.
 */
com.wsscode.pathom.core.map_reader_STAR_ = (function com$wsscode$pathom$core$map_reader_STAR_(p__67711){
var map__67712 = p__67711;
var map__67712__$1 = (((((!((map__67712 == null))))?(((((map__67712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67712):map__67712);
var map_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67712__$1,new cljs.core.Keyword("com.wsscode.pathom.core","map-key-transform","com.wsscode.pathom.core/map-key-transform",-238565800));
var map_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67712__$1,new cljs.core.Keyword("com.wsscode.pathom.core","map-value-transform","com.wsscode.pathom.core/map-value-transform",1252006952));
return ((function (map__67712,map__67712__$1,map_key_transform,map_value_transform){
return (function (p__67714){
var map__67715 = p__67714;
var map__67715__$1 = (((((!((map__67715 == null))))?(((((map__67715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67715):map__67715);
var env = map__67715__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67715__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67715__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67715__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
var key = (function (){var G__67717 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(map_key_transform)){
return (map_key_transform.cljs$core$IFn$_invoke$arity$1 ? map_key_transform.cljs$core$IFn$_invoke$arity$1(G__67717) : map_key_transform.call(null,G__67717));
} else {
return G__67717;
}
})();
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.contains_QMARK_(entity,key)){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,key);
if(cljs.core.sequential_QMARK_(v)){
if(cljs.core.truth_(query)){
return com.wsscode.pathom.core.join_seq(env,v);
} else {
return v;
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.map_QMARK_(v);
if(and__4120__auto__){
return query;
} else {
return and__4120__auto__;
}
})())){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,v));
} else {
var G__67718 = v;
if(cljs.core.truth_(map_value_transform)){
var G__67719 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var G__67720 = G__67718;
return (map_value_transform.cljs$core$IFn$_invoke$arity$2 ? map_value_transform.cljs$core$IFn$_invoke$arity$2(G__67719,G__67720) : map_value_transform.call(null,G__67719,G__67720));
} else {
return G__67718;
}
}
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
;})(map__67712,map__67712__$1,map_key_transform,map_value_transform))
});
/**
 * Like map-reader*, but handles plain Javascript objects instead of Clojure maps.
 */
com.wsscode.pathom.core.js_obj_reader = (function com$wsscode$pathom$core$js_obj_reader(p__67721){
var map__67722 = p__67721;
var map__67722__$1 = (((((!((map__67722 == null))))?(((((map__67722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67722):map__67722);
var env = map__67722__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67722__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67722__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var js_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67722__$1,new cljs.core.Keyword("com.wsscode.pathom.core","js-key-transform","com.wsscode.pathom.core/js-key-transform",-1588372758),cljs.core.name);
var js_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67722__$1,new cljs.core.Keyword("com.wsscode.pathom.core","js-value-transform","com.wsscode.pathom.core/js-value-transform",1418749137),((function (map__67722,map__67722__$1,env,query,ast,js_key_transform){
return (function (_,v){
return v;
});})(map__67722,map__67722__$1,env,query,ast,js_key_transform))
);
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67722__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
var js_key = (function (){var G__67724 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
return (js_key_transform.cljs$core$IFn$_invoke$arity$1 ? js_key_transform.cljs$core$IFn$_invoke$arity$1(G__67724) : js_key_transform.call(null,G__67724));
})();
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(goog.object.containsKey(entity,js_key))){
var v = goog.object.get(entity,js_key);
if(cljs.core.truth_(Array.isArray(v))){
if(cljs.core.truth_(query)){
return com.wsscode.pathom.core.join_seq(env,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(v));
} else {
return v;
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = query;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(v),Object);
} else {
return and__4120__auto__;
}
})())){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,v));
} else {
var G__67725 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var G__67726 = v;
return (js_value_transform.cljs$core$IFn$_invoke$arity$2 ? js_value_transform.cljs$core$IFn$_invoke$arity$2(G__67725,G__67726) : js_value_transform.call(null,G__67725,G__67726));
}
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
/**
 * This reader will join on any ident join, the entity for the join will be a map containing the same
 *   key and value expressed on the ident, eg: [{[:id 123] [:id]}], the join entry will be {:id 123}.
 */
com.wsscode.pathom.core.ident_join_reader = (function com$wsscode$pathom$core$ident_join_reader(env){
var temp__5718__auto__ = com.wsscode.pathom.core.ident_key(env);
if(cljs.core.truth_(temp__5718__auto__)){
var key = temp__5718__auto__;
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([key,com.wsscode.pathom.core.ident_value(env)]),env);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
/**
 * Helper to create a plugin that can view/modify the env/tx of a top-level request.
 *   f - (fn [{:keys [env tx]}] {:env new-env :tx new-tx})
 *   If the function returns no env or tx, then the parser will not be called (aborts the parse)
 */
com.wsscode.pathom.core.pre_process_parser_plugin = (function com$wsscode$pathom$core$pre_process_parser_plugin(f){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),(function com$wsscode$pathom$core$pre_process_parser_plugin_$_transform_parser_out_plugin_external(parser){
return (function com$wsscode$pathom$core$pre_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal(env,tx){
var map__67727 = (function (){var G__67728 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"tx","tx",466630418),tx], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__67728) : f.call(null,G__67728));
})();
var map__67727__$1 = (((((!((map__67727 == null))))?(((((map__67727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67727):map__67727);
var env__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67727__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var tx__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67727__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
if(((cljs.core.map_QMARK_(env__$1)) && (cljs.core.seq(tx__$1)))){
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env__$1,tx__$1) : parser.call(null,env__$1,tx__$1));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
})], null);
});
/**
 * Helper to create a plugin to work on the parser output. `f` will run once with the parser final result.
 */
com.wsscode.pathom.core.post_process_parser_plugin = (function com$wsscode$pathom$core$post_process_parser_plugin(f){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),(function com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external(parser){
return (function com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal(env,tx){
var res__61936__auto__ = (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,tx) : parser.call(null,env,tx));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__61936__auto__)){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,res__61936__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,res__61936__auto__){
return (function (state_67741){
var state_val_67742 = (state_67741[(1)]);
if((state_val_67742 === (1))){
var state_67741__$1 = state_67741;
var statearr_67743_68909 = state_67741__$1;
(statearr_67743_68909[(2)] = null);

(statearr_67743_68909[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67742 === (2))){
var inst_67739 = (state_67741[(2)]);
var state_67741__$1 = state_67741;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67741__$1,inst_67739);
} else {
if((state_val_67742 === (3))){
var inst_67730 = (state_67741[(2)]);
var state_67741__$1 = state_67741;
var statearr_67744_68911 = state_67741__$1;
(statearr_67744_68911[(2)] = inst_67730);


cljs.core.async.impl.ioc_helpers.process_exception(state_67741__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67742 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_67741,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_67741__$1 = state_67741;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67741__$1,(5),res__61936__auto__);
} else {
if((state_val_67742 === (5))){
var inst_67735 = (state_67741[(2)]);
var inst_67736 = com.wsscode.common.async_cljs.throw_err(inst_67735);
var inst_67737 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_67736) : f.call(null,inst_67736));
var state_67741__$1 = state_67741;
var statearr_67745_68913 = state_67741__$1;
(statearr_67745_68913[(2)] = inst_67737);


cljs.core.async.impl.ioc_helpers.process_exception(state_67741__$1);

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
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__45526__auto____0 = (function (){
var statearr_67746 = [null,null,null,null,null,null,null];
(statearr_67746[(0)] = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__45526__auto__);

(statearr_67746[(1)] = (1));

return statearr_67746;
});
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__45526__auto____1 = (function (state_67741){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_67741);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e67747){if((e67747 instanceof Object)){
var ex__45529__auto__ = e67747;
var statearr_67748_68926 = state_67741;
(statearr_67748_68926[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67747;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68932 = state_67741;
state_67741 = G__68932;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__45526__auto__ = function(state_67741){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__45526__auto____1.call(this,state_67741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__45526__auto____0;
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__45526__auto____1;
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,res__61936__auto__))
})();
var state__45810__auto__ = (function (){var statearr_67749 = f__45809__auto__();
(statearr_67749[(6)] = c__45808__auto__);

return statearr_67749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,res__61936__auto__))
);

return c__45808__auto__;
} else {
var res = res__61936__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(res) : f.call(null,res));
}
});
})], null);
});
com.wsscode.pathom.core.elide_special_outputs_plugin = com.wsscode.pathom.core.post_process_parser_plugin(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.elide_items,com.wsscode.pathom.core.special_outputs));
com.wsscode.pathom.core.error_message = (function com$wsscode$pathom$core$error_message(err){
return err.message;
});
com.wsscode.pathom.core.error_str = (function com$wsscode$pathom$core$error_str(err){
var msg = err.message;
var data = cljs.core.ex_data(err);
var G__67750 = msg;
if(cljs.core.truth_(data)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67750)," - ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))].join('');
} else {
return G__67750;
}
});
/**
 * Helper function to update a mutation action.
 */
com.wsscode.pathom.core.update_action = (function com$wsscode$pathom$core$update_action(m,f){
if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"action","action",-811238024))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"action","action",-811238024),f);
} else {
return m;
}
});
com.wsscode.pathom.core.process_error = (function com$wsscode$pathom$core$process_error(p__67751,e){
var map__67752 = p__67751;
var map__67752__$1 = (((((!((map__67752 == null))))?(((((map__67752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67752):map__67752);
var env = map__67752__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67752__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return com.wsscode.pathom.core.error_str(e);
}
});
com.wsscode.pathom.core.add_error = (function com$wsscode$pathom$core$add_error(p__67754,e){
var map__67755 = p__67754;
var map__67755__$1 = (((((!((map__67755 == null))))?(((((map__67755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67755):map__67755);
var env = map__67755__$1;
var errors_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67755__$1,new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67755__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
if(cljs.core.truth_(errors_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(errors_STAR_,cljs.core.assoc,path,com.wsscode.pathom.core.process_error(env,e));
} else {
}

return new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882);
});
com.wsscode.pathom.core.wrap_handle_exception = (function com$wsscode$pathom$core$wrap_handle_exception(reader){
return (function com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal(p__67757){
var map__67758 = p__67757;
var map__67758__$1 = (((((!((map__67758 == null))))?(((((map__67758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67758):map__67758);
var env = map__67758__$1;
var fail_fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67758__$1,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465));
if(cljs.core.truth_(fail_fast_QMARK_)){
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
} else {
try{var x = (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
if(com.wsscode.common.async_cljs.chan_QMARK_(x)){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,x,map__67758,map__67758__$1,env,fail_fast_QMARK_){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,x,map__67758,map__67758__$1,env,fail_fast_QMARK_){
return (function (state_67772){
var state_val_67773 = (state_67772[(1)]);
if((state_val_67773 === (1))){
var state_67772__$1 = state_67772;
var statearr_67774_68955 = state_67772__$1;
(statearr_67774_68955[(2)] = null);

(statearr_67774_68955[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67773 === (2))){
var inst_67770 = (state_67772[(2)]);
var state_67772__$1 = state_67772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67772__$1,inst_67770);
} else {
if((state_val_67773 === (3))){
var inst_67761 = (state_67772[(2)]);
var inst_67762 = com.wsscode.pathom.core.add_error(env,inst_67761);
var state_67772__$1 = state_67772;
var statearr_67775_68960 = state_67772__$1;
(statearr_67775_68960[(2)] = inst_67762);


cljs.core.async.impl.ioc_helpers.process_exception(state_67772__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67773 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_67772,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_67772__$1 = state_67772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67772__$1,(5),x);
} else {
if((state_val_67773 === (5))){
var inst_67767 = (state_67772[(2)]);
var inst_67768 = com.wsscode.common.async_cljs.throw_err(inst_67767);
var state_67772__$1 = state_67772;
var statearr_67776_68973 = state_67772__$1;
(statearr_67776_68973[(2)] = inst_67768);


cljs.core.async.impl.ioc_helpers.process_exception(state_67772__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__45808__auto__,x,map__67758,map__67758__$1,env,fail_fast_QMARK_))
;
return ((function (switch__45525__auto__,c__45808__auto__,x,map__67758,map__67758__$1,env,fail_fast_QMARK_){
return (function() {
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__45526__auto____0 = (function (){
var statearr_67777 = [null,null,null,null,null,null,null];
(statearr_67777[(0)] = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__45526__auto__);

(statearr_67777[(1)] = (1));

return statearr_67777;
});
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__45526__auto____1 = (function (state_67772){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_67772);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e67778){if((e67778 instanceof Object)){
var ex__45529__auto__ = e67778;
var statearr_67779_68993 = state_67772;
(statearr_67779_68993[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67778;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68996 = state_67772;
state_67772 = G__68996;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__45526__auto__ = function(state_67772){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__45526__auto____1.call(this,state_67772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__45526__auto____0;
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__45526__auto____1;
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,x,map__67758,map__67758__$1,env,fail_fast_QMARK_))
})();
var state__45810__auto__ = (function (){var statearr_67780 = f__45809__auto__();
(statearr_67780[(6)] = c__45808__auto__);

return statearr_67780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,x,map__67758,map__67758__$1,env,fail_fast_QMARK_))
);

return c__45808__auto__;
} else {
return x;
}
}catch (e67760){var e = e67760;
return com.wsscode.pathom.core.add_error(env,e);
}}
});
});
com.wsscode.pathom.core.wrap_mutate_handle_exception = (function com$wsscode$pathom$core$wrap_mutate_handle_exception(mutate){
return (function com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal(p__67781,k,p){
var map__67782 = p__67781;
var map__67782__$1 = (((((!((map__67782 == null))))?(((((map__67782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67782):map__67782);
var env = map__67782__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67782__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
var fail_fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67782__$1,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465));
if(cljs.core.truth_(fail_fast_QMARK_)){
return (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,p) : mutate.call(null,env,k,p));
} else {
try{return com.wsscode.pathom.core.update_action((mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,p) : mutate.call(null,env,k,p)),((function (map__67782,map__67782__$1,env,process_error,fail_fast_QMARK_){
return (function (action){
return ((function (map__67782,map__67782__$1,env,process_error,fail_fast_QMARK_){
return (function (){
try{var res = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
if(com.wsscode.common.async_cljs.chan_QMARK_(res)){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,res,map__67782,map__67782__$1,env,process_error,fail_fast_QMARK_){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,res,map__67782,map__67782__$1,env,process_error,fail_fast_QMARK_){
return (function (state_67805){
var state_val_67806 = (state_67805[(1)]);
if((state_val_67806 === (1))){
var state_67805__$1 = state_67805;
var statearr_67807_69060 = state_67805__$1;
(statearr_67807_69060[(2)] = null);

(statearr_67807_69060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67806 === (2))){
var inst_67803 = (state_67805[(2)]);
var state_67805__$1 = state_67805;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67805__$1,inst_67803);
} else {
if((state_val_67806 === (3))){
var inst_67786 = (state_67805[(2)]);
var state_67805__$1 = (function (){var statearr_67808 = state_67805;
(statearr_67808[(7)] = inst_67786);

return statearr_67808;
})();
if(cljs.core.truth_(process_error)){
var statearr_67809_69071 = state_67805__$1;
(statearr_67809_69071[(1)] = (4));

} else {
var statearr_67810_69077 = state_67805__$1;
(statearr_67810_69077[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67806 === (4))){
var inst_67786 = (state_67805[(7)]);
var inst_67788 = (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,inst_67786) : process_error.call(null,env,inst_67786));
var state_67805__$1 = state_67805;
var statearr_67811_69092 = state_67805__$1;
(statearr_67811_69092[(2)] = inst_67788);

(statearr_67811_69092[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67806 === (5))){
var inst_67786 = (state_67805[(7)]);
var inst_67790 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_67791 = com.wsscode.pathom.core.error_str(inst_67786);
var inst_67792 = [inst_67791];
var inst_67793 = cljs.core.PersistentHashMap.fromArrays(inst_67790,inst_67792);
var state_67805__$1 = state_67805;
var statearr_67812_69115 = state_67805__$1;
(statearr_67812_69115[(2)] = inst_67793);

(statearr_67812_69115[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67806 === (6))){
var inst_67795 = (state_67805[(2)]);
var state_67805__$1 = state_67805;
var statearr_67813_69116 = state_67805__$1;
(statearr_67813_69116[(2)] = inst_67795);


cljs.core.async.impl.ioc_helpers.process_exception(state_67805__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67806 === (7))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_67805,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_67805__$1 = state_67805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67805__$1,(8),res);
} else {
if((state_val_67806 === (8))){
var inst_67800 = (state_67805[(2)]);
var inst_67801 = com.wsscode.common.async_cljs.throw_err(inst_67800);
var state_67805__$1 = state_67805;
var statearr_67814_69120 = state_67805__$1;
(statearr_67814_69120[(2)] = inst_67801);


cljs.core.async.impl.ioc_helpers.process_exception(state_67805__$1);

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
});})(c__45808__auto__,res,map__67782,map__67782__$1,env,process_error,fail_fast_QMARK_))
;
return ((function (switch__45525__auto__,c__45808__auto__,res,map__67782,map__67782__$1,env,process_error,fail_fast_QMARK_){
return (function() {
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__45526__auto____0 = (function (){
var statearr_67815 = [null,null,null,null,null,null,null,null];
(statearr_67815[(0)] = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__45526__auto__);

(statearr_67815[(1)] = (1));

return statearr_67815;
});
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__45526__auto____1 = (function (state_67805){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_67805);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e67816){if((e67816 instanceof Object)){
var ex__45529__auto__ = e67816;
var statearr_67817_69148 = state_67805;
(statearr_67817_69148[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67816;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69154 = state_67805;
state_67805 = G__69154;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__45526__auto__ = function(state_67805){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__45526__auto____1.call(this,state_67805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__45526__auto____0;
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__45526__auto____1;
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,res,map__67782,map__67782__$1,env,process_error,fail_fast_QMARK_))
})();
var state__45810__auto__ = (function (){var statearr_67818 = f__45809__auto__();
(statearr_67818[(6)] = c__45808__auto__);

return statearr_67818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,res,map__67782,map__67782__$1,env,process_error,fail_fast_QMARK_))
);

return c__45808__auto__;
} else {
return res;
}
}catch (e67785){var e = e67785;
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),com.wsscode.pathom.core.error_str(e)], null);
}
}});
;})(map__67782,map__67782__$1,env,process_error,fail_fast_QMARK_))
});})(map__67782,map__67782__$1,env,process_error,fail_fast_QMARK_))
);
}catch (e67784){var e = e67784;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (e,map__67782,map__67782__$1,env,process_error,fail_fast_QMARK_){
return (function (){
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),com.wsscode.pathom.core.error_str(e)], null);
}
});})(e,map__67782,map__67782__$1,env,process_error,fail_fast_QMARK_))
], null);
}}
});
});
com.wsscode.pathom.core.wrap_parser_exception = (function com$wsscode$pathom$core$wrap_parser_exception(parser){
return (function com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal(env,tx){
var errors = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var res__61936__auto__ = (function (){var G__67819 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276),errors);
var G__67820 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__67819,G__67820) : parser.call(null,G__67819,G__67820));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__61936__auto__)){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,res__61936__auto__,errors){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,res__61936__auto__,errors){
return (function (state_67840){
var state_val_67841 = (state_67840[(1)]);
if((state_val_67841 === (1))){
var state_67840__$1 = state_67840;
var statearr_67842_69193 = state_67840__$1;
(statearr_67842_69193[(2)] = null);

(statearr_67842_69193[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67841 === (2))){
var inst_67838 = (state_67840[(2)]);
var state_67840__$1 = state_67840;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67840__$1,inst_67838);
} else {
if((state_val_67841 === (3))){
var inst_67821 = (state_67840[(2)]);
var state_67840__$1 = state_67840;
var statearr_67843_69194 = state_67840__$1;
(statearr_67843_69194[(2)] = inst_67821);


cljs.core.async.impl.ioc_helpers.process_exception(state_67840__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67841 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_67840,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_67840__$1 = state_67840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67840__$1,(5),res__61936__auto__);
} else {
if((state_val_67841 === (5))){
var inst_67826 = (state_67840[(2)]);
var inst_67827 = com.wsscode.common.async_cljs.throw_err(inst_67826);
var inst_67829 = cljs.core.deref(errors);
var inst_67830 = cljs.core.seq(inst_67829);
var state_67840__$1 = (function (){var statearr_67844 = state_67840;
(statearr_67844[(7)] = inst_67827);

return statearr_67844;
})();
if(inst_67830){
var statearr_67845_69200 = state_67840__$1;
(statearr_67845_69200[(1)] = (6));

} else {
var statearr_67846_69201 = state_67840__$1;
(statearr_67846_69201[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67841 === (6))){
var inst_67827 = (state_67840[(7)]);
var inst_67832 = cljs.core.deref(errors);
var inst_67833 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_67827,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),inst_67832);
var state_67840__$1 = state_67840;
var statearr_67847_69205 = state_67840__$1;
(statearr_67847_69205[(2)] = inst_67833);

(statearr_67847_69205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67841 === (7))){
var inst_67827 = (state_67840[(7)]);
var state_67840__$1 = state_67840;
var statearr_67848_69208 = state_67840__$1;
(statearr_67848_69208[(2)] = inst_67827);

(statearr_67848_69208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67841 === (8))){
var inst_67836 = (state_67840[(2)]);
var state_67840__$1 = state_67840;
var statearr_67849_69211 = state_67840__$1;
(statearr_67849_69211[(2)] = inst_67836);


cljs.core.async.impl.ioc_helpers.process_exception(state_67840__$1);

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
});})(c__45808__auto__,res__61936__auto__,errors))
;
return ((function (switch__45525__auto__,c__45808__auto__,res__61936__auto__,errors){
return (function() {
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__45526__auto____0 = (function (){
var statearr_67850 = [null,null,null,null,null,null,null,null];
(statearr_67850[(0)] = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__45526__auto__);

(statearr_67850[(1)] = (1));

return statearr_67850;
});
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__45526__auto____1 = (function (state_67840){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_67840);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e67851){if((e67851 instanceof Object)){
var ex__45529__auto__ = e67851;
var statearr_67852_69217 = state_67840;
(statearr_67852_69217[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67851;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69219 = state_67840;
state_67840 = G__69219;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__45526__auto__ = function(state_67840){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__45526__auto____1.call(this,state_67840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__45526__auto____0;
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__45526__auto____1;
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,res__61936__auto__,errors))
})();
var state__45810__auto__ = (function (){var statearr_67853 = f__45809__auto__();
(statearr_67853[(6)] = c__45808__auto__);

return statearr_67853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,res__61936__auto__,errors))
);

return c__45808__auto__;
} else {
var res = res__61936__auto__;
var G__67854 = res;
if(cljs.core.seq(cljs.core.deref(errors))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67854,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),cljs.core.deref(errors));
} else {
return G__67854;
}
}
});
});
com.wsscode.pathom.core.error_handler_plugin = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),com.wsscode.pathom.core.wrap_handle_exception,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),com.wsscode.pathom.core.wrap_parser_exception,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-mutate","com.wsscode.pathom.core/wrap-mutate",989863202),com.wsscode.pathom.core.wrap_mutate_handle_exception], null);
com.wsscode.pathom.core.trace_plugin = com.wsscode.pathom.trace.trace_plugin;
com.wsscode.pathom.core.collapse_error_path = (function com$wsscode$pathom$core$collapse_error_path(m,path){

return cljs.core.vec((function (){var path_SINGLEQUOTE_ = path;
while(true){
if((cljs.core.count(path_SINGLEQUOTE_) === (0))){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),path);
} else {
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,path_SINGLEQUOTE_))){
return path_SINGLEQUOTE_;
} else {
var G__69228 = cljs.core.butlast(path_SINGLEQUOTE_);
path_SINGLEQUOTE_ = G__69228;
continue;
}
}
break;
}
})());
});
com.wsscode.pathom.core.raise_errors = (function com$wsscode$pathom$core$raise_errors(data){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__67855){
var vec__67856 = p__67855;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67856,(0),null);
var err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67856,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,path))){
var path_SINGLEQUOTE_ = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),cljs.core.last(path)], null));
return cljs.core.assoc_in(m,path_SINGLEQUOTE_,err);
} else {
return m;
}
}),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)));
});
/**
 * Mutations running through a parser all come back in a map like this {'my/mutation {:result {...}}}. This function
 *   converts that to {'my/mutation {...}}. Copied from fulcro.server.
 */
com.wsscode.pathom.core.raise_response = (function com$wsscode$pathom$core$raise_response(resp){
return clojure.walk.prewalk((function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__67859){
var vec__67860 = p__67859;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67860,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67860,(1),null);
if((((k instanceof cljs.core.Symbol)) && ((!((new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(v) == null)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(v));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,x);
} else {
return x;
}
}),resp);
});
com.wsscode.pathom.core.raise_mutation_result_plugin = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),(function com$wsscode$pathom$core$raise_mutation_result_wrap_parser(parser){
return (function com$wsscode$pathom$core$raise_mutation_result_wrap_parser_$_raise_mutation_result_wrap_internal(env,tx){
return com.wsscode.pathom.core.raise_response((parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,tx) : parser.call(null,env,tx)));
});
})], null);
com.wsscode.pathom.core.env_plugin = (function com$wsscode$pathom$core$env_plugin(extra_env){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),(function com$wsscode$pathom$core$env_plugin_$_env_plugin_wrap_parser(parser){
return (function com$wsscode$pathom$core$env_plugin_$_env_plugin_wrap_parser_$_env_plugin_wrap_internal(env,tx){
var G__67863 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([extra_env,env], 0));
var G__67864 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__67863,G__67864) : parser.call(null,G__67863,G__67864));
});
})], null);
});
/**
 * This plugin receives a function that will be called to wrap the current
 *   enviroment each time the main parser is called (parser level).
 */
com.wsscode.pathom.core.env_wrap_plugin = (function com$wsscode$pathom$core$env_wrap_plugin(extra_env_wrapper){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),(function com$wsscode$pathom$core$env_wrap_plugin_$_env_wrap_wrap_parser(parser){
return (function com$wsscode$pathom$core$env_wrap_plugin_$_env_wrap_wrap_parser_$_env_wrap_wrap_internal(env,tx){
var G__67865 = (extra_env_wrapper.cljs$core$IFn$_invoke$arity$1 ? extra_env_wrapper.cljs$core$IFn$_invoke$arity$1(env) : extra_env_wrapper.call(null,env));
var G__67866 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__67865,G__67866) : parser.call(null,G__67865,G__67866));
});
})], null);
});
/**
 * DEPRECATED not required anymore, this was integrated in the main engine.
 */
com.wsscode.pathom.core.request_cache_plugin = cljs.core.PersistentArrayMap.EMPTY;
com.wsscode.pathom.core.cached_STAR_ = (function com$wsscode$pathom$core$cached_STAR_(env,key,body_fn){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
if(cljs.core.truth_(temp__5718__auto__)){
var cache = temp__5718__auto__;
var temp__5718__auto____$1 = cljs.core.find(cljs.core.deref(cache),key);
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__67867 = temp__5718__auto____$1;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67867,(0),null);
var hit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67867,(1),null);
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-hit","com.wsscode.pathom.core/cache-hit",1851998374),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

return com.wsscode.common.async_cljs.throw_err(hit);
} else {
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-miss","com.wsscode.pathom.core/cache-miss",1311426337),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

var res__61936__auto__ = (function (){try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}catch (e67870){var e = e67870;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,key,e);

throw e;
}})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__61936__auto__)){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,res__61936__auto__,temp__5718__auto____$1,cache,temp__5718__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,res__61936__auto__,temp__5718__auto____$1,cache,temp__5718__auto__){
return (function (state_67882){
var state_val_67883 = (state_67882[(1)]);
if((state_val_67883 === (1))){
var state_67882__$1 = state_67882;
var statearr_67884_69258 = state_67882__$1;
(statearr_67884_69258[(2)] = null);

(statearr_67884_69258[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67883 === (2))){
var inst_67880 = (state_67882[(2)]);
var state_67882__$1 = state_67882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67882__$1,inst_67880);
} else {
if((state_val_67883 === (3))){
var inst_67871 = (state_67882[(2)]);
var state_67882__$1 = state_67882;
var statearr_67885_69260 = state_67882__$1;
(statearr_67885_69260[(2)] = inst_67871);


cljs.core.async.impl.ioc_helpers.process_exception(state_67882__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67883 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_67882,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_67882__$1 = state_67882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67882__$1,(5),res__61936__auto__);
} else {
if((state_val_67883 === (5))){
var inst_67876 = (state_67882[(2)]);
var inst_67877 = com.wsscode.common.async_cljs.throw_err(inst_67876);
var inst_67878 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,key,inst_67877);
var state_67882__$1 = (function (){var statearr_67886 = state_67882;
(statearr_67886[(7)] = inst_67878);

return statearr_67886;
})();
var statearr_67887_69266 = state_67882__$1;
(statearr_67887_69266[(2)] = inst_67877);


cljs.core.async.impl.ioc_helpers.process_exception(state_67882__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__45808__auto__,res__61936__auto__,temp__5718__auto____$1,cache,temp__5718__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto__,res__61936__auto__,temp__5718__auto____$1,cache,temp__5718__auto__){
return (function() {
var com$wsscode$pathom$core$cached_STAR__$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$core$cached_STAR__$_state_machine__45526__auto____0 = (function (){
var statearr_67888 = [null,null,null,null,null,null,null,null];
(statearr_67888[(0)] = com$wsscode$pathom$core$cached_STAR__$_state_machine__45526__auto__);

(statearr_67888[(1)] = (1));

return statearr_67888;
});
var com$wsscode$pathom$core$cached_STAR__$_state_machine__45526__auto____1 = (function (state_67882){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_67882);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e67889){if((e67889 instanceof Object)){
var ex__45529__auto__ = e67889;
var statearr_67890_69274 = state_67882;
(statearr_67890_69274[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67889;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69278 = state_67882;
state_67882 = G__69278;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_STAR__$_state_machine__45526__auto__ = function(state_67882){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_STAR__$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_STAR__$_state_machine__45526__auto____1.call(this,state_67882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_STAR__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_STAR__$_state_machine__45526__auto____0;
com$wsscode$pathom$core$cached_STAR__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_STAR__$_state_machine__45526__auto____1;
return com$wsscode$pathom$core$cached_STAR__$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,res__61936__auto__,temp__5718__auto____$1,cache,temp__5718__auto__))
})();
var state__45810__auto__ = (function (){var statearr_67891 = f__45809__auto__();
(statearr_67891[(6)] = c__45808__auto__);

return statearr_67891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,res__61936__auto__,temp__5718__auto____$1,cache,temp__5718__auto__))
);

return c__45808__auto__;
} else {
var hit = res__61936__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,key,hit);

return hit;
}
}
} else {
return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}
});
com.wsscode.pathom.core.cached_async_STAR_ = (function com$wsscode$pathom$core$cached_async_STAR_(env,key,f){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
if(cljs.core.truth_(temp__5718__auto__)){
var cache = temp__5718__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.update,key,((function (cache,temp__5718__auto__){
return (function (x){
if(cljs.core.truth_(x)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-hit","com.wsscode.pathom.core/cache-hit",1851998374),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

return x;
} else {
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-miss","com.wsscode.pathom.core/cache-miss",1311426337),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

var ch__61989__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__45808__auto___69292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto___69292,ch__61989__auto__,cache,temp__5718__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto___69292,ch__61989__auto__,cache,temp__5718__auto__){
return (function (state_67908){
var state_val_67909 = (state_67908[(1)]);
if((state_val_67909 === (1))){
var state_67908__$1 = state_67908;
var statearr_67910_69295 = state_67908__$1;
(statearr_67910_69295[(2)] = null);

(statearr_67910_69295[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67909 === (2))){
var inst_67905 = (state_67908[(2)]);
var inst_67906 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__61989__auto__,inst_67905);
var state_67908__$1 = state_67908;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67908__$1,inst_67906);
} else {
if((state_val_67909 === (3))){
var inst_67892 = (state_67908[(2)]);
var state_67908__$1 = state_67908;
var statearr_67911_69299 = state_67908__$1;
(statearr_67911_69299[(2)] = inst_67892);


cljs.core.async.impl.ioc_helpers.process_exception(state_67908__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67909 === (4))){
var inst_67896 = (state_67908[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_67908,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_67896__$1 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var inst_67897 = com.wsscode.common.async_cljs.chan_QMARK_(inst_67896__$1);
var state_67908__$1 = (function (){var statearr_67912 = state_67908;
(statearr_67912[(7)] = inst_67896__$1);

return statearr_67912;
})();
if(inst_67897){
var statearr_67913_69307 = state_67908__$1;
(statearr_67913_69307[(1)] = (5));

} else {
var statearr_67914_69308 = state_67908__$1;
(statearr_67914_69308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67909 === (5))){
var inst_67896 = (state_67908[(7)]);
var state_67908__$1 = state_67908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67908__$1,(8),inst_67896);
} else {
if((state_val_67909 === (6))){
var inst_67896 = (state_67908[(7)]);
var state_67908__$1 = state_67908;
var statearr_67915_69312 = state_67908__$1;
(statearr_67915_69312[(2)] = inst_67896);

(statearr_67915_69312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67909 === (7))){
var inst_67903 = (state_67908[(2)]);
var state_67908__$1 = state_67908;
var statearr_67916_69314 = state_67908__$1;
(statearr_67916_69314[(2)] = inst_67903);


cljs.core.async.impl.ioc_helpers.process_exception(state_67908__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67909 === (8))){
var inst_67900 = (state_67908[(2)]);
var state_67908__$1 = state_67908;
var statearr_67917_69315 = state_67908__$1;
(statearr_67917_69315[(2)] = inst_67900);

(statearr_67917_69315[(1)] = (7));


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
});})(c__45808__auto___69292,ch__61989__auto__,cache,temp__5718__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto___69292,ch__61989__auto__,cache,temp__5718__auto__){
return (function() {
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__45526__auto____0 = (function (){
var statearr_67918 = [null,null,null,null,null,null,null,null];
(statearr_67918[(0)] = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__45526__auto__);

(statearr_67918[(1)] = (1));

return statearr_67918;
});
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__45526__auto____1 = (function (state_67908){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_67908);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e67919){if((e67919 instanceof Object)){
var ex__45529__auto__ = e67919;
var statearr_67920_69320 = state_67908;
(statearr_67920_69320[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67919;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69321 = state_67908;
state_67908 = G__69321;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__45526__auto__ = function(state_67908){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__45526__auto____1.call(this,state_67908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__45526__auto____0;
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__45526__auto____1;
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto___69292,ch__61989__auto__,cache,temp__5718__auto__))
})();
var state__45810__auto__ = (function (){var statearr_67921 = f__45809__auto__();
(statearr_67921[(6)] = c__45808__auto___69292);

return statearr_67921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto___69292,ch__61989__auto__,cache,temp__5718__auto__))
);


return ch__61989__auto__;
}
});})(cache,temp__5718__auto__))
);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache),key);
} else {
var ch__61989__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__45808__auto___69327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto___69327,ch__61989__auto__,temp__5718__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto___69327,ch__61989__auto__,temp__5718__auto__){
return (function (state_67938){
var state_val_67939 = (state_67938[(1)]);
if((state_val_67939 === (1))){
var state_67938__$1 = state_67938;
var statearr_67940_69330 = state_67938__$1;
(statearr_67940_69330[(2)] = null);

(statearr_67940_69330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67939 === (2))){
var inst_67935 = (state_67938[(2)]);
var inst_67936 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__61989__auto__,inst_67935);
var state_67938__$1 = state_67938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67938__$1,inst_67936);
} else {
if((state_val_67939 === (3))){
var inst_67922 = (state_67938[(2)]);
var state_67938__$1 = state_67938;
var statearr_67941_69331 = state_67938__$1;
(statearr_67941_69331[(2)] = inst_67922);


cljs.core.async.impl.ioc_helpers.process_exception(state_67938__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67939 === (4))){
var inst_67926 = (state_67938[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_67938,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_67926__$1 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var inst_67927 = com.wsscode.common.async_cljs.chan_QMARK_(inst_67926__$1);
var state_67938__$1 = (function (){var statearr_67942 = state_67938;
(statearr_67942[(7)] = inst_67926__$1);

return statearr_67942;
})();
if(inst_67927){
var statearr_67943_69333 = state_67938__$1;
(statearr_67943_69333[(1)] = (5));

} else {
var statearr_67944_69334 = state_67938__$1;
(statearr_67944_69334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67939 === (5))){
var inst_67926 = (state_67938[(7)]);
var state_67938__$1 = state_67938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67938__$1,(8),inst_67926);
} else {
if((state_val_67939 === (6))){
var inst_67926 = (state_67938[(7)]);
var state_67938__$1 = state_67938;
var statearr_67945_69339 = state_67938__$1;
(statearr_67945_69339[(2)] = inst_67926);

(statearr_67945_69339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67939 === (7))){
var inst_67933 = (state_67938[(2)]);
var state_67938__$1 = state_67938;
var statearr_67946_69340 = state_67938__$1;
(statearr_67946_69340[(2)] = inst_67933);


cljs.core.async.impl.ioc_helpers.process_exception(state_67938__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67939 === (8))){
var inst_67930 = (state_67938[(2)]);
var state_67938__$1 = state_67938;
var statearr_67947_69342 = state_67938__$1;
(statearr_67947_69342[(2)] = inst_67930);

(statearr_67947_69342[(1)] = (7));


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
});})(c__45808__auto___69327,ch__61989__auto__,temp__5718__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto___69327,ch__61989__auto__,temp__5718__auto__){
return (function() {
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__45526__auto____0 = (function (){
var statearr_67948 = [null,null,null,null,null,null,null,null];
(statearr_67948[(0)] = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__45526__auto__);

(statearr_67948[(1)] = (1));

return statearr_67948;
});
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__45526__auto____1 = (function (state_67938){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_67938);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e67949){if((e67949 instanceof Object)){
var ex__45529__auto__ = e67949;
var statearr_67950_69344 = state_67938;
(statearr_67950_69344[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67949;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69346 = state_67938;
state_67938 = G__69346;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__45526__auto__ = function(state_67938){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__45526__auto____1.call(this,state_67938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__45526__auto____0;
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__45526__auto____1;
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto___69327,ch__61989__auto__,temp__5718__auto__))
})();
var state__45810__auto__ = (function (){var statearr_67951 = f__45809__auto__();
(statearr_67951[(6)] = c__45808__auto___69327);

return statearr_67951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto___69327,ch__61989__auto__,temp__5718__auto__))
);


return ch__61989__auto__;
}
});
com.wsscode.pathom.core.cached_async = (function com$wsscode$pathom$core$cached_async(p__67952,key,f){
var map__67953 = p__67952;
var map__67953__$1 = (((((!((map__67953 == null))))?(((((map__67953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67953):map__67953);
var env = map__67953__$1;
var async_request_cache_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67953__$1,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch","com.wsscode.pathom.core/async-request-cache-ch",-1864666369));
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67953__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
if(cljs.core.truth_(async_request_cache_ch)){
if(cljs.core.contains_QMARK_(cljs.core.deref(request_cache),key)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(request_cache),key);
} else {
var out = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(async_request_cache_ch,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,key,f,out], null));

var ch__61989__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__45808__auto___69347 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto___69347,ch__61989__auto__,out,map__67953,map__67953__$1,env,async_request_cache_ch,request_cache){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto___69347,ch__61989__auto__,out,map__67953,map__67953__$1,env,async_request_cache_ch,request_cache){
return (function (state_67967){
var state_val_67968 = (state_67967[(1)]);
if((state_val_67968 === (1))){
var state_67967__$1 = state_67967;
var statearr_67969_69355 = state_67967__$1;
(statearr_67969_69355[(2)] = null);

(statearr_67969_69355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67968 === (2))){
var inst_67964 = (state_67967[(2)]);
var inst_67965 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__61989__auto__,inst_67964);
var state_67967__$1 = state_67967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67967__$1,inst_67965);
} else {
if((state_val_67968 === (3))){
var inst_67955 = (state_67967[(2)]);
var state_67967__$1 = state_67967;
var statearr_67970_69357 = state_67967__$1;
(statearr_67970_69357[(2)] = inst_67955);


cljs.core.async.impl.ioc_helpers.process_exception(state_67967__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67968 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_67967,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_67967__$1 = state_67967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67967__$1,(6),out);
} else {
if((state_val_67968 === (5))){
var inst_67962 = (state_67967[(2)]);
var state_67967__$1 = state_67967;
var statearr_67971_69358 = state_67967__$1;
(statearr_67971_69358[(2)] = inst_67962);


cljs.core.async.impl.ioc_helpers.process_exception(state_67967__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67968 === (6))){
var inst_67960 = (state_67967[(2)]);
var state_67967__$1 = state_67967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67967__$1,(5),inst_67960);
} else {
return null;
}
}
}
}
}
}
});})(c__45808__auto___69347,ch__61989__auto__,out,map__67953,map__67953__$1,env,async_request_cache_ch,request_cache))
;
return ((function (switch__45525__auto__,c__45808__auto___69347,ch__61989__auto__,out,map__67953,map__67953__$1,env,async_request_cache_ch,request_cache){
return (function() {
var com$wsscode$pathom$core$cached_async_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$core$cached_async_$_state_machine__45526__auto____0 = (function (){
var statearr_67972 = [null,null,null,null,null,null,null];
(statearr_67972[(0)] = com$wsscode$pathom$core$cached_async_$_state_machine__45526__auto__);

(statearr_67972[(1)] = (1));

return statearr_67972;
});
var com$wsscode$pathom$core$cached_async_$_state_machine__45526__auto____1 = (function (state_67967){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_67967);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e67973){if((e67973 instanceof Object)){
var ex__45529__auto__ = e67973;
var statearr_67974_69359 = state_67967;
(statearr_67974_69359[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67973;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69360 = state_67967;
state_67967 = G__69360;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_$_state_machine__45526__auto__ = function(state_67967){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_$_state_machine__45526__auto____1.call(this,state_67967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_$_state_machine__45526__auto____0;
com$wsscode$pathom$core$cached_async_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_$_state_machine__45526__auto____1;
return com$wsscode$pathom$core$cached_async_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto___69347,ch__61989__auto__,out,map__67953,map__67953__$1,env,async_request_cache_ch,request_cache))
})();
var state__45810__auto__ = (function (){var statearr_67975 = f__45809__auto__();
(statearr_67975[(6)] = c__45808__auto___69347);

return statearr_67975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto___69347,ch__61989__auto__,out,map__67953,map__67953__$1,env,async_request_cache_ch,request_cache))
);


return ch__61989__auto__;
}
} else {
return com.wsscode.pathom.core.cached_async_STAR_(env,key,f);
}
});
com.wsscode.pathom.core.request_cache_async_loop = (function com$wsscode$pathom$core$request_cache_async_loop(ch){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__){
return (function (state_67997){
var state_val_67998 = (state_67997[(1)]);
if((state_val_67998 === (1))){
var state_67997__$1 = state_67997;
var statearr_67999_69365 = state_67997__$1;
(statearr_67999_69365[(2)] = null);

(statearr_67999_69365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67998 === (2))){
var state_67997__$1 = state_67997;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67997__$1,(4),ch);
} else {
if((state_val_67998 === (3))){
var inst_67995 = (state_67997[(2)]);
var state_67997__$1 = state_67997;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67997__$1,inst_67995);
} else {
if((state_val_67998 === (4))){
var inst_67978 = (state_67997[(7)]);
var inst_67978__$1 = (state_67997[(2)]);
var state_67997__$1 = (function (){var statearr_68000 = state_67997;
(statearr_68000[(7)] = inst_67978__$1);

return statearr_68000;
})();
if(cljs.core.truth_(inst_67978__$1)){
var statearr_68001_69373 = state_67997__$1;
(statearr_68001_69373[(1)] = (5));

} else {
var statearr_68002_69374 = state_67997__$1;
(statearr_68002_69374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67998 === (5))){
var inst_67978 = (state_67997[(7)]);
var inst_67983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67978,(0),null);
var inst_67984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67978,(1),null);
var inst_67985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67978,(2),null);
var inst_67986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_67978,(3),null);
var inst_67987 = com.wsscode.pathom.core.cached_async_STAR_(inst_67983,inst_67984,inst_67985);
var state_67997__$1 = state_67997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67997__$1,(8),inst_67986,inst_67987);
} else {
if((state_val_67998 === (6))){
var state_67997__$1 = state_67997;
var statearr_68003_69375 = state_67997__$1;
(statearr_68003_69375[(2)] = null);

(statearr_68003_69375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67998 === (7))){
var inst_67993 = (state_67997[(2)]);
var state_67997__$1 = state_67997;
var statearr_68004_69380 = state_67997__$1;
(statearr_68004_69380[(2)] = inst_67993);

(statearr_68004_69380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67998 === (8))){
var inst_67989 = (state_67997[(2)]);
var state_67997__$1 = (function (){var statearr_68005 = state_67997;
(statearr_68005[(8)] = inst_67989);

return statearr_68005;
})();
var statearr_68006_69383 = state_67997__$1;
(statearr_68006_69383[(2)] = null);

(statearr_68006_69383[(1)] = (2));


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
});})(c__45808__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto__){
return (function() {
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__45526__auto____0 = (function (){
var statearr_68007 = [null,null,null,null,null,null,null,null,null];
(statearr_68007[(0)] = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__45526__auto__);

(statearr_68007[(1)] = (1));

return statearr_68007;
});
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__45526__auto____1 = (function (state_67997){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_67997);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e68008){if((e68008 instanceof Object)){
var ex__45529__auto__ = e68008;
var statearr_68009_69391 = state_67997;
(statearr_68009_69391[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68008;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69392 = state_67997;
state_67997 = G__69392;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__45526__auto__ = function(state_67997){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__45526__auto____1.call(this,state_67997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__45526__auto____0;
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__45526__auto____1;
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__))
})();
var state__45810__auto__ = (function (){var statearr_68010 = f__45809__auto__();
(statearr_68010[(6)] = c__45808__auto__);

return statearr_68010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__))
);

return c__45808__auto__;
});
com.wsscode.pathom.core.cache_hit = (function com$wsscode$pathom$core$cache_hit(p__68011,key,value){
var map__68012 = p__68011;
var map__68012__$1 = (((((!((map__68012 == null))))?(((((map__68012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68012):map__68012);
var env = map__68012__$1;
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68012__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-miss","com.wsscode.pathom.core/cache-miss",1311426337),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(request_cache,cljs.core.assoc,key,value);

return value;
});
com.wsscode.pathom.core.cache_contains_QMARK_ = (function com$wsscode$pathom$core$cache_contains_QMARK_(p__68014,key){
var map__68015 = p__68014;
var map__68015__$1 = (((((!((map__68015 == null))))?(((((map__68015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68015):map__68015);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68015__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.contains_QMARK_(cljs.core.deref(request_cache),key);
});
com.wsscode.pathom.core.cache_read = (function com$wsscode$pathom$core$cache_read(p__68017,key){
var map__68018 = p__68017;
var map__68018__$1 = (((((!((map__68018 == null))))?(((((map__68018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68018):map__68018);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68018__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(request_cache),key);
});
com.wsscode.pathom.core.wrap_add_path = (function com$wsscode$pathom$core$wrap_add_path(reader){
return (function (p__68020){
var map__68021 = p__68020;
var map__68021__$1 = (((((!((map__68021 == null))))?(((((map__68021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68021):map__68021);
var env = map__68021__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68021__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var G__68023 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(G__68023) : reader.call(null,G__68023));
});
});
com.wsscode.pathom.core.group_plugins_by_action = (function com$wsscode$pathom$core$group_plugins_by_action(plugins){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g,p){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$1,p__68024){
var vec__68025 = p__68024;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68025,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68025,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(g__$1,k,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
}),g,p);
}),cljs.core.PersistentArrayMap.EMPTY,plugins);
});
com.wsscode.pathom.core.wrap_normalize_env = (function com$wsscode$pathom$core$wrap_normalize_env(var_args){
var G__68029 = arguments.length;
switch (G__68029) {
case 1:
return com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$1 = (function (parser){
return com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$2(parser,cljs.core.PersistentVector.EMPTY);
});

com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$2 = (function (parser,plugins){
return (function() {
var com$wsscode$pathom$core$wrap_normalize_env_internal = null;
var com$wsscode$pathom$core$wrap_normalize_env_internal__2 = (function (env,tx){
return com$wsscode$pathom$core$wrap_normalize_env_internal.cljs$core$IFn$_invoke$arity$3(env,tx,null);
});
var com$wsscode$pathom$core$wrap_normalize_env_internal__3 = (function (env,tx,target){
var G__68030 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),tx,new cljs.core.Keyword("com.wsscode.pathom.core","root-query","com.wsscode.pathom.core/root-query",-100266682),tx], null),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","plugin-actions","com.wsscode.pathom.core/plugin-actions",-876552970),com.wsscode.pathom.core.group_plugins_by_action(plugins),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),plugins,new cljs.core.Keyword(null,"target","target",253001721),target], null)], 0));
var G__68031 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__68030,G__68031) : parser.call(null,G__68030,G__68031));
});
com$wsscode$pathom$core$wrap_normalize_env_internal = function(env,tx,target){
switch(arguments.length){
case 2:
return com$wsscode$pathom$core$wrap_normalize_env_internal__2.call(this,env,tx);
case 3:
return com$wsscode$pathom$core$wrap_normalize_env_internal__3.call(this,env,tx,target);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_normalize_env_internal.cljs$core$IFn$_invoke$arity$2 = com$wsscode$pathom$core$wrap_normalize_env_internal__2;
com$wsscode$pathom$core$wrap_normalize_env_internal.cljs$core$IFn$_invoke$arity$3 = com$wsscode$pathom$core$wrap_normalize_env_internal__3;
return com$wsscode$pathom$core$wrap_normalize_env_internal;
})()
});

com.wsscode.pathom.core.wrap_normalize_env.cljs$lang$maxFixedArity = 2;

com.wsscode.pathom.core.wrap_parallel_setup = (function com$wsscode$pathom$core$wrap_parallel_setup(parser){
return (function com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal(env,tx){
var signal = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var res__61936__auto__ = (function (){var G__68032 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.parser","done-signal*","com.wsscode.pathom.parser/done-signal*",2069309538),signal,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","active-paths","com.wsscode.pathom.parser/active-paths",457466204),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.PersistentVector.EMPTY], 0));
var G__68033 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__68032,G__68033) : parser.call(null,G__68032,G__68033));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__61936__auto__)){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,res__61936__auto__,signal){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,res__61936__auto__,signal){
return (function (state_68045){
var state_val_68046 = (state_68045[(1)]);
if((state_val_68046 === (1))){
var state_68045__$1 = state_68045;
var statearr_68047_69449 = state_68045__$1;
(statearr_68047_69449[(2)] = null);

(statearr_68047_69449[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68046 === (2))){
var inst_68043 = (state_68045[(2)]);
var state_68045__$1 = state_68045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68045__$1,inst_68043);
} else {
if((state_val_68046 === (3))){
var inst_68034 = (state_68045[(2)]);
var state_68045__$1 = state_68045;
var statearr_68048_69452 = state_68045__$1;
(statearr_68048_69452[(2)] = inst_68034);


cljs.core.async.impl.ioc_helpers.process_exception(state_68045__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68046 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_68045,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_68045__$1 = state_68045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68045__$1,(5),res__61936__auto__);
} else {
if((state_val_68046 === (5))){
var inst_68039 = (state_68045[(2)]);
var inst_68040 = com.wsscode.common.async_cljs.throw_err(inst_68039);
var inst_68041 = cljs.core.reset_BANG_(signal,true);
var state_68045__$1 = (function (){var statearr_68049 = state_68045;
(statearr_68049[(7)] = inst_68041);

return statearr_68049;
})();
var statearr_68050_69456 = state_68045__$1;
(statearr_68050_69456[(2)] = inst_68040);


cljs.core.async.impl.ioc_helpers.process_exception(state_68045__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__45808__auto__,res__61936__auto__,signal))
;
return ((function (switch__45525__auto__,c__45808__auto__,res__61936__auto__,signal){
return (function() {
var com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__45526__auto____0 = (function (){
var statearr_68051 = [null,null,null,null,null,null,null,null];
(statearr_68051[(0)] = com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__45526__auto__);

(statearr_68051[(1)] = (1));

return statearr_68051;
});
var com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__45526__auto____1 = (function (state_68045){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_68045);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e68052){if((e68052 instanceof Object)){
var ex__45529__auto__ = e68052;
var statearr_68053_69462 = state_68045;
(statearr_68053_69462[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68052;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69463 = state_68045;
state_68045 = G__69463;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__45526__auto__ = function(state_68045){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__45526__auto____1.call(this,state_68045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__45526__auto____0;
com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__45526__auto____1;
return com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,res__61936__auto__,signal))
})();
var state__45810__auto__ = (function (){var statearr_68054 = f__45809__auto__();
(statearr_68054[(6)] = c__45808__auto__);

return statearr_68054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,res__61936__auto__,signal))
);

return c__45808__auto__;
} else {
var res = res__61936__auto__;
cljs.core.reset_BANG_(signal,true);

return res;
}
});
});
com.wsscode.pathom.core.wrap_setup_async_cache = (function com$wsscode$pathom$core$wrap_setup_async_cache(parser){
return (function com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal(env,tx){
var async_cache_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch-size","com.wsscode.pathom.core/async-request-cache-ch-size",-437531159),(1024)));
com.wsscode.pathom.core.request_cache_async_loop(async_cache_ch);

var res__61936__auto__ = (function (){var G__68055 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch","com.wsscode.pathom.core/async-request-cache-ch",-1864666369),async_cache_ch);
var G__68056 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__68055,G__68056) : parser.call(null,G__68055,G__68056));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__61936__auto__)){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,res__61936__auto__,async_cache_ch){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,res__61936__auto__,async_cache_ch){
return (function (state_68068){
var state_val_68069 = (state_68068[(1)]);
if((state_val_68069 === (1))){
var state_68068__$1 = state_68068;
var statearr_68070_69471 = state_68068__$1;
(statearr_68070_69471[(2)] = null);

(statearr_68070_69471[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68069 === (2))){
var inst_68066 = (state_68068[(2)]);
var state_68068__$1 = state_68068;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68068__$1,inst_68066);
} else {
if((state_val_68069 === (3))){
var inst_68057 = (state_68068[(2)]);
var state_68068__$1 = state_68068;
var statearr_68071_69473 = state_68068__$1;
(statearr_68071_69473[(2)] = inst_68057);


cljs.core.async.impl.ioc_helpers.process_exception(state_68068__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68069 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_68068,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_68068__$1 = state_68068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68068__$1,(5),res__61936__auto__);
} else {
if((state_val_68069 === (5))){
var inst_68062 = (state_68068[(2)]);
var inst_68063 = com.wsscode.common.async_cljs.throw_err(inst_68062);
var inst_68064 = cljs.core.async.close_BANG_(async_cache_ch);
var state_68068__$1 = (function (){var statearr_68072 = state_68068;
(statearr_68072[(7)] = inst_68064);

return statearr_68072;
})();
var statearr_68073_69480 = state_68068__$1;
(statearr_68073_69480[(2)] = inst_68063);


cljs.core.async.impl.ioc_helpers.process_exception(state_68068__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__45808__auto__,res__61936__auto__,async_cache_ch))
;
return ((function (switch__45525__auto__,c__45808__auto__,res__61936__auto__,async_cache_ch){
return (function() {
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__45526__auto____0 = (function (){
var statearr_68074 = [null,null,null,null,null,null,null,null];
(statearr_68074[(0)] = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__45526__auto__);

(statearr_68074[(1)] = (1));

return statearr_68074;
});
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__45526__auto____1 = (function (state_68068){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_68068);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e68075){if((e68075 instanceof Object)){
var ex__45529__auto__ = e68075;
var statearr_68076_69498 = state_68068;
(statearr_68076_69498[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68075;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69501 = state_68068;
state_68068 = G__69501;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__45526__auto__ = function(state_68068){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__45526__auto____1.call(this,state_68068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__45526__auto____0;
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__45526__auto____1;
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,res__61936__auto__,async_cache_ch))
})();
var state__45810__auto__ = (function (){var statearr_68077 = f__45809__auto__();
(statearr_68077[(6)] = c__45808__auto__);

return statearr_68077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,res__61936__auto__,async_cache_ch))
);

return c__45808__auto__;
} else {
var res = res__61936__auto__;
cljs.core.async.close_BANG_(async_cache_ch);

return res;
}
});
});
com.wsscode.pathom.core.wrap_reduce_params = (function com$wsscode$pathom$core$wrap_reduce_params(reader){
return (function() {
var G__69502 = null;
var G__69502__1 = (function (env){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env))], null);
});
var G__69502__3 = (function (env,_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env))], null);
});
G__69502 = function(env,_,___$1){
switch(arguments.length){
case 1:
return G__69502__1.call(this,env);
case 3:
return G__69502__3.call(this,env,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__69502.cljs$core$IFn$_invoke$arity$1 = G__69502__1;
G__69502.cljs$core$IFn$_invoke$arity$3 = G__69502__3;
return G__69502;
})()
});
com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_ = (function com$wsscode$pathom$core$pathom_read_SINGLEQUOTE_(p__68078){
var map__68079 = p__68078;
var map__68079__$1 = (((((!((map__68079 == null))))?(((((map__68079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68079):map__68079);
var env = map__68079__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68079__$1,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410));
return com.wsscode.pathom.core.read_from(env,reader);
});
com.wsscode.pathom.core.apply_plugins = (function com$wsscode$pathom$core$apply_plugins(var_args){
var args__4736__auto__ = [];
var len__4730__auto___69510 = arguments.length;
var i__4731__auto___69511 = (0);
while(true){
if((i__4731__auto___69511 < len__4730__auto___69510)){
args__4736__auto__.push((arguments[i__4731__auto___69511]));

var G__69513 = (i__4731__auto___69511 + (1));
i__4731__auto___69511 = G__69513;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return com.wsscode.pathom.core.apply_plugins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.apply_plugins.cljs$core$IFn$_invoke$arity$variadic = (function (v,plugins,key,params){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (x,plugin){
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(plugin,key);
if(cljs.core.truth_(f)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,x,params);
} else {
return x;
}
}),v,plugins);
});

com.wsscode.pathom.core.apply_plugins.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
com.wsscode.pathom.core.apply_plugins.cljs$lang$applyTo = (function (seq68081){
var G__68082 = cljs.core.first(seq68081);
var seq68081__$1 = cljs.core.next(seq68081);
var G__68083 = cljs.core.first(seq68081__$1);
var seq68081__$2 = cljs.core.next(seq68081__$1);
var G__68084 = cljs.core.first(seq68081__$2);
var seq68081__$3 = cljs.core.next(seq68081__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68082,G__68083,G__68084,seq68081__$3);
});

com.wsscode.pathom.core.exec_plugin_actions = (function com$wsscode$pathom$core$exec_plugin_actions(var_args){
var args__4736__auto__ = [];
var len__4730__auto___69517 = arguments.length;
var i__4731__auto___69518 = (0);
while(true){
if((i__4731__auto___69518 < len__4730__auto___69517)){
args__4736__auto__.push((arguments[i__4731__auto___69518]));

var G__69523 = (i__4731__auto___69518 + (1));
i__4731__auto___69518 = G__69523;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return com.wsscode.pathom.core.exec_plugin_actions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.exec_plugin_actions.cljs$core$IFn$_invoke$arity$variadic = (function (env,key,v,args){
var plugins = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","plugin-actions","com.wsscode.pathom.core/plugin-actions",-876552970),key], null),cljs.core.PersistentVector.EMPTY);
var augmented_v = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (plugins){
return (function (x,f){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
});})(plugins))
,v,plugins);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(augmented_v,args);
});

com.wsscode.pathom.core.exec_plugin_actions.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
com.wsscode.pathom.core.exec_plugin_actions.cljs$lang$applyTo = (function (seq68085){
var G__68086 = cljs.core.first(seq68085);
var seq68085__$1 = cljs.core.next(seq68085);
var G__68087 = cljs.core.first(seq68085__$1);
var seq68085__$2 = cljs.core.next(seq68085__$1);
var G__68088 = cljs.core.first(seq68085__$2);
var seq68085__$3 = cljs.core.next(seq68085__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68086,G__68087,G__68088,seq68085__$3);
});

com.wsscode.pathom.core.easy_plugins = (function com$wsscode$pathom$core$easy_plugins(p__68089){
var map__68090 = p__68089;
var map__68090__$1 = (((((!((map__68090 == null))))?(((((map__68090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68090):map__68090);
var plugins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68090__$1,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68090__$1,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378));
var G__68092 = plugins;
var G__68092__$1 = ((cljs.core.fn_QMARK_(env))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_wrap_plugin(env)], null),G__68092):G__68092);
if(cljs.core.map_QMARK_(env)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_plugin(env)], null),G__68092__$1);
} else {
return G__68092__$1;
}
});
com.wsscode.pathom.core.settings_mutation = (function com$wsscode$pathom$core$settings_mutation(settings){
var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173).cljs$core$IFn$_invoke$arity$1(settings);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"mutate","mutate",1422419038).cljs$core$IFn$_invoke$arity$1(settings);
}
});
/**
 * Create a new pathom serial parser, this parser is capable of waiting for core.async
 *   to continue processing, allowing async operations to happen during the parsing.
 * 
 *   Options to tune the parser:
 * 
 *   ::p/env - Use this key to provide a default environment for the parser. This is a sugar
 *   to use the p/env-plugin.
 * 
 *   ::p/mutate - A mutate function that will be called to run mutations, this function
 *   must have the signature: (mutate env key params)
 * 
 *   ::p/plugins - A vector with plugins.
 */
com.wsscode.pathom.core.parser = (function com$wsscode$pathom$core$parser(settings){
var plugins = com.wsscode.pathom.core.easy_plugins(settings);
var mutate = com.wsscode.pathom.core.settings_mutation(settings);
return com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.apply_plugins.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.parser.parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),com.wsscode.pathom.core.wrap_add_path(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_,plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261))),new cljs.core.Keyword(null,"mutate","mutate",1422419038),(cljs.core.truth_(mutate)?com.wsscode.pathom.core.apply_plugins(mutate,plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-mutate","com.wsscode.pathom.core/wrap-mutate",989863202)):null)], null)),plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)),plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser2","com.wsscode.pathom.core/wrap-parser2",776559497),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([settings], 0)),plugins);
});
/**
 * Create a new pathom async parser, this parser is serial and capable of waiting for core.async
 *   to continue processing, allowing async operations to happen during the parsing.
 * 
 *   Options to tune the parser:
 * 
 *   ::p/env - Use this key to provide a default environment for the parser. This is a sugar
 *   to use the p/env-plugin.
 * 
 *   ::p/mutate - A mutate function that will be called to run mutations, this function
 *   must have the signature: (mutate env key params)
 * 
 *   ::p/plugins - A vector with plugins.
 */
com.wsscode.pathom.core.async_parser = (function com$wsscode$pathom$core$async_parser(settings){
var plugins = com.wsscode.pathom.core.easy_plugins(settings);
var mutate = com.wsscode.pathom.core.settings_mutation(settings);
return com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.wrap_setup_async_cache(com.wsscode.pathom.core.apply_plugins.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.parser.async_parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),com.wsscode.pathom.core.wrap_add_path(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_,plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261))),new cljs.core.Keyword(null,"mutate","mutate",1422419038),(cljs.core.truth_(mutate)?com.wsscode.pathom.core.apply_plugins(mutate,plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-mutate","com.wsscode.pathom.core/wrap-mutate",989863202)):null)], null)),plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)),plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser2","com.wsscode.pathom.core/wrap-parser2",776559497),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([settings], 0))),plugins);
});
/**
 * Create a new pathom parallel parser, this parser is capable of coordinating parallel
 *   data fetch. This also works as an async parser and will handle core async channels
 *   properly.
 * 
 *   Options to tune the parser:
 * 
 *   ::p/env - Use this key to provide a default environment for the parser. This is a sugar
 *   to use the p/env-plugin.
 * 
 *   ::p/mutate - A mutate function that will be called to run mutations, this function
 *   must have the signature: (mutate env key params)
 * 
 *   ::p/plugins - A vector with plugins.
 * 
 *   ::p/async-request-cache-ch-size - Pathom uses internally a queue to avoid concurrency
 *   issues with concurrency, each request gets its own channel, so you can consider this
 *   size needs to accommodate the max parallelism for a single query. Default: 1024
 * 
 *   ::pp/external-wait-ignore-timeout - Sometimes external waits get stuck because a concurrency
 *   problem, this timeout will ignore external waits after some time so the request can
 *   go on. Default: 3000
 * 
 *   ::pp/max-key-iterations - there is a loop that happens when processing attributes in
 *   parallel, this loop will cause multiple iterations to happen in order for a single
 *   attribute to be processed, but in some conditions this loop can go indefinitely, to
 *   prevent this situation this option allows to control the max number of iterations, after
 *   that it will give up on processing that attribute. Default: 10
 * 
 *   ::pp/key-process-timeout - Max time allowed to run the full query. This is a cascading
 *   timeout, the first level will have the total amount. Default: 60000
 * 
 *   ::pp/processing-recheck-timer - Periodic time to run a checker to verify no parts are
 *   stuck during the processing, when nil the feature is disabled. Default: nil
 */
com.wsscode.pathom.core.parallel_parser = (function com$wsscode$pathom$core$parallel_parser(settings){
var plugins = com.wsscode.pathom.core.easy_plugins(settings);
var mutate = com.wsscode.pathom.core.settings_mutation(settings);
return com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.wrap_setup_async_cache(com.wsscode.pathom.core.wrap_parallel_setup(com.wsscode.pathom.core.apply_plugins.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.parser.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),com.wsscode.pathom.core.wrap_add_path(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_,plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261))),new cljs.core.Keyword(null,"mutate","mutate",1422419038),(cljs.core.truth_(mutate)?com.wsscode.pathom.core.apply_plugins(mutate,plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-mutate","com.wsscode.pathom.core/wrap-mutate",989863202)):null),new cljs.core.Keyword(null,"add-error","add-error",-1195330235),com.wsscode.pathom.core.add_error], null)),plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)),plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser2","com.wsscode.pathom.core/wrap-parser2",776559497),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([settings], 0)))),plugins);
});
/**
 * Starting from a map, do a EQL selection on that map. Think of this function as
 *   a power up version of select-keys, but supporting nested selections and placeholders
 *   using the default `>` namespace.
 * 
 *   Example:
 *   (p/map-select {:foo "bar" :deep {:a 1 :b 2}} [{:deep [:a]}])
 *   => {:deep {:a 1}}
 */
com.wsscode.pathom.core.map_select = (function (){var parser = com.wsscode.pathom.core.parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.elide_special_outputs_plugin], null)], null));
return ((function (parser){
return (function (map,selection){
return parser(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),map], null),selection);
});
;})(parser))
})();
com.wsscode.pathom.core.continue$ = com.wsscode.pathom.core.join;
com.wsscode.pathom.core.continue_seq = com.wsscode.pathom.core.join_seq;
/**
 * DEPRECATED: use env-placeholder-reader instead.
 * 
 *   Produces a reader that will respond to any keyword with the namespace ns. The join node logical level stays the same
 *   as the parent where the placeholder node is requested.
 */
com.wsscode.pathom.core.placeholder_reader = (function com$wsscode$pathom$core$placeholder_reader(var_args){
var G__68094 = arguments.length;
switch (G__68094) {
case 0:
return com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$1(">");
});

com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return (function (p__68095){
var map__68096 = p__68095;
var map__68096__$1 = (((((!((map__68096 == null))))?(((((map__68096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68096):map__68096);
var env = map__68096__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68096__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.namespace(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast)))){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(env);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
});

com.wsscode.pathom.core.placeholder_reader.cljs$lang$maxFixedArity = 1;

com.wsscode.pathom.core.placeholder_node = com.wsscode.pathom.core.placeholder_reader;
/**
 * DEPRECATED: use p/parser to create your parser
 */
com.wsscode.pathom.core.pathom_read = (function com$wsscode$pathom$core$pathom_read(p__68098,_,___$1){
var map__68099 = p__68098;
var map__68099__$1 = (((((!((map__68099 == null))))?(((((map__68099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68099):map__68099);
var env = map__68099__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68099__$1,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410));
var process_reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68099__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-reader","com.wsscode.pathom.core/process-reader",348867871));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var env__$1 = com.wsscode.pathom.core.normalize_env(env);
return com.wsscode.pathom.core.read_from(env__$1,(cljs.core.truth_(process_reader)?(process_reader.cljs$core$IFn$_invoke$arity$1 ? process_reader.cljs$core$IFn$_invoke$arity$1(reader) : process_reader.call(null,reader)):reader));
})()], null);
});
/**
 * DEPRECATED: use ident-value instead
 */
com.wsscode.pathom.core.ast_key_id = (function com$wsscode$pathom$core$ast_key_id(ast){
var key = (function (){var G__68101 = ast;
if((G__68101 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__68101);
}
})();
if(cljs.core.sequential_QMARK_(key)){
return cljs.core.second(key);
} else {
return null;
}
});
com.wsscode.pathom.core.ensure_attrs = (function com$wsscode$pathom$core$ensure_attrs(env,attributes){

return com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,attributes);
});
if(com.wsscode.pathom.misc.INCLUDE_SPECS){
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","query->ast","com.wsscode.pathom.core/query->ast",1131110178,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),null,null),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","query->ast1","com.wsscode.pathom.core/query->ast1",-1679235515,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword("edn-query-language.core","query","edn-query-language.core/query",-1940317492)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),null,null),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","ast->query","com.wsscode.pathom.core/ast->query",1778798815,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword("edn-query-language.ast","node","edn-query-language.ast/node",-1614840957)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),null,null),new cljs.core.Keyword("edn-query-language.ast","root","edn-query-language.ast/root",1592076898),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",-1769729738,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"attributes","attributes",-74013604)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68102){
return cljs.core.coll_QMARK_(G__68102);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846))], null),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)),cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","entity-attr","com.wsscode.pathom.core/entity-attr",116696515,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"default","default",-1987822328)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),cljs.spec.alpha.maybe_impl(cljs.core.any_QMARK_,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","entity!","com.wsscode.pathom.core/entity!",601467064,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"attributes","attributes",-74013604)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__68103){
return cljs.core.coll_QMARK_(G__68103);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846))], null),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)),cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","entity-attr!","com.wsscode.pathom.core/entity-attr!",2073654855,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"attribute","attribute",-2074029119)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","swap-entity!","com.wsscode.pathom.core/swap-entity!",819089173,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.core.fn_QMARK_,cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","collapse-error-path","com.wsscode.pathom.core/collapse-error-path",-1124133360,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.core.vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","raise-errors","com.wsscode.pathom.core/raise-errors",77570572,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__68104){
return cljs.core.map_QMARK_(G__68104);
})], null),(function (G__68104){
return cljs.core.map_QMARK_(G__68104);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null)]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,null,null));
} else {
}

//# sourceMappingURL=com.wsscode.pathom.core.js.map
