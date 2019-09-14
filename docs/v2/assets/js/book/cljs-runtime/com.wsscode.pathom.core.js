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

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__47085){
return cljs.core.map_QMARK_(G__47085);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__47086){
return cljs.core.vector_QMARK_(G__47086);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","optional?","com.wsscode.pathom.core/optional?",910087942),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"list","list",765357683)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","process-reader","com.wsscode.pathom.core/process-reader",348867871),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader","reader",169660853)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),null,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"gen","gen",142575302),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),"Generated sample error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some","some",-1951079573),"data"], null)),"null"], null), null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Generated sample error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some","some",-1951079573),"data"], null))]));
}),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__47087){
return cljs.core.map_QMARK_(G__47087);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("cljs.core","IAtom","cljs.core/IAtom",-1037999645,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__47084_SHARP_){
return (p1__47084_SHARP_ instanceof cljs.core.IAtom);
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

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","plugin","com.wsscode.pathom.core/plugin",-881556304),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__47089){
return cljs.core.map_QMARK_(G__47089);
})], null),(function (G__47089){
return cljs.core.map_QMARK_(G__47089);
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
com.wsscode.pathom.core.ast_properties = (function com$wsscode$pathom$core$ast_properties(p__47090){
var map__47091 = p__47090;
var map__47091__$1 = (((((!((map__47091 == null))))?(((((map__47091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47091):map__47091);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47091__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__47091,map__47091__$1,children){
return (function (attrs,p__47093){
var map__47094 = p__47093;
var map__47094__$1 = (((((!((map__47094 == null))))?(((((map__47094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47094):map__47094);
var node = map__47094__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47094__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47094__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__47096 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs,key);
if(cljs.core.truth_(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__47096,(com.wsscode.pathom.core.ast_properties.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.ast_properties.cljs$core$IFn$_invoke$arity$1(node) : com.wsscode.pathom.core.ast_properties.call(null,node)));
} else {
return G__47096;
}
});})(map__47091,map__47091__$1,children))
,cljs.core.PersistentHashSet.EMPTY,children);
});
com.wsscode.pathom.core.deep_merge = (function com$wsscode$pathom$core$deep_merge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48977 = arguments.length;
var i__4731__auto___48981 = (0);
while(true){
if((i__4731__auto___48981 < len__4730__auto___48977)){
args__4736__auto__.push((arguments[i__4731__auto___48981]));

var G__48989 = (i__4731__auto___48981 + (1));
i__4731__auto___48981 = G__48989;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.wsscode.pathom.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.wsscode.pathom.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (xs){

if(cljs.core.every_QMARK_((function (p1__47097_SHARP_){
return ((cljs.core.map_QMARK_(p1__47097_SHARP_)) || ((p1__47097_SHARP_ == null)));
}),xs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,com.wsscode.pathom.core.deep_merge,xs);
} else {
return cljs.core.last(xs);
}
});

com.wsscode.pathom.core.deep_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.wsscode.pathom.core.deep_merge.cljs$lang$applyTo = (function (seq47098){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47098));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__47099_SHARP_){
return cljs.core.filterv(f,p1__47099_SHARP_);
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
var len__4730__auto___49084 = arguments.length;
var i__4731__auto___49086 = (0);
while(true){
if((i__4731__auto___49086 < len__4730__auto___49084)){
args__4736__auto__.push((arguments[i__4731__auto___49086]));

var G__49088 = (i__4731__auto___49086 + (1));
i__4731__auto___49086 = G__49088;
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
var vec__47103 = x;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47103,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47103,(1),null);
return (new cljs.core.List(null,k,(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p,args),null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,x,(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.PersistentArrayMap.EMPTY,args),null,(1),null)),(2),null));
}
});

com.wsscode.pathom.core.update_attribute_param.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.core.update_attribute_param.cljs$lang$applyTo = (function (seq47100){
var G__47101 = cljs.core.first(seq47100);
var seq47100__$1 = cljs.core.next(seq47100);
var G__47102 = cljs.core.first(seq47100__$1);
var seq47100__$2 = cljs.core.next(seq47100__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47101,G__47102,seq47100__$2);
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
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),(function (){var G__47106 = ast;
var G__47106__$1 = (((G__47106 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__47106));
var G__47106__$2 = (((G__47106__$1 == null))?null:cljs.core.first(G__47106__$1));
if((G__47106__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__47106__$2);
}
})());
});
com.wsscode.pathom.core.read_from_STAR_ = (function com$wsscode$pathom$core$read_from_STAR_(p__47109,reader){
var map__47110 = p__47109;
var map__47110__$1 = (((((!((map__47110 == null))))?(((((map__47110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47110):map__47110);
var env = map__47110__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47110__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core.map_QMARK_(reader)){
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var temp__5718__auto__ = cljs.core.find(reader,k);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__47112 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47112,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47112,(1),null);
return (com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2(env,v) : com.wsscode.pathom.core.read_from_STAR_.call(null,env,v));
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
} else {
if(cljs.core.vector_QMARK_(reader)){
var res = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__47110,map__47110__$1,env,ast){
return (function (p1__47107_SHARP_){
return (com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2(env,p1__47107_SHARP_) : com.wsscode.pathom.core.read_from_STAR_.call(null,env,p1__47107_SHARP_));
});})(map__47110,map__47110__$1,env,ast))
),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$1(((function (map__47110,map__47110__$1,env,ast){
return (function (p1__47108_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__47108_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));
});})(map__47110,map__47110__$1,env,ast))
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
var res__44797__auto__ = com.wsscode.pathom.core.read_from_STAR_(env,reader);
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44797__auto__)){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,res__44797__auto__){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,res__44797__auto__){
return (function (state_47130){
var state_val_47131 = (state_47130[(1)]);
if((state_val_47131 === (1))){
var state_47130__$1 = state_47130;
var statearr_47132_49132 = state_47130__$1;
(statearr_47132_49132[(2)] = null);

(statearr_47132_49132[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47131 === (2))){
var inst_47128 = (state_47130[(2)]);
var state_47130__$1 = state_47130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47130__$1,inst_47128);
} else {
if((state_val_47131 === (3))){
var inst_47115 = (state_47130[(2)]);
var state_47130__$1 = state_47130;
var statearr_47133_49134 = state_47130__$1;
(statearr_47133_49134[(2)] = inst_47115);


cljs.core.async.impl.ioc_helpers.process_exception(state_47130__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47131 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47130,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_47130__$1 = state_47130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47130__$1,(5),res__44797__auto__);
} else {
if((state_val_47131 === (5))){
var inst_47121 = (state_47130[(7)]);
var inst_47120 = (state_47130[(2)]);
var inst_47121__$1 = com.wsscode.common.async_cljs.throw_err(inst_47120);
var inst_47122 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47121__$1,new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));
var state_47130__$1 = (function (){var statearr_47135 = state_47130;
(statearr_47135[(7)] = inst_47121__$1);

return statearr_47135;
})();
if(inst_47122){
var statearr_47136_49142 = state_47130__$1;
(statearr_47136_49142[(1)] = (6));

} else {
var statearr_47137_49143 = state_47130__$1;
(statearr_47137_49143[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47131 === (6))){
var state_47130__$1 = state_47130;
var statearr_47138_49144 = state_47130__$1;
(statearr_47138_49144[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));

(statearr_47138_49144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47131 === (7))){
var inst_47121 = (state_47130[(7)]);
var state_47130__$1 = state_47130;
var statearr_47139_49147 = state_47130__$1;
(statearr_47139_49147[(2)] = inst_47121);

(statearr_47139_49147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47131 === (8))){
var inst_47126 = (state_47130[(2)]);
var state_47130__$1 = state_47130;
var statearr_47140_49150 = state_47130__$1;
(statearr_47140_49150[(2)] = inst_47126);


cljs.core.async.impl.ioc_helpers.process_exception(state_47130__$1);

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
});})(c__38971__auto__,res__44797__auto__))
;
return ((function (switch__38924__auto__,c__38971__auto__,res__44797__auto__){
return (function() {
var com$wsscode$pathom$core$read_from_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$core$read_from_$_state_machine__38925__auto____0 = (function (){
var statearr_47141 = [null,null,null,null,null,null,null,null];
(statearr_47141[(0)] = com$wsscode$pathom$core$read_from_$_state_machine__38925__auto__);

(statearr_47141[(1)] = (1));

return statearr_47141;
});
var com$wsscode$pathom$core$read_from_$_state_machine__38925__auto____1 = (function (state_47130){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_47130);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e47144){if((e47144 instanceof Object)){
var ex__38928__auto__ = e47144;
var statearr_47145_49155 = state_47130;
(statearr_47145_49155[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47144;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49159 = state_47130;
state_47130 = G__49159;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$core$read_from_$_state_machine__38925__auto__ = function(state_47130){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$read_from_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$read_from_$_state_machine__38925__auto____1.call(this,state_47130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$read_from_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$read_from_$_state_machine__38925__auto____0;
com$wsscode$pathom$core$read_from_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$read_from_$_state_machine__38925__auto____1;
return com$wsscode$pathom$core$read_from_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,res__44797__auto__))
})();
var state__38973__auto__ = (function (){var statearr_47146 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_47146[(6)] = c__38971__auto__);

return statearr_47146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,res__44797__auto__))
);

return c__38971__auto__;
} else {
var res = res__44797__auto__;
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
com.wsscode.pathom.core.transduce_children = (function com$wsscode$pathom$core$transduce_children(xform,p__47148){
var map__47149 = p__47148;
var map__47149__$1 = (((((!((map__47149 == null))))?(((((map__47149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47149):map__47149);
var node = map__47149__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47149__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__47151 = node;
if(cljs.core.seq(children)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__47151,new cljs.core.Keyword(null,"children","children",-940561982),((function (G__47151,map__47149,map__47149__$1,node,children){
return (function (children__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__47151,map__47149,map__47149__$1,node,children){
return (function (p1__47147_SHARP_){
return (com.wsscode.pathom.core.transduce_children.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.transduce_children.cljs$core$IFn$_invoke$arity$2(xform,p1__47147_SHARP_) : com.wsscode.pathom.core.transduce_children.call(null,xform,p1__47147_SHARP_));
});})(G__47151,map__47149,map__47149__$1,node,children))
)),children__$1);
});})(G__47151,map__47149,map__47149__$1,node,children))
);
} else {
return G__47151;
}
});
/**
 * Removes any item on set item-set from the input
 */
com.wsscode.pathom.core.elide_items = (function com$wsscode$pathom$core$elide_items(item_set,input){
return cljs.core.with_meta(com.wsscode.pathom.core.transduce_maps(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__47152){
var vec__47153 = p__47152;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47153,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47153,(1),null);
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
com.wsscode.pathom.core.raw_entity = (function com$wsscode$pathom$core$raw_entity(p__47160){
var map__47161 = p__47160;
var map__47161__$1 = (((((!((map__47161 == null))))?(((((map__47161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47161):map__47161);
var env = map__47161__$1;
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47161__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
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
var G__47166 = arguments.length;
switch (G__47166) {
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

com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2 = (function (p__47169,attributes){
var map__47170 = p__47169;
var map__47170__$1 = (((((!((map__47170 == null))))?(((((map__47170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47170):map__47170);
var env = map__47170__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47170__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var res__44797__auto__ = (function (){var G__47174 = env;
var G__47175 = cljs.core.filterv(cljs.core.complement(cljs.core.set(cljs.core.keys(e))),attributes);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__47174,G__47175) : parser.call(null,G__47174,G__47175));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44797__auto__)){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,res__44797__auto__,e,map__47170,map__47170__$1,env,parser){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,res__44797__auto__,e,map__47170,map__47170__$1,env,parser){
return (function (state_47194){
var state_val_47195 = (state_47194[(1)]);
if((state_val_47195 === (1))){
var state_47194__$1 = state_47194;
var statearr_47198_49228 = state_47194__$1;
(statearr_47198_49228[(2)] = null);

(statearr_47198_49228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47195 === (2))){
var inst_47192 = (state_47194[(2)]);
var state_47194__$1 = state_47194;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47194__$1,inst_47192);
} else {
if((state_val_47195 === (3))){
var inst_47178 = (state_47194[(2)]);
var state_47194__$1 = state_47194;
var statearr_47200_49229 = state_47194__$1;
(statearr_47200_49229[(2)] = inst_47178);


cljs.core.async.impl.ioc_helpers.process_exception(state_47194__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47195 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47194,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_47194__$1 = state_47194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47194__$1,(5),res__44797__auto__);
} else {
if((state_val_47195 === (5))){
var inst_47184 = (state_47194[(7)]);
var inst_47183 = (state_47194[(2)]);
var inst_47184__$1 = com.wsscode.common.async_cljs.throw_err(inst_47183);
var inst_47185 = cljs.core.map_QMARK_(inst_47184__$1);
var state_47194__$1 = (function (){var statearr_47203 = state_47194;
(statearr_47203[(7)] = inst_47184__$1);

return statearr_47203;
})();
if(inst_47185){
var statearr_47205_49234 = state_47194__$1;
(statearr_47205_49234[(1)] = (6));

} else {
var statearr_47206_49236 = state_47194__$1;
(statearr_47206_49236[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47195 === (6))){
var inst_47184 = (state_47194[(7)]);
var inst_47187 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.entity_value_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,inst_47184], 0));
var state_47194__$1 = state_47194;
var statearr_47208_49238 = state_47194__$1;
(statearr_47208_49238[(2)] = inst_47187);

(statearr_47208_49238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47195 === (7))){
var state_47194__$1 = state_47194;
var statearr_47209_49239 = state_47194__$1;
(statearr_47209_49239[(2)] = e);

(statearr_47209_49239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47195 === (8))){
var inst_47190 = (state_47194[(2)]);
var state_47194__$1 = state_47194;
var statearr_47212_49241 = state_47194__$1;
(statearr_47212_49241[(2)] = inst_47190);


cljs.core.async.impl.ioc_helpers.process_exception(state_47194__$1);

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
});})(c__38971__auto__,res__44797__auto__,e,map__47170,map__47170__$1,env,parser))
;
return ((function (switch__38924__auto__,c__38971__auto__,res__44797__auto__,e,map__47170,map__47170__$1,env,parser){
return (function() {
var com$wsscode$pathom$core$state_machine__38925__auto__ = null;
var com$wsscode$pathom$core$state_machine__38925__auto____0 = (function (){
var statearr_47214 = [null,null,null,null,null,null,null,null];
(statearr_47214[(0)] = com$wsscode$pathom$core$state_machine__38925__auto__);

(statearr_47214[(1)] = (1));

return statearr_47214;
});
var com$wsscode$pathom$core$state_machine__38925__auto____1 = (function (state_47194){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_47194);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e47216){if((e47216 instanceof Object)){
var ex__38928__auto__ = e47216;
var statearr_47217_49243 = state_47194;
(statearr_47217_49243[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47216;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49244 = state_47194;
state_47194 = G__49244;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__38925__auto__ = function(state_47194){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__38925__auto____1.call(this,state_47194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__38925__auto____0;
com$wsscode$pathom$core$state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__38925__auto____1;
return com$wsscode$pathom$core$state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,res__44797__auto__,e,map__47170,map__47170__$1,env,parser))
})();
var state__38973__auto__ = (function (){var statearr_47219 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_47219[(6)] = c__38971__auto__);

return statearr_47219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,res__44797__auto__,e,map__47170,map__47170__$1,env,parser))
);

return c__38971__auto__;
} else {
var res = res__44797__auto__;
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
var G__47223 = arguments.length;
switch (G__47223) {
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
var res__44797__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44797__auto__)){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,res__44797__auto__){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,res__44797__auto__){
return (function (state_47238){
var state_val_47239 = (state_47238[(1)]);
if((state_val_47239 === (1))){
var state_47238__$1 = state_47238;
var statearr_47242_49253 = state_47238__$1;
(statearr_47242_49253[(2)] = null);

(statearr_47242_49253[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47239 === (2))){
var inst_47236 = (state_47238[(2)]);
var state_47238__$1 = state_47238;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47238__$1,inst_47236);
} else {
if((state_val_47239 === (3))){
var inst_47226 = (state_47238[(2)]);
var state_47238__$1 = state_47238;
var statearr_47244_49257 = state_47238__$1;
(statearr_47244_49257[(2)] = inst_47226);


cljs.core.async.impl.ioc_helpers.process_exception(state_47238__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47239 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47238,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_47238__$1 = state_47238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47238__$1,(5),res__44797__auto__);
} else {
if((state_val_47239 === (5))){
var inst_47232 = (state_47238[(2)]);
var inst_47233 = com.wsscode.common.async_cljs.throw_err(inst_47232);
var inst_47234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47233,attr);
var state_47238__$1 = state_47238;
var statearr_47247_49260 = state_47238__$1;
(statearr_47247_49260[(2)] = inst_47234);


cljs.core.async.impl.ioc_helpers.process_exception(state_47238__$1);

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
var com$wsscode$pathom$core$state_machine__38925__auto__ = null;
var com$wsscode$pathom$core$state_machine__38925__auto____0 = (function (){
var statearr_47248 = [null,null,null,null,null,null,null];
(statearr_47248[(0)] = com$wsscode$pathom$core$state_machine__38925__auto__);

(statearr_47248[(1)] = (1));

return statearr_47248;
});
var com$wsscode$pathom$core$state_machine__38925__auto____1 = (function (state_47238){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_47238);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e47250){if((e47250 instanceof Object)){
var ex__38928__auto__ = e47250;
var statearr_47251_49268 = state_47238;
(statearr_47251_49268[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47250;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49285 = state_47238;
state_47238 = G__49285;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__38925__auto__ = function(state_47238){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__38925__auto____1.call(this,state_47238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__38925__auto____0;
com$wsscode$pathom$core$state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__38925__auto____1;
return com$wsscode$pathom$core$state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,res__44797__auto__))
})();
var state__38973__auto__ = (function (){var statearr_47253 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_47253[(6)] = c__38971__auto__);

return statearr_47253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,res__44797__auto__))
);

return c__38971__auto__;
} else {
var e = res__44797__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
}
});

com.wsscode.pathom.core.entity_attr.cljs$core$IFn$_invoke$arity$3 = (function (env,attr,default$){
var res__44797__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44797__auto__)){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,res__44797__auto__){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,res__44797__auto__){
return (function (state_47277){
var state_val_47278 = (state_47277[(1)]);
if((state_val_47278 === (1))){
var state_47277__$1 = state_47277;
var statearr_47282_49292 = state_47277__$1;
(statearr_47282_49292[(2)] = null);

(statearr_47282_49292[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (2))){
var inst_47275 = (state_47277[(2)]);
var state_47277__$1 = state_47277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47277__$1,inst_47275);
} else {
if((state_val_47278 === (3))){
var inst_47258 = (state_47277[(2)]);
var state_47277__$1 = state_47277;
var statearr_47284_49295 = state_47277__$1;
(statearr_47284_49295[(2)] = inst_47258);


cljs.core.async.impl.ioc_helpers.process_exception(state_47277__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47277,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_47277__$1 = state_47277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47277__$1,(5),res__44797__auto__);
} else {
if((state_val_47278 === (5))){
var inst_47265 = (state_47277[(7)]);
var inst_47263 = (state_47277[(2)]);
var inst_47264 = com.wsscode.common.async_cljs.throw_err(inst_47263);
var inst_47265__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47264,attr);
var inst_47266 = [null,null,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null];
var inst_47267 = (new cljs.core.PersistentArrayMap(null,2,inst_47266,null));
var inst_47268 = (new cljs.core.PersistentHashSet(null,inst_47267,null));
var inst_47269 = (inst_47268.cljs$core$IFn$_invoke$arity$1 ? inst_47268.cljs$core$IFn$_invoke$arity$1(inst_47265__$1) : inst_47268.call(null,inst_47265__$1));
var state_47277__$1 = (function (){var statearr_47287 = state_47277;
(statearr_47287[(7)] = inst_47265__$1);

return statearr_47287;
})();
if(cljs.core.truth_(inst_47269)){
var statearr_47289_49300 = state_47277__$1;
(statearr_47289_49300[(1)] = (6));

} else {
var statearr_47290_49301 = state_47277__$1;
(statearr_47290_49301[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (6))){
var state_47277__$1 = state_47277;
var statearr_47291_49303 = state_47277__$1;
(statearr_47291_49303[(2)] = default$);

(statearr_47291_49303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (7))){
var inst_47265 = (state_47277[(7)]);
var state_47277__$1 = state_47277;
var statearr_47293_49305 = state_47277__$1;
(statearr_47293_49305[(2)] = inst_47265);

(statearr_47293_49305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47278 === (8))){
var inst_47273 = (state_47277[(2)]);
var state_47277__$1 = state_47277;
var statearr_47294_49309 = state_47277__$1;
(statearr_47294_49309[(2)] = inst_47273);


cljs.core.async.impl.ioc_helpers.process_exception(state_47277__$1);

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
});})(c__38971__auto__,res__44797__auto__))
;
return ((function (switch__38924__auto__,c__38971__auto__,res__44797__auto__){
return (function() {
var com$wsscode$pathom$core$state_machine__38925__auto__ = null;
var com$wsscode$pathom$core$state_machine__38925__auto____0 = (function (){
var statearr_47296 = [null,null,null,null,null,null,null,null];
(statearr_47296[(0)] = com$wsscode$pathom$core$state_machine__38925__auto__);

(statearr_47296[(1)] = (1));

return statearr_47296;
});
var com$wsscode$pathom$core$state_machine__38925__auto____1 = (function (state_47277){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_47277);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e47298){if((e47298 instanceof Object)){
var ex__38928__auto__ = e47298;
var statearr_47299_49314 = state_47277;
(statearr_47299_49314[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47298;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49317 = state_47277;
state_47277 = G__49317;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__38925__auto__ = function(state_47277){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__38925__auto____1.call(this,state_47277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__38925__auto____0;
com$wsscode$pathom$core$state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__38925__auto____1;
return com$wsscode$pathom$core$state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,res__44797__auto__))
})();
var state__38973__auto__ = (function (){var statearr_47300 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_47300[(6)] = c__38971__auto__);

return statearr_47300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,res__44797__auto__))
);

return c__38971__auto__;
} else {
var e = res__44797__auto__;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
if(cljs.core.truth_((function (){var fexpr__47304 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null], null), null);
return (fexpr__47304.cljs$core$IFn$_invoke$arity$1 ? fexpr__47304.cljs$core$IFn$_invoke$arity$1(x) : fexpr__47304.call(null,x));
})())){
return default$;
} else {
return x;
}
}
});

com.wsscode.pathom.core.entity_attr.cljs$lang$maxFixedArity = 3;

com.wsscode.pathom.core.entity_BANG_ = (function com$wsscode$pathom$core$entity_BANG_(p__47308,attributes){
var map__47309 = p__47308;
var map__47309__$1 = (((((!((map__47309 == null))))?(((((map__47309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47309):map__47309);
var env = map__47309__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47309__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var res__44797__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,attributes);
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44797__auto__)){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,res__44797__auto__,map__47309,map__47309__$1,env,path){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,res__44797__auto__,map__47309,map__47309__$1,env,path){
return (function (state_47343){
var state_val_47344 = (state_47343[(1)]);
if((state_val_47344 === (1))){
var state_47343__$1 = state_47343;
var statearr_47349_49329 = state_47343__$1;
(statearr_47349_49329[(2)] = null);

(statearr_47349_49329[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47344 === (2))){
var inst_47341 = (state_47343[(2)]);
var state_47343__$1 = state_47343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47343__$1,inst_47341);
} else {
if((state_val_47344 === (3))){
var inst_47314 = (state_47343[(2)]);
var state_47343__$1 = state_47343;
var statearr_47352_49331 = state_47343__$1;
(statearr_47352_49331[(2)] = inst_47314);


cljs.core.async.impl.ioc_helpers.process_exception(state_47343__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47344 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47343,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_47343__$1 = state_47343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47343__$1,(5),res__44797__auto__);
} else {
if((state_val_47344 === (5))){
var inst_47320 = (state_47343[(7)]);
var inst_47326 = (state_47343[(8)]);
var inst_47319 = (state_47343[(2)]);
var inst_47320__$1 = com.wsscode.common.async_cljs.throw_err(inst_47319);
var inst_47322 = cljs.core.set(attributes);
var inst_47323 = com.wsscode.pathom.core.elide_not_found(inst_47320__$1);
var inst_47324 = cljs.core.keys(inst_47323);
var inst_47325 = cljs.core.set(inst_47324);
var inst_47326__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_47322,inst_47325);
var inst_47327 = cljs.core.seq(inst_47326__$1);
var state_47343__$1 = (function (){var statearr_47355 = state_47343;
(statearr_47355[(7)] = inst_47320__$1);

(statearr_47355[(8)] = inst_47326__$1);

return statearr_47355;
})();
if(inst_47327){
var statearr_47356_49338 = state_47343__$1;
(statearr_47356_49338[(1)] = (6));

} else {
var statearr_47357_49340 = state_47343__$1;
(statearr_47357_49340[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47344 === (6))){
var inst_47320 = (state_47343[(7)]);
var inst_47326 = (state_47343[(8)]);
var inst_47329 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_47326], 0));
var inst_47330 = ["Entity attributes ",inst_47329," could not be realized"].join('');
var inst_47331 = [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword("com.wsscode.pathom.core","missing-attributes","com.wsscode.pathom.core/missing-attributes",1114260849)];
var inst_47333 = [inst_47320,path,inst_47326];
var inst_47334 = cljs.core.PersistentHashMap.fromArrays(inst_47331,inst_47333);
var inst_47335 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(inst_47330,inst_47334);
var inst_47336 = (function(){throw inst_47335})();
var state_47343__$1 = state_47343;
var statearr_47360_49343 = state_47343__$1;
(statearr_47360_49343[(2)] = inst_47336);

(statearr_47360_49343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47344 === (7))){
var state_47343__$1 = state_47343;
var statearr_47364_49344 = state_47343__$1;
(statearr_47364_49344[(2)] = null);

(statearr_47364_49344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47344 === (8))){
var inst_47320 = (state_47343[(7)]);
var inst_47339 = (state_47343[(2)]);
var state_47343__$1 = (function (){var statearr_47368 = state_47343;
(statearr_47368[(9)] = inst_47339);

return statearr_47368;
})();
var statearr_47369_49345 = state_47343__$1;
(statearr_47369_49345[(2)] = inst_47320);


cljs.core.async.impl.ioc_helpers.process_exception(state_47343__$1);

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
});})(c__38971__auto__,res__44797__auto__,map__47309,map__47309__$1,env,path))
;
return ((function (switch__38924__auto__,c__38971__auto__,res__44797__auto__,map__47309,map__47309__$1,env,path){
return (function() {
var com$wsscode$pathom$core$entity_BANG__$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$core$entity_BANG__$_state_machine__38925__auto____0 = (function (){
var statearr_47370 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47370[(0)] = com$wsscode$pathom$core$entity_BANG__$_state_machine__38925__auto__);

(statearr_47370[(1)] = (1));

return statearr_47370;
});
var com$wsscode$pathom$core$entity_BANG__$_state_machine__38925__auto____1 = (function (state_47343){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_47343);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e47373){if((e47373 instanceof Object)){
var ex__38928__auto__ = e47373;
var statearr_47375_49349 = state_47343;
(statearr_47375_49349[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47373;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49353 = state_47343;
state_47343 = G__49353;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$core$entity_BANG__$_state_machine__38925__auto__ = function(state_47343){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$entity_BANG__$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$entity_BANG__$_state_machine__38925__auto____1.call(this,state_47343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$entity_BANG__$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$entity_BANG__$_state_machine__38925__auto____0;
com$wsscode$pathom$core$entity_BANG__$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$entity_BANG__$_state_machine__38925__auto____1;
return com$wsscode$pathom$core$entity_BANG__$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,res__44797__auto__,map__47309,map__47309__$1,env,path))
})();
var state__38973__auto__ = (function (){var statearr_47377 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_47377[(6)] = c__38971__auto__);

return statearr_47377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,res__44797__auto__,map__47309,map__47309__$1,env,path))
);

return c__38971__auto__;
} else {
var e = res__44797__auto__;
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
var res__44797__auto__ = com.wsscode.pathom.core.entity_BANG_(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44797__auto__)){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,res__44797__auto__){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,res__44797__auto__){
return (function (state_47392){
var state_val_47393 = (state_47392[(1)]);
if((state_val_47393 === (1))){
var state_47392__$1 = state_47392;
var statearr_47396_49368 = state_47392__$1;
(statearr_47396_49368[(2)] = null);

(statearr_47396_49368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47393 === (2))){
var inst_47390 = (state_47392[(2)]);
var state_47392__$1 = state_47392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47392__$1,inst_47390);
} else {
if((state_val_47393 === (3))){
var inst_47379 = (state_47392[(2)]);
var state_47392__$1 = state_47392;
var statearr_47399_49369 = state_47392__$1;
(statearr_47399_49369[(2)] = inst_47379);


cljs.core.async.impl.ioc_helpers.process_exception(state_47392__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47393 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47392,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_47392__$1 = state_47392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47392__$1,(5),res__44797__auto__);
} else {
if((state_val_47393 === (5))){
var inst_47386 = (state_47392[(2)]);
var inst_47387 = com.wsscode.common.async_cljs.throw_err(inst_47386);
var inst_47388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47387,attr);
var state_47392__$1 = state_47392;
var statearr_47402_49372 = state_47392__$1;
(statearr_47402_49372[(2)] = inst_47388);


cljs.core.async.impl.ioc_helpers.process_exception(state_47392__$1);

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
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38925__auto____0 = (function (){
var statearr_47404 = [null,null,null,null,null,null,null];
(statearr_47404[(0)] = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38925__auto__);

(statearr_47404[(1)] = (1));

return statearr_47404;
});
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38925__auto____1 = (function (state_47392){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_47392);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e47406){if((e47406 instanceof Object)){
var ex__38928__auto__ = e47406;
var statearr_47408_49373 = state_47392;
(statearr_47408_49373[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47406;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49374 = state_47392;
state_47392 = G__49374;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38925__auto__ = function(state_47392){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38925__auto____1.call(this,state_47392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38925__auto____0;
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38925__auto____1;
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,res__44797__auto__))
})();
var state__38973__auto__ = (function (){var statearr_47411 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_47411[(6)] = c__38971__auto__);

return statearr_47411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,res__44797__auto__))
);

return c__38971__auto__;
} else {
var e = res__44797__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
}
});
/**
 * Helper to swap the current entity value.
 */
com.wsscode.pathom.core.swap_entity_BANG_ = (function com$wsscode$pathom$core$swap_entity_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49375 = arguments.length;
var i__4731__auto___49377 = (0);
while(true){
if((i__4731__auto___49377 < len__4730__auto___49375)){
args__4736__auto__.push((arguments[i__4731__auto___49377]));

var G__49378 = (i__4731__auto___49377 + (1));
i__4731__auto___49377 = G__49378;
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
com.wsscode.pathom.core.swap_entity_BANG_.cljs$lang$applyTo = (function (seq47414){
var G__47415 = cljs.core.first(seq47414);
var seq47414__$1 = cljs.core.next(seq47414);
var G__47416 = cljs.core.first(seq47414__$1);
var seq47414__$2 = cljs.core.next(seq47414__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47415,G__47416,seq47414__$2);
});

/**
 * Given an AST, find the child with a given key and run update against it.
 */
com.wsscode.pathom.core.update_child = (function com$wsscode$pathom$core$update_child(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49381 = arguments.length;
var i__4731__auto___49382 = (0);
while(true){
if((i__4731__auto___49382 < len__4730__auto___49381)){
args__4736__auto__.push((arguments[i__4731__auto___49382]));

var G__49383 = (i__4731__auto___49382 + (1));
i__4731__auto___49382 = G__49383;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.update_child.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.update_child.cljs$core$IFn$_invoke$arity$variadic = (function (ast,key,args){
var temp__5718__auto__ = (function (){var G__47430 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var G__47430__$1 = (((G__47430 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__47430));
var G__47430__$2 = (((G__47430__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([key]),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.second),G__47430__$1));
if((G__47430__$2 == null)){
return null;
} else {
return cljs.core.ffirst(G__47430__$2);
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
com.wsscode.pathom.core.update_child.cljs$lang$applyTo = (function (seq47423){
var G__47424 = cljs.core.first(seq47423);
var seq47423__$1 = cljs.core.next(seq47423);
var G__47425 = cljs.core.first(seq47423__$1);
var seq47423__$2 = cljs.core.next(seq47423__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47424,G__47425,seq47423__$2);
});

/**
 * Given an AST, find the child with a given key and run update against it.
 */
com.wsscode.pathom.core.update_recursive_depth = (function com$wsscode$pathom$core$update_recursive_depth(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49389 = arguments.length;
var i__4731__auto___49390 = (0);
while(true){
if((i__4731__auto___49390 < len__4730__auto___49389)){
args__4736__auto__.push((arguments[i__4731__auto___49390]));

var G__49391 = (i__4731__auto___49390 + (1));
i__4731__auto___49390 = G__49391;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.update_recursive_depth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.update_recursive_depth.cljs$core$IFn$_invoke$arity$variadic = (function (ast,key,args){
var temp__5718__auto__ = (function (){var G__47443 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var G__47443__$1 = (((G__47443 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__47443));
var G__47443__$2 = (((G__47443__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (G__47443,G__47443__$1){
return (function (p1__47434_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__47434_SHARP_))) && (cljs.core.pos_int_QMARK_(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__47434_SHARP_))));
});})(G__47443,G__47443__$1))
,cljs.core.second),G__47443__$1));
if((G__47443__$2 == null)){
return null;
} else {
return cljs.core.ffirst(G__47443__$2);
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
com.wsscode.pathom.core.update_recursive_depth.cljs$lang$applyTo = (function (seq47435){
var G__47436 = cljs.core.first(seq47435);
var seq47435__$1 = cljs.core.next(seq47435);
var G__47438 = cljs.core.first(seq47435__$1);
var seq47435__$2 = cljs.core.next(seq47435__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47436,G__47438,seq47435__$2);
});

com.wsscode.pathom.core.remove_query_wildcard = (function com$wsscode$pathom$core$remove_query_wildcard(query){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(query)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null)),query);
});
com.wsscode.pathom.core.default_union_path = (function com$wsscode$pathom$core$default_union_path(p__47453){
var map__47454 = p__47453;
var map__47454__$1 = (((((!((map__47454 == null))))?(((((map__47454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47454):map__47454);
var env = map__47454__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47454__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5718__auto__ = (function (){var G__47457 = cljs.core.keys(query);
var G__47457__$1 = (((G__47457 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__47457,e,map__47454,map__47454__$1,env,query){
return (function (p1__47452_SHARP_){
return cljs.core.contains_QMARK_(e,p1__47452_SHARP_);
});})(G__47457,e,map__47454,map__47454__$1,env,query))
,G__47457));
if((G__47457__$1 == null)){
return null;
} else {
return cljs.core.first(G__47457__$1);
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
var G__47463 = arguments.length;
switch (G__47463) {
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

com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2 = (function (entity,p__47468){
var map__47469 = p__47468;
var map__47469__$1 = (((((!((map__47469 == null))))?(((((map__47469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47469):map__47469);
var env = map__47469__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47469__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47469__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47469__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
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

com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1 = (function (p__47478){
var map__47479 = p__47478;
var map__47479__$1 = (((((!((map__47479 == null))))?(((((map__47479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47479):map__47479);
var env = map__47479__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47479__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47479__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47479__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var union_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47479__$1,new cljs.core.Keyword("com.wsscode.pathom.core","union-path","com.wsscode.pathom.core/union-path",-2083478095));
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47479__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47479__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47479__$1,new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var placeholder_QMARK_ = cljs.core.contains_QMARK_((function (){var or__4131__auto__ = placeholder_prefixes;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),(function (){var G__47484 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast);
if((G__47484 == null)){
return null;
} else {
return cljs.core.namespace(G__47484);
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
var env_SINGLEQUOTE_ = (function (){var G__47487 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),query__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-join-key","com.wsscode.pathom.core/parent-join-key",-289005491),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast)], 0));
if((!(placeholder_QMARK_))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47487,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404)], 0));
} else {
return G__47487;
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
var G__47490 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env_SINGLEQUOTE___$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),parent_query_SINGLEQUOTE_);
var G__47491 = com.wsscode.pathom.core.remove_query_wildcard(parent_query_SINGLEQUOTE_);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__47490,G__47491) : parser.call(null,G__47490,G__47491));
}
} else {
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null),query__$1))){
var res__44797__auto__ = (function (){var G__47492 = env_SINGLEQUOTE___$1;
var G__47493 = com.wsscode.pathom.core.remove_query_wildcard(query__$1);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__47492,G__47493) : parser.call(null,G__47492,G__47493));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44797__auto__)){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,res__44797__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__47479,map__47479__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,res__44797__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__47479,map__47479__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes){
return (function (state_47508){
var state_val_47509 = (state_47508[(1)]);
if((state_val_47509 === (1))){
var state_47508__$1 = state_47508;
var statearr_47512_49434 = state_47508__$1;
(statearr_47512_49434[(2)] = null);

(statearr_47512_49434[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47509 === (2))){
var inst_47506 = (state_47508[(2)]);
var state_47508__$1 = state_47508;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47508__$1,inst_47506);
} else {
if((state_val_47509 === (3))){
var inst_47495 = (state_47508[(2)]);
var state_47508__$1 = state_47508;
var statearr_47516_49439 = state_47508__$1;
(statearr_47516_49439[(2)] = inst_47495);


cljs.core.async.impl.ioc_helpers.process_exception(state_47508__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47509 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47508,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_47508__$1 = state_47508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47508__$1,(5),res__44797__auto__);
} else {
if((state_val_47509 === (5))){
var inst_47501 = (state_47508[(2)]);
var inst_47502 = com.wsscode.common.async_cljs.throw_err(inst_47501);
var inst_47503 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env_SINGLEQUOTE___$1);
var inst_47504 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_47503,inst_47502], 0));
var state_47508__$1 = state_47508;
var statearr_47519_49442 = state_47508__$1;
(statearr_47519_49442[(2)] = inst_47504);


cljs.core.async.impl.ioc_helpers.process_exception(state_47508__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__38971__auto__,res__44797__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__47479,map__47479__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes))
;
return ((function (switch__38924__auto__,c__38971__auto__,res__44797__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__47479,map__47479__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes){
return (function() {
var com$wsscode$pathom$core$state_machine__38925__auto__ = null;
var com$wsscode$pathom$core$state_machine__38925__auto____0 = (function (){
var statearr_47521 = [null,null,null,null,null,null,null];
(statearr_47521[(0)] = com$wsscode$pathom$core$state_machine__38925__auto__);

(statearr_47521[(1)] = (1));

return statearr_47521;
});
var com$wsscode$pathom$core$state_machine__38925__auto____1 = (function (state_47508){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_47508);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e47523){if((e47523 instanceof Object)){
var ex__38928__auto__ = e47523;
var statearr_47524_49448 = state_47508;
(statearr_47524_49448[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47523;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49449 = state_47508;
state_47508 = G__49449;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__38925__auto__ = function(state_47508){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__38925__auto____1.call(this,state_47508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__38925__auto____0;
com$wsscode$pathom$core$state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__38925__auto____1;
return com$wsscode$pathom$core$state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,res__44797__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__47479,map__47479__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes))
})();
var state__38973__auto__ = (function (){var statearr_47526 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_47526[(6)] = c__38971__auto__);

return statearr_47526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,res__44797__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__47479,map__47479__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes))
);

return c__38971__auto__;
} else {
var computed_e = res__44797__auto__;
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

com.wsscode.pathom.core.join_seq_parallel = (function com$wsscode$pathom$core$join_seq_parallel(p__47534,coll){
var map__47536 = p__47534;
var map__47536__$1 = (((((!((map__47536 == null))))?(((((map__47536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47536):map__47536);
var env = map__47536__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47536__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47536__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
if(cljs.core.seq(coll)){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache){
return (function (state_47642){
var state_val_47643 = (state_47642[(1)]);
if((state_val_47643 === (7))){
var inst_47638 = (state_47642[(2)]);
var state_47642__$1 = state_47642;
var statearr_47646_49481 = state_47642__$1;
(statearr_47646_49481[(2)] = inst_47638);


cljs.core.async.impl.ioc_helpers.process_exception(state_47642__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47643 === (1))){
var state_47642__$1 = state_47642;
var statearr_47647_49482 = state_47642__$1;
(statearr_47647_49482[(2)] = null);

(statearr_47647_49482[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47643 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47642,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_47544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_47642__$1 = state_47642;
if(cljs.core.truth_(inst_47544)){
var statearr_47648_49492 = state_47642__$1;
(statearr_47648_49492[(1)] = (5));

} else {
var statearr_47649_49493 = state_47642__$1;
(statearr_47649_49493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47643 === (15))){
var inst_47606 = (state_47642[(7)]);
var inst_47607 = (state_47642[(8)]);
var inst_47608 = (state_47642[(9)]);
var inst_47610 = (state_47642[(10)]);
var inst_47611 = (state_47642[(11)]);
var inst_47603 = (state_47642[(12)]);
var inst_47621 = (state_47642[(2)]);
var inst_47622 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_47623 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_47624 = cljs.core.range.cljs$core$IFn$_invoke$arity$0();
var inst_47625 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_47611,inst_47624);
var inst_47626 = cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(inst_47622,inst_47625);
var inst_47629 = (function (){var from_chan = inst_47622;
var join_item = inst_47607;
var first__47602 = inst_47610;
var first_res = inst_47621;
var check_ast_opt_QMARK_ = inst_47606;
var seq__47601 = inst_47611;
var out_chan = inst_47623;
var vec__47600 = coll;
var ast = inst_47603;
var env__$1 = inst_47608;
var head = inst_47610;
var tail = inst_47611;
return ((function (from_chan,join_item,first__47602,first_res,check_ast_opt_QMARK_,seq__47601,out_chan,vec__47600,ast,env__$1,head,tail,inst_47606,inst_47607,inst_47608,inst_47610,inst_47611,inst_47603,inst_47621,inst_47622,inst_47623,inst_47624,inst_47625,inst_47626,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline(p__47654,res_ch){
var vec__47657 = p__47654;
var ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47657,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47657,(1),null);
var c__38971__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto____$1,vec__47657,ent,i,from_chan,join_item,first__47602,first_res,check_ast_opt_QMARK_,seq__47601,out_chan,vec__47600,ast,env__$1,head,tail,inst_47606,inst_47607,inst_47608,inst_47610,inst_47611,inst_47603,inst_47621,inst_47622,inst_47623,inst_47624,inst_47625,inst_47626,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto____$1,vec__47657,ent,i,from_chan,join_item,first__47602,first_res,check_ast_opt_QMARK_,seq__47601,out_chan,vec__47600,ast,env__$1,head,tail,inst_47606,inst_47607,inst_47608,inst_47610,inst_47611,inst_47603,inst_47621,inst_47622,inst_47623,inst_47624,inst_47625,inst_47626,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache){
return (function (state_47705){
var state_val_47706 = (state_47705[(1)]);
if((state_val_47706 === (7))){
var inst_47677 = (state_47705[(2)]);
var state_47705__$1 = state_47705;
var statearr_47707_49509 = state_47705__$1;
(statearr_47707_49509[(2)] = inst_47677);

(statearr_47707_49509[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47706 === (1))){
var inst_47662 = (state_47705[(7)]);
var inst_47661 = (i + (1));
var inst_47662__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,inst_47661);
var inst_47665 = (inst_47662__$1 == null);
var inst_47666 = cljs.core.not(inst_47665);
var state_47705__$1 = (function (){var statearr_47708 = state_47705;
(statearr_47708[(7)] = inst_47662__$1);

return statearr_47708;
})();
if(inst_47666){
var statearr_47709_49512 = state_47705__$1;
(statearr_47709_49512[(1)] = (2));

} else {
var statearr_47710_49513 = state_47705__$1;
(statearr_47710_49513[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47706 === (4))){
var inst_47680 = (state_47705[(2)]);
var state_47705__$1 = state_47705;
if(cljs.core.truth_(inst_47680)){
var statearr_47711_49514 = state_47705__$1;
(statearr_47711_49514[(1)] = (8));

} else {
var statearr_47712_49515 = state_47705__$1;
(statearr_47712_49515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47706 === (15))){
var inst_47702 = (state_47705[(2)]);
var inst_47703 = cljs.core.async.close_BANG_(res_ch);
var state_47705__$1 = (function (){var statearr_47713 = state_47705;
(statearr_47713[(8)] = inst_47702);

return statearr_47713;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47705__$1,inst_47703);
} else {
if((state_val_47706 === (13))){
var inst_47700 = (state_47705[(2)]);
var state_47705__$1 = state_47705;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47705__$1,(15),res_ch,inst_47700);
} else {
if((state_val_47706 === (6))){
var state_47705__$1 = state_47705;
var statearr_47715_49516 = state_47705__$1;
(statearr_47715_49516[(2)] = false);

(statearr_47715_49516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47706 === (3))){
var state_47705__$1 = state_47705;
var statearr_47717_49517 = state_47705__$1;
(statearr_47717_49517[(2)] = false);

(statearr_47717_49517[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47706 === (12))){
var inst_47692 = (state_47705[(9)]);
var state_47705__$1 = state_47705;
var statearr_47718_49519 = state_47705__$1;
(statearr_47718_49519[(2)] = inst_47692);

(statearr_47718_49519[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47706 === (2))){
var inst_47662 = (state_47705[(7)]);
var inst_47669 = inst_47662.cljs$lang$protocol_mask$partition0$;
var inst_47670 = (inst_47669 & (64));
var inst_47671 = inst_47662.cljs$core$ISeq$;
var inst_47672 = (cljs.core.PROTOCOL_SENTINEL === inst_47671);
var inst_47673 = ((inst_47670) || (inst_47672));
var state_47705__$1 = state_47705;
if(cljs.core.truth_(inst_47673)){
var statearr_47719_49520 = state_47705__$1;
(statearr_47719_49520[(1)] = (5));

} else {
var statearr_47720_49521 = state_47705__$1;
(statearr_47720_49521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47706 === (11))){
var inst_47692 = (state_47705[(9)]);
var state_47705__$1 = state_47705;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47705__$1,(14),inst_47692);
} else {
if((state_val_47706 === (9))){
var inst_47662 = (state_47705[(7)]);
var state_47705__$1 = state_47705;
var statearr_47721_49526 = state_47705__$1;
(statearr_47721_49526[(2)] = inst_47662);

(statearr_47721_49526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47706 === (5))){
var state_47705__$1 = state_47705;
var statearr_47723_49527 = state_47705__$1;
(statearr_47723_49527[(2)] = true);

(statearr_47723_49527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47706 === (14))){
var inst_47697 = (state_47705[(2)]);
var state_47705__$1 = state_47705;
var statearr_47724_49528 = state_47705__$1;
(statearr_47724_49528[(2)] = inst_47697);

(statearr_47724_49528[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47706 === (10))){
var inst_47692 = (state_47705[(9)]);
var inst_47685 = (state_47705[(2)]);
var inst_47686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47685,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var inst_47688 = cljs.core.deref(entity_path_cache);
var inst_47689 = cljs.core.PersistentHashMap.EMPTY;
var inst_47690 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_47688,inst_47686,inst_47689);
var inst_47691 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_47690,ent], 0));
var inst_47692__$1 = (join_item.cljs$core$IFn$_invoke$arity$2 ? join_item.cljs$core$IFn$_invoke$arity$2(inst_47685,inst_47691) : join_item.call(null,inst_47685,inst_47691));
var inst_47693 = com.wsscode.common.async_cljs.chan_QMARK_(inst_47692__$1);
var state_47705__$1 = (function (){var statearr_47725 = state_47705;
(statearr_47725[(9)] = inst_47692__$1);

return statearr_47725;
})();
if(inst_47693){
var statearr_47726_49530 = state_47705__$1;
(statearr_47726_49530[(1)] = (11));

} else {
var statearr_47728_49531 = state_47705__$1;
(statearr_47728_49531[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47706 === (8))){
var inst_47662 = (state_47705[(7)]);
var inst_47682 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47662);
var state_47705__$1 = state_47705;
var statearr_47730_49532 = state_47705__$1;
(statearr_47730_49532[(2)] = inst_47682);

(statearr_47730_49532[(1)] = (10));


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
});})(c__38971__auto____$1,vec__47657,ent,i,from_chan,join_item,first__47602,first_res,check_ast_opt_QMARK_,seq__47601,out_chan,vec__47600,ast,env__$1,head,tail,inst_47606,inst_47607,inst_47608,inst_47610,inst_47611,inst_47603,inst_47621,inst_47622,inst_47623,inst_47624,inst_47625,inst_47626,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache))
;
return ((function (switch__38924__auto__,c__38971__auto____$1,vec__47657,ent,i,from_chan,join_item,first__47602,first_res,check_ast_opt_QMARK_,seq__47601,out_chan,vec__47600,ast,env__$1,head,tail,inst_47606,inst_47607,inst_47608,inst_47610,inst_47611,inst_47603,inst_47621,inst_47622,inst_47623,inst_47624,inst_47625,inst_47626,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38925__auto____0 = (function (){
var statearr_47731 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47731[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38925__auto__);

(statearr_47731[(1)] = (1));

return statearr_47731;
});
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38925__auto____1 = (function (state_47705){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_47705);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e47732){if((e47732 instanceof Object)){
var ex__38928__auto__ = e47732;
var statearr_47733_49534 = state_47705;
(statearr_47733_49534[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47732;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49536 = state_47705;
state_47705 = G__49536;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38925__auto__ = function(state_47705){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38925__auto____1.call(this,state_47705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38925__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38925__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto____$1,vec__47657,ent,i,from_chan,join_item,first__47602,first_res,check_ast_opt_QMARK_,seq__47601,out_chan,vec__47600,ast,env__$1,head,tail,inst_47606,inst_47607,inst_47608,inst_47610,inst_47611,inst_47603,inst_47621,inst_47622,inst_47623,inst_47624,inst_47625,inst_47626,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache))
})();
var state__38973__auto__ = (function (){var statearr_47736 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_47736[(6)] = c__38971__auto____$1);

return statearr_47736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto____$1,vec__47657,ent,i,from_chan,join_item,first__47602,first_res,check_ast_opt_QMARK_,seq__47601,out_chan,vec__47600,ast,env__$1,head,tail,inst_47606,inst_47607,inst_47608,inst_47610,inst_47611,inst_47603,inst_47621,inst_47622,inst_47623,inst_47624,inst_47625,inst_47626,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache))
);

return c__38971__auto____$1;
});
;})(from_chan,join_item,first__47602,first_res,check_ast_opt_QMARK_,seq__47601,out_chan,vec__47600,ast,env__$1,head,tail,inst_47606,inst_47607,inst_47608,inst_47610,inst_47611,inst_47603,inst_47621,inst_47622,inst_47623,inst_47624,inst_47625,inst_47626,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache))
})();
var inst_47630 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_47623,inst_47629,inst_47622);
var inst_47631 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47632 = [inst_47621];
var inst_47633 = (new cljs.core.PersistentVector(null,1,(5),inst_47631,inst_47632,null));
var inst_47634 = cljs.core.async.into(inst_47633,inst_47623);
var state_47642__$1 = (function (){var statearr_47737 = state_47642;
(statearr_47737[(13)] = inst_47630);

(statearr_47737[(14)] = inst_47626);

return statearr_47737;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47642__$1,(17),inst_47634);
} else {
if((state_val_47643 === (13))){
var inst_47613 = (state_47642[(15)]);
var state_47642__$1 = state_47642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47642__$1,(16),inst_47613);
} else {
if((state_val_47643 === (6))){
var inst_47606 = (state_47642[(7)]);
var inst_47607 = (state_47642[(8)]);
var inst_47613 = (state_47642[(15)]);
var inst_47608 = (state_47642[(9)]);
var inst_47610 = (state_47642[(10)]);
var inst_47603 = (state_47642[(12)]);
var inst_47603__$1 = edn_query_language.core.query__GT_ast(query);
var inst_47604 = (function (){var ast = inst_47603__$1;
return ((function (ast,inst_47606,inst_47607,inst_47613,inst_47608,inst_47610,inst_47603,inst_47603__$1,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache){
return (function (p1__47530_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__47530_SHARP_));
});
;})(ast,inst_47606,inst_47607,inst_47613,inst_47608,inst_47610,inst_47603,inst_47603__$1,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache))
})();
var inst_47605 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_47603__$1);
var inst_47606__$1 = cljs.core.every_QMARK_(inst_47604,inst_47605);
var inst_47607__$1 = (function (){var ast = inst_47603__$1;
var check_ast_opt_QMARK_ = inst_47606__$1;
return ((function (ast,check_ast_opt_QMARK_,inst_47606,inst_47607,inst_47613,inst_47608,inst_47610,inst_47603,inst_47603__$1,inst_47604,inst_47605,inst_47606__$1,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_item(env__$1,entity){
var or__4131__auto__ = (function (){var and__4120__auto__ = check_ast_opt_QMARK_;
if(and__4120__auto__){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4120__auto__,ast,check_ast_opt_QMARK_,inst_47606,inst_47607,inst_47613,inst_47608,inst_47610,inst_47603,inst_47603__$1,inst_47604,inst_47605,inst_47606__$1,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache){
return (function (ent,p__47762){
var map__47763 = p__47762;
var map__47763__$1 = (((((!((map__47763 == null))))?(((((map__47763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47763):map__47763);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47763__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47763__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5718__auto__ = cljs.core.find(entity,key);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__47766 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47766,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47766,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ent,cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450),key),v);
} else {
return cljs.core.reduced(null);
}
});})(and__4120__auto__,ast,check_ast_opt_QMARK_,inst_47606,inst_47607,inst_47613,inst_47608,inst_47610,inst_47603,inst_47603__$1,inst_47604,inst_47605,inst_47606__$1,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache))
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
;})(ast,check_ast_opt_QMARK_,inst_47606,inst_47607,inst_47613,inst_47608,inst_47610,inst_47603,inst_47603__$1,inst_47604,inst_47605,inst_47606__$1,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache))
})();
var inst_47608__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll);
var inst_47609 = cljs.core.seq(coll);
var inst_47610__$1 = cljs.core.first(inst_47609);
var inst_47611 = cljs.core.next(inst_47609);
var inst_47612 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_47608__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,(0));
var inst_47613__$1 = (inst_47607__$1.cljs$core$IFn$_invoke$arity$2 ? inst_47607__$1.cljs$core$IFn$_invoke$arity$2(inst_47612,inst_47610__$1) : inst_47607__$1.call(null,inst_47612,inst_47610__$1));
var inst_47614 = com.wsscode.common.async_cljs.chan_QMARK_(inst_47613__$1);
var state_47642__$1 = (function (){var statearr_47770 = state_47642;
(statearr_47770[(7)] = inst_47606__$1);

(statearr_47770[(8)] = inst_47607__$1);

(statearr_47770[(15)] = inst_47613__$1);

(statearr_47770[(9)] = inst_47608__$1);

(statearr_47770[(10)] = inst_47610__$1);

(statearr_47770[(11)] = inst_47611);

(statearr_47770[(12)] = inst_47603__$1);

return statearr_47770;
})();
if(inst_47614){
var statearr_47771_49546 = state_47642__$1;
(statearr_47771_49546[(1)] = (13));

} else {
var statearr_47772_49547 = state_47642__$1;
(statearr_47772_49547[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47643 === (17))){
var inst_47636 = (state_47642[(2)]);
var state_47642__$1 = state_47642;
var statearr_47773_49548 = state_47642__$1;
(statearr_47773_49548[(2)] = inst_47636);

(statearr_47773_49548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47643 === (3))){
var inst_47540 = (state_47642[(2)]);
var state_47642__$1 = state_47642;
var statearr_47774_49549 = state_47642__$1;
(statearr_47774_49549[(2)] = inst_47540);


cljs.core.async.impl.ioc_helpers.process_exception(state_47642__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47643 === (12))){
var inst_47552 = (state_47642[(16)]);
var inst_47590 = (state_47642[(2)]);
var inst_47591 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_47592 = [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_47593 = ["#e0e3a4","0.8"];
var inst_47594 = cljs.core.PersistentHashMap.fromArrays(inst_47592,inst_47593);
var inst_47595 = [new cljs.core.Keyword("com.wsscode.pathom.core","parallel-sequence-loop","com.wsscode.pathom.core/parallel-sequence-loop",1692546245),inst_47594];
var inst_47596 = cljs.core.PersistentHashMap.fromArrays(inst_47591,inst_47595);
var inst_47597 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_47552,inst_47596);
var state_47642__$1 = (function (){var statearr_47775 = state_47642;
(statearr_47775[(17)] = inst_47597);

return statearr_47775;
})();
var statearr_47776_49550 = state_47642__$1;
(statearr_47776_49550[(2)] = inst_47590);

(statearr_47776_49550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47643 === (2))){
var inst_47640 = (state_47642[(2)]);
var state_47642__$1 = state_47642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47642__$1,inst_47640);
} else {
if((state_val_47643 === (11))){
var inst_47570 = (state_47642[(2)]);
var inst_47571 = com.wsscode.common.async_cljs.throw_err(inst_47570);
var state_47642__$1 = state_47642;
var statearr_47777_49558 = state_47642__$1;
(statearr_47777_49558[(2)] = inst_47571);

(statearr_47777_49558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47643 === (9))){
var inst_47566 = (state_47642[(18)]);
var state_47642__$1 = state_47642;
var statearr_47778_49559 = state_47642__$1;
(statearr_47778_49559[(2)] = inst_47566);

(statearr_47778_49559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47643 === (5))){
var inst_47560 = (state_47642[(19)]);
var inst_47552 = (state_47642[(16)]);
var inst_47556 = (state_47642[(20)]);
var inst_47559 = (state_47642[(21)]);
var inst_47561 = (state_47642[(22)]);
var inst_47563 = (state_47642[(23)]);
var inst_47566 = (state_47642[(18)]);
var inst_47546 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_47547 = [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_47548 = ["#e0e3a4","0.8"];
var inst_47549 = cljs.core.PersistentHashMap.fromArrays(inst_47547,inst_47548);
var inst_47550 = [new cljs.core.Keyword("com.wsscode.pathom.core","parallel-sequence-loop","com.wsscode.pathom.core/parallel-sequence-loop",1692546245),inst_47549];
var inst_47551 = cljs.core.PersistentHashMap.fromArrays(inst_47546,inst_47550);
var inst_47552__$1 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_47551);
var inst_47556__$1 = edn_query_language.core.query__GT_ast(query);
var inst_47557 = (function (){var trace_id__21490__auto__ = inst_47552__$1;
var ast = inst_47556__$1;
return ((function (trace_id__21490__auto__,ast,inst_47560,inst_47552,inst_47556,inst_47559,inst_47561,inst_47563,inst_47566,inst_47546,inst_47547,inst_47548,inst_47549,inst_47550,inst_47551,inst_47552__$1,inst_47556__$1,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache){
return (function (p1__47530_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__47530_SHARP_));
});
;})(trace_id__21490__auto__,ast,inst_47560,inst_47552,inst_47556,inst_47559,inst_47561,inst_47563,inst_47566,inst_47546,inst_47547,inst_47548,inst_47549,inst_47550,inst_47551,inst_47552__$1,inst_47556__$1,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache))
})();
var inst_47558 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_47556__$1);
var inst_47559__$1 = cljs.core.every_QMARK_(inst_47557,inst_47558);
var inst_47560__$1 = (function (){var trace_id__21490__auto__ = inst_47552__$1;
var ast = inst_47556__$1;
var check_ast_opt_QMARK_ = inst_47559__$1;
return ((function (trace_id__21490__auto__,ast,check_ast_opt_QMARK_,inst_47560,inst_47552,inst_47556,inst_47559,inst_47561,inst_47563,inst_47566,inst_47546,inst_47547,inst_47548,inst_47549,inst_47550,inst_47551,inst_47552__$1,inst_47556__$1,inst_47557,inst_47558,inst_47559__$1,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_item(env__$1,entity){
var or__4131__auto__ = (function (){var and__4120__auto__ = check_ast_opt_QMARK_;
if(and__4120__auto__){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4120__auto__,trace_id__21490__auto__,ast,check_ast_opt_QMARK_,inst_47560,inst_47552,inst_47556,inst_47559,inst_47561,inst_47563,inst_47566,inst_47546,inst_47547,inst_47548,inst_47549,inst_47550,inst_47551,inst_47552__$1,inst_47556__$1,inst_47557,inst_47558,inst_47559__$1,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache){
return (function (ent,p__47806){
var map__47807 = p__47806;
var map__47807__$1 = (((((!((map__47807 == null))))?(((((map__47807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47807):map__47807);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47807__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47807__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5718__auto__ = cljs.core.find(entity,key);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__47810 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47810,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47810,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ent,cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450),key),v);
} else {
return cljs.core.reduced(null);
}
});})(and__4120__auto__,trace_id__21490__auto__,ast,check_ast_opt_QMARK_,inst_47560,inst_47552,inst_47556,inst_47559,inst_47561,inst_47563,inst_47566,inst_47546,inst_47547,inst_47548,inst_47549,inst_47550,inst_47551,inst_47552__$1,inst_47556__$1,inst_47557,inst_47558,inst_47559__$1,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache))
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
;})(trace_id__21490__auto__,ast,check_ast_opt_QMARK_,inst_47560,inst_47552,inst_47556,inst_47559,inst_47561,inst_47563,inst_47566,inst_47546,inst_47547,inst_47548,inst_47549,inst_47550,inst_47551,inst_47552__$1,inst_47556__$1,inst_47557,inst_47558,inst_47559__$1,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache))
})();
var inst_47561__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll);
var inst_47562 = cljs.core.seq(coll);
var inst_47563__$1 = cljs.core.first(inst_47562);
var inst_47564 = cljs.core.next(inst_47562);
var inst_47565 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_47561__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,(0));
var inst_47566__$1 = (inst_47560__$1.cljs$core$IFn$_invoke$arity$2 ? inst_47560__$1.cljs$core$IFn$_invoke$arity$2(inst_47565,inst_47563__$1) : inst_47560__$1.call(null,inst_47565,inst_47563__$1));
var inst_47567 = com.wsscode.common.async_cljs.chan_QMARK_(inst_47566__$1);
var state_47642__$1 = (function (){var statearr_47813 = state_47642;
(statearr_47813[(19)] = inst_47560__$1);

(statearr_47813[(24)] = inst_47564);

(statearr_47813[(16)] = inst_47552__$1);

(statearr_47813[(20)] = inst_47556__$1);

(statearr_47813[(21)] = inst_47559__$1);

(statearr_47813[(22)] = inst_47561__$1);

(statearr_47813[(23)] = inst_47563__$1);

(statearr_47813[(18)] = inst_47566__$1);

return statearr_47813;
})();
if(inst_47567){
var statearr_47814_49573 = state_47642__$1;
(statearr_47814_49573[(1)] = (8));

} else {
var statearr_47815_49574 = state_47642__$1;
(statearr_47815_49574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47643 === (14))){
var inst_47613 = (state_47642[(15)]);
var state_47642__$1 = state_47642;
var statearr_47816_49579 = state_47642__$1;
(statearr_47816_49579[(2)] = inst_47613);

(statearr_47816_49579[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47643 === (16))){
var inst_47617 = (state_47642[(2)]);
var inst_47618 = com.wsscode.common.async_cljs.throw_err(inst_47617);
var state_47642__$1 = state_47642;
var statearr_47817_49584 = state_47642__$1;
(statearr_47817_49584[(2)] = inst_47618);

(statearr_47817_49584[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47643 === (10))){
var inst_47560 = (state_47642[(19)]);
var inst_47564 = (state_47642[(24)]);
var inst_47552 = (state_47642[(16)]);
var inst_47556 = (state_47642[(20)]);
var inst_47559 = (state_47642[(21)]);
var inst_47561 = (state_47642[(22)]);
var inst_47563 = (state_47642[(23)]);
var inst_47574 = (state_47642[(2)]);
var inst_47575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_47577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_47578 = cljs.core.range.cljs$core$IFn$_invoke$arity$0();
var inst_47579 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_47564,inst_47578);
var inst_47580 = cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(inst_47575,inst_47579);
var inst_47582 = (function (){var from_chan = inst_47575;
var join_item = inst_47560;
var trace_id__21490__auto__ = inst_47552;
var first_res = inst_47574;
var check_ast_opt_QMARK_ = inst_47559;
var first__47555 = inst_47563;
var out_chan = inst_47577;
var vec__47553 = coll;
var seq__47554 = inst_47564;
var ast = inst_47556;
var env__$1 = inst_47561;
var head = inst_47563;
var tail = inst_47564;
return ((function (from_chan,join_item,trace_id__21490__auto__,first_res,check_ast_opt_QMARK_,first__47555,out_chan,vec__47553,seq__47554,ast,env__$1,head,tail,inst_47560,inst_47564,inst_47552,inst_47556,inst_47559,inst_47561,inst_47563,inst_47574,inst_47575,inst_47577,inst_47578,inst_47579,inst_47580,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline(p__47818,res_ch){
var vec__47819 = p__47818;
var ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47819,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47819,(1),null);
var c__38971__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto____$1,vec__47819,ent,i,from_chan,join_item,trace_id__21490__auto__,first_res,check_ast_opt_QMARK_,first__47555,out_chan,vec__47553,seq__47554,ast,env__$1,head,tail,inst_47560,inst_47564,inst_47552,inst_47556,inst_47559,inst_47561,inst_47563,inst_47574,inst_47575,inst_47577,inst_47578,inst_47579,inst_47580,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto____$1,vec__47819,ent,i,from_chan,join_item,trace_id__21490__auto__,first_res,check_ast_opt_QMARK_,first__47555,out_chan,vec__47553,seq__47554,ast,env__$1,head,tail,inst_47560,inst_47564,inst_47552,inst_47556,inst_47559,inst_47561,inst_47563,inst_47574,inst_47575,inst_47577,inst_47578,inst_47579,inst_47580,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache){
return (function (state_47863){
var state_val_47864 = (state_47863[(1)]);
if((state_val_47864 === (7))){
var inst_47837 = (state_47863[(2)]);
var state_47863__$1 = state_47863;
var statearr_47866_49594 = state_47863__$1;
(statearr_47866_49594[(2)] = inst_47837);

(statearr_47866_49594[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47864 === (1))){
var inst_47824 = (state_47863[(7)]);
var inst_47823 = (i + (1));
var inst_47824__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,inst_47823);
var inst_47826 = (inst_47824__$1 == null);
var inst_47827 = cljs.core.not(inst_47826);
var state_47863__$1 = (function (){var statearr_47868 = state_47863;
(statearr_47868[(7)] = inst_47824__$1);

return statearr_47868;
})();
if(inst_47827){
var statearr_47869_49595 = state_47863__$1;
(statearr_47869_49595[(1)] = (2));

} else {
var statearr_47870_49596 = state_47863__$1;
(statearr_47870_49596[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47864 === (4))){
var inst_47840 = (state_47863[(2)]);
var state_47863__$1 = state_47863;
if(cljs.core.truth_(inst_47840)){
var statearr_47871_49602 = state_47863__$1;
(statearr_47871_49602[(1)] = (8));

} else {
var statearr_47872_49603 = state_47863__$1;
(statearr_47872_49603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47864 === (15))){
var inst_47860 = (state_47863[(2)]);
var inst_47861 = cljs.core.async.close_BANG_(res_ch);
var state_47863__$1 = (function (){var statearr_47873 = state_47863;
(statearr_47873[(8)] = inst_47860);

return statearr_47873;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47863__$1,inst_47861);
} else {
if((state_val_47864 === (13))){
var inst_47858 = (state_47863[(2)]);
var state_47863__$1 = state_47863;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47863__$1,(15),res_ch,inst_47858);
} else {
if((state_val_47864 === (6))){
var state_47863__$1 = state_47863;
var statearr_47874_49604 = state_47863__$1;
(statearr_47874_49604[(2)] = false);

(statearr_47874_49604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47864 === (3))){
var state_47863__$1 = state_47863;
var statearr_47875_49605 = state_47863__$1;
(statearr_47875_49605[(2)] = false);

(statearr_47875_49605[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47864 === (12))){
var inst_47851 = (state_47863[(9)]);
var state_47863__$1 = state_47863;
var statearr_47876_49606 = state_47863__$1;
(statearr_47876_49606[(2)] = inst_47851);

(statearr_47876_49606[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47864 === (2))){
var inst_47824 = (state_47863[(7)]);
var inst_47829 = inst_47824.cljs$lang$protocol_mask$partition0$;
var inst_47830 = (inst_47829 & (64));
var inst_47831 = inst_47824.cljs$core$ISeq$;
var inst_47832 = (cljs.core.PROTOCOL_SENTINEL === inst_47831);
var inst_47833 = ((inst_47830) || (inst_47832));
var state_47863__$1 = state_47863;
if(cljs.core.truth_(inst_47833)){
var statearr_47877_49607 = state_47863__$1;
(statearr_47877_49607[(1)] = (5));

} else {
var statearr_47878_49608 = state_47863__$1;
(statearr_47878_49608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47864 === (11))){
var inst_47851 = (state_47863[(9)]);
var state_47863__$1 = state_47863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47863__$1,(14),inst_47851);
} else {
if((state_val_47864 === (9))){
var inst_47824 = (state_47863[(7)]);
var state_47863__$1 = state_47863;
var statearr_47879_49610 = state_47863__$1;
(statearr_47879_49610[(2)] = inst_47824);

(statearr_47879_49610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47864 === (5))){
var state_47863__$1 = state_47863;
var statearr_47880_49613 = state_47863__$1;
(statearr_47880_49613[(2)] = true);

(statearr_47880_49613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47864 === (14))){
var inst_47855 = (state_47863[(2)]);
var state_47863__$1 = state_47863;
var statearr_47881_49614 = state_47863__$1;
(statearr_47881_49614[(2)] = inst_47855);

(statearr_47881_49614[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47864 === (10))){
var inst_47851 = (state_47863[(9)]);
var inst_47845 = (state_47863[(2)]);
var inst_47846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47845,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var inst_47847 = cljs.core.deref(entity_path_cache);
var inst_47848 = cljs.core.PersistentHashMap.EMPTY;
var inst_47849 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_47847,inst_47846,inst_47848);
var inst_47850 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_47849,ent], 0));
var inst_47851__$1 = (join_item.cljs$core$IFn$_invoke$arity$2 ? join_item.cljs$core$IFn$_invoke$arity$2(inst_47845,inst_47850) : join_item.call(null,inst_47845,inst_47850));
var inst_47852 = com.wsscode.common.async_cljs.chan_QMARK_(inst_47851__$1);
var state_47863__$1 = (function (){var statearr_47882 = state_47863;
(statearr_47882[(9)] = inst_47851__$1);

return statearr_47882;
})();
if(inst_47852){
var statearr_47883_49617 = state_47863__$1;
(statearr_47883_49617[(1)] = (11));

} else {
var statearr_47884_49618 = state_47863__$1;
(statearr_47884_49618[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47864 === (8))){
var inst_47824 = (state_47863[(7)]);
var inst_47842 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47824);
var state_47863__$1 = state_47863;
var statearr_47885_49620 = state_47863__$1;
(statearr_47885_49620[(2)] = inst_47842);

(statearr_47885_49620[(1)] = (10));


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
});})(c__38971__auto____$1,vec__47819,ent,i,from_chan,join_item,trace_id__21490__auto__,first_res,check_ast_opt_QMARK_,first__47555,out_chan,vec__47553,seq__47554,ast,env__$1,head,tail,inst_47560,inst_47564,inst_47552,inst_47556,inst_47559,inst_47561,inst_47563,inst_47574,inst_47575,inst_47577,inst_47578,inst_47579,inst_47580,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache))
;
return ((function (switch__38924__auto__,c__38971__auto____$1,vec__47819,ent,i,from_chan,join_item,trace_id__21490__auto__,first_res,check_ast_opt_QMARK_,first__47555,out_chan,vec__47553,seq__47554,ast,env__$1,head,tail,inst_47560,inst_47564,inst_47552,inst_47556,inst_47559,inst_47561,inst_47563,inst_47574,inst_47575,inst_47577,inst_47578,inst_47579,inst_47580,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38925__auto____0 = (function (){
var statearr_47890 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47890[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38925__auto__);

(statearr_47890[(1)] = (1));

return statearr_47890;
});
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38925__auto____1 = (function (state_47863){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_47863);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e47892){if((e47892 instanceof Object)){
var ex__38928__auto__ = e47892;
var statearr_47893_49627 = state_47863;
(statearr_47893_49627[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47892;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49628 = state_47863;
state_47863 = G__49628;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38925__auto__ = function(state_47863){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38925__auto____1.call(this,state_47863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38925__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38925__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto____$1,vec__47819,ent,i,from_chan,join_item,trace_id__21490__auto__,first_res,check_ast_opt_QMARK_,first__47555,out_chan,vec__47553,seq__47554,ast,env__$1,head,tail,inst_47560,inst_47564,inst_47552,inst_47556,inst_47559,inst_47561,inst_47563,inst_47574,inst_47575,inst_47577,inst_47578,inst_47579,inst_47580,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache))
})();
var state__38973__auto__ = (function (){var statearr_47901 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_47901[(6)] = c__38971__auto____$1);

return statearr_47901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto____$1,vec__47819,ent,i,from_chan,join_item,trace_id__21490__auto__,first_res,check_ast_opt_QMARK_,first__47555,out_chan,vec__47553,seq__47554,ast,env__$1,head,tail,inst_47560,inst_47564,inst_47552,inst_47556,inst_47559,inst_47561,inst_47563,inst_47574,inst_47575,inst_47577,inst_47578,inst_47579,inst_47580,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache))
);

return c__38971__auto____$1;
});
;})(from_chan,join_item,trace_id__21490__auto__,first_res,check_ast_opt_QMARK_,first__47555,out_chan,vec__47553,seq__47554,ast,env__$1,head,tail,inst_47560,inst_47564,inst_47552,inst_47556,inst_47559,inst_47561,inst_47563,inst_47574,inst_47575,inst_47577,inst_47578,inst_47579,inst_47580,state_val_47643,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache))
})();
var inst_47583 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_47577,inst_47582,inst_47575);
var inst_47584 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47586 = [inst_47574];
var inst_47587 = (new cljs.core.PersistentVector(null,1,(5),inst_47584,inst_47586,null));
var inst_47588 = cljs.core.async.into(inst_47587,inst_47577);
var state_47642__$1 = (function (){var statearr_47907 = state_47642;
(statearr_47907[(25)] = inst_47583);

(statearr_47907[(26)] = inst_47580);

return statearr_47907;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47642__$1,(12),inst_47588);
} else {
if((state_val_47643 === (8))){
var inst_47566 = (state_47642[(18)]);
var state_47642__$1 = state_47642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47642__$1,(11),inst_47566);
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
});})(c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache))
;
return ((function (switch__38924__auto__,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38925__auto____0 = (function (){
var statearr_47916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47916[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38925__auto__);

(statearr_47916[(1)] = (1));

return statearr_47916;
});
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38925__auto____1 = (function (state_47642){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_47642);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e47921){if((e47921 instanceof Object)){
var ex__38928__auto__ = e47921;
var statearr_47922_49636 = state_47642;
(statearr_47922_49636[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47921;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49637 = state_47642;
state_47642 = G__49637;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38925__auto__ = function(state_47642){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38925__auto____1.call(this,state_47642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38925__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38925__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache))
})();
var state__38973__auto__ = (function (){var statearr_47923 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_47923[(6)] = c__38971__auto__);

return statearr_47923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,map__47536,map__47536__$1,env,query,entity_path_cache))
);

return c__38971__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Runs the current subquery against the items of the given collection.
 */
com.wsscode.pathom.core.join_seq = (function com$wsscode$pathom$core$join_seq(p__47940,coll){
var map__47941 = p__47940;
var map__47941__$1 = (((((!((map__47941 == null))))?(((((map__47941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47941):map__47941);
var env = map__47941__$1;
var parallel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47941__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","parallel?","com.wsscode.pathom.parser/parallel?",2071817193));
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","join-seq","com.wsscode.pathom.core/join-seq",523699901),new cljs.core.Keyword("com.wsscode.pathom.core","seq-count","com.wsscode.pathom.core/seq-count",-1671473836),cljs.core.count(coll)], null));

if(cljs.core.truth_(parallel_QMARK_)){
return com.wsscode.pathom.core.join_seq_parallel(env,coll);
} else {
var join_item = ((function (map__47941,map__47941__$1,env,parallel_QMARK_){
return (function com$wsscode$pathom$core$join_seq_$_join_item(ent,out){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(ent,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,cljs.core.count(out)));
});})(map__47941,map__47941__$1,env,parallel_QMARK_))
;
var out = cljs.core.PersistentVector.EMPTY;
var G__47972 = coll;
var vec__47973 = G__47972;
var seq__47974 = cljs.core.seq(vec__47973);
var first__47975 = cljs.core.first(seq__47974);
var seq__47974__$1 = cljs.core.next(seq__47974);
var ent = first__47975;
var tail = seq__47974__$1;
var out__$1 = out;
var G__47972__$1 = G__47972;
while(true){
var out__$2 = out__$1;
var vec__48083 = G__47972__$1;
var seq__48084 = cljs.core.seq(vec__48083);
var first__48085 = cljs.core.first(seq__48084);
var seq__48084__$1 = cljs.core.next(seq__48084);
var ent__$1 = first__48085;
var tail__$1 = seq__48084__$1;
if(cljs.core.truth_(ent__$1)){
var res = join_item(ent__$1,out__$2);
if(com.wsscode.common.async_cljs.chan_QMARK_(res)){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (out__$1,G__47972__$1,c__38971__auto__,res,out__$2,vec__48083,seq__48084,first__48085,seq__48084__$1,ent__$1,tail__$1,out,G__47972,vec__47973,seq__47974,first__47975,seq__47974__$1,ent,tail,map__47941,map__47941__$1,env,parallel_QMARK_){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (out__$1,G__47972__$1,c__38971__auto__,res,out__$2,vec__48083,seq__48084,first__48085,seq__48084__$1,ent__$1,tail__$1,out,G__47972,vec__47973,seq__47974,first__47975,seq__47974__$1,ent,tail,map__47941,map__47941__$1,env,parallel_QMARK_){
return (function (state_48133){
var state_val_48135 = (state_48133[(1)]);
if((state_val_48135 === (7))){
var inst_48128 = (state_48133[(2)]);
var state_48133__$1 = state_48133;
var statearr_48136_49652 = state_48133__$1;
(statearr_48136_49652[(2)] = inst_48128);


cljs.core.async.impl.ioc_helpers.process_exception(state_48133__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48135 === (1))){
var state_48133__$1 = state_48133;
var statearr_48137_49653 = state_48133__$1;
(statearr_48137_49653[(2)] = null);

(statearr_48137_49653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48135 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48133,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_48099 = cljs.core.PersistentVector.EMPTY_NODE;
var state_48133__$1 = (function (){var statearr_48138 = state_48133;
(statearr_48138[(7)] = inst_48099);

return statearr_48138;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48133__$1,(5),res);
} else {
if((state_val_48135 === (6))){
var inst_48115 = (state_48133[(8)]);
var inst_48109 = (state_48133[(9)]);
var inst_48114 = cljs.core.seq(inst_48109);
var inst_48115__$1 = cljs.core.first(inst_48114);
var inst_48116 = cljs.core.next(inst_48114);
var state_48133__$1 = (function (){var statearr_48139 = state_48133;
(statearr_48139[(8)] = inst_48115__$1);

(statearr_48139[(10)] = inst_48116);

return statearr_48139;
})();
if(cljs.core.truth_(inst_48115__$1)){
var statearr_48141_49656 = state_48133__$1;
(statearr_48141_49656[(1)] = (8));

} else {
var statearr_48143_49657 = state_48133__$1;
(statearr_48143_49657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48135 === (3))){
var inst_48086 = (state_48133[(2)]);
var state_48133__$1 = state_48133;
var statearr_48144_49659 = state_48133__$1;
(statearr_48144_49659[(2)] = inst_48086);


cljs.core.async.impl.ioc_helpers.process_exception(state_48133__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48135 === (2))){
var inst_48130 = (state_48133[(2)]);
var state_48133__$1 = state_48133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48133__$1,inst_48130);
} else {
if((state_val_48135 === (11))){
var inst_48108 = (state_48133[(11)]);
var inst_48116 = (state_48133[(10)]);
var inst_48120 = (state_48133[(2)]);
var inst_48121 = com.wsscode.common.async_cljs.throw_err(inst_48120);
var inst_48122 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_48108,inst_48121);
var inst_48108__$1 = inst_48122;
var inst_48109 = inst_48116;
var state_48133__$1 = (function (){var statearr_48147 = state_48133;
(statearr_48147[(11)] = inst_48108__$1);

(statearr_48147[(9)] = inst_48109);

return statearr_48147;
})();
var statearr_48149_49662 = state_48133__$1;
(statearr_48149_49662[(2)] = null);

(statearr_48149_49662[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48135 === (9))){
var inst_48108 = (state_48133[(11)]);
var state_48133__$1 = state_48133;
var statearr_48152_49665 = state_48133__$1;
(statearr_48152_49665[(2)] = inst_48108);

(statearr_48152_49665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48135 === (5))){
var inst_48099 = (state_48133[(7)]);
var inst_48101 = (state_48133[(2)]);
var inst_48102 = com.wsscode.common.async_cljs.throw_err(inst_48101);
var inst_48103 = [inst_48102];
var inst_48104 = (new cljs.core.PersistentVector(null,1,(5),inst_48099,inst_48103,null));
var inst_48105 = cljs.core.seq(tail__$1);
var inst_48106 = cljs.core.first(inst_48105);
var inst_48107 = cljs.core.next(inst_48105);
var inst_48108 = inst_48104;
var inst_48109 = tail__$1;
var state_48133__$1 = (function (){var statearr_48154 = state_48133;
(statearr_48154[(12)] = inst_48106);

(statearr_48154[(13)] = inst_48107);

(statearr_48154[(11)] = inst_48108);

(statearr_48154[(9)] = inst_48109);

return statearr_48154;
})();
var statearr_48155_49676 = state_48133__$1;
(statearr_48155_49676[(2)] = null);

(statearr_48155_49676[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48135 === (10))){
var inst_48126 = (state_48133[(2)]);
var state_48133__$1 = state_48133;
var statearr_48156_49677 = state_48133__$1;
(statearr_48156_49677[(2)] = inst_48126);

(statearr_48156_49677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48135 === (8))){
var inst_48115 = (state_48133[(8)]);
var inst_48108 = (state_48133[(11)]);
var inst_48118 = join_item(inst_48115,inst_48108);
var state_48133__$1 = state_48133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48133__$1,(11),inst_48118);
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
});})(out__$1,G__47972__$1,c__38971__auto__,res,out__$2,vec__48083,seq__48084,first__48085,seq__48084__$1,ent__$1,tail__$1,out,G__47972,vec__47973,seq__47974,first__47975,seq__47974__$1,ent,tail,map__47941,map__47941__$1,env,parallel_QMARK_))
;
return ((function (out__$1,G__47972__$1,switch__38924__auto__,c__38971__auto__,res,out__$2,vec__48083,seq__48084,first__48085,seq__48084__$1,ent__$1,tail__$1,out,G__47972,vec__47973,seq__47974,first__47975,seq__47974__$1,ent,tail,map__47941,map__47941__$1,env,parallel_QMARK_){
return (function() {
var com$wsscode$pathom$core$join_seq_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$core$join_seq_$_state_machine__38925__auto____0 = (function (){
var statearr_48158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48158[(0)] = com$wsscode$pathom$core$join_seq_$_state_machine__38925__auto__);

(statearr_48158[(1)] = (1));

return statearr_48158;
});
var com$wsscode$pathom$core$join_seq_$_state_machine__38925__auto____1 = (function (state_48133){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_48133);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e48159){if((e48159 instanceof Object)){
var ex__38928__auto__ = e48159;
var statearr_48160_49679 = state_48133;
(statearr_48160_49679[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48159;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49682 = state_48133;
state_48133 = G__49682;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_$_state_machine__38925__auto__ = function(state_48133){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_$_state_machine__38925__auto____1.call(this,state_48133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_$_state_machine__38925__auto____0;
com$wsscode$pathom$core$join_seq_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_$_state_machine__38925__auto____1;
return com$wsscode$pathom$core$join_seq_$_state_machine__38925__auto__;
})()
;})(out__$1,G__47972__$1,switch__38924__auto__,c__38971__auto__,res,out__$2,vec__48083,seq__48084,first__48085,seq__48084__$1,ent__$1,tail__$1,out,G__47972,vec__47973,seq__47974,first__47975,seq__47974__$1,ent,tail,map__47941,map__47941__$1,env,parallel_QMARK_))
})();
var state__38973__auto__ = (function (){var statearr_48161 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_48161[(6)] = c__38971__auto__);

return statearr_48161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(out__$1,G__47972__$1,c__38971__auto__,res,out__$2,vec__48083,seq__48084,first__48085,seq__48084__$1,ent__$1,tail__$1,out,G__47972,vec__47973,seq__47974,first__47975,seq__47974__$1,ent,tail,map__47941,map__47941__$1,env,parallel_QMARK_))
);

return c__38971__auto__;
} else {
var G__49683 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out__$2,res);
var G__49684 = tail__$1;
out__$1 = G__49683;
G__47972__$1 = G__49684;
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
com.wsscode.pathom.core.ident_key = (function com$wsscode$pathom$core$ident_key(p__48166){
var map__48167 = p__48166;
var map__48167__$1 = (((((!((map__48167 == null))))?(((((map__48167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48167):map__48167);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48167__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var key = (function (){var G__48170 = ast;
if((G__48170 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__48170);
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
com.wsscode.pathom.core.ident_value = (function com$wsscode$pathom$core$ident_value(p__48175){
var map__48176 = p__48175;
var map__48176__$1 = (((((!((map__48176 == null))))?(((((map__48176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48176):map__48176);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48176__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var key = (function (){var G__48178 = ast;
if((G__48178 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__48178);
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
com.wsscode.pathom.core.elide_ast_nodes = (function com$wsscode$pathom$core$elide_ast_nodes(p__48182,elision_set){
var map__48184 = p__48182;
var map__48184__$1 = (((((!((map__48184 == null))))?(((((map__48184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48184):map__48184);
var ast = map__48184__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48184__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48184__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var union_elision_QMARK_ = cljs.core.contains_QMARK_(elision_set,union_key);
if(((union_elision_QMARK_) || (cljs.core.contains_QMARK_(elision_set,key)))){
return null;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"children","children",-940561982),((function (union_elision_QMARK_,map__48184,map__48184__$1,ast,key,union_key){
return (function (c){
if(cljs.core.truth_(c)){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (union_elision_QMARK_,map__48184,map__48184__$1,ast,key,union_key){
return (function (p1__48180_SHARP_){
return (com.wsscode.pathom.core.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2(p1__48180_SHARP_,elision_set) : com.wsscode.pathom.core.elide_ast_nodes.call(null,p1__48180_SHARP_,elision_set));
});})(union_elision_QMARK_,map__48184,map__48184__$1,ast,key,union_key))
,c));
} else {
return null;
}
});})(union_elision_QMARK_,map__48184,map__48184__$1,ast,key,union_key))
);
}
});
com.wsscode.pathom.core.normalize_env = (function com$wsscode$pathom$core$normalize_env(p__48193){
var map__48194 = p__48193;
var map__48194__$1 = (((((!((map__48194 == null))))?(((((map__48194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48194):map__48194);
var env = map__48194__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48194__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var G__48199 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
if((new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249).cljs$core$IFn$_invoke$arity$1(env) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48199,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031));
} else {
return G__48199;
}
});
com.wsscode.pathom.core.merge_queries_STAR_ = (function com$wsscode$pathom$core$merge_queries_STAR_(qa,qb){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ast,p__48206){
var map__48207 = p__48206;
var map__48207__$1 = (((((!((map__48207 == null))))?(((((map__48207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48207):map__48207);
var item_b = map__48207__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48207__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48207__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48207__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5718__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__48207,map__48207__$1,item_b,key,type,params){
return (function (p1__48203_SHARP_,p2__48201_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p2__48201_SHARP_),key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48203_SHARP_,p2__48201_SHARP_], null);
} else {
return null;
}
});})(map__48207,map__48207__$1,item_b,key,type,params))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__48211 = temp__5718__auto__;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48211,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48211,(1),null);
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
var G__48214 = com.wsscode.pathom.core.merge_queries_STAR_(com.wsscode.pathom.core.query__GT_ast(qa),com.wsscode.pathom.core.query__GT_ast(qb));
if((G__48214 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast__GT_query(G__48214);
}
});
/**
 * Converts ident values and param values to ::p/var.
 */
com.wsscode.pathom.core.normalize_query_variables = (function com$wsscode$pathom$core$normalize_query_variables(query){
return com.wsscode.pathom.core.ast__GT_query(com.wsscode.pathom.core.transduce_children(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
var G__48221 = x;
var G__48221__$1 = ((com.wsscode.pathom.core.ident_QMARK_(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48221,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x)),new cljs.core.Keyword("com.wsscode.pathom.core","var","com.wsscode.pathom.core/var",-2126559442)], null)):G__48221);
if(cljs.core.truth_(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__48221__$1,new cljs.core.Keyword(null,"params","params",710516235),((function (G__48221,G__48221__$1){
return (function (p1__48217_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__48221,G__48221__$1){
return (function (p__48224){
var vec__48226 = p__48224;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48226,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48226,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword("com.wsscode.pathom.core","var","com.wsscode.pathom.core/var",-2126559442)], null);
});})(G__48221,G__48221__$1))
),p1__48217_SHARP_);
});})(G__48221,G__48221__$1))
);
} else {
return G__48221__$1;
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
com.wsscode.pathom.core.key_dispatch = (function com$wsscode$pathom$core$key_dispatch(p__48229){
var map__48230 = p__48229;
var map__48230__$1 = (((((!((map__48230 == null))))?(((((map__48230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48230):map__48230);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48230__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
});
/**
 * Dispatch on the first element (type) of an incoming ident.
 */
com.wsscode.pathom.core.entity_dispatch = (function com$wsscode$pathom$core$entity_dispatch(p__48234){
var map__48235 = p__48234;
var map__48235__$1 = (((((!((map__48235 == null))))?(((((map__48235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48235):map__48235);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48235__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
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
com.wsscode.pathom.core.env_placeholder_reader = (function com$wsscode$pathom$core$env_placeholder_reader(p__48237){
var map__48238 = p__48237;
var map__48238__$1 = (((((!((map__48238 == null))))?(((((map__48238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48238):map__48238);
var env = map__48238__$1;
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48238__$1,new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644));
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
com.wsscode.pathom.core.lift_placeholders = (function com$wsscode$pathom$core$lift_placeholders(p__48244,query){
var map__48245 = p__48244;
var map__48245__$1 = (((((!((map__48245 == null))))?(((((map__48245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48245):map__48245);
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48245__$1,new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644));
var ast = com.wsscode.pathom.core.query__GT_ast(query);
var ast_SINGLEQUOTE_ = clojure.walk.postwalk(((function (ast,map__48245,map__48245__$1,placeholder_prefixes){
return (function (x){
var temp__5718__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__5718__auto__)){
var children = temp__5718__auto__;
var map__48249 = cljs.core.group_by(((function (children,temp__5718__auto__,ast,map__48245,map__48245__$1,placeholder_prefixes){
return (function (p1__48241_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__48241_SHARP_))) && (cljs.core.contains_QMARK_(placeholder_prefixes,cljs.core.namespace(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(p1__48241_SHARP_)))));
});})(children,temp__5718__auto__,ast,map__48245,map__48245__$1,placeholder_prefixes))
,children);
var map__48249__$1 = (((((!((map__48249 == null))))?(((((map__48249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48249):map__48249);
var placeholders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48249__$1,true);
var regular = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48249__$1,false);
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
});})(ast,map__48245,map__48245__$1,placeholder_prefixes))
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
com.wsscode.pathom.core.map_reader = (function com$wsscode$pathom$core$map_reader(p__48257){
var map__48259 = p__48257;
var map__48259__$1 = (((((!((map__48259 == null))))?(((((map__48259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48259):map__48259);
var env = map__48259__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48259__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48259__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
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
com.wsscode.pathom.core.map_reader_STAR_ = (function com$wsscode$pathom$core$map_reader_STAR_(p__48267){
var map__48269 = p__48267;
var map__48269__$1 = (((((!((map__48269 == null))))?(((((map__48269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48269):map__48269);
var map_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48269__$1,new cljs.core.Keyword("com.wsscode.pathom.core","map-key-transform","com.wsscode.pathom.core/map-key-transform",-238565800));
var map_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48269__$1,new cljs.core.Keyword("com.wsscode.pathom.core","map-value-transform","com.wsscode.pathom.core/map-value-transform",1252006952));
return ((function (map__48269,map__48269__$1,map_key_transform,map_value_transform){
return (function (p__48272){
var map__48273 = p__48272;
var map__48273__$1 = (((((!((map__48273 == null))))?(((((map__48273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48273):map__48273);
var env = map__48273__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48273__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48273__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48273__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
var key = (function (){var G__48277 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(map_key_transform)){
return (map_key_transform.cljs$core$IFn$_invoke$arity$1 ? map_key_transform.cljs$core$IFn$_invoke$arity$1(G__48277) : map_key_transform.call(null,G__48277));
} else {
return G__48277;
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
var G__48281 = v;
if(cljs.core.truth_(map_value_transform)){
var G__48283 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var G__48284 = G__48281;
return (map_value_transform.cljs$core$IFn$_invoke$arity$2 ? map_value_transform.cljs$core$IFn$_invoke$arity$2(G__48283,G__48284) : map_value_transform.call(null,G__48283,G__48284));
} else {
return G__48281;
}
}
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
;})(map__48269,map__48269__$1,map_key_transform,map_value_transform))
});
/**
 * Like map-reader*, but handles plain Javascript objects instead of Clojure maps.
 */
com.wsscode.pathom.core.js_obj_reader = (function com$wsscode$pathom$core$js_obj_reader(p__48288){
var map__48290 = p__48288;
var map__48290__$1 = (((((!((map__48290 == null))))?(((((map__48290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48290):map__48290);
var env = map__48290__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48290__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48290__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var js_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48290__$1,new cljs.core.Keyword("com.wsscode.pathom.core","js-key-transform","com.wsscode.pathom.core/js-key-transform",-1588372758),cljs.core.name);
var js_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48290__$1,new cljs.core.Keyword("com.wsscode.pathom.core","js-value-transform","com.wsscode.pathom.core/js-value-transform",1418749137),((function (map__48290,map__48290__$1,env,query,ast,js_key_transform){
return (function (_,v){
return v;
});})(map__48290,map__48290__$1,env,query,ast,js_key_transform))
);
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48290__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
var js_key = (function (){var G__48292 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
return (js_key_transform.cljs$core$IFn$_invoke$arity$1 ? js_key_transform.cljs$core$IFn$_invoke$arity$1(G__48292) : js_key_transform.call(null,G__48292));
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
var G__48295 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var G__48296 = v;
return (js_value_transform.cljs$core$IFn$_invoke$arity$2 ? js_value_transform.cljs$core$IFn$_invoke$arity$2(G__48295,G__48296) : js_value_transform.call(null,G__48295,G__48296));
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
var map__48297 = (function (){var G__48298 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"tx","tx",466630418),tx], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48298) : f.call(null,G__48298));
})();
var map__48297__$1 = (((((!((map__48297 == null))))?(((((map__48297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48297):map__48297);
var env__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48297__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var tx__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48297__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
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
var res__44797__auto__ = (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,tx) : parser.call(null,env,tx));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44797__auto__)){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,res__44797__auto__){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,res__44797__auto__){
return (function (state_48314){
var state_val_48315 = (state_48314[(1)]);
if((state_val_48315 === (1))){
var state_48314__$1 = state_48314;
var statearr_48317_49907 = state_48314__$1;
(statearr_48317_49907[(2)] = null);

(statearr_48317_49907[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48315 === (2))){
var inst_48312 = (state_48314[(2)]);
var state_48314__$1 = state_48314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48314__$1,inst_48312);
} else {
if((state_val_48315 === (3))){
var inst_48303 = (state_48314[(2)]);
var state_48314__$1 = state_48314;
var statearr_48320_49908 = state_48314__$1;
(statearr_48320_49908[(2)] = inst_48303);


cljs.core.async.impl.ioc_helpers.process_exception(state_48314__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48315 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48314,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_48314__$1 = state_48314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48314__$1,(5),res__44797__auto__);
} else {
if((state_val_48315 === (5))){
var inst_48308 = (state_48314[(2)]);
var inst_48309 = com.wsscode.common.async_cljs.throw_err(inst_48308);
var inst_48310 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48309) : f.call(null,inst_48309));
var state_48314__$1 = state_48314;
var statearr_48322_49913 = state_48314__$1;
(statearr_48322_49913[(2)] = inst_48310);


cljs.core.async.impl.ioc_helpers.process_exception(state_48314__$1);

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
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38925__auto____0 = (function (){
var statearr_48323 = [null,null,null,null,null,null,null];
(statearr_48323[(0)] = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38925__auto__);

(statearr_48323[(1)] = (1));

return statearr_48323;
});
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38925__auto____1 = (function (state_48314){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_48314);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e48325){if((e48325 instanceof Object)){
var ex__38928__auto__ = e48325;
var statearr_48327_49918 = state_48314;
(statearr_48327_49918[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48325;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49920 = state_48314;
state_48314 = G__49920;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38925__auto__ = function(state_48314){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38925__auto____1.call(this,state_48314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38925__auto____0;
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38925__auto____1;
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,res__44797__auto__))
})();
var state__38973__auto__ = (function (){var statearr_48330 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_48330[(6)] = c__38971__auto__);

return statearr_48330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,res__44797__auto__))
);

return c__38971__auto__;
} else {
var res = res__44797__auto__;
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
var G__48336 = msg;
if(cljs.core.truth_(data)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48336)," - ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))].join('');
} else {
return G__48336;
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
com.wsscode.pathom.core.process_error = (function com$wsscode$pathom$core$process_error(p__48343,e){
var map__48344 = p__48343;
var map__48344__$1 = (((((!((map__48344 == null))))?(((((map__48344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48344):map__48344);
var env = map__48344__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48344__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return com.wsscode.pathom.core.error_str(e);
}
});
com.wsscode.pathom.core.add_error = (function com$wsscode$pathom$core$add_error(p__48351,e){
var map__48353 = p__48351;
var map__48353__$1 = (((((!((map__48353 == null))))?(((((map__48353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48353):map__48353);
var env = map__48353__$1;
var errors_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48353__$1,new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48353__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
if(cljs.core.truth_(errors_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(errors_STAR_,cljs.core.assoc,path,com.wsscode.pathom.core.process_error(env,e));
} else {
}

return new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882);
});
com.wsscode.pathom.core.wrap_handle_exception = (function com$wsscode$pathom$core$wrap_handle_exception(reader){
return (function com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal(p__48358){
var map__48360 = p__48358;
var map__48360__$1 = (((((!((map__48360 == null))))?(((((map__48360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48360):map__48360);
var env = map__48360__$1;
var fail_fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48360__$1,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465));
if(cljs.core.truth_(fail_fast_QMARK_)){
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
} else {
try{var x = (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
if(com.wsscode.common.async_cljs.chan_QMARK_(x)){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,x,map__48360,map__48360__$1,env,fail_fast_QMARK_){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,x,map__48360,map__48360__$1,env,fail_fast_QMARK_){
return (function (state_48377){
var state_val_48378 = (state_48377[(1)]);
if((state_val_48378 === (1))){
var state_48377__$1 = state_48377;
var statearr_48381_50008 = state_48377__$1;
(statearr_48381_50008[(2)] = null);

(statearr_48381_50008[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48378 === (2))){
var inst_48375 = (state_48377[(2)]);
var state_48377__$1 = state_48377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48377__$1,inst_48375);
} else {
if((state_val_48378 === (3))){
var inst_48366 = (state_48377[(2)]);
var inst_48367 = com.wsscode.pathom.core.add_error(env,inst_48366);
var state_48377__$1 = state_48377;
var statearr_48384_50011 = state_48377__$1;
(statearr_48384_50011[(2)] = inst_48367);


cljs.core.async.impl.ioc_helpers.process_exception(state_48377__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48378 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48377,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_48377__$1 = state_48377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48377__$1,(5),x);
} else {
if((state_val_48378 === (5))){
var inst_48372 = (state_48377[(2)]);
var inst_48373 = com.wsscode.common.async_cljs.throw_err(inst_48372);
var state_48377__$1 = state_48377;
var statearr_48387_50017 = state_48377__$1;
(statearr_48387_50017[(2)] = inst_48373);


cljs.core.async.impl.ioc_helpers.process_exception(state_48377__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__38971__auto__,x,map__48360,map__48360__$1,env,fail_fast_QMARK_))
;
return ((function (switch__38924__auto__,c__38971__auto__,x,map__48360,map__48360__$1,env,fail_fast_QMARK_){
return (function() {
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38925__auto____0 = (function (){
var statearr_48388 = [null,null,null,null,null,null,null];
(statearr_48388[(0)] = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38925__auto__);

(statearr_48388[(1)] = (1));

return statearr_48388;
});
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38925__auto____1 = (function (state_48377){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_48377);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e48391){if((e48391 instanceof Object)){
var ex__38928__auto__ = e48391;
var statearr_48392_50023 = state_48377;
(statearr_48392_50023[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48391;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50027 = state_48377;
state_48377 = G__50027;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38925__auto__ = function(state_48377){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38925__auto____1.call(this,state_48377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38925__auto____0;
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38925__auto____1;
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,x,map__48360,map__48360__$1,env,fail_fast_QMARK_))
})();
var state__38973__auto__ = (function (){var statearr_48396 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_48396[(6)] = c__38971__auto__);

return statearr_48396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,x,map__48360,map__48360__$1,env,fail_fast_QMARK_))
);

return c__38971__auto__;
} else {
return x;
}
}catch (e48364){var e = e48364;
return com.wsscode.pathom.core.add_error(env,e);
}}
});
});
com.wsscode.pathom.core.wrap_mutate_handle_exception = (function com$wsscode$pathom$core$wrap_mutate_handle_exception(mutate){
return (function com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal(p__48403,k,p){
var map__48405 = p__48403;
var map__48405__$1 = (((((!((map__48405 == null))))?(((((map__48405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48405):map__48405);
var env = map__48405__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48405__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
var fail_fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48405__$1,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465));
if(cljs.core.truth_(fail_fast_QMARK_)){
return (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,p) : mutate.call(null,env,k,p));
} else {
try{return com.wsscode.pathom.core.update_action((mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,p) : mutate.call(null,env,k,p)),((function (map__48405,map__48405__$1,env,process_error,fail_fast_QMARK_){
return (function (action){
return ((function (map__48405,map__48405__$1,env,process_error,fail_fast_QMARK_){
return (function (){
try{var res = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
if(com.wsscode.common.async_cljs.chan_QMARK_(res)){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,res,map__48405,map__48405__$1,env,process_error,fail_fast_QMARK_){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,res,map__48405,map__48405__$1,env,process_error,fail_fast_QMARK_){
return (function (state_48436){
var state_val_48437 = (state_48436[(1)]);
if((state_val_48437 === (1))){
var state_48436__$1 = state_48436;
var statearr_48439_50045 = state_48436__$1;
(statearr_48439_50045[(2)] = null);

(statearr_48439_50045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48437 === (2))){
var inst_48434 = (state_48436[(2)]);
var state_48436__$1 = state_48436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48436__$1,inst_48434);
} else {
if((state_val_48437 === (3))){
var inst_48415 = (state_48436[(2)]);
var state_48436__$1 = (function (){var statearr_48441 = state_48436;
(statearr_48441[(7)] = inst_48415);

return statearr_48441;
})();
if(cljs.core.truth_(process_error)){
var statearr_48442_50050 = state_48436__$1;
(statearr_48442_50050[(1)] = (4));

} else {
var statearr_48444_50051 = state_48436__$1;
(statearr_48444_50051[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48437 === (4))){
var inst_48415 = (state_48436[(7)]);
var inst_48417 = (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,inst_48415) : process_error.call(null,env,inst_48415));
var state_48436__$1 = state_48436;
var statearr_48446_50055 = state_48436__$1;
(statearr_48446_50055[(2)] = inst_48417);

(statearr_48446_50055[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48437 === (5))){
var inst_48415 = (state_48436[(7)]);
var inst_48419 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_48421 = com.wsscode.pathom.core.error_str(inst_48415);
var inst_48422 = [inst_48421];
var inst_48423 = cljs.core.PersistentHashMap.fromArrays(inst_48419,inst_48422);
var state_48436__$1 = state_48436;
var statearr_48449_50056 = state_48436__$1;
(statearr_48449_50056[(2)] = inst_48423);

(statearr_48449_50056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48437 === (6))){
var inst_48425 = (state_48436[(2)]);
var state_48436__$1 = state_48436;
var statearr_48451_50058 = state_48436__$1;
(statearr_48451_50058[(2)] = inst_48425);


cljs.core.async.impl.ioc_helpers.process_exception(state_48436__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48437 === (7))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48436,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_48436__$1 = state_48436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48436__$1,(8),res);
} else {
if((state_val_48437 === (8))){
var inst_48431 = (state_48436[(2)]);
var inst_48432 = com.wsscode.common.async_cljs.throw_err(inst_48431);
var state_48436__$1 = state_48436;
var statearr_48454_50064 = state_48436__$1;
(statearr_48454_50064[(2)] = inst_48432);


cljs.core.async.impl.ioc_helpers.process_exception(state_48436__$1);

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
});})(c__38971__auto__,res,map__48405,map__48405__$1,env,process_error,fail_fast_QMARK_))
;
return ((function (switch__38924__auto__,c__38971__auto__,res,map__48405,map__48405__$1,env,process_error,fail_fast_QMARK_){
return (function() {
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38925__auto____0 = (function (){
var statearr_48455 = [null,null,null,null,null,null,null,null];
(statearr_48455[(0)] = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38925__auto__);

(statearr_48455[(1)] = (1));

return statearr_48455;
});
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38925__auto____1 = (function (state_48436){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_48436);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e48456){if((e48456 instanceof Object)){
var ex__38928__auto__ = e48456;
var statearr_48457_50070 = state_48436;
(statearr_48457_50070[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50072 = state_48436;
state_48436 = G__50072;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38925__auto__ = function(state_48436){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38925__auto____1.call(this,state_48436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38925__auto____0;
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38925__auto____1;
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,res,map__48405,map__48405__$1,env,process_error,fail_fast_QMARK_))
})();
var state__38973__auto__ = (function (){var statearr_48458 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_48458[(6)] = c__38971__auto__);

return statearr_48458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,res,map__48405,map__48405__$1,env,process_error,fail_fast_QMARK_))
);

return c__38971__auto__;
} else {
return res;
}
}catch (e48413){var e = e48413;
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),com.wsscode.pathom.core.error_str(e)], null);
}
}});
;})(map__48405,map__48405__$1,env,process_error,fail_fast_QMARK_))
});})(map__48405,map__48405__$1,env,process_error,fail_fast_QMARK_))
);
}catch (e48410){var e = e48410;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (e,map__48405,map__48405__$1,env,process_error,fail_fast_QMARK_){
return (function (){
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),com.wsscode.pathom.core.error_str(e)], null);
}
});})(e,map__48405,map__48405__$1,env,process_error,fail_fast_QMARK_))
], null);
}}
});
});
com.wsscode.pathom.core.wrap_parser_exception = (function com$wsscode$pathom$core$wrap_parser_exception(parser){
return (function com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal(env,tx){
var errors = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var res__44797__auto__ = (function (){var G__48459 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276),errors);
var G__48460 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__48459,G__48460) : parser.call(null,G__48459,G__48460));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44797__auto__)){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,res__44797__auto__,errors){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,res__44797__auto__,errors){
return (function (state_48480){
var state_val_48481 = (state_48480[(1)]);
if((state_val_48481 === (1))){
var state_48480__$1 = state_48480;
var statearr_48485_50080 = state_48480__$1;
(statearr_48485_50080[(2)] = null);

(statearr_48485_50080[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48481 === (2))){
var inst_48478 = (state_48480[(2)]);
var state_48480__$1 = state_48480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48480__$1,inst_48478);
} else {
if((state_val_48481 === (3))){
var inst_48461 = (state_48480[(2)]);
var state_48480__$1 = state_48480;
var statearr_48487_50081 = state_48480__$1;
(statearr_48487_50081[(2)] = inst_48461);


cljs.core.async.impl.ioc_helpers.process_exception(state_48480__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48481 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48480,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_48480__$1 = state_48480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48480__$1,(5),res__44797__auto__);
} else {
if((state_val_48481 === (5))){
var inst_48466 = (state_48480[(2)]);
var inst_48467 = com.wsscode.common.async_cljs.throw_err(inst_48466);
var inst_48469 = cljs.core.deref(errors);
var inst_48470 = cljs.core.seq(inst_48469);
var state_48480__$1 = (function (){var statearr_48490 = state_48480;
(statearr_48490[(7)] = inst_48467);

return statearr_48490;
})();
if(inst_48470){
var statearr_48491_50089 = state_48480__$1;
(statearr_48491_50089[(1)] = (6));

} else {
var statearr_48492_50092 = state_48480__$1;
(statearr_48492_50092[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48481 === (6))){
var inst_48467 = (state_48480[(7)]);
var inst_48472 = cljs.core.deref(errors);
var inst_48473 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_48467,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),inst_48472);
var state_48480__$1 = state_48480;
var statearr_48493_50105 = state_48480__$1;
(statearr_48493_50105[(2)] = inst_48473);

(statearr_48493_50105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48481 === (7))){
var inst_48467 = (state_48480[(7)]);
var state_48480__$1 = state_48480;
var statearr_48494_50119 = state_48480__$1;
(statearr_48494_50119[(2)] = inst_48467);

(statearr_48494_50119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48481 === (8))){
var inst_48476 = (state_48480[(2)]);
var state_48480__$1 = state_48480;
var statearr_48495_50123 = state_48480__$1;
(statearr_48495_50123[(2)] = inst_48476);


cljs.core.async.impl.ioc_helpers.process_exception(state_48480__$1);

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
});})(c__38971__auto__,res__44797__auto__,errors))
;
return ((function (switch__38924__auto__,c__38971__auto__,res__44797__auto__,errors){
return (function() {
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38925__auto____0 = (function (){
var statearr_48496 = [null,null,null,null,null,null,null,null];
(statearr_48496[(0)] = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38925__auto__);

(statearr_48496[(1)] = (1));

return statearr_48496;
});
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38925__auto____1 = (function (state_48480){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_48480);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e48497){if((e48497 instanceof Object)){
var ex__38928__auto__ = e48497;
var statearr_48499_50153 = state_48480;
(statearr_48499_50153[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48497;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50154 = state_48480;
state_48480 = G__50154;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38925__auto__ = function(state_48480){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38925__auto____1.call(this,state_48480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38925__auto____0;
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38925__auto____1;
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,res__44797__auto__,errors))
})();
var state__38973__auto__ = (function (){var statearr_48501 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_48501[(6)] = c__38971__auto__);

return statearr_48501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,res__44797__auto__,errors))
);

return c__38971__auto__;
} else {
var res = res__44797__auto__;
var G__48502 = res;
if(cljs.core.seq(cljs.core.deref(errors))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48502,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),cljs.core.deref(errors));
} else {
return G__48502;
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
var G__50160 = cljs.core.butlast(path_SINGLEQUOTE_);
path_SINGLEQUOTE_ = G__50160;
continue;
}
}
break;
}
})());
});
com.wsscode.pathom.core.raise_errors = (function com$wsscode$pathom$core$raise_errors(data){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__48513){
var vec__48514 = p__48513;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48514,(0),null);
var err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48514,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__48519){
var vec__48521 = p__48519;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48521,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48521,(1),null);
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
var G__48525 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([extra_env,env], 0));
var G__48526 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__48525,G__48526) : parser.call(null,G__48525,G__48526));
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
var G__48529 = (extra_env_wrapper.cljs$core$IFn$_invoke$arity$1 ? extra_env_wrapper.cljs$core$IFn$_invoke$arity$1(env) : extra_env_wrapper.call(null,env));
var G__48530 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__48529,G__48530) : parser.call(null,G__48529,G__48530));
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
var vec__48537 = temp__5718__auto____$1;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48537,(0),null);
var hit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48537,(1),null);
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-hit","com.wsscode.pathom.core/cache-hit",1851998374),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

return com.wsscode.common.async_cljs.throw_err(hit);
} else {
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-miss","com.wsscode.pathom.core/cache-miss",1311426337),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

var res__44797__auto__ = (function (){try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}catch (e48541){var e = e48541;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,key,e);

throw e;
}})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44797__auto__)){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,res__44797__auto__,temp__5718__auto____$1,cache,temp__5718__auto__){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,res__44797__auto__,temp__5718__auto____$1,cache,temp__5718__auto__){
return (function (state_48554){
var state_val_48555 = (state_48554[(1)]);
if((state_val_48555 === (1))){
var state_48554__$1 = state_48554;
var statearr_48558_50215 = state_48554__$1;
(statearr_48558_50215[(2)] = null);

(statearr_48558_50215[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48555 === (2))){
var inst_48552 = (state_48554[(2)]);
var state_48554__$1 = state_48554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48554__$1,inst_48552);
} else {
if((state_val_48555 === (3))){
var inst_48543 = (state_48554[(2)]);
var state_48554__$1 = state_48554;
var statearr_48559_50217 = state_48554__$1;
(statearr_48559_50217[(2)] = inst_48543);


cljs.core.async.impl.ioc_helpers.process_exception(state_48554__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48555 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48554,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_48554__$1 = state_48554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48554__$1,(5),res__44797__auto__);
} else {
if((state_val_48555 === (5))){
var inst_48548 = (state_48554[(2)]);
var inst_48549 = com.wsscode.common.async_cljs.throw_err(inst_48548);
var inst_48550 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,key,inst_48549);
var state_48554__$1 = (function (){var statearr_48562 = state_48554;
(statearr_48562[(7)] = inst_48550);

return statearr_48562;
})();
var statearr_48564_50222 = state_48554__$1;
(statearr_48564_50222[(2)] = inst_48549);


cljs.core.async.impl.ioc_helpers.process_exception(state_48554__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__38971__auto__,res__44797__auto__,temp__5718__auto____$1,cache,temp__5718__auto__))
;
return ((function (switch__38924__auto__,c__38971__auto__,res__44797__auto__,temp__5718__auto____$1,cache,temp__5718__auto__){
return (function() {
var com$wsscode$pathom$core$cached_STAR__$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$core$cached_STAR__$_state_machine__38925__auto____0 = (function (){
var statearr_48566 = [null,null,null,null,null,null,null,null];
(statearr_48566[(0)] = com$wsscode$pathom$core$cached_STAR__$_state_machine__38925__auto__);

(statearr_48566[(1)] = (1));

return statearr_48566;
});
var com$wsscode$pathom$core$cached_STAR__$_state_machine__38925__auto____1 = (function (state_48554){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_48554);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e48567){if((e48567 instanceof Object)){
var ex__38928__auto__ = e48567;
var statearr_48568_50225 = state_48554;
(statearr_48568_50225[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48567;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50226 = state_48554;
state_48554 = G__50226;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_STAR__$_state_machine__38925__auto__ = function(state_48554){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_STAR__$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_STAR__$_state_machine__38925__auto____1.call(this,state_48554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_STAR__$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_STAR__$_state_machine__38925__auto____0;
com$wsscode$pathom$core$cached_STAR__$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_STAR__$_state_machine__38925__auto____1;
return com$wsscode$pathom$core$cached_STAR__$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,res__44797__auto__,temp__5718__auto____$1,cache,temp__5718__auto__))
})();
var state__38973__auto__ = (function (){var statearr_48569 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_48569[(6)] = c__38971__auto__);

return statearr_48569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,res__44797__auto__,temp__5718__auto____$1,cache,temp__5718__auto__))
);

return c__38971__auto__;
} else {
var hit = res__44797__auto__;
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

var ch__44817__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__38971__auto___50232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto___50232,ch__44817__auto__,cache,temp__5718__auto__){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto___50232,ch__44817__auto__,cache,temp__5718__auto__){
return (function (state_48594){
var state_val_48595 = (state_48594[(1)]);
if((state_val_48595 === (1))){
var state_48594__$1 = state_48594;
var statearr_48600_50234 = state_48594__$1;
(statearr_48600_50234[(2)] = null);

(statearr_48600_50234[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (2))){
var inst_48591 = (state_48594[(2)]);
var inst_48592 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__44817__auto__,inst_48591);
var state_48594__$1 = state_48594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48594__$1,inst_48592);
} else {
if((state_val_48595 === (3))){
var inst_48576 = (state_48594[(2)]);
var state_48594__$1 = state_48594;
var statearr_48602_50243 = state_48594__$1;
(statearr_48602_50243[(2)] = inst_48576);


cljs.core.async.impl.ioc_helpers.process_exception(state_48594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (4))){
var inst_48582 = (state_48594[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48594,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_48582__$1 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var inst_48583 = com.wsscode.common.async_cljs.chan_QMARK_(inst_48582__$1);
var state_48594__$1 = (function (){var statearr_48603 = state_48594;
(statearr_48603[(7)] = inst_48582__$1);

return statearr_48603;
})();
if(inst_48583){
var statearr_48605_50245 = state_48594__$1;
(statearr_48605_50245[(1)] = (5));

} else {
var statearr_48606_50246 = state_48594__$1;
(statearr_48606_50246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (5))){
var inst_48582 = (state_48594[(7)]);
var state_48594__$1 = state_48594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48594__$1,(8),inst_48582);
} else {
if((state_val_48595 === (6))){
var inst_48582 = (state_48594[(7)]);
var state_48594__$1 = state_48594;
var statearr_48611_50252 = state_48594__$1;
(statearr_48611_50252[(2)] = inst_48582);

(statearr_48611_50252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (7))){
var inst_48589 = (state_48594[(2)]);
var state_48594__$1 = state_48594;
var statearr_48614_50254 = state_48594__$1;
(statearr_48614_50254[(2)] = inst_48589);


cljs.core.async.impl.ioc_helpers.process_exception(state_48594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48595 === (8))){
var inst_48586 = (state_48594[(2)]);
var state_48594__$1 = state_48594;
var statearr_48617_50255 = state_48594__$1;
(statearr_48617_50255[(2)] = inst_48586);

(statearr_48617_50255[(1)] = (7));


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
});})(c__38971__auto___50232,ch__44817__auto__,cache,temp__5718__auto__))
;
return ((function (switch__38924__auto__,c__38971__auto___50232,ch__44817__auto__,cache,temp__5718__auto__){
return (function() {
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38925__auto____0 = (function (){
var statearr_48620 = [null,null,null,null,null,null,null,null];
(statearr_48620[(0)] = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38925__auto__);

(statearr_48620[(1)] = (1));

return statearr_48620;
});
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38925__auto____1 = (function (state_48594){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_48594);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e48622){if((e48622 instanceof Object)){
var ex__38928__auto__ = e48622;
var statearr_48623_50265 = state_48594;
(statearr_48623_50265[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48622;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50267 = state_48594;
state_48594 = G__50267;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38925__auto__ = function(state_48594){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38925__auto____1.call(this,state_48594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38925__auto____0;
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38925__auto____1;
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto___50232,ch__44817__auto__,cache,temp__5718__auto__))
})();
var state__38973__auto__ = (function (){var statearr_48627 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_48627[(6)] = c__38971__auto___50232);

return statearr_48627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto___50232,ch__44817__auto__,cache,temp__5718__auto__))
);


return ch__44817__auto__;
}
});})(cache,temp__5718__auto__))
);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache),key);
} else {
var ch__44817__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__38971__auto___50272 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto___50272,ch__44817__auto__,temp__5718__auto__){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto___50272,ch__44817__auto__,temp__5718__auto__){
return (function (state_48645){
var state_val_48647 = (state_48645[(1)]);
if((state_val_48647 === (1))){
var state_48645__$1 = state_48645;
var statearr_48651_50274 = state_48645__$1;
(statearr_48651_50274[(2)] = null);

(statearr_48651_50274[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48647 === (2))){
var inst_48642 = (state_48645[(2)]);
var inst_48643 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__44817__auto__,inst_48642);
var state_48645__$1 = state_48645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48645__$1,inst_48643);
} else {
if((state_val_48647 === (3))){
var inst_48629 = (state_48645[(2)]);
var state_48645__$1 = state_48645;
var statearr_48652_50283 = state_48645__$1;
(statearr_48652_50283[(2)] = inst_48629);


cljs.core.async.impl.ioc_helpers.process_exception(state_48645__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48647 === (4))){
var inst_48633 = (state_48645[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48645,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_48633__$1 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var inst_48634 = com.wsscode.common.async_cljs.chan_QMARK_(inst_48633__$1);
var state_48645__$1 = (function (){var statearr_48653 = state_48645;
(statearr_48653[(7)] = inst_48633__$1);

return statearr_48653;
})();
if(inst_48634){
var statearr_48654_50286 = state_48645__$1;
(statearr_48654_50286[(1)] = (5));

} else {
var statearr_48655_50288 = state_48645__$1;
(statearr_48655_50288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48647 === (5))){
var inst_48633 = (state_48645[(7)]);
var state_48645__$1 = state_48645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48645__$1,(8),inst_48633);
} else {
if((state_val_48647 === (6))){
var inst_48633 = (state_48645[(7)]);
var state_48645__$1 = state_48645;
var statearr_48657_50290 = state_48645__$1;
(statearr_48657_50290[(2)] = inst_48633);

(statearr_48657_50290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48647 === (7))){
var inst_48640 = (state_48645[(2)]);
var state_48645__$1 = state_48645;
var statearr_48660_50311 = state_48645__$1;
(statearr_48660_50311[(2)] = inst_48640);


cljs.core.async.impl.ioc_helpers.process_exception(state_48645__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48647 === (8))){
var inst_48637 = (state_48645[(2)]);
var state_48645__$1 = state_48645;
var statearr_48661_50315 = state_48645__$1;
(statearr_48661_50315[(2)] = inst_48637);

(statearr_48661_50315[(1)] = (7));


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
});})(c__38971__auto___50272,ch__44817__auto__,temp__5718__auto__))
;
return ((function (switch__38924__auto__,c__38971__auto___50272,ch__44817__auto__,temp__5718__auto__){
return (function() {
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38925__auto____0 = (function (){
var statearr_48663 = [null,null,null,null,null,null,null,null];
(statearr_48663[(0)] = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38925__auto__);

(statearr_48663[(1)] = (1));

return statearr_48663;
});
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38925__auto____1 = (function (state_48645){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_48645);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e48665){if((e48665 instanceof Object)){
var ex__38928__auto__ = e48665;
var statearr_48666_50316 = state_48645;
(statearr_48666_50316[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48665;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50317 = state_48645;
state_48645 = G__50317;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38925__auto__ = function(state_48645){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38925__auto____1.call(this,state_48645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38925__auto____0;
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38925__auto____1;
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto___50272,ch__44817__auto__,temp__5718__auto__))
})();
var state__38973__auto__ = (function (){var statearr_48670 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_48670[(6)] = c__38971__auto___50272);

return statearr_48670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto___50272,ch__44817__auto__,temp__5718__auto__))
);


return ch__44817__auto__;
}
});
com.wsscode.pathom.core.cached_async = (function com$wsscode$pathom$core$cached_async(p__48672,key,f){
var map__48675 = p__48672;
var map__48675__$1 = (((((!((map__48675 == null))))?(((((map__48675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48675):map__48675);
var env = map__48675__$1;
var async_request_cache_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48675__$1,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch","com.wsscode.pathom.core/async-request-cache-ch",-1864666369));
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48675__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
if(cljs.core.truth_(async_request_cache_ch)){
if(cljs.core.contains_QMARK_(cljs.core.deref(request_cache),key)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(request_cache),key);
} else {
var out = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(async_request_cache_ch,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,key,f,out], null));

var ch__44817__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__38971__auto___50327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto___50327,ch__44817__auto__,out,map__48675,map__48675__$1,env,async_request_cache_ch,request_cache){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto___50327,ch__44817__auto__,out,map__48675,map__48675__$1,env,async_request_cache_ch,request_cache){
return (function (state_48690){
var state_val_48691 = (state_48690[(1)]);
if((state_val_48691 === (1))){
var state_48690__$1 = state_48690;
var statearr_48696_50328 = state_48690__$1;
(statearr_48696_50328[(2)] = null);

(statearr_48696_50328[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48691 === (2))){
var inst_48687 = (state_48690[(2)]);
var inst_48688 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__44817__auto__,inst_48687);
var state_48690__$1 = state_48690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48690__$1,inst_48688);
} else {
if((state_val_48691 === (3))){
var inst_48678 = (state_48690[(2)]);
var state_48690__$1 = state_48690;
var statearr_48698_50330 = state_48690__$1;
(statearr_48698_50330[(2)] = inst_48678);


cljs.core.async.impl.ioc_helpers.process_exception(state_48690__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48691 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48690,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_48690__$1 = state_48690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48690__$1,(6),out);
} else {
if((state_val_48691 === (5))){
var inst_48685 = (state_48690[(2)]);
var state_48690__$1 = state_48690;
var statearr_48699_50344 = state_48690__$1;
(statearr_48699_50344[(2)] = inst_48685);


cljs.core.async.impl.ioc_helpers.process_exception(state_48690__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48691 === (6))){
var inst_48683 = (state_48690[(2)]);
var state_48690__$1 = state_48690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48690__$1,(5),inst_48683);
} else {
return null;
}
}
}
}
}
}
});})(c__38971__auto___50327,ch__44817__auto__,out,map__48675,map__48675__$1,env,async_request_cache_ch,request_cache))
;
return ((function (switch__38924__auto__,c__38971__auto___50327,ch__44817__auto__,out,map__48675,map__48675__$1,env,async_request_cache_ch,request_cache){
return (function() {
var com$wsscode$pathom$core$cached_async_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$core$cached_async_$_state_machine__38925__auto____0 = (function (){
var statearr_48703 = [null,null,null,null,null,null,null];
(statearr_48703[(0)] = com$wsscode$pathom$core$cached_async_$_state_machine__38925__auto__);

(statearr_48703[(1)] = (1));

return statearr_48703;
});
var com$wsscode$pathom$core$cached_async_$_state_machine__38925__auto____1 = (function (state_48690){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_48690);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e48704){if((e48704 instanceof Object)){
var ex__38928__auto__ = e48704;
var statearr_48706_50348 = state_48690;
(statearr_48706_50348[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48704;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50349 = state_48690;
state_48690 = G__50349;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_$_state_machine__38925__auto__ = function(state_48690){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_$_state_machine__38925__auto____1.call(this,state_48690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_$_state_machine__38925__auto____0;
com$wsscode$pathom$core$cached_async_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_$_state_machine__38925__auto____1;
return com$wsscode$pathom$core$cached_async_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto___50327,ch__44817__auto__,out,map__48675,map__48675__$1,env,async_request_cache_ch,request_cache))
})();
var state__38973__auto__ = (function (){var statearr_48709 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_48709[(6)] = c__38971__auto___50327);

return statearr_48709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto___50327,ch__44817__auto__,out,map__48675,map__48675__$1,env,async_request_cache_ch,request_cache))
);


return ch__44817__auto__;
}
} else {
return com.wsscode.pathom.core.cached_async_STAR_(env,key,f);
}
});
com.wsscode.pathom.core.request_cache_async_loop = (function com$wsscode$pathom$core$request_cache_async_loop(ch){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__){
return (function (state_48734){
var state_val_48735 = (state_48734[(1)]);
if((state_val_48735 === (1))){
var state_48734__$1 = state_48734;
var statearr_48736_50354 = state_48734__$1;
(statearr_48736_50354[(2)] = null);

(statearr_48736_50354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48735 === (2))){
var state_48734__$1 = state_48734;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48734__$1,(4),ch);
} else {
if((state_val_48735 === (3))){
var inst_48732 = (state_48734[(2)]);
var state_48734__$1 = state_48734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48734__$1,inst_48732);
} else {
if((state_val_48735 === (4))){
var inst_48715 = (state_48734[(7)]);
var inst_48715__$1 = (state_48734[(2)]);
var state_48734__$1 = (function (){var statearr_48739 = state_48734;
(statearr_48739[(7)] = inst_48715__$1);

return statearr_48739;
})();
if(cljs.core.truth_(inst_48715__$1)){
var statearr_48740_50361 = state_48734__$1;
(statearr_48740_50361[(1)] = (5));

} else {
var statearr_48741_50362 = state_48734__$1;
(statearr_48741_50362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48735 === (5))){
var inst_48715 = (state_48734[(7)]);
var inst_48720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48715,(0),null);
var inst_48721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48715,(1),null);
var inst_48722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48715,(2),null);
var inst_48723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48715,(3),null);
var inst_48724 = com.wsscode.pathom.core.cached_async_STAR_(inst_48720,inst_48721,inst_48722);
var state_48734__$1 = state_48734;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48734__$1,(8),inst_48723,inst_48724);
} else {
if((state_val_48735 === (6))){
var state_48734__$1 = state_48734;
var statearr_48742_50368 = state_48734__$1;
(statearr_48742_50368[(2)] = null);

(statearr_48742_50368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48735 === (7))){
var inst_48730 = (state_48734[(2)]);
var state_48734__$1 = state_48734;
var statearr_48743_50372 = state_48734__$1;
(statearr_48743_50372[(2)] = inst_48730);

(statearr_48743_50372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48735 === (8))){
var inst_48726 = (state_48734[(2)]);
var state_48734__$1 = (function (){var statearr_48744 = state_48734;
(statearr_48744[(8)] = inst_48726);

return statearr_48744;
})();
var statearr_48745_50373 = state_48734__$1;
(statearr_48745_50373[(2)] = null);

(statearr_48745_50373[(1)] = (2));


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
});})(c__38971__auto__))
;
return ((function (switch__38924__auto__,c__38971__auto__){
return (function() {
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38925__auto____0 = (function (){
var statearr_48746 = [null,null,null,null,null,null,null,null,null];
(statearr_48746[(0)] = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38925__auto__);

(statearr_48746[(1)] = (1));

return statearr_48746;
});
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38925__auto____1 = (function (state_48734){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_48734);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e48748){if((e48748 instanceof Object)){
var ex__38928__auto__ = e48748;
var statearr_48749_50374 = state_48734;
(statearr_48749_50374[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48748;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50382 = state_48734;
state_48734 = G__50382;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38925__auto__ = function(state_48734){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38925__auto____1.call(this,state_48734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38925__auto____0;
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38925__auto____1;
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__))
})();
var state__38973__auto__ = (function (){var statearr_48750 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_48750[(6)] = c__38971__auto__);

return statearr_48750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__))
);

return c__38971__auto__;
});
com.wsscode.pathom.core.cache_hit = (function com$wsscode$pathom$core$cache_hit(p__48754,key,value){
var map__48756 = p__48754;
var map__48756__$1 = (((((!((map__48756 == null))))?(((((map__48756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48756):map__48756);
var env = map__48756__$1;
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48756__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-miss","com.wsscode.pathom.core/cache-miss",1311426337),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(request_cache,cljs.core.assoc,key,value);

return value;
});
com.wsscode.pathom.core.cache_contains_QMARK_ = (function com$wsscode$pathom$core$cache_contains_QMARK_(p__48761,key){
var map__48762 = p__48761;
var map__48762__$1 = (((((!((map__48762 == null))))?(((((map__48762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48762):map__48762);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48762__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.contains_QMARK_(cljs.core.deref(request_cache),key);
});
com.wsscode.pathom.core.cache_read = (function com$wsscode$pathom$core$cache_read(p__48765,key){
var map__48766 = p__48765;
var map__48766__$1 = (((((!((map__48766 == null))))?(((((map__48766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48766):map__48766);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48766__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(request_cache),key);
});
com.wsscode.pathom.core.wrap_add_path = (function com$wsscode$pathom$core$wrap_add_path(reader){
return (function (p__48770){
var map__48771 = p__48770;
var map__48771__$1 = (((((!((map__48771 == null))))?(((((map__48771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48771):map__48771);
var env = map__48771__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48771__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var G__48774 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(G__48774) : reader.call(null,G__48774));
});
});
com.wsscode.pathom.core.group_plugins_by_action = (function com$wsscode$pathom$core$group_plugins_by_action(plugins){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g,p){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$1,p__48776){
var vec__48777 = p__48776;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48777,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48777,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(g__$1,k,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
}),g,p);
}),cljs.core.PersistentArrayMap.EMPTY,plugins);
});
com.wsscode.pathom.core.wrap_normalize_env = (function com$wsscode$pathom$core$wrap_normalize_env(var_args){
var G__48781 = arguments.length;
switch (G__48781) {
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
var G__48782 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),tx,new cljs.core.Keyword("com.wsscode.pathom.core","root-query","com.wsscode.pathom.core/root-query",-100266682),tx], null),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","plugin-actions","com.wsscode.pathom.core/plugin-actions",-876552970),com.wsscode.pathom.core.group_plugins_by_action(plugins),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),plugins,new cljs.core.Keyword(null,"target","target",253001721),target], null)], 0));
var G__48783 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__48782,G__48783) : parser.call(null,G__48782,G__48783));
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
var res__44797__auto__ = (function (){var G__48784 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.parser","done-signal*","com.wsscode.pathom.parser/done-signal*",2069309538),signal,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","active-paths","com.wsscode.pathom.parser/active-paths",457466204),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.PersistentVector.EMPTY], 0));
var G__48785 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__48784,G__48785) : parser.call(null,G__48784,G__48785));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44797__auto__)){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,res__44797__auto__,signal){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,res__44797__auto__,signal){
return (function (state_48797){
var state_val_48798 = (state_48797[(1)]);
if((state_val_48798 === (1))){
var state_48797__$1 = state_48797;
var statearr_48799_50414 = state_48797__$1;
(statearr_48799_50414[(2)] = null);

(statearr_48799_50414[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48798 === (2))){
var inst_48795 = (state_48797[(2)]);
var state_48797__$1 = state_48797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48797__$1,inst_48795);
} else {
if((state_val_48798 === (3))){
var inst_48786 = (state_48797[(2)]);
var state_48797__$1 = state_48797;
var statearr_48800_50415 = state_48797__$1;
(statearr_48800_50415[(2)] = inst_48786);


cljs.core.async.impl.ioc_helpers.process_exception(state_48797__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48798 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48797,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_48797__$1 = state_48797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48797__$1,(5),res__44797__auto__);
} else {
if((state_val_48798 === (5))){
var inst_48791 = (state_48797[(2)]);
var inst_48792 = com.wsscode.common.async_cljs.throw_err(inst_48791);
var inst_48793 = cljs.core.reset_BANG_(signal,true);
var state_48797__$1 = (function (){var statearr_48801 = state_48797;
(statearr_48801[(7)] = inst_48793);

return statearr_48801;
})();
var statearr_48802_50420 = state_48797__$1;
(statearr_48802_50420[(2)] = inst_48792);


cljs.core.async.impl.ioc_helpers.process_exception(state_48797__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__38971__auto__,res__44797__auto__,signal))
;
return ((function (switch__38924__auto__,c__38971__auto__,res__44797__auto__,signal){
return (function() {
var com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38925__auto____0 = (function (){
var statearr_48803 = [null,null,null,null,null,null,null,null];
(statearr_48803[(0)] = com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38925__auto__);

(statearr_48803[(1)] = (1));

return statearr_48803;
});
var com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38925__auto____1 = (function (state_48797){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_48797);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e48804){if((e48804 instanceof Object)){
var ex__38928__auto__ = e48804;
var statearr_48805_50428 = state_48797;
(statearr_48805_50428[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48804;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50429 = state_48797;
state_48797 = G__50429;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38925__auto__ = function(state_48797){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38925__auto____1.call(this,state_48797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38925__auto____0;
com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38925__auto____1;
return com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,res__44797__auto__,signal))
})();
var state__38973__auto__ = (function (){var statearr_48806 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_48806[(6)] = c__38971__auto__);

return statearr_48806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,res__44797__auto__,signal))
);

return c__38971__auto__;
} else {
var res = res__44797__auto__;
cljs.core.reset_BANG_(signal,true);

return res;
}
});
});
com.wsscode.pathom.core.wrap_setup_async_cache = (function com$wsscode$pathom$core$wrap_setup_async_cache(parser){
return (function com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal(env,tx){
var async_cache_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch-size","com.wsscode.pathom.core/async-request-cache-ch-size",-437531159),(1024)));
com.wsscode.pathom.core.request_cache_async_loop(async_cache_ch);

var res__44797__auto__ = (function (){var G__48807 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch","com.wsscode.pathom.core/async-request-cache-ch",-1864666369),async_cache_ch);
var G__48808 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__48807,G__48808) : parser.call(null,G__48807,G__48808));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44797__auto__)){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,res__44797__auto__,async_cache_ch){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,res__44797__auto__,async_cache_ch){
return (function (state_48820){
var state_val_48821 = (state_48820[(1)]);
if((state_val_48821 === (1))){
var state_48820__$1 = state_48820;
var statearr_48822_50438 = state_48820__$1;
(statearr_48822_50438[(2)] = null);

(statearr_48822_50438[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48821 === (2))){
var inst_48818 = (state_48820[(2)]);
var state_48820__$1 = state_48820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48820__$1,inst_48818);
} else {
if((state_val_48821 === (3))){
var inst_48809 = (state_48820[(2)]);
var state_48820__$1 = state_48820;
var statearr_48823_50439 = state_48820__$1;
(statearr_48823_50439[(2)] = inst_48809);


cljs.core.async.impl.ioc_helpers.process_exception(state_48820__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48821 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48820,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_48820__$1 = state_48820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48820__$1,(5),res__44797__auto__);
} else {
if((state_val_48821 === (5))){
var inst_48814 = (state_48820[(2)]);
var inst_48815 = com.wsscode.common.async_cljs.throw_err(inst_48814);
var inst_48816 = cljs.core.async.close_BANG_(async_cache_ch);
var state_48820__$1 = (function (){var statearr_48824 = state_48820;
(statearr_48824[(7)] = inst_48816);

return statearr_48824;
})();
var statearr_48825_50444 = state_48820__$1;
(statearr_48825_50444[(2)] = inst_48815);


cljs.core.async.impl.ioc_helpers.process_exception(state_48820__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__38971__auto__,res__44797__auto__,async_cache_ch))
;
return ((function (switch__38924__auto__,c__38971__auto__,res__44797__auto__,async_cache_ch){
return (function() {
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38925__auto____0 = (function (){
var statearr_48826 = [null,null,null,null,null,null,null,null];
(statearr_48826[(0)] = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38925__auto__);

(statearr_48826[(1)] = (1));

return statearr_48826;
});
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38925__auto____1 = (function (state_48820){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_48820);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e48827){if((e48827 instanceof Object)){
var ex__38928__auto__ = e48827;
var statearr_48828_50450 = state_48820;
(statearr_48828_50450[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48827;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50451 = state_48820;
state_48820 = G__50451;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38925__auto__ = function(state_48820){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38925__auto____1.call(this,state_48820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38925__auto____0;
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38925__auto____1;
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,res__44797__auto__,async_cache_ch))
})();
var state__38973__auto__ = (function (){var statearr_48829 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_48829[(6)] = c__38971__auto__);

return statearr_48829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,res__44797__auto__,async_cache_ch))
);

return c__38971__auto__;
} else {
var res = res__44797__auto__;
cljs.core.async.close_BANG_(async_cache_ch);

return res;
}
});
});
com.wsscode.pathom.core.wrap_reduce_params = (function com$wsscode$pathom$core$wrap_reduce_params(reader){
return (function() {
var G__50454 = null;
var G__50454__1 = (function (env){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env))], null);
});
var G__50454__3 = (function (env,_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env))], null);
});
G__50454 = function(env,_,___$1){
switch(arguments.length){
case 1:
return G__50454__1.call(this,env);
case 3:
return G__50454__3.call(this,env,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50454.cljs$core$IFn$_invoke$arity$1 = G__50454__1;
G__50454.cljs$core$IFn$_invoke$arity$3 = G__50454__3;
return G__50454;
})()
});
com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_ = (function com$wsscode$pathom$core$pathom_read_SINGLEQUOTE_(p__48830){
var map__48831 = p__48830;
var map__48831__$1 = (((((!((map__48831 == null))))?(((((map__48831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48831):map__48831);
var env = map__48831__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48831__$1,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410));
return com.wsscode.pathom.core.read_from(env,reader);
});
com.wsscode.pathom.core.apply_plugins = (function com$wsscode$pathom$core$apply_plugins(var_args){
var args__4736__auto__ = [];
var len__4730__auto___50463 = arguments.length;
var i__4731__auto___50464 = (0);
while(true){
if((i__4731__auto___50464 < len__4730__auto___50463)){
args__4736__auto__.push((arguments[i__4731__auto___50464]));

var G__50466 = (i__4731__auto___50464 + (1));
i__4731__auto___50464 = G__50466;
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
com.wsscode.pathom.core.apply_plugins.cljs$lang$applyTo = (function (seq48833){
var G__48834 = cljs.core.first(seq48833);
var seq48833__$1 = cljs.core.next(seq48833);
var G__48835 = cljs.core.first(seq48833__$1);
var seq48833__$2 = cljs.core.next(seq48833__$1);
var G__48836 = cljs.core.first(seq48833__$2);
var seq48833__$3 = cljs.core.next(seq48833__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48834,G__48835,G__48836,seq48833__$3);
});

com.wsscode.pathom.core.exec_plugin_actions = (function com$wsscode$pathom$core$exec_plugin_actions(var_args){
var args__4736__auto__ = [];
var len__4730__auto___50467 = arguments.length;
var i__4731__auto___50468 = (0);
while(true){
if((i__4731__auto___50468 < len__4730__auto___50467)){
args__4736__auto__.push((arguments[i__4731__auto___50468]));

var G__50473 = (i__4731__auto___50468 + (1));
i__4731__auto___50468 = G__50473;
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
com.wsscode.pathom.core.exec_plugin_actions.cljs$lang$applyTo = (function (seq48837){
var G__48838 = cljs.core.first(seq48837);
var seq48837__$1 = cljs.core.next(seq48837);
var G__48839 = cljs.core.first(seq48837__$1);
var seq48837__$2 = cljs.core.next(seq48837__$1);
var G__48840 = cljs.core.first(seq48837__$2);
var seq48837__$3 = cljs.core.next(seq48837__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48838,G__48839,G__48840,seq48837__$3);
});

com.wsscode.pathom.core.easy_plugins = (function com$wsscode$pathom$core$easy_plugins(p__48841){
var map__48842 = p__48841;
var map__48842__$1 = (((((!((map__48842 == null))))?(((((map__48842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48842):map__48842);
var plugins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48842__$1,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48842__$1,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378));
var G__48844 = plugins;
var G__48844__$1 = ((cljs.core.fn_QMARK_(env))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_wrap_plugin(env)], null),G__48844):G__48844);
if(cljs.core.map_QMARK_(env)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_plugin(env)], null),G__48844__$1);
} else {
return G__48844__$1;
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
var G__48845 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),map], null);
var G__48846 = selection;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__48845,G__48846) : parser.call(null,G__48845,G__48846));
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
var G__48848 = arguments.length;
switch (G__48848) {
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
return (function (p__48849){
var map__48850 = p__48849;
var map__48850__$1 = (((((!((map__48850 == null))))?(((((map__48850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48850):map__48850);
var env = map__48850__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48850__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
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
com.wsscode.pathom.core.pathom_read = (function com$wsscode$pathom$core$pathom_read(p__48852,_,___$1){
var map__48853 = p__48852;
var map__48853__$1 = (((((!((map__48853 == null))))?(((((map__48853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48853):map__48853);
var env = map__48853__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48853__$1,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410));
var process_reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48853__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-reader","com.wsscode.pathom.core/process-reader",348867871));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var env__$1 = com.wsscode.pathom.core.normalize_env(env);
return com.wsscode.pathom.core.read_from(env__$1,(cljs.core.truth_(process_reader)?(process_reader.cljs$core$IFn$_invoke$arity$1 ? process_reader.cljs$core$IFn$_invoke$arity$1(reader) : process_reader.call(null,reader)):reader));
})()], null);
});
/**
 * DEPRECATED: use ident-value instead
 */
com.wsscode.pathom.core.ast_key_id = (function com$wsscode$pathom$core$ast_key_id(ast){
var key = (function (){var G__48855 = ast;
if((G__48855 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__48855);
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

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",-1769729738,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"attributes","attributes",-74013604)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__48856){
return cljs.core.coll_QMARK_(G__48856);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846))], null),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)),cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","entity-attr","com.wsscode.pathom.core/entity-attr",116696515,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"default","default",-1987822328)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),cljs.spec.alpha.maybe_impl(cljs.core.any_QMARK_,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","entity!","com.wsscode.pathom.core/entity!",601467064,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"attributes","attributes",-74013604)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__48857){
return cljs.core.coll_QMARK_(G__48857);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846))], null),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)),cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","entity-attr!","com.wsscode.pathom.core/entity-attr!",2073654855,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"attribute","attribute",-2074029119)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","swap-entity!","com.wsscode.pathom.core/swap-entity!",819089173,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.core.fn_QMARK_,cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","collapse-error-path","com.wsscode.pathom.core/collapse-error-path",-1124133360,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.core.vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","raise-errors","com.wsscode.pathom.core/raise-errors",77570572,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48858){
return cljs.core.map_QMARK_(G__48858);
})], null),(function (G__48858){
return cljs.core.map_QMARK_(G__48858);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null)]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,null,null));
} else {
}

//# sourceMappingURL=com.wsscode.pathom.core.js.map
