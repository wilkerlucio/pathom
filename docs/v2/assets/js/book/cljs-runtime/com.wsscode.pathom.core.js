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

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__47030){
return cljs.core.map_QMARK_(G__47030);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__47031){
return cljs.core.vector_QMARK_(G__47031);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","optional?","com.wsscode.pathom.core/optional?",910087942),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"list","list",765357683)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","process-reader","com.wsscode.pathom.core/process-reader",348867871),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader","reader",169660853)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),null,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"gen","gen",142575302),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),"Generated sample error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some","some",-1951079573),"data"], null)),"null"], null), null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Generated sample error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some","some",-1951079573),"data"], null))]));
}),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__47032){
return cljs.core.map_QMARK_(G__47032);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),null));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("cljs.core","IAtom","cljs.core/IAtom",-1037999645,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__47028_SHARP_){
return (p1__47028_SHARP_ instanceof cljs.core.IAtom);
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

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","plugin","com.wsscode.pathom.core/plugin",-881556304),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__47033){
return cljs.core.map_QMARK_(G__47033);
})], null),(function (G__47033){
return cljs.core.map_QMARK_(G__47033);
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
com.wsscode.pathom.core.ast_properties = (function com$wsscode$pathom$core$ast_properties(p__47034){
var map__47035 = p__47034;
var map__47035__$1 = (((((!((map__47035 == null))))?(((((map__47035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47035):map__47035);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47035__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__47035,map__47035__$1,children){
return (function (attrs,p__47037){
var map__47038 = p__47037;
var map__47038__$1 = (((((!((map__47038 == null))))?(((((map__47038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47038):map__47038);
var node = map__47038__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47038__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47038__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__47040 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs,key);
if(cljs.core.truth_(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__47040,(com.wsscode.pathom.core.ast_properties.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.ast_properties.cljs$core$IFn$_invoke$arity$1(node) : com.wsscode.pathom.core.ast_properties.call(null,node)));
} else {
return G__47040;
}
});})(map__47035,map__47035__$1,children))
,cljs.core.PersistentHashSet.EMPTY,children);
});
com.wsscode.pathom.core.deep_merge = (function com$wsscode$pathom$core$deep_merge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49237 = arguments.length;
var i__4731__auto___49238 = (0);
while(true){
if((i__4731__auto___49238 < len__4730__auto___49237)){
args__4736__auto__.push((arguments[i__4731__auto___49238]));

var G__49239 = (i__4731__auto___49238 + (1));
i__4731__auto___49238 = G__49239;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.wsscode.pathom.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.wsscode.pathom.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (xs){

if(cljs.core.every_QMARK_((function (p1__47041_SHARP_){
return ((cljs.core.map_QMARK_(p1__47041_SHARP_)) || ((p1__47041_SHARP_ == null)));
}),xs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,com.wsscode.pathom.core.deep_merge,xs);
} else {
return cljs.core.last(xs);
}
});

com.wsscode.pathom.core.deep_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.wsscode.pathom.core.deep_merge.cljs$lang$applyTo = (function (seq47042){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47042));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__47046_SHARP_){
return cljs.core.filterv(f,p1__47046_SHARP_);
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
var len__4730__auto___49250 = arguments.length;
var i__4731__auto___49251 = (0);
while(true){
if((i__4731__auto___49251 < len__4730__auto___49250)){
args__4736__auto__.push((arguments[i__4731__auto___49251]));

var G__49252 = (i__4731__auto___49251 + (1));
i__4731__auto___49251 = G__49252;
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
var vec__47053 = x;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47053,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47053,(1),null);
return (new cljs.core.List(null,k,(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p,args),null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,x,(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.PersistentArrayMap.EMPTY,args),null,(1),null)),(2),null));
}
});

com.wsscode.pathom.core.update_attribute_param.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.core.update_attribute_param.cljs$lang$applyTo = (function (seq47047){
var G__47048 = cljs.core.first(seq47047);
var seq47047__$1 = cljs.core.next(seq47047);
var G__47049 = cljs.core.first(seq47047__$1);
var seq47047__$2 = cljs.core.next(seq47047__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47048,G__47049,seq47047__$2);
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
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),(function (){var G__47066 = ast;
var G__47066__$1 = (((G__47066 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__47066));
var G__47066__$2 = (((G__47066__$1 == null))?null:cljs.core.first(G__47066__$1));
if((G__47066__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__47066__$2);
}
})());
});
com.wsscode.pathom.core.read_from_STAR_ = (function com$wsscode$pathom$core$read_from_STAR_(p__47071,reader){
var map__47073 = p__47071;
var map__47073__$1 = (((((!((map__47073 == null))))?(((((map__47073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47073):map__47073);
var env = map__47073__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47073__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core.map_QMARK_(reader)){
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var temp__5718__auto__ = cljs.core.find(reader,k);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__47079 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47079,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47079,(1),null);
return (com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2(env,v) : com.wsscode.pathom.core.read_from_STAR_.call(null,env,v));
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
} else {
if(cljs.core.vector_QMARK_(reader)){
var res = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__47073,map__47073__$1,env,ast){
return (function (p1__47067_SHARP_){
return (com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2(env,p1__47067_SHARP_) : com.wsscode.pathom.core.read_from_STAR_.call(null,env,p1__47067_SHARP_));
});})(map__47073,map__47073__$1,env,ast))
),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$1(((function (map__47073,map__47073__$1,env,ast){
return (function (p1__47068_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__47068_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));
});})(map__47073,map__47073__$1,env,ast))
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
var res__44659__auto__ = com.wsscode.pathom.core.read_from_STAR_(env,reader);
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44659__auto__)){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,res__44659__auto__){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,res__44659__auto__){
return (function (state_47102){
var state_val_47103 = (state_47102[(1)]);
if((state_val_47103 === (1))){
var state_47102__$1 = state_47102;
var statearr_47107_49292 = state_47102__$1;
(statearr_47107_49292[(2)] = null);

(statearr_47107_49292[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47103 === (2))){
var inst_47100 = (state_47102[(2)]);
var state_47102__$1 = state_47102;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47102__$1,inst_47100);
} else {
if((state_val_47103 === (3))){
var inst_47086 = (state_47102[(2)]);
var state_47102__$1 = state_47102;
var statearr_47110_49295 = state_47102__$1;
(statearr_47110_49295[(2)] = inst_47086);


cljs.core.async.impl.ioc_helpers.process_exception(state_47102__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47103 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47102,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_47102__$1 = state_47102;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47102__$1,(5),res__44659__auto__);
} else {
if((state_val_47103 === (5))){
var inst_47093 = (state_47102[(7)]);
var inst_47092 = (state_47102[(2)]);
var inst_47093__$1 = com.wsscode.common.async_cljs.throw_err(inst_47092);
var inst_47094 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47093__$1,new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));
var state_47102__$1 = (function (){var statearr_47114 = state_47102;
(statearr_47114[(7)] = inst_47093__$1);

return statearr_47114;
})();
if(inst_47094){
var statearr_47116_49299 = state_47102__$1;
(statearr_47116_49299[(1)] = (6));

} else {
var statearr_47117_49300 = state_47102__$1;
(statearr_47117_49300[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47103 === (6))){
var state_47102__$1 = state_47102;
var statearr_47118_49301 = state_47102__$1;
(statearr_47118_49301[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));

(statearr_47118_49301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47103 === (7))){
var inst_47093 = (state_47102[(7)]);
var state_47102__$1 = state_47102;
var statearr_47120_49302 = state_47102__$1;
(statearr_47120_49302[(2)] = inst_47093);

(statearr_47120_49302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47103 === (8))){
var inst_47098 = (state_47102[(2)]);
var state_47102__$1 = state_47102;
var statearr_47122_49307 = state_47102__$1;
(statearr_47122_49307[(2)] = inst_47098);


cljs.core.async.impl.ioc_helpers.process_exception(state_47102__$1);

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
});})(c__39084__auto__,res__44659__auto__))
;
return ((function (switch__38786__auto__,c__39084__auto__,res__44659__auto__){
return (function() {
var com$wsscode$pathom$core$read_from_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$core$read_from_$_state_machine__38787__auto____0 = (function (){
var statearr_47124 = [null,null,null,null,null,null,null,null];
(statearr_47124[(0)] = com$wsscode$pathom$core$read_from_$_state_machine__38787__auto__);

(statearr_47124[(1)] = (1));

return statearr_47124;
});
var com$wsscode$pathom$core$read_from_$_state_machine__38787__auto____1 = (function (state_47102){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_47102);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e47126){if((e47126 instanceof Object)){
var ex__38790__auto__ = e47126;
var statearr_47127_49325 = state_47102;
(statearr_47127_49325[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47126;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49330 = state_47102;
state_47102 = G__49330;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$core$read_from_$_state_machine__38787__auto__ = function(state_47102){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$read_from_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$read_from_$_state_machine__38787__auto____1.call(this,state_47102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$read_from_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$read_from_$_state_machine__38787__auto____0;
com$wsscode$pathom$core$read_from_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$read_from_$_state_machine__38787__auto____1;
return com$wsscode$pathom$core$read_from_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,res__44659__auto__))
})();
var state__39086__auto__ = (function (){var statearr_47128 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_47128[(6)] = c__39084__auto__);

return statearr_47128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,res__44659__auto__))
);

return c__39084__auto__;
} else {
var res = res__44659__auto__;
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
com.wsscode.pathom.core.transduce_children = (function com$wsscode$pathom$core$transduce_children(xform,p__47138){
var map__47140 = p__47138;
var map__47140__$1 = (((((!((map__47140 == null))))?(((((map__47140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47140):map__47140);
var node = map__47140__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47140__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__47143 = node;
if(cljs.core.seq(children)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__47143,new cljs.core.Keyword(null,"children","children",-940561982),((function (G__47143,map__47140,map__47140__$1,node,children){
return (function (children__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__47143,map__47140,map__47140__$1,node,children){
return (function (p1__47137_SHARP_){
return (com.wsscode.pathom.core.transduce_children.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.transduce_children.cljs$core$IFn$_invoke$arity$2(xform,p1__47137_SHARP_) : com.wsscode.pathom.core.transduce_children.call(null,xform,p1__47137_SHARP_));
});})(G__47143,map__47140,map__47140__$1,node,children))
)),children__$1);
});})(G__47143,map__47140,map__47140__$1,node,children))
);
} else {
return G__47143;
}
});
/**
 * Removes any item on set item-set from the input
 */
com.wsscode.pathom.core.elide_items = (function com$wsscode$pathom$core$elide_items(item_set,input){
return cljs.core.with_meta(com.wsscode.pathom.core.transduce_maps(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__47149){
var vec__47150 = p__47149;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47150,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47150,(1),null);
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
com.wsscode.pathom.core.raw_entity = (function com$wsscode$pathom$core$raw_entity(p__47164){
var map__47165 = p__47164;
var map__47165__$1 = (((((!((map__47165 == null))))?(((((map__47165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47165):map__47165);
var env = map__47165__$1;
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47165__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
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
var G__47175 = arguments.length;
switch (G__47175) {
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

com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2 = (function (p__47181,attributes){
var map__47182 = p__47181;
var map__47182__$1 = (((((!((map__47182 == null))))?(((((map__47182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47182):map__47182);
var env = map__47182__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47182__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var res__44659__auto__ = (function (){var G__47186 = env;
var G__47187 = cljs.core.filterv(cljs.core.complement(cljs.core.set(cljs.core.keys(e))),attributes);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__47186,G__47187) : parser.call(null,G__47186,G__47187));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44659__auto__)){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,res__44659__auto__,e,map__47182,map__47182__$1,env,parser){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,res__44659__auto__,e,map__47182,map__47182__$1,env,parser){
return (function (state_47208){
var state_val_47209 = (state_47208[(1)]);
if((state_val_47209 === (1))){
var state_47208__$1 = state_47208;
var statearr_47214_49339 = state_47208__$1;
(statearr_47214_49339[(2)] = null);

(statearr_47214_49339[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47209 === (2))){
var inst_47206 = (state_47208[(2)]);
var state_47208__$1 = state_47208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47208__$1,inst_47206);
} else {
if((state_val_47209 === (3))){
var inst_47190 = (state_47208[(2)]);
var state_47208__$1 = state_47208;
var statearr_47217_49344 = state_47208__$1;
(statearr_47217_49344[(2)] = inst_47190);


cljs.core.async.impl.ioc_helpers.process_exception(state_47208__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47209 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47208,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_47208__$1 = state_47208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47208__$1,(5),res__44659__auto__);
} else {
if((state_val_47209 === (5))){
var inst_47197 = (state_47208[(7)]);
var inst_47196 = (state_47208[(2)]);
var inst_47197__$1 = com.wsscode.common.async_cljs.throw_err(inst_47196);
var inst_47199 = cljs.core.map_QMARK_(inst_47197__$1);
var state_47208__$1 = (function (){var statearr_47218 = state_47208;
(statearr_47218[(7)] = inst_47197__$1);

return statearr_47218;
})();
if(inst_47199){
var statearr_47219_49346 = state_47208__$1;
(statearr_47219_49346[(1)] = (6));

} else {
var statearr_47220_49347 = state_47208__$1;
(statearr_47220_49347[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47209 === (6))){
var inst_47197 = (state_47208[(7)]);
var inst_47201 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.entity_value_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,inst_47197], 0));
var state_47208__$1 = state_47208;
var statearr_47223_49348 = state_47208__$1;
(statearr_47223_49348[(2)] = inst_47201);

(statearr_47223_49348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47209 === (7))){
var state_47208__$1 = state_47208;
var statearr_47225_49349 = state_47208__$1;
(statearr_47225_49349[(2)] = e);

(statearr_47225_49349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47209 === (8))){
var inst_47204 = (state_47208[(2)]);
var state_47208__$1 = state_47208;
var statearr_47227_49350 = state_47208__$1;
(statearr_47227_49350[(2)] = inst_47204);


cljs.core.async.impl.ioc_helpers.process_exception(state_47208__$1);

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
});})(c__39084__auto__,res__44659__auto__,e,map__47182,map__47182__$1,env,parser))
;
return ((function (switch__38786__auto__,c__39084__auto__,res__44659__auto__,e,map__47182,map__47182__$1,env,parser){
return (function() {
var com$wsscode$pathom$core$state_machine__38787__auto__ = null;
var com$wsscode$pathom$core$state_machine__38787__auto____0 = (function (){
var statearr_47229 = [null,null,null,null,null,null,null,null];
(statearr_47229[(0)] = com$wsscode$pathom$core$state_machine__38787__auto__);

(statearr_47229[(1)] = (1));

return statearr_47229;
});
var com$wsscode$pathom$core$state_machine__38787__auto____1 = (function (state_47208){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_47208);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e47230){if((e47230 instanceof Object)){
var ex__38790__auto__ = e47230;
var statearr_47233_49351 = state_47208;
(statearr_47233_49351[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47230;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49352 = state_47208;
state_47208 = G__49352;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__38787__auto__ = function(state_47208){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__38787__auto____1.call(this,state_47208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__38787__auto____0;
com$wsscode$pathom$core$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__38787__auto____1;
return com$wsscode$pathom$core$state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,res__44659__auto__,e,map__47182,map__47182__$1,env,parser))
})();
var state__39086__auto__ = (function (){var statearr_47234 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_47234[(6)] = c__39084__auto__);

return statearr_47234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,res__44659__auto__,e,map__47182,map__47182__$1,env,parser))
);

return c__39084__auto__;
} else {
var res = res__44659__auto__;
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
var G__47239 = arguments.length;
switch (G__47239) {
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
var res__44659__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44659__auto__)){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,res__44659__auto__){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,res__44659__auto__){
return (function (state_47256){
var state_val_47257 = (state_47256[(1)]);
if((state_val_47257 === (1))){
var state_47256__$1 = state_47256;
var statearr_47260_49356 = state_47256__$1;
(statearr_47260_49356[(2)] = null);

(statearr_47260_49356[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47257 === (2))){
var inst_47254 = (state_47256[(2)]);
var state_47256__$1 = state_47256;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47256__$1,inst_47254);
} else {
if((state_val_47257 === (3))){
var inst_47244 = (state_47256[(2)]);
var state_47256__$1 = state_47256;
var statearr_47263_49357 = state_47256__$1;
(statearr_47263_49357[(2)] = inst_47244);


cljs.core.async.impl.ioc_helpers.process_exception(state_47256__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47257 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47256,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_47256__$1 = state_47256;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47256__$1,(5),res__44659__auto__);
} else {
if((state_val_47257 === (5))){
var inst_47250 = (state_47256[(2)]);
var inst_47251 = com.wsscode.common.async_cljs.throw_err(inst_47250);
var inst_47252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47251,attr);
var state_47256__$1 = state_47256;
var statearr_47267_49359 = state_47256__$1;
(statearr_47267_49359[(2)] = inst_47252);


cljs.core.async.impl.ioc_helpers.process_exception(state_47256__$1);

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
var com$wsscode$pathom$core$state_machine__38787__auto__ = null;
var com$wsscode$pathom$core$state_machine__38787__auto____0 = (function (){
var statearr_47268 = [null,null,null,null,null,null,null];
(statearr_47268[(0)] = com$wsscode$pathom$core$state_machine__38787__auto__);

(statearr_47268[(1)] = (1));

return statearr_47268;
});
var com$wsscode$pathom$core$state_machine__38787__auto____1 = (function (state_47256){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_47256);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e47269){if((e47269 instanceof Object)){
var ex__38790__auto__ = e47269;
var statearr_47270_49362 = state_47256;
(statearr_47270_49362[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47269;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49364 = state_47256;
state_47256 = G__49364;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__38787__auto__ = function(state_47256){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__38787__auto____1.call(this,state_47256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__38787__auto____0;
com$wsscode$pathom$core$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__38787__auto____1;
return com$wsscode$pathom$core$state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,res__44659__auto__))
})();
var state__39086__auto__ = (function (){var statearr_47273 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_47273[(6)] = c__39084__auto__);

return statearr_47273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,res__44659__auto__))
);

return c__39084__auto__;
} else {
var e = res__44659__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
}
});

com.wsscode.pathom.core.entity_attr.cljs$core$IFn$_invoke$arity$3 = (function (env,attr,default$){
var res__44659__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44659__auto__)){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,res__44659__auto__){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,res__44659__auto__){
return (function (state_47302){
var state_val_47303 = (state_47302[(1)]);
if((state_val_47303 === (1))){
var state_47302__$1 = state_47302;
var statearr_47306_49369 = state_47302__$1;
(statearr_47306_49369[(2)] = null);

(statearr_47306_49369[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47303 === (2))){
var inst_47299 = (state_47302[(2)]);
var state_47302__$1 = state_47302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47302__$1,inst_47299);
} else {
if((state_val_47303 === (3))){
var inst_47277 = (state_47302[(2)]);
var state_47302__$1 = state_47302;
var statearr_47308_49370 = state_47302__$1;
(statearr_47308_49370[(2)] = inst_47277);


cljs.core.async.impl.ioc_helpers.process_exception(state_47302__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47303 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47302,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_47302__$1 = state_47302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47302__$1,(5),res__44659__auto__);
} else {
if((state_val_47303 === (5))){
var inst_47286 = (state_47302[(7)]);
var inst_47282 = (state_47302[(2)]);
var inst_47283 = com.wsscode.common.async_cljs.throw_err(inst_47282);
var inst_47286__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47283,attr);
var inst_47289 = [null,null,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null];
var inst_47290 = (new cljs.core.PersistentArrayMap(null,2,inst_47289,null));
var inst_47291 = (new cljs.core.PersistentHashSet(null,inst_47290,null));
var inst_47292 = (inst_47291.cljs$core$IFn$_invoke$arity$1 ? inst_47291.cljs$core$IFn$_invoke$arity$1(inst_47286__$1) : inst_47291.call(null,inst_47286__$1));
var state_47302__$1 = (function (){var statearr_47311 = state_47302;
(statearr_47311[(7)] = inst_47286__$1);

return statearr_47311;
})();
if(cljs.core.truth_(inst_47292)){
var statearr_47312_49371 = state_47302__$1;
(statearr_47312_49371[(1)] = (6));

} else {
var statearr_47314_49372 = state_47302__$1;
(statearr_47314_49372[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47303 === (6))){
var state_47302__$1 = state_47302;
var statearr_47316_49374 = state_47302__$1;
(statearr_47316_49374[(2)] = default$);

(statearr_47316_49374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47303 === (7))){
var inst_47286 = (state_47302[(7)]);
var state_47302__$1 = state_47302;
var statearr_47317_49375 = state_47302__$1;
(statearr_47317_49375[(2)] = inst_47286);

(statearr_47317_49375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47303 === (8))){
var inst_47296 = (state_47302[(2)]);
var state_47302__$1 = state_47302;
var statearr_47319_49376 = state_47302__$1;
(statearr_47319_49376[(2)] = inst_47296);


cljs.core.async.impl.ioc_helpers.process_exception(state_47302__$1);

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
});})(c__39084__auto__,res__44659__auto__))
;
return ((function (switch__38786__auto__,c__39084__auto__,res__44659__auto__){
return (function() {
var com$wsscode$pathom$core$state_machine__38787__auto__ = null;
var com$wsscode$pathom$core$state_machine__38787__auto____0 = (function (){
var statearr_47321 = [null,null,null,null,null,null,null,null];
(statearr_47321[(0)] = com$wsscode$pathom$core$state_machine__38787__auto__);

(statearr_47321[(1)] = (1));

return statearr_47321;
});
var com$wsscode$pathom$core$state_machine__38787__auto____1 = (function (state_47302){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_47302);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e47323){if((e47323 instanceof Object)){
var ex__38790__auto__ = e47323;
var statearr_47325_49380 = state_47302;
(statearr_47325_49380[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47323;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49381 = state_47302;
state_47302 = G__49381;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__38787__auto__ = function(state_47302){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__38787__auto____1.call(this,state_47302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__38787__auto____0;
com$wsscode$pathom$core$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__38787__auto____1;
return com$wsscode$pathom$core$state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,res__44659__auto__))
})();
var state__39086__auto__ = (function (){var statearr_47328 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_47328[(6)] = c__39084__auto__);

return statearr_47328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,res__44659__auto__))
);

return c__39084__auto__;
} else {
var e = res__44659__auto__;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
if(cljs.core.truth_((function (){var fexpr__47330 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null], null), null);
return (fexpr__47330.cljs$core$IFn$_invoke$arity$1 ? fexpr__47330.cljs$core$IFn$_invoke$arity$1(x) : fexpr__47330.call(null,x));
})())){
return default$;
} else {
return x;
}
}
});

com.wsscode.pathom.core.entity_attr.cljs$lang$maxFixedArity = 3;

com.wsscode.pathom.core.entity_BANG_ = (function com$wsscode$pathom$core$entity_BANG_(p__47334,attributes){
var map__47335 = p__47334;
var map__47335__$1 = (((((!((map__47335 == null))))?(((((map__47335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47335):map__47335);
var env = map__47335__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47335__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var res__44659__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,attributes);
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44659__auto__)){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,res__44659__auto__,map__47335,map__47335__$1,env,path){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,res__44659__auto__,map__47335,map__47335__$1,env,path){
return (function (state_47365){
var state_val_47366 = (state_47365[(1)]);
if((state_val_47366 === (1))){
var state_47365__$1 = state_47365;
var statearr_47369_49386 = state_47365__$1;
(statearr_47369_49386[(2)] = null);

(statearr_47369_49386[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47366 === (2))){
var inst_47363 = (state_47365[(2)]);
var state_47365__$1 = state_47365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47365__$1,inst_47363);
} else {
if((state_val_47366 === (3))){
var inst_47338 = (state_47365[(2)]);
var state_47365__$1 = state_47365;
var statearr_47373_49387 = state_47365__$1;
(statearr_47373_49387[(2)] = inst_47338);


cljs.core.async.impl.ioc_helpers.process_exception(state_47365__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47366 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47365,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_47365__$1 = state_47365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47365__$1,(5),res__44659__auto__);
} else {
if((state_val_47366 === (5))){
var inst_47349 = (state_47365[(7)]);
var inst_47344 = (state_47365[(8)]);
var inst_47343 = (state_47365[(2)]);
var inst_47344__$1 = com.wsscode.common.async_cljs.throw_err(inst_47343);
var inst_47345 = cljs.core.set(attributes);
var inst_47346 = com.wsscode.pathom.core.elide_not_found(inst_47344__$1);
var inst_47347 = cljs.core.keys(inst_47346);
var inst_47348 = cljs.core.set(inst_47347);
var inst_47349__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_47345,inst_47348);
var inst_47350 = cljs.core.seq(inst_47349__$1);
var state_47365__$1 = (function (){var statearr_47376 = state_47365;
(statearr_47376[(7)] = inst_47349__$1);

(statearr_47376[(8)] = inst_47344__$1);

return statearr_47376;
})();
if(inst_47350){
var statearr_47377_49394 = state_47365__$1;
(statearr_47377_49394[(1)] = (6));

} else {
var statearr_47380_49396 = state_47365__$1;
(statearr_47380_49396[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47366 === (6))){
var inst_47349 = (state_47365[(7)]);
var inst_47344 = (state_47365[(8)]);
var inst_47352 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_47349], 0));
var inst_47353 = ["Entity attributes ",inst_47352," could not be realized"].join('');
var inst_47354 = [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword("com.wsscode.pathom.core","missing-attributes","com.wsscode.pathom.core/missing-attributes",1114260849)];
var inst_47355 = [inst_47344,path,inst_47349];
var inst_47356 = cljs.core.PersistentHashMap.fromArrays(inst_47354,inst_47355);
var inst_47357 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(inst_47353,inst_47356);
var inst_47358 = (function(){throw inst_47357})();
var state_47365__$1 = state_47365;
var statearr_47383_49422 = state_47365__$1;
(statearr_47383_49422[(2)] = inst_47358);

(statearr_47383_49422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47366 === (7))){
var state_47365__$1 = state_47365;
var statearr_47384_49423 = state_47365__$1;
(statearr_47384_49423[(2)] = null);

(statearr_47384_49423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47366 === (8))){
var inst_47344 = (state_47365[(8)]);
var inst_47361 = (state_47365[(2)]);
var state_47365__$1 = (function (){var statearr_47386 = state_47365;
(statearr_47386[(9)] = inst_47361);

return statearr_47386;
})();
var statearr_47388_49425 = state_47365__$1;
(statearr_47388_49425[(2)] = inst_47344);


cljs.core.async.impl.ioc_helpers.process_exception(state_47365__$1);

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
});})(c__39084__auto__,res__44659__auto__,map__47335,map__47335__$1,env,path))
;
return ((function (switch__38786__auto__,c__39084__auto__,res__44659__auto__,map__47335,map__47335__$1,env,path){
return (function() {
var com$wsscode$pathom$core$entity_BANG__$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$core$entity_BANG__$_state_machine__38787__auto____0 = (function (){
var statearr_47391 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47391[(0)] = com$wsscode$pathom$core$entity_BANG__$_state_machine__38787__auto__);

(statearr_47391[(1)] = (1));

return statearr_47391;
});
var com$wsscode$pathom$core$entity_BANG__$_state_machine__38787__auto____1 = (function (state_47365){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_47365);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e47393){if((e47393 instanceof Object)){
var ex__38790__auto__ = e47393;
var statearr_47395_49429 = state_47365;
(statearr_47395_49429[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47393;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49432 = state_47365;
state_47365 = G__49432;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$core$entity_BANG__$_state_machine__38787__auto__ = function(state_47365){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$entity_BANG__$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$entity_BANG__$_state_machine__38787__auto____1.call(this,state_47365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$entity_BANG__$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$entity_BANG__$_state_machine__38787__auto____0;
com$wsscode$pathom$core$entity_BANG__$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$entity_BANG__$_state_machine__38787__auto____1;
return com$wsscode$pathom$core$entity_BANG__$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,res__44659__auto__,map__47335,map__47335__$1,env,path))
})();
var state__39086__auto__ = (function (){var statearr_47397 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_47397[(6)] = c__39084__auto__);

return statearr_47397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,res__44659__auto__,map__47335,map__47335__$1,env,path))
);

return c__39084__auto__;
} else {
var e = res__44659__auto__;
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
var res__44659__auto__ = com.wsscode.pathom.core.entity_BANG_(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44659__auto__)){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,res__44659__auto__){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,res__44659__auto__){
return (function (state_47416){
var state_val_47417 = (state_47416[(1)]);
if((state_val_47417 === (1))){
var state_47416__$1 = state_47416;
var statearr_47422_49435 = state_47416__$1;
(statearr_47422_49435[(2)] = null);

(statearr_47422_49435[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47417 === (2))){
var inst_47414 = (state_47416[(2)]);
var state_47416__$1 = state_47416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47416__$1,inst_47414);
} else {
if((state_val_47417 === (3))){
var inst_47404 = (state_47416[(2)]);
var state_47416__$1 = state_47416;
var statearr_47424_49437 = state_47416__$1;
(statearr_47424_49437[(2)] = inst_47404);


cljs.core.async.impl.ioc_helpers.process_exception(state_47416__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47417 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47416,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_47416__$1 = state_47416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47416__$1,(5),res__44659__auto__);
} else {
if((state_val_47417 === (5))){
var inst_47410 = (state_47416[(2)]);
var inst_47411 = com.wsscode.common.async_cljs.throw_err(inst_47410);
var inst_47412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47411,attr);
var state_47416__$1 = state_47416;
var statearr_47428_49440 = state_47416__$1;
(statearr_47428_49440[(2)] = inst_47412);


cljs.core.async.impl.ioc_helpers.process_exception(state_47416__$1);

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
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38787__auto____0 = (function (){
var statearr_47431 = [null,null,null,null,null,null,null];
(statearr_47431[(0)] = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38787__auto__);

(statearr_47431[(1)] = (1));

return statearr_47431;
});
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38787__auto____1 = (function (state_47416){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_47416);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e47432){if((e47432 instanceof Object)){
var ex__38790__auto__ = e47432;
var statearr_47433_49443 = state_47416;
(statearr_47433_49443[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47432;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49444 = state_47416;
state_47416 = G__49444;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38787__auto__ = function(state_47416){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38787__auto____1.call(this,state_47416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38787__auto____0;
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38787__auto____1;
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,res__44659__auto__))
})();
var state__39086__auto__ = (function (){var statearr_47436 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_47436[(6)] = c__39084__auto__);

return statearr_47436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,res__44659__auto__))
);

return c__39084__auto__;
} else {
var e = res__44659__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
}
});
/**
 * Helper to swap the current entity value.
 */
com.wsscode.pathom.core.swap_entity_BANG_ = (function com$wsscode$pathom$core$swap_entity_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49445 = arguments.length;
var i__4731__auto___49446 = (0);
while(true){
if((i__4731__auto___49446 < len__4730__auto___49445)){
args__4736__auto__.push((arguments[i__4731__auto___49446]));

var G__49447 = (i__4731__auto___49446 + (1));
i__4731__auto___49446 = G__49447;
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
com.wsscode.pathom.core.swap_entity_BANG_.cljs$lang$applyTo = (function (seq47437){
var G__47438 = cljs.core.first(seq47437);
var seq47437__$1 = cljs.core.next(seq47437);
var G__47439 = cljs.core.first(seq47437__$1);
var seq47437__$2 = cljs.core.next(seq47437__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47438,G__47439,seq47437__$2);
});

/**
 * Given an AST, find the child with a given key and run update against it.
 */
com.wsscode.pathom.core.update_child = (function com$wsscode$pathom$core$update_child(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49449 = arguments.length;
var i__4731__auto___49450 = (0);
while(true){
if((i__4731__auto___49450 < len__4730__auto___49449)){
args__4736__auto__.push((arguments[i__4731__auto___49450]));

var G__49451 = (i__4731__auto___49450 + (1));
i__4731__auto___49450 = G__49451;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.update_child.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.update_child.cljs$core$IFn$_invoke$arity$variadic = (function (ast,key,args){
var temp__5718__auto__ = (function (){var G__47453 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var G__47453__$1 = (((G__47453 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__47453));
var G__47453__$2 = (((G__47453__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([key]),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.second),G__47453__$1));
if((G__47453__$2 == null)){
return null;
} else {
return cljs.core.ffirst(G__47453__$2);
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
com.wsscode.pathom.core.update_child.cljs$lang$applyTo = (function (seq47446){
var G__47447 = cljs.core.first(seq47446);
var seq47446__$1 = cljs.core.next(seq47446);
var G__47448 = cljs.core.first(seq47446__$1);
var seq47446__$2 = cljs.core.next(seq47446__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47447,G__47448,seq47446__$2);
});

/**
 * Given an AST, find the child with a given key and run update against it.
 */
com.wsscode.pathom.core.update_recursive_depth = (function com$wsscode$pathom$core$update_recursive_depth(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49457 = arguments.length;
var i__4731__auto___49458 = (0);
while(true){
if((i__4731__auto___49458 < len__4730__auto___49457)){
args__4736__auto__.push((arguments[i__4731__auto___49458]));

var G__49459 = (i__4731__auto___49458 + (1));
i__4731__auto___49458 = G__49459;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.update_recursive_depth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.update_recursive_depth.cljs$core$IFn$_invoke$arity$variadic = (function (ast,key,args){
var temp__5718__auto__ = (function (){var G__47471 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var G__47471__$1 = (((G__47471 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__47471));
var G__47471__$2 = (((G__47471__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (G__47471,G__47471__$1){
return (function (p1__47463_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__47463_SHARP_))) && (cljs.core.pos_int_QMARK_(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__47463_SHARP_))));
});})(G__47471,G__47471__$1))
,cljs.core.second),G__47471__$1));
if((G__47471__$2 == null)){
return null;
} else {
return cljs.core.ffirst(G__47471__$2);
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
com.wsscode.pathom.core.update_recursive_depth.cljs$lang$applyTo = (function (seq47465){
var G__47466 = cljs.core.first(seq47465);
var seq47465__$1 = cljs.core.next(seq47465);
var G__47467 = cljs.core.first(seq47465__$1);
var seq47465__$2 = cljs.core.next(seq47465__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47466,G__47467,seq47465__$2);
});

com.wsscode.pathom.core.remove_query_wildcard = (function com$wsscode$pathom$core$remove_query_wildcard(query){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(query)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null)),query);
});
com.wsscode.pathom.core.default_union_path = (function com$wsscode$pathom$core$default_union_path(p__47477){
var map__47478 = p__47477;
var map__47478__$1 = (((((!((map__47478 == null))))?(((((map__47478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47478):map__47478);
var env = map__47478__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47478__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5718__auto__ = (function (){var G__47481 = cljs.core.keys(query);
var G__47481__$1 = (((G__47481 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__47481,e,map__47478,map__47478__$1,env,query){
return (function (p1__47475_SHARP_){
return cljs.core.contains_QMARK_(e,p1__47475_SHARP_);
});})(G__47481,e,map__47478,map__47478__$1,env,query))
,G__47481));
if((G__47481__$1 == null)){
return null;
} else {
return cljs.core.first(G__47481__$1);
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
var G__47487 = arguments.length;
switch (G__47487) {
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

com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2 = (function (entity,p__47490){
var map__47491 = p__47490;
var map__47491__$1 = (((((!((map__47491 == null))))?(((((map__47491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47491):map__47491);
var env = map__47491__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47491__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47491__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47491__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
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

com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1 = (function (p__47493){
var map__47494 = p__47493;
var map__47494__$1 = (((((!((map__47494 == null))))?(((((map__47494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47494):map__47494);
var env = map__47494__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47494__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47494__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47494__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var union_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47494__$1,new cljs.core.Keyword("com.wsscode.pathom.core","union-path","com.wsscode.pathom.core/union-path",-2083478095));
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47494__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47494__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47494__$1,new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var placeholder_QMARK_ = cljs.core.contains_QMARK_((function (){var or__4131__auto__ = placeholder_prefixes;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),(function (){var G__47496 = new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast);
if((G__47496 == null)){
return null;
} else {
return cljs.core.namespace(G__47496);
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
var env_SINGLEQUOTE_ = (function (){var G__47497 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),query__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-join-key","com.wsscode.pathom.core/parent-join-key",-289005491),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast)], 0));
if((!(placeholder_QMARK_))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47497,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404)], 0));
} else {
return G__47497;
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
var G__47499 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env_SINGLEQUOTE___$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),parent_query_SINGLEQUOTE_);
var G__47500 = com.wsscode.pathom.core.remove_query_wildcard(parent_query_SINGLEQUOTE_);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__47499,G__47500) : parser.call(null,G__47499,G__47500));
}
} else {
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null),query__$1))){
var res__44659__auto__ = (function (){var G__47501 = env_SINGLEQUOTE___$1;
var G__47502 = com.wsscode.pathom.core.remove_query_wildcard(query__$1);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__47501,G__47502) : parser.call(null,G__47501,G__47502));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44659__auto__)){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,res__44659__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__47494,map__47494__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,res__44659__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__47494,map__47494__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes){
return (function (state_47515){
var state_val_47516 = (state_47515[(1)]);
if((state_val_47516 === (1))){
var state_47515__$1 = state_47515;
var statearr_47518_49477 = state_47515__$1;
(statearr_47518_49477[(2)] = null);

(statearr_47518_49477[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47516 === (2))){
var inst_47513 = (state_47515[(2)]);
var state_47515__$1 = state_47515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47515__$1,inst_47513);
} else {
if((state_val_47516 === (3))){
var inst_47503 = (state_47515[(2)]);
var state_47515__$1 = state_47515;
var statearr_47520_49480 = state_47515__$1;
(statearr_47520_49480[(2)] = inst_47503);


cljs.core.async.impl.ioc_helpers.process_exception(state_47515__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47516 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47515,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_47515__$1 = state_47515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47515__$1,(5),res__44659__auto__);
} else {
if((state_val_47516 === (5))){
var inst_47508 = (state_47515[(2)]);
var inst_47509 = com.wsscode.common.async_cljs.throw_err(inst_47508);
var inst_47510 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env_SINGLEQUOTE___$1);
var inst_47511 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_47510,inst_47509], 0));
var state_47515__$1 = state_47515;
var statearr_47522_49482 = state_47515__$1;
(statearr_47522_49482[(2)] = inst_47511);


cljs.core.async.impl.ioc_helpers.process_exception(state_47515__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39084__auto__,res__44659__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__47494,map__47494__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes))
;
return ((function (switch__38786__auto__,c__39084__auto__,res__44659__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__47494,map__47494__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes){
return (function() {
var com$wsscode$pathom$core$state_machine__38787__auto__ = null;
var com$wsscode$pathom$core$state_machine__38787__auto____0 = (function (){
var statearr_47524 = [null,null,null,null,null,null,null];
(statearr_47524[(0)] = com$wsscode$pathom$core$state_machine__38787__auto__);

(statearr_47524[(1)] = (1));

return statearr_47524;
});
var com$wsscode$pathom$core$state_machine__38787__auto____1 = (function (state_47515){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_47515);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e47526){if((e47526 instanceof Object)){
var ex__38790__auto__ = e47526;
var statearr_47528_49492 = state_47515;
(statearr_47528_49492[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47526;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49494 = state_47515;
state_47515 = G__49494;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__38787__auto__ = function(state_47515){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__38787__auto____1.call(this,state_47515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__38787__auto____0;
com$wsscode$pathom$core$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__38787__auto____1;
return com$wsscode$pathom$core$state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,res__44659__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__47494,map__47494__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes))
})();
var state__39086__auto__ = (function (){var statearr_47530 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_47530[(6)] = c__39084__auto__);

return statearr_47530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,res__44659__auto__,e,placeholder_QMARK_,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__47494,map__47494__$1,env,parser,ast,query,union_path,parent_query,processing_sequence,placeholder_prefixes))
);

return c__39084__auto__;
} else {
var computed_e = res__44659__auto__;
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
var map__47535 = p__47534;
var map__47535__$1 = (((((!((map__47535 == null))))?(((((map__47535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47535):map__47535);
var env = map__47535__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47535__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47535__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
if(cljs.core.seq(coll)){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache){
return (function (state_47635){
var state_val_47636 = (state_47635[(1)]);
if((state_val_47636 === (7))){
var inst_47631 = (state_47635[(2)]);
var state_47635__$1 = state_47635;
var statearr_47637_49497 = state_47635__$1;
(statearr_47637_49497[(2)] = inst_47631);


cljs.core.async.impl.ioc_helpers.process_exception(state_47635__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47636 === (1))){
var state_47635__$1 = state_47635;
var statearr_47638_49498 = state_47635__$1;
(statearr_47638_49498[(2)] = null);

(statearr_47638_49498[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47636 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47635,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_47541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_47635__$1 = state_47635;
if(cljs.core.truth_(inst_47541)){
var statearr_47639_49504 = state_47635__$1;
(statearr_47639_49504[(1)] = (5));

} else {
var statearr_47640_49505 = state_47635__$1;
(statearr_47640_49505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47636 === (15))){
var inst_47604 = (state_47635[(7)]);
var inst_47597 = (state_47635[(8)]);
var inst_47605 = (state_47635[(9)]);
var inst_47602 = (state_47635[(10)]);
var inst_47600 = (state_47635[(11)]);
var inst_47601 = (state_47635[(12)]);
var inst_47616 = (state_47635[(2)]);
var inst_47617 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_47618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_47619 = cljs.core.range.cljs$core$IFn$_invoke$arity$0();
var inst_47620 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_47605,inst_47619);
var inst_47621 = cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(inst_47617,inst_47620);
var inst_47622 = (function (){var from_chan = inst_47617;
var join_item = inst_47601;
var first_res = inst_47616;
var check_ast_opt_QMARK_ = inst_47600;
var out_chan = inst_47618;
var seq__47595 = inst_47605;
var ast = inst_47597;
var env__$1 = inst_47602;
var vec__47594 = coll;
var first__47596 = inst_47604;
var head = inst_47604;
var tail = inst_47605;
return ((function (from_chan,join_item,first_res,check_ast_opt_QMARK_,out_chan,seq__47595,ast,env__$1,vec__47594,first__47596,head,tail,inst_47604,inst_47597,inst_47605,inst_47602,inst_47600,inst_47601,inst_47616,inst_47617,inst_47618,inst_47619,inst_47620,inst_47621,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline(p__47641,res_ch){
var vec__47642 = p__47641;
var ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47642,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47642,(1),null);
var c__39084__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto____$1,vec__47642,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,out_chan,seq__47595,ast,env__$1,vec__47594,first__47596,head,tail,inst_47604,inst_47597,inst_47605,inst_47602,inst_47600,inst_47601,inst_47616,inst_47617,inst_47618,inst_47619,inst_47620,inst_47621,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto____$1,vec__47642,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,out_chan,seq__47595,ast,env__$1,vec__47594,first__47596,head,tail,inst_47604,inst_47597,inst_47605,inst_47602,inst_47600,inst_47601,inst_47616,inst_47617,inst_47618,inst_47619,inst_47620,inst_47621,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache){
return (function (state_47702){
var state_val_47703 = (state_47702[(1)]);
if((state_val_47703 === (7))){
var inst_47665 = (state_47702[(2)]);
var state_47702__$1 = state_47702;
var statearr_47713_49506 = state_47702__$1;
(statearr_47713_49506[(2)] = inst_47665);

(statearr_47713_49506[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47703 === (1))){
var inst_47647 = (state_47702[(7)]);
var inst_47646 = (i + (1));
var inst_47647__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,inst_47646);
var inst_47649 = (inst_47647__$1 == null);
var inst_47650 = cljs.core.not(inst_47649);
var state_47702__$1 = (function (){var statearr_47718 = state_47702;
(statearr_47718[(7)] = inst_47647__$1);

return statearr_47718;
})();
if(inst_47650){
var statearr_47719_49508 = state_47702__$1;
(statearr_47719_49508[(1)] = (2));

} else {
var statearr_47720_49510 = state_47702__$1;
(statearr_47720_49510[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47703 === (4))){
var inst_47668 = (state_47702[(2)]);
var state_47702__$1 = state_47702;
if(cljs.core.truth_(inst_47668)){
var statearr_47721_49514 = state_47702__$1;
(statearr_47721_49514[(1)] = (8));

} else {
var statearr_47722_49515 = state_47702__$1;
(statearr_47722_49515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47703 === (15))){
var inst_47695 = (state_47702[(2)]);
var inst_47696 = cljs.core.async.close_BANG_(res_ch);
var state_47702__$1 = (function (){var statearr_47727 = state_47702;
(statearr_47727[(8)] = inst_47695);

return statearr_47727;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47702__$1,inst_47696);
} else {
if((state_val_47703 === (13))){
var inst_47692 = (state_47702[(2)]);
var state_47702__$1 = state_47702;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47702__$1,(15),res_ch,inst_47692);
} else {
if((state_val_47703 === (6))){
var state_47702__$1 = state_47702;
var statearr_47729_49516 = state_47702__$1;
(statearr_47729_49516[(2)] = false);

(statearr_47729_49516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47703 === (3))){
var state_47702__$1 = state_47702;
var statearr_47735_49521 = state_47702__$1;
(statearr_47735_49521[(2)] = false);

(statearr_47735_49521[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47703 === (12))){
var inst_47684 = (state_47702[(9)]);
var state_47702__$1 = state_47702;
var statearr_47742_49523 = state_47702__$1;
(statearr_47742_49523[(2)] = inst_47684);

(statearr_47742_49523[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47703 === (2))){
var inst_47647 = (state_47702[(7)]);
var inst_47656 = inst_47647.cljs$lang$protocol_mask$partition0$;
var inst_47657 = (inst_47656 & (64));
var inst_47659 = inst_47647.cljs$core$ISeq$;
var inst_47660 = (cljs.core.PROTOCOL_SENTINEL === inst_47659);
var inst_47661 = ((inst_47657) || (inst_47660));
var state_47702__$1 = state_47702;
if(cljs.core.truth_(inst_47661)){
var statearr_47748_49524 = state_47702__$1;
(statearr_47748_49524[(1)] = (5));

} else {
var statearr_47753_49525 = state_47702__$1;
(statearr_47753_49525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47703 === (11))){
var inst_47684 = (state_47702[(9)]);
var state_47702__$1 = state_47702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47702__$1,(14),inst_47684);
} else {
if((state_val_47703 === (9))){
var inst_47647 = (state_47702[(7)]);
var state_47702__$1 = state_47702;
var statearr_47754_49528 = state_47702__$1;
(statearr_47754_49528[(2)] = inst_47647);

(statearr_47754_49528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47703 === (5))){
var state_47702__$1 = state_47702;
var statearr_47755_49529 = state_47702__$1;
(statearr_47755_49529[(2)] = true);

(statearr_47755_49529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47703 === (14))){
var inst_47689 = (state_47702[(2)]);
var state_47702__$1 = state_47702;
var statearr_47756_49532 = state_47702__$1;
(statearr_47756_49532[(2)] = inst_47689);

(statearr_47756_49532[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47703 === (10))){
var inst_47684 = (state_47702[(9)]);
var inst_47673 = (state_47702[(2)]);
var inst_47674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47673,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var inst_47675 = cljs.core.deref(entity_path_cache);
var inst_47676 = cljs.core.PersistentHashMap.EMPTY;
var inst_47677 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_47675,inst_47674,inst_47676);
var inst_47678 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_47677,ent], 0));
var inst_47684__$1 = (join_item.cljs$core$IFn$_invoke$arity$2 ? join_item.cljs$core$IFn$_invoke$arity$2(inst_47673,inst_47678) : join_item.call(null,inst_47673,inst_47678));
var inst_47685 = com.wsscode.common.async_cljs.chan_QMARK_(inst_47684__$1);
var state_47702__$1 = (function (){var statearr_47762 = state_47702;
(statearr_47762[(9)] = inst_47684__$1);

return statearr_47762;
})();
if(inst_47685){
var statearr_47763_49537 = state_47702__$1;
(statearr_47763_49537[(1)] = (11));

} else {
var statearr_47764_49538 = state_47702__$1;
(statearr_47764_49538[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47703 === (8))){
var inst_47647 = (state_47702[(7)]);
var inst_47670 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47647);
var state_47702__$1 = state_47702;
var statearr_47771_49539 = state_47702__$1;
(statearr_47771_49539[(2)] = inst_47670);

(statearr_47771_49539[(1)] = (10));


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
});})(c__39084__auto____$1,vec__47642,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,out_chan,seq__47595,ast,env__$1,vec__47594,first__47596,head,tail,inst_47604,inst_47597,inst_47605,inst_47602,inst_47600,inst_47601,inst_47616,inst_47617,inst_47618,inst_47619,inst_47620,inst_47621,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache))
;
return ((function (switch__38786__auto__,c__39084__auto____$1,vec__47642,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,out_chan,seq__47595,ast,env__$1,vec__47594,first__47596,head,tail,inst_47604,inst_47597,inst_47605,inst_47602,inst_47600,inst_47601,inst_47616,inst_47617,inst_47618,inst_47619,inst_47620,inst_47621,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38787__auto____0 = (function (){
var statearr_47778 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47778[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38787__auto__);

(statearr_47778[(1)] = (1));

return statearr_47778;
});
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38787__auto____1 = (function (state_47702){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_47702);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e47779){if((e47779 instanceof Object)){
var ex__38790__auto__ = e47779;
var statearr_47784_49542 = state_47702;
(statearr_47784_49542[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47779;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49548 = state_47702;
state_47702 = G__49548;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38787__auto__ = function(state_47702){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38787__auto____1.call(this,state_47702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38787__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38787__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto____$1,vec__47642,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,out_chan,seq__47595,ast,env__$1,vec__47594,first__47596,head,tail,inst_47604,inst_47597,inst_47605,inst_47602,inst_47600,inst_47601,inst_47616,inst_47617,inst_47618,inst_47619,inst_47620,inst_47621,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache))
})();
var state__39086__auto__ = (function (){var statearr_47793 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_47793[(6)] = c__39084__auto____$1);

return statearr_47793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto____$1,vec__47642,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,out_chan,seq__47595,ast,env__$1,vec__47594,first__47596,head,tail,inst_47604,inst_47597,inst_47605,inst_47602,inst_47600,inst_47601,inst_47616,inst_47617,inst_47618,inst_47619,inst_47620,inst_47621,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache))
);

return c__39084__auto____$1;
});
;})(from_chan,join_item,first_res,check_ast_opt_QMARK_,out_chan,seq__47595,ast,env__$1,vec__47594,first__47596,head,tail,inst_47604,inst_47597,inst_47605,inst_47602,inst_47600,inst_47601,inst_47616,inst_47617,inst_47618,inst_47619,inst_47620,inst_47621,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache))
})();
var inst_47623 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_47618,inst_47622,inst_47617);
var inst_47624 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47625 = [inst_47616];
var inst_47626 = (new cljs.core.PersistentVector(null,1,(5),inst_47624,inst_47625,null));
var inst_47627 = cljs.core.async.into(inst_47626,inst_47618);
var state_47635__$1 = (function (){var statearr_47794 = state_47635;
(statearr_47794[(13)] = inst_47621);

(statearr_47794[(14)] = inst_47623);

return statearr_47794;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47635__$1,(17),inst_47627);
} else {
if((state_val_47636 === (13))){
var inst_47608 = (state_47635[(15)]);
var state_47635__$1 = state_47635;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47635__$1,(16),inst_47608);
} else {
if((state_val_47636 === (6))){
var inst_47604 = (state_47635[(7)]);
var inst_47597 = (state_47635[(8)]);
var inst_47602 = (state_47635[(10)]);
var inst_47600 = (state_47635[(11)]);
var inst_47601 = (state_47635[(12)]);
var inst_47608 = (state_47635[(15)]);
var inst_47597__$1 = edn_query_language.core.query__GT_ast(query);
var inst_47598 = (function (){var ast = inst_47597__$1;
return ((function (ast,inst_47604,inst_47597,inst_47602,inst_47600,inst_47601,inst_47608,inst_47597__$1,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache){
return (function (p1__47532_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__47532_SHARP_));
});
;})(ast,inst_47604,inst_47597,inst_47602,inst_47600,inst_47601,inst_47608,inst_47597__$1,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache))
})();
var inst_47599 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_47597__$1);
var inst_47600__$1 = cljs.core.every_QMARK_(inst_47598,inst_47599);
var inst_47601__$1 = (function (){var ast = inst_47597__$1;
var check_ast_opt_QMARK_ = inst_47600__$1;
return ((function (ast,check_ast_opt_QMARK_,inst_47604,inst_47597,inst_47602,inst_47600,inst_47601,inst_47608,inst_47597__$1,inst_47598,inst_47599,inst_47600__$1,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_item(env__$1,entity){
var or__4131__auto__ = (function (){var and__4120__auto__ = check_ast_opt_QMARK_;
if(and__4120__auto__){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4120__auto__,ast,check_ast_opt_QMARK_,inst_47604,inst_47597,inst_47602,inst_47600,inst_47601,inst_47608,inst_47597__$1,inst_47598,inst_47599,inst_47600__$1,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache){
return (function (ent,p__47838){
var map__47839 = p__47838;
var map__47839__$1 = (((((!((map__47839 == null))))?(((((map__47839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47839):map__47839);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47839__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47839__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5718__auto__ = cljs.core.find(entity,key);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__47843 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47843,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47843,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ent,cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450),key),v);
} else {
return cljs.core.reduced(null);
}
});})(and__4120__auto__,ast,check_ast_opt_QMARK_,inst_47604,inst_47597,inst_47602,inst_47600,inst_47601,inst_47608,inst_47597__$1,inst_47598,inst_47599,inst_47600__$1,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache))
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
;})(ast,check_ast_opt_QMARK_,inst_47604,inst_47597,inst_47602,inst_47600,inst_47601,inst_47608,inst_47597__$1,inst_47598,inst_47599,inst_47600__$1,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache))
})();
var inst_47602__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll);
var inst_47603 = cljs.core.seq(coll);
var inst_47604__$1 = cljs.core.first(inst_47603);
var inst_47605 = cljs.core.next(inst_47603);
var inst_47607 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_47602__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,(0));
var inst_47608__$1 = (inst_47601__$1.cljs$core$IFn$_invoke$arity$2 ? inst_47601__$1.cljs$core$IFn$_invoke$arity$2(inst_47607,inst_47604__$1) : inst_47601__$1.call(null,inst_47607,inst_47604__$1));
var inst_47609 = com.wsscode.common.async_cljs.chan_QMARK_(inst_47608__$1);
var state_47635__$1 = (function (){var statearr_47848 = state_47635;
(statearr_47848[(7)] = inst_47604__$1);

(statearr_47848[(8)] = inst_47597__$1);

(statearr_47848[(9)] = inst_47605);

(statearr_47848[(10)] = inst_47602__$1);

(statearr_47848[(11)] = inst_47600__$1);

(statearr_47848[(12)] = inst_47601__$1);

(statearr_47848[(15)] = inst_47608__$1);

return statearr_47848;
})();
if(inst_47609){
var statearr_47849_49569 = state_47635__$1;
(statearr_47849_49569[(1)] = (13));

} else {
var statearr_47850_49570 = state_47635__$1;
(statearr_47850_49570[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47636 === (17))){
var inst_47629 = (state_47635[(2)]);
var state_47635__$1 = state_47635;
var statearr_47852_49571 = state_47635__$1;
(statearr_47852_49571[(2)] = inst_47629);

(statearr_47852_49571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47636 === (3))){
var inst_47537 = (state_47635[(2)]);
var state_47635__$1 = state_47635;
var statearr_47854_49572 = state_47635__$1;
(statearr_47854_49572[(2)] = inst_47537);


cljs.core.async.impl.ioc_helpers.process_exception(state_47635__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47636 === (12))){
var inst_47549 = (state_47635[(16)]);
var inst_47584 = (state_47635[(2)]);
var inst_47585 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_47586 = [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_47587 = ["#e0e3a4","0.8"];
var inst_47588 = cljs.core.PersistentHashMap.fromArrays(inst_47586,inst_47587);
var inst_47589 = [new cljs.core.Keyword("com.wsscode.pathom.core","parallel-sequence-loop","com.wsscode.pathom.core/parallel-sequence-loop",1692546245),inst_47588];
var inst_47590 = cljs.core.PersistentHashMap.fromArrays(inst_47585,inst_47589);
var inst_47591 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_47549,inst_47590);
var state_47635__$1 = (function (){var statearr_47857 = state_47635;
(statearr_47857[(17)] = inst_47591);

return statearr_47857;
})();
var statearr_47858_49575 = state_47635__$1;
(statearr_47858_49575[(2)] = inst_47584);

(statearr_47858_49575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47636 === (2))){
var inst_47633 = (state_47635[(2)]);
var state_47635__$1 = state_47635;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47635__$1,inst_47633);
} else {
if((state_val_47636 === (11))){
var inst_47567 = (state_47635[(2)]);
var inst_47568 = com.wsscode.common.async_cljs.throw_err(inst_47567);
var state_47635__$1 = state_47635;
var statearr_47859_49584 = state_47635__$1;
(statearr_47859_49584[(2)] = inst_47568);

(statearr_47859_49584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47636 === (9))){
var inst_47563 = (state_47635[(18)]);
var state_47635__$1 = state_47635;
var statearr_47860_49585 = state_47635__$1;
(statearr_47860_49585[(2)] = inst_47563);

(statearr_47860_49585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47636 === (5))){
var inst_47560 = (state_47635[(19)]);
var inst_47557 = (state_47635[(20)]);
var inst_47553 = (state_47635[(21)]);
var inst_47558 = (state_47635[(22)]);
var inst_47556 = (state_47635[(23)]);
var inst_47549 = (state_47635[(16)]);
var inst_47563 = (state_47635[(18)]);
var inst_47543 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_47544 = [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_47545 = ["#e0e3a4","0.8"];
var inst_47546 = cljs.core.PersistentHashMap.fromArrays(inst_47544,inst_47545);
var inst_47547 = [new cljs.core.Keyword("com.wsscode.pathom.core","parallel-sequence-loop","com.wsscode.pathom.core/parallel-sequence-loop",1692546245),inst_47546];
var inst_47548 = cljs.core.PersistentHashMap.fromArrays(inst_47543,inst_47547);
var inst_47549__$1 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_47548);
var inst_47553__$1 = edn_query_language.core.query__GT_ast(query);
var inst_47554 = (function (){var trace_id__21490__auto__ = inst_47549__$1;
var ast = inst_47553__$1;
return ((function (trace_id__21490__auto__,ast,inst_47560,inst_47557,inst_47553,inst_47558,inst_47556,inst_47549,inst_47563,inst_47543,inst_47544,inst_47545,inst_47546,inst_47547,inst_47548,inst_47549__$1,inst_47553__$1,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache){
return (function (p1__47532_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__47532_SHARP_));
});
;})(trace_id__21490__auto__,ast,inst_47560,inst_47557,inst_47553,inst_47558,inst_47556,inst_47549,inst_47563,inst_47543,inst_47544,inst_47545,inst_47546,inst_47547,inst_47548,inst_47549__$1,inst_47553__$1,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache))
})();
var inst_47555 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_47553__$1);
var inst_47556__$1 = cljs.core.every_QMARK_(inst_47554,inst_47555);
var inst_47557__$1 = (function (){var trace_id__21490__auto__ = inst_47549__$1;
var ast = inst_47553__$1;
var check_ast_opt_QMARK_ = inst_47556__$1;
return ((function (trace_id__21490__auto__,ast,check_ast_opt_QMARK_,inst_47560,inst_47557,inst_47553,inst_47558,inst_47556,inst_47549,inst_47563,inst_47543,inst_47544,inst_47545,inst_47546,inst_47547,inst_47548,inst_47549__$1,inst_47553__$1,inst_47554,inst_47555,inst_47556__$1,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_item(env__$1,entity){
var or__4131__auto__ = (function (){var and__4120__auto__ = check_ast_opt_QMARK_;
if(and__4120__auto__){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4120__auto__,trace_id__21490__auto__,ast,check_ast_opt_QMARK_,inst_47560,inst_47557,inst_47553,inst_47558,inst_47556,inst_47549,inst_47563,inst_47543,inst_47544,inst_47545,inst_47546,inst_47547,inst_47548,inst_47549__$1,inst_47553__$1,inst_47554,inst_47555,inst_47556__$1,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache){
return (function (ent,p__47892){
var map__47893 = p__47892;
var map__47893__$1 = (((((!((map__47893 == null))))?(((((map__47893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47893):map__47893);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47893__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47893__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5718__auto__ = cljs.core.find(entity,key);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__47897 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47897,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47897,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ent,cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450),key),v);
} else {
return cljs.core.reduced(null);
}
});})(and__4120__auto__,trace_id__21490__auto__,ast,check_ast_opt_QMARK_,inst_47560,inst_47557,inst_47553,inst_47558,inst_47556,inst_47549,inst_47563,inst_47543,inst_47544,inst_47545,inst_47546,inst_47547,inst_47548,inst_47549__$1,inst_47553__$1,inst_47554,inst_47555,inst_47556__$1,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache))
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
;})(trace_id__21490__auto__,ast,check_ast_opt_QMARK_,inst_47560,inst_47557,inst_47553,inst_47558,inst_47556,inst_47549,inst_47563,inst_47543,inst_47544,inst_47545,inst_47546,inst_47547,inst_47548,inst_47549__$1,inst_47553__$1,inst_47554,inst_47555,inst_47556__$1,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache))
})();
var inst_47558__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll);
var inst_47559 = cljs.core.seq(coll);
var inst_47560__$1 = cljs.core.first(inst_47559);
var inst_47561 = cljs.core.next(inst_47559);
var inst_47562 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_47558__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,(0));
var inst_47563__$1 = (inst_47557__$1.cljs$core$IFn$_invoke$arity$2 ? inst_47557__$1.cljs$core$IFn$_invoke$arity$2(inst_47562,inst_47560__$1) : inst_47557__$1.call(null,inst_47562,inst_47560__$1));
var inst_47564 = com.wsscode.common.async_cljs.chan_QMARK_(inst_47563__$1);
var state_47635__$1 = (function (){var statearr_47903 = state_47635;
(statearr_47903[(19)] = inst_47560__$1);

(statearr_47903[(20)] = inst_47557__$1);

(statearr_47903[(21)] = inst_47553__$1);

(statearr_47903[(22)] = inst_47558__$1);

(statearr_47903[(23)] = inst_47556__$1);

(statearr_47903[(16)] = inst_47549__$1);

(statearr_47903[(24)] = inst_47561);

(statearr_47903[(18)] = inst_47563__$1);

return statearr_47903;
})();
if(inst_47564){
var statearr_47904_49611 = state_47635__$1;
(statearr_47904_49611[(1)] = (8));

} else {
var statearr_47905_49612 = state_47635__$1;
(statearr_47905_49612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47636 === (14))){
var inst_47608 = (state_47635[(15)]);
var state_47635__$1 = state_47635;
var statearr_47906_49613 = state_47635__$1;
(statearr_47906_49613[(2)] = inst_47608);

(statearr_47906_49613[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47636 === (16))){
var inst_47612 = (state_47635[(2)]);
var inst_47613 = com.wsscode.common.async_cljs.throw_err(inst_47612);
var state_47635__$1 = state_47635;
var statearr_47908_49625 = state_47635__$1;
(statearr_47908_49625[(2)] = inst_47613);

(statearr_47908_49625[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47636 === (10))){
var inst_47560 = (state_47635[(19)]);
var inst_47557 = (state_47635[(20)]);
var inst_47553 = (state_47635[(21)]);
var inst_47558 = (state_47635[(22)]);
var inst_47556 = (state_47635[(23)]);
var inst_47549 = (state_47635[(16)]);
var inst_47561 = (state_47635[(24)]);
var inst_47571 = (state_47635[(2)]);
var inst_47572 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_47573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_47574 = cljs.core.range.cljs$core$IFn$_invoke$arity$0();
var inst_47575 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_47561,inst_47574);
var inst_47576 = cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(inst_47572,inst_47575);
var inst_47577 = (function (){var from_chan = inst_47572;
var join_item = inst_47557;
var trace_id__21490__auto__ = inst_47549;
var seq__47551 = inst_47561;
var first_res = inst_47571;
var check_ast_opt_QMARK_ = inst_47556;
var vec__47550 = coll;
var first__47552 = inst_47560;
var out_chan = inst_47573;
var ast = inst_47553;
var env__$1 = inst_47558;
var head = inst_47560;
var tail = inst_47561;
return ((function (from_chan,join_item,trace_id__21490__auto__,seq__47551,first_res,check_ast_opt_QMARK_,vec__47550,first__47552,out_chan,ast,env__$1,head,tail,inst_47560,inst_47557,inst_47553,inst_47558,inst_47556,inst_47549,inst_47561,inst_47571,inst_47572,inst_47573,inst_47574,inst_47575,inst_47576,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline(p__47913,res_ch){
var vec__47914 = p__47913;
var ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47914,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47914,(1),null);
var c__39084__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto____$1,vec__47914,ent,i,from_chan,join_item,trace_id__21490__auto__,seq__47551,first_res,check_ast_opt_QMARK_,vec__47550,first__47552,out_chan,ast,env__$1,head,tail,inst_47560,inst_47557,inst_47553,inst_47558,inst_47556,inst_47549,inst_47561,inst_47571,inst_47572,inst_47573,inst_47574,inst_47575,inst_47576,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto____$1,vec__47914,ent,i,from_chan,join_item,trace_id__21490__auto__,seq__47551,first_res,check_ast_opt_QMARK_,vec__47550,first__47552,out_chan,ast,env__$1,head,tail,inst_47560,inst_47557,inst_47553,inst_47558,inst_47556,inst_47549,inst_47561,inst_47571,inst_47572,inst_47573,inst_47574,inst_47575,inst_47576,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache){
return (function (state_47963){
var state_val_47964 = (state_47963[(1)]);
if((state_val_47964 === (7))){
var inst_47935 = (state_47963[(2)]);
var state_47963__$1 = state_47963;
var statearr_47969_49641 = state_47963__$1;
(statearr_47969_49641[(2)] = inst_47935);

(statearr_47969_49641[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47964 === (1))){
var inst_47921 = (state_47963[(7)]);
var inst_47920 = (i + (1));
var inst_47921__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,inst_47920);
var inst_47923 = (inst_47921__$1 == null);
var inst_47924 = cljs.core.not(inst_47923);
var state_47963__$1 = (function (){var statearr_47971 = state_47963;
(statearr_47971[(7)] = inst_47921__$1);

return statearr_47971;
})();
if(inst_47924){
var statearr_47972_49645 = state_47963__$1;
(statearr_47972_49645[(1)] = (2));

} else {
var statearr_47973_49648 = state_47963__$1;
(statearr_47973_49648[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47964 === (4))){
var inst_47938 = (state_47963[(2)]);
var state_47963__$1 = state_47963;
if(cljs.core.truth_(inst_47938)){
var statearr_47975_49651 = state_47963__$1;
(statearr_47975_49651[(1)] = (8));

} else {
var statearr_47976_49653 = state_47963__$1;
(statearr_47976_49653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47964 === (15))){
var inst_47960 = (state_47963[(2)]);
var inst_47961 = cljs.core.async.close_BANG_(res_ch);
var state_47963__$1 = (function (){var statearr_47979 = state_47963;
(statearr_47979[(8)] = inst_47960);

return statearr_47979;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47963__$1,inst_47961);
} else {
if((state_val_47964 === (13))){
var inst_47958 = (state_47963[(2)]);
var state_47963__$1 = state_47963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47963__$1,(15),res_ch,inst_47958);
} else {
if((state_val_47964 === (6))){
var state_47963__$1 = state_47963;
var statearr_47981_49662 = state_47963__$1;
(statearr_47981_49662[(2)] = false);

(statearr_47981_49662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47964 === (3))){
var state_47963__$1 = state_47963;
var statearr_47982_49668 = state_47963__$1;
(statearr_47982_49668[(2)] = false);

(statearr_47982_49668[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47964 === (12))){
var inst_47951 = (state_47963[(9)]);
var state_47963__$1 = state_47963;
var statearr_47983_49741 = state_47963__$1;
(statearr_47983_49741[(2)] = inst_47951);

(statearr_47983_49741[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47964 === (2))){
var inst_47921 = (state_47963[(7)]);
var inst_47926 = inst_47921.cljs$lang$protocol_mask$partition0$;
var inst_47927 = (inst_47926 & (64));
var inst_47928 = inst_47921.cljs$core$ISeq$;
var inst_47930 = (cljs.core.PROTOCOL_SENTINEL === inst_47928);
var inst_47931 = ((inst_47927) || (inst_47930));
var state_47963__$1 = state_47963;
if(cljs.core.truth_(inst_47931)){
var statearr_47984_49749 = state_47963__$1;
(statearr_47984_49749[(1)] = (5));

} else {
var statearr_47985_49750 = state_47963__$1;
(statearr_47985_49750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47964 === (11))){
var inst_47951 = (state_47963[(9)]);
var state_47963__$1 = state_47963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47963__$1,(14),inst_47951);
} else {
if((state_val_47964 === (9))){
var inst_47921 = (state_47963[(7)]);
var state_47963__$1 = state_47963;
var statearr_47986_49757 = state_47963__$1;
(statearr_47986_49757[(2)] = inst_47921);

(statearr_47986_49757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47964 === (5))){
var state_47963__$1 = state_47963;
var statearr_47987_49758 = state_47963__$1;
(statearr_47987_49758[(2)] = true);

(statearr_47987_49758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47964 === (14))){
var inst_47955 = (state_47963[(2)]);
var state_47963__$1 = state_47963;
var statearr_47988_49760 = state_47963__$1;
(statearr_47988_49760[(2)] = inst_47955);

(statearr_47988_49760[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47964 === (10))){
var inst_47951 = (state_47963[(9)]);
var inst_47944 = (state_47963[(2)]);
var inst_47945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47944,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var inst_47946 = cljs.core.deref(entity_path_cache);
var inst_47947 = cljs.core.PersistentHashMap.EMPTY;
var inst_47948 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_47946,inst_47945,inst_47947);
var inst_47949 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_47948,ent], 0));
var inst_47951__$1 = (join_item.cljs$core$IFn$_invoke$arity$2 ? join_item.cljs$core$IFn$_invoke$arity$2(inst_47944,inst_47949) : join_item.call(null,inst_47944,inst_47949));
var inst_47952 = com.wsscode.common.async_cljs.chan_QMARK_(inst_47951__$1);
var state_47963__$1 = (function (){var statearr_47993 = state_47963;
(statearr_47993[(9)] = inst_47951__$1);

return statearr_47993;
})();
if(inst_47952){
var statearr_47995_49766 = state_47963__$1;
(statearr_47995_49766[(1)] = (11));

} else {
var statearr_47996_49768 = state_47963__$1;
(statearr_47996_49768[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47964 === (8))){
var inst_47921 = (state_47963[(7)]);
var inst_47941 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47921);
var state_47963__$1 = state_47963;
var statearr_47999_49769 = state_47963__$1;
(statearr_47999_49769[(2)] = inst_47941);

(statearr_47999_49769[(1)] = (10));


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
});})(c__39084__auto____$1,vec__47914,ent,i,from_chan,join_item,trace_id__21490__auto__,seq__47551,first_res,check_ast_opt_QMARK_,vec__47550,first__47552,out_chan,ast,env__$1,head,tail,inst_47560,inst_47557,inst_47553,inst_47558,inst_47556,inst_47549,inst_47561,inst_47571,inst_47572,inst_47573,inst_47574,inst_47575,inst_47576,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache))
;
return ((function (switch__38786__auto__,c__39084__auto____$1,vec__47914,ent,i,from_chan,join_item,trace_id__21490__auto__,seq__47551,first_res,check_ast_opt_QMARK_,vec__47550,first__47552,out_chan,ast,env__$1,head,tail,inst_47560,inst_47557,inst_47553,inst_47558,inst_47556,inst_47549,inst_47561,inst_47571,inst_47572,inst_47573,inst_47574,inst_47575,inst_47576,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38787__auto____0 = (function (){
var statearr_48001 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48001[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38787__auto__);

(statearr_48001[(1)] = (1));

return statearr_48001;
});
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38787__auto____1 = (function (state_47963){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_47963);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e48002){if((e48002 instanceof Object)){
var ex__38790__auto__ = e48002;
var statearr_48003_49778 = state_47963;
(statearr_48003_49778[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48002;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49780 = state_47963;
state_47963 = G__49780;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38787__auto__ = function(state_47963){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38787__auto____1.call(this,state_47963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38787__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38787__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto____$1,vec__47914,ent,i,from_chan,join_item,trace_id__21490__auto__,seq__47551,first_res,check_ast_opt_QMARK_,vec__47550,first__47552,out_chan,ast,env__$1,head,tail,inst_47560,inst_47557,inst_47553,inst_47558,inst_47556,inst_47549,inst_47561,inst_47571,inst_47572,inst_47573,inst_47574,inst_47575,inst_47576,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache))
})();
var state__39086__auto__ = (function (){var statearr_48004 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_48004[(6)] = c__39084__auto____$1);

return statearr_48004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto____$1,vec__47914,ent,i,from_chan,join_item,trace_id__21490__auto__,seq__47551,first_res,check_ast_opt_QMARK_,vec__47550,first__47552,out_chan,ast,env__$1,head,tail,inst_47560,inst_47557,inst_47553,inst_47558,inst_47556,inst_47549,inst_47561,inst_47571,inst_47572,inst_47573,inst_47574,inst_47575,inst_47576,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache))
);

return c__39084__auto____$1;
});
;})(from_chan,join_item,trace_id__21490__auto__,seq__47551,first_res,check_ast_opt_QMARK_,vec__47550,first__47552,out_chan,ast,env__$1,head,tail,inst_47560,inst_47557,inst_47553,inst_47558,inst_47556,inst_47549,inst_47561,inst_47571,inst_47572,inst_47573,inst_47574,inst_47575,inst_47576,state_val_47636,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache))
})();
var inst_47578 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_47573,inst_47577,inst_47572);
var inst_47579 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47580 = [inst_47571];
var inst_47581 = (new cljs.core.PersistentVector(null,1,(5),inst_47579,inst_47580,null));
var inst_47582 = cljs.core.async.into(inst_47581,inst_47573);
var state_47635__$1 = (function (){var statearr_48005 = state_47635;
(statearr_48005[(25)] = inst_47576);

(statearr_48005[(26)] = inst_47578);

return statearr_48005;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47635__$1,(12),inst_47582);
} else {
if((state_val_47636 === (8))){
var inst_47563 = (state_47635[(18)]);
var state_47635__$1 = state_47635;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47635__$1,(11),inst_47563);
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
});})(c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache))
;
return ((function (switch__38786__auto__,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38787__auto____0 = (function (){
var statearr_48007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48007[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38787__auto__);

(statearr_48007[(1)] = (1));

return statearr_48007;
});
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38787__auto____1 = (function (state_47635){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_47635);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e48009){if((e48009 instanceof Object)){
var ex__38790__auto__ = e48009;
var statearr_48010_49804 = state_47635;
(statearr_48010_49804[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48009;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49805 = state_47635;
state_47635 = G__49805;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38787__auto__ = function(state_47635){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38787__auto____1.call(this,state_47635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38787__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38787__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache))
})();
var state__39086__auto__ = (function (){var statearr_48011 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_48011[(6)] = c__39084__auto__);

return statearr_48011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,map__47535,map__47535__$1,env,query,entity_path_cache))
);

return c__39084__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Runs the current subquery against the items of the given collection.
 */
com.wsscode.pathom.core.join_seq = (function com$wsscode$pathom$core$join_seq(p__48012,coll){
var map__48013 = p__48012;
var map__48013__$1 = (((((!((map__48013 == null))))?(((((map__48013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48013):map__48013);
var env = map__48013__$1;
var parallel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48013__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","parallel?","com.wsscode.pathom.parser/parallel?",2071817193));
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","join-seq","com.wsscode.pathom.core/join-seq",523699901),new cljs.core.Keyword("com.wsscode.pathom.core","seq-count","com.wsscode.pathom.core/seq-count",-1671473836),cljs.core.count(coll)], null));

if(cljs.core.truth_(parallel_QMARK_)){
return com.wsscode.pathom.core.join_seq_parallel(env,coll);
} else {
var join_item = ((function (map__48013,map__48013__$1,env,parallel_QMARK_){
return (function com$wsscode$pathom$core$join_seq_$_join_item(ent,out){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(ent,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,cljs.core.count(out)));
});})(map__48013,map__48013__$1,env,parallel_QMARK_))
;
var out = cljs.core.PersistentVector.EMPTY;
var G__48022 = coll;
var vec__48023 = G__48022;
var seq__48024 = cljs.core.seq(vec__48023);
var first__48025 = cljs.core.first(seq__48024);
var seq__48024__$1 = cljs.core.next(seq__48024);
var ent = first__48025;
var tail = seq__48024__$1;
var out__$1 = out;
var G__48022__$1 = G__48022;
while(true){
var out__$2 = out__$1;
var vec__48117 = G__48022__$1;
var seq__48118 = cljs.core.seq(vec__48117);
var first__48119 = cljs.core.first(seq__48118);
var seq__48118__$1 = cljs.core.next(seq__48118);
var ent__$1 = first__48119;
var tail__$1 = seq__48118__$1;
if(cljs.core.truth_(ent__$1)){
var res = join_item(ent__$1,out__$2);
if(com.wsscode.common.async_cljs.chan_QMARK_(res)){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (out__$1,G__48022__$1,c__39084__auto__,res,out__$2,vec__48117,seq__48118,first__48119,seq__48118__$1,ent__$1,tail__$1,out,G__48022,vec__48023,seq__48024,first__48025,seq__48024__$1,ent,tail,map__48013,map__48013__$1,env,parallel_QMARK_){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (out__$1,G__48022__$1,c__39084__auto__,res,out__$2,vec__48117,seq__48118,first__48119,seq__48118__$1,ent__$1,tail__$1,out,G__48022,vec__48023,seq__48024,first__48025,seq__48024__$1,ent,tail,map__48013,map__48013__$1,env,parallel_QMARK_){
return (function (state_48166){
var state_val_48167 = (state_48166[(1)]);
if((state_val_48167 === (7))){
var inst_48162 = (state_48166[(2)]);
var state_48166__$1 = state_48166;
var statearr_48169_49989 = state_48166__$1;
(statearr_48169_49989[(2)] = inst_48162);


cljs.core.async.impl.ioc_helpers.process_exception(state_48166__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48167 === (1))){
var state_48166__$1 = state_48166;
var statearr_48170_49990 = state_48166__$1;
(statearr_48170_49990[(2)] = null);

(statearr_48170_49990[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48167 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48166,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_48132 = cljs.core.PersistentVector.EMPTY_NODE;
var state_48166__$1 = (function (){var statearr_48171 = state_48166;
(statearr_48171[(7)] = inst_48132);

return statearr_48171;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48166__$1,(5),res);
} else {
if((state_val_48167 === (6))){
var inst_48148 = (state_48166[(8)]);
var inst_48142 = (state_48166[(9)]);
var inst_48147 = cljs.core.seq(inst_48142);
var inst_48148__$1 = cljs.core.first(inst_48147);
var inst_48149 = cljs.core.next(inst_48147);
var state_48166__$1 = (function (){var statearr_48172 = state_48166;
(statearr_48172[(8)] = inst_48148__$1);

(statearr_48172[(10)] = inst_48149);

return statearr_48172;
})();
if(cljs.core.truth_(inst_48148__$1)){
var statearr_48173_50046 = state_48166__$1;
(statearr_48173_50046[(1)] = (8));

} else {
var statearr_48174_50049 = state_48166__$1;
(statearr_48174_50049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48167 === (3))){
var inst_48121 = (state_48166[(2)]);
var state_48166__$1 = state_48166;
var statearr_48175_50055 = state_48166__$1;
(statearr_48175_50055[(2)] = inst_48121);


cljs.core.async.impl.ioc_helpers.process_exception(state_48166__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48167 === (2))){
var inst_48164 = (state_48166[(2)]);
var state_48166__$1 = state_48166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48166__$1,inst_48164);
} else {
if((state_val_48167 === (11))){
var inst_48141 = (state_48166[(11)]);
var inst_48149 = (state_48166[(10)]);
var inst_48153 = (state_48166[(2)]);
var inst_48154 = com.wsscode.common.async_cljs.throw_err(inst_48153);
var inst_48155 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_48141,inst_48154);
var inst_48141__$1 = inst_48155;
var inst_48142 = inst_48149;
var state_48166__$1 = (function (){var statearr_48176 = state_48166;
(statearr_48176[(11)] = inst_48141__$1);

(statearr_48176[(9)] = inst_48142);

return statearr_48176;
})();
var statearr_48177_50067 = state_48166__$1;
(statearr_48177_50067[(2)] = null);

(statearr_48177_50067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48167 === (9))){
var inst_48141 = (state_48166[(11)]);
var state_48166__$1 = state_48166;
var statearr_48179_50073 = state_48166__$1;
(statearr_48179_50073[(2)] = inst_48141);

(statearr_48179_50073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48167 === (5))){
var inst_48132 = (state_48166[(7)]);
var inst_48134 = (state_48166[(2)]);
var inst_48135 = com.wsscode.common.async_cljs.throw_err(inst_48134);
var inst_48136 = [inst_48135];
var inst_48137 = (new cljs.core.PersistentVector(null,1,(5),inst_48132,inst_48136,null));
var inst_48138 = cljs.core.seq(tail__$1);
var inst_48139 = cljs.core.first(inst_48138);
var inst_48140 = cljs.core.next(inst_48138);
var inst_48141 = inst_48137;
var inst_48142 = tail__$1;
var state_48166__$1 = (function (){var statearr_48182 = state_48166;
(statearr_48182[(12)] = inst_48140);

(statearr_48182[(11)] = inst_48141);

(statearr_48182[(9)] = inst_48142);

(statearr_48182[(13)] = inst_48139);

return statearr_48182;
})();
var statearr_48183_50081 = state_48166__$1;
(statearr_48183_50081[(2)] = null);

(statearr_48183_50081[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48167 === (10))){
var inst_48159 = (state_48166[(2)]);
var state_48166__$1 = state_48166;
var statearr_48184_50083 = state_48166__$1;
(statearr_48184_50083[(2)] = inst_48159);

(statearr_48184_50083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48167 === (8))){
var inst_48148 = (state_48166[(8)]);
var inst_48141 = (state_48166[(11)]);
var inst_48151 = join_item(inst_48148,inst_48141);
var state_48166__$1 = state_48166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48166__$1,(11),inst_48151);
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
});})(out__$1,G__48022__$1,c__39084__auto__,res,out__$2,vec__48117,seq__48118,first__48119,seq__48118__$1,ent__$1,tail__$1,out,G__48022,vec__48023,seq__48024,first__48025,seq__48024__$1,ent,tail,map__48013,map__48013__$1,env,parallel_QMARK_))
;
return ((function (out__$1,G__48022__$1,switch__38786__auto__,c__39084__auto__,res,out__$2,vec__48117,seq__48118,first__48119,seq__48118__$1,ent__$1,tail__$1,out,G__48022,vec__48023,seq__48024,first__48025,seq__48024__$1,ent,tail,map__48013,map__48013__$1,env,parallel_QMARK_){
return (function() {
var com$wsscode$pathom$core$join_seq_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$core$join_seq_$_state_machine__38787__auto____0 = (function (){
var statearr_48186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48186[(0)] = com$wsscode$pathom$core$join_seq_$_state_machine__38787__auto__);

(statearr_48186[(1)] = (1));

return statearr_48186;
});
var com$wsscode$pathom$core$join_seq_$_state_machine__38787__auto____1 = (function (state_48166){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_48166);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e48188){if((e48188 instanceof Object)){
var ex__38790__auto__ = e48188;
var statearr_48189_50101 = state_48166;
(statearr_48189_50101[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48188;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50106 = state_48166;
state_48166 = G__50106;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_$_state_machine__38787__auto__ = function(state_48166){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_$_state_machine__38787__auto____1.call(this,state_48166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_$_state_machine__38787__auto____0;
com$wsscode$pathom$core$join_seq_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_$_state_machine__38787__auto____1;
return com$wsscode$pathom$core$join_seq_$_state_machine__38787__auto__;
})()
;})(out__$1,G__48022__$1,switch__38786__auto__,c__39084__auto__,res,out__$2,vec__48117,seq__48118,first__48119,seq__48118__$1,ent__$1,tail__$1,out,G__48022,vec__48023,seq__48024,first__48025,seq__48024__$1,ent,tail,map__48013,map__48013__$1,env,parallel_QMARK_))
})();
var state__39086__auto__ = (function (){var statearr_48192 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_48192[(6)] = c__39084__auto__);

return statearr_48192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(out__$1,G__48022__$1,c__39084__auto__,res,out__$2,vec__48117,seq__48118,first__48119,seq__48118__$1,ent__$1,tail__$1,out,G__48022,vec__48023,seq__48024,first__48025,seq__48024__$1,ent,tail,map__48013,map__48013__$1,env,parallel_QMARK_))
);

return c__39084__auto__;
} else {
var G__50114 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out__$2,res);
var G__50115 = tail__$1;
out__$1 = G__50114;
G__48022__$1 = G__50115;
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
com.wsscode.pathom.core.ident_key = (function com$wsscode$pathom$core$ident_key(p__48197){
var map__48199 = p__48197;
var map__48199__$1 = (((((!((map__48199 == null))))?(((((map__48199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48199):map__48199);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48199__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var key = (function (){var G__48203 = ast;
if((G__48203 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__48203);
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
com.wsscode.pathom.core.ident_value = (function com$wsscode$pathom$core$ident_value(p__48206){
var map__48207 = p__48206;
var map__48207__$1 = (((((!((map__48207 == null))))?(((((map__48207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48207):map__48207);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48207__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var key = (function (){var G__48212 = ast;
if((G__48212 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__48212);
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
com.wsscode.pathom.core.elide_ast_nodes = (function com$wsscode$pathom$core$elide_ast_nodes(p__48224,elision_set){
var map__48225 = p__48224;
var map__48225__$1 = (((((!((map__48225 == null))))?(((((map__48225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48225):map__48225);
var ast = map__48225__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48225__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48225__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var union_elision_QMARK_ = cljs.core.contains_QMARK_(elision_set,union_key);
if(((union_elision_QMARK_) || (cljs.core.contains_QMARK_(elision_set,key)))){
return null;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"children","children",-940561982),((function (union_elision_QMARK_,map__48225,map__48225__$1,ast,key,union_key){
return (function (c){
if(cljs.core.truth_(c)){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (union_elision_QMARK_,map__48225,map__48225__$1,ast,key,union_key){
return (function (p1__48220_SHARP_){
return (com.wsscode.pathom.core.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2(p1__48220_SHARP_,elision_set) : com.wsscode.pathom.core.elide_ast_nodes.call(null,p1__48220_SHARP_,elision_set));
});})(union_elision_QMARK_,map__48225,map__48225__$1,ast,key,union_key))
,c));
} else {
return null;
}
});})(union_elision_QMARK_,map__48225,map__48225__$1,ast,key,union_key))
);
}
});
com.wsscode.pathom.core.normalize_env = (function com$wsscode$pathom$core$normalize_env(p__48232){
var map__48233 = p__48232;
var map__48233__$1 = (((((!((map__48233 == null))))?(((((map__48233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48233):map__48233);
var env = map__48233__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48233__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var G__48236 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
if((new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249).cljs$core$IFn$_invoke$arity$1(env) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48236,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031));
} else {
return G__48236;
}
});
com.wsscode.pathom.core.merge_queries_STAR_ = (function com$wsscode$pathom$core$merge_queries_STAR_(qa,qb){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ast,p__48242){
var map__48244 = p__48242;
var map__48244__$1 = (((((!((map__48244 == null))))?(((((map__48244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48244):map__48244);
var item_b = map__48244__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48244__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48244__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48244__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5718__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__48244,map__48244__$1,item_b,key,type,params){
return (function (p1__48238_SHARP_,p2__48237_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p2__48237_SHARP_),key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48238_SHARP_,p2__48237_SHARP_], null);
} else {
return null;
}
});})(map__48244,map__48244__$1,item_b,key,type,params))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__48250 = temp__5718__auto__;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48250,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48250,(1),null);
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
var G__48260 = com.wsscode.pathom.core.merge_queries_STAR_(com.wsscode.pathom.core.query__GT_ast(qa),com.wsscode.pathom.core.query__GT_ast(qb));
if((G__48260 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast__GT_query(G__48260);
}
});
/**
 * Converts ident values and param values to ::p/var.
 */
com.wsscode.pathom.core.normalize_query_variables = (function com$wsscode$pathom$core$normalize_query_variables(query){
return com.wsscode.pathom.core.ast__GT_query(com.wsscode.pathom.core.transduce_children(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
var G__48266 = x;
var G__48266__$1 = ((com.wsscode.pathom.core.ident_QMARK_(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48266,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x)),new cljs.core.Keyword("com.wsscode.pathom.core","var","com.wsscode.pathom.core/var",-2126559442)], null)):G__48266);
if(cljs.core.truth_(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__48266__$1,new cljs.core.Keyword(null,"params","params",710516235),((function (G__48266,G__48266__$1){
return (function (p1__48263_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__48266,G__48266__$1){
return (function (p__48271){
var vec__48272 = p__48271;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48272,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48272,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword("com.wsscode.pathom.core","var","com.wsscode.pathom.core/var",-2126559442)], null);
});})(G__48266,G__48266__$1))
),p1__48263_SHARP_);
});})(G__48266,G__48266__$1))
);
} else {
return G__48266__$1;
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
com.wsscode.pathom.core.key_dispatch = (function com$wsscode$pathom$core$key_dispatch(p__48279){
var map__48280 = p__48279;
var map__48280__$1 = (((((!((map__48280 == null))))?(((((map__48280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48280):map__48280);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48280__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
});
/**
 * Dispatch on the first element (type) of an incoming ident.
 */
com.wsscode.pathom.core.entity_dispatch = (function com$wsscode$pathom$core$entity_dispatch(p__48285){
var map__48287 = p__48285;
var map__48287__$1 = (((((!((map__48287 == null))))?(((((map__48287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48287):map__48287);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48287__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
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
com.wsscode.pathom.core.env_placeholder_reader = (function com$wsscode$pathom$core$env_placeholder_reader(p__48293){
var map__48294 = p__48293;
var map__48294__$1 = (((((!((map__48294 == null))))?(((((map__48294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48294):map__48294);
var env = map__48294__$1;
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48294__$1,new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644));
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
com.wsscode.pathom.core.lift_placeholders = (function com$wsscode$pathom$core$lift_placeholders(p__48297,query){
var map__48298 = p__48297;
var map__48298__$1 = (((((!((map__48298 == null))))?(((((map__48298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48298):map__48298);
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48298__$1,new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644));
var ast = com.wsscode.pathom.core.query__GT_ast(query);
var ast_SINGLEQUOTE_ = clojure.walk.postwalk(((function (ast,map__48298,map__48298__$1,placeholder_prefixes){
return (function (x){
var temp__5718__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__5718__auto__)){
var children = temp__5718__auto__;
var map__48302 = cljs.core.group_by(((function (children,temp__5718__auto__,ast,map__48298,map__48298__$1,placeholder_prefixes){
return (function (p1__48296_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__48296_SHARP_))) && (cljs.core.contains_QMARK_(placeholder_prefixes,cljs.core.namespace(new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(p1__48296_SHARP_)))));
});})(children,temp__5718__auto__,ast,map__48298,map__48298__$1,placeholder_prefixes))
,children);
var map__48302__$1 = (((((!((map__48302 == null))))?(((((map__48302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48302):map__48302);
var placeholders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48302__$1,true);
var regular = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48302__$1,false);
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
});})(ast,map__48298,map__48298__$1,placeholder_prefixes))
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
com.wsscode.pathom.core.map_reader = (function com$wsscode$pathom$core$map_reader(p__48308){
var map__48309 = p__48308;
var map__48309__$1 = (((((!((map__48309 == null))))?(((((map__48309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48309):map__48309);
var env = map__48309__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48309__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48309__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.contains_QMARK_(entity,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast))){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
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
com.wsscode.pathom.core.map_reader_STAR_ = (function com$wsscode$pathom$core$map_reader_STAR_(p__48317){
var map__48318 = p__48317;
var map__48318__$1 = (((((!((map__48318 == null))))?(((((map__48318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48318):map__48318);
var map_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48318__$1,new cljs.core.Keyword("com.wsscode.pathom.core","map-key-transform","com.wsscode.pathom.core/map-key-transform",-238565800));
var map_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48318__$1,new cljs.core.Keyword("com.wsscode.pathom.core","map-value-transform","com.wsscode.pathom.core/map-value-transform",1252006952));
return ((function (map__48318,map__48318__$1,map_key_transform,map_value_transform){
return (function (p__48325){
var map__48326 = p__48325;
var map__48326__$1 = (((((!((map__48326 == null))))?(((((map__48326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48326):map__48326);
var env = map__48326__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48326__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48326__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48326__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
var key = (function (){var G__48329 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(map_key_transform)){
return (map_key_transform.cljs$core$IFn$_invoke$arity$1 ? map_key_transform.cljs$core$IFn$_invoke$arity$1(G__48329) : map_key_transform.call(null,G__48329));
} else {
return G__48329;
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
var G__48331 = v;
if(cljs.core.truth_(map_value_transform)){
var G__48332 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var G__48333 = G__48331;
return (map_value_transform.cljs$core$IFn$_invoke$arity$2 ? map_value_transform.cljs$core$IFn$_invoke$arity$2(G__48332,G__48333) : map_value_transform.call(null,G__48332,G__48333));
} else {
return G__48331;
}
}
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
;})(map__48318,map__48318__$1,map_key_transform,map_value_transform))
});
/**
 * Like map-reader*, but handles plain Javascript objects instead of Clojure maps.
 */
com.wsscode.pathom.core.js_obj_reader = (function com$wsscode$pathom$core$js_obj_reader(p__48336){
var map__48337 = p__48336;
var map__48337__$1 = (((((!((map__48337 == null))))?(((((map__48337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48337):map__48337);
var env = map__48337__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48337__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48337__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var js_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48337__$1,new cljs.core.Keyword("com.wsscode.pathom.core","js-key-transform","com.wsscode.pathom.core/js-key-transform",-1588372758),cljs.core.name);
var js_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48337__$1,new cljs.core.Keyword("com.wsscode.pathom.core","js-value-transform","com.wsscode.pathom.core/js-value-transform",1418749137),((function (map__48337,map__48337__$1,env,query,ast,js_key_transform){
return (function (_,v){
return v;
});})(map__48337,map__48337__$1,env,query,ast,js_key_transform))
);
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48337__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
var js_key = (function (){var G__48340 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
return (js_key_transform.cljs$core$IFn$_invoke$arity$1 ? js_key_transform.cljs$core$IFn$_invoke$arity$1(G__48340) : js_key_transform.call(null,G__48340));
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
var G__48349 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var G__48350 = v;
return (js_value_transform.cljs$core$IFn$_invoke$arity$2 ? js_value_transform.cljs$core$IFn$_invoke$arity$2(G__48349,G__48350) : js_value_transform.call(null,G__48349,G__48350));
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
var map__48357 = (function (){var G__48359 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"tx","tx",466630418),tx], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48359) : f.call(null,G__48359));
})();
var map__48357__$1 = (((((!((map__48357 == null))))?(((((map__48357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48357):map__48357);
var env__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var tx__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
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
var res__44659__auto__ = (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,tx) : parser.call(null,env,tx));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44659__auto__)){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,res__44659__auto__){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,res__44659__auto__){
return (function (state_48375){
var state_val_48376 = (state_48375[(1)]);
if((state_val_48376 === (1))){
var state_48375__$1 = state_48375;
var statearr_48381_50399 = state_48375__$1;
(statearr_48381_50399[(2)] = null);

(statearr_48381_50399[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48376 === (2))){
var inst_48373 = (state_48375[(2)]);
var state_48375__$1 = state_48375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48375__$1,inst_48373);
} else {
if((state_val_48376 === (3))){
var inst_48364 = (state_48375[(2)]);
var state_48375__$1 = state_48375;
var statearr_48382_50423 = state_48375__$1;
(statearr_48382_50423[(2)] = inst_48364);


cljs.core.async.impl.ioc_helpers.process_exception(state_48375__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48376 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48375,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_48375__$1 = state_48375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48375__$1,(5),res__44659__auto__);
} else {
if((state_val_48376 === (5))){
var inst_48369 = (state_48375[(2)]);
var inst_48370 = com.wsscode.common.async_cljs.throw_err(inst_48369);
var inst_48371 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48370) : f.call(null,inst_48370));
var state_48375__$1 = state_48375;
var statearr_48385_50444 = state_48375__$1;
(statearr_48385_50444[(2)] = inst_48371);


cljs.core.async.impl.ioc_helpers.process_exception(state_48375__$1);

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
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38787__auto____0 = (function (){
var statearr_48388 = [null,null,null,null,null,null,null];
(statearr_48388[(0)] = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38787__auto__);

(statearr_48388[(1)] = (1));

return statearr_48388;
});
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38787__auto____1 = (function (state_48375){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_48375);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e48391){if((e48391 instanceof Object)){
var ex__38790__auto__ = e48391;
var statearr_48393_50450 = state_48375;
(statearr_48393_50450[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48391;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50451 = state_48375;
state_48375 = G__50451;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38787__auto__ = function(state_48375){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38787__auto____1.call(this,state_48375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38787__auto____0;
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38787__auto____1;
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,res__44659__auto__))
})();
var state__39086__auto__ = (function (){var statearr_48394 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_48394[(6)] = c__39084__auto__);

return statearr_48394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,res__44659__auto__))
);

return c__39084__auto__;
} else {
var res = res__44659__auto__;
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
var G__48404 = msg;
if(cljs.core.truth_(data)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48404)," - ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))].join('');
} else {
return G__48404;
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
com.wsscode.pathom.core.process_error = (function com$wsscode$pathom$core$process_error(p__48412,e){
var map__48413 = p__48412;
var map__48413__$1 = (((((!((map__48413 == null))))?(((((map__48413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48413):map__48413);
var env = map__48413__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48413__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return com.wsscode.pathom.core.error_str(e);
}
});
com.wsscode.pathom.core.add_error = (function com$wsscode$pathom$core$add_error(p__48419,e){
var map__48420 = p__48419;
var map__48420__$1 = (((((!((map__48420 == null))))?(((((map__48420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48420):map__48420);
var env = map__48420__$1;
var errors_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48420__$1,new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48420__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
if(cljs.core.truth_(errors_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(errors_STAR_,cljs.core.assoc,path,com.wsscode.pathom.core.process_error(env,e));
} else {
}

return new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882);
});
com.wsscode.pathom.core.wrap_handle_exception = (function com$wsscode$pathom$core$wrap_handle_exception(reader){
return (function com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal(p__48424){
var map__48426 = p__48424;
var map__48426__$1 = (((((!((map__48426 == null))))?(((((map__48426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48426):map__48426);
var env = map__48426__$1;
var fail_fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48426__$1,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465));
if(cljs.core.truth_(fail_fast_QMARK_)){
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
} else {
try{var x = (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
if(com.wsscode.common.async_cljs.chan_QMARK_(x)){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,x,map__48426,map__48426__$1,env,fail_fast_QMARK_){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,x,map__48426,map__48426__$1,env,fail_fast_QMARK_){
return (function (state_48444){
var state_val_48445 = (state_48444[(1)]);
if((state_val_48445 === (1))){
var state_48444__$1 = state_48444;
var statearr_48448_50495 = state_48444__$1;
(statearr_48448_50495[(2)] = null);

(statearr_48448_50495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48445 === (2))){
var inst_48442 = (state_48444[(2)]);
var state_48444__$1 = state_48444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48444__$1,inst_48442);
} else {
if((state_val_48445 === (3))){
var inst_48431 = (state_48444[(2)]);
var inst_48432 = com.wsscode.pathom.core.add_error(env,inst_48431);
var state_48444__$1 = state_48444;
var statearr_48451_50521 = state_48444__$1;
(statearr_48451_50521[(2)] = inst_48432);


cljs.core.async.impl.ioc_helpers.process_exception(state_48444__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48445 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48444,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_48444__$1 = state_48444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48444__$1,(5),x);
} else {
if((state_val_48445 === (5))){
var inst_48438 = (state_48444[(2)]);
var inst_48439 = com.wsscode.common.async_cljs.throw_err(inst_48438);
var state_48444__$1 = state_48444;
var statearr_48453_50523 = state_48444__$1;
(statearr_48453_50523[(2)] = inst_48439);


cljs.core.async.impl.ioc_helpers.process_exception(state_48444__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39084__auto__,x,map__48426,map__48426__$1,env,fail_fast_QMARK_))
;
return ((function (switch__38786__auto__,c__39084__auto__,x,map__48426,map__48426__$1,env,fail_fast_QMARK_){
return (function() {
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38787__auto____0 = (function (){
var statearr_48454 = [null,null,null,null,null,null,null];
(statearr_48454[(0)] = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38787__auto__);

(statearr_48454[(1)] = (1));

return statearr_48454;
});
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38787__auto____1 = (function (state_48444){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_48444);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e48456){if((e48456 instanceof Object)){
var ex__38790__auto__ = e48456;
var statearr_48457_50526 = state_48444;
(statearr_48457_50526[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50528 = state_48444;
state_48444 = G__50528;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38787__auto__ = function(state_48444){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38787__auto____1.call(this,state_48444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38787__auto____0;
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38787__auto____1;
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,x,map__48426,map__48426__$1,env,fail_fast_QMARK_))
})();
var state__39086__auto__ = (function (){var statearr_48461 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_48461[(6)] = c__39084__auto__);

return statearr_48461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,x,map__48426,map__48426__$1,env,fail_fast_QMARK_))
);

return c__39084__auto__;
} else {
return x;
}
}catch (e48430){var e = e48430;
return com.wsscode.pathom.core.add_error(env,e);
}}
});
});
com.wsscode.pathom.core.wrap_mutate_handle_exception = (function com$wsscode$pathom$core$wrap_mutate_handle_exception(mutate){
return (function com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal(p__48466,k,p){
var map__48467 = p__48466;
var map__48467__$1 = (((((!((map__48467 == null))))?(((((map__48467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48467):map__48467);
var env = map__48467__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48467__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
var fail_fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48467__$1,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465));
if(cljs.core.truth_(fail_fast_QMARK_)){
return (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,p) : mutate.call(null,env,k,p));
} else {
try{return com.wsscode.pathom.core.update_action((mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,p) : mutate.call(null,env,k,p)),((function (map__48467,map__48467__$1,env,process_error,fail_fast_QMARK_){
return (function (action){
return ((function (map__48467,map__48467__$1,env,process_error,fail_fast_QMARK_){
return (function (){
try{var res = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
if(com.wsscode.common.async_cljs.chan_QMARK_(res)){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,res,map__48467,map__48467__$1,env,process_error,fail_fast_QMARK_){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,res,map__48467,map__48467__$1,env,process_error,fail_fast_QMARK_){
return (function (state_48496){
var state_val_48497 = (state_48496[(1)]);
if((state_val_48497 === (1))){
var state_48496__$1 = state_48496;
var statearr_48500_50534 = state_48496__$1;
(statearr_48500_50534[(2)] = null);

(statearr_48500_50534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (2))){
var inst_48494 = (state_48496[(2)]);
var state_48496__$1 = state_48496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48496__$1,inst_48494);
} else {
if((state_val_48497 === (3))){
var inst_48477 = (state_48496[(2)]);
var state_48496__$1 = (function (){var statearr_48501 = state_48496;
(statearr_48501[(7)] = inst_48477);

return statearr_48501;
})();
if(cljs.core.truth_(process_error)){
var statearr_48502_50538 = state_48496__$1;
(statearr_48502_50538[(1)] = (4));

} else {
var statearr_48503_50540 = state_48496__$1;
(statearr_48503_50540[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (4))){
var inst_48477 = (state_48496[(7)]);
var inst_48479 = (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,inst_48477) : process_error.call(null,env,inst_48477));
var state_48496__$1 = state_48496;
var statearr_48504_50553 = state_48496__$1;
(statearr_48504_50553[(2)] = inst_48479);

(statearr_48504_50553[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (5))){
var inst_48477 = (state_48496[(7)]);
var inst_48481 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_48482 = com.wsscode.pathom.core.error_str(inst_48477);
var inst_48483 = [inst_48482];
var inst_48484 = cljs.core.PersistentHashMap.fromArrays(inst_48481,inst_48483);
var state_48496__$1 = state_48496;
var statearr_48506_50557 = state_48496__$1;
(statearr_48506_50557[(2)] = inst_48484);

(statearr_48506_50557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (6))){
var inst_48486 = (state_48496[(2)]);
var state_48496__$1 = state_48496;
var statearr_48507_50559 = state_48496__$1;
(statearr_48507_50559[(2)] = inst_48486);


cljs.core.async.impl.ioc_helpers.process_exception(state_48496__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48497 === (7))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48496,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_48496__$1 = state_48496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48496__$1,(8),res);
} else {
if((state_val_48497 === (8))){
var inst_48491 = (state_48496[(2)]);
var inst_48492 = com.wsscode.common.async_cljs.throw_err(inst_48491);
var state_48496__$1 = state_48496;
var statearr_48510_50564 = state_48496__$1;
(statearr_48510_50564[(2)] = inst_48492);


cljs.core.async.impl.ioc_helpers.process_exception(state_48496__$1);

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
});})(c__39084__auto__,res,map__48467,map__48467__$1,env,process_error,fail_fast_QMARK_))
;
return ((function (switch__38786__auto__,c__39084__auto__,res,map__48467,map__48467__$1,env,process_error,fail_fast_QMARK_){
return (function() {
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38787__auto____0 = (function (){
var statearr_48514 = [null,null,null,null,null,null,null,null];
(statearr_48514[(0)] = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38787__auto__);

(statearr_48514[(1)] = (1));

return statearr_48514;
});
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38787__auto____1 = (function (state_48496){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_48496);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e48516){if((e48516 instanceof Object)){
var ex__38790__auto__ = e48516;
var statearr_48517_50573 = state_48496;
(statearr_48517_50573[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48516;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50575 = state_48496;
state_48496 = G__50575;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38787__auto__ = function(state_48496){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38787__auto____1.call(this,state_48496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38787__auto____0;
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38787__auto____1;
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,res,map__48467,map__48467__$1,env,process_error,fail_fast_QMARK_))
})();
var state__39086__auto__ = (function (){var statearr_48519 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_48519[(6)] = c__39084__auto__);

return statearr_48519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,res,map__48467,map__48467__$1,env,process_error,fail_fast_QMARK_))
);

return c__39084__auto__;
} else {
return res;
}
}catch (e48476){var e = e48476;
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),com.wsscode.pathom.core.error_str(e)], null);
}
}});
;})(map__48467,map__48467__$1,env,process_error,fail_fast_QMARK_))
});})(map__48467,map__48467__$1,env,process_error,fail_fast_QMARK_))
);
}catch (e48472){var e = e48472;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (e,map__48467,map__48467__$1,env,process_error,fail_fast_QMARK_){
return (function (){
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),com.wsscode.pathom.core.error_str(e)], null);
}
});})(e,map__48467,map__48467__$1,env,process_error,fail_fast_QMARK_))
], null);
}}
});
});
com.wsscode.pathom.core.wrap_parser_exception = (function com$wsscode$pathom$core$wrap_parser_exception(parser){
return (function com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal(env,tx){
var errors = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var res__44659__auto__ = (function (){var G__48521 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276),errors);
var G__48522 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__48521,G__48522) : parser.call(null,G__48521,G__48522));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44659__auto__)){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,res__44659__auto__,errors){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,res__44659__auto__,errors){
return (function (state_48544){
var state_val_48545 = (state_48544[(1)]);
if((state_val_48545 === (1))){
var state_48544__$1 = state_48544;
var statearr_48548_50593 = state_48544__$1;
(statearr_48548_50593[(2)] = null);

(statearr_48548_50593[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (2))){
var inst_48542 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48544__$1,inst_48542);
} else {
if((state_val_48545 === (3))){
var inst_48525 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
var statearr_48549_50597 = state_48544__$1;
(statearr_48549_50597[(2)] = inst_48525);


cljs.core.async.impl.ioc_helpers.process_exception(state_48544__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48544,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_48544__$1 = state_48544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48544__$1,(5),res__44659__auto__);
} else {
if((state_val_48545 === (5))){
var inst_48530 = (state_48544[(2)]);
var inst_48531 = com.wsscode.common.async_cljs.throw_err(inst_48530);
var inst_48533 = cljs.core.deref(errors);
var inst_48534 = cljs.core.seq(inst_48533);
var state_48544__$1 = (function (){var statearr_48550 = state_48544;
(statearr_48550[(7)] = inst_48531);

return statearr_48550;
})();
if(inst_48534){
var statearr_48551_50607 = state_48544__$1;
(statearr_48551_50607[(1)] = (6));

} else {
var statearr_48552_50608 = state_48544__$1;
(statearr_48552_50608[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (6))){
var inst_48531 = (state_48544[(7)]);
var inst_48536 = cljs.core.deref(errors);
var inst_48537 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_48531,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),inst_48536);
var state_48544__$1 = state_48544;
var statearr_48553_50609 = state_48544__$1;
(statearr_48553_50609[(2)] = inst_48537);

(statearr_48553_50609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (7))){
var inst_48531 = (state_48544[(7)]);
var state_48544__$1 = state_48544;
var statearr_48554_50610 = state_48544__$1;
(statearr_48554_50610[(2)] = inst_48531);

(statearr_48554_50610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (8))){
var inst_48540 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
var statearr_48555_50614 = state_48544__$1;
(statearr_48555_50614[(2)] = inst_48540);


cljs.core.async.impl.ioc_helpers.process_exception(state_48544__$1);

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
});})(c__39084__auto__,res__44659__auto__,errors))
;
return ((function (switch__38786__auto__,c__39084__auto__,res__44659__auto__,errors){
return (function() {
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38787__auto____0 = (function (){
var statearr_48556 = [null,null,null,null,null,null,null,null];
(statearr_48556[(0)] = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38787__auto__);

(statearr_48556[(1)] = (1));

return statearr_48556;
});
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38787__auto____1 = (function (state_48544){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_48544);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e48557){if((e48557 instanceof Object)){
var ex__38790__auto__ = e48557;
var statearr_48558_50628 = state_48544;
(statearr_48558_50628[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48557;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50629 = state_48544;
state_48544 = G__50629;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38787__auto__ = function(state_48544){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38787__auto____1.call(this,state_48544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38787__auto____0;
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38787__auto____1;
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,res__44659__auto__,errors))
})();
var state__39086__auto__ = (function (){var statearr_48559 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_48559[(6)] = c__39084__auto__);

return statearr_48559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,res__44659__auto__,errors))
);

return c__39084__auto__;
} else {
var res = res__44659__auto__;
var G__48560 = res;
if(cljs.core.seq(cljs.core.deref(errors))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48560,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),cljs.core.deref(errors));
} else {
return G__48560;
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
var G__50647 = cljs.core.butlast(path_SINGLEQUOTE_);
path_SINGLEQUOTE_ = G__50647;
continue;
}
}
break;
}
})());
});
com.wsscode.pathom.core.raise_errors = (function com$wsscode$pathom$core$raise_errors(data){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__48561){
var vec__48562 = p__48561;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48562,(0),null);
var err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48562,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__48565){
var vec__48566 = p__48565;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48566,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48566,(1),null);
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
var G__48569 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([extra_env,env], 0));
var G__48570 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__48569,G__48570) : parser.call(null,G__48569,G__48570));
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
var G__48571 = (extra_env_wrapper.cljs$core$IFn$_invoke$arity$1 ? extra_env_wrapper.cljs$core$IFn$_invoke$arity$1(env) : extra_env_wrapper.call(null,env));
var G__48572 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__48571,G__48572) : parser.call(null,G__48571,G__48572));
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
var vec__48573 = temp__5718__auto____$1;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48573,(0),null);
var hit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48573,(1),null);
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-hit","com.wsscode.pathom.core/cache-hit",1851998374),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

return com.wsscode.common.async_cljs.throw_err(hit);
} else {
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-miss","com.wsscode.pathom.core/cache-miss",1311426337),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

var res__44659__auto__ = (function (){try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}catch (e48576){var e = e48576;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,key,e);

throw e;
}})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44659__auto__)){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,res__44659__auto__,temp__5718__auto____$1,cache,temp__5718__auto__){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,res__44659__auto__,temp__5718__auto____$1,cache,temp__5718__auto__){
return (function (state_48588){
var state_val_48589 = (state_48588[(1)]);
if((state_val_48589 === (1))){
var state_48588__$1 = state_48588;
var statearr_48590_50688 = state_48588__$1;
(statearr_48590_50688[(2)] = null);

(statearr_48590_50688[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (2))){
var inst_48586 = (state_48588[(2)]);
var state_48588__$1 = state_48588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48588__$1,inst_48586);
} else {
if((state_val_48589 === (3))){
var inst_48577 = (state_48588[(2)]);
var state_48588__$1 = state_48588;
var statearr_48591_50689 = state_48588__$1;
(statearr_48591_50689[(2)] = inst_48577);


cljs.core.async.impl.ioc_helpers.process_exception(state_48588__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48589 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48588,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_48588__$1 = state_48588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48588__$1,(5),res__44659__auto__);
} else {
if((state_val_48589 === (5))){
var inst_48582 = (state_48588[(2)]);
var inst_48583 = com.wsscode.common.async_cljs.throw_err(inst_48582);
var inst_48584 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,key,inst_48583);
var state_48588__$1 = (function (){var statearr_48592 = state_48588;
(statearr_48592[(7)] = inst_48584);

return statearr_48592;
})();
var statearr_48593_50693 = state_48588__$1;
(statearr_48593_50693[(2)] = inst_48583);


cljs.core.async.impl.ioc_helpers.process_exception(state_48588__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39084__auto__,res__44659__auto__,temp__5718__auto____$1,cache,temp__5718__auto__))
;
return ((function (switch__38786__auto__,c__39084__auto__,res__44659__auto__,temp__5718__auto____$1,cache,temp__5718__auto__){
return (function() {
var com$wsscode$pathom$core$cached_STAR__$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$core$cached_STAR__$_state_machine__38787__auto____0 = (function (){
var statearr_48594 = [null,null,null,null,null,null,null,null];
(statearr_48594[(0)] = com$wsscode$pathom$core$cached_STAR__$_state_machine__38787__auto__);

(statearr_48594[(1)] = (1));

return statearr_48594;
});
var com$wsscode$pathom$core$cached_STAR__$_state_machine__38787__auto____1 = (function (state_48588){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_48588);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e48595){if((e48595 instanceof Object)){
var ex__38790__auto__ = e48595;
var statearr_48596_50700 = state_48588;
(statearr_48596_50700[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48595;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50708 = state_48588;
state_48588 = G__50708;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_STAR__$_state_machine__38787__auto__ = function(state_48588){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_STAR__$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_STAR__$_state_machine__38787__auto____1.call(this,state_48588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_STAR__$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_STAR__$_state_machine__38787__auto____0;
com$wsscode$pathom$core$cached_STAR__$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_STAR__$_state_machine__38787__auto____1;
return com$wsscode$pathom$core$cached_STAR__$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,res__44659__auto__,temp__5718__auto____$1,cache,temp__5718__auto__))
})();
var state__39086__auto__ = (function (){var statearr_48597 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_48597[(6)] = c__39084__auto__);

return statearr_48597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,res__44659__auto__,temp__5718__auto____$1,cache,temp__5718__auto__))
);

return c__39084__auto__;
} else {
var hit = res__44659__auto__;
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

var ch__44679__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__39084__auto___50736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto___50736,ch__44679__auto__,cache,temp__5718__auto__){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto___50736,ch__44679__auto__,cache,temp__5718__auto__){
return (function (state_48614){
var state_val_48615 = (state_48614[(1)]);
if((state_val_48615 === (1))){
var state_48614__$1 = state_48614;
var statearr_48616_50741 = state_48614__$1;
(statearr_48616_50741[(2)] = null);

(statearr_48616_50741[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (2))){
var inst_48611 = (state_48614[(2)]);
var inst_48612 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__44679__auto__,inst_48611);
var state_48614__$1 = state_48614;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48614__$1,inst_48612);
} else {
if((state_val_48615 === (3))){
var inst_48598 = (state_48614[(2)]);
var state_48614__$1 = state_48614;
var statearr_48617_50746 = state_48614__$1;
(statearr_48617_50746[(2)] = inst_48598);


cljs.core.async.impl.ioc_helpers.process_exception(state_48614__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (4))){
var inst_48602 = (state_48614[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48614,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_48602__$1 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var inst_48603 = com.wsscode.common.async_cljs.chan_QMARK_(inst_48602__$1);
var state_48614__$1 = (function (){var statearr_48618 = state_48614;
(statearr_48618[(7)] = inst_48602__$1);

return statearr_48618;
})();
if(inst_48603){
var statearr_48619_50748 = state_48614__$1;
(statearr_48619_50748[(1)] = (5));

} else {
var statearr_48620_50749 = state_48614__$1;
(statearr_48620_50749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (5))){
var inst_48602 = (state_48614[(7)]);
var state_48614__$1 = state_48614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48614__$1,(8),inst_48602);
} else {
if((state_val_48615 === (6))){
var inst_48602 = (state_48614[(7)]);
var state_48614__$1 = state_48614;
var statearr_48621_50754 = state_48614__$1;
(statearr_48621_50754[(2)] = inst_48602);

(statearr_48621_50754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (7))){
var inst_48609 = (state_48614[(2)]);
var state_48614__$1 = state_48614;
var statearr_48622_50755 = state_48614__$1;
(statearr_48622_50755[(2)] = inst_48609);


cljs.core.async.impl.ioc_helpers.process_exception(state_48614__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48615 === (8))){
var inst_48606 = (state_48614[(2)]);
var state_48614__$1 = state_48614;
var statearr_48623_50756 = state_48614__$1;
(statearr_48623_50756[(2)] = inst_48606);

(statearr_48623_50756[(1)] = (7));


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
});})(c__39084__auto___50736,ch__44679__auto__,cache,temp__5718__auto__))
;
return ((function (switch__38786__auto__,c__39084__auto___50736,ch__44679__auto__,cache,temp__5718__auto__){
return (function() {
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38787__auto____0 = (function (){
var statearr_48624 = [null,null,null,null,null,null,null,null];
(statearr_48624[(0)] = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38787__auto__);

(statearr_48624[(1)] = (1));

return statearr_48624;
});
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38787__auto____1 = (function (state_48614){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_48614);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e48625){if((e48625 instanceof Object)){
var ex__38790__auto__ = e48625;
var statearr_48626_50768 = state_48614;
(statearr_48626_50768[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48625;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50770 = state_48614;
state_48614 = G__50770;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38787__auto__ = function(state_48614){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38787__auto____1.call(this,state_48614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38787__auto____0;
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38787__auto____1;
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto___50736,ch__44679__auto__,cache,temp__5718__auto__))
})();
var state__39086__auto__ = (function (){var statearr_48627 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_48627[(6)] = c__39084__auto___50736);

return statearr_48627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto___50736,ch__44679__auto__,cache,temp__5718__auto__))
);


return ch__44679__auto__;
}
});})(cache,temp__5718__auto__))
);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache),key);
} else {
var ch__44679__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__39084__auto___50779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto___50779,ch__44679__auto__,temp__5718__auto__){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto___50779,ch__44679__auto__,temp__5718__auto__){
return (function (state_48644){
var state_val_48645 = (state_48644[(1)]);
if((state_val_48645 === (1))){
var state_48644__$1 = state_48644;
var statearr_48646_50781 = state_48644__$1;
(statearr_48646_50781[(2)] = null);

(statearr_48646_50781[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48645 === (2))){
var inst_48641 = (state_48644[(2)]);
var inst_48642 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__44679__auto__,inst_48641);
var state_48644__$1 = state_48644;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48644__$1,inst_48642);
} else {
if((state_val_48645 === (3))){
var inst_48628 = (state_48644[(2)]);
var state_48644__$1 = state_48644;
var statearr_48647_50785 = state_48644__$1;
(statearr_48647_50785[(2)] = inst_48628);


cljs.core.async.impl.ioc_helpers.process_exception(state_48644__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48645 === (4))){
var inst_48632 = (state_48644[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48644,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_48632__$1 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var inst_48633 = com.wsscode.common.async_cljs.chan_QMARK_(inst_48632__$1);
var state_48644__$1 = (function (){var statearr_48648 = state_48644;
(statearr_48648[(7)] = inst_48632__$1);

return statearr_48648;
})();
if(inst_48633){
var statearr_48649_50792 = state_48644__$1;
(statearr_48649_50792[(1)] = (5));

} else {
var statearr_48650_50793 = state_48644__$1;
(statearr_48650_50793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48645 === (5))){
var inst_48632 = (state_48644[(7)]);
var state_48644__$1 = state_48644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48644__$1,(8),inst_48632);
} else {
if((state_val_48645 === (6))){
var inst_48632 = (state_48644[(7)]);
var state_48644__$1 = state_48644;
var statearr_48651_50795 = state_48644__$1;
(statearr_48651_50795[(2)] = inst_48632);

(statearr_48651_50795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48645 === (7))){
var inst_48639 = (state_48644[(2)]);
var state_48644__$1 = state_48644;
var statearr_48652_50799 = state_48644__$1;
(statearr_48652_50799[(2)] = inst_48639);


cljs.core.async.impl.ioc_helpers.process_exception(state_48644__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48645 === (8))){
var inst_48636 = (state_48644[(2)]);
var state_48644__$1 = state_48644;
var statearr_48653_50800 = state_48644__$1;
(statearr_48653_50800[(2)] = inst_48636);

(statearr_48653_50800[(1)] = (7));


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
});})(c__39084__auto___50779,ch__44679__auto__,temp__5718__auto__))
;
return ((function (switch__38786__auto__,c__39084__auto___50779,ch__44679__auto__,temp__5718__auto__){
return (function() {
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38787__auto____0 = (function (){
var statearr_48654 = [null,null,null,null,null,null,null,null];
(statearr_48654[(0)] = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38787__auto__);

(statearr_48654[(1)] = (1));

return statearr_48654;
});
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38787__auto____1 = (function (state_48644){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_48644);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e48655){if((e48655 instanceof Object)){
var ex__38790__auto__ = e48655;
var statearr_48656_50809 = state_48644;
(statearr_48656_50809[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48655;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50812 = state_48644;
state_48644 = G__50812;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38787__auto__ = function(state_48644){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38787__auto____1.call(this,state_48644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38787__auto____0;
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38787__auto____1;
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto___50779,ch__44679__auto__,temp__5718__auto__))
})();
var state__39086__auto__ = (function (){var statearr_48657 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_48657[(6)] = c__39084__auto___50779);

return statearr_48657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto___50779,ch__44679__auto__,temp__5718__auto__))
);


return ch__44679__auto__;
}
});
com.wsscode.pathom.core.cached_async = (function com$wsscode$pathom$core$cached_async(p__48658,key,f){
var map__48659 = p__48658;
var map__48659__$1 = (((((!((map__48659 == null))))?(((((map__48659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48659):map__48659);
var env = map__48659__$1;
var async_request_cache_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48659__$1,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch","com.wsscode.pathom.core/async-request-cache-ch",-1864666369));
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48659__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
if(cljs.core.truth_(async_request_cache_ch)){
if(cljs.core.contains_QMARK_(cljs.core.deref(request_cache),key)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(request_cache),key);
} else {
var out = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(async_request_cache_ch,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,key,f,out], null));

var ch__44679__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__39084__auto___50826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto___50826,ch__44679__auto__,out,map__48659,map__48659__$1,env,async_request_cache_ch,request_cache){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto___50826,ch__44679__auto__,out,map__48659,map__48659__$1,env,async_request_cache_ch,request_cache){
return (function (state_48673){
var state_val_48674 = (state_48673[(1)]);
if((state_val_48674 === (1))){
var state_48673__$1 = state_48673;
var statearr_48675_50833 = state_48673__$1;
(statearr_48675_50833[(2)] = null);

(statearr_48675_50833[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48674 === (2))){
var inst_48670 = (state_48673[(2)]);
var inst_48671 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__44679__auto__,inst_48670);
var state_48673__$1 = state_48673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48673__$1,inst_48671);
} else {
if((state_val_48674 === (3))){
var inst_48661 = (state_48673[(2)]);
var state_48673__$1 = state_48673;
var statearr_48676_50834 = state_48673__$1;
(statearr_48676_50834[(2)] = inst_48661);


cljs.core.async.impl.ioc_helpers.process_exception(state_48673__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48674 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48673,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_48673__$1 = state_48673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48673__$1,(6),out);
} else {
if((state_val_48674 === (5))){
var inst_48668 = (state_48673[(2)]);
var state_48673__$1 = state_48673;
var statearr_48677_50843 = state_48673__$1;
(statearr_48677_50843[(2)] = inst_48668);


cljs.core.async.impl.ioc_helpers.process_exception(state_48673__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48674 === (6))){
var inst_48666 = (state_48673[(2)]);
var state_48673__$1 = state_48673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48673__$1,(5),inst_48666);
} else {
return null;
}
}
}
}
}
}
});})(c__39084__auto___50826,ch__44679__auto__,out,map__48659,map__48659__$1,env,async_request_cache_ch,request_cache))
;
return ((function (switch__38786__auto__,c__39084__auto___50826,ch__44679__auto__,out,map__48659,map__48659__$1,env,async_request_cache_ch,request_cache){
return (function() {
var com$wsscode$pathom$core$cached_async_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$core$cached_async_$_state_machine__38787__auto____0 = (function (){
var statearr_48678 = [null,null,null,null,null,null,null];
(statearr_48678[(0)] = com$wsscode$pathom$core$cached_async_$_state_machine__38787__auto__);

(statearr_48678[(1)] = (1));

return statearr_48678;
});
var com$wsscode$pathom$core$cached_async_$_state_machine__38787__auto____1 = (function (state_48673){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_48673);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e48679){if((e48679 instanceof Object)){
var ex__38790__auto__ = e48679;
var statearr_48680_50852 = state_48673;
(statearr_48680_50852[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48679;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50855 = state_48673;
state_48673 = G__50855;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_$_state_machine__38787__auto__ = function(state_48673){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_$_state_machine__38787__auto____1.call(this,state_48673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_$_state_machine__38787__auto____0;
com$wsscode$pathom$core$cached_async_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_$_state_machine__38787__auto____1;
return com$wsscode$pathom$core$cached_async_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto___50826,ch__44679__auto__,out,map__48659,map__48659__$1,env,async_request_cache_ch,request_cache))
})();
var state__39086__auto__ = (function (){var statearr_48681 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_48681[(6)] = c__39084__auto___50826);

return statearr_48681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto___50826,ch__44679__auto__,out,map__48659,map__48659__$1,env,async_request_cache_ch,request_cache))
);


return ch__44679__auto__;
}
} else {
return com.wsscode.pathom.core.cached_async_STAR_(env,key,f);
}
});
com.wsscode.pathom.core.request_cache_async_loop = (function com$wsscode$pathom$core$request_cache_async_loop(ch){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__){
return (function (state_48703){
var state_val_48704 = (state_48703[(1)]);
if((state_val_48704 === (1))){
var state_48703__$1 = state_48703;
var statearr_48705_50864 = state_48703__$1;
(statearr_48705_50864[(2)] = null);

(statearr_48705_50864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48704 === (2))){
var state_48703__$1 = state_48703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48703__$1,(4),ch);
} else {
if((state_val_48704 === (3))){
var inst_48701 = (state_48703[(2)]);
var state_48703__$1 = state_48703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48703__$1,inst_48701);
} else {
if((state_val_48704 === (4))){
var inst_48684 = (state_48703[(7)]);
var inst_48684__$1 = (state_48703[(2)]);
var state_48703__$1 = (function (){var statearr_48706 = state_48703;
(statearr_48706[(7)] = inst_48684__$1);

return statearr_48706;
})();
if(cljs.core.truth_(inst_48684__$1)){
var statearr_48707_50873 = state_48703__$1;
(statearr_48707_50873[(1)] = (5));

} else {
var statearr_48708_50874 = state_48703__$1;
(statearr_48708_50874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48704 === (5))){
var inst_48684 = (state_48703[(7)]);
var inst_48689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48684,(0),null);
var inst_48690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48684,(1),null);
var inst_48691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48684,(2),null);
var inst_48692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48684,(3),null);
var inst_48693 = com.wsscode.pathom.core.cached_async_STAR_(inst_48689,inst_48690,inst_48691);
var state_48703__$1 = state_48703;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48703__$1,(8),inst_48692,inst_48693);
} else {
if((state_val_48704 === (6))){
var state_48703__$1 = state_48703;
var statearr_48709_50881 = state_48703__$1;
(statearr_48709_50881[(2)] = null);

(statearr_48709_50881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48704 === (7))){
var inst_48699 = (state_48703[(2)]);
var state_48703__$1 = state_48703;
var statearr_48710_50882 = state_48703__$1;
(statearr_48710_50882[(2)] = inst_48699);

(statearr_48710_50882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48704 === (8))){
var inst_48695 = (state_48703[(2)]);
var state_48703__$1 = (function (){var statearr_48711 = state_48703;
(statearr_48711[(8)] = inst_48695);

return statearr_48711;
})();
var statearr_48712_50883 = state_48703__$1;
(statearr_48712_50883[(2)] = null);

(statearr_48712_50883[(1)] = (2));


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
});})(c__39084__auto__))
;
return ((function (switch__38786__auto__,c__39084__auto__){
return (function() {
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38787__auto____0 = (function (){
var statearr_48713 = [null,null,null,null,null,null,null,null,null];
(statearr_48713[(0)] = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38787__auto__);

(statearr_48713[(1)] = (1));

return statearr_48713;
});
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38787__auto____1 = (function (state_48703){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_48703);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e48714){if((e48714 instanceof Object)){
var ex__38790__auto__ = e48714;
var statearr_48715_50885 = state_48703;
(statearr_48715_50885[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48714;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50886 = state_48703;
state_48703 = G__50886;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38787__auto__ = function(state_48703){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38787__auto____1.call(this,state_48703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38787__auto____0;
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38787__auto____1;
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__))
})();
var state__39086__auto__ = (function (){var statearr_48716 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_48716[(6)] = c__39084__auto__);

return statearr_48716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__))
);

return c__39084__auto__;
});
com.wsscode.pathom.core.cache_hit = (function com$wsscode$pathom$core$cache_hit(p__48717,key,value){
var map__48718 = p__48717;
var map__48718__$1 = (((((!((map__48718 == null))))?(((((map__48718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48718):map__48718);
var env = map__48718__$1;
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48718__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-miss","com.wsscode.pathom.core/cache-miss",1311426337),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(request_cache,cljs.core.assoc,key,value);

return value;
});
com.wsscode.pathom.core.cache_contains_QMARK_ = (function com$wsscode$pathom$core$cache_contains_QMARK_(p__48720,key){
var map__48721 = p__48720;
var map__48721__$1 = (((((!((map__48721 == null))))?(((((map__48721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48721):map__48721);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48721__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.contains_QMARK_(cljs.core.deref(request_cache),key);
});
com.wsscode.pathom.core.cache_read = (function com$wsscode$pathom$core$cache_read(p__48723,key){
var map__48724 = p__48723;
var map__48724__$1 = (((((!((map__48724 == null))))?(((((map__48724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48724):map__48724);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48724__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(request_cache),key);
});
com.wsscode.pathom.core.wrap_add_path = (function com$wsscode$pathom$core$wrap_add_path(reader){
return (function (p__48726){
var map__48727 = p__48726;
var map__48727__$1 = (((((!((map__48727 == null))))?(((((map__48727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48727):map__48727);
var env = map__48727__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48727__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var G__48729 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(G__48729) : reader.call(null,G__48729));
});
});
com.wsscode.pathom.core.group_plugins_by_action = (function com$wsscode$pathom$core$group_plugins_by_action(plugins){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g,p){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$1,p__48730){
var vec__48731 = p__48730;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48731,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48731,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(g__$1,k,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
}),g,p);
}),cljs.core.PersistentArrayMap.EMPTY,plugins);
});
com.wsscode.pathom.core.wrap_normalize_env = (function com$wsscode$pathom$core$wrap_normalize_env(var_args){
var G__48735 = arguments.length;
switch (G__48735) {
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
var G__48736 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),tx], null),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","plugin-actions","com.wsscode.pathom.core/plugin-actions",-876552970),com.wsscode.pathom.core.group_plugins_by_action(plugins),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),plugins,new cljs.core.Keyword(null,"target","target",253001721),target], null)], 0));
var G__48737 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__48736,G__48737) : parser.call(null,G__48736,G__48737));
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
var res__44659__auto__ = (function (){var G__48738 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.parser","done-signal*","com.wsscode.pathom.parser/done-signal*",2069309538),signal,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","active-paths","com.wsscode.pathom.parser/active-paths",457466204),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.PersistentVector.EMPTY], 0));
var G__48739 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__48738,G__48739) : parser.call(null,G__48738,G__48739));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44659__auto__)){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,res__44659__auto__,signal){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,res__44659__auto__,signal){
return (function (state_48751){
var state_val_48752 = (state_48751[(1)]);
if((state_val_48752 === (1))){
var state_48751__$1 = state_48751;
var statearr_48753_50903 = state_48751__$1;
(statearr_48753_50903[(2)] = null);

(statearr_48753_50903[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48752 === (2))){
var inst_48749 = (state_48751[(2)]);
var state_48751__$1 = state_48751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48751__$1,inst_48749);
} else {
if((state_val_48752 === (3))){
var inst_48740 = (state_48751[(2)]);
var state_48751__$1 = state_48751;
var statearr_48754_50906 = state_48751__$1;
(statearr_48754_50906[(2)] = inst_48740);


cljs.core.async.impl.ioc_helpers.process_exception(state_48751__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48752 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48751,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_48751__$1 = state_48751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48751__$1,(5),res__44659__auto__);
} else {
if((state_val_48752 === (5))){
var inst_48745 = (state_48751[(2)]);
var inst_48746 = com.wsscode.common.async_cljs.throw_err(inst_48745);
var inst_48747 = cljs.core.reset_BANG_(signal,true);
var state_48751__$1 = (function (){var statearr_48755 = state_48751;
(statearr_48755[(7)] = inst_48747);

return statearr_48755;
})();
var statearr_48756_50907 = state_48751__$1;
(statearr_48756_50907[(2)] = inst_48746);


cljs.core.async.impl.ioc_helpers.process_exception(state_48751__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39084__auto__,res__44659__auto__,signal))
;
return ((function (switch__38786__auto__,c__39084__auto__,res__44659__auto__,signal){
return (function() {
var com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38787__auto____0 = (function (){
var statearr_48757 = [null,null,null,null,null,null,null,null];
(statearr_48757[(0)] = com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38787__auto__);

(statearr_48757[(1)] = (1));

return statearr_48757;
});
var com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38787__auto____1 = (function (state_48751){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_48751);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e48758){if((e48758 instanceof Object)){
var ex__38790__auto__ = e48758;
var statearr_48759_50912 = state_48751;
(statearr_48759_50912[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48758;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50914 = state_48751;
state_48751 = G__50914;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38787__auto__ = function(state_48751){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38787__auto____1.call(this,state_48751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38787__auto____0;
com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38787__auto____1;
return com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,res__44659__auto__,signal))
})();
var state__39086__auto__ = (function (){var statearr_48760 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_48760[(6)] = c__39084__auto__);

return statearr_48760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,res__44659__auto__,signal))
);

return c__39084__auto__;
} else {
var res = res__44659__auto__;
cljs.core.reset_BANG_(signal,true);

return res;
}
});
});
com.wsscode.pathom.core.wrap_setup_async_cache = (function com$wsscode$pathom$core$wrap_setup_async_cache(parser){
return (function com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal(env,tx){
var async_cache_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch-size","com.wsscode.pathom.core/async-request-cache-ch-size",-437531159),(1024)));
com.wsscode.pathom.core.request_cache_async_loop(async_cache_ch);

var res__44659__auto__ = (function (){var G__48761 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch","com.wsscode.pathom.core/async-request-cache-ch",-1864666369),async_cache_ch);
var G__48762 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__48761,G__48762) : parser.call(null,G__48761,G__48762));
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44659__auto__)){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,res__44659__auto__,async_cache_ch){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,res__44659__auto__,async_cache_ch){
return (function (state_48774){
var state_val_48775 = (state_48774[(1)]);
if((state_val_48775 === (1))){
var state_48774__$1 = state_48774;
var statearr_48776_50915 = state_48774__$1;
(statearr_48776_50915[(2)] = null);

(statearr_48776_50915[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48775 === (2))){
var inst_48772 = (state_48774[(2)]);
var state_48774__$1 = state_48774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48774__$1,inst_48772);
} else {
if((state_val_48775 === (3))){
var inst_48763 = (state_48774[(2)]);
var state_48774__$1 = state_48774;
var statearr_48777_50916 = state_48774__$1;
(statearr_48777_50916[(2)] = inst_48763);


cljs.core.async.impl.ioc_helpers.process_exception(state_48774__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48775 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48774,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_48774__$1 = state_48774;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48774__$1,(5),res__44659__auto__);
} else {
if((state_val_48775 === (5))){
var inst_48768 = (state_48774[(2)]);
var inst_48769 = com.wsscode.common.async_cljs.throw_err(inst_48768);
var inst_48770 = cljs.core.async.close_BANG_(async_cache_ch);
var state_48774__$1 = (function (){var statearr_48778 = state_48774;
(statearr_48778[(7)] = inst_48770);

return statearr_48778;
})();
var statearr_48779_50917 = state_48774__$1;
(statearr_48779_50917[(2)] = inst_48769);


cljs.core.async.impl.ioc_helpers.process_exception(state_48774__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39084__auto__,res__44659__auto__,async_cache_ch))
;
return ((function (switch__38786__auto__,c__39084__auto__,res__44659__auto__,async_cache_ch){
return (function() {
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38787__auto____0 = (function (){
var statearr_48780 = [null,null,null,null,null,null,null,null];
(statearr_48780[(0)] = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38787__auto__);

(statearr_48780[(1)] = (1));

return statearr_48780;
});
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38787__auto____1 = (function (state_48774){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_48774);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e48781){if((e48781 instanceof Object)){
var ex__38790__auto__ = e48781;
var statearr_48782_50929 = state_48774;
(statearr_48782_50929[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48781;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50934 = state_48774;
state_48774 = G__50934;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38787__auto__ = function(state_48774){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38787__auto____1.call(this,state_48774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38787__auto____0;
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38787__auto____1;
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,res__44659__auto__,async_cache_ch))
})();
var state__39086__auto__ = (function (){var statearr_48783 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_48783[(6)] = c__39084__auto__);

return statearr_48783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,res__44659__auto__,async_cache_ch))
);

return c__39084__auto__;
} else {
var res = res__44659__auto__;
cljs.core.async.close_BANG_(async_cache_ch);

return res;
}
});
});
com.wsscode.pathom.core.wrap_reduce_params = (function com$wsscode$pathom$core$wrap_reduce_params(reader){
return (function() {
var G__50940 = null;
var G__50940__1 = (function (env){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env))], null);
});
var G__50940__3 = (function (env,_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env))], null);
});
G__50940 = function(env,_,___$1){
switch(arguments.length){
case 1:
return G__50940__1.call(this,env);
case 3:
return G__50940__3.call(this,env,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50940.cljs$core$IFn$_invoke$arity$1 = G__50940__1;
G__50940.cljs$core$IFn$_invoke$arity$3 = G__50940__3;
return G__50940;
})()
});
com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_ = (function com$wsscode$pathom$core$pathom_read_SINGLEQUOTE_(p__48784){
var map__48785 = p__48784;
var map__48785__$1 = (((((!((map__48785 == null))))?(((((map__48785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48785):map__48785);
var env = map__48785__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48785__$1,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410));
return com.wsscode.pathom.core.read_from(env,reader);
});
com.wsscode.pathom.core.apply_plugins = (function com$wsscode$pathom$core$apply_plugins(var_args){
var args__4736__auto__ = [];
var len__4730__auto___50956 = arguments.length;
var i__4731__auto___50957 = (0);
while(true){
if((i__4731__auto___50957 < len__4730__auto___50956)){
args__4736__auto__.push((arguments[i__4731__auto___50957]));

var G__50963 = (i__4731__auto___50957 + (1));
i__4731__auto___50957 = G__50963;
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
com.wsscode.pathom.core.apply_plugins.cljs$lang$applyTo = (function (seq48787){
var G__48788 = cljs.core.first(seq48787);
var seq48787__$1 = cljs.core.next(seq48787);
var G__48789 = cljs.core.first(seq48787__$1);
var seq48787__$2 = cljs.core.next(seq48787__$1);
var G__48790 = cljs.core.first(seq48787__$2);
var seq48787__$3 = cljs.core.next(seq48787__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48788,G__48789,G__48790,seq48787__$3);
});

com.wsscode.pathom.core.exec_plugin_actions = (function com$wsscode$pathom$core$exec_plugin_actions(var_args){
var args__4736__auto__ = [];
var len__4730__auto___50974 = arguments.length;
var i__4731__auto___50975 = (0);
while(true){
if((i__4731__auto___50975 < len__4730__auto___50974)){
args__4736__auto__.push((arguments[i__4731__auto___50975]));

var G__50976 = (i__4731__auto___50975 + (1));
i__4731__auto___50975 = G__50976;
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
com.wsscode.pathom.core.exec_plugin_actions.cljs$lang$applyTo = (function (seq48791){
var G__48792 = cljs.core.first(seq48791);
var seq48791__$1 = cljs.core.next(seq48791);
var G__48793 = cljs.core.first(seq48791__$1);
var seq48791__$2 = cljs.core.next(seq48791__$1);
var G__48794 = cljs.core.first(seq48791__$2);
var seq48791__$3 = cljs.core.next(seq48791__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48792,G__48793,G__48794,seq48791__$3);
});

com.wsscode.pathom.core.easy_plugins = (function com$wsscode$pathom$core$easy_plugins(p__48795){
var map__48796 = p__48795;
var map__48796__$1 = (((((!((map__48796 == null))))?(((((map__48796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48796):map__48796);
var plugins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48796__$1,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48796__$1,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378));
var G__48798 = plugins;
var G__48798__$1 = ((cljs.core.fn_QMARK_(env))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_wrap_plugin(env)], null),G__48798):G__48798);
if(cljs.core.map_QMARK_(env)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_plugin(env)], null),G__48798__$1);
} else {
return G__48798__$1;
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
var G__48799 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),map], null);
var G__48800 = selection;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__48799,G__48800) : parser.call(null,G__48799,G__48800));
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
var G__48802 = arguments.length;
switch (G__48802) {
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
return (function (p__48803){
var map__48804 = p__48803;
var map__48804__$1 = (((((!((map__48804 == null))))?(((((map__48804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48804):map__48804);
var env = map__48804__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48804__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
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
com.wsscode.pathom.core.pathom_read = (function com$wsscode$pathom$core$pathom_read(p__48806,_,___$1){
var map__48807 = p__48806;
var map__48807__$1 = (((((!((map__48807 == null))))?(((((map__48807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48807):map__48807);
var env = map__48807__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48807__$1,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410));
var process_reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48807__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-reader","com.wsscode.pathom.core/process-reader",348867871));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var env__$1 = com.wsscode.pathom.core.normalize_env(env);
return com.wsscode.pathom.core.read_from(env__$1,(cljs.core.truth_(process_reader)?(process_reader.cljs$core$IFn$_invoke$arity$1 ? process_reader.cljs$core$IFn$_invoke$arity$1(reader) : process_reader.call(null,reader)):reader));
})()], null);
});
/**
 * DEPRECATED: use ident-value instead
 */
com.wsscode.pathom.core.ast_key_id = (function com$wsscode$pathom$core$ast_key_id(ast){
var key = (function (){var G__48809 = ast;
if((G__48809 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__48809);
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

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",-1769729738,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"attributes","attributes",-74013604)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__48810){
return cljs.core.coll_QMARK_(G__48810);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846))], null),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)),cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","entity-attr","com.wsscode.pathom.core/entity-attr",116696515,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"default","default",-1987822328)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),cljs.spec.alpha.maybe_impl(cljs.core.any_QMARK_,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","entity!","com.wsscode.pathom.core/entity!",601467064,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031))),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"attributes","attributes",-74013604)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.spec.alpha.maybe_impl(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__48811){
return cljs.core.coll_QMARK_(G__48811);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846))], null),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)),cljs.spec.alpha.nilable_impl(new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","entity-attr!","com.wsscode.pathom.core/entity-attr!",2073654855,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"attribute","attribute",-2074029119)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","swap-entity!","com.wsscode.pathom.core/swap-entity!",819089173,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),cljs.core.fn_QMARK_,cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","collapse-error-path","com.wsscode.pathom.core/collapse-error-path",-1124133360,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.core.vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.vector_QMARK_,null,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,null,null));

cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.core","raise-errors","com.wsscode.pathom.core/raise-errors",77570572,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48812){
return cljs.core.map_QMARK_(G__48812);
})], null),(function (G__48812){
return cljs.core.map_QMARK_(G__48812);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null)]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,null,null));
} else {
}

//# sourceMappingURL=com.wsscode.pathom.core.js.map
