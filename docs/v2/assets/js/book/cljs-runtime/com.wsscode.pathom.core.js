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

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__121032){
return cljs.core.map_QMARK_(G__121032);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__121033){
return cljs.core.vector_QMARK_(G__121033);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","optional?","com.wsscode.pathom.core/optional?",910087942),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"list","list",765357683)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","process-reader","com.wsscode.pathom.core/process-reader",348867871),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader","reader",169660853)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),null,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"gen","gen",142575302),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),"Generated sample error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some","some",-1951079573),"data"], null)),"null"], null), null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Generated sample error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some","some",-1951079573),"data"], null))]));
}),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__121034){
return cljs.core.map_QMARK_(G__121034);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("cljs.core","IAtom","cljs.core/IAtom",-1037999645,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__121031_SHARP_){
return (p1__121031_SHARP_ instanceof cljs.core.IAtom);
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

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","plugin","com.wsscode.pathom.core/plugin",-881556304),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__121035){
return cljs.core.map_QMARK_(G__121035);
})], null),(function (G__121035){
return cljs.core.map_QMARK_(G__121035);
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
com.wsscode.pathom.core.ast_properties = (function com$wsscode$pathom$core$ast_properties(p__121037){
var map__121038 = p__121037;
var map__121038__$1 = (((((!((map__121038 == null))))?(((((map__121038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__121038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__121038):map__121038);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121038__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__121038,map__121038__$1,children){
return (function (attrs,p__121040){
var map__121041 = p__121040;
var map__121041__$1 = (((((!((map__121041 == null))))?(((((map__121041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__121041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__121041):map__121041);
var node = map__121041__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121041__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121041__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__121043 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs,key);
if(cljs.core.truth_(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__121043,(com.wsscode.pathom.core.ast_properties.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.ast_properties.cljs$core$IFn$_invoke$arity$1(node) : com.wsscode.pathom.core.ast_properties.call(null,node)));
} else {
return G__121043;
}
});})(map__121038,map__121038__$1,children))
,cljs.core.PersistentHashSet.EMPTY,children);
});
com.wsscode.pathom.core.deep_merge = (function com$wsscode$pathom$core$deep_merge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___122814 = arguments.length;
var i__4731__auto___122815 = (0);
while(true){
if((i__4731__auto___122815 < len__4730__auto___122814)){
args__4736__auto__.push((arguments[i__4731__auto___122815]));

var G__122816 = (i__4731__auto___122815 + (1));
i__4731__auto___122815 = G__122816;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.wsscode.pathom.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.wsscode.pathom.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (xs){

if(cljs.core.every_QMARK_((function (p1__121044_SHARP_){
return ((cljs.core.map_QMARK_(p1__121044_SHARP_)) || ((p1__121044_SHARP_ == null)));
}),xs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,com.wsscode.pathom.core.deep_merge,xs);
} else {
return cljs.core.last(xs);
}
});

com.wsscode.pathom.core.deep_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.wsscode.pathom.core.deep_merge.cljs$lang$applyTo = (function (seq121045){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq121045));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__121046_SHARP_){
return cljs.core.filterv(f,p1__121046_SHARP_);
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
var len__4730__auto___122817 = arguments.length;
var i__4731__auto___122818 = (0);
while(true){
if((i__4731__auto___122818 < len__4730__auto___122817)){
args__4736__auto__.push((arguments[i__4731__auto___122818]));

var G__122819 = (i__4731__auto___122818 + (1));
i__4731__auto___122818 = G__122819;
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
var vec__121050 = x;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121050,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121050,(1),null);
return (new cljs.core.List(null,k,(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p,args),null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,x,(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.PersistentArrayMap.EMPTY,args),null,(1),null)),(2),null));
}
});

com.wsscode.pathom.core.update_attribute_param.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.core.update_attribute_param.cljs$lang$applyTo = (function (seq121047){
var G__121048 = cljs.core.first(seq121047);
var seq121047__$1 = cljs.core.next(seq121047);
var G__121049 = cljs.core.first(seq121047__$1);
var seq121047__$2 = cljs.core.next(seq121047__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__121048,G__121049,seq121047__$2);
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
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),(function (){var G__121053 = ast;
var G__121053__$1 = (((G__121053 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__121053));
var G__121053__$2 = (((G__121053__$1 == null))?null:cljs.core.first(G__121053__$1));
if((G__121053__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__121053__$2);
}
})());
});
com.wsscode.pathom.core.read_from_STAR_ = (function com$wsscode$pathom$core$read_from_STAR_(p__121056,reader){
var map__121057 = p__121056;
var map__121057__$1 = (((((!((map__121057 == null))))?(((((map__121057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__121057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__121057):map__121057);
var env = map__121057__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121057__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core.map_QMARK_(reader)){
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var temp__5718__auto__ = cljs.core.find(reader,k);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__121059 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121059,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121059,(1),null);
return (com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2(env,v) : com.wsscode.pathom.core.read_from_STAR_.call(null,env,v));
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
} else {
if(cljs.core.vector_QMARK_(reader)){
var res = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__121057,map__121057__$1,env,ast){
return (function (p1__121054_SHARP_){
return (com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2(env,p1__121054_SHARP_) : com.wsscode.pathom.core.read_from_STAR_.call(null,env,p1__121054_SHARP_));
});})(map__121057,map__121057__$1,env,ast))
),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$1(((function (map__121057,map__121057__$1,env,ast){
return (function (p1__121055_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__121055_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));
});})(map__121057,map__121057__$1,env,ast))
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
var res__44802__auto__ = com.wsscode.pathom.core.read_from_STAR_(env,reader);
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44802__auto__)){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,res__44802__auto__){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,res__44802__auto__){
return (function (state_121077){
var state_val_121078 = (state_121077[(1)]);
if((state_val_121078 === (1))){
var state_121077__$1 = state_121077;
var statearr_121079_122823 = state_121077__$1;
(statearr_121079_122823[(2)] = null);

(statearr_121079_122823[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121078 === (2))){
var inst_121075 = (state_121077[(2)]);
var state_121077__$1 = state_121077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_121077__$1,inst_121075);
} else {
if((state_val_121078 === (3))){
var inst_121062 = (state_121077[(2)]);
var state_121077__$1 = state_121077;
var statearr_121080_122824 = state_121077__$1;
(statearr_121080_122824[(2)] = inst_121062);


cljs.core.async.impl.ioc_helpers.process_exception(state_121077__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121078 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_121077,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_121077__$1 = state_121077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_121077__$1,(5),res__44802__auto__);
} else {
if((state_val_121078 === (5))){
var inst_121068 = (state_121077[(7)]);
var inst_121067 = (state_121077[(2)]);
var inst_121068__$1 = com.wsscode.common.async_cljs.throw_err(inst_121067);
var inst_121069 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_121068__$1,new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));
var state_121077__$1 = (function (){var statearr_121081 = state_121077;
(statearr_121081[(7)] = inst_121068__$1);

return statearr_121081;
})();
if(inst_121069){
var statearr_121082_122827 = state_121077__$1;
(statearr_121082_122827[(1)] = (6));

} else {
var statearr_121083_122828 = state_121077__$1;
(statearr_121083_122828[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121078 === (6))){
var state_121077__$1 = state_121077;
var statearr_121084_122829 = state_121077__$1;
(statearr_121084_122829[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));

(statearr_121084_122829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121078 === (7))){
var inst_121068 = (state_121077[(7)]);
var state_121077__$1 = state_121077;
var statearr_121085_122831 = state_121077__$1;
(statearr_121085_122831[(2)] = inst_121068);

(statearr_121085_122831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121078 === (8))){
var inst_121073 = (state_121077[(2)]);
var state_121077__$1 = state_121077;
var statearr_121086_122832 = state_121077__$1;
(statearr_121086_122832[(2)] = inst_121073);


cljs.core.async.impl.ioc_helpers.process_exception(state_121077__$1);

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
});})(c__39003__auto__,res__44802__auto__))
;
return ((function (switch__38929__auto__,c__39003__auto__,res__44802__auto__){
return (function() {
var com$wsscode$pathom$core$read_from_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$core$read_from_$_state_machine__38930__auto____0 = (function (){
var statearr_121087 = [null,null,null,null,null,null,null,null];
(statearr_121087[(0)] = com$wsscode$pathom$core$read_from_$_state_machine__38930__auto__);

(statearr_121087[(1)] = (1));

return statearr_121087;
});
var com$wsscode$pathom$core$read_from_$_state_machine__38930__auto____1 = (function (state_121077){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_121077);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e121088){if((e121088 instanceof Object)){
var ex__38933__auto__ = e121088;
var statearr_121089_122833 = state_121077;
(statearr_121089_122833[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_121077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e121088;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__122834 = state_121077;
state_121077 = G__122834;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$core$read_from_$_state_machine__38930__auto__ = function(state_121077){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$read_from_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$read_from_$_state_machine__38930__auto____1.call(this,state_121077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$read_from_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$read_from_$_state_machine__38930__auto____0;
com$wsscode$pathom$core$read_from_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$read_from_$_state_machine__38930__auto____1;
return com$wsscode$pathom$core$read_from_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,res__44802__auto__))
})();
var state__39005__auto__ = (function (){var statearr_121090 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_121090[(6)] = c__39003__auto__);

return statearr_121090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,res__44802__auto__))
);

return c__39003__auto__;
} else {
var res = res__44802__auto__;
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
com.wsscode.pathom.core.transduce_children = (function com$wsscode$pathom$core$transduce_children(xform,p__121092){
var map__121093 = p__121092;
var map__121093__$1 = (((((!((map__121093 == null))))?(((((map__121093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__121093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__121093):map__121093);
var node = map__121093__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121093__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__121095 = node;
if(cljs.core.seq(children)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__121095,new cljs.core.Keyword(null,"children","children",-940561982),((function (G__121095,map__121093,map__121093__$1,node,children){
return (function (children__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__121095,map__121093,map__121093__$1,node,children){
return (function (p1__121091_SHARP_){
return (com.wsscode.pathom.core.transduce_children.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.transduce_children.cljs$core$IFn$_invoke$arity$2(xform,p1__121091_SHARP_) : com.wsscode.pathom.core.transduce_children.call(null,xform,p1__121091_SHARP_));
});})(G__121095,map__121093,map__121093__$1,node,children))
)),children__$1);
});})(G__121095,map__121093,map__121093__$1,node,children))
);
} else {
return G__121095;
}
});
/**
 * Removes any item on set item-set from the input
 */
com.wsscode.pathom.core.elide_items = (function com$wsscode$pathom$core$elide_items(item_set,input){
return cljs.core.with_meta(com.wsscode.pathom.core.transduce_maps(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__121096){
var vec__121097 = p__121096;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121097,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121097,(1),null);
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
com.wsscode.pathom.core.raw_entity = (function com$wsscode$pathom$core$raw_entity(p__121101){
var map__121102 = p__121101;
var map__121102__$1 = (((((!((map__121102 == null))))?(((((map__121102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__121102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__121102):map__121102);
var env = map__121102__$1;
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121102__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
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
var G__121106 = arguments.length;
switch (G__121106) {
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

com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2 = (function (p__121109,attributes){
var map__121110 = p__121109;
var map__121110__$1 = (((((!((map__121110 == null))))?(((((map__121110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__121110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__121110):map__121110);
var env = map__121110__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121110__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var res__44802__auto__ = (function (){var G__121112 = env;
var G__121113 = cljs.core.filterv(cljs.core.complement(cljs.core.set(cljs.core.keys(e))),attributes);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__121112,G__121113) : parser.call(null,G__121112,G__121113));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44802__auto__)){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,res__44802__auto__,e,map__121110,map__121110__$1,env,parser){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,res__44802__auto__,e,map__121110,map__121110__$1,env,parser){
return (function (state_121130){
var state_val_121131 = (state_121130[(1)]);
if((state_val_121131 === (1))){
var state_121130__$1 = state_121130;
var statearr_121132_122846 = state_121130__$1;
(statearr_121132_122846[(2)] = null);

(statearr_121132_122846[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121131 === (2))){
var inst_121128 = (state_121130[(2)]);
var state_121130__$1 = state_121130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_121130__$1,inst_121128);
} else {
if((state_val_121131 === (3))){
var inst_121114 = (state_121130[(2)]);
var state_121130__$1 = state_121130;
var statearr_121133_122848 = state_121130__$1;
(statearr_121133_122848[(2)] = inst_121114);


cljs.core.async.impl.ioc_helpers.process_exception(state_121130__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121131 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_121130,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_121130__$1 = state_121130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_121130__$1,(5),res__44802__auto__);
} else {
if((state_val_121131 === (5))){
var inst_121120 = (state_121130[(7)]);
var inst_121119 = (state_121130[(2)]);
var inst_121120__$1 = com.wsscode.common.async_cljs.throw_err(inst_121119);
var inst_121121 = cljs.core.map_QMARK_(inst_121120__$1);
var state_121130__$1 = (function (){var statearr_121134 = state_121130;
(statearr_121134[(7)] = inst_121120__$1);

return statearr_121134;
})();
if(inst_121121){
var statearr_121135_122849 = state_121130__$1;
(statearr_121135_122849[(1)] = (6));

} else {
var statearr_121136_122850 = state_121130__$1;
(statearr_121136_122850[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121131 === (6))){
var inst_121120 = (state_121130[(7)]);
var inst_121123 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.entity_value_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,inst_121120], 0));
var state_121130__$1 = state_121130;
var statearr_121137_122851 = state_121130__$1;
(statearr_121137_122851[(2)] = inst_121123);

(statearr_121137_122851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121131 === (7))){
var state_121130__$1 = state_121130;
var statearr_121138_122852 = state_121130__$1;
(statearr_121138_122852[(2)] = e);

(statearr_121138_122852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121131 === (8))){
var inst_121126 = (state_121130[(2)]);
var state_121130__$1 = state_121130;
var statearr_121139_122853 = state_121130__$1;
(statearr_121139_122853[(2)] = inst_121126);


cljs.core.async.impl.ioc_helpers.process_exception(state_121130__$1);

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
});})(c__39003__auto__,res__44802__auto__,e,map__121110,map__121110__$1,env,parser))
;
return ((function (switch__38929__auto__,c__39003__auto__,res__44802__auto__,e,map__121110,map__121110__$1,env,parser){
return (function() {
var com$wsscode$pathom$core$state_machine__38930__auto__ = null;
var com$wsscode$pathom$core$state_machine__38930__auto____0 = (function (){
var statearr_121141 = [null,null,null,null,null,null,null,null];
(statearr_121141[(0)] = com$wsscode$pathom$core$state_machine__38930__auto__);

(statearr_121141[(1)] = (1));

return statearr_121141;
});
var com$wsscode$pathom$core$state_machine__38930__auto____1 = (function (state_121130){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_121130);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e121142){if((e121142 instanceof Object)){
var ex__38933__auto__ = e121142;
var statearr_121143_122854 = state_121130;
(statearr_121143_122854[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_121130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e121142;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__122855 = state_121130;
state_121130 = G__122855;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__38930__auto__ = function(state_121130){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__38930__auto____1.call(this,state_121130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__38930__auto____0;
com$wsscode$pathom$core$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__38930__auto____1;
return com$wsscode$pathom$core$state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,res__44802__auto__,e,map__121110,map__121110__$1,env,parser))
})();
var state__39005__auto__ = (function (){var statearr_121146 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_121146[(6)] = c__39003__auto__);

return statearr_121146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,res__44802__auto__,e,map__121110,map__121110__$1,env,parser))
);

return c__39003__auto__;
} else {
var res = res__44802__auto__;
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
var G__121149 = arguments.length;
switch (G__121149) {
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
var res__44802__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44802__auto__)){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,res__44802__auto__){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,res__44802__auto__){
return (function (state_121164){
var state_val_121165 = (state_121164[(1)]);
if((state_val_121165 === (1))){
var state_121164__$1 = state_121164;
var statearr_121169_122860 = state_121164__$1;
(statearr_121169_122860[(2)] = null);

(statearr_121169_122860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121165 === (2))){
var inst_121162 = (state_121164[(2)]);
var state_121164__$1 = state_121164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_121164__$1,inst_121162);
} else {
if((state_val_121165 === (3))){
var inst_121152 = (state_121164[(2)]);
var state_121164__$1 = state_121164;
var statearr_121171_122861 = state_121164__$1;
(statearr_121171_122861[(2)] = inst_121152);


cljs.core.async.impl.ioc_helpers.process_exception(state_121164__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121165 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_121164,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_121164__$1 = state_121164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_121164__$1,(5),res__44802__auto__);
} else {
if((state_val_121165 === (5))){
var inst_121158 = (state_121164[(2)]);
var inst_121159 = com.wsscode.common.async_cljs.throw_err(inst_121158);
var inst_121160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_121159,attr);
var state_121164__$1 = state_121164;
var statearr_121175_122862 = state_121164__$1;
(statearr_121175_122862[(2)] = inst_121160);


cljs.core.async.impl.ioc_helpers.process_exception(state_121164__$1);

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
var com$wsscode$pathom$core$state_machine__38930__auto__ = null;
var com$wsscode$pathom$core$state_machine__38930__auto____0 = (function (){
var statearr_121176 = [null,null,null,null,null,null,null];
(statearr_121176[(0)] = com$wsscode$pathom$core$state_machine__38930__auto__);

(statearr_121176[(1)] = (1));

return statearr_121176;
});
var com$wsscode$pathom$core$state_machine__38930__auto____1 = (function (state_121164){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_121164);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e121179){if((e121179 instanceof Object)){
var ex__38933__auto__ = e121179;
var statearr_121181_122863 = state_121164;
(statearr_121181_122863[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_121164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e121179;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__122864 = state_121164;
state_121164 = G__122864;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__38930__auto__ = function(state_121164){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__38930__auto____1.call(this,state_121164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__38930__auto____0;
com$wsscode$pathom$core$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__38930__auto____1;
return com$wsscode$pathom$core$state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,res__44802__auto__))
})();
var state__39005__auto__ = (function (){var statearr_121182 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_121182[(6)] = c__39003__auto__);

return statearr_121182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,res__44802__auto__))
);

return c__39003__auto__;
} else {
var e = res__44802__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
}
});

com.wsscode.pathom.core.entity_attr.cljs$core$IFn$_invoke$arity$3 = (function (env,attr,default$){
var res__44802__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44802__auto__)){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,res__44802__auto__){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,res__44802__auto__){
return (function (state_121203){
var state_val_121204 = (state_121203[(1)]);
if((state_val_121204 === (1))){
var state_121203__$1 = state_121203;
var statearr_121209_122865 = state_121203__$1;
(statearr_121209_122865[(2)] = null);

(statearr_121209_122865[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121204 === (2))){
var inst_121201 = (state_121203[(2)]);
var state_121203__$1 = state_121203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_121203__$1,inst_121201);
} else {
if((state_val_121204 === (3))){
var inst_121184 = (state_121203[(2)]);
var state_121203__$1 = state_121203;
var statearr_121210_122866 = state_121203__$1;
(statearr_121210_122866[(2)] = inst_121184);


cljs.core.async.impl.ioc_helpers.process_exception(state_121203__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121204 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_121203,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_121203__$1 = state_121203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_121203__$1,(5),res__44802__auto__);
} else {
if((state_val_121204 === (5))){
var inst_121191 = (state_121203[(7)]);
var inst_121189 = (state_121203[(2)]);
var inst_121190 = com.wsscode.common.async_cljs.throw_err(inst_121189);
var inst_121191__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_121190,attr);
var inst_121192 = [null,null,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null];
var inst_121193 = (new cljs.core.PersistentArrayMap(null,2,inst_121192,null));
var inst_121194 = (new cljs.core.PersistentHashSet(null,inst_121193,null));
var inst_121195 = (inst_121194.cljs$core$IFn$_invoke$arity$1 ? inst_121194.cljs$core$IFn$_invoke$arity$1(inst_121191__$1) : inst_121194.call(null,inst_121191__$1));
var state_121203__$1 = (function (){var statearr_121214 = state_121203;
(statearr_121214[(7)] = inst_121191__$1);

return statearr_121214;
})();
if(cljs.core.truth_(inst_121195)){
var statearr_121215_122867 = state_121203__$1;
(statearr_121215_122867[(1)] = (6));

} else {
var statearr_121216_122868 = state_121203__$1;
(statearr_121216_122868[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121204 === (6))){
var state_121203__$1 = state_121203;
var statearr_121217_122869 = state_121203__$1;
(statearr_121217_122869[(2)] = default$);

(statearr_121217_122869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121204 === (7))){
var inst_121191 = (state_121203[(7)]);
var state_121203__$1 = state_121203;
var statearr_121218_122870 = state_121203__$1;
(statearr_121218_122870[(2)] = inst_121191);

(statearr_121218_122870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121204 === (8))){
var inst_121199 = (state_121203[(2)]);
var state_121203__$1 = state_121203;
var statearr_121221_122871 = state_121203__$1;
(statearr_121221_122871[(2)] = inst_121199);


cljs.core.async.impl.ioc_helpers.process_exception(state_121203__$1);

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
});})(c__39003__auto__,res__44802__auto__))
;
return ((function (switch__38929__auto__,c__39003__auto__,res__44802__auto__){
return (function() {
var com$wsscode$pathom$core$state_machine__38930__auto__ = null;
var com$wsscode$pathom$core$state_machine__38930__auto____0 = (function (){
var statearr_121223 = [null,null,null,null,null,null,null,null];
(statearr_121223[(0)] = com$wsscode$pathom$core$state_machine__38930__auto__);

(statearr_121223[(1)] = (1));

return statearr_121223;
});
var com$wsscode$pathom$core$state_machine__38930__auto____1 = (function (state_121203){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_121203);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e121225){if((e121225 instanceof Object)){
var ex__38933__auto__ = e121225;
var statearr_121226_122872 = state_121203;
(statearr_121226_122872[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_121203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e121225;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__122873 = state_121203;
state_121203 = G__122873;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__38930__auto__ = function(state_121203){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__38930__auto____1.call(this,state_121203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__38930__auto____0;
com$wsscode$pathom$core$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__38930__auto____1;
return com$wsscode$pathom$core$state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,res__44802__auto__))
})();
var state__39005__auto__ = (function (){var statearr_121228 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_121228[(6)] = c__39003__auto__);

return statearr_121228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,res__44802__auto__))
);

return c__39003__auto__;
} else {
var e = res__44802__auto__;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
if(cljs.core.truth_((function (){var fexpr__121229 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null], null), null);
return (fexpr__121229.cljs$core$IFn$_invoke$arity$1 ? fexpr__121229.cljs$core$IFn$_invoke$arity$1(x) : fexpr__121229.call(null,x));
})())){
return default$;
} else {
return x;
}
}
});

com.wsscode.pathom.core.entity_attr.cljs$lang$maxFixedArity = 3;

com.wsscode.pathom.core.entity_BANG_ = (function com$wsscode$pathom$core$entity_BANG_(p__121232,attributes){
var map__121233 = p__121232;
var map__121233__$1 = (((((!((map__121233 == null))))?(((((map__121233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__121233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__121233):map__121233);
var env = map__121233__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121233__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var res__44802__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,attributes);
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44802__auto__)){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,res__44802__auto__,map__121233,map__121233__$1,env,path){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,res__44802__auto__,map__121233,map__121233__$1,env,path){
return (function (state_121265){
var state_val_121266 = (state_121265[(1)]);
if((state_val_121266 === (1))){
var state_121265__$1 = state_121265;
var statearr_121267_122874 = state_121265__$1;
(statearr_121267_122874[(2)] = null);

(statearr_121267_122874[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121266 === (2))){
var inst_121263 = (state_121265[(2)]);
var state_121265__$1 = state_121265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_121265__$1,inst_121263);
} else {
if((state_val_121266 === (3))){
var inst_121237 = (state_121265[(2)]);
var state_121265__$1 = state_121265;
var statearr_121268_122875 = state_121265__$1;
(statearr_121268_122875[(2)] = inst_121237);


cljs.core.async.impl.ioc_helpers.process_exception(state_121265__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121266 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_121265,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_121265__$1 = state_121265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_121265__$1,(5),res__44802__auto__);
} else {
if((state_val_121266 === (5))){
var inst_121249 = (state_121265[(7)]);
var inst_121243 = (state_121265[(8)]);
var inst_121242 = (state_121265[(2)]);
var inst_121243__$1 = com.wsscode.common.async_cljs.throw_err(inst_121242);
var inst_121244 = cljs.core.set(attributes);
var inst_121246 = com.wsscode.pathom.core.elide_not_found(inst_121243__$1);
var inst_121247 = cljs.core.keys(inst_121246);
var inst_121248 = cljs.core.set(inst_121247);
var inst_121249__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_121244,inst_121248);
var inst_121250 = cljs.core.seq(inst_121249__$1);
var state_121265__$1 = (function (){var statearr_121269 = state_121265;
(statearr_121269[(7)] = inst_121249__$1);

(statearr_121269[(8)] = inst_121243__$1);

return statearr_121269;
})();
if(inst_121250){
var statearr_121270_122876 = state_121265__$1;
(statearr_121270_122876[(1)] = (6));

} else {
var statearr_121271_122877 = state_121265__$1;
(statearr_121271_122877[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121266 === (6))){
var inst_121249 = (state_121265[(7)]);
var inst_121243 = (state_121265[(8)]);
var inst_121252 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_121249], 0));
var inst_121253 = ["Entity attributes ",inst_121252," could not be realized"].join('');
var inst_121254 = [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword("com.wsscode.pathom.core","missing-attributes","com.wsscode.pathom.core/missing-attributes",1114260849)];
var inst_121255 = [inst_121243,path,inst_121249];
var inst_121256 = cljs.core.PersistentHashMap.fromArrays(inst_121254,inst_121255);
var inst_121257 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(inst_121253,inst_121256);
var inst_121258 = (function(){throw inst_121257})();
var state_121265__$1 = state_121265;
var statearr_121272_122879 = state_121265__$1;
(statearr_121272_122879[(2)] = inst_121258);

(statearr_121272_122879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121266 === (7))){
var state_121265__$1 = state_121265;
var statearr_121273_122880 = state_121265__$1;
(statearr_121273_122880[(2)] = null);

(statearr_121273_122880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121266 === (8))){
var inst_121243 = (state_121265[(8)]);
var inst_121261 = (state_121265[(2)]);
var state_121265__$1 = (function (){var statearr_121274 = state_121265;
(statearr_121274[(9)] = inst_121261);

return statearr_121274;
})();
var statearr_121275_122881 = state_121265__$1;
(statearr_121275_122881[(2)] = inst_121243);


cljs.core.async.impl.ioc_helpers.process_exception(state_121265__$1);

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
});})(c__39003__auto__,res__44802__auto__,map__121233,map__121233__$1,env,path))
;
return ((function (switch__38929__auto__,c__39003__auto__,res__44802__auto__,map__121233,map__121233__$1,env,path){
return (function() {
var com$wsscode$pathom$core$entity_BANG__$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$core$entity_BANG__$_state_machine__38930__auto____0 = (function (){
var statearr_121277 = [null,null,null,null,null,null,null,null,null,null];
(statearr_121277[(0)] = com$wsscode$pathom$core$entity_BANG__$_state_machine__38930__auto__);

(statearr_121277[(1)] = (1));

return statearr_121277;
});
var com$wsscode$pathom$core$entity_BANG__$_state_machine__38930__auto____1 = (function (state_121265){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_121265);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e121279){if((e121279 instanceof Object)){
var ex__38933__auto__ = e121279;
var statearr_121281_122882 = state_121265;
(statearr_121281_122882[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_121265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e121279;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__122883 = state_121265;
state_121265 = G__122883;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$core$entity_BANG__$_state_machine__38930__auto__ = function(state_121265){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$entity_BANG__$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$entity_BANG__$_state_machine__38930__auto____1.call(this,state_121265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$entity_BANG__$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$entity_BANG__$_state_machine__38930__auto____0;
com$wsscode$pathom$core$entity_BANG__$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$entity_BANG__$_state_machine__38930__auto____1;
return com$wsscode$pathom$core$entity_BANG__$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,res__44802__auto__,map__121233,map__121233__$1,env,path))
})();
var state__39005__auto__ = (function (){var statearr_121283 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_121283[(6)] = c__39003__auto__);

return statearr_121283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,res__44802__auto__,map__121233,map__121233__$1,env,path))
);

return c__39003__auto__;
} else {
var e = res__44802__auto__;
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
var res__44802__auto__ = com.wsscode.pathom.core.entity_BANG_(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44802__auto__)){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,res__44802__auto__){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,res__44802__auto__){
return (function (state_121302){
var state_val_121303 = (state_121302[(1)]);
if((state_val_121303 === (1))){
var state_121302__$1 = state_121302;
var statearr_121307_122884 = state_121302__$1;
(statearr_121307_122884[(2)] = null);

(statearr_121307_122884[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121303 === (2))){
var inst_121300 = (state_121302[(2)]);
var state_121302__$1 = state_121302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_121302__$1,inst_121300);
} else {
if((state_val_121303 === (3))){
var inst_121291 = (state_121302[(2)]);
var state_121302__$1 = state_121302;
var statearr_121308_122885 = state_121302__$1;
(statearr_121308_122885[(2)] = inst_121291);


cljs.core.async.impl.ioc_helpers.process_exception(state_121302__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121303 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_121302,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_121302__$1 = state_121302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_121302__$1,(5),res__44802__auto__);
} else {
if((state_val_121303 === (5))){
var inst_121296 = (state_121302[(2)]);
var inst_121297 = com.wsscode.common.async_cljs.throw_err(inst_121296);
var inst_121298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_121297,attr);
var state_121302__$1 = state_121302;
var statearr_121312_122887 = state_121302__$1;
(statearr_121312_122887[(2)] = inst_121298);


cljs.core.async.impl.ioc_helpers.process_exception(state_121302__$1);

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
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38930__auto____0 = (function (){
var statearr_121315 = [null,null,null,null,null,null,null];
(statearr_121315[(0)] = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38930__auto__);

(statearr_121315[(1)] = (1));

return statearr_121315;
});
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38930__auto____1 = (function (state_121302){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_121302);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e121317){if((e121317 instanceof Object)){
var ex__38933__auto__ = e121317;
var statearr_121319_122890 = state_121302;
(statearr_121319_122890[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_121302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e121317;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__122893 = state_121302;
state_121302 = G__122893;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38930__auto__ = function(state_121302){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38930__auto____1.call(this,state_121302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38930__auto____0;
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38930__auto____1;
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,res__44802__auto__))
})();
var state__39005__auto__ = (function (){var statearr_121322 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_121322[(6)] = c__39003__auto__);

return statearr_121322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,res__44802__auto__))
);

return c__39003__auto__;
} else {
var e = res__44802__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
}
});
/**
 * Helper to swap the current entity value.
 */
com.wsscode.pathom.core.swap_entity_BANG_ = (function com$wsscode$pathom$core$swap_entity_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___122894 = arguments.length;
var i__4731__auto___122895 = (0);
while(true){
if((i__4731__auto___122895 < len__4730__auto___122894)){
args__4736__auto__.push((arguments[i__4731__auto___122895]));

var G__122896 = (i__4731__auto___122895 + (1));
i__4731__auto___122895 = G__122896;
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
com.wsscode.pathom.core.swap_entity_BANG_.cljs$lang$applyTo = (function (seq121325){
var G__121326 = cljs.core.first(seq121325);
var seq121325__$1 = cljs.core.next(seq121325);
var G__121327 = cljs.core.first(seq121325__$1);
var seq121325__$2 = cljs.core.next(seq121325__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__121326,G__121327,seq121325__$2);
});

/**
 * Given an AST, find the child with a given key and run update against it.
 */
com.wsscode.pathom.core.update_child = (function com$wsscode$pathom$core$update_child(var_args){
var args__4736__auto__ = [];
var len__4730__auto___122904 = arguments.length;
var i__4731__auto___122905 = (0);
while(true){
if((i__4731__auto___122905 < len__4730__auto___122904)){
args__4736__auto__.push((arguments[i__4731__auto___122905]));

var G__122906 = (i__4731__auto___122905 + (1));
i__4731__auto___122905 = G__122906;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.update_child.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.update_child.cljs$core$IFn$_invoke$arity$variadic = (function (ast,key,args){
var temp__5718__auto__ = (function (){var G__121347 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var G__121347__$1 = (((G__121347 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__121347));
var G__121347__$2 = (((G__121347__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([key]),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.second),G__121347__$1));
if((G__121347__$2 == null)){
return null;
} else {
return cljs.core.ffirst(G__121347__$2);
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
com.wsscode.pathom.core.update_child.cljs$lang$applyTo = (function (seq121336){
var G__121337 = cljs.core.first(seq121336);
var seq121336__$1 = cljs.core.next(seq121336);
var G__121338 = cljs.core.first(seq121336__$1);
var seq121336__$2 = cljs.core.next(seq121336__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__121337,G__121338,seq121336__$2);
});

/**
 * Given an AST, find the child with a given key and run update against it.
 */
com.wsscode.pathom.core.update_recursive_depth = (function com$wsscode$pathom$core$update_recursive_depth(var_args){
var args__4736__auto__ = [];
var len__4730__auto___122909 = arguments.length;
var i__4731__auto___122910 = (0);
while(true){
if((i__4731__auto___122910 < len__4730__auto___122909)){
args__4736__auto__.push((arguments[i__4731__auto___122910]));

var G__122911 = (i__4731__auto___122910 + (1));
i__4731__auto___122910 = G__122911;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.update_recursive_depth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.update_recursive_depth.cljs$core$IFn$_invoke$arity$variadic = (function (ast,key,args){
var temp__5718__auto__ = (function (){var G__121358 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var G__121358__$1 = (((G__121358 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__121358));
var G__121358__$2 = (((G__121358__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (G__121358,G__121358__$1){
return (function (p1__121352_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__121352_SHARP_))) && (cljs.core.pos_int_QMARK_(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__121352_SHARP_))));
});})(G__121358,G__121358__$1))
,cljs.core.second),G__121358__$1));
if((G__121358__$2 == null)){
return null;
} else {
return cljs.core.ffirst(G__121358__$2);
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
com.wsscode.pathom.core.update_recursive_depth.cljs$lang$applyTo = (function (seq121353){
var G__121354 = cljs.core.first(seq121353);
var seq121353__$1 = cljs.core.next(seq121353);
var G__121355 = cljs.core.first(seq121353__$1);
var seq121353__$2 = cljs.core.next(seq121353__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__121354,G__121355,seq121353__$2);
});

com.wsscode.pathom.core.remove_query_wildcard = (function com$wsscode$pathom$core$remove_query_wildcard(query){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(query)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null)),query);
});
com.wsscode.pathom.core.default_union_path = (function com$wsscode$pathom$core$default_union_path(p__121370){
var map__121371 = p__121370;
var map__121371__$1 = (((((!((map__121371 == null))))?(((((map__121371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__121371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__121371):map__121371);
var env = map__121371__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121371__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5718__auto__ = (function (){var G__121377 = cljs.core.keys(query);
var G__121377__$1 = (((G__121377 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__121377,e,map__121371,map__121371__$1,env,query){
return (function (p1__121367_SHARP_){
return cljs.core.contains_QMARK_(e,p1__121367_SHARP_);
});})(G__121377,e,map__121371,map__121371__$1,env,query))
,G__121377));
if((G__121377__$1 == null)){
return null;
} else {
return cljs.core.first(G__121377__$1);
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
 * value of `::entity`, and the subquery is parsered with that new environment. When run without an `entity` it
 * parses the current subquery in the context of whatever entity was already in `::entity` of the env.
 */
com.wsscode.pathom.core.join = (function com$wsscode$pathom$core$join(var_args){
var G__121382 = arguments.length;
switch (G__121382) {
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

com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2 = (function (entity,p__121385){
var map__121386 = p__121385;
var map__121386__$1 = (((((!((map__121386 == null))))?(((((map__121386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__121386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__121386):map__121386);
var env = map__121386__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121386__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121386__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121386__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
if(com.wsscode.pathom.core.atom_QMARK_(entity)){
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(entity)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(entity,cljs.core.dissoc,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378));

return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(entity),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378)),new cljs.core.Keyword(null,"ast","ast",-860334068),ast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510),query,entity_key,entity], 0)));
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

com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1 = (function (p__121391){
var map__121392 = p__121391;
var map__121392__$1 = (((((!((map__121392 == null))))?(((((map__121392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__121392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__121392):map__121392);
var env = map__121392__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121392__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121392__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121392__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var union_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121392__$1,new cljs.core.Keyword("com.wsscode.pathom.core","union-path","com.wsscode.pathom.core/union-path",-2083478095));
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121392__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121392__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121392__$1,new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var placeholder_QMARK_ = cljs.core.contains_QMARK_((function (){var or__4131__auto__ = placeholder_prefixes;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),(function (){var G__121398 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast);
if((G__121398 == null)){
return null;
} else {
return cljs.core.namespace(G__121398);
}
})());
var query__$1 = ((com.wsscode.pathom.core.union_children_QMARK_(ast))?(function (){var union_path__$1 = (function (){var or__4131__auto__ = union_path;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.core.default_union_path;
}
})();
var path = ((cljs.core.fn_QMARK_(union_path__$1))?(union_path__$1.cljs$core$IFn$_invoke$arity$1 ? union_path__$1.cljs$core$IFn$_invoke$arity$1(env) : union_path__$1.call(null,env)):(((union_path__$1 instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.entity_BANG_(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_path__$1], null)),union_path__$1):null));
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,path);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","blank-union","com.wsscode.pathom.core/blank-union",1901666614);
}
})():query);
var env_SINGLEQUOTE_ = (function (){var G__121401 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),query__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-join-key","com.wsscode.pathom.core/parent-join-key",-289005491),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast)], 0));
if((!(placeholder_QMARK_))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__121401,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404)], 0));
} else {
return G__121401;
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
var G__121406 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env_SINGLEQUOTE___$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),parent_query_SINGLEQUOTE_);
var G__121407 = com.wsscode.pathom.core.remove_query_wildcard(parent_query_SINGLEQUOTE_);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__121406,G__121407) : parser.call(null,G__121406,G__121407));
}
} else {
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null),query__$1))){
var res__44802__auto__ = (function (){var G__121410 = env_SINGLEQUOTE___$1;
var G__121411 = com.wsscode.pathom.core.remove_query_wildcard(query__$1);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__121410,G__121411) : parser.call(null,G__121410,G__121411));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44802__auto__)){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,res__44802__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__121392,map__121392__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,res__44802__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__121392,map__121392__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes){
return (function (state_121426){
var state_val_121427 = (state_121426[(1)]);
if((state_val_121427 === (1))){
var state_121426__$1 = state_121426;
var statearr_121431_122927 = state_121426__$1;
(statearr_121431_122927[(2)] = null);

(statearr_121431_122927[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121427 === (2))){
var inst_121424 = (state_121426[(2)]);
var state_121426__$1 = state_121426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_121426__$1,inst_121424);
} else {
if((state_val_121427 === (3))){
var inst_121413 = (state_121426[(2)]);
var state_121426__$1 = state_121426;
var statearr_121433_122929 = state_121426__$1;
(statearr_121433_122929[(2)] = inst_121413);


cljs.core.async.impl.ioc_helpers.process_exception(state_121426__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121427 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_121426,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_121426__$1 = state_121426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_121426__$1,(5),res__44802__auto__);
} else {
if((state_val_121427 === (5))){
var inst_121419 = (state_121426[(2)]);
var inst_121420 = com.wsscode.common.async_cljs.throw_err(inst_121419);
var inst_121421 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env_SINGLEQUOTE___$1);
var inst_121422 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_121421,inst_121420], 0));
var state_121426__$1 = state_121426;
var statearr_121435_122933 = state_121426__$1;
(statearr_121435_122933[(2)] = inst_121422);


cljs.core.async.impl.ioc_helpers.process_exception(state_121426__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39003__auto__,res__44802__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__121392,map__121392__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes))
;
return ((function (switch__38929__auto__,c__39003__auto__,res__44802__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__121392,map__121392__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes){
return (function() {
var com$wsscode$pathom$core$state_machine__38930__auto__ = null;
var com$wsscode$pathom$core$state_machine__38930__auto____0 = (function (){
var statearr_121436 = [null,null,null,null,null,null,null];
(statearr_121436[(0)] = com$wsscode$pathom$core$state_machine__38930__auto__);

(statearr_121436[(1)] = (1));

return statearr_121436;
});
var com$wsscode$pathom$core$state_machine__38930__auto____1 = (function (state_121426){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_121426);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e121437){if((e121437 instanceof Object)){
var ex__38933__auto__ = e121437;
var statearr_121438_122934 = state_121426;
(statearr_121438_122934[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_121426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e121437;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__122935 = state_121426;
state_121426 = G__122935;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__38930__auto__ = function(state_121426){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__38930__auto____1.call(this,state_121426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__38930__auto____0;
com$wsscode$pathom$core$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__38930__auto____1;
return com$wsscode$pathom$core$state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,res__44802__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__121392,map__121392__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes))
})();
var state__39005__auto__ = (function (){var statearr_121439 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_121439[(6)] = c__39003__auto__);

return statearr_121439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,res__44802__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__121392,map__121392__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes))
);

return c__39003__auto__;
} else {
var computed_e = res__44802__auto__;
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

com.wsscode.pathom.core.join_seq_parallel = (function com$wsscode$pathom$core$join_seq_parallel(p__121446,coll){
var map__121448 = p__121446;
var map__121448__$1 = (((((!((map__121448 == null))))?(((((map__121448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__121448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__121448):map__121448);
var env = map__121448__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121448__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121448__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
if(cljs.core.seq(coll)){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache){
return (function (state_121558){
var state_val_121559 = (state_121558[(1)]);
if((state_val_121559 === (7))){
var inst_121554 = (state_121558[(2)]);
var state_121558__$1 = state_121558;
var statearr_121563_122938 = state_121558__$1;
(statearr_121563_122938[(2)] = inst_121554);


cljs.core.async.impl.ioc_helpers.process_exception(state_121558__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121559 === (1))){
var state_121558__$1 = state_121558;
var statearr_121565_122941 = state_121558__$1;
(statearr_121565_122941[(2)] = null);

(statearr_121565_122941[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121559 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_121558,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_121457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_121558__$1 = state_121558;
if(cljs.core.truth_(inst_121457)){
var statearr_121566_122943 = state_121558__$1;
(statearr_121566_122943[(1)] = (5));

} else {
var statearr_121567_122944 = state_121558__$1;
(statearr_121567_122944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121559 === (15))){
var inst_121520 = (state_121558[(7)]);
var inst_121528 = (state_121558[(8)]);
var inst_121523 = (state_121558[(9)]);
var inst_121527 = (state_121558[(10)]);
var inst_121524 = (state_121558[(11)]);
var inst_121525 = (state_121558[(12)]);
var inst_121538 = (state_121558[(2)]);
var inst_121539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_121540 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_121541 = cljs.core.range.cljs$core$IFn$_invoke$arity$0();
var inst_121542 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_121528,inst_121541);
var inst_121543 = cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(inst_121539,inst_121542);
var inst_121545 = (function (){var from_chan = inst_121539;
var join_item = inst_121524;
var seq__121517 = inst_121528;
var first_res = inst_121538;
var check_ast_opt_QMARK_ = inst_121523;
var vec__121516 = coll;
var out_chan = inst_121540;
var ast = inst_121520;
var env__$1 = inst_121525;
var head = inst_121527;
var tail = inst_121528;
var first__121518 = inst_121527;
return ((function (from_chan,join_item,seq__121517,first_res,check_ast_opt_QMARK_,vec__121516,out_chan,ast,env__$1,head,tail,first__121518,inst_121520,inst_121528,inst_121523,inst_121527,inst_121524,inst_121525,inst_121538,inst_121539,inst_121540,inst_121541,inst_121542,inst_121543,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline(p__121571,res_ch){
var vec__121572 = p__121571;
var ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121572,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121572,(1),null);
var c__39003__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto____$1,vec__121572,ent,i,from_chan,join_item,seq__121517,first_res,check_ast_opt_QMARK_,vec__121516,out_chan,ast,env__$1,head,tail,first__121518,inst_121520,inst_121528,inst_121523,inst_121527,inst_121524,inst_121525,inst_121538,inst_121539,inst_121540,inst_121541,inst_121542,inst_121543,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto____$1,vec__121572,ent,i,from_chan,join_item,seq__121517,first_res,check_ast_opt_QMARK_,vec__121516,out_chan,ast,env__$1,head,tail,first__121518,inst_121520,inst_121528,inst_121523,inst_121527,inst_121524,inst_121525,inst_121538,inst_121539,inst_121540,inst_121541,inst_121542,inst_121543,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache){
return (function (state_121621){
var state_val_121622 = (state_121621[(1)]);
if((state_val_121622 === (7))){
var inst_121593 = (state_121621[(2)]);
var state_121621__$1 = state_121621;
var statearr_121628_122951 = state_121621__$1;
(statearr_121628_122951[(2)] = inst_121593);

(statearr_121628_122951[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121622 === (1))){
var inst_121579 = (state_121621[(7)]);
var inst_121578 = (i + (1));
var inst_121579__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,inst_121578);
var inst_121581 = (inst_121579__$1 == null);
var inst_121582 = cljs.core.not(inst_121581);
var state_121621__$1 = (function (){var statearr_121632 = state_121621;
(statearr_121632[(7)] = inst_121579__$1);

return statearr_121632;
})();
if(inst_121582){
var statearr_121633_122952 = state_121621__$1;
(statearr_121633_122952[(1)] = (2));

} else {
var statearr_121635_122953 = state_121621__$1;
(statearr_121635_122953[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121622 === (4))){
var inst_121596 = (state_121621[(2)]);
var state_121621__$1 = state_121621;
if(cljs.core.truth_(inst_121596)){
var statearr_121638_122954 = state_121621__$1;
(statearr_121638_122954[(1)] = (8));

} else {
var statearr_121639_122955 = state_121621__$1;
(statearr_121639_122955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121622 === (15))){
var inst_121617 = (state_121621[(2)]);
var inst_121618 = cljs.core.async.close_BANG_(res_ch);
var state_121621__$1 = (function (){var statearr_121641 = state_121621;
(statearr_121641[(8)] = inst_121617);

return statearr_121641;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_121621__$1,inst_121618);
} else {
if((state_val_121622 === (13))){
var inst_121615 = (state_121621[(2)]);
var state_121621__$1 = state_121621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_121621__$1,(15),res_ch,inst_121615);
} else {
if((state_val_121622 === (6))){
var state_121621__$1 = state_121621;
var statearr_121643_122959 = state_121621__$1;
(statearr_121643_122959[(2)] = false);

(statearr_121643_122959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121622 === (3))){
var state_121621__$1 = state_121621;
var statearr_121645_122960 = state_121621__$1;
(statearr_121645_122960[(2)] = false);

(statearr_121645_122960[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121622 === (12))){
var inst_121608 = (state_121621[(9)]);
var state_121621__$1 = state_121621;
var statearr_121647_122962 = state_121621__$1;
(statearr_121647_122962[(2)] = inst_121608);

(statearr_121647_122962[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121622 === (2))){
var inst_121579 = (state_121621[(7)]);
var inst_121585 = inst_121579.cljs$lang$protocol_mask$partition0$;
var inst_121586 = (inst_121585 & (64));
var inst_121587 = inst_121579.cljs$core$ISeq$;
var inst_121588 = (cljs.core.PROTOCOL_SENTINEL === inst_121587);
var inst_121589 = ((inst_121586) || (inst_121588));
var state_121621__$1 = state_121621;
if(cljs.core.truth_(inst_121589)){
var statearr_121649_122964 = state_121621__$1;
(statearr_121649_122964[(1)] = (5));

} else {
var statearr_121650_122965 = state_121621__$1;
(statearr_121650_122965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121622 === (11))){
var inst_121608 = (state_121621[(9)]);
var state_121621__$1 = state_121621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_121621__$1,(14),inst_121608);
} else {
if((state_val_121622 === (9))){
var inst_121579 = (state_121621[(7)]);
var state_121621__$1 = state_121621;
var statearr_121651_122966 = state_121621__$1;
(statearr_121651_122966[(2)] = inst_121579);

(statearr_121651_122966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121622 === (5))){
var state_121621__$1 = state_121621;
var statearr_121652_122967 = state_121621__$1;
(statearr_121652_122967[(2)] = true);

(statearr_121652_122967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121622 === (14))){
var inst_121612 = (state_121621[(2)]);
var state_121621__$1 = state_121621;
var statearr_121654_122968 = state_121621__$1;
(statearr_121654_122968[(2)] = inst_121612);

(statearr_121654_122968[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121622 === (10))){
var inst_121608 = (state_121621[(9)]);
var inst_121601 = (state_121621[(2)]);
var inst_121603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_121601,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var inst_121604 = cljs.core.deref(entity_path_cache);
var inst_121605 = cljs.core.PersistentHashMap.EMPTY;
var inst_121606 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_121604,inst_121603,inst_121605);
var inst_121607 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_121606,ent], 0));
var inst_121608__$1 = (join_item.cljs$core$IFn$_invoke$arity$2 ? join_item.cljs$core$IFn$_invoke$arity$2(inst_121601,inst_121607) : join_item.call(null,inst_121601,inst_121607));
var inst_121609 = com.wsscode.common.async_cljs.chan_QMARK_(inst_121608__$1);
var state_121621__$1 = (function (){var statearr_121657 = state_121621;
(statearr_121657[(9)] = inst_121608__$1);

return statearr_121657;
})();
if(inst_121609){
var statearr_121658_122975 = state_121621__$1;
(statearr_121658_122975[(1)] = (11));

} else {
var statearr_121659_122976 = state_121621__$1;
(statearr_121659_122976[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121622 === (8))){
var inst_121579 = (state_121621[(7)]);
var inst_121598 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_121579);
var state_121621__$1 = state_121621;
var statearr_121660_122977 = state_121621__$1;
(statearr_121660_122977[(2)] = inst_121598);

(statearr_121660_122977[(1)] = (10));


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
});})(c__39003__auto____$1,vec__121572,ent,i,from_chan,join_item,seq__121517,first_res,check_ast_opt_QMARK_,vec__121516,out_chan,ast,env__$1,head,tail,first__121518,inst_121520,inst_121528,inst_121523,inst_121527,inst_121524,inst_121525,inst_121538,inst_121539,inst_121540,inst_121541,inst_121542,inst_121543,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache))
;
return ((function (switch__38929__auto__,c__39003__auto____$1,vec__121572,ent,i,from_chan,join_item,seq__121517,first_res,check_ast_opt_QMARK_,vec__121516,out_chan,ast,env__$1,head,tail,first__121518,inst_121520,inst_121528,inst_121523,inst_121527,inst_121524,inst_121525,inst_121538,inst_121539,inst_121540,inst_121541,inst_121542,inst_121543,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38930__auto____0 = (function (){
var statearr_121661 = [null,null,null,null,null,null,null,null,null,null];
(statearr_121661[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38930__auto__);

(statearr_121661[(1)] = (1));

return statearr_121661;
});
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38930__auto____1 = (function (state_121621){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_121621);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e121662){if((e121662 instanceof Object)){
var ex__38933__auto__ = e121662;
var statearr_121663_122992 = state_121621;
(statearr_121663_122992[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_121621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e121662;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__122993 = state_121621;
state_121621 = G__122993;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38930__auto__ = function(state_121621){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38930__auto____1.call(this,state_121621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38930__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38930__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto____$1,vec__121572,ent,i,from_chan,join_item,seq__121517,first_res,check_ast_opt_QMARK_,vec__121516,out_chan,ast,env__$1,head,tail,first__121518,inst_121520,inst_121528,inst_121523,inst_121527,inst_121524,inst_121525,inst_121538,inst_121539,inst_121540,inst_121541,inst_121542,inst_121543,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache))
})();
var state__39005__auto__ = (function (){var statearr_121666 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_121666[(6)] = c__39003__auto____$1);

return statearr_121666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto____$1,vec__121572,ent,i,from_chan,join_item,seq__121517,first_res,check_ast_opt_QMARK_,vec__121516,out_chan,ast,env__$1,head,tail,first__121518,inst_121520,inst_121528,inst_121523,inst_121527,inst_121524,inst_121525,inst_121538,inst_121539,inst_121540,inst_121541,inst_121542,inst_121543,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache))
);

return c__39003__auto____$1;
});
;})(from_chan,join_item,seq__121517,first_res,check_ast_opt_QMARK_,vec__121516,out_chan,ast,env__$1,head,tail,first__121518,inst_121520,inst_121528,inst_121523,inst_121527,inst_121524,inst_121525,inst_121538,inst_121539,inst_121540,inst_121541,inst_121542,inst_121543,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache))
})();
var inst_121546 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_121540,inst_121545,inst_121539);
var inst_121547 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_121548 = [inst_121538];
var inst_121549 = (new cljs.core.PersistentVector(null,1,(5),inst_121547,inst_121548,null));
var inst_121550 = cljs.core.async.into(inst_121549,inst_121540);
var state_121558__$1 = (function (){var statearr_121667 = state_121558;
(statearr_121667[(13)] = inst_121543);

(statearr_121667[(14)] = inst_121546);

return statearr_121667;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_121558__$1,(17),inst_121550);
} else {
if((state_val_121559 === (13))){
var inst_121530 = (state_121558[(15)]);
var state_121558__$1 = state_121558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_121558__$1,(16),inst_121530);
} else {
if((state_val_121559 === (6))){
var inst_121520 = (state_121558[(7)]);
var inst_121523 = (state_121558[(9)]);
var inst_121530 = (state_121558[(15)]);
var inst_121527 = (state_121558[(10)]);
var inst_121524 = (state_121558[(11)]);
var inst_121525 = (state_121558[(12)]);
var inst_121520__$1 = edn_query_language.core.query__GT_ast(query);
var inst_121521 = (function (){var ast = inst_121520__$1;
return ((function (ast,inst_121520,inst_121523,inst_121530,inst_121527,inst_121524,inst_121525,inst_121520__$1,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache){
return (function (p1__121441_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__121441_SHARP_));
});
;})(ast,inst_121520,inst_121523,inst_121530,inst_121527,inst_121524,inst_121525,inst_121520__$1,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache))
})();
var inst_121522 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_121520__$1);
var inst_121523__$1 = cljs.core.every_QMARK_(inst_121521,inst_121522);
var inst_121524__$1 = (function (){var ast = inst_121520__$1;
var check_ast_opt_QMARK_ = inst_121523__$1;
return ((function (ast,check_ast_opt_QMARK_,inst_121520,inst_121523,inst_121530,inst_121527,inst_121524,inst_121525,inst_121520__$1,inst_121521,inst_121522,inst_121523__$1,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_item(env__$1,entity){
var or__4131__auto__ = (function (){var and__4120__auto__ = check_ast_opt_QMARK_;
if(and__4120__auto__){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4120__auto__,ast,check_ast_opt_QMARK_,inst_121520,inst_121523,inst_121530,inst_121527,inst_121524,inst_121525,inst_121520__$1,inst_121521,inst_121522,inst_121523__$1,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache){
return (function (ent,p__121699){
var map__121700 = p__121699;
var map__121700__$1 = (((((!((map__121700 == null))))?(((((map__121700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__121700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__121700):map__121700);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121700__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121700__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5718__auto__ = cljs.core.find(entity,key);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__121703 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121703,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121703,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ent,cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450),key),v);
} else {
return cljs.core.reduced(null);
}
});})(and__4120__auto__,ast,check_ast_opt_QMARK_,inst_121520,inst_121523,inst_121530,inst_121527,inst_121524,inst_121525,inst_121520__$1,inst_121521,inst_121522,inst_121523__$1,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache))
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
;})(ast,check_ast_opt_QMARK_,inst_121520,inst_121523,inst_121530,inst_121527,inst_121524,inst_121525,inst_121520__$1,inst_121521,inst_121522,inst_121523__$1,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache))
})();
var inst_121525__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll);
var inst_121526 = cljs.core.seq(coll);
var inst_121527__$1 = cljs.core.first(inst_121526);
var inst_121528 = cljs.core.next(inst_121526);
var inst_121529 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_121525__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,(0));
var inst_121530__$1 = (inst_121524__$1.cljs$core$IFn$_invoke$arity$2 ? inst_121524__$1.cljs$core$IFn$_invoke$arity$2(inst_121529,inst_121527__$1) : inst_121524__$1.call(null,inst_121529,inst_121527__$1));
var inst_121531 = com.wsscode.common.async_cljs.chan_QMARK_(inst_121530__$1);
var state_121558__$1 = (function (){var statearr_121707 = state_121558;
(statearr_121707[(7)] = inst_121520__$1);

(statearr_121707[(8)] = inst_121528);

(statearr_121707[(9)] = inst_121523__$1);

(statearr_121707[(15)] = inst_121530__$1);

(statearr_121707[(10)] = inst_121527__$1);

(statearr_121707[(11)] = inst_121524__$1);

(statearr_121707[(12)] = inst_121525__$1);

return statearr_121707;
})();
if(inst_121531){
var statearr_121708_123003 = state_121558__$1;
(statearr_121708_123003[(1)] = (13));

} else {
var statearr_121709_123004 = state_121558__$1;
(statearr_121709_123004[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121559 === (17))){
var inst_121552 = (state_121558[(2)]);
var state_121558__$1 = state_121558;
var statearr_121711_123009 = state_121558__$1;
(statearr_121711_123009[(2)] = inst_121552);

(statearr_121711_123009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121559 === (3))){
var inst_121453 = (state_121558[(2)]);
var state_121558__$1 = state_121558;
var statearr_121712_123013 = state_121558__$1;
(statearr_121712_123013[(2)] = inst_121453);


cljs.core.async.impl.ioc_helpers.process_exception(state_121558__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121559 === (12))){
var inst_121468 = (state_121558[(16)]);
var inst_121506 = (state_121558[(2)]);
var inst_121507 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_121508 = [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_121509 = ["#e0e3a4","0.8"];
var inst_121510 = cljs.core.PersistentHashMap.fromArrays(inst_121508,inst_121509);
var inst_121511 = [new cljs.core.Keyword("com.wsscode.pathom.core","parallel-sequence-loop","com.wsscode.pathom.core/parallel-sequence-loop",1692546245),inst_121510];
var inst_121512 = cljs.core.PersistentHashMap.fromArrays(inst_121507,inst_121511);
var inst_121513 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_121468,inst_121512);
var state_121558__$1 = (function (){var statearr_121714 = state_121558;
(statearr_121714[(17)] = inst_121513);

return statearr_121714;
})();
var statearr_121715_123034 = state_121558__$1;
(statearr_121715_123034[(2)] = inst_121506);

(statearr_121715_123034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121559 === (2))){
var inst_121556 = (state_121558[(2)]);
var state_121558__$1 = state_121558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_121558__$1,inst_121556);
} else {
if((state_val_121559 === (11))){
var inst_121489 = (state_121558[(2)]);
var inst_121490 = com.wsscode.common.async_cljs.throw_err(inst_121489);
var state_121558__$1 = state_121558;
var statearr_121716_123037 = state_121558__$1;
(statearr_121716_123037[(2)] = inst_121490);

(statearr_121716_123037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121559 === (9))){
var inst_121485 = (state_121558[(18)]);
var state_121558__$1 = state_121558;
var statearr_121718_123038 = state_121558__$1;
(statearr_121718_123038[(2)] = inst_121485);

(statearr_121718_123038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121559 === (5))){
var inst_121478 = (state_121558[(19)]);
var inst_121482 = (state_121558[(20)]);
var inst_121468 = (state_121558[(16)]);
var inst_121485 = (state_121558[(18)]);
var inst_121479 = (state_121558[(21)]);
var inst_121475 = (state_121558[(22)]);
var inst_121480 = (state_121558[(23)]);
var inst_121461 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_121463 = [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_121464 = ["#e0e3a4","0.8"];
var inst_121465 = cljs.core.PersistentHashMap.fromArrays(inst_121463,inst_121464);
var inst_121466 = [new cljs.core.Keyword("com.wsscode.pathom.core","parallel-sequence-loop","com.wsscode.pathom.core/parallel-sequence-loop",1692546245),inst_121465];
var inst_121467 = cljs.core.PersistentHashMap.fromArrays(inst_121461,inst_121466);
var inst_121468__$1 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_121467);
var inst_121475__$1 = edn_query_language.core.query__GT_ast(query);
var inst_121476 = (function (){var trace_id__21490__auto__ = inst_121468__$1;
var ast = inst_121475__$1;
return ((function (trace_id__21490__auto__,ast,inst_121478,inst_121482,inst_121468,inst_121485,inst_121479,inst_121475,inst_121480,inst_121461,inst_121463,inst_121464,inst_121465,inst_121466,inst_121467,inst_121468__$1,inst_121475__$1,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache){
return (function (p1__121441_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__121441_SHARP_));
});
;})(trace_id__21490__auto__,ast,inst_121478,inst_121482,inst_121468,inst_121485,inst_121479,inst_121475,inst_121480,inst_121461,inst_121463,inst_121464,inst_121465,inst_121466,inst_121467,inst_121468__$1,inst_121475__$1,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache))
})();
var inst_121477 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_121475__$1);
var inst_121478__$1 = cljs.core.every_QMARK_(inst_121476,inst_121477);
var inst_121479__$1 = (function (){var trace_id__21490__auto__ = inst_121468__$1;
var ast = inst_121475__$1;
var check_ast_opt_QMARK_ = inst_121478__$1;
return ((function (trace_id__21490__auto__,ast,check_ast_opt_QMARK_,inst_121478,inst_121482,inst_121468,inst_121485,inst_121479,inst_121475,inst_121480,inst_121461,inst_121463,inst_121464,inst_121465,inst_121466,inst_121467,inst_121468__$1,inst_121475__$1,inst_121476,inst_121477,inst_121478__$1,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_item(env__$1,entity){
var or__4131__auto__ = (function (){var and__4120__auto__ = check_ast_opt_QMARK_;
if(and__4120__auto__){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4120__auto__,trace_id__21490__auto__,ast,check_ast_opt_QMARK_,inst_121478,inst_121482,inst_121468,inst_121485,inst_121479,inst_121475,inst_121480,inst_121461,inst_121463,inst_121464,inst_121465,inst_121466,inst_121467,inst_121468__$1,inst_121475__$1,inst_121476,inst_121477,inst_121478__$1,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache){
return (function (ent,p__121744){
var map__121745 = p__121744;
var map__121745__$1 = (((((!((map__121745 == null))))?(((((map__121745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__121745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__121745):map__121745);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121745__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121745__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5718__auto__ = cljs.core.find(entity,key);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__121747 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121747,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121747,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ent,cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450),key),v);
} else {
return cljs.core.reduced(null);
}
});})(and__4120__auto__,trace_id__21490__auto__,ast,check_ast_opt_QMARK_,inst_121478,inst_121482,inst_121468,inst_121485,inst_121479,inst_121475,inst_121480,inst_121461,inst_121463,inst_121464,inst_121465,inst_121466,inst_121467,inst_121468__$1,inst_121475__$1,inst_121476,inst_121477,inst_121478__$1,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache))
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
;})(trace_id__21490__auto__,ast,check_ast_opt_QMARK_,inst_121478,inst_121482,inst_121468,inst_121485,inst_121479,inst_121475,inst_121480,inst_121461,inst_121463,inst_121464,inst_121465,inst_121466,inst_121467,inst_121468__$1,inst_121475__$1,inst_121476,inst_121477,inst_121478__$1,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache))
})();
var inst_121480__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll);
var inst_121481 = cljs.core.seq(coll);
var inst_121482__$1 = cljs.core.first(inst_121481);
var inst_121483 = cljs.core.next(inst_121481);
var inst_121484 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_121480__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,(0));
var inst_121485__$1 = (inst_121479__$1.cljs$core$IFn$_invoke$arity$2 ? inst_121479__$1.cljs$core$IFn$_invoke$arity$2(inst_121484,inst_121482__$1) : inst_121479__$1.call(null,inst_121484,inst_121482__$1));
var inst_121486 = com.wsscode.common.async_cljs.chan_QMARK_(inst_121485__$1);
var state_121558__$1 = (function (){var statearr_121750 = state_121558;
(statearr_121750[(19)] = inst_121478__$1);

(statearr_121750[(20)] = inst_121482__$1);

(statearr_121750[(16)] = inst_121468__$1);

(statearr_121750[(18)] = inst_121485__$1);

(statearr_121750[(21)] = inst_121479__$1);

(statearr_121750[(24)] = inst_121483);

(statearr_121750[(22)] = inst_121475__$1);

(statearr_121750[(23)] = inst_121480__$1);

return statearr_121750;
})();
if(inst_121486){
var statearr_121751_123156 = state_121558__$1;
(statearr_121751_123156[(1)] = (8));

} else {
var statearr_121752_123158 = state_121558__$1;
(statearr_121752_123158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121559 === (14))){
var inst_121530 = (state_121558[(15)]);
var state_121558__$1 = state_121558;
var statearr_121754_123161 = state_121558__$1;
(statearr_121754_123161[(2)] = inst_121530);

(statearr_121754_123161[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121559 === (16))){
var inst_121534 = (state_121558[(2)]);
var inst_121535 = com.wsscode.common.async_cljs.throw_err(inst_121534);
var state_121558__$1 = state_121558;
var statearr_121755_123162 = state_121558__$1;
(statearr_121755_123162[(2)] = inst_121535);

(statearr_121755_123162[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121559 === (10))){
var inst_121478 = (state_121558[(19)]);
var inst_121482 = (state_121558[(20)]);
var inst_121468 = (state_121558[(16)]);
var inst_121479 = (state_121558[(21)]);
var inst_121483 = (state_121558[(24)]);
var inst_121475 = (state_121558[(22)]);
var inst_121480 = (state_121558[(23)]);
var inst_121493 = (state_121558[(2)]);
var inst_121494 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_121495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_121496 = cljs.core.range.cljs$core$IFn$_invoke$arity$0();
var inst_121497 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_121483,inst_121496);
var inst_121498 = cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(inst_121494,inst_121497);
var inst_121499 = (function (){var from_chan = inst_121494;
var join_item = inst_121479;
var trace_id__21490__auto__ = inst_121468;
var seq__121472 = inst_121483;
var vec__121471 = coll;
var first_res = inst_121493;
var check_ast_opt_QMARK_ = inst_121478;
var out_chan = inst_121495;
var ast = inst_121475;
var env__$1 = inst_121480;
var first__121473 = inst_121482;
var head = inst_121482;
var tail = inst_121483;
return ((function (from_chan,join_item,trace_id__21490__auto__,seq__121472,vec__121471,first_res,check_ast_opt_QMARK_,out_chan,ast,env__$1,first__121473,head,tail,inst_121478,inst_121482,inst_121468,inst_121479,inst_121483,inst_121475,inst_121480,inst_121493,inst_121494,inst_121495,inst_121496,inst_121497,inst_121498,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline(p__121757,res_ch){
var vec__121758 = p__121757;
var ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121758,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121758,(1),null);
var c__39003__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto____$1,vec__121758,ent,i,from_chan,join_item,trace_id__21490__auto__,seq__121472,vec__121471,first_res,check_ast_opt_QMARK_,out_chan,ast,env__$1,first__121473,head,tail,inst_121478,inst_121482,inst_121468,inst_121479,inst_121483,inst_121475,inst_121480,inst_121493,inst_121494,inst_121495,inst_121496,inst_121497,inst_121498,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto____$1,vec__121758,ent,i,from_chan,join_item,trace_id__21490__auto__,seq__121472,vec__121471,first_res,check_ast_opt_QMARK_,out_chan,ast,env__$1,first__121473,head,tail,inst_121478,inst_121482,inst_121468,inst_121479,inst_121483,inst_121475,inst_121480,inst_121493,inst_121494,inst_121495,inst_121496,inst_121497,inst_121498,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache){
return (function (state_121803){
var state_val_121804 = (state_121803[(1)]);
if((state_val_121804 === (7))){
var inst_121777 = (state_121803[(2)]);
var state_121803__$1 = state_121803;
var statearr_121808_123173 = state_121803__$1;
(statearr_121808_123173[(2)] = inst_121777);

(statearr_121808_123173[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121804 === (1))){
var inst_121763 = (state_121803[(7)]);
var inst_121762 = (i + (1));
var inst_121763__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,inst_121762);
var inst_121765 = (inst_121763__$1 == null);
var inst_121766 = cljs.core.not(inst_121765);
var state_121803__$1 = (function (){var statearr_121811 = state_121803;
(statearr_121811[(7)] = inst_121763__$1);

return statearr_121811;
})();
if(inst_121766){
var statearr_121813_123176 = state_121803__$1;
(statearr_121813_123176[(1)] = (2));

} else {
var statearr_121815_123177 = state_121803__$1;
(statearr_121815_123177[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121804 === (4))){
var inst_121780 = (state_121803[(2)]);
var state_121803__$1 = state_121803;
if(cljs.core.truth_(inst_121780)){
var statearr_121816_123179 = state_121803__$1;
(statearr_121816_123179[(1)] = (8));

} else {
var statearr_121817_123180 = state_121803__$1;
(statearr_121817_123180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121804 === (15))){
var inst_121800 = (state_121803[(2)]);
var inst_121801 = cljs.core.async.close_BANG_(res_ch);
var state_121803__$1 = (function (){var statearr_121818 = state_121803;
(statearr_121818[(8)] = inst_121800);

return statearr_121818;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_121803__$1,inst_121801);
} else {
if((state_val_121804 === (13))){
var inst_121798 = (state_121803[(2)]);
var state_121803__$1 = state_121803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_121803__$1,(15),res_ch,inst_121798);
} else {
if((state_val_121804 === (6))){
var state_121803__$1 = state_121803;
var statearr_121819_123181 = state_121803__$1;
(statearr_121819_123181[(2)] = false);

(statearr_121819_123181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121804 === (3))){
var state_121803__$1 = state_121803;
var statearr_121820_123182 = state_121803__$1;
(statearr_121820_123182[(2)] = false);

(statearr_121820_123182[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121804 === (12))){
var inst_121791 = (state_121803[(9)]);
var state_121803__$1 = state_121803;
var statearr_121821_123184 = state_121803__$1;
(statearr_121821_123184[(2)] = inst_121791);

(statearr_121821_123184[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121804 === (2))){
var inst_121763 = (state_121803[(7)]);
var inst_121769 = inst_121763.cljs$lang$protocol_mask$partition0$;
var inst_121770 = (inst_121769 & (64));
var inst_121771 = inst_121763.cljs$core$ISeq$;
var inst_121772 = (cljs.core.PROTOCOL_SENTINEL === inst_121771);
var inst_121773 = ((inst_121770) || (inst_121772));
var state_121803__$1 = state_121803;
if(cljs.core.truth_(inst_121773)){
var statearr_121822_123186 = state_121803__$1;
(statearr_121822_123186[(1)] = (5));

} else {
var statearr_121823_123187 = state_121803__$1;
(statearr_121823_123187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121804 === (11))){
var inst_121791 = (state_121803[(9)]);
var state_121803__$1 = state_121803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_121803__$1,(14),inst_121791);
} else {
if((state_val_121804 === (9))){
var inst_121763 = (state_121803[(7)]);
var state_121803__$1 = state_121803;
var statearr_121824_123190 = state_121803__$1;
(statearr_121824_123190[(2)] = inst_121763);

(statearr_121824_123190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121804 === (5))){
var state_121803__$1 = state_121803;
var statearr_121825_123192 = state_121803__$1;
(statearr_121825_123192[(2)] = true);

(statearr_121825_123192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121804 === (14))){
var inst_121795 = (state_121803[(2)]);
var state_121803__$1 = state_121803;
var statearr_121827_123193 = state_121803__$1;
(statearr_121827_123193[(2)] = inst_121795);

(statearr_121827_123193[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121804 === (10))){
var inst_121791 = (state_121803[(9)]);
var inst_121785 = (state_121803[(2)]);
var inst_121786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_121785,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var inst_121787 = cljs.core.deref(entity_path_cache);
var inst_121788 = cljs.core.PersistentHashMap.EMPTY;
var inst_121789 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_121787,inst_121786,inst_121788);
var inst_121790 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_121789,ent], 0));
var inst_121791__$1 = (join_item.cljs$core$IFn$_invoke$arity$2 ? join_item.cljs$core$IFn$_invoke$arity$2(inst_121785,inst_121790) : join_item.call(null,inst_121785,inst_121790));
var inst_121792 = com.wsscode.common.async_cljs.chan_QMARK_(inst_121791__$1);
var state_121803__$1 = (function (){var statearr_121829 = state_121803;
(statearr_121829[(9)] = inst_121791__$1);

return statearr_121829;
})();
if(inst_121792){
var statearr_121830_123200 = state_121803__$1;
(statearr_121830_123200[(1)] = (11));

} else {
var statearr_121831_123201 = state_121803__$1;
(statearr_121831_123201[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121804 === (8))){
var inst_121763 = (state_121803[(7)]);
var inst_121782 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_121763);
var state_121803__$1 = state_121803;
var statearr_121832_123202 = state_121803__$1;
(statearr_121832_123202[(2)] = inst_121782);

(statearr_121832_123202[(1)] = (10));


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
});})(c__39003__auto____$1,vec__121758,ent,i,from_chan,join_item,trace_id__21490__auto__,seq__121472,vec__121471,first_res,check_ast_opt_QMARK_,out_chan,ast,env__$1,first__121473,head,tail,inst_121478,inst_121482,inst_121468,inst_121479,inst_121483,inst_121475,inst_121480,inst_121493,inst_121494,inst_121495,inst_121496,inst_121497,inst_121498,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache))
;
return ((function (switch__38929__auto__,c__39003__auto____$1,vec__121758,ent,i,from_chan,join_item,trace_id__21490__auto__,seq__121472,vec__121471,first_res,check_ast_opt_QMARK_,out_chan,ast,env__$1,first__121473,head,tail,inst_121478,inst_121482,inst_121468,inst_121479,inst_121483,inst_121475,inst_121480,inst_121493,inst_121494,inst_121495,inst_121496,inst_121497,inst_121498,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38930__auto____0 = (function (){
var statearr_121833 = [null,null,null,null,null,null,null,null,null,null];
(statearr_121833[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38930__auto__);

(statearr_121833[(1)] = (1));

return statearr_121833;
});
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38930__auto____1 = (function (state_121803){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_121803);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e121834){if((e121834 instanceof Object)){
var ex__38933__auto__ = e121834;
var statearr_121835_123203 = state_121803;
(statearr_121835_123203[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_121803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e121834;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__123204 = state_121803;
state_121803 = G__123204;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38930__auto__ = function(state_121803){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38930__auto____1.call(this,state_121803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38930__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38930__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto____$1,vec__121758,ent,i,from_chan,join_item,trace_id__21490__auto__,seq__121472,vec__121471,first_res,check_ast_opt_QMARK_,out_chan,ast,env__$1,first__121473,head,tail,inst_121478,inst_121482,inst_121468,inst_121479,inst_121483,inst_121475,inst_121480,inst_121493,inst_121494,inst_121495,inst_121496,inst_121497,inst_121498,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache))
})();
var state__39005__auto__ = (function (){var statearr_121836 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_121836[(6)] = c__39003__auto____$1);

return statearr_121836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto____$1,vec__121758,ent,i,from_chan,join_item,trace_id__21490__auto__,seq__121472,vec__121471,first_res,check_ast_opt_QMARK_,out_chan,ast,env__$1,first__121473,head,tail,inst_121478,inst_121482,inst_121468,inst_121479,inst_121483,inst_121475,inst_121480,inst_121493,inst_121494,inst_121495,inst_121496,inst_121497,inst_121498,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache))
);

return c__39003__auto____$1;
});
;})(from_chan,join_item,trace_id__21490__auto__,seq__121472,vec__121471,first_res,check_ast_opt_QMARK_,out_chan,ast,env__$1,first__121473,head,tail,inst_121478,inst_121482,inst_121468,inst_121479,inst_121483,inst_121475,inst_121480,inst_121493,inst_121494,inst_121495,inst_121496,inst_121497,inst_121498,state_val_121559,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache))
})();
var inst_121500 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_121495,inst_121499,inst_121494);
var inst_121501 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_121502 = [inst_121493];
var inst_121503 = (new cljs.core.PersistentVector(null,1,(5),inst_121501,inst_121502,null));
var inst_121504 = cljs.core.async.into(inst_121503,inst_121495);
var state_121558__$1 = (function (){var statearr_121837 = state_121558;
(statearr_121837[(25)] = inst_121498);

(statearr_121837[(26)] = inst_121500);

return statearr_121837;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_121558__$1,(12),inst_121504);
} else {
if((state_val_121559 === (8))){
var inst_121485 = (state_121558[(18)]);
var state_121558__$1 = state_121558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_121558__$1,(11),inst_121485);
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
});})(c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache))
;
return ((function (switch__38929__auto__,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38930__auto____0 = (function (){
var statearr_121838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_121838[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38930__auto__);

(statearr_121838[(1)] = (1));

return statearr_121838;
});
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38930__auto____1 = (function (state_121558){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_121558);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e121839){if((e121839 instanceof Object)){
var ex__38933__auto__ = e121839;
var statearr_121840_123212 = state_121558;
(statearr_121840_123212[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_121558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e121839;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__123213 = state_121558;
state_121558 = G__123213;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38930__auto__ = function(state_121558){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38930__auto____1.call(this,state_121558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38930__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38930__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache))
})();
var state__39005__auto__ = (function (){var statearr_121846 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_121846[(6)] = c__39003__auto__);

return statearr_121846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,map__121448,map__121448__$1,env,query,entity_path_cache))
);

return c__39003__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Runs the current subquery against the items of the given collection.
 */
com.wsscode.pathom.core.join_seq = (function com$wsscode$pathom$core$join_seq(p__121847,coll){
var map__121848 = p__121847;
var map__121848__$1 = (((((!((map__121848 == null))))?(((((map__121848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__121848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__121848):map__121848);
var env = map__121848__$1;
var parallel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__121848__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","parallel?","com.wsscode.pathom.parser/parallel?",2071817193));
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","join-seq","com.wsscode.pathom.core/join-seq",523699901),new cljs.core.Keyword("com.wsscode.pathom.core","seq-count","com.wsscode.pathom.core/seq-count",-1671473836),cljs.core.count(coll)], null));

if(cljs.core.truth_(parallel_QMARK_)){
return com.wsscode.pathom.core.join_seq_parallel(env,coll);
} else {
var join_item = ((function (map__121848,map__121848__$1,env,parallel_QMARK_){
return (function com$wsscode$pathom$core$join_seq_$_join_item(ent,out){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(ent,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,cljs.core.count(out)));
});})(map__121848,map__121848__$1,env,parallel_QMARK_))
;
var out = cljs.core.PersistentVector.EMPTY;
var G__121873 = coll;
var vec__121874 = G__121873;
var seq__121875 = cljs.core.seq(vec__121874);
var first__121876 = cljs.core.first(seq__121875);
var seq__121875__$1 = cljs.core.next(seq__121875);
var ent = first__121876;
var tail = seq__121875__$1;
var out__$1 = out;
var G__121873__$1 = G__121873;
while(true){
var out__$2 = out__$1;
var vec__122018 = G__121873__$1;
var seq__122019 = cljs.core.seq(vec__122018);
var first__122020 = cljs.core.first(seq__122019);
var seq__122019__$1 = cljs.core.next(seq__122019);
var ent__$1 = first__122020;
var tail__$1 = seq__122019__$1;
if(cljs.core.truth_(ent__$1)){
var res = join_item(ent__$1,out__$2);
if(com.wsscode.common.async_cljs.chan_QMARK_(res)){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (out__$1,G__121873__$1,c__39003__auto__,res,out__$2,vec__122018,seq__122019,first__122020,seq__122019__$1,ent__$1,tail__$1,out,G__121873,vec__121874,seq__121875,first__121876,seq__121875__$1,ent,tail,map__121848,map__121848__$1,env,parallel_QMARK_){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (out__$1,G__121873__$1,c__39003__auto__,res,out__$2,vec__122018,seq__122019,first__122020,seq__122019__$1,ent__$1,tail__$1,out,G__121873,vec__121874,seq__121875,first__121876,seq__121875__$1,ent,tail,map__121848,map__121848__$1,env,parallel_QMARK_){
return (function (state_122065){
var state_val_122066 = (state_122065[(1)]);
if((state_val_122066 === (7))){
var inst_122061 = (state_122065[(2)]);
var state_122065__$1 = state_122065;
var statearr_122075_123238 = state_122065__$1;
(statearr_122075_123238[(2)] = inst_122061);


cljs.core.async.impl.ioc_helpers.process_exception(state_122065__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122066 === (1))){
var state_122065__$1 = state_122065;
var statearr_122076_123240 = state_122065__$1;
(statearr_122076_123240[(2)] = null);

(statearr_122076_123240[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122066 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_122065,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_122032 = cljs.core.PersistentVector.EMPTY_NODE;
var state_122065__$1 = (function (){var statearr_122077 = state_122065;
(statearr_122077[(7)] = inst_122032);

return statearr_122077;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_122065__$1,(5),res);
} else {
if((state_val_122066 === (6))){
var inst_122042 = (state_122065[(8)]);
var inst_122048 = (state_122065[(9)]);
var inst_122047 = cljs.core.seq(inst_122042);
var inst_122048__$1 = cljs.core.first(inst_122047);
var inst_122049 = cljs.core.next(inst_122047);
var state_122065__$1 = (function (){var statearr_122078 = state_122065;
(statearr_122078[(9)] = inst_122048__$1);

(statearr_122078[(10)] = inst_122049);

return statearr_122078;
})();
if(cljs.core.truth_(inst_122048__$1)){
var statearr_122079_123245 = state_122065__$1;
(statearr_122079_123245[(1)] = (8));

} else {
var statearr_122080_123246 = state_122065__$1;
(statearr_122080_123246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122066 === (3))){
var inst_122021 = (state_122065[(2)]);
var state_122065__$1 = state_122065;
var statearr_122081_123247 = state_122065__$1;
(statearr_122081_123247[(2)] = inst_122021);


cljs.core.async.impl.ioc_helpers.process_exception(state_122065__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122066 === (2))){
var inst_122063 = (state_122065[(2)]);
var state_122065__$1 = state_122065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_122065__$1,inst_122063);
} else {
if((state_val_122066 === (11))){
var inst_122041 = (state_122065[(11)]);
var inst_122049 = (state_122065[(10)]);
var inst_122053 = (state_122065[(2)]);
var inst_122054 = com.wsscode.common.async_cljs.throw_err(inst_122053);
var inst_122055 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_122041,inst_122054);
var inst_122041__$1 = inst_122055;
var inst_122042 = inst_122049;
var state_122065__$1 = (function (){var statearr_122082 = state_122065;
(statearr_122082[(11)] = inst_122041__$1);

(statearr_122082[(8)] = inst_122042);

return statearr_122082;
})();
var statearr_122083_123249 = state_122065__$1;
(statearr_122083_123249[(2)] = null);

(statearr_122083_123249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122066 === (9))){
var inst_122041 = (state_122065[(11)]);
var state_122065__$1 = state_122065;
var statearr_122084_123250 = state_122065__$1;
(statearr_122084_123250[(2)] = inst_122041);

(statearr_122084_123250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122066 === (5))){
var inst_122032 = (state_122065[(7)]);
var inst_122034 = (state_122065[(2)]);
var inst_122035 = com.wsscode.common.async_cljs.throw_err(inst_122034);
var inst_122036 = [inst_122035];
var inst_122037 = (new cljs.core.PersistentVector(null,1,(5),inst_122032,inst_122036,null));
var inst_122038 = cljs.core.seq(tail__$1);
var inst_122039 = cljs.core.first(inst_122038);
var inst_122040 = cljs.core.next(inst_122038);
var inst_122041 = inst_122037;
var inst_122042 = tail__$1;
var state_122065__$1 = (function (){var statearr_122085 = state_122065;
(statearr_122085[(11)] = inst_122041);

(statearr_122085[(8)] = inst_122042);

(statearr_122085[(12)] = inst_122039);

(statearr_122085[(13)] = inst_122040);

return statearr_122085;
})();
var statearr_122086_123253 = state_122065__$1;
(statearr_122086_123253[(2)] = null);

(statearr_122086_123253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122066 === (10))){
var inst_122059 = (state_122065[(2)]);
var state_122065__$1 = state_122065;
var statearr_122087_123254 = state_122065__$1;
(statearr_122087_123254[(2)] = inst_122059);

(statearr_122087_123254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122066 === (8))){
var inst_122041 = (state_122065[(11)]);
var inst_122048 = (state_122065[(9)]);
var inst_122051 = join_item(inst_122048,inst_122041);
var state_122065__$1 = state_122065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_122065__$1,(11),inst_122051);
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
});})(out__$1,G__121873__$1,c__39003__auto__,res,out__$2,vec__122018,seq__122019,first__122020,seq__122019__$1,ent__$1,tail__$1,out,G__121873,vec__121874,seq__121875,first__121876,seq__121875__$1,ent,tail,map__121848,map__121848__$1,env,parallel_QMARK_))
;
return ((function (out__$1,G__121873__$1,switch__38929__auto__,c__39003__auto__,res,out__$2,vec__122018,seq__122019,first__122020,seq__122019__$1,ent__$1,tail__$1,out,G__121873,vec__121874,seq__121875,first__121876,seq__121875__$1,ent,tail,map__121848,map__121848__$1,env,parallel_QMARK_){
return (function() {
var com$wsscode$pathom$core$join_seq_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$core$join_seq_$_state_machine__38930__auto____0 = (function (){
var statearr_122089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_122089[(0)] = com$wsscode$pathom$core$join_seq_$_state_machine__38930__auto__);

(statearr_122089[(1)] = (1));

return statearr_122089;
});
var com$wsscode$pathom$core$join_seq_$_state_machine__38930__auto____1 = (function (state_122065){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_122065);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e122090){if((e122090 instanceof Object)){
var ex__38933__auto__ = e122090;
var statearr_122091_123259 = state_122065;
(statearr_122091_123259[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_122065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e122090;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__123260 = state_122065;
state_122065 = G__123260;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_$_state_machine__38930__auto__ = function(state_122065){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_$_state_machine__38930__auto____1.call(this,state_122065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_$_state_machine__38930__auto____0;
com$wsscode$pathom$core$join_seq_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_$_state_machine__38930__auto____1;
return com$wsscode$pathom$core$join_seq_$_state_machine__38930__auto__;
})()
;})(out__$1,G__121873__$1,switch__38929__auto__,c__39003__auto__,res,out__$2,vec__122018,seq__122019,first__122020,seq__122019__$1,ent__$1,tail__$1,out,G__121873,vec__121874,seq__121875,first__121876,seq__121875__$1,ent,tail,map__121848,map__121848__$1,env,parallel_QMARK_))
})();
var state__39005__auto__ = (function (){var statearr_122092 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_122092[(6)] = c__39003__auto__);

return statearr_122092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(out__$1,G__121873__$1,c__39003__auto__,res,out__$2,vec__122018,seq__122019,first__122020,seq__122019__$1,ent__$1,tail__$1,out,G__121873,vec__121874,seq__121875,first__121876,seq__121875__$1,ent,tail,map__121848,map__121848__$1,env,parallel_QMARK_))
);

return c__39003__auto__;
} else {
var G__123262 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out__$2,res);
var G__123263 = tail__$1;
out__$1 = G__123262;
G__121873__$1 = G__123263;
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
com.wsscode.pathom.core.ident_key = (function com$wsscode$pathom$core$ident_key(p__122094){
var map__122095 = p__122094;
var map__122095__$1 = (((((!((map__122095 == null))))?(((((map__122095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122095):map__122095);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122095__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var key = (function (){var G__122099 = ast;
if((G__122099 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__122099);
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
com.wsscode.pathom.core.ident_value = (function com$wsscode$pathom$core$ident_value(p__122104){
var map__122105 = p__122104;
var map__122105__$1 = (((((!((map__122105 == null))))?(((((map__122105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122105):map__122105);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122105__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var key = (function (){var G__122107 = ast;
if((G__122107 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__122107);
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
com.wsscode.pathom.core.elide_ast_nodes = (function com$wsscode$pathom$core$elide_ast_nodes(p__122111,elision_set){
var map__122112 = p__122111;
var map__122112__$1 = (((((!((map__122112 == null))))?(((((map__122112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122112):map__122112);
var ast = map__122112__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122112__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122112__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var union_elision_QMARK_ = cljs.core.contains_QMARK_(elision_set,union_key);
if(((union_elision_QMARK_) || (cljs.core.contains_QMARK_(elision_set,key)))){
return null;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"children","children",-940561982),((function (union_elision_QMARK_,map__122112,map__122112__$1,ast,key,union_key){
return (function (c){
if(cljs.core.truth_(c)){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (union_elision_QMARK_,map__122112,map__122112__$1,ast,key,union_key){
return (function (p1__122108_SHARP_){
return (com.wsscode.pathom.core.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2(p1__122108_SHARP_,elision_set) : com.wsscode.pathom.core.elide_ast_nodes.call(null,p1__122108_SHARP_,elision_set));
});})(union_elision_QMARK_,map__122112,map__122112__$1,ast,key,union_key))
,c));
} else {
return null;
}
});})(union_elision_QMARK_,map__122112,map__122112__$1,ast,key,union_key))
);
}
});
com.wsscode.pathom.core.normalize_env = (function com$wsscode$pathom$core$normalize_env(p__122120){
var map__122121 = p__122120;
var map__122121__$1 = (((((!((map__122121 == null))))?(((((map__122121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122121):map__122121);
var env = map__122121__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122121__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var G__122123 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
if((new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249).cljs$core$IFn$_invoke$arity$1(env) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__122123,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031));
} else {
return G__122123;
}
});
com.wsscode.pathom.core.merge_queries_STAR_ = (function com$wsscode$pathom$core$merge_queries_STAR_(qa,qb){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ast,p__122129){
var map__122130 = p__122129;
var map__122130__$1 = (((((!((map__122130 == null))))?(((((map__122130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122130):map__122130);
var item_b = map__122130__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122130__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122130__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122130__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5718__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__122130,map__122130__$1,item_b,key,type,params){
return (function (p1__122126_SHARP_,p2__122125_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p2__122125_SHARP_),key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__122126_SHARP_,p2__122125_SHARP_], null);
} else {
return null;
}
});})(map__122130,map__122130__$1,item_b,key,type,params))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__122134 = temp__5718__auto__;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122134,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122134,(1),null);
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
var G__122142 = com.wsscode.pathom.core.merge_queries_STAR_(com.wsscode.pathom.core.query__GT_ast(qa),com.wsscode.pathom.core.query__GT_ast(qb));
if((G__122142 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast__GT_query(G__122142);
}
});
/**
 * Converts ident values and param values to ::p/var.
 */
com.wsscode.pathom.core.normalize_query_variables = (function com$wsscode$pathom$core$normalize_query_variables(query){
return com.wsscode.pathom.core.ast__GT_query(com.wsscode.pathom.core.transduce_children(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
var G__122147 = x;
var G__122147__$1 = ((com.wsscode.pathom.core.ident_QMARK_(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__122147,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x)),new cljs.core.Keyword("com.wsscode.pathom.core","var","com.wsscode.pathom.core/var",-2126559442)], null)):G__122147);
if(cljs.core.truth_(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__122147__$1,new cljs.core.Keyword(null,"params","params",710516235),((function (G__122147,G__122147__$1){
return (function (p1__122143_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__122147,G__122147__$1){
return (function (p__122152){
var vec__122153 = p__122152;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122153,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122153,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword("com.wsscode.pathom.core","var","com.wsscode.pathom.core/var",-2126559442)], null);
});})(G__122147,G__122147__$1))
),p1__122143_SHARP_);
});})(G__122147,G__122147__$1))
);
} else {
return G__122147__$1;
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
com.wsscode.pathom.core.key_dispatch = (function com$wsscode$pathom$core$key_dispatch(p__122161){
var map__122163 = p__122161;
var map__122163__$1 = (((((!((map__122163 == null))))?(((((map__122163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122163):map__122163);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122163__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
});
/**
 * Dispatch on the first element (type) of an incoming ident.
 */
com.wsscode.pathom.core.entity_dispatch = (function com$wsscode$pathom$core$entity_dispatch(p__122168){
var map__122169 = p__122168;
var map__122169__$1 = (((((!((map__122169 == null))))?(((((map__122169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122169):map__122169);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122169__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
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
com.wsscode.pathom.core.env_placeholder_reader = (function com$wsscode$pathom$core$env_placeholder_reader(p__122174){
var map__122175 = p__122174;
var map__122175__$1 = (((((!((map__122175 == null))))?(((((map__122175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122175):map__122175);
var env = map__122175__$1;
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122175__$1,new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644));
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
com.wsscode.pathom.core.lift_placeholders = (function com$wsscode$pathom$core$lift_placeholders(p__122178,query){
var map__122179 = p__122178;
var map__122179__$1 = (((((!((map__122179 == null))))?(((((map__122179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122179):map__122179);
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122179__$1,new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644));
var ast = com.wsscode.pathom.core.query__GT_ast(query);
var ast_SINGLEQUOTE_ = clojure.walk.postwalk(((function (ast,map__122179,map__122179__$1,placeholder_prefixes){
return (function (x){
var temp__5718__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__5718__auto__)){
var children = temp__5718__auto__;
var map__122184 = cljs.core.group_by(((function (children,temp__5718__auto__,ast,map__122179,map__122179__$1,placeholder_prefixes){
return (function (p1__122177_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__122177_SHARP_))) && (cljs.core.contains_QMARK_(placeholder_prefixes,cljs.core.namespace(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(p1__122177_SHARP_)))));
});})(children,temp__5718__auto__,ast,map__122179,map__122179__$1,placeholder_prefixes))
,children);
var map__122184__$1 = (((((!((map__122184 == null))))?(((((map__122184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122184):map__122184);
var placeholders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122184__$1,true);
var regular = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122184__$1,false);
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
});})(ast,map__122179,map__122179__$1,placeholder_prefixes))
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
com.wsscode.pathom.core.map_reader = (function com$wsscode$pathom$core$map_reader(p__122191){
var map__122192 = p__122191;
var map__122192__$1 = (((((!((map__122192 == null))))?(((((map__122192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122192):map__122192);
var env = map__122192__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122192__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122192__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
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
com.wsscode.pathom.core.map_reader_STAR_ = (function com$wsscode$pathom$core$map_reader_STAR_(p__122196){
var map__122197 = p__122196;
var map__122197__$1 = (((((!((map__122197 == null))))?(((((map__122197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122197):map__122197);
var map_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122197__$1,new cljs.core.Keyword("com.wsscode.pathom.core","map-key-transform","com.wsscode.pathom.core/map-key-transform",-238565800));
var map_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122197__$1,new cljs.core.Keyword("com.wsscode.pathom.core","map-value-transform","com.wsscode.pathom.core/map-value-transform",1252006952));
return ((function (map__122197,map__122197__$1,map_key_transform,map_value_transform){
return (function (p__122199){
var map__122200 = p__122199;
var map__122200__$1 = (((((!((map__122200 == null))))?(((((map__122200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122200):map__122200);
var env = map__122200__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122200__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122200__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122200__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
var key = (function (){var G__122202 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(map_key_transform)){
return (map_key_transform.cljs$core$IFn$_invoke$arity$1 ? map_key_transform.cljs$core$IFn$_invoke$arity$1(G__122202) : map_key_transform.call(null,G__122202));
} else {
return G__122202;
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
var G__122206 = v;
if(cljs.core.truth_(map_value_transform)){
var G__122207 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var G__122208 = G__122206;
return (map_value_transform.cljs$core$IFn$_invoke$arity$2 ? map_value_transform.cljs$core$IFn$_invoke$arity$2(G__122207,G__122208) : map_value_transform.call(null,G__122207,G__122208));
} else {
return G__122206;
}
}
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
;})(map__122197,map__122197__$1,map_key_transform,map_value_transform))
});
/**
 * Like map-reader*, but handles plain Javascript objects instead of Clojure maps.
 */
com.wsscode.pathom.core.js_obj_reader = (function com$wsscode$pathom$core$js_obj_reader(p__122210){
var map__122211 = p__122210;
var map__122211__$1 = (((((!((map__122211 == null))))?(((((map__122211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122211):map__122211);
var env = map__122211__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122211__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122211__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var js_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__122211__$1,new cljs.core.Keyword("com.wsscode.pathom.core","js-key-transform","com.wsscode.pathom.core/js-key-transform",-1588372758),cljs.core.name);
var js_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__122211__$1,new cljs.core.Keyword("com.wsscode.pathom.core","js-value-transform","com.wsscode.pathom.core/js-value-transform",1418749137),((function (map__122211,map__122211__$1,env,query,ast,js_key_transform){
return (function (_,v){
return v;
});})(map__122211,map__122211__$1,env,query,ast,js_key_transform))
);
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122211__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
var js_key = (function (){var G__122216 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
return (js_key_transform.cljs$core$IFn$_invoke$arity$1 ? js_key_transform.cljs$core$IFn$_invoke$arity$1(G__122216) : js_key_transform.call(null,G__122216));
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
var G__122218 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var G__122219 = v;
return (js_value_transform.cljs$core$IFn$_invoke$arity$2 ? js_value_transform.cljs$core$IFn$_invoke$arity$2(G__122218,G__122219) : js_value_transform.call(null,G__122218,G__122219));
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
var map__122228 = (function (){var G__122229 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"tx","tx",466630418),tx], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__122229) : f.call(null,G__122229));
})();
var map__122228__$1 = (((((!((map__122228 == null))))?(((((map__122228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122228):map__122228);
var env__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122228__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var tx__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122228__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
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
var res__44802__auto__ = (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,tx) : parser.call(null,env,tx));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44802__auto__)){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,res__44802__auto__){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,res__44802__auto__){
return (function (state_122248){
var state_val_122249 = (state_122248[(1)]);
if((state_val_122249 === (1))){
var state_122248__$1 = state_122248;
var statearr_122254_123368 = state_122248__$1;
(statearr_122254_123368[(2)] = null);

(statearr_122254_123368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122249 === (2))){
var inst_122246 = (state_122248[(2)]);
var state_122248__$1 = state_122248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_122248__$1,inst_122246);
} else {
if((state_val_122249 === (3))){
var inst_122235 = (state_122248[(2)]);
var state_122248__$1 = state_122248;
var statearr_122257_123370 = state_122248__$1;
(statearr_122257_123370[(2)] = inst_122235);


cljs.core.async.impl.ioc_helpers.process_exception(state_122248__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122249 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_122248,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_122248__$1 = state_122248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_122248__$1,(5),res__44802__auto__);
} else {
if((state_val_122249 === (5))){
var inst_122242 = (state_122248[(2)]);
var inst_122243 = com.wsscode.common.async_cljs.throw_err(inst_122242);
var inst_122244 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_122243) : f.call(null,inst_122243));
var state_122248__$1 = state_122248;
var statearr_122259_123373 = state_122248__$1;
(statearr_122259_123373[(2)] = inst_122244);


cljs.core.async.impl.ioc_helpers.process_exception(state_122248__$1);

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
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38930__auto____0 = (function (){
var statearr_122261 = [null,null,null,null,null,null,null];
(statearr_122261[(0)] = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38930__auto__);

(statearr_122261[(1)] = (1));

return statearr_122261;
});
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38930__auto____1 = (function (state_122248){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_122248);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e122262){if((e122262 instanceof Object)){
var ex__38933__auto__ = e122262;
var statearr_122263_123375 = state_122248;
(statearr_122263_123375[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_122248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e122262;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__123380 = state_122248;
state_122248 = G__123380;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38930__auto__ = function(state_122248){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38930__auto____1.call(this,state_122248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38930__auto____0;
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38930__auto____1;
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,res__44802__auto__))
})();
var state__39005__auto__ = (function (){var statearr_122265 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_122265[(6)] = c__39003__auto__);

return statearr_122265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,res__44802__auto__))
);

return c__39003__auto__;
} else {
var res = res__44802__auto__;
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
var G__122267 = msg;
if(cljs.core.truth_(data)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__122267)," - ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))].join('');
} else {
return G__122267;
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
com.wsscode.pathom.core.process_error = (function com$wsscode$pathom$core$process_error(p__122268,e){
var map__122269 = p__122268;
var map__122269__$1 = (((((!((map__122269 == null))))?(((((map__122269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122269):map__122269);
var env = map__122269__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122269__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return com.wsscode.pathom.core.error_str(e);
}
});
com.wsscode.pathom.core.add_error = (function com$wsscode$pathom$core$add_error(p__122273,e){
var map__122275 = p__122273;
var map__122275__$1 = (((((!((map__122275 == null))))?(((((map__122275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122275):map__122275);
var env = map__122275__$1;
var errors_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122275__$1,new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122275__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
if(cljs.core.truth_(errors_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(errors_STAR_,cljs.core.assoc,path,com.wsscode.pathom.core.process_error(env,e));
} else {
}

return new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882);
});
com.wsscode.pathom.core.wrap_handle_exception = (function com$wsscode$pathom$core$wrap_handle_exception(reader){
return (function com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal(p__122277){
var map__122278 = p__122277;
var map__122278__$1 = (((((!((map__122278 == null))))?(((((map__122278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122278):map__122278);
var env = map__122278__$1;
var fail_fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122278__$1,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465));
if(cljs.core.truth_(fail_fast_QMARK_)){
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
} else {
try{var x = (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
if(com.wsscode.common.async_cljs.chan_QMARK_(x)){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,x,map__122278,map__122278__$1,env,fail_fast_QMARK_){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,x,map__122278,map__122278__$1,env,fail_fast_QMARK_){
return (function (state_122296){
var state_val_122297 = (state_122296[(1)]);
if((state_val_122297 === (1))){
var state_122296__$1 = state_122296;
var statearr_122298_123398 = state_122296__$1;
(statearr_122298_123398[(2)] = null);

(statearr_122298_123398[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122297 === (2))){
var inst_122294 = (state_122296[(2)]);
var state_122296__$1 = state_122296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_122296__$1,inst_122294);
} else {
if((state_val_122297 === (3))){
var inst_122284 = (state_122296[(2)]);
var inst_122285 = com.wsscode.pathom.core.add_error(env,inst_122284);
var state_122296__$1 = state_122296;
var statearr_122301_123402 = state_122296__$1;
(statearr_122301_123402[(2)] = inst_122285);


cljs.core.async.impl.ioc_helpers.process_exception(state_122296__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122297 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_122296,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_122296__$1 = state_122296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_122296__$1,(5),x);
} else {
if((state_val_122297 === (5))){
var inst_122291 = (state_122296[(2)]);
var inst_122292 = com.wsscode.common.async_cljs.throw_err(inst_122291);
var state_122296__$1 = state_122296;
var statearr_122304_123405 = state_122296__$1;
(statearr_122304_123405[(2)] = inst_122292);


cljs.core.async.impl.ioc_helpers.process_exception(state_122296__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39003__auto__,x,map__122278,map__122278__$1,env,fail_fast_QMARK_))
;
return ((function (switch__38929__auto__,c__39003__auto__,x,map__122278,map__122278__$1,env,fail_fast_QMARK_){
return (function() {
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38930__auto____0 = (function (){
var statearr_122308 = [null,null,null,null,null,null,null];
(statearr_122308[(0)] = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38930__auto__);

(statearr_122308[(1)] = (1));

return statearr_122308;
});
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38930__auto____1 = (function (state_122296){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_122296);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e122310){if((e122310 instanceof Object)){
var ex__38933__auto__ = e122310;
var statearr_122312_123406 = state_122296;
(statearr_122312_123406[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_122296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e122310;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__123407 = state_122296;
state_122296 = G__123407;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38930__auto__ = function(state_122296){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38930__auto____1.call(this,state_122296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38930__auto____0;
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38930__auto____1;
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,x,map__122278,map__122278__$1,env,fail_fast_QMARK_))
})();
var state__39005__auto__ = (function (){var statearr_122313 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_122313[(6)] = c__39003__auto__);

return statearr_122313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,x,map__122278,map__122278__$1,env,fail_fast_QMARK_))
);

return c__39003__auto__;
} else {
return x;
}
}catch (e122282){var e = e122282;
return com.wsscode.pathom.core.add_error(env,e);
}}
});
});
com.wsscode.pathom.core.wrap_mutate_handle_exception = (function com$wsscode$pathom$core$wrap_mutate_handle_exception(mutate){
return (function com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal(p__122315,k,p){
var map__122317 = p__122315;
var map__122317__$1 = (((((!((map__122317 == null))))?(((((map__122317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122317):map__122317);
var env = map__122317__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122317__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
var fail_fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122317__$1,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465));
if(cljs.core.truth_(fail_fast_QMARK_)){
return (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,p) : mutate.call(null,env,k,p));
} else {
try{return com.wsscode.pathom.core.update_action((mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,p) : mutate.call(null,env,k,p)),((function (map__122317,map__122317__$1,env,process_error,fail_fast_QMARK_){
return (function (action){
return ((function (map__122317,map__122317__$1,env,process_error,fail_fast_QMARK_){
return (function (){
try{var res = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
if(com.wsscode.common.async_cljs.chan_QMARK_(res)){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,res,map__122317,map__122317__$1,env,process_error,fail_fast_QMARK_){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,res,map__122317,map__122317__$1,env,process_error,fail_fast_QMARK_){
return (function (state_122348){
var state_val_122349 = (state_122348[(1)]);
if((state_val_122349 === (1))){
var state_122348__$1 = state_122348;
var statearr_122352_123408 = state_122348__$1;
(statearr_122352_123408[(2)] = null);

(statearr_122352_123408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122349 === (2))){
var inst_122345 = (state_122348[(2)]);
var state_122348__$1 = state_122348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_122348__$1,inst_122345);
} else {
if((state_val_122349 === (3))){
var inst_122327 = (state_122348[(2)]);
var state_122348__$1 = (function (){var statearr_122354 = state_122348;
(statearr_122354[(7)] = inst_122327);

return statearr_122354;
})();
if(cljs.core.truth_(process_error)){
var statearr_122355_123409 = state_122348__$1;
(statearr_122355_123409[(1)] = (4));

} else {
var statearr_122356_123410 = state_122348__$1;
(statearr_122356_123410[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122349 === (4))){
var inst_122327 = (state_122348[(7)]);
var inst_122329 = (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,inst_122327) : process_error.call(null,env,inst_122327));
var state_122348__$1 = state_122348;
var statearr_122359_123411 = state_122348__$1;
(statearr_122359_123411[(2)] = inst_122329);

(statearr_122359_123411[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122349 === (5))){
var inst_122327 = (state_122348[(7)]);
var inst_122331 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_122332 = com.wsscode.pathom.core.error_str(inst_122327);
var inst_122333 = [inst_122332];
var inst_122334 = cljs.core.PersistentHashMap.fromArrays(inst_122331,inst_122333);
var state_122348__$1 = state_122348;
var statearr_122361_123412 = state_122348__$1;
(statearr_122361_123412[(2)] = inst_122334);

(statearr_122361_123412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122349 === (6))){
var inst_122336 = (state_122348[(2)]);
var state_122348__$1 = state_122348;
var statearr_122365_123413 = state_122348__$1;
(statearr_122365_123413[(2)] = inst_122336);


cljs.core.async.impl.ioc_helpers.process_exception(state_122348__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122349 === (7))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_122348,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_122348__$1 = state_122348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_122348__$1,(8),res);
} else {
if((state_val_122349 === (8))){
var inst_122342 = (state_122348[(2)]);
var inst_122343 = com.wsscode.common.async_cljs.throw_err(inst_122342);
var state_122348__$1 = state_122348;
var statearr_122366_123414 = state_122348__$1;
(statearr_122366_123414[(2)] = inst_122343);


cljs.core.async.impl.ioc_helpers.process_exception(state_122348__$1);

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
});})(c__39003__auto__,res,map__122317,map__122317__$1,env,process_error,fail_fast_QMARK_))
;
return ((function (switch__38929__auto__,c__39003__auto__,res,map__122317,map__122317__$1,env,process_error,fail_fast_QMARK_){
return (function() {
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38930__auto____0 = (function (){
var statearr_122369 = [null,null,null,null,null,null,null,null];
(statearr_122369[(0)] = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38930__auto__);

(statearr_122369[(1)] = (1));

return statearr_122369;
});
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38930__auto____1 = (function (state_122348){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_122348);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e122372){if((e122372 instanceof Object)){
var ex__38933__auto__ = e122372;
var statearr_122374_123420 = state_122348;
(statearr_122374_123420[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_122348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e122372;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__123422 = state_122348;
state_122348 = G__123422;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38930__auto__ = function(state_122348){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38930__auto____1.call(this,state_122348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38930__auto____0;
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38930__auto____1;
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,res,map__122317,map__122317__$1,env,process_error,fail_fast_QMARK_))
})();
var state__39005__auto__ = (function (){var statearr_122376 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_122376[(6)] = c__39003__auto__);

return statearr_122376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,res,map__122317,map__122317__$1,env,process_error,fail_fast_QMARK_))
);

return c__39003__auto__;
} else {
return res;
}
}catch (e122324){var e = e122324;
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),com.wsscode.pathom.core.error_str(e)], null);
}
}});
;})(map__122317,map__122317__$1,env,process_error,fail_fast_QMARK_))
});})(map__122317,map__122317__$1,env,process_error,fail_fast_QMARK_))
);
}catch (e122321){var e = e122321;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (e,map__122317,map__122317__$1,env,process_error,fail_fast_QMARK_){
return (function (){
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),com.wsscode.pathom.core.error_str(e)], null);
}
});})(e,map__122317,map__122317__$1,env,process_error,fail_fast_QMARK_))
], null);
}}
});
});
com.wsscode.pathom.core.wrap_parser_exception = (function com$wsscode$pathom$core$wrap_parser_exception(parser){
return (function com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal(env,tx){
var errors = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var res__44802__auto__ = (function (){var G__122382 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276),errors);
var G__122383 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__122382,G__122383) : parser.call(null,G__122382,G__122383));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44802__auto__)){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,res__44802__auto__,errors){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,res__44802__auto__,errors){
return (function (state_122408){
var state_val_122409 = (state_122408[(1)]);
if((state_val_122409 === (1))){
var state_122408__$1 = state_122408;
var statearr_122412_123430 = state_122408__$1;
(statearr_122412_123430[(2)] = null);

(statearr_122412_123430[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122409 === (2))){
var inst_122406 = (state_122408[(2)]);
var state_122408__$1 = state_122408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_122408__$1,inst_122406);
} else {
if((state_val_122409 === (3))){
var inst_122386 = (state_122408[(2)]);
var state_122408__$1 = state_122408;
var statearr_122416_123431 = state_122408__$1;
(statearr_122416_123431[(2)] = inst_122386);


cljs.core.async.impl.ioc_helpers.process_exception(state_122408__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122409 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_122408,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_122408__$1 = state_122408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_122408__$1,(5),res__44802__auto__);
} else {
if((state_val_122409 === (5))){
var inst_122391 = (state_122408[(2)]);
var inst_122392 = com.wsscode.common.async_cljs.throw_err(inst_122391);
var inst_122396 = cljs.core.deref(errors);
var inst_122397 = cljs.core.seq(inst_122396);
var state_122408__$1 = (function (){var statearr_122419 = state_122408;
(statearr_122419[(7)] = inst_122392);

return statearr_122419;
})();
if(inst_122397){
var statearr_122421_123432 = state_122408__$1;
(statearr_122421_123432[(1)] = (6));

} else {
var statearr_122422_123433 = state_122408__$1;
(statearr_122422_123433[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122409 === (6))){
var inst_122392 = (state_122408[(7)]);
var inst_122400 = cljs.core.deref(errors);
var inst_122401 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_122392,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),inst_122400);
var state_122408__$1 = state_122408;
var statearr_122423_123439 = state_122408__$1;
(statearr_122423_123439[(2)] = inst_122401);

(statearr_122423_123439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122409 === (7))){
var inst_122392 = (state_122408[(7)]);
var state_122408__$1 = state_122408;
var statearr_122426_123440 = state_122408__$1;
(statearr_122426_123440[(2)] = inst_122392);

(statearr_122426_123440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122409 === (8))){
var inst_122404 = (state_122408[(2)]);
var state_122408__$1 = state_122408;
var statearr_122428_123441 = state_122408__$1;
(statearr_122428_123441[(2)] = inst_122404);


cljs.core.async.impl.ioc_helpers.process_exception(state_122408__$1);

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
});})(c__39003__auto__,res__44802__auto__,errors))
;
return ((function (switch__38929__auto__,c__39003__auto__,res__44802__auto__,errors){
return (function() {
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38930__auto____0 = (function (){
var statearr_122429 = [null,null,null,null,null,null,null,null];
(statearr_122429[(0)] = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38930__auto__);

(statearr_122429[(1)] = (1));

return statearr_122429;
});
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38930__auto____1 = (function (state_122408){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_122408);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e122430){if((e122430 instanceof Object)){
var ex__38933__auto__ = e122430;
var statearr_122432_123444 = state_122408;
(statearr_122432_123444[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_122408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e122430;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__123445 = state_122408;
state_122408 = G__123445;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38930__auto__ = function(state_122408){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38930__auto____1.call(this,state_122408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38930__auto____0;
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38930__auto____1;
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,res__44802__auto__,errors))
})();
var state__39005__auto__ = (function (){var statearr_122435 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_122435[(6)] = c__39003__auto__);

return statearr_122435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,res__44802__auto__,errors))
);

return c__39003__auto__;
} else {
var res = res__44802__auto__;
var G__122437 = res;
if(cljs.core.seq(cljs.core.deref(errors))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__122437,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),cljs.core.deref(errors));
} else {
return G__122437;
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
var G__123449 = cljs.core.butlast(path_SINGLEQUOTE_);
path_SINGLEQUOTE_ = G__123449;
continue;
}
}
break;
}
})());
});
com.wsscode.pathom.core.raise_errors = (function com$wsscode$pathom$core$raise_errors(data){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__122442){
var vec__122443 = p__122442;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122443,(0),null);
var err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122443,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__122446){
var vec__122447 = p__122446;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122447,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122447,(1),null);
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
var G__122456 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([extra_env,env], 0));
var G__122457 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__122456,G__122457) : parser.call(null,G__122456,G__122457));
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
var G__122458 = (extra_env_wrapper.cljs$core$IFn$_invoke$arity$1 ? extra_env_wrapper.cljs$core$IFn$_invoke$arity$1(env) : extra_env_wrapper.call(null,env));
var G__122459 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__122458,G__122459) : parser.call(null,G__122458,G__122459));
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
var vec__122463 = temp__5718__auto____$1;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122463,(0),null);
var hit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122463,(1),null);
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-hit","com.wsscode.pathom.core/cache-hit",1851998374),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

return com.wsscode.common.async_cljs.throw_err(hit);
} else {
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-miss","com.wsscode.pathom.core/cache-miss",1311426337),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

var res__44802__auto__ = (function (){try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}catch (e122467){var e = e122467;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,key,e);

throw e;
}})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44802__auto__)){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,res__44802__auto__,temp__5718__auto____$1,cache,temp__5718__auto__){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,res__44802__auto__,temp__5718__auto____$1,cache,temp__5718__auto__){
return (function (state_122481){
var state_val_122482 = (state_122481[(1)]);
if((state_val_122482 === (1))){
var state_122481__$1 = state_122481;
var statearr_122486_123464 = state_122481__$1;
(statearr_122486_123464[(2)] = null);

(statearr_122486_123464[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122482 === (2))){
var inst_122479 = (state_122481[(2)]);
var state_122481__$1 = state_122481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_122481__$1,inst_122479);
} else {
if((state_val_122482 === (3))){
var inst_122470 = (state_122481[(2)]);
var state_122481__$1 = state_122481;
var statearr_122489_123465 = state_122481__$1;
(statearr_122489_123465[(2)] = inst_122470);


cljs.core.async.impl.ioc_helpers.process_exception(state_122481__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122482 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_122481,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_122481__$1 = state_122481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_122481__$1,(5),res__44802__auto__);
} else {
if((state_val_122482 === (5))){
var inst_122475 = (state_122481[(2)]);
var inst_122476 = com.wsscode.common.async_cljs.throw_err(inst_122475);
var inst_122477 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,key,inst_122476);
var state_122481__$1 = (function (){var statearr_122491 = state_122481;
(statearr_122491[(7)] = inst_122477);

return statearr_122491;
})();
var statearr_122492_123468 = state_122481__$1;
(statearr_122492_123468[(2)] = inst_122476);


cljs.core.async.impl.ioc_helpers.process_exception(state_122481__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39003__auto__,res__44802__auto__,temp__5718__auto____$1,cache,temp__5718__auto__))
;
return ((function (switch__38929__auto__,c__39003__auto__,res__44802__auto__,temp__5718__auto____$1,cache,temp__5718__auto__){
return (function() {
var com$wsscode$pathom$core$cached_STAR__$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$core$cached_STAR__$_state_machine__38930__auto____0 = (function (){
var statearr_122494 = [null,null,null,null,null,null,null,null];
(statearr_122494[(0)] = com$wsscode$pathom$core$cached_STAR__$_state_machine__38930__auto__);

(statearr_122494[(1)] = (1));

return statearr_122494;
});
var com$wsscode$pathom$core$cached_STAR__$_state_machine__38930__auto____1 = (function (state_122481){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_122481);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e122495){if((e122495 instanceof Object)){
var ex__38933__auto__ = e122495;
var statearr_122496_123470 = state_122481;
(statearr_122496_123470[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_122481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e122495;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__123471 = state_122481;
state_122481 = G__123471;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_STAR__$_state_machine__38930__auto__ = function(state_122481){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_STAR__$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_STAR__$_state_machine__38930__auto____1.call(this,state_122481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_STAR__$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_STAR__$_state_machine__38930__auto____0;
com$wsscode$pathom$core$cached_STAR__$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_STAR__$_state_machine__38930__auto____1;
return com$wsscode$pathom$core$cached_STAR__$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,res__44802__auto__,temp__5718__auto____$1,cache,temp__5718__auto__))
})();
var state__39005__auto__ = (function (){var statearr_122497 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_122497[(6)] = c__39003__auto__);

return statearr_122497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,res__44802__auto__,temp__5718__auto____$1,cache,temp__5718__auto__))
);

return c__39003__auto__;
} else {
var hit = res__44802__auto__;
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

var ch__44822__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__39003__auto___123476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto___123476,ch__44822__auto__,cache,temp__5718__auto__){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto___123476,ch__44822__auto__,cache,temp__5718__auto__){
return (function (state_122517){
var state_val_122518 = (state_122517[(1)]);
if((state_val_122518 === (1))){
var state_122517__$1 = state_122517;
var statearr_122521_123477 = state_122517__$1;
(statearr_122521_123477[(2)] = null);

(statearr_122521_123477[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122518 === (2))){
var inst_122514 = (state_122517[(2)]);
var inst_122515 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__44822__auto__,inst_122514);
var state_122517__$1 = state_122517;
return cljs.core.async.impl.ioc_helpers.return_chan(state_122517__$1,inst_122515);
} else {
if((state_val_122518 === (3))){
var inst_122501 = (state_122517[(2)]);
var state_122517__$1 = state_122517;
var statearr_122525_123479 = state_122517__$1;
(statearr_122525_123479[(2)] = inst_122501);


cljs.core.async.impl.ioc_helpers.process_exception(state_122517__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122518 === (4))){
var inst_122505 = (state_122517[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_122517,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_122505__$1 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var inst_122506 = com.wsscode.common.async_cljs.chan_QMARK_(inst_122505__$1);
var state_122517__$1 = (function (){var statearr_122527 = state_122517;
(statearr_122527[(7)] = inst_122505__$1);

return statearr_122527;
})();
if(inst_122506){
var statearr_122528_123480 = state_122517__$1;
(statearr_122528_123480[(1)] = (5));

} else {
var statearr_122529_123481 = state_122517__$1;
(statearr_122529_123481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122518 === (5))){
var inst_122505 = (state_122517[(7)]);
var state_122517__$1 = state_122517;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_122517__$1,(8),inst_122505);
} else {
if((state_val_122518 === (6))){
var inst_122505 = (state_122517[(7)]);
var state_122517__$1 = state_122517;
var statearr_122532_123482 = state_122517__$1;
(statearr_122532_123482[(2)] = inst_122505);

(statearr_122532_123482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122518 === (7))){
var inst_122512 = (state_122517[(2)]);
var state_122517__$1 = state_122517;
var statearr_122534_123483 = state_122517__$1;
(statearr_122534_123483[(2)] = inst_122512);


cljs.core.async.impl.ioc_helpers.process_exception(state_122517__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122518 === (8))){
var inst_122509 = (state_122517[(2)]);
var state_122517__$1 = state_122517;
var statearr_122536_123484 = state_122517__$1;
(statearr_122536_123484[(2)] = inst_122509);

(statearr_122536_123484[(1)] = (7));


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
});})(c__39003__auto___123476,ch__44822__auto__,cache,temp__5718__auto__))
;
return ((function (switch__38929__auto__,c__39003__auto___123476,ch__44822__auto__,cache,temp__5718__auto__){
return (function() {
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38930__auto____0 = (function (){
var statearr_122538 = [null,null,null,null,null,null,null,null];
(statearr_122538[(0)] = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38930__auto__);

(statearr_122538[(1)] = (1));

return statearr_122538;
});
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38930__auto____1 = (function (state_122517){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_122517);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e122540){if((e122540 instanceof Object)){
var ex__38933__auto__ = e122540;
var statearr_122541_123491 = state_122517;
(statearr_122541_123491[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_122517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e122540;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__123492 = state_122517;
state_122517 = G__123492;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38930__auto__ = function(state_122517){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38930__auto____1.call(this,state_122517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38930__auto____0;
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38930__auto____1;
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto___123476,ch__44822__auto__,cache,temp__5718__auto__))
})();
var state__39005__auto__ = (function (){var statearr_122544 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_122544[(6)] = c__39003__auto___123476);

return statearr_122544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto___123476,ch__44822__auto__,cache,temp__5718__auto__))
);


return ch__44822__auto__;
}
});})(cache,temp__5718__auto__))
);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache),key);
} else {
var ch__44822__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__39003__auto___123494 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto___123494,ch__44822__auto__,temp__5718__auto__){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto___123494,ch__44822__auto__,temp__5718__auto__){
return (function (state_122563){
var state_val_122564 = (state_122563[(1)]);
if((state_val_122564 === (1))){
var state_122563__$1 = state_122563;
var statearr_122565_123495 = state_122563__$1;
(statearr_122565_123495[(2)] = null);

(statearr_122565_123495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122564 === (2))){
var inst_122560 = (state_122563[(2)]);
var inst_122561 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__44822__auto__,inst_122560);
var state_122563__$1 = state_122563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_122563__$1,inst_122561);
} else {
if((state_val_122564 === (3))){
var inst_122547 = (state_122563[(2)]);
var state_122563__$1 = state_122563;
var statearr_122568_123496 = state_122563__$1;
(statearr_122568_123496[(2)] = inst_122547);


cljs.core.async.impl.ioc_helpers.process_exception(state_122563__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122564 === (4))){
var inst_122551 = (state_122563[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_122563,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_122551__$1 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var inst_122552 = com.wsscode.common.async_cljs.chan_QMARK_(inst_122551__$1);
var state_122563__$1 = (function (){var statearr_122569 = state_122563;
(statearr_122569[(7)] = inst_122551__$1);

return statearr_122569;
})();
if(inst_122552){
var statearr_122570_123498 = state_122563__$1;
(statearr_122570_123498[(1)] = (5));

} else {
var statearr_122571_123500 = state_122563__$1;
(statearr_122571_123500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122564 === (5))){
var inst_122551 = (state_122563[(7)]);
var state_122563__$1 = state_122563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_122563__$1,(8),inst_122551);
} else {
if((state_val_122564 === (6))){
var inst_122551 = (state_122563[(7)]);
var state_122563__$1 = state_122563;
var statearr_122574_123502 = state_122563__$1;
(statearr_122574_123502[(2)] = inst_122551);

(statearr_122574_123502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122564 === (7))){
var inst_122558 = (state_122563[(2)]);
var state_122563__$1 = state_122563;
var statearr_122575_123503 = state_122563__$1;
(statearr_122575_123503[(2)] = inst_122558);


cljs.core.async.impl.ioc_helpers.process_exception(state_122563__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122564 === (8))){
var inst_122555 = (state_122563[(2)]);
var state_122563__$1 = state_122563;
var statearr_122577_123507 = state_122563__$1;
(statearr_122577_123507[(2)] = inst_122555);

(statearr_122577_123507[(1)] = (7));


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
});})(c__39003__auto___123494,ch__44822__auto__,temp__5718__auto__))
;
return ((function (switch__38929__auto__,c__39003__auto___123494,ch__44822__auto__,temp__5718__auto__){
return (function() {
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38930__auto____0 = (function (){
var statearr_122579 = [null,null,null,null,null,null,null,null];
(statearr_122579[(0)] = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38930__auto__);

(statearr_122579[(1)] = (1));

return statearr_122579;
});
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38930__auto____1 = (function (state_122563){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_122563);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e122581){if((e122581 instanceof Object)){
var ex__38933__auto__ = e122581;
var statearr_122583_123511 = state_122563;
(statearr_122583_123511[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_122563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e122581;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__123512 = state_122563;
state_122563 = G__123512;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38930__auto__ = function(state_122563){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38930__auto____1.call(this,state_122563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38930__auto____0;
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38930__auto____1;
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto___123494,ch__44822__auto__,temp__5718__auto__))
})();
var state__39005__auto__ = (function (){var statearr_122586 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_122586[(6)] = c__39003__auto___123494);

return statearr_122586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto___123494,ch__44822__auto__,temp__5718__auto__))
);


return ch__44822__auto__;
}
});
com.wsscode.pathom.core.cached_async = (function com$wsscode$pathom$core$cached_async(p__122590,key,f){
var map__122591 = p__122590;
var map__122591__$1 = (((((!((map__122591 == null))))?(((((map__122591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122591):map__122591);
var env = map__122591__$1;
var async_request_cache_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122591__$1,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch","com.wsscode.pathom.core/async-request-cache-ch",-1864666369));
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122591__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
if(cljs.core.truth_(async_request_cache_ch)){
if(cljs.core.contains_QMARK_(cljs.core.deref(request_cache),key)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(request_cache),key);
} else {
var out = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(async_request_cache_ch,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,key,f,out], null));

var ch__44822__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__39003__auto___123517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto___123517,ch__44822__auto__,out,map__122591,map__122591__$1,env,async_request_cache_ch,request_cache){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto___123517,ch__44822__auto__,out,map__122591,map__122591__$1,env,async_request_cache_ch,request_cache){
return (function (state_122606){
var state_val_122607 = (state_122606[(1)]);
if((state_val_122607 === (1))){
var state_122606__$1 = state_122606;
var statearr_122610_123518 = state_122606__$1;
(statearr_122610_123518[(2)] = null);

(statearr_122610_123518[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122607 === (2))){
var inst_122603 = (state_122606[(2)]);
var inst_122604 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__44822__auto__,inst_122603);
var state_122606__$1 = state_122606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_122606__$1,inst_122604);
} else {
if((state_val_122607 === (3))){
var inst_122594 = (state_122606[(2)]);
var state_122606__$1 = state_122606;
var statearr_122613_123519 = state_122606__$1;
(statearr_122613_123519[(2)] = inst_122594);


cljs.core.async.impl.ioc_helpers.process_exception(state_122606__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122607 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_122606,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_122606__$1 = state_122606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_122606__$1,(6),out);
} else {
if((state_val_122607 === (5))){
var inst_122601 = (state_122606[(2)]);
var state_122606__$1 = state_122606;
var statearr_122616_123520 = state_122606__$1;
(statearr_122616_123520[(2)] = inst_122601);


cljs.core.async.impl.ioc_helpers.process_exception(state_122606__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122607 === (6))){
var inst_122599 = (state_122606[(2)]);
var state_122606__$1 = state_122606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_122606__$1,(5),inst_122599);
} else {
return null;
}
}
}
}
}
}
});})(c__39003__auto___123517,ch__44822__auto__,out,map__122591,map__122591__$1,env,async_request_cache_ch,request_cache))
;
return ((function (switch__38929__auto__,c__39003__auto___123517,ch__44822__auto__,out,map__122591,map__122591__$1,env,async_request_cache_ch,request_cache){
return (function() {
var com$wsscode$pathom$core$cached_async_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$core$cached_async_$_state_machine__38930__auto____0 = (function (){
var statearr_122620 = [null,null,null,null,null,null,null];
(statearr_122620[(0)] = com$wsscode$pathom$core$cached_async_$_state_machine__38930__auto__);

(statearr_122620[(1)] = (1));

return statearr_122620;
});
var com$wsscode$pathom$core$cached_async_$_state_machine__38930__auto____1 = (function (state_122606){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_122606);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e122622){if((e122622 instanceof Object)){
var ex__38933__auto__ = e122622;
var statearr_122624_123524 = state_122606;
(statearr_122624_123524[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_122606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e122622;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__123525 = state_122606;
state_122606 = G__123525;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_$_state_machine__38930__auto__ = function(state_122606){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_$_state_machine__38930__auto____1.call(this,state_122606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_$_state_machine__38930__auto____0;
com$wsscode$pathom$core$cached_async_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_$_state_machine__38930__auto____1;
return com$wsscode$pathom$core$cached_async_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto___123517,ch__44822__auto__,out,map__122591,map__122591__$1,env,async_request_cache_ch,request_cache))
})();
var state__39005__auto__ = (function (){var statearr_122626 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_122626[(6)] = c__39003__auto___123517);

return statearr_122626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto___123517,ch__44822__auto__,out,map__122591,map__122591__$1,env,async_request_cache_ch,request_cache))
);


return ch__44822__auto__;
}
} else {
return com.wsscode.pathom.core.cached_async_STAR_(env,key,f);
}
});
com.wsscode.pathom.core.request_cache_async_loop = (function com$wsscode$pathom$core$request_cache_async_loop(ch){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__){
return (function (state_122652){
var state_val_122653 = (state_122652[(1)]);
if((state_val_122653 === (1))){
var state_122652__$1 = state_122652;
var statearr_122657_123530 = state_122652__$1;
(statearr_122657_123530[(2)] = null);

(statearr_122657_123530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122653 === (2))){
var state_122652__$1 = state_122652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_122652__$1,(4),ch);
} else {
if((state_val_122653 === (3))){
var inst_122649 = (state_122652[(2)]);
var state_122652__$1 = state_122652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_122652__$1,inst_122649);
} else {
if((state_val_122653 === (4))){
var inst_122632 = (state_122652[(7)]);
var inst_122632__$1 = (state_122652[(2)]);
var state_122652__$1 = (function (){var statearr_122658 = state_122652;
(statearr_122658[(7)] = inst_122632__$1);

return statearr_122658;
})();
if(cljs.core.truth_(inst_122632__$1)){
var statearr_122659_123534 = state_122652__$1;
(statearr_122659_123534[(1)] = (5));

} else {
var statearr_122660_123535 = state_122652__$1;
(statearr_122660_123535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122653 === (5))){
var inst_122632 = (state_122652[(7)]);
var inst_122637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_122632,(0),null);
var inst_122638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_122632,(1),null);
var inst_122639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_122632,(2),null);
var inst_122640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_122632,(3),null);
var inst_122641 = com.wsscode.pathom.core.cached_async_STAR_(inst_122637,inst_122638,inst_122639);
var state_122652__$1 = state_122652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_122652__$1,(8),inst_122640,inst_122641);
} else {
if((state_val_122653 === (6))){
var state_122652__$1 = state_122652;
var statearr_122663_123536 = state_122652__$1;
(statearr_122663_123536[(2)] = null);

(statearr_122663_123536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122653 === (7))){
var inst_122647 = (state_122652[(2)]);
var state_122652__$1 = state_122652;
var statearr_122665_123544 = state_122652__$1;
(statearr_122665_123544[(2)] = inst_122647);

(statearr_122665_123544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122653 === (8))){
var inst_122643 = (state_122652[(2)]);
var state_122652__$1 = (function (){var statearr_122666 = state_122652;
(statearr_122666[(8)] = inst_122643);

return statearr_122666;
})();
var statearr_122667_123548 = state_122652__$1;
(statearr_122667_123548[(2)] = null);

(statearr_122667_123548[(1)] = (2));


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
});})(c__39003__auto__))
;
return ((function (switch__38929__auto__,c__39003__auto__){
return (function() {
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38930__auto____0 = (function (){
var statearr_122670 = [null,null,null,null,null,null,null,null,null];
(statearr_122670[(0)] = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38930__auto__);

(statearr_122670[(1)] = (1));

return statearr_122670;
});
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38930__auto____1 = (function (state_122652){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_122652);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e122671){if((e122671 instanceof Object)){
var ex__38933__auto__ = e122671;
var statearr_122673_123557 = state_122652;
(statearr_122673_123557[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_122652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e122671;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__123558 = state_122652;
state_122652 = G__123558;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38930__auto__ = function(state_122652){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38930__auto____1.call(this,state_122652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38930__auto____0;
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38930__auto____1;
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__))
})();
var state__39005__auto__ = (function (){var statearr_122676 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_122676[(6)] = c__39003__auto__);

return statearr_122676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__))
);

return c__39003__auto__;
});
com.wsscode.pathom.core.cache_hit = (function com$wsscode$pathom$core$cache_hit(p__122678,key,value){
var map__122679 = p__122678;
var map__122679__$1 = (((((!((map__122679 == null))))?(((((map__122679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122679):map__122679);
var env = map__122679__$1;
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122679__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-miss","com.wsscode.pathom.core/cache-miss",1311426337),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(request_cache,cljs.core.assoc,key,value);

return value;
});
com.wsscode.pathom.core.cache_contains_QMARK_ = (function com$wsscode$pathom$core$cache_contains_QMARK_(p__122684,key){
var map__122685 = p__122684;
var map__122685__$1 = (((((!((map__122685 == null))))?(((((map__122685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122685):map__122685);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122685__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.contains_QMARK_(cljs.core.deref(request_cache),key);
});
com.wsscode.pathom.core.cache_read = (function com$wsscode$pathom$core$cache_read(p__122690,key){
var map__122692 = p__122690;
var map__122692__$1 = (((((!((map__122692 == null))))?(((((map__122692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122692):map__122692);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122692__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(request_cache),key);
});
com.wsscode.pathom.core.wrap_add_path = (function com$wsscode$pathom$core$wrap_add_path(reader){
return (function (p__122695){
var map__122697 = p__122695;
var map__122697__$1 = (((((!((map__122697 == null))))?(((((map__122697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122697):map__122697);
var env = map__122697__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122697__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var G__122701 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(G__122701) : reader.call(null,G__122701));
});
});
com.wsscode.pathom.core.group_plugins_by_action = (function com$wsscode$pathom$core$group_plugins_by_action(plugins){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g,p){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$1,p__122705){
var vec__122706 = p__122705;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122706,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__122706,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(g__$1,k,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
}),g,p);
}),cljs.core.PersistentArrayMap.EMPTY,plugins);
});
com.wsscode.pathom.core.wrap_normalize_env = (function com$wsscode$pathom$core$wrap_normalize_env(var_args){
var G__122713 = arguments.length;
switch (G__122713) {
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
var G__122715 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),tx], null),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","plugin-actions","com.wsscode.pathom.core/plugin-actions",-876552970),com.wsscode.pathom.core.group_plugins_by_action(plugins),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),plugins,new cljs.core.Keyword(null,"target","target",253001721),target], null)], 0));
var G__122716 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__122715,G__122716) : parser.call(null,G__122715,G__122716));
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
var res__44802__auto__ = (function (){var G__122718 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.parser","done-signal*","com.wsscode.pathom.parser/done-signal*",2069309538),signal,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","active-paths","com.wsscode.pathom.parser/active-paths",457466204),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.PersistentVector.EMPTY], 0));
var G__122719 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__122718,G__122719) : parser.call(null,G__122718,G__122719));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44802__auto__)){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,res__44802__auto__,signal){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,res__44802__auto__,signal){
return (function (state_122731){
var state_val_122732 = (state_122731[(1)]);
if((state_val_122732 === (1))){
var state_122731__$1 = state_122731;
var statearr_122734_123568 = state_122731__$1;
(statearr_122734_123568[(2)] = null);

(statearr_122734_123568[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122732 === (2))){
var inst_122729 = (state_122731[(2)]);
var state_122731__$1 = state_122731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_122731__$1,inst_122729);
} else {
if((state_val_122732 === (3))){
var inst_122720 = (state_122731[(2)]);
var state_122731__$1 = state_122731;
var statearr_122737_123572 = state_122731__$1;
(statearr_122737_123572[(2)] = inst_122720);


cljs.core.async.impl.ioc_helpers.process_exception(state_122731__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122732 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_122731,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_122731__$1 = state_122731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_122731__$1,(5),res__44802__auto__);
} else {
if((state_val_122732 === (5))){
var inst_122725 = (state_122731[(2)]);
var inst_122726 = com.wsscode.common.async_cljs.throw_err(inst_122725);
var inst_122727 = cljs.core.reset_BANG_(signal,true);
var state_122731__$1 = (function (){var statearr_122740 = state_122731;
(statearr_122740[(7)] = inst_122727);

return statearr_122740;
})();
var statearr_122741_123576 = state_122731__$1;
(statearr_122741_123576[(2)] = inst_122726);


cljs.core.async.impl.ioc_helpers.process_exception(state_122731__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39003__auto__,res__44802__auto__,signal))
;
return ((function (switch__38929__auto__,c__39003__auto__,res__44802__auto__,signal){
return (function() {
var com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38930__auto____0 = (function (){
var statearr_122744 = [null,null,null,null,null,null,null,null];
(statearr_122744[(0)] = com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38930__auto__);

(statearr_122744[(1)] = (1));

return statearr_122744;
});
var com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38930__auto____1 = (function (state_122731){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_122731);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e122745){if((e122745 instanceof Object)){
var ex__38933__auto__ = e122745;
var statearr_122746_123582 = state_122731;
(statearr_122746_123582[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_122731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e122745;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__123583 = state_122731;
state_122731 = G__123583;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38930__auto__ = function(state_122731){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38930__auto____1.call(this,state_122731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38930__auto____0;
com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38930__auto____1;
return com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,res__44802__auto__,signal))
})();
var state__39005__auto__ = (function (){var statearr_122748 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_122748[(6)] = c__39003__auto__);

return statearr_122748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,res__44802__auto__,signal))
);

return c__39003__auto__;
} else {
var res = res__44802__auto__;
cljs.core.reset_BANG_(signal,true);

return res;
}
});
});
com.wsscode.pathom.core.wrap_setup_async_cache = (function com$wsscode$pathom$core$wrap_setup_async_cache(parser){
return (function com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal(env,tx){
var async_cache_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch-size","com.wsscode.pathom.core/async-request-cache-ch-size",-437531159),(1024)));
com.wsscode.pathom.core.request_cache_async_loop(async_cache_ch);

var res__44802__auto__ = (function (){var G__122750 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch","com.wsscode.pathom.core/async-request-cache-ch",-1864666369),async_cache_ch);
var G__122751 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__122750,G__122751) : parser.call(null,G__122750,G__122751));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44802__auto__)){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,res__44802__auto__,async_cache_ch){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,res__44802__auto__,async_cache_ch){
return (function (state_122765){
var state_val_122766 = (state_122765[(1)]);
if((state_val_122766 === (1))){
var state_122765__$1 = state_122765;
var statearr_122768_123584 = state_122765__$1;
(statearr_122768_123584[(2)] = null);

(statearr_122768_123584[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122766 === (2))){
var inst_122763 = (state_122765[(2)]);
var state_122765__$1 = state_122765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_122765__$1,inst_122763);
} else {
if((state_val_122766 === (3))){
var inst_122754 = (state_122765[(2)]);
var state_122765__$1 = state_122765;
var statearr_122770_123585 = state_122765__$1;
(statearr_122770_123585[(2)] = inst_122754);


cljs.core.async.impl.ioc_helpers.process_exception(state_122765__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_122766 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_122765,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_122765__$1 = state_122765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_122765__$1,(5),res__44802__auto__);
} else {
if((state_val_122766 === (5))){
var inst_122759 = (state_122765[(2)]);
var inst_122760 = com.wsscode.common.async_cljs.throw_err(inst_122759);
var inst_122761 = cljs.core.async.close_BANG_(async_cache_ch);
var state_122765__$1 = (function (){var statearr_122771 = state_122765;
(statearr_122771[(7)] = inst_122761);

return statearr_122771;
})();
var statearr_122772_123586 = state_122765__$1;
(statearr_122772_123586[(2)] = inst_122760);


cljs.core.async.impl.ioc_helpers.process_exception(state_122765__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39003__auto__,res__44802__auto__,async_cache_ch))
;
return ((function (switch__38929__auto__,c__39003__auto__,res__44802__auto__,async_cache_ch){
return (function() {
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38930__auto____0 = (function (){
var statearr_122773 = [null,null,null,null,null,null,null,null];
(statearr_122773[(0)] = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38930__auto__);

(statearr_122773[(1)] = (1));

return statearr_122773;
});
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38930__auto____1 = (function (state_122765){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_122765);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e122774){if((e122774 instanceof Object)){
var ex__38933__auto__ = e122774;
var statearr_122775_123590 = state_122765;
(statearr_122775_123590[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_122765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e122774;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__123593 = state_122765;
state_122765 = G__123593;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38930__auto__ = function(state_122765){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38930__auto____1.call(this,state_122765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38930__auto____0;
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38930__auto____1;
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,res__44802__auto__,async_cache_ch))
})();
var state__39005__auto__ = (function (){var statearr_122776 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_122776[(6)] = c__39003__auto__);

return statearr_122776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,res__44802__auto__,async_cache_ch))
);

return c__39003__auto__;
} else {
var res = res__44802__auto__;
cljs.core.async.close_BANG_(async_cache_ch);

return res;
}
});
});
com.wsscode.pathom.core.wrap_reduce_params = (function com$wsscode$pathom$core$wrap_reduce_params(reader){
return (function() {
var G__123597 = null;
var G__123597__1 = (function (env){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env))], null);
});
var G__123597__3 = (function (env,_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env))], null);
});
G__123597 = function(env,_,___$1){
switch(arguments.length){
case 1:
return G__123597__1.call(this,env);
case 3:
return G__123597__3.call(this,env,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__123597.cljs$core$IFn$_invoke$arity$1 = G__123597__1;
G__123597.cljs$core$IFn$_invoke$arity$3 = G__123597__3;
return G__123597;
})()
});
com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_ = (function com$wsscode$pathom$core$pathom_read_SINGLEQUOTE_(p__122777){
var map__122778 = p__122777;
var map__122778__$1 = (((((!((map__122778 == null))))?(((((map__122778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122778):map__122778);
var env = map__122778__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122778__$1,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410));
return com.wsscode.pathom.core.read_from(env,reader);
});
com.wsscode.pathom.core.apply_plugins = (function com$wsscode$pathom$core$apply_plugins(var_args){
var args__4736__auto__ = [];
var len__4730__auto___123601 = arguments.length;
var i__4731__auto___123602 = (0);
while(true){
if((i__4731__auto___123602 < len__4730__auto___123601)){
args__4736__auto__.push((arguments[i__4731__auto___123602]));

var G__123603 = (i__4731__auto___123602 + (1));
i__4731__auto___123602 = G__123603;
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
com.wsscode.pathom.core.apply_plugins.cljs$lang$applyTo = (function (seq122780){
var G__122781 = cljs.core.first(seq122780);
var seq122780__$1 = cljs.core.next(seq122780);
var G__122782 = cljs.core.first(seq122780__$1);
var seq122780__$2 = cljs.core.next(seq122780__$1);
var G__122783 = cljs.core.first(seq122780__$2);
var seq122780__$3 = cljs.core.next(seq122780__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__122781,G__122782,G__122783,seq122780__$3);
});

com.wsscode.pathom.core.exec_plugin_actions = (function com$wsscode$pathom$core$exec_plugin_actions(var_args){
var args__4736__auto__ = [];
var len__4730__auto___123636 = arguments.length;
var i__4731__auto___123637 = (0);
while(true){
if((i__4731__auto___123637 < len__4730__auto___123636)){
args__4736__auto__.push((arguments[i__4731__auto___123637]));

var G__123638 = (i__4731__auto___123637 + (1));
i__4731__auto___123637 = G__123638;
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
com.wsscode.pathom.core.exec_plugin_actions.cljs$lang$applyTo = (function (seq122784){
var G__122785 = cljs.core.first(seq122784);
var seq122784__$1 = cljs.core.next(seq122784);
var G__122786 = cljs.core.first(seq122784__$1);
var seq122784__$2 = cljs.core.next(seq122784__$1);
var G__122787 = cljs.core.first(seq122784__$2);
var seq122784__$3 = cljs.core.next(seq122784__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__122785,G__122786,G__122787,seq122784__$3);
});

com.wsscode.pathom.core.easy_plugins = (function com$wsscode$pathom$core$easy_plugins(p__122788){
var map__122789 = p__122788;
var map__122789__$1 = (((((!((map__122789 == null))))?(((((map__122789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122789):map__122789);
var plugins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122789__$1,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122789__$1,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378));
var G__122791 = plugins;
var G__122791__$1 = ((cljs.core.fn_QMARK_(env))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_wrap_plugin(env)], null),G__122791):G__122791);
if(cljs.core.map_QMARK_(env)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_plugin(env)], null),G__122791__$1);
} else {
return G__122791__$1;
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
var G__122792 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),map], null);
var G__122793 = selection;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__122792,G__122793) : parser.call(null,G__122792,G__122793));
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
var G__122795 = arguments.length;
switch (G__122795) {
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
return (function (p__122796){
var map__122797 = p__122796;
var map__122797__$1 = (((((!((map__122797 == null))))?(((((map__122797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122797):map__122797);
var env = map__122797__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122797__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
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
com.wsscode.pathom.core.pathom_read = (function com$wsscode$pathom$core$pathom_read(p__122799,_,___$1){
var map__122800 = p__122799;
var map__122800__$1 = (((((!((map__122800 == null))))?(((((map__122800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__122800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__122800):map__122800);
var env = map__122800__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122800__$1,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410));
var process_reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__122800__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-reader","com.wsscode.pathom.core/process-reader",348867871));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var env__$1 = com.wsscode.pathom.core.normalize_env(env);
return com.wsscode.pathom.core.read_from(env__$1,(cljs.core.truth_(process_reader)?(process_reader.cljs$core$IFn$_invoke$arity$1 ? process_reader.cljs$core$IFn$_invoke$arity$1(reader) : process_reader.call(null,reader)):reader));
})()], null);
});
/**
 * DEPRECATED: use ident-value instead
 */
com.wsscode.pathom.core.ast_key_id = (function com$wsscode$pathom$core$ast_key_id(ast){
var key = (function (){var G__122802 = ast;
if((G__122802 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__122802);
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

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",-1769729738,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"attributes","attributes",-74013604)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122803){
return cljs.core.coll_QMARK_(G__122803);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846))], null),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)),cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","entity-attr","com.wsscode.pathom.core/entity-attr",116696515,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"default","default",-1987822328)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),cljs.spec.alpha.maybe_impl(cljs.core.any_QMARK_,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","entity!","com.wsscode.pathom.core/entity!",601467064,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"attributes","attributes",-74013604)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__122804){
return cljs.core.coll_QMARK_(G__122804);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846))], null),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)),cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","entity-attr!","com.wsscode.pathom.core/entity-attr!",2073654855,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"attribute","attribute",-2074029119)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","swap-entity!","com.wsscode.pathom.core/swap-entity!",819089173,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.core.fn_QMARK_,cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","collapse-error-path","com.wsscode.pathom.core/collapse-error-path",-1124133360,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.core.vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","raise-errors","com.wsscode.pathom.core/raise-errors",77570572,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__122805){
return cljs.core.map_QMARK_(G__122805);
})], null),(function (G__122805){
return cljs.core.map_QMARK_(G__122805);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null)]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,null,null));
} else {
}

//# sourceMappingURL=com.wsscode.pathom.core.js.map
